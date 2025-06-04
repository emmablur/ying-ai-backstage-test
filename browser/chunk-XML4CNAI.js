import {
  SystemSettingsService
} from "./chunk-CXDZ3AG4.js";
import {
  CardModule
} from "./chunk-4LCOVZL5.js";
import {
  Editor,
  EditorModule
} from "./chunk-FJFU2C4C.js";
import {
  InputTextareaModule
} from "./chunk-B4O5ATSX.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  ToastModule,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-7PPGXWRP.js";
import {
  Button,
  ButtonModule,
  MessageService,
  PrimeTemplate,
  RouterModule
} from "./chunk-NWPDUYPI.js";
import "./chunk-GQGTXWV2.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-RPYRJURZ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/settings/components/payment-info/payment-info.component.ts
var _c0 = () => ({ height: "320px" });
function PaymentInfoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u4E0A\u6B21\u66F4\u65B0\u6642\u9593: ", ctx_r0.lastUpdated, " ");
  }
}
function PaymentInfoComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275element(1, "button", 10)(2, "button", 11)(3, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275element(5, "select", 13)(6, "select", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275element(8, "button", 15)(9, "button", 16);
    \u0275\u0275elementStart(10, "select", 17);
    \u0275\u0275element(11, "option", 18)(12, "option", 19)(13, "option", 20)(14, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275element(16, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 9);
    \u0275\u0275element(18, "button", 23);
    \u0275\u0275elementEnd();
  }
}
var PaymentInfoComponent = class _PaymentInfoComponent {
  fb;
  systemSettingsService;
  messageService;
  paymentInfoForm;
  loading = false;
  lastUpdated = "";
  constructor(fb, systemSettingsService, messageService) {
    this.fb = fb;
    this.systemSettingsService = systemSettingsService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.paymentInfoForm = this.fb.group({
      content: [""]
    });
    this.loadPaymentInfo();
  }
  loadPaymentInfo() {
    this.loading = true;
    this.systemSettingsService.apiAdminSystemSettingsTransferPaymentGet().subscribe({
      next: (response) => {
        if (response.data) {
          this.paymentInfoForm.patchValue({
            content: response.data.text
          });
          if (response.data.updatedAt) {
            this.lastUpdated = new Date(response.data.updatedAt).toLocaleString();
          }
        }
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u4ED8\u6B3E\u8CC7\u8A0A"
        });
        this.loading = false;
      }
    });
  }
  savePaymentInfo() {
    if (this.paymentInfoForm.valid) {
      this.loading = true;
      const content = this.paymentInfoForm.get("content")?.value || "";
      this.systemSettingsService.apiAdminSystemSettingsTransferPaymentPut(content).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: "success",
            summary: "\u6210\u529F",
            detail: "\u4ED8\u6B3E\u8CC7\u8A0A\u5DF2\u66F4\u65B0"
          });
          if (response.data && response.data.updatedAt) {
            this.lastUpdated = new Date(response.data.updatedAt).toLocaleString();
          }
          this.loading = false;
        },
        error: (error) => {
          this.messageService.add({
            severity: "error",
            summary: "\u932F\u8AA4",
            detail: "\u66F4\u65B0\u4ED8\u6B3E\u8CC7\u8A0A\u5931\u6557"
          });
          this.loading = false;
        }
      });
    }
  }
  static \u0275fac = function PaymentInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentInfoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SystemSettingsService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentInfoComponent, selectors: [["app-payment-info"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 8, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], ["icon", "pi pi-save", 3, "onClick", "label", "disabled", "loading"], ["class", "text-sm text-500 text-right", 4, "ngIf"], [3, "formGroup"], [1, "field"], ["formControlName", "content"], ["pTemplate", "header"], [1, "text-sm", "text-500", "text-right"], [1, "ql-formats"], ["type", "button", "aria-label", "Bold", 1, "ql-bold"], ["type", "button", "aria-label", "Italic", 1, "ql-italic"], ["type", "button", "aria-label", "Underline", 1, "ql-underline"], [1, "ql-color"], [1, "ql-background"], ["type", "button", "value", "ordered", "aria-label", "Ordered List", 1, "ql-list"], ["type", "button", "value", "bullet", "aria-label", "Unordered List", 1, "ql-list"], [1, "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"], ["type", "button", "aria-label", "Insert Link", 1, "ql-link"], ["type", "button", "aria-label", "Remove Styles", 1, "ql-clean"]], template: function PaymentInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "\u4ED8\u6B3E\u8CC7\u8A0A\u7BA1\u7406");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-button", 2);
      \u0275\u0275listener("onClick", function PaymentInfoComponent_Template_p_button_onClick_4_listener() {
        return ctx.savePaymentInfo();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, PaymentInfoComponent_div_5_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(6, "form", 4)(7, "div", 5)(8, "p-editor", 6);
      \u0275\u0275template(9, PaymentInfoComponent_ng_template_9_Template, 19, 0, "ng-template", 7);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("label", ctx.loading ? "\u5132\u5B58\u4E2D..." : "\u5132\u5B58")("disabled", ctx.loading)("loading", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastUpdated);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.paymentInfoForm);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c0));
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Button, PrimeTemplate, Editor], styles: ["\n\n[_nghost-%COMP%]     .p-editor-container .p-editor-content .ql-editor {\n  min-height: 200px;\n}\n/*# sourceMappingURL=payment-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentInfoComponent, { className: "PaymentInfoComponent", filePath: "src/app/features/settings/components/payment-info/payment-info.component.ts", lineNumber: 12 });
})();

// src/app/features/settings/settings.module.ts
var routes = [
  { path: "payment-info", component: PaymentInfoComponent }
];
var SettingsModule = class _SettingsModule {
  static \u0275fac = function SettingsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    EditorModule,
    CardModule
  ] });
};
export {
  SettingsModule
};
//# sourceMappingURL=chunk-XML4CNAI.js.map
