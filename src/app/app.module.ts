import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KupacComponent } from './kupac/kupac.component';
import { ProizvodComponent } from './proizvod/proizvod.component';
import { RacunComponent } from './racun/racun.component';
import { TransakcijeComponent } from './transakcije/transakcije.component';
import { ShowKupacComponent } from './kupac/show-kupac/show-kupac.component';
import { AddEditKupacComponent } from './kupac/add-edit-kupac/add-edit-kupac.component';
import { ShowTransakcijeComponent } from './transakcije/show-transakcije/show-transakcije.component';
import { AddEditTransakcijeComponent } from './transakcije/add-edit-transakcije/add-edit-transakcije.component';
import { ShowProizvodComponent } from './proizvod/show-proizvod/show-proizvod.component';
import { AddEditProizvodComponent } from './proizvod/add-edit-proizvod/add-edit-proizvod.component';

@NgModule({
  declarations: [
    AppComponent,
    KupacComponent,
    ProizvodComponent,
    RacunComponent,
    TransakcijeComponent,
    ShowKupacComponent,
    AddEditKupacComponent,
    ShowTransakcijeComponent,
    AddEditTransakcijeComponent,
    ShowProizvodComponent,
    AddEditProizvodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
