!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(t){var r=n(0),o=setTimeout;function i(){}function s(t){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function a(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,s._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void f(e.promise,t)}u(e.promise,r)}else(1===t._state?u:f)(e.promise,t._value)})):t._deferreds.push(e)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof s)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void l(function(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){f(t,e)}}function f(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&s._immediateFn(function(){t._handled||s._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,u(e,t))},function(t){n||(n=!0,f(e,t))})}catch(t){if(n)return;n=!0,f(e,t)}}s.prototype.catch=function(t){return this.then(null,t)},s.prototype.then=function(t,e){var n=new this.constructor(i);return a(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,n)),n},s.prototype.finally=r.a,s.all=function(t){return new s(function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){i(t,e)},n)}r[t]=s,0==--o&&e(r)}catch(t){n(t)}}for(var s=0;s<r.length;s++)i(s,r[s])})},s.resolve=function(t){return t&&"object"==typeof t&&t.constructor===s?t:new s(function(e){e(t)})},s.reject=function(t){return new s(function(e,n){n(t)})},s.race=function(t){return new s(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},s._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){o(t,0)},s._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=s}).call(this,n(14).setImmediate)},,,,,,,,,,function(t,e,n){"use strict";n(13),n(17);var r=[],o=function(t){return{log:function(e){t.log(e)},info:function(e){t.info(e)},warn:function(e){t.warn(e)},error:function(e){r.push(e),t.error(e)}}}(window.console);window.console=o;!function(){window.addEventListener("error",function(t){r.push(t.error)});var t=document.getElementsByClassName("adsbygoogle");void 0!==t&&t.length>0&&function(t){for(var e=0,n=t.length;e<n;e++)t[e].clientHeight<90&&(o.error("Low performing ad: Ad height below 90"),r.push("Low performing ad: Ad height below 90px | Parent Node Class & ID: "+t[e].parentNode.classList+" "+t[e].parentNode.id))}(t);window.setTimeout(function(){!function(t){if(t.length>0){var e="";if((t=t.filter(function(t){return null!=t})).forEach(function(t){t=t.toString(),e+=t+" | "+window.location.href+" | Browser Info: "+navigator.userAgent,o.log(e)}),e.length>0){var n=location.protocol+"//"+window.location.hostname+"/wp-json/chroma/ecollector/";fetch(n,{method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"client_error="+e}).then(function(t){t.json().then(function(t){o.log("EPS: "+t)})}).catch(function(t){o.log(t)})}}}(r)},2e3)}()},function(t,e,n){"use strict";n.r(e),function(t){var e=n(2),r=n(0),o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();"Promise"in o?o.Promise.prototype.finally||(o.Promise.prototype.finally=r.a):o.Promise=e.a}.call(this,n(1))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(15),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o=1,i={},s=!1,a=t.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(t);u=u&&u.setTimeout?u:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){c(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&c(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),r=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){c(t.data)},r=function(e){t.port2.postMessage(e)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var t=a.documentElement;r=function(e){var n=a.createElement("script");n.onreadystatechange=function(){c(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():r=function(t){setTimeout(c,0,t)},u.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var s={callback:t,args:e};return i[o]=s,r(o),o++},u.clearImmediate=f}function f(t){delete i[t]}function c(t){if(s)setTimeout(c,0,t);else{var e=i[t];if(e){s=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{f(t),s=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(1),n(16))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,f=[],c=!1,l=-1;function d(){c&&u&&(c=!1,u.length?f=u.concat(f):l=-1,f.length&&h())}function h(){if(!c){var t=a(d);c=!0;for(var e=f.length;e;){for(u=f,f=[];++l<e;)u&&u[l].run();l=-1,e=f.length}u=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new p(t,e)),1!==f.length||c||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};c.prototype.append=function(t,e){t=a(t),e=u(e);var n=this.map[t];this.map[t]=n?n+","+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=u(e)},c.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),f(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),f(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),f(t)},e.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];v.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=m,t.Response=v,t.fetch=function(t,n){return new Promise(function(r,o){var i=new m(t,n),s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:function(t){var e=new c;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;r(new v(e,t))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function h(t){var e=new FileReader,n=d(e);return e.readAsArrayBuffer(t),n}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&r(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=d(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(t,e){var n=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=function(t){var e=t.toUpperCase();return i.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)}]);