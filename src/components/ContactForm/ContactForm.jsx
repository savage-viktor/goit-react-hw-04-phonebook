import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = ({ target: { name, value } }) => {
    // console.log(target);
    this.setState({ [name]: value });
  };

  render() {
    const { onSubmit } = this.props;
    const { name } = this.state.name;
    const { number } = this.state.number;

    return (
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            onInput={this.handleInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            value={name}
            required
          />
        </label>
        <label>
          Number
          <input
            onInput={this.handleInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
