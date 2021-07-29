import React, { useState } from 'react';

function ContactForm() {

  return (
    <section className="contact">
      <h1 className="section-title">Contact Me</h1>
      <div className="contactText">
        <p>
          Please direct inquiries to <a href = "mailto: clbrown0607@gmail.com">clbrown0607@gmail.com</a>.
          <br />          
          <br />
          Visit my GitHub profile: <a href="https://github.com/courtlb">courtlb</a>
          <br />
          <br />
          Connect with me on <a href="https://www.linkedin.com/in/courtney-brown-73442888/">LinkedIn</a>.
        </p>
      </div>
    </section>
  );
}

export default ContactForm;