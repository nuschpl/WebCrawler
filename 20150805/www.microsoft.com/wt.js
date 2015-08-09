/*
 Copyright 2014 webtrends Inc. All Rights Reserved.
 WEBTRENDS PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
*/
(function(l,u,K,L){function E(l,k,u,E){var d=this,F=!1,z=2E3,v="undefined"!=typeof _wt_forceSSL&&_wt_forceSSL?"https:":"https:"==document.location.protocol?"https:":"http:",G="sizzle",A=null,B=!1,w=!1,h={},r=!1,H=!1;h.s_eventHandlers={};this.isBodyExtant=function(){try{return"undefined"!=typeof document.getElementsByTagName("body")[0]?!0:!1}catch(a){return WT.Debug.error("isBodyExtant: body detection fail, assuming false","002",a),!1}};this.inHead=function(){return r};this.bodyExists=function(){return H};
this.getSelector=function(){switch(G){case "sizzle":if(WT.hasVal(Sizzle))return Sizzle;break;default:if(null!==A)return A;WT.Debug.error("getSelector:  No Selector found","003");return null}};this.setCustomSelector=function(a,c){G=a;A=c};this.applyStyleSheet=function(a,c){try{var f=k.getElementsByTagName("head")[0],e=k.createElement("style");e.type="text/css";e.id=c;e.styleSheet?e.styleSheet.cssText=a:e.appendChild(k.createTextNode(a));f.appendChild(e)}catch(d){WT.Debug.error("applyStyleSheet:  Failed to failed to apply stylesheet",
"004",d)}};this.removeStyleSheet=function(a){try{var c=k.getElementById(a);"undefined"!==typeof c&&null!==c&&c.parentNode.removeChild(c)}catch(f){WT.Debug.debug("removeStyleSheet:  Failed to remove stylesheet")}};this.loaderConversionTimeoutDefault=function(){return z};this.setLoaderConversionTimeoutDefault=function(a){z=a};this.isReady=function(){return B};this.isLoaded=function(){return w};this.click=function(a,c){try{var f=2;if("undefined"!=typeof a&&"object"==typeof a){var e,g;a.type?(e=a,g=a.currentTarget?
a.currentTarget:a.srcElement):a.tagName&&(g=a);e&&(e.preventDefault?e.preventDefault():e.returnValue=!1);if(g){if(g.href){g.wt_pending||(g.wt_pending="true",g.wt_href=g.href,g.wt_target=g.target,g.href="javascript:void(0);",g.target="");c.r_redirectLink=g;var b=c.s_conversionTimeout?c.s_conversionTimeout:z;setTimeout(function(){WT.Debug.info("Click: timed out after "+b);redirectElement(g)},b)}}else c=a,f=1}e={};e.element=a;e.params=c;e.arguments=Array.prototype.slice.call(arguments,f);d.fireEvent(new WTEvent(WTEvent.LOADER_CLICK,
WTEvent.STATUS_SUCCESS,null,e))}catch(h){"object"==typeof a&&a.href&&c.r_redirectLink===a&&(a.href=a.wt_href,a.target=a.wt_target),WT.Debug.error("Click: Fatal error, check error message for details.","005",h)}};this.redirectElement=function(a,c){c&&WT.Debug.debug(c);null!==a&&a.wt_pending&&"true"===a.wt_pending?(WT.Debug.info("click: redirecting to url ["+a.wt_href+"]"),a.href=a.wt_href,a.target=a.wt_target,a.wt_pending="","undefined"!==typeof a.wt_target&&""!==a.wt_target&&null!==a.wt_target?window.open(a.wt_href,
a.wt_target):setTimeout(function(){window.location.href=a.wt_href},0)):WT.Debug.debug("click: redirect not pending or !elm, so not redirecting")};this.execute=function(a){var c={};c.params=a;c.arguments=Array.prototype.slice.call(arguments,1);d.fireEvent(new WTEvent(WTEvent.LOADER_EXECUTE,WTEvent.STATUS_SUCCESS,null,c))};this.hasVal=function(a){return null!==a&&"undefined"!==typeof a?!0:!1};this.startTimer=function(a,c){WT.hasVal(b[a])&&(d.Debug.trace("LOADER:  api starting timer for "+c+" ms on "+
a),WT.hasVal(c)?b[a]._startTimer(c):b[a]._startTimer(1E4))};this.clearTimer=function(a){b[a]&&(d.Debug.trace("LOADER:  loader clearing timer for "+a),b[a]._clearTimer(),d.fireEvent(new WTEvent(a+"_"+WTEvent.TIMER_CLEAR,WTEvent.STATUS_SUCCESS)))};this.hideAndShow=function(a,c,f,e){try{if((WT.hasVal(a)||"shift"==c||r)&&WT.hasVal(c)&&WT.hasVal(f)){d.Debug.debug("hideAndShow:  "+(r?"tag 'inHead'":"tag 'not inHead'")+", "+(f?"showing":"hiding")+" '"+(a&&a.nodeName?a.nodeName:"unnamed elem")+"' with type '"+
c+"'");var g=function(a){f?WT.removeStyleSheet("wt_StyleSheet"):WT.applyStyleSheet(a,"wt_StyleSheet")};if("display"==c)r?g("body{ display: none !important}"):(a.style.display=f?"":"none",a==k.body||f||(k.body.style.display=""));else if("visibility"==c)r?g("body{ visibility: hidden !important}"):(a.style.visibility=f?"visible":"hidden",a.style.hidden=!f,a==k.body||f||(k.body.style.visibility="visible",k.body.style.hidden=!1));else if("shift"==c||"supershift"==c)if(!f){var b=k.getElementsByTagName("head")[0];
style=k.createElement("style");style.type="text/css";style.id="wt_shiftStyle";style.styleSheet?style.styleSheet.cssText="body{position:absolute !important; left: -1000% !important; visibility: hidden}":style.appendChild(k.createTextNode("body{position:absolute !important; left: -1000% !important;}"));b.appendChild(style)}else{if(f){var h=k.getElementById("wt_shiftStyle");h&&h.parentNode.removeChild(h)}}else if("overlay"==c){var m=k.getElementById("wt_overlay"),n=k.getElementById("wt_overlayStyle"),
p=d.hasVal(e)?e:"#ffffff";if(f&&m)m.parentNode.removeChild(m),n&&n.parentNode.removeChild(n);else if(!f&&!m){r&&d.Debug.error("hideAndShow:  Warning! wt tag detected in head, overlay mode may error out or cause flickering","007");if(!n){var l=k.createElement("style");l.setAttribute("type","text/css");l.setAttribute("id","wt_overlayStyle");g="#wt_overlay{position:absolute;width:100%;height:100%;top:0px;right:0px;bottom:0px;left:0px;background-color:"+p+";z-index:2147483646}";l.styleSheet?l.styleSheet.cssText=
g:l.appendChild(k.createTextNode(g));k.getElementsByTagName("head")[0].appendChild(l)}d.hasVal(e)?m=k.createElement("div"):(m=k.createElement("iframe"),m.frameBorder=0);m.id="wt_overlay";k.getElementsByTagName("body")[0].appendChild(m)}}else"none"==c?d.Debug.trace("LOADER: type: none"):d.Debug.debug("hideAndShow did not contain a matching type, so not hiding/showing");e={};e.displayType=c;e.display=f;WT.fireEvent(new WTEvent(WTEvent.HIDESHOW,WTEvent.STATUS_SUCCESS,a,e))}else d.Debug.error("hideAndShow param list incomplete",
"006")}catch(q){WT.Debug.error("Failure in hide/show functionality.  Verify valid HTML syntax","008",q)}};this.pollForCondition=function(a,c,f){var e=function(a,c,f,b){setTimeout(function(){b--;a()?(d.Debug.trace("pollForCondition success result\x3d"+a(),"LOADER"),d.Debug.superfine("pollForCondition success condition\x3d"+a.toString(),"LOADER"),c&&(c(),d.Debug.trace("pollForCondition running callback","LOADER"),d.Debug.superfine("pollForCondition callback\x3d"+c.toString(),"LOADER"))):0<b?e(a,c,f,
b):(d.Debug.error("pollForCondition Fail on "+a.toString(),"009"),f&&(f(),d.Debug.superfine("pollForCondition callbackFailure\x3d"+f.toString(),"LOADER")))},d.s_pollInterval)};e(a,c,f,100)};this.paramsMerge=function(a,c,f){var e={};if(WT.hasVal(a))for(var d in a)a.hasOwnProperty(d)&&(e[d]=a[d]);for(var b in c)WT.hasVal(c[b])&&c.hasOwnProperty(b)&&(WT.hasVal(f)&&WT.hasVal(f[b])?e[b]=f[b]:e[b]=c[b]);return e};this.downloadLib=function(a,c,f,e,b,h){d.Debug.info("LOADER:  Start download: "+v+h+" \x26 attach to "+
a+", async\x3d"+b);setTimeout(function(){var e=k.getElementsByTagName(a)[0],m=k.createElement("script");m.type="text/javascript";m.src=v+h;m.setAttribute("async",b);m.setAttribute("defer",b);m.wtHasRun=!1;var l=function(){!1===this.wtHasRun?(c(),this.wtHasRun=!0,d.Debug.info("Completed download: "+v+h+", callback running, set wtHasRun\x3d"+this.wtHasRun,"LOADER"),d.Debug.superfine("downloadLib: successCallback\x3d"+c.toString(),"LOADER")):d.Debug.trace("downloadLib: not running successCallback, since wtHasRun\x3d"+
this.wtHasRun,"LOADER")};c&&(m.onload=l,m.onreadystatechange=l);m.onerror=function(){d.Debug.error("FAILED download: "+v+h+" \x26 attach to "+a+", async\x3d"+b,"010");f&&(f(),d.Debug.superfine("failCallback: "+f.toString(),"LOADER"))};typeof("undefined"!==e)?e.appendChild(m):d.Debug.info("LOADER:  Dom element: "+a+" is not found so not Downloading")},e)};this.downloadLibs=function(a,c,f,e,b){if("undefined"===typeof b)d.Debug.info("LOADER:  downloadLibs srcs is empty");else{var h={},k;for(k in b)b.hasOwnProperty(k)&&
(h[k]="waiting",d.Debug.trace("LOADER:  downloadLibs is waiting on src:"+k+" \x3d "+b[k]),d.downloadLib(a,function(a){return function(){h[a]="complete";d.Debug.trace("LOADER:  downloadLibs is complete src:"+a+" \x3d "+b[a])}}(k),null,f,e,b[k]));d.pollForCondition(function(){for(var a in h)if(h.hasOwnProperty(a)&&"complete"!==h[a])return!1;return!0},function(){d.Debug.debug("LOADER:  downloadLibs completed on all downloads");c()})}};this.parseQueryString=function(a){var c=a;d.hasVal(a)&&d.hasVal(a.location)&&
d.hasVal(a.location.search)||(c=document);if(c.location.search){c=c.location.search.substring(1,c.location.search.length);a=c.split("\x26");null!==a&&0===a.length&&(a=c.split(";"));for(var c=a.length-1,f={},e=0;e<=c;e++){var b=a[e].split("\x3d");b[0]=unescape(b[0]);b[1]=unescape(b[1]);b[0]=b[0].replace(/\+/g," ");b[1]=b[1].replace(/\+/g," ");b[1]=b[1].replace(/<.*\?>/g,"");f[b[0]]=b[1]}return f}return null};this.addDOMEvent=function(a,c,f){try{return a.addEventListener?a.addEventListener(c,f,!1):
a.attachEvent?a.attachEvent(c,f):eval("elm."+c+"\x3dfunc;"),0}catch(b){return-1}};this.removeDOMEvent=function(a,c,f){try{return a.removeEventListener?a.removeEventListener(c,f,!1):a.detachEvent&&a.detachEvent(c,f),0}catch(b){return-1}};this.abortModuleHelper=function(a,c){WT.fireEvent(new WTEvent(a+"_"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS));WT.setExecuteState(a,WTEvent.LOADER_MODULE_ABORT);WT.clearTimer(a);WT.Debug.error("Aborting product: "+a,"011");WT.Debug.error("LOADER Error","011",
c)};WTEvent=function(a,c,f,b){a&&(a=a.toLowerCase());this.name=a;this.handler=null;this.state=WTEvent.STATUS_UNKNOWN;c&&(this.state=c);this.target=f;this.params={};b&&(this.params=b)};this.addEventHandler=function(a,c,b){if(!a||!c&&!b)return d.Debug.debug("events: Can not add event handler, missing name or listeners. ","LOADER"),-1;a=a.toLowerCase();h.s_eventHandlers[a]||(h.s_eventHandlers[a]={},h.s_eventHandlers[a].success=[],h.s_eventHandlers[a].fault=[]);var e=!1;if(c){for(var e=!1,g=0;g<h.s_eventHandlers[a].success.length;g++)if(d.hasVal(h.s_eventHandlers[a].success[g])&&
h.s_eventHandlers[a].success[g].toString()===c.toString()){e=!0;break}e||(h.s_eventHandlers[a].success.push(c),d.Debug.superfine("addEventHandler success handler"+h.s_eventHandlers[a].success.length+" for "+a+"\nhandler\x3d"+c.toString(),"LOADER"))}g=e?0:1;if(b){for(var e=!1,k=0;k<h.s_eventHandlers[a].fault.length;k++)if(d.hasVal(h.s_eventHandlers[a].fault[k])&&h.s_eventHandlers[a].fault[k].toString()===b.toString()){e=!0;break}e||(h.s_eventHandlers[a].fault.push(b),d.Debug.superfine("addEventHandler fault handler"+
h.s_eventHandlers[a].fault.length+" for "+a+"\nhandler\x3d"+c.toString(),"LOADER"))}return g+(e?0:1)};this.removeEventHandler=function(a,c,b){if(!a)return d.Debug.trace("LOADER removeEventHandler:  events: Can not remove event handler, missing name."),-1;a=a.toLowerCase();h.s_eventHandlers[a]||(h.s_eventHandlers[a]={},h.s_eventHandlers[a].success=[],h.s_eventHandlers[a].fault=[]);if(!c&&!b)return delete h.s_eventHandlers[a],0;var e=0;if(c)for(var g=0;g<h.s_eventHandlers[a].success.length;g++)if(d.hasVal(h.s_eventHandlers[a].success[g])&&
h.s_eventHandlers[a].success[g].toString()==c.toString()){delete h.s_eventHandlers[a].success[g];e=1;break}if(b)for(c=0;c<h.s_eventHandlers[a].fault.length;c++)if(d.hasVal(h.s_eventHandlers[a].fault[c])&&h.s_eventHandlers[a].fault[c].toString()==b.toString()){delete h.s_eventHandlers[a].fault[c];e++;break}return e};this.fireEvent=function(a,c,b){if(F&&!b)return d.Debug.error("fireEvent: Loader global abort, Aborted due to prior error, check error message for details.","012"),a.name?d.Debug.error("fireEvent(event\x3d'"+
a.name+"'): g_loaderAborted due to prior error, check error message for details.","012"):d.Debug.error("fireEvent: Aborted due to prior error, check error message for details.","012"),-1;if(!h.s_eventHandlers[a.name])return d.Debug.trace("fireEvent: no registered event was found for event name: "+a.name),-1;b=h.s_eventHandlers[a.name][a.state];if(!b)return d.Debug.trace("fireEvent: no event handler was registered for event: "+a.name+" state: "+a.state),-1;for(var e=0,g=0;g<b.length;g++)if(b[g])try{a.handler=
b[g],a.params.eventID=(new Date).getTime(),d.Debug.trace("fireEvent: [name:"+a.name+"], state:"+a.state+", handler["+g+"]","LOADER"),d.Debug.superfine("function:"+a.handler.toString()+"]","LOADER"),c?setTimeout(function(a,c){return function(){a(c)}}(b[g],a),0):a.handler(a),e++}catch(k){d.Debug.error("Unhandled Event Exception, [name: "+a.name+", state: "+a.state+", function: "+a.handler.toString()+"]","013",k)}return e};WTEvent.PREINIT="preinit";WTEvent.INIT="init";WTEvent.PRELOAD="preload";WTEvent.LOAD=
"load";WTEvent.POSTLOAD="postload";WTEvent.TIMER_EXPIRE="timer_expire";WTEvent.TIMER_CLEAR="timer_clear";WTEvent.HIDESHOW="hide_show";WTEvent.DOM_READY="dom_ready";WTEvent.DOM_ONLOAD="dom_onload";WTEvent.PAGEVIEW="pageview";WTEvent.CONVERSION="conversion";WTEvent.STATUS_SUCCESS="success";WTEvent.STATUS_FAULT="fault";WTEvent.STATUS_UNKNOWN="unknown";WTEvent.LOADER_CLICK="loader_click";WTEvent.LOADER_EXECUTE="loader_execute";WTEvent.LOADER_ABORT="loader_abort";WTEvent.LOADER_MODULE_ABORT="loader_module_abort";
WTEvent.DEBUGGER_CLEAR_COOKIES="debugger_clear_cookies";WTEvent.DEBUGGER_DUMP_PARAMS="debugger_dump_params";WTEvent.DEBUGGER_CHECK_MODE="debugger_check_mode";WTEvent.DEBUGGER_DOWNLOADED="debugger_downloaded";var I=function(a,c){this._name=a;this._state=c;this._met=!1},n=function(a,c,b){this.prodId=a;this.plugin=new c;this.executeState=n.DOWNLOADING;this.setRunningFlag=!1;this.stopTime=this.startTime=this.timer=null;this.contextName="default";"undefined"!==typeof b&&(this.contextName=b);var e=this,
g={};this.putDependency=function(a){g[a._name]=a};this.clearDependencies=function(){g={}};this.getDependency=function(a){for(var c in g)if(g.hasOwnProperty(c)&&g[c]._name==a)return g[c];return null};this.getExecuteState=function(){return this.executeState};this.hasMetDeps=function(){for(var a in g)if(g.hasOwnProperty(a)&&!1===g[a]._met)return!1;return!0};this.updateDependencyState=function(a,c){var b=e.getDependency(a);null!==b&&b._state===c&&(b._met=!0)};this._startTimer=function(a){this.timer?d.Debug.info("LOADER:  "+
this.prodId+" timer already started, using current timer."):(d.Debug.debug("LOADER:  starting timer for "+e.prodId),this.timer=setTimeout(function(){d.Debug.error("LOADER:  "+e.prodId+"module timer expired calling Abort","015");d.fireEvent(new WTEvent(e.prodId+"_"+WTEvent.TIMER_EXPIRE,WTEvent.STATUS_SUCCESS));d.fireEvent(new WTEvent(e.prodId+"_"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS))},a),this.startTime=new Date,d.Debug.info("LOADER:  "+this.prodId+" timer started ["+this.startTime+"]."))};
this._clearTimer=function(){this.stopTime=new Date;this.timer&&(clearTimeout(this.timer),this.timer=null);d.Debug.info("LOADER:  "+this.prodId+" timer cleared ["+this.stopTime+"]")}};n.DOWNLOADING="downloading";n.WAITING="waiting";n.READY="ready";n.RUNNING="running";n.COMPLETE="complete";n.ABORTED="aborted";var b={};this.registerPlugin=function(a,c){b[a.ProductName]=new n(a.ProductName,a,c);b[a.ProductName].executeState=n.DOWNLOADING;WT.hasVal(a.prototype.abort)&&WT.addEventHandler(a.ProductName+
"_"+WTEvent.LOADER_MODULE_ABORT,a.prototype.abort);if(WT.hasVal(a.prototype.wtConfigObj.s_dependencies))for(var d=[],d=a.prototype.wtConfigObj.s_dependencies.split(","),e=0;e<d.length;e++){var g=[],g=d[e].split(":");b[a.ProductName].putDependency(new I(g[0],g[1]))}};this.updateDependencies=function(a,c){if(!a||!b[a])return null;if(!c)return b[a].clearDependencies(),null;var d=[],d=c.split(",");if(!d||0==d.length)return null;b[a].clearDependencies();for(var e=0;e<d.length;e++)if(nameToState=d[e].split(":"),
2===nameToState.length)b[a].putDependency(new I(nameToState[0],nameToState[1]));else return null};this.setExecuteState=function(a,c){if(c===WTEvent.LOADER_MODULE_ABORT)b[a].executeState=n.ABORTED;else if(d.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT){b[a].executeState=c;d.Debug.trace("setExecuteState:  '"+a+"' to '"+c+"'");for(var f in b)b.hasOwnProperty(f)&&b[f].updateDependencyState(a,c);for(var e in b)if(b.hasOwnProperty(e)&&(f=b[e].getExecuteState(),b[e].hasMetDeps()&&f==n.READY&&(d.Debug.debug("setExecuteState:  '"+
e+"' has met all dependencies \x26\x26 ready, running postload"),WT.hasVal(b[e].plugin[WTEvent.POSTLOAD]))))b[e].plugin[WTEvent.POSTLOAD]()}};this.getExecuteState=function(a){return WT.hasVal(b[a])?b[a].executeState===n.ABORTED?WTEvent.LOADER_MODULE_ABORT:b[a].executeState:null};this.isDependency=function(a){for(var c in b)if(b.hasOwnProperty(c)&&null!==b[c].getDependency(a))return d.Debug.trace("isDependency:  '"+a+"' is dependency of '"+c+"'"),!0;d.Debug.trace("isDependency:  '"+a+"' is not a dependency of any product");
return!1};this.getContextUrl=function(a,c){return"//c.webtrends.com/acs/account/ep4ka8v0wg/js/"+a+"-"+c+".js"};this.getProduct=function(a){for(var c in b)if(b.hasOwnProperty(c)&&a==b[c].prodId)return b[c];return null};var x=function(a){return"undefined"!==typeof p&&"undefined"!==typeof b[a].contextName&&"undefined"!==typeof p[a]&&p[a]===b[a].contextName?(d.Debug.trace("LOADER:  context '"+b[a].contextName+"' triggered for "+a),!0):"undefined"===typeof p||"undefined"===typeof p[a]?(d.Debug.trace("LOADER:  published context triggered for "+
a),!0):!1},q=function(){B||(B=!0,WT.fireEvent(new WTEvent(WTEvent.DOM_READY,WTEvent.STATUS_SUCCESS),!0))},y=function(){w||(w=!0,WT.fireEvent(new WTEvent(WTEvent.DOM_ONLOAD,WTEvent.STATUS_SUCCESS),!0))},J=function(){try{if(document.addEventListener&&("complete"!==document.readyState&&"undefined"!==typeof document.readyState||q(),document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1);q()},!1),/WebKit|Opera/i.test(navigator.userAgent)))var a=
setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(a),q())},10);document.attachEvent&&("complete"!==document.readyState&&"loading"!==document.readyState||q(),document.attachEvent("onreadystatechange",function(){if("complete"===document.readyState||"loading"===document.readyState)document.detachEvent("onreadystatechange",arguments.callee),q()}));window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1);q()},
!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",arguments.callee,!1);q()});w?y():window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1);y()},!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",arguments.callee,!1);y()})}catch(c){q(),y()}};d.Debug=new function(){this.debugLevel=-1;this._shutdown=!1;var a=[];this.Debugger=null;this.logInfo=function(a){this.info(a)};
this.logDebug=function(a){this.debug(a)};this.logTrace=function(a){this.trace(a)};this.logError=function(a,b,d){this.error(a,b,d)};this.superfine=function(a,b){this._log(5,a,b)};this.trace=function(a,b){this._log(4,a,b)};this.debug=function(a,b){this._log(3,a,b)};this.info=function(a,b){this._log(2,a,b)};this.error=function(a,b,d,g){var h="";d&&(h="string"===typeof d?"\n"+d:"\n"+(d.message?d.message:"")+(d.name?" ["+d.name+"]":"")+(d.fileName?"\n ("+d.fileName+":"+d.lineNumber+")\n"+d.stack:""));
this._log(0,(b?b+": ":"")+a+h,g)};this._log=function(c,b,d){d&&(b=d+":  "+b);this._shutdown||a.push([c,b]);if(this._shutdown)a=[];else if(!(this.debugLevel<c)&&console){d=!0;switch(c){case 0:console.error&&(console.error(b),d=!1);break;case 1:console.warn&&(console.warn(b),d=!1);break;case 2:console.info&&(console.info(b),d=!1);break;case 3:case 4:case 5:console.log&&(console.log(b),d=!1)}!0===d&&console.log&&console.log(b)}};this.setDebugLevel=function(a){this.debugLevel=a};this.clearCookies=function(){WT.fireEvent(new WTEvent(WTEvent.DEBUGGER_CLEAR_COOKIES,
WTEvent.STATUS_SUCCESS))};this.dumpParams=function(){WT.fireEvent(new WTEvent(WTEvent.DEBUGGER_DUMP_PARAMS,WTEvent.STATUS_SUCCESS))};this.checkMode=function(a){WT.fireEvent(new WTEvent(WTEvent.DEBUGGER_CHECK_MODE,WTEvent.STATUS_SUCCESS,{resetFlag:a}))}};var r=function(){try{var a=k.getElementsByTagName("script");return"HEAD"==a[a.length-1].parentNode.nodeName?!0:!1}catch(c){return WT.Debug.error("inHead: Failed to detect if in head, assuming inHead","001",c),!0}}(),H=d.isBodyExtant(),t=this.parseQueryString(l);
l=function(a,c){d.hasVal(t[a])&&d.hasVal(c)&&c(t[a])};d.hasVal(t)&&(l("_wt.accountRoot",function(a){accountRoot=a}),l("_wt.s_jsonUrl",function(a){}),l("_wt.debug",function(a){d.Debug.setDebugLevel(a.length)}));var C=function(a){var c={};a=a.split(";");for(var b in a)if(a.hasOwnProperty(b)){var d=a[b].split(":");c[d[0]]=d[1]}return c},p=function(){if(null!==t&&t["_wt.context"])return C(t["_wt.context"]);var a;a:{a=document.cookie.split(";");for(var b=0;b<a.length;b++){var d=[];d[0]=a[b].substring(0,
a[b].indexOf("\x3d"));for(d[1]=a[b].substring(a[b].indexOf("\x3d")+1);" "===d[0].charAt(0);)d[0]=d[0].substring(1,d[0].length);if("_wt.context"==d[0]){a=d[1];break a}}a=null}if("undefined"!==typeof a&&null!==a)return C(a);a:{a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++)if("_wt.context"==a[b].name){a=a[b].content;break a}a=null}if("undefined"!=typeof a&&null!==a)return C(a)}();if("undefined"!==typeof p){d.Debug.info("LOADER:  Found one or more context(s)");for(var D in p)p.hasOwnProperty(D)&&
d.Debug.trace("LOADER:  triggers have set contextTriggerMap '"+D+"':'"+p[D]+"'")}var s=function(a){d.Debug.error("Loader Error: "+a,"016")};d.Debug.info("LOADER:  Version 1.0.0");this.addEventHandler(WTEvent.PREINIT,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.PREINIT])&&x(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&(d.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _preinit phase start"),b[a].plugin[WTEvent.PREINIT](),
d.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _preinit phase complete"))}catch(c){WT.abortModuleHelper(a,c)}},function(){s("preinit fail")});this.addEventHandler(WTEvent.INIT,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.INIT])&&x(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&(d.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _init phase start"),b[a].plugin[WTEvent.INIT](),
d.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _init phase complete"))}catch(c){WT.abortModuleHelper(a,c)}},function(){s("init fail")});this.addEventHandler(WTEvent.PRELOAD,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.PRELOAD])&&WT.hasVal(b[a].plugin.wtConfigObj)&&!0===b[a].plugin.wtConfigObj.doLoad&&x(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&(d.Debug.debug("LOADER:  product '"+a+"' with context name '"+
b[a].contextName+"' _preload phase start"),b[a].plugin[WTEvent.PRELOAD](),d.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _preload phase complete"))}catch(c){WT.abortModuleHelper(a,c)}},function(){s("preload fail")});this.addEventHandler(WTEvent.LOAD,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.LOAD])&&WT.hasVal(b[a].plugin.wtConfigObj)&&!0===b[a].plugin.wtConfigObj.doLoad&&x(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&
(d.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _load phase start"),b[a].plugin[WTEvent.LOAD](function(a){return function(){WT.setExecuteState(a,n.READY)}}(a)),d.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _load phase complete"))}catch(c){WT.abortModuleHelper(a,c)}},function(){s("load fail")});this.addEventHandler(WTEvent.LOADER_CLICK,function(a){for(var c in b)b.hasOwnProperty(c)&&d.fireEvent(new WTEvent(c+"_"+WTEvent.LOADER_CLICK,
WTEvent.STATUS_SUCCESS,null,a.params))},function(){s("click fail")});this.addEventHandler(WTEvent.LOADER_EXECUTE,function(a){for(var c in b)b.hasOwnProperty(c)&&d.fireEvent(new WTEvent(c+"_"+WTEvent.LOADER_EXECUTE,WTEvent.STATUS_SUCCESS,null,a.params))},function(){s("execute fail")});this.addEventHandler(WTEvent.LOADER_ABORT,function(){F=!0;d.Debug.error("Loader global abort event","017");try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&!0===b[a].plugin.wtConfigObj.doLoad&&(WT.fireEvent(new WTEvent(a+
"_"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS),!1,!0),WT.setExecuteState(a,WTEvent.LOADER_MODULE_ABORT),WT.clearTimer(a),WT.Debug.error("Aborting product: "+a,"018"))}catch(c){WT.abortModuleHelper(a,c)}},function(){s("abort fail")});this.start=function(){try{J();var a=function(){d.fireEvent(new WTEvent(WTEvent.PREINIT,WTEvent.STATUS_SUCCESS));d.fireEvent(new WTEvent(WTEvent.INIT,WTEvent.STATUS_SUCCESS));d.fireEvent(new WTEvent(WTEvent.PRELOAD,WTEvent.STATUS_SUCCESS));d.fireEvent(new WTEvent(WTEvent.LOAD,
WTEvent.STATUS_SUCCESS));d.Debug.debug("LOADER:  Synchronous functionality has finished firing")};if(WT.hasVal(p)){d.Debug.debug("LOADER:  contextTriggerMap contains contexts");var b=[],f;for(f in p)if(p.hasOwnProperty(f)){var e=d.getContextUrl(f,p[f]);"undefined"!==typeof e&&(d.Debug.debug("LOADER:  adding "+e+" to download"),b.push(e))}d.downloadLibs("head",a,0,!0,b)}else a()}catch(g){d.fireEvent(new WTEvent(WTEvent.LOADER_ABORT,WTEvent.STATUS_SUCCESS))}};d.Debug.debug("WT object created","LOADER");
d.Debug.info("To clear Optimize cookies use: 'WT.Debug.clearCookies()'");d.Debug.info("To dump config params use: 'WT.Debug.dumpParams()'");d.Debug.info("To check the mode use: 'WT.Debug.checkMode(false)' - Use true if you wish to reset the mode.")}"undefined"==typeof WT&&(WT=new E(window,window.document,window.navigator,window.location))})(window,window.document,window.navigator,window.location);WT.sizzleModule=function(){};
WT.sizzleModule.prototype.wtConfigObj={libUrl:"//c.webtrends.com/acs/common/js/lib/sizzle.min.js",doLoad:!0,s_dependencies:""};
WT.sizzleModule.prototype.load=function(l){try{WT.updateDependencies("sizzle",this.wtConfigObj.s_dependencies),"undefined"!=typeof Sizzle&&WT.hasVal(Sizzle)||!WT.isDependency("sizzle")?l():WT.downloadLib("head",l,function(){WT.fireEvent(new WTEvent("sizzle"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS))},0,!0,this.wtConfigObj.libUrl)}catch(u){WT.abortModuleHelper("optimize",u)}};WT.sizzleModule.prototype.postload=function(){WT.setExecuteState("sizzle","running")};
WT.sizzleModule.ProductName="sizzle";WT.registerPlugin(WT.sizzleModule,"default");WT.jsonModule=function(){};WT.jsonModule.prototype.wtConfigObj={libUrl:"//c.webtrends.com/acs/common/js/lib/json2.js",doLoad:!0};
WT.jsonModule.prototype.load=function(l){try{WT.updateDependencies("json",this.wtConfigObj.s_dependencies),"undefined"===typeof JSON&&WT.isDependency("json")?(WT.Debug.debug("JSON not detected"),s_jsonLoaded=!1,WT.downloadLib("head",l,function(){WT.fireEvent(new WTEvent("json"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS))},0,!0,this.wtConfigObj.libUrl)):(s_jsonLoaded=!0,l())}catch(u){WT.abortModuleHelper("optimize",u)}};
WT.jsonModule.prototype.postload=function(){WT.setExecuteState("json","running")};WT.jsonModule.ProductName="json";WT.registerPlugin(WT.jsonModule,"default");WT.start();
