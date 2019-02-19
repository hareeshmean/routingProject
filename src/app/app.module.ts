import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsettingsComponent } from './websettings/websettings.component';
import { ProperticsComponent } from './propertics/propertics.component';
import { AdminmanegementComponent } from './adminmanegement/adminmanegement.component';
import { CountryComponent } from './country/country.component';
import { TypesComponent } from './types/types.component';
import { StatusesComponent } from './statuses/statuses.component';
import { PossessionComponent } from './possession/possession.component';
import { AgeComponent } from './age/age.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { FacingComponent } from './facing/facing.component';
import { FurnisghingstatusComponent } from './furnisghingstatus/furnisghingstatus.component';
import { FlooringComponent } from './flooring/flooring.component';
import { ParkingComponent } from './parking/parking.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { StatesComponent } from './states/states.component';
import { DistricsComponent } from './districs/districs.component';
import { MandelsComponent } from './mandels/mandels.component';
import { VillagesComponent } from './villages/villages.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { ServicedetailsComponent } from './service/servicedetails/servicedetails.component';
@NgModule({
  declarations: [
    AppComponent,
    WebsettingsComponent,
    ProperticsComponent,
    AdminmanegementComponent,
    CountryComponent,
    TypesComponent,
    StatusesComponent,
    PossessionComponent,
    AgeComponent,
    AmenitiesComponent,
    FacingComponent,
    FurnisghingstatusComponent,
    FlooringComponent,
    ParkingComponent,
    MeasurementComponent,
    StatesComponent,
    DistricsComponent,
    MandelsComponent,
    VillagesComponent,
    ChangepasswordComponent,
    LogoutComponent,
    LoginComponent,
    ServiceComponent,
    ServicedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
