import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared.module';
import { CompanionModule } from './companion/companion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    NavigationModule,
    SharedModule,
    CompanionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
