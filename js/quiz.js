// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();


// Create a timeline animation with GSAP
var timeline = gsap.timeline();

// Set initial positions for images that need to be flipped
gsap.set("#Bush-Left2", { scaleX: -1 });
gsap.set("#Tree-Left2", { scaleX: -1 });
gsap.set("#Beanie", { opacity: 0 , x: "20vw"});


// Step 1: Pin the image for a short duration
timeline.to(".sky, #Tree-Middle, #Tree-Right, #Bush-Right, #Tree-Left, #Bush-Left, #BG", { duration: 4, ease: "power1.inOut" })

// Step 2: Move the image off-screen (one after another)
//Defintions: .to (adding to timeline), x = horizontal, y = vertical, scale = size, duration = time, ease = easing effect, "" = label, "+=1" = delay

//First Scene 
        .to("#Bush-Left", { x: "-100vw", y: "-10vh", scale: 1.5, duration: 50, ease: "power.inOut" }, "bush1", "+=2")
        .to("#Raccoon", { x: "20vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "animal1", "+=2")

//pinning the scene
        .to("#Raccoon", { duration: 20, ease: "power1.inOut" })


//Notebook 1: Raccoon
        .to("#Notebook-Raccoon", { y: "-50vw", scale: 1.5, duration: 17, ease: "power0.out" }, "notebook1", "+=2")
        //pinning the notebook
        .to("#Notebook-Raccoon", { duration: 50, ease: "power1.inOut" })
        .to("#Notebook-Raccoon", { y: "50vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "notebook2", "+=2")
        .to("#Raccoon", { x: "100vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "animal2", "+=2")
        .to("#Tree-Left", { x: "-100vw", scale: 1.5, duration: 5, ease: "power1.inOut" },"move1", "+=1")
        .to("#Bush-Right", { x: "100vw", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move1", "+=1")
        .to("#Tree-Right", { x: "150vw", y: "-10vh", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move1", "+=1") //y position change so it goes higher
        .to("#Tree-Middle", { x: "-100vw", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move1", "+=1")


// Second Scene 
// Second Scene: Zoom
    .to("#Bush-Left2", {  scaleX: -1.5, // Ensures the image stays flipped while scaling
    scaleY: 1.5,  // Only scales vertically
    duration: 17, ease: "power1.inOut" }, "move1", "+=2") 
    
        .to("#Tree-Left2", { scaleX: -1.5, scaleY: 1.5, duration: 17, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Bush-Right2", { scale: 1.5, duration: 17, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Tree-Right2", { scale: 1.5, duration: 17, ease: "power1.inOut" }, "move1","+=2") //y position change so it goes higher
        .to("#Tree-Middle2", { scale: 1, duration: 17, ease: "power1.inOut" }, "move1","+=2")
        

// Pinning the second scene
    .to("#Bush-Left2, #Tree-Left2, #Bush-Right2, #Tree-Right2, #Tree-Middle", { duration: 20, ease: "power1.inOut" })

//Second Scene: Move off screen
        .to("#Bush-Left2", { x: "100vw", y: "-10vh", scaleX: -1.5, scaleY: 1.5, duration: 50, ease: "power.inOut" }, "bush2", "+=2")
        .to("#Tree-Left2", { x: "100vw", scaleX: -1.5, scaleY: 1.5, duration: 17, ease: "power1.inOut" },"move2", "+=2")
        .to("#Bush-Right2", { x: "100vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "move2", "+=2")
        .to("#Tree-Right2", { x: "150vw", y: "-10vh", scale: 1.5, duration: 17, ease: "power1.inOut" }, "move2", "+=2") //y position change so it goes higher
        .to("#Tree-Middle2", { x: "-100vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "move2", "+=2")
        .to("#Beanie", { opacity: 1, x: "1vw", scale: 1, duration: 17, ease: "power1.inOut" }, "move2", "+=2")


// Step 3: skygradient and back image stays pinned longer, then fades out (order matters, top = animates first)
    .to("#BG", { opacity: 1, duration: 5, ease: "power1.inOut" }, "+=1"); //Prevent the fade out to continue with quiz interaction//
        



// Quiz Interactions

// Get the modal and close button
const modal = document.getElementById('quiz-lightbox');
const closeBtn = document.getElementById('close-btn');

// Function to open the modal (lightbox)
function openModal() {
    modal.style.display = 'flex'; // Show the modal
    modal.classList.add('fade-in'); // Add fade-in animation for better visibility transition

   // Disable background scroll
   document.body.style.overflow = 'hidden';
}


// Function to close the modal (lightbox)
function closeModal() {
    modal.style.display = 'none'; // Hide the modal
    modal.classList.remove('fade-in'); // Remove fade-in animation when closing
    
    // Enable background scroll again
     document.body.style.overflow = 'auto';
    }


// Close the modal when the close button is clicked
closeBtn.addEventListener('click', closeModal);

/* // Close the modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
}); 
*/

// Handle quiz form submission
const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
    if (selectedAnswer) {
        const answer = selectedAnswer.value;

        // Check if the answer is correct (Raccoon is the correct answer)
        let score = (answer === 'Raccoon') ? 1 : 0;

        // Display the result
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Your answer: ${answer}. ${score ? 'Correct! Time to go get it back!' : 'Note quite...check your notes and try again!'}`;

       // Optionally, close the modal after showing the result and unlocking scrolling
       setTimeout(() => {
        closeModal();  // Close the modal after 1 second
    }, 1000); 

    } else {
        alert("Please select an option!");
    }
});



// Quiz Lightbox Modal Transition Effects
// Add fade-in CSS class for smooth transitions
// Ensure to include CSS for `.fade-in` animation
/*
.fade-in {
    opacity: 0;
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
*/


// Get elements for full-screen gallery
const fullScreenGallery = document.getElementById('full-screen-gallery');
const fullScreenImg = document.getElementById('full-screen-img');
const closeFullScreenBtn = document.getElementById('close-fullscreen');

// Initialize the current image index
let fullScreenIndex = 0;

// Array of image sources
const imageSources = [
    './img/owl.png',
    './img/Notebook-Raccoon.png',
    './img/coyote.png',
    './img/opossum-notepad.png',
    './img/toad-notepad.png',
    './img/fox-notepad.png',
    // Add more image paths here
];

// Open Full-Screen Gallery
function openFullScreenGallery(index) {
    fullScreenIndex = index;  // Set the index of the clicked image
    fullScreenImg.src = imageSources[fullScreenIndex]; // Set the source of the full-screen image
    fullScreenGallery.style.display = 'flex'; // Show the full-screen gallery
}

// Close Full-Screen Gallery
closeFullScreenBtn.addEventListener('click', () => {
    fullScreenGallery.style.display = 'none'; // Hide the full-screen gallery
});

// Event listeners for navigation buttons in the full-screen gallery
document.getElementById('prev-btn').addEventListener('click', () => {
    fullScreenIndex--; // Go to the previous image
    if (fullScreenIndex < 0) fullScreenIndex = imageSources.length - 1; // Loop to last image
    fullScreenImg.src = imageSources[fullScreenIndex];
});

document.getElementById('next-btn').addEventListener('click', () => {
    fullScreenIndex++; // Go to the next image
    if (fullScreenIndex >= imageSources.length) fullScreenIndex = 0; // Loop to first image
    fullScreenImg.src = imageSources[fullScreenIndex];
});

// Create a ScrollMagic scene this puts everything together, triggers the animation when the scroll
// reaches the .container
var scene = new ScrollMagic.Scene({
    triggerElement: ".container", // Start when container enters viewport
    duration: "500%", // Total scroll distance before image fully moves
    triggerHook: 0, // Start effect at middle of viewport
})
.setPin(".container") // Pin the image for a moment
.setTween(timeline) // Attach the GSAP animation
.addTo(controller);

// Quiz Modal in Timeline
timeline.add("showQuizModal")
       .to("#Beanie", { opacity: 0, duration: 3, ease: "power1.inOut" }, "showQuizModal")
       .to("#BG", { opacity: 0.5, duration: 3, ease: "power1.inOut" }, "showQuizModal")
       .call(openModal, [], "showQuizModal");  // Show quiz when timeline hits this point

document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind("[data-fancybox]", {
        Toolbar: {
            display: ["zoom", "fullscreen", "close"] // Adds zoom & fullscreen buttons
        },
        Image: {
            zoom: true,     // Enable zooming
            wheel: "zoom"   // Scroll to zoom in/out
        },
        Thumbs: false,      // Hide thumbnails for a cleaner UI
        Keyboard: true,     // Enable keyboard navigation
        Slideshow: false    // No auto-slideshow
    });
});

let currentSound = null; // Store the currently playing audio
let correctSound = new Audio('./audio/win.mp3'); // Correct answer sound
let wrongSound = new Audio('./audio/lose.mp3'); // Wrong answer sound
let selectedAnswer = null; // Store the selected answer

document.querySelectorAll('.animal-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        // Stop the previous sound if it's playing
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0; // Reset the audio
        }

        // Play the new sound
        currentSound = new Audio(this.dataset.sound);
        currentSound.play();

        // Stop the sound after 3 seconds
        setTimeout(() => {
            if (currentSound) {
                currentSound.pause();
                currentSound.currentTime = 0;
            }
        }, 3000); // 3000ms = 3 seconds

        // Store the selected answer (dataset.correct will be "true" or "false")
        selectedAnswer = this.dataset.correct;

    });
});
