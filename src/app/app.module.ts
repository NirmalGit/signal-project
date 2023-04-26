import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ControllerComponent } from './change-detection/controller/controller.component';
import { Card1Component } from './change-detection/card1/card1.component';
import { Card2Component } from './change-detection/card2/card2.component';
import { Card4Component } from './change-detection/card4/card4.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ControllerComponent,
    Card1Component,
    Card2Component,
    Card4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
