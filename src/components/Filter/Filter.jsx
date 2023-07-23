function Filter({ onFilter }) {
  return (
    <label>
      Find contact by name
      <input
        onChange={onFilter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
      />
    </label>
  );
}
export default Filter;
