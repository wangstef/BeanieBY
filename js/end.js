

// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();


// Create a timeline animation with GSAP
var timeline = gsap.timeline();

// Set initial positions for images that need to be flipped
gsap.set("#Beanie-sad-tailup", { scale:1.5 });




// Scene 5E
// Pinning
timeline.to("#staticwoods", { duration: 50, ease: "power1.inOut" })
        //its raccoon... fades in
        .to("#text5E", { opacity: 1, duration: 200, ease: "power1.inOut" })
        .to("#text5E", { opacity: 0, duration: 100, ease: "power1.inOut" })

        
        //Fade to black
        .to("#fade-to-black", { opacity: 1, duration: 100, ease: "power1.inOut" })
        //We follow beanie... fades in
        .to("#text6A_1", {  y: "-60vh", opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(nobeaniewait) })
        .to("#text6A_1", { duration: 150, ease: "power1.inOut" })
        .to("#text6A_1", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" }, "text6A_1out")
        // Turns out... fades in
        .to("#text6A_2", {  y: "-70vh", opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(nobeaniewait) },"text6A_1out")
        .to("#text6A_2", { duration: 150, ease: "power1.inOut" })
        .to("#text6A_2", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
        //Outside fades
        .to("#staticwoods", { opacity: 0 })
        .to("#House,#Beanie-happy", { opacity:1})
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut" })



// End Scene 6: House
        //After an long... fades in
        .to("#text6B_1", { opacity: 1, duration: 200, ease: "power1.inOut" })
        .to("#text6B_1", { opacity: 0, duration: 100, ease: "power1.inOut" })
  
        //text fades in
        .to("#text6B_2", { opacity: 1, duration: 200, ease: "power1.inOut" })
        .to("#text6B_2", { opacity: 0, duration: 100, ease: "power1.inOut" })
  

        //Fade to black
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut" })
        .to("#fade-to-black", { opacity: 1, duration: 100, ease: "power1.inOut" }, "fadein1")

        .to("#title", { opacity: 1, duration: 200, ease: "power1.inOut" })
        .to("#title", { opacity: 0, duration: 100, ease: "power1.inOut" })

        .to("#House", { opacity: 0, duration: 50, ease: "power1.inOut" })
        .to("#Beanie", { opacity: 0, duration: 50, ease: "power1.inOut" },"fadeout1")

        
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

