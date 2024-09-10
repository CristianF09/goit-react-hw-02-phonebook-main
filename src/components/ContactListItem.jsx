import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
      <button className={styles.button} onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;