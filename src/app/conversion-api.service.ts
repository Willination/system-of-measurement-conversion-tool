import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConversionModel } from './conversion-model';

@Injectable({
  providedIn: 'root'
})
export class ConversionApiService {
  private apiUrl = 'http://localhost:8080/api/conversion';

  constructor(private httpClient: HttpClient) {}

  convertMetricToImperial(model: ConversionModel): Observable<ConversionModel> {
    return this.httpClient.post<ConversionModel>(`${this.apiUrl}/metric-to-imperial`, model);
  }

  convertImperialToMetric(model: ConversionModel): Observable<ConversionModel> {
    return this.httpClient.post<ConversionModel>(`${this.apiUrl}/imperial-to-metric`, model);
  }
}
