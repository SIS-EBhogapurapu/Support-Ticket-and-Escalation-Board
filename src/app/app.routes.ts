import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login';
import { UsersComponent } from './users/users';
import { AdminComponent } from "./admin/admin";
import { UsersTqComponent } from "./users-tq/users-tq";
import { UsersNewtComponent } from './users-newt/users-newt';
import { UsersTdesComponent } from "./users-tdes/users-tdes";
import { AdminTqComponent } from './admin-tq/admin-tq';
import { AdminNewtComponent } from './admin-newt/admin-newt';
import { AdminTdesComponent } from "./admin-tdes/admin-tdes";
import { AdminUsersComponent } from "./admin-users/admin-users";
import { AboutComponent } from "./about/about";
import { AuthGuard } from "./auth-guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: 'Userstq', component: UsersTqComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'users-newt', component:UsersNewtComponent, canActivate:[AuthGuard], data: { role: 'user' } }, 
  { path: 'users-tdes', component: UsersTdesComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'admin-tq', component: AdminTqComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: 'admin-newt', component:AdminNewtComponent, canActivate:[AuthGuard], data: { role: 'admin' } },
  { path: 'admin-tdes', component:AdminTdesComponent, canActivate:[AuthGuard], data: { role: 'admin' } },
  { path: 'admin-users', component:AdminUsersComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: '', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

