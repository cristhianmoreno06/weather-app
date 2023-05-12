import { Component } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map: any;
  markers: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.map = L.map('map').setView([25.7617, -80.1918], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      minZoom: 3,
      maxZoom: 18
    }).addTo(this.map);

    this.getHumidityData();
  }

  getHumidityData() {
    this.http.get('http://weather_services.local/api/weather')
      .subscribe((data: any) => {
        console.log(data.data[0].long)
        for (let city of data.data) {
          let marker = L.marker([city.lat, city.long])
            .addTo(this.map)
            .bindPopup('<p>Ciudad: '+ city.city +'<br />Humedad: '+ city.humidity +' %</p>').openPopup();

          this.markers.push(marker);
        }
      });
  }
}
