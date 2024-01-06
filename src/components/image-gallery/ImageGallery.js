import { Component } from 'react';
import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';
import Loader from 'components/loader/Loader';
import imagesAPI from '../../services/imagesAPI';

class ImageGallery extends Component {
  state = {
    images: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      imagesAPI
        .fetchImages(nextName)
        .then(data => data.hits)
        .then(images => {
          this.setState({ images, status: 'resolved' });
        })
        .catch(() => {
          this.setState({ status: 'rejected' });
        });
    }
  }

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <h2>Write a name for the search</h2>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h2>Some went wrong</h2>;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          ))}
        </ul>
      );
    }
  }
}
export default ImageGallery;
