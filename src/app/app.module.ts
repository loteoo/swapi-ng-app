import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmComponent } from './film/film.component';
import { PersonComponent } from './person/person.component';
import { PlanetComponent } from './planet/planet.component';
import { SpecieComponent } from './specie/specie.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HomeComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent,
    FilmComponent,
    PersonComponent,
    PlanetComponent,
    SpecieComponent,
    StarshipComponent,
    VehicleComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
