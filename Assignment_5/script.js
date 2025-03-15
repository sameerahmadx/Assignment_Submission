const images = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg"
];
let currentIndex = 0;
const slider = document.getElementById("slider");
slider.src = images[currentIndex];

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.src = images[currentIndex];
}