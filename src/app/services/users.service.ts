import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';

//creamos una interface
interface State {
  users: User[];
  loading: boolean;
}




//nos creamos el primer servicio
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient);

  //después de crearnos la interface ahora nos podemos crear una señal
  #state = signal<State> ({
    loading: true,
    users: [],
  });
  //señales computadas para poder utulizar el #state, recordemos que es privado y no se puede utilizar fuera de aquí
  //nos creeamos una nueva propiedad que se llama usuarios
  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );



  //ahora si inicializa el servicio y queremos cargar la data
  constructor() {
    //hacemos la petición get. Dispara la petición hasta que se subscribe
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) )
      .subscribe( res => {
        this.#state.set({
          loading: false,
          users: res.data,
        })
      });
    //vamos a inyectar nuestro servicio en users.component.ts
   }

}
