document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement

  const radioButtonsMode = document.querySelectorAll('input[name="select-mode"]')
  radioButtonsMode.forEach((radioButtonMode) => {
    radioButtonMode.addEventListener('change', () => {
      if (radioButtonMode.value === 'light') {
        root.style.setProperty('--background', '#F2F2F2')
        root.style.setProperty('--background-card', '#FFFFFF')
        root.style.setProperty('--font-1', '#333333')
        root.style.setProperty('--font-2', '#4f4f4f')
        root.style.setProperty('--font-3', '#828282')
        root.style.setProperty('--font-4', '#c4c4c4')
        console.log('light')
      } else {
        root.style.setProperty('--background', '#121212')
        root.style.setProperty('--background-card', '#373737')
        root.style.setProperty('--font-1', '#ffffff')
        root.style.setProperty('--font-2', '#e2e2e2')
        root.style.setProperty('--font-3', '#dbdbdb')
        root.style.setProperty('--font-4', '#949494')
        console.log('dark')
      }
    })
  })

  const radioButtonsColor = document.querySelectorAll('input[name="select-color"]')
  radioButtonsColor.forEach((radioButtonColor) => {
    radioButtonColor.addEventListener('change', () => {
      root.style.setProperty('--color', radioButtonColor.value)
    })
  })
})
