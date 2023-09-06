import propTypes from 'prop-types';

export const Filter = ({ handleChange }) => {
  return (
    <div>
      <input
        id="outlined-basic"
        label="search"
        variant="outlined"
        onChange={handleChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};

Filter.propTypes = {
  handleChange: propTypes.func,
};
