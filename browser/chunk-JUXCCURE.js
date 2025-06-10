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

// libs/openapi/src/api/admin-account.service.ts
var AdminAccountService = class _AdminAccountService extends BaseService {
  httpClient;
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  apiAdminAccountGet(authorization, observe = "body", reportProgress = false, options) {
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
    let localVarPath = `/api/admin/account/`;
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
  apiAdminAccountIdDelete(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminAccountIdDelete.");
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
    let localVarPath = `/api/admin/account/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminAccountIdGet(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminAccountIdGet.");
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
    let localVarPath = `/api/admin/account/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminAccountIdPut(id, updateAccountRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminAccountIdPut.");
    }
    if (updateAccountRequestModel === null || updateAccountRequestModel === void 0) {
      throw new Error("Required parameter updateAccountRequestModel was null or undefined when calling apiAdminAccountIdPut.");
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
    let localVarPath = `/api/admin/account/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: updateAccountRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminAccountIdSendTestEmailPost(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminAccountIdSendTestEmailPost.");
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
    let localVarPath = `/api/admin/account/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/send-test-email`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminAccountPost(createAccountRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (createAccountRequestModel === null || createAccountRequestModel === void 0) {
      throw new Error("Required parameter createAccountRequestModel was null or undefined when calling apiAdminAccountPost.");
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
    let localVarPath = `/api/admin/account/`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: createAccountRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  static \u0275fac = function AdminAccountService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAccountService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAccountService, factory: _AdminAccountService.\u0275fac, providedIn: "root" });
};

export {
  AdminAccountService
};
//# sourceMappingURL=chunk-JUXCCURE.js.map
