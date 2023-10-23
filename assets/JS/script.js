var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(event) {
    crsr.style.left = event.clientX + "px";
    crsr.style.top = event.clientY + "px";
    blur.style.left = event.clientX - 250 + "px";
    blur.style.top = event.clientY - 250 + "px";
});


gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor :"#000",
    // duration:0.5,
    // height:"110px",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})