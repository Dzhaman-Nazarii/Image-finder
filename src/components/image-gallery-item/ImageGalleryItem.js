import { Component } from 'react';
import Modal from 'components/modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { id, src, tags, largeImageURL } = this.props;
    return (
      <li key={id} className="GalleryItem">
        <img src={src} alt={tags} onClick={this.toggleModal} loading="lazy" />
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
