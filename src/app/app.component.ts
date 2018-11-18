import { Component,  ElementRef, ViewChild, AfterViewInit, OnInit  } from '@angular/core';
import { GoogleMapsService } from 'google-maps-angular2';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Autocomplete';

  @ViewChild('mapElement') mapElement: ElementRef;
  @ViewChild('inputElement') inputElement: ElementRef;
  images: any = [1];
  private map: any;
  cityName: any = '';
  cityTiffinCentres: any = [];

  constructor(
               private gapi: GoogleMapsService,
               ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    /**
     * Init map api [google.maps]
     */
    this.gapi.init.then((maps: any) => {
      const loc = new maps.LatLng(55.81800989, 49.09815408);

      this.map = new maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        center: loc,
        scrollwheel: false,
        panControl: false,
        mapTypeControl: false,
        zoomControl: true,
        streetViewControl: false,
        scaleControl: true,
        zoomControlOptions: {
          style: maps.ZoomControlStyle.LARGE,
          position: maps.ControlPosition.RIGHT_BOTTOM
        }
      });

      const input = this.inputElement.nativeElement;
      const options = {
        componentRestrictions: { country: 'in' }
      };

      const autocomplete = new maps.places.Autocomplete(input, options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const location = place.geometry.location;

        this.map.setZoom(13);
        this.map.setCenter({
          lat: location.lat(),
          lng: location.lng()
        });
      });
    });
  }
}
