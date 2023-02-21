import type { RootState } from "./store";

export const getContacts = (state: RootState) => state.contacts;

export const getFilterValue = (state: RootState) => state.filter;

export const getFilteredContacts = (state: RootState) => {
  return getContacts(state).filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(getFilterValue(state).toLowerCase().trim())
  );
};
