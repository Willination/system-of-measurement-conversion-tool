import { Component } from '@angular/core';
import {ConversionModel} from "./conversion-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainTitle: string = 'System of Measurement Conversion Tool';
  selectedTab: 'metricToImperial' | 'imperialToMetric' = 'metricToImperial';
  conversionModel: ConversionModel = {
    conversionType: 'Temperature',
    fromUnit: '',
    toUnit: '',
    fromValue: 0,
    toValue: 0,
  };

  selectTab(tab: 'metricToImperial' | 'imperialToMetric') {
    this.selectedTab = tab;
    // You can also reset or initialize other properties here based on the selected tab
  }

  getConversionFormHeading(): string {
    return this.selectedTab === 'metricToImperial' ? 'Metric to Imperial Converter' : 'Imperial to Metric Converter';
  }
}
