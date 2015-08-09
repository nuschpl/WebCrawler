var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());(function(e,E,f){function d(){}var x,j=0,s=function(){return 1};try{x=!!localStorage||!!globalStorage;if(!localStorage){localStorage=globalStorage[f]}j=1}catch(u){j=0;try{if(E.documentElement.addBehavior){j=0;x=1;var D=E.documentElement;D.addBehavior("#default#userData");D.load(f);var k=D.xmlDocument;var r=k.documentElement}}catch(t){x=false}}var m=d,y=d,w=d,A=d;if(x){m=j?v:p;y=j?n:i;w=j?q:B;A=j?c:l;s=function(G){try{m(G.ns,JSON.stringify(G._));return 1}catch(F){return 0}}}function g(){return +new Date()}function a(G,F){if(G._[F]&&G._[F].e&&G._[F].e<g()){G.remove(F)}}function o(F){return typeof F==="number"&&isFinite(F)}function n(F){return localStorage[F]}function v(G,F){localStorage[G]=F;return F}function q(F){delete localStorage[F]}function c(){localStorage.clear()}function z(G){var K=r.childNodes,J,I=null;for(var H=0,F=K.length;H<F;H++){J=K.item(H);if(J.getAttribute("key")==G){I=J;break}}return I}function i(F){var H=z(F);var G=null;if(H){G=H.getAttribute("value")}return G}function p(F,H){var G=z(F);if(!G){G=k.createNode(1,"item","");G.setAttribute("key",F);G.setAttribute("value",H);r.appendChild(G)}else{G.setAttribute("value",H)}D.save(f);return H}function B(F){z(F)&&r.removeChild(node);D.save(f)}function l(){while(r.firstChild){r.removeChild(r.firstChild)}D.save(f)}function C(){this._={}}C.prototype={set:function(H,G,F){this._[H]={value:G,e:o(F)?g()+F:0};s(this)||this.remove(H);return G},get:function(F){a(this,F);return this._[F]?this._[F].value:undefined},remove:function(F){delete this._[F];s(this)},clear:function(){this._={};s(this)}};function h(F){this.ns=F;this._=JSON.parse(y(F)||"{}")}h.prototype=C.prototype;function b(F){return new h(F)}b.remove=w;b.clear=A;e.kizzy=b;typeof module!=="undefined"&&module.exports&&(module.exports.cache=b)})(this,document,document.domain);var REALTIME_JSON_MAP={url:"",data:{}};(function(){function e(){this.session=kizzy("rt"+location.href);this.expirationTime=5;this.SESSION_LIVE=(this.expirationTime*(1000*60))}e.prototype.pageViewArguments=function(){if(!this.session){return{newSession:0,elapsedTime:0,expirationTime:this.expirationTime,convergedRegions:0}}var k=this.elapsedTime();var m=this.convergedRegions();var l=this.existsSession()?0:1;this.restartSession(this.session.get("session"));return{newSession:l,elapsedTime:k,expirationTime:this.expirationTime,convergedRegions:m}};e.prototype.clickArguments=function(n){if(!this.session){return{pageConversion:0,regionConversion:0,elapsedTime:0,convergedRegions:0,renewedSession:0}}var l=this.renewedSession();var k=this.elapsedTime();var p=this.convergedRegions();var m=this.conversion(n);var o=this.pageConversion();this.restartSession(this.session.get("session"));return{pageConversion:o,regionConversion:m,elapsedTime:k,convergedRegions:p,renewedSession:l}};e.prototype.renewedSession=function(){if(this.existsSession()){return 0}this.restartSession();return 1};e.prototype.existsSession=function(){return this.session.get("session")&&this.session.get("session").time};e.prototype.restartSession=function(k){k=k||{convergedRegions:[]};k.time=new Date().getTime();this.session.set("session",k,this.SESSION_LIVE)};e.prototype.elapsedTime=function(){if(!this.existsSession()){return 0}var l=new Date();var m=new Date(this.session.get("session").time);var k=Math.round((l.getTime()-m.getTime())/60000);if(k>5){return 5}if(k<0){this.restartSession();return 0}return k};e.prototype.convergedRegions=function(){if(!this.existsSession()){return 0}var l=this.session.get("session").convergedRegions;var k=l.length;if(!k){return 0}return l.join(",")};e.prototype.pageConversion=function(){return this.conversion("pageConversion",true)};e.prototype.conversion=function(k,l){var m=this.session.get("session");if(!m){return 0}if(m[k]){return 0}else{m[k]=1;if(!l){this.session.get("session").convergedRegions.push(k)}return 1}};function c(){var l=new Image(1,1);l.onload=function(){l.onload=null;(function(){})()};l.src="http://rt.globo.com/pv.gif?"+m();var k="";if(k){console.log("PageView contabilizado: "+l.src)}function m(){var n=pvm.pageViewArguments();return $.param({"object.url":glb_realtime_map.url,"user.referer":"-","object.meta.title":"-","object.meta.product":glb_realtime_map.site,"object.meta.tags":glb_realtime_map.categories.join(","),"user.session.is_new":n.newSession,"user.session.elapsed_time":n.elapsedTime,"user.session.expiration":n.expirationTime,"user.session.converged_regions":n.convergedRegions,_:new Date().getTime()})}}window.pvm=new e();c();var b={host:"rt.globo.com",map:{},map_url:"",spot_data:"glbrt-idx",debug:"",test_callback:""};function d(k){if(b.debug){console.log(k)}}function h(){if(b.map_url!=""){REALTIME_JSON_MAP.url=b.map_url;$.ajax({url:b.map_url,context:document.body,success:function(k){d("carregar_mapa AJAX");f(k)},error:function(k){d("Erro ao carregar o json de mapeamento")}})}else{if(b.data){d("carregar_mapa VAR");REALTIME_JSON_MAP.data=b.data;f(b.data)}else{j()}}}function f(n){d(n);for(var k in n){var l=n[k].sel;var o=n[k].ctx;$(o).delegate(l,"click",{msg:k},function(s){if(b.debug){s.preventDefault()}d("params:msg="+s.data.msg);var q=i(this);if(!q){return}var m=s.data.msg;if(m){var r=a(n[m].spt,n[m].sel,$(this));var p="-";if(n[m].reg){p=n[m].reg}d("region:"+p);g(r,p,q);if(b.debug){s.preventDefault()}}})}}function j(){d("auto_mapping");var l;var n=function(r,p){var q=r.attr("class").match(p+"-[a-zA-Z-]+")[0];if(q){return q.split("-").join(" ")}return p};var m=function(r,p){var q=r.attr("boxName")||n(r,p);if(l[q]){l[q]+=1;q+=" "+l[q]}else{l[q]=1}return q};var k=function(p){if(p[0].tagName!="A"){p=p.parents("a")}return p.attr("href")};var o=function(p){$(".rt-region").each(function(r,s){l={};var q=$(s);var t=q.attr("regionName");q.find("."+p).each(function(v,w){var x=$(w);var u=m(x,p);x.delegate("a","click",{region:t,spot:u},function(z){var y=k($(z.target));if(y.trim()==="#"){return}d("region: "+z.data.region+", spot: "+z.data.spot+", link: "+y);g(z.data.spot,z.data.region,y);if(b.debug){z.preventDefault()}})})})};o("destaque");o("widget")}function i(l){var k=$(l).attr("href");if(/^#/.test(k)){d("Descartando link comeÃ§ado com #");return false}return k}function a(w,r,v){d("identificar_spot: spot: "+w+" selector: "+r);var s=w.match(/(\{\d\})+/g);if(s){var o=w;var y=r.split(" ");var k=s.length;for(var l=0;l<k;l++){var q=1;var u=s[l];var m=u.substring(1,u.length-1);var p=y[m];var x=v.parents(p);if($(x).length!=0){var t=$(x).prev(p);while($(t).length!=0){q++;t=$(t).prev(p)}o=o.replace("{"+m+"}",q)}}w=o}d("spot identificado: "+w);return w}function g(n,r,q){var m=new Date();var l=new Image(1,1);l.onload=o;var k=pvm.clickArguments(r);l.src="http://"+b.host+"/rt.gif?"+$.param({"object.meta.where":glb_realtime_map.url,"object.url":q,"action.meta.region.spot":n,"action.meta.region.name":r,"action.is_page_conversion":k.pageConversion,"action.is_region_conversion":k.regionConversion,"user.session.elapsed_time":k.elapsedTime,"user.session.converged_regions":k.convergedRegions,"user.session.is_renewed":k.renewedSession,_:m.getTime()});var p=setTimeout(o,200);function o(){clearTimeout(p);l.onload=null;(function(){})()}}$.glbrealtime=function(k){if(k){$.extend(b,k);b.debug=k.debug||b.debug}h();$(document).trigger("globo-realtime-ready")}})();