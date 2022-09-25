Fundamentos de Angular :

18. Formulario

Conociendo la directiva [(ngModel)] que nos facilita el intercambio de datos de forma bidireccional entre la vista y el componente, puedes crear tu primer formulario apoyándote de esta directiva y de otras características propias de Angular para el manejo y validación de formularios.

Paso 1
Crea un simple formulario de Login en el HTML y las variables en el componente para capturar los valores de los campos con ngModel:


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = {
    email: '',
    password = ''
  };
}

<form>
    <div>
        <label></label>
        <input name="email" type="email" [(ngModel)]="form.email" required />
    </div>
    <div>
        <label></label>
        <input name="password" type="password" [(ngModel)]="form.password" required />
    </div>
    <div>
        <button type="submit">Iniciar sesión</button>
    </div>
</form>


Paso 2
Agregale al componente un método que responda al evento del envío del formulario llamado submitLogin(). Puedes enlazar este método al formulario con la directiva (ngSubmit) que va colocada en la etiqueta <form> junto con una variable de template para ponerle un nombre al formulario como por ejemplo #formLogin="ngForm". Tienes que igualar el nombre de tu variable a ngForm para que Angular reconozca que se trata de un formulario.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = {
    email: '',
    password = ''
  };
  submitLogin() {
    // Login del usuario
  }
}


<form (ngSubmit)="submitLogin()" #formLogin="ngForm">
    <div>
        <label></label>
        <input name="email" type="email" [(ngModel)]="form.email" required />
    </div>
    <div>
        <label></label>
        <input name="password" type="password" [(ngModel)]="form.password" required />
    </div>
    <div>
        <button type="submit">Iniciar sesión</button>
    </div>
</form>

Paso 3
Finalmente, gracias a esta conexión de tu formulario con el componente, se activará el método submitLogin() al hacer clic en el botón. Para validar tu formulario, utiliza la variable de template para imprimir un mensaje de error en pantalla o deshabilitar el botón de envío de la siguiente manera:


<div>
    <button [disabled]="formLogin.invalid" type="submit">Iniciar sesión</button>
</div>


