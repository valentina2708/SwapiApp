# SwapiApp
 ## NOMBRE DE LA APLICACIÓN: 
Swapi es una aplicación móvil para gestionar los datos de la API de Star Wars, permitiendo explorar personajes, películas y planetas. Presenta la información en listas organizadas y vistas detalladas, con un diseño atractivo y fácil de usar.


![screen1](https://github.com/user-attachments/assets/d3ca4c5a-2144-4080-bd9a-38dadeb42469)
![screen5](https://github.com/user-attachments/assets/48390387-48c7-4179-907d-4b74fc40ccca)
![screen4](https://github.com/user-attachments/assets/540ec1c7-f8a8-4535-8aef-872af1033d05)

## CARACTERISTICAS:

* Funcionalidades:
  - Listado de Personajes, Películas, Planetas
  - Buscador por personaje
  - Detalles de personajes, peliículas y planetas
  - Modo oscuro y claro

* Estructura del Proyecto: Implementación de Atomic Design
  
  /src
  ├── adapters
  ├── components
  │   ├── _test_
  │   ├── atoms
  │   ├── molecules
  │   ├── organisms
  ├── screens
  ├── context
  ├── hooks
  ├── services
  ├── utils

 * SWAPI API: Api utilizada: http https://swapi.py4e.com/api
    Se utilizaron los siguientes endpoints 
  - GET /people/ : Obtiene información de los personajes
  - GET /films/ : Obtiene información de las películas
  - GET /planets/ : Obtiene información del los planetas
  - GET /people/?search : Obtiene la busqueda de personajes


* Uso de Expo: Framework de React native para creación de la APP
* TypeScript: Lenguaje de Programación
* React Native Paper : Libreria de componentes para el diseño de la App
* Jest: Pruebas Unitarias
* React Query: Almacenamiento de datos de la Api

## INSTALACIÓN:

* Requisitos
  - Node.js, versión 22.14.0
  - npm
  - Expo CLI
  - Expo Go (en Android/iOS)

* Comandos para ejecutar la aplicación
 - gitclone: Clonar el respositorio de github
 - npm install: Instalar todas las dependencias
 - npx expo start : Ejecutar la app, se genera un código QR que se debe escanear con Expo Go desde el celular para ver la app en el dispositivo.
 - npm test: Ejecutar las pruebas unitarias
   

* Flujo de la Aplicacion:
  * Pantalla de Inicio
    - Contiene tres botones principales: Personajes, Películas y Planetas.
    - Al hacer clic en cualquiera de ellos, el usuario es redirigido a la siguiente pantalla.
    - Incluye un switch para alternar entre el modo oscuro y modo claro.

  * Pantalla de Listado:
    - Muestra una lista con los nombres de los elementos correspondientes a la opción seleccionada.
    - En la vista de Personajes, se incluye un buscador por nombre para facilitar la navegación.
    - Cada elemento de la lista está representado en una tarjeta, que contiene:
      - El nombre del personaje, película o planeta.
      - Un botón "Ver detalles" que redirige a la siguiente pantalla.
    - También cuenta con el switch de modo oscuro/claro.

  * Pantalla de Detalles
   - Muestra información detallada sobre el personaje, película o planeta seleccionado.
   - Presenta los datos relevantes de cada opción en un diseño organizado y fácil de leer.
   - Se mantiene la opción de alternar entre modo oscuro y modo claro.



## Autor
@valentina2708
