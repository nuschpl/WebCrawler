/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: Jul 23 14:31
*/
KISSY.add("io/form-serializer",["dom"],function(d,f){function i(a){return a.replace(h,"\r\n")}var k=f("dom"),g=/^(?:select|textarea)/i,h=/\r?\n/g,a,c=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;return a={serialize:function(c,e){return d.param(a.getFormData(c),void 0,void 0,e||!1)},getFormData:function(a){var e=[],m={};d.each(k.query(a),function(l){l=l.elements?d.makeArray(l.elements):[l];e.push.apply(e,l)});e=d.filter(e,function(l){return l.name&&
!l.disabled&&(l.checked||g.test(l.nodeName)||c.test(l.type))});d.each(e,function(l){var a=k.val(l),b;null!==a&&(a=d.isArray(a)?d.map(a,i):i(a),b=m[l.name],void 0===b?m[l.name]=a:(d.isArray(b)||(b=m[l.name]=[b]),b.push.apply(b,d.makeArray(a))))});return m}}});
KISSY.add("io/base",["event/custom","promise"],function(d,f){function i(b){var a=b.context;delete b.context;b=d.mix(d.clone(n),b,{deep:!0});b.context=a||b;var l,j=b.type,g=b.dataType,a=b.uri=m.resolve(b.url);b.uri.setQuery("");"crossDomain"in b||(b.crossDomain=!b.uri.isSameOriginAs(m));j=b.type=j.toUpperCase();b.hasContent=!e.test(j);if(b.processData&&(l=b.data)&&"string"!==typeof l)b.data=d.param(l,void 0,void 0,b.serializeArray);g=b.dataType=d.trim(g||"*").split(c);!("cache"in b)&&d.inArray(g[0],
["script","jsonp"])&&(b.cache=!1);b.hasContent||(b.data&&a.query.add(d.unparam(b.data)),!1===b.cache&&a.query.set("_ksTS",d.now()+"_"+d.guid()));return b}function k(b){var a=this;if(!(a instanceof k))return new k(b);h.call(a);b=i(b);d.mix(a,{responseData:null,config:b||{},timeoutTimer:null,responseText:null,responseXML:null,responseHeadersString:"",responseHeaders:null,requestHeaders:{},readyState:0,state:0,statusText:null,status:0,transport:null});h.Defer(a);var c;k.fire("start",{ajaxConfig:b,io:a});
c=new (l[b.dataType[0]]||l["*"])(a);a.transport=c;b.contentType&&a.setRequestHeader("Content-Type",b.contentType);var n=b.dataType[0],e,j=b.timeout,g=b.context,m=b.headers,f=b.accepts;a.setRequestHeader("Accept",n&&f[n]?f[n]+("*"===n?"":", */*; q=0.01"):f["*"]);for(e in m)a.setRequestHeader(e,m[e]);if(b.beforeSend&&!1===b.beforeSend.call(g,a,b))return a;a.readyState=1;k.fire("send",{ajaxConfig:b,io:a});b.async&&0<j&&(a.timeoutTimer=setTimeout(function(){a.abort("timeout")},1E3*j));try{a.state=1,c.send()}catch(q){2>
a.state&&a._ioReady(-1,q.message||"send error")}return a}var g=f("event/custom"),h=f("promise"),a=/^(?:about|app|app\-storage|.+\-extension|file|widget)$/,c=/\s+/,j=function(b){return b},e=/^(?:GET|HEAD)$/,m=new d.Uri((d.Env.host.location||{}).href),a=m&&a.test(m.getScheme()),l={},n={type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",async:!0,serializeArray:!0,processData:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",
"*":"*/*"},converters:{text:{json:d.parseJson,html:j,text:j,xml:d.parseXML}},headers:{"X-Requested-With":"XMLHttpRequest"},contents:{xml:/xml/,html:/html/,json:/json/}};n.converters.html=n.converters.text;d.mix(k,g.Target);d.mix(k,{isLocal:a,setupConfig:function(b){d.mix(n,b,{deep:!0})},setupTransport:function(b,a){l[b]=a},getTransport:function(b){return l[b]},getConfig:function(){return n}});return k});
KISSY.add("io/xhr-transport-base",["./base"],function(d,f){function i(a,n){try{return new (n||h).XMLHttpRequest}catch(b){}}function k(a){var n;a.ifModified&&(n=a.uri,!1===a.cache&&(n=n.clone(),n.query.remove("_ksTS")),n=n.toString());return n}var g=f("./base"),h=d.Env.host,a=7<d.UA.ieMode&&h.XDomainRequest,c={proto:{}},j={},e={};g.__lastModifiedCached=j;g.__eTagCached=e;c.nativeXhr=h.ActiveXObject?function(l,n){var b;if(!m&&l&&a)b=new a;else if(!(b=!g.isLocal&&i(l,n)))a:{try{b=new (n||h).ActiveXObject("Microsoft.XMLHTTP");
break a}catch(c){}b=void 0}return b}:i;c.XDomainRequest_=a;var m=c.supportCORS="withCredentials"in c.nativeXhr();d.mix(c.proto,{sendInternal:function(){var l=this,c=l.io,b=c.config,o=l.nativeXhr,g=b.files,h=g?"post":b.type,f=b.async,i,t=c.mimeType,p=c.requestHeaders||{},c=c._getUrlForSend(),u=k(b),q,v;if(u){if(q=j[u])p["If-Modified-Since"]=q;if(q=e[u])p["If-None-Match"]=q}(i=b.username)?o.open(h,c,f,i,b.password):o.open(h,c,f);h=b.xhrFields||{};"withCredentials"in h&&(m||delete h.withCredentials);
for(v in h)try{o[v]=h[v]}catch(x){}t&&o.overrideMimeType&&o.overrideMimeType(t);!1===p["X-Requested-With"]&&delete p["X-Requested-With"];if("undefined"!==typeof o.setRequestHeader)for(v in p)o.setRequestHeader(v,p[v]);var w=b.hasContent&&b.data||null;g&&(t=w,p={},t&&(p=d.unparam(t)),p=d.mix(p,g),w=new FormData,d.each(p,function(a,l){d.isArray(a)?d.each(a,function(a){w.append(l+(b.serializeArray?"[]":""),a)}):w.append(l,a)}));o.send(w);!f||4===o.readyState?l._callback():a&&o instanceof a?(o.onload=
function(){o.readyState=4;o.status=200;l._callback()},o.onerror=function(){o.readyState=4;o.status=500;l._callback()}):o.onreadystatechange=function(){l._callback()}},abort:function(){this._callback(0,1)},_callback:function(l,c){var b=this.nativeXhr,o=this.io,m,h,f,i,t,p=o.config;try{if(c||4===b.readyState)if(a&&b instanceof a?(b.onerror=d.noop,b.onload=d.noop):b.onreadystatechange=d.noop,c)4!==b.readyState&&b.abort();else{m=k(p);var u=b.status;a&&b instanceof a||(o.responseHeadersString=b.getAllResponseHeaders());
m&&(h=b.getResponseHeader("Last-Modified"),f=b.getResponseHeader("ETag"),h&&(j[m]=h),f&&(e[f]=f));if((t=b.responseXML)&&t.documentElement)o.responseXML=t;var q=o.responseText=b.responseText;if(p.files&&q){var v,x;if(-1!==(v=q.indexOf("<body>")))x=q.lastIndexOf("</body>"),-1===x&&(x=q.length),q=q.slice(v+6,x);o.responseText=d.unEscapeHtml(q)}try{i=b.statusText}catch(w){i=""}!u&&g.isLocal&&!p.crossDomain?u=o.responseText?200:404:1223===u&&(u=204);o._ioReady(u,i)}}catch(A){b.onreadystatechange=d.noop,
c||o._ioReady(-1,A.message||"process error")}}});return c});
KISSY.add("io/xdr-flash-transport",["./base","dom"],function(d,f){function i(a,d,b){m||(m=!0,a='<object id="'+c+'" type="application/x-shockwave-flash" data="'+a+'" width="0" height="0"><param name="movie" value="'+a+'" /><param name="FlashVars" value="yid='+d+"&uid="+b+'&host=KISSY.IO" /><param name="allowScriptAccess" value="always" /></object>',d=e.createElement("div"),h.prepend(d,e.body||e.documentElement),d.innerHTML=a)}function k(a){this.io=a}var g=f("./base"),h=f("dom"),a={},c="io_swf",j,e=
d.Env.host.document,m=!1;d.augment(k,{send:function(){var c=this,e=c.io,b=e.config;i((b.xdr||{}).src||d.Config.base+"io/assets/io.swf",1,1);j?(c._uid=d.guid(),a[c._uid]=c,j.send(e._getUrlForSend(),{id:c._uid,uid:c._uid,method:b.type,data:b.hasContent&&b.data||{}})):setTimeout(function(){c.send()},200)},abort:function(){j.abort(this._uid)},_xdrResponse:function(c,d){var b,e=d.id,m,j=d.c,g=this.io;if(j&&(m=j.responseText))g.responseText=decodeURI(m);switch(c){case "success":b={status:200,statusText:"success"};
delete a[e];break;case "abort":delete a[e];break;case "timeout":case "transport error":case "failure":delete a[e],b={status:"status"in j?j.status:500,statusText:j.statusText||c}}b&&g._ioReady(b.status,b.statusText)}});g.applyTo=function(a,c,b){var a=c.split(".").slice(1),e=g;d.each(a,function(a){e=e[a]});e.apply(null,b)};g.xdrReady=function(){j=e.getElementById(c)};g.xdrResponse=function(c,d){var b=a[d.uid];b&&b._xdrResponse(c,d)};return k});
KISSY.add("io/sub-domain-transport",["event/dom","dom","./xhr-transport-base"],function(d,f){function i(a){var c=a.config;this.io=a;c.crossDomain=!1}function k(){var a=this.io.config.uri.getHostname(),a=j[a];a.ready=1;g.detach(a.iframe,"load",k,this);this.send()}var g=f("event/dom"),h=f("dom"),a=f("./xhr-transport-base"),c=d.Env.host.document,j={};d.augment(i,a.proto,{send:function(){var e=this.io.config,m=e.uri,l=m.getHostname(),n;n=j[l];var b="/sub_domain_proxy.html";e.xdr&&e.xdr.subDomain&&e.xdr.subDomain.proxy&&
(b=e.xdr.subDomain.proxy);n&&n.ready?(this.nativeXhr=a.nativeXhr(0,n.iframe.contentWindow))&&this.sendInternal():(n?e=n.iframe:(n=j[l]={},e=n.iframe=c.createElement("iframe"),h.css(e,{position:"absolute",left:"-9999px",top:"-9999px"}),h.prepend(e,c.body||c.documentElement),n=new d.Uri,n.setScheme(m.getScheme()),n.setPort(m.getPort()),n.setHostname(l),n.setPath(b),e.src=n.toString()),g.on(e,"load",k,this))}});return i});
KISSY.add("io/xhr-transport",["./base","./xhr-transport-base","./xdr-flash-transport","./sub-domain-transport"],function(d,f){function i(e){var m=e.config,l=m.crossDomain,n=m.xdr||{},b=n.subDomain=n.subDomain||{};this.io=e;if(l&&!g.supportCORS){m=m.uri.getHostname();if(c.domain&&d.endsWith(m,c.domain)&&!1!==b.proxy)return new a(e);if("flash"===""+n.use||!j)return new h(e)}this.nativeXhr=g.nativeXhr(l);return this}var k=f("./base"),g=f("./xhr-transport-base"),h=f("./xdr-flash-transport"),a=f("./sub-domain-transport"),
c=d.Env.host.document,j=g.XDomainRequest_;d.augment(i,g.proto,{send:function(){this.sendInternal()}});k.setupTransport("*",i);return k});
KISSY.add("io/script-transport",["./base"],function(d,f){function i(d){if(!d.config.crossDomain)return new (k.getTransport("*"))(d);this.io=d;return this}var k=f("./base");k.setupConfig({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{text:{script:function(g){d.globalEval(g);return g}}}});d.augment(i,{send:function(){var g=this,h=g.io,a=h.config;g.script=d.getScript(h._getUrlForSend(),
{charset:a.scriptCharset,success:function(){g._callback("success")},error:function(){g._callback("error")}})},_callback:function(d,h){var a=this.io;this.script&&(this.script=void 0,h||("error"!==d?a._ioReady(200,"success"):"error"===d&&a._ioReady(500,"script error")))},abort:function(){this._callback(0,1)}});k.setupTransport("script",i);return k});
KISSY.add("io/jsonp",["./base"],function(d,f){var i=f("./base"),k=d.Env.host;i.setupConfig({jsonp:"callback",jsonpCallback:function(){return d.guid("jsonp")}});i.on("start",function(g){var h=g.io,a=h.config,g=a.dataType;if("jsonp"===g[0]){delete a.contentType;var c,j=a.jsonpCallback,e="function"===typeof j?j():j,m=k[e];a.uri.query.set(a.jsonp,e);k[e]=function(a){1<arguments.length&&(a=d.makeArray(arguments));c=[a]};h.fin(function(){k[e]=m;if(void 0===m)try{delete k[e]}catch(a){}else c&&m(c[0])});
h=a.converters;h.script=h.script||{};h.script.json=function(){if(!c)throw Error("not call jsonpCallback: "+e);return c[0]};g.length=2;g[0]="script";g[1]="json"}});return i});
KISSY.add("io/form",["./base","dom","./form-serializer"],function(d,f){var i=f("./base"),k=f("dom"),g=f("./form-serializer"),h=Array.prototype.slice,a=d.Env.host.FormData;i.on("start",function(c){var j,e,c=c.io.config;if(e=c.form){j=k.get(e);e=c.data;for(var m=!1,l={},n=k.query("input",j),b=0,o=n.length;b<o;b++){var f=n[b];if("file"===f.type.toLowerCase()){m=!0;if(!a)break;var i=h.call(f.files,0);l[k.attr(f,"name")]=1<i.length?i:i[0]||null}}m&&a&&(c.files=c.files||{},d.mix(c.files,l),delete c.contentType);
!m||a?(j=g.getFormData(j),c.hasContent?(j=d.param(j,void 0,void 0,c.serializeArray),c.data=e?c.data+("&"+j):j):c.uri.query.add(j)):(e=c.dataType,c=e[0],"*"===c&&(c="text"),e.length=2,e[0]="iframe",e[1]=c)}});return i});
KISSY.add("io/iframe-transport",["dom","./base","event/dom"],function(d,f){function i(a){var c=d.guid("io-iframe"),e=h.getEmptyIframeSrc(),a=a.iframe=h.create("<iframe "+(e?' src="'+e+'" ':"")+' id="'+c+'" name="'+c+'" style="position:absolute;left:-9999px;top:-9999px;"/>');h.prepend(a,j.body||j.documentElement);return a}function k(a,c,e){var b=[],g,f,i,k;d.each(a,function(a,m){g=d.isArray(a);f=d.makeArray(a);for(i=0;i<f.length;i++)k=j.createElement("input"),k.type="hidden",k.name=m+(g&&e?"[]":""),
k.value=f[i],h.append(k,c),b.push(k)});return b}function g(a){this.io=a}var h=f("dom"),a=f("./base"),c=f("event/dom"),j=d.Env.host.document,e=d.clone(a.getConfig().converters.text);e.json=function(a){return d.parseJson(d.unEscapeHtml(a))};a.setupConfig({converters:{iframe:e,text:{iframe:function(a){return a}},xml:{iframe:function(a){return a}}}});d.augment(g,{send:function(){function a(){c.on(f,"load error",e._callback,e);s.submit()}var e=this,j=e.io,b=j.config,g,f,r,z=b.data,s=h.get(b.form);e.attrs=
{target:h.attr(s,"target")||"",action:h.attr(s,"action")||"",encoding:h.attr(s,"encoding"),enctype:h.attr(s,"enctype"),method:h.attr(s,"method")};e.form=s;f=i(j);h.attr(s,{target:f.id,action:j._getUrlForSend(),method:"post",enctype:"multipart/form-data",encoding:"multipart/form-data"});z&&(r=d.unparam(z));r&&(g=k(r,s,b.serializeArray));e.fields=g;6===d.UA.ie?setTimeout(a,0):a()},_callback:function(a){var e=this,j=e.form,b=e.io,a=a.type,g,f=b.iframe;if(f)if("abort"===a&&6===d.UA.ie?setTimeout(function(){h.attr(j,
e.attrs)},0):h.attr(j,e.attrs),h.remove(this.fields),c.detach(f),setTimeout(function(){h.remove(f)},30),b.iframe=null,"load"===a)try{if((g=f.contentWindow.document)&&g.body)b.responseText=h.html(g.body),d.startsWith(b.responseText,"<?xml")&&(b.responseText=void 0);b.responseXML=g&&g.XMLDocument?g.XMLDocument:g;g?b._ioReady(200,"success"):b._ioReady(500,"parser error")}catch(i){b._ioReady(500,"parser error")}else"error"===a&&b._ioReady(500,"error")},abort:function(){this._callback({type:"abort"})}});
a.setupTransport("iframe",g);return a});
KISSY.add("io/methods",["promise","./base"],function(d,f){function i(a){var c=a.responseText,j=a.responseXML,e=a.config,g=e.converters,f,h,b=e.contents,i=e.dataType;if(c||j){for(e=a.mimeType||a.getResponseHeader("Content-Type");"*"===i[0];)i.shift();if(!i.length)for(f in b)if(b[f].test(e)){i[0]!==f&&i.unshift(f);break}i[0]=i[0]||"text";for(f=0;f<i.length;f++)if("text"===i[f]&&void 0!==c){h=c;break}else if("xml"===i[f]&&void 0!==j){h=j;break}if(!h){var k={text:c,xml:j};d.each(["text","xml"],function(a){var b=
i[0];if(g[a]&&g[a][b]&&k[a])return i.unshift(a),h="text"===a?c:j,!1})}}b=i[0];for(e=1;e<i.length;e++){f=i[e];var r=g[b]&&g[b][f];if(!r)throw Error("no covert for "+b+" => "+f);h=r(h);b=f}a.responseData=h}var k=f("promise"),g=f("./base"),h=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg;d.extend(g,k,{setRequestHeader:function(a,c){this.requestHeaders[a]=c;return this},getAllResponseHeaders:function(){return 2===this.state?this.responseHeadersString:null},getResponseHeader:function(a){var c,d,a=a.toLowerCase();if(2===
this.state){if(!(d=this.responseHeaders))for(d=this.responseHeaders={};c=h.exec(this.responseHeadersString);)d[c[1].toLowerCase()]=c[2];c=d[a]}return void 0===c?null:c},overrideMimeType:function(a){this.state||(this.mimeType=a);return this},abort:function(a){a=a||"abort";this.transport&&this.transport.abort(a);this._ioReady(0,a);return this},getNativeXhr:function(){var a=this.transport;return a?a.nativeXhr:null},_ioReady:function(a,c){if(2!==this.state){this.state=2;this.readyState=4;var d;if(200<=
a&&300>a||304===a)if(304===a)c="not modified",d=!0;else try{i(this),c="success",d=!0}catch(e){c=e.message||"parser error"}else 0>a&&(a=0);this.status=a;this.statusText=c;var f=this.defer,h=this.config,k;if(k=this.timeoutTimer)clearTimeout(k),this.timeoutTimer=0;k=d?"success":"error";var b,o=[this.responseData,c,this],y=h.context,r={ajaxConfig:h,io:this};(b=h[k])&&b.apply(y,o);(b=h.complete)&&b.apply(y,o);g.fire(k,r);g.fire("complete",r);f[d?"resolve":"reject"](o)}},_getUrlForSend:function(){var a=
this.config,c=a.uri,f=d.Uri.getComponents(a.url).query||"";return c.toString.call(c,a.serializeArray)+(f?(c.query.has()?"&":"?")+f:f)}})});
KISSY.add("io","io/form-serializer,io/base,io/xhr-transport,io/script-transport,io/jsonp,io/form,io/iframe-transport,io/methods".split(","),function(d,f){function i(d,a,c,f,e){if(typeof a==="function"){f=c;c=a;a=void 0}return g({type:e||"get",url:d,data:a,success:c,dataType:f})}var k=f("io/form-serializer"),g=f("io/base");f("io/xhr-transport");f("io/script-transport");f("io/jsonp");f("io/form");f("io/iframe-transport");f("io/methods");d.mix(g,{serialize:k.serialize,get:i,post:function(d,a,c,f){if(typeof a===
"function"){f=c;c=a;a=void 0}return i(d,a,c,f,"post")},jsonp:function(d,a,c){if(typeof a==="function"){c=a;a=void 0}return i(d,a,c,"jsonp")},getScript:d.getScript,getJSON:function(d,a,c){if(typeof a==="function"){c=a;a=void 0}return i(d,a,c,"json")},upload:function(d,a,c,f,e){if(typeof c==="function"){e=f;f=c;c=void 0}return g({url:d,type:"post",dataType:e,form:a,data:c,success:f})}});d.mix(d,{Ajax:g,IO:g,ajax:g,io:g,jsonp:g.jsonp});return g});
