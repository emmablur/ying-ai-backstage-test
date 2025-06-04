import {
  Divider,
  DividerModule
} from "./chunk-EKIJZBO5.js";
import {
  Password,
  PasswordModule
} from "./chunk-HRSB6MXN.js";
import {
  AdminAuthService
} from "./chunk-JHFWSBOM.js";
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Toast,
  ToastModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7PPGXWRP.js";
import {
  ActivatedRoute,
  ButtonDirective,
  ButtonModule,
  MessageService,
  PrimeTemplate,
  Router,
  RouterModule
} from "./chunk-NWPDUYPI.js";
import "./chunk-GQGTXWV2.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  finalize,
  inject,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-RPYRJURZ.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/auth/reset-password/reset-password.component.ts
var _c0 = (a0) => ({ "ng-invalid ng-dirty": a0 });
function ResetPasswordComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
    \u0275\u0275elementStart(1, "p", 16);
    \u0275\u0275text(2, "\u5BC6\u78BC\u9808\u7B26\u5408\uFF1A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 17)(4, "li");
    \u0275\u0275text(5, "\u81F3\u5C11 8 \u500B\u5B57\u7B26");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "\u81F3\u5C11\u5305\u542B\u4E00\u500B\u5927\u5BEB\u5B57\u6BCD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "\u81F3\u5C11\u5305\u542B\u4E00\u500B\u5C0F\u5BEB\u5B57\u6BCD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "\u81F3\u5C11\u5305\u542B\u4E00\u500B\u6578\u5B57");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_small_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u5FC5\u9808\u8F38\u5165\u5BC6\u78BC");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_small_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u5BC6\u78BC\u9577\u5EA6\u5FC5\u9808\u5927\u65BC 8 \u500B\u5B57\u7B26");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_small_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u5BC6\u78BC\u5FC5\u9808\u5305\u542B\u5927\u5BEB\u5B57\u6BCD\u3001\u5C0F\u5BEB\u5B57\u6BCD\u548C\u6578\u5B57 ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275template(1, ResetPasswordComponent_small_15_span_1_Template, 2, 0, "span", 19)(2, ResetPasswordComponent_small_15_span_2_Template, 2, 0, "span", 19)(3, ResetPasswordComponent_small_15_span_3_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.resetPasswordForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.resetPasswordForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.resetPasswordForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["passwordStrength"]);
  }
}
function ResetPasswordComponent_small_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u5FC5\u9808\u78BA\u8A8D\u5BC6\u78BC");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_small_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u5169\u6B21\u5BC6\u78BC\u4E0D\u4E00\u81F4 ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275template(1, ResetPasswordComponent_small_19_span_1_Template, 2, 0, "span", 19)(2, ResetPasswordComponent_small_19_span_2_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.resetPasswordForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.resetPasswordForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["passwordMismatch"]);
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  adminAuthService = inject(AdminAuthService);
  messageService = inject(MessageService);
  resetPasswordForm;
  token = null;
  isSubmitting = false;
  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          this.createPasswordStrengthValidator()
        ]
      ],
      confirmPassword: ["", Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
    this.token = this.route.snapshot.queryParamMap.get("token");
    if (!this.token) {
      this.messageService.add({
        severity: "error",
        summary: "\u7121\u6548\u9023\u7D50",
        detail: "\u5BC6\u78BC\u91CD\u8A2D\u9023\u7D50\u7121\u6548\u6216\u5DF2\u904E\u671F\uFF0C\u8ACB\u91CD\u65B0\u7533\u8ACB"
      });
      setTimeout(() => {
        this.router.navigate(["/auth/login"]);
      }, 3e3);
    }
  }
  // 密碼強度驗證器
  createPasswordStrengthValidator() {
    return (control) => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
      return !passwordValid ? { passwordStrength: true } : null;
    };
  }
  // 確認密碼匹配驗證
  passwordMatchValidator(control) {
    const password = control.get("password")?.value;
    const confirmPassword = control.get("confirmPassword")?.value;
    if (password !== confirmPassword) {
      control.get("confirmPassword")?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      const confirmPasswordControl = control.get("confirmPassword");
      if (confirmPasswordControl?.hasError("passwordMismatch")) {
        const errors = __spreadValues({}, confirmPasswordControl.errors);
        delete errors["passwordMismatch"];
        confirmPasswordControl.setErrors(Object.keys(errors).length ? errors : null);
      }
      return null;
    }
  }
  // 重設密碼
  onSubmit() {
    if (this.resetPasswordForm.invalid) {
      this.markFormGroupTouched(this.resetPasswordForm);
      return;
    }
    if (!this.token) {
      this.messageService.add({
        severity: "error",
        summary: "\u7121\u6548\u8ACB\u6C42",
        detail: "\u7F3A\u5C11\u91CD\u8A2D\u5BC6\u78BC\u7684Token"
      });
      return;
    }
    this.isSubmitting = true;
    const password = this.resetPasswordForm.get("password")?.value;
    const request = {
      token: this.token,
      password
    };
    this.adminAuthService.apiAdminAuthResetPasswordPost(request).pipe(finalize(() => this.isSubmitting = false)).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "\u6210\u529F",
          detail: "\u5BC6\u78BC\u5DF2\u91CD\u8A2D\uFF0C\u8ACB\u4F7F\u7528\u65B0\u5BC6\u78BC\u767B\u5165"
        });
        setTimeout(() => {
          this.router.navigate(["/auth/login"]);
        }, 3e3);
      },
      error: (error) => {
        let errorMessage = "\u5BC6\u78BC\u91CD\u8A2D\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66";
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        this.messageService.add({
          severity: "error",
          summary: "\u5BC6\u78BC\u91CD\u8A2D\u5931\u6557",
          detail: errorMessage
        });
      }
    });
  }
  // 標記表單所有控件為已觸碰，顯示所有錯誤消息
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 23, vars: 13, consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(\n          180deg,\n          var(--primary-color) 10%,\n          rgba(33, 150, 243, 0) 30%\n        )"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", 2, "border-radius", "53px"], [1, "text-center", "mb-5"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], [1, "text-600", "font-medium"], [3, "ngSubmit", "formGroup"], ["for", "password", 1, "block", "text-900", "text-xl", "font-medium", "mb-2"], ["id", "password", "formControlName", "password", "styleClass", "mb-2", "inputStyleClass", "w-full p-3 md:w-30rem", 3, "toggleMask", "ngClass"], ["pTemplate", "footer"], ["class", "p-error block mb-3", 4, "ngIf"], ["for", "confirmPassword", 1, "block", "text-900", "text-xl", "font-medium", "mb-2"], ["id", "confirmPassword", "formControlName", "confirmPassword", "styleClass", "mb-2", "inputStyleClass", "w-full p-3 md:w-30rem", 3, "toggleMask", "ngClass"], [1, "flex", "align-items-center", "justify-content-center", "mt-5"], ["pButton", "", "pRipple", "", "type", "submit", "label", "\u9001\u51FA", 1, "w-full", "p-3", "text-xl", 3, "loading", "disabled"], [1, "mt-2"], [1, "pl-2", "ml-2", "mt-0", "text-xs"], [1, "p-error", "block", "mb-3"], [4, "ngIf"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, "\u91CD\u8A2D\u5BC6\u78BC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "\u8ACB\u8A2D\u5B9A\u60A8\u7684\u65B0\u5BC6\u78BC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div")(11, "label", 8);
      \u0275\u0275text(12, "\u65B0\u5BC6\u78BC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-password", 9);
      \u0275\u0275template(14, ResetPasswordComponent_ng_template_14_Template, 12, 0, "ng-template", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, ResetPasswordComponent_small_15_Template, 4, 3, "small", 11);
      \u0275\u0275elementStart(16, "label", 12);
      \u0275\u0275text(17, "\u78BA\u8A8D\u5BC6\u78BC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-password", 13);
      \u0275\u0275template(19, ResetPasswordComponent_small_19_Template, 3, 2, "small", 11);
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275element(21, "button", 15);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(22, "p-toast");
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.resetPasswordForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("toggleMask", true)("ngClass", \u0275\u0275pureFunction1(9, _c0, ((tmp_2_0 = ctx.resetPasswordForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.resetPasswordForm.get("password")) == null ? null : tmp_2_0.touched)));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.resetPasswordForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.resetPasswordForm.get("password")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("toggleMask", true)("ngClass", \u0275\u0275pureFunction1(11, _c0, ((tmp_5_0 = ctx.resetPasswordForm.get("confirmPassword")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.resetPasswordForm.get("confirmPassword")) == null ? null : tmp_5_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.resetPasswordForm.get("confirmPassword")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.resetPasswordForm.get("confirmPassword")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("loading", ctx.isSubmitting)("disabled", ctx.resetPasswordForm.invalid || ctx.isSubmitting);
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonDirective, PrimeTemplate, Password, Toast, Divider] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/features/auth/reset-password/reset-password.component.ts", lineNumber: 20 });
})();

// src/app/features/auth/auth-routing.module.ts
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([
    {
      path: "error",
      loadChildren: () => import("./chunk-CHV7DMCH.js").then((m) => m.ErrorModule)
    },
    {
      path: "access",
      loadChildren: () => import("./chunk-JCSZ7KHN.js").then((m) => m.AccessModule)
    },
    {
      path: "login",
      loadChildren: () => import("./chunk-HFKEMQOX.js").then((m) => m.LoginModule)
    },
    { path: "reset-password", component: ResetPasswordComponent },
    { path: "**", redirectTo: "/notfound" }
  ]), RouterModule] });
};

// src/app/features/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    DividerModule
  ] });
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-VRY7EFBE.js.map
