import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

import "../css/styles.css";

// Resim galerisi verisi (örnek)
const images = [
    { preview: "../img/image1-small.jpg", original: "../img/image1-large.jpg", description: "Resim 1" },
    { preview: "../img/image2-small.jpg", original: "../img/image2-large.jpg", description: "Resim 2" },
    { preview: "../img/image3-small.jpg", original: "../img/image3-large.jpg", description: "Resim 3" }
];

// Galeri elemanlarını oluşturma
const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = images.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
    </li>
`).join("");

galleryContainer.innerHTML = galleryMarkup;

// SimpleLightbox başlatma
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
