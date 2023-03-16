(function () {
  function nombrar (nombre) {
    return nombre
  }

  function saludar (nombre) {
    console.info(`hola ${nombre}, un saludo`)
  }

  saludar(nombrar('andres saludos'))
})()
