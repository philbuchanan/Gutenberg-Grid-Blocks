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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/*! exports provided: alignmentControls, getAlignmentClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignmentControls", function() { return alignmentControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignmentClasses", function() { return getAlignmentClasses; });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
/**
 * Internal dependencies
 */


var alignmentControls = {
  top: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["alignTop"],
    title: __('Top Align (default)', 'pb')
  },
  centerVertical: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["alignCenterVertical"],
    title: __('Center', 'pb')
  },
  bottom: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["alignBottom"],
    title: __('Bottom Align', 'pb')
  },
  left: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["alignLeft"],
    title: __('Left Align (default)', 'pb')
  },
  centerHorizontal: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["alignCenterHorizontal"],
    title: __('Center', 'pb')
  },
  right: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["alignRight"],
    title: __('Right Align', 'pb')
  },
  spaceBetween: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["spaceBetween"],
    title: __('Space Between', 'pb')
  },
  spaceAround: {
    icon: _icons__WEBPACK_IMPORTED_MODULE_0__["spaceAround"],
    title: __('Space Around', 'pb')
  }
};
var getAlignmentClasses = function getAlignmentClasses(attributes) {
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
};

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

/***/ "./src/block-grid-item/edit.js":
/*!*************************************!*\
  !*** ./src/block-grid-item/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton;
var compose = wp.compose.compose;

function GridBlockItemEdit(_ref) {
  var clientId = _ref.clientId,
      removeBlock = _ref.removeBlock,
      attributes = _ref.attributes,
      hasChildBlocks = _ref.hasChildBlocks;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
    className: "components-toolbar__control",
    label: __('Delete block grid item', 'pb'),
    icon: "trash",
    onClick: function onClick() {
      return removeBlock(clientId);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "o-block-grid__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : function () {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, ownProps) {
  var clientId = ownProps.clientId;

  var _select = select('core/block-editor'),
      getBlockOrder = _select.getBlockOrder;

  return {
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
}), withDispatch(function (dispatch) {
  return {
    removeBlock: dispatch('core/block-editor').removeBlock
  };
}))(GridBlockItemEdit));

/***/ }),

/***/ "./src/block-grid-item/index.js":
/*!**************************************!*\
  !*** ./src/block-grid-item/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/block-grid-item/edit.js");


/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/**
 * Internal dependencies
 */


registerBlockType('pb/block-grid-item', {
  title: __('Block Grid Item', 'pb'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M18,1H2A1,1,0,0,0,1,2V18a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V2A1,1,0,0,0,18,1ZM17,17H3V3H17Z"
  })),
  parent: ['pb/block-grid-item'],
  category: 'layout',
  supports: {
    className: false,
    inserter: false,
    reusable: false,
    html: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "o-block-grid__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/block-grid/classes.js":
/*!***********************************!*\
  !*** ./src/block-grid/classes.js ***!
  \***********************************/
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

/***/ "./src/block-grid/edit.js":
/*!********************************!*\
  !*** ./src/block-grid/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _number_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number-control */ "./src/number-control.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/block-grid/classes.js");
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alignments */ "./src/alignments.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./src/icons.js");



/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;
var Fragment = wp.element.Fragment;
var createBlock = wp.blocks.createBlock;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar;
/**
 * Internal dependncies
 */






var getBlockGridTemplate = function getBlockGridTemplate(gridItems) {
  var template = [];

  for (var i = 0; i < gridItems; i++) {
    template.push(['pb/block-grid-item']);
  }

  return template;
};

function GridBlockEdit(_ref) {
  var clientId = _ref.clientId,
      className = _ref.className,
      insertBlock = _ref.insertBlock,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      hasChildBlocks = _ref.hasChildBlocks;

  function verticalControl(value) {
    var activeAlignment = _alignments__WEBPACK_IMPORTED_MODULE_4__["alignmentControls"][value];
    return {
      icon: activeAlignment.icon,
      title: activeAlignment.title,
      isActive: attributes.alignVertically === value,
      onClick: function onClick() {
        return setAttributes({
          'alignVertically': value
        });
      }
    };
  }

  function horizontalControl(value) {
    var alignment = _alignments__WEBPACK_IMPORTED_MODULE_4__["alignmentControls"][value];
    return {
      icon: alignment.icon,
      title: alignment.title,
      isActive: attributes.alignHorizontally === value,
      onClick: function onClick() {
        return setAttributes({
          'alignHorizontally': value
        });
      }
    };
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Number of Block Grid Items', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('How many block items do you want?', 'pb'),
    help: __('Be careful: If you reduce the number of block items, you will loose your existing content in the items removed.', 'pb'),
    value: attributes.gridItems,
    onChange: function onChange(count) {
      setAttributes({
        gridItems: count
      });
    },
    min: 2,
    max: 30
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Block Grid Items / Line', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('How many items should display in a single row at each screen size?', 'pb')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Extra Small Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        xs: count
      });
    },
    value: attributes.xs,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_5__["xsScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Small Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        sm: count
      });
    },
    value: attributes.sm,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_5__["smScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Medium Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        md: count
      });
    },
    value: attributes.md,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_5__["mdScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Large Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        lg: count
      });
    },
    value: attributes.lg,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_5__["lgScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Extral Large Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        xl: count
      });
    },
    value: attributes.xl,
    max: 6,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_5__["xlScreen"]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Alignment', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Align Horiztonally', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, {
    controls: ['left', 'centerHorizontal', 'right', 'spaceBetween', 'spaceAround'].map(horizontalControl)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Align Vertically', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, {
    controls: ['top', 'centerVertical', 'bottom'].map(verticalControl)
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: ['o-block-grid o-block-grid-' + attributes.lg].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_4__["getAlignmentClasses"])(attributes))).join(' ')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    template: getBlockGridTemplate(attributes.gridItems),
    templateLock: "all",
    allowedBlocks: ['pb/block-grid-item']
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, ownProps) {
  var clientId = ownProps.clientId;

  var _select = select('core/block-editor'),
      getBlockOrder = _select.getBlockOrder;

  return {
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
}))(GridBlockEdit));

/***/ }),

/***/ "./src/block-grid/index.js":
/*!*********************************!*\
  !*** ./src/block-grid/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block-grid/edit.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/block-grid/classes.js");
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alignments */ "./src/alignments.js");



/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
/**
 * Internal dependncies
 */




registerBlockType('pb/block-grid', {
  title: __('Block Grid', 'pb'),
  icon: 'grid-view',
  category: 'layout',
  keywords: [__('blockgrid', 'pb'), __('grid', 'pb'), __('columns', 'pb')],
  supports: {
    className: false
  },
  attributes: {
    gridItems: {
      type: 'number',
      default: 3
    },
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
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: ['o-block-grid'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(props.attributes)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_4__["getAlignmentClasses"])(props.attributes))).join(' ')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/grid-column/classes.js":
/*!************************************!*\
  !*** ./src/grid-column/classes.js ***!
  \************************************/
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

/***/ "./src/grid-column/edit.js":
/*!*********************************!*\
  !*** ./src/grid-column/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _number_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../number-control */ "./src/number-control.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./src/grid-column/classes.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./src/icons.js");


/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var PanelBody = wp.components.PanelBody;
/**
 * Internal dependencies
 */





function GridColumnItemEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      instanceId = _ref.instanceId,
      hasChildBlocks = _ref.hasChildBlocks;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Column Spans', 'pb')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('How many columns of the 12-column grid should this container span at each screen size?', 'pb')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extra Small Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        xs: count
      });
    },
    value: attributes.xs,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["xsScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Small Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        sm: count
      });
    },
    value: attributes.sm,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["smScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Medium Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        md: count
      });
    },
    value: attributes.md,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["mdScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Large Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        lg: count
      });
    },
    value: attributes.lg,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["lgScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extral Large Screens', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        xl: count
      });
    },
    value: attributes.xl,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["xlScreen"]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Column Offsets', 'pb'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('How many columns of the 12-column grid should this container be offset by at each screen size?', 'pb')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extra Small Screen Offset', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        offsetxs: count
      });
    },
    value: attributes.offsetxs,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["xsScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Small Screen Offset', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        offsetsm: count
      });
    },
    value: attributes.offsetsm,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["smScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Medium Screen Offset', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        offsetmd: count
      });
    },
    value: attributes.offsetmd,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["mdScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Large Screen Offset', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        offsetlg: count
      });
    },
    value: attributes.offsetlg,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["lgScreen"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __('Extral Large Screen Offset', 'pb'),
    onChange: function onChange(count) {
      setAttributes({
        offsetxl: count
      });
    },
    value: attributes.offsetxl,
    allowReset: true,
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["xlScreen"]
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : function () {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, ownProps) {
  var clientId = ownProps.clientId;

  var _select = select('core/block-editor'),
      getBlockOrder = _select.getBlockOrder;

  return {
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
}))(GridColumnItemEdit));

/***/ }),

/***/ "./src/grid-column/index.js":
/*!**********************************!*\
  !*** ./src/grid-column/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/grid-column/edit.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./src/grid-column/classes.js");


/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/**
 * Internal dependencies
 */



registerBlockType('pb/column', {
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
    inserter: false
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
      default: 6
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
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: Object(_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(props.attributes)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/grid/grid-row.js":
/*!******************************!*\
  !*** ./src/grid/grid-row.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _number_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number-control */ "./src/number-control.js");
/* harmony import */ var _alignments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alignments */ "./src/alignments.js");



/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var select = wp.data.select;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl,
    Toolbar = _wp$components.Toolbar,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/**
 * Internal dependncies
 */




var getColumnsTemplate = function getColumnsTemplate(columns) {
  var template = [];

  for (var i = 0; i < columns; i++) {
    template.push(['pb/column']);
  }

  return template;
};

registerBlockType('pb/row', {
  title: __('Columns', 'pb'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Path, {
    d: "M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"
  })),
  category: 'layout',
  keywords: [__('row', 'pb'), __('grid', 'pb'), __('span', 'pb')],
  supports: {
    className: false
  },
  attributes: {
    columns: {
      type: 'number',
      default: 2
    },
    alignVertically: {
      type: 'sting',
      default: 'top'
    },
    alignHorizontally: {
      type: 'string',
      default: 'left'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    function getColumnSpanClasses() {
      var columnClasses = [];
      select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.map(function (item, index) {
        columnClasses.push('o-row--column-' + (index + 1) + '-span-' + item.attributes.lg);
      });
      return columnClasses;
    }

    function verticalControl(value) {
      var activeAlignment = _alignments__WEBPACK_IMPORTED_MODULE_3__["alignmentControls"][value];
      return {
        icon: activeAlignment.icon,
        title: activeAlignment.title,
        isActive: attributes.alignVertically === value,
        onClick: function onClick() {
          return setAttributes({
            'alignVertically': value
          });
        }
      };
    }

    function horizontalControl(value) {
      var alignment = _alignments__WEBPACK_IMPORTED_MODULE_3__["alignmentControls"][value];
      return {
        icon: alignment.icon,
        title: alignment.title,
        isActive: attributes.alignHorizontally === value,
        onClick: function onClick() {
          return setAttributes({
            'alignHorizontally': value
          });
        }
      };
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Number of Columns', 'pb')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_number_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __('How many column containers do you want?', 'pb'),
      help: __('Be careful: If you reduce the number of column containers, you will loose your existing content in the containers removed.', 'pb'),
      value: attributes.columns,
      onChange: function onChange(nextColumns) {
        setAttributes({
          columns: nextColumns
        });
      },
      max: 6
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Alignment', 'pb')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
      label: __('Align Horiztonally', 'pb')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, {
      controls: ['left', 'centerHorizontal', 'right', 'spaceBetween', 'spaceAround'].map(horizontalControl)
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
      label: __('Align Vertically', 'pb')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, {
      controls: ['top', 'centerVertical', 'bottom'].map(verticalControl)
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: ['o-row', 'o-row--columns-' + attributes.columns].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getColumnSpanClasses()), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_3__["getAlignmentClasses"])(props.attributes))).join(' ')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: getColumnsTemplate(attributes.columns),
      templateLock: "all",
      allowedBlocks: ['pb/column']
    })));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: ['o-row'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_alignments__WEBPACK_IMPORTED_MODULE_3__["getAlignmentClasses"])(props.attributes))).join(' ')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

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
/* harmony import */ var _grid_grid_row_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid-row.js */ "./src/grid/grid-row.js");
/* harmony import */ var _grid_column___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-column/ */ "./src/grid-column/index.js");
/* harmony import */ var _block_grid___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-grid/ */ "./src/block-grid/index.js");
/* harmony import */ var _block_grid_item___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-grid-item/ */ "./src/block-grid-item/index.js");






/***/ }),

/***/ "./src/number-control.js":
/*!*******************************!*\
  !*** ./src/number-control.js ***!
  \*******************************/
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
    setLocaleData = _wp$i18n.setLocaleData;
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
      allowReset = _ref.allowReset,
      icon = _ref.icon,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className", "label", "value", "instanceId", "onChange", "help", "min", "max", "allowReset", "icon"]);

  var id = "number-control-".concat(instanceId);

  var onChangeValue = function onChangeValue(event) {
    onChange(event.target.value === '' ? '' : parseInt(event.target.value));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, !!icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Icon, {
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
    min: !!min ? min : 1,
    max: !!max ? max : 11,
    step: 1
  }, props)), !!allowReset && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
    isLink: true,
    isDestructive: true,
    onClick: function onClick() {
      return onChange('');
    }
  }, __('Reset', 'pb')));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(NumberControl));

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