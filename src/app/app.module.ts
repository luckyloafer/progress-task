import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckpointsComponent } from './components/checkpoints/checkpoints.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { QualityPackageComponent } from './components/quality-package/quality-package.component';
import { LocationTypesComponent } from './components/location-types/location-types.component';
import { LocationsComponent } from './components/locations/locations.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckpointsComponent,
    ActivitiesComponent,
    QualityPackageComponent,
    LocationTypesComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
