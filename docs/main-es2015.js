(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Googld Analytics Multi-Users Simulation</h1>\r\n<input type=\"text\" [(ngModel)]=\"userId\">\r\n<button class=\"button\" (click)=\"setUserId()\">Set User Id</button>\r\n<br>\r\n<hr>\r\n<button class=\"button\" (click)=\"send()\">Send</button>\r\n<br>\r\n<label>{{result}}</label>\r\n<br>\r\n<hr>\r\n<button class=\"button\" (click)=\"showSub()\">Show Sub</button>\r\n\r\n<hr>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub/sub.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub/sub.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>sub works!</p>\n<button class=\"button\" (click)=\"sendSub()\">Send Sub</button>\n<br>\n<label>{{result}}</label>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sub_sub_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub/sub.component */ "./src/app/sub/sub.component.ts");




// This is the list of generic routes in the app
// Routes specific to a module are declared in the module routing file:  [module-name]-routing.module.ts
const routes = [
    // Must be the last defined route in the array. Router uses first match wins strategy.
    { path: 'sub', component: _sub_sub_component__WEBPACK_IMPORTED_MODULE_3__["SubComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // Turn enableTracing to true in the line below for debugging purposes. It will provide router tracing in the console  
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

// Exporting all declared component as an array so that we can only declare the array where the module is imported and not every individual component
const routedComponents = [_sub_sub_component__WEBPACK_IMPORTED_MODULE_3__["SubComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_google_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/google-analytics/analytics.service */ "./src/app/shared/google-analytics/analytics.service.ts");




let AppComponent = class AppComponent {
    constructor(route, router, analyticsService) {
        this.route = route;
        this.router = router;
        this.analyticsService = analyticsService;
        this.analyticsService.init();
        this.userId = this.analyticsService.userId;
        this.analyticsService.setUserId();
    }
    setUserId() {
        this.analyticsService.userId = this.userId;
        this.analyticsService.setUserId();
    }
    send() {
        this.result = '';
        this.analyticsService.event('send', { event_category: 'Home', event_label: 'Test', value: 'Test haha' });
        this.result = 'Sending event "Send", category: Home, EventLabel: Test';
    }
    showSub() {
        this.router.navigate(['sub'], { relativeTo: this.route });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_google_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_google_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _sub_sub_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub/sub.component */ "./src/app/sub/sub.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _sub_sub_component__WEBPACK_IMPORTED_MODULE_8__["SubComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([]),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/google-analytics/analytics.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/google-analytics/analytics.service.ts ***!
  \**************************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AnalyticsService = class AnalyticsService {
    constructor(router) {
        this.router = router;
        this.userId = 'dadf683d-ca61-4e86-a9de-9e92bc100a89';
    }
    // Trigger a custom event (Not route related) to Google Analytics
    event(eventName, params) {
        //this.setUserId();
        gtag('event', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleAnalyticsKey, eventName, params);
        console.log('Send event: ', eventName, params);
        console.log('User Id', this.userId);
    }
    init() {
        // Listen to route changes
        this.listenForRouteChanges();
        // Add scripts
        try {
            const script1 = document.createElement('script');
            script1.async = true;
            script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleAnalyticsKey;
            document.head.appendChild(script1);
            const script2 = document.createElement('script');
            script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '` + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleAnalyticsKey + `', {'send_page_view': false});
      `;
            document.head.appendChild(script2);
        }
        catch (ex) {
            console.error('Error appending google analytics');
            console.error(ex);
        }
    }
    setUserId() {
        console.log('Set user Id', this.userId);
        gtag('config', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleAnalyticsKey, {
            'user_id': this.userId
        });
        gtag('set', { 'user_id': this.userId });
    }
    listenForRouteChanges() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                gtag('config', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleAnalyticsKey, {
                    'page_path': event.urlAfterRedirects
                });
                console.log('Sending Google Analytics hit for route', event.urlAfterRedirects);
                console.log('Property ID', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleAnalyticsKey);
            }
        });
    }
};
AnalyticsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AnalyticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AnalyticsService);



/***/ }),

/***/ "./src/app/sub/sub.component.css":
/*!***************************************!*\
  !*** ./src/app/sub/sub.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi9zdWIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sub/sub.component.ts":
/*!**************************************!*\
  !*** ./src/app/sub/sub.component.ts ***!
  \**************************************/
/*! exports provided: SubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubComponent", function() { return SubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_google_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/google-analytics/analytics.service */ "./src/app/shared/google-analytics/analytics.service.ts");



let SubComponent = class SubComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.userId = this.analyticsService.userId;
    }
    ngOnInit() {
    }
    sendSub() {
        this.analyticsService.event('send', { event_category: 'SubCategory', event_label: 'Sub_Test', value: 'Test Sub' });
        this.result = 'Sending event "Send", category: SubCategory, EventLabel: Sub_Test';
    }
};
SubComponent.ctorParameters = () => [
    { type: _shared_google_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"] }
];
SubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub',
        template: __webpack_require__(/*! raw-loader!./sub.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub/sub.component.html"),
        styles: [__webpack_require__(/*! ./sub.component.css */ "./src/app/sub/sub.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_google_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"]])
], SubComponent);



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
const environment = {
    googleAnalyticsKey: 'UA-156468282-1',
    // googleAnalyticsKey: 'UA-153993477-1',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\GoogleAnalyticsTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map