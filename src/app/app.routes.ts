import { Routes, RouterModule } from '@angular/router';
// componentes
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './shared/nofound/nofound.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: NofoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });