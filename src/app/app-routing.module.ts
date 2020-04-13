import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes:Routes=[
        {path:"login",component:LoginComponent},
        {path:"reactive",component:ReactiveFormsComponent},
        {path:"template",component:TemplateFormsComponent},
        {path:"localStorage",component:LocalStorageComponent},
        {path:"checkBoxFilter",component:CheckboxFilterComponent}
]
@NgModule({
    declarations: [
      
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule { }