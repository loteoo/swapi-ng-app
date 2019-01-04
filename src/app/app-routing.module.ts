import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipComponent } from './starship/starship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SpeciesComponent } from './species/species.component';
import { SpecieComponent } from './specie/specie.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';
import { CounterComponent } from './counter/counter.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PersonComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'films/:id', component: FilmComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'starships/:id', component: StarshipComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicles/:id', component: VehicleComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'species/:id', component: SpecieComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:id', component: PlanetComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'crud', component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
