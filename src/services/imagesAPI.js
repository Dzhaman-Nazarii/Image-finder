const API_KEY = '1&key=37532394-4be77775868909c78ad8f61fa';

function fetchImages(imageName) {
  return fetch(
    `https://pixabay.com/api/?q=${imageName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No image found for ${imageName}`));
  });
}

const api = { fetchImages };
export default api;
