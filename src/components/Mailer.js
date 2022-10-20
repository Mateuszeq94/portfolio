import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Mailer.css";

export const Mailer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fdfdbgz",
        "template_hbbllew",
        e.target,
        "OcqqEzHVIzbg36pUr"
      )
      .then((res) => {
        setEmail("");
        setMessage("");
        setIsSending(true);
      })
      .catch((err) => console.log(err));
  };

  return isSending ? (
    <h1 className="thanks">Thank you for your Message!</h1>
  ) : (
    <div className="container">
      <h1>Contact Form</h1>
      <form className="form" onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter your name"
          required={true}
        />
        <label>Email</label>
        <input
          type="text"
          name="userEmail"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
          required={true}
        />
        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Enter your message"
          required={true}
        />
        <input
          type="submit"
          value="SEND"
          className="form-control btn btn-primary"
        />
      </form>
    </div>
  );
};
