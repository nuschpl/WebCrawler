  <!DOCTYPE html> <html lang="en" > <head> <!-- Barlesque 2.84.11 --> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <meta name="description" content="Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age." /> <meta name="keywords" content="BBC, bbc.co.uk, bbc.com, Search, British Broadcasting Corporation, BBC iPlayer, BBCi" />   <title>BBC - Homepage</title>        <meta name="viewport" content="width=device-width, initial-scale=1.0" />   <script type="text/javascript">window.bbcredirection={geo:true,device:true}</script>  <!--orb.ws.require.lib--> <script type="text/javascript">/*<![CDATA[*/ if (typeof window.define !== 'function' || typeof window.require !== 'function') { document.write('<script class="js-require-lib" src="http://static.bbci.co.uk/frameworks/requirejs/lib.js"><'+'/script>'); } /*]]>*/</script> <script type="text/javascript">  bbcRequireMap = {"jquery-1":"http://static.bbci.co.uk/frameworks/jquery/0.3.0/sharedmodules/jquery-1.7.2", "jquery-1.4":"http://static.bbci.co.uk/frameworks/jquery/0.3.0/sharedmodules/jquery-1.4", "jquery-1.9":"http://static.bbci.co.uk/frameworks/jquery/0.3.0/sharedmodules/jquery-1.9.1", "swfobject-2":"http://static.bbci.co.uk/frameworks/swfobject/0.1.10/sharedmodules/swfobject-2", "demi-1":"http://static.bbci.co.uk/frameworks/demi/0.10.0/sharedmodules/demi-1", "gelui-1":"http://static.bbci.co.uk/frameworks/gelui/0.9.13/sharedmodules/gelui-1", "cssp!gelui-1/overlay":"http://static.bbci.co.uk/frameworks/gelui/0.9.13/sharedmodules/gelui-1/overlay.css", "istats-1":"http://static.bbci.co.uk/frameworks/istats/0.26.31/modules/istats-1", "relay-1":"http://static.bbci.co.uk/frameworks/relay/0.2.6/sharedmodules/relay-1", "clock-1":"http://static.bbci.co.uk/frameworks/clock/0.1.9/sharedmodules/clock-1", "canvas-clock-1":"http://static.bbci.co.uk/frameworks/clock/0.1.9/sharedmodules/canvas-clock-1", "cssp!clock-1":"http://static.bbci.co.uk/frameworks/clock/0.1.9/sharedmodules/clock-1.css", "jssignals-1":"http://static.bbci.co.uk/frameworks/jssignals/0.3.6/modules/jssignals-1", "jcarousel-1":"http://static.bbci.co.uk/frameworks/jcarousel/0.1.10/modules/jcarousel-1", "bump-3":"//emp.bbci.co.uk/emp/bump-3/bump-3", "app":"http://static.bbci.co.uk/wwhp/1.79.0/modules/app", "compiled":"http://static.bbci.co.uk/wwhp/1.79.0/modules/compiled", "desktop/ui/carouselfactory":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/ui/carouselfactory", "desktop/ui/tabs":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/ui/tabs", "desktop/ui/tennisresults":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/ui/tennisresults", "desktop/ui/videoplayer":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/ui/videoplayer", "desktop/ui/weather":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/ui/weather", "desktop/utils/date":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/utils/date", "desktop/utils/lazyloader":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/utils/lazyloader", "desktop/utils/popup":"http://static.bbci.co.uk/wwhp/1.79.0/modules/desktop/utils/popup", "homepage":"http://static.bbci.co.uk/wwhp/1.79.0/modules/homepage", "lib/core":"http://static.bbci.co.uk/wwhp/1.79.0/modules/lib/core", "lib/module/base":"http://static.bbci.co.uk/wwhp/1.79.0/modules/lib/module/base", "lib/module/manager":"http://static.bbci.co.uk/wwhp/1.79.0/modules/lib/module/manager", "lib/util":"http://static.bbci.co.uk/wwhp/1.79.0/modules/lib/util", "modules/header":"http://static.bbci.co.uk/wwhp/1.79.0/modules/modules/header", "modules/images":"http://static.bbci.co.uk/wwhp/1.79.0/modules/modules/images", "modules/media":"http://static.bbci.co.uk/wwhp/1.79.0/modules/modules/media", "modules/video":"http://static.bbci.co.uk/wwhp/1.79.0/modules/modules/video", "modules/weather":"http://static.bbci.co.uk/wwhp/1.79.0/modules/modules/weather"}; require({ baseUrl: 'http://static.bbci.co.uk/', paths: bbcRequireMap, waitSeconds: 30 }); </script>   <script type="text/javascript">/*<![CDATA[*/ if (typeof bbccookies_flag === 'undefined') { bbccookies_flag = 'ON'; } showCTA_flag = true; cta_enabled = (showCTA_flag && (bbccookies_flag === 'ON')); (function(){var e="ckns_policy",m="Thu, 01 Jan 1970 00:00:00 GMT",k={ads:true,personalisation:true,performance:true,necessary:true};function f(p){if(f.cache[p]){return f.cache[p]}var o=p.split("/"),q=[""];do{q.unshift((o.join("/")||"/"));o.pop()}while(q[0]!=="/");f.cache[p]=q;return q}f.cache={};function a(p){if(a.cache[p]){return a.cache[p]}var q=p.split("."),o=[];while(q.length&&"|co.uk|com|".indexOf("|"+q.join(".")+"|")===-1){if(q.length){o.push(q.join("."))}q.shift()}f.cache[p]=o;return o}a.cache={};function i(o,t,p){var z=[""].concat(a(window.location.hostname)),w=f(window.location.pathname),y="",r,x;for(var s=0,v=z.length;s<v;s++){r=z[s];for(var q=0,u=w.length;q<u;q++){x=w[q];y=o+"="+t+";"+(r?"domain="+r+";":"")+(x?"path="+x+";":"")+(p?"expires="+p+";":"");bbccookies.set(y,true)}}}window.bbccookies={POLICY_REFRESH_DATE_MILLIS:new Date(2015,4,21,0,0,0,0).getTime(),POLICY_EXPIRY_COOKIENAME:"ckns_policy_exp",_setEverywhere:i,cookiesEnabled:function(){var o="ckns_testcookie"+Math.floor(Math.random()*100000);this.set(o+"=1");if(this.get().indexOf(o)>-1){g(o);return true}return false},set:function(o){return document.cookie=o},get:function(){return document.cookie},getCrumb:function(o){if(!o){return null}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(o).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},policyRequiresRefresh:function(){var p=new Date();p.setHours(0);p.setMinutes(0);p.setSeconds(0);p.setMilliseconds(0);if(bbccookies.POLICY_REFRESH_DATE_MILLIS<=p.getTime()){var o=bbccookies.getCrumb(bbccookies.POLICY_EXPIRY_COOKIENAME);if(o){o=new Date(parseInt(o));o.setYear(o.getFullYear()-1);return bbccookies.POLICY_REFRESH_DATE_MILLIS>=o.getTime()}else{return true}}else{return false}},_setPolicy:function(o){return h.apply(this,arguments)},readPolicy:function(){return b.apply(this,arguments)},_deletePolicy:function(){i(e,"",m)},isAllowed:function(){return true},_isConfirmed:function(){return c()!==null},_acceptsAll:function(){var o=b();return o&&!(j(o).indexOf("0")>-1)},_getCookieName:function(){return d.apply(this,arguments)},_showPrompt:function(){var o=((!this._isConfirmed()||this.policyRequiresRefresh())&&window.cta_enabled&&this.cookiesEnabled()&&!window.bbccookies_disable);return(window.orb&&window.orb.fig)?o&&(window.orb.fig("no")||window.orb.fig("ck")):o}};bbccookies._getPolicy=bbccookies.readPolicy;function d(p){var o=(""+p).match(/^([^=]+)(?==)/);return(o&&o.length?o[0]:"")}function j(o){return""+(o.ads?1:0)+(o.personalisation?1:0)+(o.performance?1:0)}function h(s){if(typeof s==="undefined"){s=k}if(typeof arguments[0]==="string"){var p=arguments[0],r=arguments[1];if(p==="necessary"){r=true}s=b();s[p]=r}else{if(typeof arguments[0]==="object"){s.necessary=true}}var q=new Date();q.setYear(q.getFullYear()+1);bbccookies.set(e+"="+j(s)+";domain=bbc.co.uk;path=/;expires="+q.toUTCString()+";");bbccookies.set(e+"="+j(s)+";domain=bbc.com;path=/;expires="+q.toUTCString()+";");var o=new Date(q.getTime());o.setMonth(o.getMonth()+1);bbccookies.set(bbccookies.POLICY_EXPIRY_COOKIENAME+"="+q.getTime()+";domain=bbc.co.uk;path=/;expires="+o.toUTCString()+";");bbccookies.set(bbccookies.POLICY_EXPIRY_COOKIENAME+"="+q.getTime()+";domain=bbc.com;path=/;expires="+o.toUTCString()+";");return s}function l(o){if(o===null){return null}var p=o.split("");return{ads:!!+p[0],personalisation:!!+p[1],performance:!!+p[2],necessary:true}}function c(){var o=new RegExp("(?:^|; ?)"+e+"=(\\d\\d\\d)($|;)"),p=document.cookie.match(o);if(!p){return null}return p[1]}function b(o){var p=l(c());if(!p){p=k}if(o){return p[o]}else{return p}}function g(o){return document.cookie=o+"=;expires="+m+";"}function n(){var o='<script type="text/javascript" src="http://static.bbci.co.uk/frameworks/bbccookies/0.6.11/script/bbccookies.js"><\/script>';if(window.bbccookies_flag==="ON"&&!bbccookies._acceptsAll()&&!window.bbccookies_disable){document.write(o)}}n()})(); /*]]>*/</script> <script type="text/javascript">/*<![CDATA[*/
(function(){window.fig=window.fig||{};window.fig.manager={include:function(a){a=a||window;var e=a.document,g=e.cookie,b=g.match(/(?:^|; ?)ckns_orb_fig=([^;]+)/);if(!b&&g.indexOf("ckns_orb_nofig=1")>-1){this.setFig(a,{no:1})}else{if(b){b=this.deserialise(decodeURIComponent(RegExp.$1));this.setFig(a,b)}e.write('<script src="https://fig.bbc.co.uk/frameworks/fig/1/fig.js"><'+"/script>")}},confirm:function(a){a=a||window;if(a.orb&&a.orb.fig&&a.orb.fig("no")){this.setNoFigCookie(a)}if(a.orb===undefined||a.orb.fig===undefined){this.setFig(a,{no:1});this.setNoFigCookie(a)}},setNoFigCookie:function(a){a.document.cookie="ckns_orb_nofig=1; expires="+new Date(new Date().getTime()+1000*60*10).toGMTString()+";"},setFig:function(a,b){(function(){var c=b;a.orb=a.orb||{};a.orb.fig=function(d){return(arguments.length)?c[d]:c}})()},deserialise:function(b){var a={};b.replace(/([a-z]{2}):([0-9]+)/g,function(){a[RegExp.$1]=+RegExp.$2});return a}}})();fig.manager.include();/*]]>*/</script>
 
<!--[if (gt IE 8) | (IEMobile)]><!-->
<link rel="stylesheet" href="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/style/orb.css">
<!--<![endif]-->

<!--[if (lt IE 9) & (!IEMobile)]>
<link rel="stylesheet" href="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/style/orb-ie.css">
<![endif]-->

  <script type="text/javascript">/*<![CDATA[*/ (function(undefined){if(!window.bbc){window.bbc={}}var ROLLING_PERIOD_DAYS=30;window.bbc.Mandolin=function(id,segments,opts){var now=new Date().getTime(),storedItem,DEFAULT_START=now,DEFAULT_RATE=1,COOKIE_NAME="ckpf_mandolin";opts=opts||{};this._id=id;this._segmentSet=segments;this._store=new window.window.bbc.Mandolin.Storage(COOKIE_NAME);this._opts=opts;this._rate=(opts.rate!==undefined)?+opts.rate:DEFAULT_RATE;this._startTs=(opts.start!==undefined)?new Date(opts.start).getTime():new Date(DEFAULT_START).getTime();this._endTs=(opts.end!==undefined)?new Date(opts.end).getTime():daysFromNow(ROLLING_PERIOD_DAYS);this._signupEndTs=(opts.signupEnd!==undefined)?new Date(opts.signupEnd).getTime():this._endTs;this._segment=null;if(typeof id!=="string"){throw new Error("Invalid Argument: id must be defined and be a string")}if(Object.prototype.toString.call(segments)!=="[object Array]"){throw new Error("Invalid Argument: Segments are required.")}if(opts.rate!==undefined&&(opts.rate<0||opts.rate>1)){throw new Error("Invalid Argument: Rate must be between 0 and 1.")}if(this._startTs>this._endTs){throw new Error("Invalid Argument: end date must occur after start date.")}if(!(this._startTs<this._signupEndTs&&this._signupEndTs<=this._endTs)){throw new Error("Invalid Argument: SignupEnd must be between start and end date")}removeExpired.call(this,now);var overrides=window.bbccookies.get().match(/ckns_mandolin_setSegments=([^;]+)/);if(overrides!==null){eval("overrides = "+decodeURIComponent(RegExp.$1)+";");if(overrides[this._id]&&this._segmentSet.indexOf(overrides[this._id])==-1){throw new Error("Invalid Override: overridden segment should exist in segments array")}}if(overrides!==null&&overrides[this._id]){this._segment=overrides[this._id]}else{if((storedItem=this._store.getItem(this._id))){this._segment=storedItem.segment}else{if(this._startTs<=now&&now<this._signupEndTs&&now<=this._endTs&&this._store.isEnabled()===true){this._segment=pick(segments,this._rate);if(opts.end===undefined){this._store.setItem(this._id,{segment:this._segment})}else{this._store.setItem(this._id,{segment:this._segment,end:this._endTs})}log.call(this,"mandolin_segment")}}}log.call(this,"mandolin_view")};window.bbc.Mandolin.prototype.getSegment=function(){return this._segment};function log(actionType,params){var that=this;require(["istats-1"],function(istats){istats.log(actionType,that._id+":"+that._segment,params?params:{})})}function removeExpired(expires){var items=this._store.getItems(),expiresInt=+expires;for(var key in items){if(items[key].end!==undefined&&+items[key].end<expiresInt){this._store.removeItem(key)}}}function getLastExpirationDate(data){var winner=0,rollingExpire=daysFromNow(ROLLING_PERIOD_DAYS);for(var key in data){if(data[key].end===undefined&&rollingExpire>winner){winner=rollingExpire}else{if(+data[key].end>winner){winner=+data[key].end}}}return(winner)?new Date(winner):new Date(rollingExpire)}window.bbc.Mandolin.prototype.log=function(params){log.call(this,"mandolin_log",params)};window.bbc.Mandolin.prototype.convert=function(params){log.call(this,"mandolin_convert",params);this.convert=function(){}};function daysFromNow(n){var endDate;endDate=new Date().getTime()+(n*60*60*24)*1000;return endDate}function pick(segments,rate){var picked,min=0,max=segments.length-1;if(typeof rate==="number"&&Math.random()>rate){return null}do{picked=Math.floor(Math.random()*(max-min+1))+min}while(picked>max);return segments[picked]}window.bbc.Mandolin.Storage=function(name){validateCookieName(name);this._cookieName=name;this._isEnabled=(bbccookies.isAllowed(this._cookieName)===true&&bbccookies.cookiesEnabled()===true)};window.bbc.Mandolin.Storage.prototype.setItem=function(key,value){var storeData=this.getItems();storeData[key]=value;this.save(storeData);return value};window.bbc.Mandolin.Storage.prototype.isEnabled=function(){return this._isEnabled};window.bbc.Mandolin.Storage.prototype.getItem=function(key){var storeData=this.getItems();return storeData[key]};window.bbc.Mandolin.Storage.prototype.removeItem=function(key){var storeData=this.getItems();delete storeData[key];this.save(storeData)};window.bbc.Mandolin.Storage.prototype.getItems=function(){return deserialise(this.readCookie(this._cookieName)||"")};window.bbc.Mandolin.Storage.prototype.save=function(data){window.bbccookies.set(this._cookieName+"="+encodeURIComponent(serialise(data))+"; expires="+getLastExpirationDate(data).toUTCString()+";")};window.bbc.Mandolin.Storage.prototype.readCookie=function(name){var nameEq=name+"=",ca=window.bbccookies.get().split("; "),i,c;validateCookieName(name);for(i=0;i<ca.length;i++){c=ca[i];if(c.indexOf(nameEq)===0){return decodeURIComponent(c.substring(nameEq.length,c.length))}}return null};function serialise(o){var str="";for(var p in o){if(o.hasOwnProperty(p)){str+='"'+p+'"'+":"+(typeof o[p]==="object"?(o[p]===null?"null":"{"+serialise(o[p])+"}"):'"'+o[p].toString()+'"')+","}}return str.replace(/,\}/g,"}").replace(/,$/g,"")}function deserialise(str){var o;str="{"+str+"}";if(!validateSerialisation(str)){throw"Invalid input provided for deserialisation."}eval("o = "+str);return o}var validateSerialisation=(function(){var OBJECT_TOKEN="<Object>",ESCAPED_CHAR='"\\n\\r\\u2028\\u2029\\u000A\\u000D\\u005C',ALLOWED_CHAR="([^"+ESCAPED_CHAR+"]|\\\\["+ESCAPED_CHAR+"])",KEY='"'+ALLOWED_CHAR+'+"',VALUE='(null|"'+ALLOWED_CHAR+'*"|'+OBJECT_TOKEN+")",KEY_VALUE=KEY+":"+VALUE,KEY_VALUE_SEQUENCE="("+KEY_VALUE+",)*"+KEY_VALUE,OBJECT_LITERAL="({}|{"+KEY_VALUE_SEQUENCE+"})",objectPattern=new RegExp(OBJECT_LITERAL,"g");return function(str){if(str.indexOf(OBJECT_TOKEN)!==-1){return false}while(str.match(objectPattern)){str=str.replace(objectPattern,OBJECT_TOKEN)}return str===OBJECT_TOKEN}})();function validateCookieName(name){if(name.match(/ ,;/)){throw"Illegal name provided, must be valid in browser cookie."}}})(); /*]]>*/</script>  <script type="text/javascript">  document.documentElement.className += (document.documentElement.className? ' ' : '') + 'orb-js';  fig.manager.confirm(); </script> <script src="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/script/orb/api.min.js"></script> <script type="text/javascript"> var blq = { environment: function() { return 'live'; } } </script>   <script type="text/javascript"> /*<![CDATA[*/ function oqsSurveyManager(w, flag) { if (flag !== 'OFF') { w.document.write('<script type="text/javascript" src="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/script/vendor/edr.js"><'+'/script>'); } } oqsSurveyManager(window, 'ON'); /*]]>*/ </script>             <!-- BBCDOTCOM template: responsive webservice  -->
        <!-- BBCDOTCOM head --><script type="text/javascript"> /*<![CDATA[*/ var _sf_startpt = (new Date()).getTime(); /*]]>*/ </script><style type="text/css">.bbccom_display_none{display:none;}</style><script type="text/javascript"> /*<![CDATA[*/ var bbcdotcomConfig, googletag = googletag || {}; googletag.cmd = googletag.cmd || []; var bbcdotcom = false; (function(){ if(typeof require !== 'undefined') { require({ paths:{ "bbcdotcom":"http://static.bbci.co.uk/bbcdotcom/0.3.328/script" } }); } })(); /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ var bbcdotcom = { adverts: { keyValues: { set: function() {} } }, advert: { write: function () {}, show: function () {}, isActive: function () { return false; }, layout: function() { return { reset: function() {} } } }, config: { init: function() {}, isActive: function() {}, setSections: function() {}, isAdsEnabled: function() {}, setAdsEnabled: function() {}, isAnalyticsEnabled: function() {}, setAnalyticsEnabled: function() {}, setAssetPrefix: function() {}, setJsPrefix: function() {}, setSwfPrefix: function() {}, setCssPrefix: function() {}, setConfig: function() {}, getAssetPrefix: function() {}, getJsPrefix: function () {}, getSwfPrefix: function () {}, getCssPrefix: function () {} }, survey: { init: function(){ return false; } }, data: {}, init: function() {}, objects: function(str) { return false; }, locale: { set: function() {}, get: function() {} }, setAdKeyValue: function() {}, utils: { addEvent: function() {}, addHtmlTagClass: function() {}, log: function () {} }, addLoadEvent: function() {} }; /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (typeof orb !== 'undefined' && typeof orb.fig === 'function') { if (orb.fig('ad') && orb.fig('uk') == 0) { bbcdotcom.data = { ads: (orb.fig('ad') ? 1 : 0), stats: (orb.fig('uk') == 0 ? 1 : 0), statsProvider: orb.fig('ap') }; } } else { document.write('<script type="text/javascript" src="'+('https:' == document.location.protocol ? 'https://ssl.bbc.com' : 'http://tps.bbc.com')+'/wwscripts/data">\x3C/script>'); } })(); /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (typeof orb === 'undefined' || typeof orb.fig !== 'function') { bbcdotcom.data = { ads: bbcdotcom.data.a, stats: bbcdotcom.data.b, statsProvider: bbcdotcom.data.c }; } if (bbcdotcom.data.ads == 1) { document.write('<script type="text/javascript" src="'+('https:' == document.location.protocol ? 'https://ssl.bbc.co.uk' : 'http://www.bbc.co.uk')+'/wwscripts/flag">\x3C/script>'); } })(); /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (window.bbcdotcom && (typeof bbcdotcom.flag == 'undefined' || (typeof bbcdotcom.data.ads !== 'undefined' && bbcdotcom.flag.a != 1))) { bbcdotcom.data.ads = 0; } if (/[?|&]ads/.test(window.location.href) || /(^|; )ads=on; /.test(document.cookie) || /; ads=on(; |$)/.test(document.cookie)) { bbcdotcom.data.ads = 1; bbcdotcom.data.stats = 1; } if (window.bbcdotcom && (bbcdotcom.data.ads == 1 || bbcdotcom.data.stats == 1)) { bbcdotcom.assetPrefix = "http://static.bbci.co.uk/bbcdotcom/0.3.328/"; document.write('<link rel="stylesheet" type="text/css" href="http://static.bbci.co.uk/bbcdotcom/0.3.328/style/orb/bbccom.css" />'); (function() { var useSSL = 'https:' == document.location.protocol; var src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js'; document.write('<scr' + 'ipt src="' + src + '">\x3C/script>'); })(); if (/(sandbox|int)(.dev)*.bbc.co*/.test(window.location.href) || /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf('ads-debug=') !== -1) { document.write('<script type="text/javascript" src="http://static.bbci.co.uk/bbcdotcom/0.3.328/script/orb/individual.js">\x3C/script>'); } else { document.write('<script type="text/javascript" src="http://static.bbci.co.uk/bbcdotcom/0.3.328/script/orb/bbcdotcom.js">\x3C/script>'); } if(/[\\?&]ads=([^&#]*)/.test(window.location.href)) { document.write('<script type="text/javascript" src="http://static.bbci.co.uk/bbcdotcom/0.3.328/script/orb/adverts/adSuites.js">\x3C/script>'); } } })(); /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (window.bbcdotcom && (bbcdotcom.data.ads == 1 || bbcdotcom.data.stats == 1)) { bbcdotcomConfig = {"adFormat":"standard","adKeyword":"","adMode":"smart","adsEnabled":true,"appAnalyticsSections":"","asyncEnabled":false,"disableInitialLoad":false,"advertInfoPageUrl":"http:\/\/www.bbc.co.uk\/faqs\/online\/adverts_general","advertisementText":"Advertisement","analyticsEnabled":true,"appName":"wwhp","assetPrefix":"http:\/\/static.bbci.co.uk\/bbcdotcom\/0.3.328\/","continuousPlayEnabled":false,"customAdParams":[],"customStatsParams":[],"headline":"","id":"","inAssociationWithText":"in association with","keywords":"","language":"","orbTransitional":false,"outbrainEnabled":true,"palEnv":"live","productName":"","sections":[],"siteCatalystEnabled":true,"comScoreEnabled":true,"slots":"","sponsoredByText":"is sponsored by","adsByGoogleText":"Ads by Google","summary":"","type":"","staticBase":"\/bbcdotcom","staticHost":"http:\/\/static.bbci.co.uk","staticVersion":"0.3.328","staticPrefix":"http:\/\/static.bbci.co.uk\/bbcdotcom\/0.3.328","dataHttp":"tps.bbc.com","dataHttps":"ssl.bbc.com","flagHttp":"www.bbc.co.uk","flagHttps":"ssl.bbc.co.uk","analyticsHttp":"sa.bbc.com","analyticsHttps":"ssa.bbc.com"}; bbcdotcom.config.init(bbcdotcomConfig, bbcdotcom.data, window.location, window.document); bbcdotcom.config.setAssetPrefix("http://static.bbci.co.uk/bbcdotcom/0.3.328/"); document.write('<!--[if IE 7]><script type="text/javascript">bbcdotcom.config.setIE7(true);\x3C/script><![endif]-->'); document.write('<!--[if IE 8]><script type="text/javascript">bbcdotcom.config.setIE8(true);\x3C/script><![endif]-->'); document.write('<!--[if IE 9]><script type="text/javascript">bbcdotcom.config.setIE9(true);\x3C/script><![endif]-->'); if (/[?|&]ex-dp/.test(window.location.href) || document.cookie.indexOf('ex-dp=') !== -1) { bbcdotcom.utils.addHtmlTagClass('bbcdotcom-ex-dp'); } } })(); /*]]>*/ </script>            <script type="text/javascript">/*<![CDATA[*/
    window.bbcFlagpoles_istats = 'ON';
    window.orb = window.orb || {};

    /*]]>*/</script>
 <script type="text/javascript"> /* <![CDATA[ */ define('id-statusbar-config', { 'translation_signedout': "Sign in", 'translation_signedin': "Your account", 'use_overlay' : false, 'signin_url' : "https://ssl.bbc.com/id/signin", 'locale' : "en-GB", 'policyname' : "", 'ptrt' : "http://www.bbc.com/" }); /* ]]> */ </script>   <script type="text/javascript"> require(['istats-1'], function(istats){ if (typeof(document) != 'undefined' && typeof(document.cookie) != 'undefined') { var cookieAphidMatch = document.cookie.match(/ckpf_APHID=([^;]*)/); if (cookieAphidMatch && typeof(cookieAphidMatch[1]) == 'string') { istats.addLabels({'bbc_hid': cookieAphidMatch[1]}); } } })(); </script>    <script type="text/javascript"> (function () { if (! window.require) { throw new Error('idcta: could not find require module'); } var map = {}; map['idapp-1'] = 'http://static.bbci.co.uk/idapp/0.70.90/modules/idapp/idapp-1'; map['idcta/idcta-1'] = 'http://static.bbci.co.uk/id/0.32.00/modules/idcta/idcta-1'; map['idcta/idCookie'] = 'http://static.bbci.co.uk/id/0.32.00/modules/idcta/idCookie'; map['idcta/overlayManager'] = 'http://static.bbci.co.uk/id/0.32.00/modules/idcta/overlayManager'; require({paths: map}); define('id-config', {"idapp":{"version":"0.70.90","hostname":"ssl.bbc.com","insecurehostname":"www.bbc.com","tld":"bbc.com"},"idtranslations":{"version":"0.33.9"},"identity":{"baseUrl":"https:\/\/talkback.live.bbc.co.uk\/identity","cookieAgeDays":730,"accessTokenCookieName":"ckns_IDA-ATKN"},"pathway":{"name":null,"staticAssetUrl":"http:\/\/static.bbci.co.uk\/idapp\/0.70.90\/modules\/idapp\/idapp-1\/View.css"},"idpurl":false}); })(); </script>       <meta property="wwhp-edition" content="international" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if (gt IE 8) | (IEMobile)]><!-->
<link href="http://static.bbci.co.uk/wwhp/1.79.0/responsive/css/wwhp.min.css" rel="stylesheet" />
<!--<![endif]-->
<!--[if (lt IE 9) & (!IEMobile)]>
<link href="http://static.bbci.co.uk/wwhp/1.79.0/responsive/css/old-ie.min.css" rel="stylesheet" />
<![endif]--><link rel = "canonical" href = "http://www.bbc.com/" />    <script src="http://static.bbci.co.uk/wwhp/1.79.0/modules/vendor/modernizr/modernizr.js"></script>
    <script>
        (function () {
            if (window.bbcdotcom) {
                bbcdotcom.init({
                    adsToDisplay:[
                        'parallax',
                        'leaderboard',
                        'native',
                        'mpu',
                        'mpu_middle',
                        'module_weather',
                        'module_feature-1',
                        'module_feature-2',
                        'module_channel-australia'
                    ]
                });
            }
            require.config({
                paths: {
                    'bump-3': window.location.protocol === 'https:' ? 'https://ssl.live.bbc.co.uk/emp/bump-3/ssl' : 'http://emp.bbci.co.uk/emp/bump-3/bump-3'
                },
                map: {
                    '*': {
                        jquery: 'jquery-1.9'
                    }
                },
                shim: {
                    'vendor/underscore/underscore': {
                        exports: '_'
                    },
                    'vendor/js-breakpoints/breakpoints': {
                        exports: 'Breakpoints'
                    },
                    'vendor/cookie-monster/cookie-monster': {
                        exports: 'monster'
                    }
                }
            });
            require(["domReady","compiled"], function (domReady) {
                domReady(function () { require(['app'], function (app) { app.init(window); }); });
            });
        }());
    </script>
              </head> <body id="wwhp" class="wwhp disable-wide-advert responsive default international responsive-default responsive-international default-international">          <!-- BBCDOTCOM bodyFirst --><div id="bbccom_interstitial_ad" class="bbccom_display_none"></div><div id="bbccom_interstitial" class="bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.config.isActive('ads')) { googletag.cmd.push(function() { googletag.display('bbccom_interstitial'); }); } }()); /*]]>*/ </script></div><div id="bbccom_wallpaper_ad" class="bbccom_display_none"></div><div id="bbccom_wallpaper" class="bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { var wallpaper; if (window.bbcdotcom && bbcdotcom.config.isActive('ads')) { if (bbcdotcom.config.isAsync()) { googletag.cmd.push(function() { googletag.display('bbccom_wallpaper'); }); } else { googletag.display("wallpaper"); } wallpaper = bbcdotcom.adverts.adRegister.getAd('wallpaper'); if (wallpaper !== null && wallpaper !== undefined) { wallpaper.setDomElement('bbccom_wallpaper'); } } }()); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.config.isActive('ads')) { document.write(unescape('%3Cscript id="gnlAdsEnabled" class="bbccom_display_none"%3E%3C/script%3E')); } if (window.bbcdotcom && bbcdotcom.config.isActive('analytics')) { document.write(unescape('%3Cscript id="gnlAnalyticsEnabled" class="bbccom_display_none"%3E%3C/script%3E')); } if (window.bbcdotcom && bbcdotcom.config.isActive('continuousPlay')) { document.write(unescape('%3Cscript id="gnlContinuousPlayEnabled" class="bbccom_display_none"%3E%3C/script%3E')); } }()); /*]]>*/ </script> <div id="blq-global"> <div id="blq-pre-mast">  </div> </div>  <script type="text/html" id="blq-bbccookies-tmpl"><![CDATA[ <section> <div id="bbccookies" class="bbccookies-banner orb-banner-wrapper bbccookies-d"> <div id="bbccookies-prompt" class="orb-banner b-g-p b-r b-f"> <h2 class="orb-banner-title"> Cookies on the BBC website </h2> <p class="orb-banner-content" dir="ltr"> The BBC has updated its cookie policy. We use cookies to ensure that we give you the best experience on our website. This includes cookies from third party social media websites if you visit a page which contains embedded content from social media. Such third party cookies may track your use of the BBC website.<span class="bbccookies-international-message"> We and our partners also use cookies to ensure we show you advertising that is relevant to you.</span> If you continue without changing your settings, we'll assume that you are happy to receive all cookies on the BBC website. However, you can change your cookie settings at any time. </p> <ul class="orb-banner-options"> <li id="bbccookies-continue"> <button type="button" id="bbccookies-continue-button">Continue</button> </li> <li id="bbccookies-settings"> <a href="/privacy/cookies/managing/cookie-settings.html">Change settings</a> </li> <li id="bbccookies-more"><a href="/privacy/cookies/bbc">Find out more</a></li></ul> </div> </div> </section> ]]></script> <script type="text/javascript">/*<![CDATA[*/ (function(){if(bbccookies._showPrompt()){var g=document,b=g.getElementById("blq-pre-mast"),e=g.getElementById("blq-bbccookies-tmpl"),a,f;if(b&&g.createElement){a=g.createElement("div");f=e.innerHTML;f=f.replace("<"+"![CDATA[","").replace("]]"+">","");a.innerHTML=f;b.appendChild(a);blqCookieContinueButton=g.getElementById("bbccookies-continue-button");blqCookieContinueButton.onclick=function(){a.parentNode.removeChild(a);return false};bbccookies._setPolicy(bbccookies.readPolicy())}var c=g.getElementById("bbccookies");if(c&&!window.orb.fig("uk")){c.className=c.className.replace(/\bbbccookies-d\b/,"");c.className=c.className+(" bbccookies-w")}}})(); /*]]>*/</script>   <script type="text/javascript">/*<![CDATA[*/ if (bbccookies.isAllowed('s1')) { var istatsTrackingUrl = '//sa.bbc.co.uk/bbc/bbc/s?name=SET-COUNTER&pal_route=index&ml_name=barlesque&app_type=responsive&language=en-GB&ml_version=0.26.31&pal_webapp=wwhp'; require(['istats-1'], function (istats) {  istats.addCollector({'name': 'default', 'url': '//sa.bbc.co.uk/bbc/bbc/s', 'seperator': '&' }); var counterName = (window.istats_countername) ? window.istats_countername : istatsTrackingUrl.match(/[\?&]name=([^&]*)/i)[1]; istats.setCountername(counterName);  if (/\bIDENTITY=/.test(document.cookie)) { istats.addLabels({'bbc_identity': '1'}); } if (/\bckns_policy=\d\d0/.test(document.cookie)) { istats.addLabels({'ns_nc': '1'}); } var c = (document.cookie.match(/\bckns_policy=(\d\d\d)/) || []).pop() || ''; var screenWidthAndHeight = 'unavailable'; if (window.screen && screen.width && screen.height) { screenWidthAndHeight = screen.width + 'x' + screen.height; } istats.addLabels('pal_route=index&ml_name=barlesque&app_type=responsive&language=en-GB&ml_version=0.26.31&pal_webapp=wwhp'); istats.addLabels({  'blq_s': '4d', 'blq_r': '3.5', 'blq_v': 'default', 'blq_e': 'pal',  'bbc_mc': (c ? 'ad' + c.charAt(0) + 'ps' + c.charAt(1) + 'pf' + c.charAt(2) : 'not_set'), 'screen_resolution': screenWidthAndHeight, 'ns_referrer': encodeURI(((window.orb.referrer) ? window.orb.referrer : document.referrer)) } );  istats.invoke(); }); } /*]]>*/</script>  <!-- Begin iStats 20100118 (UX-CMC 1.1009.3) --> <script type="text/javascript">/*<![CDATA[*/ if (bbccookies.isAllowed('s1')) { (function () { require(['istats-1'], function (istats) { istatsTrackingUrl = istats.getDefaultURL(); if (istats.isEnabled() && bbcFlagpoles_istats === 'ON') { sitestat(istatsTrackingUrl); } else { window.ns_pixelUrl = istatsTrackingUrl; /* used by Flash library to track */ } function sitestat(n) { var j = document, f = j.location, b = ""; if (j.cookie.indexOf("st_ux=") != -1) { var k = j.cookie.split(";"); var e = "st_ux", h = document.domain, a = "/"; if (typeof ns_ != "undefined" && typeof ns_.ux != "undefined") { e = ns_.ux.cName || e; h = ns_.ux.cDomain || h; a = ns_.ux.cPath || a } for (var g = 0, f = k.length; g < f; g++) { var m = k[g].indexOf("st_ux="); if (m != -1) { b = "&" + decodeURI(k[g].substring(m + 6)) } } bbccookies.set(e + "=; expires=" + new Date(new Date().getTime() - 60).toGMTString() + "; path=" + a + "; domain=" + h); } window.ns_pixelUrl = n;  } }); })(); } else { window.istats = {enabled: false}; } /*]]>*/</script> <noscript><p style="position: absolute; top: -999em;"><img src="//sa.bbc.co.uk/bbc/bbc/s?name=SET-COUNTER&amp;pal_route=index&amp;ml_name=barlesque&amp;app_type=responsive&amp;language=en-GB&amp;ml_version=0.26.31&amp;pal_webapp=wwhp&amp;blq_js_enabled=0&amp;blq_s=4d&amp;blq_r=3.5&amp;blq_v=default&amp;blq_e=pal " height="1" width="1" alt=""/></p></noscript> <!-- End iStats (UX-CMC) -->  
 <!--[if (gt IE 8) | (IEMobile)]><!--> <header id="orb-banner" role="banner"> <!--<![endif]--> <!--[if (lt IE 9) & (!IEMobile)]> <![if (IE 8)]> <header id="orb-banner" role="banner" class="orb-old-ie orb-ie8"> <![endif]> <![if (IE 7)]> <header id="orb-banner" role="banner" class="orb-old-ie orb-ie7"> <![endif]> <![if (IE 6)]> <header id="orb-banner" role="banner" class="orb-old-ie orb-ie6"> <![endif]> <![endif]--> <div id="orb-header"  class="orb-nav-pri orb-nav-pri-black orb-nav-empty"  > <div class="orb-nav-pri-container b-r b-g-p"> <div class="orb-nav-section orb-nav-blocks"> <a href="/"> <img class="orb-nav-theme-dynamic" src="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/img/bbc-blocks-light.png" width="84" height="24" alt="BBC" data-activesrc="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/img/bbc-blocks-dark.png"/> </a> </div> <section> <div class="orb-skip-links"> <h2>Accessibility links</h2> <ul>  <li><a id="orb-accessibility-help" href="/accessibility/">Accessibility Help</a></li> </ul> </div> </section>  <div class="orb-nav-section orb-nav-id orb-nav-focus orb-nav-id-default">     <a id="idcta-link" href="https://ssl.bbc.com/id/status"><img id="idcta-image" src="http://static.bbci.co.uk/id/0.32.00/img/bbcid_orb_signin_light.png" alt="" width="18" height="18"   class="orb-nav-theme-dynamic" data-activesrc="http://static.bbci.co.uk/id/0.32.00/img/bbcid_orb_signin_dark.png"/><span id="idcta-username">BBC iD</span></a>                </div>  <nav role="navigation" class="orb-nav"> <div class="orb-nav-section orb-nav-links orb-nav-focus" id="orb-nav-links"> <h2>BBC navigation</h2> <ul>    <li  class="orb-nav-news orb-d"  > <a href="http://www.bbc.co.uk/news/">News</a> </li>    <li  class="orb-nav-newsdotcom orb-w"  > <a href="http://www.bbc.com/news/">News</a> </li>    <li  class="orb-nav-sport"  > <a href="/sport/">Sport</a> </li>    <li  class="orb-nav-weather"  > <a href="/weather/">Weather</a> </li>    <li  class="orb-nav-shop orb-w"  > <a href="http://shop.bbc.com/">Shop</a> </li>    <li  class="orb-nav-earthdotcom orb-w"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-travel-dotcom orb-w"  > <a href="http://www.bbc.com/travel/">Travel</a> </li>    <li  class="orb-nav-capital orb-w"  > <a href="http://www.bbc.com/capital/">Capital</a> </li>    <li  class="orb-nav-iplayer orb-d"  > <a href="/iplayer/">iPlayer</a> </li>    <li  class="orb-nav-culture orb-w"  > <a href="http://www.bbc.com/culture/">Culture</a> </li>    <li  class="orb-nav-autos orb-w"  > <a href="http://www.bbc.com/autos/">Autos</a> </li>    <li  class="orb-nav-future orb-w"  > <a href="http://www.bbc.com/future/">Future</a> </li>    <li  class="orb-nav-tv"  > <a href="/tv/">TV</a> </li>    <li  class="orb-nav-radio"  > <a href="/radio/">Radio</a> </li>    <li  class="orb-nav-cbbc"  > <a href="/cbbc">CBBC</a> </li>    <li  class="orb-nav-cbeebies"  > <a href="/cbeebies">CBeebies</a> </li>    <li  class="orb-nav-arts orb-d"  > <a href="/arts/">Arts</a> </li>    <li  > <a href="/ww1/">WW1</a> </li>    <li  class="orb-nav-food"  > <a href="/food/">Food</a> </li>    <li  > <a href="/iwonder">iWonder</a> </li>    <li  > <a href="/education">Bitesize</a> </li>    <li  class="orb-nav-music"  > <a href="/music/">Music</a> </li>    <li  class="orb-nav-nature orb-w"  > <a href="/nature/">Nature</a> </li>    <li  class="orb-nav-earth orb-d"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-local"  > <a href="/local/">Local</a> </li>    <li  class="orb-nav-travel orb-d"  > <a href="/travel/">Travel</a> </li>    <li id="orb-nav-more"><a href="#orb-footer" data-alt="More">Menu<span class="orb-icon orb-icon-arrow"></span></a></li> </ul> </div> </nav> <div class="orb-nav-section orb-nav-search"> <a href="http://search.bbc.co.uk/search"> <img class="orb-nav-theme-dynamic" src="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/img/orb-search-light.png" width="18" height="18" alt="Search the BBC" data-activesrc="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/img/orb-search-dark.png"/> </a> <form class="b-f" id="orb-search-form" role="search" method="get" action="http://search.bbc.co.uk/search" accept-charset="utf-8"> <div>  <input type="hidden" name="uri" value="/" />   <label for="orb-search-q">Search the BBC</label> <input id="orb-search-q" type="text" name="q" placeholder="Search" /> <input type="image" id="orb-search-button" src="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/img/orb-search-dark.png" width="17" height="17" alt="Search the BBC" /> <input type="hidden" name="suggid" id="orb-search-suggid" /> </div> </form> </div> </div> <div id="orb-panels"  > <script type="text/template" id="orb-panel-template"><![CDATA[ <div id="orb-panel-<%= panelname %>" class="orb-panel" aria-labelledby="orb-nav-<%= panelname %>"> <div class="orb-panel-content b-g-p b-r"> <%= panelcontent %> </div> </div> ]]></script> </div> </div> </header> <!-- Styling hook for shared modules only --> <div id="orb-modules">                     


<!--[if lt IE 9]>
    <div class="browser-notify">
        <p class="browser-notify__message">This site is optimised for modern web browsers, and does not fully support your version of Internet Explorer.</p>
    </div>
<![endif]-->

<h1 id="page-title">BBC Homepage</h1>

<div id="page" role="main" class="content" data-wwhp-module="images, media">
    
<section class="module module--date module--highlight" data-wwhp-module="header">
    <h2 class="module__title">&nbsp;</h2>
</section>          <section class="module module--promo module--highlight"> <div class="module__content"> <ul class="media-list">     
        <li class="media-list__item media-list__item--1">
            <div class="media media--hero media--primary media--overlay block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/13E84/production/_84904518_84904517.jpg" data-alt="Acropolis, 14 Aug"><img src="http://ichef.bbci.co.uk/wwhp/144/cpsprodpb/13E84/production/_84904518_84904517.jpg" alt="Acropolis, 14 Aug" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-europe-33934238"
                              rev="promo|headline" >
                                                            Eurogroup agrees new Greek bailout                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            The Eurogroup agrees on a new bailout deal for Greece, which will now &quot;irreversibly&quot; remain in the eurozone.                                                    </p>
                    
                                            <a class="media__tag tag tag--news" href="/news/world/europe"
                              rev="promo|source" >Europe</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-europe-33934238"
                      rev="promo|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Eurogroup agrees new Greek bailout                </a>
            </div>

        </li>
            
        <li class="media-list__item media-list__item--2">
            <div class="media media--overlay block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/js/p02zjsrc.jpg" data-alt="NWA"><img src="http://ichef.bbci.co.uk/wwhp/144/ibroadcast/images/live/p0/2z/js/p02zjsrc.jpg" alt="NWA" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/culture/story/20150813-nwa-the-worlds-most-dangerous-group"
                              rev="promo|headline" >
                                                            âThe worldâs most dangerous groupâ?                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--culture" href="http://www.bbc.com/culture"
                              rev="promo|source" >Culture</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/culture/story/20150813-nwa-the-worlds-most-dangerous-group"
                      rev="promo|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    âThe worldâs most dangerous groupâ?                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--3">
            <div class="media media--overlay block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/jf/p02zjf7m.jpg" data-alt="Earth"><img src="http://ichef.bbci.co.uk/wwhp/144/ibroadcast/images/live/p0/2z/jf/p02zjf7m.jpg" alt="Earth" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/earth/story/20150814-what-is-at-the-centre-of-earth"
                              rev="promo|headline" >
                                                            What lies at the Earth's core?                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--earth" href="http://www.bbc.com/earth"
                              rev="promo|source" >Earth</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/earth/story/20150814-what-is-at-the-centre-of-earth"
                      rev="promo|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    What lies at the Earth's core?                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--4">
            <div class="media media--overlay block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/181D1/production/_84896789_thinkstockphotos-483036958.jpg" data-alt="Clasped hands"><img src="http://ichef.bbci.co.uk/wwhp/144/cpsprodpb/181D1/production/_84896789_thinkstockphotos-483036958.jpg" alt="Clasped hands" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/news/magazine-33911943"
                              rev="promo|headline" >
                                                            Understanding asexuality                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--magazine" href="/news/magazine"
                              rev="promo|source" >Magazine</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/news/magazine-33911943"
                      rev="promo|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Understanding asexuality                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--5">
            <div class="media media--overlay block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/28FF/production/_84859401_qs3sty3m_jxeqmg1bc-gzxrnchytodc-_waajvrpdja.jpg" data-alt="Scales"><img src="http://ichef.bbci.co.uk/wwhp/144/cpsprodpb/28FF/production/_84859401_qs3sty3m_jxeqmg1bc-gzxrnchytodc-_waajvrpdja.jpg" alt="Scales" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/news/health-33905745"
                              rev="promo|headline" >
                                                            Study: Cut fat to lose weight                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--health" href="/news/health"
                              rev="promo|source" >Health</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/news/health-33905745"
                      rev="promo|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Study: Cut fat to lose weight                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--6">
            <div class="media media--overlay block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/13584/production/_84863297_nataliavodianovawithhersibling.jpg" data-alt="Russian Supermodel Natalia Vodianova with her sister Oksana."><img src="http://ichef.bbci.co.uk/wwhp/144/cpsprodpb/13584/production/_84863297_nataliavodianovawithhersibling.jpg" alt="Russian Supermodel Natalia Vodianova with her sister Oksana." /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/news/blogs-trending-33909960"
                              rev="promo|headline" >
                                                            Supermodel ignites disability debate                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--trending" href="http://www.bbc.com/news/blogs/trending"
                              rev="promo|source" >Trending</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/news/blogs-trending-33909960"
                      rev="promo|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Supermodel ignites disability debate                </a>
            </div>

        </li>
     </ul> </div> </section>     <div class="advert advert--leaderboard"><!-- BBCDOTCOM slot leaderboard --><div id="bbccom_leaderboard_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('leaderboard', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div>     <section class="module module--compound module--news-sport"> <div class="module__content module__content--compound"> <div class="container"> <div class="news-sport">  <section class="module module--news   module--collapse-images">             <h2 class="module__title">
                            <a class="module__title__link tag tag--news" href="/news"
                      rev="news|header"                     >News</a>
                    </h2>
     <div class="module__content"> <ul class="media-list media-list--fixed-height">         
        <li class="media-list__item media-list__item--1">
            <div class="media  block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/13E5B/production/_84899418_028557132-1.jpg" data-alt="US Secretary of State John Kerry (C) stands with other dignitaries as members of the US Marines raise the U.S. flag over the newly reopened embassy in Havana, Cuba, on 14 August 2015."><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="US Secretary of State John Kerry (C) stands with other dignitaries as members of the US Marines raise the U.S. flag over the newly reopened embassy in Havana, Cuba, on 14 August 2015." /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-latin-america-33919484"
                              rev="news|headline" >
                                                            US flag raised over Cuba embassy                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            John Kerry, the first US Secretary of State to visit Cuba in 70 years, reopens his country's embassy in Havana, decades after it closed.                                                    </p>
                    
                                            <a class="media__tag tag tag--news" href="/news/world/latin_america"
                              rev="news|source" >Latin America &amp; Caribbean</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-latin-america-33919484"
                      rev="news|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    US flag raised over Cuba embassy                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--2">
            <div class="media  block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/20F8/production/_84904480_025751939-1.jpg" data-alt="Kayla Mueller in 30 May 2013 photo"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Kayla Mueller in 30 May 2013 photo" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-us-canada-33941913"
                              rev="news|headline" >
                                                            IS leader 'raped' US hostage Mueller                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            An American aid worker, killed in February while held hostage by Islamic State in Syria, was sexually abused by the group's top leader, US officials tell ABC news.                                                    </p>
                    
                                            <a class="media__tag tag tag--news" href="/news/world/us_and_canada"
                              rev="news|source" >US &amp; Canada</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-us-canada-33941913"
                      rev="news|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    IS leader 'raped' US hostage Mueller                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--3">
            <div class="media  block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/2ACE/production/_84885901_hi028553878.jpg" data-alt="Japan's Prime Minister Shinzo Abe bows as he leaves a news conference after delivering a statement marking the 70th anniversary of World War Two's end, at his official residence in Tokyo, 14 August 2015"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Japan's Prime Minister Shinzo Abe bows as he leaves a news conference after delivering a statement marking the 70th anniversary of World War Two's end, at his official residence in Tokyo, 14 August 2015" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-asia-33943736"
                              rev="news|headline" >
                                                            Japan and S Korea to remember WW2                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Japan and South Korea are preparing to mark 70 years since the end of WW2, when Japan's surrender freed Korea from a 35-year occupation.                                                    </p>
                    
                                            <a class="media__tag tag tag--news" href="/news/world/asia"
                              rev="news|source" >Asia</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-asia-33943736"
                      rev="news|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Japan and S Korea to remember WW2                </a>
            </div>

        </li>
     </ul> </div> </section>  <section class="module module--sport   module--collapse-images">             <h2 class="module__title">
                            <a class="module__title__link tag tag--sport" href="/sport"
                      rev="sport|header"                     >Sport</a>
                    </h2>
     <div class="module__content"> <ul class="media-list media-list--fixed-height">         
        <li class="media-list__item media-list__item--1">
            <div class="media  block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/E4B6/production/_84905585_messi.jpg" data-alt="Lionel Messi"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Lionel Messi" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/sport/football/33939433"
                              rev="sport|headline" >
                                                            Barcelona thrashed 4-0 by Bilbao                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Athletic Bilbao destroy Barcelona in the first leg of the Spanish Super Cup as Aritz Aduriz nets a hat-trick.                                                    </p>
                    
                                            <a class="media__tag tag tag--sport" href="/sport/football/european"
                              rev="sport|source" >European Football</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/sport/football/33939433"
                      rev="sport|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Barcelona thrashed 4-0 by Bilbao                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--2">
            <div class="media  block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/9894/production/_84906093_jda.jpg" data-alt="Jason day"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Jason day" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/sport/golf/33941821"
                              rev="sport|headline" >
                                                            Day &amp; Jones lead when play abandoned                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Australians Jason Day and Matt Jones are tied for the lead at the US PGA Championship as a storm sees the second round abandoned.                                                    </p>
                    
                                            <a class="media__tag tag tag--sport" href="/sport/golf"
                              rev="sport|source" >Golf</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/sport/golf/33941821"
                      rev="sport|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Day &amp; Jones lead when play abandoned                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--3">
            <div class="media  block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/CF9E/production/_84905135_januzaj3getty.jpg" data-alt="Adnan Januzaj"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Adnan Januzaj" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/sport/football/33814865"
                              rev="sport|headline" >
                                                            Aston Villa 0-1 Manchester United                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Manchester United maintain their impressive record at Villa Park as they beat Aston Villa with a goal from Adnan Januzaj.                                                    </p>
                    
                                            <a class="media__tag tag tag--sport" href="/sport/football"
                              rev="sport|source" >Football</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/sport/football/33814865"
                      rev="sport|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Aston Villa 0-1 Manchester United                </a>
            </div>

        </li>
     </ul> </div> </section>  </div> <div class="advert advert--mpu"><!-- BBCDOTCOM slot mpu --><div id="bbccom_mpu_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('mpu', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </div> </div> </section>       <section class="module module--weather" data-wwhp-module="weather"> <div class="module__content"> <div class="weather"> <h2 class="weather__location"> London Weather <a class="weather__edit">Edit</a> </h2> <form class="weather__form" action="/wwhp"> <div class="weather__search"> <input class="weather__input" placeholder="Enter city, town or region" name="location_term" autocomplete="off"> <button class="weather__submit" type="submit" value=""> <span class="icon icon--search"></span> </button> </div> <p class="weather__error"></p> <ul class="weather__results"></ul> </form> <ul class="weather__forecasts">  <li class="forecast--1 forecast"> <a class="forecast__link" href="/weather/2643743?day=0"   rev="weather|link" > <img class="forecast__image" src="http://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/12.gif" alt="Light Rain"> <h3 class="forecast__day">Fri</h3>  <p class="forecast__low">13&deg;C</p> </a> </li>  <li class="forecast--2 forecast"> <a class="forecast__link" href="/weather/2643743?day=1"   rev="weather|link" > <img class="forecast__image" src="http://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/7.gif" alt="Light Cloud"> <h3 class="forecast__day">Sat</h3>  <p class="forecast__high">21&deg;C</p>  <p class="forecast__low">14&deg;C</p> </a> </li>  <li class="forecast--3 forecast"> <a class="forecast__link" href="/weather/2643743?day=2"   rev="weather|link" > <img class="forecast__image" src="http://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/7.gif" alt="Light Cloud"> <h3 class="forecast__day">Sun</h3>  <p class="forecast__high">21&deg;C</p>  <p class="forecast__low">14&deg;C</p> </a> </li>  <li class="forecast--4 forecast"> <a class="forecast__link" href="/weather/2643743?day=3"   rev="weather|link" > <img class="forecast__image" src="http://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/7.gif" alt="Light Cloud"> <h3 class="forecast__day">Mon</h3>  <p class="forecast__high">21&deg;C</p>  <p class="forecast__low">14&deg;C</p> </a> </li>  </ul> </div> <div class="advert advert--module_weather advert--sponsor"><!-- BBCDOTCOM slot module_weather --><div id="bbccom_module_weather_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('module_weather', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </div> </section>     <!-- Error: (null) Module not found or invalid -->
     <section class="module module--collapse-images module--collapse-images module--highlight module--editors-picks">             <h2 class="module__title">
                            <span class="module__title__link tag tag--feature">Editorâs Picks</span>
                    </h2>
     <div class="module__content"> <div class="container"> <div class="editors-picks"> <ul class="media-list media-list--fixed-height layout--featured">         
        <li class="media-list__item media-list__item--1">
            <div class="media media--padded media--primary block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2x/s1/p02xs14g.jpg" data-alt="In deep space lies a âsupervoidâ that could be the biggest structure ever known"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="In deep space lies a âsupervoidâ that could be the biggest structure ever known" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/earth/story/20150723-the-largest-thing-in-the-universe"
                              rev="editors-picks|headline" >
                                                            The largest thing in the universe                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            In deep space lies a âsupervoidâ that could be the biggest structure ever known                                                    </p>
                    
                                            <a class="media__tag tag tag--earth" href="http://www.bbc.com/earth"
                              rev="editors-picks|source" >Earth</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/earth/story/20150723-the-largest-thing-in-the-universe"
                      rev="editors-picks|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    The largest thing in the universe                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--2">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/mn/p02zmn27.jpg" data-alt="Gorgeous concept racer is a nod to the past and a glimpse of the future"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Gorgeous concept racer is a nod to the past and a glimpse of the future" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/autos/story/20150814-racy-30-csl-hommage-r-is-a-glimpse-into-bmws-future"
                              rev="editors-picks|headline" >
                                                            BMW hits fast-forward                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Gorgeous concept racer is a nod to the past and a glimpse of the future                                                    </p>
                    
                                            <a class="media__tag tag tag--autos" href="http://www.bbc.com/autos"
                              rev="editors-picks|source" >Autos</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/autos/story/20150814-racy-30-csl-hommage-r-is-a-glimpse-into-bmws-future"
                      rev="editors-picks|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    BMW hits fast-forward                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--3">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/fh/p02zfhk9.jpg" data-alt="Lessons in fighting back from a woman who almost lost it all"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Lessons in fighting back from a woman who almost lost it all" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/capital/story/20150812-i-just-had-to-work-harder"
                              rev="editors-picks|headline" >
                                                            âI just had to work harderâ                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Lessons in fighting back from a woman who almost lost it all                                                    </p>
                    
                                            <a class="media__tag tag tag--capital" href="http://www.bbc.com/capital"
                              rev="editors-picks|source" >Capital</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/capital/story/20150812-i-just-had-to-work-harder"
                      rev="editors-picks|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    âI just had to work harderâ                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--4">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/j7/p02zj7rm.jpg" data-alt="How one Indian film influenced pop culture more than any other"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="How one Indian film influenced pop culture more than any other" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/culture/story/20150813-sholay-the-star-wars-of-bollywood"
                              rev="editors-picks|headline" >
                                                            Bollywood's Star Wars?                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            How one Indian film influenced pop culture more than any other                                                    </p>
                    
                                            <a class="media__tag tag tag--culture" href="http://www.bbc.com/culture"
                              rev="editors-picks|source" >Culture</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/culture/story/20150813-sholay-the-star-wars-of-bollywood"
                      rev="editors-picks|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Bollywood's Star Wars?                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--5">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/hm/p02zhmbf.jpg" data-alt="Why some people are more resilient to trauma"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Why some people are more resilient to trauma" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/future/story/20150813-the-secrets-of-extraordinary-survivors"
                              rev="editors-picks|headline" >
                                                            The secrets of extreme survivors                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Why some people are more resilient to trauma                                                    </p>
                    
                                            <a class="media__tag tag tag--future" href="http://www.bbc.com/future"
                              rev="editors-picks|source" >Future</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/future/story/20150813-the-secrets-of-extraordinary-survivors"
                      rev="editors-picks|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    The secrets of extreme survivors                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--6">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2x/2j/p02x2jtk.jpg" data-alt="A chance trail leads to a once-in-a-lifetime find"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="A chance trail leads to a once-in-a-lifetime find" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/travel/story/20150630-hunting-the-blue-yeti-of-bhutan"
                              rev="editors-picks|headline" >
                                                            Hunting a Himalayan myth                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            A chance trail leads to a once-in-a-lifetime find                                                    </p>
                    
                                            <a class="media__tag tag tag--travel" href="http://www.bbc.com/travel"
                              rev="editors-picks|source" >Travel</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/travel/story/20150630-hunting-the-blue-yeti-of-bhutan"
                      rev="editors-picks|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Hunting a Himalayan myth                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--7">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/12F95/production/_84871777_thinkstockphotos-528790625-1.jpg" data-alt="An empty plate"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="An empty plate" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/magazine-33915555"
                              rev="editors-picks|headline" >
                                                            My Irish clean plates neurosis                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            His mother's demands for clean plates at the end of meals have stayed with Colm O'Regan all his...                                                    </p>
                    
                                            <a class="media__tag tag tag--magazine" href="/news/magazine"
                              rev="editors-picks|source" >Magazine</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/magazine-33915555"
                      rev="editors-picks|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    My Irish clean plates neurosis                </a>
            </div>

        </li>
     </ul> </div>   <div class="most-popular"> <div class="top-list"> <h2 class="top-list__heading">Most Popular in News</h2> <ul class="top-list__list">  <li class="top-list-item top-list-item__1 top-list-item--ranked top-list-item--odd"> <a class="top-list-item__link" href="http://www.bbc.co.uk/news/world-europe-33103246"   rev="most-popular|link" > <span class="top-list-item__bullet">1</span> <h3 class="top-list-item__headline">Migrants: What can Europe achieve?</h3> </a> </li>  <li class="top-list-item top-list-item__2 top-list-item--ranked top-list-item--even"> <a class="top-list-item__link" href="http://www.bbc.co.uk/news/world-asia-india-33877140"   rev="most-popular|link" > <span class="top-list-item__bullet">2</span> <h3 class="top-list-item__headline">BBC News</h3> </a> </li>  <li class="top-list-item top-list-item__3 top-list-item--ranked top-list-item--odd"> <a class="top-list-item__link" href="http://www.bbc.co.uk/news/world-us-canada-33941913"   rev="most-popular|link" > <span class="top-list-item__bullet">3</span> <h3 class="top-list-item__headline">IS leader 'raped' US hostage Mueller</h3> </a> </li>  <li class="top-list-item top-list-item__4 top-list-item--ranked top-list-item--even"> <a class="top-list-item__link" href="http://www.bbc.co.uk/news/world-us-canada-33942098"   rev="most-popular|link" > <span class="top-list-item__bullet">4</span> <h3 class="top-list-item__headline">BBC News</h3> </a> </li>  </ul> </div> </div>  <div class="advert advert--native"><!-- BBCDOTCOM slot native --><div id="bbccom_native_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('native', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </div> </div> </section>      <section class="module module--collapse-images module--special-features"> <div class="module__content"> <ul class="features">   <li class="feature feature--1"> <h2 class="feature__title"> <a class="feature__link" href="http://www.bbc.com/news/business"   rev="special-features|header" > Business </a> </h2> <div class="feature__content">     
        
            <div class="media media--overlay media--primary block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/mcs/media/images/73940000/jpg/_73940301_178bb998-f08b-4fad-a03a-66d8c2c2bd0d.jpg" data-alt="Nanex chart showing trading during the Google flash crash"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Nanex chart showing trading during the Google flash crash" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/business-33929830"
                              rev="special-features|headline" >
                                                            'Flash crash' trader freed on bail                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--business" href="/news/business"
                              rev="special-features|source" >Business</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/business-33929830"
                      rev="special-features|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    'Flash crash' trader freed on bail                </a>
            </div>

        
     </div> <div class="feature__ad"> <div class="advert advert--module_feature-1 advert--sponsor"><!-- BBCDOTCOM slot module_feature-1 --><div id="bbccom_module_feature-1_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('module_feature-1', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </div> </li>  <li class="feature-ad"> <div class="advert advert--mpu_middle"><!-- BBCDOTCOM slot mpu_middle --><div id="bbccom_mpu_middle_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('mpu_middle', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </li>   <li class="feature feature--2"> <h2 class="feature__title"> <a class="feature__link" href="http://www.bbc.com/news/business"   rev="special-features|header" > Business </a> </h2> <div class="feature__content">     
        
            <div class="media media--overlay media--primary block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/B78B/production/_84878964_gettyimages-483811470.jpg" data-alt="French workers on a building site"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="French workers on a building site" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/business-33925852"
                              rev="special-features|headline" >
                                                            Eurozone economy grows by 0.3%                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--business" href="/news/business"
                              rev="special-features|source" >Business</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/business-33925852"
                      rev="special-features|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Eurozone economy grows by 0.3%                </a>
            </div>

        
     </div> <div class="feature__ad"> <div class="advert advert--module_feature-2 advert--sponsor"><!-- BBCDOTCOM slot module_feature-2 --><div id="bbccom_module_feature-2_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('module_feature-2', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </div> </li>  </ul> </div> </section>       <section class="module module--collapse-images module--video module--highlight">             <h2 class="module__title">
                            <span class="module__title__link tag tag--default">Featured video</span>
                    </h2>
     <div class="module__content"> <div class="video video--noslick" id="video" data-wwhp-module="video"> <div class="video__player"> <div id="player" class="video__smp"></div>     
        
            <div class="media media--primary media--overlay media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/411C/production/_84886661_84886660.jpg" data-alt="Duke and Duchess of Cambridge with Prince George"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Duke and Duchess of Cambridge with Prince George" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/news/uk-33925726"
                              rev="video|headline" >
                                                            'William adamant over George privacy'                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Kensington Palace issues a statement asking global media not to publish any unofficial paparazzi photos of Prince George following an increase in harassment of the young prince.                                                    </p>
                    
                                            <a class="media__tag tag tag--uk" href="/news/uk"
                              rev="video|source" >UK</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/news/uk-33925726"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    'William adamant over George privacy'                </a>
            </div>

        
     </div> <div class="video__content"> <ul class="video__tabs">  <li class="video__tab"> <a class="video__tab__link" data-category="recommended"> Recommended </a> </li>  <li class="video__tab"> <a class="video__tab__link" data-category="most-watched"> Most Watched </a> </li>  <li class="video__tab"> <a class="video__tab__link" data-category="latest"> Latest </a> </li>  </ul> <div class="video__viewport"> <ul class="video__items">  <li class="video__item video__item video__item--0 video__item--recommended" data-category="recommended" data-index="0" data-category-index="0" data-video="{&quot;id&quot;:&quot;201508141539-william-adamant-over-george-privacy&quot;,&quot;type&quot;:&quot;video&quot;,&quot;title&quot;:&quot;'William adamant over George privacy'&quot;,&quot;url&quot;:&quot;http:\/\/www.bbc.com\/news\/uk-33925726&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/411C\/production\/_84886661_84886660.jpg&quot;,&quot;imgalttext&quot;:&quot;Duke and Duchess of Cambridge with Prince George&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;summary&quot;:&quot;Kensington Palace issues a statement asking global media not to publish any unofficial paparazzi photos of Prince George following an increase in harassment of the young prince.&quot;,&quot;sourcename&quot;:&quot;UK&quot;,&quot;sourceurl&quot;:&quot;\/news\/uk&quot;,&quot;customsource&quot;:true,&quot;allowadvertising&quot;:false,&quot;sourceid&quot;:&quot;uk&quot;,&quot;itemtype&quot;:&quot;curated&quot;,&quot;pid&quot;:&quot;p02zmhjd&quot;}">     
        
            <div class="media media--video media--horizontal media--primary media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/411C/production/_84886661_84886660.jpg" data-alt="Duke and Duchess of Cambridge with Prince George"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Duke and Duchess of Cambridge with Prince George" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/news/uk-33925726"
                              rev="video|headline" >
                                                            'William adamant over George privacy'                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--uk" href="/news/uk"
                              rev="video|source" >UK</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/news/uk-33925726"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    'William adamant over George privacy'                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--1 video__item--recommended" data-category="recommended" data-index="1" data-category-index="1" data-video="{&quot;id&quot;:&quot;201508131934-us-newlyweds-tried-to-join-islamic-state&quot;,&quot;type&quot;:&quot;video&quot;,&quot;title&quot;:&quot;US newlyweds tried to join Islamic State&quot;,&quot;url&quot;:&quot;http:\/\/www.bbc.com\/news\/world-us-canada-33900194&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/15397\/production\/_84853968_iscouplede27.jpg&quot;,&quot;imgalttext&quot;:&quot;A Mississippi couple is accused of trying to join the Islamic State group&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;summary&quot;:&quot;A couple from Mississippi remain in custody after being stopped at a Mississippi airport allegedly on their way to join the Islamic State militant group.&quot;,&quot;allowadvertising&quot;:true,&quot;sourcename&quot;:&quot;US &amp;amp; Canada&quot;,&quot;sourceurl&quot;:&quot;\/news\/world\/us_and_canada&quot;,&quot;customsource&quot;:true,&quot;sourceid&quot;:&quot;us---canada&quot;,&quot;itemtype&quot;:&quot;curated&quot;,&quot;pid&quot;:&quot;p02zgwxs&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/15397/production/_84853968_iscouplede27.jpg" data-alt="A Mississippi couple is accused of trying to join the Islamic State group"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="A Mississippi couple is accused of trying to join the Islamic State group" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/news/world-us-canada-33900194"
                              rev="video|headline" >
                                                            US newlyweds tried to join Islamic State                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--us---canada" href="/news/world/us_and_canada"
                              rev="video|source" >US &amp; Canada</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/news/world-us-canada-33900194"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    US newlyweds tried to join Islamic State                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--2 video__item--recommended" data-category="recommended" data-index="2" data-category-index="2" data-video="{&quot;id&quot;:&quot;201508131554-drone-video-shows-china-blast-site&quot;,&quot;type&quot;:&quot;video&quot;,&quot;title&quot;:&quot;Drone video shows China blast site&quot;,&quot;url&quot;:&quot;http:\/\/www.bbc.com\/news\/world-asia-33901950&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/9209\/production\/_84858373_84858243.jpg&quot;,&quot;imgalttext&quot;:&quot;Fire and burnt out buildings&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;summary&quot;:&quot;Footage filmed by a drone shows the devastation caused by the explosion at a warehouse in Tianjin in northern China.&quot;,&quot;sourcename&quot;:&quot;Asia&quot;,&quot;sourceurl&quot;:&quot;\/news\/world\/asia&quot;,&quot;customsource&quot;:true,&quot;allowadvertising&quot;:false,&quot;sourceid&quot;:&quot;asia&quot;,&quot;itemtype&quot;:&quot;curated&quot;,&quot;pid&quot;:&quot;p02zhmn2&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/9209/production/_84858373_84858243.jpg" data-alt="Fire and burnt out buildings"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Fire and burnt out buildings" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/news/world-asia-33901950"
                              rev="video|headline" >
                                                            Drone video shows China blast site                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--asia" href="/news/world/asia"
                              rev="video|source" >Asia</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/news/world-asia-33901950"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Drone video shows China blast site                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--3 video__item--recommended" data-category="recommended" data-index="3" data-category-index="3" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;type&quot;:&quot;MAP&quot;,&quot;title&quot;:&quot;Tightrope record bid 300m high&quot;,&quot;url&quot;:&quot;\/news\/world-us-canada-33901947&quot;,&quot;summary&quot;:&quot;A Canadian man has set a new world record by walking along a rope suspended 300m above the ground without any safety equipment.&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/13C63\/production\/_84859908_84859659.jpg&quot;,&quot;imgalttext&quot;:&quot;Spencer Seabroke walking on the rope&quot;,&quot;pid&quot;:&quot;p02zhfvq&quot;,&quot;sourcename&quot;:&quot;US &amp;amp; Canada&quot;,&quot;sourceurl&quot;:&quot;\/news\/world\/us_and_canada&quot;,&quot;created&quot;:&quot;2015-08-13T07:19:22+00:00&quot;,&quot;updated&quot;:&quot;2015-08-13T07:19:22+00:00&quot;,&quot;origincode&quot;:&quot;cpsprodpb&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;sourceid&quot;:&quot;videos-must-see&quot;,&quot;itemtype&quot;:&quot;feed&quot;,&quot;allowadvertising&quot;:true,&quot;duration&quot;:&quot;PT2M7S&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/13C63/production/_84859908_84859659.jpg" data-alt="Spencer Seabroke walking on the rope"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Spencer Seabroke walking on the rope" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-us-canada-33901947"
                              rev="video|headline" >
                                                            Tightrope record bid 300m high                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--videos-must-see" href="/news/world/us_and_canada"
                              rev="video|source" >US &amp; Canada</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-us-canada-33901947"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Tightrope record bid 300m high                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--4 video__item--recommended" data-category="recommended" data-index="4" data-category-index="4" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;type&quot;:&quot;MAP&quot;,&quot;title&quot;:&quot;Rare albino humpback whale spotted&quot;,&quot;url&quot;:&quot;\/news\/world-australia-33854237&quot;,&quot;summary&quot;:&quot;A rare white humpback whale has been spotted off Australia's Gold Coast.&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/11D50\/production\/_84804037_84802817.jpg&quot;,&quot;imgalttext&quot;:&quot;The white whale spotted off Australia's Gold Coast&quot;,&quot;pid&quot;:&quot;p02z82my&quot;,&quot;sourcename&quot;:&quot;Australia&quot;,&quot;sourceurl&quot;:&quot;\/news\/world\/australia&quot;,&quot;created&quot;:&quot;2015-08-10T16:12:06+00:00&quot;,&quot;updated&quot;:&quot;2015-08-10T16:12:06+00:00&quot;,&quot;origincode&quot;:&quot;cpsprodpb&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;sourceid&quot;:&quot;videos-must-see&quot;,&quot;itemtype&quot;:&quot;feed&quot;,&quot;allowadvertising&quot;:true,&quot;duration&quot;:&quot;PT40S&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/11D50/production/_84804037_84802817.jpg" data-alt="The white whale spotted off Australia's Gold Coast"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="The white whale spotted off Australia's Gold Coast" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-australia-33854237"
                              rev="video|headline" >
                                                            Rare albino humpback whale spotted                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--videos-must-see" href="/news/world/australia"
                              rev="video|source" >Australia</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-australia-33854237"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Rare albino humpback whale spotted                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--5 video__item--recommended" data-category="recommended" data-index="5" data-category-index="5" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;type&quot;:&quot;MAP&quot;,&quot;title&quot;:&quot;Astronauts bite into space salad&quot;,&quot;url&quot;:&quot;\/news\/science-environment-33854240&quot;,&quot;summary&quot;:&quot;Astronauts on board the International Space Station (ISS) sample some space-grown lettuce.&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/14F5A\/production\/_84805858_84805857.jpg&quot;,&quot;imgalttext&quot;:&quot;ISS astronauts try space-grown lettuce&quot;,&quot;pid&quot;:&quot;p02z8qx1&quot;,&quot;sourcename&quot;:&quot;Science &amp;amp; Environment&quot;,&quot;sourceurl&quot;:&quot;\/news\/science_and_environment&quot;,&quot;created&quot;:&quot;2015-08-10T18:23:09+00:00&quot;,&quot;updated&quot;:&quot;2015-08-10T20:42:23+00:00&quot;,&quot;origincode&quot;:&quot;cpsprodpb&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;sourceid&quot;:&quot;videos-must-see&quot;,&quot;itemtype&quot;:&quot;feed&quot;,&quot;allowadvertising&quot;:true,&quot;duration&quot;:&quot;PT1M20S&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/14F5A/production/_84805858_84805857.jpg" data-alt="ISS astronauts try space-grown lettuce"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="ISS astronauts try space-grown lettuce" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/science-environment-33854240"
                              rev="video|headline" >
                                                            Astronauts bite into space salad                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--videos-must-see" href="/news/science_and_environment"
                              rev="video|source" >Science &amp; Environment</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/science-environment-33854240"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Astronauts bite into space salad                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--6 video__item--most-watched" data-category="most-watched" data-index="6" data-category-index="0" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;title&quot;:&quot;Crowdfunding: What are the risks?&quot;,&quot;url&quot;:&quot;\/news\/business-32127899&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/mcs\/media\/images\/82025000\/jpg\/_82025726_82025724.jpg&quot;,&quot;allowadvertising&quot;:true,&quot;pid&quot;:&quot;p02n58k6&quot;,&quot;duration&quot;:&quot;PT2M9S&quot;,&quot;sourcename&quot;:&quot;Business&quot;,&quot;sourceurl&quot;:&quot;\/news\/business&quot;,&quot;summary&quot;:&quot;There have been calls in Europe for protection for investors in crowdfunding investment schemes.&quot;,&quot;imgalttext&quot;:&quot;Ego, an ultra light aircraft meant for fun flying&quot;,&quot;origincode&quot;:&quot;mcs&quot;}">     
        
            <div class="media media--video media--horizontal block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/mcs/media/images/82025000/jpg/_82025726_82025724.jpg" data-alt="Ego, an ultra light aircraft meant for fun flying"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Ego, an ultra light aircraft meant for fun flying" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/business-32127899"
                              rev="video|headline" >
                                                            Crowdfunding: What are the risks?                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--" href="/news/business"
                              rev="video|source" >Business</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/business-32127899"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Crowdfunding: What are the risks?                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--7 video__item--latest" data-category="latest" data-index="7" data-category-index="0" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;type&quot;:&quot;MAP&quot;,&quot;title&quot;:&quot;Time bandits: Re-setting the clocks&quot;,&quot;url&quot;:&quot;\/news\/world-asia-pacific-33938952&quot;,&quot;summary&quot;:&quot;The Greenwich Meridian line in London is the 'starting point' for time zones across the globe but some countries have rebelled and turned into Time Bandits.&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/A473\/production\/_84899024_84899023.jpg&quot;,&quot;imgalttext&quot;:&quot;BBC Mundo journalist Gabriela Torres holding a clock, standing in front of a clock&quot;,&quot;pid&quot;:&quot;p02zp2v1&quot;,&quot;sourcename&quot;:&quot;Asia&quot;,&quot;sourceurl&quot;:&quot;\/news\/world\/asia&quot;,&quot;created&quot;:&quot;2015-08-14T15:33:44+00:00&quot;,&quot;updated&quot;:&quot;2015-08-14T19:47:46+00:00&quot;,&quot;origincode&quot;:&quot;cpsprodpb&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;allowadvertising&quot;:true,&quot;duration&quot;:&quot;PT2M7S&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/A473/production/_84899024_84899023.jpg" data-alt="BBC Mundo journalist Gabriela Torres holding a clock, standing in front of a clock"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="BBC Mundo journalist Gabriela Torres holding a clock, standing in front of a clock" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-asia-pacific-33938952"
                              rev="video|headline" >
                                                            Time bandits: Re-setting the clocks                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--" href="/news/world/asia"
                              rev="video|source" >Asia</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-asia-pacific-33938952"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Time bandits: Re-setting the clocks                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--8 video__item--latest" data-category="latest" data-index="8" data-category-index="1" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;type&quot;:&quot;MAP&quot;,&quot;title&quot;:&quot;Selina Scott: My feud with Trump&quot;,&quot;url&quot;:&quot;\/news\/world-us-canada-33936773&quot;,&quot;summary&quot;:&quot;BBC TV presenter Selina Scott has had problems with Donald Trump for a long time - since 1995, she tells Newsnight.&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/4E48\/production\/_84904002_hi006134146.jpg&quot;,&quot;imgalttext&quot;:&quot;Selina Scott&quot;,&quot;pid&quot;:&quot;p02znwjt&quot;,&quot;sourcename&quot;:&quot;US &amp;amp; Canada&quot;,&quot;sourceurl&quot;:&quot;\/news\/world\/us_and_canada&quot;,&quot;created&quot;:&quot;2015-08-14T18:06:40+00:00&quot;,&quot;updated&quot;:&quot;2015-08-14T18:06:40+00:00&quot;,&quot;origincode&quot;:&quot;cpsprodpb&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;allowadvertising&quot;:true,&quot;duration&quot;:&quot;PT4M50S&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/4E48/production/_84904002_hi006134146.jpg" data-alt="Selina Scott"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Selina Scott" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-us-canada-33936773"
                              rev="video|headline" >
                                                            Selina Scott: My feud with Trump                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--" href="/news/world/us_and_canada"
                              rev="video|source" >US &amp; Canada</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-us-canada-33936773"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Selina Scott: My feud with Trump                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--9 video__item--latest" data-category="latest" data-index="9" data-category-index="2" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;type&quot;:&quot;MAP&quot;,&quot;title&quot;:&quot;US embassy in Cuba reopens&quot;,&quot;url&quot;:&quot;\/news\/world-latin-america-33938411&quot;,&quot;summary&quot;:&quot;The US has reopened its embassy in Cuba more than 54 years after it was closed, in a symbolic step signalling the warming of ties between both countries.&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/15A18\/production\/_84900688_84898366.jpg&quot;,&quot;imgalttext&quot;:&quot;John Kerry looks on at US flag&quot;,&quot;pid&quot;:&quot;p02zpk3g&quot;,&quot;sourcename&quot;:&quot;Latin America &amp;amp; Caribbean&quot;,&quot;sourceurl&quot;:&quot;\/news\/world\/latin_america&quot;,&quot;created&quot;:&quot;2015-08-14T20:01:25+00:00&quot;,&quot;updated&quot;:&quot;2015-08-14T22:14:08+00:00&quot;,&quot;origincode&quot;:&quot;cpsprodpb&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;allowadvertising&quot;:true,&quot;duration&quot;:&quot;PT6M23S&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/15A18/production/_84900688_84898366.jpg" data-alt="John Kerry looks on at US flag"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="John Kerry looks on at US flag" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/world-latin-america-33938411"
                              rev="video|headline" >
                                                            US embassy in Cuba reopens                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--" href="/news/world/latin_america"
                              rev="video|source" >Latin America &amp; Caribbean</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/world-latin-america-33938411"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    US embassy in Cuba reopens                </a>
            </div>

        
     </li>  <li class="video__item video__item video__item--10 video__item--latest" data-category="latest" data-index="10" data-category-index="3" data-video="{&quot;contenttype&quot;:&quot;video&quot;,&quot;num&quot;:&quot;10&quot;,&quot;type&quot;:&quot;MAP&quot;,&quot;title&quot;:&quot;Warning over Prince George photos&quot;,&quot;url&quot;:&quot;\/news\/uk-33925723&quot;,&quot;summary&quot;:&quot;Kensington Palace issues a statement asking global media not to publish any unofficial paparazzi photos of Prince George.&quot;,&quot;img&quot;:&quot;http:\/\/ichef.bbci.co.uk\/wwhp\/800\/cpsprodpb\/0922\/production\/_84883320_84879536.jpg&quot;,&quot;imgalttext&quot;:&quot;Prince George&quot;,&quot;pid&quot;:&quot;p02znxk7&quot;,&quot;sourcename&quot;:&quot;UK&quot;,&quot;sourceurl&quot;:&quot;\/news\/uk&quot;,&quot;created&quot;:&quot;2015-08-14T10:17:32+00:00&quot;,&quot;updated&quot;:&quot;2015-08-14T18:02:53+00:00&quot;,&quot;origincode&quot;:&quot;cpsprodpb&quot;,&quot;gelicon&quot;:&quot;video&quot;,&quot;allowadvertising&quot;:true,&quot;duration&quot;:&quot;PT2M36S&quot;}">     
        
            <div class="media media--video media--horizontal media--icon block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/0922/production/_84883320_84879536.jpg" data-alt="Prince George"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Prince George" /></div></div>                </div>

                                    <span class="media__icon icon icon--video" aria-hidden="true"></span>
                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/uk-33925723"
                              rev="video|headline" >
                                                            Warning over Prince George photos                                                    </a>
                    </h3>

                    
                                            <a class="media__tag tag tag--" href="/news/uk"
                              rev="video|source" >UK</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/uk-33925723"
                      rev="video|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Warning over Prince George photos                </a>
            </div>

        
     </li>  </ul> </div> </div> </div> </div> </section>       <section class="module module--collapse-images module--channels"> <div class="module__content"> <div class="channels">   <div class="channel channel--channel-international channel--1"> <h2 class="channel__title"> <a class="channel__title__link" href="https://www.youtube.com/channel/UCELrWeVLazR49umE5qSF3VQ"   rev="channel-international|header" > <span class="channel__title__icon icon icon--tv"></span> The Stig on YouTube </a> </h2> <div class="channel__content">     
        
            <div class="media channel__media block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/bbc-australia/i/2dl6t0000001000" data-alt="The Stig v Lamborghini Murcielago"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="The Stig v Lamborghini Murcielago" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="https://www.youtube.com/playlist?list=PLCV1E03VGuqq9sOdHldRTZvtjdQdh_6ck"
                              rev="channel-international|headline" >
                                                            The Stig v Lamborghini Murcielago                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            The Stig gets behind the wheel of the Lamborghini Murcielago to see what it's really capable of...                                                    </p>
                    
                    
                </div>

                <a class="block-link__overlay-link"
                   href="https://www.youtube.com/playlist?list=PLCV1E03VGuqq9sOdHldRTZvtjdQdh_6ck"
                      rev="channel-international|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    The Stig v Lamborghini Murcielago                </a>
            </div>

        
      <div class="channel__ad"> <div class="advert advert--module_channel-international advert--sponsor"><!-- BBCDOTCOM slot module_channel-international --><div id="bbccom_module_channel-international_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('module_channel-international', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </div> </div> </div>   <div class="channel channel--bbc-world-news channel--2"> <h2 class="channel__title"> <a class="channel__title__link" href="http://www.bbc.com/news/world_radio_and_tv/"   rev="bbc-world-news|header" > <span class="channel__title__icon icon icon--tv"></span> BBC World News </a> </h2> <div class="channel__content">     
        
            <div class="media channel__media block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/9EDD/production/_84896604_east_india_company_snow2.jpg" data-alt="Dan Snow in a market in India"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Dan Snow in a market in India" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.co.uk/programmes/p02zmjtl"
                              rev="bbc-world-news|headline" >
                                                            The East India Company                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Dan Snow travels through India looking at the rise and fall of the East India Company                                                    </p>
                    
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.co.uk/programmes/p02zmjtl"
                      rev="bbc-world-news|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    The East India Company                </a>
            </div>

        
      <ul class="channel__links">  <li class="channel__link"> <a href="http://www.bbc.co.uk/worldnews/programmes/schedules/europe"   rev="channel-link|header" > Schedule </a> </li>  </ul>  <div class="channel__ad"> <div class="advert advert--module_bbc-world-news advert--sponsor"><!-- BBCDOTCOM slot module_bbc-world-news --><div id="bbccom_module_bbc-world-news_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('module_bbc-world-news', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> </div> </div> </div>  </div>  </div> </section>       <section class="module module--world-service"> <div class="module__content"> <div class="wsradio"> <h2 class="wsradio__title"> <a class="wsradio__title__link" href="http://www.bbc.co.uk/worldserviceradio/"   rev="world-service|header" >BBC World Service </a> </h2> <div class="wsradio__content"> <i class="wsradio__icon icon icon--audio" aria-hidden="true"></i> <a class="wsradio__programme" href="http://www.bbc.co.uk/programmes/p016tl04"   rev="world-service|link" > <span class="wsradio__programme__onair">On Air:</span> <span class="wsradio__programme__title">Business Matters</span> </a> </div> </div> </div> </section>     <div class="advert advert--parallax"><!-- BBCDOTCOM slot parallax --><div id="bbccom_parallax_1_2_3_4" class="bbccom_slot" aria-hidden="true"><div class="bbccom_advert bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.slot) { bbcdotcom.slot('parallax', [1,2,3,4]); } })(); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.show) { bbcdotcom.show() } })(); /*]]>*/ </script></div></div> <section class="module module--collapse-images module--highlight module--more-bbc">             <h2 class="module__title">
                            <span class="module__title__link tag tag--feature">More from around the BBC</span>
                    </h2>
     <div class="module__content"> <div class="container"> <div class="more-bbc"> <ul class="media-list media-list--fixed-height layout--featured">         
        <li class="media-list__item media-list__item--1">
            <div class="media media--padded media--primary block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/D9EA/production/_84868755_b3779d8b-16b8-4a59-85f1-73fdc2e33cbd.jpg" data-alt="Singer Sam Smith (right) licks the face of his wax figure at Madame Tussauds in San Francisco"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Singer Sam Smith (right) licks the face of his wax figure at Madame Tussauds in San Francisco" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/in-pictures-33904640"
                              rev="more-bbc|headline" >
                                                            Week in pictures: 8-14 August 2015                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            A selection of the best news photographs from around the world taken over the past week.                                                    </p>
                    
                                            <a class="media__tag tag tag--in-pictures" href="/news/in_pictures"
                              rev="more-bbc|source" >In Pictures</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/in-pictures-33904640"
                      rev="more-bbc|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Week in pictures: 8-14 August 2015                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--2">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/CD54/production/_84846525_black1_afp.jpg" data-alt="Cilla Black at Wimbledon in 2009"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Cilla Black at Wimbledon in 2009" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/uk-england-33938087"
                              rev="more-bbc|headline" >
                                                            Cilla 'house burglary plot foiled'                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Cilla Black's son reveals a suspected plot to burgle the entertainer's home has been foiled as a...                                                    </p>
                    
                                            <a class="media__tag tag tag--entertainment" href="/news/england"
                              rev="more-bbc|source" >England</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/uk-england-33938087"
                      rev="more-bbc|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Cilla 'house burglary plot foiled'                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--3">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/2F6A/production/_84883121_84883120.jpg" data-alt="51 Eridani b"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="51 Eridani b" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/science-environment-33922503"
                              rev="more-bbc|headline" >
                                                            Young 'alien Jupiter' discovered                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            A planet 100 light-years away resembles a young version of Jupiter, astronomers say.                                                    </p>
                    
                                            <a class="media__tag tag tag--science" href="/news/science_and_environment"
                              rev="more-bbc|source" >Science &amp; Environment</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/science-environment-33922503"
                      rev="more-bbc|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Young 'alien Jupiter' discovered                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--4">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/70EB/production/_84870982_84864828.jpg" data-alt="Samsung S6 Edge+ and Galaxy Note 5"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Samsung S6 Edge+ and Galaxy Note 5" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/technology-33859952"
                              rev="more-bbc|headline" >
                                                            Samsung unveils two big smartphones                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Samsung unveils two new large smartphones, but causes surprise by deciding not to sell one of them -...                                                    </p>
                    
                                            <a class="media__tag tag tag--technology" href="/news/technology"
                              rev="more-bbc|source" >Technology</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/technology-33859952"
                      rev="more-bbc|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Samsung unveils two big smartphones                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--5">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/cpsprodpb/9B48/production/_84825793_img-20150417-00375-2.jpg" data-alt="Researcher in hospital bed listening to music on headphones after surgery"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Researcher in hospital bed listening to music on headphones after surgery" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="/news/health-33865448"
                              rev="more-bbc|headline" >
                                                            Music during surgery 'reduces pain'                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Listening to music before, during and after an operation can help reduce pain, scientists who have...                                                    </p>
                    
                                            <a class="media__tag tag tag--health" href="/news/health"
                              rev="more-bbc|source" >Health</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="/news/health-33865448"
                      rev="more-bbc|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    Music during surgery 'reduces pain'                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--6">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/jl/p02zjlpy.jpg" data-alt="Where small town charm goes hand-in-hand with big city perks"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="Where small town charm goes hand-in-hand with big city perks" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/travel/story/20150722-living-in-reykjavk"
                              rev="more-bbc|headline" >
                                                            A tiny capital with big city perks                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            Where small town charm goes hand-in-hand with big city perks                                                    </p>
                    
                                            <a class="media__tag tag tag--travel" href="http://www.bbc.com/travel"
                              rev="more-bbc|source" >Travel</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/travel/story/20150722-living-in-reykjavk"
                      rev="more-bbc|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    A tiny capital with big city perks                </a>
            </div>

        </li>
        
        <li class="media-list__item media-list__item--7">
            <div class="media media--padded block-link">
                <div class="media__image">
                    <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/md/p02zmd5g.jpg" data-alt="The best workplace politicians know how to play this game, and they do it well"><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="The best workplace politicians know how to play this game, and they do it well" /></div></div>                </div>

                
                <div class="media__content">

                    <h3 class="media__title">
                        <a class="media__link" href="http://www.bbc.com/capital/story/20150813-winning-at-office-politics"
                              rev="more-bbc|headline" >
                                                            The secret to office politics                                                    </a>
                    </h3>

                                            <p class="media__summary">
                                                            The best workplace politicians know how to play this game, and they do it well                                                    </p>
                    
                                            <a class="media__tag tag tag--capital" href="http://www.bbc.com/capital"
                              rev="more-bbc|source" >Capital</a>
                    
                </div>

                <a class="block-link__overlay-link"
                   href="http://www.bbc.com/capital/story/20150813-winning-at-office-politics"
                      rev="more-bbc|overlay"                    tabindex="-1"
                   aria-hidden="true">
                    The secret to office politics                </a>
            </div>

        </li>
     </ul> </div>   <div class="correspondent-headlines"> <div class="top-list"> <h2 class="top-list__heading"><span class="top-list__heading__intro">From Our </span>Correspondents</h2> <ul class="top-list__list">  <li class="top-list-item top-list-item__1 top-list-item--avatar top-list-item--odd"> <a class="top-list-item__link" href="http://www.bbc.com/news/science-environment-33690694"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/c9/p02zc904.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> Can the smell of the sea cool the Earth?  <span class="top-list-item__byline">By Matt McGrath</span>  </h3> </a> </li>  <li class="top-list-item top-list-item__2 top-list-item--avatar top-list-item--even"> <a class="top-list-item__link" href="http://www.bbc.com/news/world-us-canada-33912465"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2x/05/p02x05s9.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> Will Joe Biden jump into the 2016 race?  <span class="top-list-item__byline">By Jon Sopel</span>  </h3> </a> </li>  <li class="top-list-item top-list-item__3 top-list-item--avatar top-list-item--odd"> <a class="top-list-item__link" href="http://www.bbc.com/news/business-33901731"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2x/w2/p02xw29f.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> Greece needs help to tackle migrant tragedy  <span class="top-list-item__byline">By Kamal Ahmed</span>  </h3> </a> </li>  <li class="top-list-item top-list-item__4 top-list-item--avatar top-list-item--even"> <a class="top-list-item__link" href="http://www.bbc.com/news/world-us-canada-33798136"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/b2/p02zb2rl.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> Jeb Bush blames Clinton for Iraq turmoil  <span class="top-list-item__byline">By Anthony Zurcher</span>  </h3> </a> </li>  <li class="top-list-item top-list-item__5 top-list-item--avatar top-list-item--odd"> <a class="top-list-item__link" href="http://www.bbc.com/news/business-33884836"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2x/05/p02x05z2.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> Would Corbyn's 'QE for people' float or sink Britain?  <span class="top-list-item__byline">By Robert Peston</span>  </h3> </a> </li>  <li class="top-list-item top-list-item__6 top-list-item--avatar top-list-item--even"> <a class="top-list-item__link" href="http://www.bbc.com/news/science-environment-33861390"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/c9/p02zc904.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> Why many are unimpressed with Australia's carbon plan  <span class="top-list-item__byline">By Matt McGrath</span>  </h3> </a> </li>  <li class="top-list-item top-list-item__7 top-list-item--avatar top-list-item--odd"> <a class="top-list-item__link" href="http://www.bbc.com/news/technology-33833074"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/2z/7g/p02z7gfl.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> Encounter with a 'professional cyberstalker'  <span class="top-list-item__byline">By Dave Lee</span>  </h3> </a> </li>  <li class="top-list-item top-list-item__8 top-list-item--avatar top-list-item--even"> <a class="top-list-item__link" href="http://www.bbc.com/future/story/20150804-shop-but-dont-enter-the-strange-world-of-dark-stores"   rev="correspondents|link" >  <div class="top-list-item__bullet"> <div class="responsive-image"><div class="delayed-image-load" data-src="http://ichef.bbci.co.uk/wwhp/{width}/ibroadcast/images/live/p0/28/d2/p028d244.jpg" data-alt=""><img src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7" alt="" /></div></div> </div>  <h3 class="top-list-item__headline"> The strange world of dark stores  <span class="top-list-item__byline">By Chris Baraniuk</span>  </h3> </a> </li>  </ul> </div> </div>  </div> </div> </section>       <section class="module module--highlight module--languages">             <h2 class="module__title">
                            <a class="module__title__link" href="/worldserviceradio"
                      rev="languages|header"                     >BBC in other languages</a>
                    </h2>
     <div class="module__content"> <div class="ws">  <div class="ws-headlines"> <ul class="ws-headlines__list">  <li class="ws-headline ws-headline--russian"> <h3 class="ws-headline__language"> <a class="ws-headline__language-link" title="Russian" href="http://www.bbc.co.uk/russian/"   rev="languages|link" > Russian </a> </h3> <p class="ws-headline__title" dir="ltr"> <a class="ws-headline__title-link" title="ÐÐ²ÑÐ¾Ð³ÑÑÐ¿Ð¿Ð° ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð»Ð° Ð¿ÑÐ¾Ð³ÑÐ°Ð¼Ð¼Ñ Ð¿Ð¾Ð¼Ð¾ÑÐ¸ ÐÑÐµÑÐ¸Ð¸" href="/russian/international/2015/08/150814_greece_bailout_agreement"   rev="languages|headline" > ÐÐ²ÑÐ¾Ð³ÑÑÐ¿Ð¿Ð° ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð»Ð° Ð¿ÑÐ¾Ð³ÑÐ°Ð¼Ð¼Ñ Ð¿Ð¾Ð¼Ð¾ÑÐ¸ ÐÑÐµÑÐ¸Ð¸ </a> </p> </li>  <li class="ws-headline ws-headline--spanish"> <h3 class="ws-headline__language"> <a class="ws-headline__language-link" title="Spanish" href="http://www.bbc.co.uk/mundo/"   rev="languages|link" > Spanish </a> </h3> <p class="ws-headline__title" dir="ltr"> <a class="ws-headline__title-link" title="Â¿QuÃ© tan influyente en el mundo sigue siendo Cuba?" href="/mundo/noticias/2015/08/150814_cuba_importancia_finde_analisis_aw"   rev="languages|headline" > Â¿QuÃ© tan influyente en el mundo sigue siendo Cuba? </a> </p> </li>  <li class="ws-headline ws-headline--persian"> <h3 class="ws-headline__language"> <a class="ws-headline__language-link" title="Persian" href="http://www.bbc.co.uk/persian/"   rev="languages|link" > Persian </a> </h3> <p class="ws-headline__title" dir="rtl"> <a class="ws-headline__title-link" title="Ù¾Ø±ÚÙ Ø¢ÙØ±ÛÚ©Ø§ Ø¯Ø± Ø³ÙØ§Ø±Øª Ø§ÛÙ Ú©Ø´ÙØ± Ø¯Ø± Ú©ÙØ¨Ø§ Ø¨Ø±Ø§ÙØ±Ø§Ø´ØªÙ Ø´Ø¯" href="/persian/world/2015/08/150814_l26_john_kerry_us_embassy_cuba"   rev="languages|headline" > Ù¾Ø±ÚÙ Ø¢ÙØ±ÛÚ©Ø§ Ø¯Ø± Ø³ÙØ§Ø±Øª Ø§ÛÙ Ú©Ø´ÙØ± Ø¯Ø± Ú©ÙØ¨Ø§ Ø¨Ø±Ø§ÙØ±Ø§Ø´ØªÙ Ø´Ø¯ </a> </p> </li>  <li class="ws-headline ws-headline--portuguese"> <h3 class="ws-headline__language"> <a class="ws-headline__language-link" title="Portuguese" href="http://www.bbc.co.uk/portuguese/"   rev="languages|link" > Portuguese </a> </h3> <p class="ws-headline__title" dir="ltr"> <a class="ws-headline__title-link" title="PolÃ­tica no Brasil agora se resolve semana a semana, avalia professor" href="/portuguese/noticias/2015/08/150814_nobre_analise_tg"   rev="languages|headline" > PolÃ­tica no Brasil agora se resolve semana a semana, avalia professor </a> </p> </li>  </ul> </div>   <div class="ws-languages"> <h2 class="ws-languages__title"> <a href="/ws/languages" class="ls-languages__link"   rev="languages|header" > More Languages </a> </h2> <ul class="ws-languages__list">  <li class="ws-language ws-language--ar"> <a class="ws-language__link" href="/arabic/" title="Arabic service"   rev="languages|link" > Arabic <span class="ws-language__native"> Ø¹Ø±Ø¨Ù </span> </a> </li>  <li class="ws-language ws-language--as"> <a class="ws-language__link" href="/azeri/" title="Azeri service"   rev="languages|link" > Azeri <span class="ws-language__native"> AZÆRBAYCAN </span> </a> </li>  <li class="ws-language ws-language--bn"> <a class="ws-language__link" href="/bengali/" title="Bangla service"   rev="languages|link" > Bangla <span class="ws-language__native"> à¦¬à¦¾à¦à¦²à¦¾ </span> </a> </li>  <li class="ws-language ws-language--my"> <a class="ws-language__link" href="/burmese/" title="Burmese service"   rev="languages|link" > Burmese <span class="ws-language__native"> áá¼ááºáá¬ </span> </a> </li>  <li class="ws-language ws-language--zh"> <a class="ws-language__link" href="/zhongwen/simp/" title="Chinese service"   rev="languages|link" > Chinese <span class="ws-language__native"> ä¸­æç½ </span> </a> </li>  <li class="ws-language ws-language--fr"> <a class="ws-language__link" href="/afrique/" title="French (for Africa) service"   rev="languages|link" > French <span class="ws-language__native"> AFRIQUE </span> </a> </li>  <li class="ws-language ws-language--ha"> <a class="ws-language__link" href="/hausa/" title="Hausa service"   rev="languages|link" > Hausa <span class="ws-language__native"> HAUSA </span> </a> </li>  <li class="ws-language ws-language--hi"> <a class="ws-language__link" href="/hindi/" title="Hindi service"   rev="languages|link" > Hindi <span class="ws-language__native"> à¤¹à¤¿à¤¨à¥à¤¦à¥ </span> </a> </li>  <li class="ws-language ws-language--id"> <a class="ws-language__link" href="/indonesia/" title="Indonesian service"   rev="languages|link" > Indonesian <span class="ws-language__native"> INDONESIA </span> </a> </li>  <li class="ws-language ws-language--rw"> <a class="ws-language__link" href="/gahuza/" title="Kirundi service"   rev="languages|link" > Kinyarwanda <span class="ws-language__native"> GAHUZA </span> </a> </li>  <li class="ws-language ws-language--rn"> <a class="ws-language__link" href="/gahuza/" title="Kirundi service"   rev="languages|link" > Kirundi <span class="ws-language__native"> KIRUNDI </span> </a> </li>  <li class="ws-language ws-language--ky"> <a class="ws-language__link" href="/kyrgyz/" title="Kyrgyz service"   rev="languages|link" > Kyrgyz <span class="ws-language__native"> ÐÑÑÐ³ÑÐ· </span> </a> </li>  <li class="ws-language ws-language--ne"> <a class="ws-language__link" href="/nepali/" title="Nepali service"   rev="languages|link" > Nepali <span class="ws-language__native"> à¤¨à¥à¤ªà¤¾à¤²à¥ </span> </a> </li>  <li class="ws-language ws-language--ps"> <a class="ws-language__link" href="/pashto/" title="Pashto service"   rev="languages|link" > Pashto <span class="ws-language__native"> Ù¾ÚØªÙ </span> </a> </li>  <li class="ws-language ws-language--fa"> <a class="ws-language__link" href="/persian/" title="Persian service"   rev="languages|link" > Persian <span class="ws-language__native"> ÙØ§Ø±Ø³Û </span> </a> </li>  <li class="ws-language ws-language--pt-BR"> <a class="ws-language__link" href="/portuguese/" title="Portuguese (for Brazil) service"   rev="languages|link" > Portuguese <span class="ws-language__native"> BRASIL </span> </a> </li>  <li class="ws-language ws-language--ru"> <a class="ws-language__link" href="/russian/" title="Russian service"   rev="languages|link" > Russian <span class="ws-language__native"> ÐÐ Ð Ð£Ð¡Ð¡ÐÐÐ </span> </a> </li>  <li class="ws-language ws-language--si"> <a class="ws-language__link" href="/sinhala/" title="Sinhala service"   rev="languages|link" > Sinhala <span class="ws-language__native"> à·à·à¶à·à¶½ </span> </a> </li>  <li class="ws-language ws-language--so"> <a class="ws-language__link" href="/somali/" title="Somali service"   rev="languages|link" > Somali <span class="ws-language__native"> SOMALI </span> </a> </li>  <li class="ws-language ws-language--es"> <a class="ws-language__link" href="/mundo/" title="Spanish service"   rev="languages|link" > Spanish <span class="ws-language__native"> MUNDO </span> </a> </li>  <li class="ws-language ws-language--sw"> <a class="ws-language__link" href="/swahili/" title="Swahili service"   rev="languages|link" > Swahili <span class="ws-language__native"> SWAHILI </span> </a> </li>  <li class="ws-language ws-language--ta"> <a class="ws-language__link" href="/tamil/" title="Tamil service"   rev="languages|link" > Tamil <span class="ws-language__native"> à®¤à®®à®¿à®´à¯ </span> </a> </li>  <li class="ws-language ws-language--tr"> <a class="ws-language__link" href="/turkce/" title="Turkish service"   rev="languages|link" > Turkish <span class="ws-language__native"> TÃRKÃE </span> </a> </li>  <li class="ws-language ws-language--uk"> <a class="ws-language__link" href="/ukrainian/" title="Ukrainian service"   rev="languages|link" > Ukrainian <span class="ws-language__native"> Ð£ÐÐ ÐÐÐÐ¡Ð¬ÐA </span> </a> </li>  <li class="ws-language ws-language--ur"> <a class="ws-language__link" href="/urdu/" title="Urdu service"   rev="languages|link" > Urdu <span class="ws-language__native"> Ø§Ø±Ø¯Ù </span> </a> </li>  <li class="ws-language ws-language--uz"> <a class="ws-language__link" href="/uzbek/" title="Uzbek service"   rev="languages|link" > Uzbek <span class="ws-language__native"> O'ZBEK </span> </a> </li>  <li class="ws-language ws-language--vi"> <a class="ws-language__link" href="/vietnamese/" title="Vietnamese service"   rev="languages|link" > Vietnamese <span class="ws-language__native"> TIáº¾NG VIá»T </span> </a> </li>  </ul> </div>  </div> </div> </section> </div>














 <script type="text/javascript"> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-47973230-2', 'bbc.com'); ga('send', 'pageview'); </script>       </div> <div id="orb-footer"  class="orb-footer orb-footer-grey  orb-footer-promo-legacy " >  <aside role="complementary"> <div id="orb-aside" class="orb-nav-sec b-r b-g-p"> <div class="orb-footer-inner" role="navigation">  <h2 class="orb-footer-lead">Explore the BBC</h2>   <div id="orb-footer-promo" class="orb-d"></div>  <div class="orb-footer-primary-links"> <ul>    <li  class="orb-nav-news orb-d"  > <a href="http://www.bbc.co.uk/news/">News</a> </li>    <li  class="orb-nav-newsdotcom orb-w"  > <a href="http://www.bbc.com/news/">News</a> </li>    <li  class="orb-nav-sport"  > <a href="/sport/">Sport</a> </li>    <li  class="orb-nav-weather"  > <a href="/weather/">Weather</a> </li>    <li  class="orb-nav-shop orb-w"  > <a href="http://shop.bbc.com/">Shop</a> </li>    <li  class="orb-nav-earthdotcom orb-w"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-travel-dotcom orb-w"  > <a href="http://www.bbc.com/travel/">Travel</a> </li>    <li  class="orb-nav-capital orb-w"  > <a href="http://www.bbc.com/capital/">Capital</a> </li>    <li  class="orb-nav-iplayer orb-d"  > <a href="/iplayer/">iPlayer</a> </li>    <li  class="orb-nav-culture orb-w"  > <a href="http://www.bbc.com/culture/">Culture</a> </li>    <li  class="orb-nav-autos orb-w"  > <a href="http://www.bbc.com/autos/">Autos</a> </li>    <li  class="orb-nav-future orb-w"  > <a href="http://www.bbc.com/future/">Future</a> </li>    <li  class="orb-nav-tv"  > <a href="/tv/">TV</a> </li>    <li  class="orb-nav-radio"  > <a href="/radio/">Radio</a> </li>    <li  class="orb-nav-cbbc"  > <a href="/cbbc">CBBC</a> </li>    <li  class="orb-nav-cbeebies"  > <a href="/cbeebies">CBeebies</a> </li>    <li  class="orb-nav-arts orb-d"  > <a href="/arts/">Arts</a> </li>    <li  > <a href="/ww1/">WW1</a> </li>    <li  class="orb-nav-food"  > <a href="/food/">Food</a> </li>    <li  > <a href="/iwonder">iWonder</a> </li>    <li  > <a href="/education">Bitesize</a> </li>    <li  class="orb-nav-music"  > <a href="/music/">Music</a> </li>    <li  class="orb-nav-nature orb-w"  > <a href="/nature/">Nature</a> </li>    <li  class="orb-nav-earth orb-d"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-local"  > <a href="/local/">Local</a> </li>    <li  class="orb-nav-travel orb-d"  > <a href="/travel/">Travel</a> </li>    </ul> </div> </div> </div> </aside> <footer role="contentinfo"> <div id="orb-contentinfo" class="orb-nav-sec b-r b-g-p"> <div class="orb-footer-inner"> <ul>      <li  class="orb-nav-desktop"  > <a href="http://www.bbc.com">Desktop Site</a> </li>    <li  > <a href="/terms/">Terms of Use</a> </li>    <li  > <a href="/aboutthebbc/">About the BBC</a> </li>    <li  > <a href="/privacy/">Privacy Policy</a> </li>    <li  > <a href="/privacy/cookies/about">Cookies</a> </li>    <li  > <a href="/accessibility/">Accessibility Help</a> </li>    <li  > <a href="/guidance/">Parental Guidance</a> </li>    <li  > <a href="/contact/">Contact the BBC</a> </li>        </ul> <small> <span class="orb-hilight">Copyright &copy; 2015 BBC.</span> The BBC is not responsible for the content of external sites. <a href="/help/web/links/" class="orb-hilight">Read about our approach to external linking.</a> </small> </div> </div> </footer> </div>     <!-- BBCDOTCOM bodyLast --><div class="bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ if (window.bbcdotcom && window.bbcdotcom.analytics) { bbcdotcom.analytics.page(); } if (window.bbcdotcom && bbcdotcom.currencyProviders) { bbcdotcom.currencyProviders.write(); } /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ if (window.bbcdotcom && bbcdotcom.currencyProviders) { bbcdotcom.currencyProviders.postWrite(); } /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ /** * ASNYC waits to make any gpt requests until the bottom of the page */ /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ if (window.bbcdotcom && bbcdotcom.data && bbcdotcom.data.stats && bbcdotcom.data.stats === 1 && bbcdotcom.utils && window.location.pathname === '/' && window.bbccookies && bbccookies.readPolicy('performance') ) { var wwhpEdition = bbcdotcom.utils.getMetaPropertyContent('wwhp-edition'); var _sf_async_config={}; /** CONFIGURATION START **/ _sf_async_config.uid = 50924; _sf_async_config.domain = "bbc.co.uk"; _sf_async_config.title = "Homepage"+(wwhpEdition !== '' ? ' - '+wwhpEdition : ''); _sf_async_config.sections = "Homepage"+(wwhpEdition !== '' ? ', Homepage - '+wwhpEdition : ''); _sf_async_config.region = wwhpEdition; _sf_async_config.path = "/"+(wwhpEdition !== '' ? '?'+wwhpEdition : ''); /** CONFIGURATION END **/ (function(){ function loadChartbeat() { window._sf_endpt=(new Date()).getTime(); var e = document.createElement("script"); e.setAttribute("language", "javascript"); e.setAttribute("type", "text/javascript"); e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js'); document.body.appendChild(e); } var oldonload = window.onload; window.onload = (typeof window.onload != "function") ? loadChartbeat : function() { oldonload(); loadChartbeat(); }; })(); } /*]]>*/ </script></div> <!-- BBCDOTCOM all code in page -->  <script type="text/javascript"> document.write('<' + 'script id="orb-js-script" data-assetpath="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/" src="http://static.bbci.co.uk/frameworks/barlesque/2.84.11/orb/4/script' + (( document.cookie.indexOf('ckns_debugorbjs') > -1 )? '-debug' : '') + '/orb.js"><' + '/script>'); </script>  <script type="text/javascript"> (function() {
    'use strict';

    var promoManager = {
        url: '',
        segments: ['a', 'b'],
        promoLoaded: false,
                makeUrl: function (variant, theme, win) {
            var loc = win? win.location : window.location,
                proto = loc.protocol,
                host = loc.host,
                url = proto + '//' + ((proto.match(/s:/i) && !host.match(/^www\.(int|test)\./i))? 'ssl.' : 'www.'),
                themes = ['light', 'dark'];

            if ( host.match(/^(?:www|ssl)\.(int|test|stage|live)\.bbc\./i) ) {
                url += RegExp.$1 + '.';
            }
            else if ( host.match(/^pal\.sandbox\./i) ) {
                url += 'test.';
            }

                        theme = themes[ +(theme === themes[0]) ];

           return url + 'bbc.co.uk/navpromo/' + variant + '/' + theme;
        },
                validSegment: function (segment) {
            var validSegments = this.segments;

            for (var i = 0, len = validSegments.length; i < len; i++) {
                if (validSegments[i] === segment) {
                    return segment;
                }
            }

            return validSegments[0];
        },
                init: function(node) {
            var disabledByCookie = (document.cookie.indexOf('ckns_orb_nopromo=1') > -1),
                orbFullWidth     = (document.getElementById('orb-aside').offsetWidth >= 1008),
                that = this;

            if (window.promomanagerOverride) {
                for (var p in promomanagerOverride) {
                    that[p] = promomanagerOverride[p];
                }
            }

            if ( window.orb.fig('uk') && orbFullWidth && !disabledByCookie ) {
                require(['orb/async/_footerpromo', 'istats-1'], function(promo, istats) {
                                        var mandolinEndDate = new Date().getTime() + (7 * 60 * 60 * 24) * 1000,
                        mandolin = new bbc.Mandolin('footer-promo', that.segments, {rate: 0.2, end: mandolinEndDate}),
                        segmentToRequest = that.validSegment(mandolin.getSegment());

                    that.url = (window.promomanagerOverride || that).makeUrl(segmentToRequest, 'light');

                    if (that.url) {
                        promo.load(that.url, node, {
                                                          onSuccess: function(e) {
                                istats.addLabels({ 'campaignID': e.campaignID });
                                if (segmentToRequest === mandolin.getSegment()) {
                                    istats.addLabels({ 'promo_id_segment': e.campaignID + ':' + mandolin.getSegment() });
                                }
                                istats.track('internal', {region: node, linkLocation : 'orb-footer-promo'});

                                istats.log('display', 'orb-footer-promo-displayed', {campaignID : e.campaignID, testVariant: segmentToRequest});
                                node.className = node.className + ' orb-footer-promo-loaded';
                                promoManager.promoLoaded = true;
                                promoManager.event('promo-loaded').fire(e);
                             },
                             onError: function() {
                                istats.log('error', 'orb-footer-promo-failed');
                                document.cookie = 'ckns_orb_nopromo=1; expires=' + new Date(new Date().getTime() + 1000 * 60 * 10).toGMTString() + ';';
                             }
                        });
                    }
                });
            }
        }
    };


    define('orb/promomanager', ['orb/lib/_event'], function (event) {
        event.mixin(promoManager);
        return promoManager;
    });

    require(['orb/promomanager'], function (promoManager) {
        promoManager.init(document.getElementById('orb-footer-promo'));
    })
})();
 </script>   <script type="text/javascript"> if (typeof require !== 'undefined') { require(['istats-1'], function(istats){ istats.track('external', { region: document.getElementsByTagName('body')[0] }); istats.track('download', { region: document.getElementsByTagName('body')[0] }); }); }  </script>               </body> </html>           