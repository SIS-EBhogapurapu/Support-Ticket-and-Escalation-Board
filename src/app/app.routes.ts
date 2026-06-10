import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login';
import { UsersComponent } from './users/users';
import { AdminComponent } from "./admin/admin";
import { UsersTqComponent } from "./users-tq/users-tq";
import { UsersNewtComponent } from './users-newt/users-newt';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'Userstq', component: UsersTqComponent},
  { path: 'users-newt', component:UsersNewtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

