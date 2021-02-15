import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './comp/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogLogoutComponent } from './comp/dialog-logout/dialog-logout.component';
import { ListaComponent } from './comp/lista/lista.component'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DialogLogoutComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule, MatIconModule,
    AppRoutingModule, MatButtonModule, MatTableModule,
    BrowserAnimationsModule, MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
