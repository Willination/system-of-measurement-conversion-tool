import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { ConversionModel } from '../conversion-model';
import { ConversionService } from '../conversion.service';
import {ConversionApiService} from "../conversion-api.service";

@Component({
  selector: 'app-imperial-to-metric-form',
  templateUrl: './imperial-to-metric-form.component.html',
  styleUrls: ['./imperial-to-metric-form.component.css']
})
export class ImperialToMetricFormComponent implements OnInit {
  @Input() conversionModel!: ConversionModel;
  showError: boolean = false;

  constructor(private conversionService: ConversionService, private cdr: ChangeDetectorRef,private conversionApiService: ConversionApiService) {}

  conversionTypes: string[] = ['Temperature', 'Length', 'Weight'];
  metricUnits: string[] = [];
  imperialUnits: string[] = [];

  temperatureMetricUnits: string[] = ['Celsius', 'Kelvin'];
  temperatureImperialUnits: string[] = ['Fahrenheit'];

  lengthMetricUnits: string[] = ['Millimeters', 'Centimeters', 'Decimeters', 'Kilometers'];
  lengthImperialUnits: string[] = ['Inches', 'Feet', 'Yards', 'Miles'];

  weightMetricUnits: string[] = ['Milligrams', 'Grams', 'Decigrams', 'Kilograms', 'Metric Tons'];
  weightImperialUnits: string[] = ['Ounces', 'Pounds', 'US Short Tons'];

  ngOnInit() {
    this.conversionService.getConversionModel().subscribe((model) => {
      this.conversionModel = model;
      this.updateUnits();
      this.cdr.detectChanges();
    });
  }

  updateUnits() {
    switch (this.conversionModel.conversionType) {
      case 'Temperature':
        this.metricUnits = this.temperatureMetricUnits;
        this.imperialUnits = this.temperatureImperialUnits;
        break;
      case 'Length':
        this.metricUnits = this.lengthMetricUnits;
        this.imperialUnits = this.lengthImperialUnits;
        break;
      case 'Weight':
        this.metricUnits = this.weightMetricUnits;
        this.imperialUnits = this.weightImperialUnits;
        break;
      default:
        this.metricUnits = [];
        this.imperialUnits = [];
        break;
    }
  }

  convert() {
    if (!this.conversionModel.conversionType || !this.conversionModel.fromUnit || !this.conversionModel.toUnit || !this.conversionModel.fromValue) {
      this.showError = true;
      return;
    }
    this.showError = false;
    this.convertImperialToMetric();
  }

  resetForm() {
    this.conversionService.resetForm();
    this.showError = false;
  }

  convertImperialToMetric() {
    this.conversionApiService.convertImperialToMetric(this.conversionModel).subscribe(response => {
      this.conversionModel.toValue = response.toValue;
    });
  }
}
