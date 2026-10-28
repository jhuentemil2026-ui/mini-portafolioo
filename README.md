# Mini portafolio

Portafolio personal hecho con React, Vite y React Router para la Evaluación N°3 de Desarrollo de Frontend Área de ingenieria Universidad Católica de Temuco. Es una aplicación de una sola página con cinco secciones, un componente reutilizable con props y un formulario de contacto con validación.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm
- Git

## Instalación y ejecución

```bash
npm install
npm run dev
```

Luego abre la dirección que muestra la terminal (normalmente http://localhost:5173).

Para comprobar que compila: "npm run buil".

## Estructura de carpetas

```
mini-portafolio/
├── index.html
├── package.json
├── README.md
├── uso_ia.md
└── src/
    ├── main.jsx          # Punto de entrada, activa BrowserRouter
    ├── App.jsx           # Definición de rutas
    ├── index.css         # Estilos globales y variables CSS
    ├── components/
    │   ├── Header.jsx            # Menú con NavLink
    │   ├── Footer.jsx            # Nombre y año
    │   ├── Layout.jsx            # Header + Outlet + Footer
    │   ├── TarjetaProyecto.jsx   # Tarjeta reutilizable (props)
    │   └── FormularioContacto.jsx# Formulario con estado y validación
    └── pages/
        ├── Inicio.jsx
        ├── SobreMi.jsx
        ├── Habilidades.jsx
        ├── Proyectos.jsx
        └── Contacto.jsx
```

## Rutas

| Ruta | Página | Qué muestra |
|------|--------|-------------|
| `/` | Inicio | Nombre, rol, bienvenida y botón "Explorar" |
| `/sobre-mi` | Sobre mí | Qué estudio, mis intereses y mis metas |
| `/habilidades` | Habilidades | Habilidades con nivel y lista de herramientas |
| `/proyectos` | Proyectos | Tarjetas de proyectos con enlace a GitHub |
| `/contacto` | Contacto | Formulario con validación y confirmación |

## Dificultades y soluciones

1. **`react-router-dom` no estaba instalado.** Vite mostraba el error "Failed to resolve import". El comando de instalación se había pegado mal en la terminal. Lo resolví ejecutando `npm install react-router-dom` de nuevo.
2. **Nombre de repositorio duplicado.** Ya tenía un repositorio llamado `mini-portafolio` de una práctica, así que este quedó como `mini-portafolioo`.
3. **Carpetas con mayúscula inicial.** Se crearon como `Components` y `Pages`, pero los imports usan minúscula. Las renombré antes del commit para evitar problemas en otros sistemas.
4. **Archivos sin guardar.** Algunos cambios no se veían porque faltaba guardar (Ctrl + S). Aprendí a fijarme en el punto de las pestañas de VS Code.
5. **Código mezclado al pegar.** Quedó texto suelto y un arreglo duplicado en `Proyectos.jsx`, lo que dio errores de sintaxis. Lo corregí dejando `const proyectos` una sola vez.
6. **El formulario no validaba.** Tenía la versión sin validación y por eso no aparecían errores. Al reemplazarla por la versión completa funcionó.