import {
  CategoryService
} from "./chunk-SCDWBYXY.js";
import "./chunk-DT3GFCNP.js";
import "./chunk-VUC5HP7I.js";
import "./chunk-NL6JKAZG.js";
import {
  FileUpload,
  FileUploadModule,
  ProgressBar
} from "./chunk-QC265HZ6.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-LXWYWL6P.js";
import {
  AdminProductService
} from "./chunk-PZBKEVDN.js";
import {
  Editor,
  EditorModule
} from "./chunk-UOJMF7HP.js";
import "./chunk-JUXCCURE.js";
import {
  PaginatorModule,
  Table,
  TableModule,
  Tag,
  TagModule
} from "./chunk-GVOHAZBK.js";
import {
  InputSwitch,
  InputSwitchModule
} from "./chunk-VNPTJRTB.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  InputNumber,
  InputNumberModule,
  InputTextareaModule
} from "./chunk-FNEXNUDF.js";
import {
  Badge,
  BadgeModule
} from "./chunk-ZCE4BX7P.js";
import "./chunk-AZVP65F4.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Toast,
  ToastModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-5OSS66PJ.js";
import {
  ActivatedRoute,
  Button,
  ButtonDirective,
  ButtonModule,
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
  PrimeTemplate,
  Router,
  RouterLink,
  RouterModule,
  SharedModule
} from "./chunk-SO3O3ZSH.js";
import "./chunk-VE2DDJNX.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  filter,
  pairwise,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T5SPLERN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/products/components/product-list/product-list.component.ts
var _c0 = () => [5, 10, 20];
var _c1 = (a0) => ["edit", a0];
function ProductListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u5716\u7247");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u5546\u54C1\u540D\u7A31");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u5206\u985E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u50F9\u683C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u5EAB\u5B58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u4E0A\u67B6\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u64CD\u4F5C");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_ng_template_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 8);
  }
}
function ProductListComponent_ng_template_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 9);
  }
}
function ProductListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ProductListComponent_ng_template_8_Conditional_13_Template, 1, 0, "p-tag", 8)(14, ProductListComponent_ng_template_8_Conditional_14_Template, 1, 0, "p-tag", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "div", 10);
    \u0275\u0275element(17, "button", 11);
    \u0275\u0275elementStart(18, "button", 12);
    \u0275\u0275listener("click", function ProductListComponent_ng_template_8_Template_button_click_18_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(product_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r2.imageUrl || "assets/img/no-img.png", \u0275\u0275sanitizeUrl)("alt", product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.categoryFormatter(product_r2.categories));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, product_r2.price, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.stock);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(product_r2.isPublished ? 13 : 14);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, product_r2._id));
  }
}
function ProductListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2, "\u5C1A\u7121\u5546\u54C1.");
    \u0275\u0275elementEnd()();
  }
}
var ProductListComponent = class _ProductListComponent {
  adminProductService;
  confirmationService;
  messageService;
  products = [];
  loading = true;
  selectedProduct = null;
  categoryFormatter = (category) => {
    if (!category || !Array.isArray(category)) {
      return "";
    }
    return category.map((v) => v.name).join(", ");
  };
  constructor(adminProductService, confirmationService, messageService) {
    this.adminProductService = adminProductService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.loading = true;
    this.adminProductService.apiAdminProductGet().subscribe({
      next: (data) => {
        data.data.forEach((item) => {
          const f = item.images.find((img) => img.isMain) || item.images[0];
          item.imageUrl = f ? f.url : null;
        });
        this.products = data.data;
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load products"
        });
        this.loading = false;
      }
    });
  }
  confirmDelete(product) {
    this.confirmationService.confirm({
      message: `\u8981\u522A\u9664 ${product.name} \u55CE?`,
      header: "\u78BA\u8A8D\u522A\u9664",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteProduct(product);
      }
    });
  }
  deleteProduct(product) {
    if (product._id) {
      this.adminProductService.apiAdminProductIdDelete(product._id).subscribe({
        next: (data) => {
          this.messageService.add({
            severity: "success",
            summary: "\u6210\u529F",
            detail: `\u5546\u54C1 ${data.data.name} \u5DF2\u522A\u9664`
          });
          this.loadProducts();
        },
        error: () => {
          this.messageService.add({
            severity: "error",
            summary: "\u932F\u8AA4",
            detail: "\u4F3A\u670D\u5668\u932F\u8AA4"
          });
        }
      });
    }
  }
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(AdminProductService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService, ToastModule])], decls: 10, vars: 6, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], ["pButton", "", "label", "\u65B0\u589E\u5546\u54C1", "icon", "pi pi-plus", "routerLink", "new", 1, "p-button-success"], ["styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "w-4rem", "shadow-2", "rounded", 2, "max-width", "100px", 3, "src", "alt"], ["severity", "success", "value", "\u4E0A\u67B6\u4E2D"], ["severity", "secondary", "value", "\u672A\u4E0A\u67B6"], [1, "flex", "gap-2"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", 3, "routerLink"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], ["colspan", "7", 1, "text-center", "p-4"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 1)(3, "h2");
      \u0275\u0275text(4, "\u5546\u54C1\u7BA1\u7406");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275template(7, ProductListComponent_ng_template_7_Template, 15, 0, "ng-template", 4)(8, ProductListComponent_ng_template_8_Template, 19, 13, "ng-template", 5)(9, ProductListComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.products)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c0));
    }
  }, dependencies: [RouterLink, Table, PrimeTemplate, ButtonDirective, ConfirmDialog, Tag, DecimalPipe], styles: ["\n\np-table[_ngcontent-%COMP%]  button.p-ripple.p-element.p-paginator-page.p-paginator-element.p-link.p-highlight {\n  color: white;\n}\n/*# sourceMappingURL=product-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/features/products/components/product-list/product-list.component.ts", lineNumber: 13 });
})();

// src/app/shared/validator/unique-options.validator.ts
function uniqueOptionsValidator() {
  return (control) => {
    if (control instanceof FormArray) {
      const values = control.controls.map((c) => c.value);
      const hasDuplicates = values.some((value, index) => values.indexOf(value) !== index);
      return hasDuplicates ? { duplicateOptions: true } : null;
    }
    return null;
  };
}

// src/app/features/products/components/product-form/product-form.component.ts
var _c02 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c12 = () => ({ height: "320px" });
var _c2 = (a0) => ({ "exceeded-progress-bar": a0 });
function ProductFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 24);
    \u0275\u0275text(2, "\u4E0A\u67B6\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-inputSwitch", 25);
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_small_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, " Name is required and must be at least 3 characters long ");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 27);
    \u0275\u0275element(2, "p-checkbox", 28);
    \u0275\u0275elementStart(3, "label", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("inputId", "categories-", $index_r2, "");
    \u0275\u0275property("value", item_r1._id);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "categories-", $index_r2, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.name);
  }
}
function ProductFormComponent_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, " Description is required ");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_24_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ProductFormComponent_Conditional_24_For_11_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const \u0275$index_82_r4 = \u0275\u0275nextContext().$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.removeProductOption(\u0275$index_82_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_24_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ProductFormComponent_Conditional_24_For_11_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.addProductOptionFC());
    });
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_24_For_11_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ProductFormComponent_Conditional_24_For_11_For_8_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const \u0275$index_99_r8 = \u0275\u0275nextContext().$index;
      const \u0275$index_82_r4 = \u0275\u0275nextContext().$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.removeOption(\u0275$index_82_r4, \u0275$index_99_r8));
    });
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_24_For_11_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ProductFormComponent_Conditional_24_For_11_For_8_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const \u0275$index_82_r4 = \u0275\u0275nextContext(2).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.addProductOptionOptionFC(\u0275$index_82_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_24_For_11_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "input", 46);
    \u0275\u0275elementStart(2, "div", 47);
    \u0275\u0275template(3, ProductFormComponent_Conditional_24_For_11_For_8_Conditional_3_Template, 1, 0, "button", 48)(4, ProductFormComponent_Conditional_24_For_11_For_8_Conditional_4_Template, 1, 0, "button", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_99_r8 = ctx.$index;
    const $count_r10 = ctx.$count;
    const \u0275$count_99_r11 = ctx.$count;
    \u0275\u0275propertyInterpolate("formGroupName", \u0275$index_99_r8);
    \u0275\u0275advance(3);
    \u0275\u0275conditional($count_r10 > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_99_r8 === \u0275$count_99_r11 - 1 ? 4 : -1);
  }
}
function ProductFormComponent_Conditional_24_For_11_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, " \u9078\u9805\u4E0D\u53EF\u4EE5\u6709\u91CD\u8907\u7684\u9805\u76EE ");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_24_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37)(2, "div", 38);
    \u0275\u0275element(3, "input", 39);
    \u0275\u0275template(4, ProductFormComponent_Conditional_24_For_11_Conditional_4_Template, 1, 0, "button", 40)(5, ProductFormComponent_Conditional_24_For_11_Conditional_5_Template, 1, 0, "button", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 42);
    \u0275\u0275repeaterCreate(7, ProductFormComponent_Conditional_24_For_11_For_8_Template, 5, 3, "div", 43, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(9, ProductFormComponent_Conditional_24_For_11_small_9_Template, 2, 0, "small", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const \u0275$index_82_r4 = ctx.$index;
    const $count_r12 = ctx.$count;
    const \u0275$count_82_r13 = ctx.$count;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("formGroupName", \u0275$index_82_r4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional($count_r12 > 1 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_82_r4 === \u0275$count_82_r13 - 1 && ctx_r4.productOptionsGroup.length < 2 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.getOptions(\u0275$index_82_r4).controls);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_16_0 = ctx_r4.getOptions(\u0275$index_82_r4)) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["duplicateOptions"]);
  }
}
function ProductFormComponent_Conditional_24_Conditional_12_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53)(4, "div", 54);
    \u0275\u0275element(5, "p-inputNumber", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275element(7, "p-inputNumber", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const item_r14 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.productVariantInfo((tmp_13_0 = item_r14.get("tier_index")) == null ? null : tmp_13_0.value), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r4.fgGetPrice(item_r14))("min", 0)("showButtons", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r4.fgGetstock(item_r14))("min", 0)("showButtons", true);
  }
}
function ProductFormComponent_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 30)(1, "thead", 31)(2, "tr", 32)(3, "th", 33)(4, "div", 34);
    \u0275\u0275text(5, "\u898F\u683C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th", 33)(7, "div", 34);
    \u0275\u0275text(8, "\u8CC7\u8A0A");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "tbody", 52);
    \u0275\u0275repeaterCreate(10, ProductFormComponent_Conditional_24_Conditional_12_For_11_Template, 8, 7, "tr", 32, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r4.productVariantsGroup);
  }
}
function ProductFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 30)(1, "thead", 31)(2, "tr", 32)(3, "th", 33)(4, "div", 34);
    \u0275\u0275text(5, "\u898F\u683C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th", 33)(7, "div", 34);
    \u0275\u0275text(8, "\u9078\u9805");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "tbody", 35);
    \u0275\u0275repeaterCreate(10, ProductFormComponent_Conditional_24_For_11_Template, 10, 4, "tr", 36, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ProductFormComponent_Conditional_24_Conditional_12_Template, 12, 0, "table", 30);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r4.productOptionsGroup);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.productVariantsGroup.length > 0 ? 12 : -1);
  }
}
function ProductFormComponent_Conditional_25_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, " \u50F9\u683C\u9700\u5927\u65BC 0 ");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_25_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, " \u5EAB\u5B58\u9700\u5927\u65BC 0 ");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 57);
    \u0275\u0275text(2, "\u50F9\u683C");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-inputNumber", 58);
    \u0275\u0275template(4, ProductFormComponent_Conditional_25_small_4_Template, 2, 0, "small", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "label", 59);
    \u0275\u0275text(7, "\u5EAB\u5B58");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "p-inputNumber", 60);
    \u0275\u0275template(9, ProductFormComponent_Conditional_25_small_9_Template, 2, 0, "small", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_6_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0)("showButtons", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r4.productForm.get("price")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r4.productForm.get("price")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("showButtons", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r4.productForm.get("stock")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r4.productForm.get("stock")) == null ? null : tmp_6_0.touched));
  }
}
function ProductFormComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "p-button", 63);
    \u0275\u0275listener("onClick", function ProductFormComponent_ng_template_31_Template_p_button_onClick_2_listener($event) {
      const chooseCallback_r16 = \u0275\u0275restoreView(_r15).chooseCallback;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.choose($event, chooseCallback_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 64);
    \u0275\u0275listener("onClick", function ProductFormComponent_ng_template_31_Template_p_button_onClick_3_listener() {
      const uploadCallback_r17 = \u0275\u0275restoreView(_r15).uploadCallback;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.uploadEvent(uploadCallback_r17));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 65);
    \u0275\u0275listener("onClick", function ProductFormComponent_ng_template_31_Template_p_button_onClick_4_listener() {
      const clearCallback_r18 = \u0275\u0275restoreView(_r15).clearCallback;
      return \u0275\u0275resetView(clearCallback_r18());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-progressBar", 66)(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const files_r19 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true)("disabled", !files_r19 || files_r19.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true)("disabled", !files_r19 || files_r19.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r4.totalSizePercent)("showValue", false)("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx_r4.totalSizePercent > 100));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.totalSize, "B / 1Mb");
  }
}
function ProductFormComponent_ng_template_32_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div");
    \u0275\u0275element(2, "img", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-badge", 74);
    \u0275\u0275elementStart(8, "p-button", 75);
    \u0275\u0275listener("onClick", function ProductFormComponent_ng_template_32_div_0_div_4_Template_p_button_onClick_8_listener($event) {
      const ctx_r20 = \u0275\u0275restoreView(_r20);
      const file_r22 = ctx_r20.$implicit;
      const i_r23 = ctx_r20.index;
      const removeFileCallback_r24 = \u0275\u0275nextContext(2).removeFileCallback;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onRemoveTemplatingFile($event, file_r22, removeFileCallback_r24, i_r23));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r22 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", file_r22.name)("src", file_r22.objectURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r22.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatSize(file_r22.size));
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true)("rounded", true);
  }
}
function ProductFormComponent_ng_template_32_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h5");
    \u0275\u0275text(2, "\u5F85\u4E0A\u50B3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275template(4, ProductFormComponent_ng_template_32_div_0_div_4_Template, 9, 6, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const files_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", files_r25);
  }
}
function ProductFormComponent_ng_template_32_div_1_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 79);
    \u0275\u0275listener("onClick", function ProductFormComponent_ng_template_32_div_1_For_5_Conditional_9_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r28);
      const file_r29 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(file_r29.isMain = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true)("rounded", true);
  }
}
function ProductFormComponent_ng_template_32_div_1_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 80);
    \u0275\u0275listener("onClick", function ProductFormComponent_ng_template_32_div_1_For_5_Conditional_10_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r30);
      const file_r29 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(file_r29.isMain = true);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true)("rounded", true);
  }
}
function ProductFormComponent_ng_template_32_div_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div");
    \u0275\u0275element(2, "img", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-badge", 76);
    \u0275\u0275elementStart(8, "p-button", 75);
    \u0275\u0275listener("onClick", function ProductFormComponent_ng_template_32_div_1_For_5_Template_p_button_onClick_8_listener() {
      const \u0275$index_241_r27 = \u0275\u0275restoreView(_r26).$index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.removeUploadedFileCallback(\u0275$index_241_r27));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductFormComponent_ng_template_32_div_1_For_5_Conditional_9_Template, 1, 2, "p-button", 77)(10, ProductFormComponent_ng_template_32_div_1_For_5_Conditional_10_Template, 1, 2, "p-button", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r29 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", file_r29.originalName)("src", file_r29.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r29.originalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatSize(file_r29.size));
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r29.isMain ? 9 : 10);
  }
}
function ProductFormComponent_ng_template_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h5");
    \u0275\u0275text(2, "\u5DF2\u4E0A\u50B3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275repeaterCreate(4, ProductFormComponent_ng_template_32_div_1_For_5_Template, 11, 7, "div", 71, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r4.uploadedFiles);
  }
}
function ProductFormComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductFormComponent_ng_template_32_div_0_Template, 5, 1, "div", 68)(1, ProductFormComponent_ng_template_32_div_1_Template, 6, 0, "div", 68);
  }
  if (rf & 2) {
    const files_r25 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (files_r25 == null ? null : files_r25.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.uploadedFiles.length > 0);
  }
}
function ProductFormComponent_ng_template_33_Template(rf, ctx) {
}
function ProductFormComponent_ng_template_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275elementStart(2, "p", 83);
    \u0275\u0275text(3, "\u62D6\u66F3\u5230\u6B64\u8655\u4E0A\u50B3\u6A94\u6848");
    \u0275\u0275elementEnd()();
  }
}
function ProductFormComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductFormComponent_ng_template_34_Conditional_0_Template, 4, 0, "div", 81);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r4.uploadedFiles.length === 0 ? 0 : -1);
  }
}
var ProductFormComponent = class _ProductFormComponent {
  fb;
  route;
  router;
  adminProductService;
  messageService;
  config;
  categoryService;
  productForm;
  isEditMode = false;
  productId = null;
  loading = false;
  categories = [];
  get productOptions() {
    return this.productForm.get("productOptions");
  }
  get productOptionsGroup() {
    return this.productOptions.controls;
  }
  get productVariants() {
    return this.productForm.get("productVariants");
  }
  get productVariantsGroup() {
    return this.productVariants.controls;
  }
  get useProductVariant() {
    return this.productForm.get("useProductVariant");
  }
  fgGetPrice(fg) {
    return fg.get("price");
  }
  fgGetstock(fg) {
    return fg.get("stock");
  }
  fgGetOption(fg) {
    return fg.get("option");
  }
  /** 選取的上傳檔案 */
  files = [];
  totalSize = 0;
  totalSizePercent = 0;
  /** 上傳完畢檔案 */
  uploadedFiles = [];
  constructor(fb, route, router, adminProductService, messageService, config, categoryService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.adminProductService = adminProductService;
    this.messageService = messageService;
    this.config = config;
    this.categoryService = categoryService;
    this.productForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      description: [""],
      price: [null, [Validators.min(0), Validators.required]],
      stock: [null, [Validators.min(0), Validators.required]],
      images: [[]],
      categories: [[]],
      productOptions: this.fb.array([]),
      productVariants: this.fb.array([]),
      useProductVariant: [false],
      isPublished: [false]
    });
  }
  ngOnInit() {
    this.categoryService.apiAdminCategoryGet().subscribe({
      next: (categories) => {
        this.categories = categories.data;
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load categories"
        });
      }
    });
    this.productId = this.route.snapshot.params["id"];
    if (this.productId) {
      this.isEditMode = true;
      this.loadData(this.productId);
    } else {
      this.togglePriceAndStockValidators(false);
      this.listenFormValueChanges();
    }
  }
  listenFormValueChanges() {
    this.productForm.get("productOptions")?.valueChanges.pipe(
      // 以 null 作為初始值
      startWith(this.productOptions.value),
      // 將當前值與前一個值組合成一個數組
      pairwise(),
      // 過濾掉初始化的情況
      filter(([prev, curr]) => prev !== null),
      // 只有當結構發生變化時才繼續執行
      filter(([prev, curr]) => this.hasStructuralChanges(prev, curr))
    ).subscribe(([prev, curr]) => {
      this.updateProductVariants();
    });
    this.productForm.get("useProductVariant")?.valueChanges.subscribe((show) => {
      this.togglePriceAndStockValidators(show);
    });
  }
  togglePriceAndStockValidators(show) {
    if (!show) {
      this.productForm.get("price")?.enable();
      this.productForm.get("stock")?.enable();
      this.productForm.get("productOptions")?.disable();
      this.productForm.get("productVariants")?.disable();
    } else {
      this.productForm.get("price")?.disable();
      this.productForm.get("stock")?.disable();
      this.productForm.get("productOptions")?.enable();
      this.productForm.get("productVariants")?.enable();
      if (this.productOptions.length === 0) {
        this.addProductOptionFC();
      }
    }
    this.productForm.get("price")?.updateValueAndValidity();
    this.productForm.get("stock")?.updateValueAndValidity();
  }
  loadData(id) {
    this.loading = true;
    this.adminProductService.apiAdminProductIdGet(`${id}`).subscribe({
      next: (product) => {
        this.productForm.patchValue(__spreadProps(__spreadValues({}, product.data), {
          categories: product.data.categories.map((category) => category._id)
        }));
        this.initializeProductOptions(product.data.productOptions);
        this.updateProductVariants();
        this.togglePriceAndStockValidators(product.data.useProductVariant || false);
        this.productVariants.patchValue(product.data.productVariants);
        this.uploadedFiles = product.data.images;
        this.loading = false;
        this.listenFormValueChanges();
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load product"
        });
        this.loading = false;
      }
    });
  }
  /**
   * 比較 productOptions 結構是否有變化
   */
  hasStructuralChanges(prev, curr) {
    if (!prev || !curr) {
      return true;
    }
    if (prev.length !== curr.length) {
      return true;
    }
    for (let i = 0; i < prev.length; i++) {
      if (!prev[i] || !curr[i]) {
        return true;
      }
      if (prev[i].options.length !== curr[i].options.length) {
        return true;
      }
    }
    return false;
  }
  initializeProductOptions(v) {
    v.forEach((productOption) => {
      this.addProductOptionFC(productOption);
    });
  }
  addProductOptionFC(productOption) {
    if (!productOption) {
      productOption = {
        _id: "",
        name: "",
        options: [{ _id: "", value: "" }]
      };
    }
    const optionGroup = this.fb.group({
      _id: productOption?._id,
      name: [productOption?.name, Validators.required],
      options: this.fb.array(productOption.options.map((option) => this.fb.group({
        _id: [option._id],
        value: [option.value, Validators.required]
      })), uniqueOptionsValidator())
    });
    this.productOptions.push(optionGroup, { emitEvent: false });
  }
  removeProductOption(index) {
    this.productOptions.removeAt(index);
  }
  initializeProductVariants() {
  }
  /** 檢查productOptions每個option都有值、無重複項目 */
  canUpdateProductVariants() {
    const productOptions = this.productOptions.controls;
    for (let i = 0; i < productOptions.length; i++) {
      const options = productOptions[i].get("options");
      if (options.length === 0) {
        return false;
      }
      for (let j = 0; j < options.length; j++) {
        if (!options.at(j).value) {
          return false;
        }
      }
    }
    const uniqueOptions = /* @__PURE__ */ new Set();
    for (let i = 0; i < productOptions.length; i++) {
      const options = productOptions[i].get("options");
      for (let j = 0; j < options.length; j++) {
        if (uniqueOptions.has(options.at(j).value)) {
          return false;
        }
        uniqueOptions.add(options.at(j).value);
      }
    }
    return true;
  }
  /** 更新產品變體控制項 */
  updateProductVariants() {
    if (!this.canUpdateProductVariants()) {
      return;
    }
    const productOptions = this.productOptions.value;
    this.productVariants.clear();
    switch (productOptions.length) {
      case 1:
        productOptions[0].options.forEach((option, index) => {
          this.addProductVariantFC([index]);
        });
        break;
      case 2:
        productOptions[0].options.forEach((option, index) => {
          productOptions[1].options.forEach((option2, index2) => {
            this.addProductVariantFC([index, index2]);
          });
        });
        break;
    }
  }
  addProductVariantFC(tier_index) {
    const variantGroup = this.fb.group({
      _id: [null],
      tier_index: [tier_index],
      price: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]]
    });
    this.productVariants.push(variantGroup);
  }
  productVariantInfo(tier_index) {
    return tier_index.map((v, index) => {
      return this.productOptions.value[index].options[v].value;
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      this.loading = true;
      const productData = this.productForm.getRawValue();
      if (!productData.useProductVariant) {
        productData.productOptions = [];
        productData.productVariants = [];
      }
      productData.images = this.uploadedFiles;
      const request = this.isEditMode && this.productId ? this.adminProductService.apiAdminProductIdPut(`${this.productId}`, "", productData) : this.adminProductService.apiAdminProductPost("", productData);
      request.subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: `Product ${this.isEditMode ? "updated" : "created"} successfully`
          });
          this.router.navigate(["/products"]);
        },
        error: (error) => {
          if (error.error && error.error.message) {
            console.error("Backend error message:", error.error.message);
          }
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: `Failed to ${this.isEditMode ? "update" : "create"} product`
          });
          this.loading = false;
        }
      });
    } else {
      Object.keys(this.productForm.controls).forEach((key) => {
        const control = this.productForm.get(key);
        if (control && control.invalid) {
          console.log(`${key} is invalid:`, control.errors);
          console.log(`${key} value:`, control.value);
        }
      });
      if (this.productOptions.invalid) {
        console.log("ProductOptions errors:", this.productOptions.errors);
        this.productOptions.controls.forEach((control, index) => {
          if (control.invalid) {
            console.log(`ProductOption ${index} errors:`, control.errors);
          }
        });
      }
      if (this.productVariants.invalid) {
        console.log("ProductVariants errors:", this.productVariants.errors);
        this.productVariants.controls.forEach((control, index) => {
          if (control.invalid) {
            console.log(`ProductVariant ${index} errors:`, control.errors);
          }
        });
      }
    }
  }
  // productOptions
  getOptions(variantIndex) {
    return this.productOptions.at(variantIndex).get("options");
  }
  addProductOptionOptionFC(variantIndex) {
    this.getOptions(variantIndex).push(this.fb.group({
      _id: [null],
      value: ["", Validators.required]
    }), { emitEvent: false });
  }
  removeOption(variantIndex, optionIndex) {
    this.getOptions(variantIndex).removeAt(optionIndex);
  }
  // ./productOptions
  // 圖片相關
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.translation.fileSizeTypes;
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
    return `${formattedSize} ${sizes[i]}`;
  }
  choose(event, callback) {
    callback();
  }
  onRemoveTemplatingFile(event, file, removeFileCallback, index) {
    removeFileCallback(event, index);
    this.totalSize -= parseInt(this.formatSize(file.size));
    this.totalSizePercent = this.totalSize / 10;
  }
  onClearTemplatingUpload(clear) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }
  onTemplatedUpload(event) {
    const httpResponse = event.originalEvent;
    const oriRequest = httpResponse.body;
    oriRequest.data.forEach((file) => {
      this.uploadedFiles.push(file);
    });
    this.messageService.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
      life: 3e3
    });
  }
  onSelectedFiles(event) {
    this.files = event.currentFiles;
    this.files.forEach((file) => {
      this.totalSize += parseInt(this.formatSize(file.size));
    });
    this.totalSizePercent = this.totalSize / 10;
  }
  uploadEvent(callback) {
    callback();
  }
  removeUploadedFileCallback(i) {
    this.uploadedFiles.splice(i, 1);
  }
  static \u0275fac = function ProductFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(PrimeNGConfig), \u0275\u0275directiveInject(CategoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 38, vars: 16, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], [1, "p-fluid", 3, "ngSubmit", "formGroup"], [1, "field", "flex", "justify-end"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "categories"], [1, "grid", "formgrid"], [1, "col-12", "md:col-4"], ["for", "description"], ["formControlName", "description"], [1, "field", "flex"], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "label"], ["for", "imageUrl"], ["name", "files", "url", "http://localhost:3000/api/admin/images/upload", "accept", "image/*", "maxFileSize", "1000000", 3, "onUpload", "onSelect", "multiple"], ["pTemplate", "header"], ["pTemplate", "content"], ["pTemplate", "file"], ["pTemplate", "empty"], [1, "flex", "justify-content-end", "gap-2", "mt-4"], ["pButton", "", "type", "button", "label", "\u53D6\u6D88", "routerLink", "/products", 1, "p-button-secondary"], ["pButton", "", "type", "submit", "label", "\u5132\u5B58", 3, "loading", "disabled"], ["for", "isPublished", 1, "mr-4"], ["formControlName", "isPublished"], [1, "p-error"], [1, "field-checkbox"], ["name", "categories", "formControlName", "categories", 3, "value", "inputId"], [3, "for"], ["role", "table", 1, "p-datatable", "p-component", 2, "width", "100%"], [1, "p-datatable-thead"], ["role", "row"], ["role", "columnheader"], [1, "p-column-title"], ["formArrayName", "productOptions", "role", "rowgroup", 1, "p-element", "p-datatable-tbody"], ["role", "row", 3, "formGroupName"], ["role", "cell", 1, "flex", "align-top", "border-none"], [1, "flex", "w-full"], ["type", "text", "pInputText", "", "placeholder", "\u8ACB\u8F38\u5165\u898F\u683C\u540D\u7A31, ex. \u984F\u8272", "formControlName", "name"], ["type", "button", "pButton", "", "icon", "pi pi-trash", 1, "p-button-danger", "ml-2"], ["type", "button", "pButton", "", "icon", "pi pi-plus", 1, "p-button-secondary", "ml-2"], ["formArrayName", "options", "role", "cell", 1, "w-1/2", "border-none"], [1, "flex", "align-items-center", "mb-2", 3, "formGroupName"], ["type", "button", "pButton", "", "icon", "pi pi-trash", 1, "p-button-danger", "ml-2", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-plus", 1, "p-button-secondary", "ml-2", 3, "click"], ["type", "text", "pInputText", "", "placeholder", "\u8ACB\u8F38\u5165\u9078\u9805, ex. \u7D05\u8272", "formControlName", "value"], [1, "flex", "w-20", "grow-0", "shrink-0"], ["type", "button", "pButton", "", "icon", "pi pi-trash", 1, "p-button-danger", "ml-2", "basis-2/4", "grow-0", "shrink-0"], ["type", "button", "pButton", "", "icon", "pi pi-plus", 1, "p-button-secondary", "ml-2", "basis-2/4", "grow-0", "shrink-0"], ["type", "button", "pButton", "", "icon", "pi pi-trash", 1, "p-button-danger", "ml-2", "basis-2/4", "grow-0", "shrink-0", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-plus", 1, "p-button-secondary", "ml-2", "basis-2/4", "grow-0", "shrink-0", 3, "click"], ["formArrayName", "productVariants", "role", "rowgroup", 1, "p-element", "p-datatable-tbody"], ["role", "cell", 1, "w-1/2", "border-none"], [1, "flex", "align-items-center", "mb-2"], ["placeholder", "\u8ACB\u8F38\u5165\u50F9\u683C", "buttonLayout", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-secondary", "incrementButtonClass", "p-button-secondary", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 3, "formControl", "min", "showButtons"], ["placeholder", "\u8ACB\u8F38\u5165\u5EAB\u5B58", "buttonLayout", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-secondary", "incrementButtonClass", "p-button-secondary", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 3, "formControl", "min", "showButtons"], ["for", "price"], ["id", "price", "formControlName", "price", "buttonLayout", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-secondary", "incrementButtonClass", "p-button-secondary", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 3, "min", "showButtons"], ["for", "stock"], ["id", "stock", "formControlName", "stock", "buttonLayout", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-secondary", "incrementButtonClass", "p-button-secondary", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 3, "min", "showButtons"], [1, "flex", "flex-wrap", "justify-content-between", "align-items-center", "flex-1", "gap-2"], [1, "flex", "gap-2"], ["icon", "pi pi-images", 3, "onClick", "rounded", "outlined"], ["icon", "pi pi-cloud-upload", "severity", "success", 3, "onClick", "rounded", "outlined", "disabled"], ["icon", "pi pi-times", "severity", "danger", 3, "onClick", "rounded", "outlined", "disabled"], ["styleClass", "md:w-20rem h-1rem w-full md:ml-auto", 3, "value", "showValue", "ngClass"], [1, "white-space-nowrap"], [4, "ngIf"], [1, "flex", "flex-wrap", "p-0", "sm:p-5", "gap-5"], ["class", "card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3", 4, "ngFor", "ngForOf"], [1, "card", "m-0", "px-6", "flex", "flex-column", "border-1", "surface-border", "align-items-center", "gap-3"], ["role", "presentation", 1, "w-10rem", "h-5rem", "object-contain", 3, "alt", "src"], [1, "font-semibold"], ["value", "Pending", "severity", "warning"], ["icon", "pi pi-times", "severity", "danger", 3, "onClick", "outlined", "rounded"], ["value", "Completed", "severity", "success", 1, "mt-3"], ["icon", "pi pi-star-fill", "severity", "warning", 3, "outlined", "rounded"], ["icon", "pi pi-star", "severity", "warning", 3, "outlined", "rounded"], ["icon", "pi pi-star-fill", "severity", "warning", 3, "onClick", "outlined", "rounded"], ["icon", "pi pi-star", "severity", "warning", 3, "onClick", "outlined", "rounded"], [1, "flex", "align-items-center", "justify-content-center", "flex-column"], [1, "pi", "pi-cloud-upload", "border-2", "border-circle", "p-5", "text-8xl", "text-400", "border-400"], [1, "mt-4", "mb-0"]], template: function ProductFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(5, ProductFormComponent_Conditional_5_Template, 4, 0, "div", 3);
      \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
      \u0275\u0275text(8, "\u5546\u54C1\u540D\u7A31");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275template(10, ProductFormComponent_small_10_Template, 2, 0, "small", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4)(12, "label", 8);
      \u0275\u0275text(13, "\u5206\u985E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275repeaterCreate(15, ProductFormComponent_For_16_Template, 5, 6, "div", 10, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 4)(18, "label", 11);
      \u0275\u0275text(19, "\u63CF\u8FF0");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "p-editor", 12);
      \u0275\u0275template(21, ProductFormComponent_small_21_Template, 2, 0, "small", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "button", 14);
      \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_23_listener() {
        return ctx.useProductVariant.setValue(!ctx.useProductVariant.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, ProductFormComponent_Conditional_24_Template, 13, 1)(25, ProductFormComponent_Conditional_25_Template, 10, 6);
      \u0275\u0275elementStart(26, "div", 4)(27, "label", 15);
      \u0275\u0275text(28, "\u5716\u7247");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "p-toast");
      \u0275\u0275elementStart(30, "p-fileUpload", 16);
      \u0275\u0275listener("onUpload", function ProductFormComponent_Template_p_fileUpload_onUpload_30_listener($event) {
        return ctx.onTemplatedUpload($event);
      })("onSelect", function ProductFormComponent_Template_p_fileUpload_onSelect_30_listener($event) {
        return ctx.onSelectedFiles($event);
      });
      \u0275\u0275template(31, ProductFormComponent_ng_template_31_Template, 8, 14, "ng-template", 17)(32, ProductFormComponent_ng_template_32_Template, 2, 2, "ng-template", 18)(33, ProductFormComponent_ng_template_33_Template, 0, 0, "ng-template", 19)(34, ProductFormComponent_ng_template_34_Template, 1, 1, "ng-template", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 21);
      \u0275\u0275element(36, "button", 22)(37, "button", 23);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_7_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "\u7DE8\u8F2F" : "\u65B0\u589E", "\u5546\u54C1");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.productForm);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditMode ? 5 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c02, ((tmp_3_0 = ctx.productForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.productForm.get("name")) == null ? null : tmp_3_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.productForm.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.productForm.get("name")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c12));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.productForm.get("description")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.productForm.get("description")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("label", (ctx.useProductVariant.value ? "\u95DC\u9589" : "\u958B\u555F") + "\u5546\u54C1\u898F\u683C");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.useProductVariant.value ? 24 : 25);
      \u0275\u0275advance(6);
      \u0275\u0275property("multiple", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.productForm.invalid);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, RouterLink, PrimeTemplate, ButtonDirective, Button, InputText, InputNumber, Toast, Checkbox, Editor, FileUpload, ProgressBar, Badge, InputSwitch], styles: ["\n\np-fileupload[_ngcontent-%COMP%]  p-button > button {\n  width: 3rem;\n}\n/*# sourceMappingURL=product-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src/app/features/products/components/product-form/product-form.component.ts", lineNumber: 29 });
})();

// node_modules/primeng/fesm2022/primeng-inputgroup.mjs
var _c03 = ["*"];
var InputGroup = class _InputGroup {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  static \u0275fac = function InputGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroup,
    selectors: [["p-inputGroup"]],
    hostAttrs: [1, "p-element", "p-inputgroup"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c03,
    decls: 2,
    vars: 3,
    consts: [[1, "p-inputgroup", 3, "ngClass", "ngStyle"]],
    template: function InputGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.styleClass)("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "inputgroup");
      }
    },
    dependencies: [NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroup, [{
    type: Component,
    args: [{
      selector: "p-inputGroup",
      template: `
        <div class="p-inputgroup" [attr.data-pc-name]="'inputgroup'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
      host: {
        class: "p-element p-inputgroup"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var InputGroupModule = class _InputGroupModule {
  static \u0275fac = function InputGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputGroup, SharedModule],
      declarations: [InputGroup]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c04 = ["*"];
var InputGroupAddon = class _InputGroupAddon {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  static \u0275fac = function InputGroupAddon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupAddon)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroupAddon,
    selectors: [["p-inputGroupAddon"]],
    hostAttrs: [1, "p-element", "p-inputgroup-addon"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c04,
    decls: 2,
    vars: 3,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function InputGroupAddon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.styleClass)("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "inputgroupaddon");
      }
    },
    dependencies: [NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputGroupAddon",
      template: `
        <div [attr.data-pc-name]="'inputgroupaddon'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
      host: {
        class: "p-element p-inputgroup-addon"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var InputGroupAddonModule = class _InputGroupAddonModule {
  static \u0275fac = function InputGroupAddonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupAddonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupAddonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputGroupAddon, SharedModule],
      declarations: [InputGroupAddon]
    }]
  }], null, null);
})();

// src/app/features/products/products.module.ts
var routes = [
  { path: "", component: ProductListComponent },
  { path: "new", component: ProductFormComponent },
  { path: "edit/:id", component: ProductFormComponent }
];
var ProductsModule = class _ProductsModule {
  static \u0275fac = function ProductsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProductsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule,
    EditorModule,
    InputGroupModule,
    InputGroupAddonModule,
    FileUploadModule,
    BadgeModule,
    PaginatorModule,
    InputSwitchModule,
    TagModule
  ] });
};
export {
  ProductsModule
};
//# sourceMappingURL=chunk-DUOVQRPD.js.map
