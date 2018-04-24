webpackJsonp(["dashboard.module"],{

/***/ "./src/app/modules/dashboard/components/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  changepassword works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/changepassword/changepassword.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/dashboard/components/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
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


var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(titleService) {
        this.titleService = titleService;
        this.title = "Change Password - Teachers Time";
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    ChangepasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__("./src/app/modules/dashboard/components/changepassword/changepassword.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/components/changepassword/changepassword.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/enrolled/enrolled.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  enrolled works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/enrolled/enrolled.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/dashboard/components/enrolled/enrolled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolledComponent; });
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


var EnrolledComponent = /** @class */ (function () {
    function EnrolledComponent(titleService) {
        this.titleService = titleService;
        this.title = "Enrolled - Teachers Time";
    }
    EnrolledComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    EnrolledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enrolled',
            template: __webpack_require__("./src/app/modules/dashboard/components/enrolled/enrolled.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/components/enrolled/enrolled.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], EnrolledComponent);
    return EnrolledComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  enrolleddetail of {{paramID}} works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolleddetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnrolleddetailComponent = /** @class */ (function () {
    function EnrolleddetailComponent(activatedRoute, titleService) {
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.title = "Course Name - Teachers Time";
    }
    EnrolleddetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerParams = this.activatedRoute.params.subscribe(function (params) {
            _this.paramID = params['id'];
        });
        this.titleService.setTitle(this.title);
    };
    EnrolleddetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enrolleddetail',
            template: __webpack_require__("./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */]])
    ], EnrolleddetailComponent);
    return EnrolleddetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  lecturevideo works! {{paramIDCourse}} {{paramIDVideo}}\n</p>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturevideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LecturevideoComponent = /** @class */ (function () {
    function LecturevideoComponent(activatedRoute, titleService) {
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.title = "Lecture Name - Teachers Time";
    }
    LecturevideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerParams = this.activatedRoute.params.subscribe(function (params) {
            _this.paramIDCourse = params['idcourse'];
        });
        this.activatedRoute.queryParams
            .filter(function (params) { return params.videoLink; })
            .subscribe(function (params) {
            console.log(params); // {order: "popular"}
            _this.videoLink = params.videoLink;
            console.log(_this.videoLink); // popular
        });
        this.titleService.setTitle(this.title);
    };
    LecturevideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lecturevideo',
            template: __webpack_require__("./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */]])
    ], LecturevideoComponent);
    return LecturevideoComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/dashboard/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(titleService) {
        this.titleService = titleService;
        this.title = "Profile - Teachers Time";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/modules/dashboard/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("./src/app/modules/dashboard/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_enrolled_enrolled_component__ = __webpack_require__("./src/app/modules/dashboard/components/enrolled/enrolled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_enrolleddetail_enrolleddetail_component__ = __webpack_require__("./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_changepassword_changepassword_component__ = __webpack_require__("./src/app/modules/dashboard/components/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_lecturevideo_lecturevideo_component__ = __webpack_require__("./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DASHBOARD_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: '',
                redirectTo: '/dashboard/enrolled',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */]
            },
            {
                path: 'enrolled',
                component: __WEBPACK_IMPORTED_MODULE_4__components_enrolled_enrolled_component__["a" /* EnrolledComponent */]
            },
            {
                path: 'changepassword',
                component: __WEBPACK_IMPORTED_MODULE_6__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */]
            },
            {
                path: 'enrolled/:id',
                component: __WEBPACK_IMPORTED_MODULE_5__components_enrolleddetail_enrolleddetail_component__["a" /* EnrolleddetailComponent */]
            },
            {
                path: 'lecturevideo/:idcourse',
                component: __WEBPACK_IMPORTED_MODULE_7__components_lecturevideo_lecturevideo_component__["a" /* LecturevideoComponent */]
            }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(DASHBOARD_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__ = __webpack_require__("./src/app/modules/dashboard/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_enrolled_enrolled_component__ = __webpack_require__("./src/app/modules/dashboard/components/enrolled/enrolled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_enrolleddetail_enrolleddetail_component__ = __webpack_require__("./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_changepassword_changepassword_component__ = __webpack_require__("./src/app/modules/dashboard/components/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_lecturevideo_lecturevideo_component__ = __webpack_require__("./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.ts");
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_5__components_enrolled_enrolled_component__["a" /* EnrolledComponent */], __WEBPACK_IMPORTED_MODULE_6__components_enrolleddetail_enrolleddetail_component__["a" /* EnrolleddetailComponent */], __WEBPACK_IMPORTED_MODULE_7__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */], __WEBPACK_IMPORTED_MODULE_8__components_lecturevideo_lecturevideo_component__["a" /* LecturevideoComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map