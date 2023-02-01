import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HotelchennaiComponent} from "./hotelchennai/hotelchennai.component";
import {HotelbangloreComponent} from "./hotelbanglore/hotelbanglore.component";
import {HotelootyComponent} from "./hotelooty/hotelooty.component";
import {HotelkodaikanalComponent} from "./hotelkodaikanal/hotelkodaikanal.component";
import {HotelmumbaiComponent} from "./hotelmumbai/hotelmumbai.component";
import {MapbangloreComponent} from "./mapbanglore/mapbanglore.component";
import {MapchennaiComponent} from "./mapchennai/mapchennai.component";
import {MapkodaikanalComponent} from "./mapkodaikanal/mapkodaikanal.component";
import {MapmumbaiComponent} from "./mapmumbai/mapmumbai.component";
import {MapootyComponent} from "./mapooty/mapooty.component";

const routes: Routes = [{path:'login' ,component:LoginComponent},
{path:'signup' ,component:SignupComponent},
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
  {path : 'chennairesults',component : HotelchennaiComponent},
  {path : 'bangloreresults',component : HotelbangloreComponent},
  {path : 'ootyresults',component:HotelootyComponent},
  {path : 'kodaikanalresults',component:HotelkodaikanalComponent},
  {path : 'mumbairesults',component:HotelmumbaiComponent},
  {path : 'mapbanglore',component: MapbangloreComponent},
  {path :'mapchennai',component : MapchennaiComponent},
  {path :'mapkodaikanal',component:MapkodaikanalComponent},
  {path : 'mapmumbai',component:MapmumbaiComponent},
  {path : 'mapooty',component:MapootyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
