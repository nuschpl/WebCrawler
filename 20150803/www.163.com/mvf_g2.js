var mediav=window.mediav||{};mediav.browser=mediav.browser||{};mediav.version="1.0.3.32";(function(){var a=navigator.userAgent;if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a)&&!/chrome/i.test(a)){mediav.browser.safari=+(RegExp["\x241"]||RegExp["\x242"])}})();if(/msie (\d+\.\d)/i.test(navigator.userAgent)){mediav.browser.ie=mediav.ie=document.documentMode||+RegExp["\x241"]}if(/opera\/(\d+\.\d)/i.test(navigator.userAgent)){mediav.browser.opera=+RegExp["\x241"]}mediav.url=mediav.url||{};mediav.lang=mediav.lang||{};mediav.lang.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)};mediav.url.queryToJson=function(a){var f=a.substr(a.lastIndexOf("?")+1),c=f.split("&"),e=c.length,k={},d=0,h,g,j,b;for(;d<e;d++){if(!c[d]){continue}b=c[d].split("=");h=b[0];g=decodeURIComponent(b[1]);j=k[h];if("undefined"==typeof j){k[h]=g}else{if(mediav.lang.isArray(j)){j.push(g)}else{k[h]=[j,g]}}}return k};mediav.url.escapeSymbol=function(a){return String(a).replace(/\%/g,"%25").replace(/&/g,"%26").replace(/\+/g,"%2B").replace(/\ /g,"%20").replace(/\//g,"%2F").replace(/\#/g,"%23").replace(/\=/g,"%3D").replace(/\?/g,"%3F")};mediav.url.jsonToQuery=function(h,j,g){var k=[],d,b=j||function(l){return mediav.url.escapeSymbol(l)};for(var c=0,a=g.length;c<a;c++){var e=g[c];var f=h[e];if(f!=null){k.push(e+"="+b(f,e))}}return k.join("&")};mediav.string={};mediav.string.format=function(c,a){c=String(c);var b=Array.prototype.slice.call(arguments,1),d=Object.prototype.toString;if(b.length){b=b.length==1?(a!==null&&(/\[object Array\]|\[object Object\]/.test(d.call(a)))?a:b):b;return c.replace(/#\{(.+?)\}/g,function(e,g){var f=b[g];if("[object Function]"==d.call(f)){f=f(g)}return("undefined"==typeof f?"":f)})}return c};mediav.G=function(a){return document.getElementById(a)};mediav.getFixed=function(a,b){b=b||2;return(a+Math.pow(10,b)+"").substr(1,b)};var mv_impid;(function(){function b(j){var h=1,g=0,e;if(j){h=0;for(e=j.length-1;e>=0;e--){g=j.charCodeAt(e);h=(h<<6&268435455)+g+(g<<14);g=h&266338304;h=g!=0?h^g>>21:h}}return h}mediav.getUID=function(){var e=mediav._uid;if(e){return e}mediav._fuid=1;var j=(new Date()-0);var g=window.location.href;var h=b(g);e=""+j+h+Math.random()+Math.random()+Math.random()+Math.random();e=e.replace(/\./g,"").substring(0,32);mediav._uid=e;return e};try{if(window.parent!=window){if(window.parent.mediav&&window.parent.mediav._uid){mediav._uid=window.parent.mediav._uid}else{if(window.parent.mediav){window.parent.mediav._uid=mediav.getUID()}else{window.parent.mediav={_uid:mediav.getUID()}}}}}catch(f){}try{if(window.parent!=window){if(document.domain.indexOf("msn.com.cn")>=0){var c=b(document.referrer);if(document.cookie.indexOf(c)>=0){var d=new RegExp("(^| )"+c+"=([^;]*)(;|\x24)"),a=d.exec(document.cookie);mediav._uid=a[2]}else{document.cookie=c+"="+mediav.getUID()}setTimeout(function(){document.cookie=c+"=;expires="+(new Date()).toGMTString()},10000)}}}catch(f){}})();mediav.getImpid=function(){if(mv_impid){return mv_impid}var a=[];var b=new Date();a.push(Math.floor(Math.random()*991)+1);a.push(mediav.getFixed(b.getMilliseconds(),3));a.push(999);a.push(mediav.getFixed(b.getSeconds()));a.push(mediav.getFixed(b.getMinutes()));a.push(mediav.getFixed(b.getHours()));a.push(mediav.getFixed(b.getDate()));a.push(mediav.getFixed(b.getMonth()+1));mv_impid=a.join("");return mv_impid};mediav.ad||(mediav.ad={});mediav.otherBannerIds||(mediav.otherBannerIds=[]);mediav.otherCreativeIds||(mediav.otherCreativeIds=[]);mediav.ad.wraps=mediav.ad.wraps||{};mediav.ad.status=mediav.ad.status||{};mediav.ad.pubs=mediav.ad.pubs||{};mediav.initInnerConfig=function(){mediav.configs={ad:{logo:true,repeat:false,db:"mediav",asyn:false,unique:true},"default":{overtime:7},other:{keyword:"",adtest:false,ref:true}}};(function(){var e=["mediav_ad_ref","mediav_ad_wrap","mediav_ad_pub","mediav_ad_width","mediav_ad_height","mediav_ad_logo","mediav_ad_repeat","mediav_ad_async","mediav_ad_host","mediav_ad_db","mediav_ad_mainurl","mediav_default_material","mediav_default_clickurl","mediav_default_turl","mediav_default_overtime","mediav_keyword","mediav_adtest","mediav_ad_listenurl","mediav_ad_unique","mediav_addition"];function b(g,j){var f=g.split("_"),h=f[1],k=f[2];if(k){mediav.configs[h][k]=j}else{mediav.configs.other[h]=j}}function d(){c(window);mediav.ad.clearGlobalVar()}function a(f){c(f)}function c(j){for(var g=e.length;g;g--){var f=e[g-1],h=j[f];if(h!=null){b(f,h)}}}mediav.ad.clearGlobalVar=function(){for(var g=e.length;g;g--){var f=e[g-1];if(window[f]!=undefined&&window[f]!=null){window[f]=null}}};mediav.ad.initConfig=function(j){if(j){a(j)}else{if(window.mediav_ad_pub){d()}}if(!mediav.configs.ad.pub){return true}var f=mediav.configs.ad.pub.split("_");mediav.configs.ad.pub=f[1]||f[0];mediav.configs.ad.showid=f[0];mediav.ad.pubs[f[1]]=1;if(mediav.configs.ad.wrap){mediav.ad.wraps[mediav.configs.ad.pub]=mediav.configs.ad.wrap;mediav.configs.ad.async=true}var g=mediav.configs["default"].clickurl;var h=mediav.configs["default"].turl;if(g){mediav.configs["default"].clickurl=g.replace(/\?type=\d/,function(k){return k+"&impid="+mediav.getImpid()})}if(h){mediav.configs["default"].turl=h.replace(/\?type=\d/,function(k){return k+"&impid="+mediav.getImpid()})}}})();mediav.ad.listen=function(c,b){var a=new Image();a.onload=a.onerror=window[c+"_mv_"+(new Date()-0)]=function(){};a.src=b};mediav.ad.startAdStateCheck=function(g,k,b){var j="<a href='#{0}' target='_blank'><img width='#{1}' height='#{2}' border='' alt='' src='#{3}'></img></a>";var h=mediav.configs.ad.pub;function e(){if(window["mediav_fini"+h]){return true}return false}function c(){return mediav.string.format(j,k.clickurl||"javascript:void(0)",b.width,b.height,k.material)}function f(){if(!e()){var l=b.pub;mediav.G(g).innerHTML=c();k.turl&&a(k.turl);var m=mediav.G("mvlogo_"+l);m&&(m.style.display="block");d()}}function a(m){var l=new Image();l.src=m;l.onerror=(l.onload=(l.onabort=function(){l=null}))}function d(){mediav.ad.status[h]="stop";var n="mvscr"+h;var m=document.getElementById(n);if(m.clearAttributes){m.clearAttributes()}else{for(var l in m){if(m.hasOwnProperty(l)){delete m[l]}}}if(m&&m.parentNode){m.parentNode.removeChild(m)}m=null}setTimeout(f,k.overtime*1000)};mediav.ad.getPubName=function(a){return"showid"};mediav.ad.getScriptUrl=function(b,a,c){var d=["ver","enifr","showid","type","of","adtest","keyword","bids","ref","refer","uid"];var f={type:1,of:1};b.unique&&(f.uid=mediav.getUID());mediav._fuid=0;f[mediav.ad.getPubName(b.pub)]=b.showid;if(window.parent!=window&&document.referrer){try{domain=document.referrer.split("?")["0"];local=window.location.href.split("?")["0"];if(domain!=local){f.refer=encodeURIComponent(domain)}}catch(g){}}if(document.domain.indexOf("163disk.com")>=0){f.refer=window.location.href}c.adtest&&(f.adtest=c.adtest);c.keyword&&(f.keyword=c.keyword);b.ref&&(f.ref=b.ref);f.enifr=1;f.ver=mediav.version;mediav.otherBannerIds.push(b.pub);return mediav.url.jsonToQuery(f,null,d)};mediav.ad.getScriptHTML=function(g,d){var a=mediav.configs.ad;var e=a.host||"show.g.mediav.com/s";var f="http://"+e+"?"+mediav.ad.getScriptUrl(mediav.configs.ad,mediav.configs["default"],mediav.configs.other);mediav.configs.other.addition&&(f=f+"&"+mediav.configs.other.addition);if(d){var c=document.createElement("script");g&&(c.id=g);c.type="text/javascript";c.async=true;c.charset="utf-8";c.src=f;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b);return""}else{return'<SCRIPT id="'+g+'" LANGUAGE="JavaScript" src="'+f+'" charset="utf-8"></SCRIPT>'}};mediav.logo||(mediav.logo={});mediav.logo.getHtml=function(f){var h="mvlogo_"+mediav.configs.ad.pub;var k='<a id="#{3}" target="_blank" style="display:none;position:absolute;z-index:4;right:0;top:#{2}px" href="http://juxiao.mediav.com/" onmouseover="mediav.logo.over(this)" onmouseout="mediav.logo.out(this)"><img style="border:0;width:22px;height:18px" src="#{0}"/><img src="#{1}" style="display:none;border:0;width:90px;height:18px"/></a>';if(!window.XMLHttpRequest){var j="http://material.mediav.com/bjjs/juxiao/v1.gif";var g="http://material.mediav.com/bjjs/juxiao/mediav1.gif"}else{var j="http://material.mediav.com/bjjs/juxiao/v1.png";var g="http://material.mediav.com/bjjs/juxiao/mediav1.png"}return mediav.string.format(k,j,g,mediav.configs.ad.height-18,f?h:"")};mediav.logo.getIcon=function(f){var h="mvicon_"+mediav.configs.ad.pub;var k='<a id="i_#{3}" target="_blank" style="position:absolute;z-index:5;right:0;top:0px" href="http://juxiao.mediav.com/privacy.html" onmouseover="mediav.logo.over(this)" onmouseout="mediav.logo.out(this)"><img style="border:0;width:18px;height:18px" src="#{0}"/><img src="#{1}" style="display:none;border:0;width:132px;height:18px"/></a>';var j="http://material.mediav.com/bjjs/dsp/icon/mv_i.png";var g="http://material.mediav.com/bjjs/dsp/icon/mv_i_e.png";return mediav.string.format(k,j,g,f?h:"")};mediav.logo.over=function(a){a.firstChild.style.display="none";a.lastChild.style.display="block"};mediav.logo.out=function(a){a.lastChild.style.display="none";a.firstChild.style.display="block"};mediav.ad.lisenClick=function(n,b,c,a,o){try{var d=function(s,e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i");