'use strict';
(self.webpackChunkmy_webpage_revamped =
  self.webpackChunkmy_webpage_revamped || []).push([
  [741],
  {
    2086: function (e, r, s) {
      var a = s(4184),
        t = s.n(a),
        o = s(7294),
        n = s(6792),
        i = s(5893);
      const l = o.forwardRef(
        (
          {
            bsPrefix: e,
            size: r,
            vertical: s,
            className: a,
            as: o = 'div',
            ...l
          },
          c
        ) => {
          const d = (0, n.vE)(e, 'btn-group');
          let p = d;
          return (
            s && (p = `${d}-vertical`),
            (0, i.jsx)(o, {
              ...l,
              ref: c,
              className: t()(a, p, r && `${d}-${r}`),
            })
          );
        }
      );
      (l.displayName = 'ButtonGroup'),
        (l.defaultProps = { vertical: !1, role: 'group' }),
        (r.Z = l);
    },
    5147: function (e, r, s) {
      var a = s(4184),
        t = s.n(a),
        o = s(7294),
        n = s(6792),
        i = s(5893);
      const l = o.forwardRef(
        (
          {
            bsPrefix: e,
            className: r,
            striped: s,
            bordered: a,
            borderless: o,
            hover: l,
            size: c,
            variant: d,
            responsive: p,
            ...v
          },
          f
        ) => {
          const u = (0, n.vE)(e, 'table'),
            $ = t()(
              r,
              u,
              d && `${u}-${d}`,
              c && `${u}-${c}`,
              s && `${u}-striped`,
              a && `${u}-bordered`,
              o && `${u}-borderless`,
              l && `${u}-hover`
            ),
            b = (0, i.jsx)('table', { ...v, className: $, ref: f });
          if (p) {
            let e = `${u}-responsive`;
            return (
              'string' == typeof p && (e = `${e}-${p}`),
              (0, i.jsx)('div', { className: e, children: b })
            );
          }
          return b;
        }
      );
      r.Z = l;
    },
  },
]);
