/*=============== SEARCH ===============*/
const searchContent = document.getElementById('search-content');
const searchIcon = document.getElementById('search-icon');
const searchCloser = document.getElementById('search-closer');

if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        searchContent.classList.add('show-search'); 
    });
}

if (searchCloser) {
    searchCloser.addEventListener('click', () => {
        searchContent.classList.remove('show-search'); 
    });
}
/*=============== LOGIN ===============*/
const loginContent = document.getElementById('login-content');
const loginIcon = document.getElementById('user-icon');
const loginCloser = document.getElementById('login-closer');

if (loginIcon) {
    loginIcon.addEventListener('click', () => {
        loginContent.classList.add('show-login'); 
    });
}

if (loginCloser) {
    loginCloser.addEventListener('click', () => {
        loginContent.classList.remove('show-login'); 
    });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header') // Selects the element with the ID 'header'
    this.scrollY >= 50 ? header.classList.add('shadow-header') // Adds the class if scrolled 50px or more
    : header.classList.remove('shadow-header'); // Removes the class if scrolled less than 50px
}
window.addEventListener('scroll', shadowHeader) // Calls `shadowHeader` whenever the page is scrolled
//Add .shadow-header {box-shadow:  0 2px 16px hsla(0, 0%, 0%, 0.1); } in your css

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home-swiper', {
    loop: true,  // Enables infinite looping of slides.
    spaceBetween: -24, // Sets the space between slides to -24 pixels.
    grabCursor: true, // Changes the cursor to a "grab" icon for better UX.
    slidesPerView: 'auto', // Automatically adjusts the number of slides visible based on container size.
    centeredSlides: 'auto', // Centers the active slide within the viewport.


    autoplay: {
        delay: 3000, // Automatically moves to the next slide after 3000ms (3 seconds).
        disableOnInteraction: false, // Continues autoplay even after user interaction.
    },

    breakpoints: {
        1220: { // Sets custom properties for screens 1220px or wider.
            spaceBetween: -32, // Adjusts the space between slides to -32 pixels for larger screens.
        }
    }
  
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured-swiper', {
    loop: true,  // Enables infinite looping of slides.
    spaceBetween: 16, // Sets the space between slides to 16 pixels.
    grabCursor: true, // Changes the cursor to a "grab" icon for better UX.
    slidesPerView: 'auto', // Automatically adjusts the number of slides visible based on container size.
    centeredSlides: 'auto', // Centers the active slide within the viewport.

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        breakpoints: {
        1150: { // Sets custom properties for screens 1150px or wider.
            slidesPerView: 4, // Displays 4 slides simultaneously in the viewport.
            centeredSlides: false, // Aligns the slides to the left (default behavior), instead of centering them.
        }
    }
  
});

/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/