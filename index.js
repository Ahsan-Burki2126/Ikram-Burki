// JS For navigationBar
let navToggle = document.querySelector(".navToggle");
let navLinksContainer = document.querySelector(".navLinksContainer");
let navToggleImg = document.querySelector(".navToggle img");

let isNavOpen = false; // Add a flag variable to track the state

navToggle.addEventListener("click", () => {
    isNavOpen = !isNavOpen; // Toggle the flag variable
    if (isNavOpen) {
        navToggleImg.src = "cross.png";
        
    } else {
        navToggleImg.src = "navToggle.png";
    }
    navLinksContainer.classList.toggle("navUtilityClass");
});



// projects section

// Get references to DOM elements
const gallery = document.querySelector('.gallery');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

// Function to scroll the gallery to the right
function scrollRight() {
    gallery.scrollBy({
        left: 400,
        behavior: 'smooth',
    });
}

// Function to scroll the gallery to the left
function scrollLeft() {
    gallery.scrollBy({
        left: -400,
        behavior: 'smooth',
    });
}

// Event listener for the next button
nextBtn.addEventListener('click',scrollRight);

// Event listener for the back button
backBtn.addEventListener("click",scrollLeft);

// testimonial section
let forwardBtn = document.querySelector(".forwardBtn");
let previousBtn = document.querySelector(".previousBtn");
let testimonialItemContainer = document.querySelector(".testimonialItemContainer");

forwardBtn.addEventListener("click", () => {
    const itemWidth = document.querySelector(".testimonialItem").clientWidth; // Get the width of a single item
    testimonialItemContainer.scrollBy({
        left: itemWidth,
        behavior: "smooth"
    });
});

previousBtn.addEventListener("click", () => {
    const itemWidth = document.querySelector(".testimonialItem").clientWidth; 
    testimonialItemContainer.scrollBy({
        left: -itemWidth, 
        behavior: "smooth"
    });
});


