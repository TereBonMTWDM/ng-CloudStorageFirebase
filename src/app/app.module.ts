import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {  AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCzPtfUFwpRCl4GOAYPV0GUsHAVBai_O5Q",
      authDomain: "testing-storage-18e83.firebaseapp.com",
      projectId: "testing-storage-18e83",
      storageBucket: "testing-storage-18e83.appspot.com",
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
