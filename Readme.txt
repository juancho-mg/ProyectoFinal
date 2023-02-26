Dimensionador de proyectos de Riego tomando como base los productos de Hunter Industries, y la estética de su sitio web.

Consiste en un catalogo (array catalogoAspersores) de aspersores, del cual el usuario seleccionará un aspersor del catálogo
El usuario deberá las dimensiones de distintas zonas de riego, que se cargarán en el array proyectoRiego.
Para poder modificar este array, agregando o quitando zonas, hago set y get constantemente desde el storage.
Cada vez que el proyectoRiego se modifica, se mapea para reestablecer los ID de cada zona, se carga al storage, y lo vuelvo a traer.

Luego en base al aspersor seleccionado, se seteará un diametro de diseño, según el cual se harán los cálculos para el tamaño de area a diseñar.
La app devolverá la cantidad de piezas necesarias para realizar la instalación de riego, y un valor subtotal.
Se cierra el ciclo del simulador dándole la opción al usuario de ingresar los datos de contacto para que luego sea contactado para la instalación con personal especializado.

Hice 2 entregas finales distintas, una con API local, y la otra con el catalogo de productos cargado en JS.
La que va con JSON API es la entrega "oficial" del curso, la que tiene base de datos en JS la subo a github pages a modo de portfolio.