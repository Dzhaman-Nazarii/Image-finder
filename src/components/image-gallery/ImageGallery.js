import { Component } from 'react';
import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';
import Loader from 'components/loader/Loader';
import imagesAPI from '../../services/imagesAPI';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      if (prevName !== nextName) {
        this.setState({ images: [] });
      }
      imagesAPI
        .fetchImages(nextName, nextPage)
        .then(data => {
          const { hits, totalHits } = data;
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            status: 'resolved',
          }));
          this.props.handleImagesData(hits, totalHits);
        })
        .catch(() => {
          this.setState({ status: 'rejected' });
        });
    }
  }

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return null;
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
