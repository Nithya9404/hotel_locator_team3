import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div #map id="map" style="height: 500px; width: 100%;"></div>`
})
export class MapbangloreComponent implements AfterViewInit {

  @ViewChild('map', {static: true}) mapContainer: ElementRef | undefined;

  map: L.Map | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.map = L.map(this.mapContainer.nativeElement).setView([12.9716,77.5946], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    const eiffelIcon = L.icon({
      iconUrl: 'assets/image/icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });

    let eiffelMarker = L.marker([12.9725434,77.59996],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker.bindPopup("Omatra Infantry Road").openPopup();
    let eiffelMarker1 = L.marker([12.9796053,77.6037684],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker1.bindPopup("Melange Luxury Serviced Apartments").openPopup();
    let eiffelMarker2 = L.marker([12.9710529,77.597139],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker2.bindPopup("Vivanta Bengaluru Residency Road").openPopup();
    let eiffelMarker3 = L.marker([12.9715579,77.6061223999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker3.bindPopup("Octave Kings Suites").openPopup();
    let eiffelMarker4 = L.marker([12.9705894,77.6041179],{icon:eiffelIcon}).addTo(this.map)
    eiffelMarker4.bindPopup("Monarch Brigade Road").openPopup();
    let eiffelMarker5 = L.marker([12.972852,77.6075],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker5.bindPopup("Monarch Luxur - Infantry Road").openPopup();
    let eiffelMarker6 = L.marker([12.9803,77.605012],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker6.bindPopup("Nahar Heritage Hotel").openPopup();
    let eiffelMarker7 = L.marker([12.9710454,77.6007245],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker7.bindPopup("FabHotel Phoenix Resorts").openPopup();
    let eiffelMarker9 = L.marker([12.9815133,77.6041802],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker9.bindPopup("Zone By The Park Infantry Bengaluru\"").openPopup();
    let eiffelMarker11 = L.marker([12.980724,77.604738],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker11.bindPopup("Ivory Tower").openPopup();
    let eiffelMarker12 = L.marker([12.9755981,77.6052364999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker12.bindPopup("Locul.Central").openPopup();
    let eiffelMarker13 = L.marker([12.9748195,77.6067975],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker13.bindPopup("Iris Hotel & Spa").openPopup();
    let eiffelMarker14 = L.marker([12.9659438,77.6057368],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker14.bindPopup("Hotel Richmond Residency").openPopup();
    let eiffelMarker15 = L.marker([12.9671979,77.6061979],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker15.bindPopup("Hotel Vellara").openPopup();
    let eiffelMarker16 = L.marker([12.9675267,77.6077947],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker16.bindPopup("FabHotel DP's Crown").openPopup();
    let eiffelMarker17 = L.marker([12.9810824,77.6114456999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker17.bindPopup("Taura Comfort").openPopup();
    let eiffelMarker18 = L.marker([12.9674414,77.6080958],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker18.bindPopup("FAMILY FRIENDLY STUDIO APARTMENT").openPopup();
    let eiffelMarker19 = L.marker([12.9696357,77.6066115],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker19.bindPopup("apital Residency").openPopup();
    let eiffelMarker20 = L.marker([12.9828414,77.5962715],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker20.bindPopup("Mastiff Infantry Bengaluru").openPopup();

  }
}














