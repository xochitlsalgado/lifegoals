import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// --- NUEVAS IMPORTACIONES PARA FIREBASE Y FORMULARIOS ---
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment'; 
// -------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // --- AGREGAMOS ESTOS MÓDULOS AQUÍ ---
    FormsModule,                                      // Permite usar [(ngModel)]
    AngularFireModule.initializeApp(environment.firebaseConfig), // Conecta con tus llaves
    AngularFirestoreModule                            // Permite usar la base de datos
    // ------------------------------------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
