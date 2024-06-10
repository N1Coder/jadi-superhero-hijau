const btnAnimate = document.querySelector("#animate")
const box1 = document.querySelector(".box-1")
const box2 = document.querySelector(".box-2")

const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

btnAnimate.addEventListener("click", (e) => {
  console.log(e)
  let x = randomNum(100, 500)
  const windowWidth = window.innerWidth
  const windowPaddingRight = parseInt(
    window.getComputedStyle(document.body).paddingRight
  )

  console.log(windowWidth)
  console.log(window.getComputedStyle(document.body).paddingRight)

  // gsap.to(".box-1", {
  //   x: windowWidth - box1.clientWidth - windowPaddingRight * 2,
  //   rotate: 360,
  //   backgroundColor: "#7f62ff",
  //   duration: 3,
  //   repeat: -1,
  //   yoyo: true,
  // })

  // gsap.to(".box-2", {
  //   x: windowWidth - box2.clientWidth - windowPaddingRight * 2,
  //   rotate: 360,
  //   backgroundColor: "#ffd200",
  //   duration: 3,
  //   delay: 2,
  // })

  gsap.to(".boxes .box", {
    x: (windowWidth - box2.clientWidth - windowPaddingRight * 2) * 0.5,
    rotate: 360,
    duration: 3,
    stagger: {
      // each: 1.25,
      amount: 1,
      from: "edges",
    },
  })

  console.log(`Translated x: ${x}px`)
})
