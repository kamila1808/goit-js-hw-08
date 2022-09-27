import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';


const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup (images) {
    return images.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join("");
}
var lightbox = new SimpleLightbox('.gallery a', {  captionsData: "alt",
captionDelay: 250,
captionsPosition: "bottom", });