import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsettingsComponent } from './websettings/websettings.component';
import { CountryComponent } from './country/country.component';
import { TypesComponent } from './types/types.component';
import { ProperticsComponent } from './propertics/propertics.component';
import { LoginComponent } from './login/login.component';
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
import { ServiceComponent } from './service/service.component';
import { ServicedetailsComponent } from './service/servicedetails/servicedetails.component';

const routes: Routes = [
  {path:"",component:WebsettingsComponent},
  {path:"properties",component:ProperticsComponent},
  {path:"country",component:CountryComponent},
  {path:"types",component:TypesComponent},
  {path:"login",component:LoginComponent},
  {path:"statuses",component:StatusesComponent},
  {path:"possession",component:PossessionComponent},
  {path:"age",component:AgeComponent},
  {path:"amenities",component:AmenitiesComponent},
  {path:"facing",component:FacingComponent},
  {path:"furnisghingstates",component:FurnisghingstatusComponent},
  {path:"floorings",component:FlooringComponent},
  {path:"parkings",component:ParkingComponent},
  {path:"measurement",component:MeasurementComponent},
  {path:"states",component:StatesComponent},
  {path:"districs",component:DistricsComponent},
  {path:"mandels",component:MandelsComponent},
  {path:"villages",component:VillagesComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  {path:"logout",component:LogoutComponent},
  {path:"services",component:ServiceComponent},
  {path:"services/:id/:service/:discription",component:ServicedetailsComponent}

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
