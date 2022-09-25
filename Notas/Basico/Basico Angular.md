Fundamentos de Angular :

2. Instalacion de Angular CLI


    Verifica versión de Node: node -v
    Verifica versión de npm: npm -v
    Instala el CLI de Angular: npm i -g @angular/cli
    Verifica tu instalación: ng version
    Crea tu primer proyecto: ng new my-project
    Ejecuta el servidor de desarrollo: ng serve Dentro de la carpeta de tu proyecto.

3. Comandos de Angular para cvorrer tu proyecto 

    Crear proyecto: ng new my-project
    Lanzar servidor de desarrollo: ng serve
    Lanzar servidor de desarrollo y que abra el navegador automáticamente:ng serve -o
    Lanzar el servidor en un puerto especifico: ng serve -o --port=3500

    Si lanzamos el comando ng version desde la carpeta del proyecto podremos obtener mayor detalle de las tecnolog[ias utilizadas.

    ng serve --host 0.0.0.0 --> Maquinas virtuales

4. Estructura de un proyecto en Angular

    De arriba hacia abajo:

    node_modules: Todo proyecto de Javascript posee este directorio donde se almacenan las librerías y dependencias que se descarguen con NPM.
    src: Directorio principal del proyecto donde encontramos:
    app: Directorio donde guardaremos todo el código fuente de Angular.
    assets: Directorio para imágenes y otros recursos que la app necesita.
    environments: Directorio de ambientes, por defecto viene con desarrollo y producción.
    favicon.ico: Ícono por defecto que tendrá la pestaña del navegador.
    index.html: Archivo HTML principal desde donde se construye toda la aplicación.
    main.ts: Archivo principal para la configuración de Angular.
    polyfills.ts: Librería para que Angular funcione en navegadores viejos y que la aplicación sea retro compatible.
    styles.scss: Archivo principal de estilos.
    test.ts: Archivo principal para lanzar el ambiente de pruebas de Angular.
    .browserslistrc: Lista de navegadores y sus versiones que permite configurar la compatibilidad de la aplicación con cada uno.
    .editorconfig: Permite autoformatear los archivos, espacios, indentación, etc. Hay que tener instalado la extensión en el editor.
    .gitignore: Indicarle a GIT qué archivos/directorios ignorar.
    angular.json: Archivo principal con toda la configuración del proyecto Angular.
    karma.conf.js: Archivo de configuración de Karma. Karma es un task runner para correr pruebas unitarias.
    package-lock.json: Describe el las dependencias exactas que se generaron en la instalación del proyecto.
    package.json: Archivo para el manejo de dependencias, scripts y metadatos relevantes para el proyecto.
    README.md: Archivo markdown para la documentación del proyecto.
    tsconfig.app.json: Archivo principal para la configuración de TypeScript.
    tsconfig.json: Extensión con más configuraciones de TypeScript.
    tsconfig.spec.json: Configuración de TypeScript pero para el ambiente de pruebas.

5. Basico de TypeScript

- Tipado de datos: Indicar tipo de dato de una variable.
    const empresa: string = 'Platzi';
    const id: number = 12;
- Inferencia de tipos: Declaración de variables sin especificar el tipo.
    const empresa = 'Platzi';
- Doble tipado: Asignación de dos tipos de datos a una misma variable.
    const empresa: string | number = 'Platzi';    /*La variable puede ser tanto del tipo string como number.*/
- Tipado de parámetros y retornos de una función:
    function myFunction(empresa: string): number {
    //La función myFunction espera recibir una variable del tipo string y retornará un number ...}
- Clases y POO: TypeScript le agrega a Javascript la posibilidad de programar Orientado a Objetos.
    class Empresa {
        private empresa: string;
        constructor(empresa: string) {
            this.empresa = empresa;
        }
    }
    
    Para la posterior creación de objetos a partir de esa clase:
    const empresa = new Empresa('Platzi');

6. String Interpolation : String interpolation es la manera de enviar datos desde nuestro componente hacia la vista. Utilizando el doble símbolo de llaves {{ }}
    <h1>{{ 'Hola Platzi' }}</h1>
    <h2>1 + 1 = {{ 1 + 1 }}</h2>
    <h3>{{ myFunction(); }}</h3>

    export class AppComponent {
        // Variable privada, no puede utilizarse en un interpolación
        private title = 'Hola! soy una variable privada';
    }
7. División de la responsabilidad 
    - Un componente de Angular se divide en tres archivos: uno para el código TypeScript, otro para el código HTML y uno más para el código CSS
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
        export class AppComponent {
            title = 'Hola soy Platzi';
        }
    Angular usa el concepto de decoradores para modificar el comportamiento de las clases. La clase AppComponent implementa el decorador @Component() para indicarle a Angular que esta clase será un componente.

8. Property Biding
    Property Binding es la manera que dispone Angular para controlar y modificar las propiedades de los distintos elementos de HTML. Para esto, simplemente utiliza los corchetes [] para poder modificar dinámicamente ese atributo desde el controlador.
    
    - El atributo src de la etiqueta <img> para modificar dinámicamente una imagen.
    - El atributo href de un <a> para modificar un enlace.
    - El atributo value de un <input> para autocompletar un valor de un formulario.
    - El atributo disable de un <input> para habilitar/deshabilitar un campo de un formulario.
    

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
        empresa = 'Platzi';
        habilitado = true;
    }

    <input [value]="empresa" [disabled]="habilitado"  />

9. Introducción al Event Binding de Angular
    A lo igual que el Property Binding nos permite modificar el valor de los atributos de los elementos HTML desde el controlador, el Event Binding permite controlar los eventos que suceden en estos elementos. El clic de un botón, detectar cambios en un campo, el envío de un formulario, entre otros eventos. Para esto utiliza los paréntesis () para el bindeo de la propiedad del elemento.


    export class AppComponent {
        enviarFormulario() {
        // ...
        }
    }

    <button (click)="enviarFormulario()" >

10. Otros eventos que puedes escuchar

    Puedes enviarle al controlador el evento completo que se produce en la vista. Para esto, solo declara un parámetro $event en el método que se encuentra escuchando el evento.

    export class AppComponent {
        buttonClick($event: Event) {
            console.log($event);
        }
    }
    <button (onKeyUp)="buttonClick($event)">

    //en el html
    <div class="box" (scroll)="onScroll($event)"></div>
    // en la capa logica
    onScroll(event: Event) {
        const element = event.target as HTMLElement;
        console.log(element.scrollTop);
    }

11. Data binding con ngModel
    El atributo ngModel permite el intercambio de datos de forma bidireccional entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.
    ngModel usar tanto los corchetes [] como los paréntesis (). De esta manera, se vuelve bidireccional el intercambio de datos. Si no quieres la bidirección, solo colocamos los corchetes [ngModel] para que la comunicación sea unidireccional.Para utilizar ngModel, es necesario hacer uso e importar Angular Forms. Para esto, dirígete al archivo app.module.ts que es el módulo principal de toda aplicación Angular y agrega lo siguiente:

        import { FormsModule } from '@angular/forms';

        @NgModule({
        declarations: [ ... ],
        imports: [
            FormsModule
        ],
        providers: [],
        bootstrap: [ ... ]
        })
        export class AppModule { }

    De esta manera puedes importar el módulo FormsModule desde @angular/forms y agregarlo a imports para emplear la propiedad [(ngModel)].

12. Uso de *ngIf : El condicional “If” es un “If” en Javascript

    <div *ngIf="isPlatzi">Hola, soy Platzi</div>

    <div *ngIf="isPlatzi; else templateElse">Hola, soy Platzi</div>
    <ng-template #templateElse>
        <div>No soy Platzi</div>
    </ng-template>

    Si la condición del If no se cumple, seguido de punto y coma, se coloca la sentencia else haciendo referencia a templateElse, que es el nombre de la variable del template a mostrar en su lugar.

13. Uso de *ngFor : Angular permite iterar un array 

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
        })
        export class AppComponent {
        myArray: string[] = [
            'Platzi',
            'es',
            'genial!'
        ];
        }

        <li *ngFor="let str of myArray">
                {{ str }}
        </li>

        <li *ngFor="let name of names; index as i">
            {{i}} {{ name }} </li>

    Puedes utilizar *ngFor para iterar y mostrar cada propiedad de un objeto.
       
        peopleArray = [
            {
                firstname: 'Freddy',
                lastname: 'Vega',
                age: 35
            },
            {
                firstname: 'Nicolas',
                lastname: 'Molina',
                age: 29
            }
        ];
        <ul *ngFor="let person of peopleArray">
            <li>Nombre: {{ person.firstname }}</li>
            <li>Apellido: {{ person.lastname }}</li>
            <li>Edad: {{ person.age }}</li>
        </ul>

14. Tipado de objetos con interfaces
    Puedes crear una interfaz de Personas para tipar los objetos del array y asegurar que todos tengas las mismas propiedades.

        interface Person {
            firstname: string;
            lastname: string;
            age: number
        }

        peopleArray: Person[] = [
            {
                firstname: 'Freddy',
                lastname: 'Vega',
                age: 35
            },
            ...
        ]


15. Uso de *ngSwitch
    Angular también ofrece la sentencia *ngSwitch y *ngSwitchCase para determinar el flujo de control de tu aplicación y qué elemento mostrar entre multiples elementos HTML. Además de utilizar un elemento default con *ngSwitchDefault en caso de que ninguna condición se cumpla.

    export class AppComponent {
        color: string = 'verde';
    }

    <div [ngSwitch]="color">
        <p *ngSwitchCase="'azul'">
            El color el Azul
        </p>
        <p *ngSwitchCase="'verde'">
            El color el Verde
        </p>
        <p *ngSwitchCase="'rojo'">
            El color el Rojo
        </p>
        <p *ngSwitchDefault>
            No hay ningún color
        </p>
    </div>

16. Class and style
    - Class binding
        La versatilidad de Angular te permite agregar o quitar clases y estilos a tus elementos HTML a partir de condicionantes. Así como anteriormente utilizaste los corchetes [] para bindear atributos como el [src] de una imagen o el [href] de un enlace, puedes bindear clases para que Angular las agregue o quite dinámicamente si se cumple una condición de la siguiente manera:

        <div [class.active-color]="isActive"></div>

        Imagina que tienes en tu componente una propiedad llamada isActive que agregará la clase active-color si esta es verdadera o quitará la clase si es falsa. Luego ya puedes darle los estilos que más te gusten al elemento HTML en tu hoja de estilos utilizando la clase active-color.
    
    - Style binding
        También puedes añadir estilos inline a los elementos HTML bindeando la propiedad [style] seguido de la propiedad CSS que quieres modificar dinámicamente:

        <p [style.color]="isActive ? 'blue' : 'red'"></p>

        A partir del valor de isActive, dependiendo si este es verdadero o falso, puedes emplear un operador ternario para cambiar el color del párrafo.

17. NgClass y NgStyle

Con el binding de [class] y [style] puedes agregar clases y estilos fácilmente. Pero se vuelve algo complicado en el caso de que necesites agregar varias clases o modificar muchos estilos. Es por esto que Angular ofrece las directivas ngClass y ngStyle para este propósito.

Puedes bindear la directiva [ngStyle] o [ngClass] y pasarle un objeto con cada propiedad o clase que deseas agregar:

<p
    [ngStyle]="{
        'color': textColor,
        'background': textBackground
    }"
></p>

El operador ternario será tu mejor aliado para agregar o quitar clases y estilos:

<div
    [ngClass]="isAvailable ? 'active-class' : 'deactivate-class'">
</div>

O puedes usar las Interpolaciones en lugar del binding:

<p
    ngClass="{{ isAvailable ? 'active-class' : 'deactivate-class' }}"
></p>

18. Formulario

Conociendo la directiva [(ngModel)] que nos facilita el intercambio de datos de forma bidireccional entre la vista y el componente, puedes crear tu primer formulario apoyándote de esta directiva y de otras características propias de Angular para el manejo y validación de formularios.

Paso 1
Crea un simple formulario de Login en el HTML y las variables en el componente para capturar los valores de los campos con ngModel:



