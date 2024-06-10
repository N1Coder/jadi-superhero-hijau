const timeline = gsap.timeline({
  defaults: { opacity: 0, ease: "back" },
})

const init = () => {
  timeline
    .from("#demo", { ease: "linear", autoAlpha: 0 })
    .from("h1", { x: 80 })
    .from("h2", { x: -80 })
    .from("p", { y: 30 })
    .from("button", { y: 30 })
    .from("#items > g", {
      scale: 0,
      stagger: 0.2,

      transformOrigin: "center",
    })
}

window.addEventListener("load", (e) => {
  init()
})
