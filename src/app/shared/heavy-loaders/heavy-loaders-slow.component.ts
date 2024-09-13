import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

//la idea de este componente es que sea un componente bloqueante
@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClas]">
      Heavy Loader Slow
    </section>
  `,
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClas!: string;



//estructura para el código bloqueante, esto en la vida real no se hace
  constructor() {
    //esto bloquea javascript
    //durante 3 segundos la app está bloqueada
    const star = Date.now();
    while(Date.now() - star < 3000) {}
  }

}
