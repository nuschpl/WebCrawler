KISSY.add("mui/app-guide/main",function(t,e,i,n,o,a,r,s){var c=function(t){this.container=i.get(t.container);this.containerWidth=t.width||i.width(this.container);this.type=t.type||"small-head";this.init()};c.type={BIG_HEAD:"big-head",BIG_BODY:"big-body",SMALL_HEAD:"small-head"};c.prototype.checkBrowser=function(){var e=navigator.userAgent;if(/windvane|T-UA/i.test(e)){return false}return!!t.UA.ipad};c.prototype.check=function(t){var e=this;if(!this.checkBrowser()){t(false);return}if(this.type===c.type.BIG_HEAD){r.isCanShowBigHead(function(i){if(!i){e.type=c.type.SMALL_HEAD;e.check(t)}else{t(true)}})}else if(this.type===c.type.SMALL_HEAD){r.isCanShowSmallHead(t)}else{t(true)}};c.prototype.request=function(t){var e=this;r.getListFromTFXT().then(function(i){if(i.length>=a.count){t(i.slice(0,a.count))}else{r.getListFromCLJ().then(function(n){n=e.transfromCLJData(n);n=n.slice(0,a.count-i.length);t(i.concat(n))},function(t){console.log(t.message)})}})};c.prototype.transfromCLJData=function(e){return t.map(e.topics,function(t){return{text:t.title,img:t.coverForPadUrl}})};c.prototype.build=function(e){e={type:this.type,channel:e};t.each(e.channel,function(t,e){t.colorType=a.colorTypeList[e]});return s.render(e)};c.prototype.show=function(){var t=this;t.check(function(e){if(!e){return}t.request(function(e){i.html(t.container,t.build(e));if(t.type===c.type.BIG_HEAD){r.setLastShowBigTime()}setTimeout(function(){t.anim()},500)})})};c.prototype.anim=function(){var t=this;var i=e.one(".j_AppGuider");if(!i)return;i.addClass("show");if(t.type===c.type.BIG_HEAD){setTimeout(function(){var t=i.all(".j_ChnShelter");if(!t.hasClass("move")){t.addClass("move")}var e=i.all(".j_ChnContext");if(!e.hasClass("down")){e.addClass("down")}},350)}};c.prototype.onclick=function(t){var e=t.target;if(i.hasClass(e,"close")){i.hide(i.get(".j_AppGuider",this.container));r.setLastCloseTime()}else{var n=o.startApp({type:"func"});n.install()}};c.prototype.init=function(){n.delegate(this.container,"click","[data-click=true]",this.onclick,this)};return c},{requires:["node","dom","event","mui/smartbanner/index","mui/app-guide/config","mui/app-guide/model","mui/app-guide/tpl","mui/app-guide/css/app-guide.css"]});KISSY.add("mui/smartbanner/index",function(t,e,a,i,r){var n=window;var o={};var l=n.document;var s=l.cookie.match(/(?:^|\s)cna=([^;]+)(?:;|$)/);if(s){s=s[1]}function m(){var t={};var e=location.search.slice(1).split("&");if(e.length){for(var a=0;a<e.length;a++){if(e[a]&&e[a].indexOf("=")!=-1){var i=e[a].split("=");t[i[0]]=i[1]}}}return t}function c(t){var e=l.createElement("img");e.style.cssText="display:none";e.src=t;l.body.appendChild(e)}function p(t){t=t||{};var e=t.apuri||t.ap_uri;var a=t.string||"tmwap.1.1";if(!e)return;var i={};i["logtype"]=2;i["apuri"]=e+(o.page?"_"+o.page:"");!!o.scene&&(i["scene"]=o.scene);!!o.mmstat&&(i["mmstat"]=o.mmstat);i["page"]=o.page?o.page:"";i["ui"]=o.ui?o.ui:"";i["cache"]=parseInt((Math.random()+1)*Date.now());var r=[];for(var n in i){r.push(n+"="+encodeURIComponent(i[n]))}c("//wgo.mmstat.com/"+a+"?"+r.join("&"))}function u(){var t=m();var e=t["ttid"];var a=/[^@]+\@taobao\_(iphone|android|apad|ipad)\_[\d.]+/i;e=e?decodeURIComponent(e):"";return a.test(e)}function d(){var t=m();var e=t["ttid"];var a=/.*@travel.*/i;e=e?decodeURIComponent(e):"";return a.test(e)}function f(){return!!n.navigator.userAgent.match(/WindVane/)}function h(){return!!n.navigator.userAgent.match(/T-UA=/)}function v(){return!!n.navigator.userAgent.match(/AlipayClient/i)}var g=l.createElement("frame");var b=function(t){var e=this,a=navigator.standalone,i=navigator.userAgent;if(i.match(/iPhone|iPod|iPad/i)!=null){this.platform="ios";this.isIpad=i.match(/iPad/i)!=null}else if(i.match(/Android/i)!=null){if(i.match(/Mobile/i)!=null){this.platform="android";this.isChrome=i.match(/Chrome/i)!=null&&i.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i)==null}}else if(i.match(/Linux/i)!=null){this.platform="android"}if(!this.platform||a){this.invaliable=true;return null}if(this.init(t)){this.create();window.onblur=function(){clearTimeout(e.timeload);e.autoAplus&&clearTimeout(e.autoAplus);e.timeload=null};document.addEventListener("visibilitychange",function(){if(document.hidden){clearTimeout(e.timeload);e.autoAplus&&clearTimeout(e.autoAplus);e.timeload=null}})}return this};b.prototype={constructor:b,init:function(t){var e=this.options=t,a=e.isInstance||function(){return f()||u()};if(a()||h()||v()||d()){this.invaliable=true;return null}t.version||(t.version="v1");this.cover=e.cover||false;this.isDownload=e.download||false;this.timeout=e.timeout||1500;var i=e.from||"h5";var r=e.crossplat||false;if(this.platform=="ios"&&!r){this.bannerUrl=e.appstoreUrl||(this.isIpad?"https://itunes.apple.com/app/id593828513":"//itunes.apple.com/cn/app/id518966501?mt=8")}else{this.bannerUrl=e.url||"http://m.laiwang.com/market/laiwang/tmall/app-download.php?src=wapicon"}if(e.href){var n=e.href;var o=m();var s=l.getElementById("buried");var c=o["ttid"]||s&&s.value;var p=o["refid"];var g=o["ali_trackid"];var b={from:i};n=n.indexOf("://")!=-1?n:"tmall://tmallclient/?"+n;if(this.isChrome){var w=n.split("://"),k=w[0],A=n.replace(k+"://","");var U=e.bag||"com.tmall.wireless";n="intent://"+A+"#Intent;scheme="+k+";package="+U+";end"}this.paramUrl=n}else{this.paramUrl="tmall://tmallclient"}return true},reset:function(t){if(this.iClose)return;this.init(t);this.resetHtml&&this.resetHtml(t)},create:function(){if(this.iClose)return;if(!g.parentNode){g.setAttribute("id","J_smartFrame");g.style.cssText="display:none";l.body.appendChild(g)}this.frame=g},download:function(t,e){var a=Date.now();if(!t||a-t<this.timeout+50){if(this.platform=="ios"){p({string:"tmwap.1.2",apuri:"sb_ios_download"})}else{p({string:"tmwap.1.7",apuri:"sb_andriod_download"})}if(e.notGoDownload){!!e.fail&&e.fail()}else{!!e.fail&&e.fail();if(this.cover){n.location.replace(this.bannerUrl)}else{n.location.href=this.bannerUrl}}}else{!!e.success&&e.success()}},redirect:function(t){var e=this.options&&this.options.version,a=this.frame,i=t?"click_sb_"+e+"_manual":"click_sb_"+e+"_auto";if(!this.paramUrl)return;this.paramUrl=this.paramUrl.replace("%22ap_uri%22%3A%22%22",encodeURIComponent('"ap_uri":"'+i+'"'));if(this.isChrome){var r=window.open(this.paramUrl);r.location.href="http://m.laiwang.com/market/laiwang/tmall/app-download.php?src=wapicon"}else{a&&a.setAttribute("src",this.paramUrl)}},install:function(t){var e=this,t=t||{},a=Date.now();p({string:"tmwap.1.8"});if(this.platform=="ios"){p({string:"tmwap.1.5",apuri:"sb_ios_click"})}else{p({string:"tmwap.1.6",apuri:"sb_andriod_click"})}if(!e.isDownload){e.timeload=setTimeout(function(){e.download(a,t)},e.timeout)}e.redirect(true)},autoEnvoke:function(){var t=this,e=Date.now();p({string:"tmallacti.201503.1005.5",apuri:"sb_ios_auto_envoke"});if(t.platform=="ios"){p({string:"tmallacti.201503.1005.1",apuri:"sb_ios_auto_envoke"})}else{p({string:"tmallacti.201503.1005.3",apuri:"sb_andriod_auto_envoke"})}t.autoAplus=setTimeout(function(){var a=Date.now();if(a-e<t.timeout+50){if(t.platform=="ios"){p({string:"tmallacti.201503.1005.2",apuri:"sb_ios_auto_fail"})}else{p({string:"tmallacti.201503.1005.4",apuri:"sb_andriod_auto_fail"})}}},t.timeout);t.redirect(false)}};o.smartbanner=function(t){var e=t.type,a=o.smartbanner.BannerUI,i=o.smartbanner.PopUI;if(e==="banner"||!e){if(a){return new a(t)}}else if(e==="pop"){if(i){return new i(t)}}else if(e==="func"){return o.smartbanner.getInstance(t)}};o.smartbanner.getInstance=function(t,e){e||(e=Object.create({}));for(var a in b.prototype){e[a]=b.prototype[a]}return b.call(e,t)};o.smartbanner.aplus=p;o.smartbanner.getParam=m;o.smartbanner.ttidInTaobaoApp=u;o.smartbanner.uaInTaobaoApp=f;var w=function(t){var e=this;w.superclass.constructor.call(e,t);e.init(t)};w.startApp=o.smartbanner;t.extend(w,i,{init:function(a){var i=this;a=a||{};var r=a.url;i.sbUrl=a.url||"";i.config=a;i.opt=a;o.mmstat=a.mmstat||"";if(a.type){o.page=a.type}if(a.notNeedUI){o.ui="custom"}else{o.ui="default"}var n=window.g_config||{};if(n.removeSmartBanner){return}if(e.get("#J_BottomSmartBanner")){return}var l=navigator.userAgent.indexOf("AliApp")>=0;var s=navigator.userAgent.indexOf("UCBrowser")>=0;var m=document.referrer&&document.referrer.indexOf("taobao.com")>=0;var c=window.location.href.indexOf("ali_trackid=")>=0||t.Cookie.get("tkmb");var p=t.unparam(document.location.search.substring(1));var u=p.ttid&&p.ttid.indexOf("@juhuasuan");var d=window.location.href.indexOf("ali_trackid=2")>=0;if(s||l||c&&!d||u){t.Cookie.set("_isBottomSmartBannerShowed_",1,undefined,".tmall.com","/")}var f=e.get("#J_GlobalSmartBanner");if(f){e.hide(f)}var h=t.UA.ipad||"";var v=e.viewportWidth()>e.viewportHeight();if(!t.Cookie.get("_isBottomSmartBannerShowed_")&&!l&&!s&&(!m||d)&&(!c||d)&&!u&&!h&&!v){i.specialTaoke=d;i.renderSmartBanner(a)}},appJump:function(t){var e=this,a=e.isHideScene();var i=t.type?e._spliceUrl(t):'tmall://tmallclient/?{"action":"internal:url=tmall://mobile.tmall.com/page/home"}';var r=o.smartbanner({type:"func",href:i});!!r&&r.install(t)},renderSmartBanner:function(a){if(a.notNeedUI){return}var i=this;window.__content_results=window.__content_results||[];t.IO({url:"//equity-vip.tmall.com/liuliangbao/track.do",type:"GET",dataType:"jsonp",scriptCharset:"utf-8",success:function(r){JSON.parse(r.delta);var n='<div id="J_BottomSmartBanner" class="mui-bottom-smart-banner">'+'<a id="J_BottomSmartBannerLink"><img src="{content}"></a>'+'<div class="mui-bottom-m-sb-btn-close" id="J_BottomSmartBannerClose" ></div>'+"</div>";if(!r.delta){return}var l=JSON.parse(r.delta);i.track=r.track;if(i.track){o.scene="liuliangbao"}if(l&&l.data&&l.data[0].content){var s=l.data[0];if(a.img){s.content=a.img}var m=t.substitute(n,s);i.autoLink=s.link||"";i.sbLink=s.click_url||"";var c=e.create(m);e.addStyleSheet('.mui-bottom-smart-banner{                        width: 100%;                        position: fixed;                        bottom:0;                        left:0;                        z-index: 9999;                        font-size:0;                    }                    .mui-bottom-smart-banner img{                        width:100%;                        opacity: 0.95;                    }                    .mui-bottom-smart-banner a{                        display:block                    }                    .mui-bottom-m-sb-btn-close{                        position: absolute;                        right:0;                        top:0;                        background: rgba(0,0,0,0.2) url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzhFMkJFNTMwM0ExMUU0OERFOUVCNDEzMUJCNTQ1RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NzhFMkJFNjMwM0ExMUU0OERFOUVCNDEzMUJCNTQ1RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3OEUyQkUzMzAzQTExRTQ4REU5RUI0MTMxQkI1NDVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3OEUyQkU0MzAzQTExRTQ4REU5RUI0MTMxQkI1NDVEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NmtjogAAAJtJREFUeNqsk1sSABEMBOn7Oa0D2ldtldolEolvuomZ3Fqr6Vklxa6bSweu0fCLzef2NRL+viAFSn7j5rPBIxn+JYONO5JpUJgcsEjEFCIc1EiWEWdxO0mi6g+KEYwk6nLms8nWj0yW5mNISrHCrYIqvMYt6Gdu6gmbOVdLcJRIJcFTIo0EB1wlwQlfSgiAixKC4FMJgfCh5BBgAOelLtiutNSeAAAAAElFTkSuQmCC") 15px 5px no-repeat;                        width: 30px;                        height: 30px;                        background-size: 12px;                        cursor: pointer;                        border-radius: 0 0 0 30px;                    }');if(!e.get("#J_BottomSmartBanner")){if(!e.get("body")){setTimeout(function(){e.append(c,"body")},0)}else{e.append(c,"body")}}!!s.exposureParam&&((new Image).src=s.exposureParam+"&r"+ +new Date+"=1");p({string:"tmwap.1.3",apuri:"sb_show"});i.sbUrl=i._spliceUrl(a);i._initSBEvent();if(s.is_auto=="true"&&window.location.href.indexOf("ali_trackid=")<0){var u=i.autoLink||i.sbUrl||'tmall://tmallclient/?{"action":"internal:url=tmall://mobile.tmall.com/page/home"}';var d=o.smartbanner({type:"func",href:u});var f=navigator.userAgent.match(/Chrome/i)!=null&&navigator.userAgent.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i)!=null;if(f){return}else{d.autoEnvoke()}}}},timeout:3})},_initSBEvent:function(){var i=this;var r=i.sbLink||i.sbUrl;var n=e.get("#J_BottomSmartBanner");r=r||'tmall://tmallclient/?{"action":"internal:url=tmall://mobile.tmall.com/page/home"}';if(r){var l=e.get("#J_BottomSmartBannerLink");a.delegate(document,"tap","#J_BottomSmartBannerLink",function(t){var e=o.smartbanner({type:"func",href:r});e.install();t.preventDefault()})}var s=e.get("#J_BottomSmartBannerClose");if(n&&s){a.delegate(document,"tap","#J_BottomSmartBannerClose",function(a){o.smartbanner.aplus({string:"tmwap.1.4",apuri:"sb_click_close"});n=e.get("#J_BottomSmartBanner");e.hide(n);t.Cookie.set("_isBottomSmartBannerShowed_",1,undefined,".tmall.com","/");a.preventDefault()})}},hide:function(){var t=e.get("#J_BottomSmartBanner");!!t&&e.hide(t)},show:function(){var t=e.get("#J_BottomSmartBanner");!!t&&e.show(t)},_getTkmd:function(){return/(?:^|&)e=(.*?)(?:&|$)/.test(KISSY.Cookie.get("tkmb"))?encodeURIComponent(RegExp.$1):""},_pageType:function(t){if(t.indexOf("item:id=")>-1){o.page="detail"}else if(t.indexOf("tmall://mobile.tmall.com/page/shopDetail")>-1){o.page="shop"}else if(t.indexOf("searchItem")>-1){o.page="list"}},_spliceUrl:function(e){var a=this;type=e.type||"",params=e.params||"",spliceUrl="",oldUrl=e.url||"",href="";if(type){switch(type){case"detail":o.page="detail";spliceUrl="tmall://mobile.tmall.com/page/itemDetail?"+t.param(params);break;case"shop":o.page="shop";spliceUrl="tmall://mobile.tmall.com/page/shopDetail?"+t.param(params);break;case"list":o.page="list";spliceUrl="tmall://mobile.tmall.com/page/searchItem?"+t.param(params);break;case"internal":if(params.page){o.page=params.page;spliceUrl="tmall://mobile.tmall.com/page/"+params.page+"?"+t.param(params.params)}else if(params.url){spliceUrl=params.url}break;case"link":o.page="h5";spliceUrl=params.url;if(spliceUrl.indexOf("#")>-1){spliceUrl=spliceUrl.replace(/#(.*?)$/,"")}break}}else if(e.url){return e.url}else{spliceUrl="tmall://mobile.tmall.com/page/home"}if(a.specialTaoke){if(a._getTkmd()){spliceUrl+=(spliceUrl.indexOf("?")>-1?"&":"?")+"e="+a._getTkmd()+"&type=2"}}if(a.track){spliceUrl+=(spliceUrl.indexOf("?")>-1?"&":"?")+a.track}if(type=="link"){return"tmall://tmallclient/?"+encodeURIComponent('{"action":"link:url='+spliceUrl+'"}')}else{return"tmall://tmallclient/?"+encodeURIComponent('{"action":"internal:url='+spliceUrl+'"}')}},isHideScene:function(){var e=navigator.userAgent.indexOf("AliApp")>=0;var a=navigator.userAgent.indexOf("UCBrowser")>=0;var i=document.referrer&&document.referrer.indexOf("taobao.com")>=0;var r=window.location.href.indexOf("ali_trackid=")>=0||t.Cookie.get("tkmb");var n=t.unparam(document.location.search.substring(1));var o=n.ttid&&n.ttid.indexOf("@juhuasuan");var l=window.location.href.indexOf("ali_trackid=2")>=0;var s=e||a||o||i&&!l||r&&!l;return s}});return w},{requires:["dom","event","base","cookie","io"]});KISSY.add("mui/app-guide/config",function(a){var o=function(a){var o=a.length;var e=Math.ceil(o/2);for(var r=0;r<=e;r+=1){var t=Math.floor(Math.random()*o);if(t!==r){var i=a[t];a[t]=a[r];a[r]=i}}return a};var e={url:{clj:"//idc.admin.tmall.com/open.json?businessName=tmallchaoliujie&dataName=topics&pageSize=5",tfxt:"//delta.taobao.com/recommend.htm?appId=20140928777"},storageKey:{LAST_SHOW_BIG_TIME:"mui/app-guide/model/LastShowBigTime",LAST_CLOSE_TIME:"mui/app-guide/model/LastCloseTime"},count:5,showInterval:864e5,day1111Start:14156352e5,day1111End:14157216e5,colorTypeList:o(["color-1","color-2","color-3","color-4","color-5"])};return e});KISSY.add("mui/app-guide/model",function(e,t,n,i,o){var a=new i;var r={getLastShowBigTime:function(e){return a.get({k:o.storageKey.LAST_SHOW_BIG_TIME,success:e})},setLastShowBigTime:function(e,t){e=e||(new Date).getTime();a.set({k:o.storageKey.LAST_SHOW_BIG_TIME,v:e,success:t})},isCanShowBigHead:function(e){r.getLastShowBigTime(function(t){t=t||0;var n=(new Date).getTime();var i=n>=o.day1111Start&&n<o.day1111End;e(n-t>o.showInterval&&!i)})},isCanShowSmallHead:function(e){r.getLastCloseTime(function(t){t=new Date(+t);if(!t.getTime()){e(true);return}var n=(new Date).getTime();t.setHours(0);t.setMinutes(0);t.setSeconds(0);t.setMilliseconds(0);e(n-t>o.showInterval)})},getLastCloseTime:function(e){return a.get({k:o.storageKey.LAST_CLOSE_TIME,success:e})},setLastCloseTime:function(e,t){e=e||(new Date).getTime();a.set({k:o.storageKey.LAST_CLOSE_TIME,v:e,success:t})},getListFromCLJ:function(){return new t({type:"get",url:o.url.clj,dataType:"jsonp"}).then(function(e){e=e[0];if(typeof e==="string"){e=n.parse(e)}if(!e.success){throw new Error("request clj failed")}return e.data})},getListFromTFXT:function(){return new t({type:"get",url:o.url.tfxt,dataType:"jsonp"}).then(function(e){e=e[0];if(typeof e==="string"){e=n.parse(e)}if(!e||!e.data){throw new Error("request tfxt failed")}return e.data}).then(function(e){return e},function(){return[]})}};return r},{requires:["io","json","mui/storage","mui/app-guide/config"]});KISSY.add("mui/app-guide/tpl",function(e,t){var i=['<div class="j_AppGuider app-guider {{type}}">','<div class="channel-con">',"{{#each channel}}",'<a data-click="true" class="channel {{colorType}}" href="javascript:void(0);">','<img class="chn-pic" src="{{img}}"  />','<div class="chn-shelter j_ChnShelter"></div>','<div class="chn-context j_ChnContext">{{text}}</div>',"</a>","{{/each}}","</div>",'<div class="download-con">','<div class="context-hidden">\u8fd9\u4e9b\u7cbe\u5f69\u5185\u5bb9\uff0c\u5c31\u5728</div>','<div data-click="true" class="app-download"></div>',"</div>",'<div data-click="true" class="close"></div>',"</div>"].join("");return new t(i)},{requires:["xtemplate"]});