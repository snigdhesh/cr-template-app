import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { ChangeRequestComponentComponent } from './change-request-component/change-request-component.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicInfoFormComponent } from './basic-info-form/basic-info-form.component';
import { BusinessJustificationFormComponent } from './business-justification-form/business-justification-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeRequestComponentComponent,
    BasicInfoFormComponent,
    BusinessJustificationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
