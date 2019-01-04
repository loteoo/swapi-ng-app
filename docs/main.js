(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _films_films_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./films/films.component */ "./src/app/films/films.component.ts");
/* harmony import */ var _film_film_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./film/film.component */ "./src/app/film/film.component.ts");
/* harmony import */ var _starships_starships_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./starships/starships.component */ "./src/app/starships/starships.component.ts");
/* harmony import */ var _starship_starship_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./starship/starship.component */ "./src/app/starship/starship.component.ts");
/* harmony import */ var _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicles/vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _species_species_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./species/species.component */ "./src/app/species/species.component.ts");
/* harmony import */ var _specie_specie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./specie/specie.component */ "./src/app/specie/specie.component.ts");
/* harmony import */ var _planets_planets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./planets/planets.component */ "./src/app/planets/planets.component.ts");
/* harmony import */ var _planet_planet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./planet/planet.component */ "./src/app/planet/planet.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _crud_crud_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./crud/crud.component */ "./src/app/crud/crud.component.ts");


















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"] },
    { path: 'people/:id', component: _person_person_component__WEBPACK_IMPORTED_MODULE_5__["PersonComponent"] },
    { path: 'films', component: _films_films_component__WEBPACK_IMPORTED_MODULE_6__["FilmsComponent"] },
    { path: 'films/:id', component: _film_film_component__WEBPACK_IMPORTED_MODULE_7__["FilmComponent"] },
    { path: 'starships', component: _starships_starships_component__WEBPACK_IMPORTED_MODULE_8__["StarshipsComponent"] },
    { path: 'starships/:id', component: _starship_starship_component__WEBPACK_IMPORTED_MODULE_9__["StarshipComponent"] },
    { path: 'vehicles', component: _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_10__["VehiclesComponent"] },
    { path: 'vehicles/:id', component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_11__["VehicleComponent"] },
    { path: 'species', component: _species_species_component__WEBPACK_IMPORTED_MODULE_12__["SpeciesComponent"] },
    { path: 'species/:id', component: _specie_specie_component__WEBPACK_IMPORTED_MODULE_13__["SpecieComponent"] },
    { path: 'planets', component: _planets_planets_component__WEBPACK_IMPORTED_MODULE_14__["PlanetsComponent"] },
    { path: 'planets/:id', component: _planet_planet_component__WEBPACK_IMPORTED_MODULE_15__["PlanetComponent"] },
    { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_16__["CounterComponent"] },
    { path: 'crud', component: _crud_crud_component__WEBPACK_IMPORTED_MODULE_17__["CrudComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main.container {\r\n  margin-top: 3em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui main container\">\r\n  <div class=\"ui two column padded grid\">\r\n    <div class=\"five wide column\">\r\n      <h1>Angular App</h1>\r\n      <div class=\"ui vertical menu\">\r\n        <div class=\"item\">\r\n          <div class=\"menu\">\r\n            <a class=\"item\" routerLink=\"\" routerLinkActive=\"active\">Home</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <div class=\"header\">Star Wars</div>\r\n          <div class=\"menu\">\r\n            <a class=\"item\" routerLink=\"/people\" routerLinkActive=\"active\">People</a>\r\n            <a class=\"item\" routerLink=\"/films\" routerLinkActive=\"active\">Films</a>\r\n            <a class=\"item\" routerLink=\"/starships\" routerLinkActive=\"active\">Starships</a>\r\n            <a class=\"item\" routerLink=\"/vehicles\" routerLinkActive=\"active\">Vehicles</a>\r\n            <a class=\"item\" routerLink=\"/species\" routerLinkActive=\"active\">Species</a>\r\n            <a class=\"item\" routerLink=\"/planets\" routerLinkActive=\"active\">Planets</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <div class=\"header\">Random</div>\r\n          <div class=\"menu\">\r\n            <a class=\"item\" routerLink=\"/counter\" routerLinkActive=\"active\">Counter</a>\r\n            <a class=\"item\" routerLink=\"/crud\" routerLinkActive=\"active\">To-do list</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <div class=\"header\">About</div>\r\n          <div class=\"menu\">\r\n            <a href=\"https://github.com/loteoo/swapi-ng-app\" target=\"_blank\" class=\"item\">Source code</a>\r\n            <a href=\"https://alexlotte.ca\" target=\"_blank\" class=\"item\">Author</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <div class=\"header\">Built with</div>\r\n          <div class=\"menu\">\r\n            <a href=\"https://angular.io/\" target=\"_blank\" class=\"item\">Angular 7</a>\r\n            <a href=\"https://semantic-ui.com/\" target=\"_blank\" class=\"item\">Sementic UI</a>\r\n            <a href=\"https://swapi.co/\" target=\"_blank\" class=\"item\">Swapi</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui eleven wide column\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _films_films_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./films/films.component */ "./src/app/films/films.component.ts");
/* harmony import */ var _starships_starships_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./starships/starships.component */ "./src/app/starships/starships.component.ts");
/* harmony import */ var _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicles/vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _species_species_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./species/species.component */ "./src/app/species/species.component.ts");
/* harmony import */ var _planets_planets_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./planets/planets.component */ "./src/app/planets/planets.component.ts");
/* harmony import */ var _film_film_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./film/film.component */ "./src/app/film/film.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _planet_planet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./planet/planet.component */ "./src/app/planet/planet.component.ts");
/* harmony import */ var _specie_specie_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./specie/specie.component */ "./src/app/specie/specie.component.ts");
/* harmony import */ var _starship_starship_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./starship/starship.component */ "./src/app/starship/starship.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _crud_crud_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./crud/crud.component */ "./src/app/crud/crud.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_7__["PeopleComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _films_films_component__WEBPACK_IMPORTED_MODULE_8__["FilmsComponent"],
                _starships_starships_component__WEBPACK_IMPORTED_MODULE_9__["StarshipsComponent"],
                _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_10__["VehiclesComponent"],
                _species_species_component__WEBPACK_IMPORTED_MODULE_11__["SpeciesComponent"],
                _planets_planets_component__WEBPACK_IMPORTED_MODULE_12__["PlanetsComponent"],
                _film_film_component__WEBPACK_IMPORTED_MODULE_13__["FilmComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_14__["PersonComponent"],
                _planet_planet_component__WEBPACK_IMPORTED_MODULE_15__["PlanetComponent"],
                _specie_specie_component__WEBPACK_IMPORTED_MODULE_16__["SpecieComponent"],
                _starship_starship_component__WEBPACK_IMPORTED_MODULE_17__["StarshipComponent"],
                _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_18__["VehicleComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_19__["CounterComponent"],
                _crud_crud_component__WEBPACK_IMPORTED_MODULE_20__["CrudComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.css":
/*!***********************************************!*\
  !*** ./src/app/counter/counter.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Counter</h2>\n<div class=\"ui segment two column centered grid\">\n  <div class=\"ui statistic column\">\n    <div class=\"value\">\n      {{count}}\n    </div>\n    <div class=\"label\">\n      count\n    </div>\n  </div>\n  <div class=\"four column centered row\">\n    <div class=\"column txt-center\">\n      <button class=\"ui button\" (click)=\"down()\">-</button>\n    </div>\n    <div class=\"column txt-center\">\n      <button class=\"ui button\" (click)=\"up()\">+</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.count = 0;
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.up = function () {
        this.count++;
    };
    CounterComponent.prototype.down = function () {
        this.count--;
    };
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/counter/counter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/crud/crud.component.css":
/*!*****************************************!*\
  !*** ./src/app/crud/crud.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NydWQvY3J1ZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/crud/crud.component.html":
/*!******************************************!*\
  !*** ./src/app/crud/crud.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>To-do list</h2>\n<div class=\"ui segment\">\n  <h4>Items:</h4>\n  <table class=\"ui celled table\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Value</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"items.length > 0\">\n      <tr *ngFor=\"let item of items; index as i;\">\n        <td class=\"collapsing\">{{i + 1}}</td>\n        <td>\n          <span *ngIf=\"!item.editing\">{{item.value}}</span>\n          <div class=\"ui input\" *ngIf=\"item.editing\">\n            <input\n              type=\"text\"\n              placeholder=\"Type something...\"\n              value=\"{{item.value}}\"\n              (change)=\"setItem($event)\"\n              id=\"{{item.id}}\"\n            >\n          </div>\n        </td>\n        <td class=\"right aligned collapsing\">\n          <button class=\"ui button\" (click)=\"enableEdit(item.id)\">{{item.editing ? 'Save' : 'Edit'}}</button>\n          <button class=\"ui button\" (click)=\"remove(item.id)\">Remove</button>\n        </td>\n      </tr>\n    </tbody>\n    <tbody *ngIf=\"items.length === 0\">\n      <tr>\n        <td colspan=\"3\" class=\"center aligned\">No items</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th colspan=\"3\">Total: {{items.length}}</th>\n      </tr>\n    </tfoot>\n  </table>\n  <div class=\"ui action input\">\n    <input type=\"text\" placeholder=\"Type something...\" value=\"{{inputVal}}\" (change)=\"setInputVal($event)\">\n    <button class=\"ui button\" (click)=\"add()\">Add item</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/crud/crud.component.ts":
/*!****************************************!*\
  !*** ./src/app/crud/crud.component.ts ***!
  \****************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_2__);



var CrudComponent = /** @class */ (function () {
    function CrudComponent() {
        this.inputVal = '';
        this.items = [];
    }
    CrudComponent.prototype.ngOnInit = function () {
    };
    CrudComponent.prototype.setInputVal = function (ev) {
        this.inputVal = ev.target.value;
    };
    CrudComponent.prototype.add = function () {
        if (this.inputVal !== '') {
            this.items.push({
                id: nanoid__WEBPACK_IMPORTED_MODULE_2___default()(),
                value: this.inputVal,
                done: false,
                editing: false
            });
            this.inputVal = '';
        }
    };
    CrudComponent.prototype.remove = function (id) {
        this.items = this.items.filter(function (item) { return id !== item.id; });
    };
    CrudComponent.prototype.enableEdit = function (id) {
        this.items = this.items.map(function (item) {
            return id === item.id
                ? (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { editing: !item.editing }))
                : (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { editing: false }));
        });
    };
    CrudComponent.prototype.setItem = function (ev) {
        this.items = this.items.map(function (item) {
            return ev.target.id === item.id
                ? (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { value: ev.target.value }))
                : item;
        });
    };
    CrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud',
            template: __webpack_require__(/*! ./crud.component.html */ "./src/app/crud/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.css */ "./src/app/crud/crud.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.extractIdFromUrl = function (url) {
        return url.replace('https://swapi.co/api/', '').split('/')[1];
    };
    DataService.prototype.appendIds = function (collection) {
        // Append ID into object 
        for (var i = 0; i < collection.length; i++) {
            collection[i]['id'] = this.extractIdFromUrl(collection[i]['url']);
        }
        return collection;
    };
    DataService.prototype.getPeople = function () {
        return this.http.get('https://swapi.co/api/people/');
    };
    DataService.prototype.getPerson = function (id) {
        return this.http.get('https://swapi.co/api/people/' + id);
    };
    DataService.prototype.getFilms = function () {
        return this.http.get('https://swapi.co/api/films/');
    };
    DataService.prototype.getFilm = function (id) {
        return this.http.get('https://swapi.co/api/films/' + id);
    };
    DataService.prototype.getStarships = function () {
        return this.http.get('https://swapi.co/api/starships/');
    };
    DataService.prototype.getStarship = function (id) {
        return this.http.get('https://swapi.co/api/starships/' + id);
    };
    DataService.prototype.getVehicles = function () {
        return this.http.get('https://swapi.co/api/vehicles/');
    };
    DataService.prototype.getVehicle = function (id) {
        return this.http.get('https://swapi.co/api/vehicles/' + id);
    };
    DataService.prototype.getSpecies = function () {
        return this.http.get('https://swapi.co/api/species/');
    };
    DataService.prototype.getSpecie = function (id) {
        return this.http.get('https://swapi.co/api/species/' + id);
    };
    DataService.prototype.getPlanets = function () {
        return this.http.get('https://swapi.co/api/planets/');
    };
    DataService.prototype.getPlanet = function (id) {
        return this.http.get('https://swapi.co/api/planets/' + id);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/film/film.component.css":
/*!*****************************************!*\
  !*** ./src/app/film/film.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbG0vZmlsbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/film/film.component.html":
/*!******************************************!*\
  !*** ./src/app/film/film.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"film\">\n  <h2>{{film.title}}</h2>\n  <div class=\"ui segment segment min-height\">\n    <h4>Opening crawl:</h4>\n    <p>{{film.opening_crawl}}</p>\n    <table class=\"ui celled striped table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\">Meta</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"collapsing\">episode_id</td>\n            <td>{{film.episode_id}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">director</td>\n            <td>{{film.director}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">producer</td>\n            <td>{{film.producer}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">release_date</td>\n            <td>{{film.release_date}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n<div *ngIf=\"!film\">\n  <h2>Loading...</h2>\n  <div class=\"ui segment min-height\">\n    <div class=\"ui active inverted dimmer\">\n      <div class=\"ui text loader\">Loading</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/film/film.component.ts":
/*!****************************************!*\
  !*** ./src/app/film/film.component.ts ***!
  \****************************************/
/*! exports provided: FilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmComponent", function() { return FilmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FilmComponent = /** @class */ (function () {
    function FilmComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.filmId = params.id;
        });
    }
    FilmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getFilm(this.filmId).subscribe(function (data) {
            _this.film = data;
        });
    };
    FilmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film',
            template: __webpack_require__(/*! ./film.component.html */ "./src/app/film/film.component.html"),
            styles: [__webpack_require__(/*! ./film.component.css */ "./src/app/film/film.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FilmComponent);
    return FilmComponent;
}());



/***/ }),

/***/ "./src/app/films/films.component.css":
/*!*******************************************!*\
  !*** ./src/app/films/films.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvZmlsbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/films/films.component.html":
/*!********************************************!*\
  !*** ./src/app/films/films.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Films</h2>\n<div class=\"ui grid\">\n  <div class=\"eight wide column\" *ngFor=\"let film of films\">\n    <a routerLink=\"/films/{{film.id}}\" class=\"ui card\">\n      <div class=\"content\">\n        <div class=\"header\">{{film.title}}</div>\n        <div class=\"meta\">\n          <span>{{film.release_date | date:'yyyy'}}, {{film.director}}</span>\n        </div>\n        <div class=\"description\">\n          {{film.opening_crawl}}\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/films/films.component.ts":
/*!******************************************!*\
  !*** ./src/app/films/films.component.ts ***!
  \******************************************/
/*! exports provided: FilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsComponent", function() { return FilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var FilmsComponent = /** @class */ (function () {
    function FilmsComponent(data) {
        this.data = data;
    }
    FilmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getFilms().subscribe(function (data) {
            _this.films = _this.data.appendIds(data.results);
        });
    };
    FilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-films',
            template: __webpack_require__(/*! ./films.component.html */ "./src/app/films/films.component.html"),
            styles: [__webpack_require__(/*! ./films.component.css */ "./src/app/films/films.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], FilmsComponent);
    return FilmsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Angular 7 + Sementic UI  + Star Wars API</h2>\r\n<p>Comparing different front-end frameworks!</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>People</h2>\r\n\r\n\r\n<div class=\"ui grid\">\r\n  <div class=\"eight wide column\" *ngFor=\"let person of people\">\r\n    <a routerLink=\"/people/{{person.id}}\" class=\"ui card\">\r\n      <div class=\"content\">\r\n        <div class=\"header\">{{person.name}}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(data) {
        this.data = data;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPeople().subscribe(function (data) {
            _this.people = _this.data.appendIds(data.results);
        });
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.css":
/*!*********************************************!*\
  !*** ./src/app/person/person.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"person\">\n  <h2>{{person.name}}</h2>\n  <div class=\"ui segment segment min-height\">\n    <table class=\"ui celled striped table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\">Meta</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"collapsing\">height</td>\n            <td>{{person.height}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">mass</td>\n            <td>{{person.mass}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">hair_color</td>\n            <td>{{person.hair_color}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">skin_color</td>\n            <td>{{person.skin_color}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">eye_color</td>\n            <td>{{person.eye_color}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">birth_year</td>\n            <td>{{person.birth_year}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">gender</td>\n            <td>{{person.gender}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n<div *ngIf=\"!person\">\n  <h2>Loading...</h2>\n  <div class=\"ui segment min-height\">\n    <div class=\"ui active inverted dimmer\">\n      <div class=\"ui text loader\">Loading</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PersonComponent = /** @class */ (function () {
    function PersonComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.personId = params.id;
        });
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPerson(this.personId).subscribe(function (data) {
            _this.person = data;
        });
    };
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/person/person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/planet/planet.component.css":
/*!*********************************************!*\
  !*** ./src/app/planet/planet.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5ldC9wbGFuZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/planet/planet.component.html":
/*!**********************************************!*\
  !*** ./src/app/planet/planet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"planet\">\n  <h2>{{planet.name}}</h2>\n  <div class=\"ui segment segment min-height\">\n    <table class=\"ui celled striped table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\">Meta</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"collapsing\">rotation_period</td>\n            <td>{{planet.rotation_period}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">orbital_period</td>\n            <td>{{planet.orbital_period}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">diameter</td>\n            <td>{{planet.diameter}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">climate</td>\n            <td>{{planet.climate}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">gravity</td>\n            <td>{{planet.gravity}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">terrain</td>\n            <td>{{planet.terrain}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">surface_water</td>\n            <td>{{planet.surface_water}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">population</td>\n            <td>{{planet.population}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n<div *ngIf=\"!planet\">\n  <h2>Loading...</h2>\n  <div class=\"ui segment min-height\">\n    <div class=\"ui active inverted dimmer\">\n      <div class=\"ui text loader\">Loading</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/planet/planet.component.ts":
/*!********************************************!*\
  !*** ./src/app/planet/planet.component.ts ***!
  \********************************************/
/*! exports provided: PlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetComponent", function() { return PlanetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PlanetComponent = /** @class */ (function () {
    function PlanetComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.planetId = params.id;
        });
    }
    PlanetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPlanet(this.planetId).subscribe(function (data) {
            _this.planet = data;
        });
    };
    PlanetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planet',
            template: __webpack_require__(/*! ./planet.component.html */ "./src/app/planet/planet.component.html"),
            styles: [__webpack_require__(/*! ./planet.component.css */ "./src/app/planet/planet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PlanetComponent);
    return PlanetComponent;
}());



/***/ }),

/***/ "./src/app/planets/planets.component.css":
/*!***********************************************!*\
  !*** ./src/app/planets/planets.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5ldHMvcGxhbmV0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/planets/planets.component.html":
/*!************************************************!*\
  !*** ./src/app/planets/planets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Planets</h2>\n<div class=\"ui grid\">\n  <div class=\"eight wide column\" *ngFor=\"let planet of planets\">\n    <a routerLink=\"/planets/{{planet.id}}\" class=\"ui card\">\n      <div class=\"content\">\n        <div class=\"header\">{{planet.name}}</div>\n        <div class=\"meta\">\n          <span>Population: {{planet.population}}</span>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/planets/planets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/planets/planets.component.ts ***!
  \**********************************************/
/*! exports provided: PlanetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsComponent", function() { return PlanetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var PlanetsComponent = /** @class */ (function () {
    function PlanetsComponent(data) {
        this.data = data;
    }
    PlanetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPlanets().subscribe(function (data) {
            _this.planets = _this.data.appendIds(data.results);
        });
    };
    PlanetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planets',
            template: __webpack_require__(/*! ./planets.component.html */ "./src/app/planets/planets.component.html"),
            styles: [__webpack_require__(/*! ./planets.component.css */ "./src/app/planets/planets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PlanetsComponent);
    return PlanetsComponent;
}());



/***/ }),

/***/ "./src/app/specie/specie.component.css":
/*!*********************************************!*\
  !*** ./src/app/specie/specie.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZS9zcGVjaWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/specie/specie.component.html":
/*!**********************************************!*\
  !*** ./src/app/specie/specie.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"specie\">\n  <h2>{{specie.name}}</h2>\n  <div class=\"ui segment segment min-height\">\n    <h4>{{specie.classification}}</h4>\n    <table class=\"ui celled striped table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\">Meta</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"collapsing\">designation</td>\n            <td>{{specie.designation}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">average_height</td>\n            <td>{{specie.average_height}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">skin_colors</td>\n            <td>{{specie.skin_colors}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">hair_colors</td>\n            <td>{{specie.hair_colors}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">average_lifespan</td>\n            <td>{{specie.average_lifespan}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">language</td>\n            <td>{{specie.language}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n<div *ngIf=\"!specie\">\n  <h2>Loading...</h2>\n  <div class=\"ui segment min-height\">\n    <div class=\"ui active inverted dimmer\">\n      <div class=\"ui text loader\">Loading</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/specie/specie.component.ts":
/*!********************************************!*\
  !*** ./src/app/specie/specie.component.ts ***!
  \********************************************/
/*! exports provided: SpecieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecieComponent", function() { return SpecieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SpecieComponent = /** @class */ (function () {
    function SpecieComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.specieId = params.id;
        });
    }
    SpecieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getSpecie(this.specieId).subscribe(function (data) {
            _this.specie = data;
        });
    };
    SpecieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specie',
            template: __webpack_require__(/*! ./specie.component.html */ "./src/app/specie/specie.component.html"),
            styles: [__webpack_require__(/*! ./specie.component.css */ "./src/app/specie/specie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SpecieComponent);
    return SpecieComponent;
}());



/***/ }),

/***/ "./src/app/species/species.component.css":
/*!***********************************************!*\
  !*** ./src/app/species/species.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZXMvc3BlY2llcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/species/species.component.html":
/*!************************************************!*\
  !*** ./src/app/species/species.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Species</h2>\n<div class=\"ui grid\">\n  <div class=\"eight wide column\" *ngFor=\"let specie of species\">\n    <a routerLink=\"/species/{{specie.id}}\" class=\"ui card\">\n      <div class=\"content\">\n        <div class=\"header\">{{specie.name}}</div>\n        <div class=\"meta\">\n          <span>{{specie.classification}}</span>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/species/species.component.ts":
/*!**********************************************!*\
  !*** ./src/app/species/species.component.ts ***!
  \**********************************************/
/*! exports provided: SpeciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesComponent", function() { return SpeciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var SpeciesComponent = /** @class */ (function () {
    function SpeciesComponent(data) {
        this.data = data;
    }
    SpeciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getSpecies().subscribe(function (data) {
            _this.species = _this.data.appendIds(data.results);
        });
    };
    SpeciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-species',
            template: __webpack_require__(/*! ./species.component.html */ "./src/app/species/species.component.html"),
            styles: [__webpack_require__(/*! ./species.component.css */ "./src/app/species/species.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SpeciesComponent);
    return SpeciesComponent;
}());



/***/ }),

/***/ "./src/app/starship/starship.component.css":
/*!*************************************************!*\
  !*** ./src/app/starship/starship.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzaGlwL3N0YXJzaGlwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/starship/starship.component.html":
/*!**************************************************!*\
  !*** ./src/app/starship/starship.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"starship\">\n  <h2>{{starship.name}}</h2>\n  <div class=\"ui segment segment min-height\">\n    <h4>{{starship.starship_class}}</h4>\n    <table class=\"ui celled striped table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\">Meta</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"collapsing\">model</td>\n            <td>{{starship.model}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">manufacturer</td>\n            <td>{{starship.manufacturer}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">cost_in_credits</td>\n            <td>{{starship.cost_in_credits}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">length</td>\n            <td>{{starship.length}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">max_atmosphering_speed</td>\n            <td>{{starship.max_atmosphering_speed}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">crew</td>\n            <td>{{starship.crew}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">passengers</td>\n            <td>{{starship.passengers}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">cargo_capacity</td>\n            <td>{{starship.cargo_capacity}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">consumables</td>\n            <td>{{starship.consumables}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">hyperdrive_rating</td>\n            <td>{{starship.hyperdrive_rating}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">MGLT</td>\n            <td>{{starship.MGLT}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n<div *ngIf=\"!starship\">\n  <h2>Loading...</h2>\n  <div class=\"ui segment min-height\">\n    <div class=\"ui active inverted dimmer\">\n      <div class=\"ui text loader\">Loading</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/starship/starship.component.ts":
/*!************************************************!*\
  !*** ./src/app/starship/starship.component.ts ***!
  \************************************************/
/*! exports provided: StarshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipComponent", function() { return StarshipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StarshipComponent = /** @class */ (function () {
    function StarshipComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.starshipId = params.id;
        });
    }
    StarshipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getStarship(this.starshipId).subscribe(function (data) {
            _this.starship = data;
        });
    };
    StarshipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starship',
            template: __webpack_require__(/*! ./starship.component.html */ "./src/app/starship/starship.component.html"),
            styles: [__webpack_require__(/*! ./starship.component.css */ "./src/app/starship/starship.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StarshipComponent);
    return StarshipComponent;
}());



/***/ }),

/***/ "./src/app/starships/starships.component.css":
/*!***************************************************!*\
  !*** ./src/app/starships/starships.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzaGlwcy9zdGFyc2hpcHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/starships/starships.component.html":
/*!****************************************************!*\
  !*** ./src/app/starships/starships.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Starships</h2>\n<div class=\"ui grid\">\n  <div class=\"eight wide column\" *ngFor=\"let starship of starships\">\n    <a routerLink=\"/starships/{{starship.id}}\" class=\"ui card\">\n      <div class=\"content\">\n        <div class=\"header\">{{starship.name}}</div>\n        <div class=\"meta\">\n          <span>{{starship.starship_class}}</span>\n        </div>\n        <div class=\"description\">\n          {{starship.model}}\n        </div>\n      </div>\n      <div class=\"extra content\">\n        <div>Built by {{starship.manufacturer}}</div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/starships/starships.component.ts":
/*!**************************************************!*\
  !*** ./src/app/starships/starships.component.ts ***!
  \**************************************************/
/*! exports provided: StarshipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipsComponent", function() { return StarshipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var StarshipsComponent = /** @class */ (function () {
    function StarshipsComponent(data) {
        this.data = data;
    }
    StarshipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getStarships().subscribe(function (data) {
            _this.starships = _this.data.appendIds(data.results);
        });
    };
    StarshipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starships',
            template: __webpack_require__(/*! ./starships.component.html */ "./src/app/starships/starships.component.html"),
            styles: [__webpack_require__(/*! ./starships.component.css */ "./src/app/starships/starships.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], StarshipsComponent);
    return StarshipsComponent;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle.component.css":
/*!***********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.html":
/*!************************************************!*\
  !*** ./src/app/vehicle/vehicle.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"vehicle\">\n  <h2>{{vehicle.name}}</h2>\n  <div class=\"ui segment segment min-height\">\n    <h4>{{vehicle.vehicle_class}}</h4>\n    <table class=\"ui celled striped table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\">Meta</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"collapsing\">model</td>\n            <td>{{vehicle.model}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">manufacturer</td>\n            <td>{{vehicle.manufacturer}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">cost_in_credits</td>\n            <td>{{vehicle.cost_in_credits}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">length</td>\n            <td>{{vehicle.length}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">max_atmosphering_speed</td>\n            <td>{{vehicle.max_atmosphering_speed}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">crew</td>\n            <td>{{vehicle.crew}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">passengers</td>\n            <td>{{vehicle.passengers}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">cargo_capacity</td>\n            <td>{{vehicle.cargo_capacity}}</td>\n          </tr>\n          <tr>\n            <td class=\"collapsing\">consumables</td>\n            <td>{{vehicle.consumables}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n<div *ngIf=\"!vehicle\">\n  <h2>Loading...</h2>\n  <div class=\"ui segment min-height\">\n    <div class=\"ui active inverted dimmer\">\n      <div class=\"ui text loader\">Loading</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var VehicleComponent = /** @class */ (function () {
    function VehicleComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.vehicleId = params.id;
        });
    }
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getVehicle(this.vehicleId).subscribe(function (data) {
            _this.vehicle = data;
        });
    };
    VehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle',
            template: __webpack_require__(/*! ./vehicle.component.html */ "./src/app/vehicle/vehicle.component.html"),
            styles: [__webpack_require__(/*! ./vehicle.component.css */ "./src/app/vehicle/vehicle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], VehicleComponent);
    return VehicleComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.component.css":
/*!*************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.html":
/*!**************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Vehicles</h2>\n<div class=\"ui grid\">\n  <div class=\"eight wide column\" *ngFor=\"let vehicle of vehicles\">\n    <a routerLink=\"/vehicles/{{vehicle.id}}\" class=\"ui card\">\n      <div class=\"content\">\n        <div class=\"header\">{{vehicle.name}}</div>\n        <div class=\"meta\">\n          <span>{{vehicle.vehicle_class}}</span>\n        </div>\n        <div class=\"description\">\n          {{vehicle.model}}\n        </div>\n      </div>\n      <div class=\"extra content\">\n        <div>Built by {{vehicle.manufacturer}}</div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.ts":
/*!************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.ts ***!
  \************************************************/
/*! exports provided: VehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function() { return VehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent(data) {
        this.data = data;
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getVehicles().subscribe(function (data) {
            _this.vehicles = _this.data.appendIds(data.results);
        });
    };
    VehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicles',
            template: __webpack_require__(/*! ./vehicles.component.html */ "./src/app/vehicles/vehicles.component.html"),
            styles: [__webpack_require__(/*! ./vehicles.component.css */ "./src/app/vehicles/vehicles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], VehiclesComponent);
    return VehiclesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\loteoo\other\swapi-ng-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map