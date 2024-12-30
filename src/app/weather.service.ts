import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root'
})
export class WeatherService {


  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = 'YOU API KEY HERE';

 constructor(private http: HttpClient) { }

 getWeather(city: string): Observable<Weather> {
  const options = new HttpParams()
  .set('units', 'metric')
  .set('q', city)
  .set('appId', this.apiKey);

  return this.http.get<Weather>(this.apiUrl + 'weather', { params:
 options });
 }
}