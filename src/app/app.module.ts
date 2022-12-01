import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
