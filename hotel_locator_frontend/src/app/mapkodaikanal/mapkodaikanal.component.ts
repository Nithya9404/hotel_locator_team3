import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div #map id="map" style="height: 500px; width: 100%;"></div>`
})
export class MapkodaikanalComponent implements AfterViewInit {

  @ViewChild('map', {static: true}) mapContainer: ElementRef | undefined;

  map: L.Map | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.map = L.map(this.mapContainer.nativeElement).setView([10.2381,77.4892], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    const eiffelIcon = L.icon({
      iconUrl: 'assets/image/icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });
    let eiffelMarker = L.marker([10.24258,77.4885068],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker.bindPopup("HFL International").openPopup();
    let eiffelMarker1 = L.marker([10.2424797,77.4880994999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker1.bindPopup("Minack Villa").openPopup();
    let eiffelMarker2 = L.marker([10.2391863,77.48592],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker2.bindPopup("Lumino Skypark").openPopup();
    let eiffelMarker3 = L.marker([10.2355985,77.4929533],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker3.bindPopup("Hotel Jc Grand").openPopup();
    let eiffelMarker4 = L.marker([10.2349329,77.4909416],{icon:eiffelIcon}).addTo(this.map)
    eiffelMarker4.bindPopup("Hotel Raindrops").openPopup();
    let eiffelMarker5 = L.marker([10.2365494,77.4911042],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker5.bindPopup("Hotel Seven Roads").openPopup();
    let eiffelMarker6 = L.marker([33.699631,-117.9177051],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker6.bindPopup("Bruton resorts").openPopup();
    let eiffelMarker7 = L.marker([10.2405383,77.4876336],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker7.bindPopup("FabHotel Eden Garden").openPopup();
    let eiffelMarker9 = L.marker([10.2365494,77.4911042],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker9.bindPopup("Treebo Trend Kodai Kings Park").openPopup();
    let eiffelMarker0 = L.marker([10.2381136,77.4891822],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker0.bindPopup("Adhiti Farm Stay").openPopup();

  }
}
