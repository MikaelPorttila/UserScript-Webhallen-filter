// ==UserScript==
// @name        UserScript-Webhallen-filter
// @namespace   webhallen-filter
// @description Simple Webhallen filter
// @version     1.0.0
// @include     https://www.webhallen.com/se-sv/medlem/*/erbjudanden
// @include     https://www.webhallen.com/medlem/*/erbjudanden/mest_salda/alla/*
// ==/UserScript==

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.prototype.run=function(){var t=this;this.getLinksByTexts("global").forEach(function(e){var n=t.closestParentByClass(".prod_list_row",e);null!=n&&n.parentElement.removeChild(n)})},t.prototype.getLinksByTexts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=[],r=document.querySelectorAll(".prod_list_row a"),o=0;o<r.length;o++)!function(){var e=r[o],u=e.innerText.toLowerCase();t.some(function(t){return-1!==u.indexOf(t.toLowerCase())})&&n.push(e)}();return n},t.prototype.closestParentByClass=function(t,e){for(var n=e.parentElement;null!=n;){if(n.matches(t))return n;n=n.parentElement}return null},t}();e.FilterScript=r;var o=new r;window.addEventListener("load",function(){return o.run()},!1)}]);