document.addEventListener('DOMContentLoaded', () => {
  const optionsIconSettings = document.getElementsByClassName('options__icon--settings')[0]
  const optionsIconClose = document.getElementsByClassName('options__icon--close')[0]
  const optionsMenu = document.getElementsByClassName('options__menu')[0]
  const body = document.getElementsByClassName('body')[0]

  optionsIconSettings.addEventListener('click', () => {
    optionsMenu.classList.toggle('options__menu--show')
    body.classList.toggle('body__overflow-hidden')
  })

  optionsIconClose.addEventListener('click', () => {
    optionsMenu.classList.toggle('options__menu--show')
    body.classList.toggle('body__overflow-hidden')
  })

  body.addEventListener('click', (event) => {
    if (!optionsMenu.contains(event.target) && !optionsIconClose.contains(event.target) && !optionsIconSettings.contains(event.target)) {
      optionsMenu.classList.remove('options__menu--show')
      body.classList.remove('body__overflow-hidden')
    }
  })
})
