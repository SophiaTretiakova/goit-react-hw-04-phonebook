import React from 'react';

export const Filter: React.FC<{
  handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}> = ({ handleChange }) => {
  return (
    <div>
      <input
        id="outlined-basic"
        onChange={handleChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};
