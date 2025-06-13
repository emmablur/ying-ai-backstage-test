import {
  AdminCommonService,
  AdminOrderService
} from "./chunk-C3WQ4M3N.js";
import "./chunk-DT3GFCNP.js";
import "./chunk-VUC5HP7I.js";
import "./chunk-NL6JKAZG.js";
import "./chunk-PZBKEVDN.js";
import "./chunk-JUXCCURE.js";
import {
  Dropdown,
  PaginatorModule,
  Table,
  TableModule,
  Tag,
  TagModule
} from "./chunk-GVOHAZBK.js";
import {
  Dialog,
  DialogModule
} from "./chunk-AWXCFGOK.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  InputTextarea,
  InputTextareaModule
} from "./chunk-FNEXNUDF.js";
import {
  BadgeModule
} from "./chunk-ZCE4BX7P.js";
import "./chunk-AZVP65F4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ToastModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-5OSS66PJ.js";
import {
  ActivatedRoute,
  ButtonDirective,
  ButtonModule,
  ConfirmationService,
  MessageService,
  PrimeTemplate,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-SO3O3ZSH.js";
import "./chunk-VE2DDJNX.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T5SPLERN.js";
import "./chunk-4MWRP73S.js";

// src/app/features/order/components/order-list/order-list.component.ts
function OrderListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u8A02\u55AE\u7DE8\u865F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u9867\u5BA2\u540D\u7A31");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u4FEE\u6539\u6642\u9593");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u5275\u5EFA\u6642\u9593");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u64CD\u4F5C");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "p-tag", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 6);
    \u0275\u0275listener("click", function OrderListComponent_ng_template_7_Template_button_click_14_listener() {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editOrder(order_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("severity", ctx_r2.getStateSeverity(order_r2.state))("value", order_r2.stateName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, order_r2.updatedAt, "yyyy-MM-dd HH:mm:ss"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, order_r2.createdAt, "yyyy-MM-dd HH:mm:ss"));
  }
}
var OrderListComponent = class _OrderListComponent {
  orderService;
  router;
  messageService;
  orders = [];
  loading = true;
  first = 0;
  rows = 10;
  totalRecords = 0;
  constructor(orderService, router, messageService) {
    this.orderService = orderService;
    this.router = router;
    this.messageService = messageService;
  }
  loadOrders() {
    this.loading = true;
    this.orderService.apiAdminOrderGet().subscribe({
      next: (response) => {
        this.orders = response.data;
        this.totalRecords = response.data.length;
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load orders"
        });
        this.loading = false;
      }
    });
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
    this.loadOrders();
  }
  editOrder(order) {
    this.router.navigate(["/order/edit", order._id]);
  }
  getStateSeverity(state) {
    switch (state) {
      case "pending_payment":
        return "warning";
      case "paid":
        return "success";
      case "shipped":
        return "info";
      case "completed":
        return "success";
      case "cancelled":
        return "danger";
      default:
        return "info";
    }
  }
  static \u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderListComponent)(\u0275\u0275directiveInject(AdminOrderService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 8, vars: 6, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], ["styleClass", "p-datatable-gridlines", 3, "onLazyLoad", "value", "loading", "paginator", "rows", "totalRecords", "lazy"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "severity", "value"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", 3, "click"]], template: function OrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-confirmDialog");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h2");
      \u0275\u0275text(4, "\u8A02\u55AE\u7BA1\u7406");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p-table", 2);
      \u0275\u0275listener("onLazyLoad", function OrderListComponent_Template_p_table_onLazyLoad_5_listener($event) {
        return ctx.onPageChange($event);
      });
      \u0275\u0275template(6, OrderListComponent_ng_template_6_Template, 13, 0, "ng-template", 3)(7, OrderListComponent_ng_template_7_Template, 15, 12, "ng-template", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.orders)("loading", ctx.loading)("paginator", false)("rows", ctx.rows)("totalRecords", ctx.totalRecords)("lazy", true);
    }
  }, dependencies: [Table, PrimeTemplate, ButtonDirective, ConfirmDialog, Tag, DatePipe], styles: ["\n\n/*# sourceMappingURL=order-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src/app/features/order/components/order-list/order-list.component.ts", lineNumber: 13 });
})();

// src/app/shared/constants/shipping-methods.constants.ts
var SHIPPING_METHODS = {
  CONVENIENCE_STORE: "cvs",
  HOME_DELIVERY: "home_delivery"
};
var CVS_TYPES = {
  SEVEN_ELEVEN: "seven_eleven",
  FAMILY_MART: "family_mart"
};
var CVS_LABELS = {
  [CVS_TYPES.SEVEN_ELEVEN]: "7-11",
  [CVS_TYPES.FAMILY_MART]: "\u5168\u5BB6"
};
var cvsOptions = [
  { label: CVS_LABELS[CVS_TYPES.SEVEN_ELEVEN], value: CVS_TYPES.SEVEN_ELEVEN },
  { label: CVS_LABELS[CVS_TYPES.FAMILY_MART], value: CVS_TYPES.FAMILY_MART }
];

// src/app/features/order/components/order-form/order-form.component.ts
var _c0 = () => ({ width: "auto", maxWidth: "90%" });
var _c1 = (a0) => ({ "ng-invalid ng-dirty": a0 });
function OrderFormComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 32);
    \u0275\u0275text(2, "\u904B\u8CBB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.shippingMethodFee);
  }
}
function OrderFormComponent_small_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " \u6536\u4EF6\u4EBA\u59D3\u540D\u70BA\u5FC5\u586B ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_small_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " \u806F\u7D61\u96FB\u8A71\u70BA\u5FC5\u586B ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_div_43_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " \u8D85\u5546\u54C1\u724C\u70BA\u5FC5\u586B ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_div_43_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " \u8D85\u5546\u5E97\u865F\u70BA\u5FC5\u586B ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3");
    \u0275\u0275text(2, "\u8D85\u5546\u53D6\u8CA8\u8CC7\u8A0A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "label", 34);
    \u0275\u0275text(5, "\u8D85\u5546\u54C1\u724C");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "p-dropdown", 35);
    \u0275\u0275template(7, OrderFormComponent_div_43_small_7_Template, 2, 0, "small", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "label", 36);
    \u0275\u0275text(10, "\u5E97\u865F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 37);
    \u0275\u0275template(12, OrderFormComponent_div_43_small_12_Template, 2, 0, "small", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx_r0.cvsOptions)("ngClass", \u0275\u0275pureFunction1(5, _c1, ((tmp_2_0 = ctx_r0.orderForm.get("cvs")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.orderForm.get("cvs")) == null ? null : tmp_2_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.orderForm.get("cvs")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.orderForm.get("cvs")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ((tmp_4_0 = ctx_r0.orderForm.get("cvsShopNo")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.orderForm.get("cvsShopNo")) == null ? null : tmp_4_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.orderForm.get("cvsShopNo")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.orderForm.get("cvsShopNo")) == null ? null : tmp_5_0.touched));
  }
}
function OrderFormComponent_div_44_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " \u7E23\u5E02\u70BA\u5FC5\u586B ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_div_44_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " \u5730\u5340\u70BA\u5FC5\u586B ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_div_44_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, " \u5730\u5740\u70BA\u5FC5\u586B ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3");
    \u0275\u0275text(2, "\u5B85\u914D\u5730\u5740");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "div", 39)(5, "div", 6)(6, "label", 40);
    \u0275\u0275text(7, "\u7E23\u5E02");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 41);
    \u0275\u0275template(9, OrderFormComponent_div_44_small_9_Template, 2, 0, "small", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 39)(11, "div", 6)(12, "label", 42);
    \u0275\u0275text(13, "\u5730\u5340");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 43);
    \u0275\u0275template(15, OrderFormComponent_div_44_small_15_Template, 2, 0, "small", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44)(17, "div", 6)(18, "label", 45);
    \u0275\u0275text(19, "\u5730\u5740");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 46);
    \u0275\u0275template(21, OrderFormComponent_div_44_small_21_Template, 2, 0, "small", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ((tmp_1_0 = ctx_r0.orderForm.get("city")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.orderForm.get("city")) == null ? null : tmp_1_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.orderForm.get("city")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.orderForm.get("city")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c1, ((tmp_3_0 = ctx_r0.orderForm.get("dist")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.orderForm.get("dist")) == null ? null : tmp_3_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.orderForm.get("dist")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.orderForm.get("dist")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ((tmp_5_0 = ctx_r0.orderForm.get("address")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.orderForm.get("address")) == null ? null : tmp_5_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.orderForm.get("address")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.orderForm.get("address")) == null ? null : tmp_6_0.touched));
  }
}
function OrderFormComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 47);
    \u0275\u0275text(2, "\u4ED8\u6B3E\u5099\u8A3B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "label", 49);
    \u0275\u0275text(6, "\u4ED8\u6B3E\u8B49\u660E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "img", 50);
    \u0275\u0275listener("keydown.enter", function OrderFormComponent_Conditional_52_Template_img_keydown_enter_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showImage(ctx_r0.orderForm.value.paymentProofImage));
    })("click", function OrderFormComponent_Conditional_52_Template_img_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showImage(ctx_r0.orderForm.value.paymentProofImage));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r0.orderForm.value.paymentProofImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.orderForm.value.paymentNote);
  }
}
function OrderFormComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "\u7121\u4ED8\u6B3E\u8CC7\u8A0A");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u5546\u54C1\u5716\u7247");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u5546\u54C1\u540D\u7A31");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u898F\u683C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u6578\u91CF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u55AE\u50F9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u5C0F\u8A08");
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r3.imgUrl, \u0275\u0275sanitizeUrl)("alt", item_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.selectedOptionValues);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(11, 7, item_r3.price, "TWD", "symbol-narrow", "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(14, 12, item_r3.price * item_r3.quantity, "TWD", "symbol-narrow", "1.0-0"), " ");
  }
}
function OrderFormComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2, "\u904B\u8CBB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tr")(7, "td", 52);
    \u0275\u0275text(8, "\u7E3D\u8A08");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 53);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(5, 2, ctx_r0.orderForm.value.shippingFee, "TWD", "symbol-narrow", "1.0-0"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(11, 7, ctx_r0.getTotalAmount(), "TWD", "symbol-narrow", "1.0-0"), " ");
  }
}
var OrderFormComponent = class _OrderFormComponent {
  fb;
  orderService;
  route;
  router;
  messageService;
  adminCommonService;
  orderForm;
  loading = false;
  orderId = null;
  isEditMode = false;
  orderItems = [];
  // 圖片預覽用
  displayImageDialog = false;
  selectedImage = "";
  orderStatusOptions = [];
  paymentMethodOptions = [];
  shippingMethodOptions;
  cvsOptions = cvsOptions;
  shippingMethodFee = 0;
  constructor(fb, orderService, route, router, messageService, adminCommonService) {
    this.fb = fb;
    this.orderService = orderService;
    this.route = route;
    this.router = router;
    this.messageService = messageService;
    this.adminCommonService = adminCommonService;
    this.createForm();
    this.adminCommonService.apiAdminCommonOrderStatusGet().subscribe({
      next: (response) => {
        this.orderStatusOptions = response.data.map((status) => ({
          label: status.orderStatusName,
          value: status.orderStatusCode
        }));
      }
    });
    this.adminCommonService.apiAdminCommonPaymentMethodGet().subscribe({
      next: (response) => {
        this.paymentMethodOptions = response.data.map((method) => ({
          label: method.paymentMethodName,
          value: method.paymentMethodCode
        }));
      }
    });
    this.adminCommonService.apiAdminCommonShippingMethodGet().subscribe({
      next: (response) => {
        this.shippingMethodOptions = response.data.map((method) => ({
          label: method.shippingMethodName,
          value: method.shippingMethodCode,
          fee: method.shippingMethodFee
        }));
      }
    });
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get("id");
    this.isEditMode = !!this.orderId;
    if (this.orderId) {
      this.loadOrder();
    }
    this.orderForm.get("shippingMethod")?.valueChanges.subscribe((value) => {
      this.updateValidation(value);
    });
  }
  createForm() {
    this.orderForm = this.fb.group({
      _id: [null],
      orderNumber: [null],
      createdAt: [null],
      updatedAt: [null],
      userId: [null],
      userName: [null],
      state: ["", Validators.required],
      shippingMethod: ["", Validators.required],
      shippingName: ["", Validators.required],
      shippingPhone: ["", Validators.required],
      shippingFee: [0],
      paymentNote: [{ value: "", disabled: true }],
      paymentProofImage: [null],
      // 超商取貨相關字段
      cvs: [""],
      cvsShopNo: [""],
      // 宅配相關字段
      city: [""],
      dist: [""],
      address: [""],
      paymentMethod: ["", Validators.required],
      note: [""],
      internalNote: [""]
    });
  }
  // 根據運送方式更新驗證規則
  updateValidation(shippingMethod) {
    const cityControl = this.orderForm.get("city");
    const distControl = this.orderForm.get("dist");
    const addressControl = this.orderForm.get("address");
    const cvsControl = this.orderForm.get("cvs");
    const cvsShopNoControl = this.orderForm.get("cvsShopNo");
    cityControl?.clearValidators();
    distControl?.clearValidators();
    addressControl?.clearValidators();
    cvsControl?.clearValidators();
    cvsShopNoControl?.clearValidators();
    if (shippingMethod === SHIPPING_METHODS.HOME_DELIVERY) {
      cityControl?.setValidators([Validators.required]);
      distControl?.setValidators([Validators.required]);
      addressControl?.setValidators([Validators.required]);
    } else if (shippingMethod === SHIPPING_METHODS.CONVENIENCE_STORE) {
      cvsControl?.setValidators([Validators.required]);
      cvsShopNoControl?.setValidators([Validators.required]);
    }
    cityControl?.updateValueAndValidity();
    distControl?.updateValueAndValidity();
    addressControl?.updateValueAndValidity();
    cvsControl?.updateValueAndValidity();
    cvsShopNoControl?.updateValueAndValidity();
  }
  loadOrder() {
    this.loading = true;
    if (this.orderId) {
      this.orderService.apiAdminOrderOrderIdGet(this.orderId).subscribe({
        next: (response) => {
          if (response.data) {
            this.orderForm.patchValue(response.data);
            this.orderItems = response.data.items || [];
            this.updateValidation(response.data.shippingMethod);
            this.getShippingFee();
          }
          this.loading = false;
        },
        error: (error) => {
          this.messageService.add({
            severity: "error",
            summary: "\u932F\u8AA4",
            detail: "\u7121\u6CD5\u8F09\u5165\u8A02\u55AE\u8CC7\u6599"
          });
          this.loading = false;
        }
      });
    }
  }
  getTotalAmount() {
    return this.orderItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0) + this.shippingMethodFee;
  }
  onSubmit() {
    if (this.orderForm.valid) {
      this.loading = true;
      const orderId = this.orderForm.get("_id")?.value;
      const shippingMethod = this.orderForm.get("shippingMethod")?.value;
      const orderData = {
        state: this.orderForm.get("state")?.value,
        shippingMethod,
        shippingName: this.orderForm.get("shippingName")?.value,
        shippingPhone: this.orderForm.get("shippingPhone")?.value,
        shippingFee: this.orderForm.get("shippingFee")?.value,
        paymentMethod: this.orderForm.get("paymentMethod")?.value,
        note: this.orderForm.get("note")?.value,
        internalNote: this.orderForm.get("internalNote")?.value
      };
      if (shippingMethod === SHIPPING_METHODS.HOME_DELIVERY) {
        orderData.city = this.orderForm.get("city")?.value;
        orderData.dist = this.orderForm.get("dist")?.value;
        orderData.address = this.orderForm.get("address")?.value;
      } else if (shippingMethod === SHIPPING_METHODS.CONVENIENCE_STORE) {
        orderData.cvs = this.orderForm.get("cvs")?.value;
        orderData.cvsShopNo = this.orderForm.get("cvsShopNo")?.value;
      }
      this.orderService.apiAdminOrderOrderIdPut(orderId, orderData).subscribe({
        next: (response) => {
          this.loading = false;
          this.messageService.add({
            severity: "success",
            summary: "\u6210\u529F",
            detail: "\u8A02\u55AE\u5DF2\u6210\u529F\u66F4\u65B0"
          });
          this.router.navigate(["/order"]);
        },
        error: (error) => {
          this.loading = false;
          this.messageService.add({
            severity: "error",
            summary: "\u932F\u8AA4",
            detail: `\u66F4\u65B0\u8A02\u55AE\u5931\u6557: ${error.message || "\u672A\u77E5\u932F\u8AA4"}`
          });
          console.error("\u66F4\u65B0\u8A02\u55AE\u5931\u6557:", error);
        }
      });
    }
  }
  // 判斷是否為宅配模式
  isHomeDelivery() {
    return this.orderForm.get("shippingMethod")?.value === SHIPPING_METHODS.HOME_DELIVERY;
  }
  // 判斷是否為超商取貨模式
  isConvenienceStore() {
    return this.orderForm.get("shippingMethod")?.value === SHIPPING_METHODS.CONVENIENCE_STORE;
  }
  getShippingFee() {
    console.log("Shipping Method Options:", this.shippingMethodOptions);
    if (!this.shippingMethodOptions) {
      return;
    }
    const shippingMethod = this.orderForm.get("shippingMethod")?.value;
    const shippingMethodData = this.shippingMethodOptions.find((method) => method.value === shippingMethod);
    this.shippingMethodFee = shippingMethodData ? shippingMethodData.fee : 0;
  }
  // 顯示大圖
  showImage(imageUrl) {
    if (imageUrl) {
      this.selectedImage = imageUrl;
      this.displayImageDialog = true;
    }
  }
  static \u0275fac = function OrderFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminOrderService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AdminCommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderFormComponent, selectors: [["app-order-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 72, vars: 40, consts: [[1, "card"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "showHeader", "dismissableMask"], [1, "flex", "justify-content-center"], [2, "max-width", "100%", "max-height", "80vh", 3, "src", "alt"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], [1, "p-fluid", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "state"], ["id", "state", "formControlName", "state", "optionLabel", "label", "optionValue", "value", "placeholder", "\u8ACB\u9078\u64C7\u8A02\u55AE\u72C0\u614B", 3, "options"], ["for", "shippingMethod"], ["id", "shippingMethod", "formControlName", "shippingMethod", "optionLabel", "label", "optionValue", "value", "placeholder", "\u8ACB\u9078\u64C7\u904B\u9001\u65B9\u5F0F", 3, "onChange", "options"], ["for", "shippingName"], ["id", "shippingName", "type", "text", "pInputText", "", "formControlName", "shippingName", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "shippingPhone"], ["id", "shippingPhone", "type", "text", "pInputText", "", "formControlName", "shippingPhone", 3, "ngClass"], ["class", "formgroup-container", 4, "ngIf"], ["for", "paymentMethod"], ["id", "paymentMethod", "formControlName", "paymentMethod", "optionLabel", "label", "optionValue", "value", "placeholder", "\u8ACB\u9078\u64C7\u4ED8\u6B3E\u65B9\u5F0F", 3, "options"], [1, "formgroup-container"], ["for", "note"], ["id", "note", "pInputTextarea", "", "formControlName", "note", 3, "rows"], ["for", "internalNote"], ["id", "internalNote", "pInputTextarea", "", "formControlName", "internalNote", 3, "rows"], [1, "flex", "justify-content-end", "gap-2", "mt-4"], ["pButton", "", "type", "button", "label", "\u53D6\u6D88", "routerLink", "/order", 1, "p-button-secondary"], ["pButton", "", "type", "submit", "label", "\u5132\u5B58", 3, "loading", "disabled"], [1, "mt-4"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["for", "shippingFee"], [1, "p-error"], ["for", "cvs"], ["id", "cvs", "formControlName", "cvs", "optionLabel", "label", "optionValue", "value", "placeholder", "\u8ACB\u9078\u64C7\u8D85\u5546", 3, "options", "ngClass"], ["for", "cvsShopNo"], ["id", "cvsShopNo", "type", "text", "pInputText", "", "formControlName", "cvsShopNo", 3, "ngClass"], [1, "grid", "formgrid"], [1, "col-12", "md:col-4"], ["for", "city"], ["id", "city", "type", "text", "pInputText", "", "formControlName", "city", 3, "ngClass"], ["for", "dist"], ["id", "dist", "type", "text", "pInputText", "", "formControlName", "dist", 3, "ngClass"], [1, "col-12"], ["for", "address"], ["id", "address", "type", "text", "pInputText", "", "formControlName", "address", 3, "ngClass"], ["for", "paymentNote"], ["id", "address", "type", "text", "pInputText", "", "formControlName", "paymentNote"], ["for", "paymentProofImage"], ["tabindex", "0", 1, "w-4rem", "h-4rem", "object-contain", "cursor-pointer", 3, "keydown.enter", "click", "src", "alt"], [1, "w-4rem", "h-4rem", "object-contain", 3, "src", "alt"], ["colspan", "5", 1, "text-right", "font-bold"], [1, "font-bold"]], template: function OrderFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-dialog", 1);
      \u0275\u0275twoWayListener("visibleChange", function OrderFormComponent_Template_p_dialog_visibleChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.displayImageDialog, $event) || (ctx.displayImageDialog = $event);
        return $event;
      });
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4)(5, "h2");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 5);
      \u0275\u0275listener("ngSubmit", function OrderFormComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 6)(9, "div");
      \u0275\u0275text(10, "\u8A02\u55AE\u7DE8\u865F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div");
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 6)(14, "div");
      \u0275\u0275text(15, "\u8A02\u55AE\u65E5\u671F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 6)(20, "div");
      \u0275\u0275text(21, "\u9867\u5BA2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 6)(25, "label", 7);
      \u0275\u0275text(26, "\u8A02\u55AE\u72C0\u614B");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "p-dropdown", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 6)(29, "label", 9);
      \u0275\u0275text(30, "\u904B\u9001\u65B9\u5F0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p-dropdown", 10);
      \u0275\u0275listener("onChange", function OrderFormComponent_Template_p_dropdown_onChange_31_listener() {
        return ctx.getShippingFee();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, OrderFormComponent_Conditional_32_Template, 5, 1, "div", 6);
      \u0275\u0275elementStart(33, "div", 6)(34, "label", 11);
      \u0275\u0275text(35, "\u6536\u4EF6\u4EBA\u59D3\u540D");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 12);
      \u0275\u0275template(37, OrderFormComponent_small_37_Template, 2, 0, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 6)(39, "label", 14);
      \u0275\u0275text(40, "\u806F\u7D61\u96FB\u8A71");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 15);
      \u0275\u0275template(42, OrderFormComponent_small_42_Template, 2, 0, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, OrderFormComponent_div_43_Template, 13, 9, "div", 16)(44, OrderFormComponent_div_44_Template, 22, 12, "div", 16);
      \u0275\u0275elementStart(45, "div", 6)(46, "label", 17);
      \u0275\u0275text(47, "\u4ED8\u6B3E\u65B9\u5F0F");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "p-dropdown", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 19)(50, "h3");
      \u0275\u0275text(51, "\u4ED8\u6B3E\u8CC7\u8A0A");
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, OrderFormComponent_Conditional_52_Template, 9, 2)(53, OrderFormComponent_Conditional_53_Template, 2, 0, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 6)(55, "label", 20);
      \u0275\u0275text(56, "\u9867\u5BA2\u5099\u8A3B");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "textarea", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 6)(59, "label", 22);
      \u0275\u0275text(60, "\u5F8C\u53F0\u5099\u8A3B");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "textarea", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 24);
      \u0275\u0275element(63, "button", 25)(64, "button", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 27)(66, "h3");
      \u0275\u0275text(67, "\u8A02\u55AE\u5546\u54C1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p-table", 28);
      \u0275\u0275template(69, OrderFormComponent_ng_template_69_Template, 13, 0, "ng-template", 29)(70, OrderFormComponent_ng_template_70_Template, 15, 17, "ng-template", 30)(71, OrderFormComponent_ng_template_71_Template, 12, 12, "ng-template", 31);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_17_0;
      let tmp_18_0;
      let tmp_19_0;
      let tmp_20_0;
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.displayImageDialog);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false)("showHeader", true)("dismissableMask", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.selectedImage, \u0275\u0275sanitizeUrl)("alt", "\u4ED8\u6B3E\u8B49\u660E");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "\u7DE8\u8F2F" : "\u65B0\u589E", "\u8A02\u55AE");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.orderForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.orderForm.value.orderNumber);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 32, ctx.orderForm.value.createdAt, "yyyy-MM-dd HH:mm:ss"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.orderForm.value.userName, "\uFF08", ctx.orderForm.value.userId, "\uFF09");
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.orderStatusOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.shippingMethodOptions);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.shippingMethodOptions && ctx.orderForm.value.shippingMethod ? 32 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c1, ((tmp_17_0 = ctx.orderForm.get("shippingName")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.orderForm.get("shippingName")) == null ? null : tmp_17_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_18_0 = ctx.orderForm.get("shippingName")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.orderForm.get("shippingName")) == null ? null : tmp_18_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(38, _c1, ((tmp_19_0 = ctx.orderForm.get("shippingPhone")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx.orderForm.get("shippingPhone")) == null ? null : tmp_19_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_20_0 = ctx.orderForm.get("shippingPhone")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.orderForm.get("shippingPhone")) == null ? null : tmp_20_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isConvenienceStore());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isHomeDelivery());
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.paymentMethodOptions);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.orderForm.value.paymentNote || ctx.orderForm.value.paymentProofImage ? 52 : 53);
      \u0275\u0275advance(5);
      \u0275\u0275property("rows", 3);
      \u0275\u0275advance(4);
      \u0275\u0275property("rows", 3);
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.orderForm.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.orderItems);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, Table, PrimeTemplate, ButtonDirective, InputText, InputTextarea, Dropdown, Dialog, CurrencyPipe, DatePipe], styles: ["\n\n.formgroup-container[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  padding: 1.5rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n}\n.formgroup-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: #495057;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.p-error[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.w-4rem[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.h-4rem[_ngcontent-%COMP%] {\n  height: 4rem;\n}\n.object-contain[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n/*# sourceMappingURL=order-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderFormComponent, { className: "OrderFormComponent", filePath: "src/app/features/order/components/order-form/order-form.component.ts", lineNumber: 21 });
})();

// src/app/features/order/order.module.ts
var routes = [
  { path: "", component: OrderListComponent },
  { path: "edit/:id", component: OrderFormComponent }
];
var OrderModule = class _OrderModule {
  static \u0275fac = function OrderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OrderModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    ConfirmDialogModule,
    BadgeModule,
    PaginatorModule,
    TagModule,
    DialogModule
  ] });
};
export {
  OrderModule
};
//# sourceMappingURL=chunk-VMITTUI5.js.map
