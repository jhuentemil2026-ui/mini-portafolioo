import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section className="hero">
      <h1>Jesús Huentemil</h1>
      <h2>Estudiante del curso de Desarrollo Frontend</h2>
      <p>Bienvenido a mi portafolio. Aquí encontrarás lo que he aprendido durante el semestre en la asignatura de Frontend.</p>
      <Link to="/proyectos">Explorar</Link>
    </section>
  )
}

export default Inicio