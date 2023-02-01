import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hotelmumbai',
  templateUrl: './hotelmumbai.component.html',
  styleUrls: ['./hotelmumbai.component.css']
})
export class HotelmumbaiComponent {
  mumbairesults : any;
  constructor(private http:HttpClient){
    this.http.get('http://localhost:8080/mumbai', { responseType: 'text' })
      .subscribe(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        // @ts-ignore
        this.mumbairesults = Array.from(table.rows, row => Array.from(row.cells, cell => cell.textContent));
      });
  }
}
