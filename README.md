# Aplicación MERN 

Esta es una aplicación  desarrollada utilizando la tecnología MERN (MongoDB, Express, React, Node.js). El objetivo de esta aplicación es mostrar datos en tiempo real provenientes de una API utilizando websockets.

Puedes encontrar la aplicación en producción [aquí](https://dev-test-bitmex.netlify.app). Ten en cuenta que solo el frontend está en producción, ya que el backend consume muchos recursos debido a las solicitudes a la base de datos. El código del backend está documentado en el archivo `Table.jsx` en la línea 37 por si deseas probarlo localmente.

## Características

- La aplicación utiliza React en el frontend para renderizar la interfaz de usuario y mostrar los datos en una tabla.
- Se utiliza la biblioteca `websocket` para establecer una conexión WebSocket con la API de BitMEX y recibir datos en tiempo real.
- Los datos recibidos se almacenan en una base de datos MongoDB utilizando el backend construido con Express y Node.js. Sin embargo, esta parte del backend no está en producción debido a limitaciones de recursos.
- El backend expone una API para recibir los datos del frontend y almacenarlos en la base de datos MongoDB.

## Author

Alexander De Jesús Ventura Mejía

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Alexander200330/devTest.git


