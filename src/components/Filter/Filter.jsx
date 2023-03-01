import PropTypes from 'prop-types';

export const Filter = ({ filterContact, value }) => {
  return (
    <label>
      Filter
      <input type="text" onChange={filterContact} value={value} />
    </label>
  );
};

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
