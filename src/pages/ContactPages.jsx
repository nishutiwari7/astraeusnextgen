import React from "react";
import "./ContactPages.css"; // External CSS file

const ContactPage = () => {
  return (
    <div className="contact-container" id="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <main className="contact-main">
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </main>
      <footer className="contact-footer">
        <p>© 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
