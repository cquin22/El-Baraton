
# App El Baratón

  Ver Demo en [el siguiente link:](http://baraton.getforge.io/#/products/list) 

  La solución propuesta para el problema planteado se realizó con las siguientes tecnologias:
  
 - Capa Front End con Angular v.5
 - Angular CLI v.1.7

    

## Correr y compilar el proyecto en modo desarrollo

Para correr el proyecto en ambiente de desarrollo se debe entrar a la carpeta el-baraton-web-app por consola y correr `npm install` luego cuando las dependencias de node estén instaladas correctamente se debe correr el comando `ng serve`, la aplicación levantará en el la siguiente url: `[http://localhost:4200/](http://localhost:4200/)`

  

## Correr y compilar el proyecto en modo producción

Previamente se debe haber instalado todas las dependencias, para compilar a producción se debe ejecutar el comando `ng build` esto generara una carpeta dist en el proyecto con los archivos compilados de Typescript a JS con el fin de tener mayor soporte en navegadores, para desplegar el proyecto en un servidor es necesario subir dicho contenido de archivos estáticos en el servidor preferido (Apache - Ngnx)

  

## Estructura del proyecto

El proyecto está conformado por una estructura acorde a aplicaciones angular, y se explica a continuación:

En la carpeta ./src/app están todos los archivos Typescript fuentes y dentro de esta carpeta encontramos: 

-   **_core:** Este es el módulo que contiene componentes comunes y de configuración de toda la aplicación
    
-   **_modules:** En esta carpeta están todos los componentes de carga de la aplicación, estos módulos se van cargando de manera dinámica en la aplicación (lazy loading)
    
	-   **products**: Modulo de productos de la aplicación    
	-   **system-errors**: Modulo de carga de componentes de errores de la applicación
    

-   **_services**: Todos los servicios que se encargan de hacer peticiones HTTP y comunicación con APIs externas o cómo en este caso se usa para hacer las consultas con los archivos JSON
    
-   **_store-notifications:** Los store son servicios que se encargan de almacenar y comunicar eventos para comunicar componentes dentro de toda la aplicación
    
-   **_utils**: utilidades como directivas o filtros
    
-   **model**: Todos las entidades que se manejan en la aplicación
    

## Arquitectura módulos y componentes alto nivel

La solución al desarrollo está hecha con Angular que es un framework javascript que es orientado a componentes y la aplicación está organizada como tal, orientada a módulos y componentes que se describen en el siguiente diagrama de alto nivel:

![enter image description here](http://image.ibb.co/eDKVvS/El_baraton.png)
