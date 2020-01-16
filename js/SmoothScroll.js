(function () {
    function B() {
        if (!C && document.body) {
            C = !0; var a = document.body, b = document.documentElement, d = window.innerHeight, c = a.scrollHeight; g = 0 <= document.compatMode.indexOf("CSS") ? b : a; l = a; f.keyboardSupport && window.addEventListener("keydown", J, !1); if (top != self) D = !0; else if (c > d && (a.offsetHeight <= d || b.offsetHeight <= d)) {
                var e = document.createElement("div"); e.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + g.scrollHeight + "px"; document.body.appendChild(e); var h; u = function () {
                    h ||
                    (h = setTimeout(function () { e.style.height = "0"; e.style.height = g.scrollHeight + "px"; h = null }, 500))
                }; setTimeout(u, 10); window.addEventListener("resize", u, !1); y = new Y(u); y.observe(a, { attributes: !0, childList: !0, characterData: !1 }); g.offsetHeight <= d && (d = document.createElement("div"), d.style.clear = "both", a.appendChild(d))
            } f.fixedBackground || (a.style.backgroundAttachment = "scroll", b.style.backgroundAttachment = "scroll")
        }
    } function K(a, b, d) {
        Z(b, d); if (1 != f.accelerationMax) {
            var c = Date.now() - E; c < f.accelerationDelta &&
                (c = (1 + 50 / c) / 2, 1 < c && (c = Math.min(c, f.accelerationMax), b *= c, d *= c)); E = Date.now()
        } r.push({ x: b, y: d, lastX: 0 > b ? .99 : -.99, lastY: 0 > d ? .99 : -.99, start: Date.now() }); if (!F) {
            var e = a === document.body, h = function (c) {
                c = Date.now(); for (var g = 0, k = 0, l = 0; l < r.length; l++) { var n = r[l], p = c - n.start, m = p >= f.animationTime, q = m ? 1 : p / f.animationTime; f.pulseAlgorithm && (p = q, 1 <= p ? q = 1 : 0 >= p ? q = 0 : (1 == f.pulseNormalize && (f.pulseNormalize /= L(1)), q = L(p))); p = n.x * q - n.lastX >> 0; q = n.y * q - n.lastY >> 0; g += p; k += q; n.lastX += p; n.lastY += q; m && (r.splice(l, 1), l--) } e ?
                    window.scrollBy(g, k) : (g && (a.scrollLeft += g), k && (a.scrollTop += k)); b || d || (r = []); r.length ? M(h, a, 1E3 / f.frameRate + 1) : F = !1
            }; M(h, a, 0); F = !0
        }
    } function N(a) {
        C || B(); var b = a.target, d = O(b); if (!d || a.defaultPrevented || a.ctrlKey || m(l, "embed") || m(b, "embed") && /\.pdf/i.test(b.src) || m(l, "object")) return !0; var b = -a.wheelDeltaX || a.deltaX || 0, c = -a.wheelDeltaY || a.deltaY || 0; aa && (a.wheelDeltaX && v(a.wheelDeltaX, 120) && (b = -120 * (a.wheelDeltaX / Math.abs(a.wheelDeltaX))), a.wheelDeltaY && v(a.wheelDeltaY, 120) && (c = -120 * (a.wheelDeltaY /
            Math.abs(a.wheelDeltaY)))); b || c || (c = -a.wheelDelta || 0); 1 === a.deltaMode && (b *= 40, c *= 40); if (!f.touchpadSupport && ba(c)) return !0; 1.2 < Math.abs(b) && (b *= f.stepSize / 120); 1.2 < Math.abs(c) && (c *= f.stepSize / 120); K(d, b, c); a.preventDefault(); P()
    } function J(a) {
        var b = a.target, d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== h.spacebar; document.contains(l) || (l = document.activeElement); var c = /^(button|submit|radio|checkbox|file|color|image)$/i, e; if (!(e = /^(textarea|select|embed|object)$/i.test(b.nodeName) || m(b,
            "input") && !c.test(b.type) || m(l, "video"))) { e = a.target; var g = !1; if (-1 != document.URL.indexOf("www.youtube.com/watch")) { do if (g = e.classList && e.classList.contains("html5-video-controls")) break; while (e = e.parentNode) } e = g } if (e || b.isContentEditable || a.defaultPrevented || d || (m(b, "button") || m(b, "input") && c.test(b.type)) && a.keyCode === h.spacebar) return !0; e = b = 0; d = O(l); c = d.clientHeight; d == document.body && (c = window.innerHeight); switch (a.keyCode) {
                case h.up: e = -f.arrowScroll; break; case h.down: e = f.arrowScroll; break; case h.spacebar: e =
                    a.shiftKey ? 1 : -1; e = -e * c * .9; break; case h.pageup: e = .9 * -c; break; case h.pagedown: e = .9 * c; break; case h.home: e = -d.scrollTop; break; case h.end: c = d.scrollHeight - d.scrollTop - c; e = 0 < c ? c + 10 : 0; break; case h.left: b = -f.arrowScroll; break; case h.right: b = f.arrowScroll; break; default: return !0
            }K(d, b, e); a.preventDefault(); P()
    } function Q(a) { l = a.target } function P() { clearTimeout(R); R = setInterval(function () { G = {} }, 1E3) } function H(a, b) { for (var d = a.length; d--;)G[S(a[d])] = b; return b } function O(a) {
        var b = [], d = document.body, c = g.scrollHeight;
        do { var e = G[S(a)]; if (e) return H(b, e); b.push(a); if (c === a.scrollHeight) { if (e = T(g) && T(d) || U(g), D && g.clientHeight + 10 < g.scrollHeight || !D && e) return H(b, ca()) } else if (a.clientHeight + 10 < a.scrollHeight && U(a)) return H(b, a) } while (a = a.parentElement)
    } function T(a) { return "hidden" !== getComputedStyle(a, "").getPropertyValue("overflow-y") } function U(a) { a = getComputedStyle(a, "").getPropertyValue("overflow-y"); return "scroll" === a || "auto" === a } function m(a, b) { return (a.nodeName || "").toLowerCase() === b.toLowerCase() } function Z(a,
        b) { a = 0 < a ? 1 : -1; b = 0 < b ? 1 : -1; if (z.x !== a || z.y !== b) z.x = a, z.y = b, r = [], E = 0 } function ba(a) { if (a) return k.length || (k = [a, a, a]), a = Math.abs(a), k.push(a), k.shift(), clearTimeout(V), V = setTimeout(function () { window.localStorage && (localStorage.SS_deltaBuffer = k.join(",")) }, 1E3), !W(120) && !W(100) } function v(a, b) { return Math.floor(a / b) == a / b } function W(a) { return v(k[0], a) && v(k[1], a) && v(k[2], a) } function L(a) { var b; a *= f.pulseScale; 1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), --a, a = 1 - Math.exp(-a), b += a * (1 - b)); return b * f.pulseNormalize }
    function w(a) { for (var b in a) X.hasOwnProperty(b) && (f[b] = a[b]) } var X = { frameRate: 150, animationTime: 400, stepSize: 100, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: !1, fixedBackground: !0, excluded: "" }, f = X, D = !1, z = { x: 0, y: 0 }, C = !1, g = document.documentElement, l, y, u, k = [], aa = /^Mac/.test(navigator.platform), h = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 }, r = [], F = !1, E = Date.now(), S = function () {
        var a =
            0; return function (b) { return b.uniqueID || (b.uniqueID = a++) }
    }(), G = {}, R, V; window.localStorage && localStorage.SS_deltaBuffer && (k = localStorage.SS_deltaBuffer.split(",")); var M = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a, b, d) { window.setTimeout(a, d || 1E3 / 60) } }(), Y = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, ca = function () {
        var a; return function () {
            if (!a) {
                var b = document.createElement("div");
                b.style.cssText = "height:10000px;width:1px;"; document.body.appendChild(b); var d = document.body.scrollTop; window.scrollBy(0, 3); a = document.body.scrollTop != d ? document.body : document.documentElement; window.scrollBy(0, -3); document.body.removeChild(b)
            } return a
        }
    }(), t = window.navigator.userAgent, A = /Edge/.test(t), I = /chrome/i.test(t) && !A, A = /safari/i.test(t) && !A, t = /mobile/i.test(t), I = (I || A) && !t, x; "onwheel" in document.createElement("div") ? x = "wheel" : "onmousewheel" in document.createElement("div") && (x = "mousewheel");
    x && I && (window.addEventListener(x, N, !1), window.addEventListener("mousedown", Q, !1), window.addEventListener("load", B, !1)); w.destroy = function () { y && y.disconnect(); window.removeEventListener(x, N, !1); window.removeEventListener("mousedown", Q, !1); window.removeEventListener("keydown", J, !1); window.removeEventListener("resize", u, !1); window.removeEventListener("load", B, !1) }; window.SmoothScrollOptions && w(window.SmoothScrollOptions); "function" === typeof define && define.amd ? define(function () { return w }) : "object" == typeof exports ?
        module.exports = w : window.SmoothScroll = w
})();
