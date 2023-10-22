var cusr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})


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