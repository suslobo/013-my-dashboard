import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  //nos creamos una señal
  public showContent = signal(false);

  //para cambiar la señal nos creamos un método
  public toogleContent() {
    //valor actual de la señal y el nuevo valor que es la negación del valor actual
    this.showContent.update( value => !value );
  }



}
