// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();


// Create a timeline animation with GSAP
var timeline = gsap.timeline();

// Set initial positions for images that need to be flipped
gsap.set("#Bush-Left2", { scaleX: -1 });
gsap.set("#Tree-Left2", { scaleX: -1 });

// Opening Scene 


// Opening Scene: Fade to background gradient 

timeline.to("#opening-text", { 
    opacity: 0, 
    duration: 20, 
    ease: "power1.inOut", 
    scrollTrigger: {
        trigger: ".opening",
        start: "top top",  // Start fading when the top of .opening hits the top of the viewport
        end: "bottom top",  // Fully faded when the bottom of .opening reaches the top
        scrub: 1,  // Smooth scrolling effect
    }
}, "title")

//text 1 fades in and out
.to("#text1", { duration: 70, ease: "power1.inOut" }, "text1a")
.to("#text1", { opacity: 1, duration: 100, delay: 10, ease: "power1.inOut" },"text1a")
.to("#text1", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)




.to("#sky",  { duration: 320, ease: "power1.inOut" })

// 
.to("#fade-to-black", { 
    opacity: 1, 
    duration: 3, 
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#sky",
        start: "bottom bottom",  // When the bottom of #sky reaches the bottom of the viewport
        end: "bottom top",  // Fully faded when the bottom of #sky reaches the top of the viewport
        scrub: 1, // Smooth scroll effect
    }
})

.to("#sky", { 
    opacity: 0, 
    duration: 40, 
    ease: "power1.inOut", 
    scrollTrigger: {
        trigger: ".opening",
        start: "top top",  // Start fading when the top of .opening hits the top of the viewport
        end: "bottom top",  // Fully faded when the bottom of .opening reaches the top
        scrub: 1,  // Smooth scrolling effect
    }
}, "skyfade")
.to("#fade-to-black", { duration: 50, ease: "power1.inOut"})
.to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut"})



// Scene 1: House
timeline.to("#House", { duration: 100, ease: "power1.inOut" })
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut" })
        .to("#fade-to-black", { opacity: 1, duration: 50, ease: "power1.inOut" }, "fadein1")
        .to("#House", { opacity: 0, duration: 50, ease: "power1.inOut" },"fadeout1")
        .to("#Beanie", { opacity: 0, duration: 50, ease: "power1.inOut" },"fadeout1")
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut" }, "fadeout1", "+=2")

        

// Enter Woods: Pin the image for a short duration
timeline.to("#Tree-Middle, #Tree-Right, #Bush-Right, #Tree-Left, #Bush-Left, #BG", { duration: 70, ease: "power1.inOut" })


//Move the image off-screen (one after another)
//Definitions: .to (adding to timeline), x = horizontal, y = vertical, scale = size, duration = time, ease = easing effect, "" = label, "+=1" = delay

// Scene 2: Encounter Raccoon
        .to("#Bush-Left", { x: "-100vw", y: "-10vh", scale: 1.5, duration: 50, ease: "power.inOut" }, "bush1", "+=2")
        .to("#Raccoon", { x: "20vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "animal1", "+=2")

//pinning the scene
        .to("#Raccoon", { duration: 20, ease: "power1.inOut" })


//Notebook 1: Raccoon
        .to("#Notebook-Raccoon", { y: "-50vw", scale: 1.5, duration: 30, ease: "power0.out" }, "notebook1", "+=2")
        //pinning the notebook
        .to("#Notebook-Raccoon", { duration: 50, ease: "power1.inOut" })
        .to("#Notebook-Raccoon", { y: "50vw", scale: 1.5, duration: 40, ease: "power1.inOut" }, "notebook2", "+=2")
        
        .to("#Raccoon", { x: "100vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "animal2", "+=2")
        .to("#Tree-Left", { x: "-100vw", scale: 1.5, duration: 5, ease: "power1.inOut" },"move1", "+=1")
        .to("#Bush-Right", { x: "100vw", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move1", "+=1")
        .to("#Tree-Right", { x: "150vw", y: "-10vh", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move1", "+=1") //y position change so it goes higher
        .to("#Tree-Middle", { x: "-100vw", scale: 1.5, duration: 5, ease: "power1.inOut" }, "move1", "+=1")


// Scene 3: Encounter Beanie
// Zoom
    .to("#Bush-Left2", {  scaleX: -1.5, // Ensures the image stays flipped while scaling
    scaleY: 1.5,  // Only scales vertically
    duration: 17, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Tree-Left2", { scaleX: -1.5, scaleY: 1.5, duration: 17, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Bush-Right2", { scale: 1.5, duration: 17, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Tree-Right2", { scale: 1.5, duration: 17, ease: "power1.inOut" }, "move1","+=2") //y position change so it goes higher
        .to("#Tree-Middle2", { scale: 1.5, duration: 17, ease: "power1.inOut" }, "move1","+=2")

// Pinning
    .to("#Bush-Left2, #Tree-Left2, #Bush-Right2, #Tree-Right2, #Tree-Middle", { duration: 20, ease: "power1.inOut" })

//Move off screen
        .to("#Bush-Left2", { x: "100vw", y: "-10vh", scaleX: -1.5, scaleY: 1.5, duration: 50, ease: "power.inOut" }, "bush2", "+=2")
        .to("#Tree-Left2", { x: "100vw", scaleX: -1.5, scaleY: 1.5, duration: 17, ease: "power1.inOut" },"move2", "+=2")
        .to("#Bush-Right2", { x: "100vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "move2", "+=2")
        .to("#Tree-Right2", { x: "150vw", y: "-10vh", scale: 1.5, duration: 17, ease: "power1.inOut" }, "move2", "+=2") //y position change so it goes higher
        .to("#Tree-Middle2", { x: "-100vw", scale: 1.5, duration: 17, ease: "power1.inOut" }, "move2", "+=2")


// skygradient and back image stays pinned longer, then fades out (order matters, top = animates first)
    .to("#BG", { opacity: 0, duration: 5, ease: "power1.inOut" }, "+=1");
        
        
        
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

    //arrowkeys for scrolling
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowDown") {
            window.scrollBy({ top: 100, behavior: "smooth" }); // Scroll down smoothly
        } else if (event.key === "ArrowUp") {
            window.scrollBy({ top: -100, behavior: "smooth" }); // Scroll up smoothly
        }
    });
    