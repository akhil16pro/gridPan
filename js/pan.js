const section = document.querySelector('section')

let aimX = 0.5
let aimY = 0.5
let currentX = 0.5
let currentY = 0.5

const move = (event) => {
  aimX = event.pageX / window.innerWidth
  aimY = event.pageY / window.innerHeight
}

const tween = (event) => {
  currentX = currentX + (aimX - currentX) * 0.05
  currentY = currentY + (aimY - currentY) * 0.05

  const sw = section.clientWidth - window.innerWidth
  const sh = section.clientHeight - window.innerHeight

  section.style.transform = `translate(${-1 * sw * currentX}px,${
    -1 * sh * currentY
  }px)`

  requestAnimationFrame(tween)
}

tween()

document.addEventListener('mousemove', move)
