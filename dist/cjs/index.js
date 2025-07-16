"use strict";
var e,
  r = require("react"),
  t = { exports: {} },
  n = {};
var o,
  a,
  i = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function c() {
  return (
    o ||
      ((o = 1),
      "production" !== process.env.NODE_ENV &&
        (function () {
          function e(r) {
            if (null == r) return null;
            if ("function" == typeof r)
              return r.$$typeof === w ? null : r.displayName || r.name || null;
            if ("string" == typeof r) return r;
            switch (r) {
              case m:
                return "Fragment";
              case d:
                return "Profiler";
              case b:
                return "StrictMode";
              case S:
                return "Suspense";
              case j:
                return "SuspenseList";
              case O:
                return "Activity";
            }
            if ("object" == typeof r)
              switch (
                ("number" == typeof r.tag &&
                  console.error(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                  ),
                r.$$typeof)
              ) {
                case p:
                  return "Portal";
                case g:
                  return (r.displayName || "Context") + ".Provider";
                case v:
                  return (r._context.displayName || "Context") + ".Consumer";
                case k:
                  var t = r.render;
                  return (
                    (r = r.displayName) ||
                      (r =
                        "" !== (r = t.displayName || t.name || "")
                          ? "ForwardRef(" + r + ")"
                          : "ForwardRef"),
                    r
                  );
                case h:
                  return null !== (t = r.displayName || null)
                    ? t
                    : e(r.type) || "Memo";
                case _:
                  ((t = r._payload), (r = r._init));
                  try {
                    return e(r(t));
                  } catch (e) {}
              }
            return null;
          }
          function t(e) {
            return "" + e;
          }
          function n(e) {
            try {
              t(e);
              var r = !1;
            } catch (e) {
              r = !0;
            }
            if (r) {
              var n = (r = console).error,
                o =
                  ("function" == typeof Symbol &&
                    Symbol.toStringTag &&
                    e[Symbol.toStringTag]) ||
                  e.constructor.name ||
                  "Object";
              return (
                n.call(
                  r,
                  "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
                  o,
                ),
                t(e)
              );
            }
          }
          function o(r) {
            if (r === m) return "<>";
            if ("object" == typeof r && null !== r && r.$$typeof === _)
              return "<...>";
            try {
              var t = e(r);
              return t ? "<" + t + ">" : "<...>";
            } catch (e) {
              return "<...>";
            }
          }
          function a() {
            return Error("react-stack-top-frame");
          }
          function c() {
            var r = e(this.type);
            return (
              T[r] ||
                ((T[r] = !0),
                console.error(
                  "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
                )),
              void 0 !== (r = this.props.ref) ? r : null
            );
          }
          function l(r, t, o, a, i, l, f, p) {
            var m,
              b = t.children;
            if (void 0 !== b)
              if (a)
                if (R(b)) {
                  for (a = 0; a < b.length; a++) s(b[a]);
                  Object.freeze && Object.freeze(b);
                } else
                  console.error(
                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                  );
              else s(b);
            if (N.call(t, "key")) {
              b = e(r);
              var d = Object.keys(t).filter(function (e) {
                return "key" !== e;
              });
              ((a =
                0 < d.length
                  ? "{key: someKey, " + d.join(": ..., ") + ": ...}"
                  : "{key: someKey}"),
                A[b + a] ||
                  ((d =
                    0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}"),
                  console.error(
                    'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                    a,
                    b,
                    d,
                    b,
                  ),
                  (A[b + a] = !0)));
            }
            if (
              ((b = null),
              void 0 !== o && (n(o), (b = "" + o)),
              (function (e) {
                if (N.call(e, "key")) {
                  var r = Object.getOwnPropertyDescriptor(e, "key").get;
                  if (r && r.isReactWarning) return !1;
                }
                return void 0 !== e.key;
              })(t) && (n(t.key), (b = "" + t.key)),
              "key" in t)
            )
              for (var v in ((o = {}), t)) "key" !== v && (o[v] = t[v]);
            else o = t;
            return (
              b &&
                (function (e, r) {
                  function t() {
                    u ||
                      ((u = !0),
                      console.error(
                        "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                        r,
                      ));
                  }
                  ((t.isReactWarning = !0),
                    Object.defineProperty(e, "key", {
                      get: t,
                      configurable: !0,
                    }));
                })(
                  o,
                  "function" == typeof r
                    ? r.displayName || r.name || "Unknown"
                    : r,
                ),
              (function (e, r, t, n, o, a, i, l) {
                return (
                  (t = a.ref),
                  (e = { $$typeof: y, type: e, key: r, props: a, _owner: o }),
                  null !== (void 0 !== t ? t : null)
                    ? Object.defineProperty(e, "ref", {
                        enumerable: !1,
                        get: c,
                      })
                    : Object.defineProperty(e, "ref", {
                        enumerable: !1,
                        value: null,
                      }),
                  (e._store = {}),
                  Object.defineProperty(e._store, "validated", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: 0,
                  }),
                  Object.defineProperty(e, "_debugInfo", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: null,
                  }),
                  Object.defineProperty(e, "_debugStack", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: i,
                  }),
                  Object.defineProperty(e, "_debugTask", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: l,
                  }),
                  Object.freeze && (Object.freeze(e.props), Object.freeze(e)),
                  e
                );
              })(r, b, l, 0, null === (m = x.A) ? null : m.getOwner(), o, f, p)
            );
          }
          function s(e) {
            "object" == typeof e &&
              null !== e &&
              e.$$typeof === y &&
              e._store &&
              (e._store.validated = 1);
          }
          var u,
            f = r,
            y = Symbol.for("react.transitional.element"),
            p = Symbol.for("react.portal"),
            m = Symbol.for("react.fragment"),
            b = Symbol.for("react.strict_mode"),
            d = Symbol.for("react.profiler"),
            v = Symbol.for("react.consumer"),
            g = Symbol.for("react.context"),
            k = Symbol.for("react.forward_ref"),
            S = Symbol.for("react.suspense"),
            j = Symbol.for("react.suspense_list"),
            h = Symbol.for("react.memo"),
            _ = Symbol.for("react.lazy"),
            O = Symbol.for("react.activity"),
            w = Symbol.for("react.client.reference"),
            x =
              f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            N = Object.prototype.hasOwnProperty,
            R = Array.isArray,
            E = console.createTask
              ? console.createTask
              : function () {
                  return null;
                },
            T = {},
            P = (f = {
              "react-stack-bottom-frame": function (e) {
                return e();
              },
            })["react-stack-bottom-frame"].bind(f, a)(),
            $ = E(o(a)),
            A = {};
          ((i.Fragment = m),
            (i.jsx = function (e, r, t, n, a) {
              var i = 1e4 > x.recentlyCreatedOwnerStacks++;
              return l(
                e,
                r,
                t,
                !1,
                0,
                a,
                i ? Error("react-stack-top-frame") : P,
                i ? E(o(e)) : $,
              );
            }),
            (i.jsxs = function (e, r, t, n, a) {
              var i = 1e4 > x.recentlyCreatedOwnerStacks++;
              return l(
                e,
                r,
                t,
                !0,
                0,
                a,
                i ? Error("react-stack-top-frame") : P,
                i ? E(o(e)) : $,
              );
            }));
        })()),
    i
  );
}
var l =
  (a ||
    ((a = 1),
    "production" === process.env.NODE_ENV
      ? (t.exports = (function () {
          if (e) return n;
          e = 1;
          var r = Symbol.for("react.transitional.element"),
            t = Symbol.for("react.fragment");
          function o(e, t, n) {
            var o = null;
            if (
              (void 0 !== n && (o = "" + n),
              void 0 !== t.key && (o = "" + t.key),
              "key" in t)
            )
              for (var a in ((n = {}), t)) "key" !== a && (n[a] = t[a]);
            else n = t;
            return (
              (t = n.ref),
              {
                $$typeof: r,
                type: e,
                key: o,
                ref: void 0 !== t ? t : null,
                props: n,
              }
            );
          }
          return ((n.Fragment = t), (n.jsx = o), (n.jsxs = o), n);
        })())
      : (t.exports = c())),
  t.exports);
exports.Button = function (e) {
  return l.jsx(l.Fragment, {
    children: l.jsx("button", { children: e.label }),
  });
};
//# sourceMappingURL=index.js.map
