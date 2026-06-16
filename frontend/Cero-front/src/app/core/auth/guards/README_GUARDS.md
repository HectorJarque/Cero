# Guards

Protegen rutas y recursos.

Reglas:
- No contienen lógica de negocio.
- Delegan en servicios.

Ejemplos:

auth.guard.ts
Verifica que el usuario esté autenticado.

role.guard.ts
Verifica permisos.

guest.guard.ts
Permite acceso sólo a usuarios no autenticados.
