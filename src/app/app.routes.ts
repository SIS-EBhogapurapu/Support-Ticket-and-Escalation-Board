import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard';
import { AdminAdminDashboardComponent } from "./admin-admin-dashboard/admin-admin-dashboard";
import { UsersTicketqueueComponent } from "./users-ticketqueue/users-ticketqueue";
import { UsersNewticketComponent } from './users-newticket/users-newticket';
import { UsersTicketdescriptionComponent } from "./users-ticketdescription/users-ticketdescription";
import { AdminTicketsqueueComponent } from './admin-ticketsqueue/admin-ticketsqueue';
import { AdminNewticketComponent } from './admin-newticket/admin-newticket';
import { AdminTdesComponent } from "./admin-tdes/admin-tdes";
import { AdminManageusersComponent } from "./admin-manageusers/admin-manageusers";
import { AboutComponent } from "./about/about";
import { AuthGuard } from "./auth-guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users-dashboard', component: UsersDashboardComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'admin-admin-dashboard', component: AdminAdminDashboardComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: 'users-ticketqueue', component: UsersTicketqueueComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'users-newticket', component:UsersNewticketComponent, canActivate:[AuthGuard], data: { role: 'user' } },
  { path: 'users-ticketdescription', component: UsersTicketdescriptionComponent, canActivate:[AuthGuard] , data: { role: 'user' }},
  { path: 'admin-ticketsqueue', component: AdminTicketsqueueComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: 'admin-newticket', component:AdminNewticketComponent, canActivate:[AuthGuard], data: { role: 'admin' } },
  { path: 'admin-tdes', component:AdminTdesComponent, canActivate:[AuthGuard], data: { role: 'admin' } },
  { path: 'admin-manageusers', component:AdminManageusersComponent, canActivate:[AuthGuard] , data: { role: 'admin' }},
  { path: '', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

