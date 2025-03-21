
// Quiz Interactions

// Get the modal and close button
const modal = document.getElementById('quiz-lightbox');


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
