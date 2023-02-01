import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotelbanglore',
  templateUrl: './hotelbanglore.component.html',
  styleUrls: ['./hotelbanglore.component.css']
})
export class HotelbangloreComponent {
  bangloreresults : any;
  mapbanglore: any;
  constructor(private http:HttpClient,private router:Router) {
    this.http.get('http://localhost:8080/banglore', {responseType: 'text'})
      .subscribe(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        // @ts-ignore
        this.bangloreresults = Array.from(table.rows, row => Array.from(row.cells, cell => cell.textContent));
      });
  }
}
