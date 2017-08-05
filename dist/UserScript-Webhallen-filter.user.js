// ==UserScript==
// @name        UserScript-Webhallen-filter
// @namespace   webhallen-filter
// @description Simple Webhallen filter
// @version     1.1.0
// @downloadURL https://github.com/MikaelPorttila/UserScript-Webhallen-filter/raw/master/dist/UserScript-Webhallen-filter.user.js
// @include     https://www.webhallen.com/se-sv/medlem/*/erbjudanden
// @include     https://www.webhallen.com/medlem/*/erbjudanden/mest_salda/alla/*
// @include     https://www.webhallen.com/medlem/*/erbjudanden
// @include     https://www.webhallen.com/medlem/*/erbjudanden/*/
// ==/UserScript==

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.LOCAL_STORAGE_KEY_FILTERS=Object.freeze("Filters"),t.WH_VAR_MENU_CONTAINER_SELECTOR=Object.freeze("#productlist_left_ultrawide"),t}();e.Constants=r},function(t,e,n){"use strict";function r(t,e){for(var n=e.parentElement;null!=n;){if(n.matches(t))return n;n=n.parentElement}return null}function o(t,e){for(var n=[],r=document.querySelectorAll(t),o=0;o<r.length;o++)!function(){var t=r[o],i=t.innerText.toLowerCase();e.some(function(t){return-1!==i.indexOf(t.toLowerCase())})&&n.push(t)}();return n}function i(t,e){t.insertBefore(e,t.firstChild)}function s(t,e,n){if(null!=t)for(var r=0;r<t.length;r++){var o=t[r];o.classList.toggle(e,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.closest=r,e.querySelectorAllByText=o,e.prepend=i,e.toggleNodeClasses=s},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(6)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(9),i=n(8),s=n(11),u=function(){function t(){this.memory=new s.Memory,this.initialMemorySetup(),this.menu=new i.Menu(r.Constants.WH_VAR_MENU_CONTAINER_SELECTOR,this.memory),this.filter=new o.Filter(this.memory)}return t.prototype.initialMemorySetup=function(){null==this.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS)&&this.memory.set(r.Constants.LOCAL_STORAGE_KEY_FILTERS,["global","spinner"])},t.prototype.init=function(){this.filter.execute(),this.menu.build()},t}();e.App=u},function(t,e,n){e=t.exports=n(5)(void 0),e.push([t.i,".wbusf-display-none {\r\n    display: none\r\n}\r\n\r\n#whusf-menu {\r\n    border:1px solid #d9e5ee;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#whusf-menu a, #whusf-menu a:visited{\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n\r\n#whusf-menu ul {\r\n    list-style-type: none;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#whusf-menu ul li {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#whusf-add-button {\r\n    padding: 4px;\r\n}\r\n\r\n#whusf-options { \r\n    margin-top: 3px;\r\n}\r\n#whusf-options li a {\r\n    margin-right: 3px;\r\n}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],u=i[1],a=i[2],l=i[3],f={css:u,media:a,sourceMap:l};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}function i(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function u(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function a(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function f(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=b++;n=y||(y=u(e)),r=c.bind(null,n,l,!1),o=c.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(e),r=d.bind(null,n,e),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),r=p.bind(null,n),o=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function c(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=O(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=_(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(s),u&&URL.revokeObjectURL(u)}var h={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),y=null,b=0,g=[],_=n(7);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var u=n[s],a=h[u.id];a.refs--,i.push(a)}if(t){r(o(t,e),e)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete h[a.id]}}}};var O=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(1),i=function(){function t(t,e){var n=this;this.target=t,this.memory=e,this.displayMenuOptions=!1,this.memory.track(r.Constants.LOCAL_STORAGE_KEY_FILTERS,function(t,e){return n.renderMenu(e)})}return t.prototype.build=function(){var t=this;setTimeout(function(){t.menuContainer=document.querySelector(t.target),t.menuDiv=document.createElement("div"),t.menuDiv.setAttribute("id","whusf-menu"),o.prepend(t.menuContainer,t.menuDiv),t.renderMenu(t.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS)||[])},0)},t.prototype.toggleFilterMenu=function(){this.displayMenuOptions=!this.displayMenuOptions},t.prototype.addHandlers=function(){var t=this,e=this.menuDiv.querySelector("#whusf-options-toggler");null!=e&&e.addEventListener("click",function(e){t.displayMenuOptions=!t.displayMenuOptions;var n=t.menuDiv.querySelector("#whusf-options");return null!=n&&n.classList.toggle("wbusf-display-none",!t.displayMenuOptions),e.preventDefault(),!1});var n=this.menuDiv.querySelector("#whusf-add-button");null!=n&&n.addEventListener("click",function(){var e=prompt("Add new Filter");if(e&&""!=e){var n=t.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS);null!=n&&(n.push(e),t.memory.set(r.Constants.LOCAL_STORAGE_KEY_FILTERS,n),t.renderMenu(n))}});for(var o=this.menuDiv.querySelectorAll(".whusf-options-filter-delete"),i=0;i<o.length;i++){o[i].addEventListener("click",function(e){var n=e.target,o=n.getAttribute("data-filter");if(o&&""!=o){var i=t.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS);if(null!=i){var s=i.indexOf(o);-1!=s&&(i.splice(s,1),t.memory.set(r.Constants.LOCAL_STORAGE_KEY_FILTERS,i),t.renderMenu(i))}}return e.preventDefault(),!1})}},t.prototype.renderMenu=function(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='<li><a href="#" class="whusf-options-filter-delete" data-filter="'+r+'">&#10006;</a>'+r+"</li>"}this.menuDiv.innerHTML='\n                <div>\n                    <a href="#" id="whusf-options-toggler">Filter settings ('+t.length+' active filters)</a>\n                </div>\n                <div id="whusf-options" '+(this.displayMenuOptions?"":'class="wbusf-display-none"')+">\n                    <ul>\n                        "+e+'\n                    </ul>\n                \n                    <button id="whusf-add-button" class="button s18 checkout">Add filter</button>\n                </div>\n            ',this.addHandlers()},t}();e.Menu=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(1),i=function(){function t(t){var e=this;this.memory=t,this.hideCount=0,this.memory.track(r.Constants.LOCAL_STORAGE_KEY_FILTERS,function(t,n){return e.filterContent(n)})}return t.prototype.execute=function(){var t=this.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS);this.filterContent(t)},t.prototype.filterContent=function(t){for(var e=document.querySelectorAll(".prod_list_row.wbusf-display-none"),n=0;n<e.length;n++)e[n].classList.toggle("wbusf-display-none",!1);if(null!=t){var r=o.querySelectorAllByText(".prod_list_row a",t).map(function(t){return o.closest(".prod_list_row",t)});o.toggleNodeClasses(r,"wbusf-display-none",!0)}},t}();e.Filter=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(2);var r=n(3),o=new r.App;window.addEventListener("load",function(){return o.init()},!1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=function(){function t(){this.sub=new r.Sub,this.memorySpacePrefix=Object.freeze("whusf")}return t.prototype.getKey=function(t){return this.memorySpacePrefix+t},t.prototype.track=function(t,e){return t=this.getKey(t),this.sub.subscribe(t,e)},t.prototype.set=function(t,e){t=this.getKey(t),localStorage.setItem(t,JSON.stringify(e)),this.sub.trigger(t,e)},t.prototype.get=function(t){t=this.getKey(t);var e=localStorage.getItem(t);return e?JSON.parse(e):null},t}();e.Memory=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.subscriptions=[]}return t.prototype.trigger=function(t,e){for(var n=0;n<this.subscriptions.length;n++){var r=this.subscriptions[n];r.key==t&&r.invoke&&r.invoke(t,e)}},t.prototype.subscribe=function(e,n){var r=this,i=new o(++t.idCounter);return i.invoke=n,i.key=e,i.unsubscribe=function(){for(var t=0;t<r.subscriptions.length;t++){if(r.subscriptions[t].id===i.id){r.subscriptions.splice(t,1);break}}},this.subscriptions.push(i),i},t.idCounter=0,t}();e.Sub=r;var o=function(){function t(t){this.id=t}return t}();e.Subscription=o}]);