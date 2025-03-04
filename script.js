document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();

    function addScrollEffect(entryId, soundFile) {
        var entry = document.getElementById(entryId);

        var scene = new ScrollMagic.Scene({
            triggerElement: `#${entryId}`,
            triggerHook: 0.7, // Triggers when 70% of viewport is scrolled
            reverse: true, // Allows it to disappear when scrolling up
        })
        .on("enter", function () {
            entry.classList.add("visible");
            entry.classList.remove("hidden");
            if (soundFile) {
                new Audio(soundFile).play();
            }
        })
        .on("leave", function (event) {
            if (event.scrollDirection === "REVERSE") {
                entry.classList.add("hidden");
                entry.classList.remove("visible");
            }
        })
        .addTo(controller);
    }

    // Apply effects to all notebook entries
    addScrollEffect("entry1", "rat-sound.mp3");
    addScrollEffect("entry2", "fox-sound.mp3");
    addScrollEffect("entry3", "owl-sound.mp3");
});
