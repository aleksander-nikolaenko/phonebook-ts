import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/contactsSlice";

import styles from "./ContactForm.module.css";

export function ContactForm() {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(getContacts);

  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const hasName = contacts.find(
      (contact) => contact.name === name || contact.number === number
    );
    if (hasName) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(contact));
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={nameInputId} className={styles.label}>
        <p className={styles.text}>Name</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Petr Petrov"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label htmlFor={numberInputId} className={styles.label}>
        <p className={styles.text}>Number</p>
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="+38-033-333-33-33"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required={true}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
