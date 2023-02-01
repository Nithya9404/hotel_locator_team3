import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hotelooty',
  templateUrl: './hotelooty.component.html',
  styleUrls: ['./hotelooty.component.css']
})
export class HotelootyComponent {
  ootyresults : any;
  constructor(private http:HttpClient){
    this.http.get('http://localhost:8080/ooty', { responseType: 'text' })
      .subscribe(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        // @ts-ignore
        this.ootyresults = Array.from(table.rows, row => Array.from(row.cells, cell => cell.textContent));
      });
  }
}
