import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hotelchennai',
  templateUrl: './hotelchennai.component.html',
  styleUrls: ['./hotelchennai.component.css']
})
export class HotelchennaiComponent {
chennairesults : any;
constructor(private http : HttpClient){
  this.http.get('http://localhost:8080/chennai', {responseType: 'text'})
    .subscribe(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const table = doc.querySelector('table');
      // @ts-ignore
      this.chennairesults = Array.from(table.rows, row => Array.from(row.cells, cell => cell.textContent));
    });
}
}
