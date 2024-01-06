import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleSearch = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.imageName.trim() === '') {
      return toast.error('Please enter name for search');
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleSearch}
            value={this.state.imageName}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
