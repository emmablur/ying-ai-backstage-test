import {
  AdminContentService
} from "./chunk-NL6JKAZG.js";
import {
  CardModule
} from "./chunk-RVIFAY66.js";
import {
  Editor,
  EditorModule
} from "./chunk-UOJMF7HP.js";
import {
  Dropdown,
  DropdownModule,
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
  DialogModule
} from "./chunk-AWXCFGOK.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
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
  NgSelectOption,
  ReactiveFormsModule,
  ToastModule,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-5OSS66PJ.js";
import {
  ActivatedRoute,
  Button,
  ButtonDirective,
  ButtonModule,
  ConfirmationService,
  HttpClientModule,
  MessageService,
  PrimeTemplate,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-SO3O3ZSH.js";
import "./chunk-VE2DDJNX.js";
import {
  CommonModule,
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
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T5SPLERN.js";
import "./chunk-4MWRP73S.js";

// src/app/shared/constants/content-types.constants.ts
var CONTENT_TYPES = {
  NEWS: "news",
  BLOG: "blog",
  PAGE: "page",
  EVENT: "event"
};
var CONTENT_TYPE_LABELS = {
  [CONTENT_TYPES.NEWS]: "\u6700\u65B0\u6D88\u606F",
  [CONTENT_TYPES.BLOG]: "\u90E8\u843D\u683C",
  [CONTENT_TYPES.PAGE]: "\u55AE\u9801\u5167\u5BB9",
  [CONTENT_TYPES.EVENT]: "\u6D3B\u52D5"
};
var contentTypeOptions = [
  { label: CONTENT_TYPE_LABELS[CONTENT_TYPES.NEWS], value: CONTENT_TYPES.NEWS },
  { label: CONTENT_TYPE_LABELS[CONTENT_TYPES.BLOG], value: CONTENT_TYPES.BLOG },
  { label: CONTENT_TYPE_LABELS[CONTENT_TYPES.PAGE], value: CONTENT_TYPES.PAGE },
  {
    label: CONTENT_TYPE_LABELS[CONTENT_TYPES.EVENT],
    value: CONTENT_TYPES.EVENT
  }
];

// src/app/features/contents/components/content-form/content-form.component.ts
var _c0 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c1 = () => ({ height: "500px" });
function ContentFormComponent_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 19);
    \u0275\u0275text(1, " \u6A19\u984C\u5FC5\u9808\u586B\u5BEB\u4E14\u81F3\u5C113\u500B\u5B57 ");
    \u0275\u0275elementEnd();
  }
}
function ContentFormComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20)(1, "select", 21)(2, "option", 22);
    \u0275\u0275text(3, "\u6A19\u984C 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 23);
    \u0275\u0275text(5, "\u6A19\u984C 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 24);
    \u0275\u0275text(7, "\u6A19\u984C 3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 25);
    \u0275\u0275text(9, "\u6A19\u984C 4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 26);
    \u0275\u0275text(11, "\u6A19\u984C 5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 27);
    \u0275\u0275text(13, "\u6A19\u984C 6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 28);
    \u0275\u0275text(15, "\u6B63\u6587");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275element(17, "button", 29)(18, "button", 30)(19, "button", 31)(20, "button", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 20);
    \u0275\u0275element(22, "select", 33)(23, "select", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 20);
    \u0275\u0275element(25, "button", 35)(26, "button", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 20);
    \u0275\u0275element(28, "button", 37)(29, "button", 38)(30, "button", 39)(31, "button", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 20);
    \u0275\u0275element(33, "button", 41)(34, "select", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 20);
    \u0275\u0275element(36, "button", 43)(37, "button", 44)(38, "button", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 20);
    \u0275\u0275element(40, "button", 46);
    \u0275\u0275elementEnd();
  }
}
function ContentFormComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 19);
    \u0275\u0275text(1, " \u8ACB\u586B\u5BEB\u5167\u5BB9 ");
    \u0275\u0275elementEnd();
  }
}
var ContentFormComponent = class _ContentFormComponent {
  fb;
  route;
  router;
  adminContentService;
  messageService;
  contentForm;
  isEditMode = false;
  contentId = null;
  loading = false;
  //TODO 未來擴充成，選項後台可以編輯，目前先寫死在前後台，因為用不到
  contentTypeOptions = contentTypeOptions;
  constructor(fb, route, router, adminContentService, messageService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.adminContentService = adminContentService;
    this.messageService = messageService;
    this.contentForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      content: ["", Validators.required],
      contentType: ["ARTICLE", Validators.required],
      isPublic: [false],
      tags: [[]],
      categoryId: [""]
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.isEditMode = true;
        this.contentId = id;
        this.loadContent(this.contentId);
      }
    });
  }
  loadContent(id) {
    this.loading = true;
    this.adminContentService.apiAdminContentIdGet(id).subscribe({
      next: (response) => {
        const data = response.data;
        if (data) {
          this.contentForm.patchValue({
            title: data.title,
            content: data.content,
            contentType: data.contentType,
            isPublic: data.isPublic,
            tags: data.tags || [],
            categoryId: data.categoryId
          });
        }
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u5167\u5BB9"
        });
        this.loading = false;
        this.router.navigate(["/contents"]);
      }
    });
  }
  onSubmit() {
    if (this.contentForm.valid) {
      this.loading = true;
      const formData = this.contentForm.getRawValue();
      if (this.isEditMode && this.contentId) {
        const updateData = {
          title: formData.title,
          content: formData.content,
          contentType: formData.contentType,
          isPublic: formData.isPublic,
          tags: formData.tags,
          categoryId: formData.categoryId || void 0
        };
        this.adminContentService.apiAdminContentIdPut(this.contentId, updateData).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "\u6210\u529F",
              detail: "\u5167\u5BB9\u5DF2\u66F4\u65B0"
            });
            this.router.navigate(["/contents"]);
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "\u932F\u8AA4",
              detail: "\u7121\u6CD5\u66F4\u65B0\u5167\u5BB9"
            });
            this.loading = false;
          }
        });
      } else {
        const createData = {
          title: formData.title,
          content: formData.content,
          contentType: formData.contentType,
          isPublic: formData.isPublic,
          tags: formData.tags,
          categoryId: formData.categoryId || void 0
        };
        this.adminContentService.apiAdminContentPost(createData).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "\u6210\u529F",
              detail: "\u5167\u5BB9\u5DF2\u5EFA\u7ACB"
            });
            this.router.navigate(["/contents"]);
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "\u932F\u8AA4",
              detail: "\u7121\u6CD5\u5EFA\u7ACB\u5167\u5BB9"
            });
            this.loading = false;
          }
        });
      }
    } else {
      Object.keys(this.contentForm.controls).forEach((key) => {
        const control = this.contentForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  static \u0275fac = function ContentFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminContentService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentFormComponent, selectors: [["app-content-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 30, vars: 16, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], [1, "p-fluid", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "title"], ["id", "title", "type", "text", "pInputText", "", "formControlName", "title", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "contentType"], ["formControlName", "contentType", "optionLabel", "label", "optionValue", "value", "placeholder", "\u9078\u64C7\u5167\u5BB9\u985E\u578B", 3, "options"], ["for", "content"], ["formControlName", "content"], ["pTemplate", "header"], [1, "flex", "gap-4", "mb-4"], [1, "block", "mb-2"], ["formControlName", "isPublic", 3, "trueValue", "falseValue"], [1, "block", "mt-1", "text-gray-600"], [1, "flex", "justify-content-end", "mt-4"], ["label", "\u53D6\u6D88", "icon", "pi pi-times", "styleClass", "p-button-text mr-2", "routerLink", "/contents"], ["icon", "pi pi-save", "type", "submit", 3, "label", "disabled", "loading"], [1, "p-error"], [1, "ql-formats"], [1, "ql-header"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["selected", ""], ["type", "button", "aria-label", "Bold", 1, "ql-bold"], ["type", "button", "aria-label", "Italic", 1, "ql-italic"], ["type", "button", "aria-label", "Underline", 1, "ql-underline"], ["type", "button", "aria-label", "Strike", 1, "ql-strike"], [1, "ql-color"], [1, "ql-background"], ["type", "button", "value", "sub", 1, "ql-script"], ["type", "button", "value", "super", 1, "ql-script"], ["type", "button", "value", "ordered", 1, "ql-list"], ["type", "button", "value", "bullet", 1, "ql-list"], ["type", "button", "value", "-1", 1, "ql-indent"], ["type", "button", "value", "+1", 1, "ql-indent"], ["type", "button", "value", "rtl", 1, "ql-direction"], [1, "ql-align"], ["type", "button", 1, "ql-link"], ["type", "button", 1, "ql-image"], ["type", "button", 1, "ql-code-block"], ["type", "button", 1, "ql-clean"]], template: function ContentFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function ContentFormComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(5, "div", 3)(6, "label", 4);
      \u0275\u0275text(7, "\u6A19\u984C");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 5);
      \u0275\u0275template(9, ContentFormComponent_small_9_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 3)(11, "label", 7);
      \u0275\u0275text(12, "\u5167\u5BB9\u985E\u578B");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "p-dropdown", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 3)(15, "label", 9);
      \u0275\u0275text(16, "\u5167\u5BB9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-editor", 10);
      \u0275\u0275template(18, ContentFormComponent_ng_template_18_Template, 41, 0, "ng-template", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, ContentFormComponent_small_19_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12)(21, "div", 3)(22, "label", 13);
      \u0275\u0275text(23, "\u516C\u958B\u72C0\u614B");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "p-inputSwitch", 14);
      \u0275\u0275elementStart(25, "small", 15);
      \u0275\u0275text(26, "\u958B\u555F\u8868\u793A\u5C0D\u5916\u516C\u958B");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275element(28, "p-button", 17)(29, "p-button", 18);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_6_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "\u7DE8\u8F2F" : "\u65B0\u589E", "\u5167\u5BB9");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.contentForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c0, ((tmp_2_0 = ctx.contentForm.get("title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.contentForm.get("title")) == null ? null : tmp_2_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.contentForm.get("title")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.contentForm.get("title")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.contentTypeOptions);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.contentForm.get("content")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.contentForm.get("content")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("trueValue", true)("falseValue", false);
      \u0275\u0275advance(5);
      \u0275\u0275property("label", ctx.loading ? "\u5132\u5B58\u4E2D..." : "\u5132\u5B58")("disabled", ctx.loading)("loading", ctx.loading);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, PrimeTemplate, Button, InputText, Dropdown, Editor, InputSwitch], styles: ["\n\n/*# sourceMappingURL=content-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentFormComponent, { className: "ContentFormComponent", filePath: "src/app/features/contents/components/content-form/content-form.component.ts", lineNumber: 16 });
})();

// src/app/shared/pipes/contentType.pipe.ts
var ContentTypePipe = class _ContentTypePipe {
  transform(value) {
    return CONTENT_TYPE_LABELS[value] || value;
  }
  static \u0275fac = function ContentTypePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentTypePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "appContentType", type: _ContentTypePipe, pure: true, standalone: true });
};

// src/app/features/contents/components/content-list/content-list.component.ts
var _c02 = () => [5, 10, 20];
var _c12 = (a0) => ["edit", a0];
function ContentListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u6A19\u984C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "\u5167\u5BB9\u985E\u578B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u5EFA\u7ACB\u6642\u9593");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u64CD\u4F5C");
    \u0275\u0275elementEnd()();
  }
}
function ContentListComponent_ng_template_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 7);
  }
}
function ContentListComponent_ng_template_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 8);
  }
}
function ContentListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "appContentType");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ContentListComponent_ng_template_8_Conditional_10_Template, 1, 0, "p-tag", 7)(11, ContentListComponent_ng_template_8_Conditional_11_Template, 1, 0, "p-tag", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "div", 9);
    \u0275\u0275element(14, "button", 10);
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275listener("click", function ContentListComponent_ng_template_8_Template_button_click_15_listener() {
      const content_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(content_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const content_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(content_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, content_r2.contentType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, content_r2.createdAt, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(content_r2.isPublic ? 10 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c12, content_r2._id));
  }
}
function ContentListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2, "\u5C1A\u7121\u5167\u5BB9.");
    \u0275\u0275elementEnd()();
  }
}
var ContentListComponent = class _ContentListComponent {
  adminContentService;
  confirmationService;
  messageService;
  contents = [];
  loading = true;
  selectedContent = null;
  constructor(adminContentService, confirmationService, messageService) {
    this.adminContentService = adminContentService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadContents();
  }
  loadContents() {
    this.loading = true;
    this.adminContentService.apiAdminContentGet().subscribe({
      next: (response) => {
        this.contents = response.data?.contents || [];
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u5167\u5BB9"
        });
        this.loading = false;
      }
    });
  }
  confirmDelete(content) {
    this.confirmationService.confirm({
      message: `\u78BA\u5B9A\u8981\u522A\u9664\u300C${content.title}\u300D\u55CE\uFF1F`,
      header: "\u78BA\u8A8D\u522A\u9664",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteContent(content);
      }
    });
  }
  deleteContent(content) {
    if (!content._id)
      return;
    this.adminContentService.apiAdminContentIdDelete(content._id).subscribe({
      next: () => {
        this.contents = this.contents.filter((c) => c._id !== content._id);
        this.messageService.add({
          severity: "success",
          summary: "\u6210\u529F",
          detail: "\u5167\u5BB9\u5DF2\u522A\u9664"
        });
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u522A\u9664\u5167\u5BB9"
        });
      }
    });
  }
  static \u0275fac = function ContentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentListComponent)(\u0275\u0275directiveInject(AdminContentService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentListComponent, selectors: [["app-content-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService, ToastModule])], decls: 10, vars: 6, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], ["pButton", "", "label", "\u65B0\u589E\u5167\u5BB9", "icon", "pi pi-plus", "routerLink", "new", 1, "p-button-success"], ["styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["severity", "success", "value", "\u5DF2\u767C\u5E03"], ["severity", "warning", "value", "\u672A\u767C\u5E03"], [1, "flex", "gap-2"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", 3, "routerLink"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], ["colspan", "5", 1, "text-center", "p-4"]], template: function ContentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 1)(3, "h2");
      \u0275\u0275text(4, "\u5167\u5BB9\u7BA1\u7406");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275template(7, ContentListComponent_ng_template_7_Template, 11, 0, "ng-template", 4)(8, ContentListComponent_ng_template_8_Template, 16, 12, "ng-template", 5)(9, ContentListComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.contents)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c02));
    }
  }, dependencies: [RouterLink, Table, PrimeTemplate, ButtonDirective, ConfirmDialog, Tag, DatePipe, ContentTypePipe], styles: ["\n\n/*# sourceMappingURL=content-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentListComponent, { className: "ContentListComponent", filePath: "src/app/features/contents/components/content-list/content-list.component.ts", lineNumber: 13 });
})();

// src/app/features/contents/contents.module.ts
var routes = [
  { path: "", component: ContentListComponent },
  { path: "new", component: ContentFormComponent },
  { path: "edit/:id", component: ContentFormComponent }
];
var ContentsModule = class _ContentsModule {
  static \u0275fac = function ContentsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContentsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    HttpClientModule,
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
    DialogModule,
    EditorModule,
    CardModule,
    InputSwitchModule,
    DropdownModule
  ] });
};
export {
  ContentsModule
};
//# sourceMappingURL=chunk-UXZ32ENS.js.map
