import { jsx as Dr } from "react/jsx-runtime";
import * as d from "react";
import ot, { isValidElement as ac, version as oc, useContext as Nn, createContext as bo, useRef as Ne, useLayoutEffect as ic, useEffect as Tn, useState as On, useMemo as O0, useCallback as Jo } from "react";
function F1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ea = { exports: {} };
var Yo;
function sc() {
  return Yo || (Yo = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var s = arguments[i];
          s && (o = a(o, r(s)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var i = "";
        for (var s in o)
          t.call(o, s) && o[s] && (i = a(i, s));
        return i;
      }
      function a(o, i) {
        return i ? o ? o + " " + i : o + i : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(ea)), ea.exports;
}
var lc = sc();
const Xe = /* @__PURE__ */ F1(lc);
function We() {
  return We = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, We.apply(null, arguments);
}
function he(e) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, he(e);
}
var cc = /* @__PURE__ */ Symbol.for("react.element"), uc = /* @__PURE__ */ Symbol.for("react.transitional.element"), fc = /* @__PURE__ */ Symbol.for("react.fragment");
function $1(e) {
  return (
    // Base object type
    e && he(e) === "object" && // React Element type
    (e.$$typeof === cc || e.$$typeof === uc) && // React Fragment type
    e.type === fc
  );
}
function Kn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return ot.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Kn(r)) : $1(r) && r.props ? n = n.concat(Kn(r.props.children, t)) : n.push(r));
  }), n;
}
var ba = {}, Co = [], dc = function(t) {
  Co.push(t);
};
function nr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Co.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function vc(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Co.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function V1() {
  ba = {};
}
function L1(e, t, n) {
  !t && !ba[n] && (e(!1, n), ba[n] = !0);
}
function $e(e, t) {
  L1(nr, e, t);
}
function Ca(e, t) {
  L1(vc, e, t);
}
$e.preMessage = dc;
$e.resetWarned = V1;
$e.noteOnce = Ca;
function mc(e, t) {
  if (he(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (he(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function B1(e) {
  var t = mc(e, "string");
  return he(t) == "symbol" ? t : t + "";
}
function R(e, t, n) {
  return (t = B1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Zo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zo(Object(n), !0).forEach(function(r) {
      R(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var s0 = { exports: {} }, Lt = {};
var ei;
function gc() {
  if (ei) return Lt;
  ei = 1;
  var e = ot;
  function t(c) {
    var l = "https://react.dev/errors/" + c;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        l += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + c + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var r = {
    d: {
      f: n,
      r: function() {
        throw Error(t(522));
      },
      D: n,
      C: n,
      L: n,
      m: n,
      X: n,
      S: n,
      M: n
    },
    p: 0,
    findDOMNode: null
  }, a = /* @__PURE__ */ Symbol.for("react.portal");
  function o(c, l, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: a,
      key: f == null ? null : "" + f,
      children: c,
      containerInfo: l,
      implementation: u
    };
  }
  var i = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(c, l) {
    if (c === "font") return "";
    if (typeof l == "string")
      return l === "use-credentials" ? l : "";
  }
  return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Lt.createPortal = function(c, l) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
      throw Error(t(299));
    return o(c, l, null, u);
  }, Lt.flushSync = function(c) {
    var l = i.T, u = r.p;
    try {
      if (i.T = null, r.p = 2, c) return c();
    } finally {
      i.T = l, r.p = u, r.d.f();
    }
  }, Lt.preconnect = function(c, l) {
    typeof c == "string" && (l ? (l = l.crossOrigin, l = typeof l == "string" ? l === "use-credentials" ? l : "" : void 0) : l = null, r.d.C(c, l));
  }, Lt.prefetchDNS = function(c) {
    typeof c == "string" && r.d.D(c);
  }, Lt.preinit = function(c, l) {
    if (typeof c == "string" && l && typeof l.as == "string") {
      var u = l.as, f = s(u, l.crossOrigin), v = typeof l.integrity == "string" ? l.integrity : void 0, m = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
      u === "style" ? r.d.S(
        c,
        typeof l.precedence == "string" ? l.precedence : void 0,
        {
          crossOrigin: f,
          integrity: v,
          fetchPriority: m
        }
      ) : u === "script" && r.d.X(c, {
        crossOrigin: f,
        integrity: v,
        fetchPriority: m,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0
      });
    }
  }, Lt.preinitModule = function(c, l) {
    if (typeof c == "string")
      if (typeof l == "object" && l !== null) {
        if (l.as == null || l.as === "script") {
          var u = s(
            l.as,
            l.crossOrigin
          );
          r.d.M(c, {
            crossOrigin: u,
            integrity: typeof l.integrity == "string" ? l.integrity : void 0,
            nonce: typeof l.nonce == "string" ? l.nonce : void 0
          });
        }
      } else l == null && r.d.M(c);
  }, Lt.preload = function(c, l) {
    if (typeof c == "string" && typeof l == "object" && l !== null && typeof l.as == "string") {
      var u = l.as, f = s(u, l.crossOrigin);
      r.d.L(c, u, {
        crossOrigin: f,
        integrity: typeof l.integrity == "string" ? l.integrity : void 0,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0,
        type: typeof l.type == "string" ? l.type : void 0,
        fetchPriority: typeof l.fetchPriority == "string" ? l.fetchPriority : void 0,
        referrerPolicy: typeof l.referrerPolicy == "string" ? l.referrerPolicy : void 0,
        imageSrcSet: typeof l.imageSrcSet == "string" ? l.imageSrcSet : void 0,
        imageSizes: typeof l.imageSizes == "string" ? l.imageSizes : void 0,
        media: typeof l.media == "string" ? l.media : void 0
      });
    }
  }, Lt.preloadModule = function(c, l) {
    if (typeof c == "string")
      if (l) {
        var u = s(l.as, l.crossOrigin);
        r.d.m(c, {
          as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
          crossOrigin: u,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0
        });
      } else r.d.m(c);
  }, Lt.requestFormReset = function(c) {
    r.d.r(c);
  }, Lt.unstable_batchedUpdates = function(c, l) {
    return c(l);
  }, Lt.useFormState = function(c, l, u) {
    return i.H.useFormState(c, l, u);
  }, Lt.useFormStatus = function() {
    return i.H.useHostTransitionStatus();
  }, Lt.version = "19.2.7", Lt;
}
var Bt = {};
var ti;
function hc() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && (function() {
    function e() {
    }
    function t(f) {
      return "" + f;
    }
    function n(f, v, m) {
      var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(p);
        var h = !1;
      } catch {
        h = !0;
      }
      return h && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object"
      ), t(p)), {
        $$typeof: l,
        key: p == null ? null : "" + p,
        children: f,
        containerInfo: v,
        implementation: m
      };
    }
    function r(f, v) {
      if (f === "font") return "";
      if (typeof v == "string")
        return v === "use-credentials" ? v : "";
    }
    function a(f) {
      return f === null ? "`null`" : f === void 0 ? "`undefined`" : f === "" ? "an empty string" : 'something with type "' + typeof f + '"';
    }
    function o(f) {
      return f === null ? "`null`" : f === void 0 ? "`undefined`" : f === "" ? "an empty string" : typeof f == "string" ? JSON.stringify(f) : typeof f == "number" ? "`" + f + "`" : 'something with type "' + typeof f + '"';
    }
    function i() {
      var f = u.H;
      return f === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = ot, c = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, l = /* @__PURE__ */ Symbol.for("react.portal"), u = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Bt.createPortal = function(f, v) {
      var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return n(f, v, null, m);
    }, Bt.flushSync = function(f) {
      var v = u.T, m = c.p;
      try {
        if (u.T = null, c.p = 2, f)
          return f();
      } finally {
        u.T = v, c.p = m, c.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Bt.preconnect = function(f, v) {
      typeof f == "string" && f ? v != null && typeof v != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        o(v)
      ) : v != null && typeof v.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        a(v.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        a(f)
      ), typeof f == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(f, v));
    }, Bt.prefetchDNS = function(f) {
      if (typeof f != "string" || !f)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          a(f)
        );
      else if (1 < arguments.length) {
        var v = arguments[1];
        typeof v == "object" && v.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          o(v)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          o(v)
        );
      }
      typeof f == "string" && c.d.D(f);
    }, Bt.preinit = function(f, v) {
      if (typeof f == "string" && f ? v == null || typeof v != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        o(v)
      ) : v.as !== "style" && v.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        o(v.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        a(f)
      ), typeof f == "string" && v && typeof v.as == "string") {
        var m = v.as, p = r(m, v.crossOrigin), h = typeof v.integrity == "string" ? v.integrity : void 0, g = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        m === "style" ? c.d.S(
          f,
          typeof v.precedence == "string" ? v.precedence : void 0,
          {
            crossOrigin: p,
            integrity: h,
            fetchPriority: g
          }
        ) : m === "script" && c.d.X(f, {
          crossOrigin: p,
          integrity: h,
          fetchPriority: g,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0
        });
      }
    }, Bt.preinitModule = function(f, v) {
      var m = "";
      typeof f == "string" && f || (m += " The `href` argument encountered was " + a(f) + "."), v !== void 0 && typeof v != "object" ? m += " The `options` argument encountered was " + a(v) + "." : v && "as" in v && v.as !== "script" && (m += " The `as` option encountered was " + o(v.as) + "."), m ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        m
      ) : (m = v && typeof v.as == "string" ? v.as : "script", m) === "script" || (m = o(m), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        m,
        f
      )), typeof f == "string" && (typeof v == "object" && v !== null ? (v.as == null || v.as === "script") && (m = r(
        v.as,
        v.crossOrigin
      ), c.d.M(f, {
        crossOrigin: m,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      })) : v == null && c.d.M(f));
    }, Bt.preload = function(f, v) {
      var m = "";
      if (typeof f == "string" && f || (m += " The `href` argument encountered was " + a(f) + "."), v == null || typeof v != "object" ? m += " The `options` argument encountered was " + a(v) + "." : typeof v.as == "string" && v.as || (m += " The `as` option encountered was " + a(v.as) + "."), m && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        m
      ), typeof f == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
        m = v.as;
        var p = r(
          m,
          v.crossOrigin
        );
        c.d.L(f, m, {
          crossOrigin: p,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0
        });
      }
    }, Bt.preloadModule = function(f, v) {
      var m = "";
      typeof f == "string" && f || (m += " The `href` argument encountered was " + a(f) + "."), v !== void 0 && typeof v != "object" ? m += " The `options` argument encountered was " + a(v) + "." : v && "as" in v && typeof v.as != "string" && (m += " The `as` option encountered was " + a(v.as) + "."), m && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        m
      ), typeof f == "string" && (v ? (m = r(
        v.as,
        v.crossOrigin
      ), c.d.m(f, {
        as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
        crossOrigin: m,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0
      })) : c.d.m(f));
    }, Bt.requestFormReset = function(f) {
      c.d.r(f);
    }, Bt.unstable_batchedUpdates = function(f, v) {
      return f(v);
    }, Bt.useFormState = function(f, v, m) {
      return i().useFormState(f, v, m);
    }, Bt.useFormStatus = function() {
      return i().useHostTransitionStatus();
    }, Bt.version = "19.2.7", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Bt;
}
var ni;
function pc() {
  if (ni) return s0.exports;
  ni = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (e(), s0.exports = gc()) : s0.exports = hc(), s0.exports;
}
var Hr = pc();
const ri = /* @__PURE__ */ F1(Hr);
function kr(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function yc(e) {
  return e && he(e) === "object" && kr(e.nativeElement) ? e.nativeElement : kr(e) ? e : null;
}
function b0(e) {
  var t = yc(e);
  if (t)
    return t;
  if (e instanceof ot.Component) {
    var n;
    return (n = ri.findDOMNode) === null || n === void 0 ? void 0 : n.call(ri, e);
  }
  return null;
}
var l0 = { exports: {} }, Ze = {};
var ai;
function bc() {
  if (ai) return Ze;
  ai = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.provider"), i = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.offscreen"), p;
  p = /* @__PURE__ */ Symbol.for("react.module.reference");
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
        case e:
          switch (g = g.type, g) {
            case n:
            case a:
            case r:
            case l:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case i:
                case c:
                case v:
                case f:
                case o:
                  return g;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Ze.ContextConsumer = i, Ze.ContextProvider = o, Ze.Element = e, Ze.ForwardRef = c, Ze.Fragment = n, Ze.Lazy = v, Ze.Memo = f, Ze.Portal = t, Ze.Profiler = a, Ze.StrictMode = r, Ze.Suspense = l, Ze.SuspenseList = u, Ze.isAsyncMode = function() {
    return !1;
  }, Ze.isConcurrentMode = function() {
    return !1;
  }, Ze.isContextConsumer = function(g) {
    return h(g) === i;
  }, Ze.isContextProvider = function(g) {
    return h(g) === o;
  }, Ze.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Ze.isForwardRef = function(g) {
    return h(g) === c;
  }, Ze.isFragment = function(g) {
    return h(g) === n;
  }, Ze.isLazy = function(g) {
    return h(g) === v;
  }, Ze.isMemo = function(g) {
    return h(g) === f;
  }, Ze.isPortal = function(g) {
    return h(g) === t;
  }, Ze.isProfiler = function(g) {
    return h(g) === a;
  }, Ze.isStrictMode = function(g) {
    return h(g) === r;
  }, Ze.isSuspense = function(g) {
    return h(g) === l;
  }, Ze.isSuspenseList = function(g) {
    return h(g) === u;
  }, Ze.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === a || g === r || g === l || g === u || g === m || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === f || g.$$typeof === o || g.$$typeof === i || g.$$typeof === c || g.$$typeof === p || g.getModuleId !== void 0);
  }, Ze.typeOf = h, Ze;
}
var et = {};
var oi;
function Cc() {
  return oi || (oi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.provider"), i = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.offscreen"), p = !1, h = !1, g = !1, b = !1, y = !1, C;
    C = /* @__PURE__ */ Symbol.for("react.module.reference");
    function E($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === n || $ === a || y || $ === r || $ === l || $ === u || b || $ === m || p || h || g || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === f || $.$$typeof === o || $.$$typeof === i || $.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === C || $.getModuleId !== void 0));
    }
    function x($) {
      if (typeof $ == "object" && $ !== null) {
        var K = $.$$typeof;
        switch (K) {
          case e:
            var Z = $.type;
            switch (Z) {
              case n:
              case a:
              case r:
              case l:
              case u:
                return Z;
              default:
                var ve = Z && Z.$$typeof;
                switch (ve) {
                  case s:
                  case i:
                  case c:
                  case v:
                  case f:
                  case o:
                    return ve;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var S = i, O = o, w = e, A = c, M = n, T = v, D = f, _ = t, I = a, V = r, F = l, H = u, k = !1, J = !1;
    function U($) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z($) {
      return J || (J = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W($) {
      return x($) === i;
    }
    function Q($) {
      return x($) === o;
    }
    function ne($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function re($) {
      return x($) === c;
    }
    function be($) {
      return x($) === n;
    }
    function de($) {
      return x($) === v;
    }
    function we($) {
      return x($) === f;
    }
    function ge($) {
      return x($) === t;
    }
    function xe($) {
      return x($) === a;
    }
    function Y($) {
      return x($) === r;
    }
    function j($) {
      return x($) === l;
    }
    function q($) {
      return x($) === u;
    }
    et.ContextConsumer = S, et.ContextProvider = O, et.Element = w, et.ForwardRef = A, et.Fragment = M, et.Lazy = T, et.Memo = D, et.Portal = _, et.Profiler = I, et.StrictMode = V, et.Suspense = F, et.SuspenseList = H, et.isAsyncMode = U, et.isConcurrentMode = z, et.isContextConsumer = W, et.isContextProvider = Q, et.isElement = ne, et.isForwardRef = re, et.isFragment = be, et.isLazy = de, et.isMemo = we, et.isPortal = ge, et.isProfiler = xe, et.isStrictMode = Y, et.isSuspense = j, et.isSuspenseList = q, et.isValidElementType = E, et.typeOf = x;
  })()), et;
}
var ii;
function Sc() {
  return ii || (ii = 1, process.env.NODE_ENV === "production" ? l0.exports = bc() : l0.exports = Cc()), l0.exports;
}
var ta = Sc();
function B0(e, t, n) {
  var r = d.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Ec = Number(oc.split(".")[0]), So = function(t, n) {
  typeof t == "function" ? t(n) : he(t) === "object" && t && "current" in t && (t.current = n);
}, Eo = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      So(i, o);
    });
  };
}, H0 = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return B0(function() {
    return Eo.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, s) {
      return i !== o[s];
    });
  });
}, k0 = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (H1(t) && Ec >= 19)
    return !0;
  var a = ta.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== ta.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ta.ForwardRef);
};
function H1(e) {
  return /* @__PURE__ */ ac(e) && !$1(e);
}
var wo = function(t) {
  if (t && H1(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
}, Sa = /* @__PURE__ */ d.createContext(null);
function wc(e) {
  var t = e.children, n = e.onBatchResize, r = d.useRef(0), a = d.useRef([]), o = d.useContext(Sa), i = d.useCallback(function(s, c, l) {
    r.current += 1;
    var u = r.current;
    a.current.push({
      size: s,
      element: c,
      data: l
    }), Promise.resolve().then(function() {
      u === r.current && (n?.(a.current), a.current = []);
    }), o?.(s, c, l);
  }, [n, o]);
  return /* @__PURE__ */ d.createElement(Sa.Provider, {
    value: i
  }, t);
}
var k1 = (function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(a, o) {
      return a[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    (function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), a = this.__entries__[r];
        return a && a[1];
      }, t.prototype.set = function(n, r) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, a = e(r, n);
        ~a && r.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          n.call(r, i[1], i[0]);
        }
      }, t;
    })()
  );
})(), Ea = typeof window < "u" && typeof document < "u" && window.document === document, R0 = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), xc = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(R0) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), Oc = 2;
function Rc(e, t) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, e()), r && s();
  }
  function i() {
    xc(o);
  }
  function s() {
    var c = Date.now();
    if (n) {
      if (c - a < Oc)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    a = c;
  }
  return s;
}
var Pc = 20, Ac = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Mc = typeof MutationObserver < "u", Ic = (
  /** @class */
  (function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Rc(this.refresh.bind(this), Pc);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ea || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Mc ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ea || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = Ac.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  })()
), z1 = (function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}), br = (function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || R0;
}), j1 = z0(0, 0, 0, 0);
function P0(e) {
  return parseFloat(e) || 0;
}
function si(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e["border-" + a + "-width"];
    return r + P0(o);
  }, 0);
}
function Dc(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e["padding-" + o];
    n[o] = P0(i);
  }
  return n;
}
function Tc(e) {
  var t = e.getBBox();
  return z0(0, 0, t.width, t.height);
}
function _c(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return j1;
  var r = br(e).getComputedStyle(e), a = Dc(r), o = a.left + a.right, i = a.top + a.bottom, s = P0(r.width), c = P0(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= si(r, "left", "right") + o), Math.round(c + i) !== n && (c -= si(r, "top", "bottom") + i)), !Fc(e)) {
    var l = Math.round(s + o) - t, u = Math.round(c + i) - n;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return z0(a.left, a.top, s, c);
}
var Nc = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof br(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof br(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function Fc(e) {
  return e === br(e).document.documentElement;
}
function $c(e) {
  return Ea ? Nc(e) ? Tc(e) : _c(e) : j1;
}
function Vc(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return z1(i, {
    x: t,
    y: n,
    width: r,
    height: a,
    top: n,
    right: t + r,
    bottom: a + n,
    left: t
  }), i;
}
function z0(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Lc = (
  /** @class */
  (function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = z0(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = $c(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  })()
), Bc = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t, n) {
      var r = Vc(n);
      z1(this, { target: t, contentRect: r });
    }
    return e;
  })()
), Hc = (
  /** @class */
  (function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new k1(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof br(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Lc(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof br(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new Bc(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  })()
), W1 = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new k1(), G1 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Ic.getInstance(), r = new Hc(t, n, this);
      W1.set(this, r);
    }
    return e;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  G1.prototype[e] = function() {
    var t;
    return (t = W1.get(this))[e].apply(t, arguments);
  };
});
var kc = (function() {
  return typeof R0.ResizeObserver < "u" ? R0.ResizeObserver : G1;
})(), Dn = /* @__PURE__ */ new Map();
function U1(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Dn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var K1 = new kc(U1);
process.env.NODE_ENV;
process.env.NODE_ENV;
function zc(e, t) {
  Dn.has(e) || (Dn.set(e, /* @__PURE__ */ new Set()), K1.observe(e)), Dn.get(e).add(t);
}
function jc(e, t) {
  Dn.has(e) && (Dn.get(e).delete(t), Dn.get(e).size || (K1.unobserve(e), Dn.delete(e)));
}
function Ft(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, B1(r.key), r);
  }
}
function $t(e, t, n) {
  return t && li(e.prototype, t), n && li(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function zr(e, t) {
  return zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, zr(e, t);
}
function rr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && zr(e, t);
}
function jr(e) {
  return jr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, jr(e);
}
function xo() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xo = function() {
    return !!e;
  })();
}
function _e(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wc(e, t) {
  if (t && (he(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _e(e);
}
function ar(e) {
  var t = xo();
  return function() {
    var n, r = jr(e);
    if (t) {
      var a = jr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return Wc(this, n);
  };
}
var Gc = /* @__PURE__ */ (function(e) {
  rr(n, e);
  var t = ar(n);
  function n() {
    return Ft(this, n), t.apply(this, arguments);
  }
  return $t(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(d.Component);
function Uc(e, t) {
  var n = e.children, r = e.disabled, a = d.useRef(null), o = d.useRef(null), i = d.useContext(Sa), s = typeof n == "function", c = s ? n(a) : n, l = d.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ d.isValidElement(c) && k0(c), f = u ? wo(c) : null, v = H0(f, a), m = function() {
    var b;
    return b0(a.current) || // Support `nativeElement` format
    (a.current && he(a.current) === "object" ? b0((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || b0(o.current);
  };
  d.useImperativeHandle(t, function() {
    return m();
  });
  var p = d.useRef(e);
  p.current = e;
  var h = d.useCallback(function(g) {
    var b = p.current, y = b.onResize, C = b.data, E = g.getBoundingClientRect(), x = E.width, S = E.height, O = g.offsetWidth, w = g.offsetHeight, A = Math.floor(x), M = Math.floor(S);
    if (l.current.width !== A || l.current.height !== M || l.current.offsetWidth !== O || l.current.offsetHeight !== w) {
      var T = {
        width: A,
        height: M,
        offsetWidth: O,
        offsetHeight: w
      };
      l.current = T;
      var D = O === Math.round(x) ? x : O, _ = w === Math.round(S) ? S : w, I = P(P({}, T), {}, {
        offsetWidth: D,
        offsetHeight: _
      });
      i?.(I, g, C), y && Promise.resolve().then(function() {
        y(I, g);
      });
    }
  }, []);
  return d.useEffect(function() {
    var g = m();
    return g && !r && zc(g, h), function() {
      return jc(g, h);
    };
  }, [a.current, r]), /* @__PURE__ */ d.createElement(Gc, {
    ref: o
  }, u ? /* @__PURE__ */ d.cloneElement(c, {
    ref: v
  }) : c);
}
var q1 = /* @__PURE__ */ d.forwardRef(Uc);
process.env.NODE_ENV !== "production" && (q1.displayName = "SingleObserver");
var Kc = "rc-observer-key";
function qc(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Kn(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? nr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && nr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(a, o) {
    var i = a?.key || "".concat(Kc, "-").concat(o);
    return /* @__PURE__ */ d.createElement(q1, We({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var Xn = /* @__PURE__ */ d.forwardRef(qc);
process.env.NODE_ENV !== "production" && (Xn.displayName = "ResizeObserver");
Xn.Collection = wc;
function wa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Xc(e) {
  if (Array.isArray(e)) return wa(e);
}
function X1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Oo(e, t) {
  if (e) {
    if (typeof e == "string") return wa(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wa(e, t) : void 0;
  }
}
function Qc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se(e) {
  return Xc(e) || X1(e) || Oo(e) || Qc();
}
var Q1 = function(t) {
  return +setTimeout(t, 16);
}, J1 = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Q1 = function(t) {
  return window.requestAnimationFrame(t);
}, J1 = function(t) {
  return window.cancelAnimationFrame(t);
});
var ci = 0, j0 = /* @__PURE__ */ new Map();
function Y1(e) {
  j0.delete(e);
}
var Gt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ci += 1;
  var r = ci;
  function a(o) {
    if (o === 0)
      Y1(r), t();
    else {
      var i = Q1(function() {
        a(o - 1);
      });
      j0.set(r, i);
    }
  }
  return a(n), r;
};
Gt.cancel = function(e) {
  var t = j0.get(e);
  return Y1(e), J1(t);
};
process.env.NODE_ENV !== "production" && (Gt.ids = function() {
  return j0;
});
function Z1(e) {
  if (Array.isArray(e)) return e;
}
function Jc(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], c = !0, l = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function es() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N(e, t) {
  return Z1(e) || Jc(e, t) || Oo(e, t) || es();
}
function Wr(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ut() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Yc(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var ui = "data-rc-order", fi = "data-rc-priority", Zc = "rc-util-key", xa = /* @__PURE__ */ new Map();
function ts() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Zc;
}
function W0(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function eu(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ro(e) {
  return Array.from((xa.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ns(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ut())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = eu(r), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(ui, i), s && o && c.setAttribute(fi, "".concat(o)), n != null && n.nonce && (c.nonce = n?.nonce), c.innerHTML = e;
  var l = W0(t), u = l.firstChild;
  if (r) {
    if (s) {
      var f = (t.styles || Ro(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(ui)))
          return !1;
        var m = Number(v.getAttribute(fi) || 0);
        return o >= m;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function rs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = W0(t);
  return (t.styles || Ro(n)).find(function(r) {
    return r.getAttribute(ts(t)) === e;
  });
}
function Gr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = rs(e, t);
  if (n) {
    var r = W0(t);
    r.removeChild(n);
  }
}
function tu(e, t) {
  var n = xa.get(e);
  if (!n || !Yc(document, n)) {
    var r = ns("", t), a = r.parentNode;
    xa.set(e, a), e.removeChild(r);
  }
}
function _n(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = W0(n), a = Ro(r), o = P(P({}, n), {}, {
    styles: a
  });
  tu(r, o);
  var i = rs(t, o);
  if (i) {
    var s, c;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = o.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = o.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = ns(e, o);
  return u.setAttribute(ts(o), t), u;
}
function nu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function bt(e, t) {
  if (e == null) return {};
  var n, r, a = nu(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function Oa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(o);
    if ($e(!c, "Warning: There may be circular references"), c)
      return !1;
    if (o === i)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(o);
    var l = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var u = 0; u < o.length; u++)
        if (!a(o[u], i[u], l))
          return !1;
      return !0;
    }
    if (o && i && he(o) === "object" && he(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return a(o[v], i[v], l);
      });
    }
    return !1;
  }
  return a(e, t);
}
var ru = "%";
function Ra(e) {
  return e.join(ru);
}
var au = /* @__PURE__ */ (function() {
  function e(t) {
    Ft(this, e), R(this, "instanceId", void 0), R(this, "cache", /* @__PURE__ */ new Map()), R(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return $t(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Ra(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Ra(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
})(), Cr = "data-token-hash", gn = "data-css-hash", ou = "data-cache-path", Gn = "__cssinjs_instance__";
function iu() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(gn, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Gn] = a[Gn] || e, a[Gn] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(gn, "]"))).forEach(function(a) {
      var o = a.getAttribute(gn);
      if (r[o]) {
        if (a[Gn] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new au(e);
}
var Jr = /* @__PURE__ */ d.createContext({
  hashPriority: "low",
  cache: iu(),
  defaultCache: !0
});
function su(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Po = /* @__PURE__ */ (function() {
  function e() {
    Ft(this, e), R(this, "cache", void 0), R(this, "keys", void 0), R(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return $t(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (r = i) !== null && r !== void 0 && r.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var a = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(l, u) {
            var f = N(l, 2), v = f[1];
            return a.internalGet(u)[1] < v ? [u, a.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = N(o, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(l, u) {
        if (u === n.length - 1)
          c.set(l, {
            value: [r, a.cacheCallTimes++]
          });
        else {
          var f = c.get(l);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var a = n.get(r[0]);
      if (r.length === 1) {
        var o;
        return a.map ? n.set(r[0], {
          map: a.map
        }) : n.delete(r[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !su(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
R(Po, "MAX_CACHE_SIZE", 20);
R(Po, "MAX_CACHE_OFFSET", 5);
var di = 0, as = /* @__PURE__ */ (function() {
  function e(t) {
    Ft(this, e), R(this, "derivatives", void 0), R(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = di, t.length === 0 && nr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), di += 1;
  }
  return $t(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
})(), na = new Po();
function Pa(e) {
  var t = Array.isArray(e) ? e : [e];
  return na.has(t) || na.set(t, new as(t)), na.get(t);
}
var lu = /* @__PURE__ */ new WeakMap(), ra = {};
function cu(e, t) {
  for (var n = lu, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(ra) || n.set(ra, e()), n.get(ra);
}
var vi = /* @__PURE__ */ new WeakMap();
function $r(e) {
  var t = vi.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof as ? t += r.id : r && he(r) === "object" ? t += $r(r) : t += r;
  }), t = Wr(t), vi.set(e, t)), t;
}
function mi(e, t) {
  return Wr("".concat(t, "_").concat($r(e)));
}
var Aa = Ut();
function mt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function A0(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = P(P({}, r), {}, R(R({}, Cr, t), gn, n)), i = Object.keys(o).map(function(s) {
    var c = o[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var C0 = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, uu = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = N(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, os = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = N(i, 2), u = l[0], f = l[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      o[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var v, m = C0(u, r?.prefix);
      a[m] = typeof f == "number" && !(r != null && (v = r.unitless) !== null && v !== void 0 && v[u]) ? "".concat(f, "px") : String(f), o[u] = "var(".concat(m, ")");
    }
  }), [o, uu(a, n, {
    scope: r?.scope
  })];
}, gi = process.env.NODE_ENV !== "test" && Ut() ? d.useLayoutEffect : d.useEffect, yt = function(t, n) {
  var r = d.useRef(!0);
  gi(function() {
    return t(r.current);
  }, n), gi(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, hi = function(t, n) {
  yt(function(r) {
    if (!r)
      return t();
  }, n);
}, fu = P({}, d), pi = fu.useInsertionEffect, du = function(t, n, r) {
  d.useMemo(t, r), yt(function() {
    return n(!0);
  }, r);
}, vu = pi ? function(e, t, n) {
  return pi(function() {
    return e(), t();
  }, n);
} : du, mu = P({}, d), gu = mu.useInsertionEffect, hu = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      process.env.NODE_ENV !== "production" && nr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(o);
  }
  return d.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, pu = function() {
  return function(t) {
    t();
  };
}, yu = typeof gu < "u" ? hu : pu;
function bu() {
  return !1;
}
var Ma = !1;
function Cu() {
  return Ma;
}
const Su = process.env.NODE_ENV === "production" ? bu : Cu;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var c0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (c0 && typeof c0.webpackHotUpdate == "function") {
    var Eu = c0.webpackHotUpdate;
    c0.webpackHotUpdate = function() {
      return Ma = !0, setTimeout(function() {
        Ma = !1;
      }, 0), Eu.apply(void 0, arguments);
    };
  }
}
function Ao(e, t, n, r, a) {
  var o = d.useContext(Jr), i = o.cache, s = [e].concat(se(t)), c = Ra(s), l = yu([c]), u = Su(), f = function(h) {
    i.opUpdate(c, function(g) {
      var b = g || [void 0, void 0], y = N(b, 2), C = y[0], E = C === void 0 ? 0 : C, x = y[1], S = x;
      process.env.NODE_ENV !== "production" && x && u && (r?.(S, u), S = null);
      var O = S || n(), w = [E, O];
      return h ? h(w) : w;
    });
  };
  d.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var v = i.opGet(c);
  process.env.NODE_ENV !== "production" && !v && (f(), v = i.opGet(c));
  var m = v[1];
  return vu(function() {
    a?.(m);
  }, function(p) {
    return f(function(h) {
      var g = N(h, 2), b = g[0], y = g[1];
      return p && b === 0 && a?.(m), [b + 1, y];
    }), function() {
      i.opUpdate(c, function(h) {
        var g = h || [], b = N(g, 2), y = b[0], C = y === void 0 ? 0 : y, E = b[1], x = C - 1;
        return x === 0 ? (l(function() {
          (p || !i.opGet(c)) && r?.(E, !1);
        }), null) : [C - 1, E];
      });
    };
  }, [c]), m;
}
var wu = {}, xu = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Zn = /* @__PURE__ */ new Map();
function Ou(e) {
  Zn.set(e, (Zn.get(e) || 0) + 1);
}
function Ru(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Cr, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Gn] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var Pu = 0;
function Au(e, t) {
  Zn.set(e, (Zn.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  Zn.forEach(function(r, a) {
    r <= 0 && n.add(a);
  }), Zn.size - n.size > Pu && n.forEach(function(r) {
    Ru(r, t), Zn.delete(r);
  });
}
var Mu = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = P(P({}, o), n);
  return a && (i = a(i)), i;
}, is = "token";
function Iu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Nn(Jr), a = r.cache.instanceId, o = r.container, i = n.salt, s = i === void 0 ? "" : i, c = n.override, l = c === void 0 ? wu : c, u = n.formatToken, f = n.getComputedToken, v = n.cssVar, m = cu(function() {
    return Object.assign.apply(Object, [{}].concat(se(t)));
  }, t), p = $r(m), h = $r(l), g = v ? $r(v) : "", b = Ao(is, [s, e.id, p, h, g], function() {
    var y, C = f ? f(m, l, e) : Mu(m, l, e, u), E = P({}, C), x = "";
    if (v) {
      var S = os(C, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), O = N(S, 2);
      C = O[0], x = O[1];
    }
    var w = mi(C, s);
    C._tokenKey = w, E._tokenKey = mi(E, s);
    var A = (y = v?.key) !== null && y !== void 0 ? y : w;
    C._themeKey = A, Ou(A);
    var M = "".concat(xu, "-").concat(Wr(w));
    return C._hashId = M, [C, M, E, x, v?.key || ""];
  }, function(y) {
    Au(y[0]._themeKey, a);
  }, function(y) {
    var C = N(y, 4), E = C[0], x = C[3];
    if (v && x) {
      var S = _n(x, Wr("css-variables-".concat(E._themeKey)), {
        mark: gn,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      S[Gn] = a, S.setAttribute(Cr, E._themeKey);
    }
  });
  return b;
}
var Du = function(t, n, r) {
  var a = N(t, 5), o = a[2], i = a[3], s = a[4], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = o._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, m = A0(i, s, u, v, l);
  return [f, u, m];
}, Tu = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ss = "comm", ls = "rule", cs = "decl", _u = "@import", Nu = "@namespace", Fu = "@keyframes", $u = "@layer", Vu = Math.abs, Vr = String.fromCharCode;
function us(e) {
  return e.trim();
}
function Ia(e, t, n) {
  return e.replace(t, n);
}
function pr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Sr(e, t, n) {
  return e.slice(t, n);
}
function wn(e) {
  return e.length;
}
function Lu(e) {
  return e.length;
}
function u0(e, t) {
  return t.push(e), e;
}
var G0 = 1, Er = 1, fs = 0, ln = 0, xt = 0, Rr = "";
function Mo(e, t, n, r, a, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: G0, column: Er, length: i, return: "", siblings: s };
}
function Bu() {
  return xt;
}
function Hu() {
  return xt = ln > 0 ? pr(Rr, --ln) : 0, Er--, xt === 10 && (Er = 1, G0--), xt;
}
function hn() {
  return xt = ln < fs ? pr(Rr, ln++) : 0, Er++, xt === 10 && (Er = 1, G0++), xt;
}
function Un() {
  return pr(Rr, ln);
}
function S0() {
  return ln;
}
function U0(e, t) {
  return Sr(Rr, e, t);
}
function Ur(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ku(e) {
  return G0 = Er = 1, fs = wn(Rr = e), ln = 0, [];
}
function zu(e) {
  return Rr = "", e;
}
function aa(e) {
  return us(U0(ln - 1, Da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ju(e) {
  for (; (xt = Un()) && xt < 33; )
    hn();
  return Ur(e) > 2 || Ur(xt) > 3 ? "" : " ";
}
function Wu(e, t) {
  for (; --t && hn() && !(xt < 48 || xt > 102 || xt > 57 && xt < 65 || xt > 70 && xt < 97); )
    ;
  return U0(e, S0() + (t < 6 && Un() == 32 && hn() == 32));
}
function Da(e) {
  for (; hn(); )
    switch (xt) {
      // ] ) " '
      case e:
        return ln;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Da(xt);
        break;
      // (
      case 40:
        e === 41 && Da(e);
        break;
      // \
      case 92:
        hn();
        break;
    }
  return ln;
}
function Gu(e, t) {
  for (; hn() && e + xt !== 57; )
    if (e + xt === 84 && Un() === 47)
      break;
  return "/*" + U0(t, ln - 1) + "*" + Vr(e === 47 ? e : hn());
}
function Uu(e) {
  for (; !Ur(Un()); )
    hn();
  return U0(e, ln);
}
function Ku(e) {
  return zu(E0("", null, null, null, [""], e = ku(e), 0, [0], e));
}
function E0(e, t, n, r, a, o, i, s, c) {
  for (var l = 0, u = 0, f = i, v = 0, m = 0, p = 0, h = 1, g = 1, b = 1, y = 0, C = 0, E = "", x = a, S = o, O = r, w = E; g; )
    switch (p = C, C = hn()) {
      // (
      case 40:
        p != 108 && pr(w, f - 1) == 58 ? (y++, w += "(") : w += aa(C);
        break;
      // )
      case 41:
        y--, w += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        w += aa(C);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (y > 0) {
          w += Vr(C);
          break;
        }
        w += ju(p);
        break;
      // \
      case 92:
        w += Wu(S0() - 1, 7);
        continue;
      // /
      case 47:
        switch (Un()) {
          case 42:
          case 47:
            u0(qu(Gu(hn(), S0()), t, n, c), c), (Ur(p || 1) == 5 || Ur(Un() || 1) == 5) && wn(w) && Sr(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * h:
        s[l++] = wn(w) * b;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        if (y > 0 && C) {
          w += Vr(C);
          break;
        }
        switch (C) {
          // \0 }
          case 0:
          case 125:
            g = 0;
          // ;
          case 59 + u:
            b == -1 && (w = Ia(w, /\f/g, "")), m > 0 && (wn(w) - f || h === 0) && u0(m > 32 ? bi(w + ";", r, n, f - 1, c) : bi(Ia(w, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (u0(O = yi(w, t, n, l, u, a, s, E, x = [], S = [], f, o), o), C === 123)
              if (u === 0)
                E0(w, t, O, O, x, o, f, s, S);
              else {
                switch (v) {
                  // c(ontainer)
                  case 99:
                    if (pr(w, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (pr(w, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? E0(e, O, O, r && u0(yi(e, O, O, 0, 0, a, s, E, a, x = [], f, S), S), a, S, f, s, r ? x : S) : E0(w, O, O, O, [""], S, 0, s, S);
              }
        }
        l = u = m = 0, h = b = 1, E = w = "", f = i;
        break;
      // :
      case 58:
        f = 1 + wn(w), m = p;
      default:
        if (h < 1) {
          if (C == 123)
            --h;
          else if (C == 125 && h++ == 0 && Hu() == 125)
            continue;
        }
        switch (w += Vr(C), C * h) {
          // &
          case 38:
            b = u > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            if (y > 0) break;
            s[l++] = (wn(w) - 1) * b, b = 1;
            break;
          // @
          case 64:
            Un() === 45 && (w += aa(hn())), v = Un(), u = f = wn(E = w += Uu(S0())), C++;
            break;
          // -
          case 45:
            p === 45 && wn(w) == 2 && (h = 0);
        }
    }
  return o;
}
function yi(e, t, n, r, a, o, i, s, c, l, u, f) {
  for (var v = a - 1, m = a === 0 ? o : [""], p = Lu(m), h = 0, g = 0, b = 0; h < r; ++h)
    for (var y = 0, C = Sr(e, v + 1, v = Vu(g = i[h])), E = e; y < p; ++y)
      (E = us(g > 0 ? m[y] + " " + C : Ia(C, /&\f/g, m[y]))) && (c[b++] = E);
  return Mo(e, t, n, a === 0 ? ls : s, c, l, u, f);
}
function qu(e, t, n, r) {
  return Mo(e, t, n, ss, Vr(Bu()), Sr(e, 2, -2), 0, r);
}
function bi(e, t, n, r, a) {
  return Mo(e, t, n, cs, Sr(e, 0, r), Sr(e, r + 1, -1), r, a);
}
function Ta(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Xu(e, t, n, r) {
  switch (e.type) {
    case $u:
      if (e.children.length) break;
    case _u:
    case Nu:
    case cs:
      return e.return = e.return || e.value;
    case ss:
      return "";
    case Fu:
      return e.return = e.value + "{" + Ta(e.children, r) + "}";
    case ls:
      if (!wn(e.value = e.props.join(","))) return "";
  }
  return wn(n = Ta(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ds(e, t) {
  var n = t.path, r = t.parentSelectors;
  $e(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Qu = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && ds("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Ju = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && ds("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Ci = "data-ant-cssinjs-cache-path", vs = "_FILE_STYLE__", tr, ms = !0;
function Yu() {
  if (!tr && (tr = {}, Ut())) {
    var e = document.createElement("div");
    e.className = Ci, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = N(o, 2), s = i[0], c = i[1];
      tr[s] = c;
    });
    var n = document.querySelector("style[".concat(Ci, "]"));
    if (n) {
      var r;
      ms = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Zu(e) {
  return Yu(), !!tr[e];
}
function ef(e) {
  var t = tr[e], n = null;
  if (t && Ut())
    if (ms)
      n = vs;
    else {
      var r = document.querySelector("style[".concat(gn, '="').concat(tr[e], '"]'));
      r ? n = r.innerHTML : delete tr[e];
    }
  return [n, t];
}
var gs = "_skip_check_", hs = "_multi_value_";
function w0(e) {
  var t = Ta(Ku(e), Xu);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function tf(e) {
  return he(e) === "object" && e && (gs in e || hs in e);
}
function Si(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(a).concat(l.slice(u.length)), [l].concat(se(c.slice(1))).join(" ");
  });
  return o.join(",");
}
var nf = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, s = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, f = n.transformers, v = f === void 0 ? [] : f, m = n.linters, p = m === void 0 ? [] : m, h = "", g = {};
  function b(E) {
    var x = E.getName(s);
    if (!g[x]) {
      var S = e(E.style, n, {
        root: !1,
        parentSelectors: i
      }), O = N(S, 1), w = O[0];
      g[x] = "@keyframes ".concat(E.getName(s)).concat(w);
    }
  }
  function y(E) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(S) {
      Array.isArray(S) ? y(S, x) : S && x.push(S);
    }), x;
  }
  var C = y(Array.isArray(t) ? t : [t]);
  return C.forEach(function(E) {
    var x = typeof E == "string" && !a ? {} : E;
    if (typeof x == "string")
      h += "".concat(x, `
`);
    else if (x._keyframe)
      b(x);
    else {
      var S = v.reduce(function(O, w) {
        var A;
        return (w == null || (A = w.visit) === null || A === void 0 ? void 0 : A.call(w, O)) || O;
      }, x);
      Object.keys(S).forEach(function(O) {
        var w = S[O];
        if (he(w) === "object" && w && (O !== "animationName" || !w._keyframe) && !tf(w)) {
          var A = !1, M = O.trim(), T = !1;
          (a || o) && s ? M.startsWith("@") ? A = !0 : M === "&" ? M = Si("", s, u) : M = Si(O, s, u) : a && !s && (M === "&" || M === "") && (M = "", T = !0);
          var D = e(w, n, {
            root: T,
            injectHash: A,
            parentSelectors: [].concat(se(i), [M])
          }), _ = N(D, 2), I = _[0], V = _[1];
          g = P(P({}, g), V), h += "".concat(M).concat(I);
        } else {
          let k = function(J, U) {
            process.env.NODE_ENV !== "production" && (he(w) !== "object" || !(w != null && w[gs])) && [Qu, Ju].concat(se(p)).forEach(function(Q) {
              return Q(J, U, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var z = J.replace(/[A-Z]/g, function(Q) {
              return "-".concat(Q.toLowerCase());
            }), W = U;
            !Tu[J] && typeof W == "number" && W !== 0 && (W = "".concat(W, "px")), J === "animationName" && U !== null && U !== void 0 && U._keyframe && (b(U), W = U.getName(s)), h += "".concat(z, ":").concat(W, ";");
          };
          var F, H = (F = w?.value) !== null && F !== void 0 ? F : w;
          he(w) === "object" && w !== null && w !== void 0 && w[hs] && Array.isArray(H) ? H.forEach(function(J) {
            k(O, J);
          }) : k(O, H);
        }
      });
    }
  }), a ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (g["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, g];
};
function ps(e, t) {
  return Wr("".concat(e.join("%")).concat(t));
}
function rf() {
  return null;
}
var ys = "style";
function _a(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = d.useContext(Jr), f = u.autoClear, v = u.mock, m = u.defaultCache, p = u.hashPriority, h = u.container, g = u.ssrInline, b = u.transformers, y = u.linters, C = u.cache, E = u.layer, x = n._tokenKey, S = [x];
  E && S.push("layer"), S.push.apply(S, se(r));
  var O = Aa;
  process.env.NODE_ENV !== "production" && v !== void 0 && (O = v === "client");
  var w = Ao(
    ys,
    S,
    // Create cache if needed
    function() {
      var _ = S.join("|");
      if (Zu(_)) {
        var I = ef(_), V = N(I, 2), F = V[0], H = V[1];
        if (F)
          return [F, x, H, {}, s, l];
      }
      var k = t(), J = nf(k, {
        hashId: a,
        hashPriority: p,
        layer: E ? o : void 0,
        path: r.join("-"),
        transformers: b,
        linters: y
      }), U = N(J, 2), z = U[0], W = U[1], Q = w0(z), ne = ps(S, Q);
      return [Q, x, ne, W, s, l];
    },
    // Remove cache if no need
    function(_, I) {
      var V = N(_, 3), F = V[2];
      (I || f) && Aa && Gr(F, {
        mark: gn,
        attachTo: h
      });
    },
    // Effect: Inject style here
    function(_) {
      var I = N(_, 4), V = I[0];
      I[1];
      var F = I[2], H = I[3];
      if (O && V !== vs) {
        var k = {
          mark: gn,
          prepend: E ? !1 : "queue",
          attachTo: h,
          priority: l
        }, J = typeof i == "function" ? i() : i;
        J && (k.csp = {
          nonce: J
        });
        var U = [], z = [];
        Object.keys(H).forEach(function(Q) {
          Q.startsWith("@layer") ? U.push(Q) : z.push(Q);
        }), U.forEach(function(Q) {
          _n(w0(H[Q]), "_layer-".concat(Q), P(P({}, k), {}, {
            prepend: !0
          }));
        });
        var W = _n(V, F, k);
        W[Gn] = C.instanceId, W.setAttribute(Cr, x), process.env.NODE_ENV !== "production" && W.setAttribute(ou, S.join("|")), z.forEach(function(Q) {
          _n(w0(H[Q]), "_effect-".concat(Q), k);
        });
      }
    }
  ), A = N(w, 3), M = A[0], T = A[1], D = A[2];
  return function(_) {
    var I;
    return !g || O || !m ? I = /* @__PURE__ */ d.createElement(rf, null) : I = /* @__PURE__ */ d.createElement("style", We({}, R(R({}, Cr, T), gn, D), {
      dangerouslySetInnerHTML: {
        __html: M
      }
    })), /* @__PURE__ */ d.createElement(d.Fragment, null, I, _);
  };
}
var af = function(t, n, r) {
  var a = N(t, 6), o = a[0], i = a[1], s = a[2], c = a[3], l = a[4], u = a[5], f = r || {}, v = f.plain;
  if (l)
    return null;
  var m = o, p = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return m = A0(o, i, s, p, v), c && Object.keys(c).forEach(function(h) {
    if (!n[h]) {
      n[h] = !0;
      var g = w0(c[h]), b = A0(g, i, "_effect-".concat(h), p, v);
      h.startsWith("@layer") ? m = b + m : m += b;
    }
  }), [u, s, m];
}, bs = "cssVar", of = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = Nn(Jr), f = u.cache.instanceId, v = u.container, m = s._tokenKey, p = [].concat(se(t.path), [r, l, m]), h = Ao(bs, p, function() {
    var g = n(), b = os(g, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: l
    }), y = N(b, 2), C = y[0], E = y[1], x = ps(p, E);
    return [C, E, x, r];
  }, function(g) {
    var b = N(g, 3), y = b[2];
    Aa && Gr(y, {
      mark: gn,
      attachTo: v
    });
  }, function(g) {
    var b = N(g, 3), y = b[1], C = b[2];
    if (y) {
      var E = _n(y, C, {
        mark: gn,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      E[Gn] = f, E.setAttribute(Cr, r);
    }
  });
  return h;
}, sf = function(t, n, r) {
  var a = N(t, 4), o = a[1], i = a[2], s = a[3], c = r || {}, l = c.plain;
  if (!o)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, v = A0(o, s, i, f, l);
  return [u, i, v];
};
R(R(R({}, ys, af), is, Du), bs, sf);
var kt = /* @__PURE__ */ (function() {
  function e(t, n) {
    Ft(this, e), R(this, "name", void 0), R(this, "style", void 0), R(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return $t(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function sr(e) {
  return e.notSplit = !0, e;
}
sr(["borderTop", "borderBottom"]), sr(["borderTop"]), sr(["borderBottom"]), sr(["borderLeft", "borderRight"]), sr(["borderLeft"]), sr(["borderRight"]);
var Io = /* @__PURE__ */ bo({});
function Cs(e) {
  return Z1(e) || X1(e) || Oo(e) || es();
}
function xn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Ss(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Cs(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = se(e) : s = P({}, e), r && n === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = Ss(s[o], i, n, r), s;
}
function vn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !xn(e, t.slice(0, -1)) ? e : Ss(e, t, n, r);
}
function lf(e) {
  return he(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ei(e) {
  return Array.isArray(e) ? [] : {};
}
var cf = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function vr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Ei(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var c = new Set(s), l = xn(a, i), u = Array.isArray(l);
      if (u || lf(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = xn(r, i);
          u ? r = vn(r, i, []) : (!f || he(f) !== "object") && (r = vn(r, i, Ei(l))), cf(l).forEach(function(v) {
            o([].concat(se(i), [v]), c);
          });
        }
      } else
        r = vn(r, i, l);
    }
    o([]);
  }), r;
}
function Es() {
}
let Mn = null;
function uf() {
  Mn = null, V1();
}
let ws = Es;
process.env.NODE_ENV !== "production" && (ws = (e, t, n) => {
  $e(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && uf();
});
const Yr = ws, xs = /* @__PURE__ */ d.createContext({}), Fn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = d.useContext(xs), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = Mn;
        Mn || (Mn = {}), Mn[e] = Mn[e] || [], Mn[e].includes(o || "") || Mn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Mn);
      } else
        process.env.NODE_ENV !== "production" && Yr(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = Es, e;
}, ff = /* @__PURE__ */ bo(void 0);
var df = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, vf = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, mf = P(P({}, vf), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Os = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, wi = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, mf),
  timePickerLocale: Object.assign({}, Os)
}, en = "${label} is not a valid ${type}", wr = {
  locale: "en",
  Pagination: df,
  DatePicker: wi,
  TimePicker: Os,
  Calendar: wi,
  global: {
    placeholder: "Please select",
    close: "Close"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: en,
        method: en,
        array: en,
        object: en,
        number: en,
        date: en,
        boolean: en,
        integer: en,
        float: en,
        regexp: en,
        email: en,
        url: en,
        hex: en
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, wr.Modal);
let x0 = [];
const xi = () => x0.reduce((e, t) => Object.assign(Object.assign({}, e), t), wr.Modal);
function gf(e) {
  if (e) {
    const t = Object.assign({}, e);
    return x0.push(t), xi(), () => {
      x0 = x0.filter((n) => n !== t), xi();
    };
  }
  Object.assign({}, wr.Modal);
}
const Do = /* @__PURE__ */ bo(void 0), To = (e, t) => {
  const n = d.useContext(Do), r = d.useMemo(() => {
    var o;
    const i = wr[e], s = (o = n?.[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), a = d.useMemo(() => {
    const o = n?.locale;
    return n?.exist && !o ? wr.locale : o;
  }, [n]);
  return [r, a];
}, Rs = "internalMark", Ps = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = Fn("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(r === Rs, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  d.useEffect(() => gf(t?.Modal), [t]);
  const a = d.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ d.createElement(Do.Provider, {
    value: a
  }, n);
};
process.env.NODE_ENV !== "production" && (Ps.displayName = "LocaleProvider");
const As = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Kr = Object.assign(Object.assign({}, As), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), Nt = Math.round;
function oa(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    r[a] = t(r[a] || 0, n[a] || "", a);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Oi = (e, t, n) => n === 0 ? e : e / 100;
function Tr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class ut {
  constructor(t) {
    R(this, "isValid", !0), R(this, "r", 0), R(this, "g", 0), R(this, "b", 0), R(this, "a", 1), R(this, "_h", void 0), R(this, "_s", void 0), R(this, "_l", void 0), R(this, "_v", void 0), R(this, "_max", void 0), R(this, "_min", void 0), R(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let a = function(o) {
        return r.startsWith(o);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : a("rgb") ? this.fromRgbString(r) : a("hsl") ? this.fromHslString(r) : (a("hsv") || a("hsb")) && this.fromHsvString(r);
    } else if (t instanceof ut)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Tr(t.r), this.g = Tr(t.g), this.b = Tr(t.b), this.a = typeof t.a == "number" ? Tr(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(o) {
      const i = o / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), a = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * a;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Nt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let a = this.getLightness() - t / 100;
    return a < 0 && (a = 0), this._c({
      h: n,
      s: r,
      l: a,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let a = this.getLightness() + t / 100;
    return a > 1 && (a = 1), this._c({
      h: n,
      s: r,
      l: a,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), a = n / 100, o = (s) => (r[s] - this[s]) * a + this[s], i = {
      r: Nt(o("r")),
      g: Nt(o("g")),
      b: Nt(o("b")),
      a: Nt(o("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), a = (o) => Nt((this[o] * this.a + n[o] * n.a * (1 - this.a)) / r);
    return this._c({
      r: a("r"),
      g: a("g"),
      b: a("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const a = (this.b || 0).toString(16);
    if (t += a.length === 2 ? a : "0" + a, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const o = Nt(this.a * 255).toString(16);
      t += o.length === 2 ? o : "0" + o;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = Nt(this.getSaturation() * 100), r = Nt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const a = this.clone();
    return a[t] = Tr(n, r), a;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(a, o) {
      return parseInt(n[a] + n[o || a], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof a == "number" ? a : 1, n <= 0) {
      const v = Nt(r * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let o = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (o = l, i = u) : c >= 1 && c < 2 ? (o = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (o = u, s = l) : c >= 5 && c < 6 && (o = l, s = u);
    const f = r - l / 2;
    this.r = Nt((o + f) * 255), this.g = Nt((i + f) * 255), this.b = Nt((s + f) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof a == "number" ? a : 1;
    const o = Nt(r * 255);
    if (this.r = o, this.g = o, this.b = o, n <= 0)
      return;
    const i = t / 60, s = Math.floor(i), c = i - s, l = Nt(r * (1 - n) * 255), u = Nt(r * (1 - n * c) * 255), f = Nt(r * (1 - n * (1 - c)) * 255);
    switch (s) {
      case 0:
        this.g = f, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = f;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = f, this.g = l;
        break;
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = oa(t, Oi);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = oa(t, Oi);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = oa(t, (r, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? Nt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var f0 = 2, Ri = 0.16, hf = 0.05, pf = 0.05, yf = 0.15, Ms = 5, Is = 4, bf = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function Pi(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - f0 * t : Math.round(e.h) + f0 * t : r = n ? Math.round(e.h) + f0 * t : Math.round(e.h) - f0 * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Ai(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Ri * t : t === Is ? r = e.s + Ri : r = e.s + hf * t, r > 1 && (r = 1), n && t === Ms && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Mi(e, t, n) {
  var r;
  return n ? r = e.v + pf * t : r = e.v - yf * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function qr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new ut(e), a = r.toHsv(), o = Ms; o > 0; o -= 1) {
    var i = new ut({
      h: Pi(a, o, !0),
      s: Ai(a, o, !0),
      v: Mi(a, o, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var s = 1; s <= Is; s += 1) {
    var c = new ut({
      h: Pi(a, s),
      s: Ai(a, s),
      v: Mi(a, s)
    });
    n.push(c);
  }
  return t.theme === "dark" ? bf.map(function(l) {
    var u = l.index, f = l.amount;
    return new ut(t.backgroundColor || "#141414").mix(n[u], f).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var ia = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Na = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Na.primary = Na[5];
var Fa = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Fa.primary = Fa[5];
var $a = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
$a.primary = $a[5];
var Va = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Va.primary = Va[5];
var La = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
La.primary = La[5];
var Ba = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Ba.primary = Ba[5];
var Ha = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ha.primary = Ha[5];
var ka = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ka.primary = ka[5];
var M0 = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
M0.primary = M0[5];
var za = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
za.primary = za[5];
var ja = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ja.primary = ja[5];
var Wa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Wa.primary = Wa[5];
var Ga = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ga.primary = Ga[5];
var sa = {
  red: Na,
  volcano: Fa,
  orange: $a,
  gold: Va,
  yellow: La,
  lime: Ba,
  green: Ha,
  cyan: ka,
  blue: M0,
  geekblue: za,
  purple: ja,
  magenta: Wa,
  grey: Ga
};
function Cf(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: n
}) {
  const {
    colorSuccess: r,
    colorWarning: a,
    colorError: o,
    colorInfo: i,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: l
  } = e, u = t(s), f = t(r), v = t(a), m = t(o), p = t(i), h = n(c, l), g = e.colorLink || e.colorInfo, b = t(g), y = new ut(m[1]).mix(new ut(m[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: p[1],
    colorInfoBgHover: p[2],
    colorInfoBorder: p[3],
    colorInfoBorderHover: p[4],
    colorInfoHover: p[4],
    colorInfo: p[6],
    colorInfoActive: p[7],
    colorInfoTextHover: p[8],
    colorInfoText: p[9],
    colorInfoTextActive: p[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new ut("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Sf = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function Ef(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, Sf(r));
}
const wf = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function xf(e) {
  return (e + 8) / e;
}
function Of(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: xf(n)
  }));
}
const Rf = (e) => {
  const t = Of(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), a = n[1], o = n[0], i = n[2], s = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(c * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function Pf(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const on = (e, t) => new ut(e).setA(t).toRgbString(), _r = (e, t) => new ut(e).darken(t).toHexString(), Af = (e) => {
  const t = qr(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Mf = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: on(r, 0.88),
    colorTextSecondary: on(r, 0.65),
    colorTextTertiary: on(r, 0.45),
    colorTextQuaternary: on(r, 0.25),
    colorFill: on(r, 0.15),
    colorFillSecondary: on(r, 0.06),
    colorFillTertiary: on(r, 0.04),
    colorFillQuaternary: on(r, 0.02),
    colorBgSolid: on(r, 1),
    colorBgSolidHover: on(r, 0.75),
    colorBgSolidActive: on(r, 0.95),
    colorBgLayout: _r(n, 4),
    colorBgContainer: _r(n, 0),
    colorBgElevated: _r(n, 0),
    colorBgSpotlight: on(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: _r(n, 15),
    colorBorderSecondary: _r(n, 6)
  };
};
function If(e) {
  ia.pink = ia.magenta, sa.pink = sa.magenta;
  const t = Object.keys(As).map((n) => {
    const r = e[n] === ia[n] ? sa[n] : qr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Cf(e, {
    generateColorPalettes: Af,
    generateNeutralColorPalettes: Mf
  })), Rf(e.fontSize)), Pf(e)), wf(e)), Ef(e));
}
const Ds = Pa(If), Ua = {
  token: Kr,
  override: {
    override: Kr
  },
  hashed: !0
}, Ts = /* @__PURE__ */ ot.createContext(Ua), Ka = "ant", _o = "anticon", Df = ["outlined", "borderless", "filled", "underlined"], Tf = (e, t) => t || (e ? `${Ka}-${e}` : Ka), cn = /* @__PURE__ */ d.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Tf,
  iconPrefixCls: _o
}), {
  Consumer: um
} = cn, Ii = {};
function _s(e) {
  const t = d.useContext(cn), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  } = t, o = t[e];
  return Object.assign(Object.assign({
    classNames: Ii,
    styles: Ii
  }, o), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: a
  });
}
const _f = `-ant-${Date.now()}-${Math.random()}`;
function Nf(e, t) {
  const n = {}, r = (i, s) => {
    let c = i.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, a = (i, s) => {
    const c = new ut(i), l = qr(c.toRgbString());
    n[`${s}-color`] = r(c), n[`${s}-color-disabled`] = l[1], n[`${s}-color-hover`] = l[4], n[`${s}-color-active`] = l[6], n[`${s}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = l[0], n[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new ut(t.primaryColor), s = qr(i.toRgbString());
    s.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(i, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (l) => l.setA(l.a * 0.12));
    const c = new ut(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function Ff(e, t) {
  const n = Nf(e, t);
  Ut() ? _n(n, `${_f}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Yr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const I0 = /* @__PURE__ */ d.createContext(!1), $f = ({
  children: e,
  disabled: t
}) => {
  const n = d.useContext(I0);
  return /* @__PURE__ */ d.createElement(I0.Provider, {
    value: t ?? n
  }, e);
}, xr = /* @__PURE__ */ d.createContext(void 0), Vf = ({
  children: e,
  size: t
}) => {
  const n = d.useContext(xr);
  return /* @__PURE__ */ d.createElement(xr.Provider, {
    value: t || n
  }, e);
};
function Lf() {
  const e = Nn(I0), t = Nn(xr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Ns = /* @__PURE__ */ $t(function e() {
  Ft(this, e);
}), Fs = "CALC_UNIT", Bf = new RegExp(Fs, "g");
function la(e) {
  return typeof e == "number" ? "".concat(e).concat(Fs) : e;
}
var Hf = /* @__PURE__ */ (function(e) {
  rr(n, e);
  var t = ar(n);
  function n(r, a) {
    var o;
    Ft(this, n), o = t.call(this), R(_e(o), "result", ""), R(_e(o), "unitlessCssVar", void 0), R(_e(o), "lowPriority", void 0);
    var i = he(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = la(r) : i === "string" && (o.result = r), o;
  }
  return $t(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(la(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(la(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(a) {
      return this.lowPriority || a ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(a) {
      var o = this, i = a || {}, s = i.unit, c = !0;
      return typeof s == "boolean" ? c = s : Array.from(this.unitlessCssVar).some(function(l) {
        return o.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(Bf, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})(Ns), kf = /* @__PURE__ */ (function(e) {
  rr(n, e);
  var t = ar(n);
  function n(r) {
    var a;
    return Ft(this, n), a = t.call(this), R(_e(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return $t(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof n ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof n ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
})(Ns), zf = function(t, n) {
  var r = t === "css" ? Hf : kf;
  return function(a) {
    return new r(a, n);
  };
}, Di = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Wt(e) {
  var t = d.useRef();
  t.current = e;
  var n = d.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Xr(e) {
  var t = d.useRef(!1), n = d.useState(e), r = N(n, 2), a = r[0], o = r[1];
  d.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, c) {
    c && t.current || o(s);
  }
  return [a, i];
}
function ca(e) {
  return e !== void 0;
}
function D0(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, s = Xr(function() {
    return ca(a) ? a : ca(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = N(s, 2), l = c[0], u = c[1], f = a !== void 0 ? a : l, v = i ? i(f) : f, m = Wt(o), p = Xr([f]), h = N(p, 2), g = h[0], b = h[1];
  hi(function() {
    var C = g[0];
    l !== C && m(l, C);
  }, [g]), hi(function() {
    ca(a) || u(a);
  }, [a]);
  var y = Wt(function(C, E) {
    u(C, E), b([f], E);
  });
  return [v, y];
}
function Ti(e, t, n, r) {
  var a = P({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(s) {
      var c = N(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && $e(!(a != null && a[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), a != null && a[l] || a != null && a[u]) {
        var f;
        (f = a[u]) !== null && f !== void 0 || (a[u] = a?.[l]);
      }
    });
  }
  var i = P(P({}, n), a);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var $s = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", qa = !0;
function qn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!$s)
    return Object.assign.apply(Object, [{}].concat(t));
  qa = !1;
  var r = {};
  return t.forEach(function(a) {
    if (he(a) === "object") {
      var o = Object.keys(a);
      o.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return a[i];
          }
        });
      });
    }
  }), qa = !0, r;
}
var _i = {};
function jf() {
}
var Wf = function(t) {
  var n, r = t, a = jf;
  return $s && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, s) {
      if (qa) {
        var c;
        (c = n) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), a = function(i, s) {
    var c;
    _i[i] = {
      global: Array.from(n),
      component: P(P({}, (c = _i[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function Ni(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(qn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Gf(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "max(".concat(r.map(function(o) {
        return mt(o);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "min(".concat(r.map(function(o) {
        return mt(o);
      }).join(","), ")");
    }
  };
}
var Uf = 1e3 * 60 * 10, Kf = /* @__PURE__ */ (function() {
  function e() {
    Ft(this, e), R(this, "map", /* @__PURE__ */ new Map()), R(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), R(this, "nextID", 0), R(this, "lastAccessBeat", /* @__PURE__ */ new Map()), R(this, "accessBeat", 0);
  }
  return $t(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var a = this.getCompositeKey(n);
      this.map.set(a, r), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), a = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, a = n.map(function(o) {
        return o && he(o) === "object" ? "obj_".concat(r.getObjectID(o)) : "".concat(he(o), "_").concat(o);
      });
      return a.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(a, o) {
          r - a > Uf && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), Fi = new Kf();
function qf(e, t) {
  return ot.useMemo(function() {
    var n = Fi.get(t);
    if (n)
      return n;
    var r = e();
    return Fi.set(t, r), r;
  }, t);
}
var Xf = function() {
  return {};
};
function Qf(e) {
  var t = e.useCSP, n = t === void 0 ? Xf : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(v, m, p, h) {
    var g = Array.isArray(v) ? v[0] : v;
    function b(w) {
      return "".concat(String(g)).concat(w.slice(0, 1).toUpperCase()).concat(w.slice(1));
    }
    var y = h?.unitless || {}, C = typeof s == "function" ? s(v) : {}, E = P(P({}, C), {}, R({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(w) {
      E[b(w)] = y[w];
    });
    var x = P(P({}, h), {}, {
      unitless: E,
      prefixToken: b
    }), S = u(v, m, p, x), O = l(g, p, x);
    return function(w) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, M = S(w, A), T = N(M, 2), D = T[1], _ = O(A), I = N(_, 2), V = I[0], F = I[1];
      return [V, D, F];
    };
  }
  function l(v, m, p) {
    var h = p.unitless, g = p.injectStyle, b = g === void 0 ? !0 : g, y = p.prefixToken, C = p.ignore, E = function(O) {
      var w = O.rootCls, A = O.cssVar, M = A === void 0 ? {} : A, T = r(), D = T.realToken;
      return of({
        path: [v],
        prefix: M.prefix,
        key: M.key,
        unitless: h,
        ignore: C,
        token: D,
        scope: w
      }, function() {
        var _ = Ni(v, D, m), I = Ti(v, D, _, {
          deprecatedTokens: p?.deprecatedTokens
        });
        return Object.keys(_).forEach(function(V) {
          I[y(V)] = I[V], delete I[V];
        }), I;
      }), null;
    }, x = function(O) {
      var w = r(), A = w.cssVar;
      return [function(M) {
        return b && A ? /* @__PURE__ */ ot.createElement(ot.Fragment, null, /* @__PURE__ */ ot.createElement(E, {
          rootCls: O,
          cssVar: A,
          component: v
        }), M) : M;
      }, A?.key];
    };
    return x;
  }
  function u(v, m, p) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = Array.isArray(v) ? v : [v, v], b = N(g, 1), y = b[0], C = g.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(x) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, O = r(), w = O.theme, A = O.realToken, M = O.hashId, T = O.token, D = O.cssVar, _ = a(), I = _.rootPrefixCls, V = _.iconPrefixCls, F = n(), H = D ? "css" : "js", k = qf(function() {
        var ne = /* @__PURE__ */ new Set();
        return D && Object.keys(h.unitless || {}).forEach(function(re) {
          ne.add(C0(re, D.prefix)), ne.add(C0(re, Di(y, D.prefix)));
        }), zf(H, ne);
      }, [H, y, D?.prefix]), J = Gf(H), U = J.max, z = J.min, W = {
        theme: w,
        token: T,
        hashId: M,
        nonce: function() {
          return F.nonce;
        },
        clientOnly: h.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof o == "function" && _a(P(P({}, W), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return o(T, {
          prefix: {
            rootPrefixCls: I,
            iconPrefixCls: V
          },
          csp: F
        });
      });
      var Q = _a(P(P({}, W), {}, {
        path: [C, x, V]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var ne = Wf(T), re = ne.token, be = ne.flush, de = Ni(y, A, p), we = ".".concat(x), ge = Ti(y, A, de, {
          deprecatedTokens: h.deprecatedTokens
        });
        D && de && he(de) === "object" && Object.keys(de).forEach(function(q) {
          de[q] = "var(".concat(C0(q, Di(y, D.prefix)), ")");
        });
        var xe = qn(re, {
          componentCls: we,
          prefixCls: x,
          iconCls: ".".concat(V),
          antCls: ".".concat(I),
          calc: k,
          // @ts-ignore
          max: U,
          // @ts-ignore
          min: z
        }, D ? de : ge), Y = m(xe, {
          hashId: M,
          prefixCls: x,
          rootPrefixCls: I,
          iconPrefixCls: V
        });
        be(y, ge);
        var j = typeof i == "function" ? i(xe, x, S, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : j, Y];
      });
      return [Q, M];
    };
  }
  function f(v, m, p) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = u(v, m, p, P({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), b = function(C) {
      var E = C.prefixCls, x = C.rootCls, S = x === void 0 ? E : x;
      return g(E, S), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), b;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const Jf = "5.29.3";
function ua(e) {
  return e >= 0 && e <= 255;
}
function d0(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new ut(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: c
  } = new ut(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - i * (1 - l)) / l), f = Math.round((r - s * (1 - l)) / l), v = Math.round((a - c * (1 - l)) / l);
    if (ua(u) && ua(f) && ua(v))
      return new ut({
        r: u,
        g: f,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new ut({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var Yf = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Vs(e) {
  const {
    override: t
  } = e, n = Yf(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Kr).forEach((v) => {
    delete r[v];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, i = 576, s = 768, c = 992, l = 1200, u = 1600;
  return a.motion === !1 && (a.motionDurationFast = "0s", a.motionDurationMid = "0s", a.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: d0(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: d0(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: d0(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 3,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: d0(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ut("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ut("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ut("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var $i = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Ls = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Zf = {
  motionBase: !0,
  motionUnit: !0
}, ed = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Bs = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = $i(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = Vs(i), o && Object.entries(o).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = $i(c, ["theme"]);
    let f = u;
    l && (f = Bs(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = f;
  }), i;
};
function Qn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = ot.useContext(Ts), o = `${Jf}-${t || ""}`, i = n || Ds, [s, c, l] = Iu(i, [Kr, e], {
    salt: o,
    override: r,
    getComputedToken: Bs,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Vs,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: Ls,
      ignore: Zf,
      preserve: ed
    }
  });
  return [i, l, t ? c : "", s, a];
}
const Xa = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, No = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), Fo = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), td = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), nd = (e, t, n, r) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = n ? `.${n}` : a, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return r !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [o]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [a]: i
    })
  };
}, Hs = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Fo()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: ks
} = Qf({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Nn(cn);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, a] = Qn();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: a
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = Nn(cn);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = td(e);
    return [r, {
      "&": r
    }, Hs((n = t?.prefix.iconPrefixCls) !== null && n !== void 0 ? n : _o)];
  },
  getCommonStyle: nd,
  getCompUnitless: () => Ls
}), rd = (e, t) => {
  const [n, r] = Qn();
  return _a({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => Hs(e));
}, ad = Object.assign({}, d), {
  useId: Vi
} = ad, od = () => "", id = typeof Vi > "u" ? od : Vi;
function sd(e, t, n) {
  var r, a;
  const o = Fn("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Ua), {
    hashed: (r = t?.hashed) !== null && r !== void 0 ? r : Ua.hashed,
    cssVar: t?.cssVar
  }) : t, c = id();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || c);
    process.env.NODE_ENV !== "production" && o(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return B0(() => {
    var l, u;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((p) => {
      f[p] = Object.assign(Object.assign({}, f[p]), e.components[p]);
    });
    const v = `css-var-${c.replace(/:/g, "")}`, m = ((l = i.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n?.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: f,
      cssVar: m
    });
  }, [i, s], (l, u) => l.some((f, v) => {
    const m = u[v];
    return !Oa(f, m, !0);
  }));
}
var ld = ["children"], zs = /* @__PURE__ */ d.createContext({});
function cd(e) {
  var t = e.children, n = bt(e, ld);
  return /* @__PURE__ */ d.createElement(zs.Provider, {
    value: n
  }, t);
}
var ud = /* @__PURE__ */ (function(e) {
  rr(n, e);
  var t = ar(n);
  function n() {
    return Ft(this, n), t.apply(this, arguments);
  }
  return $t(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(d.Component);
function fd(e) {
  var t = d.useReducer(function(s) {
    return s + 1;
  }, 0), n = N(t, 2), r = n[1], a = d.useRef(e), o = Wt(function() {
    return a.current;
  }), i = Wt(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, r();
  });
  return [o, i];
}
var jn = "none", v0 = "appear", m0 = "enter", g0 = "leave", Li = "none", mn = "prepare", mr = "start", gr = "active", $o = "end", js = "prepared";
function Bi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function dd(e, t) {
  var n = {
    animationend: Bi("Animation", "AnimationEnd"),
    transitionend: Bi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var vd = dd(Ut(), typeof window < "u" ? window : {}), Ws = {};
if (Ut()) {
  var md = document.createElement("div");
  Ws = md.style;
}
var h0 = {};
function Gs(e) {
  if (h0[e])
    return h0[e];
  var t = vd[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ws)
        return h0[e] = t[o], h0[e];
    }
  return "";
}
var Us = Gs("animationend"), Ks = Gs("transitionend"), qs = !!(Us && Ks), Hi = Us || "animationend", ki = Ks || "transitionend";
function zi(e, t) {
  if (!e) return null;
  if (he(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const gd = (function(e) {
  var t = Ne();
  function n(a) {
    a && (a.removeEventListener(ki, e), a.removeEventListener(Hi, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(ki, e), a.addEventListener(Hi, e), t.current = a);
  }
  return d.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var Xs = Ut() ? ic : Tn;
const hd = (function() {
  var e = d.useRef(null);
  function t() {
    Gt.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Gt(function() {
      a <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, a - 1);
    });
    e.current = o;
  }
  return d.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
});
var pd = [mn, mr, gr, $o], yd = [mn, js], Qs = !1, bd = !0;
function Js(e) {
  return e === gr || e === $o;
}
const Cd = (function(e, t, n) {
  var r = Xr(Li), a = N(r, 2), o = a[0], i = a[1], s = hd(), c = N(s, 2), l = c[0], u = c[1];
  function f() {
    i(mn, !0);
  }
  var v = t ? yd : pd;
  return Xs(function() {
    if (o !== Li && o !== $o) {
      var m = v.indexOf(o), p = v[m + 1], h = n(o);
      h === Qs ? i(p, !0) : p && l(function(g) {
        function b() {
          g.isCanceled() || i(p, !0);
        }
        h === !0 ? b() : Promise.resolve(h).then(b);
      });
    }
  }, [e, o]), d.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, o];
});
function Sd(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, s = i === void 0 ? !0 : i, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, f = r.motionLeaveImmediately, v = r.onAppearPrepare, m = r.onEnterPrepare, p = r.onLeavePrepare, h = r.onAppearStart, g = r.onEnterStart, b = r.onLeaveStart, y = r.onAppearActive, C = r.onEnterActive, E = r.onLeaveActive, x = r.onAppearEnd, S = r.onEnterEnd, O = r.onLeaveEnd, w = r.onVisibleChanged, A = Xr(), M = N(A, 2), T = M[0], D = M[1], _ = fd(jn), I = N(_, 2), V = I[0], F = I[1], H = Xr(null), k = N(H, 2), J = k[0], U = k[1], z = V(), W = Ne(!1), Q = Ne(null);
  function ne() {
    return n();
  }
  var re = Ne(!1);
  function be() {
    F(jn), U(null, !0);
  }
  var de = Wt(function(me) {
    var pe = V();
    if (pe !== jn) {
      var Oe = ne();
      if (!(me && !me.deadline && me.target !== Oe)) {
        var ie = re.current, Qe;
        pe === v0 && ie ? Qe = x?.(Oe, me) : pe === m0 && ie ? Qe = S?.(Oe, me) : pe === g0 && ie && (Qe = O?.(Oe, me)), ie && Qe !== !1 && be();
      }
    }
  }), we = gd(de), ge = N(we, 1), xe = ge[0], Y = function(pe) {
    switch (pe) {
      case v0:
        return R(R(R({}, mn, v), mr, h), gr, y);
      case m0:
        return R(R(R({}, mn, m), mr, g), gr, C);
      case g0:
        return R(R(R({}, mn, p), mr, b), gr, E);
      default:
        return {};
    }
  }, j = d.useMemo(function() {
    return Y(z);
  }, [z]), q = Cd(z, !e, function(me) {
    if (me === mn) {
      var pe = j[mn];
      return pe ? pe(ne()) : Qs;
    }
    if (Z in j) {
      var Oe;
      U(((Oe = j[Z]) === null || Oe === void 0 ? void 0 : Oe.call(j, ne(), null)) || null);
    }
    return Z === gr && z !== jn && (xe(ne()), u > 0 && (clearTimeout(Q.current), Q.current = setTimeout(function() {
      de({
        deadline: !0
      });
    }, u))), Z === js && be(), bd;
  }), $ = N(q, 2), K = $[0], Z = $[1], ve = Js(Z);
  re.current = ve;
  var ce = Ne(null);
  Xs(function() {
    if (!(W.current && ce.current === t)) {
      D(t);
      var me = W.current;
      W.current = !0;
      var pe;
      !me && t && s && (pe = v0), me && t && o && (pe = m0), (me && !t && l || !me && f && !t && l) && (pe = g0);
      var Oe = Y(pe);
      pe && (e || Oe[mn]) ? (F(pe), K()) : F(jn), ce.current = t;
    }
  }, [t]), Tn(function() {
    // Cancel appear
    (z === v0 && !s || // Cancel enter
    z === m0 && !o || // Cancel leave
    z === g0 && !l) && F(jn);
  }, [s, o, l]), Tn(function() {
    return function() {
      W.current = !1, clearTimeout(Q.current);
    };
  }, []);
  var ue = d.useRef(!1);
  Tn(function() {
    T && (ue.current = !0), T !== void 0 && z === jn && ((ue.current || T) && w?.(T), ue.current = !0);
  }, [T, z]);
  var Ce = J;
  return j[mn] && Z === mr && (Ce = P({
    transition: "none"
  }, Ce)), [z, Z, Ce, T ?? t];
}
function Ed(e) {
  var t = e;
  he(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ d.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, c = a.removeOnLeave, l = c === void 0 ? !0 : c, u = a.forceRender, f = a.children, v = a.motionName, m = a.leavedClassName, p = a.eventProps, h = d.useContext(zs), g = h.motion, b = n(a, g), y = Ne(), C = Ne();
    function E() {
      try {
        return y.current instanceof HTMLElement ? y.current : b0(C.current);
      } catch {
        return null;
      }
    }
    var x = Sd(b, s, E, a), S = N(x, 4), O = S[0], w = S[1], A = S[2], M = S[3], T = d.useRef(M);
    M && (T.current = !0);
    var D = d.useCallback(function(k) {
      y.current = k, So(o, k);
    }, [o]), _, I = P(P({}, p), {}, {
      visible: s
    });
    if (!f)
      _ = null;
    else if (O === jn)
      M ? _ = f(P({}, I), D) : !l && T.current && m ? _ = f(P(P({}, I), {}, {
        className: m
      }), D) : u || !l && !m ? _ = f(P(P({}, I), {}, {
        style: {
          display: "none"
        }
      }), D) : _ = null;
    else {
      var V;
      w === mn ? V = "prepare" : Js(w) ? V = "active" : w === mr && (V = "start");
      var F = zi(v, "".concat(O, "-").concat(V));
      _ = f(P(P({}, I), {}, {
        className: Xe(zi(v, O), R(R({}, F, F && V), v, typeof v == "string")),
        style: A
      }), D);
    }
    if (/* @__PURE__ */ d.isValidElement(_) && k0(_)) {
      var H = wo(_);
      H || (_ = /* @__PURE__ */ d.cloneElement(_, {
        ref: D
      }));
    }
    return /* @__PURE__ */ d.createElement(ud, {
      ref: C
    }, _);
  });
  return r.displayName = "CSSMotion", r;
}
const Vo = Ed(qs);
var Qa = "add", Ja = "keep", Ya = "remove", fa = "removed";
function wd(e) {
  var t;
  return e && he(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, P(P({}, t), {}, {
    key: String(t.key)
  });
}
function Za() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(wd);
}
function xd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = Za(e), i = Za(t);
  o.forEach(function(l) {
    for (var u = !1, f = r; f < a; f += 1) {
      var v = i[f];
      if (v.key === l.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(m) {
          return P(P({}, m), {}, {
            status: Qa
          });
        })), r = f), n.push(P(P({}, v), {}, {
          status: Ja
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(P(P({}, l), {}, {
      status: Ya
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(l) {
    return P(P({}, l), {}, {
      status: Qa
    });
  })));
  var s = {};
  n.forEach(function(l) {
    var u = l.key;
    s[u] = (s[u] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(u) {
      var f = u.key, v = u.status;
      return f !== l || v !== Ya;
    }), n.forEach(function(u) {
      u.key === l && (u.status = Ja);
    });
  }), n;
}
var Od = ["component", "children", "onVisibleChanged", "onAllRemoved"], Rd = ["status"], Pd = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Ad(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vo, n = /* @__PURE__ */ (function(r) {
    rr(o, r);
    var a = ar(o);
    function o() {
      var i;
      Ft(this, o);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = a.call.apply(a, [this].concat(c)), R(_e(i), "state", {
        keyEntities: []
      }), R(_e(i), "removeKey", function(u) {
        i.setState(function(f) {
          var v = f.keyEntities.map(function(m) {
            return m.key !== u ? m : P(P({}, m), {}, {
              status: fa
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var f = i.state.keyEntities, v = f.filter(function(m) {
            var p = m.status;
            return p !== fa;
          }).length;
          v === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return $t(o, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, v = l.onVisibleChanged;
        l.onAllRemoved;
        var m = bt(l, Od), p = u || d.Fragment, h = {};
        return Pd.forEach(function(g) {
          h[g] = m[g], delete m[g];
        }), delete m.keys, /* @__PURE__ */ d.createElement(p, m, c.map(function(g, b) {
          var y = g.status, C = bt(g, Rd), E = y === Qa || y === Ja;
          return /* @__PURE__ */ d.createElement(t, We({}, h, {
            key: C.key,
            visible: E,
            eventProps: C,
            onVisibleChanged: function(S) {
              v?.(S, {
                key: C.key
              }), S || s.removeKey(C.key);
            }
          }), function(x, S) {
            return f(P(P({}, x), {}, {
              index: b
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, f = Za(l), v = xd(u, f);
        return {
          keyEntities: v.filter(function(m) {
            var p = u.find(function(h) {
              var g = h.key;
              return m.key === g;
            });
            return !(p && p.status === fa && m.status === Ya);
          })
        };
      }
    }]), o;
  })(d.Component);
  return R(n, "defaultProps", {
    component: "div"
  }), n;
}
Ad(qs);
const eo = /* @__PURE__ */ d.createContext(!0);
process.env.NODE_ENV !== "production" && (eo.displayName = "MotionCacheContext");
function Md(e) {
  const t = d.useContext(eo), {
    children: n
  } = e, [, r] = Qn(), {
    motion: a
  } = r, o = d.useRef(!1);
  return o.current || (o.current = t !== a), o.current ? /* @__PURE__ */ d.createElement(eo.Provider, {
    value: a
  }, /* @__PURE__ */ d.createElement(cd, {
    motion: a
  }, n)) : n;
}
const Ys = /* @__PURE__ */ d.memo(({
  dropdownMatchSelectWidth: e
}) => (Fn("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (Ys.displayName = "PropWarning");
const Id = process.env.NODE_ENV !== "production" ? Ys : () => null;
var Dd = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let to = !1;
process.env.NODE_ENV;
const Td = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Zs;
function _d() {
  return Zs || Ka;
}
function Nd(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Fd = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (Zs = t), r && Nd(r) && (process.env.NODE_ENV !== "production" && Yr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Ff(_d(), r));
}, $d = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    form: i,
    locale: s,
    componentSize: c,
    direction: l,
    space: u,
    splitter: f,
    virtual: v,
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: p,
    popupOverflow: h,
    legacyLocale: g,
    parentContext: b,
    iconPrefixCls: y,
    theme: C,
    componentDisabled: E,
    segmented: x,
    statistic: S,
    spin: O,
    calendar: w,
    carousel: A,
    cascader: M,
    collapse: T,
    typography: D,
    checkbox: _,
    descriptions: I,
    divider: V,
    drawer: F,
    skeleton: H,
    steps: k,
    image: J,
    layout: U,
    list: z,
    mentions: W,
    modal: Q,
    progress: ne,
    result: re,
    slider: be,
    breadcrumb: de,
    menu: we,
    pagination: ge,
    input: xe,
    textArea: Y,
    empty: j,
    badge: q,
    radio: $,
    rate: K,
    switch: Z,
    transfer: ve,
    avatar: ce,
    message: ue,
    tag: Ce,
    table: me,
    card: pe,
    tabs: Oe,
    timeline: ie,
    timePicker: Qe,
    upload: ze,
    notification: Le,
    tree: Ie,
    colorPicker: Ae,
    datePicker: Be,
    rangePicker: Ve,
    flex: it,
    wave: st,
    dropdown: Fe,
    warning: Me,
    tour: Ct,
    tooltip: Ge,
    popover: ct,
    popconfirm: lt,
    floatButton: Vt,
    floatButtonGroup: wt,
    variant: Mt,
    inputNumber: It,
    treeSelect: ft
  } = e, qe = d.useCallback((ae, He) => {
    const {
      prefixCls: Ye
    } = e;
    if (He)
      return He;
    const tt = Ye || b.getPrefixCls("");
    return ae ? `${tt}-${ae}` : tt;
  }, [b.getPrefixCls, e.prefixCls]), De = y || b.iconPrefixCls || _o, rt = n || b.csp;
  rd(De, rt);
  const Je = sd(C, b.theme, {
    prefixCls: qe("")
  });
  process.env.NODE_ENV !== "production" && (to = to || !!Je);
  const fe = {
    csp: rt,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: s || g,
    direction: l,
    space: u,
    splitter: f,
    virtual: v,
    popupMatchSelectWidth: p ?? m,
    popupOverflow: h,
    getPrefixCls: qe,
    iconPrefixCls: De,
    theme: Je,
    segmented: x,
    statistic: S,
    spin: O,
    calendar: w,
    carousel: A,
    cascader: M,
    collapse: T,
    typography: D,
    checkbox: _,
    descriptions: I,
    divider: V,
    drawer: F,
    skeleton: H,
    steps: k,
    image: J,
    input: xe,
    textArea: Y,
    layout: U,
    list: z,
    mentions: W,
    modal: Q,
    progress: ne,
    result: re,
    slider: be,
    breadcrumb: de,
    menu: we,
    pagination: ge,
    empty: j,
    badge: q,
    radio: $,
    rate: K,
    switch: Z,
    transfer: ve,
    avatar: ce,
    message: ue,
    tag: Ce,
    table: me,
    card: pe,
    tabs: Oe,
    timeline: ie,
    timePicker: Qe,
    upload: ze,
    notification: Le,
    tree: Ie,
    colorPicker: Ae,
    datePicker: Be,
    rangePicker: Ve,
    flex: it,
    wave: st,
    dropdown: Fe,
    warning: Me,
    tour: Ct,
    tooltip: Ge,
    popover: ct,
    popconfirm: lt,
    floatButton: Vt,
    floatButtonGroup: wt,
    variant: Mt,
    inputNumber: It,
    treeSelect: ft
  };
  process.env.NODE_ENV !== "production" && Fn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ee = Object.assign({}, b);
  Object.keys(fe).forEach((ae) => {
    fe[ae] !== void 0 && (Ee[ae] = fe[ae]);
  }), Td.forEach((ae) => {
    const He = e[ae];
    He && (Ee[ae] = He);
  }), typeof r < "u" && (Ee.button = Object.assign({
    autoInsertSpace: r
  }, Ee.button));
  const Ke = B0(() => Ee, Ee, (ae, He) => {
    const Ye = Object.keys(ae), tt = Object.keys(He);
    return Ye.length !== tt.length || Ye.some((Ue) => ae[Ue] !== He[Ue]);
  }), {
    layer: ee
  } = d.useContext(Jr), B = d.useMemo(() => ({
    prefixCls: De,
    csp: rt,
    layer: ee ? "antd" : void 0
  }), [De, rt, ee]);
  let L = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Id, {
    dropdownMatchSelectWidth: m
  }), t);
  const G = d.useMemo(() => {
    var ae, He, Ye, tt;
    return vr(((ae = wr.Form) === null || ae === void 0 ? void 0 : ae.defaultValidateMessages) || {}, ((Ye = (He = Ke.locale) === null || He === void 0 ? void 0 : He.Form) === null || Ye === void 0 ? void 0 : Ye.defaultValidateMessages) || {}, ((tt = Ke.form) === null || tt === void 0 ? void 0 : tt.validateMessages) || {}, i?.validateMessages || {});
  }, [Ke, i?.validateMessages]);
  Object.keys(G).length > 0 && (L = /* @__PURE__ */ d.createElement(ff.Provider, {
    value: G
  }, L)), s && (L = /* @__PURE__ */ d.createElement(Ps, {
    locale: s,
    _ANT_MARK__: Rs
  }, L)), L = /* @__PURE__ */ d.createElement(Io.Provider, {
    value: B
  }, L), c && (L = /* @__PURE__ */ d.createElement(Vf, {
    size: c
  }, L)), L = /* @__PURE__ */ d.createElement(Md, null, L);
  const le = d.useMemo(() => {
    const ae = Je || {}, {
      algorithm: He,
      token: Ye,
      components: tt,
      cssVar: Ue
    } = ae, Dt = Dd(ae, ["algorithm", "token", "components", "cssVar"]), dt = He && (!Array.isArray(He) || He.length > 0) ? Pa(He) : Ds, Tt = {};
    Object.entries(tt || {}).forEach(([gt, Ot]) => {
      const X = Object.assign({}, Ot);
      "algorithm" in X && (X.algorithm === !0 ? X.theme = dt : (Array.isArray(X.algorithm) || typeof X.algorithm == "function") && (X.theme = Pa(X.algorithm)), delete X.algorithm), Tt[gt] = X;
    });
    const zt = Object.assign(Object.assign({}, Kr), Ye);
    return Object.assign(Object.assign({}, Dt), {
      theme: dt,
      token: zt,
      components: Tt,
      override: Object.assign({
        override: zt
      }, Tt),
      cssVar: Ue
    });
  }, [Je]);
  return C && (L = /* @__PURE__ */ d.createElement(Ts.Provider, {
    value: le
  }, L)), Ke.warning && (L = /* @__PURE__ */ d.createElement(xs.Provider, {
    value: Ke.warning
  }, L)), E !== void 0 && (L = /* @__PURE__ */ d.createElement($f, {
    disabled: E
  }, L)), /* @__PURE__ */ d.createElement(cn.Provider, {
    value: Ke
  }, L);
}, or = (e) => {
  const t = d.useContext(cn), n = d.useContext(Do);
  return /* @__PURE__ */ d.createElement($d, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
or.ConfigContext = cn;
or.SizeContext = xr;
or.config = Fd;
or.useConfig = Lf;
Object.defineProperty(or, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Yr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), xr)
});
process.env.NODE_ENV !== "production" && (or.displayName = "ConfigProvider");
function el(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Vd(e) {
  return el(e) instanceof ShadowRoot;
}
function T0(e) {
  return Vd(e) ? el(e) : null;
}
function Ld(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Bd(e, t) {
  $e(e, "[@ant-design/icons] ".concat(t));
}
function ji(e) {
  return he(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (he(e.icon) === "object" || typeof e.icon == "function");
}
function Wi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return n === "class" ? (t.className = r, delete t.class) : (delete t[n], t[Ld(n)] = r), t;
  }, {});
}
function no(e, t, n) {
  return n ? /* @__PURE__ */ ot.createElement(e.tag, P(P({
    key: t
  }, Wi(e.attrs)), n), (e.children || []).map(function(r, a) {
    return no(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ ot.createElement(e.tag, P({
    key: t
  }, Wi(e.attrs)), (e.children || []).map(function(r, a) {
    return no(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function tl(e) {
  return qr(e)[0];
}
function nl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Hd = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, kd = function(t) {
  var n = Nn(Io), r = n.csp, a = n.prefixCls, o = n.layer, i = Hd;
  a && (i = i.replace(/anticon/g, a)), o && (i = "@layer ".concat(o, ` {
`).concat(i, `
}`)), Tn(function() {
    var s = t.current, c = T0(s);
    _n(i, "@ant-design-icons", {
      prepend: !o,
      csp: r,
      attachTo: c
    });
  }, []);
}, zd = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Lr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function jd(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Lr.primaryColor = t, Lr.secondaryColor = n || tl(t), Lr.calculated = !!n;
}
function Wd() {
  return P({}, Lr);
}
var Pr = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, c = bt(t, zd), l = d.useRef(), u = Lr;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || tl(i)
  }), kd(l), Bd(ji(n), "icon should be icon definiton, but got ".concat(n)), !ji(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = P(P({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), no(f.icon, "svg-".concat(f.name), P(P({
    className: r,
    onClick: a,
    style: o,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
Pr.displayName = "IconReact";
Pr.getTwoToneColors = Wd;
Pr.setTwoToneColors = jd;
function rl(e) {
  var t = nl(e), n = N(t, 2), r = n[0], a = n[1];
  return Pr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Gd() {
  var e = Pr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Ud = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
rl(M0.primary);
var $n = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = bt(e, Ud), u = d.useContext(Io), f = u.prefixCls, v = f === void 0 ? "anticon" : f, m = u.rootClassName, p = Xe(m, v, R(R({}, "".concat(v, "-").concat(r.name), !!r.name), "".concat(v, "-spin"), !!a || r.name === "loading"), n), h = i;
  h === void 0 && s && (h = -1);
  var g = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, b = nl(c), y = N(b, 2), C = y[0], E = y[1];
  return /* @__PURE__ */ d.createElement("span", We({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: h,
    onClick: s,
    className: p
  }), /* @__PURE__ */ d.createElement(Pr, {
    icon: r,
    primaryColor: C,
    secondaryColor: E,
    style: g
  }));
});
$n.displayName = "AntdIcon";
$n.getTwoToneColor = Gd;
$n.setTwoToneColor = rl;
var Kd = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, qd = function(t, n) {
  return /* @__PURE__ */ d.createElement($n, We({}, t, {
    ref: n,
    icon: Kd
  }));
}, al = /* @__PURE__ */ d.forwardRef(qd);
process.env.NODE_ENV !== "production" && (al.displayName = "CloseCircleFilled");
var Xd = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Qd = function(t, n) {
  return /* @__PURE__ */ d.createElement($n, We({}, t, {
    ref: n,
    icon: Xd
  }));
}, ol = /* @__PURE__ */ d.forwardRef(Qd);
process.env.NODE_ENV !== "production" && (ol.displayName = "CloseOutlined");
var Jd = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, Yd = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Zd = "".concat(Jd, " ").concat(Yd).split(/[\s\n]+/), e2 = "aria-", t2 = "data-";
function Gi(e, t) {
  return e.indexOf(t) === 0;
}
function _0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = P({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || Gi(a, e2)) || // Data
    n.data && Gi(a, t2) || // Attr
    n.attr && Zd.includes(a)) && (r[a] = e[a]);
  }), r;
}
const n2 = (e) => {
  const [, , , , t] = Qn();
  return t ? `${e}-css-var` : "";
};
var Pe = {
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * N
   */
  N: 78,
  /**
   * P
   */
  P: 80,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224
}, r2 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, a2 = function(t, n) {
  return /* @__PURE__ */ d.createElement($n, We({}, t, {
    ref: n,
    icon: r2
  }));
}, il = /* @__PURE__ */ d.forwardRef(a2);
process.env.NODE_ENV !== "production" && (il.displayName = "LoadingOutlined");
const sl = /* @__PURE__ */ ot.createContext(void 0);
process.env.NODE_ENV !== "production" && (sl.displayName = "zIndexContext");
const In = 100, o2 = 10, i2 = In * o2, s2 = i2 + In, ll = {
  Modal: In,
  Drawer: In,
  Popover: In,
  Popconfirm: In,
  Tooltip: In,
  Tour: In,
  FloatButton: In
}, l2 = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function c2(e) {
  return e in ll;
}
const cl = (e, t) => {
  const [, n] = Qn(), r = ot.useContext(sl), a = c2(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    ll[e] : i += l2[e], o = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = Fn(e), s = n.zIndexPopupBase + s2, c = o[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
};
function ul(e, t) {
  this.v = e, this.k = t;
}
function Ht(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch {
    a = 0;
  }
  Ht = function(i, s, c, l) {
    function u(f, v) {
      Ht(i, f, function(m) {
        return this._invoke(f, v, m);
      });
    }
    s ? a ? a(i, s, {
      value: c,
      enumerable: !l,
      configurable: !l,
      writable: !l
    }) : i[s] = c : (u("next", 0), u("throw", 1), u("return", 2));
  }, Ht(e, t, n, r);
}
function Lo() {
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", a = n.toStringTag || "@@toStringTag";
  function o(m, p, h, g) {
    var b = p && p.prototype instanceof s ? p : s, y = Object.create(b.prototype);
    return Ht(y, "_invoke", (function(C, E, x) {
      var S, O, w, A = 0, M = x || [], T = !1, D = {
        p: 0,
        n: 0,
        v: e,
        a: _,
        f: _.bind(e, 4),
        d: function(V, F) {
          return S = V, O = 0, w = e, D.n = F, i;
        }
      };
      function _(I, V) {
        for (O = I, w = V, t = 0; !T && A && !F && t < M.length; t++) {
          var F, H = M[t], k = D.p, J = H[2];
          I > 3 ? (F = J === V) && (w = H[(O = H[4]) ? 5 : (O = 3, 3)], H[4] = H[5] = e) : H[0] <= k && ((F = I < 2 && k < H[1]) ? (O = 0, D.v = V, D.n = H[1]) : k < J && (F = I < 3 || H[0] > V || V > J) && (H[4] = I, H[5] = V, D.n = J, O = 0));
        }
        if (F || I > 1) return i;
        throw T = !0, V;
      }
      return function(I, V, F) {
        if (A > 1) throw TypeError("Generator is already running");
        for (T && V === 1 && _(V, F), O = V, w = F; (t = O < 2 ? e : w) || !T; ) {
          S || (O ? O < 3 ? (O > 1 && (D.n = -1), _(O, w)) : D.n = w : D.v = w);
          try {
            if (A = 2, S) {
              if (O || (I = "next"), t = S[I]) {
                if (!(t = t.call(S, w))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                w = t.value, O < 2 && (O = 0);
              } else O === 1 && (t = S.return) && t.call(S), O < 2 && (w = TypeError("The iterator does not provide a '" + I + "' method"), O = 1);
              S = e;
            } else if ((t = (T = D.n < 0) ? w : C.call(E, D)) !== i) break;
          } catch (H) {
            S = e, O = 1, w = H;
          } finally {
            A = 1;
          }
        }
        return {
          value: t,
          done: T
        };
      };
    })(m, h, g), !0), y;
  }
  var i = {};
  function s() {
  }
  function c() {
  }
  function l() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (Ht(t = {}, r, function() {
    return this;
  }), t), f = l.prototype = s.prototype = Object.create(u);
  function v(m) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(m, l) : (m.__proto__ = l, Ht(m, a, "GeneratorFunction")), m.prototype = Object.create(f), m;
  }
  return c.prototype = l, Ht(f, "constructor", l), Ht(l, "constructor", c), c.displayName = "GeneratorFunction", Ht(l, a, "GeneratorFunction"), Ht(f), Ht(f, a, "Generator"), Ht(f, r, function() {
    return this;
  }), Ht(f, "toString", function() {
    return "[object Generator]";
  }), (Lo = function() {
    return {
      w: o,
      m: v
    };
  })();
}
function N0(e, t) {
  function n(a, o, i, s) {
    try {
      var c = e[a](o), l = c.value;
      return l instanceof ul ? t.resolve(l.v).then(function(u) {
        n("next", u, i, s);
      }, function(u) {
        n("throw", u, i, s);
      }) : t.resolve(l).then(function(u) {
        c.value = u, i(c);
      }, function(u) {
        return n("throw", u, i, s);
      });
    } catch (u) {
      s(u);
    }
  }
  var r;
  this.next || (Ht(N0.prototype), Ht(N0.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Ht(this, "_invoke", function(a, o, i) {
    function s() {
      return new t(function(c, l) {
        n(a, i, c, l);
      });
    }
    return r = r ? r.then(s, s) : s();
  }, !0);
}
function fl(e, t, n, r, a) {
  return new N0(Lo().w(e, t, n, r), a || Promise);
}
function u2(e, t, n, r, a) {
  var o = fl(e, t, n, r, a);
  return o.next().then(function(i) {
    return i.done ? i.value : o.next();
  });
}
function f2(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function a() {
    for (; n.length; ) if ((r = n.pop()) in t) return a.value = r, a.done = !1, a;
    return a.done = !0, a;
  };
}
function Ui(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(he(e) + " is not iterable");
}
function un() {
  var e = Lo(), t = e.m(un), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function r(i) {
    var s = typeof i == "function" && i.constructor;
    return !!s && (s === n || (s.displayName || s.name) === "GeneratorFunction");
  }
  var a = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function o(i) {
    var s, c;
    return function(l) {
      s || (s = {
        stop: function() {
          return c(l.a, 2);
        },
        catch: function() {
          return l.v;
        },
        abrupt: function(f, v) {
          return c(l.a, a[f], v);
        },
        delegateYield: function(f, v, m) {
          return s.resultName = v, c(l.d, Ui(f), m);
        },
        finish: function(f) {
          return c(l.f, f);
        }
      }, c = function(f, v, m) {
        l.p = s.prev, l.n = s.next;
        try {
          return f(v, m);
        } finally {
          s.next = l.n;
        }
      }), s.resultName && (s[s.resultName] = l.v, s.resultName = void 0), s.sent = l.v, s.next = l.n;
      try {
        return i.call(this, s);
      } finally {
        l.p = s.prev, l.n = s.next;
      }
    };
  }
  return (un = function() {
    return {
      wrap: function(c, l, u, f) {
        return e.w(o(c), l, u, f && f.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(c, l) {
        return new ul(c, l);
      },
      AsyncIterator: N0,
      async: function(c, l, u, f, v) {
        return (r(l) ? fl : u2)(o(c), l, u, f, v);
      },
      keys: f2,
      values: Ui
    };
  })();
}
function Ki(e, t, n, r, a, o, i) {
  try {
    var s = e[o](i), c = s.value;
  } catch (l) {
    return void n(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Zr(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(c) {
        Ki(o, r, a, i, s, "next", c);
      }
      function s(c) {
        Ki(o, r, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
const d2 = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function K0(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const v2 = (function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i)
        return !0;
    }
  }
  return !1;
}), m2 = (e) => {
  const t = ot.useContext(xr);
  return ot.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, dl = /* @__PURE__ */ d.createContext(null), g2 = (e, t) => {
  const n = d.useContext(dl), r = d.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = n, s = a === "vertical" ? "-vertical-" : "-";
    return Xe(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: o,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n?.compactSize,
    compactDirection: n?.compactDirection,
    compactItemClassnames: r
  };
}, h2 = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ d.createElement(dl.Provider, {
    value: null
  }, t);
}, p2 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), y2 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), vl = (e, t, n, r, a = !1) => {
  const o = a ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, p2(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, y2(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, b2 = new kt("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), C2 = new kt("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), S2 = new kt("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), E2 = new kt("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), w2 = new kt("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), x2 = new kt("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), O2 = new kt("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), R2 = new kt("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), P2 = {
  "move-up": {
    inKeyframes: O2,
    outKeyframes: R2
  },
  "move-down": {
    inKeyframes: b2,
    outKeyframes: C2
  },
  "move-left": {
    inKeyframes: S2,
    outKeyframes: E2
  },
  "move-right": {
    inKeyframes: w2,
    outKeyframes: x2
  }
}, qi = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = P2[t];
  return [vl(r, a, o, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, ml = new kt("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), gl = new kt("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), hl = new kt("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), pl = new kt("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), A2 = new kt("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), M2 = new kt("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), I2 = new kt("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), D2 = new kt("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), T2 = {
  "slide-up": {
    inKeyframes: ml,
    outKeyframes: gl
  },
  "slide-down": {
    inKeyframes: hl,
    outKeyframes: pl
  },
  "slide-left": {
    inKeyframes: A2,
    outKeyframes: M2
  },
  "slide-right": {
    inKeyframes: I2,
    outKeyframes: D2
  }
}, Xi = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = T2[t];
  return [vl(r, a, o, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
function _2(e, t, n, r) {
  const {
    focusElCls: a,
    focus: o,
    borderElCls: i
  } = n, s = i ? "> *" : "", c = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [c]: {
        zIndex: 3
      }
    }, a ? {
      [`&${a}`]: {
        zIndex: 3
      }
    } : {}), {
      [`&[disabled] ${s}`]: {
        zIndex: 0
      }
    })
  };
}
function N2(e, t, n) {
  const {
    borderElCls: r
  } = n, a = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function F2(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, {
    componentCls: r
  } = t, a = r || n, o = `${a}-compact`;
  return {
    [o]: Object.assign(Object.assign({}, _2(e, o, t, a)), N2(a, o, t))
  };
}
var yl = /* @__PURE__ */ d.createContext(null), Qi = [];
function $2(e, t) {
  var n = d.useState(function() {
    if (!Ut())
      return null;
    var p = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && p.setAttribute("data-debug", t), p;
  }), r = N(n, 1), a = r[0], o = d.useRef(!1), i = d.useContext(yl), s = d.useState(Qi), c = N(s, 2), l = c[0], u = c[1], f = i || (o.current ? void 0 : function(p) {
    u(function(h) {
      var g = [p].concat(se(h));
      return g;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function m() {
    var p;
    (p = a.parentElement) === null || p === void 0 || p.removeChild(a), o.current = !1;
  }
  return yt(function() {
    return e ? i ? i(v) : v() : m(), m;
  }, [e]), yt(function() {
    l.length && (l.forEach(function(p) {
      return p();
    }), u(Qi));
  }, [l]), [a, f];
}
function V2(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var a, o;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), c = parseInt(s.width, 10), l = parseInt(s.height, 10);
    try {
      var u = c ? "width: ".concat(s.width, ";") : "", f = l ? "height: ".concat(s.height, ";") : "";
      _n(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(f, `
}`), t);
    } catch (p) {
      console.error(p), a = c, o = l;
    }
  }
  document.body.appendChild(n);
  var v = e && a && !isNaN(a) ? a : n.offsetWidth - n.clientWidth, m = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), Gr(t), {
    width: v,
    height: m
  };
}
function L2(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : V2(e);
}
function B2() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var H2 = "rc-util-locker-".concat(Date.now()), Ji = 0;
function k2(e) {
  var t = !!e, n = d.useState(function() {
    return Ji += 1, "".concat(H2, "_").concat(Ji);
  }), r = N(n, 1), a = r[0];
  yt(function() {
    if (t) {
      var o = L2(document.body).width, i = B2();
      _n(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      Gr(a);
    return function() {
      Gr(a);
    };
  }, [t, a]);
}
var z2 = !1;
function j2(e) {
  return z2;
}
var Yi = function(t) {
  return t === !1 ? !1 : !Ut() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Bo = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, c = e.children, l = d.useState(n), u = N(l, 2), f = u[0], v = u[1], m = f || n;
  process.env.NODE_ENV !== "production" && $e(Ut() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), d.useEffect(function() {
    (s || n) && v(n);
  }, [n, s]);
  var p = d.useState(function() {
    return Yi(a);
  }), h = N(p, 2), g = h[0], b = h[1];
  d.useEffect(function() {
    var D = Yi(a);
    b(D ?? null);
  });
  var y = $2(m && !g, o), C = N(y, 2), E = C[0], x = C[1], S = g ?? E;
  k2(r && n && Ut() && (S === E || S === document.body));
  var O = null;
  if (c && k0(c) && t) {
    var w = c;
    O = w.ref;
  }
  var A = H0(O, t);
  if (!m || !Ut() || g === void 0)
    return null;
  var M = S === !1 || j2(), T = c;
  return t && (T = /* @__PURE__ */ d.cloneElement(c, {
    ref: A
  })), /* @__PURE__ */ d.createElement(yl.Provider, {
    value: x
  }, M ? T : /* @__PURE__ */ Hr.createPortal(T, S));
});
process.env.NODE_ENV !== "production" && (Bo.displayName = "Portal");
function W2() {
  var e = P({}, d);
  return e.useId;
}
var Zi = 0, e1 = W2();
const G2 = e1 ? (
  // Use React `useId`
  function(t) {
    var n = e1();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = d.useState("ssr-id"), r = N(n, 2), a = r[0], o = r[1];
    return d.useEffect(function() {
      var i = Zi;
      Zi += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var er = "RC_FORM_INTERNAL_HOOKS", nt = function() {
  $e(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Or = /* @__PURE__ */ d.createContext({
  getFieldValue: nt,
  getFieldsValue: nt,
  getFieldError: nt,
  getFieldWarning: nt,
  getFieldsError: nt,
  isFieldsTouched: nt,
  isFieldTouched: nt,
  isFieldValidating: nt,
  isFieldsValidating: nt,
  resetFields: nt,
  setFields: nt,
  setFieldValue: nt,
  setFieldsValue: nt,
  validateFields: nt,
  submit: nt,
  getInternalHooks: function() {
    return nt(), {
      dispatch: nt,
      initEntityValue: nt,
      registerField: nt,
      useSubscribe: nt,
      setInitialValues: nt,
      destroyForm: nt,
      setCallbacks: nt,
      registerWatch: nt,
      getFields: nt,
      setValidateMessages: nt,
      setPreserve: nt,
      getInitialValue: nt
    };
  }
}), F0 = /* @__PURE__ */ d.createContext(null);
function ro(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function U2(e) {
  return e && !!e._init;
}
function ao() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      tel: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var oo = ao();
function K2(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function q2(e, t, n) {
  if (xo()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var a = new (e.bind.apply(e, r))();
  return n && zr(a, n.prototype), a;
}
function io(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return io = function(r) {
    if (r === null || !K2(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, a);
    }
    function a() {
      return q2(r, arguments, jr(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), zr(a, r);
  }, io(e);
}
var X2 = /%[sdj%]/g, bl = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (bl = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function so(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function nn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(X2, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function Q2(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern" || e === "tel";
}
function At(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Q2(t) && typeof e == "string" && !e);
}
function J2(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(s) {
    r.push.apply(r, se(s || [])), a++, a === o && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function t1(e, t, n) {
  var r = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < a ? t(e[s], o) : n([]);
  }
  o([]);
}
function Y2(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, se(e[n] || []));
  }), t;
}
var n1 = /* @__PURE__ */ (function(e) {
  rr(n, e);
  var t = ar(n);
  function n(r, a) {
    var o;
    return Ft(this, n), o = t.call(this, "Async Validation Error"), R(_e(o), "errors", void 0), R(_e(o), "fields", void 0), o.errors = r, o.fields = a, o;
  }
  return $t(n);
})(/* @__PURE__ */ io(Error));
function Z2(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(v, m) {
      var p = function(b) {
        return r(b), b.length ? m(new n1(b, so(b))) : v(a);
      }, h = Y2(e);
      t1(h, n, p);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], f = new Promise(function(v, m) {
    var p = function(g) {
      if (u.push.apply(u, g), l++, l === c)
        return r(u), u.length ? m(new n1(u, so(u))) : v(a);
    };
    s.length || (r(u), v(a)), s.forEach(function(h) {
      var g = e[h];
      i.indexOf(h) !== -1 ? t1(g, n, p) : J2(g, n, p);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function e3(e) {
  return !!(e && e.message !== void 0);
}
function t3(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function r1(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = t3(t, e.fullFields) : r = t[n.field || e.fullField], e3(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function a1(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        he(r) === "object" && he(e[n]) === "object" ? e[n] = P(P({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var lr = "enum", n3 = function(t, n, r, a, o) {
  t[lr] = Array.isArray(t[lr]) ? t[lr] : [], t[lr].indexOf(n) === -1 && a.push(nn(o.messages[lr], t.fullField, t[lr].join(", ")));
}, r3 = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(nn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(nn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, a3 = function(t, n, r, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, f = null, v = typeof n == "number", m = typeof n == "string", p = Array.isArray(n);
  if (v ? f = "number" : m ? f = "string" : p && (f = "array"), !f)
    return !1;
  p && (u = n.length), m && (u = n.replace(l, "_").length), i ? u !== t.len && a.push(nn(o.messages[f].len, t.fullField, t.len)) : s && !c && u < t.min ? a.push(nn(o.messages[f].min, t.fullField, t.min)) : c && !s && u > t.max ? a.push(nn(o.messages[f].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && a.push(nn(o.messages[f].range, t.fullField, t.min, t.max));
}, Cl = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || At(n, i || t.type)) && a.push(nn(o.messages.required, t.fullField));
}, p0;
const o3 = (function() {
  if (p0)
    return p0;
  var e = "[a-fA-F\\d:]", t = function(S) {
    return S && S.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], o = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(a.join("|"), ")").concat(o), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), c = new RegExp("^".concat(n, "$")), l = new RegExp("^".concat(i, "$")), u = function(S) {
    return S && S.exact ? s : new RegExp("(?:".concat(t(S)).concat(n).concat(t(S), ")|(?:").concat(t(S)).concat(i).concat(t(S), ")"), "g");
  };
  u.v4 = function(x) {
    return x && x.exact ? c : new RegExp("".concat(t(x)).concat(n).concat(t(x)), "g");
  }, u.v6 = function(x) {
    return x && x.exact ? l : new RegExp("".concat(t(x)).concat(i).concat(t(x)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", m = u.v4().source, p = u.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", C = '(?:[/?#][^\\s"]*)?', E = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(m, "|").concat(p, "|").concat(h).concat(g).concat(b, ")").concat(y).concat(C);
  return p0 = new RegExp("(?:^".concat(E, "$)"), "i"), p0;
});
var da = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Fr = {
  integer: function(t) {
    return Fr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Fr.number(t) && !Fr.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return he(t) === "object" && !Fr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(da.email);
  },
  tel: function(t) {
    return typeof t == "string" && t.length <= 32 && !!t.match(da.tel);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(o3());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(da.hex);
  }
}, i3 = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    Cl(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Fr[s](n) || a.push(nn(o.messages.types[s], t.fullField, t.type)) : s && he(n) !== t.type && a.push(nn(o.messages.types[s], t.fullField, t.type));
}, s3 = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(nn(o.messages.whitespace, t.fullField));
};
const ke = {
  required: Cl,
  whitespace: s3,
  type: i3,
  range: a3,
  enum: n3,
  pattern: r3
};
var l3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o);
  }
  r(i);
}, c3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    ke.required(t, n, a, i, o, "array"), n != null && (ke.type(t, n, a, i, o), ke.range(t, n, a, i, o));
  }
  r(i);
}, u3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), n !== void 0 && ke.type(t, n, a, i, o);
  }
  r(i);
}, f3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n, "date") && !t.required)
      return r();
    if (ke.required(t, n, a, i, o), !At(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), ke.type(t, c, a, i, o), c && ke.range(t, c.getTime(), a, i, o);
    }
  }
  r(i);
}, d3 = "enum", v3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), n !== void 0 && ke[d3](t, n, a, i, o);
  }
  r(i);
}, m3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), n !== void 0 && (ke.type(t, n, a, i, o), ke.range(t, n, a, i, o));
  }
  r(i);
}, g3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), n !== void 0 && (ke.type(t, n, a, i, o), ke.range(t, n, a, i, o));
  }
  r(i);
}, h3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), n !== void 0 && ke.type(t, n, a, i, o);
  }
  r(i);
}, p3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), n !== void 0 && (ke.type(t, n, a, i, o), ke.range(t, n, a, i, o));
  }
  r(i);
}, y3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), n !== void 0 && ke.type(t, n, a, i, o);
  }
  r(i);
}, b3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n, "string") && !t.required)
      return r();
    ke.required(t, n, a, i, o), At(n, "string") || ke.pattern(t, n, a, i, o);
  }
  r(i);
}, C3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n) && !t.required)
      return r();
    ke.required(t, n, a, i, o), At(n) || ke.type(t, n, a, i, o);
  }
  r(i);
}, S3 = function(t, n, r, a, o) {
  var i = [], s = Array.isArray(n) ? "array" : he(n);
  ke.required(t, n, a, i, o, s), r(i);
}, E3 = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (At(n, "string") && !t.required)
      return r();
    ke.required(t, n, a, i, o, "string"), At(n, "string") || (ke.type(t, n, a, i, o), ke.range(t, n, a, i, o), ke.pattern(t, n, a, i, o), t.whitespace === !0 && ke.whitespace(t, n, a, i, o));
  }
  r(i);
}, y0 = function(t, n, r, a, o) {
  var i = t.type, s = [], c = t.required || !t.required && a.hasOwnProperty(t.field);
  if (c) {
    if (At(n, i) && !t.required)
      return r();
    ke.required(t, n, a, s, o, i), At(n, i) || ke.type(t, n, a, s, o);
  }
  r(s);
};
const Br = {
  string: E3,
  method: h3,
  number: p3,
  boolean: u3,
  regexp: C3,
  integer: g3,
  float: m3,
  array: c3,
  object: y3,
  enum: v3,
  pattern: b3,
  date: f3,
  url: y0,
  hex: y0,
  email: y0,
  tel: y0,
  required: S3,
  any: l3
};
var e0 = /* @__PURE__ */ (function() {
  function e(t) {
    Ft(this, e), R(this, "rules", null), R(this, "_messages", oo), this.define(t);
  }
  return $t(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (he(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(a) {
        var o = n[a];
        r.rules[a] = Array.isArray(o) ? o : [o];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = a1(ao(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, s = a, c = o;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function l(p) {
        var h = [], g = {};
        function b(C) {
          if (Array.isArray(C)) {
            var E;
            h = (E = h).concat.apply(E, se(C));
          } else
            h.push(C);
        }
        for (var y = 0; y < p.length; y++)
          b(p[y]);
        h.length ? (g = so(h), c(h, g)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === oo && (u = ao()), a1(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(p) {
        var h = r.rules[p], g = i[p];
        h.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (i === n && (i = P({}, i)), g = i[p] = y.transform(g), g != null && (y.type = y.type || (Array.isArray(g) ? "array" : he(g)))), typeof y == "function" ? y = {
            validator: y
          } : y = P({}, y), y.validator = r.getValidationMethod(y), y.validator && (y.field = p, y.fullField = y.fullField || p, y.type = r.getType(y), f[p] = f[p] || [], f[p].push({
            rule: y,
            value: g,
            source: i,
            field: p
          }));
        });
      });
      var m = {};
      return Z2(f, s, function(p, h) {
        var g = p.rule, b = (g.type === "object" || g.type === "array") && (he(g.fields) === "object" || he(g.defaultField) === "object");
        b = b && (g.required || !g.required && p.value), g.field = p.field;
        function y(O, w) {
          return P(P({}, w), {}, {
            fullField: "".concat(g.fullField, ".").concat(O),
            fullFields: g.fullFields ? [].concat(se(g.fullFields), [O]) : [O]
          });
        }
        function C() {
          var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], w = Array.isArray(O) ? O : [O];
          !s.suppressWarning && w.length && e.warning("async-validator:", w), w.length && g.message !== void 0 && g.message !== null && (w = [].concat(g.message));
          var A = w.map(r1(g, i));
          if (s.first && A.length)
            return m[g.field] = 1, h(A);
          if (!b)
            h(A);
          else {
            if (g.required && !p.value)
              return g.message !== void 0 ? A = [].concat(g.message).map(r1(g, i)) : s.error && (A = [s.error(g, nn(s.messages.required, g.field))]), h(A);
            var M = {};
            g.defaultField && Object.keys(p.value).map(function(_) {
              M[_] = g.defaultField;
            }), M = P(P({}, M), p.rule.fields);
            var T = {};
            Object.keys(M).forEach(function(_) {
              var I = M[_], V = Array.isArray(I) ? I : [I];
              T[_] = V.map(y.bind(null, _));
            });
            var D = new e(T);
            D.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), D.validate(p.value, p.rule.options || s, function(_) {
              var I = [];
              A && A.length && I.push.apply(I, se(A)), _ && _.length && I.push.apply(I, se(_)), h(I.length ? I : null);
            });
          }
        }
        var E;
        if (g.asyncValidator)
          E = g.asyncValidator(g, p.value, C, p.source, s);
        else if (g.validator) {
          try {
            E = g.validator(g, p.value, C, p.source, s);
          } catch (O) {
            var x, S;
            (x = (S = console).error) === null || x === void 0 || x.call(S, O), s.suppressValidatorError || setTimeout(function() {
              throw O;
            }, 0), C(O.message);
          }
          E === !0 ? C() : E === !1 ? C(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || "".concat(g.fullField || g.field, " fails")) : E instanceof Array ? C(E) : E instanceof Error && C(E.message);
        }
        E && E.then && E.then(function() {
          return C();
        }, function(O) {
          return C(O);
        });
      }, function(p) {
        l(p);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Br.hasOwnProperty(n.type))
        throw new Error(nn("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), a = r.indexOf("message");
      return a !== -1 && r.splice(a, 1), r.length === 1 && r[0] === "required" ? Br.required : Br[this.getType(n)] || void 0;
    }
  }]), e;
})();
R(e0, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Br[t] = n;
});
R(e0, "warning", bl);
R(e0, "messages", oo);
R(e0, "validators", Br);
var tn = "'${name}' is not a valid ${type}", Sl = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: tn,
    method: tn,
    array: tn,
    object: tn,
    number: tn,
    date: tn,
    boolean: tn,
    integer: tn,
    float: tn,
    regexp: tn,
    email: tn,
    url: tn,
    hex: tn
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, o1 = e0;
function w3(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var i1 = "CODE_LOGIC_ERROR";
function lo(e, t, n, r, a) {
  return co.apply(this, arguments);
}
function co() {
  return co = Zr(/* @__PURE__ */ un().mark(function e(t, n, r, a, o) {
    var i, s, c, l, u, f, v, m, p;
    return un().wrap(function(g) {
      for (; ; ) switch (g.prev = g.next) {
        case 0:
          return i = P({}, r), delete i.ruleIndex, o1.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(i1);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new o1(R({}, t, [i])), u = vr(Sl, a.validateMessages), l.messages(u), f = [], g.prev = 10, g.next = 13, Promise.resolve(l.validate(R({}, t, n), P({}, a)));
        case 13:
          g.next = 18;
          break;
        case 15:
          g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(b, y) {
            var C = b.message, E = C === i1 ? u.default : C;
            return /* @__PURE__ */ d.isValidElement(E) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ d.cloneElement(E, {
                key: "error_".concat(y)
              })
            ) : E;
          }));
        case 18:
          if (!(!f.length && c && Array.isArray(n) && n.length > 0)) {
            g.next = 23;
            break;
          }
          return g.next = 21, Promise.all(n.map(function(b, y) {
            return lo("".concat(t, ".").concat(y), b, c, a, o);
          }));
        case 21:
          return v = g.sent, g.abrupt("return", v.reduce(function(b, y) {
            return [].concat(se(b), se(y));
          }, []));
        case 23:
          return m = P(P({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, o), p = f.map(function(b) {
            return typeof b == "string" ? w3(b, m) : b;
          }), g.abrupt("return", p);
        case 26:
        case "end":
          return g.stop();
      }
    }, e, null, [[10, 15]]);
  })), co.apply(this, arguments);
}
function x3(e, t, n, r, a, o) {
  var i = e.join("."), s = n.map(function(u, f) {
    var v = u.validator, m = P(P({}, u), {}, {
      ruleIndex: f
    });
    return v && (m.validator = function(p, h, g) {
      var b = !1, y = function() {
        for (var x = arguments.length, S = new Array(x), O = 0; O < x; O++)
          S[O] = arguments[O];
        Promise.resolve().then(function() {
          $e(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || g.apply(void 0, S);
        });
      }, C = v(p, h, y);
      b = C && typeof C.then == "function" && typeof C.catch == "function", $e(b, "`callback` is deprecated. Please return a promise instead."), b && C.then(function() {
        g();
      }).catch(function(E) {
        g(E || " ");
      });
    }), m;
  }).sort(function(u, f) {
    var v = u.warningOnly, m = u.ruleIndex, p = f.warningOnly, h = f.ruleIndex;
    return !!v == !!p ? m - h : v ? 1 : -1;
  }), c;
  if (a === !0)
    c = new Promise(/* @__PURE__ */ (function() {
      var u = Zr(/* @__PURE__ */ un().mark(function f(v, m) {
        var p, h, g;
        return un().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              p = 0;
            case 1:
              if (!(p < s.length)) {
                y.next = 12;
                break;
              }
              return h = s[p], y.next = 5, lo(i, t, h, r, o);
            case 5:
              if (g = y.sent, !g.length) {
                y.next = 9;
                break;
              }
              return m([{
                errors: g,
                rule: h
              }]), y.abrupt("return");
            case 9:
              p += 1, y.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return u.apply(this, arguments);
      };
    })());
  else {
    var l = s.map(function(u) {
      return lo(i, t, u, r, o).then(function(f) {
        return {
          errors: f,
          rule: u
        };
      });
    });
    c = (a ? R3(l) : O3(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function O3(e) {
  return uo.apply(this, arguments);
}
function uo() {
  return uo = Zr(/* @__PURE__ */ un().mark(function e(t) {
    return un().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, se(a));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), uo.apply(this, arguments);
}
function R3(e) {
  return fo.apply(this, arguments);
}
function fo() {
  return fo = Zr(/* @__PURE__ */ un().mark(function e(t) {
    var n;
    return un().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return n = 0, a.abrupt("return", new Promise(function(o) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && o([s]), n += 1, n === t.length && o([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, e);
  })), fo.apply(this, arguments);
}
function Et(e) {
  return ro(e);
}
function s1(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = xn(e, r);
    n = vn(n, r, a);
  }), n;
}
function yr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return El(t, r, n);
  });
}
function El(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, a) {
    return e[a] === r;
  });
}
function P3(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || he(e) !== "object" || he(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return se(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function A3(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && he(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function l1(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], o = t - n;
  return o > 0 ? [].concat(se(e.slice(0, n)), [a], se(e.slice(n, t)), se(e.slice(t + 1, r))) : o < 0 ? [].concat(se(e.slice(0, t)), se(e.slice(t + 1, n + 1)), [a], se(e.slice(n + 1, r))) : e;
}
var M3 = ["name"], sn = [];
function va(e, t, n, r, a, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== a;
}
var Ho = /* @__PURE__ */ (function(e) {
  rr(n, e);
  var t = ar(n);
  function n(r) {
    var a;
    if (Ft(this, n), a = t.call(this, r), R(_e(a), "state", {
      resetCount: 0
    }), R(_e(a), "cancelRegisterFunc", null), R(_e(a), "mounted", !1), R(_e(a), "touched", !1), R(_e(a), "dirty", !1), R(_e(a), "validatePromise", void 0), R(_e(a), "prevValidating", void 0), R(_e(a), "errors", sn), R(_e(a), "warnings", sn), R(_e(a), "cancelRegister", function() {
      var c = a.props, l = c.preserve, u = c.isListField, f = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(u, l, Et(f)), a.cancelRegisterFunc = null;
    }), R(_e(a), "getNamePath", function() {
      var c = a.props, l = c.name, u = c.fieldContext, f = u.prefixName, v = f === void 0 ? [] : f;
      return l !== void 0 ? [].concat(se(v), se(l)) : [];
    }), R(_e(a), "getRules", function() {
      var c = a.props, l = c.rules, u = l === void 0 ? [] : l, f = c.fieldContext;
      return u.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), R(_e(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), R(_e(a), "metaCache", null), R(_e(a), "triggerMetaEvent", function(c) {
      var l = a.props.onMetaChange;
      if (l) {
        var u = P(P({}, a.getMeta()), {}, {
          destroy: c
        });
        Oa(a.metaCache, u) || l(u), a.metaCache = u;
      } else
        a.metaCache = null;
    }), R(_e(a), "onStoreChange", function(c, l, u) {
      var f = a.props, v = f.shouldUpdate, m = f.dependencies, p = m === void 0 ? [] : m, h = f.onReset, g = u.store, b = a.getNamePath(), y = a.getValue(c), C = a.getValue(g), E = l && yr(l, b);
      switch (u.type === "valueUpdate" && u.source === "external" && !Oa(y, C) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = sn, a.warnings = sn, a.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || E) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = sn, a.warnings = sn, a.triggerMetaEvent(), h?.(), a.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (v && va(v, c, g, y, C, u)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var x = u.data;
          if (E) {
            "touched" in x && (a.touched = x.touched), "validating" in x && !("originRCField" in x) && (a.validatePromise = x.validating ? Promise.resolve([]) : null), "errors" in x && (a.errors = x.errors || sn), "warnings" in x && (a.warnings = x.warnings || sn), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in x && yr(l, b, !0)) {
            a.reRender();
            return;
          }
          if (v && !b.length && va(v, c, g, y, C, u)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var S = p.map(Et);
          if (S.some(function(O) {
            return yr(u.relatedFields, O);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!p.length || b.length || v) && va(v, c, g, y, C, u)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), R(_e(a), "validateRules", function(c) {
      var l = a.getNamePath(), u = a.getValue(), f = c || {}, v = f.triggerName, m = f.validateOnly, p = m === void 0 ? !1 : m, h = Promise.resolve().then(/* @__PURE__ */ Zr(/* @__PURE__ */ un().mark(function g() {
        var b, y, C, E, x, S, O;
        return un().wrap(function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              if (a.mounted) {
                A.next = 2;
                break;
              }
              return A.abrupt("return", []);
            case 2:
              if (b = a.props, y = b.validateFirst, C = y === void 0 ? !1 : y, E = b.messageVariables, x = b.validateDebounce, S = a.getRules(), v && (S = S.filter(function(M) {
                return M;
              }).filter(function(M) {
                var T = M.validateTrigger;
                if (!T)
                  return !0;
                var D = ro(T);
                return D.includes(v);
              })), !(x && v)) {
                A.next = 10;
                break;
              }
              return A.next = 8, new Promise(function(M) {
                setTimeout(M, x);
              });
            case 8:
              if (a.validatePromise === h) {
                A.next = 10;
                break;
              }
              return A.abrupt("return", []);
            case 10:
              return O = x3(l, u, S, c, C, E), O.catch(function(M) {
                return M;
              }).then(function() {
                var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sn;
                if (a.validatePromise === h) {
                  var T;
                  a.validatePromise = null;
                  var D = [], _ = [];
                  (T = M.forEach) === null || T === void 0 || T.call(M, function(I) {
                    var V = I.rule.warningOnly, F = I.errors, H = F === void 0 ? sn : F;
                    V ? _.push.apply(_, se(H)) : D.push.apply(D, se(H));
                  }), a.errors = D, a.warnings = _, a.triggerMetaEvent(), a.reRender();
                }
              }), A.abrupt("return", O);
            case 13:
            case "end":
              return A.stop();
          }
        }, g);
      })));
      return p || (a.validatePromise = h, a.dirty = !0, a.errors = sn, a.warnings = sn, a.triggerMetaEvent(), a.reRender()), h;
    }), R(_e(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), R(_e(a), "isFieldTouched", function() {
      return a.touched;
    }), R(_e(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var c = a.props.fieldContext, l = c.getInternalHooks(er), u = l.getInitialValue;
      return u(a.getNamePath()) !== void 0;
    }), R(_e(a), "getErrors", function() {
      return a.errors;
    }), R(_e(a), "getWarnings", function() {
      return a.warnings;
    }), R(_e(a), "isListField", function() {
      return a.props.isListField;
    }), R(_e(a), "isList", function() {
      return a.props.isList;
    }), R(_e(a), "isPreserve", function() {
      return a.props.preserve;
    }), R(_e(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var c = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return c;
    }), R(_e(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = a.getMeta();
        return P(P({}, a.getOnlyChild(c(a.getControlled(), l, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Kn(c);
      return u.length !== 1 || !/* @__PURE__ */ d.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), R(_e(a), "getValue", function(c) {
      var l = a.props.fieldContext.getFieldsValue, u = a.getNamePath();
      return xn(c || l(!0), u);
    }), R(_e(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.props, u = l.name, f = l.trigger, v = l.validateTrigger, m = l.getValueFromEvent, p = l.normalize, h = l.valuePropName, g = l.getValueProps, b = l.fieldContext, y = v !== void 0 ? v : b.validateTrigger, C = a.getNamePath(), E = b.getInternalHooks, x = b.getFieldsValue, S = E(er), O = S.dispatch, w = a.getValue(), A = g || function(I) {
        return R({}, h, I);
      }, M = c[f], T = u !== void 0 ? A(w) : {};
      process.env.NODE_ENV !== "production" && T && Object.keys(T).forEach(function(I) {
        $e(typeof T[I] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(I, ")"));
      });
      var D = P(P({}, c), T);
      D[f] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var I, V = arguments.length, F = new Array(V), H = 0; H < V; H++)
          F[H] = arguments[H];
        m ? I = m.apply(void 0, F) : I = A3.apply(void 0, [h].concat(F)), p && (I = p(I, w, x(!0))), I !== w && O({
          type: "updateValue",
          namePath: C,
          value: I
        }), M && M.apply(void 0, F);
      };
      var _ = ro(y || []);
      return _.forEach(function(I) {
        var V = D[I];
        D[I] = function() {
          V && V.apply(void 0, arguments);
          var F = a.props.rules;
          F && F.length && O({
            type: "validateField",
            namePath: C,
            triggerName: I
          });
        };
      }), D;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(er), s = i.initEntityValue;
      s(_e(a));
    }
    return a;
  }
  return $t(n, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, c = s(er), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), s = i.child, c = i.isFunction, l;
      return c ? l = s : /* @__PURE__ */ d.isValidElement(s) ? l = /* @__PURE__ */ d.cloneElement(s, this.getControlled(s.props)) : ($e(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ d.createElement(d.Fragment, {
        key: a
      }, l);
    }
  }]), n;
})(d.Component);
R(Ho, "contextType", Or);
R(Ho, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function wl(e) {
  var t, n = e.name, r = bt(e, M3), a = d.useContext(Or), o = d.useContext(F0), i = n !== void 0 ? Et(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!o, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && i.length <= 1 && $e(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ d.createElement(Ho, We({
    key: c,
    name: i,
    isListField: s
  }, r, {
    fieldContext: a
  }));
}
function I3(e) {
  var t = e.name, n = e.initialValue, r = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = d.useContext(Or), c = d.useContext(F0), l = d.useRef({
    keys: [],
    id: 0
  }), u = l.current, f = d.useMemo(function() {
    var h = Et(s.prefixName) || [];
    return [].concat(se(h), se(Et(t)));
  }, [s.prefixName, t]), v = d.useMemo(function() {
    return P(P({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), m = d.useMemo(function() {
    return {
      getKey: function(g) {
        var b = f.length, y = g[b];
        return [u.keys[y], g.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return $e(!1, "Form.List only accepts function as children."), null;
  var p = function(g, b, y) {
    var C = y.source;
    return C === "internal" ? !1 : g !== b;
  };
  return /* @__PURE__ */ d.createElement(F0.Provider, {
    value: m
  }, /* @__PURE__ */ d.createElement(Or.Provider, {
    value: v
  }, /* @__PURE__ */ d.createElement(wl, {
    name: [],
    shouldUpdate: p,
    rules: a,
    validateTrigger: o,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(h, g) {
    var b = h.value, y = b === void 0 ? [] : b, C = h.onChange, E = s.getFieldValue, x = function() {
      var A = E(f || []);
      return A || [];
    }, S = {
      add: function(A, M) {
        var T = x();
        M >= 0 && M <= T.length ? (u.keys = [].concat(se(u.keys.slice(0, M)), [u.id], se(u.keys.slice(M))), C([].concat(se(T.slice(0, M)), [A], se(T.slice(M))))) : (process.env.NODE_ENV !== "production" && (M < 0 || M > T.length) && $e(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(se(u.keys), [u.id]), C([].concat(se(T), [A]))), u.id += 1;
      },
      remove: function(A) {
        var M = x(), T = new Set(Array.isArray(A) ? A : [A]);
        T.size <= 0 || (u.keys = u.keys.filter(function(D, _) {
          return !T.has(_);
        }), C(M.filter(function(D, _) {
          return !T.has(_);
        })));
      },
      move: function(A, M) {
        if (A !== M) {
          var T = x();
          A < 0 || A >= T.length || M < 0 || M >= T.length || (u.keys = l1(u.keys, A, M), C(l1(T, A, M)));
        }
      }
    }, O = y || [];
    return Array.isArray(O) || (O = [], process.env.NODE_ENV !== "production" && $e(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), r(O.map(function(w, A) {
      var M = u.keys[A];
      return M === void 0 && (u.keys[A] = u.id, M = u.keys[A], u.id += 1), {
        name: A,
        key: M,
        isListField: !0
      };
    }), S, g);
  })));
}
function D3(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, s) {
      i.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        n -= 1, r[s] = c, !(n > 0) && (t && o(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var xl = "__@field_split__";
function ma(e) {
  return e.map(function(t) {
    return "".concat(he(t), ":").concat(t);
  }).join(xl);
}
var cr = /* @__PURE__ */ (function() {
  function e() {
    Ft(this, e), R(this, "kvs", /* @__PURE__ */ new Map());
  }
  return $t(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(ma(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(ma(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = this.get(n), o = r(a);
      o ? this.set(n, o) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(ma(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return se(this.kvs.entries()).map(function(r) {
        var a = N(r, 2), o = a[0], i = a[1], s = o.split(xl);
        return n({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = N(l, 3), f = u[1], v = u[2];
            return f === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var a = r.key, o = r.value;
        return n[a.join(".")] = o, null;
      }), n;
    }
  }]), e;
})(), T3 = ["name"], _3 = /* @__PURE__ */ $t(function e(t) {
  var n = this;
  Ft(this, e), R(this, "formHooked", !1), R(this, "forceRootUpdate", void 0), R(this, "subscribable", !0), R(this, "store", {}), R(this, "fieldEntities", []), R(this, "initialValues", {}), R(this, "callbacks", {}), R(this, "validateMessages", null), R(this, "preserve", null), R(this, "lastValidatePromise", null), R(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), R(this, "getInternalHooks", function(r) {
    return r === er ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : ($e(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), R(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), R(this, "prevWithoutPreserves", null), R(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = vr(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var c = s.key;
        i = vn(i, c, xn(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), R(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var a = new cr();
      n.getFieldEntities(!0).forEach(function(o) {
        n.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0);
      }), n.prevWithoutPreserves = a;
    }
  }), R(this, "getInitialValue", function(r) {
    var a = xn(n.initialValues, r);
    return r.length ? vr(a) : a;
  }), R(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), R(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), R(this, "setPreserve", function(r) {
    n.preserve = r;
  }), R(this, "watchList", []), R(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), R(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), R(this, "timeoutId", null), R(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || $e(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), R(this, "updateStore", function(r) {
    n.store = r;
  }), R(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), R(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new cr();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), R(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(o) {
      var i = Et(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Et(o)
      };
    });
  }), R(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, s;
    if (r === !0 || Array.isArray(r) ? (o = r, i = a) : r && he(r) === "object" && (s = r.strict, i = r.filter), o === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), l = [];
    return c.forEach(function(u) {
      var f, v, m = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var p, h;
        if ((p = (h = u).isList) !== null && p !== void 0 && p.call(h))
          return;
      } else if (!o && (f = (v = u).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        l.push(m);
      else {
        var g = "getMeta" in u ? u.getMeta() : null;
        i(g) && l.push(m);
      }
    }), s1(n.store, l.map(Et));
  }), R(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = Et(r);
    return xn(n.store, a);
  }), R(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Et(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), R(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = Et(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), R(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = Et(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), R(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], c, l = !1;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(i) ? (c = i.map(Et), l = !1) : (c = null, l = i) : (c = i.map(Et), l = s);
    var u = n.getFieldEntities(!0), f = function(g) {
      return g.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(h) {
        return f(h) || h.isList();
      }) : u.some(f);
    var v = new cr();
    c.forEach(function(h) {
      v.set(h, []);
    }), u.forEach(function(h) {
      var g = h.getNamePath();
      c.forEach(function(b) {
        b.every(function(y, C) {
          return g[C] === y;
        }) && v.update(b, function(y) {
          return [].concat(se(y), [h]);
        });
      });
    });
    var m = function(g) {
      return g.some(f);
    }, p = v.map(function(h) {
      var g = h.value;
      return g;
    });
    return l ? p.every(m) : p.some(m);
  }), R(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), R(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = r.map(Et);
    return a.some(function(i) {
      var s = i.getNamePath();
      return yr(o, s) && i.isFieldValidating();
    });
  }), R(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), R(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new cr(), o = n.getFieldEntities(!0);
    o.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var f = a.get(u) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: l
        }), a.set(u, f);
      }
    });
    var i = function(l) {
      l.forEach(function(u) {
        var f = u.props.initialValue;
        if (f !== void 0) {
          var v = u.getNamePath(), m = n.getInitialValue(v);
          if (m !== void 0)
            $e(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var p = a.get(v);
            if (p && p.size > 1)
              $e(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var h = n.getFieldValue(v), g = u.isListField();
              !g && (!r.skipExist || h === void 0) && n.updateStore(vn(n.store, v, se(p)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var l = a.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, se(se(l).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = o, i(s);
  }), R(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(vr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var o = r.map(Et);
    o.forEach(function(i) {
      var s = n.getInitialValue(i);
      n.updateStore(vn(n.store, i, s));
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(a, o, {
      type: "reset"
    }), n.notifyWatch(o);
  }), R(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var s = i.name, c = bt(i, T3), l = Et(s);
      o.push(l), "value" in c && n.updateStore(vn(n.store, l, c.value)), n.notifyObservers(a, [l], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(o);
  }), R(this, "getFields", function() {
    var r = n.getFieldEntities(!0), a = r.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), c = P(P({}, s), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return a;
  }), R(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = xn(n.store, o);
      i === void 0 && n.updateStore(vn(n.store, o, a));
    }
  }), R(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }), R(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var a = r.getNamePath();
    if (n.notifyWatch([a]), r.props.initialValue !== void 0) {
      var o = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(o, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(s) && (!i || c.length > 1)) {
        var l = i ? void 0 : n.getInitialValue(a);
        if (a.length && n.getFieldValue(a) !== l && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !El(f.getNamePath(), a)
          );
        })) {
          var u = n.store;
          n.updateStore(vn(u, a, l, !0)), n.notifyObservers(u, [a], {
            type: "remove"
          }), n.triggerDependenciesUpdate(u, a);
        }
      }
      n.notifyWatch([a]);
    };
  }), R(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var a = r.namePath, o = r.value;
        n.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = r.namePath, s = r.triggerName;
        n.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), R(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = P(P({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(r, a, i);
      });
    } else
      n.forceRootUpdate();
  }), R(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(se(o))
    }), o;
  }), R(this, "updateValue", function(r, a) {
    var o = Et(r), i = n.store;
    n.updateStore(vn(n.store, o, a)), n.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var s = n.triggerDependenciesUpdate(i, o), c = n.callbacks.onValuesChange;
    if (c) {
      var l = s1(n.store, [o]);
      c(l, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(se(s)));
  }), R(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = vr(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), R(this, "setFieldValue", function(r, a) {
    n.setFields([{
      name: r,
      value: a,
      errors: [],
      warnings: []
    }]);
  }), R(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new cr();
    n.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var f = Et(u);
        i.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var s = function c(l) {
      var u = i.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (o.push(v), c(v));
        }
      });
    };
    return s(r), o;
  }), R(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var s = new cr();
        a.forEach(function(l) {
          var u = l.name, f = l.errors;
          s.set(u, f);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = i.filter(function(l) {
        var u = l.name;
        return yr(r, u);
      });
      c.length && o(c, i);
    }
  }), R(this, "validateFields", function(r, a) {
    n.warningUnhooked();
    var o, i;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (o = r, i = a) : i = r;
    var s = !!o, c = s ? o.map(Et) : [], l = [], u = String(Date.now()), f = /* @__PURE__ */ new Set(), v = i || {}, m = v.recursive, p = v.dirty;
    n.getFieldEntities(!0).forEach(function(y) {
      if (s || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(p && !y.isFieldDirty())) {
        var C = y.getNamePath();
        if (f.add(C.join(u)), !s || yr(c, C, m)) {
          var E = y.validateRules(P({
            validateMessages: P(P({}, Sl), n.validateMessages)
          }, i));
          l.push(E.then(function() {
            return {
              name: C,
              errors: [],
              warnings: []
            };
          }).catch(function(x) {
            var S, O = [], w = [];
            return (S = x.forEach) === null || S === void 0 || S.call(x, function(A) {
              var M = A.rule.warningOnly, T = A.errors;
              M ? w.push.apply(w, se(T)) : O.push.apply(O, se(T));
            }), O.length ? Promise.reject({
              name: C,
              errors: O,
              warnings: w
            }) : {
              name: C,
              errors: O,
              warnings: w
            };
          }));
        }
      }
    });
    var h = D3(l);
    n.lastValidatePromise = h, h.catch(function(y) {
      return y;
    }).then(function(y) {
      var C = y.map(function(E) {
        var x = E.name;
        return x;
      });
      n.notifyObservers(n.store, C, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(C, y);
    });
    var g = h.then(function() {
      return n.lastValidatePromise === h ? Promise.resolve(n.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(y) {
      var C = y.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(c),
        errorFields: C,
        outOfDate: n.lastValidatePromise !== h
      });
    });
    g.catch(function(y) {
      return y;
    });
    var b = c.filter(function(y) {
      return f.has(y.join(u));
    });
    return n.triggerOnFieldsChange(b), g;
  }), R(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var a = n.callbacks.onFinish;
      if (a)
        try {
          a(r);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(r) {
      var a = n.callbacks.onFinishFailed;
      a && a(r);
    });
  }), this.forceRootUpdate = t;
});
function Ol(e) {
  var t = d.useRef(), n = d.useState({}), r = N(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new _3(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var vo = /* @__PURE__ */ d.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), N3 = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = d.useContext(vo), s = d.useRef({});
  return /* @__PURE__ */ d.createElement(vo.Provider, {
    value: P(P({}, i), {}, {
      validateMessages: P(P({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, u) {
        r && r(l, {
          changedFields: u,
          forms: s.current
        }), i.triggerFormChange(l, u);
      },
      triggerFormFinish: function(l, u) {
        a && a(l, {
          values: u,
          forms: s.current
        }), i.triggerFormFinish(l, u);
      },
      registerForm: function(l, u) {
        l && (s.current = P(P({}, s.current), {}, R({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = P({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, o);
}, F3 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], $3 = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, f = t.validateMessages, v = t.validateTrigger, m = v === void 0 ? "onChange" : v, p = t.onValuesChange, h = t.onFieldsChange, g = t.onFinish, b = t.onFinishFailed, y = t.clearOnDestroy, C = bt(t, F3), E = d.useRef(null), x = d.useContext(vo), S = Ol(i), O = N(S, 1), w = O[0], A = w.getInternalHooks(er), M = A.useSubscribe, T = A.setInitialValues, D = A.setCallbacks, _ = A.setValidateMessages, I = A.setPreserve, V = A.destroyForm;
  d.useImperativeHandle(n, function() {
    return P(P({}, w), {}, {
      nativeElement: E.current
    });
  }), d.useEffect(function() {
    return x.registerForm(r, w), function() {
      x.unregisterForm(r);
    };
  }, [x, w, r]), _(P(P({}, x.validateMessages), f)), D({
    onValuesChange: p,
    onFieldsChange: function(ne) {
      if (x.triggerFormChange(r, ne), h) {
        for (var re = arguments.length, be = new Array(re > 1 ? re - 1 : 0), de = 1; de < re; de++)
          be[de - 1] = arguments[de];
        h.apply(void 0, [ne].concat(be));
      }
    },
    onFinish: function(ne) {
      x.triggerFormFinish(r, ne), g && g(ne);
    },
    onFinishFailed: b
  }), I(s);
  var F = d.useRef(null);
  T(a, !F.current), F.current || (F.current = !0), d.useEffect(
    function() {
      return function() {
        return V(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var H, k = typeof c == "function";
  if (k) {
    var J = w.getFieldsValue(!0);
    H = c(J, w);
  } else
    H = c;
  M(!k);
  var U = d.useRef();
  d.useEffect(function() {
    P3(U.current || [], o || []) || w.setFields(o || []), U.current = o;
  }, [o, w]);
  var z = d.useMemo(function() {
    return P(P({}, w), {}, {
      validateTrigger: m
    });
  }, [w, m]), W = /* @__PURE__ */ d.createElement(F0.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(Or.Provider, {
    value: z
  }, H));
  return u === !1 ? W : /* @__PURE__ */ d.createElement(u, We({}, C, {
    ref: E,
    onSubmit: function(ne) {
      ne.preventDefault(), ne.stopPropagation(), w.submit();
    },
    onReset: function(ne) {
      var re;
      ne.preventDefault(), w.resetFields(), (re = C.onReset) === null || re === void 0 || re.call(C, ne);
    }
  }), W);
};
function c1(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var V3 = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = Ne(t);
  $e(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function L3() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = t[1], o = a === void 0 ? {} : a, i = U2(o) ? {
    form: o
  } : o, s = i.form, c = On(), l = N(c, 2), u = l[0], f = l[1], v = O0(function() {
    return c1(u);
  }, [u]), m = Ne(v);
  m.current = v;
  var p = Nn(Or), h = s || p, g = h && h._init;
  process.env.NODE_ENV !== "production" && $e(t.length === 2 ? s ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var b = Et(r), y = Ne(b);
  return y.current = b, V3(b), Tn(
    function() {
      if (g) {
        var C = h.getFieldsValue, E = h.getInternalHooks, x = E(er), S = x.registerWatch, O = function(T, D) {
          var _ = i.preserve ? D : T;
          return typeof r == "function" ? r(_) : xn(_, y.current);
        }, w = S(function(M, T) {
          var D = O(M, T), _ = c1(D);
          m.current !== _ && (m.current = _, f(D));
        }), A = O(C(), C(!0));
        return u !== A && f(A), w;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), u;
}
var B3 = /* @__PURE__ */ d.forwardRef($3), t0 = B3;
t0.FormProvider = N3;
t0.Field = wl;
t0.List = I3;
t0.useForm = Ol;
t0.useWatch = L3;
const $0 = /* @__PURE__ */ d.createContext({});
process.env.NODE_ENV !== "production" && ($0.displayName = "FormItemInputContext");
const H3 = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = d.useContext($0), a = d.useMemo(() => {
    const o = Object.assign({}, r);
    return n && delete o.isFormItemInput, t && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [t, n, r]);
  return /* @__PURE__ */ d.createElement($0.Provider, {
    value: a
  }, e);
}, k3 = /* @__PURE__ */ d.createContext(void 0), z3 = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let a = r;
  return n && (a = /* @__PURE__ */ ot.createElement(H3, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ ot.createElement(h2, null, a)), a;
};
function j3(e) {
  return (t) => /* @__PURE__ */ d.createElement(or, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ d.createElement(e, Object.assign({}, t)));
}
const Rl = (e, t, n, r, a) => j3((i) => {
  const {
    prefixCls: s,
    style: c
  } = i, l = d.useRef(null), [u, f] = d.useState(0), [v, m] = d.useState(0), [p, h] = D0(!1, {
    value: i.open
  }), {
    getPrefixCls: g
  } = d.useContext(cn), b = g("select", s);
  d.useEffect(() => {
    if (h(!0), typeof ResizeObserver < "u") {
      const E = new ResizeObserver((S) => {
        const O = S[0].target;
        f(O.offsetHeight + 8), m(O.offsetWidth);
      }), x = setInterval(() => {
        var S;
        const O = `.${b}-dropdown`, w = (S = l.current) === null || S === void 0 ? void 0 : S.querySelector(O);
        w && (clearInterval(x), E.observe(w));
      }, 10);
      return () => {
        clearInterval(x), E.disconnect();
      };
    }
  }, [b]);
  let y = Object.assign(Object.assign({}, i), {
    style: Object.assign(Object.assign({}, c), {
      margin: 0
    }),
    open: p,
    visible: p,
    getPopupContainer: () => l.current
  });
  n && (y = n(y)), Object.assign(y, {
    [t]: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
  const C = {
    paddingBottom: u,
    position: "relative",
    minWidth: v
  };
  return /* @__PURE__ */ d.createElement("div", {
    ref: l,
    style: C
  }, /* @__PURE__ */ d.createElement(e, Object.assign({}, y)));
}), Pl = (function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
});
var q0 = function(t) {
  var n = t.className, r = t.customizeIcon, a = t.customizeIconProps, o = t.children, i = t.onMouseDown, s = t.onClick, c = typeof r == "function" ? r(a) : r;
  return /* @__PURE__ */ d.createElement("span", {
    className: n,
    onMouseDown: function(u) {
      u.preventDefault(), i?.(u);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: s,
    "aria-hidden": !0
  }, c !== void 0 ? c : /* @__PURE__ */ d.createElement("span", {
    className: Xe(n.split(/\s+/).map(function(l) {
      return "".concat(l, "-icon");
    }))
  }, o));
}, W3 = function(t, n, r, a, o) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, s = arguments.length > 6 ? arguments[6] : void 0, c = arguments.length > 7 ? arguments[7] : void 0, l = ot.useMemo(function() {
    if (he(a) === "object")
      return a.clearIcon;
    if (o)
      return o;
  }, [a, o]), u = ot.useMemo(function() {
    return !!(!i && a && (r.length || s) && !(c === "combobox" && s === ""));
  }, [a, i, r.length, s, c]);
  return {
    allowClear: u,
    clearIcon: /* @__PURE__ */ ot.createElement(q0, {
      className: "".concat(t, "-clear"),
      onMouseDown: n,
      customizeIcon: l
    }, "×")
  };
}, Al = /* @__PURE__ */ d.createContext(null);
function G3() {
  return d.useContext(Al);
}
function U3() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = d.useState(!1), n = N(t, 2), r = n[0], a = n[1], o = d.useRef(null), i = function() {
    window.clearTimeout(o.current);
  };
  d.useEffect(function() {
    return i;
  }, []);
  var s = function(l, u) {
    i(), o.current = window.setTimeout(function() {
      a(l), u && u();
    }, e);
  };
  return [r, s, i];
}
function Ml() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = d.useRef(null), n = d.useRef(null);
  d.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(a) {
    (a || t.current === null) && (t.current = a), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function K3(e, t, n, r) {
  var a = d.useRef(null);
  a.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, d.useEffect(function() {
    function o(i) {
      var s;
      if (!((s = a.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var c = i.target;
        c.shadowRoot && i.composed && (c = i.composedPath()[0] || c), a.current.open && e().filter(function(l) {
          return l;
        }).every(function(l) {
          return !l.contains(c) && l !== c;
        }) && a.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", o), function() {
      return window.removeEventListener("mousedown", o);
    };
  }, []);
}
function q3(e) {
  return (
    // Undefined for Edge bug:
    // https://github.com/ant-design/ant-design/issues/51292
    e && // Other keys
    ![
      // System function button
      Pe.ESC,
      Pe.SHIFT,
      Pe.BACKSPACE,
      Pe.TAB,
      Pe.WIN_KEY,
      Pe.ALT,
      Pe.META,
      Pe.WIN_KEY_RIGHT,
      Pe.CTRL,
      Pe.SEMICOLON,
      Pe.EQUALS,
      Pe.CAPS_LOCK,
      Pe.CONTEXT_MENU,
      // F1-F12
      Pe.F1,
      Pe.F2,
      Pe.F3,
      Pe.F4,
      Pe.F5,
      Pe.F6,
      Pe.F7,
      Pe.F8,
      Pe.F9,
      Pe.F10,
      Pe.F11,
      Pe.F12
    ].includes(e)
  );
}
var X3 = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], ur = void 0;
function Q3(e, t) {
  var n = e.prefixCls, r = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, c = e.registerSize, l = e.itemKey, u = e.className, f = e.style, v = e.children, m = e.display, p = e.order, h = e.component, g = h === void 0 ? "div" : h, b = bt(e, X3), y = i && !m;
  function C(w) {
    c(l, w);
  }
  d.useEffect(function() {
    return function() {
      C(null);
    };
  }, []);
  var E = o && a !== ur ? o(a, {
    index: p
  }) : v, x;
  r || (x = {
    opacity: y ? 0 : 1,
    height: y ? 0 : ur,
    overflowY: y ? "hidden" : ur,
    order: i ? p : ur,
    pointerEvents: y ? "none" : ur,
    position: y ? "absolute" : ur
  });
  var S = {};
  y && (S["aria-hidden"] = !0);
  var O = /* @__PURE__ */ d.createElement(g, We({
    className: Xe(!r && n, u),
    style: P(P({}, x), f)
  }, S, b, {
    ref: t
  }), E);
  return i && (O = /* @__PURE__ */ d.createElement(Xn, {
    onResize: function(A) {
      var M = A.offsetWidth;
      C(M);
    },
    disabled: s
  }, O)), O;
}
var hr = /* @__PURE__ */ d.forwardRef(Q3);
hr.displayName = "Item";
function J3(e) {
  if (typeof MessageChannel > "u")
    Gt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function Y3() {
  var e = d.useRef(null), t = function(r) {
    e.current || (e.current = [], J3(function() {
      Hr.unstable_batchedUpdates(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function fr(e, t) {
  var n = d.useState(t), r = N(n, 2), a = r[0], o = r[1], i = Wt(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var V0 = /* @__PURE__ */ ot.createContext(null), Z3 = ["component"], ev = ["className"], tv = ["className"], nv = function(t, n) {
  var r = d.useContext(V0);
  if (!r) {
    var a = t.component, o = a === void 0 ? "div" : a, i = bt(t, Z3);
    return /* @__PURE__ */ d.createElement(o, We({}, i, {
      ref: n
    }));
  }
  var s = r.className, c = bt(r, ev), l = t.className, u = bt(t, tv);
  return /* @__PURE__ */ d.createElement(V0.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(hr, We({
    ref: n,
    className: Xe(s, l)
  }, c, u)));
}, Il = /* @__PURE__ */ d.forwardRef(nv);
Il.displayName = "RawItem";
var rv = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "prefix", "suffix", "component", "itemComponent", "onVisibleChange"], Dl = "responsive", Tl = "invalidate";
function av(e) {
  return "+ ".concat(e.length, " ...");
}
function ov(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, c = e.itemKey, l = e.itemWidth, u = l === void 0 ? 10 : l, f = e.ssr, v = e.style, m = e.className, p = e.maxCount, h = e.renderRest, g = e.renderRawRest, b = e.prefix, y = e.suffix, C = e.component, E = C === void 0 ? "div" : C, x = e.itemComponent, S = e.onVisibleChange, O = bt(e, rv), w = f === "full", A = Y3(), M = fr(A, null), T = N(M, 2), D = T[0], _ = T[1], I = D || 0, V = fr(A, /* @__PURE__ */ new Map()), F = N(V, 2), H = F[0], k = F[1], J = fr(A, 0), U = N(J, 2), z = U[0], W = U[1], Q = fr(A, 0), ne = N(Q, 2), re = ne[0], be = ne[1], de = fr(A, 0), we = N(de, 2), ge = we[0], xe = we[1], Y = fr(A, 0), j = N(Y, 2), q = j[0], $ = j[1], K = On(null), Z = N(K, 2), ve = Z[0], ce = Z[1], ue = On(null), Ce = N(ue, 2), me = Ce[0], pe = Ce[1], Oe = d.useMemo(function() {
    return me === null && w ? Number.MAX_SAFE_INTEGER : me || 0;
  }, [me, D]), ie = On(!1), Qe = N(ie, 2), ze = Qe[0], Le = Qe[1], Ie = "".concat(r, "-item"), Ae = Math.max(z, re), Be = p === Dl, Ve = o.length && Be, it = p === Tl, st = Ve || typeof p == "number" && o.length > p, Fe = O0(function() {
    var B = o;
    return Ve ? D === null && w ? B = o : B = o.slice(0, Math.min(o.length, I / u)) : typeof p == "number" && (B = o.slice(0, p)), B;
  }, [o, u, D, p, Ve]), Me = O0(function() {
    return Ve ? o.slice(Oe + 1) : o.slice(Fe.length);
  }, [o, Fe, Ve, Oe]), Ct = Jo(function(B, L) {
    var G;
    return typeof c == "function" ? c(B) : (G = c && B?.[c]) !== null && G !== void 0 ? G : L;
  }, [c]), Ge = Jo(i || function(B) {
    return B;
  }, [i]);
  function ct(B, L, G) {
    me === B && (L === void 0 || L === ve) || (pe(B), G || (Le(B < o.length - 1), S?.(B)), L !== void 0 && ce(L));
  }
  function lt(B, L) {
    _(L.clientWidth);
  }
  function Vt(B, L) {
    k(function(G) {
      var le = new Map(G);
      return L === null ? le.delete(B) : le.set(B, L), le;
    });
  }
  function wt(B, L) {
    be(L), W(re);
  }
  function Mt(B, L) {
    xe(L);
  }
  function It(B, L) {
    $(L);
  }
  function ft(B) {
    return H.get(Ct(Fe[B], B));
  }
  yt(function() {
    if (I && typeof Ae == "number" && Fe) {
      var B = ge + q, L = Fe.length, G = L - 1;
      if (!L) {
        ct(0, null);
        return;
      }
      for (var le = 0; le < L; le += 1) {
        var ae = ft(le);
        if (w && (ae = ae || 0), ae === void 0) {
          ct(le - 1, void 0, !0);
          break;
        }
        if (B += ae, // Only one means `totalWidth` is the final width
        G === 0 && B <= I || // Last two width will be the final width
        le === G - 1 && B + ft(G) <= I) {
          ct(G, null);
          break;
        } else if (B + Ae > I) {
          ct(le - 1, B - ae - q + re);
          break;
        }
      }
      y && ft(0) + q > I && ce(null);
    }
  }, [I, H, re, ge, q, Ct, Fe]);
  var qe = ze && !!Me.length, De = {};
  ve !== null && Ve && (De = {
    position: "absolute",
    left: ve,
    top: 0
  });
  var rt = {
    prefixCls: Ie,
    responsive: Ve,
    component: x,
    invalidate: it
  }, Je = s ? function(B, L) {
    var G = Ct(B, L);
    return /* @__PURE__ */ d.createElement(V0.Provider, {
      key: G,
      value: P(P({}, rt), {}, {
        order: L,
        item: B,
        itemKey: G,
        registerSize: Vt,
        display: L <= Oe
      })
    }, s(B, L));
  } : function(B, L) {
    var G = Ct(B, L);
    return /* @__PURE__ */ d.createElement(hr, We({}, rt, {
      order: L,
      key: G,
      item: B,
      renderItem: Ge,
      itemKey: G,
      registerSize: Vt,
      display: L <= Oe
    }));
  }, fe = {
    order: qe ? Oe : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ie, "-rest"),
    registerSize: wt,
    display: qe
  }, Ee = h || av, Ke = g ? /* @__PURE__ */ d.createElement(V0.Provider, {
    value: P(P({}, rt), fe)
  }, g(Me)) : /* @__PURE__ */ d.createElement(hr, We({}, rt, fe), typeof Ee == "function" ? Ee(Me) : Ee), ee = /* @__PURE__ */ d.createElement(E, We({
    className: Xe(!it && r, m),
    style: v,
    ref: t
  }, O), b && /* @__PURE__ */ d.createElement(hr, We({}, rt, {
    responsive: Be,
    responsiveDisabled: !Ve,
    order: -1,
    className: "".concat(Ie, "-prefix"),
    registerSize: Mt,
    display: !0
  }), b), Fe.map(Je), st ? Ke : null, y && /* @__PURE__ */ d.createElement(hr, We({}, rt, {
    responsive: Be,
    responsiveDisabled: !Ve,
    order: Oe,
    className: "".concat(Ie, "-suffix"),
    registerSize: It,
    display: !0,
    style: De
  }), y));
  return Be ? /* @__PURE__ */ d.createElement(Xn, {
    onResize: lt,
    disabled: !Ve
  }, ee) : ee;
}
var n0 = /* @__PURE__ */ d.forwardRef(ov);
n0.displayName = "Overflow";
n0.Item = Il;
n0.RESPONSIVE = Dl;
n0.INVALIDATE = Tl;
function iv(e, t, n) {
  var r = P(P({}, e), t);
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    typeof o == "function" && (r[a] = function() {
      for (var i, s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return o.apply(void 0, c), (i = e[a]) === null || i === void 0 ? void 0 : i.call.apply(i, [e].concat(c));
    });
  }), r;
}
var sv = ["prefixCls", "id", "inputElement", "autoFocus", "autoComplete", "editable", "activeDescendantId", "value", "open", "attrs"], lv = function(t, n) {
  var r = t.prefixCls, a = t.id, o = t.inputElement, i = t.autoFocus, s = t.autoComplete, c = t.editable, l = t.activeDescendantId, u = t.value, f = t.open, v = t.attrs, m = bt(t, sv), p = o || /* @__PURE__ */ d.createElement("input", null), h = p, g = h.ref, b = h.props;
  return nr(!("maxLength" in p.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), p = /* @__PURE__ */ d.cloneElement(p, P(P(P({
    type: "search"
  }, iv(m, b)), {}, {
    // Override over origin props
    id: a,
    ref: Eo(n, g),
    autoComplete: s || "off",
    autoFocus: i,
    className: Xe("".concat(r, "-selection-search-input"), b?.className),
    role: "combobox",
    "aria-expanded": f || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": f ? l : void 0
  }, v), {}, {
    value: c ? u : "",
    readOnly: !c,
    unselectable: c ? null : "on",
    style: P(P({}, b.style), {}, {
      opacity: c ? null : 0
    })
  })), p;
}, ko = /* @__PURE__ */ d.forwardRef(lv);
process.env.NODE_ENV !== "production" && (ko.displayName = "Input");
function zo(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var cv = typeof window < "u" && window.document && window.document.documentElement, uv = process.env.NODE_ENV !== "test" && cv;
function fv(e) {
  return e != null;
}
function dv(e) {
  return !e && e !== 0;
}
function u1(e) {
  return ["string", "number"].includes(he(e));
}
function _l(e) {
  var t = void 0;
  return e && (u1(e.title) ? t = e.title.toString() : u1(e.label) && (t = e.label.toString())), t;
}
function vv(e, t) {
  uv ? d.useLayoutEffect(e, t) : d.useEffect(e, t);
}
function mv(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var f1 = function(t) {
  t.preventDefault(), t.stopPropagation();
}, gv = function(t) {
  var n = t.id, r = t.prefixCls, a = t.values, o = t.open, i = t.searchValue, s = t.autoClearSearchValue, c = t.inputRef, l = t.placeholder, u = t.disabled, f = t.mode, v = t.showSearch, m = t.autoFocus, p = t.autoComplete, h = t.activeDescendantId, g = t.tabIndex, b = t.removeIcon, y = t.maxTagCount, C = t.maxTagTextLength, E = t.maxTagPlaceholder, x = E === void 0 ? function($) {
    return "+ ".concat($.length, " ...");
  } : E, S = t.tagRender, O = t.onToggleOpen, w = t.onRemove, A = t.onInputChange, M = t.onInputPaste, T = t.onInputKeyDown, D = t.onInputMouseDown, _ = t.onInputCompositionStart, I = t.onInputCompositionEnd, V = t.onInputBlur, F = d.useRef(null), H = On(0), k = N(H, 2), J = k[0], U = k[1], z = On(!1), W = N(z, 2), Q = W[0], ne = W[1], re = "".concat(r, "-selection"), be = o || f === "multiple" && s === !1 || f === "tags" ? i : "", de = f === "tags" || f === "multiple" && s === !1 || v && (o || Q);
  vv(function() {
    U(F.current.scrollWidth);
  }, [be]);
  var we = function(K, Z, ve, ce, ue) {
    return /* @__PURE__ */ d.createElement("span", {
      title: _l(K),
      className: Xe("".concat(re, "-item"), R({}, "".concat(re, "-item-disabled"), ve))
    }, /* @__PURE__ */ d.createElement("span", {
      className: "".concat(re, "-item-content")
    }, Z), ce && /* @__PURE__ */ d.createElement(q0, {
      className: "".concat(re, "-item-remove"),
      onMouseDown: f1,
      onClick: ue,
      customizeIcon: b
    }, "×"));
  }, ge = function(K, Z, ve, ce, ue, Ce) {
    var me = function(Oe) {
      f1(Oe), O(!o);
    };
    return /* @__PURE__ */ d.createElement("span", {
      onMouseDown: me
    }, S({
      label: Z,
      value: K,
      disabled: ve,
      closable: ce,
      onClose: ue,
      isMaxTag: !!Ce
    }));
  }, xe = function(K) {
    var Z = K.disabled, ve = K.label, ce = K.value, ue = !u && !Z, Ce = ve;
    if (typeof C == "number" && (typeof ve == "string" || typeof ve == "number")) {
      var me = String(Ce);
      me.length > C && (Ce = "".concat(me.slice(0, C), "..."));
    }
    var pe = function(ie) {
      ie && ie.stopPropagation(), w(K);
    };
    return typeof S == "function" ? ge(ce, Ce, Z, ue, pe) : we(K, Ce, Z, ue, pe);
  }, Y = function(K) {
    if (!a.length)
      return null;
    var Z = typeof x == "function" ? x(K) : x;
    return typeof S == "function" ? ge(void 0, Z, !1, !1, void 0, !0) : we({
      title: Z
    }, Z, !1);
  }, j = /* @__PURE__ */ d.createElement("div", {
    className: "".concat(re, "-search"),
    style: {
      width: J
    },
    onFocus: function() {
      ne(!0);
    },
    onBlur: function() {
      ne(!1);
    }
  }, /* @__PURE__ */ d.createElement(ko, {
    ref: c,
    open: o,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: u,
    autoFocus: m,
    autoComplete: p,
    editable: de,
    activeDescendantId: h,
    value: be,
    onKeyDown: T,
    onMouseDown: D,
    onChange: A,
    onPaste: M,
    onCompositionStart: _,
    onCompositionEnd: I,
    onBlur: V,
    tabIndex: g,
    attrs: _0(t, !0)
  }), /* @__PURE__ */ d.createElement("span", {
    ref: F,
    className: "".concat(re, "-search-mirror"),
    "aria-hidden": !0
  }, be, " ")), q = /* @__PURE__ */ d.createElement(n0, {
    prefixCls: "".concat(re, "-overflow"),
    data: a,
    renderItem: xe,
    renderRest: Y,
    suffix: j,
    itemKey: mv,
    maxCount: y
  });
  return /* @__PURE__ */ d.createElement("span", {
    className: "".concat(re, "-wrap")
  }, q, !a.length && !be && /* @__PURE__ */ d.createElement("span", {
    className: "".concat(re, "-placeholder")
  }, l));
}, hv = function(t) {
  var n = t.inputElement, r = t.prefixCls, a = t.id, o = t.inputRef, i = t.disabled, s = t.autoFocus, c = t.autoComplete, l = t.activeDescendantId, u = t.mode, f = t.open, v = t.values, m = t.placeholder, p = t.tabIndex, h = t.showSearch, g = t.searchValue, b = t.activeValue, y = t.maxLength, C = t.onInputKeyDown, E = t.onInputMouseDown, x = t.onInputChange, S = t.onInputPaste, O = t.onInputCompositionStart, w = t.onInputCompositionEnd, A = t.onInputBlur, M = t.title, T = d.useState(!1), D = N(T, 2), _ = D[0], I = D[1], V = u === "combobox", F = V || h, H = v[0], k = g || "";
  V && b && !_ && (k = b), d.useEffect(function() {
    V && I(!1);
  }, [V, b]);
  var J = u !== "combobox" && !f && !h ? !1 : !!k, U = M === void 0 ? _l(H) : M, z = d.useMemo(function() {
    return H ? null : /* @__PURE__ */ d.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: J ? {
        visibility: "hidden"
      } : void 0
    }, m);
  }, [H, J, m, r]);
  return /* @__PURE__ */ d.createElement("span", {
    className: "".concat(r, "-selection-wrap")
  }, /* @__PURE__ */ d.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ d.createElement(ko, {
    ref: o,
    prefixCls: r,
    id: a,
    open: f,
    inputElement: n,
    disabled: i,
    autoFocus: s,
    autoComplete: c,
    editable: F,
    activeDescendantId: l,
    value: k,
    onKeyDown: C,
    onMouseDown: E,
    onChange: function(Q) {
      I(!0), x(Q);
    },
    onPaste: S,
    onCompositionStart: O,
    onCompositionEnd: w,
    onBlur: A,
    tabIndex: p,
    attrs: _0(t, !0),
    maxLength: V ? y : void 0
  })), !V && H ? /* @__PURE__ */ d.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: U,
    style: J ? {
      visibility: "hidden"
    } : void 0
  }, H.label) : null, z);
}, pv = function(t, n) {
  var r = Ne(null), a = Ne(!1), o = t.prefixCls, i = t.open, s = t.mode, c = t.showSearch, l = t.tokenWithEnter, u = t.disabled, f = t.prefix, v = t.autoClearSearchValue, m = t.onSearch, p = t.onSearchSubmit, h = t.onToggleOpen, g = t.onInputKeyDown, b = t.onInputBlur, y = t.domRef;
  d.useImperativeHandle(n, function() {
    return {
      focus: function(U) {
        r.current.focus(U);
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var C = Ml(0), E = N(C, 2), x = E[0], S = E[1], O = function(U) {
    var z = U.which, W = r.current instanceof HTMLTextAreaElement;
    !W && i && (z === Pe.UP || z === Pe.DOWN) && U.preventDefault(), g && g(U), z === Pe.ENTER && s === "tags" && !a.current && !i && p?.(U.target.value), !(W && !i && ~[Pe.UP, Pe.DOWN, Pe.LEFT, Pe.RIGHT].indexOf(z)) && q3(z) && h(!0);
  }, w = function() {
    S(!0);
  }, A = Ne(null), M = function(U) {
    m(U, !0, a.current) !== !1 && h(!0);
  }, T = function() {
    a.current = !0;
  }, D = function(U) {
    a.current = !1, s !== "combobox" && M(U.target.value);
  }, _ = function(U) {
    var z = U.target.value;
    if (l && A.current && /[\r\n]/.test(A.current)) {
      var W = A.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      z = z.replace(W, A.current);
    }
    A.current = null, M(z);
  }, I = function(U) {
    var z = U.clipboardData, W = z?.getData("text");
    A.current = W || "";
  }, V = function(U) {
    var z = U.target;
    if (z !== r.current) {
      var W = document.body.style.msTouchAction !== void 0;
      W ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, F = function(U) {
    var z = x();
    U.target !== r.current && !z && !(s === "combobox" && u) && U.preventDefault(), (s !== "combobox" && (!c || !z) || !i) && (i && v !== !1 && m("", !0, !1), h());
  }, H = {
    inputRef: r,
    onInputKeyDown: O,
    onInputMouseDown: w,
    onInputChange: _,
    onInputPaste: I,
    onInputCompositionStart: T,
    onInputCompositionEnd: D,
    onInputBlur: b
  }, k = s === "multiple" || s === "tags" ? /* @__PURE__ */ d.createElement(gv, We({}, t, H)) : /* @__PURE__ */ d.createElement(hv, We({}, t, H));
  return /* @__PURE__ */ d.createElement("div", {
    ref: y,
    className: "".concat(o, "-selector"),
    onClick: V,
    onMouseDown: F
  }, f && /* @__PURE__ */ d.createElement("div", {
    className: "".concat(o, "-prefix")
  }, f), k);
}, Nl = /* @__PURE__ */ d.forwardRef(pv);
process.env.NODE_ENV !== "production" && (Nl.displayName = "Selector");
function yv(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, a = e.arrowPos, o = r || {}, i = o.className, s = o.content, c = a.x, l = c === void 0 ? 0 : c, u = a.y, f = u === void 0 ? 0 : u, v = d.useRef();
  if (!n || !n.points)
    return null;
  var m = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var p = n.points[0], h = n.points[1], g = p[0], b = p[1], y = h[0], C = h[1];
    g === y || !["t", "b"].includes(g) ? m.top = f : g === "t" ? m.top = 0 : m.bottom = 0, b === C || !["l", "r"].includes(b) ? m.left = l : b === "l" ? m.left = 0 : m.right = 0;
  }
  return /* @__PURE__ */ d.createElement("div", {
    ref: v,
    className: Xe("".concat(t, "-arrow"), i),
    style: m
  }, s);
}
function bv(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ d.createElement(Vo, We({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ d.createElement("div", {
      style: {
        zIndex: r
      },
      className: Xe("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Fl = /* @__PURE__ */ d.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Fl.displayName = "PopupContent");
var $l = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, u = e.fresh, f = e.onClick, v = e.mask, m = e.arrow, p = e.arrowPos, h = e.align, g = e.motion, b = e.maskMotion, y = e.forceRender, C = e.getPopupContainer, E = e.autoDestroy, x = e.portal, S = e.zIndex, O = e.onMouseEnter, w = e.onMouseLeave, A = e.onPointerEnter, M = e.onPointerDownCapture, T = e.ready, D = e.offsetX, _ = e.offsetY, I = e.offsetR, V = e.offsetB, F = e.onAlign, H = e.onPrepare, k = e.stretch, J = e.targetWidth, U = e.targetHeight, z = typeof n == "function" ? n() : n, W = c || l, Q = C?.length > 0, ne = d.useState(!C || !Q), re = N(ne, 2), be = re[0], de = re[1];
  if (yt(function() {
    !be && Q && i && de(!0);
  }, [be, Q, i]), !be)
    return null;
  var we = "auto", ge = {
    left: "-1000vw",
    top: "-1000vh",
    right: we,
    bottom: we
  };
  if (T || !c) {
    var xe, Y = h.points, j = h.dynamicInset || ((xe = h._experimental) === null || xe === void 0 ? void 0 : xe.dynamicInset), q = j && Y[0][1] === "r", $ = j && Y[0][0] === "b";
    q ? (ge.right = I, ge.left = we) : (ge.left = D, ge.right = we), $ ? (ge.bottom = V, ge.top = we) : (ge.top = _, ge.bottom = we);
  }
  var K = {};
  return k && (k.includes("height") && U ? K.height = U : k.includes("minHeight") && U && (K.minHeight = U), k.includes("width") && J ? K.width = J : k.includes("minWidth") && J && (K.minWidth = J)), c || (K.pointerEvents = "none"), /* @__PURE__ */ d.createElement(x, {
    open: y || W,
    getContainer: C && function() {
      return C(i);
    },
    autoDestroy: E
  }, /* @__PURE__ */ d.createElement(bv, {
    prefixCls: a,
    open: c,
    zIndex: S,
    mask: v,
    motion: b
  }), /* @__PURE__ */ d.createElement(Xn, {
    onResize: F,
    disabled: !c
  }, function(Z) {
    return /* @__PURE__ */ d.createElement(Vo, We({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(a, "-hidden")
    }, g, {
      onAppearPrepare: H,
      onEnterPrepare: H,
      visible: c,
      onVisibleChanged: function(ce) {
        var ue;
        g == null || (ue = g.onVisibleChanged) === null || ue === void 0 || ue.call(g, ce), s(ce);
      }
    }), function(ve, ce) {
      var ue = ve.className, Ce = ve.style, me = Xe(a, ue, r);
      return /* @__PURE__ */ d.createElement("div", {
        ref: Eo(Z, t, ce),
        className: me,
        style: P(P(P(P({
          "--arrow-x": "".concat(p.x || 0, "px"),
          "--arrow-y": "".concat(p.y || 0, "px")
        }, ge), K), Ce), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, o),
        onMouseEnter: O,
        onMouseLeave: w,
        onPointerEnter: A,
        onClick: f,
        onPointerDownCapture: M
      }, m && /* @__PURE__ */ d.createElement(yv, {
        prefixCls: a,
        arrow: m,
        arrowPos: p,
        align: h
      }), /* @__PURE__ */ d.createElement(Fl, {
        cache: !c && !u
      }, z));
    });
  }));
});
process.env.NODE_ENV !== "production" && ($l.displayName = "Popup");
var Vl = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, a = k0(n), o = d.useCallback(function(s) {
    So(t, r ? r(s) : s);
  }, [r]), i = H0(o, wo(n));
  return a ? /* @__PURE__ */ d.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (Vl.displayName = "TriggerWrapper");
var d1 = /* @__PURE__ */ d.createContext(null);
function v1(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function Cv(e, t, n, r) {
  return d.useMemo(function() {
    var a = v1(n ?? t), o = v1(r ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, n, r]);
}
function Sv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Ev(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, c = o[i];
    if (Sv((s = e[c]) === null || s === void 0 ? void 0 : s.points, a, r))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function m1(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function r0(e) {
  return e.ownerDocument.defaultView;
}
function mo(e) {
  for (var t = [], n = e?.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = r0(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function Qr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Nr(e) {
  return Qr(parseFloat(e), 0);
}
function g1(e, t) {
  var n = P({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = r0(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, c = a.borderBottomWidth, l = a.borderLeftWidth, u = a.borderRightWidth, f = r.getBoundingClientRect(), v = r.offsetHeight, m = r.clientHeight, p = r.offsetWidth, h = r.clientWidth, g = Nr(s), b = Nr(c), y = Nr(l), C = Nr(u), E = Qr(Math.round(f.width / p * 1e3) / 1e3), x = Qr(Math.round(f.height / v * 1e3) / 1e3), S = (p - h - y - C) * E, O = (v - m - g - b) * x, w = g * x, A = b * x, M = y * E, T = C * E, D = 0, _ = 0;
      if (o === "clip") {
        var I = Nr(i);
        D = I * E, _ = I * x;
      }
      var V = f.x + M - D, F = f.y + w - _, H = V + f.width + 2 * D - M - T - S, k = F + f.height + 2 * _ - w - A - O;
      n.left = Math.max(n.left, V), n.top = Math.max(n.top, F), n.right = Math.min(n.right, H), n.bottom = Math.min(n.bottom, k);
    }
  }), n;
}
function h1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function p1(e, t) {
  var n = t || [], r = N(n, 2), a = r[0], o = r[1];
  return [h1(e.width, a), h1(e.height, o)];
}
function y1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function dr(e, t) {
  var n = t[0], r = t[1], a, o;
  return n === "t" ? o = e.y : n === "b" ? o = e.y + e.height : o = e.y + e.height / 2, r === "l" ? a = e.x : r === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function zn(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, a) {
    return a === t ? n[r] || "c" : r;
  }).join("");
}
function wv(e, t, n, r, a, o, i) {
  var s = d.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[r] || {}
  }), c = N(s, 2), l = c[0], u = c[1], f = d.useRef(0), v = d.useMemo(function() {
    return t ? mo(t) : [];
  }, [t]), m = d.useRef({}), p = function() {
    m.current = {};
  };
  e || p();
  var h = Wt(function() {
    if (t && n && e) {
      let an = function(Mr, An) {
        var kn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Qe, Ir = W.x + Mr, a0 = W.y + An, Q0 = Ir + $, J0 = a0 + q, Y0 = Math.max(Ir, kn.left), oe = Math.max(a0, kn.top), ye = Math.min(Q0, kn.right), vt = Math.min(J0, kn.bottom);
        return Math.max(0, (ye - Y0) * (vt - oe));
      }, ir = function() {
        dt = W.y + Ee, Tt = dt + q, zt = W.x + fe, gt = zt + $;
      };
      var y, C, E, x, S = t, O = S.ownerDocument, w = r0(S), A = w.getComputedStyle(S), M = A.position, T = S.style.left, D = S.style.top, _ = S.style.right, I = S.style.bottom, V = S.style.overflow, F = P(P({}, a[r]), o), H = O.createElement("div");
      (y = S.parentElement) === null || y === void 0 || y.appendChild(H), H.style.left = "".concat(S.offsetLeft, "px"), H.style.top = "".concat(S.offsetTop, "px"), H.style.position = M, H.style.height = "".concat(S.offsetHeight, "px"), H.style.width = "".concat(S.offsetWidth, "px"), S.style.left = "0", S.style.top = "0", S.style.right = "auto", S.style.bottom = "auto", S.style.overflow = "hidden";
      var k;
      if (Array.isArray(n))
        k = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var J, U, z = n.getBoundingClientRect();
        z.x = (J = z.x) !== null && J !== void 0 ? J : z.left, z.y = (U = z.y) !== null && U !== void 0 ? U : z.top, k = {
          x: z.x,
          y: z.y,
          width: z.width,
          height: z.height
        };
      }
      var W = S.getBoundingClientRect(), Q = w.getComputedStyle(S), ne = Q.height, re = Q.width;
      W.x = (C = W.x) !== null && C !== void 0 ? C : W.left, W.y = (E = W.y) !== null && E !== void 0 ? E : W.top;
      var be = O.documentElement, de = be.clientWidth, we = be.clientHeight, ge = be.scrollWidth, xe = be.scrollHeight, Y = be.scrollTop, j = be.scrollLeft, q = W.height, $ = W.width, K = k.height, Z = k.width, ve = {
        left: 0,
        top: 0,
        right: de,
        bottom: we
      }, ce = {
        left: -j,
        top: -Y,
        right: ge - j,
        bottom: xe - Y
      }, ue = F.htmlRegion, Ce = "visible", me = "visibleFirst";
      ue !== "scroll" && ue !== me && (ue = Ce);
      var pe = ue === me, Oe = g1(ce, v), ie = g1(ve, v), Qe = ue === Ce ? ie : Oe, ze = pe ? ie : Qe;
      S.style.left = "auto", S.style.top = "auto", S.style.right = "0", S.style.bottom = "0";
      var Le = S.getBoundingClientRect();
      S.style.left = T, S.style.top = D, S.style.right = _, S.style.bottom = I, S.style.overflow = V, (x = S.parentElement) === null || x === void 0 || x.removeChild(H);
      var Ie = Qr(Math.round($ / parseFloat(re) * 1e3) / 1e3), Ae = Qr(Math.round(q / parseFloat(ne) * 1e3) / 1e3);
      if (Ie === 0 || Ae === 0 || kr(n) && !v2(n))
        return;
      var Be = F.offset, Ve = F.targetOffset, it = p1(W, Be), st = N(it, 2), Fe = st[0], Me = st[1], Ct = p1(k, Ve), Ge = N(Ct, 2), ct = Ge[0], lt = Ge[1];
      k.x -= ct, k.y -= lt;
      var Vt = F.points || [], wt = N(Vt, 2), Mt = wt[0], It = wt[1], ft = y1(It), qe = y1(Mt), De = dr(k, ft), rt = dr(W, qe), Je = P({}, F), fe = De.x - rt.x + Fe, Ee = De.y - rt.y + Me, Ke = an(fe, Ee), ee = an(fe, Ee, ie), B = dr(k, ["t", "l"]), L = dr(W, ["t", "l"]), G = dr(k, ["b", "r"]), le = dr(W, ["b", "r"]), ae = F.overflow || {}, He = ae.adjustX, Ye = ae.adjustY, tt = ae.shiftX, Ue = ae.shiftY, Dt = function(An) {
        return typeof An == "boolean" ? An : An >= 0;
      }, dt, Tt, zt, gt;
      ir();
      var Ot = Dt(Ye), X = qe[0] === ft[0];
      if (Ot && qe[0] === "t" && (Tt > ze.bottom || m.current.bt)) {
        var te = Ee;
        X ? te -= q - K : te = B.y - le.y - Me;
        var Re = an(fe, te), je = an(fe, te, ie);
        // Of course use larger one
        Re > Ke || Re === Ke && (!pe || // Choose recommend one
        je >= ee) ? (m.current.bt = !0, Ee = te, Me = -Me, Je.points = [zn(qe, 0), zn(ft, 0)]) : m.current.bt = !1;
      }
      if (Ot && qe[0] === "b" && (dt < ze.top || m.current.tb)) {
        var at = Ee;
        X ? at += q - K : at = G.y - L.y - Me;
        var fn = an(fe, at), Xt = an(fe, at, ie);
        // Of course use larger one
        fn > Ke || fn === Ke && (!pe || // Choose recommend one
        Xt >= ee) ? (m.current.tb = !0, Ee = at, Me = -Me, Je.points = [zn(qe, 0), zn(ft, 0)]) : m.current.tb = !1;
      }
      var pn = Dt(He), Vn = qe[1] === ft[1];
      if (pn && qe[1] === "l" && (gt > ze.right || m.current.rl)) {
        var Qt = fe;
        Vn ? Qt -= $ - Z : Qt = B.x - le.x - Fe;
        var Jt = an(Qt, Ee), Ln = an(Qt, Ee, ie);
        // Of course use larger one
        Jt > Ke || Jt === Ke && (!pe || // Choose recommend one
        Ln >= ee) ? (m.current.rl = !0, fe = Qt, Fe = -Fe, Je.points = [zn(qe, 1), zn(ft, 1)]) : m.current.rl = !1;
      }
      if (pn && qe[1] === "r" && (zt < ze.left || m.current.lr)) {
        var yn = fe;
        Vn ? yn += $ - Z : yn = G.x - L.x - Fe;
        var Jn = an(yn, Ee), Pn = an(yn, Ee, ie);
        // Of course use larger one
        Jn > Ke || Jn === Ke && (!pe || // Choose recommend one
        Pn >= ee) ? (m.current.lr = !0, fe = yn, Fe = -Fe, Je.points = [zn(qe, 1), zn(ft, 1)]) : m.current.lr = !1;
      }
      ir();
      var Yt = tt === !0 ? 0 : tt;
      typeof Yt == "number" && (zt < ie.left && (fe -= zt - ie.left - Fe, k.x + Z < ie.left + Yt && (fe += k.x - ie.left + Z - Yt)), gt > ie.right && (fe -= gt - ie.right - Fe, k.x > ie.right - Yt && (fe += k.x - ie.right + Yt)));
      var bn = Ue === !0 ? 0 : Ue;
      typeof bn == "number" && (dt < ie.top && (Ee -= dt - ie.top - Me, k.y + K < ie.top + bn && (Ee += k.y - ie.top + K - bn)), Tt > ie.bottom && (Ee -= Tt - ie.bottom - Me, k.y > ie.bottom - bn && (Ee += k.y - ie.bottom + bn)));
      var Cn = W.x + fe, Sn = Cn + $, Bn = W.y + Ee, Yn = Bn + q, Te = k.x, Se = Te + Z, Rt = k.y, _t = Rt + K, ht = Math.max(Cn, Te), St = Math.min(Sn, Se), Zt = (ht + St) / 2, Kt = Zt - Cn, rn = Math.max(Bn, Rt), En = Math.min(Yn, _t), dn = (rn + En) / 2, Hn = dn - Bn;
      i?.(t, Je);
      var jt = Le.right - W.x - (fe + W.width), Ar = Le.bottom - W.y - (Ee + W.height);
      Ie === 1 && (fe = Math.floor(fe), jt = Math.floor(jt)), Ae === 1 && (Ee = Math.floor(Ee), Ar = Math.floor(Ar));
      var X0 = {
        ready: !0,
        offsetX: fe / Ie,
        offsetY: Ee / Ae,
        offsetR: jt / Ie,
        offsetB: Ar / Ae,
        arrowX: Kt / Ie,
        arrowY: Hn / Ae,
        scaleX: Ie,
        scaleY: Ae,
        align: Je
      };
      u(X0);
    }
  }), g = function() {
    f.current += 1;
    var C = f.current;
    Promise.resolve().then(function() {
      f.current === C && h();
    });
  }, b = function() {
    u(function(C) {
      return P(P({}, C), {}, {
        ready: !1
      });
    });
  };
  return yt(b, [r]), yt(function() {
    e || b();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, g];
}
function xv(e, t, n, r, a) {
  yt(function() {
    if (e && t && n) {
      let f = function() {
        r(), a();
      };
      var o = t, i = n, s = mo(o), c = mo(i), l = r0(i), u = new Set([l].concat(se(s), se(c)));
      return u.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), l.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        u.forEach(function(v) {
          v.removeEventListener("scroll", f), l.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function Ov(e, t, n, r, a, o, i, s) {
  var c = d.useRef(e);
  c.current = e;
  var l = d.useRef(!1);
  d.useEffect(function() {
    if (t && r && (!a || o)) {
      var f = function() {
        l.current = !1;
      }, v = function(E) {
        var x;
        c.current && !i(((x = E.composedPath) === null || x === void 0 || (x = x.call(E)) === null || x === void 0 ? void 0 : x[0]) || E.target) && !l.current && s(!1);
      }, m = r0(r);
      m.addEventListener("pointerdown", f, !0), m.addEventListener("mousedown", v, !0), m.addEventListener("contextmenu", v, !0);
      var p = T0(n);
      if (p && (p.addEventListener("mousedown", v, !0), p.addEventListener("contextmenu", v, !0)), process.env.NODE_ENV !== "production") {
        var h, g, b = n == null || (h = n.getRootNode) === null || h === void 0 ? void 0 : h.call(n), y = (g = r.getRootNode) === null || g === void 0 ? void 0 : g.call(r);
        nr(b === y, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        m.removeEventListener("pointerdown", f, !0), m.removeEventListener("mousedown", v, !0), m.removeEventListener("contextmenu", v, !0), p && (p.removeEventListener("mousedown", v, !0), p.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, n, r, a, o]);
  function u() {
    l.current = !0;
  }
  return u;
}
var Rv = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function Pv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bo, t = /* @__PURE__ */ d.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, s = n.action, c = s === void 0 ? "hover" : s, l = n.showAction, u = n.hideAction, f = n.popupVisible, v = n.defaultPopupVisible, m = n.onPopupVisibleChange, p = n.afterPopupVisibleChange, h = n.mouseEnterDelay, g = n.mouseLeaveDelay, b = g === void 0 ? 0.1 : g, y = n.focusDelay, C = n.blurDelay, E = n.mask, x = n.maskClosable, S = x === void 0 ? !0 : x, O = n.getPopupContainer, w = n.forceRender, A = n.autoDestroy, M = n.destroyPopupOnHide, T = n.popup, D = n.popupClassName, _ = n.popupStyle, I = n.popupPlacement, V = n.builtinPlacements, F = V === void 0 ? {} : V, H = n.popupAlign, k = n.zIndex, J = n.stretch, U = n.getPopupClassNameFromAlign, z = n.fresh, W = n.alignPoint, Q = n.onPopupClick, ne = n.onPopupAlign, re = n.arrow, be = n.popupMotion, de = n.maskMotion, we = n.popupTransitionName, ge = n.popupAnimation, xe = n.maskTransitionName, Y = n.maskAnimation, j = n.className, q = n.getTriggerDOMNode, $ = bt(n, Rv), K = A || M || !1, Z = d.useState(!1), ve = N(Z, 2), ce = ve[0], ue = ve[1];
    yt(function() {
      ue(Pl());
    }, []);
    var Ce = d.useRef({}), me = d.useContext(d1), pe = d.useMemo(function() {
      return {
        registerSubPopup: function(ye, vt) {
          Ce.current[ye] = vt, me?.registerSubPopup(ye, vt);
        }
      };
    }, [me]), Oe = G2(), ie = d.useState(null), Qe = N(ie, 2), ze = Qe[0], Le = Qe[1], Ie = d.useRef(null), Ae = Wt(function(oe) {
      Ie.current = oe, kr(oe) && ze !== oe && Le(oe), me?.registerSubPopup(Oe, oe);
    }), Be = d.useState(null), Ve = N(Be, 2), it = Ve[0], st = Ve[1], Fe = d.useRef(null), Me = Wt(function(oe) {
      kr(oe) && it !== oe && (st(oe), Fe.current = oe);
    }), Ct = d.Children.only(i), Ge = Ct?.props || {}, ct = {}, lt = Wt(function(oe) {
      var ye, vt, Pt = it;
      return Pt?.contains(oe) || ((ye = T0(Pt)) === null || ye === void 0 ? void 0 : ye.host) === oe || oe === Pt || ze?.contains(oe) || ((vt = T0(ze)) === null || vt === void 0 ? void 0 : vt.host) === oe || oe === ze || Object.values(Ce.current).some(function(pt) {
        return pt?.contains(oe) || oe === pt;
      });
    }), Vt = m1(o, be, ge, we), wt = m1(o, de, Y, xe), Mt = d.useState(v || !1), It = N(Mt, 2), ft = It[0], qe = It[1], De = f ?? ft, rt = Wt(function(oe) {
      f === void 0 && qe(oe);
    });
    yt(function() {
      qe(f || !1);
    }, [f]);
    var Je = d.useRef(De);
    Je.current = De;
    var fe = d.useRef([]);
    fe.current = [];
    var Ee = Wt(function(oe) {
      var ye;
      rt(oe), ((ye = fe.current[fe.current.length - 1]) !== null && ye !== void 0 ? ye : De) !== oe && (fe.current.push(oe), m?.(oe));
    }), Ke = d.useRef(), ee = function() {
      clearTimeout(Ke.current);
    }, B = function(ye) {
      var vt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      ee(), vt === 0 ? Ee(ye) : Ke.current = setTimeout(function() {
        Ee(ye);
      }, vt * 1e3);
    };
    d.useEffect(function() {
      return ee;
    }, []);
    var L = d.useState(!1), G = N(L, 2), le = G[0], ae = G[1];
    yt(function(oe) {
      (!oe || De) && ae(!0);
    }, [De]);
    var He = d.useState(null), Ye = N(He, 2), tt = Ye[0], Ue = Ye[1], Dt = d.useState(null), dt = N(Dt, 2), Tt = dt[0], zt = dt[1], gt = function(ye) {
      zt([ye.clientX, ye.clientY]);
    }, Ot = wv(De, ze, W && Tt !== null ? Tt : it, I, F, H, ne), X = N(Ot, 11), te = X[0], Re = X[1], je = X[2], at = X[3], fn = X[4], Xt = X[5], pn = X[6], Vn = X[7], Qt = X[8], Jt = X[9], Ln = X[10], yn = Cv(ce, c, l, u), Jn = N(yn, 2), Pn = Jn[0], Yt = Jn[1], bn = Pn.has("click"), Cn = Yt.has("click") || Yt.has("contextMenu"), Sn = Wt(function() {
      le || Ln();
    }), Bn = function() {
      Je.current && W && Cn && B(!1);
    };
    xv(De, it, ze, Sn, Bn), yt(function() {
      Sn();
    }, [Tt, I]), yt(function() {
      De && !(F != null && F[I]) && Sn();
    }, [JSON.stringify(H)]);
    var Yn = d.useMemo(function() {
      var oe = Ev(F, o, Jt, W);
      return Xe(oe, U?.(Jt));
    }, [Jt, U, F, o, W]);
    d.useImperativeHandle(r, function() {
      return {
        nativeElement: Fe.current,
        popupElement: Ie.current,
        forceAlign: Sn
      };
    });
    var Te = d.useState(0), Se = N(Te, 2), Rt = Se[0], _t = Se[1], ht = d.useState(0), St = N(ht, 2), Zt = St[0], Kt = St[1], rn = function() {
      if (J && it) {
        var ye = it.getBoundingClientRect();
        _t(ye.width), Kt(ye.height);
      }
    }, En = function() {
      rn(), Sn();
    }, dn = function(ye) {
      ae(!1), Ln(), p?.(ye);
    }, Hn = function() {
      return new Promise(function(ye) {
        rn(), Ue(function() {
          return ye;
        });
      });
    };
    yt(function() {
      tt && (Ln(), tt(), Ue(null));
    }, [tt]);
    function jt(oe, ye, vt, Pt) {
      ct[oe] = function(pt) {
        var o0;
        Pt?.(pt), B(ye, vt);
        for (var Z0 = arguments.length, Qo = new Array(Z0 > 1 ? Z0 - 1 : 0), i0 = 1; i0 < Z0; i0++)
          Qo[i0 - 1] = arguments[i0];
        (o0 = Ge[oe]) === null || o0 === void 0 || o0.call.apply(o0, [Ge, pt].concat(Qo));
      };
    }
    (bn || Cn) && (ct.onClick = function(oe) {
      var ye;
      Je.current && Cn ? B(!1) : !Je.current && bn && (gt(oe), B(!0));
      for (var vt = arguments.length, Pt = new Array(vt > 1 ? vt - 1 : 0), pt = 1; pt < vt; pt++)
        Pt[pt - 1] = arguments[pt];
      (ye = Ge.onClick) === null || ye === void 0 || ye.call.apply(ye, [Ge, oe].concat(Pt));
    });
    var Ar = Ov(De, Cn, it, ze, E, S, lt, B), X0 = Pn.has("hover"), an = Yt.has("hover"), ir, Mr;
    X0 && (jt("onMouseEnter", !0, h, function(oe) {
      gt(oe);
    }), jt("onPointerEnter", !0, h, function(oe) {
      gt(oe);
    }), ir = function(ye) {
      (De || le) && ze !== null && ze !== void 0 && ze.contains(ye.target) && B(!0, h);
    }, W && (ct.onMouseMove = function(oe) {
      var ye;
      (ye = Ge.onMouseMove) === null || ye === void 0 || ye.call(Ge, oe);
    })), an && (jt("onMouseLeave", !1, b), jt("onPointerLeave", !1, b), Mr = function() {
      B(!1, b);
    }), Pn.has("focus") && jt("onFocus", !0, y), Yt.has("focus") && jt("onBlur", !1, C), Pn.has("contextMenu") && (ct.onContextMenu = function(oe) {
      var ye;
      Je.current && Yt.has("contextMenu") ? B(!1) : (gt(oe), B(!0)), oe.preventDefault();
      for (var vt = arguments.length, Pt = new Array(vt > 1 ? vt - 1 : 0), pt = 1; pt < vt; pt++)
        Pt[pt - 1] = arguments[pt];
      (ye = Ge.onContextMenu) === null || ye === void 0 || ye.call.apply(ye, [Ge, oe].concat(Pt));
    }), j && (ct.className = Xe(Ge.className, j));
    var An = d.useRef(!1);
    An.current || (An.current = w || De || le);
    var kn = P(P({}, Ge), ct), Ir = {}, a0 = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    a0.forEach(function(oe) {
      $[oe] && (Ir[oe] = function() {
        for (var ye, vt = arguments.length, Pt = new Array(vt), pt = 0; pt < vt; pt++)
          Pt[pt] = arguments[pt];
        (ye = kn[oe]) === null || ye === void 0 || ye.call.apply(ye, [kn].concat(Pt)), $[oe].apply($, Pt);
      });
    });
    var Q0 = /* @__PURE__ */ d.cloneElement(Ct, P(P({}, kn), Ir)), J0 = {
      x: Xt,
      y: pn
    }, Y0 = re ? P({}, re !== !0 ? re : {}) : null;
    return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Xn, {
      disabled: !De,
      ref: Me,
      onResize: En
    }, /* @__PURE__ */ d.createElement(Vl, {
      getTriggerDOMNode: q
    }, Q0)), An.current && /* @__PURE__ */ d.createElement(d1.Provider, {
      value: pe
    }, /* @__PURE__ */ d.createElement($l, {
      portal: e,
      ref: Ae,
      prefixCls: o,
      popup: T,
      className: Xe(D, Yn),
      style: _,
      target: it,
      onMouseEnter: ir,
      onMouseLeave: Mr,
      onPointerEnter: ir,
      zIndex: k,
      open: De,
      keepDom: le,
      fresh: z,
      onClick: Q,
      onPointerDownCapture: Ar,
      mask: E,
      motion: Vt,
      maskMotion: wt,
      onVisibleChanged: dn,
      onPrepare: Hn,
      forceRender: w,
      autoDestroy: K,
      getPopupContainer: O,
      align: Jt,
      arrow: Y0,
      arrowPos: J0,
      ready: te,
      offsetX: Re,
      offsetY: je,
      offsetR: at,
      offsetB: fn,
      onAlign: Sn,
      stretch: J,
      targetWidth: Rt / Vn,
      targetHeight: Zt / Qt
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Av = Pv(Bo);
var Mv = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], Iv = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, Dv = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var a = t.visible, o = t.children, i = t.popupElement, s = t.animation, c = t.transitionName, l = t.dropdownStyle, u = t.dropdownClassName, f = t.direction, v = f === void 0 ? "ltr" : f, m = t.placement, p = t.builtinPlacements, h = t.dropdownMatchSelectWidth, g = t.dropdownRender, b = t.dropdownAlign, y = t.getPopupContainer, C = t.empty, E = t.getTriggerDOMNode, x = t.onPopupVisibleChange, S = t.onPopupMouseEnter, O = bt(t, Mv), w = "".concat(r, "-dropdown"), A = i;
  g && (A = g(i));
  var M = d.useMemo(function() {
    return p || Iv(h);
  }, [p, h]), T = s ? "".concat(w, "-").concat(s) : c, D = typeof h == "number", _ = d.useMemo(function() {
    return D ? null : h === !1 ? "minWidth" : "width";
  }, [h, D]), I = l;
  D && (I = P(P({}, I), {}, {
    width: h
  }));
  var V = d.useRef(null);
  return d.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        var H;
        return (H = V.current) === null || H === void 0 ? void 0 : H.popupElement;
      }
    };
  }), /* @__PURE__ */ d.createElement(Av, We({}, O, {
    showAction: x ? ["click"] : [],
    hideAction: x ? ["click"] : [],
    popupPlacement: m || (v === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: M,
    prefixCls: w,
    popupTransitionName: T,
    popup: /* @__PURE__ */ d.createElement("div", {
      onMouseEnter: S
    }, A),
    ref: V,
    stretch: _,
    popupAlign: b,
    popupVisible: a,
    getPopupContainer: y,
    popupClassName: Xe(u, R({}, "".concat(w, "-empty"), C)),
    popupStyle: I,
    getTriggerDOMNode: E,
    onPopupVisibleChange: x
  }), o);
}, Ll = /* @__PURE__ */ d.forwardRef(Dv);
process.env.NODE_ENV !== "production" && (Ll.displayName = "SelectTrigger");
function b1(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function go(e) {
  return typeof e < "u" && !Number.isNaN(e);
}
function Bl(e, t) {
  var n = e || {}, r = n.label, a = n.value, o = n.options, i = n.groupLabel, s = r || (t ? "children" : "label");
  return {
    label: s,
    value: a || "value",
    options: o || "options",
    groupLabel: i || s
  };
}
function Tv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, a = [], o = Bl(n, !1), i = o.label, s = o.value, c = o.options, l = o.groupLabel;
  function u(f, v) {
    Array.isArray(f) && f.forEach(function(m) {
      if (v || !(c in m)) {
        var p = m[s];
        a.push({
          key: b1(m, a.length),
          groupOption: v,
          data: m,
          label: m[i],
          value: p
        });
      } else {
        var h = m[l];
        h === void 0 && r && (h = m.label), a.push({
          key: b1(m, a.length),
          group: !0,
          data: m,
          label: h
        }), u(m[c], !0);
      }
    });
  }
  return u(e, !1), a;
}
function ho(e) {
  var t = P({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return $e(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
var _v = function(t, n, r) {
  if (!n || !n.length)
    return null;
  var a = !1, o = function s(c, l) {
    var u = Cs(l), f = u[0], v = u.slice(1);
    if (!f)
      return [c];
    var m = c.split(f);
    return a = a || m.length > 1, m.reduce(function(p, h) {
      return [].concat(se(p), se(s(h, v)));
    }, []).filter(Boolean);
  }, i = o(t, n);
  return a ? typeof r < "u" ? i.slice(0, r) : i : null;
}, jo = /* @__PURE__ */ d.createContext(null);
function Nv(e) {
  var t = e.visible, n = e.values;
  if (!t)
    return null;
  var r = 50;
  return /* @__PURE__ */ d.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "".concat(n.slice(0, r).map(function(a) {
    var o = a.label, i = a.value;
    return ["number", "string"].includes(he(o)) ? o : i;
  }).join(", ")), n.length > r ? ", ..." : null);
}
var Fv = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "prefix", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], $v = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"], L0 = function(t) {
  return t === "tags" || t === "multiple";
}, Hl = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = e.id, a = e.prefixCls, o = e.className, i = e.showSearch, s = e.tagRender, c = e.direction, l = e.omitDomProps, u = e.displayValues, f = e.onDisplayValuesChange, v = e.emptyOptions, m = e.notFoundContent, p = m === void 0 ? "Not Found" : m, h = e.onClear, g = e.mode, b = e.disabled, y = e.loading, C = e.getInputElement, E = e.getRawInputElement, x = e.open, S = e.defaultOpen, O = e.onDropdownVisibleChange, w = e.activeValue, A = e.onActiveValueChange, M = e.activeDescendantId, T = e.searchValue, D = e.autoClearSearchValue, _ = e.onSearch, I = e.onSearchSplit, V = e.tokenSeparators, F = e.allowClear, H = e.prefix, k = e.suffixIcon, J = e.clearIcon, U = e.OptionList, z = e.animation, W = e.transitionName, Q = e.dropdownStyle, ne = e.dropdownClassName, re = e.dropdownMatchSelectWidth, be = e.dropdownRender, de = e.dropdownAlign, we = e.placement, ge = e.builtinPlacements, xe = e.getPopupContainer, Y = e.showAction, j = Y === void 0 ? [] : Y, q = e.onFocus, $ = e.onBlur, K = e.onKeyUp, Z = e.onKeyDown, ve = e.onMouseDown, ce = bt(e, Fv), ue = L0(g), Ce = (i !== void 0 ? i : ue) || g === "combobox", me = P({}, ce);
  $v.forEach(function(Te) {
    delete me[Te];
  }), l?.forEach(function(Te) {
    delete me[Te];
  });
  var pe = d.useState(!1), Oe = N(pe, 2), ie = Oe[0], Qe = Oe[1];
  d.useEffect(function() {
    Qe(Pl());
  }, []);
  var ze = d.useRef(null), Le = d.useRef(null), Ie = d.useRef(null), Ae = d.useRef(null), Be = d.useRef(null), Ve = d.useRef(!1), it = U3(), st = N(it, 3), Fe = st[0], Me = st[1], Ct = st[2];
  d.useImperativeHandle(t, function() {
    var Te, Se;
    return {
      focus: (Te = Ae.current) === null || Te === void 0 ? void 0 : Te.focus,
      blur: (Se = Ae.current) === null || Se === void 0 ? void 0 : Se.blur,
      scrollTo: function(_t) {
        var ht;
        return (ht = Be.current) === null || ht === void 0 ? void 0 : ht.scrollTo(_t);
      },
      nativeElement: ze.current || Le.current
    };
  });
  var Ge = d.useMemo(function() {
    var Te;
    if (g !== "combobox")
      return T;
    var Se = (Te = u[0]) === null || Te === void 0 ? void 0 : Te.value;
    return typeof Se == "string" || typeof Se == "number" ? String(Se) : "";
  }, [T, g, u]), ct = g === "combobox" && typeof C == "function" && C() || null, lt = typeof E == "function" && E(), Vt = H0(Le, lt == null || (n = lt.props) === null || n === void 0 ? void 0 : n.ref), wt = d.useState(!1), Mt = N(wt, 2), It = Mt[0], ft = Mt[1];
  yt(function() {
    ft(!0);
  }, []);
  var qe = D0(!1, {
    defaultValue: S,
    value: x
  }), De = N(qe, 2), rt = De[0], Je = De[1], fe = It ? rt : !1, Ee = !p && v;
  (b || Ee && fe && g === "combobox") && (fe = !1);
  var Ke = Ee ? !1 : fe, ee = d.useCallback(function(Te) {
    var Se = Te !== void 0 ? Te : !fe;
    b || (Je(Se), fe !== Se && O?.(Se));
  }, [b, fe, Je, O]), B = d.useMemo(function() {
    return (V || []).some(function(Te) {
      return [`
`, `\r
`].includes(Te);
    });
  }, [V]), L = d.useContext(jo) || {}, G = L.maxCount, le = L.rawValues, ae = function(Se, Rt, _t) {
    if (!(ue && go(G) && le?.size >= G)) {
      var ht = !0, St = Se;
      A?.(null);
      var Zt = _v(Se, V, go(G) ? G - le.size : void 0), Kt = _t ? null : Zt;
      return g !== "combobox" && Kt && (St = "", I?.(Kt), ee(!1), ht = !1), _ && Ge !== St && _(St, {
        source: Rt ? "typing" : "effect"
      }), ht;
    }
  }, He = function(Se) {
    !Se || !Se.trim() || _(Se, {
      source: "submit"
    });
  };
  d.useEffect(function() {
    !fe && !ue && g !== "combobox" && ae("", !1, !1);
  }, [fe]), d.useEffect(function() {
    rt && b && Je(!1), b && !Ve.current && Me(!1);
  }, [b]);
  var Ye = Ml(), tt = N(Ye, 2), Ue = tt[0], Dt = tt[1], dt = d.useRef(!1), Tt = function(Se) {
    var Rt = Ue(), _t = Se.key, ht = _t === "Enter";
    if (ht && (g !== "combobox" && Se.preventDefault(), fe || ee(!0)), Dt(!!Ge), _t === "Backspace" && !Rt && ue && !Ge && u.length) {
      for (var St = se(u), Zt = null, Kt = St.length - 1; Kt >= 0; Kt -= 1) {
        var rn = St[Kt];
        if (!rn.disabled) {
          St.splice(Kt, 1), Zt = rn;
          break;
        }
      }
      Zt && f(St, {
        type: "remove",
        values: [Zt]
      });
    }
    for (var En = arguments.length, dn = new Array(En > 1 ? En - 1 : 0), Hn = 1; Hn < En; Hn++)
      dn[Hn - 1] = arguments[Hn];
    if (fe && (!ht || !dt.current)) {
      var jt;
      ht && (dt.current = !0), (jt = Be.current) === null || jt === void 0 || jt.onKeyDown.apply(jt, [Se].concat(dn));
    }
    Z?.apply(void 0, [Se].concat(dn));
  }, zt = function(Se) {
    for (var Rt = arguments.length, _t = new Array(Rt > 1 ? Rt - 1 : 0), ht = 1; ht < Rt; ht++)
      _t[ht - 1] = arguments[ht];
    if (fe) {
      var St;
      (St = Be.current) === null || St === void 0 || St.onKeyUp.apply(St, [Se].concat(_t));
    }
    Se.key === "Enter" && (dt.current = !1), K?.apply(void 0, [Se].concat(_t));
  }, gt = function(Se) {
    var Rt = u.filter(function(_t) {
      return _t !== Se;
    });
    f(Rt, {
      type: "remove",
      values: [Se]
    });
  }, Ot = function() {
    dt.current = !1;
  }, X = d.useRef(!1), te = function() {
    Me(!0), b || (q && !X.current && q.apply(void 0, arguments), j.includes("focus") && ee(!0)), X.current = !0;
  }, Re = function() {
    Ve.current = !0, Me(!1, function() {
      X.current = !1, Ve.current = !1, ee(!1);
    }), !b && (Ge && (g === "tags" ? _(Ge, {
      source: "submit"
    }) : g === "multiple" && _("", {
      source: "blur"
    })), $ && $.apply(void 0, arguments));
  }, je = [];
  d.useEffect(function() {
    return function() {
      je.forEach(function(Te) {
        return clearTimeout(Te);
      }), je.splice(0, je.length);
    };
  }, []);
  var at = function(Se) {
    var Rt, _t = Se.target, ht = (Rt = Ie.current) === null || Rt === void 0 ? void 0 : Rt.getPopupElement();
    if (ht && ht.contains(_t)) {
      var St = setTimeout(function() {
        var En = je.indexOf(St);
        if (En !== -1 && je.splice(En, 1), Ct(), !ie && !ht.contains(document.activeElement)) {
          var dn;
          (dn = Ae.current) === null || dn === void 0 || dn.focus();
        }
      });
      je.push(St);
    }
    for (var Zt = arguments.length, Kt = new Array(Zt > 1 ? Zt - 1 : 0), rn = 1; rn < Zt; rn++)
      Kt[rn - 1] = arguments[rn];
    ve?.apply(void 0, [Se].concat(Kt));
  }, fn = d.useState({}), Xt = N(fn, 2), pn = Xt[1];
  function Vn() {
    pn({});
  }
  var Qt;
  lt && (Qt = function(Se) {
    ee(Se);
  }), K3(function() {
    var Te;
    return [ze.current, (Te = Ie.current) === null || Te === void 0 ? void 0 : Te.getPopupElement()];
  }, Ke, ee, !!lt);
  var Jt = d.useMemo(function() {
    return P(P({}, e), {}, {
      notFoundContent: p,
      open: fe,
      triggerOpen: Ke,
      id: r,
      showSearch: Ce,
      multiple: ue,
      toggleOpen: ee
    });
  }, [e, p, Ke, fe, r, Ce, ue, ee]), Ln = !!k || y, yn;
  Ln && (yn = /* @__PURE__ */ d.createElement(q0, {
    className: Xe("".concat(a, "-arrow"), R({}, "".concat(a, "-arrow-loading"), y)),
    customizeIcon: k,
    customizeIconProps: {
      loading: y,
      searchValue: Ge,
      open: fe,
      focused: Fe,
      showSearch: Ce
    }
  }));
  var Jn = function() {
    var Se;
    h?.(), (Se = Ae.current) === null || Se === void 0 || Se.focus(), f([], {
      type: "clear",
      values: u
    }), ae("", !1, !1);
  }, Pn = W3(a, Jn, u, F, J, b, Ge, g), Yt = Pn.allowClear, bn = Pn.clearIcon, Cn = /* @__PURE__ */ d.createElement(U, {
    ref: Be
  }), Sn = Xe(a, o, R(R(R(R(R(R(R(R(R(R({}, "".concat(a, "-focused"), Fe), "".concat(a, "-multiple"), ue), "".concat(a, "-single"), !ue), "".concat(a, "-allow-clear"), F), "".concat(a, "-show-arrow"), Ln), "".concat(a, "-disabled"), b), "".concat(a, "-loading"), y), "".concat(a, "-open"), fe), "".concat(a, "-customize-input"), ct), "".concat(a, "-show-search"), Ce)), Bn = /* @__PURE__ */ d.createElement(Ll, {
    ref: Ie,
    disabled: b,
    prefixCls: a,
    visible: Ke,
    popupElement: Cn,
    animation: z,
    transitionName: W,
    dropdownStyle: Q,
    dropdownClassName: ne,
    direction: c,
    dropdownMatchSelectWidth: re,
    dropdownRender: be,
    dropdownAlign: de,
    placement: we,
    builtinPlacements: ge,
    getPopupContainer: xe,
    empty: v,
    getTriggerDOMNode: function(Se) {
      return (
        // TODO: This is workaround and should be removed in `rc-select`
        // And use new standard `nativeElement` for ref.
        // But we should update `rc-resize-observer` first.
        Le.current || Se
      );
    },
    onPopupVisibleChange: Qt,
    onPopupMouseEnter: Vn
  }, lt ? /* @__PURE__ */ d.cloneElement(lt, {
    ref: Vt
  }) : /* @__PURE__ */ d.createElement(Nl, We({}, e, {
    domRef: Le,
    prefixCls: a,
    inputElement: ct,
    ref: Ae,
    id: r,
    prefix: H,
    showSearch: Ce,
    autoClearSearchValue: D,
    mode: g,
    activeDescendantId: M,
    tagRender: s,
    values: u,
    open: fe,
    onToggleOpen: ee,
    activeValue: w,
    searchValue: Ge,
    onSearch: ae,
    onSearchSubmit: He,
    onRemove: gt,
    tokenWithEnter: B,
    onInputBlur: Ot
  }))), Yn;
  return lt ? Yn = Bn : Yn = /* @__PURE__ */ d.createElement("div", We({
    className: Sn
  }, me, {
    ref: ze,
    onMouseDown: at,
    onKeyDown: Tt,
    onKeyUp: zt,
    onFocus: te,
    onBlur: Re
  }), /* @__PURE__ */ d.createElement(Nv, {
    visible: Fe && !fe,
    values: u
  }), Bn, yn, Yt && bn), /* @__PURE__ */ d.createElement(Al.Provider, {
    value: Jt
  }, Yn);
});
process.env.NODE_ENV !== "production" && (Hl.displayName = "BaseSelect");
var Wo = function() {
  return null;
};
Wo.isSelectOptGroup = !0;
var Go = function() {
  return null;
};
Go.isSelectOption = !0;
var kl = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, a = e.offsetX, o = e.children, i = e.prefixCls, s = e.onInnerResize, c = e.innerProps, l = e.rtl, u = e.extra, f = {}, v = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (f = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, v = P(P({}, v), {}, R(R(R(R(R({
    transform: "translateY(".concat(r, "px)")
  }, l ? "marginRight" : "marginLeft", -a), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ d.createElement("div", {
    style: f
  }, /* @__PURE__ */ d.createElement(Xn, {
    onResize: function(p) {
      var h = p.offsetHeight;
      h && s && s();
    }
  }, /* @__PURE__ */ d.createElement("div", We({
    style: v,
    className: Xe(R({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, c), o, u)));
});
kl.displayName = "Filler";
function Vv(e) {
  var t = e.children, n = e.setRef, r = d.useCallback(function(a) {
    n(a);
  }, []);
  return /* @__PURE__ */ d.cloneElement(t, {
    ref: r
  });
}
function Lv(e, t, n, r, a, o, i, s) {
  var c = s.getKey;
  return e.slice(t, n + 1).map(function(l, u) {
    var f = t + u, v = i(l, f, {
      style: {
        width: r
      },
      offsetX: a
    }), m = c(l);
    return /* @__PURE__ */ d.createElement(Vv, {
      key: m,
      setRef: function(h) {
        return o(l, h);
      }
    }, v);
  });
}
function Bv(e, t, n) {
  var r = e.length, a = t.length, o, i;
  if (r === 0 && a === 0)
    return null;
  r < a ? (o = e, i = t) : (o = t, i = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function c(p) {
    return p !== void 0 ? n(p) : s;
  }
  for (var l = null, u = Math.abs(r - a) !== 1, f = 0; f < i.length; f += 1) {
    var v = c(o[f]), m = c(i[f]);
    if (v !== m) {
      l = f, u = u || v !== c(i[f + 1]);
      break;
    }
  }
  return l === null ? null : {
    index: l,
    multiple: u
  };
}
function Hv(e, t, n) {
  var r = d.useState(e), a = N(r, 2), o = a[0], i = a[1], s = d.useState(null), c = N(s, 2), l = c[0], u = c[1];
  return d.useEffect(function() {
    var f = Bv(o || [], e || [], t);
    f?.index !== void 0 && u(e[f.index]), i(e);
  }, [e]), [l];
}
var C1 = (typeof navigator > "u" ? "undefined" : he(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const zl = (function(e, t, n, r) {
  var a = Ne(!1), o = Ne(null);
  function i() {
    clearTimeout(o.current), a.current = !0, o.current = setTimeout(function() {
      a.current = !1;
    }, 50);
  }
  var s = Ne({
    top: e,
    bottom: t,
    left: n,
    right: r
  });
  return s.current.top = e, s.current.bottom = t, s.current.left = n, s.current.right = r, function(c, l) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, f = c ? (
      // Pass origin wheel when on the left
      l < 0 && s.current.left || // Pass origin wheel when on the right
      l > 0 && s.current.right
    ) : l < 0 && s.current.top || // Pass origin wheel when on the bottom
    l > 0 && s.current.bottom;
    return u && f ? (clearTimeout(o.current), a.current = !1) : (!f || a.current) && i(), !a.current && f;
  };
});
function kv(e, t, n, r, a, o, i) {
  var s = Ne(0), c = Ne(null), l = Ne(null), u = Ne(!1), f = zl(t, n, r, a);
  function v(y, C) {
    if (Gt.cancel(c.current), !f(!1, C)) {
      var E = y;
      if (!E._virtualHandled)
        E._virtualHandled = !0;
      else
        return;
      s.current += C, l.current = C, C1 || E.preventDefault(), c.current = Gt(function() {
        var x = u.current ? 10 : 1;
        i(s.current * x, !1), s.current = 0;
      });
    }
  }
  function m(y, C) {
    i(C, !0), C1 || y.preventDefault();
  }
  var p = Ne(null), h = Ne(null);
  function g(y) {
    if (e) {
      Gt.cancel(h.current), h.current = Gt(function() {
        p.current = null;
      }, 2);
      var C = y.deltaX, E = y.deltaY, x = y.shiftKey, S = C, O = E;
      (p.current === "sx" || !p.current && x && E && !C) && (S = E, O = 0, p.current = "sx");
      var w = Math.abs(S), A = Math.abs(O);
      p.current === null && (p.current = o && w > A ? "x" : "y"), p.current === "y" ? v(y, O) : m(y, S);
    }
  }
  function b(y) {
    e && (u.current = y.detail === l.current);
  }
  return [g, b];
}
function zv(e, t, n, r) {
  var a = d.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), o = N(a, 2), i = o[0], s = o[1], c = function(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u, v = i.get(u), m = i.get(f);
    if (v === void 0 || m === void 0)
      for (var p = e.length, h = s.length; h < p; h += 1) {
        var g, b = e[h], y = t(b);
        i.set(y, h);
        var C = (g = n.get(y)) !== null && g !== void 0 ? g : r;
        if (s[h] = (s[h - 1] || 0) + C, y === u && (v = h), y === f && (m = h), v !== void 0 && m !== void 0)
          break;
      }
    return {
      top: s[v - 1] || 0,
      bottom: s[m]
    };
  };
  return c;
}
var jv = /* @__PURE__ */ (function() {
  function e() {
    Ft(this, e), R(this, "maps", void 0), R(this, "id", 0), R(this, "diffRecords", /* @__PURE__ */ new Map()), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return $t(e, [{
    key: "set",
    value: function(n, r) {
      this.diffRecords.set(n, this.maps[n]), this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function() {
      this.diffRecords.clear();
    }
  }, {
    key: "getRecord",
    value: function() {
      return this.diffRecords;
    }
  }]), e;
})();
function S1(e) {
  var t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
function Wv(e, t, n) {
  var r = d.useState(0), a = N(r, 2), o = a[0], i = a[1], s = Ne(/* @__PURE__ */ new Map()), c = Ne(new jv()), l = Ne(0);
  function u() {
    l.current += 1;
  }
  function f() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    u();
    var p = function() {
      var b = !1;
      s.current.forEach(function(y, C) {
        if (y && y.offsetParent) {
          var E = y.offsetHeight, x = getComputedStyle(y), S = x.marginTop, O = x.marginBottom, w = S1(S), A = S1(O), M = E + w + A;
          c.current.get(C) !== M && (c.current.set(C, M), b = !0);
        }
      }), b && i(function(y) {
        return y + 1;
      });
    };
    if (m)
      p();
    else {
      l.current += 1;
      var h = l.current;
      Promise.resolve().then(function() {
        h === l.current && p();
      });
    }
  }
  function v(m, p) {
    var h = e(m);
    s.current.get(h), p ? (s.current.set(h, p), f()) : s.current.delete(h);
  }
  return Tn(function() {
    return u;
  }, []), [v, f, c.current, o];
}
var E1 = 14 / 15;
function Gv(e, t, n) {
  var r = Ne(!1), a = Ne(0), o = Ne(0), i = Ne(null), s = Ne(null), c, l = function(m) {
    if (r.current) {
      var p = Math.ceil(m.touches[0].pageX), h = Math.ceil(m.touches[0].pageY), g = a.current - p, b = o.current - h, y = Math.abs(g) > Math.abs(b);
      y ? a.current = p : o.current = h;
      var C = n(y, y ? g : b, !1, m);
      C && m.preventDefault(), clearInterval(s.current), C && (s.current = setInterval(function() {
        y ? g *= E1 : b *= E1;
        var E = Math.floor(y ? g : b);
        (!n(y, E, !0) || Math.abs(E) <= 0.1) && clearInterval(s.current);
      }, 16));
    }
  }, u = function() {
    r.current = !1, c();
  }, f = function(m) {
    c(), m.touches.length === 1 && !r.current && (r.current = !0, a.current = Math.ceil(m.touches[0].pageX), o.current = Math.ceil(m.touches[0].pageY), i.current = m.target, i.current.addEventListener("touchmove", l, {
      passive: !1
    }), i.current.addEventListener("touchend", u, {
      passive: !0
    }));
  };
  c = function() {
    i.current && (i.current.removeEventListener("touchmove", l), i.current.removeEventListener("touchend", u));
  }, yt(function() {
    return e && t.current.addEventListener("touchstart", f, {
      passive: !0
    }), function() {
      var v;
      (v = t.current) === null || v === void 0 || v.removeEventListener("touchstart", f), c(), clearInterval(s.current);
    };
  }, [e]);
}
function w1(e) {
  return Math.floor(Math.pow(e, 0.5));
}
function po(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"];
}
function Uv(e, t, n) {
  d.useEffect(function() {
    var r = t.current;
    if (e && r) {
      var a = !1, o, i, s = function() {
        Gt.cancel(o);
      }, c = function v() {
        s(), o = Gt(function() {
          n(i), v();
        });
      }, l = function() {
        a = !1, s();
      }, u = function(m) {
        if (!(m.target.draggable || m.button !== 0)) {
          var p = m;
          p._virtualHandled || (p._virtualHandled = !0, a = !0);
        }
      }, f = function(m) {
        if (a) {
          var p = po(m, !1), h = r.getBoundingClientRect(), g = h.top, b = h.bottom;
          if (p <= g) {
            var y = g - p;
            i = -w1(y), c();
          } else if (p >= b) {
            var C = p - b;
            i = w1(C), c();
          } else
            s();
        }
      };
      return r.addEventListener("mousedown", u), r.ownerDocument.addEventListener("mouseup", l), r.ownerDocument.addEventListener("mousemove", f), r.ownerDocument.addEventListener("dragend", l), function() {
        r.removeEventListener("mousedown", u), r.ownerDocument.removeEventListener("mouseup", l), r.ownerDocument.removeEventListener("mousemove", f), r.ownerDocument.removeEventListener("dragend", l), s();
      };
    }
  }, [e]);
}
var x1 = 10;
function Kv(e, t, n, r, a, o, i, s) {
  var c = d.useRef(), l = d.useState(null), u = N(l, 2), f = u[0], v = u[1];
  return yt(function() {
    if (f && f.times < x1) {
      if (!e.current) {
        v(function(J) {
          return P({}, J);
        });
        return;
      }
      o();
      var m = f.targetAlign, p = f.originAlign, h = f.index, g = f.offset, b = e.current.clientHeight, y = !1, C = m, E = null;
      if (b) {
        for (var x = m || p, S = 0, O = 0, w = 0, A = Math.min(t.length - 1, h), M = 0; M <= A; M += 1) {
          var T = a(t[M]);
          O = S;
          var D = n.get(T);
          w = O + (D === void 0 ? r : D), S = w;
        }
        for (var _ = x === "top" ? g : b - g, I = A; I >= 0; I -= 1) {
          var V = a(t[I]), F = n.get(V);
          if (F === void 0) {
            y = !0;
            break;
          }
          if (_ -= F, _ <= 0)
            break;
        }
        switch (x) {
          case "top":
            E = O - g;
            break;
          case "bottom":
            E = w - b + g;
            break;
          default: {
            var H = e.current.scrollTop, k = H + b;
            O < H ? C = "top" : w > k && (C = "bottom");
          }
        }
        E !== null && i(E), E !== f.lastTop && (y = !0);
      }
      y && v(P(P({}, f), {}, {
        times: f.times + 1,
        targetAlign: C,
        lastTop: E
      }));
    } else process.env.NODE_ENV !== "production" && f?.times === x1 && $e(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [f, e.current]), function(m) {
    if (m == null) {
      s();
      return;
    }
    if (Gt.cancel(c.current), typeof m == "number")
      i(m);
    else if (m && he(m) === "object") {
      var p, h = m.align;
      "index" in m ? p = m.index : p = t.findIndex(function(y) {
        return a(y) === m.key;
      });
      var g = m.offset, b = g === void 0 ? 0 : g;
      v({
        times: 0,
        index: p,
        offset: b,
        originAlign: h
      });
    }
  };
}
var yo = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.rtl, a = e.scrollOffset, o = e.scrollRange, i = e.onStartMove, s = e.onStopMove, c = e.onScroll, l = e.horizontal, u = e.spinSize, f = e.containerSize, v = e.style, m = e.thumbStyle, p = e.showScrollBar, h = d.useState(!1), g = N(h, 2), b = g[0], y = g[1], C = d.useState(null), E = N(C, 2), x = E[0], S = E[1], O = d.useState(null), w = N(O, 2), A = w[0], M = w[1], T = !r, D = d.useRef(), _ = d.useRef(), I = d.useState(p), V = N(I, 2), F = V[0], H = V[1], k = d.useRef(), J = function() {
    p === !0 || p === !1 || (clearTimeout(k.current), H(!0), k.current = setTimeout(function() {
      H(!1);
    }, 3e3));
  }, U = o - f || 0, z = f - u || 0, W = d.useMemo(function() {
    if (a === 0 || U === 0)
      return 0;
    var Y = a / U;
    return Y * z;
  }, [a, U, z]), Q = function(j) {
    j.stopPropagation(), j.preventDefault();
  }, ne = d.useRef({
    top: W,
    dragging: b,
    pageY: x,
    startTop: A
  });
  ne.current = {
    top: W,
    dragging: b,
    pageY: x,
    startTop: A
  };
  var re = function(j) {
    y(!0), S(po(j, l)), M(ne.current.top), i(), j.stopPropagation(), j.preventDefault();
  };
  d.useEffect(function() {
    var Y = function(K) {
      K.preventDefault();
    }, j = D.current, q = _.current;
    return j.addEventListener("touchstart", Y, {
      passive: !1
    }), q.addEventListener("touchstart", re, {
      passive: !1
    }), function() {
      j.removeEventListener("touchstart", Y), q.removeEventListener("touchstart", re);
    };
  }, []);
  var be = d.useRef();
  be.current = U;
  var de = d.useRef();
  de.current = z, d.useEffect(function() {
    if (b) {
      var Y, j = function(K) {
        var Z = ne.current, ve = Z.dragging, ce = Z.pageY, ue = Z.startTop;
        Gt.cancel(Y);
        var Ce = D.current.getBoundingClientRect(), me = f / (l ? Ce.width : Ce.height);
        if (ve) {
          var pe = (po(K, l) - ce) * me, Oe = ue;
          !T && l ? Oe -= pe : Oe += pe;
          var ie = be.current, Qe = de.current, ze = Qe ? Oe / Qe : 0, Le = Math.ceil(ze * ie);
          Le = Math.max(Le, 0), Le = Math.min(Le, ie), Y = Gt(function() {
            c(Le, l);
          });
        }
      }, q = function() {
        y(!1), s();
      };
      return window.addEventListener("mousemove", j, {
        passive: !0
      }), window.addEventListener("touchmove", j, {
        passive: !0
      }), window.addEventListener("mouseup", q, {
        passive: !0
      }), window.addEventListener("touchend", q, {
        passive: !0
      }), function() {
        window.removeEventListener("mousemove", j), window.removeEventListener("touchmove", j), window.removeEventListener("mouseup", q), window.removeEventListener("touchend", q), Gt.cancel(Y);
      };
    }
  }, [b]), d.useEffect(function() {
    return J(), function() {
      clearTimeout(k.current);
    };
  }, [a]), d.useImperativeHandle(t, function() {
    return {
      delayHidden: J
    };
  });
  var we = "".concat(n, "-scrollbar"), ge = {
    position: "absolute",
    visibility: F ? null : "hidden"
  }, xe = {
    position: "absolute",
    borderRadius: 99,
    background: "var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",
    cursor: "pointer",
    userSelect: "none"
  };
  return l ? (Object.assign(ge, {
    height: 8,
    left: 0,
    right: 0,
    bottom: 0
  }), Object.assign(xe, R({
    height: "100%",
    width: u
  }, T ? "left" : "right", W))) : (Object.assign(ge, R({
    width: 8,
    top: 0,
    bottom: 0
  }, T ? "right" : "left", 0)), Object.assign(xe, {
    width: "100%",
    height: u,
    top: W
  })), /* @__PURE__ */ d.createElement("div", {
    ref: D,
    className: Xe(we, R(R(R({}, "".concat(we, "-horizontal"), l), "".concat(we, "-vertical"), !l), "".concat(we, "-visible"), F)),
    style: P(P({}, ge), v),
    onMouseDown: Q,
    onMouseMove: J
  }, /* @__PURE__ */ d.createElement("div", {
    ref: _,
    className: Xe("".concat(we, "-thumb"), R({}, "".concat(we, "-thumb-moving"), b)),
    style: P(P({}, xe), m),
    onMouseDown: re
  }));
});
process.env.NODE_ENV !== "production" && (yo.displayName = "ScrollBar");
var qv = 20;
function O1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * e;
  return isNaN(n) && (n = 0), n = Math.max(n, qv), Math.floor(n);
}
var Xv = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"], Qv = [], Jv = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function Yv(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, a = e.className, o = e.height, i = e.itemHeight, s = e.fullHeight, c = s === void 0 ? !0 : s, l = e.style, u = e.data, f = e.children, v = e.itemKey, m = e.virtual, p = e.direction, h = e.scrollWidth, g = e.component, b = g === void 0 ? "div" : g, y = e.onScroll, C = e.onVirtualScroll, E = e.onVisibleChange, x = e.innerProps, S = e.extraRender, O = e.styles, w = e.showScrollBar, A = w === void 0 ? "optional" : w, M = bt(e, Xv), T = d.useCallback(function(X) {
    return typeof v == "function" ? v(X) : X?.[v];
  }, [v]), D = Wv(T), _ = N(D, 4), I = _[0], V = _[1], F = _[2], H = _[3], k = !!(m !== !1 && o && i), J = d.useMemo(function() {
    return Object.values(F.maps).reduce(function(X, te) {
      return X + te;
    }, 0);
  }, [F.id, F.maps]), U = k && u && (Math.max(i * u.length, J) > o || !!h), z = p === "rtl", W = Xe(r, R({}, "".concat(r, "-rtl"), z), a), Q = u || Qv, ne = Ne(), re = Ne(), be = Ne(), de = On(0), we = N(de, 2), ge = we[0], xe = we[1], Y = On(0), j = N(Y, 2), q = j[0], $ = j[1], K = On(!1), Z = N(K, 2), ve = Z[0], ce = Z[1], ue = function() {
    ce(!0);
  }, Ce = function() {
    ce(!1);
  }, me = {
    getKey: T
  };
  function pe(X) {
    xe(function(te) {
      var Re;
      typeof X == "function" ? Re = X(te) : Re = X;
      var je = ft(Re);
      return ne.current.scrollTop = je, je;
    });
  }
  var Oe = Ne({
    start: 0,
    end: Q.length
  }), ie = Ne(), Qe = Hv(Q, T), ze = N(Qe, 1), Le = ze[0];
  ie.current = Le;
  var Ie = d.useMemo(function() {
    if (!k)
      return {
        scrollHeight: void 0,
        start: 0,
        end: Q.length - 1,
        offset: void 0
      };
    if (!U) {
      var X;
      return {
        scrollHeight: ((X = re.current) === null || X === void 0 ? void 0 : X.offsetHeight) || 0,
        start: 0,
        end: Q.length - 1,
        offset: void 0
      };
    }
    for (var te = 0, Re, je, at, fn = Q.length, Xt = 0; Xt < fn; Xt += 1) {
      var pn = Q[Xt], Vn = T(pn), Qt = F.get(Vn), Jt = te + (Qt === void 0 ? i : Qt);
      Jt >= ge && Re === void 0 && (Re = Xt, je = te), Jt > ge + o && at === void 0 && (at = Xt), te = Jt;
    }
    return Re === void 0 && (Re = 0, je = 0, at = Math.ceil(o / i)), at === void 0 && (at = Q.length - 1), at = Math.min(at + 1, Q.length - 1), {
      scrollHeight: te,
      start: Re,
      end: at,
      offset: je
    };
  }, [U, k, ge, Q, H, o]), Ae = Ie.scrollHeight, Be = Ie.start, Ve = Ie.end, it = Ie.offset;
  Oe.current.start = Be, Oe.current.end = Ve, d.useLayoutEffect(function() {
    var X = F.getRecord();
    if (X.size === 1) {
      var te = Array.from(X.keys())[0], Re = X.get(te), je = Q[Be];
      if (je && Re === void 0) {
        var at = T(je);
        if (at === te) {
          var fn = F.get(te), Xt = fn - i;
          pe(function(pn) {
            return pn + Xt;
          });
        }
      }
    }
    F.resetRecord();
  }, [Ae]);
  var st = d.useState({
    width: 0,
    height: o
  }), Fe = N(st, 2), Me = Fe[0], Ct = Fe[1], Ge = function(te) {
    Ct({
      width: te.offsetWidth,
      height: te.offsetHeight
    });
  }, ct = Ne(), lt = Ne(), Vt = d.useMemo(function() {
    return O1(Me.width, h);
  }, [Me.width, h]), wt = d.useMemo(function() {
    return O1(Me.height, Ae);
  }, [Me.height, Ae]), Mt = Ae - o, It = Ne(Mt);
  It.current = Mt;
  function ft(X) {
    var te = X;
    return Number.isNaN(It.current) || (te = Math.min(te, It.current)), te = Math.max(te, 0), te;
  }
  var qe = ge <= 0, De = ge >= Mt, rt = q <= 0, Je = q >= h, fe = zl(qe, De, rt, Je), Ee = function() {
    return {
      x: z ? -q : q,
      y: ge
    };
  }, Ke = Ne(Ee()), ee = Wt(function(X) {
    if (C) {
      var te = P(P({}, Ee()), X);
      (Ke.current.x !== te.x || Ke.current.y !== te.y) && (C(te), Ke.current = te);
    }
  });
  function B(X, te) {
    var Re = X;
    te ? (Hr.flushSync(function() {
      $(Re);
    }), ee()) : pe(Re);
  }
  function L(X) {
    var te = X.currentTarget.scrollTop;
    te !== ge && pe(te), y?.(X), ee();
  }
  var G = function(te) {
    var Re = te, je = h ? h - Me.width : 0;
    return Re = Math.max(Re, 0), Re = Math.min(Re, je), Re;
  }, le = Wt(function(X, te) {
    te ? (Hr.flushSync(function() {
      $(function(Re) {
        var je = Re + (z ? -X : X);
        return G(je);
      });
    }), ee()) : pe(function(Re) {
      var je = Re + X;
      return je;
    });
  }), ae = kv(k, qe, De, rt, Je, !!h, le), He = N(ae, 2), Ye = He[0], tt = He[1];
  Gv(k, ne, function(X, te, Re, je) {
    var at = je;
    return fe(X, te, Re) ? !1 : !at || !at._virtualHandled ? (at && (at._virtualHandled = !0), Ye({
      preventDefault: function() {
      },
      deltaX: X ? te : 0,
      deltaY: X ? 0 : te
    }), !0) : !1;
  }), Uv(U, ne, function(X) {
    pe(function(te) {
      return te + X;
    });
  }), yt(function() {
    function X(Re) {
      var je = qe && Re.detail < 0, at = De && Re.detail > 0;
      k && !je && !at && Re.preventDefault();
    }
    var te = ne.current;
    return te.addEventListener("wheel", Ye, {
      passive: !1
    }), te.addEventListener("DOMMouseScroll", tt, {
      passive: !0
    }), te.addEventListener("MozMousePixelScroll", X, {
      passive: !1
    }), function() {
      te.removeEventListener("wheel", Ye), te.removeEventListener("DOMMouseScroll", tt), te.removeEventListener("MozMousePixelScroll", X);
    };
  }, [k, qe, De]), yt(function() {
    if (h) {
      var X = G(q);
      $(X), ee({
        x: X
      });
    }
  }, [Me.width, h]);
  var Ue = function() {
    var te, Re;
    (te = ct.current) === null || te === void 0 || te.delayHidden(), (Re = lt.current) === null || Re === void 0 || Re.delayHidden();
  }, Dt = Kv(ne, Q, F, i, T, function() {
    return V(!0);
  }, pe, Ue);
  d.useImperativeHandle(t, function() {
    return {
      nativeElement: be.current,
      getScrollInfo: Ee,
      scrollTo: function(te) {
        function Re(je) {
          return je && he(je) === "object" && ("left" in je || "top" in je);
        }
        Re(te) ? (te.left !== void 0 && $(G(te.left)), Dt(te.top)) : Dt(te);
      }
    };
  }), yt(function() {
    if (E) {
      var X = Q.slice(Be, Ve + 1);
      E(X, Q);
    }
  }, [Be, Ve, Q]);
  var dt = zv(Q, T, F, i), Tt = S?.({
    start: Be,
    end: Ve,
    virtual: U,
    offsetX: q,
    offsetY: it,
    rtl: z,
    getSize: dt
  }), zt = Lv(Q, Be, Ve, h, q, I, f, me), gt = null;
  o && (gt = P(R({}, c ? "height" : "maxHeight", o), Jv), k && (gt.overflowY = "hidden", h && (gt.overflowX = "hidden"), ve && (gt.pointerEvents = "none")));
  var Ot = {};
  return z && (Ot.dir = "rtl"), /* @__PURE__ */ d.createElement("div", We({
    ref: be,
    style: P(P({}, l), {}, {
      position: "relative"
    }),
    className: W
  }, Ot, M), /* @__PURE__ */ d.createElement(Xn, {
    onResize: Ge
  }, /* @__PURE__ */ d.createElement(b, {
    className: "".concat(r, "-holder"),
    style: gt,
    ref: ne,
    onScroll: L,
    onMouseEnter: Ue
  }, /* @__PURE__ */ d.createElement(kl, {
    prefixCls: r,
    height: Ae,
    offsetX: q,
    offsetY: it,
    scrollWidth: h,
    onInnerResize: V,
    ref: re,
    innerProps: x,
    rtl: z,
    extra: Tt
  }, zt))), U && Ae > o && /* @__PURE__ */ d.createElement(yo, {
    ref: ct,
    prefixCls: r,
    scrollOffset: ge,
    scrollRange: Ae,
    rtl: z,
    onScroll: B,
    onStartMove: ue,
    onStopMove: Ce,
    spinSize: wt,
    containerSize: Me.height,
    style: O?.verticalScrollBar,
    thumbStyle: O?.verticalScrollBarThumb,
    showScrollBar: A
  }), U && h > Me.width && /* @__PURE__ */ d.createElement(yo, {
    ref: lt,
    prefixCls: r,
    scrollOffset: q,
    scrollRange: h,
    rtl: z,
    onScroll: B,
    onStartMove: ue,
    onStopMove: Ce,
    spinSize: Vt,
    containerSize: Me.width,
    horizontal: !0,
    style: O?.horizontalScrollBar,
    thumbStyle: O?.horizontalScrollBarThumb,
    showScrollBar: A
  }));
}
var jl = /* @__PURE__ */ d.forwardRef(Yv);
jl.displayName = "List";
function Zv() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var e4 = ["disabled", "title", "children", "style", "className"];
function R1(e) {
  return typeof e == "string" || typeof e == "number";
}
var t4 = function(t, n) {
  var r = G3(), a = r.prefixCls, o = r.id, i = r.open, s = r.multiple, c = r.mode, l = r.searchValue, u = r.toggleOpen, f = r.notFoundContent, v = r.onPopupScroll, m = d.useContext(jo), p = m.maxCount, h = m.flattenOptions, g = m.onActiveValue, b = m.defaultActiveFirstOption, y = m.onSelect, C = m.menuItemSelectedIcon, E = m.rawValues, x = m.fieldNames, S = m.virtual, O = m.direction, w = m.listHeight, A = m.listItemHeight, M = m.optionRender, T = "".concat(a, "-item"), D = B0(function() {
    return h;
  }, [i, h], function(Y, j) {
    return j[0] && Y[1] !== j[1];
  }), _ = d.useRef(null), I = d.useMemo(function() {
    return s && go(p) && E?.size >= p;
  }, [s, p, E?.size]), V = function(j) {
    j.preventDefault();
  }, F = function(j) {
    var q;
    (q = _.current) === null || q === void 0 || q.scrollTo(typeof j == "number" ? {
      index: j
    } : j);
  }, H = d.useCallback(function(Y) {
    return c === "combobox" ? !1 : E.has(Y);
  }, [c, se(E).toString(), E.size]), k = function(j) {
    for (var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, $ = D.length, K = 0; K < $; K += 1) {
      var Z = (j + K * q + $) % $, ve = D[Z] || {}, ce = ve.group, ue = ve.data;
      if (!ce && !(ue != null && ue.disabled) && (H(ue.value) || !I))
        return Z;
    }
    return -1;
  }, J = d.useState(function() {
    return k(0);
  }), U = N(J, 2), z = U[0], W = U[1], Q = function(j) {
    var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    W(j);
    var $ = {
      source: q ? "keyboard" : "mouse"
    }, K = D[j];
    if (!K) {
      g(null, -1, $);
      return;
    }
    g(K.value, j, $);
  };
  Tn(function() {
    Q(b !== !1 ? k(0) : -1);
  }, [D.length, l]);
  var ne = d.useCallback(function(Y) {
    return c === "combobox" ? String(Y).toLowerCase() === l.toLowerCase() : E.has(Y);
  }, [c, l, se(E).toString(), E.size]);
  Tn(function() {
    var Y = setTimeout(function() {
      if (!s && i && E.size === 1) {
        var q = Array.from(E)[0], $ = D.findIndex(function(K) {
          var Z = K.data;
          return l ? String(Z.value).startsWith(l) : Z.value === q;
        });
        $ !== -1 && (Q($), F($));
      }
    });
    if (i) {
      var j;
      (j = _.current) === null || j === void 0 || j.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(Y);
    };
  }, [i, l]);
  var re = function(j) {
    j !== void 0 && y(j, {
      selected: !E.has(j)
    }), s || u(!1);
  };
  if (d.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(j) {
        var q = j.which, $ = j.ctrlKey;
        switch (q) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case Pe.N:
          case Pe.P:
          case Pe.UP:
          case Pe.DOWN: {
            var K = 0;
            if (q === Pe.UP ? K = -1 : q === Pe.DOWN ? K = 1 : Zv() && $ && (q === Pe.N ? K = 1 : q === Pe.P && (K = -1)), K !== 0) {
              var Z = k(z + K, K);
              F(Z), Q(Z, !0);
            }
            break;
          }
          // >>> Select (Tab / Enter)
          case Pe.TAB:
          case Pe.ENTER: {
            var ve, ce = D[z];
            ce && !(ce != null && (ve = ce.data) !== null && ve !== void 0 && ve.disabled) && !I ? re(ce.value) : re(void 0), i && j.preventDefault();
            break;
          }
          // >>> Close
          case Pe.ESC:
            u(!1), i && j.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(j) {
        F(j);
      }
    };
  }), D.length === 0)
    return /* @__PURE__ */ d.createElement("div", {
      role: "listbox",
      id: "".concat(o, "_list"),
      className: "".concat(T, "-empty"),
      onMouseDown: V
    }, f);
  var be = Object.keys(x).map(function(Y) {
    return x[Y];
  }), de = function(j) {
    return j.label;
  };
  function we(Y, j) {
    var q = Y.group;
    return {
      role: q ? "presentation" : "option",
      id: "".concat(o, "_list_").concat(j)
    };
  }
  var ge = function(j) {
    var q = D[j];
    if (!q)
      return null;
    var $ = q.data || {}, K = $.value, Z = q.group, ve = _0($, !0), ce = de(q);
    return q ? /* @__PURE__ */ d.createElement("div", We({
      "aria-label": typeof ce == "string" && !Z ? ce : null
    }, ve, {
      key: j
    }, we(q, j), {
      "aria-selected": ne(K)
    }), K) : null;
  }, xe = {
    role: "listbox",
    id: "".concat(o, "_list")
  };
  return /* @__PURE__ */ d.createElement(d.Fragment, null, S && /* @__PURE__ */ d.createElement("div", We({}, xe, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), ge(z - 1), ge(z), ge(z + 1)), /* @__PURE__ */ d.createElement(jl, {
    itemKey: "key",
    ref: _,
    data: D,
    height: w,
    itemHeight: A,
    fullHeight: !1,
    onMouseDown: V,
    onScroll: v,
    virtual: S,
    direction: O,
    innerProps: S ? null : xe
  }, function(Y, j) {
    var q = Y.group, $ = Y.groupOption, K = Y.data, Z = Y.label, ve = Y.value, ce = K.key;
    if (q) {
      var ue, Ce = (ue = K.title) !== null && ue !== void 0 ? ue : R1(Z) ? Z.toString() : void 0;
      return /* @__PURE__ */ d.createElement("div", {
        className: Xe(T, "".concat(T, "-group"), K.className),
        title: Ce
      }, Z !== void 0 ? Z : ce);
    }
    var me = K.disabled, pe = K.title;
    K.children;
    var Oe = K.style, ie = K.className, Qe = bt(K, e4), ze = K0(Qe, be), Le = H(ve), Ie = me || !Le && I, Ae = "".concat(T, "-option"), Be = Xe(T, Ae, ie, R(R(R(R({}, "".concat(Ae, "-grouped"), $), "".concat(Ae, "-active"), z === j && !Ie), "".concat(Ae, "-disabled"), Ie), "".concat(Ae, "-selected"), Le)), Ve = de(Y), it = !C || typeof C == "function" || Le, st = typeof Ve == "number" ? Ve : Ve || ve, Fe = R1(st) ? st.toString() : void 0;
    return pe !== void 0 && (Fe = pe), /* @__PURE__ */ d.createElement("div", We({}, _0(ze), S ? {} : we(Y, j), {
      "aria-selected": ne(ve),
      className: Be,
      title: Fe,
      onMouseMove: function() {
        z === j || Ie || Q(j);
      },
      onClick: function() {
        Ie || re(ve);
      },
      style: Oe
    }), /* @__PURE__ */ d.createElement("div", {
      className: "".concat(Ae, "-content")
    }, typeof M == "function" ? M(Y, {
      index: j
    }) : st), /* @__PURE__ */ d.isValidElement(C) || Le, it && /* @__PURE__ */ d.createElement(q0, {
      className: "".concat(T, "-option-state"),
      customizeIcon: C,
      customizeIconProps: {
        value: ve,
        disabled: Ie,
        isSelected: Le
      }
    }, Le ? "✓" : null));
  }));
}, Wl = /* @__PURE__ */ d.forwardRef(t4);
process.env.NODE_ENV !== "production" && (Wl.displayName = "OptionList");
const n4 = (function(e, t) {
  var n = d.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = d.useMemo(function() {
    var o = n.current, i = o.values, s = o.options, c = e.map(function(f) {
      if (f.label === void 0) {
        var v;
        return P(P({}, f), {}, {
          label: (v = i.get(f.value)) === null || v === void 0 ? void 0 : v.label
        });
      }
      return f;
    }), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
    return c.forEach(function(f) {
      l.set(f.value, f), u.set(f.value, t.get(f.value) || s.get(f.value));
    }), n.current.values = l, n.current.options = u, c;
  }, [e, t]), a = d.useCallback(function(o) {
    return t.get(o) || n.current.options.get(o);
  }, [t]);
  return [r, a];
});
function ga(e, t) {
  return zo(e).join("").toUpperCase().includes(t);
}
const r4 = (function(e, t, n, r, a) {
  return d.useMemo(function() {
    if (!n || r === !1)
      return e;
    var o = t.options, i = t.label, s = t.value, c = [], l = typeof r == "function", u = n.toUpperCase(), f = l ? r : function(m, p) {
      return a ? ga(p[a], u) : p[o] ? ga(p[i !== "children" ? i : "label"], u) : ga(p[s], u);
    }, v = l ? function(m) {
      return ho(m);
    } : function(m) {
      return m;
    };
    return e.forEach(function(m) {
      if (m[o]) {
        var p = f(n, v(m));
        if (p)
          c.push(m);
        else {
          var h = m[o].filter(function(g) {
            return f(n, v(g));
          });
          h.length && c.push(P(P({}, m), {}, R({}, o, h)));
        }
        return;
      }
      f(n, v(m)) && c.push(m);
    }), c;
  }, [e, r, a, n, t]);
});
var P1 = 0, a4 = process.env.NODE_ENV !== "test" && Ut();
function o4() {
  var e;
  return a4 ? (e = P1, P1 += 1) : e = "TEST_OR_SSR", e;
}
function i4(e) {
  var t = d.useState(), n = N(t, 2), r = n[0], a = n[1];
  return d.useEffect(function() {
    a("rc_select_".concat(o4()));
  }, []), e || r;
}
var s4 = ["children", "value"], l4 = ["children"];
function c4(e) {
  var t = e, n = t.key, r = t.props, a = r.children, o = r.value, i = bt(r, s4);
  return P({
    key: n,
    value: o !== void 0 ? o : n,
    children: a
  }, i);
}
function Uo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Kn(e).map(function(n, r) {
    if (!/* @__PURE__ */ d.isValidElement(n) || !n.type)
      return null;
    var a = n, o = a.type.isSelectOptGroup, i = a.key, s = a.props, c = s.children, l = bt(s, l4);
    return t || !o ? c4(n) : P(P({
      key: "__RC_SELECT_GRP__".concat(i === null ? r : i, "__"),
      label: i
    }, l), {}, {
      options: Uo(c)
    });
  }).filter(function(n) {
    return n;
  });
}
var u4 = function(t, n, r, a, o) {
  return d.useMemo(function() {
    var i = t, s = !t;
    s && (i = Uo(n));
    var c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = function(m, p, h) {
      h && typeof h == "string" && m.set(p[h], p);
    }, f = function v(m) {
      for (var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = 0; h < m.length; h += 1) {
        var g = m[h];
        !g[r.options] || p ? (c.set(g[r.value], g), u(l, g, r.label), u(l, g, a), u(l, g, o)) : v(g[r.options], !0);
      }
    };
    return f(i), {
      options: i,
      valueOptions: c,
      labelOptions: l
    };
  }, [t, n, r, a, o]);
};
function A1(e) {
  var t = d.useRef();
  t.current = e;
  var n = d.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
function f4(e) {
  var t = e.mode, n = e.options, r = e.children, a = e.backfill, o = e.allowClear, i = e.placeholder, s = e.getInputElement, c = e.showSearch, l = e.onSearch, u = e.defaultOpen, f = e.autoFocus, v = e.labelInValue, m = e.value, p = e.inputValue, h = e.optionLabelProp, g = L0(t), b = c !== void 0 ? c : g || t === "combobox", y = n || Uo(r);
  if ($e(t !== "tags" || y.every(function(S) {
    return !S.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var C = y.some(function(S) {
      return S.options ? S.options.some(function(O) {
        return typeof ("value" in O ? O.value : O.key) == "number";
      }) : typeof ("value" in S ? S.value : S.key) == "number";
    });
    $e(!C, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if ($e(t !== "combobox" || !h, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), $e(t === "combobox" || !a, "`backfill` only works with `combobox` mode."), $e(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), Ca(t !== "combobox" || !s || !o || !i, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), l && !b && t !== "combobox" && t !== "tags" && $e(!1, "`onSearch` should work with `showSearch` instead of use alone."), Ca(!u || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), m != null) {
    var E = zo(m);
    $e(!v || E.every(function(S) {
      return he(S) === "object" && ("key" in S || "value" in S);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), $e(!g || Array.isArray(m), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var x = null;
    Kn(r).some(function(S) {
      if (!/* @__PURE__ */ d.isValidElement(S) || !S.type)
        return !1;
      var O = S, w = O.type;
      if (w.isSelectOption)
        return !1;
      if (w.isSelectOptGroup) {
        var A = Kn(S.props.children).every(function(M) {
          return !/* @__PURE__ */ d.isValidElement(M) || !S.type || M.type.isSelectOption ? !0 : (x = M.type, !1);
        });
        return !A;
      }
      return x = w, !0;
    }), x && $e(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(x.displayName || x.name || x, "`.")), $e(p === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function d4(e, t) {
  if (e) {
    var n = function r(a) {
      for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = 0; i < a.length; i++) {
        var s = a[i];
        if (s[t?.value] === null)
          return $e(!1, "`value` in Select options should not be `null`."), !0;
        if (!o && Array.isArray(s[t?.options]) && r(s[t?.options], !0))
          break;
      }
    };
    n(e);
  }
}
var v4 = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"], m4 = ["inputValue"];
function g4(e) {
  return !e || he(e) !== "object";
}
var Gl = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, a = e.prefixCls, o = a === void 0 ? "rc-select" : a, i = e.backfill, s = e.fieldNames, c = e.inputValue, l = e.searchValue, u = e.onSearch, f = e.autoClearSearchValue, v = f === void 0 ? !0 : f, m = e.onSelect, p = e.onDeselect, h = e.dropdownMatchSelectWidth, g = h === void 0 ? !0 : h, b = e.filterOption, y = e.filterSort, C = e.optionFilterProp, E = e.optionLabelProp, x = e.options, S = e.optionRender, O = e.children, w = e.defaultActiveFirstOption, A = e.menuItemSelectedIcon, M = e.virtual, T = e.direction, D = e.listHeight, _ = D === void 0 ? 200 : D, I = e.listItemHeight, V = I === void 0 ? 20 : I, F = e.labelRender, H = e.value, k = e.defaultValue, J = e.labelInValue, U = e.onChange, z = e.maxCount, W = bt(e, v4), Q = i4(n), ne = L0(r), re = !!(!x && O), be = d.useMemo(function() {
    return b === void 0 && r === "combobox" ? !1 : b;
  }, [b, r]), de = d.useMemo(
    function() {
      return Bl(s, re);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      re
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), we = D0("", {
    value: l !== void 0 ? l : c,
    postState: function(B) {
      return B || "";
    }
  }), ge = N(we, 2), xe = ge[0], Y = ge[1], j = u4(x, O, de, C, E), q = j.valueOptions, $ = j.labelOptions, K = j.options, Z = d.useCallback(function(ee) {
    var B = zo(ee);
    return B.map(function(L) {
      var G, le, ae, He, Ye;
      if (g4(L))
        G = L;
      else {
        var tt;
        ae = L.key, le = L.label, G = (tt = L.value) !== null && tt !== void 0 ? tt : ae;
      }
      var Ue = q.get(G);
      if (Ue) {
        var Dt;
        if (le === void 0 && (le = Ue?.[E || de.label]), ae === void 0 && (ae = (Dt = Ue?.key) !== null && Dt !== void 0 ? Dt : G), He = Ue?.disabled, Ye = Ue?.title, process.env.NODE_ENV !== "production" && !E) {
          var dt = Ue?.[de.label];
          dt !== void 0 && !/* @__PURE__ */ d.isValidElement(dt) && !/* @__PURE__ */ d.isValidElement(le) && dt !== le && $e(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: le,
        value: G,
        key: ae,
        disabled: He,
        title: Ye
      };
    });
  }, [de, E, q]), ve = D0(k, {
    value: H
  }), ce = N(ve, 2), ue = ce[0], Ce = ce[1], me = d.useMemo(function() {
    var ee, B = ne && ue === null ? [] : ue, L = Z(B);
    return r === "combobox" && dv((ee = L[0]) === null || ee === void 0 ? void 0 : ee.value) ? [] : L;
  }, [ue, Z, r, ne]), pe = n4(me, q), Oe = N(pe, 2), ie = Oe[0], Qe = Oe[1], ze = d.useMemo(function() {
    if (!r && ie.length === 1) {
      var ee = ie[0];
      if (ee.value === null && (ee.label === null || ee.label === void 0))
        return [];
    }
    return ie.map(function(B) {
      var L;
      return P(P({}, B), {}, {
        label: (L = typeof F == "function" ? F(B) : B.label) !== null && L !== void 0 ? L : B.value
      });
    });
  }, [r, ie, F]), Le = d.useMemo(function() {
    return new Set(ie.map(function(ee) {
      return ee.value;
    }));
  }, [ie]);
  d.useEffect(function() {
    if (r === "combobox") {
      var ee, B = (ee = ie[0]) === null || ee === void 0 ? void 0 : ee.value;
      Y(fv(B) ? String(B) : "");
    }
  }, [ie]);
  var Ie = A1(function(ee, B) {
    var L = B ?? ee;
    return R(R({}, de.value, ee), de.label, L);
  }), Ae = d.useMemo(function() {
    if (r !== "tags")
      return K;
    var ee = se(K), B = function(G) {
      return q.has(G);
    };
    return se(ie).sort(function(L, G) {
      return L.value < G.value ? -1 : 1;
    }).forEach(function(L) {
      var G = L.value;
      B(G) || ee.push(Ie(G, L.label));
    }), ee;
  }, [Ie, K, q, ie, r]), Be = r4(Ae, de, xe, be, C), Ve = d.useMemo(function() {
    return r !== "tags" || !xe || Be.some(function(ee) {
      return ee[C || "value"] === xe;
    }) || Be.some(function(ee) {
      return ee[de.value] === xe;
    }) ? Be : [Ie(xe)].concat(se(Be));
  }, [Ie, C, r, Be, xe, de]), it = function ee(B) {
    var L = se(B).sort(function(G, le) {
      return y(G, le, {
        searchValue: xe
      });
    });
    return L.map(function(G) {
      return Array.isArray(G.options) ? P(P({}, G), {}, {
        options: G.options.length > 0 ? ee(G.options) : G.options
      }) : G;
    });
  }, st = d.useMemo(function() {
    return y ? it(Ve) : Ve;
  }, [Ve, y, xe]), Fe = d.useMemo(function() {
    return Tv(st, {
      fieldNames: de,
      childrenAsData: re
    });
  }, [st, de, re]), Me = function(B) {
    var L = Z(B);
    if (Ce(L), U && // Trigger event only when value changed
    (L.length !== ie.length || L.some(function(ae, He) {
      var Ye;
      return ((Ye = ie[He]) === null || Ye === void 0 ? void 0 : Ye.value) !== ae?.value;
    }))) {
      var G = J ? L : L.map(function(ae) {
        return ae.value;
      }), le = L.map(function(ae) {
        return ho(Qe(ae.value));
      });
      U(
        // Value
        ne ? G : G[0],
        // Option
        ne ? le : le[0]
      );
    }
  }, Ct = d.useState(null), Ge = N(Ct, 2), ct = Ge[0], lt = Ge[1], Vt = d.useState(0), wt = N(Vt, 2), Mt = wt[0], It = wt[1], ft = w !== void 0 ? w : r !== "combobox", qe = d.useCallback(function(ee, B) {
    var L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, G = L.source, le = G === void 0 ? "keyboard" : G;
    It(B), i && r === "combobox" && ee !== null && le === "keyboard" && lt(String(ee));
  }, [i, r]), De = function(B, L, G) {
    var le = function() {
      var gt, Ot = Qe(B);
      return [J ? {
        label: Ot?.[de.label],
        value: B,
        key: (gt = Ot?.key) !== null && gt !== void 0 ? gt : B
      } : B, ho(Ot)];
    };
    if (L && m) {
      var ae = le(), He = N(ae, 2), Ye = He[0], tt = He[1];
      m(Ye, tt);
    } else if (!L && p && G !== "clear") {
      var Ue = le(), Dt = N(Ue, 2), dt = Dt[0], Tt = Dt[1];
      p(dt, Tt);
    }
  }, rt = A1(function(ee, B) {
    var L, G = ne ? B.selected : !0;
    G ? L = ne ? [].concat(se(ie), [ee]) : [ee] : L = ie.filter(function(le) {
      return le.value !== ee;
    }), Me(L), De(ee, G), r === "combobox" ? lt("") : (!L0 || v) && (Y(""), lt(""));
  }), Je = function(B, L) {
    Me(B);
    var G = L.type, le = L.values;
    (G === "remove" || G === "clear") && le.forEach(function(ae) {
      De(ae.value, !1, G);
    });
  }, fe = function(B, L) {
    if (Y(B), lt(null), L.source === "submit") {
      var G = (B || "").trim();
      if (G) {
        var le = Array.from(new Set([].concat(se(Le), [G])));
        Me(le), De(G, !0), Y("");
      }
      return;
    }
    L.source !== "blur" && (r === "combobox" && Me(B), u?.(B));
  }, Ee = function(B) {
    var L = B;
    r !== "tags" && (L = B.map(function(le) {
      var ae = $.get(le);
      return ae?.value;
    }).filter(function(le) {
      return le !== void 0;
    }));
    var G = Array.from(new Set([].concat(se(Le), se(L))));
    Me(G), G.forEach(function(le) {
      De(le, !0);
    });
  }, Ke = d.useMemo(function() {
    var ee = M !== !1 && g !== !1;
    return P(P({}, j), {}, {
      flattenOptions: Fe,
      onActiveValue: qe,
      defaultActiveFirstOption: ft,
      onSelect: rt,
      menuItemSelectedIcon: A,
      rawValues: Le,
      fieldNames: de,
      virtual: ee,
      direction: T,
      listHeight: _,
      listItemHeight: V,
      childrenAsData: re,
      maxCount: z,
      optionRender: S
    });
  }, [z, j, Fe, qe, ft, rt, A, Le, de, M, g, T, _, V, re, S]);
  return process.env.NODE_ENV !== "production" && (f4(e), d4(K, de)), /* @__PURE__ */ d.createElement(jo.Provider, {
    value: Ke
  }, /* @__PURE__ */ d.createElement(Hl, We({}, W, {
    // >>> MISC
    id: Q,
    prefixCls: o,
    ref: t,
    omitDomProps: m4,
    mode: r,
    displayValues: ze,
    onDisplayValuesChange: Je,
    direction: T,
    searchValue: xe,
    onSearch: fe,
    autoClearSearchValue: v,
    onSearchSplit: Ee,
    dropdownMatchSelectWidth: g,
    OptionList: Wl,
    emptyOptions: !Fe.length,
    activeValue: ct,
    activeDescendantId: "".concat(Q, "_list_").concat(Mt)
  })));
});
process.env.NODE_ENV !== "production" && (Gl.displayName = "Select");
var Ko = Gl;
Ko.Option = Go;
Ko.OptGroup = Wo;
function h4(e, t, n) {
  return Xe({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const p4 = (e, t) => t || e, Ul = () => {
  const [, e] = Qn(), [t] = To("Empty"), r = new ut(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ d.createElement("svg", {
    style: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ d.createElement("title", null, t?.description || "Empty"), /* @__PURE__ */ d.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ d.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ d.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ d.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ d.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ d.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (Ul.displayName = "EmptyImage");
const Kl = () => {
  const [, e] = Qn(), [t] = To("Empty"), {
    colorFill: n,
    colorFillTertiary: r,
    colorFillQuaternary: a,
    colorBgContainer: o
  } = e, {
    borderColor: i,
    shadowColor: s,
    contentColor: c
  } = O0(() => ({
    borderColor: new ut(n).onBackground(o).toHexString(),
    shadowColor: new ut(r).onBackground(o).toHexString(),
    contentColor: new ut(a).onBackground(o).toHexString()
  }), [n, r, a, o]);
  return /* @__PURE__ */ d.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ d.createElement("title", null, t?.description || "Empty"), /* @__PURE__ */ d.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ d.createElement("ellipse", {
    fill: s,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ d.createElement("g", {
    fillRule: "nonzero",
    stroke: i
  }, /* @__PURE__ */ d.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ d.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: c
  }))));
};
process.env.NODE_ENV !== "production" && (Kl.displayName = "SimpleImage");
const y4 = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: a,
    fontSize: o,
    lineHeight: i
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: o,
      lineHeight: i,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorTextDescription
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: a,
        color: e.colorTextDescription,
        [`${t}-description`]: {
          color: e.colorTextDescription
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDescription,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, b4 = ks("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    calc: r
  } = e, a = qn(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r(n).mul(2.5).equal(),
    emptyImgHeightMD: n,
    emptyImgHeightSM: r(n).mul(0.875).equal()
  });
  return y4(a);
});
var C4 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ql = /* @__PURE__ */ d.createElement(Ul, null), Xl = /* @__PURE__ */ d.createElement(Kl, null), Wn = (e) => {
  var t;
  const {
    className: n,
    rootClassName: r,
    prefixCls: a,
    image: o,
    description: i,
    children: s,
    imageStyle: c,
    style: l,
    classNames: u,
    styles: f
  } = e, v = C4(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style", "classNames", "styles"]), {
    getPrefixCls: m,
    direction: p,
    className: h,
    style: g,
    classNames: b,
    styles: y,
    image: C
  } = _s("empty"), E = m("empty", a), [x, S, O] = b4(E), [w] = To("Empty"), A = typeof i < "u" ? i : w?.description, M = typeof A == "string" ? A : "empty", T = (t = o ?? C) !== null && t !== void 0 ? t : ql;
  let D = null;
  if (typeof T == "string" ? D = /* @__PURE__ */ d.createElement("img", {
    draggable: !1,
    alt: M,
    src: T
  }) : D = T, process.env.NODE_ENV !== "production") {
    const _ = Fn("Empty");
    [["imageStyle", "styles: { image: {} }"]].forEach(([I, V]) => {
      _.deprecated(!(I in e), I, V);
    });
  }
  return x(/* @__PURE__ */ d.createElement("div", Object.assign({
    className: Xe(S, O, E, h, {
      [`${E}-normal`]: T === Xl,
      [`${E}-rtl`]: p === "rtl"
    }, n, r, b.root, u?.root),
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, y.root), g), f?.root), l)
  }, v), /* @__PURE__ */ d.createElement("div", {
    className: Xe(`${E}-image`, b.image, u?.image),
    style: Object.assign(Object.assign(Object.assign({}, c), y.image), f?.image)
  }, D), A && /* @__PURE__ */ d.createElement("div", {
    className: Xe(`${E}-description`, b.description, u?.description),
    style: Object.assign(Object.assign({}, y.description), f?.description)
  }, A), s && /* @__PURE__ */ d.createElement("div", {
    className: Xe(`${E}-footer`, b.footer, u?.footer),
    style: Object.assign(Object.assign({}, y.footer), f?.footer)
  }, s)));
};
Wn.PRESENTED_IMAGE_DEFAULT = ql;
Wn.PRESENTED_IMAGE_SIMPLE = Xl;
process.env.NODE_ENV !== "production" && (Wn.displayName = "Empty");
const S4 = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = Nn(cn), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ ot.createElement(Wn, {
        image: Wn.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ ot.createElement(Wn, {
        image: Wn.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    /**
     * This type of component should satisfy the nullish coalescing operator(??) on the left-hand side.
     * to let the component itself implement the logic.
     * For example `Table.filter`.
     */
    case "Table.filter":
      return null;
    default:
      return /* @__PURE__ */ ot.createElement(Wn, null);
  }
}, E4 = (e, t, n) => {
  var r, a;
  const {
    variant: o,
    [e]: i
  } = d.useContext(cn), s = d.useContext(k3), c = i?.variant;
  let l;
  typeof t < "u" ? l = t : n === !1 ? l = "borderless" : l = (a = (r = s ?? c) !== null && r !== void 0 ? r : o) !== null && a !== void 0 ? a : "outlined";
  const u = Df.includes(l);
  return [l, u];
}, w4 = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    dynamicInset: !0
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function x4(e, t) {
  return e || w4(t);
}
const M1 = (e) => {
  const {
    optionHeight: t,
    optionFontSize: n,
    optionLineHeight: r,
    optionPadding: a
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: t,
    padding: a,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: r,
    boxSizing: "border-box"
  };
}, O4 = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, a = `&${t}-slide-up-enter${t}-slide-up-enter-active`, o = `&${t}-slide-up-appear${t}-slide-up-appear-active`, i = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${n}-dropdown-placement-`, c = `${r}-option-selected`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, No(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${a}${s}bottomLeft,
          ${o}${s}bottomLeft
        `]: {
          animationName: ml
        },
        [`
          ${a}${s}topLeft,
          ${o}${s}topLeft,
          ${a}${s}topRight,
          ${o}${s}topRight
        `]: {
          animationName: hl
        },
        [`${i}${s}bottomLeft`]: {
          animationName: gl
        },
        [`
          ${i}${s}topLeft,
          ${i}${s}topRight
        `]: {
          animationName: pl
        },
        "&-hidden": {
          display: "none"
        },
        [r]: Object.assign(Object.assign({}, M1(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, Xa),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.optionActiveBg
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.optionSelectedColor,
              fontWeight: e.optionSelectedFontWeight,
              backgroundColor: e.optionSelectedBg,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": Object.assign(Object.assign({}, M1(e)), {
            color: e.colorTextDisabled
          })
        }),
        // https://github.com/ant-design/ant-design/pull/46646
        [`${c}:has(+ ${c})`]: {
          borderEndStartRadius: 0,
          borderEndEndRadius: 0,
          [`& + ${c}`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0
          }
        },
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    Xi(e, "slide-up"),
    Xi(e, "slide-down"),
    qi(e, "move-up"),
    qi(e, "move-down")
  ];
}, R4 = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: n,
    lineWidth: r,
    INTERNAL_FIXED_ITEM_MARGIN: a
  } = e, o = e.max(e.calc(n).sub(r).equal(), 0), i = e.max(e.calc(o).sub(a).equal(), 0);
  return {
    basePadding: o,
    containerPadding: i,
    itemHeight: mt(t),
    itemLineHeight: mt(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, P4 = (e) => {
  const {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  return e.calc(n).sub(t).div(2).sub(r).equal();
}, A4 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    borderRadiusSM: r,
    motionDurationSlow: a,
    paddingXS: o,
    multipleItemColorDisabled: i,
    multipleItemBorderColorDisabled: s,
    colorIcon: c,
    colorIconHover: l,
    INTERNAL_FIXED_ITEM_MARGIN: u
  } = e;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [`${t}-selection-overflow`]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        // https://github.com/ant-design/ant-design/issues/54179
        maxWidth: "calc(100% - 4px)",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${t}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: u,
        borderRadius: r,
        cursor: "default",
        transition: `font-size ${a}, line-height ${a}, height ${a}`,
        marginInlineEnd: e.calc(u).mul(2).equal(),
        paddingInlineStart: o,
        paddingInlineEnd: e.calc(o).div(2).equal(),
        [`${t}-disabled&`]: {
          color: i,
          borderColor: s,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.calc(o).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, Fo()), {
          display: "inline-flex",
          alignItems: "center",
          color: c,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: l
          }
        })
      }
    }
  };
}, M4 = (e, t) => {
  const {
    componentCls: n,
    INTERNAL_FIXED_ITEM_MARGIN: r
  } = e, a = `${n}-selection-overflow`, o = e.multipleSelectItemHeight, i = P4(e), s = t ? `${n}-${t}` : "", c = R4(e);
  return {
    [`${n}-multiple${s}`]: Object.assign(Object.assign({}, A4(e)), {
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        paddingInline: c.basePadding,
        paddingBlock: c.containerPadding,
        borderRadius: e.borderRadius,
        [`${n}-disabled&`]: {
          background: e.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${mt(r)} 0`,
          lineHeight: mt(o),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        height: c.itemHeight,
        lineHeight: mt(c.itemLineHeight)
      },
      // ========================== Wrap ===========================
      [`${n}-selection-wrap`]: {
        alignSelf: "flex-start",
        "&:after": {
          lineHeight: mt(o),
          marginBlock: r
        }
      },
      // ========================== Input ==========================
      [`${n}-prefix`]: {
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal()
      },
      [`${a}-item + ${a}-item,
        ${n}-prefix + ${n}-selection-wrap
      `]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        },
        [`${n}-selection-placeholder`]: {
          insetInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      // Same as `wrap:after`
      [`${a}-item-suffix`]: {
        minHeight: c.itemHeight,
        marginBlock: r
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(i).equal(),
        "\n          &-input,\n          &-mirror\n        ": {
          height: o,
          fontFamily: e.fontFamily,
          lineHeight: mt(o),
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal(),
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    })
  };
};
function ha(e, t) {
  const {
    componentCls: n
  } = e, r = t ? `${n}-${t}` : "", a = {
    [`${n}-multiple${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: {
        [`${n}-show-search&`]: {
          cursor: "text"
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()
      }
    }
  };
  return [M4(e, t), a];
}
const I4 = (e) => {
  const {
    componentCls: t
  } = e, n = qn(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = qn(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  });
  return [
    ha(e),
    // ======================== Small ========================
    ha(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    ha(r, "lg")
  ];
};
function pa(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: a
  } = e, o = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(), i = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${i}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, No(e, !0)), {
        display: "flex",
        borderRadius: a,
        flex: "1 1 auto",
        [`${n}-selection-wrap:after`]: {
          lineHeight: mt(o)
        },
        [`${n}-selection-search`]: {
          position: "absolute",
          inset: 0,
          width: "100%",
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          display: "block",
          padding: 0,
          lineHeight: mt(o),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-search,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: e.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: `0 ${mt(r)}`,
          [`${n}-selection-search-input`]: {
            height: o,
            fontSize: e.fontSize
          },
          "&:after": {
            lineHeight: mt(o)
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${mt(r)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function D4(e) {
  const {
    componentCls: t
  } = e, n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    pa(e),
    // ======================== Small ========================
    // Shared
    pa(qn(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selector`]: {
            padding: `0 ${mt(n)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal()
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    pa(qn(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const T4 = (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    lineWidth: r,
    controlHeight: a,
    controlHeightSM: o,
    controlHeightLG: i,
    paddingXXS: s,
    controlPaddingHorizontal: c,
    zIndexPopupBase: l,
    colorText: u,
    fontWeightStrong: f,
    controlItemBgActive: v,
    controlItemBgHover: m,
    colorBgContainer: p,
    colorFillSecondary: h,
    colorBgContainerDisabled: g,
    colorTextDisabled: b,
    colorPrimaryHover: y,
    colorPrimary: C,
    controlOutline: E
  } = e, x = s * 2, S = r * 2, O = Math.min(a - x, a - S), w = Math.min(o - x, o - S), A = Math.min(i - x, i - S);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(s / 2),
    zIndexPopup: l + 50,
    optionSelectedColor: u,
    optionSelectedFontWeight: f,
    optionSelectedBg: v,
    optionActiveBg: m,
    optionPadding: `${(a - t * n) / 2}px ${c}px`,
    optionFontSize: t,
    optionLineHeight: n,
    optionHeight: a,
    selectorBg: p,
    clearBg: p,
    singleItemHeightLG: i,
    multipleItemBg: h,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: O,
    multipleItemHeightSM: w,
    multipleItemHeightLG: A,
    multipleSelectorBgDisabled: g,
    multipleItemColorDisabled: b,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25),
    hoverBorderColor: y,
    activeBorderColor: C,
    activeOutlineColor: E,
    selectAffixPadding: s
  };
}, Ql = (e, t) => {
  const {
    componentCls: n,
    antCls: r,
    controlOutlineWidth: a
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      border: `${mt(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
      background: e.selectorBg
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: t.hoverBorderHover
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: t.activeBorderColor,
        boxShadow: `0 0 0 ${mt(a)} ${t.activeOutlineColor}`,
        outline: 0
      },
      [`${n}-prefix`]: {
        color: t.color
      }
    }
  };
}, I1 = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Ql(e, t))
}), _4 = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, Ql(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeOutlineColor: e.activeOutlineColor,
    color: e.colorText
  })), I1(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeOutlineColor: e.colorErrorOutline,
    color: e.colorError
  })), I1(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeOutlineColor: e.colorWarningOutline,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), Jl = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      background: t.bg,
      border: `${mt(e.lineWidth)} ${e.lineType} transparent`,
      color: t.color
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        background: t.hoverBg
      },
      [`${n}-focused& ${n}-selector`]: {
        background: e.selectorBg,
        borderColor: t.activeBorderColor,
        outline: 0
      }
    }
  };
}, D1 = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Jl(e, t))
}), N4 = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, Jl(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor,
    color: e.colorText
  })), D1(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    color: e.colorError
  })), D1(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        borderColor: e.colorBorder,
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.colorBgContainer,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    }
  })
}), F4 = (e) => ({
  "&-borderless": {
    [`${e.componentCls}-selector`]: {
      background: "transparent",
      border: `${mt(e.lineWidth)} ${e.lineType} transparent`
    },
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    },
    // Status
    [`&${e.componentCls}-status-error`]: {
      [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
        color: e.colorError
      }
    },
    [`&${e.componentCls}-status-warning`]: {
      [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
        color: e.colorWarning
      }
    }
  }
}), Yl = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      borderWidth: `${mt(e.lineWidth)} 0`,
      borderStyle: `${e.lineType} none`,
      borderColor: `transparent transparent ${t.borderColor} transparent`,
      background: e.selectorBg,
      borderRadius: 0
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: `transparent transparent ${t.hoverBorderHover} transparent`
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
        outline: 0
      },
      [`${n}-prefix`]: {
        color: t.color
      }
    }
  };
}, T1 = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Yl(e, t))
}), $4 = (e) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign({}, Yl(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeOutlineColor: e.activeOutlineColor,
    color: e.colorText
  })), T1(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeOutlineColor: e.colorErrorOutline,
    color: e.colorError
  })), T1(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeOutlineColor: e.colorWarningOutline,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), V4 = (e) => ({
  [e.componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, _4(e)), N4(e)), F4(e)), $4(e))
}), L4 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${t}-disabled&`]: {
      cursor: "not-allowed",
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, B4 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        appearance: "none"
      }
    }
  };
}, H4 = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: a
  } = e, o = {
    [`${n}-clear`]: {
      opacity: 1,
      background: e.colorBgBase,
      borderRadius: "50%"
    }
  };
  return {
    [n]: Object.assign(Object.assign({}, No(e)), {
      position: "relative",
      display: "inline-flex",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, L4(e)), B4(e)),
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, Xa), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, Xa), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, Fo()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        transition: `opacity ${e.motionDurationSlow} ease`,
        [a]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Wrap ===========================
      [`${n}-selection-wrap`]: {
        display: "flex",
        width: "100%",
        position: "relative",
        minWidth: 0,
        // https://github.com/ant-design/ant-design/issues/51669
        "&:after": {
          content: '"\\a0"',
          width: 0,
          overflow: "hidden"
        }
      },
      // ========================= Prefix ==========================
      [`${n}-prefix`]: {
        flex: "none",
        marginInlineEnd: e.selectAffixPadding
      },
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        // https://github.com/ant-design/ant-design/issues/54205
        // Force GPU compositing on Safari to prevent flickering on opacity/transform transitions
        transform: "translateZ(0)",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorIcon
        }
      },
      "@media(hover:none)": o,
      "&:hover": o
    }),
    // ========================= Feedback ==========================
    [`${n}-status`]: {
      "&-error, &-warning, &-success, &-validating": {
        [`&${n}-has-feedback`]: {
          [`${n}-clear`]: {
            insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal()
          }
        }
      }
    }
  };
}, k4 = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    H4(e),
    // Single
    D4(e),
    // Multiple
    I4(e),
    // Dropdown
    O4(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    F2(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, z4 = ks("Select", (e, {
  rootPrefixCls: t
}) => {
  const n = qn(e, {
    rootPrefixCls: t,
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [k4(n), V4(n)];
}, T4, {
  unitless: {
    optionLineHeight: !0,
    optionSelectedFontWeight: !0
  }
});
var j4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, W4 = function(t, n) {
  return /* @__PURE__ */ d.createElement($n, We({}, t, {
    ref: n,
    icon: j4
  }));
}, Zl = /* @__PURE__ */ d.forwardRef(W4);
process.env.NODE_ENV !== "production" && (Zl.displayName = "CheckOutlined");
var G4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, U4 = function(t, n) {
  return /* @__PURE__ */ d.createElement($n, We({}, t, {
    ref: n,
    icon: G4
  }));
}, ec = /* @__PURE__ */ d.forwardRef(U4);
process.env.NODE_ENV !== "production" && (ec.displayName = "DownOutlined");
var K4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, q4 = function(t, n) {
  return /* @__PURE__ */ d.createElement($n, We({}, t, {
    ref: n,
    icon: K4
  }));
}, tc = /* @__PURE__ */ d.forwardRef(q4);
process.env.NODE_ENV !== "production" && (tc.displayName = "SearchOutlined");
function X4({
  suffixIcon: e,
  clearIcon: t,
  menuItemSelectedIcon: n,
  removeIcon: r,
  loading: a,
  multiple: o,
  hasFeedback: i,
  prefixCls: s,
  showSuffixIcon: c,
  feedbackIcon: l,
  showArrow: u,
  componentName: f
}) {
  process.env.NODE_ENV !== "production" && Fn(f).deprecated(!t, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const v = t ?? /* @__PURE__ */ d.createElement(al, null), m = (b) => e === null && !i && !u ? null : /* @__PURE__ */ d.createElement(d.Fragment, null, c !== !1 && b, i && l);
  let p = null;
  if (e !== void 0)
    p = m(e);
  else if (a)
    p = m(/* @__PURE__ */ d.createElement(il, {
      spin: !0
    }));
  else {
    const b = `${s}-suffix`;
    p = ({
      open: y,
      showSearch: C
    }) => m(y && C ? /* @__PURE__ */ d.createElement(tc, {
      className: b
    }) : /* @__PURE__ */ d.createElement(ec, {
      className: b
    }));
  }
  let h = null;
  n !== void 0 ? h = n : o ? h = /* @__PURE__ */ d.createElement(Zl, null) : h = null;
  let g = null;
  return r !== void 0 ? g = r : g = /* @__PURE__ */ d.createElement(ol, null), {
    clearIcon: v,
    suffixIcon: p,
    itemIcon: h,
    removeIcon: g
  };
}
function Q4(e) {
  return ot.useMemo(() => {
    if (e)
      return (...t) => /* @__PURE__ */ ot.createElement(z3, {
        space: !0
      }, e.apply(void 0, t));
  }, [e]);
}
function J4(e, t) {
  return t !== void 0 ? t : e !== null;
}
var Y4 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const nc = "SECRET_COMBOBOX_MODE_DO_NOT_USE", rc = (e, t) => {
  var n, r, a, o, i;
  const {
    prefixCls: s,
    bordered: c,
    className: l,
    rootClassName: u,
    getPopupContainer: f,
    popupClassName: v,
    dropdownClassName: m,
    listHeight: p = 256,
    placement: h,
    listItemHeight: g,
    size: b,
    disabled: y,
    notFoundContent: C,
    status: E,
    builtinPlacements: x,
    dropdownMatchSelectWidth: S,
    popupMatchSelectWidth: O,
    direction: w,
    style: A,
    allowClear: M,
    variant: T,
    dropdownStyle: D,
    transitionName: _,
    tagRender: I,
    maxCount: V,
    prefix: F,
    dropdownRender: H,
    popupRender: k,
    onDropdownVisibleChange: J,
    onOpenChange: U,
    styles: z,
    classNames: W
  } = e, Q = Y4(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount", "prefix", "dropdownRender", "popupRender", "onDropdownVisibleChange", "onOpenChange", "styles", "classNames"]), {
    getPopupContainer: ne,
    getPrefixCls: re,
    renderEmpty: be,
    direction: de,
    virtual: we,
    popupMatchSelectWidth: ge,
    popupOverflow: xe
  } = d.useContext(cn), {
    showSearch: Y,
    style: j,
    styles: q,
    className: $,
    classNames: K
  } = _s("select"), [, Z] = Qn(), ve = g ?? Z?.controlHeight, ce = re("select", s), ue = re(), Ce = w ?? de, {
    compactSize: me,
    compactItemClassnames: pe
  } = g2(ce, Ce), [Oe, ie] = E4("select", T, c), Qe = n2(ce), [ze, Le, Ie] = z4(ce, Qe), Ae = d.useMemo(() => {
    const {
      mode: G
    } = e;
    if (G !== "combobox")
      return G === nc ? "combobox" : G;
  }, [e.mode]), Be = Ae === "multiple" || Ae === "tags", Ve = J4(e.suffixIcon, e.showArrow), it = (n = O ?? S) !== null && n !== void 0 ? n : ge, st = ((r = z?.popup) === null || r === void 0 ? void 0 : r.root) || ((a = q.popup) === null || a === void 0 ? void 0 : a.root) || D, Fe = Q4(k || H), Me = U || J, {
    status: Ct,
    hasFeedback: Ge,
    isFormItemInput: ct,
    feedbackIcon: lt
  } = d.useContext($0), Vt = p4(Ct, E);
  let wt;
  C !== void 0 ? wt = C : Ae === "combobox" ? wt = null : wt = be?.("Select") || /* @__PURE__ */ d.createElement(S4, {
    componentName: "Select"
  });
  const {
    suffixIcon: Mt,
    itemIcon: It,
    removeIcon: ft,
    clearIcon: qe
  } = X4(Object.assign(Object.assign({}, Q), {
    multiple: Be,
    hasFeedback: Ge,
    feedbackIcon: lt,
    showSuffixIcon: Ve,
    prefixCls: ce,
    componentName: "Select"
  })), De = M === !0 ? {
    clearIcon: qe
  } : M, rt = K0(Q, ["suffixIcon", "itemIcon"]), Je = Xe(((o = W?.popup) === null || o === void 0 ? void 0 : o.root) || ((i = K?.popup) === null || i === void 0 ? void 0 : i.root) || v || m, {
    [`${ce}-dropdown-${Ce}`]: Ce === "rtl"
  }, u, K.root, W?.root, Ie, Qe, Le), fe = m2((G) => {
    var le;
    return (le = b ?? me) !== null && le !== void 0 ? le : G;
  }), Ee = d.useContext(I0), Ke = y ?? Ee, ee = Xe({
    [`${ce}-lg`]: fe === "large",
    [`${ce}-sm`]: fe === "small",
    [`${ce}-rtl`]: Ce === "rtl",
    [`${ce}-${Oe}`]: ie,
    [`${ce}-in-form-item`]: ct
  }, h4(ce, Vt, Ge), pe, $, l, K.root, W?.root, u, Ie, Qe, Le), B = d.useMemo(() => h !== void 0 ? h : Ce === "rtl" ? "bottomRight" : "bottomLeft", [h, Ce]);
  if (process.env.NODE_ENV !== "production") {
    const G = Fn("Select");
    Object.entries({
      dropdownMatchSelectWidth: "popupMatchSelectWidth",
      dropdownStyle: "styles.popup.root",
      dropdownClassName: "classNames.popup.root",
      popupClassName: "classNames.popup.root",
      dropdownRender: "popupRender",
      onDropdownVisibleChange: "onOpenChange",
      bordered: "variant"
    }).forEach(([ae, He]) => {
      G.deprecated(!(ae in e), ae, He);
    }), process.env.NODE_ENV !== "production" && G(!("showArrow" in e), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null."), process.env.NODE_ENV !== "production" && G(!(typeof V < "u" && !Be), "usage", "`maxCount` only works with mode `multiple` or `tags`");
  }
  const [L] = cl("SelectLike", st?.zIndex);
  return ze(/* @__PURE__ */ d.createElement(Ko, Object.assign({
    ref: t,
    virtual: we,
    showSearch: Y
  }, rt, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, q.root), z?.root), j), A),
    dropdownMatchSelectWidth: it,
    transitionName: d2(ue, "slide-up", _),
    builtinPlacements: x4(x, xe),
    listHeight: p,
    listItemHeight: ve,
    mode: Ae,
    prefixCls: ce,
    placement: B,
    direction: Ce,
    prefix: F,
    suffixIcon: Mt,
    menuItemSelectedIcon: It,
    removeIcon: ft,
    allowClear: De,
    notFoundContent: wt,
    className: ee,
    getPopupContainer: f || ne,
    dropdownClassName: Je,
    disabled: Ke,
    dropdownStyle: Object.assign(Object.assign({}, st), {
      zIndex: L
    }),
    maxCount: Be ? V : void 0,
    tagRender: Be ? I : void 0,
    dropdownRender: Fe,
    onDropdownVisibleChange: Me
  })));
};
process.env.NODE_ENV !== "production" && (rc.displayName = "Select");
const Rn = /* @__PURE__ */ d.forwardRef(rc), Z4 = Rl(Rn, "dropdownAlign");
Rn.SECRET_COMBOBOX_MODE_DO_NOT_USE = nc;
Rn.Option = Go;
Rn.OptGroup = Wo;
Rn._InternalPanelDoNotUseOrYouWillBeFired = Z4;
process.env.NODE_ENV !== "production" && (Rn.displayName = "Select");
const {
  Option: _1
} = Rn;
function N1(e) {
  return e?.type && (e.type.isSelectOption || e.type.isSelectOptGroup);
}
const em = (e, t) => {
  var n, r;
  const {
    prefixCls: a,
    className: o,
    popupClassName: i,
    dropdownClassName: s,
    children: c,
    dataSource: l,
    dropdownStyle: u,
    dropdownRender: f,
    popupRender: v,
    onDropdownVisibleChange: m,
    onOpenChange: p,
    styles: h,
    classNames: g
  } = e, b = Kn(c), y = ((n = h?.popup) === null || n === void 0 ? void 0 : n.root) || u, C = ((r = g?.popup) === null || r === void 0 ? void 0 : r.root) || i || s, E = v || f, x = p || m;
  let S;
  b.length === 1 && /* @__PURE__ */ d.isValidElement(b[0]) && !N1(b[0]) && ([S] = b);
  const O = S ? () => S : void 0;
  let w;
  if (b.length && N1(b[0]) ? w = c : w = l ? l.map((D) => {
    if (/* @__PURE__ */ d.isValidElement(D))
      return D;
    switch (typeof D) {
      case "string":
        return /* @__PURE__ */ d.createElement(_1, {
          key: D,
          value: D
        }, D);
      case "object": {
        const {
          value: _
        } = D;
        return /* @__PURE__ */ d.createElement(_1, {
          key: _,
          value: _
        }, D.text);
      }
      default:
        return;
    }
  }) : [], process.env.NODE_ENV !== "production") {
    const D = Fn("AutoComplete");
    process.env.NODE_ENV !== "production" && D(!S || !("size" in e), "usage", "You need to control style self instead of setting `size` when using customize input."), Object.entries({
      dropdownMatchSelectWidth: "popupMatchSelectWidth",
      dropdownStyle: "styles.popup.root",
      dropdownClassName: "classNames.popup.root",
      popupClassName: "classNames.popup.root",
      dropdownRender: "popupRender",
      onDropdownVisibleChange: "onOpenChange",
      dataSource: "options"
    }).forEach(([I, V]) => {
      D.deprecated(!(I in e), I, V);
    });
  }
  const {
    getPrefixCls: A
  } = d.useContext(cn), M = A("select", a), [T] = cl("SelectLike", y?.zIndex);
  return /* @__PURE__ */ d.createElement(Rn, Object.assign({
    ref: t,
    suffixIcon: null
  }, K0(e, ["dataSource", "dropdownClassName", "popupClassName"]), {
    prefixCls: M,
    classNames: {
      popup: {
        root: C
      },
      root: g?.root
    },
    styles: {
      popup: {
        root: Object.assign(Object.assign({}, y), {
          zIndex: T
        })
      },
      root: h?.root
    },
    className: Xe(`${M}-auto-complete`, o),
    mode: Rn.SECRET_COMBOBOX_MODE_DO_NOT_USE,
    popupRender: E,
    onOpenChange: x,
    // Internal api
    getInputElement: O
  }), w);
}, qo = /* @__PURE__ */ d.forwardRef(em);
process.env.NODE_ENV !== "production" && (qo.displayName = "AutoComplete");
const {
  Option: tm
} = Rn, nm = Rl(qo, "dropdownAlign", (e) => K0(e, ["visible"])), Xo = qo;
Xo.Option = tm;
Xo._InternalPanelDoNotUseOrYouWillBeFired = nm;
const rm = /* @__PURE__ */ JSON.parse('[["กระบี่",[["Iท่อม",[["Iท่อมo",81120],["Iท่อมใต้",81120],["Iพน",81170],[0,81170],["พรุดินC",81120],["LQขาว",81120],["เพหลา",81120]]],[1,[["คีรีวง",81160],[1,81160],["Sต่อ",81160],["Sเขน",81160]]],[2,[["ดินอุดม",81190],[3,81190],["JyN",81190],[2,81190]]],["อ่าวลึก",[["Iยา",81110],["Ip",81110],["Co",81110],[4,81110],["อ่าวลึกf",81110],["อ่าวลึกo",81110],["อ่าวลึกใต้",81110],[5,81110],["แหลมสัก",81110]]],["Pลันl",[[6,81120],["ศาลาด่าน",81150],["Pw",81120],["Pลันlf",81150],["PลันlM",81150]]],[7,[["พรุเตียว",81140],[8,80240],["หน้าS",81140],[9,81140],[7,81140],["Kหาร",80240]]],["Fกระบี่",[["กระบี่f",81000],["กระบี่M",81000],["Iประสงค์",81000],["ทับปริก",81000],[10,81000],["Aทะเล",81180],["อ่าวCง",81000],["Sคราม",81000],[11,81000],["ไสไทย",81000]]],[12,[["IขCน",81130],["Iเขม้า",81130],[13,81130],["ปกาสัย",81130],["Lยูง",81130],["POบอยา",81130],[12,81130],[14,81130]]]]],["กรุงเทพมหานคร",[[15,[["Iต้นy",10600],[15,10600],["Dvภูล่าง",10600],["สมเด็จเจ้าWยา",10600]]],["Iqวา",[["iกองดิน",10510],["iกองดินใต้",10510],[16,10510],["qวาตะวันตก",10510],["qวาตะวันออก",10510]]],[17,[[18,10110],[17,10110],[19,10110],[19,10260]]],[20,[[20,10230],["รามอินทรา",10230]]],[21,[[21,10900],["จอมพล",10900],["จันทรเกษม",10900],[22,10900],["เสCนิคม",10900]]],[23,[[23,10150],[24,10150],["Dค้อ",10150],[25,10150]]],[26,[[26,10210],["สCมบิน",10210],["สีกัน",10210]]],[3,[[3,10400]]],[27,[[27,10300],["ถนนนครไชยO",10300],["วชิรพยาบาล",10300],["สวนจิตรลดา",10300],["สวนจิตรลดา",10303],["สี่แยกมหาCค",10300]]],[13,[["IชักW",10170],["ฉิมพลี",10170],[13,10170],[28,10170],["Dระมาด",10170],["Dเชือกหนัง",10170]]],[29,[[29,10170],["ศาลาธรรมสพน์",10170]]],[30,[[30,10140],[25,10140]]],["ธนบุรี",[["ดาวคะนอง",10600],["ตลาดพลู",10600],["Dยี่เรือ",10600],["บุคคโล",10600],["วัดกัลยาณ์",10600],["สำเหร่",10600],["หิรัญรูจี",10600]]],["Dกอกf",[["Dขุนนนท์",10700],["DขุนO",10700],["Bช่างหล่อ",10700],["ศิริราช",10700],["อรุณอัมรินทร์",10700]]],["DกอกM",[["วัดEW",10600],["วัดอรุณ",10600]]],[31,[["Iจั่น",10240],["eหมาก",10240],["eหมาก",10250]]],[24,[[32,10150],["แสมดำ",10150]]],[33,[[33,10120],["Dโคล่",10120],["วัดWยาไกร",10120]]],[34,[[34,10800],["วงศ์สว่าง",10800]]],[35,[["DCo",10260],["DCใต้",10260]]],[36,[[36,10150]]],[37,[["Dบำหรุ",10700],[37,10700],["Dยี่ขัน",10700],[38,10700]]],[39,[[39,10500],["มหาพฤฒาราม",10500],["สีลม",10500],["สี่Wยา",10500],["สุริยวงศ์",10500]]],[40,[[41,10220],[41,10230],["อนุสาวรีย์",10220]]],[42,[[42,10160],["Dแคo",10160],[43,10160],[44,10160]]],["xกุ่ม",[["Iกุ่ม",10230],["Iกุ่ม",10240],["นวมินทร์",10230],["นวลจันทร์",10230]]],[45,[[45,10330],["รองF",10330],["ลุมพินี",10330],[46,10330],[46,10110],[46,10120],[46,10400],[46,10500]]],[47,[[48,10250],[47,10250],[49,10250]]],["ป้อมปราบศัตรูพ่าย",[["IมหาCค",10100],["Bบาตร",10100],["ป้อมปราบ",10100],["วัดเทพศิรินทร์",10100],["วัดโสมนัส",10100]]],["พญาไท",[["qเสนใน",10400]]],["Wนคร",[["ชนะสงคราม",10200],["ตลาดยอด",10200],["บวรนิเวศ",10200],["Dขุนพรหม",10200],["Bพานถม",10200],["WบรมมหาราชG",10200],["Gบูรพาภิรมย์",10200],["วัดราชบพิธ",10200],["วัดqWยา",10200],["ศาลเจ้าพ่อเสือ",10200],[50,10200],["เสาชิงช้า",10200]]],[19,[[51,10260]]],["ภาษีเจริญ",[[52,10160],[53,10160],[51,10160],[54,10160],["Dหว้า",10160],["Dแวก",10160],["rIภาษีเจริญ",10160]]],[55,[[55,10510],["แสนแสบ",10510]]],[56,[["ช่องนนทรี",10120],["Dโพงพาง",10120]]],["ราชเทวี",[["ถนนพญาไท",10400],["ถนนเพชรบุรี",10400],["Jพญาไท",10400],["มักกะสัน",10400]]],[57,[["Dปะกอก",10140],[57,10140]]],[58,[["ขุมN",10520],["Iสองต้นนุ่น",10520],["Iqประเวศ",10520],["ทับยาว",10520],[58,10520],["vปลาทิว",10520]]],[59,[["จรเข้X",10230],[59,10230]]],[60,[["Iเจ้าคุณสิงห์",10310],[61,10310],[60,10310],["สะพานสอง",10310]]],[62,[["Iตันo",10110],["Iเตยo",10110],["Wโขนงo",10110],["Wโขนงo",10260]]],[63,[[63,10250],["อ่อนนุช",10250],["พัฒCการ",10250]]],[64,[[64,10240],[64,10250],["ราษฎร์พัฒC",10240],[280,10250]]],[65,[["จักรวรรดิ์",10100],[66,10100],[65,10100]]],["สาทร",[["Jมหาเมฆ",10120],["JวัดT",10120],[56,10120]]],[67,[["Iถนน",10220],[67,10220],["ออเงิน",10220]]],[68,[[69,10530],["Iสิบ",10530],["Iสิบสอง",10530],["คู้ฝั่งo",10530],["vต้อยติ่ง",10530],["vผักชี",10530],[68,10530],["Kแฝด",10530]]],[70,[["Aค้างพลู",10160],[70,10160]]],["หลักสี่",[["ตลาดDเขน",10210],["Jสองห้อง",10210]]],[71,[[31,10310],["qเสนนอก",10310],[71,10310]]]]],["กาญจนบุรี",[[72,[["กลอนโด",71260],["จรเข้เผือก",71260],[72,71260],[73,71260]]],["Nผาภูมิ",[["ชะแล",71180],["Eขนุน",71180],["ปิล๊อก",71180],["ลิ่นถิ่น",71180],["สหกรณ์นิคม",71180],[74,71180],["Lเขย่ง",71180]]],[75,[["Tขมิ้น",71120],["Tชะเอม",71130],["ตะคร้ำเอน",71130],[75,71120],[76,71130],[77,71120],[78,71120],["พงตึก",71120],["Wแท่น",71130],["Uk",71120],["สCมแย้",70190],["Aลาน",71130],["หวายเหนียว",71120],["อุโลกสี่หมื่น",71130],["Sqสิบหาบ",71120],[79,71130],["Kตะบอง",71120]]],[80,[[81,71110],[82,71130],[80,71110],["Eล้อ",71000],[83,71110],[84,71110],["kชุม",71110],["รางสาลี่",71110],["GขCย",71110],["Gศาลา",71110],["Aขาว",71110],["Alกยา",71110],[85,71110]]],[86,[["ช่องด่าน",71160],[86,71160],["Aกร่าง",71220],["Aกุ่ม",71160],[87,71220],["หลุมรัง",71160]]],[88,[["Tlเพชร",71140],[89,71140],[90,71140],[88,71140],[84,71140],["รางหวาย",71170],[91,71140],[92,71140]]],["Oสวัสดิ์",[["ด่านHแฉลบ",71250],[93,71250],["Cสวน",71250],[94,71250],["Sโจด",71220],["Hกระบุง",71250]]],["สังขละบุรี",[["ปรังเผล",71240],["Aลู",71240],["ไล่โว่",71240]]],[95,[["สมเด็จเจริญ",71220],[95,71220],[96,71220]]],[97,[["Tแสลบ",71170],[98,71170],["สระลงเรือ",71170],[97,71170]]],["Fกาญจนบุรี",[["ช่องสะเดา",71190],["Eมะขาม",71000],[99,71000],["Bo",71000],[100,71000],[101,71000],["ลาดหญ้า",71190],["Gด้ง",71190],[102,71000],[103,71190],["Aหญ้า",71000],["Pสำโรง",71000],["แก่งเสี้ยน",71000]]],[104,[["Jกระบ่ำ",71210],["Aนกb",71210],["Aประดู่",71210],[105,71210],["Aฝ้าย",71210],[106,71210],[104,71210]]],[107,[[77,71150],["บ้องตี้",71150],["ลุ่มสุ่ม",71150],[108,71150],[109,71150],[110,71150],[107,71150]]]]],[111,[[112,[[112,46130],["aลิง",46130],["ธัญญา",46130],[113,46130],["หลักF",46130],["เจ้าE",46130],["Kสมบูรณ์",46130],[114,46130]]],["กุฉิCรายณ์",[["mค้าว",46110],["mหว้า",46110],["จุมจัง",46110],[115,46110],["Cโก",46110],["Xขาว",46110],[116,46110],[117,46110],[118,46110],["เหล่าM",46110],["เหล่าไฮn",46110],["แจนแลน",46110]]],[119,[["ดินจี่",46180],["JI",46180],["Cทัน",46180],[120,46180],["เนินU",46180],["s",46180]]],["ฆ้องt",[["ฆ้องtพัฒC",46130],["vชี",46130],["เหล่าw",46130],[121,46130],["Rศิลาเลิง",46130]]],[122,[["aพยุง",46000],[122,46000],["Cจำปา",46000],["kC",46000],["สะอาดไชยO",46000]]],[123,[["กุงเก่า",46190],[124,46190],["aสมบูรณ์",46190],[123,46190],[125,46190],["Uอู้ม",46190]]],[126,[[126,46160],[127,46160],["ภูแล่นd",46160],["สายCG",46160],["RCจาน",46160]]],[128,[[128,46230],["ยอดแกง",46230],[129,46230],[103,46230],["หลักเหลี่ยม",46230]]],[130,[["Iขาม",46120],["Tสมบูรณ์",46120],[131,46120],[132,46120],["Xบาน",46120],[130,46120],["Aตอกแป้น",46120],["Aอิเฒ่า",46120],[133,46120],[134,46120],["อิตื้อ",46120],[135,46120],["SWนอน",46120],["เว่อ",46120],[136,46120]]],[137,[[137,46210],[138,46210],["เหล่าอ้อย",46210]]],[139,[["ผาเสวย",46150],["มหาไชย",46150],["vLหลัว",46150],[140,46150],[139,46150],[141,46150],[142,46150],["แซงบาดาล",46150]]],[143,[[144,46140],[145,46140],[146,46140],[143,46140],["RQเกลี้ยง",46140],["Rบุรี",46140],[147,46140],["RแหลมN",46140]]],["qt",[["Zสร้างเที่ยง",46180],[148,46180],["สำราญใต้",46180],["Ad",46180]]],[149,[["aมูล",46220],["vAแสน",46220],[149,46220],[103,46220],[150,46220],[151,46220],[152,46220],["เสาเล้า",46220],["Kเครือ",46220]]],["Lผึ้ง",[[153,46240],["นิคมLผึ้ง",46240],["Aอีบุตร",46240],["ไค้นุ่น",46240]]],[154,[["mโดน",46170],["Zเหมือดb",46170],["ZM",46170],[155,46170],["xCเรียง",46170],["พิมูล",46170],[156,46170],[154,46170],[157,46170]]],[158,[["mปลาค้าว",46160],["mสิมคุ้มu",46160],["คุ้มเก่า",46160],[129,46160],["สระพังN",46160],[159,46160]]],["Fกาฬสินธุ์",[["wหมื่น",46000],[111,46000],[160,46000],["Cจารย์",46000],["xวิt",46000],["ภูดิน",46000],["ภูปอ",46000],["vI",46000],["vปาว",46000],["vพาน",46000],[161,46000],["หลุบ",46000],["LY",46000],[162,46000],["o",46000],[163,46000],[164,46000]]]]],[165,[["ขาณุวรลักษบุรี",[["Tแตง",62140],["gถ้ำ",62140],["ปางมะค่า",62140],["Vพุทรา",62130],["Uสูง",62130],["Gชะพลู",62140],["Gหามแห",62140],["สลกบาตร",62140],["Plล",62130],[79,62130],["โค้งh",62140]]],[166,[[166,62120],["Iสมบูรณ์",62120],["Eพุทรา",62120],["Eมะเขือ",62120],["GX",62120],[167,62120],["Gแขม",62120],[168,62120],[169,62120],["Hลาด",62120]]],["Iลาน",[["IQไหล",62180],["IลานพัฒC",62180],["สักn",62180],[170,62180]]],["iNวัฒC",[["ถาวรวัฒC",62190],["Ji",62190],[81,62190]]],[171,[[171,62210],["ระหาน",62210],["Gชะโอน",62210],[172,62210]]],["ปางศิลาN",[["ปางlไว",62120],["pดาต",62120],[173,62120]]],[174,[["Iพิไกร",62110],["คุยBโอง",62110],["ถ้ำกระต่ายN",62110],[78,62110],[174,62110],["Gควง",62110],["Gตะแบก",62110],["Aeวัว",62110],["Lยั้ง",62110],["Sคีริส",62110]]],[175,[["จันทิมา",62170],["ช่องลม",62170],["xทับแรต",62170],["ประชาสุขสันต์",62170],[175,62170],[176,62170],["Rพลวง",62170]]],["Fกำแพงเพชร",[["คณฑี",62000],["IHลาย",62000],["ทรงธรรม",62000],["Eขุนราม",62000],["ธำมรงค์",62160],[177,62000],["CgZ",62000],["นิคมJYทะเล",62000],["ลานดอกไม้",62000],[178,62000],[179,62000],[105,62000],[180,62000],["เทพนคร",62000],[181,62000],["ไตรตรึงษ์",62160]]],["โกสัมพีนคร",[["ลานดอกไม้ตก",62000],["เพชรชมภู",62000],["โกสัมพี",62000]]],[182,[[183,62150],[184,62150],["Aคล้า",62150],["AN",62150],["AHแตง",62150],["Aไม้กอง",62150],[182,62150]]]]],[185,[[186,[["ดูนสาด",40170],[187,40170],[188,40170],["AกุงM",40170],[189,40170],[190,40170],[134,40170],[191,40170],[192,40170]]],[193,[["mเพียขอม",40180],[193,40180],[194,40180],["ปอแa",40180],[195,40180],[196,40180],["Lแก",40180],["Rพะยอม",40180]]],[197,[["ขัวเรียง",40130],[197,40130],[198,40290],[199,40130],["Gpลาด",40130],["Aเขียด",40290],["Aเสาเล้า",40130],[73,40130],[157,40290],["Rหัน",40290],[200,40130],["ไชยสอ",40130]]],["ซำสูง",[[186,40170],["Zแมด",40170],["คูZ",40170],["BR",40170],[201,40170]]],[202,[[203,40310],[204,40140],["Eกระเสริม",40140],[202,40140],["Xเงิน",40140],[205,40140],[206,40140],["พังทุย",40140],[207,40310],["Gt",40140],[208,40310],[161,40140]]],[188,[[188,40270],[209,40270],["VมะCว",40270],["Vหวายนั่ง",40270],[103,40270],[210,40270],["Rฆ้อง",40270]]],[211,[[211,40110],[212,40110],[213,40110],[214,40110]]],[215,[["Bลาน",40110],[215,40110],["Vปอ",40110],["ภูเหล็ก",40110],[216,40110],["eA",40110],[217,40110],[218,40110],["แคนo",40110],[181,40110]]],[219,[[220,40320],["Bโต้น",40320],["Wบุ",40320],[219,40320],[141,40320]]],["พล",[["ลอมคอม",40120],["Aมะเขือ",40120],["AแวงCงเบ้า",40120],["AแวงโสกW",40120],[221,40120],["เก่างิ้ว",40120],["เพ็กM",40120],["Fพล",40120],["Kสง่า",40120],["โจดAแก",40120],["Rข่า",40120],["โสกนกเต็น",40120]]],[222,[[223,40350],[222,40350],["Gสวาบ",40350],[224,40350],["Rคอม",40350]]],[225,[["mขอนแก่น",40150],[226,40150],["Jชมพู",40150],[227,40150],[228,40150],["Bเรือ",40150],[225,40150],[229,40150],["Aกุงธนสาร",40150],["Aกุงเซิน",40150],["หว้าN",40150]]],["zเก่า",[[85,40150],["Fเก่าพัฒC",40150],[181,40150]]],["มัญจาคีรี",[["mเค้า",40160],["Zแคน",40160],[230,40160],[231,40160],[232,40160],["สวนหม่อน",40160],[113,40160],["sเพ็ก",40160]]],[233,[["ซำU",40220],[234,40220],["Cจาน",40220],["บริบูรณ์",40220],[83,40220],["ภูห่าน",40220],["Gเพิ่ม",40220],[235,40220],[233,40220],[236,40220]]],[237,[["mธาตุ",40150],["ขนวน",40150],[238,40150]]],[239,[["คึมชาด",40190],["aเค็ง",40190],["Tดั่ง",40190],["Tดู่",40190],[240,40190],[241,40190],[242,40190],[239,40190],[243,40190],[244,40190],["หันโจด",40190],["Rธาตุ",40190]]],[245,[["mกว้าง",40210],["จระเข้",40240],["Bกง",40240],[246,40240],["Bเม็ง",40210],[247,40240],[245,40210],[248,40210],[249,40210],[157,40210]]],["อุบลรัตน์",[["Jโป่ง",40250],[250,40250],[251,40250],["Oสุขสำราญ",40250],["เขื่อนอุบลรัตน์",40250],[252,40250]]],[253,[[119,40280],["aFแอม",40280],[254,40280],[253,40280],[214,40280]]],[255,[[220,40340],[256,40340],[179,40340],[255,40340]]],["Fขอนแก่น",[["Td",40000],["Tหัน",40260],["EW",40260],["xเนียม",40000],[257,40000],["Bทุ่ม",40000],[258,40000],["Bเป็ด",40000],["Wลับ",40000],[259,40000],["สาวะถี",40000],[148,40000],[260,40000],[261,40000],[262,40000],[263,40000],["Rท่อน",40000],[181,40000],["มหาวิทยาลัยขอนแก่น",40002]]],[264,[[265,40230],["ทางขวาง",40230],["ECงแนว",40230],["Eวัด",40230],["ละหานC",40230],[264,40230]]],[266,[["คอนฉิม",40330],[266,40330],[248,40330],[157,40330],["uCเพียง",40330]]],["KYไชย",[[267,40160],["Cแพง",40160],[238,40160],["Yไชย",40160]]],[147,[[268,40110],[269,40110],["เปือยM",40110],[147,40110],[270,40110]]]]],["จันทบุรี",[[271,[[271,22110],["ซึ้ง",22110],["ตกพรม",22110],["ตรอกนอง",22110],["ตะปอน",22110],[16,22110],[272,22110],["gเวฬุ",22150],["มาบไพ",22110],["Gสรรพรส",22110],["วันยาว",22110],["เกวียนหัก",22110]]],[273,[[274,22120],["ตะกาดเง้า",22120],["Jเบญจา",22170],[273,22120],["gพุ",22120],["พลอยแหวน",22120],["ยายร้า",22120],["รำพัน",22170],[275,22120],["สีพยา",22120],["SบายO",22120],["Sวัว",22120],[276,22170],["โขมง",22170]]],[277,[["กระแจะ",22170],["dข้าม",22160],[277,22160],["Gโตนด",22170],[46,22170],["สCมไชย",22170]]],[278,[["ฉมัน",22150],[279,22150],["ปัถวี",22150],[278,22150],["Gแซ้ม",22150],["อ่างคีรี",22150]]],["สอยดาว",[[0,22180],[280,22180],["JขCน",22180],["ปะตง",22180],["สะตอน",22180]]],["Sคิชฌกูฏ",[[281,22210],["จันทเขลม",22210],["ชากไทย",22210],[282,22210],["พลวง",22210]]],["Fจันทบุรี",[["คมD",22000],["ICรายณ์",22000],["จันทนิมิต",22000],[283,22000],[284,22000],["Dกะจะ",22000],[61,22000],["วัดu",22000],[103,22000],["Pขวาง",22000],["แสลง",22000]]],[285,[["ขุนซ่อง",22160],["พวา",22160],["qพี่น้อง",22160],["Sวงกต",22160],[285,22160]]],["แหลมสิงห์",[["IQเค็ม",22190],["Dกะไชย",22120],["Dสระเก้า",22190],["rQแหลมสิงห์",22130],["พลิ้ว",22190],["Aชิ่ม",22130],["Pเปริด",22130]]],[170,[[286,22140],["ทับy",22140],["Alคง",22140],[172,22140],[170,22140]]]]],["ฉะเชิงเทรา",[[287,[["ก้อนb",24000],[287,24000],[288,24110],["Dเล่า",24000],["Dโรง",24000]]],[289,[["Iตะเกรา",24160],[289,24160]]],[290,[["ENหลาง",24110],["Dกระเจ็ด",24110],[290,24110],["Dสวน",24110],[10,24110],["สาวชะโงก",24110],[291,24110],["เสม็ดo",24110],["เสม็ดใต้",24110]]],[292,[["Tฉิมพลี",24170],["TPกา",24170],["DขCก",24150],[292,24150],[293,24170],[294,24000],["สิงโตN",24150],["หมอนN",24150],["โพรงอากาศ",24150],["โยธะกา",24150]]],[295,[[32,24130],["Eสะอ้าน",24130],[295,24130],["Dผึ้ง",24130],["Dวัว",24130],["Dสมัคร",24180],["Dเกลือ",24180],["พิมพา",24180],["สองI",24130],[68,24130],["หอมศีล",24180],[9,24130]]],[296,[[274,24140],["IBY",24140],["Iประเวศ",24140],[297,24140],["Eพลับ",24140],["Dกรูด",24140],["Dซ่อน",24140],[296,24140],["ลาดขวาง",24140],[298,24140],["สิบเอ็ดศอก",24140],["Aตีนนก",24140],[103,24140],["Pไร่",24140],[299,24140],["แสนภูดาษ",24140],["แหลมประดู่",24140]]],[300,[["Eถ่าน",24120],["Bซ่อง",24120],[300,24120],[301,24120],[302,24120],["Pขนุน",24120],["Spซ้อน",24120],[261,24120]]],["ราชสาส์น",[["af",24120],["Dคา",24120],[303,24120]]],["สCมtเขต",[["คู้ยายหมี",24160],["JWยา",24160],[93,24160],["ลาดกระทิง",24160]]],["Fฉะเชิงเทรา",[["Iจุกกระเฌอ",24000],["Iนครเนื่องเขต",24000],["IC",24000],["Icแพ่ง",24000],["Iอุดมชลจร",24000],["Iเปรง",24000],["Eไข่",24000],["Dกะไห",24000],["Dขวัญ",24000],["Dตีนเป็ด",24000],[304,24000],[305,24000],[306,24000],[43,24000],[83,24000],[307,24000],["หCมแa",24000],[308,24000],["โสธร",24000]]],[309,[[102,24190],["Aไม้แก่น",24190],[310,24190],[309,24190]]]]],["ชลบุรี",[[311,[["ตะเคียนเตี้ย",20150],[312,20150],[311,20150],[95,20150],[96,20150],[313,20150],[314,20150],[315,20150]]],[316,[[317,20270],["gกวางN",20270],[316,20270],["พลวงN",20270],["วัดสุวรรณ",20270],["เกษตรสุวรรณ",20270]]],[318,[["Iกิ่ว",20220],[318,20170],["มาบh",20170],["Aชาก",20170],["Aซ้ำซาก",20170],["Aบอนแa",20170],["Aอิรุณ",20220],["Ahb",20220]]],[319,[["กุฎโง้ง",20140],[320,20140],[32,20140],["Cมะตูม",20140],["CGp",20140],["Cเริก",20140],[321,20140],["Bเซิด",20140],[319,20140],[322,20140],[323,20140],["สระสี่เหลี่ยม",20140],["Aขยาด",20140],[95,20140],["Aเหียง",20140],["หน้าWธาตุ",20140],["หมอนCง",20140],[169,20140],["Kเพลาะ",20140],["ไร่หลักN",20140]]],[183,[["DCง",20160],[324,20160],[99,20160],[183,20160],["มาบโป่ง",20160],["Aกะขะ",20160],["Aตำลึง",20160],["Aหงษ์",20160],["หน้าประดู่",20160],[325,20160],["Kขี้หนอน",20160]]],[326,[["Jสุขลา",20230],[304,20110],[327,20230],["gวิน",20230],[326,20110],["สุรศักดิ์",20110],[328,20230],["Sคันทรง",20110]]],[329,[["Cจอมเทียน",20250],["Dเสร่",20250],["พลูlc",20180],[329,20180],["แสมสาร",20180]]],[152,[[281,20190],["Aเสือd",20190],[152,20190],["ห้างสูง",20190],["Sซก",20190]]],[330,[["Eบุญมี",20240],[330,20240]]],["Pสีชัง",[["Eเทววงษ์",20120]]],["Fชลบุรี",[["Iตำหรุ",20000],["Teฬ่อ",20000],[331,20000],["Di",20000],["Dปลาสร้อย",20000],["Bปึก",20130],[332,20000],["Bโขด",20000],["มะขามหย่ง",20000],["สำนักบก",20000],["Aข้างคอก",20000],[87,20000],["Aไม้แa",20000],["Lกะปิ",20000],["Lกะปิ",20130],[333,20000],[334,20000],["เหมือง",20130],[335,20130]]]]],[336,[["มโนรมย์",[["คุ้งสำเภา",17110],[337,17110],["วัดK",17110],["ศิลาดาน",17110],["หางQสาคร",17170],["อู่ตะเภา",17170],["ไร่พัฒC",17170]]],[338,[[339,17120],["มะขามเฒ่า",17120],[340,17120],[338,17120],["Aขุ่น",17120],["Af",17120],[103,17120]]],["สรรคบุรี",[["aคอน",17140],["Tกำ",17140],["Dขุด",17140],["Lกรด",17140],["LกรดพัฒC",17140],["เที่ยงแท้",17140],["แพรกOราชา",17140],["โพn",17140]]],[341,[["ตลุก",17150],[342,17150],[341,17150],["หาดอาษา",17150],[276,17150],["โพCงดำตก",17150],["โพCงดำออก",17150]]],[343,[[344,17120],[307,17120],[345,17120],[343,17120]]],[346,[["Bเชี่ยน",17130],["Gไก่เถื่อน",17130],["qง่ามEโบสถ์",17160],[212,17160],[346,17130],["Lงู",17160],["เด่นM",17130],["ไพรนกยูง",17130]]],[347,[["กะบกเตี้ย",17130],["สุขเดือนห้า",17130],[347,17130]]],["FtCท",[[336,17000],[348,17000],["ธรรมามูล",17000],["Cงลือ",17000],[349,17000],["หาดEเสา",17120],["SEW",17000],["เสือโฮก",17000],[181,17000]]]]],["tภูมิ",[[350,[[350,36140],[351,36140],[352,36140],["Uหวาย",36140],[353,36140],[328,36140],[354,36140],["Kมั่งงอย",36140],[157,36140]]],[355,[[355,36180],[356,36180],[357,36180],["JCเลา",36180],["JW",36180],["Jลุยลาย",36180],[191,36180],[358,36180]]],["จัตุรัส",[[203,36130],[359,36130],[206,36130],["ละหาน",36130],[360,36130],[361,36130],[362,36220],["AXM",36130],[363,36130]]],[364,[[364,36130],["ตะโกN",36130],["Eกูบ",36130]]],["บำเหน็จณรงค์",[["Bชวน",36160],[365,36220],[366,36160],[367,36220],["PมะCว",36160],["KเพชรพัฒC",36160],["Kเริงรมย์",36160]]],[368,[["ชีบน",36170],["ตลาดแร้ง",36170],[368,36170],["ภูแลนคา",36170],["ลุ่มvชี",36170],[270,36170]]],[194,[["Bเต่า",36190],[194,36190],[369,36190],["qสวน",36190],[370,36190]]],["ภักดีชุมพล",[["Bเจียง",36260],[178,36260],["เจาN",36260],[371,36260]]],["ภูเขียว",[["กวางโจน",36110],["mยม",36110],[317,36110],[372,36110],[366,36110],[373,36110],["ผักปัง",36110],["Aคอนไทย",36110],[260,36110],[121,36110],["โอโล",36110]]],[374,[["Gตะเฆ่",36250],[374,36250],["Lแย้",36250],[121,36250],["โสกปลาดุก",36250]]],[375,[["mชุมแสง",36210],[376,36210],["ถ้ำวัวแa",36210],["EM",36210],["Cงแดด",36210],[377,36210],[375,36210],[141,36210]]],["เกษตรสมบูรณ์",[["mเลาะ",36120],[378,36120],[379,36120],[268,36120],[380,36120],[381,36120],["สระsN",36120],[382,36120],["Asn",36120],["Rกอก",36120],[248,36120]]],["เทพสถิต",[["CUกลัก",36230],[383,36230],["วะตะแบก",36230],["Lยายจิ๋ว",36230],["โป่งนก",36230]]],["เนินสง่า",[["กะฮาด",36130],["lเนิน",36130],["รังn",36130],["Aฉิม",36130]]],["Ftภูมิ",[["mตุ้ม",36000],["ชีลอง",36000],["ซับสีN",36000],["Epโงม",36000],[223,36000],["Cเสียว",36000],[384,36000],[385,36240],["Bเล่า",36000],[386,36000],[387,36000],["ACแซง",36000],[73,36240],["Lต้อน",36000],[388,36000],[252,36000],[389,36240],[163,36000],[181,36000]]],["แก้งคร้อ",[[351,36150],["Eมะไฟหวาน",36150],[198,36150],[373,36150],[328,36150],[390,36150],[73,36150],["หลุบคา",36150],["เก่าย่าดี",36150],["Kกุง",36150]]]]],[391,[["Jตะโก",[["ช่องไม้b",86220],[392,86220],["Jตะไคร",86220],["rตะโก",86220],["หมู่POอบยา",""],["Pขี้นก",""],["Pคราม",""],["Pคางสือ",""],[393,""],["Pมุก",""],[394,""],["Pรางบรรทัด",""],["Pสูบ",""]]],[395,[["คุริง",86140],["ทรัพย์อนันต์",86140],[32,86140],[395,86140],["Cกระlม",86140],["รับร่อ",86190],["สลุย",86140],[275,86140],["หงษ์เจริญ",86140],["pb",86190]]],["ปะทิว",[["ชุมโค",86160],[396,86210],["ทะเลทรัพย์",86160],["Dสน",86160],["rI",86210],["สะพลี",86230],["Pซีกง",""],["PW",""],[394,""],[397,""],["Pร้านเป็ด",""],["Pร้านไก่",""],["Pเอียง",""],["Pไข่",""],["Sไชยราช",86210]]],[398,[["ปังหวาน",86180],["rทรง",86180],["Wรักษ์",86180],[398,86180]]],[399,[["Jคาวัด",86170],[400,86170],[399,86170],[401,86170]]],[402,[["ครน",86130],["ด่านสวี",86130],["Jระยะ",86130],[403,86130],[404,86130],[405,86130],[101,86130],["วิสัยใต้",86130],[402,86130],["Pกระ",""],["Pกุลา",""],["PNb",""],["Pบาตร์",""],["Pพัดหวายเล็ก",""],["PพัดหวายM",""],["Pยูง",""],["Pหนู",""],["Pแมว",""],["Pแรด",""],["Sค่าย",86130],["Sทะลุ",86130]]],[406,[["ขันเงิน",86110],["Eมะพลา",86110],["Cขา",86110],["Cพญา",86110],[407,86150],["Dมะพร้าว",86110],[408,86110],[10,86150],["พ้อแa",86110],["Gตะกอ",86110],[406,86110],["หาดยาย",86110],["Pพิทักษ์",""],["แหลมi",86110]]],["Fชุมพร",[["ขุนกระทิง",86190],[409,86000],["ถ้ำสิงห์",86100],["Jคา",86100],["Eตะเภา",86000],[410,86000],["Cชะอัง",86000],[411,86000],["Dลึก",86000],[412,86000],[413,86190],[10,86120],[46,86190],[98,86000],["วิสัยo",86100],["หาดiรี",86120],["หาดพันไกร",86000],["Pกา",""],["Pกินหลักง้ำ",""],["Pnเล็ก",""],["PnM",""],["PNหลาง",""],["Pทะลุ",""],[393,""],["Pมัตs",""],["Pมาตรา",""],["Pรังกาจิว",""],["Pละวะ",""],["Pสาก",""],["Pหลักแรด",""],["Pอีแรด",""],["Pเสม็ด",""]]]]],[414,[[415,[[415,92110],["กันตังใต้",92110],["Iชีล้อม",92110],["Iลุ",92110],["ควนธานี",92110],[312,92110],["Dสัก",92110],[412,92110],["Dเป้า",92110],["gQร้อน",92110],[416,92110],[417,92110],["Pลิบง",92110],[14,92110]]],["Cโยง",[["ช่อง",92170],["Cข้าวเสีย",92170],["Cหมื่นO",92170],["Cโยงo",92170],["ละมอ",92170],["Kสะบ้า",92170]]],[418,[[419,92180],[32,92120],["Eพญา",92140],[54,92140],[413,92140],[418,92180],["ลิพัง",92180],["สุโสะ",92120],["Pสุกร",92120],["แหลมสอม",92180]]],[420,[["Jกระบือ",92140],["Jค่าย",92140],["Cชุมเห็ด",92140],[420,92140],[421,92140],["Pเปียะ",92140],["โพรงจระเข้",92140],["ในควน",92140]]],[422,[["Iปาง",92160],["ควนเมา",92160],[103,92160],[95,92130],["Sไพร",92160]]],["Gวิเศษ",[["Eสะบ้า",92000],["Gมะปราง",92220],["Gมะปรางo",92220],["อ่าวตง",92220],["Sวิเศษ",92220]]],["สิเกา",[["กะลาเส",92150],["CFเพชร",92000],["gp",92150],[314,92150],["ไม้ฝาด",92150]]],[423,[["ตะเสะ",92120],["บ้าหวี",92120],[423,92120]]],[424,[["Jต่อ",92130],[425,92130],["Cวง",92210],[426,92210],["Dดี",92210],["rคม",92130],["rแจ่ม",92190],["vภูรา",92190],["Gคีรี",92210],["Adแล่น",92130],["LCง",92130],[424,92130],["Sกอบ",92130],[427,92130],["Sปูน",92130],["ในเl",92130]]],["Fตรัง",[["ควนปริง",92000],["ทับเที่ยง",92000],["Clล่วง",92000],["CEมo",92190],["CEมใต้",92190],["Cบินหลา",92170],["Cพละ",92000],["Cโต๊ะหมิง",92000],["Cโยงใต้",92170],[428,92000],[39,92000],[408,92000],[296,92000],["Aตรุด",92000],["Kหล่อ",92000]]]]],["ตราด",[[286,[[286,23110],["หาดเล็ก",23110],["ไม้รูด",23110]]],["gไร่",[["dทูน",23140],["ด่านชุมพล",23140],["นนทรีย์",23140],[86,23140],[49,23140]]],[429,[[429,23000],[430,23000]]],[431,[[431,23170],["Pdใต้",23170]]],[432,[["Jนนทรี",23130],["Eโสม",23150],["ประณีต",23150],[307,23130],["สะตอ",23150],[432,23130],[172,23150],["แสนตุ้ง",23150]]],["Fตราด",[["ชำราก",23000],["ตะกาง",23000],["Eกุ่ม",23000],["Eพริก",23000],[304,23000],[108,23000],["Aคันทรง",23000],["Aเสม็ด",23000],[106,23000],["ห้วงQขาว",23000],["Lแร้ง",23000],["อ่าวM",23000],["เนินi",23000],["แหลมกลัด",23000]]],[433,[[286,23120],["Qเชี่ยว",23120],["Dปิด",23120],[433,23120]]]]],["lก",[[434,[[434,63150],["Hต้าน",63150],["Hวะc",63150],["Hสอง",63150],["Hหละ",63150],["Hอุสุ",63150]]],["Blก",[["lกตก",63120],["lกออก",63120],["Jกระเชาะ",63120],["ท้องฟ้า",63120],["สมอโคน",63120],["Pตะเภา",63120],["Hสลิด",63120]]],[435,[["คีรีราษฎร์",63160],["ช่องแคบ",63160],[435,63160],["รวมไทยพัฒC",63160],["วาเล่ย์",63160]]],["Gเจ้า",[["Cโบสถ์",63180],["ประดาง",63180],["เชียงN",63180]]],[436,[[413,63130],[437,63130],[438,63130],[439,63130],[340,63130],[436,63130]]],[440,[[176,63170],[440,63170],[441,63170],[442,63170],["Hละมุ้ง",63170],["โมโกร",63170]]],["Flก",[["ตลุกwJ",63000],["Qรึม",63000],["Vมะk",63000],[443,63000],["Gประจบ",63000],[241,63000],["AXo",63000],[444,63000],[176,63000],["eเดียด",63000],["เชียงเงิน",63000],["Hท้อ",63000],[445,63000],["ไม้n",63000]]],[446,[["ขะเนจื้อ",63140],[447,63140],["qหมื่น",63140],["Hจะเรา",63140],[448,63140],[446,63140]]],[449,[["ด่านHละเมา",63110],["Eสายลวด",63110],["Wธาตุผาแa",63110],["พะวอ",63110],["มหาวัน",63110],["Hกาษา",63110],["Hกุ",63110],["Hlว",63110],[450,63110],[449,63110]]]]],[451,[[413,[[452,26110],[38,26110],[413,26110],["Bพริก",26110],[453,26110],["Vขะ",26110],["พิกุลออก",26110],["Oกะอาง",26110],["อาษา",26110],["Sเพิ่ม",26110]]],[454,[[76,26130],["Cpลาด",26130],[454,26130],[455,26130],["Pหวาย",26130],["PY",26130],[456,26130]]],[457,[[286,26120],[458,26120],[204,26120],[459,26120],["Dลูกเสือ",26120],["Dสมบูรณ์",26120],["xศาล",26120],["Wอาจารย์",26120],["ศีรษะกระบือ",26120],[457,26120],["Yแทน",26120]]],["FนครCยก",[["aละคร",26000],["Tยอ",26000],[284,26000],[460,26000],[451,26000],[461,26000],["พรหมณี",26000],["Gกระโจม",26000],["Oจุฬา",26000],["OCวา",26000],["สาริกา",26000],[217,26000],[462,26000]]]]],[463,[[464,[["กระตีบ",73180],[464,73140],["Tข่อย",73140],["Jกระพังโหม",73140],[320,73140],["JX",73140],["Jลูกนก",73140],["รางพิกุล",73140],[465,73140],["สระพัฒC",73180],["สระสี่มุม",73140],[466,73140],[71,73140],[224,73180],["LหมอนN",73140]]],[467,[["Tพุทรา",73150],["Tรวก",73150],[468,73150],["vลูกX",73150],["vเหย",73150],[469,73150],["Lด้วน",73150],["LW",73150]]],[470,[["ขุนb",73120],[471,73120],["Tแฝก",73120],["Eกระชับ",73120],["Eตำหนัก",73120],["EWยา",73120],[470,73120],[472,73120],[304,73120],[473,73120],[306,73120],["Dbฟ้า",73120],["พะเนียด",73120],["ลานlกฟ้า",73120],["วัดละมุด",73120],["วัดสำโรง",73120],["วัดแค",73120],["OมหาY",73120],["OษะN",73120],["สัมปทวน",73120],["Lพลู",73120],["แหลมX",73120],["KWเจดีย์",73120],["ไทยาวาส",73120]]],[474,[["Iนกกระทุง",73130],[467,73130],["นราภิรมย์",73130],["นิลเพชร",73130],["XrE",73130],[475,73130],["Dภาษี",73130],[473,73130],[342,73190],[474,73130],["DyV",73130],["vพญา",73130],["pมูล",73190],[182,73130],["hหูd",73130]]],["พุทธมณฑล",[["Iโยง",73170],[476,73170],["ศาลายา",73170]]],[477,[["กระทุ่มล้ม",73220],["Iจินดา",73110],[478,73110],["ตลาดจินดา",73110],[479,73210],[32,73110],["Eตลาด",73110],["Dกระทึก",73210],[480,73110],[305,73210],[83,73110],["ยายชา",73110],[477,73110],["หอมเกร็ด",73110],["อ้อมM",73160],["ไร่ขิง",73210]]],["Fนครปฐม",[["Tยายหอม",73000],["lก้อง",73000],["ถนนขาด",73000],[481,73000],[482,73000],["ธรรมศาลา",73000],[463,73000],["Dแขม",73000],["gพลับ",73000],[379,73000],["Wปฐมเจดีย์",73000],["Wประโทน",73000],["มาบแค",73000],["vพยา",73000],[483,73000],[102,73000],[298,73000],["สระกะเทียม",73000],["สวนVน",73000],["qควายเผือก",73000],[484,73000],["Aดินแa",73000],["Arโลง",73000],["Lจรเข้",73000],["โพรงมะเดื่อ",73000]]]]],["นครพนม",[[485,[["Eจำปา",48120],[485,48120],["พนอม",48120],["พะทาย",48120],["รามราช",48120],["Aเทา",48120],["เวินWบาท",48120],[486,48120],["ไชยบุรี",48120]]],[487,[["mฉิม",48110],["TCงหงส์",48110],[487,48110],["ธาตุพนมo",48110],["Cถ่อน",48110],["Cหนาด",48110],["Qก่ำ",48110],[488,48110],["WwJ",48110],["อุ่มเหม้า",48110],["แสนพัน",48110],[489,48110]]],[490,[["Tเตย",48140],[490,48140],["Aซน",48140]]],[228,[[76,48180],["CคูณM",48180],[491,48180],[228,48180],["Bเสียว",48180],["เหล่าพัฒC",48180]]],[492,[[265,48130],["Zพี้",48130],["Cคู่",48130],["Cเลียง",48130],[492,48130],[373,48130],["Wซอง",48130],[493,48130],["พุ่มแก",48130],[233,48130],[421,48130],[390,48130]]],[494,[[491,48140],["Cเข",48140],[494,48140],[141,48140],[163,48140],[495,48140]]],[496,[["กุlไก้",48160],[144,48160],[496,48160],[184,48160],[497,48160],["AเทาM",48160],[498,48160],[252,48160]]],[167,[["ยอดชาด",48130],[167,48130],[499,48130],[263,48130]]],[500,[["Egสงคราม",48150],[250,48150],["Cเดื่อ",48150],["Bข่า",48150],["Bเอื้อง",48150],[500,48150],["qผง",48150],["หาดแพง",48150],["sสว่าง",48150]]],["Fนครพนม",[["กุรุคุ",48000],[501,48000],[502,48000],[503,48000],["Eค้อ",48000],[504,48000],["Cราชควาย",48000],[4,48000],["Bผึ้ง",48000],["Glมัว",48000],["Aญาติ",48000],[455,48000],[505,48000],[506,48000],[181,48000]]],["เรณูนคร",[[507,48170],[115,48170],[232,48170],["Aย่างชิ้น",48170],["เรณู",48170],["เรณูใต้",48170],["Kpแฮ่",48170],[163,48170]]],[508,[["Cขมิ้น",48190],[509,48190],[510,48190],[257,48190],["sจาน",48190],["sบก",48190],[508,48190]]]]],["นครราชสีมา",[[511,[[511,30280],["xอ้อ",30280],["พันดุง",30280],[150,30280],[445,30280]]],[512,[[512,30290],["ชีวึก",30290],["พะงาด",30290],["Aeฟาน",30290],["FCท",30290],["Fเกษตร",30290],[513,30290]]],["คง",[["ขามสมบูรณ์",30260],["คูขาด",30260],[514,30260],["lจั่น",30260],["Bปรางค์",30260],[103,30260],["AมะCว",30260],["เทพาลัย",30260],[515,30260],["Rเต็ง",30260]]],[516,[[516,30250],["ครบุรีใต้",30250],["จระเข้p",30250],["ตะแบกบาน",30250],[83,30250],["มาบตะโกเอน",30250],["vเพียก",30250],["สระว่านWยา",30250],["อรพิมพ์",30250],["เฉลียง",30250],["แชะ",30250],["Kกระชาย",30250]]],[517,[["IF",30230],[517,30230],[452,30230],["Oละกอ",30230],[518,30230],[328,30230],[519,30230],[520,30230]]],[521,[[521,30270],[522,30270],[507,30270],["ประสุข",30270],["สาหร่าย",30270],[523,30270],["Rตูม",30270],["Rยอ",30270],[524,30270]]],[525,[["mพิมาน",30210],[525,30210],["ด่านนอก",30210],["ด่านใน",30210],[526,30210],[99,30210],["Bแปรง",36220],["พันชนะ",30210],["สระจรเข้",30210],["Aกราด",30210],["AXตะเกียด",30210],["AXละคร",30210],[527,36220],[74,30210],[388,30210],["RFพัฒC",30210]]],[528,[[528,30120],[529,30120],["Fพะไล",30120],["Rจาน",30120]]],[205,[[344,30120],["ขุนN",30120],["Tตะหนิน",30120],[530,30120],[205,30120],["AXสะอาด",30120],["Aแจ้งM",30120],[191,30120],["เสมาM",30120],["RNหลาง",30120]]],[531,[["ช่อระกา",30350],[531,30350],["GY",30350],["Kกระเบื้อง",30350]]],[532,[[69,30180],["Tมัน",30180],[522,30180],[533,30180],["Cงรำ",30180],[532,30180],["Gไม้แa",30180],["Aค่าย",30180],[519,30180],["หันLi",30180],["Fโดน",30180],[534,30180],["Rเพ็ด",30180]]],["ปักธงt",[[535,30150],[536,30150],["ตะขบ",30150],["ตะคุ",30150],[537,30150],["ธงto",30150],["นกออก",30150],["gปลาN",30150],[538,30150],["vCงb",30150],["สะแกราช",30150],[242,30150],["สุขเกษม",30150],["เกษมทรัพย์",30150],["Fปัก",30150],[539,30150]]],[540,[[541,30320],["ขนงW",30130],["Ik",30130],["จันทึก",30130],[540,30130],["พญาเย็น",30320],["Gกะทะ",30130],[168,30130],["AQแa",30130],[91,30130],["หมูสี",30130],["โป่งlลอง",30130]]],["WNZ",[["ทัพรั้ง",30220],["พังเทียม",30220],["มาบกราด",30220],["สระW",30220],[542,30220]]],[543,[["กระชอน",30110],["กระเบื้องM",30110],["ชีวาน",30110],[544,30110],[279,30110],["ธารละหลอด",30110],[545,30110],["รังกาM",30110],["สัมฤทธิ์",30110],[546,30110],["โบสถ์",30110],[181,30110]]],["vทะเมนt",[["ขุย",30270],["ช่องแมว",30270],[379,30270],[547,30270]]],[465,[["ระเริง",30150],[465,30370],["Gหมี",30370],["อุดมทรัพย์",30370],[548,30370]]],[549,[[550,30140],["mf",30140],["Ih",30340],[26,30140],[268,30140],[551,30140],[552,30340],["GโรงM",30140],[549,30140],[216,30140],["AXf",30140],["Aหญ้าขาว",30140]]],[553,[[554,30430],[553,30430],["AlดM",30430],["Rประดู่",30430],[163,30430]]],[555,[[124,30380],[556,30380],["บุ่งขี้เหล็ก",30170],["มะเกลือเก่า",30170],["มะเกลือu",30170],[555,30170],[557,30380],["เสมา",30170],["โคราช",30170],["โค้งU",30170],["Rค่า",30170]]],["Aบุญมาก",[[83,30410],["ลุงเขว้า",30410],[558,30410],[557,30410],["AบุนCก",30410],["Aeแรต",30410],["Aไม้h",30410],[371,30410],[559,30410]]],[560,[["กงรถ",30240],[535,30240],[392,30240],["ทับสวาย",30240],["หลุ่งตะเคียน",30240],["หลุ่งประดู่",30240],[74,30240],["Lแคน",30240],[560,30240],["Fพลับพลา",30240]]],[561,[["dN",30230],[284,30230],["Wพุทธ",30230],[484,30000],[562,30230]]],[563,[["xปรือ",30210],["GยายN",30210],["สำนักตะคร้อ",30210],[141,30210]]],["Fนครราชสีมา",[["จอหอ",30310],[283,30310],[564,30000],[296,30310],[83,30000],["ปรุM",30000],["พลกรัง",30000],["พะเC",30000],["พุดซา",30000],["มะเริง",30000],["สีมุม",30000],["สุรCรี",30000],[466,30000],["Aจะบก",30000],["AXศาลา",30000],[546,30000],[565,30310],[244,30000],["หมื่นไวย",30000],[367,30000],[456,30280],[252,30310],["Yw",30000],[181,30000],["ไชยมงคล",30000]]],[566,[["กระเบื้องนอก",30270],["ละหานปลาค้าว",30270],[566,30270],[200,30270]]],[567,[["mโบสถ์",30330],["Bราษฎร์",30330],["สระตะเคียน",30330],["สุขไพบูลย์",30330],[567,30330],[214,30330]]],[568,[["xพะไล",30440],["xสำโรง",30440],[518,30440],[568,30440],[389,30440]]],[569,[["กระโทก",30190],["ด่านเกวียน",30190],["Jอรุณ",30190],["Eจะหลุง",30190],["Eลาดขาว",30190],["Eอ่าง",30190],[570,30190],[61,30190],["ละลมuพัฒC",30190],[569,30190]]],[136,[[501,30160],["จันอัด",30160],["Tชมพู",30160],["Tหวาย",30160],["ด่านคล้า",30160],["ธารปราสาท",30420],["บิง",30160],["พลสงคราม",30160],[571,30160],["vคอหงษ์",30160],["vมูล",30160],[572,30160],["Fปราสาท",30160],[573,30160],[136,30160],["u",30160]]],[270,[["TยาวM",30360],[241,30360],[574,30360],["Rlเถร",30360],[270,30360]]],[575,[["กำปัง",30220],["ค้างพลู",30220],["ด่านจาก",30220],["ถนนY",30220],["บัลลังก์",30220],["BG",30220],[571,30220],["สายออ",30220],[242,30220],[575,30220]]]]],["นครOธรรมราช",[[576,[[576,80210],["ควนN",80210],["ท้องเนียน",80210]]],["จุฬาภรณ์",[["ควนAคว้า",80130],[577,80130],["Cหมอบุญ",80130],["Bควนมุด",80180],["Bชะอวด",80180],["qตำบล",80130]]],[578,[["กะเปียด",80260],["จันดี",80250],[578,80150],["Cกะชะ",80150],["Cเขลียง",80260],["Cแว",80260],["ละอาย",80250],["Lปริก",80260],["ไม้เรียง",80260],["ไสหร้า",80150]]],[579,[["ขอนหาด",80180],["ควนAหงษ์",80180],[579,80180],["Eประจะ",80180],["Eเสม็ด",80180],["Cงหลง",80180],["Bตูล",80180],["Gอ่าง",80180],["Pขันธ์",80180],["SWN",80180],["เคร็ง",80180]]],[580,[[580,80250],["สวนขัน",80250],["หลักd",80250]]],[581,[["Iเส",80260],[27,80260],[581,80260]]],[582,[["กะปาง",80310],["ควนกรด",80110],["ชะมาย",80110],["ถ้ำM",80110],["ที่G",80110],["Ccเสน",80110],[405,80110],["Cไม้h",80110],[583,80110],[101,80110],[584,80110],[427,80110],["Sโร",80110]]],[585,[["กรุงหยัน",80240],["กุแหระ",80240],["Jสัง",80240],[585,80240],[410,80240],["Dรูป",80240],[586,80240]]],[230,[["กลาย",80160],[587,80160],[13,80160],["Eขึ้น",80160],[230,80160],[179,80160],[588,80160],[173,80160],["โมคลาน",80160],["ไทยบุรี",80160]]],[589,[["กรุงชิง",80160],["กะหรอ",80160],[589,80160],["Cเหรง",80160]]],[120,[[582,80220],[120,80220],["bแสน",80220]]],[590,[[590,80360],["Bนิคม",80360],["BvCว",80360],[241,80360]]],[591,[["ขCบนาก",80140],["Iกระบือ",80370],[592,80330],["ชะเมา",80330],["Eพยา",80140],["Dตะพง",80370],[304,80140],["Dศาลา",80370],["Bเพิง",80140],[83,80370],[591,80140],["rพนังฝั่งตะวันตก",80370],["rพนังฝั่งตะวันออก",80140],[101,80140],["Vระกำ",80370],["หูล่อง",80370],["Pทวด",80330],["แหลมตะลุมพุก",80140]]],["พรหมคีรี",[["ทอนหงส์",80320],["Cเรียง",80320],[564,80320],["พรหมโลก",80320],["อินคีรี",80320]]],["Wพรหม",[[593,80000],["ท้ายสำเภา",80000],["Cพรุ",80000],[594,80000]]],[595,[["กะทูน",80270],["ควนw",80270],[595,80270],["Uค้อม",80270],[462,80270]]],[596,[["ควนชุม",80130],["ควนพัง",80130],["ควนเกย",80130],[596,80130],["pตก",80350],[597,80350]]],[598,[["กำโลน",80230],[599,80230],["Eดี",80230],[598,80230],[276,80230]]],[600,[[601,80120],["Jปรัง",80120],["Jใส",80120],[600,80120],["สี่ขีด",80120],[85,80120],[299,80340],["เปลี่ยน",80120],["เสาเภา",80340]]],[291,[["ควนชะลิก",80170],[0,80170],["Eซอม",80170],["Dนบ",80170],["Bราม",80170],["รามb",80170],["หน้าสตน",80170],[291,80170],["Pเพชร",80170],["Sพังไกร",80170],["แหลม",80170]]],[561,[["Tตรอ",80290],["ทางพูน",80290],[63,80190],["เชียรS",80190]]],[602,[["การะเกด",80190],["EขCน",80190],["ท้องvเจียก",80190],[4,80190],[603,80190],["SWบาท",80190],[602,80190],["เสือหึง",80190],["Hเจ้าอยู่e",80190],["ไสหมาก",80190]]],["FนครOธรรมราช",[["กำแพงเซา",80280],["คลัง",80000],[425,80280],["Eซัก",80000],["EG",80000],[76,80000],["Eไร่",80000],[504,80280],["Cเคียน",80000],[51,80330],["rนคร",80000],["rพูน",80000],["มะkสองต้น",80000],["Yเสด็จ",80000],[181,80000],["ไชยมนตรี",80000]]]]],["นครสวรรค์",[[604,[[604,60150],["ปางสวรรค์",60150]]],[605,[[606,60120],[605,60120],["ทับกฤช",60250],["ทับกฤชใต้",60250],[78,60120],["Dเคียน",60120],["พันลาน",60250],["พิกุล",60120],["Aกระเจา",60120],["เกยไชย",60120],[607,60120],["hสิงห์",60120]]],[608,[[608,60190],["พุนกยูง",60190],["vพยนต์",60190],[609,60190],["Aพิกุล",60190],["อุดมธัญญา",60190],["Sชายธง",60190]]],[610,[["จันเสน",60260],["ช่องแค",60210],[610,60140],["พรหมนิมิต",60210],["ลาดทิพรส",60260],["สร้อยN",60210],["Aหม้อ",60140],[611,60140],["eหวาย",60140],["Lหอม",60210]]],[612,[[613,60160],[614,60160],[612,60160],["พนมรอก",60160],["พนมเศษ",60160],["Gมหากร",60160],[615,60160],["สายvโพง",60160],[176,60160],[169,60160]]],["บรรพตพิสัย",[[530,60180],["lขีด",60180],["lสัง",60180],[425,60180],["Dlหงาย",60180],[306,60180],["xปลาทู",60180],["Bแดน",60180],[616,60180],["Alงู",60180],["หูกวาง",60180],[180,60180],["เจริญผล",60180]]],["พยุหะคีรี",[["EQอ้อย",60130],["นิคมSgb",60130],["Qทรง",60130],["พยุหะ",60130],["kหัก",60130],["Uขาว",60130],["ย่านมัทรี",60130],["สระทะเล",60130],["Sกะลา",60130],[11,60130],[617,60130]]],[22,[[383,60150],["มาบแก",60150],[22,60150],["Gม้า",60150],["GF",60150],["ศาลเจ้าไก่ต่อ",60150],[179,60150],["สร้อยละคร",60150],["Aนมวัว",60150],[301,60150],["LQหอม",60150],["เนินขี้เหล็ก",60150]]],[103,[[81,60110],["ธารทหาร",60110],["Gg",60110],[618,60110],[103,60110],["Lถั่วo",60110],["Lถั่วใต้",60110],[619,60110],[313,60110]]],[620,[[621,60230],[622,60230],[623,60230],[620,60230],[9,60230]]],["Fนครสวรรค์",[["wแดด",60000],["ตะเคียนเลื่อน",60000],["นครสวรรค์ตก",60000],["นครสวรรค์ออก",60000],["DWc",60000],[624,60000],["xเสCท",60000],["Bมะเกลือ",60000],[625,60000],["rQโพ",60000],[626,60000],["วัดyย์",60000],[616,60240],["Aกระโดน",60240],[105,60000],["เกรียงไกร",60000],["แควM",60000]]],[627,[["Gซ่าน",60150],["Sชนกัน",60150],[627,60150],["Hเล่ย์",60150]]],[628,[[628,60150]]],[629,[[556,60170],["Dประมุง",60170],["Dมะฝ่อ",60170],["Ulล",60170],[294,60170],["หาดสูง",60170],["เนินกว้าว",60170],["เนินศาลา",60170],[629,60170]]],[630,[["ตะคร้อ",60220],["Cขอม",60220],["Gข่อย",60220],["GQลัด",60220],["สำโรงt",60220],["Kเดื่อ",60220],["Yประสาท",60220],[630,60220]]]]],["นนทบุรี",[[631,[[631,11130],["Dขนุน",11130],["Dขุนกอง",11130],["Dคูz",11130],["DสีN",11130],["ปลายD",11130],[476,11130],["วัดชลอ",11130],["ศาลาw",11130]]],[632,[["Dคูรัด",11110],[632,11110],["DรักพัฒC",11110],["DรักM",11110],["พิมลราช",11110],[633,11110],["vโพ",11110],["โสนลอย",11110]]],[634,[[624,11140],[474,11140],["DHCง",11140],[634,11140],[83,11140],["เสาธงp",11140]]],[635,[[636,11120],[637,11120],["Iเกลือ",11120],[638,11120],[288,11120],["Dตะไนย์",11120],[639,11120],[640,11120],[83,11120],[635,11120],["อ้อมเกร็ด",11120],["Pเกร็ด",11120]]],["Fนนทบุรี",[[641,11000],[460,11000],["Dกระสอ",11000],["Dกร่าง",11000],["Dรักf",11000],["DOF",11000],[40,11000],[43,11000],["สวนM",11000],["yม้า",11000]]],[642,[["ขุนO",11150],[52,11150],[29,11150],["ราษฎร์นิยม",11150],["Aเพรางาย",11150],[642,11150],["yM",11150]]]]],["นราธิวาส",[[643,[[643,96220],[644,96220],["ดุซงญอ",96220],["ผดุงมาตร",96220]]],["lกใบ",[["Cนาค",96110],["DขุนN",96110],[645,96110],["ศาลาu",96110],["Pสะท้อน",96110],["เจ๊ะเห",96110],["โฆษิต",96110],["ไพรวัน",96110]]],[646,[["กาเยาะมาตี",96170],[646,96170],["บาเระo",96170],["บาเระใต้",96170],["ปะลุกาสาเมาะ",96170],["ลุโบะสาวอ",96170]]],[647,[["จอเบาะ",96180],["ตะปอเยาะ",96180],[647,96180],[633,96180],["ลุโบะบายะ",96180],["ลุโบะบือซา",96180]]],["ระแงะ",[["กาลิซา",96130],["ตันหยงมัส",96130],["ตันหยงลิมอ",96130],["บองอ",96220],["บาโงสะโต",96130],["มะรือโบตก",96130],["เฉลิม",96130]]],[648,[["บาตง",96150],[648,96150],["รือเสาะออก",96150],["ลาโละ",96150],[138,96150],["สาวอ",96150],["สุวารี",96150],["เรียง",96150],["Kสะตอ",96150]]],[649,[[650,96210],["ซากอ",96210],["ตะมะยูง",96210],[651,96210],[649,96210],["เชิงคีรี",96210]]],[652,[[653,96190],["มาโมง",96190],["ร่มy",96190],[652,96190],["เกียร์",96190]]],[654,[["กาวะ",96140],["ปะลุรู",96140],["ริโก๋",96140],["สากอ",96140],[654,96140],["โต๊ะเด็ง",96140]]],[655,[["ปาเสมัส",96120],["ปูโยะ",96120],["มูโนะ",96120],[655,96120]]],["เจาะไอร้อง",[["จวบ",96130],["บูกิต",96130],["มะรือโบออก",96130]]],["Fนราธิวาส",[["กะลุวอ",96000],["กะลุวอo",96000],["DCค",96000],["Dปอ",96000],["มะนังlยอ",96000],[656,96000],[657,96000]]],[658,[["กายูคละ",96160],["ฆอเลาะ",96160],[659,96160],["Ha",96160],[658,96160],["โละจูด",96160]]]]],["น่าน",[[660,[["งอบ",55130],[660,55130],["ปอน",55130],["และ",55130]]],[661,[[662,55140],[663,55140],[661,55140],["Vคา",55140],["ผาตอ",55140],["ผาN",55140],["ยม",55140],["ริม",55140],[664,55140],["แสนN",55140]]],[665,[[665,55150],[583,55150],[205,55150],["Oษะเกษ",55150],[666,55150],["สันทะ",55150],[667,55150]]],["Cหมื่น",[["Cทะนุง",55180],[127,55180],["ปิงc",55180],["Fลี",55180]]],["gเกลือ",[["aพญา",55220],["gเกลือo",55220],["gเกลือใต้",55220],["ภูฟ้า",55220]]],[468,[["Bพี้",55190],["Bฟ้า",55190],["Vคาc",55190],["สวด",55190]]],[668,[[668,55120],["Vw",55120],["ภูคา",55120],["วรนคร",55120],["ศิลาเพชร",55120],["ศิลาแลง",55120],["สกาด",55120],[666,55120],["อวน",55120],["เจดีย์t",55120],["แงง",55120],["ไชยวัฒC",55120]]],["ภูเพียง",[["Eน้าว",55000],["Cปัง",55000],["Qเกี๋ยน",55000],["Qแก่น",55000],["ฝายb",55000],["kตึ๊ด",55000],["Fจัง",55000]]],[669,[[670,55160],["Cไร่c",55160],["ยอด",55160]]],[671,[["ดู่พงษ์",55210],["Vแลวc",55210],["พงษ์",55210]]],[561,[["ขุนน่าน",55130],["Lโก๋น",55130]]],[672,[["พญาb",55160],[447,55160],[673,55160],[672,55160],[674,55160],["เปือ",55160]]],["Fน่าน",[["กองควาย",55000],["ดู่ใต้",55000],["ถืมตอง",55000],["Cซาว",55000],[272,55000],["ผาสิงห์",55000],["สวก",55000],["สะเนียน",55000],["เรือง",55000],[675,55000],[676,55000]]],["zสา",[["wz",55110],["ขึ่ง",55110],["จอมจันทร์",55110],[663,55110],["JON",55110],["Cเหลือง",55110],["Qปั้ว",55110],["Qมวบ",55110],["ปงสนุก",55110],["ยาบeC",55110],["ส้าน",55110],["ส้านCAu",55110],["อ่ายCไลย",55110],["Hขะนิง",55110],[677,55110],["Hสาคร",55110],["ไหล่น่าน",55110]]],[678,[["Qปาย",55170],["Qพาง",55170],[236,55170],["หมอF",55170],[678,55170]]]]],[679,[[680,[[357,38220],["EดอกZ",38220],[680,38220],["Yหมากแข้ง",38220]]],[384,[[384,38000],["Aเดิ่น",38000],["Kกว้าง",38000]]],[681,[["Cกั้ง",38190],["Ca",38190],[681,38190],["สมสนุก",38190],["Aยอง",38190],[147,38190]]],[682,[[683,38180],[684,38180],[682,38180],[377,38180],[685,38180],[353,38180],[686,38180]]],[687,[["ชุมภูพร",38210],["Cสะแบง",38210],["Cสิงห์",38210],["Cแสง",38210],[687,38210]]],[688,[["ซาง",38150],["Eกกแa",38150],[689,38150],["Qจั้น",38150],["Bต้อง",38150],["ป่งไฮ",38150],[690,38150],[688,38150],["โสกก่าม",38150]]],["Fxกาฬ",[[691,38000],["tพร",38000],["Cสวรรค์",38000],[679,38000],["วิศิษฐ์",38000],["Rสว่าง",38000],["Aเลิง",38000],["หอZ",38000],[692,38000],[214,38000],["โป่งเปือย",38000],["ไคสี",38000]]],["โซ่พิสัย",[["Zb",38170],["ถ้ำเจริญ",38170],["Xตูม",38170],[685,38170],["Aพันทา",38170],["เหล่าN",38170],["โซ่",38170]]]]],["บุรีรัมย์",[[693,[[693,31160],[694,31160],[605,31160],["Bปรือ",31160],[695,31160],[664,31160],["สองชั้น",31160],[555,31160],["Aเต็ง",31160],[696,31160],[697,31160]]],[376,[[376,31190],["ตูมM",31190],["Bแพ",31190],["ปะเคียบ",31190],["พรสำราญ",31190],["Aขมาร",31190],[698,31190]]],[699,[[699,31110],["ช่อผกา",31110],["ละลวด",31110],["Aปล่อง",31110],[566,31110],["Kสนวน",31110]]],[700,[[265,31110],[605,31110],["ถนนหัก",31110],["ทรัพย์Wยา",31110],["JแสงN",31110],[700,31110],[701,31110],["vyโยง",31110],[702,31110],["Aกง",31110],["Aยายพิมพ์",31110],["Aโบสถ์",31110],[106,31110],[527,31110],[169,31110]]],[405,[["Tกอก",31230],[405,31230],["Bคู",31230],[703,31230],[704,31230]]],[705,[["จันทบเพชร",31180],["xเจริญ",31180],[705,31180],[706,31180],["สายตะกู",31180],["Aไม้n",31180],[707,31180],["Sดินo",31180],["Rเจริญ",31180]]],[708,[[708,31000],[706,31000],[709,31000],["Rขวาง",31000]]],["Buไชยพจน์",[["กู่สวนแตง",31120],[452,31120],["Aเยือง",31120],[141,31120],[262,31120]]],[710,[["จรเข้มาก",31140],["ตะโกlพิ",31140],[711,31140],[712,31140],[710,31140],["ปังกู",31140],["ละเวี้ย",31140],["สี่เหลี่ยม",31140],[49,31140],["Sคอก",31140],["แสลงโทน",31140],[713,31140],["Kมะขาม",31140],["Kม้า",31140],["Kย่าง",31140],[714,31140]]],[715,[[715,31220],[103,31220],["หูทำนบ",31220],["Kมะk",31220],[559,31220]]],["พลับพลาt",[["จันดุม",31250],["Vชัน",31250],[702,31250],[242,31250],[716,31250]]],[717,[["Bจาน",31120],[379,31120],[381,31120],["Bแวง",31120],[717,31120],["มะเฟือง",31120],[718,31120]]],[719,[["lจง",31170],[719,31170],["สำโรงu",31170],["Aตะครอง",31170],[141,31170],["Kว่าน",31170]]],[720,[["ตลาดY",31130],["ทะเมนt",31130],["บุY",31130],[379,31130],["ผyินทร์",31130],[720,31130],["Aกะทิง",31130],[370,31130],[362,31130],[363,31130],[520,31130],["Fแฝก",31130],[721,31130],[534,31130],[722,31130],[121,31130]]],[723,[[693,31150],[605,31150],["Tมนต์",31150],["JG",31150],[80,31150],[145,31150],[724,31150],[723,31150],[725,31150],["สะแก",31150],[152,31150],[726,31150]]],[727,[["Tอะราง",31210],["JกระlดพัฒC",31210],["Jกระเต็น",31210],["EYt",31210],["บุกระสัง",31210],[727,31210],[697,31210],["เย้ยปราสาท",31210],[498,31210],[252,31210]]],[584,[["สระN",31240],[179,31240],["AtO",31240],[728,31240],["Fฝ้าย",31240],["เสาเดียว",31240],[548,31240]]],[729,[["lเสา",31000],["Bตะโก",31000],["สนวน",31000],["qแวง",31000],[729,31000],["Lราชา",31000],["FY",31000],["Kเหล็ก",31000]]],[561,[["lเป๊ก",31110],["ถาวร",31170],["ยายแย้มวัฒC",31170],["อีสานเขต",31110],["เจริญสุข",31110]]],["Fบุรีรัมย์",[[693,31000],["กลันทา",31000],["ชุมเห็ด",31000],[730,31000],["XN",31000],[378,31000],[379,31000],["Wครู",31000],["ลุมปุ๊ก",31000],["สวายจีก",31000],[731,31000],["สะแกซำ",31000],["สะแกโพรง",31000],["Alด",31000],["หลักเขต",31000],["อิสาณ",31000],["Fฝาง",31000],[334,31000],[181,31000]]],[732,[["aพลอง",31150],[733,31150],[734,31150],[732,31150]]],[735,[["vCงรอง",31260],[360,31260],[735,31260]]],[736,[["aอีจาน",31110],["Jจังหัน",31110],["โกรกb",31110],[736,31110]]]]],["ปทุมธานี",[["Ic",[["Iสอง",12120],["Iq",12120],["Iสี่",12120],["Iหก",12120],["Iหนึ่ง",12120],["Iห้า",12120],["Iเจ็ด",12120]]],["ธัญบุรี",[[293,12110],["xยี่โถ",12130],["xสนั่น",12110],["ประชาธิปัตย์",12130],["รังสิต",12110],["vผักกูด",12110]]],[737,[[637,12140],["คูขวาง",12140],["คูDc",12140],["gเงิน",12140],[443,12140],[737,12140],[738,12140]]],[739,[["คูคต",12130],["xคอไห",12150],["xZพร้อย",12150],["xNหลาง",12150],["พืชอุดม",12150],["ลาดสวาย",12150],[739,12150],[740,12150]]],[741,[[742,12160],["Iควาย",12160],["ท้ายP",12160],[743,12160],[305,12160],["DYo",12160],["Bงิ้ว",12160],["Bปทุม",12160],[741,12160],[744,12160],["เชียงรากM",12160]]],["Aเสือ",[["นพรัตน์",12170],["xกาq",12170],["xชำอ้อ",12170],[745,12170],["xบา",12170],["ศาลาครุ",12170],["AqG",12170]]],["Fปทุมธานี",[["Dกะดี",12000],["Dขะแยง",12000],["Dคูวัด",12000],["Dปรอก",12000],[640,12000],["Dพูน",12000],[342,12000],[746,12000],["Bกระแชง",12000],[4,12000],[747,12000],[83,12000],["สวนพริกไทย",12000],["หลักหก",12000]]]]],[748,[[749,[[749,77150],["กุยo",77150],["Tยายหนู",77150],["qกระทาย",77150],["หาดขาม",77150],[750,77150]]],[751,[[751,77130],["Cหูกวาง",77130],[191,77130],[180,77130],["Sล้าน",77130],["แสงอรุณ",77130]]],[752,[["กำเนิดนพคุณ",77140],["tเกษม",77190],["Nมงคล",77230],[753,77190],["พงศ์ประศาสน์",77140],[724,77230],["Hรำพึง",77140]]],["Dสะพานf",[["dแรก",77170],[155,77170],[752,77170],[101,77170],["ไชยราช",77170]]],[754,[[754,77120],[754,77160],["rQปราณ",77220],["Gก์พง",77120],["Gก์พง",77160],["Alแต้ม",77120],["Alแต้ม",77160],["Sจ้าว",77120],["Sจ้าว",77160],[85,77120],[85,77160]]],[755,[["ศาลาลัย",77180],["ศิลาลอย",77180],[755,77120],[755,77160],["ไร่เก่า",77180],["ไร่u",77180]]],[156,[["ทับใต้",77110],[756,77110],[757,77110],[758,77110],[156,77110],[698,77110],["Lสัตว์M",77110]]],["Fประจวบคีรีขันธ์",[["Iวาฬ",77000],["gนอก",77210],[748,77000],[759,77000],["อ่าวf",77210],["Pหลัก",77000]]]]],["ปราจีนบุรี",[["กบินทร์บุรี",[["กบินทร์",25110],["นนทรี",25110],[760,25110],[316,25110],[413,25110],[438,25110],["ลาดตะเคียน",25110],["Gดาล",25110],[307,25110],["GEd",25110],[727,25110],["หาดCงb",25110],[314,25110],[261,25240]]],[131,[[577,25220],[131,25220],["บุพราหมณ์",25220],[345,25220],["สำพันl",25220],["แก่งดินสอ",25220]]],[761,[["กระทุ่มแพ้ว",25150],[472,25150],[762,25150],["Dปลาร้า",25150],["Dพลวง",25150],[763,25150],[305,25150],["Dแตน",25150],[761,25150]]],[764,[["Zโตนด",25130],[357,25130],["บุฝ้าย",25130],["Bหอย",25130],[764,25130],[765,25130],[455,25130],[325,25130],["Yn",25130]]],[766,[["กรอกสมบูรณ์",25140],["aกระทงยาม",25140],[767,25140],[426,25140],["Bทาม",25140],[766,25140],["สัมพันธ์",25140],["Aโพรง",25140],["eหว้า",25140],["หาดU",25140]]],["Oมโหสถ",[["คู้vพัน",25190],["Kปีบ",25190],[539,25190],["hชะเลือด",25190]]],["Fปราจีนบุรี",[["aขี้เหล็ก",25000],["aWราม",25000],[768,25000],["Dบริบูรณ์",25000],["Dเดชะ",25000],["BW",25230],[386,25000],[323,25000],[308,25000],["เนินหอม",25230],["Kไม้ลาย",25230],["Rห้อม",25000],["ไม้เค็ด",25230]]]]],["ปัตlนี",[["กะพ้อ",[["กะรุบี",94230],["ตะโละดือรามัน",94230],["ปล่องหอย",94230]]],["JUแa",[["ตะโละแมะC",94140],["Qดำ",94140],["rู",94140],["พิเทน",94140]]],[769,[["ควน",94190],[770,94130],[536,94190],[32,94130],["EQ",94130],[4,94130],["Bนอก",94130],["BQg",94130],[769,94130],["พ่อมิ่ง",94130]]],[771,[["กระหวะ",94190],["กระเสาะ",94140],[414,94140],["ถนน",94140],["ปะโด",94140],["ปานัน",94140],[771,94140],["ลางา",94190],["ลุโบะยิไร",94140],["สะกำ",94140],["สาคอบน",94140],["สาคอใต้",94140],["Pจัน",94140]]],[772,[["กระโด",94160],["กอv",94160],[478,94160],["ประจัน",94160],["ปิตูมุดี",94160],[772,94160],["ระแว้ง",94160],["วัด",94160],["สะดาวา",94160],["สะนอ",94160],["Sตูม",94160],["เมาะมาวี",94160]]],["ยะหริ่ง",[["จะรัง",94150],["ตอหลัง",94150],["ตะโละ",94150],["ตะโละกาโปร์",94150],["ตันหยงจึงงา",94190],["ตันหยงดาลอ",94150],["lลีอายร์",94150],["lแกะ",94150],[773,94150],["บาโลย",94190],["ปิยามุมัง",94150],["ปุลากง",94150],["มะนังยง",94150],["ยามู",94150],["ราlปันยัง",94150],["สาบัน",94150],["Aแรต",94150],["แหลมY",94150]]],["สายบุรี",[["กะดุนง",94110],["ตะบิ้ง",94110],["ตะลุบัน",94110],["Jคล้า",94190],[774,94110],["บือเระ",94110],["ปะเสยะวอ",94110],["มะนังดาv",94110],[633,94110],["เตราะบอน",94110],["แป้น",94110]]],[775,[["คอลอตันหยง",94170],["Tรัก",94170],["ดาโต๊ะ",94170],["ตุยง",94170],["Eกำชำ",94170],["Dlวา",94170],["DS",94170],[316,94170],["ปุโละปุโย",94170],["ยาบี",94170],["ลิปะสะโง",94170],["Pเปาะ",94170]]],["Fปัตlนี",[["กะมิยอ",94000],["Iมานิง",94000],["จะบังติกอ",94000],["ตะลุโบะ",94000],["ตันหยงลุโละ",94000],["บาC",94000],["บาราเฮาะ",94000],["บาราโหม",94000],["ปะกาฮะรัง",94000],["ปุยุด",94000],["รูสะมิแล",94000],["สะบารัง",94000],["อาเCะรู",94000]]],[776,[[777,94180],[778,94180],[776,94180]]],[779,[["ควนโนรี",94180],["dให้ตก",94120],[0,94120],["Jพลา",94180],[76,94120],["Cประดู่",94180],["Cเกตุ",94120],["Dโกระ",94120],["rล่อ",94180],[780,94120],["มะกรูด",94120],[779,94120]]],[781,[[297,94220],["ตะโละไกรN",94220],[782,94220],[781,94220]]]]],[783,[[76,[["จำปา",13130],[279,18270],["Eเจ้าสนุก",13130],[76,13130],["Bร่อม",13130],["rE",13130],[784,13130],["ศาลาลอย",13130],["AขCก",13130],["Yเอน",13130]]],[785,[["Iสะแก",13260],[284,13260],[785,13260],["DWครู",13260],[473,13260],["gโพง",13260],["Bชุ้ง",13260],[786,13260],[626,13260],["qไถ",13260],[105,13260],[787,13260]]],[788,[[788,13270],["ปลายกลัด",13270],["GพัฒC",13270],["เต่าเล่า",13270],["เทพมงคล",13270],["bฟ้า",13270]]],[789,[["กบเจา",13250],["ทางd",13250],[790,13250],["Dชะนี",13250],[789,13250],[342,13250],["Dcโดด",13250],[324,13250],[791,13250],["Bคลัง",13250],["Wขาว",13250],["มหาพราหมณ์",13250],["วัดตะกู",13250],[792,13250],["สะพานไทย",13250],[642,13250]]],[793,[["ขยาย",13220],[794,13220],["lนิม",13220],["lลเอน",13220],["ทับQ",13220],["ทางw",13220],["DCงร้า",13220],[793,13220],[746,13220],["Dเพลิง",13220],["Bขล้อ",13220],[795,13220],["Bลี่",13220],["พุทเลา",13220],["หันสัง",13220],[597,13220],["Yqต้น",13220]]],["Dปะอิน",[["ขนอนc",13160],["Iจิก",13160],["คุ้งลาน",13160],["ตลาดเกรียบ",13160],[13,13160],["Dกระสั้น",13160],["Dประแa",13160],["Bกรด",13160],["Bพลับ",13160],[761,13170],[258,13160],["Bเลน",13160],[796,13160],["Bโพ",13160],[792,13160],[797,13160],["Pเกิด",13160],[744,13180]]],[798,[["กกbบูรพา",13190],[742,13190],["ช่างเหล็ก",13190],["df",13190],["dM",13290],[799,13190],["Dยี่โท",13190],[798,13190],["Bกลึง",13190],[795,13190],[564,13190],[796,13190],["ราชคราม",13290],[725,13190],[738,13190],["ห่อหมก",13190],[744,13290],["แคตก",13190],["แคออก",13190],[800,13190],["โพแตง",13290],["hW",13190],["ไม้ตรา",13190]]],[801,[[592,13240],[801,13240],[83,13240],[731,13240],[574,13240]]],[802,[["กุฎี",13120],[517,13280],["Tลาน",13280],["lลาน",13120],["Eดินแa",13120],[126,13280],["Bแค",13120],[461,13120],[802,13120],["ลาดชิด",13120],["ลาดQเค็ม",13120],["vตะเคียน",13280],["AQM",13280],["หน้าK",13120],["อมฤต",13120],[800,13120]]],[783,[["กะมัง",13000],["Iตะเคียน",13000],["IสระX",13000],["Iสวนพลู",13000],["Eวาสุกรี",13000],[803,13000],["Bรุน",13000],[564,13000],[83,13000],["ประตูt",13000],["rกราน",13000],[653,13000],["ลุมพลี",13000],["วัดตูม",13000],["สวนพริก",13000],["สำเภาล่ม",13000],["หอรัตนไชย",13000],["หันตรา",13000],[804,13000],["Pเรียน",13000],["hลิง",13000]]],[805,[["กระจิว",13140],[683,13140],[806,13140],[805,13140],["ระโสม",13140],[216,13140],[807,13140],[495,13140]]],[808,[["กะทุ่ม",13150],["Eตอ",13150],[790,13150],[35,13150],["Bขวาง",13150],[413,13150],[83,13150],["พิตเพียน",13150],[808,13150],[809,13150],["เจ้าปลุก",13150],[810,13150]]],[811,[["IWยาบันลือ",13230],["คู้สลอด",13230],["Wยาบันลือ",13230],[811,13230],[554,13230],["สิงหCท",13230],["หลักt",13230]]],[812,[["ข้าวn",13170],["ชะแมบ",13170],["glโล่",13170],["พยอม",13170],["vlเสา",13170],[740,13170],["Gจุฬา",13170],[812,13170],["สนับทึบ",13170],["หันตะเภา",13170]]],[813,[["ข้าวเม่า",13210],["คานหาม",13210],["ธนู",13210],[321,13210],["Bหีบ",13210],["qบัณฑิต",13210],["AQส้ม",13210],["Aไม้ซุง",13210],[813,13210],[814,13210],["โพสาวหาญ",13210]]],[814,[["ชายC",13110],[815,13110],["Dนมโค",13110],["Bกระทุ่ม",13110],[468,13110],["Bแถว",13110],["Bแพน",13110],[296,13110],["มารวิt",13110],["รางจรเข้",13110],["ลาaา",13110],["qกอ",13110],["qตุ่ม",13110],[816,13110],["เจ้าเจ็ด",13110],["เจ้าเสด็จ",13110],[814,13110]]]]],["พะเยา",[[817,[[817,56150],[818,56150],["Wธาตุขิงแกง",56150],["ลอ",56150],["หงส์p",56150],["Lข้าวก่ำ",56150],["LUขาม",56150]]],[819,[["คือz",56120],["aสุวรรณ",56120],[819,56120],["TOชุม",56120],["บุญเกิด",56120],["Bถ้ำ",56120],[820,56120],[821,56120],[822,56120],["สันโค้ง",56120],[823,56120],["Lลาน",56120]]],[824,[["ขุนควร",56140],["ควร",56140],["งิม",56140],["Cปรัง",56140],[824,56140],["ผาdf",56140],["ออย",56140]]],["ภูกามยาว",[["aเจน",56000],[825,56000],["Hอิง",56000]]],[826,[["Jกล้วย",56110],[827,56110],[826,56110],["สบบง",56110],["เชียงแรง",56110]]],["เชียงZ",[["Jผาสุข",56110],["Qแวน",56110],["ฝายกวาง",56110],["ร่มเย็น",56110],["หย่วน",56110],[180,56110],["เจดีย์Z",56110],["เชียงบาน",56110],[828,56110],[829,56110]]],[830,[["Bมาง",56160],["สระ",56160],[830,56160]]],["Fพะเยา",[["จำVหวาย",56000],["Eจำปี",56000],["EGN",56000],["Bตุ่น",56000],["Bต๊ำ",56000],["Bต๋อม",56000],["Bสาง",56000],[83,56000],["สันVk",56000],[828,56000],["Hกา",56000],[831,56000],["HCเรือ",56000],["Hปืม",56000],["Hใส",56000]]],[832,[[209,56130],[684,56130],[833,56130],["เจริญราษฎร์",56130],[834,56130],[832,56130]]]]],["พังงา",[[835,[[835,82170],["EC",82170],["รมณีย์",82170],["เหมาะ",82170],["เหล",82170]]],["คุระบุรี",[["คุระ",82150],["Dวัน",82150],["PWN",82150],["HCงขาว",82150]]],["ตะกั่วJ",[["กระโสม",82130],["กะไหล",82130],["Iเคียน",82130],["ถ้ำ",82130],["Eอยู่",82130],["หล่อยูง",82140],["Kกลอย",82140]]],[240,[["คึกคัก",82220],[240,82110],["ตำตัว",82110],["DCยสี",82110],[624,82190],[798,82110],["PคอS",82190],[657,82110]]],[836,[["ถ้ำNหลาง",82180],[836,82180],[837,82180],["gแสน",82180],["มะรุ่ย",82180],[838,82180]]],[839,[["Jมะพร้าว",82120],[839,82120],["Cเตย",82120],["DN",82120],["vภี",82120],["vแก่น",82210]]],["Pยาว",[["พรุใน",83000],["Pยาวf",82160],["PยาวM",82160]]],["Fพังงา",[[409,82000],["ถ้ำQผุด",82000],["Jคาโงก",82000],["ท้ายd",82000],["นบปริง",82000],[305,82000],["Vกอ",82000],[840,82000],["Pปันหยี",82000]]]]],["พัทลุง",[[841,[[841,93180],["Iiขาว",93180],["Iเฉลิม",93180],["ชะรัด",93000],["สมหG",93000]]],[842,[[842,93110],["ชะมวง",93110],[297,93110],["ทะเลf",93150],["Cขยาด",93110],["ปันแต",93110],["พนมGก์",93110],["พCงตุง",93150],["มะกอกo",93150],["แพรกหา",93110],["แหลมโตนด",93110],["โตนดด้วน",93110]]],[843,[[286,93160],[843,93160],["Hขรี",93160]]],[306,[["Eมะเดื่อ",93140],["Cปะขอ",93140],["Kสัก",93140]]],[844,[[297,93120],["Tประดู่",93120],[844,93120],["ฝาละมี",93120],["หารเทา",93120],["PCงZ",93120],[430,93120]]],[780,[["JCรี",93170],[780,93170],[46,93170],["Aธง",93170],["Ki",93170]]],[845,[[453,93210],[845,93210],["ลานข่อย",93210],[846,93210]]],["Oนครินทร์",[[458,93000],[413,93000],["vสินธุ์",93000],[180,93000]]],[651,[["ตะแพน",93190],["Sปู่",93190],["Sย่า",93190]]],[847,[[842,93130],["จองถนน",93130],["หานY",93130],[847,93130],[807,93130]]],["Fพัทลุง",[["ควนมะพร้าว",93000],[53,93000],[848,93000],["ตำCน",93000],["Eมิหรำ",93000],[849,93000],["Cท่อม",93000],["Cโหนด",93000],["ปรางหมู่",93000],["พญาขัน",93000],["ร่มF",93000],["vปำ",93000],["Sเจียก",93000],["Kชะงาย",93000]]]]],[850,[[851,[["Gงิ้ว",66210],["Gงิ้วใต้",66210],["สำนักขุนเณร",66210],["Lพุก",66210],[619,66210]]],[852,[["Iคูณ",66110],[471,66110],["aตะขบ",66110],[852,66110],["ทับหมัน",66110],[577,66150],[853,66110],["Gหลุม",66150],[854,66110],["Aพยอม",66110],["Lเกตุ",66110],["yโรงโขน",66110],["hc",66110]]],[855,[[855,66150],["ท้ายJ",66150],["Si",66230],["Sเจ็ดลูก",66230]]],[856,[[856,66120],[43,66120],["ภูมิ",66120],["vประดา",66120],["Gกรด",66120],[483,66210],[853,66120],["หอไกร",66120],["Lเขน",66120],[617,66120]]],[857,[["Dลาย",66130],[857,66130],[825,66130],["แหลมรัง",66130],["Yyn",66130]]],["วชิรบารมี",[["xX",66140],[413,66140],["Gโมกข์",66140],["Aหลุม",66220]]],[858,[[858,66180],[96,66180],["Aปล้อง",66180],[859,66180]]],[860,[[861,66160],[570,66160],["Gทับy",66160],[860,66160],["Aหญ้าy",66160]]],[469,[["กำแพงดิน",66220],["รังนก",66140],[469,66140],[106,66140],["เนินปอ",66140]]],["Fพิจิตร",[["Iคะเชนทร์",66000],[606,66000],[356,66170],["aVZ",66170],[279,66000],["Eฬ่อ",66000],["Bบุ่ง",66000],["rทาง",66000],["Vมะคาบ",66000],[862,66000],["สายZโห้",66000],[623,66170],[261,66000],[810,66000],[181,66000],[863,66000]]],[864,[["ทะนง",66130],[482,66130],["Eขมิ้น",66130],["Eนั่ง",66130],["EX",66130],[77,66130],["ท้ายQ",66130],["Dคลาน",66130],["Bf",66130],["วัดขวาง",66130],[864,66130]]],[865,[["aเสือเหลือง",66190],[585,66190],["Gจิก",66190],["เนินสว่าง",66190],[865,66190],["hEโพ",66190],["hรอบ",66190]]]]],["พิษณุโลก",[[866,[[866,65170],["Eสะแก",65170],["gภาค",65170],[251,65170],[867,65170],["สวนเมี่ยง",65170]]],[868,[[177,65120],[868,65120],[869,65120],["Qกุ่ม",65120],["gY",65120],[453,65120],["Bแยง",65120],["Uโกลน",65120],["Aกะท้าว",65120],["Lเฮี้ย",65120],["เนินเพิ่ม",65120]]],[870,[["Elล",65110],["นครVหมาก",65110],[870,65110],[383,65110],["วัดlยม",65210],[871,65110],["เนินกุ่ม",65210],[872,65110],[495,65110]]],[473,[["คุยk",65240],["ชุมแสงสงคราม",65240],["ECงn",65140],[873,65140],[473,65140],["xกอก",65140],[316,65140],["ปลักแรด",65140],["พันเสา",65140],["Gอิทก",65140],["Aกุลา",65140]]],[874,[["aประZ",65180],["ตลุกเทียม",65180],["ทับยายเชียง",65150],[284,65150],[874,65150],["มะตูม",65150],["มะต้อง",65180],["วงฆ้อง",65180],[417,65150],["Oภิรมย์",65180],[70,65150],["หอกลอง",65150]]],[178,[["tCม",65130],["ดินN",65130],["Eหมื่นราม",65130],[4,65220],["พันชาลี",65130],[178,65130],["Gนกแอ่น",65130],[875,65130],[859,65130],["แก่งโสภา",65220],["Hระกา",65130]]],[323,[["คันโช้ง",65160],[768,65160],["ท้อแท้",65160],[379,65160],[323,65160],[707,65160]]],[876,[[877,65190],["Bfซุ้มขี้เหล็ก",65190],["Bมุง",65190],[167,65190],["Gโพรง",65190],[876,65190],[878,65190]]],["Fพิษณุโลก",[[879,65230],[23,65000],[815,65000],[880,65000],[881,65000],["xW",65000],[882,65000],["BI",65000],[883,65000],["rโทก",65000],["พลายชุมพล",65000],["มะขามสูง",65000],["GQคู้",65230],[884,65000],["วัดพริก",65230],["สมอแข",65000],[804,65000],["อรัญญิก",65000],[181,65000],["hขอT",65000]]]]],["ภูเก็ต",[[885,[["กมลา",83120],[885,83120],["Vตอง",83150]]],["ถลาง",[["Vคลอก",83110],["Oสุนทร",83110],[886,83110],["เชิงทะเล",83110],["เทพกระษัตรี",83110],["ไม้ขาว",83110]]],["Fภูเก็ต",[["กะรน",83100],[601,83000],[601,83130],["ตลาดo",83000],[887,83000],[422,83000],["ราไวย์",83100],["ราไวย์",83130],["วิชิต",83000],[888,83000]]]]],["มหาสารคาม",[["กันทรวิt",[["mใส้จ่อ",44150],["ขามเฒ่าพัฒC",44150],["ขามเรียง",44150],["คันธารราษฎร์",44150],["EขอนU",44150],[889,44150],[571,44150],[235,44150],["เขวาM",44150],["KW",44150]]],[890,[[890,44130],[405,44130],[141,44130],[201,44130],["เลิงแฝก",44130]]],[891,[[892,44160],[891,44160],[161,44160],["เหล่าดอกไม้",44160]]],[893,[["กู่สันตรัตน์",44180],["aดวน",44180],[357,44180],["aU",44180],[893,44180],[447,44180],[370,44180],[73,44180],[623,44180]]],[132,[[132,44170],["ปอพาน",44170],[894,44170],[242,44170],[161,44170],[243,44170],[245,44170],[236,44170],[499,44170],[895,44170]]],[896,[["กำพี้",44130],["Tงัว",44130],[896,44130],["Xมาศ",44130],["gM",44130],[897,44130],[46,44130],["Gไชย",44130],["Aคูขาด",44130],[775,44130],[898,44130],[899,44130],[189,44130],["Rราษี",44130],[270,44130]]],["พยัคฆภูมิพิสัย",[["ก้ามปู",44110],["Cสีนวล",44110],["ปะหลาน",44110],["ภารแอ่น",44110],["ราษฎร์พัฒC",44110],["ราษฎร์เจริญ",44110],["ลานสะแก",44110],[103,44110],["AXb",44110],["Fเl",44110],["Fเสือ",44110],["เม็กดำ",44110],[900,44110],["zสะอาด",44110]]],[901,[["ขามเรียน",44210],["aF",44210],["Cภู",44210],["Bกู่",44210],[901,44210],["AXสันตุ",44210],["แวงa",44210]]],["วาปีปทุม",[[220,44120],["งัวบา",44120],[544,44120],[231,44120],[902,44120],["ประชาพัฒC",44120],[690,44120],[455,44120],["Aแสน",44120],[903,44120],[904,44120],["เสือโก้ก",44120],[905,44120],["KสีNหลาง",44120],[906,44120]]],[907,[["กู่N",44160],["Tเงิน",44160],["CN",44160],["Aซอน",44160],[907,44160],["เสือเฒ่า",44160],["เหล่าXบาน",44160],[163,44160]]],["Fมหาสารคาม",[["Tหว่าน",44000],[283,44000],[767,44000],["Eสองคอน",44000],["Xค้อ",44000],["ลาดพัฒC",44000],[105,44000],[190,44000],["Lแอ่ง",44000],["เกิ้ง",44000],["เขวา",44000],["แก่งเลิงจาน",44000],["แวงน่าง",44000],["Kก่อ",44000]]],[908,[[551,44190],[195,44190],[161,44190],[908,44190],["Rภิบาล",44190]]],["โกสุมพิสัย",[["Tw",44140],["UEแจ้ง",44140],["Uf",44140],[909,44140],["Aกุงสวรรค์",44140],[49,44140],[103,44140],[910,44140],["eขวาง",44140],[895,44140],["เขื่อน",44140],["เลิงใต้",44140],[911,44140],["แก้งแก",44140],["แพง",44140],["แห่ใต้",44140],[114,44140]]]]],[912,[[913,[[913,49110],["Zบก",49110],["Qเที่ยง",49110],[257,49110],["Bซ่ง",49110],[209,49110],["Aเอี่ยน",49110],["เหล่าสร้างถ่อ",49110],[114,49110]]],[914,[["กกตูม",49140],["ชะโนดf",49140],[914,49140],["พังแa",49140],[103,49140],[915,49140]]],[916,[[916,49120],["Cสะเม็ง",49120],[917,49120],[373,49120],[777,49120],["เหล่าหมี",49120],[918,49120]]],[919,[["กกแa",49130],[920,49130],[921,49130],[919,49130],["ร่มเกล้า",49130],[141,49130],[569,49130]]],[922,[[381,49160],["ภูวง",49160],[922,49160],["Aสูงo",49160],["Aสูงใต้",49160],["RU",49160]]],[923,[["ชะโนด",49150],["aหมู",49150],["Dif",49150],["ป่งขาม",49150],[923,49150]]],["Fมุกดาหาร",[["mแข้",49000],["ZVหลาย",49000],["Zอาฮวน",49000],["aมอน",49000],[924,49000],[889,49000],["Cโสก",49000],["DiM",49000],[238,49000],["ผึ่งแดด",49000],[912,49000],[196,49000],[925,49000]]]]],[926,[[927,[[927,95000],["ปุโรง",95000],["สะเอะ",95000],["Lกระทิง",95000]]],[928,[[928,95120],["บาละ",95120]]],[929,[["คีรีเขต",95150],[929,95150],["Bแหร",95150],["Hหวาด",95170]]],[930,[[13,95130],["lเCะปูเต๊ะ",95130],["ถ้ำทะลุ",95130],[930,95130],[646,95130],["เขื่อนDลาง",95130]]],[931,[["กาตอง",95120],["lชี",95120],["บาโงยซิแน",95120],["บาโร๊ะ",95120],["ปะแต",95120],[931,95120],["ละแอ",95120]]],["รามัน",[["กอตอตือร๊ะ",95140],["กายูบอP",95140],["กาลอ",95140],["กาลูปัง",95140],["จะกว๊ะ",95140],["ตะโล๊ะหะลอ",95140],["Eธง",95140],["บาลอ",95140],["บาโงย",95140],["บือมัง",95140],["ยะต๊ะ",95140],["Gพญา",95140],["อาซ่อง",95140],["เกะรอ",95140],["เนินn",95140],["โกlบารู",95140]]],[932,[["lเCะแมเราะ",95110],["ธารQทิพย์",95110],["ยะรม",95110],["อัยเยอร์เวง",95110],[932,95110]]],["Fยะลา",[["lเซะ",95000],["Eสาป",95000],["บันนังสาเรง",95000],["บุดี",95000],[645,95160],[926,95000],["ยุโป",95000],["vพะยา",95160],["vu",95160],["ลิดล",95160],["สะเตง",95000],["สะเตงนอก",95000],["หน้าถ้ำ",95000],["เปาะเส้ง",95000]]]]],["ยโสธร",[[933,[["กำแมด",35140],[933,35140],["ZQสร้าง",35140],["Cโส่",35140],[934,35140],[302,35140],["Lแก้ง",35140],["Rเปือย",35140],[114,35140]]],[935,[["mกุง",35110],["กู่จาน",35110],[851,35110],["aแคนM",35180],[936,35110],[250,35180],[492,35180],["ย่อ",35110],["ลุมพุก",35110],[229,35110],["เหล่าไฮ",35110],["แคนf",35180],["sทัน",35110]]],[937,[[203,35160],[937,35160],[187,35160],["ฟ้าห่วน",35160]]],[204,[[938,35170],["ดู่ลาด",35170],[204,35170],[939,35170],[164,35170]]],["Vติ้ว",[["กระจาย",35150],[940,35150],[941,35150],["KCโก",35150],[918,35150]]],["มหาชนะt",[[376,35130],["บากเรือ",35130],["xแก",35130],["ผือฮี",35130],["Wเสาร์",35130],["ฟ้าหยาด",35130],[942,35130],[943,35130],[944,35130],["Ri",35130]]],["Fยโสธร",[["ขั้นไดM",35000],["ขุมเงิน",35000],["ค้อo",35000],["ดู่J",35000],[945,35000],["JCงโอก",35000],["Jแต้",35000],["Cสะไมย์",35000],["QZM",35000],[148,35000],[110,35000],[370,35000],[151,35000],[94,35000],[245,35000],["เขื่องZ",35000],["เดิด",35000],[181,35000]]],["เลิงนกทา",[["mเชียงหมี",35120],[946,35120],["บุ่งค้า",35120],[947,35120],["สร้างมิ่ง",35120],["สวาท",35120],[138,35120],[948,35120],["ห้องแซง",35120],[213,35120]]],[559,[[502,35120],["Zh",35120],[949,35120],["ส้มผ่อ",35120],[559,35120]]]]],["ระนอง",[["กระบุรี",[["จ.ป.ร.",85110],["Qจืด",85110],["Qจืดf",85110],[634,85110],[786,85110],["มะมุ",85110],["vเลียง",85110]]],[950,[[950,85120],["Dp",85120],[413,85120],["kกลวง",85120],["เชี่ยวเหลียง",85120]]],["ละอุ่น",[["DWo",85130],["DWใต้",85130],[306,85130],["ละอุ่นo",85130],["ละอุ่นใต้",85130],["ในวงo",85130],["ในวงใต้",85130]]],[609,[["กำพวน",85120],["Cคา",85120]]],["Fระนอง",[["iแa",85130],["Dนอน",85000],["Dริ้น",85000],[10,85000],["ราชกรูด",85000],[951,85000],["หาดส้มแป้น",85000],["Pพยาม",85000],["Sนิเวศน์",85000]]]]],["ระยอง",[[873,[[873,21180],["พCนิคม",21180],["มะขามคู่",21180],["มาบข่า",21180]]],[385,[["ชากบก",21120],["lขัน",21120],["Dบุตร",21120],[385,21120],["Aตะพาน",21120],[103,21120],["Aละลอก",21120]]],[747,[[747,21130],["พลา",21130],["สำนักท้อน",21130]]],[952,[["lสิทธิ์",21140],[952,21140],["มาบUพร",21140],[633,21140],["Aไร่",21140],["HQคู้",21140]]],[439,[[605,21210],["Vยุบใน",21210],["พลงlเอี่ยม",21210],[439,21210]]],["Sชะเมา",[["ชำฆ้อ",21110],["Qเป็น",21110],["Lทับมอญ",21110],[85,21110]]],["Fระยอง",[["กะเฉด",21100],["ตะพง",21000],["ทับมา",21000],[953,21000],["Clขวัญ",21000],["Qคอก",21000],[954,21000],[10,21000],["มาบlพุด",21150],["สำนักN",21100],[955,21150],["เชิงเนิน",21000],["เนินW",21000],["เนินW",21150],["เพ",21160],[956,21160]]],[956,[["กระแสบน",21110],["กร่ำ",21190],["กองดิน",22160],["Iปูน",21170],["ชากพง",21190],["ชากโดน",21110],["ทางเกวียน",21110],["Jควายกิน",21110],[413,21110],["rQกระแส",21170],["พังราด",21170],[854,21110],["สองสลึง",21110],[191,21110],["เนินฆ้อ",21110]]]]],["ราชบุรี",[[957,[[957,70150],["ด่านทับตะโก",70150],[540,70150],["รางX",70150],[958,70150],["แก้มอ้น",70150]]],[959,[["ขุนพิทักษ์",70130],["Tกรวย",70130],["Tคลัง",70130],["Th",70130],[959,70130],["lc",70130],["Eนัด",70130],[960,70210],[383,70130],["ประสาทสิทธิ์",70210],["Oสุราษฎร์",70130],["สี่หมื่น",70130],["แพงพวย",70130]]],[961,[[613,70160],[514,70160],[961,70160],[102,70160],["วัดb",70160],["eโพ",70160],["โพหัก",70160]]],[962,[[962,70180],[318,70180],["Aพันจันทร์",70180]]],[963,[["กรับM",70190],["คุ้งพยอม",70110],[964,70110],[965,70110],["นครชุมน์",70110],[966,70110],[963,70110],["rแรต",70110],[552,70110],[967,70110],[968,70110],[269,70110],[969,70110],["Sขลุง",70110],[958,70110]]],[970,[[297,70140],[400,70140],["gกระดาน",70140],[970,70140],["Vไก่",70140],["Uหัก",70140],["GมะCว",70140],["วัดUn",70140],["วันดาว",70140],[466,70140],["LUโทน",70140],["อ่างp",70140]]],[971,[["จอมประทัด",70170],[971,70170],["PศาลW",70170]]],[972,[["ตะCวO",70180],[973,70180],["Vหวาย",70180],[972,70180]]],["Fราชบุรี",[["คุ้งกระถิน",70000],["คุ้งQวน",70000],["คูX",70000],[587,70000],["Tแร่",70000],[974,70000],[975,70000],["DV",70000],[383,70000],["พงสวาย",70000],[976,70000],[797,70000],["AwC",70000],[308,70000],["หลุมดิน",70000],[977,70000],[978,70000],[180,70000],["Pพลับพลา",70000],["Sแร้ง",70000],["เจดีย์หัก",70000],[607,70000]]],[979,[[636,70120],["Ilคต",70120],["ชำแระ",70120],[964,70120],[297,70120],["Eชุมพล",70120],["ธรรมเสน",70120],["Cงb",70120],["Dโตนด",70120],["Bฆ้อง",70120],[701,70120],["Bเลือก",70120],["สร้อยฟ้า",70120],["Aกวาง",70120],[611,70120],["Sชะงุ้ม",70120],["เจ็ดเสมียน",70120],[980,70120],[979,70120]]]]],["ร้อยเอ็ด",[["จตุรพักตรพิมาน",[[356,45180],["aj",45180],["ดู่f",45180],["Qใส",45180],["Vสังข์",45180],[981,45180],["Oโคตร",45180],[159,45180],[982,45180],["อีง่อง",45180],["Fหงส์",45180],[722,45180]]],[983,[[983,45000],["aสิงห์",45000],[226,45000],["ปาฝา",45000],["ผักแว่น",45000],["kลาด",45000],[984,45000],["แสนชาติ",45000]]],[985,[[985,45170],[986,45170],["มะบ้า",45170],[987,45170],[911,45170]]],[988,[["ธงธานี",45170],[988,45170],["นิเวศน์",45170],[756,45170],["มะอึ",45170],["ราชธานี",45170],[989,45170],[73,45170],["อุ่มเม้า",45170],["เขวาJ",45170],[990,45170],[714,45170]]],["ปทุมรัตต์",[[991,45190],["ดอกล้ำ",45190],["Xแa",45190],[733,45190],[915,45190],["Rสง่า",45190],[992,45190],[993,45190]]],[994,[[203,45140],["Zไฮ",45140],[995,45140],["ชานุวรรณ",45140],["Cนวล",45140],[994,45140],["วารีสวัสดิ์",45140],[179,45140],["Aทัพไทย",45140],[335,45140],[498,45140],[906,45140],[996,45140]]],[140,[[917,45000],[140,45000],["สวนจิก",45280],["Aแวงควง",45000],[152,45000],["Fเปลือย",45000],[173,45000],["Yสัย",45280]]],["สุวรรณภูมิ",[["จำปาขัน",45130],[644,45130],[48,45130],[997,45130],["JOF",45130],[400,45130],["CM",45130],[949,45130],["gพันขัน",45130],["สระคู",45130],[982,45130],["eโทน",45130],[977,45130],["Lpลาด",45130],["FJ",45130]]],[989,[["กกY",45210],["Eสีดา",45210],[986,45210],["ผาQย้อย",45210],[653,45210],[386,45210],["Aขุ่นM",45210],[989,45210],[498,45210]]],[497,[["ดูกอึ่ง",45140],["สาวแห",45140],[497,45140],["เด่นราษฎร์",45140]]],[505,[[991,45160],[703,45160],["Bแจ้ง",45160],[328,45160],[103,45160],["Aหมื่นถ่าน",45160],["หน่อม",45160],[505,45160],[998,45160],["โหรา",45160]]],[999,[[1000,45150],["กู่กาสิงห์",45150],["aครั่งf",45150],["aครั่งM",45150],[81,45150],[187,45150],[188,45150],["สิงห์K",45150],[141,45150],[999,45150],[1001,45150],["เหล่าc",45150],["Rสว่าง",45150]]],[1002,[["Bเขือง",45000],[447,45000],["Wเจ้า",45000],[61,45170],["หมูม้น",45170],[1002,45000]]],[1003,[["ชมสะอาด",45250],[391,45250],["บุ่งเลิศ",45250],[1003,45250]]],["Fร้อยเอ็ด",[[185,45000],[234,45000],[405,45000],["ปอภาร",45000],[386,45000],["สะอาดสมบูรณ์",45000],["สีb",45000],[765,45000],[141,45000],["FN",45000],["oF",45000],["แคนM",45000],[486,45000],[524,45000],[181,45000]]],[1004,[["กกกุง",45220],[376,45220],[159,45220],[151,45220],[1004,45220]]],["เสลภูมิ",[[1005,45120],[794,45120],["ขวาว",45120],[80,45120],[232,45120],["CF",45120],[1006,45120],[1007,45120],["xเกลือ",45120],[1008,45120],[1009,45120],[1010,45120],["Oวิลัย",45120],[176,45120],[888,45120],["Fไพร",45120],["เหล่าf",45120],[173,45120]]],[906,[[1011,45230],["Zพอุง",45230],["Tโอง",45230],["XZ",45230],[208,45230],["Alไก้",45230],["อัคคะZ",45230],[1012,45230],[1013,45230]]],[925,[["Eหาดยาว",45240],[247,45240],[704,45240],[117,45240],[925,45240]]],[163,[[691,45110],[921,45110],["พรมสวรรค์",45110],["Gqัคคี",45110],["สระนกb",45110],[1014,45110],[152,45110],[135,45110],[1015,45110],["Kกกk",45110],[252,45110],["RtO",45110],[173,45110],["YOสว่าง",45110]]]]],["ลพบุรี",[[1016,[["tCรายณ์",15130],[1016,15230],["ซับตะเคียน",15130],["Eดินดำ",15130],["EมะCว",15130],["Cโสม",15190],["นิคมvCรายณ์",15130],["Xชุม",15130],["Buqัคคี",15130],["มะกอกหวาน",15230],["kค่อม",15230],["vCรายณ์",15130],["ศิลาทิพย์",15130],["Aยายโต๊ะ",15130],[728,15130],[397,15130],["Sแหลม",15130]]],[1017,[[1017,15150],["Dคู้",15150],["Dงา",15150],["Dลี่",15150],["Bเบิก",15150],["มุจลินท์",15150],["ลาดสาลี่",15150],[310,15150],["Sสมอคอน",15180],[872,15150],["โพตลาดb",15150]]],[279,[["ซับจำปา",15230],["ทะเลGวัด",15230],[279,15230],["Aผักแว่น",15230],["ev",15230],["แก่งผักกูด",15230]]],[1018,[["ชอนk",15110],["aพลับ",15110],["Tดึง",15110],["Dกะพี้",15110],[762,15180],[1019,15110],[349,15110],["Bชี",15180],["Bi",15110],[1018,15110],["พุคา",15110],["มหาสอน",15110],["สCมแจง",15110],["สายLb",15110],["Aกระเบียน",15110],["Aiขาว",15110],[622,15110],[1020,15110],["pปัก",15110],["เชียงงา",15110],[163,15110],[1021,15110]]],[1022,[["ชอนf",15140],["ช่องสาริกา",15220],["ดีลัง",15220],["Qสุด",15140],[1022,15140],["มะCวหวาน",15140],[103,15140],["Lขุนราม",18220],["Kสลุง",15140]]],[1023,[["mlเพชร",15190],[267,15190],[1023,15190],[87,15190],[85,15130],["Sรวก",15190]]],[1024,[["JEd",15240],["นิยมt",15240],[621,15240],[1024,15240],[313,15240]]],[898,[["ชอนสมบูรณ์",15170],["ชอนสารเดช",15170],["aดินj",15170],[316,15170],["Uโทน",15170],[898,15170]]],["Fลพบุรี",[["กกโก",15000],[471,15000],["TY",15000],["ตะลุง",15000],["ถนนM",15000],["ทะเลชุบศร",15000],[230,15000],[403,15000],[849,15000],["ท้ายตลาด",15000],[545,15000],["Dขันหมาก",15000],["Bข่อย",15000],[1025,15000],["พรหมมาสตร์",15000],["สี่I",15000],["SWn",15160],["Sqยอด",15000],["โก่งธนู",13240],["Kกะเทียม",15160],[713,15210],["Kvพาน",15000],["Yตรุ",15000],["Yเก้าต้น",15000]]],[1026,[["Iเกตุ",15120],["aมะรุม",15120],[730,15120],["Gขอนขว้าง",15120],["Gจั่น",15120],["Gเพลิง",15120],["สะแกราบ",15120],[70,15120],[572,15120],[955,15120],[888,15120],["เพนียด",15120],[1026,15120]]],[838,[["Uราก",15250],[178,15250],["Aมะค่า",15250],[838,15250],["Kแสมสาร",15250]]]]],["vปาง",[["งาว",[[492,52110],["Bร้อง",52110],["Bหวด",52110],["Bอ้อน",52110],["Bแหง",52110],[963,52110],["ปงเl",52110],["co",52110],["cใต้",52110],["Hตีบ",52110]]],[709,[["Jฮั้ว",52140],["ร่องเคาะ",52140],["Gซ้าย",52140],["GiZ",52140],[178,52140],[709,52140],["Gb",52140],["Gใต้",52140]]],[1027,[[1028,52170],[1027,52170],["สมัย",52170],["Hกัวะ",52170]]],[1029,[["ปงUคก",52190],["วอb",52190],[823,52190],[1029,52190],["Fยาว",52190],["zlล",52190],["Hสัน",52190]]],[1030,[[965,52130],[1031,52130],["Cแส่ง",52130],["vปางc",52130],["Gพร้าว",52130],["ศาลา",52130],[1030,52130],["uพัฒC",52130],["ไหล่p",52130]]],["เถิน",[[1032,52160],["ล้อมแรด",52160],["เถินบุรี",52160],["zมอก",52160],["Hถอด",52160],[450,52160],["Hมอก",52160],["Hวะ",52230]]],[1033,[["Jกว๋าว",52240],["Bขอ",52240],[944,52240],[1033,52240],["แจ้ซ้อน",52240]]],["Fvปาง",[["กล้วยแพะ",52000],[877,52100],["ต้นธงt",52000],["Jฝาย",52000],[873,52000],["บุญCคพัฒนา",52000],["gแฮ้ว",52100],["Bค่า",52100],[381,52100],[1034,52000],["Bเอื้อม",52100],[954,52000],["ปงแสนN",52100],["Wบาท",52000],[1035,52000],["สบตุ๋ย",52100],["สวนดอก",52100],[816,52000],[1036,52000]]],["เสริมn",[["Jn",52210],["เสริมw",52210],["เสริมขวา",52210],["เสริมซ้าย",52210]]],[1037,[["Jผึ้ง",52120],["Bสา",52120],["ปงT",52120],["วิเชตนคร",52120],["Fมาย",52120],[1037,52120],[834,52120]]],[1038,[["Tไฟ",52150],["Cครัว",52150],["Qโจ้",52150],["Bกิ่ว",52150],["Bบอม",52150],[1039,52150],["Gเงิน",52150],["สันTb",52150],[1040,52150],[1038,52150]]],[1041,[["ผาปัง",52180],["WบาทGตวง",52230],["Hปุ",52180],[1041,52180]]],[1042,[["จางo",52220],[404,52220],[251,52220],["สบป้าด",52220],[1042,52220]]]]],[1043,[[1044,[["ตะเคียนปม",51160],[1044,51160],["Bปวง",51160]]],[1045,[[1045,51180],["Lยาบ",51180]]],[1046,[[1046,51130],["Vพลู",51130],["Oเตี้ย",51130],["Aปลาสะวาย",51130],["เหล่ายาว",51130]]],[821,[["Eตุ้ม",51120],["นครเจดีย์",51120],["Qดิบ",51120],["Bเรือน",51120],["rgง",51120],[821,51120],["มะกอก",51120],["kf",51120],["Hแรง",51120]]],[1047,[["ก้อ",51110],["aดำ",51110],[504,51110],[1048,51110],[1047,51110],[1049,51110],["Hตืน",51110],[776,51110]]],["Fvพูน",[["ต้นธง",51000],[4,51000],[1050,51000],["ประตูV",51000],[827,51000],["มะเขือแจ้",51000],["ริมปิง",51000],["OXบาน",51000],["Adคืน",51150],["AหCม",51000],["อุโมงค์",51150],["zยอง",51000],["เหมืองง่า",51000],["เหมืองจี้",51000],[181,51000]]],["zAล่อง",[["Gผาง",51120],["Aยวง",51120],["Aล่อง",51120]]],[1051,[["ทากาศ",51170],["ทาขุมเงิน",51170],["ทาJc",51170],["ทาปลาดุก",51140],["ทาสบเส้า",51140],["ทาHลอบ",51170]]]]],["Oสะเกษ",[["กันทรลักษ์",[[742,33110],["mเสลา",33110],["ขนุน",33110],["จานM",33110],["ชำ",33110],["ตระกาจ",33110],[585,33110],[187,33110],["xมะลู",33110],["ภูผาหมอก",33110],[1009,33110],["รุง",33110],["ละลาย",33110],[967,33110],["สังเม็ก",33110],["Aหญ้าลาด",33110],[1052,33110],[1036,33110],["เสาธงt",33110],[389,33110]]],[694,[["Zเนียม",33130],[1053,33130],["ดูน",33130],[1054,33130],["ทาม",33130],["Xf",33130],["ผักแพว",33130],[897,33130],["ละทาย",33130],[103,33130],[686,33130],[765,33130],[141,33130],["อีปาด",33130],[990,33130],[1055,33130]]],["ขุขันธ์",[[550,33140],[694,33140],["จะกง",33140],["ดองกำเม็ด",33140],[526,33140],["lอุด",33140],[873,33140],[706,33140],["ปรือM",33140],["ลมศักดิ์",33140],["Oตระกูล",33140],["Oสะอาด",33140],["สะเดาM",33140],["สำโรงlเจ็น",33140],["Aฉลอง",33140],[1040,33140],[696,33140],["Lo",33140],["Lใต้",33140],["Kเพชร",33140],["โสน",33140],["ใจดี",33140]]],[1056,[["กระหวัน",33150],["กันทรอม",33150],[1056,33150],["บักดอง",33150],["พราน",33150],["ภูฝ้าย",33150],["สิ",33150],["Lจันทร์",33150],[136,33150],["Yกระสังข์",33150],["Yวงศ์",33150],["ไพร",33150]]],[1057,[["คูบ",33130],["ตองปิด",33130],[1057,33130],["รุ่งระวี",33130],["ละเอาะ",33130],["เขิน",33130]]],[1058,[[1058,33220],["เป๊าะ",33220]]],["ปรางค์กู่",[["กู่",33170],[1054,33170],[537,33170],[543,33170],["พิมายo",33170],["สมอ",33170],[1059,33170],["สำโรงปราสาท",33170],["Aเชียงทูน",33170],[1013,33170]]],[1060,[["ตำแย",33230],[1060,33230],["พรหมสวัสดิ์",33230],["Aค้า",33230],["Rเพ็ก",33230]]],[146,[["aรัก",33140],["ตะเคียนราม",33140],["ละลม",33140],["Llมอญ",33140],["Lตึ๊กชู",33140],["Klล",33140],["ไพรพัฒC",33140]]],[1061,[["mFฮาม",33190],["คอนกาม",33190],[745,33190],[1061,33190],["UชุมM",33190],[981,33190],[358,33190]]],["ราษีไศล",[["จิกสังข์N",33160],[1054,33160],[1062,33160],["Xหุ่ง",33160],["สร้างปี่",33160],[360,33160],[934,33160],["Aอึ่ง",33160],[1063,33160],["หว้านZ",33160],[515,33160],["Fแคน",33160],[164,33160]]],[241,[["ดวนM",33270],[533,33270],[1064,33270],["บุสูง",33270],[127,33270],[241,33270],[353,33270],["sU",33270]]],["Oรัตนะ",[[537,33240],["พิงพวย",33240],[947,33240],["ORn",33240],["สระเยาว์",33240],["สะพุง",33240],["เสื่องข้าว",33240]]],["ศิลาลาด",[["กุง",33160],["คลีกลิ้ง",33160],["AXa",33160],["โจดk",33160]]],[1065,[["กล้วยกว้าง",33210],["จานแสนไชย",33210],[706,33210],[1066,33210],[1065,33210],["Fc",33210]]],["อุทุมพรพิสัย",[[1000,33120],[265,33120],["ขะยูง",33120],["lเกษ",33120],["Jไชย",33120],[1067,33120],["รังแร้ง",33120],["สระกำแพงM",33120],[242,33120],[118,33120],[903,33120],[982,33120],["อี่หล่ำ",33120],["แขม",33120],["แข้",33120],["แต้",33120],[1068,33120],["Kหล่าม",33120],[906,33120]]],["เบญจลักษ์",[[1069,33110],[484,33110],[529,33110],[1070,33110],[1071,33110]]],[1072,[["lโกน",33120],[152,33120],[1072,33120]]],["FOสะเกษ",[["คูซอด",33000],[1053,33000],["ซำ",33000],["ตะดอบ",33000],["ทุ่ม",33000],[949,33000],["หญ้าปล้อง",33000],["Aครก",33000],[765,33000],[73,33000],[903,33000],["หมากเขียบ",33000],["Fo",33000],["Fใต้",33000],[1073,33000],["sข่า",33000],["sค้อ",33000],["sเขวา",33000]]],[358,[["บก",33250],[161,33250],["เหล่ากวาง",33250],[1074,33250],[1073,33250]]],["YOสุวรรณ",[["ผือM",33120],["Aม้า",33120],["อีเซ",33120],[1071,33120],["โดด",33120]]],[1075,[[3,33180],["ปราสาทเยอ",33180],["สำโรงพลัน",33180],["สุขสวัสดิ์",33180],["Rปูน",33180],[1075,33180]]]]],["สกลนคร",[[1076,[[1076,47180],["mไห",47180],["Cม่อง",47180]]],[1077,[[1077,47210],[199,47230],[405,47210],[1078,47230],["Yไพศาล",47210]]],[1079,[[1079,47250],[1080,47250],["AXสิม",47250],["แพด",47250]]],[1081,[[1081,47270],["สุวรรณคาม",47270],[103,47270],[105,47270]]],[966,[["aหม้อN",47140],["aหม้อNใต้",47140],["ao",47140],[127,47140],["มาย",47140],[942,47140],["Aกวั่ง",47140],["Lหลัว",47140],[157,47140]]],["พรรณานิคม",[["dมิ่ง",47130],[509,47220],[510,47130],["บะฮี",47130],["พรรณา",47130],["พอกf",47220],[167,47130],[1014,47130],["เชิงชุม",47130],["ไร่",47130]]],[1082,[["ต้นผึ้ง",47160],[1082,47160],["kไข่",47160],["แร่",47160],["ไฮหย่อง",47160]]],["ภูพาน",[["กกปลาซิว",47180],["สร้างค้อ",47180],["หลุบเลา",47180],["Kภู",47180]]],[1083,[["mเรือZ",47120],["ขัวก่าย",47120],[350,47120],["คูสะคาม",47120],[1064,47120],[250,47120],["Cซอ",47120],[1083,47120],[1049,47120],["Aสนม",47120],[141,47120],["Aแวงใต้",47120],["อินทร์แปลง",47120],["เดื่อOคันไชย",47120]]],[1084,[["Zg",47150],["ค้อเขียว",47150],["ปลาโหล",47150],[1084,47150],[1085,47150]]],[1086,[["Zสะอาด",47110],["ค้อใต้",47110],["lลเนิ้ง",47240],["lลโกน",47240],[204,47110],[317,47240],["บงo",47110],["บงใต้",47110],["Bต้าย",47110],[1087,47110],["พันC",47240],[1086,47110],[176,47110],[1015,47240],[263,47110],[993,47110]]],[1088,[["Eศิลา",47190],["ปทุมวาปี",47190],[62,47190],[1088,47190]]],["อากาศอำนวย",[["Eก้อน",47170],["Cฮี",47170],["บะหว้า",47170],["วาM",47170],["qัคคีพัฒC",47170],["อากาศ",47170],[114,47170],[489,47170]]],[1089,[["Jแก",47290],[209,47290],[113,47290],[1089,47290],["Kศิลา",47290]]],[1090,[["จันทร์เพ็ญ",47260],[125,47260],["xทวาย",47260],[1090,47260]]],["Fสกลนคร",[[160,47220],["งิ้วด่อน",47000],["aชน",47000],[938,47000],["Eแร่",47230],["ธาตุCเวง",47000],["ธาตุเชิงชุม",47000],["พังขว้าง",47000],["kลาย",47000],[1085,47220],[191,47000],["ฮางโฮง",47000],[162,47000],["เหล่าปอแa",47000],[692,47000],["Rหอม",47000]]],["KOสุพรรณ",[["ด่านkZ",47280],["ตองโขบ",47280],["เหล่าsค้อ",47280],["แมดCท่ม",47280]]],["sCb",[["Cตงวัฒนา",47230],[1031,47230],[1050,47230],["Bs",47230],["เชียงสือ",47230]]]]],["สงขลา",[[1091,[[1091,90270],["PM",90270],["เชิงแส",90270],["โรง",90270]]],[1092,[["Iหลา",90115],[1092,90230],["Jลาน",90230],[807,90230],[807,90115]]],["ควนเนียง",[["ควนโส",90220],[837,90220],[1093,90220],[1094,90220]]],["จะนะ",[["ขุนตัดหวาย",90130],["Iเปียะ",90130],["คู",90130],["จะโหนง",90130],[13,90130],["Eหมอy",90130],["Cทับ",90130],[228,90130],["Qขาว",90130],[413,90130],["Vชิง",90130],[1095,90130],["สะพานไม้แก่น",90130],["แค",90130]]],[1096,[["Iกวาง",90160],[861,90160],["ฉาง",90160],[280,90160],[953,90160],[1096,90160],["CหมอO",90160],["ประกอบ",90160],["ปลักหนู",90160],["สะท้อน",90160]]],[1097,[["Iหรัง",90310],["Jขมิ้น",90310],[1097,90310],[850,90310]]],[1098,[[284,90110],[1098,90110],["Bหาร",90110],["Hทอม",90110]]],[1099,[["Iแดน",90140],["ตะเครียะ",90140],["Eบอน",90140],["gตรุ",90140],[1100,90140],[83,90140],["rแตระ",90140],["พังU",90140],["ระวะ",90140],[1099,90140],["วัดสน",90140],["แดนสงวน",90140]]],[1093,[[165,90180],["ควนรู",90220],["คูหาใต้",90180],["Eชะมวง",90180],[462,90180]]],["สทิงW",[[1101,90190],["Iรี",90190],["คูขุด",90190],["จะทิ้งW",90190],[458,90190],["ดีc",90190],[403,90190],["gดาน",90190],["gแa",90190],[884,90190],[725,90190]]],[1102,[["คูหา",90210],["จะแหน",90210],["Jพอ",90210],["ธารคีรี",90210],["บาโหย",90210],["Bโหนด",90210],[1102,90210],[750,90210],["เปียน",90210]]],[702,[["Jหมอ",90240],[881,90170],[586,90120],["ปาดังเบซาร์",90240],["พังลา",90170],[702,90120],["สำนักขาม",90320],["สำนักแต้ว",90120],["Sมีเกียรติ",90170]]],["สิงหนคร",[["ชะแล้",90330],["ชิงโค",90280],[614,90280],["Dเขียด",90330],["rรอ",90330],["Vขาด",90330],[1103,90330],["รำแa",90330],["วัดขนุน",90330],["สทิงหม้อ",90280],[1104,90280]]],[1105,[["Iอู่ตะเภา",90110],["Iแห",90110],["ควนลัง",90110],["คอหงส์",90110],["คูเต่า",90110],[1106,90110],["Jตำเสา",90110],[585,90110],[32,90110],["Qf",90110],["Bพรุ",90250],["พะตง",90230],[1105,90110]]],[1107,[[80,90150],["rD",90150],["vไพล",90260],[615,90260],[1095,90150],["Pสะบ้า",90150],[1107,90150]]],["Fสงขลา",[["JหG",90000],[1108,90000],["พะวง",90100],[394,90100],["Pแต้ว",90000],["Sรูปd",90000]]]]],["สตูล",[[1109,[[1109,91130],["Jนุ้ย",91130],["อุไดเจริญ",91130]]],[1110,[["ควนสตอ",91160],[1110,91160],[416,91160],["Gประจัน",91160]]],[1111,[["ขอนคลาน",91120],["Jบุหลัง",91120],[1111,91120],["Cทอน",91120],["Vแก่gp",91120]]],[1112,[[76,91150],[1112,91150],["สาคร",91150],["แป-ระ",91150]]],["มะนัง",[[873,91130],["ปาล์มพัฒC",91130]]],[1113,[[1000,91110],[428,91110],[10,91110],[1113,91110],[427,91110],["แหลมสน",91110]]],["Fสตูล",[[274,91000],["ควนขัน",91000],["ควนY",91140],[1106,91140],["ตันหยงโป",91000],["ตำมะลัง",91000],[408,91140],["ปูยู",91000],[493,91000],["เกตรี",91140],["Pสาหร่าย",91000],["เจ๊ะบิลัง",91000]]]]],["สมุทรปราการ",[[1114,[["Iด่าน",10550],["Iนิยมยาตรา",10560],["Iสวน",10560],[1114,10560],["Dพลีf",10560],["Dเพรียง",10560],["Bระกาศ",10560],["เปร็ง",10560]]],[799,[[475,10540],["DพลีM",10540],[306,10540],["Dโฉลง",10540],["ราชาเทวะ",10540],[95,10540]]],[1115,[[1115,10570],["ศีรษะจรเข้f",10570],["ศีรษะจรเข้M",10570]]],["Wประแa",[[283,10130],[479,10130],["Dกระสอบ",10130],["DกอX",10130],["Dกะเจ้า",10130],["Dครุ",10130],[51,10130],["DQผึ้ง",10130],[1019,10130],["Dยอ",10130],[1116,10130],["Deเสือ",10130],[242,10130],["สำโรงw",10130],["สำโรงใต้",10130]]],["Wสมุทรเจดีย์",[[312,10290],["BIสวน",10290],["rIDปลากด",10290],["แหลมฟ้าผ่า",10290],["ในIDปลากด",10290]]],["Fสมุทรปราการ",[["ท้ายB",10280],["ท้ายBu",10280],[54,10270],[773,10280],["Dปูu",10280],["DF",10270],["DFu",10270],["Dโปรง",10270],[10,10270],["สำโรงo",10270],[563,10270],["แพรกษา",10280],["แพรกษาu",10280]]]]],["สมุทรสงคราม",[[1117,[[1101,75120],["จอมปลวก",75120],["Tมะโนรา",75120],[743,75120],[426,75120],[1117,75120],["Dนกแขวก",75120],[28,75120],["Dยี่รงค์",75120],["Dสะแก",75120],["Bปราโมทย์",75120],["ยายแพง",75120],["โรงหีบ",75120]]],[1118,[["Eคา",75110],[480,75110],["DCงลี่",75110],[42,75110],["ปลายโพงพาง",75110],["ยี่สาร",75110],[1119,75110],[63,75110],[1118,75110],["เหมืองu",75110],["แควอ้อม",75110],["แพรกหCมแa",75110]]],["Fสมุทรสงคราม",[["Iเขิน",75000],["Iโคน",75000],["ท้ายหาด",75000],["Cงตะเคียน",75000],["Dขันแตก",75000],["Dจะเกร็ง",75000],[306,75000],["Bปรก",75000],[387,75000],[441,75000],["แหลมM",75000]]]]],["สมุทรสาคร",[["กระทุ่มแบน",[["Iมะเดื่อ",74110],["Tไก่ดี",74110],["ตลาดกระทุ่มแบน",74110],[77,74110],[78,74110],[763,74110],[63,74110],["Aนกไข่",74110],["อ้อมf",74130],["แคราย",74110]]],[1120,[[18,74120],[1120,74120],[437,74120],["สวนส้ม",74120],[103,74120],[239,74120],[44,74120],["หลักq",74120],["อำแพง",74120],["เกษตรพัฒC",74120],["เจ็ดริ้ว",74120],[1121,74120]]],["Fสมุทรสาคร",[[650,74000],[770,74000],["tมงคล",74000],["Eจีน",74000],["Eฉลอม",74000],[460,74000],[131,74000],["CK",74000],["Dกระเจ้า",74000],[407,74000],[1116,74000],["Dโทรัด",74000],["Bg",74000],[564,74000],["พันท้ายนรสิงห์",74000],[184,74000],["โกรกกราก",74000],["Kขาม",74000]]]]],["สระบุรี",[[1122,[["aตะงาว",18210],[1122,18210],[468,18210],["hหลิ่ว",18210]]],[1123,[[66,18130],["Dโขมด",18130],["Bครัว",18270],[1123,18130],["สร่างโศก",18130],[103,18130],["หรเทพ",18130],[1124,18130],[863,18130]]],[673,[["ขุนโขลน",18120],["ธารเกษม",18120],["Cยาว",18120],[673,18120],["พุกร่าง",18120],["พุZจาน",18120],[758,18120],["LVหวาย",18120],[158,18120]]],[1125,[["ซับสนุ่น",18220],[1125,18180],[551,18180],["vพญาw",30130],["vสมพุง",30130],["Aย่างเสือ",18180]]],[256,[["Zพราน",18220],[256,18220],[721,18220]]],[1126,[["Iเรือ",18150],["Bv",18150],[1126,18150],[150,18150],["Aหมู",18150],["เจริญธรรม",18150]]],[1063,[["กุ่มหัก",18140],["คชสิทธิ์",18250],["Xลอย",18230],["Aจรเข้",18140],[775,18230],["ACก",18230],[269,18140],[105,18140],[70,18140],[1063,18140],[92,18140],[565,18140],[1127,18230],[759,18230],[713,18250],["Kแย้",18230],[163,18250],["hต่ำ",18140]]],[212,[[207,18170],[968,18170],["Aควายโซ",18170],["Aสีดา",18170],["Aeโพ",18170],[212,18170],[9,18170],[121,18170],["ไก่เส่า",18170]]],[363,[[815,18190],["Bกลับ",18190],[1128,18190],[363,18190]]],[561,[[373,18000],["ผึ้งรวง",18000],["พุแค",18240],["หน้าWลาน",18240],[388,18000],["SดินพัฒC",18000]]],["Fสระบุรี",[["mนกเปล้า",18000],["ดาวเรือง",18000],[13,18000],["ตะm",18000],["Cโฉง",18000],["rข้าวสาร",18000],["rเพรียว",18000],[96,18000],[301,18000],[190,18000],[498,18000]]],[1129,[[879,18160],[1130,18160],[284,18160],[379,18160],["Wยาทด",18160],[1103,18160],["ศาลารีไทย",18160],["สวนดอกไม้",18160],["eปลวก",18160],[261,18160],["เริงราง",18160],[1129,18160]]],[1131,[["ชะอม",18110],["ชำผักแพว",18110],[1132,18110],["ทับกวาง",18260],[1069,18110],[767,18110],["Eมะปราง",18110],[1133,18110],[883,18110],[1134,18110],["pซ้อน",18110],[1135,18110],[980,18110],[1131,18110]]]]],[179,[[1136,[[1136,27260],["Iไก่เถื่อน",27260],["ซับมะกรูด",27260],["เบญจขร",27260],["ไทยอุดม",27260],[782,27260],["yเดี่ยว",27260]]],[1137,[[1137,27180],["ทัพราช",27180],["ทัพเสด็จ",27180],["ทัพไทย",27180],["โคคลาน",27180]]],[1138,[["Ipปูน",27210],["lหลังใน",27210],["Jมหาเจริญ",27210],[1138,27210]]],[1139,[[178,27250],[1139,27250],[46,27250]]],[1140,[["ช่องกุ่ม",27160],["Eเกวียน",27160],["ผักขะ",27160],[1140,27160],["Aตะเคียนบอน",27160],[216,27160],["Aหมากฝ้าย",27160],[141,27160],[192,27160],["แซร์ออ",27160],["Rหมากเค็ง",27160]]],[1141,[["Iทับจันทร์",27120],["IQใส",27120],["ทับพริก",27120],[32,27120],[708,27120],["BuAy",27120],[777,27120],["ผ่านศึก",27120],["ฟากL",27120],[390,27120],["หันi",27120],[1141,27120],[697,27120]]],[1142,[["Wเพลิง",27000],[529,27000],[1142,27000],["Sqสิบ",27000]]],["Fสระb",[["Eเกษม",27000],["Eแยก",27000],[373,27000],["ศาลาvดวน",27000],["สระขวัญ",27000],[179,27000],[49,27000],["Kปี่ฆ้อง",27000]]],[252,[[898,27180],[141,27180],[252,27120],["Rหมากมุ่น",27120]]]]],["สิงห์บุรี",[["ค่ายDระจัน",[["คอi",16150],[32,16150],[1143,16150],[466,16150],[864,16150],["โพสังโฆ",16150]]],[284,[["ถอนสมอ",16140],[976,16140],["วิหารขาว",16140],["โพประจักษ์",16140]]],[1143,[["Bจ่า",16130],["พักทัน",16130],["สระแจง",16130],[110,16130],["เชิงกลัด",16130],[787,16130],["โพชนไก่",16130],["ไม้ดัด",16130]]],[1144,[["DQเชี่ยว",16120],[1145,16120],[796,16120],[1144,16160],["Wn",16120],["eV",16120],[810,16120]]],[1146,[[471,16110],["ชีQร้าย",16110],["Nเอน",16110],["ทับยา",16110],[768,16110],["Qlล",16110],["ประศุก",16110],["Lชัน",16110],[1146,16110],[906,16110]]],["Fสิงห์บุรี",[["จักรสีห์",16000],["ต้นY",16000],[743,16000],["Dพุทรา",16000],["Dมัญ",16000],["kหมู่",16000],[809,16000],["โพกรวม",16000]]]]],["สุพรรณบุรี",[[89,[[89,72170],["ทะเลบก",72250],["สระกระโจม",72250],[91,72170],["ไร่รถ",72170]]],[530,[[530,72180],["นิคมกระเสียว",72180],["Gคัน",72180],[909,72180],["Aมะค่าโมง",72180],[1127,72180],["องค์W",72180]]],[1147,[[550,72150],["จรเข้M",72150],["ตะค่า",72150],[1147,72150],[634,72150],[1148,72150],["มะขามล้ม",72150],[1138,72150],["วัดดาว",72150],[323,72150],["สาลี",72150],[457,72150],["Kคราม",72150],["hกองดิน",72150]]],[1149,[["Tปรู",72140],["Dn",72140],[882,72140],["ปลายC",72140],["มดแa",72140],["GQซับ",72140],[167,72140],[854,72140],[1149,72140]]],[275,[["TมะCว",72110],[1130,72110],["Jคอก",72110],["Dตะเคียน",72110],["Dlเถร",72110],[639,72110],[474,72110],["gสุพรรณ",72190],[791,72110],[321,72110],[353,72110],[275,72110],[421,72190],["eY",72110],["เนินWปรางค์",72110]]],[1150,[["กระเสียว",72130],["Bสระ",72130],[862,72130],[1151,72130],[1150,72130],["AผักCก",72130],["Aสะเดา",72130]]],[1152,[[481,72240],[328,72240],["Aราชวัตร",72240],[1152,72240],[499,72240],["แจงn",72240]]],[1153,[["กระจัน",72160],["จรเข้qพัน",71170],[613,72160],["Tมะเกลือ",72220],[372,72160],["Bโข้ง",72160],["พลับพลาไชย",72160],["ยุ้งทะลาย",72160],["สระพังลาน",72220],["สระยายโสม",72220],["Aโอ่ง",72160],[1153,72160],["เจดีย์",72160]]],["เดิมDCงบวช",[["Jคลี",72120],["Cงบวช",72120],["gกรุ",72120],[10,72120],["Vสะแก",72120],["Uนอน",72120],["GOราช",72120],[466,72120],[1154,72120],[1104,72120],[9,72120],[462,72120],["เดิมD",72120],[800,72120]]],["Fสุพรรณบุรี",[["Tกำยาน",72000],[916,72000],["Tมะสังข์",72000],["TYN",72000],[13,72230],["ทับตีเหล็ก",72000],["Eพี่เลี้ยง",72000],["Eระหัด",72000],[426,72210],[296,72000],["พิหารแa",72000],["รั้วM",72000],["ศาลาขาว",72210],[871,72230],[725,72000],[179,72230],[401,72210],["Kโคเฒ่า",72000],["YWยา",72000],[863,72000]]]]],["สุราษฎร์ธานี",[["กาญจนดิษฐ์",[[1155,84160],["กะแดะ",84160],["Iสระ",84160],["dขวา",84160],[593,84160],[282,84160],["Jกง",84290],["Jรัง",84290],[880,84160],["ENu",84290],["Eอุแท",84160],["Vร่อน",84160],["พลายวาส",84160]]],["คีรีรัฐนิคม",[["กะเปา",84180],["ถ้ำสิงขร",84180],[93,84180],["Eขนอน",84180],["Qหัก",84180],["Bทำเนียบ",84180],[379,84180],[862,84180]]],[848,[[592,84350],[848,84350],[840,84350],[782,84350]]],[1156,[["ชลคราม",84160],[1156,84220],[101,84340],["ไชยคราม",84220]]],[1157,[["Iy",84150],[1157,84150],[973,84150],["rฉลุย",84150],["Sถ่าน",84150],["เสวียด",84150]]],[1158,[["Iพา",84170],["คันธุลี",84170],[1158,84170],["ประสงค์",84170],["G",84170],["สมอN",84170]]],["Blขุน",[["พรุไทย",84230],["พะแสง",84230],["Sพัง",84230],[158,84230]]],["BCสาร",[["Iปราบ",84120],["ควนO",84270],["ควนสุบรรณ",84120],["Jเl",84120],["Jเlu",84120],["Eชี",84120],[594,84120],[975,84120],["พรุพี",84270],[1043,84120],["เพิ่มพูนทรัพย์",84120]]],["BCเดิม",[["ทรัพย์ทวี",84240],[76,84240],["Cใต้",84240],[413,84240]]],[1159,[["Iชะอุ่น",84250],["Iศก",84250],["ต้นยวน",84250],[1159,84250],["พลูเถื่อน",84250],["พังกาญจน์",84250]]],["Wแสง",[["Dสวรรค์",84210],[886,84210],[8,84210],["สินเจริญ",84210],["อิปัน",84210],["yขึง",84210],["yโสภา",84210]]],[1160,[[1155,84130],["ตะปาน",84130],[32,84130],["Eสะท้อน",84130],["Eโรงd",84130],[1161,84130],["Dงอน",84130],["Dมะเดื่อ",84130],["Dเดือน",84130],[1160,84130],["มะลวน",84130],["ลีเล็ด",84130],[1049,84130],[527,84130],["eเตย",84130],["Seควาย",84130]]],["วิภาวดี",[["ตะกุกo",84180],["ตะกุกใต้",84180]]],[1162,[[100,84280],[1162,84280],[846,84280],[846,84360]]],["Pสมุย",[["ตลิ่งn",84140],["gผุด",84320],["มะเร็ต",84310],["ลิปะf",84140],[308,84140],[180,84140],["HQ",84330]]],[1163,[[1034,84260],["พ่วงพรมคร",84210],["อรัญคามวารี",84260],["Sตอก",84260],[1163,84260]]],["Fสุราษฎร์ธานี",[[599,84100],["IฉCก",84000],[592,84000],[283,84000],[426,84000],["Dชนะ",84000],["DY",84000],["Dใบไม้",84000],[798,84000],["มะขามเตี้ย",84000],[1119,84000]]],[1164,[["Iฉนวน",84190],[400,84190],["Bส้อง",84190],["Sนิพันธ์",84190],[1164,84190]]],["ไชยา",[["ตลาดไชยา",84110],["ตะกรบ",84110],["J",84110],["rหมาก",84110],["Vเว",84110],["พุมเรียง",84110],["เลม็ด",84110],[828,84110],["โมถ่าย",84110]]]]],["สุรินทร์",[[1165,[[1165,32210],["คูตัน",32210],[1062,32210],[526,32210],["แนงมุด",32210],["Kตะเคียน",32210]]],[662,[["กระหาด",32180],[662,32180],[605,32180],["บุแกรง",32180],[246,32180],["ลุ่มระวี",32180],["Aสนิท",32180],["เป็นสุข",32180],["Fลีง",32180]]],[1166,[["กระเบื้อง",32190],[1166,32190],["CAh",32190],["ยะวึก",32190],[1167,32190],["สระขุด",32190],[245,32190],[1001,32190],["ไพรขลา",32190]]],[767,[["กระโพ",32120],[997,32120],[767,32120],["บะ",32120],["XK",32120],["พรมเทพ",32120],[103,32120],["Aเมธี",32120],[726,32120],["sครก",32120]]],[1168,[["จรัส",32230],["lG",32230],[1168,32230],[702,32230],["สำเภาลูน",32230],["อาs",32230]]],[706,[["กังแอน",32140],["กันตวจระมวล",32140],["lนี",32140],["lเบา",32140],["ทมอ",32140],[936,32140],["Bพลวง",32140],[711,32140],[712,32140],["ปราสาททนง",32140],["ปรือ",32140],["สมุด",32140],[152,32140],["เชื้อเพลิง",32140],[14,32140],[121,32140],["โชคCq",32140],[547,32140]]],["พนมaรัก",[["จีกแดก",32140],["lเมียง",32140],["บักได",32140],[534,32140]]],[1169,[["mขาคีม",32130],["Tแรด",32130],["ทับM",32130],[1064,32130],["Qเขียว",32130],["Uสว่าง",32130],[1169,32130],["AXN",32130],[361,32130],["เบิด",32130],["แก",32130],[164,32130]]],[695,[["ตระเปียงเตีย",32220],["ตรำดม",32220],[695,32220],["อู่โลก",32220],["โชคo",32220]]],[1167,[["ณรงค์",32150],["ตรวจ",32150],[235,32150],[141,32150],["แจนแวน",32150]]],["ศีขรภูมิ",[["mหวาย",32110],["ขวาวM",32110],["คาละแมะ",32110],["จารพัต",32110],["ช่างปี่",32110],["ตรมไพร",32110],["ตรึม",32110],["Cรุ่ง",32110],[1066,32110],[897,32110],["ระแงง",32110],["Aขวาว",32110],[103,32110],[910,32110],["แตล",32110]]],[1170,[["Cนวน",32160],[1170,32160],["Aระฆัง",32160],["Aอียอ",32160],[133,32160],[905,32160],["sโก",32160]]],[1171,[["กระเทียม",32150],["ขอนแตก",32150],["ดม",32150],["lคง",32150],["lตุม",32150],["ทับทัน",32150],["Bจารย์",32150],["Bชบ",32150],[806,32150],["สะกาด",32150],[1171,32150],["เทพรักษา",32150]]],[1172,[["กระออม",32170],["ประดู่",32170],[235,32170],["สะโน",32170],[1172,32170],["Aฮะ",32170],[244,32170],["หมื่นO",32170],[888,32170],["เสม็จ",32170]]],[1173,[["lกูก",32000],[327,32000],["Bแร่",32000],["ปราสาทN",32000],[1173,32000]]],["Fสุรินทร์",[["กาP",32000],["คอโค",32000],["ตระแสง",32000],["ตั้งใจ",32000],["lอ็อง",32000],["Eสว่าง",32000],["นอกF",32000],[131,32000],[869,32000],["บุฤาษี",32000],["ราม",32000],["สลักได",32000],[1059,32000],[242,32000],["เฉนียง",32000],["เทนมีย์",32000],["เพี้ยราม",32000],["Fที",32000],["แกM",32000],["แสลงพันธ์",32000],[181,32000]]],["RCรายณ์",[["Zผง",32130],["ระz",32130],[176,32130],["Aเทพ",32130],["R",32130]]]]],["สุโขทัย",[["กงไกรลาศ",[["กกแรต",64170],["กง",64170],["aเดือย",64170],[337,64170],[882,64170],["Buสุขเกษม",64170],[684,64170],[260,64170],["ไกรw",64170],["ไกรนอก",64170],["ไกรใน",64170]]],["คีรีมาศ",[["JUF",64160],[400,64160],["Cเชิงคีรี",64160],["BQพุ",64160],[803,64160],["Oคีรีมาศ",64160],["qพวง",64160],["Aกระดิ่ง",64160],[775,64160],[573,64160]]],[1174,[[541,64150],[1174,64150],["Buไชยมงคล",64230],["SbOสมบูรณ์",64230],["ไทยชนะศึก",64150]]],["Bด่านลานหอย",[[13,64140],[708,64140],["ลานหอย",64140],["Gตะคร้อ",64140],["GQขาว",64140],[1151,64140],[1175,64140]]],[1176,[["Iมะพลับ",64180],["นครเดิฐ",64180],["Qขุม",64180],[1176,64180],[103,64180]]],[1177,[["aคู่",64130],[348,64190],["Bตึก",64130],[625,64130],[1178,64130],[1177,64190],["สารจิตร",64130],[969,64130],["หาดเสี้ยว",64130],["Hสำ",64130],["Hสิน",64130]]],["Oสำโรง",[["Ilล",64120],["ทับผึ้ง",64120],["Cขุนไกร",64120],["Bซ่าน",64120],[413,64120],[383,64120],["ราวต้นจันทร์",64120],[178,64120],[1151,64120],[615,64120],["วัดP",64120],[797,64120],["Plเลี้ยง",64120]]],["สวรรคโลก",[["Iกระจง",64110],[6,64110],[880,64110],[411,64110],[10,64110],["VกุมP",64110],[862,64110],["Gพิณพาทย์",64110],["Gไม้ขอน",64110],[618,64110],["FDขลัง",64110],["FDยม",64110],["Fสวรรคโลก",64110],[181,64110]]],["Fสุโขทัย",[["lลเตี้ย",64220],["ธานี",64000],[349,64000],[332,64220],["Bหลุม",64000],["rW",64000],["rแคว",64000],["Uซ้าย",64000],["GNแa",64210],[261,64210]]]]],["Aคาย",[[1179,[["กองCง",43110],[1179,43110],[231,43110],["Qโมง",43110],[1087,43110],["Bว่าน",43110],[380,43110],["ACง",43110],["Kคอน",43110],["sสา",43110]]],[1180,[["Cทับไฮ",43120],["Bต้อน",43120],["WบาทCสิงห์",43120],[1180,43120],[489,43120]]],["Oเชียงu",[[1145,43130],[673,43130],["พานพร้าว",43130],["Aปลาr",43130]]],[1181,[["คอกd",43100],[188,43100],[1181,43100]]],[1182,[[254,43160],[966,43160],["ผาตั้ง",43160],[1182,43160],["แก้งไก่",43160]]],[1183,[[131,43120],[1010,43120],[176,43120],["อุดมพร",43120],[1183,43120]]],["FAคาย",[["กวนวัน",43000],["ค่ายบกหวาน",43100],[380,43000],[1184,43000],["Wธาตุบังพวน",43100],["มีt",43000],["วัดธาตุ",43000],[731,43100],["สีกาย",43000],["AกอมP",43000],["หาดZ",43000],["pโงม",43000],["Fหมี",43000],["zคุก",43000],[906,43000],[181,43000]]],[506,[["ด่านOสุข",43130],[506,43130],[163,43130]]],["sพิสัย",[["mบง",43120],["จุมพล",43120],["ชุมd",43120],[400,43120],["Cหนัง",43120],[246,43120],[296,43120],[322,43120],["สร้างCงขาว",43120],["เซิม",43120],["เหล่าต่างZ",43120]]]]],["AXvภู",[[556,[["mดินจี่",39350],[946,39170],["aสวรรค์",39350],[530,39170],[556,39170],[488,39170],["อุทัยสวรรค์",39170],["เก่ากลอย",39350],[513,39170]]],[1185,[["Cเหล่า",39170],[492,39170],[178,39170],["Gปลาป้อม",39170],["เทพคีรี",39170]]],[196,[["mสะเทียน",39180],[155,39180],[920,39180],["Uหล่อ",39180],[196,39180],["Aกุงb",39180],[444,39180],[758,39180],["หันCn",39180],[303,39180],["Rk",39180],[157,39180]]],[1186,[["mผึ้ง",39270],[938,39270],[131,39270],["Cด่าน",39270],["Cสี",39270],["บุญทัน",39270],[238,39270],[1186,39270]]],["FAXvภู",[[124,39000],["CZไฮ",39000],["Cมะเฟือง",39000],[206,39000],[453,39000],["Vไม้n",39000],[656,39000],[103,39000],["Aภัยศูนย์",39000],["Aสวรรค์",39000],[529,39000],[1154,39000],["Rขมิ้น",39000],[249,39000],[906,39000]]],[1055,[["mดู่",39140],[873,39140],[257,39140],[1187,39140],["ปางกู่",39140],[245,39140],[807,39140],[1124,39140],[1055,39140],[513,39140]]]]],["อำCจเจริญ",[[1188,[[935,37210],[1188,37210],["Vก่อ",37210],["Kก่ง",37210],["Kสาร",37210]]],["ปทุมราชวงศา",[["Zs",37110],["CVแซง",37110],[228,37110],["ลือ",37110],[382,37110],["L",37110],["Rn",37110]]],[1189,[["จานลาน",37180],[1189,37180],["Wเหลา",37180],["ไม้กลอน",37180]]],["ลืออำCจ",[[357,37120],["aมะU",37120],["อำCจ",37120],["เปือย",37120],["แมด",37120],[534,37120],["ไร่ขี",37120]]],[588,[["ZW",37240],["จิกดู่",37240],["รัตนวารี",37240],["สร้างถ่อf",37240],[765,37240],[588,37240],["เค็งM",37240],["sFf",37240]]],["FอำCจเจริญ",[[892,37000],["คึมM",37000],["Tเมย",37000],["Cจิก",37000],["Cผือ",37000],[1190,37000],[1185,37000],["Cหมอม้า",37000],[1080,37000],["Qปลีก",37000],["บุ่ง",37000],["ปลาค้าว",37000],["สร้างนกทา",37000],["Aมะแซว",37000],[354,37000],["เหล่าพรวน",37000],["RหCมแท่ง",37000],["RY",37000],["ไก่Z",37000]]],[1191,[[939,37290],["Aqสี",37290],[903,37290],[1191,37290],[163,37290],["ไร่สีสุก",37290]]]]],["อุดรธานี",[[1192,[[1192,41250],["ขอนยูง",41250],["lลเลียน",41250],[1184,41250],["สร้างก่อ",41250],[941,41250],[218,41250]]],[1193,[[1193,41110],["ตูมใต้",41110],[1194,41110],[1184,41370],[1195,41370],["พันT",41370],["สีออ",41110],[529,41110],["Lเกิ้ง",41110],["เชียงแหว",41110],["zZ",41110],["เสอเพลอ",41370],["แชแล",41110]]],["กู่b",[[1196,41130],[995,41130],["Bจีต",41130],["RNอินทร์",41130]]],[1197,[[1197,41310],[585,41310],[227,41310],[490,41310]]],[1198,[[1198,41380],["Cแค",41380],["Bก้อง",41380],[248,41380]]],[1199,[[491,41210],[1199,41210],["Bหยวก",41210],[353,41210],[138,41210],[141,41210],["โสมเยี่ยม",41210]]],[1200,[[924,41190],["ถ่อนCลับ",41190],[250,41190],["Cไหม",41190],[1201,41190],["Bt",41190],[1200,41190],[1202,41190],[966,41190],[178,41190],["Oสุทโธ",41190],["อ้อมกอ",41190],[993,41190]]],[246,[[1203,41160],["ข้าวสาร",41160],["Zด้วง",41160],[153,41160],["จำปาโมง",41160],[257,41160],[246,41160],["Aeคู",41160],[141,41160],[718,41160],["เขือQ",41160],[1204,41160],[248,41160]]],["ประจักษ์ศิลปาคม",[["Ck",41110],["Lqพาด",41110],[1078,41110]]],["พิบูลย์รักษ์",[[1205,41130],[504,41130],[1206,41130]]],[1207,[["ZKสูง",41280],["บะยาว",41280],[1195,41280],[1207,41280],["Aกุงทับม้า",41280],[1152,41280]]],[1208,[["จำปี",41230],[945,41230],[1198,41230],[1128,41230],[1208,41230],["Aนกเขียน",41230],[134,41230]]],[1209,[["Cสะอาด",41260],["Bยวด",41260],["Bpโงม",41260],[238,41260],[1209,41260],["เชียงดา",41260]]],[1210,[["mหมากไฟ",41220],["Qพ่น",41360],[361,41360],[1210,41360],[969,41220],["หมากหญ้า",41360],["อูบมุง",41220],["Rหวาย",41220]]],[1211,[["Tหายโศก",41130],["Bยา",41320],["Bเชียง",41320],["ผักตบ",41130],["พังงู",41130],["สร้อยพร้าว",41130],["สะแบง",41130],["Aสระปลา",41320],[1211,41130],[243,41130],[73,41130],[114,41130]]],[455,[["ทับกุง",41340],[131,41340],[455,41340],["แสงสว่าง",41340]]],[1212,[[1213,41150],[869,41150],["Cพู่",41150],[1133,41150],[209,41150],["สร้างแป้น",41150],["สุมเส้า",41150],["เชียงหวาง",41150],["เlไห",41150],[1212,41150],[534,41150]]],["Fอุดรธานี",[["mสระ",41000],["Cกว้าง",41000],[231,41000],[131,41000],["นิคมสงเคราะห์",41000],[1100,41000],["Bจั่น",41000],[1202,41000],["Bเลื่อม",41000],["qพร้าว",41000],["Aขอนกว้าง",41000],[237,41000],[103,41000],[73,41330],[903,41000],["หมากแข้ง",41000],[142,41000],["เชียงพิณ",41000],[907,41000],[121,41000],[136,41330]]],[157,[["ทมCn",41240],["บุ่งb",41240],[149,41240],[534,41240],[157,41240],["YOสำราญ",41240]]],[1214,[["Zเลาะ",41290],[523,41290],[993,41290],[1214,41290]]]]],["อุตรดิตถ์",[["ตรอน",[["ข่อยสูง",53140],["Qอ่าง",53140],[625,53140],[784,53140],["หาดสองแคว",53140]]],["Nแสนขัน",[["Qพี้",53230],[316,53230],["Vคาย",53230],["ผักขวง",53230]]],[1215,[["จริม",53150],[1215,53150],["Cงพญา",53150],["Qหมัน",53150],["ผาเลือด",53190],["ร่วมจิต",53190],["หาดล้า",53190]]],["Qปาด",[["Eแฝก",53110],["Qไคร้",53110],["Qh",53110],["Bฝาย",53110],["Lมุ่น",53110],["เด่นเหล็ก",53110],[79,53110]]],[238,[["Cขุม",53180],["gเบี้ย",53180],[238,53180],["kเจ็ดต้น",53180]]],[1035,[["คอรุม",53120],["Eมะเฟือง",53120],["Eสัก",53220],[1028,53120],["Cอิน",53120],["Bดารา",53220],[1145,53120],["Bโคน",53120],["พญาแมน",53120],[181,53120],["ไร่อ้อย",53120]]],[1216,[["Bเสี้ยว",53160],[1216,53160],[1134,53160],[731,53160]]],["ลับแล",[["tจุมพล",53130],["ด่านHZมัน",53210],["Jยั้ง",53210],["Cนกกก",53130],["ฝายc",53130],["Oพนมมาศ",53130],["Hพูล",53130],[495,53210]]],["Fอุตรดิตถ์",[["ขุนฝาง",53000],["คุ้งตะเภา",53000],[879,53000],["ถ้ำฉลอง",53000],[638,53000],[77,53000],["Qริด",53000],[708,53000],["Bด่านCขาม",53000],[564,53000],["Vเซ่า",53000],["ผาจุก",53000],["Gกะพี้",53170],["Gดิน",53000],["หาดกรวด",53000],["หาaิ้ว",53000],[79,53000]]]]],["อุทัยธานี",[[1217,[["ตลุกดู่",61120],[1217,61120],["JCไทย",61120],[466,61120],["Awa",61120],["Aยายดา",61120],["Aสระ",61120],[1175,61120],["Sขี้ฝอย",61120],[607,61120]]],[383,[["คอกควาย",61140],[481,61140],[318,61140],["BuIเคียน",61180],[383,61140],[241,61180],[68,61180],["Aบ่มกล้วย",61180],["หูd",61180],[1135,61140],["เจ้าวัด",61150],["Fการุ้ง",61180],["แก่นมะกรูด",61140]]],[1218,[["JCn",61160],[1161,61160],["ประดู่ยืน",61160],["Vอ้อ",61160],["ระบำ",61160],[1218,61160]]],[822,[[1108,61150],["พลวงสองCง",61150],[822,61150],[176,61150],["hเขียว",61150]]],[1219,[[503,61130],[1205,61130],["Jพึ่ง",61130],["Eโพ",61130],[1219,61130],[73,61130],["หมกแถว",61130],["หลุมเข้า",61130],["Lรอบ",61130]]],[1220,[["Jพง",61110],["Jโพ",61110],[99,61110],[1220,61110],["ACงนวล",61110],[562,61110],[150,61110],["อุทัยเก่า",61110],["SกวางN",61110],["SDแกรก",61170]]],[1221,[[452,61170],["สุขฤทัย",61170],[1221,61170]]],["Fอุทัยธานี",[["Tขวาง",61000],[585,61000],["Eซุง",61000],["Qซึม",61000],["สะแกกรัง",61000],["Aพังค่า",61000],[622,61000],[758,61000],["Ahแบน",61000],["หาดทนง",61000],["อุทัยu",61000],["Pเทโพ",61000],["เนินแจง",61000],["Rเหล็ก",61000]]]]],["อุบลราชธานี",[["mข้าวปุ้น",[["กาบิน",34270],["ข้าวปุ้น",34270],["AทันQ",34270],["แก่งเค็ง",34270],["Rสวาง",34270]]],[1222,[["ZไฮM",34000],[1222,34000],["EF",34000],["เหล่าแa",34000]]],["ตระการพืชผล",[["กระเดียน",34130],["mยาลวน",34130],["กุศกร",34130],[1011,34130],["ขุหลุ",34130],[1196,34130],["Zเจริญ",34130],["ตระการ",34130],[409,34130],["ถ้ำแข้",34130],[279,34130],["Cพิน",34130],["Cสะไม",34130],[1206,34130],["สะพือ",34130],[622,34130],["Lฝ้ายพัฒC",34130],["เกษม",34130],["เซเป็ด",34130],["เป้า",34130],[1068,34130],["Rกุง",34130],["ไหล่J",34130]]],[1223,[["Zหว้า",34330],["จิกเทิง",34330],[1223,34330],["Cคาย",34330],[242,34330],[161,34330]]],["JOอุดม",[["mเรือ",34160],["Cห่อม",34160],["Cเกษม",34160],["Aอ้ม",34160],["Kชำแระ",34160]]],[1224,[[1224,34280],["Bตูม",34280],[1008,34280],[214,34280],[992,34280],["โสกแสง",34280]]],[125,[["กองs",34170],[125,34170],["พะลาน",34170],["พังเคน",34170]]],[1225,[[131,34160],[1225,34160],["Cเรือง",34160]]],["Qขุ่น",[[991,34260],["lเกา",34260],[121,34260],["ไพบูลย์",34260]]],["Qยืน",[["บุเปือย",34260],[897,34260],[984,34260],["สีวิเชียร",34260],["เก่าขาม",34260],["โซง",34260],["โดมประดิษฐ์",34260]]],["บุณฑริก",[["คอแลน",34230],[405,34230],[960,34230],["Bแมด",34230],["Aสะโน",34230],["Lข่า",34230],[1074,34230],[114,34230]]],["พิบูลมังสาหาร",[["mชมภู",34110],["Tจิก",34110],[204,34110],[405,34110],["Bแขม",34110],["พิบูล",34110],["ระเว",34110],["AXฮี",34110],[333,34110],[1226,34110],["Rกาหลง",34110],[1013,34110],[918,34110],["ไร่ใต้",34110]]],[1227,[["ดุมM",34140],[1006,34140],[1227,34140],["Uสักกระโพหลุ่ม",34140],["Uโยภาพ",34140],["AdM",34140],[1070,34140],[1020,34140],[1228,34140],["Aไข่นก",34140],["เตย",34140],["เหล่าบก",34140],[489,34140],[1021,34140]]],[1229,[["Zขวาง",34190],["ZQแซบ",34190],[376,34190],[507,34310],[1064,34190],["บุ่งหวาย",34310],["บุ่งไหม",34190],[1229,34190],["สระสมิง",34190],["Aกินเพล",34190],["Lขะยูง",34310],["FOไค",34190],[335,34190],["Rผึ้ง",34190],["Rโหนน",34190],[996,34190]]],["OFu",[["Zไหล",34250],[514,34250],["ตะบ่าย",34250],[250,34250],["Cเลิน",34250],["ลาดควาย",34250],["วาริน",34250],[943,34250],["หCมแท่ง",34250],["เอือดM",34250],["แก้งกอก",34250]]],["สว่างวีระวงศ์",[[284,34190],["บุ่งมะแลง",34190],[1014,34190],["แก่งโดม",34190]]],[242,[[220,34360],["ค้อf",34360],["บอน",34360],[242,34360],[903,34360],[692,34360],[498,34360],[1226,34360],["Rกาเล็น",34360]]],["สิรินธร",[["คันไร่",34350],[935,34350],["ช่องเม็ก",34350],["นิคมสร้างตนเองvโดมf",34350],["ฝางZ",34350],["Rก่อ",34350]]],[1230,[[220,34170],["Cแวง",34170],["Aนกทา",34170],[159,34170],[899,34170],[1154,34170],[1230,34170],["เจียด",34170],["แก้งo",34170]]],[1231,[[1203,34320],["ก่อเอ้",34150],["ค้อN",34150],["ชีทวน",34150],["Eไห",34150],["ธาตุf",34150],["CZM",34150],[359,34320],["Bไทย",34320],["Uขี้นก",34150],[235,34150],["สร้างถ่อ",34150],["สหธาตุ",34150],[1228,34150],["eT",34150],[1231,34150],["แaหม้อ",34150],[524,34320]]],["เดชอุดม",[[1005,34160],["mประทาย",34160],["Zครั่ง",34160],["ตบหู",34160],["Jเทิง",34160],["EYO",34160],["Cกระแซง",34160],["Cส่วง",34160],["Cเจริญ",34160],[960,34160],["Vโมง",34160],[116,34160],["Fเดช",34160],["แก้ง",34160],[214,34160],[114,34160]]],["Fอุบลราชธานี",[["กระโสบ",34000],["mลาด",34000],["ขามM",34000],[991,34000],["ปทุม",34000],[1067,34000],["Aขอน",34000],[421,34000],[904,34000],["แจระแม",34000],[181,34000],["ไร่f",34000]]],[1232,[["Aบก",34000],[1232,34000],["แพงM",34000],[998,34000]]],[1233,[["CYw",34220],["AแสงM",34220],[191,34220],[978,34220],[1233,34220]]],[918,[["kM",34340],[1134,34340],[558,34340],[242,34340],["เหล่าn",34340],[918,34340]]]]],[180,[[1234,[["นรสิงห์",14130],[459,14130],["Dเสด็จ",14130],[1234,14130],["สายN",14130],["เอกราช",14130],["โผงเผง",14130],[810,14130]]],["วิเศษtชาญ",[["IขCก",14110],["ตลาดu",14110],[284,14110],["Dจัก",14110],[778,14110],["ยี่ล้น",14110],["ศาลเจ้าโรงN",14110],["สาวร้องไห้",14110],["สี่ร้อย",14110],["หลักb",14110],[588,14110],["Lคันแหลน",14110],["hจำศีล",14110],["hดำพัฒC",14110],["hวง",14110]]],[1235,[["มงคลธรรมนิมิต",14160],["ราษฎรพัฒC",14160],[1235,14160],["อบทม",14160],["Ykพันธ์",14160]]],["Fอ่างN",[["Iวัว",14000],["จำปาหล่อ",14000],["ตลาดกรวด",14000],["ตลาดc",14000],[306,14000],["Bรี",14000],["Bอิฐ",14000],["Bแห",14000],[1178,14000],["มหาดไทย",14000],[416,14000],[294,14000],[809,14000],["โพสะ",14000]]],[1236,[["จำลอง",14150],["Bพราน",14150],[1138,14150],["Oพราน",14150],["สีXN",14150],[978,14150],[1236,14150]]],[173,[["Zหยาด",14120],["ทางW",14120],[639,14120],[473,14120],["Dเจ้าฉ่า",14120],[339,14120],["Uช้าย",14120],["รำมะสัก",14120],[469,14120],["AHไก่",14120],[457,14120],["อินทประมูล",14120],["อ่างb",14120],["Kพุทรา",14120],["Yรังนก",14120]]],[1237,[["จรเข้ร้อง",14140],["ชะไว",14140],["tฤทธิ์",14140],["ตรีณรงค์",14140],["ราชสถิตย์",14140],["หลักฟ้า",14140],["เทวราช",14140],["ไชยภูมิ",14140],[1237,14140]]]]],["เชียงราย",[["ขุนlล",[["ต้า",57340],[1025,57340],["Uฮอม",57340]]],["ดอยc",[["ปงf",57110],["AVก่อ",57110],[569,57110]]],[1238,[["Vแงะ",57190],[1238,57190],["OYเงิน",57190],["สันมะค่า",57190],[810,57190]]],["พญาเม็งราย",[["lดควัน",57290],["เม็งราย",57290],[831,57290],["Hเปา",57290],["ไม้ยา",57290]]],["พาน",[["ดอยn",57120],[0,57120],["ทานตะวัน",57280],["ธารN",57250],["Vหุ่ง",57120],["kZ",57120],[1239,57120],[671,57120],["สันมะเค็ด",57120],["eง้ม",57120],["เจริญF",57120],[1204,57120],["zห้าว",57120],["Hอ้อ",57120],["Hเย็น",57280]]],[667,[["ครึ่ง",57140],["บุญเรือง",57140],["ริมโขง",57140],["OTt",57140],[666,57140],["Lซ้อ",57140],[828,57140]]],["เชียงแสน",[["Bแซว",57150],[827,57150],["OTมูล",57150],[828,57150],["Hเงิน",57150],["โยนก",57150]]],["เทิง",[[535,57160],["ตับเต่า",57160],["ปล้อง",57230],["OTไชย",57230],["สันin",57160],[951,57160],["Aแรด",57230],["เชียงเคี่ยน",57230],[828,57160],["Hลอย",57230]]],["Fเชียงราย",[["ดอยลาน",57000],["ดอยฮาง",57000],["Eสาย",57000],["Eสุด",57100],["Cงแล",57100],[703,57100],["Vอ้อTt",57000],["รอบz",57000],["ริมกก",57100],[1240,57000],["Lชมภู",57000],["Lสัก",57000],[828,57000],["Hกรณ์",57000],["Hข้าวต้ม",57100],["Hยาว",57100]]],[900,[["Tศิลา",57210],["ผาn",57210],["Fชุม",57210],[900,57210],[1036,57210]]],["zVเป้า",[[963,57170],[1178,57170],["สันสลี",57170],[828,57170],["zกาหลง",57260],["Hเจดีย์",57260],["Hเจดีย์u",57260]]],["zเชียงรุ้ง",[["aมหาวัน",57210],["Jก่อ",57210],[821,57210]]],["zแก่น",[[32,57310],["ปอ",57310],["kยาย",57310],["หล่ายงาว",57310]]],[442,[["จอมสวรรค์",57110],["จันจว้า",57270],["จันจว้าใต้",57270],["Eข้าวเปลือก",57110],[821,57110],["Vตึง",57110],["Oค้ำ",57110],[1240,57110],["HZ",57240],[442,57110],["Hไร่",57240]]],[1241,[[987,57240],[1241,57240],["Hสลองนอก",57110],["Hสลองใน",57110]]],[829,[["จอมหมอกb",57250],["aมะดะ",57250],["Xสลี",57250],["Vก่อดำ",57250],["โป่งแพร่",57000]]],[1242,[["Eก๊อ",57180],[1238,57180],["วาวี",57180],[833,57180],["เจดีย์c",57180],[1041,57180],[1242,57180]]],[1243,[["Bด้าย",57220],["OFชุม",57130],["Lไคร้",57220],[431,57130],["zพางZ",57130],[1243,57130],["โป่งn",57130],["โป่งผา",57130]]]]],[1012,[["กัลยาณิวัฒC",[[1201,58130],["แจ่มc",58130],["Hแดด",58130]]],[23,[["ข่วงเปา",50160],["ดอยb",50160],[468,50160],["Bแปะ",50240],["สบเตี๊ยะ",50160],["Hสอย",50240]]],["ดอยสะเก็ด",[[641,50220],[887,50220],["Vป้อง",50220],["Vลาน",50220],["Vเมี่ยง",50220],["ลวงo",50220],["สง่าB",50220],["สันปูเลย",50220],[50,50220],["เชิงดอย",50220],["เทพเสด็จ",50220],["Hคือ",50220],["Hฮ้อยเงิน",50220],["Hโป่ง",50220]]],[1244,[[1244,50160],["Uคราม",50160],[669,50160],[671,50160]]],[1245,[[1245,50260],["Eเดื่อ",50260],["บงตัน",50260],["Bแอ่น",50260],["มืดกา",50260],["โปงJ",50260]]],["ฝาง",[["ม่อนปิ่น",50110],[1240,50110],[828,50110],["Hข่า",50320],["Hคะ",50110],["Hงอน",50320],["Hสูน",50110],[170,50110]]],["พร้าว",[[400,50190],[1246,50190],[963,50190],["Vตุ้ม",50190],["Vไหน่",50190],[1240,50190],["เขื่อนผาก",50190],[828,50190],["Hปั๋ง",50190],["Hแวน",50190],["โหล่งขอด",50190]]],["สะเมิง",[[127,50250],["ยั้งเมิน",50250],["สะเมิงo",50250],["สะเมิงใต้",50250],["Hสาบ",50250]]],[1247,[["ต้นเปา",50130],[204,50130],["บวกค้าง",50130],["ร้องวัวแa",50130],[1239,50130],[1247,50130],[759,50130],["ออนใต้",50130],["แช่d",50130],["Hปูคา",50130]]],[1240,[[1048,50210],["สันif",50210],["สันic",50210],["สันCเม็ง",50210],["สันVเปา",50210],["สันWเนตร",50210],["Aจ๊อม",50210],["Aหาร",50290],["Aแหย่ง",50210],["Fเล็น",50210],["Hแฝก",50290],["Hแฝกu",50290]]],[894,[["Jต้อม",50120],["Jสะโตก",50120],["EGพร้าว",50120],["Qgc",50120],[4,50120],["Bแม",50120],["มะขามc",50120],["มะขุนหวาน",50120],["ยุหว่า",50120],[1239,50120],["Hก๊า",50120]]],[558,[["ขัวมุง",50140],["ชมภู",50140],[1248,50140],["Eกว้าง",50140],["EGlล",50140],["Vบง",50140],["Uเนิ้ง",50140],[1240,50140],[558,50140],["Aผึ้ง",50140],["Aแฝก",50140],[676,50140]]],[1249,[["ขุนคง",50230],[1246,50230],[1250,50230],["Bแหวน",50230],["สบHข่า",50230],["สันผักหวาน",50230],["Aควาย",50230],["Aตอง",50340],["Aแก๋ว",50230],[1249,50230],["หารb",50230]]],[1251,[["Cเกียน",50310],["ม่อนจอง",50310],["Uเปียง",50310],["สบโขง",50310],[1251,50310],[448,50310]]],[1252,[["Cคอเรือ",50240],["gสลี",50240],["gc",50240],[365,50240],[1249,50240],[1252,50240]]],[1253,[["Jข้าวพวง",50170],["ปิงโค้ง",50170],[1253,50170],["Fคอง",50170],["Fงาย",50170],["Fนะ",50170],["Hนะ",50170]]],["Fเชียงu",[["dคลาน",50100],["dม่อย",50300],[644,50300],[230,50000],[1039,50300],[1238,50100],["Wสิงห์",50200],["ฟ้าฮ่าม",50000],["วัดเกต",50000],[664,50200],["สันผีเสื้อ",50300],["สุเทพ",50200],["AVครั่ง",50000],[542,50000],["หายยา",50100],["Hเหียะ",50100]]],["zแหง",[["เปียงc",50350],["Fแหง",50350],["แสนไห",50350]]],["Hริม",[[991,50180],[1248,50180],["ริมo",50180],["ริมใต้",50180],["สะลวง",50330],["สันโป่ง",50180],[759,50180],["เหมืองb",50180],[677,50180],["Hแรม",50180],["โป่งแยง",50180]]],["Hวาง",[["Tเปา",50360],["Jปี้",50360],[818,50360],["Bกาด",50360],["Hวิน",50360]]],["Hออน",[["ทาo",50130],["Bสหกรณ์",50130],[825,50130],["ออนw",50130],["ออนo",50130],[1051,50130]]],[1254,[["Eตอน",50280],[468,50280],["มะลิกา",50280],["สันต้นหมื้อ",50280],["HCวาง",50280],["Hสาว",50280],[1254,50280]]],["Hแจ่ม",[["กองแขก",50270],["ช่างเคิ่ง",50270],[965,50270],["Bทับ",50270],["ปางpฝน",50270],["HCจร",50270],["Hศึก",50270]]],[1255,[["กื้ดd",50150],[991,50150],["ช่อแล",50150],[321,50150],[381,50150],[1256,50150],["สบเปิง",50150],["สันVU",50330],["สันมหาพน",50150],["อินทขิล",50150],["Fก๋าย",50150],["HหอW",50150],[1255,50150]]],["ไชยปราการ",[["ปงตำ",50320],["Oaเย็น",50320],[103,50320],["Hทะลบ",50320]]]]],["เพชรบุรี",[[1257,[[1257,76120],["TขุนL",76120],[1028,76120],[774,76120],["qWยา",76120],["Aศาลา",76120],["Lio",76120],[5,76120],["ไร่uพัฒC",76120]]],[410,[["กลัดc",76130],["Eคอย",76130],[410,76130],["Eแลง",76130],["Eไม้รวก",76130],["Bในa",76130],["ปึกเตียน",76130],["มาบปลาเค้า",76130],["Uหย่อง",76130],["Gไคร้",76130],[68,76130],["Sกระปุก",76130]]],[1258,[["ตำหรุ",76150],["ถ้ำรงค์",76150],[284,76150],["Eเสน",76150],["Bทาน",76150],[1258,76150],["Bหาด",76150],["ลาดY",76150],["สมอพลือ",76150],["สะพานไกร",76150],["Aกระเจ็ด",76150],["Aกะปุ",76150],["Lข้อง",76150],[1094,76150],[1121,76150],["ไร่มะขาม",76150],["ไร่สะท้อน",76150],["ไร่K",76150]]],[1148,[[41,76110],["Eแร้งออก",76110],["Dขุนy",76110],["Dครก",76110],["Dตะบูน",76110],["Dตะบูนออก",76110],[306,76110],[1148,76110],["rทะเล",76110],["แหลมผักเบี้ย",76100]]],[1175,[[82,76160],["UQกลัดo",76160],["UQกลัดใต้",76160],[1175,76160]]],[1259,[["ทับคาง",76140],["Dเค็ม",76140],[369,76140],["Aชุมพล",76140],["Aชุมพลo",76140],["Aปรง",76140],[96,76140],["LEd",76140],[1260,76140],[1259,76140]]],["Fเพชรบุรี",[["Iกระแชง",76000],["ช่องสะแก",76000],[396,76000],["ต้นมะพร้าว",76000],["ต้นมะk",76000],[974,76000],[753,76000],["Cพันq",76000],["Cวุ้ง",76000],[51,76000],["Dจาน",76000],[791,76000],[1145,76000],["Gตะโก",76000],["สำมะโรง",76000],["AขCน",76000],[757,76000],[106,76000],["eสะพาน",76000],["หาดเจ้าสำราญ",76100],["zคอย",76000],["โพW",76000],["โพไร่หวาน",76000],["ไร่ส้ม",76000]]],[1261,[["Vเด็ง",76170],["พุสวรรค์",76170],[439,76170],[275,76170],["LHเพรียง",76170],[1261,76170]]]]],["เพชรบูรณ์",[[670,[[670,67150],["ซับพุทรา",67150],["aขุย",67190],["ตะmไร",67190],[32,67150],[349,67190],["พุทธบาท",67150],["ลาดแค",67150],["ศาลาลาย",67150]]],[1262,[[1262,67260],["Gกวาง",67260],["หลักด่าน",67260],["Kมน",67260]]],[1263,[["กันจุ",67160],["ซับสมอทอด",67160],["ซับไม้แa",67160],[1263,67160],["พญาG",67160],[875,67230],[109,67160],[179,67160],["Aแจง",67160]]],[1264,[["ซับเปิบ",67240],["ท้ายa",67240],["Gศาล",67240],[241,67240],[1264,67240]]],["วิเชียรบุรี",[["ซับf",67180],[267,67180],["Eโรง",67130],[1265,67130],["xกระจับ",67130],["gรัง",67130],["พุขาม",67180],["พุเตย",67180],["ภูQหยด",67180],["Uสาว",67130],[615,67180],["สระประดู่",67130],[948,67130],["Kปรง",67130]]],[1266,[["Iกระจัง",67170],["Cสนุ่น",67170],["ประดู่n",67170],[1266,67170],["สระกรวด",67170],["Aย่างทอย",67170],[121,67170]]],[73,[["กองทูล",67140],["Eด้วง",67140],["Eแa",67140],["Cเฉลียง",67220],["XวัฒC",67140],["gไทย",67140],["Bโภชน์",67140],["Un",67220],["GEดี",67140],["Gโบสถ์",67140],[73,67140],[955,67220],["เพชรละคร",67140]]],[1267,[["dตะลูด",67110],[1132,67110],["Eอิบุญ",67110],["Qก้อ",67110],["Qชุน",67110],["Qเฮี้ย",67110],[384,67110],["บุ่งQเต้า",67110],[4,67110],["Bติ้ว",67110],[902,67110],[352,67110],[383,67110],[540,67110],["rดุก",67110],["ฝายCแซง",67110],["ลานบ่า",67110],["วัดV",67110],["สักหลง",67110],["Aสว่าง",67110],["Aไขว่",67110],[1267,67110],[354,67110]]],[1268,[["lดกลอย",67120],["Cซำ",67120],["CP",67120],[1007,67120],[603,67120],["Gบาล",67120],[259,67120],[1268,67120],["pฮาว",67120]]],[1269,[[90,67270],["ริมสีk",67270],["สะเดาะพง",67270],["AHC",67270],[1269,67270],["เข็กf",67280],["แคมป์สน",67280]]],["Fเพชรบูรณ์",[["ชอนไพร",67000],["aมูลเหล็ก",67000],["ตะเบาะ",67000],["Eพล",67250],["Cงั่ว",67000],[331,67000],[1190,67210],[1265,67000],[238,67000],["Bโตก",67000],["Vเลา",67000],["ระวิง",67210],[377,67210],["สะเดียง",67000],["Lสะแก",67210],[313,67000],[181,67000]]]]],["เลย",[[1270,[["กกสะทอน",42120],[1270,42120],[131,42120],["Cหอ",42120],["rหมัน",42120],[909,42120],["อิปุ่ม",42120],[210,42120],[315,42120],[993,42120]]],[1194,[[1194,42140],["Qทูน",42140],["Qแคม",42140],[159,42140],["อาฮี",42140],[1124,42140]]],[1271,[["Eสวรรค์",42210],[689,42210],["CดอกZ",42210],[1271,42210]]],[1272,[["Cพึง",42170],["Cมาลา",42170],[1272,42170],["เหล่ากอหก",42170],["แสงภา",42170]]],[1273,[["ชมเจริญ",42150],[1273,42150],["หาดคัมภีร์",42150],["Lgซืน",42150],["Lพิt",42150],["เชียงกลม",42150]]],[1274,[["Edคล้อง",42240],["Bเพิ่ม",42240],[1274,42240],["Rปอแa",42240],["RVซาง",42240]]],[1275,[["ผานกเค้า",42180],[1275,42180],[940,42180],["Lส้ม",42180]]],[538,[["ภูหอ",42230],["Aคัน",42230],["Lสีเสียด",42230],["เลยGไสย์",42230],["แก่งOภูมิ",42230]]],["ภูเรือ",[[230,42160],["ปลาบ่า",42160],["ร่องจิก",42160],["ลาดค่าง",42160],["สานตม",42160],[103,42160]]],[1276,[[0,42130],["rปวน",42130],["ผาf",42130],["ผาบิ้ง",42130],[1276,42130],[500,42130],["Aงิ้ว",42130],[1175,42130],["Sc",42130],[716,42130]]],[151,[["lดข่า",42190],["ปวนพุ",42190],[151,42190]]],[674,[[1213,42110],[1064,42110],["Cซ่าว",42110],["บุฮม",42110],["rตม",42110],["หาดiขาว",42110],[276,42110],[674,42110]]],["Fเลย",[["กกดู่",42000],["กกN",42000],["mป่อง",42000],["tพฤกษ์",42000],["Cดินดำ",42000],["Cอาน",42000],["Cอ้อ",42100],[760,42000],[1032,42000],["Qสวย",42000],["Qหมาน",42000],["Oสองรัก",42100],[1052,42000],["เสี้ยว",42000]]],[659,[["ทรัพย์ไพวัลย์",42220],["ผาqยอด",42220],["ผาอินทร์แปลง",42220],[659,42220]]]]],["แพร่",[[1277,[["JO",54140],["Qเลา",54140],["Bz",54140],[1277,54140],["ร้องเข็ม",54140],[1260,54140],["Hi",54140],["HUlล",54140],["HUร้อง",54140],["HUฮ่อ",54140],["hโทน",54140]]],["ลอง",[["ต้าผามอก",54150],["Jแล้ง",54150],["gเหล็กลอง",54150],[820,54150],["rกาง",54150],[221,54150],["Lอ้อ",54150],["zต้า",54150],["Hปาน",54150]]],[1278,[["Cพูน",54160],[827,54160],[1278,54160],["สรอย",54160],["Hป้าก",54160],["Hพุง",54160],["Hเกิ๋ง",54160]]],["สอง",[["Jน้าว",54120],[4,54120],["Bหนุน",54120],["สะเอียบ",54120],[944,54120],["Lหม้าย",54120],[980,54120],["แดนชุมพล",54120]]],[1279,[["Tมูล",54130],[1280,54130],["Bกวาง",54130],[1281,54130],[1250,54130],[209,54130],["Wc",54130],["ร่องกาศ",54130],["สบสาย",54130],[1279,54130],[734,54130],["zN",54000]]],[1282,[["ตำหนักธรรม",54170],["Jแค้ว",54170],["Qรัด",54170],[1010,54170],[1282,54170],[1283,54170]]],[1284,[["ปงVหวาย",54110],[354,54110],[1284,54110],["Hจั๊วะ",54110],[878,54110]]],["Fแพร่",[["กาญจC",54000],["ช่อแฮ",54000],["Jกวาว",54000],["Jโฮ้ง",54000],[32,54000],["Cจักร",54000],[1280,54000],[1187,54000],[867,54000],["Vแมต",54000],["ร่องฟอง",54000],["Gธง",54000],["Gหงษ์",54000],["สวนเขื่อน",54000],["Lม้า",54000],["เหมืองหม้อ",54000],[1283,54000],["Hยม",54000],["Hหล่าย",54000],[675,54000]]]]],["Hฮ่องสอน",[[1285,[[1285,58140],["Fปอน",58140],["Hกิ๊",58140],["Hยวมf",58140],["Hอูคอ",58140],["Hเงา",58140]]],[1286,[["ถ้ำลอด",58150],["Cปู่ป้อม",58150],[1286,58150],["สบป่อง",58150]]],["ปาย",[[419,58130],["Fแปง",58130],[1036,58130],["zใต้",58130],["HCเติง",58130],["Hฮี้",58130],["โป่งสา",58130]]],[1287,[["กองก๋อย",58110],["Vโปง",58110],[1287,58110],["Hคะตวน",58110],["Hสวด",58110],["Hqแลบ",58110]]],["FHฮ่องสอน",[["จองZ",58000],["ปางหมู",58000],["ผาgง",58000],["หมอกจำแป่",58000],["Lปูลิง",58000],["Lผา",58000],[955,58000]]],[1288,[["ขุนHลาf",58120],["Eผาปุ้ม",58120],["สันติคีรี",58120],["Lห้อม",58120],["HCจาง",58120],[1288,58120],["Hลาc",58120],["Hโถ",58120]]],[1289,[[1281,58110],[1256,58110],["เสาp",58110],["Hคง",58110],["Hยวม",58110],[1289,58110],["Hเหาะ",58110]]]]]]'), am = "iขาว|ปลายWยา|vทับ|ดินแa|Bw|SM|IU|Sพนม|สินปุน|Sดิน|rQ|SN|oI|ตลิ่งชัน|KU|Iสาน|Dชัน|Iเตย|Iตัน|Wโขนง|คันCยาว|จตุจักร|ลาดยาว|จอมN|Dขุนเทียน|Dมด|TF|ดุสิต|Dพรม|ทวีวัฒC|Jครุ|Dกะปิ|Eข้าม|Dคอแหลม|Dซื่อ|DC|Dบอน|Dพลัด|Dอ้อ|Dรัก|Dเขน|Eแร้ง|Dแค|Dh|หลักสอง|ปทุมวัน|Gu|ประเวศ|ดอกไม้|Aบอน|สำราญราษฎร์|Dจาก|Iขวาง|คูหาสวรรค์|Dด้วน|มีนบุรี|ยานCวา|ราษฎร์บูรณะ|ลาดกระบัง|ลาดพร้าว|GNหลาง|พลับพลา|วัฒC|สวนc|สะพานสูง|สัมพันธวงศ์|ตลาดf|สายไหม|Aจอก|กระทุ่มราย|Aแขม|Lขวาง|ด่านมะขามเตี้ย|Ah|pดาด|Eมะกา|Eเรือ|Eเสา|Eไม้|แสนตอ|Ek|JN|Eตะคร้อ|Bu|พังตรุ|Sf|gพลอย|Aรี|พนมทวน|Tเจดีย์|Jสมอ|Aสาหร่าย|Aโรง|Eกระดาน|Aเป็ด|Aปรือ|Aปลาไหล|Lกระเจา|Gh|Bเก่า|Bใต้|rแพรก|Gเย็น|AX|เลาขวัญ|Aปลิง|Aโสน|yโยค|Gกระแจะ|Oมงคล|สิงห์|กาฬสินธุ์|กมลาไสย|Aแปน|sn|Cขาม|สมสะอาด|qขา|Aห้าง|Zk|Cบอน|Kสะอาด|Tจาน|Eคันโท|mจิก|Clล|Cคู|gb|Cมน|สงเปลือย|Uตลาด|Cดี|Cเชือก|eงัว|eCZ|อุ่มเม่า|Rสูง|ร่องZ|qัคคี|สมเด็จ|Oสมเด็จ|Aแวง|หมูม่น|สหัสขันธ์|Cมะเขือ|นิคม|ภูสิงห์|Rศิลา|สำราญ|AกุงO|Aสรวง|Ap|AM|Zบง|Lเม็ก|iN|ep|Rสะอาด|Sวง|Aผือ|ขมิ้น|Aกุง|เชียงเครือ|sN|h|กำแพงเพชร|Iขลุง|GU|Gy|eถนน|โป่งQร้อน|xqัคคี|เทพนิมิต|YN|พรานกระต่าย|ลานกระบือ|Ac|นครชุม|GN|สระb|อ่างN|ในF|yn|พานN|มหาt|ขอนแก่น|กระนวน|Qอ้อม|Bฝาง|Aโก|Aโน|LU|Lโจด|ชนบท|Bแท่น|Gแสง|Oบุญเรือง|ชุมแพ|CAทุ่ม|Cเพียง|Rอุดม|Lเตย|Qพอง|mQใส|iมูล|XM|Bขาม|kหวาน|สะอาด|Bเหล่า|Kn|Bแฮด|Aแซง|Kสำราญ|Rสมบูรณ์|Bh|AQใส|pตั้ง|Fเพีย|Wยืน|ขามป้อม|eJ|ภูผาม่าน|Cฝาย|Lk|ภูz|ดินดำ|Cชุมแสง|Cหว้า|สงเปือย|Eศาลา|Cข่า|Cn|สีชมพู|aลาน|Oสุข|Aแa|ACZ|BK|Aสองห้อง|ตะกั่วV|Gp|สำโรง|Aเม็ก|Ahล้อม|Aเรือ|Bผือ|UZ|RN|Rทัน|CZ|Ba|Kสูง|Sสวนกวาง|Cงิ้ว|เปือยf|Gk|Bค้อ|Bหว้า|ศิลา|Aตูม|Fเก่า|แaM|Kสี|แวงf|ก้านเหลือง|แวงM|ซับสมบูรณ์|Bหัน|Aปลาหมอ|Rแa|ขลุง|g|Eu|Iขุด|สองพี่น้อง|Sb|Cยายอาม|มะขาม|Ec|ทับd|Iพลู|ตะเคียนN|ตลาด|Ed|แก่งหางแมว|IM|Iเขื่อน|Dตลาด|Eตะเกียบ|Dคล้า|ey|DQเปรี้ยว|xQรักษ์|ศาลาแa|Dปะกง|BY|Ti|สCมจันทร์|เทพราช|พนมสารคาม|Aยาว|Aแหน|Fu|DW|Dเตย|Db|Gตะเคียน|หน้าF|แปลงยาว|eสำโรง|Dละมุง|Cเกลือ|LM|Sไม้b|โป่ง|gN|ธาตุN|Bx|พนัสนิคม|Jขวาง|Bd|วัดc|วัดโบสถ์|Dหัก|Pลอย|Oราชา|x|Aขาม|สัตหีบ|Pจันทร์|CV|Bสวน|อ่างศิลา|เสม็ด|แสนสุข|tCท|Eฉนวน|วัดสิงห์|gแร่|Gหมัน|สรรพยา|Dc|Aมะโมง|mจอก|สะพานp|หันคา|เนินขาม|Et|Bกล้วย|คอนสวรรค์|ช่องqหมอ|Bโสก|Oสำราญ|Lไร่|คอนสาร|aw|aบัง|Rคูณ|Bกอก|ส้มป่อย|AXบาน|AXK|Aโดน|ซับM|Blล|Bเพชร|eทะเล|Bเขว้า|สระพัง|Aคู|แหลมN|BT|Bแก้ง|AXระเหว|AXแa|คูF|Gชมภู|BX|BU|Bเดื่อ|Bเป้า|Aข่า|Bไร่|บุ่งคล้า|Bค่าย|รอบF|ลาดM|Lบง|Rสำราญ|Aสังข์|ชุมพร|ตะโก|Pมะพร้าว|Pยอ|Eแซะ|TU|Pรัง|พะโต๊ะ|ละแม|Jc|สวนแตง|สวี|Ep|Cสัก|CY|หลังสวน|DQจืด|Bควน|lกแดด|EU|CJ|Dหมาก|BC|ตรัง|กันตัง|ย่านซื่อ|Gวน|ปะเหลียน|Jยาว|ย่านlขาว|Ag|รัษฎา|หาดสำราญ|Lยอด|Eงิ้ว|Dกุ้ง|Sขาว|Qผุด|Pกูด|Pหมาก|Pd|Sสมิง|แหลมงอบ|EสองU|พบW|qเงา|ยกกระบัตร|ย่านรี|Gจันทร์|อุ้มผาง|Hกลอง|Hจัน|ระแหง|AXใต้|โป่งแa|Hระมาด|Wธาตุ|Hตื่น|Hสอด|Hปะ|นครCยก|Nหลาง|Bพร้าว|rพลี|Aแสง|Kกรวด|องครักษ์|ชุมพล|Dปลากด|Ei|BM|SW|นครปฐม|กำแพงแสน|GQเขียว|Aกระทุ่ม|Tตูม|Bc|qง่าม|นครtO|งิ้วราย|Dกระเบา|Dระกำ|Dเลน|Dปลา|มหาสวัสดิ์|qพราน|Iu|ทรงคนอง|Dd|ทัพc|Jf|Gตะกู|Aงูเหลือม|Eอุเทน|Rlล|ธาตุพนม|ฝั่งแa|sแพง|Cทม|Cงัว|Cแก|พิมาน|Bแพง|hล้อม|ปลาr|Aฮี|Kสว่าง|AY|Oสงคราม|ขามเฒ่า|Zเตย|aขวาง|Ci|อาจqารถ|Ylก|Eลาด|sสวรรค์|Ceg|Cใน|ขามทะเลสอ|ขามสะแกแสง|RF|TM|Fคง|ครบุรี|จักราช|สีสุก|Aพลวง|pโคน|ชุมพวง|ตลาดy|Aหลัก|Rรัง|ด่านขุนทด|ตะเคียน|Ay|Xลาย|Aหว้า|ด่านd|Bเหลื่อม|ประทาย|Jสว่าง|Kw|งิ้ว|T|ตูม|ภูc|Kไทย|rช่อง|wa|Aหอย|พิมาย|aM|นิคมสร้างตนเอง|Aระz|ไพล|ไทยqัคคี|สีคิ้ว|กฤษณา|มิตรภาพ|ลาดXขาว|สีดา|qF|สูงเนิน|Cw|Aตะไก้|สารภี|ไทยเจริญ|Lแถลง|เฉลิมWเกียรติ|AU|เทพารักษ์|BP|Aไข่Q|FU|เสิงสาง|แก้งสCมนาง|โชคt|Eเยี่ยม|มะค่า|หลุมข้าว|โตนด|สำพะเนียง|Rไทย|ขนอม|JY|ฉวาง|ชะอวด|dw|ถ้ำพรรณรา|Jสง|Qตก|Aหงส์|JM|ปริก|Tตะโก|eตะพาน|นบพิตำ|Dขัน|rพนัง|If|dซ้าย|Cสาร|พิปูน|ร่อนพิบูลย์|เสาธง|ลานสกา|ขุนทะเล|สิชล|ฉลอง|เชียรM|Bเนิน|ชุมlบง|ชุมแสง|ฆะมัง|Kหม้อ|lกฟ้า|สุขสำราญ|lคลี|Aโพ|Eตะโก|Tคา|ทำนบ|GM|Aกรด|เนินมะกอก|Aกลับ|Lร่วม|เก้าเลี้ยว|มหาโพธิ|Aเต่า|ea|Dk|Bแก่ง|Wนอน|Hวงก์|Hเปิน|โกรกW|ไพศาลี|Dกรวย|DXN|ละหาร|DM|rเกร็ด|Iข่อย|IWอุดม|Eอิฐ|Dพลับ|Dพูด|ตลาดขวัญ|yf|จะแนะ|dเผือก|พร่อน|บาเจาะ|ยี่งอ|รือเสาะ|Oสาคร|กาหลง|Oบรรพต|สุคิริน|ภูSN|สุไหงปาดี|สุไหงโก-ลก|vภู|Kเคียน|แว้ง|เอราวัณ|Jd|EGผา|จอมW|lลชุม|Oภูมิ|Cf|สถาน|เชียงของ|ปัว|สองแคว|ชนแดน|สันติสุข|เชียงw|Wพุทธบาท|เชียงคาน|ในz|ไชยสถาน|Hสา|Hจริม|xกาฬ|xโขงหลง|rคาด|พรเจริญ|Tหญ้าCง|Vแฝก|Oชมภู|Aed|Oวิไล|เซกา|Eสะอาด|Aทุ่ม|ZCดี|Kก่อง|กระสัง|กันทรารมย์|vดวน|Lสำราญ|Fh|pเหล็กไฟ|ชำนิ|Cงรอง|Bสิงห์|สะเดา|Bดู่|Oสว่าง|Bกรวด|ปราสาท|pลาด|Bด่าน|Go|ประโคนt|By|ประทัดบุ|Kตูม|ไพศาล|ปะZ|Kขมิ้น|พุทไธสง|หายโศก|ละหานi|vปลายมาศ|แสลงพัน|Kล่าม|สตึก|ร่อนN|สCมt|Fแก|Aกี่|Lp|Lราช|ถลุงเหล็ก|สองห้อง|แคนa|สระX|eฝาย|Rดินแa|Rสุวรรณ|ลาดหลุมb|หน้าไม้|vลูกกา|vy|qK|กระแชง|Dกระบือ|เชียงรากf|xบอน|Dเดื่อ|Bฉาง|ประจวบคีรีขันธ์|กุยบุรี|Sแa|ทับสะแก|Dสะพาน|ธงt|ปราณบุรี|qร้อยยอด|xนคร|Aพลับ|Aแก|Li|Cแขม|Bสร้าง|Dขาม|DU|ประจันตคาม|Ab|Oมหาโพธิ|Eตูม|En|ปะCเระ|คอกกระบือ|มายอ|ยะรัง|Dปู|Dเก่า|Aจิก|Hลาน|Vไร่|kเตี้ย|KY|Vบอน|ไม้แก่น|yN|WนครOอยุธยา|Gแa|นครc|rจั่น|Hลา|Dซ้าย|Dบาล|Qเต้า|Bกุ่ม|วัดยม|Dปะหัน|ขวัญF|Bม้า|Bแป้ง|qเรือน|Dy|Dพลี|Kd|Bแพรก|ผักไห่|Bป้อม|eรอ|ภาชี|Wb|Kk|มหาราช|eh|โรงd|ลาดXc|Gf|อุทัย|เสC|TN|ez|จุน|JรวงN|ดอกZใต้|Bปิน|Vซาง|สว่างอารมณ์|Aหล่ม|ปง|Lb|ภูซาง|Vสัก|z|Hลาว|เชียงม่วน|Hต๋ำ|Hใจ|Oถ้อย|Hสุก|กะปง|ทับปุด|Dเหรียง|Kเจริญ|ท้ายเหมือง|สองแพรก|กงหรา|ควนขนุน|ตะโหมด|rพะยูน|Vพะยอม|Pเต่า|Stสน|tบุรี|Eแค|พิจิตร|aเจริญ|ตะพานp|Gสำโรง|Gหว้า|ทับคล้อ|DมูลCก|xCราง|Giพูน|AW|สากเหล็ก|Ii|ย่านยาว|hขวาง|โพทะเล|Yประทับd|ชาติตระการ|Vแa|นครไทย|CX|Dกระทุ่ม|สCมคลี|Kสลุด|นิคมพัฒC|พรหมพิราม|Gพิกุล|เนินมะปราง|ชมพู|yย้อย|งิ้วn|EN|EY|Bกร่าง|BV|วัดจันทร์|กะทู้|สาคู|ตลาดM|Pb|Cสีนวน|mรัง|ชื่นชม|mปลาดุก|Cดูน|สันVตอง|เขวาไร่|บรบือ|U|Ak|Aสิม|zt|Uสีสุราช|Bหวาย|Aไฮ|eเรือ|แคน|Yt|เชียงยืน|แกดำ|Gยาว|Aเหล็ก|เหล่า|มุกดาหาร|Zชะอี|ac|Aแคน|Tlล|Bบาก|Yy|นิคมZสร้อย|Cกอก|Cอุดม|Aสูง|หว้านM|aเย็น|si|ยะลา|กรงปินัง|กาบัง|ธารโต|บันนังสl|ยะหา|เบตง|mชุม|Aหมี|Zเขื่อนb|Jมน|ค้อG|aมะไฟ|Cz|Oฐาน|เชียงเพ็ง|k|สงU|eF|lดN|mแห่|Ob|qแยก|QZ|กะเปอร์|หงาว|ปลวกแa|Eประดู่|Bแลง|Lโป่ง|แกลง|จอมx|เบิกไพร|ดำเนินสะดวก|Xn|Dแพ|Bคา|Bโป่ง|Tกระเบื้อง|Eผา|Bk|สวนกล้วย|Aกบ|Aอ้อ|rท่อ|วัดเพลง|สวนผึ้ง|Eเคย|Eราบ|Qพุ|พิกุลN|pกอง|Lh|โพธาราม|เlปูน|ลิ้นฟ้า|ed|จังหาร|UM|JSc|xn|เทอดไทย|ธวัชบุรี|Aพอก|Ff|ขี้เหล็ก|Rสวรรค์|sสูง|พนมไพร|ค้อM|YM|Jกุลา|sF|เกษตรวิสัย|กำแพง|FX|เชียงขวัญ|เมยวดี|Fสรวง|w|Cเลิง|Cแซง|พรสวรรค์|ภูเงิน|Gc|ขามเปี้ย|เชียงu|YO|สว่าง|แวง|tบาดาล|Eวุ้ง|Bหมี่|Dพึ่ง|AF|hM|พัฒCนิคม|vสนธิ|สระโบสถ์|Vlล|Kสำโรง|สบปราบ|CU|ห้างฉัตร|Pคา|Cb|Cโป่ง|Fปาน|Bเสด็จ|พิt|zo|แจ้ห่ม|Hทะ|Vตัน|eเสือ|Hพริก|Hเมาะ|vพูน|Jed|Bธิ|Bโฮ่ง|ลี้|Vh|Oวิt|Bแป้น|Hทา|F|จาน|ดู่|Rสัง|ขุนหาญ|Qเกลี้ยง|xบูรพ์|สวาย|พยุห์|Uชุมf|ด่าน|Aแค|ธาตุ|Lทับทัน|ผักไหม|ปะอาว|Kจาน|Eคล้อ|Aฮาง|เสียว|Fจันทร์|Y|Rค้อ|ไพรx|mบาก|กุสุมาลย์|อุ่มจาน|Zlกล้า|Cแต้|นิคมQอูน|พังโคน|วานรนิวาส|วาริชภูมิ|Aลาด|สว่างแดนดิน|Bถ่อน|ส่องดาว|เจริญศิลป์|เต่างอย|กระแสสินธุ์|Iหอยโข่ง|รัตภูมิ|Lลึก|สะกอม|Cทวี|Cหม่อม|Dกล่ำ|ระโนด|Bขาว|กระดังงา|สะบ้าย้อย|kn|eS|หาดM|ฉลุง|เทพา|gU|ควนกาหลง|ควนโดน|Jหว้า|Eแพ|ละงู|Dg|Dเสาธง|Dหญ้าแพรก|Dคนที|อัมพวา|วัดประดู่|Bแพ้ว|โรงเข้|Tพุด|Bหมอ|KM|มวกเหล็ก|วิหารแa|Lขมิ้น|Bโปร่ง|เสาไห้|ต้นlล|แก่งคอย|lลเดี่ยว|Bธาตุ|สองคอน|Lแห้ง|Iหาด|lWยา|GQเย็น|Gสมบูรณ์|วัฒCนคร|อรัญประเทศ|Sฉกรรจ์|Dระจัน|พรหมบุรี|Bหม้อ|อินทร์บุรี|Dปลาม้า|Bแหลม|Oประจันต์|qชุก|Gลึก|Aหญ้าไซ|อู่N|eC|กรูด|Tสัก|Eฉาง|Eชนะ|พนม|พุนพิน|Qรอบ|Pพะงัน|เคียนซา|zสระ|กาบเชิง|ชุมพลบุรี|Oณรงค์|Xเชด|รัตนบุรี|สนม|สังขะ|สำโรงทาบ|เขวาสินรินทร์|Jเสลี่ยม|Aหญ้าปล้อง|Oนคร|OสัชCลัย|Vงิ้ว|Eg|รัตนวาปี|สระใคร|สังคม|เฝ้าไร่|ปะโค|CG|สุวรรณคูหา|Bถิ่น|ชานุมาน|พC|Cยม|เสCงคนิคม|mจับ|กุมภวาปี|Eลี่|ผาสุก|คอนสาย|Jฝน|Cยูง|Qโสม|Bดุง|Bจันทร์|Blด|wM|Fพาน|Tกลอย|Bแa|Gqหมอ|Oธาตุ|สร้างคอม|Aวัวซอ|Aหาน|เพ็ญ|จอมO|ไชยวาน|Eปลา|ฟากE|ทัพทัน|ลานสัก|Aขาหย่าง|Aฉาง|Lคต|Tมดแa|lลสุม|Cจะหลวย|Cเยีย|Rw|kqสิบ|Aเหล่า|วารินชำราบ|เขมราฐ|เขื่องใน|เหล่าเสือโก้ก|โขงเจียม|Vโมก|qโก้|แสวงหา|ไชโย|Vแดด|สันw|สันi|Hฟ้าc|Hสรวย|Hสาย|ดอยหล่อ|ดอยเต่า|Qแพร่|สันกำแพง|Tb|หางa|Bปง|อมก๋อย|ฮอด|เชียงดาว|Hอาย|Hแตง|Vแป๋|ชะอำ|Bลาด|Sย้อย|Lโรง|แก่งกระจาน|QหCว|xqพัน|Gโป่ง|Qร้อน|Oเทพ|หล่มสัก|หล่มเก่า|Sค้อ|ด่านซ้าย|Cด้วง|Cแห้ว|rชม|ผาขาว|ภูกระดึง|Gสะพุง|ร้องกวาง|Gชิ้น|สูงเม่น|Qชำ|Bกาศ|Akไข่|HZมี|เด่นt|ขุนยวม|ปางมะผ้า|สบเมย|Hลาf|Hสะเรียง", om = "หนอง|บ้าน|นา|บาง|ท่า|เมือง|วัง|แม่|คลอง|ทุ่ง|โคก|ห้วย|ใหญ่|ทอง|ศรี|เกาะ|น้ำ|โนน|เขา|ดอน|ยาง|ป่า|พระ|บัว|โพธิ์|คำ|ดง|แก้ว|หลวง|ช้าง|หัว|น้อย|บ่อ|ไผ่|ทราย|แดง|ม่วง|ตา|กุด|งาม|เหนือ|หิน|สาม|ปาก|โพน|ชัย|ใหม่|ลำ|กลาง|บึง|ไทร|เวียง", im = {
  data: rm,
  lookup: am,
  words: om
}, ya = {
  database: im,
  maxSearchResult: 10
};
class sm {
  #e;
  #t;
  constructor({
    database: t = ya.database,
    maxSearchResult: n = ya.maxSearchResult
  } = ya) {
    this.#e = {
      database: t,
      maxSearchResult: n
    }, this.#t = this.preProcess();
  }
  // preProcess: modified with simple typescript from original: https://github.com/earthchie/jquery.Thailand.js/blob/aaa03d6030350e8253dd42dc003ccc2cbf17ad86/jquery.Thailand.js/src/jquery.Thailand.js#L19-L76
  preProcess = () => {
    const { database: t } = this.#e;
    let n = [], r = [], a = [];
    const o = [];
    t.lookup && t.words && (n = t.lookup.split("|"), r = t.words.split("|"), a = t.data);
    const i = (s) => {
      const c = (l) => {
        var u = l.charCodeAt(0);
        return r[u < 97 ? u - 65 : 26 + u - 97];
      };
      return typeof s == "number" && (s = n[s]), s.replace(/[A-Z]/gi, c);
    };
    return a.map((s) => {
      let c = 1;
      s.length === 3 && (c = 2), s[c].map((l) => {
        l[c].map((u) => {
          u[c] = u[c] instanceof Array ? u[c] : [u[c]], u[c].map((f) => {
            const v = {
              district: i(u[0]),
              amphoe: i(l[0]),
              province: i(s[0]),
              zipcode: `${f}`
            };
            o.push(v);
          });
        });
      });
    }), o;
  };
  // resolveResultByField: modified with simple typescript from original: https://github.com/Sellsuki/thai-address-database/blob/bc96150da66cfbaf35a886f5e0f2cb6df33210e5/lib/index.js#L78-L109
  resolveResultByField = (t, n = "", r) => {
    if (n = n.toString().trim(), n === "")
      return [];
    let a = [];
    try {
      a = this.#t.filter((o) => {
        const i = new RegExp(n, "g");
        return (o[t] || "").toString().match(i);
      }).filter(r || (() => !0)).slice(0, this.#e.maxSearchResult);
    } catch {
      return [];
    }
    return a;
  };
  // GetConfig: get config value
  GetConfig = () => this.#e;
  // SearchAddressByDistrict: partial search by district scope
  SearchAddressByDistrict = (t, n) => this.resolveResultByField("district", t, n);
  // SearchAddressByAmphoe: partial search by amphoe scope
  SearchAddressByAmphoe = (t, n) => this.resolveResultByField("amphoe", t, n);
  // SearchAddressByProvince: partial search by province scope
  SearchAddressByProvince = (t, n) => this.resolveResultByField("province", t, n);
  // SearchAddressByZipcode: partial search by zipcode scope
  SearchAddressByZipcode = (t, n) => this.resolveResultByField("zipcode", t, n);
}
const qt = {
  scope: "province",
  delimiter: ", ",
  value: "",
  filter: () => !0,
  onChange: () => null,
  onSelect: () => null,
  style: {},
  className: "",
  autoCompleteProps: {}
}, fm = (e) => {
  const t = new sm(e), n = ({
    scope: r = qt.scope,
    delimiter: a = qt.delimiter,
    value: o = qt.value,
    filter: i = qt.filter,
    onChange: s = qt.onChange,
    onSelect: c = qt.onSelect,
    style: l = qt.style,
    className: u = qt.className,
    autoCompleteProps: f = qt.autoCompleteProps
  } = qt) => {
    const [v, m] = On([]), p = (b) => {
      let y = [];
      switch (r) {
        case "district":
          y = t.SearchAddressByDistrict(b, i);
          break;
        case "amphoe":
          y = t.SearchAddressByAmphoe(b, i);
          break;
        case "province":
          y = t.SearchAddressByProvince(b, i);
          break;
        case "zipcode":
          y = t.SearchAddressByZipcode(b, i);
          break;
      }
      return y;
    }, h = (b) => {
      s && s(b);
      const C = p(b).map((E) => {
        const x = `${E.district}${a}${E.amphoe}${a}${E.province}${a}${E.zipcode}`;
        return {
          key: x,
          label: x,
          value: x
        };
      });
      m(C);
    }, g = (b) => {
      const y = b.split(a);
      c && c({
        district: y[0],
        amphoe: y[1],
        province: y[2],
        zipcode: y[3]
      });
    };
    return /* @__PURE__ */ Dr(
      Xo,
      {
        value: o,
        style: { width: "100%", ...l },
        className: u,
        options: v,
        onSearch: h,
        onSelect: g,
        ...f
      }
    );
  };
  return {
    District: (r = qt) => /* @__PURE__ */ Dr(n, { ...r, scope: "district" }),
    Amphoe: (r = qt) => /* @__PURE__ */ Dr(n, { ...r, scope: "amphoe" }),
    Province: (r = qt) => /* @__PURE__ */ Dr(n, { ...r, scope: "province" }),
    Zipcode: (r = qt) => /* @__PURE__ */ Dr(n, { ...r, scope: "zipcode" })
  };
};
export {
  fm as CreateInput,
  sm as ThaiAddressFinder
};
