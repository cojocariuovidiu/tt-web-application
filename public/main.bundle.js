webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/authorization/authorization.module": [
		"./src/app/modules/authorization/authorization.module.ts",
		"common",
		"authorization.module"
	],
	"app/modules/contact/contact.module": [
		"./src/app/modules/contact/contact.module.ts",
		"contact.module"
	],
	"app/modules/course/course.module": [
		"./src/app/modules/course/course.module.ts",
		"common",
		"course.module"
	],
	"app/modules/dashboard/dashboard.module": [
		"./src/app/modules/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
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
        path: 'us', loadChildren: 'app/modules/contact/contact.module#ContactModule'
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forRoot(APP_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!loading\" class=\"loader\" >\n  <div class=\"container\">    \n    <mat-spinner></mat-spinner>\n  </div>\n</div>\n \n<div [hidden]=\"loading\" class=\"router-output\">\n<section class=\"my-theme app flex-container\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n    <mat-toolbar class=\"nav-bar mat-elevation-z10\"  color=\"primary\" >\n      <mat-toolbar-row>\n              <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n                  <button mat-button id=\"navbutton\" (click)=\"sidenav.toggle()\"><i class=\"material-icons\">view_headline</i></button>\n              </div>\n          <button mat-button id=\"navbutton\" routerLink= \"/home\" routerLinkActive=\"active\" ><h2><strong>Teachers Time</strong></h2></button>\n            <div fxShow=\"true\" fxHide.lt-md=\"true\">\n              <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n              <button mat-button id=\"navbutton\"  routerLink= \"/home\" routerLinkActive=\"active\" > <i class=\"material-icons\">home</i><span class=\"icon-text\">Home</span> </button>\n              <button mat-button id=\"navbutton\" routerLink= \"/courses\" routerLinkActive=\"active\" > <i class=\"material-icons\">import_contacts</i> <span class=\"icon-text\">Courses</span></button>\n              <button mat-button id=\"navbutton\" routerLink= \"/us/contact\" routerLinkActive=\"active\" > <i class=\"material-icons\">contact_mail</i><span class=\"icon-text\">Contact</span></button>\n            </div>\n          <span class=\"fill-remaining-space\" fxShow=\"true\" fxHide.lt-md=\"true\" ></span>\n          <span class=\"right-nav\" fxShow=\"true\" fxHide.lt-md=\"true\">\n              <button mat-button id=\"navbutton\" routerLink= \"/auth/register\" routerLinkActive=\"active\" > <i class=\"material-icons\">person_add</i> <span class=\"icon-text\">Register</span></button>\n              <button mat-button  id=\"navbutton\" routerLink= \"/auth/login\" routerLinkActive=\"active\" ><i class=\"material-icons\">person</i> <span class=\"icon-text\">Login</span></button>\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"> <i class=\"material-icons\" id=\"account\">account_circle</i></button>\n              <mat-menu #menu=\"matMenu\" yPosition=\"below\" [overlapTrigger]=\"false\">\n              <button mat-menu-item><mat-icon>account_box</mat-icon>Dashboard</button>\n              <button mat-menu-item><mat-icon>settings</mat-icon>Settings</button>\n              <button mat-menu-item><mat-icon>power_settings_new</mat-icon>Logout</button>\n            </mat-menu>\n          </span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n   <mat-sidenav-container fxFlex>\n     <mat-sidenav #sidenav class=\"mat-elevation-z6\" mode=\"side\" align=\"start\" c ngStyle.xs=\"width:50vw;\">\n     </mat-sidenav>\n     <mat-sidenav-content>\n    \n      <router-outlet></router-outlet>\n    \n      <div class=\"bounds\" color=\"primary\">\n      \n        <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill >\n             \n            <div fxFlex=\"40\" class=\"sec1\" fxFlex.xs=\"50\" ngStyle.xs=\"text-align:center\" >\n                <h3 >Teachers Time</h3>\n                <p text-align=\"left\">Teachers Time is a platform to support new parents and school teachers so that they can unleash the potential of children. We aware, educate and help new parents on Early Childhood Development and develop professional skills of teachers. We support school managements to ensure overall school development through our services.\n            </p>\n            </div>\n            <div fxFlex=\"30\" class=\"sec2\" fxFlex.xs=\"50\" ngStyle.xs=\"text-align:center\" >\n                <h3 class=\"useful-link\"><strong>Useful Links</strong></h3> \n              <ul class=\"contactus\">\n                    <li> <a mat-button routerLink= \"/us/about\" routerLinkActive=\"active\"> <mat-icon> info</mat-icon><span class=\"icon-text\">About</span></a></li>\n                    <li> <a mat-button routerLink= \"/us/terms\" routerLinkActive=\"active\"> <mat-icon> description</mat-icon> <span class=\"icon-text-terms\">Terms of Service</span></a> </li>\n                    <li> <a mat-button routerLink= \"/us/privacy\" routerLinkActive=\"active\"> <mat-icon> security</mat-icon><span class=\"icon-text\">Privacy Policy</span> </a> </li>\n                    <li> <a mat-button routerLink= \"/dashboard/lecturevideo/20\" [queryParams]=\"{ videoLink: '/Courses/Course1/Lecture1.mp4'}\" routerLinkActive=\"active\"> <mat-icon> contact_mail</mat-icon><span class=\"icon-text\">Contact</span></a></li>\n            </ul>\n                   \n            </div>\n            <div fxFlex=\"30\" class=\"sec3\" fxFlex.xs=\"50\" ngStyle.xs=\"text-align:center\">\n                <h3 class=\"contact-us\"><strong>Contact Us</strong></h3> \n                <ul class=\"contactus\" color=\"primary\">\n                      <li>  <p> <mat-icon id=\"ab\">contact_phone</mat-icon> Rezina Garden, House 67/A, Road 9/A, Dhanmondi, Dhaka, Bangladesh 1209</p></li>\n                      <li> <p> <mat-icon id=\"ab\">phone</mat-icon> +880 1777-800866 </p></li>\n                      <li> <p> <mat-icon id=\"ab\">email</mat-icon> Privacy Policy</p> </li>\n                      <li class=\"social-icons icon-circle icon-zoom list-unstyled list-inline\"> <span><i class=\"fa fa-facebook\"></i></span> <span><i class=\"fa fa-youtube\"></i></span> <span><i class=\"fa fa-google-plus\"></i></span> <span><i class=\"fa fa-instagram\"></i></span></li>\n                </ul>\n                                     \n          </div>\n            \n        </div>\n        \n      </div>  \n    </mat-sidenav-content>\n   </mat-sidenav-container>\n  </section>\n</div>\n<app-message></app-message>\n  \n  "

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".useful-link {\n  padding-left: 16px; }\n\n.contact-us {\n  padding-right: 1px; }\n\nmat-toolbar {\n  z-index: 10; }\n\nmat-sidenav {\n  width: 20vw; }\n\n.app #navbutton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  font-size: 15px; }\n\n.app .fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.icon-text {\n  padding-top: 5px;\n  padding-left: 5px; }\n\n.icon-text-terms {\n  padding-left: 1px; }\n\n.bounds {\n  max-height: 600px; }\n\n.sec1, .sec2, .sec3 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: left;\n  background: #1A237E;\n  color: white; }\n\n.content {\n  min-width: 300px;\n  max-height: 600px;\n  bottom: 0; }\n\n.contactus {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline;\n  color: white;\n  vertical-align: middle; }\n\n.contactus mat-icon {\n  padding-right: 15px; }\n\n.contactus mat-list {\n  color: white; }\n\n#ab {\n  vertical-align: -20%;\n  font-size: 20px;\n  margin: 0;\n  padding: 0;\n  color: white; }\n\n.social-icons .fa {\n  font-size: 1.8em; }\n\n#account {\n  font-size: 36px; }\n\n/*Change icons circle size and color here*/\n\n.social-icons .fa {\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  color: #FFF;\n  color: rgba(255, 255, 255, 0.8);\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out; }\n\n.social-icons.icon-circle .fa {\n  border-radius: 50%; }\n\n.social-icons.icon-rounded .fa {\n  border-radius: 5px; }\n\n.social-icons.icon-flat .fa {\n  border-radius: 0; }\n\n.social-icons .fa:hover, .social-icons .fa:active {\n  color: #FFF;\n  -webkit-box-shadow: 1px 1px 3px #333;\n  box-shadow: 1px 1px 3px #333; }\n\n.social-icons.icon-zoom .fa:hover, .social-icons.icon-zoom .fa:active {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1); }\n\n.social-icons .fa-facebook {\n  background-color: #0c3491; }\n\n.social-icons .fa-google-plus {\n  background-color: #CF3D2E; }\n\n.social-icons .fa-instagram {\n  background-color: #A1755C; }\n\n.social-icons .fa-youtube, .social-icons .fa-youtube-play, .social-icons .fa-youtube-square {\n  background-color: #C52F30; }\n\n.container {\n  font-size: 30px;\n  margin-top: 20%;\n  margin-left: 45%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.loading = true;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                _this.loading = true;
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] ||
                event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */]) {
                _this.loading = false;
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message_message_component__ = __webpack_require__("./src/app/components/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_error_service__ = __webpack_require__("./src/app/services/error.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_notfound_notfound_component__["a" /* NotfoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCZyphuuCSwPu-avgG883zlvRmwS8XKHLQ'
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_error_service__["a" /* ErrorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
    function HomeComponent(titleService) {
        this.titleService = titleService;
        this.title = "Home - Teachers Time";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/message/message.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_error_service__ = __webpack_require__("./src/app/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(snackBar, errorService) {
        this.snackBar = snackBar;
        this.errorService = errorService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccurred.subscribe(function (error) {
            _this.openSnackBar(error.msg, error.error);
        });
    };
    MessageComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message',
            template: __webpack_require__("./src/app/components/message/message.component.html"),
            styles: [__webpack_require__("./src/app/components/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_error_service__["a" /* ErrorService */]])
    ], MessageComponent);
    return MessageComponent;
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
                __WEBPACK_IMPORTED_MODULE_28__angular_material_snack_bar__["b" /* MatSnackBarModule */],
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
                __WEBPACK_IMPORTED_MODULE_28__angular_material_snack_bar__["b" /* MatSnackBarModule */],
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

/***/ "./src/app/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
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

var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOccurred = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ErrorService.prototype.handleError = function (error) {
        //console.log(error);
        this.errorOccurred.emit(error);
        throw error;
    };
    ErrorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
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