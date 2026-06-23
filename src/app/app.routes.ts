import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard';
import { AdminComponent } from "./admin-admin-dashboard/admin-admin-dashboard";
import { UsersTicketqueueComponent } from "./users-ticketqueue/users-ticketqueue";
import { UsersNewticketComponent } from './users-newticket/users-newticket';
import { UserTicketdescriptionComponent } from "./users-ticketdescription/users-ticketdescription";
import { AdminTicketsqueueComponent } from './admin-ticketsqueue/admin-ticketsqueue';
import { AdminNewticketComponent } from './admin-newticket/admin-newticket';
import { AdminTdesComponent } from "./admin-ticketdescription/admin-ticketdescription";
import { AdminManageusersComponent } from "./admin-manageusers/admin-manageusers";
import { AboutComponent } from "./about/about";
import { AuthGuard } from "./auth-guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersDashboardComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: 'Userstq', component: UsersTicketqueueComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'users-newt', component:UsersNewticketComponent, canActivate:[AuthGuard], data: { role: 'user' } },
  { path: 'users-tdes', component: UserTicketdescriptionComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'admin-tq', component: AdminTicketsqueueComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: 'admin-newt', component:AdminNewticketComponent, canActivate:[AuthGuard], data: { role: 'admin' } },
  { path: 'admin-tdes', component:AdminTdesComponent, canActivate:[AuthGuard], data: { role: 'admin' } },
  { path: 'admin-users', component:AdminManageusersComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: '', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

