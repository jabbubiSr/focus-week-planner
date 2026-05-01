# CLAUDE.md — Focus Week Planner

## Propósito del proyecto
App de una sola página para gestionar tareas de la semana.
Sin frameworks, sin dependencias externas. Solo HTML, CSS y JS vanilla.

## Stack permitido
- HTML5 semántico
- CSS3 (sin preprocesadores)
- JavaScript ES6+ vanilla (sin frameworks ni librerías)

## Estructura de archivos
- index.html — estructura principal
- styles.css — todos los estilos
- app.js — toda la lógica

## Principios de implementación
- Cambios pequeños e incrementales.
- Funciones cortas con nombres claros.
- Sin comentarios innecesarios en el código.
- Sin `console.log` de depuración en el código final.

## Cosas que NO debe hacer Claude
- No usar React, Vue ni ningún framework.
- No añadir librerías externas (ni CDN).
- No cambiar comportamiento ya funcionando sin pedirlo explícitamente.
- No refactorizar sin que se lo pida.

## Cómo proponer cambios
Antes de implementar, enumera los archivos que vas a tocar y qué cambiarás
en cada uno. Espera confirmación si el cambio es amplio.

## Criterio de commits
Un commit por funcionalidad. Mensajes en inglés con prefijo:
feat, fix, chore, refactor, style.

## Antes de cerrar una tarea
Confirma que el comportamiento anterior sigue intacto y que no has añadido
código muerto.