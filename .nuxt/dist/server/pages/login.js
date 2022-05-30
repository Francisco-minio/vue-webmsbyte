exports.ids = [5];
exports.modules = {

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e23b7040", content, true)

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("12a190a6", content, true)

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7ef5db14", content, true, context)
};

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("8b6f5728", content, true, context)
};

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("44541556", content, true, context)
};

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_77c3dc1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_77c3dc1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_77c3dc1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_77c3dc1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_77c3dc1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-77c3dc1e]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-77c3dc1e]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-77c3dc1e]{font-size:28px;line-height:44px}}.use-text-title2[data-v-77c3dc1e]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-77c3dc1e]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-77c3dc1e]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-77c3dc1e]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-77c3dc1e]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-77c3dc1e]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-77c3dc1e]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-77c3dc1e]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-77c3dc1e]{font-size:16px;line-height:24px}}.use-text-caption[data-v-77c3dc1e],.use-text-paragraph[data-v-77c3dc1e]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-77c3dc1e]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-77c3dc1e]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-77c3dc1e]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-77c3dc1e]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-77c3dc1e]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-77c3dc1e]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-77c3dc1e]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-77c3dc1e]{display:none}}[dir=ltr] .left[data-v-77c3dc1e]{text-align:left}[dir=rtl] .left[data-v-77c3dc1e]{text-align:right}[dir=ltr] .left[data-v-77c3dc1e]:after{left:0}[dir=rtl] .left[data-v-77c3dc1e]:after{right:0}[dir=ltr] .right[data-v-77c3dc1e]{text-align:right}[dir=rtl] .right[data-v-77c3dc1e]{text-align:left}[dir=ltr] .right[data-v-77c3dc1e]:after{right:0}[dir=rtl] .right[data-v-77c3dc1e]:after{left:0}.center[data-v-77c3dc1e]{text-align:center}[dir=ltr] .center[data-v-77c3dc1e]:after{left:50%}[dir=rtl] .center[data-v-77c3dc1e]:after{right:50%}[dir=ltr] .center[data-v-77c3dc1e]:after{margin-left:-35px}[dir=rtl] .center[data-v-77c3dc1e]:after{margin-right:-35px}.title[data-v-77c3dc1e]{display:block;position:relative;margin-bottom:72px}.title h4[data-v-77c3dc1e]{font-size:36px;line-height:56px;font-weight:var(--font-bold);letter-spacing:1px}@media(max-width:1279px){.title h4[data-v-77c3dc1e]{font-size:32px;line-height:48px}}@media(max-width:599px){.title h4[data-v-77c3dc1e]{font-size:28px;line-height:44px}}.title[data-v-77c3dc1e]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background:var(--v-primary-base);position:absolute}.theme--light .title strong[data-v-77c3dc1e]{color:rgba(0,0,0,.87)}.theme--dark .title strong[data-v-77c3dc1e]{color:#fff}.title-secondary[data-v-77c3dc1e]{display:block;position:relative;margin-bottom:96px;text-transform:capitalize}@media(max-width:599px){.title-secondary[data-v-77c3dc1e]{margin-bottom:80px}}.title-secondary h3[data-v-77c3dc1e]{font-size:36px;line-height:56px;font-weight:var(--font-bold);letter-spacing:1px}.theme--light .title-secondary h3[data-v-77c3dc1e]{color:rgba(0,0,0,.87)}.theme--dark .title-secondary h3[data-v-77c3dc1e]{color:#fff}@media(max-width:1279px){.title-secondary h3[data-v-77c3dc1e]{font-size:32px;line-height:48px}}@media(max-width:599px){.title-secondary h3[data-v-77c3dc1e]{font-size:28px;line-height:44px}}.title-secondary[data-v-77c3dc1e]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background:var(--v-primary-base);position:absolute}.theme--light .title-secondary strong[data-v-77c3dc1e]{color:rgba(0,0,0,.87)}.theme--dark .title-secondary strong[data-v-77c3dc1e]{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_3aa0f2dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_3aa0f2dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_3aa0f2dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_3aa0f2dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_3aa0f2dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-3aa0f2dc]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-3aa0f2dc]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3aa0f2dc]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3aa0f2dc]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-3aa0f2dc]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3aa0f2dc]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3aa0f2dc]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-3aa0f2dc]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3aa0f2dc]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3aa0f2dc]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3aa0f2dc]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3aa0f2dc]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3aa0f2dc],.use-text-paragraph[data-v-3aa0f2dc]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3aa0f2dc]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-3aa0f2dc]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3aa0f2dc]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3aa0f2dc]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3aa0f2dc]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3aa0f2dc]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3aa0f2dc]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3aa0f2dc]{display:none}}.page-wrap[data-v-3aa0f2dc]{text-align:center;background:var(--v-primarydark-base);min-height:100%;position:relative;width:100%;align-items:center;padding:80px 40px}@media(min-width:960px){.page-wrap[data-v-3aa0f2dc]{display:flex}}@media(max-width:959px){.page-wrap[data-v-3aa0f2dc]{padding:40px 0}}.page-wrap .title-contact[data-v-3aa0f2dc]{color:#fff}.page-wrap a[data-v-3aa0f2dc]{text-transform:none;font-size:16px;text-decoration:none;font-weight:var(--font-regular)}.theme--light .page-wrap a[data-v-3aa0f2dc]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-3aa0f2dc]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-3aa0f2dc]{font-size:14px}}[dir=ltr] .inner-wrap[data-v-3aa0f2dc]{text-align:left}[dir=rtl] .inner-wrap[data-v-3aa0f2dc]{text-align:right}.full-form-wrap[data-v-3aa0f2dc]{color:#fff;padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-3aa0f2dc]{padding-top:32px}}.v-card.form-box[data-v-3aa0f2dc]{border-radius:40px!important;overflow:hidden;background:transparent;box-shadow:0 1.5px 12px 2px rgba(0,0,0,.28)}@media(max-width:599px){.v-card.form-box[data-v-3aa0f2dc]{box-shadow:none}}.desc[data-v-3aa0f2dc]{color:#fff;text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-3aa0f2dc]{padding:0 16px}}.input[data-v-3aa0f2dc]{width:100%}[dir=ltr] .input label[data-v-3aa0f2dc]{left:4px}[dir=rtl] .input label[data-v-3aa0f2dc]{right:4px}.input[data-v-3aa0f2dc]  .v-input__slot{background:none;overflow:hidden;border:1px solid}.theme--light .input[data-v-3aa0f2dc]  .v-input__slot{border-color:rgba(0,0,0,.2)}.theme--dark .input[data-v-3aa0f2dc]  .v-input__slot{border-color:hsla(0,0%,100%,.25)}[dir=ltr] .input[data-v-3aa0f2dc]  .v-input__slot input,[dir=ltr] .input[data-v-3aa0f2dc]  .v-input__slot select,[dir=ltr] .input[data-v-3aa0f2dc]  .v-input__slot textarea{left:16px}[dir=rtl] .input[data-v-3aa0f2dc]  .v-input__slot input,[dir=rtl] .input[data-v-3aa0f2dc]  .v-input__slot select,[dir=rtl] .input[data-v-3aa0f2dc]  .v-input__slot textarea{right:16px}.input[data-v-3aa0f2dc]  .v-input__slot input:focus,.input[data-v-3aa0f2dc]  .v-input__slot input:hover,.input[data-v-3aa0f2dc]  .v-input__slot select:focus,.input[data-v-3aa0f2dc]  .v-input__slot select:hover,.input[data-v-3aa0f2dc]  .v-input__slot textarea:focus,.input[data-v-3aa0f2dc]  .v-input__slot textarea:hover{background:none}.input.light[data-v-3aa0f2dc]  .v-input__slot{border:1px solid var(--v-primarylight-darken2)}.input.light[data-v-3aa0f2dc]  .v-input__slot .v-label,.input.light[data-v-3aa0f2dc]  .v-input__slot input,.input.light[data-v-3aa0f2dc]  .v-input__slot select,.input.light[data-v-3aa0f2dc]  .v-input__slot textarea{color:#fff}.theme--light .input.light[data-v-3aa0f2dc]  .v-input__slot input:focus,.theme--light .input.light[data-v-3aa0f2dc]  .v-input__slot select:focus,.theme--light .input.light[data-v-3aa0f2dc]  .v-input__slot textarea:focus{background:rgba(0,0,0,.08)}.theme--dark .input.light[data-v-3aa0f2dc]  .v-input__slot input:focus,.theme--dark .input.light[data-v-3aa0f2dc]  .v-input__slot select:focus,.theme--dark .input.light[data-v-3aa0f2dc]  .v-input__slot textarea:focus{background:hsla(0,0%,100%,.1)}.theme--light .input.light[data-v-3aa0f2dc]  .v-input__slot input:hover,.theme--light .input.light[data-v-3aa0f2dc]  .v-input__slot select:hover,.theme--light .input.light[data-v-3aa0f2dc]  .v-input__slot textarea:hover{background:rgba(0,0,0,.08)}.theme--dark .input.light[data-v-3aa0f2dc]  .v-input__slot input:hover,.theme--dark .input.light[data-v-3aa0f2dc]  .v-input__slot select:hover,.theme--dark .input.light[data-v-3aa0f2dc]  .v-input__slot textarea:hover{background:hsla(0,0%,100%,.1)}.form[data-v-3aa0f2dc]{position:relative;margin-top:64px;padding:0 120px 80px}[dir=ltr] .form[data-v-3aa0f2dc]{text-align:left}[dir=rtl] .form[data-v-3aa0f2dc]{text-align:right}@media(max-width:959px){.form[data-v-3aa0f2dc]{padding:0 32px 80px}}@media(max-width:599px){.form[data-v-3aa0f2dc]{padding:16px 8px;margin-top:16px}}.form-helper[data-v-3aa0f2dc]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-3aa0f2dc]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-3aa0f2dc]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-3aa0f2dc]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-3aa0f2dc]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-3aa0f2dc]{margin-top:16px;margin-bottom:40px}}.btn-area button.v-btn.v-size--large[data-v-3aa0f2dc]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-3aa0f2dc]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-3aa0f2dc]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-3aa0f2dc]{display:block}}[dir=ltr] .right-icon[data-v-3aa0f2dc]{margin-left:8px}[dir=rtl] .right-icon[data-v-3aa0f2dc]{margin-right:8px}.check svg[data-v-3aa0f2dc]{fill:var(--v-secondary-base)}.decoration[data-v-3aa0f2dc]{position:absolute;width:100%;height:100%;top:0;overflow:hidden;clip:rect(0,auto,auto,0)}[dir=ltr] .decoration[data-v-3aa0f2dc]{left:0}[dir=rtl] .decoration[data-v-3aa0f2dc]{right:0}.decoration svg[data-v-3aa0f2dc]{fill:var(--v-secondary-base);opacity:.2;position:fixed;top:0}.left-deco[data-v-3aa0f2dc]{left:-400px;right:auto;width:1200px;height:1500px;transform-origin:top left}@media(min-width:960px){.left-deco[data-v-3aa0f2dc]{transform:scale(.8)}}.right-deco[data-v-3aa0f2dc]{left:auto;right:0;height:1500px;transform-origin:top right}@media(min-width:960px){.right-deco[data-v-3aa0f2dc]{transform:scale(.8)}}.auth-frame[data-v-3aa0f2dc]{display:block;position:relative}.auth-frame .row>div[data-v-3aa0f2dc]{padding:0}.greeting[data-v-3aa0f2dc]{display:flex;padding-top:128px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center;color:#fff}.greeting h6[data-v-3aa0f2dc]{font-weight:var(--font-regular)}.logo[data-v-3aa0f2dc]{justify-content:center;margin-bottom:24px;z-index:1}.logo[data-v-3aa0f2dc],.logo.logoHeader[data-v-3aa0f2dc]{align-items:center;position:relative}.logo.logoHeader[data-v-3aa0f2dc]{flex-direction:column;z-index:10}.logo img[data-v-3aa0f2dc]{width:64px}.logo p[data-v-3aa0f2dc],.logo span[data-v-3aa0f2dc]{display:block;padding-bottom:4px;color:#fff}.head[data-v-3aa0f2dc]{display:flex;justify-content:space-between;align-items:flex-start}.head a[data-v-3aa0f2dc]{margin-top:16px}@media(max-width:959px){.head[data-v-3aa0f2dc]{margin-top:16px;justify-content:center}.head a[data-v-3aa0f2dc]{display:none}}.form-wrap[data-v-3aa0f2dc]{position:relative;padding:32px}.theme--light .form-wrap[data-v-3aa0f2dc]{background-color:#fff}.theme--dark .form-wrap[data-v-3aa0f2dc]{background-color:#424242}@media(min-width:600px){.form-wrap[data-v-3aa0f2dc]{padding:40px}}@media(min-width:1280px){.form-wrap[data-v-3aa0f2dc]{padding:64px}}.socmed-side-login[data-v-3aa0f2dc]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-3aa0f2dc]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-3aa0f2dc]{display:block}}.socmed-side-login>*[data-v-3aa0f2dc]{color:#fff;width:160px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-3aa0f2dc]{margin:0 4px;width:140px}}@media(max-width:599px){.socmed-side-login>*[data-v-3aa0f2dc]{margin-bottom:16px;width:100%}}.socmed-side-login i[data-v-3aa0f2dc]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-3aa0f2dc]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-3aa0f2dc]{margin-left:8px}.blue-btn[data-v-3aa0f2dc]{background:#28aae1!important}.blue-btn[data-v-3aa0f2dc]:hover{background:#146a8f!important}.navi-btn[data-v-3aa0f2dc]{background:#3b579d!important}.navi-btn[data-v-3aa0f2dc]:hover{background:#1f2e53!important}.red-btn[data-v-3aa0f2dc]{background:#dd493c!important}.red-btn[data-v-3aa0f2dc]:hover{background:#98251b!important}.separator[data-v-3aa0f2dc]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}@media(max-width:599px){.separator p[data-v-3aa0f2dc]{font-size:12px}}.separator[data-v-3aa0f2dc]:after,.separator[data-v-3aa0f2dc]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-3aa0f2dc]:after,.theme--light .separator[data-v-3aa0f2dc]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-3aa0f2dc]:after,.theme--dark .separator[data-v-3aa0f2dc]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-3aa0f2dc]:before{left:0}.separator[data-v-3aa0f2dc]:after{right:0}.form-control-label[data-v-3aa0f2dc]  .v-messages{min-height:0}.form-control-label>div[data-v-3aa0f2dc]{margin-top:0}.form-control-label .white-label[data-v-3aa0f2dc]  label.v-label{color:#fff}.backtohome[data-v-3aa0f2dc]{width:80px;height:80px;position:absolute;margin-top:20px;z-index:4}[dir=ltr] .backtohome[data-v-3aa0f2dc]{margin-left:20px}[dir=rtl] .backtohome[data-v-3aa0f2dc]{margin-right:20px}@media(max-width:959px){.backtohome[data-v-3aa0f2dc]{top:40px;margin:0}[dir=ltr] .backtohome[data-v-3aa0f2dc]{left:calc(50% - 40px)}[dir=rtl] .backtohome[data-v-3aa0f2dc]{right:calc(50% - 40px)}}@media(max-width:959px){.backtohome[data-v-3aa0f2dc]{display:none}}.backtohome i[data-v-3aa0f2dc]{font-size:32px;color:hsla(0,0%,100%,.54)}.backtohome>span i[data-v-3aa0f2dc]:first-child{opacity:1;transition:opacity .3s ease}.backtohome>span i[data-v-3aa0f2dc]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .backtohome>span i[data-v-3aa0f2dc]:last-child{right:0}[dir=rtl] .backtohome>span i[data-v-3aa0f2dc]:last-child{left:0}.backtohome[data-v-3aa0f2dc]:hover{background:rgba(0,0,0,.05)}.backtohome:hover>span i[data-v-3aa0f2dc]:first-child{opacity:0}.backtohome:hover>span i[data-v-3aa0f2dc]:last-child{opacity:1}[dir=ltr] .backtohome:hover>span i[data-v-3aa0f2dc]:last-child{right:27px}[dir=rtl] .backtohome:hover>span i[data-v-3aa0f2dc]:last-child{left:27px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_fcf632ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_fcf632ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_fcf632ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_fcf632ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_fcf632ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-fcf632ca]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-fcf632ca]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-fcf632ca]{font-size:28px;line-height:44px}}.use-text-title2[data-v-fcf632ca]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-fcf632ca]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-fcf632ca]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-fcf632ca]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-fcf632ca]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-fcf632ca]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-fcf632ca]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-fcf632ca]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-fcf632ca]{font-size:16px;line-height:24px}}.use-text-caption[data-v-fcf632ca],.use-text-paragraph[data-v-fcf632ca]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-fcf632ca]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-fcf632ca]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-fcf632ca]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-fcf632ca]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-fcf632ca]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-fcf632ca]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-fcf632ca]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-fcf632ca]{display:none}}.page-wrap[data-v-fcf632ca]{text-align:center;background:var(--v-primarydark-base);min-height:100%;position:relative;width:100%;align-items:center;padding:80px 40px}@media(min-width:960px){.page-wrap[data-v-fcf632ca]{display:flex}}@media(max-width:959px){.page-wrap[data-v-fcf632ca]{padding:40px 0}}.page-wrap .title-contact[data-v-fcf632ca]{color:#fff}.page-wrap a[data-v-fcf632ca]{text-transform:none;font-size:16px;text-decoration:none;font-weight:var(--font-regular)}.theme--light .page-wrap a[data-v-fcf632ca]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-fcf632ca]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-fcf632ca]{font-size:14px}}[dir=ltr] .inner-wrap[data-v-fcf632ca]{text-align:left}[dir=rtl] .inner-wrap[data-v-fcf632ca]{text-align:right}.full-form-wrap[data-v-fcf632ca]{color:#fff;padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-fcf632ca]{padding-top:32px}}.v-card.form-box[data-v-fcf632ca]{border-radius:40px!important;overflow:hidden;background:transparent;box-shadow:0 1.5px 12px 2px rgba(0,0,0,.28)}@media(max-width:599px){.v-card.form-box[data-v-fcf632ca]{box-shadow:none}}.desc[data-v-fcf632ca]{color:#fff;text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-fcf632ca]{padding:0 16px}}.input[data-v-fcf632ca]{width:100%}[dir=ltr] .input label[data-v-fcf632ca]{left:4px}[dir=rtl] .input label[data-v-fcf632ca]{right:4px}.input[data-v-fcf632ca]  .v-input__slot{background:none;overflow:hidden;border:1px solid}.theme--light .input[data-v-fcf632ca]  .v-input__slot{border-color:rgba(0,0,0,.2)}.theme--dark .input[data-v-fcf632ca]  .v-input__slot{border-color:hsla(0,0%,100%,.25)}[dir=ltr] .input[data-v-fcf632ca]  .v-input__slot input,[dir=ltr] .input[data-v-fcf632ca]  .v-input__slot select,[dir=ltr] .input[data-v-fcf632ca]  .v-input__slot textarea{left:16px}[dir=rtl] .input[data-v-fcf632ca]  .v-input__slot input,[dir=rtl] .input[data-v-fcf632ca]  .v-input__slot select,[dir=rtl] .input[data-v-fcf632ca]  .v-input__slot textarea{right:16px}.input[data-v-fcf632ca]  .v-input__slot input:focus,.input[data-v-fcf632ca]  .v-input__slot input:hover,.input[data-v-fcf632ca]  .v-input__slot select:focus,.input[data-v-fcf632ca]  .v-input__slot select:hover,.input[data-v-fcf632ca]  .v-input__slot textarea:focus,.input[data-v-fcf632ca]  .v-input__slot textarea:hover{background:none}.input.light[data-v-fcf632ca]  .v-input__slot{border:1px solid var(--v-primarylight-darken2)}.input.light[data-v-fcf632ca]  .v-input__slot .v-label,.input.light[data-v-fcf632ca]  .v-input__slot input,.input.light[data-v-fcf632ca]  .v-input__slot select,.input.light[data-v-fcf632ca]  .v-input__slot textarea{color:#fff}.theme--light .input.light[data-v-fcf632ca]  .v-input__slot input:focus,.theme--light .input.light[data-v-fcf632ca]  .v-input__slot select:focus,.theme--light .input.light[data-v-fcf632ca]  .v-input__slot textarea:focus{background:rgba(0,0,0,.08)}.theme--dark .input.light[data-v-fcf632ca]  .v-input__slot input:focus,.theme--dark .input.light[data-v-fcf632ca]  .v-input__slot select:focus,.theme--dark .input.light[data-v-fcf632ca]  .v-input__slot textarea:focus{background:hsla(0,0%,100%,.1)}.theme--light .input.light[data-v-fcf632ca]  .v-input__slot input:hover,.theme--light .input.light[data-v-fcf632ca]  .v-input__slot select:hover,.theme--light .input.light[data-v-fcf632ca]  .v-input__slot textarea:hover{background:rgba(0,0,0,.08)}.theme--dark .input.light[data-v-fcf632ca]  .v-input__slot input:hover,.theme--dark .input.light[data-v-fcf632ca]  .v-input__slot select:hover,.theme--dark .input.light[data-v-fcf632ca]  .v-input__slot textarea:hover{background:hsla(0,0%,100%,.1)}.form[data-v-fcf632ca]{position:relative;margin-top:64px;padding:0 120px 80px}[dir=ltr] .form[data-v-fcf632ca]{text-align:left}[dir=rtl] .form[data-v-fcf632ca]{text-align:right}@media(max-width:959px){.form[data-v-fcf632ca]{padding:0 32px 80px}}@media(max-width:599px){.form[data-v-fcf632ca]{padding:16px 8px;margin-top:16px}}.form-helper[data-v-fcf632ca]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-fcf632ca]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-fcf632ca]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-fcf632ca]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-fcf632ca]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-fcf632ca]{margin-top:16px;margin-bottom:40px}}.btn-area button.v-btn.v-size--large[data-v-fcf632ca]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-fcf632ca]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-fcf632ca]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-fcf632ca]{display:block}}[dir=ltr] .right-icon[data-v-fcf632ca]{margin-left:8px}[dir=rtl] .right-icon[data-v-fcf632ca]{margin-right:8px}.check svg[data-v-fcf632ca]{fill:var(--v-secondary-base)}.decoration[data-v-fcf632ca]{position:absolute;width:100%;height:100%;top:0;overflow:hidden;clip:rect(0,auto,auto,0)}[dir=ltr] .decoration[data-v-fcf632ca]{left:0}[dir=rtl] .decoration[data-v-fcf632ca]{right:0}.decoration svg[data-v-fcf632ca]{fill:var(--v-secondary-base);opacity:.2;position:fixed;top:0}.left-deco[data-v-fcf632ca]{left:-400px;right:auto;width:1200px;height:1500px;transform-origin:top left}@media(min-width:960px){.left-deco[data-v-fcf632ca]{transform:scale(.8)}}.right-deco[data-v-fcf632ca]{left:auto;right:0;height:1500px;transform-origin:top right}@media(min-width:960px){.right-deco[data-v-fcf632ca]{transform:scale(.8)}}.auth-frame[data-v-fcf632ca]{display:block;position:relative}.auth-frame .row>div[data-v-fcf632ca]{padding:0}.greeting[data-v-fcf632ca]{display:flex;padding-top:128px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center;color:#fff}.greeting h6[data-v-fcf632ca]{font-weight:var(--font-regular)}.logo[data-v-fcf632ca]{justify-content:center;margin-bottom:24px;z-index:1}.logo[data-v-fcf632ca],.logo.logoHeader[data-v-fcf632ca]{align-items:center;position:relative}.logo.logoHeader[data-v-fcf632ca]{flex-direction:column;z-index:10}.logo img[data-v-fcf632ca]{width:64px}.logo p[data-v-fcf632ca],.logo span[data-v-fcf632ca]{display:block;padding-bottom:4px;color:#fff}.head[data-v-fcf632ca]{display:flex;justify-content:space-between;align-items:flex-start}.head a[data-v-fcf632ca]{margin-top:16px}@media(max-width:959px){.head[data-v-fcf632ca]{margin-top:16px;justify-content:center}.head a[data-v-fcf632ca]{display:none}}.form-wrap[data-v-fcf632ca]{position:relative;padding:32px}.theme--light .form-wrap[data-v-fcf632ca]{background-color:#fff}.theme--dark .form-wrap[data-v-fcf632ca]{background-color:#424242}@media(min-width:600px){.form-wrap[data-v-fcf632ca]{padding:40px}}@media(min-width:1280px){.form-wrap[data-v-fcf632ca]{padding:64px}}.socmed-side-login[data-v-fcf632ca]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-fcf632ca]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-fcf632ca]{display:block}}.socmed-side-login>*[data-v-fcf632ca]{color:#fff;width:160px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-fcf632ca]{margin:0 4px;width:140px}}@media(max-width:599px){.socmed-side-login>*[data-v-fcf632ca]{margin-bottom:16px;width:100%}}.socmed-side-login i[data-v-fcf632ca]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-fcf632ca]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-fcf632ca]{margin-left:8px}.blue-btn[data-v-fcf632ca]{background:#28aae1!important}.blue-btn[data-v-fcf632ca]:hover{background:#146a8f!important}.navi-btn[data-v-fcf632ca]{background:#3b579d!important}.navi-btn[data-v-fcf632ca]:hover{background:#1f2e53!important}.red-btn[data-v-fcf632ca]{background:#dd493c!important}.red-btn[data-v-fcf632ca]:hover{background:#98251b!important}.separator[data-v-fcf632ca]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}@media(max-width:599px){.separator p[data-v-fcf632ca]{font-size:12px}}.separator[data-v-fcf632ca]:after,.separator[data-v-fcf632ca]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-fcf632ca]:after,.theme--light .separator[data-v-fcf632ca]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-fcf632ca]:after,.theme--dark .separator[data-v-fcf632ca]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-fcf632ca]:before{left:0}.separator[data-v-fcf632ca]:after{right:0}.form-control-label[data-v-fcf632ca]  .v-messages{min-height:0}.form-control-label>div[data-v-fcf632ca]{margin-top:0}.form-control-label .white-label[data-v-fcf632ca]  label.v-label{color:#fff}.backtohome[data-v-fcf632ca]{width:80px;height:80px;position:absolute;margin-top:20px;z-index:4}[dir=ltr] .backtohome[data-v-fcf632ca]{margin-left:20px}[dir=rtl] .backtohome[data-v-fcf632ca]{margin-right:20px}@media(max-width:959px){.backtohome[data-v-fcf632ca]{top:40px;margin:0}[dir=ltr] .backtohome[data-v-fcf632ca]{left:calc(50% - 40px)}[dir=rtl] .backtohome[data-v-fcf632ca]{right:calc(50% - 40px)}}@media(max-width:959px){.backtohome[data-v-fcf632ca]{display:none}}.backtohome i[data-v-fcf632ca]{font-size:32px;color:hsla(0,0%,100%,.54)}.backtohome>span i[data-v-fcf632ca]:first-child{opacity:1;transition:opacity .3s ease}.backtohome>span i[data-v-fcf632ca]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .backtohome>span i[data-v-fcf632ca]:last-child{right:0}[dir=rtl] .backtohome>span i[data-v-fcf632ca]:last-child{left:0}.backtohome[data-v-fcf632ca]:hover{background:rgba(0,0,0,.05)}.backtohome:hover>span i[data-v-fcf632ca]:first-child{opacity:0}.backtohome:hover>span i[data-v-fcf632ca]:last-child{opacity:1}[dir=ltr] .backtohome:hover>span i[data-v-fcf632ca]:last-child{right:27px}[dir=rtl] .backtohome:hover>span i[data-v-fcf632ca]:last-child{left:27px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSecondary.vue?vue&type=template&id=77c3dc1e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title-secondary",class:_vm.align},[_vm._ssrNode("<h3 data-v-77c3dc1e>","</h3>",[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/TitleSecondary.vue?vue&type=template&id=77c3dc1e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSecondary.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TitleSecondaryvue_type_script_lang_js_ = ({
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
});
// CONCATENATED MODULE: ./components/Title/TitleSecondary.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_TitleSecondaryvue_type_script_lang_js_ = (TitleSecondaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Title/TitleSecondary.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(259)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Title_TitleSecondaryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77c3dc1e",
  "227eda5d"
  
)

/* harmony default export */ var TitleSecondary = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/AuthFrame.vue?vue&type=template&id=fcf632ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrap"},[_c('hidden',{attrs:{"point":"mdUp"}},[_c('div',{staticClass:"logo logo-header"},[_c('a',{attrs:{"href":_vm.routerLink.saas.home}},[_c('img',{attrs:{"src":"/images/saas-logo.svg","alt":"logo"}}),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle2"},[_vm._v("\n          "+_vm._s(_vm.brand.saas.projectName)+"\n        ")])])])]),_vm._ssrNode(" "),_c('v-container',{staticClass:"max-lg inner-wrap"},[_c('div',{staticClass:"decoration"},[_c('svg',{staticClass:"left-deco"},[_c('use',{attrs:{"xlink:href":"/images/saas/deco-bg-left.svg#main"}})]),_vm._v(" "),_c('svg',{staticClass:"right-deco"},[_c('use',{attrs:{"xlink:href":"/images/saas/deco-bg-right.svg#main"}})])]),_vm._v(" "),_c('v-card',{staticClass:"form-box fragment-fadeUp"},[_c('v-btn',{staticClass:"backtohome",attrs:{"href":_vm.routerLink.saas.home,"icon":""}},[_c('i',{staticClass:"ion-ios-home-outline"}),_vm._v(" "),_c('i',{staticClass:"ion-ios-arrow-round-back-outline"})]),_vm._v(" "),_c('div',{staticClass:"auth-frame"},[_c('v-row',[_c('v-col',{attrs:{"md":"5","cols":"12"}},[_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"greeting"},[_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":"/images/saas-logo.svg","alt":"logo"}}),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle2"},[_vm._v("\n                    "+_vm._s(_vm.brand.saas.projectName)+"\n                  ")])]),_vm._v(" "),_c('h4',{staticClass:"use-text-title2 pb-2"},[_vm._v("\n                  "+_vm._s(_vm.title)+"\n                ")]),_vm._v(" "),_c('h6',{staticClass:"use-text-paragraph"},[_vm._v("\n                  "+_vm._s(_vm.subtitle)+"\n                ")])])])],1),_vm._v(" "),_c('v-col',{attrs:{"md":"7","cols":"12"}},[_c('div',{staticClass:"form-wrap"},[_vm._t("default")],2)])],1)],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue?vue&type=template&id=fcf632ca&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(33);

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(52);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/AuthFrame.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AuthFramevue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },

  data() {
    return {
      brand: brand["a" /* default */],
      routerLink: text_link["a" /* default */]
    };
  },

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_AuthFramevue_type_script_lang_js_ = (AuthFramevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(240);

// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_AuthFramevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fcf632ca",
  "45b8f4eb"
  
)

/* harmony default export */ var AuthFrame = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/SocialAuth.vue?vue&type=template&id=3aa0f2dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"socmed-side-login"},[_c('v-btn',{staticClass:"navi-btn",attrs:{"large":""}},[_c('i',{staticClass:"ion-logo-facebook"}),_vm._v("\n    Facebook\n  ")]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"blue-btn",attrs:{"large":""}},[_c('i',{staticClass:"ion-logo-twitter "}),_vm._v("\n    Twitter\n  ")]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"red-btn",attrs:{"large":""}},[_c('i',{staticClass:"ion-logo-google"}),_vm._v("\n    Google\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/SocialAuth.vue?vue&type=template&id=3aa0f2dc&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(225);

// CONCATENATED MODULE: ./components/Forms/SocialAuth.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(261)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3aa0f2dc",
  "40436f42"
  
)

/* harmony default export */ var SocialAuth = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },

  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },

  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },

    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }

  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },

    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },

    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }

  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', { ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }

  }
}));

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
// Mixins



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__[/* provide */ "b"])('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3bd9bc6a", content, true, context)
};

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_258744da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_258744da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_258744da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_258744da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_258744da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-258744da]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-258744da]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-258744da]{font-size:28px;line-height:44px}}.use-text-title2[data-v-258744da]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-258744da]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-258744da]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-258744da]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-258744da]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-258744da]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-258744da]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-258744da]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-258744da]{font-size:16px;line-height:24px}}.use-text-caption[data-v-258744da],.use-text-paragraph[data-v-258744da]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-258744da]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-258744da]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-258744da]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-258744da]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-258744da]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-258744da]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-258744da]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-258744da]{display:none}}.page-wrap[data-v-258744da]{text-align:center;background:var(--v-primarydark-base);min-height:100%;position:relative;width:100%;align-items:center;padding:80px 40px}@media(min-width:960px){.page-wrap[data-v-258744da]{display:flex}}@media(max-width:959px){.page-wrap[data-v-258744da]{padding:40px 0}}.page-wrap .title-contact[data-v-258744da]{color:#fff}.page-wrap a[data-v-258744da]{text-transform:none;font-size:16px;text-decoration:none;font-weight:var(--font-regular)}.theme--light .page-wrap a[data-v-258744da]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-258744da]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-258744da]{font-size:14px}}[dir=ltr] .inner-wrap[data-v-258744da]{text-align:left}[dir=rtl] .inner-wrap[data-v-258744da]{text-align:right}.full-form-wrap[data-v-258744da]{color:#fff;padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-258744da]{padding-top:32px}}.v-card.form-box[data-v-258744da]{border-radius:40px!important;overflow:hidden;background:transparent;box-shadow:0 1.5px 12px 2px rgba(0,0,0,.28)}@media(max-width:599px){.v-card.form-box[data-v-258744da]{box-shadow:none}}.desc[data-v-258744da]{color:#fff;text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-258744da]{padding:0 16px}}.input[data-v-258744da]{width:100%}[dir=ltr] .input label[data-v-258744da]{left:4px}[dir=rtl] .input label[data-v-258744da]{right:4px}.input[data-v-258744da]  .v-input__slot{background:none;overflow:hidden;border:1px solid}.theme--light .input[data-v-258744da]  .v-input__slot{border-color:rgba(0,0,0,.2)}.theme--dark .input[data-v-258744da]  .v-input__slot{border-color:hsla(0,0%,100%,.25)}[dir=ltr] .input[data-v-258744da]  .v-input__slot input,[dir=ltr] .input[data-v-258744da]  .v-input__slot select,[dir=ltr] .input[data-v-258744da]  .v-input__slot textarea{left:16px}[dir=rtl] .input[data-v-258744da]  .v-input__slot input,[dir=rtl] .input[data-v-258744da]  .v-input__slot select,[dir=rtl] .input[data-v-258744da]  .v-input__slot textarea{right:16px}.input[data-v-258744da]  .v-input__slot input:focus,.input[data-v-258744da]  .v-input__slot input:hover,.input[data-v-258744da]  .v-input__slot select:focus,.input[data-v-258744da]  .v-input__slot select:hover,.input[data-v-258744da]  .v-input__slot textarea:focus,.input[data-v-258744da]  .v-input__slot textarea:hover{background:none}.input.light[data-v-258744da]  .v-input__slot{border:1px solid var(--v-primarylight-darken2)}.input.light[data-v-258744da]  .v-input__slot .v-label,.input.light[data-v-258744da]  .v-input__slot input,.input.light[data-v-258744da]  .v-input__slot select,.input.light[data-v-258744da]  .v-input__slot textarea{color:#fff}.theme--light .input.light[data-v-258744da]  .v-input__slot input:focus,.theme--light .input.light[data-v-258744da]  .v-input__slot select:focus,.theme--light .input.light[data-v-258744da]  .v-input__slot textarea:focus{background:rgba(0,0,0,.08)}.theme--dark .input.light[data-v-258744da]  .v-input__slot input:focus,.theme--dark .input.light[data-v-258744da]  .v-input__slot select:focus,.theme--dark .input.light[data-v-258744da]  .v-input__slot textarea:focus{background:hsla(0,0%,100%,.1)}.theme--light .input.light[data-v-258744da]  .v-input__slot input:hover,.theme--light .input.light[data-v-258744da]  .v-input__slot select:hover,.theme--light .input.light[data-v-258744da]  .v-input__slot textarea:hover{background:rgba(0,0,0,.08)}.theme--dark .input.light[data-v-258744da]  .v-input__slot input:hover,.theme--dark .input.light[data-v-258744da]  .v-input__slot select:hover,.theme--dark .input.light[data-v-258744da]  .v-input__slot textarea:hover{background:hsla(0,0%,100%,.1)}.form[data-v-258744da]{position:relative;margin-top:64px;padding:0 120px 80px}[dir=ltr] .form[data-v-258744da]{text-align:left}[dir=rtl] .form[data-v-258744da]{text-align:right}@media(max-width:959px){.form[data-v-258744da]{padding:0 32px 80px}}@media(max-width:599px){.form[data-v-258744da]{padding:16px 8px;margin-top:16px}}.form-helper[data-v-258744da]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-258744da]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-258744da]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-258744da]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-258744da]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-258744da]{margin-top:16px;margin-bottom:40px}}.btn-area button.v-btn.v-size--large[data-v-258744da]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-258744da]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-258744da]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-258744da]{display:block}}[dir=ltr] .right-icon[data-v-258744da]{margin-left:8px}[dir=rtl] .right-icon[data-v-258744da]{margin-right:8px}.check svg[data-v-258744da]{fill:var(--v-secondary-base)}.decoration[data-v-258744da]{position:absolute;width:100%;height:100%;top:0;overflow:hidden;clip:rect(0,auto,auto,0)}[dir=ltr] .decoration[data-v-258744da]{left:0}[dir=rtl] .decoration[data-v-258744da]{right:0}.decoration svg[data-v-258744da]{fill:var(--v-secondary-base);opacity:.2;position:fixed;top:0}.left-deco[data-v-258744da]{left:-400px;right:auto;width:1200px;height:1500px;transform-origin:top left}@media(min-width:960px){.left-deco[data-v-258744da]{transform:scale(.8)}}.right-deco[data-v-258744da]{left:auto;right:0;height:1500px;transform-origin:top right}@media(min-width:960px){.right-deco[data-v-258744da]{transform:scale(.8)}}.auth-frame[data-v-258744da]{display:block;position:relative}.auth-frame .row>div[data-v-258744da]{padding:0}.greeting[data-v-258744da]{display:flex;padding-top:128px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center;color:#fff}.greeting h6[data-v-258744da]{font-weight:var(--font-regular)}.logo[data-v-258744da]{justify-content:center;margin-bottom:24px;z-index:1}.logo[data-v-258744da],.logo.logoHeader[data-v-258744da]{align-items:center;position:relative}.logo.logoHeader[data-v-258744da]{flex-direction:column;z-index:10}.logo img[data-v-258744da]{width:64px}.logo p[data-v-258744da],.logo span[data-v-258744da]{display:block;padding-bottom:4px;color:#fff}.head[data-v-258744da]{display:flex;justify-content:space-between;align-items:flex-start}.head a[data-v-258744da]{margin-top:16px}@media(max-width:959px){.head[data-v-258744da]{margin-top:16px;justify-content:center}.head a[data-v-258744da]{display:none}}.form-wrap[data-v-258744da]{position:relative;padding:32px}.theme--light .form-wrap[data-v-258744da]{background-color:#fff}.theme--dark .form-wrap[data-v-258744da]{background-color:#424242}@media(min-width:600px){.form-wrap[data-v-258744da]{padding:40px}}@media(min-width:1280px){.form-wrap[data-v-258744da]{padding:64px}}.socmed-side-login[data-v-258744da]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-258744da]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-258744da]{display:block}}.socmed-side-login>*[data-v-258744da]{color:#fff;width:160px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-258744da]{margin:0 4px;width:140px}}@media(max-width:599px){.socmed-side-login>*[data-v-258744da]{margin-bottom:16px;width:100%}}.socmed-side-login i[data-v-258744da]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-258744da]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-258744da]{margin-left:8px}.blue-btn[data-v-258744da]{background:#28aae1!important}.blue-btn[data-v-258744da]:hover{background:#146a8f!important}.navi-btn[data-v-258744da]{background:#3b579d!important}.navi-btn[data-v-258744da]:hover{background:#1f2e53!important}.red-btn[data-v-258744da]{background:#dd493c!important}.red-btn[data-v-258744da]:hover{background:#98251b!important}.separator[data-v-258744da]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}@media(max-width:599px){.separator p[data-v-258744da]{font-size:12px}}.separator[data-v-258744da]:after,.separator[data-v-258744da]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-258744da]:after,.theme--light .separator[data-v-258744da]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-258744da]:after,.theme--dark .separator[data-v-258744da]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-258744da]:before{left:0}.separator[data-v-258744da]:after{right:0}.form-control-label[data-v-258744da]  .v-messages{min-height:0}.form-control-label>div[data-v-258744da]{margin-top:0}.form-control-label .white-label[data-v-258744da]  label.v-label{color:#fff}.backtohome[data-v-258744da]{width:80px;height:80px;position:absolute;margin-top:20px;z-index:4}[dir=ltr] .backtohome[data-v-258744da]{margin-left:20px}[dir=rtl] .backtohome[data-v-258744da]{margin-right:20px}@media(max-width:959px){.backtohome[data-v-258744da]{top:40px;margin:0}[dir=ltr] .backtohome[data-v-258744da]{left:calc(50% - 40px)}[dir=rtl] .backtohome[data-v-258744da]{right:calc(50% - 40px)}}@media(max-width:959px){.backtohome[data-v-258744da]{display:none}}.backtohome i[data-v-258744da]{font-size:32px;color:hsla(0,0%,100%,.54)}.backtohome>span i[data-v-258744da]:first-child{opacity:1;transition:opacity .3s ease}.backtohome>span i[data-v-258744da]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .backtohome>span i[data-v-258744da]:last-child{right:0}[dir=rtl] .backtohome>span i[data-v-258744da]:last-child{left:0}.backtohome[data-v-258744da]:hover{background:rgba(0,0,0,.05)}.backtohome:hover>span i[data-v-258744da]:first-child{opacity:0}.backtohome:hover>span i[data-v-258744da]:last-child{opacity:1}[dir=ltr] .backtohome:hover>span i[data-v-258744da]:last-child{right:27px}[dir=rtl] .backtohome:hover>span i[data-v-258744da]:last-child{left:27px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=9fc7a4cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('login-form')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=9fc7a4cc&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Login.vue?vue&type=template&id=258744da&scoped=true&
var Loginvue_type_template_id_258744da_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('AuthFrame',{attrs:{"title":_vm.$t('common.login_title'),"subtitle":_vm.$t('common.login_subtitle')}},[_c('div',[_c('div',{staticClass:"head"},[_c('title-secondary',{attrs:{"align":_vm.isMobile ? 'center' : 'left'}},[_vm._v("\n        "+_vm._s(_vm.$t('common.login'))+"\n      ")]),_vm._v(" "),_c('v-btn',{staticClass:"button-link",attrs:{"href":_vm.routerLink.saas.register,"text":"","small":""}},[_c('v-icon',{staticClass:"icon signArrow"},[_vm._v("\n          mdi-arrow-right\n        ")]),_vm._v("\n        "+_vm._s(_vm.$t('common.login_create'))+"\n      ")],1)],1),_vm._v(" "),_c('social-auth'),_vm._v(" "),_c('div',{staticClass:"separator"},[_c('p',[_vm._v("\n        "+_vm._s(_vm.$t('common.login_or'))+"\n      ")])]),_vm._v(" "),_c('v-form',{ref:"form",model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-row',{staticClass:"spacing3"},[_c('v-col',{staticClass:"px-3",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('common.login_email'),"rules":_vm.emailRules,"color":"secondary","name":"email","filled":"","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-3",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('common.login_password'),"rules":_vm.requiredRules,"color":"secondary","type":"password","name":"email","filled":"","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"form-helper"},[_c('div',{staticClass:"form-control-label"},[_c('v-checkbox',{attrs:{"label":_vm.$t('common.login_remember'),"color":"secondary"},model:{value:(_vm.checkbox),callback:function ($$v) {_vm.checkbox=$$v},expression:"checkbox"}})],1),_vm._v(" "),_c('v-btn',{staticClass:"button-link",attrs:{"small":"","text":"","href":"#"}},[_vm._v("\n          "+_vm._s(_vm.$t('common.login_forgot'))+"\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"btn-area"},[_c('v-btn',{attrs:{"large":"","block":"","color":"secondary"},on:{"click":_vm.handleSubmit}},[_vm._v("\n          "+_vm._s(_vm.$t('common.continue'))+"\n        ")])],1)],1)],1)])}
var Loginvue_type_template_id_258744da_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/Login.vue?vue&type=template&id=258744da&scoped=true&

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(52);

// EXTERNAL MODULE: ./components/Title/TitleSecondary.vue + 4 modules
var TitleSecondary = __webpack_require__(266);

// EXTERNAL MODULE: ./components/Forms/SocialAuth.vue + 2 modules
var SocialAuth = __webpack_require__(268);

// EXTERNAL MODULE: ./components/Forms/AuthFrame.vue + 4 modules
var AuthFrame = __webpack_require__(267);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  components: {
    SocialAuth: SocialAuth["a" /* default */],
    TitleSecondary: TitleSecondary["a" /* default */],
    AuthFrame: AuthFrame["a" /* default */]
  },

  data() {
    return {
      routerLink: text_link["a" /* default */],
      valid: true,
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      password: '',
      requiredRules: [v => !!v || 'This field is required'],
      checkbox: false
    };
  },

  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited');
      }
    }

  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Forms/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(35);

// CONCATENATED MODULE: ./components/Forms/Login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(345)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_Loginvue_type_script_lang_js_,
  Loginvue_type_template_id_258744da_scoped_true_render,
  Loginvue_type_template_id_258744da_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "258744da",
  "9c9df6a2"
  
)

/* harmony default export */ var Login = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCheckbox: VCheckbox["a" /* default */],VCol: VCol["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  components: {
    LoginForm: Login
  },

  head() {
    return {
      title: brand["a" /* default */].saas.name + ' - Login'
    };
  }

});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var login_component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4f28e268"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (login_component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map