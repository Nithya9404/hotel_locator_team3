import {Component, EventEmitter, Output} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {HttpClient } from '@angular/common/http';
import {HotelService} from "../hotel.service";

@Component({
  selector: 'app-hotelsearchform',
  templateUrl: './hotelsearchform.component.html',
  styleUrls: ['./hotelsearchform.component.css']
})
export class HotelsearchformComponent {
  searchTerm: string = "";

  constructor(private route : Router)  {
  }


  searchHotel(searchTerm : string) {
    if (searchTerm === "chennai"){
      this.route.navigate(['/chennairesults'],{queryParams : {search:searchTerm}})
    }
    if(searchTerm === "banglore"){
      this.route.navigate(['/bangloreresults'],{queryParams:{search : searchTerm}})
    }
    if(searchTerm ==="kodaikanal"){
      this.route.navigate(['/kodaikanalresults'],{queryParams:{search : searchTerm}})
    }
    if(searchTerm ==="mumbai"){
      this.route.navigate(['/mumbairesults'],{queryParams:{search : searchTerm}})
    }
    if(searchTerm ==="ooty"){
      this.route.navigate(['/ootyresults'],{queryParams:{search : searchTerm}})
    }

  }

}
