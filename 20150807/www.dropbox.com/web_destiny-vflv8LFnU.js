// Generated by CoffeeScript 1.7.1
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(['external/modernizr', 'jquery', 'modules/clean/ajax', 'modules/clean/unity/features', 'modules/clean/unity/features/destiny_logger', 'modules/core/browser', 'modules/core/exception', 'modules/core/uri'], function(Modernizr, $j, ajax, UnityFeatures, DestinyLogger, Browser, exception, URI) {
  var WebDestiny;
  if (UnityFeatures == null) {
    return;
  }
  WebDestiny = (function() {
    WebDestiny.Error = {
      UNITY_CONNECTION_ERROR: "unity_connection_error",
      REFRESH_TIMEOUT: "refresh_timeout",
      LOGIN_REQUEST_ERROR: "login_request_error"
    };

    WebDestiny._DESTINY_REFRESH_TOKEN_KEY = 'web-destiny-refresh-token';

    WebDestiny._DESTINY_MANUAL_REFRESH_TIMEOUT = 5 * 1000;

    WebDestiny._DESTINY_REFRESH_TIMEOUT = 10 * 1000;

    WebDestiny.finish_indirect_web_destiny = function(refresh_token) {
      var redirect_uri;
      DestinyLogger.report_event('web_destiny_opened_new_tab');
      $j(window).on("beforeunload", function() {
        return DestinyLogger.report_event('web_destiny_new_tab_redirecting');
      });
      if (Modernizr.localstorage) {
        localStorage.setItem(this._DESTINY_REFRESH_TOKEN_KEY, refresh_token);
        redirect_uri = localStorage.getItem('web-destiny-redirect-uri');
        localStorage.removeItem('web-destiny-redirect-uri');
        if (redirect_uri) {
          return Browser.redirect(redirect_uri);
        } else {
          return Browser.redirect("/");
        }
      } else {
        return Browser.redirect("/");
      }
    };

    function WebDestiny() {
      this._assert_is_initialized = __bind(this._assert_is_initialized, this);
      this._direct_web_destiny = __bind(this._direct_web_destiny, this);
      this.is_direct_allowed = __bind(this.is_direct_allowed, this);
      this.user_display_name = __bind(this.user_display_name, this);
      this.continue_as_user = __bind(this.continue_as_user, this);
      this._cached_web_destiny_info = null;
    }

    WebDestiny.prototype.start_connection = function(on_success, on_connection_error) {
      if (on_connection_error == null) {
        on_connection_error = null;
      }
      if (this._cached_web_destiny_info != null) {
        return;
      }
      return UnityFeatures.web_destiny_info((function(_this) {
        return function(web_destiny_info) {
          if (web_destiny_info == null) {
            return;
          }
          _this._cached_web_destiny_info = web_destiny_info;
          return on_success(web_destiny_info.user_display_name);
        };
      })(this), on_connection_error);
    };

    WebDestiny.prototype.continue_as_user = function(redirect_url, on_error) {
      var on_complete, on_error_wrapper;
      if (redirect_url == null) {
        redirect_url = null;
      }
      if (on_error == null) {
        on_error = null;
      }
      this._assert_is_initialized();
      on_complete = function() {
        if (redirect_url != null) {
          return Browser.redirect(redirect_url);
        } else {
          return window.location.reload();
        }
      };
      on_error_wrapper = function(e) {
        if (on_error != null) {
          return on_error(e);
        }
      };
      if (this._cached_web_destiny_info.is_direct_allowed) {
        return this._direct_web_destiny(on_complete, on_error_wrapper);
      } else {
        return this._indirect_web_destiny(on_complete, on_error_wrapper);
      }
    };

    WebDestiny.prototype.user_display_name = function() {
      this._assert_is_initialized();
      return this._cached_web_destiny_info.user_display_name;
    };

    WebDestiny.prototype.is_direct_allowed = function() {
      this._assert_is_initialized();
      return this._cached_web_destiny_info.is_direct_allowed;
    };

    WebDestiny.prototype._indirect_web_destiny = function(on_complete, on_error) {
      var maybe_complete_manually, on_storage_callback, refresh_timeout, refresh_token;
      refresh_token = null;
      refresh_timeout = null;
      if (Modernizr.localstorage) {
        refresh_token = new Date().getTime().toString();
        on_storage_callback = function(e) {
          if (e.key === WebDestiny._DESTINY_REFRESH_TOKEN_KEY && e.newValue === refresh_token) {
            window.clearTimeout(refresh_timeout);
            return on_complete();
          }
        };
        if (window.addEventListener != null) {
          window.addEventListener("storage", on_storage_callback, false);
        } else {
          window.attachEvent("onstorage", on_storage_callback);
        }
      }
      maybe_complete_manually = function() {
        if (Modernizr.localstorage) {
          return refresh_timeout = window.setTimeout(function() {
            return on_error(WebDestiny.Error.REFRESH_TIMEOUT);
          }, WebDestiny._DESTINY_REFRESH_TIMEOUT);
        } else {
          return refresh_timeout = window.setTimeout(on_complete, WebDestiny._DESTINY_MANUAL_REFRESH_TIMEOUT);
        }
      };
      return UnityFeatures.continue_as_user(Browser.browser_name, refresh_token, maybe_complete_manually, function() {
        return on_error(WebDestiny.Error.UNITY_CONNECTION_ERROR);
      });
    };

    WebDestiny.prototype._direct_web_destiny = function(on_complete, on_error) {
      var complete_direct_login;
      exception.assert(this._cached_web_destiny_info.is_direct_allowed, "Direct Web Destiny is not allowed.");
      complete_direct_login = function(creds) {
        var data, i, n;
        data = {
          i: (function() {
            var _results;
            _results = [];
            for (i in creds) {
              n = creds[i];
              _results.push(i);
            }
            return _results;
          })(),
          n: (function() {
            var _results;
            _results = [];
            for (i in creds) {
              n = creds[i];
              _results.push(n);
            }
            return _results;
          })(),
          return_json: true
        };
        return ajax.WebRequest({
          url: URI({
            path: '/desktop_login'
          }),
          data: data,
          success: on_complete,
          error: function() {
            return on_error(WebDestiny.Error.LOGIN_REQUEST_ERROR);
          }
        });
      };
      return UnityFeatures.continue_as_user_direct(complete_direct_login, function() {
        return on_error(WebDestiny.Error.UNITY_CONNECTION_ERROR);
      });
    };

    WebDestiny.prototype._assert_is_initialized = function() {
      return exception.assert(this._cached_web_destiny_info != null, "Method not allowed. WebDestiny was not initialized.");
    };

    return WebDestiny;

  })();
  return WebDestiny;
});

//# sourceMappingURL=web_destiny.map
