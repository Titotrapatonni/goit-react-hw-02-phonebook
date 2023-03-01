export const Filter = ({ filterContact, value }) => {
  return (
    <label>
      Filter
      <input type="text" onChange={filterContact} value={value} />
    </label>
  );
};
