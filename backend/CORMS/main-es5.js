(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-card>\n        <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n                <img class=\"image\" mat-card-image src=\"../../assets/image/image_warhawks.png\">\n                <br>\n            <mat-form-field style=\"margin-top:0px;\">\n                <input matInput type=\"email\" ngModel name=\"email\" placeholder=\"Email\" #emailInput=\"ngModel\" required\n                    email>\n                <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid Email.</mat-error>\n            </mat-form-field>\n            \n            <mat-form-field  >\n                <input matInput type=\"password\" ngModel name=\"password\" placeholder=\"Password\" #passwordInput=\"ngModel\"\n                    required minlength=\"2\">\n                <mat-error *ngIf=\"passwordInput.invalid\">Please enter a Password.</mat-error>\n            </mat-form-field>\n         \n    \n            <button mat-raised-button color=\"primary\" style=\"margin-top:50px;\" type=\"submit\" >Login</button>\n           </form>\n    </mat-card>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-card>\n        <form (submit)=\"onSignUp(signForm)\" #signForm=\"ngForm\">\n                <img class=\"image\" mat-card-image src=\"../../assets/image/image_warhawks.png\">\n                <br>\n\n            <mat-form-field style=\"margin-top:0px;\">\n                <input matInput type=\"email\" ngModel name=\"email\" placeholder=\"Email\" #emailInput=\"ngModel\" required\n                    email>\n                <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid Email.</mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"password\" ngModel name=\"password\" placeholder=\"Password\" #passwordInput=\"ngModel\"\n                    required minlength=\"2\">\n                <mat-error *ngIf=\"passwordInput.invalid\">Please enter a Password.</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"password\" ngModel name=\"confirmPassword\" placeholder=\"Confirm Password\" #passwordInput=\"ngModel\"\n                    required minlength=\"2\">\n                <mat-error *ngIf=\"passwordInput.invalid\">Please confirm your password.</mat-error>\n            </mat-form-field>\n            <button mat-raised-button color=\"warn\" style=\"margin-top:40px ;\"class=\"warnButton\" type=\"submit\">Sign Up</button>\n        </form>\n    </mat-card>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>An error occurred!</h1>\r\n<div mat-dialog-content><p class=\"mat-body-1\">{{data.message}}</p> </div>\r\n<div mat-dialog-actions><button mat-button mat-dialog-close>Okay</button></div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"header-color\">\r\n\r\n\r\n  <img class=\"image\" *ngIf=\"userIsAuthenticated\" style=\" height:60px; width: 60px; \"\r\n    src=\"https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png\"\r\n    [routerLink]=\"['/user',userId]\" routerLinkActive=\"router-link-active\">\r\n    <ul>\r\n      <li *ngIf=\"userIsAuthenticated\">\r\n        <a style=\"font-size: 15px;\"> {{user}}</a>\r\n      </li>\r\n    </ul>\r\n\r\n  <span class=\"spacer\"></span>\r\n  <span class=\"title-center\" routerLink=\"/orglist\"> University of Wisconsin Whitewater - CORMS </span>\r\n  <span class=\"spacer\"></span>\r\n\r\n  <ul>\r\n    <li *ngIf=\"userIsAuthenticated && userId==='5dcdfbc72b62ec465537226f'\">\r\n      <a mat-button [routerLink]=\"['/orgcreate']\" routerLinkActive=\"mat-accent\" *ngIf=\"router.url==='/orglist'\">Add\r\n        Organization</a>\r\n    </li>\r\n\r\n\r\n    <li *ngIf=\"userIsAuthenticated\">\r\n      <a mat-button [routerLink]=\"['/orglist']\" routerLinkActive=\"router-link-active\" *ngIf=\"router.url!=='/orglist'\">\r\n        Done </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <a *ngIf=\"!userIsAuthenticated\" mat-button [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\"> Login </a>\r\n\r\n\r\n  <a *ngIf=\"!userIsAuthenticated\" mat-button [routerLink]=\"['/signup']\" routerLinkActive=\"router-link-active\"> Signup\r\n  </a>\r\n\r\n\r\n  <button *ngIf=\"userIsAuthenticated\" mat-raised-button color=\"primary\" (click)=\"logout()\">Logout</button>\r\n\r\n\r\n  <!--\r\n  <button mat-raised-button class=\"addOrgButton\" *ngIf=\"router.url === '/orglist'\"   [routerLink]=\"['/orgcreate']\" routerLinkActive=\"router-link-active\" > Add Organization </button>\r\n  <button mat-raised-button class=\"doneButton\" *ngIf=\"router.url === '/orgcreate'\"   [routerLink]=\"['/orglist']\" routerLinkActive=\"router-link-active\" > Done </button> -->\r\n\r\n\r\n\r\n</mat-toolbar>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <!-- [ngStyle]=\"{'margin-top':router.url === '/orgcreate' ? '150px' : '' }\" -->\r\n  <mat-card>\r\n    <form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"name\" [ngModel]=\"post?.name\" required placeholder=\"Name\" minlength=\"3\"\r\n          #name=\"ngModel\">\r\n        <mat-error *ngIf=\"name.invalid\">Please enter the Organization Name.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <textarea matInput rows=\"4\" name=\"description\" [ngModel]=\"post?.description\" placeholder=\"Description\" required\r\n          #description=\"ngModel\"></textarea>\r\n        <mat-error *ngIf=\"description.invalid\">Please enter a description of the Organization.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"picture\" [ngModel]=\"post?.picture\" placeholder=\"Picture URL\" minlength=\"3\"\r\n          #picture=\"ngModel\">\r\n        <mat-error *ngIf=\"picture.invalid\">Please type a Picture URL .</mat-error>\r\n      </mat-form-field>\r\n      <button mat-raised-button class=\"addOrgButton\" type=\"submit\">Save Organzation</button>\r\n      <button mat-raised-button color=\"warn\" [routerLink]=\"['/orglist']\" class=\"warnButton\"\r\n        type=\"submit\">Cancel</button>\r\n    </form>\r\n    <!-- <button mat-raised-button class=\"button\" [routerLink]=\"['/orglist']\" routerLinkActive=\"router-link-active\" >Done</button> -->\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"router.url!='/orgcreate'\" class=\"member\">\r\n  <p style=\"text-align: center; font-size: 20px; color: whitesmoke; height: 35px; ;\"> Current Members </p>\r\n  <mat-accordion multi=\"true\">\r\n    <mat-expansion-panel style=\" background-color:thistle;\">\r\n      <mat-expansion-panel-header style=\"color: black; font-weight: bold ;\">\r\n\r\n      </mat-expansion-panel-header>\r\n      <mat-action-row>\r\n        <button mat-button style=\"color: whitesmoke; background-color: rgb(233, 61, 31);\">DELETE</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n\r\n  <p style=\"text-align: center; font-size: 20px; color: white; height: 35px; padding-top:15px; padding-bottom:30px ;  \">\r\n    Requesting Members</p>\r\n  <mat-accordion multi=\"true\" *ngFor=\"let roster of rosters \">\r\n    <mat-expansion-panel style=\" background-color:rgb(231, 229, 229);\">\r\n      <mat-expansion-panel-header style=\" color:black; font-weight: bold ;\" *ngIf=\"post.name===roster.organization\">\r\n        {{roster?.username}}\r\n      </mat-expansion-panel-header>\r\n      <mat-action-row>\r\n        <button mat-button style=\" background-color: rgb(35, 207, 72);  color: whitesmoke;\">ADD</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n  </mat-accordion>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-success.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-success.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div><span   *ngIf=\"router.url==='/orgcreate'\">\r\n   Added 👍\r\n</span>\r\n  <span  *ngIf=\"router.url!=='/orgcreate'\">\r\n    Edited 👍\r\n  </span>  \r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\" fxLayout=\"row wrap\" fxLayoutGap=\"13px\">\r\n  <div *ngFor=\"let post of posts \">\r\n    <mat-card class=\"card\">\r\n      <mat-card-title class=\"card-title\">{{post.name}} Club</mat-card-title>\r\n      <mat-card-content class=\"card-content\">{{post.description}} <br></mat-card-content>\r\n\r\n      <img class=\"image\" mat-card-image src=\"{{post.picture}}\">\r\n      <button *ngIf=\"userIsAuthenticated \" mat-raised-button (click)=\"onJoin(post.name, JoinButton)\" class=\"button\" #JoinButton>JOIN</button>\r\n      \r\n      <button *ngIf=\"userIsAuthenticated && userId===post.creator\"  mat-button class=\"icon\" [routerLink]=\"['/orgedit',post.id]\" routerLinkActive=\"router-link-active\" ><mat-icon>edit</mat-icon> </button>\r\n\r\n      <button *ngIf=\"userIsAuthenticated && userId===post.creator\"  mat-button class=\"icon\" (click)=\"onDelete(post.id)\"><mat-icon> delete </mat-icon></button>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-card>\n        <form>\n\n            <img class=\"image\" style=\"margin-top:2px; margin-left:20px ;\" mat-card-image [src]=\"imagepath\">\n            <br>\n            <button style=\"margin-left:20px;  background-color: rgb(178, 212, 145);\" mat-raised-button\n                (click)=\"filePicker.click()\">Choose Image</button>\n            <input type=\"file\" name=\"image\" style=\"margin-left:20px ;\" (change)=\"selectImage($event)\" #filePicker />\n            <br>\n            <br>\n            <button color=\"primary\" style=\"margin-left:20px ;\" mat-raised-button type=\"submit\"\n                (click)=\"onSubmit()\">Upload</button>\n            <br>\n            <br>\n\n            <mat-form-field style=\"margin-left:20px ; width: 200px;\">\n                <input matInput [ngModel]=\"username\" type=\"text\" name=\"email\" placeholder=\"Email Id\" #email=\"ngModel\">\n            </mat-form-field>\n            <mat-list>\n                <mat-list-item>Club Memberships</mat-list-item>\n            </mat-list>\n            <mat-accordion multi=\"true\" *ngFor=\"let club of clubs \" title=\"Club Membership\">\n                <mat-expansion-panel style=\" background-color:thistle;\">\n                    <mat-expansion-panel-header style=\" color:black; font-weight: bold ;\">\n                        {{club?.organization}}\n                    </mat-expansion-panel-header>\n                    <mat-action-row>\n                        <button mat-button\n                            style=\" background-color: rgb(182, 22, 22);  color: whitesmoke;\">Unsubscribe</button>\n                    </mat-action-row>\n                </mat-expansion-panel>\n\n            </mat-accordion>\n\n\n\n        </form>\n    </mat-card>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
            /* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
            var appRoutes = [
                { path: "", redirectTo: "/orglist", pathMatch: "full" },
                { path: "orgcreate", component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                { path: "orglist", component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__["PostListComponent"] },
                { path: "user/:userId", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"] },
                { path: "orgedit/:postId", component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                { path: "login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                { path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                    providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  margin-top: 1rem;\r\n  width: 100%;\r\n  margin: auto;\r\n  background-color: rgb(192, 189, 189);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE4OSwgMTg5KTtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    this.authService = authService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.authService.autoAuthUser();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
            /* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
            /* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
            /* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                        _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__["PostCreateComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                        _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_14__["PostListComponent"],
                        _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__["PizzaPartyComponent"],
                        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                        _error_error_component__WEBPACK_IMPORTED_MODULE_22__["ErrorComponent"],
                        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["UserProfileComponent"]
                    ],
                    entryComponents: [_posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__["PizzaPartyComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_22__["ErrorComponent"]],
                    exports: [_posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__["PizzaPartyComponent"]],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]
                    ],
                    providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_21__["ErrorInterceptor"], multi: true }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth-interceptor.ts": 
        /*!******************************************!*\
          !*** ./src/app/auth/auth-interceptor.ts ***!
          \******************************************/
        /*! exports provided: AuthInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor(authService) {
                    this.authService = authService;
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var authToken = this.authService.getToken();
                    var authRequest = req.clone({
                        headers: req.headers.set('Authorization', "Bearer " + authToken) //setting the auth header on the frontend
                    });
                    return next.handle(authRequest); // manipulating incoming requests and adding authorization token on header on the request
                };
                return AuthInterceptor;
            }());
            AuthInterceptor.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthInterceptor);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    //  throw new Error("Method not implemented.");
                    if (!this.authService.getIsAuth()) {
                        this.router.navigate(['/login']);
                    }
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/auth/auth.service.ts ***!
          \**************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.isAuthenticated = false;
                    this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                AuthService.prototype.getToken = function () {
                    return this.token;
                };
                AuthService.prototype.getUserId = function () {
                    return this.userId;
                };
                AuthService.prototype.getUsername = function () {
                    return this.username;
                };
                AuthService.prototype.getAuthStatusListener = function () {
                    return this.authStatusListener.asObservable();
                };
                AuthService.prototype.getIsAuth = function () {
                    return this.isAuthenticated;
                };
                AuthService.prototype.createUser = function (email, password) {
                    var _this = this;
                    var authData = { email: email, password: password };
                    this.http.post("http://localhost:3000/api/user/signup", authData).subscribe(function () {
                        _this.router.navigate(['/']);
                    }, function (error) {
                        _this.authStatusListener.next(false);
                    });
                };
                AuthService.prototype.login = function (email, password) {
                    var _this = this;
                    var authData = { email: email, password: password };
                    this.http.post("http://localhost:3000/api/user/login", authData).subscribe(function (response) {
                        var token = response.token;
                        _this.token = token;
                        if (token) {
                            var expireDuration = response.expiresIn;
                            console.log(expireDuration);
                            _this.setAuthTime(expireDuration);
                            _this.isAuthenticated = true;
                            _this.userId = response.userId;
                            _this.username = response.username;
                            _this.authStatusListener.next(true);
                            var now = new Date();
                            var expirationDate = new Date(now.getTime() + expireDuration * 1000);
                            _this.authSave(token, expirationDate, _this.userId, _this.username);
                            console.log(expirationDate);
                            _this.router.navigate(['/']);
                            console.log(token);
                        }
                    }, function (error) {
                        _this.authStatusListener.next(false);
                    });
                };
                AuthService.prototype.logout = function () {
                    this.token = null;
                    this.isAuthenticated = false;
                    this.authStatusListener.next(false);
                    this.authClear();
                    clearTimeout(this.tokenTime);
                    this.router.navigate(['/']);
                    this.userId = null;
                    this.username = null;
                };
                AuthService.prototype.autoAuthUser = function () {
                    var authInformation = this.getAuthData();
                    if (!authInformation) {
                        return;
                    }
                    var now = new Date();
                    var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
                    if (expiresIn > 0) {
                        this.token = authInformation.token;
                        this.isAuthenticated = true;
                        this.userId = authInformation.userId;
                        this.username = authInformation.username;
                        //  console.log("UserID: "+this.userId)
                        this.setAuthTime(expiresIn / 1000);
                        this.authStatusListener.next(true);
                    }
                };
                AuthService.prototype.setAuthTime = function (duration) {
                    var _this = this;
                    //console.log("setting duration " + duration);
                    this.tokenTime = setTimeout(function () { _this.logout(); }, duration * 1000);
                };
                AuthService.prototype.authSave = function (token, expireDate, userId, username) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('expiration', expireDate.toISOString());
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('username', username);
                };
                AuthService.prototype.authClear = function () {
                    localStorage.removeItem("token");
                    localStorage.removeItem("expiration");
                    localStorage.removeItem("username");
                };
                AuthService.prototype.getAuthData = function () {
                    var token = localStorage.getItem("token");
                    var expirationDate = localStorage.getItem("expiration");
                    var userId = localStorage.getItem("userId");
                    var username = localStorage.getItem("username");
                    if (!token || !expirationDate) {
                        return;
                    }
                    return {
                        token: token,
                        expirationDate: new Date(expirationDate),
                        userId: userId,
                        username: username
                    };
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/auth/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n  \r\n}\r\nmat-card{\r\n  height: 500px;\r\n  width: 100%;\r\n}\r\n.container{\r\n  margin-left: 535px;\r\n  background-color:thistle;\r\n  margin-top: 20px;\r\n  padding-top:15px;\r\n  padding-bottom: 15px;\r\n  width: 400px;\r\n}\r\n.image{\r\n  width:200px;\r\n  height:180px;\r\n  margin-left: 60px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7O0FBRWI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbn1cclxubWF0LWNhcmR7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tbGVmdDogNTM1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0aGlzdGxlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6MTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICB3aWR0aDoyMDBweDtcclxuICBoZWlnaHQ6MTgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, authservice) {
                    this.authservice = authservice;
                }
                LoginComponent.prototype.ngOnInit = function () { };
                LoginComponent.prototype.onLogin = function (form) {
                    if (form.invalid) {
                        return;
                    }
                    this.authservice.login(form.value.email, form.value.password);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/auth/signup/signup.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n  \r\n}\r\nmat-card{\r\n  height: 500px;\r\n  width: 100%;\r\n}\r\n.container{\r\n  margin-left: 535px;\r\n  background-color:thistle;\r\n  margin-top: 20px;\r\n  padding-top:15px;\r\n  padding-bottom: 15px;\r\n  width: 400px;\r\n}\r\n.image{\r\n  width:200px;\r\n  height:180px;\r\n  margin-left: 60px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG59XHJcbm1hdC1jYXJke1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDUzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6dGhpc3RsZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5cclxuLmltYWdle1xyXG4gIHdpZHRoOjIwMHB4O1xyXG4gIGhlaWdodDoxODBweDtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/signup/signup.component.ts ***!
          \*************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(authService) {
                    this.authService = authService;
                }
                SignupComponent.prototype.ngOnInit = function () {
                };
                SignupComponent.prototype.onSignUp = function (form) {
                    if (form.invalid) {
                        return;
                    }
                    if (form.value.password != form.value.confirmPassword) {
                        console.log("Passwords do not match");
                        return;
                    }
                    this.authService.createUser(form.value.email, form.value.password);
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/error-interceptor.ts": 
        /*!**************************************!*\
          !*** ./src/app/error-interceptor.ts ***!
          \**************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(dialog) {
                    this.dialog = dialog;
                }
                ErrorInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
                        console.log(error);
                        var errorMessage = "An unknown error occurred!";
                        if (error.error.message) {
                            errorMessage = error.error.message;
                        }
                        _this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: { message: errorMessage } });
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    })); // manipulating incoming requests and adding authorization token on header on the request
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/app/error/error.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/error/error.component.ts ***!
          \******************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent(data) {
                    this.data = data;
                }
                return ErrorComponent;
            }());
            ErrorComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".title-center {\r\n  margin-left: 140px;\r\n  font-display: inherit;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.header-color {\r\n  background-color: rgb(139, 31, 130);\r\n  color: aliceblue;\r\n\r\n}\r\n\r\n.addOrgButton {\r\n  background-color: rgb(35, 207, 72);\r\n  color: aliceblue;\r\n  margin-left: 400px;\r\n}\r\n\r\n.doneButton {\r\n  background-color:green;\r\n  color: aliceblue;\r\n  margin-left: 520px;\r\n}\r\n\r\n.container{\r\n  margin-right: 0px;\r\n  margin-left:  0px;\r\n\r\n}\r\n\r\nul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: whitesmoke;\r\n  font-size: medium;\r\n}\r\n\r\n.menu-items{\r\n\r\n}\r\n\r\n.spacer{\r\n  flex: 1 1 auto;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjs7QUFFbEI7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBOztBQUVBOztBQUNBO0VBQ0UsY0FBYzs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbiAgZm9udC1kaXNwbGF5OiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXItY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDMxLCAxMzApO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG59XHJcbi5hZGRPcmdCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMjA3LCA3Mik7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbn1cclxuLmRvbmVCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW4tbGVmdDogNTIwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogIDBweDtcclxuXHJcbn1cclxudWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4ubWVudS1pdGVtc3tcclxuXHJcbn1cclxuLnNwYWNlcntcclxuICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.userIsAuthenticated = false;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userId = this.authService.getUserId();
                    this.username = this.authService.getUsername();
                    if (this.username) {
                        this.user = this.username.split('@')[0].toUpperCase();
                    }
                    //  console.log("header user: "+this.userId+" "+this.username)
                    this.userIsAuthenticated = this.authService.getIsAuth();
                    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
                        _this.userIsAuthenticated = isAuthenticated;
                        _this.userId = _this.authService.getUserId();
                        _this.username = _this.authService.getUsername();
                        if (_this.username) {
                            _this.user = _this.username.split('@')[0].toUpperCase();
                        }
                        //  console.log("header user: "+this.userId+" "+this.username)
                    });
                };
                HeaderComponent.prototype.ngOnDestroy = function () {
                    this.authListenerSubs.unsubscribe();
                };
                HeaderComponent.prototype.logout = function () {
                    this.authService.logout();
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-header",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/posts/post-create/post-create.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/posts/post-create/post-create.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n.container{\r\n  margin-left: 200px;\r\n  background-color:thistle;\r\n  margin-top: 20px;\r\n  padding-top:15px;\r\n  padding-bottom: 15px;\r\n \r\n}\r\n.member{\r\n  margin-left: 200px;\r\n  margin-right: 180px;\r\n  background-color:rgb(146, 81, 146);\r\n  margin-top: 20px;\r\n  padding-top:15px;\r\n  padding-bottom: 15px;\r\n\r\n  \r\n}\r\n.addOrgButton{\r\n  background-color: rgb(35, 207, 72);\r\n  color: aliceblue;\r\n\r\n  }\r\n.button{\r\n    background-color: green;\r\n    color: aliceblue;\r\n    margin-left:15px;\r\n    margin-top: 10px;\r\n  }\r\n.warnButton{\r\n  margin-left:10px ;\r\n}\r\n::ng-deep .snackbar{\r\n  background:rgb(139, 31, 130);\r\n  text-align: center;\r\n  color: rgb(255, 254, 254);\r\n  font-size: 20px;\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7O0FBRXRCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjs7O0FBR3RCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCOztFQUVoQjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0aGlzdGxlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6MTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuIFxyXG59XHJcblxyXG4ubWVtYmVye1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE0NiwgODEsIDE0Nik7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cclxuICBcclxufVxyXG5cclxuLmFkZE9yZ0J1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDIwNywgNzIpO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gIH1cclxuICAuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4ud2FybkJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDoxMHB4IDtcclxufVxyXG46Om5nLWRlZXAgLnNuYWNrYmFye1xyXG4gIGJhY2tncm91bmQ6cmdiKDEzOSwgMzEsIDEzMCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTQsIDI1NCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gXHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/posts/post-create/post-create.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/posts/post-create/post-create.component.ts ***!
          \************************************************************/
        /*! exports provided: PostCreateComponent, PizzaPartyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function () { return PostCreateComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function () { return PizzaPartyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/service/post.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
            var PostCreateComponent = /** @class */ (function () {
                function PostCreateComponent(postService, activeRoute, router, snackBar, authService) {
                    this.postService = postService;
                    this.activeRoute = activeRoute;
                    this.router = router;
                    this.snackBar = snackBar;
                    this.authService = authService;
                    this.mode = "create";
                    this.duration = 2;
                    this.rosters = [];
                    this.userIsAuthenticated = false;
                }
                PostCreateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activeRoute.paramMap.subscribe(function (paramMap) {
                        if (paramMap.has("postId")) {
                            //extract postId from current URL
                            _this.mode = "edit";
                            _this.postId = paramMap.get("postId");
                            _this.postService.getPost(_this.postId).subscribe(function (postData) {
                                _this.post = { id: postData._id, name: postData.name, description: postData.description, picture: postData.picture, creator: postData.creator };
                            });
                        }
                        else {
                            _this.mode = "create";
                            _this.postId = null;
                        }
                    });
                    this.postService.getMembers();
                    this.rosterSub = this.postService.getRosterUpdateListener()
                        .subscribe(function (rosters) {
                        _this.rosters = rosters;
                        // console.log("Rosters: "+JSON.stringify(this.rosters));
                    });
                    this.userIsAuthenticated = this.authService.getIsAuth();
                    console.log("Authenticated ?" + this.userIsAuthenticated);
                    this.authStatus = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
                        _this.userIsAuthenticated = isAuthenticated;
                    });
                    console.log("Authenticated ?" + this.userIsAuthenticated);
                };
                PostCreateComponent.prototype.onAddPost = function (form) {
                    if (form.invalid) {
                        return;
                    }
                    // snackbar pop-up 
                    this.snackBar.openFromComponent(PizzaPartyComponent, {
                        duration: this.duration * 1000,
                        panelClass: ['snackbar']
                    });
                    if (this.mode === "create") {
                        this.postService.addPosts(form.value.name, form.value.description, form.value.picture);
                    }
                    else {
                        this.postService.updatePost(this.postId, form.value.name, form.value.description, form.value.picture);
                    }
                    form.resetForm();
                };
                return PostCreateComponent;
            }());
            PostCreateComponent.ctorParameters = function () { return [
                { type: _service_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
                { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
            ]; };
            PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-post-create",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")).default]
                })
            ], PostCreateComponent);
            var PizzaPartyComponent = /** @class */ (function () {
                function PizzaPartyComponent(router) {
                    this.router = router;
                }
                return PizzaPartyComponent;
            }());
            PizzaPartyComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            PizzaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-post-create-pop',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-success.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-success.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")).default]
                })
            ], PizzaPartyComponent);
            /***/ 
        }),
        /***/ "./src/app/posts/post-list/post-list.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/posts/post-list/post-list.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container{\r\n  margin-right: auto;\r\n  margin-left:  auto;\r\n  padding-right: 10px;\r\n  padding-left:  95px;\r\n  background-color: thistle;\r\n  \r\n}\r\n.image{\r\n  width:200px;\r\n  height:180px;\r\n  margin-left: 0.1px;\r\n}\r\n.card{\r\n  width: 230px;\r\n  height: 330px;\r\n  margin-top: 12px;\r\n}\r\n.addOrgButton{\r\nbackground-color: rgb(184, 50, 184);\r\ncolor: aliceblue;\r\nmargin-left:1375px;\r\nmargin-top: 5px ;\r\n}\r\n.icon{\r\n  width:0px;\r\n}\r\n.button{\r\n  background-color: green;\r\n  color: aliceblue;\r\n  margin-left:0px;\r\n  margin-top: 0px;\r\n}\r\n.card-title{\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n.card-content{\r\n  font-size: 12px;\r\n  text-align: center;\r\n  height: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAgYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogIDk1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcclxuICBcclxufVxyXG4uaW1hZ2V7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgaGVpZ2h0OjE4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjFweDtcclxufVxyXG4uY2FyZHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiAzMzBweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5hZGRPcmdCdXR0b257XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDUwLCAxODQpO1xyXG5jb2xvcjogYWxpY2VibHVlO1xyXG5tYXJnaW4tbGVmdDoxMzc1cHg7XHJcbm1hcmdpbi10b3A6IDVweCA7XHJcbn1cclxuLmljb257XHJcbiAgd2lkdGg6MHB4O1xyXG59XHJcbi5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNhcmQtY29udGVudHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/posts/post-list/post-list.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/posts/post-list/post-list.component.ts ***!
          \********************************************************/
        /*! exports provided: PostListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function () { return PostListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/service/post.service.ts");
            /* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
            var PostListComponent = /** @class */ (function () {
                function PostListComponent(postService, authService) {
                    this.postService = postService;
                    this.authService = authService;
                    this.posts = [];
                    this.userIsAuthenticated = false;
                }
                PostListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.postService.getPosts();
                    console.log(this.rosters);
                    this.userId = this.authService.getUserId();
                    this.username = this.authService.getUsername();
                    this.postsSub = this.postService
                        .getPostUpdateListener()
                        .subscribe(function (posts) {
                        _this.posts = posts;
                    });
                    this.userIsAuthenticated = this.authService.getIsAuth();
                    this.userId = this.authService.getUserId();
                    this.authStatus = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
                        _this.userIsAuthenticated = isAuthenticated;
                    });
                };
                PostListComponent.prototype.onDelete = function (postId) {
                    this.postService.deletePost(postId);
                };
                PostListComponent.prototype.onJoin = function (organization, joinButton) {
                    var _this = this;
                    console.log(joinButton._elementRef.nativeElement);
                    this.postService.getAllMembers().subscribe(function (roster) {
                        _this.rosters = roster;
                        _this.duplicateRoster = _this.rosters.find(function (e) { return e.username === _this.username && e.organization === organization; });
                        console.log(_this.duplicateRoster);
                        if (_this.duplicateRoster) {
                            alert('You have already sent a request to join ' + organization + " club");
                        }
                        else {
                            alert('Request sent to join ' + organization + " club");
                            _this.postService.joinOrg(_this.username, organization);
                        }
                    });
                };
                PostListComponent.prototype.ngOnDestroy = function () {
                    this.postsSub.unsubscribe();
                };
                return PostListComponent;
            }());
            PostListComponent.ctorParameters = function () { return [
                { type: _service_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
                { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-post-list",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")).default]
                })
            ], PostListComponent);
            /***/ 
        }),
        /***/ "./src/app/service/post.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/post.service.ts ***!
          \*****************************************/
        /*! exports provided: PostService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function () { return PostService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var PostService = /** @class */ (function () {
                function PostService(http) {
                    this.http = http;
                    this.posts = [];
                    this.roster = [];
                    this.postUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.rosterUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                PostService.prototype.getPosts = function () {
                    var _this = this;
                    //return [...this.posts];
                    this.http
                        .get("http://localhost:3000/api/posts")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
                        //return id as _id
                        return postData.posts.map(function (post) {
                            return {
                                name: post.name,
                                description: post.description,
                                picture: post.picture,
                                id: post._id,
                                creator: post.creator
                            };
                        });
                    }))
                        .subscribe(function (transformedPosts) {
                        _this.posts = transformedPosts;
                        _this.postUpdated.next(_this.posts.slice());
                    });
                };
                PostService.prototype.getMembers = function () {
                    var _this = this;
                    this.http
                        .get("http://localhost:3000/api/join")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (memberData) {
                        //return id as _id
                        return memberData.rosters.map(function (roster) {
                            return {
                                username: roster.username,
                                organization: roster.organization
                            };
                        });
                    }))
                        .subscribe(function (transformedRosters) {
                        _this.roster = transformedRosters;
                        _this.rosterUpdated.next(_this.roster.slice());
                    });
                };
                PostService.prototype.getRosterUpdateListener = function () {
                    return this.rosterUpdated.asObservable();
                };
                PostService.prototype.getPostUpdateListener = function () {
                    return this.postUpdated.asObservable();
                };
                PostService.prototype.getAllMembers = function () {
                    return this.http
                        .get("http://localhost:3000/api/join")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (memberData) {
                        //return id as _id
                        return memberData.rosters.map(function (roster) {
                            return {
                                username: roster.username,
                                organization: roster.organization
                            };
                        });
                    }));
                };
                PostService.prototype.getPost = function (id) {
                    return this.http.get("http://localhost:3000/api/posts/" + id);
                };
                PostService.prototype.joinOrg = function (username, organization) {
                    var _this = this;
                    var roster = {
                        id: null,
                        username: username,
                        organization: organization
                    };
                    this.http.post("http://localhost:3000/api/join", roster).subscribe(function (responseData) {
                        console.log("response Data " + responseData.message + JSON.stringify(roster));
                        _this.roster.push(roster);
                        _this.rosterUpdated.next(_this.roster.slice());
                    });
                };
                PostService.prototype.addPosts = function (name, description, picture) {
                    var _this = this;
                    var post = {
                        id: null,
                        name: name,
                        description: description,
                        picture: picture,
                        creator: null
                    };
                    this.http
                        .post("http://localhost:3000/api/posts", post)
                        .subscribe(function (responseData) {
                        console.log("response Data " + responseData.message + JSON.stringify(post));
                        _this.posts.push(post);
                        _this.postUpdated.next(_this.posts.slice());
                    });
                };
                PostService.prototype.getPostId = function (id) {
                    return Object.assign({}, this.posts.find(function (p) { return p.id === id; }));
                };
                PostService.prototype.deletePost = function (postId) {
                    var _this = this;
                    this.http
                        .delete("http://localhost:3000/api/posts/" + postId)
                        .subscribe(function () {
                        console.log("Deleted!");
                        var updatedPosts = _this.posts.filter(function (post) { return post.id !== postId; });
                        _this.posts = updatedPosts;
                        _this.postUpdated.next(_this.posts.slice());
                    });
                };
                PostService.prototype.updatePost = function (id, name, description, picture) {
                    var _this = this;
                    var post = {
                        id: id,
                        name: name,
                        description: description,
                        picture: picture,
                        creator: null
                    };
                    this.http
                        .put("http://localhost:3000/api/posts/" + post.id, post)
                        .subscribe(function (response) {
                        var updatedPosts = _this.posts.slice();
                        var oldPostIndex = updatedPosts.findIndex(function (p) { return p.id === post.id; });
                        updatedPosts[oldPostIndex] = post;
                        _this.posts = updatedPosts;
                        _this.postUpdated.next(_this.posts.slice());
                    });
                };
                return PostService;
            }());
            PostService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }) //uses same instance where ever it is injected
            ], PostService);
            /***/ 
        }),
        /***/ "./src/app/user-profile/user-profile.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/user-profile/user-profile.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n.container{\r\n  margin-left: 270px;\r\n  background-color:thistle;\r\n  margin-top: 20px;\r\n  padding-top:15px;\r\n  padding-bottom: 15px;\r\n  width: 1000px;\r\n \r\n}\r\n.member{\r\n  margin-left: 200px;\r\n  margin-right: 180px;\r\n  background-color:rgb(146, 81, 146);\r\n  margin-top: 20px;\r\n  padding-top:15px;\r\n  padding-bottom: 15px;\r\n\r\n  \r\n}\r\n.addOrgButton{\r\n  background-color: rgb(35, 207, 72);\r\n  color: aliceblue;\r\n\r\n  }\r\n.button{\r\n    background-color: green;\r\n    color: aliceblue;\r\n    margin-left:15px;\r\n    margin-top: 10px;\r\n  }\r\n.warnButton{\r\n  margin-left:10px ;\r\n}\r\n::ng-deep .snackbar{\r\n  background:rgb(139, 31, 130);\r\n  text-align: center;\r\n  color: rgb(255, 254, 254);\r\n  font-size: 20px;\r\n \r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.image{\r\n \r\n  width:200px;\r\n  height:180px;\r\n  margin-left: 0.1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhOztBQUVmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjs7O0FBR3RCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCOztFQUVoQjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tbGVmdDogMjcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0aGlzdGxlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6MTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gXHJcbn1cclxuXHJcbi5tZW1iZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ2LCA4MSwgMTQ2KTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gIFxyXG59XHJcblxyXG4uYWRkT3JnQnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMjA3LCA3Mik7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgfVxyXG4gIC5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbi53YXJuQnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHggO1xyXG59XHJcbjo6bmctZGVlcCAuc25hY2tiYXJ7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMTM5LCAzMSwgMTMwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NCwgMjU0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiBcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmltYWdle1xyXG4gXHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgaGVpZ2h0OjE4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjFweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/user-profile/user-profile.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/user-profile/user-profile.component.ts ***!
          \********************************************************/
        /*! exports provided: UserProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () { return UserProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
            /* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/post.service */ "./src/app/service/post.service.ts");
            // const fs = require("fs");
            var UserProfileComponent = /** @class */ (function () {
                function UserProfileComponent(http, authService, postService) {
                    this.http = http;
                    this.authService = authService;
                    this.postService = postService;
                    this.title = 'fileUpload';
                    this.multipleImages = [];
                }
                UserProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // const path = "../../assets/image/" + this.authService.getUserId() + '.' + 'jpeg';
                    // if (fs.existsSync(path)) {
                    this.imagepath = "../../assets/image/" + this.authService.getUserId() + '.' + 'jpeg';
                    //}
                    console.log(this.imagepath);
                    this.username = this.authService.getUsername();
                    this.postService.getMembers();
                    this.rosterSub = this.postService.getRosterUpdateListener()
                        .subscribe(function (rosters) {
                        _this.rosters = rosters;
                        _this.clubs = _this.rosters.filter(function (roster) { return roster.username === _this.username; });
                        console.log(_this.clubs);
                    });
                };
                UserProfileComponent.prototype.selectImage = function (event) {
                    if (event.target.files.length > 0) {
                        var file = event.target.files[0];
                        this.images = file;
                    }
                };
                UserProfileComponent.prototype.onSubmit = function () {
                    var formData = new FormData();
                    formData.append('file', this.images);
                    this.http.post("http://localhost:3000/api/user/image", formData).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
                };
                return UserProfileComponent;
            }());
            UserProfileComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
            ]; };
            UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")).default]
                })
            ], UserProfileComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\CORMS\CORMS\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map