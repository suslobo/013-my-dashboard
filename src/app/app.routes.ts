import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component'),
    //rutas hijas
    children:[
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () =>
          import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () =>
          import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition 1',
        loadComponent: () =>
          import('./dashboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 2',
        loadComponent: () =>
          import('./dashboard/pages/view-transition/view-transition2.component'),
      },
      {
        path: 'inputs-outputs',
        title: 'Inputs Outputs',
        loadComponent: () =>
          import('./dashboard/pages/input-output/input-output.component'),
        //para que funcione tenemos que ir al componente y poner default en el export default class InputOutputComponent
      },
      {
        path: 'material',
        title: 'Angular Material',
        loadComponent: () =>
          import('./dashboard/pages/material/material.component'),
        //para que funcione tenemos que ir al componente y poner default en el export default class InputOutputComponent
      },
      {
        path: 'nuevo',
        title: 'Nuevo Componente',
        loadComponent: () => import('./dashboard/pages/nuevo/nuevo.component'),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch:'full',
      },
    ]
  },
  {//cuando entras en la app esta es la ruta
    path: '',
    // redirectTo: '/dashboard',
    redirectTo: (route) => {
      return 'dashboard/material';
    },
    pathMatch: 'full'
  },
];


  // path: 'dashboard',
  // loadComponent:() => import('./dashboard/dashboard.component'),


