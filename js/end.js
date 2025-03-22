// Audio
const DoorOpen = new Audio("./audio/door.mp3"); 
const Rustle = new Audio("./audio/rustle.mp3"); 
const Woof = new Audio("./audio/Woof.mp3"); 
const walking = new Audio("./audio/walking.mp3"); 

function playSound(sound) {
    sound.currentTime = 0; // Restart sound if it’s already playing
    sound.play();
}


// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();


// Create a timeline animation with GSAP
var timeline = gsap.timeline();

// Set initial positions for images that need to be flipped
gsap.set("#Bush-Left2", { scaleX: -1 });
gsap.set("#Tree-Left2", { scaleX: -1 });
gsap.set("#Beanie-tail", { scaleX: -1 });
gsap.set("#Beanie-behind2", { scale:1.5 });


// End Scene 5E and 6: House
timeline.to("#House,#Beanie-sad", { duration: 100, ease: "power1.inOut", onStart: () => playSound(Woof)})
        //Arf! Arf! 1 fades in and out
        .to("#text2_1", { duration: 100, ease: "power1.inOut", onStart: () => playSound(Woof)}, "text2_1")
        .to("#text2_1", {rotation:(3, 3), opacity: 1, duration: 200, delay: 10, ease: "power1.inOut" },"text2_1")
        .to("#text2_1", { opacity: 0, duration: 150, delay: 10, ease: "power1.inOut" }, "text2_1out")
         //What your.. fades in and out
         .to("#text2_2", { duration: 200, ease: "power1.inOut" }, "text2_2")
         .to("#text2_2", { opacity: 1, duration: 200, ease: "power1.inOut" },"text2_2","+=10")
         .to("#text2_2", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
        //Beanie sad fades out
        .to("#Beanie-sad", { opacity:0, duration: 100, ease: "power1.inOut" })
        //Beanie tail fades in
        .to("#Beanie-tail", { opacity:1, duration: 100, ease: "power1.inOut" },"tail_in")
        //Arf! Arf! 2 fades in and out
        .to("#text2_1B", { duration: 100, ease: "power1.inOut" })
        .to("#text2_1B", {rotation:(3, 3), opacity: 1, duration: 200, delay: 10, ease: "power1.inOut" },"tail_in")
        .to("#text2_1B", { opacity: 0, duration: 150, ease: "power1.inOut" },"text2_1Bout","+=10")
        //Beanie tail fades in
        .to("#Beanie-tail", { opacity:0, duration: 100, ease: "power1.inOut" },"text2_1Bout")
        

        //Fade to black
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut" })
        //House zoom
        .to("#House", { y: "10vh", scale:1.2 , duration: 100, ease: "power1.inOut" },"fadein1")
        .to("#fade-to-black", { opacity: 1, duration: 100, ease: "power1.inOut" }, "fadein1")

         //text 3A fades in and out
         .to("#text3A", {  y: "-60vh", opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" },"text3A")
         .to("#text3A", { duration: 150, ease: "power1.inOut" }, "text3A")
         .to("#text3A", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
         //text 3B fades in and out
         .to("#text3B", { y: "-60vh", opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" },"text3B")
         .to("#text3B", { duration: 300, ease: "power1.inOut" }, "text3B")
         .to("#text3B", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)



        .to("#House", { opacity: 0, duration: 50, ease: "power1.inOut" })
        .to("#Beanie", { opacity: 0, duration: 50, ease: "power1.inOut" },"fadeout1")
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut" }, "fadeout1", "+=2")

        
        // Create a ScrollMagic scene this puts evertyhing together, triggers the animation when the scroll
// reaches the .container
var scene = new ScrollMagic.Scene({
    triggerElement: ".container", // Start when container enters viewport
    duration: "150%", // Total scroll distance before image fully moves
    triggerHook: 0, // Start effect at middle of viewport
    // reverse: true // resets when you scroll up (uneccessary)
})
.setPin(".container") // Pin the image for a moment
.setTween(timeline) // Attach the GSAP animation
// .addIndicators() // Uncomment to debug (shows scroll markers)
.addTo(controller);



let scrollSpeed = 0.05; // Lower = slower scroll speed
let targetScroll = window.scrollY;
let currentScroll = window.scrollY;
let isAnimating = false;

// Handle smooth scrolling when using mouse wheel or trackpad
window.addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevent default abrupt scrolling
    targetScroll += e.deltaY * scrollSpeed * 5; // Adjust multiplier for speed
    if (!isAnimating) {
        smoothScroll();
    }
}, { passive: false });

// Smooth scrolling function
function smoothScroll() {
    isAnimating = true;
    currentScroll += (targetScroll - currentScroll) * 0.1; // Easing effect
    window.scrollTo(0, currentScroll);

    if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScroll);
    } else {
        isAnimating = false;
    }
}

// Allow normal scrollbar dragging
window.addEventListener("scroll", () => {
    if (!isAnimating) {
        targetScroll = window.scrollY;
        currentScroll = window.scrollY;
    }
});



//Make the window load faster so there is no delay when beginning scrolling
window.onload = function (){
    controller.update(true);
};


//Add audio
const bgMusic = new Audio("./audio/BG music.mp3");
bgMusic.loop = true; // Ensure it loops
bgMusic.volume = 0.5; // Adjust volume if needed
bgMusic.play();

document.addEventListener("DOMContentLoaded", function () {
    let bgMusic = document.getElementById("bg-music");
    let soundIcon = document.getElementById("sound-icon");

    let isPlaying = false; // Start with music off

    soundIcon.addEventListener("click", function () {
        if (isPlaying) {
            bgMusic.pause();
            soundIcon.style.backgroundImage = "url('./img/Sound-off.png')";
        } else {
            bgMusic.play();
            soundIcon.style.backgroundImage = "url('./img/Sound-on.png')";
        }
        isPlaying = !isPlaying;
    });
});
