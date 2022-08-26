exports.ids = [4];
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

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCardActions */
/* unused harmony export VCardSubtitle */
/* unused harmony export VCardText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fa924c1a", content, true, context)
};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("63c9496b", content, true)

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
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

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-004b7178]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-004b7178]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-004b7178]{font-size:28px;line-height:44px}}.use-text-title2[data-v-004b7178]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-004b7178]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-004b7178]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-004b7178]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-004b7178]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-004b7178]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-004b7178]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-004b7178]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-004b7178]{font-size:16px;line-height:24px}}.use-text-caption[data-v-004b7178],.use-text-paragraph[data-v-004b7178]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-004b7178]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-004b7178]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-004b7178]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-004b7178]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-004b7178]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-004b7178]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-004b7178]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-004b7178]{display:none}}.notification[data-v-004b7178]{width:95%;margin:0 auto}@media(min-width:1280px){.notification[data-v-004b7178]{width:80%}}.notification[data-v-004b7178]  .v-snack__wrapper{width:100%;margin-bottom:16px;max-width:none;font-size:16px;color:var(--v-primarydark-base);background:var(--v-primarylight-base)}@media(min-width:600px){.notification[data-v-004b7178]  .v-snack__wrapper{padding:4px 16px}}.notification[data-v-004b7178]  .v-snack__wrapper>div:first-child{display:flex;align-items:center}@media(min-width:600px){.notification[data-v-004b7178]  .v-snack__wrapper>div:first-child .action{flex:1}[dir=ltr] .notification[data-v-004b7178]  .v-snack__wrapper>div:first-child .action{margin-right:16px}[dir=rtl] .notification[data-v-004b7178]  .v-snack__wrapper>div:first-child .action{margin-left:16px}}@media(max-width:599px){.notification[data-v-004b7178]  .v-snack__wrapper>div:first-child .action{text-align:center}}.notification .button.v-btn[data-v-004b7178]{width:100%;box-shadow:none}@media(min-width:600px){.notification .button.v-btn[data-v-004b7178]{width:150px}}@media(max-width:599px){.notification .button.v-btn[data-v-004b7178]{margin:16px 0}}@media(max-width:599px){.action[data-v-004b7178]{width:100%;padding:0;margin:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=template&id=004b7178&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-snackbar',{staticClass:"notification",attrs:{"timeout":-1},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n    "+_vm._s(_vm.$t('common.notif_msg'))+"\n  ")]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"color":"secondary"},on:{"click":function($event){_vm.snackbar = false}}},[_vm._v("\n    "+_vm._s(_vm.$t('common.accept'))+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=template&id=004b7178&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  data() {
    return {
      snackbar: true
    };
  }

});
// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var Notification_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(273);

// CONCATENATED MODULE: ./components/Notification/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Notification_Notificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "004b7178",
  "64451c6f"
  
)

/* harmony default export */ var Notification = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})

// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      if (this.absolute || !this.app) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application;
      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(bottom + footer + insetFooter),
        paddingLeft: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(left),
        paddingRight: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: () => window.clearTimeout(this.activeTimeout),
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0cf7d8fc", content, true, context)
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0efee1e6", content, true, context)
};

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("25068e0c", content, true, context)
};

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("45fad550", content, true, context)
};

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(316);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0dca15aa", content, true, context)
};

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6e6e76fa", content, true, context)
};

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(320);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4ca7320d", content, true, context)
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("66837592", content, true, context)
};

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3e2c53ac", content, true, context)
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("00445ff3", content, true, context)
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0d6946f2", content, true, context)
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f69f0264", content, true, context)
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3878f6dc", content, true, context)
};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("38ef09be", content, true, context)
};

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("56f6e9fc", content, true, context)
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("02e6cc72", content, true, context)
};

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_64fd573f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_64fd573f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_64fd573f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_64fd573f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_64fd573f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-64fd573f]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-64fd573f]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-64fd573f]{font-size:28px;line-height:44px}}.use-text-title2[data-v-64fd573f]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-64fd573f]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-64fd573f]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-64fd573f]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-64fd573f]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-64fd573f]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-64fd573f]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-64fd573f]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-64fd573f]{font-size:16px;line-height:24px}}.use-text-caption[data-v-64fd573f],.use-text-paragraph[data-v-64fd573f]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-64fd573f]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-64fd573f]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-64fd573f]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-64fd573f]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-64fd573f]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-64fd573f]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-64fd573f]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-64fd573f]{display:none}}.fab.v-btn[data-v-64fd573f]{transform:scale(.5);transition:all .5s ease;opacity:0;background:var(--v-primarylight-base)!important;position:absolute;bottom:0;right:0;font-weight:var(--font-bold)}.fab.v-btn .icon[data-v-64fd573f]{color:var(--v-primarydark-base);font-size:40px}.page-nav[data-v-64fd573f]{z-index:200;position:fixed;bottom:40px;right:40px;width:56px}.page-nav nav[data-v-64fd573f]{height:0;overflow:hidden;transition:height .5s ease;transition-delay:.5s}.page-nav.show .fab[data-v-64fd573f]{opacity:1;transform:scale(1)}.page-nav .section-nav section[data-v-64fd573f]{margin:0 0 76px 22px;padding:0;position:relative}.page-nav .section-nav a[data-v-64fd573f]{margin-bottom:24px;opacity:0;position:relative;width:12px;height:12px;border-radius:50%;background:hsla(0,0%,100%,.3);border:1px solid var(--v-primarydark-base);display:block;transition:all .4s ease;color:transparent}.theme--dark .page-nav .section-nav a[data-v-64fd573f]{box-shadow:0 1px 3px 0 rgba(50,50,50,.2),0 1px 1px 0 rgba(50,50,50,.14),0 2px 1px -1px rgba(50,50,50,.12)}.theme--light .page-nav .section-nav a[data-v-64fd573f]{box-shadow:0 1px 3px 0 hsla(0,0%,50.2%,.2),0 1px 1px 0 hsla(0,0%,50.2%,.14),0 2px 1px -1px hsla(0,0%,50.2%,.12);border-color:rgba(0,0,0,.38)}.theme--dark .page-nav .section-nav a[data-v-64fd573f]{border-color:hsla(0,0%,100%,.5)}.page-nav .section-nav a.active[data-v-64fd573f]{background:var(--v-primarydark-base);border:1px solid var(--v-primarylight-base)}.page-nav:hover nav[data-v-64fd573f]{transition-delay:0s;height:100%}.page-nav:hover .section-nav a[data-v-64fd573f]{opacity:1;top:0!important}.tooltip[data-v-64fd573f]{text-transform:capitalize;font-size:14px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("dc0628f2", content, true)

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_b45929ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(279);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_b45929ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_b45929ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_b45929ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_b45929ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-b45929ee]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-b45929ee]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-b45929ee]{font-size:28px;line-height:44px}}.use-text-title2[data-v-b45929ee]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-b45929ee]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-b45929ee]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-b45929ee]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-b45929ee]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-b45929ee]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-b45929ee]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-b45929ee]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-b45929ee]{font-size:16px;line-height:24px}}.use-text-caption[data-v-b45929ee],.use-text-paragraph[data-v-b45929ee]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-b45929ee]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-b45929ee]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-b45929ee]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-b45929ee]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-b45929ee]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-b45929ee]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-b45929ee]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-b45929ee]{display:none}}@-webkit-keyframes move_wave-data-v-b45929ee{0%{background-position:0 0;transform:scaleX(2)}50%{background-position:50% -50%;transform:scale(2.3,1.2)}to{background-position:100% 0;transform:scaleX(2)}}@keyframes move_wave-data-v-b45929ee{0%{background-position:0 0;transform:scaleX(2)}50%{background-position:50% -50%;transform:scale(2.3,1.2)}to{background-position:100% 0;transform:scaleX(2)}}.root[data-v-b45929ee]{background:linear-gradient(-45deg,var(--v-primary-base) 20%,var(--v-primarydark-base) 70%);position:relative;padding:200px 0 120px}@media(min-width:1280px){.root[data-v-b45929ee]{height:780px;padding:240px 0 40px}}@media(max-width:599px){.root[data-v-b45929ee]{padding:200px 0 80px;position:relative}}.decoration[data-v-b45929ee]{position:absolute;width:100%;height:100%;top:0;overflow:hidden;clip:rect(0,auto,auto,0)}[dir=ltr] .decoration[data-v-b45929ee]{left:0}[dir=rtl] .decoration[data-v-b45929ee]{right:0}.decoration svg[data-v-b45929ee]{fill:var(--v-secondary-base);opacity:.15;position:fixed;top:0}.left-deco[data-v-b45929ee]{left:0;right:auto;width:1200px;height:1500px;transform:scale(.5);transform-origin:top left}.right-deco[data-v-b45929ee]{left:auto;right:0;height:1500px;transform:scale(.5);transform-origin:top right}.slider-wrap[data-v-b45929ee]{position:relative;z-index:3;display:flex;justify-content:space-between}.text[data-v-b45929ee]{max-Width:720px}@media(max-width:959px){.text[data-v-b45929ee]{text-align:center}}.text h3[data-v-b45929ee]{color:#fff}@media(min-width:1280px){[dir=ltr] .text h3[data-v-b45929ee]{padding-right:40px}[dir=rtl] .text h3[data-v-b45929ee]{padding-left:40px}}.text h3 strong[data-v-b45929ee]{font-weight:var(--font-bold)}.text p[data-v-b45929ee]{color:#fff;margin:32px 0}@media(min-width:1280px){[dir=ltr] .text p[data-v-b45929ee]{padding-right:120px}[dir=rtl] .text p[data-v-b45929ee]{padding-left:120px}}.btn-area[data-v-b45929ee]{display:flex}@media(max-width:959px){.btn-area[data-v-b45929ee]{justify-content:center}}@media(max-width:599px){.btn-area[data-v-b45929ee]{flex-direction:column-reverse}.btn-area>*[data-v-b45929ee]{margin-bottom:32px;height:56px}}.play-btn[data-v-b45929ee]{text-transform:uppercase;color:#fff;display:flex;align-items:center;font-size:16px;font-weight:var(--font-regular);background:none;padding-left:0!important;padding-right:0!important}@media(min-width:600px){[dir=ltr] .play-btn[data-v-b45929ee]{margin-right:32px}[dir=rtl] .play-btn[data-v-b45929ee]{margin-left:32px}}.play-btn .icon[data-v-b45929ee]{border-radius:50%;transition:all .3s ease-out;width:40px;height:40px;text-align:center;line-height:47px;vertical-align:middle;background:var(--v-primary-base)}[dir=ltr] .play-btn .icon[data-v-b45929ee]{margin-right:8px}[dir=rtl] .play-btn .icon[data-v-b45929ee]{margin-left:8px}.play-btn i[data-v-b45929ee]{color:#fff;line-height:22px;font-size:24px}[dir=ltr] .play-btn i[data-v-b45929ee]{margin-left:4px}[dir=rtl] .play-btn i[data-v-b45929ee]{margin-right:4px}.play-btn:hover .icon[data-v-b45929ee]{background:var(--v-primarydark-base)}[dir=ltr] .play-btn:hover .icon[data-v-b45929ee]{left:0}[dir=rtl] .play-btn:hover .icon[data-v-b45929ee]{right:0}@media(max-width:959px){.illustration[data-v-b45929ee]{display:none}}.illustration img[data-v-b45929ee]{display:block}@media(min-width:960px){.illustration img[data-v-b45929ee]{max-width:400px}}@media(min-width:1280px){.illustration img[data-v-b45929ee]{max-width:480px}}.wave[data-v-b45929ee]{transform:translateZ(0)}.deco[data-v-b45929ee]{position:absolute;height:110px;bottom:-35px;width:100%}[dir=ltr] .deco[data-v-b45929ee]{left:0}[dir=rtl] .deco[data-v-b45929ee]{right:0}@media(min-width:600px){.deco[data-v-b45929ee]{bottom:-20}}@media(min-width:1280px){.deco[data-v-b45929ee]{bottom:-10}}.deco .wave[data-v-b45929ee]{position:absolute;height:100%;width:100%;bottom:0;background-repeat:repeat-x;transform:scaleX(2.5)}[dir=ltr] .deco .wave[data-v-b45929ee]{left:0}[dir=rtl] .deco .wave[data-v-b45929ee]{right:0}.theme--dark .deco .wave[data-v-b45929ee]{background-image:url(/images/saas/deco-wave-dark.png)}.theme--light .deco .wave[data-v-b45929ee]{background-image:url(/images/saas/deco-wave-light.png)}@media(max-width:599px){.deco .wave[data-v-b45929ee]{transform:scaleX(6);bottom:20px}}.wave-one[data-v-b45929ee]{background-size:50% 100px;-webkit-animation:25s linear infinite;animation:25s linear infinite;-webkit-animation-name:move_wave-data-v-b45929ee;animation-name:move_wave-data-v-b45929ee}.wave-one[data-v-b45929ee],.wave-two[data-v-b45929ee]{opacity:.2;background-position:0 0}.wave-two[data-v-b45929ee]{background-size:50% 120px;-webkit-animation:20s linear infinite;animation:20s linear infinite;-webkit-animation-name:move_wave-data-v-b45929ee;animation-name:move_wave-data-v-b45929ee}.wave-cover[data-v-b45929ee]{background-size:51% 100px;background-position:397px 0;transform:scaleX(2)}@media(max-width:1279px){.wave-cover[data-v-b45929ee]{background-size:51% 70px;background-position:397px 10px}}@media(max-width:599px){.wave-cover[data-v-b45929ee]{background-position:bottom}}.video-popup[data-v-b45929ee]{max-width:none;width:690px}.video-popup h2[data-v-b45929ee]{display:flex;width:100%;justify-content:space-between;align-items:center}@media(max-width:1279px){.video-popup[data-v-b45929ee]{width:100%}.video-popup>*[data-v-b45929ee]{padding:8px}.video-popup[data-v-b45929ee] iframe{width:100%}}.deco-inner[data-v-b45929ee]{position:absolute;top:0;width:100%;height:100%}[dir=ltr] .deco-inner[data-v-b45929ee]{left:0}[dir=rtl] .deco-inner[data-v-b45929ee]{right:0}.hide[data-v-b45929ee]{visibility:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2065bca8", content, true)

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_41e65afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_41e65afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_41e65afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_41e65afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_41e65afa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-41e65afa]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-41e65afa]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-41e65afa]{font-size:28px;line-height:44px}}.use-text-title2[data-v-41e65afa]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-41e65afa]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-41e65afa]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-41e65afa]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-41e65afa]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-41e65afa]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-41e65afa]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-41e65afa]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-41e65afa]{font-size:16px;line-height:24px}}.use-text-caption[data-v-41e65afa],.use-text-paragraph[data-v-41e65afa]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-41e65afa]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-41e65afa]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-41e65afa]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-41e65afa]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-41e65afa]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-41e65afa]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-41e65afa]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-41e65afa]{display:none}}.root[data-v-41e65afa]{display:flex}@media(min-width:600px){.root[data-v-41e65afa]{justify-content:center}}@media(max-width:599px){.root[data-v-41e65afa]{overflow-x:auto}}.root img[data-v-41e65afa]{height:64px;margin:32px;filter:grayscale(1) contrast(.5) brightness(1.5);transition:all .3s ease-out}.root img[data-v-41e65afa]:hover{filter:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_0f335ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_0f335ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_0f335ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_0f335ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_0f335ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-0f335ce8]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-0f335ce8]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-0f335ce8]{font-size:28px;line-height:44px}}.use-text-title2[data-v-0f335ce8]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-0f335ce8]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-0f335ce8]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-0f335ce8]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-0f335ce8]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-0f335ce8]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-0f335ce8]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-0f335ce8]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-0f335ce8]{font-size:16px;line-height:24px}}.use-text-caption[data-v-0f335ce8],.use-text-paragraph[data-v-0f335ce8]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-0f335ce8]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-0f335ce8]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-0f335ce8]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-0f335ce8]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-0f335ce8]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-0f335ce8]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-0f335ce8]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-0f335ce8]{display:none}}.counter-wrap[data-v-0f335ce8]{position:relative}.counter-item[data-v-0f335ce8],.counter-item p[data-v-0f335ce8]{align-items:center;justify-content:center}.counter-item p[data-v-0f335ce8]{display:flex;margin:0}.theme--light .counter-item p[data-v-0f335ce8]{color:rgba(0,0,0,.54)}.theme--dark .counter-item p[data-v-0f335ce8]{color:hsla(0,0%,100%,.7)}.counter-item p i[data-v-0f335ce8]{font-size:40px}[dir=ltr] .counter-item p i[data-v-0f335ce8]{margin-right:16px}[dir=rtl] .counter-item p i[data-v-0f335ce8]{margin-left:16px}@media(max-width:599px){.counter-item p i[data-v-0f335ce8]{font-size:24px}[dir=ltr] .counter-item p i[data-v-0f335ce8]{margin-right:8px}[dir=rtl] .counter-item p i[data-v-0f335ce8]{margin-left:8px}}@media(min-width:960px){.counter-item[data-v-0f335ce8]{display:flex}}.counter-item .text[data-v-0f335ce8]{text-align:center}.counter-item .text h3[data-v-0f335ce8]{position:relative;padding-bottom:16px}.theme--dark .counter-item .text h3[data-v-0f335ce8]{color:var(--v-primarylight-base)}.theme--light .counter-item .text h3[data-v-0f335ce8]{color:var(--v-primary-base)}@media(max-width:599px){.counter-inner .col[data-v-0f335ce8]{flex-basis:auto}}.counter-inner>div[data-v-0f335ce8]{position:relative}.counter-inner>div[data-v-0f335ce8]:after{content:\"\";border-color:var(--v-primarydark-base);opacity:.2;height:90px;position:absolute;top:30px}[dir=ltr] .counter-inner>div[data-v-0f335ce8]:after{border-left:2px solid}[dir=rtl] .counter-inner>div[data-v-0f335ce8]:after{border-right:2px solid}[dir=ltr] .counter-inner>div[data-v-0f335ce8]:after{right:0}[dir=rtl] .counter-inner>div[data-v-0f335ce8]:after{left:0}@media(max-width:599px){.counter-inner>div[data-v-0f335ce8]:after{display:none}}.counter-inner>div[data-v-0f335ce8]:last-child:after{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_2879ae00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_2879ae00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_2879ae00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_2879ae00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_2879ae00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-2879ae00]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-2879ae00]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-2879ae00]{font-size:28px;line-height:44px}}.use-text-title2[data-v-2879ae00]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-2879ae00]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-2879ae00]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-2879ae00]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-2879ae00]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-2879ae00]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-2879ae00]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-2879ae00]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-2879ae00]{font-size:16px;line-height:24px}}.use-text-caption[data-v-2879ae00],.use-text-paragraph[data-v-2879ae00]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-2879ae00]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-2879ae00]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-2879ae00]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-2879ae00]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-2879ae00]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-2879ae00]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-2879ae00]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-2879ae00]{display:none}}.parallax-wrap[data-v-2879ae00]{position:absolute;width:100%;height:100%;top:0;z-index:0;transform:scale(.8)}[dir=ltr] .parallax-wrap[data-v-2879ae00]{left:0}[dir=rtl] .parallax-wrap[data-v-2879ae00]{right:0}.parallax-wrap.dots-wrap[data-v-2879ae00]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-2879ae00]{display:none}}.inner-parallax[data-v-2879ae00]{height:800px}.inner-parallax[data-v-2879ae00],.inner-parallax>div[data-v-2879ae00]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-2879ae00]{height:500px}.inner-parallax.large[data-v-2879ae00]{top:600px}.inner-parallax.medium[data-v-2879ae00]{top:200px}.inner-parallax .Masthead[data-v-2879ae00]{overflow:visible}.inner-parallax .figure>div[data-v-2879ae00]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-2879ae00]{position:absolute}.plus[data-v-2879ae00]{fill:#eca426;top:100px;width:100px;height:100px;transform:scale(.5)}[dir=ltr] .plus[data-v-2879ae00]{left:20px}[dir=rtl] .plus[data-v-2879ae00]{right:20px}.circle[data-v-2879ae00]{fill:var(--v-secondary-base);top:20px;width:120px;height:120px;transform:scale(.5)}[dir=ltr] .circle[data-v-2879ae00]{right:70px}[dir=rtl] .circle[data-v-2879ae00]{left:70px}.zigzag[data-v-2879ae00]{fill:var(--v-primary-base);bottom:300px;width:250px;height:75px;transform:scale(.5)}[dir=ltr] .zigzag[data-v-2879ae00]{left:0}[dir=rtl] .zigzag[data-v-2879ae00]{right:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_236892d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_236892d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_236892d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_236892d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_236892d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-236892d0]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-236892d0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-236892d0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-236892d0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-236892d0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-236892d0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-236892d0]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-236892d0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-236892d0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-236892d0]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-236892d0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-236892d0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-236892d0],.use-text-paragraph[data-v-236892d0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-236892d0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-236892d0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-236892d0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-236892d0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-236892d0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-236892d0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-236892d0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-236892d0]{display:none}}.parallax-wrap[data-v-236892d0]{position:absolute;width:100%;height:100%;top:0;z-index:0;transform:scale(.8)}[dir=ltr] .parallax-wrap[data-v-236892d0]{left:0}[dir=rtl] .parallax-wrap[data-v-236892d0]{right:0}.parallax-wrap.dots-wrap[data-v-236892d0]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-236892d0]{display:none}}.inner-parallax[data-v-236892d0]{height:800px}.inner-parallax[data-v-236892d0],.inner-parallax>div[data-v-236892d0]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-236892d0]{height:500px}.inner-parallax.large[data-v-236892d0]{top:600px}.inner-parallax.medium[data-v-236892d0]{top:200px}.inner-parallax .Masthead[data-v-236892d0]{overflow:visible}.inner-parallax .figure>div[data-v-236892d0]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-236892d0]{position:absolute}.plus[data-v-236892d0]{fill:#eca426;top:100px;width:100px;height:100px;transform:scale(.5)}[dir=ltr] .plus[data-v-236892d0]{left:20px}[dir=rtl] .plus[data-v-236892d0]{right:20px}.circle[data-v-236892d0]{fill:var(--v-secondary-base);top:20px;width:120px;height:120px;transform:scale(.5)}[dir=ltr] .circle[data-v-236892d0]{right:70px}[dir=rtl] .circle[data-v-236892d0]{left:70px}.zigzag[data-v-236892d0]{fill:var(--v-primary-base);bottom:300px;width:250px;height:75px;transform:scale(.5)}[dir=ltr] .zigzag[data-v-236892d0]{left:0}[dir=rtl] .zigzag[data-v-236892d0]{right:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-7b4345c0]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-7b4345c0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7b4345c0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7b4345c0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-7b4345c0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7b4345c0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7b4345c0]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-7b4345c0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7b4345c0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7b4345c0]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7b4345c0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7b4345c0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7b4345c0],.use-text-paragraph[data-v-7b4345c0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7b4345c0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-7b4345c0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-7b4345c0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-7b4345c0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-7b4345c0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7b4345c0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-7b4345c0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-7b4345c0]{display:none}}[dir=ltr] .left[data-v-7b4345c0]{text-align:left}[dir=rtl] .left[data-v-7b4345c0]{text-align:right}[dir=ltr] .left[data-v-7b4345c0]:after{left:0}[dir=rtl] .left[data-v-7b4345c0]:after{right:0}[dir=ltr] .right[data-v-7b4345c0]{text-align:right}[dir=rtl] .right[data-v-7b4345c0]{text-align:left}[dir=ltr] .right[data-v-7b4345c0]:after{right:0}[dir=rtl] .right[data-v-7b4345c0]:after{left:0}.center[data-v-7b4345c0]{text-align:center}[dir=ltr] .center[data-v-7b4345c0]:after{left:50%}[dir=rtl] .center[data-v-7b4345c0]:after{right:50%}[dir=ltr] .center[data-v-7b4345c0]:after{margin-left:-35px}[dir=rtl] .center[data-v-7b4345c0]:after{margin-right:-35px}.title[data-v-7b4345c0]{display:block;position:relative;margin-bottom:72px}.title h4[data-v-7b4345c0]{font-size:36px;line-height:56px;font-weight:var(--font-bold);letter-spacing:1px}@media(max-width:1279px){.title h4[data-v-7b4345c0]{font-size:32px;line-height:48px}}@media(max-width:599px){.title h4[data-v-7b4345c0]{font-size:28px;line-height:44px}}.title[data-v-7b4345c0]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background:var(--v-primary-base);position:absolute}.theme--light .title strong[data-v-7b4345c0]{color:rgba(0,0,0,.87)}.theme--dark .title strong[data-v-7b4345c0]{color:#fff}.title-secondary[data-v-7b4345c0]{display:block;position:relative;margin-bottom:96px;text-transform:capitalize}@media(max-width:599px){.title-secondary[data-v-7b4345c0]{margin-bottom:80px}}.title-secondary h3[data-v-7b4345c0]{font-size:36px;line-height:56px;font-weight:var(--font-bold);letter-spacing:1px}.theme--light .title-secondary h3[data-v-7b4345c0]{color:rgba(0,0,0,.87)}.theme--dark .title-secondary h3[data-v-7b4345c0]{color:#fff}@media(max-width:1279px){.title-secondary h3[data-v-7b4345c0]{font-size:32px;line-height:48px}}@media(max-width:599px){.title-secondary h3[data-v-7b4345c0]{font-size:28px;line-height:44px}}.title-secondary[data-v-7b4345c0]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background:var(--v-primary-base);position:absolute}.theme--light .title-secondary strong[data-v-7b4345c0]{color:rgba(0,0,0,.87)}.theme--dark .title-secondary strong[data-v-7b4345c0]{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4f58c492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4f58c492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4f58c492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4f58c492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_4f58c492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4f58c492]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4f58c492]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4f58c492]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4f58c492]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4f58c492]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4f58c492]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4f58c492]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4f58c492]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4f58c492]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4f58c492]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4f58c492]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4f58c492]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4f58c492],.use-text-paragraph[data-v-4f58c492]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4f58c492]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4f58c492]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4f58c492]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4f58c492]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4f58c492]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4f58c492]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4f58c492]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4f58c492]{display:none}}.root[data-v-4f58c492]{position:relative}.decoration[data-v-4f58c492]{position:absolute;width:1280px;height:100%;top:100px}[dir=ltr] .decoration[data-v-4f58c492]{left:-10px}[dir=rtl] .decoration[data-v-4f58c492]{right:-10px}.decoration svg[data-v-4f58c492]{width:100%;height:1700px;opacity:.2;transform:scale(1.3)}.theme--light .decoration svg[data-v-4f58c492]{fill:var(--v-primarylight-base)}.theme--dark .decoration svg[data-v-4f58c492]{fill:var(--v-primarydark-base)}@media only screen and (min-width:1400px){.decoration svg[data-v-4f58c492]{transform:scaleX(2.5)}}@media(min-width:1920px){.decoration svg[data-v-4f58c492]{display:none}}@media(max-width:599px){.decoration svg[data-v-4f58c492]{transform:scale(.5);transform-origin:center left}}.item[data-v-4f58c492]{position:relative;min-height:320px;margin-bottom:160px}.item .desc[data-v-4f58c492]{position:relative;z-index:60}.item.last[data-v-4f58c492]{margin-bottom:80px}@media(max-width:1279px){.item[data-v-4f58c492]{margin-bottom:120px}}@media(max-width:959px){.item[data-v-4f58c492]{text-align:center}}.item h6[data-v-4f58c492]{margin-bottom:40px}.item .parallax-wrap .Masthead[data-v-4f58c492]{overflow:visible;min-height:80vh}@media(max-width:599px){.item .parallax-wrap .Masthead[data-v-4f58c492]{min-height:30vh}}@media(min-width:960px){.item .parallax-wrap[data-v-4f58c492]{position:absolute;top:0;left:0;width:100%;height:100%}}@media(max-width:959px){.item .parallax-wrap[data-v-4f58c492]{margin:24px 0}}@media(max-width:599px){.item .parallax-wrap[data-v-4f58c492]{margin:0}}.item .parallax-wrap .viewport[data-v-4f58c492]{perspective:1000px}.item .figure[data-v-4f58c492]{transform-style:preserve-3d;overflow:hidden;border-radius:12px;background:#fff;padding:24px 8px 8px;margin:24px}.theme--dark .item .figure[data-v-4f58c492]{box-shadow:0 1px 5px 0 rgba(50,50,50,.2),0 2px 2px 0 rgba(50,50,50,.14),0 3px 1px -2px rgba(50,50,50,.12)}.theme--light .item .figure[data-v-4f58c492]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12)}.item .figure img[data-v-4f58c492]{width:100%}.screen[data-v-4f58c492]{position:relative}.screen img[data-v-4f58c492]{width:90%;display:block}.graphic[data-v-4f58c492]{position:relative}.graphic img[data-v-4f58c492]{width:90%;display:block}.tabs[data-v-4f58c492]{position:relative;z-index:55;margin-top:-40px}.tabs .v-tabs-slider-wrapper .v-tabs-slider[data-v-4f58c492]{background-color:var(--v-primarylight-base)!important}@media(max-width:959px){.tabs section[data-v-4f58c492]{margin:24px 0}}@media(max-width:599px){.tabs[data-v-4f58c492]  .v-slide-group__prev.v-slide-group__prev--disabled{display:none!important}}@media(max-width:599px){.tabs[data-v-4f58c492]  .v-slide-group__wrapper{overflow:auto}}.tab-content[data-v-4f58c492]{position:relative}@media(min-width:960px){.tab-content[data-v-4f58c492]{padding:64px 32px 0}}.tab-content section[data-v-4f58c492]{position:relative}.tab-content section div[data-v-4f58c492]{overflow:visible}.tab-label[data-v-4f58c492]{font-size:18px;font-weight:var(--font-medium);letter-spacing:0;padding:0 40px;border-bottom:1px solid}.theme--light .tab-label[data-v-4f58c492]{border-color:rgba(0,0,0,.38)}.theme--dark .tab-label[data-v-4f58c492]{border-color:hsla(0,0%,100%,.5)}@media(max-width:599px){.tab-label[data-v-4f58c492]{font-size:14px}}.theme--light .tab-label.selected[data-v-4f58c492]{color:var(--v-primary-base)}.theme--dark .tab-label[data-v-4f58c492],.theme--dark .tab-label.selected[data-v-4f58c492]{color:var(--v-primarylight-base)}.illustration-left[data-v-4f58c492]{position:relative;z-index:1;max-height:600px;height:100%}@media(min-width:960px){.illustration-left[data-v-4f58c492]{top:-220px}}@media(min-width:960px){.illustration-left .screen[data-v-4f58c492]{margin-top:350px}.v-application--is-ltr .illustration-left .screen[data-v-4f58c492]{transform:rotateY(30deg)}.v-application--is-rtl .illustration-left .screen[data-v-4f58c492]{transform:rotateY(-30deg)}}.illustration-left .graphic[data-v-4f58c492]{top:200px;width:360px}[dir=ltr] .illustration-left .graphic[data-v-4f58c492]{left:70px}[dir=rtl] .illustration-left .graphic[data-v-4f58c492]{right:70px}@media(min-width:960px){.v-application--is-ltr .illustration-left .graphic[data-v-4f58c492]{transform:rotateY(30deg) rotateX(-5deg) rotate(0deg)}.v-application--is-rtl .illustration-left .graphic[data-v-4f58c492]{transform:rotateY(-30deg) rotateX(-5deg) rotate(0deg)}}.illustration-right[data-v-4f58c492]{position:relative;z-index:2;top:0}@media(min-width:960px){.illustration-right[data-v-4f58c492]{top:-220px}}@media(min-width:960px){.illustration-right .screen[data-v-4f58c492]{top:40px;margin-top:400px}[dir=ltr] .illustration-right .screen[data-v-4f58c492]{left:-20px}[dir=rtl] .illustration-right .screen[data-v-4f58c492]{right:-20px}.v-application--is-ltr .illustration-right .screen[data-v-4f58c492]{transform:rotateY(-30deg)}.v-application--is-rtl .illustration-right .screen[data-v-4f58c492]{transform:rotateY(30deg)}}.illustration-right .graphic[data-v-4f58c492]{top:400px;width:400px}[dir=ltr] .illustration-right .graphic[data-v-4f58c492]{right:-60px}[dir=rtl] .illustration-right .graphic[data-v-4f58c492]{left:-60px}@media screen and (min-width:1400px){.illustration-right .graphic[data-v-4f58c492]{top:200px}}@media(min-width:960px){.illustration-right .graphic[data-v-4f58c492]{transform-style:preserve-3d}.v-application--is-ltr .illustration-right .graphic[data-v-4f58c492]{transform:rotateY(-19deg) rotateX(1deg) rotate(-2deg)}.v-application--is-rtl .illustration-right .graphic[data-v-4f58c492]{transform:rotateY(19deg) rotateX(1deg) rotate(-2deg)}}.illustration-center[data-v-4f58c492]{perspective:1000px}.illustration-center .figure.screen[data-v-4f58c492]{display:block;text-align:center;max-width:700px;margin:-50px auto 0;transform:rotateY(0) rotateX(35deg) rotate(0deg)}.illustration-center .figure.screen img[data-v-4f58c492]{margin:0 auto;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("c176411c", content, true)

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-tabs>.v-tabs-bar{background-color:#fff}.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-tabs .v-tab:hover:before{opacity:.04}.theme--light.v-tabs .v-tab--active:before,.theme--light.v-tabs .v-tab--active:hover:before,.theme--light.v-tabs .v-tab:focus:before{opacity:.12}.theme--light.v-tabs .v-tab--active:focus:before{opacity:.16}.theme--dark.v-tabs>.v-tabs-bar{background-color:#1e1e1e}.theme--dark.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:hsla(0,0%,100%,.6)}.theme--dark.v-tabs .v-tab:hover:before{opacity:.08}.theme--dark.v-tabs .v-tab--active:before,.theme--dark.v-tabs .v-tab--active:hover:before,.theme--dark.v-tabs .v-tab:focus:before{opacity:.24}.theme--dark.v-tabs .v-tab--active:focus:before{opacity:.32}.theme--light.v-tabs-items{background-color:#fff}.theme--dark.v-tabs-items{background-color:#1e1e1e}.v-tabs-bar.accent .v-tab,.v-tabs-bar.accent .v-tabs-slider,.v-tabs-bar.error .v-tab,.v-tabs-bar.error .v-tabs-slider,.v-tabs-bar.info .v-tab,.v-tabs-bar.info .v-tabs-slider,.v-tabs-bar.primary .v-tab,.v-tabs-bar.primary .v-tabs-slider,.v-tabs-bar.secondary .v-tab,.v-tabs-bar.secondary .v-tabs-slider,.v-tabs-bar.success .v-tab,.v-tabs-bar.success .v-tabs-slider,.v-tabs-bar.warning .v-tab,.v-tabs-bar.warning .v-tabs-slider{color:#fff}.v-tabs{flex:1 1 auto;width:100%}.v-tabs .v-menu__activator{height:100%}.v-tabs.v.tabs--vertical.v-tabs--right{flex-direction:row-reverse}.v-tabs:not(.v-tabs--vertical) .v-tab{white-space:normal}.v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:inline;display:initial;visibility:hidden}.v-tabs-bar{border-radius:inherit;height:48px}.v-tabs-bar.v-item-group>*{cursor:auto}.v-tab{align-items:center;cursor:pointer;display:flex;flex:0 1 auto;font-size:.875rem;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;min-width:90px;max-width:360px;outline:none;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-tab.v-tab{color:inherit}.v-tab:before{bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-tab:before,.v-tabs-slider{background-color:currentColor}.v-tabs-slider{height:100%;width:100%}.v-tabs-slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-left:42px}.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-right:42px}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-right:auto}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-left:auto}.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*{margin-right:auto}.v-tabs--fixed-tabs>.v-tabs-bar .v-tab{flex:1 1 auto;width:100%}.v-tabs--grow>.v-tabs-bar .v-tab{flex:1 0 auto;max-width:none}.v-tabs--icons-and-text>.v-tabs-bar{height:72px}.v-tabs--icons-and-text>.v-tabs-bar .v-tab{flex-direction:column-reverse}.v-tabs--icons-and-text>.v-tabs-bar .v-tab>:first-child{margin-bottom:6px}.v-tabs--overflow>.v-tabs-bar .v-tab{flex:1 0 auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-left:auto}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-right:auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-right:0}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-left:0}.v-tabs--vertical{display:flex}.v-tabs--vertical>.v-tabs-bar{flex:1 0 auto;height:auto}.v-tabs--vertical>.v-tabs-bar .v-slide-group__next,.v-tabs--vertical>.v-tabs-bar .v-slide-group__prev{display:none}.v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content{flex-direction:column}.v-tabs--vertical>.v-tabs-bar .v-tab{height:48px}.v-tabs--vertical>.v-tabs-bar .v-tabs-slider{height:100%}.v-tabs--vertical>.v-window{flex:0 1 100%}.v-tabs--vertical.v-tabs--icons-and-text>.v-tabs-bar .v-tab{height:72px}.v-tab--active{color:inherit}.v-tab--active.v-tab:not(:focus):before{opacity:0}.v-tab--active .v-btn.v-btn--flat,.v-tab--active .v-icon{color:inherit}.v-tab--disabled{opacity:.5}.v-tab--disabled,.v-tab--disabled *{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("8f7a87bc", content, true)

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0d135400", content, true)

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_621adace_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_621adace_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_621adace_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_621adace_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_621adace_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-621adace]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-621adace]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-621adace]{font-size:28px;line-height:44px}}.use-text-title2[data-v-621adace]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-621adace]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-621adace]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-621adace]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-621adace]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-621adace]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-621adace]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-621adace]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-621adace]{font-size:16px;line-height:24px}}.use-text-caption[data-v-621adace],.use-text-paragraph[data-v-621adace]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-621adace]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-621adace]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-621adace]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-621adace]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-621adace]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-621adace]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-621adace]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-621adace]{display:none}}.root[data-v-621adace]{position:relative}@media(min-width:600px){.root[data-v-621adace]{padding-bottom:64px}}@media(max-width:959px){.root[data-v-621adace]{background:linear-gradient(-45deg,var(--v-primary-base) 20%,var(--v-primarydark-base) 70%)}}@media(max-width:599px){.root[data-v-621adace]{padding-bottom:80px}}.slider-wrap[data-v-621adace]{position:relative}.decoration[data-v-621adace]{position:absolute;top:0;width:830px;height:600px}[dir=ltr] .decoration[data-v-621adace]{left:-160px}[dir=rtl] .decoration[data-v-621adace]{right:-160px}@media(max-width:1279px){[dir=ltr] .decoration[data-v-621adace]{left:-320px}[dir=rtl] .decoration[data-v-621adace]{right:-320px}}.decoration svg[data-v-621adace]{fill:var(--v-primary-base);transform:scale(1.2);width:100%;height:100%}.testi-title[data-v-621adace]{position:relative;margin:0 24px 64px;padding-top:56px;color:#fff}.testi-title strong[data-v-621adace]{font-weight:var(--font-bold)}.sliderWrap[data-v-621adace]{position:relative}.v-icon.icon[data-v-621adace]{font-size:140px;position:absolute;color:#fff;opacity:.15;top:200px}@media(min-width:600px){[dir=ltr] .v-icon.icon[data-v-621adace]{left:240px}[dir=rtl] .v-icon.icon[data-v-621adace]{right:240px}}@media(min-width:1280px){.carousel[data-v-621adace]{margin:0 16px}}.carousel .slick-active p[data-v-621adace]{opacity:1;transition:all .5s cubic-bezier(.45,.05,.55,.95);transform:translateZ(0)}.item[data-v-621adace]{position:relative}.inner[data-v-621adace]{color:#fff}.v-application--is-rtl .inner[data-v-621adace]{direction:rtl}@media(min-width:600px){.inner[data-v-621adace]{display:flex}}.inner p[data-v-621adace]{opacity:0;flex:1;transform:translate3d(-10%,0,0);margin-top:40px}@media(min-width:1280px){.inner p[data-v-621adace]{margin-top:80px}}@media(min-width:600px){.inner p[data-v-621adace]{width:100%}}@media(max-width:599px){.inner p[data-v-621adace]{text-align:center;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:75px;overflow:hidden;text-overflow:ellipsis}}.profile[data-v-621adace]{text-align:center;padding:24px}@media(min-width:1280px){.profile[data-v-621adace]{padding:16px 24px}}.avatar[data-v-621adace]{width:85px!important;height:85px!important;margin:0 auto 24px}.name[data-v-621adace]{font-size:18px;font-weight:var(--font-medium)}.name span[data-v-621adace]{margin-top:4px;font-size:14px;display:block}.logo-wrap[data-v-621adace]{position:relative;z-index:42}.figure-btn[data-v-621adace]{display:inline-block;padding:24px;line-height:150px;text-align:center;vertical-align:middle;width:30%;height:150px}.figure-btn button[data-v-621adace]{height:auto!important;padding:6px 8px!important;border-radius:36px}.figure-btn button[data-v-621adace]  .v-btn__content{display:block;width:100%;height:100%}@media(max-width:1279px){.figure-btn[data-v-621adace]{padding:16px}}.figure-btn img[data-v-621adace]{transition:all .3s ease-out;display:block;width:100%;filter:grayscale(1) contrast(.5) brightness(1.5)}.figure-btn .active img[data-v-621adace],.figure-btn:hover img[data-v-621adace]{filter:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-e2151f4a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-e2151f4a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-e2151f4a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-e2151f4a]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-e2151f4a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-e2151f4a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-e2151f4a]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-e2151f4a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-e2151f4a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-e2151f4a]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-e2151f4a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-e2151f4a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-e2151f4a],.use-text-paragraph[data-v-e2151f4a]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-e2151f4a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-e2151f4a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-e2151f4a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-e2151f4a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-e2151f4a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-e2151f4a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-e2151f4a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-e2151f4a]{display:none}}.pricing[data-v-e2151f4a]{position:relative;border-radius:40px!important;overflow:hidden;text-align:center;z-index:2;border:1px solid transparent;max-width:300px;margin-bottom:24px}.pricing ul[data-v-e2151f4a]{padding:0 16px;margin-bottom:24px;list-style:none}.pricing ul li[data-v-e2151f4a]{list-style:none;font-size:16px;text-align:center;padding:8px;border-bottom:2px dashed}.theme--light .pricing ul li[data-v-e2151f4a]{border-color:rgba(0,0,0,.12)}.theme--dark .pricing ul li[data-v-e2151f4a]{border-color:hsla(0,0%,100%,.12)}.pricing ul li[data-v-e2151f4a]:last-child{border-bottom:none}.pricing[data-v-e2151f4a]:hover{border:1px solid var(--v-primary-base)}.theme--light .pricing[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .pricing[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px #303030}.title-card[data-v-e2151f4a]{padding:40px 0 16px;text-transform:uppercase;font-size:24px;position:relative}.theme--light .title-card[data-v-e2151f4a]{color:var(--v-primarydark-base)}.theme--dark .title-card[data-v-e2151f4a]{color:var(--v-primarylight-base)}.title-card p[data-v-e2151f4a]{font-weight:var(--font-medium);font-size:16px}.title-card h4[data-v-e2151f4a]{font-weight:var(--font-bold);text-transform:none;margin-top:16px}.theme--light .title-card h4[data-v-e2151f4a]{color:rgba(0,0,0,.54)}.theme--dark .title-card h4[data-v-e2151f4a]{color:hsla(0,0%,100%,.7)}.btn-area[data-v-e2151f4a]{padding:16px;position:relative}.theme--light .btn-area[data-v-e2151f4a]{color:rgba(0,0,0,.54)}.theme--dark .btn-area[data-v-e2151f4a]{color:hsla(0,0%,100%,.7)}.theme--light .btn-area[data-v-e2151f4a]{position:relative}.theme--light .btn-area[data-v-e2151f4a]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.12);opacity:.04}.theme--dark .btn-area[data-v-e2151f4a]{position:relative}.theme--dark .btn-area[data-v-e2151f4a]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:hsla(0,0%,100%,.12);opacity:.04}.btn-area .button[data-v-e2151f4a]{margin-top:16px}.btn-area .desc[data-v-e2151f4a]{font-size:14px}.theme--light .basic .title-card[data-v-e2151f4a]{color:var(--v-secondarydark-base)}.theme--dark .basic .title-card[data-v-e2151f4a]{color:var(--v-secondarylight-base)}.basic .btn-area[data-v-e2151f4a]{position:relative}.basic .btn-area[data-v-e2151f4a]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:var(--v-secondary-base);opacity:.3}.basic[data-v-e2151f4a]:hover{border-color:var(--v-secondary-base)}.value[data-v-e2151f4a]{z-index:20;border:1px solid var(--v-primary-base)}.value .title-card[data-v-e2151f4a]{padding-bottom:0;margin-bottom:64px;color:#fff;height:90px;padding-top:40px}.value .title-card h4[data-v-e2151f4a]{position:relative;color:#fff}.value .title-card p[data-v-e2151f4a]{position:relative}.value .title-card[data-v-e2151f4a]:before{content:\"\";width:160%;position:absolute;border-radius:50%;bottom:-60px;height:400px;left:-30%;background:linear-gradient(-185deg,var(--v-primary-base) 60%,var(--v-primarydark-base))}.value ul[data-v-e2151f4a]{padding-top:16px}.theme--light .value[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .value[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px #303030}.news[data-v-e2151f4a]{display:flex}.v-application--is-rtl .news[data-v-e2151f4a]{direction:rtl}@media(max-width:599px){.news[data-v-e2151f4a]{flex-direction:column}}.news p[data-v-e2151f4a]{margin-bottom:0}.news figure[data-v-e2151f4a]{overflow:hidden;border-radius:8px;margin:0;width:120px;height:140px}[dir=ltr] .news figure[data-v-e2151f4a]{margin-right:16px}[dir=rtl] .news figure[data-v-e2151f4a]{margin-left:16px}@media(max-width:599px){.news figure[data-v-e2151f4a]{width:auto;height:auto;max-height:200px;margin:16px 8px}}.news figure img[data-v-e2151f4a]{max-height:100%}[dir=ltr] .news figure img[data-v-e2151f4a]{margin-left:50%}[dir=rtl] .news figure img[data-v-e2151f4a]{margin-right:50%}.v-application--is-rtl .news figure img[data-v-e2151f4a]{transform:translateX(50%)}.v-application--is-ltr .news figure img[data-v-e2151f4a]{transform:translateX(-50%)}@media(max-width:599px){.news figure img[data-v-e2151f4a]{width:100%;height:auto}}.desc[data-v-e2151f4a]{flex:1}.text[data-v-e2151f4a]{padding:0 12px;max-width:400px}.type[data-v-e2151f4a]{font-weight:var(--font-bold);text-transform:uppercase}.theme--light .type[data-v-e2151f4a]{color:rgba(0,0,0,.54)}.theme--dark .type[data-v-e2151f4a]{color:hsla(0,0%,100%,.7)}.btn[data-v-e2151f4a]{margin-top:16px}[dir=ltr] .btn[data-v-e2151f4a]{margin-left:8px}[dir=rtl] .btn[data-v-e2151f4a]{margin-right:8px}.theme--light .btn[data-v-e2151f4a]{color:var(--v-primary-base)}.theme--dark .btn[data-v-e2151f4a]{color:var(--v-primarylight-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_ab5297ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_ab5297ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_ab5297ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_ab5297ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_ab5297ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-ab5297ba]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-ab5297ba]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-ab5297ba]{font-size:28px;line-height:44px}}.use-text-title2[data-v-ab5297ba]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-ab5297ba]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-ab5297ba]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-ab5297ba]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-ab5297ba]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-ab5297ba]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-ab5297ba]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-ab5297ba]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-ab5297ba]{font-size:16px;line-height:24px}}.use-text-caption[data-v-ab5297ba],.use-text-paragraph[data-v-ab5297ba]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-ab5297ba]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-ab5297ba]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-ab5297ba]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-ab5297ba]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-ab5297ba]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-ab5297ba]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-ab5297ba]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-ab5297ba]{display:none}}.root[data-v-ab5297ba]{position:relative;z-index:55}.subtitle[data-v-ab5297ba]{margin-bottom:40px}.decoration[data-v-ab5297ba]{position:absolute;width:1280px;height:960px}.decoration svg[data-v-ab5297ba]{width:1280px;height:100%;opacity:.2}.theme--light .decoration svg[data-v-ab5297ba]{fill:var(--v-primarylight-base)}.theme--dark .decoration svg[data-v-ab5297ba]{fill:var(--v-primarydark-base)}@media(min-width:1280px){.decoration svg[data-v-ab5297ba]{transform:scaleX(1.7)}}@media(min-width:1920px){.decoration svg[data-v-ab5297ba]{display:none}}@media(max-width:599px){.decoration svg[data-v-ab5297ba]{transform:scale(.5);transform-origin:center left}}.item[data-v-ab5297ba]:hover{z-index:56!important}.pricing-wrap>section[data-v-ab5297ba]{align-items:center;margin-top:24px;display:flex}@media(max-width:959px){.pricing-wrap>section[data-v-ab5297ba]{flex-wrap:wrap;justify-content:space-around}}@media(min-width:1280px){.pricing-wrap>section[data-v-ab5297ba]{padding:0 40px}}.pricing-wrap>section>*[data-v-ab5297ba]{margin:0 -8px}.pricing-wrap>section[data-v-ab5297ba]>:first-child,.pricing-wrap>section[data-v-ab5297ba]>:last-child{z-index:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_b8661468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(289);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_b8661468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_b8661468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_b8661468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_b8661468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-b8661468]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-b8661468]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-b8661468]{font-size:28px;line-height:44px}}.use-text-title2[data-v-b8661468]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-b8661468]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-b8661468]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-b8661468]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-b8661468]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-b8661468]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-b8661468]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-b8661468]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-b8661468]{font-size:16px;line-height:24px}}.use-text-caption[data-v-b8661468],.use-text-paragraph[data-v-b8661468]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-b8661468]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-b8661468]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-b8661468]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-b8661468]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-b8661468]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-b8661468]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-b8661468]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-b8661468]{display:none}}.root[data-v-b8661468]{z-index:56}.root[data-v-b8661468],.text[data-v-b8661468]{position:relative}.text[data-v-b8661468]{z-index:20}.illustration[data-v-b8661468]{position:relative;margin:48px 48px 0}.illustration>div[data-v-b8661468]{top:-400px}.illustration img[data-v-b8661468]{display:block;width:280px}.accordion[data-v-b8661468]{position:relative}.item[data-v-b8661468],.paper[data-v-b8661468]{margin-bottom:24px}.paper[data-v-b8661468]{border-radius:12px!important;overflow:hidden}.theme--dark .paper[data-v-b8661468]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .paper[data-v-b8661468]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.heading[data-v-b8661468]{font-weight:var(--font-medium);padding:8px 16px 8px 0;font-size:18px;line-height:1.5;margin-bottom:0}@media(max-width:599px){.heading[data-v-b8661468]{font-size:16px}}.content .icon[data-v-b8661468]{position:absolute;top:20px}[dir=ltr] .content .icon[data-v-b8661468]{right:16px}[dir=rtl] .content .icon[data-v-b8661468]{left:16px}.expanded[data-v-b8661468]{background:var(--v-secondary-base)!important}.expanded .heading[data-v-b8661468]{color:#fff;padding-top:0;padding-bottom:0}.expanded[data-v-b8661468]  .v-icon{color:#fff!important;transform:rotate(180deg)}.detail[data-v-b8661468]{padding-top:24px;border-radius:0 0 12px 12px}.theme--light .detail[data-v-b8661468]{background-color:#fff}.theme--dark .detail[data-v-b8661468]{background-color:#424242}.detail p[data-v-b8661468]{font-size:18px}@media(max-width:599px){.detail p[data-v-b8661468]{font-size:16px}}.theme--light .icon[data-v-b8661468]{color:var(--v-primary-base)}.theme--dark .icon[data-v-b8661468]{color:var(--v-primarylight-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_2e3f38c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_2e3f38c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_2e3f38c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_2e3f38c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_2e3f38c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-2e3f38c8]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-2e3f38c8]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-2e3f38c8]{font-size:28px;line-height:44px}}.use-text-title2[data-v-2e3f38c8]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-2e3f38c8]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-2e3f38c8]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-2e3f38c8]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-2e3f38c8]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-2e3f38c8]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-2e3f38c8]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-2e3f38c8]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-2e3f38c8]{font-size:16px;line-height:24px}}.use-text-caption[data-v-2e3f38c8],.use-text-paragraph[data-v-2e3f38c8]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-2e3f38c8]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-2e3f38c8]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-2e3f38c8]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-2e3f38c8]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-2e3f38c8]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-2e3f38c8]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-2e3f38c8]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-2e3f38c8]{display:none}}.pricing[data-v-2e3f38c8]{position:relative;border-radius:40px!important;overflow:hidden;text-align:center;z-index:2;border:1px solid transparent;max-width:300px;margin-bottom:24px}.pricing ul[data-v-2e3f38c8]{padding:0 16px;margin-bottom:24px;list-style:none}.pricing ul li[data-v-2e3f38c8]{list-style:none;font-size:16px;text-align:center;padding:8px;border-bottom:2px dashed}.theme--light .pricing ul li[data-v-2e3f38c8]{border-color:rgba(0,0,0,.12)}.theme--dark .pricing ul li[data-v-2e3f38c8]{border-color:hsla(0,0%,100%,.12)}.pricing ul li[data-v-2e3f38c8]:last-child{border-bottom:none}.pricing[data-v-2e3f38c8]:hover{border:1px solid var(--v-primary-base)}.theme--light .pricing[data-v-2e3f38c8]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .pricing[data-v-2e3f38c8]:hover{box-shadow:0 0 20px 5px #303030}.title-card[data-v-2e3f38c8]{padding:40px 0 16px;text-transform:uppercase;font-size:24px;position:relative}.theme--light .title-card[data-v-2e3f38c8]{color:var(--v-primarydark-base)}.theme--dark .title-card[data-v-2e3f38c8]{color:var(--v-primarylight-base)}.title-card p[data-v-2e3f38c8]{font-weight:var(--font-medium);font-size:16px}.title-card h4[data-v-2e3f38c8]{font-weight:var(--font-bold);text-transform:none;margin-top:16px}.theme--light .title-card h4[data-v-2e3f38c8]{color:rgba(0,0,0,.54)}.theme--dark .title-card h4[data-v-2e3f38c8]{color:hsla(0,0%,100%,.7)}.btn-area[data-v-2e3f38c8]{padding:16px;position:relative}.theme--light .btn-area[data-v-2e3f38c8]{color:rgba(0,0,0,.54)}.theme--dark .btn-area[data-v-2e3f38c8]{color:hsla(0,0%,100%,.7)}.theme--light .btn-area[data-v-2e3f38c8]{position:relative}.theme--light .btn-area[data-v-2e3f38c8]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.12);opacity:.04}.theme--dark .btn-area[data-v-2e3f38c8]{position:relative}.theme--dark .btn-area[data-v-2e3f38c8]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:hsla(0,0%,100%,.12);opacity:.04}.btn-area .button[data-v-2e3f38c8]{margin-top:16px}.btn-area .desc[data-v-2e3f38c8]{font-size:14px}.theme--light .basic .title-card[data-v-2e3f38c8]{color:var(--v-secondarydark-base)}.theme--dark .basic .title-card[data-v-2e3f38c8]{color:var(--v-secondarylight-base)}.basic .btn-area[data-v-2e3f38c8]{position:relative}.basic .btn-area[data-v-2e3f38c8]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:var(--v-secondary-base);opacity:.3}.basic[data-v-2e3f38c8]:hover{border-color:var(--v-secondary-base)}.value[data-v-2e3f38c8]{z-index:20;border:1px solid var(--v-primary-base)}.value .title-card[data-v-2e3f38c8]{padding-bottom:0;margin-bottom:64px;color:#fff;height:90px;padding-top:40px}.value .title-card h4[data-v-2e3f38c8]{position:relative;color:#fff}.value .title-card p[data-v-2e3f38c8]{position:relative}.value .title-card[data-v-2e3f38c8]:before{content:\"\";width:160%;position:absolute;border-radius:50%;bottom:-60px;height:400px;left:-30%;background:linear-gradient(-185deg,var(--v-primary-base) 60%,var(--v-primarydark-base))}.value ul[data-v-2e3f38c8]{padding-top:16px}.theme--light .value[data-v-2e3f38c8]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .value[data-v-2e3f38c8]:hover{box-shadow:0 0 20px 5px #303030}.news[data-v-2e3f38c8]{display:flex}.v-application--is-rtl .news[data-v-2e3f38c8]{direction:rtl}@media(max-width:599px){.news[data-v-2e3f38c8]{flex-direction:column}}.news p[data-v-2e3f38c8]{margin-bottom:0}.news figure[data-v-2e3f38c8]{overflow:hidden;border-radius:8px;margin:0;width:120px;height:140px}[dir=ltr] .news figure[data-v-2e3f38c8]{margin-right:16px}[dir=rtl] .news figure[data-v-2e3f38c8]{margin-left:16px}@media(max-width:599px){.news figure[data-v-2e3f38c8]{width:auto;height:auto;max-height:200px;margin:16px 8px}}.news figure img[data-v-2e3f38c8]{max-height:100%}[dir=ltr] .news figure img[data-v-2e3f38c8]{margin-left:50%}[dir=rtl] .news figure img[data-v-2e3f38c8]{margin-right:50%}.v-application--is-rtl .news figure img[data-v-2e3f38c8]{transform:translateX(50%)}.v-application--is-ltr .news figure img[data-v-2e3f38c8]{transform:translateX(-50%)}@media(max-width:599px){.news figure img[data-v-2e3f38c8]{width:100%;height:auto}}.desc[data-v-2e3f38c8]{flex:1}.text[data-v-2e3f38c8]{padding:0 12px;max-width:400px}.type[data-v-2e3f38c8]{font-weight:var(--font-bold);text-transform:uppercase}.theme--light .type[data-v-2e3f38c8]{color:rgba(0,0,0,.54)}.theme--dark .type[data-v-2e3f38c8]{color:hsla(0,0%,100%,.7)}.btn[data-v-2e3f38c8]{margin-top:16px}[dir=ltr] .btn[data-v-2e3f38c8]{margin-left:8px}[dir=rtl] .btn[data-v-2e3f38c8]{margin-right:8px}.theme--light .btn[data-v-2e3f38c8]{color:var(--v-primary-base)}.theme--dark .btn[data-v-2e3f38c8]{color:var(--v-primarylight-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_d13cf24e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_d13cf24e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_d13cf24e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_d13cf24e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_d13cf24e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-d13cf24e]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-d13cf24e]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-d13cf24e]{font-size:28px;line-height:44px}}.use-text-title2[data-v-d13cf24e]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-d13cf24e]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-d13cf24e]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-d13cf24e]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-d13cf24e]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-d13cf24e]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-d13cf24e]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-d13cf24e]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-d13cf24e]{font-size:16px;line-height:24px}}.use-text-caption[data-v-d13cf24e],.use-text-paragraph[data-v-d13cf24e]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-d13cf24e]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-d13cf24e]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-d13cf24e]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-d13cf24e]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-d13cf24e]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-d13cf24e]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-d13cf24e]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-d13cf24e]{display:none}}.root[data-v-d13cf24e]{position:relative;z-index:56;max-width:1140px;margin:0 auto}.carousel[data-v-d13cf24e]  .slick-dots{bottom:-56px}.carousel[data-v-d13cf24e]  .slick-dots li{width:15px;height:10px;border:1px solid;border-radius:15px;opacity:.7;transition:all .5s ease-out}.theme--light .carousel[data-v-d13cf24e]  .slick-dots li{border-color:rgba(0,0,0,.38)}.theme--dark .carousel[data-v-d13cf24e]  .slick-dots li{border-color:hsla(0,0%,100%,.5)}.carousel[data-v-d13cf24e]  .slick-dots li.slick-active{width:30px}.theme--light .carousel[data-v-d13cf24e]  .slick-dots li.slick-active{background:var(--v-primary-base)}.theme--dark .carousel[data-v-d13cf24e]  .slick-dots li.slick-active{background:var(--v-primarylight-base)}.theme--light .carousel[data-v-d13cf24e]  .slick-dots li.slick-active{border-color:var(--v-primary-base)}.theme--dark .carousel[data-v-d13cf24e]  .slick-dots li.slick-active{border-color:var(--v-primarylight-base)}.carousel[data-v-d13cf24e]  .slick-dots li button:before{display:none}.item[data-v-d13cf24e]{padding:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_cff3ab0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_cff3ab0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_cff3ab0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_cff3ab0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_cff3ab0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-cff3ab0a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-cff3ab0a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-cff3ab0a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-cff3ab0a]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-cff3ab0a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-cff3ab0a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-cff3ab0a]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-cff3ab0a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-cff3ab0a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-cff3ab0a]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-cff3ab0a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-cff3ab0a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-cff3ab0a],.use-text-paragraph[data-v-cff3ab0a]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-cff3ab0a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-cff3ab0a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-cff3ab0a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-cff3ab0a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-cff3ab0a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-cff3ab0a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-cff3ab0a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-cff3ab0a]{display:none}}.link[data-v-cff3ab0a]{margin:8px 12px}.footer[data-v-cff3ab0a]{margin-top:64px;padding-top:24px;padding-bottom:64px;color:#fff;position:relative;z-index:100}.footer ul[data-v-cff3ab0a]{margin:0;padding:0}.footer ul li[data-v-cff3ab0a]{list-style:none;line-height:32px}.footer ul li a[data-v-cff3ab0a]{text-decoration:none;font-size:14px;color:#fff}.footer ul li a[data-v-cff3ab0a]:hover{color:var(--v-primarylight-base)}.footer p[data-v-cff3ab0a]{color:#fff}@media(max-width:959px){.footer p[data-v-cff3ab0a]{padding:0 24px}}.footer .accordion-root[data-v-cff3ab0a]{margin:16px auto 0}.footer-desc[data-v-cff3ab0a]{display:block;font-size:14px;margin-bottom:16px}.theme--light .footer.invert p[data-v-cff3ab0a]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert p[data-v-cff3ab0a]{color:#fff}.theme--light .footer.invert li a[data-v-cff3ab0a]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert li a[data-v-cff3ab0a]{color:#fff}.footer.invert .logo h6[data-v-cff3ab0a],.theme--light .footer.invert .title-nav[data-v-cff3ab0a]{color:var(--v-primarydark-base)}.theme--dark .footer.invert .title-nav[data-v-cff3ab0a]{color:var(--v-primarylight-base)}.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-icon,.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-select__selection,.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-select__selections{color:rgba(0,0,0,.87)}.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-icon,.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-select__selection,.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-select__selections{color:#fff}.title-nav[data-v-cff3ab0a]{color:#fff;font-size:14px;text-transform:uppercase;font-weight:var(--font-bold)}.logo[data-v-cff3ab0a],.title-nav[data-v-cff3ab0a]{margin-bottom:24px}.logo[data-v-cff3ab0a]{text-align:center}.logo img[data-v-cff3ab0a]{width:64px}.logo h6[data-v-cff3ab0a]{color:#fff}.socmed[data-v-cff3ab0a]{display:flex;justify-content:center;margin-bottom:32px}.socmed button[data-v-cff3ab0a]{margin:8px;color:var(--v-primarydark-base);background:var(--v-primary-base);width:36px;height:36px}.socmed button .icon[data-v-cff3ab0a]{color:#fff}.socmed .icon[data-v-cff3ab0a]{font-size:24px}.icon+div[data-v-cff3ab0a]{background:none!important;padding:12px 12px 12px 32px;width:calc(100% - 32px)}.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]{width:200px;display:inherit;margin:16px auto 0}.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-input__slot{min-height:43px}.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-input__append-inner,.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-input__prepend-inner{margin-top:10px}.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-icon,.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-select__selections{padding:0;color:var(--v-primarylight-base)}.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  fieldset{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06);border-color:var(--v-primarylight-darken3)!important}.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  fieldset legend{top:5px;position:relative}.select-lang.v-text-field.v-text-field--enclosed[data-v-cff3ab0a]  .v-select__selection{color:#fff}@media(max-width:1279px){.site-map-item[data-v-cff3ab0a]{padding-bottom:0!important;padding-top:0!important}}.accordion-root[data-v-cff3ab0a]{background:none;box-shadow:none;max-width:480px}#main-wrap .accordion-content.v-expansion-panel[data-v-cff3ab0a]{background-color:transparent}#main-wrap .accordion-content.v-expansion-panel[data-v-cff3ab0a]:after,#main-wrap .accordion-content.v-expansion-panel[data-v-cff3ab0a]:before{display:none}.accordion-icon[data-v-cff3ab0a]{padding:0}.footer-deco[data-v-cff3ab0a]{position:relative;z-index:80;top:0;background:linear-gradient(-45deg,var(--v-primarydark-base) 30%,var(--v-primary-base) 90%);padding-top:320px}@media(max-width:1279px){.footer-deco[data-v-cff3ab0a]{padding-top:240px}}@media(max-width:599px){.footer-deco[data-v-cff3ab0a]{padding-top:160px}}.footer-deco[data-v-cff3ab0a]:before{background-repeat:no-repeat;background-position:0 0;background-size:100% auto;top:-3px;content:\"\";width:100%;height:270px;position:absolute;z-index:10}.theme--light .footer-deco[data-v-cff3ab0a]:before{background-image:url(/images/saas/footer-deco-light.svg)}.theme--dark .footer-deco[data-v-cff3ab0a]:before{background-image:url(/images/saas/footer-deco-dark.svg)}[dir=ltr] .footer-deco[data-v-cff3ab0a]:before{left:0}[dir=rtl] .footer-deco[data-v-cff3ab0a]:before{right:0}.decoration[data-v-cff3ab0a]{position:absolute;width:100%;height:100%;top:0;overflow:hidden;clip:rect(0,auto,auto,0)}[dir=ltr] .decoration[data-v-cff3ab0a]{left:0}[dir=rtl] .decoration[data-v-cff3ab0a]{right:0}.decoration svg[data-v-cff3ab0a]{fill:var(--v-secondary-base);opacity:.15;position:fixed;top:40px}.left-deco[data-v-cff3ab0a]{left:0;right:auto;width:1200px;height:1500px;transform:scale(.5);transform-origin:top left}.right-deco[data-v-cff3ab0a]{left:auto;right:0;height:1500px;transform:scale(.5);transform-origin:top right}.action[data-v-cff3ab0a]{text-align:center;padding:0 16px}.action h4[data-v-cff3ab0a]{font-weight:var(--font-bold);color:#fff;margin-bottom:48px}@media(max-width:599px){.action h4[data-v-cff3ab0a]{font-size:28px;line-height:44px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70b12fd3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(293);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70b12fd3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70b12fd3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70b12fd3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_70b12fd3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-70b12fd3]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-70b12fd3]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-70b12fd3]{font-size:28px;line-height:44px}}.use-text-title2[data-v-70b12fd3]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-70b12fd3]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-70b12fd3]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-70b12fd3]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-70b12fd3]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-70b12fd3]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-70b12fd3]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-70b12fd3]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-70b12fd3]{font-size:16px;line-height:24px}}.use-text-caption[data-v-70b12fd3],.use-text-paragraph[data-v-70b12fd3]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-70b12fd3]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-70b12fd3]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-70b12fd3]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-70b12fd3]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-70b12fd3]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-70b12fd3]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-70b12fd3]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-70b12fd3]{display:none}}.main-wrap[data-v-70b12fd3]{position:relative;width:100%;overflow:hidden}.theme--light .main-wrap[data-v-70b12fd3]{color:rgba(0,0,0,.87)}.theme--dark .main-wrap[data-v-70b12fd3]{color:#fff;background-color:#303030}.theme--light .main-wrap[data-v-70b12fd3]{background-color:#fff}.space-bottom[data-v-70b12fd3]{margin-bottom:160px}@media(max-width:959px){.space-bottom[data-v-70b12fd3]{margin-bottom:120px}}@media(min-width:960px){.space-bottom-testi[data-v-70b12fd3]{margin-bottom:160px}}.space-bottom-short[data-v-70b12fd3]{margin-bottom:80px}.space-top[data-v-70b12fd3]{margin-top:160px}@media(max-width:959px){.space-top[data-v-70b12fd3]{margin-top:120px}}.space-top-short[data-v-70b12fd3]{margin-top:80px}.container-wrap[data-v-70b12fd3]{margin-top:-40px}.container-wrap>section[data-v-70b12fd3]{position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=70b12fd3&scoped=true&
var lib_vue_loader_options_pagesvue_type_template_id_70b12fd3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-wrap\" data-v-70b12fd3>","</div>",[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-wrap\" data-v-70b12fd3>","</div>",[_vm._ssrNode("<section id=\"home\" data-v-70b12fd3>","</section>",[_c('banner')],1),_vm._ssrNode(" "),_vm._ssrNode("<section data-v-70b12fd3>","</section>",[_c('company-logo')],1),_vm._ssrNode(" "),_vm._ssrNode("<section"+(_vm._ssrClass(null,!_vm.isMobile && 'space-top-short'))+" data-v-70b12fd3>","</section>",[_c('counter')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"feature\""+(_vm._ssrClass(null,_vm.isMobile ? 'space-top-short' : 'space-top'))+" data-v-70b12fd3>","</section>",[_c('feature')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"testimonials\" class=\"space-bottom-testi\" data-v-70b12fd3>","</section>",[_c('testimonials')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"pricing\" class=\"space-top\" data-v-70b12fd3>","</section>",[_c('pricing-plan')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"faq\" class=\"space-top-short\" data-v-70b12fd3>","</section>",[_c('faq')],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"space-top-short space-bottom-short\" data-v-70b12fd3>","</section>",[_c('news-event')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"footer\" data-v-70b12fd3>","</section>",[_c('footer-with-deco')],1),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('page-nav')],1),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('notification')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=70b12fd3&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 24 modules
var Header = __webpack_require__(89);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=template&id=64fd573f&scoped=true&
var PageNavvue_type_template_id_64fd573f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"page-nav",class:{ show: _vm.show }},[_vm._ssrNode("<nav class=\"section-nav\" data-v-64fd573f>","</nav>",[_c('scrollactive',{attrs:{"offset":_vm.navOffset,"active-class":"active","tag":"section"}},_vm._l((_vm.menuList),function(item,index){return _c('a',{key:index,staticClass:"anchor-link scrollactive-item",style:({ top: 50 * (_vm.menu.length - item.id) + 'px' }),attrs:{"href":item.url},on:{"click":function($event){return _vm.setOffset(item.offset)}}},[_c('v-tooltip',{staticClass:"tooltip-wrap",attrs:{"nudge-top":18,"color":"primarydark","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('span',_vm._g({},on),[_vm._v(_vm._s(_vm.$t('saasLanding.header_'+item.name)))])]}}],null,true)},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('saasLanding.header_'+item.name)))])])],1)}),0)],1),_vm._ssrNode(" "),_c('v-tooltip',{attrs:{"nudge-top":25,"color":"primarydark","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('scrollactive',{attrs:{"tag":"div"}},[_c('v-btn',_vm._g({staticClass:"fab anchor-link scrollactive-item",attrs:{"fab":"","href":"#home"}},on),[_c('v-icon',{staticClass:"icon",attrs:{"dark":""}},[_vm._v("mdi-arrow-up")])],1)],1)]}}])},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v("To Top")])])],2)}
var PageNavvue_type_template_id_64fd573f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=template&id=64fd573f&scoped=true&

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=script&lang=js&
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

let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

/* harmony default export */ var PageNavvue_type_script_lang_js_ = ({
  data: () => ({
    menu: menu["a" /* default */],
    navOffset: 20,
    show: false,
    menuList: [createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3], -40)]
  }),
  methods: {
    handleScroll: function () {
      if (window.scrollY > 500) {
        return this.show = true;
      }

      return this.show = false;
    },
    setOffset: function (offset) {
      this.navOffset = offset;
    }
  }
});
// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var PageNav_PageNavvue_type_script_lang_js_ = (PageNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass
var VTooltip = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/menuable/index.js
var menuable = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 // Mixins





 // Helpers




/* @vue/component */

/* harmony default export */ var VTooltip_VTooltip = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], dependent["a" /* default */], menuable["a" /* default */]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      if (this.attach === false) top += this.pageYOffset;
      return `${this.calcYOverflow(top)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(helpers["g" /* convertToUnit */])(this.maxWidth),
        minWidth: Object(helpers["g" /* convertToUnit */])(this.minWidth),
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(helpers["p" /* getSlotType */])(this, 'activator', true) === 'v-slot') {
      Object(console["b" /* consoleError */])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = activatable["a" /* default */].options.methods.genActivatorListeners.call(this);

      if (this.openOnFocus) {
        listeners.focus = e => {
          this.getActivator(e);
          this.runDelay('open');
        };

        listeners.blur = e => {
          this.getActivator(e);
          this.runDelay('close');
        };
      }

      listeners.keydown = e => {
        if (e.keyCode === helpers["s" /* keyCodes */].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genActivatorAttributes() {
      return {
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(97);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(57);

// CONCATENATED MODULE: ./components/PageNav/PageNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(303)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PageNav_PageNavvue_type_script_lang_js_,
  PageNavvue_type_template_id_64fd573f_scoped_true_render,
  PageNavvue_type_template_id_64fd573f_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "64fd573f",
  "4f8785ff"
  
)

/* harmony default export */ var PageNav = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VTooltip: VTooltip_VTooltip})


/* vuetify-loader */


installDirectives_default()(component, {Scroll: directives_scroll["b" /* default */]})

// CONCATENATED MODULE: ./components/PageNav/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=template&id=b45929ee&scoped=true&
var Bannervue_type_template_id_b45929ee_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-dialog',{attrs:{"max-width":"690"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',{staticClass:"video-popup"},[_c('v-card-title',{staticClass:"headline"},[_c('h2',{staticClass:"title"},[_vm._v("\n          "+_vm._s(_vm.$t('saasLanding.banner_title'))+"\n          "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoClose()}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1)]),_vm._v(" "),(_vm.yt.use)?_c('div',{staticClass:"text-center"},[_c('youtube',{ref:"youtube",attrs:{"video-id":_vm.videoId,"player-vars":_vm.playerVars,"width":640,"height":360}})],1):_vm._e()],1)],1),_vm._ssrNode(" <div class=\"decoration\" data-v-b45929ee><svg class=\"left-deco\" data-v-b45929ee><use xlink:href=\"/images/saas/deco-bg-left.svg#main\" data-v-b45929ee></use></svg> <svg class=\"right-deco\" data-v-b45929ee><use xlink:href=\"/images/saas/deco-bg-right.svg#main\" data-v-b45929ee></use></svg></div> "),_c('v-container',{class:{ fixed: _vm.isDesktop }},[_c('div',{staticClass:"slider-wrap"},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n          "+_vm._s(_vm.$t('saasLanding.banner_title'))+"\n          "),_c('strong',[_vm._v("\n            "+_vm._s(_vm.$t('saasLanding.banner_titlestrong'))+"\n          ")])]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_vm._v("\n          "+_vm._s(_vm.$t('saasLanding.banner_subtitle'))+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"btn-area"},[_c('v-btn',{staticClass:"play-btn",attrs:{"text":""},on:{"click":function($event){return _vm.handleVideoOpen()}}},[_c('span',{staticClass:"icon"},[_c('i',{staticClass:"ion-ios-play-outline"})]),_vm._v("\n            "+_vm._s(_vm.$t('saasLanding.banner_watchvideo'))+"\n          ")]),_vm._v(" "),_c('v-btn',{attrs:{"href":_vm.link.saas.login,"color":"secondary","large":""}},[_vm._v("\n            "+_vm._s(_vm.$t('saasLanding.getstarted'))+"\n          ")])],1)]),_vm._v(" "),_c('div',{staticClass:"illustration"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[7],"alt":"illustration"}})])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"deco\" data-v-b45929ee>","</div>",[_c('hidden',{attrs:{"point":"mdDown"}},[_c('div',{staticClass:"deco-inner",class:{ hide: _vm.hide }},[_c('div',{staticClass:"wave wave-one"}),_vm._v(" "),_c('div',{staticClass:"wave wave-two"})])]),_vm._ssrNode(" <div class=\"wave wave-cover\" data-v-b45929ee></div>")],2)],2)}
var Bannervue_type_template_id_b45929ee_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=template&id=b45929ee&scoped=true&

// CONCATENATED MODULE: ./youtube.js
const useYoutube = {
  use: true
};
/* harmony default export */ var youtube = (useYoutube);
// CONCATENATED MODULE: ./static/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  saas: ['https://via.placeholder.com/1000x625/f2c9ff/757575', 'https://via.placeholder.com/1472x637/5abce4/FFFFFF', 'https://via.placeholder.com/1000x625/e6f8ff/757575', '/images/saas/app-counter.png', 'https://via.placeholder.com/1000x680/b44fd4/FFFFFF', 'https://via.placeholder.com/1000x680/00a7e8/FFFFFF', 'https://via.placeholder.com/1000x680/e91e63/FFFFFF', '/images/saas/desktop_illustration.png']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },

  data() {
    return {
      videoId: 'KxZAdEGpYAw',
      hide: false,
      link: text_link["a" /* default */],
      imgAPI: images_imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8008'
      },
      yt: youtube
    };
  },

  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false;
      }

      this.dialog = true;
      setTimeout(() => {
        this.player = this.$refs.youtube.player;
        this.player.playVideo();
      }, 100);
    },

    handleVideoClose() {
      this.dialog = false;
      this.player.pauseVideo();
    }

  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDialog/VDialog.sass
var VDialog = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js
var VThemeProvider = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/overlayable/index.js + 2 modules
var overlayable = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/returnable/index.js
var returnable = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/stackable/index.js
var stackable = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
// Styles
 // Components

 // Mixins






 // Directives

 // Helpers




const baseMixins = Object(mixins["a" /* default */])(dependent["a" /* default */], detachable["a" /* default */], overlayable["a" /* default */], returnable["a" /* default */], stackable["a" /* default */], activatable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VDialog_VDialog = (baseMixins.extend({
  name: 'v-dialog',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    dark: Boolean,
    disabled: Boolean,
    fullscreen: Boolean,
    light: Boolean,
    maxWidth: [String, Number],
    noClickAnimation: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    persistent: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    width: [String, Number]
  },

  data() {
    return {
      activatedBy: null,
      animate: false,
      animateTimeout: -1,
      stackMinZIndex: 200,
      previousActiveElement: null
    };
  },

  computed: {
    classes() {
      return {
        [`v-dialog ${this.contentClass}`.trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable,
        'v-dialog--animated': this.animate
      };
    },

    contentClasses() {
      return {
        'v-dialog__content': true,
        'v-dialog__content--active': this.isActive
      };
    },

    hasActivator() {
      return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator);
    }

  },
  watch: {
    isActive(val) {
      if (val) {
        this.show();
        this.hideScroll();
      } else {
        var _this$previousActiveE;

        this.removeOverlay();
        this.unbind();
        (_this$previousActiveE = this.previousActiveElement) == null ? void 0 : _this$previousActiveE.focus();
      }
    },

    fullscreen(val) {
      if (!this.isActive) return;

      if (val) {
        this.hideScroll();
        this.removeOverlay(false);
      } else {
        this.showScroll();
        this.genOverlay();
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(console["e" /* removed */])('full-width', this);
    }
  },

  beforeMount() {
    this.$nextTick(() => {
      this.isBooted = this.isActive;
      this.isActive && this.show();
    });
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') this.unbind();
  },

  methods: {
    animateClick() {
      this.animate = false; // Needed for when clicking very fast
      // outside of the dialog

      this.$nextTick(() => {
        this.animate = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(() => this.animate = false, 150);
      });
    },

    closeConditional(e) {
      const target = e.target; // Ignore the click if the dialog is closed or destroyed,
      // if it was on an element inside the content,
      // if it was dragged onto the overlay (#6969),
      // or if this isn't the topmost dialog (#9907)

      return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(target) || this.overlay && target && !this.overlay.$el.contains(target)) && this.activeZIndex >= this.getMaxZIndex();
    },

    hideScroll() {
      if (this.fullscreen) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        overlayable["a" /* default */].options.methods.hideScroll.call(this);
      }
    },

    show() {
      !this.fullscreen && !this.hideOverlay && this.genOverlay(); // Double nextTick to wait for lazy content to be generated

      this.$nextTick(() => {
        this.$nextTick(() => {
          if (!this.$refs.content.contains(document.activeElement)) {
            this.previousActiveElement = document.activeElement;
            this.$refs.content.focus();
          }

          this.bind();
        });
      });
    },

    bind() {
      window.addEventListener('focusin', this.onFocusin);
    },

    unbind() {
      window.removeEventListener('focusin', this.onFocusin);
    },

    onClickOutside(e) {
      this.$emit('click:outside', e);

      if (this.persistent) {
        this.noClickAnimation || this.animateClick();
      } else {
        this.isActive = false;
      }
    },

    onKeydown(e) {
      if (e.keyCode === helpers["s" /* keyCodes */].esc && !this.getOpenDependents().length) {
        if (!this.persistent) {
          this.isActive = false;
          const activator = this.getActivator();
          this.$nextTick(() => activator && activator.focus());
        } else if (!this.noClickAnimation) {
          this.animateClick();
        }
      }

      this.$emit('keydown', e);
    },

    // On focus change, wrap focus to stay inside the dialog
    // https://github.com/vuetifyjs/vuetify/issues/6892
    onFocusin(e) {
      if (!e || !this.retainFocus) return;
      const target = e.target;

      if (!!target && // It isn't the document or the dialog body
      ![document, this.$refs.content].includes(target) && // It isn't inside the dialog body
      !this.$refs.content.contains(target) && // We're the topmost dialog
      this.activeZIndex >= this.getMaxZIndex() && // It isn't inside a dependent element (like a menu)
      !this.getOpenDependentElements().some(el => el.contains(target)) // So we must have focused something outside the dialog and its children
      ) {
        // Find and focus the first available element inside the dialog
        const focusable = this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const el = [...focusable].find(el => !el.hasAttribute('disabled'));
        el && el.focus();
      }
    },

    genContent() {
      return this.showLazyContent(() => [this.$createElement(VThemeProvider["a" /* default */], {
        props: {
          root: true,
          light: this.light,
          dark: this.dark
        }
      }, [this.$createElement('div', {
        class: this.contentClasses,
        attrs: {
          role: 'dialog',
          tabindex: this.isActive ? 0 : undefined,
          'aria-modal': this.hideOverlay ? undefined : 'true',
          ...this.getScopeIdAttrs()
        },
        on: {
          keydown: this.onKeydown
        },
        style: {
          zIndex: this.activeZIndex
        },
        ref: 'content'
      }, [this.genTransition()])])]);
    },

    genTransition() {
      const content = this.genInnerContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          appear: true
        }
      }, [content]);
    },

    genInnerContent() {
      const data = {
        class: this.classes,
        ref: 'dialog',
        directives: [{
          name: 'click-outside',
          value: {
            handler: this.onClickOutside,
            closeConditional: this.closeConditional,
            include: this.getOpenDependentElements
          }
        }, {
          name: 'show',
          value: this.isActive
        }],
        style: {
          transformOrigin: this.origin
        }
      };

      if (!this.fullscreen) {
        data.style = { ...data.style,
          maxWidth: Object(helpers["g" /* convertToUnit */])(this.maxWidth),
          width: Object(helpers["g" /* convertToUnit */])(this.width)
        };
      }

      return this.$createElement('div', data, this.getContentSlot());
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-dialog__container',
      class: {
        'v-dialog__container--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      }
    }, [this.genActivator(), this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./components/Banner/Banner.vue



function Banner_injectStyles (context) {
  
  var style0 = __webpack_require__(307)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Banner_component = Object(componentNormalizer["a" /* default */])(
  Banner_Bannervue_type_script_lang_js_,
  Bannervue_type_template_id_b45929ee_scoped_true_render,
  Bannervue_type_template_id_b45929ee_scoped_true_staticRenderFns,
  false,
  Banner_injectStyles,
  "b45929ee",
  "5bca8ae2"
  
)

/* harmony default export */ var Banner = (Banner_component.exports);

/* vuetify-loader */







installComponents_default()(Banner_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["a" /* VCardTitle */],VContainer: VContainer["a" /* default */],VDialog: VDialog_VDialog,VIcon: VIcon["a" /* default */]})

// CONCATENATED MODULE: ./components/Banner/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=41e65afa&scoped=true&
var CompanyLogovue_type_template_id_41e65afa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"fixed-width"},[_c('div',{staticClass:"root"},_vm._l((_vm.logos),function(logo,index){return _c('img',{key:index,attrs:{"src":logo,"alt":'logo' + index}})}),0)])}
var CompanyLogovue_type_template_id_41e65afa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=41e65afa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CompanyLogovue_type_script_lang_js_ = ({
  data() {
    return {
      logos: ['/images/logos/architect.png', '/images/logos/cloud.png', '/images/logos/coin.png', '/images/logos/mobile.png', '/images/logos/profile.png', '/images/logos/msbyte-logo.png']
    };
  }

});
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var CompanyLogo_CompanyLogovue_type_script_lang_js_ = (CompanyLogovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue



function CompanyLogo_injectStyles (context) {
  
  var style0 = __webpack_require__(311)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CompanyLogo_component = Object(componentNormalizer["a" /* default */])(
  CompanyLogo_CompanyLogovue_type_script_lang_js_,
  CompanyLogovue_type_template_id_41e65afa_scoped_true_render,
  CompanyLogovue_type_template_id_41e65afa_scoped_true_staticRenderFns,
  false,
  CompanyLogo_injectStyles,
  "41e65afa",
  "d65ba732"
  
)

/* harmony default export */ var CompanyLogo = (CompanyLogo_component.exports);

/* vuetify-loader */


installComponents_default()(CompanyLogo_component, {VContainer: VContainer["a" /* default */]})

// CONCATENATED MODULE: ./components/CompanyLogo/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=template&id=0f335ce8&scoped=true&
var Countervue_type_template_id_0f335ce8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"counter-wrap"},[_c('v-container',[_c('v-row',{staticClass:"counter-inner spacing6",attrs:{"justify":"center","align":"center"}},[_c('v-col',{staticClass:"pa-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[(_vm.loaded)?_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 12,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 12,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]}):_vm._e(),_vm._v("\n              "+_vm._s(_vm.$t('saasLanding.counter_month'))+"\n            ")]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_c('v-icon',[_vm._v("mdi-reply")]),_vm._v("\n              "+_vm._s(_vm.$t('saasLanding.counter_free'))+"\n            ")],1)])])]),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              +"),(_vm.loaded)?_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 80,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 80,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]}):_vm._e(),_vm._v("M\n            ")]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_c('v-icon',[_vm._v("mdi-account-multiple")]),_vm._v("\n              "+_vm._s(_vm.$t('saasLanding.counter_users'))+"\n            ")],1)])])]),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              +"),(_vm.loaded)?_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 180,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 180,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]}):_vm._e(),_vm._v("K\n            ")]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_c('v-icon',[_vm._v("mdi-layers")]),_vm._v("\n              "+_vm._s(_vm.$t('saasLanding.counter_providers'))+"\n            ")],1)])])])],1)],1)],1)}
var Countervue_type_template_id_0f335ce8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=template&id=0f335ce8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Countervue_type_script_lang_js_ = ({
  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Counter_Countervue_type_script_lang_js_ = (Countervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(240);

// CONCATENATED MODULE: ./components/Counter/Counter.vue



function Counter_injectStyles (context) {
  
  var style0 = __webpack_require__(313)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Counter_component = Object(componentNormalizer["a" /* default */])(
  Counter_Countervue_type_script_lang_js_,
  Countervue_type_template_id_0f335ce8_scoped_true_render,
  Countervue_type_template_id_0f335ce8_scoped_true_staticRenderFns,
  false,
  Counter_injectStyles,
  "0f335ce8",
  "edcb7c62"
  
)

/* harmony default export */ var Counter = (Counter_component.exports);

/* vuetify-loader */





installComponents_default()(Counter_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Counter/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=template&id=4f58c492&scoped=true&
var Featurevue_type_template_id_4f58c492_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"decoration\" data-v-4f58c492><svg class=\"wave\" data-v-4f58c492><use xlink:href=\"/images/saas/deco-bg.svg#main\" data-v-4f58c492></use></svg></div> "),_c('v-container',{class:{ fixed: _vm.isDesktop }},[_c('div',{staticClass:"item"},[_c('u-animate-container',[_c('v-row',{class:[_vm.isMobile ? 'column-reverse' : 'row']},[_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"illustration-left"},[(_vm.loaded)?_c('section',{staticClass:"parallax-wrap"},[_c('parallax',{attrs:{"speed-factor":_vm.isMobile ? 0 : 0.15,"section-height":_vm.isMobile ? 0 : 400,"direction":"up"}},[_c('div',{staticClass:"viewport"},[_c('figure',{staticClass:"figure screen"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[0],"alt":"screen"}})])])])],1):_vm._e(),_vm._v(" "),(_vm.loaded && !_vm.isMobile)?_c('section',{staticClass:"parallax-wrap"},[_c('parallax',{attrs:{"speed-factor":_vm.isMobile ? 0 : 0.15,"section-height":100,"direction":"down"}},[_c('div',{staticClass:"viewport"},[_c('figure',{staticClass:"figure graphic"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[1],"alt":"illustration"}})])])])],1):_vm._e(),_vm._v(" "),_c('parallax-medium')],1)]),_vm._v(" "),_c('v-col',{attrs:{"md":"6","cols":"12"}},[_c('u-animate',{attrs:{"offset":-100,"name":"fadeInLeftShort","delay":"0.5s","duration":"0.5s"}},[_c('div',{staticClass:"desc"},[_c('title-main',{attrs:{"align":_vm.isMobile ? 'center' : 'left'}},[_c('span',[_vm._v("\n                    "+_vm._s(_vm.$t('saasLanding.feature_title1'))+"\n                    "),_c('strong',[_vm._v("\n                      "+_vm._s(_vm.$t('saasLanding.feature_titlestrong1'))+"\n                    ")])])]),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2",class:[_vm.isMobile ? 'text-center' : 'text-left']},[_vm._v("\n                  "+_vm._s(_vm.$t('saasLanding.feature_desc1'))+"\n                ")]),_vm._v(" "),_c('v-btn',{staticClass:"btn",attrs:{"color":"primary","large":""}},[_vm._v("\n                  "+_vm._s(_vm.$t('saasLanding.see_detail'))+"\n                ")])],1)])],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('v-row',[_c('v-col',{attrs:{"md":"6","cols":"12"}},[_c('u-animate-container',[_c('u-animate',{attrs:{"offset":10,"name":"fadeInRightShort","delay":"0.5s","duration":"0.5s"}},[_c('div',{staticClass:"desc"},[_c('title-main',{attrs:{"align":_vm.isMobile ? 'center' : 'right'}},[_c('span',[_vm._v("\n                    "+_vm._s(_vm.$t('saasLanding.feature_title1'))+"\n                    "),_c('strong',[_vm._v("\n                      "+_vm._s(_vm.$t('saasLanding.feature_titlestrong2'))+"\n                    ")])])]),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2",class:[_vm.isMobile ? 'text-center' : 'text-right']},[_vm._v("\n                  "+_vm._s(_vm.$t('saasLanding.feature_desc2'))+"\n                ")]),_vm._v(" "),_c('div',{class:[_vm.isMobile ? 'text-center' : 'text-right']},[_c('v-btn',{staticClass:"btn",attrs:{"color":"primary","large":""}},[_vm._v("\n                    "+_vm._s(_vm.$t('saasLanding.see_detail'))+"\n                  ")])],1)],1)])],1)],1),_vm._v(" "),_c('v-col',{attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"illustration-right"},[(_vm.loaded)?_c('section',{staticClass:"parallax-wrap"},[_c('parallax',{attrs:{"speed-factor":_vm.isMobile ? 0 : 0.15,"section-height":_vm.isMobile ? 0 : 300,"direction":"up"}},[_c('div',{staticClass:"viewport"},[_c('figure',{staticClass:"figure screen"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[2],"alt":"screen"}})])])])],1):_vm._e(),_vm._v(" "),(_vm.loaded && !_vm.isMobile)?_c('section',{staticClass:"parallax-wrap"},[_c('parallax',{attrs:{"speed-factor":_vm.isMobile ? 0 : 0.15,"section-height":100,"direction":"down"}},[_c('div',{staticClass:"viewport"},[_c('figure',{staticClass:"graphic"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[3],"alt":"illustration"}})])])])],1):_vm._e(),_vm._v(" "),_c('parallax-medium')],1)])],1)],1),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('title-main',{attrs:{"align":"center"}},[_c('span',[_vm._v("\n          "+_vm._s(_vm.$t('saasLanding.feature_title3'))+"\n          "),_c('strong',[_vm._v("\n            "+_vm._s(_vm.$t('saasLanding.feature_titlestrong3'))+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"tab"},[_c('v-row',{staticClass:"spacing6"},[(!_vm.isMobile)?_c('v-col',{staticClass:"pa-6",attrs:{"md":"1","cols":"12"}}):_vm._e(),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"10","cols":"12"}},[_c('v-tabs',{staticClass:"tabs",attrs:{"color":"primary","centered":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tabs-slider',{attrs:{"color":"primary"}}),_vm._v(" "),_c('v-tab',{staticClass:"tab-label",attrs:{"href":"#tab-1"}},[_vm._v("Desarrollo Web")]),_vm._v(" "),_c('v-tab',{staticClass:"tab-label",attrs:{"href":"#tab-2"}},[_vm._v("Correo Corporativo")]),_vm._v(" "),_c('v-tab',{staticClass:"tab-label",attrs:{"href":"#tab-3"}},[_vm._v("Soluciones Empresa")]),_vm._v(" "),_c('v-tab-item',{attrs:{"value":"tab-1"}},[_c('div',{staticClass:"tab-content"},[_c('section',[_c('h6',{staticClass:"text-center use-text-subtitle2"},[_vm._v("\n                      "+_vm._s(_vm.$t('saasLanding.feature_desc3'))+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"illustration-center"},[_c('figure',{staticClass:"figure screen"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[4],"alt":"screen"}})])])])])]),_vm._v(" "),_c('v-tab-item',{attrs:{"value":"tab-2"}},[_c('div',{staticClass:"tab-content"},[_c('section',[_c('h6',{staticClass:"text-center use-text-subtitle2"},[_vm._v("\n                      "+_vm._s(_vm.$t('saasLanding.feature_desc3'))+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"illustration-center"},[_c('figure',{staticClass:"figure screen"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[5],"alt":"screen"}})])])])])]),_vm._v(" "),_c('v-tab-item',{attrs:{"value":"tab-3"}},[_c('div',{staticClass:"tab-content"},[_c('section',[_c('h6',{staticClass:"text-center use-text-subtitle2"},[_vm._v("\n                      "+_vm._s(_vm.$t('saasLanding.feature_desc3'))+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"illustration-center"},[_c('figure',{staticClass:"figure screen"},[_c('img',{attrs:{"src":_vm.imgAPI.saas[6],"alt":"screen"}})])])])])])],1),_vm._v(" "),_c('parallax-large')],1)],1)],1)],1)])],2)}
var Featurevue_type_template_id_4f58c492_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=template&id=4f58c492&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(224);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Medium.vue?vue&type=template&id=2879ae00&scoped=true&
var Mediumvue_type_template_id_2879ae00_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap"},[(_vm.loaded)?_vm._ssrNode("<div class=\"inner-parallax medium\" data-v-2879ae00>","</div>",[_c('parallax',{attrs:{"speed-factor":0.3,"section-height":400,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',[_c('svg',{staticClass:"plus"},[_c('use',{attrs:{"xlink:href":"/images/decoration/plus.svg#main"}})])])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.2,"section-height":400,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',[_c('svg',{staticClass:"circle"},[_c('use',{attrs:{"xlink:href":"/images/decoration/circle.svg#main"}})])])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.15,"section-height":300,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',[_c('svg',{staticClass:"zigzag"},[_c('use',{attrs:{"xlink:href":"/images/decoration/zigzag.svg#main"}})])])])])],2):_vm._e()])}
var Mediumvue_type_template_id_2879ae00_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Medium.vue?vue&type=template&id=2879ae00&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Medium.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Mediumvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Medium.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Mediumvue_type_script_lang_js_ = (Mediumvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Medium.vue



function Medium_injectStyles (context) {
  
  var style0 = __webpack_require__(315)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Medium_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Mediumvue_type_script_lang_js_,
  Mediumvue_type_template_id_2879ae00_scoped_true_render,
  Mediumvue_type_template_id_2879ae00_scoped_true_staticRenderFns,
  false,
  Medium_injectStyles,
  "2879ae00",
  "6415c766"
  
)

/* harmony default export */ var Medium = (Medium_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Large.vue?vue&type=template&id=236892d0&scoped=true&
var Largevue_type_template_id_236892d0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap dots-wrap"},[(_vm.loaded)?_vm._ssrNode("<div class=\"inner-parallax large\" data-v-236892d0>","</div>",[_c('parallax',{attrs:{"speed-factor":0.3,"section-height":600,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',[_c('svg',{staticClass:"plus"},[_c('use',{attrs:{"xlink:href":"/images/decoration/plus.svg#main"}})])])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.2,"section-height":700,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',[_c('svg',{staticClass:"circle"},[_c('use',{attrs:{"xlink:href":"/images/decoration/circle.svg#main"}})])])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.15,"section-height":700,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',[_c('svg',{staticClass:"zigzag"},[_c('use',{attrs:{"xlink:href":"/images/decoration/zigzag.svg#main"}})])])])])],2):_vm._e()])}
var Largevue_type_template_id_236892d0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Large.vue?vue&type=template&id=236892d0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Large.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Largevue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Large.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Largevue_type_script_lang_js_ = (Largevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Large.vue



function Large_injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Large_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Largevue_type_script_lang_js_,
  Largevue_type_template_id_236892d0_scoped_true_render,
  Largevue_type_template_id_236892d0_scoped_true_staticRenderFns,
  false,
  Large_injectStyles,
  "236892d0",
  "2eeb2393"
  
)

/* harmony default export */ var Large = (Large_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=template&id=7b4345c0&scoped=true&
var Titlevue_type_template_id_7b4345c0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title",class:_vm.align},[_vm._ssrNode("<h4 data-v-7b4345c0>","</h4>",[_vm._t("default")],2)])}
var Titlevue_type_template_id_7b4345c0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=template&id=7b4345c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
});
// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Title/Title.vue



function Title_injectStyles (context) {
  
  var style0 = __webpack_require__(319)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Title_component = Object(componentNormalizer["a" /* default */])(
  Title_Titlevue_type_script_lang_js_,
  Titlevue_type_template_id_7b4345c0_scoped_true_render,
  Titlevue_type_template_id_7b4345c0_scoped_true_staticRenderFns,
  false,
  Title_injectStyles,
  "7b4345c0",
  "2f0441f2"
  
)

/* harmony default export */ var Title = (Title_component.exports);
// CONCATENATED MODULE: ./components/Title/index.js

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=script&lang=js&
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





/* harmony default export */ var Featurevue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a,
    ParallaxMedium: Medium,
    ParallaxLarge: Large,
    'title-main': Title
  },

  data() {
    return {
      tab: null,
      imgAPI: images_imgAPI,
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=script&lang=js&
 /* harmony default export */ var Feature_Featurevue_type_script_lang_js_ = (Featurevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
// Mixins


 // Utilities



const VTab_baseMixins = Object(mixins["a" /* default */])(routable["a" /* default */], // Must be after routable
// to overwrite activeClass
Object(groupable["a" /* factory */])('tabsBar'), themeable["a" /* default */]);
/* harmony default export */ var VTab = (VTab_baseMixins.extend().extend().extend({
  name: 'v-tab',
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  data: () => ({
    proxyClass: 'v-tab--active'
  }),
  computed: {
    classes() {
      return {
        'v-tab': true,
        ...routable["a" /* default */].options.computed.classes.call(this),
        'v-tab--disabled': this.disabled,
        ...this.groupClasses
      };
    },

    value() {
      let to = this.to || this.href;
      if (to == null) return to;

      if (this.$router && this.to === Object(this.to)) {
        const resolve = this.$router.resolve(this.to, this.$route, this.append);
        to = resolve.href;
      }

      return to.replace('#', '');
    }

  },
  methods: {
    click(e) {
      // Prevent keyboard actions
      // from children elements
      // within disabled tabs
      if (this.disabled) {
        e.preventDefault();
        return;
      } // If user provides an
      // actual link, do not
      // prevent default


      if (this.href && this.href.indexOf('#') > -1) e.preventDefault();
      if (e.detail) this.$el.blur();
      this.$emit('click', e);
      this.to || this.toggle();
    },

    toggle() {
      // VItemGroup treats a change event as a click
      if (!this.isActive || !this.tabsBar.mandatory && !this.to) {
        this.$emit('change');
      }
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      'aria-selected': String(this.isActive),
      role: 'tab',
      tabindex: this.disabled ? -1 : 0
    };
    data.on = { ...data.on,
      keydown: e => {
        if (e.keyCode === helpers["s" /* keyCodes */].enter) this.click(e);
        this.$emit('keydown', e);
      }
    };
    return h(tag, data, this.$slots.default);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/bootable/index.js
var bootable = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js
// Mixins

 // Directives

 // Utilities



const VWindowItem_baseMixins = Object(mixins["a" /* default */])(bootable["a" /* default */], Object(groupable["a" /* factory */])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ var VWindowItem = (VWindowItem_baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },

  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },

  computed: {
    classes() {
      return this.groupClasses;
    },

    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }

      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },

    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.


      this.inTransition = false;

      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },

    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.


      this.inTransition = true;

      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(helpers["g" /* convertToUnit */])(this.windowGroup.$el.clientHeight);
      }

      this.windowGroup.transitionCount++;
    },

    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }

      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.


        this.windowGroup.transitionHeight = Object(helpers["g" /* convertToUnit */])(el.clientHeight);
      });
    }

  },

  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
// Extensions

/* @vue/component */

/* harmony default export */ var VTabItem = (VWindowItem.extend({
  name: 'v-tab-item',
  props: {
    id: String
  },
  methods: {
    genWindowItem() {
      const item = VWindowItem.options.methods.genWindowItem.call(this);
      item.data.domProps = item.data.domProps || {};
      item.data.domProps.id = this.id || this.value;
      return item;
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTabs/VTabs.sass
var VTabs = __webpack_require__(323);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass
var VSlideGroup = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var components_VIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js
var mobile = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities




function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}

function calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
  const clientWidth = selectedElement.clientWidth;
  const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;

  if (rtl) {
    currentScrollOffset = -currentScrollOffset;
  }

  const totalWidth = widths.wrapper + currentScrollOffset;
  const itemOffset = clientWidth + offsetLeft;
  const additionalOffset = clientWidth * 0.4;

  if (offsetLeft <= currentScrollOffset) {
    currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
  } else if (totalWidth <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
  }

  return rtl ? -currentScrollOffset : currentScrollOffset;
}
function calculateCenteredOffset(selectedElement, widths, rtl) {
  const {
    offsetLeft,
    clientWidth
  } = selectedElement;

  if (rtl) {
    const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
    return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  } else {
    const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
    return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  }
}
const BaseSlideGroup = Object(mixins["a" /* default */])(VItemGroup["a" /* BaseItemGroup */], mobile["a" /* default */]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: resize["a" /* default */],
    Touch: touch["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    internalItemsLength: 0,
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    isSwipingHorizontal: false,
    isSwiping: false,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    canTouch() {
      return typeof window !== 'undefined';
    },

    __cachedNext() {
      return this.genTransition('next');
    },

    __cachedPrev() {
      return this.genTransition('prev');
    },

    classes() {
      return { ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },

    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
      }
    },

    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },

    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }

  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',

    scrollOffset(val) {
      if (this.$vuetify.rtl) val = -val;
      let scroll = val <= 0 ? bias(-val) : val > this.widths.content - this.widths.wrapper ? -(this.widths.content - this.widths.wrapper) + bias(this.widths.content - this.widths.wrapper - val) : -val;
      if (this.$vuetify.rtl) scroll = -scroll;
      this.$refs.content.style.transform = `translateX(${scroll}px)`;
    }

  },

  beforeUpdate() {
    this.internalItemsLength = (this.$children || []).length;
  },

  updated() {
    if (this.internalItemsLength === (this.$children || []).length) return;
    this.setWidths();
  },

  methods: {
    onScroll() {
      this.$refs.wrapper.scrollLeft = 0;
    },

    onFocusin(e) {
      if (!this.isOverflowing) return; // Focused element is likely to be the root of an item, so a
      // breadth-first search will probably find it in the first iteration

      for (const el of Object(helpers["f" /* composedPath */])(e)) {
        for (const vm of this.items) {
          if (vm.$el === el) {
            this.scrollOffset = calculateUpdatedOffset(vm.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
            return;
          }
        }
      }
    },

    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content',
        on: {
          focusin: this.onFocusin
        }
      }, this.$slots.default);
    },

    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },

    genIcon(location) {
      let icon = location;

      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }

      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(components_VIcon["a" /* default */], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },

    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },

    genTransition(location) {
      return this.$createElement(transitions["d" /* VFadeTransition */], [this.genIcon(location)]);
    },

    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper',
        on: {
          scroll: this.onScroll
        }
      }, [this.genContent()]);
    },

    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },

    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },

    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },

    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },

    onTouchMove(e) {
      if (!this.canTouch) return;

      if (!this.isSwiping) {
        // only calculate disableSwipeHorizontal during the first onTouchMove invoke
        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd
        const diffX = e.touchmoveX - e.touchstartX;
        const diffY = e.touchmoveY - e.touchstartY;
        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        this.isSwiping = true;
      }

      if (this.isSwipingHorizontal) {
        // sliding horizontally
        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling

        document.documentElement.style.overflowY = 'hidden';
      }
    },

    onTouchEnd() {
      if (!this.canTouch) return;
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);

      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }

      this.isSwiping = false; // rollback whole page scrolling to default

      document.documentElement.style.removeProperty('overflow-y');
    },

    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },

    scrollIntoView
    /* istanbul ignore next */
    () {
      if (!this.selectedItem && this.items.length) {
        const lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();
        const wrapperPosition = this.$refs.wrapper.getBoundingClientRect();

        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {
          this.scrollTo('prev');
        }
      }

      if (!this.selectedItem) {
        return;
      }

      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },

    scrollTo
    /* istanbul ignore next */
    (location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },

    setWidths() {
      window.requestAnimationFrame(() => {
        if (this._isDestroyed) return;
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        }; // https://github.com/vuetifyjs/vuetify/issues/13212
        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`
        // gets calculated wrongly by the browser if using a different zoom-level.

        this.isOverflowing = this.widths.wrapper + 1 < this.widths.content;
        this.scrollIntoView();
      });
    }

  },

  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }

});
/* harmony default export */ var VSlideGroup_VSlideGroup = (BaseSlideGroup.extend({
  name: 'v-slide-group',

  provide() {
    return {
      slideGroup: this
    };
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsBar.js
// Extensions
 // Mixins


 // Utilities


/* harmony default export */ var VTabsBar = (Object(mixins["a" /* default */])(BaseSlideGroup, ssr_bootable["a" /* default */], themeable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-tabs-bar',

  provide() {
    return {
      tabsBar: this
    };
  },

  computed: {
    classes() {
      return { ...BaseSlideGroup.options.computed.classes.call(this),
        'v-tabs-bar': true,
        'v-tabs-bar--is-mobile': this.isMobile,
        // TODO: Remove this and move to v-slide-group
        'v-tabs-bar--show-arrows': this.showArrows,
        ...this.themeClasses
      };
    }

  },
  watch: {
    items: 'callSlider',
    internalValue: 'callSlider',
    $route: 'onRouteChange'
  },
  methods: {
    callSlider() {
      if (!this.isBooted) return;
      this.$emit('call:slider');
    },

    genContent() {
      const render = BaseSlideGroup.options.methods.genContent.call(this);
      render.data = render.data || {};
      render.data.staticClass += ' v-tabs-bar__content';
      return render;
    },

    onRouteChange(val, oldVal) {
      /* istanbul ignore next */
      if (this.mandatory) return;
      const items = this.items;
      const newPath = val.path;
      const oldPath = oldVal.path;
      let hasNew = false;
      let hasOld = false;

      for (const item of items) {
        if (item.to === oldPath) hasOld = true;else if (item.to === newPath) hasNew = true;
        if (hasNew && hasOld) break;
      } // If we have an old item and not a new one
      // it's assumed that the user navigated to
      // a path that is not present in the items


      if (!hasNew && hasOld) this.internalValue = undefined;
    }

  },

  render(h) {
    const render = BaseSlideGroup.options.render.call(this, h);
    render.data.attrs = {
      role: 'tablist'
    };
    return render;
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VWindow/VWindow.sass
var VWindow = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var components_VBtn = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindow.js
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ var VWindow_VWindow = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'v-window',
  directives: {
    Touch: touch["a" /* default */]
  },

  provide() {
    return {
      windowGroup: this
    };
  },

  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: Boolean,
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },

  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },

  computed: {
    isActive() {
      return this.transitionCount > 0;
    },

    classes() {
      return { ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },

    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.internalReverse ? !this.isReverse : this.isReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },

    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },

    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },

    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },

    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },

    internalReverse() {
      return this.$vuetify.rtl ? !this.reverse : this.reverse;
    }

  },
  watch: {
    internalIndex(val, oldVal) {
      this.isReverse = this.updateReverse(val, oldVal);
    }

  },

  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genContainer() {
      const children = [this.genDefaultSlot()];

      if (this.showArrows) {
        children.push(this.genControlIcons());
      }

      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },

    genIcon(direction, icon, click) {
      var _this$$scopedSlots$di, _this$$scopedSlots$di2, _this$$scopedSlots;

      const on = {
        click: e => {
          e.stopPropagation();
          this.changedByDelimiters = true;
          click();
        }
      };
      const attrs = {
        'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
      };
      const children = (_this$$scopedSlots$di = (_this$$scopedSlots$di2 = (_this$$scopedSlots = this.$scopedSlots)[direction]) == null ? void 0 : _this$$scopedSlots$di2.call(_this$$scopedSlots, {
        on,
        attrs
      })) != null ? _this$$scopedSlots$di : [this.$createElement(components_VBtn["a" /* default */], {
        props: {
          icon: true
        },
        attrs,
        on
      }, [this.$createElement(components_VIcon["a" /* default */], {
        props: {
          large: true
        }
      }, icon)])];
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, children);
    },

    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }

      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }

      return icons;
    },

    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },

    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },

    next() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },

    prev() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },

    updateReverse(val, oldVal) {
      const itemsLength = this.items.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) return val < oldVal;

      if (val === lastIndex && oldVal === 0) {
        return true;
      } else if (val === 0 && oldVal === lastIndex) {
        return false;
      } else {
        return val < oldVal;
      }
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };

    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }

    return h('div', data, [this.genContainer()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
// Extensions
 // Types & Components


/* @vue/component */

/* harmony default export */ var VTabsItems = (VWindow_VWindow.extend({
  name: 'v-tabs-items',
  props: {
    mandatory: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return { ...VWindow_VWindow.options.computed.classes.call(this),
        'v-tabs-items': true
      };
    },

    isDark() {
      return this.rootIsDark;
    }

  },
  methods: {
    getValue(item, i) {
      return item.id || VItemGroup["a" /* BaseItemGroup */].options.methods.getValue.call(this, item, i);
    }

  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
// Mixins
 // Utilities


/* @vue/component */

/* harmony default export */ var VTabsSlider = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  name: 'v-tabs-slider',

  render(h) {
    return h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-tabs-slider'
    }));
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js
// Styles
 // Components



 // Mixins



 // Directives

 // Utilities



const VTabs_baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], proxyable["a" /* default */], themeable["a" /* default */]);
/* harmony default export */ var VTabs_VTabs = (VTabs_baseMixins.extend().extend({
  name: 'v-tabs',
  directives: {
    Resize: resize["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    alignWithTitle: Boolean,
    backgroundColor: String,
    centerActive: Boolean,
    centered: Boolean,
    fixedTabs: Boolean,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: undefined
    },
    hideSlider: Boolean,
    iconsAndText: Boolean,
    mobileBreakpoint: [String, Number],
    nextIcon: {
      type: String,
      default: '$next'
    },
    optional: Boolean,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    right: Boolean,
    showArrows: [Boolean, String],
    sliderColor: String,
    sliderSize: {
      type: [Number, String],
      default: 2
    },
    vertical: Boolean
  },

  data() {
    return {
      resizeTimeout: 0,
      slider: {
        height: null,
        left: null,
        right: null,
        top: null,
        width: null
      },
      transitionTime: 300
    };
  },

  computed: {
    classes() {
      return {
        'v-tabs--align-with-title': this.alignWithTitle,
        'v-tabs--centered': this.centered,
        'v-tabs--fixed-tabs': this.fixedTabs,
        'v-tabs--grow': this.grow,
        'v-tabs--icons-and-text': this.iconsAndText,
        'v-tabs--right': this.right,
        'v-tabs--vertical': this.vertical,
        ...this.themeClasses
      };
    },

    isReversed() {
      return this.$vuetify.rtl && this.vertical;
    },

    sliderStyles() {
      return {
        height: Object(helpers["g" /* convertToUnit */])(this.slider.height),
        left: this.isReversed ? undefined : Object(helpers["g" /* convertToUnit */])(this.slider.left),
        right: this.isReversed ? Object(helpers["g" /* convertToUnit */])(this.slider.right) : undefined,
        top: this.vertical ? Object(helpers["g" /* convertToUnit */])(this.slider.top) : undefined,
        transition: this.slider.left != null ? null : 'none',
        width: Object(helpers["g" /* convertToUnit */])(this.slider.width)
      };
    },

    computedColor() {
      if (this.color) return this.color;else if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    }

  },
  watch: {
    alignWithTitle: 'callSlider',
    centered: 'callSlider',
    centerActive: 'callSlider',
    fixedTabs: 'callSlider',
    grow: 'callSlider',
    iconsAndText: 'callSlider',
    right: 'callSlider',
    showArrows: 'callSlider',
    vertical: 'callSlider',
    '$vuetify.application.left': 'onResize',
    '$vuetify.application.right': 'onResize',
    '$vuetify.rtl': 'onResize'
  },

  mounted() {
    this.$nextTick(() => {
      window.setTimeout(this.callSlider, 30);
    });
  },

  methods: {
    callSlider() {
      if (this.hideSlider || !this.$refs.items || !this.$refs.items.selectedItems.length) {
        this.slider.width = 0;
        return false;
      }

      this.$nextTick(() => {
        // Give screen time to paint
        const activeTab = this.$refs.items.selectedItems[0];
        /* istanbul ignore if */

        if (!activeTab || !activeTab.$el) {
          this.slider.width = 0;
          this.slider.left = 0;
          return;
        }

        const el = activeTab.$el;
        this.slider = {
          height: !this.vertical ? Number(this.sliderSize) : el.scrollHeight,
          left: this.vertical ? 0 : el.offsetLeft,
          right: this.vertical ? 0 : el.offsetLeft + el.offsetWidth,
          top: el.offsetTop,
          width: this.vertical ? Number(this.sliderSize) : el.scrollWidth
        };
      });
      return true;
    },

    genBar(items, slider) {
      const data = {
        style: {
          height: Object(helpers["g" /* convertToUnit */])(this.height)
        },
        props: {
          activeClass: this.activeClass,
          centerActive: this.centerActive,
          dark: this.dark,
          light: this.light,
          mandatory: !this.optional,
          mobileBreakpoint: this.mobileBreakpoint,
          nextIcon: this.nextIcon,
          prevIcon: this.prevIcon,
          showArrows: this.showArrows,
          value: this.internalValue
        },
        on: {
          'call:slider': this.callSlider,
          change: val => {
            this.internalValue = val;
          }
        },
        ref: 'items'
      };
      this.setTextColor(this.computedColor, data);
      this.setBackgroundColor(this.backgroundColor, data);
      return this.$createElement(VTabsBar, data, [this.genSlider(slider), items]);
    },

    genItems(items, item) {
      // If user provides items
      // opt to use theirs
      if (items) return items; // If no tabs are provided
      // render nothing

      if (!item.length) return null;
      return this.$createElement(VTabsItems, {
        props: {
          value: this.internalValue
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, item);
    },

    genSlider(slider) {
      if (this.hideSlider) return null;

      if (!slider) {
        slider = this.$createElement(VTabsSlider, {
          props: {
            color: this.sliderColor
          }
        });
      }

      return this.$createElement('div', {
        staticClass: 'v-tabs-slider-wrapper',
        style: this.sliderStyles
      }, [slider]);
    },

    onResize() {
      if (this._isDestroyed) return;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.callSlider, 0);
    },

    parseNodes() {
      let items = null;
      let slider = null;
      const item = [];
      const tab = [];
      const slot = this.$slots.default || [];
      const length = slot.length;

      for (let i = 0; i < length; i++) {
        const vnode = slot[i];

        if (vnode.componentOptions) {
          switch (vnode.componentOptions.Ctor.options.name) {
            case 'v-tabs-slider':
              slider = vnode;
              break;

            case 'v-tabs-items':
              items = vnode;
              break;

            case 'v-tab-item':
              item.push(vnode);
              break;
            // case 'v-tab' - intentionally omitted

            default:
              tab.push(vnode);
          }
        } else {
          tab.push(vnode);
        }
      }
      /**
       * tab: array of `v-tab`
       * slider: single `v-tabs-slider`
       * items: single `v-tabs-items`
       * item: array of `v-tab-item`
       */


      return {
        tab,
        slider,
        items,
        item
      };
    }

  },

  render(h) {
    const {
      tab,
      slider,
      items,
      item
    } = this.parseNodes();
    return h('div', {
      staticClass: 'v-tabs',
      class: this.classes,
      directives: [{
        name: 'resize',
        modifiers: {
          quiet: true
        },
        value: this.onResize
      }]
    }, [this.genBar(tab, slider), this.genItems(items, item)]);
  }

}));
// CONCATENATED MODULE: ./components/Feature/Feature.vue



function Feature_injectStyles (context) {
  
  var style0 = __webpack_require__(321)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Feature_component = Object(componentNormalizer["a" /* default */])(
  Feature_Featurevue_type_script_lang_js_,
  Featurevue_type_template_id_4f58c492_scoped_true_render,
  Featurevue_type_template_id_4f58c492_scoped_true_staticRenderFns,
  false,
  Feature_injectStyles,
  "4f58c492",
  "4e1fd7c3"
  
)

/* harmony default export */ var Feature = (Feature_component.exports);

/* vuetify-loader */









installComponents_default()(Feature_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTab: VTab,VTabItem: VTabItem,VTabs: VTabs_VTabs,VTabsSlider: VTabsSlider})

// CONCATENATED MODULE: ./components/Feature/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=template&id=621adace&scoped=true&
var Testimonialsvue_type_template_id_621adace_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{class:{ fixed: _vm.isDesktop }},[_c('v-row',{staticClass:"spacing6"},[_c('v-col',{staticClass:"px-6",attrs:{"md":"7","cols":"12"}},[_c('div',{staticClass:"slider-wrap"},[_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"decoration"},[_c('svg',{attrs:{"width":"900px","height":"618px","viewBox":"0 0 900 618","version":"1.1"}},[_c('defs',[_c('linearGradient',{attrs:{"x1":"78.2441494%","y1":"65.8737759%","x2":"10.5892887%","y2":"33.8596367%","id":"linearGradient-1"}},[_c('stop',{attrs:{"stop-color":_vm.$vuetify.theme.themes.light.primarydark,"offset":"0%"}}),_vm._v(" "),_c('stop',{attrs:{"stop-color":_vm.$vuetify.theme.themes.light.primary,"offset":"100%"}})],1)],1),_vm._v(" "),_c('g',{attrs:{"stroke":"none","stroke-width":"0","fill":"none","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z","id":"Oval","fill":"url(#linearGradient-1)"}})])])])]),_vm._v(" "),_c('h3',{staticClass:"testi-title use-text-title2",class:[_vm.isMobile ? 'text-center' : 'text-left']},[_vm._v("\n            "+_vm._s(_vm.$t('saasLanding.testi_title'))+"\n            "),_c('br'),_vm._v(" "),_c('strong',[_vm._v("\n              "+_vm._s(_vm.$t('saasLanding.testi_titlestrong'))+"\n            ")])]),_vm._v(" "),_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-format-quote-close")]),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"carousel"},[_c('slick',{ref:"slider",attrs:{"options":_vm.slickOptions},on:{"afterChange":_vm.handleAfterChange}},_vm._l((_vm.testiContent),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('div',{staticClass:"inner"},[_c('div',{staticClass:"profile"},[_c('v-avatar',{staticClass:"avatar"},[_c('img',{attrs:{"src":item.avatar,"alt":item.name}})]),_vm._v(" "),_c('h6',{staticClass:"name"},[_vm._v("\n                      "+_vm._s(item.name)+"\n                      "),_c('span',[_vm._v("\n                        "+_vm._s(item.title)+"\n                      ")])])],1),_vm._v(" "),_c('p',{staticClass:"use-text-paragraph"},[_vm._v("\n                    "+_vm._s(item.text)+"\n                  ")])])])}),0)],1):_vm._e()],1)]),_vm._v(" "),_c('v-col',{staticClass:"use-hidden-sm-down px-6",attrs:{"md":"5","cols":"12"}},[_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"logo-wrap"},_vm._l((_vm.testiContent),function(item,index){return _c('div',{key:index,staticClass:"figure-btn"},[_c('v-btn',{class:{ active: _vm.currentSlide === index },attrs:{"text":""},on:{"click":function($event){return _vm.gotoSlide(index)}}},[_c('img',{key:index,attrs:{"src":item.logo,"alt":'logo' + index}})])],1)}),0)])],1)],1)],1)],1)}
var Testimonialsvue_type_template_id_621adace_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=template&id=621adace&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colors.js
var colors = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
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



const palette = {
  violeta: {
    primary: colors["a" /* default */].purple.base,
    // primary main
    primarylight: colors["a" /* default */].purple.lighten4,
    // primary light
    primarydark: colors["a" /* default */].purple.darken3,
    // primary dark
    secondary: colors["a" /* default */].lightGreen.base,
    // secondary main
    secondarylight: colors["a" /* default */].lightGreen.lighten4,
    // secondary light
    secondarydark: colors["a" /* default */].lightGreen.darken3,
    // secondary dark
    anchor: colors["a" /* default */].purple.base // link

  }
};
const theme = { ...palette.violeta
};
const testiData = [{
  text: 'Trabajamos desde un prinicipio con Msbyte, implementando más que solo una web trayendo nuevos clientes a nuestra empresa y generando un flujo nuevo de trabajo.',
  avatar: images_imgAPI.avatar[10],
  name: 'Miguel Cardenas',
  title: 'Security Smart Chile',
  logo: '/images/logos/ssc-logo.png'
}, {
  text: 'Responsable y con muchas ideas para crear nuestra web de cervezas en la ciudad de Valdivia.',
  avatar: images_imgAPI.avatar[1],
  name: 'Miguel Vera',
  title: 'Cerveza Humedales',
  logo: '/images/logos/humedales-logo.png'
}, {
  text: 'Francisco trabajando para nuestro colegio desarrollo una plataforma donde los apoderados y alumnos pudieron durante la pandemia informarse de manera formal de todas nuestras actividades..',
  avatar: images_imgAPI.avatar[2],
  name: 'Director',
  title: 'Colegio Ejército de Salvación',
  logo: '/images/logos/ces-logo.png'
}, {
  text: 'Estamos actualmente trabajando junto a Msbyte para poder desarrollar nuetra web e-commerce para nuestra empresa.',
  avatar: images_imgAPI.avatar[3],
  name: 'Promek Chile',
  title: 'Gerente',
  logo: '/images/logos/promek.png'
}
/*
{
  text:
    'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI.avatar[4],
  name: 'Jihan Doe',
  title: 'CEO Software House',
  logo: '/images/logos/coin.png'
},
{
  text:
    'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  avatar: imgAPI.avatar[6],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer',
  logo: '/images/logos/fashion.png'
},
{
  text:
    'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI.avatar[7],
  name: 'John Doe',
  title: 'Senior Graphic Designer',
  logo: '/images/logos/mobile.png'
},
{
  text:
    'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  avatar: imgAPI.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer',
  logo: '/images/logos/profile.png'
},
{
  text:
    'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer',
  logo: '/images/logos/saas.png'
}
 */
];
/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 242, 7))
  },

  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false
      }
    };
  },

  mounted() {
    this.loaded = true;
    this.$vuetify.theme.themes = {
      light: { ...theme
      },
      dark: { ...theme
      }
    };
  },

  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide;
    },

    gotoSlide(index) {
      this.$refs.slider.goTo(index);
    }

  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var Testimonials_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(73);

// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue



function Testimonials_injectStyles (context) {
  
  var style0 = __webpack_require__(329)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Testimonials_component = Object(componentNormalizer["a" /* default */])(
  Testimonials_Testimonialsvue_type_script_lang_js_,
  Testimonialsvue_type_template_id_621adace_scoped_true_render,
  Testimonialsvue_type_template_id_621adace_scoped_true_staticRenderFns,
  false,
  Testimonials_injectStyles,
  "621adace",
  "af3449e2"
  
)

/* harmony default export */ var Testimonials = (Testimonials_component.exports);

/* vuetify-loader */







installComponents_default()(Testimonials_component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Testimonials/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PricingPlan/PricingPlan.vue?vue&type=template&id=ab5297ba&scoped=true&
var PricingPlanvue_type_template_id_ab5297ba_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"decoration\" data-v-ab5297ba><svg fill=\"#cccccc\" data-v-ab5297ba><use xlink:href=\"/images/saas/deco-med-bg.svg#main\" data-v-ab5297ba></use></svg></div> "),_c('v-container',{class:{ fixed: _vm.isDesktop }},[_c('div',{staticClass:"item"},[_c('title-main',{attrs:{"align":"center"}},[_c('strong',[_vm._v("\n          "+_vm._s(_vm.$t('saasLanding.pricing_title'))+"\n        ")])])],1),_vm._v(" "),_c('p',{staticClass:"subtitle use-text-subtitle2 text-center"},[_vm._v("\n      "+_vm._s(_vm.$t('saasLanding.pricing_subtitle'))+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"pricing-wrap"},[_c('u-animate-container',[_c('u-animate',{staticClass:"item",attrs:{"offset":-10,"name":"fadeInUpShort","delay":"0.2s","duration":"0.4s"}},[_c('pricing-card',{attrs:{"price":120,"feature-list":_vm.feature.basic,"title":"Basico","desc":"Interdum et malesuada fames ac ante ipsum primis in faucibus. ","type":"basic"}})],1),_vm._v(" "),_c('u-animate',{staticClass:"item",attrs:{"offset":-10,"name":"fadeInUpShort","delay":"0.4s","duration":"0.4s"}},[_c('pricing-card',{attrs:{"price":280,"feature-list":_vm.feature.best,"title":"Mejor Opción","desc":"Interdum et malesuada fames ac ante ipsum primis in faucibus. ","type":"value"}})],1),_vm._v(" "),_c('u-animate',{staticClass:"item",attrs:{"offset":-10,"name":"fadeInUpShort","delay":"0.6s","duration":"0.4s"}},[_c('pricing-card',{attrs:{"price":420,"feature-list":_vm.feature.pro,"title":"Pro","desc":"Interdum et malesuada fames ac ante ipsum primis in faucibus. "}})],1),_vm._v(" "),_c('u-animate',{staticClass:"item",attrs:{"offset":-10,"name":"fadeInUpShort","delay":"0.8s","duration":"0.4s"}},[_c('pricing-card',{attrs:{"price":600,"feature-list":_vm.feature.enterprise,"title":"Empresa","desc":" Interdum et malesuada fames ac ante ipsum primis in faucibus. "}})],1)],1)],1)])],2)}
var PricingPlanvue_type_template_id_ab5297ba_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.vue?vue&type=template&id=ab5297ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Pricing.vue?vue&type=template&id=e2151f4a&scoped=true&
var Pricingvue_type_template_id_e2151f4a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"pricing",class:_vm.type},[_c('div',{staticClass:"title-card"},[_c('p',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h4',{staticClass:"display-1"},[(_vm.price > 0)?_c('span',[_vm._v("$")]):_vm._e(),_vm._v(_vm._s(_vm.calculatePrice)+"\n    ")])]),_vm._v(" "),_c('ul',_vm._l((_vm.featureList),function(item,index){return _c('li',{key:index},[_vm._v("\n      "+_vm._s(item)+"\n    ")])}),0),_vm._v(" "),_c('div',{staticClass:"btn-area"},[_c('p',{staticClass:"desc"},[_vm._v(_vm._s(_vm.desc))]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"color":_vm.type === 'basic' ? 'secondary' : 'primary',"large":""}},[_vm._v("\n      Choose Plan\n    ")])],1)])}
var Pricingvue_type_template_id_e2151f4a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/Pricing.vue?vue&type=template&id=e2151f4a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Pricing.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Pricingvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    featureList: {
      type: Array,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    calculatePrice() {
      return this.price > 0 ? this.price : 'Free';
    }

  }
});
// CONCATENATED MODULE: ./components/Cards/Pricing.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Pricingvue_type_script_lang_js_ = (Pricingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/Pricing.vue



function Pricing_injectStyles (context) {
  
  var style0 = __webpack_require__(331)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Pricing_component = Object(componentNormalizer["a" /* default */])(
  Cards_Pricingvue_type_script_lang_js_,
  Pricingvue_type_template_id_e2151f4a_scoped_true_render,
  Pricingvue_type_template_id_e2151f4a_scoped_true_staticRenderFns,
  false,
  Pricing_injectStyles,
  "e2151f4a",
  "1e335840"
  
)

/* harmony default export */ var Pricing = (Pricing_component.exports);

/* vuetify-loader */



installComponents_default()(Pricing_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PricingPlan/PricingPlan.vue?vue&type=script&lang=js&
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


const featureList = {
  basic: ['Diseño Web básico', '2 páginas + Contacto', 'Correo básico gratis'],
  best: ['Página web autoadministrable', '4 páginas + Contacto', '1 Correo Corporativo 30 GB', 'Mantenciones mensuales', 'Google Analytics + Cloudflare '],
  pro: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Nulla lobortis nunc', 'Vitae scelerisque', 'Duis sed augue'],
  enterprise: ['Nam sollicitudin dignissim', 'Pellentesque ac bibendum ', 'Vestibulum consequat', 'Donec commodo', 'Duis tristique metus']
};
/* harmony default export */ var PricingPlanvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title,
    PricingCard: Pricing
  },

  data() {
    return {
      feature: featureList
    };
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.vue?vue&type=script&lang=js&
 /* harmony default export */ var PricingPlan_PricingPlanvue_type_script_lang_js_ = (PricingPlanvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.vue



function PricingPlan_injectStyles (context) {
  
  var style0 = __webpack_require__(333)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PricingPlan_component = Object(componentNormalizer["a" /* default */])(
  PricingPlan_PricingPlanvue_type_script_lang_js_,
  PricingPlanvue_type_template_id_ab5297ba_scoped_true_render,
  PricingPlanvue_type_template_id_ab5297ba_scoped_true_staticRenderFns,
  false,
  PricingPlan_injectStyles,
  "ab5297ba",
  "b1240916"
  
)

/* harmony default export */ var PricingPlan = (PricingPlan_component.exports);

/* vuetify-loader */


installComponents_default()(PricingPlan_component, {VContainer: VContainer["a" /* default */]})

// CONCATENATED MODULE: ./components/PricingPlan/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq/Faq.vue?vue&type=template&id=b8661468&scoped=true&
var Faqvue_type_template_id_b8661468_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{staticClass:"fixed-width"},[_c('v-row',{staticClass:"spacing6"},[_c('v-col',{staticClass:"pa-6",attrs:{"md":"6"}},[_c('title-main',{attrs:{"align":_vm.isMobile ? 'center' : 'left'}},[_c('strong',[_vm._v("\n            Que hacemos?\n          ")])]),_vm._v(" "),_c('p',{staticClass:"text use-text-subtitle2",class:[_vm.isMobile ? 'text-center' : 'text-left']},[_vm._v("\n          "+_vm._s(_vm.$t('saasLanding.faq_subtitle'))+"\n        ")]),_vm._v(" "),_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"illustration"},[_c('parallax-medium'),_vm._v(" "),_c('img',{attrs:{"src":"/images/saas/faq.png","alt":"illustration"}})],1)])],1),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"accordion"},[_c('v-expansion-panels',{attrs:{"active-class":"expanded"},model:{value:(_vm.panel),callback:function ($$v) {_vm.panel=$$v},expression:"panel"}},_vm._l((_vm.faqData),function(item,index){return _c('v-expansion-panel',{key:index,staticClass:"paper"},[_c('v-expansion-panel-header',{staticClass:"content"},[_c('p',{staticClass:"heading"},[_vm._v("\n                  "+_vm._s(item.q)+"\n                ")])]),_vm._v(" "),_c('v-expansion-panel-content',{staticClass:"detail"},[_c('p',[_vm._v("\n                  "+_vm._s(item.a)+"\n                ")])])],1)}),1)],1)])],1)],1)],1)}
var Faqvue_type_template_id_b8661468_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Faq/Faq.vue?vue&type=template&id=b8661468&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq/Faq.vue?vue&type=script&lang=js&
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



const faqData = [{
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.'
}, {
  q: 'In mi nulla, fringilla vestibulum?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque lacinia purus ut libero?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque ut metus sit amet augue?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}];
/* harmony default export */ var Faqvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    ParallaxMedium: Medium,
    'title-main': Title
  },

  data() {
    return {
      panel: 0,
      faqData: faqData
    };
  },

  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Faq/Faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Faq_Faqvue_type_script_lang_js_ = (Faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(239);

// CONCATENATED MODULE: ./components/Faq/Faq.vue



function Faq_injectStyles (context) {
  
  var style0 = __webpack_require__(335)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Faq_component = Object(componentNormalizer["a" /* default */])(
  Faq_Faqvue_type_script_lang_js_,
  Faqvue_type_template_id_b8661468_scoped_true_render,
  Faqvue_type_template_id_b8661468_scoped_true_staticRenderFns,
  false,
  Faq_injectStyles,
  "b8661468",
  "5a8c4003"
  
)

/* harmony default export */ var Faq = (Faq_component.exports);

/* vuetify-loader */








installComponents_default()(Faq_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VExpansionPanel: VExpansionPanel["a" /* default */],VExpansionPanelContent: VExpansionPanelContent["a" /* default */],VExpansionPanelHeader: VExpansionPanelHeader["a" /* default */],VExpansionPanels: VExpansionPanels["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Faq/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsEvent/NewsEvent.vue?vue&type=template&id=d13cf24e&scoped=true&
var NewsEventvue_type_template_id_d13cf24e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[(_vm.loaded)?_vm._ssrNode("<div class=\"carousel\" data-v-d13cf24e>","</div>",[_c('slick',{attrs:{"options":_vm.settings}},_vm._l((_vm.newsContent),function(item,index){return _c('div',{key:index},[_c('div',{staticClass:"item"},[_c('news-card',{attrs:{"img":item.img,"text":item.text,"type":item.type}})],1)])}),0)],1):_vm._e()])}
var NewsEventvue_type_template_id_d13cf24e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue?vue&type=template&id=d13cf24e&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/News.vue?vue&type=template&id=2e3f38c8&scoped=true&
var Newsvue_type_template_id_2e3f38c8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news"},[_vm._ssrNode("<figure data-v-2e3f38c8><img"+(_vm._ssrAttr("src",_vm.img))+" alt=\"thumb\" data-v-2e3f38c8></figure> "),_vm._ssrNode("<div class=\"desc\" data-v-2e3f38c8>","</div>",[_vm._ssrNode("<div class=\"text\" data-v-2e3f38c8><p class=\"type caption\" data-v-2e3f38c8>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('saasLanding.' + _vm.type))+"\n      ")+"</p> <p data-v-2e3f38c8>"+_vm._ssrEscape(_vm._s(_vm.text))+"</p></div> "),_c('v-btn',{staticClass:"btn",attrs:{"small":"","text":""}},[_vm._v("\n      "+_vm._s(_vm.$t('saasLanding.news_readmore'))+"\n    ")])],2)],2)}
var Newsvue_type_template_id_2e3f38c8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/News.vue?vue&type=template&id=2e3f38c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/News.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Newsvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/News.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/News.vue



function News_injectStyles (context) {
  
  var style0 = __webpack_require__(337)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var News_component = Object(componentNormalizer["a" /* default */])(
  Cards_Newsvue_type_script_lang_js_,
  Newsvue_type_template_id_2e3f38c8_scoped_true_render,
  Newsvue_type_template_id_2e3f38c8_scoped_true_staticRenderFns,
  false,
  News_injectStyles,
  "2e3f38c8",
  "670cbe49"
  
)

/* harmony default export */ var News = (News_component.exports);

/* vuetify-loader */


installComponents_default()(News_component, {VBtn: VBtn["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsEvent/NewsEvent.vue?vue&type=script&lang=js&
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


const newsContent = [{
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[1],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[2],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[3],
  type: 'caption_event'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[4],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[5],
  type: 'caption_event'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[6],
  type: 'caption_news'
}];
/* harmony default export */ var NewsEventvue_type_script_lang_js_ = ({
  components: {
    NewsCard: News,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 242, 7))
  },

  data() {
    return {
      loaded: false,
      newsContent: newsContent,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewsEvent_NewsEventvue_type_script_lang_js_ = (NewsEventvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue



function NewsEvent_injectStyles (context) {
  
  var style0 = __webpack_require__(339)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var NewsEvent_component = Object(componentNormalizer["a" /* default */])(
  NewsEvent_NewsEventvue_type_script_lang_js_,
  NewsEventvue_type_template_id_d13cf24e_scoped_true_render,
  NewsEventvue_type_template_id_d13cf24e_scoped_true_staticRenderFns,
  false,
  NewsEvent_injectStyles,
  "d13cf24e",
  "30c5baa5"
  
)

/* harmony default export */ var NewsEvent = (NewsEvent_component.exports);
// CONCATENATED MODULE: ./components/NewsEvent/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWithDeco.vue?vue&type=template&id=cff3ab0a&scoped=true&
var FooterWithDecovue_type_template_id_cff3ab0a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-deco"},[_vm._ssrNode("<div class=\"decoration\" data-v-cff3ab0a><svg class=\"left-deco\" data-v-cff3ab0a><use xlink:href=\"/images/saas/deco-bg-left.svg#main\" data-v-cff3ab0a></use></svg> <svg class=\"right-deco\" data-v-cff3ab0a><use xlink:href=\"/images/saas/deco-bg-right.svg#main\" data-v-cff3ab0a></use></svg></div> "),_vm._ssrNode("<div class=\"action\" data-v-cff3ab0a>","</div>",[_vm._ssrNode("<h4 class=\"use-text-title2\" data-v-cff3ab0a>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('saasLanding.footer_waiting'))+"\n    ")+"</h4> "),_c('v-btn',{attrs:{"color":"secondary","large":""}},[_vm._v("\n      "+_vm._s(_vm.$t('saasLanding.getstarted'))+"\n    ")])],2),_vm._ssrNode(" "),_c('footer-main')],2)}
var FooterWithDecovue_type_template_id_cff3ab0a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue?vue&type=template&id=cff3ab0a&scoped=true&

// EXTERNAL MODULE: ./components/Footer/Footer.vue + 10 modules
var Footer = __webpack_require__(90);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWithDeco.vue?vue&type=script&lang=js&
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

/* harmony default export */ var FooterWithDecovue_type_script_lang_js_ = ({
  components: {
    'footer-main': Footer["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_FooterWithDecovue_type_script_lang_js_ = (FooterWithDecovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue



function FooterWithDeco_injectStyles (context) {
  
  var style0 = __webpack_require__(341)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FooterWithDeco_component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterWithDecovue_type_script_lang_js_,
  FooterWithDecovue_type_template_id_cff3ab0a_scoped_true_render,
  FooterWithDecovue_type_template_id_cff3ab0a_scoped_true_staticRenderFns,
  false,
  FooterWithDeco_injectStyles,
  "cff3ab0a",
  "00e00c3c"
  
)

/* harmony default export */ var FooterWithDeco = (FooterWithDeco_component.exports);

/* vuetify-loader */


installComponents_default()(FooterWithDeco_component, {VBtn: VBtn["a" /* default */]})

// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(265);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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














/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    Banner: Banner,
    CompanyLogo: CompanyLogo,
    Counter: Counter,
    Feature: Feature,
    Testimonials: Testimonials,
    PricingPlan: PricingPlan,
    Faq: Faq,
    NewsEvent: NewsEvent,
    FooterWithDeco: FooterWithDeco,
    PageNav: PageNav,
    Hidden: Hidden["a" /* default */],
    Notification: Notification["a" /* default */]
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'; // eslint-disable-line
    },

    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown';
    }

  },

  head() {
    return {
      title: brand["a" /* default */].saas.name + ' - Home Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(343)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  lib_vue_loader_options_pagesvue_type_template_id_70b12fd3_scoped_true_render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "70b12fd3",
  "f4fd815e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=index.js.map