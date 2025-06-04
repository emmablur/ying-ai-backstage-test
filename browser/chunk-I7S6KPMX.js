import {
  AdminUserService
} from "./chunk-THLVWF5B.js";
import {
  InputSwitch,
  InputSwitchModule
} from "./chunk-ALVUVNPT.js";
import {
  DialogModule
} from "./chunk-JDPANRLX.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  PaginatorModule,
  Table,
  TableModule,
  Tag,
  TagModule
} from "./chunk-7QK2XLDP.js";
import {
  BadgeModule
} from "./chunk-Q5MVH63Y.js";
import "./chunk-EJPJGXYU.js";
import {
  InputTextareaModule
} from "./chunk-B4O5ATSX.js";
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
} from "./chunk-7PPGXWRP.js";
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
} from "./chunk-NWPDUYPI.js";
import "./chunk-GQGTXWV2.js";
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
} from "./chunk-RPYRJURZ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/users/components/user-list/user-list.component.ts
var _c0 = () => [5, 10, 20];
var _c1 = (a0) => ["edit", a0];
function UserListComponent_ng_template_7_Template(rf, ctx) {
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
function UserListComponent_ng_template_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 7);
  }
}
function UserListComponent_ng_template_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 8);
  }
}
function UserListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, UserListComponent_ng_template_8_Conditional_6_Template, 1, 0, "p-tag", 7)(7, UserListComponent_ng_template_8_Conditional_7_Template, 1, 0, "p-tag", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 9);
    \u0275\u0275element(10, "button", 10);
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function UserListComponent_ng_template_8_Template_button_click_11_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(user_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r2.isActive ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, user_r2._id));
  }
}
function UserListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2, "\u5C1A\u7121\u4F7F\u7528\u8005\u8CC7\u6599.");
    \u0275\u0275elementEnd()();
  }
}
var UserListComponent = class _UserListComponent {
  userService;
  router;
  messageService;
  confirmationService;
  users = [];
  loading = false;
  // Pagination
  first = 0;
  rows = 10;
  totalRecords = 0;
  constructor(userService, router, messageService, confirmationService) {
    this.userService = userService;
    this.router = router;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.userService.apiAdminUserGet().subscribe({
      next: (response) => {
        this.users = response.data;
        this.totalRecords = response.data.length;
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u4F7F\u7528\u8005\u8CC7\u6599"
        });
        this.loading = false;
      }
    });
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }
  confirmDelete(user) {
    this.confirmationService.confirm({
      message: `\u78BA\u5B9A\u8981\u522A\u9664 ${user.name} \u7684\u5E33\u865F\u55CE\uFF1F`,
      header: "\u78BA\u8A8D\u522A\u9664",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.userService.apiAdminUserIdDelete(user._id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "\u6210\u529F",
              detail: "\u4F7F\u7528\u8005\u5DF2\u522A\u9664"
            });
            this.loadUsers();
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "\u932F\u8AA4",
              detail: "\u522A\u9664\u4F7F\u7528\u8005\u5931\u6557"
            });
          }
        });
      }
    });
  }
  static \u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserListComponent)(\u0275\u0275directiveInject(AdminUserService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 10, vars: 6, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], ["pButton", "", "label", "\u65B0\u589E\u4F7F\u7528\u8005", "icon", "pi pi-plus", "routerLink", "new", 1, "p-button-success"], ["styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["severity", "success", "value", "\u555F\u7528\u4E2D"], ["severity", "danger", "value", "\u5DF2\u522A\u9664"], [1, "flex", "gap-2"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", 3, "routerLink"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], ["colspan", "4", 1, "text-center", "p-4"]], template: function UserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 1)(3, "h2");
      \u0275\u0275text(4, "\u4F7F\u7528\u8005\u7BA1\u7406");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275template(7, UserListComponent_ng_template_7_Template, 9, 0, "ng-template", 4)(8, UserListComponent_ng_template_8_Template, 12, 6, "ng-template", 5)(9, UserListComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.users)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c0));
    }
  }, dependencies: [RouterLink, Table, PrimeTemplate, ButtonDirective, ConfirmDialog, Tag] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "src/app/features/users/components/user-list/user-list.component.ts", lineNumber: 12 });
})();

// src/app/features/users/components/user-form/user-form.component.ts
var _c02 = (a0) => ({ "ng-invalid ng-dirty": a0 });
function UserFormComponent_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, " \u59D3\u540D\u70BA\u5FC5\u586B\u6B04\u4F4D\uFF0C\u4E14\u81F3\u5C11\u9700\u8981 2 \u500B\u5B57\u5143 ");
    \u0275\u0275elementEnd();
  }
}
function UserFormComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, " \u8ACB\u8F38\u5165\u6709\u6548\u7684 Email \u5730\u5740 ");
    \u0275\u0275elementEnd();
  }
}
function UserFormComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, " \u8ACB\u8F38\u5165\u6709\u6548\u7684\u96FB\u8A71\u865F\u78BC ");
    \u0275\u0275elementEnd();
  }
}
function UserFormComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, " \u8ACB\u8F38\u5165\u6709\u6548\u7684\u5730\u5740 ");
    \u0275\u0275elementEnd();
  }
}
function UserFormComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "\u5E33\u865F\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-inputSwitch", 20);
    \u0275\u0275elementEnd();
  }
}
var UserFormComponent = class _UserFormComponent {
  fb;
  route;
  router;
  userService;
  messageService;
  userForm;
  isEditMode = false;
  userId = null;
  loading = false;
  constructor(fb, route, router, userService, messageService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.userService = userService;
    this.messageService = messageService;
    this.userForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: [
        { value: "", disabled: true },
        [Validators.required, Validators.email]
      ],
      phone: [""],
      address: [""],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.userId = this.route.snapshot.params["id"];
    if (this.userId) {
      this.isEditMode = true;
      this.loadUserData(this.userId);
    } else {
      this.isEditMode = false;
      this.userForm.patchValue({
        isActive: true
      });
      this.userForm.get("email")?.enable();
    }
  }
  loadUserData(id) {
    this.loading = true;
    this.userService.apiAdminUserIdGet(id).subscribe({
      next: (response) => {
        this.userForm.patchValue({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          address: response.data.address,
          isActive: response.data.isActive
        });
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u4F7F\u7528\u8005\u8CC7\u6599"
        });
        this.loading = false;
      }
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.loading = true;
      const userData = {
        name: this.userForm.get("name")?.value,
        email: this.userForm.get("email")?.value,
        phone: this.userForm.get("phone")?.value,
        address: this.userForm.get("address")?.value,
        isActive: this.userForm.get("isActive")?.value
      };
      if (this.isEditMode && this.userId) {
        this.userService.apiAdminUserIdPut(this.userId, userData).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "\u6210\u529F",
              detail: "\u4F7F\u7528\u8005\u66F4\u65B0\u6210\u529F"
            });
            this.router.navigate(["/users"]);
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "\u932F\u8AA4",
              detail: "\u4F7F\u7528\u8005\u66F4\u65B0\u5931\u6557"
            });
            this.loading = false;
          }
        });
      } else {
        this.userService.apiAdminUserPost(userData).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "\u6210\u529F",
              detail: "\u4F7F\u7528\u8005\u65B0\u589E\u6210\u529F"
            });
            this.router.navigate(["/users"]);
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "\u932F\u8AA4",
              detail: "\u4F7F\u7528\u8005\u65B0\u589E\u5931\u6557"
            });
            this.loading = false;
          }
        });
      }
    }
  }
  static \u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminUserService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["app-user-form"]], decls: 29, vars: 21, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], [1, "p-fluid", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], ["for", "email"], ["id", "email", "type", "text", "pInputText", "", "formControlName", "email", 3, "ngClass"], ["for", "phone"], ["id", "phone", "type", "text", "pInputText", "", "formControlName", "phone", 3, "ngClass"], ["for", "address"], ["id", "address", "type", "text", "pInputText", "", "formControlName", "address", 3, "ngClass"], ["class", "field flex justify-content-start align-items-center", 4, "ngIf"], [1, "flex", "justify-content-end", "gap-2", "mt-4"], ["pButton", "", "type", "button", "label", "\u53D6\u6D88", "routerLink", "/users", 1, "p-button-secondary"], ["pButton", "", "type", "submit", "label", "\u5132\u5B58", 3, "loading", "disabled"], [1, "p-error"], [1, "field", "flex", "justify-content-start", "align-items-center"], ["for", "isActive", 1, "mr-4"], ["formControlName", "isActive"]], template: function UserFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function UserFormComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(5, "div", 3)(6, "label", 4);
      \u0275\u0275text(7, "\u59D3\u540D");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 5);
      \u0275\u0275template(9, UserFormComponent_small_9_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 3)(11, "label", 7);
      \u0275\u0275text(12, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 8);
      \u0275\u0275template(14, UserFormComponent_small_14_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 3)(16, "label", 9);
      \u0275\u0275text(17, "\u96FB\u8A71");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 10);
      \u0275\u0275template(19, UserFormComponent_small_19_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 3)(21, "label", 11);
      \u0275\u0275text(22, "\u5730\u5740");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 12);
      \u0275\u0275template(24, UserFormComponent_small_24_Template, 2, 0, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, UserFormComponent_div_25_Template, 4, 0, "div", 13);
      \u0275\u0275elementStart(26, "div", 14);
      \u0275\u0275element(27, "button", 15)(28, "button", 16);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "\u7DE8\u8F2F" : "\u65B0\u589E", "\u4F7F\u7528\u8005");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.userForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c02, ((tmp_2_0 = ctx.userForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.userForm.get("name")) == null ? null : tmp_2_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.userForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.userForm.get("name")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c02, ((tmp_4_0 = ctx.userForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.userForm.get("email")) == null ? null : tmp_4_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.userForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.userForm.get("email")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c02, ((tmp_6_0 = ctx.userForm.get("phone")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.userForm.get("phone")) == null ? null : tmp_6_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.userForm.get("phone")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.userForm.get("phone")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c02, ((tmp_8_0 = ctx.userForm.get("address")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.userForm.get("address")) == null ? null : tmp_8_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.userForm.get("address")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.userForm.get("address")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode);
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.userForm.invalid);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, ButtonDirective, InputText, InputSwitch] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src/app/features/users/components/user-form/user-form.component.ts", lineNumber: 12 });
})();

// src/app/features/users/users.module.ts
var routes = [
  { path: "", component: UserListComponent },
  { path: "new", component: UserFormComponent },
  { path: "edit/:id", component: UserFormComponent }
];
var UsersModule = class _UsersModule {
  static \u0275fac = function UsersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
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
  UsersModule
};
//# sourceMappingURL=chunk-I7S6KPMX.js.map
