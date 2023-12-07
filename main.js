/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ \"./src/pages.js\");\n\n\nfunction getOrderedPageRenderFunctions() {\n  return [\n    _pages__WEBPACK_IMPORTED_MODULE_0__.renderHomePage,\n    _pages__WEBPACK_IMPORTED_MODULE_0__.renderMenuPage,\n    _pages__WEBPACK_IMPORTED_MODULE_0__.renderAdvantagesPage,\n    _pages__WEBPACK_IMPORTED_MODULE_0__.renderCreditsPage,\n  ];\n}\n\nfunction createEventListeners(elementSelector, functionArray, eventType) {\n  const elementList = document.querySelectorAll(elementSelector);\n\n  elementList.forEach((element, index) => {\n    element.addEventListener(eventType, () => {\n      functionArray[index](index);\n\n      createPageRenderEventListeners();\n    });\n  });\n}\n\n// For some reasons event listeners in navbar.js are removed when code is compiled\nfunction createPageRenderEventListeners() {\n  const pageRenderFunctions = getOrderedPageRenderFunctions();\n\n  createEventListeners(\".nav-link\", pageRenderFunctions, \"click\");\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  _pages__WEBPACK_IMPORTED_MODULE_0__.renderHomePage();\n\n  createPageRenderEventListeners();\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAdvantagesPage: () => (/* reexport safe */ _pages_advantages__WEBPACK_IMPORTED_MODULE_2__.renderAdvantagesPage),\n/* harmony export */   renderCreditsPage: () => (/* reexport safe */ _pages_credits__WEBPACK_IMPORTED_MODULE_3__.renderCreditsPage),\n/* harmony export */   renderHomePage: () => (/* reexport safe */ _pages_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage),\n/* harmony export */   renderMenuPage: () => (/* reexport safe */ _pages_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_advantages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/advantages */ \"./src/pages/advantages.js\");\n/* harmony import */ var _pages_credits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/credits */ \"./src/pages/credits.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages.js?");

/***/ }),

/***/ "./src/pages/advantages.js":
/*!*********************************!*\
  !*** ./src/pages/advantages.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAdvantagesPage: () => (/* binding */ renderAdvantagesPage)\n/* harmony export */ });\n/* harmony import */ var _src_images_advantages_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/advantages_background.jpg */ \"./src/images/advantages_background.jpg\");\n/* harmony import */ var _src_images_advantages_friends_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/images/advantages/friends.png */ \"./src/images/advantages/friends.png\");\n/* harmony import */ var _src_images_advantages_engagement_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/images/advantages/engagement.png */ \"./src/images/advantages/engagement.png\");\n/* harmony import */ var _src_images_advantages_fast_delivery_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/images/advantages/fast-delivery.png */ \"./src/images/advantages/fast-delivery.png\");\n/* harmony import */ var _src_images_advantages_vegetables_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/images/advantages/vegetables.png */ \"./src/images/advantages/vegetables.png\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar */ \"./src/pages/navbar.js\");\n\n\n\n\n\n\n\nfunction renderAdvantagesPage() {\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_5__.renderNavbar)();\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_5__.highlightNavLink)(2);\n\n  _navbar__WEBPACK_IMPORTED_MODULE_5__.content.innerHTML += `\n\n  <div style=\"background-image: radial-gradient(rgba(255,255,255,1) 70%, transparent), \n    url(${_src_images_advantages_background_jpg__WEBPACK_IMPORTED_MODULE_0__}); padding-top: 4rem;\">\n    <div class=\"container-lg text-center py-3\">\n      <h1 class=\"mb-4 fw-bold\">Our advantages</h1>\n\n      <div class=\"row align-items-center mb-5\">\n        <div class=\"col-md-4 order-md-2 mb-3 mb-md-0\">\n          <img src=\"${_src_images_advantages_friends_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"\" style=\"width: 150px;\">\n        </div>\n\n        <div class=\"col-md-8 order-md-1 text-md-start\">\n          <h2 class=\"fw-bold\" style=\"color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;\">Friendliness</h2>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo\n            reprehenderit delectus\n            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem\n            perspiciatis\n            quo mollitia, aspernatur dicta molestias.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row align-items-center mb-5\">\n        <div class=\"col-md-4 order-md-1 mb-3 mb-md-0\">\n          <img src=\"${_src_images_advantages_engagement_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"\" style=\"width: 150px;\">\n        </div>\n\n        <div class=\"col-md-8 order-md-2 text-md-start\">\n          <h2 class=\"fw-bold\" style=\"color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;\">Responsibility</h2>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo\n            reprehenderit delectus\n            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem\n            perspiciatis\n            quo mollitia, aspernatur dicta molestias.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row align-items-center mb-5\">\n        <div class=\"col-md-4 order-md-2 mb-3 mb-md-0\">\n          <img src=\"${_src_images_advantages_fast_delivery_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"\" style=\"width: 150px;\">\n        </div>\n\n        <div class=\"col-md-8 order-md-1 text-md-start\">\n          <h2 class=\"fw-bold\" style=\"color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;\">Fast delivery</h2>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo\n            reprehenderit delectus\n            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem\n            perspiciatis\n            quo mollitia, aspernatur dicta molestias.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row align-items-center\">\n        <div class=\"col-md-4 order-md-1 mb-3 mb-md-0\">\n          <img src=\"${_src_images_advantages_vegetables_png__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"\" style=\"width: 150px;\">\n        </div>\n\n        <div class=\"col-md-8 order-md-2 text-md-start\">\n          <h2 class=\"fw-bold\" style=\"color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;\">Fresh ingredients\n          </h2>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo\n            reprehenderit delectus\n            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem\n            perspiciatis\n            quo mollitia, aspernatur dicta molestias.\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  `;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/advantages.js?");

/***/ }),

/***/ "./src/pages/credits.js":
/*!******************************!*\
  !*** ./src/pages/credits.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCreditsPage: () => (/* binding */ renderCreditsPage)\n/* harmony export */ });\n/* harmony import */ var _src_images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _src_images_hero_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/images/hero_background.jpg */ \"./src/images/hero_background.jpg\");\n/* harmony import */ var _src_images_menu_diabolo_pizzapieces_avif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/images/menu/diabolo-pizzapieces.avif */ \"./src/images/menu/diabolo-pizzapieces.avif\");\n/* harmony import */ var _src_images_menu_havaiska_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/images/menu/havaiska-300dpi-min.avif */ \"./src/images/menu/havaiska-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_manhatten_slice_collageweb_min_avif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/images/menu/manhatten-slice-collageweb-min.avif */ \"./src/images/menu/manhatten-slice-collageweb-min.avif\");\n/* harmony import */ var _src_images_menu_piat_syrov_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/images/menu/piat-syrov-300dpi-min.avif */ \"./src/images/menu/piat-syrov-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_royal_slice_retoch_min_min_avif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/images/menu/royal-slice-retoch-min-min.avif */ \"./src/images/menu/royal-slice-retoch-min-min.avif\");\n/* harmony import */ var _src_images_menu_spaisy_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/images/menu/spaisy-300dpi-min.avif */ \"./src/images/menu/spaisy-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_tekhas_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../src/images/menu/tekhas-300dpi-min.avif */ \"./src/images/menu/tekhas-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_vetchina_i_griby_avif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../src/images/menu/vetchina-i-griby.avif */ \"./src/images/menu/vetchina-i-griby.avif\");\n/* harmony import */ var _src_images_advantages_background_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../src/images/advantages_background.jpg */ \"./src/images/advantages_background.jpg\");\n/* harmony import */ var _src_images_advantages_friends_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../src/images/advantages/friends.png */ \"./src/images/advantages/friends.png\");\n/* harmony import */ var _src_images_advantages_engagement_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../src/images/advantages/engagement.png */ \"./src/images/advantages/engagement.png\");\n/* harmony import */ var _src_images_advantages_fast_delivery_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../src/images/advantages/fast-delivery.png */ \"./src/images/advantages/fast-delivery.png\");\n/* harmony import */ var _src_images_advantages_vegetables_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../src/images/advantages/vegetables.png */ \"./src/images/advantages/vegetables.png\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar */ \"./src/pages/navbar.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction renderCreditsPage() {\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_15__.renderNavbar)();\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_15__.highlightNavLink)(3);\n\n  _navbar__WEBPACK_IMPORTED_MODULE_15__.content.innerHTML += `\n\n  <div style=\"padding-top: 4rem;\"> \n    <div class=\"container-lg py-3\">\n      <h1 class=\"mb-4 fw-bold text-center\">Credits</h1>\n\n      <ol class=\"list-group list-group-numbered\">\n        <li class=\"list-group-item list-group-item-action d-flex\">\n          <div class=\"d-flex justify-content-between align-items-center flex-grow-1 ms-3\">\n            <div class=\"d-flex flex-column me-3\">\n              <h6 class=\"fw-bold\">Logo icon</h6>\n              <p>Created by <a href=\"https://www.flaticon.com/free-icons/pizza\" title=\"pizza icons\">Freepik -\n                  Flaticon</a></p>\n            </div>\n            <img src=\"${_src_images_logo_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n          </div>\n        </li>\n\n        <li class=\"list-group-item list-group-item-action d-flex\">\n          <div class=\"d-flex justify-content-between align-items-center flex-grow-1 ms-3\">\n            <div class=\"d-flex flex-column me-3\">\n              <h6 class=\"fw-bold\">Home page background</h6>\n              <p>Created by <a\n                  href=\"https://www.freepik.com/free-vector/hand-drawn-pizza-pattern-background_73940775.htm\">Freepik</a>\n              </p>\n            </div>\n            <img src=\"${_src_images_hero_background_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n          </div>\n        </li>\n\n        <li class=\"list-group-item list-group-item-action d-flex\">\n          <div class=\"d-flex justify-content-between flex-grow-1 ms-3\">\n            <div class=\"d-flex flex-column me-3 flex-grow-1\">\n              <h6 class=\"fw-bold\">Pizza menu images</h6>\n              <p>Created by <a href=\"https://dominos.ua/uk/kyiv/\">Dominos.ua</a></p>\n            </div>\n            <div class=\"d-flex flex-wrap justify-content-end justify-content-lg-between align-items-center flex-grow-1\">\n              <img src=\"${_src_images_menu_diabolo_pizzapieces_avif__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              <img src=\"${_src_images_menu_havaiska_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              <img src=\"${_src_images_menu_manhatten_slice_collageweb_min_avif__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"\"\n                style=\"width: 3.25rem; height: 3.25rem;\">\n              <img src=\"${_src_images_menu_piat_syrov_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              <img src=\"${_src_images_menu_royal_slice_retoch_min_min_avif__WEBPACK_IMPORTED_MODULE_6__}\" alt=\"\"\n                style=\"width: 3.25rem; height: 3.25rem;\">\n              <img src=\"${_src_images_menu_spaisy_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              <img src=\"${_src_images_menu_tekhas_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_8__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              <img src=\"${_src_images_menu_vetchina_i_griby_avif__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item list-group-item-action d-flex\">\n          <div class=\"d-flex flex-column justify-content-between flex-grow-1 ms-3\">\n            <h6 class=\"fw-bold\">Advantages page</h6>\n\n            <div class=\"d-flex flex-column\">\n\n              <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                <p class=\"m-0 me-3\">Background created by <a href=\"https://www.freepik.com/free-vector/hand-drawn-food-pattern-background_72159777.htm#query=pizza%20background%20handdrown&position=1&from_view=search&track=ais&uuid=6be1bb20-a4af-46b4-8e8e-d432db9d1cf5\">pikisuperstar</a></p>\n                <img src=\"${_src_images_advantages_background_jpg__WEBPACK_IMPORTED_MODULE_10__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                <p class=\"m-0 me-3\">Friends icon created by by <a href=\"https://www.flaticon.com/free-icons/friends\"\n                    title=\"friends icons\">Freepik - Flaticon</a></p>\n                <img src=\"${_src_images_advantages_friends_png__WEBPACK_IMPORTED_MODULE_11__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                <p class=\"m-0 me-3\">Engagement icon created by <a\n                    href=\"https://www.flaticon.com/free-icons/responsibility\" title=\"responsibility icons\">Jagat\n                    Icon - Flaticon</a></p>\n                <img src=\"${_src_images_advantages_engagement_png__WEBPACK_IMPORTED_MODULE_12__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                <p class=\"m-0 me-3\">Fast Delivery icon created by <a href=\"https://www.flaticon.com/free-icons/delivery\"\n                    title=\"delivery icons\">Freepik -\n                    Flaticon</a></p>\n                <img src=\"${_src_images_advantages_fast_delivery_png__WEBPACK_IMPORTED_MODULE_13__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              </div>\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <p class=\"m-0 me-3\">Vegetables icon created by <a href=\"https://www.flaticon.com/free-icons/ingredient\"\n                    title=\"ingredient icons\">Eucalyp\n                    - Flaticon</a></p>\n                <img src=\"${_src_images_advantages_vegetables_png__WEBPACK_IMPORTED_MODULE_14__}\" alt=\"\" style=\"width: 3.25rem; height: 3.25rem;\">\n              </div>\n            </div>\n          </div>\n        </li>\n      </ol>\n    </div>\n  </div>\n  `;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/credits.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* harmony import */ var _src_images_hero_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/hero_background.jpg */ \"./src/images/hero_background.jpg\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/pages/navbar.js\");\n\n\n\nfunction renderHomePage() {\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNavbar)();\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.highlightNavLink)(0);\n\n  _navbar__WEBPACK_IMPORTED_MODULE_1__.content.innerHTML += `\n\n  <div style=\"\n        position: relative;\n        background-image: \n        linear-gradient(to right, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.4) 50%, transparent 55%), \n        url(${_src_images_hero_background_jpg__WEBPACK_IMPORTED_MODULE_0__});\n        background-position: 50%;\n        background-size: cover;\n        height: 100vh;\n        padding-top: 4rem;\">\n    <div class=\"container-lg h-100 text-white overflow-hidden\">\n      <div class=\"row align-content-center h-100 g-2\">\n        <h6 class=\"col-7 col-md-6 col-lg-5 display-6 fw-bold\">Delicious pizza for <span\n            style=\"color: hsl(35, 100%, 50%);\">every</span> taste\n        </h6>\n\n        <div class=\"w-100\"></div>\n\n        <p class=\"col-7 col-md-6 col-lg-5 fs-6\">Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n          Voluptatibus quis expedita aut\n          iste magni est, culpa esse velit.</p>\n\n        <div class=\"w-100\"></div>\n\n        <div class=\"col-7 col-md-6 col-lg-5\">\n          <a href=\"#\" class=\"btn btn-light\">Order Now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  `;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage)\n/* harmony export */ });\n/* harmony import */ var _src_images_menu_diabolo_pizzapieces_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/menu/diabolo-pizzapieces.avif */ \"./src/images/menu/diabolo-pizzapieces.avif\");\n/* harmony import */ var _src_images_menu_havaiska_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/images/menu/havaiska-300dpi-min.avif */ \"./src/images/menu/havaiska-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_manhatten_slice_collageweb_min_avif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/images/menu/manhatten-slice-collageweb-min.avif */ \"./src/images/menu/manhatten-slice-collageweb-min.avif\");\n/* harmony import */ var _src_images_menu_piat_syrov_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/images/menu/piat-syrov-300dpi-min.avif */ \"./src/images/menu/piat-syrov-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_royal_slice_retoch_min_min_avif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/images/menu/royal-slice-retoch-min-min.avif */ \"./src/images/menu/royal-slice-retoch-min-min.avif\");\n/* harmony import */ var _src_images_menu_spaisy_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/images/menu/spaisy-300dpi-min.avif */ \"./src/images/menu/spaisy-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_tekhas_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/images/menu/tekhas-300dpi-min.avif */ \"./src/images/menu/tekhas-300dpi-min.avif\");\n/* harmony import */ var _src_images_menu_vetchina_i_griby_avif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/images/menu/vetchina-i-griby.avif */ \"./src/images/menu/vetchina-i-griby.avif\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar */ \"./src/pages/navbar.js\");\n\n\n\n\n\n\n\n\n\n\nfunction renderMenuPage() {\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_8__.renderNavbar)();\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_8__.highlightNavLink)(1);\n\n  _navbar__WEBPACK_IMPORTED_MODULE_8__.content.innerHTML += `\n \n  <div style=\"padding-top: 4rem;\"> \n    <div class=\"container-lg text-center py-3\">\n      <h1 class=\"mb-4 fw-bold\">Menu</h1>\n\n      <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3\">\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_diabolo_pizzapieces_avif__WEBPACK_IMPORTED_MODULE_0__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Carbonara\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$14.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_havaiska_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_1__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Hawaii\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$15.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_manhatten_slice_collageweb_min_avif__WEBPACK_IMPORTED_MODULE_2__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Manhattan\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$19.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_piat_syrov_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_3__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Five Cheeses\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$15.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_royal_slice_retoch_min_min_avif__WEBPACK_IMPORTED_MODULE_4__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Royal Cheeseburger\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$18.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_spaisy_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_5__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Spicy\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$15.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_tekhas_300dpi_min_avif__WEBPACK_IMPORTED_MODULE_6__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Texas\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$19.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card h-100\">\n            <img src=\"${_src_images_menu_vetchina_i_griby_avif__WEBPACK_IMPORTED_MODULE_7__}\" class=\"card-image-top\"></img>\n\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-center align-items-center flex-grow-1\">\n                <h5 class=\"card-title mb-3 fw-bold\">\n                  Pizza Ham and Mushrooms\n                </h5>\n              </div>\n\n              <p class=\"card-text text-start mb-3\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              </p>\n\n              <div class=\"d-flex align-items-center justify-content-around\">\n                <span class=\"fw-bold\">$14.99</span>\n                <a href=\"#\" class=\"btn btn-dark w-50\">Order</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>`;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/navbar.js":
/*!*****************************!*\
  !*** ./src/pages/navbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   highlightNavLink: () => (/* binding */ highlightNavLink),\n/* harmony export */   renderNavbar: () => (/* binding */ renderNavbar)\n/* harmony export */ });\n/* harmony import */ var _src_images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/logo.png */ \"./src/images/logo.png\");\n\nconst content = document.getElementById(\"content\");\n\nfunction renderNavbar() {\n  content.innerHTML = `\n\n  <nav class=\"navbar navbar-expand-lg fixed-top bg-dark\" data-bs-theme=\"dark\">\n    <div class=\"container-xxl\">\n      <button class=\"navbar-toggler\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a href=\"#\" class=\"navbar-brand fw-bold\">\n        <img src=\"${_src_images_logo_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Logo\" style=\"width: 50px;\">\n        Pizza Shop\n      </a>\n      <div class=\"row collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n        <nav class=\"navbar-nav nav-fill p-0\">\n          <a href=\"#\" class=\"offset-lg-4 nav-link\" aria-current=\"\">Home</a>\n          <a href=\"#\" class=\"nav-link\" aria-current=\"\">Menu</a>\n          <a href=\"#\" class=\"nav-link\" aria-current=\"\">Our advantages</a>\n          <a href=\"#\" class=\"nav-link\" aria-current=\"\">Credits</a>\n        </nav>\n      </div>\n    </div>\n  </nav>\n  `;\n}\n\nfunction deactivateElements(elementList) {\n  elementList.forEach((element) => {\n    element.classList.remove(\"active\");\n\n    if (element.attributes[\"aria-current\"]) {\n      element.setAttribute(\"aria-current\", \"\");\n    }\n  });\n}\n\nfunction activateElement(elementList, elementIndex) {\n  const targetElement = elementList[elementIndex];\n\n  targetElement.classList.add(\"active\");\n\n  if (targetElement.attributes[\"aria-current\"]) {\n    targetElement.setAttribute(\"aria-current\", \"page\");\n  }\n}\n\nfunction createHighlightFunction(elementsSelector) {\n  function highlightElement(elementIndex) {\n    const elementList = document.querySelectorAll(elementsSelector);\n\n    deactivateElements(elementList);\n    activateElement(elementList, elementIndex);\n  }\n\n  return highlightElement;\n}\n\nconst highlightNavLink = createHighlightFunction(\".nav-link\");\n\n// function highlightNavLink(navLinkIndex) {\n//   const navLinks = document.querySelectorAll(\".nav-link\");\n\n//   (function clearActiveNavLinkAttributes() {\n//     navLinks.forEach((navLink) => {\n//       navLink.classList.remove(\"active\");\n//       navLink.setAttribute(\"aria-current\", \"\");\n//     });\n//   })();\n\n//   (function addActiveNavLinkAttributes() {\n//     navLinks[navLinkIndex].classList.add(\"active\");\n//     navLinks[navLinkIndex].setAttribute(\"aria-current\", \"page\");\n//   })();\n// }\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/navbar.js?");

/***/ }),

/***/ "./src/images/advantages/engagement.png":
/*!**********************************************!*\
  !*** ./src/images/advantages/engagement.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/760b698f3b91b4949b74.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/advantages/engagement.png?");

/***/ }),

/***/ "./src/images/advantages/fast-delivery.png":
/*!*************************************************!*\
  !*** ./src/images/advantages/fast-delivery.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/0fa20c5c5966863e1d96.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/advantages/fast-delivery.png?");

/***/ }),

/***/ "./src/images/advantages/friends.png":
/*!*******************************************!*\
  !*** ./src/images/advantages/friends.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/8fb56cdcc2a09a2383a9.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/advantages/friends.png?");

/***/ }),

/***/ "./src/images/advantages/vegetables.png":
/*!**********************************************!*\
  !*** ./src/images/advantages/vegetables.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/f3daa34f55ef78ce7a2f.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/advantages/vegetables.png?");

/***/ }),

/***/ "./src/images/advantages_background.jpg":
/*!**********************************************!*\
  !*** ./src/images/advantages_background.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/e8797c9985617909070f.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/advantages_background.jpg?");

/***/ }),

/***/ "./src/images/hero_background.jpg":
/*!****************************************!*\
  !*** ./src/images/hero_background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/2e6c7132d152cfec2cb3.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/hero_background.jpg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/70bc53e96558752bbb72.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/menu/diabolo-pizzapieces.avif":
/*!**************************************************!*\
  !*** ./src/images/menu/diabolo-pizzapieces.avif ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/c4336a6bb436781a5ebc.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/diabolo-pizzapieces.avif?");

/***/ }),

/***/ "./src/images/menu/havaiska-300dpi-min.avif":
/*!**************************************************!*\
  !*** ./src/images/menu/havaiska-300dpi-min.avif ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/592bd70074a192f1f505.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/havaiska-300dpi-min.avif?");

/***/ }),

/***/ "./src/images/menu/manhatten-slice-collageweb-min.avif":
/*!*************************************************************!*\
  !*** ./src/images/menu/manhatten-slice-collageweb-min.avif ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/dc29c8a18a42c34becf0.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/manhatten-slice-collageweb-min.avif?");

/***/ }),

/***/ "./src/images/menu/piat-syrov-300dpi-min.avif":
/*!****************************************************!*\
  !*** ./src/images/menu/piat-syrov-300dpi-min.avif ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ea3779ac13d38f4f35d4.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/piat-syrov-300dpi-min.avif?");

/***/ }),

/***/ "./src/images/menu/royal-slice-retoch-min-min.avif":
/*!*********************************************************!*\
  !*** ./src/images/menu/royal-slice-retoch-min-min.avif ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/30284e681e5ffdb1b6d3.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/royal-slice-retoch-min-min.avif?");

/***/ }),

/***/ "./src/images/menu/spaisy-300dpi-min.avif":
/*!************************************************!*\
  !*** ./src/images/menu/spaisy-300dpi-min.avif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/285f9f63165bc4b93433.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/spaisy-300dpi-min.avif?");

/***/ }),

/***/ "./src/images/menu/tekhas-300dpi-min.avif":
/*!************************************************!*\
  !*** ./src/images/menu/tekhas-300dpi-min.avif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/7bbe22833e9429a730a1.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/tekhas-300dpi-min.avif?");

/***/ }),

/***/ "./src/images/menu/vetchina-i-griby.avif":
/*!***********************************************!*\
  !*** ./src/images/menu/vetchina-i-griby.avif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/b4e9c852da3b64842d64.avif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/vetchina-i-griby.avif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;