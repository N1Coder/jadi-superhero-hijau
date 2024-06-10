const hole = document.querySelector(".hole")
const shadow = document.querySelector(".shadow")
const herman = document.querySelector(".herman")

const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.75 })

tl.from(hole, {
  scale: 0,
  repeat: 1,
  yoyo: true,
})
  .fromTo(
    herman,
    {
      y: 170,
      scaleY: 1.75,
      ease: "power1.inOut",
    },
    {
      scaleY: 1,
      y: -175,
    },
    0.2
  )
  .to(
    herman,
    {
      y: -4,
      ease: "power1.in",
    },
    ">"
  )
  .to(herman, {
    scaleY: 0.8,
    scaleX: 1.25,
    yoyo: true,
    transformOrigin: "center bottom",
    duration: 0.2,
    repeat: 1,
  })
  .to(
    shadow,
    {
      opacity: 1,
      duration: 0.2,
    },
    0.7
  )
  .to(
    shadow,
    {
      ease: "power1.in",
      scaleX: 0.7,
    },
    ">"
  )

// GSDevTools.create({animation: tl})
