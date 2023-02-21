import React from "react";
import { useAppSelector } from "hooks/redux-hooks";
import { getFilteredContacts } from "redux/selectors";
import { ContactsItem } from "./ContactsItem";

import styles from "./ContactsList.module.css";

export function ContactsList() {
  const contacts = useAppSelector(getFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
