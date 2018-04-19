webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/authorization/authorization.module": [
		"./src/app/modules/authorization/authorization.module.ts"
	],
	"app/modules/course/course.module": [
		"./src/app/modules/course/course.module.ts"
	],
	"app/modules/dashboard/dashboard.module": [
		"./src/app/modules/dashboard/dashboard.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var APP_ROUTES = [
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'auth', loadChildren: 'app/modules/authorization/authorization.module#AuthorizationModule'
    },
    {
        path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'courses', loadChildren: 'app/modules/course/course.module#CourseModule'
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_notfound_notfound_component__["a" /* NotfoundComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"my-theme app flex-container\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n    <mat-toolbar class=\"nav-bar mat-elevation-z10\"  color=\"primary\" >\n      <mat-toolbar-row>\n              <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n                  <button mat-button id=\"navbutton\" (click)=\"sidenav.toggle()\"><i class=\"material-icons\">view_headline</i></button>\n              </div>\n          <button mat-button id=\"navbutton\" routerLink= \"/home\" routerLinkActive=\"active\" ><h2><strong>Teachers Time</strong></h2></button>\n            <div fxShow=\"true\" fxHide.lt-md=\"true\">\n              <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n              <button mat-button id=\"navbutton\"  routerLink= \"/home\" routerLinkActive=\"active\" > <i class=\"material-icons\">home</i><span class=\"icon-text\">Home</span> </button>\n              <button mat-button id=\"navbutton\" routerLink= \"/courses\" routerLinkActive=\"active\" > <i class=\"material-icons\">import_contacts</i> <span class=\"icon-text\">Courses</span></button>\n              <button mat-button id=\"navbutton\" routerLink= \"/contact\" routerLinkActive=\"active\" > <i class=\"material-icons\">contact_mail</i><span class=\"icon-text\">Contact</span></button>\n            </div>\n          <span class=\"fill-remaining-space\" fxShow=\"true\" fxHide.lt-md=\"true\" ></span>\n          <span class=\"right-nav\" fxShow=\"true\" fxHide.lt-md=\"true\">\n              <button mat-button id=\"navbutton\" routerLink= \"/auth/register\" routerLinkActive=\"active\" > <i class=\"material-icons\">person_add</i> <span class=\"icon-text\">Register</span></button>\n              <button mat-button  id=\"navbutton\" routerLink= \"/auth/login\" routerLinkActive=\"active\" ><i class=\"material-icons\">person</i> <span class=\"icon-text\">Login</span></button>\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"> <i class=\"material-icons\" id=\"account\">account_circle</i></button>\n              <mat-menu #menu=\"matMenu\" yPosition=\"below\" [overlapTrigger]=\"false\">\n              <button mat-menu-item><mat-icon>account_box</mat-icon>Dashboard</button>\n              <button mat-menu-item><mat-icon>settings</mat-icon>Settings</button>\n              <button mat-menu-item><mat-icon>power_settings_new</mat-icon>Logout</button>\n            </mat-menu>\n          </span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n   <mat-sidenav-container fxFlex>\n     <mat-sidenav #sidenav class=\"mat-elevation-z6\" mode=\"side\" align=\"start\" c ngStyle.xs=\"width:50vw;\">\n     </mat-sidenav>\n     <mat-sidenav-content><router-outlet></router-outlet>\n      <div class=\"bounds\" color=\"primary\">\n      \n        <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill >\n             \n            <div fxFlex=\"40\" class=\"sec1\" fxFlex.xs=\"50\" ngStyle.xs=\"text-align:center\" >\n                <h3 >Teachers Time</h3>\n                <p text-align=\"left\">Teachers Time is a platform to support new parents and school teachers so that they can unleash the potential of children. We aware, educate and help new parents on Early Childhood Development and develop professional skills of teachers. We support school managements to ensure overall school development through our services.\n            </p>\n            </div>\n            <div fxFlex=\"30\" class=\"sec2\" fxFlex.xs=\"50\" ngStyle.xs=\"text-align:center\" >\n                <h3 class=\"useful-link\"><strong>Useful Links</strong></h3> \n              <ul class=\"contactus\">\n                    <li> <a mat-button   href=\"#\"> <mat-icon  > info</mat-icon><span class=\"icon-text\">About</span></a></li>\n                    <li> <a mat-button   href=\"#\"> <mat-icon > description</mat-icon> <span class=\"icon-text-terms\">Terms of Service</span></a> </li>\n                    <li> <a mat-button   href=\"#\"> <mat-icon  > security</mat-icon><span class=\"icon-text\">Privacy Policy</span> </a> </li>\n                    <li> <a mat-button   href=\"#\"> <mat-icon > contact_mail</mat-icon><span class=\"icon-text\">Contact</span></a></li>\n            </ul>\n                   \n            </div>\n            <div fxFlex=\"30\" class=\"sec3\" fxFlex.xs=\"50\" ngStyle.xs=\"text-align:center\">\n                <h3 class=\"contact-us\"><strong>Contact Us</strong></h3> \n                <ul class=\"contactus\" color=\"primary\">\n                      <li>  <p> <mat-icon id=\"ab\">contact_phone</mat-icon> Rezina Garden, House 67/A, Road 9/A, Dhanmondi, Dhaka, Bangladesh 1209</p></li>\n                      <li> <p> <mat-icon id=\"ab\">phone</mat-icon> +880 1777-800866 </p></li>\n                      <li> <p> <mat-icon id=\"ab\">email</mat-icon> Privacy Policy</p> </li>\n                      <li class=\"social-icons icon-circle icon-zoom list-unstyled list-inline\"> <span><i class=\"fa fa-facebook\"></i></span> <span><i class=\"fa fa-youtube\"></i></span> <span><i class=\"fa fa-google-plus\"></i></span> <span><i class=\"fa fa-instagram\"></i></span></li>\n                </ul>\n                                     \n          </div>\n            \n        </div>\n        \n      </div>  \n    </mat-sidenav-content>\n   </mat-sidenav-container>\n  </section>\n  \n  "

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".useful-link {\n  padding-left: 16px; }\n\n.contact-us {\n  padding-right: 1px; }\n\nmat-toolbar {\n  z-index: 10; }\n\nmat-sidenav {\n  width: 20vw; }\n\n.app #navbutton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  font-size: 15px; }\n\n.app .fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.icon-text {\n  padding-top: 5px;\n  padding-left: 5px; }\n\n.icon-text-terms {\n  padding-left: 1px; }\n\n.bounds {\n  max-height: 600px; }\n\n.sec1, .sec2, .sec3 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: left;\n  background: #1A237E;\n  color: white; }\n\n.content {\n  min-width: 300px;\n  max-height: 600px;\n  bottom: 0; }\n\n.contactus {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline;\n  color: white;\n  vertical-align: middle; }\n\n.contactus mat-icon {\n  padding-right: 15px; }\n\n.contactus mat-list {\n  color: white; }\n\n#ab {\n  vertical-align: -20%;\n  font-size: 20px;\n  margin: 0;\n  padding: 0;\n  color: white; }\n\n.social-icons .fa {\n  font-size: 1.8em; }\n\n#account {\n  font-size: 36px; }\n\n/*Change icons circle size and color here*/\n\n.social-icons .fa {\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  color: rgba(255, 255, 255, 0.8);\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out; }\n\n.social-icons.icon-circle .fa {\n  border-radius: 50%; }\n\n.social-icons.icon-rounded .fa {\n  border-radius: 5px; }\n\n.social-icons.icon-flat .fa {\n  border-radius: 0; }\n\n.social-icons .fa:hover, .social-icons .fa:active {\n  color: #FFF;\n  -webkit-box-shadow: 1px 1px 3px #333;\n  box-shadow: 1px 1px 3px #333; }\n\n.social-icons.icon-zoom .fa:hover, .social-icons.icon-zoom .fa:active {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1); }\n\n.social-icons .fa-facebook {\n  background-color: #0c3491; }\n\n.social-icons .fa-google-plus {\n  background-color: #CF3D2E; }\n\n.social-icons .fa-instagram {\n  background-color: #A1755C; }\n\n.social-icons .fa-youtube, .social-icons .fa-youtube-play, .social-icons .fa-youtube-square {\n  background-color: #C52F30; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_error_error_component__ = __webpack_require__("./src/app/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_authorization_authorization_module__ = __webpack_require__("./src/app/modules/authorization/authorization.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_course_course_module__ = __webpack_require__("./src/app/modules/course/course.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_dashboard_dashboard_module__ = __webpack_require__("./src/app/modules/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_admin_admin_module__ = __webpack_require__("./src/app/modules/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_transaction_transaction_module__ = __webpack_require__("./src/app/modules/transaction/transaction.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_notfound_notfound_component__["a" /* NotfoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__modules_authorization_authorization_module__["AuthorizationModule"],
                __WEBPACK_IMPORTED_MODULE_8__modules_course_course_module__["CourseModule"],
                __WEBPACK_IMPORTED_MODULE_9__modules_dashboard_dashboard_module__["DashboardModule"],
                __WEBPACK_IMPORTED_MODULE_10__modules_admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_11__modules_transaction_transaction_module__["a" /* TransactionModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/components/error/error.component.html"),
            styles: [__webpack_require__("./src/app/components/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>HOME</h2>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__("./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__("./src/app/components/notfound/notfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FACEBOOK_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_APP_ID; });
var FACEBOOK_APP_ID = "1711489872207276";
var GOOGLE_APP_ID = "247013322175-g9dv3lf3pj6tdomt6stt5impg5vi311p.apps.googleusercontent.com";


/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_stepper__ = __webpack_require__("./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_sort__ = __webpack_require__("./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_snack_bar__["a" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_paginator__["a" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_sort__["a" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material__["b" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material__["a" /* MatNativeDateModule */]
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_snack_bar__["a" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_paginator__["a" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_sort__["a" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material__["b" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material__["a" /* MatNativeDateModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, mobile, email, password, type, tag, userID, socialID, verified) {
        this.userID = userID;
        this.socialID = socialID;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
        this.type = type;
        this.tag = tag;
        this.verified = verified;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ADMIN_ROUTES = [
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(ADMIN_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/modules/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/modules/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("./src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__("./src/app/modules/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/authorization/authorization-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/modules/authorization/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_registration_registration_component__ = __webpack_require__("./src/app/modules/authorization/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authorization_component__ = __webpack_require__("./src/app/modules/authorization/authorization.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AUHTORIZATION_ROUTES = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_5__authorization_component__["a" /* AuthorizationComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__authorization_component__["a" /* AuthorizationComponent */],
                children: [
                    {
                        path: '',
                        redirectTo: '/auth/login',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'register',
                        component: __WEBPACK_IMPORTED_MODULE_3__components_registration_registration_component__["a" /* RegistrationComponent */]
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_4__components_notfound_notfound_component__["a" /* NotfoundComponent */]
                    }
                ]
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_4__components_notfound_notfound_component__["a" /* NotfoundComponent */]
            }
        ]
    },
];
var AuthorizationRoutingModule = /** @class */ (function () {
    function AuthorizationRoutingModule() {
    }
    AuthorizationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(AUHTORIZATION_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AuthorizationRoutingModule);
    return AuthorizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authorization/authorization.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/authorization/authorization.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authorization/authorization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthorizationComponent = /** @class */ (function () {
    function AuthorizationComponent() {
    }
    AuthorizationComponent.prototype.ngOnInit = function () {
    };
    AuthorizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authorization',
            template: __webpack_require__("./src/app/modules/authorization/authorization.component.html"),
            styles: [__webpack_require__("./src/app/modules/authorization/authorization.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());



/***/ }),

/***/ "./src/app/modules/authorization/authorization.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getAuthServiceConfigs"] = getAuthServiceConfigs;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationModule", function() { return AuthorizationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_routing_module__ = __webpack_require__("./src/app/modules/authorization/authorization-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("./src/app/modules/authorization/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__ = __webpack_require__("./src/app/modules/authorization/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_config__ = __webpack_require__("./src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authorization_service__ = __webpack_require__("./src/app/modules/authorization/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authorization_component__ = __webpack_require__("./src/app/modules/authorization/authorization.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["FacebookLoginProvider"](__WEBPACK_IMPORTED_MODULE_10__config_config__["a" /* FACEBOOK_APP_ID */])
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["GoogleLoginProvider"](__WEBPACK_IMPORTED_MODULE_10__config_config__["b" /* GOOGLE_APP_ID */])
        },
    ]);
    return config;
}
var AuthorizationModule = /** @class */ (function () {
    function AuthorizationModule() {
    }
    AuthorizationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_2__authorization_routing_module__["a" /* AuthorizationRoutingModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                __WEBPACK_IMPORTED_MODULE_11__services_authorization_service__["a" /* AuthorizationService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__authorization_component__["a" /* AuthorizationComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__["a" /* RegistrationComponent */]
            ]
        })
    ], AuthorizationModule);
    return AuthorizationModule;
}());



/***/ }),

/***/ "./src/app/modules/authorization/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container mat-elevation-z10\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n  <mat-card class=\"login-card\" fxFlex>\n    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-card-title><h2 align=\"center\">LOGIN</h2></mat-card-title>\n    </mat-card-header>\n    <form fxLayout=\"column\" fxLayoutAlign=\"start\" [formGroup]=\"loginForm\" (ngSubmit)=\"sendLoginForm()\"> \n      <mat-form-field floatLabel=\"auto\">\n        <input matInput placeholder=\"Your Mobile Number\" name=\"loginMobile\" id=\"loginMobile\" class=\"form-control\" formControlName=\"loginMobile\" required>\n        <mat-icon matPrefix>smartphone</mat-icon>\n        <mat-error *ngIf=\"loginMobile.errors\">\n          <mat-error *ngIf=\"loginMobile.errors.required\">Mobile Number Required</mat-error>\n          <mat-error *ngIf=\"loginMobile.errors.pattern\">Invalid Mobile Number</mat-error>\n          <mat-error *ngIf=\"loginMobile.errors.mobNumExists\">No User under this Mobile Number</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-icon matPrefix>lock</mat-icon>\n        <input matInput placeholder=\"Your Password\" [type]=\"hide ? 'password' : 'text'\" name=\"loginPassword\" id=\"loginPassword\" class=\"form-control\" formControlName=\"loginPassword\" required>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        <mat-error *ngIf=\"loginPassword.errors && (loginPassword.errors.required || loginPassword.pristine)\">Password Required</mat-error>\n      </mat-form-field>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <button [disabled]=\"!loginForm.valid\" mat-raised-button type=\"submit\" class=\"loginbtn\" color=\"primary\">Login</button>\n      </div>\n    </form>\n    <div class=\"divider\">\n      <span>\n        OR <!--Padding is optional-->\n      </span>\n    </div>\n    <mat-card-actions fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center center\">\n      <button mat-raised-button color=\"warn\" (click)=\"socialSignIn('google')\"><i id=\"g\" class=\"fa fa-google-plus\"></i><span>LOGIN WITH GOOGLE</span></button>\n      <button mat-raised-button color=\"primary\" (click)=\"socialSignIn('google')\"><i id=\"f\" class=\"fa fa-facebook\"></i><span>LOGIN WITH FACEBOOK</span></button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/modules/authorization/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-form-field.ng-invalid {\n  border-color: red; }\n\n.login-card {\n  margin-top: 2em;\n  margin-bottom: 5em;\n  max-width: 25vw;\n  min-width: 80vmin;\n  min-height: 400px;\n  max-height: 600px;\n  z-index: 10; }\n\n.divider {\n  width: 100vwmin;\n  height: 20px;\n  border-bottom: 2px \r solid black;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.divider span {\n  font-size: 20px;\n  background-color: #ffffff;\n  padding: 0 10px; }\n\n.loginbtn {\n  max-width: 20vw; }\n\nmat-card-actions .mat-raised-button {\n  margin-top: 2em; }\n\n.mat-raised-button span {\n  padding-left: 20px; }\n\n.mat-icon {\n  vertical-align: -20%; }\n"

/***/ }),

/***/ "./src/app/modules/authorization/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__ = __webpack_require__("./src/app/modules/authorization/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validatelogin__ = __webpack_require__("./src/app/modules/authorization/components/login/validatelogin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authorizationService, socialAuthService, formBuilder) {
        this.authorizationService = authorizationService;
        this.socialAuthService = socialAuthService;
        this.formBuilder = formBuilder;
        this.hide = true;
        this.mobilePattern = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/; //'[0-9]*.{11}';
        this.createLoginForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginForm = this.formBuilder.group({
            loginMobile: [null,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    //Validators.required,
                    //Validators.pattern(this.emailPattern)
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.mobilePattern)
                ]),
                [Object(__WEBPACK_IMPORTED_MODULE_4__validatelogin__["a" /* existingMobileNumberValidator */])(this.authorizationService)]
            ],
            loginPassword: [null]
        });
    };
    LoginComponent.prototype.sendLoginForm = function () {
        console.log(this.loginForm.value);
    };
    LoginComponent.prototype.resetLoginForm = function () {
        this.loginForm.reset();
    };
    Object.defineProperty(LoginComponent.prototype, "loginMobile", {
        get: function () {
            return this.loginForm.get('loginMobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "loginPassword", {
        get: function () {
            return this.loginForm.get('loginPassword');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider)
            .then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/modules/authorization/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/modules/authorization/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authorization/components/login/validatelogin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = existingMobileNumberValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");

function existingMobileNumberValidator(userService) {
    return function (control) {
        return userService.checkMobile(control.value).map(function (data) {
            return (!data.mobile) ? { "mobNumExists": true } : null;
        });
    };
}


/***/ }),

/***/ "./src/app/modules/authorization/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container mat-elevation-z10\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n  <mat-card class=\"reg-card\" fxFlex>\n    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-card-title><h2 align=\"center\">SIGNUP</h2></mat-card-title> \n    </mat-card-header>\n    <form fxLayout=\"column\" fxLayoutAlign=\"start\" [formGroup]=\"registerForm\" (ngSubmit)=\"sendRegisterForm()\"> \n      <mat-form-field floatLabel=\"auto\">\n        <input matInput placeholder=\"Enter Your Name\" name=\"Name\" id=\"Name\" class=\"form-control\" formControlName=\"Name\" required>\n        <mat-icon matPrefix>person</mat-icon>\n        <mat-error *ngIf=\"Name.errors\">\n          <mat-error *ngIf=\"Name.errors.required\">Name Required</mat-error>\n          <mat-error *ngIf=\"Name.errors.pattern\">Invalid Name</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field floatLabel=\"auto\">\n        <input matInput placeholder=\"Enter Your Mobile Number\" name=\"Mobile\" id=\"Mobile\" class=\"form-control\" formControlName=\"Mobile\" required>\n        <mat-icon matPrefix>smartphone</mat-icon>\n        <mat-error *ngIf=\"Mobile.errors\">\n          <mat-error *ngIf=\"Mobile.errors.required\">Mobile Number Required</mat-error>\n          <mat-error *ngIf=\"Mobile.errors.pattern\">Invalid Mobile Number</mat-error>\n          <mat-error *ngIf=\"Mobile.errors.mobNumExists\">Mobile Number Already Registered</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field floatLabel=\"auto\">\n        <input matInput placeholder=\"Enter Your Email\" name=\"Email\" id=\"Email\" class=\"form-control\" formControlName=\"Email\" required>\n        <mat-icon matPrefix>email</mat-icon>\n        <mat-error *ngIf=\"Email.errors\">\n          <mat-error *ngIf=\"Email.errors.required\">Email Required</mat-error>\n          <mat-error *ngIf=\"Email.errors.pattern\">Invalid Email</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-icon matPrefix>lock</mat-icon>\n        <input matInput placeholder=\"Enter Your Password\" [type]=\"hide ? 'password' : 'text'\" name=\"Password\" id=\"Password\" class=\"form-control\" formControlName=\"Password\" required>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        <mat-error *ngIf=\"Password.errors\">\n          <mat-error *ngIf=\"Password.errors.required\">Password Required</mat-error>\n          <mat-error *ngIf=\"Password.errors.pattern\">Password must be 8 characters with 1 uppercase 1 lowercase 1 number and 1 symbol</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-icon matPrefix>lock</mat-icon>\n        <input matInput placeholder=\"Confirm Password\" [type]=\"hide ? 'password' : 'text'\" name=\"Password2\" id=\"Password2\" class=\"form-control\" formControlName=\"Password2\" required>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        <mat-error *ngIf=\"Password2.errors\">\n          <mat-error *ngIf=\"Password2.errors.required\">Password Required</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"form-group checkbox\" fxLayoutAlign=\"start\">\n        <span class=\"slabel\">Are You</span>\n        <mat-checkbox class=\"example-margin\" value=\"teacher\" name=\"Scope\" id=\"Scope\" class=\"form-control\" formControlName=\"Scope\">Teacher</mat-checkbox>\n        <span class=\"slabel2\"></span>\n        <mat-checkbox class=\"example-margin\" value=\"parent\" name=\"Scope2\" id=\"Scope2\" class=\"form-control\" formControlName=\"Scope2\">Parent</mat-checkbox>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"submit-div\">\n        <button [disabled]=\"!registerForm.valid\" type=\"submit\" mat-raised-button class=\"loginbtn\" color=\"primary\">Register</button>\n      </div>\n    </form>\n    <div class=\"divider\">\n      <span>\n        OR <!--Padding is optional-->\n      </span>\n    </div>\n    <mat-card-actions fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center center\">\n      <button mat-raised-button color=\"warn\" (click)=\"socialSignIn('google')\"><i id=\"g\" class=\"fa fa-google-plus\"></i><span>LOGIN WITH GOOGLE</span></button>\n      <button mat-raised-button color=\"primary\" (click)=\"socialSignIn('facebook')\"><i id=\"f\" class=\"fa fa-facebook\"></i><span>LOGIN WITH FACEBOOK</span></button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/modules/authorization/components/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = ".reg-card {\n  margin-top: 2em;\n  margin-bottom: 5em;\n  max-width: 25vw;\n  min-width: 80vmin;\n  min-height: 400px;\n  max-height: 1000px;\n  z-index: 10; }\n\n.divider {\n  width: 100vwmin;\n  height: 20px;\n  border-bottom: 2px \r solid black;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.divider span {\n  font-size: 20px;\n  background-color: #ffffff;\n  padding: 0 10px; }\n\n.slabel2 {\n  margin-left: 20px; }\n\n.slabel {\n  margin-right: 20px;\n  padding-top: 4px; }\n\n.loginbtn {\n  max-width: 20vw; }\n\nmat-card-actions .mat-raised-button {\n  margin-bottom: 2em; }\n\n.mat-raised-button span {\n  padding-left: 20px; }\n\n.submit-div {\n  padding-top: 10px; }\n\n.mat-icon {\n  vertical-align: -20%; }\n"

/***/ }),

/***/ "./src/app/modules/authorization/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__ = __webpack_require__("./src/app/modules/authorization/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validateregister__ = __webpack_require__("./src/app/modules/authorization/components/registration/validateregister.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user_model__ = __webpack_require__("./src/app/model/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(authorizationService, socialAuthService, formBuilder) {
        this.authorizationService = authorizationService;
        this.socialAuthService = socialAuthService;
        this.formBuilder = formBuilder;
        this.patternStrongPassword = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
        this.mobilePattern = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/; ///^[0-9]*.{11,11}$/;
        this.namePattern = '[a-z]*.{3,}';
        this.emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.hide = true;
        this.localTag = 'local';
        this.socialTag = 'social';
        this.typeTeacher = 'teacher';
        this.typeParent = 'parent';
        this.typeBoth = 'both';
        this.selected = this.selected;
        this.createRegisterForm();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.formBuilder.group({
            Name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.namePattern)
                ])],
            Mobile: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.mobilePattern)
                ]), [Object(__WEBPACK_IMPORTED_MODULE_4__validateregister__["a" /* existingMobileNumberValidator */])(this.authorizationService)]],
            Email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.emailPattern)
                ])],
            Password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.patternStrongPassword)
                ])],
            Password2: [null],
            Scope: [null],
            Scope2: [null]
        });
    };
    RegistrationComponent.prototype.sendRegisterForm = function () {
        //console.log(this.registerForm.value.Scope);
        if (this.registerForm.value.Scope) {
            var user = new __WEBPACK_IMPORTED_MODULE_5__model_user_model__["a" /* User */](this.Name.value, this.Mobile.value, this.Email.value, this.Password.value, this.typeTeacher, this.localTag, null, null, 'true');
            console.log(user);
        }
        else if (this.registerForm.value.Scope2) {
            var user = new __WEBPACK_IMPORTED_MODULE_5__model_user_model__["a" /* User */](this.Name.value, this.Mobile.value, this.Email.value, this.Password.value, this.typeParent, this.localTag, null, null, 'true');
            console.log(user);
        }
        else {
            var user = new __WEBPACK_IMPORTED_MODULE_5__model_user_model__["a" /* User */](this.Name.value, this.Mobile.value, this.Email.value, this.Password.value, this.typeBoth, this.localTag, null, null, 'true');
            console.log(user);
        }
        //console.log(user);
    };
    RegistrationComponent.prototype.resetRegisterForm = function () {
        this.registerForm.reset();
    };
    Object.defineProperty(RegistrationComponent.prototype, "Name", {
        get: function () {
            return this.registerForm.get('Name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "Mobile", {
        get: function () {
            return this.registerForm.get('Mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "Email", {
        get: function () {
            return this.registerForm.get('Email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "Password", {
        get: function () {
            return this.registerForm.get('Password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "Password2", {
        get: function () {
            return this.registerForm.get('Password2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "Scope", {
        get: function () {
            return this.registerForm.get('Scope');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "Scope2", {
        get: function () {
            return this.registerForm.get('Scope2');
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider)
            .then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/modules/authorization/components/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/modules/authorization/components/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/modules/authorization/components/registration/validateregister.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = existingMobileNumberValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");

function existingMobileNumberValidator(userService) {
    return function (control) {
        return userService.checkMobile(control.value).map(function (data) {
            return (data.mobile && data.mobile.length > 0) ? { "mobNumExists": true } : null;
        });
    };
}


/***/ }),

/***/ "./src/app/modules/authorization/services/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ErrorService } from './error.service';
var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(http) {
        this.http = http;
    }
    AuthorizationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //const url = `${"http://localhost:8080/api/users/register"}`;
        var url = "" + "/api/users/register";
        /*const body = {
          name: user.name,
          email: user.email,
          type: user.type,
          tag: user.tag,
          mobile: user.mobile,
          password: user.password
        }*/
        var body = JSON.stringify(user);
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //this.errorService.showMsg(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json());
        });
    };
    AuthorizationService.prototype.loginUser = function (logincred) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //const url = `${"http://localhost:8080/api/users/authenticate"}`;
        var url = "" + "/api/users/authenticate";
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, logincred, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //this.errorService.showMsg(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json());
        });
    };
    AuthorizationService.prototype.checkMobile = function (mobile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //const url = `${"http://localhost:8080/api/users/check/mobile"}`;
        var url = "" + "/api/users/check/mobile";
        var logincred = {
            mobile: mobile
        };
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, logincred, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //this.errorService.showMsg(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json());
        });
    };
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "./src/app/modules/course/course-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_component__ = __webpack_require__("./src/app/modules/course/course.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var COURSE_ROUTES = [
    {
        path: 'courses', component: __WEBPACK_IMPORTED_MODULE_2__course_component__["a" /* CourseComponent */]
    }
];
var CourseRoutingModule = /** @class */ (function () {
    function CourseRoutingModule() {
    }
    CourseRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(COURSE_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], CourseRoutingModule);
    return CourseRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  course works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/course/course.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseComponent = /** @class */ (function () {
    function CourseComponent() {
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    CourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-course',
            template: __webpack_require__("./src/app/modules/course/course.component.html"),
            styles: [__webpack_require__("./src/app/modules/course/course.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/modules/course/course.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModule", function() { return CourseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_routing_module__ = __webpack_require__("./src/app/modules/course/course-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_component__ = __webpack_require__("./src/app/modules/course/course.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CourseModule = /** @class */ (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__course_routing_module__["a" /* CourseRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__course_component__["a" /* CourseComponent */]]
        })
    ], CourseModule);
    return CourseModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/modules/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DASHBOARD_ROUTES = [
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(DASHBOARD_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/modules/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("./src/app/modules/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/transaction/transaction-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TRANSACTION_ROUTES = [
    {
        path: 'transaction', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    }
];
var TransactionRoutingModule = /** @class */ (function () {
    function TransactionRoutingModule() {
    }
    TransactionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(TRANSACTION_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], TransactionRoutingModule);
    return TransactionRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  transaction works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/transaction/transaction.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionComponent = /** @class */ (function () {
    function TransactionComponent() {
    }
    TransactionComponent.prototype.ngOnInit = function () {
    };
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__("./src/app/modules/transaction/transaction.component.html"),
            styles: [__webpack_require__("./src/app/modules/transaction/transaction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/modules/transaction/transaction.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_routing_module__ = __webpack_require__("./src/app/modules/transaction/transaction-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_component__ = __webpack_require__("./src/app/modules/transaction/transaction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransactionModule = /** @class */ (function () {
    function TransactionModule() {
    }
    TransactionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__transaction_routing_module__["a" /* TransactionRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__transaction_component__["a" /* TransactionComponent */]]
        })
    ], TransactionModule);
    return TransactionModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map