<script>
    gsap.registerPlugin(ScrollMagic);

    const controller = new ScrollMagic.Controller();
    const pages = document.querySelectorAll('.scrapbook-page');

    pages.forEach((page) => {
        const timeline = gsap.timeline();

        timeline.fromTo(page, 
            { opacity: 0, x: 100 },  // Start off-screen to the right
            { opacity: 1, x: 0, ease: "power2.out", duration: 3 }
        );

        timeline.to(page, 
            { opacity: 0, x: -100, ease: "power2.in", duration: 0.2 },
            "+=1"  // Delay before swooping out
        );

        new ScrollMagic.Scene({
            triggerElement: page,
            triggerHook: 0.7,  // Triggers when the page reaches the middle of the screen
            duration: "200%",  // Controls how long the animation lasts (scroll-based)
        })
        .setTween(timeline)
        .addTo(controller);
    });
</script>
