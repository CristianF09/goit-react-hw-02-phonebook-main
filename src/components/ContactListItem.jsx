import React from 'react';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button> {/* Buton pentru ștergere */}
    </li>
  );
};

export default ContactListItem;