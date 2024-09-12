import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F'; //estas son nuestras calificaciones que vamos a tener

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  //nos creamos una señal
  public showContent = signal(false);
  //nos creamos otra señal, @switch
  public grade = signal<Grade>('A');

  //para cambiar la señal nos creamos un método
  public toogleContent() {
    //valor actual de la señal y el nuevo valor que es la negación del valor actual
    this.showContent.update( value => !value );
  }



}
