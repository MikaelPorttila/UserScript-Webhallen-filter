// ==UserScript==
// @name        UserScript-Webhallen-filter
// @namespace   webhallen-filter
// @description Simple Webhallen filter
// @version     1.1.2
// @downloadURL https://github.com/MikaelPorttila/UserScript-Webhallen-filter/raw/master/dist/UserScript-Webhallen-filter.user.js
// @include     https://www.webhallen.com/se-sv/medlem/*/erbjudanden
// @include     https://www.webhallen.com/medlem/*/erbjudanden/mest_salda/alla/*
// @include     https://www.webhallen.com/medlem/*/erbjudanden
// @include     https://www.webhallen.com/medlem/*/erbjudanden/*/
// ==/UserScript==

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.LOCAL_STORAGE_KEY_FILTERS=Object.freeze("Filters"),e.WH_VAR_MENU_CONTAINER_SELECTOR=Object.freeze("#productlist_left_ultrawide"),e}();t.Constants=r},function(e,t,n){"use strict";function r(e,t){for(var n=t.parentElement;null!=n;){if(n.matches(e))return n;n=n.parentElement}return null}function o(e,t){for(var n=[],r=document.querySelectorAll(e),o=0;o<r.length;o++)!function(){var e=r[o],i=e.innerText.toLowerCase();t.some(function(e){return-1!==i.indexOf(e.toLowerCase())})&&n.push(e)}();return n}function i(e,t){e.insertBefore(t,e.firstChild)}function s(e,t,n){if(null!=e)for(var r=0;r<e.length;r++){var o=e[r];o.classList.toggle(t,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.closest=r,t.querySelectorAllByText=o,t.prepend=i,t.toggleNodeClasses=s},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(10)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(13),i=n(12),s=n(15),u=function(){function e(){this.memory=new s.Memory,this.initialMemorySetup(),this.menu=new i.Menu(r.Constants.WH_VAR_MENU_CONTAINER_SELECTOR,this.memory),this.filter=new o.Filter(this.memory)}return e.prototype.initialMemorySetup=function(){null==this.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS)&&this.memory.set(r.Constants.LOCAL_STORAGE_KEY_FILTERS,["global","spinner"])},e.prototype.init=function(){this.filter.execute(),this.menu.build()},e}();t.App=u},function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,".wbusf-display-none {\n  display: none; }\n\n#whusf-menu {\n  border: 1px solid #d9e5ee;\n  border-radius: 4px;\n  padding: 5px;\n  margin-bottom: 5px; }\n  #whusf-menu a, #whusf-menu a:visited {\n    font-weight: bold;\n    text-decoration: none; }\n  #whusf-menu ul {\n    list-style-type: none;\n    margin-bottom: 5px; }\n    #whusf-menu ul li {\n      margin-bottom: 5px; }\n\n#whusf-add-button {\n  padding: 4px; }\n\n#whusf-options {\n  margin-top: 3px; }\n  #whusf-options li a {\n    margin-right: 3px; }\n",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r;!function(){"use strict";function o(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||c,function(t,r,o,i){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===o?(e.defineParams&&i.replace(e.defineParams,function(e,t,o){n[r]={arg:t,text:o}}),r in n||(n[r]=i)):new Function("def","def['"+r+"']="+i)(n)),""}).replace(e.use||c,function(t,r){e.useParams&&(r=r.replace(e.useParams,function(e,t,r,o){if(n[r]&&n[r].arg&&o){var i=(r+":"+o).replace(/'|\\/g,"_");return n.__exp=n.__exp||{},n.__exp[i]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+o+"$2"),t+"def.__exp['"+i+"']"}}));var i=new Function("def","return "+r)(n);return i?o(e,i,n):i})}function i(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var s,u={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};u.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(n,function(e){return t[e]||e}):""}},s=function(){return this||(0,eval)("this")}(),void 0!==e&&e.exports?e.exports=u:void 0!==(r=function(){return u}.call(t,n,t,e))&&(e.exports=r);var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},c=/$^/;u.template=function(e,t,n){t=t||u.templateSettings;var r,l,f=t.append?a.append:a.split,p=0,d=t.use||t.define?o(t,e,n||{}):e;d=("var out='"+(t.strip?d.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):d).replace(/'|\\/g,"\\$&").replace(t.interpolate||c,function(e,t){return f.start+i(t)+f.end}).replace(t.encode||c,function(e,t){return r=!0,f.startencode+i(t)+f.end}).replace(t.conditional||c,function(e,t,n){return t?n?"';}else if("+i(n)+"){out+='":"';}else{out+='":n?"';if("+i(n)+"){out+='":"';}out+='"}).replace(t.iterate||c,function(e,t,n,r){return t?(p+=1,l=r||"i"+p,t=i(t),"';var arr"+p+"="+t+";if(arr"+p+"){var "+n+","+l+"=-1,l"+p+"=arr"+p+".length-1;while("+l+"<l"+p+"){"+n+"=arr"+p+"["+l+"+=1];out+='"):"';} } out+='"}).replace(t.evaluate||c,function(e,t){return"';"+i(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(t.selfcontained||!s||s._encodeHTML||(s._encodeHTML=u.encodeHTMLSource(t.doNotSkipEncoded)),d="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+u.encodeHTMLSource.toString()+"("+(t.doNotSkipEncoded||"")+"));"+d);try{return new Function(t.varname,d)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+d),e}},u.compile=function(e,t){return u.template(e,null,t)}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default='<div>\r\n    <a href="#" id="whusf-options-toggler">Filter settings ({{=it.filters.length}} active filters)</a>\r\n</div>\r\n<div id="whusf-options" class="{{=it.displayMenuOptions ? \'\' : \'wbusf-display-none\' }}">\r\n    {{?it.filters.length}}\r\n    <ul>\r\n        {{~ it.filters :filter}}\r\n        <li>\r\n            <a href="#" class="whusf-options-filter-delete" data-filter="{{=filter}}">&#10006;</a>{{=filter}}\r\n        </li>\r\n        {{~}}\r\n    </ul>\r\n    {{?}}\r\n    <button id="whusf-add-button" class="button s18 checkout">Add filter</button>\r\n</div>'},function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,o="/"===s.charAt(0))}return t=n(r(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===s(e,-1);return e=n(r(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),u=s,a=0;a<s;a++)if(o[a]!==i[a]){u=a;break}for(var c=[],a=u;a<o.length;a++)c.push("..");return c=c.concat(i.slice(u)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return i(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(t,n(9))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){v&&d&&(v=!1,d.length?h=d.concat(h):m=-1,h.length&&u())}function u(){if(!v){var e=o(s);v=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,v=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],v=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new a(e,t)),1!==h.length||v||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(l(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=i[1],a=i[2],c=i[3],l={css:u,media:a,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function i(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function a(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=y++;n=g||(g=u(t)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),r=d.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=p.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(s),u&&URL.revokeObjectURL(u)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,y=0,b=[],w=n(11);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var u=n[s],a=h[u.id];a.refs--,i.push(a)}if(e){r(o(e,t),t)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete h[a.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),i=(n(8),n(7)),s=n(6),u=function(){function e(e,t){var n=this;this.target=e,this.memory=t,this.displayMenuOptions=!1,this.viewTemplate=s.template(i.default),this.memory.track(r.Constants.LOCAL_STORAGE_KEY_FILTERS,function(e,t){return n.renderMenu(t)})}return e.prototype.build=function(){var e=this;setTimeout(function(){e.menuContainer=document.querySelector(e.target),e.menuDiv=document.createElement("div"),e.menuDiv.setAttribute("id","whusf-menu"),o.prepend(e.menuContainer,e.menuDiv),e.renderMenu(e.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS)||[])},0)},e.prototype.toggleFilterMenu=function(){this.displayMenuOptions=!this.displayMenuOptions},e.prototype.addHandlers=function(){var e=this,t=this.menuDiv.querySelector("#whusf-options-toggler");null!=t&&t.addEventListener("click",function(t){e.displayMenuOptions=!e.displayMenuOptions;var n=e.menuDiv.querySelector("#whusf-options");return null!=n&&n.classList.toggle("wbusf-display-none",!e.displayMenuOptions),t.preventDefault(),!1});var n=this.menuDiv.querySelector("#whusf-add-button");null!=n&&n.addEventListener("click",function(){var t=prompt("Add new Filter");if(t&&""!=t){var n=e.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS);null!=n&&(n.push(t),e.memory.set(r.Constants.LOCAL_STORAGE_KEY_FILTERS,n),e.renderMenu(n))}});for(var o=this.menuDiv.querySelectorAll(".whusf-options-filter-delete"),i=0;i<o.length;i++){o[i].addEventListener("click",function(t){var n=t.target,o=n.getAttribute("data-filter");if(o&&""!=o){var i=e.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS);if(null!=i){var s=i.indexOf(o);-1!=s&&(i.splice(s,1),e.memory.set(r.Constants.LOCAL_STORAGE_KEY_FILTERS,i),e.renderMenu(i))}}return t.preventDefault(),!1})}},e.prototype.renderMenu=function(e){this.menuDiv.innerHTML=this.viewTemplate({filters:e,displayMenuOptions:this.displayMenuOptions}),this.addHandlers()},e}();t.Menu=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),i=function(){function e(e){var t=this;this.memory=e,this.memory.track(r.Constants.LOCAL_STORAGE_KEY_FILTERS,function(e,n){return t.filterContent(n)})}return e.prototype.execute=function(){var e=this.memory.get(r.Constants.LOCAL_STORAGE_KEY_FILTERS);this.filterContent(e)},e.prototype.filterContent=function(e){for(var t=document.querySelectorAll(".prod_list_row.wbusf-display-none"),n=0;n<t.length;n++)t[n].classList.toggle("wbusf-display-none",!1);if(null!=e){var r=o.querySelectorAllByText(".prod_list_row a",e).map(function(e){return o.closest(".prod_list_row",e)});o.toggleNodeClasses(r,"wbusf-display-none",!0)}},e}();t.Filter=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2);var r=n(3),o=new r.App;window.addEventListener("load",function(){return o.init()},!1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),o=function(){function e(){this.sub=new r.Sub,this.memorySpacePrefix=Object.freeze("whusf")}return e.prototype.getKey=function(e){return this.memorySpacePrefix+e},e.prototype.track=function(e,t){return e=this.getKey(e),this.sub.subscribe(e,t)},e.prototype.set=function(e,t){e=this.getKey(e),localStorage.setItem(e,JSON.stringify(t)),this.sub.trigger(e,t)},e.prototype.get=function(e){e=this.getKey(e);var t=localStorage.getItem(e);return t?JSON.parse(t):null},e}();t.Memory=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.subscriptions=[]}return e.prototype.trigger=function(e,t){for(var n=0;n<this.subscriptions.length;n++){var r=this.subscriptions[n];r.key==e&&r.invoke&&r.invoke(e,t)}},e.prototype.subscribe=function(t,n){var r=this,i=new o(++e.idCounter);return i.invoke=n,i.key=t,i.unsubscribe=function(){for(var e=0;e<r.subscriptions.length;e++){if(r.subscriptions[e].id===i.id){r.subscriptions.splice(e,1);break}}},this.subscriptions.push(i),i},e.idCounter=0,e}();t.Sub=r;var o=function(){function e(e){this.id=e}return e}();t.Subscription=o}]);