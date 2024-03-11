import React, { FormEvent } from 'react';
import Navbar from '../Components/Navbar';
import './Contact.css';

const Contact: React.FC = () => {
  const handleContactMe = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      message: { value: string };
    };
    let message = target.message.value.trim();
    let name = target.name.value.trim();

    const mailtoLink = `mailto:abhisekhmukherjee101@gmail.com?subject=Enquiry from Website%20Form&body=${encodeURIComponent(
      `${message} \n\n\n\n\n Sender Name : ${name}`
    )}`;

    window.location.href = mailtoLink;
  };

  const clearContent = () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLInputElement;

    if (nameInput && messageInput) {
      nameInput.value = '';
      messageInput.value = '';
    }
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
            cols={60}
            rows={10}
            placeholder='Please enter your message here'
          ></textarea>
          <button type='submit'>Send Message</button>
          <br />
        </form>
        <button type='button' onClick={clearContent}>
          Clear Content
        </button>
      </div>
    </div>
  );
};

export default Contact;
