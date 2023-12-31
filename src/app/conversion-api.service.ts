import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConversionModel } from './conversion-model';

@Injectable({
  providedIn: 'root'
})
export class ConversionApiService {
 /* private apiUrl = 'http://localhost:8080/api/conversion';*/
  private apiUrl = 'http://18.232.120.185:8080/system-of-measurement-conversion-tool-spring-0.0.1-SNAPSHOT/api/conversion';

  constructor(private httpClient: HttpClient) {}

  convertMetricToImperial(model: ConversionModel): Observable<ConversionModel> {
    return this.httpClient.post<ConversionModel>(`${this.apiUrl}/metric-to-imperial`, model);
  }

  convertImperialToMetric(model: ConversionModel): Observable<ConversionModel> {
    return this.httpClient.post<ConversionModel>(`${this.apiUrl}/imperial-to-metric`, model);
  }
}
