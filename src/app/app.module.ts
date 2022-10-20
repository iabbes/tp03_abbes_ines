import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantTetiereComponent } from './composant-tetiere/composant-tetiere.component';
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { ComposantFormulaireComponent } from './composant-formulaire/composant-formulaire.component';
import { ComposantRecapDataComponent } from './composant-recap-data/composant-recap-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './number.directive';
import { StringDirective } from './string.directive';
import { PhoneNumberPipe } from './phone-number.pipe';
import { FirstCapitalLetterPipe } from './first-capital-letter.pipe';
import { EmailDirective } from './email.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComposantTetiereComponent,
    ComposantFooterComponent,
    ComposantFormulaireComponent,
    ComposantRecapDataComponent,
    NumberDirective,
    StringDirective,
    PhoneNumberPipe,
    FirstCapitalLetterPipe,
    EmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
