import {
  BASE_PATH,
  BaseService,
  Configuration
} from "./chunk-5OSS66PJ.js";
import {
  HttpClient,
  HttpContext
} from "./chunk-SO3O3ZSH.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-T5SPLERN.js";

// libs/openapi/src/api/admin-product.service.ts
var AdminProductService = class _AdminProductService extends BaseService {
  httpClient;
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  apiAdminProductGet(authorization, observe = "body", reportProgress = false, options) {
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/product/`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminProductIdDelete(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminProductIdDelete.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/product/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("delete", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminProductIdGet(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminProductIdGet.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/product/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminProductIdPut(id, authorization, putAdminProductRequestModel, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminProductIdPut.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/product/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: putAdminProductRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminProductPost(authorization, postAdminProductRequestModel, observe = "body", reportProgress = false, options) {
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/product/`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: postAdminProductRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  static \u0275fac = function AdminProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminProductService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminProductService, factory: _AdminProductService.\u0275fac, providedIn: "root" });
};

// libs/openapi/src/api/system-settings.service.ts
var SystemSettingsService = class _SystemSettingsService extends BaseService {
  httpClient;
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  apiAdminSystemSettingsHomepageImageCarouselGet(authorization, observe = "body", reportProgress = false, options) {
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/homepage-image-carousel`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsHomepageImageCarouselItemIdDelete(itemId, authorization, observe = "body", reportProgress = false, options) {
    if (itemId === null || itemId === void 0) {
      throw new Error("Required parameter itemId was null or undefined when calling apiAdminSystemSettingsHomepageImageCarouselItemIdDelete.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/homepage-image-carousel/${this.configuration.encodeParam({ name: "itemId", value: itemId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("delete", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsHomepageImageCarouselItemIdPut(itemId, updateHomepageImageCarouselItemRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (itemId === null || itemId === void 0) {
      throw new Error("Required parameter itemId was null or undefined when calling apiAdminSystemSettingsHomepageImageCarouselItemIdPut.");
    }
    if (updateHomepageImageCarouselItemRequestModel === null || updateHomepageImageCarouselItemRequestModel === void 0) {
      throw new Error("Required parameter updateHomepageImageCarouselItemRequestModel was null or undefined when calling apiAdminSystemSettingsHomepageImageCarouselItemIdPut.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/homepage-image-carousel/${this.configuration.encodeParam({ name: "itemId", value: itemId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: updateHomepageImageCarouselItemRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsHomepageImageCarouselPost(addHomepageImageCarouselItemRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (addHomepageImageCarouselItemRequestModel === null || addHomepageImageCarouselItemRequestModel === void 0) {
      throw new Error("Required parameter addHomepageImageCarouselItemRequestModel was null or undefined when calling apiAdminSystemSettingsHomepageImageCarouselPost.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/homepage-image-carousel`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: addHomepageImageCarouselItemRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsHomepageImageCarouselReorderPut(reorderHomepageImageCarouselItemsRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (reorderHomepageImageCarouselItemsRequestModel === null || reorderHomepageImageCarouselItemsRequestModel === void 0) {
      throw new Error("Required parameter reorderHomepageImageCarouselItemsRequestModel was null or undefined when calling apiAdminSystemSettingsHomepageImageCarouselReorderPut.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/homepage-image-carousel/reorder`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: reorderHomepageImageCarouselItemsRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsHomepageProductCarouselGet(authorization, observe = "body", reportProgress = false, options) {
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/homepage-product-carousel`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsHomepageProductCarouselPut(updateHomepageProductCarouselRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (updateHomepageProductCarouselRequestModel === null || updateHomepageProductCarouselRequestModel === void 0) {
      throw new Error("Required parameter updateHomepageProductCarouselRequestModel was null or undefined when calling apiAdminSystemSettingsHomepageProductCarouselPut.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/homepage-product-carousel`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: updateHomepageProductCarouselRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsTransferPaymentGet(authorization, observe = "body", reportProgress = false, options) {
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/transfer-payment`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminSystemSettingsTransferPaymentPut(body, authorization, observe = "body", reportProgress = false, options) {
    if (body === null || body === void 0) {
      throw new Error("Required parameter body was null or undefined when calling apiAdminSystemSettingsTransferPaymentPut.");
    }
    let localVarHeaders = this.defaultHeaders;
    if (authorization !== void 0 && authorization !== null) {
      localVarHeaders = localVarHeaders.set("authorization", String(authorization));
    }
    const localVarHttpHeaderAcceptSelected = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = options?.context ?? new HttpContext();
    const localVarTransferCache = options?.transferCache ?? true;
    const consumes = [
      "text/plain"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/api/admin/system-settings/transfer-payment`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  static \u0275fac = function SystemSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemSettingsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SystemSettingsService, factory: _SystemSettingsService.\u0275fac, providedIn: "root" });
};

export {
  AdminProductService,
  SystemSettingsService
};
//# sourceMappingURL=chunk-PZBKEVDN.js.map
