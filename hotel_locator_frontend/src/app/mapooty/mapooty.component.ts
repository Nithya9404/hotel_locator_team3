import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div #map id="map" style="height: 500px; width: 100%;"></div>`
})
export class MapootyComponent implements AfterViewInit {

  @ViewChild('map', {static: true}) mapContainer: ElementRef | undefined;

  map: L.Map | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.map = L.map(this.mapContainer.nativeElement).setView([11.4102,76.6950], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    const eiffelIcon = L.icon({
      iconUrl: 'assets/image/icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });
    let eiffelMarker = L.marker([11.4041858,76.6939932],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker.bindPopup("Hotel City Palace").openPopup();
    let eiffelMarker1 = L.marker([11.413897,76.6878776],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker1.bindPopup("West Downs - The Heritage Resort").openPopup();
    let eiffelMarker2 = L.marker([11.4040343,76.7019038],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker2.bindPopup("HAPPYSTAY rooms and cottages").openPopup();
    let eiffelMarker3 = L.marker([11.4061473,76.7013529],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker3.bindPopup("kurinji residency").openPopup();
    let eiffelMarker4 = L.marker([11.4135912,76.6963918],{icon:eiffelIcon}).addTo(this.map)
    eiffelMarker4.bindPopup("Prakash Residency").openPopup();
    let eiffelMarker5 = L.marker([11.4134503,76.6957922],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker5.bindPopup("Avalon Stays").openPopup();
    let eiffelMarker6 = L.marker([11.4128691,76.6920284999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker6.bindPopup("Hillcrest Metro").openPopup();
    let eiffelMarker7 = L.marker([11.4251784,76.8453965],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker7.bindPopup("OYO 70390 Jayam Ooty Residency").openPopup();
    let eiffelMarker9 = L.marker([11.4039219,76.6982865],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker9.bindPopup("Hotel Maneck Residency").openPopup();
    let eiffelMarker11 = L.marker([11.4096273,76.6921785999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker11.bindPopup("yasu farm villa").openPopup();
    let eiffelMarker12 = L.marker([11.4096273,76.6921786],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker12.bindPopup("OYO Flagship 70095 Key Heaven").openPopup();
    let eiffelMarker13 = L.marker([18.9682443,72.8238592],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker13.bindPopup("V.R.NEST").openPopup();
    let eiffelMarker14 = L.marker([11.4089947,76.6873603],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker14.bindPopup("Treebo Trend Ooty Residency").openPopup();
    let eiffelMarker15 = L.marker([11.4040343,76.7019038],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker15.bindPopup("Aakash Rooms and Cottages").openPopup();
    let eiffelMarker16 = L.marker([11.4129546,76.6967663],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker16.bindPopup("SAIBALA RESlDENCY - NEAR BOAT HOUSE").openPopup();
    let eiffelMarker17 = L.marker([11.4102579,76.6956094],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker17.bindPopup("Treebo Trend Atithi Bhavan Ooty").openPopup();
    let eiffelMarker18 = L.marker([11.4102038,76.6950324],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker18.bindPopup("Welbeck Inn Resort By Lexstays").openPopup();
    let eiffelMarker19 = L.marker([11.4003551,76.6997159],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker19.bindPopup("Ooty Stay Awhile").openPopup();
    let eiffelMarker20 = L.marker([11.4094859,76.6927927],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker20.bindPopup("Itsy By Treebo - Rosefield Heritage").openPopup();
    let eiffelMarker21 = L.marker([11.4132604,76.6900469999999],{icon:eiffelIcon}).addTo(this.map);
    eiffelMarker21.bindPopup("Rustic Cottage").openPopup();
  }
}
