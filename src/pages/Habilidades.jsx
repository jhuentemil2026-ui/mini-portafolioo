const habilidades = [
  { nombre: 'HTML', nivel: 'Intermedio' },
  { nombre: 'CSS', nivel: 'Intermedio' },
  { nombre: 'JavaScript', nivel: 'Básico' },
  { nombre: 'React', nivel: 'Básico' },
]

const herramientas = ['Git', 'GitHub', 'VS Code']

function Habilidades() {
  return (
    <section>
      <h1>Habilidades</h1>

      <div>
        {habilidades.map((h) => (
          <article key={h.nombre}>
            <h3>{h.nombre}</h3>
            <p>Nivel: {h.nivel}</p>
          </article>
        ))}
      </div>

      <h2>Herramientas</h2>
      <ul>
        {herramientas.map((herr) => (
          <li key={herr}>{herr}</li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades