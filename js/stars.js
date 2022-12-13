var stars = document.querySelectorAll('.star__item'),
  starsActive,
  starsSelect

stars.forEach((element, index) => {
  element.addEventListener('mouseover', () => {
    starsActive = Array.prototype.slice.call(stars, 0, index + 1)
    starsActive.forEach((star) => {
      star.classList.add('star__item_active')
    })
  })

  element.addEventListener('mouseout', () => {
    stars.forEach((star) => {
      star.classList.remove('star__item_active')
    })
  })

  element.addEventListener('click', () => {
    stars.forEach((star) => {
      star.classList.remove('star__item_select')
    })
    starsActive.forEach((star) => {
      star.classList.add('star__item_select')
    })
    starsSelect = starsActive
  })
})
