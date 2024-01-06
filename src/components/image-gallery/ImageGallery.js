import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';
import { Component } from 'react';

class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
