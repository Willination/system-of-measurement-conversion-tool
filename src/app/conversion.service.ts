
import { Injectable } from '@angular/core';
import { ConversionModel } from './conversion-model';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private conversionModel: ConversionModel;
  private conversionModelSubject: BehaviorSubject<ConversionModel>;

  constructor() {
    this.conversionModel = ConversionService.initializeModel();
    this.conversionModelSubject = new BehaviorSubject<ConversionModel>(this.conversionModel);
  }

  getConversionModel(): Observable<ConversionModel> {
    return this.conversionModelSubject.asObservable();
  }

  resetForm() {
    this.conversionModel = ConversionService.initializeModel();
    this.conversionModelSubject.next(this.conversionModel);
  }


  private static initializeModel(): ConversionModel {
    return {
      conversionType: '',
      fromUnit: '',
      toUnit: '',
      fromValue: null,
      toValue: null
    };
  }


}
