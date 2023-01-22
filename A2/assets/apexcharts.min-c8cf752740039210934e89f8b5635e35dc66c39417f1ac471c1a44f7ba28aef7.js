! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e()
}(this, function () {
    "use strict";

    function y(t) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function o(t, e, i) {
        return e && a(t.prototype, e), i && a(t, i), t
    }

    function l(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function s(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), i.push.apply(i, a)
        }
        return i
    }

    function X(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(i), !0).forEach(function (t) {
                l(e, t, i[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            })
        }
        return e
    }

    function n(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && i(t, e)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(a) {
        var s = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
            } catch (a) {
                return !1
            }
        }();
        return function () {
            var t, e = h(a);
            if (s) {
                var i = h(this).constructor;
                t = Reflect.construct(e, arguments, i)
            } else t = e.apply(this, arguments);
            return c(this, t)
        }
    }

    function A(t) {
        return function (t) {
            if (Array.isArray(t)) return g(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return g(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(t, e) : void 0
            }
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
        return a
    }
    var E = function () {
        function a() {
            r(this, a)
        }
        return o(a, [{
            key: "shadeRGBColor",
            value: function (t, e) {
                var i = e.split(","),
                    a = t < 0 ? 0 : 255,
                    s = t < 0 ? -1 * t : t,
                    r = parseInt(i[0].slice(4), 10),
                    o = parseInt(i[1], 10),
                    n = parseInt(i[2], 10);
                return "rgb(" + (Math.round((a - r) * s) + r) + "," + (Math.round((a - o) * s) + o) + "," + (Math.round((a - n) * s) + n) + ")"
            }
        }, {
            key: "shadeHexColor",
            value: function (t, e) {
                var i = parseInt(e.slice(1), 16),
                    a = t < 0 ? 0 : 255,
                    s = t < 0 ? -1 * t : t,
                    r = i >> 16,
                    o = i >> 8 & 255,
                    n = 255 & i;
                return "#" + (16777216 + 65536 * (Math.round((a - r) * s) + r) + 256 * (Math.round((a - o) * s) + o) + (Math.round((a - n) * s) + n)).toString(16).slice(1)
            }
        }, {
            key: "shadeColor",
            value: function (t, e) {
                return a.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e)
            }
        }], [{
            key: "bind",
            value: function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }
        }, {
            key: "isObject",
            value: function (t) {
                return t && "object" === y(t) && !Array.isArray(t) && null != t
            }
        }, {
            key: "listToArray",
            value: function (t) {
                var e, i = [];
                for (e = 0; e < t.length; e++) i[e] = t[e];
                return i
            }
        }, {
            key: "extend",
            value: function (e, i) {
                var a = this;
                "function" != typeof Object.assign && (Object.assign = function (t) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), i = 1; i < arguments.length; i++) {
                        var a = arguments[i];
                        if (null != a)
                            for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s])
                    }
                    return e
                });
                var s = Object.assign({}, e);
                return this.isObject(e) && this.isObject(i) && Object.keys(i).forEach(function (t) {
                    a.isObject(i[t]) && t in e ? s[t] = a.extend(e[t], i[t]) : Object.assign(s, l({}, t, i[t]))
                }), s
            }
        }, {
            key: "extendArray",
            value: function (t, e) {
                var i = [];
                return t.map(function (t) {
                    i.push(a.extend(e, t))
                }), i
            }
        }, {
            key: "monthMod",
            value: function (t) {
                return t % 12
            }
        }, {
            key: "clone",
            value: function (t) {
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
                    return e
                }
                if ("[object Null]" === Object.prototype.toString.call(t)) return null;
                if ("[object Date]" === Object.prototype.toString.call(t)) return t;
                if ("object" !== y(t)) return t;
                var a = {};
                for (var s in t) t.hasOwnProperty(s) && (a[s] = this.clone(t[s]));
                return a
            }
        }, {
            key: "log10",
            value: function (t) {
                return Math.log(t) / Math.LN10
            }
        }, {
            key: "roundToBase10",
            value: function (t) {
                return Math.pow(10, Math.floor(Math.log10(t)))
            }
        }, {
            key: "roundToBase",
            value: function (t, e) {
                return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
            }
        }, {
            key: "parseNumber",
            value: function (t) {
                return null === t ? t : parseFloat(t)
            }
        }, {
            key: "randomId",
            value: function () {
                return (Math.random() + 1).toString(36).substring(4)
            }
        }, {
            key: "noExponents",
            value: function (t) {
                var e = String(t).split(/[eE]/);
                if (1 === e.length) return e[0];
                var i = "",
                    a = t < 0 ? "-" : "",
                    s = e[0].replace(".", ""),
                    r = Number(e[1]) + 1;
                if (r < 0) {
                    for (i = a + "0."; r++;) i += "0";
                    return i + s.replace(/^-/, "")
                }
                for (r -= s.length; r--;) i += "0";
                return s + i
            }
        }, {
            key: "getDimensions",
            value: function (t) {
                var e = getComputedStyle(t, null),
                    i = t.clientHeight,
                    a = t.clientWidth;
                return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [a -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i]
            }
        }, {
            key: "getBoundingClientRect",
            value: function (t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: t.clientWidth,
                    height: t.clientHeight,
                    x: e.left,
                    y: e.top
                }
            }
        }, {
            key: "getLargestStringFromArr",
            value: function (t) {
                return t.reduce(function (t, e) {
                    return Array.isArray(e) && (e = e.reduce(function (t, e) {
                        return t.length > e.length ? t : e
                    })), t.length > e.length ? t : e
                }, 0)
            }
        }, {
            key: "hexToRgba",
            value: function (t, e) {
                var i = 0 < arguments.length && void 0 !== t ? arguments[0] : "#999999",
                    a = 1 < arguments.length && void 0 !== e ? arguments[1] : .6;
                "#" !== i.substring(0, 1) && (i = "#999999");
                var s = i.replace("#", "");
                s = s.match(new RegExp("(.{" + s.length / 3 + "})", "g"));
                for (var r = 0; r < s.length; r++) s[r] = parseInt(1 === s[r].length ? s[r] + s[r] : s[r], 16);
                return void 0 !== a && s.push(a), "rgba(" + s.join(",") + ")"
            }
        }, {
            key: "getOpacityFromRGBA",
            value: function (t) {
                return parseFloat(t.replace(/^.*,(.+)\)/, "$1"))
            }
        }, {
            key: "rgb2hex",
            value: function (t) {
                return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
            }
        }, {
            key: "isColorHex",
            value: function (t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)
            }
        }, {
            key: "getPolygonPos",
            value: function (t, e) {
                for (var i = [], a = 2 * Math.PI / e, s = 0; s < e; s++) {
                    var r = {};
                    r.x = t * Math.sin(s * a), r.y = -t * Math.cos(s * a), i.push(r)
                }
                return i
            }
        }, {
            key: "polarToCartesian",
            value: function (t, e, i, a) {
                var s = (a - 90) * Math.PI / 180;
                return {
                    x: t + i * Math.cos(s),
                    y: e + i * Math.sin(s)
                }
            }
        }, {
            key: "escapeString",
            value: function (t, e) {
                var i = 1 < arguments.length && void 0 !== e ? arguments[1] : "x",
                    a = t.toString().slice();
                return a.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, i)
            }
        }, {
            key: "negToZero",
            value: function (t) {
                return t < 0 ? 0 : t
            }
        }, {
            key: "moveIndexInArray",
            value: function (t, e, i) {
                if (i >= t.length)
                    for (var a = i - t.length + 1; a--;) t.push(void 0);
                return t.splice(i, 0, t.splice(e, 1)[0]), t
            }
        }, {
            key: "extractNumber",
            value: function (t) {
                return parseFloat(t.replace(/[^\d.]*/g, ""))
            }
        }, {
            key: "findAncestor",
            value: function (t, e) {
                for (;
                    (t = t.parentElement) && !t.classList.contains(e););
                return t
            }
        }, {
            key: "setELstyles",
            value: function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
            }
        }, {
            key: "isNumber",
            value: function (t) {
                return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
            }
        }, {
            key: "isFloat",
            value: function (t) {
                return Number(t) === t && t % 1 != 0
            }
        }, {
            key: "isSafari",
            value: function () {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }
        }, {
            key: "isFirefox",
            value: function () {
                return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
            }
        }, {
            key: "isIE11",
            value: function () {
                if (-1 !== window.navigator.userAgent.indexOf("MSIE") || -1 < window.navigator.appVersion.indexOf("Trident/")) return !0
            }
        }, {
            key: "isIE",
            value: function () {
                var t = window.navigator.userAgent,
                    e = t.indexOf("MSIE ");
                if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                if (0 < t.indexOf("Trident/")) {
                    var i = t.indexOf("rv:");
                    return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
                }
                var a = t.indexOf("Edge/");
                return 0 < a && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
            }
        }]), a
    }(),
        z = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.setEasingFunctions()
            }
            return o(e, [{
                key: "setEasingFunctions",
                value: function () {
                    var t;
                    if (!this.w.globals.easing) {
                        switch (this.w.config.chart.animations.easing) {
                            case "linear":
                                t = "-";
                                break;
                            case "easein":
                                t = "<";
                                break;
                            case "easeout":
                                t = ">";
                                break;
                            case "easeinout":
                                t = "<>";
                                break;
                            case "swing":
                                t = function (t) {
                                    var e = 1.70158;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                                };
                                break;
                            case "bounce":
                                t = function (t) {
                                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                };
                                break;
                            case "elastic":
                                t = function (t) {
                                    return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                                };
                                break;
                            default:
                                t = "<>"
                        }
                        this.w.globals.easing = t
                    }
                }
            }, {
                key: "animateLine",
                value: function (t, e, i, a) {
                    t.attr(e).animate(a).attr(i)
                }
            }, {
                key: "animateMarker",
                value: function (t, e, i, a, s, r) {
                    e || (e = 0), t.attr({
                        r: e,
                        width: e,
                        height: e
                    }).animate(a, s).attr({
                        r: i,
                        width: i.width,
                        height: i.height
                    }).afterAll(function () {
                        r()
                    })
                }
            }, {
                key: "animateCircle",
                value: function (t, e, i, a, s) {
                    t.attr({
                        r: e.r,
                        cx: e.cx,
                        cy: e.cy
                    }).animate(a, s).attr({
                        r: i.r,
                        cx: i.cx,
                        cy: i.cy
                    })
                }
            }, {
                key: "animateRect",
                value: function (t, e, i, a, s) {
                    t.attr(e).animate(a).attr(i).afterAll(function () {
                        return s()
                    })
                }
            }, {
                key: "animatePathsGradually",
                value: function (t) {
                    var e = t.el,
                        i = t.realIndex,
                        a = t.j,
                        s = t.fill,
                        r = t.pathFrom,
                        o = t.pathTo,
                        n = t.speed,
                        l = t.delay,
                        h = this.w,
                        c = 0;
                    h.config.chart.animations.animateGradually.enabled && (c = h.config.chart.animations.animateGradually.delay), h.config.chart.animations.dynamicAnimation.enabled && h.globals.dataChanged && "bar" !== h.config.chart.type && (c = 0), this.morphSVG(e, i, a, "line" !== h.config.chart.type || h.globals.comboCharts ? s : "stroke", r, o, n, l * c)
                }
            }, {
                key: "showDelayedElements",
                value: function () {
                    this.w.globals.delayedElements.forEach(function (t) {
                        t.el.classList.remove("apexcharts-element-hidden")
                    })
                }
            }, {
                key: "animationCompleted",
                value: function (t) {
                    var e = this.w;
                    e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, {
                        el: t,
                        w: e
                    }))
                }
            }, {
                key: "morphSVG",
                value: function (t, e, i, a, s, r, o, n) {
                    var l = this,
                        h = this.w;
                    s || (s = t.attr("pathFrom")), r || (r = t.attr("pathTo"));
                    var c = function () {
                        return "radar" === h.config.chart.type && (o = 1), "M 0 ".concat(h.globals.gridHeight)
                    };
                    (!s || -1 < s.indexOf("undefined") || -1 < s.indexOf("NaN")) && (s = c()), (!r || -1 < r.indexOf("undefined") || -1 < r.indexOf("NaN")) && (r = c()), h.globals.shouldAnimate || (o = 1), t.plot(s).animate(1, h.globals.easing, n).plot(s).animate(o, h.globals.easing, n).plot(r).afterAll(function () {
                        E.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && l.animationCompleted(t) : "none" !== a && h.globals.shouldAnimate && (!h.globals.comboCharts && e === h.globals.series.length - 1 || h.globals.comboCharts) && l.animationCompleted(t), l.showDelayedElements()
                    })
                }
            }]), e
        }(),
        Y = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "getDefaultFilter",
                value: function (t, e) {
                    var i = this.w;
                    t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addNormalFilter",
                value: function (t, e) {
                    var i = this.w;
                    i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addLightenFilter",
                value: function (t, i, e) {
                    var a = this,
                        s = this.w,
                        r = e.intensity;
                    t.unfilter(!0), new window.SVG.Filter, t.filter(function (t) {
                        var e = s.config.chart.dropShadow;
                        (e.enabled ? a.addShadow(t, i, e) : t).componentTransfer({
                            rgb: {
                                type: "linear",
                                slope: 1.5,
                                intercept: r
                            }
                        })
                    }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
                }
            }, {
                key: "addDarkenFilter",
                value: function (t, i, e) {
                    var a = this,
                        s = this.w,
                        r = e.intensity;
                    t.unfilter(!0), new window.SVG.Filter, t.filter(function (t) {
                        var e = s.config.chart.dropShadow;
                        (e.enabled ? a.addShadow(t, i, e) : t).componentTransfer({
                            rgb: {
                                type: "linear",
                                slope: r
                            }
                        })
                    }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
                }
            }, {
                key: "applyFilter",
                value: function (t, e, i, a) {
                    var s = 3 < arguments.length && void 0 !== a ? arguments[3] : .5;
                    switch (i) {
                        case "none":
                            this.addNormalFilter(t, e);
                            break;
                        case "lighten":
                            this.addLightenFilter(t, e, {
                                intensity: s
                            });
                            break;
                        case "darken":
                            this.addDarkenFilter(t, e, {
                                intensity: s
                            })
                    }
                }
            }, {
                key: "addShadow",
                value: function (t, e, i) {
                    var a = i.blur,
                        s = i.top,
                        r = i.left,
                        o = i.color,
                        n = i.opacity,
                        l = t.flood(Array.isArray(o) ? o[e] : o, n).composite(t.sourceAlpha, "in").offset(r, s).gaussianBlur(a).merge(t.source);
                    return t.blend(t.source, l)
                }
            }, {
                key: "dropShadow",
                value: function (t, e, i) {
                    var a = 2 < arguments.length && void 0 !== i ? arguments[2] : 0,
                        s = e.top,
                        r = e.left,
                        o = e.blur,
                        n = e.color,
                        l = e.opacity,
                        h = e.noUserSpaceOnUse,
                        c = this.w;
                    return t.unfilter(!0), E.isIE() && "radialBar" === c.config.chart.type || (n = Array.isArray(n) ? n[a] : n, t.filter(function (t) {
                        var e = null;
                        e = E.isSafari() || E.isFirefox() || E.isIE() ? t.flood(n, l).composite(t.sourceAlpha, "in").offset(r, s).gaussianBlur(o) : t.flood(n, l).composite(t.sourceAlpha, "in").offset(r, s).gaussianBlur(o).merge(t.source), t.blend(t.source, e)
                    }), h || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t
                }
            }, {
                key: "setSelectionFilter",
                value: function (t, e, i) {
                    var a = this.w;
                    if (void 0 !== a.globals.selectedDataPoints[e] && -1 < a.globals.selectedDataPoints[e].indexOf(i)) {
                        t.node.setAttribute("selected", !0);
                        var s = a.config.states.active.filter;
                        "none" !== s && this.applyFilter(t, e, s.type, s.value)
                    }
                }
            }, {
                key: "_scaleFilterSize",
                value: function (i) {
                    ! function (t) {
                        for (var e in t) t.hasOwnProperty(e) && i.setAttribute(e, t[e])
                    }({
                        width: "200%",
                        height: "200%",
                        x: "-50%",
                        y: "-50%"
                    })
                }
            }]), e
        }(),
        F = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "drawLine",
                value: function (t, e, i, a, s, r, o, n) {
                    var l = 4 < arguments.length && void 0 !== s ? arguments[4] : "#a8a8a8",
                        h = 5 < arguments.length && void 0 !== r ? arguments[5] : 0,
                        c = 6 < arguments.length && void 0 !== o ? arguments[6] : null,
                        d = 7 < arguments.length && void 0 !== n ? arguments[7] : "butt";
                    return this.w.globals.dom.Paper.line().attr({
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: a,
                        stroke: l,
                        "stroke-dasharray": h,
                        "stroke-width": c,
                        "stroke-linecap": d
                    })
                }
            }, {
                key: "drawRect",
                value: function (t, e, i, a, s, r, o, n, l, h) {
                    var c = 0 < arguments.length && void 0 !== t ? arguments[0] : 0,
                        d = 1 < arguments.length && void 0 !== e ? arguments[1] : 0,
                        g = 2 < arguments.length && void 0 !== i ? arguments[2] : 0,
                        u = 3 < arguments.length && void 0 !== a ? arguments[3] : 0,
                        p = 4 < arguments.length && void 0 !== s ? arguments[4] : 0,
                        f = 5 < arguments.length && void 0 !== r ? arguments[5] : "#fefefe",
                        x = 6 < arguments.length && void 0 !== o ? arguments[6] : 1,
                        b = 7 < arguments.length && void 0 !== n ? arguments[7] : null,
                        m = 8 < arguments.length && void 0 !== l ? arguments[8] : null,
                        v = 9 < arguments.length && void 0 !== h ? arguments[9] : 0,
                        y = this.w.globals.dom.Paper.rect();
                    return y.attr({
                        x: c,
                        y: d,
                        width: 0 < g ? g : 0,
                        height: 0 < u ? u : 0,
                        rx: p,
                        ry: p,
                        opacity: x,
                        "stroke-width": null !== b ? b : 0,
                        stroke: null !== m ? m : "none",
                        "stroke-dasharray": v
                    }), y.node.setAttribute("fill", f), y
                }
            }, {
                key: "drawPolygon",
                value: function (t, e, i, a) {
                    var s = 1 < arguments.length && void 0 !== e ? arguments[1] : "#e1e1e1",
                        r = 2 < arguments.length && void 0 !== i ? arguments[2] : 1,
                        o = 3 < arguments.length && void 0 !== a ? arguments[3] : "none";
                    return this.w.globals.dom.Paper.polygon(t).attr({
                        fill: o,
                        stroke: s,
                        "stroke-width": r
                    })
                }
            }, {
                key: "drawCircle",
                value: function (t, e) {
                    var i = 1 < arguments.length && void 0 !== e ? arguments[1] : null;
                    t < 0 && (t = 0);
                    var a = this.w.globals.dom.Paper.circle(2 * t);
                    return null !== i && a.attr(i), a
                }
            }, {
                key: "drawPath",
                value: function (t) {
                    var e = t.d,
                        i = void 0 === e ? "" : e,
                        a = t.stroke,
                        s = void 0 === a ? "#a8a8a8" : a,
                        r = t.strokeWidth,
                        o = void 0 === r ? 1 : r,
                        n = t.fill,
                        l = t.fillOpacity,
                        h = void 0 === l ? 1 : l,
                        c = t.strokeOpacity,
                        d = void 0 === c ? 1 : c,
                        g = t.classes,
                        u = t.strokeLinecap,
                        p = void 0 === u ? null : u,
                        f = t.strokeDashArray,
                        x = void 0 === f ? 0 : f,
                        b = this.w;
                    return null === p && (p = b.config.stroke.lineCap), (-1 < i.indexOf("undefined") || -1 < i.indexOf("NaN")) && (i = "M 0 ".concat(b.globals.gridHeight)), b.globals.dom.Paper.path(i).attr({
                        fill: n,
                        "fill-opacity": h,
                        stroke: s,
                        "stroke-opacity": d,
                        "stroke-linecap": p,
                        "stroke-width": o,
                        "stroke-dasharray": x,
                        "class": g
                    })
                }
            }, {
                key: "group",
                value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? arguments[0] : null,
                        i = this.w.globals.dom.Paper.group();
                    return null !== e && i.attr(e), i
                }
            }, {
                key: "move",
                value: function (t, e) {
                    return ["M", t, e].join(" ")
                }
            }, {
                key: "line",
                value: function (t, e, i) {
                    var a = 2 < arguments.length && void 0 !== i ? arguments[2] : null,
                        s = null;
                    return null === a ? s = ["L", t, e].join(" ") : "H" === a ? s = ["H", t].join(" ") : "V" === a && (s = ["V", e].join(" ")), s
                }
            }, {
                key: "curve",
                value: function (t, e, i, a, s, r) {
                    return ["C", t, e, i, a, s, r].join(" ")
                }
            }, {
                key: "quadraticCurve",
                value: function (t, e, i, a) {
                    return ["Q", t, e, i, a].join(" ")
                }
            }, {
                key: "arc",
                value: function (t, e, i, a, s, r, o, n) {
                    var l = "A";
                    return 7 < arguments.length && void 0 !== n && arguments[7] && (l = "a"), [l, t, e, i, a, s, r, o].join(" ")
                }
            }, {
                key: "renderPaths",
                value: function (t) {
                    var e, i = t.j,
                        a = t.realIndex,
                        s = t.pathFrom,
                        r = t.pathTo,
                        o = t.stroke,
                        n = t.strokeWidth,
                        l = t.strokeLinecap,
                        h = t.fill,
                        c = t.animationDelay,
                        d = t.initialSpeed,
                        g = t.dataChangeSpeed,
                        u = t.className,
                        p = t.shouldClipToGrid,
                        f = void 0 === p || p,
                        x = t.bindEventsOnPaths,
                        b = void 0 === x || x,
                        m = t.drawShadow,
                        v = void 0 === m || m,
                        y = this.w,
                        w = new Y(this.ctx),
                        k = new z(this.ctx),
                        A = this.w.config.chart.animations.enabled,
                        S = A && this.w.config.chart.animations.dynamicAnimation.enabled,
                        C = !!(A && !y.globals.resized || S && y.globals.dataChanged && y.globals.shouldAnimate);
                    C ? e = s : (e = r, y.globals.animationEnded = !0);
                    var L = y.config.stroke.dashArray,
                        P = 0;
                    P = Array.isArray(L) ? L[a] : y.config.stroke.dashArray;
                    var T = this.drawPath({
                        d: e,
                        stroke: o,
                        strokeWidth: n,
                        fill: h,
                        fillOpacity: 1,
                        classes: u,
                        strokeLinecap: l,
                        strokeDashArray: P
                    });
                    if (T.attr("index", a), f && T.attr({
                        "clip-path": "url(#gridRectMask".concat(y.globals.cuid, ")")
                    }), "none" !== y.config.states.normal.filter.type) w.getDefaultFilter(T, a);
                    else if (y.config.chart.dropShadow.enabled && v && (!y.config.chart.dropShadow.enabledOnSeries || y.config.chart.dropShadow.enabledOnSeries && -1 !== y.config.chart.dropShadow.enabledOnSeries.indexOf(a))) {
                        var M = y.config.chart.dropShadow;
                        w.dropShadow(T, M, a)
                    }
                    b && (T.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, T)), T.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, T)), T.node.addEventListener("mousedown", this.pathMouseDown.bind(this, T))), T.attr({
                        pathTo: r,
                        pathFrom: s
                    });
                    var I = {
                        el: T,
                        j: i,
                        realIndex: a,
                        pathFrom: s,
                        pathTo: r,
                        fill: h,
                        strokeWidth: n,
                        delay: c
                    };
                    return !A || y.globals.resized || y.globals.dataChanged ? !y.globals.resized && y.globals.dataChanged || k.showDelayedElements() : k.animatePathsGradually(X(X({}, I), {}, {
                        speed: d
                    })), y.globals.dataChanged && S && C && k.animatePathsGradually(X(X({}, I), {}, {
                        speed: g
                    })), T
                }
            }, {
                key: "drawPattern",
                value: function (e, i, a, t, s) {
                    var r = 3 < arguments.length && void 0 !== t ? arguments[3] : "#a8a8a8",
                        o = 4 < arguments.length && void 0 !== s ? arguments[4] : 0;
                    return this.w.globals.dom.Paper.pattern(i, a, function (t) {
                        "horizontalLines" === e ? t.line(0, 0, a, 0).stroke({
                            color: r,
                            width: o + 1
                        }) : "verticalLines" === e ? t.line(0, 0, 0, i).stroke({
                            color: r,
                            width: o + 1
                        }) : "slantedLines" === e ? t.line(0, 0, i, a).stroke({
                            color: r,
                            width: o
                        }) : "squares" === e ? t.rect(i, a).fill("none").stroke({
                            color: r,
                            width: o
                        }) : "circles" === e && t.circle(i).fill("none").stroke({
                            color: r,
                            width: o
                        })
                    })
                }
            }, {
                key: "drawGradient",
                value: function (t, e, i, a, s, r, o, n, l) {
                    var h, c = 5 < arguments.length && void 0 !== r ? arguments[5] : null,
                        d = 6 < arguments.length && void 0 !== o ? arguments[6] : null,
                        g = 7 < arguments.length && void 0 !== n ? arguments[7] : null,
                        u = 8 < arguments.length && void 0 !== l ? arguments[8] : 0,
                        p = this.w;
                    e.length < 9 && 0 === e.indexOf("#") && (e = E.hexToRgba(e, a)), i.length < 9 && 0 === i.indexOf("#") && (i = E.hexToRgba(i, s));
                    var f = 0,
                        x = 1,
                        b = 1,
                        m = null;
                    null !== d && (f = void 0 !== d[0] ? d[0] / 100 : 0, x = void 0 !== d[1] ? d[1] / 100 : 1, b = void 0 !== d[2] ? d[2] / 100 : 1, m = void 0 !== d[3] ? d[3] / 100 : null);
                    var v = !("donut" !== p.config.chart.type && "pie" !== p.config.chart.type && "polarArea" !== p.config.chart.type && "bubble" !== p.config.chart.type);
                    if (h = null === g || 0 === g.length ? p.globals.dom.Paper.gradient(v ? "radial" : "linear", function (t) {
                        t.at(f, e, a), t.at(x, i, s), t.at(b, i, s), null !== m && t.at(m, e, a)
                    }) : p.globals.dom.Paper.gradient(v ? "radial" : "linear", function (e) {
                        (Array.isArray(g[u]) ? g[u] : g).forEach(function (t) {
                            e.at(t.offset / 100, t.color, t.opacity)
                        })
                    }), v) {
                        var y = p.globals.gridWidth / 2,
                            w = p.globals.gridHeight / 2;
                        "bubble" !== p.config.chart.type ? h.attr({
                            gradientUnits: "userSpaceOnUse",
                            cx: y,
                            cy: w,
                            r: c
                        }) : h.attr({
                            cx: .5,
                            cy: .5,
                            r: .8,
                            fx: .2,
                            fy: .2
                        })
                    } else "vertical" === t ? h.from(0, 0).to(0, 1) : "diagonal" === t ? h.from(0, 0).to(1, 1) : "horizontal" === t ? h.from(0, 1).to(1, 1) : "diagonal2" === t && h.from(1, 0).to(0, 1);
                    return h
                }
            }, {
                key: "drawText",
                value: function (t) {
                    var e, i = t.x,
                        a = t.y,
                        s = t.text,
                        r = t.textAnchor,
                        o = t.fontSize,
                        n = t.fontFamily,
                        l = t.fontWeight,
                        h = t.foreColor,
                        c = t.opacity,
                        d = t.cssClass,
                        g = void 0 === d ? "" : d,
                        u = t.isPlainText,
                        p = void 0 === u || u,
                        f = this.w;
                    return void 0 === s && (s = ""), r || (r = "start"), h && h.length || (h = f.config.chart.foreColor), n = n || f.config.chart.fontFamily, l = l || "regular", (e = Array.isArray(s) ? f.globals.dom.Paper.text(function (t) {
                        for (var e = 0; e < s.length; e++) 0 === e ? t.tspan(s[e]) : t.tspan(s[e]).newLine()
                    }) : p ? f.globals.dom.Paper.plain(s) : f.globals.dom.Paper.text(function (t) {
                        return t.tspan(s)
                    })).attr({
                        x: i,
                        y: a,
                        "text-anchor": r,
                        "dominant-baseline": "auto",
                        "font-size": o,
                        "font-family": n,
                        "font-weight": l,
                        fill: h,
                        "class": "apexcharts-text " + g
                    }), e.node.style.fontFamily = n, e.node.style.opacity = c, e
                }
            }, {
                key: "drawMarker",
                value: function (t, e, i) {
                    t = t || 0;
                    var a = i.pSize || 0,
                        s = null;
                    if ("square" === i.shape || "rect" === i.shape) {
                        var r = void 0 === i.pRadius ? a / 2 : i.pRadius;
                        null !== e && a || (r = a = 0);
                        var o = 1.2 * a + r,
                            n = this.drawRect(o, o, o, o, r);
                        n.attr({
                            x: t - o / 2,
                            y: e - o / 2,
                            cx: t,
                            cy: e,
                            "class": i["class"] ? i["class"] : "",
                            fill: i.pointFillColor,
                            "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                            stroke: i.pointStrokeColor,
                            "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0,
                            "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                        }), s = n
                    } else "circle" !== i.shape && i.shape || (E.isNumber(e) || (e = a = 0), s = this.drawCircle(a, {
                        cx: t,
                        cy: e,
                        "class": i["class"] ? i["class"] : "",
                        stroke: i.pointStrokeColor,
                        fill: i.pointFillColor,
                        "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                        "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0,
                        "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                    }));
                    return s
                }
            }, {
                key: "pathMouseEnter",
                value: function (t, e) {
                    var i = this.w,
                        a = new Y(this.ctx),
                        s = parseInt(t.node.getAttribute("index"), 10),
                        r = parseInt(t.node.getAttribute("j"), 10);
                    if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) && "none" !== i.config.states.hover.filter.type && "none" !== i.config.states.active.filter.type && !i.globals.isTouchDevice) {
                        var o = i.config.states.hover.filter;
                        a.applyFilter(t, s, o.type, o.value)
                    }
                }
            }, {
                key: "pathMouseLeave",
                value: function (t, e) {
                    var i = this.w,
                        a = new Y(this.ctx),
                        s = parseInt(t.node.getAttribute("index"), 10),
                        r = parseInt(t.node.getAttribute("j"), 10);
                    "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && a.getDefaultFilter(t, s)
                }
            }, {
                key: "pathMouseDown",
                value: function (t, e) {
                    var i = this.w,
                        a = new Y(this.ctx),
                        s = parseInt(t.node.getAttribute("index"), 10),
                        r = parseInt(t.node.getAttribute("j"), 10),
                        o = "false";
                    if ("true" === t.node.getAttribute("selected")) {
                        if (t.node.setAttribute("selected", "false"), -1 < i.globals.selectedDataPoints[s].indexOf(r)) {
                            var n = i.globals.selectedDataPoints[s].indexOf(r);
                            i.globals.selectedDataPoints[s].splice(n, 1)
                        }
                    } else {
                        if (!i.config.states.active.allowMultipleDataPointsSelection && 0 < i.globals.selectedDataPoints.length) {
                            i.globals.selectedDataPoints = [];
                            var l = i.globals.dom.Paper.select(".apexcharts-series path").members,
                                h = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,
                                c = function (t) {
                                    Array.prototype.forEach.call(t, function (t) {
                                        t.node.setAttribute("selected", "false"), a.getDefaultFilter(t, s)
                                    })
                                };
                            c(l), c(h)
                        }
                        t.node.setAttribute("selected", "true"), o = "true", void 0 === i.globals.selectedDataPoints[s] && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(r)
                    }
                    if ("true" === o) {
                        var d = i.config.states.active.filter;
                        "none" !== d && a.applyFilter(t, s, d.type, d.value)
                    } else "none" !== i.config.states.active.filter.type && a.getDefaultFilter(t, s);
                    "function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }])
                }
            }, {
                key: "rotateAroundCenter",
                value: function (t) {
                    var e = t.getBBox();
                    return {
                        x: e.x + e.width / 2,
                        y: e.y + e.height / 2
                    }
                }
            }, {
                key: "getTextRects",
                value: function (t, e, i, a, s) {
                    var r = !(4 < arguments.length && void 0 !== s) || arguments[4],
                        o = this.w,
                        n = this.drawText({
                            x: -200,
                            y: -200,
                            text: t,
                            textAnchor: "start",
                            fontSize: e,
                            fontFamily: i,
                            foreColor: "#fff",
                            opacity: 0
                        });
                    a && n.attr("transform", a), o.globals.dom.Paper.add(n);
                    var l = n.bbox();
                    return r || (l = n.node.getBoundingClientRect()), n.remove(), {
                        width: l.width,
                        height: l.height
                    }
                }
            }, {
                key: "placeTextWithEllipsis",
                value: function (t, e, i) {
                    if ("function" == typeof t.getComputedTextLength && (0 < (t.textContent = e).length && t.getComputedTextLength() >= i / 1.1)) {
                        for (var a = e.length - 3; 0 < a; a -= 3)
                            if (t.getSubStringLength(0, a) <= i / 1.1) return void (t.textContent = e.substring(0, a) + "...");
                        t.textContent = "."
                    }
                }
            }], [{
                key: "setAttrs",
                value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
                }
            }]), e
        }(),
        u = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.annoCtx = t
            }
            return o(e, [{
                key: "setOrientations",
                value: function (t, e) {
                    var i = 1 < arguments.length && void 0 !== e ? arguments[1] : null,
                        a = this.w;
                    if ("vertical" === t.label.orientation) {
                        var s = null !== i ? i : 0,
                            r = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(s, "']"));
                        if (null !== r) {
                            var o = r.getBoundingClientRect();
                            r.setAttribute("x", parseFloat(r.getAttribute("x")) - o.height + 4), "top" === t.label.position ? r.setAttribute("y", parseFloat(r.getAttribute("y")) + o.width) : r.setAttribute("y", parseFloat(r.getAttribute("y")) - o.width);
                            var n = this.annoCtx.graphics.rotateAroundCenter(r),
                                l = n.x,
                                h = n.y;
                            r.setAttribute("transform", "rotate(-90 ".concat(l, " ").concat(h, ")"))
                        }
                    }
                }
            }, {
                key: "addBackgroundToAnno",
                value: function (t, e) {
                    var i = this.w;
                    if (!t || !e.label.text || e.label.text && !e.label.text.trim()) return null;
                    var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                        s = t.getBoundingClientRect(),
                        r = e.label.style.padding.left,
                        o = e.label.style.padding.right,
                        n = e.label.style.padding.top,
                        l = e.label.style.padding.bottom;
                    "vertical" === e.label.orientation && (n = e.label.style.padding.left, l = e.label.style.padding.right, r = e.label.style.padding.top, o = e.label.style.padding.bottom);
                    var h = s.left - a.left - r,
                        c = s.top - a.top - n,
                        d = this.annoCtx.graphics.drawRect(h - i.globals.barPadForNumericAxis, c, s.width + r + o, s.height + n + l, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
                    return e.id && d.node.classList.add(e.id), d
                }
            }, {
                key: "annotationsBackground",
                value: function () {
                    var o = this,
                        n = this.w,
                        i = function (t, e, i) {
                            var a = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(i, "-annotations .apexcharts-").concat(i, "-annotation-label[rel='").concat(e, "']"));
                            if (a) {
                                var s = a.parentNode,
                                    r = o.addBackgroundToAnno(a, t);
                                r && s.insertBefore(r.node, a)
                            }
                        };
                    n.config.annotations.xaxis.map(function (t, e) {
                        i(t, e, "xaxis")
                    }), n.config.annotations.yaxis.map(function (t, e) {
                        i(t, e, "yaxis")
                    }), n.config.annotations.points.map(function (t, e) {
                        i(t, e, "point")
                    })
                }
            }, {
                key: "getStringX",
                value: function (t) {
                    var e = this.w,
                        i = t;
                    e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1);
                    var a = e.globals.labels.indexOf(t),
                        s = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (a + 1) + ")");
                    return s && (i = parseFloat(s.getAttribute("x"))), i
                }
            }]), e
        }(),
        p = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.annoCtx = t, this.invertAxis = this.annoCtx.invertAxis
            }
            return o(e, [{
                key: "addXaxisAnnotation",
                value: function (t, e, i) {
                    var a = this.w,
                        s = this.invertAxis ? a.globals.minY : a.globals.minX,
                        r = this.invertAxis ? a.globals.maxY : a.globals.maxX,
                        o = this.invertAxis ? a.globals.yRange[0] : a.globals.xRange,
                        n = (t.x - s) / (o / a.globals.gridWidth);
                    this.annoCtx.inversedReversedAxis && (n = (r - t.x) / (o / a.globals.gridWidth));
                    var l = t.label.text;
                    "category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || a.globals.dataFormatXNumeric || (n = this.annoCtx.helpers.getStringX(t.x));
                    var h = t.strokeDashArray;
                    if (E.isNumber(n)) {
                        if (null === t.x2 || void 0 === t.x2) {
                            var c = this.annoCtx.graphics.drawLine(n + t.offsetX, 0 + t.offsetY, n + t.offsetX, a.globals.gridHeight + t.offsetY, t.borderColor, h, t.borderWidth);
                            e.appendChild(c.node), t.id && c.node.classList.add(t.id)
                        } else {
                            var d = (t.x2 - s) / (o / a.globals.gridWidth);
                            if (this.annoCtx.inversedReversedAxis && (d = (r - t.x2) / (o / a.globals.gridWidth)), "category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || a.globals.dataFormatXNumeric || (d = this.annoCtx.helpers.getStringX(t.x2)), d < n) {
                                var g = n;
                                n = d, d = g
                            }
                            var u = this.annoCtx.graphics.drawRect(n + t.offsetX, 0 + t.offsetY, d - n, a.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, h);
                            u.node.classList.add("apexcharts-annotation-rect"), u.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), e.appendChild(u.node), t.id && u.node.classList.add(t.id)
                        }
                        var p = "top" === t.label.position ? 4 : a.globals.gridHeight,
                            f = this.annoCtx.graphics.getTextRects(l, parseFloat(t.label.style.fontSize)),
                            x = this.annoCtx.graphics.drawText({
                                x: n + t.label.offsetX,
                                y: p + t.label.offsetY - ("vertical" === t.label.orientation ? "top" === t.label.position ? f.width / 2 - 12 : -f.width / 2 : 0),
                                text: l,
                                textAnchor: t.label.textAnchor,
                                fontSize: t.label.style.fontSize,
                                fontFamily: t.label.style.fontFamily,
                                fontWeight: t.label.style.fontWeight,
                                foreColor: t.label.style.color,
                                cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                            });
                        x.attr({
                            rel: i
                        }), e.appendChild(x.node), this.annoCtx.helpers.setOrientations(t, i)
                    }
                }
            }, {
                key: "drawXAxisAnnotations",
                value: function () {
                    var i = this,
                        t = this.w,
                        a = this.annoCtx.graphics.group({
                            "class": "apexcharts-xaxis-annotations"
                        });
                    return t.config.annotations.xaxis.map(function (t, e) {
                        i.addXaxisAnnotation(t, a.node, e)
                    }), a
                }
            }]), e
        }(),
        M = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "getStackedSeriesTotals",
                value: function () {
                    var t = this.w,
                        e = [];
                    if (0 === t.globals.series.length) return e;
                    for (var i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
                        for (var a = 0, s = 0; s < t.globals.series.length; s++) void 0 !== t.globals.series[s][i] && (a += t.globals.series[s][i]);
                        e.push(a)
                    }
                    return t.globals.stackedSeriesTotals = e
                }
            }, {
                key: "getSeriesTotalByIndex",
                value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? arguments[0] : null;
                    return null === e ? this.w.config.series.reduce(function (t, e) {
                        return t + e
                    }, 0) : this.w.globals.series[e].reduce(function (t, e) {
                        return t + e
                    }, 0)
                }
            }, {
                key: "isSeriesNull",
                value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? arguments[0] : null;
                    return 0 === (null === e ? this.w.config.series.filter(function (t) {
                        return null !== t
                    }) : this.w.config.series[e].data.filter(function (t) {
                        return null !== t
                    })).length
                }
            }, {
                key: "seriesHaveSameValues",
                value: function (t) {
                    return this.w.globals.series[t].every(function (t, e, i) {
                        return t === i[0]
                    })
                }
            }, {
                key: "getCategoryLabels",
                value: function (t) {
                    var e = this.w,
                        i = t.slice();
                    return e.config.xaxis.convertedCatToNumeric && (i = t.map(function (t) {
                        return e.config.xaxis.labels.formatter(t - e.globals.minX + 1)
                    })), i
                }
            }, {
                key: "getLargestSeries",
                value: function () {
                    var t = this.w;
                    t.globals.maxValsInArrayIndex = t.globals.series.map(function (t) {
                        return t.length
                    }).indexOf(Math.max.apply(Math, t.globals.series.map(function (t) {
                        return t.length
                    })))
                }
            }, {
                key: "getLargestMarkerSize",
                value: function () {
                    var t = this.w,
                        e = 0;
                    return t.globals.markers.size.forEach(function (t) {
                        e = Math.max(e, t)
                    }), t.globals.markers.largestSize = e
                }
            }, {
                key: "getSeriesTotals",
                value: function () {
                    var t = this.w;
                    t.globals.seriesTotals = t.globals.series.map(function (t) {
                        var e = 0;
                        if (Array.isArray(t))
                            for (var i = 0; i < t.length; i++) e += t[i];
                        else e += t;
                        return e
                    })
                }
            }, {
                key: "getSeriesTotalsXRange",
                value: function (s, r) {
                    var o = this.w;
                    return o.globals.series.map(function (t, e) {
                        for (var i = 0, a = 0; a < t.length; a++) o.globals.seriesX[e][a] > s && o.globals.seriesX[e][a] < r && (i += t[a]);
                        return i
                    })
                }
            }, {
                key: "getPercentSeries",
                value: function () {
                    var o = this.w;
                    o.globals.seriesPercent = o.globals.series.map(function (t) {
                        var e = [];
                        if (Array.isArray(t))
                            for (var i = 0; i < t.length; i++) {
                                var a = o.globals.stackedSeriesTotals[i],
                                    s = 0;
                                a && (s = 100 * t[i] / a), e.push(s)
                            } else {
                            var r = 100 * t / o.globals.seriesTotals.reduce(function (t, e) {
                                return t + e
                            }, 0);
                            e.push(r)
                        }
                        return e
                    })
                }
            }, {
                key: "getCalculatedRatios",
                value: function () {
                    var t, e, i, a, s = this.w.globals,
                        r = [],
                        o = 0,
                        n = [],
                        l = .1,
                        h = 0;
                    if (s.yRange = [], s.isMultipleYAxis)
                        for (var c = 0; c < s.minYArr.length; c++) s.yRange.push(Math.abs(s.minYArr[c] - s.maxYArr[c])), n.push(0);
                    else s.yRange.push(Math.abs(s.minY - s.maxY));
                    s.xRange = Math.abs(s.maxX - s.minX), s.zRange = Math.abs(s.maxZ - s.minZ);
                    for (var d = 0; d < s.yRange.length; d++) r.push(s.yRange[d] / s.gridHeight);
                    if (e = s.xRange / s.gridWidth, i = Math.abs(s.initialMaxX - s.initialMinX) / s.gridWidth, t = s.yRange / s.gridWidth, a = s.xRange / s.gridHeight, (o = s.zRange / s.gridHeight * 16) || (o = 1), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (s.hasNegs = !0), s.isMultipleYAxis) {
                        n = [];
                        for (var g = 0; g < r.length; g++) n.push(-s.minYArr[g] / r[g])
                    } else n.push(-s.minY / r[0]), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (l = -s.minY / t, h = s.minX / e);
                    return {
                        yRatio: r,
                        invertedYRatio: t,
                        zRatio: o,
                        xRatio: e,
                        initialXRatio: i,
                        invertedXRatio: a,
                        baseLineInvertedY: l,
                        baseLineY: n,
                        baseLineX: h
                    }
                }
            }, {
                key: "getLogSeries",
                value: function (t) {
                    var i = this,
                        a = this.w;
                    return a.globals.seriesLog = t.map(function (t, e) {
                        return a.config.yaxis[e] && a.config.yaxis[e].logarithmic ? t.map(function (t) {
                            return null === t ? null : i.getLogVal(t, e)
                        }) : t
                    }), a.globals.invalidLogScale ? t : a.globals.seriesLog
                }
            }, {
                key: "getLogVal",
                value: function (t, e) {
                    var i = this.w;
                    return (Math.log(t) - Math.log(i.globals.minYArr[e])) / (Math.log(i.globals.maxYArr[e]) - Math.log(i.globals.minYArr[e]))
                }
            }, {
                key: "getLogYRatios",
                value: function (t) {
                    var r = this,
                        o = this.w,
                        n = this.w.globals;
                    return n.yLogRatio = t.slice(), n.logYRange = n.yRange.map(function (t, e) {
                        if (o.config.yaxis[e] && r.w.config.yaxis[e].logarithmic) {
                            var i, a = -Number.MAX_VALUE,
                                s = Number.MIN_VALUE;
                            return n.seriesLog.forEach(function (t, e) {
                                t.forEach(function (t) {
                                    o.config.yaxis[e] && o.config.yaxis[e].logarithmic && (a = Math.max(t, a), s = Math.min(t, s))
                                })
                            }), i = Math.pow(n.yRange[e], Math.abs(s - a) / n.yRange[e]), n.yLogRatio[e] = i / n.gridHeight, i
                        }
                    }), n.invalidLogScale ? t.slice() : n.yLogRatio
                }
            }], [{
                key: "checkComboSeries",
                value: function (t) {
                    var e = !1,
                        i = 0,
                        a = 0;
                    return t.length && void 0 !== t[0].type && t.forEach(function (t) {
                        "bar" !== t.type && "column" !== t.type && "candlestick" !== t.type && "boxPlot" !== t.type || i++, void 0 !== t.type && a++
                    }), 1 < a && (e = !0), {
                        comboBarCount: i,
                        comboCharts: e
                    }
                }
            }, {
                key: "extendArrayProps",
                value: function (t, e, i) {
                    return e.yaxis && (e = t.extendYAxis(e, i)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e
                }
            }]), e
        }(),
        f = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.annoCtx = t
            }
            return o(e, [{
                key: "addYaxisAnnotation",
                value: function (t, e, i) {
                    var a, s = this.w,
                        r = t.strokeDashArray,
                        o = this._getY1Y2("y1", t),
                        n = t.label.text;
                    if (null === t.y2 || void 0 === t.y2) {
                        var l = this.annoCtx.graphics.drawLine(0 + t.offsetX, o + t.offsetY, this._getYAxisAnnotationWidth(t), o + t.offsetY, t.borderColor, r, t.borderWidth);
                        e.appendChild(l.node), t.id && l.node.classList.add(t.id)
                    } else {
                        if ((a = this._getY1Y2("y2", t)) > o) {
                            var h = o;
                            o = a, a = h
                        }
                        var c = this.annoCtx.graphics.drawRect(0 + t.offsetX, a + t.offsetY, this._getYAxisAnnotationWidth(t), o - a, 0, t.fillColor, t.opacity, 1, t.borderColor, r);
                        c.node.classList.add("apexcharts-annotation-rect"), c.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), e.appendChild(c.node), t.id && c.node.classList.add(t.id)
                    }
                    var d = "right" === t.label.position ? s.globals.gridWidth : 0,
                        g = this.annoCtx.graphics.drawText({
                            x: d + t.label.offsetX,
                            y: (a || o) + t.label.offsetY - 3,
                            text: n,
                            textAnchor: t.label.textAnchor,
                            fontSize: t.label.style.fontSize,
                            fontFamily: t.label.style.fontFamily,
                            fontWeight: t.label.style.fontWeight,
                            foreColor: t.label.style.color,
                            cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                        });
                    g.attr({
                        rel: i
                    }), e.appendChild(g.node)
                }
            }, {
                key: "_getY1Y2",
                value: function (t, e) {
                    var i, a = "y1" === t ? e.y : e.y2,
                        s = this.w;
                    if (this.annoCtx.invertAxis) {
                        var r = s.globals.labels.indexOf(a);
                        s.config.xaxis.convertedCatToNumeric && (r = s.globals.categoryLabels.indexOf(a));
                        var o = s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (r + 1) + ")");
                        o && (i = parseFloat(o.getAttribute("y")))
                    } else {
                        var n;
                        n = s.config.yaxis[e.yAxisIndex].logarithmic ? (a = new M(this.annoCtx.ctx).getLogVal(a, e.yAxisIndex)) / s.globals.yLogRatio[e.yAxisIndex] : (a - s.globals.minYArr[e.yAxisIndex]) / (s.globals.yRange[e.yAxisIndex] / s.globals.gridHeight), i = s.globals.gridHeight - n, s.config.yaxis[e.yAxisIndex] && s.config.yaxis[e.yAxisIndex].reversed && (i = n)
                    }
                    return i
                }
            }, {
                key: "_getYAxisAnnotationWidth",
                value: function (t) {
                    var e = this.w;
                    return e.globals.gridWidth, (-1 < t.width.indexOf("%") ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX
                }
            }, {
                key: "drawYAxisAnnotations",
                value: function () {
                    var i = this,
                        t = this.w,
                        a = this.annoCtx.graphics.group({
                            "class": "apexcharts-yaxis-annotations"
                        });
                    return t.config.annotations.yaxis.map(function (t, e) {
                        i.addYaxisAnnotation(t, a.node, e)
                    }), a
                }
            }]), e
        }(),
        x = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.annoCtx = t
            }
            return o(e, [{
                key: "addPointAnnotation",
                value: function (t, e, i) {
                    var a = this.w,
                        s = 0,
                        r = 0,
                        o = 0;
                    this.annoCtx.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts.");
                    var n = parseFloat(t.y);
                    if ("string" == typeof t.x) {
                        var l = a.globals.labels.indexOf(t.x);
                        a.config.xaxis.convertedCatToNumeric && (l = a.globals.categoryLabels.indexOf(t.x)), s = this.annoCtx.helpers.getStringX(t.x), null === t.y && (n = a.globals.series[t.seriesIndex][l])
                    } else s = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth);
                    for (var h, c = [], d = 0, g = 0; g <= t.seriesIndex; g++) {
                        var u = a.config.yaxis[g].seriesName;
                        if (u)
                            for (var p = g + 1; p <= t.seriesIndex; p++) a.config.yaxis[p].seriesName === u && -1 === c.indexOf(u) && (d++, c.push(u))
                    }
                    if (a.config.yaxis[t.yAxisIndex].logarithmic) h = (n = new M(this.annoCtx.ctx).getLogVal(n, t.yAxisIndex)) / a.globals.yLogRatio[t.yAxisIndex];
                    else {
                        var f = t.yAxisIndex + d;
                        h = (n - a.globals.minYArr[f]) / (a.globals.yRange[f] / a.globals.gridHeight)
                    }
                    if (r = a.globals.gridHeight - h - parseFloat(t.label.style.fontSize) - t.marker.size, o = a.globals.gridHeight - h, a.config.yaxis[t.yAxisIndex] && a.config.yaxis[t.yAxisIndex].reversed && (r = h + parseFloat(t.label.style.fontSize) + t.marker.size, o = h), E.isNumber(s)) {
                        var x = {
                            pSize: t.marker.size,
                            pointStrokeWidth: t.marker.strokeWidth,
                            pointFillColor: t.marker.fillColor,
                            pointStrokeColor: t.marker.strokeColor,
                            shape: t.marker.shape,
                            pRadius: t.marker.radius,
                            "class": "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id ? t.id : "")
                        },
                            b = this.annoCtx.graphics.drawMarker(s + t.marker.offsetX, o + t.marker.offsetY, x);
                        e.appendChild(b.node);
                        var m = t.label.text ? t.label.text : "",
                            v = this.annoCtx.graphics.drawText({
                                x: s + t.label.offsetX,
                                y: r + t.label.offsetY,
                                text: m,
                                textAnchor: t.label.textAnchor,
                                fontSize: t.label.style.fontSize,
                                fontFamily: t.label.style.fontFamily,
                                fontWeight: t.label.style.fontWeight,
                                foreColor: t.label.style.color,
                                cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                            });
                        if (v.attr({
                            rel: i
                        }), e.appendChild(v.node), t.customSVG.SVG) {
                            var y = this.annoCtx.graphics.group({
                                "class": "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass
                            });
                            y.attr({
                                transform: "translate(".concat(s + t.customSVG.offsetX, ", ").concat(r + t.customSVG.offsetY, ")")
                            }), y.node.innerHTML = t.customSVG.SVG, e.appendChild(y.node)
                        }
                        if (t.image.path) {
                            var w = t.image.width ? t.image.width : 20,
                                k = t.image.height ? t.image.height : 20;
                            this.annoCtx.addImage({
                                x: s + t.image.offsetX - w / 2,
                                y: r + t.image.offsetY - k / 2,
                                width: w,
                                height: k,
                                path: t.image.path,
                                appendTo: ".apexcharts-point-annotations"
                            })
                        }
                    }
                }
            }, {
                key: "drawPointAnnotations",
                value: function () {
                    var i = this,
                        t = this.w,
                        a = this.annoCtx.graphics.group({
                            "class": "apexcharts-point-annotations"
                        });
                    return t.config.annotations.points.map(function (t, e) {
                        i.addPointAnnotation(t, a.node, e)
                    }), a
                }
            }]), e
        }(),
        b = {
            name: "en",
            options: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                toolbar: {
                    exportToSVG: "Download SVG",
                    exportToPNG: "Download PNG",
                    exportToCSV: "Download CSV",
                    menu: "Menu",
                    selection: "Selection",
                    selectionZoom: "Selection Zoom",
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    pan: "Panning",
                    reset: "Reset Zoom"
                }
            }
        },
        m = function () {
            function t() {
                r(this, t), this.yAxis = {
                    show: !0,
                    showAlways: !1,
                    showForNullSeries: !0,
                    seriesName: void 0,
                    opposite: !1,
                    reversed: !1,
                    logarithmic: !1,
                    tickAmount: void 0,
                    forceNiceScale: !1,
                    max: void 0,
                    min: void 0,
                    floating: !1,
                    decimalsInFloat: void 0,
                    labels: {
                        show: !0,
                        minWidth: 0,
                        maxWidth: 160,
                        offsetX: 0,
                        offsetY: 0,
                        align: void 0,
                        rotate: 0,
                        padding: 20,
                        style: {
                            colors: [],
                            fontSize: "11px",
                            fontWeight: 400,
                            fontFamily: void 0,
                            cssClass: ""
                        },
                        formatter: void 0
                    },
                    axisBorder: {
                        show: !1,
                        color: "#e0e0e0",
                        width: 1,
                        offsetX: 0,
                        offsetY: 0
                    },
                    axisTicks: {
                        show: !1,
                        color: "#e0e0e0",
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                    },
                    title: {
                        text: void 0,
                        rotate: -90,
                        offsetY: 0,
                        offsetX: 0,
                        style: {
                            color: void 0,
                            fontSize: "11px",
                            fontWeight: 900,
                            fontFamily: void 0,
                            cssClass: ""
                        }
                    },
                    tooltip: {
                        enabled: !1,
                        offsetX: 0
                    },
                    crosshairs: {
                        show: !0,
                        position: "front",
                        stroke: {
                            color: "#b6b6b6",
                            width: 1,
                            dashArray: 0
                        }
                    }
                }, this.pointAnnotation = {
                    x: 0,
                    y: null,
                    yAxisIndex: 0,
                    seriesIndex: 0,
                    marker: {
                        size: 4,
                        fillColor: "#fff",
                        strokeWidth: 2,
                        strokeColor: "#333",
                        shape: "circle",
                        offsetX: 0,
                        offsetY: 0,
                        radius: 2,
                        cssClass: ""
                    },
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        borderRadius: 2,
                        text: void 0,
                        textAnchor: "middle",
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            cssClass: "",
                            padding: {
                                left: 5,
                                right: 5,
                                top: 2,
                                bottom: 2
                            }
                        }
                    },
                    customSVG: {
                        SVG: void 0,
                        cssClass: void 0,
                        offsetX: 0,
                        offsetY: 0
                    },
                    image: {
                        path: void 0,
                        width: 20,
                        height: 20,
                        offsetX: 0,
                        offsetY: 0
                    }
                }, this.yAxisAnnotation = {
                    y: 0,
                    y2: null,
                    strokeDashArray: 1,
                    fillColor: "#c2c2c2",
                    borderColor: "#c2c2c2",
                    borderWidth: 1,
                    opacity: .3,
                    offsetX: 0,
                    offsetY: 0,
                    width: "100%",
                    yAxisIndex: 0,
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        borderRadius: 2,
                        text: void 0,
                        textAnchor: "end",
                        position: "right",
                        offsetX: 0,
                        offsetY: -3,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            cssClass: "",
                            padding: {
                                left: 5,
                                right: 5,
                                top: 2,
                                bottom: 2
                            }
                        }
                    }
                }, this.xAxisAnnotation = {
                    x: 0,
                    x2: null,
                    strokeDashArray: 1,
                    fillColor: "#c2c2c2",
                    borderColor: "#c2c2c2",
                    borderWidth: 1,
                    opacity: .3,
                    offsetX: 0,
                    offsetY: 0,
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        borderRadius: 2,
                        text: void 0,
                        textAnchor: "middle",
                        orientation: "vertical",
                        position: "top",
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            cssClass: "",
                            padding: {
                                left: 5,
                                right: 5,
                                top: 2,
                                bottom: 2
                            }
                        }
                    }
                }, this.text = {
                    x: 0,
                    y: 0,
                    text: "",
                    textAnchor: "start",
                    foreColor: void 0,
                    fontSize: "13px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    appendTo: ".apexcharts-annotations",
                    backgroundColor: "transparent",
                    borderColor: "#c2c2c2",
                    borderRadius: 0,
                    borderWidth: 0,
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 2,
                    paddingBottom: 2
                }
            }
            return o(t, [{
                key: "init",
                value: function () {
                    return {
                        annotations: {
                            position: "front",
                            yaxis: [this.yAxisAnnotation],
                            xaxis: [this.xAxisAnnotation],
                            points: [this.pointAnnotation],
                            texts: [],
                            images: [],
                            shapes: []
                        },
                        chart: {
                            animations: {
                                enabled: !0,
                                easing: "easeinout",
                                speed: 800,
                                animateGradually: {
                                    delay: 150,
                                    enabled: !0
                                },
                                dynamicAnimation: {
                                    enabled: !0,
                                    speed: 350
                                }
                            },
                            background: "transparent",
                            locales: [b],
                            defaultLocale: "en",
                            dropShadow: {
                                enabled: !1,
                                enabledOnSeries: void 0,
                                top: 2,
                                left: 2,
                                blur: 4,
                                color: "#000",
                                opacity: .35
                            },
                            events: {
                                animationEnd: void 0,
                                beforeMount: void 0,
                                mounted: void 0,
                                updated: void 0,
                                click: void 0,
                                mouseMove: void 0,
                                mouseLeave: void 0,
                                legendClick: void 0,
                                markerClick: void 0,
                                selection: void 0,
                                dataPointSelection: void 0,
                                dataPointMouseEnter: void 0,
                                dataPointMouseLeave: void 0,
                                beforeZoom: void 0,
                                beforeResetZoom: void 0,
                                zoomed: void 0,
                                scrolled: void 0,
                                brushScrolled: void 0
                            },
                            foreColor: "#373d3f",
                            fontFamily: "Helvetica, Arial, sans-serif",
                            height: "auto",
                            parentHeightOffset: 15,
                            redrawOnParentResize: !0,
                            redrawOnWindowResize: !0,
                            id: void 0,
                            group: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            selection: {
                                enabled: !1,
                                type: "x",
                                fill: {
                                    color: "#24292e",
                                    opacity: .1
                                },
                                stroke: {
                                    width: 1,
                                    color: "#24292e",
                                    opacity: .4,
                                    dashArray: 3
                                },
                                xaxis: {
                                    min: void 0,
                                    max: void 0
                                },
                                yaxis: {
                                    min: void 0,
                                    max: void 0
                                }
                            },
                            sparkline: {
                                enabled: !1
                            },
                            brush: {
                                enabled: !1,
                                autoScaleYaxis: !0,
                                target: void 0
                            },
                            stacked: !1,
                            stackType: "normal",
                            toolbar: {
                                show: !0,
                                offsetX: 0,
                                offsetY: 0,
                                tools: {
                                    download: !0,
                                    selection: !0,
                                    zoom: !0,
                                    zoomin: !0,
                                    zoomout: !0,
                                    pan: !0,
                                    reset: !0,
                                    customIcons: []
                                },
                                "export": {
                                    csv: {
                                        filename: void 0,
                                        columnDelimiter: ",",
                                        headerCategory: "category",
                                        headerValue: "value",
                                        dateFormatter: function (t) {
                                            return new Date(t).toDateString()
                                        }
                                    },
                                    png: {
                                        filename: void 0
                                    },
                                    svg: {
                                        filename: void 0
                                    }
                                },
                                autoSelected: "zoom"
                            },
                            type: "line",
                            width: "100%",
                            zoom: {
                                enabled: !0,
                                type: "x",
                                autoScaleYaxis: !1,
                                zoomedArea: {
                                    fill: {
                                        color: "#90CAF9",
                                        opacity: .4
                                    },
                                    stroke: {
                                        color: "#0D47A1",
                                        opacity: .4,
                                        width: 1
                                    }
                                }
                            }
                        },
                        plotOptions: {
                            area: {
                                fillTo: "origin"
                            },
                            bar: {
                                horizontal: !1,
                                columnWidth: "70%",
                                barHeight: "70%",
                                distributed: !1,
                                borderRadius: 0,
                                rangeBarOverlap: !0,
                                rangeBarGroupRows: !1,
                                colors: {
                                    ranges: [],
                                    backgroundBarColors: [],
                                    backgroundBarOpacity: 1,
                                    backgroundBarRadius: 0
                                },
                                dataLabels: {
                                    position: "top",
                                    maxItems: 100,
                                    hideOverflowingLabels: !0,
                                    orientation: "horizontal"
                                }
                            },
                            bubble: {
                                minBubbleRadius: void 0,
                                maxBubbleRadius: void 0
                            },
                            candlestick: {
                                colors: {
                                    upward: "#00B746",
                                    downward: "#EF403C"
                                },
                                wick: {
                                    useFillColor: !0
                                }
                            },
                            boxPlot: {
                                colors: {
                                    upper: "#00E396",
                                    lower: "#008FFB"
                                }
                            },
                            heatmap: {
                                radius: 2,
                                enableShades: !0,
                                shadeIntensity: .5,
                                reverseNegativeShade: !1,
                                distributed: !1,
                                useFillColorAsStroke: !1,
                                colorScale: {
                                    inverse: !1,
                                    ranges: [],
                                    min: void 0,
                                    max: void 0
                                }
                            },
                            treemap: {
                                enableShades: !0,
                                shadeIntensity: .5,
                                distributed: !1,
                                reverseNegativeShade: !1,
                                useFillColorAsStroke: !1,
                                colorScale: {
                                    inverse: !1,
                                    ranges: [],
                                    min: void 0,
                                    max: void 0
                                }
                            },
                            radialBar: {
                                inverseOrder: !1,
                                startAngle: 0,
                                endAngle: 360,
                                offsetX: 0,
                                offsetY: 0,
                                hollow: {
                                    margin: 5,
                                    size: "50%",
                                    background: "transparent",
                                    image: void 0,
                                    imageWidth: 150,
                                    imageHeight: 150,
                                    imageOffsetX: 0,
                                    imageOffsetY: 0,
                                    imageClipped: !0,
                                    position: "front",
                                    dropShadow: {
                                        enabled: !1,
                                        top: 0,
                                        left: 0,
                                        blur: 3,
                                        color: "#000",
                                        opacity: .5
                                    }
                                },
                                track: {
                                    show: !0,
                                    startAngle: void 0,
                                    endAngle: void 0,
                                    background: "#f2f2f2",
                                    strokeWidth: "97%",
                                    opacity: 1,
                                    margin: 5,
                                    dropShadow: {
                                        enabled: !1,
                                        top: 0,
                                        left: 0,
                                        blur: 3,
                                        color: "#000",
                                        opacity: .5
                                    }
                                },
                                dataLabels: {
                                    show: !0,
                                    name: {
                                        show: !0,
                                        fontSize: "16px",
                                        fontFamily: void 0,
                                        fontWeight: 600,
                                        color: void 0,
                                        offsetY: 0,
                                        formatter: function (t) {
                                            return t
                                        }
                                    },
                                    value: {
                                        show: !0,
                                        fontSize: "14px",
                                        fontFamily: void 0,
                                        fontWeight: 400,
                                        color: void 0,
                                        offsetY: 16,
                                        formatter: function (t) {
                                            return t + "%"
                                        }
                                    },
                                    total: {
                                        show: !1,
                                        label: "Total",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        fontFamily: void 0,
                                        color: void 0,
                                        formatter: function (t) {
                                            return t.globals.seriesTotals.reduce(function (t, e) {
                                                return t + e
                                            }, 0) / t.globals.series.length + "%"
                                        }
                                    }
                                }
                            },
                            pie: {
                                customScale: 1,
                                offsetX: 0,
                                offsetY: 0,
                                startAngle: 0,
                                endAngle: 360,
                                expandOnClick: !0,
                                dataLabels: {
                                    offset: 0,
                                    minAngleToShowLabel: 10
                                },
                                donut: {
                                    size: "65%",
                                    background: "transparent",
                                    labels: {
                                        show: !1,
                                        name: {
                                            show: !0,
                                            fontSize: "16px",
                                            fontFamily: void 0,
                                            fontWeight: 600,
                                            color: void 0,
                                            offsetY: -10,
                                            formatter: function (t) {
                                                return t
                                            }
                                        },
                                        value: {
                                            show: !0,
                                            fontSize: "20px",
                                            fontFamily: void 0,
                                            fontWeight: 400,
                                            color: void 0,
                                            offsetY: 10,
                                            formatter: function (t) {
                                                return t
                                            }
                                        },
                                        total: {
                                            show: !1,
                                            showAlways: !1,
                                            label: "Total",
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            fontFamily: void 0,
                                            color: void 0,
                                            formatter: function (t) {
                                                return t.globals.seriesTotals.reduce(function (t, e) {
                                                    return t + e
                                                }, 0)
                                            }
                                        }
                                    }
                                }
                            },
                            polarArea: {
                                rings: {
                                    strokeWidth: 1,
                                    strokeColor: "#e8e8e8"
                                },
                                spokes: {
                                    strokeWidth: 1,
                                    connectorColors: "#e8e8e8"
                                }
                            },
                            radar: {
                                size: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                polygons: {
                                    strokeWidth: 1,
                                    strokeColors: "#e8e8e8",
                                    connectorColors: "#e8e8e8",
                                    fill: {
                                        colors: void 0
                                    }
                                }
                            }
                        },
                        colors: void 0,
                        dataLabels: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            formatter: function (t) {
                                return null !== t ? t : ""
                            },
                            textAnchor: "middle",
                            distributed: !1,
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                fontSize: "12px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                colors: void 0
                            },
                            background: {
                                enabled: !0,
                                foreColor: "#fff",
                                borderRadius: 2,
                                padding: 4,
                                opacity: .9,
                                borderWidth: 1,
                                borderColor: "#fff",
                                dropShadow: {
                                    enabled: !1,
                                    top: 1,
                                    left: 1,
                                    blur: 1,
                                    color: "#000",
                                    opacity: .45
                                }
                            },
                            dropShadow: {
                                enabled: !1,
                                top: 1,
                                left: 1,
                                blur: 1,
                                color: "#000",
                                opacity: .45
                            }
                        },
                        fill: {
                            type: "solid",
                            colors: void 0,
                            opacity: .85,
                            gradient: {
                                shade: "dark",
                                type: "horizontal",
                                shadeIntensity: .5,
                                gradientToColors: void 0,
                                inverseColors: !0,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [0, 50, 100],
                                colorStops: []
                            },
                            image: {
                                src: [],
                                width: void 0,
                                height: void 0
                            },
                            pattern: {
                                style: "squares",
                                width: 6,
                                height: 6,
                                strokeWidth: 2
                            }
                        },
                        forecastDataPoints: {
                            count: 0,
                            fillOpacity: .5,
                            strokeWidth: void 0,
                            dashArray: 4
                        },
                        grid: {
                            show: !0,
                            borderColor: "#e0e0e0",
                            strokeDashArray: 0,
                            position: "back",
                            xaxis: {
                                lines: {
                                    show: !1
                                }
                            },
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            },
                            row: {
                                colors: void 0,
                                opacity: .5
                            },
                            column: {
                                colors: void 0,
                                opacity: .5
                            },
                            padding: {
                                top: 0,
                                right: 10,
                                bottom: 0,
                                left: 12
                            }
                        },
                        labels: [],
                        legend: {
                            show: !0,
                            showForSingleSeries: !1,
                            showForNullSeries: !0,
                            showForZeroSeries: !0,
                            floating: !1,
                            position: "bottom",
                            horizontalAlign: "center",
                            inverseOrder: !1,
                            fontSize: "12px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            width: void 0,
                            height: void 0,
                            formatter: void 0,
                            tooltipHoverFormatter: void 0,
                            offsetX: -20,
                            offsetY: 4,
                            customLegendItems: [],
                            labels: {
                                colors: void 0,
                                useSeriesColors: !1
                            },
                            markers: {
                                width: 12,
                                height: 12,
                                strokeWidth: 0,
                                fillColors: void 0,
                                strokeColor: "#fff",
                                radius: 12,
                                customHTML: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                onClick: void 0
                            },
                            itemMargin: {
                                horizontal: 5,
                                vertical: 2
                            },
                            onItemClick: {
                                toggleDataSeries: !0
                            },
                            onItemHover: {
                                highlightDataSeries: !0
                            }
                        },
                        markers: {
                            discrete: [],
                            size: 0,
                            colors: void 0,
                            strokeColors: "#fff",
                            strokeWidth: 2,
                            strokeOpacity: .9,
                            strokeDashArray: 0,
                            fillOpacity: 1,
                            shape: "circle",
                            width: 8,
                            height: 8,
                            radius: 2,
                            offsetX: 0,
                            offsetY: 0,
                            onClick: void 0,
                            onDblClick: void 0,
                            showNullDataPoints: !0,
                            hover: {
                                size: void 0,
                                sizeOffset: 3
                            }
                        },
                        noData: {
                            text: void 0,
                            align: "center",
                            verticalAlign: "middle",
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: void 0,
                                fontSize: "14px",
                                fontFamily: void 0
                            }
                        },
                        responsive: [],
                        series: void 0,
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "lighten",
                                    value: .1
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "darken",
                                    value: .5
                                }
                            }
                        },
                        title: {
                            text: void 0,
                            align: "left",
                            margin: 5,
                            offsetX: 0,
                            offsetY: 0,
                            floating: !1,
                            style: {
                                fontSize: "14px",
                                fontWeight: 900,
                                fontFamily: void 0,
                                color: void 0
                            }
                        },
                        subtitle: {
                            text: void 0,
                            align: "left",
                            margin: 5,
                            offsetX: 0,
                            offsetY: 30,
                            floating: !1,
                            style: {
                                fontSize: "12px",
                                fontWeight: 400,
                                fontFamily: void 0,
                                color: void 0
                            }
                        },
                        stroke: {
                            show: !0,
                            curve: "smooth",
                            lineCap: "butt",
                            width: 2,
                            colors: void 0,
                            dashArray: 0
                        },
                        tooltip: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            shared: !0,
                            followCursor: !1,
                            intersect: !1,
                            inverseOrder: !1,
                            custom: void 0,
                            fillSeriesColor: !1,
                            theme: "light",
                            style: {
                                fontSize: "12px",
                                fontFamily: void 0
                            },
                            onDatasetHover: {
                                highlightDataSeries: !1
                            },
                            x: {
                                show: !0,
                                format: "dd MMM",
                                formatter: void 0
                            },
                            y: {
                                formatter: void 0,
                                title: {
                                    formatter: function (t) {
                                        return t ? t + ": " : ""
                                    }
                                }
                            },
                            z: {
                                formatter: void 0,
                                title: "Size: "
                            },
                            marker: {
                                show: !0,
                                fillColors: void 0
                            },
                            items: {
                                display: "flex"
                            },
                            fixed: {
                                enabled: !1,
                                position: "topRight",
                                offsetX: 0,
                                offsetY: 0
                            }
                        },
                        xaxis: {
                            type: "category",
                            categories: [],
                            convertedCatToNumeric: !1,
                            offsetX: 0,
                            offsetY: 0,
                            overwriteCategories: void 0,
                            labels: {
                                show: !0,
                                rotate: -45,
                                rotateAlways: !1,
                                hideOverlappingLabels: !0,
                                trim: !1,
                                minHeight: void 0,
                                maxHeight: 120,
                                showDuplicates: !0,
                                style: {
                                    colors: [],
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    fontFamily: void 0,
                                    cssClass: ""
                                },
                                offsetX: 0,
                                offsetY: 0,
                                format: void 0,
                                formatter: void 0,
                                datetimeUTC: !0,
                                datetimeFormatter: {
                                    year: "yyyy",
                                    month: "MMM 'yy",
                                    day: "dd MMM",
                                    hour: "HH:mm",
                                    minute: "HH:mm:ss",
                                    second: "HH:mm:ss"
                                }
                            },
                            axisBorder: {
                                show: !0,
                                color: "#e0e0e0",
                                width: "100%",
                                height: 1,
                                offsetX: 0,
                                offsetY: 0
                            },
                            axisTicks: {
                                show: !0,
                                color: "#e0e0e0",
                                height: 6,
                                offsetX: 0,
                                offsetY: 0
                            },
                            tickAmount: void 0,
                            tickPlacement: "on",
                            min: void 0,
                            max: void 0,
                            range: void 0,
                            floating: !1,
                            decimalsInFloat: void 0,
                            position: "bottom",
                            title: {
                                text: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                style: {
                                    color: void 0,
                                    fontSize: "12px",
                                    fontWeight: 900,
                                    fontFamily: void 0,
                                    cssClass: ""
                                }
                            },
                            crosshairs: {
                                show: !0,
                                width: 1,
                                position: "back",
                                opacity: .9,
                                stroke: {
                                    color: "#b6b6b6",
                                    width: 1,
                                    dashArray: 3
                                },
                                fill: {
                                    type: "solid",
                                    color: "#B1B9C4",
                                    gradient: {
                                        colorFrom: "#D8E3F0",
                                        colorTo: "#BED1E6",
                                        stops: [0, 100],
                                        opacityFrom: .4,
                                        opacityTo: .5
                                    }
                                },
                                dropShadow: {
                                    enabled: !1,
                                    left: 0,
                                    top: 0,
                                    blur: 1,
                                    opacity: .4
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                offsetY: 0,
                                formatter: void 0,
                                style: {
                                    fontSize: "12px",
                                    fontFamily: void 0
                                }
                            }
                        },
                        yaxis: this.yAxis,
                        theme: {
                            mode: "light",
                            palette: "palette1",
                            monochrome: {
                                enabled: !1,
                                color: "#008FFB",
                                shadeTo: "light",
                                shadeIntensity: .65
                            }
                        }
                    }
                }
            }]), t
        }(),
        v = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.graphics = new F(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new u(this), this.xAxisAnnotations = new p(this), this.yAxisAnnotations = new f(this), this.pointsAnnotations = new x(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints
            }
            return o(e, [{
                key: "drawAxesAnnotations",
                value: function () {
                    var t = this.w;
                    if (t.globals.axisCharts) {
                        for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), s = t.config.chart.animations.enabled, r = [e, i, a], o = [i.node, e.node, a.node], n = 0; n < 3; n++) t.globals.dom.elGraphical.add(r[n]), !s || t.globals.resized || t.globals.dataChanged || "scatter" !== t.config.chart.type && "bubble" !== t.config.chart.type && 1 < t.globals.dataPoints && o[n].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({
                            el: o[n],
                            index: 0
                        });
                        this.helpers.annotationsBackground()
                    }
                }
            }, {
                key: "drawImageAnnos",
                value: function () {
                    var i = this;
                    this.w.config.annotations.images.map(function (t, e) {
                        i.addImage(t, e)
                    })
                }
            }, {
                key: "drawTextAnnos",
                value: function () {
                    var i = this;
                    this.w.config.annotations.texts.map(function (t, e) {
                        i.addText(t, e)
                    })
                }
            }, {
                key: "addXaxisAnnotation",
                value: function (t, e, i) {
                    this.xAxisAnnotations.addXaxisAnnotation(t, e, i)
                }
            }, {
                key: "addYaxisAnnotation",
                value: function (t, e, i) {
                    this.yAxisAnnotations.addYaxisAnnotation(t, e, i)
                }
            }, {
                key: "addPointAnnotation",
                value: function (t, e, i) {
                    this.pointsAnnotations.addPointAnnotation(t, e, i)
                }
            }, {
                key: "addText",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        a = t.text,
                        s = t.textAnchor,
                        r = t.foreColor,
                        o = t.fontSize,
                        n = t.fontFamily,
                        l = t.fontWeight,
                        h = t.cssClass,
                        c = t.backgroundColor,
                        d = t.borderWidth,
                        g = t.strokeDashArray,
                        u = t.borderRadius,
                        p = t.borderColor,
                        f = t.appendTo,
                        x = void 0 === f ? ".apexcharts-annotations" : f,
                        b = t.paddingLeft,
                        m = void 0 === b ? 4 : b,
                        v = t.paddingRight,
                        y = void 0 === v ? 4 : v,
                        w = t.paddingBottom,
                        k = void 0 === w ? 2 : w,
                        A = t.paddingTop,
                        S = void 0 === A ? 2 : A,
                        C = this.w,
                        L = this.graphics.drawText({
                            x: e,
                            y: i,
                            text: a,
                            textAnchor: s || "start",
                            fontSize: o || "12px",
                            fontWeight: l || "regular",
                            fontFamily: n || C.config.chart.fontFamily,
                            foreColor: r || C.config.chart.foreColor,
                            cssClass: h
                        }),
                        P = C.globals.dom.baseEl.querySelector(x);
                    P && P.appendChild(L.node);
                    var T = L.bbox();
                    if (a) {
                        var M = this.graphics.drawRect(T.x - m, T.y - S, T.width + m + y, T.height + k + S, u, c || "transparent", 1, d, p, g);
                        P.insertBefore(M.node, L.node)
                    }
                }
            }, {
                key: "addImage",
                value: function (t) {
                    var e = this.w,
                        i = t.path,
                        a = t.x,
                        s = void 0 === a ? 0 : a,
                        r = t.y,
                        o = void 0 === r ? 0 : r,
                        n = t.width,
                        l = void 0 === n ? 20 : n,
                        h = t.height,
                        c = void 0 === h ? 20 : h,
                        d = t.appendTo,
                        g = void 0 === d ? ".apexcharts-annotations" : d,
                        u = e.globals.dom.Paper.image(i);
                    u.size(l, c).move(s, o);
                    var p = e.globals.dom.baseEl.querySelector(g);
                    p && p.appendChild(u.node)
                }
            }, {
                key: "addXaxisAnnotationExternal",
                value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "xaxis",
                        contextMethod: i.addXaxisAnnotation
                    }), i
                }
            }, {
                key: "addYaxisAnnotationExternal",
                value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "yaxis",
                        contextMethod: i.addYaxisAnnotation
                    }), i
                }
            }, {
                key: "addPointAnnotationExternal",
                value: function (t, e, i) {
                    return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "point",
                        contextMethod: i.addPointAnnotation
                    }), i
                }
            }, {
                key: "addAnnotationExternal",
                value: function (t) {
                    var e = t.params,
                        i = t.pushToMemory,
                        a = t.context,
                        s = t.type,
                        r = t.contextMethod,
                        o = a,
                        n = o.w,
                        l = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")),
                        h = l.childNodes.length + 1,
                        c = new m,
                        d = Object.assign({}, "xaxis" === s ? c.xAxisAnnotation : "yaxis" === s ? c.yAxisAnnotation : c.pointAnnotation),
                        g = E.extend(d, e);
                    switch (s) {
                        case "xaxis":
                            this.addXaxisAnnotation(g, l, h);
                            break;
                        case "yaxis":
                            this.addYaxisAnnotation(g, l, h);
                            break;
                        case "point":
                            this.addPointAnnotation(g, l, h)
                    }
                    var u = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(h, "']")),
                        p = this.helpers.addBackgroundToAnno(u, g);
                    return p && l.insertBefore(p.node, u), i && n.globals.memory.methodsToExec.push({
                        context: o,
                        id: g.id ? g.id : E.randomId(),
                        method: r,
                        label: "addAnnotation",
                        params: e
                    }), a
                }
            }, {
                key: "clearAnnotations",
                value: function (t) {
                    var i = t.w,
                        e = i.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
                    i.globals.memory.methodsToExec.map(function (t, e) {
                        "addText" !== t.label && "addAnnotation" !== t.label || i.globals.memory.methodsToExec.splice(e, 1)
                    }), e = E.listToArray(e), Array.prototype.forEach.call(e, function (t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    })
                }
            }, {
                key: "removeAnnotation",
                value: function (t, i) {
                    var a = t.w,
                        e = a.globals.dom.baseEl.querySelectorAll(".".concat(i));
                    e && (a.globals.memory.methodsToExec.map(function (t, e) {
                        t.id === i && a.globals.memory.methodsToExec.splice(e, 1)
                    }), Array.prototype.forEach.call(e, function (t) {
                        t.parentElement.removeChild(t)
                    }))
                }
            }]), e
        }(),
        T = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0
            }
            return o(e, [{
                key: "clippedImgArea",
                value: function (t) {
                    var e = this.w,
                        i = e.config,
                        a = parseInt(e.globals.gridWidth, 10),
                        s = parseInt(e.globals.gridHeight, 10),
                        r = s < a ? a : s,
                        o = t.image,
                        n = 0,
                        l = 0;
                    void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (n = i.fill.image.width + 1, l = i.fill.image.height) : (n = r + 1, l = r) : (n = t.width, l = t.height);
                    var h = document.createElementNS(e.globals.SVGNS, "pattern");
                    F.setAttrs(h, {
                        id: t.patternID,
                        patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse",
                        width: n + "px",
                        height: l + "px"
                    });
                    var c = document.createElementNS(e.globals.SVGNS, "image");
                    h.appendChild(c), c.setAttributeNS(window.SVG.xlink, "href", o), F.setAttrs(c, {
                        x: 0,
                        y: 0,
                        preserveAspectRatio: "none",
                        width: n + "px",
                        height: l + "px"
                    }), c.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(h)
                }
            }, {
                key: "getSeriesIndex",
                value: function (t) {
                    var e = this.w;
                    return ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart.type || "treemap" === e.config.chart.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex
                }
            }, {
                key: "fillPath",
                value: function (t) {
                    var e = this.w;
                    this.opts = t;
                    var i, a, s, r = this.w.config;
                    this.seriesIndex = this.getSeriesIndex(t);
                    var o = this.getFillColors()[this.seriesIndex];
                    void 0 !== e.globals.seriesColors[this.seriesIndex] && (o = e.globals.seriesColors[this.seriesIndex]), "function" == typeof o && (o = o({
                        seriesIndex: this.seriesIndex,
                        dataPointIndex: t.dataPointIndex,
                        value: t.value,
                        w: e
                    }));
                    var n = this.getFillType(this.seriesIndex),
                        l = Array.isArray(r.fill.opacity) ? r.fill.opacity[this.seriesIndex] : r.fill.opacity;
                    t.color && (o = t.color);
                    var h = o;
                    if (-1 === o.indexOf("rgb") ? o.length < 9 && (h = E.hexToRgba(o, l)) : -1 < o.indexOf("rgba") && (l = E.getOpacityFromRGBA(o)), t.opacity && (l = t.opacity), "pattern" === n && (a = this.handlePatternFill(a, o, l, h)), "gradient" === n && (s = this.handleGradientFill(o, l, this.seriesIndex)), "image" === n) {
                        var c = r.fill.image.src,
                            d = t.patternID ? t.patternID : "";
                        this.clippedImgArea({
                            opacity: l,
                            image: Array.isArray(c) ? t.seriesNumber < c.length ? c[t.seriesNumber] : c[0] : c,
                            width: t.width ? t.width : void 0,
                            height: t.height ? t.height : void 0,
                            patternUnits: t.patternUnits,
                            patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(d)
                        }), i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(d, ")")
                    } else i = "gradient" === n ? s : "pattern" === n ? a : h;
                    return t.solid && (i = h), i
                }
            }, {
                key: "getFillType",
                value: function (t) {
                    var e = this.w;
                    return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type
                }
            }, {
                key: "getFillColors",
                value: function () {
                    var t = this.w,
                        e = t.config,
                        i = this.opts,
                        a = [];
                    return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors) : "line" === e.chart.type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors), void 0 !== i.fillColors && (a = [], Array.isArray(i.fillColors) ? a = i.fillColors.slice() : a.push(i.fillColors)), a
                }
            }, {
                key: "handlePatternFill",
                value: function (t, e, i, a) {
                    var s = this.w.config,
                        r = this.opts,
                        o = new F(this.ctx),
                        n = void 0 === s.fill.pattern.strokeWidth ? Array.isArray(s.stroke.width) ? s.stroke.width[this.seriesIndex] : s.stroke.width : Array.isArray(s.fill.pattern.strokeWidth) ? s.fill.pattern.strokeWidth[this.seriesIndex] : s.fill.pattern.strokeWidth,
                        l = e;
                    return Array.isArray(s.fill.pattern.style) ? void 0 !== s.fill.pattern.style[r.seriesNumber] ? o.drawPattern(s.fill.pattern.style[r.seriesNumber], s.fill.pattern.width, s.fill.pattern.height, l, n, i) : a : o.drawPattern(s.fill.pattern.style, s.fill.pattern.width, s.fill.pattern.height, l, n, i)
                }
            }, {
                key: "handleGradientFill",
                value: function (t, e, i) {
                    var a, s = this.w.config,
                        r = this.opts,
                        o = new F(this.ctx),
                        n = new E,
                        l = s.fill.gradient.type,
                        h = t,
                        c = void 0 === s.fill.gradient.opacityFrom ? e : Array.isArray(s.fill.gradient.opacityFrom) ? s.fill.gradient.opacityFrom[i] : s.fill.gradient.opacityFrom; - 1 < h.indexOf("rgba") && (c = E.getOpacityFromRGBA(h));
                    var d = void 0 === s.fill.gradient.opacityTo ? e : Array.isArray(s.fill.gradient.opacityTo) ? s.fill.gradient.opacityTo[i] : s.fill.gradient.opacityTo;
                    if (void 0 === s.fill.gradient.gradientToColors || 0 === s.fill.gradient.gradientToColors.length) a = "dark" === s.fill.gradient.shade ? n.shadeColor(-1 * parseFloat(s.fill.gradient.shadeIntensity), -1 < t.indexOf("rgb") ? E.rgb2hex(t) : t) : n.shadeColor(parseFloat(s.fill.gradient.shadeIntensity), -1 < t.indexOf("rgb") ? E.rgb2hex(t) : t);
                    else if (s.fill.gradient.gradientToColors[r.seriesNumber]) {
                        var g = s.fill.gradient.gradientToColors[r.seriesNumber]; - 1 < (a = g).indexOf("rgba") && (d = E.getOpacityFromRGBA(g))
                    } else a = t;
                    if (s.fill.gradient.inverseColors) {
                        var u = h;
                        h = a, a = u
                    }
                    return -1 < h.indexOf("rgb") && (h = E.rgb2hex(h)), -1 < a.indexOf("rgb") && (a = E.rgb2hex(a)), o.drawGradient(l, h, a, c, d, r.size, s.fill.gradient.stops, s.fill.gradient.colorStops, i)
                }
            }]), e
        }(),
        C = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "setGlobalMarkerSize",
                value: function () {
                    var t = this.w;
                    if (t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size], 0 < t.globals.markers.size.length) {
                        if (t.globals.markers.size.length < t.globals.series.length + 1)
                            for (var e = 0; e <= t.globals.series.length; e++) void 0 === t.globals.markers.size[e] && t.globals.markers.size.push(t.globals.markers.size[0])
                    } else t.globals.markers.size = t.config.series.map(function () {
                        return t.config.markers.size
                    })
                }
            }, {
                key: "plotChartMarkers",
                value: function (t, e, i, a, s) {
                    var r, o = 4 < arguments.length && void 0 !== s && arguments[4],
                        n = this.w,
                        l = e,
                        h = t,
                        c = null,
                        d = new F(this.ctx);
                    if ((0 < n.globals.markers.size[e] || o) && (c = d.group({
                        "class": o ? "" : "apexcharts-series-markers"
                    })).attr("clip-path", "url(#gridRectMarkerMask".concat(n.globals.cuid, ")")), Array.isArray(h.x))
                        for (var g = 0; g < h.x.length; g++) {
                            var u = i;
                            1 === i && 0 === g && (u = 0), 1 === i && 1 === g && (u = 1);
                            var p = "apexcharts-marker";
                            if ("line" !== n.config.chart.type && "area" !== n.config.chart.type || n.globals.comboCharts || n.config.tooltip.intersect || (p += " no-pointer-events"), (Array.isArray(n.config.markers.size) ? 0 < n.globals.markers.size[e] : 0 < n.config.markers.size) || o) {
                                E.isNumber(h.y[g]) ? p += " w".concat(E.randomId()) : p = "apexcharts-nullpoint";
                                var f = this.getMarkerConfig(p, e, u);
                                n.config.series[l].data[u] && (n.config.series[l].data[u].fillColor && (f.pointFillColor = n.config.series[l].data[u].fillColor), n.config.series[l].data[u].strokeColor && (f.pointStrokeColor = n.config.series[l].data[u].strokeColor)), a && (f.pSize = a), (r = d.drawMarker(h.x[g], h.y[g], f)).attr("rel", u), r.attr("j", u), r.attr("index", e), r.node.setAttribute("default-marker-size", f.pSize), new Y(this.ctx).setSelectionFilter(r, e, u), this.addEvents(r), c && c.add(r)
                            } else void 0 === n.globals.pointsArray[e] && (
                                n.globals.pointsArray[e] = []), n.globals.pointsArray[e].push([h.x[g], h.y[g]])
                        }
                    return c
                }
            }, {
                key: "getMarkerConfig",
                value: function (t, e, i) {
                    var a = 2 < arguments.length && void 0 !== i ? arguments[2] : null,
                        s = this.w,
                        r = this.getMarkerStyle(e),
                        o = s.globals.markers.size[e],
                        n = s.config.markers;
                    return null !== a && n.discrete.length && n.discrete.map(function (t) {
                        t.seriesIndex === e && t.dataPointIndex === a && (r.pointStrokeColor = t.strokeColor, r.pointFillColor = t.fillColor, o = t.size, r.pointShape = t.shape)
                    }), {
                        pSize: o,
                        pRadius: n.radius,
                        width: Array.isArray(n.width) ? n.width[e] : n.width,
                        height: Array.isArray(n.height) ? n.height[e] : n.height,
                        pointStrokeWidth: Array.isArray(n.strokeWidth) ? n.strokeWidth[e] : n.strokeWidth,
                        pointStrokeColor: r.pointStrokeColor,
                        pointFillColor: r.pointFillColor,
                        shape: r.pointShape || (Array.isArray(n.shape) ? n.shape[e] : n.shape),
                        "class": t,
                        pointStrokeOpacity: Array.isArray(n.strokeOpacity) ? n.strokeOpacity[e] : n.strokeOpacity,
                        pointStrokeDashArray: Array.isArray(n.strokeDashArray) ? n.strokeDashArray[e] : n.strokeDashArray,
                        pointFillOpacity: Array.isArray(n.fillOpacity) ? n.fillOpacity[e] : n.fillOpacity,
                        seriesIndex: e
                    }
                }
            }, {
                key: "addEvents",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), {
                        passive: !0
                    })
                }
            }, {
                key: "getMarkerStyle",
                value: function (t) {
                    var e = this.w,
                        i = e.globals.markers.colors,
                        a = e.config.markers.strokeColor || e.config.markers.strokeColors;
                    return {
                        pointStrokeColor: Array.isArray(a) ? a[t] : a,
                        pointFillColor: Array.isArray(i) ? i[t] : i
                    }
                }
            }]), e
        }(),
        w = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled
            }
            return o(e, [{
                key: "draw",
                value: function (t, e, i) {
                    var a = this.w,
                        s = new F(this.ctx),
                        r = i.realIndex,
                        o = i.pointsPos,
                        n = i.zRatio,
                        l = i.elParent,
                        h = s.group({
                            "class": "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)
                        });
                    if (h.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(o.x))
                        for (var c = 0; c < o.x.length; c++) {
                            var d = e + 1,
                                g = !0;
                            0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1);
                            var u = 0,
                                p = a.globals.markers.size[r];
                            if (n !== 1 / 0) {
                                p = a.globals.seriesZ[r][d] / n;
                                var f = a.config.plotOptions.bubble;
                                f.minBubbleRadius && p < f.minBubbleRadius && (p = f.minBubbleRadius), f.maxBubbleRadius && p > f.maxBubbleRadius && (p = f.maxBubbleRadius)
                            }
                            a.config.chart.animations.enabled || (u = p);
                            var x = o.x[c],
                                b = o.y[c];
                            if (u = u || 0, null !== b && void 0 !== a.globals.series[r][d] || (g = !1), g) {
                                var m = this.drawPoint(x, b, u, p, r, d, e);
                                h.add(m)
                            }
                            l.add(h)
                        }
                }
            }, {
                key: "drawPoint",
                value: function (t, e, i, a, s, r, o) {
                    var n, l = this.w,
                        h = s,
                        c = new z(this.ctx),
                        d = new Y(this.ctx),
                        g = new T(this.ctx),
                        u = new C(this.ctx),
                        p = new F(this.ctx),
                        f = u.getMarkerConfig("apexcharts-marker", h),
                        x = g.fillPath({
                            seriesNumber: s,
                            dataPointIndex: r,
                            patternUnits: "objectBoundingBox",
                            value: l.globals.series[s][o]
                        });
                    if ("circle" === f.shape ? n = p.drawCircle(i) : "square" !== f.shape && "rect" !== f.shape || (n = p.drawRect(0, 0, f.width - f.pointStrokeWidth / 2, f.height - f.pointStrokeWidth / 2, f.pRadius)), l.config.series[h].data[r] && l.config.series[h].data[r].fillColor && (x = l.config.series[h].data[r].fillColor), n.attr({
                        x: t - f.width / 2 - f.pointStrokeWidth / 2,
                        y: e - f.height / 2 - f.pointStrokeWidth / 2,
                        cx: t,
                        cy: e,
                        fill: x,
                        "fill-opacity": f.pointFillOpacity,
                        stroke: f.pointStrokeColor,
                        r: a,
                        "stroke-width": f.pointStrokeWidth,
                        "stroke-dasharray": f.pointStrokeDashArray,
                        "stroke-opacity": f.pointStrokeOpacity
                    }), l.config.chart.dropShadow.enabled) {
                        var b = l.config.chart.dropShadow;
                        d.dropShadow(n, b, s)
                    }
                    if (!this.initialAnim || l.globals.dataChanged || l.globals.resized) l.globals.animationEnded = !0;
                    else {
                        var m = l.config.chart.animations.speed;
                        c.animateMarker(n, 0, "circle" === f.shape ? a : {
                            width: f.width,
                            height: f.height
                        }, m, l.globals.easing, function () {
                            window.setTimeout(function () {
                                c.animationCompleted(n)
                            }, 100)
                        })
                    }
                    if (l.globals.dataChanged && "circle" === f.shape)
                        if (this.dynamicAnim) {
                            var v, y, w, k, A = l.config.chart.animations.dynamicAnimation.speed;
                            null != (k = l.globals.previousPaths[s] && l.globals.previousPaths[s][o]) && (v = k.x, y = k.y, w = void 0 !== k.r ? k.r : a);
                            for (var S = 0; S < l.globals.collapsedSeries.length; S++) l.globals.collapsedSeries[S].index === s && (A = 1, a = 0);
                            0 === t && 0 === e && (a = 0), c.animateCircle(n, {
                                cx: v,
                                cy: y,
                                r: w
                            }, {
                                cx: t,
                                cy: e,
                                r: a
                            }, A, l.globals.easing)
                        } else n.attr({
                            r: a
                        });
                    return n.attr({
                        rel: r,
                        j: r,
                        index: s,
                        "default-marker-size": a
                    }), d.setSelectionFilter(n, s, r), u.addEvents(n), n.node.classList.add("apexcharts-marker"), n
                }
            }, {
                key: "centerTextInBubble",
                value: function (t) {
                    var e = this.w;
                    return {
                        y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4
                    }
                }
            }]), e
        }(),
        k = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "dataLabelsCorrection",
                value: function (t, e, i, a, s, r, o) {
                    var n = this.w,
                        l = !1,
                        h = new F(this.ctx).getTextRects(i, o),
                        c = h.width,
                        d = h.height;
                    e < 0 && (e = 0), e > n.globals.gridHeight + d && (e = n.globals.gridHeight + d / 2), void 0 === n.globals.dataLabelsRects[a] && (n.globals.dataLabelsRects[a] = []), n.globals.dataLabelsRects[a].push({
                        x: t,
                        y: e,
                        width: c,
                        height: d
                    });
                    var g = n.globals.dataLabelsRects[a].length - 2,
                        u = void 0 !== n.globals.lastDrawnDataLabelsIndexes[a] ? n.globals.lastDrawnDataLabelsIndexes[a][n.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
                    if (void 0 !== n.globals.dataLabelsRects[a][g]) {
                        var p = n.globals.dataLabelsRects[a][u];
                        (t > p.x + p.width + 2 || e > p.y + p.height + 2 || t + c < p.x) && (l = !0)
                    }
                    return (0 === s || r) && (l = !0), {
                        x: t,
                        y: e,
                        textRects: h,
                        drawnextLabel: l
                    }
                }
            }, {
                key: "drawDataLabel",
                value: function (t, e, i, a, s) {
                    var r = this,
                        o = 4 < arguments.length && void 0 !== s ? arguments[4] : 2,
                        n = this.w,
                        l = new F(this.ctx),
                        h = n.config.dataLabels,
                        c = 0,
                        d = 0,
                        g = i,
                        u = null;
                    if (!h.enabled || !Array.isArray(t.x)) return u;
                    u = l.group({
                        "class": "apexcharts-data-labels"
                    });
                    for (var p = 0; p < t.x.length; p++)
                        if (c = t.x[p] + h.offsetX, d = t.y[p] + h.offsetY + o, !isNaN(c)) {
                            1 === i && 0 === p && (g = 0), 1 === i && 1 === p && (g = 1);
                            var f = n.globals.series[e][g],
                                x = "",
                                b = function (t) {
                                    return n.config.dataLabels.formatter(t, {
                                        ctx: r.ctx,
                                        seriesIndex: e,
                                        dataPointIndex: g,
                                        w: n
                                    })
                                };
                            if ("bubble" === n.config.chart.type) x = b(f = n.globals.seriesZ[e][g]), d = t.y[p], d = new w(this.ctx).centerTextInBubble(d, e, g).y;
                            else void 0 !== f && (x = b(f));
                            this.plotDataLabelsText({
                                x: c,
                                y: d,
                                text: x,
                                i: e,
                                j: g,
                                parent: u,
                                offsetCorrection: !0,
                                dataLabelsConfig: n.config.dataLabels
                            })
                        }
                    return u
                }
            }, {
                key: "plotDataLabelsText",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx),
                        a = t.x,
                        s = t.y,
                        r = t.i,
                        o = t.j,
                        n = t.text,
                        l = t.textAnchor,
                        h = t.fontSize,
                        c = t.parent,
                        d = t.dataLabelsConfig,
                        g = t.color,
                        u = t.alwaysDrawDataLabel,
                        p = t.offsetCorrection;
                    if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(r) < 0)) {
                        var f = {
                            x: a,
                            y: s,
                            drawnextLabel: !0
                        };
                        p && (f = this.dataLabelsCorrection(a, s, n, r, o, u, parseInt(d.style.fontSize, 10))), e.globals.zoomed || (a = f.x, s = f.y), f.textRects && (a < -10 - f.textRects.width || a > e.globals.gridWidth + f.textRects.width + 10) && (n = "");
                        var x = e.globals.dataLabels.style.colors[r];
                        (("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || e.config.dataLabels.distributed) && (x = e.globals.dataLabels.style.colors[o]), "function" == typeof x && (x = x({
                            series: e.globals.series,
                            seriesIndex: r,
                            dataPointIndex: o,
                            w: e
                        })), g && (x = g);
                        var b = d.offsetX,
                            m = d.offsetY;
                        if ("bar" !== e.config.chart.type && "rangeBar" !== e.config.chart.type || (m = b = 0), f.drawnextLabel) {
                            var v = i.drawText({
                                width: 100,
                                height: parseInt(d.style.fontSize, 10),
                                x: a + b,
                                y: s + m,
                                foreColor: x,
                                textAnchor: l || d.textAnchor,
                                text: n,
                                fontSize: h || d.style.fontSize,
                                fontFamily: d.style.fontFamily,
                                fontWeight: d.style.fontWeight || "normal"
                            });
                            if (v.attr({
                                "class": "apexcharts-datalabel",
                                cx: a,
                                cy: s
                            }), d.dropShadow.enabled) {
                                var y = d.dropShadow;
                                new Y(this.ctx).dropShadow(v, y)
                            }
                            c.add(v), void 0 === e.globals.lastDrawnDataLabelsIndexes[r] && (e.globals.lastDrawnDataLabelsIndexes[r] = []), e.globals.lastDrawnDataLabelsIndexes[r].push(o)
                        }
                    }
                }
            }, {
                key: "addBackgroundToDataLabel",
                value: function (t, e) {
                    var i = this.w,
                        a = i.config.dataLabels.background,
                        s = a.padding,
                        r = a.padding / 2,
                        o = e.width,
                        n = e.height,
                        l = new F(this.ctx).drawRect(e.x - s, e.y - r / 2, o + 2 * s, n + r, a.borderRadius, "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, a.opacity, a.borderWidth, a.borderColor);
                    return a.dropShadow.enabled && new Y(this.ctx).dropShadow(l, a.dropShadow), l
                }
            }, {
                key: "dataLabelsBackground",
                value: function () {
                    var t = this.w;
                    if ("bubble" !== t.config.chart.type)
                        for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) {
                            var a = e[i],
                                s = a.getBBox(),
                                r = null;
                            if (s.width && s.height && (r = this.addBackgroundToDataLabel(a, s)), r) {
                                a.parentNode.insertBefore(r.node, a);
                                var o = a.getAttribute("fill");
                                !t.config.chart.animations.enabled || t.globals.resized || t.globals.dataChanged ? r.attr({
                                    fill: o
                                }) : r.animate().attr({
                                    fill: o
                                }), a.setAttribute("fill", t.config.dataLabels.background.foreColor)
                            }
                        }
                }
            }, {
                key: "bringForward",
                value: function () {
                    for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a = 0; a < e.length; a++) i && i.insertBefore(e[a], i.nextSibling)
                }
            }]), e
        }(),
        I = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.barCtx = t
            }
            return o(e, [{
                key: "handleBarDataLabels",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        a = t.y1,
                        s = t.y2,
                        r = t.i,
                        o = t.j,
                        n = t.realIndex,
                        l = t.series,
                        h = t.barHeight,
                        c = t.barWidth,
                        d = t.barYPosition,
                        g = t.visibleSeries,
                        u = t.renderedPath,
                        p = this.w,
                        f = new F(this.barCtx.ctx),
                        x = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[n] : this.barCtx.strokeWidth,
                        b = e + parseFloat(c * g),
                        m = i + parseFloat(h * g);
                    p.globals.isXNumeric && !p.globals.isBarHorizontal && (b = e + parseFloat(c * (g + 1)), m = i + parseFloat(h * (g + 1)) - x);
                    var v = e,
                        y = i,
                        w = {},
                        k = p.config.dataLabels,
                        A = this.barCtx.barOptions.dataLabels;
                    void 0 !== d && this.barCtx.isTimelineBar && (y = m = d);
                    var S = k.offsetX,
                        C = k.offsetY,
                        L = {
                            width: 0,
                            height: 0
                        };
                    if (p.config.dataLabels.enabled) {
                        var P = this.barCtx.series[r][o];
                        L = f.getTextRects(p.globals.yLabelFormatters[0](P), parseFloat(k.style.fontSize))
                    }
                    var T = {
                        x: e,
                        y: i,
                        i: r,
                        j: o,
                        renderedPath: u,
                        bcx: b,
                        bcy: m,
                        barHeight: h,
                        barWidth: c,
                        textRects: L,
                        strokeWidth: x,
                        dataLabelsX: v,
                        dataLabelsY: y,
                        barDataLabelsConfig: A,
                        offX: S,
                        offY: C
                    };
                    return w = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(T) : this.calculateColumnsDataLabelsPosition(T), u.attr({
                        cy: w.bcy,
                        cx: w.bcx,
                        j: o,
                        val: l[r][o],
                        barHeight: h,
                        barWidth: c
                    }), this.drawCalculatedDataLabels({
                        x: w.dataLabelsX,
                        y: w.dataLabelsY,
                        val: this.barCtx.isTimelineBar ? [a, s] : l[r][o],
                        i: n,
                        j: o,
                        barWidth: c,
                        barHeight: h,
                        textRects: L,
                        dataLabelsConfig: k
                    })
                }
            }, {
                key: "calculateColumnsDataLabelsPosition",
                value: function (t) {
                    var e, i = this.w,
                        a = t.i,
                        s = t.j,
                        r = t.y,
                        o = t.bcx,
                        n = t.barWidth,
                        l = t.barHeight,
                        h = t.textRects,
                        c = t.dataLabelsY,
                        d = t.barDataLabelsConfig,
                        g = t.strokeWidth,
                        u = t.offX,
                        p = t.offY;
                    l = Math.abs(l);
                    var f = "vertical" === i.config.plotOptions.bar.dataLabels.orientation;
                    o -= g / 2;
                    var x = i.globals.gridWidth / i.globals.dataPoints;
                    e = i.globals.isXNumeric ? o - n / 2 + u : o - x + n / 2 + u, f && (e = e + h.height / 2 - g / 2 - 2);
                    var b = this.barCtx.series[a][s] < 0,
                        m = r;
                    switch (this.barCtx.isReversed && (m = r - l + (b ? 2 * l : 0), r -= l), d.position) {
                        case "center":
                            c = f ? b ? m + l / 2 + p : m + l / 2 - p : b ? m - l / 2 + h.height / 2 + p : m + l / 2 + h.height / 2 - p;
                            break;
                        case "bottom":
                            c = f ? b ? m + l + p : m + l - p : b ? m - l + h.height + g + p : m + l - h.height / 2 + g - p;
                            break;
                        case "top":
                            c = f ? b ? m + p : m - p : b ? m - h.height / 2 - p : m + h.height + p
                    }
                    return i.config.chart.stacked || (c < 0 ? c = 0 + g : c + h.height / 3 > i.globals.gridHeight && (c = i.globals.gridHeight - g)), {
                        bcx: o,
                        bcy: r,
                        dataLabelsX: e,
                        dataLabelsY: c
                    }
                }
            }, {
                key: "calculateBarsDataLabelsPosition",
                value: function (t) {
                    var e = this.w,
                        i = t.x,
                        a = t.i,
                        s = t.j,
                        r = t.bcy,
                        o = t.barHeight,
                        n = t.barWidth,
                        l = t.textRects,
                        h = t.dataLabelsX,
                        c = t.strokeWidth,
                        d = t.barDataLabelsConfig,
                        g = t.offX,
                        u = t.offY,
                        p = e.globals.gridHeight / e.globals.dataPoints;
                    n = Math.abs(n);
                    var f = r - (this.barCtx.isTimelineBar ? 0 : p) + o / 2 + l.height / 2 + u - 3,
                        x = this.barCtx.series[a][s] < 0,
                        b = i;
                    switch (this.barCtx.isReversed && (b = i + n - (x ? 2 * n : 0), i = e.globals.gridWidth - n), d.position) {
                        case "center":
                            h = x ? b + n / 2 - g : Math.max(l.width / 2, b - n / 2) + g;
                            break;
                        case "bottom":
                            h = x ? b + n - c - Math.round(l.width / 2) - g : b - n + c + Math.round(l.width / 2) + g;
                            break;
                        case "top":
                            h = x ? b - c + Math.round(l.width / 2) - g : b - c - Math.round(l.width / 2) + g
                    }
                    return e.config.chart.stacked || (h < 0 ? h = h + l.width + c : h + l.width / 2 > e.globals.gridWidth && (h = e.globals.gridWidth - l.width - c)), {
                        bcx: i,
                        bcy: r,
                        dataLabelsX: h,
                        dataLabelsY: f
                    }
                }
            }, {
                key: "drawCalculatedDataLabels",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        a = t.val,
                        s = t.i,
                        r = t.j,
                        o = t.textRects,
                        n = t.barHeight,
                        l = t.barWidth,
                        h = t.dataLabelsConfig,
                        c = this.w,
                        d = "rotate(0)";
                    "vertical" === c.config.plotOptions.bar.dataLabels.orientation && (d = "rotate(-90, ".concat(e, ", ").concat(i, ")"));
                    var g = new k(this.barCtx.ctx),
                        u = new F(this.barCtx.ctx),
                        p = h.formatter,
                        f = null,
                        x = -1 < c.globals.collapsedSeriesIndices.indexOf(s);
                    if (h.enabled && !x) {
                        f = u.group({
                            "class": "apexcharts-data-labels",
                            transform: d
                        });
                        var b = "";
                        void 0 !== a && (b = p(a, {
                            seriesIndex: s,
                            dataPointIndex: r,
                            w: c
                        }));
                        var m = c.globals.series[s][r] < 0,
                            v = c.config.plotOptions.bar.dataLabels.position;
                        "vertical" === c.config.plotOptions.bar.dataLabels.orientation && ("top" === v && (h.textAnchor = m ? "end" : "start"), "center" === v && (h.textAnchor = "middle"), "bottom" === v && (h.textAnchor = m ? "end" : "start")), this.barCtx.isTimelineBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && l < u.getTextRects(b, parseFloat(h.style.fontSize)).width && (b = ""), c.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? (0 < l && o.width / 1.6 > l || l < 0 && o.width / 1.6 < l) && (b = "") : o.height / 1.6 > n && (b = ""));
                        var y = X({}, h);
                        this.barCtx.isHorizontal && a < 0 && ("start" === h.textAnchor ? y.textAnchor = "end" : "end" === h.textAnchor && (y.textAnchor = "start")), g.plotDataLabelsText({
                            x: e,
                            y: i,
                            text: b,
                            i: s,
                            j: r,
                            parent: f,
                            dataLabelsConfig: y,
                            alwaysDrawDataLabel: !0,
                            offsetCorrection: !0
                        })
                    }
                    return f
                }
            }]), e
        }(),
        S = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.legendInactiveClass = "legend-mouseover-inactive"
            }
            return o(e, [{
                key: "getAllSeriesEls",
                value: function () {
                    return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")
                }
            }, {
                key: "getSeriesByName",
                value: function (t) {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(E.escapeString(t), "']"))
                }
            }, {
                key: "isSeriesHidden",
                value: function (t) {
                    var e = this.getSeriesByName(t),
                        i = parseInt(e.getAttribute("data:realIndex"), 10);
                    return {
                        isHidden: e.classList.contains("apexcharts-series-collapsed"),
                        realIndex: i
                    }
                }
            }, {
                key: "addCollapsedClassToSeries",
                value: function (i, a) {
                    function t(t) {
                        for (var e = 0; e < t.length; e++) t[e].index === a && i.node.classList.add("apexcharts-series-collapsed")
                    }
                    var e = this.w;
                    t(e.globals.collapsedSeries), t(e.globals.ancillaryCollapsedSeries)
                }
            }, {
                key: "toggleSeries",
                value: function (t) {
                    var e = this.isSeriesHidden(t);
                    return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, e.isHidden), e.isHidden
                }
            }, {
                key: "showSeries",
                value: function (t) {
                    var e = this.isSeriesHidden(t);
                    e.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !0)
                }
            }, {
                key: "hideSeries",
                value: function (t) {
                    var e = this.isSeriesHidden(t);
                    e.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !1)
                }
            }, {
                key: "resetSeries",
                value: function (t, e, i) {
                    var a = !(0 < arguments.length && void 0 !== t) || arguments[0],
                        s = !(1 < arguments.length && void 0 !== e) || arguments[1],
                        r = !(2 < arguments.length && void 0 !== i) || arguments[2],
                        o = this.w,
                        n = E.clone(o.globals.initialSeries);
                    o.globals.previousPaths = [], r ? (o.globals.collapsedSeries = [], o.globals.ancillaryCollapsedSeries = [], o.globals.collapsedSeriesIndices = [], o.globals.ancillaryCollapsedSeriesIndices = []) : n = this.emptyCollapsedSeries(n), o.config.series = n, a && (s && (o.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(n, o.config.chart.animations.dynamicAnimation.enabled))
                }
            }, {
                key: "emptyCollapsedSeries",
                value: function (t) {
                    for (var e = this.w, i = 0; i < t.length; i++) - 1 < e.globals.collapsedSeriesIndices.indexOf(i) && (t[i].data = []);
                    return t
                }
            }, {
                key: "toggleSeriesOnHover",
                value: function (t, e) {
                    var i = this.w,
                        a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");
                    if ("mousemove" === t.type) {
                        var s = parseInt(e.getAttribute("rel"), 10) - 1,
                            r = null,
                            o = null;
                        i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? (r = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s, "']")), o = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s, "']"))) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "']")) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "'] path"));
                        for (var n = 0; n < a.length; n++) a[n].classList.add(this.legendInactiveClass);
                        null !== r && (i.globals.axisCharts || r.parentNode.classList.remove(this.legendInactiveClass), r.classList.remove(this.legendInactiveClass), null !== o && o.classList.remove(this.legendInactiveClass))
                    } else if ("mouseout" === t.type)
                        for (var l = 0; l < a.length; l++) a[l].classList.remove(this.legendInactiveClass)
                }
            }, {
                key: "highlightRangeInSeries",
                value: function (t, e) {
                    var a = this,
                        i = this.w,
                        s = i.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),
                        r = function (t) {
                            for (var e = 0; e < s.length; e++) s[e].classList[t](a.legendInactiveClass)
                        };
                    if ("mousemove" === t.type) {
                        var o = parseInt(e.getAttribute("rel"), 10) - 1;
                        r("add"),
                            function (t) {
                                for (var e = 0; e < s.length; e++) {
                                    var i = parseInt(s[e].getAttribute("val"), 10);
                                    i >= t.from && i <= t.to && s[e].classList.remove(a.legendInactiveClass)
                                }
                            }(i.config.plotOptions.heatmap.colorScale.ranges[o])
                    } else "mouseout" === t.type && r("remove")
                }
            }, {
                key: "getActiveConfigSeriesIndex",
                value: function (t, e) {
                    var a = 0 < arguments.length && void 0 !== t && arguments[0],
                        i = 1 < arguments.length && void 0 !== e ? arguments[1] : "asc",
                        s = this.w,
                        r = 0;
                    if (1 < s.config.series.length)
                        for (var o = s.config.series.map(function (t, e) {
                            var i = !1;
                            return a && (i = "bar" === s.config.series[e].type || "column" === s.config.series[e].type), t.data && 0 < t.data.length && !i ? e : -1
                        }), n = "asc" === i ? 0 : o.length - 1;
                            "asc" === i ? n < o.length : 0 <= n;
                            "asc" === i ? n++ : n--)
                            if (-1 !== o[n]) {
                                r = o[n];
                                break
                            }
                    return r
                }
            }, {
                key: "getPreviousPaths",
                value: function () {
                    function s(t, e, i) {
                        for (var a = t[e].childNodes, s = {
                            type: i,
                            paths: [],
                            realIndex: t[e].getAttribute("data:realIndex")
                        }, r = 0; r < a.length; r++)
                            if (a[r].hasAttribute("pathTo")) {
                                var o = a[r].getAttribute("pathTo");
                                s.paths.push({
                                    d: o
                                })
                            }
                        n.globals.previousPaths.push(s)
                    }
                    var n = this.w;
                    n.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "candlestick", "radar"].forEach(function (t) {
                        for (var e, i = (e = t, n.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e, "-series .apexcharts-series"))), a = 0; a < i.length; a++) s(i, a, t)
                    }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
                    var t = n.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(n.config.chart.type, " .apexcharts-series"));
                    if (0 < t.length)
                        for (var e = function (t) {
                            for (var a = n.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(n.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(t, "'] rect")), s = [], e = function (e) {
                                var t = function (t) {
                                    return a[e].getAttribute(t)
                                },
                                    i = {
                                        x: parseFloat(t("x")),
                                        y: parseFloat(t("y")),
                                        width: parseFloat(t("width")),
                                        height: parseFloat(t("height"))
                                    };
                                s.push({
                                    rect: i,
                                    color: a[e].getAttribute("color")
                                })
                            }, i = 0; i < a.length; i++) e(i);
                            n.globals.previousPaths.push(s)
                        }, i = 0; i < t.length; i++) e(i);
                    n.globals.axisCharts || (n.globals.previousPaths = n.globals.series)
                }
            }, {
                key: "handlePrevBubbleScatterPaths",
                value: function (t) {
                    var e = this.w,
                        i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series"));
                    if (0 < i.length)
                        for (var a = 0; a < i.length; a++) {
                            for (var s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(a, "'] circle")), r = [], o = 0; o < s.length; o++) r.push({
                                x: s[o].getAttribute("cx"),
                                y: s[o].getAttribute("cy"),
                                r: s[o].getAttribute("r")
                            });
                            e.globals.previousPaths.push(r)
                        }
                }
            }, {
                key: "clearPreviousPaths",
                value: function () {
                    var t = this.w;
                    t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1
                }
            }, {
                key: "handleNoData",
                value: function () {
                    var t = this.w,
                        e = t.config.noData,
                        i = new F(this.ctx),
                        a = t.globals.svgWidth / 2,
                        s = t.globals.svgHeight / 2,
                        r = "middle";
                    if (t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (a = 10, r = "start") : "right" === e.align && (a = t.globals.svgWidth - 10, r = "end"), "top" === e.verticalAlign ? s = 50 : "bottom" === e.verticalAlign && (s = t.globals.svgHeight - 50), a += e.offsetX, s = s + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, void 0 !== e.text && "" !== e.text) {
                        var o = i.drawText({
                            x: a,
                            y: s,
                            text: e.text,
                            textAnchor: r,
                            fontSize: e.style.fontSize,
                            fontFamily: e.style.fontFamily,
                            foreColor: e.style.color,
                            opacity: 1,
                            "class": "apexcharts-text-nodata"
                        });
                        t.globals.dom.Paper.add(o)
                    }
                }
            }, {
                key: "setNullSeriesToZeroValues",
                value: function (t) {
                    for (var e = this.w, i = 0; i < t.length; i++)
                        if (0 === t[i].length)
                            for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++) t[i].push(0);
                    return t
                }
            }, {
                key: "hasAllSeriesEqualX",
                value: function () {
                    for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++)
                        if (i[a][0] !== i[a + 1][0]) {
                            t = !1;
                            break
                        }
                    return e.globals.allSeriesHasEqualX = t
                }
            }, {
                key: "filteredSeriesX",
                value: function () {
                    return this.w.globals.seriesX.map(function (t) {
                        return 0 < t.length ? t : []
                    })
                }
            }]), e
        }(),
        L = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.barCtx = t
            }
            return o(e, [{
                key: "initVariables",
                value: function (t) {
                    var e = this.w;
                    this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
                    for (var i = 0; i < t.length; i++)
                        if (0 < t[i].length && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric)
                            for (var a = 0; a < t[i].length; a++) e.globals.seriesX[i][a] > e.globals.minX && e.globals.seriesX[i][a] < e.globals.maxX && this.barCtx.visibleItems++;
                        else this.barCtx.visibleItems = e.globals.dataPoints;
                    0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], this.barCtx.radiusOnSeriesNumber = t.length - 1, e.globals.comboCharts || this.checkZeroSeries({
                        series: t
                    })
                }
            }, {
                key: "initialPositions",
                value: function () {
                    var t, e, i, a, s, r, o, n, l = this.w,
                        h = l.globals.dataPoints;
                    this.barCtx.isTimelineBar && (h = l.globals.labels.length);
                    var c = this.barCtx.seriesLen;
                    if (l.config.plotOptions.bar.rangeBarGroupRows && (c = 1), this.barCtx.isHorizontal) s = (i = l.globals.gridHeight / h) / c, l.globals.isXNumeric && (s = (i = l.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s = s * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, n = this.barCtx.baseLineInvertedY + l.globals.padHorizontal + (this.barCtx.isReversed ? l.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), e = (i - s * this.barCtx.seriesLen) / 2;
                    else {
                        if (a = l.globals.gridWidth / this.barCtx.visibleItems, l.config.xaxis.convertedCatToNumeric && (a = l.globals.gridWidth / l.globals.dataPoints), r = a / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l.globals.isXNumeric) {
                            var d = this.barCtx.xRatio;
                            l.config.xaxis.convertedCatToNumeric && (d = this.barCtx.initialXRatio), l.globals.minXDiff && .5 !== l.globals.minXDiff && 0 < l.globals.minXDiff / d && (a = l.globals.minXDiff / d), (r = a / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r = 1)
                        }
                        o = l.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? l.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = l.globals.padHorizontal + (a - r * this.barCtx.seriesLen) / 2
                    }
                    return {
                        x: t,
                        y: e,
                        yDivision: i,
                        xDivision: a,
                        barHeight: s,
                        barWidth: r,
                        zeroH: o,
                        zeroW: n
                    }
                }
            }, {
                key: "getPathFillColor",
                value: function (e, i, a, t) {
                    var s = this.w,
                        r = new T(this.barCtx.ctx),
                        o = null,
                        n = this.barCtx.barOptions.distributed ? a : i;
                    return 0 < this.barCtx.barOptions.colors.ranges.length && this.barCtx.barOptions.colors.ranges.map(function (t) {
                        e[i][a] >= t.from && e[i][a] <= t.to && (o = t.color)
                    }), s.config.series[i].data[a] && s.config.series[i].data[a].fillColor && (o = s.config.series[i].data[a].fillColor), r.fillPath({
                        seriesNumber: this.barCtx.barOptions.distributed ? n : t,
                        dataPointIndex: a,
                        color: o,
                        value: e[i][a]
                    })
                }
            }, {
                key: "getStrokeWidth",
                value: function (t, e, i) {
                    var a = 0,
                        s = this.w;
                    return void 0 === this.barCtx.series[t][e] || null === this.barCtx.series[t][e] ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a
                }
            }, {
                key: "barBackground",
                value: function (t) {
                    var e = t.j,
                        i = t.i,
                        a = t.x1,
                        s = t.x2,
                        r = t.y1,
                        o = t.y2,
                        n = t.elSeries,
                        l = this.w,
                        h = new F(this.barCtx.ctx),
                        c = new S(this.barCtx.ctx).getActiveConfigSeriesIndex();
                    if (0 < this.barCtx.barOptions.colors.backgroundBarColors.length && c === i) {
                        e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e -= this.barCtx.barOptions.colors.backgroundBarColors.length);
                        var d = this.barCtx.barOptions.colors.backgroundBarColors[e],
                            g = h.drawRect(void 0 !== a ? a : 0, void 0 !== r ? r : 0, void 0 !== s ? s : l.globals.gridWidth, void 0 !== o ? o : l.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d, this.barCtx.barOptions.colors.backgroundBarOpacity);
                        n.add(g), g.node.classList.add("apexcharts-backgroundBar")
                    }
                }
            }, {
                key: "getColumnPaths",
                value: function (t) {
                    var e = t.barWidth,
                        i = t.barXPosition,
                        a = t.yRatio,
                        s = t.y1,
                        r = t.y2,
                        o = t.strokeWidth,
                        n = t.series,
                        l = t.realIndex,
                        h = t.i,
                        c = t.j,
                        d = t.w,
                        g = new F(this.barCtx.ctx);
                    (o = Array.isArray(o) ? o[l] : o) || (o = 0);
                    var u = {
                        barWidth: e,
                        strokeWidth: o,
                        yRatio: a,
                        barXPosition: i,
                        y1: s,
                        y2: r
                    },
                        p = this.getRoundedBars(d, u, n, h, c),
                        f = i,
                        x = i + e,
                        b = g.move(f, s),
                        m = g.move(f, s),
                        v = g.line(x - o, s);
                    return 0 < d.globals.previousPaths.length && (m = this.barCtx.getPreviousPath(l, c, !1)), b = b + g.line(f, p.y2) + p.pathWithRadius + g.line(x - o, p.y2) + v + v + "z", m = m + g.line(f, s) + v + v + v + v + v + g.line(f, s), d.config.chart.stacked && (this.barCtx.yArrj.push(p.y2), this.barCtx.yArrjF.push(Math.abs(s - p.y2)), this.barCtx.yArrjVal.push(this.barCtx.series[h][c])), {
                        pathTo: b,
                        pathFrom: m
                    }
                }
            }, {
                key: "getBarpaths",
                value: function (t) {
                    var e = t.barYPosition,
                        i = t.barHeight,
                        a = t.x1,
                        s = t.x2,
                        r = t.strokeWidth,
                        o = t.series,
                        n = t.realIndex,
                        l = t.i,
                        h = t.j,
                        c = t.w,
                        d = new F(this.barCtx.ctx);
                    (r = Array.isArray(r) ? r[n] : r) || (r = 0);
                    var g = {
                        barHeight: i,
                        strokeWidth: r,
                        barYPosition: e,
                        x2: s,
                        x1: a
                    },
                        u = this.getRoundedBars(c, g, o, l, h),
                        p = d.move(a, e),
                        f = d.move(a, e);
                    0 < c.globals.previousPaths.length && (f = this.barCtx.getPreviousPath(n, h, !1));
                    var x = e,
                        b = e + i,
                        m = d.line(a, b - r);
                    return p = p + d.line(u.x2, x) + u.pathWithRadius + d.line(u.x2, b - r) + m + m + "z", f = f + d.line(a, x) + m + m + m + m + m + d.line(a, x), c.config.chart.stacked && (this.barCtx.xArrj.push(u.x2), this.barCtx.xArrjF.push(Math.abs(a - u.x2)), this.barCtx.xArrjVal.push(this.barCtx.series[l][h])), {
                        pathTo: p,
                        pathFrom: f
                    }
                }
            }, {
                key: "getRoundedBars",
                value: function (t, e, i, a, s) {
                    var r = new F(this.barCtx.ctx),
                        o = 0,
                        n = t.config.plotOptions.bar.borderRadius,
                        l = Array.isArray(n);
                    if (o = l ? n[a > n.length - 1 ? n.length - 1 : a] : n, t.config.chart.stacked && 1 < i.length && a !== this.barCtx.radiusOnSeriesNumber && !l && (o = 0), this.barCtx.isHorizontal) {
                        var h = "",
                            c = e.x2;
                        if (Math.abs(e.x1 - e.x2) < o && (o = Math.abs(e.x1 - e.x2)), void 0 !== i[a][s] || null !== i[a][s]) {
                            var d = this.barCtx.isReversed ? 0 < i[a][s] : i[a][s] < 0;
                            d && (o *= -1), c -= o, h = r.quadraticCurve(c + o, e.barYPosition, c + o, e.barYPosition + (d ? -1 * o : o)) + r.line(c + o, e.barYPosition + e.barHeight - e.strokeWidth - (d ? -1 * o : o)) + r.quadraticCurve(c + o, e.barYPosition + e.barHeight - e.strokeWidth, c, e.barYPosition + e.barHeight - e.strokeWidth)
                        }
                        return {
                            pathWithRadius: h,
                            x2: c
                        }
                    }
                    var g = "",
                        u = e.y2;
                    if (Math.abs(e.y1 - e.y2) < o && (o = Math.abs(e.y1 - e.y2)), void 0 !== i[a][s] || null !== i[a][s]) {
                        var p = i[a][s] < 0;
                        p && (o *= -1), u += o, g = r.quadraticCurve(e.barXPosition, u - o, e.barXPosition + (p ? -1 * o : o), u - o) + r.line(e.barXPosition + e.barWidth - e.strokeWidth - (p ? -1 * o : o), u - o) + r.quadraticCurve(e.barXPosition + e.barWidth - e.strokeWidth, u - o, e.barXPosition + e.barWidth - e.strokeWidth, u)
                    }
                    return {
                        pathWithRadius: g,
                        y2: u
                    }
                }
            }, {
                key: "checkZeroSeries",
                value: function (t) {
                    for (var e = t.series, i = this.w, a = 0; a < e.length; a++) {
                        for (var s = 0, r = 0; r < e[i.globals.maxValsInArrayIndex].length; r++) s += e[a][r];
                        0 === s && this.barCtx.zeroSerieses.push(a)
                    }
                    for (var o = e.length - 1; 0 <= o; o--) - 1 < this.barCtx.zeroSerieses.indexOf(o) && o === this.radiusOnSeriesNumber && (this.barCtx.radiusOnSeriesNumber -= 1);
                    for (var n = e.length - 1; 0 <= n; n--) - 1 < i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber) && (this.barCtx.radiusOnSeriesNumber -= 1)
                }
            }, {
                key: "getXForValue",
                value: function (t, e, i) {
                    var a = !(2 < arguments.length && void 0 !== i) || arguments[2] ? e : null;
                    return null != t && (a = e + t / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t / this.barCtx.invertedYRatio : 0)), a
                }
            }, {
                key: "getYForValue",
                value: function (t, e, i) {
                    var a = !(2 < arguments.length && void 0 !== i) || arguments[2] ? e : null;
                    return null != t && (a = e - t / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0)), a
                }
            }, {
                key: "getGoalValues",
                value: function (i, a, s, t, e) {
                    var r = this,
                        o = this.w,
                        n = [];
                    return o.globals.seriesGoals[t] && o.globals.seriesGoals[t][e] && Array.isArray(o.globals.seriesGoals[t][e]) && o.globals.seriesGoals[t][e].forEach(function (t) {
                        var e;
                        n.push((l(e = {}, i, "x" === i ? r.getXForValue(t.value, a, !1) : r.getYForValue(t.value, s, !1)), l(e, "attrs", t), e))
                    }), n
                }
            }, {
                key: "drawGoalLine",
                value: function (t) {
                    var a = t.barXPosition,
                        s = t.barYPosition,
                        e = t.goalX,
                        i = t.goalY,
                        r = t.barWidth,
                        o = t.barHeight,
                        n = new F(this.barCtx.ctx),
                        l = n.group({
                            className: "apexcharts-bar-goals-groups"
                        }),
                        h = null;
                    return this.barCtx.isHorizontal ? Array.isArray(e) && e.forEach(function (t) {
                        var e = void 0 !== t.attrs.strokeHeight ? t.attrs.strokeHeight : o / 2,
                            i = s + e + o / 2;
                        h = n.drawLine(t.x, i - 2 * e, t.x, i, t.attrs.strokeColor ? t.attrs.strokeColor : void 0, t.attrs.strokeDashArray, t.attrs.strokeWidth ? t.attrs.strokeWidth : 2, t.attrs.strokeLineCap), l.add(h)
                    }) : Array.isArray(i) && i.forEach(function (t) {
                        var e = void 0 !== t.attrs.strokeWidth ? t.attrs.strokeWidth : r / 2,
                            i = a + e + r / 2;
                        h = n.drawLine(i - 2 * e, t.y, i, t.y, t.attrs.strokeColor ? t.attrs.strokeColor : void 0, t.attrs.strokeDashArray, t.attrs.strokeHeight ? t.attrs.strokeHeight : 2, t.attrs.strokeLineCap), l.add(h)
                    }), l
                }
            }]), e
        }(),
        P = function () {
            function a(t, e) {
                r(this, a), this.ctx = t, this.w = t.w;
                var i = this.w;
                this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.isTimelineBar = "datetime" === i.config.xaxis.type && i.globals.seriesRangeBarTimeline.length, this.xyRatios = e, null !== this.xyRatios && (this.xRatio = e.xRatio, this.initialXRatio = e.initialXRatio, this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.barHelpers = new L(this)
            }
            return o(a, [{
                key: "draw",
                value: function (t, e) {
                    var i = this.w,
                        a = new F(this.ctx),
                        s = new M(this.ctx, i);
                    t = s.getLogSeries(t), this.series = t, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
                    var r = a.group({
                        "class": "apexcharts-bar-series apexcharts-plot-series"
                    });
                    i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
                    for (var o = 0, n = 0; o < t.length; o++, n++) {
                        var l, h, c, d, g = void 0,
                            u = void 0,
                            p = [],
                            f = [],
                            x = i.globals.comboCharts ? e[o] : o,
                            b = a.group({
                                "class": "apexcharts-series",
                                rel: o + 1,
                                seriesName: E.escapeString(i.globals.seriesNames[x]),
                                "data:realIndex": x
                            });
                        this.ctx.series.addCollapsedClassToSeries(b, x), 0 < t[o].length && (this.visibleI = this.visibleI + 1);
                        var m = 0,
                            v = 0;
                        1 < this.yRatio.length && (this.yaxisIndex = x), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
                        var y = this.barHelpers.initialPositions();
                        u = y.y, m = y.barHeight, h = y.yDivision, d = y.zeroW, g = y.x, v = y.barWidth, l = y.xDivision, c = y.zeroH, this.horizontal || f.push(g + v / 2);
                        for (var w = a.group({
                            "class": "apexcharts-datalabels",
                            "data:realIndex": x
                        }), k = a.group({
                            "class": "apexcharts-bar-goals-markers",
                            style: "pointer-events: none"
                        }), A = 0; A < i.globals.dataPoints; A++) {
                            var S = this.barHelpers.getStrokeWidth(o, A, x),
                                C = null,
                                L = {
                                    indexes: {
                                        i: o,
                                        j: A,
                                        realIndex: x,
                                        bc: n
                                    },
                                    x: g,
                                    y: u,
                                    strokeWidth: S,
                                    elSeries: b
                                };
                            this.isHorizontal ? (C = this.drawBarPaths(X(X({}, L), {}, {
                                barHeight: m,
                                zeroW: d,
                                yDivision: h
                            })), v = this.series[o][A] / this.invertedYRatio) : (C = this.drawColumnPaths(X(X({}, L), {}, {
                                xDivision: l,
                                barWidth: v,
                                zeroH: c
                            })), m = this.series[o][A] / this.yRatio[this.yaxisIndex]);
                            var P = this.barHelpers.drawGoalLine({
                                barXPosition: C.barXPosition,
                                barYPosition: C.barYPosition,
                                goalX: C.goalX,
                                goalY: C.goalY,
                                barHeight: m,
                                barWidth: v
                            });
                            P && k.add(P), u = C.y, g = C.x, 0 < A && f.push(g + v / 2), p.push(u);
                            var T = this.barHelpers.getPathFillColor(t, o, A, x);
                            this.renderSeries({
                                realIndex: x,
                                pathFill: T,
                                j: A,
                                i: o,
                                pathFrom: C.pathFrom,
                                pathTo: C.pathTo,
                                strokeWidth: S,
                                elSeries: b,
                                x: g,
                                y: u,
                                series: t,
                                barHeight: m,
                                barWidth: v,
                                elDataLabelsWrap: w,
                                elGoalsMarkers: k,
                                visibleSeries: this.visibleI,
                                type: "bar"
                            })
                        }
                        i.globals.seriesXvalues[x] = f, i.globals.seriesYvalues[x] = p, r.add(b)
                    }
                    return r
                }
            }, {
                key: "renderSeries",
                value: function (t) {
                    var e = t.realIndex,
                        i = t.pathFill,
                        a = t.lineFill,
                        s = t.j,
                        r = t.i,
                        o = t.pathFrom,
                        n = t.pathTo,
                        l = t.strokeWidth,
                        h = t.elSeries,
                        c = t.x,
                        d = t.y,
                        g = t.y1,
                        u = t.y2,
                        p = t.series,
                        f = t.barHeight,
                        x = t.barWidth,
                        b = t.barYPosition,
                        m = t.elDataLabelsWrap,
                        v = t.elGoalsMarkers,
                        y = t.visibleSeries,
                        w = t.type,
                        k = this.w,
                        A = new F(this.ctx);
                    a || (a = this.barOptions.distributed ? k.globals.stroke.colors[s] : k.globals.stroke.colors[e]), k.config.series[r].data[s] && k.config.series[r].data[s].strokeColor && (a = k.config.series[r].data[s].strokeColor), this.isNullValue && (i = "none");
                    var S = s / k.config.chart.animations.animateGradually.delay * (
                        k.config.chart.animations.speed / k.globals.dataPoints) / 2.4,
                        C = A.renderPaths({
                            i: r,
                            j: s,
                            realIndex: e,
                            pathFrom: o,
                            pathTo: n,
                            stroke: a,
                            strokeWidth: l,
                            strokeLineCap: k.config.stroke.lineCap,
                            fill: i,
                            animationDelay: S,
                            initialSpeed: k.config.chart.animations.speed,
                            dataChangeSpeed: k.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-".concat(w, "-area")
                        });
                    C.attr("clip-path", "url(#gridRectMask".concat(k.globals.cuid, ")"));
                    var L = k.config.forecastDataPoints;
                    0 < L.count && s >= k.globals.dataPoints - L.count && (C.node.setAttribute("stroke-dasharray", L.dashArray), C.node.setAttribute("stroke-width", L.strokeWidth), C.node.setAttribute("fill-opacity", L.fillOpacity)), void 0 !== g && void 0 !== u && (C.attr("data-range-y1", g), C.attr("data-range-y2", u)), new Y(this.ctx).setSelectionFilter(C, e, s), h.add(C);
                    var P = new I(this).handleBarDataLabels({
                        x: c,
                        y: d,
                        y1: g,
                        y2: u,
                        i: r,
                        j: s,
                        series: p,
                        realIndex: e,
                        barHeight: f,
                        barWidth: x,
                        barYPosition: b,
                        renderedPath: C,
                        visibleSeries: y
                    });
                    return null !== P && m.add(P), h.add(m), v && h.add(v), h
                }
            }, {
                key: "drawBarPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.barHeight,
                        a = t.strokeWidth,
                        s = t.zeroW,
                        r = t.x,
                        o = t.y,
                        n = t.yDivision,
                        l = t.elSeries,
                        h = this.w,
                        c = e.i,
                        d = e.j;
                    h.globals.isXNumeric && (o = (h.globals.seriesX[c][d] - h.globals.minX) / this.invertedXRatio - i);
                    var g = o + i * this.visibleI;
                    r = this.barHelpers.getXForValue(this.series[c][d], s);
                    var u = this.barHelpers.getBarpaths({
                        barYPosition: g,
                        barHeight: i,
                        x1: s,
                        x2: r,
                        strokeWidth: a,
                        series: this.series,
                        realIndex: e.realIndex,
                        i: c,
                        j: d,
                        w: h
                    });
                    return h.globals.isXNumeric || (o += n), this.barHelpers.barBackground({
                        j: d,
                        i: c,
                        y1: g - i * this.visibleI,
                        y2: i * this.seriesLen,
                        elSeries: l
                    }), {
                        pathTo: u.pathTo,
                        pathFrom: u.pathFrom,
                        x: r,
                        y: o,
                        goalX: this.barHelpers.getGoalValues("x", s, null, c, d),
                        barYPosition: g
                    }
                }
            }, {
                key: "drawColumnPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x,
                        a = t.y,
                        s = t.xDivision,
                        r = t.barWidth,
                        o = t.zeroH,
                        n = t.strokeWidth,
                        l = t.elSeries,
                        h = this.w,
                        c = e.realIndex,
                        d = e.i,
                        g = e.j,
                        u = e.bc;
                    if (h.globals.isXNumeric) {
                        var p = c;
                        h.globals.seriesX[c].length || (p = h.globals.maxValsInArrayIndex), i = (h.globals.seriesX[p][g] - h.globals.minX) / this.xRatio - r * this.seriesLen / 2
                    }
                    var f = i + r * this.visibleI;
                    a = this.barHelpers.getYForValue(this.series[d][g], o);
                    var x = this.barHelpers.getColumnPaths({
                        barXPosition: f,
                        barWidth: r,
                        y1: o,
                        y2: a,
                        strokeWidth: n,
                        series: this.series,
                        realIndex: e.realIndex,
                        i: d,
                        j: g,
                        w: h
                    });
                    return h.globals.isXNumeric || (i += s), this.barHelpers.barBackground({
                        bc: u,
                        j: g,
                        i: d,
                        x1: f - n / 2 - r * this.visibleI,
                        x2: r * this.seriesLen + n / 2,
                        elSeries: l
                    }), {
                        pathTo: x.pathTo,
                        pathFrom: x.pathFrom,
                        x: i,
                        y: a,
                        goalY: this.barHelpers.getGoalValues("y", null, o, d, g),
                        barXPosition: f
                    }
                }
            }, {
                key: "getPreviousPath",
                value: function (t, e) {
                    for (var i, a = this.w, s = 0; s < a.globals.previousPaths.length; s++) {
                        var r = a.globals.previousPaths[s];
                        r.paths && 0 < r.paths.length && parseInt(r.realIndex, 10) === parseInt(t, 10) && void 0 !== a.globals.previousPaths[s].paths[e] && (i = a.globals.previousPaths[s].paths[e].d)
                    }
                    return i
                }
            }]), a
        }(),
        R = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
            }
            return o(e, [{
                key: "isValidDate",
                value: function (t) {
                    return !isNaN(this.parseDate(t))
                }
            }, {
                key: "getTimeStamp",
                value: function (t) {
                    return Date.parse(t) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : new Date(t).getTime() : t
                }
            }, {
                key: "getDate",
                value: function (t) {
                    return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toUTCString()) : new Date(t)
                }
            }, {
                key: "parseDate",
                value: function (t) {
                    var e = Date.parse(t);
                    if (!isNaN(e)) return this.getTimeStamp(t);
                    var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
                    return this.getTimeStamp(i)
                }
            }, {
                key: "parseDateWithTimezone",
                value: function (t) {
                    return Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "))
                }
            }, {
                key: "formatDate",
                value: function (t, e) {
                    function i(t, e) {
                        var i = t + "";
                        for (e = e || 2; i.length < e;) i = "0" + i;
                        return i
                    }
                    var a = this.w.globals.locale,
                        s = this.w.config.xaxis.labels.datetimeUTC,
                        r = ["\0"].concat(A(a.months)),
                        o = ["\x01"].concat(A(a.shortMonths)),
                        n = ["\x02"].concat(A(a.days)),
                        l = ["\x03"].concat(A(a.shortDays)),
                        h = s ? t.getUTCFullYear() : t.getFullYear();
                    e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + h)).replace(/(^|[^\\])yy/g, "$1" + h.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h);
                    var c = (s ? t.getUTCMonth() : t.getMonth()) + 1;
                    e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + r[0])).replace(/(^|[^\\])MMM/g, "$1" + o[0])).replace(/(^|[^\\])MM/g, "$1" + i(c))).replace(/(^|[^\\])M/g, "$1" + c);
                    var d = s ? t.getUTCDate() : t.getDate();
                    e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + n[0])).replace(/(^|[^\\])ddd/g, "$1" + l[0])).replace(/(^|[^\\])dd/g, "$1" + i(d))).replace(/(^|[^\\])d/g, "$1" + d);
                    var g = s ? t.getUTCHours() : t.getHours(),
                        u = 12 < g ? g - 12 : 0 === g ? 12 : g;
                    e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + i(g))).replace(/(^|[^\\])H/g, "$1" + g)).replace(/(^|[^\\])hh+/g, "$1" + i(u))).replace(/(^|[^\\])h/g, "$1" + u);
                    var p = s ? t.getUTCMinutes() : t.getMinutes();
                    e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + i(p))).replace(/(^|[^\\])m/g, "$1" + p);
                    var f = s ? t.getUTCSeconds() : t.getSeconds();
                    e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + i(f))).replace(/(^|[^\\])s/g, "$1" + f);
                    var x = s ? t.getUTCMilliseconds() : t.getMilliseconds();
                    e = e.replace(/(^|[^\\])fff+/g, "$1" + i(x, 3)), x = Math.round(x / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + i(x)), x = Math.round(x / 10);
                    var b = g < 12 ? "AM" : "PM";
                    e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + x)).replace(/(^|[^\\])TT+/g, "$1" + b)).replace(/(^|[^\\])T/g, "$1" + b.charAt(0));
                    var m = b.toLowerCase();
                    e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + m)).replace(/(^|[^\\])t/g, "$1" + m.charAt(0));
                    var v = -t.getTimezoneOffset(),
                        y = s || !v ? "Z" : 0 < v ? "+" : "-";
                    if (!s) {
                        var w = (v = Math.abs(v)) % 60;
                        y += i(Math.floor(v / 60)) + ":" + i(w)
                    }
                    e = e.replace(/(^|[^\\])K/g, "$1" + y);
                    var k = (s ? t.getUTCDay() : t.getDay()) + 1;
                    return (e = (e = (e = (e = e.replace(new RegExp(n[0], "g"), n[k])).replace(new RegExp(l[0], "g"), l[k])).replace(new RegExp(r[0], "g"), r[c])).replace(new RegExp(o[0], "g"), o[c])).replace(/\\(.)/g, "$1")
                }
            }, {
                key: "getTimeUnitsfromTimestamp",
                value: function (t, e) {
                    var i = this.w;
                    void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min), void 0 !== i.config.xaxis.max && (e = i.config.xaxis.max);
                    var a = this.getDate(t),
                        s = this.getDate(e),
                        r = this.formatDate(a, "yyyy MM dd HH mm ss fff").split(" "),
                        o = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" ");
                    return {
                        minMillisecond: parseInt(r[6], 10),
                        maxMillisecond: parseInt(o[6], 10),
                        minSecond: parseInt(r[5], 10),
                        maxSecond: parseInt(o[5], 10),
                        minMinute: parseInt(r[4], 10),
                        maxMinute: parseInt(o[4], 10),
                        minHour: parseInt(r[3], 10),
                        maxHour: parseInt(o[3], 10),
                        minDate: parseInt(r[2], 10),
                        maxDate: parseInt(o[2], 10),
                        minMonth: parseInt(r[1], 10) - 1,
                        maxMonth: parseInt(o[1], 10) - 1,
                        minYear: parseInt(r[0], 10),
                        maxYear: parseInt(o[0], 10)
                    }
                }
            }, {
                key: "isLeapYear",
                value: function (t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                }
            }, {
                key: "calculcateLastDaysOfMonth",
                value: function (t, e, i) {
                    return this.determineDaysOfMonths(t, e) - i
                }
            }, {
                key: "determineDaysOfYear",
                value: function (t) {
                    var e = 365;
                    return this.isLeapYear(t) && (e = 366), e
                }
            }, {
                key: "determineRemainingDaysOfYear",
                value: function (t, e, i) {
                    var a = this.daysCntOfYear[e] + i;
                    return 1 < e && this.isLeapYear() && a++, a
                }
            }, {
                key: "determineDaysOfMonths",
                value: function (t, e) {
                    var i = 30;
                    switch (t = E.monthMod(t), !0) {
                        case -1 < this.months30.indexOf(t):
                            2 === t && (i = this.isLeapYear(e) ? 29 : 28);
                            break;
                        case -1 < this.months31.indexOf(t):
                        default:
                            i = 31
                    }
                    return i
                }
            }]), e
        }(),
        H = function () {
            function t() {
                return r(this, t), e.apply(this, arguments)
            }
            n(t, P);
            var e = d(t);
            return o(t, [{
                key: "draw",
                value: function (t, e) {
                    var i = this.w,
                        a = new F(this.ctx);
                    this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = i.globals.seriesRangeStart, this.seriesRangeEnd = i.globals.seriesRangeEnd, this.barHelpers.initVariables(t);
                    for (var s = a.group({
                        "class": "apexcharts-rangebar-series apexcharts-plot-series"
                    }), r = 0; r < t.length; r++) {
                        var o, n, l, h = void 0,
                            c = void 0,
                            d = void 0,
                            g = i.globals.comboCharts ? e[r] : r,
                            u = a.group({
                                "class": "apexcharts-series",
                                seriesName: E.escapeString(i.globals.seriesNames[g]),
                                rel: r + 1,
                                "data:realIndex": g
                            });
                        0 < t[r].length && (this.visibleI = this.visibleI + 1);
                        var p = 0,
                            f = 0;
                        1 < this.yRatio.length && (this.yaxisIndex = g);
                        var x = this.barHelpers.initialPositions();
                        c = x.y, l = x.zeroW, h = x.x, f = x.barWidth, o = x.xDivision, n = x.zeroH;
                        for (var b = a.group({
                            "class": "apexcharts-datalabels",
                            "data:realIndex": g
                        }), m = a.group({
                            "class": "apexcharts-rangebar-goals-markers",
                            style: "pointer-events: none"
                        }), v = 0; v < i.globals.dataPoints; v++) {
                            var y = this.barHelpers.getStrokeWidth(r, v, g),
                                w = this.seriesRangeStart[r][v],
                                k = this.seriesRangeEnd[r][v],
                                A = null,
                                S = null,
                                C = {
                                    x: h,
                                    y: c,
                                    strokeWidth: y,
                                    elSeries: u
                                };
                            if (d = x.yDivision, p = x.barHeight, this.isHorizontal) {
                                S = c + p * this.visibleI;
                                var L = this.seriesLen;
                                i.config.plotOptions.bar.rangeBarGroupRows && (L = 1);
                                var P = (d - p * L) / 2;
                                if (void 0 === i.config.series[r].data[v]) break;
                                if (this.isTimelineBar && i.config.series[r].data[v].x) {
                                    var T = this.detectOverlappingBars({
                                        i: r,
                                        j: v,
                                        barYPosition: S,
                                        srty: P,
                                        barHeight: p,
                                        yDivision: d,
                                        initPositions: x
                                    });
                                    p = T.barHeight, S = T.barYPosition
                                }
                                f = (A = this.drawRangeBarPaths(X({
                                    indexes: {
                                        i: r,
                                        j: v,
                                        realIndex: g
                                    },
                                    barHeight: p,
                                    barYPosition: S,
                                    zeroW: l,
                                    yDivision: d,
                                    y1: w,
                                    y2: k
                                }, C))).barWidth
                            } else p = (A = this.drawRangeColumnPaths(X({
                                indexes: {
                                    i: r,
                                    j: v,
                                    realIndex: g
                                },
                                zeroH: n,
                                barWidth: f,
                                xDivision: o
                            }, C))).barHeight;
                            var M = this.barHelpers.drawGoalLine({
                                barXPosition: A.barXPosition,
                                barYPosition: S,
                                goalX: A.goalX,
                                goalY: A.goalY,
                                barHeight: p,
                                barWidth: f
                            });
                            M && m.add(M), c = A.y, h = A.x;
                            var I = this.barHelpers.getPathFillColor(t, r, v, g),
                                z = i.globals.stroke.colors[g];
                            this.renderSeries({
                                realIndex: g,
                                pathFill: I,
                                lineFill: z,
                                j: v,
                                i: r,
                                x: h,
                                y: c,
                                y1: w,
                                y2: k,
                                pathFrom: A.pathFrom,
                                pathTo: A.pathTo,
                                strokeWidth: y,
                                elSeries: u,
                                series: t,
                                barHeight: p,
                                barYPosition: S,
                                barWidth: f,
                                elDataLabelsWrap: b,
                                elGoalsMarkers: m,
                                visibleSeries: this.visibleI,
                                type: "rangebar"
                            })
                        }
                        s.add(u)
                    }
                    return s
                }
            }, {
                key: "detectOverlappingBars",
                value: function (t) {
                    var e = t.i,
                        i = t.j,
                        a = t.barYPosition,
                        s = t.srty,
                        r = t.barHeight,
                        o = t.yDivision,
                        n = t.initPositions,
                        l = this.w,
                        h = [],
                        c = l.config.series[e].data[i].rangeName,
                        d = l.config.series[e].data[i].x,
                        g = l.globals.labels.indexOf(d),
                        u = l.globals.seriesRangeBarTimeline[e].findIndex(function (t) {
                            return t.x === d && 0 < t.overlaps.length
                        });
                    return a = l.config.plotOptions.bar.rangeBarGroupRows ? s + o * g : s + r * this.visibleI + o * g, -1 < u && !l.config.plotOptions.bar.rangeBarOverlap && -1 < (h = l.globals.seriesRangeBarTimeline[e][u].overlaps).indexOf(c) && (a = (r = n.barHeight / h.length) * this.visibleI + o * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + r * (this.visibleI + h.indexOf(c)) + o * g), {
                        barYPosition: a,
                        barHeight: r
                    }
                }
            }, {
                key: "drawRangeColumnPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x;
                    t.strokeWidth;
                    var a = t.xDivision,
                        s = t.barWidth,
                        r = t.zeroH,
                        o = this.w,
                        n = e.i,
                        l = e.j,
                        h = this.yRatio[this.yaxisIndex],
                        c = e.realIndex,
                        d = this.getRangeValue(c, l),
                        g = Math.min(d.start, d.end),
                        u = Math.max(d.start, d.end);
                    o.globals.isXNumeric && (i = (o.globals.seriesX[n][l] - o.globals.minX) / this.xRatio - s / 2);
                    var p = i + s * this.visibleI;
                    void 0 === this.series[n][l] || null === this.series[n][l] ? g = r : (g = r - g / h, u = r - u / h);
                    var f = Math.abs(u - g),
                        x = this.barHelpers.getColumnPaths({
                            barXPosition: p,
                            barWidth: s,
                            y1: g,
                            y2: u,
                            strokeWidth: this.strokeWidth,
                            series: this.seriesRangeEnd,
                            realIndex: e.realIndex,
                            i: c,
                            j: l,
                            w: o
                        });
                    return o.globals.isXNumeric || (i += a), {
                        pathTo: x.pathTo,
                        pathFrom: x.pathFrom,
                        barHeight: f,
                        x: i,
                        y: u,
                        goalY: this.barHelpers.getGoalValues("y", null, r, n, l),
                        barXPosition: p
                    }
                }
            }, {
                key: "drawRangeBarPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.y,
                        a = t.y1,
                        s = t.y2,
                        r = t.yDivision,
                        o = t.barHeight,
                        n = t.barYPosition,
                        l = t.zeroW,
                        h = this.w,
                        c = l + a / this.invertedYRatio,
                        d = l + s / this.invertedYRatio,
                        g = Math.abs(d - c),
                        u = this.barHelpers.getBarpaths({
                            barYPosition: n,
                            barHeight: o,
                            x1: c,
                            x2: d,
                            strokeWidth: this.strokeWidth,
                            series: this.seriesRangeEnd,
                            i: e.realIndex,
                            realIndex: e.realIndex,
                            j: e.j,
                            w: h
                        });
                    return h.globals.isXNumeric || (i += r), {
                        pathTo: u.pathTo,
                        pathFrom: u.pathFrom,
                        barWidth: g,
                        x: d,
                        goalX: this.barHelpers.getGoalValues("x", l, null, e.realIndex, e.j),
                        y: i
                    }
                }
            }, {
                key: "getRangeValue",
                value: function (t, e) {
                    var i = this.w;
                    return {
                        start: i.globals.seriesRangeStart[t][e],
                        end: i.globals.seriesRangeEnd[t][e]
                    }
                }
            }, {
                key: "getTooltipValues",
                value: function (t) {
                    var e = t.ctx,
                        i = t.seriesIndex,
                        a = t.dataPointIndex,
                        s = t.y1,
                        r = t.y2,
                        o = t.w,
                        n = o.globals.seriesRangeStart[i][a],
                        l = o.globals.seriesRangeEnd[i][a],
                        h = o.globals.labels[a],
                        c = o.config.series[i].name ? o.config.series[i].name : "",
                        d = o.config.tooltip.y.formatter,
                        g = o.config.tooltip.y.title.formatter,
                        u = {
                            w: o,
                            seriesIndex: i,
                            dataPointIndex: a,
                            start: n,
                            end: l
                        };
                    "function" == typeof g && (c = g(c, u)), Number.isFinite(s) && Number.isFinite(r) && (n = s, l = r, o.config.series[i].data[a].x && (h = o.config.series[i].data[a].x + ":"), "function" == typeof d && (h = d(h, u)));
                    var p = "",
                        f = "",
                        x = o.globals.colors[i];
                    if (void 0 === o.config.tooltip.x.formatter)
                        if ("datetime" === o.config.xaxis.type) {
                            var b = new R(e);
                            p = b.formatDate(b.getDate(n), o.config.tooltip.x.format), f = b.formatDate(b.getDate(l), o.config.tooltip.x.format)
                        } else p = n, f = l;
                    else p = o.config.tooltip.x.formatter(n), f = o.config.tooltip.x.formatter(l);
                    return {
                        start: n,
                        end: l,
                        startVal: p,
                        endVal: f,
                        ylabel: h,
                        color: x,
                        seriesName: c
                    }
                }
            }, {
                key: "buildCustomTooltipHTML",
                value: function (t) {
                    return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + t.color + '">' + (t.seriesName || "") + '</span></div><div> <span class="category">' + t.ylabel + ' </span> <span class="value start-value">' + t.start + '</span> <span class="separator">-</span> <span class="value end-value">' + t.end + "</span></div></div>"
                }
            }]), t
        }(),
        D = function () {
            function e(t) {
                r(this, e), this.opts = t
            }
            return o(e, [{
                key: "line",
                value: function () {
                    return {
                        chart: {
                            animations: {
                                easing: "swing"
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            width: 5,
                            curve: "straight"
                        },
                        markers: {
                            size: 0,
                            hover: {
                                sizeOffset: 6
                            }
                        },
                        xaxis: {
                            crosshairs: {
                                width: 1
                            }
                        }
                    }
                }
            }, {
                key: "sparkline",
                value: function (t) {
                    return this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0, E.extend(t, {
                        grid: {
                            show: !1,
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }
                        },
                        legend: {
                            show: !1
                        },
                        xaxis: {
                            labels: {
                                show: !1
                            },
                            tooltip: {
                                enabled: !1
                            },
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            }
                        },
                        chart: {
                            toolbar: {
                                show: !1
                            },
                            zoom: {
                                enabled: !1
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        }
                    })
                }
            }, {
                key: "bar",
                value: function () {
                    return {
                        chart: {
                            stacked: !1,
                            animations: {
                                easing: "swing"
                            }
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    position: "center"
                                }
                            }
                        },
                        dataLabels: {
                            style: {
                                colors: ["#fff"]
                            },
                            background: {
                                enabled: !1
                            }
                        },
                        stroke: {
                            width: 0,
                            lineCap: "round"
                        },
                        fill: {
                            opacity: .85
                        },
                        legend: {
                            markers: {
                                shape: "square",
                                radius: 2,
                                size: 8
                            }
                        },
                        tooltip: {
                            shared: !1,
                            intersect: !0
                        },
                        xaxis: {
                            tooltip: {
                                enabled: !1
                            },
                            tickPlacement: "between",
                            crosshairs: {
                                width: "barWidth",
                                position: "back",
                                fill: {
                                    type: "gradient"
                                },
                                dropShadow: {
                                    enabled: !1
                                },
                                stroke: {
                                    width: 0
                                }
                            }
                        }
                    }
                }
            }, {
                key: "candlestick",
                value: function () {
                    var s = this;
                    return {
                        stroke: {
                            width: 1,
                            colors: ["#333"]
                        },
                        fill: {
                            opacity: 1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        tooltip: {
                            shared: !0,
                            custom: function (t) {
                                var e = t.seriesIndex,
                                    i = t.dataPointIndex,
                                    a = t.w;
                                return s._getBoxTooltip(a, e, i, ["Open", "High", "", "Low", "Close"], "candlestick")
                            }
                        },
                        states: {
                            active: {
                                filter: {
                                    type: "none"
                                }
                            }
                        },
                        xaxis: {
                            crosshairs: {
                                width: 1
                            }
                        }
                    }
                }
            }, {
                key: "boxPlot",
                value: function () {
                    var s = this;
                    return {
                        chart: {
                            animations: {
                                dynamicAnimation: {
                                    enabled: !1
                                }
                            }
                        },
                        stroke: {
                            width: 1,
                            colors: ["#24292e"]
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        tooltip: {
                            shared: !0,
                            custom: function (t) {
                                var e = t.seriesIndex,
                                    i = t.dataPointIndex,
                                    a = t.w;
                                return s._getBoxTooltip(a, e, i, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot")
                            }
                        },
                        markers: {
                            size: 5,
                            strokeWidth: 1,
                            strokeColors: "#111"
                        },
                        xaxis: {
                            crosshairs: {
                                width: 1
                            }
                        }
                    }
                }
            }, {
                key: "rangeBar",
                value: function () {
                    return {
                        stroke: {
                            width: 0,
                            lineCap: "square"
                        },
                        plotOptions: {
                            bar: {
                                borderRadius: 0,
                                dataLabels: {
                                    position: "center"
                                }
                            }
                        },
                        dataLabels: {
                            enabled: !1,
                            formatter: function (t, e) {
                                e.ctx;
                                var i = e.seriesIndex,
                                    a = e.dataPointIndex,
                                    s = e.w,
                                    r = s.globals.seriesRangeStart[i][a];
                                return s.globals.seriesRangeEnd[i][a] - r
                            },
                            background: {
                                enabled: !1
                            },
                            style: {
                                colors: ["#fff"]
                            }
                        },
                        tooltip: {
                            shared: !1,
                            followCursor: !0,
                            custom: function (t) {
                                return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? (c = new H((h = t).ctx, null), d = c.getTooltipValues(h), g = d.color, u = d.seriesName, p = d.ylabel, f = d.startVal, x = d.endVal, c.buildCustomTooltipHTML({
                                    color: g,
                                    seriesName: u,
                                    ylabel: p,
                                    start: f,
                                    end: x
                                })) : (i = new H((e = t).ctx, null), a = i.getTooltipValues(e), s = a.color, r = a.seriesName, o = a.ylabel, n = a.start, l = a.end, i.buildCustomTooltipHTML({
                                    color: s,
                                    seriesName: r,
                                    ylabel: o,
                                    start: n,
                                    end: l
                                }));
                                var e, i, a, s, r, o, n, l, h, c, d, g, u, p, f, x
                            }
                        },
                        xaxis: {
                            tickPlacement: "between",
                            tooltip: {
                                enabled: !1
                            },
                            crosshairs: {
                                stroke: {
                                    width: 0
                                }
                            }
                        }
                    }
                }
            }, {
                key: "area",
                value: function () {
                    return {
                        stroke: {
                            width: 4
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                inverseColors: !1,
                                shade: "light",
                                type: "vertical",
                                opacityFrom: .65,
                                opacityTo: .5,
                                stops: [0, 100, 100]
                            }
                        },
                        markers: {
                            size: 0,
                            hover: {
                                sizeOffset: 6
                            }
                        },
                        tooltip: {
                            followCursor: !1
                        }
                    }
                }
            }, {
                key: "brush",
                value: function (t) {
                    return E.extend(t, {
                        chart: {
                            toolbar: {
                                autoSelected: "selection",
                                show: !1
                            },
                            zoom: {
                                enabled: !1
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            width: 1
                        },
                        tooltip: {
                            enabled: !1
                        },
                        xaxis: {
                            tooltip: {
                                enabled: !1
                            }
                        }
                    })
                }
            }, {
                key: "stacked100",
                value: function (i) {
                    i.dataLabels = i.dataLabels || {}, i.dataLabels.formatter = i.dataLabels.formatter || void 0;
                    var t = i.dataLabels.formatter;
                    return i.yaxis.forEach(function (t, e) {
                        i.yaxis[e].min = 0, i.yaxis[e].max = 100
                    }), "bar" === i.chart.type && (i.dataLabels.formatter = t || function (t) {
                        return "number" == typeof t && t ? t.toFixed(0) + "%" : t
                    }), i
                }
            }, {
                key: "convertCatToNumeric",
                value: function (t) {
                    return t.xaxis.convertedCatToNumeric = !0, t
                }
            }, {
                key: "convertCatToNumericXaxis",
                value: function (t, e, i) {
                    t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function (t) {
                        return E.isNumber(t) ? Math.floor(t) : t
                    };
                    var a = t.xaxis.labels.formatter,
                        s = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
                    return i && i.length && (s = i.map(function (t) {
                        return Array.isArray(t) ? t : String(t)
                    })), s && s.length && (t.xaxis.labels.formatter = function (t) {
                        return E.isNumber(t) ? a(s[Math.floor(t) - 1]) : a(t)
                    }), t.xaxis.categories = [], t.labels = [], t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints", t
                }
            }, {
                key: "bubble",
                value: function () {
                    return {
                        dataLabels: {
                            style: {
                                colors: ["#fff"]
                            }
                        },
                        tooltip: {
                            shared: !1,
                            intersect: !0
                        },
                        xaxis: {
                            crosshairs: {
                                width: 0
                            }
                        },
                        fill: {
                            type: "solid",
                            gradient: {
                                shade: "light",
                                inverse: !0,
                                shadeIntensity: .55,
                                opacityFrom: .4,
                                opacityTo: .8
                            }
                        }
                    }
                }
            }, {
                key: "scatter",
                value: function () {
                    return {
                        dataLabels: {
                            enabled: !1
                        },
                        tooltip: {
                            shared: !1,
                            intersect: !0
                        },
                        markers: {
                            size: 6,
                            strokeWidth: 1,
                            hover: {
                                sizeOffset: 2
                            }
                        }
                    }
                }
            }, {
                key: "heatmap",
                value: function () {
                    return {
                        chart: {
                            stacked: !1
                        },
                        fill: {
                            opacity: 1
                        },
                        dataLabels: {
                            style: {
                                colors: ["#fff"]
                            }
                        },
                        stroke: {
                            colors: ["#fff"]
                        },
                        tooltip: {
                            followCursor: !0,
                            marker: {
                                show: !1
                            },
                            x: {
                                show: !1
                            }
                        },
                        legend: {
                            position: "top",
                            markers: {
                                shape: "square",
                                size: 10,
                                offsetY: 2
                            }
                        },
                        grid: {
                            padding: {
                                right: 20
                            }
                        }
                    }
                }
            }, {
                key: "treemap",
                value: function () {
                    return {
                        chart: {
                            zoom: {
                                enabled: !1
                            }
                        },
                        dataLabels: {
                            style: {
                                fontSize: 14,
                                fontWeight: 600,
                                colors: ["#fff"]
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 2,
                            colors: ["#fff"]
                        },
                        legend: {
                            show: !1
                        },
                        fill: {
                            gradient: {
                                stops: [0, 100]
                            }
                        },
                        tooltip: {
                            followCursor: !0,
                            x: {
                                show: !1
                            }
                        },
                        grid: {
                            padding: {
                                left: 0,
                                right: 0
                            }
                        },
                        xaxis: {
                            crosshairs: {
                                show: !1
                            },
                            tooltip: {
                                enabled: !1
                            }
                        }
                    }
                }
            }, {
                key: "pie",
                value: function () {
                    return {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: !1
                                    }
                                }
                            }
                        },
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            },
                            style: {
                                colors: ["#fff"]
                            },
                            background: {
                                enabled: !1
                            },
                            dropShadow: {
                                enabled: !0
                            }
                        },
                        stroke: {
                            colors: ["#fff"]
                        },
                        fill: {
                            opacity: 1,
                            gradient: {
                                shade: "light",
                                stops: [0, 100]
                            }
                        },
                        tooltip: {
                            theme: "dark",
                            fillSeriesColor: !0
                        },
                        legend: {
                            position: "right"
                        }
                    }
                }
            }, {
                key: "donut",
                value: function () {
                    return {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            },
                            style: {
                                colors: ["#fff"]
                            },
                            background: {
                                enabled: !1
                            },
                            dropShadow: {
                                enabled: !0
                            }
                        },
                        stroke: {
                            colors: ["#fff"]
                        },
                        fill: {
                            opacity: 1,
                            gradient: {
                                shade: "light",
                                shadeIntensity: .35,
                                stops: [80, 100],
                                opacityFrom: 1,
                                opacityTo: 1
                            }
                        },
                        tooltip: {
                            theme: "dark",
                            fillSeriesColor: !0
                        },
                        legend: {
                            position: "right"
                        }
                    }
                }
            }, {
                key: "polarArea",
                value: function () {
                    return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount ? this.opts.yaxis[0].tickAmount : 6, {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            },
                            enabled: !1
                        },
                        stroke: {
                            show: !0,
                            width: 2
                        },
                        fill: {
                            opacity: .7
                        },
                        tooltip: {
                            theme: "dark",
                            fillSeriesColor: !0
                        },
                        legend: {
                            position: "right"
                        }
                    }
                }
            }, {
                key: "radar",
                value: function () {
                    return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, {
                        dataLabels: {
                            enabled: !1,
                            style: {
                                fontSize: "11px"
                            }
                        },
                        stroke: {
                            width: 2
                        },
                        markers: {
                            size: 3,
                            strokeWidth: 1,
                            strokeOpacity: 1
                        },
                        fill: {
                            opacity: .2
                        },
                        tooltip: {
                            shared: !1,
                            intersect: !0,
                            followCursor: !0
                        },
                        grid: {
                            show: !1
                        },
                        xaxis: {
                            labels: {
                                formatter: function (t) {
                                    return t
                                },
                                style: {
                                    colors: ["#a8a8a8"],
                                    fontSize: "11px"
                                }
                            },
                            tooltip: {
                                enabled: !1
                            },
                            crosshairs: {
                                show: !1
                            }
                        }
                    }
                }
            }, {
                key: "radialBar",
                value: function () {
                    return {
                        chart: {
                            animations: {
                                dynamicAnimation: {
                                    enabled: !0,
                                    speed: 800
                                }
                            },
                            toolbar: {
                                show: !1
                            }
                        },
                        fill: {
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .4,
                                inverseColors: !1,
                                type: "diagonal2",
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [70, 98, 100]
                            }
                        },
                        legend: {
                            show: !1,
                            position: "right"
                        },
                        tooltip: {
                            enabled: !1,
                            fillSeriesColor: !0
                        }
                    }
                }
            }, {
                key: "_getBoxTooltip",
                value: function (t, e, i, a, s) {
                    var r = t.globals.seriesCandleO[e][i],
                        o = t.globals.seriesCandleH[e][i],
                        n = t.globals.seriesCandleM[e][i],
                        l = t.globals.seriesCandleL[e][i],
                        h = t.globals.seriesCandleC[e][i];
                    return t.config.series[e].type && t.config.series[e].type !== s ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name ? t.config.series[e].name : "series-" + (e + 1), ": <strong>").concat(t.globals.series[e][i], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">') + "<div>".concat(a[0], ': <span class="value">') + r + "</span></div>" + "<div>".concat(a[1], ': <span class="value">') + o + "</span></div>" + (n ? "<div>".concat(a[2], ': <span class="value">') + n + "</span></div>" : "") + "<div>".concat(a[3], ': <span class="value">') + l + "</span></div>" + "<div>".concat(a[4], ': <span class="value">') + h + "</span></div></div>"
                }
            }]), e
        }(),
        N = function () {
            function e(t) {
                r(this, e), this.opts = t
            }
            return o(e, [{
                key: "init",
                value: function (t) {
                    var e = t.responsiveOverride,
                        i = this.opts,
                        a = new m,
                        s = new D(i);
                    this.chartType = i.chart.type, "histogram" === this.chartType && (i.chart.type = "bar", i = E.extend({
                        plotOptions: {
                            bar: {
                                columnWidth: "99.99%"
                            }
                        }
                    }, i)), i = this.extendYAxis(i), i = this.extendAnnotations(i);
                    var r = a.init(),
                        o = {};
                    if (i && "object" === y(i)) {
                        var n = {};
                        n = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "histogram", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) ? s[i.chart.type]() : s.line(), i.chart.brush && i.chart.brush.enabled && (n = s.brush(n)), i.chart.stacked && "100%" === i.chart.stackType && (i = s.stacked100(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, e || (i.xaxis.convertedCatToNumeric = !1), ((i = this.checkForCatToNumericXAxis(this.chartType, n, i)).chart.sparkline && i.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (n = s.sparkline(n)), o = E.extend(r, n)
                    }
                    var l = E.extend(o, window.Apex);
                    return r = E.extend(l, i), this.handleUserInputErrors(r)
                }
            }, {
                key: "checkForCatToNumericXAxis",
                value: function (t, e, i) {
                    var a = new D(i),
                        s = "bar" === t && i.plotOptions && i.plotOptions.bar && i.plotOptions.bar.horizontal,
                        r = "pie" === t || "polarArea" === t || "donut" === t || "radar" === t || "radialBar" === t || "heatmap" === t,
                        o = "datetime" !== i.xaxis.type && "numeric" !== i.xaxis.type,
                        n = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : e.xaxis && e.xaxis.tickPlacement;
                    return s || r || !o || "between" === n || (i = a.convertCatToNumeric(i)), i
                }
            }, {
                key: "extendYAxis",
                value: function (a, t) {
                    var s = new m;
                    (void 0 === a.yaxis || !a.yaxis || Array.isArray(a.yaxis) && 0 === a.yaxis.length) && (a.yaxis = {}), a.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (a.yaxis = E.extend(a.yaxis, window.Apex.yaxis)), a.yaxis.constructor !== Array ? a.yaxis = [E.extend(s.yAxis, a.yaxis)] : a.yaxis = E.extendArray(a.yaxis, s.yAxis);
                    var e = !1;
                    a.yaxis.forEach(function (t) {
                        t.logarithmic && (e = !0)
                    });
                    var r = a.series;
                    return t && !r && (r = t.config.series), e && r.length !== a.yaxis.length && r.length && (a.yaxis = r.map(function (t, e) {
                        if (t.name || (r[e].name = "series-".concat(e + 1)), a.yaxis[e]) return a.yaxis[e].seriesName = r[e].name, a.yaxis[e];
                        var i = E.extend(s.yAxis, a.yaxis[0]);
                        return i.show = !1, i
                    })), e && 1 < r.length && r.length !== a.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."), a
                }
            }, {
                key: "extendAnnotations",
                value: function (t) {
                    return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), this.extendPointAnnotations(t)
                }
            }, {
                key: "extendYAxisAnnotations",
                value: function (t) {
                    var e = new m;
                    return t.annotations.yaxis = E.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t
                }
            }, {
                key: "extendXAxisAnnotations",
                value: function (t) {
                    var e = new m;
                    return t.annotations.xaxis = E.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t
                }
            }, {
                key: "extendPointAnnotations",
                value: function (t) {
                    var e = new m;
                    return t.annotations.points = E.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t
                }
            }, {
                key: "checkForDarkTheme",
                value: function (t) {
                    t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.chart.background || (t.chart.background = "#424242"), t.theme.palette || (t.theme.palette = "palette4"))
                }
            }, {
                key: "handleUserInputErrors",
                value: function (t) {
                    var e = t;
                    if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
                    if ("bar" === e.chart.type && e.plotOptions.bar.horizontal) {
                        if (1 < e.yaxis.length) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                        e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1
                    }
                    return "bar" !== e.chart.type && "rangeBar" !== e.chart.type || e.tooltip.shared && "barWidth" === e.xaxis.crosshairs.width && 1 < e.series.length && (e.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e.chart.type && "boxPlot" !== e.chart.type || e.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e.chart.type, " chart is not supported.")), e.yaxis[0].reversed = !1), e.chart.group && 0 === e.yaxis[0].labels.minWidth && console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."), Array.isArray(e.stroke.width) && "line" !== e.chart.type && "area" !== e.chart.type && (console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), e.stroke.width = e.stroke.width[0]), e
                }
            }]), e
        }(),
        O = function () {
            function t() {
                r(this, t)
            }
            return o(t, [{
                key: "initGlobalVars",
                value: function (t) {
                    t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleM = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRangeBarTimeline = [], t.seriesPercent = [], t.seriesGoals = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.xaxisLabelsCount = 0, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0
                }
            }, {
                key: "globalVars",
                value: function (t) {
                    return {
                        chartID: null,
                        cuid: null,
                        events: {
                            beforeMount: [],
                            mounted: [],
                            updated: [],
                            clicked: [],
                            selection: [],
                            dataPointSelection: [],
                            zoomed: [],
                            scrolled: []
                        },
                        colors: [],
                        clientX: null,
                        clientY: null,
                        fill: {
                            colors: []
                        },
                        stroke: {
                            colors: []
                        },
                        dataLabels: {
                            style: {
                                colors: []
                            }
                        },
                        radarPolygons: {
                            fill: {
                                colors: []
                            }
                        },
                        markers: {
                            colors: [],
                            size: t.markers.size,
                            largestSize: 0
                        },
                        animationEnded: !1,
                        isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                        isDirty: !1,
                        isExecCalled: !1,
                        initialConfig: null,
                        initialSeries: [],
                        lastXAxis: [],
                        lastYAxis: [],
                        columnSeries: null,
                        labels: [],
                        timescaleLabels: [],
                        noLabelsProvided: !1,
                        allSeriesCollapsed: !1,
                        collapsedSeries: [],
                        collapsedSeriesIndices: [],
                        ancillaryCollapsedSeries: [],
                        ancillaryCollapsedSeriesIndices: [],
                        risingSeries: [],
                        dataFormatXNumeric: !1,
                        capturedSeriesIndex: -1,
                        capturedDataPointIndex: -1,
                        selectedDataPoints: [],
                        goldenPadding: 35,
                        invalidLogScale: !1,
                        ignoreYAxisIndexes: [],
                        yAxisSameScaleIndices: [],
                        maxValsInArrayIndex: 0,
                        radialSize: 0,
                        selection: void 0,
                        zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                        panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                        selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                        yaxis: null,
                        mousedown: !1,
                        lastClientPosition: {},
                        visibleXRange: void 0,
                        yValueDecimal: 0,
                        total: 0,
                        SVGNS: "http://www.w3.org/2000/svg",
                        svgWidth: 0,
                        svgHeight: 0,
                        noData: !1,
                        locale: {},
                        dom: {},
                        memory: {
                            methodsToExec: []
                        },
                        shouldAnimate: !0,
                        skipLastTimelinelabel: !1,
                        skipFirstTimelinelabel: !1,
                        delayedElements: [],
                        axisCharts: !0,
                        isDataXYZ: !1,
                        resized: !1,
                        resizeTimer: null,
                        comboCharts: !1,
                        dataChanged: !1,
                        previousPaths: [],
                        allSeriesHasEqualX: !0,
                        pointsArray: [],
                        dataLabelsRects: [],
                        lastDrawnDataLabelsIndexes: [],
                        hasNullValues: !1,
                        easing: null,
                        zoomed: !1,
                        gridWidth: 0,
                        gridHeight: 0,
                        rotateXLabels: !1,
                        defaultLabels: !1,
                        xLabelFormatter: void 0,
                        yLabelFormatters: [],
                        xaxisTooltipFormatter: void 0,
                        ttKeyFormatter: void 0,
                        ttVal: void 0,
                        ttZFormatter: void 0,
                        LINE_HEIGHT_RATIO: 1.618,
                        xAxisLabelsHeight: 0,
                        xAxisLabelsWidth: 0,
                        yAxisLabelsWidth: 0,
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0,
                        translateY: 0,
                        translateYAxisX: [],
                        yAxisWidths: [],
                        translateXAxisY: 0,
                        translateXAxisX: 0,
                        tooltip: null
                    }
                }
            }, {
                key: "init",
                value: function (t) {
                    var e = this.globalVars(t);
                    return this.initGlobalVars(e), e.initialConfig = E.extend({}, t), e.initialSeries = E.clone(t.series), e.lastXAxis = E.clone(e.initialConfig.xaxis), e.lastYAxis = E.clone(e.initialConfig.yaxis), e
                }
            }]), t
        }(),
        W = function () {
            function e(t) {
                r(this, e), this.opts = t
            }
            return o(e, [{
                key: "init",
                value: function () {
                    var t = new N(this.opts).init({
                        responsiveOverride: !1
                    });
                    return {
                        config: t,
                        globals: (new O).init(t)
                    }
                }
            }]), e
        }(),
        B = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new M(this.ctx)
            }
            return o(e, [{
                key: "isMultiFormat",
                value: function () {
                    return this.isFormatXY() || this.isFormat2DArray()
                }
            }, {
                key: "isFormatXY",
                value: function () {
                    var t = this.w.config.series.slice(),
                        e = new S(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0
                }
            }, {
                key: "isFormat2DArray",
                value: function () {
                    var t = this.w.config.series.slice(),
                        e = new S(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0
                }
            }, {
                key: "handleFormat2DArray",
                value: function (t, e) {
                    for (var i = this.w.config, a = this.w.globals, s = "boxPlot" === i.chart.type || "boxPlot" === i.series[e].type, r = 0; r < t[e].data.length; r++)
                        if (void 0 !== t[e].data[r][1] && (Array.isArray(t[e].data[r][1]) && 4 === t[e].data[r][1].length && !s ? this.twoDSeries.push(E.parseNumber(t[e].data[r][1][3])) : 5 <= t[e].data[r].length ? this.twoDSeries.push(E.parseNumber(t[e].data[r][4])) : this.twoDSeries.push(E.parseNumber(t[e].data[r][1])), a.dataFormatXNumeric = !0), "datetime" === i.xaxis.type) {
                            var o = new Date(t[e].data[r][0]);
                            o = new Date(o).getTime(), this.twoDSeriesX.push(o)
                        } else this.twoDSeriesX.push(t[e].data[r][0]);
                    for (var n = 0; n < t[e].data.length; n++) void 0 !== t[e].data[n][2] && (this.threeDSeries.push(t[e].data[n][2]), a.isDataXYZ = !0)
                }
            }, {
                key: "handleFormatXY",
                value: function (t, e) {
                    var i = this.w.config,
                        a = this.w.globals,
                        s = new R(this.ctx),
                        r = e; - 1 < a.collapsedSeriesIndices.indexOf(e) && (r = this.activeSeriesIndex);
                    for (var o = 0; o < t[e].data.length; o++) void 0 !== t[e].data[o].y && (Array.isArray(t[e].data[o].y) ? this.twoDSeries.push(E.parseNumber(t[e].data[o].y[t[e].data[o].y.length - 1])) : this.twoDSeries.push(E.parseNumber(t[e].data[o].y))), void 0 !== t[e].data[o].goals && Array.isArray(t[e].data[o].goals) ? (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(t[e].data[o].goals)) : (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(null));
                    for (var n = 0; n < t[r].data.length; n++) {
                        var l = "string" == typeof t[r].data[n].x,
                            h = Array.isArray(t[r].data[n].x),
                            c = !h && !!s.isValidDate(t[r].data[n].x.toString());
                        if (l || c)
                            if (
                                l || i.xaxis.convertedCatToNumeric) {
                                var d = a.isBarHorizontal && a.isRangeData;
                                "datetime" !== i.xaxis.type || d ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[r].data[n].x)) : this.twoDSeriesX.push(s.parseDate(t[r].data[n].x))
                            } else "datetime" === i.xaxis.type ? this.twoDSeriesX.push(s.parseDate(t[r].data[n].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[r].data[n].x)));
                        else h ? this.fallbackToCategory = !0 : (a.isXNumeric = !0, a.dataFormatXNumeric = !0), this.twoDSeriesX.push(t[r].data[n].x)
                    }
                    if (t[e].data[0] && void 0 !== t[e].data[0].z) {
                        for (var g = 0; g < t[e].data.length; g++) this.threeDSeries.push(t[e].data[g].z);
                        a.isDataXYZ = !0
                    }
                }
            }, {
                key: "handleRangeData",
                value: function (t, e) {
                    var i = this.w.config,
                        a = this.w.globals,
                        s = {};
                    return this.isFormat2DArray() ? s = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", t, e)), a.seriesRangeStart.push(s.start), a.seriesRangeEnd.push(s.end), "datetime" === i.xaxis.type && a.seriesRangeBarTimeline.push(s.rangeUniques), a.seriesRangeBarTimeline.forEach(function (t) {
                        t && t.forEach(function (o) {
                            o.y.forEach(function (t, e) {
                                for (var i = 0; i < o.y.length; i++)
                                    if (e !== i) {
                                        var a = t.y1,
                                            s = t.y2,
                                            r = o.y[i].y1;
                                        a <= o.y[i].y2 && r <= s && (o.overlaps.indexOf(t.rangeName) < 0 && o.overlaps.push(t.rangeName), o.overlaps.indexOf(o.y[i].rangeName) < 0 && o.overlaps.push(o.y[i].rangeName))
                                    }
                            })
                        })
                    }), s
                }
            }, {
                key: "handleCandleStickBoxData",
                value: function (t, e) {
                    var i = this.w.globals,
                        a = {};
                    return this.isFormat2DArray() ? a = this.handleCandleStickBoxDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e] = a.o, i.seriesCandleH[e] = a.h, i.seriesCandleM[e] = a.m, i.seriesCandleL[e] = a.l, i.seriesCandleC[e] = a.c, a
                }
            }, {
                key: "handleRangeDataFormat",
                value: function (t, r, o) {
                    var n = [],
                        l = [],
                        h = r[o].data.filter(function (e, t, i) {
                            return t === i.findIndex(function (t) {
                                return t.x === e.x
                            })
                        }).map(function (t) {
                            return {
                                x: t.x,
                                overlaps: [],
                                y: []
                            }
                        }),
                        e = "Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",
                        i = new S(this.ctx).getActiveConfigSeriesIndex();
                    if ("array" === t) {
                        if (2 !== r[i].data[0][1].length) throw new Error(e);
                        for (var a = 0; a < r[o].data.length; a++) n.push(r[o].data[a][1][0]), l.push(r[o].data[a][1][1])
                    } else if ("xy" === t) {
                        if (2 !== r[i].data[0].y.length) throw new Error(e);
                        for (var s = function (t) {
                            var e = E.randomId(),
                                i = r[o].data[t].x,
                                a = {
                                    y1: r[o].data[t].y[0],
                                    y2: r[o].data[t].y[1],
                                    rangeName: e
                                };
                            r[o].data[t].rangeName = e;
                            var s = h.findIndex(function (t) {
                                return t.x === i
                            });
                            h[s].y.push(a), n.push(a.y1), l.push(a.y2)
                        }, c = 0; c < r[o].data.length; c++) s(c)
                    }
                    return {
                        start: n,
                        end: l,
                        rangeUniques: h
                    }
                }
            }, {
                key: "handleCandleStickBoxDataFormat",
                value: function (t, e, i) {
                    var a = this.w,
                        s = "boxPlot" === a.config.chart.type || "boxPlot" === a.config.series[i].type,
                        r = [],
                        o = [],
                        n = [],
                        l = [],
                        h = [];
                    if ("array" === t)
                        if (s && 6 === e[i].data[0].length || !s && 5 === e[i].data[0].length)
                            for (var c = 0; c < e[i].data.length; c++) r.push(e[i].data[c][1]), o.push(e[i].data[c][2]), s ? (n.push(e[i].data[c][3]), l.push(e[i].data[c][4]), h.push(e[i].data[c][5])) : (l.push(e[i].data[c][3]), h.push(e[i].data[c][4]));
                        else
                            for (var d = 0; d < e[i].data.length; d++) Array.isArray(e[i].data[d][1]) && (r.push(e[i].data[d][1][0]), o.push(e[i].data[d][1][1]), s ? (n.push(e[i].data[d][1][2]), l.push(e[i].data[d][1][3]), h.push(e[i].data[d][1][4])) : (l.push(e[i].data[d][1][2]), h.push(e[i].data[d][1][3])));
                    else if ("xy" === t)
                        for (var g = 0; g < e[i].data.length; g++) Array.isArray(e[i].data[g].y) && (r.push(e[i].data[g].y[0]), o.push(e[i].data[g].y[1]), s ? (n.push(e[i].data[g].y[2]), l.push(e[i].data[g].y[3]), h.push(e[i].data[g].y[4])) : (l.push(e[i].data[g].y[2]), h.push(e[i].data[g].y[3])));
                    return {
                        o: r,
                        h: o,
                        m: n,
                        l: l,
                        c: h
                    }
                }
            }, {
                key: "parseDataAxisCharts",
                value: function (t, e) {
                    var i = this,
                        a = 1 < arguments.length && void 0 !== e ? arguments[1] : this.ctx,
                        s = this.w.config,
                        r = this.w.globals,
                        o = new R(a),
                        n = 0 < s.labels.length ? s.labels.slice() : s.xaxis.categories.slice();
                    r.isTimelineBar = "rangeBar" === s.chart.type && "datetime" === s.xaxis.type;
                    for (var l = function () {
                        for (var t = 0; t < n.length; t++)
                            if ("string" == typeof n[t]) {
                                if (!o.isValidDate(n[t])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                                i.twoDSeriesX.push(o.parseDate(n[t]))
                            } else i.twoDSeriesX.push(n[t])
                    }, h = 0; h < t.length; h++) {
                        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[h].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                        if ("rangeBar" !== s.chart.type && "rangeArea" !== s.chart.type && "rangeBar" !== t[h].type && "rangeArea" !== t[h].type || (r.isRangeData = !0, this.handleRangeData(t, h)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, h) : this.isFormatXY() && this.handleFormatXY(t, h), "candlestick" !== s.chart.type && "candlestick" !== t[h].type && "boxPlot" !== s.chart.type && "boxPlot" !== t[h].type || this.handleCandleStickBoxData(t, h), r.series.push(this.twoDSeries), r.labels.push(this.twoDSeriesX), r.seriesX.push(this.twoDSeriesX), r.seriesGoals = this.seriesGoals, h !== this.activeSeriesIndex || this.fallbackToCategory || (r.isXNumeric = !0);
                        else {
                            "datetime" === s.xaxis.type ? (r.isXNumeric = !0, l(), r.seriesX.push(this.twoDSeriesX)) : "numeric" === s.xaxis.type && (r.isXNumeric = !0, 0 < n.length && (this.twoDSeriesX = n, r.seriesX.push(this.twoDSeriesX))), r.labels.push(this.twoDSeriesX);
                            var c = t[h].data.map(function (t) {
                                return E.parseNumber(t)
                            });
                            r.series.push(c)
                        }
                        r.seriesZ.push(this.threeDSeries), void 0 !== t[h].name ? r.seriesNames.push(t[h].name) : r.seriesNames.push("series-" + parseInt(h + 1, 10)), void 0 !== t[h].color ? r.seriesColors.push(t[h].color) : r.seriesColors.push(void 0)
                    }
                    return this.w
                }
            }, {
                key: "parseDataNonAxisCharts",
                value: function (t) {
                    var e = this.w.globals,
                        i = this.w.config;
                    e.series = t.slice(), e.seriesNames = i.labels.slice();
                    for (var a = 0; a < e.series.length; a++) void 0 === e.seriesNames[a] && e.seriesNames.push("series-" + (a + 1));
                    return this.w
                }
            }, {
                key: "handleExternalLabelsData",
                value: function (t) {
                    var e = this.w.config,
                        i = this.w.globals;
                    0 < e.xaxis.categories.length ? i.labels = e.xaxis.categories : 0 < e.labels.length ? i.labels = e.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRangeBarTimeline.length && (i.seriesRangeBarTimeline.map(function (t) {
                        t.forEach(function (t) {
                            i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x)
                        })
                    }), i.labels = i.labels.filter(function (t, e, i) {
                        return i.indexOf(t) === e
                    })), e.xaxis.convertedCatToNumeric && (new D(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))) : this._generateExternalLabels(t)
                }
            }, {
                key: "_generateExternalLabels",
                value: function (t) {
                    var e = this.w.globals,
                        i = this.w.config,
                        a = [];
                    if (e.axisCharts) {
                        if (0 < e.series.length)
                            for (var s = 0; s < e.series[e.maxValsInArrayIndex].length; s++) a.push(s + 1);
                        e.seriesX = [];
                        for (var r = 0; r < t.length; r++) e.seriesX.push(a);
                        e.isXNumeric = !0
                    }
                    if (0 === a.length) {
                        a = e.axisCharts ? [] : e.series.map(function (t, e) {
                            return e + 1
                        });
                        for (var o = 0; o < t.length; o++) e.seriesX.push(a)
                    }
                    e.labels = a, i.xaxis.convertedCatToNumeric && (e.categoryLabels = a.map(function (t) {
                        return i.xaxis.labels.formatter(t)
                    })), e.noLabelsProvided = !0
                }
            }, {
                key: "parseData",
                value: function (t) {
                    var e = this.w,
                        i = e.config,
                        a = e.globals;
                    if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? this.parseDataAxisCharts(t) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar" === i.chart.type && i.chart.stacked) {
                        var s = new S(this.ctx);
                        a.series = s.setNullSeriesToZeroValues(a.series)
                    }
                    this.coreUtils.getSeriesTotals(), a.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t);
                    for (var r = this.coreUtils.getCategoryLabels(a.labels), o = 0; o < r.length; o++)
                        if (Array.isArray(r[o])) {
                            a.isMultiLineX = !0;
                            break
                        }
                }
            }, {
                key: "excludeCollapsedSeriesInYAxis",
                value: function () {
                    var e = this,
                        i = this.w;
                    i.globals.ignoreYAxisIndexes = i.globals.collapsedSeries.map(function (t) {
                        if (e.w.globals.isMultipleYAxis && !i.config.chart.stacked) return t.index
                    })
                }
            }]), e
        }(),
        V = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM"
            }
            return o(e, [{
                key: "xLabelFormat",
                value: function (t, e, i, a) {
                    var s = this.w;
                    if ("datetime" !== s.config.xaxis.type || void 0 !== s.config.xaxis.labels.formatter || void 0 !== s.config.tooltip.x.formatter) return t(e, i, a);
                    var r = new R(this.ctx);
                    return r.formatDate(r.getDate(e), s.config.tooltip.x.format)
                }
            }, {
                key: "defaultGeneralFormatter",
                value: function (t) {
                    return Array.isArray(t) ? t.map(function (t) {
                        return t
                    }) : t
                }
            }, {
                key: "defaultYFormatter",
                value: function (t, e, i) {
                    var a = this.w;
                    return E.isNumber(t) && (t = 0 !== a.globals.yValueDecimal ? t.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : a.globals.yValueDecimal) : a.globals.maxYArr[i] - a.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0)), t
                }
            }, {
                key: "setLabelFormatters",
                value: function () {
                    var a = this,
                        s = this.w;
                    return s.globals.xaxisTooltipFormatter = function (t) {
                        return a.defaultGeneralFormatter(t)
                    }, s.globals.ttKeyFormatter = function (t) {
                        return a.defaultGeneralFormatter(t)
                    }, s.globals.ttZFormatter = function (t) {
                        return t
                    }, s.globals.legendFormatter = function (t) {
                        return a.defaultGeneralFormatter(t)
                    }, void 0 !== s.config.xaxis.labels.formatter ? s.globals.xLabelFormatter = s.config.xaxis.labels.formatter : s.globals.xLabelFormatter = function (t) {
                        if (E.isNumber(t)) {
                            if (s.config.xaxis.convertedCatToNumeric || "numeric" !== s.config.xaxis.type) return s.globals.isBarHorizontal && s.globals.maxY - s.globals.minYArr < 4 ? t.toFixed(1) : t.toFixed(0);
                            if (E.isNumber(s.config.xaxis.decimalsInFloat)) return t.toFixed(s.config.xaxis.decimalsInFloat);
                            var e = s.globals.maxX - s.globals.minX;
                            return 0 < e && e < 100 ? t.toFixed(1) : t.toFixed(0)
                        }
                        return t
                    }, "function" == typeof s.config.tooltip.x.formatter ? s.globals.ttKeyFormatter = s.config.tooltip.x.formatter : s.globals.ttKeyFormatter = s.globals.xLabelFormatter, "function" == typeof s.config.xaxis.tooltip.formatter && (s.globals.xaxisTooltipFormatter = s.config.xaxis.tooltip.formatter), (Array.isArray(s.config.tooltip.y) || void 0 !== s.config.tooltip.y.formatter) && (s.globals.ttVal = s.config.tooltip.y), void 0 !== s.config.tooltip.z.formatter && (s.globals.ttZFormatter = s.config.tooltip.z.formatter), void 0 !== s.config.legend.formatter && (s.globals.legendFormatter = s.config.legend.formatter), s.config.yaxis.forEach(function (e, i) {
                        void 0 !== e.labels.formatter ? s.globals.yLabelFormatters[i] = e.labels.formatter : s.globals.yLabelFormatters[i] = function (t) {
                            return s.globals.xyCharts ? Array.isArray(t) ? t.map(function (t) {
                                return a.defaultYFormatter(t, e, i)
                            }) : a.defaultYFormatter(t, e, i) : t
                        }
                    }), s.globals
                }
            }, {
                key: "heatmapLabelFormatters",
                value: function () {
                    var t = this.w;
                    if ("heatmap" === t.config.chart.type) {
                        t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
                        var e = t.globals.seriesNames.reduce(function (t, e) {
                            return t.length > e.length ? t : e
                        }, 0);
                        t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e
                    }
                }
            }]), e
        }(),
        G = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "getLabel",
                value: function (t, i, e, a, s, r) {
                    var o = 4 < arguments.length && void 0 !== s ? arguments[4] : [],
                        n = 5 < arguments.length && void 0 !== r ? arguments[5] : "12px",
                        l = this.w,
                        h = void 0 === t[a] ? "" : t[a],
                        c = h,
                        d = l.globals.xLabelFormatter,
                        g = l.config.xaxis.labels.formatter,
                        u = !1,
                        p = h;
                    c = new V(this.ctx).xLabelFormat(d, h, p, {
                        i: a,
                        dateFormatter: new R(this.ctx).formatDate,
                        w: l
                    }), void 0 !== g && (c = g(h, t[a], {
                        i: a,
                        dateFormatter: new R(this.ctx).formatDate,
                        w: l
                    }));
                    var f = function (t) {
                        var e = null;
                        return i.forEach(function (t) {
                            "month" === t.unit ? e = "year" : "day" === t.unit ? e = "month" : "hour" === t.unit ? e = "day" : "minute" === t.unit && (e = "hour")
                        }), e === t
                    };
                    0 < i.length ? (u = f(i[a].unit), e = i[a].position, c = i[a].value) : "datetime" === l.config.xaxis.type && void 0 === g && (c = ""), void 0 === c && (c = ""), c = Array.isArray(c) ? c : c.toString();
                    var x = new F(this.ctx),
                        b = {};
                    b = l.globals.rotateXLabels ? x.getTextRects(c, parseInt(n, 10), null, "rotate(".concat(l.config.xaxis.labels.rotate, " 0 0)"), !1) : x.getTextRects(c, parseInt(n, 10));
                    var m = !l.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
                    return !Array.isArray(c) && (0 === c.indexOf("NaN") || 0 === c.toLowerCase().indexOf("invalid") || 0 <= c.toLowerCase().indexOf("infinity") || 0 <= o.indexOf(c) && m) && (c = ""), {
                        x: e,
                        text: c,
                        textRect: b,
                        isBold: u
                    }
                }
            }, {
                key: "checkLabelBasedOnTickamount",
                value: function (t, e, i) {
                    var a = this.w,
                        s = a.config.xaxis.tickAmount;
                    return "dataPoints" === s && (s = Math.round(a.globals.gridWidth / 120)), i < s || t % Math.round(i / (s + 1)) == 0 || (e.text = ""), e
                }
            }, {
                key: "checkForOverflowingLabels",
                value: function (t, e, i, a, s) {
                    var r = this.w;
                    if (0 === t && r.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && r.globals.skipLastTimelinelabel && (e.text = ""), r.config.xaxis.labels.hideOverlappingLabels && 0 < a.length) {
                        var o = s[s.length - 1];
                        e.x < o.textRect.width / (r.globals.rotateXLabels ? Math.abs(r.config.xaxis.labels.rotate) / 12 : 1.01) + o.x && (e.text = "")
                    }
                    return e
                }
            }, {
                key: "checkForReversedLabels",
                value: function (t, e) {
                    var i = this.w;
                    return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e
                }
            }, {
                key: "isYAxisHidden",
                value: function (t) {
                    var e = this.w,
                        i = new M(this.ctx);
                    return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && -1 === e.globals.collapsedSeriesIndices.indexOf(t)
                }
            }, {
                key: "getYAxisForeColor",
                value: function (t, e) {
                    var i = this.w;
                    return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t
                }
            }, {
                key: "drawYAxisTicks",
                value: function (t, e, i, a, s, r, o) {
                    var n = this.w,
                        l = new F(this.ctx),
                        h = n.globals.translateY;
                    if (a.show && 0 < e) {
                        !0 === n.config.yaxis[s].opposite && (t += a.width);
                        for (var c = e; 0 <= c; c--) {
                            var d = h + e / 10 + n.config.yaxis[s].labels.offsetY - 1;
                            n.globals.isBarHorizontal && (d = r * c), "heatmap" === n.config.chart.type && (d += r / 2);
                            var g = l.drawLine(t + i.offsetX - a.width + a.offsetX, d + a.offsetY, t + i.offsetX + a.offsetX, d + a.offsetY, a.color);
                            o.add(g), h += r
                        }
                    }
                }
            }]), e
        }(),
        _ = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "scaleSvgNode",
                value: function (t, e) {
                    var i = parseFloat(t.getAttributeNS(null, "width")),
                        a = parseFloat(t.getAttributeNS(null, "height"));
                    t.setAttributeNS(null, "width", i * e), t.setAttributeNS(null, "height", a * e), t.setAttributeNS(null, "viewBox", "0 0 " + i + " " + a)
                }
            }, {
                key: "fixSvgStringForIe11",
                value: function (t) {
                    if (!E.isIE11()) return t;
                    var e = 0,
                        i = t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function (t) {
                            return 2 == ++e ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : t
                        });
                    return (i = i.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1")
                }
            }, {
                key: "getSvgString",
                value: function (t) {
                    var e = this.w.globals.dom.Paper.svg();
                    if (1 !== t) {
                        var i = this.w.globals.dom.Paper.node.cloneNode(!0);
                        this.scaleSvgNode(i, t), e = (new XMLSerializer).serializeToString(i)
                    }
                    return this.fixSvgStringForIe11(e)
                }
            }, {
                key: "cleanup",
                value: function () {
                    var t = this.w,
                        e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),
                        i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),
                        a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
                    Array.prototype.forEach.call(a, function (t) {
                        t.setAttribute("width", 0)
                    }), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100))
                }
            }, {
                key: "svgUrl",
                value: function () {
                    this.cleanup();
                    var t = this.getSvgString(),
                        e = new Blob([t], {
                            type: "image/svg+xml;charset=utf-8"
                        });
                    return URL.createObjectURL(e)
                }
            }, {
                key: "dataURI",
                value: function (d) {
                    var g = this;
                    return new Promise(function (i) {
                        var t = g.w,
                            e = d ? d.scale || d.width / t.globals.svgWidth : 1;
                        g.cleanup();
                        var a = document.createElement("canvas");
                        a.width = t.globals.svgWidth * e, a.height = parseInt(t.globals.dom.elWrap.style.height, 10) * e;
                        var s = "transparent" === t.config.chart.background ? "#fff" : t.config.chart.background,
                            r = a.getContext("2d");
                        r.fillStyle = s, r.fillRect(0, 0, a.width * e, a.height * e);
                        var o = g.getSvgString(e);
                        if (window.canvg && E.isIE11()) {
                            var n = window.canvg.Canvg.fromString(r, o, {
                                ignoreClear: !0,
                                ignoreDimensions: !0
                            });
                            n.start();
                            var l = a.msToBlob();
                            n.stop(), i({
                                blob: l
                            })
                        } else {
                            var h = "data:image/svg+xml," + encodeURIComponent(o),
                                c = new Image;
                            c.crossOrigin = "anonymous", c.onload = function () {
                                if (r.drawImage(c, 0, 0), a.msToBlob) {
                                    var t = a.msToBlob();
                                    i({
                                        blob: t
                                    })
                                } else {
                                    var e = a.toDataURL("image/png");
                                    i({
                                        imgURI: e
                                    })
                                }
                            }, c.src = h
                        }
                    })
                }
            }, {
                key: "exportToSVG",
                value: function () {
                    this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar["export"].svg.filename, ".svg")
                }
            }, {
                key: "exportToPng",
                value: function () {
                    var a = this;
                    this.dataURI().then(function (t) {
                        var e = t.imgURI,
                            i = t.blob;
                        i ? navigator.msSaveOrOpenBlob(i, a.w.globals.chartID + ".png") : a.triggerDownload(e, a.w.config.chart.toolbar["export"].png.filename, ".png")
                    })
                }
            }, {
                key: "exportToCSV",
                value: function (t) {
                    var s = this,
                        o = t.series,
                        n = t.columnDelimiter,
                        e = t.lineDelimiter,
                        i = void 0 === e ? "\n" : e,
                        l = this.w,
                        h = [],
                        c = [],
                        a = "data:text/csv;charset=utf-8,\ufeff",
                        d = new B(this.ctx),
                        r = new G(this.ctx),
                        g = function (t) {
                            var e = "";
                            if (l.globals.axisCharts) {
                                if ("category" === l.config.xaxis.type || l.config.xaxis.convertedCatToNumeric)
                                    if (l.globals.isBarHorizontal) {
                                        var i = l.globals.yLabelFormatters[0],
                                            a = new S(s.ctx).getActiveConfigSeriesIndex();
                                        e = i(l.globals.labels[t], {
                                            seriesIndex: a,
                                            dataPointIndex: t,
                                            w: l
                                        })
                                    } else e = r.getLabel(l.globals.labels, l.globals.timescaleLabels, 0, t).text;
                                "datetime" === l.config.xaxis.type && (l.config.xaxis.categories.length ? e = l.config.xaxis.categories[t] : l.config.labels.length && (e = l.config.labels[t]))
                            } else e = l.config.labels[t];
                            return Array.isArray(e) && (e = e.join(" ")), E.isNumber(e) ? e : e.split(n).join("")
                        };
                    h.push(l.config.chart.toolbar["export"].csv.headerCategory), o.map(function (t, e) {
                        var i = t.name ? t.name : "series-".concat(e);
                        l.globals.axisCharts && h.push(i.split(n).join("") ? i.split(n).join("") : "series-".concat(e))
                    }), l.globals.axisCharts || (h.push(l.config.chart.toolbar["export"].csv.headerValue), c.push(h.join(n))), o.map(function (t, e) {
                        l.globals.axisCharts ? function (t, e) {
                            if (h.length && 0 === e && c.push(h.join(n)), t.data && t.data.length)
                                for (var i = 0; i < t.data.length; i++) {
                                    h = [];
                                    var a = g(i);
                                    if (a || (d.isFormatXY() ? a = o[e].data[i].x : d.isFormat2DArray() && (a = o[e].data[i] ? o[e].data[i][0] : "")), 0 === e) {
                                        h.push((r = a, "datetime" === l.config.xaxis.type && 10 <= String(r).length ? l.config.chart.toolbar["export"].csv.dateFormatter(a) : E.isNumber(a) ? a : a.split(n).join("")));
                                        for (var s = 0; s < l.globals.series.length; s++) h.push(l.globals.series[s][i])
                                    } ("candlestick" === l.config.chart.type || t.type && "candlestick" === t.type) && (h.pop(), h.push(l.globals.seriesCandleO[e][i]), h.push(l.globals.seriesCandleH[e][i]), h.push(l.globals.seriesCandleL[e][i]), h.push(l.globals.seriesCandleC[e][i])), ("boxPlot" === l.config.chart.type || t.type && "boxPlot" === t.type) && (h.pop(), h.push(l.globals.seriesCandleO[e][i]), h.push(l.globals.seriesCandleH[e][i]), h.push(l.globals.seriesCandleM[e][i]), h.push(l.globals.seriesCandleL[e][i]), h.push(l.globals.seriesCandleC[e][i])), "rangeBar" === l.config.chart.type && (h.pop(), h.push(l.globals.seriesRangeStart[e][i]), h.push(l.globals.seriesRangeEnd[e][i])), h.length && c.push(h.join(n))
                                }
                            var r
                        }(t, e) : ((h = []).push(l.globals.labels[e].split(n).join("")), h.push(l.globals.series[e]), c.push(h.join(n)))
                    }), a += c.join(i), this.triggerDownload(encodeURI(a), l.config.chart.toolbar["export"].csv.filename, ".csv")
                }
            }, {
                key: "triggerDownload",
                value: function (t, e, i) {
                    var a = document.createElement("a");
                    a.href = t, a.download = (e || this.w.globals.chartID) + i, document.body.appendChild(a), a.click(), document.body.removeChild(a)
                }
            }]), e
        }(),
        j = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.axesUtils = new G(t), this.xaxisLabels = e.globals.labels.slice(), 0 < e.globals.timescaleLabels.length && !e.globals.isBarHorizontal && (this.xaxisLabels = e.globals.timescaleLabels.slice()), e.config.xaxis.overwriteCategories && (this.xaxisLabels = e.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === e.config.xaxis.position ? this.offY = 0 : this.offY = e.globals.gridHeight + 1, this.offY = this.offY + e.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === e.config.chart.type && e.config.plotOptions.bar.horizontal, this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.xaxisBorderWidth = e.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = e.config.yaxis[0].axisBorder.width.toString()), -1 < this.xaxisBorderWidth.indexOf("%") ? this.xaxisBorderWidth = e.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = e.config.xaxis.axisBorder.height, this.yaxis = e.config.yaxis[0]
            }
            return o(i, [{
                key: "drawXaxis",
                value: function () {
                    var o, n = this,
                        l = this.w,
                        h = new F(this.ctx),
                        t = h.group({
                            "class": "apexcharts-xaxis",
                            transform: "translate(".concat(l.config.xaxis.offsetX, ", ").concat(l.config.xaxis.offsetY, ")")
                        }),
                        c = h.group({
                            "class": "apexcharts-xaxis-texts-g",
                            transform: "translate(".concat(l.globals.translateXAxisX, ", ").concat(l.globals.translateXAxisY, ")")
                        });
                    t.add(c);
                    for (var d = l.globals.padHorizontal, g = [], e = 0; e < this.xaxisLabels.length; e++) g.push(this.xaxisLabels[e]);
                    var u = g.length;
                    if (l.globals.isXNumeric) {
                        var i = 1 < u ? u - 1 : u;
                        o = l.globals.gridWidth / i, d = d + o / 2 + l.config.xaxis.labels.offsetX
                    } else o = l.globals.gridWidth / g.length, d = d + o + l.config.xaxis.labels.offsetX;
                    for (var a = function (t) {
                        var e = d - o / 2 + l.config.xaxis.labels.offsetX;
                        0 === t && 1 === u && o / 2 === d && 1 === l.globals.dataPoints && (e = l.globals.gridWidth / 2);
                        var i = n.axesUtils.getLabel(g, l.globals.timescaleLabels, e, t, n.drawnLabels, n.xaxisFontSize),
                            a = 28;
                        if (l.globals.rotateXLabels && (a = 22), (i = void 0 !== l.config.xaxis.tickAmount && "dataPoints" !== l.config.xaxis.tickAmount && "datetime" !== l.config.xaxis.type ? n.axesUtils.checkLabelBasedOnTickamount(t, i, u) : n.axesUtils.checkForOverflowingLabels(t, i, u, n.drawnLabels, n.drawnLabelsRects)).text && l.globals.xaxisLabelsCount++, l.config.xaxis.labels.show) {
                            var s = h.drawText({
                                x: i.x,
                                y: n.offY + l.config.xaxis.labels.offsetY + a - ("top" === l.config.xaxis.position ? l.globals.xAxisHeight + l.config.xaxis.axisTicks.height - 2 : 0),
                                text: i.text,
                                textAnchor: "middle",
                                fontWeight: i.isBold ? 600 : l.config.xaxis.labels.style.fontWeight,
                                fontSize: n.xaxisFontSize,
                                fontFamily: n.xaxisFontFamily,
                                foreColor: Array.isArray(n.xaxisForeColors) ? l.config.xaxis.convertedCatToNumeric ? n.xaxisForeColors[l.globals.minX + t - 1] : n.xaxisForeColors[t] : n.xaxisForeColors,
                                isPlainText: !1,
                                cssClass: "apexcharts-xaxis-label " + l.config.xaxis.labels.style.cssClass
                            });
                            c.add(s);
                            var r = document.createElementNS(l.globals.SVGNS, "title");
                            r.textContent = Array.isArray(i.text) ? i.text.join(" ") : i.text, s.node.appendChild(r), "" !== i.text && (n.drawnLabels.push(i.text), n.drawnLabelsRects.push(i))
                        }
                        d += o
                    }, s = 0; s <= u - 1; s++) a(s);
                    if (void 0 !== l.config.xaxis.title.text) {
                        var r = h.group({
                            "class": "apexcharts-xaxis-title"
                        }),
                            p = h.drawText({
                                x: l.globals.gridWidth / 2 + l.config.xaxis.title.offsetX,
                                y: this.offY + parseFloat(this.xaxisFontSize) + l.globals.xAxisLabelsHeight + l.config.xaxis.title.offsetY,
                                text: l.config.xaxis.title.text,
                                textAnchor: "middle",
                                fontSize: l.config.xaxis.title.style.fontSize,
                                fontFamily: l.config.xaxis.title.style.fontFamily,
                                fontWeight: l.config.xaxis.title.style.fontWeight,
                                foreColor: l.config.xaxis.title.style.color,
                                cssClass: "apexcharts-xaxis-title-text " + l.config.xaxis.title.style.cssClass
                            });
                        r.add(p), t.add(r)
                    }
                    if (l.config.xaxis.axisBorder.show) {
                        var f = l.globals.barPadForNumericAxis,
                            x = h.drawLine(l.globals.padHorizontal + l.config.xaxis.axisBorder.offsetX - f, this.offY, this.xaxisBorderWidth + f, this.offY, l.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        t.add(x)
                    }
                    return t
                }
            }, {
                key: "drawXaxisInversed",
                value: function (n) {
                    var l, h, c = this,
                        d = this.w,
                        g = new F(this.ctx),
                        t = d.config.yaxis[0].opposite ? d.globals.translateYAxisX[n] : 0,
                        e = g.group({
                            "class": "apexcharts-yaxis apexcharts-xaxis-inversed",
                            rel: n
                        }),
                        u = g.group({
                            "class": "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
                            transform: "translate(" + t + ", 0)"
                        });
                    e.add(u);
                    var p = [];
                    if (d.config.yaxis[n].show)
                        for (var i = 0; i < this.xaxisLabels.length; i++) p.push(this.xaxisLabels[i]);
                    l = d.globals.gridHeight / p.length, h = -l / 2.2;
                    var f = d.globals.yLabelFormatters[0],
                        x = d.config.yaxis[0].labels;
                    if (x.show)
                        for (var a = function (t) {
                            var e = void 0 === p[t] ? "" : p[t];
                            e = f(e, {
                                seriesIndex: n,
                                dataPointIndex: t,
                                w: d
                            });
                            var i = c.axesUtils.getYAxisForeColor(x.style.colors, n),
                                a = 0;
                            Array.isArray(e) && (a = e.length / 2 * parseInt(x.style.fontSize, 10));
                            var s = g.drawText({
                                x: x.offsetX - 15,
                                y: h + l + x.offsetY - a,
                                text: e,
                                textAnchor: c.yaxis.opposite ? "start" : "end",
                                foreColor: Array.isArray(i) ? i[t] : i,
                                fontSize: x.style.fontSize,
                                fontFamily: x.style.fontFamily,
                                fontWeight: x.style.fontWeight,
                                isPlainText: !1,
                                cssClass: "apexcharts-yaxis-label " + x.style.cssClass
                            });
                            u.add(s);
                            var r = document.createElementNS(d.globals.SVGNS, "title");
                            if (r.textContent = Array.isArray(e) ? e.join(" ") : e, s.node.appendChild(r), 0 !== d.config.yaxis[n].labels.rotate) {
                                var o = g.rotateAroundCenter(s.node);
                                s.node.setAttribute("transform", "rotate(".concat(d.config.yaxis[n].labels.rotate, " 0 ").concat(o.y, ")"))
                            }
                            h += l
                        }, s = 0; s <= p.length - 1; s++) a(s);
                    if (void 0 !== d.config.yaxis[0].title.text) {
                        var r = g.group({
                            "class": "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
                            transform: "translate(" + t + ", 0)"
                        }),
                            o = g.drawText({
                                x: 0,
                                y: d.globals.gridHeight / 2,
                                text: d.config.yaxis[0].title.text,
                                textAnchor: "middle",
                                foreColor: d.config.yaxis[0].title.style.color,
                                fontSize: d.config.yaxis[0].title.style.fontSize,
                                fontWeight: d.config.yaxis[0].title.style.fontWeight,
                                fontFamily: d.config.yaxis[0].title.style.fontFamily,
                                cssClass: "apexcharts-yaxis-title-text " + d.config.yaxis[0].title.style.cssClass
                            });
                        r.add(o), e.add(r)
                    }
                    var b = 0;
                    this.isCategoryBarHorizontal && d.config.yaxis[0].opposite && (b = d.globals.gridWidth);
                    var m = d.config.xaxis.axisBorder;
                    if (m.show) {
                        var v = g.drawLine(d.globals.padHorizontal + m.offsetX + b, 1 + m.offsetY, d.globals.padHorizontal + m.offsetX + b, d.globals.gridHeight + m.offsetY, m.color, 0);
                        e.add(v)
                    }
                    return d.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b, p.length, d.config.yaxis[0].axisBorder, d.config.yaxis[0].axisTicks, 0, l, e), e
                }
            }, {
                key: "drawXaxisTicks",
                value: function (t, e) {
                    var i = this.w,
                        a = t;
                    if (!(t < 0 || t - 2 > i.globals.gridWidth)) {
                        var s = this.offY + i.config.xaxis.axisTicks.offsetY,
                            r = s + i.config.xaxis.axisTicks.height;
                        if ("top" === i.config.xaxis.position && (r = s - i.config.xaxis.axisTicks.height), i.config.xaxis.axisTicks.show) {
                            var o = new F(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, s + i.config.xaxis.offsetY, a + i.config.xaxis.axisTicks.offsetX, r + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
                            e.add(o), o.node.classList.add("apexcharts-xaxis-tick")
                        }
                    }
                }
            }, {
                key: "getXAxisTicksPositions",
                value: function () {
                    var t = this.w,
                        e = [],
                        i = this.xaxisLabels.length,
                        a = t.globals.padHorizontal;
                    if (0 < t.globals.timescaleLabels.length)
                        for (var s = 0; s < i; s++) a = this.xaxisLabels[s].position, e.push(a);
                    else
                        for (var r = i, o = 0; o < r; o++) {
                            var n = r;
                            t.globals.isXNumeric && "bar" !== t.config.chart.type && (n -= 1), a += t.globals.gridWidth / n, e.push(a)
                        }
                    return e
                }
            }, {
                key: "xAxisLabelCorrections",
                value: function () {
                    var a = this.w,
                        s = new F(this.ctx),
                        t = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                        r = a.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),
                        e = a.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                        i = a.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
                    if (a.globals.rotateXLabels || a.config.xaxis.labels.rotateAlways)
                        for (var o = 0; o < r.length; o++) {
                            var n = s.rotateAroundCenter(r[o]);
                            n.y = n.y - 1, n.x = n.x + 1, r[o].setAttribute("transform", "rotate(".concat(a.config.xaxis.labels.rotate, " ").concat(n.x, " ").concat(n.y, ")")), r[o].setAttribute("text-anchor", "end"), t.setAttribute("transform", "translate(0, ".concat(-10, ")"));
                            var l = r[o].childNodes;
                            a.config.xaxis.labels.trim && Array.prototype.forEach.call(l, function (t) {
                                s.placeTextWithEllipsis(t, t.textContent, a.globals.xAxisLabelsHeight - ("bottom" === a.config.legend.position ? 20 : 10))
                            })
                        } else ! function () {
                            for (var e = a.globals.gridWidth / (a.globals.labels.length + 1), t = 0; t < r.length; t++) {
                                var i = r[t].childNodes;
                                a.config.xaxis.labels.trim && "datetime" !== a.config.xaxis.type && Array.prototype.forEach.call(i, function (t) {
                                    s.placeTextWithEllipsis(t, t.textContent, e)
                                })
                            }
                        }();
                    if (0 < e.length) {
                        var h = e[e.length - 1].getBBox(),
                            c = e[0].getBBox();
                        h.x < -20 && e[e.length - 1].parentNode.removeChild(e[e.length - 1]), c.x + c.width > a.globals.gridWidth && !a.globals.isBarHorizontal && e[0].parentNode.removeChild(e[0]);
                        for (var d = 0; d < i.length; d++) s.placeTextWithEllipsis(i[d], i[d].textContent, a.config.yaxis[0].labels.maxWidth - 2 * parseFloat(a.config.yaxis[0].title.style.fontSize) - 20)
                    }
                }
            }]), i
        }(),
        U = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.xaxisLabels = e.globals.labels.slice(), this.axesUtils = new G(t), this.isTimelineBar = "datetime" === e.config.xaxis.type && e.globals.seriesRangeBarTimeline.length, 0 < e.globals.timescaleLabels.length && (this.xaxisLabels = e.globals.timescaleLabels.slice())
            }
            return o(i, [{
                key: "drawGridArea",
                value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? arguments[0] : null,
                        i = this.w,
                        a = new F(this.ctx);
                    null === e && (e = a.group({
                        "class": "apexcharts-grid"
                    }));
                    var s = a.drawLine(i.globals.padHorizontal, 1, i.globals.padHorizontal, i.globals.gridHeight, "transparent"),
                        r = a.drawLine(i.globals.padHorizontal, i.globals.gridHeight, i.globals.gridWidth, i.globals.gridHeight, "transparent");
                    return e.add(r), e.add(s), e
                }
            }, {
                key: "drawGrid",
                value: function () {
                    var t = null;
                    return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t
                }
            }, {
                key: "createGridMask",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = new F(this.ctx),
                        a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
                    if (Array.isArray(t.config.stroke.width)) {
                        var s = 0;
                        t.config.stroke.width.forEach(function (t) {
                            s = Math.max(s, t)
                        }), a = s
                    }
                    e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e.cuid)), e.dom.elNonForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e.cuid));
                    var r = t.config.chart.type,
                        o = 0,
                        n = 0;
                    ("bar" === r || "rangeBar" === r || "candlestick" === r || "boxPlot" === r || 0 < t.globals.comboBarCount) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (o = t.config.grid.padding.left, n = t.config.grid.padding.right, e.barPadForNumericAxis > o && (o = e.barPadForNumericAxis, n = e.barPadForNumericAxis)), e.dom.elGridRect = i.drawRect(-a / 2 - o - 2, -a / 2, e.gridWidth + a + n + o + 4, e.gridHeight + a, 0, "#fff"), new M(this).getLargestMarkerSize();
                    var l = t.globals.markers.largestSize + 1;
                    e.dom.elGridRectMarker = i.drawRect(2 * -l, 2 * -l, e.gridWidth + 4 * l, e.gridHeight + 4 * l, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
                    var h = e.dom.baseEl.querySelector("defs");
                    h.appendChild(e.dom.elGridRectMask), h.appendChild(e.dom.elForecastMask), h.appendChild(e.dom.elNonForecastMask), h.appendChild(e.dom.elGridRectMarkerMask)
                }
            }, {
                key: "_drawGridLines",
                value: function (t) {
                    var e = t.i,
                        i = t.x1,
                        a = t.y1,
                        s = t.x2,
                        r = t.y2,
                        o = t.xCount,
                        n = t.parent,
                        l = this.w;
                    0 === e && l.globals.skipFirstTimelinelabel || e === o - 1 && l.globals.skipLastTimelinelabel && !l.config.xaxis.labels.formatter || "radar" === l.config.chart.type || (l.config.grid.xaxis.lines.show && this._drawGridLine({
                        x1: i,
                        y1: a,
                        x2: s,
                        y2: r,
                        parent: n
                    }), new j(this.ctx).drawXaxisTicks(i, this.elg))
                }
            }, {
                key: "_drawGridLine",
                value: function (t) {
                    var e = t.x1,
                        i = t.y1,
                        a = t.x2,
                        s = t.y2,
                        r = t.parent,
                        o = this.w,
                        n = r.node.classList.contains("apexcharts-gridlines-horizontal"),
                        l = o.config.grid.strokeDashArray,
                        h = o.globals.barPadForNumericAxis,
                        c = new F(this).drawLine(e - (n ? h : 0), i, a + (n ? h : 0), s, o.config.grid.borderColor, l);
                    c.node.classList.add("apexcharts-gridline"), r.add(c)
                }
            }, {
                key: "_drawGridBandRect",
                value: function (t) {
                    var e = t.c,
                        i = t.x1,
                        a = t.y1,
                        s = t.x2,
                        r = t.y2,
                        o = t.type,
                        n = this.w,
                        l = new F(this.ctx),
                        h = n.globals.barPadForNumericAxis;
                    if ("column" !== o || "datetime" !== n.config.xaxis.type) {
                        var c = n.config.grid[o].colors[e],
                            d = l.drawRect(i - ("row" === o ? h : 0), a, s + ("row" === o ? 2 * h : 0), r, 0, c, n.config.grid[o].opacity);
                        this.elg.add(d), d.attr("clip-path", "url(#gridRectMask".concat(n.globals.cuid, ")")), d.node.classList.add("apexcharts-grid-".concat(o))
                    }
                }
            }, {
                key: "_drawXYLines",
                value: function (t) {
                    var n = this,
                        l = t.xCount,
                        e = t.tickAmount,
                        h = this.w;
                    if (h.config.grid.xaxis.lines.show || h.config.xaxis.axisTicks.show) {
                        var i, a = h.globals.padHorizontal,
                            s = h.globals.gridHeight;
                        h.globals.timescaleLabels.length ? function (t) {
                            for (var e = t.xC, i = t.x1, a = t.y1, s = t.x2, r = t.y2, o = 0; o < e; o++) i = n.xaxisLabels[o].position, s = n.xaxisLabels[o].position, n._drawGridLines({
                                i: o,
                                x1: i,
                                y1: a,
                                x2: s,
                                y2: r,
                                xCount: l,
                                parent: n.elgridLinesV
                            })
                        }({
                            xC: l,
                            x1: a,
                            y1: 0,
                            x2: i,
                            y2: s
                        }) : (h.globals.isXNumeric && (l = h.globals.xAxisScale.result.length), h.config.xaxis.convertedCatToNumeric && (l = h.globals.xaxisLabelsCount), function (t) {
                            var e = t.xC,
                                i = t.x1,
                                a = t.y1,
                                s = t.x2,
                                r = t.y2;
                            if (void 0 !== h.config.xaxis.tickAmount && "dataPoints" !== h.config.xaxis.tickAmount) h.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach(function (t, e) {
                                var i = t.getBBox();
                                n._drawGridLines({
                                    i: e,
                                    x1: i.x + i.width / 2,
                                    y1: a,
                                    x2: i.x + i.width / 2,
                                    y2: r,
                                    xCount: l,
                                    parent: n.elgridLinesV
                                })
                            });
                            else
                                for (var o = 0; o < e + (h.globals.isXNumeric ? 0 : 1); o++) 0 === o && 1 === e && 1 === h.globals.dataPoints && (s = i = h.globals.gridWidth / 2), n._drawGridLines({
                                    i: o,
                                    x1: i,
                                    y1: a,
                                    x2: s,
                                    y2: r,
                                    xCount: l,
                                    parent: n.elgridLinesV
                                }), s = i += h.globals.gridWidth / (h.globals.isXNumeric ? e - 1 : e)
                        }({
                            xC: l,
                            x1: a,
                            y1: 0,
                            x2: i,
                            y2: s
                        }))
                    }
                    if (h.config.grid.yaxis.lines.show) {
                        var r = 0,
                            o = 0,
                            c = h.globals.gridWidth,
                            d = e + 1;
                        this.isTimelineBar && (d = h.globals.labels.length);
                        for (var g = 0; g < d + (this.isTimelineBar ? 1 : 0); g++) this._drawGridLine({
                            x1: 0,
                            y1: r,
                            x2: c,
                            y2: o,
                            parent: this.elgridLinesH
                        }), o = r += h.globals.gridHeight / (this.isTimelineBar ? d : e)
                    }
                }
            }, {
                key: "_drawInvertedXYLines",
                value: function (t) {
                    var e = t.xCount,
                        i = this.w;
                    if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show)
                        for (var a, s = i.globals.padHorizontal, r = i.globals.gridHeight, o = 0; o < e + 1; o++) i.config.grid.xaxis.lines.show && this._drawGridLine({
                            x1: s,
                            y1: 0,
                            x2: a,
                            y2: r,
                            parent: this.elgridLinesV
                        }), new j(this.ctx).drawXaxisTicks(s, this.elg), a = s = s + i.globals.gridWidth / e + .3;
                    if (i.config.grid.yaxis.lines.show)
                        for (var n = 0, l = 0, h = i.globals.gridWidth, c = 0; c < i.globals.dataPoints + 1; c++) this._drawGridLine({
                            x1: 0,
                            y1: n,
                            x2: h,
                            y2: l,
                            parent: this.elgridLinesH
                        }), l = n += i.globals.gridHeight / i.globals.dataPoints
                }
            }, {
                key: "renderGrid",
                value: function () {
                    var t = this.w,
                        e = new F(this.ctx);
                    this.elg = e.group({
                        "class": "apexcharts-grid"
                    }), this.elgridLinesH = e.group({
                        "class": "apexcharts-gridlines-horizontal"
                    }), this.elgridLinesV = e.group({
                        "class": "apexcharts-gridlines-vertical"
                    }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide());
                    for (var i, a = t.globals.yAxisScale.length ? t.globals.yAxisScale[0].result.length - 1 : 5, s = 0; s < t.globals.series.length && (void 0 !== t.globals.yAxisScale[s] && (a = t.globals.yAxisScale[s].result.length - 1), !(2 < a)); s++);
                    return !t.globals.isBarHorizontal || this.isTimelineBar ? (i = this.xaxisLabels.length, this.isTimelineBar && (a = t.globals.labels.length, t.config.xaxis.tickAmount && t.config.xaxis.labels.formatter && (i = t.config.xaxis.tickAmount)), this._drawXYLines({
                        xCount: i,
                        tickAmount: a
                    })) : (i = a, a = t.globals.xTickAmount, this._drawInvertedXYLines({
                        xCount: i,
                        tickAmount: a
                    })), this.drawGridBands(i, a), {
                        el: this.elg,
                        xAxisTickWidth: t.globals.gridWidth / i
                    }
                }
            }, {
                key: "drawGridBands",
                value: function (t, e) {
                    var i = this.w;
                    if (void 0 !== i.config.grid.row.colors && 0 < i.config.grid.row.colors.length)
                        for (var a = 0, s = i.globals.gridHeight / e, r = i.globals.gridWidth, o = 0, n = 0; o < e; o++, n++) n >= i.config.grid.row.colors.length && (n = 0), this._drawGridBandRect({
                            c: n,
                            x1: 0,
                            y1: a,
                            x2: r,
                            y2: s,
                            type: "row"
                        }), a += i.globals.gridHeight / e;
                    if (void 0 !== i.config.grid.column.colors && 0 < i.config.grid.column.colors.length)
                        for (var l = i.globals.isBarHorizontal || "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, h = i.globals.padHorizontal, c = i.globals.padHorizontal + i.globals.gridWidth / l, d = i.globals.gridHeight, g = 0, u = 0; g < t; g++, u++) u >= i.config.grid.column.colors.length && (u = 0), this._drawGridBandRect({
                            c: u,
                            x1: h,
                            y1: 0,
                            x2: c,
                            y2: d,
                            type: "column"
                        }), h += i.globals.gridWidth / l
                }
            }]), i
        }(),
        q = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "niceScale",
                value: function (t, e, i, a, s) {
                    var r = 2 < arguments.length && void 0 !== i ? arguments[2] : 10,
                        o = 3 < arguments.length && void 0 !== a ? arguments[3] : 0,
                        n = 4 < arguments.length ? s : void 0,
                        l = this.w,
                        h = Math.abs(e - t);
                    if ("dataPoints" === (r = this._adjustTicksForSmallRange(r, o, h)) && (r = l.globals.dataPoints - 1), t === Number.MIN_VALUE && 0 === e || !E.isNumber(t) && !E.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) return t = 0, e = r, this.linearScale(t, e, r);
                    e < t ? (console.warn("axis.min cannot be greater than axis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5);
                    var c = [];
                    h < 1 && n && ("candlestick" === l.config.chart.type || "candlestick" === l.config.series[o].type || "boxPlot" === l.config.chart.type || "boxPlot" === l.config.series[o].type || l.globals.isRangeData) && (e *= 1.01);
                    var d = r + 1;
                    d < 2 ? d = 2 : 2 < d && (d -= 2);
                    var g = h / d,
                        u = Math.floor(E.log10(g)),
                        p = Math.pow(10, u),
                        f = Math.round(g / p);
                    f < 1 && (f = 1);
                    var x = f * p,
                        b = x * Math.floor(t / x),
                        m = x * Math.ceil(e / x),
                        v = b;
                    if (n && 2 < h) {
                        for (; c.push(v), !((v += x) > m););
                        return {
                            result: c,
                            niceMin: c[0],
                            niceMax: c[c.length - 1]
                        }
                    }
                    var y = t;
                    (c = []).push(y);
                    for (var w = Math.abs(e - t) / r, k = 0; k <= r; k++) y += w, c.push(y);
                    return c[c.length - 2] >= e && c.pop(), {
                        result: c,
                        niceMin: c[0],
                        niceMax: c[c.length - 1]
                    }
                }
            }, {
                key: "linearScale",
                value: function (t, e, i, a) {
                    var s = 2 < arguments.length && void 0 !== i ? arguments[2] : 10,
                        r = 3 < arguments.length ? a : void 0,
                        o = Math.abs(e - t);
                    "dataPoints" === (s = this._adjustTicksForSmallRange(s, r, o)) && (s = this.w.globals.dataPoints - 1);
                    var n = o / s;
                    s === Number.MAX_VALUE && (s = 10, n = 1);
                    for (var l = [], h = t; 0 <= s;) l.push(h), h += n, s -= 1;
                    return {
                        result: l,
                        niceMin: l[0],
                        niceMax: l[l.length - 1]
                    }
                }
            }, {
                key: "logarithmicScale",
                value: function (t) {
                    for (var e = [], i = Math.ceil(Math.log10(t)) + 1, a = 0; a < i; a++) e.push(Math.pow(10, a));
                    return {
                        result: e,
                        niceMin: e[0],
                        niceMax: e[e.length - 1]
                    }
                }
            }, {
                key: "_adjustTicksForSmallRange",
                value: function (t, e, i) {
                    var a = t;
                    if (void 0 !== e && this.w.config.yaxis[e].labels.formatter && void 0 === this.w.config.yaxis[e].tickAmount) {
                        var s = this.w.config.yaxis[e].labels.formatter(1);
                        E.isNumber(Number(s)) && !E.isFloat(s) && (a = Math.ceil(i))
                    }
                    return a < t ? a : t
                }
            }, {
                key: "setYScaleForIndex",
                value: function (t, e, i) {
                    var a = this.w.globals,
                        s = this.w.config,
                        r = a.isBarHorizontal ? s.xaxis : s.yaxis[t];
                    void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = []);
                    var o = Math.abs(i - e);
                    if (r.logarithmic && o <= 5 && (a.invalidLogScale = !0), r.logarithmic && 5 < o) a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.logarithmicScale(i);
                    else if (i !== -Number.MAX_VALUE && E.isNumber(i))
                        if (a.allSeriesCollapsed = !1, void 0 === r.min && void 0 === r.max || r.forceNiceScale) {
                            var n = void 0 === s.yaxis[t].max && void 0 === s.yaxis[t].min || s.yaxis[t].forceNiceScale;
                            a.yAxisScale[t] = this.niceScale(e, i, r.tickAmount ? r.tickAmount : o < 5 && 1 < o ? o + 1 : 5, t, n)
                        } else a.yAxisScale[t] = this.linearScale(e, i, r.tickAmount, t);
                    else a.yAxisScale[t] = this.linearScale(0, 5, 5)
                }
            }, {
                key: "setXScale",
                value: function (t, e) {
                    var i = this.w,
                        a = i.globals,
                        s = i.config.xaxis,
                        r = Math.abs(e - t);
                    return e !== -Number.MAX_VALUE && E.isNumber(e) ? a.xAxisScale = this.linearScale(t, e, s.tickAmount ? s.tickAmount : r < 5 && 1 < r ? r + 1 : 5, 0) : a.xAxisScale = this.linearScale(0, 5, 5), a.xAxisScale
                }
            }, {
                key: "setMultipleYScales",
                value: function () {
                    var r = this,
                        t = this.w.globals,
                        o = this.w.config,
                        n = t.minYArr.concat([]),
                        l = t.maxYArr.concat([]),
                        h = [];
                    o.yaxis.forEach(function (i, a) {
                        var s = a;
                        o.series.forEach(function (t, e) {
                            t.name === i.seriesName && (a !== (s = e) ? h.push({
                                index: e,
                                similarIndex: a,
                                alreadyExists: !0
                            }) : h.push({
                                index: e
                            }))
                        });
                        var t = n[s],
                            e = l[s];
                        r.setYScaleForIndex(a, t, e)
                    }), this.sameScaleInMultipleAxes(n, l, h)
                }
            }, {
                key: "sameScaleInMultipleAxes",
                value: function (t, s, e) {
                    var n = this,
                        l = this.w.config,
                        h = this.w.globals,
                        o = [];
                    e.forEach(function (t) {
                        t.alreadyExists && (void 0 === o[t.index] && (o[t.index] = []), o[t.index].push(t.index), o[t.index].push(t.similarIndex))
                    }), (h.yAxisSameScaleIndices = o).forEach(function (s, r) {
                        o.forEach(function (t, e) {
                            var i, a;
                            r !== e && 0 < (i = s, a = t, i.filter(function (t) {
                                return -1 !== a.indexOf(t)
                            })).length && (o[r] = o[r].concat(o[e]))
                        })
                    });
                    var i = o.map(function (i) {
                        return i.filter(function (t, e) {
                            return i.indexOf(t) === e
                        })
                    }).map(function (t) {
                        return t.sort()
                    });
                    o = o.filter(function (t) {
                        return !!t
                    });
                    var r = i.slice(),
                        a = r.map(function (t) {
                            return JSON.stringify(t)
                        });
                    r = r.filter(function (t, e) {
                        return a.indexOf(JSON.stringify(t)) === e
                    });
                    var c = [],
                        d = [];
                    t.forEach(function (i, a) {
                        r.forEach(function (t, e) {
                            -1 < t.indexOf(a) && (void 0 === c[e] && (c[e] = [], d[e] = []), c[e].push({
                                key: a,
                                value: i
                            }), d[e].push({
                                key: a,
                                value: s[a]
                            }))
                        })
                    });
                    var g = Array.apply(null, Array(r.length)).map(Number.prototype.valueOf, Number.MIN_VALUE),
                        u = Array.apply(null, Array(r.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
                    c.forEach(function (t, e) {
                        t.forEach(function (t) {
                            g[e] = Math.min(t.value, g[e])
                        })
                    }), d.forEach(function (t, e) {
                        t.forEach(function (t) {
                            u[e] = Math.max(t.value, u[e])
                        })
                    }), t.forEach(function (t, o) {
                        d.forEach(function (i, a) {
                            var s = g[a],
                                r = u[a];
                            l.chart.stacked && (r = 0, i.forEach(function (t, e) {
                                t.value !== -Number.MAX_VALUE && (r += t.value), s !== Number.MIN_VALUE && (s += c[a][e].value)
                            })), i.forEach(function (t, e) {
                                i[e].key === o && (void 0 !== l.yaxis[o].min && (s = "function" == typeof l.yaxis[o].min ? l.yaxis[o].min(h.minY) : l.yaxis[o].min), void 0 !== l.yaxis[o].max && (r = "function" == typeof l.yaxis[o].max ? l.yaxis[o].max(h.maxY) : l.yaxis[o].max), n.setYScaleForIndex(o, s, r))
                            })
                        })
                    })
                }
            }, {
                key: "autoScaleY",
                value: function (t, c, d) {
                    t || (t = this);
                    var g = t.w;
                    if (g.globals.isMultipleYAxis || g.globals.collapsedSeries.length) return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."), c;
                    var u = g.globals.seriesX[0],
                        p = g.config.chart.stacked;
                    return c.forEach(function (a, t) {
                        for (var s = 0, e = 0; e < u.length; e++)
                            if (u[e] >= d.xaxis.min) {
                                s = e;
                                break
                            }
                        var r, o, n = g.globals.minYArr[t],
                            l = g.globals.maxYArr[t],
                            h = g.globals.stackedSeriesTotals;
                        g.globals.series.forEach(function (i, t) {
                            var e = i[s];
                            p ? (e = h[s], r = o = e, h.forEach(function (t, e) {
                                u[e] <= d.xaxis.max && u[e] >= d.xaxis.min && (o < t && null !== t && (o = t), i[e] < r && null !== i[e] && (r = i[e]))
                            })) : (r = o = e, i.forEach(function (e, i) {
                                if (u[i] <= d.xaxis.max && u[i] >= d.xaxis.min) {
                                    var a = e,
                                        s = e;
                                    g.globals.series.forEach(function (t) {
                                        null !== e && (a = Math.min(t[i], a), s = Math.max(t[i], s))
                                    }), o < s && null !== s && (o = s), a < r && null !== a && (r = a)
                                }
                            })), void 0 === r && void 0 === o && (r = n, o = l), (o *= o < 0 ? .9 : 1.1) < 0 && o < l && (o = l), (r *= r < 0 ? 1.1 : .9) < 0 && n < r && (r = n), 1 < c.length ? (c[t].min = void 0 === a.min ? r : a.min, c[t].max = void 0 === a.max ? o : a.max) : (c[0].min = void 0 === a.min ? r : a.min, c[0].max = void 0 === a.max ? o : a.max)
                        })
                    }), c
                }
            }]), e
        }(),
        Z = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.scales = new q(t)
            }
            return o(e, [{
                key: "init",
                value: function () {
                    this.setYRange(), this.setXRange(), this.setZRange()
                }
            }, {
                key: "getMinYMaxY",
                value: function (t, e, i, a) {
                    var s = 1 < arguments.length && void 0 !== e ? arguments[1] : Number.MAX_VALUE,
                        r = 2 < arguments.length && void 0 !== i ? arguments[2] : -Number.MAX_VALUE,
                        o = 3 < arguments.length && void 0 !== a ? arguments[3] : null,
                        n = this.w.config,
                        l = this.w.globals,
                        h = -Number.MAX_VALUE,
                        c = Number.MIN_VALUE;
                    null === o && (o = t + 1);
                    var d = l.series,
                        g = d,
                        u = d;
                    "candlestick" === n.chart.type ? (g = l.seriesCandleL, u = l.seriesCandleH) : "boxPlot" === n.chart.type ? (g = l.seriesCandleO, u = l.seriesCandleC) : l.isRangeData && (g = l.seriesRangeStart, u = l.seriesRangeEnd);
                    for (var p = t; p < o; p++) {
                        l.dataPoints = Math.max(l.dataPoints, d[p].length);
                        for (var f = 0; f < l.series[p].length; f++) {
                            var x = d[p][f];
                            null !== x && E.isNumber(x) ? (void 0 !== u[p][f] && (h = Math.max(h, u[p][f])), void 0 !== g[p][f] && (s = Math.min(s, g[p][f]), r = Math.max(r, g[p][f])), "candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type || (void 0 !== l.seriesCandleC[p][f] && (h = Math.max(h, l.seriesCandleO[p][f]), h = Math.max(h, l.seriesCandleH[p][f]), h = Math.max(h, l.seriesCandleL[p][f]), h = Math.max(h, l.seriesCandleC[p][f]), "boxPlot" === this.w.config.chart.type && (h = Math.max(h, l.seriesCandleM[p][f]))), !n.series[p].type || "candlestick" === n.series[p].type && "boxPlot" === n.series[p].type || (h = Math.max(h, l.series[p][f]), s = Math.min(s, l.series[p][f])), r = h), l.seriesGoals[p] && l.seriesGoals[p][f] && Array.isArray(l.seriesGoals[p][f]) && l.seriesGoals[p][f].forEach(function (t) {
                                c !== Number.MIN_VALUE && (c = Math.min(c, t.value), s = c), h = Math.max(h, t.value), r = h
                            }), E.isFloat(x) && (x = E.noExponents(x), l.yValueDecimal = Math.max(l.yValueDecimal, x.toString().split(".")[1].length)), c > g[p][f] && g[p][f] < 0 && (c = g[p][f])) : l.hasNullValues = !0
                        }
                    }
                    return "rangeBar" === n.chart.type && l.seriesRangeStart.length && l.isBarHorizontal && "datetime" === n.xaxis.type && (c = s), "bar" === n.chart.type && (c < 0 && h < 0 && (h = 0), c === Number.MIN_VALUE && (c = 0)), {
                        minY: c,
                        maxY: h,
                        lowestY: s,
                        highestY: r
                    }
                }
            }, {
                key: "setYRange",
                value: function () {
                    var i = this.w.globals,
                        e = this.w.config;
                    i.maxY = -Number.MAX_VALUE, i.minY = Number.MIN_VALUE;
                    var t = Number.MAX_VALUE;
                    if (i.isMultipleYAxis)
                        for (var a = 0; a < i.series.length; a++) {
                            var s = this.getMinYMaxY(a, t, null, a + 1);
                            i.minYArr.push(s.minY), i.maxYArr.push(s.maxY), t = s.lowestY
                        }
                    var r = this.getMinYMaxY(0, t, null, i.series.length);
                    if (i.minY = r.minY, i.maxY = r.maxY, t = r.lowestY, e.chart.stacked && this._setStackedMinMax(), ("line" === e.chart.type || "area" === e.chart.type || "candlestick" === e.chart.type || "boxPlot" === e.chart.type || "rangeBar" === e.chart.type && !i.isBarHorizontal) && i.minY === Number.MIN_VALUE && t !== -Number.MAX_VALUE && t !== i.maxY) {
                        var o = i.maxY - t;
                        (0 <= t && t <= 10 || void 0 !== e.yaxis[0].min || void 0 !== e.yaxis[0].max) && (o = 0), i.minY = t - 5 * o / 100, 0 < t && i.minY < 0 && (i.minY = 0), i.maxY = i.maxY + 5 * o / 100
                    }
                    return e.yaxis.forEach(function (t, e) {
                        void 0 !== t.max && ("number" == typeof t.max ? i.maxYArr[e] = t.max : "function" == typeof t.max && (i.maxYArr[e] = t.max(i.isMultipleYAxis ? i.maxYArr[e] : i.maxY)), i.maxY = i.maxYArr[e]), void 0 !== t.min && ("number" == typeof t.min ? i.minYArr[e] = t.min : "function" == typeof t.min && (i.minYArr[e] = t.min(i.isMultipleYAxis ? i.minYArr[e] === Number.MIN_VALUE ? 0 : i.minYArr[e] : i.minY)), i.minY = i.minYArr[e])
                    }), i.isBarHorizontal && ["min", "max"].forEach(function (t) {
                        void 0 !== e.xaxis[t] && "number" == typeof e.xaxis[t] && ("min" === t ? i.minY = e.xaxis[t] : i.maxY = e.xaxis[t])
                    }), i.isMultipleYAxis ? (this.scales.setMultipleYScales(), i.minY = t, i.yAxisScale.forEach(function (t, e) {
                        i.minYArr[e] = t.niceMin, i.maxYArr[e] = t.niceMax
                    })) : (this.scales.setYScaleForIndex(0, i.minY, i.maxY), i.minY = i.yAxisScale[0].niceMin, i.maxY = i.yAxisScale[0].niceMax, i.minYArr[0] = i.yAxisScale[0].niceMin, i.maxYArr[0] = i.yAxisScale[0].niceMax), {
                        minY: i.minY,
                        maxY: i.maxY,
                        minYArr: i.minYArr,
                        maxYArr: i.maxYArr,
                        yAxisScale: i.yAxisScale
                    }
                }
            }, {
                key: "setXRange",
                value: function () {
                    var i = this.w.globals,
                        t = this.w.config,
                        e = "numeric" === t.xaxis.type || "datetime" === t.xaxis.type || "category" === t.xaxis.type && !i.noLabelsProvided || i.noLabelsProvided || i.isXNumeric;
                    if (i.isXNumeric && function () {
                        for (var t = 0; t < i.series.length; t++)
                            if (i.labels[t])
                                for (var e = 0; e < i.labels[t].length; e++) null !== i.labels[t][e] && E.isNumber(i.labels[t][e]) && (i.maxX = Math.max(i.maxX, i.labels[t][e]), i.initialMaxX = Math.max(i.maxX, i.labels[t][e]), i.minX = Math.min(i.minX, i.labels[t][e]), i.initialMinX = Math.min(i.minX, i.labels[t][e]))
                    }(), i.noLabelsProvided && 0 === t.xaxis.categories.length && (i.maxX = i.labels[i.labels.length - 1], i.initialMaxX = i.labels[i.labels.length - 1], i.minX = 1, i.initialMinX = 1), i.isXNumeric || i.noLabelsProvided || i.dataFormatXNumeric) {
                        var a;
                        if (void 0 === t.xaxis.tickAmount ? (a = Math.round(i.svgWidth / 150), "numeric" === t.xaxis.type && i.dataPoints < 30 && (a = i.dataPoints - 1), a > i.dataPoints && 0 !== i.dataPoints && (a = i.dataPoints - 1)) : "dataPoints" === t.xaxis.tickAmount ? (1 < i.series.length && (a = i.series[i.maxValsInArrayIndex].length - 1), i.isXNumeric && (a = i.maxX - i.minX - 1)) : a = t.xaxis.tickAmount, i.xTickAmount = a, void 0 !== t.xaxis.max && "number" == typeof t.xaxis.max && (i.maxX = t.xaxis.max), void 0 !== t.xaxis.min && "number" == typeof t.xaxis.min && (i.minX = t.xaxis.min), void 0 !== t.xaxis.range && (i.minX = i.maxX - t.xaxis.range), i.minX !== Number.MAX_VALUE && i.maxX !== -Number.MAX_VALUE)
                            if (t.xaxis.convertedCatToNumeric && !i.dataFormatXNumeric) {
                                for (var s = [], r = i.minX - 1; r < i.maxX; r++) s.push(r + 1);
                                i.xAxisScale = {
                                    result: s,
                                    niceMin: s[0],
                                    niceMax: s[s.length - 1]
                                }
                            } else i.xAxisScale = this.scales.setXScale(i.minX, i.maxX);
                        else i.xAxisScale = this.scales.linearScale(1, a, a), i.noLabelsProvided && 0 < i.labels.length && (i.xAxisScale = this.scales.linearScale(1, i.labels.length, a - 1), i.seriesX = i.labels.slice());
                        e && (i.labels = i.xAxisScale.result.slice())
                    }
                    return i.isBarHorizontal && i.labels.length && (i.xTickAmount = i.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), {
                        minX: i.minX,
                        maxX: i.maxX
                    }
                }
            }, {
                key: "setZRange",
                value: function () {
                    var t = this.w.globals;
                    if (t.isDataXYZ)
                        for (var e = 0; e < t.series.length; e++)
                            if (void 0 !== t.seriesZ[e])
                                for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && E.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
                }
            }, {
                key: "_handleSingleDataPoint",
                value: function () {
                    var t = this.w.globals,
                        e = this.w.config;
                    if (t.minX === t.maxX) {
                        var i = new R(this.ctx);
                        if ("datetime" === e.xaxis.type) {
                            var a = i.getDate(t.minX);
                            a.setUTCDate(a.getDate() - 2), t.minX = new Date(a).getTime();
                            var s = i.getDate(t.maxX);
                            s.setUTCDate(s.getDate() + 2), t.maxX = new Date(s).getTime()
                        } else ("numeric" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided) && (t.minX = t.minX - 2, t.initialMinX = t.minX, t.maxX = t.maxX + 2, t.initialMaxX = t.maxX)
                    }
                }
            }, {
                key: "_getMinXDiff",
                value: function () {
                    var s = this.w.globals;
                    s.isXNumeric && s.seriesX.forEach(function (t) {
                        1 === t.length && t.push(s.seriesX[s.maxValsInArrayIndex][s.seriesX[s.maxValsInArrayIndex].length - 1]);
                        var a = t.slice();
                        a.sort(function (t, e) {
                            return t - e
                        }), a.forEach(function (t, e) {
                            if (0 < e) {
                                var i = t - a[e - 1];
                                0 < i && (s.minXDiff = Math.min(i, s.minXDiff))
                            }
                        }), 1 === s.dataPoints && s.minXDiff === Number.MAX_VALUE && (s.minXDiff = .5)
                    })
                }
            }, {
                key: "_setStackedMinMax",
                value: function () {
                    var t = this.w.globals,
                        e = [],
                        i = [];
                    if (t.series.length)
                        for (var a = 0; a < t.series[t.maxValsInArrayIndex].length; a++)
                            for (var s = 0, r = 0, o = 0; o < t.series.length; o++) null !== t.series[o][a] && E.isNumber(t.series[o][a]) && (0 < t.series[o][a] ? s = s + parseFloat(t.series[o][a]) + 1e-4 : r += parseFloat(t.series[o][a])), o === t.series.length - 1 && (e.push(s), i.push(r));
                    for (var n = 0; n < e.length; n++) t.maxY = Math.max(t.maxY, e[n]), t.minY = Math.min(t.minY, i[n])
                }
            }]), e
        }(),
        $ = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.axisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === e.config.chart.type && e.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === e.config.xaxis.position && (this.xAxisoffX = e.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new G(t)
            }
            return o(i, [{
                key: "drawYaxis",
                value: function (l) {
                    var h = this,
                        c = this.w,
                        d = new F(this.ctx),
                        g = c.config.yaxis[l].labels.style,
                        u = g.fontSize,
                        p = g.fontFamily,
                        f = g.fontWeight,
                        t = d.group({
                            "class": "apexcharts-yaxis",
                            rel: l,
                            transform: "translate(" + c.globals.translateYAxisX[l] + ", 0)"
                        });
                    if (this.axesUtils.isYAxisHidden(l)) return t;
                    var x = d.group({
                        "class": "apexcharts-yaxis-texts-g"
                    });
                    t.add(x);
                    var b = c.globals.yAxisScale[l].result.length - 1,
                        m = c.globals.gridHeight / b,
                        v = c.globals.translateY,
                        y = c.globals.yLabelFormatters[l],
                        w = c.globals.yAxisScale[l].result.slice();
                    w = this.axesUtils.checkForReversedLabels(l, w);
                    var k = "";
                    if (c.config.yaxis[l].labels.show)
                        for (var e = function (t) {
                            var e = w[t];
                            e = y(e, t, c);
                            var i = c.config.yaxis[l].labels.padding;
                            c.config.yaxis[l].opposite && 0 !== c.config.yaxis.length && (i *= -1);
                            var a = h.axesUtils.getYAxisForeColor(g.colors, l),
                                s = d.drawText({
                                    x: i,
                                    y: v + b / 10 + c.config.yaxis[l].labels.offsetY + 1,
                                    text: e,
                                    textAnchor: c.config.yaxis[l].opposite ? "start" : "end",
                                    fontSize: u,
                                    fontFamily: p,
                                    fontWeight: f,
                                    foreColor: Array.isArray(a) ? a[t] : a,
                                    isPlainText: !1,
                                    cssClass: "apexcharts-yaxis-label " + g.cssClass
                                });
                            t === b && (k = s), x.add(s);
                            var r = document.createElementNS(c.globals.SVGNS, "title");
                            if (r.textContent = Array.isArray(e) ? e.join(" ") : e, s.node.appendChild(r), 0 !== c.config.yaxis[l].labels.rotate) {
                                var o = d.rotateAroundCenter(k.node),
                                    n = d.rotateAroundCenter(s.node);
                                s.node.setAttribute("transform", "rotate(".concat(c.config.yaxis[l].labels.rotate, " ").concat(o.x, " ").concat(n.y, ")"))
                            }
                            v += m
                        }, i = b; 0 <= i; i--) e(i);
                    if (void 0 !== c.config.yaxis[l].title.text) {
                        var a = d.group({
                            "class": "apexcharts-yaxis-title"
                        }),
                            s = 0;
                        c.config.yaxis[l].opposite && (s = c.globals.translateYAxisX[l]);
                        var r = d.drawText({
                            x: s,
                            y: c.globals.gridHeight / 2 + c.globals.translateY + c.config.yaxis[l].title.offsetY,
                            text: c.config.yaxis[l].title.text,
                            textAnchor: "end",
                            foreColor: c.config.yaxis[l].title.style.color,
                            fontSize: c.config.yaxis[l].title.style.fontSize,
                            fontWeight: c.config.yaxis[l].title.style.fontWeight,
                            fontFamily: c.config.yaxis[l].title.style.fontFamily,
                            cssClass: "apexcharts-yaxis-title-text " + c.config.yaxis[l].title.style.cssClass
                        });
                        a.add(r), t.add(a)
                    }
                    var o = c.config.yaxis[l].axisBorder,
                        n = 31 + o.offsetX;
                    if (c.config.yaxis[l].opposite && (n = -31 - o.offsetX), o.show) {
                        var A = d.drawLine(n, c.globals.translateY + o.offsetY - 2, n, c.globals.gridHeight + c.globals.translateY + o.offsetY + 2, o.color, 0, o.width);
                        t.add(A)
                    }
                    return c.config.yaxis[l].axisTicks.show && this.axesUtils.drawYAxisTicks(n, b, o, c.config.yaxis[l].axisTicks, l, m, t), t
                }
            }, {
                key: "drawYaxisInversed",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx),
                        a = i.group({
                            "class": "apexcharts-xaxis apexcharts-yaxis-inversed"
                        }),
                        s = i.group({
                            "class": "apexcharts-xaxis-texts-g",
                            transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
                        });
                    a.add(s);
                    var r = e.globals.yAxisScale[t].result.length - 1,
                        o = e.globals.gridWidth / r + .1,
                        n = o + e.config.xaxis.labels.offsetX,
                        l = e.globals.xLabelFormatter,
                        h = e.globals.yAxisScale[t].result.slice(),
                        c = e.globals.timescaleLabels;
                    0 < c.length && (this.xaxisLabels = c.slice(), r = (h = c.slice()).length), h = this.axesUtils.checkForReversedLabels(t, h);
                    var d = c.length;
                    if (e.config.xaxis.labels.show)
                        for (var g = d ? 0 : r; d ? g < d : 0 <= g; d ? g++ : g--) {
                            var u = h[g];
                            u = l(u, g, e);
                            var p = e.globals.gridWidth + e.globals.padHorizontal - (n - o + e.config.xaxis.labels.offsetX);
                            if (c.length) {
                                var f = this.axesUtils.getLabel(h, c, p, g, this.drawnLabels, this.xaxisFontSize);
                                p = f.x, u = f.text, this.drawnLabels.push(f.text), 0 === g && e.globals.skipFirstTimelinelabel && (u = ""), g === h.length - 1 && e.globals.skipLastTimelinelabel && (u = "")
                            }
                            var x = i.drawText({
                                x: p,
                                y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - ("top" === e.config.xaxis.position ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0),
                                text: u,
                                textAnchor: "middle",
                                foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                                fontSize: this.xaxisFontSize,
                                fontFamily: this.xaxisFontFamily,
                                fontWeight: e.config.xaxis.labels.style.fontWeight,
                                isPlainText: !1,
                                cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                            });
                            s.add(x), x.tspan(u);
                            var b = document.createElementNS(e.globals.SVGNS, "title");
                            b.textContent = u, x.node.appendChild(b), n += o
                        }
                    return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a
                }
            }, {
                key: "inversedYAxisBorder",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx),
                        a = e.config.xaxis.axisBorder;
                    if (a.show) {
                        var s = 0;
                        "bar" === e.config.chart.type && e.globals.isXNumeric && (s -= 15);
                        var r = i.drawLine(e.globals.padHorizontal + s + a.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height);
                        t.add(r)
                    }
                }
            }, {
                key: "inversedYAxisTitleText",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx);
                    if (void 0 !== e.config.xaxis.title.text) {
                        var a = i.group({
                            "class": "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
                        }),
                            s = i.drawText({
                                x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX,
                                y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e.config.xaxis.title.style.fontSize) + e.config.xaxis.title.offsetY + 20,
                                text: e.config.xaxis.title.text,
                                textAnchor: "middle",
                                fontSize: e.config.xaxis.title.style.fontSize,
                                fontFamily: e.config.xaxis.title.style.fontFamily,
                                fontWeight: e.config.xaxis.title.style.fontWeight,
                                foreColor: e.config.xaxis.title.style.color,
                                cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
                            });
                        a.add(s), t.add(a)
                    }
                }
            }, {
                key: "yAxisTitleRotate",
                value: function (t, e) {
                    var i = this.w,
                        a = new F(this.ctx),
                        s = {
                            width: 0,
                            height: 0
                        },
                        r = {
                            width: 0,
                            height: 0
                        },
                        o = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
                    null !== o && (s = o.getBoundingClientRect());
                    var n = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
                    if (null !== n && (r = n.getBoundingClientRect()), null !== n) {
                        var l = this.xPaddingForYAxisTitle(t, s, r, e);
                        n.setAttribute("x", l.xPos - (e ? 10 : 0))
                    }
                    if (null !== n) {
                        var h = a.rotateAroundCenter(n);
                        n.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")"))
                    }
                }
            }, {
                key: "xPaddingForYAxisTitle",
                value: function (t, e, i, a) {
                    var s = this.w,
                        r = 0,
                        o = 0,
                        n = 10;
                    return void 0 === s.config.yaxis[t].title.text || t < 0 ? {
                        xPos: o,
                        padd: 0
                    } : (a ? (o = e.width + s.config.yaxis[t].title.offsetX + i.width / 2 + n / 2, 0 === (r += 1) && (o -= n / 2)) : (o = -1 * e.width + s.config.yaxis[t].title.offsetX + n / 2 + i.width / 2, s.globals.isBarHorizontal && (n = 25, o = -1 * e.width - s.config.yaxis[t].title.offsetX - n)), {
                        xPos: o,
                        padd: n
                    })
                }
            }, {
                key: "setYAxisXPosition",
                value: function (s, r) {
                    var o = this.w,
                        n = 0,
                        l = 0,
                        h = 18,
                        c = 1;
                    1 < o.config.yaxis.length && (this.multipleYs = !0), o.config.yaxis.map(function (t, e) {
                        var i = -1 < o.globals.ignoreYAxisIndexes.indexOf(e) || !t.show || t.floating || 0 === s[e].width,
                            a = s[e].width + r[e].width;
                        t.opposite ? o.globals.isBarHorizontal ? (l = o.globals.gridWidth + o.globals.translateX - 1, o.globals.translateYAxisX[e] = l - t.labels.offsetX) : (l = o.globals.gridWidth + o.globals.translateX + c, i || (c = c + a + 20), o.globals.translateYAxisX[e] = l - t.labels.offsetX + 20) : (n = o.globals.translateX - h, i || (h = h + a + 20), o.globals.translateYAxisX[e] = n + t.labels.offsetX)
                    })
                }
            }, {
                key: "setYAxisTextAlignments",
                value: function () {
                    var o = this.w,
                        t = o.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
                    (t = E.listToArray(t)).forEach(function (t, e) {
                        var i = o.config.yaxis[e];
                        if (i && void 0 !== i.labels.align) {
                            var a = o.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g")),
                                s = o.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-label"));
                            s = E.listToArray(s);
                            var r = a.getBoundingClientRect();
                            "left" === i.labels.align ? (s.forEach(function (t) {
                                t.setAttribute("text-anchor", "start")
                            }), i.opposite || a.setAttribute("transform", "translate(-".concat(r.width, ", 0)"))) : "center" === i.labels.align ? (s.forEach(function (t) {
                                t.setAttribute("text-anchor", "middle")
                            }), a.setAttribute("transform", "translate(".concat(r.width / 2 * (i.opposite ? 1 : -1), ", 0)"))) : "right" === i.labels.align && (s.forEach(function (t) {
                                t.setAttribute("text-anchor", "end")
                            }), i.opposite && a.setAttribute("transform", "translate(".concat(r.width, ", 0)")))
                        }
                    })
                }
            }]), i
        }(),
        t = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.documentEvent = E.bind(this.documentEvent, this)
            }
            return o(e, [{
                key: "addEventListener",
                value: function (t, e) {
                    var i = this.w;
                    i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
                }
            }, {
                key: "removeEventListener",
                value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        var a = i.globals.events[t].indexOf(e); - 1 !== a && i.globals.events[t].splice(a, 1)
                    }
                }
            }, {
                key: "fireEvent",
                value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        e && e.length || (e = []);
                        for (var a = i.globals.events[t], s = a.length, r = 0; r < s; r++) a[r].apply(null, e)
                    }
                }
            }, {
                key: "setupEventHandlers",
                value: function () {
                    var e = this,
                        i = this.w,
                        a = this.ctx,
                        s = i.globals.dom.baseEl.querySelector(i.globals.chartClass);
                    this.ctx.eventList.forEach(function (t) {
                        s.addEventListener(t, function (t) {
                            var e = Object.assign({}, i, {
                                seriesIndex: i.globals.capturedSeriesIndex,
                                dataPointIndex: i.globals.capturedDataPointIndex
                            });
                            "mousemove" === t.type || "touchmove" === t.type ? "function" == typeof i.config.chart.events.mouseMove && i.config.chart.events.mouseMove(t, a, e) : "mouseleave" === t.type || "touchleave" === t.type ? "function" == typeof i.config.chart.events.mouseLeave && i.config.chart.events.mouseLeave(t, a, e) : ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof i.config.chart.events.click && i.config.chart.events.click(t, a, e), a.ctx.events.fireEvent("click", [t, a, e]))
                        }, {
                            capture: !1,
                            passive: !0
                        })
                    }), this.ctx.eventList.forEach(function (t) {
                        i.globals.dom.baseEl.addEventListener(t, e.documentEvent, {
                            passive: !0
                        })
                    }), this.ctx.core.setupBrushHandler()
                }
            }, {
                key: "documentEvent",
                value: function (t) {
                    var e = this.w,
                        i = t.target.className;
                    if ("click" === t.type) {
                        var a = e.globals.dom.baseEl.querySelector(".apexcharts-menu");
                        a && a.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i && a.classList.remove("apexcharts-menu-open")
                    }
                    e.globals.clientX = "touchmove" === t.type ? t.touches[0].clientX : t.clientX, e.globals.clientY = "touchmove" === t.type ? t.touches[0].clientY : t.clientY
                }
            }]), e
        }(),
        J = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "setCurrentLocaleValues",
                value: function (e) {
                    var t = this.w.config.chart.locales;
                    window.Apex.chart && window.Apex.chart.locales && 0 < window.Apex.chart.locales.length && (t = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                    var i = t.filter(function (t) {
                        return t.name === e
                    })[0];
                    if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
                    var a = E.extend(b, i);
                    this.w.globals.locale = a.options
                }
            }]), e
        }(),
        Q = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "drawAxis",
                value: function (t) {
                    var e, i, a = this.w.globals,
                        s = this.w.config,
                        r = new j(this.ctx),
                        o = new $(this.ctx);
                    a.axisCharts && "radar" !== t && (a.isBarHorizontal ? (i = o.drawYaxisInversed(0), e = r.drawXaxisInversed(0), a.dom.elGraphical.add(e), a.dom.elGraphical.add(i)) : (e = r.drawXaxis(), a.dom.elGraphical.add(e), s.yaxis.map(function (t, e) {
                        -1 === a.ignoreYAxisIndexes.indexOf(e) && (i = o.drawYaxis(e), a.dom.Paper.add(i))
                    })))
                }
            }]), e
        }(),
        K = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "drawXCrosshairs",
                value: function () {
                    var t = this.w,
                        e = new F(this.ctx),
                        i = new Y(this.ctx),
                        a = t.config.xaxis.crosshairs.fill.gradient,
                        s = t.config.xaxis.crosshairs.dropShadow,
                        r = t.config.xaxis.crosshairs.fill.type,
                        o = a.colorFrom,
                        n = a.colorTo,
                        l = a.opacityFrom,
                        h = a.opacityTo,
                        c = a.stops,
                        d = s.enabled,
                        g = s.left,
                        u = s.top,
                        p = s.blur,
                        f = s.color,
                        x = s.opacity,
                        b = t.config.xaxis.crosshairs.fill.color;
                    if (t.config.xaxis.crosshairs.show) {
                        "gradient" === r && (b = e.drawGradient("vertical", o, n, l, h, null, c, null));
                        var m = e.drawRect();
                        1 === t.config.xaxis.crosshairs.width && (m = e.drawLine());
                        var v = t.globals.gridHeight;
                        (!E.isNumber(v) || v < 0) && (v = 0);
                        var y = t.config.xaxis.crosshairs.width;
                        (!E.isNumber(y) || y < 0) && (y = 0), m.attr({
                            "class": "apexcharts-xcrosshairs",
                            x: 0,
                            y: 0,
                            y2: v,
                            width: y,
                            height: v,
                            fill: b,
                            filter: "none",
                            "fill-opacity": t.config.xaxis.crosshairs.opacity,
                            stroke: t.config.xaxis.crosshairs.stroke.color,
                            "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                            "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
                        }), d && (m = i.dropShadow(m, {
                            left: g,
                            top: u,
                            blur: p,
                            color: f,
                            opacity: x
                        })), t.globals.dom.elGraphical.add(m)
                    }
                }
            }, {
                key: "drawYCrosshairs",
                value: function () {
                    var t = this.w,
                        e = new F(this.ctx),
                        i = t.config.yaxis[0].crosshairs,
                        a = t.globals.barPadForNumericAxis;
                    if (t.config.yaxis[0].crosshairs.show) {
                        var s = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                        s.attr({
                            "class": "apexcharts-ycrosshairs"
                        }), t.globals.dom.elGraphical.add(s)
                    }
                    var r = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, 0, 0);
                    r.attr({
                        "class": "apexcharts-ycrosshairs-hidden"
                    }), t.globals.dom.elGraphical.add(r)
                }
            }]), e
        }(),
        tt = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "checkResponsiveConfig",
                value: function (t) {
                    var o = this,
                        n = this.w,
                        e = n.config;
                    if (0 !== e.responsive.length) {
                        var l = e.responsive.slice();
                        l.sort(function (t, e) {
                            return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0
                        }).reverse();
                        var h = new N({}),
                            i = function (t) {
                                var e = 0 < arguments.length && void 0 !== t ? arguments[0] : {},
                                    i = l[0].breakpoint,
                                    a = 0 < window.innerWidth ? window.innerWidth : screen.width;
                                if (i < a) {
                                    var s = M.extendArrayProps(h, n.globals.initialConfig, n);
                                    e = E.extend(s, e), e = E.extend(n.config, e), o.overrideResponsiveOptions(e)
                                } else
                                    for (var r = 0; r < l.length; r++) a < l[r].breakpoint && (e = M.extendArrayProps(h, l[r].options, n), e = E.extend(n.config, e), o.overrideResponsiveOptions(e))
                            };
                        if (t) {
                            var a = M.extendArrayProps(h, t, n);
                            a = E.extend(n.config, a), i(a = E.extend(a, t))
                        } else i({})
                    }
                }
            }, {
                key: "overrideResponsiveOptions",
                value: function (t) {
                    var e = new N(t).init({
                        responsiveOverride: !0
                    });
                    this.w.config = e
                }
            }]), e
        }(),
        et = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.colors = [], this.w = t.w;
                var e = this.w;
                this.isColorFn = !1, this.isHeatmapDistributed = "treemap" === e.config.chart.type && e.config.plotOptions.treemap.distributed || "heatmap" === e.config.chart.type && e.config.plotOptions.heatmap.distributed, this.isBarDistributed = e.config.plotOptions.bar.distributed && ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type)
            }
            return o(i, [{
                key: "init",
                value: function () {
                    this.setDefaultColors()
                }
            }, {
                key: "setDefaultColors",
                value: function () {
                    var a = this,
                        s = this.w,
                        t = new E;
                    if (s.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(s.config.theme.mode)), void 0 === s.config.colors ? s.globals.colors = this.predefined() : (s.globals.colors = s.config.colors, Array.isArray(s.config.colors) && 0 < s.config.colors.length && "function" == typeof s.config.colors[0] && (s.globals.colors = s.config.series.map(function (t, e) {
                        var i = s.config.colors[e];
                        return i || (i = s.config.colors[0]), "function" == typeof i ? (a.isColorFn = !0, i({
                            value: s.globals.axisCharts ? s.globals.series[e][0] ? s.globals.series[e][0] : 0 : s.globals.series[e],
                            seriesIndex: e,
                            dataPointIndex: e,
                            w: s
                        })) : i
                    }))), s.globals.seriesColors.map(function (t, e) {
                        t && (s.globals.colors[e] = t)
                    }), s.config.theme.monochrome.enabled) {
                        var e = [],
                            i = s.globals.series.length;
                        (this.isBarDistributed || this.isHeatmapDistributed) && (i = s.globals.series[0].length * s.globals.series.length);
                        for (var r = s.config.theme.monochrome.color, o = 1 / (i / s.config.theme.monochrome.shadeIntensity), n = s.config.theme.monochrome.shadeTo, l = 0, h = 0; h < i; h++) {
                            var c = void 0;
                            c = "dark" === n ? t.shadeColor(-1 * l, r) : t.shadeColor(l, r), l += o, e.push(c)
                        }
                        s.globals.colors = e.slice()
                    }
                    var d = s.globals.colors.slice();
                    this.pushExtraColors(s.globals.colors), ["fill", "stroke"].forEach(function (t) {
                        void 0 === s.config[t].colors ? s.globals[t].colors = a.isColorFn ? s.config.colors : d : s.globals[t].colors = s.config[t].colors.slice(), a.pushExtraColors(s.globals[t].colors)
                    }), void 0 === s.config.dataLabels.style.colors ? s.globals.dataLabels.style.colors = d : s.globals.dataLabels.style.colors = s.config.dataLabels.style.colors.slice(), this.pushExtraColors(s.globals.dataLabels.style.colors, 50), void 0 === s.config.plotOptions.radar.polygons.fill.colors ? s.globals.radarPolygons.fill.colors = [
                        "dark" === s.config.theme.mode ? "#424242" : "none"
                    ] : s.globals.radarPolygons.fill.colors = s.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(s.globals.radarPolygons.fill.colors, 20), void 0 === s.config.markers.colors ? s.globals.markers.colors = d : s.globals.markers.colors = s.config.markers.colors.slice(), this.pushExtraColors(s.globals.markers.colors)
                }
            }, {
                key: "pushExtraColors",
                value: function (t, e, i) {
                    var a = 2 < arguments.length && void 0 !== i ? arguments[2] : null,
                        s = this.w,
                        r = e || s.globals.series.length;
                    if (null === a && (a = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === s.config.chart.type && s.config.plotOptions.heatmap.colorScale.inverse), a && s.globals.series.length && (r = s.globals.series[s.globals.maxValsInArrayIndex].length * s.globals.series.length), t.length < r)
                        for (var o = r - t.length, n = 0; n < o; n++) t.push(t[n])
                }
            }, {
                key: "updateThemeOptions",
                value: function (t) {
                    t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
                    var e = t.theme.mode || "light",
                        i = t.theme.palette ? t.theme.palette : "dark" === e ? "palette4" : "palette1",
                        a = t.chart.foreColor ? t.chart.foreColor : "dark" === e ? "#f6f7f8" : "#373d3f";
                    return t.tooltip.theme = e, t.chart.foreColor = a, t.theme.palette = i, t
                }
            }, {
                key: "predefined",
                value: function () {
                    switch (this.w.config.theme.palette) {
                        case "palette1":
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                            break;
                        case "palette2":
                            this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
                            break;
                        case "palette3":
                            this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
                            break;
                        case "palette4":
                            this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
                            break;
                        case "palette5":
                            this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
                            break;
                        case "palette6":
                            this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
                            break;
                        case "palette7":
                            this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
                            break;
                        case "palette8":
                            this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
                            break;
                        case "palette9":
                            this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
                            break;
                        case "palette10":
                            this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
                            break;
                        default:
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
                    }
                    return this.colors
                }
            }]), i
        }(),
        it = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "draw",
                value: function () {
                    this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
                }
            }, {
                key: "drawTitleSubtitle",
                value: function (t) {
                    var e = this.w,
                        i = "title" === t ? e.config.title : e.config.subtitle,
                        a = e.globals.svgWidth / 2,
                        s = i.offsetY,
                        r = "middle";
                    if ("left" === i.align ? (a = 10, r = "start") : "right" === i.align && (a = e.globals.svgWidth - 10, r = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize, 10) + i.margin / 2, void 0 !== i.text) {
                        var o = new F(this.ctx).drawText({
                            x: a,
                            y: s,
                            text: i.text,
                            textAnchor: r,
                            fontSize: i.style.fontSize,
                            fontFamily: i.style.fontFamily,
                            fontWeight: i.style.fontWeight,
                            foreColor: i.style.color,
                            opacity: 1
                        });
                        o.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(o)
                    }
                }
            }]), e
        }(),
        at = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.dCtx = t
            }
            return o(e, [{
                key: "getTitleSubtitleCoords",
                value: function (t) {
                    var e = this.w,
                        i = 0,
                        a = 0,
                        s = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
                        r = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
                    if (null !== r && !s) {
                        var o = r.getBoundingClientRect();
                        i = o.width, a = e.globals.axisCharts ? o.height + 5 : o.height
                    }
                    return {
                        width: i,
                        height: a
                    }
                }
            }, {
                key: "getLegendsRect",
                value: function () {
                    var t = this.w,
                        e = t.globals.dom.baseEl.querySelector(".apexcharts-legend");
                    t.config.legend.height || "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || (e.style.maxHeight = t.globals.svgHeight / 2 + "px");
                    var i = Object.assign({}, E.getBoundingClientRect(e));
                    return null !== e && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = {
                        x: i.x,
                        y: i.y,
                        height: i.height,
                        width: 0 === i.height ? 0 : i.width
                    } : this.dCtx.lgRect = {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }, "left" !== t.config.legend.position && "right" !== t.config.legend.position || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect
                }
            }, {
                key: "getLargestStringFromMultiArr",
                value: function (t, e) {
                    var i = t;
                    if (this.w.globals.isMultiLineX) {
                        var a = e.map(function (t) {
                            return Array.isArray(t) ? t.length : 1
                        }),
                            s = Math.max.apply(Math, A(a));
                        i = e[a.indexOf(s)]
                    }
                    return i
                }
            }]), e
        }(),
        st = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.dCtx = t
            }
            return o(e, [{
                key: "getxAxisLabelsCoords",
                value: function () {
                    var t, e = this.w,
                        i = e.globals.labels.slice();
                    if (e.config.xaxis.convertedCatToNumeric && 0 === i.length && (i = e.globals.categoryLabels), 0 < e.globals.timescaleLabels.length) {
                        var a = this.getxAxisTimeScaleLabelsCoords();
                        t = {
                            width: a.width,
                            height: a.height
                        }, e.globals.rotateXLabels = !1
                    } else {
                        this.dCtx.lgWidthForSideLegends = "left" !== e.config.legend.position && "right" !== e.config.legend.position || e.config.legend.floating ? 0 : this.dCtx.lgRect.width;
                        var s = e.globals.xLabelFormatter,
                            r = E.getLargestStringFromArr(i),
                            o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, i);
                        e.globals.isBarHorizontal && (o = r = e.globals.yAxisScale[0].result.reduce(function (t, e) {
                            return t.length > e.length ? t : e
                        }, 0));
                        var n = new V(this.dCtx.ctx),
                            l = r;
                        r = n.xLabelFormat(s, r, l, {
                            i: void 0,
                            dateFormatter: new R(this.dCtx.ctx).formatDate,
                            w: e
                        }), o = n.xLabelFormat(s, o, l, {
                            i: void 0,
                            dateFormatter: new R(this.dCtx.ctx).formatDate,
                            w: e
                        }), (e.config.xaxis.convertedCatToNumeric && void 0 === r || "" === String(r).trim()) && (o = r = "1");
                        var h = new F(this.dCtx.ctx),
                            c = h.getTextRects(r, e.config.xaxis.labels.style.fontSize),
                            d = c;
                        if (r !== o && (d = h.getTextRects(o, e.config.xaxis.labels.style.fontSize)), (t = {
                            width: c.width >= d.width ? c.width : d.width,
                            height: c.height >= d.height ? c.height : d.height
                        }).width * i.length > e.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e.config.xaxis.labels.rotate || e.config.xaxis.labels.rotateAlways) {
                            if (!e.globals.isBarHorizontal) {
                                e.globals.rotateXLabels = !0;
                                var g = function (t) {
                                    return h.getTextRects(t, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1)
                                };
                                c = g(r), r !== o && (d = g(o)), t.height = (c.height > d.height ? c.height : d.height) / 1.5, t.width = c.width > d.width ? c.width : d.width
                            }
                        } else e.globals.rotateXLabels = !1
                    }
                    return e.config.xaxis.labels.show || (t = {
                        width: 0,
                        height: 0
                    }), {
                        width: t.width,
                        height: t.height
                    }
                }
            }, {
                key: "getxAxisTitleCoords",
                value: function () {
                    var t = this.w,
                        e = 0,
                        i = 0;
                    if (void 0 !== t.config.xaxis.title.text) {
                        var a = new F(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                        e = a.width, i = a.height
                    }
                    return {
                        width: e,
                        height: i
                    }
                }
            }, {
                key: "getxAxisTimeScaleLabelsCoords",
                value: function () {
                    var t, e = this.w;
                    this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice();
                    var i = this.dCtx.timescaleLabels.map(function (t) {
                        return t.value
                    }),
                        a = i.reduce(function (t, e) {
                            return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e
                        }, 0);
                    return 1.05 * (t = new F(this.dCtx.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t
                }
            }, {
                key: "additionalPaddingXLabels",
                value: function (t) {
                    var r = this,
                        o = this.w,
                        n = o.globals,
                        l = o.config,
                        h = l.xaxis.type,
                        c = t.width;
                    n.skipLastTimelinelabel = !1, n.skipFirstTimelinelabel = !1;
                    var i = o.config.yaxis[0].opposite && o.globals.isBarHorizontal,
                        a = function (t, e) {
                            var i;
                            i = e, -1 !== n.collapsedSeriesIndices.indexOf(i) || function (t) {
                                if (r.dCtx.timescaleLabels && r.dCtx.timescaleLabels.length) {
                                    var e = r.dCtx.timescaleLabels[0],
                                        i = r.dCtx.timescaleLabels[r.dCtx.timescaleLabels.length - 1].position + c / 1.75 - r.dCtx.yAxisWidthRight,
                                        a = e.position - c / 1.75 + r.dCtx.yAxisWidthLeft,
                                        s = "right" === o.config.legend.position && 0 < r.dCtx.lgRect.width ? r.dCtx.lgRect.width : 0;
                                    i > n.svgWidth - n.translateX - s && (n.skipLastTimelinelabel = !0), a < -(t.show && !t.floating || "bar" !== l.chart.type && "candlestick" !== l.chart.type && "rangeBar" !== l.chart.type && "boxPlot" !== l.chart.type ? 10 : c / 1.75) && (n.skipFirstTimelinelabel = !0)
                                } else "datetime" === h ? r.dCtx.gridPad.right < c && !n.rotateXLabels && (n.skipLastTimelinelabel = !0) : "datetime" !== h && r.dCtx.gridPad.right < c / 2 - r.dCtx.yAxisWidthRight && !n.rotateXLabels && !o.config.xaxis.labels.trim && ("between" !== o.config.xaxis.tickPlacement || o.globals.isBarHorizontal) && (r.dCtx.xPadRight = c / 2 + 1)
                            }(t)
                        };
                    l.yaxis.forEach(function (t, e) {
                        i ? (r.dCtx.gridPad.left < c && (r.dCtx.xPadLeft = c / 2 + 1), r.dCtx.xPadRight = c / 2 + 1) : a(t, e)
                    })
                }
            }]), e
        }(),
        rt = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.dCtx = t
            }
            return o(e, [{
                key: "getyAxisLabelsCoords",
                value: function () {
                    var p = this,
                        f = this.w,
                        x = [],
                        b = 10,
                        m = new G(this.dCtx.ctx);
                    return f.config.yaxis.map(function (t, e) {
                        var i = f.globals.yAxisScale[e],
                            a = 0;
                        if (!m.isYAxisHidden(e) && t.labels.show && void 0 !== t.labels.minWidth && (a = t.labels.minWidth), !m.isYAxisHidden(e) && t.labels.show && i.result.length) {
                            var s = f.globals.yLabelFormatters[e],
                                r = i.niceMin === Number.MIN_VALUE ? 0 : i.niceMin,
                                o = String(r).length > String(i.niceMax).length ? r : i.niceMax,
                                n = s(o, {
                                    seriesIndex: e,
                                    dataPointIndex: -1,
                                    w: f
                                }),
                                l = n;
                            if (void 0 !== n && 0 !== n.length || (n = o), f.globals.isBarHorizontal) {
                                b = 0;
                                var h = f.globals.labels.slice();
                                n = s(n = E.getLargestStringFromArr(h), {
                                    seriesIndex: e,
                                    dataPointIndex: -1,
                                    w: f
                                }), l = p.dCtx.dimHelpers.getLargestStringFromMultiArr(n, h)
                            }
                            var c = new F(p.dCtx.ctx),
                                d = "rotate(".concat(t.labels.rotate, " 0 0)"),
                                g = c.getTextRects(n, t.labels.style.fontSize, t.labels.style.fontFamily, d, !1),
                                u = g;
                            n !== l && (u = c.getTextRects(l, t.labels.style.fontSize, t.labels.style.fontFamily, d, !1)), x.push({
                                width: (a > u.width || a > g.width ? a : u.width > g.width ? u.width : g.width) + b,
                                height: u.height > g.height ? u.height : g.height
                            })
                        } else x.push({
                            width: 0,
                            height: 0
                        })
                    }), x
                }
            }, {
                key: "getyAxisTitleCoords",
                value: function () {
                    var s = this,
                        t = this.w,
                        r = [];
                    return t.config.yaxis.map(function (t) {
                        if (t.show && void 0 !== t.title.text) {
                            var e = new F(s.dCtx.ctx),
                                i = "rotate(".concat(t.title.rotate, " 0 0)"),
                                a = e.getTextRects(t.title.text, t.title.style.fontSize, t.title.style.fontFamily, i, !1);
                            r.push({
                                width: a.width,
                                height: a.height
                            })
                        } else r.push({
                            width: 0,
                            height: 0
                        })
                    }), r
                }
            }, {
                key: "getTotalYAxisWidth",
                value: function () {
                    var r = this.w,
                        o = 0,
                        n = 0,
                        l = 0,
                        h = 1 < r.globals.yAxisScale.length ? 10 : 0,
                        c = new G(this.dCtx.ctx),
                        i = function (t, e) {
                            var i, a = r.config.yaxis[e].floating,
                                s = 0;
                            0 < t.width && !a ? (s = t.width + h, i = e, -1 < r.globals.ignoreYAxisIndexes.indexOf(i) && (s = s - t.width - h)) : s = a || c.isYAxisHidden(e) ? 0 : 5, r.config.yaxis[e].opposite ? l += s : n += s, o += s
                        };
                    return r.globals.yLabelsCoords.map(function (t, e) {
                        i(t, e)
                    }), r.globals.yTitleCoords.map(function (t, e) {
                        i(t, e)
                    }), r.globals.isBarHorizontal && !r.config.yaxis[0].floating && (o = r.globals.yLabelsCoords[0].width + r.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = n, this.dCtx.yAxisWidthRight = l, o
                }
            }]), e
        }(),
        ot = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.dCtx = t
            }
            return o(e, [{
                key: "gridPadForColumnsInNumericAxis",
                value: function (t) {
                    var e = this.w;
                    if (e.globals.noData || e.globals.allSeriesCollapsed) return 0;
                    var i = function (t) {
                        return "bar" === t || "rangeBar" === t || "candlestick" === t || "boxPlot" === t
                    },
                        a = e.config.chart.type,
                        s = 0,
                        r = i(a) ? e.config.series.length : 1;
                    if (0 < e.globals.comboBarCount && (r = e.globals.comboBarCount), e.globals.collapsedSeries.forEach(function (t) {
                        i(t.type) && (r -= 1)
                    }), e.config.chart.stacked && (r = 1), (i(a) || 0 < e.globals.comboBarCount) && e.globals.isXNumeric && !e.globals.isBarHorizontal && 0 < r) {
                        var o, n, l = Math.abs(e.globals.initialMaxX - e.globals.initialMinX);
                        l <= 3 && (l = e.globals.dataPoints), o = l / t, e.globals.minXDiff && 0 < e.globals.minXDiff / o && (n = e.globals.minXDiff / o), t / 2 < n && (n /= 2), (s = n / r * parseInt(e.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (s = 1), s = s / (1 < r ? 1 : 1.5) + 5, e.globals.barPadForNumericAxis = s
                    }
                    return s
                }
            }, {
                key: "gridPadFortitleSubtitle",
                value: function () {
                    var e = this,
                        i = this.w,
                        t = i.globals,
                        a = this.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 10;
                    ["title", "subtitle"].forEach(function (t) {
                        void 0 !== i.config[t].text ? a += i.config[t].margin : a += e.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 5
                    }), !i.config.legend.show || "bottom" !== i.config.legend.position || i.config.legend.floating || i.globals.axisCharts || (a += 10);
                    var s = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),
                        r = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
                    t.gridHeight = t.gridHeight - s.height - r.height - a, t.translateY = t.translateY + s.height + r.height + a
                }
            }, {
                key: "setGridXPosForDualYAxis",
                value: function (i, a) {
                    var s = this.w,
                        r = new G(this.dCtx.ctx);
                    s.config.yaxis.map(function (t, e) {
                        -1 !== s.globals.ignoreYAxisIndexes.indexOf(e) || t.floating || r.isYAxisHidden(e) || (t.opposite && (s.globals.translateX = s.globals.translateX - (a[e].width + i[e].width) - parseInt(s.config.yaxis[e].labels.style.fontSize, 10) / 1.2 - 12), s.globals.translateX < 2 && (s.globals.translateX = 2))
                    })
                }
            }]), e
        }(),
        nt = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new at(this), this.dimYAxis = new rt(this), this.dimXAxis = new st(this), this.dimGrid = new ot(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0
            }
            return o(e, [{
                key: "plotCoords",
                value: function () {
                    var t = this.w.globals;
                    this.lgRect = this.dimHelpers.getLegendsRect(), t.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), t.gridHeight = t.gridHeight - this.gridPad.top - this.gridPad.bottom, t.gridWidth = t.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
                    var e = this.dimGrid.gridPadForColumnsInNumericAxis(t.gridWidth);
                    t.gridWidth = t.gridWidth - 2 * e, t.translateX = t.translateX + this.gridPad.left + this.xPadLeft + (0 < e ? e + 4 : 0), t.translateY = t.translateY + this.gridPad.top
                }
            }, {
                key: "setDimensionsForAxisCharts",
                value: function () {
                    var t = this,
                        i = this.w,
                        e = i.globals,
                        a = this.dimYAxis.getyAxisLabelsCoords(),
                        s = this.dimYAxis.getyAxisTitleCoords();
                    i.globals.yLabelsCoords = [], i.globals.yTitleCoords = [], i.config.yaxis.map(function (t, e) {
                        i.globals.yLabelsCoords.push({
                            width: a[e].width,
                            index: e
                        }), i.globals.yTitleCoords.push({
                            width: s[e].width,
                            index: e
                        })
                    }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
                    var r = this.dimXAxis.getxAxisLabelsCoords(),
                        o = this.dimXAxis.getxAxisTitleCoords();
                    this.conditionalChecksForAxisCoords(r, o), e.translateXAxisY = i.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, e.translateXAxisX = i.globals.rotateXLabels && i.globals.isXNumeric && i.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, i.globals.isBarHorizontal && (e.rotateXLabels = !1, e.translateXAxisY = parseInt(i.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), e.translateXAxisY = e.translateXAxisY + i.config.xaxis.labels.offsetY, e.translateXAxisX = e.translateXAxisX + i.config.xaxis.labels.offsetX;
                    var n = this.yAxisWidth,
                        l = this.xAxisHeight;
                    e.xAxisLabelsHeight = this.xAxisHeight - o.height, e.xAxisLabelsWidth = this.xAxisWidth, e.xAxisHeight = this.xAxisHeight;
                    var h = 10;
                    ("radar" === i.config.chart.type || this.isSparkline) && (n = 0, l = e.goldenPadding), this.isSparkline && (this.lgRect = {
                        height: 0,
                        width: 0
                    }), (this.isSparkline || "treemap" === i.config.chart.type) && (h = l = n = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(r);
                    var c = function () {
                        e.translateX = n, e.gridHeight = e.svgHeight - t.lgRect.height - l - (t.isSparkline || "treemap" === i.config.chart.type ? 0 : i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - n
                    };
                    switch ("top" === i.config.xaxis.position && (h = e.xAxisHeight - i.config.xaxis.axisTicks.height - 5), i.config.legend.position) {
                        case "bottom":
                            e.translateY = h, c();
                            break;
                        case "top":
                            e.translateY = this.lgRect.height + h, c();
                            break;
                        case "left":
                            e.translateY = h, e.translateX = this.lgRect.width + n, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - this.lgRect.width - n;
                            break;
                        case "right":
                            e.translateY = h, e.translateX = n, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - this.lgRect.width - n - 5;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                    this.dimGrid.setGridXPosForDualYAxis(s, a), new $(this.ctx).setYAxisXPosition(a, s)
                }
            }, {
                key: "setDimensionsForNonAxisCharts",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = t.config,
                        a = 0;
                    t.config.legend.show && !t.config.legend.floating && (a = 20);
                    var s = "pie" === i.chart.type || "polarArea" === i.chart.type || "donut" === i.chart.type ? "pie" : "radialBar",
                        r = i.plotOptions[s].offsetY,
                        o = i.plotOptions[s].offsetX;
                    if (!i.legend.show || i.legend.floating) return e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = r, void (e.translateX = o + (e.svgWidth - e.gridWidth) / 2);
                    switch (i.legend.position) {
                        case "bottom":
                            e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = r - 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2;
                            break;
                        case "top":
                            e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + r + 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2;
                            break;
                        case "left":
                            e.gridWidth = e.svgWidth - this.lgRect.width - a, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = r, e.translateX = o + this.lgRect.width + a;
                            break;
                        case "right":
                            e.gridWidth = e.svgWidth - this.lgRect.width - a - 5, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = r, e.translateX = o + 10;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                }
            }, {
                key: "conditionalChecksForAxisCoords",
                value: function (t, e) {
                    var i = this.w;
                    this.xAxisHeight = (t.height + e.height) * (i.globals.isMultiLineX ? 1.2 : i.globals.LINE_HEIGHT_RATIO) + (i.globals.rotateXLabels ? 22 : 10), this.xAxisWidth = t.width, this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0);
                    var a = 0,
                        s = 0;
                    i.config.yaxis.forEach(function (t) {
                        a += t.labels.minWidth, s += t.labels.maxWidth
                    }), this.yAxisWidth < a && (this.yAxisWidth = a), this.yAxisWidth > s && (this.yAxisWidth = s)
                }
            }]), e
        }(),
        lt = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.lgCtx = t
            }
            return o(e, [{
                key: "getLegendStyles",
                value: function () {
                    var t = document.createElement("style");
                    t.setAttribute("type", "text/css");
                    var e = document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }");
                    return t.appendChild(e), t
                }
            }, {
                key: "getLegendBBox",
                value: function () {
                    var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
                        e = t.width;
                    return {
                        clwh: t.height,
                        clww: e
                    }
                }
            }, {
                key: "appendToForeignObject",
                value: function () {
                    var t = this.w.globals;
                    t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject");
                    var e = t.dom.elLegendForeign;
                    e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node)
                }
            }, {
                key: "toggleDataSeries",
                value: function (t, e) {
                    var i = this,
                        a = this.w;
                    if (a.globals.axisCharts || "radialBar" === a.config.chart.type) {
                        a.globals.resized = !0;
                        var s = null,
                            r = null;
                        a.globals.risingSeries = [], a.globals.axisCharts ? (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), r = parseInt(s.getAttribute("data:realIndex"), 10)) : (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), r = parseInt(s.getAttribute("rel"), 10) - 1), e ? [{
                            cs: a.globals.collapsedSeries,
                            csi: a.globals.collapsedSeriesIndices
                        }, {
                            cs: a.globals.ancillaryCollapsedSeries,
                            csi: a.globals.ancillaryCollapsedSeriesIndices
                        }].forEach(function (t) {
                            i.riseCollapsedSeries(t.cs, t.csi, r)
                        }) : this.hideSeries({
                            seriesEl: s,
                            realIndex: r
                        })
                    } else {
                        var o = a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")),
                            n = a.config.chart.type;
                        if ("pie" === n || "polarArea" === n || "donut" === n) {
                            var l = a.config.plotOptions.pie.donut.labels;
                            new F(this.lgCtx.ctx).pathMouseDown(o.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node, l)
                        }
                        o.fire("click")
                    }
                }
            }, {
                key: "hideSeries",
                value: function (t) {
                    var e = t.seriesEl,
                        i = t.realIndex,
                        a = this.w,
                        s = E.clone(a.config.series);
                    if (a.globals.axisCharts) {
                        var r = !1;
                        if (a.config.yaxis[i] && a.config.yaxis[i].show && a.config.yaxis[i].showAlways && (r = !0, a.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (a.globals.ancillaryCollapsedSeries.push({
                            index: i,
                            data: s[i].data.slice(),
                            type: e.parentNode.className.baseVal.split("-")[1]
                        }), a.globals.ancillaryCollapsedSeriesIndices.push(i))), !r) {
                            a.globals.collapsedSeries.push({
                                index: i,
                                data: s[i].data.slice(),
                                type: e.parentNode.className.baseVal.split("-")[1]
                            }), a.globals.collapsedSeriesIndices.push(i);
                            var o = a.globals.risingSeries.indexOf(i);
                            a.globals.risingSeries.splice(o, 1)
                        }
                    } else a.globals.collapsedSeries.push({
                        index: i,
                        data: s[i]
                    }), a.globals.collapsedSeriesIndices.push(i);
                    for (var n = e.childNodes, l = 0; l < n.length; l++) n[l].classList.contains("apexcharts-series-markers-wrap") && (n[l].classList.contains("apexcharts-hide") ? n[l].classList.remove("apexcharts-hide") : n[l].classList.add("apexcharts-hide"));
                    a.globals.allSeriesCollapsed = a.globals.collapsedSeries.length === a.config.series.length, s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled)
                }
            }, {
                key: "riseCollapsedSeries",
                value: function (t, e, i) {
                    var a = this.w,
                        s = E.clone(a.config.series);
                    if (0 < t.length) {
                        for (var r = 0; r < t.length; r++) t[r].index === i && (a.globals.axisCharts ? s[i].data = t[r].data.slice() : s[i] = t[r].data, t.splice(r, 1), e.splice(r, 1), a.globals.risingSeries.push(i));
                        s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled)
                    }
                }
            }, {
                key: "_getSeriesBasedOnCollapsedState",
                value: function (i) {
                    var a = this.w;
                    return a.globals.axisCharts ? i.forEach(function (t, e) {
                        -1 < a.globals.collapsedSeriesIndices.indexOf(e) && (i[e].data = [])
                    }) : i.forEach(function (t, e) {
                        -1 < a.globals.collapsedSeriesIndices.indexOf(e) && (i[e] = 0)
                    }), i
                }
            }]), e
        }(),
        ht = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new lt(this)
            }
            return o(e, [{
                key: "init",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = t.config;
                    if ((i.legend.showForSingleSeries && 1 === e.series.length || this.isBarsDistributed || 1 < e.series.length || !e.axisCharts) && i.legend.show) {
                        for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                        this.drawLegends(), E.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical()
                    }
                }
            }, {
                key: "drawLegends",
                value: function () {
                    var t = this,
                        e = this.w,
                        i = e.config.legend.fontFamily,
                        a = e.globals.seriesNames,
                        s = e.globals.colors.slice();
                    if ("heatmap" === e.config.chart.type) {
                        var r = e.config.plotOptions.heatmap.colorScale.ranges;
                        a = r.map(function (t) {
                            return t.name ? t.name : t.from + " - " + t.to
                        }), s = r.map(function (t) {
                            return t.color
                        })
                    } else this.isBarsDistributed && (a = e.globals.labels.slice());
                    e.config.legend.customLegendItems.length && (a = e.config.legend.customLegendItems);
                    for (var o = e.globals.legendFormatter, n = e.config.legend.inverseOrder, l = n ? a.length - 1 : 0; n ? 0 <= l : l <= a.length - 1; n ? l-- : l++) {
                        var h = o(a[l], {
                            seriesIndex: l,
                            w: e
                        }),
                            c = !1,
                            d = !1;
                        if (0 < e.globals.collapsedSeries.length)
                            for (var g = 0; g < e.globals.collapsedSeries.length; g++) e.globals.collapsedSeries[g].index === l && (c = !0);
                        if (0 < e.globals.ancillaryCollapsedSeriesIndices.length)
                            for (var u = 0; u < e.globals.ancillaryCollapsedSeriesIndices.length; u++) e.globals.ancillaryCollapsedSeriesIndices[u] === l && (d = !0);
                        var p = document.createElement("span");
                        p.classList.add("apexcharts-legend-marker");
                        var f = e.config.legend.markers.offsetX,
                            x = e.config.legend.markers.offsetY,
                            b = e.config.legend.markers.height,
                            m = e.config.legend.markers.width,
                            v = e.config.legend.markers.strokeWidth,
                            y = e.config.legend.markers.strokeColor,
                            w = e.config.legend.markers.radius,
                            k = p.style;
                        k.background = s[l], k.color = s[l], k.setProperty("background", s[l], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[l] && (k.background = e.config.legend.markers.fillColors[l]), void 0 !== e.globals.seriesColors[l] && (k.background = e.globals.seriesColors[l], k.color = e.globals.seriesColors[l]), k.height = Array.isArray(b) ? parseFloat(b[l]) + "px" : parseFloat(b) + "px", k.width = Array.isArray(m) ? parseFloat(m[l]) + "px" : parseFloat(m) + "px", k.left = (Array.isArray(f) ? parseFloat(f[l]) : parseFloat(f)) + "px", k.top = (Array.isArray(x) ? parseFloat(x[l]) : parseFloat(x)) + "px", k.borderWidth = Array.isArray(v) ? v[l] : v, k.borderColor = Array.isArray(y) ? y[l] : y, k.borderRadius = Array.isArray(w) ? parseFloat(w[l]) + "px" : parseFloat(w) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[l] && (p.innerHTML = e.config.legend.markers.customHTML[l]()) : p.innerHTML = e.config.legend.markers.customHTML()), F.setAttrs(p, {
                            rel: l + 1,
                            "data:collapsed": c || d
                        }), (c || d) && p.classList.add("apexcharts-inactive-legend");
                        var A = document.createElement("div"),
                            S = document.createElement("span");
                        S.classList.add("apexcharts-legend-text"), S.innerHTML = Array.isArray(h) ? h.join(" ") : h;
                        var C = e.config.legend.labels.useSeriesColors ? e.globals.colors[l] : e.config.legend.labels.colors;
                        C || (C = e.config.chart.foreColor), S.style.color = C, S.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", S.style.fontWeight = e.config.legend.fontWeight, S.style.fontFamily = i || e.config.chart.fontFamily, F.setAttrs(S, {
                            rel: l + 1,
                            i: l,
                            "data:default-text": encodeURIComponent(h),
                            "data:collapsed": c || d
                        }), A.appendChild(p), A.appendChild(S);
                        var L = new M(this.ctx);
                        e.config.legend.showForZeroSeries || 0 === L.getSeriesTotalByIndex(l) && L.seriesHaveSameValues(l) && !L.isSeriesNull(l) && -1 === e.globals.collapsedSeriesIndices.indexOf(l) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(l) && A.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries || L.isSeriesNull(l) && -1 === e.globals.collapsedSeriesIndices.indexOf(l) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(l) && A.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(A), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e.config.legend.position), A.classList.add("apexcharts-legend-series"), A.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", F.setAttrs(A, {
                            rel: l + 1,
                            seriesName: E.escapeString(a[l]),
                            "data:collapsed": c || d
                        }), (c || d) && A.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || A.classList.add("apexcharts-no-click")
                    }
                    e.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && 0 === e.config.legend.customLegendItems.length && (e.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0))
                }
            }, {
                key: "setLegendWrapXY",
                value: function (t, e) {
                    var i = this.w,
                        a = i.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                        s = a.getBoundingClientRect(),
                        r = 0,
                        o = 0;
                    if ("bottom" === i.config.legend.position) o += i.globals.svgHeight - s.height / 2;
                    else if ("top" === i.config.legend.position) {
                        var n = new nt(this.ctx),
                            l = n.dimHelpers.getTitleSubtitleCoords("title").height,
                            h = n.dimHelpers.getTitleSubtitleCoords("subtitle").height;
                        o = o + (0 < l ? l - 10 : 0) + (0 < h ? h - 10 : 0)
                    }
                    a.style.position = "absolute", r = r + t + i.config.legend.offsetX, o = o + e + i.config.legend.offsetY, a.style.left = r + "px", a.style.top = o + "px", "bottom" === i.config.legend.position ? (a.style.top = "auto", a.style.bottom = 5 - i.config.legend.offsetY + "px") : "right" === i.config.legend.position && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach(function (t) {
                        a.style[t] && (a.style[t] = parseInt(i.config.legend[t], 10) + "px")
                    })
                }
            }, {
                key: "legendAlignHorizontal",
                value: function () {
                    var t = this.w;
                    t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0;
                    var e = this.legendHelpers.getLegendBBox(),
                        i = new nt(this.ctx),
                        a = i.dimHelpers.getTitleSubtitleCoords("title"),
                        s = i.dimHelpers.getTitleSubtitleCoords("subtitle"),
                        r = 0;
                    "bottom" === t.config.legend.position ? r = -e.clwh / 1.8 : "top" === t.config.legend.position && (r = a.height + s.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, r)
                }
            }, {
                key: "legendAlignVertical",
                value: function () {
                    var t = this.w,
                        e = this.legendHelpers.getLegendBBox(),
                        i = 0;
                    "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20)
                }
            }, {
                key: "onLegendHovered",
                value: function (t) {
                    var e = this.w,
                        i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
                    if ("heatmap" === e.config.chart.type || this.isBarsDistributed) {
                        if (i) {
                            var a = parseInt(t.target.getAttribute("rel"), 10) - 1;
                            this.ctx.events.fireEvent("legendHover", [this.ctx, a, this.w]), new S(this.ctx).highlightRangeInSeries(t, t.target)
                        }
                    } else !t.target.classList.contains("apexcharts-inactive-legend") && i && new S(this.ctx).toggleSeriesOnHover(t, t.target)
                }
            }, {
                key: "onLegendClick",
                value: function (t) {
                    var e = this.w;
                    if (!e.config.legend.customLegendItems.length && (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker"))) {
                        var i = parseInt(t.target.getAttribute("rel"), 10) - 1,
                            a = "true" === t.target.getAttribute("data:collapsed"),
                            s = this.w.config.chart.events.legendClick;
                        "function" == typeof s && s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
                        var r = this.w.config.legend.markers.onClick;
                        "function" == typeof r && t.target.classList.contains("apexcharts-legend-marker") && (r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), "treemap" !== e.config.chart.type && "heatmap" !== e.config.chart.type && !this.isBarsDistributed && e.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, a)
                    }
                }
            }]), e
        }(),
        ct = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = e.globals.minX, this.maxX = e.globals.maxX
            }
            return o(i, [{
                key: "createToolbar",
                value: function () {
                    var s = this,
                        r = this.w,
                        t = function () {
                            return document.createElement("div")
                        },
                        e = t();
                    if (e.setAttribute("class", "apexcharts-toolbar"),
                        e.style.top = r.config.chart.toolbar.offsetY + "px", e.style.right = 3 - r.config.chart.toolbar.offsetX + "px", r.globals.dom.elWrap.appendChild(e), this.elZoom = t(), this.elZoomIn = t(), this.elZoomOut = t(), this.elPan = t(), this.elSelection = t(), this.elZoomReset = t(), this.elMenuIcon = t(), this.elMenu = t(), this.elCustomIcons = [], this.t = r.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))
                        for (var i = 0; i < this.t.customIcons.length; i++) this.elCustomIcons.push(t());
                    var o = [],
                        a = function (t, e, i) {
                            var a = t.toLowerCase();
                            s.t[a] && r.config.chart.zoom.enabled && o.push({
                                el: e,
                                icon: "string" == typeof s.t[a] ? s.t[a] : i,
                                title: s.localeValues[t],
                                "class": "apexcharts-".concat(a, "-icon")
                            })
                        };
                    a("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), a("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
                    var n = function (t) {
                        s.t[t] && r.config.chart[t].enabled && o.push({
                            el: "zoom" === t ? s.elZoom : s.elSelection,
                            icon: "string" == typeof s.t[t] ? s.t[t] : "zoom" === t ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
                            title: s.localeValues["zoom" === t ? "selectionZoom" : "selection"],
                            "class": r.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(t, "-icon")
                        })
                    };
                    n("zoom"), n("selection"), this.t.pan && r.config.chart.zoom.enabled && o.push({
                        el: this.elPan,
                        icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
                        title: this.localeValues.pan,
                        "class": r.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon"
                    }), a("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && o.push({
                        el: this.elMenuIcon,
                        icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
                        title: this.localeValues.menu,
                        "class": "apexcharts-menu-icon"
                    });
                    for (var l = 0; l < this.elCustomIcons.length; l++) o.push({
                        el: this.elCustomIcons[l],
                        icon: this.t.customIcons[l].icon,
                        title: this.t.customIcons[l].title,
                        index: this.t.customIcons[l].index,
                        "class": "apexcharts-toolbar-custom-icon " + this.t.customIcons[l]["class"]
                    });
                    o.forEach(function (t, e) {
                        t.index && E.moveIndexInArray(o, e, t.index)
                    });
                    for (var h = 0; h < o.length; h++) F.setAttrs(o[h].el, {
                        "class": o[h]["class"],
                        title: o[h].title
                    }), o[h].el.innerHTML = o[h].icon, e.appendChild(o[h].el);
                    this._createHamburgerMenu(e), r.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : r.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : r.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners()
                }
            }, {
                key: "_createHamburgerMenu",
                value: function (t) {
                    this.elMenuItems = [], t.appendChild(this.elMenu), F.setAttrs(this.elMenu, {
                        "class": "apexcharts-menu"
                    });
                    var e = [{
                        name: "exportSVG",
                        title: this.localeValues.exportToSVG
                    }, {
                        name: "exportPNG",
                        title: this.localeValues.exportToPNG
                    }, {
                        name: "exportCSV",
                        title: this.localeValues.exportToCSV
                    }];
                    this.w.globals.allSeriesHasEqualX || e.splice(2, 1);
                    for (var i = 0; i < e.length; i++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, F.setAttrs(this.elMenuItems[i], {
                        "class": "apexcharts-menu-item ".concat(e[i].name),
                        title: e[i].title
                    }), this.elMenu.appendChild(this.elMenuItems[i])
                }
            }, {
                key: "addToolbarEventListeners",
                value: function () {
                    var e = this;
                    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function (t) {
                        t.classList.contains("exportSVG") ? t.addEventListener("click", e.handleDownload.bind(e, "svg")) : t.classList.contains("exportPNG") ? t.addEventListener("click", e.handleDownload.bind(e, "png")) : t.classList.contains("exportCSV") && t.addEventListener("click", e.handleDownload.bind(e, "csv"))
                    });
                    for (var t = 0; t < this.t.customIcons.length; t++) this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w))
                }
            }, {
                key: "toggleZoomSelection",
                value: function (a) {
                    this.ctx.getSyncedCharts().forEach(function (t) {
                        t.ctx.toolbar.toggleOtherControls();
                        var e = "selection" === a ? t.ctx.toolbar.elSelection : t.ctx.toolbar.elZoom,
                            i = "selection" === a ? "selectionEnabled" : "zoomEnabled";
                        t.w.globals[i] = !t.w.globals[i], e.classList.contains(t.ctx.toolbar.selectedClass) ? e.classList.remove(t.ctx.toolbar.selectedClass) : e.classList.add(t.ctx.toolbar.selectedClass)
                    })
                }
            }, {
                key: "getToolbarIconsReference",
                value: function () {
                    var t = this.w;
                    this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
                }
            }, {
                key: "enableZoomPanFromToolbar",
                value: function (t) {
                    this.toggleOtherControls(), "pan" === t ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
                    var e = "pan" === t ? this.elPan : this.elZoom,
                        i = "pan" === t ? this.elZoom : this.elPan;
                    e && e.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass)
                }
            }, {
                key: "togglePanning",
                value: function () {
                    this.ctx.getSyncedCharts().forEach(function (t) {
                        t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled = !t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass) ? t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass) : t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)
                    })
                }
            }, {
                key: "toggleOtherControls",
                value: function () {
                    var e = this,
                        t = this.w;
                    t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function (t) {
                        t && t.classList.remove(e.selectedClass)
                    })
                }
            }, {
                key: "handleZoomIn",
                value: function () {
                    var t = this.w;
                    t.globals.isTimelineBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY);
                    var e = (this.minX + this.maxX) / 2,
                        i = (this.minX + e) / 2,
                        a = (this.maxX + e) / 2,
                        s = this._getNewMinXMaxX(i, a);
                    t.globals.disableZoomIn || this.zoomUpdateOptions(s.minX, s.maxX)
                }
            }, {
                key: "handleZoomOut",
                value: function () {
                    var t = this.w;
                    if (t.globals.isTimelineBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY), !("datetime" === t.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) {
                        var e = (this.minX + this.maxX) / 2,
                            i = this.minX - (e - this.minX),
                            a = this.maxX - (e - this.maxX),
                            s = this._getNewMinXMaxX(i, a);
                        t.globals.disableZoomOut || this.zoomUpdateOptions(s.minX, s.maxX)
                    }
                }
            }, {
                key: "_getNewMinXMaxX",
                value: function (t, e) {
                    var i = this.w.config.xaxis.convertedCatToNumeric;
                    return {
                        minX: i ? Math.floor(t) : t,
                        maxX: i ? Math.floor(e) : e
                    }
                }
            }, {
                key: "zoomUpdateOptions",
                value: function (t, e) {
                    var i = this.w;
                    if (void 0 !== t || void 0 !== e) {
                        if (!(i.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = i.globals.dataPoints), e - t < 2))) {
                            var a = {
                                min: t,
                                max: e
                            },
                                s = this.getBeforeZoomRange(a);
                            s && (a = s.xaxis);
                            var r = {
                                xaxis: a
                            },
                                o = E.clone(i.globals.initialConfig.yaxis);
                            i.config.chart.zoom.autoScaleYaxis && (o = new q(this.ctx).autoScaleY(this.ctx, o, {
                                xaxis: a
                            })), i.config.chart.group || (r.yaxis = o), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, o)
                        }
                    } else this.handleZoomReset()
                }
            }, {
                key: "zoomCallback",
                value: function (t, e) {
                    "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {
                        xaxis: t,
                        yaxis: e
                    })
                }
            }, {
                key: "getBeforeZoomRange",
                value: function (t, e) {
                    var i = null;
                    return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, {
                        xaxis: t,
                        yaxis: e
                    })), i
                }
            }, {
                key: "toggleMenu",
                value: function () {
                    var t = this;
                    window.setTimeout(function () {
                        t.elMenu.classList.contains("apexcharts-menu-open") ? t.elMenu.classList.remove("apexcharts-menu-open") : t.elMenu.classList.add("apexcharts-menu-open")
                    }, 0)
                }
            }, {
                key: "handleDownload",
                value: function (t) {
                    var e = this.w,
                        i = new _(this.ctx);
                    switch (t) {
                        case "svg":
                            i.exportToSVG(this.ctx);
                            break;
                        case "png":
                            i.exportToPng(this.ctx);
                            break;
                        case "csv":
                            i.exportToCSV({
                                series: e.config.series,
                                columnDelimiter: e.config.chart.toolbar["export"].csv.columnDelimiter
                            })
                    }
                }
            }, {
                key: "handleZoomReset",
                value: function () {
                    this.ctx.getSyncedCharts().forEach(function (t) {
                        var e = t.w;
                        if (e.globals.lastXAxis.min = void 0, e.globals.lastXAxis.max = void 0, t.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.beforeResetZoom) {
                            var i = e.config.chart.events.beforeResetZoom(t, e);
                            i && t.updateHelpers.revertDefaultAxisMinMax(i)
                        }
                        "function" == typeof e.config.chart.events.zoomed && t.ctx.toolbar.zoomCallback({
                            min: e.config.xaxis.min,
                            max: e.config.xaxis.max
                        }), e.globals.zoomed = !1;
                        var a = t.ctx.series.emptyCollapsedSeries(E.clone(e.globals.initialSeries));
                        t.updateHelpers._updateSeries(a, e.config.chart.animations.dynamicAnimation.enabled)
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null
                }
            }]), i
        }(),
        dt = function () {
            function i(t) {
                var e;
                return r(this, i), (e = a.call(this, t)).ctx = t, e.w = t.w, e.dragged = !1, e.graphics = new F(e.ctx), e.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], e.clientX = 0, e.clientY = 0, e.startX = 0, e.endX = 0, e.dragX = 0, e.startY = 0, e.endY = 0, e.dragY = 0, e.moveDirection = "none", e
            }
            n(i, ct);
            var a = d(i);
            return o(i, [{
                key: "init",
                value: function (t) {
                    var e = this,
                        i = t.xyRatios,
                        a = this.w,
                        s = this;
                    this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a.globals.dom.elGraphical.add(this.zoomRect), a.globals.dom.elGraphical.add(this.selectionRect), "x" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        minY: 0,
                        maxX: a.globals.gridWidth,
                        maxY: a.globals.gridHeight
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        maxX: a.globals.gridWidth
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function (t) {
                        e.hoverArea.addEventListener(t, s.svgMouseEvents.bind(s, i), {
                            capture: !1,
                            passive: !0
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
                }
            }, {
                key: "svgMouseEvents",
                value: function (t, e) {
                    var i = this.w,
                        a = this,
                        s = this.ctx.toolbar,
                        r = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type,
                        o = i.config.chart.toolbar.autoSelected;
                    e.shiftKey ? (this.shiftWasPressed = !0, s.enableZoomPanFromToolbar("pan" === o ? "zoom" : "pan")) : this.shiftWasPressed && (s.enableZoomPanFromToolbar(o), this.shiftWasPressed = !1);
                    var n = e.target.classList;
                    if (!(n.contains("apexcharts-selection-rect") || n.contains("apexcharts-legend-marker") || n.contains("apexcharts-legend-text") || e.target.parentNode.classList.contains("apexcharts-toolbar"))) {
                        if (a.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX, a.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY, "mousedown" === e.type && 1 === e.which) {
                            var l = a.gridRect.getBoundingClientRect();
                            a.startX = a.clientX - l.left, a.startY = a.clientY - l.top, a.dragged = !1, a.w.globals.mousedown = !0
                        }
                        if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (a.dragged = !0, i.globals.panEnabled ? (i.globals.selection = null, a.w.globals.mousedown && a.panDragging({
                            context: a,
                            zoomtype: r,
                            xyRatios: t
                        })) : (a.w.globals.mousedown && i.globals.zoomEnabled || a.w.globals.mousedown && i.globals.selectionEnabled) && (a.selection = a.selectionDrawing({
                            context: a,
                            zoomtype: r
                        }))), "mouseup" === e.type || "touchend" === e.type || "mouseleave" === e.type) {
                            var h = a.gridRect.getBoundingClientRect();
                            a.w.globals.mousedown && (a.endX = a.clientX - h.left, a.endY = a.clientY - h.top, a.dragX = Math.abs(a.endX - a.startX), a.dragY = Math.abs(a.endY - a.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) && a.selectionDrawn({
                                context: a,
                                zoomtype: r
                            }), i.globals.panEnabled && i.config.xaxis.convertedCatToNumeric && a.delayedPanScrolled()), i.globals.zoomEnabled && a.hideSelectionRect(this.selectionRect), a.dragged = !1, a.w.globals.mousedown = !1
                        }
                        this.makeSelectionRectDraggable()
                    }
                }
            }, {
                key: "makeSelectionRectDraggable",
                value: function () {
                    var t = this.w;
                    if (this.selectionRect) {
                        var e = this.selectionRect.node.getBoundingClientRect();
                        0 < e.width && 0 < e.height && this.slDraggableRect.selectize({
                            points: "l, r",
                            pointSize: 8,
                            pointType: "rect"
                        }).resize({
                            constraint: {
                                minX: 0,
                                minY: 0,
                                maxX: t.globals.gridWidth,
                                maxY: t.globals.gridHeight
                            }
                        }).on("resizing", this.selectionDragging.bind(this, "resizing"))
                    }
                }
            }, {
                key: "preselectedSelection",
                value: function () {
                    var t = this.w,
                        e = this.xyRatios;
                    if (!t.globals.zoomEnabled)
                        if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection);
                        else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
                            var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
                                a = {
                                    x: i,
                                    y: 0,
                                    width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i,
                                    height: t.globals.gridHeight,
                                    translateX: 0,
                                    translateY: 0,
                                    selectionEnabled: !0
                                };
                            this.drawSelectionRect(a), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events.selection && t.config.chart.events.selection(this.ctx, {
                                xaxis: {
                                    min: t.config.chart.selection.xaxis.min,
                                    max: t.config.chart.selection.xaxis.max
                                },
                                yaxis: {}
                            })
                        }
                }
            }, {
                key: "drawSelectionRect",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        a = t.width,
                        s = t.height,
                        r = t.translateX,
                        o = void 0 === r ? 0 : r,
                        n = t.translateY,
                        l = void 0 === n ? 0 : n,
                        h = this.w,
                        c = this.zoomRect,
                        d = this.selectionRect;
                    if (this.dragged || null !== h.globals.selection) {
                        var g = {
                            transform: "translate(" + o + ", " + l + ")"
                        };
                        h.globals.zoomEnabled && this.dragged && (a < 0 && (a = 1), c.attr({
                            x: e,
                            y: i,
                            width: a,
                            height: s,
                            fill: h.config.chart.zoom.zoomedArea.fill.color,
                            "fill-opacity": h.config.chart.zoom.zoomedArea.fill.opacity,
                            stroke: h.config.chart.zoom.zoomedArea.stroke.color,
                            "stroke-width": h.config.chart.zoom.zoomedArea.stroke.width,
                            "stroke-opacity": h.config.chart.zoom.zoomedArea.stroke.opacity
                        }), F.setAttrs(c.node, g)), h.globals.selectionEnabled && (d.attr({
                            x: e,
                            y: i,
                            width: 0 < a ? a : 0,
                            height: 0 < s ? s : 0,
                            fill: h.config.chart.selection.fill.color,
                            "fill-opacity": h.config.chart.selection.fill.opacity,
                            stroke: h.config.chart.selection.stroke.color,
                            "stroke-width": h.config.chart.selection.stroke.width,
                            "stroke-dasharray": h.config.chart.selection.stroke.dashArray,
                            "stroke-opacity": h.config.chart.selection.stroke.opacity
                        }), F.setAttrs(d.node, g))
                    }
                }
            }, {
                key: "hideSelectionRect",
                value: function (t) {
                    t && t.attr({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    })
                }
            }, {
                key: "selectionDrawing",
                value: function (t) {
                    var e = t.context,
                        i = t.zoomtype,
                        a = this.w,
                        s = e,
                        r = this.gridRect.getBoundingClientRect(),
                        o = s.startX - 1,
                        n = s.startY,
                        l = !1,
                        h = !1,
                        c = s.clientX - r.left - o,
                        d = s.clientY - r.top - n,
                        g = {};
                    return Math.abs(c + o) > a.globals.gridWidth ? c = a.globals.gridWidth - o : s.clientX - r.left < 0 && (c = o), o > s.clientX - r.left && (l = !0, c = Math.abs(c)), n > s.clientY - r.top && (h = !0, d = Math.abs(d)), g = "x" === i ? {
                        x: l ? o - c : o,
                        y: 0,
                        width: c,
                        height: a.globals.gridHeight
                    } : "y" === i ? {
                        x: 0,
                        y: h ? n - d : n,
                        width: a.globals.gridWidth,
                        height: d
                    } : {
                        x: l ? o - c : o,
                        y: h ? n - d : n,
                        width: c,
                        height: d
                    }, s.drawSelectionRect(g), s.selectionDragging("resizing"), g
                }
            }, {
                key: "selectionDragging",
                value: function (t) {
                    var a = this,
                        s = this.w,
                        r = this.xyRatios,
                        o = this.selectionRect,
                        e = 0;
                    "resizing" === t && (e = 30);
                    var i = function (t) {
                        return parseFloat(o.node.getAttribute(t))
                    },
                        n = {
                            x: i("x"),
                            y: i("y"),
                            width: i("width"),
                            height: i("height")
                        };
                    s.globals.selection = n, "function" == typeof s.config.chart.events.selection && s.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function () {
                        var t = a.gridRect.getBoundingClientRect(),
                            e = o.node.getBoundingClientRect(),
                            i = {
                                xaxis: {
                                    min: s.globals.xAxisScale.niceMin + (e.left - t.left) * r.xRatio,
                                    max: s.globals.xAxisScale.niceMin + (e.right - t.left) * r.xRatio
                                },
                                yaxis: {
                                    min: s.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * r.yRatio[0],
                                    max: s.globals.yAxisScale[0].niceMax - (e.top - t.top) * r.yRatio[0]
                                }
                            };
                        s.config.chart.events.selection(a.ctx, i), s.config.chart.brush.enabled && void 0 !== s.config.chart.events.brushScrolled && s.config.chart.events.brushScrolled(a.ctx, i)
                    }, e))
                }
            }, {
                key: "selectionDrawn",
                value: function (t) {
                    var e = t.context,
                        i = t.zoomtype,
                        a = this.w,
                        s = e,
                        r = this.xyRatios,
                        o = this.ctx.toolbar;
                    if (s.startX > s.endX) {
                        var n = s.startX;
                        s.startX = s.endX, s.endX = n
                    }
                    if (s.startY > s.endY) {
                        var l = s.startY;
                        s.startY = s.endY, s.endY = l
                    }
                    var h = void 0,
                        c = void 0;
                    a.globals.isTimelineBar ? (h = a.globals.yAxisScale[0].niceMin + s.startX * r.invertedYRatio, c = a.globals.yAxisScale[0].niceMin + s.endX * r.invertedYRatio) : (h = a.globals.xAxisScale.niceMin + s.startX * r.xRatio, c = a.globals.xAxisScale.niceMin + s.endX * r.xRatio);
                    var d = [],
                        g = [];
                    if (a.config.yaxis.forEach(function (t, e) {
                        d.push(a.globals.yAxisScale[e].niceMax - r.yRatio[e] * s.startY), g.push(a.globals.yAxisScale[e].niceMax - r.yRatio[e] * s.endY)
                    }), s.dragged && (10 < s.dragX || 10 < s.dragY) && h !== c)
                        if (a.globals.zoomEnabled) {
                            var u = E.clone(a.globals.initialConfig.yaxis),
                                p = E.clone(a.globals.initialConfig.xaxis);
                            if (a.globals.zoomed = !0, a.config.xaxis.convertedCatToNumeric && (h = Math.floor(h), c = Math.floor(c), h < 1 && (h = 1, c = a.globals.dataPoints), c - h < 2 && (c = h + 1)), "xy" !== i && "x" !== i || (p = {
                                min: h,
                                max: c
                            }), "xy" !== i && "y" !== i || u.forEach(function (t, e) {
                                u[e].min = g[e], u[e].max = d[e]
                            }), a.config.chart.zoom.autoScaleYaxis) {
                                var f = new q(s.ctx);
                                u = f.autoScaleY(s.ctx, u, {
                                    xaxis: p
                                })
                            }
                            if (o) {
                                var x = o.getBeforeZoomRange(p, u);
                                x && (p = x.xaxis ? x.xaxis : p, u = x.yaxis ? x.yaxis : u)
                            }
                            var b = {
                                xaxis: p
                            };
                            a.config.chart.group || (b.yaxis = u), s.ctx.updateHelpers._updateOptions(b, !1, s.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a.config.chart.events.zoomed && o.zoomCallback(p, u)
                        } else if (a.globals.selectionEnabled) {
                            var m, v = null;
                            m = {
                                min: h,
                                max: c
                            }, "xy" !== i && "y" !== i || (v = E.clone(a.config.yaxis)).forEach(function (t, e) {
                                v[e].min = g[e], v[e].max = d[e]
                            }), a.globals.selection = s.selection, "function" == typeof a.config.chart.events.selection && a.config.chart.events.selection(s.ctx, {
                                xaxis: m,
                                yaxis: v
                            })
                        }
                }
            }, {
                key: "panDragging",
                value: function (t) {
                    var e = t.context,
                        i = this.w,
                        a = e;
                    if (void 0 !== i.globals.lastClientPosition.x) {
                        var s = i.globals.lastClientPosition.x - a.clientX,
                            r = i.globals.lastClientPosition.y - a.clientY;
                        Math.abs(s) > Math.abs(r) && 0 < s ? this.moveDirection = "left" : Math.abs(s) > Math.abs(r) && s < 0 ? this.moveDirection = "right" : Math.abs(r) > Math.abs(s) && 0 < r ? this.moveDirection = "up" : Math.abs(r) > Math.abs(s) && r < 0 && (this.moveDirection = "down")
                    }
                    i.globals.lastClientPosition = {
                        x: a.clientX,
                        y: a.clientY
                    };
                    var o = i.globals.isTimelineBar ? i.globals.minY : i.globals.minX,
                        n = i.globals.isTimelineBar ? i.globals.maxY : i.globals.maxX;
                    i.config.xaxis.convertedCatToNumeric || a.panScrolled(o, n)
                }
            }, {
                key: "delayedPanScrolled",
                value: function () {
                    var t = this.w,
                        e = t.globals.minX,
                        i = t.globals.maxX,
                        a = (t.globals.maxX - t.globals.minX) / 2;
                    "left" === this.moveDirection ? (e = t.globals.minX + a, i = t.globals.maxX + a) : "right" === this.moveDirection && (e = t.globals.minX - a, i = t.globals.maxX - a), e = Math.floor(e), i = Math.floor(i), this.updateScrolledChart({
                        xaxis: {
                            min: e,
                            max: i
                        }
                    }, e, i)
                }
            }, {
                key: "panScrolled",
                value: function (t, e) {
                    var i = this.w,
                        a = this.xyRatios,
                        s = E.clone(i.globals.initialConfig.yaxis),
                        r = a.xRatio,
                        o = i.globals.minX,
                        n = i.globals.maxX;
                    i.globals.isTimelineBar && (r = a.invertedYRatio, o = i.globals.minY, n = i.globals.maxY), "left" === this.moveDirection ? (t = o + i.globals.gridWidth / 15 * r, e = n + i.globals.gridWidth / 15 * r) : "right" === this.moveDirection && (t = o - i.globals.gridWidth / 15 * r, e = n - i.globals.gridWidth / 15 * r), i.globals.isTimelineBar || (t < i.globals.initialMinX || e > i.globals.initialMaxX) && (t = o, e = n);
                    var l = {
                        min: t,
                        max: e
                    };
                    i.config.chart.zoom.autoScaleYaxis && (s = new q(this.ctx).autoScaleY(this.ctx, s, {
                        xaxis: l
                    }));
                    var h = {
                        xaxis: {
                            min: t,
                            max: e
                        }
                    };
                    i.config.chart.group || (h.yaxis = s), this.updateScrolledChart(h, t, e)
                }
            }, {
                key: "updateScrolledChart",
                value: function (t, e, i) {
                    var a = this.w;
                    this.ctx.updateHelpers._updateOptions(t, !1, !1), "function" == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, {
                        xaxis: {
                            min: e,
                            max: i
                        }
                    })
                }
            }]), i
        }(),
        gt = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx
            }
            return o(e, [{
                key: "getNearestValues",
                value: function (t) {
                    var e = t.hoverArea,
                        i = t.elGrid,
                        a = t.clientX,
                        s = t.clientY,
                        r = this.w,
                        o = r.globals.gridWidth,
                        n = r.globals.gridHeight,
                        l = o / (r.globals.dataPoints - 1),
                        h = n / r.globals.dataPoints,
                        c = i.getBoundingClientRect(),
                        d = this.hasBars();
                    !r.globals.comboCharts && !d || r.config.xaxis.convertedCatToNumeric || (l = o / r.globals.dataPoints);
                    var g = a - c.left - r.globals.barPadForNumericAxis,
                        u = s - c.top;
                    g < 0 || u < 0 || g > r.globals.gridWidth || u > r.globals.gridHeight ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : r.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
                    var p = Math.round(g / l),
                        f = Math.floor(u / h);
                    d && !r.config.xaxis.convertedCatToNumeric && (p = Math.ceil(g / l), p -= 1);
                    for (var x, b = null, m = null, v = [], y = 0; y < r.globals.seriesXvalues.length; y++) v.push([r.globals.seriesXvalues[y][0] - 1e-6].concat(r.globals.seriesXvalues[y]));
                    return v = v.map(function (t) {
                        return t.filter(function (t) {
                            return t
                        })
                    }), x = r.globals.seriesYvalues.map(function (t) {
                        return t.filter(function (t) {
                            return E.isNumber(t)
                        })
                    }), r.globals.isXNumeric && (b = (m = this.closestInMultiArray(g, u, v, x)).index, p = m.j, null !== b && (v = r.globals.seriesXvalues[b], p = (m = this.closestInArray(g, v)).index)), r.globals.capturedSeriesIndex = null === b ? -1 : b, (!p || p < 1) && (p = 0), r.globals.isBarHorizontal ? r.globals.capturedDataPointIndex = f : r.globals.capturedDataPointIndex = p, {
                        capturedSeries: b,
                        j: r.globals.isBarHorizontal ? f : p,
                        hoverX: g,
                        hoverY: u
                    }
                }
            }, {
                key: "closestInMultiArray",
                value: function (o, n, l, h) {
                    var t = this.w,
                        e = 0,
                        c = null,
                        d = -1;
                    1 < t.globals.series.length ? e = this.getFirstActiveXArray(l) : c = 0;
                    var i = h[e][0],
                        a = l[e][0],
                        g = Math.abs(o - a),
                        u = Math.abs(n - i),
                        p = u + g;
                    return h.map(function (t, r) {
                        t.map(function (t, e) {
                            var i = Math.abs(n - h[r][e]),
                                a = Math.abs(o - l[r][e]),
                                s = a + i;
                            s < p && (p = s, g = a, u = i, c = r, d = e)
                        })
                    }), {
                        index: c,
                        j: d
                    }
                }
            }, {
                key: "getFirstActiveXArray",
                value: function (t) {
                    for (var e = 0, i = t.map(function (t, e) {
                        return 0 < t.length ? e : -1
                    }), a = 0; a < i.length; a++)
                        if (-1 !== i[a]) {
                            e = i[a];
                            break
                        }
                    return e
                }
            }, {
                key: "closestInArray",
                value: function (t, e) {
                    for (var i = e[0], a = null, s = Math.abs(t - i), r = 0; r < e.length; r++) {
                        var o = Math.abs(t - e[r]);
                        o < s && (s = o, a = r)
                    }
                    return {
                        index: a
                    }
                }
            }, {
                key: "isXoverlap",
                value: function (t) {
                    var e = [],
                        i = this.w.globals.seriesX.filter(function (t) {
                            return void 0 !== t[0]
                        });
                    if (0 < i.length)
                        for (var a = 0; a < i.length - 1; a++) void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a + 1][t] && e.push("unEqual");
                    return 0 === e.length
                }
            }, {
                key: "isInitialSeriesSameLen",
                value: function () {
                    for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
                        if (e[i].data.length !== e[i + 1].data.length) {
                            t = !1;
                            break
                        }
                    return t
                }
            }, {
                key: "getBarsHeight",
                value: function (t) {
                    return A(t).reduce(function (t, e) {
                        return t + e.getBBox().height
                    }, 0)
                }
            }, {
                key: "getElMarkers",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")
                }
            }, {
                key: "getAllMarkers",
                value: function () {
                    var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
                    (t = A(t)).sort(function (t, e) {
                        return Number(e.getAttribute("data:realIndex")) < Number(t.getAttribute("data:realIndex")) ? 0 : -1
                    });
                    var e = [];
                    return t.forEach(function (t) {
                        e.push(t.querySelector(".apexcharts-marker"))
                    }), e
                }
            }, {
                key: "hasMarkers",
                value: function () {
                    return 0 < this.getElMarkers().length
                }
            }, {
                key: "getElBars",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")
                }
            }, {
                key: "hasBars",
                value: function () {
                    return 0 < this.getElBars().length
                }
            }, {
                key: "getHoverMarkerSize",
                value: function (t) {
                    var e = this.w,
                        i = e.config.markers.hover.size;
                    return void 0 === i && (i = e.globals.markers.size[t] + e.config.markers.hover.sizeOffset), i
                }
            }, {
                key: "toggleAllTooltipSeriesGroups",
                value: function (t) {
                    var e = this.w,
                        i = this.ttCtx;
                    0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
                    for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++) "enable" === t ? (a[s].classList.add("apexcharts-active"), a[s].style.display = e.config.tooltip.items.display) : (a[s].classList.remove("apexcharts-active"), a[s].style.display = "none")
                }
            }]), e
        }(),
        ut = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new gt(t)
            }
            return o(e, [{
                key: "drawSeriesTexts",
                value: function (t) {
                    var e = t.shared,
                        i = void 0 === e || e,
                        a = t.ttItems,
                        s = t.i,
                        r = void 0 === s ? 0 : s,
                        o = t.j,
                        n = void 0 === o ? null : o,
                        l = t.y1,
                        h = t.y2,
                        c = t.e,
                        d = this.w;
                    void 0 !== d.config.tooltip.custom ? this.handleCustomTooltip({
                        i: r,
                        j: n,
                        y1: l,
                        y2: h,
                        w: d
                    }) : this.toggleActiveInactiveSeries(i);
                    var g = this.getValuesToPrint({
                        i: r,
                        j: n
                    });
                    this.printLabels({
                        i: r,
                        j: n,
                        values: g,
                        ttItems: a,
                        shared: i,
                        e: c
                    });
                    var u = this.ttCtx.getElTooltip();
                    this.ttCtx.tooltipRect.ttWidth = u.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = u.getBoundingClientRect().height
                }
            }, {
                key: "printLabels",
                value: function (t) {
                    var r, o = this,
                        n = t.i,
                        l = t.j,
                        e = t.values,
                        h = t.ttItems,
                        c = t.shared,
                        d = t.e,
                        g = this.w,
                        u = [],
                        p = function (t) {
                            return g.globals.seriesGoals[t] && g.globals.seriesGoals[t][l] && Array.isArray(g.globals.seriesGoals[t][l])
                        },
                        f = e.xVal,
                        x = e.zVal,
                        b = e.xAxisTTVal,
                        m = "",
                        v = g.globals.colors[n];
                    null !== l && g.config.plotOptions.bar.distributed && (v = g.globals.colors[l]);
                    for (var i = function (t, e) {
                        var i = o.getFormatters(n);
                        m = o.getSeriesName({
                            fn: i.yLbTitleFormatter,
                            index: n,
                            seriesIndex: n,
                            j: l
                        }), "treemap" === g.config.chart.type && (m = i.yLbTitleFormatter(String(g.config.series[n].data[l].x), {
                            series: g.globals.series,
                            seriesIndex: n,
                            dataPointIndex: l,
                            w: g
                        }));
                        var a = g.config.tooltip.inverseOrder ? e : t;
                        if (g.globals.axisCharts) {
                            var s = function (t) {
                                return i.yLbFormatter(g.globals.series[t][l], {
                                    series: g.globals.series,
                                    seriesIndex: t,
                                    dataPointIndex: l,
                                    w: g
                                })
                            };
                            c ? (i = o.getFormatters(a), m = o.getSeriesName({
                                fn: i.yLbTitleFormatter,
                                index: a,
                                seriesIndex: n,
                                j: l
                            }), v = g.globals.colors[a], r = s(a), p(a) && (u = g.globals.seriesGoals[a][l].map(function (t) {
                                return {
                                    attrs: t,
                                    val: i.yLbFormatter(t.value, {
                                        seriesIndex: a,
                                        dataPointIndex: l,
                                        w: g
                                    })
                                }
                            }))) : (d && d.target && d.target.getAttribute("fill") && (v = d.target.getAttribute("fill")), r = s(n), p(n) && Array.isArray(g.globals.seriesGoals[n][l]) && (u = g.globals.seriesGoals[n][l].map(function (t) {
                                return {
                                    attrs: t,
                                    val: i.yLbFormatter(t.value, {
                                        seriesIndex: n,
                                        dataPointIndex: l,
                                        w: g
                                    })
                                }
                            })))
                        }
                        null === l && (r = i.yLbFormatter(g.globals.series[n], X(X({}, g), {}, {
                            seriesIndex: n,
                            dataPointIndex: n
                        }))), o.DOMHandling({
                            i: n,
                            t: a,
                            j: l,
                            ttItems: h,
                            values: {
                                val: r,
                                goalVals: u,
                                xVal: f,
                                xAxisTTVal: b,
                                zVal: x
                            },
                            seriesName: m,
                            shared: c,
                            pColor: v
                        })
                    }, a = 0, s = g.globals.series.length - 1; a < g.globals.series.length; a++, s--) i(a, s)
                }
            }, {
                key: "getFormatters",
                value: function (t) {
                    var e, i = this.w,
                        a = i.globals.yLabelFormatters[t];
                    return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (a = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, "function" != typeof a && (a = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function (t) {
                        return t
                    }), "function" != typeof e && (e = function (t) {
                        return t
                    }), {
                        yLbFormatter: a,
                        yLbTitleFormatter: e
                    }
                }
            }, {
                key: "getSeriesName",
                value: function (t) {
                    var e = t.fn,
                        i = t.index,
                        a = t.seriesIndex,
                        s = t.j,
                        r = this.w;
                    return e(String(r.globals.seriesNames[i]), {
                        series: r.globals.series,
                        seriesIndex: a,
                        dataPointIndex: s,
                        w: r
                    })
                }
            }, {
                key: "DOMHandling",
                value: function (t) {
                    t.i;
                    var e = t.t,
                        i = t.j,
                        a = t.ttItems,
                        s = t.values,
                        r = t.seriesName,
                        o = t.shared,
                        n = t.pColor,
                        l = this.w,
                        h = this.ttCtx,
                        c = s.val,
                        d = s.goalVals,
                        g = s.xVal,
                        u = s.xAxisTTVal,
                        p = s.zVal,
                        f = null;
                    f = a[e].children, l.config.tooltip.fillSeriesColor && (a[e].style.backgroundColor = n, f[0].style.display = "none"), h.showTooltipTitle && (null === h.tooltipTitle && (h.tooltipTitle = l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h.tooltipTitle.innerHTML = g), h.blxaxisTooltip && (h.xaxisTooltipText.innerHTML = "" !== u ? u : g);
                    var x = a[e].querySelector(".apexcharts-tooltip-text-y-label");
                    x && (x.innerHTML = r || "");
                    var b = a[e].querySelector(".apexcharts-tooltip-text-y-value");
                    b && (b.innerHTML = void 0 !== c ? c : ""), f[0] && f[0].classList.contains("apexcharts-tooltip-marker") && (l.config.tooltip.marker.fillColors && Array.isArray(l.config.tooltip.marker.fillColors) && (n = l.config.tooltip.marker.fillColors[e]), f[0].style.backgroundColor = n), l.config.tooltip.marker.show || (f[0].style.display = "none");
                    var m = a[e].querySelector(".apexcharts-tooltip-text-goals-label"),
                        v = a[e].querySelector(".apexcharts-tooltip-text-goals-value");
                    if (d.length && l.globals.seriesGoals[e]) {
                        var y = function () {
                            var e = "<div >",
                                i = "<div>";
                            d.forEach(function (t) {
                                e += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(t.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(t.attrs.name, "</div>"), i += "<div>".concat(t.val, "</div>")
                            }), m.innerHTML = e + "</div>", v.innerHTML = i + "</div>"
                        };
                        o ? l.globals.seriesGoals[e][i] && Array.isArray(l.globals.seriesGoals[e][i]) ? y() : (m.innerHTML = "", v.innerHTML = "") : y()
                    } else m.innerHTML = "", v.innerHTML = "";
                    null !== p && (a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l.config.tooltip.z.title, a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== p ? p : ""), o && f[0] && (null == c || -1 < l.globals.collapsedSeriesIndices.indexOf(e) ? f[0].parentNode.style.display = "none" : f[0].parentNode.style.display = l.config.tooltip.items.display)
                }
            }, {
                key: "toggleActiveInactiveSeries",
                value: function (t) {
                    var e = this.w;
                    if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
                    else {
                        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                        var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                        i && (i.classList.add("apexcharts-active"), i.style.display = e.config.tooltip.items.display)
                    }
                }
            }, {
                key: "getValuesToPrint",
                value: function (t) {
                    var e = t.i,
                        i = t.j,
                        a = this.w,
                        s = this.ctx.series.filteredSeriesX(),
                        r = "",
                        o = "",
                        n = null,
                        l = null,
                        h = {
                            series: a.globals.series,
                            seriesIndex: e,
                            dataPointIndex: i,
                            w: a
                        },
                        c = a.globals.ttZFormatter;
                    null === i ? l = a.globals.series[e] : a.globals.isXNumeric && "treemap" !== a.config.chart.type ? (r = s[e][i], 0 === s[e].length && (r = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : r = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : "";
                    var d = r;
                    return r = a.globals.isXNumeric && "datetime" === a.config.xaxis.type ? new V(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, d, d, {
                        i: void 0,
                        dateFormatter: new R(this.ctx).formatDate,
                        w: this.w
                    }) : a.globals.isBarHorizontal ? a.globals.yLabelFormatters[0](d, h) : a.globals.xLabelFormatter(d, h), void 0 !== a.config.tooltip.x.formatter && (r = a.globals.ttKeyFormatter(d, h)), 0 < a.globals.seriesZ.length && 0 < a.globals.seriesZ[e].length && (n = c(a.globals.seriesZ[e][i], a)), o = "function" == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(d, h) : r, {
                        val: Array.isArray(l) ? l.join(" ") : l,
                        xVal: Array.isArray(r) ? r.join(" ") : r,
                        xAxisTTVal: Array.isArray(o) ? o.join(" ") : o,
                        zVal: n
                    }
                }
            }, {
                key: "handleCustomTooltip",
                value: function (t) {
                    var e = t.i,
                        i = t.j,
                        a = t.y1,
                        s = t.y2,
                        r = t.w,
                        o = this.ttCtx.getElTooltip(),
                        n = r.config.tooltip.custom;
                    Array.isArray(n) && n[e] && (n = n[e]), o.innerHTML = n({
                        ctx: this.ctx,
                        series: r.globals.series,
                        seriesIndex: e,
                        dataPointIndex: i,
                        y1: a,
                        y2: s,
                        w: r
                    })
                }
            }]), e
        }(),
        pt = function () {
            function e(t) {
                r(this, e), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w
            }
            return o(e, [{
                key: "moveXCrosshairs",
                value: function (t, e) {
                    var i = 1 < arguments.length && void 0 !== e ? arguments[1] : null,
                        a = this.ttCtx,
                        s = this.w,
                        r = a.getElXCrosshairs(),
                        o = t - a.xcrosshairsWidth / 2,
                        n = s.globals.labels.slice().length;
                    if (null !== i && (o = s.globals.gridWidth / n * i), null !== r && (r.setAttribute("x", o), r.setAttribute("x1", o), r.setAttribute("x2", o), r.setAttribute("y2", s.globals.gridHeight), r.classList.add("apexcharts-active")), o < 0 && (o = 0), o > s.globals.gridWidth && (o = s.globals.gridWidth), a.blxaxisTooltip) {
                        var l = o;
                        "tickWidth" !== s.config.xaxis.crosshairs.width && "barWidth" !== s.config.xaxis.crosshairs.width || (l = o + a.xcrosshairsWidth / 2), this.moveXAxisTooltip(l)
                    }
                }
            }, {
                key: "moveYCrosshairs",
                value: function (t) {
                    var e = this.ttCtx;
                    null !== e.ycrosshairs && F.setAttrs(e.ycrosshairs, {
                        y1: t,
                        y2: t
                    }), null !== e.ycrosshairsHidden && F.setAttrs(e.ycrosshairsHidden, {
                        y1: t,
                        y2: t
                    })
                }
            }, {
                key: "moveXAxisTooltip",
                value: function (t) {
                    var e = this.w,
                        i = this.ttCtx;
                    if (null !== i.xaxisTooltip) {
                        i.xaxisTooltip.classList.add("apexcharts-active");
                        var a, s = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
                        if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) t += e.globals.translateX, a = new F(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = a.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = s + "px"
                    }
                }
            }, {
                key: "moveYAxisTooltip",
                value: function (t) {
                    var e = this.w,
                        i = this.ttCtx;
                    null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                    var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10),
                        s = e.globals.translateY + a,
                        r = i.yaxisTTEls[t].getBoundingClientRect().height,
                        o = e.globals.translateYAxisX[t] - 2;
                    e.config.yaxis[t].opposite && (o -= 26), s -= r / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = s + "px", i.yaxisTTEls[t].style.left = o + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active")
                }
            }, {
                key: "moveTooltip",
                value: function (t, e, i) {
                    var a = 2 < arguments.length && void 0 !== i ? arguments[2] : null,
                        s = this.w,
                        r = this.ttCtx,
                        o = r.getElTooltip(),
                        n = r.tooltipRect,
                        l = null !== a ? parseFloat(a) : 1,
                        h = parseFloat(t) + l + 5,
                        c = parseFloat(e) + l / 2;
                    if (h > s.globals.gridWidth / 2 && (h = h - n.ttWidth - l - 15), h > s.globals.gridWidth - n.ttWidth - 10 && (h = s.globals.gridWidth - n.ttWidth), h < -20 && (h = -20), s.config.tooltip.followCursor) {
                        var d = r.getElGrid().getBoundingClientRect();
                        c = r.e.clientY + s.globals.translateY - d.top - n.ttHeight / 2
                    } else s.globals.isBarHorizontal ? c -= n.ttHeight : (n.ttHeight / 2 + c > s.globals.gridHeight && (c = s.globals.gridHeight - n.ttHeight + s.globals.translateY), c < 0 && (c = 0));
                    isNaN(h) || (h += s.globals.translateX, o.style.left = h + "px", o.style.top = c + "px")
                }
            }, {
                key: "moveMarkers",
                value: function (t, e) {
                    var i = this.w,
                        a = this.ttCtx;
                    if (0 < i.globals.markers.size[t])
                        for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), r = 0; r < s.length; r++) parseInt(s[r].getAttribute("rel"), 10) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[r]));
                    else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
                }
            }, {
                key: "moveDynamicPointOnHover",
                value: function (t, e) {
                    var i, a, s = this.w,
                        r = this.ttCtx,
                        o = s.globals.pointsArray,
                        n = r.tooltipUtil.getHoverMarkerSize(e),
                        l = s.config.series[e].type;
                    if (!l || "column" !== l && "candlestick" !== l && "boxPlot" !== l) {
                        i = o[e][t][0], a = o[e][t][1] ? o[e][t][1] : 0;
                        var h = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
                        h && a < s.globals.gridHeight && 0 < a && (h.setAttribute("r", n), h.setAttribute("cx", i), h.setAttribute("cy", a)), this.moveXCrosshairs(i), r.fixedTooltip || this.moveTooltip(i, a, n)
                    }
                }
            }, {
                key: "moveDynamicPointsOnHover",
                value: function (t) {
                    var e, i = this.ttCtx,
                        a = i.w,
                        s = 0,
                        r = 0,
                        o = a.globals.pointsArray;
                    e = new S(this.ctx).getActiveConfigSeriesIndex(!0);
                    var n = i.tooltipUtil.getHoverMarkerSize(e);
                    o[e] && (s = o[e][t][0], r = o[e][t][1]);
                    var l = i.tooltipUtil.getAllMarkers();
                    if (null !== l)
                        for (var h = 0; h < a.globals.series.length; h++) {
                            var c = o[h];
                            if (a.globals.comboCharts && void 0 === c && l.splice(h, 0, null), c && c.length) {
                                var d = o[h][t][1];
                                l[h].setAttribute("cx", s), null !== d && !isNaN(d) && d < a.globals.gridHeight && 0 < d ? (l[h] && l[h].setAttribute("r", n), l[h] && l[h].setAttribute("cy", d)) : l[h] && l[h].setAttribute("r", 0)
                            }
                        }
                    if (this.moveXCrosshairs(s), !i.fixedTooltip) {
                        var g = r || a.globals.gridHeight;
                        this.moveTooltip(s, g, n)
                    }
                }
            }, {
                key: "moveStickyTooltipOverBars",
                value: function (t) {
                    var e = this.w,
                        i = this.ttCtx,
                        a = e.globals.columnSeries ? e.globals.columnSeries.length : e.globals.series.length,
                        s = 2 <= a && a % 2 == 0 ? Math.floor(a / 2) : Math.floor(a / 2) + 1;
                    e.globals.isBarHorizontal && (s = new S(this.ctx).getActiveConfigSeriesIndex(!1, "desc") + 1);
                    var r = e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "']")),
                        o = r ? parseFloat(r.getAttribute("cx")) : 0,
                        n = r ? parseFloat(r.getAttribute("cy")) : 0,
                        l = r ? parseFloat(r.getAttribute("barWidth")) : 0,
                        h = r ? parseFloat(r.getAttribute("barHeight")) : 0,
                        c = i.getElGrid().getBoundingClientRect();
                    if (e.globals.isXNumeric ? (o -= a % 2 != 0 ? l / 2 : 0, r && (r.classList.contains("apexcharts-candlestick-area") || r.classList.contains("apexcharts-boxPlot-area")) && e.globals.comboCharts && (o -= l / 2)) : e.globals.isBarHorizontal || (o = i.xAxisTicksPositions[t - 1] + i.dataPointsDividedWidth / 2, isNaN(o) && (o = i.xAxisTicksPositions[t] - i.dataPointsDividedWidth / 2)), e.globals.isBarHorizontal ? n += h / 3 : n = i.e.clientY - c.top - i.tooltipRect.ttHeight / 2, e.globals.isBarHorizontal || this.moveXCrosshairs(o), !i.fixedTooltip) {
                        var d = n || e.globals.gridHeight;
                        this.moveTooltip(o, d)
                    }
                }
            }]), e
        }(),
        ft = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new pt(t)
            }
            return o(e, [{
                key: "drawDynamicPoints",
                value: function () {
                    var t = this.w,
                        e = new F(this.ctx),
                        i = new C(this.ctx),
                        a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                    a = A(a), t.config.chart.stacked && a.sort(function (t, e) {
                        return parseFloat(t.getAttribute("data:realIndex")) - parseFloat(e.getAttribute("data:realIndex"))
                    });
                    for (var s = 0; s < a.length; s++) {
                        var r = a[s].querySelector(".apexcharts-series-markers-wrap");
                        if (null !== r) {
                            var o = void 0,
                                n = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
                            "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (n += " no-pointer-events");
                            var l = i.getMarkerConfig(n, s);
                            (o = e.drawMarker(0, 0, l)).node.setAttribute("default-marker-size", 0);
                            var h = document.createElementNS(t.globals.SVGNS, "g");
                            h.classList.add("apexcharts-series-markers"), h.appendChild(o.node), r.appendChild(h)
                        }
                    }
                }
            }, {
                key: "enlargeCurrentPoint",
                value: function (t, e, i, a) {
                    var s = 2 < arguments.length && void 0 !== i ? arguments[2] : null,
                        r = 3 < arguments.length && void 0 !== a ? arguments[3] : null,
                        o = this.w;
                    "bubble" !== o.config.chart.type && this.newPointSize(t, e);
                    var n = e.getAttribute("cx"),
                        l = e.getAttribute("cy");
                    if (null !== s && null !== r && (n = s, l = r), this.tooltipPosition.moveXCrosshairs(n), !this.fixedTooltip) {
                        if ("radar" === o.config.chart.type) {
                            var h = this.ttCtx.getElGrid().getBoundingClientRect();
                            n = this.ttCtx.e.clientX - h.left
                        }
                        this.tooltipPosition.moveTooltip(n, l, o.config.markers.hover.size)
                    }
                }
            }, {
                key: "enlargePoints",
                value: function (t) {
                    for (var e = this.w, i = this, a = this.ttCtx, s = t, r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o = e.config.markers.hover.size, n = 0; n < r.length; n++) {
                        var l = r[n].getAttribute("rel"),
                            h = r[n].getAttribute("index");
                        if (void 0 === o && (o = e.globals.markers.size[h] + e.config.markers.hover.sizeOffset), s === parseInt(l, 10)) {
                            i.newPointSize(s, r[n]);
                            var c = r[n].getAttribute("cx"),
                                d = r[n].getAttribute("cy");
                            i.tooltipPosition.moveXCrosshairs(c), a.fixedTooltip || i.tooltipPosition.moveTooltip(c, d, o)
                        } else i.oldPointSize(r[n])
                    }
                }
            }, {
                key: "newPointSize",
                value: function (t, e) {
                    var i = this.w,
                        a = i.config.markers.hover.size,
                        s = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
                    if ("0" !== s.getAttribute("default-marker-size")) {
                        var r = parseInt(s.getAttribute("index"), 10);
                        void 0 === a && (a = i.globals.markers.size[r] + i.config.markers.hover.sizeOffset), a < 0 && (a = 0), s.setAttribute("r", a)
                    }
                }
            }, {
                key: "oldPointSize",
                value: function (t) {
                    var e = parseFloat(t.getAttribute("default-marker-size"));
                    t.setAttribute("r", e)
                }
            }, {
                key: "resetPointsSize",
                value: function () {
                    for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
                        var i = parseFloat(t[e].getAttribute("default-marker-size"));
                        E.isNumber(i) && 0 <= i ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0)
                    }
                }
            }]), e
        }(),
        xt = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.ttCtx = t
            }
            return o(e, [{
                key: "getAttr",
                value: function (t, e) {
                    return parseFloat(t.target.getAttribute(e))
                }
            }, {
                key: "handleHeatTreeTooltip",
                value: function (t) {
                    var e = t.e,
                        i = t.opt,
                        a = t.x,
                        s = t.y,
                        r = t.type,
                        o = this.ttCtx,
                        n = this.w;
                    if (e.target.classList.contains("apexcharts-".concat(r, "-rect"))) {
                        var l = this.getAttr(e, "i"),
                            h = this.getAttr(e, "j"),
                            c = this.getAttr(e, "cx"),
                            d = this.getAttr(e, "cy"),
                            g = this.getAttr(e, "width"),
                            u = this.getAttr(e, "height");
                        if (o.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: l,
                            j: h,
                            shared: !1,
                            e: e
                        }), n.globals.capturedSeriesIndex = l, n.globals.capturedDataPointIndex = h, a = c + o.tooltipRect.ttWidth / 2 + g, s = d + o.tooltipRect.ttHeight / 2 - u / 2, o.tooltipPosition.moveXCrosshairs(c + g / 2), a > n.globals.gridWidth / 2 && (a = c - o.tooltipRect.ttWidth / 2 + g), o.w.config.tooltip.followCursor) {
                            var p = n.globals.dom.elWrap.getBoundingClientRect();
                            a = n.globals.clientX - p.left - o.tooltipRect.ttWidth / 2, s = n.globals.clientY - p.top - o.tooltipRect.ttHeight - 5
                        }
                    }
                    return {
                        x: a,
                        y: s
                    }
                }
            }, {
                key: "handleMarkerTooltip",
                value: function (t) {
                    var e, i, a = t.e,
                        s = t.opt,
                        r = t.x,
                        o = t.y,
                        n = this.w,
                        l = this.ttCtx;
                    if (a.target.classList.contains("apexcharts-marker")) {
                        var h = parseInt(s.paths.getAttribute("cx"), 10),
                            c = parseInt(s.paths.getAttribute("cy"), 10),
                            d = parseFloat(s.paths.getAttribute("val"));
                        if (i = parseInt(s.paths.getAttribute("rel"), 10), e = parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l.intersect) {
                            var g = E.findAncestor(s.paths, "apexcharts-series");
                            g && (e = parseInt(g.getAttribute("data:realIndex"), 10))
                        }
                        if (l.tooltipLabels.drawSeriesTexts({
                            ttItems: s.ttItems,
                            i: e,
                            j: i,
                            shared: !l.showOnIntersect && n.config.tooltip.shared,
                            e: a
                        }), "mouseup" === a.type && l.markerClick(a, e, i), n.globals.capturedSeriesIndex = e, n.globals.capturedDataPointIndex = i, r = h, o = c + n.globals.translateY - 1.4 * l.tooltipRect.ttHeight, l.w.config.tooltip.followCursor) {
                            var u = l.getElGrid().getBoundingClientRect();
                            o = l.e.clientY + n.globals.translateY - u.top
                        }
                        d < 0 && (o = c), l.marker.enlargeCurrentPoint(i, s.paths, r, o)
                    }
                    return {
                        x: r,
                        y: o
                    }
                }
            }, {
                key: "handleBarTooltip",
                value: function (t) {
                    var e, i, a = t.e,
                        s = t.opt,
                        r = this.w,
                        o = this.ttCtx,
                        n = o.getElTooltip(),
                        l = 0,
                        h = 0,
                        c = 0,
                        d = this.getBarTooltipXY({
                            e: a,
                            opt: s
                        });
                    e = d.i;
                    var g = d.barHeight,
                        u = d.j;
                    r.globals.capturedSeriesIndex = e, r.globals.capturedDataPointIndex = u, r.globals.isBarHorizontal && o.tooltipUtil.hasBars() || !r.config.tooltip.shared ? (h = d.x, c = d.y, i = Array.isArray(r.config.stroke.width) ? r.config.stroke.width[e] : r.config.stroke.width, l = h) : r.globals.comboCharts || r.config.tooltip.shared || (l /= 2), isNaN(c) ? c = r.globals.svgHeight - o.tooltipRect.ttHeight : c < 0 && (c = 0);
                    var p = parseInt(s.paths.parentNode.getAttribute("data:realIndex"), 10),
                        f = r.globals.isMultipleYAxis ? r.config.yaxis[p] && r.config.yaxis[p].reversed : r.config.yaxis[0].reversed;
                    if (h + o.tooltipRect.ttWidth > r.globals.gridWidth && !f ? h -= o.tooltipRect.ttWidth : h < 0 && (h = 0), o.w.config.tooltip.followCursor) {
                        var x = o.getElGrid().getBoundingClientRect();
                        c = o.e.clientY - x.top
                    }
                    null === o.tooltip && (o.tooltip = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r.config.tooltip.shared || (0 < r.globals.comboBarCount ? o.tooltipPosition.moveXCrosshairs(l + i / 2) : o.tooltipPosition.moveXCrosshairs(l)), !o.fixedTooltip && (!r.config.tooltip.shared || r.globals.isBarHorizontal && o.tooltipUtil.hasBars()) && (f && (h -= o.tooltipRect.ttWidth) < 0 && (h = 0), n.style.left = h + r.globals.translateX + "px", !f || r.globals.isBarHorizontal && o.tooltipUtil.hasBars() || (c = c + g - 2 * (r.globals.series[e][u] < 0 ? g : 0)), o.tooltipRect.ttHeight + c > r.globals.gridHeight ? (c = r.globals.gridHeight - o.tooltipRect.ttHeight + r.globals.translateY, n.style.top = c + "px") : n.style.top = c + r.globals.translateY - o.tooltipRect.ttHeight / 2 + "px")
                }
            }, {
                key: "getBarTooltipXY",
                value: function (t) {
                    var e = t.e,
                        i = t.opt,
                        a = this.w,
                        s = null,
                        r = this.ttCtx,
                        o = 0,
                        n = 0,
                        l = 0,
                        h = 0,
                        c = 0,
                        d = e.target.classList;
                    if (d.contains("apexcharts-bar-area") || d.contains("apexcharts-candlestick-area") || d.contains("apexcharts-boxPlot-area") || d.contains("apexcharts-rangebar-area")) {
                        var g = e.target,
                            u = g.getBoundingClientRect(),
                            p = i.elGrid.getBoundingClientRect(),
                            f = u.height;
                        c = u.height;
                        var x = u.width,
                            b = parseInt(g.getAttribute("cx"), 10),
                            m = parseInt(g.getAttribute("cy"), 10);
                        h = parseFloat(g.getAttribute("barWidth"));
                        var v = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
                        s = parseInt(g.getAttribute("j"), 10), o = parseInt(g.parentNode.getAttribute("rel"), 10) - 1;
                        var y = g.getAttribute("data-range-y1"),
                            w = g.getAttribute("data-range-y2");
                        a.globals.comboCharts && (o = parseInt(g.parentNode.getAttribute("data:realIndex"), 10)), r.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: o,
                            j: s,
                            y1: y ? parseInt(y, 10) : null,
                            y2: w ? parseInt(w, 10) : null,
                            shared: !r.showOnIntersect && a.config.tooltip.shared,
                            e: e
                        }), a.config.tooltip.followCursor ? a.globals.isBarHorizontal ? (n = v - p.left + 15, l = m - r.dataPointsDividedHeight + f / 2 - r.tooltipRect.ttHeight / 2) : (n = a.globals.isXNumeric ? b - x / 2 : b - r.dataPointsDividedWidth + x / 2, l = e.clientY - p.top - r.tooltipRect.ttHeight / 2 - 15) : a.globals.isBarHorizontal ? ((n = b) < r.xyRatios.baseLineInvertedY && (n = b - r.tooltipRect.ttWidth), l = m - r.dataPointsDividedHeight + f / 2 - r.tooltipRect.ttHeight / 2) : (n = a.globals.isXNumeric ? b - x / 2 : b - r.dataPointsDividedWidth + x / 2, l = m)
                    }
                    return {
                        x: n,
                        y: l,
                        barHeight: c,
                        barWidth: h,
                        i: o,
                        j: s
                    }
                }
            }]), e
        }(),
        bt = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.ttCtx = t
            }
            return o(e, [{
                key: "drawXaxisTooltip",
                value: function () {
                    var t = this.w,
                        e = this.ttCtx,
                        i = "bottom" === t.config.xaxis.position;
                    e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3;
                    var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                        s = t.globals.dom.elWrap;
                    e.blxaxisTooltip && null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + t.config.tooltip.theme), s.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText))
                }
            }, {
                key: "drawYaxisTooltip",
                value: function () {
                    for (var s = this.w, r = this.ttCtx, t = function (i) {
                        var t = s.config.yaxis[i].opposite || s.config.yaxis[i].crosshairs.opposite;
                        r.yaxisOffX = t ? s.globals.gridWidth + 1 : 1;
                        var a = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, t ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
                        s.globals.yAxisSameScaleIndices.map(function (t) {
                            t.map(function (t, e) {
                                e === i && (a += s.config.yaxis[e].show ? " " : " apexcharts-yaxistooltip-hidden")
                            })
                        });
                        var e = s.globals.dom.elWrap;
                        null === s.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (r.yaxisTooltip = document.createElement("div"), r.yaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + s.config.tooltip.theme), e.appendChild(r.yaxisTooltip), 0 === i && (r.yaxisTooltipText = []), r.yaxisTooltipText[i] = document.createElement("div"), r.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), r.yaxisTooltip.appendChild(r.yaxisTooltipText[i]))
                    }, e = 0; e < s.config.yaxis.length; e++) t(e)
                }
            }, {
                key: "setXCrosshairWidth",
                value: function () {
                    var t = this.w,
                        e = this.ttCtx,
                        i = e.getElXCrosshairs();
                    if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) {
                        var a = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== a && "barWidth" === t.config.xaxis.crosshairs.width) {
                            var s = parseFloat(a.getAttribute("barWidth"));
                            e.xcrosshairsWidth = s
                        } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                            var r = t.globals.labels.length;
                            e.xcrosshairsWidth = t.globals.gridWidth / r
                        }
                    } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                        var o = t.globals.labels.length;
                        e.xcrosshairsWidth = t.globals.gridWidth / o
                    } else if ("barWidth" === t.config.xaxis.crosshairs.width) {
                        var n = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== n) {
                            var l = parseFloat(n.getAttribute("barWidth"));
                            e.xcrosshairsWidth = l
                        } else e.xcrosshairsWidth = 1
                    }
                    t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), null !== i && 0 < e.xcrosshairsWidth && i.setAttribute("width", e.xcrosshairsWidth)
                }
            }, {
                key: "handleYCrosshair",
                value: function () {
                    var t = this.w,
                        e = this.ttCtx;
                    e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
                }
            }, {
                key: "drawYaxisTooltipText",
                value: function (t, e, i) {
                    var a = this.ttCtx,
                        s = this.w,
                        r = s.globals.yLabelFormatters[t];
                    if (a.yaxisTooltips[t]) {
                        var o = a.getElGrid().getBoundingClientRect(),
                            n = (e - o.top) * i.yRatio[t],
                            l = s.globals.maxYArr[t] - s.globals.minYArr[t],
                            h = s.globals.minYArr[t] + (l - n);
                        a.tooltipPosition.moveYCrosshairs(e - o.top), a.yaxisTooltipText[t].innerHTML = r(h), a.tooltipPosition.moveYAxisTooltip(t)
                    }
                }
            }]), e
        }(),
        mt = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.tConfig = e.config.tooltip, this.tooltipUtil = new gt(this), this.tooltipLabels = new ut(this), this.tooltipPosition = new pt(this), this.marker = new ft(this), this.intersect = new xt(this), this.axesTooltip = new bt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !e.globals.isBarHorizontal && this.tConfig.shared
            }
            return o(i, [{
                key: "getElTooltip",
                value: function (t) {
                    return t || (t = this), t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")
                }
            }, {
                key: "getElXCrosshairs",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
                }
            }, {
                key: "getElGrid",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
                }
            }, {
                key: "drawTooltip",
                value: function (t) {
                    var e = this.w;
                    this.xyRatios = t, this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.yaxisTooltips = e.config.yaxis.map(function (t) {
                        return !!(t.show && t.tooltip.enabled && e.globals.axisCharts)
                    }), this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1);
                    var i = document.createElement("div");
                    if (i.classList.add("apexcharts-tooltip"), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
                        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                        var a = new j(this.ctx);
                        this.xAxisTicksPositions = a.getXAxisTicksPositions()
                    }
                    if (!e.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e.config.chart.type || this.tConfig.shared || (this.showOnIntersect = !0), 0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) {
                        this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
                        var s = e.globals.series.length;
                        (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (s = this.showOnIntersect ? 1 : e.globals.series.length), this.legendLabels = e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s), this.addSVGEvents()
                    }
                }
            }, {
                key: "createTTElements",
                value: function (a) {
                    for (var r = this, o = this.w, n = [], l = this.getElTooltip(), t = function (t) {
                        var e = document.createElement("div");
                        e.classList.add("apexcharts-tooltip-series-group"), e.style.order = o.config.tooltip.inverseOrder ? a - t : t + 1, r.tConfig.shared && r.tConfig.enabledOnSeries && Array.isArray(r.tConfig.enabledOnSeries) && r.tConfig.enabledOnSeries.indexOf(t) < 0 && e.classList.add("apexcharts-tooltip-series-group-hidden");
                        var i = document.createElement("span");
                        i.classList.add("apexcharts-tooltip-marker"), i.style.backgroundColor = o.globals.colors[t], e.appendChild(i);
                        var s = document.createElement("div");
                        s.classList.add("apexcharts-tooltip-text"), s.style.fontFamily = r.tConfig.style.fontFamily || o.config.chart.fontFamily, s.style.fontSize = r.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function (t) {
                            var e = document.createElement("div");
                            e.classList.add("apexcharts-tooltip-".concat(t, "-group"));
                            var i = document.createElement("span");
                            i.classList.add("apexcharts-tooltip-text-".concat(t, "-label")), e.appendChild(i);
                            var a = document.createElement("span");
                            a.classList.add("apexcharts-tooltip-text-".concat(t, "-value")), e.appendChild(a), s.appendChild(e)
                        }), e.appendChild(s), l.appendChild(e), n.push(e)
                    }, e = 0; e < a; e++) t(e);
                    return n
                }
            }, {
                key: "addSVGEvents",
                value: function () {
                    var t = this.w,
                        e = t.config.chart.type,
                        i = this.getElTooltip(),
                        a = !("bar" !== e && "candlestick" !== e && "boxPlot" !== e && "rangeBar" !== e),
                        s = "area" === e || "line" === e || "scatter" === e || "bubble" === e || "radar" === e,
                        r = t.globals.dom.Paper.node,
                        o = this.getElGrid();
                    o && (this.seriesBound = o.getBoundingClientRect());
                    var n, l = [],
                        h = [],
                        c = {
                            hoverArea: r,
                            elGrid: o,
                            tooltipEl: i,
                            tooltipY: l,
                            tooltipX: h,
                            ttItems: this.ttItems
                        };
                    if (t.globals.axisCharts && (s ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e && "treemap" !== e || (n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n && n.length))
                        for (var d = 0; d < n.length; d++) l.push(n[d].getAttribute("cy")), h.push(n[d].getAttribute("cx"));
                    if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r], c);
                    else if (a && !t.globals.comboCharts || s && this.showOnIntersect) this.addDatapointEventsListeners(c);
                    else if (!t.globals.axisCharts || "heatmap" === e || "treemap" === e) {
                        var g = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                        this.addPathsEventListeners(g, c)
                    }
                    if (this.showOnIntersect) {
                        var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
                        0 < u.length && this.addPathsEventListeners(u, c), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c)
                    }
                }
            }, {
                key: "drawFixedTooltipRect",
                value: function () {
                    var t = this.w,
                        e = this.getElTooltip(),
                        i = e.getBoundingClientRect(),
                        a = i.width + 10,
                        s = i.height + 10,
                        r = this.tConfig.fixed.offsetX,
                        o = this.tConfig.fixed.offsetY,
                        n = this.tConfig.fixed.position.toLowerCase();
                    return -1 < n.indexOf("right") && (r = r + t.globals.svgWidth - a + 10), -1 < n.indexOf("bottom") && (o = o + t.globals.svgHeight - s - 10), e.style.left = r + "px", e.style.top = o + "px", {
                        x: r,
                        y: o,
                        ttWidth: a,
                        ttHeight: s
                    }
                }
            }, {
                key: "addDatapointEventsListeners",
                value: function (t) {
                    var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
                    this.addPathsEventListeners(e, t)
                }
            }, {
                key: "addPathsEventListeners",
                value: function (a, t) {
                    for (var s = this, e = function (e) {
                        var i = {
                            paths: a[e],
                            tooltipEl: t.tooltipEl,
                            tooltipY: t.tooltipY,
                            tooltipX: t.tooltipX,
                            elGrid: t.elGrid,
                            hoverArea: t.hoverArea,
                            ttItems: t.ttItems
                        };
                        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function (t) {
                            return a[e].addEventListener(t, s.seriesHover.bind(s, i), {
                                capture: !1,
                                passive: !0
                            })
                        })
                    }, i = 0; i < a.length; i++) e(i)
                }
            }, {
                key: "seriesHover",
                value: function (a, s) {
                    var r = this,
                        t = [],
                        e = this.w;
                    e.config.chart.group && (t = this.ctx.getGroupedCharts()), e.globals.axisCharts && (e.globals.minX === -1 / 0 && e.globals.maxX === 1 / 0 || 0 === e.globals.dataPoints) || (t.length ? t.forEach(function (t) {
                        var e = r.getElTooltip(t),
                            i = {
                                paths: a.paths,
                                tooltipEl: e,
                                tooltipY: a.tooltipY,
                                tooltipX: a.tooltipX,
                                elGrid: a.elGrid,
                                hoverArea: a.hoverArea,
                                ttItems: t.w.globals.tooltip.ttItems
                            };
                        t.w.globals.minX === r.w.globals.minX && t.w.globals.maxX === r.w.globals.maxX && t.w.globals.tooltip.seriesHoverByContext({
                            chartCtx: t,
                            ttCtx: t.w.globals.tooltip,
                            opt: i,
                            e: s
                        })
                    }) : this.seriesHoverByContext({
                        chartCtx: this.ctx,
                        ttCtx: this.w.globals.tooltip,
                        opt: a,
                        e: s
                    }))
                }
            }, {
                key: "seriesHoverByContext",
                value: function (t) {
                    var e = t.chartCtx,
                        i = t.ttCtx,
                        a = t.opt,
                        s = t.e,
                        r = e.w,
                        o = this.getElTooltip();
                    i.tooltipRect = {
                        x: 0,
                        y: 0,
                        ttWidth: o.getBoundingClientRect().width,
                        ttHeight: o.getBoundingClientRect().height
                    }, i.e = s, !i.tooltipUtil.hasBars() || r.globals.comboCharts || i.isBarShared || this.tConfig.onDatasetHover.highlightDataSeries && new S(e).toggleSeriesOnHover(s, s.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), r.globals.axisCharts ? i.axisChartsTooltips({
                        e: s,
                        opt: a,
                        tooltipRect: i.tooltipRect
                    }) : i.nonAxisChartsTooltips({
                        e: s,
                        opt: a,
                        tooltipRect: i.tooltipRect
                    })
                }
            }, {
                key: "axisChartsTooltips",
                value: function (t) {
                    var e, i, a = t.e,
                        s = t.opt,
                        r = this.w,
                        o = s.elGrid.getBoundingClientRect(),
                        n = "touchmove" === a.type ? a.touches[0].clientX : a.clientX,
                        l = "touchmove" === a.type ? a.touches[0].clientY : a.clientY;
                    if (this.clientY = l, this.clientX = n, r.globals.capturedSeriesIndex = -1, r.globals.capturedDataPointIndex = -1, l < o.top || l > o.top + o.height) this.handleMouseOut(s);
                    else {
                        if (Array.isArray(this.tConfig.enabledOnSeries) && !r.config.tooltip.shared) {
                            var h = parseInt(s.paths.getAttribute("index"), 10);
                            if (this.tConfig.enabledOnSeries.indexOf(h) < 0) return void this.handleMouseOut(s)
                        }
                        var c = this.getElTooltip(),
                            d = this.getElXCrosshairs(),
                            g = r.globals.xyCharts || "bar" === r.config.chart.type && !r.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r.globals.comboCharts && this.tooltipUtil.hasBars();
                        if ("mousemove" === a.type || "touchmove" === a.type || "mouseup" === a.type) {
                            null !== d && d.classList.add("apexcharts-active");
                            var u = this.yaxisTooltips.filter(function (t) {
                                return !0 === t
                            });
                            if (null !== this.ycrosshairs && u.length && this.ycrosshairs.classList.add("apexcharts-active"), g && !this.showOnIntersect) this.handleStickyTooltip(a, n, l, s);
                            else if ("heatmap" === r.config.chart.type || "treemap" === r.config.chart.type) {
                                var p = this.intersect.handleHeatTreeTooltip({
                                    e: a,
                                    opt: s,
                                    x: e,
                                    y: i,
                                    type: r.config.chart.type
                                });
                                e = p.x, i = p.y, c.style.left = e + "px", c.style.top = i + "px"
                            } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({
                                e: a,
                                opt: s
                            }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({
                                e: a,
                                opt: s,
                                x: e,
                                y: i
                            });
                            if (this.yaxisTooltips.length)
                                for (var f = 0; f < r.config.yaxis.length; f++) this.axesTooltip.drawYaxisTooltipText(f, l, this.xyRatios);
                            s.tooltipEl.classList.add("apexcharts-active")
                        } else "mouseout" !== a.type && "touchend" !== a.type || this.handleMouseOut(s)
                    }
                }
            }, {
                key: "nonAxisChartsTooltips",
                value: function (t) {
                    var e = t.e,
                        i = t.opt,
                        a = t.tooltipRect,
                        s = this.w,
                        r = i.paths.getAttribute("rel"),
                        o = this.getElTooltip(),
                        n = s.globals.dom.elWrap.getBoundingClientRect();
                    if ("mousemove" === e.type || "touchmove" === e.type) {
                        o.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: parseInt(r, 10) - 1,
                            shared: !1
                        });
                        var l = s.globals.clientX - n.left - a.ttWidth / 2,
                            h = s.globals.clientY - n.top - a.ttHeight - 10;
                        if (o.style.left = l + "px", o.style.top = h + "px", s.config.legend.tooltipHoverFormatter) {
                            var c = r - 1,
                                d = (0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"), {
                                    seriesIndex: c,
                                    dataPointIndex: c,
                                    w: s
                                });
                            this.legendLabels[c].innerHTML = d
                        }
                    } else "mouseout" !== e.type && "touchend" !== e.type || (o.classList.remove("apexcharts-active"), s.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function (t) {
                        var e = t.getAttribute("data:default-text");
                        t.innerHTML = decodeURIComponent(e)
                    }))
                }
            }, {
                key: "handleStickyTooltip",
                value: function (t, e, i, a) {
                    var s = this.w,
                        r = this.tooltipUtil.getNearestValues({
                            context: this,
                            hoverArea: a.hoverArea,
                            elGrid: a.elGrid,
                            clientX: e,
                            clientY: i
                        }),
                        o = r.j,
                        n = r.capturedSeries;
                    r.hoverX < 0 || r.hoverX > s.globals.gridWidth ? this.handleMouseOut(a) : null !== n ? this.handleStickyCapturedSeries(t, n, a, o) : (this.tooltipUtil.isXoverlap(o) || s.globals.isBarHorizontal) && this.create(t, this, 0, o, a.ttItems)
                }
            }, {
                key: "handleStickyCapturedSeries",
                value: function (t, e, i, a) {
                    var s = this.w;
                    null === s.globals.series[e][a] ? this.handleMouseOut(i) : void 0 !== s.globals.series[e][a] ? this.tConfig.shared && this.tooltipUtil.isXoverlap(a) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, a, i.ttItems) : this.create(t, this, e, a, i.ttItems, !1) : this.tooltipUtil.isXoverlap(a) && this.create(t, this, 0, a, i.ttItems)
                }
            }, {
                key: "deactivateHoverFilter",
                value: function () {
                    for (var t = this.w, e = new F(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++) e.pathMouseLeave(i[a])
                }
            }, {
                key: "handleMouseOut",
                value: function (t) {
                    var e = this.w,
                        i = this.getElXCrosshairs();
                    if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.blxaxisTooltip && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
                        null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                        for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove("apexcharts-active")
                    }
                    e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function (t) {
                        var e = t.getAttribute("data:default-text");
                        t.innerHTML = decodeURIComponent(e)
                    })
                }
            }, {
                key: "markerClick",
                value: function (t, e, i) {
                    var a = this.w;
                    "function" == typeof a.config.chart.events.markerClick && a.config.chart.events.markerClick(t, this.ctx, {
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: a
                    }), this.ctx.events.fireEvent("markerClick", [t, this.ctx, {
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: a
                    }])
                }
            }, {
                key: "create",
                value: function (t, e, i, a, s, r) {
                    var o = 5 < arguments.length && void 0 !== r ? arguments[5] : null,
                        n = this.w,
                        l = e;
                    "mouseup" === t.type && this.markerClick(t, i, a), null === o && (o = this.tConfig.shared);
                    var h = this.tooltipUtil.hasMarkers(),
                        c = this.tooltipUtil.getElBars();
                    if (n.config.legend.tooltipHoverFormatter) {
                        var d = n.config.legend.tooltipHoverFormatter,
                            g = Array.from(this.legendLabels);
                        g.forEach(function (t) {
                            var e = t.getAttribute("data:default-text");
                            t.innerHTML = decodeURIComponent(e)
                        });
                        for (var u = 0; u < g.length; u++) {
                            var p = g[u],
                                f = parseInt(p.getAttribute("i"), 10),
                                x = decodeURIComponent(p.getAttribute("data:default-text")),
                                b = d(x, {
                                    seriesIndex: o ? f : i,
                                    dataPointIndex: a,
                                    w: n
                                });
                            if (o) p.innerHTML = n.globals.collapsedSeriesIndices.indexOf(f) < 0 ? b : x;
                            else if (p.innerHTML = f === i ? b : x, i === f) break
                        }
                    }
                    if (o) {
                        if (l.tooltipLabels.drawSeriesTexts({
                            ttItems: s,
                            i: i,
                            j: a,
                            shared: !this.showOnIntersect && this.tConfig.shared
                        }), h && (0 < n.globals.markers.largestSize ? l.marker.enlargePoints(a) : l.tooltipPosition.moveDynamicPointsOnHover(a)), this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(c), 0 < this.barSeriesHeight)) {
                            var m = new F(this.ctx),
                                v = n.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']"));
                            this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a);
                            for (var y = 0; y < v.length; y++) m.pathMouseEnter(v[y])
                        }
                    } else l.tooltipLabels.drawSeriesTexts({
                        shared: !1,
                        ttItems: s,
                        i: i,
                        j: a
                    }), this.tooltipUtil.hasBars() && l.tooltipPosition.moveStickyTooltipOverBars(a),
                        h && l.tooltipPosition.moveMarkers(i, a)
                }
            }]), i
        }(),
        vt = function () {
            function t() {
                return r(this, t), e.apply(this, arguments)
            }
            n(t, P);
            var e = d(t);
            return o(t, [{
                key: "draw",
                value: function (v, y) {
                    var w = this,
                        k = this.w;
                    this.graphics = new F(this.ctx), this.bar = new P(this.ctx, this.xyRatios);
                    var t = new M(this.ctx, k);
                    v = t.getLogSeries(v), this.yRatio = t.getLogYRatios(this.yRatio), this.barHelpers.initVariables(v), "100%" === k.config.chart.stackType && (v = k.globals.seriesPercent.slice()), this.series = v, this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
                    for (var e = 0; e < v.length; e++) 0 < v[e].length && (this.totalItems += v[e].length);
                    for (var A = this.graphics.group({
                        "class": "apexcharts-bar-series apexcharts-plot-series"
                    }), S = 0, C = 0, i = function (t, e) {
                        var i = void 0,
                            a = void 0,
                            s = void 0,
                            r = void 0,
                            o = [],
                            n = [],
                            l = k.globals.comboCharts ? y[t] : t;
                        1 < w.yRatio.length && (w.yaxisIndex = l), w.isReversed = k.config.yaxis[w.yaxisIndex] && k.config.yaxis[w.yaxisIndex].reversed;
                        var h = w.graphics.group({
                            "class": "apexcharts-series",
                            seriesName: E.escapeString(k.globals.seriesNames[l]),
                            rel: t + 1,
                            "data:realIndex": l
                        });
                        w.ctx.series.addCollapsedClassToSeries(h, l);
                        var c = w.graphics.group({
                            "class": "apexcharts-datalabels",
                            "data:realIndex": l
                        }),
                            d = 0,
                            g = 0,
                            u = w.initialPositions(S, C, i, a, s, r);
                        C = u.y, d = u.barHeight, a = u.yDivision, r = u.zeroW, S = u.x, g = u.barWidth, i = u.xDivision, s = u.zeroH, w.yArrj = [], w.yArrjF = [], w.yArrjVal = [], w.xArrj = [], w.xArrjF = [], w.xArrjVal = [], 1 === w.prevY.length && w.prevY[0].every(function (t) {
                            return isNaN(t)
                        }) && (w.prevY[0] = w.prevY[0].map(function () {
                            return s
                        }), w.prevYF[0] = w.prevYF[0].map(function () {
                            return 0
                        }));
                        for (var p = 0; p < k.globals.dataPoints; p++) {
                            var f = w.barHelpers.getStrokeWidth(t, p, l),
                                x = {
                                    indexes: {
                                        i: t,
                                        j: p,
                                        realIndex: l,
                                        bc: e
                                    },
                                    strokeWidth: f,
                                    x: S,
                                    y: C,
                                    elSeries: h
                                },
                                b = null;
                            w.isHorizontal ? (b = w.drawStackedBarPaths(X(X({}, x), {}, {
                                zeroW: r,
                                barHeight: d,
                                yDivision: a
                            })), g = w.series[t][p] / w.invertedYRatio) : (b = w.drawStackedColumnPaths(X(X({}, x), {}, {
                                xDivision: i,
                                barWidth: g,
                                zeroH: s
                            })), d = w.series[t][p] / w.yRatio[w.yaxisIndex]), C = b.y, S = b.x, o.push(S), n.push(C);
                            var m = w.barHelpers.getPathFillColor(v, t, p, l);
                            h = w.renderSeries({
                                realIndex: l,
                                pathFill: m,
                                j: p,
                                i: t,
                                pathFrom: b.pathFrom,
                                pathTo: b.pathTo,
                                strokeWidth: f,
                                elSeries: h,
                                x: S,
                                y: C,
                                series: v,
                                barHeight: d,
                                barWidth: g,
                                elDataLabelsWrap: c,
                                type: "bar",
                                visibleSeries: 0
                            })
                        }
                        k.globals.seriesXvalues[l] = o, k.globals.seriesYvalues[l] = n, w.prevY.push(w.yArrj), w.prevYF.push(w.yArrjF), w.prevYVal.push(w.yArrjVal), w.prevX.push(w.xArrj), w.prevXF.push(w.xArrjF), w.prevXVal.push(w.xArrjVal), A.add(h)
                    }, a = 0, s = 0; a < v.length; a++, s++) i(a, s);
                    return A
                }
            }, {
                key: "initialPositions",
                value: function (t, e, i, a, s, r) {
                    var o, n, l = this.w;
                    return this.isHorizontal ? (o = (o = a = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight, 10) / 100, r = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (a - o) / 2) : (n = i = l.globals.gridWidth / l.globals.dataPoints, n = l.globals.isXNumeric && 1 < l.globals.dataPoints ? (i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : n * parseInt(l.config.plotOptions.bar.columnWidth, 10) / 100, s = this.baseLineY[this.yaxisIndex] + (this.isReversed ? l.globals.gridHeight : 0) - (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (i - n) / 2), {
                        x: t,
                        y: e,
                        yDivision: a,
                        xDivision: i,
                        barHeight: o,
                        barWidth: n,
                        zeroH: s,
                        zeroW: r
                    }
                }
            }, {
                key: "drawStackedBarPaths",
                value: function (t) {
                    for (var e, i = t.indexes, a = t.barHeight, s = t.strokeWidth, r = t.zeroW, o = t.x, n = t.y, l = t.yDivision, h = t.elSeries, c = this.w, d = n, g = i.i, u = i.j, p = 0, f = 0; f < this.prevXF.length; f++) p += this.prevXF[f][u];
                    if (0 < g) {
                        var x = r;
                        this.prevXVal[g - 1][u] < 0 ? x = 0 <= this.series[g][u] ? this.prevX[g - 1][u] + p - 2 * (this.isReversed ? p : 0) : this.prevX[g - 1][u] : 0 <= this.prevXVal[g - 1][u] && (x = 0 <= this.series[g][u] ? this.prevX[g - 1][u] : this.prevX[g - 1][u] - p + 2 * (this.isReversed ? p : 0)), e = x
                    } else e = r;
                    o = null === this.series[g][u] ? e : e + this.series[g][u] / this.invertedYRatio - 2 * (this.isReversed ? this.series[g][u] / this.invertedYRatio : 0);
                    var b = this.barHelpers.getBarpaths({
                        barYPosition: d,
                        barHeight: a,
                        x1: e,
                        x2: o,
                        strokeWidth: s,
                        series: this.series,
                        realIndex: i.realIndex,
                        i: g,
                        j: u,
                        w: c
                    });
                    return this.barHelpers.barBackground({
                        j: u,
                        i: g,
                        y1: d,
                        y2: a,
                        elSeries: h
                    }), n += l, {
                        pathTo: b.pathTo,
                        pathFrom: b.pathFrom,
                        x: o,
                        y: n
                    }
                }
            }, {
                key: "drawStackedColumnPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x,
                        a = t.y,
                        s = t.xDivision,
                        r = t.barWidth,
                        o = t.zeroH;
                    t.strokeWidth;
                    var n = t.elSeries,
                        l = this.w,
                        h = e.i,
                        c = e.j,
                        d = e.bc;
                    if (l.globals.isXNumeric) {
                        var g = l.globals.seriesX[h][c];
                        g || (g = 0), i = (g - l.globals.minX) / this.xRatio - r / 2
                    }
                    for (var u, p = i, f = 0, x = 0; x < this.prevYF.length; x++) f += isNaN(this.prevYF[x][c]) ? 0 : this.prevYF[x][c];
                    if (0 < h && !l.globals.isXNumeric || 0 < h && l.globals.isXNumeric && l.globals.seriesX[h - 1][c] === l.globals.seriesX[h][c]) {
                        var b, m, v = Math.min(this.yRatio.length + 1, h + 1);
                        if (void 0 !== this.prevY[h - 1])
                            for (var y = 1; y < v; y++)
                                if (!isNaN(this.prevY[h - y][c])) {
                                    m = this.prevY[h - y][c];
                                    break
                                }
                        for (var w = 1; w < v; w++) {
                            if (this.prevYVal[h - w][c] < 0) {
                                b = 0 <= this.series[h][c] ? m - f + 2 * (this.isReversed ? f : 0) : m;
                                break
                            }
                            if (0 <= this.prevYVal[h - w][c]) {
                                b = 0 <= this.series[h][c] ? m : m + f - 2 * (this.isReversed ? f : 0);
                                break
                            }
                        }
                        void 0 === b && (b = l.globals.gridHeight), u = this.prevYF[0].every(function (t) {
                            return 0 === t
                        }) && this.prevYF.slice(1, h).every(function (t) {
                            return t.every(function (t) {
                                return isNaN(t)
                            })
                        }) ? l.globals.gridHeight - o : b
                    } else u = l.globals.gridHeight - o;
                    a = u - this.series[h][c] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[h][c] / this.yRatio[this.yaxisIndex] : 0);
                    var k = this.barHelpers.getColumnPaths({
                        barXPosition: p,
                        barWidth: r,
                        y1: u,
                        y2: a,
                        yRatio: this.yRatio[this.yaxisIndex],
                        strokeWidth: this.strokeWidth,
                        series: this.series,
                        realIndex: e.realIndex,
                        i: h,
                        j: c,
                        w: l
                    });
                    return this.barHelpers.barBackground({
                        bc: d,
                        j: c,
                        i: h,
                        x1: p,
                        x2: r,
                        elSeries: n
                    }), i += s, {
                        pathTo: k.pathTo,
                        pathFrom: k.pathFrom,
                        x: l.globals.isXNumeric ? i - s : i,
                        y: a
                    }
                }
            }]), t
        }(),
        yt = function () {
            function t() {
                return r(this, t), e.apply(this, arguments)
            }
            n(t, P);
            var e = d(t);
            return o(t, [{
                key: "draw",
                value: function (f, x) {
                    var b = this,
                        m = this.w,
                        v = new F(this.ctx),
                        y = new T(this.ctx);
                    this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot;
                    var t = new M(this.ctx, m);
                    f = t.getLogSeries(f), this.series = f, this.yRatio = t.getLogYRatios(this.yRatio), this.barHelpers.initVariables(f);
                    for (var w = v.group({
                        "class": "apexcharts-".concat(m.config.chart.type, "-series apexcharts-plot-series")
                    }), e = function (n) {
                        b.isBoxPlot = "boxPlot" === m.config.chart.type || "boxPlot" === m.config.series[n].type;
                        var t, e, l, h, c = void 0,
                            d = void 0,
                            i = [],
                            a = [],
                            g = m.globals.comboCharts ? x[n] : n,
                            u = v.group({
                                "class": "apexcharts-series",
                                seriesName: E.escapeString(m.globals.seriesNames[g]),
                                rel: n + 1,
                                "data:realIndex": g
                            });
                        0 < f[n].length && (b.visibleI = b.visibleI + 1), 1 < b.yRatio.length && (b.yaxisIndex = g);
                        var s = b.barHelpers.initialPositions();
                        d = s.y, l = s.barHeight, c = s.x, h = s.barWidth, t = s.xDivision, e = s.zeroH, a.push(c + h / 2);
                        for (var p = v.group({
                            "class": "apexcharts-datalabels",
                            "data:realIndex": g
                        }), r = function (s) {
                            var r = b.barHelpers.getStrokeWidth(n, s, g),
                                o = b.drawBoxPaths({
                                    indexes: {
                                        i: n,
                                        j: s,
                                        realIndex: g
                                    },
                                    x: c,
                                    y: d,
                                    xDivision: t,
                                    barWidth: h,
                                    zeroH: e,
                                    strokeWidth: r,
                                    elSeries: u
                                });
                            d = o.y, c = o.x, 0 < s && a.push(c + h / 2), i.push(d), o.pathTo.forEach(function (t, e) {
                                var i = !b.isBoxPlot && b.candlestickOptions.wick.useFillColor ? o.color[e] : m.globals.stroke.colors[n],
                                    a = y.fillPath({
                                        seriesNumber: g,
                                        dataPointIndex: s,
                                        color: o.color[e],
                                        value: f[n][s]
                                    });
                                b.renderSeries({
                                    realIndex: g,
                                    pathFill: a,
                                    lineFill: i,
                                    j: s,
                                    i: n,
                                    pathFrom: o.pathFrom,
                                    pathTo: t,
                                    strokeWidth: r,
                                    elSeries: u,
                                    x: c,
                                    y: d,
                                    series: f,
                                    barHeight: l,
                                    barWidth: h,
                                    elDataLabelsWrap: p,
                                    visibleSeries: b.visibleI,
                                    type: m.config.chart.type
                                })
                            })
                        }, o = 0; o < m.globals.dataPoints; o++) r(o);
                        m.globals.seriesXvalues[g] = a, m.globals.seriesYvalues[g] = i, w.add(u)
                    }, i = 0; i < f.length; i++) e(i);
                    return w
                }
            }, {
                key: "drawBoxPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x;
                    t.y;
                    var a = t.xDivision,
                        s = t.barWidth,
                        r = t.zeroH,
                        o = t.strokeWidth,
                        n = this.w,
                        l = new F(this.ctx),
                        h = e.i,
                        c = e.j,
                        d = !0,
                        g = n.config.plotOptions.candlestick.colors.upward,
                        u = n.config.plotOptions.candlestick.colors.downward,
                        p = "";
                    this.isBoxPlot && (p = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
                    var f = this.yRatio[this.yaxisIndex],
                        x = e.realIndex,
                        b = this.getOHLCValue(x, c),
                        m = r,
                        v = r;
                    b.o > b.c && (d = !1);
                    var y = Math.min(b.o, b.c),
                        w = Math.max(b.o, b.c),
                        k = b.m;
                    n.globals.isXNumeric && (i = (n.globals.seriesX[x][c] - n.globals.minX) / this.xRatio - s / 2);
                    var A = i + s * this.visibleI;
                    void 0 === this.series[h][c] || null === this.series[h][c] ? w = y = r : (y = r - y / f, w = r - w / f, m = r - b.h / f, v = r - b.l / f, k = r - b.m / f);
                    var S = l.move(A, r),
                        C = l.move(A + s / 2, y);
                    return 0 < n.globals.previousPaths.length && (C = this.getPreviousPath(x, c, !0)), S = this.isBoxPlot ? [l.move(A, y) + l.line(A + s / 2, y) + l.line(A + s / 2, m) + l.line(A + s / 4, m) + l.line(A + s - s / 4, m) + l.line(A + s / 2, m) + l.line(A + s / 2, y) + l.line(A + s, y) + l.line(A + s, k) + l.line(A, k) + l.line(A, y + o / 2), l.move(A, k) + l.line(A + s, k) + l.line(A + s, w) + l.line(A + s / 2, w) + l.line(A + s / 2, v) + l.line(A + s - s / 4, v) + l.line(A + s / 4, v) + l.line(A + s / 2, v) + l.line(A + s / 2, w) + l.line(A, w) + l.line(A, k) + "z"] : [l.move(A, w) + l.line(A + s / 2, w) + l.line(A + s / 2, m) + l.line(A + s / 2, w) + l.line(A + s, w) + l.line(A + s, y) + l.line(A + s / 2, y) + l.line(A + s / 2, v) + l.line(A + s / 2, y) + l.line(A, y) + l.line(A, w - o / 2)], C += l.move(A, y), n.globals.isXNumeric || (i += a), {
                        pathTo: S,
                        pathFrom: C,
                        x: i,
                        y: w,
                        barXPosition: A,
                        color: this.isBoxPlot ? p : d ? [g] : [u]
                    }
                }
            }, {
                key: "getOHLCValue",
                value: function (t, e) {
                    var i = this.w;
                    return {
                        o: this.isBoxPlot ? i.globals.seriesCandleH[t][e] : i.globals.seriesCandleO[t][e],
                        h: this.isBoxPlot ? i.globals.seriesCandleO[t][e] : i.globals.seriesCandleH[t][e],
                        m: i.globals.seriesCandleM[t][e],
                        l: this.isBoxPlot ? i.globals.seriesCandleC[t][e] : i.globals.seriesCandleL[t][e],
                        c: this.isBoxPlot ? i.globals.seriesCandleL[t][e] : i.globals.seriesCandleC[t][e]
                    }
                }
            }]), t
        }(),
        wt = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "checkColorRange",
                value: function () {
                    var t = this.w,
                        e = !1,
                        i = t.config.plotOptions[t.config.chart.type];
                    return 0 < i.colorScale.ranges.length && i.colorScale.ranges.map(function (t) {
                        t.from <= 0 && (e = !0)
                    }), e
                }
            }, {
                key: "getShadeColor",
                value: function (t, e, i, a) {
                    var s = this.w,
                        r = 1,
                        o = s.config.plotOptions[t].shadeIntensity,
                        n = this.determineColor(t, e, i);
                    s.globals.hasNegs || a ? r = s.config.plotOptions[t].reverseNegativeShade ? n.percent < 0 ? n.percent / 100 * (1.25 * o) : (1 - n.percent / 100) * (1.25 * o) : n.percent <= 0 ? 1 - (1 + n.percent / 100) * o : (1 - n.percent / 100) * o : (r = 1 - n.percent / 100, "treemap" === t && (r = (1 - n.percent / 100) * (1.25 * o)));
                    var l = n.color,
                        h = new E;
                    return s.config.plotOptions[t].enableShades && (l = "dark" === this.w.config.theme.mode ? E.hexToRgba(h.shadeColor(-1 * r, n.color), s.config.fill.opacity) : E.hexToRgba(h.shadeColor(r, n.color), s.config.fill.opacity)), {
                        color: l,
                        colorProps: n
                    }
                }
            }, {
                key: "determineColor",
                value: function (t, e, i) {
                    var a = this.w,
                        s = a.globals.series[e][i],
                        r = a.config.plotOptions[t],
                        o = r.colorScale.inverse ? i : e;
                    a.config.plotOptions[t].distributed && (o = i);
                    var n = a.globals.colors[o],
                        l = null,
                        h = Math.min.apply(Math, A(a.globals.series[e])),
                        c = Math.max.apply(Math, A(a.globals.series[e]));
                    r.distributed || "heatmap" !== t || (h = a.globals.minY, c = a.globals.maxY), void 0 !== r.colorScale.min && (h = r.colorScale.min < a.globals.minY ? r.colorScale.min : a.globals.minY, c = r.colorScale.max > a.globals.maxY ? r.colorScale.max : a.globals.maxY);
                    var d = Math.abs(c) + Math.abs(h),
                        g = 100 * s / (0 === d ? d - 1e-6 : d);
                    return 0 < r.colorScale.ranges.length && r.colorScale.ranges.map(function (t) {
                        if (s >= t.from && s <= t.to) {
                            n = t.color, l = t.foreColor ? t.foreColor : null, h = t.from, c = t.to;
                            var e = Math.abs(c) + Math.abs(h);
                            g = 100 * s / (0 === e ? e - 1e-6 : e)
                        }
                    }), {
                        color: n,
                        foreColor: l,
                        percent: g
                    }
                }
            }, {
                key: "calculateDataLabels",
                value: function (t) {
                    var e = t.text,
                        i = t.x,
                        a = t.y,
                        s = t.i,
                        r = t.j,
                        o = t.colorProps,
                        n = t.fontSize,
                        l = this.w.config.dataLabels,
                        h = new F(this.ctx),
                        c = new k(this.ctx),
                        d = null;
                    if (l.enabled) {
                        d = h.group({
                            "class": "apexcharts-data-labels"
                        });
                        var g = l.offsetX,
                            u = l.offsetY,
                            p = i + g,
                            f = a + parseFloat(l.style.fontSize) / 3 + u;
                        c.plotDataLabelsText({
                            x: p,
                            y: f,
                            text: e,
                            i: s,
                            j: r,
                            color: o.foreColor,
                            parent: d,
                            fontSize: n,
                            dataLabelsConfig: l
                        })
                    }
                    return d
                }
            }, {
                key: "addListeners",
                value: function (t) {
                    var e = new F(this.ctx);
                    t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t))
                }
            }]), e
        }(),
        kt = function () {
            function i(t, e) {
                r(this, i), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new wt(t), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0
            }
            return o(i, [{
                key: "draw",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx),
                        a = i.group({
                            "class": "apexcharts-heatmap"
                        });
                    a.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
                    var s = e.globals.gridWidth / e.globals.dataPoints,
                        r = e.globals.gridHeight / e.globals.series.length,
                        o = 0,
                        n = !1;
                    this.negRange = this.helpers.checkColorRange();
                    var l = t.slice();
                    e.config.yaxis[0].reversed && (n = !0, l.reverse());
                    for (var h = n ? 0 : l.length - 1; n ? h < l.length : 0 <= h; n ? h++ : h--) {
                        var c = i.group({
                            "class": "apexcharts-series apexcharts-heatmap-series",
                            seriesName: E.escapeString(e.globals.seriesNames[h]),
                            rel: h + 1,
                            "data:realIndex": h
                        });
                        if (this.ctx.series.addCollapsedClassToSeries(c, h), e.config.chart.dropShadow.enabled) {
                            var d = e.config.chart.dropShadow;
                            new Y(this.ctx).dropShadow(c, d, h)
                        }
                        for (var g = 0, u = e.config.plotOptions.heatmap.shadeIntensity, p = 0; p < l[h].length; p++) {
                            var f = this.helpers.getShadeColor(e.config.chart.type, h, p, this.negRange),
                                x = f.color,
                                b = f.colorProps;
                            "image" === e.config.fill.type && (x = new T(this.ctx).fillPath({
                                seriesNumber: h,
                                dataPointIndex: p,
                                opacity: e.globals.hasNegs ? b.percent < 0 ? 1 - (1 + b.percent / 100) : u + b.percent / 100 : b.percent / 100,
                                patternID: E.randomId(),
                                width: e.config.fill.image.width ? e.config.fill.image.width : s,
                                height: e.config.fill.image.height ? e.config.fill.image.height : r
                            }));
                            var m = this.rectRadius,
                                v = i.drawRect(g, o, s, r, m);
                            if (v.attr({
                                cx: g,
                                cy: o
                            }), v.node.classList.add("apexcharts-heatmap-rect"), c.add(v), v.attr({
                                fill: x,
                                i: h,
                                index: h,
                                j: p,
                                val: l[h][p],
                                "stroke-width": this.strokeWidth,
                                stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? x : e.globals.stroke.colors[0],
                                color: x
                            }), this.helpers.addListeners(v), e.config.chart.animations.enabled && !e.globals.dataChanged) {
                                var y = 1;
                                e.globals.resized || (y = e.config.chart.animations.speed), this.animateHeatMap(v, g, o, s, r, y)
                            }
                            if (e.globals.dataChanged) {
                                var w = 1;
                                if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
                                    w = this.dynamicAnim.speed;
                                    var k = e.globals.previousPaths[h] && e.globals.previousPaths[h][p] && e.globals.previousPaths[h][p].color;
                                    k || (k = "rgba(255, 255, 255, 0)"), this.animateHeatColor(v, E.isColorHex(k) ? k : E.rgb2hex(k), E.isColorHex(x) ? x : E.rgb2hex(x), w)
                                }
                            }
                            var A = (0, e.config.dataLabels.formatter)(e.globals.series[h][p], {
                                value: e.globals.series[h][p],
                                seriesIndex: h,
                                dataPointIndex: p,
                                w: e
                            }),
                                S = this.helpers.calculateDataLabels({
                                    text: A,
                                    x: g + s / 2,
                                    y: o + r / 2,
                                    i: h,
                                    j: p,
                                    colorProps: b,
                                    series: l
                                });
                            null !== S && c.add(S), g += s
                        }
                        o += r, a.add(c)
                    }
                    var C = e.globals.yAxisScale[0].result.slice();
                    e.config.yaxis[0].reversed ? C.unshift("") : C.push(""), e.globals.yAxisScale[0].result = C;
                    var L = e.globals.gridHeight / e.globals.series.length;
                    return e.config.yaxis[0].labels.offsetY = -L / 2, a
                }
            }, {
                key: "animateHeatMap",
                value: function (t, e, i, a, s, r) {
                    var o = new z(this.ctx);
                    o.animateRect(t, {
                        x: e + a / 2,
                        y: i + s / 2,
                        width: 0,
                        height: 0
                    }, {
                        x: e,
                        y: i,
                        width: a,
                        height: s
                    }, r, function () {
                        o.animationCompleted(t)
                    })
                }
            }, {
                key: "animateHeatColor",
                value: function (t, e, i, a) {
                    t.attr({
                        fill: e
                    }).animate(a).attr({
                        fill: i
                    })
                }
            }]), i
        }(),
        At = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "drawYAxisTexts",
                value: function (t, e, i, a) {
                    var s = this.w,
                        r = s.config.yaxis[0],
                        o = s.globals.yLabelFormatters[0];
                    return new F(this.ctx).drawText({
                        x: t + r.labels.offsetX,
                        y: e + r.labels.offsetY,
                        text: o(a, i),
                        textAnchor: "middle",
                        fontSize: r.labels.style.fontSize,
                        fontFamily: r.labels.style.fontFamily,
                        foreColor: Array.isArray(r.labels.style.colors) ? r.labels.style.colors[i] : r.labels.style.colors
                    })
                }
            }]), e
        }(),
        St = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== e.globals.stroke.colors ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = Math.min(e.globals.gridWidth, e.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = e.globals.gridWidth / 2, "radialBar" === e.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(e.config.plotOptions.pie.endAngle - e.config.plotOptions.pie.startAngle), this.initialAngle = e.config.plotOptions.pie.startAngle % this.fullAngle, e.globals.radialSize = this.defaultSize / 2.05 - e.config.stroke.width - (e.config.chart.sparkline.enabled ? 0 : e.config.chart.dropShadow.blur), this.donutSize = e.globals.radialSize * parseInt(e.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = []
            }
            return o(i, [{
                key: "draw",
                value: function (t) {
                    var e = this,
                        i = this.w,
                        a = new F(this.ctx);
                    if (this.ret = a.group({
                        "class": "apexcharts-pie"
                    }), i.globals.noData) return this.ret;
                    for (var s = 0, r = 0; r < t.length; r++) s += E.negToZero(t[r]);
                    var o = [],
                        n = a.group();
                    0 === s && (s = 1e-5), t.forEach(function (t) {
                        e.maxY = Math.max(e.maxY, t)
                    }), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), "back" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret);
                    for (var l = 0; l < t.length; l++) {
                        var h = this.fullAngle * E.negToZero(t[l]) / s;
                        o.push(h), "polarArea" === this.chartType ? (o[l] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[l] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize)
                    }
                    if (i.globals.dataChanged) {
                        for (var c, d = 0, g = 0; g < i.globals.previousPaths.length; g++) d += E.negToZero(i.globals.previousPaths[g]);
                        for (var u = 0; u < i.globals.previousPaths.length; u++) c = this.fullAngle * E.negToZero(i.globals.previousPaths[u]) / d, this.prevSectorAngleArr.push(c)
                    }
                    this.donutSize < 0 && (this.donutSize = 0);
                    var p = i.config.plotOptions.pie.customScale,
                        f = i.globals.gridWidth / 2,
                        x = i.globals.gridHeight / 2,
                        b = f - i.globals.gridWidth / 2 * p,
                        m = x - i.globals.gridHeight / 2 * p;
                    if ("donut" === this.chartType) {
                        var v = a.drawCircle(this.donutSize);
                        v.attr({
                            cx: this.centerX,
                            cy: this.centerY,
                            fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent"
                        }), n.add(v)
                    }
                    var y = this.drawArcs(o, t);
                    if (this.sliceLabels.forEach(function (t) {
                        y.add(t)
                    }), n.attr({
                        transform: "translate(".concat(b, ", ").concat(m, ") scale(").concat(p, ")")
                    }), n.add(y), this.ret.add(n), this.donutDataLabels.show) {
                        var w = this.renderInnerDataLabels(this.donutDataLabels, {
                            hollowSize: this.donutSize,
                            centerX: this.centerX,
                            centerY: this.centerY,
                            opacity: this.donutDataLabels.show,
                            translateX: b,
                            translateY: m
                        });
                        this.ret.add(w)
                    }
                    return "front" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret), this.ret
                }
            }, {
                key: "drawArcs",
                value: function (t, e) {
                    var i = this.w,
                        a = new Y(this.ctx),
                        s = new F(this.ctx),
                        r = new T(this.ctx),
                        o = s.group({
                            "class": "apexcharts-slices"
                        }),
                        n = this.initialAngle,
                        l = this.initialAngle,
                        h = this.initialAngle,
                        c = this.initialAngle;
                    this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
                    for (var d = 0; d < t.length; d++) {
                        var g = s.group({
                            "class": "apexcharts-series apexcharts-pie-series",
                            seriesName: E.escapeString(i.globals.seriesNames[d]),
                            rel: d + 1,
                            "data:realIndex": d
                        });
                        o.add(g), l = c, h = (n = h) + t[d], c = l + this.prevSectorAngleArr[d];
                        var u = h < n ? this.fullAngle + h - n : h - n,
                            p = r.fillPath({
                                seriesNumber: d,
                                size: this.sliceSizes[d],
                                value: e[d]
                            }),
                            f = this.getChangedPath(l, c),
                            x = s.drawPath({
                                d: f,
                                stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d] : this.lineColorArr,
                                strokeWidth: 0,
                                fill: p,
                                fillOpacity: i.config.fill.opacity,
                                classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d)
                            });
                        if (x.attr({
                            index: 0,
                            j: d
                        }), a.setSelectionFilter(x, 0, d), i.config.chart.dropShadow.enabled) {
                            var b = i.config.chart.dropShadow;
                            a.dropShadow(x, b, d)
                        }
                        this.addListeners(x, this.donutDataLabels), F.setAttrs(x.node, {
                            "data:angle": u,
                            "data:startAngle": n,
                            "data:strokeWidth": this.strokeWidth,
                            "data:value": e[d]
                        });
                        var m = {
                            x: 0,
                            y: 0
                        };
                        "pie" === this.chartType || "polarArea" === this.chartType ? m = E.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (n + u / 2) % this.fullAngle) : "donut" === this.chartType && (m = E.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (n + u / 2) % this.fullAngle)), g.add(x);
                        var v = 0;
                        if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (0 == (v = u / this.fullAngle * i.config.chart.animations.speed) && (v = 1), this.animDur = v + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(x, {
                            size: this.sliceSizes[d],
                            endAngle: h,
                            startAngle: n,
                            prevStartAngle: l,
                            prevEndAngle: c,
                            animateStartingPos: !0,
                            i: d,
                            animBeginArr: this.animBeginArr,
                            shouldSetPrevPaths: !0,
                            dur: i.config.chart.animations.dynamicAnimation.speed
                        }) : this.animatePaths(x, {
                            size: this.sliceSizes[d],
                            endAngle: h,
                            startAngle: n,
                            i: d,
                            totalItems: t.length - 1,
                            animBeginArr: this.animBeginArr,
                            dur: v
                        }), i.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && x.click(this.pieClicked.bind(this, d)), void 0 !== i.globals.selectedDataPoints[0] && -1 < i.globals.selectedDataPoints[0].indexOf(d) && this.pieClicked(d), i.config.dataLabels.enabled) {
                            var y = m.x,
                                w = m.y,
                                k = 100 * u / this.fullAngle + "%";
                            if (0 !== u && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[d]) {
                                var A = i.config.dataLabels.formatter;
                                void 0 !== A && (k = A(i.globals.seriesPercent[d][0], {
                                    seriesIndex: d,
                                    w: i
                                }));
                                var S = i.globals.dataLabels.style.colors[d],
                                    C = s.group({
                                        "class": "apexcharts-datalabels"
                                    }),
                                    L = s.drawText({
                                        x: y,
                                        y: w,
                                        text: k,
                                        textAnchor: "middle",
                                        fontSize: i.config.dataLabels.style.fontSize,
                                        fontFamily: i.config.dataLabels.style.fontFamily,
                                        fontWeight: i.config.dataLabels.style.fontWeight,
                                        foreColor: S
                                    });
                                if (C.add(L), i.config.dataLabels.dropShadow.enabled) {
                                    var P = i.config.dataLabels.dropShadow;
                                    a.dropShadow(L, P)
                                }
                                L.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (L.node.classList.add("apexcharts-pie-label-delay"), L.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(C)
                            }
                        }
                    }
                    return o
                }
            }, {
                key: "addListeners",
                value: function (t, e) {
                    var i = new F(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)))
                }
            }, {
                key: "animatePaths",
                value: function (t, e) {
                    var i = this.w,
                        a = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle,
                        s = a,
                        r = e.startAngle,
                        o = e.startAngle;
                    void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (r = e.prevEndAngle, s = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (a + o > this.fullAngle ? e.endAngle = e.endAngle - (a + o) : a + o < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + o)))), a === this.fullAngle && (a = this.fullAngle - .01), this.animateArc(t, r, o, a, s, e)
                }
            }, {
                key: "animateArc",
                value: function (e, i, a, s, r, o) {
                    var n, l = this,
                        t = this.w,
                        h = new z(this.ctx),
                        c = o.size;
                    (isNaN(i) || isNaN(r)) && (i = a, r = s, o.dur = 0);
                    var d = s,
                        g = a,
                        u = i < a ? this.fullAngle + i - a : i - a;
                    t.globals.dataChanged && o.shouldSetPrevPaths && o.prevEndAngle && (n = l.getPiePath({
                        me: l,
                        startAngle: o.prevStartAngle,
                        angle: o.prevEndAngle < o.prevStartAngle ? this.fullAngle + o.prevEndAngle - o.prevStartAngle : o.prevEndAngle - o.prevStartAngle,
                        size: c
                    }), e.attr({
                        d: n
                    })), 0 !== o.dur ? e.animate(o.dur, t.globals.easing, o.animBeginArr[o.i]).afterAll(function () {
                        "pie" !== l.chartType && "donut" !== l.chartType && "polarArea" !== l.chartType || this.animate(t.config.chart.animations.dynamicAnimation.speed).attr({
                            "stroke-width": l.strokeWidth
                        }), o.i === t.config.series.length - 1 && h.animationCompleted(e)
                    }).during(function (t) {
                        d = u + (s - u) * t, o.animateStartingPos && (d = r + (s - r) * t, g = i - r + (a - (i - r)) * t), n = l.getPiePath({
                            me: l,
                            startAngle: g,
                            angle: d,
                            size: c
                        }), e.node.setAttribute("data:pathOrig", n), e.attr({
                            d: n
                        })
                    }) : (n = l.getPiePath({
                        me: l,
                        startAngle: g,
                        angle: s,
                        size: c
                    }), o.isTrack || (t.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", n), e.attr({
                        d: n,
                        "stroke-width": l.strokeWidth
                    }))
                }
            }, {
                key: "pieClicked",
                value: function (t) {
                    var e, i = this.w,
                        a = this,
                        s = a.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0),
                        r = i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(), "-slice-").concat(t)).members[0];
                    if ("true" !== r.attr("data:pieClicked")) {
                        var o = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
                        Array.prototype.forEach.call(o, function (t) {
                            t.setAttribute("data:pieClicked", "false");
                            var e = t.getAttribute("data:pathOrig");
                            t.setAttribute("d", e)
                        }), r.attr("data:pieClicked", "true");
                        var n = parseInt(r.attr("data:startAngle"), 10),
                            l = parseInt(r.attr("data:angle"), 10);
                        e = a.getPiePath({
                            me: a,
                            startAngle: n,
                            angle: l,
                            size: s
                        }), 360 !== l && r.plot(e)
                    } else {
                        r.attr({
                            "data:pieClicked": "false"
                        }), this.revertDataLabelsInner(r.node, this.donutDataLabels);
                        var h = r.attr("data:pathOrig");
                        r.attr({
                            d: h
                        })
                    }
                }
            }, {
                key: "getChangedPath",
                value: function (t, e) {
                    var i = "";
                    return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({
                        me: this,
                        startAngle: t,
                        angle: e - t,
                        size: this.size
                    })), i
                }
            }, {
                key: "getPiePath",
                value: function (t) {
                    var e = t.me,
                        i = t.startAngle,
                        a = t.angle,
                        s = t.size,
                        r = i,
                        o = Math.PI * (r - 90) / 180,
                        n = a + i;
                    Math.ceil(n) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (n = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - .01), Math.ceil(n) > this.fullAngle && (n -= this.fullAngle);
                    var l = Math.PI * (n - 90) / 180,
                        h = e.centerX + s * Math.cos(o),
                        c = e.centerY + s * Math.sin(o),
                        d = e.centerX + s * Math.cos(l),
                        g = e.centerY + s * Math.sin(l),
                        u = E.polarToCartesian(e.centerX, e.centerY, e.donutSize, n),
                        p = E.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
                        f = 180 < a ? 1 : 0,
                        x = ["M", h, c, "A", s, s, 0, f, 1, d, g];
                    return "donut" === e.chartType ? [].concat(x, ["L", u.x, u.y, "A", e.donutSize, e.donutSize, 0, f, 0, p.x, p.y, "L", h, c, "z"]).join(" ") : "pie" === e.chartType || "polarArea" === e.chartType ? [].concat(x, ["L", e.centerX, e.centerY, "L", h, c]).join(" ") : [].concat(x).join(" ")
                }
            }, {
                key: "drawPolarElements",
                value: function (t) {
                    var e = this.w,
                        i = new q(this.ctx),
                        a = new F(this.ctx),
                        s = new At(this.ctx),
                        r = a.group(),
                        o = a.group(),
                        n = i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0),
                        l = n.result.reverse(),
                        h = n.result.length;
                    this.maxY = n.niceMax;
                    for (var c = e.globals.radialSize, d = c / (h - 1), g = 0; g < h - 1; g++) {
                        var u = a.drawCircle(c);
                        if (u.attr({
                            cx: this.centerX,
                            cy: this.centerY,
                            fill: "none",
                            "stroke-width": e.config.plotOptions.polarArea.rings.strokeWidth,
                            stroke: e.config.plotOptions.polarArea.rings.strokeColor
                        }), e.config.yaxis[0].show) {
                            var p = s.drawYAxisTexts(this.centerX, this.centerY - c + parseInt(e.config.yaxis[0].labels.style.fontSize, 10) / 2, g, l[g]);
                            o.add(p)
                        }
                        r.add(u), c -= d
                    }
                    this.drawSpokes(t), t.add(r), t.add(o)
                }
            }, {
                key: "renderInnerDataLabels",
                value: function (t, e) {
                    var i = this.w,
                        a = new F(this.ctx),
                        s = a.group({
                            "class": "apexcharts-datalabels-group",
                            transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")")
                        }),
                        r = t.total.show;
                    s.node.style.opacity = e.opacity;
                    var o, n, l = e.centerX,
                        h = e.centerY;
                    o = void 0 === t.name.color ? i.globals.colors[0] : t.name.color;
                    var c = t.name.fontSize,
                        d = t.name.fontFamily,
                        g = t.value.fontWeight;
                    n = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color;
                    var u = t.value.formatter,
                        p = "",
                        f = "";
                    if (r ? (o = t.total.color, c = t.total.fontSize, d = t.total.fontFamily, g = t.total.fontWeight, f = t.total.label, p = t.total.formatter(i)) : 1 === i.globals.series.length && (p = u(i.globals.series[0], i), f = i.globals.seriesNames[0]), f && (f = t.name.formatter(f, t.total.show, i)), t.name.show) {
                        var x = a.drawText({
                            x: l,
                            y: h + parseFloat(t.name.offsetY),
                            text: f,
                            textAnchor: "middle",
                            foreColor: o,
                            fontSize: c,
                            fontWeight: g,
                            fontFamily: d
                        });
                        x.node.classList.add("apexcharts-datalabel-label"), s.add(x)
                    }
                    if (t.value.show) {
                        var b = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY,
                            m = a.drawText({
                                x: l,
                                y: h + b,
                                text: p,
                                textAnchor: "middle",
                                foreColor: n,
                                fontWeight: t.value.fontWeight,
                                fontSize: t.value.fontSize,
                                fontFamily: t.value.fontFamily
                            });
                        m.node.classList.add("apexcharts-datalabel-value"), s.add(m)
                    }
                    return s
                }
            }, {
                key: "printInnerLabels",
                value: function (t, e, i, a) {
                    var s, r = this.w;
                    a ? s = void 0 === t.name.color ? r.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : 1 < r.globals.series.length && t.total.show && (s = t.total.color);
                    var o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                        n = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                    i = (0, t.value.formatter)(i, r), a || "function" != typeof t.total.formatter || (i = t.total.formatter(r));
                    var l = e === t.total.label;
                    e = t.name.formatter(e, l, r), null !== o && (o.textContent = e), null !== n && (n.textContent = i), null !== o && (o.style.fill = s)
                }
            }, {
                key: "printDataLabelsInner",
                value: function (t, e) {
                    var i = this.w,
                        a = t.getAttribute("data:value"),
                        s = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1];
                    1 < i.globals.series.length && this.printInnerLabels(e, s, a, t);
                    var r = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                    null !== r && (r.style.opacity = 1)
                }
            }, {
                key: "drawSpokes",
                value: function (a) {
                    var s = this,
                        t = this.w,
                        r = new F(this.ctx),
                        o = t.config.plotOptions.polarArea.spokes;
                    if (0 !== o.strokeWidth) {
                        for (var e = [], i = 360 / t.globals.series.length, n = 0; n < t.globals.series.length; n++) e.push(E.polarToCartesian(this.centerX, this.centerY, t.globals.radialSize, t.config.plotOptions.pie.startAngle + i * n));
                        e.forEach(function (t, e) {
                            var i = r.drawLine(t.x, t.y, s.centerX, s.centerY, Array.isArray(o.connectorColors) ? o.connectorColors[e] : o.connectorColors);
                            a.add(i)
                        })
                    }
                }
            }, {
                key: "revertDataLabelsInner",
                value: function (t, a) {
                    var s = this,
                        e = this.w,
                        i = e.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),
                        r = !1,
                        o = e.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),
                        n = function (t) {
                            var e = t.makeSliceOut,
                                i = t.printLabel;
                            Array.prototype.forEach.call(o, function (t) {
                                "true" === t.getAttribute("data:pieClicked") && (e && (r = !0), i && s.printDataLabelsInner(t, a))
                            })
                        };
                    if (n({
                        makeSliceOut: !0,
                        printLabel: !1
                    }), a.total.show && 1 < e.globals.series.length) r && !a.total.showAlways ? n({
                        makeSliceOut: !1,
                        printLabel: !0
                    }) : this.printInnerLabels(a, a.total.label, a.total.formatter(e));
                    else if (n({
                        makeSliceOut: !1,
                        printLabel: !0
                    }), !r)
                        if (e.globals.selectedDataPoints.length && 1 < e.globals.series.length)
                            if (0 < e.globals.selectedDataPoints[0].length) {
                                var l = e.globals.selectedDataPoints[0],
                                    h = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(l));
                                this.printDataLabelsInner(h, a)
                            } else i && e.globals.selectedDataPoints.length && 0 === e.globals.selectedDataPoints[0].length && (i.style.opacity = 0);
                        else i && 1 < e.globals.series.length && (i.style.opacity = 0)
                }
            }]), i
        }(),
        Ct = function () {
            function i(t) {
                r(this, i), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
                var e = this.w;
                this.graphics = new F(this.ctx), this.lineColorArr = void 0 !== e.globals.stroke.colors ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = e.globals.svgHeight < e.globals.svgWidth ? e.globals.gridHeight + 1.5 * e.globals.goldenPadding : e.globals.gridWidth, this.isLog = e.config.yaxis[0].logarithmic, this.coreUtils = new M(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(e.globals.maxY, 0) : e.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : e.globals.minY, this.polygons = e.config.plotOptions.radar.polygons, this.strokeWidth = e.config.stroke.show ? e.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - e.config.chart.dropShadow.blur, e.config.xaxis.labels.show && (this.size = this.size - e.globals.xAxisLabelsWidth / 1.75), void 0 !== e.config.plotOptions.radar.size && (this.size = e.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = []
            }
            return o(i, [{
                key: "draw",
                value: function (t) {
                    var u = this,
                        p = this.w,
                        f = new T(this.ctx),
                        x = [],
                        b = new k(this.ctx);
                    t.length && (this.dataPointsLen = t[p.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
                    var e = p.globals.gridWidth / 2,
                        i = p.globals.gridHeight / 2,
                        a = e + p.config.plotOptions.radar.offsetX,
                        s = i + p.config.plotOptions.radar.offsetY,
                        r = this.graphics.group({
                            "class": "apexcharts-radar-series apexcharts-plot-series",
                            transform: "translate(".concat(a || 0, ", ").concat(s || 0, ")")
                        }),
                        m = [],
                        v = null,
                        y = null;
                    if (this.yaxisLabels = this.graphics.group({
                        "class": "apexcharts-yaxis"
                    }), t.forEach(function (t, n) {
                        var e = t.length === p.globals.dataPoints,
                            l = u.graphics.group().attr({
                                "class": "apexcharts-series",
                                "data:longestSeries": e,
                                seriesName: E.escapeString(p.globals.seriesNames[n]),
                                rel: n + 1,
                                "data:realIndex": n
                            });
                        u.dataRadiusOfPercent[n] = [], u.dataRadius[n] = [], u.angleArr[n] = [], t.forEach(function (t, e) {
                            var i = Math.abs(u.maxValue - u.minValue);
                            t += Math.abs(u.minValue), u.isLog && (t = u.coreUtils.getLogVal(t, 0)), u.dataRadiusOfPercent[n][e] = t / i, u.dataRadius[n][e] = u.dataRadiusOfPercent[n][e] * u.size, u.angleArr[n][e] = e * u.disAngle
                        }), m = u.getDataPointsPos(u.dataRadius[n], u.angleArr[n]);
                        var i = u.createPaths(m, {
                            x: 0,
                            y: 0
                        });
                        v = u.graphics.group({
                            "class": "apexcharts-series-markers-wrap apexcharts-element-hidden"
                        }), y = u.graphics.group({
                            "class": "apexcharts-datalabels",
                            "data:realIndex": n
                        }), p.globals.delayedElements.push({
                            el: v.node,
                            index: n
                        });
                        var a = {
                            i: n,
                            realIndex: n,
                            animationDelay: n,
                            initialSpeed: p.config.chart.animations.speed,
                            dataChangeSpeed: p.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-radar",
                            shouldClipToGrid: !1,
                            bindEventsOnPaths: !1,
                            stroke: p.globals.stroke.colors[n],
                            strokeLineCap: p.config.stroke.lineCap
                        },
                            s = null;
                        0 < p.globals.previousPaths.length && (s = u.getPreviousPath(n));
                        for (var r = 0; r < i.linePathsTo.length; r++) {
                            var o = u.graphics.renderPaths(X(X({}, a), {}, {
                                pathFrom: null === s ? i.linePathsFrom[r] : s,
                                pathTo: i.linePathsTo[r],
                                strokeWidth: Array.isArray(u.strokeWidth) ? u.strokeWidth[n] : u.strokeWidth,
                                fill: "none",
                                drawShadow: !1
                            }));
                            l.add(o);
                            var h = f.fillPath({
                                seriesNumber: n
                            }),
                                c = u.graphics.renderPaths(X(X({}, a), {}, {
                                    pathFrom: null === s ? i.areaPathsFrom[r] : s,
                                    pathTo: i.areaPathsTo[r],
                                    strokeWidth: 0,
                                    fill: h,
                                    drawShadow: !1
                                }));
                            if (p.config.chart.dropShadow.enabled) {
                                var d = new Y(u.ctx),
                                    g = p.config.chart.dropShadow;
                                d.dropShadow(c, Object.assign({}, g, {
                                    noUserSpaceOnUse: !0
                                }), n)
                            }
                            l.add(c)
                        }
                        t.forEach(function (t, e) {
                            var i = new C(u.ctx).getMarkerConfig("apexcharts-marker", n, e),
                                a = u.graphics.drawMarker(m[e].x, m[e].y, i);
                            a.attr("rel", e), a.attr("j", e), a.attr("index", n), a.node.setAttribute("default-marker-size", i.pSize);
                            var s = u.graphics.group({
                                "class": "apexcharts-series-markers"
                            });
                            s && s.add(a), v.add(s), l.add(v);
                            var r = p.config.dataLabels;
                            if (r.enabled) {
                                var o = r.formatter(p.globals.series[n][e], {
                                    seriesIndex: n,
                                    dataPointIndex: e,
                                    w: p
                                });
                                b.plotDataLabelsText({
                                    x: m[e].x,
                                    y: m[e].y,
                                    text: o,
                                    textAnchor: "middle",
                                    i: n,
                                    j: n,
                                    parent: y,
                                    offsetCorrection: !1,
                                    dataLabelsConfig: X({}, r)
                                })
                            }
                            l.add(y)
                        }), x.push(l)
                    }), this.drawPolygons({
                        parent: r
                    }), p.config.xaxis.labels.show) {
                        var o = this.drawXAxisTexts();
                        r.add(o)
                    }
                    return x.forEach(function (t) {
                        r.add(t)
                    }), r.add(this.yaxisLabels), r
                }
            }, {
                key: "drawPolygons",
                value: function (t) {
                    for (var r = this, o = this.w, n = t.parent, a = new At(this.ctx), s = o.globals.yAxisScale[0].result.reverse(), e = s.length, i = [], l = this.size / (e - 1), h = 0; h < e; h++) i[h] = l * h;
                    i.reverse();
                    var c = [],
                        d = [];
                    i.forEach(function (t, a) {
                        var e = E.getPolygonPos(t, r.dataPointsLen),
                            s = "";
                        e.forEach(function (t, e) {
                            if (0 === a) {
                                var i = r.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(r.polygons.connectorColors) ? r.polygons.connectorColors[e] : r.polygons.connectorColors);
                                d.push(i)
                            }
                            0 === e && r.yaxisLabelsTextsPos.push({
                                x: t.x,
                                y: t.y
                            }), s += t.x + "," + t.y + " "
                        }), c.push(s)
                    }), c.forEach(function (t, e) {
                        var i = r.polygons.strokeColors,
                            a = r.polygons.strokeWidth,
                            s = r.graphics.drawPolygon(t, Array.isArray(i) ? i[e] : i, Array.isArray(a) ? a[e] : a, o.globals.radarPolygons.fill.colors[e]);
                        n.add(s)
                    }), d.forEach(function (t) {
                        n.add(t)
                    }), o.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function (t, e) {
                        var i = a.drawYAxisTexts(t.x, t.y, e, s[e]);
                        r.yaxisLabels.add(i)
                    })
                }
            }, {
                key: "drawXAxisTexts",
                value: function () {
                    var o = this,
                        n = this.w,
                        l = n.config.xaxis.labels,
                        h = this.graphics.group({
                            "class": "apexcharts-xaxis"
                        }),
                        c = E.getPolygonPos(this.size, this.dataPointsLen);
                    return n.globals.labels.forEach(function (t, e) {
                        var i = n.config.xaxis.labels.formatter,
                            a = new k(o.ctx);
                        if (c[e]) {
                            var s = o.getTextPos(c[e], o.size),
                                r = i(t, {
                                    seriesIndex: -1,
                                    dataPointIndex: e,
                                    w: n
                                });
                            a.plotDataLabelsText({
                                x: s.newX,
                                y: s.newY,
                                text: r,
                                textAnchor: s.textAnchor,
                                i: e,
                                j: e,
                                parent: h,
                                color: Array.isArray(l.style.colors) && l.style.colors[e] ? l.style.colors[e] : "#a8a8a8",
                                dataLabelsConfig: X({
                                    textAnchor: s.textAnchor,
                                    dropShadow: {
                                        enabled: !1
                                    }
                                }, l),
                                offsetCorrection: !1
                            })
                        }
                    }), h
                }
            }, {
                key: "createPaths",
                value: function (i, t) {
                    var a = this,
                        e = [],
                        s = [],
                        r = [],
                        o = [];
                    if (i.length) {
                        s = [this.graphics.move(t.x, t.y)], o = [this.graphics.move(t.x, t.y)];
                        var n = this.graphics.move(i[0].x, i[0].y),
                            l = this.graphics.move(i[0].x, i[0].y);
                        i.forEach(function (t, e) {
                            n += a.graphics.line(t.x, t.y), l += a.graphics.line(t.x, t.y), e === i.length - 1 && (n += "Z", l += "Z")
                        }), e.push(n), r.push(l)
                    }
                    return {
                        linePathsFrom: s,
                        linePathsTo: e,
                        areaPathsFrom: o,
                        areaPathsTo: r
                    }
                }
            }, {
                key: "getTextPos",
                value: function (t, e) {
                    var i = "middle",
                        a = t.x,
                        s = t.y;
                    return 10 <= Math.abs(t.x) ? 0 < t.x ? (i = "start", a += 10) : t.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? s -= 10 : 0 < t.y && (s += 10)), {
                        textAnchor: i,
                        newX: a,
                        newY: s
                    }
                }
            }, {
                key: "getPreviousPath",
                value: function (t) {
                    for (var e = this.w, i = null, a = 0; a < e.globals.previousPaths.length; a++) {
                        var s = e.globals.previousPaths[a];
                        0 < s.paths.length && parseInt(s.realIndex, 10) === parseInt(t, 10) && void 0 !== e.globals.previousPaths[a].paths[0] && (i = e.globals.previousPaths[a].paths[0].d)
                    }
                    return i
                }
            }, {
                key: "getDataPointsPos",
                value: function (t, e, i) {
                    var a = 2 < arguments.length && void 0 !== i ? arguments[2] : this.dataPointsLen;
                    t = t || [], e = e || [];
                    for (var s = [], r = 0; r < a; r++) {
                        var o = {};
                        o.x = t[r] * Math.sin(e[r]), o.y = -t[r] * Math.cos(e[r]), s.push(o)
                    }
                    return s
                }
            }]), i
        }(),
        Lt = function () {
            function a(t) {
                var e;
                r(this, a), (e = s.call(this, t)).ctx = t, e.w = t.w, e.animBeginArr = [0], e.animDur = 0;
                var i = e.w;
                return e.startAngle = i.config.plotOptions.radialBar.startAngle, e.endAngle = i.config.plotOptions.radialBar.endAngle, e.totalAngle = Math.abs(i.config.plotOptions.radialBar.endAngle - i.config.plotOptions.radialBar.startAngle), e.trackStartAngle = i.config.plotOptions.radialBar.track.startAngle, e.trackEndAngle = i.config.plotOptions.radialBar.track.endAngle, e.radialDataLabels = i.config.plotOptions.radialBar.dataLabels, e.trackStartAngle || (e.trackStartAngle = e.startAngle), e.trackEndAngle || (e.trackEndAngle = e.endAngle), 360 === e.endAngle && (e.endAngle = 359.99), e.margin = parseInt(i.config.plotOptions.radialBar.track.margin, 10), e
            }
            n(a, St);
            var s = d(a);
            return o(a, [{
                key: "draw",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx),
                        a = i.group({
                            "class": "apexcharts-radialbar"
                        });
                    if (e.globals.noData) return a;
                    var s = i.group(),
                        r = this.defaultSize / 2,
                        o = e.globals.gridWidth / 2,
                        n = this.defaultSize / 2.05;
                    e.config.chart.sparkline.enabled || (n = n - e.config.stroke.width - e.config.chart.dropShadow.blur);
                    var l = e.globals.fill.colors;
                    if (e.config.plotOptions.radialBar.track.show) {
                        var h = this.drawTracks({
                            size: n,
                            centerX: o,
                            centerY: r,
                            colorArr: l,
                            series: t
                        });
                        s.add(h)
                    }
                    var c = this.drawArcs({
                        size: n,
                        centerX: o,
                        centerY: r,
                        colorArr: l,
                        series: t
                    }),
                        d = 360;
                    e.config.plotOptions.radialBar.startAngle < 0 && (d = this.totalAngle);
                    var g = (360 - d) / 360;
                    if (e.globals.radialSize = n - n * g, this.radialDataLabels.value.show) {
                        var u = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
                        e.globals.radialSize += u * g
                    }
                    return s.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), a.add(s), a
                }
            }, {
                key: "drawTracks",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx),
                        a = i.group({
                            "class": "apexcharts-tracks"
                        }),
                        s = new Y(this.ctx),
                        r = new T(this.ctx),
                        o = this.getStrokeWidth(t);
                    t.size = t.size - o / 2;
                    for (var n = 0; n < t.series.length; n++) {
                        var l = i.group({
                            "class": "apexcharts-radialbar-track apexcharts-track"
                        });
                        a.add(l), l.attr({
                            rel: n + 1
                        }), t.size = t.size - o - this.margin;
                        var h = e.config.plotOptions.radialBar.track,
                            c = r.fillPath({
                                seriesNumber: 0,
                                size: t.size,
                                fillColors: Array.isArray(h.background) ? h.background[n] : h.background,
                                solid: !0
                            }),
                            d = this.trackStartAngle,
                            g = this.trackEndAngle;
                        360 <= Math.abs(g) + Math.abs(d) && (g = 360 - Math.abs(this.startAngle) - .1);
                        var u = i.drawPath({
                            d: "",
                            stroke: c,
                            strokeWidth: o * parseInt(h.strokeWidth, 10) / 100,
                            fill: "none",
                            strokeOpacity: h.opacity,
                            classes: "apexcharts-radialbar-area"
                        });
                        if (h.dropShadow.enabled) {
                            var p = h.dropShadow;
                            s.dropShadow(u, p)
                        }
                        l.add(u), u.attr("id", "apexcharts-radialbarTrack-" + n), this.animatePaths(u, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: g,
                            startAngle: d,
                            size: t.size,
                            i: n,
                            totalItems: 2,
                            animBeginArr: 0,
                            dur: 0,
                            isTrack: !0,
                            easing: e.globals.easing
                        })
                    }
                    return a
                }
            }, {
                key: "drawArcs",
                value: function (t) {
                    var e = this.w,
                        i = new F(this.ctx),
                        a = new T(this.ctx),
                        s = new Y(this.ctx),
                        r = i.group(),
                        o = this.getStrokeWidth(t);
                    t.size = t.size - o / 2;
                    var n = e.config.plotOptions.radialBar.hollow.background,
                        l = t.size - o * t.series.length - this.margin * t.series.length - o * parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2,
                        h = l - e.config.plotOptions.radialBar.hollow.margin;
                    void 0 !== e.config.plotOptions.radialBar.hollow.image && (n = this.drawHollowImage(t, r, l, n));
                    var c = this.drawHollow({
                        size: h,
                        centerX: t.centerX,
                        centerY: t.centerY,
                        fill: n || "transparent"
                    });
                    if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                        var d = e.config.plotOptions.radialBar.hollow.dropShadow;
                        s.dropShadow(c, d)
                    }
                    var g = 1;
                    !this.radialDataLabels.total.show && 1 < e.globals.series.length && (g = 0);
                    var u = null;
                    this.radialDataLabels.show && (u = this.renderInnerDataLabels(this.radialDataLabels, {
                        hollowSize: l,
                        centerX: t.centerX,
                        centerY: t.centerY,
                        opacity: g
                    })), "back" === e.config.plotOptions.radialBar.hollow.position && (r.add(c), u && r.add(u));
                    var p = !1;
                    e.config.plotOptions.radialBar.inverseOrder && (p = !0);
                    for (var f = p ? t.series.length - 1 : 0; p ? 0 <= f : f < t.series.length; p ? f-- : f++) {
                        var x = i.group({
                            "class": "apexcharts-series apexcharts-radial-series",
                            seriesName: E.escapeString(e.globals.seriesNames[f])
                        });
                        r.add(x), x.attr({
                            rel: f + 1,
                            "data:realIndex": f
                        }), this.ctx.series.addCollapsedClassToSeries(x, f), t.size = t.size - o - this.margin;
                        var b = a.fillPath({
                            seriesNumber: f,
                            size: t.size,
                            value: t.series[f]
                        }),
                            m = this.startAngle,
                            v = void 0,
                            y = E.negToZero(100 < t.series[f] ? 100 : t.series[f]) / 100,
                            w = Math.round(this.totalAngle * y) + this.startAngle,
                            k = void 0;
                        e.globals.dataChanged && (v = this.startAngle, k = Math.round(this.totalAngle * E.negToZero(e.globals.previousPaths[f]) / 100) + v), 360 <= Math.abs(w) + Math.abs(m) && (w -= .01), 360 <= Math.abs(k) + Math.abs(v) && (k -= .01);
                        var A = w - m,
                            S = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[f] : e.config.stroke.dashArray,
                            C = i.drawPath({
                                d: "",
                                stroke: b,
                                strokeWidth: o,
                                fill: "none",
                                fillOpacity: e.config.fill.opacity,
                                classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + f,
                                strokeDashArray: S
                            });
                        if (F.setAttrs(C.node, {
                            "data:angle": A,
                            "data:value": t.series[f]
                        }), e.config.chart.dropShadow.enabled) {
                            var L = e.config.chart.dropShadow;
                            s.dropShadow(C, L, f)
                        }
                        s.setSelectionFilter(C, 0, f), this.addListeners(C, this.radialDataLabels), x.add(C), C.attr({
                            index: 0,
                            j: f
                        });
                        var P = 0;
                        !this.initialAnim || e.globals.resized || e.globals.dataChanged || (P = (w - m) / 360 * e.config.chart.animations.speed, this.animDur = P / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), e.globals.dataChanged && (P = (w - m) / 360 * e.config.chart.animations.dynamicAnimation.speed, this.animDur = P / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), this.animatePaths(C, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: w,
                            startAngle: m,
                            prevEndAngle: k,
                            prevStartAngle: v,
                            size: t.size,
                            i: f,
                            totalItems: 2,
                            animBeginArr: this.animBeginArr,
                            dur: P,
                            shouldSetPrevPaths: !0,
                            easing: e.globals.easing
                        })
                    }
                    return {
                        g: r,
                        elHollow: c,
                        dataLabels: u
                    }
                }
            }, {
                key: "drawHollow",
                value: function (t) {
                    var e = new F(this.ctx).drawCircle(2 * t.size);
                    return e.attr({
                        "class": "apexcharts-radialbar-hollow",
                        cx: t.centerX,
                        cy: t.centerY,
                        r: t.size,
                        fill: t.fill
                    }), e
                }
            }, {
                key: "drawHollowImage",
                value: function (e, t, i, a) {
                    var s = this.w,
                        r = new T(this.ctx),
                        o = E.randomId(),
                        n = s.config.plotOptions.radialBar.hollow.image;
                    if (s.config.plotOptions.radialBar.hollow.imageClipped) r.clippedImgArea({
                        width: i,
                        height: i,
                        image: n,
                        patternID: "pattern".concat(s.globals.cuid).concat(o)
                    }), a = "url(#pattern".concat(s.globals.cuid).concat(o, ")");
                    else {
                        var l = s.config.plotOptions.radialBar.hollow.imageWidth,
                            h = s.config.plotOptions.radialBar.hollow.imageHeight;
                        if (void 0 === l && void 0 === h) {
                            var c = s.globals.dom.Paper.image(n).loaded(function (t) {
                                this.move(e.centerX - t.width / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - t.height / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY)
                            });
                            t.add(c)
                        } else {
                            var d = s.globals.dom.Paper.image(n).loaded(function () {
                                this.move(e.centerX - l / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - h / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h)
                            });
                            t.add(d)
                        }
                    }
                    return a
                }
            }, {
                key: "getStrokeWidth",
                value: function (t) {
                    var e = this.w;
                    return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t.series.length + 1) - this.margin
                }
            }]), a
        }(),
        Pt = function () {
            function e(t) {
                r(this, e), this.w = t.w, this.lineCtx = t
            }
            return o(e, [{
                key: "sameValueSeriesFix",
                value: function (t, e) {
                    var i = this.w;
                    if ("line" === i.config.chart.type && ("gradient" === i.config.fill.type || "gradient" === i.config.fill.type[t]) && new M(this.lineCtx.ctx, i).seriesHaveSameValues(t)) {
                        var a = e[t].slice();
                        a[a.length - 1] = a[a.length - 1] + 1e-6, e[t] = a
                    }
                    return e
                }
            }, {
                key: "calculatePoints",
                value: function (t) {
                    var e = t.series,
                        i = t.realIndex,
                        a = t.x,
                        s = t.y,
                        r = t.i,
                        o = t.j,
                        n = t.prevY,
                        l = this.w,
                        h = [],
                        c = [];
                    if (0 === o) {
                        var d = this.lineCtx.categoryAxisCorrection + l.config.markers.offsetX;
                        l.globals.isXNumeric && (d = (l.globals.seriesX[i][0] - l.globals.minX) / this.lineCtx.xRatio + l.config.markers.offsetX), h.push(d), c.push(E.isNumber(e[r][0]) ? n + l.config.markers.offsetY : null), h.push(a + l.config.markers.offsetX), c.push(E.isNumber(e[r][o + 1]) ? s + l.config.markers.offsetY : null)
                    } else h.push(a + l.config.markers.offsetX), c.push(E.isNumber(e[r][o + 1]) ? s + l.config.markers.offsetY : null);
                    return {
                        x: h,
                        y: c
                    }
                }
            }, {
                key: "checkPreviousPaths",
                value: function (t) {
                    for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, s = this.w, r = 0; r < s.globals.previousPaths.length; r++) {
                        var o = s.globals.previousPaths[r];
                        ("line" === o.type || "area" === o.type) && 0 < o.paths.length && parseInt(o.realIndex, 10) === parseInt(a, 10) && ("line" === o.type ? (this.lineCtx.appendPathFrom = !1, e = s.globals.previousPaths[r].paths[0].d) : "area" === o.type && (this.lineCtx.appendPathFrom = !1, i = s.globals.previousPaths[r].paths[0].d, s.config.stroke.show && s.globals.previousPaths[r].paths[1] && (e = s.globals.previousPaths[r].paths[1].d)))
                    }
                    return {
                        pathFromLine: e,
                        pathFromArea: i
                    }
                }
            }, {
                key: "determineFirstPrevY",
                value: function (t) {
                    var e = t.i,
                        i = t.series,
                        a = t.prevY,
                        s = t.lineYPosition,
                        r = this.w;
                    if (void 0 !== i[e][0]) a = (s = r.config.chart.stacked && 0 < e ? this.lineCtx.prevSeriesY[e - 1][0] : this.lineCtx.zeroY) - i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0);
                    else if (r.config.chart.stacked && 0 < e && void 0 === i[e][0])
                        for (var o = e - 1; 0 <= o; o--)
                            if (null !== i[o][0] && void 0 !== i[o][0]) {
                                a = s = this.lineCtx.prevSeriesY[o][0];
                                break
                            }
                    return {
                        prevY: a,
                        lineYPosition: s
                    }
                }
            }]), e
        }(),
        Tt = function () {
            function a(t, e, i) {
                r(this, a), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || i, this.scatter = new w(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Pt(this), this.markers = new C(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0
            }
            return o(a, [{
                key: "draw",
                value: function (t, e, i) {
                    var a = this.w,
                        s = new F(this.ctx),
                        r = a.globals.comboCharts ? e : a.config.chart.type,
                        o = s.group({
                            "class": "apexcharts-".concat(r, "-series apexcharts-plot-series")
                        }),
                        n = new M(this.ctx, a);
                    this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = n.getLogSeries(t), this.yRatio = n.getLogYRatios(this.yRatio);
                    for (var l = [], h = 0; h < t.length; h++) {
                        t = this.lineHelpers.sameValueSeriesFix(h, t);
                        var c = a.globals.comboCharts ? i[h] : h;
                        this._initSerieVariables(t, h, c);
                        var d = [],
                            g = [],
                            u = a.globals.padHorizontal + this.categoryAxisCorrection;
                        this.ctx.series.addCollapsedClassToSeries(this.elSeries, c), a.globals.isXNumeric && 0 < a.globals.seriesX.length && (u = (a.globals.seriesX[c][0] - a.globals.minX) / this.xRatio), g.push(u);
                        var p, f = u,
                            x = f,
                            b = this.zeroY;
                        b = this.lineHelpers.determineFirstPrevY({
                            i: h,
                            series: t,
                            prevY: b,
                            lineYPosition: 0
                        }).prevY, d.push(b), p = b;
                        var m = this._calculatePathsFrom({
                            series: t,
                            i: h,
                            realIndex: c,
                            prevX: x,
                            prevY: b
                        }),
                            v = this._iterateOverDataPoints({
                                series: t,
                                realIndex: c,
                                i: h,
                                x: u,
                                y: 1,
                                pX: f,
                                pY: p,
                                pathsFrom: m,
                                linePaths: [],
                                areaPaths: [],
                                seriesIndex: i,
                                lineYPosition: 0,
                                xArrj: g,
                                yArrj: d
                            });
                        this._handlePaths({
                            type: r,
                            realIndex: c,
                            i: h,
                            paths: v
                        }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), l.push(this.elSeries)
                    }
                    if (a.config.chart.stacked)
                        for (var y = l.length; 0 < y; y--) o.add(l[y - 1]);
                    else
                        for (var w = 0; w < l.length; w++) o.add(l[w]);
                    return o
                }
            }, {
                key: "_initSerieVariables",
                value: function (t, e, i) {
                    var a = this.w,
                        s = new F(this.ctx);
                    this.xDivision = a.globals.gridWidth / (a.globals.dataPoints - ("on" === a.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[i] : a.config.stroke.width, 1 < this.yRatio.length && (this.yaxisIndex = i), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a.globals.gridHeight || "end" === a.config.plotOptions.area.fillTo) && (this.areaBottomY = a.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s.group({
                        "class": "apexcharts-series",
                        seriesName: E.escapeString(a.globals.seriesNames[i])
                    }), this.elPointsMain = s.group({
                        "class": "apexcharts-series-markers-wrap",
                        "data:realIndex": i
                    }), this.elDataLabelsWrap = s.group({
                        "class": "apexcharts-datalabels",
                        "data:realIndex": i
                    });
                    var r = t[e].length === a.globals.dataPoints;
                    this.elSeries.attr({
                        "data:longestSeries": r,
                        rel: e + 1,
                        "data:realIndex": i
                    }), this.appendPathFrom = !0
                }
            }, {
                key: "_calculatePathsFrom",
                value: function (t) {
                    var e, i, a, s, r = t.series,
                        o = t.i,
                        n = t.realIndex,
                        l = t.prevX,
                        h = t.prevY,
                        c = this.w,
                        d = new F(this.ctx);
                    if (null === r[o][0]) {
                        for (var g = 0; g < r[o].length; g++)
                            if (null !== r[o][g]) {
                                l = this.xDivision * g, h = this.zeroY - r[o][g] / this.yRatio[this.yaxisIndex], e = d.move(l, h), i = d.move(l, this.areaBottomY);
                                break
                            }
                    } else e = d.move(l, h), i = d.move(l, this.areaBottomY) + d.line(l, h);
                    if (a = d.move(-1, this.zeroY) + d.line(-1, this.zeroY), s = d.move(-1, this.zeroY) + d.line(-1, this.zeroY), 0 < c.globals.previousPaths.length) {
                        var u = this.lineHelpers.checkPreviousPaths({
                            pathFromLine: a,
                            pathFromArea: s,
                            realIndex: n
                        });
                        a = u.pathFromLine, s = u.pathFromArea
                    }
                    return {
                        prevX: l,
                        prevY: h,
                        linePath: e,
                        areaPath: i,
                        pathFromLine: a,
                        pathFromArea: s
                    }
                }
            }, {
                key: "_handlePaths",
                value: function (t) {
                    var e = t.type,
                        i = t.realIndex,
                        a = t.i,
                        s = t.paths,
                        r = this.w,
                        o = new F(this.ctx),
                        n = new T(this.ctx);
                    this.prevSeriesY.push(s.yArrj), r.globals.seriesXvalues[i] = s.xArrj, r.globals.seriesYvalues[i] = s.yArrj;
                    var l = r.config.forecastDataPoints;
                    if (0 < l.count) {
                        var h = r.globals.seriesXvalues[i][r.globals.seriesXvalues[i].length - l.count - 1],
                            c = o.drawRect(h, 0, r.globals.gridWidth, r.globals.gridHeight, 0);
                        r.globals.dom.elForecastMask.appendChild(c.node);
                        var d = o.drawRect(0, 0, h, r.globals.gridHeight, 0);
                        r.globals.dom.elNonForecastMask.appendChild(d.node)
                    }
                    this.pointsChart || r.globals.delayedElements.push({
                        el: this.elPointsMain.node,
                        index: i
                    });
                    var g = {
                        i: a,
                        realIndex: i,
                        animationDelay: a,
                        initialSpeed: r.config.chart.animations.speed,
                        dataChangeSpeed: r.config.chart.animations.dynamicAnimation.speed,
                        className: "apexcharts-".concat(e)
                    };
                    if ("area" === e)
                        for (var u = n.fillPath({
                            seriesNumber: i
                        }), p = 0; p < s.areaPaths.length; p++) {
                            var f = o.renderPaths(X(X({}, g), {}, {
                                pathFrom: s.pathFromArea,
                                pathTo: s.areaPaths[p],
                                stroke: "none",
                                strokeWidth: 0,
                                strokeLineCap: null,
                                fill: u
                            }));
                            this.elSeries.add(f)
                        }
                    if (r.config.stroke.show && !this.pointsChart) {
                        var x = null;
                        x = "line" === e ? n.fillPath({
                            seriesNumber: i,
                            i: a
                        }) : r.globals.stroke.colors[i];
                        for (var b = 0; b < s.linePaths.length; b++) {
                            var m = X(X({}, g), {}, {
                                pathFrom: s.pathFromLine,
                                pathTo: s.linePaths[b],
                                stroke: x,
                                strokeWidth: this.strokeWidth,
                                strokeLineCap: r.config.stroke.lineCap,
                                fill: "none"
                            }),
                                v = o.renderPaths(m);
                            if (this.elSeries.add(v), 0 < l.count) {
                                var y = o.renderPaths(m);
                                y.node.setAttribute("stroke-dasharray", l.dashArray), l.strokeWidth && y.node.setAttribute("stroke-width", l.strokeWidth), this.elSeries.add(y), y.attr("clip-path", "url(#forecastMask".concat(r.globals.cuid, ")")), v.attr("clip-path", "url(#nonForecastMask".concat(r.globals.cuid, ")"))
                            }
                        }
                    }
                }
            }, {
                key: "_iterateOverDataPoints",
                value: function (t) {
                    for (var e = t.series, i = t.realIndex, a = t.i, s = t.x, r = t.y, o = t.pX, n = t.pY, l = t.pathsFrom, h = t.linePaths, c = t.areaPaths, d = t.seriesIndex, g = t.lineYPosition, u = t.xArrj, p = t.yArrj, f = this.w, x = new F(this.ctx), b = this.yRatio, m = l.prevY, v = l.linePath, y = l.areaPath, w = l.pathFromLine, k = l.pathFromArea, A = E.isNumber(f.globals.minYArr[i]) ? f.globals.minYArr[i] : f.globals.minY, S = 1 < f.globals.dataPoints ? f.globals.dataPoints - 1 : f.globals.dataPoints, C = 0; C < S; C++) {
                        var L = void 0 === e[a][C + 1] || null === e[a][C + 1];
                        if (f.globals.isXNumeric) {
                            var P = f.globals.seriesX[i][C + 1];
                            void 0 === f.globals.seriesX[i][C + 1] && (P = f.globals.seriesX[i][S - 1]), s = (P - f.globals.minX) / this.xRatio
                        } else s += this.xDivision;
                        g = f.config.chart.stacked && 0 < a && f.globals.collapsedSeries.length < f.config.series.length - 1 ? this.prevSeriesY[function (t) {
                            for (var e = t, i = 0; i < f.globals.series.length; i++)
                                if (-1 < f.globals.collapsedSeriesIndices.indexOf(t)) {
                                    e--;
                                    break
                                }
                            return 0 <= e ? e : 0
                        }(a - 1)][C + 1] : this.zeroY, r = L ? g - A / b[this.yaxisIndex] + 2 * (this.isReversed ? A / b[this.yaxisIndex] : 0) : g - e[a][C + 1] / b[this.yaxisIndex] + 2 * (this.isReversed ? e[a][C + 1] / b[this.yaxisIndex] : 0), u.push(s), p.push(r);
                        var T = this.lineHelpers.calculatePoints({
                            series: e,
                            x: s,
                            y: r,
                            realIndex: i,
                            i: a,
                            j: C,
                            prevY: m
                        }),
                            M = this._createPaths({
                                series: e,
                                i: a,
                                realIndex: i,
                                j: C,
                                x: s,
                                y: r,
                                pX: o,
                                pY: n,
                                linePath: v,
                                areaPath: y,
                                linePaths: h,
                                areaPaths: c,
                                seriesIndex: d
                            });
                        c = M.areaPaths, h = M.linePaths, o = M.pX, n = M.pY, y = M.areaPath, v = M.linePath, this.appendPathFrom && (w += x.line(s, this.zeroY), k += x.line(s, this.zeroY)), this.handleNullDataPoints(e, T, a, C, i), this._handleMarkersAndLabels({
                            pointsPos: T,
                            series: e,
                            x: s,
                            y: r,
                            prevY: m,
                            i: a,
                            j: C,
                            realIndex: i
                        })
                    }
                    return {
                        yArrj: p,
                        xArrj: u,
                        pathFromArea: k,
                        areaPaths: c,
                        pathFromLine: w,
                        linePaths: h
                    }
                }
            }, {
                key: "_handleMarkersAndLabels",
                value: function (t) {
                    var e = t.pointsPos;
                    t.series, t.x, t.y, t.prevY;
                    var i = t.i,
                        a = t.j,
                        s = t.realIndex,
                        r = this.w,
                        o = new k(this.ctx);
                    if (this.pointsChart) this.scatter.draw(this.elSeries, a, {
                        realIndex: s,
                        pointsPos: e,
                        zRatio: this.zRatio,
                        elParent: this.elPointsMain
                    });
                    else {
                        1 < r.globals.series[i].length && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
                        var n = this.markers.plotChartMarkers(e, s, a + 1);
                        null !== n && this.elPointsMain.add(n)
                    }
                    var l = o.drawDataLabel(e, s, a + 1, null);
                    null !== l && this.elDataLabelsWrap.add(l)
                }
            }, {
                key: "_createPaths",
                value: function (t) {
                    var e = t.series,
                        i = t.i,
                        a = t.realIndex,
                        s = t.j,
                        r = t.x,
                        o = t.y,
                        n = t.pX,
                        l = t.pY,
                        h = t.linePath,
                        c = t.areaPath,
                        d = t.linePaths,
                        g = t.areaPaths,
                        u = t.seriesIndex,
                        p = this.w,
                        f = new F(this.ctx),
                        x = p.config.stroke.curve,
                        b = this.areaBottomY;
                    if (Array.isArray(p.config.stroke.curve) && (x = Array.isArray(u) ? p.config.stroke.curve[u[i]] : p.config.stroke.curve[i]), "smooth" === x) {
                        var m = .35 * (r - n);
                        p.globals.hasNullValues ? (null !== e[i][s] && (null !== e[i][s + 1] ? (h = f.move(n, l) + f.curve(n + m, l, r - m, o, r + 1, o), c = f.move(n + 1, l) + f.curve(n + m, l, r - m, o, r + 1, o) + f.line(r, b) + f.line(n, b) + "z") : (h = f.move(n, l), c = f.move(n, l) + "z")), d.push(h), g.push(c)) : (h += f.curve(n + m, l, r - m, o, r, o), c += f.curve(n + m, l, r - m, o, r, o)), n = r, l = o, s === e[i].length - 2 && (c = c + f.curve(n, l, r, o, r, b) + f.move(r, o) + "z", p.globals.hasNullValues || (d.push(h), g.push(c)))
                    } else {
                        if (null === e[i][s + 1]) {
                            h += f.move(r, o);
                            var v = p.globals.isXNumeric ? (p.globals.seriesX[a][s] - p.globals.minX) / this.xRatio : r - this.xDivision;
                            c = c + f.line(v, b) + f.move(r, o) + "z"
                        }
                        null === e[i][s] && (h += f.move(r, o), c += f.move(r, b)), "stepline" === x ? (h = h + f.line(r, null, "H") + f.line(null, o, "V"), c = c + f.line(r, null, "H") + f.line(null, o, "V")) : "straight" === x && (h += f.line(r, o), c += f.line(r, o)), s === e[i].length - 2 && (c = c + f.line(r, b) + f.move(r, o) + "z", d.push(h), g.push(c))
                    }
                    return {
                        linePaths: d,
                        areaPaths: g,
                        pX: n,
                        pY: l,
                        linePath: h,
                        areaPath: c
                    }
                }
            }, {
                key: "handleNullDataPoints",
                value: function (t, e, i, a, s) {
                    var r = this.w;
                    if (null === t[i][a] && r.config.markers.showNullDataPoints || 1 === t[i].length) {
                        var o = this.markers.plotChartMarkers(e, s, a + 1, this.strokeWidth - r.config.markers.strokeWidth / 2, !0);
                        null !== o && this.elPointsMain.add(o)
                    }
                }
            }]), a
        }();
    window.TreemapSquared = {}, window.TreemapSquared.generate = function () {
        function h(t, e, i, a) {
            this.xoffset = t, this.yoffset = e, this.height = a, this.width = i, this.shortestEdge = function () {
                return Math.min(this.height, this.width)
            }, this.getCoordinates = function (t) {
                var e, i = [],
                    a = this.xoffset,
                    s = this.yoffset,
                    r = g(t) / this.height,
                    o = g(t) / this.width;
                if (this.width >= this.height)
                    for (e = 0; e < t.length; e++) i.push([a, s, a + r, s + t[e] / r]), s += t[e] / r;
                else
                    for (e = 0; e < t.length; e++) i.push([a, s, a + t[e] / o, s + o]), a += t[e] / o;
                return i
            }, this.cutArea = function (t) {
                var e;
                if (this.width >= this.height) {
                    var i = t / this.height,
                        a = this.width - i;
                    e = new h(this.xoffset + i, this.yoffset, a, this.height)
                } else {
                    var s = t / this.width,
                        r = this.height - s;
                    e = new h(this.xoffset, this.yoffset + s, this.width, r)
                }
                return e
            }
        }

        function c(t, s, r, e, i) {
            return e = void 0 === e ? 0 : e, i = void 0 === i ? 0 : i,
                function (t) {
                    var e, i, a = [];
                    for (e = 0; e < t.length; e++)
                        for (i = 0; i < t[e].length; i++) a.push(t[e][i]);
                    return a
                }(n(function (t) {
                    var e, i = [],
                        a = s * r / g(t);
                    for (e = 0; e < t.length; e++) i[e] = t[e] * a;
                    return i
                }(t), [], new h(e, i, s, r), []))
        }

        function n(t, e, i, a) {
            var s, r, o;
            if (0 !== t.length) return s = i.shortestEdge(),
                function (t, e, i) {
                    var a;
                    if (0 === t.length) return !0;
                    (a = t.slice()).push(e);
                    var s = l(t, i);
                    return l(a, i) <= s
                }(e, r = t[0], s) ? (e.push(r), n(t.slice(1), e, i, a)) : (o = i.cutArea(g(e), a), a.push(i.getCoordinates(e)), n(t, [], o, a)), a;
            a.push(i.getCoordinates(e))
        }

        function l(t, e) {
            var i = Math.min.apply(Math, t),
                a = Math.max.apply(Math, t),
                s = g(t);
            return Math.max(Math.pow(e, 2) * a / Math.pow(s, 2), Math.pow(s, 2) / (Math.pow(e, 2) * i))
        }

        function d(t) {
            return t && t.constructor === Array
        }

        function g(t) {
            var e, i = 0;
            for (e = 0; e < t.length; e++) i += t[e];
            return i
        }

        function u(t) {
            var e, i = 0;
            if (d(t[0]))
                for (e = 0; e < t.length; e++) i += u(t[e]);
            else i = g(t);
            return i
        }
        return function h(t, e, i, a, s) {
            a = void 0 === a ? 0 : a, s = void 0 === s ? 0 : s;
            var r, o, n = [],
                l = [];
            if (d(t[0])) {
                for (o = 0; o < t.length; o++) n[o] = u(t[o]);
                for (r = c(n, e, i, a, s), o = 0; o < t.length; o++) l.push(h(t[o], r[o][2] - r[o][0], r[o][3] - r[o][1], r[o][0], r[o][1]))
            } else l = c(t, e, i, a, s);
            return l
        }
    }();
    var e, Mt, It = function () {
        function e(t) {
            r(this, e), this.ctx = t, this.w = t.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new wt(t), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = []
        }
        return o(e, [{
            key: "draw",
            value: function (v) {
                var y = this,
                    w = this.w,
                    k = new F(this.ctx),
                    A = new T(this.ctx),
                    a = k.group({
                        "class": "apexcharts-treemap"
                    });
                if (w.globals.noData) return a;
                var i = [];
                return v.forEach(function (t) {
                    var e = t.map(function (t) {
                        return Math.abs(t)
                    });
                    i.push(e)
                }), this.negRange = this.helpers.checkColorRange(), w.config.series.forEach(function (t, e) {
                    t.data.forEach(function (t) {
                        Array.isArray(y.labels[e]) || (y.labels[e] = []), y.labels[e].push(t.x)
                    })
                }), window.TreemapSquared.generate(i, w.globals.gridWidth, w.globals.gridHeight).forEach(function (t, b) {
                    var m = k.group({
                        "class": "apexcharts-series apexcharts-treemap-series",
                        seriesName: E.escapeString(w.globals.seriesNames[b]),
                        rel: b + 1,
                        "data:realIndex": b
                    });
                    if (w.config.chart.dropShadow.enabled) {
                        var e = w.config.chart.dropShadow;
                        new Y(y.ctx).dropShadow(a, e, b)
                    }
                    var i = k.group({
                        "class": "apexcharts-data-labels"
                    });
                    t.forEach(function (t, e) {
                        var i = t[0],
                            a = t[1],
                            s = t[2],
                            r = t[3],
                            o = k.drawRect(i, a, s - i, r - a, 0, "#fff", 1, y.strokeWidth, w.config.plotOptions.treemap.useFillColorAsStroke ? l : w.globals.stroke.colors[b]);
                        o.attr({
                            cx: i,
                            cy: a,
                            index: b,
                            i: b,
                            j: e,
                            width: s - i,
                            height: r - a
                        });
                        var n = y.helpers.getShadeColor(w.config.chart.type, b, e, y.negRange),
                            l = n.color;
                        void 0 !== w.config.series[b].data[e] && w.config.series[b].data[e].fillColor && (l = w.config.series[b].data[e].fillColor);
                        var h = A.fillPath({
                            color: l,
                            seriesNumber: b,
                            dataPointIndex: e
                        });
                        o.node.classList.add("apexcharts-treemap-rect"), o.attr({
                            fill: h
                        }), y.helpers.addListeners(o);
                        var c = {
                            x: i + (s - i) / 2,
                            y: a + (r - a) / 2,
                            width: 0,
                            height: 0
                        },
                            d = {
                                x: i,
                                y: a,
                                width: s - i,
                                height: r - a
                            };
                        if (w.config.chart.animations.enabled && !w.globals.dataChanged) {
                            var g = 1;
                            w.globals.resized || (g = w.config.chart.animations.speed), y.animateTreemap(o, c, d, g)
                        }
                        if (w.globals.dataChanged) {
                            var u = 1;
                            y.dynamicAnim.enabled && w.globals.shouldAnimate && (u = y.dynamicAnim.speed, w.globals.previousPaths[b] && w.globals.previousPaths[b][e] && w.globals.previousPaths[b][e].rect && (c = w.globals.previousPaths[b][e].rect), y.animateTreemap(o, c, d, u))
                        }
                        var p = y.getFontSize(t),
                            f = w.config.dataLabels.formatter(y.labels[b][e], {
                                value: w.globals.series[b][e],
                                seriesIndex: b,
                                dataPointIndex: e,
                                w: w
                            }),
                            x = y.helpers.calculateDataLabels({
                                text: f,
                                x: (i + s) / 2,
                                y: (a + r) / 2 + y.strokeWidth / 2 + p / 3,
                                i: b,
                                j: e,
                                colorProps: n,
                                fontSize: p,
                                series: v
                            });
                        w.config.dataLabels.enabled && x && y.rotateToFitLabel(x, f, i, a, s, r), m.add(o), null !== x && m.add(x)
                    }), m.add(i), a.add(m)
                }), a
            }
        }, {
            key: "getFontSize",
            value: function (a) {
                var t, e, i = this.w,
                    s = function a(t) {
                        var e, i = 0;
                        if (Array.isArray(t[0]))
                            for (e = 0; e < t.length; e++) i += a(t[e]);
                        else
                            for (e = 0; e < t.length; e++) i += t[e].length;
                        return i
                    }(this.labels) / function a(t) {
                        var e, i = 0;
                        if (Array.isArray(t[0]))
                            for (e = 0; e < t.length; e++) i += a(t[e]);
                        else
                            for (e = 0; e < t.length; e++) i += 1;
                        return i
                    }(this.labels);
                return t = (a[2] - a[0]) * (a[3] - a[1]), e = Math.pow(t, .5), Math.min(e / s, parseInt(i.config.dataLabels.style.fontSize, 10))
            }
        }, {
            key: "rotateToFitLabel",
            value: function (t, e, i, a, s, r) {
                var o = new F(this.ctx),
                    n = o.getTextRects(e);
                if (n.width + 5 > s - i && n.width <= r - a) {
                    var l = o.rotateAroundCenter(t.node);
                    t.node.setAttribute("transform", "rotate(-90 ".concat(l.x, " ").concat(l.y, ")"))
                }
            }
        }, {
            key: "animateTreemap",
            value: function (t, e, i, a) {
                var s = new z(this.ctx);
                s.animateRect(t, {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height
                }, {
                    x: i.x,
                    y: i.y,
                    width: i.width,
                    height: i.height
                }, a, function () {
                    s.animationCompleted(t)
                })
            }
        }]), e
    }(),
        zt = 86400,
        Xt = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC
            }
            return o(e, [{
                key: "calculateTimeScaleTicks",
                value: function (t, e) {
                    var o = this,
                        n = this.w;
                    if (n.globals.allSeriesCollapsed) return n.globals.labels = [], n.globals.timescaleLabels = [], [];
                    var i = new R(this.ctx),
                        a = (e - t) / 864e5;
                    this.determineInterval(a), n.globals.disableZoomIn = !1, n.globals.disableZoomOut = !1, a < .00011574074074074075 ? n.globals.disableZoomIn = !0 : 5e4 < a && (n.globals.disableZoomOut = !0);
                    var s = i.getTimeUnitsfromTimestamp(t, e, this.utc),
                        r = n.globals.gridWidth / a,
                        l = r / 24,
                        h = l / 60,
                        c = h / 60,
                        d = Math.floor(24 * a),
                        g = Math.floor(1440 * a),
                        u = Math.floor(a * zt),
                        p = Math.floor(a),
                        f = Math.floor(a / 30),
                        x = Math.floor(a / 365),
                        b = {
                            minMillisecond: s.minMillisecond,
                            minSecond: s.minSecond,
                            minMinute: s.minMinute,
                            minHour: s.minHour,
                            minDate: s.minDate,
                            minMonth: s.minMonth,
                            minYear: s.minYear
                        },
                        m = {
                            firstVal: b,
                            currentMillisecond: b.minMillisecond,
                            currentSecond: b.minSecond,
                            currentMinute: b.minMinute,
                            currentHour: b.minHour,
                            currentMonthDate: b.minDate,
                            currentDate: b.minDate,
                            currentMonth: b.minMonth,
                            currentYear: b.minYear,
                            daysWidthOnXAxis: r,
                            hoursWidthOnXAxis: l,
                            minutesWidthOnXAxis: h,
                            secondsWidthOnXAxis: c,
                            numberOfSeconds: u,
                            numberOfMinutes: g,
                            numberOfHours: d,
                            numberOfDays: p,
                            numberOfMonths: f,
                            numberOfYears: x
                        };
                    switch (this.tickInterval) {
                        case "years":
                            this.generateYearScale(m);
                            break;
                        case "months":
                        case "half_year":
                            this.generateMonthScale(m);
                            break;
                        case "months_days":
                        case "months_fortnight":
                        case "days":
                        case "week_days":
                            this.generateDayScale(m);
                            break;
                        case "hours":
                            this.generateHourScale(m);
                            break;
                        case "minutes_fives":
                        case "minutes":
                            this.generateMinuteScale(m);
                            break;
                        case "seconds_tens":
                        case "seconds_fives":
                        case "seconds":
                            this.generateSecondScale(m)
                    }
                    var v = this.timeScaleArray.map(function (t) {
                        var e = {
                            position: t.position,
                            unit: t.unit,
                            year: t.year,
                            day: t.day ? t.day : 1,
                            hour: t.hour ? t.hour : 0,
                            month: t.month + 1
                        };
                        return "month" === t.unit ? X(X({}, e), {}, {
                            day: 1,
                            value: t.value + 1
                        }) : "day" === t.unit || "hour" === t.unit ? X(X({}, e), {}, {
                            value: t.value
                        }) : "minute" === t.unit ? X(X({}, e), {}, {
                            value: t.value,
                            minute: t.value
                        }) : "second" === t.unit ? X(X({}, e), {}, {
                            value: t.value,
                            minute: t.minute,
                            second: t.second
                        }) : t
                    });
                    return v.filter(function (t) {
                        var e = 1,
                            i = Math.ceil(n.globals.gridWidth / 120),
                            a = t.value;
                        void 0 !== n.config.xaxis.tickAmount && (i = n.config.xaxis.tickAmount), v.length > i && (e = Math.floor(v.length / i));
                        var s = !1,
                            r = !1;
                        switch (o.tickInterval) {
                            case "years":
                                "year" === t.unit && (s = !0);
                                break;
                            case "half_year":
                                e = 7, "year" === t.unit && (s = !0);
                                break;
                            case "months":
                                e = 1, "year" === t.unit && (s = !0);
                                break;
                            case "months_fortnight":
                                e = 15, "year" !== t.unit && "month" !== t.unit || (s = !0), 30 === a && (r = !0);
                                break;
                            case "months_days":
                                e = 10, "month" === t.unit && (s = !0), 30 === a && (r = !0);
                                break;
                            case "week_days":
                                e = 8, "month" === t.unit && (s = !0);
                                break;
                            case "days":
                                e = 1, "month" === t.unit && (s = !0);
                                break;
                            case "hours":
                                "day" === t.unit && (s = !0);
                                break;
                            case "minutes_fives":
                                a % 5 != 0 && (r = !0);
                                break;
                            case "seconds_tens":
                                a % 10 != 0 && (r = !0);
                                break;
                            case "seconds_fives":
                                a % 5 != 0 && (r = !0)
                        }
                        if ("hours" === o.tickInterval || "minutes_fives" === o.tickInterval || "seconds_tens" === o.tickInterval || "seconds_fives" === o.tickInterval) {
                            if (!r) return !0
                        } else if ((a % e == 0 || s) && !r) return !0
                    })
                }
            }, {
                key: "recalcDimensionsBasedOnFormat",
                value: function (t) {
                    var e = this.w,
                        i = this.formatDates(t),
                        a = this.removeOverlappingTS(i);
                    e.globals.timescaleLabels = a.slice(), new nt(this.ctx).plotCoords()
                }
            }, {
                key: "determineInterval",
                value: function (t) {
                    var e = 24 * t,
                        i = 60 * e;
                    switch (!0) {
                        case 5 < t / 365:
                            this.tickInterval = "years";
                            break;
                        case 800 < t:
                            this.tickInterval = "half_year";
                            break;
                        case 180 < t:
                            this.tickInterval = "months";
                            break;
                        case 90 < t:
                            this.tickInterval = "months_fortnight";
                            break;
                        case 60 < t:
                            this.tickInterval = "months_days";
                            break;
                        case 30 < t:
                            this.tickInterval = "week_days";
                            break;
                        case 2 < t:
                            this.tickInterval = "days";
                            break;
                        case 2.4 < e:
                            this.tickInterval = "hours";
                            break;
                        case 15 < i:
                            this.tickInterval = "minutes_fives";
                            break;
                        case 5 < i:
                            this.tickInterval = "minutes";
                            break;
                        case 1 < i:
                            this.tickInterval = "seconds_tens";
                            break;
                        case 20 < 60 * i:
                            this.tickInterval = "seconds_fives";
                            break;
                        default:
                            this.tickInterval = "seconds"
                    }
                }
            }, {
                key: "generateYearScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentMonth,
                        a = t.currentYear,
                        s = t.daysWidthOnXAxis,
                        r = t.numberOfYears,
                        o = e.minYear,
                        n = 0,
                        l = new R(this.ctx),
                        h = "year";
                    if (1 < e.minDate || 0 < e.minMonth) {
                        var c = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                        n = (l.determineDaysOfYear(e.minYear) - c + 1) * s, o = e.minYear + 1, this.timeScaleArray.push({
                            position: n,
                            value: o,
                            unit: h,
                            year: o,
                            month: E.monthMod(i + 1)
                        })
                    } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({
                        position: n,
                        value: o,
                        unit: h,
                        year: a,
                        month: E.monthMod(i + 1)
                    });
                    for (var d = o, g = n, u = 0; u < r; u++) d++, g = l.determineDaysOfYear(d - 1) * s + g, this.timeScaleArray.push({
                        position: g,
                        value: d,
                        unit: h,
                        year: d,
                        month: 1
                    })
                }
            }, {
                key: "generateMonthScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentMonthDate,
                        a = t.currentMonth,
                        s = t.currentYear,
                        r = t.daysWidthOnXAxis,
                        o = t.numberOfMonths,
                        n = a,
                        l = 0,
                        h = new R(this.ctx),
                        c = "month",
                        d = 0;
                    if (1 < e.minDate) {
                        l = (h.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * r, n = E.monthMod(a + 1);
                        var g = s + d,
                            u = E.monthMod(n),
                            p = n;
                        0 === n && (c = "year", p = g, g += d += u = 1), this.timeScaleArray.push({
                            position: l,
                            value: p,
                            unit: c,
                            year: g,
                            month: u
                        })
                    } else this.timeScaleArray.push({
                        position: l,
                        value: n,
                        unit: c,
                        year: s,
                        month: E.monthMod(a)
                    });
                    for (var f = n + 1, x = l, b = 0, m = 1; b < o; b++, m++) {
                        0 === (f = E.monthMod(f)) ? (c = "year", d += 1) : c = "month";
                        var v = this._getYear(s, f, d);
                        x = h.determineDaysOfMonths(f, v) * r + x;
                        var y = 0 === f ? v : f;
                        this.timeScaleArray.push({
                            position: x,
                            value: y,
                            unit: c,
                            year: v,
                            month: 0 === f ? 1 : f
                        }), f++
                    }
                }
            }, {
                key: "generateDayScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentMonth,
                        a = t.currentYear,
                        s = t.hoursWidthOnXAxis,
                        r = t.numberOfDays,
                        o = new R(this.ctx),
                        n = "day",
                        l = e.minDate + 1,
                        h = l,
                        c = function (t, e, i) {
                            return t > o.determineDaysOfMonths(e + 1, i) && (n = "month", g = e += h = 1), e
                        },
                        d = (24 - e.minHour) * s,
                        g = l,
                        u = c(h, i, a);
                    0 === e.minHour && 1 === e.minDate ? (d = 0, g = E.monthMod(e.minMonth), n = "month", h = e.minDate, r++) : 1 !== e.minDate && 0 === e.minHour && 0 === e.minMinute && (d = 0, l = e.minDate, u = c(h = g = l, i, a)), this.timeScaleArray.push({
                        position: d,
                        value: g,
                        unit: n,
                        year: this._getYear(a, u, 0),
                        month: E.monthMod(u),
                        day: h
                    });
                    for (var p = d, f = 0; f < r; f++) {
                        n = "day", u = c(h += 1, u, this._getYear(a, u, 0));
                        var x = this._getYear(a, u, 0);
                        p = 24 * s + p;
                        var b = 1 === h ? E.monthMod(u) : h;
                        this.timeScaleArray.push({
                            position: p,
                            value: b,
                            unit: n,
                            year: x,
                            month: E.monthMod(u),
                            day: b
                        })
                    }
                }
            }, {
                key: "generateHourScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentDate,
                        a = t.currentMonth,
                        s = t.currentYear,
                        r = t.minutesWidthOnXAxis,
                        o = t.numberOfHours,
                        n = new R(this.ctx),
                        l = "hour",
                        h = function (t, e) {
                            return t > n.determineDaysOfMonths(e + 1, s) && (e += f = 1), {
                                month: e,
                                date: f
                            }
                        },
                        c = function (t, e) {
                            return t > n.determineDaysOfMonths(e + 1, s) ? e += 1 : e
                        },
                        d = 60 - (e.minMinute + e.minSecond / 60),
                        g = d * r,
                        u = e.minHour + 1,
                        p = u + 1;
                    60 === d && (g = 0, p = (u = e.minHour) + 1);
                    var f = i,
                        x = c(f, a);
                    this.timeScaleArray.push({
                        position: g,
                        value: u,
                        unit: l,
                        day: f,
                        hour: p,
                        year: s,
                        month: E.monthMod(x)
                    });
                    for (var b = g, m = 0; m < o; m++) {
                        l = "hour", 24 <= p && (p = 0, l = "day", x = h(f += 1, x).month, x = c(f, x));
                        var v = this._getYear(s, x, 0);
                        b = 0 === p && 0 === m ? d * r : 60 * r + b;
                        var y = 0 === p ? f : p;
                        this.timeScaleArray.push({
                            position: b,
                            value: y,
                            unit: l,
                            hour: p,
                            day: f,
                            year: v,
                            month: E.monthMod(x)
                        }), p++
                    }
                }
            }, {
                key: "generateMinuteScale",
                value: function (t) {
                    for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, r = t.currentDate, o = t.currentMonth, n = t.currentYear, l = t.minutesWidthOnXAxis, h = t.secondsWidthOnXAxis, c = t.numberOfMinutes, d = a + 1, g = r, u = o, p = n, f = s, x = (60 - i - e / 1e3) * h, b = 0; b < c; b++) 60 <= d && (d = 0, 24 === (f += 1) && (f = 0)), this.timeScaleArray.push({
                        position: x,
                        value: d,
                        unit: "minute",
                        hour: f,
                        minute: d,
                        day: g,
                        year: this._getYear(p, u, 0),
                        month: E.monthMod(u)
                    }), x += l, d++
                }
            }, {
                key: "generateSecondScale",
                value: function (t) {
                    for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, r = t.currentDate, o = t.currentMonth, n = t.currentYear, l = t.secondsWidthOnXAxis, h = t.numberOfSeconds, c = i + 1, d = a, g = r, u = o, p = n, f = s, x = (1e3 - e) / 1e3 * l, b = 0; b < h; b++) 60 <= c && (c = 0, 60 <= ++d && (d = 0, 24 == ++f && (f = 0))), this.timeScaleArray.push({
                        position: x,
                        value: c,
                        unit: "second",
                        hour: f,
                        minute: d,
                        second: c,
                        day: g,
                        year: this._getYear(p, u, 0),
                        month: E.monthMod(u)
                    }), x += l, c++
                }
            }, {
                key: "createRawDateString",
                value: function (t, e) {
                    var i = t.year;
                    return 0 === t.month && (t.month = 1), i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), "minute" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00"), "second" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i
                }
            }, {
                key: "formatDates",
                value: function (t) {
                    var n = this,
                        l = this.w;
                    return t.map(function (t) {
                        var e = t.value.toString(),
                            i = new R(n.ctx),
                            a = n.createRawDateString(t, e),
                            s = i.getDate(i.parseDate(a));
                        if (n.utc || (s = i.getDate(i.parseDateWithTimezone(a))), void 0 === l.config.xaxis.labels.format) {
                            var r = "dd MMM",
                                o = l.config.xaxis.labels.datetimeFormatter;
                            "year" === t.unit && (r = o.year), "month" === t.unit && (r = o.month), "day" === t.unit && (r = o.day), "hour" === t.unit && (r = o.hour), "minute" === t.unit && (r = o.minute), "second" === t.unit && (r = o.second), e = i.formatDate(s, r)
                        } else e = i.formatDate(s, l.config.xaxis.labels.format);
                        return {
                            dateString: a,
                            position: t.position,
                            value: e,
                            unit: t.unit,
                            year: t.year,
                            month: t.month
                        }
                    })
                }
            }, {
                key: "removeOverlappingTS",
                value: function (s) {
                    var r, o = this,
                        n = new F(this.ctx),
                        l = !1;
                    0 < s.length && s[0].value && s.every(function (t) {
                        return t.value.length === s[0].value.length
                    }) && (l = !0, r = n.getTextRects(s[0].value).width);
                    var h = 0,
                        t = s.map(function (t, e) {
                            if (0 < e && o.w.config.xaxis.labels.hideOverlappingLabels) {
                                var i = l ? r : n.getTextRects(s[h].value).width,
                                    a = s[h].position;
                                return t.position > a + i + 10 ? (h = e, t) : null
                            }
                            return t
                        });
                    return t.filter(function (t) {
                        return null !== t
                    })
                }
            }, {
                key: "_getYear",
                value: function (t, e, i) {
                    return t + Math.floor(e / 12) + i
                }
            }]), e
        }(),
        Et = function () {
            function i(t, e) {
                r(this, i), this.ctx = e, this.w = e.w, this.el = t
            }
            return o(i, [{
                key: "setupElements",
                value: function () {
                    var t = this.w.globals,
                        e = this.w.config,
                        i = e.chart.type;
                    t.axisCharts = -1 < ["line", "area", "bar", "rangeBar", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i), t.xyCharts = -1 < ["line", "area", "bar", "rangeBar", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i), t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), F.setAttrs(t.dom.elWrap, {
                        id: t.chartClass.substring(1),
                        "class": "apexcharts-canvas " + t.chartClass.substring(1)
                    }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
                        "class": "apexcharts-svg",
                        "xmlns:data": "ApexChartsNS",
                        transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")")
                    }), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical = t.dom.Paper.group().attr({
                        "class": "apexcharts-inner apexcharts-graphical"
                    }), t.dom.elAnnotations = t.dom.Paper.group().attr({
                        "class": "apexcharts-annotations"
                    }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs)
                }
            }, {
                key: "plotChartType",
                value: function (a, t) {
                    var s = this.w,
                        r = s.config,
                        o = s.globals,
                        n = {
                            series: [],
                            i: []
                        },
                        l = {
                            series: [],
                            i: []
                        },
                        h = {
                            series: [],
                            i: []
                        },
                        c = {
                            series: [],
                            i: []
                        },
                        d = {
                            series: [],
                            i: []
                        },
                        g = {
                            series: [],
                            i: []
                        },
                        u = {
                            series: [],
                            i: []
                        };
                    o.series.map(function (t, e) {
                        var i = 0;
                        void 0 !== a[e].type ? ("column" === a[e].type || "bar" === a[e].type ? (1 < o.series.length && r.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), d.series.push(t), d.i.push(e), i++, s.globals.columnSeries = d.series) : "area" === a[e].type ? (l.series.push(t), l.i.push(e), i++) : "line" === a[e].type ? (n.series.push(t), n.i.push(e), i++) : "scatter" === a[e].type ? (h.series.push(t), h.i.push(e)) : "bubble" === a[e].type ? (c.series.push(t), c.i.push(e), i++) : "candlestick" === a[e].type ? (g.series.push(t), g.i.push(e), i++) : "boxPlot" === a[e].type ? (u.series.push(t), u.i.push(e), i++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"), 1 < i && (o.comboCharts = !0)) : (n.series.push(t), n.i.push(e))
                    });
                    var e = new Tt(this.ctx, t),
                        i = new yt(this.ctx, t);
                    this.ctx.pie = new St(this.ctx);
                    var p = new Lt(this.ctx);
                    this.ctx.rangeBar = new H(this.ctx, t);
                    var f = new Ct(this.ctx),
                        x = [];
                    if (o.comboCharts) {
                        if (0 < l.series.length && x.push(e.draw(l.series, "area", l.i)), 0 < d.series.length)
                            if (s.config.chart.stacked) {
                                var b = new vt(this.ctx, t);
                                x.push(b.draw(d.series, d.i))
                            } else this.ctx.bar = new P(this.ctx, t), x.push(this.ctx.bar.draw(d.series, d.i));
                        if (0 < n.series.length && x.push(e.draw(n.series, "line", n.i)), 0 < g.series.length && x.push(i.draw(g.series, g.i)), 0 < u.series.length && x.push(i.draw(u.series, u.i)), 0 < h.series.length) {
                            var m = new Tt(this.ctx, t, !0);
                            x.push(m.draw(h.series, "scatter", h.i))
                        }
                        if (0 < c.series.length) {
                            var v = new Tt(this.ctx, t, !0);
                            x.push(v.draw(c.series, "bubble", c.i))
                        }
                    } else switch (r.chart.type) {
                        case "line":
                            x = e.draw(o.series, "line");
                            break;
                        case "area":
                            x = e.draw(o.series, "area");
                            break;
                        case "bar":
                            r.chart.stacked ? x = new vt(this.ctx, t).draw(o.series) : (this.ctx.bar = new P(this.ctx, t), x = this.ctx.bar.draw(o.series));
                            break;
                        case "candlestick":
                        case "boxPlot":
                            x = new yt(this.ctx, t).draw(o.series);
                            break;
                        case "rangeBar":
                            x = this.ctx.rangeBar.draw(o.series);
                            break;
                        case "heatmap":
                            x = new kt(this.ctx, t).draw(o.series);
                            break;
                        case "treemap":
                            x = new It(this.ctx, t).draw(o.series);
                            break;
                        case "pie":
                        case "donut":
                        case "polarArea":
                            x = this.ctx.pie.draw(o.series);
                            break;
                        case "radialBar":
                            x = p.draw(o.series);
                            break;
                        case "radar":
                            x = f.draw(o.series);
                            break;
                        default:
                            x = e.draw(o.series)
                    }
                    return x
                }
            }, {
                key: "setSVGDimensions",
                value: function () {
                    var t = this.w.globals,
                        e = this.w.config;
                    t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
                    var i = E.getDimensions(this.el),
                        a = e.chart.width.toString().split(/[0-9]+/g).pop();
                    "%" === a ? E.isNumber(i[0]) && (0 === i[0].width && (i = E.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : "px" !== a && "" !== a || (t.svgWidth = parseInt(e.chart.width, 10));
                    var s = e.chart.height.toString().split(/[0-9]+/g).pop();
                    if ("auto" !== t.svgHeight && "" !== t.svgHeight)
                        if ("%" === s) {
                            var r = E.getDimensions(this.el.parentNode);
                            t.svgHeight = r[1] * parseInt(e.chart.height, 10) / 100
                        } else t.svgHeight = parseInt(e.chart.height, 10);
                    else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2;
                    if (t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), F.setAttrs(t.dom.Paper.node, {
                        width: t.svgWidth,
                        height: t.svgHeight
                    }), "%" !== s) {
                        var o = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
                        t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + o + "px"
                    }
                    t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
                }
            }, {
                key: "shiftGraphPosition",
                value: function () {
                    var t = this.w.globals,
                        e = t.translateY,
                        i = {
                            transform: "translate(" + t.translateX + ", " + e + ")"
                        };
                    F.setAttrs(t.dom.elGraphical.node, i)
                }
            }, {
                key: "resizeNonAxisCharts",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = 0,
                        a = t.config.chart.sparkline.enabled ? 1 : 15;
                    a += t.config.grid.padding.bottom, "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || !t.config.legend.show || t.config.legend.floating || (i = new ht(this.ctx).legendHelpers.getLegendBBox().clwh + 10);
                    var s = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),
                        r = 2.05 * t.globals.radialSize;
                    if (s && !t.config.chart.sparkline.enabled) {
                        var o = E.getBoundingClientRect(s);
                        r = o.bottom;
                        var n = o.bottom - o.top;
                        r = Math.max(2.05 * t.globals.radialSize, n)
                    }
                    var l = r + e.translateY + i + a;
                    e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", l), e.dom.elWrap.style.height = l + "px", F.setAttrs(e.dom.Paper.node, {
                        height: l
                    }), e.dom.Paper.node.parentNode.parentNode.style.minHeight = l + "px"
                }
            }, {
                key: "coreCalculations",
                value: function () {
                    new Z(this.ctx).init()
                }
            }, {
                key: "resetGlobals",
                value: function () {
                    var t = this,
                        e = function () {
                            return t.w.config.series.map(function () {
                                return []
                            })
                        },
                        i = new O,
                        a = this.w.globals;
                    i.initGlobalVars(a), a.seriesXvalues = e(), a.seriesYvalues = e()
                }
            }, {
                key: "isMultipleY",
                value: function () {
                    if (this.w.config.yaxis.constructor === Array && 1 < this.w.config.yaxis.length) return this.w.globals.isMultipleYAxis = !0
                }
            }, {
                key: "xySettings",
                value: function () {
                    var t = null,
                        e = this.w;
                    if (e.globals.axisCharts) {
                        if ("back" === e.config.xaxis.crosshairs.position && new K(this.ctx).drawXCrosshairs(), "back" === e.config.yaxis[0].crosshairs.position && new K(this.ctx).drawYCrosshairs(), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter) {
                            this.ctx.timeScale = new Xt(this.ctx);
                            var i = [];
                            isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)
                        }
                        t = new M(this.ctx).getCalculatedRatios()
                    }
                    return t
                }
            }, {
                key: "updateSourceChart",
                value: function (t) {
                    this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({
                        chart: {
                            selection: {
                                xaxis: {
                                    min: t.w.globals.minX,
                                    max: t.w.globals.maxX
                                }
                            }
                        }
                    }, !1, !1)
                }
            }, {
                key: "setupBrushHandler",
                value: function () {
                    var i = this,
                        o = this.w;
                    if (o.config.chart.brush.enabled && "function" != typeof o.config.chart.events.selection) {
                        var e = o.config.chart.brush.targets || [o.config.chart.brush.target];
                        e.forEach(function (t) {
                            var e = ApexCharts.getChartByID(t);
                            e.w.globals.brushSource = i.ctx, "function" != typeof e.w.config.chart.events.zoomed && (e.w.config.chart.events.zoomed = function () {
                                i.updateSourceChart(e)
                            }), "function" != typeof e.w.config.chart.events.scrolled && (e.w.config.chart.events.scrolled = function () {
                                i.updateSourceChart(e)
                            })
                        }), o.config.chart.events.selection = function (t, r) {
                            e.forEach(function (t) {
                                var a = ApexCharts.getChartByID(t),
                                    s = E.clone(o.config.yaxis);
                                if (o.config.chart.brush.autoScaleYaxis && 1 === a.w.globals.series.length) {
                                    var e = new q(a);
                                    s = e.autoScaleY(a, s, r)
                                }
                                var i = a.w.config.yaxis.reduce(function (t, e, i) {
                                    return [].concat(A(t), [X(X({}, a.w.config.yaxis[i]), {}, {
                                        min: s[0].min,
                                        max: s[0].max
                                    })])
                                }, []);
                                a.ctx.updateHelpers._updateOptions({
                                    xaxis: {
                                        min: r.xaxis.min,
                                        max: r.xaxis.max
                                    },
                                    yaxis: i
                                }, !1, !1, !1, !1)
                            })
                        }
                    }
                }
            }]), i
        }(),
        Yt = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "_updateOptions",
                value: function (i, t, e, a, s) {
                    var r = this,
                        o = 1 < arguments.length && void 0 !== t && arguments[1],
                        n = !(2 < arguments.length && void 0 !== e) || arguments[2],
                        l = !(3 < arguments.length && void 0 !== a) || arguments[3],
                        h = 4 < arguments.length && void 0 !== s && arguments[4],
                        c = [this.ctx];
                    l && (c = this.ctx.getSyncedCharts()), this.ctx.w.globals.isExecCalled && (c = [this.ctx], this.ctx.w.globals.isExecCalled = !1), c.forEach(function (t) {
                        var e = t.w;
                        return e.globals.shouldAnimate = n, o || (e.globals.resized = !0, e.globals.dataChanged = !0, n && t.series.getPreviousPaths()), i && "object" === y(i) && (t.config = new N(i), i = M.extendArrayProps(t.config, i, e), t.w.globals.chartID !== r.ctx.w.globals.chartID && delete i.series, e.config = E.extend(e.config, i), h && (e.globals.lastXAxis = i.xaxis ? E.clone(i.xaxis) : [], e.globals.lastYAxis = i.yaxis ? E.clone(i.yaxis) : [], e.globals.initialConfig = E.extend({}, e.config), e.globals.initialSeries = E.clone(e.config.series))), t.update(i)
                    })
                }
            }, {
                key: "_updateSeries",
                value: function (t, e, i) {
                    var a, s = this,
                        r = 2 < arguments.length && void 0 !== i && arguments[2],
                        o = this.w;
                    return o.globals.shouldAnimate = e, o.globals.dataChanged = !0, e && this.ctx.series.getPreviousPaths(), o.globals.axisCharts ? (0 === (a = t.map(function (t, e) {
                        return s._extendSeries(t, e)
                    })).length && (a = [{
                        data: []
                    }]), o.config.series = a) : o.config.series = t.slice(), r && (o.globals.initialSeries = E.clone(o.config.series)), this.ctx.update()
                }
            }, {
                key: "_extendSeries",
                value: function (t, e) {
                    var i = this.w,
                        a = i.config.series[e];
                    return X(X({}, i.config.series[e]), {}, {
                        name: t.name ? t.name : a && a.name,
                        color: t.color ? t.color : a && a.color,
                        type: t.type ? t.type : a && a.type,
                        data: t.data ? t.data : a && a.data
                    })
                }
            }, {
                key: "toggleDataPointSelection",
                value: function (t, e) {
                    var i = this.w,
                        a = null,
                        s = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
                    return i.globals.axisCharts ? a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(e, "'], ").concat(s, " circle[j='").concat(e, "'], ").concat(s, " rect[j='").concat(e, "']")).members[0] : void 0 === e && (a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(t, "']")).members[0], "pie" !== i.config.chart.type && "polarArea" !== i.config.chart.type && "donut" !== i.config.chart.type || this.ctx.pie.pieClicked(t)), a ? (new F(this.ctx).pathMouseDown(a, null), a.node ? a.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null)
                }
            }, {
                key: "forceXAxisUpdate",
                value: function (e) {
                    var i = this.w;
                    if (["min", "max"].forEach(function (t) {
                        void 0 !== e.xaxis[t] && (i.config.xaxis[t] = e.xaxis[t], i.globals.lastXAxis[t] = e.xaxis[t])
                    }), e.xaxis.categories && e.xaxis.categories.length && (i.config.xaxis.categories = e.xaxis.categories), i.config.xaxis.convertedCatToNumeric) {
                        var t = new D(e);
                        e = t.convertCatToNumericXaxis(e, this.ctx)
                    }
                    return e
                }
            }, {
                key: "forceYAxisUpdate",
                value: function (i) {
                    var t = this.w;
                    return t.config.chart.stacked && "100%" === t.config.chart.stackType && (Array.isArray(i.yaxis) ? i.yaxis.forEach(function (t, e) {
                        i.yaxis[e].min = 0, i.yaxis[e].max = 100
                    }) : (i.yaxis.min = 0, i.yaxis.max = 100)), i
                }
            }, {
                key: "revertDefaultAxisMinMax",
                value: function (t) {
                    var i = this,
                        a = this.w,
                        e = a.globals.lastXAxis,
                        s = a.globals.lastYAxis;
                    t && t.xaxis && (e = t.xaxis), t && t.yaxis && (s = t.yaxis), a.config.xaxis.min = e.min, a.config.xaxis.max = e.max;
                    var r = function (t) {
                        void 0 !== s[t] && (a.config.yaxis[t].min = s[t].min, a.config.yaxis[t].max = s[t].max)
                    };
                    a.config.yaxis.map(function (t, e) {
                        a.globals.zoomed || void 0 !== s[e] ? r(e) : void 0 !== i.ctx.opts.yaxis[e] && (t.min = i.ctx.opts.yaxis[e].min, t.max = i.ctx.opts.yaxis[e].max)
                    })
                }
            }]), e
        }();
    e = "undefined" != typeof window ? window : void 0, Mt = function (s, r) {
        function l(t, e, i, a) {
            return i + a.replace(g.regex.dots, " .")
        }

        function a(t) {
            return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            })
        }

        function i(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function t(t) {
            var e = t.toString(16);
            return 1 == e.length ? "0" + e : e
        }

        function o(t, e, i) {
            if (null == e || null == i) {
                var a = t.bbox();
                null == e ? e = a.width / a.height * i : null == i && (i = a.height / a.width * e)
            }
            return {
                width: e,
                height: i
            }
        }

        function n(t, e, i) {
            return {
                x: e * t.a + i * t.c + 0,
                y: e * t.b + i * t.d + 0
            }
        }

        function h(t) {
            return {
                a: t[0],
                b: t[1],
                c: t[2],
                d: t[3],
                e: t[4],
                f: t[5]
            }
        }

        function c(t) {
            for (var e = t.childNodes.length - 1; 0 <= e; e--) t.childNodes[e] instanceof s.SVGElement && c(t.childNodes[e]);
            return g.adopt(t).id(g.eid(t.nodeName))
        }

        function d(t) {
            return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t
        }

        function e(t) {
            return 1e-37 < Math.abs(t) ? t : 0
        }
        var g = (void 0 !== this ? this : s).SVG = function (t) {
            if (g.supported) return t = new g.Doc(t), g.parser.draw || g.prepare(), t
        };
        if (g.ns = "http://www.w3.org/2000/svg", g.xmlns = "http://www.w3.org/2000/xmlns/", g.xlink = "http://www.w3.org/1999/xlink", g.svgjs = "http://svgjs.dev", g.supported = !0, !g.supported) return !1;
        g.did = 1e3, g.eid = function (t) {
            return "Svgjs" + i(t) + g.did++
        }, g.create = function (t) {
            var e = r.createElementNS(this.ns, t);
            return e.setAttribute("id", this.eid(t)), e
        }, g.extend = function () {
            var t, e;
            e = (t = [].slice.call(arguments)).pop();
            for (var i = t.length - 1; 0 <= i; i--)
                if (t[i])
                    for (var a in e) t[i].prototype[a] = e[a];
            g.Set && g.Set.inherit && g.Set.inherit()
        }, g.invent = function (t) {
            var e = "function" == typeof t.create ? t.create : function () {
                this.constructor.call(this, g.create(t.create))
            };
            return t.inherit && (e.prototype = new t.inherit), t.extend && g.extend(e, t.extend), t.construct && g.extend(t.parent || g.Container, t.construct), e
        }, g.adopt = function (t) {
            return t ? t.instance ? t.instance : ((e = "svg" == t.nodeName ? t.parentNode instanceof s.SVGElement ? new g.Nested : new g.Doc : "linearGradient" == t.nodeName ? new g.Gradient("linear") : "radialGradient" == t.nodeName ? new g.Gradient("radial") : g[i(t.nodeName)] ? new (g[i(t.nodeName)]) : new g.Element(t)).type = t.nodeName, ((e.node = t).instance = e) instanceof g.Doc && e.namespace().defs(), e.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), e) : null;
            var e
        }, g.prepare = function () {
            var t = r.getElementsByTagName("body")[0],
                e = (t ? new g.Doc(t) : g.adopt(r.documentElement).nested()).size(2, 0);
            g.parser = {
                body: t || r.documentElement,
                draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
                poly: e.polyline().node,
                path: e.path().node,
                "native": g.create("svg")
            }
        }, g.parser = {
            "native": g.create("svg")
        }, r.addEventListener("DOMContentLoaded", function () {
            g.parser.draw || g.prepare()
        }, !1), g.regex = {
            numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
            hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
            rgb: /rgb\((\d+),(\d+),(\d+)\)/,
            reference: /#([a-z0-9\-_]+)/i,
            transforms: /\)\s*,?\s*/,
            whitespace: /\s/g,
            isHex: /^#[a-f0-9]{3,6}$/i,
            isRgb: /^rgb\(/,
            isCss: /[^:]+:[^;]+;?/,
            isBlank: /^(\s+)?$/,
            isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            isPercent: /^-?[\d\.]+%$/,
            isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
            delimiter: /[\s,]+/,
            hyphen: /([^e])\-/gi,
            pathLetters: /[MLHVCSQTAZ]/gi,
            isPathLetter: /[MLHVCSQTAZ]/i,
            numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
            dots: /\./g
        }, g.utils = {
            map: function (t, e) {
                for (var i = t.length, a = [], s = 0; s < i; s++) a.push(e(t[s]));
                return a
            },
            filter: function (t, e) {
                for (var i = t.length, a = [], s = 0; s < i; s++) e(t[s]) && a.push(t[s]);
                return a
            },
            filterSVGElements: function (t) {
                return this.filter(t, function (t) {
                    return t instanceof s.SVGElement
                })
            }
        }, g.defaults = {
            attrs: {
                "fill-opacity": 1,
                "stroke-opacity": 1,
                "stroke-width": 0,
                "stroke-linejoin": "miter",
                "stroke-linecap": "butt",
                fill: "#000000",
                stroke: "#000000",
                opacity: 1,
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                width: 0,
                height: 0,
                r: 0,
                rx: 0,
                ry: 0,
                offset: 0,
                "stop-opacity": 1,
                "stop-color": "#000000",
                "font-size": 16,
                "font-family": "Helvetica, Arial, sans-serif",
                "text-anchor": "start"
            }
        }, g.Color = function (t) {
            var e, i;
            this.r = 0, this.g = 0, this.b = 0, t && ("string" == typeof t ? g.regex.isRgb.test(t) ? (e = g.regex.rgb.exec(t.replace(g.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : g.regex.isHex.test(t) && (e = g.regex.hex.exec(4 == (i = t).length ? ["#", i.substring(1, 2), i.substring(1, 2), i.substring(2, 3), i.substring(2, 3), i.substring(3, 4), i.substring(3, 4)].join("") : i), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === y(t) && (this.r = t.r, this.g = t.g, this.b = t.b))
        }, g.extend(g.Color, {
            toString: function () {
                return this.toHex()
            },
            toHex: function () {
                return "#" + t(this.r) + t(this.g) + t(this.b)
            },
            toRgb: function () {
                return "rgb(" + [this.r, this.g, this.b].join() + ")"
            },
            brightness: function () {
                return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
            },
            morph: function (t) {
                return this.destination = new g.Color(t), this
            },
            at: function (t) {
                return this.destination ? (t = t < 0 ? 0 : 1 < t ? 1 : t, new g.Color({
                    r: ~~(this.r + (this.destination.r - this.r) * t),
                    g: ~~(this.g + (this.destination.g - this.g) * t),
                    b: ~~(this.b + (this.destination.b - this.b) * t)
                })) : this
            }
        }), g.Color.test = function (t) {
            return t += "", g.regex.isHex.test(t) || g.regex.isRgb.test(t)
        }, g.Color.isRgb = function (t) {
            return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
        }, g.Color.isColor = function (t) {
            return g.Color.isRgb(t) || g.Color.test(t)
        }, g.Array = function (t, e) {
            0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
        }, g.extend(g.Array, {
            toString: function () {
                return this.value.join(" ")
            },
            valueOf: function () {
                return this.value
            },
            parse: function (t) {
                return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
            }
        }), g.PointArray = function (t, e) {
            g.Array.call(this, t, e || [
                [0, 0]
            ])
        }, g.PointArray.prototype = new g.Array, g.PointArray.prototype.constructor = g.PointArray;
        for (var u = {
            M: function (t, e, i) {
                return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
            },
            L: function (t, e) {
                return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
            },
            H: function (t, e) {
                return e.x = t[0], ["H", t[0]]
            },
            V: function (t, e) {
                return e.y = t[0], ["V", t[0]]
            },
            C: function (t, e) {
                return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
            },
            Q: function (t, e) {
                return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
            },
            Z: function (t, e, i) {
                return e.x = i.x, e.y = i.y, ["Z"]
            }
        }, p = "mlhvqtcsaz".split(""), f = 0, x = p.length; f < x; ++f) u[p[f]] = function (r) {
            return function (t, e, i) {
                if ("H" == r) t[0] = t[0] + e.x;
                else if ("V" == r) t[0] = t[0] + e.y;
                else if ("A" == r) t[5] = t[5] + e.x, t[6] = t[6] + e.y;
                else
                    for (var a = 0, s = t.length; a < s; ++a) t[a] = t[a] + (a % 2 ? e.y : e.x);
                return u[r](t, e, i)
            }
        }(p[f].toUpperCase());
        g.PathArray = function (t, e) {
            g.Array.call(this, t, e || [
                ["M", 0, 0]
            ])
        }, g.PathArray.prototype = new g.Array, g.PathArray.prototype.constructor = g.PathArray, g.extend(g.PathArray, {
            toString: function () {
                return function (t) {
                    for (var e = 0, i = t.length, a = ""; e < i; e++) a += t[e][0], null != t[e][1] && (a += t[e][1], null != t[e][2] && (a += " ", a += t[e][2], null != t[e][3] && (a += " ", a += t[e][3], a += " ", a += t[e][4], null != t[e][5] && (a += " ", a += t[e][5], a += " ", a += t[e][6], null != t[e][7] && (a += " ", a += t[e][7])))));
                    return a + " "
                }(this.value)
            },
            move: function () {
                var t = this.bbox();
                return t.x, t.y, this
            },
            at: function (t) {
                if (!this.destination) return this;
                for (var e = this.value, i = this.destination.value, a = [], s = new g.PathArray, r = 0, o = e.length; r < o; r++) {
                    a[r] = [e[r][0]];
                    for (var n = 1, l = e[r].length; n < l; n++) a[r][n] = e[r][n] + (i[r][n] - e[r][n]) * t;
                    "A" === a[r][0] && (a[r][4] = +(0 != a[r][4]), a[r][5] = +(0 != a[r][5]))
                }
                return s.value = a, s
            },
            parse: function (t) {
                if (t instanceof g.PathArray) return t.valueOf();
                var e, i = {
                    M: 2,
                    L: 2,
                    H: 1,
                    V: 1,
                    C: 6,
                    S: 4,
                    Q: 4,
                    T: 2,
                    A: 7,
                    Z: 0
                };
                t = "string" == typeof t ? t.replace(g.regex.numbersWithDots, l).replace(g.regex.pathLetters, " $& ").replace(g.regex.hyphen, "$1 -").trim().split(g.regex.delimiter) : t.reduce(function (t, e) {
                    return [].concat.call(t, e)
                }, []);
                for (var a = [], s = new g.Point, r = new g.Point, o = 0, n = t.length; g.regex.isPathLetter.test(t[o]) ? (e = t[o], ++o) : "M" == e ? e = "L" : "m" == e && (e = "l"), a.push(u[e].call(null, t.slice(o, o += i[e.toUpperCase()]).map(parseFloat), s, r)), o < n;);
                return a
            },
            bbox: function () {
                return g.parser.draw || g.prepare(), g.parser.path.setAttribute("d", this.toString()), g.parser.path.getBBox()
            }
        }), g.Number = g.invent({
            create: function (t, e) {
                this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(g.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof g.Number && (this.value = t.valueOf(), this.unit = t.unit)
            },
            extend: {
                toString: function () {
                    return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
                },
                toJSON: function () {
                    return this.toString()
                },
                valueOf: function () {
                    return this.value
                },
                plus: function (t) {
                    return t = new g.Number(t), new g.Number(this + t, this.unit || t.unit)
                },
                minus: function (t) {
                    return t = new g.Number(t), new g.Number(this - t, this.unit || t.unit)
                },
                times: function (t) {
                    return t = new g.Number(t), new g.Number(this * t, this.unit || t.unit)
                },
                divide: function (t) {
                    return t = new g.Number(t), new g.Number(this / t, this.unit || t.unit)
                },
                to: function (t) {
                    var e = new g.Number(this);
                    return "string" == typeof t && (e.unit = t), e
                },
                morph: function (t) {
                    return this.destination = new g.Number(t), t.relative && (this.destination.value += this.value), this
                },
                at: function (t) {
                    return this.destination ? new g.Number(this.destination).minus(this).times(t).plus(this) : this
                }
            }
        }), g.Element = g.invent({
            create: function (t) {
                this._stroke = g.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, (this.node.instance = this)._stroke = t.getAttribute("stroke") || this._stroke)
            },
            extend: {
                x: function (t) {
                    return this.attr("x", t)
                },
                y: function (t) {
                    return this.attr("y", t)
                },
                cx: function (t) {
                    return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                },
                cy: function (t) {
                    return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                },
                move: function (t, e) {
                    return this.x(t).y(e)
                },
                center: function (t, e) {
                    return this.cx(t).cy(e)
                },
                width: function (t) {
                    return this.attr("width", t)
                },
                height: function (t) {
                    return this.attr("height", t)
                },
                size: function (t, e) {
                    var i = o(this, t, e);
                    return this.width(new g.Number(i.width)).height(new g.Number(i.height))
                },
                clone: function (t) {
                    this.writeDataToDom();
                    var e = c(this.node.cloneNode(!0));
                    return t ? t.add(e) : this.after(e), e
                },
                remove: function () {
                    return this.parent() && this.parent().removeElement(this), this
                },
                replace: function (t) {
                    return this.after(t).remove(), t
                },
                addTo: function (t) {
                    return t.put(this)
                },
                putIn: function (t) {
                    return t.add(this)
                },
                id: function (t) {
                    return this.attr("id", t)
                },
                show: function () {
                    return this.style("display", "")
                },
                hide: function () {
                    return this.style("display", "none")
                },
                visible: function () {
                    return "none" != this.style("display")
                },
                toString: function () {
                    return this.attr("id")
                },
                classes: function () {
                    var t = this.attr("class");
                    return null == t ? [] : t.trim().split(g.regex.delimiter)
                },
                hasClass: function (t) {
                    return -1 != this.classes().indexOf(t)
                },
                addClass: function (t) {
                    if (!this.hasClass(t)) {
                        var e = this.classes();
                        e.push(t), this.attr("class", e.join(" "))
                    }
                    return this
                },
                removeClass: function (e) {
                    return this.hasClass(e) && this.attr("class", this.classes().filter(function (t) {
                        return t != e
                    }).join(" ")), this
                },
                toggleClass: function (t) {
                    return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
                },
                reference: function (t) {
                    return g.get(this.attr(t))
                },
                parent: function (t) {
                    var e = this;
                    if (!e.node.parentNode) return null;
                    if (e = g.adopt(e.node.parentNode), !t) return e;
                    for (; e && e.node instanceof s.SVGElement;) {
                        if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
                        if (!e.node.parentNode || "#document" == e.node.parentNode.nodeName) return null;
                        e = g.adopt(e.node.parentNode)
                    }
                },
                doc: function () {
                    return this instanceof g.Doc ? this : this.parent(g.Doc)
                },
                parents: function (t) {
                    var e = [],
                        i = this;
                    do {
                        if (!(i = i.parent(t)) || !i.node) break;
                        e.push(i)
                    } while (i.parent);
                    return e
                },
                matches: function (t) {
                    return e = this.node, i = t, (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, i);
                    var e, i
                },
                "native": function () {
                    return this.node
                },
                svg: function (t) {
                    var e = r.createElement("svg");
                    if (!(t && this instanceof g.Parent)) return e.appendChild(t = r.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                    e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                    for (var i = 0, a = e.firstChild.childNodes.length; i < a; i++) this.node.appendChild(e.firstChild.firstChild);
                    return this
                },
                writeDataToDom: function () {
                    return (this.each || this.lines) && (this.each ? this : this.lines()).each(function () {
                        this.writeDataToDom()
                    }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this
                },
                setData: function (t) {
                    return this.dom = t, this
                },
                is: function (t) {
                    return this instanceof t
                }
            }
        }), g.easing = {
            "-": function (t) {
                return t
            },
            "<>": function (t) {
                return -Math.cos(t * Math.PI) / 2 + .5
            },
            ">": function (t) {
                return Math.sin(t * Math.PI / 2)
            },
            "<": function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }
        }, g.morph = function (i) {
            return function (t, e) {
                return new g.MorphObj(t, e).at(i)
            }
        }, g.Situation = g.invent({
            create: function (t) {
                this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new g.Number(t.duration).valueOf(), this.delay = new g.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {}
            }
        }), g.FX = g.invent({
            create: function (t) {
                this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1
            },
            extend: {
                animate: function (t, e, i) {
                    "object" === y(t) && (e = t.ease, i = t.delay, t = t.duration);
                    var a = new g.Situation({
                        duration: t || 1e3,
                        delay: i || 0,
                        ease: g.easing[e || "-"] || e
                    });
                    return this.queue(a), this
                },
                target: function (t) {
                    return t && t instanceof g.Element ? (this._target = t, this) : this._target
                },
                timeToAbsPos: function (t) {
                    return (t - this.situation.start) / (this.situation.duration / this._speed)
                },
                absPosToTime: function (t) {
                    return this.situation.duration / this._speed * t + this.situation.start
                },
                startAnimFrame: function () {
                    this.stopAnimFrame(), this.animationFrame = s.requestAnimationFrame(function () {
                        this.step()
                    }.bind(this))
                },
                stopAnimFrame: function () {
                    s.cancelAnimationFrame(this.animationFrame)
                },
                start: function () {
                    return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
                },
                startCurrent: function () {
                    return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
                },
                queue: function (t) {
                    return ("function" == typeof t || t instanceof g.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this
                },
                dequeue: function () {
                    return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof g.Situation ? this.start() : this.situation.call(this)), this
                },
                initAnimations: function () {
                    var t, e = this.situation;
                    if (e.init) return this;
                    for (var i in e.animations) {
                        t = this.target()[i](), Array.isArray(t) || (t = [t]), Array.isArray(e.animations[i]) || (e.animations[i] = [e.animations[i]]);
                        for (var a = t.length; a--;) e.animations[i][a] instanceof g.Number && (t[a] = new g.Number(t[a])), e.animations[i][a] = t[a].morph(e.animations[i][a])
                    }
                    for (var i in e.attrs) e.attrs[i] = new g.MorphObj(this.target().attr(i), e.attrs[i]);
                    for (var i in e.styles) e.styles[i] = new g.MorphObj(this.target().style(i), e.styles[i]);
                    return e.initialTransformation = this.target().matrixify(), e.init = !0, this
                },
                clearQueue: function () {
                    return this.situations = [], this
                },
                clearCurrent: function () {
                    return this.situation = null, this
                },
                stop: function (t, e) {
                    var i = this.active;
                    return this.active = !1, e && this.clearQueue(),
                        t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent()
                },
                after: function (i) {
                    var a = this.last();
                    return this.target().on("finished.fx", function r(e) {
                        e.detail.situation == a && (i.call(this, a), this.off("finished.fx", r))
                    }), this._callStart()
                },
                during: function (e) {
                    var i = this.last(),
                        t = function (t) {
                            t.detail.situation == i && e.call(this, t.detail.pos, g.morph(t.detail.pos), t.detail.eased, i)
                        };
                    return this.target().off("during.fx", t).on("during.fx", t), this.after(function () {
                        this.off("during.fx", t)
                    }), this._callStart()
                },
                afterAll: function (t) {
                    var e = function e() {
                        t.call(this), this.off("allfinished.fx", e)
                    };
                    return this.target().off("allfinished.fx", e).on("allfinished.fx", e), this._callStart()
                },
                last: function () {
                    return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
                },
                add: function (t, e, i) {
                    return this.last()[i || "animations"][t] = e, this._callStart()
                },
                step: function (t) {
                    var e, i, a;
                    t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e = Math.max(this.absPos, 0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, a = this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, a = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                    var s = this.situation.ease(this.pos);
                    for (var r in this.situation.once) r > this.lastPos && r <= s && (this.situation.once[r].call(this.target(), this.pos, s), delete this.situation.once[r]);
                    return this.active && this.target().fire("during", {
                        pos: this.pos,
                        eased: s,
                        fx: this,
                        situation: this.situation
                    }), this.situation && (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
                        fx: this,
                        situation: this.situation
                    }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s), this
                },
                eachAt: function () {
                    var t, e = this,
                        i = this.target(),
                        a = this.situation;
                    for (var s in a.animations) t = [].concat(a.animations[s]).map(function (t) {
                        return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t
                    }), i[s].apply(i, t);
                    for (var s in a.attrs) t = [s].concat(a.attrs[s]).map(function (t) {
                        return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t
                    }), i.attr.apply(i, t);
                    for (var s in a.styles) t = [s].concat(a.styles[s]).map(function (t) {
                        return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t
                    }), i.style.apply(i, t);
                    if (a.transforms.length) {
                        t = a.initialTransformation, s = 0;
                        for (var r = a.transforms.length; s < r; s++) {
                            var o = a.transforms[s];
                            o instanceof g.Matrix ? t = o.relative ? t.multiply((new g.Matrix).morph(o).at(a.ease(this.pos))) : t.morph(o).at(a.ease(this.pos)) : (o.relative || o.undo(t.extract()), t = t.multiply(o.at(a.ease(this.pos))))
                        }
                        i.matrix(t)
                    }
                    return this
                },
                once: function (t, e, i) {
                    var a = this.last();
                    return i || (t = a.ease(t)), a.once[t] = e, this
                },
                _callStart: function () {
                    return setTimeout(function () {
                        this.start()
                    }.bind(this), 0), this
                }
            },
            parent: g.Element,
            construct: {
                animate: function (t, e, i) {
                    return (this.fx || (this.fx = new g.FX(this))).animate(t, e, i)
                },
                delay: function (t) {
                    return (this.fx || (this.fx = new g.FX(this))).delay(t)
                },
                stop: function (t, e) {
                    return this.fx && this.fx.stop(t, e), this
                },
                finish: function () {
                    return this.fx && this.fx.finish(), this
                }
            }
        }), g.MorphObj = g.invent({
            create: function (t, e) {
                return g.Color.isColor(e) ? new g.Color(t).morph(e) : g.regex.delimiter.test(t) ? g.regex.pathLetters.test(t) ? new g.PathArray(t).morph(e) : new g.Array(t).morph(e) : g.regex.numberAndUnit.test(e) ? new g.Number(t).morph(e) : (this.value = t, void (this.destination = e))
            },
            extend: {
                at: function (t, e) {
                    return e < 1 ? this.value : this.destination
                },
                valueOf: function () {
                    return this.value
                }
            }
        }), g.extend(g.FX, {
            attr: function (t, e) {
                if ("object" === y(t))
                    for (var i in t) this.attr(i, t[i]);
                else this.add(t, e, "attrs");
                return this
            },
            plot: function (t, e, i, a) {
                return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add("plot", new (this.target().morphArray)(t))
            }
        }), g.Box = g.invent({
            create: function (t, e, i, a) {
                if (!("object" !== y(t) || t instanceof g.Element)) return g.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                4 == arguments.length && (this.x = t, this.y = e, this.width = i, this.height = a), d(this)
            }
        }), g.BBox = g.invent({
            create: function (t) {
                if (g.Box.apply(this, [].slice.call(arguments)), t instanceof g.Element) {
                    var e;
                    try {
                        if (!r.documentElement.contains) {
                            for (var i = t.node; i.parentNode;) i = i.parentNode;
                            if (i != r) throw new Error("Element not in the dom")
                        }
                        e = t.node.getBBox()
                    } catch (r) {
                        if (t instanceof g.Shape) {
                            g.parser.draw || g.prepare();
                            var a = t.clone(g.parser.draw.instance).show();
                            e = a.node.getBBox(), a.remove()
                        } else e = {
                            x: t.node.clientLeft,
                            y: t.node.clientTop,
                            width: t.node.clientWidth,
                            height: t.node.clientHeight
                        }
                    }
                    g.Box.call(this, e)
                }
            },
            inherit: g.Box,
            parent: g.Element,
            construct: {
                bbox: function () {
                    return new g.BBox(this)
                }
            }
        }), g.BBox.prototype.constructor = g.BBox, g.Matrix = g.invent({
            create: function (t) {
                var e = h([1, 0, 0, 1, 0, 0]);
                t = null === t ? e : t instanceof g.Element ? t.matrixify() : "string" == typeof t ? h(t.split(g.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? h([].slice.call(arguments)) : Array.isArray(t) ? h(t) : t && "object" === y(t) ? t : e;
                for (var i = m.length - 1; 0 <= i; --i) this[m[i]] = null != t[m[i]] ? t[m[i]] : e[m[i]]
            },
            extend: {
                extract: function () {
                    var t = n(this, 0, 1);
                    n(this, 1, 0);
                    var e = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
                    return {
                        x: this.e,
                        y: this.f,
                        transformedX: (this.e * Math.cos(e * Math.PI / 180) + this.f * Math.sin(e * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                        transformedY: (this.f * Math.cos(e * Math.PI / 180) + this.e * Math.sin(-e * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                        rotation: e,
                        a: this.a,
                        b: this.b,
                        c: this.c,
                        d: this.d,
                        e: this.e,
                        f: this.f,
                        matrix: new g.Matrix(this)
                    }
                },
                clone: function () {
                    return new g.Matrix(this)
                },
                morph: function (t) {
                    return this.destination = new g.Matrix(t), this
                },
                multiply: function (t) {
                    return new g.Matrix(this["native"]().multiply((e = t, e instanceof g.Matrix || (e = new g.Matrix(e)), e)["native"]()));
                    var e
                },
                inverse: function () {
                    return new g.Matrix(this["native"]().inverse())
                },
                translate: function (t, e) {
                    return new g.Matrix(this["native"]().translate(t || 0, e || 0))
                },
                "native": function () {
                    for (var t = g.parser["native"].createSVGMatrix(), e = m.length - 1; 0 <= e; e--) t[m[e]] = this[m[e]];
                    return t
                },
                toString: function () {
                    return "matrix(" + e(this.a) + "," + e(this.b) + "," + e(this.c) + "," + e(this.d) + "," + e(this.e) + "," + e(this.f) + ")"
                }
            },
            parent: g.Element,
            construct: {
                ctm: function () {
                    return new g.Matrix(this.node.getCTM())
                },
                screenCTM: function () {
                    if (this instanceof g.Nested) {
                        var t = this.rect(1, 1),
                            e = t.node.getScreenCTM();
                        return t.remove(), new g.Matrix(e)
                    }
                    return new g.Matrix(this.node.getScreenCTM())
                }
            }
        }), g.Point = g.invent({
            create: function (t, e) {
                var i;
                i = Array.isArray(t) ? {
                    x: t[0],
                    y: t[1]
                } : "object" === y(t) ? {
                    x: t.x,
                    y: t.y
                } : null != t ? {
                    x: t,
                    y: null != e ? e : t
                } : {
                    x: 0,
                    y: 0
                }, this.x = i.x, this.y = i.y
            },
            extend: {
                clone: function () {
                    return new g.Point(this)
                },
                morph: function (t, e) {
                    return this.destination = new g.Point(t, e), this
                }
            }
        }), g.extend(g.Element, {
            point: function (t, e) {
                return new g.Point(t, e).transform(this.screenCTM().inverse())
            }
        }), g.extend(g.Element, {
            attr: function (t, e, i) {
                if (null == t) {
                    for (t = {}, i = (e = this.node.attributes).length - 1; 0 <= i; i--) t[e[i].nodeName] = g.regex.isNumber.test(e[i].nodeValue) ? parseFloat(e[i].nodeValue) : e[i].nodeValue;
                    return t
                }
                if ("object" === y(t))
                    for (var a in t) this.attr(a, t[a]);
                else if (null === e) this.node.removeAttribute(t);
                else {
                    if (null == e) return null == (e = this.node.getAttribute(t)) ? g.defaults.attrs[t] : g.regex.isNumber.test(e) ? parseFloat(e) : e;
                    "stroke-width" == t ? this.attr("stroke", 0 < parseFloat(e) ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (g.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof g.Image && (e = this.doc().defs().pattern(0, 0, function () {
                        this.add(e)
                    }))), "number" == typeof e ? e = new g.Number(e) : g.Color.isColor(e) ? e = new g.Color(e) : Array.isArray(e) && (e = new g.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
                }
                return this
            }
        }), g.extend(g.Element, {
            transform: function (t, e) {
                var i;
                return "object" !== y(t) ? (i = new g.Matrix(this).extract(), "string" == typeof t ? i[t] : i) : (i = new g.Matrix(this), e = !!e || !!t.relative, null != t.a && (i = e ? i.multiply(new g.Matrix(t)) : new g.Matrix(t)), this.attr("transform", i))
            }
        }), g.extend(g.Element, {
            untransform: function () {
                return this.attr("transform", null)
            },
            matrixify: function () {
                return (this.attr("transform") || "").split(g.regex.transforms).slice(0, -1).map(function (t) {
                    var e = t.trim().split("(");
                    return [e[0], e[1].split(g.regex.delimiter).map(function (t) {
                        return parseFloat(t)
                    })]
                }).reduce(function (t, e) {
                    return "matrix" == e[0] ? t.multiply(h(e[1])) : t[e[0]].apply(t, e[1])
                }, new g.Matrix)
            },
            toParent: function (t) {
                if (this == t) return this;
                var e = this.screenCTM(),
                    i = t.screenCTM().inverse();
                return this.addTo(t).untransform().transform(i.multiply(e)), this
            },
            toDoc: function () {
                return this.toParent(this.doc())
            }
        }), g.Transformation = g.invent({
            create: function (t, e) {
                if (1 < arguments.length && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments));
                if (Array.isArray(t))
                    for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[i];
                else if (t && "object" === y(t))
                    for (i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[this.arguments[i]];
                !(this.inversed = !1) === e && (this.inversed = !0)
            }
        }), g.Translate = g.invent({
            parent: g.Matrix,
            inherit: g.Transformation,
            create: function (t, e) {
                this.constructor.apply(this, [].slice.call(arguments))
            },
            extend: {
                arguments: ["transformedX", "transformedY"],
                method: "translate"
            }
        }), g.extend(g.Element, {
            style: function (t, e) {
                if (0 == arguments.length) return this.node.style.cssText || "";
                if (arguments.length < 2)
                    if ("object" === y(t))
                        for (var i in t) this.style(i, t[i]);
                    else {
                        if (!g.regex.isCss.test(t)) return this.node.style[a(t)];
                        for (t = t.split(/\s*;\s*/).filter(function (t) {
                            return !!t
                        }).map(function (t) {
                            return t.split(/\s*:\s*/)
                        }); e = t.pop();) this.style(e[0], e[1])
                    }
                else this.node.style[a(t)] = null === e || g.regex.isBlank.test(e) ? "" : e;
                return this
            }
        }), g.Parent = g.invent({
            create: function (t) {
                this.constructor.call(this, t)
            },
            inherit: g.Element,
            extend: {
                children: function () {
                    return g.utils.map(g.utils.filterSVGElements(this.node.childNodes), function (t) {
                        return g.adopt(t)
                    })
                },
                add: function (t, e) {
                    return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
                },
                put: function (t, e) {
                    return this.add(t, e), t
                },
                has: function (t) {
                    return 0 <= this.index(t)
                },
                index: function (t) {
                    return [].slice.call(this.node.childNodes).indexOf(t.node)
                },
                get: function (t) {
                    return g.adopt(this.node.childNodes[t])
                },
                first: function () {
                    return this.get(0)
                },
                last: function () {
                    return this.get(this.node.childNodes.length - 1)
                },
                each: function (t, e) {
                    for (var i = this.children(), a = 0, s = i.length; a < s; a++) i[a] instanceof g.Element && t.apply(i[a], [a, i]), e && i[a] instanceof g.Container && i[a].each(t, e);
                    return this
                },
                removeElement: function (t) {
                    return this.node.removeChild(t.node), this
                },
                clear: function () {
                    for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                    return delete this._defs, this
                },
                defs: function () {
                    return this.doc().defs()
                }
            }
        }), g.extend(g.Parent, {
            ungroup: function (t, e) {
                return 0 === e || this instanceof g.Defs || this.node == g.parser.draw || (t = t || (this instanceof g.Doc ? this : this.parent(g.Parent)), e = e || 1 / 0, this.each(function () {
                    return this instanceof g.Defs ? this : this instanceof g.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
                }), this.node.firstChild || this.remove()), this
            },
            flatten: function (t, e) {
                return this.ungroup(t, e)
            }
        }), g.Container = g.invent({
            create: function (t) {
                this.constructor.call(this, t)
            },
            inherit: g.Parent
        }), g.ViewBox = g.invent({
            parent: g.Container,
            construct: {}
        }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function (e) {
            g.Element.prototype[e] = function (t) {
                return g.on(this.node, e, t), this
            }
        }), g.listeners = [], g.handlerMap = [], g.listenerId = 0, g.on = function (t, e, i, a, s) {
            var r = i.bind(a || t.instance || t),
                o = (g.handlerMap.indexOf(t) + 1 || g.handlerMap.push(t)) - 1,
                n = e.split(".")[0],
                l = e.split(".")[1] || "*";
            g.listeners[o] = g.listeners[o] || {}, g.listeners[o][n] = g.listeners[o][n] || {}, g.listeners[o][n][l] = g.listeners[o][n][l] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++g.listenerId), g.listeners[o][n][l][i._svgjsListenerId] = r, t.addEventListener(n, r, s || {
                passive: !0
            })
        }, g.off = function (t, e, i) {
            var a = g.handlerMap.indexOf(t),
                s = e && e.split(".")[0],
                r = e && e.split(".")[1],
                o = "";
            if (-1 != a)
                if (i) {
                    if ("function" == typeof i && (i = i._svgjsListenerId), !i) return;
                    g.listeners[a][s] && g.listeners[a][s][r || "*"] && (t.removeEventListener(s, g.listeners[a][s][r || "*"][i], !1), delete g.listeners[a][s][r || "*"][i])
                } else if (r && s) {
                    if (g.listeners[a][s] && g.listeners[a][s][r]) {
                        for (var n in g.listeners[a][s][r]) g.off(t, [s, r].join("."), n);
                        delete g.listeners[a][s][r]
                    }
                } else if (r)
                    for (var l in g.listeners[a])
                        for (var o in g.listeners[a][l]) r === o && g.off(t, [l, r].join("."));
                else if (s) {
                    if (g.listeners[a][s]) {
                        for (var o in g.listeners[a][s]) g.off(t, [s, o].join("."));
                        delete g.listeners[a][s]
                    }
                } else {
                    for (var l in g.listeners[a]) g.off(t, l);
                    delete g.listeners[a], delete g.handlerMap[a]
                }
        }, g.extend(g.Element, {
            on: function (t, e, i, a) {
                return g.on(this.node, t, e, i, a), this
            },
            off: function (t, e) {
                return g.off(this.node, t, e), this
            },
            fire: function (t, e) {
                return t instanceof s.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(t = new g.CustomEvent(t, {
                    detail: e,
                    cancelable: !0
                })), this._event = t, this
            },
            event: function () {
                return this._event
            }
        }), g.Defs = g.invent({
            create: "defs",
            inherit: g.Container
        }), g.G = g.invent({
            create: "g",
            inherit: g.Container,
            extend: {
                x: function (t) {
                    return null == t ? this.transform("x") : this.transform({
                        x: t - this.x()
                    }, !0)
                }
            },
            construct: {
                group: function () {
                    return this.put(new g.G)
                }
            }
        }), g.Doc = g.invent({
            create: function (t) {
                t && ("svg" == (t = "string" == typeof t ? r.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, g.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs())
            },
            inherit: g.Container,
            extend: {
                namespace: function () {
                    return this.attr({
                        xmlns: g.ns,
                        version: "1.1"
                    }).attr("xmlns:xlink", g.xlink, g.xmlns).attr("xmlns:svgjs", g.svgjs, g.xmlns)
                },
                defs: function () {
                    var t;
                    return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = g.adopt(t) : this._defs = new g.Defs, this.node.appendChild(this._defs.node)), this._defs
                },
                parent: function () {
                    return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
                },
                remove: function () {
                    return this.parent() && this.parent().removeChild(this.node), this
                },
                clear: function () {
                    for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                    return delete this._defs, g.parser.draw && !g.parser.draw.parentNode && this.node.appendChild(g.parser.draw), this
                },
                clone: function (t) {
                    this.writeDataToDom();
                    var e = this.node,
                        i = c(e.cloneNode(!0));
                    return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
                }
            }
        }), g.extend(g.Element, {}), g.Gradient = g.invent({
            create: function (t) {
                this.constructor.call(this, g.create(t + "Gradient")), this.type = t
            },
            inherit: g.Container,
            extend: {
                at: function (t, e, i) {
                    return this.put(new g.Stop).update(t, e, i)
                },
                update: function (t) {
                    return this.clear(), "function" == typeof t && t.call(this, this), this
                },
                fill: function () {
                    return "url(#" + this.id() + ")"
                },
                toString: function () {
                    return this.fill()
                },
                attr: function (t, e, i) {
                    return "transform" == t && (t = "gradientTransform"), g.Container.prototype.attr.call(this, t, e, i)
                }
            },
            construct: {
                gradient: function (t, e) {
                    return this.defs().gradient(t, e)
                }
            }
        }), g.extend(g.Gradient, g.FX, {
            from: function (t, e) {
                return "radial" == (this._target || this).type ? this.attr({
                    fx: new g.Number(t),
                    fy: new g.Number(e)
                }) : this.attr({
                    x1: new g.Number(t),
                    y1: new g.Number(e)
                })
            },
            to: function (t, e) {
                return "radial" == (this._target || this).type ? this.attr({
                    cx: new g.Number(t),
                    cy: new g.Number(e)
                }) : this.attr({
                    x2: new g.Number(t),
                    y2: new g.Number(e)
                })
            }
        }), g.extend(g.Defs, {
            gradient: function (t, e) {
                return this.put(new g.Gradient(t)).update(e)
            }
        }), g.Stop = g.invent({
            create: "stop",
            inherit: g.Element,
            extend: {
                update: function (t, e, i) {
                    return ("number" == typeof t || t instanceof g.Number) && (t = {
                        offset: arguments[0],
                        color: e,
                        opacity: i
                    }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new g.Number(t.offset)), this
                }
            }
        }), g.Pattern = g.invent({
            create: "pattern",
            inherit: g.Container,
            extend: {
                fill: function () {
                    return "url(#" + this.id() + ")"
                },
                update: function (t) {
                    return this.clear(), "function" == typeof t && t.call(this, this), this
                },
                toString: function () {
                    return this.fill()
                },
                attr: function (t, e, i) {
                    return "transform" == t && (t = "patternTransform"), g.Container.prototype.attr.call(this, t, e, i)
                }
            },
            construct: {
                pattern: function (t, e, i) {
                    return this.defs().pattern(t, e, i)
                }
            }
        }), g.extend(g.Defs, {
            pattern: function (t, e, i) {
                return this.put(new g.Pattern).update(i).attr({
                    x: 0,
                    y: 0,
                    width: t,
                    height: e,
                    patternUnits: "userSpaceOnUse"
                })
            }
        }), g.Shape = g.invent({
            create: function (t) {
                this.constructor.call(this, t)
            },
            inherit: g.Element
        }), g.Symbol = g.invent({
            create: "symbol",
            inherit: g.Container,
            construct: {
                symbol: function () {
                    return this.put(new g.Symbol)
                }
            }
        }), g.Use = g.invent({
            create: "use",
            inherit: g.Shape,
            extend: {
                element: function (t, e) {
                    return this.attr("href", (e || "") + "#" + t, g.xlink)
                }
            },
            construct: {
                use: function (t, e) {
                    return this.put(new g.Use).element(t, e)
                }
            }
        }), g.Rect = g.invent({
            create: "rect",
            inherit: g.Shape,
            construct: {
                rect: function (t, e) {
                    return this.put(new g.Rect).size(t, e)
                }
            }
        }), g.Circle = g.invent({
            create: "circle",
            inherit: g.Shape,
            construct: {
                circle: function (t) {
                    return this.put(new g.Circle).rx(new g.Number(t).divide(2)).move(0, 0)
                }
            }
        }), g.extend(g.Circle, g.FX, {
            rx: function (t) {
                return this.attr("r", t)
            },
            ry: function (t) {
                return this.rx(t)
            }
        }), g.Ellipse = g.invent({
            create: "ellipse",
            inherit: g.Shape,
            construct: {
                ellipse: function (t, e) {
                    return this.put(new g.Ellipse).size(t, e).move(0, 0)
                }
            }
        }), g.extend(g.Ellipse, g.Rect, g.FX, {
            rx: function (t) {
                return this.attr("rx", t)
            },
            ry: function (t) {
                return this.attr("ry", t)
            }
        }), g.extend(g.Circle, g.Ellipse, {
            x: function (t) {
                return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
            },
            y: function (t) {
                return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
            },
            cx: function (t) {
                return null == t ? this.attr("cx") : this.attr("cx", t)
            },
            cy: function (t) {
                return null == t ? this.attr("cy") : this.attr("cy", t)
            },
            width: function (t) {
                return null == t ? 2 * this.rx() : this.rx(new g.Number(t).divide(2))
            },
            height: function (t) {
                return null == t ? 2 * this.ry() : this.ry(new g.Number(t).divide(2))
            },
            size: function (t, e) {
                var i = o(this, t, e);
                return this.rx(new g.Number(i.width).divide(2)).ry(new g.Number(i.height).divide(2))
            }
        }), g.Line = g.invent({
            create: "line",
            inherit: g.Shape,
            extend: {
                array: function () {
                    return new g.PointArray([
                        [this.attr("x1"), this.attr("y1")],
                        [this.attr("x2"), this.attr("y2")]
                    ])
                },
                plot: function (t, e, i, a) {
                    return null == t ? this.array() : (t = void 0 !== e ? {
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: a
                    } : new g.PointArray(t).toLine(), this.attr(t))
                },
                move: function (t, e) {
                    return this.attr(this.array().move(t, e).toLine())
                },
                size: function (t, e) {
                    var i = o(this, t, e);
                    return this.attr(this.array().size(i.width, i.height).toLine())
                }
            },
            construct: {
                line: function (t, e, i, a) {
                    return g.Line.prototype.plot.apply(this.put(new g.Line), null != t ? [t, e, i, a] : [0, 0, 0, 0])
                }
            }
        }), g.Polyline = g.invent({
            create: "polyline",
            inherit: g.Shape,
            construct: {
                polyline: function (t) {
                    return this.put(new g.Polyline).plot(t || new g.PointArray)
                }
            }
        }), g.Polygon = g.invent({
            create: "polygon",
            inherit: g.Shape,
            construct: {
                polygon: function (t) {
                    return this.put(new g.Polygon).plot(t || new g.PointArray)
                }
            }
        }), g.extend(g.Polyline, g.Polygon, {
            array: function () {
                return this._array || (this._array = new g.PointArray(this.attr("points")))
            },
            plot: function (t) {
                return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new g.PointArray(t))
            },
            clear: function () {
                return delete this._array, this
            },
            move: function (t, e) {
                return this.attr("points", this.array().move(t, e))
            },
            size: function (t, e) {
                var i = o(this, t, e);
                return this.attr("points", this.array().size(i.width, i.height))
            }
        }), g.extend(g.Line, g.Polyline, g.Polygon, {
            morphArray: g.PointArray,
            x: function (t) {
                return null == t ? this.bbox().x : this.move(t, this.bbox().y)
            },
            y: function (t) {
                return null == t ? this.bbox().y : this.move(this.bbox().x, t)
            },
            width: function (t) {
                var e = this.bbox();
                return null == t ? e.width : this.size(t, e.height)
            },
            height: function (t) {
                var e = this.bbox();
                return null == t ? e.height : this.size(e.width, t)
            }
        }), g.Path = g.invent({
            create: "path",
            inherit: g.Shape,
            extend: {
                morphArray: g.PathArray,
                array: function () {
                    return this._array || (this._array = new g.PathArray(this.attr("d")))
                },
                plot: function (t) {
                    return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new g.PathArray(t))
                },
                clear: function () {
                    return delete this._array, this
                }
            },
            construct: {
                path: function (t) {
                    return this.put(new g.Path).plot(t || new g.PathArray)
                }
            }
        }), g.Image = g.invent({
            create: "image",
            inherit: g.Shape,
            extend: {
                load: function (e) {
                    if (!e) return this;
                    var i = this,
                        a = new s.Image;
                    return g.on(a, "load", function () {
                        g.off(a);
                        var t = i.parent(g.Pattern);
                        null !== t && (0 == i.width() && 0 == i.height() && i.size(a.width, a.height), t && 0 == t.width() && 0 == t.height() && t.size(i.width(), i.height()), "function" == typeof i._loaded && i._loaded.call(i, {
                            width: a.width,
                            height: a.height,
                            ratio: a.width / a.height,
                            url: e
                        }))
                    }), g.on(a, "error", function (t) {
                        g.off(a), "function" == typeof i._error && i._error.call(i, t)
                    }), this.attr("href", a.src = this.src = e, g.xlink)
                },
                loaded: function (t) {
                    return this._loaded = t, this
                },
                error: function (t) {
                    return this._error = t, this
                }
            },
            construct: {
                image: function (t, e, i) {
                    return this.put(new g.Image).load(t).size(e || 0, i || e || 0)
                }
            }
        }), g.Text = g.invent({
            create: function () {
                this.constructor.call(this, g.create("text")), this.dom.leading = new g.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", g.defaults.attrs["font-family"])
            },
            inherit: g.Shape,
            extend: {
                x: function (t) {
                    return null == t ? this.attr("x") : this.attr("x", t)
                },
                text: function (t) {
                    if (void 0 === t) {
                        t = "";
                        for (var e = this.node.childNodes, i = 0, a = e.length; i < a; ++i) 0 != i && 3 != e[i].nodeType && 1 == g.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent;
                        return t
                    }
                    if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
                    else {
                        i = 0;
                        for (var s = (t = t.split("\n")).length; i < s; i++) this.tspan(t[i]).newLine()
                    }
                    return this.build(!1).rebuild()
                },
                size: function (t) {
                    return this.attr("font-size", t).rebuild()
                },
                leading: function (t) {
                    return null == t ? this.dom.leading : (this.dom.leading = new g.Number(t), this.rebuild())
                },
                lines: function () {
                    var t = (this.textPath && this.textPath() || this).node,
                        e = g.utils.map(g.utils.filterSVGElements(t.childNodes), function (t) {
                            return g.adopt(t)
                        });
                    return new g.Set(e)
                },
                rebuild: function (t) {
                    if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
                        var e = this,
                            i = 0,
                            a = this.dom.leading * new g.Number(this.attr("font-size"));
                        this.lines().each(function () {
                            this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += a : (this.attr("dy", a + i), i = 0))
                        }), this.fire("rebuild")
                    }
                    return this
                },
                build: function (t) {
                    return this._build = !!t, this
                },
                setData: function (t) {
                    return this.dom = t, this.dom.leading = new g.Number(t.leading || 1.3), this
                }
            },
            construct: {
                text: function (t) {
                    return this.put(new g.Text).text(t)
                },
                plain: function (t) {
                    return this.put(new g.Text).plain(t)
                }
            }
        }), g.Tspan = g.invent({
            create: "tspan",
            inherit: g.Shape,
            extend: {
                text: function (t) {
                    return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this)
                },
                dx: function (t) {
                    return this.attr("dx", t)
                },
                dy: function (t) {
                    return this.attr("dy", t)
                },
                newLine: function () {
                    var t = this.parent(g.Text);
                    return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
                }
            }
        }), g.extend(g.Text, g.Tspan, {
            plain: function (t) {
                return !1 === this._build && this.clear(), this.node.appendChild(r.createTextNode(t)), this
            },
            tspan: function (t) {
                var e = (this.textPath && this.textPath() || this).node,
                    i = new g.Tspan;
                return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t)
            },
            clear: function () {
                for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
                return this
            },
            length: function () {
                return this.node.getComputedTextLength()
            }
        }), g.TextPath = g.invent({
            create: "textPath",
            inherit: g.Parent,
            parent: g.Text,
            construct: {
                morphArray: g.PathArray,
                array: function () {
                    var t = this.track();
                    return t ? t.array() : null
                },
                plot: function (t) {
                    var e = this.track(),
                        i = null;
                    return e && (i = e.plot(t)), null == t ? i : this
                },
                track: function () {
                    var t = this.textPath();
                    if (t) return t.reference("href")
                },
                textPath: function () {
                    if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return g.adopt(this.node.firstChild)
                }
            }
        }), g.Nested = g.invent({
            create: function () {
                this.constructor.call(this, g.create("svg")), this.style("overflow", "visible")
            },
            inherit: g.Container,
            construct: {
                nested: function () {
                    return this.put(new g.Nested)
                }
            }
        });
        var b = {
            stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
            fill: ["color", "opacity", "rule"],
            prefix: function (t, e) {
                return "color" == e ? t : t + "-" + e
            }
        };
        ["fill", "stroke"].forEach(function (i) {
            var t = {};
            t[i] = function (t) {
                if (void 0 === t) return this;
                if ("string" == typeof t || g.Color.isRgb(t) || t && "function" == typeof t.fill) this.attr(i, t);
                else
                    for (var e = b[i].length - 1; 0 <= e; e--) null != t[b[i][e]] && this.attr(b.prefix(i, b[i][e]), t[b[i][e]]);
                return this
            }, g.extend(g.Element, g.FX, t)
        }), g.extend(g.Element, g.FX, {
            translate: function (t, e) {
                return this.transform({
                    x: t,
                    y: e
                })
            },
            matrix: function (t) {
                return this.attr("transform", new g.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
            },
            opacity: function (t) {
                return this.attr("opacity", t)
            },
            dx: function (t) {
                return this.x(new g.Number(t).plus(this instanceof g.FX ? 0 : this.x()), !0)
            },
            dy: function (t) {
                return this.y(new g.Number(t).plus(this instanceof g.FX ? 0 : this.y()), !0)
            }
        }), g.extend(g.Path, {
            length: function () {
                return this.node.getTotalLength()
            },
            pointAt: function (t) {
                return this.node.getPointAtLength(t)
            }
        }), g.Set = g.invent({
            create: function (t) {
                Array.isArray(t) ? this.members = t : this.clear()
            },
            extend: {
                add: function () {
                    for (var t = [].slice.call(arguments), e = 0, i = t.length; e < i; e++) this.members.push(t[e]);
                    return this
                },
                remove: function (t) {
                    var e = this.index(t);
                    return -1 < e && this.members.splice(e, 1), this
                },
                each: function (t) {
                    for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                    return this
                },
                clear: function () {
                    return this.members = [], this
                },
                length: function () {
                    return this.members.length
                },
                has: function (t) {
                    return 0 <= this.index(t)
                },
                index: function (t) {
                    return this.members.indexOf(t)
                },
                get: function (t) {
                    return this.members[t]
                },
                first: function () {
                    return this.get(0)
                },
                last: function () {
                    return this.get(this.members.length - 1)
                },
                valueOf: function () {
                    return this.members
                }
            },
            construct: {
                set: function (t) {
                    return new g.Set(t)
                }
            }
        }), g.FX.Set = g.invent({
            create: function (t) {
                this.set = t
            }
        }), g.Set.inherit = function () {
            var t = [];
            for (var e in g.Shape.prototype) "function" == typeof g.Shape.prototype[e] && "function" != typeof g.Set.prototype[e] && t.push(e);
            for (var e in t.forEach(function (i) {
                g.Set.prototype[i] = function () {
                    for (var t = 0, e = this.members.length; t < e; t++) this.members[t] && "function" == typeof this.members[t][i] && this.members[t][i].apply(this.members[t], arguments);
                    return "animate" == i ? this.fx || (this.fx = new g.FX.Set(this)) : this
                }
            }), t = [], g.FX.prototype) "function" == typeof g.FX.prototype[e] && "function" != typeof g.FX.Set.prototype[e] && t.push(e);
            t.forEach(function (i) {
                g.FX.Set.prototype[i] = function () {
                    for (var t = 0, e = this.set.members.length; t < e; t++) this.set.members[t].fx[i].apply(this.set.members[t].fx, arguments);
                    return this
                }
            })
        }, g.extend(g.Element, {}), g.extend(g.Element, {
            remember: function (t, e) {
                if ("object" === y(arguments[0]))
                    for (var i in t) this.remember(i, t[i]);
                else {
                    if (1 == arguments.length) return this.memory()[t];
                    this.memory()[t] = e
                }
                return this
            },
            forget: function () {
                if (0 == arguments.length) this._memory = {};
                else
                    for (var t = arguments.length - 1; 0 <= t; t--) delete this.memory()[arguments[t]];
                return this
            },
            memory: function () {
                return this._memory || (this._memory = {})
            }
        }), g.get = function (e) {
            var t = r.getElementById(function () {
                var t = (e || "").toString().match(g.regex.reference);
                if (t) return t[1]
            }() || e);
            return g.adopt(t)
        }, g.select = function (t, e) {
            return new g.Set(g.utils.map((e || r).querySelectorAll(t), function (t) {
                return g.adopt(t)
            }))
        }, g.extend(g.Parent, {
            select: function (t) {
                return g.select(t, this.node)
            }
        });
        var m = "abcdef".split("");
        if ("function" != typeof s.CustomEvent) {
            var v = function (t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var i = r.createEvent("CustomEvent");
                return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
            };
            v.prototype = s.Event.prototype, g.CustomEvent = v
        } else g.CustomEvent = s.CustomEvent;
        return g
    }, "function" == typeof define && define.amd ? define(function () {
        return Mt(e, e.document)
    }) : "object" === ("undefined" == typeof exports ? "undefined" : y(exports)) && "undefined" != typeof module ? module.exports = e.document ? Mt(e, e.document) : function (t) {
        return Mt(t, t.document)
    } : e.SVG = Mt(e, e.document),
        function () {
            function i(t) {
                return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ")
            }

            function a(t) {
                if (!Array.isArray(t)) return t;
                for (var e = 0, i = t.length, a = []; e < i; e++) a.push(t[e]);
                return a.join(" ")
            }

            function t() {
                var t = function () { };
                for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
                    for (var i in arguments[e]) t(arguments[e][i], i, arguments[e])
            }
            SVG.Filter = SVG.invent({
                create: "filter",
                inherit: SVG.Parent,
                extend: {
                    source: "SourceGraphic",
                    sourceAlpha: "SourceAlpha",
                    background: "BackgroundImage",
                    backgroundAlpha: "BackgroundAlpha",
                    fill: "FillPaint",
                    stroke: "StrokePaint",
                    autoSetIn: !0,
                    put: function (t, e) {
                        return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t
                    },
                    blend: function (t, e, i) {
                        return this.put(new SVG.BlendEffect(t, e, i))
                    },
                    colorMatrix: function (t, e) {
                        return this.put(new SVG.ColorMatrixEffect(t, e))
                    },
                    convolveMatrix: function (t) {
                        return this.put(new SVG.ConvolveMatrixEffect(t))
                    },
                    componentTransfer: function (t) {
                        return this.put(new SVG.ComponentTransferEffect(t))
                    },
                    composite: function (t, e, i) {
                        return this.put(new SVG.CompositeEffect(t, e, i))
                    },
                    flood: function (t, e) {
                        return this.put(new SVG.FloodEffect(t, e))
                    },
                    offset: function (t, e) {
                        return this.put(new SVG.OffsetEffect(t, e))
                    },
                    image: function (t) {
                        return this.put(new SVG.ImageEffect(t))
                    },
                    merge: function () {
                        var t = [void 0];
                        for (var e in arguments) t.push(arguments[e]);
                        return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t)))
                    },
                    gaussianBlur: function (t, e) {
                        return this.put(new SVG.GaussianBlurEffect(t, e))
                    },
                    morphology: function (t, e) {
                        return this.put(new SVG.MorphologyEffect(t, e))
                    },
                    diffuseLighting: function (t, e, i) {
                        return this.put(new SVG.DiffuseLightingEffect(t, e, i))
                    },
                    displacementMap: function (t, e, i, a, s) {
                        return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s))
                    },
                    specularLighting: function (t, e, i, a) {
                        return this.put(new SVG.SpecularLightingEffect(t, e, i, a))
                    },
                    tile: function () {
                        return this.put(new SVG.TileEffect)
                    },
                    turbulence: function (t, e, i, a, s) {
                        return this.put(new SVG.TurbulenceEffect(t, e, i, a, s))
                    },
                    toString: function () {
                        return "url(#" + this.attr("id") + ")"
                    }
                }
            }), SVG.extend(SVG.Defs, {
                filter: function (t) {
                    var e = this.put(new SVG.Filter);
                    return "function" == typeof t && t.call(e, e), e
                }
            }), SVG.extend(SVG.Container, {
                filter: function (t) {
                    return this.defs().filter(t)
                }
            }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
                filter: function (t) {
                    return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
                },
                unfilter: function (t) {
                    return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
                }
            }), SVG.Effect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                },
                inherit: SVG.Element,
                extend: {
                    "in": function (t) {
                        return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                    },
                    result: function (t) {
                        return null == t ? this.attr("result") : this.attr("result", t)
                    },
                    toString: function () {
                        return this.result()
                    }
                }
            }), SVG.ParentEffect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                },
                inherit: SVG.Parent,
                extend: {
                    "in": function (t) {
                        return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                    },
                    result: function (t) {
                        return null == t ? this.attr("result") : this.attr("result", t)
                    },
                    toString: function () {
                        return this.result()
                    }
                }
            });
            var e = {
                blend: function (t, e) {
                    return this.parent() && this.parent().blend(this, t, e)
                },
                colorMatrix: function (t, e) {
                    return this.parent() && this.parent().colorMatrix(t, e)["in"](this)
                },
                convolveMatrix: function (t) {
                    return this.parent() && this.parent().convolveMatrix(t)["in"](this)
                },
                componentTransfer: function (t) {
                    return this.parent() && this.parent().componentTransfer(t)["in"](this)
                },
                composite: function (t, e) {
                    return this.parent() && this.parent().composite(this, t, e)
                },
                flood: function (t, e) {
                    return this.parent() && this.parent().flood(t, e)
                },
                offset: function (t, e) {
                    return this.parent() && this.parent().offset(t, e)["in"](this)
                },
                image: function (t) {
                    return this.parent() && this.parent().image(t)
                },
                merge: function () {
                    return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
                },
                gaussianBlur: function (t, e) {
                    return this.parent() && this.parent().gaussianBlur(t, e)["in"](this)
                },
                morphology: function (t, e) {
                    return this.parent() && this.parent().morphology(t, e)["in"](this)
                },
                diffuseLighting: function (t, e, i) {
                    return this.parent() && this.parent().diffuseLighting(t, e, i)["in"](this)
                },
                displacementMap: function (t, e, i, a) {
                    return this.parent() && this.parent().displacementMap(this, t, e, i, a)
                },
                specularLighting: function (t, e, i, a) {
                    return this.parent() && this.parent().specularLighting(t, e, i, a)["in"](this)
                },
                tile: function () {
                    return this.parent() && this.parent().tile()["in"](this)
                },
                turbulence: function (t, e, i, a, s) {
                    return this.parent() && this.parent().turbulence(t, e, i, a, s)["in"](this)
                }
            };
            SVG.extend(SVG.Effect, e), SVG.extend(SVG.ParentEffect, e), SVG.ChildEffect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                },
                inherit: SVG.Element,
                extend: {
                    "in": function (t) {
                        this.attr("in", t)
                    }
                }
            });
            var s = {
                blend: function (t, e, i) {
                    this.attr({
                        "in": t,
                        in2: e,
                        mode: i || "normal"
                    })
                },
                colorMatrix: function (t, e) {
                    "matrix" == t && (e = i(e)), this.attr({
                        type: t,
                        values: void 0 === e ? null : e
                    })
                },
                convolveMatrix: function (t) {
                    t = i(t), this.attr({
                        order: Math.sqrt(t.split(" ").length),
                        kernelMatrix: t
                    })
                },
                composite: function (t, e, i) {
                    this.attr({
                        "in": t,
                        in2: e,
                        operator: i
                    })
                },
                flood: function (t, e) {
                    this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
                },
                offset: function (t, e) {
                    this.attr({
                        dx: t,
                        dy: e
                    })
                },
                image: function (t) {
                    this.attr("href", t, SVG.xlink)
                },
                displacementMap: function (t, e, i, a, s) {
                    this.attr({
                        "in": t,
                        in2: e,
                        scale: i,
                        xChannelSelector: a,
                        yChannelSelector: s
                    })
                },
                gaussianBlur: function (t, e) {
                    null != t || null != e ? this.attr("stdDeviation", a(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
                },
                morphology: function (t, e) {
                    this.attr({
                        operator: t,
                        radius: e
                    })
                },
                tile: function () { },
                turbulence: function (t, e, i, a, s) {
                    this.attr({
                        numOctaves: e,
                        seed: i,
                        stitchTiles: a,
                        baseFrequency: t,
                        type: s
                    })
                }
            },
                r = {
                    merge: function (t) {
                        var e;
                        if (t instanceof SVG.Set) {
                            var i = this;
                            arguments[0].each(function () {
                                this instanceof SVG.MergeNode ? i.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && i.put(new SVG.MergeNode(this))
                            })
                        } else {
                            e = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                            for (var a = 0; a < e.length; a++) e[a] instanceof SVG.MergeNode ? this.put(e[a]) : this.put(new SVG.MergeNode(e[a]))
                        }
                    },
                    componentTransfer: function (e) {
                        if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function (t) {
                            this[t] = new (SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node)
                        }.bind(this)), e)
                            for (var t in e.rgb && (["r", "g", "b"].forEach(function (t) {
                                this[t].attr(e.rgb)
                            }.bind(this)), delete e.rgb), e) this[t].attr(e[t])
                    },
                    diffuseLighting: function (t, e, i) {
                        this.attr({
                            surfaceScale: t,
                            diffuseConstant: e,
                            kernelUnitLength: i
                        })
                    },
                    specularLighting: function (t, e, i, a) {
                        this.attr({
                            surfaceScale: t,
                            diffuseConstant: e,
                            specularExponent: i,
                            kernelUnitLength: a
                        })
                    }
                },
                o = {
                    distantLight: function (t, e) {
                        this.attr({
                            azimuth: t,
                            elevation: e
                        })
                    },
                    pointLight: function (t, e, i) {
                        this.attr({
                            x: t,
                            y: e,
                            z: i
                        })
                    },
                    spotLight: function (t, e, i, a, s, r) {
                        this.attr({
                            x: t,
                            y: e,
                            z: i,
                            pointsAtX: a,
                            pointsAtY: s,
                            pointsAtZ: r
                        })
                    },
                    mergeNode: function (t) {
                        this.attr("in", t)
                    }
                };
            ["r", "g", "b", "a"].forEach(function (t) {
                o["Func" + t.toUpperCase()] = function (t, e, i) {
                    switch (this.attr("type", t), t) {
                        case "table":
                            this.attr("tableValues", e);
                            break;
                        case "linear":
                            this.attr("slope", arguments[1]), this.attr("intercept", i);
                            break;
                        case "gamma":
                            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2])
                    }
                }
            }), t(s, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                    },
                    inherit: SVG.Effect,
                    extend: {}
                })
            }), t(r, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                    },
                    inherit: SVG.ParentEffect,
                    extend: {}
                })
            }), t(o, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
                    },
                    inherit: SVG.ChildEffect,
                    extend: {}
                })
            }), SVG.extend(SVG.MergeEffect, {
                "in": function (t) {
                    return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
                }
            }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
                in2: function (t) {
                    return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t)
                }
            }), SVG.filter = {
                sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]
            }
        }.call(void 0),
        function () {
            function h(t, e, i, a, s, r, o) {
                for (var n = t.slice(e, i || o), l = a.slice(s, r || o), h = 0, c = {
                    pos: [0, 0],
                    start: [0, 0]
                }, d = {
                    pos: [0, 0],
                    start: [0, 0]
                }; n[h] = g.call(c, n[h]), l[h] = g.call(d, l[h]), n[h][0] != l[h][0] || "M" == n[h][0] || "A" == n[h][0] && (n[h][4] != l[h][4] || n[h][5] != l[h][5]) ? (Array.prototype.splice.apply(n, [h, 1].concat(p.call(c, n[h]))), Array.prototype.splice.apply(l, [h, 1].concat(p.call(d, l[h])))) : (n[h] = u.call(c, n[h]), l[h] = u.call(d, l[h])), ++h != n.length || h != l.length;) h == n.length && n.push(["C", c.pos[0], c.pos[1], c.pos[0], c.pos[1], c.pos[0], c.pos[1]]), h == l.length && l.push(["C", d.pos[0], d.pos[1], d.pos[0], d.pos[1], d.pos[0], d.pos[1]]);
                return {
                    start: n,
                    dest: l
                }
            }

            function g(t) {
                switch (t[0]) {
                    case "z":
                    case "Z":
                        t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
                        break;
                    case "H":
                        t[0] = "L", t[2] = this.pos[1];
                        break;
                    case "V":
                        t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
                        break;
                    case "T":
                        t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
                        break;
                    case "S":
                        t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0]
                }
                return t
            }

            function u(t) {
                var e = t.length;
                return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t
            }

            function p(t) {
                var e = [t];
                switch (t[0]) {
                    case "M":
                        return this.pos = this.start = [t[1], t[2]], e;
                    case "L":
                        t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
                        break;
                    case "Q":
                        t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 * this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3;
                        break;
                    case "A":
                        t = (e = function (t, e) {
                            var i, a, s, r, o, n, l, h, c, d, g, u, p, f, x, b, m, v, y, w, k, A, S, C, L, P, T = Math.abs(e[1]),
                                M = Math.abs(e[2]),
                                I = e[3] % 360,
                                z = e[4],
                                X = e[5],
                                E = e[6],
                                Y = e[7],
                                F = new SVG.Point(t),
                                R = new SVG.Point(E, Y),
                                H = [];
                            if (0 === T || 0 === M || F.x === R.x && F.y === R.y) return [
                                ["C", F.x, F.y, R.x, R.y, R.x, R.y]
                            ];
                            for (1 < (a = (i = new SVG.Point((F.x - R.x) / 2, (F.y - R.y) / 2).transform((new SVG.Matrix).rotate(I))).x * i.x / (T * T) + i.y * i.y / (M * M)) && (T *= a = Math.sqrt(a), M *= a), s = (new SVG.Matrix).rotate(I).scale(1 / T, 1 / M).rotate(-I), F = F.transform(s), n = (r = [(R = R.transform(s)).x - F.x, R.y - F.y])[0] * r[0] + r[1] * r[1], o = Math.sqrt(n), r[0] /= o, r[1] /= o, l = n < 4 ? Math.sqrt(1 - n / 4) : 0, z === X && (l *= -1), h = new SVG.Point((R.x + F.x) / 2 + l * -r[1], (R.y + F.y) / 2 + l * r[0]), c = new SVG.Point(F.x - h.x, F.y - h.y), d = new SVG.Point(R.x - h.x, R.y - h.y), g = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)), c.y < 0 && (g *= -1), u = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)), d.y < 0 && (u *= -1), X && u < g && (u += 2 * Math.PI), !X && g < u && (u -= 2 * Math.PI), b = [], p = (u - (m = g)) / (f = Math.ceil(2 * Math.abs(g - u) / Math.PI)), x = 4 * Math.tan(p / 4) / 3, k = 0; k <= f; k++) y = Math.cos(m), v = Math.sin(m), w = new SVG.Point(h.x + y, h.y + v), b[k] = [new SVG.Point(w.x + x * v, w.y - x * y), w, new SVG.Point(w.x - x * v, w.y + x * y)], m += p;
                            for (b[0][0] = b[0][1].clone(), b[b.length - 1][2] = b[b.length - 1][1].clone(), s = (new SVG.Matrix).rotate(I).scale(T, M).rotate(-I), k = 0, A = b.length; k < A; k++) b[k][0] = b[k][0].transform(s), b[k][1] = b[k][1].transform(s), b[k][2] = b[k][2].transform(s);
                            for (k = 1, A = b.length; k < A; k++) S = (w = b[k - 1][2]).x, C = w.y, L = (w = b[k][0]).x, P = w.y, E = (w = b[k][1]).x, Y = w.y, H.push(["C", S, C, L, P, E, Y]);
                            return H
                        }(this.pos, t))[0]
                }
                return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
            }

            function c(t, e) {
                if (!1 === e) return !1;
                for (var i = e, a = t.length; i < a; ++i)
                    if ("M" == t[i][0]) return i;
                return !1
            }
            SVG.extend(SVG.PathArray, {
                morph: function (t) {
                    for (var e = this.value, i = this.parse(t), a = 0, s = 0, r = !1, o = !1; !1 !== a || !1 !== s;) {
                        var n;
                        r = c(e, !1 !== a && a + 1), o = c(i, !1 !== s && s + 1), !1 === a && (a = 0 == (n = new SVG.PathArray(l.start).bbox()).height || 0 == n.width ? e.push(e[0]) - 1 : e.push(["M", n.x + n.width / 2, n.y + n.height / 2]) - 1), !1 === s && (s = 0 == (n = new SVG.PathArray(l.dest).bbox()).height || 0 == n.width ? i.push(i[0]) - 1 : i.push(["M", n.x + n.width / 2, n.y + n.height / 2]) - 1);
                        var l = h(e, a, r, i, s, o);
                        e = e.slice(0, a).concat(l.start, !1 === r ? [] : e.slice(r)), i = i.slice(0, s).concat(l.dest, !1 === o ? [] : i.slice(o)), a = !1 !== r && a + l.start.length, s = !1 !== o && s + l.dest.length
                    }
                    return this.value = e, this.destination = new SVG.PathArray, this.destination.value = i, this
                }
            })
        }(),
        function () {
            function a(t) {
                t.remember("_draggable", this), this.el = t
            }
            a.prototype.init = function (t, e) {
                var i = this;
                this.constraint = t, this.value = e, this.el.on("mousedown.drag", function (t) {
                    i.start(t)
                }), this.el.on("touchstart.drag", function (t) {
                    i.start(t)
                })
            }, a.prototype.transformPoint = function (t, e) {
                var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
                return this.p.x = i.clientX - (e || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m)
            }, a.prototype.getBBox = function () {
                var t = this.el.bbox();
                return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
            }, a.prototype.start = function (t) {
                if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
                    var e = this;
                    if (this.el.fire("beforedrag", {
                        event: t,
                        handler: this
                    }), !this.el.event().defaultPrevented) {
                        t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
                        var i, a = this.getBBox();
                        if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                            case "middle":
                                i /= 2;
                                break;
                            case "start":
                                i = 0
                        }
                        this.startPoints = {
                            point: this.transformPoint(t, i),
                            box: a,
                            transform: this.el.transform()
                        }, SVG.on(window, "mousemove.drag", function (t) {
                            e.drag(t)
                        }), SVG.on(window, "touchmove.drag", function (t) {
                            e.drag(t)
                        }), SVG.on(window, "mouseup.drag", function (t) {
                            e.end(t)
                        }), SVG.on(window, "touchend.drag", function (t) {
                            e.end(t)
                        }), this.el.fire("dragstart", {
                            event: t,
                            p: this.startPoints.point,
                            m: this.m,
                            handler: this
                        })
                    }
                }
            }, a.prototype.drag = function (t) {
                var e = this.getBBox(),
                    i = this.transformPoint(t),
                    a = this.startPoints.box.x + i.x - this.startPoints.point.x,
                    s = this.startPoints.box.y + i.y - this.startPoints.point.y,
                    r = this.constraint,
                    o = i.x - this.startPoints.point.x,
                    n = i.y - this.startPoints.point.y;
                if (this.el.fire("dragmove", {
                    event: t,
                    p: i,
                    m: this.m,
                    handler: this
                }), this.el.event().defaultPrevented) return i;
                if ("function" == typeof r) {
                    var l = r.call(this.el, a, s, this.m);
                    "boolean" == typeof l && (l = {
                        x: l,
                        y: l
                    }), !0 === l.x ? this.el.x(a) : !1 !== l.x && this.el.x(l.x), !0 === l.y ? this.el.y(s) : !1 !== l.y && this.el.y(l.y)
                } else "object" == typeof r && (null != r.minX && a < r.minX ? o = (a = r.minX) - this.startPoints.box.x : null != r.maxX && a > r.maxX - e.width && (o = (a = r.maxX - e.width) - this.startPoints.box.x), null != r.minY && s < r.minY ? n = (s = r.minY) - this.startPoints.box.y : null != r.maxY && s > r.maxY - e.height && (n = (s = r.maxY - e.height) - this.startPoints.box.y), null != r.snapToGrid && (a -= a % r.snapToGrid, s -= s % r.snapToGrid, o -= o % r.snapToGrid, n -= n % r.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
                    x: o,
                    y: n
                }, !0) : this.el.move(a, s));
                return i
            }, a.prototype.end = function (t) {
                var e = this.drag(t);
                this.el.fire("dragend", {
                    event: t,
                    p: e,
                    m: this.m,
                    handler: this
                }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag")
            }, SVG.extend(SVG.Element, {
                draggable: function (t, e) {
                    "function" != typeof t && "object" != typeof t || (e = t, t = !0);
                    var i = this.remember("_draggable") || new a(this);
                    return (t = void 0 === t || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this
                }
            })
        }.call(void 0),
        function () {
            function i(t) {
                (this.el = t).remember("_selectHandler", this), this.pointSelection = {
                    isSelected: !1
                }, this.rectSelection = {
                    isSelected: !1
                }, this.pointsList = {
                    lt: [0, 0],
                    rt: ["width", 0],
                    rb: ["width", "height"],
                    lb: [0, "height"],
                    t: ["width", 0],
                    r: ["width", "height"],
                    b: ["width", "height"],
                    l: [0, "height"]
                }, this.pointCoord = function (t, e, i) {
                    var a = "string" != typeof t ? t : e[t];
                    return i ? a / 2 : a
                }, this.pointCoords = function (t, e) {
                    var i = this.pointsList[t];
                    return {
                        x: this.pointCoord(i[0], e, "t" === t || "b" === t),
                        y: this.pointCoord(i[1], e, "r" === t || "l" === t)
                    }
                }
            }
            i.prototype.init = function (t, e) {
                var i = this.el.bbox();
                this.options = {};
                var a = this.el.selectize.defaults.points;
                for (var s in this.el.selectize.defaults) this.options[s] = this.el.selectize.defaults[s], void 0 !== e[s] && (this.options[s] = e[s]);
                var r = ["points", "pointsExclude"];
                for (var s in r) {
                    var o = this.options[r[s]];
                    "string" == typeof o ? o = 0 < o.length ? o.split(/\s*,\s*/i) : [] : "boolean" == typeof o && "points" === r[s] && (o = o ? a : []), this.options[r[s]] = o
                }
                this.options.points = [a, this.options.points].reduce(function (t, e) {
                    return t.filter(function (t) {
                        return -1 < e.indexOf(t)
                    })
                }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function (t, e) {
                    return t.filter(function (t) {
                        return e.indexOf(t) < 0
                    })
                }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
            }, i.prototype.selectPoints = function (t) {
                return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this
            }, i.prototype.getPointArray = function () {
                var e = this.el.bbox();
                return this.el.array().valueOf().map(function (t) {
                    return [t[0] - e.x, t[1] - e.y]
                })
            }, i.prototype.drawPoints = function () {
                for (var s = this, t = this.getPointArray(), e = 0, i = t.length; e < i; ++e) {
                    var a = function (a) {
                        return function (t) {
                            (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                            var e = t.pageX || t.touches[0].pageX,
                                i = t.pageY || t.touches[0].pageY;
                            s.el.fire("point", {
                                x: e,
                                y: i,
                                i: a,
                                event: t
                            })
                        }
                    }(e),
                        r = this.drawPoint(t[e][0], t[e][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", a).on("mousedown", a);
                    this.pointSelection.set.add(r)
                }
            }, i.prototype.drawPoint = function (t, e) {
                var i = this.options.pointType;
                switch (i) {
                    case "circle":
                        return this.drawCircle(t, e);
                    case "rect":
                        return this.drawRect(t, e);
                    default:
                        if ("function" == typeof i) return i.call(this, t, e);
                        throw new Error("Unknown " + i + " point type!")
                }
            }, i.prototype.drawCircle = function (t, e) {
                return this.nested.circle(this.options.pointSize).center(t, e)
            }, i.prototype.drawRect = function (t, e) {
                return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e)
            }, i.prototype.updatePointSelection = function () {
                var e = this.getPointArray();
                this.pointSelection.set.each(function (t) {
                    this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1])
                })
            }, i.prototype.updateRectSelection = function () {
                var a = this,
                    s = this.el.bbox();
                if (this.rectSelection.set.get(0).attr({
                    width: s.width,
                    height: s.height
                }), this.options.points.length && this.options.points.map(function (t, e) {
                    var i = a.pointCoords(t, s);
                    a.rectSelection.set.get(e + 1).center(i.x, i.y)
                }), this.options.rotationPoint) {
                    var t = this.rectSelection.set.length();
                    this.rectSelection.set.get(t - 1).center(s.width / 2, 20)
                }
            }, i.prototype.selectRect = function (t) {
                function a(a) {
                    return function (t) {
                        (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                        var e = t.pageX || t.touches[0].pageX,
                            i = t.pageY || t.touches[0].pageY;
                        s.el.fire(a, {
                            x: e,
                            y: i,
                            event: t
                        })
                    }
                }
                var s = this,
                    r = this.el.bbox();
                if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(r.width, r.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function (t) {
                    var e = s.pointCoords(t, r),
                        i = s.drawPoint(e.x, e.y).attr("class", s.options.classPoints + "_" + t).on("mousedown", a(t)).on("touchstart", a(t));
                    s.rectSelection.set.add(i)
                }), this.rectSelection.set.each(function () {
                    this.addClass(s.options.classPoints)
                })), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
                    var e = function (t) {
                        (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                        var e = t.pageX || t.touches[0].pageX,
                            i = t.pageY || t.touches[0].pageY;
                        s.el.fire("rot", {
                            x: e,
                            y: i,
                            event: t
                        })
                    },
                        i = this.drawPoint(r.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", e).on("mousedown", e);
                    this.rectSelection.set.add(i)
                }
            }, i.prototype.handler = function () {
                var t = this.el.bbox();
                this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection()
            }, i.prototype.observe = function () {
                var t = this;
                if (MutationObserver)
                    if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function () {
                        t.handler()
                    }), this.observerInst.observe(this.el.node, {
                        attributes: !0
                    });
                    else try {
                        this.observerInst.disconnect(), delete this.observerInst
                    } catch (t) { } else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function () {
                        t.handler()
                    })
            }, i.prototype.cleanup = function () {
                !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function () {
                    this.remove()
                }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function () {
                    this.remove()
                }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested)
            }, SVG.extend(SVG.Element, {
                selectize: function (t, e) {
                    return "object" == typeof t && (e = t, t = !0), (this.remember("_selectHandler") || new i(this)).init(void 0 === t || t, e || {}), this
                }
            }), SVG.Element.prototype.selectize.defaults = {
                points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"],
                pointsExclude: [],
                classRect: "svg_select_boundingRect",
                classPoints: "svg_select_points",
                pointSize: 7,
                rotationPoint: !0,
                deepSelect: !1,
                pointType: "circle"
            }
        }(),
        function () {
            (function () {
                function e(t) {
                    t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint()
                }
                e.prototype.transformPoint = function (t, e, i) {
                    return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m)
                }, e.prototype._extractPosition = function (t) {
                    return {
                        x: null != t.clientX ? t.clientX : t.touches[0].clientX,
                        y: null != t.clientY ? t.clientY : t.touches[0].clientY
                    }
                }, e.prototype.init = function (t) {
                    var e = this;
                    if (this.stop(), "stop" !== t) {
                        for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
                        this.el.on("lt.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("rt.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("rb.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("lb.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("t.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("r.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("b.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("l.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("rot.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("point.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.update()
                    }
                }, e.prototype.stop = function () {
                    return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this
                }, e.prototype.resize = function (t) {
                    var e = this;
                    this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    };
                    var i = this._extractPosition(t.detail.event);
                    if (this.parameters = {
                        type: this.el.type,
                        p: this.transformPoint(i.x, i.y),
                        x: t.detail.x,
                        y: t.detail.y,
                        box: this.el.bbox(),
                        rotation: this.el.transform().rotation
                    }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i) {
                        var a = this.el.array().valueOf();
                        this.parameters.i = t.detail.i, this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]]
                    }
                    switch (t.type) {
                        case "lt":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e);
                                if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height - i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case "rt":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 2);
                                if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height - i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case "rb":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height + i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case "lb":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 1);
                                if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height + i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case "t":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 2);
                                if (0 < this.parameters.box.height - i[1]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case "r":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (0 < this.parameters.box.width + i[0]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0])
                                }
                            };
                            break;
                        case "b":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (0 < this.parameters.box.height + i[1]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case "l":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 1);
                                if (0 < this.parameters.box.width - i[0]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0])
                                }
                            };
                            break;
                        case "rot":
                            this.calc = function (t, e) {
                                var i = t + this.parameters.p.x,
                                    a = e + this.parameters.p.y,
                                    s = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                    r = Math.atan2(a - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2),
                                    o = this.parameters.rotation + 180 * (r - s) / Math.PI + this.options.snapToAngle / 2;
                                this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(o - o % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
                            };
                            break;
                        case "point":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                                    a = this.el.array().valueOf();
                                a[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], a[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1], this.el.plot(a)
                            }
                    }
                    this.el.fire("resizestart", {
                        dx: this.parameters.x,
                        dy: this.parameters.y,
                        event: t
                    }), SVG.on(window, "touchmove.resize", function (t) {
                        e.update(t || window.event)
                    }), SVG.on(window, "touchend.resize", function () {
                        e.done()
                    }), SVG.on(window, "mousemove.resize", function (t) {
                        e.update(t || window.event)
                    }), SVG.on(window, "mouseup.resize", function () {
                        e.done()
                    })
                }, e.prototype.update = function (t) {
                    if (t) {
                        var e = this._extractPosition(t),
                            i = this.transformPoint(e.x, e.y),
                            a = i.x - this.parameters.p.x,
                            s = i.y - this.parameters.p.y;
                        this.lastUpdateCall = [a, s], this.calc(a, s), this.el.fire("resizing", {
                            dx: a,
                            dy: s,
                            event: t
                        })
                    } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
                }, e.prototype.done = function () {
                    this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
                }, e.prototype.snapToGrid = function (t, e, i, a) {
                    var s;
                    return void 0 !== a ? s = [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : (i = null == i ? 3 : i, s = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t < 0 && (s[0] -= this.options.snapToGrid), e < 0 && (s[1] -= this.options.snapToGrid), t -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a)
                }, e.prototype.constraintToBox = function (t, e, i, a) {
                    var s, r, o = this.options.constraint || {};
                    return void 0 !== a ? (s = i, r = a) : (s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), r = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== o.minX && s + t < o.minX && (t = o.minX - s), void 0 !== o.maxX && s + t > o.maxX && (t = o.maxX - s), void 0 !== o.minY && r + e < o.minY && (e = o.minY - r), void 0 !== o.maxY && r + e > o.maxY && (e = o.maxY - r), [t, e]
                }, e.prototype.checkAspectRatio = function (t, e) {
                    if (!this.options.saveAspectRatio) return t;
                    var i = t.slice(),
                        a = this.parameters.box.width / this.parameters.box.height,
                        s = this.parameters.box.width + t[0],
                        r = this.parameters.box.height - t[1],
                        o = s / r;
                    return o < a ? (i[1] = s / a - this.parameters.box.height, e && (i[1] = -i[1])) : a < o && (i[0] = this.parameters.box.width - r * a, e && (i[0] = -i[0])), i
                }, SVG.extend(SVG.Element, {
                    resize: function (t) {
                        return (this.remember("_resizeHandler") || new e(this)).init(t || {}), this
                    }
                }), SVG.Element.prototype.resize.defaults = {
                    snapToAngle: .1,
                    snapToGrid: 1,
                    constraint: {},
                    saveAspectRatio: !1
                }
            }).call(this)
        }(),
        function (t, e) {
            void 0 === e && (e = {});
            var i = e.insertAt;
            if (t && "undefined" != typeof document) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    s = document.createElement("style");
                s.type = "text/css", "top" === i && a.firstChild ? a.insertBefore(s, a.firstChild) : a.appendChild(s), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t))
            }
        }(
            '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-goals-group, \n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  display: flex;\n}\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-box, .apexcharts-custom-tooltip {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}'),
        function () {
            function a(t) {
                var e = t.__resizeTriggers__,
                    i = e.firstElementChild,
                    a = e.lastElementChild,
                    s = i ? i.firstElementChild : null;
                a && (a.scrollLeft = a.scrollWidth, a.scrollTop = a.scrollHeight), s && (s.style.width = i.offsetWidth + 1 + "px", s.style.height = i.offsetHeight + 1 + "px"), i && (i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight)
            }

            function i(e) {
                var i = this;
                a(this), this.__resizeRAF__ && r(this.__resizeRAF__), this.__resizeRAF__ = t(function () {
                    var t;
                    ((t = i).offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height) && (i.__resizeLast__.width = i.offsetWidth, i.__resizeLast__.height = i.offsetHeight, i.__resizeListeners__.forEach(function (t) {
                        t.call(e)
                    }))
                })
            }
            var e, s, t = (e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                return window.setTimeout(t, 20)
            }, function (t) {
                return e(t)
            }),
                r = (s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout, function (t) {
                    return s(t)
                }),
                o = !1,
                n = "animationstart",
                l = "Webkit Moz O ms".split(" "),
                h = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                c = document.createElement("fakeelement");
            if (void 0 !== c.style.animationName && (o = !0), !1 === o)
                for (var d = 0; d < l.length; d++)
                    if (void 0 !== c.style[l[d] + "AnimationName"]) {
                        n = h[d];
                        break
                    }
            window.addResizeListener = function (e, t) {
                e.__resizeTriggers__ || ("static" == getComputedStyle(e).position && (e.style.position = "relative"), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), a(e), e.addEventListener("scroll", i, !0), n && e.__resizeTriggers__.addEventListener(n, function (t) {
                    "resizeanim" == t.animationName && a(e)
                })), e.__resizeListeners__.push(t)
            }, window.removeResizeListener = function (t, e) {
                t && (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", i), t.__resizeTriggers__.parentNode && (t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__))))
            }
        }(), void 0 === window.Apex && (window.Apex = {});
    var Ft = function () {
        function e(t) {
            r(this, e), this.ctx = t, this.w = t.w
        }
        return o(e, [{
            key: "initModules",
            value: function () {
                this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new z(this.ctx), this.ctx.axes = new Q(this.ctx), this.ctx.core = new Et(this.ctx.el, this.ctx), this.ctx.config = new N({}), this.ctx.data = new B(this.ctx), this.ctx.grid = new U(this.ctx), this.ctx.graphics = new F(this.ctx), this.ctx.coreUtils = new M(this.ctx), this.ctx.crosshairs = new K(this.ctx), this.ctx.events = new t(this.ctx), this.ctx.exports = new _(this.ctx), this.ctx.localization = new J(this.ctx), this.ctx.options = new m, this.ctx.responsive = new tt(this.ctx), this.ctx.series = new S(this.ctx), this.ctx.theme = new et(this.ctx), this.ctx.formatters = new V(this.ctx), this.ctx.titleSubtitle = new it(this.ctx), this.ctx.legend = new ht(this.ctx), this.ctx.toolbar = new ct(this.ctx), this.ctx.dimensions = new nt(this.ctx), this.ctx.updateHelpers = new Yt(this.ctx), this.ctx.zoomPanSelection = new dt(this.ctx), this.ctx.w.globals.tooltip = new mt(this.ctx)
            }
        }]), e
    }(),
        Rt = function () {
            function e(t) {
                r(this, e), this.ctx = t, this.w = t.w
            }
            return o(e, [{
                key: "clear",
                value: function (t) {
                    var e = t.isUpdating;
                    this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({
                        isUpdating: e
                    })
                }
            }, {
                key: "killSVG",
                value: function (t) {
                    t.each(function () {
                        this.removeClass("*"), this.off(), this.stop()
                    }, !0), t.ungroup(), t.clear()
                }
            }, {
                key: "clearDomElements",
                value: function (t) {
                    var e = this,
                        i = t.isUpdating,
                        a = this.w.globals.dom.Paper.node;
                    a.parentNode && a.parentNode.parentNode && !i && (a.parentNode.parentNode.style.minHeight = "unset");
                    var s = this.w.globals.dom.baseEl;
                    s && this.ctx.eventList.forEach(function (t) {
                        s.removeEventListener(t, e.ctx.events.documentEvent)
                    });
                    var r = this.w.globals.dom;
                    if (null !== this.ctx.el)
                        for (; this.ctx.el.firstChild;) this.ctx.el.removeChild(this.ctx.el.firstChild);
                    this.killSVG(r.Paper), r.Paper.remove(), r.elWrap = null, r.elGraphical = null, r.elAnnotations = null, r.elLegendWrap = null, r.baseEl = null, r.elGridRect = null, r.elGridRectMask = null, r.elGridRectMarkerMask = null, r.elForecastMask = null, r.elNonForecastMask = null, r.elDefs = null
                }
            }]), e
        }();
    return function () {
        function i(t, e) {
            r(this, i), this.opts = e, (this.ctx = this).w = new W(e).init(), this.el = t, this.w.globals.cuid = E.randomId(), this.w.globals.chartID = this.w.config.chart.id ? E.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Ft(this).initModules(), this.create = E.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this)
        }
        return o(i, [{
            key: "render",
            value: function () {
                var s = this;
                return new Promise(function (t, e) {
                    if (null !== s.el) {
                        void 0 === Apex._chartInstances && (Apex._chartInstances = []), s.w.config.chart.id && Apex._chartInstances.push({
                            id: s.w.globals.chartID,
                            group: s.w.config.chart.group,
                            chart: s
                        }), s.setLocale(s.w.config.chart.defaultLocale);
                        var i = s.w.config.chart.events.beforeMount;
                        "function" == typeof i && i(s, s.w), s.events.fireEvent("beforeMount", [s, s.w]), window.addEventListener("resize", s.windowResizeHandler), window.addResizeListener(s.el.parentNode, s.parentResizeHandler);
                        var a = s.create(s.w.config.series, {});
                        if (!a) return t(s);
                        s.mount(a).then(function () {
                            "function" == typeof s.w.config.chart.events.mounted && s.w.config.chart.events.mounted(s, s.w), s.events.fireEvent("mounted", [s, s.w]), t(a)
                        })["catch"](function (t) {
                            e(t)
                        })
                    } else e(new Error("Element not found"))
                })
            }
        }, {
            key: "create",
            value: function (t, e) {
                var i = this.w;
                new Ft(this).initModules();
                var a = this.w.globals;
                if (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric && new D(i.config).convertCatToNumericXaxis(i.config, this.ctx), null === this.el) return a.animationEnded = !0, null;
                if (this.core.setupElements(), "treemap" === i.config.chart.type && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), 0 === a.svgWidth) return a.animationEnded = !0, null;
                var s = M.checkComboSeries(t);
                a.comboCharts = s.comboCharts, a.comboBarCount = s.comboBarCount;
                var r = t.every(function (t) {
                    return t.data && 0 === t.data.length
                });
                (0 === t.length || r) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new C(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
                var o = this.core.xySettings();
                this.grid.createGridMask();
                var n = this.core.plotChartType(t, o),
                    l = new k(this);
                l.bringForward(), i.config.dataLabels.background.enabled && l.dataLabelsBackground(), this.core.shiftGraphPosition();
                var h = {
                    plot: {
                        left: i.globals.translateX,
                        top: i.globals.translateY,
                        width: i.globals.gridWidth,
                        height: i.globals.gridHeight
                    }
                };
                return {
                    elGraph: n,
                    xyRatios: o,
                    elInner: i.globals.dom.elGraphical,
                    dimensions: h
                }
            }
        }, {
            key: "mount",
            value: function (t) {
                var n = this,
                    l = 0 < arguments.length && void 0 !== t ? arguments[0] : null,
                    h = this,
                    c = h.w;
                return new Promise(function (t, e) {
                    if (null === h.el) return e(new Error("Not enough data to display or target element not found"));
                    (null === l || c.globals.allSeriesCollapsed) && h.series.handleNoData(), "treemap" !== c.config.chart.type && h.axes.drawAxis(c.config.chart.type, l.xyRatios), h.grid = new U(h);
                    var i = h.grid.drawGrid();
                    h.annotations = new v(h), h.annotations.drawImageAnnos(), h.annotations.drawTextAnnos(), "back" === c.config.grid.position && i && c.globals.dom.elGraphical.add(i.el);
                    var a = new j(n.ctx),
                        s = new $(n.ctx);
                    if (null !== i && (a.xAxisLabelCorrections(i.xAxisTickWidth), s.setYAxisTextAlignments(), c.config.yaxis.map(function (t, e) {
                        -1 === c.globals.ignoreYAxisIndexes.indexOf(e) && s.yAxisTitleRotate(e, t.opposite)
                    })), "back" === c.config.annotations.position && (c.globals.dom.Paper.add(c.globals.dom.elAnnotations), h.annotations.drawAxesAnnotations()), Array.isArray(l.elGraph))
                        for (var r = 0; r < l.elGraph.length; r++) c.globals.dom.elGraphical.add(l.elGraph[r]);
                    else c.globals.dom.elGraphical.add(l.elGraph);
                    if ("front" === c.config.grid.position && i && c.globals.dom.elGraphical.add(i.el), "front" === c.config.xaxis.crosshairs.position && h.crosshairs.drawXCrosshairs(), "front" === c.config.yaxis[0].crosshairs.position && h.crosshairs.drawYCrosshairs(), "front" === c.config.annotations.position && (c.globals.dom.Paper.add(c.globals.dom.elAnnotations), h.annotations.drawAxesAnnotations()), !c.globals.noData) {
                        if (c.config.tooltip.enabled && !c.globals.noData && h.w.globals.tooltip.drawTooltip(l.xyRatios), c.globals.axisCharts && (c.globals.isXNumeric || c.config.xaxis.convertedCatToNumeric || c.globals.isTimelineBar)) (c.config.chart.zoom.enabled || c.config.chart.selection && c.config.chart.selection.enabled || c.config.chart.pan && c.config.chart.pan.enabled) && h.zoomPanSelection.init({
                            xyRatios: l.xyRatios
                        });
                        else {
                            var o = c.config.chart.toolbar.tools;
                            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function (t) {
                                o[t] = !1
                            })
                        }
                        c.config.chart.toolbar.show && !c.globals.allSeriesCollapsed && h.toolbar.createToolbar()
                    }
                    0 < c.globals.memory.methodsToExec.length && c.globals.memory.methodsToExec.forEach(function (t) {
                        t.method(t.params, !1, t.context)
                    }), c.globals.axisCharts || c.globals.noData || h.core.resizeNonAxisCharts(), t(h)
                })
            }
        }, {
            key: "destroy",
            value: function () {
                window.removeEventListener("resize", this.windowResizeHandler), window.removeResizeListener(this.el.parentNode, this.parentResizeHandler);
                var i = this.w.config.chart.id;
                i && Apex._chartInstances.forEach(function (t, e) {
                    t.id === E.escapeString(i) && Apex._chartInstances.splice(e, 1)
                }), new Rt(this.ctx).clear({
                    isUpdating: !1
                })
            }
        }, {
            key: "updateOptions",
            value: function (t, e, i, a, s) {
                var r = this,
                    o = 1 < arguments.length && void 0 !== e && arguments[1],
                    n = !(2 < arguments.length && void 0 !== i) || arguments[2],
                    l = !(3 < arguments.length && void 0 !== a) || arguments[3],
                    h = !(4 < arguments.length && void 0 !== s) || arguments[4],
                    c = this.w;
                return c.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map(function (t, e) {
                    return r.updateHelpers._extendSeries(t, e)
                })), this.updateHelpers.revertDefaultAxisMinMax()), t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)), t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), 0 < c.globals.collapsedSeriesIndices.length && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, o, n, l, h)
            }
        }, {
            key: "updateSeries",
            value: function (t, e, i) {
                var a = 0 < arguments.length && void 0 !== t ? arguments[0] : [],
                    s = !(1 < arguments.length && void 0 !== e) || arguments[1],
                    r = !(2 < arguments.length && void 0 !== i) || arguments[2];
                return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, s, r)
            }
        }, {
            key: "appendSeries",
            value: function (t, e, i) {
                var a = !(1 < arguments.length && void 0 !== e) || arguments[1],
                    s = !(2 < arguments.length && void 0 !== i) || arguments[2],
                    r = this.w.config.series.slice();
                return r.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(r, a, s)
            }
        }, {
            key: "appendData",
            value: function (t, e) {
                var i = !(1 < arguments.length && void 0 !== e) || arguments[1],
                    a = this;
                a.w.globals.dataChanged = !0, a.series.getPreviousPaths();
                for (var s = a.w.config.series.slice(), r = 0; r < s.length; r++)
                    if (null !== t[r] && void 0 !== t[r])
                        for (var o = 0; o < t[r].data.length; o++) s[r].data.push(t[r].data[o]);
                return a.w.config.series = s, i && (a.w.globals.initialSeries = E.clone(a.w.config.series)), this.update()
            }
        }, {
            key: "update",
            value: function (a) {
                var s = this;
                return new Promise(function (t, e) {
                    new Rt(s.ctx).clear({
                        isUpdating: !0
                    });
                    var i = s.create(s.w.config.series, a);
                    if (!i) return t(s);
                    s.mount(i).then(function () {
                        "function" == typeof s.w.config.chart.events.updated && s.w.config.chart.events.updated(s, s.w), s.events.fireEvent("updated", [s, s.w]), s.w.globals.isDirty = !0, t(s)
                    })["catch"](function (t) {
                        e(t)
                    })
                })
            }
        }, {
            key: "getSyncedCharts",
            value: function () {
                var t = this.getGroupedCharts(),
                    e = [this];
                return t.length && (e = [], t.forEach(function (t) {
                    e.push(t)
                })), e
            }
        }, {
            key: "getGroupedCharts",
            value: function () {
                var e = this;
                return Apex._chartInstances.filter(function (t) {
                    if (t.group) return !0
                }).map(function (t) {
                    return e.w.config.chart.group === t.group ? t.chart : e
                })
            }
        }, {
            key: "toggleSeries",
            value: function (t) {
                return this.series.toggleSeries(t)
            }
        }, {
            key: "showSeries",
            value: function (t) {
                this.series.showSeries(t)
            }
        }, {
            key: "hideSeries",
            value: function (t) {
                this.series.hideSeries(t)
            }
        }, {
            key: "resetSeries",
            value: function (t, e) {
                var i = !(0 < arguments.length && void 0 !== t) || arguments[0],
                    a = !(1 < arguments.length && void 0 !== e) || arguments[1];
                this.series.resetSeries(i, a)
            }
        }, {
            key: "addEventListener",
            value: function (t, e) {
                this.events.addEventListener(t, e)
            }
        }, {
            key: "removeEventListener",
            value: function (t, e) {
                this.events.removeEventListener(t, e)
            }
        }, {
            key: "addXaxisAnnotation",
            value: function (t, e, i) {
                var a = !(1 < arguments.length && void 0 !== e) || arguments[1],
                    s = 2 < arguments.length && void 0 !== i ? arguments[2] : void 0,
                    r = this;
                s && (r = s), r.annotations.addXaxisAnnotationExternal(t, a, r)
            }
        }, {
            key: "addYaxisAnnotation",
            value: function (t, e, i) {
                var a = !(1 < arguments.length && void 0 !== e) || arguments[1],
                    s = 2 < arguments.length && void 0 !== i ? arguments[2] : void 0,
                    r = this;
                s && (r = s), r.annotations.addYaxisAnnotationExternal(t, a, r)
            }
        }, {
            key: "addPointAnnotation",
            value: function (t, e, i) {
                var a = !(1 < arguments.length && void 0 !== e) || arguments[1],
                    s = 2 < arguments.length && void 0 !== i ? arguments[2] : void 0,
                    r = this;
                s && (r = s), r.annotations.addPointAnnotationExternal(t, a, r)
            }
        }, {
            key: "clearAnnotations",
            value: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? arguments[0] : void 0,
                    i = this;
                e && (i = e), i.annotations.clearAnnotations(i)
            }
        }, {
            key: "removeAnnotation",
            value: function (t, e) {
                var i = 1 < arguments.length && void 0 !== e ? arguments[1] : void 0,
                    a = this;
                i && (a = i), a.annotations.removeAnnotation(a, t)
            }
        }, {
            key: "getChartArea",
            value: function () {
                return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")
            }
        }, {
            key: "getSeriesTotalXRange",
            value: function (t, e) {
                return this.coreUtils.getSeriesTotalsXRange(t, e)
            }
        }, {
            key: "getHighestValueInSeries",
            value: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? arguments[0] : 0;
                return new Z(this.ctx).getMinYMaxY(e).highestY
            }
        }, {
            key: "getLowestValueInSeries",
            value: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? arguments[0] : 0;
                return new Z(this.ctx).getMinYMaxY(e).lowestY
            }
        }, {
            key: "getSeriesTotal",
            value: function () {
                return this.w.globals.seriesTotals
            }
        }, {
            key: "toggleDataPointSelection",
            value: function (t, e) {
                return this.updateHelpers.toggleDataPointSelection(t, e)
            }
        }, {
            key: "zoomX",
            value: function (t, e) {
                this.ctx.toolbar.zoomUpdateOptions(t, e)
            }
        }, {
            key: "setLocale",
            value: function (t) {
                this.localization.setCurrentLocaleValues(t)
            }
        }, {
            key: "dataURI",
            value: function (t) {
                return new _(this.ctx).dataURI(t)
            }
        }, {
            key: "paper",
            value: function () {
                return this.w.globals.dom.Paper
            }
        }, {
            key: "_parentResizeCallback",
            value: function () {
                this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize()
            }
        }, {
            key: "_windowResize",
            value: function () {
                var t = this;
                clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function () {
                    t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.ctx.update()
                }, 150)
            }
        }, {
            key: "_windowResizeHandler",
            value: function () {
                var t = this.w.config.chart.redrawOnWindowResize;
                "function" == typeof t && (t = t()), t && this._windowResize()
            }
        }], [{
            key: "getChartByID",
            value: function (t) {
                var e = E.escapeString(t),
                    i = Apex._chartInstances.filter(function (t) {
                        return t.id === e
                    })[0];
                return i && i.chart
            }
        }, {
            key: "initOnLoad",
            value: function () {
                for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++) new i(t[e], JSON.parse(t[e].getAttribute("data-options"))).render()
            }
        }, {
            key: "exec",
            value: function (t, e) {
                var i = this.getChartByID(t);
                if (i) {
                    i.w.globals.isExecCalled = !0;
                    var a = null;
                    if (-1 !== i.publicMethods.indexOf(e)) {
                        for (var s = arguments.length, r = new Array(2 < s ? s - 2 : 0), o = 2; o < s; o++) r[o - 2] = arguments[o];
                        a = i[e].apply(i, r)
                    }
                    return a
                }
            }
        }, {
            key: "merge",
            value: function (t, e) {
                return E.extend(t, e)
            }
        }]), i
    }()
});