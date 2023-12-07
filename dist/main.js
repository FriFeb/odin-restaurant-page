/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAdvantagesPage: () => (/* reexport safe */ _pages_advantages__WEBPACK_IMPORTED_MODULE_2__.renderAdvantagesPage),
/* harmony export */   renderCreditsPage: () => (/* reexport safe */ _pages_credits__WEBPACK_IMPORTED_MODULE_3__.renderCreditsPage),
/* harmony export */   renderHomePage: () => (/* reexport safe */ _pages_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage),
/* harmony export */   renderMenuPage: () => (/* reexport safe */ _pages_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_advantages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/advantages */ "./src/pages/advantages.js");
/* harmony import */ var _pages_credits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/credits */ "./src/pages/credits.js");






/***/ }),

/***/ "./src/pages/advantages.js":
/*!*********************************!*\
  !*** ./src/pages/advantages.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAdvantagesPage: () => (/* binding */ renderAdvantagesPage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/pages/navbar.js");


function renderAdvantagesPage() {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNavbar)();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.highlightNavLink)(2);

  _navbar__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML += `

  <div style="background-image: radial-gradient(rgba(255,255,255,1) 70%, transparent), 
    url(/src/images/advantages_background.jpg); padding-top: 4rem;">
    <div class="container-lg text-center py-3">
      <h1 class="mb-4 fw-bold">Our advantages</h1>

      <div class="row align-items-center mb-5">
        <div class="col-md-4 order-md-2 mb-3 mb-md-0">
          <img src="/src/images/advantages/friends.png" alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-1 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Friendliness</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

      <div class="row align-items-center mb-5">
        <div class="col-md-4 order-md-1 mb-3 mb-md-0">
          <img src="/src/images/advantages/engagement.png" alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-2 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Responsibility</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

      <div class="row align-items-center mb-5">
        <div class="col-md-4 order-md-2 mb-3 mb-md-0">
          <img src="/src/images/advantages/fast-delivery.png" alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-1 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Fast delivery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-md-4 order-md-1 mb-3 mb-md-0">
          <img src="/src/images/advantages/vegetables.png " alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-2 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Fresh ingredients
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

    </div>
  </div>
  `;
}


/***/ }),

/***/ "./src/pages/credits.js":
/*!******************************!*\
  !*** ./src/pages/credits.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCreditsPage: () => (/* binding */ renderCreditsPage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/pages/navbar.js");


function renderCreditsPage() {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNavbar)();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.highlightNavLink)(3);

  _navbar__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML += `

  <div style="padding-top: 4rem;"> 
    <div class="container-lg py-3">
      <h1 class="mb-4 fw-bold text-center">Credits</h1>

      <ol class="list-group list-group-numbered">
        <li class="list-group-item list-group-item-action d-flex">
          <div class="d-flex justify-content-between align-items-center flex-grow-1 ms-3">
            <div class="d-flex flex-column me-3">
              <h6 class="fw-bold">Logo icon</h6>
              <p>Created by <a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Freepik -
                  Flaticon</a></p>
            </div>
            <img src="/src/images/logo.png" alt="" style="width: 3.25rem; height: 3.25rem;">
          </div>
        </li>

        <li class="list-group-item list-group-item-action d-flex">
          <div class="d-flex justify-content-between align-items-center flex-grow-1 ms-3">
            <div class="d-flex flex-column me-3">
              <h6 class="fw-bold">Home section background</h6>
              <p>Created by <a
                  href="https://www.freepik.com/free-vector/hand-drawn-pizza-pattern-background_73940775.htm">Freepik</a>
              </p>
            </div>
            <img src="/src/images/hero_background.jpg" alt="" style="width: 3.25rem; height: 3.25rem;">
          </div>
        </li>

        <li class="list-group-item list-group-item-action d-flex">
          <div class="d-flex justify-content-between flex-grow-1 ms-3">
            <div class="d-flex flex-column me-3 flex-grow-1">
              <h6 class="fw-bold">Pizza menu images</h6>
              <p>Created by <a href="https://dominos.ua/uk/kyiv/">Dominos.ua</a></p>
            </div>
            <div class="d-flex flex-wrap justify-content-end justify-content-lg-between align-items-center flex-grow-1">
              <img src="/src/images/menu/diabolo-pizzapieces.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="/src/images/menu/havaiska-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="/src/images/menu/manhatten-slice-collageweb-min.avif" alt=""
                style="width: 3.25rem; height: 3.25rem;">
              <img src="/src/images/menu/piat-syrov-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="/src/images/menu/royal-slice-retoch-min-min.avif" alt=""
                style="width: 3.25rem; height: 3.25rem;">
              <img src="/src/images/menu/spaisy-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="/src/images/menu/tekhas-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="/src/images/menu/vetchina-i-griby.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
            </div>
          </div>
        </li>

        <li class="list-group-item list-group-item-action d-flex">
          <div class="d-flex flex-column justify-content-between flex-grow-1 ms-3">
            <h6 class="fw-bold">Advantages icons</h6>

            <div class="d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="m-0 me-3">Friends icon created by by <a href="https://www.flaticon.com/free-icons/friends"
                    title="friends icons">Freepik - Flaticon</a></p>
                <img src="/src/images/advantages/friends.png" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="m-0 me-3">Engagement icon created by <a
                    href="https://www.flaticon.com/free-icons/responsibility" title="responsibility icons">Jagat
                    Icon - Flaticon</a></p>
                <img src="/src/images/advantages/engagement.png" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="m-0 me-3">Fast Delivery icon created by <a href="https://www.flaticon.com/free-icons/delivery"
                    title="delivery icons">Freepik -
                    Flaticon</a></p>
                <img src="/src/images/advantages/fast-delivery.png" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="m-0 me-3">Vegetables icon created by <a href="https://www.flaticon.com/free-icons/ingredient"
                    title="ingredient icons">Eucalyp
                    - Flaticon</a></p>
                <img src="/src/images/advantages/vegetables.png" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
  `;
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/pages/navbar.js");


function renderHomePage() {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNavbar)();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.highlightNavLink)(0);

  _navbar__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML += `

  <div style="
        position: relative;
        background-image: 
        linear-gradient(to right, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.4) 50%, transparent 55%), 
        url(/src/images/hero_background.jpg);
        background-position: 50%;
        background-size: cover;
        height: 100vh;
        padding-top: 4rem;">
    <div class="container-lg h-100 text-white overflow-hidden">
      <div class="row align-content-center h-100 g-2">
        <h6 class="col-7 col-md-6 col-lg-5 display-6 fw-bold">Delicious pizza for <span
            style="color: hsl(35, 100%, 50%);">every</span> taste
        </h6>

        <div class="w-100"></div>

        <p class="col-7 col-md-6 col-lg-5 fs-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus quis expedita aut
          iste magni est, culpa esse velit.</p>

        <div class="w-100"></div>

        <div class="col-7 col-md-6 col-lg-5">
          <a href="#" class="btn btn-light">Order Now</a>
        </div>
      </div>
    </div>
  </div>
  `;
}


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/pages/navbar.js");


function renderMenuPage() {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNavbar)();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.highlightNavLink)(1);

  _navbar__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML += `
 
  <div style="padding-top: 4rem;"> 
    <div class="container-lg text-center py-3">
      <h1 class="mb-4 fw-bold">Menu</h1>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/diabolo-pizzapieces.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Carbonara
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$14.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/havaiska-300dpi-min.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Hawaii
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$15.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/manhatten-slice-collageweb-min.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Manhattan
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$19.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/piat-syrov-300dpi-min.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Five Cheeses
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$15.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/royal-slice-retoch-min-min.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Royal Cheeseburger
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$18.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/spaisy-300dpi-min.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Spicy
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$15.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/tekhas-300dpi-min.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Texas
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$19.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/src/images/menu/vetchina-i-griby.avif" class="card-image-top"></img>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center flex-grow-1">
                <h5 class="card-title mb-3 fw-bold">
                  Pizza Ham and Mushrooms
                </h5>
              </div>

              <p class="card-text text-start mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div class="d-flex align-items-center justify-content-around">
                <span class="fw-bold">$14.99</span>
                <a href="#" class="btn btn-dark w-50">Order</a>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>`;
}


/***/ }),

/***/ "./src/pages/navbar.js":
/*!*****************************!*\
  !*** ./src/pages/navbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   highlightNavLink: () => (/* binding */ highlightNavLink),
/* harmony export */   renderNavbar: () => (/* binding */ renderNavbar)
/* harmony export */ });
const content = document.getElementById("content");

function renderNavbar() {
  content.innerHTML = `

  <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
    <div class="container-xxl">
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="#" class="navbar-brand fw-bold">
        <img src="/src/images/logo.png" alt="Logo" style="width: 50px;">
        Pizza Shop
      </a>
      <div class="row collapse navbar-collapse justify-content-end" id="navbarNav">
        <nav class="navbar-nav nav-fill p-0">
          <a href="#" class="offset-lg-4 nav-link" aria-current="">Home</a>
          <a href="#" class="nav-link" aria-current="">Menu</a>
          <a href="#" class="nav-link" aria-current="">Our advantages</a>
          <a href="#" class="nav-link" aria-current="">Credits</a>
        </nav>
      </div>
    </div>
  </nav>
  `;
}

function deactivateElements(elementList) {
  elementList.forEach((element) => {
    element.classList.remove("active");

    if (element.attributes["aria-current"]) {
      element.setAttribute("aria-current", "");
    }
  });
}

function activateElement(elementList, elementIndex) {
  const targetElement = elementList[elementIndex];

  targetElement.classList.add("active");

  if (targetElement.attributes["aria-current"]) {
    targetElement.setAttribute("aria-current", "page");
  }
}

function createHighlightFunction(elementsSelector) {
  function highlightElement(elementIndex) {
    const elementList = document.querySelectorAll(elementsSelector);

    deactivateElements(elementList);
    activateElement(elementList, elementIndex);
  }

  return highlightElement;
}

const highlightNavLink = createHighlightFunction(".nav-link");

// function highlightNavLink(navLinkIndex) {
//   const navLinks = document.querySelectorAll(".nav-link");

//   (function clearActiveNavLinkAttributes() {
//     navLinks.forEach((navLink) => {
//       navLink.classList.remove("active");
//       navLink.setAttribute("aria-current", "");
//     });
//   })();

//   (function addActiveNavLinkAttributes() {
//     navLinks[navLinkIndex].classList.add("active");
//     navLinks[navLinkIndex].setAttribute("aria-current", "page");
//   })();
// }


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/pages.js");


function getOrderedPageRenderFunctions() {
  return [
    _pages__WEBPACK_IMPORTED_MODULE_0__.renderHomePage,
    _pages__WEBPACK_IMPORTED_MODULE_0__.renderMenuPage,
    _pages__WEBPACK_IMPORTED_MODULE_0__.renderAdvantagesPage,
    _pages__WEBPACK_IMPORTED_MODULE_0__.renderCreditsPage,
  ];
}

function createEventListeners(elementSelector, functionArray, eventType) {
  const elementList = document.querySelectorAll(elementSelector);

  elementList.forEach((element, index) => {
    element.addEventListener(eventType, () => {
      functionArray[index](index);

      createPageRenderEventListeners();
    });
  });
}

// For some reasons event listeners in navbar.js are removed when code is compiled
function createPageRenderEventListeners() {
  const pageRenderFunctions = getOrderedPageRenderFunctions();

  createEventListeners(".nav-link", pageRenderFunctions, "click");
}

document.addEventListener("DOMContentLoaded", () => {
  _pages__WEBPACK_IMPORTED_MODULE_0__.renderHomePage();

  createPageRenderEventListeners();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDQTtBQUNZO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZTs7QUFFNUQ7QUFDUCxFQUFFLHFEQUFZO0FBQ2QsRUFBRSx5REFBZ0I7O0FBRWxCLEVBQUUsNENBQU87O0FBRVQ7QUFDQSxnREFBZ0Qsa0JBQWtCO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjs7QUFFQTtBQUNBLGdFQUFnRSw2QkFBNkI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQSxnRUFBZ0UsNkJBQTZCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGOztBQUVBO0FBQ0EsZ0VBQWdFLDZCQUE2QjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Rjs7QUFFQTtBQUNBLGdFQUFnRSw2QkFBNkI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRm1FOztBQUU1RDtBQUNQLEVBQUUscURBQVk7QUFDZCxFQUFFLHlEQUFnQjs7QUFFbEIsRUFBRSw0Q0FBTzs7QUFFVCxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLGdCQUFnQjtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsZ0JBQWdCO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBaUcsZ0JBQWdCO0FBQ2pILGlHQUFpRyxnQkFBZ0I7QUFDakg7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELG1HQUFtRyxnQkFBZ0I7QUFDbkg7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELCtGQUErRixnQkFBZ0I7QUFDL0csK0ZBQStGLGdCQUFnQjtBQUMvRyw4RkFBOEYsZ0JBQWdCO0FBQzlHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsZ0JBQWdCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsZ0JBQWdCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csZ0JBQWdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsZ0JBQWdCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVGbUU7O0FBRTVEO0FBQ1AsRUFBRSxxREFBWTtBQUNkLEVBQUUseURBQWdCOztBQUVsQixFQUFFLDRDQUFPOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENtRTs7QUFFNUQ7QUFDUCxFQUFFLHFEQUFZO0FBQ2QsRUFBRSx5REFBZ0I7O0FBRWxCLEVBQUUsNENBQU87QUFDVDtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOTzs7QUFFQTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7Ozs7OztVQzFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQztBQUNBO0FBQ0EsSUFBSSxrREFBb0I7QUFDeEIsSUFBSSxrREFBb0I7QUFDeEIsSUFBSSx3REFBMEI7QUFDOUIsSUFBSSxxREFBdUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGtEQUFvQjs7QUFFdEI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWR2YW50YWdlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jcmVkaXRzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyByZW5kZXJIb21lUGFnZSB9IGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcbmV4cG9ydCB7IHJlbmRlck1lbnVQYWdlIH0gZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuZXhwb3J0IHsgcmVuZGVyQWR2YW50YWdlc1BhZ2UgfSBmcm9tIFwiLi9wYWdlcy9hZHZhbnRhZ2VzXCI7XG5leHBvcnQgeyByZW5kZXJDcmVkaXRzUGFnZSB9IGZyb20gXCIuL3BhZ2VzL2NyZWRpdHNcIjtcbiIsImltcG9ydCB7IGNvbnRlbnQsIHJlbmRlck5hdmJhciwgaGlnaGxpZ2h0TmF2TGluayB9IGZyb20gXCIuL25hdmJhclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWR2YW50YWdlc1BhZ2UoKSB7XG4gIHJlbmRlck5hdmJhcigpO1xuICBoaWdobGlnaHROYXZMaW5rKDIpO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MICs9IGBcblxuICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMSkgNzAlLCB0cmFuc3BhcmVudCksIFxuICAgIHVybCgvc3JjL2ltYWdlcy9hZHZhbnRhZ2VzX2JhY2tncm91bmQuanBnKTsgcGFkZGluZy10b3A6IDRyZW07XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1sZyB0ZXh0LWNlbnRlciBweS0zXCI+XG4gICAgICA8aDEgY2xhc3M9XCJtYi00IGZ3LWJvbGRcIj5PdXIgYWR2YW50YWdlczwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IG9yZGVyLW1kLTIgbWItMyBtYi1tZC0wXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9hZHZhbnRhZ2VzL2ZyaWVuZHMucG5nXCIgYWx0PVwiXCIgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBvcmRlci1tZC0xIHRleHQtbWQtc3RhcnRcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJmdy1ib2xkXCIgc3R5bGU9XCJjb2xvcjogaHNsKDM1LCAxMDAlLCA1MCUpOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAwIGJsYWNrO1wiPkZyaWVuZGxpbmVzczwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJdGFxdWUgaWxsb1xuICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBkZWxlY3R1c1xuICAgICAgICAgICAgZnVnaXQgZXQ/IEVsaWdlbmRpIHJlcHVkaWFuZGFlIGNvcnJ1cHRpIGV4LCBpbnZlbnRvcmUgZWFxdWUgaXBzYW0gcmVydW0gcG9zc2ltdXMgZXhlcmNpdGF0aW9uZW1cbiAgICAgICAgICAgIHBlcnNwaWNpYXRpc1xuICAgICAgICAgICAgcXVvIG1vbGxpdGlhLCBhc3Blcm5hdHVyIGRpY3RhIG1vbGVzdGlhcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG1iLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IG9yZGVyLW1kLTEgbWItMyBtYi1tZC0wXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9hZHZhbnRhZ2VzL2VuZ2FnZW1lbnQucG5nXCIgYWx0PVwiXCIgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBvcmRlci1tZC0yIHRleHQtbWQtc3RhcnRcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJmdy1ib2xkXCIgc3R5bGU9XCJjb2xvcjogaHNsKDM1LCAxMDAlLCA1MCUpOyB0ZXh0LXNoYWRvdzogMXB4IDFweCAwIGJsYWNrO1wiPlJlc3BvbnNpYmlsaXR5PC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEl0YXF1ZSBpbGxvXG4gICAgICAgICAgICByZXByZWhlbmRlcml0IGRlbGVjdHVzXG4gICAgICAgICAgICBmdWdpdCBldD8gRWxpZ2VuZGkgcmVwdWRpYW5kYWUgY29ycnVwdGkgZXgsIGludmVudG9yZSBlYXF1ZSBpcHNhbSByZXJ1bSBwb3NzaW11cyBleGVyY2l0YXRpb25lbVxuICAgICAgICAgICAgcGVyc3BpY2lhdGlzXG4gICAgICAgICAgICBxdW8gbW9sbGl0aWEsIGFzcGVybmF0dXIgZGljdGEgbW9sZXN0aWFzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbWItNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgb3JkZXItbWQtMiBtYi0zIG1iLW1kLTBcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zcmMvaW1hZ2VzL2FkdmFudGFnZXMvZmFzdC1kZWxpdmVyeS5wbmdcIiBhbHQ9XCJcIiBzdHlsZT1cIndpZHRoOiAxNTBweDtcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG9yZGVyLW1kLTEgdGV4dC1tZC1zdGFydFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cImZ3LWJvbGRcIiBzdHlsZT1cImNvbG9yOiBoc2woMzUsIDEwMCUsIDUwJSk7IHRleHQtc2hhZG93OiAxcHggMXB4IDAgYmxhY2s7XCI+RmFzdCBkZWxpdmVyeTwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJdGFxdWUgaWxsb1xuICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBkZWxlY3R1c1xuICAgICAgICAgICAgZnVnaXQgZXQ/IEVsaWdlbmRpIHJlcHVkaWFuZGFlIGNvcnJ1cHRpIGV4LCBpbnZlbnRvcmUgZWFxdWUgaXBzYW0gcmVydW0gcG9zc2ltdXMgZXhlcmNpdGF0aW9uZW1cbiAgICAgICAgICAgIHBlcnNwaWNpYXRpc1xuICAgICAgICAgICAgcXVvIG1vbGxpdGlhLCBhc3Blcm5hdHVyIGRpY3RhIG1vbGVzdGlhcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBvcmRlci1tZC0xIG1iLTMgbWItbWQtMFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvYWR2YW50YWdlcy92ZWdldGFibGVzLnBuZyBcIiBhbHQ9XCJcIiBzdHlsZT1cIndpZHRoOiAxNTBweDtcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG9yZGVyLW1kLTIgdGV4dC1tZC1zdGFydFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cImZ3LWJvbGRcIiBzdHlsZT1cImNvbG9yOiBoc2woMzUsIDEwMCUsIDUwJSk7IHRleHQtc2hhZG93OiAxcHggMXB4IDAgYmxhY2s7XCI+RnJlc2ggaW5ncmVkaWVudHNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXRhcXVlIGlsbG9cbiAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQgZGVsZWN0dXNcbiAgICAgICAgICAgIGZ1Z2l0IGV0PyBFbGlnZW5kaSByZXB1ZGlhbmRhZSBjb3JydXB0aSBleCwgaW52ZW50b3JlIGVhcXVlIGlwc2FtIHJlcnVtIHBvc3NpbXVzIGV4ZXJjaXRhdGlvbmVtXG4gICAgICAgICAgICBwZXJzcGljaWF0aXNcbiAgICAgICAgICAgIHF1byBtb2xsaXRpYSwgYXNwZXJuYXR1ciBkaWN0YSBtb2xlc3RpYXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgY29udGVudCwgcmVuZGVyTmF2YmFyLCBoaWdobGlnaHROYXZMaW5rIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDcmVkaXRzUGFnZSgpIHtcbiAgcmVuZGVyTmF2YmFyKCk7XG4gIGhpZ2hsaWdodE5hdkxpbmsoMyk7XG5cbiAgY29udGVudC5pbm5lckhUTUwgKz0gYFxuXG4gIDxkaXYgc3R5bGU9XCJwYWRkaW5nLXRvcDogNHJlbTtcIj4gXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1sZyBweS0zXCI+XG4gICAgICA8aDEgY2xhc3M9XCJtYi00IGZ3LWJvbGQgdGV4dC1jZW50ZXJcIj5DcmVkaXRzPC9oMT5cblxuICAgICAgPG9sIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLW51bWJlcmVkXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGQtZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xIG1zLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWUtM1wiPlxuICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJmdy1ib2xkXCI+TG9nbyBpY29uPC9oNj5cbiAgICAgICAgICAgICAgPHA+Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvcGl6emFcIiB0aXRsZT1cInBpenphIGljb25zXCI+RnJlZXBpayAtXG4gICAgICAgICAgICAgICAgICBGbGF0aWNvbjwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJcIiBzdHlsZT1cIndpZHRoOiAzLjI1cmVtOyBoZWlnaHQ6IDMuMjVyZW07XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTEgbXMtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtZS0zXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzcz1cImZ3LWJvbGRcIj5Ib21lIHNlY3Rpb24gYmFja2dyb3VuZDwvaDY+XG4gICAgICAgICAgICAgIDxwPkNyZWF0ZWQgYnkgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9oYW5kLWRyYXduLXBpenphLXBhdHRlcm4tYmFja2dyb3VuZF83Mzk0MDc3NS5odG1cIj5GcmVlcGlrPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvaGVyb19iYWNrZ3JvdW5kLmpwZ1wiIGFsdD1cIlwiIHN0eWxlPVwid2lkdGg6IDMuMjVyZW07IGhlaWdodDogMy4yNXJlbTtcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtZ3Jvdy0xIG1zLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWUtMyBmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJmdy1ib2xkXCI+UGl6emEgbWVudSBpbWFnZXM8L2g2PlxuICAgICAgICAgICAgICA8cD5DcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2RvbWlub3MudWEvdWsva3lpdi9cIj5Eb21pbm9zLnVhPC9hPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWVuZCBqdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L2RpYWJvbG8tcGl6emFwaWVjZXMuYXZpZlwiIGFsdD1cIlwiIHN0eWxlPVwid2lkdGg6IDMuMjVyZW07IGhlaWdodDogMy4yNXJlbTtcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L2hhdmFpc2thLTMwMGRwaS1taW4uYXZpZlwiIGFsdD1cIlwiIHN0eWxlPVwid2lkdGg6IDMuMjVyZW07IGhlaWdodDogMy4yNXJlbTtcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L21hbmhhdHRlbi1zbGljZS1jb2xsYWdld2ViLW1pbi5hdmlmXCIgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAzLjI1cmVtOyBoZWlnaHQ6IDMuMjVyZW07XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvbWVudS9waWF0LXN5cm92LTMwMGRwaS1taW4uYXZpZlwiIGFsdD1cIlwiIHN0eWxlPVwid2lkdGg6IDMuMjVyZW07IGhlaWdodDogMy4yNXJlbTtcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L3JveWFsLXNsaWNlLXJldG9jaC1taW4tbWluLmF2aWZcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDMuMjVyZW07IGhlaWdodDogMy4yNXJlbTtcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L3NwYWlzeS0zMDBkcGktbWluLmF2aWZcIiBhbHQ9XCJcIiBzdHlsZT1cIndpZHRoOiAzLjI1cmVtOyBoZWlnaHQ6IDMuMjVyZW07XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvbWVudS90ZWtoYXMtMzAwZHBpLW1pbi5hdmlmXCIgYWx0PVwiXCIgc3R5bGU9XCJ3aWR0aDogMy4yNXJlbTsgaGVpZ2h0OiAzLjI1cmVtO1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zcmMvaW1hZ2VzL21lbnUvdmV0Y2hpbmEtaS1ncmlieS5hdmlmXCIgYWx0PVwiXCIgc3R5bGU9XCJ3aWR0aDogMy4yNXJlbTsgaGVpZ2h0OiAzLjI1cmVtO1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWdyb3ctMSBtcy0zXCI+XG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJmdy1ib2xkXCI+QWR2YW50YWdlcyBpY29uczwvaDY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibS0wIG1lLTNcIj5GcmllbmRzIGljb24gY3JlYXRlZCBieSBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvZnJpZW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiZnJpZW5kcyBpY29uc1wiPkZyZWVwaWsgLSBGbGF0aWNvbjwvYT48L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9hZHZhbnRhZ2VzL2ZyaWVuZHMucG5nXCIgYWx0PVwiXCIgc3R5bGU9XCJ3aWR0aDogMy4yNXJlbTsgaGVpZ2h0OiAzLjI1cmVtO1wiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibS0wIG1lLTNcIj5FbmdhZ2VtZW50IGljb24gY3JlYXRlZCBieSA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvcmVzcG9uc2liaWxpdHlcIiB0aXRsZT1cInJlc3BvbnNpYmlsaXR5IGljb25zXCI+SmFnYXRcbiAgICAgICAgICAgICAgICAgICAgSWNvbiAtIEZsYXRpY29uPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zcmMvaW1hZ2VzL2FkdmFudGFnZXMvZW5nYWdlbWVudC5wbmdcIiBhbHQ9XCJcIiBzdHlsZT1cIndpZHRoOiAzLjI1cmVtOyBoZWlnaHQ6IDMuMjVyZW07XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTAgbWUtM1wiPkZhc3QgRGVsaXZlcnkgaWNvbiBjcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9kZWxpdmVyeVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiZGVsaXZlcnkgaWNvbnNcIj5GcmVlcGlrIC1cbiAgICAgICAgICAgICAgICAgICAgRmxhdGljb248L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvYWR2YW50YWdlcy9mYXN0LWRlbGl2ZXJ5LnBuZ1wiIGFsdD1cIlwiIHN0eWxlPVwid2lkdGg6IDMuMjVyZW07IGhlaWdodDogMy4yNXJlbTtcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTAgbWUtM1wiPlZlZ2V0YWJsZXMgaWNvbiBjcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9pbmdyZWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpbmdyZWRpZW50IGljb25zXCI+RXVjYWx5cFxuICAgICAgICAgICAgICAgICAgICAtIEZsYXRpY29uPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zcmMvaW1hZ2VzL2FkdmFudGFnZXMvdmVnZXRhYmxlcy5wbmdcIiBhbHQ9XCJcIiBzdHlsZT1cIndpZHRoOiAzLjI1cmVtOyBoZWlnaHQ6IDMuMjVyZW07XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IGNvbnRlbnQsIHJlbmRlck5hdmJhciwgaGlnaGxpZ2h0TmF2TGluayB9IGZyb20gXCIuL25hdmJhclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UoKSB7XG4gIHJlbmRlck5hdmJhcigpO1xuICBoaWdobGlnaHROYXZMaW5rKDApO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MICs9IGBcblxuICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwwLjUpIDQwJSwgcmdiYSgwLDAsMCwwLjQpIDUwJSwgdHJhbnNwYXJlbnQgNTUlKSwgXG4gICAgICAgIHVybCgvc3JjL2ltYWdlcy9oZXJvX2JhY2tncm91bmQuanBnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWxnIGgtMTAwIHRleHQtd2hpdGUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWNvbnRlbnQtY2VudGVyIGgtMTAwIGctMlwiPlxuICAgICAgICA8aDYgY2xhc3M9XCJjb2wtNyBjb2wtbWQtNiBjb2wtbGctNSBkaXNwbGF5LTYgZnctYm9sZFwiPkRlbGljaW91cyBwaXp6YSBmb3IgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IGhzbCgzNSwgMTAwJSwgNTAlKTtcIj5ldmVyeTwvc3Bhbj4gdGFzdGVcbiAgICAgICAgPC9oNj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDBcIj48L2Rpdj5cblxuICAgICAgICA8cCBjbGFzcz1cImNvbC03IGNvbC1tZC02IGNvbC1sZy01IGZzLTZcIj5Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICBWb2x1cHRhdGlidXMgcXVpcyBleHBlZGl0YSBhdXRcbiAgICAgICAgICBpc3RlIG1hZ25pIGVzdCwgY3VscGEgZXNzZSB2ZWxpdC48L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC03IGNvbC1tZC02IGNvbC1sZy01XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tbGlnaHRcIj5PcmRlciBOb3c8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgY29udGVudCwgcmVuZGVyTmF2YmFyLCBoaWdobGlnaHROYXZMaW5rIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNZW51UGFnZSgpIHtcbiAgcmVuZGVyTmF2YmFyKCk7XG4gIGhpZ2hsaWdodE5hdkxpbmsoMSk7XG5cbiAgY29udGVudC5pbm5lckhUTUwgKz0gYFxuIFxuICA8ZGl2IHN0eWxlPVwicGFkZGluZy10b3A6IDRyZW07XCI+IFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItbGcgdGV4dC1jZW50ZXIgcHktM1wiPlxuICAgICAgPGgxIGNsYXNzPVwibWItNCBmdy1ib2xkXCI+TWVudTwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1zbS0yIHJvdy1jb2xzLW1kLTMgcm93LWNvbHMteGwtNCBnLTNcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgaC0xMDBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvbWVudS9kaWFib2xvLXBpenphcGllY2VzLmF2aWZcIiBjbGFzcz1cImNhcmQtaW1hZ2UtdG9wXCI+PC9pbWc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTMgZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgUGl6emEgQ2FyYm9uYXJhXG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zdGFydCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj4kMTQuOTk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGFyayB3LTUwXCI+T3JkZXI8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zcmMvaW1hZ2VzL21lbnUvaGF2YWlza2EtMzAwZHBpLW1pbi5hdmlmXCIgY2xhc3M9XCJjYXJkLWltYWdlLXRvcFwiPjwvaW1nPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSBtYi0zIGZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIFBpenphIEhhd2FpaVxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc3RhcnQgbWItM1wiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+JDE1Ljk5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgdy01MFwiPk9yZGVyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L21hbmhhdHRlbi1zbGljZS1jb2xsYWdld2ViLW1pbi5hdmlmXCIgY2xhc3M9XCJjYXJkLWltYWdlLXRvcFwiPjwvaW1nPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSBtYi0zIGZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIFBpenphIE1hbmhhdHRhblxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc3RhcnQgbWItM1wiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+JDE5Ljk5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgdy01MFwiPk9yZGVyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L3BpYXQtc3lyb3YtMzAwZHBpLW1pbi5hdmlmXCIgY2xhc3M9XCJjYXJkLWltYWdlLXRvcFwiPjwvaW1nPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSBtYi0zIGZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIFBpenphIEZpdmUgQ2hlZXNlc1xuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc3RhcnQgbWItM1wiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+JDE1Ljk5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgdy01MFwiPk9yZGVyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L3JveWFsLXNsaWNlLXJldG9jaC1taW4tbWluLmF2aWZcIiBjbGFzcz1cImNhcmQtaW1hZ2UtdG9wXCI+PC9pbWc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTMgZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgUGl6emEgUm95YWwgQ2hlZXNlYnVyZ2VyXG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zdGFydCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj4kMTguOTk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGFyayB3LTUwXCI+T3JkZXI8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zcmMvaW1hZ2VzL21lbnUvc3BhaXN5LTMwMGRwaS1taW4uYXZpZlwiIGNsYXNzPVwiY2FyZC1pbWFnZS10b3BcIj48L2ltZz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgbWItMyBmdy1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICBQaXp6YSBTcGljeVxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc3RhcnQgbWItM1wiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+JDE1Ljk5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgdy01MFwiPk9yZGVyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3JjL2ltYWdlcy9tZW51L3Rla2hhcy0zMDBkcGktbWluLmF2aWZcIiBjbGFzcz1cImNhcmQtaW1hZ2UtdG9wXCI+PC9pbWc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTMgZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgUGl6emEgVGV4YXNcbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LXN0YXJ0IG1iLTNcIj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPiQxOS45OTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIHctNTBcIj5PcmRlcjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgaC0xMDBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvbWVudS92ZXRjaGluYS1pLWdyaWJ5LmF2aWZcIiBjbGFzcz1cImNhcmQtaW1hZ2UtdG9wXCI+PC9pbWc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTMgZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgUGl6emEgSGFtIGFuZCBNdXNocm9vbXNcbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LXN0YXJ0IG1iLTNcIj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPiQxNC45OTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIHctNTBcIj5PcmRlcjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbn1cbiIsImV4cG9ydCBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmF2YmFyKCkge1xuICBjb250ZW50LmlubmVySFRNTCA9IGBcblxuICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wIGJnLWRhcmtcIiBkYXRhLWJzLXRoZW1lPVwiZGFya1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdmJhci1icmFuZCBmdy1ib2xkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3NyYy9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgc3R5bGU9XCJ3aWR0aDogNTBweDtcIj5cbiAgICAgICAgUGl6emEgU2hvcFxuICAgICAgPC9hPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZFwiIGlkPVwibmF2YmFyTmF2XCI+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXItbmF2IG5hdi1maWxsIHAtMFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJvZmZzZXQtbGctNCBuYXYtbGlua1wiIGFyaWEtY3VycmVudD1cIlwiPkhvbWU8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdi1saW5rXCIgYXJpYS1jdXJyZW50PVwiXCI+TWVudTwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2LWxpbmtcIiBhcmlhLWN1cnJlbnQ9XCJcIj5PdXIgYWR2YW50YWdlczwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2LWxpbmtcIiBhcmlhLWN1cnJlbnQ9XCJcIj5DcmVkaXRzPC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbiAgYDtcbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUVsZW1lbnRzKGVsZW1lbnRMaXN0KSB7XG4gIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICBpZiAoZWxlbWVudC5hdHRyaWJ1dGVzW1wiYXJpYS1jdXJyZW50XCJdKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcIlwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudExpc3QsIGVsZW1lbnRJbmRleCkge1xuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZWxlbWVudExpc3RbZWxlbWVudEluZGV4XTtcblxuICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgaWYgKHRhcmdldEVsZW1lbnQuYXR0cmlidXRlc1tcImFyaWEtY3VycmVudFwiXSkge1xuICAgIHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwicGFnZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIaWdobGlnaHRGdW5jdGlvbihlbGVtZW50c1NlbGVjdG9yKSB7XG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudEluZGV4KSB7XG4gICAgY29uc3QgZWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzU2VsZWN0b3IpO1xuXG4gICAgZGVhY3RpdmF0ZUVsZW1lbnRzKGVsZW1lbnRMaXN0KTtcbiAgICBhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudExpc3QsIGVsZW1lbnRJbmRleCk7XG4gIH1cblxuICByZXR1cm4gaGlnaGxpZ2h0RWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodE5hdkxpbmsgPSBjcmVhdGVIaWdobGlnaHRGdW5jdGlvbihcIi5uYXYtbGlua1wiKTtcblxuLy8gZnVuY3Rpb24gaGlnaGxpZ2h0TmF2TGluayhuYXZMaW5rSW5kZXgpIHtcbi8vICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xuXG4vLyAgIChmdW5jdGlvbiBjbGVhckFjdGl2ZU5hdkxpbmtBdHRyaWJ1dGVzKCkge1xuLy8gICAgIG5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspID0+IHtcbi8vICAgICAgIG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwiXCIpO1xuLy8gICAgIH0pO1xuLy8gICB9KSgpO1xuXG4vLyAgIChmdW5jdGlvbiBhZGRBY3RpdmVOYXZMaW5rQXR0cmlidXRlcygpIHtcbi8vICAgICBuYXZMaW5rc1tuYXZMaW5rSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4vLyAgICAgbmF2TGlua3NbbmF2TGlua0luZGV4XS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJwYWdlXCIpO1xuLy8gICB9KSgpO1xuLy8gfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBQYWdlcyBmcm9tIFwiLi9wYWdlc1wiO1xuXG5mdW5jdGlvbiBnZXRPcmRlcmVkUGFnZVJlbmRlckZ1bmN0aW9ucygpIHtcbiAgcmV0dXJuIFtcbiAgICBQYWdlcy5yZW5kZXJIb21lUGFnZSxcbiAgICBQYWdlcy5yZW5kZXJNZW51UGFnZSxcbiAgICBQYWdlcy5yZW5kZXJBZHZhbnRhZ2VzUGFnZSxcbiAgICBQYWdlcy5yZW5kZXJDcmVkaXRzUGFnZSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcnMoZWxlbWVudFNlbGVjdG9yLCBmdW5jdGlvbkFycmF5LCBldmVudFR5cGUpIHtcbiAgY29uc3QgZWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRTZWxlY3Rvcik7XG5cbiAgZWxlbWVudExpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoKSA9PiB7XG4gICAgICBmdW5jdGlvbkFycmF5W2luZGV4XShpbmRleCk7XG5cbiAgICAgIGNyZWF0ZVBhZ2VSZW5kZXJFdmVudExpc3RlbmVycygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gRm9yIHNvbWUgcmVhc29ucyBldmVudCBsaXN0ZW5lcnMgaW4gbmF2YmFyLmpzIGFyZSByZW1vdmVkIHdoZW4gY29kZSBpcyBjb21waWxlZFxuZnVuY3Rpb24gY3JlYXRlUGFnZVJlbmRlckV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBwYWdlUmVuZGVyRnVuY3Rpb25zID0gZ2V0T3JkZXJlZFBhZ2VSZW5kZXJGdW5jdGlvbnMoKTtcblxuICBjcmVhdGVFdmVudExpc3RlbmVycyhcIi5uYXYtbGlua1wiLCBwYWdlUmVuZGVyRnVuY3Rpb25zLCBcImNsaWNrXCIpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIFBhZ2VzLnJlbmRlckhvbWVQYWdlKCk7XG5cbiAgY3JlYXRlUGFnZVJlbmRlckV2ZW50TGlzdGVuZXJzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==