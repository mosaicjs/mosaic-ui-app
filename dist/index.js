(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("promise"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "promise"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("promise")) : factory(root["react"], root["promise"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libAppLayout = __webpack_require__(1);

	var _libAppLayout2 = _interopRequireDefault(_libAppLayout);

	var _libAppScreen = __webpack_require__(3);

	var _libAppScreen2 = _interopRequireDefault(_libAppScreen);

	exports['default'] = {
	    AppLayout: _libAppLayout2['default'],
	    AppScreen: _libAppScreen2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var AppLayout = (function () {
	    function AppLayout(params, screen) {
	        _classCallCheck(this, AppLayout);

	        this.screen = screen;
	        this.app = this.screen.app;
	    }

	    _createClass(AppLayout, [{
	        key: 'renderScreen',
	        value: function renderScreen(params) {
	            var title = this.screen.renderTitle();
	            var content = this.screen.renderContent();
	            return _react2['default'].createElement(
	                'div',
	                { style: this.style, className: this.className },
	                title,
	                _react2['default'].createElement(
	                    'div',
	                    null,
	                    content
	                )
	            );
	        }
	    }, {
	        key: 'style',
	        get: function get() {
	            var state = this.app.getState();
	            var style = {
	                margin: '0 auto'
	            };
	            switch (state.mode) {
	                case 'mobile':
	                    style.width = 300;
	                    break;
	                case 'tablet':
	                    style.width = 600;
	                    break;
	                case 'desktop':
	                    style.width = 1200;
	                    break;
	                default:
	                    break;
	            }
	            return style;
	        }
	    }, {
	        key: 'className',
	        get: function get() {
	            return 'container-fluid';
	        }
	    }]);

	    return AppLayout;
	})();

	exports['default'] = AppLayout;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _promise = __webpack_require__(4);

	var _promise2 = _interopRequireDefault(_promise);

	var _mosaicAdapters = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"mosaic-adapters\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _AppLayout = __webpack_require__(1);

	var _AppLayout2 = _interopRequireDefault(_AppLayout);

	var AppScreen = (function (_Adaptable) {
	    _inherits(AppScreen, _Adaptable);

	    function AppScreen(options) {
	        _classCallCheck(this, AppScreen);

	        _get(Object.getPrototypeOf(AppScreen.prototype), 'constructor', this).call(this, { adapters: options.app.adapters });
	        this.options = this.props = options || {};
	        this.app = this.options.app;
	    }

	    _createClass(AppScreen, [{
	        key: 'render',
	        value: function render(params) {
	            var that = this;
	            return new _promise2['default'](function (resolve, reject) {
	                var layout = that.getAdapter(_AppLayout2['default']);
	                var view = layout.renderScreen(params);
	                _react2['default'].render(view, that.options.container, function (err) {
	                    if (err) reject(err);else resolve();
	                });
	            });
	        }
	    }, {
	        key: 'activate',
	        value: function activate(params) {
	            return this.render(params);
	        }
	    }, {
	        key: 'update',
	        value: function update(params, oldParams) {
	            return this.render(params);
	        }
	    }, {
	        key: 'deactivate',
	        value: function deactivate(params) {
	            var that = this;
	            return new _promise2['default'](function (resolve, reject) {
	                setTimeout(function () {
	                    try {
	                        _react2['default'].unmountComponentAtNode(that.options.container);
	                        resolve();
	                    } catch (err) {
	                        reject(err);
	                    }
	                }, 1);
	            });
	        }
	    }, {
	        key: 'renderTitle',
	        value: function renderTitle() {
	            return this.options.title;
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {
	            return this.options.content;
	        }
	    }]);

	    return AppScreen;
	})(_mosaicAdapters.Adaptable);

	exports['default'] = AppScreen;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;