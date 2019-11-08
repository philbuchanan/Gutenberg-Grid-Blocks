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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/alignments.js":
/*!***************************!*\
  !*** ./src/alignments.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = (function (attributes) {
  var classes = [];

  if (attributes.alignHorizontally) {
    switch (attributes.alignHorizontally) {
      case 'centerHorizontal':
        classes.push('u-justify-content-center');
        break;

      case 'spaceBetween':
        classes.push('u-justify-content-space-between');
        break;

      case 'spaceAround':
        classes.push('u-justify-content-space-around');
        break;

      case 'right':
        classes.push('u-justify-content-end');
        break;
    }
  }

  if (attributes.alignVertically) {
    switch (attributes.alignVertically) {
      case 'centerVertical':
        classes.push('u-align-items-center');
        break;

      case 'bottom':
        classes.push('u-align-items-end');
        break;
    }
  }

  return classes;
});

/***/ }),

/***/ "./src/blacklist/blacklist.js":
/*!************************************!*\
  !*** ./src/blacklist/blacklist.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

wp.domReady(function () {
  // Default columns block is replaced by this plugin.
  wp.blocks.unregisterBlockType('core/columns');
});

/***/ }),

/***/ "./src/block-grid/block-grid-item/edit.js":
/*!************************************************!*\
  !*** ./src/block-grid/block-grid-item/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "o-block-grid__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null));
});

/***/ }),

/***/ "./src/block-grid/block-grid-item/index.js":
/*!*************************************************!*\
  !*** ./src/block-grid/block-grid-item/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/block-grid/block-grid-item/settings.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-grid/block-grid-item/edit.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
/**
 * Internal dependencies
 */



registerBlockType('pb/block-grid-item', _objectSpread({}, _settings__WEBPACK_IMPORTED_MODULE_2__["default"], {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "o-block-grid__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
}));

/***/ }),

/***/ "./src/block-grid/block-grid-item/settings.js":
/*!****************************************************!*\
  !*** ./src/block-grid/block-grid-item/settings.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Block Grid Item', 'pb'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M18,1H2A1,1,0,0,0,1,2V18a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V2A1,1,0,0,0,18,1ZM17,17H3V3H17Z"
  })),
  parent: ['pb/block-grid'],
  category: 'layout',
  supports: {
    className: false,
    reusable: false
  }
});

/***/ }),

/***/ "./src/block-grid/block-grid/classes.js":
/*!**********************************************!*\
  !*** ./src/block-grid/block-grid/classes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (attributes) {
  var classes = [];
  if (attributes.xs) classes.push('o-block-grid-' + attributes.xs);
  if (attributes.sm) classes.push('o-block-grid-' + attributes.sm + '-sm');
  if (attributes.md) classes.push('o-block-grid-' + attributes.md + '-md');
  if (attributes.lg) classes.push('o-block-grid-' + attributes.lg + '-lg');
  if (attributes.xl) classes.push('o-block-grid-' + attributes.xl + '-xl');
  return classes;
});

/***/ }),

/***/ "./src/block-grid/block-grid/edit.js":
/*!*******************************************!*\
  !*** ./src/block-grid/block-grid/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_number_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/number-control */ "./src/components/number-control.js");
/* harmony import */ var _components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alignment-toolbar */ "./src/components/alignment-toolbar.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes */ "./src/block-grid/block-grid/classes.js");
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../alignments */ "./src/alignments.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;
var Fragment = wp.element.Fragment;
var createBlock = wp.blocks.createBlock;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
/**
 * Internal dependncies
 */






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected;
  var alignVertically = attributes.alignVertically,
      alignHorizontally = attributes.alignHorizontally,
      xs = attributes.xs,
      sm = attributes.sm,
      md = attributes.md,
      lg = attributes.lg,
      xl = attributes.xl;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "horizontal",
    selected: alignHorizontally,
    onChange: function onChange(alignHorizontally) {
      return setAttributes({
        alignHorizontally: alignHorizontally
      });
    },
    isCollapsed: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "vertical",
    selected: alignVertically,
    onChange: function onChange(alignVertically) {
      return setAttributes({
        alignVertically: alignVertically
      });
    },
    isCollapsed: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Block Grid Items Per Line', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('How many items should display in a single row at each screen size?', 'pb')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Extra Small Screens', 'pb'),
    onChange: function onChange(xs) {
      return setAttributes({
        xs: xs
      });
    },
    value: xs,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_6__["xsScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Small Screens', 'pb'),
    onChange: function onChange(sm) {
      return setAttributes({
        sm: sm
      });
    },
    value: sm,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_6__["smScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Medium Screens', 'pb'),
    onChange: function onChange(md) {
      return setAttributes({
        md: md
      });
    },
    value: md,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_6__["mdScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Large Screens', 'pb'),
    onChange: function onChange(lg) {
      return setAttributes({
        lg: lg
      });
    },
    value: lg,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_6__["lgScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Extral Large Screens', 'pb'),
    onChange: function onChange(xl) {
      return setAttributes({
        xl: xl
      });
    },
    value: xl,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_6__["xlScreen"]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Alignment', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Align Horiztonally', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "horizontal",
    selected: alignHorizontally,
    onChange: function onChange(alignHorizontally) {
      return setAttributes({
        alignHorizontally: alignHorizontally
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Align Vertically', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "vertical",
    selected: alignVertically,
    onChange: function onChange(alignVertically) {
      return setAttributes({
        alignVertically: alignVertically
      });
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: ['o-block-grid o-block-grid-' + lg].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_5__["default"])(attributes))).join(' ')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    template: [['pb/block-grid-item'], ['pb/block-grid-item']],
    allowedBlocks: ['pb/block-grid-item']
  })));
});

/***/ }),

/***/ "./src/block-grid/block-grid/index.js":
/*!********************************************!*\
  !*** ./src/block-grid/block-grid/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/block-grid/block-grid/settings.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-grid/block-grid/edit.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes */ "./src/block-grid/block-grid/classes.js");
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../alignments */ "./src/alignments.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
/**
 * Internal dependencies
 */





registerBlockType('pb/block-grid', _objectSpread({}, _settings__WEBPACK_IMPORTED_MODULE_3__["default"], {
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: ['o-block-grid'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_classes__WEBPACK_IMPORTED_MODULE_5__["default"])(props.attributes)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_6__["getAlignmentClasses"])(props.attributes))).join(' ')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null));
  }
}));

/***/ }),

/***/ "./src/block-grid/block-grid/settings.js":
/*!***********************************************!*\
  !*** ./src/block-grid/block-grid/settings.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/block-grid/block-grid/classes.js");
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../alignments */ "./src/alignments.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependncies
 */



/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Block Grid', 'pb'),
  icon: 'grid-view',
  category: 'layout',
  keywords: [__('blockgrid', 'pb'), __('grid', 'pb'), __('columns', 'pb')],
  supports: {
    className: false
  },
  attributes: {
    alignVertically: {
      type: 'string',
      default: 'top'
    },
    alignHorizontally: {
      type: 'string',
      default: 'left'
    },
    xs: {
      type: 'number',
      default: ''
    },
    sm: {
      type: 'number',
      default: ''
    },
    md: {
      type: 'number',
      default: ''
    },
    lg: {
      type: 'number',
      default: 3
    },
    xl: {
      type: 'number',
      default: ''
    }
  }
});

/***/ }),

/***/ "./src/block-grid/index.js":
/*!*********************************!*\
  !*** ./src/block-grid/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_grid___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-grid/ */ "./src/block-grid/block-grid/index.js");
/* harmony import */ var _block_grid_item___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-grid-item/ */ "./src/block-grid/block-grid-item/index.js");



/***/ }),

/***/ "./src/components/alignment-toolbar.js":
/*!*********************************************!*\
  !*** ./src/components/alignment-toolbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./src/icons.js");



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Toolbar = wp.components.Toolbar;
/**
 * Internal dependencies
 */


var alignmentControls = {
  top: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["alignTop"],
    title: __('Top Align (default)', 'pb')
  },
  centerVertical: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["alignCenterVertical"],
    title: __('Center', 'pb')
  },
  bottom: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["alignBottom"],
    title: __('Bottom Align', 'pb')
  },
  left: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["alignLeft"],
    title: __('Left Align (default)', 'pb')
  },
  centerHorizontal: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["alignCenterHorizontal"],
    title: __('Center', 'pb')
  },
  right: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["alignRight"],
    title: __('Right Align', 'pb')
  },
  spaceBetween: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["spaceBetween"],
    title: __('Space Between', 'pb')
  },
  spaceAround: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["spaceAround"],
    title: __('Space Around', 'pb')
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      type = _ref.type,
      selected = _ref.selected,
      onChange = _ref.onChange,
      isCollapsed = _ref.isCollapsed,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["className", "type", "selected", "onChange", "isCollapsed"]);

  var controls = type === 'vertical' ? ['top', 'centerVertical', 'bottom'] : ['left', 'centerHorizontal', 'right', 'spaceBetween', 'spaceAround'];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, {
    icon: alignmentControls[selected].icon,
    controls: controls.map(function (value) {
      var activeAlignment = alignmentControls[value];
      return {
        icon: activeAlignment.icon,
        title: activeAlignment.title,
        isActive: selected === value,
        onClick: function onClick() {
          onChange(value);
        }
      };
    }),
    isCollapsed: isCollapsed
  });
});

/***/ }),

/***/ "./src/components/number-control.js":
/*!******************************************!*\
  !*** ./src/components/number-control.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var withInstanceId = wp.compose.withInstanceId;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    Icon = _wp$components.Icon;

function NumberControl(_ref) {
  var className = _ref.className,
      label = _ref.label,
      value = _ref.value,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      help = _ref.help,
      min = _ref.min,
      max = _ref.max,
      size = _ref.size,
      parentAttributes = _ref.parentAttributes,
      showPercentage = _ref.showPercentage,
      allowReset = _ref.allowReset,
      icon = _ref.icon,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className", "label", "value", "instanceId", "onChange", "help", "min", "max", "size", "parentAttributes", "showPercentage", "allowReset", "icon"]);

  var id = "number-control-".concat(instanceId); // Set min and max defaults if not specified

  min = typeof min !== 'undefined' ? min : 1;
  max = typeof max !== 'undefined' ? max : 12;

  var onChangeValue = function onChangeValue(event) {
    var value = event.target.value;

    if (value !== '') {
      value = parseInt(value);

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }
    }

    onChange(value);
  };

  var getPercentageWidth = function getPercentageWidth(value) {
    var width = 100;

    if (value) {
      width = Math.round(value / 12 * 100);
    } else {
      var values = [parentAttributes.xs, parentAttributes.sm, parentAttributes.md, parentAttributes.lg, parentAttributes.xl];
      var sizes = {
        xs: 0,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4
      };
      /**
       * If no value is set, larger screens inherit their column spans
       * from smaller screens. We need to loop over each screen size to
       * find the next largest screen size that has a span (`value`) set.
       */

      for (var i = sizes[size]; i >= 0; i -= 1) {
        if (values[i]) {
          width = Math.round(values[i] / 12 * 100);
          /**
           * If this screen size has a value, we can break out of the
           * loop. We'll use this value to calculate the width.
           */

          break;
        }
      }
    }

    return sprintf(__('%d%% wide', 'pb'), width);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, !!icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Icon, {
    icon: icon,
    size: 20,
    className: "c-number-control__icon"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "c-number-control__input",
    type: "number",
    id: id,
    value: value,
    onChange: onChangeValue,
    "aria-describedby": !!help ? id + '__help' : undefined,
    min: min,
    max: max,
    step: 1
  }, props)), !!showPercentage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "c-number-control__percentage"
  }, getPercentageWidth(value)), !!allowReset && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
    isLink: true,
    isDestructive: true,
    onClick: function onClick() {
      return onChange('');
    },
    className: "c-number-control__reset"
  }, __('Reset', 'pb'))));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(NumberControl));

/***/ }),

/***/ "./src/grid/grid-column/classes.js":
/*!*****************************************!*\
  !*** ./src/grid/grid-column/classes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (attributes) {
  var classes = ['o-col'];
  if (attributes.xs) classes.push('u-' + attributes.xs + 'of12');
  if (attributes.sm) classes.push('u-' + attributes.sm + 'of12-sm');
  if (attributes.md) classes.push('u-' + attributes.md + 'of12-md');
  if (attributes.lg) classes.push('u-' + attributes.lg + 'of12-lg');
  if (attributes.xl) classes.push('u-' + attributes.xl + 'of12-xl');
  if (attributes.offsetxs) classes.push('u-offset-' + attributes.offsetxs + 'of12');
  if (attributes.offsetsm) classes.push('u-offset-' + attributes.offsetsm + 'of12-sm');
  if (attributes.offsetmd) classes.push('u-offset-' + attributes.offsetmd + 'of12-md');
  if (attributes.offsetlg) classes.push('u-offset-' + attributes.offsetlg + 'of12-lg');
  if (attributes.offsetxl) classes.push('u-offset-' + attributes.offsetxl + 'of12-xl');
  return classes.join(' ');
});

/***/ }),

/***/ "./src/grid/grid-column/edit.js":
/*!**************************************!*\
  !*** ./src/grid/grid-column/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_number_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/number-control */ "./src/components/number-control.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/grid/grid-column/classes.js");


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var PanelBody = wp.components.PanelBody;
/**
 * Internal dependencies
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      instanceId = _ref.instanceId;
  var xs = attributes.xs,
      sm = attributes.sm,
      md = attributes.md,
      lg = attributes.lg,
      xl = attributes.xl,
      offsetxs = attributes.offsetxs,
      offsetsm = attributes.offsetsm,
      offsetmd = attributes.offsetmd,
      offsetlg = attributes.offsetlg,
      offsetxl = attributes.offsetxl;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Column Spans', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('How many columns of the 12-column grid should this container span at each screen size?', 'pb')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extra Small Screens', 'pb'),
    onChange: function onChange(xs) {
      return setAttributes({
        xs: xs
      });
    },
    value: xs,
    parentAttributes: attributes,
    size: "xs",
    allowReset: true,
    showPercentage: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["xsScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Small Screens', 'pb'),
    onChange: function onChange(sm) {
      return setAttributes({
        sm: sm
      });
    },
    value: sm,
    parentAttributes: attributes,
    size: "sm",
    allowReset: true,
    showPercentage: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["smScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Medium Screens', 'pb'),
    onChange: function onChange(md) {
      return setAttributes({
        md: md
      });
    },
    value: md,
    parentAttributes: attributes,
    size: "md",
    allowReset: true,
    showPercentage: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["mdScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Large Screens', 'pb'),
    onChange: function onChange(lg) {
      return setAttributes({
        lg: lg
      });
    },
    value: lg,
    parentAttributes: attributes,
    size: "lg",
    allowReset: true,
    showPercentage: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["lgScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extral Large Screens', 'pb'),
    onChange: function onChange(xl) {
      return setAttributes({
        xl: xl
      });
    },
    value: xl,
    parentAttributes: attributes,
    size: "xl",
    allowReset: true,
    showPercentage: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["xlScreen"]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Column Offsets', 'pb'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('How many columns of the 12-column grid should this container be offset by at each screen size?', 'pb')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extra Small Screen Offset', 'pb'),
    onChange: function onChange(offsetxs) {
      return setAttributes({
        offsetxs: offsetxs
      });
    },
    value: offsetxs,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["xsScreen"],
    max: 11
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Small Screen Offset', 'pb'),
    onChange: function onChange(offsetsm) {
      return setAttributes({
        offsetsm: offsetsm
      });
    },
    value: offsetsm,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["smScreen"],
    max: 11
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Medium Screen Offset', 'pb'),
    onChange: function onChange(offsetmd) {
      return setAttributes({
        offsetmd: offsetmd
      });
    },
    value: offsetmd,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["mdScreen"],
    max: 11
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Large Screen Offset', 'pb'),
    onChange: function onChange(offsetlg) {
      return setAttributes({
        offsetlg: offsetlg
      });
    },
    value: offsetlg,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["lgScreen"],
    max: 11
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extral Large Screen Offset', 'pb'),
    onChange: function onChange(offsetxl) {
      return setAttributes({
        offsetxl: offsetxl
      });
    },
    value: offsetxl,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["xlScreen"],
    max: 11
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(attributes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
});

/***/ }),

/***/ "./src/grid/grid-column/index.js":
/*!***************************************!*\
  !*** ./src/grid/grid-column/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/grid/grid-column/settings.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/grid/grid-column/edit.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes */ "./src/grid/grid-column/classes.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/**
 * Internal dependencies
 */




registerBlockType('pb/column', _objectSpread({}, _settings__WEBPACK_IMPORTED_MODULE_2__["default"], {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: Object(_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(props.attributes)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
}));

/***/ }),

/***/ "./src/grid/grid-column/settings.js":
/*!******************************************!*\
  !*** ./src/grid/grid-column/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Grid Column', 'pb'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"
  })),
  category: 'layout',
  parent: ['pb/row'],
  supports: {
    className: false,
    reusable: false
  },
  attributes: {
    xs: {
      type: 'number',
      default: ''
    },
    sm: {
      type: 'number',
      default: ''
    },
    md: {
      type: 'number',
      default: ''
    },
    lg: {
      type: 'number',
      default: ''
    },
    xl: {
      type: 'number',
      default: ''
    },
    offsetxs: {
      type: 'number',
      default: ''
    },
    offsetsm: {
      type: 'number',
      default: ''
    },
    offsetmd: {
      type: 'number',
      default: ''
    },
    offsetlg: {
      type: 'number',
      default: ''
    },
    offsetxl: {
      type: 'number',
      default: ''
    }
  }
});

/***/ }),

/***/ "./src/grid/grid/edit.js":
/*!*******************************!*\
  !*** ./src/grid/grid/edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_number_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/number-control */ "./src/components/number-control.js");
/* harmony import */ var _components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alignment-toolbar */ "./src/components/alignment-toolbar.js");
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alignments */ "./src/alignments.js");



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var Fragment = wp.element.Fragment;
var select = wp.data.select;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl;
/**
 * Internal dependncies
 */





var GridBlockEdit = function GridBlockEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      childBlocks = _ref.childBlocks;
  var alignVertically = attributes.alignVertically,
      alignHorizontally = attributes.alignHorizontally;

  var getColumnSpanClasses = function getColumnSpanClasses() {
    var columnClasses = [];
    childBlocks.map(function (item, index) {
      var base = 'o-row--column-' + (index + 1) + '-';
      var width = 12;
      var offset = 0;
      /**
       * Since larger screen sizes inherit column spans from smaller
       * screen sizes (if the large screen size doesn't have a span
       * specified), we'll loop over each screen size until we find one
       * with a setting, and use that span (or offset) to display content
       * in the editor.
       */

      var sizes = ['lg', 'md', 'sm', 'xs'];

      for (var i = 0; i < sizes.length; i++) {
        if (item.attributes[sizes[i]]) {
          width = item.attributes[sizes[i]];
          break;
        }
      }

      for (var _i = 0; _i < sizes.length; _i++) {
        if (item.attributes['offset' + sizes[_i]]) {
          offset = item.attributes['offset' + sizes[_i]];
          break;
        }
      }

      ;
      columnClasses.push(base + 'span-' + width);

      if (offset > 0) {
        columnClasses.push(base + 'offset-' + offset);
      }
    });
    return columnClasses;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "horizontal",
    selected: alignHorizontally,
    onChange: function onChange(alignHorizontally) {
      return setAttributes({
        alignHorizontally: alignHorizontally
      });
    },
    isCollapsed: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "vertical",
    selected: alignVertically,
    onChange: function onChange(alignVertically) {
      return setAttributes({
        alignVertically: alignVertically
      });
    },
    isCollapsed: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Alignment', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Align Horiztonally', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "horizontal",
    selected: alignHorizontally,
    onChange: function onChange(alignHorizontally) {
      return setAttributes({
        alignHorizontally: alignHorizontally
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Align Vertically', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "vertical",
    selected: alignVertically,
    onChange: function onChange(alignVertically) {
      return setAttributes({
        alignVertically: alignVertically
      });
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: ['o-row'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getColumnSpanClasses()), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_4__["default"])(attributes))).join(' ')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    template: [['pb/column', {
      md: 6
    }], ['pb/column', {
      md: 6
    }]],
    allowedBlocks: ['pb/column']
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, ownProps) {
  return {
    childBlocks: select('core/block-editor').getBlocksByClientId(ownProps.clientId)[0].innerBlocks
  };
}))(GridBlockEdit));

/***/ }),

/***/ "./src/grid/grid/index.js":
/*!********************************!*\
  !*** ./src/grid/grid/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../alignments */ "./src/alignments.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/grid/grid/settings.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/grid/grid/edit.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/**
 * Internal dependncies
 */




registerBlockType('pb/row', _objectSpread({}, _settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: ['o-row'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_3__["getAlignmentClasses"])(props.attributes))).join(' ')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null));
  }
}));

/***/ }),

/***/ "./src/grid/grid/settings.js":
/*!***********************************!*\
  !*** ./src/grid/grid/settings.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Columns', 'pb'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"
  })),
  category: 'layout',
  keywords: [__('row', 'pb'), __('grid', 'pb'), __('span', 'pb')],
  supports: {
    className: false
  },
  attributes: {
    alignVertically: {
      type: 'sting',
      default: 'top'
    },
    alignHorizontally: {
      type: 'string',
      default: 'left'
    }
  }
});

/***/ }),

/***/ "./src/grid/index.js":
/*!***************************!*\
  !*** ./src/grid/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid/ */ "./src/grid/grid/index.js");
/* harmony import */ var _grid_column___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-column/ */ "./src/grid/grid-column/index.js");



/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: alignTop, alignCenterVertical, alignBottom, alignLeft, alignCenterHorizontal, alignRight, spaceBetween, spaceAround, xsScreen, smScreen, mdScreen, lgScreen, xlScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignTop", function() { return alignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignCenterVertical", function() { return alignCenterVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignBottom", function() { return alignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignLeft", function() { return alignLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignCenterHorizontal", function() { return alignCenterHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignRight", function() { return alignRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceBetween", function() { return spaceBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceAround", function() { return spaceAround; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xsScreen", function() { return xsScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smScreen", function() { return smScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdScreen", function() { return mdScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lgScreen", function() { return lgScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlScreen", function() { return xlScreen; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var alignTop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
}));
var alignCenterVertical = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
}));
var alignBottom = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
}));
var alignLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M11,16V13H21V11H11V8L7,12ZM3,20H5V4H3Z"
}));
var alignCenterHorizontal = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M19,16V13h4V11H19V8l-4,4ZM5,8v3H1v2H5v3l4-4Zm6,12h2V4H11Z"
}));
var alignRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M13,8v3H3v2H13v3l4-4Zm8-4H19V20h2Z"
}));
var spaceBetween = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M3,20H5V4H3ZM13,1H11V5H8l4,4,4-4H13Zm6,3V20h2V4Z"
}));
var spaceAround = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M11,20h2V4H11ZM6,1H4V5H1L5,9,9,5H6ZM20,5V1H18V5H15l4,4,4-4Z"
})); // Screen sizes

var xsScreen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M9,6v5l5-5Zm7.5-4H6.5A1.5,1.5,0,0,0,5,3.5v17A1.5,1.5,0,0,0,6.5,22h10A1.5,1.5,0,0,0,18,20.5V3.5A1.5,1.5,0,0,0,16.5,2ZM16,17H7V4h9Z"
}));
var smScreen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M8,5v6l6-6ZM18.5,1H5.5A1.5,1.5,0,0,0,4,2.5v19A1.5,1.5,0,0,0,5.5,23h13A1.5,1.5,0,0,0,20,21.5V2.5A1.5,1.5,0,0,0,18.5,1ZM18,21H6V3H18Z"
}));
var mdScreen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M21.5,4H2.5A1.5,1.5,0,0,0,1,5.5v13A1.5,1.5,0,0,0,2.5,20h19A1.5,1.5,0,0,0,23,18.5V5.5A1.5,1.5,0,0,0,21.5,4ZM21,18H3V6H21ZM5,8v6l6-6Z"
}));
var lgScreen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0,20v1.5A1.5,1.5,0,0,0,1.5,23h21A1.5,1.5,0,0,0,24,21.5V20Zm5-8L18,6H5ZM2.46,19H21.54A1.47,1.47,0,0,0,23,17.54V3.46A1.47,1.47,0,0,0,21.54,2H2.46A1.47,1.47,0,0,0,1,3.46V17.54A1.47,1.47,0,0,0,2.46,19ZM3,4H21V17H3Z"
}));
var xlScreen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M22.5,0H1.5A1.5,1.5,0,0,0,0,1.5v15A1.5,1.5,0,0,0,1.5,18H9v3H7a2,2,0,0,0-2,2v1H19V23a2,2,0,0,0-2-2H15V18h7.5A1.5,1.5,0,0,0,24,16.5V1.5A1.5,1.5,0,0,0,22.5,0ZM21,14H3V3H21ZM4.5,4.5v6l13-6Z"
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blacklist_blacklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blacklist/blacklist */ "./src/blacklist/blacklist.js");
/* harmony import */ var _blacklist_blacklist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blacklist_blacklist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/ */ "./src/grid/index.js");
/* harmony import */ var _block_grid___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-grid/ */ "./src/block-grid/index.js");




/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map