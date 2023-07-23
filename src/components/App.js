import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    if (localStorage.getItem("contacts")) {
      this.setState(JSON.parse(localStorage.getItem("contacts")));
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state));
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const id = nanoid();

    let isSameName = false;

    this.state.contacts.map((contact) => {
      if (contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        alert(contact.name + " is already in contacts");
        isSameName = true;
      }
      return 0;
    });

    isSameName ||
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id }],
      }));

    event.target.reset();
  };

  handleFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = (id) => {
    this.setState((prevstate) => ({
      contacts: prevstate.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h1>Contacts</h1>
        <Filter onFilter={this.handleFilter} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
