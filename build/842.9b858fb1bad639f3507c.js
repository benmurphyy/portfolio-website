'use strict';
(self.webpackChunkmy_webpage_revamped =
  self.webpackChunkmy_webpage_revamped || []).push([
  [842],
  {
    8981: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
        C: function () {
          return b;
        },
      });
      var o = n(682),
        r = n(3379),
        a = n.n(r),
        s = n(7795),
        i = n.n(s),
        l = n(569),
        c = n.n(l),
        u = n(3565),
        f = n.n(u),
        d = n(9216),
        A = n.n(d),
        p = n(4589),
        h = n.n(p),
        m = n(878),
        y = {};
      (y.styleTagTransform = h()),
        (y.setAttributes = f()),
        (y.insert = c().bind(null, 'head')),
        (y.domAPI = i()),
        (y.insertStyleElement = A()),
        a()(m.Z, y);
      var g,
        C = m.Z && m.Z.locals ? m.Z.locals : void 0,
        v = n(4288),
        w = n(5893);
      function b(e) {
        var t = e.quoteText,
          n = e.quoteOrigin,
          r = e.variant;
        return (void 0 === r ? g.LIGHT : r) === g.DARK
          ? (0, w.jsxs)(o.Z, {
              children: [
                (0, w.jsx)(v.E.h1, { className: C.darkQuote, children: t }),
                (0, w.jsxs)(v.E.h4, {
                  className: C.darkFooter,
                  children: ['- ', n],
                }),
              ],
            })
          : (0, w.jsxs)(o.Z, {
              children: [
                (0, w.jsx)(v.E.h1, { className: C.lightQuote, children: t }),
                (0, w.jsxs)(v.E.h4, {
                  className: C.lightFooter,
                  children: ['- ', n],
                }),
              ],
            });
      }
      !(function (e) {
        (e[(e.DARK = 0)] = 'DARK'), (e[(e.LIGHT = 1)] = 'LIGHT');
      })(g || (g = {}));
    },
    8738: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(7294),
        r = n(6974),
        a = n(3931);
      function s(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ('string' == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var o = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return o >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[o++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          s = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function l(e, t, n) {
        var i = (0, r.s0)(),
          l = (0, r.TH)();
        (0, o.useEffect)(function () {
          var e,
            n = s(a.r);
          try {
            for (n.s(); !(e = n.n()).done; )
              if (e.value.path === l.pathname && t.current) {
                var o = t.current.offsetHeight,
                  r = window.pageYOffset + o;
                window.scrollTo({ top: r, behavior: 'smooth' });
              }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }),
          (0, o.useEffect)(function () {
            var e,
              o,
              r,
              c,
              u = s(a.r);
            try {
              for (u.s(); !(e = u.n()).done; ) {
                var f = e.value;
                f.path === l.pathname &&
                  (console.log(n),
                  console.log(f.name),
                  (o = n.current.get(f.name)),
                  void 0,
                  void 0,
                  (r = -t.current.offsetHeight),
                  (c =
                    o.current.getBoundingClientRect().top +
                    window.pageYOffset +
                    r),
                  window.scrollTo({ top: c, behavior: 'smooth' }),
                  i('/' + l.pathname.split('/')[1], { replace: !0 }));
              }
            } catch (e) {
              u.e(e);
            } finally {
              u.f();
            }
          });
      }
    },
    878: function (e, t, n) {
      var o = n(7537),
        r = n.n(o),
        a = n(3645),
        s = n.n(a),
        i = n(1667),
        l = n.n(i),
        c = new URL(n(8293), n.b),
        u = new URL(n(3392), n.b),
        f = s()(r()),
        d = l()(c),
        A = l()(u);
      f.push([
        e.id,
        '@font-face{font-family:"Open Sans";src:url(' +
          d +
          ')}@font-face{font-family:"Merienda-Bold";src:url(' +
          A +
          ')}.U9Y7UAzKMW0Jx5YJ_jlS,.hy39YanyJ0IMDI6NVHo5,.e8oU63sIMDs3PHz259Tb{text-align:left}.lSnalANoNsdR_Ei5_WLP,.hTXSJbzcMlmwECg4t4wN,.uypnRjipORL4cp4c4s8q{text-align:left}.pWDKCSsmy0I6wBpzQVyN,.uypnRjipORL4cp4c4s8q,.hy39YanyJ0IMDI6NVHo5{color:#212529;text-shadow:1px 1px 10px #dee2e6}.XRV8vyVKUwPnkI6K4VdZ,.hTXSJbzcMlmwECg4t4wN,.e8oU63sIMDs3PHz259Tb{color:#dbd7d2;text-shadow:2px 2px 8px #212529}',
        '',
        {
          version: 3,
          sources: ['webpack://./src/components/AnimatedQuote/styles.scss'],
          names: [],
          mappings:
            'AAAA,WAAW,uBAAuB,CAAC,2CAA+C,CAAC,WAAW,2BAA2B,CAAC,2CAA6C,CAAC,kEAA8B,eAAe,CAAC,kEAAiC,eAAe,CAAC,kEAA6B,aAAa,CAAC,gCAAgC,CAAC,kEAAgC,aAAa,CAAC,+BAA+B',
          sourcesContent: [
            '@font-face{font-family:"Open Sans";src:url("src/assets/fonts/OpenSans-Medium.ttf")}@font-face{font-family:"Merienda-Bold";src:url("src/assets/fonts/Merienda-Bold.ttf")}.quote,.darkQuote,.lightQuote{text-align:left}.footer,.lightFooter,.darkFooter{text-align:left}.dark,.darkFooter,.darkQuote{color:#212529;text-shadow:1px 1px 10px #dee2e6}.light,.lightFooter,.lightQuote{color:#dbd7d2;text-shadow:2px 2px 8px #212529}',
          ],
          sourceRoot: '',
        },
      ]),
        (f.locals = {
          quote: 'U9Y7UAzKMW0Jx5YJ_jlS',
          darkQuote: 'hy39YanyJ0IMDI6NVHo5',
          lightQuote: 'e8oU63sIMDs3PHz259Tb',
          footer: 'lSnalANoNsdR_Ei5_WLP',
          lightFooter: 'hTXSJbzcMlmwECg4t4wN',
          darkFooter: 'uypnRjipORL4cp4c4s8q',
          dark: 'pWDKCSsmy0I6wBpzQVyN',
          light: 'XRV8vyVKUwPnkI6K4VdZ',
        }),
        (t.Z = f);
    },
    172: function (e) {
      e.exports = JSON.parse(
        '{"H":{"G":"The noblest pleasure is the joy of understanding.","R":"Leonardo da Vinci"},"K":{"G":"Tell me and I forget. Teach me and I remember. Involve me and I learn.","R":"Benjamin Franklin"}}'
      );
    },
  },
]);
