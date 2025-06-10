import {
  Divider,
  DividerModule
} from "./chunk-ZXUM4ILQ.js";
import {
  AdminMenusService,
  CategoryService
} from "./chunk-SCDWBYXY.js";
import "./chunk-DT3GFCNP.js";
import "./chunk-VUC5HP7I.js";
import "./chunk-NL6JKAZG.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-YW6U2O3O.js";
import "./chunk-PZBKEVDN.js";
import {
  Card,
  CardModule
} from "./chunk-RVIFAY66.js";
import "./chunk-JUXCCURE.js";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Dropdown,
  DropdownModule,
  Overlay,
  OverlayModule,
  Scroller,
  ScrollerModule,
  SearchIcon,
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
  InputNumber,
  InputNumberModule,
  InputTextarea,
  InputTextareaModule,
  PlusIcon
} from "./chunk-FNEXNUDF.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-AZVP65F4.js";
import {
  CheckIcon,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  InputText,
  InputTextModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  TimesCircleIcon,
  TimesIcon,
  Toast,
  ToastModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-5OSS66PJ.js";
import {
  ActivatedRoute,
  AutoFocus,
  AutoFocusModule,
  BaseIcon,
  Button,
  ButtonDirective,
  ButtonModule,
  ConfirmationService,
  DomHandler,
  FilterService,
  Footer,
  Header,
  MessageService,
  ObjectUtils,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  Ripple,
  RippleModule,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  SpinnerIcon,
  TranslationKeys,
  TreeDragDropService,
  UniqueComponentId
} from "./chunk-SO3O3ZSH.js";
import "./chunk-VE2DDJNX.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-T5SPLERN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-dragdrop.mjs
var Draggable = class _Draggable {
  el;
  zone;
  renderer;
  scope;
  /**
   * Defines the cursor style.
   * @group Props
   */
  dragEffect;
  /**
   * Selector to define the drag handle, by default anywhere on the target element is a drag handle to start dragging.
   * @group Props
   */
  dragHandle;
  /**
   * Callback to invoke when drag begins.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragStart = new EventEmitter();
  /**
   * Callback to invoke when drag ends.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragEnd = new EventEmitter();
  /**
   * Callback to invoke on dragging.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDrag = new EventEmitter();
  handle;
  dragListener;
  mouseDownListener;
  mouseUpListener;
  _pDraggableDisabled = false;
  constructor(el, zone, renderer) {
    this.el = el;
    this.zone = zone;
    this.renderer = renderer;
  }
  get pDraggableDisabled() {
    return this._pDraggableDisabled;
  }
  set pDraggableDisabled(_pDraggableDisabled) {
    this._pDraggableDisabled = _pDraggableDisabled;
    if (this._pDraggableDisabled) {
      this.unbindMouseListeners();
    } else {
      this.el.nativeElement.draggable = true;
      this.bindMouseListeners();
    }
  }
  ngAfterViewInit() {
    if (!this.pDraggableDisabled) {
      this.el.nativeElement.draggable = true;
      this.bindMouseListeners();
    }
  }
  bindDragListener() {
    if (!this.dragListener) {
      this.zone.runOutsideAngular(() => {
        this.dragListener = this.renderer.listen(this.el.nativeElement, "drag", this.drag.bind(this));
      });
    }
  }
  unbindDragListener() {
    if (this.dragListener) {
      this.zone.runOutsideAngular(() => {
        this.dragListener && this.dragListener();
        this.dragListener = null;
      });
    }
  }
  bindMouseListeners() {
    if (!this.mouseDownListener && !this.mouseUpListener) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.mousedown.bind(this));
        this.mouseUpListener = this.renderer.listen(this.el.nativeElement, "mouseup", this.mouseup.bind(this));
      });
    }
  }
  unbindMouseListeners() {
    if (this.mouseDownListener && this.mouseUpListener) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener && this.mouseDownListener();
        this.mouseUpListener && this.mouseUpListener();
        this.mouseDownListener = null;
        this.mouseUpListener = null;
      });
    }
  }
  drag(event) {
    this.onDrag.emit(event);
  }
  dragStart(event) {
    if (this.allowDrag() && !this.pDraggableDisabled) {
      if (this.dragEffect) {
        event.dataTransfer.effectAllowed = this.dragEffect;
      }
      event.dataTransfer.setData("text", this.scope);
      this.onDragStart.emit(event);
      this.bindDragListener();
    } else {
      event.preventDefault();
    }
  }
  dragEnd(event) {
    this.onDragEnd.emit(event);
    this.unbindDragListener();
  }
  mousedown(event) {
    this.handle = event.target;
  }
  mouseup(event) {
    this.handle = null;
  }
  allowDrag() {
    if (this.dragHandle && this.handle) return DomHandler.matches(this.handle, this.dragHandle);
    else return true;
  }
  ngOnDestroy() {
    this.unbindDragListener();
    this.unbindMouseListeners();
  }
  static \u0275fac = function Draggable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Draggable)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Draggable,
    selectors: [["", "pDraggable", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Draggable_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("dragstart", function Draggable_dragstart_HostBindingHandler($event) {
          return ctx.dragStart($event);
        })("dragend", function Draggable_dragend_HostBindingHandler($event) {
          return ctx.dragEnd($event);
        });
      }
    },
    inputs: {
      scope: [0, "pDraggable", "scope"],
      dragEffect: "dragEffect",
      dragHandle: "dragHandle",
      pDraggableDisabled: "pDraggableDisabled"
    },
    outputs: {
      onDragStart: "onDragStart",
      onDragEnd: "onDragEnd",
      onDrag: "onDrag"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Draggable, [{
    type: Directive,
    args: [{
      selector: "[pDraggable]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    scope: [{
      type: Input,
      args: ["pDraggable"]
    }],
    dragEffect: [{
      type: Input
    }],
    dragHandle: [{
      type: Input
    }],
    onDragStart: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    onDrag: [{
      type: Output
    }],
    pDraggableDisabled: [{
      type: Input
    }],
    dragStart: [{
      type: HostListener,
      args: ["dragstart", ["$event"]]
    }],
    dragEnd: [{
      type: HostListener,
      args: ["dragend", ["$event"]]
    }]
  });
})();
var Droppable = class _Droppable {
  el;
  zone;
  renderer;
  scope;
  /**
   * Whether the element is droppable, useful for conditional cases.
   * @group Props
   */
  pDroppableDisabled = false;
  /**
   * Defines the cursor style, valid values are none, copy, move, link, copyMove, copyLink, linkMove and all.
   * @group Props
   */
  dropEffect;
  /**
   * Callback to invoke when a draggable enters drop area.
   * @group Emits
   */
  onDragEnter = new EventEmitter();
  /**
   * Callback to invoke when a draggable leave drop area.
   * @group Emits
   */
  onDragLeave = new EventEmitter();
  /**
   * Callback to invoke when a draggable is dropped onto drop area.
   * @group Emits
   */
  onDrop = new EventEmitter();
  constructor(el, zone, renderer) {
    this.el = el;
    this.zone = zone;
    this.renderer = renderer;
  }
  dragOverListener;
  ngAfterViewInit() {
    if (!this.pDroppableDisabled) {
      this.bindDragOverListener();
    }
  }
  bindDragOverListener() {
    if (!this.dragOverListener) {
      this.zone.runOutsideAngular(() => {
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.dragOver.bind(this));
      });
    }
  }
  unbindDragOverListener() {
    if (this.dragOverListener) {
      this.zone.runOutsideAngular(() => {
        this.dragOverListener && this.dragOverListener();
        this.dragOverListener = null;
      });
    }
  }
  dragOver(event) {
    event.preventDefault();
  }
  drop(event) {
    if (this.allowDrop(event)) {
      DomHandler.removeClass(this.el.nativeElement, "p-draggable-enter");
      event.preventDefault();
      this.onDrop.emit(event);
    }
  }
  dragEnter(event) {
    event.preventDefault();
    if (this.dropEffect) {
      event.dataTransfer.dropEffect = this.dropEffect;
    }
    DomHandler.addClass(this.el.nativeElement, "p-draggable-enter");
    this.onDragEnter.emit(event);
  }
  dragLeave(event) {
    event.preventDefault();
    if (!this.el.nativeElement.contains(event.relatedTarget)) {
      DomHandler.removeClass(this.el.nativeElement, "p-draggable-enter");
      this.onDragLeave.emit(event);
    }
  }
  allowDrop(event) {
    let dragScope = event.dataTransfer.getData("text");
    if (typeof this.scope == "string" && dragScope == this.scope) {
      return true;
    } else if (Array.isArray(this.scope)) {
      for (let j = 0; j < this.scope.length; j++) {
        if (dragScope == this.scope[j]) {
          return true;
        }
      }
    }
    return false;
  }
  ngOnDestroy() {
    this.unbindDragOverListener();
  }
  static \u0275fac = function Droppable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Droppable)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Droppable,
    selectors: [["", "pDroppable", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Droppable_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("drop", function Droppable_drop_HostBindingHandler($event) {
          return ctx.drop($event);
        })("dragenter", function Droppable_dragenter_HostBindingHandler($event) {
          return ctx.dragEnter($event);
        })("dragleave", function Droppable_dragleave_HostBindingHandler($event) {
          return ctx.dragLeave($event);
        });
      }
    },
    inputs: {
      scope: [0, "pDroppable", "scope"],
      pDroppableDisabled: [2, "pDroppableDisabled", "pDroppableDisabled", booleanAttribute],
      dropEffect: "dropEffect"
    },
    outputs: {
      onDragEnter: "onDragEnter",
      onDragLeave: "onDragLeave",
      onDrop: "onDrop"
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Droppable, [{
    type: Directive,
    args: [{
      selector: "[pDroppable]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    scope: [{
      type: Input,
      args: ["pDroppable"]
    }],
    pDroppableDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropEffect: [{
      type: Input
    }],
    onDragEnter: [{
      type: Output
    }],
    onDragLeave: [{
      type: Output
    }],
    onDrop: [{
      type: Output
    }],
    drop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }],
    dragEnter: [{
      type: HostListener,
      args: ["dragenter", ["$event"]]
    }],
    dragLeave: [{
      type: HostListener,
      args: ["dragleave", ["$event"]]
    }]
  });
})();
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Draggable, Droppable],
      declarations: [Draggable, Droppable]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-minus.mjs
var MinusIcon = class _MinusIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinusIcon_BaseFactory;
    return function MinusIcon_Factory(__ngFactoryType__) {
      return (\u0275MinusIcon_BaseFactory || (\u0275MinusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MinusIcon)))(__ngFactoryType__ || _MinusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MinusIcon,
    selectors: [["MinusIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinusIcon, [{
    type: Component,
    args: [{
      selector: "MinusIcon",
      standalone: true,
      imports: [CommonModule, BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tree.mjs
var _c0 = (a0) => ({
  "p-treenode-droppoint-active": a0
});
var _c1 = (a0, a1) => ["p-treenode", a0, a1];
var _c2 = (a0) => ({
  height: a0
});
var _c3 = (a0) => ({
  "padding-left": a0
});
var _c4 = (a0, a1, a2) => ({
  "p-treenode-selectable": a0,
  "p-treenode-dragover": a1,
  "p-highlight": a2
});
var _c5 = (a0) => ({
  $implicit: a0
});
var _c6 = (a0, a1) => ({
  "p-checkbox-disabled p-disabled": a0,
  "p-variant-filled": a1
});
var _c7 = (a0, a1) => ({
  "p-highlight": a0,
  "p-indeterminate": a1
});
var _c8 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
var _c9 = (a0) => ({
  display: a0
});
var _c10 = (a0) => ({
  "p-treenode-collapsed": a0
});
var _c11 = (a0, a1) => ({
  "p-treenode-selectable": a0,
  "p-highlight": a1
});
var _c12 = (a0) => ({
  "p-treenode-connector-line": a0
});
function UITreeNode_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275listener("drop", function UITreeNode_ng_template_0_li_0_Template_li_drop_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPoint($event, -1));
    })("dragover", function UITreeNode_ng_template_0_li_0_Template_li_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPointDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_0_Template_li_dragenter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPointDragEnter($event, -1));
    })("dragleave", function UITreeNode_ng_template_0_li_0_Template_li_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPointDragLeave($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r1.draghoverPrev));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronRightIcon", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-tree-toggler-icon");
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-tree-toggler-icon");
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 13)(2, UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.expanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.expanded);
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "SpinnerIcon", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("spin", true)("styleClass", "p-tree-node-toggler-icon");
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 8)(2, UITreeNode_ng_template_0_li_1_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingMode === "icon" && ctx_r1.node.loading);
  }
}
function UITreeNode_ng_template_0_li_1_span_4_1_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_ng_template_0_li_1_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UITreeNode_ng_template_0_li_1_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_ng_template_0_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275template(1, UITreeNode_ng_template_0_li_1_span_4_1_Template, 1, 0, null, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.togglerIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c5, ctx_r1.node.expanded));
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-checkbox-icon");
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "MinusIcon", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-checkbox-icon");
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template, 1, 1, "CheckIcon", 13)(2, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template, 1, 1, "MinusIcon", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.partialSelected && ctx_r1.isSelected());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.partialSelected);
  }
}
function UITreeNode_ng_template_0_li_1_div_5_3_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_ng_template_0_li_1_div_5_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UITreeNode_ng_template_0_li_1_div_5_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_ng_template_0_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275template(2, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_Template, 3, 2, "ng-container", 8)(3, UITreeNode_ng_template_0_li_1_div_5_3_Template, 1, 0, null, 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c6, ctx_r1.node.selectable === false, (ctx_r1.tree == null ? null : ctx_r1.tree.config.inputStyle()) === "filled"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c7, ctx_r1.isSelected(), ctx_r1.node.partialSelected));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.checkboxIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.checkboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(11, _c8, ctx_r1.isSelected(), ctx_r1.node.partialSelected));
  }
}
function UITreeNode_ng_template_0_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getIcon());
  }
}
function UITreeNode_ng_template_0_li_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.node.label);
  }
}
function UITreeNode_ng_template_0_li_1_span_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function UITreeNode_ng_template_0_li_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, UITreeNode_ng_template_0_li_1_span_9_ng_container_1_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c5, ctx_r1.node));
  }
}
function UITreeNode_ng_template_0_li_1_ul_10_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeNode", 22);
  }
  if (rf & 2) {
    const childNode_r4 = ctx.$implicit;
    const firstChild_r5 = ctx.first;
    const lastChild_r6 = ctx.last;
    const index_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("node", childNode_r4)("parentNode", ctx_r1.node)("firstChild", firstChild_r5)("lastChild", lastChild_r6)("index", index_r7)("itemSize", ctx_r1.itemSize)("level", ctx_r1.level + 1)("loadingMode", ctx_r1.loadingMode);
  }
}
function UITreeNode_ng_template_0_li_1_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 20);
    \u0275\u0275template(1, UITreeNode_ng_template_0_li_1_ul_10_p_treeNode_1_Template, 1, 8, "p-treeNode", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c9, ctx_r1.node.expanded ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.node.children)("ngForTrackBy", ctx_r1.tree.trackBy);
  }
}
function UITreeNode_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275listener("keydown", function UITreeNode_ng_template_0_li_1_Template_li_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    });
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275listener("click", function UITreeNode_ng_template_0_li_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNodeClick($event));
    })("contextmenu", function UITreeNode_ng_template_0_li_1_Template_div_contextmenu_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNodeRightClick($event));
    })("touchend", function UITreeNode_ng_template_0_li_1_Template_div_touchend_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNodeTouchEnd());
    })("drop", function UITreeNode_ng_template_0_li_1_Template_div_drop_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropNode($event));
    })("dragover", function UITreeNode_ng_template_0_li_1_Template_div_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropNodeDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_1_Template_div_dragenter_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropNodeDragEnter($event));
    })("dragleave", function UITreeNode_ng_template_0_li_1_Template_div_dragleave_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropNodeDragLeave($event));
    })("dragstart", function UITreeNode_ng_template_0_li_1_Template_div_dragstart_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event));
    })("dragend", function UITreeNode_ng_template_0_li_1_Template_div_dragend_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragStop($event));
    });
    \u0275\u0275elementStart(2, "button", 7);
    \u0275\u0275listener("click", function UITreeNode_ng_template_0_li_1_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle($event));
    });
    \u0275\u0275template(3, UITreeNode_ng_template_0_li_1_ng_container_3_Template, 3, 2, "ng-container", 8)(4, UITreeNode_ng_template_0_li_1_span_4_Template, 2, 4, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UITreeNode_ng_template_0_li_1_div_5_Template, 4, 14, "div", 10)(6, UITreeNode_ng_template_0_li_1_span_6_Template, 1, 2, "span", 3);
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275template(8, UITreeNode_ng_template_0_li_1_span_8_Template, 2, 1, "span", 8)(9, UITreeNode_ng_template_0_li_1_span_9_Template, 2, 4, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, UITreeNode_ng_template_0_li_1_ul_10_Template, 2, 5, "ul", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.node.style);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c1, ctx_r1.node.styleClass || "", ctx_r1.isLeaf() ? "p-treenode-leaf" : ""))("ngStyle", \u0275\u0275pureFunction1(27, _c2, ctx_r1.itemSize + "px"));
    \u0275\u0275attribute("aria-label", ctx_r1.node.label)("aria-checked", ctx_r1.ariaChecked)("aria-setsize", ctx_r1.node.children ? ctx_r1.node.children.length : 0)("aria-selected", ctx_r1.ariaSelected)("aria-expanded", ctx_r1.node.expanded)("aria-posinset", ctx_r1.index + 1)("aria-level", ctx_r1.level + 1)("tabindex", ctx_r1.index === 0 ? 0 : -1)("data-id", ctx_r1.node.key);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(29, _c3, ctx_r1.level * ctx_r1.indentation + "rem"))("draggable", ctx_r1.tree.draggableNodes)("ngClass", \u0275\u0275pureFunction3(31, _c4, ctx_r1.tree.selectionMode && ctx_r1.node.selectable !== false, ctx_r1.draghoverNode, ctx_r1.isSelected()));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "toggler");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.togglerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.togglerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.selectionMode == "checkbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.icon || ctx_r1.node.expandedIcon || ctx_r1.node.collapsedIcon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.virtualScroll && ctx_r1.node.children && ctx_r1.node.expanded);
  }
}
function UITreeNode_ng_template_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275listener("drop", function UITreeNode_ng_template_0_li_2_Template_li_drop_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPoint($event, 1));
    })("dragover", function UITreeNode_ng_template_0_li_2_Template_li_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPointDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_2_Template_li_dragenter_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPointDragEnter($event, 1));
    })("dragleave", function UITreeNode_ng_template_0_li_2_Template_li_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropPointDragLeave($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r1.draghoverNext));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function UITreeNode_ng_template_0_table_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "table", 29)(2, "tbody")(3, "tr");
    \u0275\u0275element(4, "td", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tr");
    \u0275\u0275element(6, "td", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c12, !ctx_r1.firstChild));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c12, !ctx_r1.lastChild));
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r1.tree.togglerAriaLabel);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "MinusIcon", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r1.tree.togglerAriaLabel);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template, 1, 2, "PlusIcon", 32)(2, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template, 1, 2, "MinusIcon", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.expanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.expanded);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UITreeNode_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275template(1, UITreeNode_ng_template_0_table_3_span_6_span_2_1_Template, 1, 0, null, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.togglerIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c5, ctx_r1.node.expanded));
  }
}
function UITreeNode_ng_template_0_table_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275listener("click", function UITreeNode_ng_template_0_table_3_span_6_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggle($event));
    });
    \u0275\u0275template(1, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_Template, 3, 2, "ng-container", 8)(2, UITreeNode_ng_template_0_table_3_span_6_span_2_Template, 2, 4, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-tree-toggler");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.togglerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.togglerIconTemplate);
  }
}
function UITreeNode_ng_template_0_table_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getIcon());
  }
}
function UITreeNode_ng_template_0_table_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.node.label);
  }
}
function UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function UITreeNode_ng_template_0_table_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c5, ctx_r1.node));
  }
}
function UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeNode", 37);
  }
  if (rf & 2) {
    const childNode_r11 = ctx.$implicit;
    const firstChild_r12 = ctx.first;
    const lastChild_r13 = ctx.last;
    \u0275\u0275property("node", childNode_r11)("firstChild", firstChild_r12)("lastChild", lastChild_r13);
  }
}
function UITreeNode_ng_template_0_table_3_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "div", 35);
    \u0275\u0275template(2, UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template, 1, 3, "p-treeNode", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c9, ctx_r1.node.expanded ? "table-cell" : "none"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.node.children)("ngForTrackBy", ctx_r1.tree.trackBy);
  }
}
function UITreeNode_ng_template_0_table_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table")(1, "tbody")(2, "tr");
    \u0275\u0275template(3, UITreeNode_ng_template_0_table_3_td_3_Template, 7, 6, "td", 23);
    \u0275\u0275elementStart(4, "td", 24)(5, "div", 25);
    \u0275\u0275listener("click", function UITreeNode_ng_template_0_table_3_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNodeClick($event));
    })("contextmenu", function UITreeNode_ng_template_0_table_3_Template_div_contextmenu_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNodeRightClick($event));
    })("touchend", function UITreeNode_ng_template_0_table_3_Template_div_touchend_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNodeTouchEnd());
    })("keydown", function UITreeNode_ng_template_0_table_3_Template_div_keydown_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNodeKeydown($event));
    });
    \u0275\u0275template(6, UITreeNode_ng_template_0_table_3_span_6_Template, 3, 3, "span", 26)(7, UITreeNode_ng_template_0_table_3_span_7_Template, 1, 2, "span", 3);
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275template(9, UITreeNode_ng_template_0_table_3_span_9_Template, 2, 1, "span", 8)(10, UITreeNode_ng_template_0_table_3_span_10_Template, 2, 4, "span", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, UITreeNode_ng_template_0_table_3_td_11_Template, 3, 5, "td", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.node.styleClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.root);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c10, !ctx_r1.node.expanded));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c11, ctx_r1.tree.selectionMode, ctx_r1.isSelected()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLeaf());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.icon || ctx_r1.node.expandedIcon || ctx_r1.node.collapsedIcon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.children && ctx_r1.node.expanded);
  }
}
function UITreeNode_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UITreeNode_ng_template_0_li_0_Template, 1, 4, "li", 1)(1, UITreeNode_ng_template_0_li_1_Template, 11, 35, "li", 2)(2, UITreeNode_ng_template_0_li_2_Template, 1, 4, "li", 1)(3, UITreeNode_ng_template_0_table_3_Template, 12, 15, "table", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.tree.droppableNodes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.horizontal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.droppableNodes && ctx_r1.lastChild);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.horizontal);
  }
}
var _c13 = ["filter"];
var _c14 = ["scroller"];
var _c15 = ["wrapper"];
var _c16 = (a0, a1, a2, a3) => ({
  "p-tree p-component": true,
  "p-tree-selectable": a0,
  "p-treenode-dragover": a1,
  "p-tree-loading": a2,
  "p-tree-flex-scrollable": a3
});
var _c17 = (a0) => ({
  options: a0
});
var _c18 = (a0) => ({
  "max-height": a0
});
var _c19 = (a0) => ({
  "p-tree p-tree-horizontal p-component": true,
  "p-tree-selectable": a0
});
function Tree_div_0_div_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("p-tree-loading-icon pi-spin " + ctx_r1.loadingIcon);
  }
}
function Tree_div_0_div_1_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 17);
  }
  if (rf & 2) {
    \u0275\u0275property("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function Tree_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_0_div_1_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_div_1_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275template(1, Tree_div_0_div_1_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingIconTemplate);
  }
}
function Tree_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tree_div_0_div_1_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 15)(2, Tree_div_0_div_1_ng_container_2_span_2_Template, 2, 1, "span", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIconTemplate);
  }
}
function Tree_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, Tree_div_0_div_1_i_1_Template, 1, 2, "i", 14)(2, Tree_div_0_div_1_ng_container_2_Template, 3, 2, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIcon);
  }
}
function Tree_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_div_0_div_3_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon", 23);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-tree-filter-icon");
  }
}
function Tree_div_0_div_3_span_4_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_0_div_3_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_div_0_div_3_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275template(1, Tree_div_0_div_3_span_4_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterIconTemplate);
  }
}
function Tree_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "input", 20, 0);
    \u0275\u0275listener("keydown.enter", function Tree_div_0_div_3_Template_input_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.preventDefault());
    })("input", function Tree_div_0_div_3_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._filter($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Tree_div_0_div_3_SearchIcon_3_Template, 1, 1, "SearchIcon", 21)(4, Tree_div_0_div_3_span_4_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("placeholder", ctx_r1.filterPlaceholder);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterIconTemplate);
  }
}
function Tree_div_0_ng_container_4_p_scroller_1_ng_template_2_ul_0_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeNode", 31, 2);
  }
  if (rf & 2) {
    const rowNode_r5 = ctx.$implicit;
    const firstChild_r6 = ctx.first;
    const scrollerOptions_r7 = \u0275\u0275nextContext(2).options;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("level", rowNode_r5.level)("rowNode", rowNode_r5)("node", rowNode_r5.node)("parentNode", rowNode_r5.parent)("firstChild", firstChild_r6)("lastChild", rowNode_r5.lastChild)("index", rowNode_r5.index)("itemSize", scrollerOptions_r7.itemSize)("indentation", ctx_r1.indentation)("loadingMode", ctx_r1.loadingMode);
  }
}
function Tree_div_0_ng_container_4_p_scroller_1_ng_template_2_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 29);
    \u0275\u0275template(1, Tree_div_0_ng_container_4_p_scroller_1_ng_template_2_ul_0_p_treeNode_1_Template, 2, 10, "p-treeNode", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const items_r9 = ctx_r7.$implicit;
    const scrollerOptions_r7 = ctx_r7.options;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(scrollerOptions_r7.contentStyle);
    \u0275\u0275property("ngClass", scrollerOptions_r7.contentStyleClass);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", items_r9)("ngForTrackBy", ctx_r1.trackBy);
  }
}
function Tree_div_0_ng_container_4_p_scroller_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_div_0_ng_container_4_p_scroller_1_ng_template_2_ul_0_Template, 2, 7, "ul", 28);
  }
  if (rf & 2) {
    const items_r9 = ctx.$implicit;
    \u0275\u0275property("ngIf", items_r9);
  }
}
function Tree_div_0_ng_container_4_p_scroller_1_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_div_0_ng_container_4_p_scroller_1_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_div_0_ng_container_4_p_scroller_1_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 33);
  }
  if (rf & 2) {
    const scrollerOptions_r10 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c17, scrollerOptions_r10));
  }
}
function Tree_div_0_ng_container_4_p_scroller_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tree_div_0_ng_container_4_p_scroller_1_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 32);
    \u0275\u0275elementContainerEnd();
  }
}
function Tree_div_0_ng_container_4_p_scroller_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 26, 1);
    \u0275\u0275listener("onScroll", function Tree_div_0_ng_container_4_p_scroller_1_Template_p_scroller_onScroll_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onScroll.emit($event));
    })("onScrollIndexChange", function Tree_div_0_ng_container_4_p_scroller_1_Template_p_scroller_onScrollIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onScrollIndexChange.emit($event));
    })("onLazyLoad", function Tree_div_0_ng_container_4_p_scroller_1_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, Tree_div_0_ng_container_4_p_scroller_1_ng_template_2_Template, 1, 1, "ng-template", 27)(3, Tree_div_0_ng_container_4_p_scroller_1_ng_container_3_Template, 2, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(9, _c2, ctx_r1.scrollHeight !== "flex" ? ctx_r1.scrollHeight : void 0));
    \u0275\u0275property("items", ctx_r1.serializedValue)("tabindex", -1)("scrollHeight", ctx_r1.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r1.virtualScrollItemSize || ctx_r1._virtualNodeHeight)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate);
  }
}
function Tree_div_0_ng_container_4_ng_container_2_ul_3_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeNode", 38);
  }
  if (rf & 2) {
    const node_r11 = ctx.$implicit;
    const firstChild_r12 = ctx.first;
    const lastChild_r13 = ctx.last;
    const index_r14 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("node", node_r11)("firstChild", firstChild_r12)("lastChild", lastChild_r13)("index", index_r14)("level", 0)("loadingMode", ctx_r1.loadingMode);
  }
}
function Tree_div_0_ng_container_4_ng_container_2_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 36);
    \u0275\u0275template(1, Tree_div_0_ng_container_4_ng_container_2_ul_3_p_treeNode_1_Template, 1, 6, "p-treeNode", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getRootNode())("ngForTrackBy", ctx_r1.trackBy);
  }
}
function Tree_div_0_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34, 3);
    \u0275\u0275template(3, Tree_div_0_ng_container_4_ng_container_2_ul_3_Template, 2, 4, "ul", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c18, ctx_r1.scrollHeight));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getRootNode());
  }
}
function Tree_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tree_div_0_ng_container_4_p_scroller_1_Template, 4, 11, "p-scroller", 25)(2, Tree_div_0_ng_container_4_ng_container_2_Template, 4, 4, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.virtualScroll);
  }
}
function Tree_div_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function Tree_div_0_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 4);
  }
}
function Tree_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, Tree_div_0_div_5_ng_container_1_Template, 2, 1, "ng-container", 40)(2, Tree_div_0_div_5_ng_container_2_Template, 2, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.emptyMessageTemplate)("ngIfElse", ctx_r1.emptyFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyMessageTemplate);
  }
}
function Tree_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("drop", function Tree_div_0_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    })("dragover", function Tree_div_0_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragenter", function Tree_div_0_Template_div_dragenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnter());
    })("dragleave", function Tree_div_0_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    });
    \u0275\u0275template(1, Tree_div_0_div_1_Template, 3, 2, "div", 8)(2, Tree_div_0_ng_container_2_Template, 1, 0, "ng-container", 9)(3, Tree_div_0_div_3_Template, 5, 3, "div", 10)(4, Tree_div_0_ng_container_4_Template, 3, 2, "ng-container", 11)(5, Tree_div_0_div_5_Template, 3, 3, "div", 12)(6, Tree_div_0_ng_container_6_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(10, _c16, ctx_r1.selectionMode, ctx_r1.dragHover, ctx_r1.loading, ctx_r1.scrollHeight === "flex"))("ngStyle", ctx_r1.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading && ctx_r1.loadingMode === "mask");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r1.getRootNode()) == null ? null : tmp_7_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && (ctx_r1.getRootNode() == null || ctx_r1.getRootNode().length === 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function Tree_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_div_1_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("p-tree-loading-icon pi-spin " + ctx_r1.loadingIcon);
  }
}
function Tree_div_1_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 17);
  }
  if (rf & 2) {
    \u0275\u0275property("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function Tree_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_1_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_1_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275template(1, Tree_div_1_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingIconTemplate);
  }
}
function Tree_div_1_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tree_div_1_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 15)(2, Tree_div_1_div_2_ng_container_2_span_2_Template, 2, 1, "span", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIconTemplate);
  }
}
function Tree_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, Tree_div_1_div_2_i_1_Template, 1, 2, "i", 14)(2, Tree_div_1_div_2_ng_container_2_Template, 3, 2, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIcon);
  }
}
function Tree_div_1_table_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table");
    \u0275\u0275element(1, "p-treeNode", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("node", ctx_r1.value[0])("root", true);
  }
}
function Tree_div_1_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function Tree_div_1_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 4);
  }
}
function Tree_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, Tree_div_1_div_4_ng_container_1_Template, 2, 1, "ng-container", 40)(2, Tree_div_1_div_4_ng_container_2_Template, 2, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.emptyMessageTemplate)("ngIfElse", ctx_r1.emptyFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyMessageTemplate);
  }
}
function Tree_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, Tree_div_1_ng_container_1_Template, 1, 0, "ng-container", 9)(2, Tree_div_1_div_2_Template, 3, 2, "div", 42)(3, Tree_div_1_table_3_Template, 2, 2, "table", 11)(4, Tree_div_1_div_4_Template, 3, 3, "div", 12)(5, Tree_div_1_ng_container_5_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c19, ctx_r1.selectionMode))("ngStyle", ctx_r1.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.value && ctx_r1.value[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && (ctx_r1.getRootNode() == null || ctx_r1.getRootNode().length === 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
var UITreeNode = class _UITreeNode {
  static ICON_CLASS = "p-treenode-icon ";
  rowNode;
  node;
  parentNode;
  root;
  index;
  firstChild;
  lastChild;
  level;
  indentation;
  itemSize;
  loadingMode;
  tree;
  timeout;
  draghoverPrev;
  draghoverNext;
  draghoverNode;
  get ariaSelected() {
    return this.tree.selectionMode === "single" || this.tree.selectionMode === "multiple" ? this.isSelected() : void 0;
  }
  get ariaChecked() {
    return this.tree.selectionMode === "checkbox" ? this.isSelected() : void 0;
  }
  constructor(tree) {
    this.tree = tree;
  }
  ngOnInit() {
    this.node.parent = this.parentNode;
    const nativeElement = this.tree.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (this.parentNode && !pDialogWrapper) {
      this.setAllNodesTabIndexes();
      this.tree.syncNodeOption(this.node, this.tree.value, "parent", this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
    }
  }
  getIcon() {
    let icon;
    if (this.node.icon) icon = this.node.icon;
    else icon = this.node.expanded && this.node.children && this.node.children?.length ? this.node.expandedIcon : this.node.collapsedIcon;
    return _UITreeNode.ICON_CLASS + " " + icon;
  }
  isLeaf() {
    return this.tree.isNodeLeaf(this.node);
  }
  toggle(event) {
    if (this.node.expanded) this.collapse(event);
    else this.expand(event);
    event.stopPropagation();
  }
  expand(event) {
    this.node.expanded = true;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
  }
  collapse(event) {
    this.node.expanded = false;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
  }
  onNodeClick(event) {
    this.tree.onNodeClick(event, this.node);
  }
  onNodeKeydown(event) {
    if (event.key === "Enter") {
      this.tree.onNodeClick(event, this.node);
    }
  }
  onNodeTouchEnd() {
    this.tree.onNodeTouchEnd();
  }
  onNodeRightClick(event) {
    this.tree.onNodeRightClick(event, this.node);
  }
  isSelected() {
    return this.tree.isSelected(this.node);
  }
  isSameNode(event) {
    return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
  }
  onDropPoint(event, position) {
    event.preventDefault();
    let dragNode = this.tree.dragNode;
    let dragNodeIndex = this.tree.dragNodeIndex;
    let dragNodeScope = this.tree.dragNodeScope;
    let isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? position === 1 || dragNodeIndex !== this.index - 1 : true;
    if (this.tree.allowDrop(dragNode, this.node, dragNodeScope, "between") && isValidDropPointIndex) {
      let dropParams = __spreadValues({}, this.createDropPointEventMetadata(position));
      if (this.tree.validateDrop) {
        this.tree.onNodeDrop.emit({
          originalEvent: event,
          dragNode,
          dropNode: this.node,
          dropPoint: "between",
          index: this.index,
          accept: () => {
            this.processPointDrop(dropParams);
          }
        });
      } else {
        this.processPointDrop(dropParams);
        this.tree.onNodeDrop.emit({
          originalEvent: event,
          dragNode,
          dropNode: this.node,
          dropPoint: "between",
          index: this.index
        });
      }
    }
    this.draghoverPrev = false;
    this.draghoverNext = false;
  }
  processPointDrop(event) {
    let newNodeList = event.dropNode.parent ? event.dropNode.parent.children : this.tree.value;
    event.dragNodeSubNodes.splice(event.dragNodeIndex, 1);
    let dropIndex = this.index;
    if (event.position < 0) {
      dropIndex = event.dragNodeSubNodes === newNodeList ? event.dragNodeIndex > event.index ? event.index : event.index - 1 : event.index;
      newNodeList.splice(dropIndex, 0, event.dragNode);
    } else {
      dropIndex = newNodeList.length;
      newNodeList.push(event.dragNode);
    }
    this.tree.dragDropService.stopDrag({
      node: event.dragNode,
      subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
      index: event.dragNodeIndex
    });
  }
  createDropPointEventMetadata(position) {
    return {
      dragNode: this.tree.dragNode,
      dragNodeIndex: this.tree.dragNodeIndex,
      dragNodeSubNodes: this.tree.dragNodeSubNodes,
      dropNode: this.node,
      index: this.index,
      position
    };
  }
  onDropPointDragOver(event) {
    event.dataTransfer.dropEffect = "move";
    event.preventDefault();
  }
  onDropPointDragEnter(event, position) {
    if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope, "between")) {
      if (position < 0) this.draghoverPrev = true;
      else this.draghoverNext = true;
    }
  }
  onDropPointDragLeave(event) {
    this.draghoverPrev = false;
    this.draghoverNext = false;
  }
  onDragStart(event) {
    if (this.tree.draggableNodes && this.node.draggable !== false) {
      event.dataTransfer.setData("text", "data");
      this.tree.dragDropService.startDrag({
        tree: this,
        node: this.node,
        subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
        index: this.index,
        scope: this.tree.draggableScope
      });
    } else {
      event.preventDefault();
    }
  }
  onDragStop(event) {
    this.tree.dragDropService.stopDrag({
      node: this.node,
      subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
      index: this.index
    });
  }
  onDropNodeDragOver(event) {
    event.dataTransfer.dropEffect = "move";
    if (this.tree.droppableNodes) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onDropNode(event) {
    if (this.tree.droppableNodes && this.node?.droppable !== false) {
      let dragNode = this.tree.dragNode;
      if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
        let dropParams = __spreadValues({}, this.createDropNodeEventMetadata());
        if (this.tree.validateDrop) {
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            dropPoint: "node",
            index: this.index,
            accept: () => {
              this.processNodeDrop(dropParams);
            }
          });
        } else {
          this.processNodeDrop(dropParams);
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            dropPoint: "node",
            index: this.index
          });
        }
      }
    }
    event.preventDefault();
    event.stopPropagation();
    this.draghoverNode = false;
  }
  createDropNodeEventMetadata() {
    return {
      dragNode: this.tree.dragNode,
      dragNodeIndex: this.tree.dragNodeIndex,
      dragNodeSubNodes: this.tree.dragNodeSubNodes,
      dropNode: this.node
    };
  }
  processNodeDrop(event) {
    let dragNodeIndex = event.dragNodeIndex;
    event.dragNodeSubNodes.splice(dragNodeIndex, 1);
    if (event.dropNode.children) event.dropNode.children.push(event.dragNode);
    else event.dropNode.children = [event.dragNode];
    this.tree.dragDropService.stopDrag({
      node: event.dragNode,
      subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
      index: dragNodeIndex
    });
  }
  onDropNodeDragEnter(event) {
    if (this.tree.droppableNodes && this.node?.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
      this.draghoverNode = true;
    }
  }
  onDropNodeDragLeave(event) {
    if (this.tree.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
        this.draghoverNode = false;
      }
    }
  }
  onKeyDown(event) {
    if (!this.isSameNode(event) || this.tree.contextMenu && this.tree.contextMenu.containerViewChild?.nativeElement.style.display === "block") {
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDown(event);
        break;
      case "ArrowUp":
        this.onArrowUp(event);
        break;
      case "ArrowRight":
        this.onArrowRight(event);
        break;
      case "ArrowLeft":
        this.onArrowLeft(event);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnter(event);
        break;
      case "Space":
        const nodeName = event.target instanceof HTMLElement && event.target.nodeName;
        if (!["INPUT"].includes(nodeName)) {
          this.onEnter(event);
        }
        break;
      case "Tab":
        this.setAllNodesTabIndexes();
        break;
      default:
        break;
    }
  }
  onArrowUp(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "toggler" ? event.target.closest('[role="treeitem"]') : event.target.parentElement;
    if (nodeElement.previousElementSibling) {
      this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
    } else {
      let parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        this.focusRowChange(nodeElement, parentNodeElement);
      }
    }
    event.preventDefault();
  }
  onArrowDown(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "toggler" ? event.target.closest('[role="treeitem"]') : event.target;
    const listElement = nodeElement.children[1];
    if (listElement && listElement.children.length > 0) {
      this.focusRowChange(nodeElement, listElement.children[0]);
    } else {
      if (nodeElement.parentElement.nextElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.parentElement.nextElementSibling);
      } else {
        let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement.parentElement);
        if (nextSiblingAncestor) {
          this.focusRowChange(nodeElement, nextSiblingAncestor);
        }
      }
    }
    event.preventDefault();
  }
  onArrowRight(event) {
    if (!this.node?.expanded && !this.tree.isNodeLeaf(this.node)) {
      this.expand(event);
      event.currentTarget.tabIndex = -1;
      setTimeout(() => {
        this.onArrowDown(event);
      }, 1);
    }
    event.preventDefault();
  }
  onArrowLeft(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "toggler" ? event.target.closest('[role="treeitem"]') : event.target;
    if (this.level === 0 && !this.node?.expanded) {
      return false;
    }
    if (this.node?.expanded) {
      this.collapse(event);
      return;
    }
    let parentNodeElement = this.getParentNodeElement(nodeElement.parentElement);
    if (parentNodeElement) {
      this.focusRowChange(event.currentTarget, parentNodeElement);
    }
    event.preventDefault();
  }
  isActionableElement(event) {
    const target = event.target;
    const isActionable = target instanceof HTMLElement && (target.nodeName == "A" || target.nodeName == "BUTTON");
    return isActionable;
  }
  onEnter(event) {
    this.tree.onNodeClick(event, this.node);
    this.setTabIndexForSelectionMode(event, this.tree.nodeTouched);
    if (!this.isActionableElement(event)) {
      event.preventDefault();
    }
  }
  setAllNodesTabIndexes() {
    const nodes = DomHandler.find(this.tree.el.nativeElement, ".p-treenode");
    const hasSelectedNode = [...nodes].some((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
    [...nodes].forEach((node) => {
      node.tabIndex = -1;
    });
    if (hasSelectedNode) {
      const selectedNodes = [...nodes].filter((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
      selectedNodes[0].tabIndex = 0;
      return;
    }
    [...nodes][0].tabIndex = 0;
  }
  setTabIndexForSelectionMode(event, nodeTouched) {
    if (this.tree.selectionMode !== null) {
      const elements = [...DomHandler.find(this.tree.el.nativeElement, ".p-treenode")];
      event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
      if (elements.every((element) => element.tabIndex === -1)) {
        elements[0].tabIndex = 0;
      }
    }
  }
  findNextSiblingOfAncestor(nodeElement) {
    let parentNodeElement = this.getParentNodeElement(nodeElement);
    if (parentNodeElement) {
      if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;
      else return this.findNextSiblingOfAncestor(parentNodeElement);
    } else {
      return null;
    }
  }
  findLastVisibleDescendant(nodeElement) {
    const listElement = Array.from(nodeElement.children).find((el) => DomHandler.hasClass(el, "p-treenode"));
    const childrenListElement = listElement.children[1];
    if (childrenListElement && childrenListElement.children.length > 0) {
      const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
      return this.findLastVisibleDescendant(lastChildElement);
    } else {
      return nodeElement;
    }
  }
  getParentNodeElement(nodeElement) {
    const parentNodeElement = nodeElement.parentElement?.parentElement?.parentElement;
    return parentNodeElement?.tagName === "P-TREENODE" ? parentNodeElement : null;
  }
  focusNode(element) {
    if (this.tree.droppableNodes) element.children[1].focus();
    else element.children[0].focus();
  }
  focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.children[0].tabIndex = "0";
    this.focusNode(lastVisibleDescendant || currentFocusedRow);
  }
  focusVirtualNode() {
    this.timeout = setTimeout(() => {
      let node = DomHandler.findSingle(document.body, `[data-id="${this.node?.key ?? this.node?.data}"]`);
      DomHandler.focus(node);
    }, 1);
  }
  static \u0275fac = function UITreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UITreeNode)(\u0275\u0275directiveInject(forwardRef(() => Tree)));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UITreeNode,
    selectors: [["p-treeNode"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      rowNode: "rowNode",
      node: "node",
      parentNode: "parentNode",
      root: [2, "root", "root", booleanAttribute],
      index: [2, "index", "index", numberAttribute],
      firstChild: [2, "firstChild", "firstChild", booleanAttribute],
      lastChild: [2, "lastChild", "lastChild", booleanAttribute],
      level: [2, "level", "level", numberAttribute],
      indentation: [2, "indentation", "indentation", numberAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      loadingMode: "loadingMode"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "ngIf"], ["class", "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "ngStyle", "style", "keydown", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "p-treenode-droppoint", 3, "drop", "dragover", "dragenter", "dragleave", "ngClass"], ["role", "treeitem", 3, "keydown", "ngClass", "ngStyle"], [1, "p-treenode-content", 3, "click", "contextmenu", "touchend", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend", "ngStyle", "draggable", "ngClass"], ["type", "button", "pRipple", "", "tabindex", "-1", 1, "p-tree-toggler", "p-link", 3, "click"], [4, "ngIf"], ["class", "p-tree-toggler-icon", 4, "ngIf"], ["class", "p-checkbox p-component", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [1, "p-treenode-label"], ["class", "p-treenode-children", "role", "group", 3, "ngStyle", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [3, "spin", "styleClass"], [1, "p-tree-toggler-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "p-checkbox", "p-component", 3, "ngClass"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], ["role", "group", 1, "p-treenode-children", 3, "ngStyle"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", "loadingMode", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", "loadingMode"], ["class", "p-treenode-connector", 4, "ngIf"], [1, "p-treenode", 3, "ngClass"], ["tabindex", "0", 1, "p-treenode-content", 3, "click", "contextmenu", "touchend", "keydown", "ngClass"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-treenode-children-container", 3, "ngStyle", 4, "ngIf"], [1, "p-treenode-connector"], [1, "p-treenode-connector-table"], [3, "ngClass"], [3, "click", "ngClass"], [3, "styleClass", "ariaLabel", 4, "ngIf"], [3, "styleClass", "ariaLabel"], [1, "p-treenode-children-container", 3, "ngStyle"], [1, "p-treenode-children"], [3, "node", "firstChild", "lastChild", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild"]],
    template: function UITreeNode_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UITreeNode_ng_template_0_Template, 4, 4, "ng-template", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.node);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, CheckIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, SpinnerIcon, PlusIcon, _UITreeNode],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UITreeNode, [{
    type: Component,
    args: [{
      selector: "p-treeNode",
      template: `
        <ng-template [ngIf]="node">
            <li
                *ngIf="tree.droppableNodes"
                class="p-treenode-droppoint"
                [attr.aria-hidden]="true"
                [ngClass]="{ 'p-treenode-droppoint-active': draghoverPrev }"
                (drop)="onDropPoint($event, -1)"
                (dragover)="onDropPointDragOver($event)"
                (dragenter)="onDropPointDragEnter($event, -1)"
                (dragleave)="onDropPointDragLeave($event)"
            ></li>
            <li
                *ngIf="!tree.horizontal"
                [ngClass]="['p-treenode', node.styleClass || '', isLeaf() ? 'p-treenode-leaf' : '']"
                [ngStyle]="{ height: itemSize + 'px' }"
                [style]="node.style"
                [attr.aria-label]="node.label"
                [attr.aria-checked]="ariaChecked"
                [attr.aria-setsize]="node.children ? node.children.length : 0"
                [attr.aria-selected]="ariaSelected"
                [attr.aria-expanded]="node.expanded"
                [attr.aria-posinset]="index + 1"
                [attr.aria-level]="level + 1"
                [attr.tabindex]="index === 0 ? 0 : -1"
                [attr.data-id]="node.key"
                role="treeitem"
                (keydown)="onKeyDown($event)"
            >
                <div
                    class="p-treenode-content"
                    [ngStyle]="{
                        'padding-left': level * indentation + 'rem'
                    }"
                    (click)="onNodeClick($event)"
                    (contextmenu)="onNodeRightClick($event)"
                    (touchend)="onNodeTouchEnd()"
                    (drop)="onDropNode($event)"
                    (dragover)="onDropNodeDragOver($event)"
                    (dragenter)="onDropNodeDragEnter($event)"
                    (dragleave)="onDropNodeDragLeave($event)"
                    [draggable]="tree.draggableNodes"
                    (dragstart)="onDragStart($event)"
                    (dragend)="onDragStop($event)"
                    [ngClass]="{ 'p-treenode-selectable': tree.selectionMode && node.selectable !== false, 'p-treenode-dragover': draghoverNode, 'p-highlight': isSelected() }"
                >
                    <button type="button" [attr.data-pc-section]="'toggler'" class="p-tree-toggler p-link" (click)="toggle($event)" pRipple tabindex="-1">
                        <ng-container *ngIf="!tree.togglerIconTemplate">
                            <ng-container *ngIf="!node.loading">
                                <ChevronRightIcon *ngIf="!node.expanded" [styleClass]="'p-tree-toggler-icon'" />
                                <ChevronDownIcon *ngIf="node.expanded" [styleClass]="'p-tree-toggler-icon'" />
                            </ng-container>
                            <ng-container *ngIf="loadingMode === 'icon' && node.loading">
                                <SpinnerIcon [spin]="true" [styleClass]="'p-tree-node-toggler-icon'" />
                            </ng-container>
                        </ng-container>
                        <span *ngIf="tree.togglerIconTemplate" class="p-tree-toggler-icon">
                            <ng-template *ngTemplateOutlet="tree.togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                        </span>
                    </button>
                    <div
                        class="p-checkbox p-component"
                        [ngClass]="{ 'p-checkbox-disabled p-disabled': node.selectable === false, 'p-variant-filled': tree?.config.inputStyle() === 'filled' }"
                        *ngIf="tree.selectionMode == 'checkbox'"
                        aria-hidden="true"
                    >
                        <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': isSelected(), 'p-indeterminate': node.partialSelected }" role="checkbox">
                            <ng-container *ngIf="!tree.checkboxIconTemplate">
                                <CheckIcon *ngIf="!node.partialSelected && isSelected()" [styleClass]="'p-checkbox-icon'" />
                                <MinusIcon *ngIf="node.partialSelected" [styleClass]="'p-checkbox-icon'" />
                            </ng-container>
                            <ng-template *ngTemplateOutlet="tree.checkboxIconTemplate; context: { $implicit: isSelected(), partialSelected: node.partialSelected }"></ng-template>
                        </div>
                    </div>
                    <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon"></span>
                    <span class="p-treenode-label">
                        <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                        <span *ngIf="tree.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </span>
                    </span>
                </div>
                <ul
                    class="p-treenode-children"
                    [ngStyle]="{
                        display: node.expanded ? 'block' : 'none'
                    }"
                    *ngIf="!tree.virtualScroll && node.children && node.expanded"
                    role="group"
                >
                    <p-treeNode
                        *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; let index = index; trackBy: tree.trackBy"
                        [node]="childNode"
                        [parentNode]="node"
                        [firstChild]="firstChild"
                        [lastChild]="lastChild"
                        [index]="index"
                        [itemSize]="itemSize"
                        [level]="level + 1"
                        [loadingMode]="loadingMode"
                    ></p-treeNode>
                </ul>
            </li>

            <li
                *ngIf="tree.droppableNodes && lastChild"
                class="p-treenode-droppoint"
                [ngClass]="{ 'p-treenode-droppoint-active': draghoverNext }"
                (drop)="onDropPoint($event, 1)"
                [attr.aria-hidden]="true"
                (dragover)="onDropPointDragOver($event)"
                (dragenter)="onDropPointDragEnter($event, 1)"
                (dragleave)="onDropPointDragLeave($event)"
            ></li>

            <table *ngIf="tree.horizontal" [class]="node.styleClass">
                <tbody>
                    <tr>
                        <td class="p-treenode-connector" *ngIf="!root">
                            <table class="p-treenode-connector-table">
                                <tbody>
                                    <tr>
                                        <td [ngClass]="{ 'p-treenode-connector-line': !firstChild }"></td>
                                    </tr>
                                    <tr>
                                        <td [ngClass]="{ 'p-treenode-connector-line': !lastChild }"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td class="p-treenode" [ngClass]="{ 'p-treenode-collapsed': !node.expanded }">
                            <div
                                class="p-treenode-content"
                                tabindex="0"
                                [ngClass]="{ 'p-treenode-selectable': tree.selectionMode, 'p-highlight': isSelected() }"
                                (click)="onNodeClick($event)"
                                (contextmenu)="onNodeRightClick($event)"
                                (touchend)="onNodeTouchEnd()"
                                (keydown)="onNodeKeydown($event)"
                            >
                                <span *ngIf="!isLeaf()" [ngClass]="'p-tree-toggler'" (click)="toggle($event)">
                                    <ng-container *ngIf="!tree.togglerIconTemplate">
                                        <PlusIcon *ngIf="!node.expanded" [styleClass]="'p-tree-toggler-icon'" [ariaLabel]="tree.togglerAriaLabel" />
                                        <MinusIcon *ngIf="node.expanded" [styleClass]="'p-tree-toggler-icon'" [ariaLabel]="tree.togglerAriaLabel" />
                                    </ng-container>
                                    <span *ngIf="tree.togglerIconTemplate" class="p-tree-toggler-icon">
                                        <ng-template *ngTemplateOutlet="tree.togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                                    </span>
                                </span>
                                <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon"></span>
                                <span class="p-treenode-label">
                                    <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                                    <span *ngIf="tree.getTemplateForNode(node)">
                                        <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            class="p-treenode-children-container"
                            *ngIf="node.children && node.expanded"
                            [ngStyle]="{
                                display: node.expanded ? 'table-cell' : 'none'
                            }"
                        >
                            <div class="p-treenode-children">
                                <p-treeNode *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; trackBy: tree.trackBy" [node]="childNode" [firstChild]="firstChild" [lastChild]="lastChild"></p-treeNode>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: Tree,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Tree)]
    }]
  }], {
    rowNode: [{
      type: Input
    }],
    node: [{
      type: Input
    }],
    parentNode: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    firstChild: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lastChild: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    indentation: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingMode: [{
      type: Input
    }]
  });
})();
var Tree = class _Tree {
  el;
  dragDropService;
  config;
  cd;
  /**
   * An array of treenodes.
   * @group Props
   */
  value;
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * Loading mode display.
   * @group Props
   */
  loadingMode = "mask";
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  selection;
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
   * Context menu instance.
   * @group Props
   */
  contextMenu;
  /**
   * Defines the orientation of the tree, valid values are 'vertical' and 'horizontal'.
   * @group Props
   */
  layout = "vertical";
  /**
   * Scope of the draggable nodes to match a droppableScope.
   * @group Props
   */
  draggableScope;
  /**
   * Scope of the droppable nodes to match a draggableScope.
   * @group Props
   */
  droppableScope;
  /**
   * Whether the nodes are draggable.
   * @group Props
   */
  draggableNodes;
  /**
   * Whether the nodes are droppable.
   * @group Props
   */
  droppableNodes;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Whether checkbox selections propagate to ancestor nodes.
   * @group Props
   */
  propagateSelectionUp = true;
  /**
   * Whether checkbox selections propagate to descendant nodes.
   * @group Props
   */
  propagateSelectionDown = true;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Text to display when there is no data.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Used to define a string that labels the tree.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the toggler icon for accessibility.
   * @group Props
   */
  togglerAriaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.
   * @group Props
   */
  validateDrop;
  /**
   * When specified, displays an input field to filter the items.
   * @group Props
   */
  filter;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy = "label";
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterMode = "lenient";
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Values after the tree nodes are filtered.
   * @group Props
   */
  filteredNodes;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Height of the scrollable viewport.
   * @group Props
   */
  scrollHeight;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Indentation factor for spacing of the nested node when virtual scrolling is enabled.
   * @group Props
   */
  indentation = 1.5;
  /**
   * Custom templates of the component.
   * @group Props
   */
  _templateMap;
  /**
   * Function to optimize the node list rendering, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Height of the node.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  _virtualNodeHeight;
  get virtualNodeHeight() {
    return this._virtualNodeHeight;
  }
  set virtualNodeHeight(val) {
    this._virtualNodeHeight = val;
    console.warn("The virtualNodeHeight property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * Callback to invoke on selection change.
   * @param {(TreeNode<any> | TreeNode<any>[] | null)} event - Custom selection change event.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeNodeSelectEvent} event - Node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeNodeUnSelectEvent} event - Node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeNodeExpandEvent} event - Node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeNodeCollapseEvent} event - Node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  /**
   * Callback to invoke when a node is selected with right click.
   * @param {onNodeContextMenuSelect} event - Node context menu select event.
   * @group Emits
   */
  onNodeContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is dropped.
   * @param {TreeNodeDropEvent} event - Node drop event.
   * @group Emits
   */
  onNodeDrop = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {TreeLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position changes.
   * @param {TreeScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position and item's range in view changes.
   * @param {TreeScrollIndexChangeEvent} event - Scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TreeFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  templates;
  filterViewChild;
  scroller;
  wrapperViewChild;
  serializedValue;
  headerTemplate;
  footerTemplate;
  loaderTemplate;
  emptyMessageTemplate;
  togglerIconTemplate;
  checkboxIconTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  nodeTouched;
  dragNodeTree;
  dragNode;
  dragNodeSubNodes;
  dragNodeIndex;
  dragNodeScope;
  dragHover;
  dragStartSubscription;
  dragStopSubscription;
  constructor(el, dragDropService, config, cd) {
    this.el = el;
    this.dragDropService = dragDropService;
    this.config = config;
    this.cd = cd;
  }
  ngOnInit() {
    if (this.droppableNodes) {
      this.dragStartSubscription = this.dragDropService.dragStart$.subscribe((event) => {
        this.dragNodeTree = event.tree;
        this.dragNode = event.node;
        this.dragNodeSubNodes = event.subNodes;
        this.dragNodeIndex = event.index;
        this.dragNodeScope = event.scope;
      });
      this.dragStopSubscription = this.dragDropService.dragStop$.subscribe((event) => {
        this.dragNodeTree = null;
        this.dragNode = null;
        this.dragNodeSubNodes = null;
        this.dragNodeIndex = null;
        this.dragNodeScope = null;
        this.dragHover = false;
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      this.updateSerializedValue();
      if (this.hasFilterActive()) {
        this._filter(this.filterViewChild.nativeElement.value);
      }
    }
  }
  get horizontal() {
    return this.layout == "horizontal";
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  ngAfterContentInit() {
    if (this.templates.length) {
      this._templateMap = {};
    }
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "empty":
          this.emptyMessageTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "togglericon":
          this.togglerIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this._templateMap[item.name] = item.template;
          break;
      }
    });
  }
  updateSerializedValue() {
    this.serializedValue = [];
    this.serializeNodes(null, this.getRootNode(), 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      nodes.forEach((node, index) => {
        node.parent = parent;
        const rowNode = {
          node,
          parent,
          level,
          visible: visible && (parent ? parent.expanded : true),
          lastChild: index === nodes.length - 1,
          index
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      });
    }
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (DomHandler.hasClass(eventTarget, "p-tree-toggler") || DomHandler.hasClass(eventTarget, "p-tree-toggler-icon")) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        node.style = "--p-focus-ring-color: none;";
        return;
      } else {
        node.style = "--p-focus-ring-color: var(--primary-color)";
      }
      if (this.hasFilteredNodes()) {
        node = this.getNodeWithKey(node.key, this.filteredNodes);
        if (!node) {
          return;
        }
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.isCheckboxSelectionMode()) {
        if (selected) {
          if (this.propagateSelectionDown) this.propagateDown(node, false);
          else this.selection = this.selection.filter((val, i) => i != index);
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, false);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          if (this.propagateSelectionDown) this.propagateDown(node, true);
          else this.selection = [...this.selection || [], node];
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, true);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else {
        let metaSelection = this.nodeTouched ? false : this.metaKeySelection;
        if (metaSelection) {
          let metaKey = event.metaKey || event.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(null);
            } else {
              this.selection = this.selection.filter((val, i) => i != index);
              this.selectionChange.emit(this.selection);
            }
            this.onNodeUnselect.emit({
              originalEvent: event,
              node
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(node);
            } else if (this.isMultipleSelectionMode()) {
              this.selection = !metaKey ? [] : this.selection || [];
              this.selection = [...this.selection, node];
              this.selectionChange.emit(this.selection);
            }
            this.onNodeSelect.emit({
              originalEvent: event,
              node
            });
          }
        } else {
          if (this.isSingleSelectionMode()) {
            if (selected) {
              this.selection = null;
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection = node;
              setTimeout(() => {
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node
                });
              });
            }
          } else {
            if (selected) {
              this.selection = this.selection.filter((val, i) => i != index);
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection = [...this.selection || [], node];
              setTimeout(() => {
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node
                });
              });
            }
          }
          this.selectionChange.emit(this.selection);
        }
      }
    }
    this.nodeTouched = false;
  }
  onNodeTouchEnd() {
    this.nodeTouched = true;
  }
  onNodeRightClick(event, node) {
    if (this.contextMenu) {
      let eventTarget = event.target;
      let className = eventTarget.getAttribute("class");
      if (className && className.includes("p-tree-toggler")) {
        return;
      } else {
        let index = this.findIndexInSelection(node);
        let selected = index >= 0;
        if (!selected) {
          if (this.isSingleSelectionMode()) this.selectionChange.emit(node);
          else this.selectionChange.emit([node]);
        }
        this.contextMenu.show(event);
        this.onNodeContextMenuSelect.emit({
          originalEvent: event,
          node
        });
      }
    }
  }
  findIndexInSelection(node) {
    if (this.selectionMode && this.selection) {
      const selection = this.isSingleSelectionMode() ? [this.selection] : this.selection;
      return selection.findIndex((selectedNode) => selectedNode === node || selectedNode.key === node.key && selectedNode.key !== void 0);
    }
    return -1;
  }
  syncNodeOption(node, parentNodes, option, value) {
    const _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
    if (_node) {
      _node[option] = value || node[option];
    }
  }
  hasFilteredNodes() {
    return this.filter && this.filteredNodes && this.filteredNodes.length;
  }
  hasFilterActive() {
    return this.filter && this.filterViewChild?.nativeElement?.value.length > 0;
  }
  getNodeWithKey(key, nodes) {
    for (let node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        let matchedNode = this.getNodeWithKey(key, node.children);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
  }
  propagateUp(node, select) {
    if (node.children && node.children.length) {
      let selectedCount = 0;
      let childPartialSelected = false;
      for (let child of node.children) {
        if (this.isSelected(child)) {
          selectedCount++;
        } else if (child.partialSelected) {
          childPartialSelected = true;
        }
      }
      if (select && selectedCount == node.children.length) {
        this.selection = [...this.selection || [], node];
        node.partialSelected = false;
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this.selection = this.selection.filter((val, i) => i != index);
          }
        }
        if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length) node.partialSelected = true;
        else node.partialSelected = false;
      }
      this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    }
    let parent = node.parent;
    if (parent) {
      this.propagateUp(parent, select);
    }
  }
  propagateDown(node, select) {
    let index = this.findIndexInSelection(node);
    if (select && index == -1 && node.selectable !== false) {
      this.selection = [...this.selection || [], this.filterUnselectableChildren(node)];
    } else if (!select && index > -1) {
      this.selection = this.selection.filter((val, i) => i != index);
    }
    node.partialSelected = false;
    this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateDown(child, select);
      }
    }
  }
  filterUnselectableChildren(node) {
    let clonedNode = Object.assign({}, node);
    if (clonedNode.children && clonedNode.children.length) {
      for (let child of clonedNode.children) {
        if (child.selectable === false) {
          clonedNode.children = clonedNode.children.filter((val) => val != child);
        }
        child = this.filterUnselectableChildren(child);
      }
    }
    return clonedNode;
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode == "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode && this.selectionMode == "multiple";
  }
  isCheckboxSelectionMode() {
    return this.selectionMode && this.selectionMode == "checkbox";
  }
  isNodeLeaf(node) {
    return node.leaf == false ? false : !(node.children && node.children.length);
  }
  getRootNode() {
    return this.filteredNodes ? this.filteredNodes : this.value;
  }
  getTemplateForNode(node) {
    if (this._templateMap) return node.type ? this._templateMap[node.type] : this._templateMap["default"];
    else return null;
  }
  onDragOver(event) {
    if (this.droppableNodes && (!this.value || this.value.length === 0)) {
      event.dataTransfer.dropEffect = "move";
      event.preventDefault();
    }
  }
  onDrop(event) {
    if (this.droppableNodes && (!this.value || this.value.length === 0)) {
      event.preventDefault();
      let dragNode = this.dragNode;
      if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
        let dragNodeIndex = this.dragNodeIndex;
        this.value = this.value || [];
        if (this.validateDrop) {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex,
            accept: () => {
              this.processTreeDrop(dragNode, dragNodeIndex);
            }
          });
        } else {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex
          });
          this.processTreeDrop(dragNode, dragNodeIndex);
        }
      }
    }
  }
  processTreeDrop(dragNode, dragNodeIndex) {
    this.dragNodeSubNodes.splice(dragNodeIndex, 1);
    this.value.push(dragNode);
    this.dragDropService.stopDrag({
      node: dragNode
    });
  }
  onDragEnter() {
    if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
      this.dragHover = true;
    }
  }
  onDragLeave(event) {
    if (this.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
        this.dragHover = false;
      }
    }
  }
  allowDrop(dragNode, dropNode, dragNodeScope, dropPoint = "node") {
    if (!dragNode) {
      return false;
    } else if (this.isValidDragScope(dragNodeScope)) {
      let allow = true;
      if (dropNode) {
        if (dragNode === dropNode) {
          allow = false;
        } else {
          let parent = dropNode.parent;
          while (parent != null) {
            if (parent === dragNode) {
              allow = false;
              break;
            }
            parent = parent.parent;
          }
        }
      }
      return allow;
    } else {
      return false;
    }
  }
  isValidDragScope(dragScope) {
    let dropScope = this.droppableScope;
    if (dropScope) {
      if (typeof dropScope === "string") {
        if (typeof dragScope === "string") return dropScope === dragScope;
        else if (Array.isArray(dragScope)) return dragScope.indexOf(dropScope) != -1;
      } else if (Array.isArray(dropScope)) {
        if (typeof dragScope === "string") {
          return dropScope.indexOf(dragScope) != -1;
        } else if (Array.isArray(dragScope)) {
          for (let s of dropScope) {
            for (let ds of dragScope) {
              if (s === ds) {
                return true;
              }
            }
          }
        }
      }
      return false;
    } else {
      return true;
    }
  }
  _filter(value) {
    let filterValue = value;
    if (filterValue === "") {
      this.filteredNodes = null;
    } else {
      this.filteredNodes = [];
      const searchFields = this.filterBy.split(",");
      const filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(this.filterLocale);
      const isStrictMode = this.filterMode === "strict";
      for (let node of this.value) {
        let copyNode = __spreadValues({}, node);
        let paramsWithoutNode = {
          searchFields,
          filterText,
          isStrictMode
        };
        if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
          this.filteredNodes.push(copyNode);
        }
      }
    }
    this.updateSerializedValue();
    this.onFilter.emit({
      filter: filterValue,
      filteredValue: this.filteredNodes
    });
  }
  /**
   * Resets filter.
   * @group Method
   */
  resetFilter() {
    this.filteredNodes = null;
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  /**
   * Scrolls to virtual index.
   * @param {number} number - Index to be scrolled.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.virtualScroll && this.scroller?.scrollToIndex(index);
  }
  /**
   * Scrolls to virtual index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = __spreadValues({}, childNode);
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        node.expanded = true;
        return true;
      }
    }
  }
  isFilterMatched(node, params) {
    let {
      searchFields,
      filterText,
      isStrictMode
    } = params;
    let matched = false;
    for (let field of searchFields) {
      let fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(node, field))).toLocaleLowerCase(this.filterLocale);
      if (fieldValue.indexOf(filterText) > -1) {
        matched = true;
      }
    }
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        searchFields,
        filterText,
        isStrictMode
      }) || matched;
    }
    return matched;
  }
  getIndex(options, index) {
    const getItemOptions = options["getItemOptions"];
    return getItemOptions ? getItemOptions(index).index : index;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngOnDestroy() {
    if (this.dragStartSubscription) {
      this.dragStartSubscription.unsubscribe();
    }
    if (this.dragStopSubscription) {
      this.dragStopSubscription.unsubscribe();
    }
  }
  static \u0275fac = function Tree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tree)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(TreeDragDropService, 8), \u0275\u0275directiveInject(PrimeNGConfig), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tree,
    selectors: [["p-tree"]],
    contentQueries: function Tree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Tree_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c13, 5);
        \u0275\u0275viewQuery(_c14, 5);
        \u0275\u0275viewQuery(_c15, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapperViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      selectionMode: "selectionMode",
      loadingMode: "loadingMode",
      selection: "selection",
      style: "style",
      styleClass: "styleClass",
      contextMenu: "contextMenu",
      layout: "layout",
      draggableScope: "draggableScope",
      droppableScope: "droppableScope",
      draggableNodes: [2, "draggableNodes", "draggableNodes", booleanAttribute],
      droppableNodes: [2, "droppableNodes", "droppableNodes", booleanAttribute],
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      propagateSelectionUp: [2, "propagateSelectionUp", "propagateSelectionUp", booleanAttribute],
      propagateSelectionDown: [2, "propagateSelectionDown", "propagateSelectionDown", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      emptyMessage: "emptyMessage",
      ariaLabel: "ariaLabel",
      togglerAriaLabel: "togglerAriaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      validateDrop: [2, "validateDrop", "validateDrop", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterBy: "filterBy",
      filterMode: "filterMode",
      filterPlaceholder: "filterPlaceholder",
      filteredNodes: "filteredNodes",
      filterLocale: "filterLocale",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      indentation: [2, "indentation", "indentation", numberAttribute],
      _templateMap: "_templateMap",
      trackBy: "trackBy",
      virtualNodeHeight: "virtualNodeHeight"
    },
    outputs: {
      selectionChange: "selectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse",
      onNodeContextMenuSelect: "onNodeContextMenuSelect",
      onNodeDrop: "onNodeDrop",
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange",
      onFilter: "onFilter"
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 2,
    consts: [["filter", ""], ["scroller", ""], ["treeNode", ""], ["wrapper", ""], ["emptyFilter", ""], [3, "ngClass", "ngStyle", "class", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "drop", "dragover", "dragenter", "dragleave", "ngClass", "ngStyle"], ["class", "p-tree-loading-overlay p-component-overlay", 4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tree-filter-container", 4, "ngIf"], [4, "ngIf"], ["class", "p-tree-empty-message", 4, "ngIf"], [1, "p-tree-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-tree-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-tree-loading-icon"], [1, "p-tree-filter-container"], ["type", "search", "autocomplete", "off", 1, "p-tree-filter", "p-inputtext", "p-component", 3, "keydown.enter", "input"], [3, "styleClass", 4, "ngIf"], ["class", "p-tree-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-tree-filter-icon"], ["styleClass", "p-tree-wrapper", 3, "items", "tabindex", "style", "scrollHeight", "itemSize", "lazy", "options", "onScroll", "onScrollIndexChange", "onLazyLoad", 4, "ngIf"], ["styleClass", "p-tree-wrapper", 3, "onScroll", "onScrollIndexChange", "onLazyLoad", "items", "tabindex", "scrollHeight", "itemSize", "lazy", "options"], ["pTemplate", "content"], ["class", "p-tree-container", "role", "tree", 3, "ngClass", "style", 4, "ngIf"], ["role", "tree", 1, "p-tree-container", 3, "ngClass"], [3, "level", "rowNode", "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "indentation", "loadingMode", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "level", "rowNode", "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "indentation", "loadingMode"], ["pTemplate", "loader"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-tree-wrapper", 3, "ngStyle"], ["class", "p-tree-container", "role", "tree", 4, "ngIf"], ["role", "tree", 1, "p-tree-container"], [3, "node", "firstChild", "lastChild", "index", "level", "loadingMode", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level", "loadingMode"], [1, "p-tree-empty-message"], [4, "ngIf", "ngIfElse"], [3, "ngClass", "ngStyle"], ["class", "p-tree-loading-mask p-component-overlay", 4, "ngIf"], [1, "p-tree-loading-mask", "p-component-overlay"], [3, "node", "root"]],
    template: function Tree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Tree_div_0_Template, 7, 15, "div", 5)(1, Tree_div_1_Template, 6, 11, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.horizontal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.horizontal);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, PrimeTemplate, Scroller, SearchIcon, SpinnerIcon, UITreeNode],
    styles: ["@layer primeng{.p-tree-container{margin:0;padding:0;list-style-type:none;overflow:auto}.p-treenode-children{margin:0;padding:0;list-style-type:none}.p-tree-wrapper{overflow:auto}.p-treenode-selectable{cursor:pointer;-webkit-user-select:none;user-select:none}.p-tree-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex-shrink:0}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{display:flex;align-items:center}.p-tree-filter{width:100%}.p-tree-filter-container{position:relative;display:block;width:100%}.p-tree-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-tree-loading{position:relative;min-height:4rem}.p-tree .p-tree-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-tree-flex-scrollable{display:flex;flex:1;height:100%;flex-direction:column}.p-tree-flex-scrollable .p-tree-wrapper{flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0 none}.p-tree-horizontal{width:auto;padding-left:0;padding-right:0;overflow:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal tr,.p-tree.p-tree-horizontal td{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{font-weight:400;padding:.4em 1em .4em .2em;display:flex;align-items:center}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-x scroll center center transparent;padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf,.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{padding:0;margin:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-y scroll 0 0 transparent;width:1px}.p-tree.p-tree-horizontal table{height:0}.p-scroller .p-tree-container{overflow:visible}}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tree, [{
    type: Component,
    args: [{
      selector: "p-tree",
      template: `
        <div
            [ngClass]="{ 'p-tree p-component': true, 'p-tree-selectable': selectionMode, 'p-treenode-dragover': dragHover, 'p-tree-loading': loading, 'p-tree-flex-scrollable': scrollHeight === 'flex' }"
            [ngStyle]="style"
            [class]="styleClass"
            *ngIf="!horizontal"
            (drop)="onDrop($event)"
            (dragover)="onDragOver($event)"
            (dragenter)="onDragEnter()"
            (dragleave)="onDragLeave($event)"
        >
            <div class="p-tree-loading-overlay p-component-overlay" *ngIf="loading && loadingMode === 'mask'">
                <i *ngIf="loadingIcon" [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-tree-loading-icon'" />
                    <span *ngIf="loadingIconTemplate" class="p-tree-loading-icon">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            <div *ngIf="filter" class="p-tree-filter-container">
                <input #filter type="search" autocomplete="off" class="p-tree-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder" (keydown.enter)="$event.preventDefault()" (input)="_filter($event.target.value)" />
                <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-tree-filter-icon'" />
                <span *ngIf="filterIconTemplate" class="p-tree-filter-icon">
                    <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                </span>
            </div>
            <ng-container *ngIf="getRootNode()?.length">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="serializedValue"
                    [tabindex]="-1"
                    styleClass="p-tree-wrapper"
                    [style]="{ height: scrollHeight !== 'flex' ? scrollHeight : undefined }"
                    [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                    [itemSize]="virtualScrollItemSize || _virtualNodeHeight"
                    [lazy]="lazy"
                    (onScroll)="onScroll.emit($event)"
                    (onScrollIndexChange)="onScrollIndexChange.emit($event)"
                    (onLazyLoad)="onLazyLoad.emit($event)"
                    [options]="virtualScrollOptions"
                >
                    <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                        <ul *ngIf="items" class="p-tree-container" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                            <p-treeNode
                                #treeNode
                                *ngFor="let rowNode of items; let firstChild = first; trackBy: trackBy"
                                [level]="rowNode.level"
                                [rowNode]="rowNode"
                                [node]="rowNode.node"
                                [parentNode]="rowNode.parent"
                                [firstChild]="firstChild"
                                [lastChild]="rowNode.lastChild"
                                [index]="rowNode.index"
                                [itemSize]="scrollerOptions.itemSize"
                                [indentation]="indentation"
                                [loadingMode]="loadingMode"
                            ></p-treeNode>
                        </ul>
                    </ng-template>
                    <ng-container *ngIf="loaderTemplate">
                        <ng-template pTemplate="loader" let-scrollerOptions="options">
                            <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                        </ng-template>
                    </ng-container>
                </p-scroller>
                <ng-container *ngIf="!virtualScroll">
                    <div #wrapper class="p-tree-wrapper" [ngStyle]="{ 'max-height': scrollHeight }">
                        <ul class="p-tree-container" *ngIf="getRootNode()" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                            <p-treeNode
                                *ngFor="let node of getRootNode(); let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy"
                                [node]="node"
                                [firstChild]="firstChild"
                                [lastChild]="lastChild"
                                [index]="index"
                                [level]="0"
                                [loadingMode]="loadingMode"
                            ></p-treeNode>
                        </ul>
                    </div>
                </ng-container>
            </ng-container>

            <div class="p-tree-empty-message" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)">
                <ng-container *ngIf="!emptyMessageTemplate; else emptyFilter">
                    {{ emptyMessageLabel }}
                </ng-container>
                <ng-container #emptyFilter *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
            </div>
            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
        </div>
        <div [ngClass]="{ 'p-tree p-tree-horizontal p-component': true, 'p-tree-selectable': selectionMode }" [ngStyle]="style" [class]="styleClass" *ngIf="horizontal">
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            <div class="p-tree-loading-mask p-component-overlay" *ngIf="loading">
                <i *ngIf="loadingIcon" [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-tree-loading-icon'" />
                    <span *ngIf="loadingIconTemplate" class="p-tree-loading-icon">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <table *ngIf="value && value[0]">
                <p-treeNode [node]="value[0]" [root]="true"></p-treeNode>
            </table>
            <div class="p-tree-empty-message" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)">
                <ng-container *ngIf="!emptyMessageTemplate; else emptyFilter">
                    {{ emptyMessageLabel }}
                </ng-container>
                <ng-container #emptyFilter *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
            </div>
            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tree-container{margin:0;padding:0;list-style-type:none;overflow:auto}.p-treenode-children{margin:0;padding:0;list-style-type:none}.p-tree-wrapper{overflow:auto}.p-treenode-selectable{cursor:pointer;-webkit-user-select:none;user-select:none}.p-tree-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex-shrink:0}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{display:flex;align-items:center}.p-tree-filter{width:100%}.p-tree-filter-container{position:relative;display:block;width:100%}.p-tree-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-tree-loading{position:relative;min-height:4rem}.p-tree .p-tree-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-tree-flex-scrollable{display:flex;flex:1;height:100%;flex-direction:column}.p-tree-flex-scrollable .p-tree-wrapper{flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0 none}.p-tree-horizontal{width:auto;padding-left:0;padding-right:0;overflow:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal tr,.p-tree.p-tree-horizontal td{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{font-weight:400;padding:.4em 1em .4em .2em;display:flex;align-items:center}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-x scroll center center transparent;padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf,.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{padding:0;margin:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-y scroll 0 0 transparent;width:1px}.p-tree.p-tree-horizontal table{height:0}.p-scroller .p-tree-container{overflow:visible}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: TreeDragDropService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: PrimeNGConfig
  }, {
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    loadingMode: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    draggableScope: [{
      type: Input
    }],
    droppableScope: [{
      type: Input
    }],
    draggableNodes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    droppableNodes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionUp: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionDown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    togglerAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    validateDrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterMode: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filteredNodes: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    indentation: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    _templateMap: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    virtualNodeHeight: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onNodeContextMenuSelect: [{
      type: Output
    }],
    onNodeDrop: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }]
  });
})();
var TreeModule = class _TreeModule {
  static \u0275fac = function TreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TreeModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, SearchIcon, SpinnerIcon, PlusIcon, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, SearchIcon, SpinnerIcon, PlusIcon],
      exports: [Tree, SharedModule, ScrollerModule],
      declarations: [Tree, UITreeNode]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-multiselect.mjs
var _c02 = (a0) => ({
  height: a0
});
var _c110 = (a0, a1) => ({
  "p-multiselect-item": true,
  "p-disabled": a0,
  "p-focus": a1
});
var _c22 = (a0) => ({
  "p-variant-filled": a0
});
var _c32 = (a0) => ({
  "p-highlight": a0
});
var _c42 = (a0) => ({
  $implicit: a0
});
function MultiSelectItem_ng_container_3_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-checkbox-icon");
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelectItem_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelectItem_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275template(1, MultiSelectItem_ng_container_3_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.checkIconTemplate);
  }
}
function MultiSelectItem_ng_container_3_span_3_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelectItem_ng_container_3_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_3_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275template(1, MultiSelectItem_ng_container_3_span_3_1_Template, 1, 0, null, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c42, ctx_r0.selected));
  }
}
function MultiSelectItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelectItem_ng_container_3_CheckIcon_1_Template, 1, 2, "CheckIcon", 5)(2, MultiSelectItem_ng_container_3_span_2_Template, 2, 2, "span", 6)(3, MultiSelectItem_ng_container_3_span_3_Template, 2, 5, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checkIconTemplate && !ctx_r0.itemCheckboxIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.itemCheckboxIconTemplate);
  }
}
function MultiSelectItem_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function MultiSelectItem_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c52 = ["container"];
var _c62 = ["overlay"];
var _c72 = ["filterInput"];
var _c82 = ["focusInput"];
var _c92 = ["items"];
var _c102 = ["scroller"];
var _c112 = ["lastHiddenFocusableEl"];
var _c122 = ["firstHiddenFocusableEl"];
var _c132 = ["headerCheckbox"];
var _c142 = [[["p-header"]], [["p-footer"]]];
var _c152 = ["p-header", "p-footer"];
var _c162 = (a0, a1) => ({
  $implicit: a0,
  removeChip: a1
});
var _c172 = (a0) => ({
  "p-disabled": a0
});
var _c182 = (a0) => ({
  "max-height": a0
});
var _c192 = (a0) => ({
  options: a0
});
var _c20 = (a0, a1) => ({
  "p-variant-filled": a0,
  "p-checkbox-disabled": a1
});
var _c21 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
var _c222 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
var _c23 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c24 = () => ({});
function MultiSelect_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label() || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesCircleIcon", 31);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, ctx_r1.event));
    })("keydown", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onremoveTokenIconKeyDown($event, item_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c172, ctx_r1.isOptionDisabled(item_r4)))("styleClass", "p-multiselect-token-icon");
    \u0275\u0275attribute("tabindex", 0)("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, ctx_r1.event));
    })("keydown", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onremoveTokenIconKeyDown($event, item_r4));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_ng_container_1_Template, 1, 0, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("tabindex", 0)("data-pc-section", "clearicon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template, 1, 7, "TimesCircleIcon", 29)(2, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template, 2, 4, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeTokenIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27, 4)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getLabelByValue(item_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
  }
}
function MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || ctx_r1.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_7_ng_container_2_div_1_Template, 5, 2, "div", 26)(2, MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.chipSelectedItems());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "comma");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "chip");
  }
}
function MultiSelect_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_9_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 36);
    \u0275\u0275listener("click", function MultiSelect_ng_container_9_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-clear-icon");
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_9_span_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_container_9_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_9_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275listener("click", function MultiSelect_ng_container_9_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_9_span_2_1_Template, 1, 0, null, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate);
  }
}
function MultiSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_TimesIcon_1_Template, 1, 3, "TimesIcon", 34)(2, MultiSelect_ng_container_9_span_2_Template, 2, 3, "span", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clearIconTemplate);
  }
}
function MultiSelect_ng_container_11_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_11_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingIconTemplate);
  }
}
function MultiSelect_ng_container_11_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-multiselect-trigger-icon pi-spin " + ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_11_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 41);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-multiselect-trigger-icon pi pi-spinner pi-spin");
  }
}
function MultiSelect_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_11_ng_container_2_span_1_Template, 1, 1, "span", 38)(2, MultiSelect_ng_container_11_ng_container_2_span_2_Template, 1, 2, "span", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_11_ng_container_2_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIconTemplate);
  }
}
function MultiSelect_ng_template_12_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.dropdownIcon);
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_12_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 46);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-trigger-icon");
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_12_ng_container_0_span_1_Template, 1, 3, "span", 43)(2, MultiSelect_ng_template_12_ng_container_0_ChevronDownIcon_2_Template, 1, 3, "ChevronDownIcon", 44);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIcon);
  }
}
function MultiSelect_ng_template_12_span_1_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_12_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_12_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275template(1, MultiSelect_ng_template_12_span_1_1_Template, 1, 0, null, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_12_ng_container_0_Template, 3, 2, "ng-container", 20)(1, MultiSelect_ng_template_12_span_1_Template, 2, 3, "span", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_16_div_3_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_16_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_16_div_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c192, ctx_r1.filterOptions));
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 46);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-checkbox-icon");
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_CheckIcon_1_Template, 1, 2, "CheckIcon", 44);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allSelected());
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275template(1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_Template, 1, 0, null, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.checkIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c42, ctx_r1.allSelected()));
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275template(1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_Template, 1, 0, null, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c222, ctx_r1.allSelected(), ctx_r1.partialSelected()));
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_Template, 2, 5, "span", 62)(3, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_Template, 2, 6, "span", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.checkIconTemplate && !ctx_r1.headerCheckboxIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.checkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerCheckboxIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onToggleAll($event));
    })("keydown", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onHeaderCheckboxKeyDown($event));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "input", 60, 9);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_input_focus_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onHeaderCheckboxFocus());
    })("blur", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onHeaderCheckboxBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 61);
    \u0275\u0275template(5, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_Template, 4, 3, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c20, ctx_r1.variant === "filled" || ctx_r1.config.inputStyle() === "filled", ctx_r1.disabled || ctx_r1.toggleAllDisabled));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-p-hidden-accessible", true);
    \u0275\u0275advance();
    \u0275\u0275property("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled || ctx_r1.toggleAllDisabled);
    \u0275\u0275attribute("checked", ctx_r1.allSelected())("aria-label", ctx_r1.toggleAllAriaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c21, ctx_r1.allSelected(), ctx_r1.headerCheckboxFocus, ctx_r1.disabled || ctx_r1.toggleAllDisabled));
    \u0275\u0275attribute("aria-label", ctx_r1.toggleAllAriaLabel)("aria-checked", ctx_r1.allSelected());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allSelected() || ctx_r1.partialSelected());
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon", 46);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-filter-icon");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275template(1, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_Template, 1, 0, null, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "input", 65, 10);
    \u0275\u0275listener("input", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterInputChange($event));
    })("keydown", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterKeyDown($event));
    })("click", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInputClick($event));
    })("blur", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_SearchIcon_3_Template, 1, 1, "SearchIcon", 44)(4, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1._filterValue() || "")("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("autocomplete", ctx_r1.autocomplete)("placeholder", ctx_r1.filterPlaceHolder)("aria-owns", ctx_r1.id + "_list")("aria-activedescendant", ctx_r1.focusedOptionId)("placeholder", ctx_r1.filterPlaceHolder)("aria-label", ctx_r1.ariaFilterLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_TimesIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 46);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-close-icon");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275template(1, MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_Template, 1, 0, null, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template, 6, 17, "div", 55)(1, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template, 5, 10, "div", 56);
    \u0275\u0275elementStart(2, "button", 57);
    \u0275\u0275listener("click", function MultiSelect_ng_template_16_div_3_ng_template_4_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    });
    \u0275\u0275template(3, MultiSelect_ng_template_16_div_3_ng_template_4_TimesIcon_3_Template, 1, 1, "TimesIcon", 44)(4, MultiSelect_ng_template_16_div_3_ng_template_4_span_4_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.isSelectionAllDisabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filter);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.closeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, MultiSelect_ng_template_16_div_3_ng_container_2_Template, 1, 0, "ng-container", 33)(3, MultiSelect_ng_template_16_div_3_ng_container_3_Template, 2, 4, "ng-container", 23)(4, MultiSelect_ng_template_16_div_3_ng_template_4_Template, 5, 5, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r12 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterTemplate)("ngIfElse", builtInFilterElement_r12);
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_16_p_scroller_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r16 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c23, items_r14, scrollerOptions_r15));
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const scrollerOptions_r17 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c192, scrollerOptions_r17));
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 70);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_template_16_p_scroller_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 69, 11);
    \u0275\u0275listener("onLazyLoad", function MultiSelect_ng_template_16_p_scroller_5_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_16_p_scroller_5_ng_template_2_Template, 1, 5, "ng-template", 25)(3, MultiSelect_ng_template_16_p_scroller_5_ng_container_3_Template, 2, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(9, _c02, ctx_r1.scrollHeight));
    \u0275\u0275property("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize || ctx_r1._itemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate);
  }
}
function MultiSelect_ng_template_16_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_16_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_16_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r16 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c23, ctx_r1.visibleOptions(), \u0275\u0275pureFunction0(2, _c24)));
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getOptionGroupLabel(option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 74);
    \u0275\u0275template(2, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 20)(3, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c02, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c42, option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-multiSelectItem", 75);
    \u0275\u0275listener("onClick", function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template_p_multiSelectItem_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelect($event, false, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    })("onMouseEnter", function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template_p_multiSelectItem_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("option", option_r18)("selected", ctx_r1.isSelected(option_r18))("label", ctx_r1.getOptionLabel(option_r18))("disabled", ctx_r1.isOptionDisabled(option_r18))("template", ctx_r1.itemTemplate)("checkIconTemplate", ctx_r1.checkIconTemplate)("itemCheckboxIconTemplate", ctx_r1.itemCheckboxIconTemplate)("itemSize", scrollerOptions_r21.itemSize)("focused", ctx_r1.focusedOptionIndex() === ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)))("ariaSetSize", ctx_r1.ariaSetSize);
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 20)(1, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template, 2, 12, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.isOptionGroup(option_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOptionGroup(option_r18));
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 13);
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 76);
    \u0275\u0275template(1, MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_1_Template, 2, 1, "ng-container", 23)(2, MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_2_Template, 2, 0, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c02, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.emptyFilterTemplate && !ctx_r1.emptyTemplate)("ngIfElse", ctx_r1.emptyFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyFilterTemplate || ctx_r1.emptyTemplate);
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 14);
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 76);
    \u0275\u0275template(1, MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_1_Template, 2, 1, "ng-container", 23)(2, MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_2_Template, 2, 0, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c02, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.emptyTemplate)("ngIfElse", ctx_r1.empty);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate);
  }
}
function MultiSelect_ng_template_16_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 71, 12);
    \u0275\u0275template(2, MultiSelect_ng_template_16_ng_template_7_ng_template_2_Template, 2, 2, "ng-template", 72)(3, MultiSelect_ng_template_16_ng_template_7_li_3_Template, 3, 6, "li", 73)(4, MultiSelect_ng_template_16_ng_template_7_li_4_Template, 3, 6, "li", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r23 = ctx.$implicit;
    const scrollerOptions_r21 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", scrollerOptions_r21.contentStyleClass)("ngStyle", scrollerOptions_r21.contentStyle);
    \u0275\u0275attribute("aria-label", ctx_r1.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r23);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFilter() && ctx_r1.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasFilter() && ctx_r1.isEmpty());
  }
}
function MultiSelect_ng_template_16_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, MultiSelect_ng_template_16_div_9_ng_container_2_Template, 1, 0, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function MultiSelect_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49, 5);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_16_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MultiSelect_ng_template_16_div_3_Template, 6, 3, "div", 50);
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275template(5, MultiSelect_ng_template_16_p_scroller_5_Template, 4, 11, "p-scroller", 52)(6, MultiSelect_ng_template_16_ng_container_6_Template, 2, 6, "ng-container", 20)(7, MultiSelect_ng_template_16_ng_template_7_Template, 5, 6, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MultiSelect_ng_template_16_div_9_Template, 3, 1, "div", 53);
    \u0275\u0275elementStart(10, "span", 49, 7);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_16_Template_span_focus_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.panelStyleClass);
    \u0275\u0275property("ngClass", "p-multiselect-panel p-component")("ngStyle", ctx_r1.panelStyle);
    \u0275\u0275attribute("id", ctx_r1.id + "_list");
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(16, _c182, ctx_r1.virtualScroll ? "auto" : ctx_r1.scrollHeight || "auto"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var MULTISELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelect),
  multi: true
};
var MultiSelectItem = class _MultiSelectItem {
  config;
  id;
  option;
  selected;
  label;
  disabled;
  itemSize;
  focused;
  ariaPosInset;
  ariaSetSize;
  template;
  checkIconTemplate;
  itemCheckboxIconTemplate;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  constructor(config) {
    this.config = config;
  }
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
    event.stopPropagation();
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
  }
  static \u0275fac = function MultiSelectItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectItem)(\u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelectItem,
    selectors: [["p-multiSelectItem"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkIconTemplate: "checkIconTemplate",
      itemCheckboxIconTemplate: "itemCheckboxIconTemplate"
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 6,
    vars: 28,
    consts: [["pRipple", "", "role", "option", 1, "p-multiselect-item", 3, "click", "mouseenter", "ngStyle", "ngClass", "id"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-checkbox-box", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"]],
    template: function MultiSelectItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 0);
        \u0275\u0275listener("click", function MultiSelectItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function MultiSelectItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, MultiSelectItem_ng_container_3_Template, 4, 3, "ng-container", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, MultiSelectItem_span_4_Template, 2, 1, "span", 3)(5, MultiSelectItem_ng_container_5_Template, 1, 0, "ng-container", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(17, _c02, ctx.itemSize + "px"))("ngClass", \u0275\u0275pureFunction2(19, _c110, ctx.disabled, ctx.focused))("id", ctx.id);
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled)("aria-checked", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c22, ctx.config.inputStyle() === "filled"));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c32, ctx.selected));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(26, _c42, ctx.option));
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, CheckIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectItem, [{
    type: Component,
    args: [{
      selector: "p-multiSelectItem",
      template: `
        <li
            pRipple
            role="option"
            [ngStyle]="{ height: itemSize + 'px' }"
            class="p-multiselect-item"
            [ngClass]="{ 'p-multiselect-item': true, 'p-disabled': disabled, 'p-focus': focused }"
            [id]="id"
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [attr.aria-checked]="selected"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
        >
            <div class="p-checkbox p-component" [ngClass]="{ 'p-variant-filled': config.inputStyle() === 'filled' }">
                <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': selected }">
                    <ng-container *ngIf="selected">
                        <CheckIcon *ngIf="!checkIconTemplate && !itemCheckboxIconTemplate" [styleClass]="'p-checkbox-icon'" [attr.aria-hidden]="true" />
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                        </span>
                        <span *ngIf="itemCheckboxIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="itemCheckboxIconTemplate; context: { $implicit: selected }"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: PrimeNGConfig
  }], {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkIconTemplate: [{
      type: Input
    }],
    itemCheckboxIconTemplate: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var MultiSelect = class _MultiSelect {
  el;
  renderer;
  cd;
  zone;
  filterService;
  config;
  overlayService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay panel.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter = true;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the visibility of the options panel.
   * @group Props
   */
  overlayVisible;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Whether to show labels of selected item labels or use default label.
   * @group Props
   * @defaultValue true
   */
  set displaySelectedLabel(val) {
    this._displaySelectedLabel = val;
  }
  get displaySelectedLabel() {
    return this._displaySelectedLabel;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   * @defaultValue 3
   */
  set maxSelectedLabels(val) {
    this._maxSelectedLabels = val;
  }
  get maxSelectedLabels() {
    return this._maxSelectedLabels;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   */
  selectionLimit;
  /**
   * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
   * @group Props
   */
  selectedItemsLabel;
  /**
   * Whether to show the checkbox at header to toggle all items at once.
   * @group Props
   */
  showToggleAll = true;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to show the header.
   * @group Props
   */
  showHeader = true;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Whether the multiselect is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * Defines how the selected items are displayed.
   * @group Props
   */
  display = "comma";
  /**
   * Defines the autocomplete is active.
   * @group Props
   */
  autocomplete = "off";
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Whether to automatically manage layering.
   * @group Props
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Base zIndex value to use in layering.
   * @group Props
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   * @deprecated Use placeholder instead.
   */
  set defaultLabel(val) {
    this._defaultLabel = val;
    console.warn("defaultLabel property is deprecated since 16.6.0, use placeholder instead");
  }
  get defaultLabel() {
    return this._defaultLabel;
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!ObjectUtils.deepEquals(this._options(), val)) {
      this._options.set(val);
    }
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    this._filterValue.set(val);
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selectAll;
  }
  set selectAll(value) {
    this._selectAll = value;
  }
  /**
   * Indicates whether to focus on options when hovering over them, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Callback to invoke when value changes.
   * @param {MultiSelectChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {MultiSelectFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when multiselect receives focus.
   * @param {MultiSelectFocusEvent} event - Custom focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when multiselect loses focus.
   * @param {MultiSelectBlurEvent} event - Custom blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes visible.
   * @group Emits
   */
  onPanelShow = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes hidden.
   * @group Emits
   */
  onPanelHide = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new EventEmitter();
  containerViewChild;
  overlayViewChild;
  filterInputChild;
  focusInputViewChild;
  itemsViewChild;
  scroller;
  lastHiddenFocusableElementOnOverlay;
  firstHiddenFocusableElementOnOverlay;
  headerCheckboxViewChild;
  footerFacet;
  headerFacet;
  templates;
  searchValue;
  searchTimeout;
  _selectAll = null;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _defaultLabel;
  _placeholder = signal(void 0);
  _itemSize;
  _selectionLimit;
  _disableTooltip = false;
  value;
  _filteredOptions;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  valuesAsString;
  focus;
  filtered;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  selectedItemsTemplate;
  checkIconTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  removeTokenIconTemplate;
  closeIconTemplate;
  clearIconTemplate;
  dropdownIconTemplate;
  itemCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  headerCheckboxFocus;
  filterOptions;
  preventModelTouched;
  preventDocumentDefault;
  focused = false;
  itemsWrapper;
  _displaySelectedLabel = true;
  _maxSelectedLabels = 3;
  modelValue = signal(null);
  _filterValue = signal(null);
  _options = signal(null);
  startRangeIndex = signal(-1);
  focusedOptionIndex = signal(-1);
  selectedOptions;
  clickInProgress = false;
  get containerClass() {
    return {
      "p-multiselect p-component p-inputwrapper": true,
      "p-disabled": this.disabled,
      "p-multiselect-clearable": this.showClear && !this.disabled,
      "p-multiselect-chip": this.display === "chip",
      "p-focus": this.focused,
      "p-variant-filled": this.variant === "filled" || this.config.inputStyle() === "filled"
    };
  }
  get inputClass() {
    return {
      "p-multiselect-label p-inputtext": true,
      "p-placeholder": (this.placeholder() || this.defaultLabel) && (this.label() === this.placeholder() || this.label() === this.defaultLabel),
      "p-multiselect-label-empty": !this.selectedItemsTemplate && (this.label() === "p-emptylabel" || this.label().length === 0)
    };
  }
  get panelClass() {
    return {
      "p-multiselect-panel p-component": true,
      "p-input-filled": this.config.inputStyle() === "filled",
      "p-ripple-disabled": this.config.ripple === false
    };
  }
  get labelClass() {
    return {
      "p-multiselect-label": true,
      "p-placeholder": this.label() === this.placeholder() || this.label() === this.defaultLabel,
      "p-multiselect-label-empty": !this.placeholder() && !this.defaultLabel && (!this.modelValue() || this.modelValue().length === 0)
    };
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get filled() {
    if (typeof this.modelValue() === "string") return !!this.modelValue();
    return ObjectUtils.isNotEmpty(this.modelValue());
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.modelValue() !== "" && ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear && !this.disabled && this.filled;
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? "selectAll" : "unselectAll"] : void 0;
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const isArrayOfObjects = ObjectUtils.isArray(options) && ObjectUtils.isObject(options[0]);
    if (this._filterValue()) {
      let filteredOptions;
      if (isArrayOfObjects) {
        filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
      } else {
        filteredOptions = options.filter((option) => option.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase()));
      }
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    let label;
    const modelValue = this.modelValue();
    if (modelValue && modelValue.length && this.displaySelectedLabel) {
      if (ObjectUtils.isNotEmpty(this.maxSelectedLabels) && modelValue.length > this.maxSelectedLabels) {
        return this.getSelectedItemsLabel();
      } else {
        label = "";
        for (let i = 0; i < modelValue.length; i++) {
          if (i !== 0) {
            label += ", ";
          }
          label += this.getLabelByValue(modelValue[i]);
        }
      }
    } else {
      label = this.placeholder() || this.defaultLabel || "";
    }
    return label;
  });
  chipSelectedItems = computed(() => {
    return ObjectUtils.isNotEmpty(this.maxSelectedLabels) && this.modelValue() && this.modelValue().length > this.maxSelectedLabels ? this.modelValue().slice(0, this.maxSelectedLabels) : this.modelValue();
  });
  constructor(el, renderer, cd, zone, filterService, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    this.overlayService = overlayService;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && ObjectUtils.isNotEmpty(visibleOptions)) {
        if (this.optionValue && this.optionLabel && modelValue) {
          this.selectedOptions = visibleOptions.filter((option) => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
        } else {
          this.selectedOptions = modelValue;
        }
        this.cd.markForCheck();
      }
    });
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  maxSelectionLimitReached() {
    return ObjectUtils.isNotEmpty(this.selectionLimit) && this.modelValue() && this.modelValue().length === this.selectionLimit;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "selectedItems":
          this.selectedItemsTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "checkicon":
          this.checkIconTemplate = item.template;
          console.warn("checkicon is deprecated and will removed in v18. Use itemcheckboxicon or headercheckboxicon templates instead.");
          break;
        case "headercheckboxicon":
          this.headerCheckboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        case "removetokenicon":
          this.removeTokenIconTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "itemcheckboxicon":
          this.itemCheckboxIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (this.overlayVisible) {
      this.show();
    }
  }
  ngAfterViewChecked() {
    if (this.filtered) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.overlayViewChild?.alignOverlay();
        }, 1);
      });
      this.filtered = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
      this.onOptionSelect({
        originalEvent: null,
        option: [value]
      });
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
  }
  onInputClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
  }
  onOptionSelect(event, isFocus = false, index = -1) {
    const {
      originalEvent,
      option
    } = event;
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    let value = null;
    if (selected) {
      value = this.modelValue().filter((val) => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey()));
      this.onRemove.emit({
        newValue: this.value,
        removed: this.getOptionValue(option)
      });
    } else {
      value = [...this.modelValue() || [], this.getOptionValue(option)];
    }
    this.updateModel(value, originalEvent);
    index !== -1 && this.focusedOptionIndex.set(index);
    isFocus && DomHandler.focus(this.focusInputViewChild?.nativeElement);
    this.onChange.emit({
      originalEvent: __spreadProps(__spreadValues({}, event), {
        selected: !event.selected
      }),
      value,
      itemValue: option
    });
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  onOptionSelectRange(event, start = -1, end = -1) {
    start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = this.findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      const rangeStart = Math.min(start, end);
      const rangeEnd = Math.max(start, end);
      const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
    }
  }
  searchFields() {
    return (this.filterBy || this.optionLabel || "label").split(",");
  }
  findNearestSelectedOptionIndex(index, firstCheckUp = false) {
    let matchedOptionIndex = -1;
    if (this.hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = this.findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  hasSelectedOption() {
    return ObjectUtils.isNotEmpty(this.modelValue());
  }
  isSelectionAllDisabled() {
    return this.showToggleAll && ObjectUtils.isEmpty(this.selectionLimit);
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionGroup(option) {
    return (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
      return true;
    }
    return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    return (this.modelValue() || []).some((value) => ObjectUtils.equals(value, optionValue, this.equalityKey()));
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  getLabelByValue(value) {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    const matchedOption = options.find((option) => !this.isOptionGroup(option) && ObjectUtils.equals(this.getOptionValue(option), value, this.equalityKey()));
    return matchedOption ? this.getOptionLabel(matchedOption) : null;
  }
  getSelectedItemsLabel() {
    let pattern = /{(.*?)}/;
    let message = this.selectedItemsLabel ? this.selectedItemsLabel : this.config.getTranslation(TranslationKeys.SELECTION_MESSAGE);
    if (pattern.test(message)) {
      return message.replace(message.match(pattern)[0], this.modelValue().length + "");
    }
    return message;
  }
  getOptionLabel(option) {
    return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionValue && option && option.value !== void 0 ? option.value : option;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  onKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        if (event.code === "KeyA" && metaKey) {
          const value = this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          this.searchOptions(event, event.key);
          event.preventDefault();
        }
        break;
    }
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    !this.overlayVisible && this.show();
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    event.stopPropagation();
  }
  onHomeKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastFocusedOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.focusedOptionIndex());
        } else {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
      }
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onShiftKey() {
    this.startRangeIndex.set(this.focusedOptionIndex());
  }
  onContainerClick(event) {
    if (this.disabled || this.loading || this.readonly || event.target.isSameNode(this.focusInputViewChild?.nativeElement)) {
      return;
    }
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      event.preventDefault();
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      if (this.clickInProgress) {
        return;
      }
      this.clickInProgress = true;
      setTimeout(() => {
        this.clickInProgress = false;
      }, 150);
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    this.onClick.emit(event);
    this.cd.detectChanges();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getFirstFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  onInputFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit({
      originalEvent: event
    });
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit({
      originalEvent: event
    });
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onHeaderCheckboxKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "Space":
        this.onToggleAll(event);
        break;
      case "Enter":
        this.onToggleAll(event);
        break;
      default:
        break;
    }
  }
  onremoveTokenIconKeyDown(event, item) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "Space":
      case "Enter":
      case "NumpadEnter":
        this.removeOption(item, event);
        break;
      default:
        break;
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onHeaderCheckboxFocus() {
    this.headerCheckboxFocus = true;
  }
  onHeaderCheckboxBlur() {
    this.headerCheckboxFocus = false;
  }
  onToggleAll(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (this.selectAll != null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      const selectedDisabledOptions = this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && (this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false));
      const visibleOptions = this.allSelected() ? this.visibleOptions().filter((option) => !this.isValidOption(option) && this.isSelected(option)) : this.visibleOptions().filter((option) => this.isSelected(option) || this.isValidOption(option));
      const optionValues = [...selectedDisabledOptions, ...visibleOptions].map((option) => this.getOptionValue(option));
      const value = [...new Set(optionValues)];
      this.updateModel(value, event);
      if (!value.length || value.length === this.getAllVisibleAndNonVisibleOptions().length) {
        this.onSelectAllChange.emit({
          originalEvent: event,
          checked: !!value.length
        });
      }
    }
    if (this.partialSelected()) {
      this.selectedOptions = null;
      this.cd.markForCheck();
    }
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    DomHandler.focus(this.headerCheckboxViewChild?.nativeElement);
    this.headerCheckboxFocus = true;
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  writeValue(value) {
    this.value = value;
    if (!ObjectUtils.isEmpty(this.selectionLimit) && ObjectUtils.isEmpty(this.value)) {
      this.modelValue.set([]);
    } else {
      this.modelValue.set(this.value);
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  allSelected() {
    return this.selectAll !== null ? this.selectAll : ObjectUtils.isNotEmpty(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  partialSelected() {
    return this.selectedOptions && this.selectedOptions.length > 0 && this.selectedOptions.length < this.options.length;
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (this.overlayOptions?.mode === "modal") {
      DomHandler.unblockBodyScroll();
    }
    isFocus && DomHandler.focus(this.focusInputViewChild?.nativeElement);
    this.onPanelHide.emit();
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-multiselect-items-wrapper");
        this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
        if (this._options() && this._options().length) {
          if (this.virtualScroll) {
            const selectedIndex = ObjectUtils.isNotEmpty(this.modelValue()) ? this.focusedOptionIndex() : -1;
            if (selectedIndex !== -1) {
              this.scroller?.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '[data-p-highlight="true"]');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: "nearest",
                inline: "nearest"
              });
            }
          }
        }
        if (this.filterInputChild && this.filterInputChild.nativeElement) {
          this.preventModelTouched = true;
          if (this.autofocusFilter) {
            this.filterInputChild.nativeElement.focus();
          }
        }
        this.onPanelShow.emit();
        break;
      case "void":
        this.itemsWrapper = null;
        this.onModelTouched();
        break;
    }
  }
  resetFilter() {
    if (this.filterInputChild && this.filterInputChild.nativeElement) {
      this.filterInputChild.nativeElement.value = "";
    }
    this._filterValue.set(null);
    this._filteredOptions = null;
  }
  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }
  clear(event) {
    this.value = null;
    this.updateModel(null, event);
    this.selectedOptions = null;
    this.onClear.emit();
    this._disableTooltip = true;
    event.stopPropagation();
  }
  labelContainerMouseLeave() {
    if (this._disableTooltip) this._disableTooltip = false;
  }
  removeOption(optionValue, event) {
    let value = this.modelValue().filter((val) => !ObjectUtils.equals(val, optionValue, this.equalityKey()));
    this.updateModel(value, event);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: optionValue
    });
    this.onClear.emit();
    event && event.stopPropagation();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return DomHandler.hasClass(nextItem.children[0], "p-disabled") || DomHandler.isHidden(nextItem.children[0]) || DomHandler.hasClass(nextItem, "p-multiselect-item-group") ? this.findNextItem(nextItem) : nextItem.children[0];
    else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return DomHandler.hasClass(prevItem.children[0], "p-disabled") || DomHandler.isHidden(prevItem.children[0]) || DomHandler.hasClass(prevItem, "p-multiselect-item-group") ? this.findPrevItem(prevItem) : prevItem.children[0];
    else return null;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastOptionIndex() {
    return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  activateFilter() {
    if (this.hasFilter() && this._options) {
      if (this.group) {
        let filteredGroups = [];
        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push(__spreadValues(__spreadValues({}, optgroup), {
              [this.optionGroupChildren]: filteredSubOptions
            }));
          }
        }
        this._filteredOptions = filteredGroups;
      } else {
        this._filteredOptions = this.filterService.filter(this.options, this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
      }
    } else {
      this._filteredOptions = null;
    }
  }
  hasFocusableElements() {
    return DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  hasFilter() {
    return this._filterValue() && this._filterValue().trim().length > 0;
  }
  static \u0275fac = function MultiSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelect)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService), \u0275\u0275directiveInject(PrimeNGConfig), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelect,
    selectors: [["p-multiSelect"]],
    contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MultiSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c52, 5);
        \u0275\u0275viewQuery(_c62, 5);
        \u0275\u0275viewQuery(_c72, 5);
        \u0275\u0275viewQuery(_c82, 5);
        \u0275\u0275viewQuery(_c92, 5);
        \u0275\u0275viewQuery(_c102, 5);
        \u0275\u0275viewQuery(_c112, 5);
        \u0275\u0275viewQuery(_c122, 5);
        \u0275\u0275viewQuery(_c132, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterInputChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 4,
    hostBindings: function MultiSelect_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible)("p-inputwrapper-filled", ctx.filled);
      }
    },
    inputs: {
      id: "id",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      panelStyle: "panelStyle",
      panelStyleClass: "panelStyleClass",
      inputId: "inputId",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterPlaceHolder: "filterPlaceHolder",
      filterLocale: "filterLocale",
      overlayVisible: [2, "overlayVisible", "overlayVisible", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      variant: "variant",
      appendTo: "appendTo",
      dataKey: "dataKey",
      name: "name",
      ariaLabelledBy: "ariaLabelledBy",
      displaySelectedLabel: "displaySelectedLabel",
      maxSelectedLabels: "maxSelectedLabels",
      selectionLimit: [2, "selectionLimit", "selectionLimit", (value) => numberAttribute(value, null)],
      selectedItemsLabel: "selectedItemsLabel",
      showToggleAll: [2, "showToggleAll", "showToggleAll", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      filterBy: "filterBy",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      loadingIcon: "loadingIcon",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      display: "display",
      autocomplete: "autocomplete",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      defaultLabel: "defaultLabel",
      placeholder: "placeholder",
      options: "options",
      filterValue: "filterValue",
      itemSize: "itemSize",
      selectAll: "selectAll",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      filterFields: "filterFields",
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onClear: "onClear",
      onPanelShow: "onPanelShow",
      onPanelHide: "onPanelHide",
      onLazyLoad: "onLazyLoad",
      onRemove: "onRemove",
      onSelectAllChange: "onSelectAllChange"
    },
    features: [\u0275\u0275ProvidersFeature([MULTISELECT_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c152,
    decls: 17,
    vars: 44,
    consts: [["container", ""], ["focusInput", ""], ["elseBlock", ""], ["overlay", ""], ["token", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["headerCheckbox", ""], ["filterInput", ""], ["scroller", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], [1, "p-hidden-accessible"], ["role", "combobox", "pAutoFocus", "", 3, "focus", "blur", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus"], [1, "p-multiselect-label-container", 3, "mouseleave", "pTooltip", "tooltipDisabled", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-multiselect-trigger"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], ["class", "p-multiselect-token", 4, "ngFor", "ngForOf"], [1, "p-multiselect-token"], [1, "p-multiselect-token-label"], [3, "ngClass", "styleClass", "click", "keydown", 4, "ngIf"], ["class", "p-multiselect-token-icon", 3, "click", "keydown", 4, "ngIf"], [3, "click", "keydown", "ngClass", "styleClass"], [1, "p-multiselect-token-icon", 3, "click", "keydown"], [4, "ngTemplateOutlet"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-multiselect-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-multiselect-clear-icon", 3, "click"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-multiselect-trigger-icon", 4, "ngIf"], ["class", "p-multiselect-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-multiselect-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-multiselect-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-items-wrapper", 3, "ngStyle"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["class", "p-multiselect-footer", 4, "ngIf"], [1, "p-multiselect-header"], ["class", "p-checkbox p-component", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-multiselect-close", "p-link", "p-button-icon-only", 3, "click"], ["class", "p-multiselect-close-icon", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "click", "keydown", "ngClass"], ["type", "checkbox", 3, "focus", "blur", "readonly", "disabled"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], ["class", "p-checkbox-icon", 4, "ngIf"], [1, "p-checkbox-icon"], [1, "p-multiselect-filter-container"], ["type", "text", "role", "searchbox", "role", "searchbox", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "input", "keydown", "click", "blur", "value", "disabled"], ["class", "p-multiselect-filter-icon", 4, "ngIf"], [1, "p-multiselect-filter-icon"], [1, "p-multiselect-close-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "tabindex", "lazy", "options"], ["pTemplate", "loader"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-items", "p-component", 3, "ngClass", "ngStyle"], ["ngFor", "", 3, "ngForOf"], ["class", "p-multiselect-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-multiselect-item-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "selected", "label", "disabled", "template", "checkIconTemplate", "itemCheckboxIconTemplate", "itemSize", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-multiselect-empty-message", 3, "ngStyle"], [1, "p-multiselect-footer"]],
    template: function MultiSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c142);
        \u0275\u0275elementStart(0, "div", 15, 0);
        \u0275\u0275listener("click", function MultiSelect_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onContainerClick($event));
        });
        \u0275\u0275elementStart(2, "div", 16)(3, "input", 17, 1);
        \u0275\u0275listener("focus", function MultiSelect_Template_input_focus_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function MultiSelect_Template_input_blur_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keydown", function MultiSelect_Template_input_keydown_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 18);
        \u0275\u0275listener("mouseleave", function MultiSelect_Template_div_mouseleave_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.labelContainerMouseLeave());
        });
        \u0275\u0275elementStart(6, "div", 19);
        \u0275\u0275template(7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 20)(8, MultiSelect_ng_container_8_Template, 1, 0, "ng-container", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, MultiSelect_ng_container_9_Template, 3, 2, "ng-container", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 22);
        \u0275\u0275template(11, MultiSelect_ng_container_11_Template, 3, 2, "ng-container", 23)(12, MultiSelect_ng_template_12_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p-overlay", 24, 3);
        \u0275\u0275twoWayListener("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function MultiSelect_Template_p_overlay_onHide_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(16, MultiSelect_ng_template_16_Template, 12, 18, "ng-template", 25);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_19_0;
        const elseBlock_r24 = \u0275\u0275reference(13);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("data-p-hidden-accessible", true);
        \u0275\u0275advance();
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("aria-disabled", ctx.disabled)("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_19_0 = ctx.overlayVisible) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : false)("aria-controls", ctx.overlayVisible ? ctx.id + "_list" : null)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("value", ctx.label() || "empty");
        \u0275\u0275advance(2);
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipDisabled", ctx._disableTooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.labelClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.selectedItemsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(41, _c162, ctx.selectedOptions, ctx.removeOption.bind(ctx)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r24);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, Tooltip, Ripple, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesCircleIcon, TimesIcon, ChevronDownIcon, MultiSelectItem],
    styles: ["@layer primeng{.p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-token-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelect, [{
    type: Component,
    args: [{
      selector: "p-multiSelect",
      template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">
            <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                <input
                    #focusInput
                    [pTooltip]="tooltip"
                    [tooltipPosition]="tooltipPosition"
                    [positionStyle]="tooltipPositionStyle"
                    [tooltipStyleClass]="tooltipStyleClass"
                    [attr.aria-disabled]="disabled"
                    [attr.id]="inputId"
                    role="combobox"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-haspopup]="'listbox'"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                    [attr.tabindex]="!disabled ? tabindex : -1"
                    [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (keydown)="onKeyDown($event)"
                    pAutoFocus
                    [autofocus]="autofocus"
                    [attr.value]="label() || 'empty'"
                />
            </div>
            <div
                class="p-multiselect-label-container"
                [pTooltip]="tooltip"
                (mouseleave)="labelContainerMouseLeave()"
                [tooltipDisabled]="_disableTooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
            >
                <div [ngClass]="labelClass">
                    <ng-container *ngIf="!selectedItemsTemplate">
                        <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                        <ng-container *ngIf="display === 'chip'">
                            <div #token *ngFor="let item of chipSelectedItems(); let i = index" class="p-multiselect-token">
                                <span class="p-multiselect-token-label">{{ getLabelByValue(item) }}</span>
                                <ng-container *ngIf="!disabled">
                                    <TimesCircleIcon
                                        *ngIf="!removeTokenIconTemplate"
                                        [ngClass]="{ 'p-disabled': isOptionDisabled(item) }"
                                        [styleClass]="'p-multiselect-token-icon'"
                                        (click)="removeOption(item, event)"
                                        (keydown)="onremoveTokenIconKeyDown($event, item)"
                                        [attr.tabindex]="0"
                                        [attr.data-pc-section]="'clearicon'"
                                        [attr.aria-hidden]="true"
                                    />
                                    <span
                                        *ngIf="removeTokenIconTemplate"
                                        class="p-multiselect-token-icon"
                                        (click)="removeOption(item, event)"
                                        (keydown)="onremoveTokenIconKeyDown($event, item)"
                                        [attr.tabindex]="0"
                                        [attr.data-pc-section]="'clearicon'"
                                        [attr.aria-hidden]="true"
                                    >
                                        <ng-container *ngTemplateOutlet="removeTokenIconTemplate"></ng-container>
                                    </span>
                                </ng-container>
                            </div>
                            <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                </div>
                <ng-container *ngIf="isVisibleClearIcon">
                    <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-multiselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
                    <span *ngIf="clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                        <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <div class="p-multiselect-trigger">
                <ng-container *ngIf="loading; else elseBlock">
                    <ng-container *ngIf="loadingIconTemplate">
                        <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                    </ng-container>
                    <ng-container *ngIf="!loadingIconTemplate">
                        <span *ngIf="loadingIcon" [ngClass]="'p-multiselect-trigger-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                        <span *ngIf="!loadingIcon" [class]="'p-multiselect-trigger-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                    </ng-container>
                </ng-container>
                <ng-template #elseBlock>
                    <ng-container *ngIf="!dropdownIconTemplate">
                        <span *ngIf="dropdownIcon" class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true"></span>
                        <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-multiselect-trigger-icon'" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true" />
                    </ng-container>
                    <span *ngIf="dropdownIconTemplate" class="p-multiselect-trigger-icon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true">
                        <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                    </span>
                </ng-template>
            </div>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [attr.id]="id + '_list'" [ngClass]="'p-multiselect-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <div class="p-multiselect-header" *ngIf="showHeader">
                            <ng-content select="p-header"></ng-content>
                            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div
                                    class="p-checkbox p-component"
                                    *ngIf="isSelectionAllDisabled()"
                                    [ngClass]="{ 'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled', 'p-checkbox-disabled': disabled || toggleAllDisabled }"
                                    (click)="onToggleAll($event)"
                                    (keydown)="onHeaderCheckboxKeyDown($event)"
                                >
                                    <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                                        <input
                                            #headerCheckbox
                                            type="checkbox"
                                            [readonly]="readonly"
                                            [attr.checked]="allSelected()"
                                            (focus)="onHeaderCheckboxFocus()"
                                            (blur)="onHeaderCheckboxBlur()"
                                            [disabled]="disabled || toggleAllDisabled"
                                            [attr.aria-label]="toggleAllAriaLabel"
                                        />
                                    </div>
                                    <div
                                        class="p-checkbox-box"
                                        role="checkbox"
                                        [attr.aria-label]="toggleAllAriaLabel"
                                        [attr.aria-checked]="allSelected()"
                                        [ngClass]="{ 'p-highlight': allSelected(), 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }"
                                    >
                                        <ng-container *ngIf="allSelected() || partialSelected()">
                                            <ng-container *ngIf="!checkIconTemplate && !headerCheckboxIconTemplate">
                                                <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="allSelected()" [attr.aria-hidden]="true" />
                                            </ng-container>

                                            <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                <ng-template *ngTemplateOutlet="checkIconTemplate; context: { $implicit: allSelected() }"></ng-template>
                                            </span>
                                            <span *ngIf="headerCheckboxIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                <ng-template *ngTemplateOutlet="headerCheckboxIconTemplate; context: { $implicit: allSelected(), partialSelected: partialSelected() }"></ng-template>
                                            </span>
                                        </ng-container>
                                    </div>
                                </div>
                                <div class="p-multiselect-filter-container" *ngIf="filter">
                                    <input
                                        #filterInput
                                        type="text"
                                        role="searchbox"
                                        [attr.autocomplete]="autocomplete"
                                        [attr.placeholder]="filterPlaceHolder"
                                        role="searchbox"
                                        [attr.aria-owns]="id + '_list'"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        [value]="_filterValue() || ''"
                                        (input)="onFilterInputChange($event)"
                                        (keydown)="onFilterKeyDown($event)"
                                        (click)="onInputClick($event)"
                                        (blur)="onFilterBlur($event)"
                                        class="p-multiselect-filter p-inputtext p-component"
                                        [disabled]="disabled"
                                        [attr.placeholder]="filterPlaceHolder"
                                        [attr.aria-label]="ariaFilterLabel"
                                    />
                                    <SearchIcon [styleClass]="'p-multiselect-filter-icon'" *ngIf="!filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate" class="p-multiselect-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>

                                <button class="p-multiselect-close p-link p-button-icon-only" type="button" (click)="close($event)" pRipple [attr.aria-label]="closeAriaLabel">
                                    <TimesIcon [styleClass]="'p-multiselect-close-icon'" *ngIf="!closeIconTemplate" />
                                    <span *ngIf="closeIconTemplate" class="p-multiselect-close-icon">
                                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                                    </span>
                                </button>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-items-wrapper" [ngStyle]="{ 'max-height': virtualScroll ? 'auto' : scrollHeight || 'auto' }">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [tabindex]="-1"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items class="p-multiselect-items p-component" [ngClass]="scrollerOptions.contentStyleClass" [ngStyle]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-multiselect-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-multiSelectItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [checkIconTemplate]="checkIconTemplate"
                                                [itemCheckboxIconTemplate]="itemCheckboxIconTemplate"
                                                [itemSize]="scrollerOptions.itemSize"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-multiSelectItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                            <ng-content select="p-footer"></ng-content>
                            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        </div>

                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-focus]": "focused || overlayVisible",
        "[class.p-inputwrapper-filled]": "filled"
      },
      providers: [MULTISELECT_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-token-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }], {
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterPlaceHolder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    overlayVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    displaySelectedLabel: [{
      type: Input
    }],
    maxSelectedLabels: [{
      type: Input
    }],
    selectionLimit: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    selectedItemsLabel: [{
      type: Input
    }],
    showToggleAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    display: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    defaultLabel: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterFields: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onPanelShow: [{
      type: Output
    }],
    onPanelHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelectAllChange: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    filterInputChild: [{
      type: ViewChild,
      args: ["filterInput"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    headerCheckboxViewChild: [{
      type: ViewChild,
      args: ["headerCheckbox"]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MultiSelectModule = class _MultiSelectModule {
  static \u0275fac = function MultiSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MultiSelectModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, CheckIcon, SearchIcon, TimesCircleIcon, TimesIcon, ChevronDownIcon, CheckIcon, MinusIcon, OverlayModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, CheckIcon, SearchIcon, TimesCircleIcon, TimesIcon, ChevronDownIcon, CheckIcon, MinusIcon],
      exports: [MultiSelect, OverlayModule, SharedModule, ScrollerModule],
      declarations: [MultiSelect, MultiSelectItem]
    }]
  }], null, null);
})();

// src/app/features/menus/components/menu-list/menu-list.component.ts
var _c03 = (a0, a1) => ({ "text-orange-500": a0, "text-green-500": a1 });
function MenuListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function MenuListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 12);
    \u0275\u0275text(2, "\u5C1A\u7121\u9078\u55AE\u9805\u76EE");
    \u0275\u0275elementEnd()();
  }
}
function MenuListComponent_p_tree_13_ng_template_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r4.data.description);
  }
}
function MenuListComponent_p_tree_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275elementStart(3, "div")(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275element(7, "p-tag", 20);
    \u0275\u0275template(8, MenuListComponent_p_tree_13_ng_template_1_span_8_Template, 2, 1, "span", 21);
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "button", 24);
    \u0275\u0275listener("click", function MenuListComponent_p_tree_13_ng_template_1_Template_button_click_14_listener() {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editMenu(node_r4.data));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 25);
    \u0275\u0275listener("click", function MenuListComponent_p_tree_13_ng_template_1_Template_button_click_15_listener() {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(node_r4.data));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", node_r4.data.icon || "pi pi-circle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(node_r4.data.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getMenuTypeLabel(node_r4.data.menuType))("severity", ctx_r1.getMenuTypeSeverity(node_r4.data.menuType));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r4.data.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c03, node_r4.data.level === 2, node_r4.data.level < 2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u5C64\u7D1A: ", node_r4.data.level + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u6392\u5E8F: ", node_r4.data.displayOrder, "");
  }
}
function MenuListComponent_p_tree_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tree", 13);
    \u0275\u0275listener("onNodeDrop", function MenuListComponent_p_tree_13_Template_p_tree_onNodeDrop_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeDrop($event));
    });
    \u0275\u0275template(1, MenuListComponent_p_tree_13_ng_template_1_Template, 16, 11, "ng-template", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.menuTree)("draggableNodes", true)("droppableNodes", true);
  }
}
var MenuListComponent = class _MenuListComponent {
  adminMenusService;
  confirmationService;
  messageService;
  router;
  menuTree = [];
  loading = false;
  constructor(adminMenusService, confirmationService, messageService, router) {
    this.adminMenusService = adminMenusService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
    this.router = router;
  }
  ngOnInit() {
    this.loadMenuTree();
  }
  loadMenuTree() {
    this.loading = true;
    this.adminMenusService.apiAdminMenusTreeGet().subscribe({
      next: (response) => {
        const menuTreeData = response?.data || [];
        this.menuTree = this.convertToTreeNodes(menuTreeData);
        this.loading = false;
      },
      error: (error) => {
        console.error("\u8F09\u5165\u9078\u55AE\u6A39\u72C0\u7D50\u69CB\u5931\u6557:", error);
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u9078\u55AE"
        });
        this.loading = false;
        this.menuTree = [];
      }
    });
  }
  /** MenuWithChildren 轉成 tree 需要的格式，限制最多三層 */
  convertToTreeNodes(menus, level = 0) {
    return menus.map((menu) => ({
      key: menu._id || "",
      label: menu.name,
      data: __spreadProps(__spreadValues({}, menu), {
        level,
        displayOrder: menu.displayOrder || 0
      }),
      children: menu.children && level < 2 ? this.convertToTreeNodes(menu.children, level + 1) : [],
      expanded: true
    }));
  }
  onNodeDrop(event) {
    if (!this.validateNodeDropLevel(event)) {
      this.messageService.add({
        severity: "warn",
        summary: "\u8B66\u544A",
        detail: "\u9078\u55AE\u5C64\u7D1A\u4E0D\u80FD\u8D85\u904E\u4E09\u5C64"
      });
      this.loadMenuTree();
      return;
    }
    const flatMenuOrders = this.convertTreeToFlatStructure(this.menuTree);
    this.adminMenusService.apiAdminMenusOrderPatch({ menuOrders: flatMenuOrders }).subscribe({
      next: () => {
        this.messageService.add({
          severity: "info",
          summary: "\u63D0\u793A",
          detail: "\u9806\u5E8F\u66F4\u65B0\u6210\u529F"
        });
        this.loadMenuTree();
      },
      error: (error) => {
        console.error("\u66F4\u65B0\u9078\u55AE\u9806\u5E8F\u5931\u6557:", error);
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u66F4\u65B0\u9078\u55AE\u9806\u5E8F\u5931\u6557"
        });
      }
    });
  }
  /**
   * 驗證拖拽後的節點是否符合層級限制（最多三層）
   * @param event 樹節點拖拽事件
   * @returns 是否通過驗證
   */
  validateNodeDropLevel(event) {
    const maxDepth = this.calculateTreeDepth(this.menuTree);
    return maxDepth <= 3;
  }
  /**
   * 計算樹的最大深度
   * @param nodes 樹節點陣列
   * @returns 最大深度
   */
  calculateTreeDepth(nodes) {
    if (!nodes || nodes.length === 0) {
      return 0;
    }
    let maxDepth = 1;
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        const childDepth = this.calculateTreeDepth(node.children);
        maxDepth = Math.max(maxDepth, 1 + childDepth);
      }
    }
    return maxDepth;
  }
  /**
   * 將樹狀結構轉換成扁平的數據庫格式
   * @param nodes TreeNode 陣列
   * @param parentId 父節點 ID
   * @param level 層級
   * @returns 扁平化的選單順序陣列
   */
  convertTreeToFlatStructure(nodes, parentId = void 0, level = 0) {
    const result = [];
    nodes.forEach((node, index) => {
      result.push({
        id: node.key,
        parentId,
        level,
        displayOrder: index
      });
      if (node.children && node.children.length > 0) {
        const childResults = this.convertTreeToFlatStructure(node.children, node.key, level + 1);
        result.push(...childResults);
      }
    });
    return result;
  }
  editMenu(menu) {
    this.router.navigate(["/menus/edit", menu._id]);
  }
  confirmDelete(menu) {
    this.confirmationService.confirm({
      message: `\u78BA\u5B9A\u8981\u522A\u9664\u9078\u55AE\u300C${menu.name}\u300D\u55CE\uFF1F`,
      header: "\u78BA\u8A8D\u522A\u9664",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteMenu(menu);
      }
    });
  }
  deleteMenu(menu) {
    if (!menu._id)
      return;
    this.adminMenusService.apiAdminMenusIdDelete(menu._id).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "\u6210\u529F",
          detail: "\u9078\u55AE\u5DF2\u522A\u9664"
        });
        this.loadMenuTree();
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u522A\u9664\u9078\u55AE\u5931\u6557"
        });
      }
    });
  }
  getMenuTypeLabel(menuType) {
    switch (menuType) {
      case "category":
        return "\u5167\u5BB9\u76EE\u9304";
      case "single":
        return "\u55AE\u9801";
      case "link":
        return "\u9023\u7D50";
      case "product":
        return "\u7522\u54C1";
      default:
        return menuType;
    }
  }
  getMenuTypeSeverity(menuType) {
    switch (menuType) {
      case "category":
        return "success";
      case "single":
        return "info";
      case "link":
        return "warning";
      default:
        return "info";
    }
  }
  static \u0275fac = function MenuListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuListComponent)(\u0275\u0275directiveInject(AdminMenusService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuListComponent, selectors: [["app-menu-list"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService, TreeDragDropService])], decls: 16, vars: 3, consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], ["type", "button", "pButton", "", "pRipple", "", "label", "\u65B0\u589E\u9078\u55AE", "icon", "pi pi-plus", "routerLink", "/menus/new", 1, "p-button-primary"], [1, "flex", "justify-content-between", "align-items-center", "mb-3"], ["class", "flex justify-content-center align-items-center", "style", "height: 200px", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["styleClass", "w-full", 3, "value", "draggableNodes", "droppableNodes", "onNodeDrop", 4, "ngIf"], [1, "flex", "justify-content-center", "align-items-center", 2, "height", "200px"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "text-center", "py-5"], [1, "text-muted"], ["styleClass", "w-full", 3, "onNodeDrop", "value", "draggableNodes", "droppableNodes"], ["pTemplate", "default"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2", "p-3", "w-full"], [1, "flex", "align-items-center", "gap-2"], [1, "text-primary", 3, "ngClass"], [1, "font-bold"], [1, "text-sm", "text-secondary"], [3, "value", "severity"], ["class", "ml-2", 4, "ngIf"], [1, "ml-2", 3, "ngClass"], [1, "ml-2"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pTooltip", "\u7DE8\u8F2F", 1, "p-button-rounded", "p-button-info", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "\u522A\u9664", 1, "p-button-rounded", "p-button-danger", 3, "click"]], template: function MenuListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
      \u0275\u0275text(5, "\u9078\u55AE\u7BA1\u7406");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "\u62D6\u66F3\u8ABF\u6574\u9078\u55AE\u9806\u5E8F\u548C\u968E\u5C64\uFF08\u6700\u591A\u4E09\u5C64\uFF09");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 5);
      \u0275\u0275elementStart(10, "p-card");
      \u0275\u0275template(11, MenuListComponent_div_11_Template, 2, 0, "div", 6)(12, MenuListComponent_div_12_Template, 3, 0, "div", 7)(13, MenuListComponent_p_tree_13_Template, 2, 3, "p-tree", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(14, "p-confirmDialog")(15, "p-toast");
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.menuTree.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.menuTree.length > 0);
    }
  }, dependencies: [NgClass, NgIf, RouterLink, PrimeTemplate, ButtonDirective, Toast, ConfirmDialog, Tag, Card, Tree, Ripple, Tooltip], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%]     .p-orderlist .p-orderlist-header {\n  background: var(--primary-color);\n  color: var(--primary-color-text);\n  border: 1px solid var(--primary-color);\n}\n[_nghost-%COMP%]     .p-orderlist .p-orderlist-list {\n  min-height: 200px;\n}\n[_nghost-%COMP%]     .p-orderlist .p-orderlist-item {\n  border: 1px solid var(--surface-border);\n  margin-bottom: 0.5rem;\n  border-radius: var(--border-radius);\n  transition: all 0.2s;\n}\n[_nghost-%COMP%]     .p-orderlist .p-orderlist-item:hover {\n  background: var(--surface-hover);\n}\n[_nghost-%COMP%]     .p-orderlist .p-orderlist-item.p-orderlist-item-active {\n  background: var(--primary-50);\n  border-color: var(--primary-color);\n}\n[_nghost-%COMP%]     .p-orderlist-droppoint-highlight {\n  background: var(--primary-color);\n  height: 2px;\n  margin: 0.25rem 0;\n}\n@media (max-width: 768px) {\n  .flex.flex-wrap.align-items-center.justify-content-between[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .flex.flex-wrap.align-items-center.justify-content-between[_ngcontent-%COMP%]   .flex.align-items-center.gap-2[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=menu-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuListComponent, { className: "MenuListComponent", filePath: "src/app/features/menus/components/menu-list/menu-list.component.ts", lineNumber: 17 });
})();

// src/app/features/menus/components/menu-form/menu-form.component.ts
function MenuFormComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u8F09\u5165\u4E2D...");
    \u0275\u0275elementEnd()();
  }
}
function MenuFormComponent_form_7_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("name"), " ");
  }
}
function MenuFormComponent_form_7_small_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function MenuFormComponent_form_7_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h4");
    \u0275\u0275text(2, "\u55AE\u9801\u914D\u7F6E");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9)(6, "label", 34);
    \u0275\u0275text(7, "\u986F\u793A\u9801\u9762");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "p-dropdown", 35);
    \u0275\u0275elementStart(9, "small", 16);
    \u0275\u0275text(10, " \u5C07\u5728\u8A72\u9078\u55AE\u986F\u793A\u7684\u5167\u5BB9\u9801\u9762 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 22)(13, "label", 36);
    \u0275\u0275text(14, "\u5728\u65B0\u8996\u7A97\u958B\u555F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "p-inputSwitch", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("options", ctx_r1.singlePageOptions);
  }
}
function MenuFormComponent_form_7_div_36_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("url"), " ");
  }
}
function MenuFormComponent_form_7_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h4");
    \u0275\u0275text(2, "\u9023\u7D50\u914D\u7F6E");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9)(6, "label", 39);
    \u0275\u0275text(7, "\u9023\u7D50 URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275template(9, MenuFormComponent_form_7_div_36_small_9_Template, 2, 1, "small", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 22)(12, "label", 36);
    \u0275\u0275text(13, "\u5728\u65B0\u8996\u7A97\u958B\u555F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-inputSwitch", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("ng-invalid", ctx_r1.isFieldInvalid("url"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("url"));
  }
}
function MenuFormComponent_form_7_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "h4");
    \u0275\u0275text(2, "\u7522\u54C1\u914D\u7F6E");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9)(6, "label", 42);
    \u0275\u0275text(7, "\u7522\u54C1\u5206\u985E");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "p-dropdown", 43);
    \u0275\u0275elementStart(9, "small", 16);
    \u0275\u0275text(10, " \u6307\u5B9A\u986F\u793A\u7684\u7522\u54C1\u5206\u985EID\uFF0C\u7559\u7A7A\u986F\u793A\u6240\u6709\u7522\u54C1 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 22)(13, "label", 36);
    \u0275\u0275text(14, "\u5728\u65B0\u8996\u7A97\u958B\u555F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "p-inputSwitch", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("options", ctx_r1.categoryOptions)("showClear", false);
  }
}
function MenuFormComponent_form_7_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h4");
    \u0275\u0275text(2, "\u985E\u5225\u914D\u7F6E");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9)(6, "label", 45);
    \u0275\u0275text(7, "\u5167\u5BB9\u985E\u578B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "p-dropdown", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "label", 47);
    \u0275\u0275text(11, "\u986F\u793A\u6A23\u5F0F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "p-dropdown", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "label", 49);
    \u0275\u0275text(15, "\u6BCF\u9801\u986F\u793A\u6578\u91CF");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "p-inputNumber", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9)(18, "label", 51);
    \u0275\u0275text(19, "\u6392\u5E8F\u6B04\u4F4D");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "p-dropdown", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 9)(22, "label", 53);
    \u0275\u0275text(23, "\u6392\u5E8F\u65B9\u5411");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-dropdown", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 9)(26, "label", 55);
    \u0275\u0275text(27, "\u985E\u5225\u7BE9\u9078");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 9)(30, "div", 22)(31, "label", 57);
    \u0275\u0275text(32, "\u555F\u7528\u641C\u7D22");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "p-inputSwitch", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 9)(35, "div", 22)(36, "label", 59);
    \u0275\u0275text(37, "\u555F\u7528\u985E\u5225\u7BE9\u9078");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "p-inputSwitch", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("options", ctx_r1.contentTypes);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.displayStyles);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 1)("max", 100)("showButtons", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.sortByOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.sortOrderOptions);
  }
}
function MenuFormComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function MenuFormComponent_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "h4");
    \u0275\u0275text(3, "\u57FA\u672C\u8CC7\u8A0A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-divider");
    \u0275\u0275elementStart(5, "div", 8)(6, "div", 9)(7, "label", 10);
    \u0275\u0275text(8, "\u9078\u55AE\u540D\u7A31 ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, MenuFormComponent_form_7_small_12_Template, 2, 1, "small", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "label", 14);
    \u0275\u0275text(15, "URL \u8B58\u5225\u7B26");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 15);
    \u0275\u0275elementStart(17, "small", 16);
    \u0275\u0275text(18, " \u7528\u65BCURL\u7684\u53CB\u5584\u8B58\u5225\u7B26\uFF0C\u7559\u7A7A\u5C07\u81EA\u52D5\u6839\u64DA\u9078\u55AE\u540D\u7A31\u751F\u6210 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 9)(20, "label", 17);
    \u0275\u0275text(21, "\u9078\u55AE\u985E\u578B ");
    \u0275\u0275elementStart(22, "span", 11);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "p-dropdown", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19)(26, "label", 20);
    \u0275\u0275text(27, "\u63CF\u8FF0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 21);
    \u0275\u0275template(29, MenuFormComponent_form_7_small_29_Template, 2, 1, "small", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 9)(31, "div", 22)(32, "label", 23);
    \u0275\u0275text(33, "\u555F\u7528\u72C0\u614B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "p-inputSwitch", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(35, MenuFormComponent_form_7_div_35_Template, 16, 1, "div", 25)(36, MenuFormComponent_form_7_div_36_Template, 15, 3, "div", 26)(37, MenuFormComponent_form_7_div_37_Template, 16, 2, "div", 27)(38, MenuFormComponent_form_7_div_38_Template, 39, 7, "div", 28);
    \u0275\u0275elementStart(39, "div", 29)(40, "p-button", 30);
    \u0275\u0275listener("onClick", function MenuFormComponent_form_7_Template_p_button_onClick_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "p-button", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.menuForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("ng-invalid", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ctx_r1.isFieldInvalid("slug"));
    \u0275\u0275advance(8);
    \u0275\u0275property("options", ctx_r1.menuTypes)("showClear", false);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.isSingle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProduct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCategory);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.isEditMode ? "\u66F4\u65B0" : "\u5EFA\u7ACB")("loading", ctx_r1.submitting)("disabled", ctx_r1.menuForm.invalid);
  }
}
var MenuFormComponent = class _MenuFormComponent {
  formBuilder;
  adminMenusService;
  categoryService;
  messageService;
  router;
  route;
  menuForm;
  isEditMode = false;
  menuId = null;
  loading = false;
  submitting = false;
  menuOptions = null;
  menuTypes = [];
  singlePageOptions = [];
  categoryOptions = [];
  requiredRoles = [
    { label: "\u516C\u958B", value: "public" },
    { label: "\u6703\u54E1", value: "member" },
    { label: "\u7BA1\u7406\u54E1", value: "admin" }
  ];
  contentTypes = [
    { label: "\u7522\u54C1", value: "product" },
    { label: "\u6587\u7AE0", value: "article" },
    { label: "\u9801\u9762", value: "page" }
  ];
  displayStyles = [
    { label: "\u7DB2\u683C", value: "grid" },
    { label: "\u5217\u8868", value: "list" },
    { label: "\u5361\u7247", value: "card" }
  ];
  sortByOptions = [
    { label: "\u5EFA\u7ACB\u6642\u9593", value: "createdAt" },
    { label: "\u66F4\u65B0\u6642\u9593", value: "updatedAt" },
    { label: "\u540D\u7A31", value: "name" },
    { label: "\u6392\u5E8F", value: "displayOrder" }
  ];
  sortOrderOptions = [
    { label: "\u5347\u5E8F", value: "asc" },
    { label: "\u964D\u5E8F", value: "desc" }
  ];
  constructor(formBuilder, adminMenusService, categoryService, messageService, router, route) {
    this.formBuilder = formBuilder;
    this.adminMenusService = adminMenusService;
    this.categoryService = categoryService;
    this.messageService = messageService;
    this.router = router;
    this.route = route;
    this.menuForm = this.createForm();
  }
  ngOnInit() {
    this.menuId = this.route.snapshot.paramMap.get("id");
    this.isEditMode = !!this.menuId;
    this.loadMenuOptions();
    this.loadCategoryOptions();
    if (this.isEditMode) {
      this.loadMenuForEdit();
    }
    this.menuForm.get("menuType")?.valueChanges.subscribe((value) => {
      this.onMenuTypeChange(value);
    });
  }
  createForm() {
    return this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      slug: [""],
      menuType: ["", Validators.required],
      displayOrder: [1, [Validators.min(1), Validators.max(999)]],
      isActive: [true],
      parentId: [""],
      level: [1, [Validators.min(1), Validators.max(3)]],
      requiredRole: ["public"],
      icon: [""],
      description: ["", Validators.maxLength(500)],
      // Category config
      categoryConfig: this.formBuilder.group({
        contentType: ["product"],
        displayStyle: ["grid"],
        itemsPerPage: [12, [Validators.min(1), Validators.max(100)]],
        sortBy: ["createdAt"],
        sortOrder: ["desc"],
        categoryFilter: [""],
        tagFilter: [[]],
        enableSearch: [true],
        enableCategoryFilter: [true]
      }),
      // Single config
      singleConfig: this.formBuilder.group({
        contentId: [""],
        openInNewTab: [false]
      }),
      // Link config
      linkConfig: this.formBuilder.group({
        url: ["", Validators.required],
        openInNewTab: [false]
      }),
      // Product config
      productConfig: this.formBuilder.group({
        categoryId: [""],
        openInNewTab: [false]
      })
    });
  }
  loadMenuOptions() {
    this.adminMenusService.apiAdminMenusOptionsGet().subscribe({
      next: (res) => {
        const options = res.data;
        this.menuTypes = options.menuTypes || [];
        this.singlePageOptions = options.singlePageOptions || [];
        this.menuOptions = options;
      },
      error: (error) => {
        console.error("\u8F09\u5165\u9078\u55AE\u9078\u9805\u5931\u6557:", error);
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u9078\u55AE\u9078\u9805"
        });
      }
    });
  }
  loadCategoryOptions() {
    this.categoryService.apiAdminCategoryGet().subscribe({
      next: (response) => {
        this.categoryOptions = response?.data || [];
      }
    });
  }
  loadMenuForEdit() {
    if (!this.menuId)
      return;
    this.loading = true;
    this.adminMenusService.apiAdminMenusIdGet(this.menuId).subscribe({
      next: (response) => {
        const menu = response?.data;
        if (menu) {
          this.populateForm(menu);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("\u8F09\u5165\u9078\u55AE\u5931\u6557:", error);
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u7121\u6CD5\u8F09\u5165\u9078\u55AE\u8CC7\u6599"
        });
        this.loading = false;
        this.router.navigate(["/menus"]);
      }
    });
  }
  populateForm(menu) {
    this.menuForm.patchValue({
      name: menu.name || "",
      slug: menu.slug || "",
      menuType: menu.menuType || "single",
      displayOrder: menu.displayOrder || 1,
      isActive: menu.isActive ?? true,
      parentId: menu.parentId || "",
      level: menu.level || 1,
      requiredRole: menu.requiredRole || "public",
      icon: menu.icon || "",
      description: menu.description || ""
    });
    if (menu.menuType === "category" && menu.categoryConfig) {
      this.menuForm.get("categoryConfig")?.patchValue(menu.categoryConfig);
    }
    if (menu.menuType === "single" && menu.singleConfig) {
      this.menuForm.get("singleConfig")?.patchValue(menu.singleConfig);
    }
    if (menu.menuType === "link" && menu.linkConfig) {
      this.menuForm.get("linkConfig")?.patchValue(menu.linkConfig);
    }
    if (menu.menuType === "product" && menu.productConfig) {
      this.menuForm.get("productConfig")?.patchValue(menu.productConfig);
    }
    this.onMenuTypeChange(menu.menuType || "single");
  }
  onMenuTypeChange(menuType) {
    const categoryConfig = this.menuForm.get("categoryConfig");
    const singleConfig = this.menuForm.get("singleConfig");
    const linkConfig = this.menuForm.get("linkConfig");
    const productConfig = this.menuForm.get("productConfig");
    categoryConfig?.disable();
    singleConfig?.disable();
    linkConfig?.disable();
    productConfig?.disable();
    switch (menuType) {
      case "category":
        categoryConfig?.enable();
        break;
      case "single":
        singleConfig?.enable();
        break;
      case "link":
        linkConfig?.enable();
        break;
      case "product":
        productConfig?.enable();
        break;
    }
  }
  onSubmit() {
    if (this.menuForm.valid) {
      this.submitting = true;
      const formValue = this.menuForm.value;
      let slug = formValue.slug?.trim();
      if (!slug && formValue.name) {
        slug = this.generateSlug(formValue.name);
      }
      const menuInput = {
        name: formValue.name,
        slug: slug || void 0,
        menuType: formValue.menuType,
        displayOrder: formValue.displayOrder,
        isActive: formValue.isActive,
        parentId: formValue.parentId || void 0,
        level: formValue.level,
        requiredRole: formValue.requiredRole,
        icon: formValue.icon,
        description: formValue.description
      };
      if (formValue.menuType === "category") {
        const categoryConfig = {
          contentType: formValue.categoryConfig.contentType,
          displayStyle: formValue.categoryConfig.displayStyle,
          itemsPerPage: formValue.categoryConfig.itemsPerPage,
          sortBy: formValue.categoryConfig.sortBy,
          sortOrder: formValue.categoryConfig.sortOrder,
          categoryFilter: formValue.categoryConfig.categoryFilter || void 0,
          tagFilter: formValue.categoryConfig.tagFilter?.length > 0 ? formValue.categoryConfig.tagFilter : void 0,
          enableSearch: formValue.categoryConfig.enableSearch,
          enableCategoryFilter: formValue.categoryConfig.enableCategoryFilter
        };
        menuInput.categoryConfig = categoryConfig;
      } else if (formValue.menuType === "single") {
        const singleConfig = {
          contentId: formValue.singleConfig.contentId || void 0,
          openInNewTab: formValue.singleConfig.openInNewTab
        };
        menuInput.singleConfig = singleConfig;
      } else if (formValue.menuType === "link") {
        const linkConfig = {
          url: formValue.linkConfig.url,
          openInNewTab: formValue.linkConfig.openInNewTab
        };
        menuInput.linkConfig = linkConfig;
      } else if (formValue.menuType === "product") {
        const productConfig = {
          categoryId: formValue.productConfig.categoryId || void 0,
          openInNewTab: formValue.productConfig.openInNewTab
        };
        menuInput.productConfig = productConfig;
      }
      if (this.isEditMode && this.menuId) {
        this.updateMenu(this.menuId, menuInput);
      } else {
        this.createMenu(menuInput);
      }
    } else {
      this.markFormGroupTouched(this.menuForm);
      this.messageService.add({
        severity: "error",
        summary: "\u932F\u8AA4",
        detail: "\u8ACB\u586B\u5BEB\u5FC5\u586B\u6B04\u4F4D\u4E26\u78BA\u8A8D\u683C\u5F0F\u6B63\u78BA"
      });
    }
  }
  createMenu(menuInput) {
    this.adminMenusService.apiAdminMenusPost(menuInput).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "\u6210\u529F",
          detail: "\u9078\u55AE\u5DF2\u5EFA\u7ACB"
        });
        this.router.navigate(["/menus"]);
      },
      error: (error) => {
        console.error("\u5EFA\u7ACB\u9078\u55AE\u5931\u6557:", error);
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u5EFA\u7ACB\u9078\u55AE\u5931\u6557"
        });
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }
  updateMenu(id, menuInput) {
    this.adminMenusService.apiAdminMenusIdPut(id, menuInput).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "\u6210\u529F",
          detail: "\u9078\u55AE\u5DF2\u66F4\u65B0"
        });
        this.router.navigate(["/menus"]);
      },
      error: (error) => {
        console.error("\u66F4\u65B0\u9078\u55AE\u5931\u6557:", error);
        this.messageService.add({
          severity: "error",
          summary: "\u932F\u8AA4",
          detail: "\u66F4\u65B0\u9078\u55AE\u5931\u6557"
        });
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["/menus"]);
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.controls[key];
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  // Helper methods for template
  isFieldInvalid(fieldName) {
    const field = this.menuForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    const field = this.menuForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors["required"])
        return "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B";
      if (field.errors["maxlength"])
        return `\u6700\u591A ${field.errors["maxlength"].requiredLength} \u500B\u5B57\u5143`;
      if (field.errors["min"])
        return `\u6700\u5C0F\u503C\u70BA ${field.errors["min"].min}`;
      if (field.errors["max"])
        return `\u6700\u5927\u503C\u70BA ${field.errors["max"].max}`;
    }
    return "";
  }
  get categoryConfigForm() {
    return this.menuForm.get("categoryConfig");
  }
  get singleConfigForm() {
    return this.menuForm.get("singleConfig");
  }
  get linkConfigForm() {
    return this.menuForm.get("linkConfig");
  }
  get productConfigForm() {
    return this.menuForm.get("productConfig");
  }
  get isCategory() {
    return this.menuForm.get("menuType")?.value === "category";
  }
  get isSingle() {
    return this.menuForm.get("menuType")?.value === "single";
  }
  get isLink() {
    return this.menuForm.get("menuType")?.value === "link";
  }
  get isProduct() {
    return this.menuForm.get("menuType")?.value === "product";
  }
  generateSlug(title) {
    if (!title)
      return "";
    return title.trim().toLowerCase().replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/^-+|-+$/g, "").replace(/-+/g, "-");
  }
  static \u0275fac = function MenuFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminMenusService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuFormComponent, selectors: [["app-menu-form"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 8, vars: 3, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-4"], [1, "card-body"], ["class", "loading-container", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "loading-container"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], ["for", "name"], [1, "required"], ["pInputText", "", "id", "name", "formControlName", "name", "placeholder", "\u8ACB\u8F38\u5165\u9078\u55AE\u540D\u7A31"], ["class", "p-error", 4, "ngIf"], ["for", "slug"], ["pInputText", "", "id", "slug", "formControlName", "slug", "placeholder", "\u7559\u7A7A\u81EA\u52D5\u751F\u6210"], [1, "form-help"], ["for", "menuType"], ["formControlName", "menuType", "placeholder", "\u9078\u64C7\u9078\u55AE\u985E\u578B", "optionLabel", "label", "optionValue", "value", 3, "options", "showClear"], [1, "form-group", "full-width"], ["for", "description"], ["pInputTextarea", "", "id", "description", "formControlName", "description", "rows", "3", "placeholder", "\u9078\u55AE\u63CF\u8FF0"], [1, "switch-group"], ["for", "isActive"], ["formControlName", "isActive"], ["class", "form-section", "formGroupName", "singleConfig", 4, "ngIf"], ["class", "form-section", "formGroupName", "linkConfig", 4, "ngIf"], ["class", "form-section", "formGroupName", "productConfig", 4, "ngIf"], ["class", "form-section", "formGroupName", "categoryConfig", 4, "ngIf"], [1, "form-actions"], ["type", "button", "label", "\u53D6\u6D88", "styleClass", "p-button-text", 3, "onClick", "disabled"], ["type", "submit", 3, "label", "loading", "disabled"], [1, "p-error"], ["formGroupName", "singleConfig", 1, "form-section"], ["for", "contentId"], ["formControlName", "contentId", "placeholder", "\u9078\u64C7\u55AE\u9801\u5167\u5BB9", "optionLabel", "label", "optionValue", "value", 3, "options"], ["for", "openInNewTab"], ["formControlName", "openInNewTab"], ["formGroupName", "linkConfig", 1, "form-section"], ["for", "url"], ["pInputText", "", "id", "url", "formControlName", "url", "placeholder", "\u8ACB\u8F38\u5165\u9023\u7D50 URL"], ["formGroupName", "productConfig", 1, "form-section"], ["for", "categoryId"], ["formControlName", "categoryId", "placeholder", "\u9078\u64C7\u7522\u54C1\u985E\u5225", "optionLabel", "name", "optionValue", "_id", 3, "options", "showClear"], ["formGroupName", "categoryConfig", 1, "form-section"], ["for", "contentType"], ["formControlName", "contentType", "placeholder", "\u9078\u64C7\u5167\u5BB9\u985E\u578B", "optionLabel", "label", "optionValue", "value", 3, "options"], ["for", "displayStyle"], ["formControlName", "displayStyle", "placeholder", "\u9078\u64C7\u986F\u793A\u6A23\u5F0F", "optionLabel", "label", "optionValue", "value", 3, "options"], ["for", "itemsPerPage"], ["formControlName", "itemsPerPage", "placeholder", "12", 3, "min", "max", "showButtons"], ["for", "sortBy"], ["formControlName", "sortBy", "placeholder", "\u9078\u64C7\u6392\u5E8F\u6B04\u4F4D", "optionLabel", "label", "optionValue", "value", 3, "options"], ["for", "sortOrder"], ["formControlName", "sortOrder", "placeholder", "\u9078\u64C7\u6392\u5E8F\u65B9\u5411", "optionLabel", "label", "optionValue", "value", 3, "options"], ["for", "categoryFilter"], ["pInputText", "", "id", "categoryFilter", "formControlName", "categoryFilter", "placeholder", "\u985E\u5225\u7BE9\u9078ID"], ["for", "enableSearch"], ["formControlName", "enableSearch"], ["for", "enableCategoryFilter"], ["formControlName", "enableCategoryFilter"]], template: function MenuFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h3");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275template(6, MenuFormComponent_div_6_Template, 4, 0, "div", 3)(7, MenuFormComponent_form_7_Template, 42, 19, "form", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "\u7DE8\u8F2F\u9078\u55AE" : "\u65B0\u589E\u9078\u55AE");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, Button, InputText, InputTextarea, Toast, Dropdown, InputSwitch, InputNumber, Divider, ProgressSpinner], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem 1rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #666;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.form-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: #333;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.form-section[_ngcontent-%COMP%]   .p-divider[_ngcontent-%COMP%] {\n  margin: 1rem 0 1.5rem 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  align-items: start;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 0.9rem;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  margin-left: 2px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .p-dropdown[_ngcontent-%COMP%], \n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .p-inputnumber[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .p-inputnumber[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-help[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.8rem;\n  color: #666;\n  line-height: 1.4;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .p-error[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.8rem;\n  color: #e74c3c;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .switch-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n}\n.form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .switch-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-right: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e9ecef;\n}\n.form-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.ng-invalid.ng-dirty[_ngcontent-%COMP%], \n.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.ng-valid.ng-dirty[_ngcontent-%COMP%] {\n  border-color: #27ae60;\n}\n  .p-dropdown .p-dropdown-trigger {\n  width: 2.5rem;\n}\n  .p-inputnumber .p-inputnumber-buttons-horizontal .p-inputnumber-button {\n  width: 2rem;\n}\n  .p-inputswitch .p-inputswitch-slider {\n  background: #ced4da;\n}\n  .p-inputswitch .p-inputswitch-slider:before {\n  background: white;\n}\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #007ad9;\n}\n  .p-toast .p-toast-message {\n  margin: 0 0 1rem 0;\n}\n/*# sourceMappingURL=menu-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuFormComponent, { className: "MenuFormComponent", filePath: "src/app/features/menus/components/menu-form/menu-form.component.ts", lineNumber: 18 });
})();

// src/app/features/menus/menus.module.ts
var routes = [
  { path: "", component: MenuListComponent },
  { path: "new", component: MenuFormComponent },
  { path: "edit/:id", component: MenuFormComponent }
];
var MenusModule = class _MenusModule {
  static \u0275fac = function MenusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MenusModule });
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
    TagModule,
    DialogModule,
    DropdownModule,
    InputSwitchModule,
    CardModule,
    DragDropModule,
    TreeModule,
    RippleModule,
    InputNumberModule,
    DividerModule,
    TooltipModule,
    ProgressSpinnerModule,
    MultiSelectModule
  ] });
};
export {
  MenusModule
};
//# sourceMappingURL=chunk-CACK52KI.js.map
