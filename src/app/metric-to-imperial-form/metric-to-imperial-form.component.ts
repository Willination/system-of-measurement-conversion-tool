import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { ConversionModel } from '../conversion-model';
import { ConversionService } from '../conversion.service';
import {ConversionApiService} from "../conversion-api.service";

@Component({
  selector: 'app-metric-to-imperial-form',
  templateUrl: './metric-to-imperial-form.component.html',
  styleUrls: ['./metric-to-imperial-form.component.css']
})
export class MetricToImperialFormComponent implements OnInit {
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
      this.cdr.detectChanges(); // Trigger change detection
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

  /*  const fromValue = this.conversionModel.fromValue;*/

    this.convertMetricToImperial();

/*    switch (this.conversionModel.conversionType) {
      case 'Temperature':
        this.convertTemperature(fromValue);
        break;
      case 'Length':
        this.convertLength(fromValue);
        break;
      case 'Weight':
        this.convertWeight(fromValue);
        break;
      default:
        break;
    }*/
  }

/*  convertTemperature(value: number) {
    if (this.conversionModel.fromUnit === 'Celsius' && this.conversionModel.toUnit === 'Fahrenheit') {
      this.conversionModel.toValue = (value * 9 / 5) + 32;
    } else if (this.conversionModel.fromUnit === 'Celsius' && this.conversionModel.toUnit === 'Kelvin') {
      this.conversionModel.toValue = value + 273.15;
    } else if (this.conversionModel.fromUnit === 'Kelvin' && this.conversionModel.toUnit === 'Celsius') {
      this.conversionModel.toValue = value - 273.15;
    } else if (this.conversionModel.fromUnit === 'Kelvin' && this.conversionModel.toUnit === 'Fahrenheit') {
      this.conversionModel.toValue = (value - 273.15) * 9 / 5 + 32;
    } else if (this.conversionModel.fromUnit === 'Fahrenheit' && this.conversionModel.toUnit === 'Celsius') {
      this.conversionModel.toValue = (value - 32) * 5 / 9;
    } else if (this.conversionModel.fromUnit === 'Fahrenheit' && this.conversionModel.toUnit === 'Kelvin') {
      this.conversionModel.toValue = (value - 32) * 5 / 9 + 273.15;
    }
    if (this.conversionModel.toValue != null) {
      this.conversionModel.toValue = Number((this.conversionModel.toValue.toFixed(2)).toLocaleString());
    }
  }*/

/*  convertLength(value: number) {
    const inchToCentimeter = 2.54;
    const kilometerToMile = 0.621371;

    if (this.conversionModel.fromUnit === 'Inches' && this.conversionModel.toUnit === 'Centimeters') {
      this.conversionModel.toValue = value * inchToCentimeter;
    } else if (this.conversionModel.fromUnit === 'Inches' && this.conversionModel.toUnit === 'Feet') {
      this.conversionModel.toValue = value / 12;
    } else if (this.conversionModel.fromUnit === 'Inches' && this.conversionModel.toUnit === 'Yards') {
      this.conversionModel.toValue = value / 36;
    } else if (this.conversionModel.fromUnit === 'Inches' && this.conversionModel.toUnit === 'Miles') {
      this.conversionModel.toValue = value * inchToCentimeter / 100000 * kilometerToMile;
    } else if (this.conversionModel.fromUnit === 'Centimeters' && this.conversionModel.toUnit === 'Inches') {
      this.conversionModel.toValue = value / inchToCentimeter;
    } else if (this.conversionModel.fromUnit === 'Centimeters' && this.conversionModel.toUnit === 'Feet') {
      this.conversionModel.toValue = value / (inchToCentimeter * 12);
    } else if (this.conversionModel.fromUnit === 'Centimeters' && this.conversionModel.toUnit === 'Yards') {
      this.conversionModel.toValue = value / (inchToCentimeter * 36);
    } else if (this.conversionModel.fromUnit === 'Centimeters' && this.conversionModel.toUnit === 'Miles') {
      this.conversionModel.toValue = value / (inchToCentimeter * 100000) * kilometerToMile;
    }
    if (this.conversionModel.toValue != null) {
      this.conversionModel.toValue = Number((this.conversionModel.toValue.toFixed(2)).toLocaleString());
    }
  }*/

  /*convertWeight(value: number) {
    const poundToKilogram = 0.453592;
    const gramToMilligram = 1000;
    const tonToKilogram = 907.185;

    if (this.conversionModel.fromUnit === 'Pounds' && this.conversionModel.toUnit === 'Kilograms') {
      this.conversionModel.toValue = value * poundToKilogram;
    } else if (this.conversionModel.fromUnit === 'Pounds' && this.conversionModel.toUnit === 'Milligrams') {
      this.conversionModel.toValue = value * poundToKilogram * 1000 * gramToMilligram;
    } else if (this.conversionModel.fromUnit === 'Pounds' && this.conversionModel.toUnit === 'Metric Tons') {
      this.conversionModel.toValue = value * poundToKilogram / tonToKilogram;
    } else if (this.conversionModel.fromUnit === 'Ounces' && this.conversionModel.toUnit === 'Grams') {
      this.conversionModel.toValue = value * gramToMilligram;
    } else if (this.conversionModel.fromUnit === 'Ounces' && this.conversionModel.toUnit === 'Kilograms') {
      this.conversionModel.toValue = value * gramToMilligram / 1000 * poundToKilogram;
    } else if (this.conversionModel.fromUnit === 'Ounces' && this.conversionModel.toUnit === 'Metric Tons') {
      this.conversionModel.toValue = value * gramToMilligram / 1000 * poundToKilogram / tonToKilogram;
    } else if (this.conversionModel.fromUnit === 'US Short Tons' && this.conversionModel.toUnit === 'Kilograms') {
      this.conversionModel.toValue = value * tonToKilogram;
    } else if (this.conversionModel.fromUnit === 'US Short Tons' && this.conversionModel.toUnit === 'Milligrams') {
      this.conversionModel.toValue = value * tonToKilogram * 1000 * gramToMilligram;
    } else if (this.conversionModel.fromUnit === 'US Short Tons' && this.conversionModel.toUnit === 'Pounds') {
      this.conversionModel.toValue = value * tonToKilogram / poundToKilogram;
    }
    if (this.conversionModel.toValue != null) {
      this.conversionModel.toValue = Number((this.conversionModel.toValue.toFixed(2)).toLocaleString());
    }
  }*/

  resetForm() {
    this.conversionService.resetForm();
    this.showError = false;
  }

  convertMetricToImperial() {
    this.conversionApiService.convertMetricToImperial(this.conversionModel).subscribe(response => {
      this.conversionModel.toValue = response.toValue;
    });
  }

}
