// Audio
const DoorOpen = new Audio("./audio/door.mp3"); 
const Rustle = new Audio("./audio/rustle.mp3"); 
const Woof = new Audio("./audio/Woof.mp3"); 
const walking = new Audio("./audio/walking_forest.mp3"); 
const swoosh = new Audio("./audio/swoosh.mp3"); 
const gasp = new Audio("./audio/gasp.mp3"); 
const What = new Audio("./audio/What!.mp3");
const mystery = new Audio("./audio/mystery.mp3"); 
const mystery2 = new Audio("./audio/mystery2.mp3"); 
const ghost = new Audio("./audio/ghost.mp3"); 
const waterdroplets = new Audio("./audio/waterdroplets.mp3"); 
const nobeaniewait = new Audio("./audio/NoBeanieWait.mp3"); 
const Hurry = new Audio("./audio/Hurry.mp3"); 
const Win = new Audio("./audio/win.mp3"); 
const Thereyouare = new Audio("./audio/Thereyouare.mp3"); 
const BigDogBark = new Audio("./audio/bigdogbark.wav"); 
const BeanieWhimper = new Audio("./audio/dogwhimpering.wav");
const Detective = new Audio("./audio/detectivemusic.mp3");
const StopSinging = new Audio("./audio/stopsinging.mp3");
const DunkDinner = new Audio("./audio/dunkmydinner.mp3");
const letmeeat = new Audio("./audio/letmeeat.mp3");
const Notebook = new Audio("./audio/notebook_ding.mp3"); 
const ToadSinging = new Audio("./audio/toad.mp3");
function playSoundLoop(times) {
    let count = 0;
    ToadSinging.play();
    ToadSinging.addEventListener("ended", function() {
        count++;
        if (count < times) {
            ToadSinging.currentTime = 0; // Reset to start
            ToadSinging.play(); // Play again
        }
    });
}
playSoundLoop(5); // Plays the sound 3 times

const DogRunning = new Audio("./audio/dogrunning.mp3");
const CanYouTellMe = new Audio("./audio/CanYouTellMe.mp3");
const HelloRaccoon = new Audio("./audio/HelloRaccoon.mp3");




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



// Opening Scene 1 


// Opening Scene 1: Fade to background gradient 
timeline.to("#opening-text", { 
    opacity: 0, 
    duration: 100, 
    ease: "power1.inOut", 
    scrollTrigger: {
        trigger: ".opening",
        start: "top top",  // Start fading when the top of .opening hits the top of the viewport
        end: "bottom top",  // Fully faded when the bottom of .opening reaches the top
        scrub: 1,  // Smooth scrolling effect
        
    }
}, "title")

.to("#sky", {y:"-100vh", duration: 800, ease: "power1.inOut"})
//text 1_1 fades in and out
.to("#text1_1", { opacity: 1, duration: 150, ease: "power1.inOut", onStart: () => playSound(waterdroplets) },"text1_1","+=10")
.to("#text1_1", { duration: 200, ease: "power1.inOut" }, "+=20")
.to("#text1_1", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut",  onStart: () => playSound(BeanieWhimper) },)

//text 1_1 fades in and out
.to("#text1_2", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" , onStart: () => playSound(ghost)},"text1_2")
.to("#text1_2", { duration: 200, ease: "power1.inOut"  }, "+=20")
.to("#text1_2", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" , onStart: () => playSound(DoorOpen) },)



.to("#fade-to-black", { 
    opacity: 1, 
    duration: 50, 
    ease: "power1.inOut"
    // scrollTrigger: {
    //     trigger: "#sky",
    //     start: "bottom bottom",  // When the bottom of #sky reaches the bottom of the viewport
    //     end: "bottom top",  // Fully faded when the bottom of #sky reaches the top of the viewport
    //     scrub: 2, // Smooth scroll effect
    // }
})
.to("#sky", { 
    opacity: 0, 
    duration: 50, 
    ease: "power1.inOut",}, "skyfade")

.to("#fade-to-black", { duration: 50, ease: "power1.inOut"},"fadetoblack1")
.to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut"});



// Scene 2: House
timeline.to("#House,#Beanie-sad", { opacity:1, duration: 100, ease: "power1.inOut"},"fadetoblack1")
        //Arf! Arf! 1 fades in and out
        .to("#text2_1", { duration: 100, ease: "power1.inOut" }, "text2_1")
        .to("#text2_1", {rotation:(3, 3), opacity: 1, duration: 200, delay: 10, ease: "power1.inOut" , onStart: () => playSound(Woof) },"text2_1")
        .to("#text2_1", { opacity: 0, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(Woof) }, "text2_1out")
         //What your.. fades in and out
         .to("#text2_2", { duration: 200, ease: "power1.inOut", onStart: () => playSound(Gasp) }, "text2_2")
         .to("#text2_2", { opacity: 1, duration: 200, ease: "power1.inOut" , onStart: () => playSound(What)},"text2_2","+=10")
         .to("#text2_2", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
        //Beanie sad fades out
        .to("#Beanie-sad", { opacity:0, duration: 100, ease: "power1.inOut", onStart: () => playSound(DogRunning)})
        //Beanie tail fades in
        .to("#Beanie-tail", { opacity:1, duration: 100, ease: "power1.inOut" },"tail_in")
        //Arf! Arf! 2 fades in and out
        .to("#text2_1B", { duration: 100, ease: "power1.inOut" , onStart: () => playSound(Woof)})
        .to("#text2_1B", {rotation:(3, 3), opacity: 1, duration: 200, delay: 10, ease: "power1.inOut", onStart: () => playSound(Woof) },"tail_in")
        .to("#text2_1B", { opacity: 0, duration: 150, ease: "power1.inOut" },"text2_1Bout","+=10")
        //Beanie tail fades in
        .to("#Beanie-tail", { opacity:0, duration: 100, ease: "power1.inOut" },"text2_1Bout")
        

        //Fade to black
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut", onStart: () => playSound(swoosh) })
        //House zoom
        .to("#House", { y: "10vh", scale:1.2 , duration: 100, ease: "power1.inOut"},"fadein1")
        .to("#fade-to-black", { opacity: 1, duration: 100, ease: "power1.inOut" }, "fadein1")
        .to("#House,#Beanie-sad", { opacity:0, duration: 100, ease: "power1.inOut"})

         //text 3A fades in and out
         .to("#text3A", {  y: "-60vh", opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(nobeaniewait) },"text3A")
         .to("#text3A", { duration: 150, ease: "power1.inOut" }, "text3A")
         .to("#text3A", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
         //text 3B fades in and out
         .to("#text3B", { y: "-60vh", opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(Hurry) },"text3B")
         .to("#text3B", { duration: 300, ease: "power1.inOut"}, "text3B")
         .to("#text3B", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)



        .to("#House", { opacity: 0, duration: 50, ease: "power1.inOut" })
        .to("#Beanie", { opacity: 0, duration: 50, ease: "power1.inOut" },"fadeout1")
        .to("#fade-to-black", { opacity: 0, duration: 50, ease: "power1.inOut" }, "fadeout1", "+=2" )

        

// Scene 3 Enter Woods: Pin the image for a short duration
timeline.to("#Tree-Middle, #Tree-Right, #Bush-Right, #Tree-Left, #Bush-Left, #BG", { duration: 200, ease: "power1.inOut", onStart: () => playSound(ToadSinging)})
       //bush shake
        .to("#Bush-Left", { 
            x: "random(-10, 10)", 
            y: "random(-20, 20)",
            duration: 15, 
            repeat: 8, // ⬅️ Adjust based on duration (0.2s * 15 ≈ 3 seconds)
            yoyo: true, 
            ease: "sine.inOut",
            onStart: () => playSound(Rustle)
        })
        .to("#Bush-Left", { duration: 100, ease: "power1.inOut" })

//Move the image off-screen (one after another)
//Definitions: .to (adding to timeline), x = horizontal, y = vertical, scale = size, duration = time, ease = easing effect, "" = label, "+=1" = delay

// Scene 4: Encounter Raccoon
        .to("#Bush-Left", { x: "-100vw", y: "-10vh", scale: 1.5, duration: 100, ease: "power.inOut" }, "bush1", "+=2")
          //text 4A fades in and out
          .to("#text4A", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(StopSinging)},"bush1")
          .to("#text4A", { duration: 100, ease: "power1.inOut" }, "text4A")
          .to("#text4A", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
          //text 4B fades in and out
          .to("#text4B", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" , onStart: () => playSound(DunkDinner)})
          .to("#text4B", { duration: 100, ease: "power1.inOut" })
          .to("#text4B", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" })

//pinning the scene
.to("#Raccoon", { duration: 100, ease: "power1.inOut" })
//Notebook 1: Raccoon
        .to("#Notebook-Raccoon", { y: "-50vw", scale: 1.5, duration: 60, ease: "power0.out", onStart: () => playSound(Notebook)}, "notebook1", "+=2")
        //pinning the notebook
        .to("#Notebook-Raccoon", { duration: 300, ease: "power1.inOut" }, "+=15")
        .to("#Notebook-Raccoon", { y: "10vw", scale: 1.5, duration: 100, ease: "power1.inOut" }, "notebook2", "+=2")
        
          //text 4C fades in and out
          .to("#text4C", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(HelloRaccoon) })
          .to("#text4C", { duration: 100, ease: "power1.inOut" },"+=20")
          .to("#text4C", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },"text4C")

          //Raccoon jumps
          .to("#Raccoon", { y: "-10vw",  duration: 10, rotation: -10, ease: "power0.out" }, "text4C")
          .to("#Raccoon", { y: "0vw", duration: 10, rotation: 0, ease: "power0.out" })
          //text 4D_1 fades in and out
          .to("#text4D_1", { duration: 100, ease: "power1.inOut" , onStart: () => playSound(letmeeat) })
          .to("#text4D_1", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" })
          //text 4D_2 fades in and out
          .to("#text4D_2", { duration: 100, ease: "power1.inOut" })
          .to("#text4D_2", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" })
          .to("#text4D_2", { scale: 1.2, duration: 50, repeat: 2, yoyo: true, ease: "sine.inOut",transformOrigin: "center center"})
          .to("#text4D_2", { duration: 100, ease: "power1.inOut" })
          //text 4D fades together
          .to("#text4D_2", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" }, "text4Dfadeout")
          .to("#text4D_1", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" }, "text4Dfadeout")

        //things leaves
        .to("#Raccoon", { x: "-100vw", scale: 1.5, duration: 50, ease: "power1.inOut", onStart: () => playSound(walking)},"move1", "+=1")
        .to("#Tree-Left", { x: "-100vw", scale: 1.5, duration: 50, ease: "power1.inOut" },"move1", "+=1")
        .to("#Bush-Right", { x: "100vw", scale: 1.5, duration: 50, ease: "power1.inOut" }, "move1", "+=1")
        .to("#Tree-Right", { x: "150vw", y: "-10vh", scale: 1.5, duration: 50, ease: "power1.inOut" }, "move1", "+=1") //y position change so it goes higher
        .to("#Tree-Middle", { x: "-100vw", scale: 1.5, duration: 50, ease: "power1.inOut" }, "move1", "+=1")


    

// Scene 3: Encounter Beanie
// Zoom
    .to("#Bush-Left2", {  scaleX: -1.5, // Ensures the image stays flipped while scaling
    scaleY: 1.5,  // Only scales vertically
    duration: 150, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Tree-Left2", { scaleX: -1.5, scaleY: 1.5, duration: 150, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Bush-Right2", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1", "+=2")
        .to("#Tree-Right2", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1","+=2") //y position change so it goes higher
        .to("#Tree-Middle2", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1","+=2")
        .to("#Bush-Left3", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1","+=2")
        .to("#Tree-Right3", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1","+=2")
        .to("#Bush-Right3", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1","+=2")
        .to("#Bush-Left4", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1","+=2")
        .to("#Beanie-behind", { scale: 1.5, duration: 150, ease: "power1.inOut" }, "move1","+=2")
        
        

// Pinning
    .to("#Bush-Left2, #Tree-Left2, #Bush-Right2, #Tree-Right2, #Tree-Middle", { duration: 200, ease: "power1.inOut" })
    
        
//Move to reveal beanie
        //make the back ones zoom too
        .to("#Bush-Left2,#Bush-Left2b", { x: "2vw", scaleX: -1.5, scaleY: 1.5, duration: 150, ease: "power.inOut", onStart: () => playSound(Win) }, "move2", "+=2")
        .to("#Tree-Middle2,#Tree-Middle2b", { x: "-15vw", scale: 1.5, duration: 150, ease: "power1.inOut" }, "move2", "+=2")
        .to("#Bush-Left2b", { opacity:1, duration: 150, ease: "power.inOut" }, "switchtoback","+=2")

        
        //text 5A fades in and out
        .to("#text5A", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(Thereyouare) })
        .to("#text5A", { duration: 150, ease: "power1.inOut" })
        .to("#text5A", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)

        

        //text 5B_1 fades in and out
        .to("#text5B_1", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(BigDogBark) })
        .to("#text5B_1", { duration: 150, ease: "power1.inOut" })
        //text 5B_2 fades in and out
        .to("#text5B_2", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" , onStart: () => playSound(BigDogBark) })
        .to("#text5B_2", { duration: 150, ease: "power1.inOut" })
        .to("#text5B_1, #text5B_2", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
        //text5C fades in and out
        .to("#text5C", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" , onStart: () => playSound(CanYouTellMe) })
        .to("#text5C", { duration: 150, ease: "power1.inOut" })
        .to("#text5C", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
        //text5D_1, then text5D_2, then text5D_3 fades in and then all out
        .to("#text5D_1", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" , onStart: () => playSound(Detective)})
        .to("#text5D_1", { duration: 150, ease: "power1.inOut" })
        .to("#text5D_2", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" })
        .to("#text5D_2", { duration: 150, ease: "power1.inOut" })
        .to("#text5D_3", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut" })
        .to("#text5D_3", { duration: 150, ease: "power1.inOut" })
        // .to("#text5D_1, #text5D_2, #text5D_3", { opacity: 0, duration: 100, delay: 10, ease: "power1.inOut" },)
        .to("#quiz_button", { opacity: 1, duration: 150, delay: 10, ease: "power1.inOut", onStart: () => playSound(mystery2) })





        

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