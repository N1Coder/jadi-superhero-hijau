const btnPlay = document.querySelector("#play")
const animation = gsap.timeline()

animation.from("h1", { y: 200, opacity: 0 }).to(".slime", {
  keyframes: {
    "20%": { scale: 0.5, rotate: 0 },
    "50%": { scale: 2 },
    "90%": { rotate: 360 },
    "100%": { scale: 1 },
  },
  duration: 2,
  transformOrigin: "center",
})

btnPlay.addEventListener("click", () => {
  animation.restart()
})
