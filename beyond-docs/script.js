gsap.fromTo(
  ".feet",
  { x: -5, repeat: -1, yoyo: true, duration: 0.3, ease: "linear" },
  { x: 5, repeat: -1, yoyo: true, duration: 0.3, ease: "linear" }
)

gsap.to(".ghost-4", {
  scale: 1.75,
  onComplete,
  onCompleteParams: ["Nico"],
})

function onComplete(name) {
  console.log("Completed", name)

  gsap.to(this, {
    rotate: 360,
  })
}
