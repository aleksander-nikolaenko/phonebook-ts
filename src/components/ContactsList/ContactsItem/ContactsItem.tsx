import React from "react";
import { useAppDispatch } from "hooks/redux-hooks";
import { deleteContact } from "redux/contactsSlice";

import styles from "./ContactsItem.module.css";

type ContactsItemProps = {
  id: string;
  name: string;
  number: string;
};

export function ContactsItem({ id, name, number }: ContactsItemProps) {
  const dispatch = useAppDispatch();

  const handleDeleteContact = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <button
        className={styles.button}
        type="submit"
        onClick={() => handleDeleteContact(id)}
      >
        &#128503;
      </button>
      <div className={styles.wrapper}>
        <p className={styles.text}>&#128447;&nbsp;&nbsp;{name}</p>
        <p className={styles.number}>&#9742;&nbsp;&nbsp;{number}</p>
      </div>
    </li>
  );
}
