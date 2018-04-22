webpackJsonp(["contact.module"],{

/***/ "./src/app/modules/contact/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/contact/components/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/contact/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/modules/contact/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/modules/contact/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/contact/components/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-grid-list cols=\"2\" rowHeight=\"600px\" gutterSize=\"10px\">\n  <mat-grid-tile>\n   <div class=\"gmap\">\n      <agm-map [zoom]=\"amount\" [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>\n      </div>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card class=\"contact-card\" fxFlex>\n      <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <mat-card-title><h2 align=\"center\">Contact Us</h2></mat-card-title>\n       </mat-card-header>\n      <form fxLayout=\"column\" fxLayoutAlign=\"start\">      \n        \n        <mat-form-field>\n          <mat-icon matPrefix>person</mat-icon>\n          <input matInput placeholder=\"Your Name\">\n        </mat-form-field>\n        \n        <mat-form-field>\n          <mat-icon matPrefix>subject</mat-icon>\n          <input matInput placeholder=\"Subject\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <mat-icon matPrefix>email</mat-icon>\n            <input matInput placeholder=\"Your Email\">\n          </mat-form-field>\n      \n        <mat-form-field>\n          <mat-icon matPrefix>message</mat-icon>\n          <textarea matInput placeholder=\"Message\"></textarea>\n        </mat-form-field>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <button mat-raised-button type=\"submit\" class=\"contact-btn\" color=\"primary\">Send <mat-icon class=\"send\">send</mat-icon></button>\n          </div>\n      </form>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/modules/contact/components/contactus/contactus.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  width: 40vw;\n  height: 40vw; }\n\n.gmap {\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.contact-card {\n  margin-top: 5em;\n  margin-bottom: 5em;\n  max-width: 40vw;\n  min-width: 40vw;\n  min-height: 40vw;\n  max-height: 40vw;\n  z-index: 10; }\n\n.contact-btn {\n  max-width: 20vw; }\n\ntextarea {\n  min-height: 150px; }\n\n.mat-icon {\n  vertical-align: -20%; }\n\n.send {\n  vertical-align: -30%; }\n"

/***/ }),

/***/ "./src/app/modules/contact/components/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
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

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
        this.title = 'We are Here:';
        this.lat = 23.745531;
        this.lng = 90.370628;
        this.amount = 20;
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__("./src/app/modules/contact/components/contactus/contactus.component.html"),
            styles: [__webpack_require__("./src/app/modules/contact/components/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/modules/contact/components/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  privacy works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/contact/components/privacy/privacy.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/contact/components/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
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

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__("./src/app/modules/contact/components/privacy/privacy.component.html"),
            styles: [__webpack_require__("./src/app/modules/contact/components/privacy/privacy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/modules/contact/components/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  terms works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/contact/components/terms/terms.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/contact/components/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
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

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__("./src/app/modules/contact/components/terms/terms.component.html"),
            styles: [__webpack_require__("./src/app/modules/contact/components/terms/terms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/modules/contact/contact-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__("./src/app/modules/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contactus_contactus_component__ = __webpack_require__("./src/app/modules/contact/components/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__ = __webpack_require__("./src/app/modules/contact/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_terms_terms_component__ = __webpack_require__("./src/app/modules/contact/components/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_privacy_privacy_component__ = __webpack_require__("./src/app/modules/contact/components/privacy/privacy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CONTACT_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */],
        children: [
            {
                path: '',
                redirectTo: '/us/contact',
                pathMatch: 'full'
            },
            {
                path: 'contact',
                component: __WEBPACK_IMPORTED_MODULE_3__components_contactus_contactus_component__["a" /* ContactusComponent */]
            },
            {
                path: 'about',
                component: __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__["a" /* AboutComponent */]
            },
            {
                path: 'terms',
                component: __WEBPACK_IMPORTED_MODULE_5__components_terms_terms_component__["a" /* TermsComponent */]
            },
            {
                path: 'privacy',
                component: __WEBPACK_IMPORTED_MODULE_6__components_privacy_privacy_component__["a" /* PrivacyComponent */]
            }
        ]
    }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(CONTACT_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/modules/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/modules/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_routing_module__ = __webpack_require__("./src/app/modules/contact/contact-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contactus_contactus_component__ = __webpack_require__("./src/app/modules/contact/components/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("./src/app/modules/contact/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_terms_terms_component__ = __webpack_require__("./src/app/modules/contact/components/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_privacy_privacy_component__ = __webpack_require__("./src/app/modules/contact/components/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_component__ = __webpack_require__("./src/app/modules/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__contact_routing_module__["a" /* ContactRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_component__["a" /* ContactComponent */]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

});
//# sourceMappingURL=contact.module.chunk.js.map