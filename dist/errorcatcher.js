!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=36)}({36:function(e,t,n){"use strict";var r=[];window.addEventListener("error",function(e){r.push(e.error+" | "+event.error.stack),function(e){if(0<e.length){e=e.filter(function(e){return null!=e});var t="";if(e.forEach(function(e){e=e.toString(),t+=e+" | "+window.location.href+" | Browser: "+navigator.userAgent}),0<t.length){var n=location.protocol+"//"+window.location.hostname+"/wp-json/chroma/ecollector/",r="client_error="+t,o=new XMLHttpRequest;o.open("POST",n,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),o.onreadystatechange=function(){4==this.readyState&&this.status},o.send(r)}}}(r)})}});