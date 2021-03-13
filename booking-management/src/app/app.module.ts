import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainComponent } from './main/main.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { BusinessPreferencesComponent } from './business-preferences/business-preferences.component';
import { BusinessPackageComponent } from './business-package/business-package.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BusinessDetailsComponent,
    OwnerDetailsComponent,
    BusinessPreferencesComponent,
    BusinessPackageComponent,
    BankDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
   
  ]
})
export class AppModule { }
