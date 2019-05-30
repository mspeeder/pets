import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service'; // add
import { HttpClientModule } from '@angular/common/http'; // add
import { FormsModule } from '@angular/forms';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { NofoundComponent } from './nofound/nofound.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    NewComponent,
    DetailComponent,
    EditComponent,
    NofoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // add
    FormsModule //add
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
