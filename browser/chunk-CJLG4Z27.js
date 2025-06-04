import {
  BASE_PATH,
  BaseService,
  Configuration
} from "./chunk-7PPGXWRP.js";
import {
  HttpClient,
  HttpContext,
  HttpParams
} from "./chunk-NWPDUYPI.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RPYRJURZ.js";

// libs/openapi/src/api/admin-content.service.ts
var AdminContentService = class _AdminContentService extends BaseService {
  httpClient;
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  apiAdminContentGet(authorization, page, limit, contentType, isPublic, tag, categoryId, observe = "body", reportProgress = false, options) {
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, page, "page");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, contentType, "contentType");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, isPublic, "isPublic");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, tag, "tag");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, categoryId, "categoryId");
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
    let localVarPath = `/api/admin/content/`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminContentIdDelete(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminContentIdDelete.");
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
    let localVarPath = `/api/admin/content/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminContentIdGet(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminContentIdGet.");
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
    let localVarPath = `/api/admin/content/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminContentIdPut(id, updateContentRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminContentIdPut.");
    }
    if (updateContentRequestModel === null || updateContentRequestModel === void 0) {
      throw new Error("Required parameter updateContentRequestModel was null or undefined when calling apiAdminContentIdPut.");
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
    let localVarPath = `/api/admin/content/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: updateContentRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminContentPost(createContentRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (createContentRequestModel === null || createContentRequestModel === void 0) {
      throw new Error("Required parameter createContentRequestModel was null or undefined when calling apiAdminContentPost.");
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
    let localVarPath = `/api/admin/content/`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: createContentRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminContentTagsTypeGet(type, authorization, observe = "body", reportProgress = false, options) {
    if (type === null || type === void 0) {
      throw new Error("Required parameter type was null or undefined when calling apiAdminContentTagsTypeGet.");
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
    let localVarPath = `/api/admin/content/tags/${this.configuration.encodeParam({ name: "type", value: type, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminContentTypeTypeGet(type, authorization, page, limit, isPublic, observe = "body", reportProgress = false, options) {
    if (type === null || type === void 0) {
      throw new Error("Required parameter type was null or undefined when calling apiAdminContentTypeTypeGet.");
    }
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, page, "page");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, isPublic, "isPublic");
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
    let localVarPath = `/api/admin/content/type/${this.configuration.encodeParam({ name: "type", value: type, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminContentsGet(authorization, page, limit, contentType, isPublic, tag, categoryId, observe = "body", reportProgress = false, options) {
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, page, "page");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, contentType, "contentType");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, isPublic, "isPublic");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, tag, "tag");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, categoryId, "categoryId");
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
    let localVarPath = `/api/admin/contents/`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminContentsIdDelete(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminContentsIdDelete.");
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
    let localVarPath = `/api/admin/contents/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminContentsIdGet(id, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminContentsIdGet.");
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
    let localVarPath = `/api/admin/contents/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminContentsIdPut(id, updateContentRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling apiAdminContentsIdPut.");
    }
    if (updateContentRequestModel === null || updateContentRequestModel === void 0) {
      throw new Error("Required parameter updateContentRequestModel was null or undefined when calling apiAdminContentsIdPut.");
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
    let localVarPath = `/api/admin/contents/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: updateContentRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminContentsPost(createContentRequestModel, authorization, observe = "body", reportProgress = false, options) {
    if (createContentRequestModel === null || createContentRequestModel === void 0) {
      throw new Error("Required parameter createContentRequestModel was null or undefined when calling apiAdminContentsPost.");
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
    let localVarPath = `/api/admin/contents/`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: createContentRequestModel,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  apiAdminContentsTagsTypeGet(type, authorization, observe = "body", reportProgress = false, options) {
    if (type === null || type === void 0) {
      throw new Error("Required parameter type was null or undefined when calling apiAdminContentsTagsTypeGet.");
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
    let localVarPath = `/api/admin/contents/tags/${this.configuration.encodeParam({ name: "type", value: type, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
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
  apiAdminContentsTypeTypeGet(type, authorization, page, limit, isPublic, observe = "body", reportProgress = false, options) {
    if (type === null || type === void 0) {
      throw new Error("Required parameter type was null or undefined when calling apiAdminContentsTypeTypeGet.");
    }
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, page, "page");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, isPublic, "isPublic");
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
    let localVarPath = `/api/admin/contents/type/${this.configuration.encodeParam({ name: "type", value: type, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  static \u0275fac = function AdminContentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminContentService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminContentService, factory: _AdminContentService.\u0275fac, providedIn: "root" });
};

export {
  AdminContentService
};
//# sourceMappingURL=chunk-CJLG4Z27.js.map
