import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ContactsItem {
  id: string;
  name: string;
  number: string;
}
export type ContactsState = ContactsItem[];

const initialState: ContactsState = [
  { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
  { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
  { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
  { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (
      state,
      { payload }: PayloadAction<ContactsItem>
    ): ContactsState => {
      return [payload, ...state];
    },
    deleteContact: (
      state,
      { payload }: PayloadAction<string>
    ): ContactsState => {
      return state.filter(
        (contact: ContactsItem): boolean => contact.id !== payload
      );
    },
  },
});

export default contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
