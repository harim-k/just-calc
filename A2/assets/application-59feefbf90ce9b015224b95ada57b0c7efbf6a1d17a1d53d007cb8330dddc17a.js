function isMobile() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
}
if (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (T, t) {
    "use strict";

    function g(t, e, n) {
        var i, o, r = (n = n || dt).createElement("script");
        if (r.text = t, e)
            for (i in pt) (o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function m(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? it[ot.call(t)] || "object" : typeof t
    }

    function a(t) {
        var e = !!t && "length" in t && t.length,
            n = m(t);
        return !ct(t) && !ut(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function c(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function e(t, n, i) {
        return ct(n) ? ht.grep(t, function (t, e) {
            return !!n.call(t, e, t) !== i
        }) : n.nodeType ? ht.grep(t, function (t) {
            return t === n !== i
        }) : "string" != typeof n ? ht.grep(t, function (t) {
            return -1 < nt.call(n, t) !== i
        }) : ht.filter(n, t, i)
    }

    function n(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function u(t) {
        return t
    }

    function d(t) {
        throw t
    }

    function l(t, e, n, i) {
        var o;
        try {
            t && ct(o = t.promise) ? o.call(t).done(e).fail(n) : t && ct(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }

    function i() {
        dt.removeEventListener("DOMContentLoaded", i), T.removeEventListener("load", i), ht.ready()
    }

    function o(t, e) {
        return e.toUpperCase()
    }

    function p(t) {
        return t.replace($t, "ms-").replace(At, o)
    }

    function r() {
        this.expando = ht.expando + r.uid++
    }

    function f(t, e, n) {
        var i, o;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Lt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : It.test(o) ? JSON.parse(o) : o)
                } catch (t) { }
                _t.set(t, e, n)
            } else n = void 0;
        return n
    }

    function h(t, e, n, i) {
        var o, r, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return ht.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (ht.cssNumber[e] ? "" : "px"),
            u = t.nodeType && (ht.cssNumber[e] || "px" !== c && +l) && Rt.exec(ht.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) ht.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, ht.style(t, e, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function v(t, e) {
        for (var n, i, o, r, s, a, l, c = [], u = 0, d = t.length; u < d; u++)(i = t[u]).style && (n = i.style.display, e ? ("none" === n && (c[u] = Dt.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && Mt(i) && (c[u] = (l = s = r = void 0, s = (o = i).ownerDocument, a = o.nodeName, (l = Bt[a]) || (r = s.body.appendChild(s.createElement(a)), l = ht.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), Bt[a] = l)))) : "none" !== n && (c[u] = "none", Dt.set(i, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (t[u].style.display = c[u]);
        return t
    }

    function y(t, e) {
        var n;
        return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && c(t, e) ? ht.merge([t], n) : n
    }

    function b(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Dt.set(t[n], "globalEval", !e || Dt.get(e[n], "globalEval"))
    }

    function x(t, e, n, i, o) {
        for (var r, s, a, l, c, u, d = e.createDocumentFragment(), p = [], f = 0, h = t.length; f < h; f++)
            if ((r = t[f]) || 0 === r)
                if ("object" === m(r)) ht.merge(p, r.nodeType ? [r] : r);
                else if (Gt.test(r)) {
                    for (s = s || d.appendChild(e.createElement("div")), a = (Vt.exec(r) || ["", ""])[1].toLowerCase(), l = Xt[a] || Xt._default, s.innerHTML = l[1] + ht.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                    ht.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
                } else p.push(e.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];)
            if (i && -1 < ht.inArray(r, i)) o && o.push(r);
            else if (c = Ht(r), s = y(d.appendChild(r), "script"), c && b(s), n)
                for (u = 0; r = s[u++];) Qt.test(r.type || "") && n.push(r);
        return d
    }

    function s() {
        return !0
    }

    function w() {
        return !1
    }

    function C(t, e) {
        return t === function () {
            try {
                return dt.activeElement
            } catch (t) { }
        }() == ("focus" === e)
    }

    function k(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) k(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = w;
        else if (!o) return t;
        return 1 === r && (s = o, (o = function (t) {
            return ht().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = ht.guid++)), t.each(function () {
            ht.event.add(this, e, o, i, n)
        })
    }

    function E(t, o, r) {
        r ? (Dt.set(t, o, !1), ht.event.add(t, o, {
            namespace: !1,
            handler: function (t) {
                var e, n, i = Dt.get(this, o);
                if (1 & t.isTrigger && this[o]) {
                    if (i.length) (ht.event.special[o] || {}).delegateType && t.stopPropagation();
                    else if (i = Z.call(arguments), Dt.set(this, o, i), e = r(this, o), this[o](), i !== (n = Dt.get(this, o)) || e ? Dt.set(this, o, !1) : n = {}, i !== n) return t.stopImmediatePropagation(), t.preventDefault(), n.value
                } else i.length && (Dt.set(this, o, {
                    value: ht.event.trigger(ht.extend(i[0], ht.Event.prototype), i.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === Dt.get(t, o) && ht.event.add(t, o, s)
    }

    function S(t, e) {
        return c(t, "table") && c(11 !== e.nodeType ? e : e.firstChild, "tr") && ht(t).children("tbody")[0] || t
    }

    function N(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function $(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function A(t, e) {
        var n, i, o, r, s, a;
        if (1 === e.nodeType) {
            if (Dt.hasData(t) && (a = Dt.get(t).events))
                for (o in Dt.remove(e, "handle events"), a)
                    for (n = 0, i = a[o].length; n < i; n++) ht.event.add(e, o, a[o][n]);
            _t.hasData(t) && (r = _t.access(t), s = ht.extend({}, r), _t.set(e, s))
        }
    }

    function j(n, i, o, r) {
        i = tt(i);
        var t, e, s, a, l, c, u = 0,
            d = n.length,
            p = d - 1,
            f = i[0],
            h = ct(f);
        if (h || 1 < d && "string" == typeof f && !lt.checkClone && te.test(f)) return n.each(function (t) {
            var e = n.eq(t);
            h && (i[0] = f.call(this, t, e.html())), j(e, i, o, r)
        });
        if (d && (e = (t = x(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === t.childNodes.length && (t = e), e || r)) {
            for (a = (s = ht.map(y(t, "script"), N)).length; u < d; u++) l = t, u !== p && (l = ht.clone(l, !0, !0), a && ht.merge(s, y(l, "script"))), o.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, ht.map(s, $), u = 0; u < a; u++) l = s[u], Qt.test(l.type || "") && !Dt.access(l, "globalEval") && ht.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? ht._evalUrl && !l.noModule && ht._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : g(l.textContent.replace(ee, ""), l, c))
        }
        return n
    }

    function D(t, e, n) {
        for (var i, o = e ? ht.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ht.cleanData(y(i)), i.parentNode && (n && Ht(i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function _(t, e, n) {
        var i, o, r, s, a = t.style;
        return (n = n || ie(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || Ht(t) || (s = ht.style(t, e)), !lt.pixelBoxStyles() && ne.test(s) && re.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function I(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function L(t) {
        return ht.cssProps[t] || le[t] || (t in ae ? t : le[t] = function (t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = se.length; n--;)
                if ((t = se[n] + e) in ae) return t
        }(t) || t)
    }

    function O(t, e, n) {
        var i = Rt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function R(t, e, n, i, o, r) {
        var s = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += ht.css(t, n + Pt[s], !0, o)), i ? ("content" === n && (l -= ht.css(t, "padding" + Pt[s], !0, o)), "margin" !== n && (l -= ht.css(t, "border" + Pt[s] + "Width", !0, o))) : (l += ht.css(t, "padding" + Pt[s], !0, o), "padding" !== n ? l += ht.css(t, "border" + Pt[s] + "Width", !0, o) : a += ht.css(t, "border" + Pt[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
    }

    function P(t, e, n) {
        var i = ie(t),
            o = (!lt.boxSizingReliable() || n) && "border-box" === ht.css(t, "boxSizing", !1, i),
            r = o,
            s = _(t, e, i),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (ne.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!lt.boxSizingReliable() && o || !lt.reliableTrDimensions() && c(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === ht.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === ht.css(t, "boxSizing", !1, i), (r = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + R(t, e, n || (o ? "border" : "content"), r, i, s) + "px"
    }

    function q(t, e, n, i, o) {
        return new q.prototype.init(t, e, n, i, o)
    }

    function H() {
        he && (!1 === dt.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(H) : T.setTimeout(H, ht.fx.interval), ht.fx.tick())
    }

    function F() {
        return T.setTimeout(function () {
            fe = void 0
        }), fe = Date.now()
    }

    function M(t, e) {
        var n, i = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = Pt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function B(t, e, n) {
        for (var i, o = (U.tweeners[e] || []).concat(U.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function U(r, t, e) {
        var n, s, i = 0,
            o = U.prefilters.length,
            a = ht.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var t = fe || F(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(r, [c, n, e]), n < 1 && o ? e : (o || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: ht.extend({}, t),
                opts: ht.extend(!0, {
                    specialEasing: {},
                    easing: ht.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: fe || F(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var n = ht.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (t) {
                    var e = 0,
                        n = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; e < n; e++) c.tweens[e].run(1);
                    return t ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) : a.rejectWith(r, [c, t]), this
                }
            }),
            u = c.props;
        for (function (t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (o = e[i = p(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = ht.cssHooks[i]) && "expand" in s)
                    for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                else e[i] = o
        }(u, c.opts.specialEasing); i < o; i++)
            if (n = U.prefilters[i].call(c, r, u, c.opts)) return ct(n.stop) && (ht._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return ht.map(u, B, c), ct(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ht.fx.timer(ht.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function W(t) {
        return (t.match(kt) || []).join(" ")
    }

    function z(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function V(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(kt) || []
    }

    function Q(n, t, i, o) {
        var e;
        if (Array.isArray(t)) ht.each(t, function (t, e) {
            i || Ae.test(n) ? o(n, e) : Q(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, o)
        });
        else if (i || "object" !== m(t)) o(n, t);
        else
            for (e in t) Q(n + "[" + e + "]", t[e], i, o)
    }

    function X(r) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, i = 0,
                o = t.toLowerCase().match(kt) || [];
            if (ct(e))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e)
        }
    }

    function G(e, o, r, s) {
        function a(t) {
            var i;
            return l[t] = !0, ht.each(e[t] || [], function (t, e) {
                var n = e(o, r, s);
                return "string" != typeof n || c || l[n] ? c ? !(i = n) : void 0 : (o.dataTypes.unshift(n), a(n), !1)
            }), i
        }
        var l = {},
            c = e === Fe;
        return a(o.dataTypes[0]) || !l["*"] && a("*")
    }

    function Y(t, e) {
        var n, i, o = ht.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ht.extend(!0, t, i), t
    }
    var K = [],
        J = Object.getPrototypeOf,
        Z = K.slice,
        tt = K.flat ? function (t) {
            return K.flat.call(t)
        } : function (t) {
            return K.concat.apply([], t)
        },
        et = K.push,
        nt = K.indexOf,
        it = {},
        ot = it.toString,
        rt = it.hasOwnProperty,
        st = rt.toString,
        at = st.call(Object),
        lt = {},
        ct = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        ut = function (t) {
            return null != t && t === t.window
        },
        dt = T.document,
        pt = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        ft = "3.5.1",
        ht = function (t, e) {
            return new ht.fn.init(t, e)
        };
    ht.fn = ht.prototype = {
        jquery: ft,
        constructor: ht,
        length: 0,
        toArray: function () {
            return Z.call(this)
        },
        get: function (t) {
            return null == t ? Z.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = ht.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return ht.each(this, t)
        },
        map: function (n) {
            return this.pushStack(ht.map(this, function (t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(Z.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(ht.grep(this, function (t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(ht.grep(this, function (t, e) {
                return e % 2
            }))
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: et,
        sort: K.sort,
        splice: K.splice
    }, ht.extend = ht.fn.extend = function (t) {
        var e, n, i, o, r, s, a = t || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || ct(a) || (a = {}), l === c && (a = this, l--); l < c; l++)
            if (null != (e = arguments[l]))
                for (n in e) o = e[n], "__proto__" !== n && a !== o && (u && o && (ht.isPlainObject(o) || (r = Array.isArray(o))) ? (i = a[n], s = r && !Array.isArray(i) ? [] : r || ht.isPlainObject(i) ? i : {}, r = !1, a[n] = ht.extend(u, s, o)) : void 0 !== o && (a[n] = o));
        return a
    }, ht.extend({
        expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () { },
        isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== ot.call(t) || (e = J(t)) && ("function" != typeof (n = rt.call(e, "constructor") && e.constructor) || st.call(n) !== at))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function (t, e, n) {
            g(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function (t, e) {
            var n, i = 0;
            if (a(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (a(Object(t)) ? ht.merge(n, "string" == typeof t ? [t] : t) : et.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : nt.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
            return t.length = o, t
        },
        grep: function (t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
            return i
        },
        map: function (t, e, n) {
            var i, o, r = 0,
                s = [];
            if (a(t))
                for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);
            else
                for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
            return tt(s)
        },
        guid: 1,
        support: lt
    }), "function" == typeof Symbol && (ht.fn[Symbol.iterator] = K[Symbol.iterator]), ht.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        it["[object " + e + "]"] = e.toLowerCase()
    });
    var gt = function (n) {
        function x(t, e, n, i) {
            var o, r, s, a, l, c, u, d = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && (j(e), e = e || D, I)) {
                if (11 !== p && (l = vt.exec(t)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = e.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (d && (s = d.getElementById(o)) && P(e, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = l[3]) && v.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(o)), n
                    }
                if (v.qsa && !z[t + " "] && (!L || !L.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (u = t, d = e, 1 === p && (ct.test(t) || lt.test(t))) {
                        for ((d = yt.test(t) && f(e.parentNode) || e) === e && v.scope || ((a = e.getAttribute("id")) ? a = a.replace(wt, Ct) : e.setAttribute("id", a = q)), r = (c = k(t)).length; r--;) c[r] = (a ? "#" + a : ":scope") + " " + h(c[r]);
                        u = c.join(",")
                    }
                    try {
                        return K.apply(n, d.querySelectorAll(u)), n
                    } catch (e) {
                        z(t, !0)
                    } finally {
                        a === q && e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(st, "$1"), e, n, i)
        }

        function t() {
            var n = [];
            return function i(t, e) {
                return n.push(t + " ") > C.cacheLength && delete i[n.shift()], i[t + " "] = e
            }
        }

        function l(t) {
            return t[q] = !0, t
        }

        function o(t) {
            var e = D.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function e(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = e
        }

        function c(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function i(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function r(n) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function s(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && kt(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function a(s) {
            return l(function (r) {
                return r = +r, l(function (t, e) {
                    for (var n, i = s([], t.length, r), o = i.length; o--;) t[n = i[o]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function f(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function u() { }

        function h(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function d(a, t, e) {
            var l = t.dir,
                c = t.next,
                u = c || l,
                d = e && "parentNode" === u,
                p = M++;
            return t.first ? function (t, e, n) {
                for (; t = t[l];)
                    if (1 === t.nodeType || d) return a(t, e, n);
                return !1
            } : function (t, e, n) {
                var i, o, r, s = [F, p];
                if (n) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || d) && a(t, e, n)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || d)
                            if (o = (r = t[q] || (t[q] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), c && c === t.nodeName.toLowerCase()) t = t[l] || t;
                            else {
                                if ((i = o[u]) && i[0] === F && i[1] === p) return s[2] = i[2];
                                if ((o[u] = s)[2] = a(t, e, n)) return !0
                            } return !1
            }
        }

        function p(o) {
            return 1 < o.length ? function (t, e, n) {
                for (var i = o.length; i--;)
                    if (!o[i](t, e, n)) return !1;
                return !0
            } : o[0]
        }

        function w(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
            return s
        }

        function y(f, h, g, m, v, t) {
            return m && !m[q] && (m = y(m)), v && !v[q] && (v = y(v, t)), l(function (t, e, n, i) {
                var o, r, s, a = [],
                    l = [],
                    c = e.length,
                    u = t || function (t, e, n) {
                        for (var i = 0, o = e.length; i < o; i++) x(t, e[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !f || !t && h ? u : w(u, a, f, n, i),
                    p = g ? v || (t ? f : c || m) ? [] : e : d;
                if (g && g(d, p, n, i), m)
                    for (o = w(p, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
                if (t) {
                    if (v || f) {
                        if (v) {
                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(d[r] = s);
                            v(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = v ? Z(t, s) : a[r]) && (t[o] = !(e[o] = s))
                    }
                } else p = w(p === e ? p.splice(c, p.length) : p), v ? v(null, e, p, i) : K.apply(e, p)
            })
        }

        function g(t) {
            for (var o, e, n, i = t.length, r = C.relative[t[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = d(function (t) {
                return t === o
            }, s, !0), c = d(function (t) {
                return -1 < Z(o, t)
            }, s, !0), u = [function (t, e, n) {
                var i = !r && (n || e !== N) || ((o = e).nodeType ? l(t, e, n) : c(t, e, n));
                return o = null, i
            }]; a < i; a++)
                if (e = C.relative[t[a].type]) u = [d(p(u), e)];
                else {
                    if ((e = C.filter[t[a].type].apply(null, t[a].matches))[q]) {
                        for (n = ++a; n < i && !C.relative[t[n].type]; n++);
                        return y(1 < a && p(u), 1 < a && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(st, "$1"), e, a < n && g(t.slice(a, n)), n < i && g(t = t.slice(n)), n < i && h(t))
                    }
                    u.push(e)
                }
            return p(u)
        }
        var m, v, C, b, T, k, E, S, N, $, A, j, D, _, I, L, O, R, P, q = "sizzle" + 1 * new Date,
            H = n.document,
            F = 0,
            M = 0,
            B = t(),
            U = t(),
            W = t(),
            z = t(),
            V = function (t, e) {
                return t === e && (A = !0), 0
            },
            Q = {}.hasOwnProperty,
            X = [],
            G = X.pop,
            Y = X.push,
            K = X.push,
            J = X.slice,
            Z = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            et = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\[\\da-fA-F]{1,6}" + et + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            it = "\\[" + et + "*(" + nt + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            rt = new RegExp(et + "+", "g"),
            st = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
            at = new RegExp("^" + et + "*," + et + "*"),
            lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"),
            ct = new RegExp(et + "|>"),
            ut = new RegExp(ot),
            dt = new RegExp("^" + nt + "$"),
            pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /HTML$/i,
            ht = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = new RegExp("\\\\[\\da-fA-F]{1,6}" + et + "?|\\\\([^\\r\\n\\f])", "g"),
            xt = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ct = function (t, e) {
                return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            Tt = function () {
                j()
            },
            kt = d(function (t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(X = J.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
        } catch (m) {
            K = {
                apply: X.length ? function (t, e) {
                    Y.apply(t, J.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        for (m in v = x.support = {}, T = x.isXML = function (t) {
            var e = t.namespaceURI,
                n = (t.ownerDocument || t).documentElement;
            return !ft.test(e || n && n.nodeName || "HTML")
        }, j = x.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : H;
            return i != D && 9 === i.nodeType && i.documentElement && (_ = (D = i).documentElement, I = !T(D), H != D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), v.scope = o(function (t) {
                return _.appendChild(t).appendChild(D.createElement("div")), "undefined" != typeof t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
            }), v.attributes = o(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), v.getElementsByTagName = o(function (t) {
                return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
            }), v.getElementsByClassName = mt.test(D.getElementsByClassName), v.getById = o(function (t) {
                return _.appendChild(t).id = q, !D.getElementsByName || !D.getElementsByName(q).length
            }), v.getById ? (C.filter.ID = function (t) {
                var e = t.replace(bt, xt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, C.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && I) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function (t) {
                var n = t.replace(bt, xt);
                return function (t) {
                    var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return e && e.value === n
                }
            }, C.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && I) {
                    var n, i, o, r = e.getElementById(t);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                        for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                    }
                    return []
                }
            }), C.find.TAG = v.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : v.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" !== t) return r;
                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                return i
            }, C.find.CLASS = v.getElementsByClassName && function (t, e) {
                if ("undefined" != typeof e.getElementsByClassName && I) return e.getElementsByClassName(t)
            }, O = [], L = [], (v.qsa = mt.test(D.querySelectorAll)) && (o(function (t) {
                var e;
                _.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + et + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + et + "*(?:value|" + tt + ")"), t.querySelectorAll("[id~=" + q + "-]").length || L.push("~="), (e = D.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || L.push("\\[" + et + "*name" + et + "*=" + et + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || L.push(".#.+[+~]"), t.querySelectorAll("\\\f"), L.push("[\\r\\n\\f]")
            }), o(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + et + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), _.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (v.matchesSelector = mt.test(R = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && o(function (t) {
                v.disconnectedMatch = R.call(t, "*"), R.call(t, "[s!='']:x"), O.push("!=", ot)
            }), L = L.length && new RegExp(L.join("|")), O = O.length && new RegExp(O.join("|")), e = mt.test(_.compareDocumentPosition), P = e || mt.test(_.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function (t, e) {
                if (t === e) return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !v.sortDetached && e.compareDocumentPosition(t) === n ? t == D || t.ownerDocument == H && P(H, t) ? -1 : e == D || e.ownerDocument == H && P(H, e) ? 1 : $ ? Z($, t) - Z($, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return A = !0, 0;
                var n, i = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    s = [t],
                    a = [e];
                if (!o || !r) return t == D ? -1 : e == D ? 1 : o ? -1 : r ? 1 : $ ? Z($, t) - Z($, e) : 0;
                if (o === r) return c(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? c(s[i], a[i]) : s[i] == H ? -1 : a[i] == H ? 1 : 0
            }), D
        }, x.matches = function (t, e) {
            return x(t, null, null, e)
        }, x.matchesSelector = function (t, e) {
            if (j(t), v.matchesSelector && I && !z[e + " "] && (!O || !O.test(e)) && (!L || !L.test(e))) try {
                var n = R.call(t, e);
                if (n || v.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {
                z(e, !0)
            }
            return 0 < x(e, D, null, [t]).length
        }, x.contains = function (t, e) {
            return (t.ownerDocument || t) != D && j(t), P(t, e)
        }, x.attr = function (t, e) {
            (t.ownerDocument || t) != D && j(t);
            var n = C.attrHandle[e.toLowerCase()],
                i = n && Q.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
            return void 0 !== i ? i : v.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, x.escape = function (t) {
            return (t + "").replace(wt, Ct)
        }, x.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, x.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                o = 0;
            if (A = !v.detectDuplicates, $ = !v.sortStable && t.slice(0), t.sort(V), A) {
                for (; e = t[o++];) e === t[o] && (i = n.push(o));
                for (; i--;) t.splice(n[i], 1)
            }
            return $ = null, t
        }, b = x.getText = function (t) {
            var e, n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += b(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[i++];) n += b(e);
            return n
        }, (C = x.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || x.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && x.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ut.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(bt, xt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && B(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (n, i, o) {
                    return function (t) {
                        var e = x.attr(t, n);
                        return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === o : "!=" === i ? e !== o : "^=" === i ? o && 0 === e.indexOf(o) : "*=" === i ? o && -1 < e.indexOf(o) : "$=" === i ? o && e.slice(-o.length) === o : "~=" === i ? -1 < (" " + e.replace(rt, " ") + " ").indexOf(o) : "|=" === i && (e === o || e.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function (h, t, e, g, m) {
                    var v = "nth" !== h.slice(0, 3),
                        y = "last" !== h.slice(-4),
                        b = "of-type" === t;
                    return 1 === g && 0 === m ? function (t) {
                        return !!t.parentNode
                    } : function (t, e, n) {
                        var i, o, r, s, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                            u = t.parentNode,
                            d = b && t.nodeName.toLowerCase(),
                            p = !n && !b,
                            f = !1;
                        if (u) {
                            if (v) {
                                for (; c;) {
                                    for (s = t; s = s[c];)
                                        if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild], y && p) {
                                for (f = (a = (i = (o = (r = (s = u)[q] || (s[q] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === F && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                    if (1 === s.nodeType && ++f && s === t) {
                                        o[h] = [F, a, f];
                                        break
                                    }
                            } else if (p && (f = a = (i = (o = (r = (s = t)[q] || (s[q] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === F && i[1]), !1 === f)
                                for (;
                                    (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[q] || (s[q] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [F, f]), s !== t)););
                            return (f -= m) === g || f % g == 0 && 0 <= f / g
                        }
                    }
                },
                PSEUDO: function (t, r) {
                    var e, s = C.pseudos[t] || C.setFilters[t.toLowerCase()] || x.error("unsupported pseudo: " + t);
                    return s[q] ? s(r) : 1 < s.length ? (e = [t, t, "", r], C.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function (t, e) {
                        for (var n, i = s(t, r), o = i.length; o--;) t[n = Z(t, i[o])] = !(e[n] = i[o])
                    }) : function (t) {
                        return s(t, 0, e)
                    }) : s
                }
            },
            pseudos: {
                not: l(function (t) {
                    var i = [],
                        o = [],
                        a = E(t.replace(st, "$1"));
                    return a[q] ? l(function (t, e, n, i) {
                        for (var o, r = a(t, null, i, []), s = t.length; s--;)(o = r[s]) && (t[s] = !(e[s] = o))
                    }) : function (t, e, n) {
                        return i[0] = t, a(i, null, n, o), i[0] = null, !o.pop()
                    }
                }),
                has: l(function (e) {
                    return function (t) {
                        return 0 < x(e, t).length
                    }
                }),
                contains: l(function (e) {
                    return e = e.replace(bt, xt),
                        function (t) {
                            return -1 < (t.textContent || b(t)).indexOf(e)
                        }
                }),
                lang: l(function (n) {
                    return dt.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(bt, xt).toLowerCase(),
                        function (t) {
                            var e;
                            do {
                                if (e = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var e = n.location && n.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function (t) {
                    return t === _
                },
                focus: function (t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !C.pseudos.empty(t)
                },
                header: function (t) {
                    return gt.test(t.nodeName)
                },
                input: function (t) {
                    return ht.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: a(function () {
                    return [0]
                }),
                last: a(function (t, e) {
                    return [e - 1]
                }),
                eq: a(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: a(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: a(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: a(function (t, e, n) {
                    for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                    return t
                }),
                gt: a(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }).pseudos.nth = C.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[m] = i(m);
        for (m in {
            submit: !0,
            reset: !0
        }) C.pseudos[m] = r(m);
        return u.prototype = C.filters = C.pseudos, C.setFilters = new u, k = x.tokenize = function (t, e) {
            var n, i, o, r, s, a, l, c = U[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (s = t, a = [], l = C.preFilter; s;) {
                for (r in n && !(i = at.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = lt.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(st, " ")
                }), s = s.slice(n.length)), C.filter) !(i = pt[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return e ? s.length : s ? x.error(t) : U(t, a).slice(0)
        }, E = x.compile = function (t, e) {
            var n, m, v, y, b, i, o = [],
                r = [],
                s = W[t + " "];
            if (!s) {
                for (e || (e = k(t)), n = e.length; n--;)(s = g(e[n]))[q] ? o.push(s) : r.push(s);
                (s = W(t, (m = r, y = 0 < (v = o).length, b = 0 < m.length, i = function (t, e, n, i, o) {
                    var r, s, a, l = 0,
                        c = "0",
                        u = t && [],
                        d = [],
                        p = N,
                        f = t || b && C.find.TAG("*", o),
                        h = F += null == p ? 1 : Math.random() || .1,
                        g = f.length;
                    for (o && (N = e == D || e || o); c !== g && null != (r = f[c]); c++) {
                        if (b && r) {
                            for (s = 0, e || r.ownerDocument == D || (j(r), n = !I); a = m[s++];)
                                if (a(r, e || D, n)) {
                                    i.push(r);
                                    break
                                }
                            o && (F = h)
                        }
                        y && ((r = !a && r) && l--, t && u.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(u, d, e, n);
                        if (t) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = G.call(i));
                            d = w(d)
                        }
                        K.apply(i, d), o && !t && 0 < d.length && 1 < l + v.length && x.uniqueSort(i)
                    }
                    return o && (F = h, N = p), u
                }, y ? l(i) : i))).selector = t
            }
            return s
        }, S = x.select = function (t, e, n, i) {
            var o, r, s, a, l, c = "function" == typeof t && t,
                u = !i && k(t = c.selector || t);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === e.nodeType && I && C.relative[r[1].type]) {
                    if (!(e = (C.find.ID(s.matches[0].replace(bt, xt), e) || [])[0])) return n;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
                    if ((l = C.find[a]) && (i = l(s.matches[0].replace(bt, xt), yt.test(r[0].type) && f(e.parentNode) || e))) {
                        if (r.splice(o, 1), !(t = i.length && h(r))) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || E(t, u))(i, e, !I, n, !e || yt.test(t) && f(e.parentNode) || e), n
        }, v.sortStable = q.split("").sort(V).join("") === q, v.detectDuplicates = !!A, j(), v.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), v.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || e("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || e(tt, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), x
    }(T);
    ht.find = gt, ht.expr = gt.selectors, ht.expr[":"] = ht.expr.pseudos, ht.uniqueSort = ht.unique = gt.uniqueSort, ht.text = gt.getText, ht.isXMLDoc = gt.isXML, ht.contains = gt.contains, ht.escapeSelector = gt.escape;
    var mt = function (t, e, n) {
        for (var i = [], o = void 0 !== n;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (o && ht(t).is(n)) break;
                i.push(t)
            }
        return i
    },
        vt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        yt = ht.expr.match.needsContext,
        bt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    ht.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ht.find.matchesSelector(i, t) ? [i] : [] : ht.find.matches(t, ht.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ht.fn.extend({
        find: function (t) {
            var e, n, i = this.length,
                o = this;
            if ("string" != typeof t) return this.pushStack(ht(t).filter(function () {
                for (e = 0; e < i; e++)
                    if (ht.contains(o[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) ht.find(t, o[e], n);
            return 1 < i ? ht.uniqueSort(n) : n
        },
        filter: function (t) {
            return this.pushStack(e(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(e(this, t || [], !0))
        },
        is: function (t) {
            return !!e(this, "string" == typeof t && yt.test(t) ? ht(t) : t || [], !1).length
        }
    });
    var xt, wt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ht.fn.init = function (t, e, n) {
        var i, o;
        if (!t) return this;
        if (n = n || xt, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : ct(t) ? void 0 !== n.ready ? n.ready(t) : t(ht) : ht.makeArray(t, this);
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : wt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
            if (e = e instanceof ht ? e[0] : e, ht.merge(this, ht.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : dt, !0)), bt.test(i[1]) && ht.isPlainObject(e))
                for (i in e) ct(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        return (o = dt.getElementById(i[2])) && (this[0] = o, this.length = 1), this
    }).prototype = ht.fn, xt = ht(dt);
    var Ct = /^(?:parents|prev(?:Until|All))/,
        Tt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ht.fn.extend({
        has: function (t) {
            var e = ht(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (ht.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof t && ht(t);
            if (!yt.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && ht.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? ht.uniqueSort(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? nt.call(ht(t), this[0]) : nt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(ht.uniqueSort(ht.merge(this.get(), ht(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ht.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return mt(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return mt(t, "parentNode", n)
        },
        next: function (t) {
            return n(t, "nextSibling")
        },
        prev: function (t) {
            return n(t, "previousSibling")
        },
        nextAll: function (t) {
            return mt(t, "nextSibling")
        },
        prevAll: function (t) {
            return mt(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return mt(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return mt(t, "previousSibling", n)
        },
        siblings: function (t) {
            return vt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return vt(t.firstChild)
        },
        contents: function (t) {
            return null != t.contentDocument && J(t.contentDocument) ? t.contentDocument : (c(t, "template") && (t = t.content || t), ht.merge([], t.childNodes))
        }
    }, function (i, o) {
        ht.fn[i] = function (t, e) {
            var n = ht.map(this, o, t);
            return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = ht.filter(e, n)), 1 < this.length && (Tt[i] || ht.uniqueSort(n), Ct.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var kt = /[^\x20\t\r\n\f]+/g;
    ht.Callbacks = function (i) {
        var t, n;
        i = "string" == typeof i ? (t = i, n = {}, ht.each(t.match(kt) || [], function (t, e) {
            n[e] = !0
        }), n) : ht.extend({}, i);
        var o, e, r, s, a = [],
            l = [],
            c = -1,
            u = function () {
                for (s = s || i.once, r = o = !0; l.length; c = -1)
                    for (e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && i.stopOnFalse && (c = a.length, e = !1);
                i.memory || (e = !1), o = !1, s && (a = e ? [] : "")
            },
            d = {
                add: function () {
                    return a && (e && !o && (c = a.length - 1, l.push(e)), function n(t) {
                        ht.each(t, function (t, e) {
                            ct(e) ? i.unique && d.has(e) || a.push(e) : e && e.length && "string" !== m(e) && n(e)
                        })
                    }(arguments), e && !o && u()), this
                },
                remove: function () {
                    return ht.each(arguments, function (t, e) {
                        for (var n; - 1 < (n = ht.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < ht.inArray(t, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = l = [], a = e = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = l = [], e || o || (a = e = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (t, e) {
                    return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), o || u()), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return d
    }, ht.extend({
        Deferred: function (t) {
            var r = [
                ["notify", "progress", ht.Callbacks("memory"), ht.Callbacks("memory"), 2],
                ["resolve", "done", ht.Callbacks("once memory"), ht.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", ht.Callbacks("once memory"), ht.Callbacks("once memory"), 1, "rejected"]
            ],
                o = "pending",
                s = {
                    state: function () {
                        return o
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    "catch": function (t) {
                        return s.then(null, t)
                    },
                    pipe: function () {
                        var o = arguments;
                        return ht.Deferred(function (i) {
                            ht.each(r, function (t, e) {
                                var n = ct(o[e[4]]) && o[e[4]];
                                a[e[1]](function () {
                                    var t = n && n.apply(this, arguments);
                                    t && ct(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function (e, n, i) {
                        function l(o, r, s, a) {
                            return function () {
                                var n = this,
                                    i = arguments,
                                    t = function () {
                                        var t, e;
                                        if (!(o < c)) {
                                            if ((t = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == typeof t || "function" == typeof t) && t.then, ct(e) ? a ? e.call(t, l(c, r, u, a), l(c, r, d, a)) : (c++, e.call(t, l(c, r, u, a), l(c, r, d, a), l(c, r, u, r.notifyWith))) : (s !== u && (n = void 0, i = [t]), (a || r.resolveWith)(n, i))
                                        }
                                    },
                                    e = a ? t : function () {
                                        try {
                                            t()
                                        } catch (t) {
                                            ht.Deferred.exceptionHook && ht.Deferred.exceptionHook(t, e.stackTrace), c <= o + 1 && (s !== d && (n = void 0, i = [t]), r.rejectWith(n, i))
                                        }
                                    };
                                o ? e() : (ht.Deferred.getStackHook && (e.stackTrace = ht.Deferred.getStackHook()), T.setTimeout(e))
                            }
                        }
                        var c = 0;
                        return ht.Deferred(function (t) {
                            r[0][3].add(l(0, t, ct(i) ? i : u, t.notifyWith)), r[1][3].add(l(0, t, ct(e) ? e : u)), r[2][3].add(l(0, t, ct(n) ? n : d))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? ht.extend(t, s) : s
                    }
                },
                a = {};
            return ht.each(r, function (t, e) {
                var n = e[2],
                    i = e[5];
                s[e[1]] = n.add, i && n.add(function () {
                    o = i
                }, r[3 - t][2].disable, r[3 - t][3].disable, r[0][2].lock, r[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = n.fireWith
            }), s.promise(a), t && t.call(a, a), a
        },
        when: function (t) {
            var n = arguments.length,
                e = n,
                i = Array(e),
                o = Z.call(arguments),
                r = ht.Deferred(),
                s = function (e) {
                    return function (t) {
                        i[e] = this, o[e] = 1 < arguments.length ? Z.call(arguments) : t, --n || r.resolveWith(i, o)
                    }
                };
            if (n <= 1 && (l(t, r.done(s(e)).resolve, r.reject, !n), "pending" === r.state() || ct(o[e] && o[e].then))) return r.then();
            for (; e--;) l(o[e], s(e), r.reject);
            return r.promise()
        }
    });
    var Et = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ht.Deferred.exceptionHook = function (t, e) {
        T.console && T.console.warn && t && Et.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, ht.readyException = function (t) {
        T.setTimeout(function () {
            throw t
        })
    };
    var St = ht.Deferred();
    ht.fn.ready = function (t) {
        return St.then(t)["catch"](function (t) {
            ht.readyException(t)
        }), this
    }, ht.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --ht.readyWait : ht.isReady) || (ht.isReady = !0) !== t && 0 < --ht.readyWait || St.resolveWith(dt, [ht])
        }
    }), ht.ready.then = St.then, "complete" === dt.readyState || "loading" !== dt.readyState && !dt.documentElement.doScroll ? T.setTimeout(ht.ready) : (dt.addEventListener("DOMContentLoaded", i), T.addEventListener("load", i));
    var Nt = function (t, e, n, i, o, r, s) {
        var a = 0,
            l = t.length,
            c = null == n;
        if ("object" === m(n))
            for (a in o = !0, n) Nt(t, e, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0, ct(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
            return c.call(ht(t), n)
        })), e))
            for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
    },
        $t = /^-ms-/,
        At = /-([a-z])/g,
        jt = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    r.uid = 1, r.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, jt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[p(e)] = n;
            else
                for (i in e) o[p(i)] = e[i];
            return o
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][p(e)]
        },
        access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(p) : (e = p(e)) in i ? [e] : e.match(kt) || []).length;
                    for (; n--;) delete i[e[n]]
                } (void 0 === e || ht.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !ht.isEmptyObject(e)
        }
    };
    var Dt = new r,
        _t = new r,
        It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Lt = /[A-Z]/g;
    ht.extend({
        hasData: function (t) {
            return _t.hasData(t) || Dt.hasData(t)
        },
        data: function (t, e, n) {
            return _t.access(t, e, n)
        },
        removeData: function (t, e) {
            _t.remove(t, e)
        },
        _data: function (t, e, n) {
            return Dt.access(t, e, n)
        },
        _removeData: function (t, e) {
            Dt.remove(t, e)
        }
    }), ht.fn.extend({
        data: function (n, t) {
            var e, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                _t.set(this, n)
            }) : Nt(this, function (t) {
                var e;
                if (r && void 0 === t) return void 0 !== (e = _t.get(r, n)) ? e : void 0 !== (e = f(r, n)) ? e : void 0;
                this.each(function () {
                    _t.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (o = _t.get(r), 1 === r.nodeType && !Dt.get(r, "hasDataAttrs"))) {
                for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = p(i.slice(5)), f(r, i, o[i]));
                Dt.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function (t) {
            return this.each(function () {
                _t.remove(this, t)
            })
        }
    }), ht.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = Dt.get(t, e), n && (!i || Array.isArray(n) ? i = Dt.access(t, e, ht.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = ht.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = ht._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
                ht.dequeue(t, e)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Dt.get(t, n) || Dt.access(t, n, {
                empty: ht.Callbacks("once memory").add(function () {
                    Dt.remove(t, [e + "queue", n])
                })
            })
        }
    }), ht.fn.extend({
        queue: function (e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? ht.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                var t = ht.queue(this, e, n);
                ht._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ht.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                ht.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                o = ht.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Dt.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Rt = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"),
        Pt = ["Top", "Right", "Bottom", "Left"],
        qt = dt.documentElement,
        Ht = function (t) {
            return ht.contains(t.ownerDocument, t)
        },
        Ft = {
            composed: !0
        };
    qt.getRootNode && (Ht = function (t) {
        return ht.contains(t.ownerDocument, t) || t.getRootNode(Ft) === t.ownerDocument
    });
    var Mt = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && Ht(t) && "none" === ht.css(t, "display")
    },
        Bt = {};
    ht.fn.extend({
        show: function () {
            return v(this, !0)
        },
        hide: function () {
            return v(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Mt(this) ? ht(this).show() : ht(this).hide()
            })
        }
    });
    var Ut, Wt, zt = /^(?:checkbox|radio)$/i,
        Vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Qt = /^$|^module$|\/(?:java|ecma)script/i;
    Ut = dt.createDocumentFragment().appendChild(dt.createElement("div")), (Wt = dt.createElement("input")).setAttribute("type", "radio"), Wt.setAttribute("checked", "checked"), Wt.setAttribute("name", "t"), Ut.appendChild(Wt), lt.checkClone = Ut.cloneNode(!0).cloneNode(!0).lastChild.checked, Ut.innerHTML = "<textarea>x</textarea>", lt.noCloneChecked = !!Ut.cloneNode(!0).lastChild.defaultValue, Ut.innerHTML = "<option></option>", lt.option = !!Ut.lastChild;
    var Xt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, lt.option || (Xt.optgroup = Xt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Gt = /<|&#?\w+;/,
        Yt = /^key/,
        Kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Jt = /^([^.]*)(?:\.(.+)|)/;
    ht.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, m = Dt.get(e);
            if (jt(e))
                for (n.handler && (n = (r = n).handler, o = r.selector), o && ht.find.matchesSelector(qt, o), n.guid || (n.guid = ht.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
                    return void 0 !== ht && ht.event.triggered !== t.type ? ht.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(kt) || [""]).length; c--;) f = g = (a = Jt.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = ht.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = ht.event.special[f] || {}, u = ht.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ht.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ht.event.global[f] = !0)
        },
        remove: function (t, e, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, m = Dt.hasData(t) && Dt.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(kt) || [""]).length; c--;)
                    if (f = g = (a = Jt.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = ht.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, m.handle) || ht.removeEvent(t, f, m.handle), delete l[f])
                    } else
                        for (f in l) ht.event.remove(t, f + e[c], n, i, !0);
                ht.isEmptyObject(l) && Dt.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, o, r, s, a = new Array(arguments.length),
                l = ht.event.fix(t),
                c = (Dt.get(this, "events") || Object.create(null))[l.type] || [],
                u = ht.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = ht.event.handlers.call(this, l, c), e = 0;
                    (o = s[e++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((ht.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        },
        handlers: function (t, e) {
            var n, i, o, r, s, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? -1 < ht(o, this).index(c) : ht.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(ht.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ct(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (t) {
            return t[ht.expando] ? t : new ht.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (t) {
                    var e = this || t;
                    return zt.test(e.type) && e.click && c(e, "input") && E(e, "click", s), !1
                },
                trigger: function (t) {
                    var e = this || t;
                    return zt.test(e.type) && e.click && c(e, "input") && E(e, "click"), !0
                },
                _default: function (t) {
                    var e = t.target;
                    return zt.test(e.type) && e.click && c(e, "input") && Dt.get(e, "click") || c(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ht.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ht.Event = function (t, e) {
        if (!(this instanceof ht.Event)) return new ht.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? s : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ht.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[ht.expando] = !0
    }, ht.Event.prototype = {
        constructor: ht.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = s, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = s, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = s, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ht.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, ht.event.addProp), ht.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        ht.event.special[t] = {
            setup: function () {
                return E(this, t, C), !1
            },
            trigger: function () {
                return E(this, t), !0
            },
            delegateType: e
        }
    }), ht.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, o) {
        ht.event.special[t] = {
            delegateType: o,
            bindType: o,
            handle: function (t) {
                var e, n = t.relatedTarget,
                    i = t.handleObj;
                return n && (n === this || ht.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e
            }
        }
    }), ht.fn.extend({
        on: function (t, e, n, i) {
            return k(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return k(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ht(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = w), this.each(function () {
                ht.event.remove(this, t, n, e)
            });
            for (o in t) this.off(o, e, t[o]);
            return this
        }
    });
    var Zt = /<script|<style|<link/i,
        te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ht.extend({
        htmlPrefilter: function (t) {
            return t
        },
        clone: function (t, e, n) {
            var i, o, r, s, a, l, c, u = t.cloneNode(!0),
                d = Ht(t);
            if (!(lt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ht.isXMLDoc(t)))
                for (s = y(u), i = 0, o = (r = y(t)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && zt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (r = r || y(t), s = s || y(u), i = 0, o = r.length; i < o; i++) A(r[i], s[i]);
                else A(t, u);
            return 0 < (s = y(u, "script")).length && b(s, !d && y(t, "script")), u
        },
        cleanData: function (t) {
            for (var e, n, i, o = ht.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (jt(n)) {
                    if (e = n[Dt.expando]) {
                        if (e.events)
                            for (i in e.events) o[i] ? ht.event.remove(n, i) : ht.removeEvent(n, i, e.handle);
                        n[Dt.expando] = void 0
                    }
                    n[_t.expando] && (n[_t.expando] = void 0)
                }
        }
    }), ht.fn.extend({
        detach: function (t) {
            return D(this, t, !0)
        },
        remove: function (t) {
            return D(this, t)
        },
        text: function (t) {
            return Nt(this, function (t) {
                return void 0 === t ? ht.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return j(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return j(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = S(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return j(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return j(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ht.cleanData(y(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ht.clone(this, t, e)
            })
        },
        html: function (t) {
            return Nt(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Zt.test(t) && !Xt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ht.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ht.cleanData(y(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) { }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return j(this, arguments, function (t) {
                var e = this.parentNode;
                ht.inArray(this, n) < 0 && (ht.cleanData(y(this)), e && e.replaceChild(t, this))
            }, n)
        }
    }), ht.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, s) {
        ht.fn[t] = function (t) {
            for (var e, n = [], i = ht(t), o = i.length - 1, r = 0; r <= o; r++) e = r === o ? this : this.clone(!0), ht(i[r])[s](e), et.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var ne = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"),
        ie = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = T), e.getComputedStyle(t)
        },
        oe = function (t, e, n) {
            var i, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            for (o in i = n.call(t), e) t.style[o] = r[o];
            return i
        },
        re = new RegExp(Pt.join("|"), "i");
    ! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", qt.appendChild(l).appendChild(c);
                var t = T.getComputedStyle(c);
                n = "1%" !== t.top, a = 12 === e(t.marginLeft), c.style.right = "60%", r = 36 === e(t.right), i = 36 === e(t.width), c.style.position = "absolute", o = 12 === e(c.offsetWidth / 3), qt.removeChild(l), c = null
            }
        }

        function e(t) {
            return Math.round(parseFloat(t))
        }
        var n, i, o, r, s, a, l = dt.createElement("div"),
            c = dt.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", lt.clearCloneStyle = "content-box" === c.style.backgroundClip, ht.extend(lt, {
            boxSizingReliable: function () {
                return t(), i
            },
            pixelBoxStyles: function () {
                return t(), r
            },
            pixelPosition: function () {
                return t(), n
            },
            reliableMarginLeft: function () {
                return t(), a
            },
            scrollboxSize: function () {
                return t(), o
            },
            reliableTrDimensions: function () {
                var t, e, n, i;
                return null == s && (t = dt.createElement("table"), e = dt.createElement("tr"), n = dt.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", n.style.height = "9px", qt.appendChild(t).appendChild(e).appendChild(n), i = T.getComputedStyle(e), s = 3 < parseInt(i.height), qt.removeChild(t)), s
            }
        }))
    }();
    var se = ["Webkit", "Moz", "ms"],
        ae = dt.createElement("div").style,
        le = {},
        ce = /^(none|table(?!-c[ea]).+)/,
        ue = /^--/,
        de = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pe = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    ht.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = _(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = p(e),
                    l = ue.test(e),
                    c = t.style;
                if (l || (e = L(a)), s = ht.cssHooks[e] || ht.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];
                "string" == (r = typeof n) && (o = Rt.exec(n)) && o[1] && (n = h(t, e, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (ht.cssNumber[a] ? "" : "px")), lt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var o, r, s, a = p(e);
            return ue.test(e) || (e = L(a)), (s = ht.cssHooks[e] || ht.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = _(t, e, i)), "normal" === o && e in pe && (o = pe[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), ht.each(["height", "width"], function (t, l) {
        ht.cssHooks[l] = {
            get: function (t, e, n) {
                if (e) return !ce.test(ht.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? P(t, l, n) : oe(t, de, function () {
                    return P(t, l, n)
                })
            },
            set: function (t, e, n) {
                var i, o = ie(t),
                    r = !lt.scrollboxSize() && "absolute" === o.position,
                    s = (r || n) && "border-box" === ht.css(t, "boxSizing", !1, o),
                    a = n ? R(t, l, n, s, o) : 0;
                return s && r && (a -= Math.ceil(t["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(o[l]) - R(t, l, "border", !1, o) - .5)), a && (i = Rt.exec(e)) && "px" !== (i[3] || "px") && (t.style[l] = e, e = ht.css(t, l)), O(0, e, a)
            }
        }
    }), ht.cssHooks.marginLeft = I(lt.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(_(t, "marginLeft")) || t.getBoundingClientRect().left - oe(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), ht.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (o, r) {
        ht.cssHooks[o + r] = {
            expand: function (t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[o + Pt[e] + r] = i[e] || i[e - 2] || i[0];
                return n
            }
        }, "margin" !== o && (ht.cssHooks[o + r].set = O)
    }), ht.fn.extend({
        css: function (t, e) {
            return Nt(this, function (t, e, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = ie(t), o = e.length; s < o; s++) r[e[s]] = ht.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? ht.style(t, e, n) : ht.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((ht.Tween = q).prototype = {
        constructor: q,
        init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || ht.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ht.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = q.propHooks[this.prop];
            return t && t.get ? t.get(this) : q.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ht.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }).init.prototype = q.prototype, (q.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ht.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                ht.fx.step[t.prop] ? ht.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !ht.cssHooks[t.prop] && null == t.elem.style[L(t.prop)] ? t.elem[t.prop] = t.now : ht.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = q.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ht.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ht.fx = q.prototype.init, ht.fx.step = {};
    var fe, he, ge, me, ve = /^(?:toggle|show|hide)$/,
        ye = /queueHooks$/;
    ht.Animation = ht.extend(U, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return h(n.elem, t, Rt.exec(e), n), n
            }]
        },
        tweener: function (t, e) {
            ct(t) ? (e = t, t = ["*"]) : t = t.match(kt);
            for (var n, i = 0, o = t.length; i < o; i++) n = t[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(e)
        },
        prefilters: [function (t, e, n) {
            var i, o, r, s, a, l, c, u, d = "width" in e || "height" in e,
                p = this,
                f = {},
                h = t.style,
                g = t.nodeType && Mt(t),
                m = Dt.get(t, "fxshow");
            for (i in n.queue || (null == (s = ht._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, p.always(function () {
                p.always(function () {
                    s.unqueued--, ht.queue(t, "fx").length || s.empty.fire()
                })
            })), e)
                if (o = e[i], ve.test(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || ht.style(t, i)
                }
            if ((l = !ht.isEmptyObject(e)) || !ht.isEmptyObject(f))
                for (i in d && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Dt.get(t, "display")), "none" === (u = ht.css(t, "display")) && (c ? u = c : (v([t], !0), c = t.style.display || c, u = ht.css(t, "display"), v([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ht.css(t, "float") && (l || (p.done(function () {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Dt.access(t, "fxshow", {
                    display: c
                }), r && (
                    m.hidden = !g), g && v([t], !0), p.done(function () {
                        for (i in g || v([t]), Dt.remove(t, "fxshow"), f) ht.style(t, i, f[i])
                    })), l = B(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (t, e) {
            e ? U.prefilters.unshift(t) : U.prefilters.push(t)
        }
    }), ht.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? ht.extend({}, t) : {
            complete: n || !n && e || ct(t) && t,
            duration: t,
            easing: n && e || e && !ct(e) && e
        };
        return ht.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ht.fx.speeds ? i.duration = ht.fx.speeds[i.duration] : i.duration = ht.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ct(i.old) && i.old.call(this), i.queue && ht.dequeue(this, i.queue)
        }, i
    }, ht.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(Mt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (e, t, n, i) {
            var o = ht.isEmptyObject(e),
                r = ht.speed(t, n, i),
                s = function () {
                    var t = U(this, ht.extend({}, e), r);
                    (o || Dt.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (o, t, r) {
            var s = function (t) {
                var e = t.stop;
                delete t.stop, e(r)
            };
            return "string" != typeof o && (r = t, t = o, o = void 0), t && this.queue(o || "fx", []), this.each(function () {
                var t = !0,
                    e = null != o && o + "queueHooks",
                    n = ht.timers,
                    i = Dt.get(this);
                if (e) i[e] && i[e].stop && s(i[e]);
                else
                    for (e in i) i[e] && i[e].stop && ye.test(e) && s(i[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
                !t && r || ht.dequeue(this, o)
            })
        },
        finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var t, e = Dt.get(this),
                    n = e[s + "queue"],
                    i = e[s + "queueHooks"],
                    o = ht.timers,
                    r = n ? n.length : 0;
                for (e.finish = !0, ht.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), ht.each(["toggle", "show", "hide"], function (t, i) {
        var o = ht.fn[i];
        ht.fn[i] = function (t, e, n) {
            return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(M(i, !0), t, e, n)
        }
    }), ht.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, i) {
        ht.fn[t] = function (t, e, n) {
            return this.animate(i, t, e, n)
        }
    }), ht.timers = [], ht.fx.tick = function () {
        var t, e = 0,
            n = ht.timers;
        for (fe = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || ht.fx.stop(), fe = void 0
    }, ht.fx.timer = function (t) {
        ht.timers.push(t), ht.fx.start()
    }, ht.fx.interval = 13, ht.fx.start = function () {
        he || (he = !0, H())
    }, ht.fx.stop = function () {
        he = null
    }, ht.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ht.fn.delay = function (i, t) {
        return i = ht.fx && ht.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
            var n = T.setTimeout(t, i);
            e.stop = function () {
                T.clearTimeout(n)
            }
        })
    }, ge = dt.createElement("input"), me = dt.createElement("select").appendChild(dt.createElement("option")), ge.type = "checkbox", lt.checkOn = "" !== ge.value, lt.optSelected = me.selected, (ge = dt.createElement("input")).value = "t", ge.type = "radio", lt.radioValue = "t" === ge.value;
    var be, xe = ht.expr.attrHandle;
    ht.fn.extend({
        attr: function (t, e) {
            return Nt(this, ht.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                ht.removeAttr(this, t)
            })
        }
    }), ht.extend({
        attr: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? ht.prop(t, e, n) : (1 === r && ht.isXMLDoc(t) || (o = ht.attrHooks[e.toLowerCase()] || (ht.expr.match.bool.test(e) ? be : void 0)), void 0 !== n ? null === n ? void ht.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = ht.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!lt.radioValue && "radio" === e && c(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i = 0,
                o = e && e.match(kt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) t.removeAttribute(n)
        }
    }), be = {
        set: function (t, e, n) {
            return !1 === e ? ht.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ht.each(ht.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var s = xe[e] || ht.find.attr;
        xe[e] = function (t, e, n) {
            var i, o, r = e.toLowerCase();
            return n || (o = xe[r], xe[r] = i, i = null != s(t, e, n) ? r : null, xe[r] = o), i
        }
    });
    var we = /^(?:input|select|textarea|button)$/i,
        Ce = /^(?:a|area)$/i;
    ht.fn.extend({
        prop: function (t, e) {
            return Nt(this, ht.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[ht.propFix[t] || t]
            })
        }
    }), ht.extend({
        prop: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ht.isXMLDoc(t) || (e = ht.propFix[e] || e, o = ht.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ht.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : we.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), lt.optSelected || (ht.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ht.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ht.propFix[this.toLowerCase()] = this
    }), ht.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (ct(e)) return this.each(function (t) {
                ht(this).addClass(e.call(this, t, z(this)))
            });
            if ((t = V(e)).length)
                for (; n = this[l++];)
                    if (o = z(n), i = 1 === n.nodeType && " " + W(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = W(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (ct(e)) return this.each(function (t) {
                ht(this).removeClass(e.call(this, t, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = V(e)).length)
                for (; n = this[l++];)
                    if (o = z(n), i = 1 === n.nodeType && " " + W(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = W(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (o, e) {
            var r = typeof o,
                s = "string" === r || Array.isArray(o);
            return "boolean" == typeof e && s ? e ? this.addClass(o) : this.removeClass(o) : ct(o) ? this.each(function (t) {
                ht(this).toggleClass(o.call(this, t, z(this), e), e)
            }) : this.each(function () {
                var t, e, n, i;
                if (s)
                    for (e = 0, n = ht(this), i = V(o); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else void 0 !== o && "boolean" !== r || ((t = z(this)) && Dt.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === o ? "" : Dt.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + W(z(n)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var Te = /\r/g;
    ht.fn.extend({
        val: function (n) {
            var i, t, o, e = this[0];
            return arguments.length ? (o = ct(n), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = o ? n.call(this, t, ht(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = ht.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (i = ht.valHooks[this.type] || ht.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
            })) : e ? (i = ht.valHooks[e.type] || ht.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(Te, "") : null == t ? "" : t : void 0
        }
    }), ht.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ht.find.attr(t, "value");
                    return null != e ? e : W(ht.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, n, i, o = t.options,
                        r = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))) {
                            if (e = ht(n).val(), s) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function (t, e) {
                    for (var n, i, o = t.options, r = ht.makeArray(e), s = o.length; s--;)((i = o[s]).selected = -1 < ht.inArray(ht.valHooks.option.get(i), r)) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), ht.each(["radio", "checkbox"], function () {
        ht.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < ht.inArray(ht(t).val(), e)
            }
        }, lt.checkOn || (ht.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), lt.focusin = "onfocusin" in T;
    var ke = /^(?:focusinfocus|focusoutblur)$/,
        Ee = function (t) {
            t.stopPropagation()
        };
    ht.extend(ht.event, {
        trigger: function (t, e, n, i) {
            var o, r, s, a, l, c, u, d, p = [n || dt],
                f = rt.call(t, "type") ? t.type : t,
                h = rt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = d = s = n = n || dt, 3 !== n.nodeType && 8 !== n.nodeType && !ke.test(f + ht.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (t = t[ht.expando] ? t : new ht.Event(f, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : ht.makeArray(e, [t]), u = ht.event.special[f] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, e))) {
                if (!i && !u.noBubble && !ut(n)) {
                    for (a = u.delegateType || f, ke.test(a + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), s = r;
                    s === (n.ownerDocument || dt) && p.push(s.defaultView || s.parentWindow || T)
                }
                for (o = 0;
                    (r = p[o++]) && !t.isPropagationStopped();) d = r, t.type = 1 < o ? a : u.bindType || f, (c = (Dt.get(r, "events") || Object.create(null))[t.type] && Dt.get(r, "handle")) && c.apply(r, e), (c = l && r[l]) && c.apply && jt(r) && (t.result = c.apply(r, e), !1 === t.result && t.preventDefault());
                return t.type = f, i || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), e) || !jt(n) || l && ct(n[f]) && !ut(n) && ((s = n[l]) && (n[l] = null), ht.event.triggered = f, t.isPropagationStopped() && d.addEventListener(f, Ee), n[f](), t.isPropagationStopped() && d.removeEventListener(f, Ee), ht.event.triggered = void 0, s && (n[l] = s)), t.result
            }
        },
        simulate: function (t, e, n) {
            var i = ht.extend(new ht.Event, n, {
                type: t,
                isSimulated: !0
            });
            ht.event.trigger(i, null, e)
        }
    }), ht.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                ht.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return ht.event.trigger(t, e, n, !0)
        }
    }), lt.focusin || ht.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        var o = function (t) {
            ht.event.simulate(i, t.target, ht.event.fix(t))
        };
        ht.event.special[i] = {
            setup: function () {
                var t = this.ownerDocument || this.document || this,
                    e = Dt.access(t, i);
                e || t.addEventListener(n, o, !0), Dt.access(t, i, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this.document || this,
                    e = Dt.access(t, i) - 1;
                e ? Dt.access(t, i, e) : (t.removeEventListener(n, o, !0), Dt.remove(t, i))
            }
        }
    });
    var Se = T.location,
        Ne = {
            guid: Date.now()
        },
        $e = /\?/;
    ht.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || ht.error("Invalid XML: " + t), e
    };
    var Ae = /\[\]$/,
        je = /\r?\n/g,
        De = /^(?:submit|button|image|reset|file)$/i,
        _e = /^(?:input|select|textarea|keygen)/i;
    ht.param = function (t, e) {
        var n, i = [],
            o = function (t, e) {
                var n = ct(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !ht.isPlainObject(t)) ht.each(t, function () {
            o(this.name, this.value)
        });
        else
            for (n in t) Q(n, t[n], e, o);
        return i.join("&")
    }, ht.fn.extend({
        serialize: function () {
            return ht.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = ht.prop(this, "elements");
                return t ? ht.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ht(this).is(":disabled") && _e.test(this.nodeName) && !De.test(t) && (this.checked || !zt.test(t))
            }).map(function (t, e) {
                var n = ht(this).val();
                return null == n ? null : Array.isArray(n) ? ht.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(je, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(je, "\r\n")
                }
            }).get()
        }
    });
    var Ie = /%20/g,
        Le = /#.*$/,
        Oe = /([?&])_=[^&]*/,
        Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pe = /^(?:GET|HEAD)$/,
        qe = /^\/\//,
        He = {},
        Fe = {},
        Me = "*/".concat("*"),
        Be = dt.createElement("a");
    Be.href = Se.href, ht.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Se.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Me,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ht.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? Y(Y(t, ht.ajaxSettings), e) : Y(ht.ajaxSettings, t)
        },
        ajaxPrefilter: X(He),
        ajaxTransport: X(Fe),
        ajax: function (t, e) {
            function n(t, e, n, i) {
                var o, r, s, a, l, c = e;
                h || (h = !0, f && T.clearTimeout(f), u = void 0, p = i || "", C.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, n && (a = function (t, e, n) {
                    for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(m, C, n)), !o && -1 < ht.inArray("script", m.dataTypes) && (m.converters["text script"] = function () { }), a = function (t, e, n, i) {
                    var o, r, s, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (r = u.shift(); r;)
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && t["throws"]) e = s(e);
                                    else try {
                                        e = s(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: s ? t : "No conversion from " + l + " to " + r
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(m, a, C, o), o ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (ht.lastModified[d] = l), (l = C.getResponseHeader("etag")) && (ht.etag[d] = l)), 204 === t || "HEAD" === m.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, !t && c || (c = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || c) + "", o ? b.resolveWith(v, [r, c, C]) : b.rejectWith(v, [C, c, s]), C.statusCode(w), w = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [C, m, o ? r : s]), x.fireWith(v, [C, c]), g && (y.trigger("ajaxComplete", [C, m]), --ht.active || ht.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var u, d, p, i, f, o, h, g, r, s, m = ht.ajaxSetup({}, e),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? ht(v) : ht.event,
                b = ht.Deferred(),
                x = ht.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                l = {},
                c = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (h) {
                            if (!i)
                                for (i = {}; e = Re.exec(p);) i[e[1].toLowerCase() + " "] = (i[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = i[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == h && (t = l[t.toLowerCase()] = l[t.toLowerCase()] || t, a[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == h && (m.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (h) C.always(t[C.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || c;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (b.promise(C), m.url = ((t || m.url || Se.href) + "").replace(qe, Se.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(kt) || [""], null == m.crossDomain) {
                o = dt.createElement("a");
                try {
                    o.href = m.url, o.href = o.href, m.crossDomain = Be.protocol + "//" + Be.host != o.protocol + "//" + o.host
                } catch (t) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = ht.param(m.data, m.traditional)), G(He, m, e, C), h) return C;
            for (r in (g = ht.event && m.global) && 0 == ht.active++ && ht.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Pe.test(m.type), d = m.url.replace(Le, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ie, "+")) : (s = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += ($e.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Oe, "$1"), s = ($e.test(d) ? "&" : "?") + "_=" + Ne.guid++ + s), m.url = d + s), m.ifModified && (ht.lastModified[d] && C.setRequestHeader("If-Modified-Since", ht.lastModified[d]), ht.etag[d] && C.setRequestHeader("If-None-Match", ht.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : m.accepts["*"]), m.headers) C.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || h)) return C.abort();
            if (c = "abort", x.add(m.complete), C.done(m.success), C.fail(m.error), u = G(Fe, m, e, C)) {
                if (C.readyState = 1, g && y.trigger("ajaxSend", [C, m]), h) return C;
                m.async && 0 < m.timeout && (f = T.setTimeout(function () {
                    C.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, u.send(a, n)
                } catch (t) {
                    if (h) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return C
        },
        getJSON: function (t, e, n) {
            return ht.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return ht.get(t, void 0, e, "script")
        }
    }), ht.each(["get", "post"], function (t, o) {
        ht[o] = function (t, e, n, i) {
            return ct(e) && (i = i || n, n = e, e = void 0), ht.ajax(ht.extend({
                url: t,
                type: o,
                dataType: i,
                data: e,
                success: n
            }, ht.isPlainObject(t) && t))
        }
    }), ht.ajaxPrefilter(function (t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }), ht._evalUrl = function (t, e, n) {
        return ht.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () { }
            },
            dataFilter: function (t) {
                ht.globalEval(t, e, n)
            }
        })
    }, ht.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (ct(t) && (t = t.call(this[0])), e = ht(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (n) {
            return ct(n) ? this.each(function (t) {
                ht(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = ht(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (e) {
            var n = ct(e);
            return this.each(function (t) {
                ht(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                ht(this).replaceWith(this.childNodes)
            }), this
        }
    }), ht.expr.pseudos.hidden = function (t) {
        return !ht.expr.pseudos.visible(t)
    }, ht.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, ht.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (t) { }
    };
    var Ue = {
        0: 200,
        1223: 204
    },
        We = ht.ajaxSettings.xhr();
    lt.cors = !!We && "withCredentials" in We, lt.ajax = We = !!We, ht.ajaxTransport(function (o) {
        var r, s;
        if (lt.cors || We && !o.crossDomain) return {
            send: function (t, e) {
                var n, i = o.xhr();
                if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
                r = function (t) {
                    return function () {
                        r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Ue[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                    4 === i.readyState && T.setTimeout(function () {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    i.send(o.hasContent && o.data || null)
                } catch (t) {
                    if (r) throw t
                }
            },
            abort: function () {
                r && r()
            }
        }
    }), ht.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), ht.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return ht.globalEval(t), t
            }
        }
    }), ht.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ht.ajaxTransport("script", function (n) {
        var i, o;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (t, e) {
                i = ht("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function (t) {
                    i.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), dt.head.appendChild(i[0])
            },
            abort: function () {
                o && o()
            }
        }
    });
    var ze, Ve = [],
        Qe = /(=)\?(?=&|$)|\?\?/;
    ht.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Ve.pop() || ht.expando + "_" + Ne.guid++;
            return this[t] = !0, t
        }
    }), ht.ajaxPrefilter("json jsonp", function (t, e, n) {
        var i, o, r, s = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ct(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qe, "$1" + i) : !1 !== t.jsonp && (t.url += ($e.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return r || ht.error(i + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = T[i], T[i] = function () {
            r = arguments
        }, n.always(function () {
            void 0 === o ? ht(T).removeProp(i) : T[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Ve.push(i)), r && ct(o) && o(r[0]), r = o = void 0
        }), "script"
    }), lt.createHTMLDocument = ((ze = dt.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ze.childNodes.length), ht.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (lt.createHTMLDocument ? ((i = (e = dt.implementation.createHTMLDocument("")).createElement("base")).href = dt.location.href, e.head.appendChild(i)) : e = dt), r = !n && [], (o = bt.exec(t)) ? [e.createElement(o[1])] : (o = x([t], e, r), r && r.length && ht(r).remove(), ht.merge([], o.childNodes)));
        var i, o, r
    }, ht.fn.load = function (t, e, n) {
        var i, o, r, s = this,
            a = t.indexOf(" ");
        return -1 < a && (i = W(t.slice(a)), t = t.slice(0, a)), ct(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && ht.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, s.html(i ? ht("<div>").append(ht.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, ht.expr.pseudos.animated = function (e) {
        return ht.grep(ht.timers, function (t) {
            return e === t.elem
        }).length
    }, ht.offset = {
        setOffset: function (t, e, n) {
            var i, o, r, s, a, l, c = ht.css(t, "position"),
                u = ht(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), r = ht.css(t, "top"), l = ht.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ct(e) && (e = e.call(t, n, ht.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
        }
    }, ht.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ht.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === ht.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === ht.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((o = ht(t).offset()).top += ht.css(t, "borderTopWidth", !0), o.left += ht.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - o.top - ht.css(i, "marginTop", !0),
                    left: e.left - o.left - ht.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === ht.css(t, "position");) t = t.offsetParent;
                return t || qt
            })
        }
    }), ht.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, o) {
        var r = "pageYOffset" === o;
        ht.fn[e] = function (t) {
            return Nt(this, function (t, e, n) {
                var i;
                if (ut(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[o] : t[e];
                i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : t[e] = n
            }, e, t, arguments.length)
        }
    }), ht.each(["top", "left"], function (t, n) {
        ht.cssHooks[n] = I(lt.pixelPosition, function (t, e) {
            if (e) return e = _(t, n), ne.test(e) ? ht(t).position()[n] + "px" : e
        })
    }), ht.each({
        Height: "height",
        Width: "width"
    }, function (s, a) {
        ht.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function (i, r) {
            ht.fn[r] = function (t, e) {
                var n = arguments.length && (i || "boolean" != typeof t),
                    o = i || (!0 === t || !0 === e ? "margin" : "border");
                return Nt(this, function (t, e, n) {
                    var i;
                    return ut(t) ? 0 === r.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? ht.css(t, e, o) : ht.style(t, e, n, o)
                }, a, n ? t : void 0, n)
            }
        })
    }), ht.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ht.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ht.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ht.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
        ht.fn[n] = function (t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    });
    var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    ht.proxy = function (t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), ct(t)) return i = Z.call(arguments, 2), (o = function () {
            return t.apply(e || this, i.concat(Z.call(arguments)))
        }).guid = t.guid = t.guid || ht.guid++, o
    }, ht.holdReady = function (t) {
        t ? ht.readyWait++ : ht.ready(!0)
    }, ht.isArray = Array.isArray, ht.parseJSON = JSON.parse, ht.nodeName = c, ht.isFunction = ct, ht.isWindow = ut, ht.camelCase = p, ht.type = m, ht.now = Date.now, ht.isNumeric = function (t) {
        var e = ht.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, ht.trim = function (t) {
        return null == t ? "" : (t + "").replace(Xe, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ht
    });
    var Ge = T.jQuery,
        Ye = T.$;
    return ht.noConflict = function (t) {
        return T.$ === ht && (T.$ = Ye), t && T.jQuery === ht && (T.jQuery = Ge), ht
    }, void 0 === t && (T.jQuery = T.$ = ht), ht
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function () {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
    function (o) {
        "use strict";
        o.fn.emulateTransitionEnd = function (t) {
            var e = !1,
                n = this;
            return o(this).one("bsTransitionEnd", function () {
                e = !0
            }), setTimeout(function () {
                e || o(n).trigger(o.support.transition.end)
            }, t), this
        }, o(function () {
            o.support.transition = function i() {
                var t = document.createElement("bootstrap"),
                    e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (var n in e)
                    if (t.style[n] !== undefined) return {
                        end: e[n]
                    };
                return !1
            }(), o.support.transition && (o.event.special.bsTransitionEnd = {
                bindType: o.support.transition.end,
                delegateType: o.support.transition.end,
                handle: function (t) {
                    if (o(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    function (r) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            s = function (t) {
                r(t).on("click", e, this.close)
            };
        s.VERSION = "3.4.1", s.TRANSITION_DURATION = 150, s.prototype.close = function (t) {
            function e() {
                o.detach().trigger("closed.bs.alert").remove()
            }
            var n = r(this),
                i = n.attr("data-target");
            i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;
            var o = r(document).find(i);
            t && t.preventDefault(), o.length || (o = n.closest(".alert")), o.trigger(t = r.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), r.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(s.TRANSITION_DURATION) : e())
        };
        var t = r.fn.alert;
        r.fn.alert = function i(n) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("bs.alert");
                e || t.data("bs.alert", e = new s(this)), "string" == typeof n && e[n].call(t)
            })
        }, r.fn.alert.Constructor = s, r.fn.alert.noConflict = function () {
            return r.fn.alert = t, this
        }, r(document).on("click.bs.alert.data-api", e, s.prototype.close)
    }(jQuery),
    function (r) {
        "use strict";

        function n(i) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("bs.button"),
                    n = "object" == typeof i && i;
                e || t.data("bs.button", e = new o(this, n)), "toggle" == i ? e.toggle() : i && e.setState(i)
            })
        }
        var o = function (t, e) {
            this.$element = r(t), this.options = r.extend({}, o.DEFAULTS, e), this.isLoading = !1
        };
        o.VERSION = "3.4.1", o.DEFAULTS = {
            loadingText: "loading..."
        }, o.prototype.setState = function (t) {
            var e = "disabled",
                n = this.$element,
                i = n.is("input") ? "val" : "html",
                o = n.data();
            t += "Text", null == o.resetText && n.data("resetText", n[i]()), setTimeout(r.proxy(function () {
                n[i](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(e).removeAttr(e).prop(e, !1))
            }, this), 0)
        }, o.prototype.toggle = function () {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var t = r.fn.button;
        r.fn.button = n, r.fn.button.Constructor = o, r.fn.button.noConflict = function () {
            return r.fn.button = t, this
        }, r(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var e = r(t.target).closest(".btn");
            n.call(e, "toggle"), r(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            r(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(jQuery),
    function (d) {
        "use strict";

        function a(o) {
            return this.each(function () {
                var t = d(this),
                    e = t.data("bs.carousel"),
                    n = d.extend({}, p.DEFAULTS, t.data(), "object" == typeof o && o),
                    i = "string" == typeof o ? o : n.slide;
                e || t.data("bs.carousel", e = new p(this, n)), "number" == typeof o ? e.to(o) : i ? e[i]() : n.interval && e.pause().cycle()
            })
        }
        var p = function (t, e) {
            this.$element = d(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this))
        };
        p.VERSION = "3.4.1", p.TRANSITION_DURATION = 600, p.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, p.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, p.prototype.cycle = function (t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval)), this
        }, p.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, p.prototype.getItemForDirection = function (t, e) {
            var n = this.getItemIndex(e);
            if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
            var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(i)
        }, p.prototype.to = function (t) {
            var e = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
        }, p.prototype.pause = function (t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, p.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, p.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, p.prototype.slide = function (t, e) {
            var n = this.$element.find(".item.active"),
                i = e || this.getItemForDirection(t, n),
                o = this.interval,
                r = "next" == t ? "left" : "right",
                s = this;
            if (i.hasClass("active")) return this.sliding = !1;
            var a = i[0],
                l = d.Event("slide.bs.carousel", {
                    relatedTarget: a,
                    direction: r
                });
            if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var c = d(this.$indicators.children()[this.getItemIndex(i)]);
                    c && c.addClass("active")
                }
                var u = d.Event("slid.bs.carousel", {
                    relatedTarget: a,
                    direction: r
                });
                return d.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), "object" == typeof i && i.length && i[0].offsetWidth, n.addClass(r), i.addClass(r), n.one("bsTransitionEnd", function () {
                    i.removeClass([t, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), s.sliding = !1, setTimeout(function () {
                        s.$element.trigger(u)
                    }, 0)
                }).emulateTransitionEnd(p.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(u)), o && this.cycle(), this
            }
        };
        var t = d.fn.carousel;
        d.fn.carousel = a, d.fn.carousel.Constructor = p, d.fn.carousel.noConflict = function () {
            return d.fn.carousel = t, this
        };
        var e = function (t) {
            var e = d(this),
                n = e.attr("href");
            n && (n = n.replace(/.*(?=#[^\s]+$)/, ""));
            var i = e.attr("data-target") || n,
                o = d(document).find(i);
            if (o.hasClass("carousel")) {
                var r = d.extend({}, o.data(), e.data()),
                    s = e.attr("data-slide-to");
                s && (r.interval = !1), a.call(o, r), s && o.data("bs.carousel").to(s), t.preventDefault()
            }
        };
        d(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), d(window).on("load", function () {
            d('[data-ride="carousel"]').each(function () {
                var t = d(this);
                a.call(t, t.data())
            })
        })
    }(jQuery),
    function (s) {
        "use strict";

        function o(t) {
            var e, n = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
            return s(document).find(n)
        }

        function a(i) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.collapse"),
                    n = s.extend({}, l.DEFAULTS, t.data(), "object" == typeof i && i);
                !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || t.data("bs.collapse", e = new l(this, n)), "string" == typeof i && e[i]()
            })
        }
        var l = function (t, e) {
            this.$element = s(t), this.options = s.extend({}, l.DEFAULTS, e), this.$trigger = s('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        l.VERSION = "3.4.1", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
            toggle: !0
        }, l.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, l.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                    var n = s.Event("show.bs.collapse");
                    if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                        e && e.length && (a.call(e, "hide"), t || e.data("bs.collapse", null));
                        var i = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var o = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!s.support.transition) return o.call(this);
                        var r = s.camelCase(["scroll", i].join("-"));
                        this.$element.one("bsTransitionEnd", s.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][r])
                    }
                }
            }
        }, l.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = s.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var e = this.dimension();
                    this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var n = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!s.support.transition) return n.call(this);
                    this.$element[e](0).one("bsTransitionEnd", s.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION)
                }
            }
        }, l.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, l.prototype.getParent = function () {
            return s(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(s.proxy(function (t, e) {
                var n = s(e);
                this.addAriaAndCollapsedClass(o(n), n)
            }, this)).end()
        }, l.prototype.addAriaAndCollapsedClass = function (t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var t = s.fn.collapse;
        s.fn.collapse = a, s.fn.collapse.Constructor = l, s.fn.collapse.noConflict = function () {
            return s.fn.collapse = t, this
        }, s(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
            var e = s(this);
            e.attr("data-target") || t.preventDefault();
            var n = o(e),
                i = n.data("bs.collapse") ? "toggle" : e.data();
            a.call(n, i)
        })
    }(jQuery),
    function (s) {
        "use strict";

        function a(t) {
            var e = t.attr("data-target");
            e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
            var n = "#" !== e ? s(document).find(e) : null;
            return n && n.length ? n : t.parent()
        }

        function r(i) {
            i && 3 === i.which || (s(".dropdown-backdrop").remove(), s(l).each(function () {
                var t = s(this),
                    e = a(t),
                    n = {
                        relatedTarget: this
                    };
                e.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && s.contains(e[0], i.target) || (e.trigger(i = s.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(s.Event("hidden.bs.dropdown", n)))))
            }))
        }
        var l = '[data-toggle="dropdown"]',
            i = function (t) {
                s(t).on("click.bs.dropdown", this.toggle)
            };
        i.VERSION = "3.4.1", i.prototype.toggle = function (t) {
            var e = s(this);
            if (!e.is(".disabled, :disabled")) {
                var n = a(e),
                    i = n.hasClass("open");
                if (r(), !i) {
                    "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", r);
                    var o = {
                        relatedTarget: this
                    };
                    if (n.trigger(t = s.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
                    e.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", o))
                }
                return !1
            }
        }, i.prototype.keydown = function (t) {
            if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                var e = s(this);
                if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                    var n = a(e),
                        i = n.hasClass("open");
                    if (!i && 27 != t.which || i && 27 == t.which) return 27 == t.which && n.find(l).trigger("focus"), e.trigger("click");
                    var o = n.find(".dropdown-menu li:not(.disabled):visible a");
                    if (o.length) {
                        var r = o.index(t.target);
                        38 == t.which && 0 < r && r--, 40 == t.which && r < o.length - 1 && r++, ~r || (r = 0), o.eq(r).trigger("focus")
                    }
                }
            }
        };
        var t = s.fn.dropdown;
        s.fn.dropdown = function e(n) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.dropdown");
                e || t.data("bs.dropdown", e = new i(this)), "string" == typeof n && e[n].call(t)
            })
        }, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function () {
            return s.fn.dropdown = t, this
        }, s(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", l, i.prototype.toggle).on("keydown.bs.dropdown.data-api", l, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
    }(jQuery),
    function (s) {
        "use strict";

        function a(i, o) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.modal"),
                    n = s.extend({}, r.DEFAULTS, t.data(), "object" == typeof i && i);
                e || t.data("bs.modal", e = new r(this, n)), "string" == typeof i ? e[i](o) : n.show && e.show(o)
            })
        }
        var r = function (t, e) {
            this.options = e, this.$body = s(document.body), this.$element = s(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        r.VERSION = "3.4.1", r.TRANSITION_DURATION = 300, r.BACKDROP_TRANSITION_DURATION = 150, r.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, r.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, r.prototype.show = function (n) {
            var i = this,
                t = s.Event("show.bs.modal", {
                    relatedTarget: n
                });
            this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                    s(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var t = s.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), t && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var e = s.Event("shown.bs.modal", {
                    relatedTarget: n
                });
                t ? i.$dialog.one("bsTransitionEnd", function () {
                    i.$element.trigger("focus").trigger(e)
                }).emulateTransitionEnd(r.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(e)
            }))
        }, r.prototype.hide = function (t) {
            t && t.preventDefault(), t = s.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : this.hideModal())
        }, r.prototype.enforceFocus = function () {
            s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, r.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, r.prototype.resize = function () {
            this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
        }, r.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, r.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, r.prototype.backdrop = function (t) {
            var e = this,
                n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = s.support.transition && n;
                if (this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function (t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function () {
                    e.removeBackdrop(), t && t()
                };
                s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : o()
            } else t && t()
        }, r.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, r.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, r.prototype.resetAdjustments = function () {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, r.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, r.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "";
            var o = this.scrollbarWidth;
            this.bodyIsOverflowing && (this.$body.css("padding-right", t + o), s(this.fixedContent).each(function (t, e) {
                var n = e.style.paddingRight,
                    i = s(e).css("padding-right");
                s(e).data("padding-right", n).css("padding-right", parseFloat(i) + o + "px")
            }))
        }, r.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad), s(this.fixedContent).each(function (t, e) {
                var n = s(e).data("padding-right");
                s(e).removeData("padding-right"), e.style.paddingRight = n || ""
            })
        }, r.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var t = s.fn.modal;
        s.fn.modal = a, s.fn.modal.Constructor = r, s.fn.modal.noConflict = function () {
            return s.fn.modal = t, this
        }, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
            var e = s(this),
                n = e.attr("href"),
                i = e.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""),
                o = s(document).find(i),
                r = o.data("bs.modal") ? "toggle" : s.extend({
                    remote: !/#/.test(n) && n
                }, o.data(), e.data());
            e.is("a") && t.preventDefault(), o.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                    e.is(":visible") && e.trigger("focus")
                })
            }), a.call(o, r, this)
        })
    }(jQuery),
    function (g) {
        "use strict";

        function h(t, e) {
            var n = t.nodeName.toLowerCase();
            if (-1 !== g.inArray(n, e)) return -1 === g.inArray(n, s) || Boolean(t.nodeValue.match(a) || t.nodeValue.match(l));
            for (var i = g(e).filter(function (t, e) {
                return e instanceof RegExp
            }), o = 0, r = i.length; o < r; o++)
                if (n.match(i[o])) return !0;
            return !1
        }

        function i(t, e, n) {
            if (0 === t.length) return t;
            if (n && "function" == typeof n) return n(t);
            if (!document.implementation || !document.implementation.createHTMLDocument) return t;
            var i = document.implementation.createHTMLDocument("sanitization");
            i.body.innerHTML = t;
            for (var o = g.map(e, function (t, e) {
                return e
            }), r = g(i.body).find("*"), s = 0, a = r.length; s < a; s++) {
                var l = r[s],
                    c = l.nodeName.toLowerCase();
                if (-1 !== g.inArray(c, o))
                    for (var u = g.map(l.attributes, function (t) {
                        return t
                    }), d = [].concat(e["*"] || [], e[c] || []), p = 0, f = u.length; p < f; p++) h(u[p], d) || l.removeAttribute(u[p].nodeName);
                else l.parentNode.removeChild(l)
            }
            return i.body.innerHTML
        }
        var o = ["sanitize", "whiteList", "sanitizeFn"],
            s = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            t = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            a = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
            m = function (t, e) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
            };
        m.VERSION = "3.4.1", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            },
            sanitize: !0,
            sanitizeFn: null,
            whiteList: t
        }, m.prototype.init = function (t, e, n) {
            if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && g(document).find(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                var r = i[o];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var s = "hover" == r ? "mouseenter" : "focusin",
                        a = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = g.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, m.prototype.getDefaults = function () {
            return m.DEFAULTS
        }, m.prototype.getOptions = function (t) {
            var e = this.$element.data();
            for (var n in e) e.hasOwnProperty(n) && -1 !== g.inArray(n, o) && delete e[n];
            return (t = g.extend({}, this.getDefaults(), e, t)).delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t.sanitize && (t.template = i(t.template, t.whiteList, t.sanitizeFn)), t
        }, m.prototype.getDelegateOptions = function () {
            var n = {},
                i = this.getDefaults();
            return this._options && g.each(this._options, function (t, e) {
                i[t] != e && (n[t] = e)
            }), n
        }, m.prototype.enter = function (t) {
            var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
            if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";
            else {
                if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
                e.timeout = setTimeout(function () {
                    "in" == e.hoverState && e.show()
                }, e.options.delay.show)
            }
        }, m.prototype.isInStateTrue = function () {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, m.prototype.leave = function (t) {
            var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
            if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
                if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
                e.timeout = setTimeout(function () {
                    "out" == e.hoverState && e.hide()
                }, e.options.delay.hide)
            }
        }, m.prototype.show = function () {
            var t = g.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !e) return;
                var n = this,
                    i = this.tip(),
                    o = this.getUID(this.type);
                this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                    s = /\s?auto?\s?/i,
                    a = s.test(r);
                a && (r = r.replace(s, "") || "top"), i.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(r).data("bs." + this.type, this), this.options.container ? i.appendTo(g(document).find(this.options.container)) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var l = this.getPosition(),
                    c = i[0].offsetWidth,
                    u = i[0].offsetHeight;
                if (a) {
                    var d = r,
                        p = this.getPosition(this.$viewport);
                    r = "bottom" == r && l.bottom + u > p.bottom ? "top" : "top" == r && l.top - u < p.top ? "bottom" : "right" == r && l.right + c > p.width ? "left" : "left" == r && l.left - c < p.left ? "right" : r, i.removeClass(d).addClass(r)
                }
                var f = this.getCalculatedOffset(r, l, c, u);
                this.applyPlacement(f, r);
                var h = function () {
                    var t = n.hoverState;
                    n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
                };
                g.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", h).emulateTransitionEnd(m.TRANSITION_DURATION) : h()
            }
        }, m.prototype.applyPlacement = function (t, e) {
            var n = this.tip(),
                i = n[0].offsetWidth,
                o = n[0].offsetHeight,
                r = parseInt(n.css("margin-top"), 10),
                s = parseInt(n.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(s) && (s = 0), t.top += r, t.left += s, g.offset.setOffset(n[0], g.extend({
                using: function (t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, t), 0), n.addClass("in");
            var a = n[0].offsetWidth,
                l = n[0].offsetHeight;
            "top" == e && l != o && (t.top = t.top + o - l);
            var c = this.getViewportAdjustedDelta(e, t, a, l);
            c.left ? t.left += c.left : t.top += c.top;
            var u = /top|bottom/.test(e),
                d = u ? 2 * c.left - i + a : 2 * c.top - o + l,
                p = u ? "offsetWidth" : "offsetHeight";
            n.offset(t), this.replaceArrow(d, n[0][p], u)
        }, m.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, m.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle();
            this.options.html ? (this.options.sanitize && (e = i(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
        }, m.prototype.hide = function (t) {
            function e() {
                "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t()
            }
            var n = this,
                i = g(this.$tip),
                o = g.Event("hide.bs." + this.type);
            if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(m.TRANSITION_DURATION) : e(), this.hoverState = null, this
        }, m.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, m.prototype.hasContent = function () {
            return this.getTitle()
        }, m.prototype.getPosition = function (t) {
            var e = (t = t || this.$element)[0],
                n = "BODY" == e.tagName,
                i = e.getBoundingClientRect();
            null == i.width && (i = g.extend({}, i, {
                width: i.right - i.left,
                height: i.bottom - i.top
            }));
            var o = window.SVGElement && e instanceof window.SVGElement,
                r = n ? {
                    top: 0,
                    left: 0
                } : o ? null : t.offset(),
                s = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                a = n ? {
                    width: g(window).width(),
                    height: g(window).height()
                } : null;
            return g.extend({}, i, s, a, r)
        }, m.prototype.getCalculatedOffset = function (t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, m.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - r - s.scroll,
                    l = e.top + r - s.scroll + i;
                a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
            } else {
                var c = e.left - r,
                    u = e.left + r + n;
                c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
            }
            return o
        }, m.prototype.getTitle = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, m.prototype.getUID = function (t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        }, m.prototype.tip = function () {
            if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, m.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, m.prototype.enable = function () {
            this.enabled = !0
        }, m.prototype.disable = function () {
            this.enabled = !1
        }, m.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, m.prototype.toggle = function (t) {
            var e = this;
            t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
        }, m.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide(function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            })
        }, m.prototype.sanitizeHtml = function (t) {
            return i(t, this.options.whiteList, this.options.sanitizeFn)
        };
        var e = g.fn.tooltip;
        g.fn.tooltip = function n(i) {
            return this.each(function () {
                var t = g(this),
                    e = t.data("bs.tooltip"),
                    n = "object" == typeof i && i;
                !e && /destroy|hide/.test(i) || (e || t.data("bs.tooltip", e = new m(this, n)), "string" == typeof i && e[i]())
            })
        }, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function () {
            return g.fn.tooltip = e, this
        }
    }(jQuery),
    function (o) {
        "use strict";
        var r = function (t, e) {
            this.init("popover", t, e)
        };
        if (!o.fn.tooltip) throw new Error("Popover requires tooltip.js");
        r.VERSION = "3.4.1", r.DEFAULTS = o.extend({}, o.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), ((r.prototype = o.extend({}, o.fn.tooltip.Constructor.prototype)).constructor = r).prototype.getDefaults = function () {
            return r.DEFAULTS
        }, r.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            if (this.options.html) {
                var i = typeof n;
                this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
            } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
            t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, r.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, r.prototype.getContent = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, r.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var t = o.fn.popover;
        o.fn.popover = function e(i) {
            return this.each(function () {
                var t = o(this),
                    e = t.data("bs.popover"),
                    n = "object" == typeof i && i;
                !e && /destroy|hide/.test(i) || (e || t.data("bs.popover", e = new r(this, n)), "string" == typeof i && e[i]())
            })
        }, o.fn.popover.Constructor = r, o.fn.popover.noConflict = function () {
            return o.fn.popover = t, this
        }
    }(jQuery),
    function (r) {
        "use strict";

        function o(t, e) {
            this.$body = r(document.body), this.$scrollElement = r(t).is(document.body) ? r(window) : r(t), this.options = r.extend({}, o.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r.proxy(this.process, this)), this.refresh(), this.process()
        }

        function e(i) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("bs.scrollspy"),
                    n = "object" == typeof i && i;
                e || t.data("bs.scrollspy", e = new o(this, n)), "string" == typeof i && e[i]()
            })
        }
        o.VERSION = "3.4.1", o.DEFAULTS = {
            offset: 10
        }, o.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, o.prototype.refresh = function () {
            var t = this,
                i = "offset",
                o = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), r.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var t = r(this),
                    e = t.data("target") || t.attr("href"),
                    n = /^#./.test(e) && r(e);
                return n && n.length && n.is(":visible") && [
                    [n[i]().top + o, e]
                ] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, o.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                o = this.offsets,
                r = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), i <= e) return s != (t = r[r.length - 1]) && this.activate(t);
            if (s && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) s != r[t] && e >= o[t] && (o[t + 1] === undefined || e < o[t + 1]) && this.activate(r[t])
        }, o.prototype.activate = function (t) {
            this.activeTarget = t, this.clear();
            var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                n = r(e).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, o.prototype.clear = function () {
            r(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var t = r.fn.scrollspy;
        r.fn.scrollspy = e, r.fn.scrollspy.Constructor = o, r.fn.scrollspy.noConflict = function () {
            return r.fn.scrollspy = t, this
        }, r(window).on("load.bs.scrollspy.data-api", function () {
            r('[data-spy="scroll"]').each(function () {
                var t = r(this);
                e.call(t, t.data())
            })
        })
    }(jQuery),
    function (a) {
        "use strict";

        function e(n) {
            return this.each(function () {
                var t = a(this),
                    e = t.data("bs.tab");
                e || t.data("bs.tab", e = new s(this)), "string" == typeof n && e[n]()
            })
        }
        var s = function (t) {
            this.element = a(t)
        };
        s.VERSION = "3.4.1", s.TRANSITION_DURATION = 150, s.prototype.show = function () {
            var t = this.element,
                e = t.closest("ul:not(.dropdown-menu)"),
                n = t.data("target");
            if (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var i = e.find(".active:last a"),
                    o = a.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    r = a.Event("show.bs.tab", {
                        relatedTarget: i[0]
                    });
                if (i.trigger(o), t.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var s = a(document).find(n);
                    this.activate(t.closest("li"), e), this.activate(s, s.parent(), function () {
                        i.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: i[0]
                        })
                    })
                }
            }
        }, s.prototype.activate = function (t, e, n) {
            function i() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
            }
            var o = e.find("> .active"),
                r = n && a.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
            o.length && r ? o.one("bsTransitionEnd", i).emulateTransitionEnd(s.TRANSITION_DURATION) : i(), o.removeClass("in")
        };
        var t = a.fn.tab;
        a.fn.tab = e, a.fn.tab.Constructor = s, a.fn.tab.noConflict = function () {
            return a.fn.tab = t, this
        };
        var n = function (t) {
            t.preventDefault(), e.call(a(this), "show")
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
    }(jQuery),
    function (l) {
        "use strict";

        function n(i) {
            return this.each(function () {
                var t = l(this),
                    e = t.data("bs.affix"),
                    n = "object" == typeof i && i;
                e || t.data("bs.affix", e = new c(this, n)), "string" == typeof i && e[i]()
            })
        }
        var c = function (t, e) {
            this.options = l.extend({}, c.DEFAULTS, e);
            var n = this.options.target === c.DEFAULTS.target ? l(this.options.target) : l(document).find(this.options.target);
            this.$target = n.on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        c.VERSION = "3.4.1", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
            offset: 0,
            target: window
        }, c.prototype.getState = function (t, e, n, i) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                s = this.$target.height();
            if (null != n && "top" == this.affixed) return o < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
            var a = null == this.affixed,
                l = a ? o : r.top;
            return null != n && o <= n ? "top" : null != i && t - i <= l + (a ? s : e) && "bottom"
        }, c.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, c.prototype.checkPositionWithEventLoop = function () {
            setTimeout(l.proxy(this.checkPosition, this), 1)
        }, c.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    e = this.options.offset,
                    n = e.top,
                    i = e.bottom,
                    o = Math.max(l(document).height(), l(document.body).height());
                "object" != typeof e && (i = n = e), "function" == typeof n && (n = e.top(this.$element)), "function" == typeof i && (i = e.bottom(this.$element));
                var r = this.getState(o, t, n, i);
                if (this.affixed != r) {
                    null != this.unpin && this.$element.css("top", "");
                    var s = "affix" + (r ? "-" + r : ""),
                        a = l.Event(s + ".bs.affix");
                    if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                    this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(s).trigger(s.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == r && this.$element.offset({
                    top: o - t - i
                })
            }
        };
        var t = l.fn.affix;
        l.fn.affix = n, l.fn.affix.Constructor = c, l.fn.affix.noConflict = function () {
            return l.fn.affix = t, this
        }, l(window).on("load", function () {
            l('[data-spy="affix"]').each(function () {
                var t = l(this),
                    e = t.data();
                e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), n.call(t, e)
            })
        })
    }(jQuery),
    function (v) {
        function y(t, e, n) {
            var i = t[0],
                o = /er/.test(n) ? _indeterminate : /bl/.test(n) ? S : E,
                r = n == _update ? {
                    checked: i[E],
                    disabled: i[S],
                    indeterminate: "true" == t.attr(_indeterminate) || "false" == t.attr(_determinate)
                } : i[o];
            if (/^(ch|di|in)/.test(n) && !r) b(t, o);
            else if (/^(un|en|de)/.test(n) && r) x(t, o);
            else if (n == _update)
                for (var s in r) r[s] ? b(t, s, !0) : x(t, s, !0);
            else e && "toggle" != n || (e || t[_callback]("ifClicked"), r ? i[_type] !== k && x(t, o) : b(t, o))
        }

        function b(t, e, n) {
            var i = t[0],
                o = t.parent(),
                r = e == E,
                s = e == _indeterminate,
                a = e == S,
                l = s ? _determinate : r ? m : "enabled",
                c = f(t, l + h(i[_type])),
                u = f(t, e + h(i[_type]));
            if (!0 !== i[e]) {
                if (!n && e == E && i[_type] == k && i.name) {
                    var d = t.closest("form"),
                        p = 'input[name="' + i.name + '"]';
                    (p = d.length ? d.find(p) : v(p)).each(function () {
                        this !== i && v(this).data(C) && x(v(this), e)
                    })
                }
                s ? (i[e] = !0, i[E] && x(t, E, "force")) : (n || (i[e] = !0), r && i[_indeterminate] && x(t, _indeterminate, !1)), g(t, r, e, n)
            }
            i[S] && f(t, _cursor, !0) && o.find("." + T).css(_cursor, "default"), o[_add](u || f(t, e) || ""), o.attr("role") && !s && o.attr("aria-" + (a ? S : E), "true"), o[_remove](c || f(t, l) || "")
        }

        function x(t, e, n) {
            var i = t[0],
                o = t.parent(),
                r = e == E,
                s = e == _indeterminate,
                a = e == S,
                l = s ? _determinate : r ? m : "enabled",
                c = f(t, l + h(i[_type])),
                u = f(t, e + h(i[_type]));
            !1 !== i[e] && (!s && n && "force" != n || (i[e] = !1), g(t, r, l, n)), !i[S] && f(t, _cursor, !0) && o.find("." + T).css(_cursor, "pointer"), o[_remove](u || f(t, e) || ""), o.attr("role") && !s && o.attr("aria-" + (a ? S : E), "false"), o[_add](c || f(t, l) || "")
        }

        function w(t, e) {
            t.data(C) && (t.parent().html(t.attr("style", t.data(C).s || "")), e && t[_callback](e), t.off(".i").unwrap(), v(_label + '[for="' + t[0].id + '"]').add(t.closest(_label)).off(".i"))
        }

        function f(t, e, n) {
            if (t.data(C)) return t.data(C).o[e + (n ? "" : "Class")]
        }

        function h(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function g(t, e, n, i) {
            i || (e && t[_callback]("ifToggled"), t[_callback]("ifChanged")[_callback]("if" + h(n)))
        }
        var C = "iCheck",
            T = C + "-helper",
            k = "radio",
            E = "checked",
            m = "un" + E,
            S = "disabled";
        _determinate = "determinate", _indeterminate = "in" + _determinate, _update = "update", _type = "type", _click = "click", _touch = "touchbegin.i touchend.i", _add = "addClass", _remove = "removeClass", _callback = "trigger", _label = "label", _cursor = "cursor", _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent), v.fn[C] = function (e, n) {
            var i = 'input[type="checkbox"], input[type="' + k + '"]',
                o = v(),
                t = function (t) {
                    t.each(function () {
                        var t = v(this);
                        o = t.is(i) ? o.add(t) : o.add(t.find(i))
                    })
                };
            if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(e)) return e = e.toLowerCase(), t(this), o.each(function () {
                var t = v(this);
                "destroy" == e ? w(t, "ifDestroyed") : y(t, !0, e), v.isFunction(n) && n()
            });
            if ("object" != typeof e && e) return this;
            var u = v.extend({
                checkedClass: E,
                disabledClass: S,
                indeterminateClass: _indeterminate,
                labelHover: !0
            }, e),
                r = u.handle,
                d = u.hoverClass || "hover",
                p = u.focusClass || "focus",
                f = u.activeClass || "active",
                h = !!u.labelHover,
                g = u.labelHoverClass || "hover",
                m = 0 | ("" + u.increaseArea).replace("%", "");
            return "checkbox" != r && r != k || (i = 'input[type="' + r + '"]'), m < -50 && (m = -50), t(this), o.each(function () {
                var i = v(this);
                w(i);
                var o = this,
                    t = o.id,
                    e = {
                        position: "absolute",
                        top: n = -m + "%",
                        left: n,
                        display: "block",
                        width: e = 100 + 2 * m + "%",
                        height: e,
                        margin: 0,
                        padding: 0,
                        background: "#fff",
                        border: 0,
                        opacity: 0
                    },
                    n = _mobile ? {
                        position: "absolute",
                        visibility: "hidden"
                    } : m ? e : {
                        position: "absolute",
                        opacity: 0
                    },
                    r = "checkbox" == o[_type] ? u.checkboxClass || "icheckbox" : u.radioClass || "i" + k,
                    s = v(_label + '[for="' + t + '"]').add(i.closest(_label)),
                    a = !!u.aria,
                    l = C + "-" + Math.random().toString(36).substr(2, 6),
                    c = '<div class="' + r + '" ' + (a ? 'role="' + o[_type] + '" ' : "");
                a && s.each(function () {
                    c += 'aria-labelledby="', this.id ? c += this.id : (this.id = l, c += l), c += '"'
                }), c = i.wrap(c + "/>")[_callback]("ifCreated").parent().append(u.insert), e = v('<ins class="' + T + '"/>').css(e).appendTo(c), i.data(C, {
                    o: u,
                    s: i.attr("style")
                }).css(n), u.inheritClass && c[_add](o.className || ""), u.inheritID && t && c.attr("id", C + "-" + t), "static" == c.css("position") && c.css("position", "relative"), y(i, !0, _update), s.length && s.on(_click + ".i mouseover.i mouseout.i " + _touch, function (t) {
                    var e = t[_type],
                        n = v(this);
                    if (!o[S]) {
                        if (e == _click) {
                            if (v(t.target).is("a")) return;
                            y(i, !1, !0)
                        } else h && (/ut|nd/.test(e) ? (c[_remove](d), n[_remove](g)) : (c[_add](d), n[_add](g)));
                        if (!_mobile) return !1;
                        t.stopPropagation()
                    }
                }), i.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (t) {
                    var e = t[_type];
                    return t = t.keyCode, e != _click && ("keydown" == e && 32 == t ? (o[_type] == k && o[E] || (o[E] ? x(i, E) : b(i, E)), !1) : void ("keyup" == e && o[_type] == k ? !o[E] && b(i, E) : /us|ur/.test(e) && c["blur" == e ? _remove : _add](p)))
                }), e.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (t) {
                    var e = t[_type],
                        n = /wn|up/.test(e) ? f : d;
                    if (!o[S]) {
                        if (e == _click ? y(i, !1, !0) : (/wn|er|in/.test(e) ? c[_add](n) : c[_remove](n + " " + f), s.length && h && n == d && s[/ut|nd/.test(e) ? _remove : _add](g)), !_mobile) return !1;
                        t.stopPropagation()
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function (v, n, y, b) {
        var o = v.fn.peity = function (n, i) {
            return e && this.each(function () {
                var t = v(this),
                    e = t.data("_peity");
                e ? (n && (e.type = n), v.extend(e.opts, i)) : (e = new r(t, n, v.extend({}, o.defaults[n], t.data("peity"), i)), t.change(function () {
                    e.draw()
                }).data("_peity", e)), e.draw()
            }), this
        },
            r = function (t, e, n) {
                this.$el = t, this.type = e, this.opts = n
            },
            t = r.prototype,
            x = t.svgElement = function (t, e) {
                return v(n.createElementNS("http://www.w3.org/2000/svg", t)).attr(e)
            },
            e = "createElementNS" in n && x("svg", {})[0].createSVGRect;
        t.draw = function () {
            var t = this.opts;
            o.graphers[this.type].call(this, t), t.after && t.after.call(this, t)
        }, t.fill = function () {
            var n = this.opts.fill;
            return v.isFunction(n) ? n : function (t, e) {
                return n[e % n.length]
            }
        }, t.prepare = function (t, e) {
            return this.$svg || this.$el.hide().after(this.$svg = x("svg", {
                "class": "peity"
            })), this.$svg.empty().data("peity", this).attr({
                height: e,
                width: t
            })
        }, t.values = function () {
            return v.map(this.$el.text().split(this.opts.delimiter), function (t) {
                return parseFloat(t)
            })
        }, o.defaults = {}, o.graphers = {}, o.register = function (t, e, n) {
            this.defaults[t] = e, this.graphers[t] = n
        }, o.register("pie", {
            fill: ["#ff9900", "#fff4dd", "#ffc66e"],
            radius: 8
        }, function (t) {
            if (!t.delimiter) {
                var e = this.$el.text().match(/[^0-9\.]/);
                t.delimiter = e ? e[0] : ","
            }
            if (e = v.map(this.values(), function (t) {
                return 0 < t ? t : 0
            }), "/" == t.delimiter) e = [i = e[0], y.max(0, e[1] - i)];
            for (var n = 0, i = e.length, o = 0; n < i; n++) o += e[n];
            o || (i = 2, e = [0, o = 1]);
            var r = 2 * t.radius,
                s = (n = (r = this.prepare(t.width || r, t.height || r)).width(), r.height()),
                a = n / 2,
                l = s / 2;
            s = y.min(a, l), t = t.innerRadius;
            "donut" == this.type && !t && (t = .5 * s);
            var c = y.PI,
                u = this.fill(),
                d = this.scale = function (t, e) {
                    var n = t / o * c * 2 - c / 2;
                    return [e * y.cos(n) + a, e * y.sin(n) + l]
                },
                p = 0;
            for (n = 0; n < i; n++) {
                var f = e[n];
                if (0 != (m = f / o)) {
                    if (1 == m)
                        if (t) var h = l - s,
                            g = l - t,
                            m = x("path", {
                                d: ["M", a, h, "A", s, s, 0, 1, 1, m = a - .01, h, "L", m, g, "A", t, t, 0, 1, 0, a, g].join(" ")
                            });
                        else m = x("circle", {
                            cx: a,
                            cy: l,
                            r: s
                        });
                    else h = p + f, g = ["M"].concat(d(p, s), "A", s, s, 0, .5 < m ? 1 : 0, 1, d(h, s), "L"), t ? g = g.concat(d(h, t), "A", t, t, 0, .5 < m ? 1 : 0, 0, d(p, t)) : g.push(a, l), p += f, m = x("path", {
                        d: g.join(" ")
                    });
                    m.attr("fill", u.call(this, f, n, e)), r.append(m)
                }
            }
        }), o.register("donut", v.extend(!0, {}, o.defaults.pie), function (t) {
            o.graphers.pie.call(this, t)
        }), o.register("line", {
            delimiter: ",",
            fill: "#c6d9fd",
            height: 16,
            min: 0,
            stroke: "#4d89f9",
            strokeWidth: 1,
            width: 32
        }, function (t) {
            var e = this.values();
            1 == e.length && e.push(e[0]);
            for (var n = y.max.apply(y, t.max == b ? e : e.concat(t.max)), i = y.min.apply(y, t.min == b ? e : e.concat(t.min)), o = this.prepare(t.width, t.height), r = t.strokeWidth, s = o.width(), a = o.height() - r, l = n - i, c = (n = this.x = function (t) {
                return t * (s / (e.length - 1))
            }, this.y = function (t) {
                var e = a;
                return l && (e -= (t - i) / l * a), e + r / 2
            }), u = c(y.max(i, 0)), d = [0, u], p = 0; p < e.length; p++) d.push(n(p), c(e[p]));
            d.push(s, u), t.fill && o.append(x("polygon", {
                fill: t.fill,
                points: d.join(" ")
            })), r && o.append(x("polyline", {
                fill: "none",
                points: d.slice(2, d.length - 2).join(" "),
                stroke: t.stroke,
                "stroke-width": r,
                "stroke-linecap": "square"
            }))
        }), o.register("bar", {
            delimiter: ",",
            fill: ["#4D89F9"],
            height: 16,
            min: 0,
            padding: .1,
            width: 32
        }, function (t) {
            for (var e = this.values(), n = y.max.apply(y, t.max == b ? e : e.concat(t.max)), i = y.min.apply(y, t.min == b ? e : e.concat(t.min)), o = this.prepare(t.width, t.height), r = o.width(), s = o.height(), a = n - i, l = (t = t.padding, this.fill()), c = this.x = function (t) {
                return t * r / e.length
            }, u = this.y = function (t) {
                return s - (a ? (t - i) / a * s : 1)
            }, d = 0; d < e.length; d++) {
                var p, f = c(d + t),
                    h = c(d + 1 - t) - f,
                    g = e[d],
                    m = u(g),
                    v = m;
                a ? g < 0 ? v = u(y.min(n, 0)) : m = u(y.max(i, 0)) : p = 1, 0 == (p = m - v) && (p = 1, 0 < n && a && v--), o.append(x("rect", {
                    fill: l.call(this, g, d, e),
                    x: f,
                    y: v,
                    width: h,
                    height: p
                }))
            }
        })
    }(jQuery, document, Math), $(document).ready(function () {
        $(".hide-menu").on("click", function (t) {
            t.preventDefault(), $("body").hasClass("hide-sidebar") ? ($("body").removeClass("hide-sidebar"), $("body").addClass("show-sidebar")) : ($("body").addClass("hide-sidebar"), $("body").removeClass("show-sidebar"))
        }), $(".i-checks").iCheck({
            checkboxClass: "icheckbox_square-green",
            radioClass: "iradio_square-green"
        }), $(".showhide").on("click", function (t) {
            t.preventDefault();
            var e = $(this).closest("div.hpanel"),
                n = $(this).find("i:first"),
                i = e.find("div.panel-body"),
                o = e.find("div.panel-footer");
            i.slideToggle(300), o.slideToggle(200), n.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"), e.toggleClass("").toggleClass("panel-collapse"), setTimeout(function () {
                e.resize(), e.find("[id^=map-]").resize()
            }, 50), e.hasClass("panel-collapse") ? Cookies.set("a2_eq_disqus_showhide", "1") : Cookies.remove("a2_eq_disqus_showhide")
        }), $(".closebox").on("click", function (t) {
            t.preventDefault(), $(this).closest("div.hpanel").remove(), $("body").hasClass("fullscreen-panel-mode") && $("body").removeClass("fullscreen-panel-mode")
        }), $(".fullscreen").on("click", function () {
            var t = $(this).closest("div.hpanel"),
                e = $(this).find("i:first");
            $("body").toggleClass("fullscreen-panel-mode"), e.toggleClass("fa-expand").toggleClass("fa-compress"), t.toggleClass("fullscreen"), $(window).trigger("resize"), Cookies.set("a2_fullscreen", "1"), e.hasClass("fa-expand") && Cookies.remove("a2_fullscreen")
        }), $(".right-sidebar-toggle").on("click", function () {
            $("#right-sidebar").toggleClass("sidebar-open")
        }), $(".small-header-action").on("click", function (t) {
            t.preventDefault();
            var e = $(this).find("i:first"),
                n = $(this).parent().find("#hbreadcrumb");
            $(this).parent().parent().parent().toggleClass("small-header"), n.toggleClass("m-t-lg"), e.toggleClass("fa-arrow-up").toggleClass("fa-arrow-down")
        }), $(".tooltip-demo").tooltip({
            selector: "[data-toggle=tooltip]"
        }), $("[data-toggle=popover]").popover(), $(".modal").appendTo("body")
    }), $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        var t = function (t) {
            return "function" == typeof gtag && ("s" === t.data.category ? gtag("event", "redirects", {
                event_category: "autocomplete",
                event_label: "s"
            }) : "p" === t.data.category && gtag("event", "redirects", {
                event_category: "autocomplete",
                event_label: "p"
            })), window.location = t.data.url, $(this).val("")
        };
        $(".autocomplete").devbridgeAutocomplete({
            serviceUrl: search_issuer_url,
            onSelect: t,
            preserveInput: !0,
            noCache: !0,
            groupBy: "category",
            i18n_categories: i18n_cats,
            width: "flex",
            maxHeight: "600"
        }), $(document).on("click", ".pagination span[data-remote]", function () {
            return $.ajax({
                type: "GET",
                url: $(this).attr("data-url"),
                dataType: "script"
            }), !1
        }), $(document).on("click", "button[data-location-opener]", function () {
            window.location = $(this).attr("data-url")
        })
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "function" == typeof require ? t(require("jquery")) : t(jQuery)
    }(function (f) {
        "use strict";

        function r(t, e) {
            this.element = t, this.el = f(t), this.suggestions = [], this.badQueries = [], this.selectedIndex = -1, this.currentValue = this.element.value, this.timeoutId = null, this.cachedResponse = {}, this.onChangeTimeout = null, this.onChange = null, this.isLocal = !1, this.suggestionsContainer = null, this.noSuggestionsContainer = null, this.options = f.extend(!0, {}, r.defaults, e), this.classes = {
                selected: "autocomplete-selected",
                suggestion: "autocomplete-suggestion"
            }, this.hint = null, this.hintValue = "", this.selection = null, this.initialize(), this.setOptions(e)
        }
        var s = {
            escapeRegExChars: function (t) {
                return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            },
            createNode: function (t) {
                var e = document.createElement("div");
                return e.className = t, e.style.position = "absolute", e.style.display = "none", e
            }
        },
            e = 27,
            n = 9,
            i = 13,
            o = 38,
            a = 39,
            l = 40,
            t = f.noop;
        r.utils = s, (f.Autocomplete = r).defaults = {
            ajaxSettings: {},
            autoSelectFirst: !1,
            appendTo: "body",
            serviceUrl: null,
            lookup: null,
            onSelect: null,
            onHint: null,
            width: "auto",
            minChars: 1,
            maxHeight: 600,
            deferRequestBy: 0,
            params: {},
            formatResult: function (t, e, n, i) {
                var o = t.value.split(";");
                if (!e) return o[i];
                var r = "(" + s.escapeRegExChars(e) + ")";
                return o[i].replace(new RegExp(r, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
            },
            formatGroup: function (t, e, n) {
                return '<caption><div class="autocomplete-group">' + t[n] + "</div></caption>"
            },
            delimiter: null,
            zIndex: 9999,
            type: "GET",
            noCache: !1,
            onSearchStart: t,
            onSearchComplete: t,
            onSearchError: t,
            preserveInput: !1,
            containerClass: "autocomplete-suggestions",
            tabDisabled: !1,
            dataType: "text",
            currentRequest: null,
            triggerSelectOnValidInput: !0,
            preventBadQueries: !0,
            lookupFilter: function (t, e, n) {
                return -1 !== t.value.toLowerCase().indexOf(n)
            },
            paramName: "query",
            transformResult: function (t) {
                return "string" == typeof t ? f.parseJSON(t) : t
            },
            showNoSuggestionNotice: !1,
            noSuggestionNotice: "No results",
            orientation: "bottom",
            forceFixPosition: !1
        }, r.prototype = {
            initialize: function () {
                var t, e = this,
                    n = "." + e.classes.suggestion,
                    i = e.classes.selected,
                    o = e.options;
                e.element.setAttribute("autocomplete", "off"), e.noSuggestionsContainer = f('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), e.suggestionsContainer = r.utils.createNode(o.containerClass), (t = f(e.suggestionsContainer)).appendTo(o.appendTo || "body"), "auto" !== o.width && t.css("width", o.width), t.on("mouseover.autocomplete", n, function () {
                    e.activate(f(this).data("index"))
                }), t.on("mouseout.autocomplete", function () {
                    e.selectedIndex = -1, t.children("." + i).removeClass(i)
                }), t.on("click.autocomplete", n, function () {
                    e.select(f(this).data("index"))
                }), t.on("click.autocomplete", function () {
                    clearTimeout(e.blurTimeoutId)
                }), e.fixPositionCapture = function () {
                    e.visible && e.fixPosition()
                }, f(window).on("resize.autocomplete", e.fixPositionCapture), e.el.on("keydown.autocomplete", function (t) {
                    e.onKeyPress(t)
                }), e.el.on("keyup.autocomplete", function (t) {
                    e.onKeyUp(t)
                }), e.el.on("blur.autocomplete", function () {
                    e.onBlur()
                }), e.el.on("focus.autocomplete", function () {
                    e.onFocus()
                }), e.el.on("change.autocomplete", function (t) {
                    e.onKeyUp(t)
                }), e.el.on("input.autocomplete", function (t) {
                    e.onKeyUp(t)
                })
            },
            onFocus: function () {
                this.disabled || (this.fixPosition(), this.el.val().length >= this.options.minChars && this.onValueChange())
            },
            onBlur: function () {
                var t = this,
                    e = t.options,
                    n = t.el.val(),
                    i = t.getQuery(n);
                t.blurTimeoutId = setTimeout(function () {
                    t.hide(), t.selection && t.currentValue !== i && (e.onInvalidateSelection || f.noop).call(t.element)
                }, 200)
            },
            abortAjax: function () {
                this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null)
            },
            setOptions: function (t) {
                var e = f.extend({}, this.options, t);
                this.isLocal = Array.isArray(e.lookup), this.isLocal && (e.lookup = this.verifySuggestionsFormat(e.lookup)), e.orientation = this.validateOrientation(e.orientation, "bottom"), f(this.suggestionsContainer).css({
                    "max-height": e.maxHeight + "px",
                    width: e.width + "px",
                    "z-index": e.zIndex
                }), this.options = e
            },
            clearCache: function () {
                this.cachedResponse = {}, this.badQueries = []
            },
            clear: function () {
                this.clearCache(), this.currentValue = "", this.suggestions = []
            },
            disable: function () {
                this.disabled = !0, clearTimeout(this.onChangeTimeout), this.abortAjax()
            },
            enable: function () {
                this.disabled = !1
            },
            fixPosition: function () {
                var t = f(this.suggestionsContainer),
                    e = t.parent().get(0);
                if (e === document.body || this.options.forceFixPosition) {
                    var n = this.options.orientation,
                        i = t.outerHeight(),
                        o = this.el.outerHeight(),
                        r = this.el.offset(),
                        s = {
                            top: r.top,
                            left: r.left
                        };
                    if ("auto" === n) {
                        var a = f(window).height(),
                            l = f(window).scrollTop(),
                            c = -l + r.top - i,
                            u = l + a - (r.top + o + i);
                        n = Math.max(c, u) === c ? "top" : "bottom"
                    }
                    if (s.top += "top" === n ? -i : o, e !== document.body) {
                        var d, p = t.css("opacity");
                        this.visible || t.css("opacity", 0).show(), d = t.offsetParent().offset(), s.top -= d.top, s.top += e.scrollTop, s.left -= d.left, this.visible || t.css("opacity", p).hide()
                    }
                    "auto" === this.options.width && (s.width = this.el.outerWidth() + "px"), t.css(s)
                }
            },
            isCursorAtEnd: function () {
                var t, e = this.el.val().length,
                    n = this.element.selectionStart;
                return "number" == typeof n ? n === e : !document.selection || ((t = document.selection.createRange()).moveStart("character", -e), e === t.text.length)
            },
            onKeyPress: function (t) {
                if (this.disabled || this.visible || t.which !== l || !this.currentValue) {
                    if (!this.disabled && this.visible) {
                        switch (t.which) {
                            case e:
                                this.el.val(this.currentValue), this.hide();
                                break;
                            case a:
                                if (this.hint && this.options.onHint && this.isCursorAtEnd()) {
                                    this.selectHint();
                                    break
                                }
                                return;
                            case n:
                                if (this.hint && this.options.onHint) return void this.selectHint();
                                if (-1 === this.selectedIndex) return void this.hide();
                                if (this.select(this.selectedIndex), !1 === this.options.tabDisabled) return;
                                break;
                            case i:
                                if (-1 === this.selectedIndex) return void this.hide();
                                this.select(this.selectedIndex);
                                break;
                            case o:
                                this.moveUp();
                                break;
                            case l:
                                this.moveDown();
                                break;
                            default:
                                return
                        }
                        t.stopImmediatePropagation(), t.preventDefault()
                    }
                } else this.suggest()
            },
            onKeyUp: function (t) {
                var e = this;
                if (!e.disabled) {
                    switch (t.which) {
                        case o:
                        case l:
                            return
                    }
                    clearTimeout(e.onChangeTimeout), e.currentValue !== e.el.val() && (e.findBestHint(), 0 < e.options.deferRequestBy ? e.onChangeTimeout = setTimeout(function () {
                        e.onValueChange()
                    }, e.options.deferRequestBy) : e.onValueChange())
                }
            },
            onValueChange: function () {
                if (this.ignoreValueChange) this.ignoreValueChange = !1;
                else {
                    var t = this.options,
                        e = this.el.val(),
                        n = this.getQuery(e);
                    this.selection && this.currentValue !== n && (this.selection = null, (t.onInvalidateSelection || f.noop).call(this.element)), clearTimeout(this.onChangeTimeout), this.currentValue = e, this.selectedIndex = -1, t.triggerSelectOnValidInput && this.isExactMatch(n) ? this.select(0) : n.length < t.minChars ? this.hide() : this.getSuggestions(n)
                }
            },
            isExactMatch: function (t) {
                var e = this.suggestions;
                return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase()
            },
            getQuery: function (t) {
                var e, n = this.options.delimiter;
                return n ? (e = t.split(n), f.trim(e[e.length - 1])) : t
            },
            getSuggestionsLocal: function (e) {
                var t, n = this.options,
                    i = e.toLowerCase(),
                    o = n.lookupFilter,
                    r = parseInt(n.lookupLimit, 10);
                return t = {
                    suggestions: f.grep(n.lookup, function (t) {
                        return o(t, e, i)
                    })
                }, r && t.suggestions.length > r && (t.suggestions = t.suggestions.slice(0, r)), t
            },
            getSuggestions: function (i) {
                var t, e, n, o, r = this,
                    s = r.options,
                    a = s.serviceUrl;
                s.params[s.paramName] = i, !1 !== s.onSearchStart.call(r.element, s.params) && (e = s.ignoreParams ? null : s.params, f.isFunction(s.lookup) ? s.lookup(i, function (t) {
                    r.suggestions = t.suggestions, r.suggest(), s.onSearchComplete.call(r.element, i, t.suggestions)
                }) : (r.isLocal ? t = r.getSuggestionsLocal(i) : (f.isFunction(a) && (a = a.call(r.element, i)), n = a + "?" + f.param(e || {}), t = r.cachedResponse[n]), t && Array.isArray(t.suggestions) ? (r.suggestions = t.suggestions, r.suggest(), s.onSearchComplete.call(r.element, i, t.suggestions)) : r.isBadQuery(i) ? s.onSearchComplete.call(r.element, i, []) : (r.abortAjax(), o = {
                    url: a,
                    data: e,
                    type: s.type,
                    dataType: s.dataType
                }, f.extend(o, s.ajaxSettings), r.currentRequest = f.ajax(o).done(function (t) {
                    var e;
                    r.currentRequest = null, e = s.transformResult(t, i), r.processResponse(e, i, n), s.onSearchComplete.call(r.element, i, e.suggestions)
                }).fail(function (t, e, n) {
                    s.onSearchError.call(r.element, i, t, e, n)
                }))))
            },
            isBadQuery: function (t) {
                if (!this.options.preventBadQueries) return !1;
                for (var e = this.badQueries, n = e.length; n--;)
                    if (0 === t.indexOf(e[n])) return !0;
                return !1
            },
            hide: function () {
                var t = f(this.suggestionsContainer);
                f.isFunction(this.options.onHide) && this.visible && this.options.onHide.call(this.element, t), this.visible = !1, this.selectedIndex = -1, clearTimeout(this.onChangeTimeout), f(this.suggestionsContainer).hide(), this.onHint(null)
            },
            suggest: function () {
                if (this.suggestions.length) {
                    var r, s = this.options,
                        a = s.groupBy,
                        l = s.formatResult,
                        c = this.getQuery(this.currentValue),
                        u = this.classes.suggestion,
                        t = this.classes.selected,
                        e = f(this.suggestionsContainer),
                        n = f(this.noSuggestionsContainer),
                        i = s.beforeRender,
                        d = "";
                    s.triggerSelectOnValidInput && this.isExactMatch(c) ? this.select(0) : (a || (d += '<table class="suggestion-table">'), f.each(this.suggestions, function (t, e) {
                        var n, i;
                        a && (r !== e.data[a] && (d += '<table class="suggestion-table">'), d += (i = (n = e).data[a], r === i ? "" : (r = i, s.formatGroup(s.i18n_categories, n, r))));
                        var o = e.value.split(";")[2];
                        if (r) switch (r) {
                            case "s":
                                d += '<tr class="' + u + '" data-index="' + t + '"><td class="s-ticker">' + l(e, c, t, 0) + '</td><td class="center s-company">' + l(e, c, t, 1) + '</td><td class="s-exchange">' + o + "</td></td></tr>";
                                break;
                            case "p":
                                d += '<tr class="' + u + '" data-index="' + t + '"><td class="p-case"><i class="fa fa-folder-o"></i></td><td class="center p-name">' + l(e, c, t, 1) + "<span>" + o + '</span></td><td class="p-link">\u27f6</td></td></tr>';
                                break;
                            default:
                                d += ""
                        } else d += '<tr class="' + u + '" data-index="' + t + '"><td class="s-ticker">' + l(e, c, t, 0) + '</td><td class="center s-company">' + l(e, c, t, 1) + '</td><td class="s-exchange">' + o + "</td></td></tr>"
                    }), this.adjustContainerWidth(), n.detach(), d += "</table>", e.html(d), f.isFunction(i) && i.call(this.element, e, this.suggestions), this.fixPosition(), e.show(), s.autoSelectFirst && (this.selectedIndex = 0, e.scrollTop(0), e.children("." + u).first().addClass(t)), this.visible = !0, this.findBestHint())
                } else this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide()
            },
            noSuggestions: function () {
                var t = this.options.beforeRender,
                    e = f(this.suggestionsContainer),
                    n = f(this.noSuggestionsContainer);
                this.adjustContainerWidth(), n.detach(), e.empty(), e.append(n), f.isFunction(t) && t.call(this.element, e, this.suggestions), this.fixPosition(), e.show(), this.visible = !0
            },
            adjustContainerWidth: function () {
                var t, e = this.options,
                    n = f(this.suggestionsContainer);
                "auto" === e.width ? (t = this.el.outerWidth(), n.css("width", 0 < t ? t : 300)) : "flex" === e.width && n.css("width", "")
            },
            findBestHint: function () {
                var i = this.el.val().toLowerCase(),
                    o = null;
                i && (f.each(this.suggestions, function (t, e) {
                    var n = 0 === e.value.toLowerCase().indexOf(i);
                    return n && (o = e), !n
                }), this.onHint(o))
            },
            onHint: function (t) {
                var e = this.options.onHint,
                    n = "";
                t && (n = this.currentValue + t.value.substr(this.currentValue.length)), this.hintValue !== n && (this.hintValue = n, this.hint = t, f.isFunction(e) && e.call(this.element, n))
            },
            verifySuggestionsFormat: function (t) {
                return t.length && "string" == typeof t[0] ? f.map(t, function (t) {
                    return {
                        value: t,
                        data: null
                    }
                }) : t
            },
            validateOrientation: function (t, e) {
                return t = f.trim(t || "").toLowerCase(), -1 === f.inArray(t, ["auto", "bottom", "top"]) && (t = e), t
            },
            processResponse: function (t, e, n) {
                var i = this.options;
                t.suggestions = this.verifySuggestionsFormat(t.suggestions), i.noCache || (this.cachedResponse[n] = t, i.preventBadQueries && !t.suggestions.length && this.badQueries.push(e)), e === this.getQuery(this.currentValue) && (this.suggestions = t.suggestions, this.suggest())
            },
            activate: function (t) {
                var e, n = this.classes.selected,
                    i = f(this.suggestionsContainer),
                    o = i.find("." + this.classes.suggestion);
                return i.find("." + n).removeClass(n), this.selectedIndex = t, -1 !== this.selectedIndex && o.length > this.selectedIndex ? (e = o.get(this.selectedIndex), f(e).addClass(n), e) : null
            },
            selectHint: function () {
                var t = f.inArray(this.hint, this.suggestions);
                this.select(t)
            },
            select: function (t) {
                this.hide(), this.onSelect(t)
            },
            moveUp: function () {
                if (-1 !== this.selectedIndex) return 0 === this.selectedIndex ? (f(this.suggestionsContainer).children("." + this.classes.suggestion).first().removeClass(this.classes.selected), this.selectedIndex = -1, this.ignoreValueChange = !1, this.el.val(this.currentValue), void this.findBestHint()) : void this.adjustScroll(this.selectedIndex - 1)
            },
            moveDown: function () {
                this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
            },
            adjustScroll: function (t) {
                var e = this.activate(t);
                if (e) {
                    var n, i, o, r = f(e).outerHeight();
                    n = e.offsetTop, o = (i = f(this.suggestionsContainer).scrollTop()) + this.options.maxHeight - r, n < i ? f(this.suggestionsContainer).scrollTop(n) : o < n && f(this.suggestionsContainer).scrollTop(n - this.options.maxHeight + r), this.options.preserveInput || (this.ignoreValueChange = !0, this.el.val(this.getValue(this.suggestions[t].value))), this.onHint(null)
                }
            },
            onSelect: function (t) {
                var e = this.options.onSelect,
                    n = this.suggestions[t];
                this.currentValue = this.getValue(n.value), this.currentValue === this.el.val() || this.options.preserveInput || this.el.val(this.currentValue), this.onHint(null), this.suggestions = [], this.selection = n, f.isFunction(e) && e.call(this.element, n)
            },
            getValue: function (t) {
                var e, n, i = this.options.delimiter;
                return i ? 1 === (n = (e = this.currentValue).split(i)).length ? t : e.substr(0, e.length - n[n.length - 1].length) + t : t
            },
            dispose: function () {
                this.el.off(".autocomplete").removeData("autocomplete"), f(window).off("resize.autocomplete", this.fixPositionCapture), f(this.suggestionsContainer).remove()
            }
        }, f.fn.devbridgeAutocomplete = function (n, i) {
            return arguments.length ? this.each(function () {
                var t = f(this),
                    e = t.data("autocomplete");
                "string" == typeof n ? e && "function" == typeof e[n] && e[n](i) : (e && e.dispose && e.dispose(), e = new r(this, n), t.data("autocomplete", e))
            }) : this.first().data("autocomplete")
        }, f.fn.autocomplete || (f.fn.autocomplete = f.fn.devbridgeAutocomplete)
    }),
    function (t) {
        if ("function" == typeof define && define.amd) define(t);
        else if ("object" == typeof exports) module.exports = t();
        else {
            var e = window.Cookies,
                n = window.Cookies = t();
            n.noConflict = function () {
                return window.Cookies = e, n
            }
        }
    }(function () {
        function h() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) e[i] = n[i]
            }
            return e
        }

        function t(p) {
            function f(t, e, n) {
                var i;
                if (1 < arguments.length) {
                    if ("number" == typeof (n = h({
                        path: "/"
                    }, f.defaults, n)).expires) {
                        var o = new Date;
                        o.setMilliseconds(o.getMilliseconds() + 864e5 * n.expires), n.expires = o
                    }
                    try {
                        i = JSON.stringify(e), /^[\{\[]/.test(i) && (e = i)
                    } catch (d) { }
                    return e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [t, "=", e, n.expires && "; expires=" + n.expires.toUTCString(), n.path && "; path=" + n.path, n.domain && "; domain=" + n.domain, n.secure ? "; secure" : ""].join("")
                }
                t || (i = {});
                for (var r = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, a = 0; a < r.length; a++) {
                    var l = r[a].split("="),
                        c = l[0].replace(s, decodeURIComponent),
                        u = l.slice(1).join("=");
                    '"' === u.charAt(0) && (u = u.slice(1, -1));
                    try {
                        if (u = p && p(u, c) || u.replace(s, decodeURIComponent), this.json) try {
                            u = JSON.parse(u)
                        } catch (d) { }
                        if (t === c) {
                            i = u;
                            break
                        }
                        t || (i[c] = u)
                    } catch (d) { }
                }
                return i
            }
            return f.get = f.set = f, f.getJSON = function () {
                return f.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, f.defaults = {}, f.remove = function (t, e) {
                f(t, "", h(e, {
                    expires: -1
                }))
            }, f.withConverter = t, f
        }
        return t()
    }),
    function (u, l) {
        "use strict";
        var c;
        u.rails !== l && u.error("jquery-ujs has already been loaded!");
        var t = u(document);
        u.rails = c = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function () {
                return u("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function () {
                return u("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function (t) {
                var e = c.csrfToken();
                e && t.setRequestHeader("X-CSRF-Token", e)
            },
            refreshCSRFTokens: function () {
                u('form input[name="' + c.csrfParam() + '"]').val(c.csrfToken())
            },
            fire: function (t, e, n) {
                var i = u.Event(e);
                return t.trigger(i, n), !1 !== i.result
            },
            confirm: function (t) {
                return confirm(t)
            },
            ajax: function (t) {
                return u.ajax(t)
            },
            href: function (t) {
                return t[0].href
            },
            isRemote: function (t) {
                return t.data("remote") !== l && !1 !== t.data("remote")
            },
            handleRemote: function (i) {
                var t, e, n, o, r, s;
                if (c.fire(i, "ajax:before")) {
                    if (o = i.data("with-credentials") || null, r = i.data("type") || u.ajaxSettings && u.ajaxSettings.dataType, i.is("form")) {
                        t = i.data("ujs:submit-button-formmethod") || i.attr("method"), e = i.data("ujs:submit-button-formaction") || i.attr("action"), n = u(i[0]).serializeArray();
                        var a = i.data("ujs:submit-button");
                        a && (n.push(a), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(c.inputChangeSelector) ? (t = i.data("method"), e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(c.buttonClickSelector) ? (t = i.data("method") || "get", e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (t = i.data("method"), e = c.href(i), n = i.data("params") || null);
                    return s = {
                        type: t || "GET",
                        data: n,
                        dataType: r,
                        beforeSend: function (t, e) {
                            if (e.dataType === l && t.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), !c.fire(i, "ajax:beforeSend", [t, e])) return !1;
                            i.trigger("ajax:send", t)
                        },
                        success: function (t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function (t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function (t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: c.isCrossDomain(e)
                    }, o && (s.xhrFields = {
                        withCredentials: o
                    }), e && (s.url = e), c.ajax(s)
                }
                return !1
            },
            isCrossDomain: function (t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function (t) {
                var e = c.href(t),
                    n = t.data("method"),
                    i = t.attr("target"),
                    o = c.csrfToken(),
                    r = c.csrfParam(),
                    s = u('<form method="post" action="' + e + '"></form>'),
                    a = '<input name="_method" value="' + n + '" type="hidden" />';
                r === l || o === l || c.isCrossDomain(e) || (a += '<input name="' + r + '" value="' + o + '" type="hidden" />'), i && s.attr("target", i), s.hide().append(a).appendTo("body"), s.submit()
            },
            formElements: function (t, e) {
                return t.is("form") ? u(t[0].elements).filter(e) : t.find(e)
            },
            disableFormElements: function (t) {
                c.formElements(t, c.disableSelector).each(function () {
                    c.disableFormElement(u(this))
                })
            },
            disableFormElement: function (t) {
                var e, n;
                e = t.is("button") ? "html" : "val", (n = t.data("disable-with")) !== l && (t.data("ujs:enable-with", t[e]()), t[e](n)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
            },
            enableFormElements: function (t) {
                c.formElements(t, c.enableSelector).each(function () {
                    c.enableFormElement(u(this))
                })
            },
            enableFormElement: function (t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") !== l && (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
            },
            allowAction: function (t) {
                var e, n = t.data("confirm"),
                    i = !1;
                if (!n) return !0;
                if (c.fire(t, "confirm")) {
                    try {
                        i = c.confirm(n)
                    } catch (o) {
                        (console.error || console.log).call(console, o.stack || o)
                    }
                    e = c.fire(t, "confirm:complete", [i])
                }
                return i && e
            },
            blankInputs: function (t, e, n) {
                var i, o, r, s = u(),
                    a = e || "input,textarea",
                    l = t.find(a),
                    c = {};
                return l.each(function () {
                    (i = u(this)).is("input[type=radio]") ? (r = i.attr("name"), c[r] || (0 === t.find('input[type=radio]:checked[name="' + r + '"]').length && (o = t.find('input[type=radio][name="' + r + '"]'), s = s.add(o)), c[r] = r)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (s = s.add(i))
                }), !!s.length && s
            },
            nonBlankInputs: function (t, e) {
                return c.blankInputs(t, e, !0)
            },
            stopEverything: function (t) {
                return u(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function (t) {
                var e = t.data("disable-with");
                e !== l && (t.data("ujs:enable-with", t.html()), t.html(e)), t.bind("click.railsDisable", function (t) {
                    return c.stopEverything(t)
                }), t.data("ujs:disabled", !0)
            },
            enableElement: function (t) {
                t.data("ujs:enable-with") !== l && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
            }
        }, c.fire(t, "rails:attachBindings") && (u.ajaxPrefilter(function (t, e, n) {
            t.crossDomain || c.CSRFProtection(n)
        }), u(window).on(
            "pageshow.rails",
            function () {
                u(u.rails.enableSelector).each(function () {
                    var t = u(this);
                    t.data("ujs:disabled") && u.rails.enableFormElement(t)
                }), u(u.rails.linkDisableSelector).each(function () {
                    var t = u(this);
                    t.data("ujs:disabled") && u.rails.enableElement(t)
                })
            }), t.on("ajax:complete", c.linkDisableSelector, function () {
                c.enableElement(u(this))
            }), t.on("ajax:complete", c.buttonDisableSelector, function () {
                c.enableFormElement(u(this))
            }), t.on("click.rails", c.linkClickSelector, function (t) {
                var e = u(this),
                    n = e.data("method"),
                    i = e.data("params"),
                    o = t.metaKey || t.ctrlKey;
                if (!c.allowAction(e)) return c.stopEverything(t);
                if (!o && e.is(c.linkDisableSelector) && c.disableElement(e), c.isRemote(e)) {
                    if (o && (!n || "GET" === n) && !i) return !0;
                    var r = c.handleRemote(e);
                    return !1 === r ? c.enableElement(e) : r.fail(function () {
                        c.enableElement(e)
                    }), !1
                }
                return n ? (c.handleMethod(e), !1) : void 0
            }), t.on("click.rails", c.buttonClickSelector, function (t) {
                var e = u(this);
                if (!c.allowAction(e) || !c.isRemote(e)) return c.stopEverything(t);
                e.is(c.buttonDisableSelector) && c.disableFormElement(e);
                var n = c.handleRemote(e);
                return !1 === n ? c.enableFormElement(e) : n.fail(function () {
                    c.enableFormElement(e)
                }), !1
            }), t.on("change.rails", c.inputChangeSelector, function (t) {
                var e = u(this);
                return c.allowAction(e) && c.isRemote(e) ? (c.handleRemote(e), !1) : c.stopEverything(t)
            }), t.on("submit.rails", c.formSubmitSelector, function (t) {
                var e, n, i = u(this),
                    o = c.isRemote(i);
                if (!c.allowAction(i)) return c.stopEverything(t);
                if (i.attr("novalidate") === l)
                    if (i.data("ujs:formnovalidate-button") === l) {
                        if ((e = c.blankInputs(i, c.requiredInputSelector, !1)) && c.fire(i, "ajax:aborted:required", [e])) return c.stopEverything(t)
                    } else i.data("ujs:formnovalidate-button", l);
                if (o) {
                    if (n = c.nonBlankInputs(i, c.fileInputSelector)) {
                        setTimeout(function () {
                            c.disableFormElements(i)
                        }, 13);
                        var r = c.fire(i, "ajax:aborted:file", [n]);
                        return r || setTimeout(function () {
                            c.enableFormElements(i)
                        }, 13), r
                    }
                    return c.handleRemote(i), !1
                }
                setTimeout(function () {
                    c.disableFormElements(i)
                }, 13)
            }), t.on("click.rails", c.formInputClickSelector, function (t) {
                var e = u(this);
                if (!c.allowAction(e)) return c.stopEverything(t);
                var n = e.attr("name"),
                    i = n ? {
                        name: n,
                        value: e.val()
                    } : null,
                    o = e.closest("form");
                0 === o.length && (o = u("#" + e.attr("form"))), o.data("ujs:submit-button", i), o.data("ujs:formnovalidate-button", e.attr("formnovalidate")), o.data("ujs:submit-button-formaction", e.attr("formaction")), o.data("ujs:submit-button-formmethod", e.attr("formmethod"))
            }), t.on("ajax:send.rails", c.formSubmitSelector, function (t) {
                this === t.target && c.disableFormElements(u(this))
            }), t.on("ajax:complete.rails", c.formSubmitSelector, function (t) {
                this === t.target && c.enableFormElements(u(this))
            }), u(function () {
                c.refreshCSRFTokens()
            }))
    }(jQuery);
var Notyf = function () {
    "use strict";

    function t(t) {
        this.options = t, this.listeners = {}
    }

    function e() {
        this.notifications = []
    }

    function n() {
        this.notifications = [], this.events = {}, this.X_POSITION_FLEX_MAP = {
            left: "flex-start",
            center: "center",
            right: "flex-end"
        }, this.Y_POSITION_FLEX_MAP = {
            top: "flex-start",
            center: "center",
            bottom: "flex-end"
        };
        var t = document.createDocumentFragment(),
            e = this._createHTLMElement({
                tagName: "div",
                className: "notyf"
            });
        t.appendChild(e), document.body.appendChild(t), this.container = e, this.animationEndEventName = this._getAnimationEndEventName(), this._createA11yContainer()
    }

    function i(t) {
        var i = this;
        this.dismiss = this._removeNotification, this.notifications = new l, this.view = new u;
        var e = this.registerTypes(t);
        this.options = s(s({}, c), t), this.options.types = e, this.notifications.onUpdate(function (t, e) {
            return i.view.update(t, e)
        }), this.view.on(m.Dismiss, function (t) {
            var e = t.target,
                n = t.event;
            i._removeNotification(e), e.triggerEvent(m.Dismiss, n)
        }), this.view.on(m.Click, function (t) {
            var e = t.target,
                n = t.event;
            return e.triggerEvent(m.Click, n)
        })
    }
    var o, r, s = function () {
        return (s = Object.assign || function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
        a = (t.prototype.on = function (t, e) {
            var n = this.listeners[t] || [];
            this.listeners[t] = n.concat([e])
        }, t.prototype.triggerEvent = function (t, e) {
            var n = this;
            (this.listeners[t] || []).forEach(function (t) {
                return t({
                    target: n,
                    event: e
                })
            })
        }, t);
    (r = o = o || {})[r.Add = 0] = "Add", r[r.Remove = 1] = "Remove";
    var m, l = (e.prototype.push = function (t) {
        this.notifications.push(t), this.updateFn(t, o.Add, this.notifications)
    }, e.prototype.splice = function (t, e) {
        var n = this.notifications.splice(t, e)[0];
        return this.updateFn(n, o.Remove, this.notifications), n
    }, e.prototype.indexOf = function (t) {
        return this.notifications.indexOf(t)
    }, e.prototype.onUpdate = function (t) {
        this.updateFn = t
    }, e);
    (m = m || {}).Dismiss = "dismiss";
    var c = {
        types: [{
            type: "success",
            className: "notyf__toast--success",
            backgroundColor: "#3dc763",
            icon: {
                className: "notyf__icon--success",
                tagName: "i"
            }
        }, {
            type: "error",
            className: "notyf__toast--error",
            backgroundColor: "#ed3d3d",
            icon: {
                className: "notyf__icon--error",
                tagName: "i"
            }
        }],
        duration: 5e3,
        ripple: 0,
        position: {
            x: "right",
            y: "top"
        },
        dismissible: 1
    },
        u = (n.prototype.on = function (t, e) {
            var n;
            this.events = s(s({}, this.events), ((n = {})[t] = e, n))
        }, n.prototype.update = function (t, e) {
            e === o.Add ? this.addNotification(t) : e === o.Remove && this.removeNotification(t)
        }, n.prototype.removeNotification = function (t) {
            var e, n, i = this,
                o = this._popRenderedNotification(t);
            o && ((n = o.node).classList.add("notyf__toast--disappear"), n.addEventListener(this.animationEndEventName, e = function (t) {
                t.target === n && (n.removeEventListener(i.animationEndEventName, e), i.container.removeChild(n))
            }))
        }, n.prototype.addNotification = function (t) {
            var e = this._renderNotification(t);
            this.notifications.push({
                notification: t,
                node: e
            }), this._announce(t.options.message || "Notification")
        }, n.prototype._renderNotification = function (t) {
            var e, n = this._buildNotificationCard(t),
                i = t.options.className;
            return i && (e = n.classList).add.apply(e, i.split(" ")), this.container.appendChild(n), n
        }, n.prototype._popRenderedNotification = function (t) {
            for (var e = -1, n = 0; n < this.notifications.length && e < 0; n++) this.notifications[n].notification === t && (e = n);
            if (-1 !== e) return this.notifications.splice(e, 1)[0]
        }, n.prototype.getXPosition = function (t) {
            var e;
            return (null === (e = null == t ? void 0 : t.position) || void 0 === e ? void 0 : e.x) || "right"
        }, n.prototype.getYPosition = function (t) {
            var e;
            return (null === (e = null == t ? void 0 : t.position) || void 0 === e ? void 0 : e.y) || "bottom"
        }, n.prototype.adjustContainerAlignment = function (t) {
            var e = this.X_POSITION_FLEX_MAP[this.getXPosition(t)],
                n = this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],
                i = this.container.style;
            i.setProperty("justify-content", n), i.setProperty("align-items", e)
        }, n.prototype._buildNotificationCard = function (i) {
            var t, o = this,
                e = i.options,
                n = e.icon;
            this.adjustContainerAlignment(e);
            var r = this._createHTLMElement({
                tagName: "div",
                className: "notyf__toast"
            }),
                s = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__ripple"
                }),
                a = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__wrapper"
                }),
                l = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__message"
                });
            l.innerHTML = e.message || "";
            var c, u, d, p, f, h = e.background || e.backgroundColor;
            n && "object" == typeof n && (c = this._createHTLMElement({
                tagName: "div",
                className: "notyf__icon"
            }), u = this._createHTLMElement({
                tagName: n.tagName || "i",
                className: n.className,
                text: n.text
            }), (d = null !== (t = n.color) && void 0 !== t ? t : h) && (u.style.color = d), c.appendChild(u), a.appendChild(c)), a.appendChild(l), r.appendChild(a), h && (e.ripple ? (s.style.background = h, r.appendChild(s)) : r.style.background = h), e.dismissible && (p = this._createHTLMElement({
                tagName: "div",
                className: "notyf__dismiss"
            }), f = this._createHTLMElement({
                tagName: "button",
                className: "notyf__dismiss-btn"
            }), p.appendChild(f), a.appendChild(p), r.classList.add("notyf__toast--dismissible"), f.addEventListener("click", function (t) {
                var e, n;
                null !== (n = (e = o.events)[m.Dismiss]) && void 0 !== n && n.call(e, {
                    target: i,
                    event: t
                }), t.stopPropagation()
            })), r.addEventListener("click", function (t) {
                var e, n;
                return null === (n = (e = o.events)[m.Click]) || void 0 === n ? void 0 : n.call(e, {
                    target: i,
                    event: t
                })
            });
            var g = "top" === this.getYPosition(e) ? "upper" : "lower";
            return r.classList.add("notyf__toast--" + g), r
        }, n.prototype._createHTLMElement = function (t) {
            var e = t.tagName,
                n = t.className,
                i = t.text,
                o = document.createElement(e);
            return n && (o.className = n), o.textContent = i || null, o
        }, n.prototype._createA11yContainer = function () {
            var t = this._createHTLMElement({
                tagName: "div",
                className: "notyf-announcer"
            });
            t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-live", "polite"), t.style.border = "0", t.style.clip = "rect(0 0 0 0)", t.style.height = "1px", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.padding = "0", t.style.position = "absolute", t.style.width = "1px", t.style.outline = "0", document.body.appendChild(t), this.a11yContainer = t
        }, n.prototype._announce = function (t) {
            var e = this;
            this.a11yContainer.textContent = "", setTimeout(function () {
                e.a11yContainer.textContent = t
            }, 100)
        }, n.prototype._getAnimationEndEventName = function () {
            var t, e = document.createElement("_fake"),
                n = {
                    MozTransition: "animationend",
                    OTransition: "oAnimationEnd",
                    WebkitTransition: "webkitAnimationEnd",
                    transition: "animationend"
                };
            for (t in n)
                if (void 0 !== e.style[t]) return n[t];
            return "animationend"
        }, n);
    return i.prototype.error = function (t) {
        var e = this.normalizeOptions("error", t);
        return this.open(e)
    }, i.prototype.success = function (t) {
        var e = this.normalizeOptions("success", t);
        return this.open(e)
    }, i.prototype.open = function (e) {
        var t = this.options.types.find(function (t) {
            return t.type === e.type
        }) || {},
            n = s(s({}, t), e);
        this.assignProps(["ripple", "position", "dismissible"], n);
        var i = new a(n);
        return this._pushNotification(i), i
    }, i.prototype.dismissAll = function () {
        for (; this.notifications.splice(0, 1););
    }, i.prototype.assignProps = function (t, e) {
        var n = this;
        t.forEach(function (t) {
            e[t] = null == e[t] ? n.options[t] : e[t]
        })
    }, i.prototype._pushNotification = function (t) {
        var e = this;
        this.notifications.push(t);
        var n = void 0 !== t.options.duration ? t.options.duration : this.options.duration;
        n && setTimeout(function () {
            return e._removeNotification(t)
        }, n)
    }, i.prototype._removeNotification = function (t) {
        var e = this.notifications.indexOf(t); - 1 !== e && this.notifications.splice(e, 1)
    }, i.prototype.normalizeOptions = function (t, e) {
        var n = {
            type: t
        };
        return "string" == typeof e ? n.message = e : "object" == typeof e && (n = s(s({}, n), e)), n
    }, i.prototype.registerTypes = function (t) {
        var e = (t && t.types || []).slice();
        return c.types.map(function (n) {
            var i = -1;
            e.forEach(function (t, e) {
                t.type === n.type && (i = e)
            });
            var t = -1 !== i ? e.splice(i, 1)[0] : {};
            return s(s({}, n), t)
        }).concat(e)
    }, i
}();