(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-ash-ash-test-second-ash-test-second-module"], {
    /***/
    "7Qs7":
    /*!*********************************************************************!*\
      !*** ./src/app/tests/ash/ash-test-second/ash-test-second.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AshTestSecondModule */

    /***/
    function Qs7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AshTestSecondModule", function () {
        return AshTestSecondModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ash_test_second_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ash-test-second-routing.module */
      "n7jf");
      /* harmony import */


      var _ash_test_second_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ash-test-second.component */
      "H9/S");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var AshTestSecondModule = function AshTestSecondModule() {
        _classCallCheck(this, AshTestSecondModule);
      };

      AshTestSecondModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AshTestSecondModule
      });
      AshTestSecondModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AshTestSecondModule_Factory(t) {
          return new (t || AshTestSecondModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ash_test_second_routing_module__WEBPACK_IMPORTED_MODULE_2__["AshTestSecondRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AshTestSecondModule, {
          declarations: [_ash_test_second_component__WEBPACK_IMPORTED_MODULE_3__["AshTestSecondComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ash_test_second_routing_module__WEBPACK_IMPORTED_MODULE_2__["AshTestSecondRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AshTestSecondModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_ash_test_second_component__WEBPACK_IMPORTED_MODULE_3__["AshTestSecondComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ash_test_second_routing_module__WEBPACK_IMPORTED_MODULE_2__["AshTestSecondRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "H9/S":
    /*!************************************************************************!*\
      !*** ./src/app/tests/ash/ash-test-second/ash-test-second.component.ts ***!
      \************************************************************************/

    /*! exports provided: AshTestSecondComponent */

    /***/
    function H9S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AshTestSecondComponent", function () {
        return AshTestSecondComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/api.service */
      "HyEY");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function AshTestSecondComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u012Eveskite pad\u0117klo registravimo dat\u0105 yyyyMMdd ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AshTestSecondComponent_mat_step_16_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fiksuokite pad\u0117klo numer\u012F ir svor\u012F: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AshTestSecondComponent_mat_step_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AshTestSecondComponent_mat_step_16_ng_template_3_Template, 2, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AshTestSecondComponent_mat_step_16_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r4 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.aArray[i_r4] && (ctx_r6.aArray[i_r4].dishId = $event);
          })("keydown.enter", function AshTestSecondComponent_mat_step_16_Template_input_keydown_enter_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r4 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r8.addItem();
            return ctx_r8.sverti(ctx_r8.aArray[i_r4]);
          })("focusout", function AshTestSecondComponent_mat_step_16_Template_input_focusout_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r4 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.action(ctx_r9.aArray[i_r4]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pad\u0117klo svoris po dziovinimo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Atgal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sekantis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AshTestSecondComponent_mat_step_16_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _r0.reset();

            ctx_r10.onSubmit(ctx_r10.aArray);
            return ctx_r10.swalSamplesRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Baigta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AshTestSecondComponent_mat_step_16_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _r0.reset();

            return ctx_r11.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pildyti i\u0161 naujo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r2.aArray[i_r4]), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "input", i_r4 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.aArray[i_r4] && ctx_r2.aArray[i_r4].dishId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.aArray[i_r4] && ctx_r2.aArray[i_r4].dishAndSampleWeightAfter, "");
        }
      }

      var AshTestSecondComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:variable-name
        function AshTestSecondComponent(_formBuilder, api) {
          _classCallCheck(this, AshTestSecondComponent);

          this._formBuilder = _formBuilder;
          this.api = api;
          this.tray = {};
          this.aArray = [];
          this.targetInput = 'input0';
        }

        _createClass(AshTestSecondComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.secondFormGroup = this._formBuilder.group({
              primaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              secondaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.thirdFormGroup = this._formBuilder.group({
              thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.formGroup = this._formBuilder.group({
              form: this._formBuilder.array([])
            });
          }
        }, {
          key: "init",
          value: function init() {
            return this._formBuilder.group({
              cont1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              cont2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.form = this.formGroup.get('form');
            this.form.push(this.init());
            this.aArray.push(new ( /*#__PURE__*/function () {
              function _class() {
                _classCallCheck(this, _class);
              }

              return _class;
            }())());
          }
        }, {
          key: "sverti",
          value: function sverti(sample) {
            var _this = this;

            this.api.get('/lei/scales').subscribe(function (weight) {
              _this.weight = weight;
              sample.dishAndSampleWeightAfter = _this.weight;
              sample.date = _this.date;
              console.log(_this.weight);
            });
          }
        }, {
          key: "action",
          value: function action(sample) {
            var _this2 = this;

            this.api.get("/lei/trays/".concat(sample.dishId)).subscribe(function (tray) {
              _this2.tray = tray;
              sample.dishWeight = _this2.tray.dishWeight;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(a) {
            var _iterator = _createForOfIteratorHelper(this.aArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sample = _step.value;
                console.log(sample);
                this.api.post('/lei/journals/ash/second', sample).subscribe(function (data) {
                  return console.log('Success!', data);
                }, function (error) {
                  return console.log('Error', error);
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.setFocus();
          }
        }, {
          key: "setFocus",
          value: function setFocus() {
            var targetElem = document.getElementById(this.targetInput);
            setTimeout(function waitTargetElem() {
              if (document.body.contains(targetElem)) {
                targetElem.focus();
              } else {
                setTimeout(waitTargetElem, 100);
              }
            }, 100);
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            var index = String(event.selectedIndex);
            this.targetInput = 'input' + index;
            this.setFocus();
          }
        }, {
          key: "swalSamplesRegister",
          value: function swalSamplesRegister() {
            if (this.aArray !== []) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(' užregistruotas!', '', 'success');
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(' Klaida', '', 'error');
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.aArray = [];
          }
        }]);

        return AshTestSecondComponent;
      }();

      AshTestSecondComponent.ɵfac = function AshTestSecondComponent_Factory(t) {
        return new (t || AshTestSecondComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      AshTestSecondComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AshTestSecondComponent,
        selectors: [["app-total-moisture-test"]],
        decls: 21,
        vars: 6,
        consts: [[1, "parent"], [3, "formGroup"], ["formArrayName", "form", 3, "selectionChange"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], ["matInput", "", "id", "input0", "formControlName", "firstCtrl", "required", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperNext", "", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "lastWeight"], [1, "a"], [3, "formGroupName"], ["matInput", "", "placeholder", "Pad\u0117klo numeris", "formControlName", "cont1", "required", "", 3, "id", "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "padekloSvoris"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""], ["mat-button", "", 3, "click"]],
        template: function AshTestSecondComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Peleningumas 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-vertical-stepper", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AshTestSecondComponent_Template_mat_vertical_stepper_selectionChange_4_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AshTestSecondComponent_ng_template_8_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AshTestSecondComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AshTestSecondComponent_Template_button_click_14_listener() {
              return ctx.addItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sekantis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AshTestSecondComponent_mat_step_16_Template, 19, 7, "mat-step", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Paskutinio sv\u0117rimo svoris ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formGroup.controls.form["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weight, "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatVerticalStepper"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]],
        styles: ["@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-stepper-vertical[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n  width: 500px !important;\r\n  float: left;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.parent[_ngcontent-%COMP%] {\r\n  position: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]   .svoris[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.lastWeight[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  \r\n  right: 0;\r\n  left: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  \r\n  min-height: 3em;\r\n  width: 450px;\r\n}\r\n\r\n.weightText[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.padekloSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meginioSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 5px;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.a[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n  font-size: 10px;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n  margin-left: -10px;\r\n  text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaC10ZXN0LXNlY29uZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7QUFDQTs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7QUFFckI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJhc2gtdGVzdC1zZWNvbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuXHJcbmRpdiB7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmVudCB7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW5wdXQgLnN2b3JpcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sYXN0V2VpZ2h0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIGNlbnRlciB0aGUgZWxlbWVudCAqL1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIC8qIGdpdmUgaXQgZGltZW5zaW9ucyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDNlbTtcclxuICB3aWR0aDogNDUwcHg7XHJcbn1cclxuLndlaWdodFRleHQge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5wYWRla2xvU3ZvcmlzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1lZ2luaW9Tdm9yaXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcblxyXG4uYSB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AshTestSecondComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-total-moisture-test',
            templateUrl: './ash-test-second.component.html',
            styleUrls: ['./ash-test-second.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "n7jf":
    /*!*****************************************************************************!*\
      !*** ./src/app/tests/ash/ash-test-second/ash-test-second-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AshTestSecondRoutingModule */

    /***/
    function n7jf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AshTestSecondRoutingModule", function () {
        return AshTestSecondRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ash_test_second_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ash-test-second.component */
      "H9/S");

      var routes = [{
        path: '',
        component: _ash_test_second_component__WEBPACK_IMPORTED_MODULE_2__["AshTestSecondComponent"]
      }];

      var AshTestSecondRoutingModule = function AshTestSecondRoutingModule() {
        _classCallCheck(this, AshTestSecondRoutingModule);
      };

      AshTestSecondRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AshTestSecondRoutingModule
      });
      AshTestSecondRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AshTestSecondRoutingModule_Factory(t) {
          return new (t || AshTestSecondRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AshTestSecondRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AshTestSecondRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tests-ash-ash-test-second-ash-test-second-module-es5.js.map