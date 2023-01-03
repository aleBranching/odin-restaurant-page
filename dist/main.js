/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
function createContact() {
  const containerDiv = document.createElement("div");
  const phonenumber = document.createElement("div");
  phonenumber.innerText = "📞 074925625";
  const address = document.createElement("p");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  containerDiv.appendChild(phonenumber);
  containerDiv.appendChild(address);
  return containerDiv;
}


/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  const footer = document.createElement("footer");
  footer.innerText = "Some sort of text";
  return footer;
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomeMain)
/* harmony export */ });
/* harmony import */ var _blincat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blincat.jpg */ "./src/modules/blincat.jpg");


function createHomeMain() {
  const containerDiv = document.createElement("div");
  containerDiv.classList = "homeMain";
  const titleDiv = document.createElement("div");
  titleDiv.innerText = "Voted the best brunch place of 2022";

  //   const catImage = new Image();
  //   catImage.src = cat;
  const myIcon = new Image();
  myIcon.src = _blincat_jpg__WEBPACK_IMPORTED_MODULE_0__;

  containerDiv.appendChild(titleDiv);
  containerDiv.appendChild(myIcon);

  return containerDiv;
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _french_toast_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./french_toast.png */ "./src/modules/french_toast.png");
/* harmony import */ var _crossaint_with_sausage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossaint_with_sausage.png */ "./src/modules/crossaint_with_sausage.png");
/* harmony import */ var _fruit_porridge_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fruit_porridge.png */ "./src/modules/fruit_porridge.png");
/* harmony import */ var _russian_breakfast_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./russian_breakfast.png */ "./src/modules/russian_breakfast.png");





function createMenuItem(img, title) {
  const menuItem = document.createElement("div");
  menuItem.classList = "menuItem";

  const titleDiv = document.createElement("div");
  titleDiv.innerText = title;

  menuItem.appendChild(titleDiv);

  const foodImage = new Image();
  foodImage.src = img;

  menuItem.appendChild(foodImage);

  return menuItem;
}

function createMenuPage() {
  const menusDiv = document.createElement("div");

  menusDiv.appendChild(createMenuItem(_french_toast_png__WEBPACK_IMPORTED_MODULE_0__, "French toast"));
  menusDiv.appendChild(createMenuItem(_crossaint_with_sausage_png__WEBPACK_IMPORTED_MODULE_1__, "sausage croissants"));
  menusDiv.appendChild(createMenuItem(_fruit_porridge_png__WEBPACK_IMPORTED_MODULE_2__, "Fruit Porridge"));
  menusDiv.appendChild(createMenuItem(_russian_breakfast_png__WEBPACK_IMPORTED_MODULE_3__, "a plater"));
  //   console.log(createMenuPage);
  return menusDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);


/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createLink(text) {
  const aLink = document.createElement("a");
  aLink.id = `${text.toLowerCase()}BTN`;
  aLink.innerText = text;
  return aLink;
}

function createNav() {
  const navTag = document.createElement("nav");
  const title = document.createElement("h2");
  const linksDiv = document.createElement("div");

  title.innerText = "Breakfast Bar";

  linksDiv.className = "links";
  const homeBTN = createLink("Home");
  const menuBTN = createLink("Menu");
  const contactBTN = createLink("Contact");
  linksDiv.appendChild(homeBTN);
  linksDiv.appendChild(menuBTN);
  linksDiv.appendChild(contactBTN);

  navTag.appendChild(title);
  navTag.appendChild(linksDiv);
  return { navTag, homeBTN, menuBTN, contactBTN };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);


/***/ }),

/***/ "./src/modules/blincat.jpg":
/*!*********************************!*\
  !*** ./src/modules/blincat.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ecd4a3a27b966fd580d.jpg";

/***/ }),

/***/ "./src/modules/crossaint_with_sausage.png":
/*!************************************************!*\
  !*** ./src/modules/crossaint_with_sausage.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d321519651b083a43d1.png";

/***/ }),

/***/ "./src/modules/french_toast.png":
/*!**************************************!*\
  !*** ./src/modules/french_toast.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496ecc3ee35d93999fa0.png";

/***/ }),

/***/ "./src/modules/fruit_porridge.png":
/*!****************************************!*\
  !*** ./src/modules/fruit_porridge.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5e721f8e40d940cde66.png";

/***/ }),

/***/ "./src/modules/russian_breakfast.png":
/*!*******************************************!*\
  !*** ./src/modules/russian_breakfast.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "062356744e522c539fd2.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar */ "./src/modules/navbar.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");





// import cat from "./blincat.jpg";

// console.log("Change made ");
const contentDiv = document.querySelector("div#content");
// console.log(contentDiv);
// console.log(mainContent);

function clearContent() {
  const mainContent = document.querySelector("#main");
  while (mainContent.firstChild) {
    mainContent.firstChild.remove();
  }
}

// const myIcon = new Image();
// myIcon.src = cat;

const navBar = (0,_modules_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();

contentDiv.appendChild(navBar.navTag);
const mainDiv = document.createElement("div");
mainDiv.id = "main";
const homeMain = (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
contentDiv.appendChild(mainDiv);
mainDiv.appendChild(homeMain);

contentDiv.appendChild((0,_modules_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());

navBar.homeBTN.addEventListener("click", () => {
  //   navBar.homeBTN.classList.toggle = "clicked";
  //   console.log(`I've been clicked by`);
  const mainContent = document.querySelector("#main");
  clearContent();
  console.log(mainContent);
  mainContent.appendChild(homeMain);
});

navBar.menuBTN.addEventListener("click", () => {
  const mainContent = document.querySelector("#main");

  clearContent();

  mainContent.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
});

navBar.contactBTN.addEventListener("click", () => {
  const mainContent = document.querySelector("#main");
  clearContent();
  mainContent.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlDQUFHOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmdEO0FBQ1k7QUFDUjtBQUNNOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0MsOENBQWM7QUFDcEQsc0NBQXNDLHdEQUFnQjtBQUN0RCxzQ0FBc0MsZ0RBQWdCO0FBQ3RELHNDQUFzQyxtREFBbUI7QUFDekQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakM5QjtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmeUM7QUFDRztBQUNBO0FBQ0E7QUFDRTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDJEQUFTOztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseURBQWM7QUFDL0I7QUFDQTs7QUFFQSx1QkFBdUIsMkRBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBLDBCQUEwQix5REFBYztBQUN4QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0REFBYTtBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBob25lbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmVudW1iZXIuaW5uZXJUZXh0ID0gXCLwn5OeIDA3NDkyNTYyNVwiO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIvCfj6AgSG9sbHl3b29kIEJvdWxldmFyZCA0MiwgTG9zIEFuZ2VsZXMsIFVTQVwiO1xuXG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChwaG9uZW51bWJlcik7XG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmlubmVyVGV4dCA9IFwiU29tZSBzb3J0IG9mIHRleHRcIjtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiIsImltcG9ydCBjYXQgZnJvbSBcIi4vYmxpbmNhdC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZU1haW4oKSB7XG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QgPSBcImhvbWVNYWluXCI7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVEaXYuaW5uZXJUZXh0ID0gXCJWb3RlZCB0aGUgYmVzdCBicnVuY2ggcGxhY2Ugb2YgMjAyMlwiO1xuXG4gIC8vICAgY29uc3QgY2F0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgLy8gICBjYXRJbWFnZS5zcmMgPSBjYXQ7XG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteUljb24uc3JjID0gY2F0O1xuXG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gIHJldHVybiBjb250YWluZXJEaXY7XG59XG4iLCJpbXBvcnQgZnJlbmNoVG9hc3RJTUcgZnJvbSBcIi4vZnJlbmNoX3RvYXN0LnBuZ1wiO1xuaW1wb3J0IGNyb2lzc2FudHdpdGhJTUcgZnJvbSBcIi4vY3Jvc3NhaW50X3dpdGhfc2F1c2FnZS5wbmdcIjtcbmltcG9ydCBmcnVpdFBvcnJpZGdlSU1HIGZyb20gXCIuL2ZydWl0X3BvcnJpZGdlLnBuZ1wiO1xuaW1wb3J0IHJ1c3NpYW5CcmVha2Zhc3RJTUcgZnJvbSBcIi4vcnVzc2lhbl9icmVha2Zhc3QucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGltZywgdGl0bGUpIHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QgPSBcIm1lbnVJdGVtXCI7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5pbm5lclRleHQgPSB0aXRsZTtcblxuICBtZW51SXRlbS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgY29uc3QgZm9vZEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZvb2RJbWFnZS5zcmMgPSBpbWc7XG5cbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb25zdCBtZW51c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWVudXNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oZnJlbmNoVG9hc3RJTUcsIFwiRnJlbmNoIHRvYXN0XCIpKTtcbiAgbWVudXNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oY3JvaXNzYW50d2l0aElNRywgXCJzYXVzYWdlIGNyb2lzc2FudHNcIikpO1xuICBtZW51c0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShmcnVpdFBvcnJpZGdlSU1HLCBcIkZydWl0IFBvcnJpZGdlXCIpKTtcbiAgbWVudXNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0ocnVzc2lhbkJyZWFrZmFzdElNRywgXCJhIHBsYXRlclwiKSk7XG4gIC8vICAgY29uc29sZS5sb2coY3JlYXRlTWVudVBhZ2UpO1xuICByZXR1cm4gbWVudXNEaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVQYWdlO1xuIiwiZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0KSB7XG4gIGNvbnN0IGFMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFMaW5rLmlkID0gYCR7dGV4dC50b0xvd2VyQ2FzZSgpfUJUTmA7XG4gIGFMaW5rLmlubmVyVGV4dCA9IHRleHQ7XG4gIHJldHVybiBhTGluaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXZUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbGlua3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiQnJlYWtmYXN0IEJhclwiO1xuXG4gIGxpbmtzRGl2LmNsYXNzTmFtZSA9IFwibGlua3NcIjtcbiAgY29uc3QgaG9tZUJUTiA9IGNyZWF0ZUxpbmsoXCJIb21lXCIpO1xuICBjb25zdCBtZW51QlROID0gY3JlYXRlTGluayhcIk1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RCVE4gPSBjcmVhdGVMaW5rKFwiQ29udGFjdFwiKTtcbiAgbGlua3NEaXYuYXBwZW5kQ2hpbGQoaG9tZUJUTik7XG4gIGxpbmtzRGl2LmFwcGVuZENoaWxkKG1lbnVCVE4pO1xuICBsaW5rc0Rpdi5hcHBlbmRDaGlsZChjb250YWN0QlROKTtcblxuICBuYXZUYWcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBuYXZUYWcuYXBwZW5kQ2hpbGQobGlua3NEaXYpO1xuICByZXR1cm4geyBuYXZUYWcsIGhvbWVCVE4sIG1lbnVCVE4sIGNvbnRhY3RCVE4gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9tb2R1bGVzL25hdmJhclwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xuaW1wb3J0IGNyZWF0ZUhvbWVNYWluIGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XG4vLyBpbXBvcnQgY2F0IGZyb20gXCIuL2JsaW5jYXQuanBnXCI7XG5cbi8vIGNvbnNvbGUubG9nKFwiQ2hhbmdlIG1hZGUgXCIpO1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcbi8vIGNvbnNvbGUubG9nKGNvbnRlbnREaXYpO1xuLy8gY29uc29sZS5sb2cobWFpbkNvbnRlbnQpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICB3aGlsZSAobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIG1haW5Db250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn1cblxuLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyBteUljb24uc3JjID0gY2F0O1xuXG5jb25zdCBuYXZCYXIgPSBjcmVhdGVOYXYoKTtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIubmF2VGFnKTtcbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWFpbkRpdi5pZCA9IFwibWFpblwiO1xuY29uc3QgaG9tZU1haW4gPSBjcmVhdGVIb21lTWFpbigpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoaG9tZU1haW4pO1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxubmF2QmFyLmhvbWVCVE4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gICBuYXZCYXIuaG9tZUJUTi5jbGFzc0xpc3QudG9nZ2xlID0gXCJjbGlja2VkXCI7XG4gIC8vICAgY29uc29sZS5sb2coYEkndmUgYmVlbiBjbGlja2VkIGJ5YCk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29uc29sZS5sb2cobWFpbkNvbnRlbnQpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lTWFpbik7XG59KTtcblxubmF2QmFyLm1lbnVCVE4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbiAgY2xlYXJDb250ZW50KCk7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVBhZ2UoKSk7XG59KTtcblxubmF2QmFyLmNvbnRhY3RCVE4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gIGNsZWFyQ29udGVudCgpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=