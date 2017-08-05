// ==UserScript==
// @name        UserScript-Webhallen-filter
// @namespace   webhallen-filter
// @description Simple Webhallen filter
// @version     1.0.2
// @downloadURL https://github.com/MikaelPorttila/UserScript-Webhallen-filter/raw/master/dist/UserScript-Webhallen-filter.user.js
// @include     https://www.webhallen.com/se-sv/medlem/*/erbjudanden
// @include     https://www.webhallen.com/medlem/*/erbjudanden/mest_salda/alla/*
// @include     https://www.webhallen.com/medlem/*/erbjudanden
// ==/UserScript==

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.texts=t}return t.prototype.run=function(){this.removeLinks()},t.prototype.removeLinks=function(){var t=this;this.getLinksByTexts(this.texts).forEach(function(e){var n=t.closestParentByClass(".prod_list_row",e);null!=n&&null!=n.parentElement&&n.parentElement.removeChild(n)})},t.prototype.getLinksByTexts=function(t){for(var e=[],n=document.querySelectorAll(".prod_list_row a"),r=0;r<n.length;r++)!function(){var o=n[r],u=o.innerText.toLowerCase();t.some(function(t){return-1!==u.indexOf(t.toLowerCase())})&&e.push(o)}();return e},t.prototype.closestParentByClass=function(t,e){for(var n=e.parentElement;null!=n;){if(n.matches(t))return n;n=n.parentElement}return null},t}();e.FilterScript=r;var o=new r(["global","spinner"]);window.addEventListener("load",function(){return o.run()},!1)}]);