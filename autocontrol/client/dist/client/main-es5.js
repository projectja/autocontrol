function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_empleados_list_empleados_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/empleados-list/empleados-list.component */
    "./src/app/components/empleados-list/empleados-list.component.ts");
    /* harmony import */


    var _components_empleado_form_empleado_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/empleado-form/empleado-form.component */
    "./src/app/components/empleado-form/empleado-form.component.ts");
    /* harmony import */


    var _components_autocontrol_form_autocontrol_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/autocontrol-form/autocontrol-form.component */
    "./src/app/components/autocontrol-form/autocontrol-form.component.ts");

    var routes = [{
      // como está redireccionando a otro sitio hay que añadir pathMatch y full
      path: '',
      redirectTo: 'games',
      pathMatch: 'full'
    }, {
      // cuando viiste la ruta /games se randeriza el componente gamelistcomponents
      path: 'games',
      component: _components_empleados_list_empleados_list_component__WEBPACK_IMPORTED_MODULE_2__["EmpleadosListComponent"]
    }, {
      path: 'games/add',
      component: _components_empleado_form_empleado_form_component__WEBPACK_IMPORTED_MODULE_3__["EmpleadoFormComponent"]
    }, {
      path: 'games/edit/:id',
      component: _components_empleado_form_empleado_form_component__WEBPACK_IMPORTED_MODULE_3__["EmpleadoFormComponent"]
    }, {
      path: 'autocontrol',
      component: _components_autocontrol_form_autocontrol_form_component__WEBPACK_IMPORTED_MODULE_4__["AutocontrolFormComponent"]
    }, {
      path: 'elementoszona',
      component: _components_autocontrol_form_autocontrol_form_component__WEBPACK_IMPORTED_MODULE_4__["AutocontrolFormComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container", "p-4"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "H1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cliente de angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _components_empleado_form_empleado_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/empleado-form/empleado-form.component */
    "./src/app/components/empleado-form/empleado-form.component.ts");
    /* harmony import */


    var _components_empleados_list_empleados_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/empleados-list/empleados-list.component */
    "./src/app/components/empleados-list/empleados-list.component.ts");
    /* harmony import */


    var _services_autocontrol_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/autocontrol.service */
    "./src/app/services/autocontrol.service.ts");
    /* harmony import */


    var _components_autocontrol_form_autocontrol_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/autocontrol-form/autocontrol-form.component */
    "./src/app/components/autocontrol-form/autocontrol-form.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_font_awesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-font-awesome */
    "./node_modules/ngx-font-awesome/__ivy_ngcc__/fesm2015/ngx-font-awesome.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js"); // con esto funcionara nuestro sirivio
    // esto vale pasra decirle que esta app tendraa este proveedor


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_autocontrol_service__WEBPACK_IMPORTED_MODULE_10__["AutocontrolService"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_font_awesome__WEBPACK_IMPORTED_MODULE_19__["NgxFontAwesomeModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"].forRoot(), ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"].withComponents([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _components_empleado_form_empleado_form_component__WEBPACK_IMPORTED_MODULE_8__["EmpleadoFormComponent"], _components_empleados_list_empleados_list_component__WEBPACK_IMPORTED_MODULE_9__["EmpleadosListComponent"], _components_autocontrol_form_autocontrol_form_component__WEBPACK_IMPORTED_MODULE_11__["AutocontrolFormComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_font_awesome__WEBPACK_IMPORTED_MODULE_19__["NgxFontAwesomeModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _components_empleado_form_empleado_form_component__WEBPACK_IMPORTED_MODULE_8__["EmpleadoFormComponent"], _components_empleados_list_empleados_list_component__WEBPACK_IMPORTED_MODULE_9__["EmpleadosListComponent"], _components_autocontrol_form_autocontrol_form_component__WEBPACK_IMPORTED_MODULE_11__["AutocontrolFormComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_font_awesome__WEBPACK_IMPORTED_MODULE_19__["NgxFontAwesomeModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"].forRoot(), ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"].withComponents([])],
          providers: [_services_autocontrol_service__WEBPACK_IMPORTED_MODULE_10__["AutocontrolService"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/autocontrol-form/autocontrol-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/autocontrol-form/autocontrol-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AutocontrolFormComponent */

  /***/
  function srcAppComponentsAutocontrolFormAutocontrolFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocontrolFormComponent", function () {
      return AutocontrolFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_tareas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/tareas */
    "./src/app/models/tareas.ts");
    /* harmony import */


    var _services_validadores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/validadores.service */
    "./src/app/services/validadores.service.ts");
    /* harmony import */


    var _services_autocontrol_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/autocontrol.service */
    "./src/app/services/autocontrol.service.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    function AutocontrolFormComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var empleado_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", empleado_r8.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](empleado_r8.nombre);
      }
    }

    function AutocontrolFormComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var zona_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", zona_r9.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zona_r9.nombre);
      }
    }

    function AutocontrolFormComponent_option_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var elemento_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", elemento_r10.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elemento_r10.description_obj);
      }
    }

    var AutocontrolFormComponent =
    /*#__PURE__*/
    function () {
      //[
      //  { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true },
      //    { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true },
      //    { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true },
      //    { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true }
      // ];
      // fin prueba para error
      function AutocontrolFormComponent(fb, validadores, autocontrolservice) {
        _classCallCheck(this, AutocontrolFormComponent);

        this.fb = fb;
        this.validadores = validadores;
        this.autocontrolservice = autocontrolservice;
        this.empleados = [];
        this.zonasTienda = [];
        this.elementosZona = [];
        this.tareaencurso = new _models_tareas__WEBPACK_IMPORTED_MODULE_2__["Tareas"]();
        this.tareasrealizadas = [];
        this.rowData = [];
        this.crearFormulario();
        this.cargarDataAlFormulario();
        this.crearListeners();
        this.columnDefs = [{
          headerName: 'Fecha',
          field: 'fecha_tarea',
          sortable: true
        }, {
          headerName: 'Nombre',
          field: 'nombre',
          sortable: true
        }, {
          headerName: 'Zona',
          field: 'zona'
        }, {
          headerName: 'Parte',
          field: 'parte'
        }, {
          headerName: 'Finalizada',
          field: 'finalizada'
        }, {
          headerName: 'nota',
          field: 'nota'
        }];
      }

      _createClass(AutocontrolFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmpleados();
          this.cargarZonas();
          this.cargarGrid();
        }
        /*
            get pasatiempos() {
          return this.forma.get('pasatiempos') as FormArray;
        }
            get nombreNoValido() {
          return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
        }
            get apellidoNoValido() {
          return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
        }
            get correoNoValido() {
          return this.forma.get('correo').invalid && this.forma.get('correo').touched
        }
            get usuarioNoValido() {
          return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
        }
            get distritoNoValido() {
          return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched
        }
            get ciudadNoValido() {
          return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched
        }
            get pass1NoValido() {
          return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
        }
            get pass2NoValido() {
          const pass1 = this.forma.get('pass1').value;
          const pass2 = this.forma.get('pass2').value;
              return ( pass1 === pass2 ) ? false : true;
        }
        */

      }, {
        key: "crearFormulario",
        value: function crearFormulario() {
          this.forma = this.fb.group({
            fecha_tarea: 9,
            id_empleado: 0,
            id_zona: 0,
            id_elementozona: 0,
            nota: [''],
            finalizada: false
            /* nombre  : ['', [ Validators.required, Validators.minLength(5) ]  ],
            apellido: ['', [Validators.required, this.validadores.noHerrera ] ],
            correo  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
            usuario : ['', , this.validadores.existeUsuario ], */

            /* pass1   : ['', Validators.required ],
            pass2   : ['', Validators.required ],
            direccion: this.fb.group({
              distrito: ['', Validators.required ],
              ciudad  : ['', Validators.required ],
            
            }),
            
            pasatiempos: this.fb.array([])
            },{
            validators: this.validadores.passwordsIguales('pass1','pass2') */

          });
        }
      }, {
        key: "crearListeners",
        value: function crearListeners() {
          // this.forma.valueChanges.subscribe( valor => {
          //   console.log(valor);
          // });
          // this.forma.statusChanges.subscribe( status => console.log({ status }));
          this.forma.get('id_empleado').valueChanges.subscribe(console.log);
        }
      }, {
        key: "cargarDataAlFormulario",
        value: function cargarDataAlFormulario() {
          // this.forma.setValue({
          this.forma.reset({
            id_empleado: 0,
            id_zona: 0,
            nota: [''],
            id_elementozona: 0,
            finalizada: false
          });
        }
        /*
        
          agregarPasatiempo() {
            this.pasatiempos.push(  this.fb.control('')  );
          }
          
          borrarPasatiempo(i: number) {
            this.pasatiempos.removeAt(i);
          }
        
        */

      }, {
        key: "guardar",
        value: function guardar() {
          var _this = this;

          console.log("VALOR DE FORMA EN GUARDAR() ", this.forma);

          if (this.forma.invalid) {
            return Object.values(this.forma.controls).forEach(function (control) {
              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                Object.values(control.controls).forEach(function (control) {
                  return control.markAsTouched();
                });
              } else {
                control.markAsTouched();
              }
            });
          }

          this.tareaencurso = JSON.parse(JSON.stringify(this.forma.value));
          this.autocontrolservice.saveTarea(this.tareaencurso).subscribe(function (res) {
            //this.empleados = res;
            console.log("ESTSOS SON LOS EMPLEADOS: ", res);

            _this.cargarGrid();
          }, function (err) {
            return console.error(err);
          }); // Posteo de información

          this.forma.reset({
            nombre: 'Sin nombre'
          });
        }
      }, {
        key: "getEmpleados",
        value: function getEmpleados() {
          var _this2 = this;

          this.autocontrolservice.getEmpleados().subscribe(function (res) {
            _this2.empleados = res;
            console.log(res);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "cargarZonas",
        value: function cargarZonas() {
          var _this3 = this;

          this.autocontrolservice.getZonas().subscribe(function (res) {
            _this3.zonasTienda = res;
            console.log(_this3.zonasTienda);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "cargarElementosZona",
        value: function cargarElementosZona(selectedValue) {
          var _this4 = this;

          var idZona = this.forma.get('id_zona').value;
          console.log('cargarELEMENTOSzonas variable idzona ', idZona);

          if (idZona != null) {
            this.autocontrolservice.getElementosZonaPorzona(idZona).subscribe(function (res) {
              _this4.elementosZona = res;
              console.log(_this4.elementosZona);
            }, function (err) {
              return console.error(err);
            });
          }
        } // metodo creado para probar error

      }, {
        key: "filterChanged",
        value: function filterChanged(selectedValue) {
          console.log('value is ', selectedValue);
        }
      }, {
        key: "cargarGrid",
        value: function cargarGrid() {
          var _this5 = this;

          this.autocontrolservice.getElementosGrid().subscribe(function (res) {
            _this5.tareasrealizadas = res;
            _this5.rowData = res;
            console.log("tareas ", _this5.tareasrealizadas);
          }, function (err) {
            return console.error("dea error", err);
          });
        }
      }]);

      return AutocontrolFormComponent;
    }();

    AutocontrolFormComponent.ɵfac = function AutocontrolFormComponent_Factory(t) {
      return new (t || AutocontrolFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validadores_service__WEBPACK_IMPORTED_MODULE_3__["ValidadoresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_autocontrol_service__WEBPACK_IMPORTED_MODULE_4__["AutocontrolService"]));
    };

    AutocontrolFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutocontrolFormComponent,
      selectors: [["app-autoncontrol-form"]],
      decls: 54,
      vars: 12,
      consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-2", "col-form-label"], [1, "col", "example-full-width"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha_tarea", 1, "form-control", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"], [1, "col"], ["placeholder", "Nombre", "formControlName", "id_empleado", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Zona", "formControlName", "id_zona", 1, "form-control", 3, "change"], ["placeholder", "Zona", "formControlName", "id_elementozona", 1, "form-control"], [1, "form-group", "row", "align-items-end"], ["value", "", 1, "col-2", "col-form-label"], ["type", "checkbox", "value", "", "formControlName", "finalizada"], [1, "input-group", "col"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-block"], [1, "ag-theme-balham", 2, "width", "1024px", "height", "500px", 3, "rowData", "columnDefs"], [3, "value"]],
      template: function AutocontrolFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Formularios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Reactivos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AutocontrolFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.guardar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocontrolFormComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return _r4.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AutocontrolFormComponent_option_20_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Zona de la tienda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AutocontrolFormComponent_Template_select_change_25_listener($event) {
            return ctx.cargarElementosZona($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AutocontrolFormComponent_option_26_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Qu\xE9 parte concretamente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AutocontrolFormComponent_option_32_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Finalizada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "ag-grid-angular", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forma);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.empleados);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zonasTienda);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.elementosZona);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowData)("columnDefs", ctx.columnDefs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  Estado del formulario: ", ctx.forma.valid, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n  Status: ", ctx.forma.status, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 10, ctx.forma.value), "\n\n");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridAngular"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0b2NvbnRyb2wtZm9ybS9hdXRvY29udHJvbC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocontrolFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-autoncontrol-form',
          templateUrl: './autocontrol-form.component.html',
          styleUrls: ['./autocontrol-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_validadores_service__WEBPACK_IMPORTED_MODULE_3__["ValidadoresService"]
        }, {
          type: _services_autocontrol_service__WEBPACK_IMPORTED_MODULE_4__["AutocontrolService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/empleado-form/empleado-form.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/empleado-form/empleado-form.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EmpleadoFormComponent */

  /***/
  function srcAppComponentsEmpleadoFormEmpleadoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpleadoFormComponent", function () {
      return EmpleadoFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_empleados__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/empleados */
    "./src/app/models/empleados.ts");
    /* harmony import */


    var src_app_services_autocontrol_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/autocontrol.service */
    "./src/app/services/autocontrol.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EmpleadoFormComponent =
    /*#__PURE__*/
    function () {
      function EmpleadoFormComponent(autocontrolService, router, activedRoute) {
        _classCallCheck(this, EmpleadoFormComponent);

        this.autocontrolService = autocontrolService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.classes = 'row';
        this.empleado = new _models_empleados__WEBPACK_IMPORTED_MODULE_1__["Empleados"]();
        this.edit = false;
      }

      _createClass(EmpleadoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          var params = this.activedRoute.snapshot.params;

          if (params.id) {
            this.autocontrolService.getEmpleado(params.id).subscribe(function (res) {
              console.log("NGONINIT ", res);
              console.log("RES ", res); //this.game = res;

              _this6.empleado = res;
              console.log("THIS.GAME ", _this6.empleado);
              _this6.edit = true;
            }, function (err) {
              return console.error(err);
            });
          }
        }
      }, {
        key: "saveNewEmpleado",
        value: function saveNewEmpleado() {
          var _this7 = this;

          // PAAA GUARDARLO LLAMAMOS AL METODO DEL SERVCVIICIO
          //delete this.game.created_at;
          //delete this.game.id;
          console.log('saveNEWgame');
          this.autocontrolService.saveEmpleado(this.empleado).subscribe(function (res) {
            console.log("hola", res);

            _this7.router.navigate(['/empleados']);
          }, function (err) {
            return console.error("error", err);
          });
        }
      }, {
        key: "updateEmpleado",
        value: function updateEmpleado() {
          delete this.empleado.created_at;
          console.log(' en el update GAME QUE PASA ', this.empleado);
          this.autocontrolService.updateEmpleados(this.empleado.id, this.empleado).subscribe(function (res) {
            console.log("guyas");
          }, function (err) {
            return console.error('dfdffd');
          });
        }
      }]);

      return EmpleadoFormComponent;
    }();

    EmpleadoFormComponent.ɵfac = function EmpleadoFormComponent_Factory(t) {
      return new (t || EmpleadoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_autocontrol_service__WEBPACK_IMPORTED_MODULE_2__["AutocontrolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    EmpleadoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmpleadoFormComponent,
      selectors: [["app-empleado-form"]],
      hostVars: 2,
      hostBindings: function EmpleadoFormComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        }
      },
      decls: 21,
      vars: 8,
      consts: [[1, "col-md-4", "offset-md-2"], [1, "card"], [1, "card-body"], [1, "form-group"], ["type", "text", "nombre", "tittle", "placeholder", "nombre", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombre", "nombre", "placeholder", "nombre", "rows", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "url", "nombre", "image", "placeholder", "Image", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-block", 3, "click"], [1, "col-md-4"], [1, "card", "card-body", "text-center"], [1, "card-img-top", 3, "src"]],
      template: function EmpleadoFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmpleadoFormComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.empleado.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmpleadoFormComponent_Template_textarea_ngModelChange_7_listener($event) {
            return ctx.empleado.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmpleadoFormComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.empleado.image = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmpleadoFormComponent_Template_button_click_10_listener() {
            return ctx.edit ? ctx.updateEmpleado() : ctx.saveNewEmpleado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.empleado.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.empleado.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.empleado.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.empleado.image == "" ? "/assets/noimage.png" : ctx.empleado.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.empleado.id, ". ", ctx.empleado.nombre == "" ? "Nombre empleado " : ctx.empleado.nombre, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.empleado.nombre == "" ? "whirte your nombre " : ctx.empleado.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.empleado.created_at, " | date: 'yyy-MM-dd'");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbGVhZG8tZm9ybS9lbXBsZWFkby1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmpleadoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-empleado-form',
          templateUrl: './empleado-form.component.html',
          styleUrls: ['./empleado-form.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_autocontrol_service__WEBPACK_IMPORTED_MODULE_2__["AutocontrolService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, {
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/empleados-list/empleados-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/empleados-list/empleados-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EmpleadosListComponent */

  /***/
  function srcAppComponentsEmpleadosListEmpleadosListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpleadosListComponent", function () {
      return EmpleadosListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_autocontrol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/autocontrol.service */
    "./src/app/services/autocontrol.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/empleados/edit", a1];
    };

    function EmpleadosListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmpleadosListComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var empleado_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteEmpleado(empleado_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " EDIT GAME ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var empleado_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", empleado_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", empleado_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](empleado_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, empleado_r1.id));
      }
    }

    var EmpleadosListComponent =
    /*#__PURE__*/
    function () {
      function EmpleadosListComponent(autocontrolService) {
        _classCallCheck(this, EmpleadosListComponent);

        this.autocontrolService = autocontrolService;
        this.classes = 'row';
        this.empleados = [];
      }

      _createClass(EmpleadosListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmpleados();
        }
      }, {
        key: "getEmpleados",
        value: function getEmpleados() {
          var _this8 = this;

          this.autocontrolService.getEmpleados().subscribe(function (res) {
            _this8.empleados = res;
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "deleteEmpleado",
        value: function deleteEmpleado(id) {
          this.autocontrolService.deleteEmpleado(id).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return EmpleadosListComponent;
    }();

    EmpleadosListComponent.ɵfac = function EmpleadosListComponent_Factory(t) {
      return new (t || EmpleadosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_autocontrol_service__WEBPACK_IMPORTED_MODULE_1__["AutocontrolService"]));
    };

    EmpleadosListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmpleadosListComponent,
      selectors: [["app-game-list"]],
      hostVars: 2,
      hostBindings: function EmpleadosListComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "text-center"], [1, "card-header", "bg-dark", "text-white", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-danger", 3, "click"], [1, "far", "fa-trash-alt"], [1, "card-img-top", 3, "src"], [1, "card-body"], [1, "btn", "btn-info", "btn-block", 3, "routerLink"]],
      template: function EmpleadosListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmpleadosListComponent_div_0_Template, 12, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.empleados);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbGVhZG9zLWxpc3QvZW1wbGVhZG9zLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmpleadosListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-list',
          templateUrl: './empleados-list.component.html',
          styleUrls: ['./empleados-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_autocontrol_service__WEBPACK_IMPORTED_MODULE_1__["AutocontrolService"]
        }];
      }, {
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 20,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/autocontrol", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-gamepad"], ["routerLink", "/games", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/games/add", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-plus-circle"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CRUD DE MYSQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Autocontrol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Empleados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " a\xF1adir empleados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/empleados.ts":
  /*!*************************************!*\
    !*** ./src/app/models/empleados.ts ***!
    \*************************************/

  /*! exports provided: Empleados */

  /***/
  function srcAppModelsEmpleadosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Empleados", function () {
      return Empleados;
    });

    var Empleados = function Empleados() {
      _classCallCheck(this, Empleados);
    };
    /***/

  },

  /***/
  "./src/app/models/tareas.ts":
  /*!**********************************!*\
    !*** ./src/app/models/tareas.ts ***!
    \**********************************/

  /*! exports provided: Tareas */

  /***/
  function srcAppModelsTareasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tareas", function () {
      return Tareas;
    });

    var Tareas = function Tareas() {
      _classCallCheck(this, Tareas);
    };
    /***/

  },

  /***/
  "./src/app/services/autocontrol.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/autocontrol.service.ts ***!
    \*************************************************/

  /*! exports provided: AutocontrolService */

  /***/
  function srcAppServicesAutocontrolServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocontrolService", function () {
      return AutocontrolService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AutocontrolService =
    /*#__PURE__*/
    function () {
      function AutocontrolService(http) {
        _classCallCheck(this, AutocontrolService);

        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
      }

      _createClass(AutocontrolService, [{
        key: "getEmpleados",
        value: function getEmpleados() {
          // para no colocar directamente la direction se utiliza una propiedad API_URI
          return this.http.get("".concat(this.API_URI, "/empleados"));
        }
      }, {
        key: "getZonas",
        value: function getZonas() {
          // para no colocar directamente la direction se utiliza una propiedad API_URI
          return this.http.get("".concat(this.API_URI, "/zonas"));
        }
      }, {
        key: "getEmpleado",
        value: function getEmpleado(id) {
          return this.http.get("".concat(this.API_URI, "/empleado/").concat(id));
        }
      }, {
        key: "deleteEmpleado",
        value: function deleteEmpleado(id) {
          return this.http["delete"]("".concat(this.API_URI, "/empleado/").concat(id));
        }
      }, {
        key: "saveEmpleado",
        value: function saveEmpleado(empleado) {
          console.log("SAVE GAME ", empleado);
          console.log;
          return this.http.post("".concat(this.API_URI, "/empleado/"), empleado);
        }
      }, {
        key: "updateEmpleados",
        value: function updateEmpleados(id, updatedEmpleado) {
          console.log("actualizado", updatedEmpleado);
          return this.http.put("".concat(this.API_URI, "/empleado/").concat(id), updatedEmpleado);
        }
      }, {
        key: "getElementosZonaPorzona",
        value: function getElementosZonaPorzona(id) {
          return this.http.get("".concat(this.API_URI, "/elementosporzona/").concat(id));
        }
      }, {
        key: "saveTarea",
        value: function saveTarea(tareas) {
          console.log("SAVE TAREA  ", tareas);
          return this.http.post("".concat(this.API_URI, "/tareas"), tareas);
        }
      }, {
        key: "getElementosGrid",
        value: function getElementosGrid() {
          return this.http.get("".concat(this.API_URI, "/tareas"));
        }
      }]);

      return AutocontrolService;
    }();

    AutocontrolService.ɵfac = function AutocontrolService_Factory(t) {
      return new (t || AutocontrolService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AutocontrolService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AutocontrolService,
      factory: AutocontrolService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocontrolService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/validadores.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/validadores.service.ts ***!
    \*************************************************/

  /*! exports provided: ValidadoresService */

  /***/
  function srcAppServicesValidadoresServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidadoresService", function () {
      return ValidadoresService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidadoresService =
    /*#__PURE__*/
    function () {
      function ValidadoresService() {
        _classCallCheck(this, ValidadoresService);
      }

      _createClass(ValidadoresService, [{
        key: "existeUsuario",
        value: function existeUsuario(control) {
          if (!control.value) {
            return Promise.resolve(null);
          }

          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              if (control.value === 'strider') {
                resolve({
                  existe: true
                });
              } else {
                resolve(null);
              }
            }, 3500);
          });
        }
      }, {
        key: "noHerrera",
        value: function noHerrera(control) {
          var _a;

          if (((_a = control.value) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'herrera') {
            return {
              noHerrera: true
            };
          }

          return null;
        }
      }, {
        key: "passwordsIguales",
        value: function passwordsIguales(pass1Name, pass2Name) {
          return function (formGroup) {
            var pass1Control = formGroup.controls[pass1Name];
            var pass2Control = formGroup.controls[pass2Name];

            if (pass1Control.value === pass2Control.value) {
              pass2Control.setErrors(null);
            } else {
              pass2Control.setErrors({
                noEsIgual: true
              });
            }
          };
        }
      }]);

      return ValidadoresService;
    }();

    ValidadoresService.ɵfac = function ValidadoresService_Factory(t) {
      return new (t || ValidadoresService)();
    };

    ValidadoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ValidadoresService,
      factory: ValidadoresService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidadoresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\curso\angular\25-clone\autocontrol\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map