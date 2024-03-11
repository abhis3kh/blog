import React from 'react';
import Navbar from '../Components/Navbar';
import './Contact.css';
// ! TODO : Add error handling for invalid inputs test
const Contact = () => {
  const handleContactMe = (e) => {
    e.preventDefault();
    let message = e.target['message'].value;
    let name = e.target['name'].value;
    // Trim the value
    message = message.trim();
    name = name.trim();
    // Create a mailto link
    const mailtoLink = `mailto:abhisekhmukherjee101@gmail.com?subject=Enquiry from Website%20Form&body=${encodeURIComponent(
      `${message} \n\n\n\n\n Sender Name : ${name}`
    )}`;

    // Open the default mail app
    window.location.href = mailtoLink;
  };
  const clearContent = () => {
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className='contact-info'>
        <h1>Contact ME</h1>
        <form onSubmit={handleContactMe} method='POST'>
          <label htmlFor='name'>Provide your name</label>
          <input type='text' id='name' placeholder='Please provide your name' />
          <label htmlFor='message'>Enter your Message </label>
          <textarea
            name='message'
            id='message'
            cols='60'
            rows='10'
            placeholder='Please enter your message here'
          ></textarea>
          <button type='submit'>Send Message</button>
          <br></br>
        </form>
        <button type='button' onClick={clearContent}>
          Clear Content
        </button>
      </div>
    </div>
  );
};

export default Contact;
