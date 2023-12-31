import {Component, Input} from '@angular/core';
import { ConversionModel } from '../conversion-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent {
  @Input() conversionModel!: ConversionModel;

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
    this.updateUnits();
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
    this.conversionModel.toValue = this.conversionModel.fromValue;
  }
}
