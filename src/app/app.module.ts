import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReferenceComponent } from './reference/reference.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferenceComponent,
    CustomerlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
