webpackJsonp([1],{"./node_modules/._riot@2.2.4@riot/riot.js":function(t,e,n){var o;!function(r,i){"use strict";function loopKeys(t){var e=b(0),n=t.trim().slice(e.length).match(/^\s*(\S+?)\s*(?:,\s*(\S+))?\s+in\s+(.+)$/);return n?{key:n[1],pos:n[2],val:e+n[3]}:{val:t}}function mkitem(t,e,n){var o={};return o[t.key]=e,t.pos&&(o[t.pos]=n),o}function _each(t,e,n){remAttr(t,"each");var o,r=getTagName(t),i=t.outerHTML,a=!!_[r],u=_[r]||{tmpl:i},s=t.parentNode,c=document.createComment("riot placeholder"),l=[],f=getTag(t);s.insertBefore(c,t),n=loopKeys(n),e.one("premount",function(){s.stub&&(s=e.root),t.parentNode.removeChild(t)}).on("update",function(){var i=w(n.val,e);v(i)||(o=i?JSON.stringify(i):"",i=i?Object.keys(i).map(function(t){return mkitem(n,t,i[t])}):[]);for(var p=document.createDocumentFragment(),d=l.length,g=i.length;d>g;)l[--d].unmount(),l.splice(d,1);for(d=0;d<g;++d){var h=!o&&n.key?mkitem(n,i[d],d):i[d];l[d]?l[d].update(h):((l[d]=new Tag(u,{parent:e,isLoop:!0,hasImpl:a,root:m.test(r)?s:t.cloneNode(),item:h},t.innerHTML)).mount(),p.appendChild(l[d].root)),l[d]._item=h}s.insertBefore(p,c),f&&(e.tags[r]=l)}).one("updated",function(){var t=Object.keys(e);walk(s,function(n){1!=n.nodeType||n.isLoop||n._looped||(n._visited=!1,n._looped=!0,setNamed(n,e,t))})})}function parseNamedElements(t,e,n){walk(t,function(t){if(1==t.nodeType){t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||t.getAttribute("each")?1:0;var o=getTag(t);o&&!t.isLoop&&n.push(initChildTag(o,t,e)),t.isLoop||setNamed(t,e,[])}})}function parseExpressions(t,e,n){function addExpr(t,e,o){if(e.indexOf(b(0))>=0){var r={dom:t,expr:e};n.push(extend(r,o))}}walk(t,function(t){var n=t.nodeType;if(3==n&&"STYLE"!=t.parentNode.tagName&&addExpr(t,t.nodeValue),1==n){var o=t.getAttribute("each");return o?(_each(t,e,o),!1):(each(t.attributes,function(e){var n=e.name,o=n.split("__")[1];if(addExpr(t,e.value,{attr:o||n,bool:o}),o)return remAttr(t,n),!1}),!getTag(t)&&void 0)}})}function Tag(t,e,n){function updateOpts(){var t=m&&d?o:c||o;each(_.attributes,function(e){r[e.name]=w(e.value,t)}),each(Object.keys(C),function(e){r[e]=w(C[e],t)})}function normalizeData(t){for(var e in h)typeof o[e]!==p&&(o[e]=t[e])}function inheritFromParent(){o.parent&&d&&each(Object.keys(o.parent),function(t){var e=!~g.indexOf(t)&&~N.indexOf(t);(typeof o[t]===p||e)&&(e||N.push(t),o[t]=o.parent[t])})}function toggle(t){if(each(j,function(e){e[t?"mount":"unmount"]()}),c){var e=t?"on":"off";d?c[e]("unmount",o.unmount):c[e]("update",o.update)[e]("unmount",o.unmount)}}var o=a.observable(this),r=inherit(e.opts)||{},s=T(t.tmpl),c=e.parent,d=e.isLoop,m=e.hasImpl,h=cleanUpData(e.item),y=[],j=[],_=e.root,x=t.fn,k=_.tagName.toLowerCase(),C={},N=[];x&&_._tag&&_._tag.unmount(!0),this.isMounted=!1,_.isLoop=d,_._tag=this,this._id=u++,extend(this,{parent:c,root:_,opts:r,tags:{}},h),each(_.attributes,function(t){var e=t.value;b(/{.*}/).test(e)&&(C[t.name]=e)}),s.innerHTML&&!/^(select|optgroup|table|tbody|tr|col(?:group)?)$/.test(k)&&(s.innerHTML=replaceYield(s.innerHTML,n)),this.update=function(t){t=cleanUpData(t),inheritFromParent(),t&&typeof h===f&&(normalizeData(t),h=t),extend(o,t),updateOpts(),o.trigger("update",t),update(y,o),o.trigger("updated")},this.mixin=function(){each(arguments,function(t){t=typeof t===l?a.mixin(t):t,each(Object.keys(t),function(e){"init"!=e&&(o[e]=isFunction(t[e])?t[e].bind(o):t[e])}),t.init&&t.init.bind(o)()})},this.mount=function(){if(updateOpts(),x&&x.call(o,r),parseExpressions(s,o,y),toggle(!0),(t.attrs||m)&&(walkAttributes(t.attrs,function(t,e){_.setAttribute(t,e)}),parseExpressions(o.root,o,y)),o.parent&&!d||o.update(h),o.trigger("premount"),d&&!m)o.root=_=s.firstChild;else{for(;s.firstChild;)_.appendChild(s.firstChild);_.stub&&(o.root=_=c.root)}!o.parent||o.parent.isMounted?(o.isMounted=!0,o.trigger("mount")):o.parent.one("mount",function(){isInStub(o.root)||(o.parent.isMounted=o.isMounted=!0,o.trigger("mount"))})},this.unmount=function(t){var e,n=_,r=n.parentNode;if(r){if(c)e=getImmediateCustomParentTag(c),v(e.tags[k])?each(e.tags[k],function(t,n){t._id==o._id&&e.tags[k].splice(n,1)}):e.tags[k]=i;else for(;n.firstChild;)n.removeChild(n.firstChild);t?r.removeAttribute("riot-tag"):r.removeChild(n)}o.trigger("unmount"),toggle(),o.off("*"),_._tag=null},parseNamedElements(s,this,j)}function setEventHandler(t,e,n,o){n[t]=function(t){var i,a=o._item,u=o.parent;if(!a)for(;u&&!a;)a=u._item,u=u.parent;t=t||r.event;try{t.currentTarget=n,t.target||(t.target=t.srcElement),t.which||(t.which=t.charCode||t.keyCode)}catch(s){}t.item=a,!0===e.call(o,t)||/radio|check/.test(n.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(i=a?getImmediateCustomParentTag(u):o,i.update())}}function insertTo(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function update(t,e){each(t,function(t,n){var o=t.dom,r=t.attr,i=w(t.expr,e),a=t.dom.parentNode;if(t.bool?i=!!i&&r:null==i&&(i=""),a&&"TEXTAREA"==a.tagName&&(i=(""+i).replace(/riot-/g,"")),t.value!==i){if(t.value=i,!r)return void(o.nodeValue=""+i);if(remAttr(o,r),isFunction(i))setEventHandler(r,i,o,e);else if("if"==r){var u=t.stub,l=function(){insertTo(o.parentNode,o,u)};i?u&&(!function(){insertTo(u.parentNode,u,o)}(),o.inStub=!1,isInStub(o)||walk(o,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(u=t.stub=u||document.createTextNode(""),o.parentNode?l():(e.parent||e).one("updated",l),o.inStub=!0)}else if(/^(show|hide)$/.test(r))"hide"==r&&(i=!i),o.style.display=i?"":"none";else if("value"==r)o.value=i;else if(startsWith(r,s)&&r!=c)i&&o.setAttribute(r.slice(s.length),i);else{if(t.bool&&(o[r]=i,!i))return;typeof i!==f&&o.setAttribute(r,i)}}})}function each(t,e){for(var n,o=0,r=(t||[]).length;o<r;o++)null!=(n=t[o])&&!1===e(n,o)&&o--;return t}function isFunction(t){return typeof t===d||!1}function remAttr(t,e){t.removeAttribute(e)}function getTag(t){return t.tagName&&_[t.getAttribute(c)||t.tagName.toLowerCase()]}function initChildTag(t,e,n){var o,r=new Tag(t,{root:e,parent:n},e.innerHTML),i=getTagName(e),a=getImmediateCustomParentTag(n);return r.parent=a,o=a.tags[i],o?(v(o)||(a.tags[i]=[o]),~a.tags[i].indexOf(r)||a.tags[i].push(r)):a.tags[i]=r,e.innerHTML="",r}function getImmediateCustomParentTag(t){for(var e=t;!getTag(e.root)&&e.parent;)e=e.parent;return e}function getTagName(t){var e=getTag(t),n=t.getAttribute("name");return n&&n.indexOf(b(0))<0?n:e?e.name:t.tagName.toLowerCase()}function extend(t){for(var e,n=arguments,o=1;o<n.length;++o)if(e=n[o])for(var r in e)t[r]=e[r];return t}function cleanUpData(t){if(!(t instanceof Tag||t&&typeof t.trigger==d))return t;var e={};for(var n in t)~g.indexOf(n)||(e[n]=t[n]);return e}function walk(t,e){if(t){if(!1===e(t))return;for(t=t.firstChild;t;)walk(t,e),t=t.nextSibling}}function walkAttributes(t,e){for(var n,o=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=o.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function isInStub(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function mkEl(t){return document.createElement(t)}function replaceYield(t,e){return t.replace(/<(yield)\/?>(<\/\1>)?/gi,e||"")}function $$(t,e){return(e||document).querySelectorAll(t)}function $(t,e){return(e||document).querySelector(t)}function inherit(t){function Child(){}return Child.prototype=t,new Child}function setNamed(t,e,n){if(!t._visited){var o,r=t.getAttribute("id")||t.getAttribute("name");r&&(n.indexOf(r)<0&&(o=e[r],o?v(o)?o.push(t):e[r]=[o,t]:e[r]=t),t._visited=!0)}}function startsWith(t,e){return t.slice(0,e.length)===e}function injectStyle(t){if(!a.render){y||(y=mkEl("style"),y.setAttribute("type","text/css"));var e=document.head||document.getElementsByTagName("head")[0];if(y.styleSheet?y.styleSheet.cssText+=t:y.innerHTML+=t,!y._rendered)if(y.styleSheet)document.body.appendChild(y);else{var n=$("style[type=riot]");n?(n.parentNode.insertBefore(y,n),n.parentNode.removeChild(n)):e.appendChild(y)}y._rendered=!0}}function mountTo(t,e,n){var o=_[e],r=t._innerHTML=t._innerHTML||t.innerHTML;if(t.innerHTML="",o&&t&&(o=new Tag(o,{root:t,opts:n},r)),o&&o.mount)return o.mount(),j.push(o),o.on("unmount",function(){j.splice(j.indexOf(o),1)})}var a={version:"v2.2.4",settings:{}},u=0,s="riot-",c=s+"tag",l="string",f="object",p="undefined",d="function",m=/^(?:opt(ion|group)|tbody|col|t[rhd])$/,g=["_item","_id","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],h=0|(r&&r.document||{}).documentMode,v=Array.isArray;a.observable=function(t){t=t||{};var e={},n=0;return t.on=function(o,r){return isFunction(r)&&(typeof r.id===p&&(r._id=n++),o.replace(/\S+/g,function(t,n){(e[t]=e[t]||[]).push(r),r.typed=n>0})),t},t.off=function(n,o){return"*"==n?e={}:n.replace(/\S+/g,function(t){if(o)for(var n,r=e[t],i=0;n=r&&r[i];++i)n._id==o._id&&r.splice(i--,1);else e[t]=[]}),t},t.one=function(e,n){function on(){t.off(e,on),n.apply(t,arguments)}return t.on(e,on)},t.trigger=function(n){for(var o,r=[].slice.call(arguments,1),i=e[n]||[],a=0;o=i[a];++a)o.busy||(o.busy=1,o.apply(t,o.typed?[n].concat(r):r),i[a]!==o&&a--,o.busy=0);return e.all&&"all"!=n&&t.trigger.apply(t,["all",n].concat(r)),t},t},a.mixin=function(){var t={};return function(e,n){if(!n)return t[e];t[e]=n}}(),function(t,e,n){function hash(){return r.href.split("#")[1]||""}function parser(t){return t.split("/")}function emit(t){t.type&&(t=hash()),t!=o&&(i.trigger.apply(null,["H"].concat(parser(t))),o=t)}if(n){var o,r=n.location,i=t.observable(),a=!1,u=t.route=function(t){t[0]?(r.hash=t,emit(t)):i.on("H",t)};u.exec=function(t){t.apply(null,parser(hash()))},u.parser=function(t){parser=t},u.stop=function(){a&&(n.removeEventListener?n.removeEventListener(e,emit,!1):n.detachEvent("on"+e,emit),i.off("*"),a=!1)},u.start=function(){a||(n.addEventListener?n.addEventListener(e,emit,!1):n.attachEvent("on"+e,emit),a=!0)},u.start()}}(a,"hashchange",r);var y,b=function(t){var e,n,o,r=/[{}]/g;return function(t){var i=a.settings.brackets||"{ }";return e!==i&&(e=i,o=i.split(" "),n=o.map(function(t){return t.replace(/(?=.)/g,"\\")})),t instanceof RegExp?"{ }"===i?t:new RegExp(t.source.replace(r,function(t){return n[~~("}"===t)]}),t.global?"g":""):o[t]}}(),w=function(){function tmpl(t,e){return t.indexOf(b(0))<0?(t=t.replace(/\n|\r\n?/g,"\n"),function(){return t}):(t=t.replace(b(/\\{/g),"￰").replace(b(/\\}/g),"￱"),e=split(t,extract(t,b(/{/),b(/}/))),t=2!==e.length||e[0]?"["+e.map(function(t,e){return e%2?expr(t,!0):'"'+t.replace(/\n|\r\n?/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")':expr(e[1]),new Function("d","return "+t.replace(/\uFFF0/g,b(0)).replace(/\uFFF1/g,b(1))+";"))}function expr(t,e){return t=t.replace(/\n|\r\n?/g," ").replace(b(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),""),/^\s*[\w- "']+ *:/.test(t)?"["+extract(t,/["' ]*[\w- ]+["' ]*:/,/,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(t){return t.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/,function(t,e,n){return n.replace(/[^&|=!><]+/g,wrap)+'?"'+e+'":"",'})}).join("")+'].join(" ").trim()':wrap(t,e)}function wrap(t,o){return t=t.trim(),t?"(function(v){try{v="+t.replace(n,function(t,n,o){return o?'(("'+o+e+o+")":t})+"}catch(e){}return "+(!0===o?'!v&&v!==0?"":v':"v")+"}).call(d)":""}function split(t,e){var n=[];return e.map(function(e,o){o=t.indexOf(e),n.push(t.slice(0,o),e),t=t.slice(o+e.length)}),t&&n.push(t),n}function extract(t,e,n){var o,r=0,i=[],a=new RegExp("("+e.source+")|("+n.source+")","g");return t.replace(a,function(e,n,a,u){!r&&n&&(o=u),(r+=n?1:-1)||null==a||i.push(t.slice(o,u+a.length))}),i}var t={},e='"in d?d:'+(r?"window).":"global)."),n=/(['"\/])(?:[^\\]*?|\\.|.)*?\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function\s*\()|([A-Za-z_$]\w*)/g;return function(e,n){return e&&(t[e]||(t[e]=tmpl(e)))(n)}}(),T=function(t){function _mkdom(o){var r=o&&o.match(/^\s*<([-\w]+)/),i=r&&r[1].toLowerCase(),a=e[i]||n,u=mkEl(a);return u.stub=!0,t&&i&&(r=i.match(m))?ie9elem(u,o,i,!!r[1]):u.innerHTML=o,u}function ie9elem(t,e,o,r){var i,a=mkEl(n),u=r?"select>":"table>";a.innerHTML="<"+u+e+"</"+u,(i=a.getElementsByTagName(o)[0])&&t.appendChild(i)}var e={"tr":"tbody","th":"tr","td":"tr","tbody":"table","col":"colgroup"},n="div";return t=t&&t<10,_mkdom}(h),j=[],_={};a.tag=function(t,e,n,o,r){return isFunction(o)&&(r=o,/^[\w\-]+\s?=/.test(n)?(o=n,n=""):o=""),n&&(isFunction(n)?r=n:injectStyle(n)),_[t]={name:t,tmpl:e,attrs:o,fn:r},t},a.mount=function(t,e,n){function addRiotTags(t){var e="";return each(t,function(t){e+=", *["+c+'="'+t.trim()+'"]'}),e}function selectAllTags(){var t=Object.keys(_);return t+addRiotTags(t)}function pushTags(t){var o;if(t.tagName){!e||(o=t.getAttribute(c))&&o==e||t.setAttribute(c,e);var r=mountTo(t,e||t.getAttribute(c)||t.tagName.toLowerCase(),n);r&&i.push(r)}else t.length&&each(t,pushTags)}var o,r,i=[];if(typeof e===f&&(n=e,e=0),typeof t===l?("*"===t?t=r=selectAllTags():t+=addRiotTags(t.split(",")),o=$$(t)):o=t,"*"===e){if(e=r||selectAllTags(),o.tagName)o=$$(e,o);else{var a=[];each(o,function(t){a.push($$(e,t))}),o=a}e=0}return o.tagName?pushTags(o):each(o,pushTags),i},a.update=function(){return each(j,function(t){t.update()})},a.mountTo=a.mount,a.util={brackets:b,tmpl:w},typeof e===f?t.exports=a:(o=function(){return r.riot=a}.call(e,n,e,t))!==i&&(t.exports=o)}("undefined"!=typeof window?window:void 0)},"./src/js/common/header.js":function(t,e,n){var o=$(".header");({login:null,init:function(){this.interActive()},interActive:function(){var t=this;o.find(".login").on("click",function(e){n.e(0).then(n.bind(null,"./src/js/components/login.js")).then(function(e){t.login||(t.login=new e["default"]),console.log(t.login),t.login.show({onShow:function(){console.log("顶部登录-----显示登录弹窗")},onHide:function(){console.log("顶部登录-----关闭登录弹窗")},onSuccess:function(t){console.log(t),console.log("顶部登录-----登录成功")}})})["catch"](function(t){alert(t)})})}}).init()},"./src/js/common/test.js":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.datalist=void 0;var o=["html5","css3","jquery"];e.datalist=o;var r={str:"hello"};e["default"]=r},"./src/js/page/index.js":function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}n("./src/style/page/index.less");var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e["default"]=t,e}(n("./src/js/common/test.js"));n("./src/js/common/header.js");var r=_interopRequireDefault(n("./src/js/utils/jsonp.js")),i=_interopRequireDefault(n("./node_modules/._riot@2.2.4@riot/riot.js"));n("./src/js/riot/todo.tag"),console.log(i["default"]),console.log("--------------------------test-------------------------------"),console.log($.fn.jquery),console.log(o["default"].str),console.log(o.datalist),console.log("--------------------------test-------------------------------"),i["default"].mount("todo",{first:"first",last:"last"}),{init:function(){this.getNewsList()},getNewsList:function(){(0,r["default"])("https://pcflow.dftoutiao.com/toutiaopc_jrtt/newspool",{params:{type:"toutiao",startkey:null,newkey:"|",pgnum:2,pageSize:50,uid:"15373237235528933",qid:"jrttnull",position:"%E4%B8%8A%E6%B5%B7",domain:"kktt",sclog:1},timeout:8e3}).then(function(t){if(t.data)for(var e=0,n=t.data.length;e<n;e++){var o=t.data[e];$("#newspool").append('\n\t\t\t\t\t\t<div class="item">\n\t\t\t\t\t\t\t<h2>'.concat(o.topic,"</h2>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t"))}})["catch"](function(t){console.error(t)})}}.init()},"./src/js/riot/todo.tag":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("./node_modules/._riot@2.2.4@riot/riot.js");n.n(o).a.tag("todo","<h1>{ opts.last }, { opts.first }</h1>",function(t){})},"./src/js/utils/jsonp.js":function(t,e,n){"use strict";function generateCallbackFunction(){return"jsonp_".concat(Date.now(),"_").concat(Math.ceil(1e5*Math.random()))}function formatParams(t){var e=[];return Object.keys(t).forEach(function(n){e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]))}),e.join("&")}function clearFunction(t){try{delete window[t]}catch(e){window[t]=undefined}}function removeScript(t){var e=document.getElementById(t);document.getElementsByTagName("head")[0].removeChild(e)}function fetchJsonp(t){var e,n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},r=t,i=n.timeout||o.timeout,a=n.jsonpCallback||o.jsonpCallback,u=n.params||o.params,s=formatParams(u);return new Promise(function(o,u){var c=n.jsonpCallbackFunction||generateCallbackFunction(),l="".concat(a,"_").concat(c);window[c]=function(t){o(t),e&&clearTimeout(e),removeScript(l),clearFunction(c)},r+=/\?/.test(r)?"&":"?",s&&(r+=s+"&");var f=document.createElement("script");f.setAttribute("src","".concat(r).concat(a,"=").concat(c)),f.id=l,document.getElementsByTagName("head")[0].appendChild(f),e=setTimeout(function(){u(new Error("JSONP request to ".concat(t," timed out"))),clearFunction(c),removeScript(l)},i)})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var o={timeout:8e3,jsonpCallback:"callback",jsonpCallbackFunction:null,params:{}},r=fetchJsonp;e["default"]=r},"./src/style/page/index.less":function(t,e){}},["./src/js/page/index.js"]);