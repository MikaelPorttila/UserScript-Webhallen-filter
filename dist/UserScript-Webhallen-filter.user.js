// ==UserScript==
// @name        UserScript-Webhallen-filter
// @namespace   webhallen-filter
// @description Simple Webhallen filter
// @version     1.0.1
// @downloadURL https://github.com/MikaelPorttila/UserScript-Webhallen-filter/raw/master/dist/UserScript-Webhallen-filter.user.js
// @include     https://www.webhallen.com/se-sv/medlem/*/erbjudanden
// @include     https://www.webhallen.com/medlem/*/erbjudanden/mest_salda/alla/*
// @include     https://www.webhallen.com/medlem/*/erbjudanden
// ==/UserScript==

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.run=function(){this.removeLinks()},e.prototype.removeLinks=function(){var e=this;this.getLinksByTexts("global").forEach(function(t){var n=e.closestParentByClass(".prod_list_row",t);null!=n&&null!=n.parentElement&&n.parentElement.removeChild(n)})},e.prototype.getLinksByTexts=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=[],r=document.querySelectorAll(".prod_list_row a"),o=0;o<r.length;o++)!function(){var t=r[o],u=t.innerText.toLowerCase();e.some(function(e){return-1!==u.indexOf(e.toLowerCase())})&&n.push(t)}();return n},e.prototype.closestParentByClass=function(e,t){for(var n=t.parentElement;null!=n;){if(n.matches(e))return n;n=n.parentElement}return null},e}();t.FilterScript=r;var o=new r;window.addEventListener("load",function(){return o.run()},!1)}]);