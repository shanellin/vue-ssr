module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s="./src/entry-server.js")}({"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports={data:function(){return{who:"Vue and Webpack !!",setConfig:"This is CONFIG"}},created:function(){console.log("This is CONFIG")}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/page2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"page2"}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/testComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/testComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"component"}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=n.n(r)()(!0);o.push([e.i,"\n.hello[data-v-a71fdbc8] {\n  padding: 0.5em;\n  font-size: 2em;\n  background-color: #fcf;\n}\n","",{version:3,sources:["webpack://src/App.vue"],names:[],mappings:";AA4BA;EACA,cAAA;EACA,cAAA;EACA,sBAAA;AACA",sourcesContent:['<template>\n  <div class="App">\n    <div class="hello">Hello {{ who }}</div>\n    <br>\n    <div>{{setConfig}}</div>\n    <p>\n      <router-link to="/">Go To Home</router-link>\n      <router-link to="/page2">Go To page2</router-link>\n    </p>\n    <router-view></router-view>\n  </div>\n</template>\n\n<script>\nmodule.exports = {\n  data: function() {\n    return {\n      who: "Vue and Webpack !!",\n      setConfig: CONFIG\n    };\n  },\n  created() {\n    console.log(CONFIG)\n  },\n};\n<\/script>\n\n<style scoped>\n.hello {\n  padding: 0.5em;\n  font-size: 2em;\n  background-color: #fcf;\n}\n</style>\n'],sourceRoot:""}]),t.default=o},"./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),s=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(o[u]=!0)}for(var d=0;d<e.length;d++){var a=[].concat(e[d]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=a71fdbc8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=a71fdbc8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"App"},[e._ssrNode('<div class="hello" data-v-a71fdbc8>'+e._ssrEscape("Hello "+e._s(e.who))+"</div> <br data-v-a71fdbc8> <div data-v-a71fdbc8>"+e._ssrEscape(e._s(e.setConfig))+"</div> "),e._ssrNode("<p data-v-a71fdbc8>","</p>",[n("router-link",{attrs:{to:"/"}},[e._v("Go To Home")]),e._ssrNode(" "),n("router-link",{attrs:{to:"/page2"}},[e._v("Go To page2")])],2),e._ssrNode(" "),n("router-view")],2)},o=[]},"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/page2.vue?vue&type=template&id=7ea37b76&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page2.vue?vue&type=template&id=7ea37b76& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o});var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"page2"}},[this._ssrNode(this._ssrEscape("I'm a "+this._s(this.name)+"."))])},o=[]},"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/testComponent.vue?vue&type=template&id=95e5429a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/testComponent.vue?vue&type=template&id=95e5429a& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o});var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"testComponent"}},[this._ssrNode(this._ssrEscape("\n    I'm a "+this._s(this.name)+".\n"))])},o=[]},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */function(e,t,n){"use strict";function r(e,t,n,r,o,s,u,d){var a,i="function"==typeof e?e.options:e;if(t&&(i.render=t,i.staticRenderFns=n,i._compiled=!0),r&&(i.functional=!0),s&&(i._scopeId="data-v-"+s),u?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},i._ssrRegister=a):o&&(a=d?function(){o.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(i.functional){i._injectStyles=a;var c=i.render;i.render=function(e,t){return a.call(t),c(e,t)}}else{var l=i.beforeCreate;i.beforeCreate=l?[].concat(l,a):[a]}return{exports:e,options:i}}n.r(t),n.d(t,"default",function(){return r})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css& */"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css&");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(/*! ../node_modules/vue-style-loader/lib/addStylesServer.js */"./node_modules/vue-style-loader/lib/addStylesServer.js").default;e.exports.__inject__=function(e){o("617635b6",r,!0,e)}},"./node_modules/vue-style-loader/lib/addStylesServer.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesServer.js ***!
  \**************************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var r=n(/*! ./listToStyles */"./node_modules/vue-style-loader/lib/listToStyles.js"),o=n.n(r);function s(e,t,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return u(r._styles)}}),r._renderStyles=u);var s=r._styles||(r._styles={});t=o()(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,o=0;o<r.length;o++){var s=r[o],u=s.media||"default",d=e[u];d?d.ids.indexOf(s.id)<0&&(d.ids.push(s.id),d.css+="\n"+s.css):e[u]={ids:[s.id],css:s.css,media:s.media}}}(s,t):function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,o=0;o<r.length;o++){var s=r[o];e[s.id]={ids:[s.id],css:s.css,media:s.media}}}(s,t)}}function u(e){var t="";for(var n in e){var r=e[n];t+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return t}},"./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],u=s[0],d=s[1],a=s[2],i=s[3],c={id:e+":"+o,css:d,media:a,sourceMap:i};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}},"./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./App.vue?vue&type=template&id=a71fdbc8&scoped=true& */"./src/App.vue?vue&type=template&id=a71fdbc8&scoped=true&"),o=n(/*! ./App.vue?vue&type=script&lang=js& */"./src/App.vue?vue&type=script&lang=js&");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return o[e]})}(s);var u=n(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");var d=Object(u.default)(o.default,r.render,r.staticRenderFns,!1,function(e){var t=n(/*! ./App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css& */"./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css&");t.__inject__&&t.__inject__(e)},"a71fdbc8","4117a2b7");t.default=d.exports},"./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&"),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return r[e]})}(s);t.default=o.a},"./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css&":
/*!******************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css& */"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=a71fdbc8&scoped=true&lang=css&"),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return r[e]})}(s);t.default=o.a},"./src/App.vue?vue&type=template&id=a71fdbc8&scoped=true&":
/*!****************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=a71fdbc8&scoped=true& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=a71fdbc8&scoped=true& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=a71fdbc8&scoped=true&");n.d(t,"render",function(){return r.render}),n.d(t,"staticRenderFns",function(){return r.staticRenderFns})},"./src/components/page2.vue":
/*!**********************************!*\
  !*** ./src/components/page2.vue ***!
  \**********************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./page2.vue?vue&type=template&id=7ea37b76& */"./src/components/page2.vue?vue&type=template&id=7ea37b76&"),o=n(/*! ./page2.vue?vue&type=script&lang=js& */"./src/components/page2.vue?vue&type=script&lang=js&");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return o[e]})}(s);var u=n(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");var d=Object(u.default)(o.default,r.render,r.staticRenderFns,!1,function(e){},null,"06706704");t.default=d.exports},"./src/components/page2.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/page2.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./page2.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/page2.vue?vue&type=script&lang=js&"),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return r[e]})}(s);t.default=o.a},"./src/components/page2.vue?vue&type=template&id=7ea37b76&":
/*!*****************************************************************!*\
  !*** ./src/components/page2.vue?vue&type=template&id=7ea37b76& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./page2.vue?vue&type=template&id=7ea37b76& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/page2.vue?vue&type=template&id=7ea37b76&");n.d(t,"render",function(){return r.render}),n.d(t,"staticRenderFns",function(){return r.staticRenderFns})},"./src/components/testComponent.vue":
/*!******************************************!*\
  !*** ./src/components/testComponent.vue ***!
  \******************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./testComponent.vue?vue&type=template&id=95e5429a& */"./src/components/testComponent.vue?vue&type=template&id=95e5429a&"),o=n(/*! ./testComponent.vue?vue&type=script&lang=js& */"./src/components/testComponent.vue?vue&type=script&lang=js&");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return o[e]})}(s);var u=n(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");var d=Object(u.default)(o.default,r.render,r.staticRenderFns,!1,function(e){},null,"f9af91e8");t.default=d.exports},"./src/components/testComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/testComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./testComponent.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/testComponent.vue?vue&type=script&lang=js&"),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return r[e]})}(s);t.default=o.a},"./src/components/testComponent.vue?vue&type=template&id=95e5429a&":
/*!*************************************************************************!*\
  !*** ./src/components/testComponent.vue?vue&type=template&id=95e5429a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./testComponent.vue?vue&type=template&id=95e5429a& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/testComponent.vue?vue&type=template&id=95e5429a&");n.d(t,"render",function(){return r.render}),n.d(t,"staticRenderFns",function(){return r.staticRenderFns})},"./src/entry-server.js":
/*!*****************************!*\
  !*** ./src/entry-server.js ***!
  \*****************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){var o=(0,r.createApp)(),s=o.app,u=o.router;u.push(e.url),u.onReady(function(){if(!u.getMatchedComponents().length)return n({code:404});t(s)},n)})};var r=n(/*! ./index.js */"./src/index.js")},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=function(){var e=(0,s.createRouter)();return{app:new r.default({router:e,render:function(e){return e(o.default)}}),router:e}};var r=u(n(/*! vue */"vue")),o=u(n(/*! ./App.vue */"./src/App.vue")),s=n(/*! ./router/router.js */"./src/router/router.js");function u(e){return e&&e.__esModule?e:{default:e}}},"./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=function(){return new o.default({routes:[{path:"/",name:"testComponent",component:s.default},{path:"/page2",name:"page2",component:u.default}],mode:"history",base:"/"})};var r=d(n(/*! vue */"vue")),o=d(n(/*! vue-router */"vue-router")),s=d(n(/*! ../components/testComponent.vue */"./src/components/testComponent.vue")),u=d(n(/*! ../components/page2.vue */"./src/components/page2.vue"));function d(e){return e&&e.__esModule?e:{default:e}}r.default.use(o.default)},vue:
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */function(e,t){e.exports=require("vue")},"vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("vue-router")}});