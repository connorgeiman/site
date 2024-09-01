import PhotoSwipeLightbox from '../libs/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('../libs/photoswipe/photoswipe.esm.js')
});
lightbox.init();