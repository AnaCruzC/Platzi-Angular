Fundamentos de Angular :

19. Despliegue con Firebase Hosting

Puedes realizar tu primer deploy de una aplicación Angular utilizando Firebase.

¿Qué es un deploy?
Un deploy, o despliegue, es el proceso de llevar tu software de un entorno local, a un entorno el cual se pueda acceder a través de internet desde cualquier parte del mundo para estar disponible para su uso.

¿Qué es Firebase?
A lo igual que Angular, Firebase es una plataforma de herramientas para desarrolladores de software desarrollado y mantenido por Google. Puedes utilizarlo para, en unos pocos clics, tener tu primera aplicación en un entorno productivo. Además de otros usos que ofrece el servicio

¿Cómo realizo mi primer deploy?
Para esto, ingresa a la página oficial de Firebase con tu cuenta de @gmail y comienza creando tu primer proyecto:

Elige un nombre para el mismo Y elige si utilizar o no Google Analytics en tu aplicación:


Luego de algunos segundo, tu proyecto estará listo


Para tu primer deploy, usarás los servicios de Hosting que provee un servidor gratuito para tu aplicación. Desde el menú lateral selecciona la opción Hosting.

Firebase solicita que instales algunas dependencias de forma global en nuestro computador. Para eso, desde una terminar utilizarás el comando:

npm install -g firebase-tools

Teniendo el CLI de Firebase instalado, podrás autenticarte para iniciar un proyecto nuevo:

- firebase login

Posteriormente, estando situado desde la terminal en la raíz de tu proyecto, inicializa los servicios de Firebase:


- firebase init

Selecciona la opción

Hosting

para iniciar la configuración de Firebase en tu proyecto:

Escoge

Use an existing project

y selecciona el nombre de tu proyecto creado anteriormente desde la web de Firebase:

Te recomiendo responder a las preguntas que te realizará el CLI de la siguiente manera para finalizar la inicialización del proyecto:

Se creará en tu proyecto dos archivos, uno llamado .firebaserc y otro firebase.json que contienen la configuración con el servidor de Firebase con tu proyecto. También creará de una carpeta public con un index.html, que no utilizarás, ya que Angular provee su propio index.html al compilar la aplicación. Puedes borrar este directorio.

Angular build y despliegue final
Con el comando:

- ng build

Puedes preparar tu aplicación para un entorno productivo. Creará un directorio llamado dist y dentro otro más con el nombre de tu proyecto. Esta es el directorio que Angular provee para la distribución de la aplicación.
Dirígete ahora al archivo firebase.json creado al momento de ejecutar la inicialización de Firebase y edita la propiedad public de la siguiente manera:

{
 "hosting": {
    "public": "dist/<NOMBRE_DE_TU_PROYECTO>",
    ...
 }

De esta manera, Firebase desplegará tu aplicación que ya está compilada dentro de ese directorio.

Ahora si es momento del deploy. Para eso, utiliza el comando:
- firebase deploy

Luego de algunos segundos, Firebase te entregará un URL pública en internet desde la cual podrás acceder a tu proyecto desde cualquier parte.

**¡Felicidades, realizaste tu primer despliegue a producción con Firebase!






