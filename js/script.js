// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create a timeline animation with GSAP
var timeline = gsap.timeline();

// Step 1: Pin the image for a short duration
timeline.to(".sky, #Tree-Middle, #Tree-Right, #Bush-Right, #Tree-Left, #Bush-Left, #BG", { duration: 4, ease: "power1.inOut" });

// Step 2.1: Move the image off-screen to the left (at the same time)
// timeline.to("#hill2, #hill1", { x: "-100vw", duration: 2, ease: "power1.inOut" });

// Step 2.2: Move the image off-screen to the left (one after another)
timeline.to("#Bush-Left", { x: "-100vw", y: "-10vh", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move0", "+=1")
.to("#Tree-Left", { x: "-100vw", scale: 1.5, duration: 5, ease: "power1.inOut" },"move1", "+=1")
        .to("#Bush-Right", { x: "100vw", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move2", "+=1")
        .to("#Tree-Right", { x: "150vw", y: "-10vh", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move2", "+=1") //y position change so it goes higher
        .to("#Tree-Middle", { x: "-100vw", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move4", "+=1");


// Step 3: skygradient and back image stays pinned longer, then fades out (order matters, top = animates first)
timeline.to("#BG", { opacity: 0, duration: 1.5, ease: "power1.inOut" }, "+=1")
        .to(".sky", { opacity: 0, duration: 2, ease: "power1.inOut" }, "+=1");



// // Step 4: Move everything back when scrolling up (uneccessary)
// timeline.add("moveBack") // Label for reverse motion
//         .to("#top-img", { x: "0vw", duration: 2, ease: "power1.inOut" }, "moveBack")
//         .to("#bottom-img", { x: "0vw", duration: 2, ease: "power1.inOut" }, "moveBack")
//         .to("#middle-img", { opacity: 1, duration: 1.5, ease: "power1.inOut" }, "-=1");

 
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






// Smooth scroll effect to slow down scroll speed
    let scrollSpeed = 0.5; // Adjust to control speed (lower = slower)
    let currentScroll = 0;
    let targetScroll = 0;

    window.addEventListener("wheel", (e) => {
        e.preventDefault(); // Prevent default scroll behavior
        targetScroll += e.deltaY * scrollSpeed; // Apply custom scroll speed
    }, { passive: false });

    function smoothScroll() {
        currentScroll += (targetScroll - currentScroll) * 0.1; // Smooth effect
        window.scrollTo(0, currentScroll);
        requestAnimationFrame(smoothScroll);
    }
    smoothScroll();