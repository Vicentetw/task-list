/*@Output
custom event that pass data from component to the outside word
pasamos datos de nuesto componente anidado a nuestro componente principal
.Este Output se ulitilza on EventEmitter que es un objeto que escucha si algo sucede y luego
 publica un evento si se activa
*/

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text: string ="";
@Input() color: string ="";
@Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    //console.log("Click!")
    //cancelo el console .log
    //.emit() lo que hace es emitir la acción
    this.btnClick.emit();
  }
}
