import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "components/searchbar/Searchbar";
import ImageGallery from "components/image-gallery/ImageGallery";
import Button from "components/button/Button";

const App = () => {

  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [images, setImages] = useState([])

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setPage(1)
    setTotalHits(0)
  }

  const handleButtonMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  const handleImagesData = (hits, totalHits) => {
    setImages(prevImages => [...prevImages, ...hits])
    setTotalHits(totalHits)
  }

    const hasMore = images.length > 0 && images.length < totalHits;
    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery imageName={imageName} page={page} handleImagesData={handleImagesData} />
        <ToastContainer autoClose={3000} />
        {hasMore && <Button handleButtonMore={handleButtonMore} />}
      </>
    )
}

export default App