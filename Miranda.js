// scrollTrigger not working with gsap locmotive


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  
});



var tl = gsap.timeline()

tl.to("#loader",{
    y : "100vh",
    scale : 0.6,
    duration : 0
})

tl.to("#loader",{
    y : "-50vh",
    duration : 1,
    delay : 1
})

tl.to("#loader",{
    y : "0vh",
    rotate : 360,
    scale:1,
    duration : 0.8
})

gsap.to("#nav",{
    duration : 0.2,
    height : "80px",
    scrollTrigger:{
        trigger : "#nav",
        scroller : "#main",
        markers : true,
        start: "top -8%",
        end : "top -10%",
        scrub : 1
    }
})
