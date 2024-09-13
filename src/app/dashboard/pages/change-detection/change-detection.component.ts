import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, //con el OnPus no se hace el cambio de React
  template: `
    <app-title [title]="currentFramework()" />

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `
})
export default class ChangeDetectionComponent {

  //si queremos cambiar el nombre de ChangeDetection y Para que diga cual es el Framework actual
  //hacemos una señal computada, es decir, de solo lectura
  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name}`
  );

  //nos creamos una señal y una propiedad tradicional
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = ({
    name: 'Angular',
    releaseDate: 2016,
  });

  constructor() {

    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))

      console.log('Hecho');
  }, 3000);

}
}
