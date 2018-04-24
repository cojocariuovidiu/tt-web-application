webpackJsonp(["authorization.module"],{

/***/ "./node_modules/angular5-social-login/angular5-social-login.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/@angular/common/esm5/common.js"), __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js")) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/BehaviorSubject'], factory) :
	(factory((global['angular5-social-login'] = {}),global.core,global.common,global.BehaviorSubject));
}(this, (function (exports,core,common,BehaviorSubject) { 'use strict';

var AuthServiceConfig = (function () {
    /**
     * @param {?} providers
     */
    function AuthServiceConfig(providers) {
        this.providers = new Map();
        for (var i = 0; i < providers.length; i++) {
            var element = providers[i];
            this.providers.set(element.id, element.provider);
        }
    }
    return AuthServiceConfig;
}());
var AuthService = (function () {
    /**
     * @param {?} config
     */
    function AuthService(config) {
        var _this = this;
        this._user = null;
        this._authState = new BehaviorSubject.BehaviorSubject(null);
        this.providers = config.providers;
        this.providers.forEach(function (provider, key) {
            provider.initialize().then(function (user) {
                user.provider = key;
                _this._user = user;
                _this._authState.next(user);
            }).catch(function (err) {
                // this._authState.next(null);
            });
        });
    }
    Object.defineProperty(AuthService.prototype, "authState", {
        /**
         * @return {?}
         */
        get: function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} providerId
     * @return {?}
     */
    AuthService.prototype.signIn = function (providerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ providerObject = _this.providers.get(providerId);
            if (providerObject) {
                providerObject.signIn().then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this._user = user;
                    _this._authState.next(user);
                });
            }
            else {
                reject(AuthService.LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    /**
     * @return {?}
     */
    AuthService.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._user && _this._user.provider) {
                var /** @type {?} */ providerId = _this._user.provider;
                var /** @type {?} */ providerObject = _this.providers.get(providerId);
                providerObject.signOut().then(function () {
                    _this._user = null;
                    _this._authState.next(null);
                    resolve();
                }).catch(function (err) {
                    _this._authState.next(null);
                });
            }
            else {
                reject(AuthService.LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    return AuthService;
}());
AuthService.LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
AuthService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AuthService.ctorParameters = function () { return [
    { type: AuthServiceConfig, },
]; };

var SocialLoginModule = (function () {
    function SocialLoginModule() {
    }
    return SocialLoginModule;
}());
SocialLoginModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                providers: [
                    AuthService
                ]
            },] },
];
/**
 * @nocollapse
 */
SocialLoginModule.ctorParameters = function () { return []; };

var SocialUser = (function () {
    function SocialUser() {
    }
    return SocialUser;
}());
var LoginProviderClass = (function () {
    function LoginProviderClass() {
    }
    return LoginProviderClass;
}());
var LinkedInResponse = (function () {
    function LinkedInResponse() {
    }
    return LinkedInResponse;
}());

/**
 * @abstract
 */
var BaseLoginProvider = (function () {
    function BaseLoginProvider() {
    }
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.initialize = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signIn = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signOut = function () { };
    /**
     * @param {?} obj
     * @param {?} onload
     * @return {?}
     */
    BaseLoginProvider.prototype.loadScript = function (obj, onload) {
        if (document.getElementById(obj.name)) {
            return;
        }
        var /** @type {?} */ signInJS = document.createElement('script');
        signInJS.async = true;
        signInJS.src = obj.url;
        signInJS.onload = onload;
        if (obj.name === 'LINKEDIN') {
            signInJS.async = false;
            signInJS.text = ('api_key: ' + obj.id).replace('\'', '');
        }
        document.head.appendChild(signInJS);
    };
    return BaseLoginProvider;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GoogleLoginProvider = (function (_super) {
    __extends(GoogleLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function GoogleLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'google';
        _this.loginProviderObj.url = 'https://apis.google.com/js/platform.js';
        return _this;
    }
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                gapi.load('auth2', function () {
                    _this.auth2 = gapi.auth2.init({
                        client_id: _this.clientId,
                        scope: 'email'
                    });
                    _this.auth2.then(function () {
                        if (_this.auth2.isSignedIn.get()) {
                            resolve(_this.drawUser());
                        }
                    });
                });
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.drawUser = function () {
        var /** @type {?} */ user = new SocialUser();
        var /** @type {?} */ profile = this.auth2.currentUser.get().getBasicProfile();
        var /** @type {?} */ authResponseObj = this.auth2.currentUser.get().getAuthResponse(true);
        user.id = profile.getId();
        user.name = profile.getName();
        user.email = profile.getEmail();
        user.image = profile.getImageUrl();
        user.token = authResponseObj.access_token;
        user.idToken = authResponseObj.id_token;
        return user;
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ promise = _this.auth2.signIn();
            promise.then(function () {
                resolve(_this.drawUser());
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth2.signOut().then(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return GoogleLoginProvider;
}(BaseLoginProvider));
GoogleLoginProvider.PROVIDER_ID = 'google';

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FacebookLoginProvider = (function (_super) {
    __extends$1(FacebookLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function FacebookLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'facebook';
        _this.loginProviderObj.url = 'https://connect.facebook.net/en_US/sdk.js';
        return _this;
    }
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                FB.init({
                    appId: _this.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.10'
                });
                FB.AppEvents.logPageView();
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        var /** @type {?} */ accessToken_1 = FB.getAuthResponse()['accessToken'];
                        FB.api('/me?fields=name,email,picture', function (res) {
                            resolve(FacebookLoginProvider.drawUser(Object.assign({}, { token: accessToken_1 }, res)));
                        });
                    }
                });
            });
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    FacebookLoginProvider.drawUser = function (response) {
        var /** @type {?} */ user = new SocialUser();
        user.id = response.id;
        user.name = response.name;
        user.email = response.email;
        user.token = response.token;
        user.image = 'https://graph.facebook.com/' + response.id + '/picture?type=normal';
        return user;
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signIn = function () {
        return new Promise(function (resolve, reject) {
            FB.login(function (response) {
                if (response.authResponse) {
                    var /** @type {?} */ accessToken_2 = FB.getAuthResponse()['accessToken'];
                    FB.api('/me?fields=name,email,picture', function (res) {
                        resolve(FacebookLoginProvider.drawUser(Object.assign({}, { token: accessToken_2 }, res)));
                    });
                }
            }, { scope: 'email,public_profile' });
        });
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            FB.logout(function (response) {
                resolve();
            });
        });
    };
    return FacebookLoginProvider;
}(BaseLoginProvider));
FacebookLoginProvider.PROVIDER_ID = 'facebook';

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LinkedinLoginProvider = (function (_super) {
    __extends$2(LinkedinLoginProvider, _super);
    /**
     * @param {?} clientId
     */
    function LinkedinLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.loginProviderObj = new LoginProviderClass();
        _this.loginProviderObj.id = clientId;
        _this.loginProviderObj.name = 'linkedin';
        _this.loginProviderObj.url = 'https://platform.linkedin.com/in.js';
        return _this;
    }
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(_this.loginProviderObj, function () {
                IN.init({
                    api_key: _this.clientId,
                    authorize: true,
                    onLoad: _this.onLinkedInLoad()
                });
                IN.Event.on(IN, 'auth', function () {
                    if (IN.User.isAuthorized()) {
                        IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res) {
                            resolve(_this.drawUser(res));
                        });
                    }
                });
            });
        });
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.onLinkedInLoad = function () {
        IN.Event.on(IN, 'systemReady', function () {
            IN.User.refresh();
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    LinkedinLoginProvider.prototype.drawUser = function (response) {
        var /** @type {?} */ user = new SocialUser();
        user.id = response.emailAddress;
        user.name = response.firstName + ' ' + response.lastName;
        user.email = response.emailAddress;
        user.image = response.pictureUrl;
        user.token = IN.ENV.auth.oauth_token;
        return user;
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            IN.User.authorize(function () {
                IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res) {
                    resolve(_this.drawUser(res));
                });
            });
        });
    };
    /**
     * @return {?}
     */
    LinkedinLoginProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            IN.User.logout(function (response) {
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    return LinkedinLoginProvider;
}(BaseLoginProvider));
LinkedinLoginProvider.PROVIDER_ID = 'linkedin';

exports.SocialLoginModule = SocialLoginModule;
exports.AuthService = AuthService;
exports.AuthServiceConfig = AuthServiceConfig;
exports.SocialUser = SocialUser;
exports.LoginProviderClass = LoginProviderClass;
exports.LinkedInResponse = LinkedInResponse;
exports.FacebookLoginProvider = FacebookLoginProvider;
exports.GoogleLoginProvider = GoogleLoginProvider;
exports.LinkedinLoginProvider = LinkedinLoginProvider;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FACEBOOK_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_APP_ID; });
var FACEBOOK_APP_ID = "1711489872207276";
var GOOGLE_APP_ID = "247013322175-g9dv3lf3pj6tdomt6stt5impg5vi311p.apps.googleusercontent.com";


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

/***/ "./src/app/modules/authorization/authorization-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_component__ = __webpack_require__("./src/app/modules/authorization/authorization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("./src/app/modules/authorization/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__ = __webpack_require__("./src/app/modules/authorization/components/registration/registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AUHTORIZATION_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__authorization_component__["a" /* AuthorizationComponent */],
        children: [
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__["a" /* RegistrationComponent */]
            }
        ]
    }
];
var AuthorizationRoutingModule = /** @class */ (function () {
    function AuthorizationRoutingModule() {
    }
    AuthorizationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(AUHTORIZATION_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_registration_matchpassword_directive__ = __webpack_require__("./src/app/modules/authorization/components/registration/matchpassword.directive.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_registration_matchpassword_directive__["a" /* MatchpasswordDirective */]
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
        var logincred = {
            mobile: this.loginMobile.value,
            password: this.loginPassword.value
        };
        this.authorizationService.loginUser(logincred).subscribe(function (data) {
            //console.log(data);
        });
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

/***/ "./src/app/modules/authorization/components/registration/matchpassword.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchpasswordDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


;
var MatchpasswordDirective = /** @class */ (function () {
    function MatchpasswordDirective(matchPassword, reverse) {
        this.matchPassword = matchPassword;
        this.reverse = reverse;
    }
    MatchpasswordDirective_1 = MatchpasswordDirective;
    Object.defineProperty(MatchpasswordDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    MatchpasswordDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.matchPassword);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                matchPassword: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['matchPassword'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ matchPassword: false });
        }
        return null;
    };
    MatchpasswordDirective = MatchpasswordDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[matchPassword][formControlName],[matchPassword][formControl],[matchPassword][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MatchpasswordDirective_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('matchPassword')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], MatchpasswordDirective);
    return MatchpasswordDirective;
    var MatchpasswordDirective_1;
}());



/***/ }),

/***/ "./src/app/modules/authorization/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container mat-elevation-z10\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n  <mat-card class=\"reg-card\" fxFlex>\n    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-card-title><h2 align=\"center\">SIGNUP</h2></mat-card-title> \n    </mat-card-header>\n    <form fxLayout=\"column\" fxLayoutAlign=\"start\" [formGroup]=\"registerForm\" (ngSubmit)=\"sendRegisterForm()\"> \n      <mat-form-field floatLabel=\"auto\">\n        <input matInput placeholder=\"Enter Your Name\" name=\"Name\" id=\"Name\" class=\"form-control\" formControlName=\"Name\">\n        <mat-icon matPrefix>person</mat-icon>\n        <mat-error *ngIf=\"Name.errors\">\n          <mat-error *ngIf=\"Name.errors.required\">Name Required</mat-error>\n          <mat-error *ngIf=\"Name.errors.pattern\">Invalid Name</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field floatLabel=\"auto\">\n        <input matInput placeholder=\"Enter Your Mobile Number\" name=\"Mobile\" id=\"Mobile\" class=\"form-control\" formControlName=\"Mobile\">\n        <mat-icon matPrefix>smartphone</mat-icon>\n        <mat-error *ngIf=\"Mobile.errors\">\n          <mat-error *ngIf=\"Mobile.errors.required\">Mobile Number Required</mat-error>\n          <mat-error *ngIf=\"Mobile.errors.pattern\">Invalid Mobile Number</mat-error>\n          <mat-error *ngIf=\"Mobile.errors.mobNumExists\">Mobile Number Already Registered</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field floatLabel=\"auto\">\n        <input matInput placeholder=\"Enter Your Email\" name=\"Email\" id=\"Email\" class=\"form-control\" formControlName=\"Email\">\n        <mat-icon matPrefix>email</mat-icon>\n        <mat-error *ngIf=\"Email.errors\">\n          <mat-error *ngIf=\"Email.errors.required\">Email Required</mat-error>\n          <mat-error *ngIf=\"Email.errors.email || Email.errors.pattern\">Invalid Email</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-icon matPrefix>lock</mat-icon>\n        <input matInput placeholder=\"Enter Your Password\" [type]=\"hide ? 'password' : 'text'\" name=\"Password\" id=\"Password\" class=\"form-control\" formControlName=\"Password\" matchPassword=\"Password2\" reverse=\"true\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        <mat-error *ngIf=\"Password.errors\">\n          <mat-error *ngIf=\"Password.errors.required\">Password Required</mat-error>\n          <mat-error *ngIf=\"Password.errors.pattern\">Password must be 8 characters with 1 uppercase 1 lowercase 1 number and 1 symbol</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-icon matPrefix>lock</mat-icon>\n        <input matInput placeholder=\"Confirm Password\" [type]=\"hide2 ? 'password' : 'text'\" name=\"Password2\" id=\"Password2\" class=\"form-control\" formControlName=\"Password2\" matchPassword=\"Password\">\n        <mat-icon matSuffix (click)=\"hide2 = !hide2\">{{hide2 ? 'visibility' : 'visibility_off'}}</mat-icon>\n        <mat-error *ngIf=\"Password2.errors\">\n          <mat-error *ngIf=\"Password2.errors.required\">Password Required</mat-error>\n          <mat-error *ngIf=\"!Password2.errors.matchPassword\">Passwords donot Match</mat-error>\n        </mat-error>\n      </mat-form-field>\n      <mat-radio-group class=\"radio-group\" name=\"Scope\" id=\"Scope\" formControlName=\"Scope\" class=\"form-control\" fxLayoutAlign=\"start\">\n        <mat-radio-button  [value]=\"typeParent\">Parent</mat-radio-button>\n        <span class=\"slabel\"></span>\n        <mat-radio-button [value]=\"typeTeacher\">Teacher</mat-radio-button>\n      </mat-radio-group>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"submit-div\">\n        <button [disabled]=\"!registerForm.valid\" type=\"submit\" mat-raised-button class=\"loginbtn\" color=\"primary\">Register</button>\n      </div>\n    </form>\n    <div class=\"divider\">\n      <span>\n        OR <!--Padding is optional-->\n      </span>\n    </div>\n    <mat-card-actions fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center center\">\n      <button mat-raised-button color=\"warn\" (click)=\"socialSignIn('google')\"><i id=\"g\" class=\"fa fa-google-plus\"></i><span>LOGIN WITH GOOGLE</span></button>\n      <button mat-raised-button color=\"primary\" (click)=\"socialSignIn('facebook')\"><i id=\"f\" class=\"fa fa-facebook\"></i><span>LOGIN WITH FACEBOOK</span></button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/modules/authorization/components/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = ".reg-card {\n  margin-top: 2em;\n  margin-bottom: 5em;\n  max-width: 25vw;\n  min-width: 80vmin;\n  min-height: 400px;\n  max-height: 1000px;\n  z-index: 10; }\n\n.divider {\n  width: 100vwmin;\n  height: 20px;\n  border-bottom: 2px \r solid black;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.divider span {\n  font-size: 20px;\n  background-color: #ffffff;\n  padding: 0 10px; }\n\n.slabel {\n  margin-right: 20px; }\n\n.slabel2 {\n  padding-top: 20px; }\n\n.loginbtn {\n  max-width: 20vw; }\n\nmat-card-actions .mat-raised-button {\n  margin-bottom: 2em; }\n\n.mat-raised-button span {\n  padding-left: 20px; }\n\n.submit-div {\n  padding-top: 10px; }\n\n.mat-icon {\n  vertical-align: -20%; }\n\nmat-form-field {\n  padding-bottom: 15px; }\n"

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
        //emailPattern2: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        this.hide = true;
        this.hide2 = true;
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
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.namePattern)
                ])],
            Mobile: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.mobilePattern)
                ]), [Object(__WEBPACK_IMPORTED_MODULE_4__validateregister__["a" /* existingMobileNumberValidator */])(this.authorizationService)]],
            Email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.emailPattern)
                ])],
            Password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.patternStrongPassword)
                ])],
            Password2: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            Scope: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    RegistrationComponent.prototype.sendRegisterForm = function () {
        //console.log(this.registerForm.value);
        var user = new __WEBPACK_IMPORTED_MODULE_5__model_user_model__["a" /* User */](this.Name.value, this.Mobile.value, this.Email.value, this.Password.value, this.Scope.value, this.localTag, null, null, 'true');
        console.log(user);
        /*if(this.registerForm.value.Scope){
          user = new User(this.Name.value, this.Mobile.value, this.Email.value,
            this.Password.value, this.typeTeacher, this.localTag, null, null, 'true');
          //console.log(user);
        }
        else if(this.registerForm.value.Scope2){
          user = new User(this.Name.value, this.Mobile.value, this.Email.value,
            this.Password.value, this.typeParent, this.localTag, null, null, 'true');
          //console.log(user);
        }
        else{
          user = new User(this.Name.value, this.Mobile.value, this.Email.value,
            this.Password.value, this.typeBoth, this.localTag, null, null, 'true');
          //console.log(user);
        }
        console.log(user);
        this.authorizationService.registerUser(user).subscribe(data => {
          if(data.success){
            console.log(data)
          }
          else{
            console.log('error');
          }
        })*/
    };
    RegistrationComponent.prototype.resetRegisterForm = function () {
        this.registerForm.reset();
    };
    Object.defineProperty(RegistrationComponent.prototype, "Name", {
        /*disableScope2(){
          if(this.registerForm == undefined){
            console.log('undefined');
            return false;
          }
          else{
            var flag = this.Scope.value;
            if(flag){
              console.log('true');
              return true;
            }
            else{
              console.log('false');
              return false;
            }
          }
        }*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_error_service__ = __webpack_require__("./src/app/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    AuthorizationService.prototype.registerUser = function (user) {
        var _this = this;
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
            _this.errorService.handleError(error.json());
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json());
        });
    };
    AuthorizationService.prototype.loginUser = function (logincred) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //const url = `${"http://localhost:8080/api/users/authenticate"}`;
        var url = "" + "/api/users/authenticate";
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, logincred, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__services_error_service__["a" /* ErrorService */]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ })

});
//# sourceMappingURL=authorization.module.chunk.js.map