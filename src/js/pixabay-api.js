import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_CONFIG = {
  BASE_URL: 'https://pixabay.com/api/',
  API_KEY: '47339247-cdcac9f8981a2af5215025f92',
};

export function serviceWeather(query) {
  const { BASE_URL, API_KEY } = API_CONFIG;

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#EF4040',
        position: 'topRight',
        iconUrl: '../img/iconalert.svg',
        maxWidth: '350',
        imageWidth: '24',
        transitionIn: 'flipInX',
      });
      throw new Error('Error fetching api');
    }
    return response.json();
  });
}
