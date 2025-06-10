import {
  AdminAccountService
} from "./chunk-JUXCCURE.js";
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T5SPLERN.js";
import "./chunk-4MWRP73S.js";

// src/app/features/accounts/components/account-list/account-list.component.ts
var _c0 = () => [5, 10, 20];
var _c1 = (a0) => ["edit", a0];
function AccountListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u59D3\u540D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u64CD\u4F5C");
    \u0275\u0275elementEnd()();
  }
}
function AccountListComponent_ng_template_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 7);
  }
}
function AccountListComponent_ng_template_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 8);
  }
}
function AccountListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, AccountListComponent_ng_template_8_Conditional_6_Template, 1, 0, "p-tag", 7)(7, AccountListComponent_ng_template_8_Conditional_7_Template, 1, 0, "p-tag", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 9);
    \u0275\u0275element(10, "button", 10);
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function AccountListComponent_ng_template_8_Template_button_click_11_listener() {
      const account_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(account_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 12);
    \u0275\u0275listener("click", function AccountListComponent_ng_template_8_Template_button_click_12_listener() {
      const account_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendTestEmail(account_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const account_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(account_r2.isActive ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, account_r2._id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !account_r2.isActive);
  }
}
function AccountListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2, "\u5C1A\u7121\u5E33\u6236\u8CC7\u6599.");
    \u0275\u0275elementEnd()();
  }
}
var AccountListComponent = class _AccountListComponent {
  accountService;
  router;
  messageService;
  confirmationService;
  accounts = [];
  loading = false;
  // Pagination
  first = 0;
  rows = 10;
  totalRecords = 0;
  constructor(accountService, router, messageService, confirmationService) {
    this.accountService = accountService;
    this.router = router;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.loadAccounts();
  }
  loadAccounts() {
    this.loading = true;
    this.accountService.apiAdminAccountGet().subscribe({
      next: (response) => {
        this.accounts = response.data;
        this.totalRecords = response.data.length;
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load accounts"
        });
        this.loading = false;
      }
    });
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }
  confirmDelete(account) {
    this.confirmationService.confirm({
      message: `\u78BA\u5B9A\u8981\u522A\u9664 ${account.name} \u7684\u5E33\u6236\u55CE\uFF1F`,
      header: "\u78BA\u8A8D\u522A\u9664",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.accountService.apiAdminAccountIdDelete(account._id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Success",
              detail: "\u5E33\u6236\u5DF2\u522A\u9664"
            });
            this.loadAccounts();
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: "\u522A\u9664\u5E33\u6236\u5931\u6557"
            });
          }
        });
      }
    });
  }
  sendTestEmail(account) {
    this.loading = true;
    this.accountService.apiAdminAccountIdSendTestEmailPost(account._id).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: "\u6E2C\u8A66\u90F5\u4EF6\u5DF2\u767C\u9001"
        });
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "\u767C\u9001\u6E2C\u8A66\u90F5\u4EF6\u5931\u6557"
        });
        this.loading = false;
      }
    });
  }
  static \u0275fac = function AccountListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountListComponent)(\u0275\u0275directiveInject(AdminAccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountListComponent, selectors: [["app-account-list"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 10, vars: 6, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], ["pButton", "", "label", "\u65B0\u589E\u5E33\u6236", "icon", "pi pi-plus", "routerLink", "new", 1, "p-button-success"], ["styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["severity", "success", "value", "\u555F\u7528\u4E2D"], ["severity", "secondary", "value", "\u5DF2\u522A\u9664"], [1, "flex", "gap-2"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", 3, "routerLink"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], ["pButton", "", "icon", "pi pi-envelope", 1, "p-button-rounded", "p-button-info", 3, "click", "disabled"], ["colspan", "4", 1, "text-center", "p-4"]], template: function AccountListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 1)(3, "h2");
      \u0275\u0275text(4, "\u5E33\u6236\u7BA1\u7406");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275template(7, AccountListComponent_ng_template_7_Template, 9, 0, "ng-template", 4)(8, AccountListComponent_ng_template_8_Template, 13, 7, "ng-template", 5)(9, AccountListComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.accounts)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c0));
    }
  }, dependencies: [RouterLink, Table, PrimeTemplate, ButtonDirective, ConfirmDialog, Tag] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountListComponent, { className: "AccountListComponent", filePath: "src/app/features/accounts/components/account-list/account-list.component.ts", lineNumber: 12 });
})();

// src/app/features/accounts/components/account-form/account-form.component.ts
var _c02 = (a0) => ({ "ng-invalid ng-dirty": a0 });
function AccountFormComponent_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, " \u59D3\u540D\u70BA\u5FC5\u586B\u6B04\u4F4D\uFF0C\u4E14\u81F3\u5C11\u9700\u8981 2 \u500B\u5B57\u5143 ");
    \u0275\u0275elementEnd();
  }
}
function AccountFormComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, " \u5E33\u865F\u70BA\u5FC5\u586B\u6B04\u4F4D\uFF0C\u4E14\u81F3\u5C11\u9700\u8981 3 \u500B\u5B57\u5143 ");
    \u0275\u0275elementEnd();
  }
}
function AccountFormComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, " \u8ACB\u8F38\u5165\u6709\u6548\u7684 Email \u5730\u5740 ");
    \u0275\u0275elementEnd();
  }
}
function AccountFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17);
    \u0275\u0275text(2, "\u5E33\u6236\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-inputSwitch", 18);
    \u0275\u0275elementEnd();
  }
}
var AccountFormComponent = class _AccountFormComponent {
  fb;
  route;
  router;
  accountService;
  messageService;
  accountForm;
  isEditMode = false;
  accountId = null;
  loading = false;
  constructor(fb, route, router, accountService, messageService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.messageService = messageService;
    this.accountForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      account: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.accountId = this.route.snapshot.params["id"];
    if (this.accountId) {
      this.isEditMode = true;
      this.loadAccountData(this.accountId);
    }
  }
  loadAccountData(id) {
    this.loading = true;
    this.accountService.apiAdminAccountIdGet(id).subscribe({
      next: (response) => {
        this.accountForm.patchValue({
          name: response.data.name,
          email: response.data.email,
          account: response.data.account,
          isActive: response.data.isActive
        });
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "\u7121\u6CD5\u8F09\u5165\u5E33\u6236\u8CC7\u6599"
        });
        this.loading = false;
      }
    });
  }
  onSubmit() {
    if (this.accountForm.valid) {
      this.loading = true;
      const accountData = this.accountForm.value;
      const request = this.isEditMode && this.accountId ? this.accountService.apiAdminAccountIdPut(this.accountId, accountData) : this.accountService.apiAdminAccountPost(accountData);
      request.subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: `Account ${this.isEditMode ? "updated" : "created"} successfully`
          });
          this.router.navigate(["/accounts"]);
        },
        error: () => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: `Failed to ${this.isEditMode ? "update" : "create"} account`
          });
          this.loading = false;
        }
      });
    }
  }
  static \u0275fac = function AccountFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminAccountService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountFormComponent, selectors: [["app-account-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 24, vars: 17, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], [1, "p-fluid", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "account"], ["id", "account", "type", "text", "pInputText", "", "formControlName", "account", 3, "ngClass"], ["for", "email"], ["id", "email", "type", "text", "pInputText", "", "formControlName", "email", 3, "ngClass"], ["class", "field flex justify-content-start align-items-center", 4, "ngIf"], [1, "flex", "justify-content-end", "gap-2", "mt-4"], ["pButton", "", "type", "button", "label", "\u53D6\u6D88", "routerLink", "/accounts", 1, "p-button-secondary"], ["pButton", "", "type", "submit", "label", "\u5132\u5B58", 3, "loading", "disabled"], [1, "p-error"], [1, "field", "flex", "justify-content-start", "align-items-center"], ["for", "isActive", 1, "mr-4"], ["formControlName", "isActive"]], template: function AccountFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function AccountFormComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(5, "div", 3)(6, "label", 4);
      \u0275\u0275text(7, "\u59D3\u540D");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 5);
      \u0275\u0275template(9, AccountFormComponent_small_9_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 3)(11, "label", 7);
      \u0275\u0275text(12, "\u5E33\u865F");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 8);
      \u0275\u0275template(14, AccountFormComponent_small_14_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
      \u0275\u0275text(17, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 10);
      \u0275\u0275template(19, AccountFormComponent_small_19_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, AccountFormComponent_div_20_Template, 4, 0, "div", 11);
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275element(22, "button", 13)(23, "button", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "\u7DE8\u8F2F" : "\u65B0\u589E", "\u5E33\u6236");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.accountForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c02, ((tmp_2_0 = ctx.accountForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.accountForm.get("name")) == null ? null : tmp_2_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.accountForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.accountForm.get("name")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c02, ((tmp_4_0 = ctx.accountForm.get("account")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.accountForm.get("account")) == null ? null : tmp_4_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.accountForm.get("account")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.accountForm.get("account")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c02, ((tmp_6_0 = ctx.accountForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.accountForm.get("email")) == null ? null : tmp_6_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.accountForm.get("email")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.accountForm.get("email")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode);
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.accountForm.invalid);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, ButtonDirective, InputText, InputSwitch] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountFormComponent, { className: "AccountFormComponent", filePath: "src/app/features/accounts/components/account-form/account-form.component.ts", lineNumber: 13 });
})();

// src/app/features/accounts/accounts.module.ts
var routes = [
  { path: "", component: AccountListComponent },
  { path: "new", component: AccountFormComponent },
  { path: "edit/:id", component: AccountFormComponent }
];
var AccountsModule = class _AccountsModule {
  static \u0275fac = function AccountsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountsModule });
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
    DialogModule,
    InputSwitchModule
  ] });
};
export {
  AccountsModule
};
//# sourceMappingURL=chunk-ZGJUNMWD.js.map
