// Copyright 2011 Google Inc. All Rights Reserved.
(function(){var l=this,m=function(a,b){for(var c=a.split("."),d=b||l,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==
c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},n=function(a){return"array"==aa(a)},ba=function(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"string"==typeof a},ca=function(a){return"function"==aa(a)},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea=function(a,
b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},ga=function(a,b,c){ga=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return ga.apply(null,arguments)},ha=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},q=function(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.R=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var r=function(a){return/^[\s\xa0]*$/.test(a)},ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},qa=function(a){if(!ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(la,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(na,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(oa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(pa,"&#0;"));return a},ka=/&/g,la=/</g,
ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,ja=/[\x00&<>"']/,t=function(a){return null==a?"":String(a)},ra=function(a,b){return a<b?-1:a>b?1:0},sa=2147483648*Math.random()|0;var u=Array.prototype,ta=u.indexOf?function(a,b,c){return u.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=u.forEach?function(a,b,c){u.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=u.some?function(a,b,c){return u.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):
a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},wa=function(a){var b=va;a:{for(var c=b.length,d=p(b)?b.split(""):b,e=0;e<c;e++)if(e in d&&a.call(void 0,d[e],e,b)){a=e;break a}a=-1}return 0>a?null:p(b)?b.charAt(a):b[a]},xa=function(a){return u.concat.apply(u,arguments)},ya=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var za=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},Aa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ba=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Aa.length;f++)c=Aa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Ca=function(a){var b=arguments.length;if(1==b&&n(arguments[0]))return Ca.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};Ca("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var Da="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Ea=function(){};Ea.prototype.next=function(){throw Da;};Ea.prototype.j=function(){return this};var x=function(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)w(this,arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof x)e=a.w(),d=a.m();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)w(this,e[c],d[c])}};x.prototype.m=function(){Fa(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
x.prototype.w=function(){Fa(this);return this.a.concat()};var Fa=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];y(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],y(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}},z=function(a,b){return y(a.b,b)?a.b[b]:void 0},w=function(a,b,c){y(a.b,b)||(a.f++,a.a.push(b),a.g++);a.b[b]=c};
x.prototype.forEach=function(a,b){for(var c=this.w(),d=0;d<c.length;d++){var e=c[d];a.call(b,z(this,e),e,this)}};x.prototype.clone=function(){return new x(this)};x.prototype.j=function(a){Fa(this);var b=0,c=this.g,d=this,e=new Ea;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Da;var e=d.a[b++];return a?e:d.b[e]};return e};var y=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var A;a:{var Ga=l.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){A=Ha;break a}}A=""};var Ia=-1!=A.indexOf("Opera")||-1!=A.indexOf("OPR"),B=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"),Ja=-1!=A.indexOf("Edge"),C=-1!=A.indexOf("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge"))&&!(-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"))&&-1==A.indexOf("Edge"),Ka=-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge"),La=function(){var a=A;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ja)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(Ka)return/WebKit\/(\S+)/.exec(a)},Ma=function(){var a=l.document;return a?a.documentMode:void 0},Na=function(){if(Ia&&l.opera){var a=l.opera.version;return ca(a)?a():a}var a="",b=La();b&&(a=b?b[1]:"");return B&&(b=Ma(),b>parseFloat(a))?String(b):a}(),Oa={},D=function(a){var b;if(!(b=Oa[a])){b=0;for(var c=ia(String(Na)).split("."),d=ia(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),dc=RegExp("(\\d*)(\\D*)","g");do{var T=
k.exec(g)||["","",""],U=dc.exec(h)||["","",""];if(0==T[0].length&&0==U[0].length)break;b=ra(0==T[1].length?0:parseInt(T[1],10),0==U[1].length?0:parseInt(U[1],10))||ra(0==T[2].length,0==U[2].length)||ra(T[2],U[2])}while(0==b)}b=Oa[a]=0<=b}return b},Pa=l.document,Qa=Pa&&B?Ma()||("CSS1Compat"==Pa.compatMode?parseInt(Na,10):5):void 0;var Ra=!B||9<=Qa;!C&&!B||B&&9<=Qa||C&&D("1.9.1");B&&D("9");var Ta=function(a,b){za(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Sa.hasOwnProperty(d)?a.setAttribute(Sa[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Sa={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Va=function(a,b,c){var d=arguments,
e=document,f=d[0],g=d[1];if(!Ra&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',qa(g.name),'"');if(g.type){f.push(' type="',qa(g.type),'"');var h={};Ba(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(p(g)?f.className=g:n(g)?f.className=g.join(" "):Ta(f,g));2<d.length&&Ua(e,f,d);return f},Ua=function(a,b,c){function d(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ba(f)||da(f)&&0<f.nodeType?d(f):v(Wa(f)?ya(f):f,d)}},Wa=function(a){if(a&&
"number"==typeof a.length){if(da(a))return"function"==typeof a.item||"string"==typeof a.item;if(ca(a))return"function"==typeof a.item}return!1};var E=function(){this.j=this.j;this.g=this.g};E.prototype.j=!1;E.prototype.F=function(){this.j||(this.j=!0,this.a())};var Xa=function(a,b){a.j?b.call(void 0):(a.g||(a.g=[]),a.g.push(b))};E.prototype.a=function(){if(this.g)for(;this.g.length;)this.g.shift()()};var Ya=function(a){a&&"function"==typeof a.F&&a.F()};var Za=function(a){Za[" "](a);return a};Za[" "]=function(){};var $a=!B||9<=Qa,ab=B&&!D("9");!Ka||D("528");C&&D("1.9b")||B&&D("8")||Ia&&D("9.5")||Ka&&D("528");C&&!D("8")||B&&D("9");var F=function(a,b){this.type=a;this.a=this.target=b;this.L=!0};F.prototype.f=function(){this.L=!1};var G=function(a,b){F.call(this,a?a.type:"");this.b=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&C)try{Za(c.nodeName)}catch(d){}this.b=a;a.defaultPrevented&&this.f()}};q(G,F);G.prototype.f=function(){G.B.f.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ab)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var bb="closure_listenable_"+(1E6*Math.random()|0),H=function(a){return!(!a||!a[bb])},cb=0;var db=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.D=!!d;this.G=e;this.J=++cb;this.u=this.C=!1},eb=function(a){a.u=!0;a.listener=null;a.a=null;a.src=null;a.G=null};var fb=function(a){this.src=a;this.a={};this.b=0},hb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=gb(b,c,e,f);-1<h?(a=b[h],d||(a.C=!1)):(a=new db(c,a.src,g,!!e,f),a.C=d,b.push(a));return a},ib=function(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ta(d,b),f;(f=0<=e)&&u.splice.call(d,e,1);f&&(eb(b),0==a.a[c].length&&(delete a.a[c],a.b--))}},jb=function(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=gb(a,c,d,e));return-1<b?a[b]:null},gb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=
a[e];if(!f.u&&f.listener==b&&f.D==!!c&&f.G==d)return e}return-1};var kb="closure_lm_"+(1E6*Math.random()|0),lb={},mb=0,nb=function(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)nb(a,b[f],c,d,e);return null}c=ob(c);return H(a)?a.f(b,c,d,e):pb(a,b,c,!1,d,e)},pb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=I(a);h||(a[kb]=h=new fb(a));c=hb(h,b,c,d,e,f);if(c.a)return c;d=qb();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(rb(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
mb++;return c},qb=function(){var a=sb,b=$a?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},tb=function(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)tb(a,b[f],c,d,e);return null}c=ob(c);return H(a)?hb(a.o,String(b),c,!0,d,e):pb(a,b,c,!0,d,e)},ub=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)ub(a,b[f],c,d,e);else c=ob(c),H(a)?a.I(b,c,d,e):a&&(a=I(a))&&(b=jb(a,b,c,!!d,e))&&J(b)},J=function(a){if("number"!=typeof a&&a&&!a.u){var b=
a.src;if(H(b))ib(b.o,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.D):b.detachEvent&&b.detachEvent(rb(c),d);mb--;(c=I(b))?(ib(c,a),0==c.b&&(c.src=null,b[kb]=null)):eb(a)}}},rb=function(a){return a in lb?lb[a]:lb[a]="on"+a},wb=function(a,b,c,d){var e=!0;if(a=I(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.D==c&&!f.u&&(f=vb(f,d),e=e&&!1!==f)}return e},vb=function(a,b){var c=a.listener,d=a.G||a.src;a.C&&J(a);return c.call(d,b)},sb=function(a,
b){if(a.u)return!0;if(!$a){var c=b||m("window.event"),d=new G(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.a;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;0<=h;h--){d.a=c[h];var k=wb(c[h],f,!0,d),e=e&&k}for(h=0;h<c.length;h++)d.a=c[h],k=wb(c[h],f,!1,d),e=e&&k}return e}return vb(a,new G(b,this))},I=function(a){a=a[kb];return a instanceof fb?a:null},xb="__closure_events_fn_"+
(1E9*Math.random()>>>0),ob=function(a){if(ca(a))return a;a[xb]||(a[xb]=function(b){return a.handleEvent(b)});return a[xb]};var K=function(a){E.call(this);this.l=a;this.h={}};q(K,E);var yb=[];K.prototype.f=function(a,b,c,d){n(b)||(b&&(yb[0]=b.toString()),b=yb);for(var e=0;e<b.length;e++){var f=nb(a,b[e],c||this.handleEvent,d||!1,this.l||this);if(!f)break;this.h[f.J]=f}return this};
K.prototype.I=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)this.I(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.l||this,c=ob(c),d=!!d,b=H(a)?jb(a.o,String(b),c,d,e):a?(a=I(a))?jb(a,b,c,d,e):null:null,b&&(J(b),delete this.h[b.J]);return this};var zb=function(a){za(a.h,function(a,c){this.h.hasOwnProperty(c)&&J(a)},a);a.h={}};K.prototype.a=function(){K.B.a.call(this);zb(this)};K.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var Ab=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,Cb=function(a){if(Bb){Bb=!1;var b=l.location;if(b){var c=b.href;if(c&&(c=(c=Cb(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw Bb=!0,Error();}}return a.match(Ab)},Bb=Ka,Db=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};var L=function(a,b){this.g=this.l=this.a="";this.i=null;this.j=this.h="";this.b=!1;var c;a instanceof L?(this.b=void 0!==b?b:a.b,Eb(this,a.a),this.l=a.l,this.g=a.g,Fb(this,a.i),this.h=a.h,Gb(this,a.f.clone()),this.j=a.j):a&&(c=Cb(String(a)))?(this.b=!!b,Eb(this,c[1]||"",!0),this.l=M(c[2]||""),this.g=M(c[3]||"",!0),Fb(this,c[4]),this.h=M(c[5]||"",!0),Gb(this,c[6]||"",!0),this.j=M(c[7]||"")):(this.b=!!b,this.f=new N(null,0,this.b))};
L.prototype.toString=function(){var a=[],b=this.a;b&&a.push(Hb(b,Ib,!0),":");if(b=this.g){a.push("//");var c=this.l;c&&a.push(Hb(c,Ib,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.i;null!=b&&a.push(":",String(b))}if(b=this.h)this.g&&"/"!=b.charAt(0)&&a.push("/"),a.push(Hb(b,"/"==b.charAt(0)?Jb:Kb,!0));(b=this.f.toString())&&a.push("?",b);(b=this.j)&&a.push("#",Hb(b,Lb));return a.join("")};L.prototype.clone=function(){return new L(this)};
var Eb=function(a,b,c){a.a=c?M(b,!0):b;a.a&&(a.a=a.a.replace(/:$/,""))},Fb=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null},Gb=function(a,b,c){b instanceof N?(a.f=b,Mb(a.f,a.b)):(c||(b=Hb(b,Nb)),a.f=new N(b,0,a.b))},Ob=function(a){return a.j},M=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Hb=function(a,b,c){return p(a)?(a=encodeURI(a).replace(b,Pb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},
Pb=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ib=/[#\/\?@]/g,Kb=/[\#\?:]/g,Jb=/[\#\?]/g,Nb=/[\#\?@]/g,Lb=/#/g,N=function(a,b,c){this.f=this.a=null;this.b=a||null;this.g=!!c},O=function(a){a.a||(a.a=new x,a.f=0,a.b&&Db(a.b,function(b,c){var d=decodeURIComponent(b.replace(/\+/g," "));O(a);a.b=null;var d=P(a,d),e=z(a.a,d);e||w(a.a,d,e=[]);e.push(c);a.f++}))},Qb=function(a,b){O(a);b=P(a,b);if(y(a.a.b,b)){a.b=null;a.f-=z(a.a,b).length;var c=a.a;y(c.b,b)&&(delete c.b[b],
c.f--,c.g++,c.a.length>2*c.f&&Fa(c))}},Rb=function(a,b){O(a);b=P(a,b);return y(a.a.b,b)};N.prototype.w=function(){O(this);for(var a=this.a.m(),b=this.a.w(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};N.prototype.m=function(a){O(this);var b=[];if(p(a))Rb(this,a)&&(b=xa(b,z(this.a,P(this,a))));else{a=this.a.m();for(var c=0;c<a.length;c++)b=xa(b,a[c])}return b};
N.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";for(var a=[],b=this.a.w(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.m(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.b=a.join("&")};N.prototype.clone=function(){var a=new N;a.b=this.b;this.a&&(a.a=this.a.clone(),a.f=this.f);return a};
var P=function(a,b){var c=String(b);a.g&&(c=c.toLowerCase());return c},Mb=function(a,b){b&&!a.g&&(O(a),a.b=null,a.a.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(Qb(this,b),Qb(this,e),0<a.length&&(this.b=null,w(this.a,P(this,e),ya(a)),this.f+=a.length))},a));a.g=b};var Q=function(){E.call(this);this.o=new fb(this);this.O=this;this.A=null};q(Q,E);Q.prototype[bb]=!0;Q.prototype.addEventListener=function(a,b,c,d){nb(this,a,b,c,d)};Q.prototype.removeEventListener=function(a,b,c,d){ub(this,a,b,c,d)};
var Tb=function(a,b){var c,d=a.A;if(d)for(c=[];d;d=d.A)c.push(d);var d=a.O,e=b,f=e.type||e;if(p(e))e=new F(e,d);else if(e instanceof F)e.target=e.target||d;else{var g=e,e=new F(f,d);Ba(e,g)}var g=!0,h;if(c)for(var k=c.length-1;0<=k;k--)h=e.a=c[k],g=Sb(h,f,!0,e)&&g;h=e.a=d;g=Sb(h,f,!0,e)&&g;g=Sb(h,f,!1,e)&&g;if(c)for(k=0;k<c.length;k++)h=e.a=c[k],g=Sb(h,f,!1,e)&&g};
Q.prototype.a=function(){Q.B.a.call(this);if(this.o){var a=this.o,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,eb(d[e]);delete a.a[c];a.b--}}this.A=null};Q.prototype.f=function(a,b,c,d){return hb(this.o,String(a),b,!1,c,d)};Q.prototype.I=function(a,b,c,d){var e;e=this.o;a=String(a).toString();if(a in e.a){var f=e.a[a];b=gb(f,b,c,d);-1<b?(eb(f[b]),u.splice.call(f,b,1),0==f.length&&(delete e.a[a],e.b--),e=!0):e=!1}else e=!1;return e};
var Sb=function(a,b,c,d){b=a.o.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.u&&g.D==c){var h=g.listener,k=g.G||g.src;g.C&&ib(a.o,g);e=!1!==h.call(k,d)&&e}}return e&&0!=d.L};var Ub=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Vb=function(){},Wb=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(n(b)){var d=b;b=d.length;c.push("[");for(var e="",f=
0;f<b;f++)c.push(e),Wb(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Xb(d,c),c.push(":"),Wb(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "function":c.push("null");break;default:throw Error("Unknown type: "+
typeof b);}}},Yb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Zb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Xb=function(a,b){b.push('"',a.replace(Zb,function(a){var b=Yb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Yb[a]=b);return b}),'"')};var R=function(a){Q.call(this);this.h=a||"goog_"+sa++;this.l=[]};q(R,Q);R.prototype.i=!1;R.prototype.connect=function(){for(this.i=!0;0!=this.l.length;){var a=this.l.shift();this.sendMessage(a.name,a.type,a.data)}};R.prototype.send=function(a,b,c){this.i?this.sendMessage(a,b,c):this.l.push({name:a,type:b,data:c})};var $b=function(a,b,c,d,e){F.call(this,a);this.s=b;this.H=c;this.M=d;this.K=e};q($b,F);$b.prototype.toString=function(){return""};var ac=function(a){this.a=a},cc=function(){var a=bc();a:{if("disableExperiments"in a.a&&(a=a.a.disableExperiments,"boolean"==typeof a))break a;a=!1}return a},ec=function(a){if("forceExperimentIds"in a.a){a=a.a.forceExperimentIds;var b=[],c=0;n(a)&&v(a,function(a){"number"==typeof a&&(b[c++]=a)});return b}return null};var bc=function(){var a=fc;if(null==a.a){var b={},c;c=(new L(window.location.href)).f;if(Rb(c,"tcnfp"))try{var d=c.m("tcnfp"),b=Ub(0<d.length?String(d[0]):void 0)}catch(e){}a.a=new ac(b)}return a.a},fc=new function(){this.a=null};var gc=function(a,b,c){this.a=a;this.b=Math.min(Math.max(b||0,0),1);this.f=null!=c?c:!0};var hc=function(){this.b=new x;this.a=null},ic=function(a){var b=Math.random(),c=0,d=a.b.m();v(d,function(a){c+=a.b},a);var e=1<c?c:1;a.a=null;for(var f=0,g=0;g<d.length;++g)if(f+=d[g].b,f/e>=b){a.a=d[g];break}};var lc=function(){this.b=null!=l.G_testRunner;this.a=new x;S(this,"ActiveViewExternalLayer",41351040,.2);S(this,"ActiveViewExternalLayer",41351041,.2);S(this,"ActiveViewExternalLayer",41351042,.2);S(this,"ActiveViewExternalLayer",41351043,.2);S(this,"GvnExternalLayer",41351050,.05);S(this,"GvnExternalLayer",41351051,.05);S(this,"GvnExternalLayer",41351052,.05);S(this,"GvnExternalLayer",41351053,.05);S(this,"GvnExternalLayer",41351094,.25);S(this,"GvnExternalLayer",41351095,.25);S(this,"GvnExternalLayer",
41351098,.1);S(this,"GvnExternalLayer",41351099,.1);S(this,"GvnExternalLayer",41351056,.01);S(this,"GvnExternalLayer",41351057,.01);S(this,"GvnExternalLayer",41351046,.01);S(this,"GvnExternalLayer",41351044,.01);S(this,"GvnExternalLayer",41351058,.01);S(this,"GvnExternalLayer",41351059,.01);S(this,"GvnExternalLayer",41351062,.01);S(this,"GvnExternalLayer",41351063,.01);S(this,"GvnExternalLayer",41351080,.05);S(this,"GvnExternalLayer",41351081,.05);jc(this);var a;a=bc();a=ec(a);null!=a&&(this.b=!1,
kc(this,a.map(String)))},mc=null,nc=function(){mc||(mc=new lc);return mc},S=function(a,b,c,d){r(t(b))||isNaN(c)||0>=c||(c=new gc(c,d),a=oc(a,b),w(a.b,c.a,c))},jc=function(a){cc()||v(a.a.m(),function(a){ic(a)},a)},kc=function(a,b){v(b,function(a){var b=Number(a);a="FORCED_PUB_EXP_LAYER_"+a;isNaN(b)||0>=b||r(t(a))||(a=oc(this,a),b=new gc(b,0,!0),a.a=b)},a)},pc=function(a){var b=nc();return b.b?!1:ua(b.a.m(),function(b){return!!b.a&&b.a.a==a})},qc=function(){var a=nc();if(a.b)return"";var b=[];v(a.a.m(),
function(a){(a=a.a)&&a.f&&b.push(a.a)});return b.sort().join(",")},oc=function(a,b){var c=z(a.a,b);null==c&&(c=new hc,w(a.a,b,c));return c};var rc=function(a,b){if(!ca(a))if(a&&"function"==typeof a.handleEvent)a=ga(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:l.setTimeout(a,b||0)};var va=["://secure-...imrworldwide.com/","://cdn.imrworldwide.com/","://aksecure.imrworldwide.com/","www.google.com/pagead/sul","www.youtube.com/pagead/sul"],sc=/\bocr\b/,tc=0,V={},uc=function(a){return r(t(a))?!1:Ob(new L(a)).match(sc)?!0:null!=wa(function(b){return null!=a.match(b)})},xc=function(a,b){if(a){var c='javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"';b?vc(function(b){wc(b?c:'javascript:"data:text/html,<body><object data=\\"'+a+'\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')}):
wc(c)}},wc=function(a){var b=Va("iframe",{src:a,style:"display:none"});a=(9==b.nodeType?b:b.ownerDocument||b.document).body;var c,d=rc(function(){J(c);b&&b.parentNode&&b.parentNode.removeChild(b)},15E3);c=tb(b,["load","error"],function(){rc(function(){l.clearTimeout(d);b&&b.parentNode&&b.parentNode.removeChild(b)},5E3)});a.appendChild(b)},vc=function(a){var b=V.imageLoadingEnabled;if(null!=b)a(b);else{var c=!1;yc(function(b){c||(c=!0,null!=V.imageLoadingEnabled||(V.imageLoadingEnabled=b),a(b))})}},
yc=function(a){var b=new Image,c;b.onload=function(){clearTimeout(c);a(!0)};b.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";c=setTimeout(a,0,!1)},zc=function(a){if(a){var b=document.createElement("OBJECT");b.data=a;b.width=1;b.height=1;b.style.visibility="hidden";var c=""+tc++;V[c]=b;b.onload=b.onerror=function(){delete V[c]};document.body.appendChild(b)}},Ac=function(a){if(a){var b=new Image,c=""+tc++;V[c]=b;b.onload=b.onerror=function(){delete V[c]};b.src=a}},
Bc=function(a,b){b?vc(function(b){b?Ac(a):zc(a)}):Ac(a)};var Cc=function(a,b){return a.replace(/(\[|%5B)([a-zA-Z0-9_]+)(\]|%5D)/g,function(a,d,e){try{var f;f=e in b?b[e]:void 0;f=f.toString();if(!r(t(f)))return encodeURIComponent(f).replace(/%2C/g,",")}catch(g){}return a})};var Dc="ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),Ec=["c.googlesyndication.com"],Gc=function(a){if(Fc(a,Ec))return a;if("https:"==window.location.protocol&&
Fc(a,Dc)){var b=new L(a);if("https"==b.a)return a;Eb(b,"https");return b.toString()}return a},Fc=function(a,b){return(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+b.join("|").replace(/\./g,"\\.")+")(:[0-9]+)?([/?#]|$)","i")).test(a)};var Hc=function(a){try{a:{var b=a,c=void 0,d=b.length-12-2;if(!(-1==b.indexOf("PAGE_SIGNALS")||2048<=d||!c&&!window.Goog_AdSense_Lidar_getUrlSignalsArray))for(var c=c||window.Goog_AdSense_Lidar_getUrlSignalsArray(),d={},e=0;e<c.length;++e){d.PAGE_SIGNALS=c[e];var f=Cc(b,d);if(2048>f.length){a=f;break a}}a=b}}catch(g){}try{a=Gc(a);var h=pc(41351099)&&!0||pc(41351057)&&!1;a&&(uc(a)?xc(a,h):Bc(a,h))}catch(k){}};var W=function(){this.b=.01>Math.random();this.a=Math.floor(4503599627370496*Math.random())};W.getInstance=function(){return W.a?W.a:W.a=new W};
var Kc=function(){var a=W.getInstance();if(a.b){var b={lid:11},c=qc();r(t(c))||(b.e=c);var b=Ic(a,b),d=new L("http://pagead2.googlesyndication.com/pagead/gen_204");za(b,function(a,b){var c=null!=a?"boolean"==typeof a?a?"t":"f":""+a:"",h=d.f,k=b;O(h);h.b=null;k=P(h,k);Rb(h,k)&&(h.f-=z(h.a,k).length);w(h.a,k,[c]);h.f++},a);a=Jc();Eb(d,a.a);Hc(d.toString())}},Ic=function(a,b){b.id="";var c=Jc();b.c=a.a;b.domain=c.g;return b},Jc=function(){var a=window,b=document;return new L(a.parent==a?a.location.href:
b.referrer)};var X=function(a,b){R.call(this,b);this.v=a;this.b=null;this.N=new K(this);this.N.f(window,"message",this.P)};q(X,R);var Lc=function(a){if(null==a||!p(a)||0!=a.lastIndexOf("ima://",0))return null;a=a.substr(6);try{return Ub(a)}catch(b){return null}};X.prototype.sendMessage=function(a,b,c){null!=this.b&&null!=this.b.postMessage&&this.b.postMessage(Mc(this,a,b,c),"*");null!=this.b&&null==this.b.postMessage&&Kc()};X.prototype.a=function(){this.N.F();X.B.a.call(this)};
X.prototype.P=function(a){a=a.b;var b=Lc(a.data);if(Nc(this,b)){if(null==this.b)this.b=a.source,this.i||this.connect();else if(this.b!=a.source)return;Nc(this,b)&&Tb(this,new $b(b.name,b.type,b.data||{},b.sid,a.origin))}};var Mc=function(a,b,c,d){var e={};e.name=b;e.type=c;null!=d&&(e.data=d);e.sid=a.h;e.channel=a.v;a=[];Wb(new Vb,e,a);return"ima://"+a.join("")},Nc=function(a,b){if(null==b)return!1;var c=b.channel;if(null==c||c!=a.v)return!1;c=b.sid;return null==c||"*"!=a.h&&c!=a.h?!1:!0};var Y=function(a,b){Q.call(this);this.l=a;this.i=b;this.b={};this.h=new K(this);this.h.f(window,"message",this.v)};q(Y,Q);Y.prototype.send=function(a){var b=a.b;this.b.hasOwnProperty(b)&&this.b[b].send(a.type,a.s,a.H)};var Pc=function(a,b,c,d){a.b.hasOwnProperty(b)||(c=new X(b,c),a.h.f(c,a.l,function(a){Tb(this,new Oc(a.type,a.s,a.H,a.M,a.K,b))}),c.b=d,c.connect(),a.b[b]=c)};Y.prototype.a=function(){this.h.F();for(var a in this.b)Ya(this.b[a]);Y.B.a.call(this)};
Y.prototype.v=function(a){a=a.b;var b=Lc(a.data);if(null!=b){var c=b.channel;if(this.i&&!this.b.hasOwnProperty(c)){var d=b.sid;Pc(this,c,d,a.source);Tb(this,new Oc(b.name,b.type,b.data||{},d,a.origin,c))}}};var Oc=function(a,b,c,d,e,f){$b.call(this,a,b,c,d,e);this.b=f};q(Oc,$b);var Rc=function(){var a=m("google.ima.gptProxyInstance",window);if(null!=a)return a;K.call(this);this.i=new Y("gpt",!0);Xa(this,ha(Ya,this.i));this.f(this.i,"gpt",this.v);this.b=null;Qc()||window.top===window||(this.b=new Y("gpt",!1),Xa(this,ha(Ya,this.b)),this.f(this.b,"gpt",this.A))};q(Rc,K);var Qc=function(){return!!m("googletag.cmd",window)},Sc=function(){var a=m("googletag.console",window);return null!=a?a:null};
Rc.prototype.v=function(a){var b=a.K,c=Cb("//imasdk.googleapis.com"),b=Cb(b);if(c[3]==b[3]&&c[4]==b[4])if(null!=this.b)Pc(this.b,a.b,a.M,window.parent),null!=this.b&&this.b.send(a);else if(c=a.H,null!=c&&void 0!==c.scope){var b=c.scope,c=c.args,d;if("proxy"==b)c=a.s,"isGptPresent"==c?d=Qc():"isConsolePresent"==c&&(d=null!=Sc());else if(Qc())if("pubads"==b||"companionAds"==b){d=a.s;var e,f=window.googletag;if(null!=f&&null!=f[b]&&(f=f[b](),null!=f&&(d=f[d],null!=d)))try{e=d.apply(f,c)}catch(g){}d=
e}else if("console"==b){if(f=a.s,e=Sc(),null!=e&&(f=e[f],null!=f))try{f.apply(e,c)}catch(h){}}else if(null===b){e=a.s;d=window;if(0<=ta(["googleGetCompanionAdSlots","googleSetCompanionAdContents"],e)&&(e=d[e],null!=e))try{f=e.apply(d,c)}catch(k){}d=f}void 0!==d&&(a.H.returnValue=d,this.i.send(a))}};Rc.prototype.A=function(a){this.i.send(a)};var Tc=window,Uc=m("google.ima.gptProxyInstance",Tc);if(null==Uc){var Vc=Uc=new Rc,Wc=["google","ima","gptProxyInstance"],Z=Tc||l;Wc[0]in Z||!Z.execScript||Z.execScript("var "+Wc[0]);for(var Xc;Wc.length&&(Xc=Wc.shift());)Wc.length||void 0===Vc?Z[Xc]?Z=Z[Xc]:Z=Z[Xc]={}:Z[Xc]=Vc};})();
