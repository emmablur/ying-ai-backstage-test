import {
  AdminAuthService
} from "./chunk-JHFWSBOM.js";
import {
  BehaviorSubject,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RPYRJURZ.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  adminAuthService;
  isRefreshingToken = false;
  refreshTokenSubject = new BehaviorSubject(null);
  constructor(adminAuthService) {
    this.adminAuthService = adminAuthService;
  }
  /**
   * Login with username and password
   * Returns either a successful login response with tokens or a password setup needed response
   */
  login(username, password, rememberMe = false) {
    const loginRequest = {
      email: username,
      password,
      rememberMe
    };
    return this.adminAuthService.apiAdminAuthLoginPost(loginRequest).pipe(tap((response) => {
      if (!("needsPasswordSetup" in response) && response.data?.accessToken) {
        this.storeTokens(response.data.accessToken, response.data.refreshToken);
      }
    }));
  }
  /**
   * Store authentication tokens in localStorage
   */
  storeTokens(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }
  /**
   * Get the stored access token
   */
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  /**
   * Get the stored refresh token
   */
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
  /**
   * Clear all authentication tokens
   */
  clearTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
  /**
   * Check if user is logged in
   */
  isLoggedIn() {
    return !!this.getAccessToken();
  }
  /**
   * Logout user by clearing tokens
   */
  logout() {
    this.clearTokens();
  }
  /**
   * Refresh the access token using the refresh token
   */
  refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error("No refresh token available"));
    }
    const refreshRequest = {
      refreshToken
    };
    return this.adminAuthService.apiAdminAuthRefreshTokenPost(refreshRequest).pipe(tap((response) => {
      this.storeTokens(response.data.accessToken, response.data.refreshToken);
      this.refreshTokenSubject.next(response.data.accessToken);
    }));
  }
  /**
   * Check if a token refresh is in progress
   */
  isRefreshingTokenInProgress() {
    return this.isRefreshingToken;
  }
  /**
   * Set the token refresh status
   */
  setRefreshingToken(isRefreshing) {
    this.isRefreshingToken = isRefreshing;
  }
  /**
   * Get the refresh token subject as an observable
   */
  getRefreshTokenSubject() {
    return this.refreshTokenSubject.asObservable();
  }
  /**
   * Reset the refresh token subject
   */
  resetRefreshTokenSubject() {
    this.refreshTokenSubject.next(null);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(AdminAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-X3OAKXI7.js.map
