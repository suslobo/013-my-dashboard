import { UserLoaderComponent } from './../../../shared/heavy-loaders/users-loader.component';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UsersServiceService } from '../../../../../../011-directiveSignals/src/app/signals/services/users-service.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    <!-- si el usuario existe mostramos esta info -->
    @if ( user() ) {
      <section>
        <img
          [srcset]="user()?.avatar"
          [alt]="user()!.first_name"
          />

          <div>
            <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
            <p>{{ user()?.email }}</p>
          </div>

      </section>

    <!-- si no usuario existe -->
    } @else {
      <p>Cargando información</p>
    }

  `
})
export default class UserComponent {

  //vamos a transformar un observable en una señal

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersServiceService);



  //lo que queremos es tener aquí nuestra señal
  //la señal puede tener un usuario o ser undefined
  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ) )
    )
  );

  public titleLabel = computed( () => {
    //si tenemos información del usuario, hacemos un return que diga
    if ( this.user() ) {
      return `Información del usuario ${ this.user()?.first_name } ${ this.user()?.last_name }`;
    }
    //en caso contrario, si no tuvieramos la info
    return 'Información del usuario';
  });



  //así sabemos que es un observable
  // constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log({params});
  //   } )
  // }

}
