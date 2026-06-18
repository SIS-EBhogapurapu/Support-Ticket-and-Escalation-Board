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
  { path: 'users', component: UsersComponent, canActivate:[AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] },
  { path: 'Userstq', component: UsersTqComponent, canActivate:[AuthGuard] },
  { path: 'users-newt', component:UsersNewtComponent, canActivate:[AuthGuard] }, 
  { path: 'users-tdes', component: UsersTdesComponent, canActivate:[AuthGuard] },
  { path: 'admin-tq', component: AdminTqComponent, canActivate:[AuthGuard] },
  { path: 'admin-newt', component:AdminNewtComponent, canActivate:[AuthGuard] },
  { path: 'admin-tdes', component:AdminTdesComponent, canActivate:[AuthGuard] },
  { path: 'admin-users', component:AdminUsersComponent, canActivate:[AuthGuard] },
  { path: '', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

