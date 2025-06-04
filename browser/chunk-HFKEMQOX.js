import {
  Password,
  PasswordModule
} from "./chunk-HRSB6MXN.js";
import {
  AuthService
} from "./chunk-X3OAKXI7.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-JRSVI6GG.js";
import {
  AdminAuthService
} from "./chunk-JHFWSBOM.js";
import {
  Dialog,
  DialogModule
} from "./chunk-JDPANRLX.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Toast,
  ToastModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7PPGXWRP.js";
import {
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RPYRJURZ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/auth/login/login.component.ts
var _c0 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c1 = () => ({ width: "450px" });
function LoginComponent_small_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_small_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275template(1, LoginComponent_small_15_span_1_Template, 2, 0, "span", 27)(2, LoginComponent_small_15_span_2_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function LoginComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function LoginComponent_ng_template_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.forgotPasswordDialog = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 29);
    \u0275\u0275listener("click", function LoginComponent_ng_template_34_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSendPasswordReset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.isSendingPasswordReset);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r0.isSendingPasswordReset)("disabled", ctx_r0.isSendingPasswordReset);
  }
}
var LoginComponent = class _LoginComponent {
  authService = inject(AuthService);
  adminAuthService = inject(AdminAuthService);
  router = inject(Router);
  messageService = inject(MessageService);
  fb = inject(FormBuilder);
  valCheck = ["remember"];
  loginForm;
  isLoading = false;
  // 忘記密碼相關
  forgotPasswordDialog = false;
  forgotPasswordEmail = "";
  isSendingPasswordReset = false;
  email;
  password;
  constructor() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      rememberMe: [false]
    });
  }
  // 顯示忘記密碼對話框
  showForgotPasswordDialog() {
    this.forgotPasswordEmail = this.loginForm.get("email")?.value || "";
    this.forgotPasswordDialog = true;
  }
  // 發送忘記密碼請求
  onSendPasswordReset() {
    if (!this.forgotPasswordEmail || !this.validateEmail(this.forgotPasswordEmail)) {
      this.messageService.add({
        severity: "error",
        summary: "\u932F\u8AA4",
        detail: "\u8ACB\u8F38\u5165\u6709\u6548\u7684 Email \u5730\u5740"
      });
      return;
    }
    this.isSendingPasswordReset = true;
    const request = {
      email: this.forgotPasswordEmail
    };
    this.adminAuthService.apiAdminAuthForgotPasswordPost(request).pipe(finalize(() => {
      this.isSendingPasswordReset = false;
    })).subscribe({
      next: () => {
        this.forgotPasswordDialog = false;
        this.messageService.add({
          severity: "success",
          summary: "\u5DF2\u767C\u9001",
          detail: "\u91CD\u8A2D\u5BC6\u78BC\u9023\u7D50\u5DF2\u767C\u9001\u81F3\u60A8\u7684\u4FE1\u7BB1\uFF0C\u8ACB\u67E5\u6536\u4E26\u6309\u7167\u6307\u793A\u9032\u884C\u64CD\u4F5C"
        });
      },
      error: (error) => {
        let errorMessage = "\u5BC6\u78BC\u91CD\u8A2D\u8ACB\u6C42\u767C\u9001\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66";
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        this.messageService.add({
          severity: "error",
          summary: "\u767C\u9001\u5931\u6557",
          detail: errorMessage
        });
      }
    });
  }
  // 驗證 Email 格式
  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  onLogin() {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      this.messageService.add({
        severity: "error",
        summary: "Invalid Form",
        detail: "Please fill in all required fields correctly."
      });
      return;
    }
    this.isLoading = true;
    const { email, password, rememberMe } = this.loginForm.value;
    this.authService.login(email, password, rememberMe).pipe(finalize(() => this.isLoading = false)).subscribe({
      next: (response) => {
        if ("needsPasswordSetup" in response && response.needsPasswordSetup) {
          this.messageService.add({
            severity: "info",
            summary: "\u5BC6\u78BC\u8A2D\u5B9A",
            detail: response.message || "\u5BC6\u78BC\u8A2D\u5B9A\u9023\u7D50\u5DF2\u767C\u9001\u81F3\u60A8\u7684\u4FE1\u7BB1\uFF0C\u8ACB\u4F7F\u7528\u8A72\u9023\u7D50\u8A2D\u5B9A\u60A8\u7684\u5BC6\u78BC"
          });
          return;
        }
        this.messageService.add({
          severity: "success",
          summary: "Login Successful",
          detail: "Welcome back!"
        });
        this.router.navigate(["/"]);
      },
      error: (error) => {
        let errorMessage = "An error occurred during login. Please try again.";
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        this.messageService.add({
          severity: "error",
          summary: "Login Failed",
          detail: errorMessage
        });
      }
    });
  }
  // Helper method to mark all form controls as touched
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 36, vars: 21, consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(\n          180deg,\n          var(--primary-color) 10%,\n          rgba(33, 150, 243, 0) 30%\n        )"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", 2, "border-radius", "53px"], [1, "text-center", "mb-5"], ["src", "assets/demo/images/login/avatar.png", "alt", "Image", "height", "50", 1, "mb-3"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], [1, "text-600", "font-medium"], [3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-900", "text-xl", "font-medium", "mb-2"], ["id", "email", "formControlName", "email", "type", "text", "placeholder", "Email address", "pInputText", "", 1, "w-full", "md:w-30rem", "mb-2", 2, "padding", "1rem", 3, "ngClass"], ["class", "p-error block mb-3", 4, "ngIf"], ["for", "password", 1, "block", "text-900", "font-medium", "text-xl", "mb-2"], ["id", "password", "formControlName", "password", "placeholder", "Password", "styleClass", "mb-2", "inputStyleClass", "w-full p-3 md:w-30rem", 3, "toggleMask", "ngClass"], [1, "flex", "align-items-center", "justify-content-between", "mb-5", "gap-5"], [1, "flex", "align-items-center"], ["formControlName", "rememberMe", "id", "rememberme1", "styleClass", "mr-2", 3, "binary"], ["for", "rememberme1"], [1, "font-medium", "no-underline", "ml-2", "text-right", "cursor-pointer", 2, "color", "var(--primary-color)", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Sign In", 1, "w-full", "p-3", "text-xl", 3, "loading", "disabled"], ["header", "\u5FD8\u8A18\u5BC6\u78BC", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "p-fluid"], [1, "field"], ["for", "forgotPasswordEmail"], ["id", "forgotPasswordEmail", "type", "email", "pInputText", "", 1, "w-full", "mt-2", 3, "ngModelChange", "ngModel"], ["pTemplate", "footer"], [1, "p-error", "block", "mb-3"], [4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "\u53D6\u6D88", 1, "p-button-outlined", "p-button-secondary", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "label", "\u767C\u9001\u91CD\u8A2D\u9023\u7D50", 3, "click", "loading", "disabled"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275text(7, "Welcome!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9, "Sign in to continue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275elementStart(11, "div")(12, "label", 9);
      \u0275\u0275text(13, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 10);
      \u0275\u0275template(15, LoginComponent_small_15_Template, 3, 2, "small", 11);
      \u0275\u0275elementStart(16, "label", 12);
      \u0275\u0275text(17, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-password", 13);
      \u0275\u0275template(19, LoginComponent_small_19_Template, 2, 0, "small", 11);
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 15);
      \u0275\u0275element(22, "p-checkbox", 16);
      \u0275\u0275elementStart(23, "label", 17);
      \u0275\u0275text(24, "Remember me");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "a", 18);
      \u0275\u0275listener("click", function LoginComponent_Template_a_click_25_listener() {
        return ctx.showForgotPasswordDialog();
      });
      \u0275\u0275text(26, "\u5FD8\u8A18\u5BC6\u78BC?");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "button", 19);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(28, "p-dialog", 20);
      \u0275\u0275twoWayListener("visibleChange", function LoginComponent_Template_p_dialog_visibleChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.forgotPasswordDialog, $event) || (ctx.forgotPasswordDialog = $event);
        return $event;
      });
      \u0275\u0275elementStart(29, "div", 21)(30, "div", 22)(31, "label", 23);
      \u0275\u0275text(32, "\u8ACB\u8F38\u5165\u60A8\u7684 Email\uFF0C\u6211\u5011\u5C07\u767C\u9001\u91CD\u8A2D\u5BC6\u78BC\u9023\u7D50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.forgotPasswordEmail, $event) || (ctx.forgotPasswordEmail = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, LoginComponent_ng_template_34_Template, 2, 3, "ng-template", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "p-toast");
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c0, ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("toggleMask", true)("ngClass", \u0275\u0275pureFunction1(18, _c0, ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("binary", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("loading", ctx.isLoading)("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.forgotPasswordDialog);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.forgotPasswordEmail);
    }
  }, dependencies: [NgClass, NgIf, ButtonDirective, PrimeTemplate, Checkbox, InputText, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, Password, Toast, Dialog], styles: ["\n\n[_nghost-%COMP%]     .pi-eye, \n[_nghost-%COMP%]     .pi-eye-slash {\n  transform: scale(1.6);\n  margin-right: 1rem;\n  color: var(--primary-color) !important;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 25 });
})();

// src/app/features/auth/login/login-routing.module.ts
var LoginRoutingModule = class _LoginRoutingModule {
  static \u0275fac = function LoginRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([
    { path: "", component: LoginComponent }
  ]), RouterModule] });
};

// src/app/features/auth/login/login.module.ts
var LoginModule = class _LoginModule {
  static \u0275fac = function LoginModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [MessageService], imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastModule,
    DialogModule
  ] });
};
export {
  LoginModule
};
//# sourceMappingURL=chunk-HFKEMQOX.js.map
