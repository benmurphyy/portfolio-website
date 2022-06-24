'use strict';
(self['webpackChunkmy_webpage_revamped'] =
  self['webpackChunkmy_webpage_revamped'] || []).push([
  [
    'src_components_AnimatedQuote_tsx-src_util_hooks_useScrollToSubpageBasedOnPath_ts-src_assets_d-011c34',
  ],
  {
    /***/ './src/components/AnimatedQuote.tsx':
      /*!******************************************!*\
  !*** ./src/components/AnimatedQuote.tsx ***!
  \******************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AnimatedQuoteVariants: function () {
            return /* binding */ AnimatedQuoteVariants;
          },
          /* harmony export */ default: function () {
            return /* binding */ AnimatedQuote;
          },
          /* harmony export */
        });
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-bootstrap */ './node_modules/react-bootstrap/esm/Container.js'
          );
        /* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @react-spring/web */ './node_modules/@react-spring/web/dist/react-spring-web.esm.js'
          );
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react/jsx-runtime */ './node_modules/react/jsx-runtime.js'
          );

        var AnimatedQuoteVariants;

        (function (AnimatedQuoteVariants) {
          AnimatedQuoteVariants[(AnimatedQuoteVariants['DARK'] = 0)] = 'DARK';
          AnimatedQuoteVariants[(AnimatedQuoteVariants['LIGHT'] = 1)] = 'LIGHT';
        })(AnimatedQuoteVariants || (AnimatedQuoteVariants = {}));

        function AnimatedQuote(_ref) {
          var quoteText = _ref.quoteText,
            quoteOrigin = _ref.quoteOrigin,
            _ref$variant = _ref.variant,
            variant =
              _ref$variant === void 0
                ? AnimatedQuoteVariants.LIGHT
                : _ref$variant;
          var style = (0,
          _react_spring_web__WEBPACK_IMPORTED_MODULE_0__.useSpring)({
            from: {
              opacity: 0,
            },
            opacity: 1,
          });
          return variant === AnimatedQuoteVariants.DARK
            ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                react_bootstrap__WEBPACK_IMPORTED_MODULE_2__['default'],
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _react_spring_web__WEBPACK_IMPORTED_MODULE_0__.animated
                        .h1,
                      {
                        style: style,
                        className: 'fw-bold text-dark text-shadow',
                        children: quoteText,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                      _react_spring_web__WEBPACK_IMPORTED_MODULE_0__.animated
                        .h2,
                      {
                        style: style,
                        className: 'text-dark text-shadow',
                        children: ['- ', quoteOrigin],
                      }
                    ),
                  ],
                }
              )
            : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                react_bootstrap__WEBPACK_IMPORTED_MODULE_2__['default'],
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _react_spring_web__WEBPACK_IMPORTED_MODULE_0__.animated
                        .h1,
                      {
                        style: style,
                        className: 'fw-bold text-light text-shadow',
                        children: quoteText,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                      _react_spring_web__WEBPACK_IMPORTED_MODULE_0__.animated
                        .h2,
                      {
                        style: style,
                        className: 'text-light',
                        children: ['- ', quoteOrigin],
                      }
                    ),
                  ],
                }
              );
        }

        /***/
      },

    /***/ './src/util/hooks/useScrollToSubpageBasedOnPath.ts':
      /*!*********************************************************!*\
  !*** ./src/util/hooks/useScrollToSubpageBasedOnPath.ts ***!
  \*********************************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: function () {
            return /* binding */ useScrollToSubpageBasedOnPath;
          },
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-router-dom */ './node_modules/react-router/index.js'
          );
        /* harmony import */ var src_assets_data_quick_links_json__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! src/assets/data/quick_links.json */ './src/assets/data/quick_links.json'
          );
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== 'undefined' && o[Symbol.iterator]) ||
            o['@@iterator'];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === 'number')
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function useScrollToSubpageBasedOnPath(
          subNavbarRef,
          mainNavbarRef,
          subPageRefs
        ) {
          function scrollTo(sectionRef) {
            if (!subNavbarRef.current || !sectionRef.current) {
              return;
            }

            var yOffset = -subNavbarRef.current.offsetHeight;
            var y =
              sectionRef.current.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({
              top: y,
              behavior: 'smooth',
            });
          }

          var navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
          var currentPath = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            var _iterator = _createForOfIteratorHelper(
                src_assets_data_quick_links_json__WEBPACK_IMPORTED_MODULE_1__
              ),
              _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var quickLink = _step.value;

                if (
                  quickLink.name === currentPath.pathname &&
                  mainNavbarRef.current
                ) {
                  var yOffset = mainNavbarRef.current.offsetHeight;
                  var y = window.pageYOffset + yOffset;
                  window.scrollTo({
                    top: y,
                    behavior: 'smooth',
                  });
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (subNavbarRef.current) {
              var _iterator2 = _createForOfIteratorHelper(
                  src_assets_data_quick_links_json__WEBPACK_IMPORTED_MODULE_1__
                ),
                _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var quickLink = _step2.value;

                  if (quickLink.name === currentPath.pathname) {
                    scrollTo(subPageRefs.current.get(quickLink.name));
                    navigate('/' + currentPath.pathname.split('/')[1], {
                      replace: true,
                    });
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          });
        }

        /***/
      },

    /***/ './src/assets/data/quotes.json':
      /*!*************************************!*\
  !*** ./src/assets/data/quotes.json ***!
  \*************************************/
      /***/ function (module) {
        module.exports = JSON.parse(
          '{"knowledgePage":{"quoteText":"The noblest pleasure is the joy of understanding.","quoteOrigin":"Leonardo da Vinci"},"experiencePage":{"quoteText":"Tell me and I forget. Teach me and I remember. Involve me and I learn.","quoteOrigin":"Benjamin Franklin"}}'
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfQW5pbWF0ZWRRdW90ZV90c3gtc3JjX3V0aWxfaG9va3NfdXNlU2Nyb2xsVG9TdWJwYWdlQmFzZWRPblBhdGhfdHMtc3JjX2Fzc2V0c19kLTAxMWMzNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVPLElBQUtHLHFCQUFaOztBQUFBLFdBQVlBLHFCQUFaLEVBQWlDO0VBQy9CQTtFQUNBQTtBQUNELENBSEQsRUFBWUEscUJBQXFCLEtBQXJCQSxxQkFBcUIsTUFBakM7O0FBYWMsU0FBVUMsYUFBVixPQUEyRztFQUFBLElBQWxGQyxTQUFrRixRQUFsRkEsU0FBa0Y7RUFBQSxJQUF2RUMsV0FBdUUsUUFBdkVBLFdBQXVFO0VBQUEsd0JBQTFEQyxPQUEwRDtFQUFBLElBQTFEQSxPQUEwRCw2QkFBaERKLHFCQUFxQixDQUFDSyxLQUEwQjtFQUNySCxJQUFNQyxLQUFLLEdBQUdQLDREQUFTLENBQUM7SUFDcEJRLElBQUksRUFBRTtNQUNGQyxPQUFPLEVBQUU7SUFEUCxDQURjO0lBSXBCQSxPQUFPLEVBQUU7RUFKVyxDQUFELENBQXZCO0VBT0EsT0FBT0osT0FBTyxLQUFLSixxQkFBcUIsQ0FBQ1MsSUFBbEMsR0FDSCx3REFBQyx1REFBRDtJQUFBLFdBQ0ksdURBQUMsMERBQUQ7TUFBYSxLQUFLLEVBQUVILEtBQXBCO01BQTJCLFNBQVMsRUFBQywrQkFBckM7TUFBQSxVQUNLSjtJQURMLEVBREosRUFJSSx3REFBQywwREFBRDtNQUFhLEtBQUssRUFBRUksS0FBcEI7TUFBMkIsU0FBUyxFQUFDLHVCQUFyQztNQUFBLGlCQUNPSCxXQURQO0lBQUEsRUFKSjtFQUFBLEVBREcsR0FXQyx3REFBQyx1REFBRDtJQUFBLFdBQ0ksdURBQUMsMERBQUQ7TUFBYSxLQUFLLEVBQUVHLEtBQXBCO01BQTJCLFNBQVMsRUFBQyxnQ0FBckM7TUFBQSxVQUNLSjtJQURMLEVBREosRUFJSSx3REFBQywwREFBRDtNQUFhLEtBQUssRUFBRUksS0FBcEI7TUFBMkIsU0FBUyxFQUFDLFlBQXJDO01BQUEsaUJBQ09ILFdBRFA7SUFBQSxFQUpKO0VBQUEsRUFYUjtBQW9CSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQ0E7QUFDQTtBQVFjLFNBQVVXLDZCQUFWLENBQ1pDLFlBRFksRUFFWkMsYUFGWSxFQUdaQyxXQUhZLEVBR2tEO0VBRzlELFNBQVNDLFFBQVQsQ0FBa0JDLFVBQWxCLEVBQXVEO0lBRXJELElBQUksQ0FBQ0osWUFBWSxDQUFDSyxPQUFkLElBQXlCLENBQUNELFVBQVUsQ0FBQ0MsT0FBekMsRUFBa0Q7TUFDaEQ7SUFDRDs7SUFDRCxJQUFNQyxPQUFPLEdBQUcsQ0FBQ04sWUFBWSxDQUFDSyxPQUFiLENBQXFCRSxZQUF0QztJQUNBLElBQU1DLENBQUMsR0FDTEosVUFBVSxDQUFDQyxPQUFYLENBQW1CSSxxQkFBbkIsR0FBMkNDLEdBQTNDLEdBQ0FDLE1BQU0sQ0FBQ0MsV0FEUCxHQUVBTixPQUhGO0lBSUFLLE1BQU0sQ0FBQ1IsUUFBUCxDQUFnQjtNQUFFTyxHQUFHLEVBQUVGLENBQVA7TUFBVUssUUFBUSxFQUFFO0lBQXBCLENBQWhCO0VBQ0Q7O0VBRUQsSUFBTUMsUUFBUSxHQUFHakIsNkRBQVcsRUFBNUI7RUFDQSxJQUFNa0IsV0FBVyxHQUFHbkIsNkRBQVcsRUFBL0I7RUFHQUQsZ0RBQVMsQ0FBQyxZQUFLO0lBQUEsMkNBQ1dHLDZEQURYO0lBQUE7O0lBQUE7TUFDYixvREFBb0M7UUFBQSxJQUF6QmtCLFNBQXlCOztRQUNsQyxJQUFJQSxTQUFTLENBQUNDLElBQVYsS0FBbUJGLFdBQVcsQ0FBQ0csUUFBL0IsSUFBMkNqQixhQUFhLENBQUNJLE9BQTdELEVBQXNFO1VBQ3BFLElBQU1DLE9BQU8sR0FBR0wsYUFBYSxDQUFDSSxPQUFkLENBQXNCRSxZQUF0QztVQUNBLElBQU1DLENBQUMsR0FBR0csTUFBTSxDQUFDQyxXQUFQLEdBQXFCTixPQUEvQjtVQUNBSyxNQUFNLENBQUNSLFFBQVAsQ0FBZ0I7WUFBRU8sR0FBRyxFQUFFRixDQUFQO1lBQVVLLFFBQVEsRUFBRTtVQUFwQixDQUFoQjtRQUNEO01BQ0Y7SUFQWTtNQUFBO0lBQUE7TUFBQTtJQUFBO0VBUWQsQ0FSUSxDQUFUO0VBWUFsQixnREFBUyxDQUFDLFlBQUs7SUFDYixJQUFJSyxZQUFZLENBQUNLLE9BQWpCLEVBQTBCO01BQUEsNENBRUFQLDZEQUZBO01BQUE7O01BQUE7UUFFeEIsdURBQW9DO1VBQUEsSUFBekJrQixTQUF5Qjs7VUFDbEMsSUFBSUEsU0FBUyxDQUFDQyxJQUFWLEtBQW1CRixXQUFXLENBQUNHLFFBQW5DLEVBQTZDO1lBQzNDZixRQUFRLENBQUNELFdBQVcsQ0FBQ0csT0FBWixDQUFxQmMsR0FBckIsQ0FBeUJILFNBQVMsQ0FBQ0MsSUFBbkMsQ0FBRCxDQUFSO1lBRUFILFFBQVEsQ0FBQyxNQUFNQyxXQUFXLENBQUNHLFFBQVosQ0FBcUJFLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQVAsRUFBMkM7Y0FBRUMsT0FBTyxFQUFFO1lBQVgsQ0FBM0MsQ0FBUjtVQUNEO1FBQ0Y7TUFSdUI7UUFBQTtNQUFBO1FBQUE7TUFBQTtJQVN6QjtFQUNGLENBWFEsQ0FBVDtBQVlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkUXVvdGUudHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvdXRpbC9ob29rcy91c2VTY3JvbGxUb1N1YnBhZ2VCYXNlZE9uUGF0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVNwcmluZyB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvd2ViJztcblxuZXhwb3J0IGVudW0gQW5pbWF0ZWRRdW90ZVZhcmlhbnRzIHtcbiAgREFSSyxcbiAgTElHSFRcbn1cblxuaW50ZXJmYWNlIEFuaW1hdGVkUXVvdGVQcm9wcyB7XG4gIHF1b3RlVGV4dDogc3RyaW5nLFxuICBxdW90ZU9yaWdpbjogc3RyaW5nLFxuICB2YXJpYW50PzogQW5pbWF0ZWRRdW90ZVZhcmlhbnRzLFxufVxuXG4vLyB0d28gdmFyaWFudHMgLSBkYXJrIGFuZCBsaWdodCBmb3IgZm9udCBjb2xvdXJcbi8vIGRlZmF1bHQgaXMgbGlnaHRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkUXVvdGUoe3F1b3RlVGV4dCwgcXVvdGVPcmlnaW4sIHZhcmlhbnQgPSBBbmltYXRlZFF1b3RlVmFyaWFudHMuTElHSFR9OiBBbmltYXRlZFF1b3RlUHJvcHMpIHtcbiAgICBjb25zdCBzdHlsZSA9IHVzZVNwcmluZyh7XG4gICAgICAgIGZyb206IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhbnQgPT09IEFuaW1hdGVkUXVvdGVWYXJpYW50cy5EQVJLID8gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGFuaW1hdGVkLmgxIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWRhcmsgdGV4dC1zaGFkb3dcIj5cbiAgICAgICAgICAgICAgICB7cXVvdGVUZXh0fVxuICAgICAgICAgICAgPC9hbmltYXRlZC5oMT5cbiAgICAgICAgICAgIDxhbmltYXRlZC5oMiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cInRleHQtZGFyayB0ZXh0LXNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIC0ge3F1b3RlT3JpZ2lufVxuICAgICAgICAgICAgPC9hbmltYXRlZC5oMj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKSA6XG4gICAgICAgIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGFuaW1hdGVkLmgxIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWxpZ2h0IHRleHQtc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtxdW90ZVRleHR9XG4gICAgICAgICAgICAgICAgPC9hbmltYXRlZC5oMT5cbiAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuaDIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIC0ge3F1b3RlT3JpZ2lufVxuICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuaDI+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbn0iLCJpbXBvcnQgeyBSZWZPYmplY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHF1aWNrTGlua3MgZnJvbSAnc3JjL2Fzc2V0cy9kYXRhL3F1aWNrX2xpbmtzLmpzb24nO1xuXG4vKipcbiAqIGN1c3RvbSByZWFjdCBob29rIHRvIGhhbmRsZSB0aGUgc2Nyb2xsaW5nIHRvIGEgc3BlY2lmaWMgc3VicGFnZSBvbiBhIHBhZ2UgYmFzZWQgb24gcGF0aCBuYW1lLiBVc2VkIGZvciBxdWlja2xpbmsgbmF2aWdhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gc3ViTmF2YmFyUmVmICByZWYgdG8gc3VibmF2YmFyXG4gKiBAcGFyYW0geyp9IG1haW5OYXZiYXJSZWYgIHJlZiB0byBtYWluIG5hdiBiYXJcbiAqIEBwYXJhbSB7Kn0gc3ViUGFnZVJlZnMgIHJlZiB0aGF0IGNvbnRhaW5zIGEgbWFwIG9mIGFsbCBzdWJwYWdlIG5hbWVzIHRvIHRoZWlyIG93biByZWZzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNjcm9sbFRvU3VicGFnZUJhc2VkT25QYXRoKFxuICBzdWJOYXZiYXJSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4sXG4gIG1haW5OYXZiYXJSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4sXG4gIHN1YlBhZ2VSZWZzOiBSZWZPYmplY3Q8TWFwPHN0cmluZywgUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pj4+XG4pIHtcbiAgLy9zY3JvbGwgdG8gc2VjdGlvbiBvZiBwYWdlIHVzaW5nIGl0cyByZWYsIHRha2luZyBpbnRvIGFjY291bnQgdGhlIGhlaWdodCBvZiB0aGUgc3VibmF2YmFyLCBzbyBzY3JvbGwgY29ycmVjdCBhbW91bnRcbiAgZnVuY3Rpb24gc2Nyb2xsVG8oc2VjdGlvblJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pikge1xuICAgIC8vZG9udCBleGVjdXRlIGlmIGFueSBvZiB0aGUgY3VycmVudCBvYmplY3RzIGluIHRoZSByZWYgYXJlIG51bGxcbiAgICBpZiAoIXN1Yk5hdmJhclJlZi5jdXJyZW50IHx8ICFzZWN0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeU9mZnNldCA9IC1zdWJOYXZiYXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgeSA9XG4gICAgICBzZWN0aW9uUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICtcbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCArXG4gICAgICB5T2Zmc2V0O1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogeSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9XG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBjdXJyZW50UGF0aCA9IHVzZUxvY2F0aW9uKCk7XG4gIC8vIGNoZWNrIHRoZSB1cmwgcGF0aCwgaWYgdGhlIHF1aWNrbGluayBpcyBlcXVhbCwgdGhlbiBzY3JvbGwgZG93biBwYXN0IHRoZSBtYWluIG5hdmJhciwgc28gdGhhdCBpdCB3aWxsIG5vIGxvbmdlciBieSB2aXNpYmxlLFxuICAvLyB0aHVzIG1ha2luZyB0aGUgc3VibmF2YmFyIHZpc2libGUgc28gdGhhdCBjYW4gdXNlIGl0cyBoZWlnaHQgb24gc2NyZWVuIHRvIGNvbnRyb2wgdGhlIGV4YWN0IHNjcm9sbCBhbW91bnQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9yIChjb25zdCBxdWlja0xpbmsgb2YgcXVpY2tMaW5rcykge1xuICAgICAgaWYgKHF1aWNrTGluay5uYW1lID09PSBjdXJyZW50UGF0aC5wYXRobmFtZSAmJiBtYWluTmF2YmFyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgeU9mZnNldCA9IG1haW5OYXZiYXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHkgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB5T2Zmc2V0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIGNvbmRpdGlvbmFsIGVmZmVjdCBvbmx5IGlmIHN1Ym5hdmJhciBpcyBhbHJlYWR5IGFjdGl2ZSwgdGhpcyBpcyBzbyB0aGUgcmVmIGZvciBpdCBleGlzdHMsIGFuZCB3ZSBjYW4gc2Nyb2xsIHRvIHRoZSBzdWJwYWdlIGluXG4gIC8vIHNjcm9sbFRvIGZ1bmN0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN1Yk5hdmJhclJlZi5jdXJyZW50KSB7XG4gICAgICAvL3Njcm9sbCB0byB0aGUgc3VicGFnZVxuICAgICAgZm9yIChjb25zdCBxdWlja0xpbmsgb2YgcXVpY2tMaW5rcykge1xuICAgICAgICBpZiAocXVpY2tMaW5rLm5hbWUgPT09IGN1cnJlbnRQYXRoLnBhdGhuYW1lKSB7XG4gICAgICAgICAgc2Nyb2xsVG8oc3ViUGFnZVJlZnMuY3VycmVudCEuZ2V0KHF1aWNrTGluay5uYW1lKSEpO1xuICAgICAgICAgIC8vMm5kIGFyZyBpcyByZXBsYWNlIHRydWUgc28gYXMgdG8gcmVwbGFjZSB0aGF0IGV4dHJhIC9wYXRobmFtZSBhZnRlciB0aGUgYWN0dWFsIHBhdGhuYW1lLCBzbyBiYWNrdHJhY2sgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICAgICAgICBuYXZpZ2F0ZSgnLycgKyBjdXJyZW50UGF0aC5wYXRobmFtZS5zcGxpdCgnLycpWzFdLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImFuaW1hdGVkIiwidXNlU3ByaW5nIiwiQW5pbWF0ZWRRdW90ZVZhcmlhbnRzIiwiQW5pbWF0ZWRRdW90ZSIsInF1b3RlVGV4dCIsInF1b3RlT3JpZ2luIiwidmFyaWFudCIsIkxJR0hUIiwic3R5bGUiLCJmcm9tIiwib3BhY2l0eSIsIkRBUksiLCJ1c2VFZmZlY3QiLCJ1c2VMb2NhdGlvbiIsInVzZU5hdmlnYXRlIiwicXVpY2tMaW5rcyIsInVzZVNjcm9sbFRvU3VicGFnZUJhc2VkT25QYXRoIiwic3ViTmF2YmFyUmVmIiwibWFpbk5hdmJhclJlZiIsInN1YlBhZ2VSZWZzIiwic2Nyb2xsVG8iLCJzZWN0aW9uUmVmIiwiY3VycmVudCIsInlPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJ5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJiZWhhdmlvciIsIm5hdmlnYXRlIiwiY3VycmVudFBhdGgiLCJxdWlja0xpbmsiLCJuYW1lIiwicGF0aG5hbWUiLCJnZXQiLCJzcGxpdCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9
