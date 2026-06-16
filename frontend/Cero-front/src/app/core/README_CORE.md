# Core

Contiene elementos globales y únicos de la aplicación.

Reglas:
- No debe contener componentes de negocio.
- Se carga una sola vez al iniciar la aplicación.
- Los servicios aquí suelen ser singleton.

Ejemplos:
- AuthService
- Http Interceptors
- Guards globales
- Layout principal
- Configuración global

Estructura:

auth/          -> autenticación y autorización        \n\
interceptors/  -> interceptores HTTP                  \n\
layout/        -> header, footer, sidebar             \n\
services/      -> servicios globales                  \n\
