const title = document.querySelector('h1')

const links = document.querySelectorAll('section a')

const body = document.querySelector('body')
const color = ['#2a9d8f', '#5A0001', '#415a77', '#606c38', '#173753', '#F45B69']
links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    title.innerText = link.getAttribute('alt')
    const rI = Math.floor(Math.random() * 6)

    body.classList.add('hovered')
    link.classList.add('hovered')

    body.style.setProperty('--text-color', color[rI])
  })

  link.addEventListener('mouseleave', () => {
    title.innerText = 'Grid Pan'
    body.classList.remove('hovered')
    link.classList.remove('hovered')

    body.removeAttribute('style')
  })
})
