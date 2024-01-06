import { Component } from "react";
import Searchbar from "components/searchbar/Searchbar";
import ImageGallery from "components/image-gallery/ImageGallery";

class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    )
  }
}

export default App