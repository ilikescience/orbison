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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/webview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bitly-tokens/dist/tokens.js":
/*!**************************************************!*\
  !*** ./node_modules/bitly-tokens/dist/tokens.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Do not edit directly
 * Generated on Thu, 03 Oct 2019 18:08:34 GMT
 */

module.exports = {
  "color": {
    "gray": {
      "10": {
        "value": "#f5f6f7",
        "original": {
          "value": "#F5F6F7"
        },
        "name": "ColorGray10",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "10"
        },
        "path": [
          "color",
          "gray",
          "10"
        ]
      },
      "20": {
        "value": "#e8e9eb",
        "original": {
          "value": "#E8E9EB"
        },
        "name": "ColorGray20",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "20"
        },
        "path": [
          "color",
          "gray",
          "20"
        ]
      },
      "30": {
        "value": "#d3d4d7",
        "original": {
          "value": "#D3D4D7"
        },
        "name": "ColorGray30",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "30"
        },
        "path": [
          "color",
          "gray",
          "30"
        ]
      },
      "40": {
        "value": "#b0b1b4",
        "original": {
          "value": "#B0B1B4"
        },
        "name": "ColorGray40",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "40"
        },
        "path": [
          "color",
          "gray",
          "40"
        ]
      },
      "50": {
        "value": "#828387",
        "original": {
          "value": "#828387"
        },
        "name": "ColorGray50",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "50"
        },
        "path": [
          "color",
          "gray",
          "50"
        ]
      },
      "60": {
        "value": "#56575b",
        "original": {
          "value": "#56575B"
        },
        "name": "ColorGray60",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "60"
        },
        "path": [
          "color",
          "gray",
          "60"
        ]
      },
      "70": {
        "value": "#36383b",
        "original": {
          "value": "#36383B"
        },
        "name": "ColorGray70",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "70"
        },
        "path": [
          "color",
          "gray",
          "70"
        ]
      },
      "80": {
        "value": "#252628",
        "original": {
          "value": "#252628"
        },
        "name": "ColorGray80",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "80"
        },
        "path": [
          "color",
          "gray",
          "80"
        ]
      },
      "90": {
        "value": "#1d1f21",
        "original": {
          "value": "#1D1F21"
        },
        "name": "ColorGray90",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "90"
        },
        "path": [
          "color",
          "gray",
          "90"
        ]
      },
      "100": {
        "value": "#121314",
        "original": {
          "value": "#121314"
        },
        "name": "ColorGray100",
        "attributes": {
          "category": "color",
          "type": "gray",
          "item": "100"
        },
        "path": [
          "color",
          "gray",
          "100"
        ]
      }
    },
    "blue": {
      "10": {
        "value": "#edf2fe",
        "original": {
          "value": "#EDF2FE"
        },
        "name": "ColorBlue10",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "10"
        },
        "path": [
          "color",
          "blue",
          "10"
        ]
      },
      "20": {
        "value": "#cedafa",
        "original": {
          "value": "#CEDAFA"
        },
        "name": "ColorBlue20",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "20"
        },
        "path": [
          "color",
          "blue",
          "20"
        ]
      },
      "30": {
        "value": "#a1b8f3",
        "original": {
          "value": "#A1B8F3"
        },
        "name": "ColorBlue30",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "30"
        },
        "path": [
          "color",
          "blue",
          "30"
        ]
      },
      "40": {
        "value": "#688de8",
        "original": {
          "value": "#688DE8"
        },
        "name": "ColorBlue40",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "40"
        },
        "path": [
          "color",
          "blue",
          "40"
        ]
      },
      "50": {
        "value": "#2a5bd7",
        "original": {
          "value": "#2A5BD7"
        },
        "name": "ColorBlue50",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "50"
        },
        "path": [
          "color",
          "blue",
          "50"
        ]
      },
      "60": {
        "value": "#0236b9",
        "original": {
          "value": "#0236B9"
        },
        "name": "ColorBlue60",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "60"
        },
        "path": [
          "color",
          "blue",
          "60"
        ]
      },
      "70": {
        "value": "#002a95",
        "original": {
          "value": "#002A95"
        },
        "name": "ColorBlue70",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "70"
        },
        "path": [
          "color",
          "blue",
          "70"
        ]
      },
      "80": {
        "value": "#001f6d",
        "original": {
          "value": "#001F6D"
        },
        "name": "ColorBlue80",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "80"
        },
        "path": [
          "color",
          "blue",
          "80"
        ]
      },
      "90": {
        "value": "#001345",
        "original": {
          "value": "#001345"
        },
        "name": "ColorBlue90",
        "attributes": {
          "category": "color",
          "type": "blue",
          "item": "90"
        },
        "path": [
          "color",
          "blue",
          "90"
        ]
      }
    },
    "teal": {
      "10": {
        "value": "#e1faf6",
        "original": {
          "value": "#E1FAF6"
        },
        "name": "ColorTeal10",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "10"
        },
        "path": [
          "color",
          "teal",
          "10"
        ]
      },
      "20": {
        "value": "#c2f6ed",
        "original": {
          "value": "#C2F6ED"
        },
        "name": "ColorTeal20",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "20"
        },
        "path": [
          "color",
          "teal",
          "20"
        ]
      },
      "30": {
        "value": "#a0f2e5",
        "original": {
          "value": "#A0F2E5"
        },
        "name": "ColorTeal30",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "30"
        },
        "path": [
          "color",
          "teal",
          "30"
        ]
      },
      "40": {
        "value": "#7eecda",
        "original": {
          "value": "#7EECDA"
        },
        "name": "ColorTeal40",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "40"
        },
        "path": [
          "color",
          "teal",
          "40"
        ]
      },
      "50": {
        "value": "#5ce6cf",
        "original": {
          "value": "#5CE6CF"
        },
        "name": "ColorTeal50",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "50"
        },
        "path": [
          "color",
          "teal",
          "50"
        ]
      },
      "60": {
        "value": "#4db8a8",
        "original": {
          "value": "#4DB8A8"
        },
        "name": "ColorTeal60",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "60"
        },
        "path": [
          "color",
          "teal",
          "60"
        ]
      },
      "70": {
        "value": "#408c83",
        "original": {
          "value": "#408C83"
        },
        "name": "ColorTeal70",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "70"
        },
        "path": [
          "color",
          "teal",
          "70"
        ]
      },
      "80": {
        "value": "#346260",
        "original": {
          "value": "#346260"
        },
        "name": "ColorTeal80",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "80"
        },
        "path": [
          "color",
          "teal",
          "80"
        ]
      },
      "90": {
        "value": "#263b40",
        "original": {
          "value": "#263B40"
        },
        "name": "ColorTeal90",
        "attributes": {
          "category": "color",
          "type": "teal",
          "item": "90"
        },
        "path": [
          "color",
          "teal",
          "90"
        ]
      }
    },
    "red": {
      "10": {
        "value": "#fee8e7",
        "original": {
          "value": "#FEE8E7"
        },
        "name": "ColorRed10",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "10"
        },
        "path": [
          "color",
          "red",
          "10"
        ]
      },
      "20": {
        "value": "#feb7b3",
        "original": {
          "value": "#FEB7B3"
        },
        "name": "ColorRed20",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "20"
        },
        "path": [
          "color",
          "red",
          "20"
        ]
      },
      "30": {
        "value": "#fb8983",
        "original": {
          "value": "#FB8983"
        },
        "name": "ColorRed30",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "30"
        },
        "path": [
          "color",
          "red",
          "30"
        ]
      },
      "40": {
        "value": "#f35e57",
        "original": {
          "value": "#F35E57"
        },
        "name": "ColorRed40",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "40"
        },
        "path": [
          "color",
          "red",
          "40"
        ]
      },
      "50": {
        "value": "#d53d35",
        "original": {
          "value": "#D53D35"
        },
        "name": "ColorRed50",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "50"
        },
        "path": [
          "color",
          "red",
          "50"
        ]
      },
      "60": {
        "value": "#ad2d27",
        "original": {
          "value": "#AD2D27"
        },
        "name": "ColorRed60",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "60"
        },
        "path": [
          "color",
          "red",
          "60"
        ]
      },
      "70": {
        "value": "#82201b",
        "original": {
          "value": "#82201B"
        },
        "name": "ColorRed70",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "70"
        },
        "path": [
          "color",
          "red",
          "70"
        ]
      },
      "80": {
        "value": "#5f1713",
        "original": {
          "value": "#5F1713"
        },
        "name": "ColorRed80",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "80"
        },
        "path": [
          "color",
          "red",
          "80"
        ]
      },
      "90": {
        "value": "#41100d",
        "original": {
          "value": "#41100D"
        },
        "name": "ColorRed90",
        "attributes": {
          "category": "color",
          "type": "red",
          "item": "90"
        },
        "path": [
          "color",
          "red",
          "90"
        ]
      }
    },
    "yellow": {
      "10": {
        "value": "#fff5dc",
        "original": {
          "value": "#FFF5DC"
        },
        "name": "ColorYellow10",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "10"
        },
        "path": [
          "color",
          "yellow",
          "10"
        ]
      },
      "20": {
        "value": "#ffedbf",
        "original": {
          "value": "#FFEDBF"
        },
        "name": "ColorYellow20",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "20"
        },
        "path": [
          "color",
          "yellow",
          "20"
        ]
      },
      "30": {
        "value": "#ffe6a1",
        "original": {
          "value": "#FFE6A1"
        },
        "name": "ColorYellow30",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "30"
        },
        "path": [
          "color",
          "yellow",
          "30"
        ]
      },
      "40": {
        "value": "#ffdd83",
        "original": {
          "value": "#FFDD83"
        },
        "name": "ColorYellow40",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "40"
        },
        "path": [
          "color",
          "yellow",
          "40"
        ]
      },
      "50": {
        "value": "#ffd563",
        "original": {
          "value": "#FFD563"
        },
        "name": "ColorYellow50",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "50"
        },
        "path": [
          "color",
          "yellow",
          "50"
        ]
      },
      "60": {
        "value": "#ddae4c",
        "original": {
          "value": "#DDAE4C"
        },
        "name": "ColorYellow60",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "60"
        },
        "path": [
          "color",
          "yellow",
          "60"
        ]
      },
      "70": {
        "value": "#ba8935",
        "original": {
          "value": "#BA8935"
        },
        "name": "ColorYellow70",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "70"
        },
        "path": [
          "color",
          "yellow",
          "70"
        ]
      },
      "80": {
        "value": "#97671d",
        "original": {
          "value": "#97671D"
        },
        "name": "ColorYellow80",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "80"
        },
        "path": [
          "color",
          "yellow",
          "80"
        ]
      },
      "90": {
        "value": "#744605",
        "original": {
          "value": "#744605"
        },
        "name": "ColorYellow90",
        "attributes": {
          "category": "color",
          "type": "yellow",
          "item": "90"
        },
        "path": [
          "color",
          "yellow",
          "90"
        ]
      }
    },
    "green": {
      "10": {
        "value": "#eef6e9",
        "original": {
          "value": "#EEF6E9"
        },
        "name": "ColorGreen10",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "10"
        },
        "path": [
          "color",
          "green",
          "10"
        ]
      },
      "20": {
        "value": "#c1e0af",
        "original": {
          "value": "#C1E0AF"
        },
        "name": "ColorGreen20",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "20"
        },
        "path": [
          "color",
          "green",
          "20"
        ]
      },
      "30": {
        "value": "#95c17e",
        "original": {
          "value": "#95C17E"
        },
        "name": "ColorGreen30",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "30"
        },
        "path": [
          "color",
          "green",
          "30"
        ]
      },
      "40": {
        "value": "#6e9f57",
        "original": {
          "value": "#6E9F57"
        },
        "name": "ColorGreen40",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "40"
        },
        "path": [
          "color",
          "green",
          "40"
        ]
      },
      "50": {
        "value": "#538140",
        "original": {
          "value": "#538140"
        },
        "name": "ColorGreen50",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "50"
        },
        "path": [
          "color",
          "green",
          "50"
        ]
      },
      "60": {
        "value": "#426835",
        "original": {
          "value": "#426835"
        },
        "name": "ColorGreen60",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "60"
        },
        "path": [
          "color",
          "green",
          "60"
        ]
      },
      "70": {
        "value": "#314d2a",
        "original": {
          "value": "#314D2A"
        },
        "name": "ColorGreen70",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "70"
        },
        "path": [
          "color",
          "green",
          "70"
        ]
      },
      "80": {
        "value": "#20341d",
        "original": {
          "value": "#20341D"
        },
        "name": "ColorGreen80",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "80"
        },
        "path": [
          "color",
          "green",
          "80"
        ]
      },
      "90": {
        "value": "#162315",
        "original": {
          "value": "#162315"
        },
        "name": "ColorGreen90",
        "attributes": {
          "category": "color",
          "type": "green",
          "item": "90"
        },
        "path": [
          "color",
          "green",
          "90"
        ]
      }
    },
    "brand": {
      "navy": {
        "value": "#172f41",
        "original": {
          "value": "#172F41"
        },
        "name": "ColorBrandNavy",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "navy"
        },
        "path": [
          "color",
          "brand",
          "navy"
        ]
      },
      "orange": {
        "value": "#ee6123",
        "original": {
          "value": "#EE6123"
        },
        "name": "ColorBrandOrange",
        "attributes": {
          "category": "color",
          "type": "brand",
          "item": "orange"
        },
        "path": [
          "color",
          "brand",
          "orange"
        ]
      }
    },
    "pure": {
      "black": {
        "value": "#000000",
        "original": {
          "value": "#000000"
        },
        "name": "ColorPureBlack",
        "attributes": {
          "category": "color",
          "type": "pure",
          "item": "black"
        },
        "path": [
          "color",
          "pure",
          "black"
        ]
      },
      "white": {
        "value": "#ffffff",
        "original": {
          "value": "#ffffff"
        },
        "name": "ColorPureWhite",
        "attributes": {
          "category": "color",
          "type": "pure",
          "item": "white"
        },
        "path": [
          "color",
          "pure",
          "white"
        ]
      }
    }
  },
  "font": {
    "sans": {
      "value": "'Proxima Nova', 'Open Sans', Arial, sans-serif",
      "original": {
        "value": "'Proxima Nova', 'Open Sans', Arial, sans-serif"
      },
      "name": "FontSans",
      "attributes": {
        "category": "font",
        "type": "sans"
      },
      "path": [
        "font",
        "sans"
      ]
    }
  },
  "grid": {
    "xl": {
      "totalWidth": {
        "value": "1140",
        "original": {
          "value": "1140"
        },
        "name": "GridXlTotalWidth",
        "attributes": {
          "category": "grid",
          "type": "xl",
          "item": "totalWidth"
        },
        "path": [
          "grid",
          "xl",
          "totalWidth"
        ]
      },
      "numberOfColumns": {
        "value": "12",
        "original": {
          "value": "12"
        },
        "name": "GridXlNumberOfColumns",
        "attributes": {
          "category": "grid",
          "type": "xl",
          "item": "numberOfColumns"
        },
        "path": [
          "grid",
          "xl",
          "numberOfColumns"
        ]
      },
      "columnWidth": {
        "value": "75",
        "original": {
          "value": "75"
        },
        "name": "GridXlColumnWidth",
        "attributes": {
          "category": "grid",
          "type": "xl",
          "item": "columnWidth"
        },
        "path": [
          "grid",
          "xl",
          "columnWidth"
        ]
      },
      "gutterWidth": {
        "value": "20",
        "original": {
          "value": "20"
        },
        "name": "GridXlGutterWidth",
        "attributes": {
          "category": "grid",
          "type": "xl",
          "item": "gutterWidth"
        },
        "path": [
          "grid",
          "xl",
          "gutterWidth"
        ]
      },
      "guttersOutside": {
        "value": "true",
        "original": {
          "value": "true"
        },
        "name": "GridXlGuttersOutside",
        "attributes": {
          "category": "grid",
          "type": "xl",
          "item": "guttersOutside"
        },
        "path": [
          "grid",
          "xl",
          "guttersOutside"
        ]
      }
    },
    "l": {
      "totalWidth": {
        "value": "860",
        "original": {
          "value": "860"
        },
        "name": "GridLTotalWidth",
        "attributes": {
          "category": "grid",
          "type": "l",
          "item": "totalWidth"
        },
        "path": [
          "grid",
          "l",
          "totalWidth"
        ]
      },
      "numberOfColumns": {
        "value": "12",
        "original": {
          "value": "12"
        },
        "name": "GridLNumberOfColumns",
        "attributes": {
          "category": "grid",
          "type": "l",
          "item": "numberOfColumns"
        },
        "path": [
          "grid",
          "l",
          "numberOfColumns"
        ]
      },
      "columnWidth": {
        "value": "52",
        "original": {
          "value": "52"
        },
        "name": "GridLColumnWidth",
        "attributes": {
          "category": "grid",
          "type": "l",
          "item": "columnWidth"
        },
        "path": [
          "grid",
          "l",
          "columnWidth"
        ]
      },
      "gutterWidth": {
        "value": "20",
        "original": {
          "value": "20"
        },
        "name": "GridLGutterWidth",
        "attributes": {
          "category": "grid",
          "type": "l",
          "item": "gutterWidth"
        },
        "path": [
          "grid",
          "l",
          "gutterWidth"
        ]
      },
      "guttersOutside": {
        "value": "true",
        "original": {
          "value": "true"
        },
        "name": "GridLGuttersOutside",
        "attributes": {
          "category": "grid",
          "type": "l",
          "item": "guttersOutside"
        },
        "path": [
          "grid",
          "l",
          "guttersOutside"
        ]
      }
    },
    "m": {
      "totalWidth": {
        "value": "560",
        "original": {
          "value": "560"
        },
        "name": "GridMTotalWidth",
        "attributes": {
          "category": "grid",
          "type": "m",
          "item": "totalWidth"
        },
        "path": [
          "grid",
          "m",
          "totalWidth"
        ]
      },
      "numberOfColumns": {
        "value": "6",
        "original": {
          "value": "6"
        },
        "name": "GridMNumberOfColumns",
        "attributes": {
          "category": "grid",
          "type": "m",
          "item": "numberOfColumns"
        },
        "path": [
          "grid",
          "m",
          "numberOfColumns"
        ]
      },
      "columnWidth": {
        "value": "73",
        "original": {
          "value": "73"
        },
        "name": "GridMColumnWidth",
        "attributes": {
          "category": "grid",
          "type": "m",
          "item": "columnWidth"
        },
        "path": [
          "grid",
          "m",
          "columnWidth"
        ]
      },
      "gutterWidth": {
        "value": "20",
        "original": {
          "value": "20"
        },
        "name": "GridMGutterWidth",
        "attributes": {
          "category": "grid",
          "type": "m",
          "item": "gutterWidth"
        },
        "path": [
          "grid",
          "m",
          "gutterWidth"
        ]
      },
      "guttersOutside": {
        "value": "true",
        "original": {
          "value": "true"
        },
        "name": "GridMGuttersOutside",
        "attributes": {
          "category": "grid",
          "type": "m",
          "item": "guttersOutside"
        },
        "path": [
          "grid",
          "m",
          "guttersOutside"
        ]
      }
    },
    "s": {
      "totalWidth": {
        "value": "355",
        "original": {
          "value": "355"
        },
        "name": "GridSTotalWidth",
        "attributes": {
          "category": "grid",
          "type": "s",
          "item": "totalWidth"
        },
        "path": [
          "grid",
          "s",
          "totalWidth"
        ]
      },
      "numberOfColumns": {
        "value": "4",
        "original": {
          "value": "4"
        },
        "name": "GridSNumberOfColumns",
        "attributes": {
          "category": "grid",
          "type": "s",
          "item": "numberOfColumns"
        },
        "path": [
          "grid",
          "s",
          "numberOfColumns"
        ]
      },
      "columnWidth": {
        "value": "69",
        "original": {
          "value": "69"
        },
        "name": "GridSColumnWidth",
        "attributes": {
          "category": "grid",
          "type": "s",
          "item": "columnWidth"
        },
        "path": [
          "grid",
          "s",
          "columnWidth"
        ]
      },
      "gutterWidth": {
        "value": "20",
        "original": {
          "value": "20"
        },
        "name": "GridSGutterWidth",
        "attributes": {
          "category": "grid",
          "type": "s",
          "item": "gutterWidth"
        },
        "path": [
          "grid",
          "s",
          "gutterWidth"
        ]
      },
      "guttersOutside": {
        "value": "true",
        "original": {
          "value": "true"
        },
        "name": "GridSGuttersOutside",
        "attributes": {
          "category": "grid",
          "type": "s",
          "item": "guttersOutside"
        },
        "path": [
          "grid",
          "s",
          "guttersOutside"
        ]
      }
    }
  },
  "size": {
    "font": {
      "s": {
        "value": "16rem",
        "original": {
          "value": "16"
        },
        "name": "SizeFontS",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "s"
        },
        "path": [
          "size",
          "font",
          "s"
        ]
      },
      "m": {
        "value": "18rem",
        "original": {
          "value": "18"
        },
        "name": "SizeFontM",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "m"
        },
        "path": [
          "size",
          "font",
          "m"
        ]
      },
      "l": {
        "value": "24rem",
        "original": {
          "value": "24"
        },
        "name": "SizeFontL",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "l"
        },
        "path": [
          "size",
          "font",
          "l"
        ]
      },
      "xl": {
        "value": "32rem",
        "original": {
          "value": "32"
        },
        "name": "SizeFontXl",
        "attributes": {
          "category": "size",
          "type": "font",
          "item": "xl"
        },
        "path": [
          "size",
          "font",
          "xl"
        ]
      }
    }
  }
};

/***/ }),

/***/ "./resources/webview.js":
/*!******************************!*\
  !*** ./resources/webview.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitly_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitly-tokens */ "./node_modules/bitly-tokens/dist/tokens.js");
/* harmony import */ var bitly_tokens__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bitly_tokens__WEBPACK_IMPORTED_MODULE_0__);


var sketchLog = function sketchLog(message) {
  window.postMessage("nativeLog", JSON.stringify({
    command: "log",
    args: [message]
  }));
}; // disable the context menu (eg. the right click menu) to have a more native feel


document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}); // call the plugin from the webview
// build list of grid sizes

var buildGridList = function buildGridList(sizes) {
  var gridTabContent = document.querySelector("#grid--content");

  for (var size in sizes) {
    var thisSize = bitly_tokens__WEBPACK_IMPORTED_MODULE_0___default.a.grid[size];
    var newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.innerHTML = "\n    <div class=\"cell capitalize\">".concat(thisSize.totalWidth.attributes.type, "</div>\n    <div class=\"cell\">").concat(thisSize.totalWidth.value, "px</div>\n    <div class=\"cell\">\n      <div class=\"button action\" data-command=\"newArtboard\" data-args=\"").concat(thisSize.totalWidth.attributes.type, "\">\n        Add\n      </div>\n    </div>\n    ");
    gridTabContent.appendChild(newRow);
  }
};

var buildColorList = function buildColorList(colors) {
  var gridTabContent = document.querySelector("#color--content");

  for (var color in colors) {
    for (var value in bitly_tokens__WEBPACK_IMPORTED_MODULE_0___default.a.color[color]) {
      var thisColor = bitly_tokens__WEBPACK_IMPORTED_MODULE_0___default.a.color[color][value];
      var newRow = document.createElement("div");
      newRow.classList.add("row");
      newRow.innerHTML = "\n      <div class=\"cell capitalize\">\n        <div class=\"swatch\" style=\"background-color:".concat(thisColor.value, "\"></div>\n        ").concat(thisColor.attributes.type, " ").concat(thisColor.attributes.item, "</div>\n      <div class=\"cell\">").concat(thisColor.value, "</div>\n      ");
      gridTabContent.appendChild(newRow);
    }
  }
};

buildGridList(bitly_tokens__WEBPACK_IMPORTED_MODULE_0___default.a.grid);
buildColorList(bitly_tokens__WEBPACK_IMPORTED_MODULE_0___default.a.color);
document.querySelectorAll(".action").forEach(function (item) {
  item.addEventListener("click", function () {
    var message = {
      command: item.dataset.command,
      args: item.dataset.args.split(",")
    };
    window.postMessage("nativeLog", JSON.stringify(message));
  });
});
document.querySelectorAll(".nav--item").forEach(function (item) {
  item.addEventListener("click", function (event) {
    var currentTab = document.querySelector('.tab--active');
    var currentNav = document.querySelector('.nav--active');
    var newNav = event.target.closest('.nav--item');
    var dest = newNav.dataset.destination;
    var newTab = document.querySelector(".tab--".concat(dest));
    currentNav.classList.remove('nav--active');
    currentTab.classList.remove('tab--active');
    newNav.classList.add('nav--active');
    newTab.classList.add('tab--active');
  });
});

/***/ })

/******/ });
//# sourceMappingURL=webview.js.map