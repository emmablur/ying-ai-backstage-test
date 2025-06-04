import {
  ButtonDirective,
  ButtonModule,
  RouterLink,
  RouterModule
} from "./chunk-NWPDUYPI.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-RPYRJURZ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/auth/access/access.component.ts
var _c0 = () => ["/"];
var AccessComponent = class _AccessComponent {
  static \u0275fac = function AccessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessComponent, selectors: [["app-access"]], decls: 14, vars: 2, consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], ["src", "assets/demo/images/access/logo-orange.svg", "alt", "Sakai logo", 1, "mb-5", "w-6rem", "flex-shrink-0"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", "flex", "flex-column", "align-items-center", 2, "border-radius", "53px"], [1, "grid", "flex", "flex-column", "align-items-center"], [1, "flex", "justify-content-center", "align-items-center", "bg-orange-500", "border-circle", 2, "width", "3.2rem", "height", "3.2rem"], [1, "text-50", "pi", "pi-fw", "pi-lock", "text-2xl"], [1, "text-900", "font-bold", "text-4xl", "lg:text-5xl", "mb-2"], [1, "text-600", "mb-5"], ["src", "assets/demo/images/access/asset-access.svg", "alt", "Access denied", "width", "80%", 1, "mb-5"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "label", "Go to Dashboard", 1, "p-button-text", 3, "routerLink"]], template: function AccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 8);
      \u0275\u0275text(9, "Access Denied");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, "You do not have the necessary permisions. Please contact admins.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "img", 10)(13, "button", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [RouterLink, ButtonDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessComponent, { className: "AccessComponent", filePath: "src/app/features/auth/access/access.component.ts", lineNumber: 7 });
})();

// src/app/features/auth/access/access-routing.module.ts
var AccessRoutingModule = class _AccessRoutingModule {
  static \u0275fac = function AccessRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccessRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([
    { path: "", component: AccessComponent }
  ]), RouterModule] });
};

// src/app/features/auth/access/access.module.ts
var AccessModule = class _AccessModule {
  static \u0275fac = function AccessModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccessModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AccessRoutingModule,
    ButtonModule
  ] });
};
export {
  AccessModule
};
//# sourceMappingURL=chunk-JCSZ7KHN.js.map
