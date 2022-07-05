// eslint-disable-next-line no-unused-vars
import { Fancybox, Toolbar, Thumbs, Carousel } from "@fancyapps/ui";

const galleryButtons = Array.from(document.querySelectorAll('.js--gallery-button'));

if (galleryButtons.length) {
    galleryButtons.forEach(button => {
        button.addEventListener('click', (evt) => {
            const galleryName = evt.target.getAttribute('data-gallery');
            const gallerySelector = `#${galleryName} a`;
        
            Fancybox.fromOpener(gallerySelector, {
                startIndex: 1,
                preload: 0,
                Toolbar: false,
                Thumbs: false,
                closeButton: "top",
                dragToClose: false,
                groupAttr: false,
                template: {
                    closeButton: '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.094375 1.89391L1.03297 0.955309L7.59052 7.51286C9.15262 9.07495 11.6853 9.07495 13.2474 7.51286L19.8049 0.955309L20.7435 1.89391L14.186 8.45145C12.6239 10.0135 12.6239 12.5462 14.186 14.1083L20.7435 20.6659L19.8049 21.6044L13.2474 15.0469C11.6853 13.4848 9.15262 13.4848 7.59052 15.0469L1.03297 21.6044L0.0943756 20.6659L6.65192 14.1083C8.21402 12.5462 8.21402 10.0135 6.65192 8.45145L0.094375 1.89391Z" fill="white"/></svg>',
                },
                Carousel: {
                    Navigation: {
                      prevTpl:
                        '<svg width="44" height="6" viewBox="0 0 44 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.5 3.5L3.5 3.5L3.5 2.5L43.5 2.5L43.5 3.5Z" fill="white"/><path d="M3.5 3.5L3.5 2.5L3.5 -3.49691e-06L2.56656 1.24458C2.19397 1.74136 1.71084 2.14458 1.15542 2.42229L2.62268e-07 3L1.15542 3.57771C1.71084 3.85542 2.19397 4.25863 2.56656 4.75541L3.5 6L3.5 3.5Z" fill="white"/></svg>',
                      nextTpl:
                        '<svg width="44" height="6" viewBox="0 0 44 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5H40V3.5H0V2.5Z" fill="white"/><path d="M40 2.5V3.5V6L40.9334 4.75542C41.306 4.25863 41.7892 3.85542 42.3446 3.57771L43.5 3L42.3446 2.42229C41.7892 2.14458 41.306 1.74137 40.9334 1.24458L40 0V2.5Z" fill="white"/></svg>',
                    },
                  },
            });
        });
    });
}

Fancybox.bind("[data-fancybox='dialog']", {
    groupAttr: false,
    closeButton: "top",
    dragToClose: false,
    template: {
        closeButton: '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.094375 1.89391L1.03297 0.955309L7.59052 7.51286C9.15262 9.07495 11.6853 9.07495 13.2474 7.51286L19.8049 0.955309L20.7435 1.89391L14.186 8.45145C12.6239 10.0135 12.6239 12.5462 14.186 14.1083L20.7435 20.6659L19.8049 21.6044L13.2474 15.0469C11.6853 13.4848 9.15262 13.4848 7.59052 15.0469L1.03297 21.6044L0.0943756 20.6659L6.65192 14.1083C8.21402 12.5462 8.21402 10.0135 6.65192 8.45145L0.094375 1.89391Z" fill="white"/></svg>',
    },
    Toolbar: false,
    Thumbs: false,
    Carousel: {
        Navigation: false,
    }
  });