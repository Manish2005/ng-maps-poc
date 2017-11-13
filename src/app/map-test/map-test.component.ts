import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.scss']
})
export class MapTestComponent implements OnInit {

  @ViewChild('map') mapContainer: ElementRef;
  dummyData = [{ "address_components": [{ "long_name": "Unnamed Road", "short_name": "Unnamed Road", "types": ["route"] }, { "long_name": "İkizdere", "short_name": "İkizdere", "types": ["administrative_area_level_2", "political"] }, { "long_name": "Rize", "short_name": "Rize", "types": ["administrative_area_level_1", "political"] }, { "long_name": "Turkey", "short_name": "TR", "types": ["country", "political"] }, { "long_name": "53690", "short_name": "53690", "types": ["postal_code"] }], "formatted_address": "Unnamed Road, 53690 İkizdere/Rize, Turkey", "geometry": { "bounds": { "northeast": { "lat": 40.7269632, "lng": 40.718551 }, "southwest": { "lat": 40.699545, "lng": 40.6738931 } }, "location": { "lat": 40.71056069999999, "lng": 40.71816219999999 }, "location_type": "GEOMETRIC_CENTER", "viewport": { "northeast": { "lat": 40.7269632, "lng": 40.718551 }, "southwest": { "lat": 40.699545, "lng": 40.6738931 } } }, "place_id": "ChIJdyTYrxT7ZUARNjV6Va_5Wzo", "types": ["route"] }, { "address_components": [{ "long_name": "Sivrikaya Köyü", "short_name": "Sivrikaya Köyü", "types": ["administrative_area_level_3", "political"] }, { "long_name": "İkizdere", "short_name": "İkizdere", "types": ["administrative_area_level_2", "political"] }, { "long_name": "Rize", "short_name": "Rize", "types": ["administrative_area_level_1", "political"] }, { "long_name": "Turkey", "short_name": "TR", "types": ["country", "political"] }, { "long_name": "53690", "short_name": "53690", "types": ["postal_code"] }], "formatted_address": "53690 Sivrikaya Köyü/İkizdere/Rize, Turkey", "geometry": { "bounds": { "northeast": { "lat": 40.728402, "lng": 40.79813000000001 }, "southwest": { "lat": 40.5793, "lng": 40.6697109 } }, "location": { "lat": 40.6541711, "lng": 40.7189936 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 40.728402, "lng": 40.79813000000001 }, "southwest": { "lat": 40.5793, "lng": 40.6697109 } } }, "place_id": "ChIJVdvz3Ef6ZUAREI5r2wJMHBA", "types": ["administrative_area_level_3", "political"] }, { "address_components": [{ "long_name": "53690", "short_name": "53690", "types": ["postal_code"] }, { "long_name": "İkizdere", "short_name": "İkizdere", "types": ["administrative_area_level_2", "political"] }, { "long_name": "Rize", "short_name": "Rize", "types": ["administrative_area_level_1", "political"] }, { "long_name": "Turkey", "short_name": "TR", "types": ["country", "political"] }], "formatted_address": "53690 İkizdere/Rize, Turkey", "geometry": { "bounds": { "northeast": { "lat": 40.84295789999999, "lng": 40.9127408 }, "southwest": { "lat": 40.516908, "lng": 40.4189149 } }, "location": { "lat": 40.6488372, "lng": 40.6141738 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 40.84295789999999, "lng": 40.9127408 }, "southwest": { "lat": 40.516908, "lng": 40.4189149 } } }, "place_id": "ChIJX9zwx4n6ZUARDah0i8WatT4", "types": ["postal_code"] }, { "address_components": [{ "long_name": "İkizdere", "short_name": "İkizdere", "types": ["administrative_area_level_2", "political"] }, { "long_name": "Rize", "short_name": "Rize", "types": ["administrative_area_level_1", "political"] }, { "long_name": "Turkey", "short_name": "TR", "types": ["country", "political"] }], "formatted_address": "İkizdere/Rize, Turkey", "geometry": { "bounds": { "northeast": { "lat": 40.84295789999999, "lng": 40.9127408 }, "southwest": { "lat": 40.516908, "lng": 40.4189149 } }, "location": { "lat": 40.6488372, "lng": 40.6141738 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 40.84295789999999, "lng": 40.9127408 }, "southwest": { "lat": 40.516908, "lng": 40.4189149 } } }, "place_id": "ChIJX9zwx4n6ZUARgRIT2tB3TAo", "types": ["administrative_area_level_2", "political"] }, { "address_components": [{ "long_name": "Rize", "short_name": "Rize", "types": ["administrative_area_level_1", "political"] }, { "long_name": "Turkey", "short_name": "TR", "types": ["country", "political"] }], "formatted_address": "Rize, Turkey", "geometry": { "bounds": { "northeast": { "lat": 41.321822, "lng": 41.374961 }, "southwest": { "lat": 40.516908, "lng": 40.3304439 } }, "location": { "lat": 40.95814970000001, "lng": 40.9226985 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 41.321822, "lng": 41.374961 }, "southwest": { "lat": 40.516908, "lng": 40.3304439 } } }, "place_id": "ChIJE9z2qBASZkARUaA4l5PWHH4", "types": ["administrative_area_level_1", "political"] }, { "address_components": [{ "long_name": "Turkey", "short_name": "TR", "types": ["country", "political"] }], "formatted_address": "Turkey", "geometry": { "bounds": { "northeast": { "lat": 42.3666999, "lng": 44.8178449 }, "southwest": { "lat": 35.808592, "lng": 25.5377 } }, "location": { "lat": 38.963745, "lng": 35.243322 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 42.3666999, "lng": 44.8178449 }, "southwest": { "lat": 35.808592, "lng": 25.5377 } } }, "place_id": "ChIJcSZPllwVsBQRKl9iKtTb2UA", "types": ["country", "political"] }];
  map: any;
  infowindow: any;
  geoCodingApi = 'https://maps.googleapis.com/maps/api/geocode/json';
  apiKey = 'AIzaSyB5-MmtlGR9s1SJRZI2jW7IXGGKef5YKqM';

  selectedLocation: any = { geometry: {}, details: [] };
  locations: any[];
  constructor(
    private httpClient: HttpClient,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    var pyrmont = { lat: 40.714224, lng: -73.961452 };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, {
      center: pyrmont,
      zoom: 15
    });

    this.infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: pyrmont,
      radius: 500,
      type: 'store'
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    });
  }

  createMarker(place) {
    const ctx = this;
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: ctx.map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
      ctx.infowindow.setContent(`${place.name}`);
      ctx.infowindow.open(ctx.map, this);
      // ctx.locations = ctx.dummyData;
      ctx.loadLocationDetails(place);
    });
  }

  loadLocationDetails(place) {
    this.selectedLocation.geometry = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };
    this.httpClient.get(`${this.geoCodingApi}?latlng=${this.selectedLocation.geometry.lat},${this.selectedLocation.geometry.lat}&key=${this.apiKey}`)
      .subscribe((resp: any) => {
        this.locations = resp.results;
        this.changeDetection.detectChanges();
      }, (err) => {
        alert('Error occurred while fetching location details for selected marker.');
      })
  }
}
