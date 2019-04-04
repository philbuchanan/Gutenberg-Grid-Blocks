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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/block-grid-item.js":
/*!***********************************!*\
  !*** ./blocks/block-grid-item.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const {\n  __,\n  setLocaleData\n} = wp.i18n;\nconst {\n  registerBlockType\n} = wp.blocks;\nconst {\n  InnerBlocks\n} = wp.editor;\nconst {\n  SVG,\n  Path\n} = wp.components;\nregisterBlockType('pb/block-grid-item', {\n  title: __('Block Grid Item', 'pb'),\n  icon: wp.element.createElement(SVG, {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    width: \"20\",\n    height: \"20\"\n  }, wp.element.createElement(Path, {\n    d: \"M18,1H2A1,1,0,0,0,1,2V18a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V2A1,1,0,0,0,18,1ZM17,17H3V3H17Z\"\n  })),\n  parent: ['pb/block-grid-item'],\n  category: 'layout',\n  supports: {\n    className: false,\n    inserter: false\n  },\n  edit: props => {\n    return wp.element.createElement(\"div\", {\n      className: \"o-block-grid__item\"\n    }, wp.element.createElement(InnerBlocks, {\n      templateLock: false\n    }));\n  },\n  save: props => {\n    return wp.element.createElement(\"div\", {\n      className: \"o-block-grid__item\"\n    }, wp.element.createElement(InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack:///./blocks/block-grid-item.js?");

/***/ }),

/***/ "./blocks/block-grid.js":
/*!******************************!*\
  !*** ./blocks/block-grid.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const {\n  __,\n  setLocaleData\n} = wp.i18n;\nconst {\n  registerBlockType\n} = wp.blocks;\nconst {\n  Fragment\n} = wp.element;\nconst {\n  InspectorControls,\n  InnerBlocks\n} = wp.editor;\nconst {\n  PanelBody,\n  SelectControl,\n  RangeControl\n} = wp.components;\n\nconst getBlockGridClasses = attributes => {\n  var classes = ['o-block-grid'];\n  if (attributes.xs) classes.push('o-block-grid-' + attributes.xs);\n  if (attributes.sm) classes.push('o-block-grid-' + attributes.sm + '-sm');\n  if (attributes.md) classes.push('o-block-grid-' + attributes.md + '-md');\n  if (attributes.lg) classes.push('o-block-grid-' + attributes.lg + '-lg');\n  if (attributes.xl) classes.push('o-block-grid-' + attributes.xl + '-xl');\n\n  if (attributes.alignItemsVertically) {\n    switch (attributes.alignItemsVertically) {\n      case 'center':\n        classes.push('u-align-items-center');\n        break;\n\n      case 'end':\n        classes.push('u-align-items-end');\n        break;\n    }\n  }\n\n  if (attributes.alignItemsHorizontally) {\n    switch (attributes.alignItemsHorizontally) {\n      case 'center':\n        classes.push('u-justify-content-center');\n        break;\n\n      case 'space-between':\n        classes.push('u-justify-content-space-between');\n        break;\n\n      case 'space-around':\n        classes.push('u-justify-content-space-around');\n        break;\n    }\n  }\n\n  return classes.join(' ');\n};\n\nconst allowedBlocks = ['pb/block-grid-item'];\n\nconst getBlockGridTemplate = gridItems => {\n  var template = [];\n\n  for (var i = 0; i < gridItems; i++) {\n    template.push(['pb/block-grid-item']);\n  }\n\n  return template;\n};\n\nregisterBlockType('pb/block-grid', {\n  title: __('Block Grid', 'pb'),\n  icon: 'grid-view',\n  category: 'layout',\n  keywords: [__('blockgrid', 'pb'), __('grid', 'pb'), __('columns', 'pb')],\n  supports: {\n    className: false\n  },\n  attributes: {\n    gridItems: {\n      type: 'number',\n      default: 3\n    },\n    alignItemsVertically: {\n      type: 'string',\n      default: ''\n    },\n    alignItemsHorizontally: {\n      type: 'string',\n      default: ''\n    },\n    xs: {\n      type: 'number',\n      default: ''\n    },\n    sm: {\n      type: 'number',\n      default: ''\n    },\n    md: {\n      type: 'number',\n      default: ''\n    },\n    lg: {\n      type: 'number',\n      default: 3\n    },\n    xl: {\n      type: 'number',\n      default: ''\n    }\n  },\n  edit: props => {\n    const {\n      className,\n      attributes: {\n        gridItems,\n        alignItemsVertically,\n        alignItemsHorizontally,\n        xs,\n        sm,\n        md,\n        lg,\n        xl\n      },\n      setAttributes\n    } = props;\n    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Number of Block Grid Items', 'pb')\n    }, wp.element.createElement(RangeControl, {\n      label: __('How many block items do you want?', 'pb'),\n      help: __('Be careful: If you reduce the number of block items, you may loose your existing content.', 'pb'),\n      value: gridItems,\n      onChange: count => {\n        setAttributes({\n          gridItems: count\n        });\n      },\n      min: 2,\n      max: 30\n    })), wp.element.createElement(PanelBody, {\n      title: __('Item Alignment', 'pb')\n    }, wp.element.createElement(SelectControl, {\n      label: __('Align Items Vertically', 'pb'),\n      value: alignItemsVertically,\n      onChange: value => {\n        setAttributes({\n          alignItemsVertically: value\n        });\n      },\n      options: [{\n        value: '',\n        label: __('Top Align Items (default)', 'pb')\n      }, {\n        value: 'center',\n        label: __('Center Items', 'pb')\n      }, {\n        value: 'center',\n        label: __('Bottom Align Items', 'pb')\n      }]\n    })), wp.element.createElement(PanelBody, {\n      title: __('Block Grid Items per Line', 'pb')\n    }, wp.element.createElement(RangeControl, {\n      label: __('Extra Small', 'pb'),\n      value: xs,\n      onChange: spanCount => {\n        setAttributes({\n          xs: spanCount\n        });\n      },\n      min: 1,\n      max: 6\n    }), wp.element.createElement(RangeControl, {\n      label: __('Small', 'pb'),\n      value: sm,\n      onChange: spanCount => {\n        setAttributes({\n          sm: spanCount\n        });\n      },\n      min: 1,\n      max: 6\n    }), wp.element.createElement(RangeControl, {\n      label: __('Medium', 'pb'),\n      value: md,\n      onChange: spanCount => {\n        setAttributes({\n          md: spanCount\n        });\n      },\n      min: 1,\n      max: 6\n    }), wp.element.createElement(RangeControl, {\n      label: __('Large', 'pb'),\n      value: lg,\n      onChange: spanCount => {\n        setAttributes({\n          lg: spanCount\n        });\n      },\n      min: 1,\n      max: 6\n    }), wp.element.createElement(RangeControl, {\n      label: __('Extra Large', 'pb'),\n      value: xl,\n      onChange: spanCount => {\n        setAttributes({\n          xl: spanCount\n        });\n      },\n      min: 1,\n      max: 6\n    }))), wp.element.createElement(\"div\", {\n      className: 'o-block-grid o-block-grid-' + lg\n    }, wp.element.createElement(InnerBlocks, {\n      template: getBlockGridTemplate(gridItems),\n      templateLock: \"all\",\n      allowedBlocks: allowedBlocks\n    })));\n  },\n  save: props => {\n    return wp.element.createElement(\"div\", {\n      className: getBlockGridClasses(props.attributes)\n    }, wp.element.createElement(InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack:///./blocks/block-grid.js?");

/***/ }),

/***/ "./blocks/grid-column.js":
/*!*******************************!*\
  !*** ./blocks/grid-column.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const {\n  __,\n  setLocaleData\n} = wp.i18n;\nconst {\n  registerBlockType\n} = wp.blocks;\nconst {\n  Fragment\n} = wp.element;\nconst {\n  InspectorControls,\n  InnerBlocks\n} = wp.editor;\nconst {\n  PanelBody,\n  RangeControl,\n  SVG,\n  Path\n} = wp.components;\n\nconst getColumnClasses = attributes => {\n  var classes = ['o-col'];\n  if (attributes.xs) classes.push('u-' + attributes.xs + 'of12');\n  if (attributes.sm) classes.push('u-' + attributes.sm + 'of12-sm');\n  if (attributes.md) classes.push('u-' + attributes.md + 'of12-md');\n  if (attributes.lg) classes.push('u-' + attributes.lg + 'of12-lg');\n  if (attributes.xl) classes.push('u-' + attributes.xl + 'of12-xl');\n  return classes.join(' ');\n};\n\nregisterBlockType('pb/column', {\n  title: __('Grid Column', 'pb'),\n  icon: wp.element.createElement(SVG, {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\"\n  }, wp.element.createElement(Path, {\n    fill: \"none\",\n    d: \"M0 0h24v24H0V0z\"\n  }), wp.element.createElement(Path, {\n    d: \"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z\"\n  })),\n  category: 'layout',\n  parent: ['pb/row'],\n  supports: {\n    className: false,\n    inserter: false\n  },\n  attributes: {\n    xs: {\n      type: 'number',\n      default: ''\n    },\n    sm: {\n      type: 'number',\n      default: ''\n    },\n    md: {\n      type: 'number',\n      default: ''\n    },\n    lg: {\n      type: 'number',\n      default: 6\n    },\n    xl: {\n      type: 'number',\n      default: ''\n    }\n  },\n  edit: props => {\n    const {\n      className,\n      attributes: {\n        xs,\n        sm,\n        md,\n        lg,\n        xl\n      },\n      setAttributes\n    } = props;\n    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Column Settings', 'pb')\n    }, wp.element.createElement(RangeControl, {\n      label: __('Extra Small Span', 'pb'),\n      value: xs,\n      onChange: spanCount => {\n        setAttributes({\n          xs: spanCount\n        });\n      },\n      min: 1,\n      max: 11\n    }), wp.element.createElement(RangeControl, {\n      label: __('Small Span', 'pb'),\n      value: sm,\n      onChange: spanCount => {\n        setAttributes({\n          sm: spanCount\n        });\n      },\n      min: 1,\n      max: 11\n    }), wp.element.createElement(RangeControl, {\n      label: __('Medium Span', 'pb'),\n      value: md,\n      onChange: spanCount => {\n        setAttributes({\n          md: spanCount\n        });\n      },\n      min: 1,\n      max: 11\n    }), wp.element.createElement(RangeControl, {\n      label: __('Large Span', 'pb'),\n      value: lg,\n      onChange: spanCount => {\n        setAttributes({\n          lg: spanCount\n        });\n      },\n      min: 1,\n      max: 11\n    }), wp.element.createElement(RangeControl, {\n      label: __('Extra Large Span', 'pb'),\n      value: xl,\n      onChange: spanCount => {\n        setAttributes({\n          xl: spanCount\n        });\n      },\n      min: 1,\n      max: 11\n    }))), wp.element.createElement(\"div\", {\n      className: getColumnClasses(props.attributes)\n    }, wp.element.createElement(InnerBlocks, {\n      templateLock: false\n    })));\n  },\n  save: props => {\n    return wp.element.createElement(\"div\", {\n      className: getColumnClasses(props.attributes)\n    }, wp.element.createElement(InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack:///./blocks/grid-column.js?");

/***/ }),

/***/ "./blocks/grid-row.js":
/*!****************************!*\
  !*** ./blocks/grid-row.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const {\n  __,\n  setLocaleData\n} = wp.i18n;\nconst {\n  registerBlockType\n} = wp.blocks;\nconst {\n  Fragment\n} = wp.element;\nconst {\n  InspectorControls,\n  InnerBlocks\n} = wp.editor;\nconst {\n  PanelBody,\n  RangeControl,\n  SelectControl,\n  SVG,\n  Path\n} = wp.components;\n\nconst getRowColumns = attributes => {\n  var classes = ['o-row'];\n\n  if (attributes.alignContentVertically) {\n    switch (attributes.alignContentVertically) {\n      case 'center':\n        classes.push('u-align-items-center');\n        break;\n\n      case 'end':\n        classes.push('u-align-items-end');\n        break;\n    }\n  }\n\n  if (attributes.alignColumnsHorizontally) {\n    switch (attributes.alignColumnsHorizontally) {\n      case 'center':\n        classes.push('u-justify-content-center');\n        break;\n\n      case 'space-between':\n        classes.push('u-justify-content-space-between');\n        break;\n\n      case 'space-around':\n        classes.push('u-justify-content-space-around');\n        break;\n\n      case 'end':\n        classes.push('u-justify-content-end');\n        break;\n    }\n  }\n\n  return classes.join(' ');\n};\n\nconst allowedBlocks = ['pb/column'];\n\nconst getColumnsTemplate = columns => {\n  var template = [];\n\n  for (var i = 0; i < columns; i++) {\n    template.push(['pb/column']);\n  }\n\n  return template;\n};\n\nregisterBlockType('pb/row', {\n  title: __('Columns', 'pb'),\n  icon: wp.element.createElement(SVG, {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\"\n  }, wp.element.createElement(Path, {\n    d: \"M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z\"\n  })),\n  category: 'layout',\n  keywords: [__('row', 'pb'), __('grid', 'pb'), __('span', 'pb')],\n  supports: {\n    className: false\n  },\n  attributes: {\n    columns: {\n      type: 'number',\n      default: 2\n    },\n    centerContentVertically: {\n      type: 'sting',\n      default: ''\n    },\n    alignColumnsHorizontally: {\n      type: 'string',\n      default: ''\n    }\n  },\n  edit: props => {\n    const {\n      className,\n      attributes: {\n        columns,\n        alignContentVertically,\n        alignColumnsHorizontally\n      },\n      setAttributes\n    } = props;\n    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Row Settings', 'pb')\n    }, wp.element.createElement(RangeControl, {\n      label: __('Number of Columns', 'pb'),\n      help: __('Be careful: If you reduce the number of columns, you may loose your existing content.', 'pb'),\n      value: columns,\n      onChange: nextColumns => {\n        setAttributes({\n          columns: nextColumns\n        });\n      },\n      min: 1,\n      max: 6\n    })), wp.element.createElement(PanelBody, {\n      title: __('Column & Content Alignment', 'pb')\n    }, wp.element.createElement(SelectControl, {\n      label: __('Align Column Content Vertically', 'pb'),\n      value: alignContentVertically,\n      onChange: value => {\n        setAttributes({\n          alignContentVertically: value\n        });\n      },\n      options: [{\n        value: '',\n        label: __('Top Align Content (default)', 'pb')\n      }, {\n        value: 'center',\n        label: __('Center Content', 'pb')\n      }, {\n        value: 'end',\n        label: __('Bottom Align Content', 'pb')\n      }]\n    }), wp.element.createElement(SelectControl, {\n      label: __('Align Columns Horiztonally', 'pb'),\n      value: alignColumnsHorizontally,\n      onChange: value => {\n        setAttributes({\n          alignColumnsHorizontally: value\n        });\n      },\n      options: [{\n        value: '',\n        label: __('Left Align Columns (default)', 'pb')\n      }, {\n        value: 'center',\n        label: __('Center Columns', 'pb')\n      }, {\n        value: 'end',\n        label: __('Right Align Columns', 'pb')\n      }, {\n        value: 'space-between',\n        label: __('Space Between Columns', 'pb')\n      }, {\n        value: 'space-around',\n        label: __('Space Around Columns', 'pb')\n      }]\n    }))), wp.element.createElement(\"div\", {\n      className: 'o-row o-row--columns-' + columns\n    }, wp.element.createElement(InnerBlocks, {\n      template: getColumnsTemplate(columns),\n      templateLock: \"all\",\n      allowedBlocks: allowedBlocks\n    })));\n  },\n  save: props => {\n    return wp.element.createElement(\"div\", {\n      className: getRowColumns(props.attributes)\n    }, wp.element.createElement(InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack:///./blocks/grid-row.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************!*\
  !*** multi ./blocks/grid-row.js ./blocks/grid-column.js ./blocks/block-grid.js ./blocks/block-grid-item.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./blocks/grid-row.js */\"./blocks/grid-row.js\");\n__webpack_require__(/*! ./blocks/grid-column.js */\"./blocks/grid-column.js\");\n__webpack_require__(/*! ./blocks/block-grid.js */\"./blocks/block-grid.js\");\nmodule.exports = __webpack_require__(/*! ./blocks/block-grid-item.js */\"./blocks/block-grid-item.js\");\n\n\n//# sourceURL=webpack:///multi_./blocks/grid-row.js_./blocks/grid-column.js_./blocks/block-grid.js_./blocks/block-grid-item.js?");

/***/ })

/******/ });