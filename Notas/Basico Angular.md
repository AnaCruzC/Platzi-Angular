Fundamentos de Angular Componentes y servicios


1.Componentes

    Un componente es una pieza de software con una responsabilidad única y una estructura y funcionalidad determinada, además de ser reutilizable. Es una forma de dividir tu aplicación de una forma escalable para no tener TODO en un solo archivo. Por ejemplo, un componente para el header, otro para el footer, uno más para el menú, etc.

    - Componentes en Angular
      Puedes crear tu primer componente en Angular utilizando el comando ng generate component test-name o en su forma corta ng g c test-name. Esta acción creará los siguientes archivos:

      - my-test-name.component.html
      - my-test-name.component.ts
      - my-test-name.component.css
      - my-test-name.component.spec.ts

    Observa el archivo .html que será el template que tu componente utilizará. El archivo .ts que contiene el código TypeScript y la lógica. El archivo .css que contiene los estilos. Si escogiste trabajar con un preprocesador de CSS, este archivo puede ser .scss, .sass o .less. Finalmente, el archivo más extraño, .spec.ts que contiene el código de las pruebas unitarias que puedes escribir para automatizar el testing en tu componente.

    Angular también importará automáticamente el componente creado en el archivo app.module.ts para que automáticamente puedas utilizarlo en tu aplicación.

    ...
    import { TestNameComponent } from './test-name/test-name.component';

    @NgModule({
      declarations: [
        ...
        TestNameComponent
      ],
      imports: [ ... ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

    - Partes de un componente Angular
      El archivo con la extensión .ts es el principal de cualquier componente Angular.

      import { Component } from '@angular/core';

      @Component({
        selector: 'app-test-name',
        templateUrl: './test-name.component.html',
        styleUrls: ['./test-name.component.scss']
      })
      export class TestNameComponent {
          ...
      }

      Observa lo más importante, el decorador @Component(). Los decoradores alteran el comportamiento de una clase en Angular para que el compilador de TypeScript interprete el código de la manera correcta y sepa que una clase es un componente, un módulo, un servicio, una directiva, etc. Este decorador es quién enlaza el componente con el archivo HTML y la hoja de estilos, además de otorgarle al componente un selector o un nombre para emplearlo en tus templates.


2. Uso de Inputs

  Para comunicar componentes, Angular hace uso de decoradores para intercambiar información entre un componente padre hacia un componente hijo y viceversa.
  Para enviar información de padre a hijo, puedes utilizar el decorador @Input() para marcar una propiedad de una clase como punto de entrada de un dato.

    import { Component, Input } from '@angular/core';

    @Component({
      selector: 'app-test-name',
      templateUrl: './test-name.component.html',
      styleUrls: ['./test-name.component.less']
    })
    export class TestNameComponent {

      @Input() firstname: string;

      constructor() { }
    }

  Tienes que importar Input desde @angular/core para poder utilizar esta directiva e indicar que la propiedad firstname es un dato que el componente padre enviará.

  Podrás inicializar el componente desde su padre y pasarle los inputs que este necesite de la siguiente manera:

    <app-test-name>
        firstname="Platzi"
    </app-test-name>

  También puedes cambiar el nombre el Input especificando el nombre de la propiedad que quieras que este utilice al inicializar el componente.

    ...
        @Input('my-name') firstname: string;
    ...

    <app-test-name>
        my-name="Platzi"
    </app-test-name>

  Data binding en Inputs
  
    El decorador @Input() detectará cualquier cambio en el dato y automáticamente actualizará su valor. Si ocurre algún evento en el componente padre que cambie el valor en el Input firstname, el componente hijo recibirá inmediatamente ese nuevo valor.

  Input Set
    Otra manera de utilizar la directiva @Input es de la siguiente manera:

    @Input() set saludar(firstname: string) {
            console.log('Hola', firstname)
        };

    Observa que en esta oportunidad, cada vez que se envía un valor al @Input, se ejecutará la función saludar() que recibe como parámetro el valor que se le haya enviado. De esta manera, puedes ejecutar la lógica que necesites dentro de esta función cada vez que el valor del @Input cambia.

3. Ciclo de vida de componentes

  Ciclo :

  -  Constructor: cuando se corre una instancia
      ngOnChanges : corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.
      ngOnInit: corre antes pero tiene la condicione que solo correo una vez. Ahi se corren eventos asincronos.
      ngAfcterViewInit: corre cuando los hijos de ese componentes se han renderizado.
      NgOnDestroy: Corre cuando se elimina el componente.


4. ngDestroy & SetInput

  un ejemplo más práctico podría ser :

  OnInit crea y se suscribe a un obsevable que escucha cambios en un registro de la base de datos.
  OnDestroy cancela la suscripción a ese observable para que siga llamando a la bd infinitamente.
  Ese es un uso muy común pero para alguien que está iniciando comprender sobre observables es complejo





5. Implementando el sideMenu

  https://meyerweb.com/eric/tools/css/reset/
  https://fonts.googleapis.com/css2?family=Quicksand&amp;display=swap



6. Notas: https://github.com/iMatias-ED/Platzi-Notes

7.
8. 

  en pasos:

  En el servicio:
  1- crear el servicio desde la terminal
  2- importar el modulo HttpCliente en el servcio e inyectar e servicio en el constructor.
  3 en el servicio se crea el metodo para hace la petición de la API:
  return this.http.get<Product[]>(‘https://fakestoreapi.com/products’);

  En el componente:
  1- importar el servicio
  2- inyectar el servicio en el constructor: private productsService: ProductsService
  3- crear el metodo en el ngOnInit
  this.productsService.getAllProducts()
  .subscribe(data => {
  this.products = data;

  Por ultimo ya estaba creado un array tipado y se debe ajustar los campos con los campos de la API.

  Fake Store
  http://fakestoreapi.com/

  Curso de Consumo de APIs REST con Angular
  https://platzi.com/cursos/angular-apis/