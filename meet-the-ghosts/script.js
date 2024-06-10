const time = document.querySelector(".time")
const timeText = document.querySelector(".time p")
const containerGhosts = document.querySelector(".boxes")
const firstGhost = document.querySelector(".boxes .box-1")
const secondGhost = document.querySelector(".boxes .box-2")
const thirdGhost = document.querySelector(".boxes .box-3")
const lastGhost = document.querySelector(".boxes .box-4")
const ghosts = document.querySelectorAll(".boxes .box")

const setTime = () => {
  const date = new Date()
  const formattedDateString = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date)

  timeText.textContent = formattedDateString
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

const timeWidth = Math.round(parseInt(getComputedStyle(time).width))

const mainTl = gsap.timeline({ delay: 0.5 })

ghosts.forEach((ghost, i, arr) => {
  const xRightTransition =
    ghost.getBoundingClientRect().left -
    parseInt(getComputedStyle(document.body).paddingLeft)

  const xFromLeftTransition =
    ghost.getBoundingClientRect().left -
    parseInt(getComputedStyle(document.body).paddingLeft) -
    timeWidth

  const xLeftTransition =
    arr[arr.length - 1 - i].getBoundingClientRect().left -
    parseInt(getComputedStyle(document.body).paddingLeft)

  const yTopTransition =
    ghost.getBoundingClientRect().top -
    parseInt(getComputedStyle(document.body).paddingBottom)

  const yBottomTransition =
    ghost.getBoundingClientRect().top -
    (ghost.getBoundingClientRect().bottom -
      ghost.getBoundingClientRect().top +
      parseInt(getComputedStyle(document.body).paddingBottom))

  const tl = gsap.timeline()
  mainTl.add(tl)

  const firstTween = gsap.to(arr[arr.length - 1 - i], {
    x: xRightTransition,
    duration: 2,
    ease: "linear",
  })

  const secondTween = gsap.to(arr[arr.length - 1 - i], {
    y: yBottomTransition,
    duration: 1,
    ease: "linear",
  })

  const thirdTween = gsap.to(arr[arr.length - 1 - i], {
    x: -xLeftTransition,
    duration: 4,
    ease: "linear",
  })

  const fourthTween = gsap.to(arr[arr.length - 1 - i], {
    y: -yTopTransition,
    duration: 2,
    ease: "linear",
  })

  const fifthTween = gsap.to(arr[arr.length - 1 - i], {
    x: xFromLeftTransition,
    duration: 4,
    ease: "linear",
  })

  const sixthTween = gsap.to(arr[arr.length - 1 - i], {
    y: -timeWidth - parseInt(getComputedStyle(time).paddingBottom),
    duration: 0.5,
    ease: "linear",
  })

  const seventhTween = gsap.to(arr[arr.length - 1 - i], {
    x: xRightTransition,
    duration: 0.5,
    ease: "linear",
  })

  const eigthTween = gsap.to(arr[arr.length - 1 - i], {
    y: yBottomTransition,
    duration: 2,
    ease: "linear",
  })

  tl.add(firstTween)
  tl.add(secondTween)
  tl.add(thirdTween)
  tl.add(fourthTween)
  tl.add(fifthTween)
  tl.add(sixthTween)
  tl.add(seventhTween)
  tl.add(eigthTween)

  tl.then(() => {
    const newTl = gsap.timeline({
      repeat: -1,
    })

    newTl.add(thirdTween)
    newTl.add(fourthTween)
    newTl.add(fifthTween)
    newTl.add(sixthTween)
    newTl.add(seventhTween)
    newTl.add(eigthTween)
  })
})
