import React, { useState } from 'react';
import { nanoid } from 'nanoid';  // Use this import for nanoid
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number) {
      const newContact = {
        id: nanoid(), // Correct way to generate an ID
        name,
        number,
      };
      addContact(newContact); // Call this only after the form is submitted
      setName('');  // Clear inputs after submitting
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces."
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactForm;