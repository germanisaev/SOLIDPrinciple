import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { heLocale, esLocale, ptBrLocale, enGbLocale, ruLocale, frLocale } from 'ngx-bootstrap/locale';
defineLocale('he', heLocale); 
defineLocale('es', esLocale);
defineLocale('pt-br', ptBrLocale);
defineLocale('en-gb', enGbLocale);
defineLocale('ru', ruLocale);
defineLocale('fr', frLocale);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'he'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
