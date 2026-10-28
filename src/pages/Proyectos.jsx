import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  {
    id: 1,
    titulo: 'Mini portafolio',
    descripcion: 'Portafolio personal hecho con React, Vite y React Router. Incluye navegación entre páginas, componentes reutilizables y un formulario de contacto con validación.',
    enlace: 'https://github.com/jhuentemil2026-ui/mini-portafolioo',
  },
  {
    id: 2,
    titulo: 'Taller 2 - ICINF1108',
    descripcion: 'Taller desarrollado para la asignatura de Backenbd. Mi participación: expone operaciones CRUD completas sobre estudiantes y mascotas. Tecnólogias: python, HTML + JS + Tailwind CSS (frontend estático)',
    enlace: 'https://github.com/AlonsolfDev/icinf1108-taller2-02',
  },
]

function Proyectos() {
  return (
    <section>
      <h1>Proyectos</h1>
      <div>
        {proyectos.map((p) => (
          <TarjetaProyecto
            key={p.id}
            titulo={p.titulo}
            descripcion={p.descripcion}
            enlace={p.enlace}
          />
        ))}
      </div>
    </section>
  )
}

export default Proyectos