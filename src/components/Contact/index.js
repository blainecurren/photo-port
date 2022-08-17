import React, { useState } from "react";

const [formState, setFormState] = useState({
  name: "",
  email: "",
  message: "",
});

const { name, email, message } = formState;

function ContactForm() {
  // JSX

  function handleChange(e) {
    setFormState({ ...formState, name: e.target.value });
  }

  console.log(formState);

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={formState.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" defaultValue={formState.email} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={formState.message} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
