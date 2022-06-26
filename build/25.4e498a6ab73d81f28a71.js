'use strict';
(self.webpackChunkmy_webpage_revamped =
  self.webpackChunkmy_webpage_revamped || []).push([
  [25],
  {
    6025: function (e, r, a) {
      a.d(r, {
        Z: function () {
          return j;
        },
      });
      var s = a(4184),
        d = a.n(s),
        t = a(7294),
        c = a(6792),
        n = a(4680),
        o = a(9602),
        i = a(5893);
      const l = t.forwardRef(
        ({ bsPrefix: e, className: r, variant: a, as: s = 'img', ...t }, n) => {
          const o = (0, c.vE)(e, 'card-img');
          return (0, i.jsx)(s, {
            ref: n,
            className: d()(a ? `${o}-${a}` : o, r),
            ...t,
          });
        }
      );
      l.displayName = 'CardImg';
      var m = l,
        f = a(9059);
      const b = t.forwardRef(
        ({ bsPrefix: e, className: r, as: a = 'div', ...s }, n) => {
          const o = (0, c.vE)(e, 'card-header'),
            l = (0, t.useMemo)(() => ({ cardHeaderBsPrefix: o }), [o]);
          return (0, i.jsx)(f.Z.Provider, {
            value: l,
            children: (0, i.jsx)(a, { ref: n, ...s, className: d()(r, o) }),
          });
        }
      );
      b.displayName = 'CardHeader';
      var p = b;
      const v = (0, o.Z)('h5'),
        u = (0, o.Z)('h6'),
        x = (0, n.Z)('card-body'),
        g = (0, n.Z)('card-title', { Component: v }),
        y = (0, n.Z)('card-subtitle', { Component: u }),
        Z = (0, n.Z)('card-link', { Component: 'a' }),
        h = (0, n.Z)('card-text', { Component: 'p' }),
        C = (0, n.Z)('card-footer'),
        N = (0, n.Z)('card-img-overlay'),
        w = t.forwardRef(
          (
            {
              bsPrefix: e,
              className: r,
              bg: a,
              text: s,
              border: t,
              body: n,
              children: o,
              as: l = 'div',
              ...m
            },
            f
          ) => {
            const b = (0, c.vE)(e, 'card');
            return (0, i.jsx)(l, {
              ref: f,
              ...m,
              className: d()(
                r,
                b,
                a && `bg-${a}`,
                s && `text-${s}`,
                t && `border-${t}`
              ),
              children: n ? (0, i.jsx)(x, { children: o }) : o,
            });
          }
        );
      (w.displayName = 'Card'), (w.defaultProps = { body: !1 });
      var j = Object.assign(w, {
        Img: m,
        Title: g,
        Subtitle: y,
        Body: x,
        Link: Z,
        Text: h,
        Header: p,
        Footer: C,
        ImgOverlay: N,
      });
    },
  },
]);
