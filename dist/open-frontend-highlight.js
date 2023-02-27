"use strict";
(self["webpackChunkopenfrontend_framework"] = self["webpackChunkopenfrontend_framework"] || []).push([["open-frontend-highlight"],{

/***/ "./src/js/components/highlight.js":
/*!****************************************!*\
  !*** ./src/js/components/highlight.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/es/index.js");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (els) {
  els.forEach(function (el) {
    var options = el.dataset.ofHighlight === '' ? {} : {
      language: el.dataset.ofHighlight
    };
    highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"].highlightElement(el, options);
  });
});

/***/ })

}]);