import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import * as L from 'leaflet';

@Component({
  selector: 'app-mapbanglore',
  templateUrl: './mapbanglore.component.html',
  styleUrls: ['./mapbanglore.component.css']
})
export class MapbangloreComponent implements OnInit{
  map: L.Map;
 constructor() {
 }
  ngOnInit() {
    this.map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.setView([10.2381, 77.4892], 16);

    let eiffelMarker = L.marker([10.24258, 77.4885068]).addTo(this.map);
    eiffelMarker.bindPopup("HFL International").openPopup();
    let eiffelMarker1 = L.marker([10.2424797,77.4880994999999]).addTo(this.map);
    eiffelMarker1.bindPopup("Minack Villa").openPopup();
    let eiffelMarker2 = L.marker([10.2391863,77.48592]).addTo(this.map);
    eiffelMarker2.bindPopup("Lumino Skypark").openPopup();
    let eiffelMarker3 = L.marker([10.2355985,77.4929533]).addTo(this.map);
    eiffelMarker3.bindPopup("Hotel Jc Grand").openPopup();
    let eiffelMarker4 = L.marker([10.2349329,77.4909416]).addTo(this.map)
    eiffelMarker4.bindPopup("Hotel Raindrops").openPopup();
    let eiffelMarker5 = L.marker([10.2365494,77.4911042]).addTo(this.map);
    eiffelMarker5.bindPopup("Hotel Seven Roads").openPopup();
    let eiffelMarker6 = L.marker([33.699631,-117.9177051]).addTo(this.map);
    eiffelMarker6.bindPopup("Bruton resorts").openPopup();
    let eiffelMarker7 = L.marker([10.2405383,77.4876336]).addTo(this.map);
    eiffelMarker7.bindPopup("FabHotel Eden Garden").openPopup();
    let eiffelMarker9 = L.marker([10.2365494,77.4911042]).addTo(this.map);
    eiffelMarker9.bindPopup("Treebo Trend Kodai Kings Park").openPopup();
    let eiffelMarker0 = L.marker([10.2381136,77.4891822]).addTo(this.map);
    eiffelMarker0.bindPopup("Adhiti Farm Stay").openPopup();

  }

}
