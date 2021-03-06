window._ms_dup_global = window._ms_dup_global || {},
function(t) {
    var e = {
        global: t,
        proxyName: !1,
        basePath: ""
    }; !
    function() {
        var i = {
            name: "oojs",
            namespace: "",
            classes: {},
            $oojs: function(i) {
                if (i = i || {},
                "undefined" != typeof window && "undefined" != typeof document ? (this.runtime = "browser", i.global = window) : (this.runtime = "node", i.global = t), i.proxyName = "proxy", i.path = "node" === this.runtime ? process.cwd() + "/src/": "/src/", "undefined" != typeof e) for (var n in e) n && e.hasOwnProperty(n) && (i[n] = e[n]);
                this.global = i.global || {},
                i.proxyName && (Function.prototype[i.proxyName] = this.proxy),
                this.setPath(i.path),
                this.global.oojs = this.global.oojs || this
            },
            path: {},
            pathCache: {},
            getPath: function(t) {
                var e = t ? t.split(".") : !1,
                i = this.path;
                if (e) for (var n = 0,
                o = e.length; o > n; n++) {
                    var r = e[n].toLowerCase();
                    if (!i[r]) break;
                    i = i[r]
                }
                return i._path
            },
            setPath: function(t, e) {
                var i = this.path;
                if ("object" != typeof t) {
                    if (e) for (var n = t.split("."), o = 0, r = n.length; r > o; o++) {
                        var a = n[o].toLowerCase();
                        i[a] = i[a] || {
                            _path: i._path
                        },
                        i = i[a]
                    } else e = t;
                    e && e.lastIndexOf("\\") !== e.length - 1 && e.lastIndexOf("/") !== e.length - 1 && (e += "/"),
                    i._path = e
                } else for (var s in t) s && t.hasOwnProperty(s) && this.setPath(s, t[s])
            },
            getClassPath: function(t) {
                return this.pathCache[t] || (this.pathCache[t] = this.getPath(t) + t.replace(/\./gi, "/") + ".js"),
                this.pathCache[t]
            },
            loadDeps: function(t, e) {
                e = e || {};
                var i = t.deps,
                n = [];
                for (var o in i) if (o && i.hasOwnProperty(o) && i[o]) {
                    var r;
                    if ("string" != typeof i[o] ? (t[o] = i[o], t[o] && t[o].name && (t[o].namespace = t[o].namespace || "", r = t[o].namespace + t[o].name)) : (r = i[o], t[o] = this.find(r)), !r || e[r]) continue;
                    if (e[r] = !0, t[o]) t[o].deps && (n = n.concat(this.loadDeps(t[o], e)));
                    else {
                        if ("node" === this.runtime && (t[o] = require(this.getClassPath(r)), !t[o])) throw new Error(t.name + " loadDeps failed: " + r);
                        t[o] || n.push(r)
                    }
                }
                return n
            },
            fastClone: function(t) {
                var e = function() {};
                e.prototype = t;
                var i = new e;
                return i
            },
            proxy: function() {
                var t = Array.prototype.slice.apply(arguments),
                e = t.shift(),
                i = "function" == typeof this ? this: t.shift();
                return function() {
                    var n = Array.prototype.slice.apply(arguments);
                    return i.apply(e, n.concat(t))
                }
            },
            config: function() {
                for (var t in obj) t && obj.hasOwnProperty(t) && ("path" === t || "basePath" === t) && this.setPath(obj[t])
            },
            create: function(t) {
                var e = Array.prototype.slice.call(arguments, 0);
                if (e.shift(), "string" == typeof t && (t = this.using(t)), !t || !t.name) throw new Error("oojs.create need a class object with a name property");
                var i = "__" + t.name || "init",
                n = function() {};
                n.prototype = t;
                var o = new n;
                for (var r in t) {
                    var a = t[r];
                    a && t.hasOwnProperty(r) && "object" == typeof a && (o[r] = this.fastClone(a))
                }
                return o[i] = o[i] ||
                function() {},
                o[i].apply(o, e),
                o.instances = null,
                o
            },
            define: function(t) {
                var e = t.name,
                i = "$" + e;
                t.namespace = t.namespace || "",
                t.dispose = t.dispose ||
                function() {},
                t["__" + e] = t[e] ||
                function() {};
                for (var n, o = !1,
                r = !1,
                a = t.namespace.split("."), s = a.length, l = this.classes, d = 0; s > d; d++) n = a[d],
                n && (l[n] = l[n] || {},
                l = l[n]);
                if (l[e] = l[e] || {},
                l[e].name && l[e]._registed) {
                    if (l[e]._registed) {
                        o = !0;
                        for (var h in t) h && t.hasOwnProperty(h) && "undefined" == typeof l[e][h] && (r = !0, l[e][h] = t[h])
                    }
                } else t._registed = !0,
                l[e] = t;
                if (t = l[e], !o || r) {
                    var c = this.loadDeps(t);
                    if (c.length > 0) {
                        if (this.loader = this.loader || this.using("oojs.loader"), "browser" !== this.runtime || !this.loader) throw new Error('class "' + t.name + '" loadDeps error:' + c.join(","));
                        this.loader.loadDepsBrowser(t)
                    } else t[i] && t[i]()
                }
                return "node" === this.runtime && arguments.callee.caller.arguments[2] && (arguments.callee.caller.arguments[2].exports = t),
                this
            },
            find: function(t) {
                var e, i = t.split(".");
                e = this.classes[i[0]];
                for (var n = 1,
                o = i.length; o > n; n++) {
                    if (!e || !e[i[n]]) {
                        e = null;
                        break
                    }
                    e = e[i[n]]
                }
                return e
            },
            using: function(t) {
                var e = this.find(t);
                return e || "node" === this.runtime && (require(this.getClassPath(t)), e = this.find(t)),
                e
            },
            reload: function(t) {
                var e = this.find(t);
                if (e) {
                    if (e._registed = !1, "node" === this.runtime) {
                        var i = this.getClassPath(t);
                        delete require.cache[require.resolve(i)],
                        e = require(i)
                    }
                } else e = this.using(t);
                return e
            }
        };
        i.define(i)
    } ()
} (_ms_dup_global),
function(t) {
    t.setPath("http://test.adt.com/"),
    t.define({
        name: "asserter",
        namespace: "dup.ui.assertion",
        assert: function(t) {
            for (var e = t.response.placement.userdefine || "",
            i = e.split("|"), n = {},
            o = 0, r = i.length; r > o; o++) {
                var a = i[o],
                s = a.split("="),
                l = s[0];
                l && (n[l] = s[1])
            }
            if (n.hasOwnProperty("painter")) return n.painter;
            var d = t.styleOpenApi.tn || "",
            h = parseInt(t.styleOpenApi.xuanting || 0, 10);
            return d.indexOf("mobile") >= 0 ? h > 0 ? "mobile.float": "mobile.inlayFix": "template_float_searchBar" === d ? "searchBar": "template_float_bottom_lu" === d ? "slide": d.indexOf("_xuanfu") >= 0 || d.indexOf("float") >= 0 ? "float": h > 0 ? "dynamicFloat": d && d.length > 0 ? "inlayFix": ""
        }
    }),
    t.define({
        name: "topSearchBar",
        namespace: "dup.ui.assertion",
        deps: {},
        painterName: "topSearchBar",
        assert: function(t) {
            var e = (t.basic, t.container),
            i = t.fillstyle;
            return 3 == e.anchoredType && e.slide && 8 == i.btnStyleId ? !0 : !1
        }
    }),
    t.define({
        name: "bottomSearchBar",
        namespace: "dup.ui.assertion",
        deps: {},
        painterName: "bottomSearchBar",
        assert: function(t) {
            var e = (t.basic, t.container),
            i = t.fillstyle;
            return 3 == e.anchoredType && e.slide && 9 == i.btnStyleId ? !0 : !1
        }
    }),
    t.define({
        name: "slide",
        namespace: "dup.ui.assertion",
        deps: {},
        painterName: "slide",
        assert: function(t) {
            var e = (t.basic, t.container),
            i = t.fillstyle;
            return 10 == e.anchoredType && e.slide && i.btnStyleId <= 7 ? !0 : !1
        }
    }),
    t.define({
        name: "inlayFix",
        namespace: "dup.ui.assertion",
        deps: {},
        painterName: "inlayFix",
        assert: function(t) {
            var e = t.basic,
            i = t.container,
            n = i.floated;
            return 1 === e.rspFormat && 1 === e.flowType && 1 === i.anchoredType ? n ? 1 === n.trigger ? !0 : this.isFloat(n) ? !1 : !0 : !0 : !1
        },
        isFloat: function(t) {
            for (var e in t) return ! 0;
            return ! 1
        }
    }),
    t.define({
        name: "insideText",
        namespace: "dup.ui.assertion",
        deps: {},
        painterName: "insideText",
        assert: function(t) {
            var e = t.basic,
            i = t.container;
            return 3 === e.rspFormat && 1 === e.flowType && 8 === i.occurrence && 11 === i.anchoredType ? !0 : !1
        }
    }),
    t.define({
        name: "dynamicFloat",
        namespace: "dup.ui.assertion",
        deps: {},
        painterName: "dynamicFloat",
        assert: function(t) {
            var e = t.basic,
            i = t.container,
            n = i.floated;
            return 1 === e.rspFormat && 1 === e.flowType && 1 === i.anchoredType && n && 8 === n.trigger ? !0 : !1
        }
    }),
    t.define({
        name: "float",
        namespace: "dup.ui.assertion",
        deps: {},
        painterName: "float",
        assert: function(t) {
            var e = t.basic,
            i = t.container;
            return 1 === e.rspFormat && 1 === e.flowType && 3 === i.anchoredType ? !0 : !1
        }
    }),
    t.define({
        name: "inlayFix",
        namespace: "dup.ui.assertion.mobile",
        deps: {},
        painterName: "inlayFix",
        assert: function(t) {
            var e = t.basic,
            i = t.container;
            return 1 === e.rspFormat && 2 === e.flowType && 1 === i.anchoredType ? !0 : !1
        }
    }),
    t.define({
        name: "float",
        namespace: "dup.ui.assertion.mobile",
        deps: {},
        painterName: "float",
        assert: function(t) {
            var e = t.basic,
            i = t.container;
            return 1 === e.rspFormat && 2 === e.flowType && 3 === i.anchoredType ? !0 : !1
        }
    }),
    t.define({
        name: "config",
        namespace: "dup.common",
        DUP_PREFIX: "MS_SSP_",
        LOADER_DEFINE_NAME: "MS_SSP_define",
        LCR_COOKIE_NAME: "MS_SSP_lcr",
        POS_URL: "http://ssp-svr.1rtb.com/ssp?",
        DUP_TM: "MS_DUP_SETJSONADSLOT",
        CACHE_URL: "",
        STATUS_CREATE: 1,
        STATUS_REQUEST: 2,
        STATUS_RENDERED: 3,
        STATUS_FINISH: 4,
        startTime: +new Date
    }),
    t.define({
        name: "lang",
        namespace: "dup.common.utility",
        hasOwn: Object.prototype.hasOwnProperty,
        getAttribute: function(t, e) {
            for (var i = t,
            n = e.split("."); n.length;) {
                if (void 0 === i || null === i) return void 0;
                i = i[n.shift()]
            }
            return i
        },
        serialize: function(t) {
            if ("object" != typeof t) return "";
            var e = [];
            for (var i in t) this.hasOwn.call(t, i) && e.push(i + "=" + encodeURIComponent(t[i]));
            return e.join("&")
        },
        getType: function(t) {
            for (var e = {},
            i = "Array Boolean Date Error Function Number RegExp String".split(" "), n = 0, o = i.length; o > n; n++) e["[object " + i[n] + "]"] = i[n].toLowerCase();
            return null == t ? "null": e[Object.prototype.toString.call(t)] || "object"
        },
        isEmptyObj: function(t) {
            for (var e in t) return ! 1;
            return ! 0
        },
        argumentsToArray: function(t) {
            var e = [];
            switch (this.getType(t)) {
            case "object":
                e = Array.prototype.slice.call(t);
                break;
            case "array":
                e = t;
                break;
            case "number":
            case "string":
                e.push(t)
            }
            return e
        },
        template: function(t, e) {
            var i = /{(.*?)}/g;
            return t.replace(i,
            function(t, i, n, o) {
                return e[i] || ""
            })
        },
        encodeHTML: function(t) {
            var e = {
                '"': "&quot;",
                ">": "&gt;",
                "<": "&lt;",
                "&": "&amp;"
            };
            return t.replace(/[\"<>\&]/g,
            function(t) {
                return e[t]
            })
        },
        format: function(t, e) {
            var i = /\{(\w+)\:(\w+)\}/g,
            n = this;
            return t.replace(i,
            function(t, i, o) {
                var r = e[i];
                switch (o) {
                case "number":
                    r = +r || 0;
                    break;
                case "boolean":
                    r = !!r;
                    break;
                case "html":
                    r = n.encodeHTML(r)
                }
                return r
            })
        },
        jsonToObj: function(t) {
            return new Function("return " + t)()
        },
        objToString: function(t) {
            var e = "";
            try {
                e = window.JSON && window.JSON.stringify ? window.JSON.stringify(t) : window.eval(t)
            } catch(i) {}
            return e
        },
        trim: function(t) {
            return t.replace(/(^\s*)|(\s*$)/g, "")
        },
        unique: function(t) {
            for (var e = [], i = {},
            n = t.length, o = 0; n > o; o++) {
                var r = t[o];
                i[r] || (e[e.length] = r, i[r] = !0)
            }
            return e
        }
    }),
    t.define({
        name: "browser",
        namespace: "dup.common.utility",
        deps: {
            lang: "dup.common.utility.lang"
        },
        $browser: function() {
            this.win = window,
            this.nav = window.navigator,
            this.checkBrowser()
        },
        checkBrowser: function() {
            var t = navigator.userAgent,
            e = window.RegExp;
            /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +e.$1),
            /opera\/(\d+\.\d)/i.test(t) && (this.opera = +e.$1),
            /firefox\/(\d+\.\d)/i.test(t) && (this.firefox = +e.$1),
            /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t) && !/chrome/i.test(t) && (this.safari = +(e.$1 || e.$2)),
            /chrome\/(\d+\.\d)/i.test(t) && (this.chrome = +e.$1, this.test360() && (this.qihoo = !0));
            try { / (\d + \.\d) / .test(this.lang.getAttribute(window, "external.max_version")) && (this.maxthon = +e.$1)
            } catch(i) {}
            this.isWebkit = /webkit/i.test(t),
            this.isGecko = /gecko/i.test(t) && !/like gecko/i.test(t);
            for (var n = ["Android", "iPad", "Phone", "iOS", "iPod", "Linux", "Macintosh", "Windows"], o = "", r = 0; r < n.length; r++) {
                if (o = n[r], "iPad" === o || "iPhone" === o || "iOS" === o || "iPod" === o) {
                    this.isIOS = !0;
                    break
                }
                if ("Android" === o) {
                    this.isAndroid = !0;
                    break
                }
                if (t.match(new RegExp(o.toLowerCase(), "i"))) break
            }
            this.platform = o
        },
        test360: function() {
            try {
                return "scoped" in document.createElement("style")
            } catch(t) {
                return ! 1
            }
        },
        getFlashPlayerVersion: function() {
            var t = 0;
            try {
                if (this.nav.plugins && this.nav.mimeTypes.length) {
                    var e = this.nav.plugins["Shockwave Flash"];
                    e && e.description && (t = e.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                }
                if (0 === t && (this.win.ActiveXObject || this.win.hasOwnProperty("ActiveXObject"))) for (var i = 30; i >= 2; i--) try {
                    var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                    if (n) {
                        var o = n.GetVariable("$version");
                        if (t = o.replace(/WIN/g, "").replace(/,/g, "."), t > 0) break
                    }
                } catch(r) {}
                t = parseInt(t, 10),
                this.getFlashPlayerVersion = function() {
                    return t
                }
            } catch(a) {
                t = 0
            }
            return t
        }
    }),
    t.define({
        name: "cookie",
        namespace: "dup.common.utility",
        deps: {
            lang: "dup.common.utility.lang"
        },
        get: function(t, e) {
            var i = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
            n = i.exec(document.cookie);
            return n ? e ? decodeURIComponent(n[2]) : n[2] : ""
        },
        set: function(t, e, i, n) {
            var o = i.expires;
            document.cookie = t + "=" + (n ? encodeURIComponent(e) : e) + (i.path ? "; path=" + i.path: "") + (o ? "; expires=" + o.toGMTString() : "") + (i.domain ? "; domain=" + i.domain: "")
        },
        remove: function(t) {
            var e = new Date;
            e.setTime(e.getTime() - 86400),
            this.set(t, "", {
                path: "/",
                expires: e
            })
        }
    }),
    t.define({
        name: "md5",
        namespace: "dup.common.utility",
        md5: function(t) {
            function e(t, e) {
                return t << e | t >>> 32 - e
            }
            function i(t, e) {
                var i, n, o, r, a;
                return o = 2147483648 & t,
                r = 2147483648 & e,
                i = 1073741824 & t,
                n = 1073741824 & e,
                a = (1073741823 & t) + (1073741823 & e),
                i & n ? 2147483648 ^ a ^ o ^ r: i | n ? 1073741824 & a ? 3221225472 ^ a ^ o ^ r: 1073741824 ^ a ^ o ^ r: a ^ o ^ r
            }
            function n(t, e, i) {
                return t & e | ~t & i
            }
            function o(t, e, i) {
                return t & i | e & ~i
            }
            function r(t, e, i) {
                return t ^ e ^ i
            }
            function a(t, e, i) {
                return e ^ (t | ~i)
            }
            function s(t, o, r, a, s, l, d) {
                return t = i(t, i(i(n(o, r, a), s), d)),
                i(e(t, l), o)
            }
            function l(t, n, r, a, s, l, d) {
                return t = i(t, i(i(o(n, r, a), s), d)),
                i(e(t, l), n)
            }
            function d(t, n, o, a, s, l, d) {
                return t = i(t, i(i(r(n, o, a), s), d)),
                i(e(t, l), n)
            }
            function h(t, n, o, r, s, l, d) {
                return t = i(t, i(i(a(n, o, r), s), d)),
                i(e(t, l), n)
            }
            function c(t) {
                for (var e, i = t.length,
                n = i + 8,
                o = (n - n % 64) / 64, r = 16 * (o + 1), a = Array(r - 1), s = 0, l = 0; i > l;) e = (l - l % 4) / 4,
                s = l % 4 * 8,
                a[e] = a[e] | t.charCodeAt(l) << s,
                l++;
                return e = (l - l % 4) / 4,
                s = l % 4 * 8,
                a[e] = a[e] | 128 << s,
                a[r - 2] = i << 3,
                a[r - 1] = i >>> 29,
                a
            }
            function u(t) {
                var e, i, n = "",
                o = "";
                for (i = 0; 3 >= i; i++) e = t >>> 8 * i & 255,
                o = "0" + e.toString(16),
                n += o.substr(o.length - 2, 2);
                return n
            }
            function p(t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "",
                i = 0; i < t.length; i++) {
                    var n = t.charCodeAt(i);
                    128 > n ? e += String.fromCharCode(n) : n > 127 && 2048 > n ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
                }
                return e
            }
            var m, f, g, y, v, w, b, I, T, S = Array(),
            x = 7,
            C = 12,
            _ = 17,
            A = 22,
            E = 5,
            k = 9,
            P = 14,
            O = 20,
            D = 4,
            H = 11,
            W = 16,
            B = 23,
            M = 6,
            U = 10,
            L = 15,
            F = 21;
            for (t = p(t), S = c(t), w = 1732584193, b = 4023233417, I = 2562383102, T = 271733878, m = 0; m < S.length; m += 16) f = w,
            g = b,
            y = I,
            v = T,
            w = s(w, b, I, T, S[m + 0], x, 3614090360),
            T = s(T, w, b, I, S[m + 1], C, 3905402710),
            I = s(I, T, w, b, S[m + 2], _, 606105819),
            b = s(b, I, T, w, S[m + 3], A, 3250441966),
            w = s(w, b, I, T, S[m + 4], x, 4118548399),
            T = s(T, w, b, I, S[m + 5], C, 1200080426),
            I = s(I, T, w, b, S[m + 6], _, 2821735955),
            b = s(b, I, T, w, S[m + 7], A, 4249261313),
            w = s(w, b, I, T, S[m + 8], x, 1770035416),
            T = s(T, w, b, I, S[m + 9], C, 2336552879),
            I = s(I, T, w, b, S[m + 10], _, 4294925233),
            b = s(b, I, T, w, S[m + 11], A, 2304563134),
            w = s(w, b, I, T, S[m + 12], x, 1804603682),
            T = s(T, w, b, I, S[m + 13], C, 4254626195),
            I = s(I, T, w, b, S[m + 14], _, 2792965006),
            b = s(b, I, T, w, S[m + 15], A, 1236535329),
            w = l(w, b, I, T, S[m + 1], E, 4129170786),
            T = l(T, w, b, I, S[m + 6], k, 3225465664),
            I = l(I, T, w, b, S[m + 11], P, 643717713),
            b = l(b, I, T, w, S[m + 0], O, 3921069994),
            w = l(w, b, I, T, S[m + 5], E, 3593408605),
            T = l(T, w, b, I, S[m + 10], k, 38016083),
            I = l(I, T, w, b, S[m + 15], P, 3634488961),
            b = l(b, I, T, w, S[m + 4], O, 3889429448),
            w = l(w, b, I, T, S[m + 9], E, 568446438),
            T = l(T, w, b, I, S[m + 14], k, 3275163606),
            I = l(I, T, w, b, S[m + 3], P, 4107603335),
            b = l(b, I, T, w, S[m + 8], O, 1163531501),
            w = l(w, b, I, T, S[m + 13], E, 2850285829),
            T = l(T, w, b, I, S[m + 2], k, 4243563512),
            I = l(I, T, w, b, S[m + 7], P, 1735328473),
            b = l(b, I, T, w, S[m + 12], O, 2368359562),
            w = d(w, b, I, T, S[m + 5], D, 4294588738),
            T = d(T, w, b, I, S[m + 8], H, 2272392833),
            I = d(I, T, w, b, S[m + 11], W, 1839030562),
            b = d(b, I, T, w, S[m + 14], B, 4259657740),
            w = d(w, b, I, T, S[m + 1], D, 2763975236),
            T = d(T, w, b, I, S[m + 4], H, 1272893353),
            I = d(I, T, w, b, S[m + 7], W, 4139469664),
            b = d(b, I, T, w, S[m + 10], B, 3200236656),
            w = d(w, b, I, T, S[m + 13], D, 681279174),
            T = d(T, w, b, I, S[m + 0], H, 3936430074),
            I = d(I, T, w, b, S[m + 3], W, 3572445317),
            b = d(b, I, T, w, S[m + 6], B, 76029189),
            w = d(w, b, I, T, S[m + 9], D, 3654602809),
            T = d(T, w, b, I, S[m + 12], H, 3873151461),
            I = d(I, T, w, b, S[m + 15], W, 530742520),
            b = d(b, I, T, w, S[m + 2], B, 3299628645),
            w = h(w, b, I, T, S[m + 0], M, 4096336452),
            T = h(T, w, b, I, S[m + 7], U, 1126891415),
            I = h(I, T, w, b, S[m + 14], L, 2878612391),
            b = h(b, I, T, w, S[m + 5], F, 4237533241),
            w = h(w, b, I, T, S[m + 12], M, 1700485571),
            T = h(T, w, b, I, S[m + 3], U, 2399980690),
            I = h(I, T, w, b, S[m + 10], L, 4293915773),
            b = h(b, I, T, w, S[m + 1], F, 2240044497),
            w = h(w, b, I, T, S[m + 8], M, 1873313359),
            T = h(T, w, b, I, S[m + 15], U, 4264355552),
            I = h(I, T, w, b, S[m + 6], L, 2734768916),
            b = h(b, I, T, w, S[m + 13], F, 1309151649),
            w = h(w, b, I, T, S[m + 4], M, 4149444226),
            T = h(T, w, b, I, S[m + 11], U, 3174756917),
            I = h(I, T, w, b, S[m + 2], L, 718787259),
            b = h(b, I, T, w, S[m + 9], F, 3951481745),
            w = i(w, f),
            b = i(b, g),
            I = i(I, y),
            T = i(T, v);
            var N = function(t) {
                for (var e = t,
                i = 0,
                n = 8 - t.length; n > i; i++) e = "0" + e;
                return e
            },
            R = ((parseInt("0x" + u(w), 16) + parseInt("0x" + u(b), 16)) % 4294967296).toString(16),
            j = ((parseInt("0x" + u(I), 16) + parseInt("0x" + u(T), 16)) % 4294967296).toString(16);
            return R.length < 8 && (R = N(R)),
            j.length < 8 && (j = N(j)),
            R + j
        }
    }),
    t.define({
        name: "requestCache",
        namespace: "dup.business",
        deps: {
            config: "dup.common.config"
        },
        slotInfoMap: {},
        secondResult: {},
        add: function(t, e) {
            this.slotInfoMap[t] = e
        },
        get: function(t) {
            return this.slotInfoMap[t]
        },
        cacheRequest: function(t, e) {
            if (!t || this.secondResult[t]) return ! 1;
            this.secondResult[t] = e;
            var i = this.get(t),
            n = this.config.CACHE_URL + "dpv=" + t + "&di=" + i.slotId;
            this.loadScript(n)
        },
        loadScript: function(t) {
            var e = document.createElement("script");
            e.charset = "utf-8",
            e.async = !0,
            e.src = t;
            var i = document.getElementsByTagName("head")[0] || document.body;
            i.insertBefore(e, i.firstChild)
        }
    }),
    t.define({
        name: "asserter",
        namespace: "dup.ui.assertion",
        assert: function(t) {
            for (var e = t.response.placement.userdefine || "",
            i = e.split("|"), n = {},
            o = 0, r = i.length; r > o; o++) {
                var a = i[o],
                s = a.split("="),
                l = s[0];
                l && (n[l] = s[1])
            }
            if (n.hasOwnProperty("painter")) return n.painter;
            var d = t.styleOpenApi.tn || "",
            h = parseInt(t.styleOpenApi.xuanting || 0, 10);
            return d.indexOf("mobile") >= 0 ? h > 0 ? "mobile.float": "mobile.inlayFix": "template_float_searchBar" === d ? "searchBar": "template_float_bottom_lu" === d ? "slide": d.indexOf("_xuanfu") >= 0 || d.indexOf("float") >= 0 ? "float": h > 0 ? "dynamicFloat": d && d.length > 0 ? "inlayFix": ""
        }
    }),
    t.define({
        name: "searchParam",
        namespace: "dup.business",
        deps: {
            config: "dup.common.config"
        },
        $searchParam: function() {
            this.responseInfoMap = {}
        },
        getParamInfoById: function(t) {
            var e = this.responseInfoMap[t];
            return e || (e = this.responseInfoMap[t] = {}),
            e
        },
        processResponseInfo: function(t, e) {
            var i = this.getParamInfoById(t.id);
            i.dtm = this.config.DUP_TM,
            i.dc = "2",
            i.di = t.slotId,
            this.processSlotSize(t.id, e);
            var n = e._html;
            for (var o in n) o && n[o] && n.hasOwnProperty(o) && (i[o] = n[o])
        },
        processSlotSize: function(t, e) {
            var i = e._html,
            n = i.conW || 0,
            o = i.conH || 0,
            r = parseInt(n, 10) || parseInt(e._w, 10) || parseInt(e.sw, 10) || parseInt(i.rsi0, 10),
            a = parseInt(o, 10) || parseInt(e._h, 10) || parseInt(e.sh, 10) || parseInt(i.rsi1, 10),
            s = this.getParamInfoById(t);
            s.rsi0 = r,
            s.rsi1 = a
        }
    }),
    t.define({
        name: "unionDataAdapter",
        namespace: "dup.business",
        deps: {},
        process: function(t) {
            var e = t._html,
            i = parseInt(e.ct || 0, 10),
            n = parseFloat(e.opacity || .9),
            o = e.rss1 || "#000",
            r = parseInt(e.xuanting || 0, 10),
            a = e.conW || 0,
            s = e.conH || 0,
            l = parseInt(a, 10) || parseInt(t._w, 10) || parseInt(t.sw, 10) || parseInt(e.rsi0, 10),
            d = parseInt(s, 10) || parseInt(t._h, 10) || parseInt(t.sh, 10) || parseInt(e.rsi1, 10),
            h = 1,
            c = e.scale || "";
            c && (h = 2);
            var u = 0;
            r > 0 && (u = r);
            var p = {
                placement: {
                    container: {
                        sizeType: h,
                        width: l,
                        slotHeight: d,
                        closeType: i,
                        location: u
                    },
                    fillstyle: {
                        opacity: n,
                        backgroundColor: o
                    }
                }
            };
            return p
        }
    }),
    t.define({
        name: "interface",
        namespace: "dup.business",
        deps: {
            lang: "dup.common.utility.lang"
        },
        apiMap: {},
        $Interface: function() {},
        register: function(e, i, n) {
            this.apiMap[e] = t.proxy(i, n)
        },
        executeTask: function(t) {
            for (var e in t) {
                var i = t[e];
                if ("array" === this.lang.getType(i) && ("id" !== e || "container" !== e || "size" !== e || "async" !== e)) {
                    var n = this.apiMap[e];
                    if (n) return n.apply(null, i)
                }
            }
        },
        perform: function(t, e) {
            var i = this.apiMap[t];
            return i ? i.apply(null, e) : void 0
        }
    }),
    t.define({
        name: "material",
        namespace: "dup.business",
        deps: {
            lang: "dup.common.utility.lang"
        },
        $material: function() {
            var t = this;
            this.materialFactory = {},
            this.materialFactory.text = function(e) {
                var i = "font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};",
                n = '<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="' + i + '"{events}>{text:string}</a></span>',
                o = /\{events\}/;
                if (1 === e.version) n = n.replace(o, "");
                else if (2 === e.version) {
                    var r = "this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';",
                    a = "this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';",
                    s = ' onmouseover="' + a + '" onmouseout="' + r + '"';
                    n = n.replace(o, s);
                    for (var l = ["default", "hover"], d = 0; d < l.length; d++) {
                        var h = l[d],
                        c = h + "Color",
                        u = h + "Bold",
                        p = h + "Italic",
                        m = h + "Underline";
                        e[c] = "#" + e[c],
                        e[u] = e[u] ? "bold": "normal",
                        e[p] = e[p] ? "italic": "normal",
                        e[m] = e[m] ? "underline": "none"
                    }
                }
                return t.lang.format(n, e)
            },
            this.materialFactory.image = '<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>',
            this.materialFactory.flash = function(e) {
                var i = ["<script>", "var BD = BD || {};", "BD.MC = BD.MC || {};", "BD.MC.ADFlash = BD.MC.ADFlash || {};", "BD.MC.ADImg = BD.MC.ADImg || {};", "BD.MC.ADFlash.w = {width:number};", "BD.MC.ADFlash.h = {height:number};", 'BD.MC.ADFlash.mu = "{src:string}";', 'BD.MC.ADFlash.cu = "{clickUrl:string}";', "BD.MC.ADFlash.wm = {wmode:number};", 'BD.MC.ADFlash.ct = "{clickTag:string}";', "BD.MC.ADImg.w = {imageWidth:number};", "BD.MC.ADImg.h = {imageHeight:number};", 'BD.MC.ADImg.mu = "{imageSrc:string}";', 'BD.MC.ADImg.cu = "{imageClickUrl:string}";', 'BD.MC.ADImg.tw = "{target:string}";', "BD.MC.ADImg.flag = {backupImage:number};", "</script>", '<script src ="http://cbjs.baidu.com/js/{file:string}.js">', "</script>"];
                return e.file = e.hasLink ? "cflash": "flash",
                e.imageClickUrl = e.clickUrl,
                e.hasLink || (e.clickUrl = ""),
                t.lang.format(i.join(""), e)
            },
            this.materialFactory.rich = function(t) {
                return t.content
            },
            this.materialFactory.slide = function(e, i) {
                for (var n = '<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();</script>',
                o = [], r = e.materials, a = 0; a < r.length; a++) {
                    var s = r[a];
                    "string" != typeof s && (s = t.formatMaterial(s, i, !0)),
                    o.push(s)
                }
                e.html = "<div>" + o.join("</div><div>") + "</div>";
                var l = i.response.placement,
                d = l.container;
                return e.width = i.width || d.width,
                e.height = i.height || d.height,
                t.lang.format(n, e)
            }
        },
        formatMaterial: function(t, e, i) {
            if ("string" == typeof t) return t;
            if (!t.type) return "";
            var n = this.materialFactory[t.type];
            if (n) {
                var o = "string" == typeof n ? this.lang.format(n, t) : n(t, e);
                return i ? o: "<!DOCTYPE html><body>" + o
            }
            return ""
        }
    }),
    t.define({
        name: "storage",
        namespace: "dup.common.utility",
        store: window.localStorage,
        available: function() {
            var t = !1,
            e = "MS_DUP_storage_available";
            try {
                this.store.removeItem(e),
                this.setItem(e, "1"),
                this.getItem(e) && (t = !0),
                this.store.removeItem(e)
            } catch(i) {}
            return t
        },
        setItem: function(t, e, i) {
            if (this.store) {
                e = i ? encodeURIComponent(e) : e;
                try {
                    this.store.setItem(t, e)
                } catch(n) {}
            }
        },
        getItem: function(t, e) {
            if (this.store) {
                var i = this.store.getItem(t);
                return e && i ? decodeURIComponent(i) : i
            }
            return null
        },
        addItem: function(t, e, i) {
            if (this.store) {
                e = i ? encodeURIComponent(e) : e;
                var n = this.getItem(t) || "";
                n += (n && "|") + e;
                try {
                    this.setItem(t, n)
                } catch(o) {}
            }
        },
        spliceItem: function(t, e, i) {
            if (this.store) {
                e = i ? encodeURIComponent(e) : e;
                var n = this.getItem(t) || "";
                if (n = n.replace(new RegExp(e + "\\|?", "g"), "").replace(/\|$/, "")) try {
                    this.setItem(t, n)
                } catch(o) {} else this.store.removeItem(t)
            }
        }
    }),
    t.define({
        name: "monitor",
        namespace: "dup.business",
        sendLog: function(t) {
            if (t.response) {
                var e = t.response.pdb_deliv.deliv_des,
                i = e._html,
                n = i && i.monitorUrl;
                if (n.length) {
                    for(var j = 0; j < n.length; j ++) {
                        var o = new Image,
                        r = "log" + +new Date;
                        window[r] = o;
                        var a = function() {
                            o.onload = o.onerror = o.onabort = null;
                            try {
                                delete window[r]
                            } catch(t) {
                                window[r] = void 0
                            }
                        };
                        o.onload = o.onerror = o.onabort = a,
                        o.src = n[j]
                    }
                }
            }
        }
    }),
    t.define({
        name: "loader",
        namespace: "dup.common",
        deps: {
            config: "dup.common.config"
        },
        $loader: function() {
            this.loadingCls = {}
        },
        load: function(e, i) {
            var n = t.getClassPath(e),
            o = this.check(n);
            if (!o) {
                var r = document.createElement("script");
                r.type = "text/javascript",
                r.async = !0,
                r.src = n;
                var a = t.proxy(this, this.onLoadStatusHandler, n, r);
                r.onload = r.onerror = a,
                r.hasOwnProperty("onreadystatechange") && (r.onreadystatechange = a);
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(r, s),
                this.loadingCls[n] = i
            }
        },
        check: function() {
            for (var t in this.loadingCls) if (this.loadingCls.hasOwnProperty(t) && this.loadingCls[t] === !0) return ! 0;
            return ! 1
        },
        onLoadStatusHandler: function(t, e, i) {
            var n = this.loadingCls[e];
            this.loadingCls[e] = void 0,
            i && /loaded|complete|undefined/.test(i.readyState) && (i.onload = i.onerror = i.onreadystatechange = null, i = void 0, n())
        }
    }),
    t.define({
        name: "unicode",
        namespace: "dup.common.utility",
        deps: {},
        toDecode: function(t) {
            var e = [];
            if (t instanceof Array) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    e.push(this.decode(n))
                }
                return e
            }
            return "string" == typeof t ? this.decode(t) : void 0
        },
        toEncode: function(t) {
            var e = [];
            if (t instanceof Array) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    e.push(this.encode(n))
                }
                return e
            }
            return "string" == typeof t ? this.encode(t) : void 0
        },
        decode: function(t) {
            return unescape(t.replace(/\\(u[0-9a-fA-F]{4})/gm, "%$1"))
        },
        encode: function(t) {
            return escape(t).replace(/%(u[0-9A-F]{4})|(%[0-9A-F]{2})/gm,
            function(t, e, i) {
                return e && "\\" + e.toLowerCase() || unescape(i)
            })
        }
    }),
    t.define({
        name: "dom",
        namespace: "dup.common.utility",
        deps: {
            lang: "dup.common.utility.lang",
            browser: "dup.common.utility.browser"
        },
        $dom: function() {},
        g: function(t, e) {
            return "string" === this.lang.getType(t) && t.length > 0 ? (e = e || window, e.document.getElementById(t)) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null: t
        },
        getDocument: function(t) {
            return 9 === t.nodeType ? t: t.ownerDocument || t.document
        },
        getWindow: function(t) {
            var e = this.getDocument(t);
            return e.parentWindow || e.defaultView || null
        },
        isWindow: function(t) {
            try {
                if (t && "object" == typeof t && t.document && "setInterval" in t) return ! 0
            } catch(e) {
                return ! 1
            }
            return ! 1
        },
        isInIframe: function(t, e) {
            return t = t || window,
            t != window.top && t != t.parent || !this.isWindow(t)
        },
        checkParentAccess: function(t) {
            try {
                return !! t.parent.location.toString()
            } catch(e) {
                return ! 1
            }
        },
        isInCrossDomainIframe: function(t, e) {
            e = 2 === arguments.length ? e: t.parent;
            for (var i = 0,
            n = 10; i++<n && this.isInIframe(t, e);) {
                if (!this.checkParentAccess(t)) return ! 0;
                t = t.parent
            }
            return i >= n
        },
        ready: function(e, i, n) {
            n = n || this.win || window;
            var o = n.document;
            i = i || 0,
            this.domReadyMonitorRunTimes = 0,
            this.readyFuncArray = this.readyFuncArray || [],
            this.readyFuncArray.push({
                func: e,
                delay: i,
                done: !1
            });
            var r = t.proxy(this,
            function() {
                var t = !1;
                this.domReadyMonitorRunTimes++;
                var e = !1;
                try {
                    n.frameElement && (e = !0)
                } catch(i) {
                    e = !0
                }
                if (this.browser.ie && this.browser.ie < 9 && !e) try {
                    o.documentElement.doScroll("left"),
                    t = !0
                } catch(i) {} else if ("complete" === o.readyState || this.domContentLoaded) t = !0;
                else if (this.domReadyMonitorRunTimes > 3e5) return void(this.domReadyMonitorId && (n.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null));
                if (t) try {
                    if (this.readyFuncArray && this.readyFuncArray.length) for (var r = 0,
                    a = this.readyFuncArray.length; a > r; r++) {
                        var s = this.readyFuncArray[r];
                        s && s.func && !s.done && (s.delay ? (s.done = !0, n.setTimeout(s.func, s.delay)) : (s.done = !0, s.func()))
                    }
                } catch(l) {
                    throw l
                } finally {
                    this.domReadyMonitorId && (n.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null)
                }
            },
            this),
            a = t.proxy(this,
            function() {
                this.domContentLoaded = !0,
                r()
            });
            this.domReadyMonitorId || (this.domReadyMonitorId = n.setInterval(r, 50), o.addEventListener ? (o.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1)) : o.attachEvent && n.attachEvent("onload", a, !1))
        },
        bind: function(t, e, i) {
            return "string" == typeof t && (t = this.g(t)),
            e = e.replace(/^on/i, "").toLowerCase(),
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i),
            t
        },
        getNotCrossDomainTopWindow: function(t, e) {
            1 === arguments.length && "number" === this.lang.getType(arguments[0]) && (e = arguments[0], t = void 0),
            e = e || 10;
            for (var i = window,
            n = 0; n++<e && this.isInIframe(i) && !this.isInCrossDomainIframe(i) && (!t || !t(i));) i = i.parent;
            return i
        },
        getTopElement: function(t) {
            var e = this.isWindow(t) ? t.document: this.getDocument(t);
            return "CSS1Compat" === e.compatMode ? e.documentElement: e.body
        },
        getDocumentTitle: function() {
            var t = this.getNotCrossDomainTopWindow(),
            e = t.document.title,
            i = 60;
            return e.length > i && (e = e.substr(0, i)),
            e
        }
    }),
    t.define({
        name: "style",
        namespace: "dup.common.utility",
        deps: {
            dom: "dup.common.utility.dom",
            lang: "dup.common.utility.lang",
            browser: "dup.common.utility.browser"
        },
        $style: function() {},
        getClientWidth: function(t) {
            t = t || window;
            try {
                var e = this.dom.getTopElement(t).clientWidth;
                if (e || 0 === e) return e
            } catch(i) {}
            return - 1
        },
        getClientHeight: function(t) {
            t = t || window;
            try {
                var e = this.dom.getTopElement(t).clientHeight;
                if (e || 0 === e) return e
            } catch(i) {}
            return - 1
        },
        getPositionCore: function(t) {
            var e = {
                top: 0,
                left: 0
            };
            if (t === this.dom.getTopElement(t)) return e;
            var i = this.dom.getDocument(t),
            n = i.body,
            o = i.documentElement;
            if (t.getBoundingClientRect) {
                var r = t.getBoundingClientRect();
                e.left = Math.floor(r.left) + Math.max(o.scrollLeft, n.scrollLeft),
                e.top = Math.floor(r.top) + Math.max(o.scrollTop, n.scrollTop),
                e.left -= o.clientLeft,
                e.top -= o.clientTop;
                var a = this.getStyle(n, "borderLeftWidth"),
                s = this.getStyle(n, "borderTopWidth"),
                l = parseInt(a, 10),
                d = parseInt(s, 10);
                e.left -= isNaN(l) ? 2 : l,
                e.top -= isNaN(d) ? 2 : d
            }
            return e
        },
        getStyle: function(t, e) {
            if (!t) return "";
            var i = "";
            i = e.indexOf("-") > -1 ? e.replace(/[-][^-]{1}/g,
            function(t) {
                return t.charAt(1).toUpperCase()
            }) : e.replace(/[A-Z]{1}/g,
            function(t) {
                return "-" + t.charAt(0).toLowerCase()
            });
            var n = this.dom.getWindow(t);
            if (n && n.getComputedStyle) {
                var o = n.getComputedStyle(t, null);
                if (o) return o.getPropertyValue(e) || o.getPropertyValue(i)
            } else if (t.currentStyle) {
                var o = t.currentStyle;
                return o[e] || o[i]
            }
            return ""
        },
        getPosition: function(t) {
            var e = this.dom.g(t);
            if (!e) return ! 1;
            var i = this.getPositionCore(e),
            n = this.dom.getWindow(e);
            if (!n) return i;
            for (var o = 0,
            r = 10; n !== n.parent && o++<r && !this.dom.isInCrossDomainIframe(n) && n.frameElement;) {
                var a = this.getPositionCore(n.frameElement);
                i.left += a.left,
                i.top += a.top,
                n = n.parent
            }
            return i
        },
        getOpacityInWin: function(t) {
            for (var e = t,
            i = this.dom.getWindow(e), n = 100; e && e.tagName;) {
                var o = 100;
                if (this.browserInfo.ie) {
                    if (this.browserInfo.ie > 5) try {
                        o = parseInt(this.lang.getAttribute(e, "filters.alpha.opacity"), 10) || 100
                    } catch(r) {}
                    n = n > o ? o: n
                } else {
                    try {
                        o = 100 * (i.getComputedStyle(e, null).opacity || 1)
                    } catch(r) {}
                    n *= o / 100
                }
                e = e.parentNode
            }
            return 0 === n ? 0 : n || 100
        },
        getOpacity: function(t) {
            for (var e = this.dom.g(t), i = this.dom.getWindow(e), n = this.getOpacityInWin(e), o = 0, r = 10; o++<r && this.dom.isInIframe(i) && !this.dom.isInCrossDomainIframe(i);) {
                var a = i.frameElement ? this.getOpacityInWin(i.frameElement) : 100;
                n *= a / 100,
                i = i.parent
            }
            return n
        },
        getScrollWidth: function(t) {
            t = t || window;
            try {
                var e = this.dom.getTopElement(t).scrollWidth;
                if (e || 0 === e) return e
            } catch(i) {}
            return - 1
        },
        getScrollHeight: function(t) {
            t = t || window;
            try {
                var e = this.dom.getTopElement(t).scrollHeight;
                if (e || 0 === e) return e
            } catch(i) {}
            return - 1
        },
        getScrollTop: function(t) {
            t = t || window;
            var e = t.document;
            return t.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop
        },
        getScrollLeft: function(t) {
            var e = t || window,
            i = this.dom.getTopElement(e);
            return e.pageXOffset || i.scrollLeft
        },
        getOuterWidth: function(t, e) {
            var i = this.dom.g(t),
            n = i.offsetWidth;
            return e && (n += this.getMargin(i, "Left") + this.getMargin(i, "Right")),
            n
        },
        getMargin: function(t, e) {
            var i = this.getStyle(t, "margin" + e).toString().toLowerCase().replace("px", "").replace("auto", "0");
            return parseInt(i, 10) || 0
        },
        getOuterHeight: function(t, e) {
            var i = this.dom.g(t),
            n = i.offsetHeight;
            return e && (n += this.getMargin(i, "Top") + this.getMargin(i, "Bottom")),
            n
        },
        canFixed: function() {
            var t = !0;
            return this.browser.ie && (this.browser.ie < 7 || "BackCompat" === document.compatMode) && (t = !1),
            t
        }
    }),
    t.define({
        name: "url",
        namespace: "dup.common.utility",
        deps: {
            dom: "dup.common.utility.dom"
        },
        getQueryValue: function(t, e, i) {
            var n = new RegExp("(\\?|&|#)" + e + "=([^&#]*)(&|#)?"),
            o = t.match(n),
            r = "";
            return o && (r = o[2]),
            i && (r = decodeURIComponent(r)),
            r
        },
        getTopWindowUrl: function(t) {
            var e = this.dom.getNotCrossDomainTopWindow(t),
            i = "";
            return this.dom.isInIframe(e) && (i = e.document.referrer),
            i = i || e.location.href
        },
        getMainDomain: function(t) {
            t = t || document.domain,
            0 === t.indexOf("www.") && (t = t.substr(4)),
            "." === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1));
            var e = ["com", "cn", "net", "org", "gov", "info", "la", "cc", "co", "jp", "us", "hk", "tv", "me", "biz", "in", "be", "io", "tk", "cm", "li", "ru", "ws", "hn", "fm", "tw", "ma", "in", "vn", "name", "mx", "gd", "im"],
            i = new RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:" + e.join("|") + ")(?:\\.(?:cn|jp|tw|ru|th))?)$", "i"),
            n = t.match(i);
            return n ? n[0] : t
        }
    }),
    t.define({
        name: "data",
        namespace: "dup.common.utility",
        deps: {
            lang: "dup.common.utility.lang",
            dom: "dup.common.utility.dom"
        },
        $data: function() {
            this.pageInfo = {}
        },
        data: function() {
            this.topWin = this.dom.getNotCrossDomainTopWindow(),
            this.globalInfo = this.topWin[STORE_NAME] || (this.topWin[STORE_NAME] = {})
        },
        putInfo: function(t, e, i) {
            var n, o = i ? this.globalInfo: this.pageInfo;
            if ("string" === this.lang.getType(t)) {
                for (var r = t.split("."), a = o; r.length;) {
                    var s = r.shift();
                    a[s] = r.length ? void 0 !== a[s] ? a[s] : {}: e,
                    a = a[s]
                }
                n = e
            }
            return n
        },
        removeInfo: function(t, e) {
            var i = e ? this.globalInfo: this.pageInfo;
            switch (this.lang.getType(t)) {
            default:
                return ! 1;
            case "string":
                for (var n = t.split("."); n.length;) {
                    var o = n.shift();
                    if (!n.length || void 0 === i[o]) return delete i[o],
                    !0;
                    i = i[o]
                }
            }
            return ! 1
        },
        getInfo: function(t, e) {
            var i, n = e ? this.globalInfo: this.pageInfo;
            return "string" === this.lang.getType(t) && (i = this.lang.getAttribute(n, t)),
            i
        },
        getOnce: function(t) {
            var e = window,
            i = e[t];
            return e[t] = void 0,
            i
        },
        defineOnce: function(t, e) {
            var i = window;
            return i[t] ? i[t] : (i[t] = e, e)
        }
    }),
    t.define({
        name: "origentation",
        namespace: "dup.business",
        deps: {
            lang: "dup.common.utility.lang",
            data: "dup.common.utility.data"
        },
        orientKey: "bizOrientations",
        orientUrgentKey: "bizUrgentOrientations",
        addOrientation: function(t, e) {
            var i = this.beforeSavingOrientation.apply(this, arguments);
            return this.saveOrientation(t, i)
        },
        addOrientationOnce: function(t, e) {
            var i = this.beforeSavingOrientation.apply(this, arguments);
            return this.saveOrientation(t, i, {
                urgent: !0,
                merge: !0
            })
        },
        setOrientationOnce: function(t, e) {
            var i = this.beforeSavingOrientation.apply(this, arguments);
            return this.saveOrientation(t, i, {
                urgent: !0,
                override: !0
            })
        },
        beforeSavingOrientation: function(t, e) {
            var i = /^[0-9a-zA-Z]+$/;
            return t && i.test(t) && e ? e = "array" === this.lang.getType(e) ? e: Array.prototype.slice.call(arguments, 1) : []
        },
        saveOrientation: function(t, e, i) {
            if (!e || !e.length) return ! 1;
            i = i || {
                urgent: !1,
                merge: !1,
                override: !1
            };
            var n = i.merge ? this.data.getInfo(this.orientKey) : {},
            o = i.urgent ? this.orientUrgentKey: this.orientKey,
            r = i.override ? {}: this.data.getInfo(o) || n,
            a = {};
            for (var s in r) this.lang.hasOwn.call(r, s) && (a[s] = "array" === this.lang.getType(r[s]) ? r[s].slice() : r[s]);
            for (var l = a[t] || [], d = e.length, s = 0; d > s; s++) {
                var h = e[s];
                "string" == typeof h && (h = encodeURIComponent(h), h.length <= 100 && (l[l.length] = h))
            }
            return l.length ? (a[t] = this.lang.unique(l), this.data.putInfo(o, a), !0) : !1
        },
        getOrientationQuery: function(t) {
            t = t || 500,
            t = Math.max(0, Math.min(t, 500));
            var e = [],
            i = this.data.getInfo(this.orientUrgentKey) || this.data.getInfo(this.orientKey) || {};
            if ("object" === this.lang.getType(i)) for (var n in i) if (this.lang.hasOwn.call(i, n)) {
                var o = n + "=" + i[n].join(",");
                e[e.length] = o
            }
            this.data.putInfo(this.orientUrgentKey, void 0),
            e.sort(function(t, e) {
                return t.length - e.length
            });
            for (var r = "",
            a = e.length,
            s = 0; a > s && !(r.length + e[s].length >= t); s++) r += (s ? "&": "") + e[s];
            return r
        },
        addSlotStatusCallback: function(t, e) {
            slot.setSlotFinishCallback(t),
            slot.addWatchSlotId(e)
        }
    }),
    t.define({
        name: "browserParam",
        namespace: "dup.business.parameter",
        deps: {
            config: "dup.common.config",
            browser: "dup.common.utility.browser",
            dom: "dup.common.utility.dom",
            style: "dup.common.utility.style",
            url: "dup.common.utility.url",
            cookie: "dup.common.utility.cookie"
        },
        $browserParam: function() {
            this.win = window,
            this.doc = this.win.document,
            this.nav = this.win.navigator
        },
        getTopWin: function() {
            return this.topWindow || (this.topWindow = this.dom.getNotCrossDomainTopWindow()),
            this.topWindow
        },
        paramsList: [{
            key: "dbv",
            value: function() {
                return this.browser.qihoo ? "1": this.browser.chrome ? "2": "0"
            }
        },
        {
            key: "drs",
            value: function() {
                var t = {
                    uninitialized: 0,
                    loading: 1,
                    loaded: 2,
                    interactive: 3,
                    complete: 4
                };
                try {
                    return t[this.doc.readyState]
                } catch(e) {
                    return - 1
                }
            }
        },
        {
            key: "pcs",
            value: function() {
                var t = [this.style.getClientWidth(this.getTopWin()), this.style.getClientHeight(this.getTopWin())];
                return t.join("x")
            }
        },
        {
            key: "pss",
            value: function() {
                var t = [this.style.getScrollWidth(this.getTopWin()), this.style.getScrollHeight(this.getTopWin())];
                return t.join("x")
            }
        },
        {
            key: "cfv",
            value: function() {
                return this.browser.getFlashPlayerVersion()
            }
        },
        {
            key: "cpl",
            value: function() {
                return this.nav.plugins.length || 0
            }
        },
        {
            key: "chi",
            value: function() {
                return this.win.history.length || 0
            }
        },
        {
            key: "cce",
            value: function() {
                return this.nav.cookieEnabled || 0
            }
        },
        {
            key: "cec",
            value: function() {
                return (this.doc.characterSet ? this.doc.characterSet: this.doc.charset) || ""
            }
        },
        {
            key: "tlm",
            value: function() {
                return Date.parse(this.doc.lastModified) / 1e3
            }
        },
        {
            key: "ltu",
            encode: !0,
            value: function() {
                var e = t.proxy(this,
                function(t) {
                    var e = 200,
                    i = 60,
                    n = this.style.getClientWidth(t),
                    o = this.style.getClientHeight(t);
                    return e > 0 && i > 0 && n > 2 * e && o > 2 * i ? !0 : !1
                }),
                i = this.url.getTopWindowUrl(e);
                return i.indexOf("cpro_prev") > 0 && (i = i.slice(0, i.indexOf("?"))),
                i
            }
        },
        {
            key: "liu",
            encode: !0,
            value: function() {
                return this.dom.isInIframe(this.win) ? this.doc.URL: ""
            }
        },
        {
            key: "ltr",
            encode: !0,
            value: function() {
                var t = this.getTopWin(),
                e = "";
                try {
                    e = t.opener ? t.opener.document.location.href: ""
                } catch(i) {}
                return e || t.document.referrer
            }
        },
        {
            key: "lcr",
            encode: !0,
            value: function() {
                var t = this.doc.referrer,
                e = t.replace(/^https?:\/\//, "");
                e = e.split("/")[0],
                e = e.split(":")[0],
                e = this.url.getMainDomain(e);
                var i = this.url.getMainDomain(),
                n = this.cookie.get(this.config.LCR_COOKIE_NAME);
                return n && i === e ? n: i !== e ? (this.cookie.set(this.config.LCR_COOKIE_NAME, t, {
                    domain: i
                }), t) : ""
            }
        },
        {
            key: "ecd",
            encode: !0,
            value: function() {
                return this.browser.ie && this.browser.ie < 8 ? 0 : 1
            }
        }]
    }),
    t.define({
        name: "systemParam",
        namespace: "dup.business.parameter",
        deps: {
            dom: "dup.common.utility.dom",
            style: "dup.common.utility.style"
        },
        $systemParam: function() {
            this.win = window,
            this.doc = this.win.document,
            this.screen = this.win.screen,
            this.nav = this.win.navigator
        },
        paramsList: [{
            key: "psr",
            value: function() {
                var t = [this.screen.width, this.screen.height];
                return t.join("x")
            }
        },
        {
            key: "par",
            value: function() {
                var t = [this.screen.availWidth, this.screen.availHeight];
                return t.join("x")
            }
        },
        {
            key: "pis",
            value: function() {
                var t = this.dom.isInIframe(this.win) ? [this.style.getClientWidth(), this.style.getClientHeight()] : [ - 1, -1];
                return t.join("x")
            }
        },
        {
            key: "ccd",
            value: function() {
                return this.screen.colorDepth || 0
            }
        },
        {
            key: "cja",
            value: function() {
                return this.nav.javaEnabled() ? this.nav.javaEnabled().toString() : false
                //return this.nav.javaEnabled().toString()
            }
        },
        {
            key: "cmi",
            value: function() {
                return this.nav.mimeTypes.length || 0
            }
        },
        {
            key: "col",
            value: function() {
                return (this.nav.language || this.nav.browserLanguage || this.nav.systemLanguage).replace(/[^a-zA-Z0-9\-]/g, "")
            }
        },
        {
            key: "cdo",
            value: function() {
                var t = this.win.orientation;
                return void 0 === t && (t = -1),
                t
            }
        },
        {
            key: "tcn",
            value: function() {
                var t = +new Date;
                return Math.round(t / 1e3)
            }
        }]
    }),
    t.define({
        name: "event",
        namespace: "dup.common.utility",
        deps: {
            dom: "dup.common.utility.dom"
        },
        bind: function(t, e, i) {
            var n = this.dom.isWindow(t) ? t: this.dom.g(t);
            if (n) if (n.addEventListener) n.addEventListener(e, i, !1);
            else if (n.attachEvent) n.attachEvent("on" + e, i);
            else {
                var o = n["on" + e];
                n["on" + e] = function() {
                    o && o.apply(this, arguments),
                    i.apply(this, arguments)
                }
            }
            return n
        }
    }),
    t.define({
        name: "painterSelector",
        namespace: "dup.business",
        deps: {
            asserter: "dup.ui.assertion.asserter"
        },
        getPainter: function(e) {
            var i = this.asserter.assert(e);
            if (i) return "dup.ui.painter." + i;
            for (var n = e.response.placement,
            o = ["topSearchBar", "bottomSearchBar", "slide", "inlayFix", "dynamicFloat", "float", "insideText", "mobile.inlayFix", "mobile.float"], r = 0, a = o.length; a > r; r++) {
                var s = t.using("dup.ui.assertion." + o[r]);
                if (s.assert(n)) return "dup.ui.painter." + o[r]
            }
            return ""
        }
    }),
    t.define({
        name: "log",
        namespace: "dup.common.utility",
        deps: {
            lang: "dup.common.utility.lang",
            event: "dup.common.utility.event",
            storage: "dup.common.utility.storage"
        },
        storageKey: "MS_DUP_log_storage",
        loadImage: function(t, e) {
            var i = new Image,
            n = "MS_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
            window[n] = i,
            i.onload = i.onerror = i.onabort = function() {
                i.onload = i.onerror = i.onabort = null,
                window[n] = null,
                i = null,
                e && e(this.storageKey, t, !0)
            },
            i.src = t
        },
        resendLog: function() {
            var t = this.storage.getItem(storageKey);
            if (t) {
                t = t.split("|");
                for (var e = 0,
                i = t.length; i > e; e++) this.loadImage(decodeURIComponent(t[e]), storage.spliceItem)
            }
        },
        sendLog: function(t) {
            t = "object" === this.lang.getType(t) ? t: {};
            var e = t.url || LOG_URL,
            i = t.data || {},
            n = t.option || "now",
            o = this.lang.serialize(i);
            switch (e += (e.indexOf("?") >= 0 ? "&": "?") + o + (o ? "&": "") + "rdm=" + +new Date, n) {
            case "now":
                this.loadImage(e);
                break;
            case "block":
                break;
            case "unload":
            default:
                this.storage.addItem(this.storageKey, e, !0),
                this.event.bind(window, "unload",
                function() {
                    this.loadImage(e, this.storage.spliceItem)
                })
            }
        }
    }),
    t.define({
        name: "dynamicFloatDecorator",
        namespace: "dup.ui.painter",
        deps: {
            dom: "dup.common.utility.dom",
            style: "dup.common.utility.style"
        },
        decorate: function(t, e, i) {
            this.el = t,
            this.width = e,
            this.height = i,
            this.topSpace = 5,
            this.resetTargetStyle(),
            this.initializeEvent(),
            this.checkStatus()
        },
        initializeEvent: function(e) {
            this.dom.bind(window, "scroll", t.proxy(this, this.onScrollHandler)),
            this.dom.bind(window, "resize", t.proxy(this, this.onScrollHandler))
        },
        resetTargetStyle: function() {
            this.el.style.width = this.width + "px",
            this.el.style.height = this.height + "px",
            this.el.style.display = "inline-block"
        },
        onScrollHandler: function() {
            this.checkStatus()
        },
        checkStatus: function() {
            return this.el && document.getElementById(this.el.getAttribute("id")) ? void(this.style.canFixed() ? this.updateStatusFixedly() : this.updateStatusAbsolutly()) : (this.el = null, !1)
        },
        updateStatusFixedly: function() {
            if (this.isFloating) this.alignTargetLeft(),
            this.isBackToHolder() && (this.isFloating = !1, this.el.style.cssText = null, this.resetTargetStyle(), this.removePlaceHolder());
            else {
                var t = this.isTouchRoof();
                t && (this.el.style.zIndex = 2147483646, this.el.style.position = "fixed", this.createPlaceHolder(), this.alignTargetLeft(), t ? this.el.style.top = this.topSpace + "px": this.el.style.bottom = this.topSpace + "px", this.isFloating = !0)
            }
        },
        updateStatusAbsolutly: function() {
            if (this.isFloating) this.updatePosition(),
            this.isBackToHolder() && (this.isFloating = !1, this.el.style.cssText = null, this.resetTargetStyle(), this.removePlaceHolder());
            else {
                var t = this.isTouchRoof();
                t && (this.el.style.position = "absolute", this.el.style.zIndex = 2147483646, this.el.style.visibility = "visible", this.createPlaceHolder(), this.isFloating = !0, this.updatePosition())
            }
        },
        updatePosition: function() {
            if (this.holderEl) {
                var t = (this.style.getClientWidth(window), this.style.getClientHeight(window)),
                e = this.style.getScrollTop(window),
                i = this.style.getPositionCore(document.body),
                n = i.left,
                o = i.top,
                r = this.getPosition(this.holderEl),
                a = this.getPosition(this.el),
                s = this.style.getStyle(document.body, "position").toString(),
                l = e + this.topSpace;
                r.top > a.top && (l = e + (t - this.topSpace - a.bottom + a.top)),
                this.el.style.top = "" + l + "px",
                this.el.style.left = "" + r.leftAbs + "px",
                "relative" == s && (this.el.style.top = e + this.topSpace - o + "px", this.el.style.left = r.leftAbs - n + "px"),
                this.el.style.visibility = "visible"
            }
        },
        createPlaceHolder: function() {
            var t = this.el.id + "_placeholder";
            this.holderEl = document.createElement("div"),
            this.holderEl.id = t,
            this.holderEl.align && (this.holderEl.align = this.el.getAttribute("align"));
            var e = this.style.getOuterWidth(this.el, !1),
            i = this.style.getOuterHeight(this.el, !1);
            this.holderEl.style.width = "" + parseInt(e, 10) + "px",
            this.holderEl.style.height = "" + parseInt(i, 10) + "px",
            this.holderEl.style.margin = "0",
            this.holderEl.style.padding = "0",
            this.holderEl.style.background = "none",
            this.holderEl.style.border = "none",
            this.holderEl.style.display = "inline-block",
            this.holderEl.style.left = this.el.getAttribute("left"),
            this.el.parentNode.insertBefore(this.holderEl, this.el)
        },
        removePlaceHolder: function() {
            return this.holderEl ? (this.holderEl.parentNode.removeChild(this.holderEl), this.holderEl = null, !0) : !1
        },
        isTouchRoof: function() {
            var t = this.getPosition(this.el),
            e = (this.style.getClientHeight(), t.top);
            return e < this.topSpace ? !0 : !1
        },
        isTouchBottom: function() {
            var t = this.getPosition(this.el),
            e = this.style.getClientHeight(),
            i = t.bottom;
            return i > e - this.topSpace ? !0 : !1
        },
        isBackToHolder: function() {
            if (this.el && this.holderEl) {
                var t = this.style.getClientHeight(),
                e = this.getPosition(this.el),
                i = (e.top, e.bottom, this.getPosition(this.holderEl)),
                n = i.top,
                o = i.bottom;
                if (n >= this.topSpace && o <= t - this.topSpace) return ! 0
            }
            return ! 1
        },
        alignTargetLeft: function() {
            if (this.el && this.holderEl) {
                var t = this.getPosition(this.holderEl).left;
                this.el.style.left = t + "px"
            }
        },
        getPosition: function(t) {
            var e = this.style.getPositionCore(t),
            i = this.style.getScrollLeft(window),
            n = this.style.getScrollTop(window),
            o = this.style.getOuterWidth(t, !1),
            r = this.style.getOuterHeight(t, !1);
            return {
                top: e.top - n,
                bottom: e.top - n + r,
                left: e.left - i,
                right: e.left - i + o,
                topAbs: e.top,
                bottomAbs: e.top + r,
                leftAbs: e.left,
                rightAbs: e.left + o
            }
        }
    }),
    t.define({
        name: "landingPage",
        namespace: "dup.ui.painter",
        deps: {
            lang: "dup.common.utility.lang",
            style: "dup.common.utility.style",
            browser: "dup.common.utility.browser",
            dom: "dup.common.utility.dom"
        },
        activate: function(e) {
            return this.validate(e) ? (this.expansionActionName = "BaiduCproExpansion" + e.containerId, this.pageIframeId = e.containerId + "_ExpansionLP", e.paramObj.expToken = this.expansionActionName, this.dom.bind(window, "message", t.proxy(this, this.onPostMessageHandler)), !0) : !1
        },
        validate: function(t) {
            var e = parseInt(t.styleOpenApi.expansion || 0, 10);
            return 1 === e && !this.browser.isIOS && "postMessage" in window
        },
        onPostMessageHandler: function(e) {
            if ("object" == typeof e && e.data) {
                var i = e.data;
                if (! (i.indexOf(this.expansionActionName) < 0)) {
                    this.expandContainerEl = document.createElement("div");
                    var n = Math.max(this.style.getClientWidth(), this.style.getClientHeight()),
                    o = this.expandContainerEl.style;
                    o.position = "fixed",
                    o.left = "0",
                    o.top = n + "px",
                    o.zIndex = 2147483647,
                    o.background = "#ffffff",
                    o.width = "100%",
                    o.transition = o.WebkitTransition = o.MozTransition = o.OTransition = "top 1s ease-in-out",
                    i = i.slice(this.expansionActionName.length);
                    var r = ['<iframe id="{lpIframeId}" ', 'src="{clickUrl}" width="{iframeWidth}" ', 'height="{iframeHeight}" align="center,center" ', 'marginwidth="0"  marginheight="0" ', 'frameborder="0"></iframe>', '<div id="{lpIframeId}_closeBtn" ', 'style="position:absolute;right:0;top:0;', "width:{closeBtnSize}px;", "height:{closeBtnSize}px;", "overflow:hidden;display:block;", "background:url('http://test.adt.com/ad/xuantingClose.png') ", "no-repeat 0 0; ", "_filter:progid:DXImageTransform", ".Microsoft.AlphaImageLoader(", "enabled=true, sizingMethod=none, ", "src='http://test.adt.com/ad/xuantingClose.png');", "_background:none;cursor:pointer;", 'background-position:center;background-size:100%,100%;">&nbsp;</div>'].join(""),
                    a = Math.min(this.style.getClientWidth(), this.style.getClientHeight()),
                    s = {
                        lpIframeId: this.pageIframeId,
                        clickUrl: i,
                        iframeWidth: this.style.getClientWidth(),
                        iframeHeight: this.style.getClientHeight(),
                        closeBtnSize: 80 * a / 640
                    };
                    this.expandContainerEl.innerHTML = this.lang.template(r, s),
                    this.expandContainerEl.style.top = "0",
                    document.body.appendChild(this.expandContainerEl),
                    this.dom.bind(window, "resize", t.proxy(this, this.onResizeHandler));
                    var l = this.dom.g(this.pageIframeId + "_closeBtn");
                    this.dom.bind(l, "click", t.proxy(this, this.onCloseBtnClickHandler))
                }
            }
        },
        onCloseBtnClickHandler: function() {
            this.expandContainerEl.style.top = Math.max(this.style.getClientWidth(), this.style.getClientHeight()) + "px",
            this.expandContainerEl && this.expandContainerEl.parentNode ? (this.expandContainerEl.parentNode.removeChild(this.expandContainerEl), this.expandContainerEl = null) : this.expandContainerEl.innerHTML = ""
        },
        onResizeHandler: function() {
            var t = this.style.getClientWidth(),
            e = this.style.getClientHeight(),
            i = this.dom.g(this.pageIframeId);
            i.style.width = t + "px",
            i.style.height = e + "px",
            i.setAttribute("width", t),
            i.setAttribute("height", e)
        }
    }),
    t.define({
        name: "hiddenFloatAd",
        namespace: "dup.ui.painter",
        deps: {
            style: "dup.common.utility.style",
            dom: "dup.common.utility.dom"
        },
        TOP: 2,
        BOTTOM: 3,
        activate: function(e) {
            if (!this.validate(e)) return ! 1;
            this.alreadyEnableHidden = !0,
            this.autoCloseTime = parseInt(e.styleOpenApi.cpro_close_time, 10) || 5,
            this.autoCloseTime = this.autoCloseTime >= 3 ? this.autoCloseTime: 3;
            var i = parseInt(e.styleOpenApi.cpro_show_dist, 10) || 5;
            i = i >= 5 ? i: 5,
            this.percentage = (1 / i).toFixed(2);
            var n = e.response.placement,
            o = n.container;
            this.dockTo = parseInt(o.location, 10),
            this.adWrapEl = document.getElementById(e.containerId),
            this.adWrapEl.style.display = "block",
            this.adIframe = document.getElementById("cproIframe_" + e.id);
            var r = document.getElementById(e.containerId + "_closebtn"),
            a = parseInt(this.adWrapEl.style.height || e.height, 10),
            s = parseInt(r.style.height, 10);
            this.hiddenHeight = -1 * (a + s),
            this.haveSetIframeUrl = !0,
            this.countDownTimerId = !1,
            this.close4ever = !1,
            this.shrinkAd(),
            this.transitionDecorator(this.adWrapEl),
            this.lastScrollTop = this.style.getScrollTop(),
            this.dom.bind(r, "click", t.proxy(this, this.closeBtnOnClickHandler)),
            this.dom.bind(window, "scroll", t.proxy(this, this.onScrollHandler))
        },
        validate: function(t) {
            var e = "true" === t.styleOpenApi.cpro_enable_hidden_float ? !0 : !1;
            return e ? this.alreadyEnableHidden ? !1 : (this.alreadyEnableHidden = !0, !0) : !1
        },
        shrinkAd: function() {
            this.dockTo === this.TOP ? this.adWrapEl.style.top = this.hiddenHeight + "px": this.dockTo === this.BOTTOM && (this.adWrapEl.style.bottom = this.hiddenHeight + "px")
        },
        expandAd: function() {
            this.dockTo === this.TOP ? this.adWrapEl.style.top = 0 : this.adWrapEl.style.bottom = 0,
            this.adIframe && !this.haveSetIframeUrl && (this.adIframe.src = this.adIframe.getAttribute("_src"), this.haveSetIframeUrl = !0)
        },
        transitionDecorator: function(t) {
            var e = "-webkit-transition: all .3s linear;-moz-transition: all .3s linear;-ms-transition: all .3s linear;-o-transition: all .3s linear;transition: all .3s linear;";
            t.style.cssText = t.style.cssText + e
        },
        startCountDown: function(t, e) {
            var i = t,
            n = setInterval(function() {
                i--,
                0 >= i && (clearInterval(n), e && e())
            },
            1e3);
            this.countDownTimerId = n
        },
        closeBtnOnClickHandler: function() {
            this.shrinkAd(),
            this.close4ever = !0,
            this.setCloseCookie(this.slotId)
        },
        onScrollHandler: function() {
            var e = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * this.percentage,
            i = this.style.getScrollTop(),
            n = i > this.lastScrollTop ? "down": "top";
            this.totalScrollLength += i - this.lastScrollTop,
            this.lastScrollTop = i,
            "top" === n && !this.close4ever && Math.abs(this.totalScrollLength) >= e && !this.countDownTimerId ? (this.expandAd(), this.startCountDown(this.autoCloseTime, t.proxy(this, this.onTimeCountDownHandler))) : "down" === n && (this.totalScrollLength = 0)
        },
        onTimeCountDownHandler: function() {
            this.shrinkAd(),
            this.countDownTimerId = !1,
            this.totalScrollLength = 0
        }
    }),
    t.define({
        name: "painter",
        namespace: "dup.ui.painter",
        deps: {
            config: "dup.common.config",
            lang: "dup.common.utility.lang",
            searchParam: "dup.business.searchParam",
            dom: "dup.common.utility.dom"
        },
        getParamList: function(t) {
            var e = [],
            i = this.searchParam.getParamInfoById(t.id);
            for (var n in i) n && i[n] && i.hasOwnProperty(n) && ("tn" == n && i[n].indexOf("float") > -1 && (i[n] = "template_float_all_normal"), e.push(n + "=" + encodeURIComponent(i[n])));
            var o = +new Date,
            r = t.timestampWatcher.t1;
            return i.tt = r + "." + (t.timestampWatcher.t2 - r) + "." + (t.timestampWatcher.t3 - r) + "." + (o - r),
            i.feid = 7300,
            e.push("ti=" + this.dom.getDocumentTitle()),
            e
        },
        getIframeHtmlSnippet: function(t) {
            var e = ["<iframe", ' id="{iframeId}"', ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' allowtransparency="true">', "</iframe>"].join(""),
            i = this.getParamList(t),
            n = {
                iframeId: "cproIframe_" + t.id,
                srcAttriName: "src",
                iframeWidth: t.width,
                iframeHeight: t.height,
                url: this.config.POS_URL + i.join("&")
            };
            return this.lang.template(e, n)
        },
        getHtmlSnippet: function() {},
        render: function(t) {
            t.status = this.config.STATUS_RENDERED
        }
    }),
    t.define({
        name: "slotParam",
        namespace: "dup.business.parameter",
        deps: {
            dom: "dup.common.utility.dom",
            style: "dup.common.utility.style"
        },
        $slotParam: function() {
            this.win = window
        },
        paramsList: [{
            key: "di",
            value: function() {
                return this.slotInfo.slotId
            }
        },
        {
            key: "dri",
            value: function() {
                return this.slotInfo.index
            }
        },
        {
            key: "dis",
            value: function() {
                var t = 0;
                this.dom.isInIframe(this.win) && (t += 1),
                this.dom.isInCrossDomainIframe(this.win, this.win.top) && (t += 2);
                var e = this.style.getClientWidth(),
                i = this.style.getClientHeight();
                return (40 > e || 10 > i) && (t += 4),
                t
            }
        },
        {
            key: "dai",
            value: function() {
                return this.slotInfo.count
            }
        },
        {
            key: "ps",
            value: function() {
                var t = this.dom.g(this.slotInfo.containerId),
                e = this.style.getPosition(t);
                return e.top + "x" + e.left
            }
        },
        {
            key: "coa",
            encode: !0,
            value: function() {
                var t = [],
                e = this.slotInfo.styleOpenApi;
                for (var i in e) if (i && "undefined" != typeof e[i] && e.hasOwnProperty(i)) {
                    var n = i;
                    "cpro_w" === i && (n = "rsi0"),
                    "cpro_h" === i && (n = "rsi1"),
                    t.push(n + "=" + encodeURIComponent(e[i]))
                }
                return t.join("&")
            }
        }],
        setSlotInfo: function(t) {
            this.slotInfo = t
        }
    }),
    t.define({
        name: "preview",
        namespace: "dup.business",
        deps: {
            url: "dup.common.utility.url",
            data: "dup.common.utility.data"
        },
        DUP_PREFIX: "baidu_dup_preview_",
        getValue: function(t) {
            var e = this.url.getTopWindowUrl(),
            i = this.url.getQueryValue(e, this.DUP_PREFIX + t);
            return i
        },
        getInfo: function() {
            var t = this.getValue("sid"),
            e = this.getValue("mid"),
            i = this.getValue("vc"),
            n = +this.getValue("ts"),
            o = +new Date,
            r = null;
            return 3e4 >= o - n && (r = {
                sid: t,
                mid: e,
                vc: i
            }),
            this.getInfo = function() {
                return r
            },
            r
        },
        isUnionPreview: function(t) {
            var e = !1;
            return t ? /cpro_template=/gi.test(t) && (this.data.putInfo("#unionPreviewSwitch", !0), e = !0) : e = !!this.data.getInfo("#unionPreviewSwitch"),
            e
        },
        setUnionPreviewData: function(t) {
            this.data.putInfo("#unionPreviewData", t)
        },
        getUnionPreviewData: function() {
            var t = this.data.getInfo("#unionPreviewData");
            return t ? "prev=" + encodeURIComponent(t) + "&pt=union": ""
        },
        clearUnionPreviewData: function() {
            this.data.removeInfo("#unionPreviewSwitch"),
            this.data.removeInfo("#unionPreviewData")
        },
        getSearchParams: function(t) {
            var e = {},
            i = this.getInfo();
            return i && t == i.sid && (e.mid = i.mid, e.sid = i.vc),
            e
        }
    }),
    t.define({
        name: "fingerPrint",
        namespace: "dup.business",
        deps: {
            browser: "dup.common.utility.browser",
            event: "dup.common.utility.event",
            dom: "dup.common.utility.dom"
        },
        start: function() {
            this.idPrefix = "MS_DUP_fp_",
            this.fpElId = this.idPrefix + "wrapper",
            this.dom.g(this.fpElId) || this.event.bind(window, "load", t.proxy(this, this.createFPIframe))
        },
        createFPIframe: function() {
            if (!this.dom.g(this.fpElId)) {
                var t = window,
                e = t.document,
                i = e.body,
                n = "",
                o = e.createElement("div");
                o.id = this.fpElId,
                o.style.position = "absolute",
                o.style.left = "-1px",
                o.style.bottom = "-1px",
                o.style.zIndex = 0,
                o.style.width = 0,
                o.style.height = 0,
                o.style.overflow = "hidden",
                o.style.visibility = "hidden",
                o.style.display = "none";
                var r = e.createElement("iframe");
                r.id = this.idPrefix + "iframe",
                r.src = n,
                r.style.width = 0,
                r.style.height = 0,
                r.style.visibility = "hidden",
                r.style.display = "none";
                try {
                    //o.insertBefore(r, o.firstChild),
                    //i && i.insertBefore(o, i.firstChild)
                } catch(a) {}
            }
        }
    }),
    t.define({
        name: "unionMobilePainter",
        namespace: "dup.ui.painter",
        deps: {
            config: "dup.common.config",
            data: "dup.common.utility.data",
            lang: "dup.common.utility.lang",
            style: "dup.common.utility.style",
            dom: "dup.common.utility.dom",
            cookie: "dup.common.utility.cookie",
            searchParam: "dup.business.searchParam",
            landingPage: "dup.ui.painter.landingPage",
            painter: "dup.ui.painter.painter",
            hiddenFloatAd: "dup.ui.painter.hiddenFloatAd"
        },
        $unionMobilePainter: function() {
            this.win = window
        },
        processSlotInfo: function(t) {
            t.displayType = "inlay-mobile",
            t.status = this.config.STATUS_RENDERED;
            var e = this.searchParam.getParamInfoById(t.id),
            i = "mobile_skin_white_red",
            n = e.skin || i;
            e.xuanting = parseInt(e.xuanting || 0, 10),
            e.xuanting && n === i && (n = "mobile_skin_black_white"),
            e.skin = n;
            var o = parseInt(e.at || 99, 10);
            4 === (4 & o) && (e.at = 4 ^ o),
            e.scale = e.scale || "20.3",
            "20.5" === e.scale && (e.xuanting = 0);
            var r = e.scale.split("."),
            a = this.data.getInfo("setCoaHeight"),
            s = this.data.getInfo("setCoaWidth");
            switch (s && a ? (this.iframeWidth = e.rsi0, this.iframeHeight = e.rsi1) : !s && a ? (this.iframeWidth = this.getCurViewportWidth(t.slotId, e.rsi0), this.iframeHeight = e.rsi1) : !a && s ? (this.iframeWidth = e.rsi0, this.iframeHeight = Math.ceil(this.iframeWidth / r[0] * r[1])) : (this.iframeWidth = this.getIframeWidth(t.slotId, e.rsi0), this.iframeHeight = Math.ceil(this.iframeWidth / r[0] * r[1])), this.hardCodeForGanji(e.n, t.containerId + "_wrap"), e.rsi0 = this.iframeWidth, e.rsi1 = this.iframeHeight, t.width = this.iframeWidth, t.height = this.iframeHeight, e.wt = 1, e.xuanting) {
            case 0:
                e.distp = "1001";
                break;
            case 2:
                e.distp = "2005";
                break;
            case 3:
                e.distp = "2006";
                break;
            case 4:
                e.distp = "2007"
            }
            e.adn && 0 !== parseInt(e.adn || 0, 10) || (e.adn = 1);
            var l = this.landingPage.activate(t);
            l && (e.expToken = this.landingPage.expansionActionName),
            e.conW = this.iframeWidth,
            e.conH = this.iframeHeight
        },
        hardCodeForGanji: function(t, e) {
            if ("19076084_1_cpr" === t) {
                for (var i = 1,
                n = document.getElementsByTagName("meta"), o = 0; o < n.length; o++) if ("viewport" === n[o].name) {
                    var r = n[o].content;
                    if (r.indexOf("initial-scale") > -1) {
                        i = r.match(/initial-scale=(\d(.\d)*)/)[1];
                        break
                    }
                }
                if (this.iframeWidth = this.iframeWidth / i, this.iframeHeight = this.iframeHeight / i, 1 !== i) {
                    var a = "onorientationchange" in this.win ? "orientationchange": "resize";
                    this.dom.bind(this.win, a,
                    function() {
                        setTimeout(function() {
                            this.dom.g(e).style.width = this.win.innerWidth + "px"
                        },
                        this.browser.isAndroid ? 1e3: 0)
                    })
                }
            }
        },
        getIframeWidth: function(t, e) {
            var i = window.innerWidth,
            n = window.innerHeight,
            o = Math.min(i, n);
            this.dom.isInIframe(window) && i > n && (o = window.innerWidth);
            var r = "u0" === t ? e: Math.max(320, o);
            return isNaN(r) && (r = Math.min(this.style.getClientWidth(), this.style.getClientHeight())),
            r
        },
        getCurViewportWidth: function(t, e) {
            var i = "u0" === t ? e: Math.max(320, window.innerWidth);
            return isNaN(i) && (i = this.style.getClientWidth()),
            i
        },
        parsePositionHTML: function(t) {
            var e = this.searchParam.getParamInfoById(t.id),
            i = parseFloat(e.opacity || .9),
            n = e.rss1 || "#000",
            o = parseInt(e.xuanting || 0, 10),
            r = "opacity:" + i + ";",
            a = "absolute";
            if (this.style.canFixed() && (a = "fixed"), o && (r += "position:" + a + ";z-index:2147483647;"), 2 === o) r += "top:0;background-color:" + n + ";";
            else if (3 === o) if ("fixed" === a) r += "bottom:0;background-color:" + n + ";";
            else {
                var s = this.style.getScrollTop(window) + this.style.getClientHeight(window) - this.iframeHeight;
                r += "top:" + s + "px;background-color:" + n + ";"
            }
            return r
        },
        computeCloseBtnTemplateData: function(t) {
            var e = 40,
            i = 40,
            n = 0,
            o = "",
            r = this.searchParam.getParamInfoById(t.id),
            a = r.scale,
            s = 1;
            "20.2" === a ? (s = this.iframeHeight / 48, o = 4) : "20.3" === a && (s = this.iframeHeight / 72, o = 3),
            e = 50 * s,
            i = 20 * s,
            n = 16 * s;
            var l = "20.2" === a ? this.iframeHeight: "-" + i,
            d = t.id + "_wrap";
            return {
                slotId: t.id,
                domId: d,
                right: n,
                top: l,
                closeBtnWidth: e,
                closeBtnHeight: i,
                closeBtnImgUrl: "http://test.adt.com/ad/xuantingClose" + o + ".png"
            }
        },
        parseCloseButtonHTML: function(t) {
            var e = this.searchParam.getParamInfoById(t.id),
            i = e.xuanting;
            if (0 === parseInt(i || 0, 10)) return "";
            var n = ["<div", ' id="{domId}_closebtn"', ' style="', "position:absolute;", "right:0;", "top:{top}px;", "width:{closeBtnWidth}px;", "height:{closeBtnHeight}px;", "overflow:hidden;", "display:block;", "background:url('{closeBtnImgUrl}') no-repeat 0 0;", "_filter:progid:DXImageTransform.", "Microsoft.AlphaImageLoader(", "enabled=true,", " sizingMethod=none,", " src='{closeBtnImgUrl}');", "_background:none;", "cursor:pointer;", "background-position:center;", "background-size:100% 100%;", 'z-index:2147483647;">&nbsp;</div>'].join(""),
            o = this.computeCloseBtnTemplateData(t);
            return this.lang.template(n, o)
        },
        parseHtmlSnippet: function(t) {
            var e = document.createElement("div");
            e.id = t.id + "_wrap";
            var i = "text-align:center;display:block;font-size:0;width:{wrapperWidth};height:{height}px;{position}",
            n = ['<div style="width:{width}px; height:{height}px; position:relative; margin:0 auto;"> ', "{closeBtnHtml}", "{iframeHtml}", "</div>"].join(""),
            o = this.lang.template(i, t),
            r = this.lang.template(n, t);
            return e.setAttribute("style", o),
            e.innerHTML = r,
            e
        },
        validate: function(t) {
            var e = "bd_close_" + t.slotId,
            i = this.cookie.get(e, window);
            return i ? !1 : !0
        },
        closeBtnOnClickHandler: function() {
            var t = this.dom.g(this.containerId);
            t && (t.parentNode.removeChild(t), this.cookie.remove(this.cookieKey), this.sessionSync && this.setCloseCookie())
        },
        setCloseCookie: function() {
            var t = {
                path: ""
            };
            if (this.closeFor) {
                var e = new Date;
                e.setTime(e.getTime() + this.closeFor),
                t.expires = e
            }
            this.cookie.set(this.cookieKey, 1, t)
        },
        render: function(e) {
            if (this.validate(e)) {
                this.processSlotInfo(e);
                var i = this.searchParam.getParamInfoById(e.id);
                this.sessionSync = i.sessionSync || !1;
                var n = i.xuanting || 0,
                o = this.parseCloseButtonHTML(e),
                r = this.parsePositionHTML(e),
                a = {
                    id: e.id,
                    wrapperWidth: "100%",
                    width: this.iframeWidth,
                    height: this.iframeHeight,
                    closeBtnHtml: o,
                    position: r,
                    iframeHtml: this.painter.getIframeHtmlSnippet(e)
                },
                s = this.parseHtmlSnippet(a),
                l = s.outerHTML,
                d = this.dom.g(e.containerId),
                h = a.id + "_wrap";
                if (n > 0 ? document.body && (e.containerId = h, document.body.insertBefore(s, document.body.firstChild)) : d ? d.innerHTML = l: (e.containerId = h, document.write(l)), this.containerId = e.containerId, this.hiddenFloatAd.activate(e), n > 0) {
                    this.cloeBtnElId = h + "_closebtn",
                    this.cookieKey = "bd_close_" + e.slotId;
                    var c = this.dom.g(this.cloeBtnElId);
                    this.dom.bind(c, "click", t.proxy(this, this.closeBtnOnClickHandler))
                }
            }
        }
    }),
    t.define({
        name: "businessParam",
        namespace: "dup.business.parameter",
        deps: {
            config: "dup.common.config",
            preview: "dup.business.preview",
            dom: "dup.common.utility.dom",
            origentation: "dup.business.origentation"
        },
        paramsList: [{
            key: "dcb",
            value: function() {
                return this.config.LOADER_DEFINE_NAME
            }
        },
        {
            key: "dtm",
            value: function() {
                return this.config.DUP_TM
            }
        },
        {
            key: "dvi",
            value: function() {
                return "0.0"
            }
        },
        {
            key: "dci",
            value: function() {
                return "-1"
            }
        },
        {
            key: "dds",
            value: function() {
                return ""
            }
        },
        {
            key: "dpt",
            value: function() {
                var t = "none";
                return this.preview.isUnionPreview() && (t = "union"),
                t
            }
        },
        {
            key: "tsr",
            value: function() {
                var t = 0,
                e = +new Date;
                return this.config.startTime && (t = e - this.config.startTime),
                t
            }
        },
        {
            key: "tpr",
            value: function() {
                function t(t) {
                    try {
                        return !! t.top.location.toString()
                    } catch(e) {
                        return ! 1
                    }
                }
                var e, i, n = 24e4,
                o = (new Date).getTime();
                return i = t(window) ? window.top: window,
                e = i.MS_DUP2_pageFirstRequestTime,
                e ? o - e >= n && (e = i.MS_DUP2_pageFirstRequestTime = o) : e = i.MS_DUP2_pageFirstRequestTime = o,
                e || ""
            }
        },
        {
            key: "cop",
            encode: !0,
            value: function() {
                return this.origentation.getOrientationQuery()
            }
        },
        {
            key: "ti",
            encode: !0,
            value: function() {
                return this.dom.getDocumentTitle()
            }
        },
        {
            key: "ari",
            value: function() {
                return 1
            }
        }]
    }),
    t.define({
        name: "param",
        namespace: "dup.business",
        deps: {
            config: "dup.common.config",
            slotParams: "dup.business.parameter.slotParam",
            businessParams: "dup.business.parameter.businessParam",
            browserParams: "dup.business.parameter.browserParam",
            systemParams: "dup.business.parameter.systemParam",
            style: "dup.common.utility.style",
            dom: "dup.common.utility.dom",
            md5: "dup.common.utility.md5",
            preview: "dup.business.preview",
            requestCache: "dup.business.requestCache"
        },
        snap: function(t) {
            for (var e = [], i = t.paramsList, n = 0, o = i.length; o > n; n++) {
                var r = i[n],
                a = r.key,
                s = r.encode,
                l = r.value;
                l = "function" == typeof l ? l.apply(t) : l,
                l = s ? encodeURIComponent(l) : l,
                e.push({
                    key: a,
                    value: l
                })
            }
            return e
        },
        processExtendsParam: function(t) {
            var e, i = t.response,
            n = i.placement.container,
            o = i["extends"];
            if (o) {
                e = {};
                for (var r = o.split("&"), a = 0, s = r.length; s > a; a++) {
                    var l = r[a].split("=");
                    e[l[0]] = l[1]
                }
            }
            if (e && e.hasOwnProperty("cbcw") && e.hasOwnProperty("cbch")) {
                var d = parseInt(e.cbcw || 0, 10),
                h = parseInt(e.cbch || 0, 10),
                c = parseInt(e.cbsz || 0, 10);
                if (d && h && (n.width = d, n.height = h), c > 0 && (n.sizeType = c), 1 === c) t.width = d,
                t.height = h;
                else if (2 === c) {
                    var u = this.translateScaleToPixelSize(d, h);
                    t.width = u.width,
                    t.height = u.height
                }
            }
            var p = t.width || n.width,
            m = t.height || n.height,
            f = i.placement.complement_type;
            if (0 === f) {
                var g = this.dom.g(t.containerId);
                g.style.width = p + "px",
                g.style.height = m + "px",
                g.style.display = "inline-block"
            }
        },
        translateScaleToPixelSize: function(t, e, i) {
            i || (i = Math.max(320, Math.min(window.innerWidth, window.innerHeight)), isNaN(i) && (i = Math.min(this.style.getClientWidth(), this.style.getClientHeight())));
            var n = Math.ceil(i / t * e);
            return {
                width: i,
                height: n
            }
        },
        getParamObj: function(t) {
            var e = [];
            this.slotParams.setSlotInfo(t),
            e = e.concat(this.snap(this.slotParams)),
            e = e.concat(this.snap(this.businessParams)),
            e = e.concat(this.snap(this.browserParams)),
            e = e.concat(this.snap(this.systemParams));
            for (var i = {},
            n = 0,
            o = e.length; o > n; n++) {
                var r = e[n]; (t.isOldUnion !== !0 || "ari" !== r.key) && (i[r.key] = r.value)
            }
            t.width > 0 && t.height > 0 && (i.sz = t.width + "x" + t.height);
            var a = this.preview.getSearchParams(t.slotId);
            return i.mid = a.mid,
            i.sid = a.sid,
            i
        },
        getParamString: function(t) {
            var e = [];
            for (var i in t) if (i && (t[i] || 0 === t[i]) && t.hasOwnProperty(i)) {
                var n = t[i];
                if (n.length > 300 && ("ltu" === i || "ltr" === i || "lcr" === i)) {
                    var o = n.split("%3F");
                    o.length > 0 && (n = o[0])
                }
                e.push(i + "=" + n)
            }
            return e = e.join("&"),
            e.slice(0, 2048)
        },
        getPmpRequestUrl: function(t) {
            var e = {},
            i = t.paramObj;
            for (var n in i) n && i.hasOwnProperty(n) && (e[n] = i[n]);
            var o = t.timestampWatcher,
            r = o.t2,
            a = o.t3,
            s = t.response;
            if (s) {
                s.basic;
                e.qn = s.queryid,
                t.paramObj.qn = s.queryid;
                var l = t.width,
                d = t.height;
                l > 0 && d > 0 && (e.sz = l + "x" + d);
                var h = s.pdb_deliv;
                h.deliv_id && (e.pdbid = h.deliv_id);
                var c = s.order_deliv;
                c.deliv_id && (e.orderid = c.deliv_id),
                c.demand_id && (e.odid = c.demand_id);
                var u = s.rtb_deliv;
                u.deliv_id && (e.rtbid = u.deliv_id),
                u.demand_id && (e.rdid = u.demand_id);
                var p = 0 !== u.deliv_id || 0 !== c.deliv_id,
                m = s.placement.complement_type;
                if (p || 4 === m || 7 === m) {
                    var f = window.document,
                    g = +new Date + "" + 1e6 * Math.random() + 1e6 * Math.random() + f.location.href + t.tuid + f.cookie,
                    y = this.md5.md5(g);
                    e.dpv = y,
                    t.paramObj.dpv = y,
                    this.requestCache.add(y, t)
                }
                e.dc = 2,
                o && (e.tt = o.t1 + "." + (r - o.t1) + "." + (a - o.t1) + "." + ( + new Date - o.t1), e.feid = "7400")
            } else e.dcf = 1,
            o && (e.tt = o.t1 + ".0.0." + ( + new Date - o.t1), e.feid = "7401");
            return this.config.POS_URL + this.getParamString(e);
        }
    }),
    t.define({
        name: "richMaterial",
        namespace: "dup.ui.painter",
        deps: {
            dom: "dup.common.utility.dom",
            param: "dup.business.param",
            data: "dup.common.utility.data"
        },
        isNeededNode: function(t, e) {
            return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase()
        },
        evalScript: function(t, e) {
            var i = document.createElement("script");
            i.type = "text/javascript",
            t.src ? i.src = t.src: i.text = t.text || t.textContent || t.innerHTML || "",
            e.insertBefore(i, e.firstChild)
        },
        render: function(t, e) {
            if (t.response) {
                var i = t.response,
                n = (i.pdb_deliv, i.rtb_deliv),
                o = i.order_deliv,
                r = i.pdb_deliv.deliv_des,
                a = r._html,
                s = 0 !== n.deliv_id || o.deliv_id;
                if (!e && (!a || "rich" !== a.type || s)) return ! 1;
                var l = a.content;
                if (!t.isAsync && !s) return document.write(l),
                !0;
                var d = this.dom.g(t.containerId),
                h = this.dom.g(t.containerId + "_left"),
                c = this.dom.g(t.containerId + "_right");
                d ? (d.innerHTML = '<span style="display: none">ie</span>' + l, h && (h.style.display = "none"), c && (c.style.display = "none")) : h ? (h.innerHTML = '<span style="display: none">ie</span>' + l, c && (c.style.display = "none")) : c && (c.innerHTML = '<span style="display: none">ie</span>' + l);
                for (var u = d.childNodes,
                p = [], m = 0; u[m]; m++) ! this.isNeededNode(u[m], "script") || u[m].type && "text/javascript" !== u[m].type.toLowerCase() || p.push(u[m]);
                p.reverse();
                for (var f = 0,
                g = p.length; g > f; f++) this.evalScript(p[f].parentNode.removeChild(p[f]), d);
                return ! 0
            }
        }
    }),
    t.define({
        name: "slot",
        namespace: "dup.business",
        deps: {
            config: "dup.common.config",
            param: "dup.business.param",
            dom: "dup.common.utility.dom"
        },
        slotIdCountMap: {},
        slotCount: 0,
        $slot: function() {
            this.slotsMap = {}
        },
        getSlotInfo: function(t) {
            return this.slotsMap[t]
        },
        getSlotInfoByRawId: function(t) {
            for (var e in this.slotsMap) if (this.slotsMap.hasOwnProperty(e) && e.indexOf(t) > -1) return this.slotsMap[e];
            return {}
        },
        createSlot: function(t) {
            var e = t.slotId;
            this.slotIdCountMap[e] = this.slotIdCountMap[e] || 0;
            var i = {};
            return i.index = this.slotIdCountMap[e]++,
            i.count = ++this.slotCount,
            i.id = e + "_" + i.index,
            i.containerId = this.config.DUP_PREFIX + "wrapper_" + e + i.index,
            i.slotId = t.slotId,
            i.productLine = t.productLine,
            i.isAsync = t.isAsync,
            i.status = this.config.STATUS_CREATE,
            i.timestampWatcher = {
                t1: +new Date
            },
            window.cproStyleApi ? i.styleOpenApi = window.cproStyleApi[e] || {}: i.styleOpenApi = {},
            0 === e.indexOf("u") && (i.productLine = "union", i.width = i.styleOpenApi.cpro_w || i.styleOpenApi.rsi0 || 0, i.height = i.styleOpenApi.cpro_h || i.styleOpenApi.rsi1 || 0),
            i
        },
        addSlot: function(t) {
            this.slotsMap[t.id] = t
        },
        setStatus: function(t, e) {
            var i = this.getSlotInfo(t);
            i && (i.status = e)
        },
        process: function() {
            var t = this.slotsMap;
            for (var e in t) if (e && t[e] && t.hasOwnProperty(e)) {
                var i = t[e];
                if (i.status >= this.config.STATUS_REQUEST) continue;
                this.createContainer(i),
                this.requestSlotInfo(i)
            }
        },
        requestSlotInfo: function(t) {
            t.paramObj = this.param.getParamObj(t);
            var e = this.param.getParamString(t.paramObj),
            i = this.config.POS_URL + e;
            t.timestampWatcher.t2 = +new Date;
            var n = !1;
            "union" === t.productLine && (n = !0),
            this.sendJsonpRequest(i, n),
            t.status = this.config.STATUS_REQUEST
        },
        createContainer: function(t) {
            if (! (t.status > this.config.STATUS_CREATE)) {
                var e = this.dom.g(t.containerId);
                if (e) return void(t.status = this.config.STATUS_CREATE);
                t.isAsync ? "union" === t.productLine && (t.containerId = "cpro_" + t.slotId) : document.write('<div id="' + t.containerId + '"></div>'),
                t.status = this.config.STATUS_CREATE
            }
        },
        sendJsonpRequest: function(t, e) {
            if (e) {
                var i = document.createElement("script");
                i.type = "text/javascript",
                i.async = !0,
                i.src = t;
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(i, n)
            } else document.write('<script charset="utf-8" src="' + t + '"></script>')
        },
        adInfoIsAvailable: function(t) {
            var e = t.response;
            if (!e) return ! 0;
            var i = e.pdb_deliv,
            n = e.rtb_deliv,
            o = e.order_deliv,
            r = e.pdb_deliv.deliv_des,
            a = (r._html, e.placement.complement_type);
            return 0 === i.deliv_id && 0 === n.deliv_id && 0 === o.deliv_id && 7 == a ? !1 : !0
        }
    }),
    t.define({
        name: "unionDelivery",
        namespace: "dup.business.delivery",
        deps: {
            slot: "dup.business.slot"
        },
        launch: function() {
            var t, e = window.cpro_id;
            window.cpro_id = null,
            e && (t = this.slot.createSlot({
                slotId: e,
                productLine: "union",
                isAsync: !1
            }), this.slot.addSlot(t));
            var i = window.cproArray;
            if (window.cproArray = null, i) for (var n = 0,
            o = i.length; o > n; n++) t = this.slot.createSlot({
                slotId: i[n].id,
                productLine: "union",
                isAsync: !0
            }),
            this.slot.addSlot(t);
            var r = window.cpro_mobile_slot;
            if (window.cpro_mobile_slot = null, r) for (var n = 0,
            o = r.length; o > n; n++) {
                var a = r[n];
                t = this.slot.createSlot({
                    slotId: a.id,
                    productLine: "union",
                    isAsync: !0
                }),
                t.styleOpenApi = t.styleOpenApi || {};
                for (var s in a) s && a[s] && a.hasOwnProperty(s) && (t.styleOpenApi[s] = a[s]);
                this.slot.addSlot(t)
            }
            this.slot.process()
        }
    }),
    t.define({
        name: "viewWatch",
        namespace: "dup.business",
        deps: {
            dom: "dup.common.utility.dom",
            lang: "dup.common.utility.lang",
            style: "dup.common.utility.style",
            browser: "dup.common.utility.browser",
            log: "dup.common.utility.log",
            slot: "dup.business.slot"
        },
        analysisUrl: "",
        maxTime: 72e5,
        STATUS: {
            WAIT: 0,
            LOAD: 1,
            RUN: 2,
            UNLOAD: 3
        },
        clientParam: {},
        focusSwitch: !0,
        watchingList: null,
        intervalId: null,
        intervalTimeSpan: 500,
        isEventInited: !1,
        $viewWatch: function() {
            this.winFocused = !0,
            this.win = window,
            this.intervalStatus = this.STATUS.WAIT
        },
        regisetViewWatch: function(t) {
            this.isEventInited || (this.initializeEvent(), this.isEventInited = !0),
            this.watchingList = this.watchingList || [];
            var e = this.dom.g(t.containerId);
            if (e) {
                var i = t.paramObj,
                n = t.width,
                o = t.height,
                r = "";
                if (t.response) {
                    var a = t.response.placement,
                    s = a.container;
                    n = s.width,
                    o = s.height,
                    r = t.response.queryid
                }
                var l = new Date,
                d = {
                    slotId: t.slotId,
                    domId: t.containerId,
                    jk: r,
                    word: i.ltu,
                    iframeStatus: i.dis,
                    aw: n,
                    ah: o,
                    viewContext: {
                        pageStayTime: 0,
                        pageStayTimeStamp: l,
                        inViewTime: 0,
                        inViewTimeStamp: l,
                        currViewStatus: !1,
                        focusTime: 0,
                        adViewTime: 0,
                        currAdViewStatus: !1,
                        adViewTimeStamp: l
                    }
                };
                this.calculateClientParam(d, e),
                this.watchingList.push(d)
            }
        },
        unregisetViewWatch: function(t) {
            if (this.watchingList) for (var e = t.containerId,
            i = 0; i < this.watchingList.length; i++) {
                var n = this.watchingList[i];
                if (n.domId == e) return void this.watchingList.splice(i, 1)
            }
        },
        buildAnalysisUrl: function(t, e) {
            if (t && e) {
                var i = t + "?",
                n = e.viewContext;
                n.inViewTime > this.maxTime && (n.inViewTime = this.maxTime),
                n.adViewTime > this.maxTime && (n.adViewTime = this.maxTime),
                n.pageStayTime >= this.maxTime && (n.pageStayTime = this.maxTime);
                var o = [];
                return o.push("tu=" + e.slotId),
                o.push("jk=" + e.jk),
                o.push("word=" + e.word),
                o.push("if=" + e.iframeStatus),
                o.push("aw=" + e.aw),
                o.push("ah=" + e.ah),
                o.push("pt=" + n.pageStayTime),
                o.push("it=" + n.inViewTime),
                o.push("vt=" + n.adViewTime),
                o.push("csp=" + e.desktopResolution),
                o.push("bcl=" + e.browserRegion),
                o.push("pof=" + e.pageRegion),
                o.push("top=" + e.top),
                o.push("left=" + e.left),
                i + o.join("&")
            }
        },
        initializeEvent: function() {
            this.windowOnLoadHandler(),
            this.dom.ready(t.proxy(this, this.windowOnLoadDelay), 2e3),
            this.dom.bind(this.win, "beforeunload", t.proxy(this, this.windowOnUnloadHandler))
        },
        calculateClientParam: function(t, e) {
            var i = this.style.getPosition(e);
            t.left = i.left || 0,
            t.top = i.top || 0;
            var n = window.screen.availWidth,
            o = window.screen.availHeight;
            n > 1e4 && (n = 0),
            o > 1e4 && (o = 0),
            t.desktopResolution = n + "," + o,
            t.browserRegion = this.style.getClientWidth(window) + "," + this.style.getClientHeight(window),
            t.pageRegion = this.style.getScrollWidth(window) + "," + this.style.getScrollHeight(window)
        },
        updateViewStatus: function(t, e, i) {
            var n, o, r, a = new Date;
            return n = o = r = this.intervalTimeSpan,
            this.intervalStatus === this.STATUS.LOAD && (this.intervalStatus = this.STATUS.RUN, n = o = 0, r = o = 0),
            t.currViewStatus ? (this.intervalStatus === this.STATUS.LOAD && (n = parseInt(a.getTime() - t.inViewTimeStamp.getTime(), 10), 0 > n ? n = 0 : n > this.intervalTimeSpan && (n = this.intervalTimeSpan)), t.inViewTime += n, t.inViewTimeStamp = a) : e && (t.inViewTimeStamp = a),
            t.currViewStatus = e,
            t.currAdViewStatus ? (this.intervalStatus === this.STATUS.UNLOAD && (r = parseInt(a.getTime() - t.adViewTimeStamp.getTime(), 10), 0 > r ? r = 0 : r > this.intervalTimeSpan && (r = this.intervalTimeSpan)), t.adViewTime += r, t.adViewTimeStamp = a) : i && (t.adViewTimeStamp = a),
            t.currAdViewStatus = i,
            t.pageStayTime = t.pageStayTime || 0,
            this.intervalStatus === this.STATUS.UNLOAD && (this.pageTimeSpan = parseInt(a.getTime() - t.pageStayTimeStamp.getTime(), 10), 0 > o ? o = 0 : o > this.intervalTimeSpan && (o = this.intervalTimeSpan)),
            t.pageStayTime += o,
            this.winFocused && (t.focusTime += o),
            t.pageStayTimeStamp = a,
            t
        },
        computeViewStatus: function(t) {
            var e = t.domId,
            i = this.dom.g(e);
            if (!i) return {
                isInView: !1,
                isAdView: !1
            };
            var n = !1,
            o = !1;
            if (this.winFocused) try {
                var r = this.style.getClientWidth(this.win),
                a = this.style.getClientHeight(this.win),
                s = this.getPosition(i),
                l = this.style.getOuterWidth(i),
                d = this.style.getOuterHeight(i);
                n = s.top >= 0 && s.bottom <= a && s.left >= 0 && s.left <= r;
                var h = s.top > 0 ? s.top: 0,
                c = s.bottom > a ? a: s.bottom,
                u = s.left > 0 ? s.left: 0,
                p = s.right > r ? r: s.right,
                m = l * d;
                if (c > h && p > u) {
                    var f = (c - h) * (p - u);
                    o = f > .5 * m ? !0 : !1
                }
            } catch(g) {}
            return {
                isInView: n,
                isAdView: o
            }
        },
        getPosition: function(t) {
            var e = this.style.getPositionCore(t),
            i = this.style.getScrollLeft(window),
            n = this.style.getScrollTop(window),
            o = this.style.getOuterWidth(t, !1),
            r = this.style.getOuterHeight(t, !1);
            return {
                top: e.top - n,
                bottom: e.top - n + r,
                left: e.left - i,
                right: e.left - i + o,
                topAbs: e.top,
                bottomAbs: e.top + r,
                leftAbs: e.left,
                rightAbs: e.left + o
            }
        },
        viewableCompute: function() {
            if (this.watchingList) {
                var t, e;
                for (t = 0, e = this.watchingList.length; e > t; t++) {
                    var i = this.watchingList[t],
                    n = this.computeViewStatus(i);
                    i.viewContext = this.updateViewStatus(i.viewContext, n.isInView, n.isAdView),
                    i.analysisUrl = this.buildAnalysisUrl(this.analysisUrl, i)
                }
            }
        },
        viewOnChange: function() {
            this.viewableCompute(),
            this.pageStayTime >= this.maxTime && this.windowOnUnloadHandler(!1)
        },
        windowOnLoadHandler: function(e) {
            this.intervalStatus = this.STATUS.LOAD,
            this.registerFocusEvent(this.win),
            (!this.browser.ie || this.browser.ie && this.browser.ie > 6) && this.viewOnChange(),
            this.intervalId = setInterval(t.proxy(this, this.viewOnChange), this.intervalTimeSpan)
        },
        windowOnLoadDelay: function(t) {
            var e, i, n, o, r;
            for (e = 0, i = this.watchingList.length; i > e; e++) n = this.watchingList[e],
            n && (r = n.domId, r && (o = this.win.document.getElementById(r)), o && (n.clientParam = n.clientParam || {},
            this.calculateClientParam(n, o)))
        },
        windowOnUnloadHandler: function(t) {
            try {
                if (clearInterval(this.intervalId), this.intervalStatus !== this.STATUS.RUN) return void(this.intervalStatus = this.STATUS.UNLOAD);
                this.intervalStatus = this.STATUS.UNLOAD,
                this.viewableCompute();
                for (var e = 0,
                i = this.watchingList.length; i > e; e++) {
                    var n = this.watchingList[e];
                    n && n.analysisUrl && !n.isSended && (n.isSended = !0, 0 === e && (n.analysisUrl += "&total=" + this.watchingList.length), this.log.sendLog({
                        url: n.analysisUrl
                    }))
                }
                if (t) {
                    var o, r = 200,
                    a = (new Date).getTime();
                    if (this.browser.ie) for (o = a + r; o > a;) a = (new Date).getTime();
                    else {
                        for (var i = 1e5,
                        e = 0; i > e; e++);
                        o = (new Date).getTime(),
                        i = 1e5 * r / (o - a),
                        i = i > 1e7 ? 1e7: i;
                        for (var e = 0; i > e; e++);
                    }
                }
            } catch(s) {}
        },
        registerFocusEvent: function(e) {
            var e = e || this.win;
            this.winFocused = !0,
            this.browser.ie ? (this.dom.bind(e, "focusin", t.proxy(this, this.allDomOnFocusHandler)), this.dom.bind(e, "focusout", t.proxy(this, this.allDomOnBlurHandler))) : (this.dom.bind(e, "focus", t.proxy(this, this.allDomOnFocusHandler)), this.dom.bind(e, "blur", t.proxy(this, this.allDomOnBlurHandler)))
        },
        allDomOnFocusHandler: function(t) {
            this.winFocused = !0
        },
        allDomOnBlurHandler: function(t) {
            this.winFocused = !1
        }
    }),
    t.define({
        name: "expand",
        namespace: "dup.ui.painter",
        deps: {
            config: "dup.common.config",
            dom: "dup.common.utility.dom",
            style: "dup.common.utility.style",
            event: "dup.common.utility.event",
            slot: "dup.business.slot"
        },
        validate: function(t) {
            return ! 0
        },
        sendMessage: function(t, e) {
            var i = this.slot.getSlotInfo(t),
            n = this.dom.g(i.containerId);
            if (n) {
                var o = n.getElementsByTagName("iframe")[0];
                e = JSON.stringify(e),
                o.contentWindow.postMessage(e, "*")
            }
        },
        getComputedWidth: function(t) {
            return window.getComputedStyle ? window.getComputedStyle(t).width: t.currentStyle.width
        },
        init: function() {
            function t(t) {
                var i = JSON.parse(t.data);
                if (!i.title || "baidudup" != i.title) return ! 1;
                if ("invokeMethod" == i.type) switch (i.method) {
                case "expand":
                    e.expandAd(i.parameters[0]);
                    break;
                case "close":
                    e.collapseAd(i.parameters[0])
                }
            }
            var e = this; (window.addEventListener || window.attachEvent) && JSON && JSON.parse && this.event.bind(window, "message", t),
            this.event.bind(window, "scroll",
            function() {
                e.adjustPosWhenViewportChanged()
            }),
            this.event.bind(window, "resize",
            function() {
                e.adjustPosWhenViewportChanged()
            })
        },
        adjustPosWhenViewportChanged: function() {
            var t = this.scrollObserver;
            t.up,
            t.down,
            t.left,
            t.right;
            for (var e in t) for (var i in t[e]) {
                var n = t[e][i];
                if (!n.isExpand) return;
                var o = n.origin,
                r = o.getElementsByTagName("iframe")[0],
                a = (n.targetWidth, n.targetHeight, n.originWidth);
                n.originHeight;
                switch (e) {
                case "up":
                    var s = parseInt(this.getComputedWidth(o), 10);
                    r.style.left = 0;
                    break;
                case "down":
                    var s = parseInt(this.getComputedWidth(o), 10);
                    r.style.left = 0;
                    break;
                case "left":
                    var s = parseInt(this.getComputedWidth(o));
                    r.style.right = s - a + "px";
                    break;
                case "right":
                    var s = parseInt(this.getComputedWidth(o));
                    r.style.left = 0
                }
            }
        },
        $expand: function() {
            this.observerObjs = [],
            this.expandStatus = {},
            this.timers = {},
            this.hasInit = !1,
            this.maxExpandTime = 5e3,
            this.canFixed = this.style.canFixed(),
            this.scrollObserver = {
                up: {},
                down: {},
                left: {},
                right: {}
            }
        },
        registerScrollSubject: function(t, e, i, n, o, r, a) {
            if (!this.scrollObserver[t][e]) {
                var s = this.scrollObserver[t][e] = {};
                s.isExpand = !0,
                s.origin = i,
                s.originWidth = n,
                s.originHeight = o,
                s.targetWidth = r,
                s.targetHeight = a
            }
        },
        expand2Up: function(t, e, i, n, o, r) {
            this.registerScrollSubject("up", t, e, i, n, o, r);
            var a = e.getElementsByTagName("iframe")[0];
            parseInt(this.getComputedWidth(e));
            a.style.bottom = 0,
            a.style.left = 0
        },
        expand2Down: function(t, e, i, n, o, r) {
            this.registerScrollSubject("down", t, e, i, n, o, r);
            var a = e.getElementsByTagName("iframe")[0];
            parseInt(this.getComputedWidth(e));
            a.style.top = 0,
            a.style.left = 0
        },
        expand2Left: function(t, e, i, n, o, r) {
            this.registerScrollSubject("left", t, e, i, n, o, r);
            var a = e.getElementsByTagName("iframe")[0],
            s = parseInt(this.getComputedWidth(e));
            a.style.bottom = 0,
            a.style.right = s - i + "px"
        },
        expand2Right: function(t, e, i, n, o, r) {
            this.registerScrollSubject("right", t, e, i, n, o, r);
            var a = e.getElementsByTagName("iframe")[0];
            parseInt(this.getComputedWidth(e));
            a.style.bottom = 0,
            a.style.left = 0
        },
        expandAd: function(t) {
            if (!this.expandStatus[t]) {
                this.expandStatus[t] = !0;
                var e = this.slot.getSlotInfoByRawId(t),
                i = e.response.placement.container,
                n = i.width,
                o = i.height,
                r = e.response.placement.container.slide,
                a = r.slideWidth,
                s = r.slideHeight,
                l = 1e3 * parseInt(r.extendTime, 10),
                d = parseInt(r.slideMode, 10),
                h = parseInt(r.direction, 10),
                c = e.containerId,
                u = this.dom.g(c),
                p = u.getElementsByTagName("iframe")[0];
                if (1 === h || 2 === h ? (p.setAttribute("height", s), p.style.height = s + "px") : (3 === h || 4 === h) && (p.setAttribute("width", a), p.style.width = a + "px"), 2 == d && 2 == h || 2 == d && 4 == h) switch (h) {
                case 2:
                    p.setAttribute("height", s),
                    p.style.height = s + "px";
                    break;
                case 4:
                    p.setAttribute("width", a),
                    p.style.width = a + "px"
                } else switch (u.style.position = "relative", p.style.position = "absolute", u.style.height = o + "px", h) {
                case 1:
                    this.expand2Up(t, u, n, o, a, s);
                    break;
                case 2:
                    this.expand2Down(t, u, n, o, a, s);
                    break;
                case 3:
                    this.expand2Left(t, u, n, o, a, s);
                    break;
                case 4:
                    this.expand2Right(t, u, n, o, a, s)
                }
                var m = this;
                this.timers[t] = setTimeout(function() {
                    m.expandStatus[t] && m.collapseAd(t)
                },
                Math.min(l))
            }
        },
        collapseAd: function(t) {
            if (this.expandStatus[t]) {
                this.expandStatus[t] = !1,
                clearTimeout(this.timers[t]);
                var e = this.slot.getSlotInfoByRawId(t),
                i = e.response.placement.container,
                n = i.width,
                o = i.height,
                r = e.containerId,
                a = this.dom.g(r),
                s = a.getElementsByTagName("iframe")[0];
                a.style.position = "",
                a.style.width = "",
                a.style.height = "",
                a.style.top = "",
                a.style.left = "",
                s.style.position = "",
                s.style.display = "",
                s.style.top = "",
                s.style.left = "",
                s.style.right = "",
                s.style.width = "",
                s.style.height = "",
                s.setAttribute("height", o),
                s.setAttribute("width", n);
                for (var l in this.scrollObserver) for (var d in this.scrollObserver[l]) d == t && (this.scrollObserver[l][d].isExpand = !1)
            }
        },
        observer: function(t) {
            var t = this.slot.getSlotInfoByRawId(t.slotId),
            e = t.response.placement.container.slide,
            i = t.containerId,
            n = this.dom.g(i);
            e.slideMode,
            e.direction;
            n.style.textAlign = "left",
            this.hasInit || (this.hasInit = !0, this.init())
        },
        fire: function(t, e) {
            var i, n = function(t) {
                return "[object Array]" == Object.prototype.toString.call(t) ? !0 : !1
            },
            o = this.slot.getSlotInfoByRawId(e),
            r = o.response.placement.container.slide;
            r && (i = r.trigger);
            var a = n(i) ? i[0] : i ? i: 0,
            s = ["", "BEFORE_PAGELOAD", "AFTER_PAGECLOSE", "PAGE_PERCENT", "mouseover", "click", "adloaded", "SLIP"];
            s[a] === t && this.sendMessage(e, {
                title: "baidudup",
                type: "eventHappen",
                parameters: [t]
            })
        }
    }),
    t.define({
        name: "frame",
        namespace: "dup.business",
        deps: {
            config: "dup.common.config",
            slot: "dup.business.slot",
            material: "dup.business.material",
            requestCache: "dup.business.requestCache",
            param: "dup.business.param",
            lang: "dup.common.utility.lang",
            data: "dup.common.utility.data",
            richMaterial: "dup.ui.painter.richMaterial",
            viewWatch: "dup.business.viewWatch"
        },
        checkRichAdType: function(t) {
            for (var e = "",
            i = ["dui-lian", "popup", "right-down", "slide", "top-down", "barrier"], n = 0; n < i.length; n++) if (t.indexOf(i[n]) > -1) {
                e = i[n];
                break
            }
            return e
        },
        cacheRequestCallback: function(t) {
            var e = t.html || "success";
            if ("success" !== e) {
                var i = this.requestCache.get(t.dpv),
                n = i.response.pdb_deliv.deliv_des;
                n = n._html;
                var o = i.response,
                r = o.pdb_deliv,
                a = o.rtb_deliv,
                s = o.order_deliv;
                if (0 === r.deliv_id && (0 != s.deliv_id || 0 != a.deliv_id) && "success" != e && 7 == o.placement.complement_type) {
                    var l = document.getElementById(i.containerId),
                    d = document.getElementById(i.containerId + "_left"),
                    h = document.getElementById(i.containerId + "_right");
                    return l && (this.viewWatch.unregisetViewWatch(i), l.parentNode.removeChild(l)),
                    d && d.parentNode.removeChild(d),
                    h && h.parentNode.removeChild(h),
                    !1
                }
                if (i) if (n.type && "rich" === n.type) {
                    var c = this.material.formatMaterial(n, i),
                    u = document.getElementById(i.containerId),
                    p = "<!DOCTYPE html><body>";
                    c.indexOf(p) > -1 && (c = c.slice(p.length));
                    var m = this.checkRichAdType(c);
                    if ("popup" === m) u.style.display = "none";
                    else if ("barrier" === m) {
                        u.style.display = "none";
                        var f = document.getElementById(i.containerId + "_placeholder");
                        f && (f.style.display = "none")
                    }
                    this.richMaterial.render(i, !0)
                } else {
                    var g = this.requestCache.secondResult[t.dpv];
                    this.renderFrame(i.id, g)
                }
            }
        },
        requireDomainPolicy: function() {
            function t(t) {
                try {
                    return ! t.contentWindow.document
                } catch(e) {
                    return ! 0
                }
            }
            var e = document.createElement("iframe"),
            i = !1;
            return e.src = "about:blank",
            document.body.insertBefore(e, document.body.firstChild),
            i = t(e),
            document.body.removeChild(e),
            this.requireDomainPolicy = function() {
                return i
            },
            i
        },
        requireBlankPolicy: function() {
            var t = navigator.userAgent,
            e = t && t.match(/iphone.*micromessenger/i) ? !0 : !1;
            return this.requireBlankPolicy = function() {
                return e
            },
            e
        },
        renderFrame: function(t, e) {
            if (! (!e || e && e.name)) {
                e.name = t + "_rendered";
                var i = this.slot.getSlotInfo(t);
                if (i) {
                    var n = i.response.pdb_deliv.deliv_des;
                    n = n._html;
                    var o = this.getFrameUrl();
                    if (this.requireDomainPolicy() && e.getAttribute("src", 2) !== o) return void(e.src = o);
                    if (n && "url" === n.type) return void(e.src = n.content);
                    try {
                        this.slot.setStatus(t, this.config.STATUS_FINISH);
                        var r = this.material.formatMaterial(n, i);
                        r.indexOf("<body>") < 0 && (r = "<!DOCTYPE html><body>" + r);
                        var a = e.cloneNode(!0);
                        a.onload = null,
                        a.src = "about:blank",
                        e.parentNode.replaceChild(a, e),
                        e = a;
                        var s = e.contentWindow.document;
                        s.open("text/html", "replace"),
                        s.write(r),
                        s.close(),
                        s.body && (s.body.style.backgroundColor = "transparent")
                    } catch(l) {}
                }
            }
        },
        getFrameUrl: function() {
            if (this.requireDomainPolicy()) {
                return this.data.getConfig("domainPolicyFileUrl") || "/domain-policy.htm"
            } else {
                return "www.adxdata.com"
            }
            //return this.requireDomainPolicy() ? this.data.getConfig("domainPolicyFileUrl") || "/domain-policy.htm": this.requireBlankPolicy() ? this.data.getConfig("blankPolicyFileUrl") || "/blank-policy.htm": "about:blank"
        },
        getFrameHTML: function(e, i) {
            var n = ["<iframe", ' id="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0; vertical-align:bottom;margin:0;"', ' allowtransparency="true">', "</iframe>"].join("");
            i = i || "iframe" + e.id,
            e.iframeId = i;
            var o, r = !1,
            a = !1,
            s = "",
            l = e.width || 0,
            d = e.height || 0;
            if (e.response) {
                var h = e.response.placement,
                c = h.container,
                u = (e.response.pdb_deliv, e.response.rtb_deliv),
                p = e.response.order_deliv;
                r = !(u.deliv_id || u.demand_id || p.deliv_id || p.demand_id),
                a = 0 !== u.deliv_id || p.deliv_id,
                l = l || c.width,
                d = d || c.height
            }
            if (r) {
                var m = this.config.DUP_PREFIX + "renderFrame";
                this.data.defineOnce(m, t.proxy(this, this.renderFrame)),
                o = this.getFrameUrl(),
                s = 'onload="' + m + "('" + e.id + "', this);\""
            } else if (a) {
                var f = this.config.DUP_PREFIX + "cacheRequest",
                g = "adsbybaidu_callback";
                this.data.defineOnce(g, t.proxy(this, this.cacheRequestCallback)),
                this.data.defineOnce(f, t.proxy(this.requestCache, this.requestCache.cacheRequest)),
                o = this.param.getPmpRequestUrl(e),
                s = 'onload="' + f + "('" + e.paramObj.dpv + "', this);\""
            } else o = this.param.getPmpRequestUrl(e);
            var y = {
                iframeId: i,
                srcAttriName: "src",
                onloadDefine: s,
                iframeWidth: e.width || c.width,
                iframeHeight: e.height || c.height,
                url: o
            };
            return this.lang.template(n, y)
        }
    }),
    t.define({
        name: "dynamicFloat",
        namespace: "dup.ui.painter",
        deps: {
            config: "dup.common.config",
            dom: "dup.common.utility.dom",
            slot: "dup.business.slot",
            frame: "dup.business.frame",
            decorator: "dup.ui.painter.dynamicFloatDecorator",
            viewWatch: "dup.business.viewWatch",
            richMaterial: "dup.ui.painter.richMaterial",
            monitor: "dup.business.monitor"
        },
        validate: function(t) {
            return ! 0
        },
        render: function(t) {
            if (t.status = this.config.STATUS_RENDERED, this.validate(t)) {
                if (!this.slot.adInfoIsAvailable(t)) return ! 1;
                this.monitor.sendLog(t);
                var e = this.richMaterial.render(t);
                if (e) return void this.slot.setStatus(t.id, this.config.STATUS_FINISH);
                var i = t.response.placement,
                n = i.container,
                o = this.dom.g(t.containerId);
                if (o) {
                    var r = this.frame.getFrameHTML(t);
                    o.innerHTML = r,
                    this.decorator.decorate(o, t.width || n.width, t.height || n.height),
                    this.viewWatch.regisetViewWatch(t),
                    this.slot.setStatus(t.id, this.config.STATUS_FINISH)
                }
            }
        }
    }),
    t.define({
        name: "floatBlock",
        namespace: "dup.ui.painter",
        deps: {
            style: "dup.common.utility.style",
            log: "dup.common.utility.log",
            dom: "dup.common.utility.dom",
            lang: "dup.common.utility.lang",
            cookie: "dup.common.utility.cookie",
            unicode: "dup.common.utility.unicode",
            frame: "dup.business.frame"
        },
        GAP: 5,
        NORMAL_CLOSE_BTN_HEIGHT: 17,
        COUPLET_CLOSE_BTN_HEIGHT: 20,
        validate: function(t) {
            var e = this.getCloseCookieName(t);
            return 2 === t.closeType && this.cookie.get(e) ? !1 : !0
        },
        createBlockHtmlTemplate: function(t) {
            var e = ["{iframe}", "{closeBtn}"].join("");
            if (!t.blockType || "default" === t.blockType) return e;
            var i = ["width:{width}px;", "height:{height}px;", "padding:4px;", "border:#acacac 1px solid;", "overflow:hidden;"];
            return ("button" === t.blockType || "popup" === t.blockType) && i.push("position:absolute;left:0;top:" + (this.COUPLET_CLOSE_BTN_HEIGHT + this.GAP) + "px;"),
            e = ['<div style="' + i.join("") + '">', "{iframe}", "</div>", "{closeBtn}"].join("")
        },
        createCloseElement: function(t) {
            var e = {},
            i = "\\u5FAE\\u8F6F\\u96C5\\u9ED1",
            n = "\\u5173\\u95ED",
            o = t.domId + "_closebtn",
            r = this;
            return e.couplet = function() {
                var e = ["position:absolute;", "width:" + t.containerWidth + "px;", "height:20px;", "top:" + (t.containerHeight - this.COUPLET_CLOSE_BTN_HEIGHT) + "px;", "left:0;", "cursor:pointer;", "background-color:#999999;", "color:#fff;font-size:12px;", "font-family: " + r.unicode.toDecode(i) + ";", "text-align:center;line-height:20px;"].join(""),
                a = '<div id="' + o + '" style="' + e + '">' + r.unicode.toDecode(n) + "</div>";
                return a
            },
            e.button = e.popup = function() {
                var e = 61,
                i = t.containerWidth - e,
                n = "\\u5FAE\\u8F6F\\u96C5\\u9ED1",
                a = "\\u5173\\u95ED",
                s = ["position:absolute;width:" + e + "px;", "height:20px;top:0;", "left:" + i + "px;", "margin:0;padding:0;margin-bottom:5px;", "cursor:pointer;overflow:hidden;"].join(""),
                l = ['<div id="' + o + '" style="' + s + '">', '<div style="', "width:40px;height:20px;", "background-color:#999999;", "color:#fff;float:left;", "margin-right:1px;font-size:12px;", "font-family:" + r.unicode.toDecode(n) + ";", "text-align: center;line-height:20px;", '">' + r.unicode.toDecode(a) + "</div>", '<a style="maring:0;padding:0;', "display:inline-block;border:none;", "overflow:hidden;height:20px;", "line-height:20px;cursor:pointer;", "width:20px;background:url(", "'http://test.adt.com/", "ad/xuanfu_close.png", "') no-repeat 0 0;margin-bottom:3px;", 'float:left" ></a>', "</div>"].join("");
                return l
            },
            e["default"] = function() {
                var e = "http://test.adt.com/ad/close.gif",
                i = ["height:15px;", "border:1px solid #e1e1e1;", "background:#f0f0f0;", "margin:0;", "padding:0;", "overflow:hidden;"].join(""),
                n = ["float:right;", "clear:right;", "margin:2px 5px 0 0;", "width:39px;", "height:13px;", "cursor:pointer;", "background:url(" + e + ") no-repeat scroll 0 0;"].join(""),
                o = ['<div style="' + i + '">', '<span id="' + t.domId + '_closebtn" style="' + n + '" ', "onmouseover=\"this.style.backgroundPosition='0 -20px';\" ", "onmouseout=\"this.style.backgroundPosition='0 0';\" ", ">", "</span>", "</div>"].join("");
                return o
            },
            e[t.blockType]()
        },
        getVerticalStyle: function(t) {
            var e = t.vSpace || 10;
            "center" === t.verticalType && (e = .5 * (this.style.getClientHeight() - t.containerHeight));
            var i = t.verticalType;
            return i && "center" !== i || (i = "top"),
            {
                cssName: i,
                cssValue: e
            }
        },
        getHorizontalStyle: function(t) {
            var e = t.hSpace || 10;
            if (t.contentWidth > 0 && 1 === t.dockType) {
                var i = Math.floor(.5 * (this.style.getClientWidth() - t.contentWidth));
                i >= t.width && (e = "right" === t.horizontalType ? i - t.containerWidth - e: i - t.containerWidth - e)
            } else "center" === t.horizontalType && (e = .5 * (this.style.getClientWidth() - t.containerWidth));
            var n = t.horizontalType;
            return n && "center" !== n || (n = "left"),
            {
                cssName: n,
                cssValue: e
            }
        },
        createContainerElementByInfo: function(t) {
            var e = null;
            this.dom.g(t.domId) ? e = this.dom.g(t.domId) : (e = document.createElement("div"), e.id = t.domId);
            var i = e.style;
            if (i.width = t.containerWidth + "px", i.height = t.containerHeight + "px", i.overflow = "hidden", i.zIndex = 2147483647, 1 === t.followType) if (this.style.canFixed()) {
                i.position = "fixed";
                var n = this.getVerticalStyle(t),
                o = this.getHorizontalStyle(t);
                i[n.cssName] = n.cssValue + "px",
                i[o.cssName] = o.cssValue + "px"
            } else {
                i.position = "absolute",
                this.updatePosition(t, e);
                var r = this;
                this.dom.bind(window, "scroll",
                function() {
                    r.updatePosition(t, t.domId)
                }),
                this.dom.bind(window, "resize",
                function() {
                    r.updatePosition(t, t.domId)
                })
            } else {
                i.position = "absolute";
                var n = this.getVerticalStyle(t),
                o = this.getHorizontalStyle(t);
                i[n.cssName] = n.cssValue + "px",
                i[o.cssName] = o.cssValue + "px"
            }
            return e
        },
        updatePosition: function(t, e) {
            var i = this.dom.g(e);
            if (i) {
                var n = i.style,
                o = "CSS1Compat" !== document.compatMode,
                r = o ? document.body: document.documentElement,
                a = r.clientWidth,
                s = r.clientHeight,
                l = window.pageXOffset || r.scrollLeft,
                d = window.pageYOffset || r.scrollTop,
                h = t.contentWidth > 0 && 1 === t.dockType;
                "top" === t.verticalType || 0 === t.verticalType.length ? n.top = d + t.vSpace + "px": n.top = d + s - t.vSpace - t.containerHeight + "px";
                var c = Math.floor(.5 * (this.style.getClientWidth() - t.contentWidth));
                "left" === t.horizontalType || 0 === t.horizontalType ? h ? n.left = l + c - t.hSpace - t.containerWidth + "px": n.left = l + t.hSpace + "px": h ? n.left = l + c + t.contentWidth + t.hSpace + "px": n.left = l + a - t.hSpace - t.containerWidth + "px"
            }
        },
        getCloseCookieName: function(t) {
            var e = "bd_close_" + t.id;
            return ("couplet" === t.blockType || "button" === t.blockType) && (e += "_" + t.horizontalType),
            e
        },
        registEvent: function(e) {
            var i = e.domId + "_closebtn",
            n = this.dom.g(i);
            this.dom.bind(n, "click", t.proxy(this, this.closeBtnOnClickHandler)),
            this.dom.bind(n, "mouseover", t.proxy(this, this.closeBtnOnMouseOverHandler)),
            this.dom.bind(n, "mouseout", t.proxy(this, this.closeBtnOnMouseOutHandler))
        },
        closeBtnOnClickHandler: function() {
            var t = document.getElementById(this.info.domId);
            if (t && t.parentNode && t.parentNode.removeChild(t), 2 === this.info.closeType) {
                var e = this.getCloseCookieName(this.info),
                i = new Date;
                i.setTime(i.getTime() + 9e5),
                this.cookie.set(e, !0, {
                    expires: i,
                    path: "/"
                })
            }
            var n = "http://test.adt.com/fcb.jpg?jk={jk}&dt={dt}&rnd={rnd}",
            o = {
                jk: this.info.queryId || "",
                dt: (new Date).getTime(),
                rnd: Math.floor(2147483648 * Math.random())
            };
            try {
                this.log.loadImage(this.lang.template(n, o))
            } catch(r) {}
        },
        closeBtnOnMouseOverHandler: function(t) {
            var e = this.info.domId + "_closebtn",
            i = this.dom.g(e);
            if (i) if ("couplet" === this.info.blockType) i.style.backgroundColor = "#0066cc";
            else {
                var n = i.getElementsByTagName("div")[0];
                n.style.backgroundColor = "#0066cc";
                var o = i.getElementsByTagName("a")[0];
                o.style.backgroundImage = "url(http://test.adt.com/ad/xuanfu_mouseover_close.png)"
            }
        },
        closeBtnOnMouseOutHandler: function(t) {
            var e = this.info.domId + "_closebtn",
            i = this.dom.g(e);
            if (i) if ("couplet" === this.info.blockType) i.style.backgroundColor = "#999999";
            else {
                var n = i.getElementsByTagName("div")[0];
                n.style.backgroundColor = "#999999";
                var o = i.getElementsByTagName("a")[0];
                o.style.backgroundImage = "url(http://test.adt.com/ad/xuanfu_close.png)"
            }
        },
        autoClose: function() {
            var t = document.getElementById(this.adInfo.domId);
            t && t.parentNode && t.parentNode.removeChild(t)
        },
        render: function(e, i) {
            if (this.validate(e)) {
                this.info = e;
                var n = this.createCloseElement(e),
                o = this.createBlockHtmlTemplate(e),
                r = {
                    width: e.width,
                    height: e.height,
                    iframe: this.frame.getFrameHTML(i, e.domId + "_iframe"),
                    closeBtn: n
                },
                a = this.createContainerElementByInfo(e);
                a.innerHTML = this.lang.template(o, r),
                this.dom.g(e.domId) || document.body.insertBefore(a, document.body.firstChild),
                this.registEvent(e);
                var s = e.closeTime || 0;
                s > 0 && setTimeout(t.proxy(this, this.autoClose), 1e3 * s)
            }
        }
    }),
    t.define({
        name: "inlayFix",
        namespace: "dup.ui.painter.mobile",
        deps: {
            config: "dup.common.config",
            lang: "dup.common.utility.lang",
            style: "dup.common.utility.style",
            dom: "dup.common.utility.dom",
            slot: "dup.business.slot",
            param: "dup.business.param",
            monitor: "dup.business.monitor",
            frame: "dup.business.frame",
            landingPage: "dup.ui.painter.landingPage"
        },
        $inlayFix: function() {
            this.win = window
        },
        processSlotInfo: function(t) {
            var e = {},
            i = t.response.placement,
            n = i.container,
            o = (i.fillstyle, n.sizeType),
            r = n.width,
            a = n.height;
            if (t.styleOpenApi.scale) {
                o = 2;
                var s = t.styleOpenApi.scale,
                l = s.split(".");
                r = l[0],
                a = l[1]
            }
            if (2 === o) {
                e.wScale = r,
                e.hScale = a;
                var d = 0,
                h = t.styleOpenApi.cpro_ftpc || "true" === t.styleOpenApi.cpro_ftpc ? !0 : !1,
                c = this.dom.g(t.containerId);
                h && c && c.parentElement.clientWidth && (d = c.parentElement.clientWidth || 0);
                var u = this.param.translateScaleToPixelSize(e.wScale, e.hScale, d);
                n.width = u.width,
                n.height = u.height,
                t.width = u.width,
                t.height = u.height,
                e.width = u.width,
                e.height = u.height
            } else e.width = r,
            e.height = a;
            var p = t.styleOpenApi,
            m = p.cpro_w || p.rsi0 || 0,
            f = p.cpro_h || p.rsi1 || 0;
            return (m || f) && (e.width = m || this.getCurViewportWidth(r), e.height = f || a),
            e
        },
        getCurViewportWidth: function(t) {
            var e = this.isUnionPreview ? t: Math.max(320, this.win.innerWidth);
            return isNaN && isNaN(e) && (e = this.style.getClientWidth()),
            e
        },
        parseHtmlSnippet: function(t) {
            var e = ['<div style="width:{width}px;height:{height}px;position:relative;margin:0 auto;">', "{closeBtnHtml}", "{iframeHtml}", "</div>"].join("");
            return this.lang.template(e, t)
        },
        decorateContainer: function(t, e) {
            if (t) {
                var i = t.style;
                i.cssText = ["text-align:center;", "display:block;", "font-size:0;", "width:100%;", "height:" + e.height + "px;"].join("")
            }
        },
        validate: function(t) {
            return ! 0
        },
        render: function(t) {
            if (t.status = this.config.STATUS_RENDERED, this.validate(t)) {
                if (!this.slot.adInfoIsAvailable(t)) return ! 1;
                this.monitor.sendLog(t);
                var e = this.dom.g(t.containerId);
                if (e) {
                    this.monitor.sendLog(t),
                    this.landingPage.activate(t);
                    var i = this.processSlotInfo(t);
                    this.decorateContainer(e, i),
                    t.width = i.width,
                    t.height = i.height;
                    var n = {
                        id: t.id,
                        width: i.width,
                        height: i.height,
                        closeBtnHtml: "",
                        iframeHtml: this.frame.getFrameHTML(t)
                    },
                    o = this.parseHtmlSnippet(n);
                    e.innerHTML = o,
                    this.slot.setStatus(t.id, this.config.STATUS_FINISH)
                }
            }
        }
    }),
    t.define({
        name: "float",
        namespace: "dup.ui.painter.mobile",
        deps: {
            config: "dup.common.config",
            lang: "dup.common.utility.lang",
            style: "dup.common.utility.style",
            dom: "dup.common.utility.dom",
            cookie: "dup.common.utility.cookie",
            slot: "dup.business.slot",
            frame: "dup.business.frame",
            monitor: "dup.business.monitor",
            painter: "dup.ui.painter.mobile.inlayFix",
            hiddenFloatAd: "dup.ui.painter.hiddenFloatAd"
        },
        $inlayFix: function() {
            this.win = window
        },
        processSlotInfo: function(t) {
            var e = t.response.placement,
            i = e.container,
            n = e.fillstyle,
            o = parseFloat(n.opacity || .9),
            r = n.backgroundColor || "#000",
            a = this.painter.processSlotInfo(t);
            a.backgroundOpacity = o,
            a.backgroundColor = r;
            var s = i.location;
            return 2 !== s && 3 !== s && (s = 3),
            a.locationType = s,
            a.containerId = t.containerId,
            a.closeType = i.closeType,
            a
        },
        parseHtmlSnippet: function(t) {
            var e = ['<div style="width:{width}px;height:{height}px;position:relative;margin:0 auto;">', "{closeBtnHtml}", "{iframeHtml}", "</div>"].join("");
            return this.lang.template(e, t)
        },
        parseCloseBtnLayoutData: function(t) {
            var e = 40,
            i = 40,
            n = 0,
            o = "",
            r = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            e = r * (1 / 8),
            i = .4 * e,
            n = 16 * (e / 50);
            var a = 0;
            2 === t.locationType ? (o = 4, a = t.height) : 3 === t.locationType && (o = 3, a = "-" + i);
            var s = {
                domId: t.containerId,
                right: n,
                top: a,
                closeBtnWidth: "" + e,
                closeBtnHeight: i,
                closeBtnImgUrl: "http://test.adt.com/ad/xuantingClose" + o + ".png"
            };
            return s
        },
        parseCloseButtonHtml: function(t) {
            var e = ["<div", ' id="{domId}_closebtn"', ' style="', "position:absolute;", "right:{right}px;", "top:{top}px;", "width:{closeBtnWidth}px;", "height:{closeBtnHeight}px;", "overflow:hidden;", "display:block;", "background:url('{closeBtnImgUrl}') no-repeat 0 0;", "_filter:progid:DXImageTransform.", "Microsoft.AlphaImageLoader(", "enabled=true,", " sizingMethod=none,", " src='{closeBtnImgUrl}');", "_background:none;", "cursor:pointer;", "background-position:center;", "background-size:100% 100%;", 'z-index:2147483647;">&nbsp;</div>'].join(""),
            i = this.parseCloseBtnLayoutData(t);
            return this.lang.template(e, i)
        },
        decorateContainer: function(t, e) {
            if (t) {
                var i = "absolute";
                this.style.canFixed() && (i = "fixed");
                var n = "";
                2 === e.locationType ? n = "top": 3 === e.locationType && (n = "bottom");
                var o = 0;
                "absolute" === i && (o = this.style.getScrollTop(window) + this.style.getClientHeight(window) - e.height);
                var r = t.style;
                r.cssText = ["position:" + i, "z-index:2147483647;", n + ":" + o, "background-color:" + e.backgroundColor, "opacity:" + e.backgroundOpacity, "text-align:center", "display:block", "font-size:0", "width:100%", "height:" + e.height + "px"].join(";")
            }
        },
        getCloseCookieKey: function(t) {
            return "bd_close_" + t.id
        },
        closeBtnOnClickHandler: function() {
            var t = this.dom.g(this.domId);
            if (t && t.parentNode && t.parentNode.removeChild(t), 2 === this.closeType) {
                var e = "bd_close_" + this.id,
                i = {
                    path: ""
                };
                this.cookie.set(e, !0, i)
            }
        },
        validate: function(t) {
            var e = "bd_close_" + this.id,
            i = this.cookie.get(e, window);
            return 2 === t.closeType && i ? !1 : !0
        },
        render: function(e) {
            if (!this.slot.adInfoIsAvailable(e)) return ! 1;
            e.status = this.config.STATUS_RENDERED,
            this.id = e.id;
            var i = this.processSlotInfo(e);
            if (this.validate(i)) {
                this.monitor.sendLog(e);
                var n = this.dom.g(e.containerId);
                if (n) {
                    this.decorateContainer(n, i),
                    e.width = i.width,
                    e.height = i.height,
                    this.domId = i.containerId,
                    this.closeType = i.closeType;
                    var o = this.parseCloseButtonHtml(i),
                    r = {
                        id: e.id,
                        width: i.width,
                        height: i.height,
                        closeBtnHtml: o,
                        iframeHtml: this.frame.getFrameHTML(e)
                    },
                    a = this.parseHtmlSnippet(r);
                    document.body.insertBefore(n, document.body.firstChild),
                    n.innerHTML = a;
                    var s = this.dom.g(this.domId + "_closebtn");
                    s && this.dom.bind(s, "click", t.proxy(this, this.closeBtnOnClickHandler)),
                    this.hiddenFloatAd.activate(e),
                    this.slot.setStatus(e.id, this.config.STATUS_FINISH)
                }
            }
        }
    }),
    t.define({
        name: "inlayFix",
        namespace: "dup.ui.painter",
        deps: {
            config: "dup.common.config",
            dom: "dup.common.utility.dom",
            slot: "dup.business.slot",
            frame: "dup.business.frame",
            viewWatch: "dup.business.viewWatch",
            richMaterial: "dup.ui.painter.richMaterial",
            monitor: "dup.business.monitor",
            expand: "dup.ui.painter.expand",
            event: "dup.common.utility.event",
            lang: "dup.common.utility.lang",
            browser: "dup.common.utility.browser"
        },
        $inlayFix: function() {
            this.supportPostMessage = this.browser.ie && this.browser.ie < 8 ? !1 : !0
        },
        bindEvent4Expand: function(t) {
            var e = this.dom.g(t.containerId),
            i = this;
            this.event.bind(e, "mouseover",
            function(e) {
                var n = e.target || e.srcElement; ("iframe" === n.tagName.toLowerCase() || "iframe" === n.nodeName.toLowerCase()) && i.expand.fire("mouseover", t.id)
            })
        },
        validate: function(t) {
            return ! 0
        },
        render: function(t) {
            t.status = this.config.STATUS_RENDERED;
            var e = this.dom.g(t.containerId);
            if (!this.slot.adInfoIsAvailable(t)) return ! 1;
            var i = null == t.response ? null: t.response.placement.container.slide,
            n = i && !this.lang.isEmptyObj(i) && this.supportPostMessage ? !0 : !1;
            if (n && (this.expand.observer(t), this.bindEvent4Expand(t)), this.validate(t)) {
                this.monitor.sendLog(t);
                var o = this.richMaterial.render(t),
                r = this;
                if (o) return this.slot.setStatus(t.id, this.config.STATUS_FINISH),
                void(this.supportPostMessage && setTimeout(function() {
                    r.expand.fire("adloaded", t.id)
                },
                800));
                if (e) {
                    var a = this.frame.getFrameHTML(t);
                    e.innerHTML = a,
                    this.viewWatch.regisetViewWatch(t),
                    this.slot.setStatus(t.id, this.config.STATUS_FINISH),
                    n && setTimeout(function() {
                        r.expand.fire("adloaded", t.id)
                    },
                    800)
                }
            }
        }
    }),
    t.define({
        name: "float",
        namespace: "dup.ui.painter",
        deps: {
            config: "dup.common.config",
            dom: "dup.common.utility.dom",
            lang: "dup.common.utility.lang",
            frame: "dup.business.frame",
            slot: "dup.business.slot",
            richMaterial: "dup.ui.painter.richMaterial",
            monitor: "dup.business.monitor",
            floatBlock: "dup.ui.painter.floatBlock",
            viewWatch: "dup.business.viewWatch"
        },
        GAP: 5,
        NORMAL_CLOSE_BTN_HEIGHT: 17,
        COUPLET_CLOSE_BTN_HEIGHT: 20,
        validate: function(t) {
            var e = t.response.placement,
            i = e.container,
            n = i.floated;
            if (this.dom.isInIframe(window)) return ! 1;
            var o = parseInt(n.clientw || 0, 10);
            return o > 4095 && (o = 4095),
            o >= screen.width ? !1 : !0
        },
        processSlotInfo: function(e) {
            var i = [],
            n = e.response.placement,
            o = n.container,
            r = o.floated,
            a = r.dockType,
            s = o.closeType,
            l = o.closeTime || 0,
            d = r.vspace || 0,
            h = r.hspace || 0,
            c = e.response.rtb_deliv.deliv_id && e.response.order_deliv.deliv_id,
            u = e.width || o.width,
            p = e.height || o.height,
            m = +u,
            f = +p,
            g = ["default", "couplet", "button", "popup"],
            y = parseInt(r.blockType || 0, 10),
            v = g[y];
            "default" !== v && (m += 2 * this.GAP + 1, f += 2 * this.GAP + 1),
            f += "couplet" === v ? this.COUPLET_CLOSE_BTN_HEIGHT: "button" === v || "popup" === v ? this.COUPLET_CLOSE_BTN_HEIGHT + this.GAP: this.NORMAL_CLOSE_BTN_HEIGHT;
            var w = o.location,
            b = "",
            I = "";
            switch (w) {
            case 1:
                b = "center",
                I = "center";
                break;
            case 2:
                b = "top";
                break;
            case 3:
                b = "bottom";
                break;
            case 4:
                I = "left";
                break;
            case 5:
                I = "right";
                break;
            case 7:
                b = "top",
                I = "left";
                break;
            case 8:
                b = "top",
                I = "right";
                break;
            case 9:
                b = "bottom",
                I = "left";
                break;
            case 10:
                b = "bottom",
                I = "right"
            }
            0 === d && "button" === v ? (b = "bottom", d = 40) : 0 === d && "couplet" === v && (b = "top", d = 150);
            var T = e.response.queryid,
            S = {
                id: e.id,
                domId: e.containerId,
                width: u,
                height: p,
                containerWidth: m,
                containerHeight: f,
                verticalType: b,
                horizontalType: I,
                followType: r.follow || 1,
                blockType: v,
                dockType: a,
                closeType: s,
                closeTime: l,
                vSpace: d,
                hSpace: h,
                contentWidth: r.contw,
                isRTB: c,
                queryId: T
            };
            if (i.push(S), 6 === w) {
                S.horizontalType = "left",
                S.domId = e.containerId + "_left";
                var x = t.fastClone(S);
                x.horizontalType = "right",
                x.domId = e.containerId + "_right",
                i.push(x)
            }
            return i
        },
        render: function(e) {
            if (this.validate(e)) {
                if (!this.slot.adInfoIsAvailable(e)) return ! 1;
                this.monitor.sendLog(e);
                var i = this.richMaterial.render(e);
                if (i) return void this.slot.setStatus(e.id, this.config.STATUS_FINISH);
                for (var n = this.processSlotInfo(e), o = 0, r = n.length; r > o; o++) {
                    var a = n[o],
                    s = t.create(this.floatBlock);
                    s.render(a, e)
                }
                this.slot.setStatus(e.id, this.config.STATUS_FINISH),
                this.viewWatch.regisetViewWatch(e)
            }
        }
    }),
    t.define({
        name: "standardDelivery",
        namespace: "dup.business.delivery",
        deps: {
            config: "dup.common.config",
            slot: "dup.business.slot",
            "interface": "dup.business.interface",
            param: "dup.business.param",
            inlayFixPainter: "dup.ui.painter.inlayFix"
        },
        launch: function() {
            this.delieveryObjArray = this.delieveryObjArray || [],
            window.slotbydup = window.slotbydup || [],
            window.slotbydup && window.slotbydup instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.slotbydup), window.slotbydup = []),
            this.updateApi(),
            this.process()
        },
        process: function() {
            for (var t, e = 0,
            i = this.delieveryObjArray.length; i > e; e++) {
                var n = this.delieveryObjArray[e];
                if (n.hasOwnProperty("id")) {
                    if (t = this.slot.createSlot({
                        slotId: n.id,
                        productLine: "adcodex",
                        isAsync: n.isAsync || !1
                    }), t.containerId = n.container || t.containerId, t.display = n.display, t.size = n.size || "", !t.styleOpenApi.cpro_w && !t.styleOpenApi.cpro_h) {
                        var o, r = n.size;
                        if (r && r.indexOf(":") > -1) {
                            o = r.split(":");
                            var a = this.param.translateScaleToPixelSize(parseInt(o[0] || 0, 10), parseInt(o[1] || 0, 10));
                            t.width = a.width,
                            t.height = a.height
                        }
                    }
                    if (this.slot.addSlot(t), "union" === t.productLine && (t.isOldUnion = !1, n.hasOwnProperty("scale") && (t.isOldUnion = !0), "inlay-fix" === t.display && t.status < this.config.STATUS_REQUEST && !t.isOldUnion)) {
                        if (!t.styleOpenApi.cpro_w && !t.styleOpenApi.cpro_h) {
                            var o, r = n.size;
                            r && r.indexOf(",") > -1 && (o = r.split(","), t.width = parseInt(o[0] || 0, 10), t.height = parseInt(o[1] || 0, 10))
                        }
                        t.status = this.config.STATUS_REQUEST,
                        t.paramObj = this.param.getParamObj(t),
                        this.inlayFixPainter.render(t)
                    }
                } else this["interface"].executeTask(n)
            }
            this.delieveryObjArray = [],
            this.slot.process()
        },
        updateApi: function() {
            window.slotbydup = this,
            window.slotbydup.load = !0
        },
        push: function(t) {
            this.delieveryObjArray = this.delieveryObjArray && [],
            this.delieveryObjArray.push(t),
            this.process()
        }
    }),
    t.define({
        name: "main",
        namespace: "dup.ui.delivery",
        deps: {
            config: "dup.common.config",
            slot: "dup.business.slot",
            fingerPrint: "dup.business.fingerPrint",
            data: "dup.common.utility.data",
            lang: "dup.common.utility.lang",
            painterSelector: "dup.business.painterSelector",
            origentation: "dup.business.origentation",
            param: "dup.business.param",
            searchParam: "dup.business.searchParam",
            unionDataAdapter: "dup.business.unionDataAdapter",
            "interface": "dup.business.interface",
            unionDelivery: "dup.business.delivery.unionDelivery",
            standardDelivery: "dup.business.delivery.standardDelivery",
            loader: "dup.common.loader",
            inlayFixPainter: "dup.ui.painter.inlayFix",
            dynamicFloatPainter: "dup.ui.painter.dynamicFloat",
            floatPainter: "dup.ui.painter.float",
            mobileInlayFixPainter: "dup.ui.painter.mobile.inlayFix",
            mobileFloatPainter: "dup.ui.painter.mobile.float",
            unionMobile: "dup.ui.painter.unionMobilePainter"
        },
        process: function() {
            this.prepareApi(),
            this.unionDelivery.launch(),
            this.standardDelivery.launch(),
            this.fingerPrint.start()
        },
        prepareApi: function() {
            this["interface"].register("addOrientation", this.origentation, this.origentation.addOrientation),
            this.data.defineOnce(this.config.LOADER_DEFINE_NAME, t.proxy(this, this.callback))
        },
        callback: function() {
            var t = arguments;
            3 === t.length ? this.oldUnionCallback(t[0], t[1], t[2]) : this.sspCallback(t[0])
        },
        sspCallback: function(e) {
            var i = this.slot.getSlotInfo(e.tuid);
            i.response = e,
            i.timestampWatcher.t3 = +new Date,
            this.param.processExtendsParam(i);
            var n = this.painterSelector.getPainter(i),
            o = t.using(n);
            o ? o.render(i) : n && this.loader.load(n,
            function() {
                var e = t.using(n);
                e && e.render(i)
            })
        },
        oldUnionCallback: function(e, i, n) {
            var o = {
                "union/inlayFixed": "dup.ui.painter.painter",
                "union/mobile": "dup.ui.painter.unionMobilePainter"
            };
            if (0 === e.indexOf("request!")) for (var r = e.split("!")[1], a = n.deps, s = 0, l = a.length; l > s; s++) {
                var d = this.slot.getSlotInfo(r),
                h = this.unionDataAdapter.process(n.data);
                if (d.response = h, d.timestampWatcher.t3 = +new Date, !(d.status > this.config.STATUS_REQUEST)) {
                    var c = t.using(o[a[s]]);
                    this.searchParam.processResponseInfo(d, n.data),
                    c.render(d)
                }
            }
        }
    });
    var e = t.using("dup.ui.delivery.main");
    e.process()
} (_ms_dup_global.oojs);
