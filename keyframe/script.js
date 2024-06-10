const btnPlay = document.querySelector("#play")
const animation = gsap.timeline()

animation.from("h1", { y: 200, opacity: 0 }).to(".slime", {
  keyframes: {
    // default ease is power1.inOut
    "25%": { y: 0 },
    "50%": {
      y: -150,
      ease: "sine",
      scaleY: 1.15,
    },
    "75%": {
      y: 0,
      ease: "sine.in",
      scaleY: 0.9,
    },
    "80%": {
      scaleY: 1,
    },
    "100%": {
      x: 600,
      ease: "none",
    },
  },
  duration: 3,
  stagger: 0.5,
})

btnPlay.addEventListener("click", () => {
  animation.restart()
})
