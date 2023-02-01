import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hotelkodaikanal',
  templateUrl: './hotelkodaikanal.component.html',
  styleUrls: ['./hotelkodaikanal.component.css']
})
export class HotelkodaikanalComponent {
  kodaikanalresults : any;
  constructor(private http:HttpClient){
    this.http.get('http://localhost:8080/kodaikanal', { responseType: 'text' })
      .subscribe(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        // @ts-ignore
        this.kodaikanalresults = Array.from(table.rows, row => Array.from(row.cells, cell => cell.textContent));
      });
  }
}
