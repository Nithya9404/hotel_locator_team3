import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div #map id="map" style="height: 500px; width: 100%;"></div>`
})
export class MapmumbaiComponent implements AfterViewInit {

  @ViewChild('map', {static: true}) mapContainer: ElementRef | undefined;

  map: L.Map | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.map = L.map(this.mapContainer.nativeElement).setView([19.0760,72.8777], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    const eiffelIcon = L.icon({
      iconUrl: 'assets/image/icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });
    let eiffelMarker = L.marker([18.9658045,72.8177497],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker.bindPopup("Hotel Minerva Residency - Near Grant Road Railway Station Mumbai").openPopup();
    let eiffelMarker1 = L.marker([18.9617639,72.8297838],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker1.bindPopup("Hotel Indore Palace").openPopup();
    let eiffelMarker2 = L.marker([18.9693888,72.8190798999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker2.bindPopup("Hotel Amber Palace Mumbai Central").openPopup();
    let eiffelMarker3 = L.marker([18.9579698,72.8169760999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker3.bindPopup("RK Hotel-Near Grant Road Railway Station").openPopup();
    let eiffelMarker4 = L.marker([18.9620309,72.8212264],{icon:eiffelIcon}).addTo(this.map)
    eiffelMarker4.bindPopup("Adiva Residency Beacon, Grant Road, Mumbai").openPopup();
    let eiffelMarker5 = L.marker([18.962498,72.814104],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker5.bindPopup("Krishna Palace Hotel").openPopup();
    let eiffelMarker6 = L.marker([18.9620309,72.8212264],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker6.bindPopup("Hotel Balwas").openPopup();
    let eiffelMarker7 = L.marker([18.9687193,72.8236913],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker7.bindPopup("The Sahil Hotel").openPopup();
    let eiffelMarker9 = L.marker([18.9619253,72.8235543],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker9.bindPopup("Hotel Briteway").openPopup();
    let eiffelMarker11 = L.marker([18.9710742,72.8237504],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker11.bindPopup("Royal Guest House by WB Inn").openPopup();
    let eiffelMarker12 = L.marker([18.9586365,72.8175572],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker12.bindPopup("Hotel Tourister").openPopup();
    let eiffelMarker13 = L.marker([18.9682443,72.8238592],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker13.bindPopup("Hotel Balwas International").openPopup();
    let eiffelMarker14 = L.marker([18.9633695,72.8211178],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker14.bindPopup("Hotel Kalpana Palace, Mumbai").openPopup();
    let eiffelMarker15 = L.marker([18.961787,72.8220307],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker15.bindPopup("Hotel Ashyana").openPopup();
    let eiffelMarker16 = L.marker([18.9615546,72.8194951],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker16.bindPopup("Itsy By Treebo - Heera International").openPopup();
    let eiffelMarker17 = L.marker([18.9613183,72.8175979],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker17.bindPopup("Empire Hotel - Grant Road").openPopup();
    let eiffelMarker18 = L.marker([18.9719768,72.8234501],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker18.bindPopup("YMCA International House").openPopup();
    let eiffelMarker19 = L.marker([18.9635359,72.8102311],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker19.bindPopup("Hotel Royal Castle").openPopup();
    let eiffelMarker20 = L.marker([18.9615368,72.8175582],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker20.bindPopup("Hotel Kumkum").openPopup();
  }
}
