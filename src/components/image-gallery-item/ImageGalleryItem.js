import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { id, src, tags } = this.props;
    return (
      <li key={id} className="GalleryItem">
        <img src={src} alt={tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
