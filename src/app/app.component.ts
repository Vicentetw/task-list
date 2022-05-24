import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
/*para usar {iconos hay que importarlo e inicializarlo con faCoffee = faCoffee;
  en el html usar: <fa-icon [icon]="faCoffee"></fa-icon>*/
@Component({
  //app-root sería la etiqueta y la referenciamos en index.html si lo cambio debo cambiarlo en el index tambièn
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
}
