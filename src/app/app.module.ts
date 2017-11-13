import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomLabelComponent } from './label/label.component';
import { UtilService } from './util.service';
import { MapTestComponent } from './map-test/map-test.component';
import { AppRoutingModule } from './app-routing.module';
import { FormTestComponent } from './form-test/form-test.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [AppComponent, CustomLabelComponent, MapTestComponent, FormTestComponent],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
