/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   "default": () => (/* binding */ homeMain)
/* harmony export */ });
/* harmony import */ var _blincat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blincat.jpg */ "./src/modules/blincat.jpg");


function homeMain() {
  const mainDiv = document.createElement("div");
  mainDiv.id = "main";

  const titleDiv = document.createElement("div");
  titleDiv.innerText = "Voted the best brunch place of 2022";

  //   const catImage = new Image();
  //   catImage.src = cat;
  const myIcon = new Image();
  myIcon.src = _blincat_jpg__WEBPACK_IMPORTED_MODULE_0__;

  mainDiv.appendChild(titleDiv);
  mainDiv.appendChild(myIcon);

  return mainDiv;
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
const homeMain = (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
contentDiv.appendChild(homeMain);
contentDiv.appendChild((0,_modules_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());

navBar.homeBTN.addEventListener("click", () => {
  console.log(`I've been clicked by`);
});

navBar.menuBTN.addEventListener("click", () => {
  const mainContent = document.querySelector("#main");

  clearContent();

  mainContent.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
});

navBar.contactBTN.addEventListener("click", () => {});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZ0M7O0FBRWpCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUNBQUc7O0FBRWxCO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZ0Q7QUFDWTtBQUNSO0FBQ007O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyw4Q0FBYztBQUNwRCxzQ0FBc0Msd0RBQWdCO0FBQ3RELHNDQUFzQyxnREFBZ0I7QUFDdEQsc0NBQXNDLG1EQUFtQjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQzlCO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0J6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnlDO0FBQ0c7QUFDQTtBQUNBO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsMkRBQVM7O0FBRXhCO0FBQ0EsaUJBQWlCLHlEQUFjO0FBQy9CO0FBQ0EsdUJBQXVCLDJEQUFZOztBQUVuQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBLDBCQUEwQix5REFBYztBQUN4QyxDQUFDOztBQUVELG9EQUFvRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmlubmVyVGV4dCA9IFwiU29tZSBzb3J0IG9mIHRleHRcIjtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiIsImltcG9ydCBjYXQgZnJvbSBcIi4vYmxpbmNhdC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZU1haW4oKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluRGl2LmlkID0gXCJtYWluXCI7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5pbm5lclRleHQgPSBcIlZvdGVkIHRoZSBiZXN0IGJydW5jaCBwbGFjZSBvZiAyMDIyXCI7XG5cbiAgLy8gICBjb25zdCBjYXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAvLyAgIGNhdEltYWdlLnNyYyA9IGNhdDtcbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIG15SWNvbi5zcmMgPSBjYXQ7XG5cbiAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn1cbiIsImltcG9ydCBmcmVuY2hUb2FzdElNRyBmcm9tIFwiLi9mcmVuY2hfdG9hc3QucG5nXCI7XG5pbXBvcnQgY3JvaXNzYW50d2l0aElNRyBmcm9tIFwiLi9jcm9zc2FpbnRfd2l0aF9zYXVzYWdlLnBuZ1wiO1xuaW1wb3J0IGZydWl0UG9ycmlkZ2VJTUcgZnJvbSBcIi4vZnJ1aXRfcG9ycmlkZ2UucG5nXCI7XG5pbXBvcnQgcnVzc2lhbkJyZWFrZmFzdElNRyBmcm9tIFwiLi9ydXNzaWFuX2JyZWFrZmFzdC5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaW1nLCB0aXRsZSkge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdCA9IFwibWVudUl0ZW1cIjtcblxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlRGl2LmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICBjb25zdCBmb29kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgZm9vZEltYWdlLnNyYyA9IGltZztcblxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IG1lbnVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBtZW51c0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShmcmVuY2hUb2FzdElNRywgXCJGcmVuY2ggdG9hc3RcIikpO1xuICBtZW51c0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShjcm9pc3NhbnR3aXRoSU1HLCBcInNhdXNhZ2UgY3JvaXNzYW50c1wiKSk7XG4gIG1lbnVzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGZydWl0UG9ycmlkZ2VJTUcsIFwiRnJ1aXQgUG9ycmlkZ2VcIikpO1xuICBtZW51c0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShydXNzaWFuQnJlYWtmYXN0SU1HLCBcImEgcGxhdGVyXCIpKTtcbiAgLy8gICBjb25zb2xlLmxvZyhjcmVhdGVNZW51UGFnZSk7XG4gIHJldHVybiBtZW51c0Rpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVBhZ2U7XG4iLCJmdW5jdGlvbiBjcmVhdGVMaW5rKHRleHQpIHtcbiAgY29uc3QgYUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYUxpbmsuaWQgPSBgJHt0ZXh0LnRvTG93ZXJDYXNlKCl9QlROYDtcbiAgYUxpbmsuaW5uZXJUZXh0ID0gdGV4dDtcbiAgcmV0dXJuIGFMaW5rO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdlRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBsaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJCcmVha2Zhc3QgQmFyXCI7XG5cbiAgbGlua3NEaXYuY2xhc3NOYW1lID0gXCJsaW5rc1wiO1xuICBjb25zdCBob21lQlROID0gY3JlYXRlTGluayhcIkhvbWVcIik7XG4gIGNvbnN0IG1lbnVCVE4gPSBjcmVhdGVMaW5rKFwiTWVudVwiKTtcbiAgY29uc3QgY29udGFjdEJUTiA9IGNyZWF0ZUxpbmsoXCJDb250YWN0XCIpO1xuICBsaW5rc0Rpdi5hcHBlbmRDaGlsZChob21lQlROKTtcbiAgbGlua3NEaXYuYXBwZW5kQ2hpbGQobWVudUJUTik7XG4gIGxpbmtzRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCVE4pO1xuXG4gIG5hdlRhZy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG5hdlRhZy5hcHBlbmRDaGlsZChsaW5rc0Rpdik7XG4gIHJldHVybiB7IG5hdlRhZywgaG9tZUJUTiwgbWVudUJUTiwgY29udGFjdEJUTiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY3JlYXRlTmF2IGZyb20gXCIuL21vZHVsZXMvbmF2YmFyXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL21vZHVsZXMvZm9vdGVyXCI7XG5pbXBvcnQgY3JlYXRlSG9tZU1haW4gZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XG4vLyBpbXBvcnQgY2F0IGZyb20gXCIuL2JsaW5jYXQuanBnXCI7XG5cbi8vIGNvbnNvbGUubG9nKFwiQ2hhbmdlIG1hZGUgXCIpO1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcbi8vIGNvbnNvbGUubG9nKGNvbnRlbnREaXYpO1xuLy8gY29uc29sZS5sb2cobWFpbkNvbnRlbnQpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICB3aGlsZSAobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIG1haW5Db250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn1cblxuLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyBteUljb24uc3JjID0gY2F0O1xuXG5jb25zdCBuYXZCYXIgPSBjcmVhdGVOYXYoKTtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIubmF2VGFnKTtcbmNvbnN0IGhvbWVNYWluID0gY3JlYXRlSG9tZU1haW4oKTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZU1haW4pO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbm5hdkJhci5ob21lQlROLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBJJ3ZlIGJlZW4gY2xpY2tlZCBieWApO1xufSk7XG5cbm5hdkJhci5tZW51QlROLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIGNsZWFyQ29udGVudCgpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVQYWdlKCkpO1xufSk7XG5cbm5hdkJhci5jb250YWN0QlROLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7fSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=