import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "components/searchbar/Searchbar";
import ImageGallery from "components/image-gallery/ImageGallery";
import Button from "components/button/Button";

class App extends Component {
  state = {
    imageName: '',
    page: 1,
    totalHits: 0,
    images: []
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName, page: 1, totalHits: 0 });
  }

  handleButtonMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  handleImagesData = (hits, totalHits) => {
    this.setState(prevState => ({ images: [...prevState.images, ...hits], totalHits }))
  }

  render() {
    const { images, imageName, page, totalHits } = this.state;
    const hasMore = images.length > 0 && images.length < totalHits;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={imageName} page={page} handleImagesData={this.handleImagesData} />
        <ToastContainer autoClose={3000} />
        {hasMore && <Button handleButtonMore={this.handleButtonMore} />}
      </>
    )
  }
}

export default App