import { useState } from 'react';
import Modal from 'components/modal/Modal';

const ImageGalleryItem = ({ id, src, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <li key={id} className="GalleryItem">
      <img src={src} alt={tags} onClick={toggleModal} loading="lazy" />
      {showModal && (
        <Modal closeModal={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
};

export default ImageGalleryItem;
