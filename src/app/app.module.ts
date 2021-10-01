import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrowdfundComponent } from './crowdfund/crowdfund.component';
import { RegisterComponent } from './register/register.component';
import { RecaudosComponent } from './recaudos/recaudos.component';
import { TeamComponent } from './team/team.component';
import { CuentaComponent } from './cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrowdfundComponent,
    RegisterComponent,
    RecaudosComponent,
    TeamComponent,
    CuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
