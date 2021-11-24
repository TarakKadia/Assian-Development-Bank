(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/shelar/Desktop/workspace/projects/Angular-PWA/angular-pwa/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0&sockPath=/sockjs-node */"QM51");
module.exports = __webpack_require__(/*! /home/shelar/Desktop/workspace/projects/Angular-PWA/angular-pwa/src/main.ts */"zUnb");


/***/ }),

/***/ "3y9a":
/*!*******************************************!*\
  !*** ./src/app/constants/smallCards.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"data\":\"PRESIDENT’S MESSAGE\",\"type\":\"small-card\"},{\"id\":2,\"data\":\"BOARD OF DIRECTORS\",\"type\":\"small-card\"},{\"id\":3,\"data\":\"FINANCIAL HIGHLIGHTS\",\"type\":\"small-card\",\"url\":\"financial-highlights\"}]");

/***/ }),

/***/ "7g+B":
/*!*******************************************************!*\
  !*** ./src/app/home/side-menu/side-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SideMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(); };
SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "chaptersub"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "97Zx":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/caption/caption.component.ts ***!
  \****************************************************************/
/*! exports provided: CaptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionComponent", function() { return CaptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CaptionComponent {
    constructor() {
    }
    ngOnInit() {
        // console.log("caption : ",this.data);
    }
}
CaptionComponent.ɵfac = function CaptionComponent_Factory(t) { return new (t || CaptionComponent)(); };
CaptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptionComponent, selectors: [["app-caption"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "caption"]], template: function CaptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_constants_home_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/home.json */ "vcTP");
var src_app_constants_home_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/home.json */ "vcTP", 1);
/* harmony import */ var src_app_constants_smallCards_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/smallCards.json */ "3y9a");
var src_app_constants_smallCards_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/smallCards.json */ "3y9a", 1);
/* harmony import */ var src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/counterCards.json */ "hIki");
var src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/counterCards.json */ "hIki", 1);
/* harmony import */ var src_app_constants_chapterCards_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/chapterCards.json */ "uJAm");
var src_app_constants_chapterCards_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/chapterCards.json */ "uJAm", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "Skcq");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "7g+B");
/* harmony import */ var _counter_card_counter_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter-card/counter-card.component */ "B166");










function HomeComponent_div_5_app_side_menu_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-side-menu", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_5_app_side_menu_1_Template_app_side_menu_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.goToSideMenu(data_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", data_r3.data);
} }
function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_5_app_side_menu_1_Template, 1, 1, "app-side-menu", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r3.type === "small-card");
} }
function HomeComponent_div_7_app_counter_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-counter-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_7_app_counter_card_1_Template_app_counter_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.goToFinancialHighlights(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("duration", 1500)("digit", data_r9.money)("data", data_r9.data)("currency", data_r9.currency)("money", data_r9.money)("letter", data_r9.letter);
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_7_app_counter_card_1_Template, 1, 6, "app-counter-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r9.type === "counter-card");
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const data_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.goToReport(data_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "assets/images/", data_r14.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r14.data, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", data_r14.content, " ");
} }
class HomeComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.chapterCards = [];
        this.smallCards = [];
        this.counterCardsJsonData = [];
    }
    ngOnInit() {
        this.homeData = src_app_constants_home_json__WEBPACK_IMPORTED_MODULE_0__;
        this.chapterCards = src_app_constants_chapterCards_json__WEBPACK_IMPORTED_MODULE_3__;
        this.smallCards = src_app_constants_smallCards_json__WEBPACK_IMPORTED_MODULE_1__;
        this.counterCardsJsonData = src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_2__;
        console.log("this.homeJsonData ", src_app_constants_home_json__WEBPACK_IMPORTED_MODULE_0__);
    }
    goToReport(id) {
        // if(this.homeData){}
        this.router.navigate(['/report'], { queryParams: { id: id } });
    }
    goToFinancialHighlights() {
        this.router.navigate(['/financial-highlights']);
    }
    goToSideMenu(id) {
        this.route.queryParams
            .subscribe(params => {
            console.log(params.id);
            if (id == 1) {
                console.log("id = 1");
            }
            else if (id == 2) {
                console.log("id = 2");
            }
            else if (id == 3) {
                this.router.navigate(['/financial-highlights']);
            }
        });
    }
    onClick() {
        this.router.navigate(['/appendixes-content']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 26, vars: 3, consts: [[1, "homegroup"], [1, "imagereplace"], [1, "smallgrid"], ["class", "greybutton", 4, "ngFor", "ngForOf"], [1, "financialgroup"], [4, "ngFor", "ngForOf"], [1, "maingrid"], ["class", "chapterbox", 3, "click", 4, "ngFor", "ngForOf"], [1, "extralinks"], [1, "greybutton", 3, "click"], [1, "chaptersub"], [1, "downloads"], [1, "downloadlabel"], [1, "ar"], ["href", "https://www.adb.org/sites/default/files/institutional-document/691766/adb-annual-report-2020.pdf", "target", "_blank"], [1, "fr"], ["href", "https://www.adb.org/sites/default/files/institutional-document/691766/adb-financial-report-2020.pdf", "target", "_blank"], [1, "greybutton"], [3, "data", "click", 4, "ngIf"], [3, "data", "click"], [3, "duration", "digit", "data", "currency", "money", "letter", "click", 4, "ngIf"], [3, "duration", "digit", "data", "currency", "money", "letter", "click"], [1, "chapterbox", 3, "click"], [1, "chapterimage"], [3, "src"], [1, "chaptertext"], [1, "chaptertextgroup"], [1, "chapterblurb"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Asian Development Bank Annual Report 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 9, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_11_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Appendixes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Download: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Annual Report (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Financial Report (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.smallCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.counterCardsJsonData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.chapterCards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_7__["MenuBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__["SideMenuComponent"], _counter_card_counter_card_component__WEBPACK_IMPORTED_MODULE_9__["CounterCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appendixes_content_appendixes_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendixes-content/appendixes-content.component */ "p9sI");
/* harmony import */ var _financial_highlights_financial_highlights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./financial-highlights/financial-highlights.component */ "m7/1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: 'appendixes-content',
        component: _appendixes_content_appendixes_content_component__WEBPACK_IMPORTED_MODULE_1__["AppendixesContentComponent"]
    },
    {
        path: 'financial-highlights',
        component: _financial_highlights_financial_highlights_component__WEBPACK_IMPORTED_MODULE_2__["FinancialHighlightsComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AytR":
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
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B166":
/*!*************************************************************!*\
  !*** ./src/app/home/counter-card/counter-card.component.ts ***!
  \*************************************************************/
/*! exports provided: CounterCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterCardComponent", function() { return CounterCardComponent; });
/* harmony import */ var src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/counterCards.json */ "hIki");
var src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/counterCards.json */ "hIki", 1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "GtyH");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const _c0 = ["animatedDigit"];
class CounterCardComponent {
    constructor() { }
    ngOnInit() {
        console.log("this.data.counter-card : ", src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_0__);
        console.log("currency : ", this.currency);
        console.log("money : ", this.money);
        console.log("letter : ", this.letter);
        this.numberCounter();
    }
    numberCounter() {
        var currentNumber = jquery__WEBPACK_IMPORTED_MODULE_1__('#dynamic-number').text();
        jquery__WEBPACK_IMPORTED_MODULE_1__({ numberValue: currentNumber }).animate({ numberValue: 36.6 }, {
            duration: 1500,
            easing: 'linear',
            step: function (now) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#dynamic-number').text(now.toFixed(1));
            }
        });
    }
}
CounterCardComponent.ɵfac = function CounterCardComponent_Factory(t) { return new (t || CounterCardComponent)(); };
CounterCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CounterCardComponent, selectors: [["app-counter-card"]], viewQuery: function CounterCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.animatedDigit = _t.first);
    } }, inputs: { data: "data", currency: "currency", money: "money", letter: "letter", duration: "duration", digit: "digit", steps: "steps" }, decls: 8, vars: 4, consts: [[1, "num", 2, "color", "#222"], ["id", "dynamic-number", "data-inc-decimal", "1", 1, "display-4"], ["animatedDigit", ""], [2, "color", "#ea522c"]], template: function CounterCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.money);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", ctx.letter, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVyLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "CGn1":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/region-counter/region-counter.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegionCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionCounterComponent", function() { return RegionCounterComponent; });
/* harmony import */ var src_app_constants_region_counter_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/region-counter.json */ "jg+S");
var src_app_constants_region_counter_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/region-counter.json */ "jg+S", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RegionCounterComponent {
    constructor() {
        this.regionCounterData = [];
    }
    ngOnInit() {
        this.regionCounterData = src_app_constants_region_counter_json__WEBPACK_IMPORTED_MODULE_0__;
    }
}
RegionCounterComponent.ɵfac = function RegionCounterComponent_Factory(t) { return new (t || RegionCounterComponent)(); };
RegionCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegionCounterComponent, selectors: [["app-region-counter"]], inputs: { data: "data", heading: "heading", letter: "letter", symbol: "symbol", digit1: "digit1", digit2: "digit2", digit3: "digit3", digit4: "digit4", tag1: "tag1", tag2: "tag2", tag3: "tag3", tag4: "tag4" }, decls: 38, vars: 17, consts: [[1, "numbers"], [1, "numbergroup"], [1, "num"], ["data-inc-decimal", "1", 1, "onlynum"], [1, "sub"]], template: function RegionCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.symbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.digit1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", ctx.letter, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tag1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.symbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.digit2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", ctx.letter, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tag2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.symbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.digit3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", ctx.letter, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tag3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.symbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.digit4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", ctx.letter, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tag4, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb24tY291bnRlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Cl1V":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/shade-knowledge/shade-knowledge.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShadeKnowledgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeKnowledgeComponent", function() { return ShadeKnowledgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShadeKnowledgeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShadeKnowledgeComponent.ɵfac = function ShadeKnowledgeComponent_Factory(t) { return new (t || ShadeKnowledgeComponent)(); };
ShadeKnowledgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShadeKnowledgeComponent, selectors: [["app-shade-knowledge"]], inputs: { para1: "para1", para2: "para2", para3: "para3", para4: "para4", para5: "para5", para6: "para6", para7: "para7", para8: "para8", para9: "para9", para10: "para10", para11: "para11", para12: "para12", para13: "para13", quote: "quote", title: "title", image: "image" }, decls: 17, vars: 16, consts: [[1, "shade", "knowledge"], [3, "innerHTML"], [1, "img", 3, "src"]], template: function ShadeKnowledgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.quote, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.para13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFkZS1rbm93bGVkZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "DsVF":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/paragraph/paragraph.component.ts ***!
  \********************************************************************/
/*! exports provided: ParagraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphComponent", function() { return ParagraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ParagraphComponent {
    constructor() {
    }
    ngOnInit() {
        // console.log("paragraph : ",this.data);
    }
}
ParagraphComponent.ɵfac = function ParagraphComponent_Factory(t) { return new (t || ParagraphComponent)(); };
ParagraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParagraphComponent, selectors: [["app-paragraph"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function ParagraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhZ3JhcGguY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "G/Nf":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/counter/counter.component.ts ***!
  \****************************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CounterComponent {
    constructor() { }
    ngOnInit() {
        this.animateValue("count1", 0, this.digit, 2000);
    }
    animateValue(id, start, end, duration) {
        if (start === end)
            return;
        var range = end - start;
        var current = start;
        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function () {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter"]], inputs: { title: "title", gender: "gender", digit: "digit", data: "data", sign: "sign" }, decls: 11, vars: 5, consts: [[1, "progress1", "op2"], [1, "num"], ["id", "count1", "data-inc-decimal", "0", 1, "onlynum"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.gender, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.digit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sign, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "GYBK":
/*!************************************************************!*\
  !*** ./src/app/shared/components/image/image.component.ts ***!
  \************************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ImageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { image: "image", tag: "tag" }, decls: 4, vars: 2, consts: [[1, "topimg", 3, "src"], [1, "caption"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tag);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "JoQT":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/shade-knowledge-two/shade-knowledge-two.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShadeKnowledgeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeKnowledgeTwoComponent", function() { return ShadeKnowledgeTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShadeKnowledgeTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShadeKnowledgeTwoComponent.ɵfac = function ShadeKnowledgeTwoComponent_Factory(t) { return new (t || ShadeKnowledgeTwoComponent)(); };
ShadeKnowledgeTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShadeKnowledgeTwoComponent, selectors: [["app-shade-knowledge-two"]], inputs: { title: "title", data: "data", image: "image" }, decls: 6, vars: 3, consts: [[1, "margin"], [1, "topimg", 3, "src"]], template: function ShadeKnowledgeTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFkZS1rbm93bGVkZ2UtdHdvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/image/image.component */ "GYBK");
/* harmony import */ var _components_paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paragraph/paragraph.component */ "DsVF");
/* harmony import */ var _components_simple_heading_simple_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/simple-heading/simple-heading.component */ "T6nn");
/* harmony import */ var _components_chapter_title_chapter_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chapter-title/chapter-title.component */ "U1uN");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video/video.component */ "kEUT");
/* harmony import */ var _components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/expandable-content/expandable-content.component */ "UJXw");
/* harmony import */ var _components_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/twitter/twitter.component */ "teTY");
/* harmony import */ var _components_logo_heading_logo_heading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/logo-heading/logo-heading.component */ "bdYU");
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/counter/counter.component */ "G/Nf");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/quote/quote.component */ "X4pA");
/* harmony import */ var _components_shade_knowledge_shade_knowledge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shade-knowledge/shade-knowledge.component */ "Cl1V");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _components_caption_caption_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/caption/caption.component */ "97Zx");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/button/button.component */ "VkHG");
/* harmony import */ var _expandable_content_two_expandable_content_two_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./expandable-content-two/expandable-content-two.component */ "UNxU");
/* harmony import */ var _shade_knowledge_two_shade_knowledge_two_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shade-knowledge-two/shade-knowledge-two.component */ "JoQT");
/* harmony import */ var _components_region_title_region_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/region-title/region-title.component */ "onzJ");
/* harmony import */ var _components_region_counter_region_counter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/region-counter/region-counter.component */ "CGn1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"],
        _components_paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_2__["ParagraphComponent"],
        _components_simple_heading_simple_heading_component__WEBPACK_IMPORTED_MODULE_3__["SimpleHeadingComponent"],
        _components_chapter_title_chapter_title_component__WEBPACK_IMPORTED_MODULE_4__["ChapterTitleComponent"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"],
        _components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_6__["ExpandableContentComponent"],
        _components_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__["TwitterComponent"],
        _components_logo_heading_logo_heading_component__WEBPACK_IMPORTED_MODULE_8__["LogoHeadingComponent"],
        _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
        _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_10__["QuoteComponent"],
        _components_shade_knowledge_shade_knowledge_component__WEBPACK_IMPORTED_MODULE_11__["ShadeKnowledgeComponent"],
        _components_caption_caption_component__WEBPACK_IMPORTED_MODULE_13__["CaptionComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"],
        _expandable_content_two_expandable_content_two_component__WEBPACK_IMPORTED_MODULE_15__["ExpandableContentTwoComponent"],
        _shade_knowledge_two_shade_knowledge_two_component__WEBPACK_IMPORTED_MODULE_16__["ShadeKnowledgeTwoComponent"],
        _components_region_title_region_title_component__WEBPACK_IMPORTED_MODULE_17__["RegionTitleComponent"],
        _components_region_counter_region_counter_component__WEBPACK_IMPORTED_MODULE_18__["RegionCounterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"]], exports: [_components_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"],
        _components_paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_2__["ParagraphComponent"],
        _components_simple_heading_simple_heading_component__WEBPACK_IMPORTED_MODULE_3__["SimpleHeadingComponent"],
        _components_chapter_title_chapter_title_component__WEBPACK_IMPORTED_MODULE_4__["ChapterTitleComponent"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"],
        _components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_6__["ExpandableContentComponent"],
        _components_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__["TwitterComponent"],
        _components_logo_heading_logo_heading_component__WEBPACK_IMPORTED_MODULE_8__["LogoHeadingComponent"],
        _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
        _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_10__["QuoteComponent"],
        _components_shade_knowledge_shade_knowledge_component__WEBPACK_IMPORTED_MODULE_11__["ShadeKnowledgeComponent"],
        _components_caption_caption_component__WEBPACK_IMPORTED_MODULE_13__["CaptionComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"],
        _expandable_content_two_expandable_content_two_component__WEBPACK_IMPORTED_MODULE_15__["ExpandableContentTwoComponent"],
        _shade_knowledge_two_shade_knowledge_two_component__WEBPACK_IMPORTED_MODULE_16__["ShadeKnowledgeTwoComponent"],
        _components_region_title_region_title_component__WEBPACK_IMPORTED_MODULE_17__["RegionTitleComponent"],
        _components_region_counter_region_counter_component__WEBPACK_IMPORTED_MODULE_18__["RegionCounterComponent"]] }); })();


/***/ }),

/***/ "Skcq":
/*!*****************************************************!*\
  !*** ./src/app/home/menu-bar/menu-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MenuBarComponent {
    constructor() { }
    ngOnInit() {
        // document.getElementById("social-share").addEventListener("click", this.share);
    }
    // hasClass(ele, cls) {
    //   return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    // }
    // addClass(ele, cls) {
    //   if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    // }
    // removeClass(ele, cls) {
    //   if (this.hasClass(ele, cls)) {
    //     var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    //     ele.className = ele.className.replace(reg, ' ');
    //   }
    // }
    // share() {
    //   var ele = document.getElementsByTagName('body')[0];
    //   if (!hasClass(ele, "social-open")) {
    //     addClass(ele, "social-open");
    //   } else {
    //     removeClass(ele, "social-open");
    //   }
    // }
    closePrompt() { }
    openSocialMenu() {
        var ele = document.getElementById('social-pop');
        console.log("ele >>>> ", ele);
        if (ele.style.display === "none") {
            ele.style.display = "block";
            console.log("none");
        }
    }
}
MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(); };
MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], decls: 104, vars: 0, consts: [["id", "ios-prompt", 3, "click"], [1, "prompt-dialogue"], [1, "prompt-close"], ["id", "ios-incapable"], ["id", "ios-capable"], ["id", "body-overlay"], ["id", "real-menu", 1, "real-menu"], ["href", "#home"], ["href", "#president"], ["href", "#board"], ["href", "#financial"], ["href", "#chapter1"], ["href", "#chapter2"], [1, "submenu"], ["href", "#chapter2centralwest"], ["href", "#chapter2east"], ["href", "#chapter2pacific"], ["href", "#chapter2south"], [1, "submenu", "last"], ["href", "#chapter2southeast"], ["href", "#chapter3"], ["href", "#chapter4"], ["href", "#appendixes"], [1, "findmore"], ["href", "https://www.adb.org/sites/default/files/institutional-document/691766/adb-annual-report-2020.pdf", "target", "_blank", 1, "sub-nav", "find-more"], ["href", "https://www.adb.org/sites/default/files/institutional-document/691766/adb-financial-report-2020.pdf", "target", "_blank", 1, "sub-nav", "find-more"], ["href", "https://www.adb.org/documents/adb-annual-report-2020/#operational", "target", "_blank", 1, "sub-nav", "find-more"], ["href", "https://www.adb.org/documents/adb-annual-report-2020/#organizational", "target", "_blank", 1, "sub-nav", "find-more"], ["href", "https://www.adb.org/publications/series/fact-sheets", "target", "_blank", 1, "sub-nav", "find-more"], [1, "footergroup"], ["id", "open-menu"], [1, "copyright"], ["id", "social-share", 1, "share", 3, "click"], ["id", "social-overlay"], ["id", "social-pop"], [1, "facebook-share"], ["href", "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.adb.org%2Far2020%2Fdigital", "target", "_blank", "rel", "noopener noreferrer"], [1, "twitter-share"], ["href", "https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.adb.org%2Far2020%2Fdigital", "target", "_blank", "rel", "noopener noreferrer"], [1, "linkedin-share"], ["href", "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.adb.org%2Far2020%2Fdigital", "target", "_blank", "rel", "noopener noreferrer"], [1, "email-share"], ["href", "mailto:?subject=ADB Annual Report 2020&body=The Asian Development Bank 2020 Annual Report is now available for smart devices and screens at: https://www.adb.org/ar2020/digital.", "target", "_blank", "rel", "noopener noreferrer"]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBarComponent_Template_div_click_1_listener() { return ctx.closePrompt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "To add the Annual Report to your iPhone/iPad please use the Safari web browser.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "To add the Annual Report to your iPhone/iPad press and then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add to Home Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "President's Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Board of Directors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Financial Highlights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1. Supporting COVID\u201119 Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "and Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2. Regions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Central and West Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "East Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pacific");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "South Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Southeast Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "3. Partnering With the Private Sector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "4. Organizational Effectiveness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Appendixes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Find more information on adb.org: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Annual Report (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Financial Report (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Operational Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Organizational Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "ADB Member Fact Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "ADB\u00A0Annual\u00A0Report\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBarComponent_Template_div_click_86_listener() { return ctx.openSocialMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "FACEBOOK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "TWITTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "LINKEDIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#toggle[_ngcontent-%COMP%] {\n    display: block;\n    width: 28px;\n    height: 30px;\n    margin: 30px auto 10px;\n  }\n#toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, #toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: -9px;\n  }\n#toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{\n    top: 9px;\n  }\n#toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n  }\n#toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, #toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    width: 100%;\n    height: 5px;\n    background-color: #888;\n    transition: all 0.3s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 2px;\n  }\n\n#toggle.on[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n#toggle.on[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    transform: rotate(45deg) translate(5px, 5px);\n  }\n#toggle.on[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n    transform: rotate(-45deg) translate(7px, -8px);\n  }\n#toggle.on[_ngcontent-%COMP%]    + #menu[_ngcontent-%COMP%] {\n    opacity: 1;\n    visibility: visible;\n  }\n\n#menu[_ngcontent-%COMP%] {\n    position: relative;\n    color: #999;\n    width: 200px;\n    padding: 10px;\n    margin: auto;\n    font-family: \"Segoe UI\", Candara, \"Bitstream Vera Sans\", \"DejaVu Sans\", \"Bitstream Vera Sans\", \"Trebuchet MS\", Verdana, \"Verdana Ref\", sans-serif;\n    text-align: center;\n    border-radius: 4px;\n    background: white;\n    box-shadow: 0 1px 8px rgba(0,0,0,0.05);\n    \n    opacity: 0;\n    visibility: hidden;\n    transition: opacity .4s;\n  }\n#menu[_ngcontent-%COMP%]:after {\n    position: absolute;\n    top: -15px;\n    left: 95px;\n    content: \"\";\n    display: block;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-bottom: 20px solid white;\n  }\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    list-style: none;\n    display: block;\n    margin: 0;\n    padding: 0;\n  }\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px;\n    color: #888;\n    text-decoration: none;\n    transition: all .2s;\n  }\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    background: #1ABC9C;\n    color: #fff;\n  }\n\nbody[_ngcontent-%COMP%] { margin-top: 3em; background: #eee; color: #555; font-family: \"Open Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif; }\np[_ngcontent-%COMP%], p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 12px;text-align: center; color: #888; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCO0FBRUE7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztFQUNYO0FBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0FBRUE7OztJQUdFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtFQUNwQjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNFLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsNENBQTRDO0VBQzlDO0FBQ0E7SUFDRSw4Q0FBOEM7RUFDaEQ7QUFDQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7QUFFQSxtQkFBbUI7QUFDbkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlKQUFpSjtJQUNqSixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0VBQ2pDO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjtBQUNBOztJQUVFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7QUFHQSxnQkFBZ0I7QUFDaEIsT0FBTyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGtFQUFrRSxFQUFFO0FBQzNILFNBQVMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBRSIsImZpbGUiOiJtZW51LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0YW50IHN0eWxlcyAqL1xuI3RvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDEwcHg7XG4gIH1cbiAgXG4gICN0b2dnbGUgc3BhbjphZnRlcixcbiAgI3RvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IC05cHg7XG4gIH1cbiAgI3RvZ2dsZSBzcGFuOmFmdGVye1xuICAgIHRvcDogOXB4O1xuICB9XG4gICN0b2dnbGUgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAjdG9nZ2xlIHNwYW4sXG4gICN0b2dnbGUgc3BhbjphZnRlcixcbiAgI3RvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG4gIFxuICAvKiBvbiBhY3RpdmF0aW9uICovXG4gICN0b2dnbGUub24gc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgI3RvZ2dsZS5vbiBzcGFuOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7XG4gIH1cbiAgI3RvZ2dsZS5vbiBzcGFuOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg3cHgsIC04cHgpO1xuICB9XG4gICN0b2dnbGUub24gKyAjbWVudSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIFxuICAvKiBtZW51IGFwcGVhcmFuY2UqL1xuICAjbWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBDYW5kYXJhLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJEZWphVnUgU2Fuc1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJUcmVidWNoZXQgTVNcIiwgVmVyZGFuYSwgXCJWZXJkYW5hIFJlZlwiLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgLyoganVzdCBmb3IgdGhpcyBkZW1vICovXG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG4gIH1cbiAgI21lbnU6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIGxlZnQ6IDk1cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB3aGl0ZTtcbiAgfVxuICB1bCwgbGksIGxpIGEge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgbGkgYSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICB9XG4gIGxpIGE6aG92ZXIsXG4gIGxpIGE6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICMxQUJDOUM7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIFxuICAvKiBkZW1vIHN0eWxlcyAqL1xuICBib2R5IHsgbWFyZ2luLXRvcDogM2VtOyBiYWNrZ3JvdW5kOiAjZWVlOyBjb2xvcjogIzU1NTsgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiU2Vnb2UgVUlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgfVxuICBwLCBwIGEgeyBmb250LXNpemU6IDEycHg7dGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogIzg4ODsgfSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'angular-pwa';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "T6nn":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/simple-heading/simple-heading.component.ts ***!
  \******************************************************************************/
/*! exports provided: SimpleHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleHeadingComponent", function() { return SimpleHeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SimpleHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
SimpleHeadingComponent.ɵfac = function SimpleHeadingComponent_Factory(t) { return new (t || SimpleHeadingComponent)(); };
SimpleHeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleHeadingComponent, selectors: [["app-simple-heading"]], inputs: { simpleHeading: "simpleHeading" }, decls: 2, vars: 1, template: function SimpleHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.simpleHeading);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUtaGVhZGluZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "TGZa":
/*!*********************************************!*\
  !*** ./src/app/home/card/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardComponent {
    constructor() { }
    ngOnInit() {
        console.log("this.data : ", this.data);
        console.log(" this.image : ", this.image);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { data: "data", image: "image", content: "content", id: "id" }, decls: 9, vars: 3, consts: [[1, "chapterbox"], [1, "chapterimage"], [3, "src"], [1, "chaptertext"], [1, "chaptertextgroup"], [1, "chaptersub"], [1, "chapterblurb"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/home/", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.content, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "U1uN":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/chapter-title/chapter-title.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChapterTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterTitleComponent", function() { return ChapterTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChapterTitleComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.chapterTitle);
    }
}
ChapterTitleComponent.ɵfac = function ChapterTitleComponent_Factory(t) { return new (t || ChapterTitleComponent)(); };
ChapterTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChapterTitleComponent, selectors: [["app-chapter-title"]], inputs: { chapterTitle: "chapterTitle", heading: "heading", data: "data", content: "content", tag: "tag" }, decls: 7, vars: 3, consts: [[1, "complexheader", "regions"], [1, "chapter"]], template: function ChapterTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tag, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFwdGVyLXRpdGxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "UJXw":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/expandable-content/expandable-content.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ExpandableContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableContentComponent", function() { return ExpandableContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ExpandableContentComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " read more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "displayBlock": a0 }; };
class ExpandableContentComponent {
    constructor() {
        this.isExpand = false;
    }
    ngOnInit() {
        console.log(this.data);
    }
    readMore() {
        this.isExpand ? this.isExpand = false : this.isExpand = true;
    }
}
ExpandableContentComponent.ɵfac = function ExpandableContentComponent_Factory(t) { return new (t || ExpandableContentComponent)(); };
ExpandableContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpandableContentComponent, selectors: [["app-expandable-content"]], inputs: { data: "data", title: "title" }, decls: 5, vars: 6, consts: [[1, "shade", "story", "covid", "minimized", 3, "click"], ["class", "clickhere", 4, "ngIf"], [3, "ngClass", "innerHTML"], [1, "clickhere"]], template: function ExpandableContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandableContentComponent_Template_div_click_0_listener() { return ctx.readMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExpandableContentComponent_p_3_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isExpand))("innerHTML", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".displayBlock[_ngcontent-%COMP%]{\n    display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGFibGUtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImV4cGFuZGFibGUtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlCbG9ja3tcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "UNxU":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/expandable-content-two/expandable-content-two.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExpandableContentTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableContentTwoComponent", function() { return ExpandableContentTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ExpandableContentTwoComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Read more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "displayBlock": a0 }; };
class ExpandableContentTwoComponent {
    constructor() {
        this.isExpand = false;
    }
    ngOnInit() {
        console.log("image>>>>>>>>>>", this.image);
    }
    readMore() {
        this.isExpand ? this.isExpand = false : this.isExpand = true;
    }
}
ExpandableContentTwoComponent.ɵfac = function ExpandableContentTwoComponent_Factory(t) { return new (t || ExpandableContentTwoComponent)(); };
ExpandableContentTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpandableContentTwoComponent, selectors: [["app-expandable-content-two"]], inputs: { title: "title", data: "data", image: "image" }, decls: 6, vars: 7, consts: [[1, "box", "story", "minimized", 3, "click"], ["class", "clickhere", 4, "ngIf"], [1, "topimg", 3, "src"], [3, "ngClass", "innerHTML"], [1, "clickhere"]], template: function ExpandableContentTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandableContentTwoComponent_Template_div_click_0_listener() { return ctx.readMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExpandableContentTwoComponent_p_3_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isExpand))("innerHTML", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".displayBlock[_ngcontent-%COMP%]{\n    display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGFibGUtY29udGVudC10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJleHBhbmRhYmxlLWNvbnRlbnQtdHdvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheUJsb2Nre1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ "VkHG":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ButtonComponent {
    constructor() { }
    ngOnInit() {
        console.log("this.button : ", this.title);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { data: "data", title: "title" }, decls: 4, vars: 2, consts: [[1, "next", 2, "cursor", "pointer"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.title, ": ", ctx.data, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "X4pA":
/*!************************************************************!*\
  !*** ./src/app/shared/components/quote/quote.component.ts ***!
  \************************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class QuoteComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "pullquote"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.data, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "X9+K":
/*!*********************************************************!*\
  !*** ./src/app/home/appendixes/appendixes.component.ts ***!
  \*********************************************************/
/*! exports provided: AppendixesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppendixesComponent", function() { return AppendixesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppendixesComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onClick() {
        this.router.navigate(['/appendixes-content']);
    }
}
AppendixesComponent.ɵfac = function AppendixesComponent_Factory(t) { return new (t || AppendixesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppendixesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppendixesComponent, selectors: [["app-appendixes"]], decls: 12, vars: 0, consts: [[1, "greybutton", 3, "click"], [1, "chaptersub"], [1, "downloads"], [1, "downloadlabel"], [1, "ar"], ["href", "https://www.adb.org/sites/default/files/institutional-document/691766/adb-annual-report-2020.pdf", "target", "_blank"], [1, "fr"], ["href", "https://www.adb.org/sites/default/files/institutional-document/691766/adb-financial-report-2020.pdf", "target", "_blank"]], template: function AppendixesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppendixesComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Appendixes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Download: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Annual Report (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Financial Report (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBlbmRpeGVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "bdYU":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/logo-heading/logo-heading.component.ts ***!
  \**************************************************************************/
/*! exports provided: LogoHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoHeadingComponent", function() { return LogoHeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LogoHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoHeadingComponent.ɵfac = function LogoHeadingComponent_Factory(t) { return new (t || LogoHeadingComponent)(); };
LogoHeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoHeadingComponent, selectors: [["app-logo-heading"]], inputs: { data: "data", image: "image" }, decls: 3, vars: 2, consts: [[1, "icon", "op1"], [1, "logoImage", 3, "src"], [1, "imageTitile", 3, "innerHTML"]], template: function LogoHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLWhlYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _appendixes_appendixes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendixes/appendixes.component */ "X9+K");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ "TGZa");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "7g+B");
/* harmony import */ var _counter_card_counter_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter-card/counter-card.component */ "B166");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "Skcq");
/* harmony import */ var _appendixes_content_appendixes_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appendixes-content/appendixes-content.component */ "p9sI");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _financial_highlights_financial_highlights_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./financial-highlights/financial-highlights.component */ "m7/1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










// import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"],
        _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        _counter_card_counter_card_component__WEBPACK_IMPORTED_MODULE_4__["CounterCardComponent"],
        _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_5__["MenuBarComponent"],
        _appendixes_appendixes_component__WEBPACK_IMPORTED_MODULE_1__["AppendixesComponent"],
        _appendixes_content_appendixes_content_component__WEBPACK_IMPORTED_MODULE_6__["AppendixesContentComponent"],
        _financial_highlights_financial_highlights_component__WEBPACK_IMPORTED_MODULE_8__["FinancialHighlightsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"]], exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"],
        _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        _counter_card_counter_card_component__WEBPACK_IMPORTED_MODULE_4__["CounterCardComponent"],
        _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_5__["MenuBarComponent"],
        _appendixes_appendixes_component__WEBPACK_IMPORTED_MODULE_1__["AppendixesComponent"],
        _appendixes_content_appendixes_content_component__WEBPACK_IMPORTED_MODULE_6__["AppendixesContentComponent"],
        _financial_highlights_financial_highlights_component__WEBPACK_IMPORTED_MODULE_8__["FinancialHighlightsComponent"]] }); })();


/***/ }),

/***/ "hIki":
/*!*********************************************!*\
  !*** ./src/app/constants/counterCards.json ***!
  \*********************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"data\":\"Total ADB Operations\",\"currency\":\"$\",\"money\":31.6,\"letter\":\"B\",\"type\":\"counter-card\"},{\"id\":2,\"data\":\"Cofinancing, Including Trust Funds\",\"currency\":\"$\",\"money\":16.4,\"letter\":\"B\",\"type\":\"counter-card\"}]");

/***/ }),

/***/ "i3Xp":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "dZZH"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "i3Xp";

/***/ }),

/***/ "jg+S":
/*!***********************************************!*\
  !*** ./src/app/constants/region-counter.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"heading\":\"BY THE NUMBERS: CENTRAL AND WEST ASIA\",\"letter\":\"B\",\"type\":\"counterHeading\"},{\"symbol\":\"$\",\"digit\":6.6,\"tag\":\"COMMITTED\"},{\"digit\":4,\"tag\":\"COVID‑19<br>RESPONSE\"},{\"digit\":5.3,\"tag\":\"DISBURSED\"},{\"digit\":3.7,\"tag\":\"COFINANCED\"}]");

/***/ }),

/***/ "kEUT":
/*!************************************************************!*\
  !*** ./src/app/shared/components/video/video.component.ts ***!
  \************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 3, vars: 0, consts: [[2, "position", "relative", "display", "block", "width", "100%"], [2, "padding-top", "56.25%"], ["data-framesrc", "//players.brightcove.net/791607097001/9fa20be7-aba0-42f9-92b4-438ab9db690a_default/index.html?videoId=6157928768001", "allowfullscreen", "", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allow", "encrypted-media", "src", "//players.brightcove.net/791607097001/9fa20be7-aba0-42f9-92b4-438ab9db690a_default/index.html?videoId=6157928768001", 1, "load-later", 2, "position", "absolute", "width", "100%", "height", "100%", "top", "0px", "right", "0px", "bottom", "0px", "left", "0px"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "m7/1":
/*!*****************************************************************************!*\
  !*** ./src/app/home/financial-highlights/financial-highlights.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FinancialHighlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialHighlightsComponent", function() { return FinancialHighlightsComponent; });
/* harmony import */ var src_app_constants_financial_highlights_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/financial-highlights.json */ "sTpl");
var src_app_constants_financial_highlights_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/financial-highlights.json */ "sTpl", 1);
/* harmony import */ var src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/counterCards.json */ "hIki");
var src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/constants/counterCards.json */ "hIki", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-bar/menu-bar.component */ "Skcq");
/* harmony import */ var _counter_card_counter_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../counter-card/counter-card.component */ "B166");






function FinancialHighlightsComponent_div_8_app_counter_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-counter-card", 9);
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("duration", 1500)("digit", data_r2.money)("data", data_r2.data)("currency", data_r2.currency)("money", data_r2.money)("letter", data_r2.letter);
} }
function FinancialHighlightsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FinancialHighlightsComponent_div_8_app_counter_card_1_Template, 1, 6, "app-counter-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r2.type == "counter-card");
} }
function FinancialHighlightsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](item_r5.isSmall ? "width:50%" : "width:100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class FinancialHighlightsComponent {
    constructor() {
        this.value = [];
    }
    ngOnInit() {
        this.homeData = src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_1__;
        this.value = src_app_constants_financial_highlights_json__WEBPACK_IMPORTED_MODULE_0__;
        console.log("this.homeData >>> ", src_app_constants_counterCards_json__WEBPACK_IMPORTED_MODULE_1__, "\nfinancialHighlights >>> ", src_app_constants_financial_highlights_json__WEBPACK_IMPORTED_MODULE_0__, "\nvalue >>> ", this.value);
        this.getTitle();
        this.getSubTitle();
    }
    getTitle() {
        this.value.map(el => {
            if (el.type === 'title') {
                this.title = el.title;
                console.log("this.title >>>>> ", this.title);
            }
        });
    }
    getSubTitle() {
        this.value.map(el => {
            if (el.type === 'title') {
                this.subTitle = el.subTitle;
                console.log("this.title >>>>> ", this.subTitle);
            }
        });
    }
}
FinancialHighlightsComponent.ɵfac = function FinancialHighlightsComponent_Factory(t) { return new (t || FinancialHighlightsComponent)(); };
FinancialHighlightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FinancialHighlightsComponent, selectors: [["app-financial-highlights"]], decls: 16, vars: 4, consts: [[1, "content"], [1, "simpleheader"], [1, "numbers"], [1, "numbersgroup"], ["class", "contentCard", 4, "ngFor", "ngForOf"], ["class", "fix", "style", "text-align: center; margin-top: -125px;", 4, "ngFor", "ngForOf"], ["href", "#chapter1", 1, "next"], [1, "contentCard"], ["style", "width: 100px;", 3, "duration", "digit", "data", "currency", "money", "letter", 4, "ngIf"], [2, "width", "100px", 3, "duration", "digit", "data", "currency", "money", "letter"], [1, "fix", 2, "text-align", "center", "margin-top", "-125px"], [3, "src"]], template: function FinancialHighlightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FinancialHighlightsComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FinancialHighlightsComponent_div_9_Template, 9, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Next: Chapter 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.subTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.homeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _counter_card_counter_card_component__WEBPACK_IMPORTED_MODULE_5__["CounterCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNpYWwtaGlnaGxpZ2h0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "onzJ":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/region-title/region-title.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegionTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionTitleComponent", function() { return RegionTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RegionTitleComponent {
    constructor() { }
    ngOnInit() {
        console.log("this.regionTitle", this.regionTitle);
    }
}
RegionTitleComponent.ɵfac = function RegionTitleComponent_Factory(t) { return new (t || RegionTitleComponent)(); };
RegionTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionTitleComponent, selectors: [["app-region-title"]], inputs: { regionTitle: "regionTitle", region: "region", content: "content" }, decls: 8, vars: 3, consts: [[1, "pre"], [1, "countries"]], template: function RegionTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.regionTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb24tdGl0bGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "p9sI":
/*!*************************************************************************!*\
  !*** ./src/app/home/appendixes-content/appendixes-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: AppendixesContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppendixesContentComponent", function() { return AppendixesContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-bar/menu-bar.component */ "Skcq");


class AppendixesContentComponent {
    constructor() {
        this.app_photo1 = "./assets/images/app/app_photo1.jpg";
        this.appendix1 = "./assets/images/app/appendix1.png";
        this.appendix2_1 = "./assets/images/app/appendix2_1.png";
        this.appendix2_2 = "./assets/images/app/appendix2_2.png";
        this.appendix2_3 = "./assets/images/app/appendix2_3.png";
        this.appendix2_4 = "./assets/images/app/appendix2_4.png";
        this.appendix2_5 = "./assets/images/app/appendix2_5.png";
        this.appendix3 = "./assets/images/app/appendix3.png";
        this.appendix4 = "./assets/images/app/appendix4.png";
        this.appendix5 = "./assets/images/app/appendix5.png";
        this.appendix6 = "./assets/images/app/appendix6.png";
        this.appendix7A = "./assets/images/app/appendix7A.png";
        this.appendix7B1 = "./assets/images/app/appendix7B1.png";
        this.appendix7B2 = "./assets/images/app/appendix7B2.png";
        this.appendix8A = "./assets/images/app/appendix8A.png";
        this.appendix8B = "./assets/images/app/appendix8B.png";
        this.overlayShown = false;
        this.scrollPosition = 0;
        this.mainElement = document.getElementById('appendixes');
        this.targetElement = document.getElementById('appendix1');
    }
    ngOnInit() {
    }
}
AppendixesContentComponent.ɵfac = function AppendixesContentComponent_Factory(t) { return new (t || AppendixesContentComponent)(); };
AppendixesContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppendixesContentComponent, selectors: [["app-appendixes-content"]], decls: 426, vars: 16, consts: [["id", "appendixes", 1, "content"], [1, "simpleheader"], [3, "src"], [1, "caption"], [1, "appendix-list"], ["onclick", "showOverlay('appendix1')", 1, "appendix-item"], ["onclick", "showOverlay('appendix2')", 1, "appendix-item"], ["onclick", "showOverlay('appendix3')", 1, "appendix-item"], ["onclick", "showOverlay('appendix4')", 1, "appendix-item"], ["onclick", "showOverlay('appendix5')", 1, "appendix-item"], ["onclick", "showOverlay('appendix6')", 1, "appendix-item"], ["onclick", "showOverlay('appendix7A')", 1, "appendix-item"], ["onclick", "showOverlay('appendix7B')", 1, "appendix-item"], ["onclick", "showOverlay('appendix8A')", 1, "appendix-item"], ["onclick", "showOverlay('appendix8B')", 1, "appendix-item"], ["onclick", "showOverlay('appendix9')", 1, "appendix-item"], ["onclick", "showOverlay('appendix10')", 1, "appendix-item"], ["id", "appendix-overlay"], ["id", "appendix1", 1, "appendix-content"], [1, "load-after", 3, "src"], ["id", "appendix2", 1, "appendix-content"], ["id", "appendix3", 1, "appendix-content"], ["id", "appendix4", 1, "appendix-content"], ["id", "appendix5", 1, "appendix-content"], ["id", "appendix6", 1, "appendix-content"], ["id", "appendix7A", 1, "appendix-content"], ["id", "appendix7B", 1, "appendix-content"], ["id", "appendix8A", 1, "appendix-content"], ["id", "appendix8B", 1, "appendix-content"], ["id", "appendix9", 1, "appendix-content"], [1, "appendix-text"], ["type", "A"], [1, "heading"], ["href", "https://www.adb.org/documents/series/development-effectiveness-review", "target", "_blank"], ["href", "https://www.adb.org/documents/series/development-effectiveness-reports-private-sector-operations", "target", "_blank"], ["href", "https://www.adb.org/documents/series/adb-sustainability-reports", "target", "_blank"], ["href", "https://www.adb.org/documents/series/annual-evaluation-reviews", "target", "_blank"], ["href", "https://www.adb.org/documents/adb-information-statement", "target", "_blank"], ["href", "https://www.adb.org/documents/series/statement-adb-operations", "target", "_blank"], ["href", "https://www.adb.org/Projects/country/png/fund/Technical Assistance Special Fund", "target", "_blank"], ["href", "https://www.adb.org/documents/series/annual-report-portfolio-performance", "target", "_blank"], ["href", "https://www.adb.org/documents/series/quarterly-portfolio-update", "target", "_blank"], ["href", "https://www.adb.org/publications/series/fact-sheets", "target", "_blank"], ["href", "https://www.adb.org/documents/series/annual-report-country-performance-assessment-exercise", "target", "_blank"], ["href", "https://www.adb.org/documents/series/annual-reports-asian-development-bank-japan-scholarship-program", "target", "_blank"], ["href", "https://www.adb.org/documents/series/donor-reports", "target", "_blank"], ["href", "https://www.adb.org/documents/series/clean-energy-financing-partnership-facility-progress-reports", "target", "_blank"], ["href", "https://www.adb.org/site/funds/funds/financial-sector-development-partnership-special-fund", "target", "_blank"], ["href", "https://www.adb.org/documents/series/gender-and-development-cooperation-fund-progress-reports", "target", "_blank"], ["href", "https://www.adb.org/documents/series/progress-reports-japan-fund-poverty-reduction", "target", "_blank"], ["href", "https://www.adb.org/documents/series/annual-reports-prc-regional-cooperation-poverty-reduction", "target", "_blank"], ["href", "https://www.adb.org/documents/series/annual-reports-e-asia-and-knowledge-partnership-fund", "target", "_blank"], ["href", "https://www.adb.org/documents/series/urban-financing-partnership-facility-annual-reports", "target", "_blank"], ["href", "https://www.adb.org/documents/series/water-financing-partnership-facility-progress-reports", "target", "_blank"], ["href", "https://www.adb.org/documents/series/work-program-and-budget-framework", "target", "_blank"], ["href", "https://www.adb.org/documents/series/budget-asian-development-bank", "target", "_blank"], ["href", "https://www.adb.org/documents/series/adb-accountability-mechanism-annual-reports", "target", "_blank"], ["href", "https://www.adb.org/documents/annual-report-audit-committee-board-2019-2020", "target", "_blank"], ["href", "https://www.adb.org/documents/sector-wide-evaluation-adb-support-transport", "target", "_blank"], ["href", "https://www.adb.org/documents/effectiveness-2009-safeguard-policy-statement", "target", "_blank"], ["href", "https://www.adb.org/documents/knowledge-solutions-development-independent-evaluation-adb-s-readiness-strategy-2030", "target", "_blank"], ["href", "https://www.adb.org/documents/sector-wide-evaluation-adb-2009-energy-policy-and-program-2009-2018", "target", "_blank"], ["href", "https://www.adb.org/documents/adb-support-public-private-partnerships-2009-2019", "target", "_blank"], ["href", "https://www.adb.org/sites/default/files/page/612246/wp-2021-2023.pdf", "target", "_blank"], ["href", "https://www.adb.org/publications/series/asian-development-outlook", "target", "_blank"], ["href", "https://www.adb.org/publications/series/asia-bond-monitor", "target", "_blank"], ["href", "https://www.adb.org/publications/series/key-indicators-for-asia-and-the-pacific", "target", "_blank"], ["href", "https://www.adb.org/publications/series/basic-statistics", "target", "_blank"], ["href", "https://www.adb.org/publications/series/asian-economic-integration-report", "target", "_blank"], ["href", "https://www.adb.org/publications/series/asian-development-review", "target", "_blank"], ["href", "https://www.adb.org/publications/series/economics-working-papers", "target", "_blank"], ["href", "https://www.adb.org/publications/aid-trade-asia-pacific-economic-diversification-empowerment", "target", "_blank"], ["href", "https://www.adb.org/publications/asias-journey-to-prosperity", "target", "_blank"], ["href", "https://www.adb.org/documents/series/adbi-three-year-rolling-work-program-and-budget", "target", "_blank"], ["href", "https://www.adb.org/publications/series/adbi-working-papers", "target", "_blank"], ["href", "https://www.adb.org/publications/series/adbi-policy-briefs", "target", "_blank"], ["href", "https://www.adb.org/documents/series/office-anticorruption-and-integrity-annual-report", "target", "_blank"], ["href", "https://www.adb.org/publications/highlights-2020-annual-meeting", "target", "_blank"], ["href", "https://www.adb.org/documents/series/adb-cooperation-with-civil-society-annual-reports", "target", "_blank"], ["id", "appendix10", 1, "appendix-content"], ["href", "https://www.adb.org/documents/adb-annual-report-2020", "target", "_blank"], ["onclick", "removeOverlay()", 1, "appendix-close"], [1, "close-label"], [1, "close-icon"]], template: function AppendixesContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Appendixes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A student joins lessons through distance learning in Phnom Penh, Cambodia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Appendix 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Commitments by Country, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Appendix 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Loans and Grants Committed, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Appendix 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Approvals, 2016\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Appendix 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " ADB Regional and Nonregional Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Appendix 5:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Members, Capital Stock, and Voting Power ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Appendix 6:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Contributions to Asian Development Fund ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Appendix 7A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 2020 Project-Specific Sovereign Cofinancing Commitments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Appendix 7B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Active Trust Funds and Special Funds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Appendix 8A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " ADB Organizational Structure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Appendix 8B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " ADB Sector and Thematic Groups ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Appendix 9:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " ADB Corporate Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Appendix 10:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Operational Data and Organizational Information as of 31 December 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Appendix 9: ADB Corporate Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "ol", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Key Corporate Overview Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Development Effectiveness Review Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Development Effectiveness Report: Private Sector Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "ADB Sustainability Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Annual Evaluation Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Treasury, Finance, and Risk Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "ADB Information Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Overview of ADB Operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Statement of the Asian Development Bank\u2019s Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "ADB Projects and Tenders: Project Data Sheets for Loans, Grants, Technical Assistance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Portfolio Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Annual Portfolio Performance Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Quarterly Portfolio Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Country Operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "ADB Member Fact Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Annual Report on the Country Performance Assessment Exercise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Partnership Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "ADB\u2013Japan Scholarship Program Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Annual Partnership Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Clean Energy Financing Partnership Facility Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Financial Sector Development Partnership Special Fund Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Future Carbon Fund (print only) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Gender and Development Cooperation Fund Progress Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " High-Level Technology Fund Annual Progress Report (print only) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Japan Fund for Joint Crediting Mechanism (print only) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Japan Fund for Poverty Reduction Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "People\u2019s Republic of China Regional Cooperation and Poverty Reduction Fund Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Republic of Korea e-Asia and Knowledge Partnership Fund Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Urban Financing Partnership Facility Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Water Financing Partnership Facility Annual Report and Semiannual Progress Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Planning and Budget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Work Program and Budget Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Budget of the Asian Development Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Accountability ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "ADB Accountability Mechanism Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Audit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Annual Report of the Audit Committee of the Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Independent Evaluation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "ADB Support for Transport, 2010\u20132018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Effectiveness of the 2009 Safeguard Policy Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Knowledge Solutions for Development: An Evaluation of ADB\u2019s Readiness for Strategy 2030");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "ADB Energy Policy and Program, 2009\u20132019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "ADB Support for Public\u2013Private Partnerships, 2009\u20132019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Independent Evaluation Department Work Program, 2021\u20132023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Key Economic and Financial Research ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Asian Development Outlook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Asia Bond Monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Key Indicators for Asia and the Pacific");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Basic Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Asian Economic Integration Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Asian Development Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "ADB Economics Working Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Aid for Trade in Asia and the Pacific: Promoting Economic Diversification and Empowerment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Asia\u2019s Journey to Prosperity: Policy, Market, and Technology Over 50 Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "ADB Institute ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "ADBI Three-Year Rolling Work Program and Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "ADBI Working Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "ADBI Policy Briefs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Other Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Office of Anticorruption and Integrity (OAI): Annual Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Highlights of the ADB Annual Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Highlights of ADB\u2019s Cooperation with Civil Society Organizations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Appendix 10: Operational Data and Organizational Information as of 31 December 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "The tables and other information listed below are available for download in PDF and XLS format from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "https://www.adb.org/documents/adb-annual-report-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Operational Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Net Transfer of Resources (Ordinary Capital Resources, Asian Development Fund, and Other Special Funds Grants), 2019-2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " Special Fund\u2014Regular and Supplementary Contributions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Japan Special Fund\u2014Asian Currency Crisis Support Facility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Evaluation Results for Sovereign Operations by Developing Member Country by PCR Year, 2010\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Evaluation Results for Sovereign Operations by Sector by PCR Year, 2010\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Evaluation Results for Nonsovereign Operations by Developing Member Country by Evaluation Year, 2010\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Evaluation Results for Nonsovereign Operations by Sector by Evaluation Year, 2010\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Total ADB Operations by Sector and by Region, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Sovereign Commitments, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Commitments by Modality, 2019\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Sovereign and Nonsovereign Commitments, 2019-2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Sectoral Distribution (Sovereign and Nonsovereign Commitments Including Cofinancing), 2019-2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Top Recipients by Commitments Including Cofinancing, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Top Recipients by Commitments Excluding Cofinancing, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Technical Assistance Commitments, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Technical Assistance Grant Commitments, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Number of Projects Under Administration, Actual Problem, Completed, and PCRs/XARRs/PPERs Circulated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Overall Procurement of Goods, Works, and Consulting Services, 2020 Project/Program Loans, Grants, and Technical Assistance Operations Combined, By Origin of Goods and Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Overall Procurement of Goods, Works, and Consulting Services, 2020 Project/Program Loans, Grants, and Technical Assistance Operations Combined, By ADB Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Cumulative Contracts Awarded by Origin of Goods and Services as of 31 December 2020, Loans, Grants, and Technical Assistance Operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Cumulative Contracts Awarded by ADB Members as of 31 December 2020, Loans, Grants, and Technical Assistance Operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Amount of Loans and Grants Made Effective, Contracts Awarded, and Disbursements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Nonsovereign Commitments, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Nonsovereign Commitments by Year, 2008\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Nonsovereign Commitments by Developing Member Country, 2008\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Nonsovereign Commitments by Top Countries, Ordinary Capital Resources, 2019\u20132020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Projects Involving Commercial Cofinancing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Cofinancing Arrangements, 2019\u20132020 (Volume) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Cofinancing Arrangements, 2019\u20132020 (Number of Projects) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Projects Involving Sovereign Cofinancing, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Projects Involving Sovereign Grant Cofinancing, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "ADF-Contributed Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Organizational Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " ADB Institute Advisory Council ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Organizational Structure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Summary of Internal Administrative Expenses\u20142019 and Budget for 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Staff Representation of ADB Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Number of Authorized Positions in Resident Missions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Growth in Resident Missions and Assigned Staff Positions at Resident Missions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Members, Capital Stock, and Voting Power ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Resolutions of the Board of Governors Adopted in 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Selected Policy, Strategy, and Financial Papers Discussed by the Board in 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Board of Governors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Board of Directors and Voting Groups ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Committees of the Board of Directors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "2020 Annual Base Salary of the Board of Directors and Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.app_photo1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix2_1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix2_2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix2_3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix2_4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix2_5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix7A, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix7B1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix7B2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix8A, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appendix8B, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_1__["MenuBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBlbmRpeGVzLWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "sTpl":
/*!*****************************************************!*\
  !*** ./src/app/constants/financial-highlights.json ***!
  \*****************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"FINANCIAL HIGHLIGHTS\",\"subTitle\":\"BY THE NUMBERS\",\"type\":\"title\"},{\"image\":\"./assets/images/fin/financial_1.png\",\"isSmall\":false},{\"image\":\"./assets/images/fin/financial_2.png\",\"isSmall\":true},{\"image\":\"./assets/images/fin/financial_3.png\",\"isSmall\":true},{\"image\":\"./assets/images/fin/financial_4.png\",\"isSmall\":false},{\"image\":\"./assets/images/fin/financial_5.png\",\"isSmall\":true},{\"image\":\"./assets/images/fin/financial_6.png\",\"isSmall\":false},{\"image\":\"./assets/images/fin/financial_7.png\",\"isSmall\":true},{\"image\":\"./assets/images/fin/financial_8.png\",\"isSmall\":false},{\"image\":\"./assets/images/fin/financial_9.png\",\"isSmall\":true},{\"image\":\"./assets/images/fin/financial_10.png\",\"isSmall\":false},{\"image\":\"./assets/images/fin/financial_11.png\",\"isSmall\":false}]");

/***/ }),

/***/ "teTY":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/twitter/twitter.component.ts ***!
  \****************************************************************/
/*! exports provided: TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TwitterComponent {
    constructor() { }
    ngOnInit() {
    }
}
TwitterComponent.ɵfac = function TwitterComponent_Factory(t) { return new (t || TwitterComponent)(); };
TwitterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitterComponent, selectors: [["app-twitter"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "tweet"], [3, "innerHTML"]], template: function TwitterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0d2l0dGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "uJAm":
/*!*********************************************!*\
  !*** ./src/app/constants/chapterCards.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Chapter1\",\"data\":\"SUPPORTING COVID‑19 RESPONSE AND RECOVERY\",\"content\":\"\",\"img\":\"home_chapter1.jpg\",\"type\":\"card\"},{\"id\":2,\"name\":\"Chapter2\",\"data\":\"REGIONS\",\"content\":\"ADB's operational highlights from Central and West Asia, East Asia, the Pacific, South Asia, and Southeast Asia\",\"img\":\"home_chapter2.jpg\",\"type\":\"card\"},{\"id\":3,\"name\":\"Chapter3\",\"data\":\"PARTNERING WITH THE PRIVATE SECTOR\",\"content\":\"Private Sector Operations and the Promotion of Public-Private Partnerships\",\"img\":\"home_chapter3.jpg\",\"type\":\"card\"},{\"id\":4,\"name\":\"Chapter4\",\"data\":\"ORGANIZATIONAL EFFECTIVENESS\",\"content\":\"Delivering Through a Stronger, Better, and Faster ADB\",\"img\":\"home_chapter4.jpg\",\"type\":\"card\"}]");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | report-report-module */ "report-report-module").then(__webpack_require__.bind(null, /*! ./report/report.module */ "LVab")).then(m => m.ReportModule),
    },
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vcTP":
/*!*************************************!*\
  !*** ./src/app/constants/home.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Chapter1\",\"data\":\"SUPPORTING COVID‑19 RESPONSE AND RECOVERY\",\"content\":\"\",\"img\":\"home_chapter1.jpg\",\"type\":\"card\"},{\"id\":2,\"name\":\"Chapter2\",\"data\":\"REGIONS\",\"content\":\"DB's operational highlights from Central and West Asia, East Asia, the Pacific, South Asia, and Southeast Asia\",\"img\":\"home_chapter2.jpg\",\"type\":\"card\"},{\"id\":3,\"name\":\"Chapter3\",\"data\":\"PARTNERING WITH THE PRIVATE SECTOR\",\"content\":\"rivate Sector Operations and the Promotion of Public-Private Partnerships\",\"img\":\"home_chapter3.jpg\",\"type\":\"card\"},{\"id\":4,\"name\":\"Chapter4\",\"data\":\"ORGANIZATIONAL EFFECTIVENESS\",\"content\":\"elivering Through a Stronger, Better, and Faster ADB\",\"img\":\"home_chapter4.jpg\",\"type\":\"card\"},{\"id\":1,\"data\":\"PRESIDENT’S MESSAGE\",\"type\":\"small-card\"},{\"id\":2,\"data\":\"BOARD OF DIRECTORS\",\"type\":\"small-card\"},{\"id\":3,\"data\":\"FINANCIAL HIGHLIGHTS\",\"type\":\"small-card\",\"url\":\"financial-highlights\"},{\"data\":\"Total ADB Operations\",\"currency\":\"$\",\"money\":31.6,\"letter\":\"B\",\"type\":\"counter-card\"},{\"data\":\"Cofinancing, Including Trust Funds\",\"currency\":\"$\",\"money\":16.4,\"letter\":\"B\",\"type\":\"counter-card\"}]");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map