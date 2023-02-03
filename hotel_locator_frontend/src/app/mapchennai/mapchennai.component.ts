import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div #map id="map" style="height: 500px; width: 100%;"></div>`
})
export class MapchennaiComponent implements AfterViewInit {

  @ViewChild('map', {static: true}) mapContainer: ElementRef | undefined;

  map: L.Map | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.map = L.map(this.mapContainer.nativeElement).setView([113.0827,80.2707], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    const eiffelIcon = L.icon({
      iconUrl: 'assets/image/icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });

    let eiffelMarker = L.marker([13.040176,80.2404608],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker.bindPopup("Itsy By Treebo - Deluxe Inn").openPopup();
    let eiffelMarker1 = L.marker([13.0391879,80.236684],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker1.bindPopup("Sreedevi Residency").openPopup();
    let eiffelMarker2 = L.marker([13.0385156,80.2401218],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker2.bindPopup("FabHotel Blossoms Service Apartment").openPopup();
    let eiffelMarker3 = L.marker([13.0428065,80.2259052],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker3.bindPopup("Lovely 1 bedroom/kichn flat in Chennai prime area").openPopup();
    let eiffelMarker4 = L.marker([13.0350615,80.2334308],{icon:eiffelIcon}).addTo(this.map)
    eiffelMarker4.bindPopup("NACHIAPPA PARK T.NAGAR").openPopup();
    let eiffelMarker5 = L.marker([13.0356366,80.231947],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker5.bindPopup("HOME STAY NEAR TNAGAR").openPopup();
    let eiffelMarker6 = L.marker([13.0454472,80.232064],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker6.bindPopup("Flagship 5765 Chennai Residency T Nagar").openPopup();
    let eiffelMarker7 = L.marker([13.038975,80.2300993],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker7.bindPopup("Taz Kamar Family Hotel").openPopup();
    let eiffelMarker9 = L.marker([13.0372053,80.2324103],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker9.bindPopup("Hotel Kheni").openPopup();
    let eiffelMarker11 = L.marker([13.0371872,80.2314851],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker11.bindPopup("Collection O 67653 Bkr Grand Hotel").openPopup();
    let eiffelMarker12 = L.marker([13.037066,80.23213],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker12.bindPopup("JJS MINI AC PARTY HALL").openPopup();
    let eiffelMarker13 = L.marker([13.0412755,80.2370676],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker13.bindPopup("Rich Inn Studios and Suites").openPopup();
    let eiffelMarker14 = L.marker([13.0394671,80.235412],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker14.bindPopup("Grand Galaxy").openPopup();
    let eiffelMarker15 = L.marker([13.0394671,80.235412],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker15.bindPopup("Sunshine Stay").openPopup();
    let eiffelMarker16 = L.marker([13.0443395,80.2223942],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker16.bindPopup("The Saibaba Hotel").openPopup();
    let eiffelMarker17 = L.marker([13.0451686,80.2451244],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker17.bindPopup("FabHotel Skyry").openPopup();
    let eiffelMarker18 = L.marker([13.044695,80.242199],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker18.bindPopup("Quality Inn Sabari").openPopup();
    let eiffelMarker19 = L.marker([13.0475145,80.2400929],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker19.bindPopup("The Residency Towers").openPopup();
    let eiffelMarker20 = L.marker([13.0405211,80.2437557],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker20.bindPopup("Phoenix Serviced Apartment - Sai Illam").openPopup();
    let eiffelMarker21 = L.marker([13.0412372,80.2371174],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker21.bindPopup("Treebo Trend U Hotels Pondy Bazar").openPopup();

  }
}














