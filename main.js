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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./region-view/region-view.component */ "./src/app/region-view/region-view.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/countries/countries.component.ts");
/* harmony import */ var _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./country-view/country-view.component */ "./src/app/country-view/country-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"],
                _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_7__["RegionVieComponent"],
                _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__["CountriesComponent"],
                _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_9__["CountryViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'coun', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__["CountriesComponent"] },
                    { path: 'region', component: _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"] },
                    { path: 'country/:id', component: _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_9__["CountryViewComponent"] },
                    { path: 'regionview/:regid', component: _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_7__["RegionVieComponent"] },
                    { path: 'currency/:cid', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__["CountriesComponent"] },
                    { path: 'language/:lid', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__["CountriesComponent"] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/countries/countries.component.css":
/*!***************************************************!*\
  !*** ./src/app/countries/countries.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\r\n    width: 100%;\r\n    height: 15vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n#back{\r\n    background:url('All-country.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n}\r\n.btn1{\r\n    margin-top: 20px;\r\n    \r\n}\r\n.fig{\r\n       font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/countries/countries.component.html":
/*!****************************************************!*\
  !*** ./src/app/countries/countries.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--CDN-->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<!--End CDN-->\n\n<div class=\"container\">\n  <div class=\"row\" id=\"back\" style=\"text-align:center; padding:5%;\">\n    <div class=\"col-md-12\">\n    <h1><span style= \"color:black\"><b>Countries</b></span></h1>\n    </div>\n    </div>\n\n    <!--Navbar-->\n  <nav class=\"navbar navbar-inverse\">\n    <ul class=\"nav navbar-nav\">\n       <li ><a href=\"#\" [routerLink]=\"['/home']\">Home</a> </li>\n        <li><a href=\"#\" [routerLink]=\"['/region']\">Regions</a> </li>\n        <li><a href=\"#\" [routerLink]=\"['/coun']\">All Countries</a> </li>\n    </ul>\n    \n  </nav>\n<!--End Navbar-->\n\n    <div class=\"row\" *ngIf=\"countries.length>0\">\n    <div class=\"col-md-4\"  *ngFor=\"let i of countries;\">\n        <div class=\"card\" style=\"width: 18rem; margin-bottom:6%;\">\n            <img class=\"card-img-top img-thumbnail\" src=\"{{i.flag}}\" alt=\"flag\">\n            <div class=\"card-body\">\n              <p class=\"card-title\" style=\"border-bottom:1px solid\"><b>{{i.name}}</b></p>\n              <p class=\"card-text\">{{i.region}}</p>\n              <button class=\"btn bg-dark\" [routerLink]=\"['/country',i.name]\"><span >Visit</span></button>\n            </div>\n          </div>\n            \n\n  </div>\n  </div>\n \n\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/countries/countries.component.ts":
/*!**************************************************!*\
  !*** ./src/app/countries/countries.component.ts ***!
  \**************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(http, activated) {
        this.http = http;
        this.activated = activated;
        this.countries = [];
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activated.snapshot.paramMap.get('cid')) {
            this.countryId = this.activated.snapshot.paramMap.get('cid');
            this.http.get("https://restcountries.eu/rest/v2/currency" + '/' + this.countryId).subscribe(function (data) {
                _this.countries = data;
                alert("Currency Filter Applied, If You Want To See All-Countries  Again Click On AllCountries In Navbar");
                console.log(_this.countries);
            });
        }
        else if (this.activated.snapshot.paramMap.get('lid')) {
            this.countryId = this.activated.snapshot.paramMap.get('lid');
            this.http.get("https://restcountries.eu/rest/v2/lang" + '/' + this.countryId).subscribe(function (data) {
                _this.countries = data;
                alert("Language Filter Applied, If You Want To See All-Countries  Again Click On AllCountries In Navbar");
                console.log(_this.countries);
            });
        }
        else {
            this.http.get("https://restcountries.eu/rest/v2/all").subscribe(function (data) {
                _this.countries = data;
                console.log(_this.countries);
            });
        }
    };
    CountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/countries/countries.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/country-view/country-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/country-view/country-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#back{\r\n    background-color: black;\r\n     padding : 4%;\r\n }"

/***/ }),

/***/ "./src/app/country-view/country-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/country-view/country-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--CDN-->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<!--End CDN-->\n\n\n<div class=\"container\" style=\"text-align: center\">\n  <div id=\"back\" class=\"row\" style=\"color:whitesmoke; font-size:24px;\">\n    <div class=\"col md-12\">\n      <span *ngIf=\"uniquecountry;\"> Welcome To {{uniquecountry[0].name|uppercase}}!</span>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"margin:3%;\">\n    <button class=\"btn btn-lg btn-success \" (click)=goback()>\n      <span style=\"color:white\">Go Back</span>\n    </button>\n  </div>\n  <div class=\"row\" style=\"font-size:1.6em\">\n    <div class=\"col-md-4\">\n      <u>Name:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].name}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Alpha2Code:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].alpha2Code}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Alpha3Code:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].alpha3Code}}\n    </div>\n\n    <div class=\"col-md-4\">\n      <u> Capital:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].capital}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Region:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].region}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Currency:</u>\n    </div>\n    <div class=\"col-md-8\">\n      <a style=\"color:Blue\" [routerLink]=\"['/currency',uniquecountry[0].currencies[0].code]\"> {{uniquecountry[0].currencies[0].name}}</a>\n    </div>\n    <div class=\"col-md-4\">\n      <u> Currency-Code:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].currencies[0].code}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Subregion:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].subregion}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Population:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].population}}\n    </div>\n\n\n    <div class=\"col-md-4\">\n      <u>Demonym:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].demonym}}\n    </div>\n\n    <div class=\"col-md-4\">\n      <u> Area:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].area}}\n    </div>\n\n\n    <div class=\"col-md-4\">\n      <u>Gini:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].gini}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Language: </u>\n    </div>\n    <div class=\"col-md-8\">\n      <a style=\"color:green\" [routerLink]=\"['/language',uniquecountry[0].languages[0].iso639_1]\">\n        {{uniquecountry[0].languages[0].name}}\n      </a>\n\n    </div>\n\n\n    <div class=\"col-md-4\">\n      <u>NativeName:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].nativeName}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Numeric-Code: </u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].numericCode}}\n    </div>\n    <div class=\"col-md-4\">\n      <u>Demonym:</u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].demonym}}\n    </div>\n    <div class=\"col-md-4\">\n      <u> Translations: </u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].translations|json}}\n    </div>\n\n    <div class=\"col-md-4\">\n      <u> Borders: </u>\n    </div>\n    <div class=\"col-md-8\">\n      {{uniquecountry[0].borders}}\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/country-view/country-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/country-view/country-view.component.ts ***!
  \********************************************************/
/*! exports provided: CountryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryViewComponent", function() { return CountryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryViewComponent = /** @class */ (function () {
    function CountryViewComponent(http, _activatedRoute, router) {
        var _this = this;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this.router = router;
        this.url = "https://restcountries.eu/rest/v2/name";
        this.goback = function () {
            _this.router.navigate(['/coun']);
        };
    }
    CountryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryid = this._activatedRoute.snapshot.paramMap.get('id');
        console.log(this.countryid);
        this.http.get(this.url + '/' + this.countryid).subscribe(function (data) {
            _this.uniquecountry = data;
            console.log(_this.uniquecountry);
        });
    };
    CountryViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-view',
            template: __webpack_require__(/*! ./country-view.component.html */ "./src/app/country-view/country-view.component.html"),
            styles: [__webpack_require__(/*! ./country-view.component.css */ "./src/app/country-view/country-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountryViewComponent);
    return CountryViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background{\r\n    background: url('Home-Earth.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size:cover;\r\n    background-position: center;\r\n}\r\n.fonts{\r\n\r\n   font-family:sans-serif;\r\n\tbackground-color:#fff;\r\n\tfont-size:16px;\r\n\tline-height:1.6;\r\n\tfont-family:\"LMRomanSlant10\",serif;\r\n\tcolor:#111;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n.head{\r\n    font-size: 42px;\r\nfont-family: \"Raleway\",Helvetica,sans-serif;\r\nfont-weight: 100;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--CDN-->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<!--End CDN-->\n\n\n<div class=\"container\" style=\"text-align: center\">\n  <div class=\"row\" style=\"padding: 5%\" id=\"background\">\n    <div class=\"col-md-12\">\n      <span class=\"head\" style=\"font-size:2em; color:whitesmoke\"> Welcome To Countries</span>\n    </div>\n  </div>\n\n  <!--Navbar-->\n  <nav class=\"navbar navbar-inverse\">\n      <ul class=\"nav navbar-nav\">\n         <li ><a href=\"#\" [routerLink]=\"['/home']\">Home</a> </li>\n          <li><a href=\"#\" [routerLink]=\"['/region']\">Regions</a> </li>\n          <li><a href=\"#\" [routerLink]=\"['/coun']\">All Countries</a> </li>\n      </ul>\n      \n    </nav>\n  <!--End Navbar-->\n\n  <div class=\" fonts\">\n    <p>A country is a region that is identified as a distinct national entity in political geography. A country may be an independent\n      sovereign state or one that is occupied by another state [1], as a non-sovereign or formerly sovereign political division,\n      or a geographic region associated with sets of previously independent or differently associated people with distinct\n      political characteristics. Regardless of the physical geography, in the modern internationally accepted legal definition\n      as defined by the League of Nations in 1937 and reaffirmed by the United Nations in 1945, a resident of a country is\n      subject to the independent exercise[clarification needed] of legal jurisdiction.[citation needed] Sometimes countries\n      refers both to sovereign states and to other political entities,[2] while other times it refers only to states.[3]\n      For example, the CIA World Factbook uses the word in its \"Country name\" field to refer to \"a wide variety of dependencies,\n      areas of special sovereignty, uninhabited islands, and other entities in addition to the traditional countries or independent\n      states\"\n    </p>\n    <br>\n    <h2>Etymology and usage</h2>\n    <p>The word country comes from Old French contrée, which derives from Vulgar Latin (terra) contrata (\"(land) lying opposite\";\n      \"(land) spread before\"), derived from contra (\"against, opposite\"). It most likely entered the English language after\n      the Franco-Norman invasion during the 11th century.\n      <br>\n      <br> In English the word has increasingly become associated with political divisions, so that one sense, associated with\n      the indefinite article – \"a country\" – through misuse and subsequent conflation is now a synonym for state, or a former\n      sovereign state, in the sense of sovereign territory or \"district, native land\".[5] Areas much smaller than a political\n      state may be called by names such as the West Country in England, the Black Country (a heavily industrialized part\n      of England), \"Constable Country\" (a part of East Anglia painted by John Constable), the \"big country\" (used in various\n      contexts of the American West), \"coal country\" (used of parts of the US and elsewhere) and many other terms.[6]\n      <br>\n      <br> The equivalent terms in French and other Romance languages (pays and variants) have not carried the process of being\n      identified with political sovereign states as far as the English \"country\", instead derived from, pagus, which designated\n      the territory controlled by a medieval count, a title originally granted by the Roman Church. In many European countries\n      the words are used for sub-divisions of the national territory, as in the German Bundesländer, as well as a less formal\n      term for a sovereign state. France has very many \"pays\" that are officially recognised at some level, and are either\n      natural regions, like the Pays de Bray, or reflect old political or economic entities, like the Pays de la Loire.\n      <br>\n      <br> A version of \"country\" can be found in the modern French language as contrée, based on the word cuntrée in Old French,[6]\n      that is used similarly to the word \"pays\" to define non-state regions, but can also be used to describe a political\n      state in some particular cases. The modern Italian contrada is a word with its meaning varying locally, but usually\n      meaning a ward or similar small division of a town, or a village or hamlet in the countryside</p>\n    <br>\n    <h2>Sovereignty status</h2>\n    <p>The term \"country\" can refer to a sovereign state. There is no universal agreement on the number of \"countries\" in the\n      world, since a number of states have disputed sovereignty status. There are 206 sovereign states, of which 193 states\n      are members of the United Nations, two states have observer status at the U.N. (the Holy See and Palestine), and 11\n      other states are neither a member or observer at the U.N. All are defined as states by declarative theory of statehood\n      and constitutive theory of statehood. The latest proclaimed state is South Sudan in 2011.\n      <br>\n      <br> Although not sovereign states, England, Scotland, Wales and Northern Ireland are usually referred to as countries\n      (depending on context), which collectively form the United Kingdom—a sovereign state that is also referred to as a\n      country.[7][8][9][10] The Kingdom of Denmark, a sovereign state, comprises Mainland Denmark and two nominally separate\n      countries—the Faroe Islands, and Greenland—which are almost fully internally self-governing. The Kingdom of the Netherlands,\n      a sovereign state, comprises four separate countries: Netherlands, Aruba, Curaçao, and Sint Maarten. In the Kingdom\n      of Spain, the regions of Galicia, the Catalan speaking parts (Catalonia, Valencia and Balearic Islands) and the Basque\n      Country are sometimes recognized as non-sovereign states or group of states (namely, autonomous communities under the\n      Spanish law), specially within nationalist movements[clarification needed].\n      <br>\n      <br> The degree of autonomy of non-sovereign countries varies widely. Some are possessions of sovereign states, as several\n      states have overseas territories (such as French Polynesia or the British Virgin Islands), with citizenry at times\n      identical and at times distinct from their own. Such territories, with the exception of distinct dependent territories,\n      are usually listed together with sovereign states on lists of countries, but may nonetheless be treated as a separate\n      \"country of origin\" in international trade, as Hong Kong is.</p>\n  </div>\n\n\n\n\n\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/region-view/region-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/region-view/region-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/region-view/region-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/region-view/region-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"margin-top:4%;\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-lg btn-primary\" (click)=goBackRegion()>\n        Go Back\n      </button>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top:4%;\" *ngIf=\"regionData.length>0\">\n    <div class=\"col-md-4\" *ngFor=\"let index of regionData;\">\n      <div class=\"card\" style=\"width: 18rem; margin-bottom:6%;\">\n        <img class=\"card-img-top img-thumbnail\" src=\"{{index.flag}}\" alt=\"flag\">\n        <div class=\"card-body\">\n          <p class=\"card-title\" style=\"border-bottom:1px solid\">\n            <b>{{index.name}}</b>\n          </p>\n          <p class=\"card-text\">Capital: {{index.capital}}</p>\n          <p class=\"card-text\">Population :{{index.population}}</p>\n          <p style=\"color:blue; cursor: pointer;\" class=\"card-text\" [routerLink]=\"['/currency',index.currencies[0].code]\">Currency: {{index.currencies[0].name}}</p>\n          <p class=\"card-text\">Area: {{index.area}}</p>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/region-view/region-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/region-view/region-view.component.ts ***!
  \******************************************************/
/*! exports provided: RegionVieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionVieComponent", function() { return RegionVieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegionVieComponent = /** @class */ (function () {
    function RegionVieComponent(activate, http, router) {
        this.activate = activate;
        this.http = http;
        this.router = router;
        this.baseUrl = "https://restcountries.eu/rest/v2/region";
    }
    RegionVieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regionId = this.activate.snapshot.paramMap.get('regid');
        console.log(this.regionId);
        this.http.get(this.baseUrl + '/' + this.regionId).subscribe(function (data) {
            _this.regionData = data;
            console.log(_this.regionData);
        });
    };
    RegionVieComponent.prototype.goBackRegion = function () {
        this.router.navigate(['/region']);
    };
    RegionVieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region-view',
            template: __webpack_require__(/*! ./region-view.component.html */ "./src/app/region-view/region-view.component.html"),
            styles: [__webpack_require__(/*! ./region-view.component.css */ "./src/app/region-view/region-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegionVieComponent);
    return RegionVieComponent;
}());



/***/ }),

/***/ "./src/app/region/region.component.css":
/*!*********************************************!*\
  !*** ./src/app/region/region.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#back{\r\n    background:url('world-map.png');\r\n    background-repeat: no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n}\r\n.btn1{\r\n    margin-top: 20px;\r\n    \r\n}\r\n.fig{\r\n       font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/region/region.component.html":
/*!**********************************************!*\
  !*** ./src/app/region/region.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CDN -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n\n\n\n<!--End CDN -->\n\n\n<div class=\"container\">\n  <div class=\"row\" id=\"back\" style=\"padding:5%\">\n    <div class=\"col-md-12\" style=\"text-align: center\">\n      <h1 style=\"color:whitesmoke\">Regions</h1>\n    </div>\n  </div>\n  <!--Navbar-->\n  <nav class=\"navbar navbar-inverse\">\n      <ul class=\"nav navbar-nav\">\n         <li ><a href=\"#\" [routerLink]=\"['/home']\">Home</a> </li>\n          <li><a href=\"#\" [routerLink]=\"['/region']\">Regions</a> </li>\n          <li><a href=\"#\" [routerLink]=\"['/coun']\">All Countries</a> </li>\n      </ul>\n      \n    </nav>\n  <!--End Navbar-->\n\n  <!--Image slider-->\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"6\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"../../assets/1-continent-of-asia.png\" alt=\"Asia\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/2-continent-africa.png\" alt=\"Africa\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/3-continent-of-north-america.png\" alt=\"America\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/4-continent-of-south-america.png\" alt=\"South-america\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/5-continent-of-antarctica.png\" alt=\"Antarctica\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/6-continent-of-europe.png\" alt=\"Europe\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/7-continent-of-australia.png\" alt=\"Australia\" style=\"width:100%;\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  <!--End Image slider-->\n  <div class=\"row\" style=\"margin-top: 20px; text-align: center;\">\n    <div class=\"col-md-6\" *ngFor=\"let y of array\" style=\"margin-bottom:3%;\">\n\n      <figure class=\"figure\">\n        <img src=\"../../assets/icon.png\" height=\"150px\" width=\"150px\" />\n        <figcaption>\n          <button  class=\"btn  btn-sm btn1 \" [routerLink]=\"['/regionview',y]\">\n            <span class=\"fig\">{{y}}</span>\n          </button>\n        </figcaption>\n      </figure>\n\n\n    </div>\n\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/region/region.component.ts":
/*!********************************************!*\
  !*** ./src/app/region/region.component.ts ***!
  \********************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegionComponent = /** @class */ (function () {
    function RegionComponent() {
        this.array = ["Asia", "Africa", "Americas", "Oceania", "Europe"];
    }
    RegionComponent.prototype.ngOnInit = function () {
    };
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/region/region.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionComponent);
    return RegionComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cw\Desktop\Advanced bascis\Countries-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map