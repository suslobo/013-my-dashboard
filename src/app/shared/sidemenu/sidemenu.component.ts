import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  //nos creamos una nueva propiedad para las rutas
  public menuItems = routes
    .map( route => route.children ?? [] )
    .flat()
    //si la ruta existe, la ruta tiene path
    .filter( route => route && route.path )
    //excluímos si el path tiene :
    .filter( route => !route.path?.includes(':') );

  constructor() {

    //las rutas que queremos que sean parte de mi menú
    const dashboardRoutes = routes
      // .map( route => route.children ?? [] )
      // .flat()
      // //si la ruta existe, la ruta tiene path
      // .filter( route => route && route.path )
      // //excluímos si el path tiene :
      // .filter( route => !route.path?.includes(':') );

      console.log(dashboardRoutes);
  }

}
