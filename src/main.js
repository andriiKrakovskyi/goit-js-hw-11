import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { serviceWeather } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const formSearch = document.querySelector('#myForm');
const gallery = document.querySelector('#gallery');

const loader = document.querySelector('#loader');

const showLoader = () => loader.classList.remove('hidden__css');
const hideLoader = () => loader.classList.add('hidden__css');

let lightbox;

formSearch.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const input = event.target.elements.data_input;
  const trimmedInput = input.value.trim();

  if (trimmedInput.length === 0) {
    iziToast.show({
      message: 'Please enter a value.',
      messageColor: '#2e2f42',
      messageSize: '16px',
      messageLineHeight: '24px',
      backgroundColor: '#f2ff00',
      position: 'topRight',
      transitionIn: 'flipInX',
    });
    return;
  }
  showLoader();

  serviceWeather(trimmedInput)
    .then(data => {
      gallery.innerHTML = createMarkup(data.hits);

      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery__link', {
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
      }
    })
    .catch(error => error.message)
    .finally(() => {
      event.target.reset();
      hideLoader();
    });
}
