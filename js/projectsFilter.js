document.addEventListener('DOMContentLoaded', () => {
  getProject([])
  const projectsFilterInput = document.getElementsByClassName('projects-filter__item')
  for (const input of projectsFilterInput) {
    input.addEventListener('change', () => {
      const tagsChecked = getTagsForProjectFilterChecked()
      getProject(tagsChecked)
    })
  }
})

function getProject (tagsChecked) {
  const projects = document.getElementsByClassName('project')
  const projectsInScreen = []
  for (const project of projects) {
    let display = 'none'

    if (tagsChecked.length > 0) {
      const tagsItems = project.getElementsByClassName('tags__name')
      for (const tag of tagsItems) {
        if (tagsChecked.includes(tag.innerText.toLowerCase())) {
          display = 'flex'
          projectsInScreen.push(project)
          break
        }
      }
    } else {
      projectsInScreen.push(project)
      display = 'flex'
    }
    project.style.display = display
  }

  const body = document.getElementsByClassName('body')[0]

  if (window.innerWidth > 992) {
    if (projectsInScreen.length > 5) {
      body.style.height = `${145 + (15 * (projectsInScreen.length - 5))}rem`
    } else {
      console.log('restablecer')
      body.style.height = '150rem'
    }
  } else {
    body.style.height = '100%'
  }
}

function getTagsForProjectFilterChecked () {
  const projectsFilterItem = document.getElementsByClassName('projects-filter__item--title')
  const data = []
  for (const item of projectsFilterItem) {
    const input = document.getElementById(item.innerText)
    if (input.checked) {
      data.push(item.innerText.toLowerCase())
    }
  }
  return data
}
