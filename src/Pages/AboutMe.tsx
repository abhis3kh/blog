import React from 'react';
import './AboutMe.css';
import Navbar from '../Components/Navbar';
const AboutMe = () => {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <p className='bio'>
        <p>
          👋 Hello! myself Abhisekh, an RPA Developer with a solid track record
          at Johnson & Johnson delivering complex automation projects. With over
          3 years of experience, I have contributed to various functional areas,
          including Pharma, Medical Devices, and more with my Software
          Engineering Expertise. My passion lies in developing efficient
          software processes that drive operational excellence and deliver
          tangible results for organizations.
        </p>
        <ul>
          <em>Languages</em>: Javascript (ES6), VBA, Python, SQL, Shell
          Scripting, C#,
        </ul>
        <ul>
          <em>Tools</em>: Blue Prism, VSCode, Git, GitHub, JIRA, Confluence{' '}
        </ul>
        <ul>
          <em>Servers</em>: Apache Tomcat{' '}
        </ul>
        <ul>
          <em>Databases</em>: MySQL, MongoDB{' '}
        </ul>
        <ul>
          <em>Frameworks/API</em>: Express, React
        </ul>
        <ul>
          <em>Operating Systems</em>: Mac, Linux, Windows
        </ul>
      </p>
      <p className='roles'>
        <ul>
          🚀 Played as an RPA Developer, Where I automated various business
          processes at Johnson & Johnson across diverse functional areas, such
          as Pharma, Finance, and Medical Devices etc.
        </ul>
        <ul>
          🔧 Utilised my expertise in RPA tools like Blue Prism, SSIS, and MSSQL
          to automate complex business processes and enhance operational
          efficiencies.
        </ul>
        <ul>
          🤝 Collaborated closely with cross-functional teams and stakeholders
          to understand requirements at their best to provide best automation
          solution.
        </ul>
        <ul>
          💡 Demonstrated proficiency in developing custom automation,
          seamlessly integrating systems, and ensuring the accuracy and security
          of critical data by implementing the best coding standards.
        </ul>
        <ul>
          🏆 Successfully managed multiple projects simultaneously, adapting to
          dynamic business environments and delivering excellent results within
          agreed timelines.
        </ul>
        <ul>
          📚 Committed to staying abreast of industry trends and emerging
          technologies, continuously learning and expanding my skill set to
          remain at the forefront of my field.
        </ul>
        <ul>
          💪 Passionate about leveraging technology to drive operational
          excellence, cost reduction, and improved decision-making.
        </ul>
      </p>
      <p className='conclusion'>
        <strong>
          I welcome the opportunity to discuss my experience further and provide
          additional insights. Please feel free to contact me if you need any
          more information to discuss potential opportunities. Thank you for the
          visit. :)
        </strong>
      </p>
    </div>
  );
};

export default AboutMe;
