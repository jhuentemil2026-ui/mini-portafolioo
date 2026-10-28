# Declaración de uso de IA

## IA usada
Claude, de Anthropic, a través de la aplicación web.

## Modelo
Claude Sonnet 5.5.

## Prompts realizados
1. Le compartí las instrucciones de la evaluación y pedí que me guiara paso a paso, tomando en cuenta los pasos dados por el profesor aparte.
4. Pedí el esqueleto de rutas: páginas, Header, Footer, Layout y `App.jsx`.
5. Pedí revisar errores de imports y el error de `react-router-dom`.
6. Pedí plantillas para Inicio, Sobre mí y Habilidades, y que revisara mi ortografía en general.
8. Le envíe el formulario de contacto por partes y pedí que me diera sugerencias de como minimizarlo.
9. Pedí los estilos CSS y mejoras visuales para hacer la página más llamativa.
10. Pedí ayuda para redactar el README y esta declaración.

## Outputs
La IA me entregó código para cada fase (componentes, rutas, formulario con `useState`, CSS), explicaciones de qué hace cada parte, correcciones de ortografía y comandos de Git.


## Reflexión crítica

Usé la IA como guía paso a paso durante un 60% de la evaluación. Me entregó el código de algunas fases con una explicación de qué hacía, y yo lo trataba de mejorar, primero copiando y pegando para ver que que ajustes hacerles, lo probaba en el navegador y le contaba qué salía. Eso me sirvió para avanzar rápido, pero no reemplazó el trabajo de revisar y entender lo que pegaba.

Lo que más aprendí fue cómo funciona React Router (rutas anidadas con `Layout` y `Outlet`, y la diferencia entre `NavLink` y `Link`), cómo se reutiliza un componente con props (`TarjetaProyecto` con `.map()` y `key`) y cómo `useState` controla un formulario. La parte que más me costó fue el formulario con validación, porque tiene tres estados distintos y una sola función `handleChange` para todos los campos.

Varios errores los tuve que detectar yo mirando la pantalla y la consola: `react-router-dom` no estaba instalado, las carpetas tenían mayúscula inicial y los imports no las encontraban, pegué código mezclado en `Proyectos.jsx`, y el formulario no validaba porque tenía la versión anterior. La IA me ayudó a interpretar cada error, pero me di cuenta de que copiar código sin leerlo genera problemas difíciles de ubicar.

Como crítica, la IA a veces dio versiones largas o con más funciones de las que necesitaba, y hubo cosas que pegué sin entender del todo en el momento. Las partes que todavía debo repasar son [escribe cuáles: la expresión regular del correo, el spread `{ ...valores }`, etc.]. Sin IA habría tardado bastante más, y probablemente me habría trabado en la configuración de Git y en las rutas.