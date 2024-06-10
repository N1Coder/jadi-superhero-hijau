const time = document.querySelector(".time p")
const containerGhosts = document.querySelector(".boxes")
const firstGhost = document.querySelector(".boxes .box-1")
const lastGhost = document.querySelector(".boxes .box-4")

const setTime = () => {
  const date = new Date()
  const formattedDateString = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date)

  time.textContent = formattedDateString
}

const getSeconds = () => {
  const date = new Date()
  return date.getSeconds()
}

setTime()

setInterval(setTime, 1000)

gsap.fromTo(
  ".feet",
  { x: -5, repeat: -1, yoyo: true, duration: 0.3, ease: "linear" },
  { x: 5, repeat: -1, yoyo: true, duration: 0.3, ease: "linear" }
)

const bodyWidthWithPadding =
  firstGhost.getBoundingClientRect().left -
  parseInt(getComputedStyle(document.body).paddingRight)

const ghosts = ".boxes .box"
const durationTimeDelay = 5

const ghostsTimeline = gsap.timeline().fromTo(
  ghosts,
  {
    x: -bodyWidthWithPadding,
  },
  {
    x: bodyWidthWithPadding,
    ease: "linear",
    duration: durationTimeDelay,
    repeat: -1,
    yoyo: true,
  }
)

const pupilTimeline = gsap
  .timeline({
    repeat: -1,
    repeatDelay: durationTimeDelay,
  })
  .to(".pupil", {
    x: -7,
    duration: 0.3,
    ease: "power1.inOut",
    delay: durationTimeDelay,
    yoyo: true,
    overwrite: true,
  })

const ghostTimeline = gsap
  .timeline()
  .from("body", { opacity: 0, duration: 1.25 })
  .from(".title", {
    opacity: 0,
    scale: 0,
    ease: "back",
    // duration: 5,
  })
  .from(".boxes .box", {
    opacity: 0,
    scale: 0,
    stagger: 0.225,
    ease: "back",
    // duration: 4,
  })
  // .add("time") // label from skip animation timeline
  .from(
    ".time",
    {
      xPercent: 100,
      opacity: 0,
      ease: "back",
      duration: 0.75,
    },
    "<"
  )

// ghostTimeline.play("time")
