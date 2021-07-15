import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginGuard } from './services/guard.service';
import { LoginComponent } from './pages/login/login.component';

 
const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  {
      path: '',
      loadChildren: './pages/pages.module#PagesModule',
      canLoad: [ LoginGuard ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


