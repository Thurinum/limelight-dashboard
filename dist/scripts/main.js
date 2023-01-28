/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/Main.js":
/*!*****************************!*\
  !*** ./src/scripts/Main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Main {\r\n\tconstructor() {\r\n\t\tthis.init();\r\n\t}\r\n\r\n\tinit() {\r\n\t\tdocument.documentElement.classList.add('has-js');\r\n\r\n\t\t// initialize contributors\r\n\t\tconst list_contributors = document.querySelector(\"#contributors\");\r\n\t\tconst list_contributors_small = document.querySelector(\"#contributors_small\");\r\n\r\n\t\tfetch(\"assets/contributors.json\")\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((data) => {\r\n\t\t\t\tconsole.log(data);\r\n\r\n\t\t\t\tlet count = 0;\r\n\r\n\t\t\t\tdata.forEach((contributor) => {\r\n\t\t\t\t\tconst template = `\r\n\t\t\t\t\t\t<div class=\"list-item contributor-item\">\r\n\t\t\t\t\t\t\t<span class=\"left\">\r\n\t\t\t\t\t\t\t\t<img class=\"profile\" src=\"assets/images/contributors/${contributor.firstName.toLowerCase()}.webp\" alt=\"Image du contributeur ${contributor.firstName} ${contributor.lastName}\" />\r\n\t\t\t\t\t\t\t\t<span class=\"name-and-plan\">\r\n\t\t\t\t\t\t\t\t\t<b>${contributor.firstName} ${contributor.lastName}</b>\r\n\t\t\t\t\t\t\t\t\t<span class=\"plan-${contributor.tier.toLowerCase()}\">${contributor.tier}</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"right\">\r\n\t\t\t\t\t\t\t\t<span class=\"price\"><b>${contributor.transaction.value}</b> $</span>\r\n\t\t\t\t\t\t\t\t<em class=\"date\">${contributor.transaction.date}</em>\r\n\t\t\t\t\t\t\t\t<img class=\"status\" src=\"assets/icons/contributions/status/${contributor.transaction.status}.svg\" alt=\"Status de la transaction\" />\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t`;\r\n\r\n\t\t\t\t\tif (list_contributors)\r\n\t\t\t\t\t\tlist_contributors.innerHTML += template;\r\n\r\n\t\t\t\t\tif (list_contributors_small && count < 5) {\r\n\t\t\t\t\t\tlist_contributors_small.innerHTML += template;\r\n\t\t\t\t\t\tcount++;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t});\r\n\t\t\t});\r\n\r\n\t\t// initialize contreparties\r\n\t\tconst list_tiers = document.querySelector(\"#tiers\");\r\n\r\n\t\tif (!list_tiers)\r\n\t\t\treturn;\r\n\r\n\t\tfetch(\"assets/tiers.json\")\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((data) => {\r\n\t\t\t\tconsole.log(data);\r\n\r\n\t\t\t\tdata.forEach((tier) => {\r\n\t\t\t\t\tlist_tiers.innerHTML +=\r\n\t\t\t\t\t\t`\r\n\t\t\t\t\t\t<div class=\"list-item tier-item\">\r\n\t\t\t\t\t\t\t<span class=\"left\">\r\n\t\t\t\t\t\t\t\t<img class=\"image\" src=\"assets/images/tiers/${tier.name.toLowerCase()}.webp\" alt=\"Image de la contrepartie\" />\r\n\t\t\t\t\t\t\t\t<span class=\"name\">${tier.name}</span>\r\n\t\t\t\t\t\t\t\t<span class=\"value\">${tier.value ? tier.value + ' $' : ''}</span>\r\n\t\t\t\t\t\t\t\t${tier.isFavorite ? '<img class=\"favorite\" src=\"assets/icons/tiers/favorite.svg\" alt=\"Cette contrepartie est favorie\" title=\"Cette contrepartie est favorie\" />' : ''}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"right\">\r\n\t\t\t\t\t\t\t\t<span class=\"quantity\">${tier.quantity}</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t`\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t}\r\n}\r\n\r\nnew Main();\r\n\n\n//# sourceURL=webpack:///./src/scripts/Main.js?");

/***/ })

/******/ });