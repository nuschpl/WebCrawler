ï»¿var sas=sas||{};sas.banner=sas.banner||{};sas.creativeType={REDIRECT:0,IMAGE:1,FLASH:2,FLV:3,HTML5:4};(function(){var a={};sas.events.addEvent(window,"message",function(q){var p;if(!q.data||!q.data.href||!q.data.formatId||!a[q.data.formatId]){return}var r=a[q.data.formatId];if(q.data.href!="sas:click"){throw new Error("multi click urls not supported yet")}var o=g(r.clickUrl,r.clickTarget);document.body.appendChild(o);o.click();document.body.removeChild(o)});var g=function(p,q){var o=document.createElement("a");o.href=p;o.target=q;return o};var e=function(q,r,o){var p=document.createElement("iframe");p.id=q;p.scrolling="no";p.frameBorder=0;p.width=r;p.height=o;p.style.margin=0;p.style.padding=0;p.style.width=r+"px";p.style.height=o+"px";return p};var b=function(p,u){if(!u){return}else{var o=document.createElement("div");o.innerHTML="_"+u;var q=1;while(q<o.childNodes.length){var r=o.childNodes[q];if(r.tagName=="SCRIPT"){var v=document.createElement("script");v.type="text/javascript";v.defer="defer";if(!r.src){v.text=r.text}else{v.src=r.src}r=v;q++}p.appendChild(r)}}};var m=function(o){var p=o.instanceIndex>1?"_"+o.instanceIndex:"";return o.tagId||("sas_"+o.formatId+p)};var j=function(q,o,s){var p=o.creatives[0];var t=p.url+(p.url.indexOf("?")<0?"?":"&")+"sasfid="+o.formatId;var r=e("sas_"+o.id+"_iframe",p.width,p.height);r.src=t;sas.events.addLoadEvent(r,function(){s(r)});q.appendChild(r);b(q,p.creativeScript+o.customScript)};var l=function(r,o,t,u){var p=o.creatives[0];if(!u.async){document.write(p.creativeScript+o.customScript)}else{var s=e("sas_"+o.id+"_iframe",p.width,p.height);sas.events.addLoadEvent(s,function(){t(s)});r.appendChild(s);var q=s.contentDocument||s.contentWindow.document;q.write('<body style="margin:0;padding:0"><script type="text/javascript">var inDapIF=inDapMgrIf=true;</script>'+p.creativeScript+o.customScript+"</body>");q.close()}};sas.utils=sas.utils||{};sas.utils.getIEVersion=function(){var o=navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);return o?parseInt(o[1]):undefined};var f=function(p,s){var r=document.createElement("img");var q=r;var t=parseInt(p.pixelRatio)||1;sas.events.addLoadEvent(r,function(){s(r)});r.id=p.id;r.src=p.url;r.alt=p.altText;r.width=p.width/t;r.height=p.height/t;r.border=0;if(!!p.clickUrl){var o=document.createElement("a");o.href=p.clickUrl;o.target=p.clickTarget;o.appendChild(r);q=o}return q};var d=function(r,t){var s;var q={id:r.id+"Object",height:r.height,width:r.width};var v={quality:"high",allowScriptAccess:"always",wmode:r.wMode||"window",swLiveConnect:true,flashVars:r.flashVars||""};if(sas.utils.getIEVersion()<11){s=(function(){var p=document.createElement("div");p.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' type='application/x-shockwave-flash'><param name='movie' value='"+r.url+"'><param name='wmode' value='"+v.wmode+"'><param name='flashVars' value='"+v.flashVars+"'></object>";return p.firstChild})();delete v.wmode;delete v.flashVars;sas.events.addLoadEvent(s,function(){t(s)})}else{s=document.createElement("object");q.type="application/x-shockwave-flash";q.data=r.url;sas.events.addLoadEvent(document,function(){t(s)})}for(var o in q){s[o]=q[o]}for(var u in v){if(v[u]){var w=document.createElement("param");w.name=u;w.value=v[u];s.appendChild(w)}}return s};var k=function(r,o,s){var p=o.creatives[0];var q=f(p,s);r.appendChild(q);b(r,p.creativeScript+o.customScript)};var i=function(r,o,t){var p=o.creatives[0];var s=(p.version&&p.version<=sas.Browser.Flash.version);if(!s&&(!p.backupImage||!p.backupImage.url)){return}var q=s?d(p,t):f(p.backupImage,t);r.appendChild(q);b(r,p.creativeScript+o.customScript)};var c={};c[sas.creativeType.REDIRECT]=l;c[sas.creativeType.IMAGE]=k;c[sas.creativeType.FLASH]=i;c[sas.creativeType.HTML5]=j;var h=function(o){var p=parseInt(Math.random()*100000000);var q=o.oba==2?"top-left":"top-right";sas.utils.loadLinkCdn("diff/templates/js/adplayer/adplayer.css");sas.utils.loadScriptCdn(["diff/templates/js/adplayer/adplayer.js","diff/templates/js/adplayer/adplayer.sas.js"],{onLoad:function(){$ADP.sas.addOba(o.formatId,false,q,p,o.formatId,p)}})};var n=function(r,o,s){var t=new sas.utils.Latch(["creaLoaded","viewabilityLoaded"]);t.addListener(function(u){sas.viewability.register(u,function(){new Image().src=o.viewability.viewUrl},{duration:o.viewability.duration,area:o.viewability.area,onError:function(){new Image().src=o.viewability.errorUrl}})});var p=o.creatives[0];var q=c[p.type](r,o,function(u){t.notify("creaLoaded",u)},s);if(p.countUrl){new Image().src=p.countUrl}if(o.viewability&&o.viewability.enabled){sas.utils.loadScriptCdn("diff/templates/js/sas/sas-viewability.js",{onLoad:function(){t.notify("viewabilityLoaded")}})}if(o.oba){h(o)}};sas.banner.render=function(o,s){s=s||{};s.async=s.async==null?true:s.async;if(!o.creatives||!o.creatives.length){throw new Error("No creative found for config "+o.id)}var p=o.creatives[0];o.tagId=m(o);a[o.formatId]=p;var q=document.getElementById(o.tagId);if(!q){throw new Error("No element with id "+o.tagId+" found")}if(p&&!c[p.type]){throw new Error("Unsupported banner type "+p.type)}if(o.forcedIframeWidth>0&&o.forcedIframeHeight>0){var r=e("sas_i"+o.tagId,o.forcedIframeWidth,o.forcedIframeHeight);sas.events.addLoadEvent(r,function(){var t=r.contentDocument||r.contentWindow.document;t.body.style.margin=0;t.body.style.padding=0;n(t.body,o,s)});q.appendChild(r)}else{n(q,o,s)}}})();