module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/NecrobumpingCheck.js":
/*!***************************************************!*\
  !*** ./src/forum/components/NecrobumpingCheck.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NecrobumpingCheck; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);



var NecrobumpingCheck = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NecrobumpingCheck, _Component);

  function NecrobumpingCheck() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NecrobumpingCheck.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
  };

  _proto.view = function view() {
    var customTitle = app.data['expired-posts.message.title'];
    var customDescription = app.data['expired-posts.message.description'];
    var time = dayjs().add(this.attrs.days, 'days').fromNow(true);
    return m("div", null, m("div", {
      className: "Alert"
    }, m("div", {
      className: "Alert-body"
    }, m("div", {
      className: "hide"
    }, m("h4", null, customTitle && customTitle.replace(/\[time]/i, time) || app.translator.trans('expired-posts.forum.composer.warning.title', {
      time: time
    })), m("p", null, customDescription || app.translator.trans('expired-posts.forum.composer.warning.description'))))));
  };

  return NecrobumpingCheck;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/NecrobumpingCurtain.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/NecrobumpingCurtain.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NecrobumpingCurtain; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);



var NecrobumpingCurtain = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NecrobumpingCurtain, _Component);

  function NecrobumpingCurtain() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NecrobumpingCurtain.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);

    document.getElementsByClassName('DiscussionPage-nav')[0].style.visibility = 'hidden';
    document.getElementsByClassName('ReplyPlaceholder')[0].style.visibility = 'hidden';
    [].forEach.call(document.querySelectorAll('.Post-actions'), function (el) {
      el.style.visibility = 'hidden';
    });
  };

  _proto.view = function view() {
    var customTitle = app.data['expired-posts.message.title'];
    var customDescription = app.data['expired-posts.message.description'];
    var time = dayjs().add(this.attrs.days, 'days').fromNow(true);
    return m("div", null, m("div", {
      id: "curtain-overlay"
    }, m("div", {
      id: "curtain-text"
    }, m("h4", null, customTitle && customTitle.replace(/\[time]/i, time) || app.translator.trans('expired-posts.forum.composer.warning.title', {
      time: time
    })), m("p", null, customDescription || app.translator.trans('expired-posts.forum.composer.warning.description')))));
  };

  return NecrobumpingCurtain;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/ReplyComposer */ "flarum/common/components/ReplyComposer");
/* harmony import */ var flarum_common_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/DiscussionListItem */ "flarum/common/components/DiscussionListItem");
/* harmony import */ var flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/DiscussionHero */ "flarum/common/components/DiscussionHero");
/* harmony import */ var flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NecrobumpingCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NecrobumpingCheck */ "./src/forum/components/NecrobumpingCheck.js");
/* harmony import */ var _components_NecrobumpingCurtain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NecrobumpingCurtain */ "./src/forum/components/NecrobumpingCurtain.js");








var isNecrobumping = function isNecrobumping(discussion) {
  if (!discussion) return false;
  var days = discussion.attribute('expired-posts');
  var lastPostedAt = discussion.lastPostedAt();

  if (lastPostedAt && days && dayjs().subtract(days, 'days').isAfter(lastPostedAt.getTime())) {
    return days;
  }

  return false;
};

app.initializers.add('zerosonesfun/expired-posts', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (vdom) {
    if (!app.composer.bodyMatches(flarum_common_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2___default.a)) return;
    var $textarea = vdom.children && vdom.children.find(function (e) {
      return e.tag === 'textarea';
    });
    var composer = app.composer;
    var _composer$body$attrs = composer.body.attrs,
        discussion = _composer$body$attrs.discussion,
        disabled = _composer$body$attrs.disabled;

    if ($textarea && isNecrobumping(discussion)) {
      if (!disabled) delete $textarea.attrs.disabled;else $textarea.attrs.disabled = true;
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'headerItems', function (items) {
    var _this = this;

    var days = isNecrobumping(this.attrs.discussion);

    if (days) {
      items.add('expired-posts', _components_NecrobumpingCheck__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        days: days,
        set: function set(v) {
          return _this.composer.fields.fofNecrobumping = v;
        },
        disable: function disable(d) {
          return _this.composer.body.attrs.disabled = d;
        }
      }));
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'infoItems', function (items) {
    var days = isNecrobumping(this.attrs.discussion);

    if (days) {
      items.add('expired-posts', _components_NecrobumpingCheck__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        days: days
      }));
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'items', function (items) {
    var days = isNecrobumping(this.attrs.discussion);

    if (days) {
      items.add('expired-posts', _components_NecrobumpingCurtain__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        days: days
      }));
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'data', function (data) {
    data['expired-posts'] = this.composer.fields.fofNecrobumping;
  });
});
var components = {
  NecrobumpingCheck: _components_NecrobumpingCheck__WEBPACK_IMPORTED_MODULE_5__["default"],
  NecrobumpingCurtain: _components_NecrobumpingCurtain__WEBPACK_IMPORTED_MODULE_6__["default"]
};

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/DiscussionHero":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/DiscussionHero']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/DiscussionHero'];

/***/ }),

/***/ "flarum/common/components/DiscussionListItem":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['common/components/DiscussionListItem']" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/common/components/ReplyComposer":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/ReplyComposer']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/ReplyComposer'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map