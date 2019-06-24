import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  lat: number = 35.7074736;
  lng: number = 139.9567728;
  zoom: number = 17;

  ngOnInit() {
  }

}
