// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const videoContainer = document.querySelector(".video-container")
const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click", function () {
    // saying if btn doesn't have a slide class then add it otherwise remove it
   if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    // since its automatically on play putting the pause within if statement will slide it to the pause button
    videoContainer.pause();
   } else {
    // removing the slide class and going back to the default play function
    switchBtn.classList.remove("slide");
    videoContainer.play();
   }
});

// preloader
const preloader = document.querySelector(".preloader");

// window is called to get the initial website to load...diplay preloader when page is loading by default then adding hide when page loads
window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
});