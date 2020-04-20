import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {  ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
// import { ToastrModule } from 'ngx-toastr';




import { CountryService } from 'src/app/country.service';

import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    LocalStorageComponent,
    CheckboxFilterComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
