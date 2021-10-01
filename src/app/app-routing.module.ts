import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrowdfundComponent } from './crowdfund/crowdfund.component';
import { RegisterComponent } from './register/register.component';
import { RecaudosComponent } from './recaudos/recaudos.component';
import { TeamComponent } from './team/team.component';
import { CuentaComponent } from './cuenta/cuenta.component';


const routes: Routes = [{path: "", pathMatch: "full", redirectTo: "/home"},
{path: "crowdfund", component:CrowdfundComponent},
{path: "home", component:HomeComponent},
{path: "register", component:RegisterComponent},
{path: "recaudos", component:RecaudosComponent},
{path: "team", component:TeamComponent},
{path: "cuenta", component:CuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
