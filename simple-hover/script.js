const items = document.querySelectorAll(".item")
gsap.defaults({ duration: 0.2 })

items.forEach((item, i) => {
  const timeline = gsap
    .timeline({
      paused: true,
    })
    .to(item.querySelector(".text"), {
      color: "#fff",
      x: 5,
    })
    .to(
      item.querySelector(".dot"),
      {
        backgroundColor: "magenta",
        scale: 1.25,
      },
      0
    )

  item.addEventListener("mouseenter", () => timeline.play())

  item.addEventListener("mouseleave", () => timeline.reverse())
})
