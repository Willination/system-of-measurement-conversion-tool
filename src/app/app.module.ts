import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';
import { MetricToImperialFormComponent } from './metric-to-imperial-form/metric-to-imperial-form.component';
import { ImperialToMetricFormComponent } from './imperial-to-metric-form/imperial-to-metric-form.component';
import {ConversionService} from "./conversion.service";
import {ConversionApiService} from "./conversion-api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ConversionFormComponent,
    MetricToImperialFormComponent,
    ImperialToMetricFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConversionService,ConversionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
