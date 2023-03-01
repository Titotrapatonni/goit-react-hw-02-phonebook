import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = newContact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  checkExistingContact = newContact => {
    const checked = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (checked.length !== 0) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.addNewContact(newContact);
    }
  };

  render() {
    const lowerCaseFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addNewContact={this.addNewContact}
          checkExistingContact={this.checkExistingContact}
        />
        <h2>Contacts</h2>
        <Filter filterContact={this.filterContact} value={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </div>
    );
  }
}
