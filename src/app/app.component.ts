import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text : string = 'map display';
  lat: number = 35.681236 ;
  lng: number = 139.767125;
  zoom: number = 15;
}
