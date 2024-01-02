import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';



const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
    {path: '',redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    
    ],
    
  },
//   { path: '', redirectTo: 'auth', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}