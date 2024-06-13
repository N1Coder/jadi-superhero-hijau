const select = (el) => document.querySelector(el)
const selectAll = (el) => document.querySelectorAll(el)

const home = select("#home")
const candyStore = select("#candy")
const dogPark = select("#dogpark")
const school = select("#school")

const pause = select("#pause")
const progressSlider = select("#progressSlider")
const time = select("#time")

const animationOnUpdate = function () {
  progressSlider.value = this.progress()
  time.textContent = this.progress().toFixed(2)

  progressSlider.addEventListener("input", function () {
    animation.progress(this.value).pause()
  })

  progressSlider.addEventListener("change", function () {
    pause.textContent = "Play"
  })
}

const animation = gsap.to("#herman", {
  duration: 5,
  ease: "linear",
  motionPath: {
    path: "#motionpath",
    align: "herman",
  },
  onUpdate: animationOnUpdate,
  onComplete: () => (pause.textContent = "Play"),
})

pause.addEventListener("click", () => {
  animation.paused(!animation.paused())

  if (animation.progress() === 1) {
    animation.restart()
  }

  pause.textContent = animation.paused() ? "Play" : "Pause"
})

const animateTo = (target, progress) => {
  target.addEventListener("click", () => {
    animation.pause()
    pause.textContent = animation.paused() ? "Play" : "Pause"

    target === school
      ? gsap.to(animation, { progress: progress, ease: "bounce", duration: 3 })
      : gsap.to(animation, { progress: progress })
  })
}

animateTo(home, 0)
animateTo(candyStore, 0.5)
animateTo(dogPark, 0.9)
animateTo(school, 1)
