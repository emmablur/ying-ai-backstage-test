import {
  Checkbox,
  CheckboxModule
} from "./chunk-JRSVI6GG.js";
import {
  AdminProductService,
  CategoryService
} from "./chunk-AWH5DSHR.js";
import "./chunk-THLVWF5B.js";
import "./chunk-JHFWSBOM.js";
import "./chunk-CJLG4Z27.js";
import "./chunk-CXDZ3AG4.js";
import {
  Editor,
  EditorModule
} from "./chunk-FJFU2C4C.js";
import "./chunk-PQVWAI7P.js";
import {
  InputSwitch,
  InputSwitchModule
} from "./chunk-ALVUVNPT.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  InputNumber,
  InputNumberModule,
  PaginatorModule,
  PlusIcon,
  Table,
  TableModule,
  Tag,
  TagModule
} from "./chunk-7QK2XLDP.js";
import {
  Badge,
  BadgeModule
} from "./chunk-Q5MVH63Y.js";
import "./chunk-EJPJGXYU.js";
import {
  InputTextareaModule
} from "./chunk-B4O5ATSX.js";
import {
  CheckIcon,
  DefaultValueAccessor,
  ExclamationTriangleIcon,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  InfoCircleIcon,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  TimesCircleIcon,
  TimesIcon,
  Toast,
  ToastModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7PPGXWRP.js";
import {
  ActivatedRoute,
  BaseIcon,
  Button,
  ButtonDirective,
  ButtonModule,
  ConfirmationService,
  DomHandler,
  DomSanitizer,
  HttpClient,
  HttpEventType,
  MessageService,
  PrimeNGConfig,
  PrimeTemplate,
  Ripple,
  RippleModule,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  TranslationKeys,
  UniqueComponentId
} from "./chunk-NWPDUYPI.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-GQGTXWV2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DOCUMENT,
  DecimalPipe,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  filter,
  isPlatformBrowser,
  numberAttribute,
  pairwise,
  setClassMetadata,
  startWith,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
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
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction8,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-RPYRJURZ.js";
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

// node_modules/primeng/fesm2022/primeng-icons-upload.mjs
var UploadIcon = class _UploadIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UploadIcon_BaseFactory;
    return function UploadIcon_Factory(__ngFactoryType__) {
      return (\u0275UploadIcon_BaseFactory || (\u0275UploadIcon_BaseFactory = \u0275\u0275getInheritedFactory(_UploadIcon)))(__ngFactoryType__ || _UploadIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UploadIcon,
    selectors: [["UploadIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function UploadIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadIcon, [{
    type: Component,
    args: [{
      selector: "UploadIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-messages.mjs
var _c02 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c12 = (a0) => ({
  value: "visible",
  params: a0
});
function Messages_ng_container_1_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("p-message-icon pi " + msg_r1.icon);
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_InfoCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_TimesCircleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_ExclamationTriangleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275elementContainerStart(1);
    \u0275\u0275template(2, Messages_ng_container_1_div_1_span_3_CheckIcon_2_Template, 1, 1, "CheckIcon", 11)(3, Messages_ng_container_1_div_1_span_3_InfoCircleIcon_3_Template, 1, 1, "InfoCircleIcon", 11)(4, Messages_ng_container_1_div_1_span_3_TimesCircleIcon_4_Template, 1, 1, "TimesCircleIcon", 11)(5, Messages_ng_container_1_div_1_span_3_ExclamationTriangleIcon_5_Template, 1, 1, "ExclamationTriangleIcon", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", msg_r1.severity === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r1.severity === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r1.severity === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r1.severity === "warn");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", msg_r1.summary, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("data-pc-section", "summary");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", msg_r1.detail, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("data-pc-section", "detail");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Messages_ng_container_1_div_1_ng_container_4_span_1_Template, 1, 2, "span", 12)(2, Messages_ng_container_1_div_1_ng_container_4_span_2_Template, 1, 2, "span", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r1.summary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("data-pc-section", "summary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r1.summary);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("data-pc-section", "detail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Messages_ng_container_1_div_1_ng_template_5_span_0_Template, 2, 2, "span", 16)(1, Messages_ng_container_1_div_1_ng_template_5_span_1_Template, 2, 2, "span", 17);
  }
  if (rf & 2) {
    const msg_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", msg_r1.summary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function Messages_ng_container_1_div_1_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const i_r3 = \u0275\u0275nextContext().index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeMessage(i_r3));
    });
    \u0275\u0275element(1, "TimesIcon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", ctx_r3.closeAriaLabel)("data-pc-section", "closebutton");
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", "p-message-close-icon");
    \u0275\u0275attribute("data-pc-section", "closeicon");
  }
}
function Messages_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, Messages_ng_container_1_div_1_span_2_Template, 1, 3, "span", 7)(3, Messages_ng_container_1_div_1_span_3_Template, 6, 4, "span", 8)(4, Messages_ng_container_1_div_1_ng_container_4_Template, 3, 2, "ng-container", 3)(5, Messages_ng_container_1_div_1_ng_template_5_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, Messages_ng_container_1_div_1_button_7_Template, 2, 4, "button", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const msg_r1 = ctx.$implicit;
    const escapeOut_r5 = \u0275\u0275reference(6);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("p-message p-message-" + msg_r1.severity);
    \u0275\u0275property("@messageAnimation", \u0275\u0275pureFunction1(13, _c12, \u0275\u0275pureFunction2(10, _c02, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "wrapper")("id", msg_r1.id || null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !msg_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.escape)("ngIfElse", escapeOut_r5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.closable && ((tmp_14_0 = msg_r1.closable) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : true));
  }
}
function Messages_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Messages_ng_container_1_div_1_Template, 8, 15, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.messages);
  }
}
function Messages_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Messages_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 6);
    \u0275\u0275template(2, Messages_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "p-message p-message-" + ctx_r3.severity);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.contentTemplate);
  }
}
var Messages = class _Messages {
  messageService;
  el;
  cd;
  config;
  /**
   * An array of messages to display.
   * @group Props
   */
  set value(messages) {
    this.messages = messages;
    this.startMessageLifes(this.messages);
  }
  /**
   * Defines if message box can be closed by the click icon.
   * @group Props
   */
  closable = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether displaying services messages are enabled.
   * @group Props
   */
  enableService = true;
  /**
   * Id to match the key of the message to enable scoping in service based messaging.
   * @group Props
   */
  key;
  /**
   * Whether displaying messages would be escaped or not.
   * @group Props
   */
  escape = true;
  /**
   * Severity level of the message.
   * @group Props
   */
  severity;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "200ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * This function is executed when the value changes.
   * @param {Message[]} value - messages value.
   * @group Emits
   */
  valueChange = new EventEmitter();
  /**
   * This function is executed when a message is closed.
   * @param {Message} value - Closed message.
   * @group Emits
   */
  onClose = new EventEmitter();
  templates;
  messages;
  messageSubscription;
  clearSubscription;
  timerSubscriptions = [];
  contentTemplate;
  constructor(messageService, el, cd, config) {
    this.messageService = messageService;
    this.el = el;
    this.cd = cd;
    this.config = config;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
    if (this.messageService && this.enableService && !this.contentTemplate) {
      this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
        if (messages) {
          if (!Array.isArray(messages)) {
            messages = [messages];
          }
          const filteredMessages = messages.filter((m) => this.key === m.key);
          this.messages = this.messages ? [...this.messages, ...filteredMessages] : [...filteredMessages];
          this.startMessageLifes(filteredMessages);
          this.cd.markForCheck();
        }
      });
      this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
        if (key) {
          if (this.key === key) {
            this.messages = null;
          }
        } else {
          this.messages = null;
        }
        this.cd.markForCheck();
      });
    }
  }
  hasMessages() {
    let parentEl = this.el.nativeElement.parentElement;
    if (parentEl && parentEl.offsetParent) {
      return this.contentTemplate != null || this.messages && this.messages.length > 0;
    }
    return false;
  }
  clear() {
    this.messages = [];
    this.valueChange.emit(this.messages);
  }
  removeMessage(i) {
    const removedMessage = this.messages[i];
    this.messages = this.messages?.filter((msg, index) => index !== i);
    removedMessage && this.onClose.emit(removedMessage);
    this.valueChange.emit(this.messages);
  }
  get icon() {
    const severity = this.severity || (this.hasMessages() ? this.messages[0].severity : null);
    if (this.hasMessages()) {
      switch (severity) {
        case "success":
          return "pi-check";
        case "info":
          return "pi-info-circle";
        case "error":
          return "pi-times";
        case "warn":
          return "pi-exclamation-triangle";
        default:
          return "pi-info-circle";
      }
    }
    return null;
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.timerSubscriptions?.forEach((subscription) => subscription.unsubscribe());
  }
  startMessageLifes(messages) {
    messages?.forEach((message) => message.life && this.startMessageLife(message));
  }
  startMessageLife(message) {
    const timerSubsctiption = timer(message.life).subscribe(() => {
      this.messages = this.messages?.filter((msgEl) => msgEl !== message);
      this.timerSubscriptions = this.timerSubscriptions?.filter((timerEl) => timerEl !== timerSubsctiption);
      this.valueChange.emit(this.messages);
      this.cd.markForCheck();
    });
    this.timerSubscriptions.push(timerSubsctiption);
  }
  static \u0275fac = function Messages_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Messages)(\u0275\u0275directiveInject(MessageService, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Messages,
    selectors: [["p-messages"]],
    contentQueries: function Messages_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      closable: [2, "closable", "closable", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      enableService: [2, "enableService", "enableService", booleanAttribute],
      key: "key",
      escape: [2, "escape", "escape", booleanAttribute],
      severity: "severity",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      valueChange: "valueChange",
      onClose: "onClose"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 4,
    vars: 8,
    consts: [["staticMessage", ""], ["escapeOut", ""], ["role", "alert", 1, "p-messages", "p-component", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["role", "alert"], [1, "p-message-wrapper"], [3, "class", 4, "ngIf"], ["class", "p-message-icon", 4, "ngIf"], ["class", "p-message-close p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-message-icon"], [4, "ngIf"], ["class", "p-message-summary", 3, "innerHTML", 4, "ngIf"], ["class", "p-message-detail", 3, "innerHTML", 4, "ngIf"], [1, "p-message-summary", 3, "innerHTML"], [1, "p-message-detail", 3, "innerHTML"], ["class", "p-message-summary", 4, "ngIf"], ["class", "p-message-detail", 4, "ngIf"], [1, "p-message-summary"], [1, "p-message-detail"], ["type", "button", "pRipple", "", 1, "p-message-close", "p-link", 3, "click"], [3, "styleClass"], ["role", "alert", 3, "ngClass"], [4, "ngTemplateOutlet"]],
    template: function Messages_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, Messages_ng_container_1_Template, 2, 1, "ng-container", 3)(2, Messages_ng_template_2_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const staticMessage_r6 = \u0275\u0275reference(3);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style);
        \u0275\u0275attribute("aria-atomic", true)("aria-live", "assertive")("data-pc-name", "message");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate)("ngIfElse", staticMessage_r6);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
    styles: ["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("messageAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "translateY(-25%)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Component,
    args: [{
      selector: "p-messages",
      template: `
        <div class="p-messages p-component" role="alert" [ngStyle]="style" [class]="styleClass" [attr.aria-atomic]="true" [attr.aria-live]="'assertive'" [attr.data-pc-name]="'message'">
            <ng-container *ngIf="!contentTemplate; else staticMessage">
                <div
                    *ngFor="let msg of messages; let i = index"
                    [class]="'p-message p-message-' + msg.severity"
                    role="alert"
                    [@messageAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                >
                    <div class="p-message-wrapper" [attr.data-pc-section]="'wrapper'" [attr.id]="msg.id || null">
                        <span *ngIf="msg.icon" [class]="'p-message-icon pi ' + msg.icon" [attr.data-pc-section]="'icon'"> </span>
                        <span class="p-message-icon" *ngIf="!msg.icon">
                            <ng-container>
                                <CheckIcon *ngIf="msg.severity === 'success'" [attr.data-pc-section]="'icon'" />
                                <InfoCircleIcon *ngIf="msg.severity === 'info'" [attr.data-pc-section]="'icon'" />
                                <TimesCircleIcon *ngIf="msg.severity === 'error'" [attr.data-pc-section]="'icon'" />
                                <ExclamationTriangleIcon *ngIf="msg.severity === 'warn'" [attr.data-pc-section]="'icon'" />
                            </ng-container>
                        </span>
                        <ng-container *ngIf="!escape; else escapeOut">
                            <span *ngIf="msg.summary" class="p-message-summary" [innerHTML]="msg.summary" [attr.data-pc-section]="'summary'"></span>
                            <span *ngIf="msg.detail" class="p-message-detail" [innerHTML]="msg.detail" [attr.data-pc-section]="'detail'"></span>
                        </ng-container>
                        <ng-template #escapeOut>
                            <span *ngIf="msg.summary" class="p-message-summary" [attr.data-pc-section]="'summary'">{{ msg.summary }}</span>
                            <span *ngIf="msg.detail" class="p-message-detail" [attr.data-pc-section]="'detail'">{{ msg.detail }}</span>
                        </ng-template>
                        <button class="p-message-close p-link" (click)="removeMessage(i)" *ngIf="closable && (msg.closable ?? true)" type="button" pRipple [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="'closebutton'">
                            <TimesIcon [styleClass]="'p-message-close-icon'" [attr.data-pc-section]="'closeicon'" />
                        </button>
                    </div>
                </div>
            </ng-container>
            <ng-template #staticMessage>
                <div [ngClass]="'p-message p-message-' + severity" role="alert">
                    <div class="p-message-wrapper">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </div>
                </div>
            </ng-template>
        </div>
    `,
      animations: [trigger("messageAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "translateY(-25%)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    value: [{
      type: Input
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    enableService: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    key: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    severity: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MessagesModule = class _MessagesModule {
  static \u0275fac = function MessagesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MessagesModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon, SharedModule],
      exports: [Messages, SharedModule],
      declarations: [Messages]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c03 = (a0, a1) => ({
  "p-progressbar p-component": true,
  "p-progressbar-determinate": a0,
  "p-progressbar-indeterminate": a1
});
var _c13 = (a0, a1) => ({
  width: a0,
  display: "flex",
  background: a1
});
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = (a0) => ({
  display: a0
});
var _c4 = (a0) => ({
  background: a0
});
function ProgressBar_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c3, ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none"));
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.value, "", ctx_r0.unit, " ");
  }
}
function ProgressBar_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275template(2, ProgressBar_div_1_div_2_Template, 2, 6, "div", 5)(3, ProgressBar_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(5, _c13, ctx_r0.value + "%", ctx_r0.color));
    \u0275\u0275attribute("data-pc-section", "value");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c2, ctx_r0.value));
  }
}
function ProgressBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "container");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c4, ctx_r0.color));
    \u0275\u0275attribute("data-pc-section", "value");
  }
}
var ProgressBar = class _ProgressBar {
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  templates;
  contentTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
      }
    });
  }
  static \u0275fac = function ProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      style: "style",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 3,
    vars: 14,
    consts: [["role", "progressbar", 3, "ngStyle", "ngClass"], ["class", "p-progressbar-value p-progressbar-value-animate", 3, "ngStyle", 4, "ngIf"], ["class", "p-progressbar-indeterminate-container", 4, "ngIf"], [1, "p-progressbar-value", "p-progressbar-value-animate", 3, "ngStyle"], [1, "p-progressbar-label"], [3, "ngStyle", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngStyle"], [1, "p-progressbar-indeterminate-container"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProgressBar_div_1_Template, 4, 10, "div", 1)(2, ProgressBar_div_2_Template, 2, 5, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction2(11, _c03, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "determinate");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ['@layer primeng{.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}}@-webkit-keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar",
      template: `
        <div
            role="progressbar"
            [class]="styleClass"
            [ngStyle]="style"
            [attr.aria-valuemin]="0"
            [attr.aria-valuenow]="value"
            [attr.aria-valuemax]="100"
            [attr.data-pc-name]="'progressbar'"
            [attr.data-pc-section]="'root'"
            [ngClass]="{ 'p-progressbar p-component': true, 'p-progressbar-determinate': mode === 'determinate', 'p-progressbar-indeterminate': mode === 'indeterminate' }"
        >
            <div
                *ngIf="mode === 'determinate'"
                class="p-progressbar-value p-progressbar-value-animate"
                [ngStyle]="{
                    width: value + '%',
                    display: 'flex',
                    background: color
                }"
                [attr.data-pc-section]="'value'"
            >
                <div class="p-progressbar-label">
                    <div
                        *ngIf="showValue && !contentTemplate"
                        [ngStyle]="{
                            display: value != null && value !== 0 ? 'flex' : 'none'
                        }"
                        [attr.data-pc-section]="'label'"
                    >
                        {{ value }}{{ unit }}
                    </div>
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: value }"></ng-container>
                </div>
            </div>
            <div *ngIf="mode === 'indeterminate'" class="p-progressbar-indeterminate-container" [attr.data-pc-section]="'container'">
                <div
                    class="p-progressbar-value p-progressbar-value-animate"
                    [ngStyle]="{
                        background: color
                    }"
                    [attr.data-pc-section]="'value'"
                ></div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}}@-webkit-keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n']
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static \u0275fac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressBarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ProgressBar],
      declarations: [ProgressBar]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fileupload.mjs
var _c04 = ["advancedfileinput"];
var _c14 = ["basicfileinput"];
var _c22 = ["content"];
var _c32 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  uploadCallback: a4
});
var _c42 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  removeUploadedFileCallback: a4,
  removeFileCallback: a5,
  progress: a6,
  messages: a7
});
var _c5 = (a0, a1) => ({
  "p-focus": a0,
  "p-disabled": a1
});
var _c6 = (a0, a1, a2, a3) => ({
  "p-button p-component p-fileupload-choose": true,
  "p-button-icon-only": a0,
  "p-fileupload-choose-selected": a1,
  "p-focus": a2,
  "p-disabled": a3
});
function FileUpload_div_0_ng_container_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.chooseIcon);
    \u0275\u0275property("ngClass", "p-button-icon p-button-icon-left");
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon", 24);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-button-icon p-button-icon-left");
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_ng_container_5_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_ng_container_5_PlusIcon_1_Template, 1, 3, "PlusIcon", 22)(2, FileUpload_div_0_ng_container_4_ng_container_5_span_2_Template, 2, 3, "span", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.uploadIcon);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "UploadIcon", 24);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 22)(2, FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_span_2_Template, 2, 2, "span", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("onClick", function FileUpload_div_0_ng_container_4_p_button_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.upload());
    });
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_8_span_1_Template, 1, 2, "span", 27)(2, FileUpload_div_0_ng_container_4_p_button_8_ng_container_2_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.uploadButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.isFileLimitExceeded())("styleClass", ctx_r1.uploadStyleClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 24);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-button-icon p-button-icon-left");
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 22)(2, FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_span_2_Template, 2, 2, "span", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cancelIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("onClick", function FileUpload_div_0_ng_container_4_p_button_9_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_9_span_1_Template, 1, 1, "span", 27)(2, FileUpload_div_0_ng_container_4_p_button_9_ng_container_2_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.cancelButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.uploading)("styleClass", ctx_r1.cancelStyleClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancelIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275listener("focus", function FileUpload_div_0_ng_container_4_Template_span_focus_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_0_ng_container_4_Template_span_blur_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBlur());
    })("click", function FileUpload_div_0_ng_container_4_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.choose());
    })("keydown.enter", function FileUpload_div_0_ng_container_4_Template_span_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.choose());
    });
    \u0275\u0275elementStart(2, "input", 7, 0);
    \u0275\u0275listener("change", function FileUpload_div_0_ng_container_4_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FileUpload_div_0_ng_container_4_span_4_Template, 1, 5, "span", 18)(5, FileUpload_div_0_ng_container_4_ng_container_5_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FileUpload_div_0_ng_container_4_p_button_8_Template, 3, 5, "p-button", 20)(9, FileUpload_div_0_ng_container_4_p_button_9_Template, 3, 5, "p-button", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.chooseStyleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c5, ctx_r1.focus, ctx_r1.disabled || ctx_r1.isChooseDisabled()));
    \u0275\u0275attribute("data-pc-section", "choosebutton");
    \u0275\u0275advance();
    \u0275\u0275property("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "choosebuttonlabel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.chooseButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.auto && ctx_r1.showUploadButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.auto && ctx_r1.showCancelButton);
  }
}
function FileUpload_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_p_progressBar_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressBar", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.progress)("showValue", false);
  }
}
function FileUpload_div_0_div_11_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "img", 35);
    \u0275\u0275listener("error", function FileUpload_div_0_div_11_div_1_div_1_div_1_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", file_r8.objectURL, \u0275\u0275sanitizeUrl)("width", ctx_r1.previewWidth);
  }
}
function FileUpload_div_0_div_11_div_1_div_1_TimesIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon");
  }
}
function FileUpload_div_0_div_11_div_1_div_1_9_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_div_11_div_1_div_1_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_div_11_div_1_div_1_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_div_11_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, FileUpload_div_0_div_11_div_1_div_1_div_1_Template, 2, 2, "div", 9);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "button", 34);
    \u0275\u0275listener("click", function FileUpload_div_0_div_11_div_1_div_1_Template_button_click_7_listener($event) {
      const i_r9 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.remove($event, i_r9));
    });
    \u0275\u0275template(8, FileUpload_div_0_div_11_div_1_div_1_TimesIcon_8_Template, 1, 0, "TimesIcon", 9)(9, FileUpload_div_0_div_11_div_1_div_1_9_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImage(file_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatSize(file_r8.size));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.removeStyleClass);
    \u0275\u0275property("disabled", ctx_r1.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cancelIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cancelIconTemplate);
  }
}
function FileUpload_div_0_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FileUpload_div_0_div_11_div_1_div_1_Template, 10, 8, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.files);
  }
}
function FileUpload_div_0_div_11_div_2_ng_template_1_Template(rf, ctx) {
}
function FileUpload_div_0_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FileUpload_div_0_div_11_div_2_ng_template_1_Template, 0, 0, "ng-template", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.files)("ngForTemplate", ctx_r1.fileTemplate);
  }
}
function FileUpload_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, FileUpload_div_0_div_11_div_1_Template, 2, 1, "div", 9)(2, FileUpload_div_0_div_11_div_2_Template, 2, 2, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fileTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fileTemplate);
  }
}
function FileUpload_div_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, FileUpload_div_0_div_13_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate);
  }
}
function FileUpload_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7, 0);
    \u0275\u0275listener("change", function FileUpload_div_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, FileUpload_div_0_ng_container_4_Template, 10, 19, "ng-container", 9)(5, FileUpload_div_0_ng_container_5_Template, 1, 0, "ng-container", 10)(6, FileUpload_div_0_ng_container_6_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12, 1);
    \u0275\u0275listener("dragenter", function FileUpload_div_0_Template_div_dragenter_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnter($event));
    })("dragleave", function FileUpload_div_0_Template_div_dragleave_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function FileUpload_div_0_Template_div_drop_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275template(9, FileUpload_div_0_p_progressBar_9_Template, 1, 2, "p-progressBar", 13);
    \u0275\u0275element(10, "p-messages", 14);
    \u0275\u0275template(11, FileUpload_div_0_div_11_Template, 3, 2, "div", 15)(12, FileUpload_div_0_ng_container_12_Template, 1, 0, "ng-container", 10)(13, FileUpload_div_0_div_13_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", "p-fileupload p-fileupload-advanced p-component")("ngStyle", ctx_r1.style);
    \u0275\u0275attribute("data-pc-name", "fileupload")("data-pc-section", "root");
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", "none");
    \u0275\u0275property("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "buttonbar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction5(27, _c32, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.upload.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.toolbarTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasFiles());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.msgs)("enableService", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFiles());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction8(33, _c42, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.removeUploadedFile.bind(ctx_r1), ctx_r1.remove.bind(ctx_r1), ctx_r1.progress, ctx_r1.msgs));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.emptyTemplate && !ctx_r1.hasFiles() && !ctx_r1.hasUploadedFiles());
  }
}
function FileUpload_div_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "UploadIcon", 24);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275template(1, FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 22)(2, FileUpload_div_1_ng_container_3_ng_container_2_span_2_Template, 2, 1, "span", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_1_ng_container_3_span_1_Template, 1, 1, "span", 27)(2, FileUpload_div_1_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon", 24);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-button-icon p-button-icon-left pi");
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "uploadicon");
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "uploadicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template, 1, 3, "PlusIcon", 22)(2, FileUpload_div_1_ng_template_4_ng_container_1_span_2_Template, 2, 3, "span", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_4_span_0_Template, 1, 1, "span", 43)(1, FileUpload_div_1_ng_template_4_ng_container_1_Template, 3, 2, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.basicButtonLabel);
  }
}
function FileUpload_div_1_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 47, 3);
    \u0275\u0275listener("change", function FileUpload_div_1_input_7_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    })("focus", function FileUpload_div_1_input_7_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_1_input_7_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBlur());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("accept", ctx_r1.accept)("multiple", ctx_r1.multiple)("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("data-pc-section", "input");
  }
}
function FileUpload_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "p-messages", 14);
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275listener("click", function FileUpload_div_1_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBasicUploaderClick());
    })("keydown", function FileUpload_div_1_Template_span_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBasicKeydown($event));
    });
    \u0275\u0275template(3, FileUpload_div_1_ng_container_3_Template, 3, 2, "ng-container", 40)(4, FileUpload_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, FileUpload_div_1_span_6_Template, 2, 2, "span", 41)(7, FileUpload_div_1_input_7_Template, 2, 5, "input", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chooseSection_r12 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-name", "fileupload");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.msgs)("enableService", false);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(12, _c6, !ctx_r1.basicButtonLabel, ctx_r1.hasFiles(), ctx_r1.focus, ctx_r1.disabled))("ngStyle", ctx_r1.style);
    \u0275\u0275attribute("data-pc-section", "choosebutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFiles() && !ctx_r1.auto)("ngIfElse", chooseSection_r12);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.basicButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasFiles());
  }
}
var FileUpload = class _FileUpload {
  document;
  platformId;
  locale;
  renderer;
  el;
  sanitizer;
  zone;
  http;
  cd;
  config;
  /**
   * Name of the request parameter to identify the files at backend.
   * @group Props
   */
  name;
  /**
   * Remote url to upload the files.
   * @group Props
   */
  url;
  /**
   * HTTP method to send the files to the url such as "post" and "put".
   * @group Props
   */
  method = "post";
  /**
   * Used to select multiple files at once from file dialog.
   * @group Props
   */
  multiple;
  /**
   * Comma-separated list of pattern to restrict the allowed file types. Can be any combination of either the MIME types (such as "image/*") or the file extensions (such as ".jpg").
   * @group Props
   */
  accept;
  /**
   * Disables the upload functionality.
   * @group Props
   */
  disabled;
  /**
   * When enabled, upload begins automatically after selection is completed.
   * @group Props
   */
  auto;
  /**
   * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * @group Props
   */
  withCredentials;
  /**
   * Maximum file size allowed in bytes.
   * @group Props
   */
  maxFileSize;
  /**
   * Summary message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageSummary = "{0}: Invalid file size, ";
  /**
   * Detail message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageDetail = "maximum upload size is {0}.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageSummary = "{0}: Invalid file type, ";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageDetail = "allowed file types: {0}.";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageDetail = "limit is {0} at most.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageSummary = "Maximum number of files exceeded, ";
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
  /**
   * Width of the image thumbnail in pixels.
   * @group Props
   */
  previewWidth = 50;
  /**
   * Label of the choose button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  chooseLabel;
  /**
   * Label of the upload button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  uploadLabel;
  /**
   * Label of the cancel button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  cancelLabel;
  /**
   * Icon of the choose button.
   * @group Props
   */
  chooseIcon;
  /**
   * Icon of the upload button.
   * @group Props
   */
  uploadIcon;
  /**
   * Icon of the cancel button.
   * @group Props
   */
  cancelIcon;
  /**
   * Whether to show the upload button.
   * @group Props
   */
  showUploadButton = true;
  /**
   * Whether to show the cancel button.
   * @group Props
   */
  showCancelButton = true;
  /**
   * Defines the UI of the component.
   * @group Props
   */
  mode = "advanced";
  /**
   * HttpHeaders class represents the header configuration options for an HTTP request.
   * @group Props
   */
  headers;
  /**
   * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  customUpload;
  /**
   * Maximum number of files that can be uploaded.
   * @group Props
   */
  fileLimit;
  /**
   * Style class of the upload button.
   * @group Props
   */
  uploadStyleClass;
  /**
   * Style class of the cancel button.
   * @group Props
   */
  cancelStyleClass;
  /**
   * Style class of the remove button.
   * @group Props
   */
  removeStyleClass;
  /**
   * Style class of the choose button.
   * @group Props
   */
  chooseStyleClass;
  /**
   * Callback to invoke before file upload is initialized.
   * @param {FileBeforeUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onBeforeUpload = new EventEmitter();
  /**
   * An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream.
   * @param {FileSendEvent} event - Custom send event.
   * @group Emits
   */
  onSend = new EventEmitter();
  /**
   * Callback to invoke when file upload is complete.
   * @param {FileUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onUpload = new EventEmitter();
  /**
   * Callback to invoke if file upload fails.
   * @param {FileUploadErrorEvent} event - Custom error event.
   * @group Emits
   */
  onError = new EventEmitter();
  /**
   * Callback to invoke when files in queue are removed without uploading using clear all button.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when a file is removed without uploading using clear button of a file.
   * @param {FileRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when files are selected.
   * @param {FileSelectEvent} event - Select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when files are being uploaded.
   * @param {FileProgressEvent} event - Progress event.
   * @group Emits
   */
  onProgress = new EventEmitter();
  /**
   * Callback to invoke in custom upload mode to upload the files manually.
   * @param {FileUploadHandlerEvent} event - Upload handler event.
   * @group Emits
   */
  uploadHandler = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  /**
   * This event is triggered if an error occurs while removing an uploaded file.
   * @param {RemoveUploadedFileEvent} event - Remove event.
   * @group Emits
   */
  onRemoveUploadedFile = new EventEmitter();
  templates;
  advancedFileInput;
  basicFileInput;
  content;
  set files(files) {
    this._files = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (this.validate(file)) {
        if (this.isImage(file)) {
          file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
        }
        this._files.push(files[i]);
      }
    }
  }
  get files() {
    return this._files;
  }
  get basicButtonLabel() {
    if (this.auto || !this.hasFiles()) {
      return this.chooseLabel;
    }
    return this.uploadLabel ?? this.files[0].name;
  }
  _files = [];
  progress = 0;
  dragHighlight;
  msgs;
  fileTemplate;
  headerTemplate;
  contentTemplate;
  toolbarTemplate;
  chooseIconTemplate;
  uploadIconTemplate;
  cancelIconTemplate;
  emptyTemplate;
  uploadedFileCount = 0;
  focus;
  uploading;
  duplicateIEEvent;
  // flag to recognize duplicate onchange event for file input
  translationSubscription;
  dragOverListener;
  uploadedFiles = [];
  fileUploadSubcription;
  formatter;
  constructor(document, platformId, locale, renderer, el, sanitizer, zone, http, cd, config) {
    this.document = document;
    this.platformId = platformId;
    this.locale = locale;
    this.renderer = renderer;
    this.el = el;
    this.sanitizer = sanitizer;
    this.zone = zone;
    this.http = http;
    this.cd = cd;
    this.config = config;
    this.formatter = new Intl.NumberFormat(this.locale, {
      maximumFractionDigits: 3
    });
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "file":
          this.fileTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "toolbar":
          this.toolbarTemplate = item.template;
          break;
        case "chooseicon":
          this.chooseIconTemplate = item.template;
          break;
        case "uploadicon":
          this.uploadIconTemplate = item.template;
          break;
        case "cancelicon":
          this.cancelIconTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        default:
          this.fileTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.mode === "advanced") {
        this.zone.runOutsideAngular(() => {
          if (this.content) {
            this.dragOverListener = this.renderer.listen(this.content.nativeElement, "dragover", this.onDragOver.bind(this));
          }
        });
      }
    }
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  choose() {
    this.advancedFileInput?.nativeElement.click();
  }
  onFileSelect(event) {
    if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
      this.duplicateIEEvent = false;
      return;
    }
    this.msgs = [];
    if (!this.multiple) {
      this.files = [];
    }
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (!this.isFileSelected(file)) {
        if (this.validate(file)) {
          if (this.isImage(file)) {
            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
          }
          this.files.push(files[i]);
        }
      }
    }
    this.onSelect.emit({
      originalEvent: event,
      files,
      currentFiles: this.files
    });
    this.checkFileLimit(files);
    if (this.hasFiles() && this.auto && (this.mode !== "advanced" || !this.isFileLimitExceeded())) {
      this.upload();
    }
    if (event.type !== "drop" && this.isIE11()) {
      this.clearIEInput();
    } else {
      this.clearInputElement();
    }
  }
  isFileSelected(file) {
    for (let sFile of this.files) {
      if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
        return true;
      }
    }
    return false;
  }
  isIE11() {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.document.defaultView["MSInputMethodContext"] && !!this.document["documentMode"];
    }
  }
  validate(file) {
    this.msgs = this.msgs || [];
    if (this.accept && !this.isFileTypeValid(file)) {
      this.msgs.push({
        severity: "error",
        summary: this.invalidFileTypeMessageSummary.replace("{0}", file.name),
        detail: this.invalidFileTypeMessageDetail.replace("{0}", this.accept)
      });
      return false;
    }
    if (this.maxFileSize && file.size > this.maxFileSize) {
      this.msgs.push({
        severity: "error",
        summary: this.invalidFileSizeMessageSummary.replace("{0}", file.name),
        detail: this.invalidFileSizeMessageDetail.replace("{0}", this.formatSize(this.maxFileSize))
      });
      return false;
    }
    return true;
  }
  isFileTypeValid(file) {
    let acceptableTypes = this.accept?.split(",").map((type) => type.trim());
    for (let type of acceptableTypes) {
      let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
      if (acceptable) {
        return true;
      }
    }
    return false;
  }
  getTypeClass(fileType) {
    return fileType.substring(0, fileType.indexOf("/"));
  }
  isWildcard(fileType) {
    return fileType.indexOf("*") !== -1;
  }
  getFileExtension(file) {
    return "." + file.name.split(".").pop();
  }
  isImage(file) {
    return /^image\//.test(file.type);
  }
  onImageLoad(img) {
    window.URL.revokeObjectURL(img.src);
  }
  /**
   * Uploads the selected files.
   * @group Method
   */
  upload() {
    if (this.customUpload) {
      if (this.fileLimit) {
        this.uploadedFileCount += this.files.length;
      }
      this.uploadHandler.emit({
        files: this.files
      });
      this.cd.markForCheck();
    } else {
      this.uploading = true;
      this.msgs = [];
      let formData = new FormData();
      this.onBeforeUpload.emit({
        formData
      });
      for (let i = 0; i < this.files.length; i++) {
        formData.append(this.name, this.files[i], this.files[i].name);
      }
      this.cancelUploadRequest();
      this.fileUploadSubcription = this.http.request(this.method, this.url, {
        body: formData,
        headers: this.headers,
        reportProgress: true,
        observe: "events",
        withCredentials: this.withCredentials
      }).subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            this.onSend.emit({
              originalEvent: event,
              formData
            });
            break;
          case HttpEventType.Response:
            this.uploading = false;
            this.progress = 0;
            if (event["status"] >= 200 && event["status"] < 300) {
              if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
              }
              this.onUpload.emit({
                originalEvent: event,
                files: this.files
              });
            } else {
              this.onError.emit({
                files: this.files
              });
            }
            this.uploadedFiles.push(...this.files);
            this.clear();
            break;
          case HttpEventType.UploadProgress: {
            if (event["loaded"]) {
              this.progress = Math.round(event["loaded"] * 100 / event["total"]);
            }
            this.onProgress.emit({
              originalEvent: event,
              progress: this.progress
            });
            break;
          }
        }
        this.cd.markForCheck();
      }, (error) => {
        this.uploading = false;
        this.onError.emit({
          files: this.files,
          error
        });
      });
    }
  }
  /**
   * Clears the files list.
   * @group Method
   */
  clear() {
    this.files = [];
    this.uploadedFileCount = 0;
    this.cancelUploadRequest();
    this.onClear.emit();
    this.clearInputElement();
    this.cd.markForCheck();
  }
  /**
   * Removes a single file.
   * @param {Event} event - Browser event.
   * @param {Number} index - Index of the file.
   * @group Method
   */
  remove(event, index) {
    this.cancelUploadRequest();
    this.clearInputElement();
    this.onRemove.emit({
      originalEvent: event,
      file: this.files[index]
    });
    this.files.splice(index, 1);
    this.checkFileLimit(this.files);
  }
  /**
   * Removes uploaded file.
   * @param {Number} index - Index of the file to be removed.
   * @group Method
   */
  removeUploadedFile(index) {
    let removedFile = this.uploadedFiles.splice(index, 1)[0];
    this.uploadedFiles = [...this.uploadedFiles];
    this.onRemoveUploadedFile.emit({
      file: removedFile,
      files: this.uploadedFiles
    });
  }
  /**
   * Cancel upload file request.
   * */
  cancelUploadRequest() {
    if (this.fileUploadSubcription) {
      this.fileUploadSubcription.unsubscribe();
      this.fileUploadSubcription = void 0;
    }
  }
  isFileLimitExceeded() {
    const isAutoMode = this.auto;
    const totalFileCount = isAutoMode ? this.files.length : this.files.length + this.uploadedFileCount;
    if (this.fileLimit && this.fileLimit <= totalFileCount && this.focus) {
      this.focus = false;
    }
    return this.fileLimit && this.fileLimit < totalFileCount;
  }
  isChooseDisabled() {
    if (this.auto) {
      return this.fileLimit && this.fileLimit <= this.files.length;
    } else {
      return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    }
  }
  checkFileLimit(files) {
    this.msgs ??= [];
    const hasExistingValidationMessages = this.msgs.length > 0 && this.fileLimit < files.length;
    if (this.isFileLimitExceeded() || hasExistingValidationMessages) {
      this.msgs.push({
        severity: "error",
        summary: this.invalidFileLimitMessageSummary.replace("{0}", this.fileLimit.toString()),
        detail: this.invalidFileLimitMessageDetail.replace("{0}", this.fileLimit.toString())
      });
    }
  }
  clearInputElement() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.advancedFileInput.nativeElement.value = "";
    }
    if (this.basicFileInput && this.basicFileInput.nativeElement) {
      this.basicFileInput.nativeElement.value = "";
    }
  }
  clearIEInput() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.duplicateIEEvent = true;
      this.advancedFileInput.nativeElement.value = "";
    }
  }
  hasFiles() {
    return this.files && this.files.length > 0;
  }
  hasUploadedFiles() {
    return this.uploadedFiles && this.uploadedFiles.length > 0;
  }
  onDragEnter(e) {
    if (!this.disabled) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragOver(e) {
    if (!this.disabled) {
      DomHandler.addClass(this.content?.nativeElement, "p-fileupload-highlight");
      this.dragHighlight = true;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragLeave(event) {
    if (!this.disabled) {
      DomHandler.removeClass(this.content?.nativeElement, "p-fileupload-highlight");
    }
  }
  onDrop(event) {
    if (!this.disabled) {
      DomHandler.removeClass(this.content?.nativeElement, "p-fileupload-highlight");
      event.stopPropagation();
      event.preventDefault();
      let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      let allowDrop = this.multiple || files && files.length === 1;
      if (allowDrop) {
        this.onFileSelect(event);
      }
    }
  }
  onFocus() {
    this.focus = true;
  }
  onBlur() {
    this.focus = false;
  }
  formatSize(bytes) {
    const k = 1024;
    const sizes = this.getTranslation(TranslationKeys.FILE_SIZE_TYPES);
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = this.formatter.format(bytes / Math.pow(k, i));
    return `${formattedSize} ${sizes[i]}`;
  }
  onBasicUploaderClick() {
    if (this.hasFiles()) this.upload();
    else this.basicFileInput?.nativeElement.click();
  }
  onBasicKeydown(event) {
    switch (event.code) {
      case "Space":
      case "Enter":
        this.onBasicUploaderClick();
        event.preventDefault();
        break;
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  get chooseButtonLabel() {
    return this.chooseLabel || this.config.getTranslation(TranslationKeys.CHOOSE);
  }
  get uploadButtonLabel() {
    return this.uploadLabel || this.config.getTranslation(TranslationKeys.UPLOAD);
  }
  get cancelButtonLabel() {
    return this.cancelLabel || this.config.getTranslation(TranslationKeys.CANCEL);
  }
  get browseFilesLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)[TranslationKeys.BROWSE_FILES];
  }
  ngOnDestroy() {
    if (this.content && this.content.nativeElement) {
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static \u0275fac = function FileUpload_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUpload)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(LOCALE_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FileUpload,
    selectors: [["p-fileUpload"]],
    contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function FileUpload_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(_c14, 5);
        \u0275\u0275viewQuery(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.advancedFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      name: "name",
      url: "url",
      method: "method",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      accept: "accept",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      auto: [2, "auto", "auto", booleanAttribute],
      withCredentials: [2, "withCredentials", "withCredentials", booleanAttribute],
      maxFileSize: [2, "maxFileSize", "maxFileSize", numberAttribute],
      invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary",
      invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail",
      invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary",
      invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail",
      invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail",
      invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary",
      style: "style",
      styleClass: "styleClass",
      previewWidth: [2, "previewWidth", "previewWidth", numberAttribute],
      chooseLabel: "chooseLabel",
      uploadLabel: "uploadLabel",
      cancelLabel: "cancelLabel",
      chooseIcon: "chooseIcon",
      uploadIcon: "uploadIcon",
      cancelIcon: "cancelIcon",
      showUploadButton: [2, "showUploadButton", "showUploadButton", booleanAttribute],
      showCancelButton: [2, "showCancelButton", "showCancelButton", booleanAttribute],
      mode: "mode",
      headers: "headers",
      customUpload: [2, "customUpload", "customUpload", booleanAttribute],
      fileLimit: [2, "fileLimit", "fileLimit", (value) => numberAttribute(value, null)],
      uploadStyleClass: "uploadStyleClass",
      cancelStyleClass: "cancelStyleClass",
      removeStyleClass: "removeStyleClass",
      chooseStyleClass: "chooseStyleClass",
      files: "files"
    },
    outputs: {
      onBeforeUpload: "onBeforeUpload",
      onSend: "onSend",
      onUpload: "onUpload",
      onError: "onError",
      onClear: "onClear",
      onRemove: "onRemove",
      onSelect: "onSelect",
      onProgress: "onProgress",
      uploadHandler: "uploadHandler",
      onImageError: "onImageError",
      onRemoveUploadedFile: "onRemoveUploadedFile"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 2,
    vars: 2,
    consts: [["advancedfileinput", ""], ["content", ""], ["chooseSection", ""], ["basicfileinput", ""], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["class", "p-fileupload p-fileupload-basic p-component", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "file", 3, "change", "multiple", "accept", "disabled"], [1, "p-fileupload-buttonbar"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [1, "p-fileupload-content", 3, "dragenter", "dragleave", "drop"], [3, "value", "showValue", 4, "ngIf"], [3, "value", "enableService"], ["class", "p-fileupload-files", 4, "ngIf"], ["class", "p-fileupload-empty", 4, "ngIf"], ["pRipple", "", "tabindex", "0", 1, "p-button", "p-component", "p-fileupload-choose", 3, "focus", "blur", "click", "keydown.enter", "ngClass"], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], ["type", "button", 3, "label", "disabled", "styleClass", "onClick", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left", 4, "ngIf"], [3, "styleClass"], [1, "p-button-icon", "p-button-icon-left"], ["type", "button", 3, "onClick", "label", "disabled", "styleClass"], ["class", "p-button-icon p-button-icon-left", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", 3, "ngClass"], [3, "value", "showValue"], [1, "p-fileupload-files"], ["class", "p-fileupload-row", 4, "ngFor", "ngForOf"], [1, "p-fileupload-row"], [1, "p-fileupload-filename"], ["type", "button", "pButton", "", 1, "p-button-icon-only", 3, "click", "disabled"], [3, "error", "src", "width"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "p-fileupload-empty"], [1, "p-fileupload", "p-fileupload-basic", "p-component"], ["tabindex", "0", "pRipple", "", 3, "click", "keydown", "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], ["class", "p-button-label", 4, "ngIf"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left pi", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"], ["class", "p-button-icon p-button-icon-left pi", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi"], ["type", "file", 3, "change", "focus", "blur", "accept", "multiple", "disabled"]],
    template: function FileUpload_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FileUpload_div_0_Template, 14, 42, "div", 4)(1, FileUpload_div_1_Template, 8, 17, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.mode === "advanced");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "basic");
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Button, ProgressBar, Messages, Ripple, PlusIcon, UploadIcon, TimesIcon],
    styles: ["@layer primeng{.p-fileupload-content{position:relative}.p-fileupload-row{display:flex;align-items:center}.p-fileupload-row>div{flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{width:100%;position:absolute;top:0;left:0}.p-button.p-fileupload-choose{position:relative;overflow:hidden}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}.p-fileupload-filename{word-break:break-all}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUpload, [{
    type: Component,
    args: [{
      selector: "p-fileUpload",
      template: `
        <div [ngClass]="'p-fileupload p-fileupload-advanced p-component'" [ngStyle]="style" [class]="styleClass" *ngIf="mode === 'advanced'" [attr.data-pc-name]="'fileupload'" [attr.data-pc-section]="'root'">
            <input
                [attr.aria-label]="browseFilesLabel"
                #advancedfileinput
                type="file"
                (change)="onFileSelect($event)"
                [multiple]="multiple"
                [accept]="accept"
                [disabled]="disabled || isChooseDisabled()"
                [attr.title]="''"
                [attr.data-pc-section]="'input'"
                [style.display]="'none'"
            />
            <div class="p-fileupload-buttonbar" [attr.data-pc-section]="'buttonbar'">
                <ng-container *ngIf="!headerTemplate">
                    <span
                        class="p-button p-component p-fileupload-choose"
                        [ngClass]="{ 'p-focus': focus, 'p-disabled': disabled || isChooseDisabled() }"
                        (focus)="onFocus()"
                        (blur)="onBlur()"
                        pRipple
                        (click)="choose()"
                        (keydown.enter)="choose()"
                        tabindex="0"
                        [class]="chooseStyleClass"
                        [attr.data-pc-section]="'choosebutton'"
                    >
                        <input
                            [attr.aria-label]="browseFilesLabel"
                            #advancedfileinput
                            type="file"
                            (change)="onFileSelect($event)"
                            [multiple]="multiple"
                            [accept]="accept"
                            [disabled]="disabled || isChooseDisabled()"
                            [attr.title]="''"
                            [attr.data-pc-section]="'input'"
                        />
                        <span *ngIf="chooseIcon" [ngClass]="'p-button-icon p-button-icon-left'" [class]="chooseIcon" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'"></span>
                        <ng-container *ngIf="!chooseIcon">
                            <PlusIcon *ngIf="!chooseIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'" />
                            <span *ngIf="chooseIconTemplate" class="p-button-icon p-button-icon-left" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'">
                                <ng-template *ngTemplateOutlet="chooseIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                        <span class="p-button-label" [attr.data-pc-section]="'choosebuttonlabel'">{{ chooseButtonLabel }}</span>
                    </span>

                    <p-button *ngIf="!auto && showUploadButton" type="button" [label]="uploadButtonLabel" (onClick)="upload()" [disabled]="!hasFiles() || isFileLimitExceeded()" [styleClass]="uploadStyleClass">
                        <span *ngIf="uploadIcon" [ngClass]="uploadIcon" [attr.aria-hidden]="true" class="p-button-icon p-button-icon-left"></span>
                        <ng-container *ngIf="!uploadIcon">
                            <UploadIcon *ngIf="!uploadIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" />
                            <span *ngIf="uploadIconTemplate" class="p-button-icon p-button-icon-left" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="uploadIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </p-button>
                    <p-button *ngIf="!auto && showCancelButton" type="button" [label]="cancelButtonLabel" (onClick)="clear()" [disabled]="!hasFiles() || uploading" [styleClass]="cancelStyleClass">
                        <span *ngIf="cancelIcon" [ngClass]="cancelIcon" class="p-button-icon p-button-icon-left"></span>
                        <ng-container *ngIf="!cancelIcon">
                            <TimesIcon *ngIf="!cancelIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" [attr.aria-hidden]="true" />
                            <span *ngIf="cancelIconTemplate" class="p-button-icon p-button-icon-left" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="cancelIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </p-button>
                </ng-container>
                <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: files, uploadedFiles: uploadedFiles, chooseCallback: choose.bind(this), clearCallback: clear.bind(this), uploadCallback: upload.bind(this) }"></ng-container>
                <ng-container *ngTemplateOutlet="toolbarTemplate"></ng-container>
            </div>
            <div #content class="p-fileupload-content" (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)" [attr.data-pc-section]="'content'">
                <p-progressBar [value]="progress" [showValue]="false" *ngIf="hasFiles()"></p-progressBar>

                <p-messages [value]="msgs" [enableService]="false"></p-messages>

                <div class="p-fileupload-files" *ngIf="hasFiles()">
                    <div *ngIf="!fileTemplate">
                        <div class="p-fileupload-row" *ngFor="let file of files; let i = index">
                            <div *ngIf="isImage(file)"><img [src]="file.objectURL" [width]="previewWidth" (error)="imageError($event)" /></div>
                            <div class="p-fileupload-filename">{{ file.name }}</div>
                            <div>{{ formatSize(file.size) }}</div>
                            <div>
                                <button type="button" pButton (click)="remove($event, i)" [disabled]="uploading" class="p-button-icon-only" [class]="removeStyleClass">
                                    <TimesIcon *ngIf="!cancelIconTemplate" />
                                    <ng-template *ngTemplateOutlet="cancelIconTemplate"></ng-template>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div *ngIf="fileTemplate">
                        <ng-template ngFor [ngForOf]="files" [ngForTemplate]="fileTemplate"></ng-template>
                    </div>
                </div>
                <ng-container
                    *ngTemplateOutlet="
                        contentTemplate;
                        context: {
                            $implicit: files,
                            uploadedFiles: uploadedFiles,
                            chooseCallback: choose.bind(this),
                            clearCallback: clear.bind(this),
                            removeUploadedFileCallback: removeUploadedFile.bind(this),
                            removeFileCallback: remove.bind(this),
                            progress: progress,
                            messages: msgs
                        }
                    "
                ></ng-container>
                <div *ngIf="emptyTemplate && !hasFiles() && !hasUploadedFiles()" class="p-fileupload-empty">
                    <ng-container *ngTemplateOutlet="emptyTemplate"></ng-container>
                </div>
            </div>
        </div>
        <div class="p-fileupload p-fileupload-basic p-component" *ngIf="mode === 'basic'" [attr.data-pc-name]="'fileupload'">
            <p-messages [value]="msgs" [enableService]="false"></p-messages>
            <span
                [ngClass]="{ 'p-button p-component p-fileupload-choose': true, 'p-button-icon-only': !basicButtonLabel, 'p-fileupload-choose-selected': hasFiles(), 'p-focus': focus, 'p-disabled': disabled }"
                [ngStyle]="style"
                [class]="styleClass"
                (click)="onBasicUploaderClick()"
                (keydown)="onBasicKeydown($event)"
                tabindex="0"
                pRipple
                [attr.data-pc-section]="'choosebutton'"
            >
                <ng-container *ngIf="hasFiles() && !auto; else chooseSection">
                    <span *ngIf="uploadIcon" class="p-button-icon p-button-icon-left" [ngClass]="uploadIcon"></span>
                    <ng-container *ngIf="!uploadIcon">
                        <UploadIcon *ngIf="!uploadIconTemplate" [styleClass]="'p-button-icon p-button-icon-left'" />
                        <span *ngIf="uploadIconTemplate" class="p-button-icon p-button-icon-left">
                            <ng-template *ngTemplateOutlet="uploadIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
                <ng-template #chooseSection>
                    <span *ngIf="chooseIcon" class="p-button-icon p-button-icon-left pi" [ngClass]="chooseIcon"></span>
                    <ng-container *ngIf="!chooseIcon">
                        <PlusIcon [styleClass]="'p-button-icon p-button-icon-left pi'" *ngIf="!chooseIconTemplate" [attr.aria-hidden]="true" [attr.data-pc-section]="'uploadicon'" />
                        <span *ngIf="chooseIconTemplate" class="p-button-icon p-button-icon-left pi" [attr.aria-hidden]="true" [attr.data-pc-section]="'uploadicon'">
                            <ng-template *ngTemplateOutlet="chooseIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-template>
                <span *ngIf="basicButtonLabel" class="p-button-label" [attr.data-pc-section]="'label'">{{ basicButtonLabel }}</span>
                <input
                    [attr.aria-label]="browseFilesLabel"
                    #basicfileinput
                    type="file"
                    [accept]="accept"
                    [multiple]="multiple"
                    [disabled]="disabled"
                    (change)="onFileSelect($event)"
                    *ngIf="!hasFiles()"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.data-pc-section]="'input'"
                />
            </span>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-fileupload-content{position:relative}.p-fileupload-row{display:flex;align-items:center}.p-fileupload-row>div{flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{width:100%;position:absolute;top:0;left:0}.p-button.p-fileupload-choose{position:relative;overflow:hidden}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}.p-fileupload-filename{word-break:break-all}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: DomSanitizer
  }, {
    type: NgZone
  }, {
    type: HttpClient
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    name: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    method: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    accept: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    auto: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    withCredentials: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maxFileSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    invalidFileSizeMessageSummary: [{
      type: Input
    }],
    invalidFileSizeMessageDetail: [{
      type: Input
    }],
    invalidFileTypeMessageSummary: [{
      type: Input
    }],
    invalidFileTypeMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageSummary: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    previewWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    chooseLabel: [{
      type: Input
    }],
    uploadLabel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    chooseIcon: [{
      type: Input
    }],
    uploadIcon: [{
      type: Input
    }],
    cancelIcon: [{
      type: Input
    }],
    showUploadButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCancelButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mode: [{
      type: Input
    }],
    headers: [{
      type: Input
    }],
    customUpload: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fileLimit: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    uploadStyleClass: [{
      type: Input
    }],
    cancelStyleClass: [{
      type: Input
    }],
    removeStyleClass: [{
      type: Input
    }],
    chooseStyleClass: [{
      type: Input
    }],
    onBeforeUpload: [{
      type: Output
    }],
    onSend: [{
      type: Output
    }],
    onUpload: [{
      type: Output
    }],
    onError: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onProgress: [{
      type: Output
    }],
    uploadHandler: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    onRemoveUploadedFile: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    advancedFileInput: [{
      type: ViewChild,
      args: ["advancedfileinput"]
    }],
    basicFileInput: [{
      type: ViewChild,
      args: ["basicfileinput"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    files: [{
      type: Input
    }]
  });
})();
var FileUploadModule = class _FileUploadModule {
  static \u0275fac = function FileUploadModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FileUploadModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule, PlusIcon, UploadIcon, TimesIcon, SharedModule, ButtonModule, ProgressBarModule, MessagesModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule, PlusIcon, UploadIcon, TimesIcon],
      exports: [FileUpload, SharedModule, ButtonModule, ProgressBarModule, MessagesModule],
      declarations: [FileUpload]
    }]
  }], null, null);
})();

// src/app/features/products/components/product-form/product-form.component.ts
var _c05 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c15 = () => ({ height: "320px" });
var _c23 = (a0) => ({ "exceeded-progress-bar": a0 });
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
    \u0275\u0275property("value", ctx_r4.totalSizePercent)("showValue", false)("ngClass", \u0275\u0275pureFunction1(12, _c23, ctx_r4.totalSizePercent > 100));
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c05, ((tmp_3_0 = ctx.productForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.productForm.get("name")) == null ? null : tmp_3_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.productForm.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.productForm.get("name")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c15));
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
var _c06 = ["*"];
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
    ngContentSelectors: _c06,
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
var _c07 = ["*"];
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
    ngContentSelectors: _c07,
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
//# sourceMappingURL=chunk-OQZWP74A.js.map
