const section = document.querySelector('section')

let aimX = 0.5
let aimY = 0.5
let currentX = 0.5
let currentY = 0.5

const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}

const move = (event) => {
  if (isTouchDevice()) {
    console.log(event.changedTouches[0] != undefined, 'hh')
    if (event.changedTouches[0] != undefined) {
      aimX = event.changedTouches[0].pageX / window.innerWidth
      aimY = event.changedTouches[0].pageY / window.innerHeight
    }
  } else {
    aimX = event.pageX / window.innerWidth
    aimY = event.pageY / window.innerHeight
  }
}

const tween = (event) => {
  currentX = currentX + (aimX - currentX) * 0.05
  currentY = currentY + (aimY - currentY) * 0.05

  const sw = section.clientWidth - window.innerWidth
  const sh = section.clientHeight - window.innerHeight
  if (isTouchDevice()) {
    section.style.transform = `translate(${-1 * sw * currentX}px,${
      -1 * sh * currentY
    }px)`
  } else {
    section.style.transform = `translate(${-1 * sw * currentX}px,${
      -1 * sh * currentY
    }px)`
  }

  requestAnimationFrame(tween)
}

const init = () => {
  tween()
  document.removeEventListener('mousemove', move)
  document.removeEventListener('touchstart', move)
  setTimeout(() => {
    document.addEventListener('touchstart', move)
    if (!isTouchDevice()) {
      document.addEventListener('mousemove', move)
    }
  }, 100)
}

window.onresize = init

init()
