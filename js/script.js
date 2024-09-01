import { Natural, Masonry, Square } from '../natural-gallery-js/natural-gallery.js';

window.addEventListener('load', function () {

    // Get reference of gallery container
    var elementRef = document.getElementById('gallery');

    // Init gallery according to wanted format
    var gallery = new Natural(elementRef, { rowHeight: 200, ratioLimit: { min: 0.5, max: 1.5 } }); // or
    // var gallery = new Masonry(elementRef); // or
    // var gallery = new Square(elementRef);

    // Convert your format into natural-gallery's format.
    var items = [
        // {
        //     thumbnailSrc: '../img/IMG_0741.jpeg', // Replace with your thumbnail path
        //     enlargedSrc: '../img/IMG_0740.jpeg',   // Replace with your enlarged image path
        //     enlargedWidth: 1280,
        //     enlargedHeight: 1280,
        //     title: 'Image Title',
        //     link: 'https://www.google.com',
        //     linkTarget: '_parent',
        //     color: '#AAAAAA',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover'
        // },
        {
            thumbnailSrc: '../img/1.jpeg', 
            backgroundPosition: 'center',
        },
        {
            thumbnailSrc: '../img/2.jpeg',
        },
        {
            thumbnailSrc: '../img/3.jpeg', 
        },
        {
            thumbnailSrc: '../img/4.jpeg', 
        },
        {
            thumbnailSrc: '../img/5.jpeg', 
        },
        {
            thumbnailSrc: '../img/6.jpeg', 
        },
        {
            thumbnailSrc: '../img/7.jpeg', 
        },
        {
            thumbnailSrc: '../img/8.jpeg',
        },
        {
            thumbnailSrc: '../img/9.jpeg',
        },
        {
            thumbnailSrc: '../img/10.jpeg',
        },
        {
            thumbnailSrc: '../img/11.jpeg',
        },
        {
            thumbnailSrc: '../img/12.jpeg',
        },
        {
            thumbnailSrc: '../img/13.jpeg',
        },
        {
            thumbnailSrc: '../img/14.jpeg',
        },
        {
            thumbnailSrc: '../img/15.jpeg',
        }
    ];

    // Set the entire collection
    gallery.setItems(items);

    // Increment an existing collection (if needed)
    // gallery.addItems(itemsSet1);
    // gallery.addItems(itemsSet2);
    // gallery.addItems(itemsSet3);

    // Init the gallery
    gallery.init();
});

// Show only images 1-3 when button is clicked
// create a separate item set for each project
// show all by default, or the project item set depending on which project is clicked
// simpler first implementation: just create a different gallery for each project page
// https://workik.com/best-gallery-designs-for-websites-with-html-css-and-javascript
// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
// https://www.programiz.com/css/responsive-image-gallery-using-css-grid
// https://medium.com/@ehtmlu/css-image-grid-gallery-4ec8824560a1
// https://www.bram.us/2020/07/28/simple-image-gallery-with-display-grid-and-object-fit-cover/