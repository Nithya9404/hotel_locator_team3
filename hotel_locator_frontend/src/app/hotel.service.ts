import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor(private http:HttpClient) { }
  search(value: string) {
    this.http.get(`http://localhost:8080/${value}`, {responseType: 'text'})
      .subscribe(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        // @ts-ignore
        this.mongoData = Array.from(table.rows, row => Array.from(row.cells, cell => cell.textContent));
      });
  }
}
