import asyncio
import aiohttp
from bs4 import BeautifulSoup
import json
import os
import random
import sys
import requests

def google_search(query, api_key, cx, num_results):
    base_url = "https://www.googleapis.com/customsearch/v1"
    all_results = set()

    for start_index in range(1, min(num_results + 1, 101), 10):
        params = {
            "q": query,
            "key": api_key,
            "cx": cx,
            "start": start_index,
            "num": 10
        }

        response = requests.get(base_url, params=params)
        
        if response.status_code == 200:
            data = response.json()
            for item in data.get('items', []):
                all_results.add(item['link'])
            if len(all_results) >= num_results:
                break
        else:
            print(f"Error in API call: {response.status_code}")
            break

    return list(all_results) #for making it iterable

def ensure_file_exists(filename):
    if not os.path.isfile(filename):
        with open(filename, "w") as f:
            f.write("")
        print(f"{filename} created.")

def write_urls_to_file(urls, filename):
    ensure_file_exists(filename)
    with open(filename, "w") as f:
        for url in urls:
            f.write(url + "\n")

async def fetch_url_content(session, url, sem):
    async with sem:
        try:
            async with session.get(url) as response:
                if response.status == 200:
                    return await response.text()
                else:
                    print(f"Failed to fetch {url}: {response.status}")
                    return None
        except Exception as e:
            print(f"Error fetching {url}: {str(e)}")
            return None

async def throttle(delay):
    await asyncio.sleep(delay)

def search_keywords_in_content(content, keywords):
    results = {}
    for keyword in keywords:
        results[keyword] = keyword in content
    return results

async def main(recipient_name, output_filename, json_filename, api_key, cx):
    num_results = 20

    keywords = [
        "Possession of controlled substance",
        "Suspicious orders",
        "Settlement",
        "Addiction to controlled substance",
        "Complaint vs respondent",
        "Highly addictive drugs",
        "Record keeping violations",
        "Failure to report",
        "Monitoring algorithms",
        "Highly unusual, controlled substance orders",
        "Civil enforcement action",
        "Unusual frequency",
        "Violated obligation",
        "Opioid addictions",
        "Perceived discrepancies",
        "Opioid diversion",
        "Record keeping deficiencies",
        "Excess quantities of drugs",
        "Prescription drug misuse",
        "Non-existent license",
        "Lawsuit",
        "Robbery",
        "Break In",
        "Pending Actions",
        "Legal Actions",
        "DEA",
        "DOJ",
        "Arrest",
        "Scandal",
    ]

    ensure_file_exists(output_filename)

    search_results = google_search(recipient_name, api_key, cx, num_results)


    if not search_results:
        print("No search results found.")
        return 0

    write_urls_to_file(search_results, output_filename)

    sem = asyncio.Semaphore(5)
    async with aiohttp.ClientSession() as session:
        tasks = []

        for url in search_results:
            print(f"Checking URL: {url}")
            tasks.append(fetch_url_content(session, url, sem))
            await throttle(random.uniform(1, 3))

        contents = await asyncio.gather(*tasks)

        matching_data = {}
        for i, content in enumerate(contents):
            if content:
                keyword_results = search_keywords_in_content(content, keywords)
                if any(keyword_results.values()):
                    found_keywords = [keyword for keyword, found in keyword_results.items() if found]
                    matching_data[search_results[i]] = found_keywords

    ensure_file_exists(json_filename)

    with open(json_filename, "w") as json_file:
        json.dump(matching_data, json_file, indent=4)
    print(f"Matched URLs saved to {json_filename}")

    return "Success"

if __name__ == "__main__":
    recipient_name = "Abhisekh Mukherjee"
    json_filename = 'jsonUrls.json'
    output_filename = "Urls.txt"
    api_key = "ENTER YOUR KEY"
    cx = "ENTER YOUR ENGINE ID"
    result = asyncio.run(main(recipient_name, output_filename, json_filename, api_key, cx))

    # if len(sys.argv) == 6:
    #     try:
    #         recipient_name = sys.argv[1]
    #         json_filename = sys.argv[2]
    #         output_filename = sys.argv[3]
    #         api_key = sys.argv[4]
    #         cx = sys.argv[5]

    #         result = asyncio.run(main(recipient_name, output_filename, json_filename, api_key, cx))
    #     except Exception as exc:
    #         result = str(exc)
    #     print(result)
    # else:
    #     print("Please provide correct Arguments: recipient_name, json_filename, output_filename, api_key, cx")
