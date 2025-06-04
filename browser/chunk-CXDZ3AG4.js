import {
  BASE_PATH,
  BaseService,
  Configuration
} from "./chunk-7PPGXWRP.js";
import {
  HttpClient,
  HttpContext
} from "./chunk-NWPDUYPI.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RPYRJURZ.js";

// libs/openapi/src/api/system-settings.service.ts
var SystemSettingsService = class _SystemSettingsService extends BaseService {
  httpClient;
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
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
  SystemSettingsService
};
//# sourceMappingURL=chunk-CXDZ3AG4.js.map
