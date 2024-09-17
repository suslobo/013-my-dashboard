import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response';

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
  //después de crearnos la interface ahora nos podemos crear una señal
  #state = signal<State> ({
    loading: true,
    users: [],
  });
  //ahora si inicializa el servicio y queremos cargar la data
  constructor() {

    console.log('Cargando data');
    //vamos a inyectar nuestro servicio en users.component.ts
   }

}
