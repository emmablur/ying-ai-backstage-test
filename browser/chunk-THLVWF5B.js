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

// libs/openapi/src/api/admin-user.service.ts
var AdminUserService = class _AdminUserService extends BaseService {
  httpClient;
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  apiAdminUserGet(authorization, observe = "body", reportProgress = false, options) {
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
    let localVarPath = `/api/admin/user/`;
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
  apiAdminUserIdDelete(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminUserIdDelete.");
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
    let localVarPath = `/api/admin/user/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminUserIdGet(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminUserIdGet.");
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
    let localVarPath = `/api/admin/user/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminUserIdPut(id, updateUserRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminUserIdPut.");
    }
    if (updateUserRequestModel === null || updateUserRequestModel === void 0) {
      throw new Error("Required parameter updateUserRequestModel was null or undefined when calling apiAdminUserIdPut.");
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
    let localVarPath = `/api/admin/user/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: updateUserRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminUserPost(createUserRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (createUserRequestModel === null || createUserRequestModel === void 0) {
      throw new Error("Required parameter createUserRequestModel was null or undefined when calling apiAdminUserPost.");
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
    let localVarPath = `/api/admin/user/`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: createUserRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  static \u0275fac = function AdminUserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUserService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminUserService, factory: _AdminUserService.\u0275fac, providedIn: "root" });
};

export {
  AdminUserService
};
//# sourceMappingURL=chunk-THLVWF5B.js.map
