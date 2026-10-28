import { useState } from 'react'

const valoresIniciales = {
  nombre: '',
  correo: '',
  mensaje: '',
}

function FormularioContacto() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValores({ ...valores, [name]: value })
    setEnviado(false)
  }

  function validar() {
    const nuevosErrores = {}

    if (!valores.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.'
    }

    if (!valores.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.correo.trim())) {
      nuevosErrores.correo = 'Ingresa un correo válido, por ejemplo nombre@correo.com.'
    }

    if (!valores.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio.'
    }

    return nuevosErrores
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nuevosErrores = validar()
    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length > 0) {
      setEnviado(false)
      return
    }

    setEnviado(true)
    setValores(valoresIniciales)
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={valores.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={valores.correo}
          onChange={handleChange}
        />
        {errores.correo && <p className="error">{errores.correo}</p>}
      </div>

      <div>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={valores.mensaje}
          onChange={handleChange}
        ></textarea>
        {errores.mensaje && <p className="error">{errores.mensaje}</p>}
      </div>

      <button type="submit">Enviar</button>

      {enviado && (
        <p className="confirmacion">
          ¡Gracias! Tu mensaje fue enviado correctamente.
        </p>
      )}
    </form>
  )
}

export default FormularioContacto