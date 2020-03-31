import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.contactListItem}>
        <span>{contact.name}: </span>
        <span>{contact.number}</span>
        <button
          className={styles.buttonDel}
          type="button"
          onClick={deleteContact}
          id={contact.id}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
