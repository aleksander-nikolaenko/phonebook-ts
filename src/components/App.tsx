import { Container } from "./Container";
import { ContactForm } from "./ContactForm";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}
