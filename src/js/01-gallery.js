// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this lineы

console.log(galleryItems);

const item = document.querySelector(".gallery")


const images = galleryItems.map(i => `<a class="gallery__link" href="${i.original}">
<img class="gallery__image" src="${i.preview}" alt="${i.description}" />
</a>`).join("")
item.insertAdjacentHTML("beforeend",images)

new SimpleLightbox('.gallery a', {captionDelay:250,captionPosition:"botton",captionsData:"alt"});
