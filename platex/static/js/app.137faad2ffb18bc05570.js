webpackJsonp([0],{"+PG1":function(e,t,n){"use strict";var r=n("dV09"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},"1b9j":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},"2o5/":function(e,t){},"5N42":function(e,t,n){"use strict";var r=n("+PG1");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,function(e){void 0!==t[e]&&(n[e]=t[e])}),r.forEach(i,function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])}),r.forEach(s,function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])});var a=o.concat(i).concat(s),c=Object.keys(t).filter(function(e){return-1===a.indexOf(e)});return r.forEach(c,function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}),n}},"5kUH":function(e,t,n){"use strict";var r=n("+PG1");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},"7xuW":function(e,t,n){"use strict";var r=n("+PG1"),o=n("dV09"),i=n("YdhZ"),s=n("5N42");function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=a(n("AtQ2"));c.Axios=i,c.create=function(e){return a(s(c.defaults,e))},c.Cancel=n("KrN5"),c.CancelToken=n("jSpU"),c.isCancel=n("qScO"),c.all=function(e){return Promise.all(e)},c.spread=n("nWC+"),e.exports=c,e.exports.default=c},AtQ2:function(e,t,n){"use strict";(function(t){var r=n("+PG1"),o=n("GAp0"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n("EkTC"):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(a=n("EkTC")),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(i)}),e.exports=c}).call(t,n("W2nU"))},EkTC:function(e,t,n){"use strict";var r=n("+PG1"),o=n("XDDo"),i=n("gUcI"),s=n("oNfX"),a=n("Jxjz"),c=n("bW6l"),u=n("ZLEd");e.exports=function(e){return new Promise(function(t,f){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+m)}var g=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,f,r),p=null}},p.onabort=function(){p&&(f(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n("jNbf"),y=(e.withCredentials||c(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},GAp0:function(e,t,n){"use strict";var r=n("+PG1");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},Jxjz:function(e,t,n){"use strict";var r=n("+PG1"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},KrN5:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App",methods:{}},o,!1,function(e){n("wJtV")},null,null).exports,s=n("/ocq"),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"bn-container"},[n("div",{staticClass:"bn-grid"},e._l(e.piclist,function(t){return n("a",{key:t.name,class:"bn-item bn-item-enter bn-group--7 bn-item-"+t.size,staticStyle:{opacity:"1"},on:{click:function(n){return e.getTex(t)}}},[n("div",{staticClass:"bn-item-inner"},[n("div",{staticClass:"bn-item-img",staticStyle:{"background-image":"linear-gradient(90deg, #26232C 0%, #26232C 100%))"}},[n("img",{staticStyle:{opacity:"1"},attrs:{src:"static/image/"+t.name}})])])])}),0)])])},staticRenderFns:[]};var c=n("VU/8")({name:"PicGallery",components:{},data:function(){return{}},props:["piclist"],computed:{},mounted:function(){},methods:{getTex:function(e){this.$emit("requestTexid",e)}}},a,!1,function(e){n("tFKt")},"data-v-3c4d8f93",null).exports,u={name:"TexEditor",data:function(){return{marginleft:(window.innerWidth-800)/2,aceobj:null}},props:["acecontent"],components:{editor:n("o4sT")},mounted:function(){this.aceobj=window.ace.edit("id_ace")},methods:{stopevent:function(e){e.stopPropagation()},editorInit:function(){n("hCU/"),n("ZHoJ"),n("Dukv")},copy2clipboard:function(){var e=this.aceobj,t=e.selection.toJSON();e.selectAll(),e.focus(),document.execCommand("copy"),e.selection.fromJSON(t)},downloadpic:function(){var e=this.currentPicTag.name,t=document.createElement("a");t.href="static/image/"+e,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)},downtexfile:function(){this.saveTextAsFile(this.acecontent,"classviva-latex.tex")},saveTextAsFile:function(e,t){var n=new Blob([e],{type:"text/plain"}),r=window.URL.createObjectURL(n),o=t,i=document.createElement("a");i.download=o,i.href=r,document.body.appendChild(i),i.click()}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("editor",{staticClass:"editor",style:{marginLeft:e.marginleft+"px"},attrs:{id:"id_ace",readonly:"true",lang:"latex",theme:"chrome"},on:{init:e.editorInit},model:{value:e.acecontent,callback:function(t){e.acecontent=t},expression:"acecontent"}})],1)},staticRenderFns:[]};var d=n("VU/8")(u,f,!1,function(e){n("iqdo")},"data-v-12415403",null).exports,l=n("P6gK"),p=n.n(l),h={name:"Main",components:{PicGallery:c,TexEditor:d},data:function(){return{piclist:[],data:[],options:[],filterparams:[],marginleft:0,currentPage:1,searchtag:"",showetagditor:!1,showeditor:!1,acecontent:""}},computed:{},mounted:function(){var e=this;window.addEventListener("scroll",this.onScroll),this.updateLoadMore(),p.a.get("https://weihuan.tech/platex/static/json/data.json").then(function(t){e.data=t.data.data,e.updateLoadMore()})},methods:{getTexfile:function(e){var t=this;p.a.get("https://weihuan.tech/platex/static/tex/"+e.name.replace(".png",".tex")).then(function(e){t.refreshACEeditor(e.data)})},refreshACEeditor:function(e){this.showeditor=!0,document.getElementsByTagName("html")[0].style.overflow="hidden",this.acecontent=e},hideEditor:function(e){"ace_content"===e.target.className||(this.showeditor=!1,document.getElementsByTagName("html")[0].style.overflow="auto")},updateLoadMore:function(){var e=this.data;this.piclist.length<e.length&&(this.piclist=e.slice(0,this.piclist.length+20>e.length?e.length:this.piclist.length+20)),this.stopfetch=!1},onScroll:function(e){!this.stopfetch&&Math.abs(document.getElementsByTagName("html")[0].scrollHeight-(window.scrollY+window.innerHeight))<2&&(this.currentPage+=1,this.stopfetch=!0,this.updateLoadMore())}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PicGallery",{attrs:{piclist:e.piclist},on:{requestTexid:e.getTexfile}}),e._v(" "),n("div",{on:{click:function(t){return e.hideEditor(t)}}},[e.showeditor?n("TexEditor",{staticClass:"texEdi",attrs:{acecontent:e.acecontent}}):e._e()],1)],1)},staticRenderFns:[]};var g=n("VU/8")(h,m,!1,function(e){n("2o5/")},"data-v-18613655",null).exports;r.a.use(s.a);var v=new s.a({routes:[{path:"/",name:"Main",component:g}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:v,components:{App:i},template:"<App/>"})},P6gK:function(e,t,n){e.exports=n("7xuW")},UTvS:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},XDDo:function(e,t,n){"use strict";var r=n("ZLEd");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},YdhZ:function(e,t,n){"use strict";var r=n("+PG1"),o=n("gUcI"),i=n("5kUH"),s=n("g/+5"),a=n("5N42");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=c},ZLEd:function(e,t,n){"use strict";var r=n("1b9j");e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},bW6l:function(e,t,n){"use strict";var r=n("+PG1");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},dV09:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},fU3y:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"g/+5":function(e,t,n){"use strict";var r=n("+PG1"),o=n("mWSD"),i=n("qScO"),s=n("AtQ2");function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},gUcI:function(e,t,n){"use strict";var r=n("+PG1");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},iqdo:function(e,t){},jNbf:function(e,t,n){"use strict";var r=n("+PG1");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},jSpU:function(e,t,n){"use strict";var r=n("KrN5");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},mWSD:function(e,t,n){"use strict";var r=n("+PG1");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"nWC+":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},oNfX:function(e,t,n){"use strict";var r=n("UTvS"),o=n("fU3y");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},qScO:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},tFKt:function(e,t){},wJtV:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.137faad2ffb18bc05570.js.map