import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsearchformComponent } from './hotelsearchform/hotelsearchform.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { HotelchennaiComponent } from './hotelchennai/hotelchennai.component';
import { HotelbangloreComponent } from './hotelbanglore/hotelbanglore.component';
import { HotelmumbaiComponent } from './hotelmumbai/hotelmumbai.component';
import { HotelootyComponent } from './hotelooty/hotelooty.component';
import { HotelkodaikanalComponent } from './hotelkodaikanal/hotelkodaikanal.component';
import {RouterModule} from "@angular/router";
import {MapbangloreComponent} from "./mapbanglore/mapbanglore.component";
import { MapchennaiComponent } from './mapchennai/mapchennai.component';
import { MapkodaikanalComponent } from './mapkodaikanal/mapkodaikanal.component';
import { MapmumbaiComponent } from './mapmumbai/mapmumbai.component';
import { MapootyComponent } from './mapooty/mapooty.component';
import { LeafletModule} from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HotelsearchformComponent,
    HotelchennaiComponent,
    HotelbangloreComponent,
    HotelmumbaiComponent,
    HotelootyComponent,
    HotelkodaikanalComponent,
    MapbangloreComponent,
    MapchennaiComponent,
    MapkodaikanalComponent,
    MapmumbaiComponent,
    MapootyComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, MatIconModule, FormsModule,
       HttpClientModule,CommonModule,RouterModule,
      LeafletModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
