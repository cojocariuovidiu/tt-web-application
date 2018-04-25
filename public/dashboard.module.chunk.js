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

module.exports = "<div class=\"flex-container\">\n      <div>\n        <mat-grid-list  [cols]=\"cols | async\" rowHeight=\"40px\"   gutterSize=\"10px\"   >\n            <mat-grid-tile\n           *ngFor=\"let course of courses\"\n            [rowspan]=\"rowspan | async\">\n       \n       \n           <mat-card class=\"example-card\"  style=\"  width:100%; height:calc(100%-10px);  max-width: 95vw;\" >\n                <mat-card-header><mat-card-title><h3>{{course.name}}</h3></mat-card-title></mat-card-header>\n                <mat-card-content  [style.z-index]=\"'-3'\">\n                <p align=\"justify\">\n                   {{course.details}}\n               </p>\n                </mat-card-content>\n                <mat-card-actions>\n                  <button mat-raised-button color=\"primary\" >Start</button>\n                </mat-card-actions>\n              </mat-card>\n             \n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n    \n    </div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
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
    function EnrolledComponent(titleService, observableMedia) {
        this.titleService = titleService;
        this.observableMedia = observableMedia;
        this.currentRate = 5;
        this.courses = [
            // tslint:disable-next-line:max-line-length
            { name: 'Classroom Managment', details: 'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,[15] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[17] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,[18][19][20][21] particularly for client-server web applications, with a reported 9 million developers.' },
            // tslint:disable-next-line:max-line-length
            { name: 'Python', details: 'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,[15] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[17] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,[18][19][20][21] particularly for client-server web applications, with a reported 9 million developers.' },
            // tslint:disable-next-line:max-line-length
            { name: 'Csharp', details: 'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,[15] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[17] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,[18][19][20][21] particularly for client-server web applications, with a reported 9 million developers.' },
            // tslint:disable-next-line:max-line-length
            { name: 'Csharp', details: 'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,[15] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[17] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,[18][19][20][21] particularly for client-server web applications, with a reported 9 million developers.' },
            // tslint:disable-next-line:max-line-length
            { name: 'Csharp', details: 'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,[15] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[17] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,[18][19][20][21] particularly for client-server web applications, with a reported 9 million developers.' },
        ];
        this.title = "Enrolled - Teachers Time";
    }
    EnrolledComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.title);
        var cols_map = new Map([
            ['xs', 1],
            ['sm', 1],
            ['md', 2],
            ['lg', 3],
            ['xl', 3]
        ]);
        var rowspan_map = new Map([
            ['xs', 13],
            ['sm', 10],
            ['md', 10],
            ['lg', 11],
            ['xl', 9]
        ]);
        var start_cols;
        var row_span;
        cols_map.forEach(function (cols, mqAlias) {
            if (_this.observableMedia.isActive(mqAlias)) {
                start_cols = cols;
            }
        });
        this.cols = this.observableMedia.asObservable()
            .map(function (change) {
            return cols_map.get(change.mqAlias);
        }).startWith(start_cols);
        rowspan_map.forEach(function (rowspan, mqAlias) {
            if (_this.observableMedia.isActive(mqAlias)) {
                row_span = rowspan;
            }
        });
        this.rowspan = this.observableMedia.asObservable()
            .map(function (change) {
            return rowspan_map.get(change.mqAlias);
        }).startWith(row_span);
    };
    EnrolledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enrolled',
            template: __webpack_require__("./src/app/modules/dashboard/components/enrolled/enrolled.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/components/enrolled/enrolled.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */], __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]])
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

module.exports = "\n<div class=\"flex-container\" style=\"margin-top:64px;\" ngStyle.lt-sm=\"margin-top:57px;\"fxFlex fxFill>\n    <mat-grid-list   [cols]=\"cols | async\" rowHeight=\"40px\"    gutterSize=\"2px\"  >\n   \n    <mat-grid-tile colspan=\"11\" rowspan=\"10\" fxFlex fxFill>\n     <video id=\"example_video_1\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"none\" width=\"640\" height=\"360\" poster=\"http://vjs.zencdn.net/v/oceans.png\" data-setup=\"{}\">\n       <source src=\"http://vjs.zencdn.net/v/oceans.mp4\" type=\"video/mp4\"/>\n       <source src=\"http://vjs.zencdn.net/v/oceans.webm\" type=\"video/webm\"/>\n       <source src=\"http://vjs.zencdn.net/v/oceans.ogv\" type=\"video/ogg\"/>\n       <track kind=\"captions\" src=\"../shared/example-captions.vtt\" srclang=\"en\" label=\"English\"/>\n       <!-- Tracks need an ending tag thanks to IE9 -->\n       <track kind=\"subtitles\" src=\"../shared/example-captions.vtt\" srclang=\"en\" label=\"English\"/>\n       <!-- Tracks need an ending tag thanks to IE9 -->\n       <p class=\"vjs-no-js\">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a></p>\n     </video>\n   \n    </mat-grid-tile> \n    <mat-grid-tile  [colspan]=\"colspan | async\" rowspan=\"14\"   >\n      \n   <mat-list>\n           <mat-list-item *ngFor=\"let message of messages\">\n             <img matListAvatar src=\"../../../assets/img/in.svg\" alt=\"...\">\n             <h3 matLine> {{message.name}} </h3>\n             <p matLine>\n               <span> {{message.details}} </span>\n             </p>\n           </mat-list-item>\n         </mat-list>\n   \n    </mat-grid-tile> \n    <mat-grid-tile colspan=\"9\" rowspan=\"6\" mat-elevation-z10> \n              \n        <mat-grid-tile-header><div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\"><div fxFlex fxAlign=\"start\"> <h4 class=\"text-black\">Lecture Description:</h4></div></div></mat-grid-tile-header>\n        <div > \n            <mat-card>      \n                <mat-card-content>     \n                <p class=\"text-black\">Want to develop Android apps, but don’t know where to start? In this Nanodegree program, we’ll show you the way. We developed this curriculum with Google for true beginners interested in developing apps for the next billion Android users!</p>\n                </mat-card-content> \n              </mat-card>\n                </div>\n       </mat-grid-tile>\n   \n   </mat-grid-list>\n      <div style=\"margin-top:1em;\">\n       <mat-grid-list   cols=\"13\" rowHeight=\"40px\"    gutterSize=\"10px\" >\n       <mat-grid-tile colspan=\"13\" rowspan=\"6\">\n           <mat-card  style=\"background: white\">           \n             <h4 class=\"text-black\">Comments:</h4>\n              \n   \n               <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" fxFlex >\n                   <div><form  style=\"width: 100%;\">            \n                       <mat-form-field class=\"example-full-width\" style=\"width:90vw\">\n                           <mat-icon matPrefix>message</mat-icon>\n                           <textarea matInput placeholder=\"Message\" tyle=\"width:90vw\">\n                             \n                           </textarea>\n                         </mat-form-field>\n                        \n         \n                   </form>\n                 </div>\n                 </div>\n             \n     \n               </mat-card>\n             \n           </mat-grid-tile> \n           <mat-grid-tile colspan=\"13\" rowspan=\"18\" style=\"background: black;\">\n               <mat-accordion style=\"min-width:100vw ;min-height:100%;\">\n                   <mat-expansion-panel>\n                     <mat-expansion-panel-header>\n                       <mat-panel-title>\n                         Comments\n                       </mat-panel-title>\n                     </mat-expansion-panel-header>\n                 \n                     <mat-card *ngFor=\"let message of messages\"> \n                       <mat-card-actions>   <button mat-mini-fab>Edit</button> </mat-card-actions> \n                       <mat-card-title style=\"font-size:1em \"> {{message.name}}</mat-card-title>        \n                         <p class=\"text-black\"> {{message.details}}</p>\n                     </mat-card>\n                   </mat-expansion-panel>\n                 </mat-accordion>\n                 \n               </mat-grid-tile>\n       </mat-grid-list>\n         \n          </div>\n   \n   \n   </div>"

/***/ }),

/***/ "./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  margin: 0;\n  padding: 0; }\n\nmat-card {\n  width: 100%;\n  height: 20%; }\n\ntextarea {\n  min-height: 150px; }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturevideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("./src/app/material.module.ts");
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
    function LecturevideoComponent(activatedRoute, titleService, observableMedia) {
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.observableMedia = observableMedia;
        // tslint:disable-next-line:no-inferrable-types
        this.title = 'Lecture Name - Teachers Time';
        this.panelOpenState = false;
        this.messages = [
            { name: 'Classroom Managment', details: 'yddt' },
            { name: 'Python', details: 'tyyt' },
            { name: 'Python', details: 'tyyt' },
            { name: 'Python', details: 'tyyt' }
        ];
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
        var cols_map = new Map([
            ['xs', 11],
            ['sm', 11],
            ['md', 13],
            ['lg', 13],
            ['xl', 13]
        ]);
        var colspan_map = new Map([
            ['xs', 11],
            ['sm', 11],
            ['md', 2],
            ['lg', 2],
            ['xl', 2]
        ]);
        var start_cols;
        var col_span;
        cols_map.forEach(function (cols, mqAlias) {
            if (_this.observableMedia.isActive(mqAlias)) {
                start_cols = cols;
            }
        });
        this.cols = this.observableMedia.asObservable()
            .map(function (change) {
            return cols_map.get(change.mqAlias);
        }).startWith(start_cols);
        colspan_map.forEach(function (colspan, mqAlias) {
            if (_this.observableMedia.isActive(mqAlias)) {
                col_span = colspan;
            }
        });
        this.colspan = this.observableMedia.asObservable()
            .map(function (change) {
            return colspan_map.get(change.mqAlias);
        }).startWith(col_span);
    };
    LecturevideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lecturevideo',
            template: __webpack_require__("./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.html"),
            styles: [__webpack_require__("./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* ObservableMedia */]])
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

module.exports = "<div style=\"margin-top: 64px;\">\n        <div>\n         <mat-grid-list cols=\"1\" rowHeight=\"100px\">\n         <mat-grid-tile style=\"background-color:#29303B\">\n            <mat-card >\n                <mat-card-content>\n                    <p>Welcome To Teachers Time</p>\n                </mat-card-content>\n              </mat-card>\n         </mat-grid-tile>\n         </mat-grid-list>\n         </div>\n      \n         <div fxHide.lt-md=\"true\">\n          \n                  <nav mat-tab-nav-bar>\n                      <a mat-tab-link\n                         *ngFor=\"let link of navLinks\"\n                         [routerLink]=\"link.path\"\n                         routerLinkActive #rla=\"routerLinkActive\"\n                         [active]=\"rla.isActive\">\n                        {{link.label}}\n                      </a>\n                    </nav>\n              \n           \n            </div>\n          </div>\n       \n<router-outlet></router-outlet>"

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
        this.navLinks = [
            { label: 'Enrolled', path: '/dashboard/enrolled' },
            { label: 'Profile', path: '/dashboard/profile' }
        ];
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing_module__ = __webpack_require__("./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__("./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("./src/app/modules/dashboard/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_enrolled_enrolled_component__ = __webpack_require__("./src/app/modules/dashboard/components/enrolled/enrolled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_enrolleddetail_enrolleddetail_component__ = __webpack_require__("./src/app/modules/dashboard/components/enrolleddetail/enrolleddetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_changepassword_changepassword_component__ = __webpack_require__("./src/app/modules/dashboard/components/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_lecturevideo_lecturevideo_component__ = __webpack_require__("./src/app/modules/dashboard/components/lecturevideo/lecturevideo.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_routing_module__["a" /* DashboardRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_9__components_enrolled_enrolled_component__["a" /* EnrolledComponent */], __WEBPACK_IMPORTED_MODULE_10__components_enrolleddetail_enrolleddetail_component__["a" /* EnrolleddetailComponent */], __WEBPACK_IMPORTED_MODULE_11__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */], __WEBPACK_IMPORTED_MODULE_12__components_lecturevideo_lecturevideo_component__["a" /* LecturevideoComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map