import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export default class NuevoComponent {
  //me creo una señal
  public showContent = signal(false);
  //me creo una segunda señal
  public grade = signal<Grade>('A');

  public toogleContent2() {
    this.showContent.update( value => !value );
  }

}
