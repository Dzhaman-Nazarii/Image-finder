import { useState } from 'react';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleSearch = evt => {
    setImageName(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (imageName.trim() === '') {
      return toast.error('Please enter name for search');
    }
    onSubmit(imageName);
    setImageName('');
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleSearch}
          value={imageName}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
