// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";



const gallery = document.querySelector("ul")

const galleryList = galleryItems.map(e => 
    `<li class="gallery__link">
        <a class="gallery__item" href="${e.original}">
            <img class="gallery__image" src="${e.preview}" alt=${e.description} />
        </a>
    </li>`).join("")

    gallery.insertAdjacentHTML("afterbegin" , galleryList);

    new SimpleLightbox('.gallery a', { captionsData: 'alt' ,  captionDelay: 250});