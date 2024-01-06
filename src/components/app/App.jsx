import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "components/searchbar/Searchbar";
import ImageGallery from "components/image-gallery/ImageGallery";

class App extends Component {
  state = {
    imageName: ''
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName })
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </>
    )
  }
}

export default App