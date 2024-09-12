import React from 'react';
import ContactListItem from './ContactListItem'; // Adjust path as needed
import styles from './ContactList.module.css'; // Adjust path as needed

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;