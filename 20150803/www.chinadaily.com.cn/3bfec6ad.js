_pt_sp_2.push('setDomain,chinadaily.com.cn');
_pt_sp_2.push('setAutoEvent,outboundLinks,true');
_pt_sp_2.push('setServer,0');
_pt_sp_2.push('setEventReport,true');/*event open*/ 
(function(Y){window["edc7uo"]=-1;var qa=null;function ra(){return function(){}}function Da(Y){return function(){return Y}}function Ja(){var a=p.getElementsByTagName("a"),b="";if(fa=="allManual")for(var c=0;c<a.length;c++){if((b=a[c].getAttribute("href"))&&a[c].getAttribute("onclick")&&a[c].getAttribute("onclick").indexOf("pt_domain")>-1&&b.indexOf(location.hostname)<0)for(var d=b.toLowerCase(),r=0;r<domainSet.length;r++)if(d.indexOf(domainSet[r])>-1){a[c].setAttribute("href",sa(b));break}}else if(fa=="halfManual")for(c=0;c<a.length;c++){if((b=a[c].getAttribute("href"))&&b.match(/^https?:\/\//)&&b.indexOf(location.hostname)<
0&&b.length<900){d=b.toLowerCase();for(r=0;r<domainSet.length;r++)if(d.indexOf(domainSet[r])>-1){a[c].setAttribute("href",sa(b));break}}}else if(!fa)for(c=0;c<a.length;c++)if((b=a[c].getAttribute("href"))&&b.match(/^https?:\/\//)&&b.indexOf(location.hostname)<0&&b.length<900){d=b.toLowerCase();for(r=0;r<domainSet.length;r++)if(d.indexOf(domainSet[r])>-1){a[c].setAttribute("href",sa(b));break}}}function sa(a){var b=a.split("#");i.k();if(i.h){var c=i.a("uid")+"."+i.a("nid")+"."+i.a("vid")+"."+i.a("sact")+
"."+i.a("vn")+"."+i.a("pvn")+"."+(l.localStorage&&typeof l.localStorage.removeItem=="function"&&l.localStorage.getItem(za)?l.localStorage.getItem(za).replace(/\./g,"*_*"):"");if(b.length==1)a+="#_pt_link="+c;else if(fa=="allManual"||fa=="halfManual")a=b[0]+(a.indexOf("?")==-1?"?":"&")+"_pt_link="+c+"#"+b[1]}return a}function ga(a,b,c){var c=c?c:w,b=b?b:R,d=(new Date).getTime();if(!(a!="vpv"&&d-U<1E4)){i.k();ha=e.p();Aa=0;U=aa=ba=d;a=="pn"?(x="1",D=i.a("vn"),Ba=i.C(),V="",s=o.g(u+b+aa+"v"),D=+D+1,
y=1):(V=i.a("pl"),s=i.a("vid"),y=(y=i.a("pvn"))?+y+1:1);L=o.g(u+s+b+ba+"v");V=i.t(w);i.m();z="?id="+q+"."+u+"."+s+"."+c+"."+L+"&stat="+(a=="pn"?+D==0?1:+D:y)+"."+(m==1?e.e():(e.e()+1)*m)+"."+ha*m+"."+e.j()+".0.0"+(a=="pn"?"":"."+D)+"&ref="+(a=="pn"?"":"&vref="+o.d(ca,!1))+"&p="+o.d(b.replace(/&/g,"*&*"),!1)+"&tl="+Ea+(adParamStr?"&cad="+adParamStr:"")+"&ptif="+A;z+=e.r();if(optFlag&&typeof optimizely=="object"){c="";b=optimizely.activeExperiments;if(b.length>0)for(d=0;d<b.length;d++)c+=d==0?"":"|o|",
c+=b[d]+"|p|"+optimizely.data.experiments[b[d]].name.substr(0,100)+"|p|"+optimizely.variationIdsMap[b[d]][0]+"|p|"+optimizely.variationNamesMap[b[d]].substr(0,100);z+="&op="+o.d(c,!1)}for(c=0;c<I.length;c++)I[c][2]=="cookie"?(b=v.f(I[c][1]))&&(z+="&"+I[c][0]+"="+o.d(b,!1)):z+="&"+I[c][0]+"="+o.d(I[c][1],!1);B.i((a=="pn"?Fa:Ga)+z);Aa=0;multiDomainFlag&&a!="vpv"&&(q=="519aa7cd"||q=="4d304c7a")&&Ja()}}function Ua(a){var b=a.length,c=0;if(b>0)for(var d=0;d<b;d++){c=a[d].indexOf(",");if(c<0)return!1;if(!Va(a[d].slice(0,
c),a[d].slice(c+1)))return!1}return!0}function Va(a,b){if(!b)return!1;switch(a){case "setServer":ia=b?+b:0;E=Na+Oa[ia];Fa=E+"/pn";Ga=E+"/pv";Ca=E+"/oc";Pa=E+"/os";Qa=E+"/hb";Ha=E+"/te";break;case "setAdParam":ja="cellant";adParamAry=(b=b.replace(/^\|*/,"").replace(/\|*$/,""))?b.split("|"):"";break;case "setCamParam":camParamAry=b.split(",");break;case "setURL":urlMark=b;break;case "setVPV":vUrl=b;break;case "setVPT":vTitle=b;break;case "setAccount":q=b.toLowerCase();break;case "setSID":q=b.toLowerCase();
break;case "isTestWeb":b=="true"&&q!=""&&(Ra[q]=!0);break;case "setCustomVar":(function(){var a=b.split(","),d=a[2],r;if(d=="cookie")r=a[3];else if(d=="globalVar")r=window[a[3]];else if(d=="domId"){if(p.getElementById(a[3]))r=p.getElementById(a[3]).innerHTML}else d=="value"&&(r=a[3]);r&&I.push([a[0],r,a[2]])})();break;case "useHttpCookie":ta=b.toLowerCase()=="false"?!1:!0;break;case "setDomain":return function(){ka="";var a=b.split(",");a.sort(function(a,b){return a.replace(/^https?:\/\//,"").length<
b.replace(/^https?:\/\//,"").length?1:-1});for(var d=0;d<a.length;d++)if(domainSet.push(a[d].replace(/^https?:\/\//,"")),!(a[d].match(/https?:\/\//)&&a[d].match(/https?:\/\//)[0]!=location.protocol+"//")&&location.hostname.match(a[d].replace(/^https?:\/\//,""))){ka=a[d].replace(/^https?:\/\//,"");break}if(b=="default"||location.href.slice(0,4)!="http")ka=location.href.toLowerCase().split("://")[1].split("?")[0].split("/")[0],domainSet.push(ka);return!0}();case "setAutoEvent":b.split(",").length==
2&&(la[b.split(",")[0]]=b.split(",")[1]);break;case "setEventReport":trackEvent=b=="true"?!0:!1}return!0}function Wa(a){var b=qa;this.O=function(){if(!b)try{b=p.createElement("input"),b.type="hidden",b.addBehavior("#default#userData"),p.body.appendChild(b)}catch(a){return!1}return!0};this.isEnabled=Da(!0);this.n=function(){var a=new ma;a.f(Z)&&(a.c(Z,"",{b:""}),a.c(W,"",{b:""}))};this.c=function(c,d,r){if(c==da)a.c(c,d,r);else try{if(this.O()){r=b;r.load(c);d&&r.setAttribute("code",d);var e=new Date;
e.setDate(e.getDate()+30);r.b=e.toUTCString();r.save(c)}}catch(i){}};this.f=function(c){if(c==da)return a.f(c);if(this.O())try{var d=b;d.load(c);return d.getAttribute("code")}catch(e){return qa}}}function Xa(){this.isEnabled=function(){return l.localStorage&&typeof l.localStorage.removeItem=="function"};this.n=function(){var a=new ma;a.f(Z)&&(a.c(Z,"",{b:""}),a.c(W,"",{b:""}))};this.f=function(a){return l.sessionStorage.getItem(a)||l.localStorage.getItem(a)};this.c=function(a,b,c){c.b==""?(l.sessionStorage.setItem(a,
b),l.localStorage.removeItem(a)):l.localStorage.setItem(a,b)}}function ma(){this.isEnabled=function(){return F.cookieEnabled};this.n=ra();this.f=function(a){var b="";this.isEnabled()||(ua=!1);if(p.cookie&&p.cookie!="")for(var c=p.cookie.split(";"),d=0;d<c.length;d++){var e=o.trim(c[d]);if(e.substring(0,a.length+1)==a+"="&&(a!=Z||a==Z&&e.indexOf("pt1pt")<0&&e.indexOf("pt0pt")<0)){b=e.substring(a.length+1);break}}return b};this.c=function(a,b,c){if(this.isEnabled()){var d="";if(c.b&&(typeof c.b=="number"||
c.b.toUTCString))typeof c.b=="number"?(d=new Date,d.setTime(d.getTime()+c.b*864E5)):d=c.b,d="; expires="+d.toUTCString();p.cookie=a+"="+b+d+"; path=/; domain="+ka}else ua=!1}}function Ya(){this.W=function(){if(F.plugins.length!=0)return!!F.plugins["Shockwave Flash"];else try{return!!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(a){return!1}};this.la=function(a){try{var b=p.createElement("div");p.body.appendChild(b);b.innerHTML='<object type="application/x-shockwave-flash" data="'+a+'FlashComm.swf" width="0" height="0" id="flash_comm"><param name="allowScriptAccess" value="always"/><param name="movie" value="FlashComm.swf"/></object>'}catch(c){}};
this.Z=function(){return F.appName.indexOf("Microsoft")!=-1?l.flash_comm:p.flash_comm};this.$=function(a){try{return a.getFlashFonts()}catch(b){return""}}}window.edc7uo||(window.edc7uo=-1);var Oa=["collect.ptengine.cn","collect.ptengine.cn"],ia=0,Na="https:"==location.protocol?"https://":"http://",E=Na+Oa[ia],Fa=E+"/pn",Ga=E+"/pv",Ca=E+"/oc",Pa=E+"/os",Qa=E+"/hb",Ha=E+"/te",ka="",Sa=18E4,G=3E4,na=3E5,ja="",fa=!1,X=!1,oa="";domainSet=[];multiDomainFlag=!1;vTitle=vUrl=urlMark="";adParamFlag=!1;adParamStr=
"";adParamAry=[];camParamAry=[];trackEvent=!1;var q="",u="",ta=!0,I=[],la={},K=window._pt_sp_2?"_pt_sp_2":"_pt_pe",J=[],Ra={"2dad4272":!0,"2586ac8b":!0,"4d23abf2":!0,"4d0eb6ce":!0,"714778c8":!0,"2916533b":!0,23456789:!0,"4c92a252":!0,"7269d05e":!0,"5370f5ad":!0,"43df1258":!0,"6d942c2a":!0,"618c61c0":!0,"2e0b67c6":!0};if(location.href.indexOf("ptengine=")>-1){if(K=["https://report.ptengine.jp","https://reportv2.ptengine.jp","https://report.ptengine.com","https://reportv2.ptengine.com"][location.href.split("ptengine=")[1].substring(0,
1)]){var N=document.createElement("script");N.type="text/javascript";N.async=!0;N.src=K+"/js/popup/ptpopupheatmap.js";document.body.appendChild(N)}}else if(window[K]&&!(window[K].join("").indexOf("setAccount")<0&&window[K].join("").indexOf("setSID")<0||window[K].join("").indexOf("setDomain")<0)&&Ua(window[K])&&ka!=""){var Z="pt_"+q,da="pt_s_"+q,W="pt_t_"+q;TECOOKIESNAME="pt_e_"+q;switch(q){case "7915ceae":ja="CONVERSE"}var z="",F=navigator,p=document,l=window,O=location,e=new function(){this.r=function(){var a=
[];this.s()==1||this.s()==4?(a.push("."+[this.o(),this.u()].sort()[0]),a.push("."+[this.o(),this.u()].sort()[1])):(a.push("."+this.o()),a.push("."+this.u()));a.push("."+(l.screen.colorDepth||0));a.push("."+this.N().replace(/\./g,"_"));a.push("."+(F.platform||"").toLowerCase());a.push("."+(F.language||F.U||"").toLowerCase());a.push("."+(p.characterSet||p.charset||"").toLowerCase());return a.join("")};this.ka=function(){var a=[this.r()];a.push("&ua="+o.d(F.userAgent||"",!1));a.push("&bw="+(p.documentElement.clientWidth||
p.body.clientWidth||0));a.push("&bh="+e.B());a.push("&pi="+e.ga());a.push("&ts="+Za);return a.join("")};this.ja=function(){try{var a=p.getElementsByTagName("title")[0]&&p.getElementsByTagName("title")[0].innerHTML||p.title,a=o.trim(a.split("#")[0]);vTitle&&(a=vTitle);return o.d(a,!1)}catch(b){return""}};this.F=function(a){if(a){for(var a=a.split("?")[0].toLowerCase(),b=0;b<domainSet.length;b++){var c=a.split("://")[0];if(!domainSet[b].match(/^https?:\/\/.*/)&&a.indexOf(domainSet[b])>-1)return 0;else if(c==
domainSet[b].split("://")[0]&&a.indexOf(domainSet[b].split("://")[1])>-1)return 0}return 1}else return 0};this.L=function(){try{var a={flag:0,referrer:""},b=p.referrer;if(b||X&&oa){X&&(b=oa?oa:"*"+b+"*");var c=b.match(/^(\S+:\/\/)?([^\/|\?|\#]+)(\S*)/);a.referrer=c[1].toLowerCase()+c[2].toLowerCase()+c[3];if(a.referrer){a.referrer=a.referrer.split("#")[0].replace(/(^\s*)/g,"").replace(/(\s*$)/g,"");a.referrer.indexOf("?_randomTest")>-1&&(a.referrer=a.referrer.split("?_randomTest")[0]);a.referrer=
a.referrer.replace(/\/*$/,"");for(var d=a.referrer.split("?")[0].toLowerCase(),b=0;b<domainSet.length;b++){var e=d.split("://")[0];if(!domainSet[b].match(/^https?:\/\/.*/)&&d.indexOf(domainSet[b])>-1)return a;else if(e==domainSet[b].split("://")[0]&&d.indexOf(domainSet[b].split("://")[1])>-1)return a}X||(a.flag=1)}}return a}catch(i){return a}};this.ga=function(){var a="",b=F.plugins;if(b.length!=0){for(var a=[],c=0;c<b.length;c++){a[c]=b[c].name+";"+b[c].description+";"+b[c].filename+";";for(var d=
0;d<b[c].length;d++)a[c]+="("+b[c][d].description+";"+b[c][d].type+";"+b[c][d].suffixes+")";a[c]+="."}a=a.sort().join("")}return a};this.ha=function(){var a="";if(F.plugins.length!=0){for(var b=F.plugins,a=[],c=0;c<b.length;c++){a[c]=b[c].name+";"+b[c].description+";"+b[c].filename+";";for(var d=0;d<b[c].length;d++)a[c]+="("+b[c][d].description+";"+b[c][d].type+";"+b[c][d].suffixes+")";a[c]+="."}a=a.sort();b=[];for(c=0;c<a.length;c++)b.push(a[c]?o.g(a[c]):"");a=b.join(";")}return a};this.I=function(a){function b(a,
b){var c=b.match(/^https?:\/\//);return c?a.indexOf(c[0])==0&&a.indexOf(b.substring(c[0].length))>-1:a.indexOf(b)>-1}for(var c=/*window.allPageInfo*/[['www.chinadaily.com.cn', true, false, false, 'index.html']]||[],d=a,e=0;e<c.length;e++)if(b(a,c[e][0])){c[e][1]&&(d=d.replace(/\#[^#|\$|\?]*/g,""));c[e][2]&&(d=d.replace(/^(http:\/\/|https:\/\/)?www./,"$1"));c[e][3]&&(d=d.replace(RegExp("([^#|$|?]*)"+c[e][4]+"(S*)"),"$1$2"));break}return d};this.fa=function(){var a,b=[],c="",b=(O.protocol+"//"+O.host).toLowerCase()+O.pathname+O.search+O.hash;if(!b)return"";vUrl&&
(b=vUrl);domainSet.length>1&&(a=RegExp(/(\?|\&|\#)_pt_link=([^\&|\#]*)(\&|\#)?/),b.match(a)&&(b=b.match(a)[3]=="&"?b.replace(a,"$1"):b.replace(a,"$3")));b=q=="56fbce4e"?b.replace(/(\?|\&)__SID=\S*/,""):b;b.replace(/\?_randomTest=\S*/,"");b=this.I(O.href);switch(ja){case "cellant":if(adParamAry){var b=b.split("#")[0],d="";for(a=0;a<adParamAry.length;a++)d="",b.indexOf("?"+adParamAry[a]+"=")>-1?d="?":b.indexOf("&"+adParamAry[a]+"=")>-1&&(d="&"),d&&(adParamFlag=!0,adParamStr&&(adParamStr+=","),b=b.split(d+
adParamAry[a]+"="),c=b[1]?b[1].split("&")[0]:"",adParamStr+=adParamAry[a]+":"+c,b=b[0]+d+b[1].slice(c.length+1));b=b.replace(/\?*$/,"").replace(/\&*$/,"")}break;case "oisix":var e=["utm_referrer","utm_source","utm_medium","utm_term","utm_content","utm_campaign","sessionid","urlserverid","SESSIONISNEW","k","tk","KAKUNINJIKAN","screenmode","OVRAW","OVKEY","OVMTC","OVADID","OVKWID","OVCAMPGID","OVADGRPID","SESSIONISNEW","jid","KENSAKUMOZIFLG","KENSAKUMOZIJOUKEN","searchValue","param","faqSearchKeyword",
"startNum","maxDisplayNum","detail","mi2","roadid","cart","ref","hosid","utm_expid"];for(a=0;a<e.length;a++)d="",b.indexOf("?"+e[a]+"=")>-1?d="?":b.indexOf("&"+e[a]+"=")>-1&&(d="&"),d&&(b=b.split(d+e[a]+"="),c=b[1]?b[1].split("&")[0]:"",b=b[0]+d+b[1].slice(c.length+1));b=b.replace(/\?*$/,"").replace(/\&*$/,"")}urlMark&&(b+="#"+urlMark);b=b.replace(/\/*$/,"");q=="4c92a252"&&(b=b.replace(/\/([\?|#])/,"$1"));return b};this.pa=function(){var a=F.platform.toLowerCase();if(a.indexOf("win")>-1)return!0;
for(var b=["mac68k","macppc","macintosh","macintel"],c=0;c<b.length;c++)if(a==b[c])return!0;return!1};this.oa=function(a){for(var b=["AIX","Amiga","BeOS","DragonFly","FreeBSD","GNU","Haiku","HP-UX","IRIX","Joli","Java","Macintosh","Minix","MorphOS","NetBSD","OpenBSD","PClinuxOS","QNX x86pc","SunOS","Ubuntu","Mint","Red Hat","Slackware","SUSE","PCLinuxOS","Debian","Fedora","CentOS","Vine","Arch Linux","Gentoo","Kanotix","Mandriva"],c=0;c<b.length;c++)if(a.indexOf(b[c])>-1)return!0;return!1};this.ma=
function(a){for(var b=["Android","AROS","Bada","BlackBerry","Chromium","CrOS","Danger Hiptop","Inferno","iPhone","iPad","iPod","Nintendo DS","Nintendo Wii","Palm OS","PLAYSTATION","Syllable","SymbOS","Symbian","Tizen","webOS","WebTV","Windows CE","Windows Mobile","Windows Phone","Xbox"],c=0;c<b.length;c++)if(a.indexOf(b[c])>-1)return!0;return!1};this.s=function(){try{var a=F.userAgent;if(!a)return 0;if(this.pa()||this.oa(a))if(this.ma(a))return 3;else{if(a.match(/.*MSIE.*Windows NT 6\.2;.*Touch\).*/))return 4;
return 2}else return a.indexOf("iPad")>-1||Math.min(e.M(),l.screen.height)>=1E3?4:1}catch(b){return 0}};this.M=function(){try{var a=l.screen.width;return a?parseInt(a,10):0}catch(b){return 0}};this.u=function(){try{var a=l.screen.height;if(this.s()==1&&a>2E3||this.s()==4&&a>3E3)a=this.j();return a?parseInt(a,10):0}catch(b){return 0}};this.B=function(){try{var a=p.documentElement.clientHeight?p.documentElement.clientHeight:p.body.clientHeight;return a?parseInt(a,10):0}catch(b){return 0}};this.e=function(){var a=
0;try{a=p.documentElement.scrollTop||l.pageYOffset,a=isNaN(a)?0:a}catch(b){a=0}return parseInt(a,10)};this.p=function(){return parseInt(+this.e()+ +this.B(),10)};this.ia=function(){var a=p.documentElement.scrollLeft||l.pageXOffset;return parseInt(isNaN(a)?0:a,10)};this.N=function(){try{var a=(new Date).getTimezoneOffset();return a||a==0?"GMT"+(a<=0?"+":"")+a/60*-1:""}catch(b){return""}};this.G=function(a){return a.target||l.event.srcElement};this.A=function(a){var b=a.offsetTop;a.offsetParent!=qa&&
(b+=this.A(a.offsetParent));b<0&&(b=0);return parseInt(b,10)};this.z=function(a){var b=a.offsetLeft;a.offsetParent!=qa&&(b+=this.z(a.offsetParent));b<0&&(b=0);return parseInt(b,10)};this.ua=function(a){return{x:parseInt(a.touches[0].clientX,10),y:parseInt(a.touches[0].clientY,10)}};this.da=function(a){var b={x:0,y:0};try{b.x=a.touches[0].pageX?a.touches[0].pageX:a.clientX;b.y=a.touches[0].pageY?a.touches[0].pageY:a.clientY;switch(q){case "7ba4a69b":if(a.touches[0].clientY<=110)b.y=a.touches[0].clientY}if(!b.x)b.x=
0;if(!b.y)b.y=0}catch(c){}b.x=parseInt(b.x,10);b.y=parseInt(b.y,10);return b};this.ea=function(a){return{x:parseInt(a.clientX+ +this.ia(),10),y:parseInt(a.clientY+ +this.e(),10)}};this.K=function(){return parseInt(p.body.scrollWidth,10)};this.D=function(){return parseInt(p.body.scrollHeight,10)};this.o=function(){return parseInt(self.innerWidth||p.body.clientWidth,10)};this.j=function(){try{return parseInt(self.innerHeight||p.body.clientHeight,10)}catch(a){return 0}};this.aa=function(){try{var a=
p.getElementsByName("viewport")[0].content;return a?parseInt(a.match("initial-scale=\\d.\\d+").toString().split("=")[1],10):1}catch(b){return 1}}},o=new function(){this.sa=function(a,b){var c=a.onload;a.onload=typeof a.onload!="function"?b:function(){c();b()}};this.Q=function(a,b,c){return+b-+a>+c};this.d=function(a,b){return encodeURIComponent instanceof Function?b?encodeURI(a):encodeURIComponent(a):escape(a)};this.Y=function(a){var b="",a=a.split("+").join(" ");if(decodeURIComponent instanceof Function)try{b=
decodeURIComponent(a)}catch(c){b=unescape(a)}else b=unescape(a);return b};this.na=function(a){return Y==a||"null"==a||-1==a||""==a};this.trim=function(a){return a.replace(/(^\s*)/g,"").replace(/(\s*$)/g,"")};this.T=function(a){for(var b="",c=0;c<a.length/6-1;)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/".charAt(parseInt(a.slice(c*6,(c+1)*6),2).toString(10)),c++;if(a=a.slice(c*6,(c+1)*6)){for(var d=a.length,c=0;c<6-d;c++)a+="0";b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/".charAt(parseInt(a,
2).toString(10))}return b};this.S=function(a){for(var b="",c="",d=0,e=a.length,i=0;i<e;i++){for(var c=parseInt(a.charAt(i),16).toString(2),d=c.length,l=0;l<4-d;l++)c="0"+c;b+=c}return b};this.g=function(a){return this.T(this.S(this.J(a)))};this.J=function(a){function b(a,b){var c,d,e,f,t;e=a&2147483648;f=b&2147483648;c=a&1073741824;d=b&1073741824;t=(a&1073741823)+(b&1073741823);if(c&d)return t^2147483648^e^f;return c|d?t&1073741824?t^3221225472^e^f:t^1073741824^e^f:t^e^f}function c(a,c,d,e,f,g,t){a=
b(a,b(b(c&d|~c&e,f),t));return b(a<<g|a>>>32-g,c)}function d(a,c,d,e,f,g,t){a=b(a,b(b(c&e|d&~e,f),t));return b(a<<g|a>>>32-g,c)}function e(a,c,d,f,g,i,t){a=b(a,b(b(c^d^f,g),t));return b(a<<i|a>>>32-i,c)}function i(a,c,d,e,f,g,t){a=b(a,b(b(d^(c|~e),f),t));return b(a<<g|a>>>32-g,c)}function l(a){var b="",c="",d;for(d=0;d<=3;d++)c=a>>>d*8&255,c="0"+c.toString(16),b+=c.substr(c.length-2,2);return b}var k=[],o,m,n,p,g,h,f,j,k=function(a){var b,c=a.length;b=c+8;for(var d=((b-b%64)/64+1)*16,e=Array(d-1),
f=0,t=0;t<c;)b=(t-t%4)/4,f=t%4*8,e[b]|=a.charCodeAt(t)<<f,t++;e[(t-t%4)/4]|=128<<t%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(a);g=1732584193;h=4023233417;f=2562383102;j=271733878;for(a=0;a<k.length;a+=16)o=g,m=h,n=f,p=j,g=c(g,h,f,j,k[a+0],7,3614090360),j=c(j,g,h,f,k[a+1],12,3905402710),f=c(f,j,g,h,k[a+2],17,606105819),h=c(h,f,j,g,k[a+3],22,3250441966),g=c(g,h,f,j,k[a+4],7,4118548399),j=c(j,g,h,f,k[a+5],12,1200080426),f=c(f,j,g,h,k[a+6],17,2821735955),h=c(h,f,j,g,k[a+7],22,4249261313),g=c(g,h,f,j,k[a+
8],7,1770035416),j=c(j,g,h,f,k[a+9],12,2336552879),f=c(f,j,g,h,k[a+10],17,4294925233),h=c(h,f,j,g,k[a+11],22,2304563134),g=c(g,h,f,j,k[a+12],7,1804603682),j=c(j,g,h,f,k[a+13],12,4254626195),f=c(f,j,g,h,k[a+14],17,2792965006),h=c(h,f,j,g,k[a+15],22,1236535329),g=d(g,h,f,j,k[a+1],5,4129170786),j=d(j,g,h,f,k[a+6],9,3225465664),f=d(f,j,g,h,k[a+11],14,643717713),h=d(h,f,j,g,k[a+0],20,3921069994),g=d(g,h,f,j,k[a+5],5,3593408605),j=d(j,g,h,f,k[a+10],9,38016083),f=d(f,j,g,h,k[a+15],14,3634488961),h=d(h,f,
j,g,k[a+4],20,3889429448),g=d(g,h,f,j,k[a+9],5,568446438),j=d(j,g,h,f,k[a+14],9,3275163606),f=d(f,j,g,h,k[a+3],14,4107603335),h=d(h,f,j,g,k[a+8],20,1163531501),g=d(g,h,f,j,k[a+13],5,2850285829),j=d(j,g,h,f,k[a+2],9,4243563512),f=d(f,j,g,h,k[a+7],14,1735328473),h=d(h,f,j,g,k[a+12],20,2368359562),g=e(g,h,f,j,k[a+5],4,4294588738),j=e(j,g,h,f,k[a+8],11,2272392833),f=e(f,j,g,h,k[a+11],16,1839030562),h=e(h,f,j,g,k[a+14],23,4259657740),g=e(g,h,f,j,k[a+1],4,2763975236),j=e(j,g,h,f,k[a+4],11,1272893353),f=
e(f,j,g,h,k[a+7],16,4139469664),h=e(h,f,j,g,k[a+10],23,3200236656),g=e(g,h,f,j,k[a+13],4,681279174),j=e(j,g,h,f,k[a+0],11,3936430074),f=e(f,j,g,h,k[a+3],16,3572445317),h=e(h,f,j,g,k[a+6],23,76029189),g=e(g,h,f,j,k[a+9],4,3654602809),j=e(j,g,h,f,k[a+12],11,3873151461),f=e(f,j,g,h,k[a+15],16,530742520),h=e(h,f,j,g,k[a+2],23,3299628645),g=i(g,h,f,j,k[a+0],6,4096336452),j=i(j,g,h,f,k[a+7],10,1126891415),f=i(f,j,g,h,k[a+14],15,2878612391),h=i(h,f,j,g,k[a+5],21,4237533241),g=i(g,h,f,j,k[a+12],6,1700485571),
j=i(j,g,h,f,k[a+3],10,2399980690),f=i(f,j,g,h,k[a+10],15,4293915773),h=i(h,f,j,g,k[a+1],21,2240044497),g=i(g,h,f,j,k[a+8],6,1873313359),j=i(j,g,h,f,k[a+15],10,4264355552),f=i(f,j,g,h,k[a+6],15,2734768916),h=i(h,f,j,g,k[a+13],21,1309151649),g=i(g,h,f,j,k[a+4],6,4149444226),j=i(j,g,h,f,k[a+11],10,3174756917),f=i(f,j,g,h,k[a+2],15,718787259),h=i(h,f,j,g,k[a+9],21,3951481745),g=b(g,o),h=b(h,m),f=b(f,n),j=b(j,p);var q;32=="16"&&(q=l(h)+l(f));32=="32"&&(q=l(g)+l(h)+l(f)+l(j));return q}},i=new function(){this.h=
"";this.m=function(){if(ua)this.h=this.X(),v.c(Z,this.h,{b:1E3});this.k()};this.k=function(){if(ua)this.h=v.f(Z)};this.ca=function(a){return this.h.indexOf(w)>-1&&!o.Q(this.a("sact"),a,6E4)?1:0};this.ba=function(a){if(Ka==0&&!X)return 1;if(o.Q(this.a("sact"),a,Sa)&&!X)return 1;if(this.a("to_flag")==1&&!X)return 1;return 0};this.C=function(){var a=this.a("nid");a=="1"&&(a=0);return a};this.v=function(){return this.a("pl")==w+"*pt*"+ba};this.H=function(a,b){return this.a("vid")!=a&&+b>=+this.a("sact")};
this.X=function(){var a=Math.floor(V.length/3800);return"uid="+u+"&nid="+Ba+"&vid="+s+"&vn="+D+"&pvn="+y+"&sact="+aa+"&to_flag="+Aa+(+a>0?"&cn="+a:"")+"&pl="+V};this.V=function(){for(var a=["uid","nid","vid","vn","sact","to_flag","pl"],b=0;b<a.length;b++)if(this.h.indexOf(a[b])<0)return!1;return!0};this.a=function(a){try{if(a=="pl")return this.h.indexOf(a)!=-1?this.h.split(a+"=")[1]:"";else{var b=this.h.indexOf(a)!=-1?this.h.split(a+"=")[1].split("&")[0]:"";a=="pvn"&&(b=isNaN(b)?0:b);return b}}catch(c){return""}};
this.t=function(a){return a+"*pt*"+ba}},v=new function(){var a=!1;this.l="";!ta&&F.userAgent.toLowerCase().match(/msie\s([2-8]+?\.[\d]+)/ig)?this.l=new Wa(new ma):!ta&&l.localStorage&&l.sessionStorage&&typeof l.localStorage.removeItem=="function"&&typeof l.sessionStorage.removeItem=="function"?(l.sessionStorage.setItem("pt_testsk","pt_testsv"),l.localStorage.setItem("pt_testlk","pt_testlv"),l.sessionStorage.getItem("pt_testsk")=="pt_testsv"&&l.localStorage.getItem("pt_testlk")=="pt_testlv"?this.l=
new Xa:a=!0,l.sessionStorage.removeItem("pt_testsk"),l.localStorage.removeItem("pt_testlk")):ta?this.l=new ma:a=!0;a?(this.n=ra(),this.isEnabled=Da(!1),this.c=ra(),this.f=Da("")):(this.n=function(){this.l.n()},this.isEnabled=function(){return this.l.isEnabled()},this.c=function(a,c,d){this.l.c(a,c,d)},this.f=function(a){return this.l.f(a)})},B=new function(){this.qa=function(){var a=window.edc7uo,b="";try{switch("heatmap"){case "heatmap":if(a==-1)return!0;else{if(a)for(var c=e.I(O.href).replace(/\/*$/,
""),d=0;d<a.length;d++)if((b=a[d])&&(b=e.I(b).replace(/\/*$/,"")),c==b)return!0;return!1}}}catch(i){}};this.i=function(a){if(!(y>99)&&((new Image).src=a+"&v=1.3&ts="+(new Date).getTime(),Ra[q]))q=="4c92a252"?(new Image).src=a.replace(/collect.ptengine.cn/,"tzcj.ptmind.com")+"&v=1.3&ts="+(new Date).getTime():(new Image).src=a.replace(/collect.ptengine.cn/,"tzcollect.ptengine.cn")+"&v=1.3&ts="+(new Date).getTime()};this.q=function(a){try{var b=a.nodeName.toLowerCase();if(b=="body"||b=="html")return"body";
else if(a.getAttribute("id"))return"#"+a.getAttribute("id");else{for(var c=a.parentNode;b==c.nodeName.toLowerCase();){if(c.getAttribute("id"))break;c=c.parentNode}for(var d=c.getElementsByTagName(b);d.length==1;){if(c.getAttribute("id")||c.nodeName.toLowerCase()=="body")break;c=c.parentNode;d=c.getElementsByTagName(b)}for(var e=0;e<d.length;e++)if(d[e]==a){if((b=="input"||b=="select"||b=="textarea"||b=="button")&&a.getAttribute("name"))return this.q(c)+" "+b+":input[name='"+a.getAttribute("name")+
"']";return this.q(c)+" "+b+":eq("+(e-0)+")"}}}catch(i){}};this.P=function(a){for(;a.nodeName.toLowerCase()!="body";)if(a.nodeName.toLowerCase()=="a")return a;else a=a.parentNode;return!1}},Q=e.L(),$a=e.aa(),A=e.s(),m=l.orientation==Y||l.orientation==0?1:-1,x="0",s="",D=0,y=0,za=q+"_/",N=new Date,Za=N.getTime()+"-"+N.getDate(),ca="",Ba="0",R="",Ta="",w="",Ea=e.ja(),L="",V="",ua=v.isEnabled(),La="",H="",n="",wa=0,xa=0,ha=e.p(),S=m==1?ha:0,T=m!=1?ha:0,ea=0,pa=N.getTime(),ba,aa,U,Ia,Ma=!1,Ka=0,Aa=0,
$=!1;op="";optFlag=!1;var ab={w:(new Date).getTime()-1E4,R:function(){var a=(new Date).getTime();return this.w+1E3>a?!1:(a-this.w>1E4?this.w=a-9E3:this.w+=1E3,!0)}};if(o.g("ptmind")=="VjjxITmt45nXMldop676zQ"){window[K].push=function(a){a=a.split(",");switch(a[0]){case "setPVTag":try{R=a[2]=="replace"?a[1]:Ta+"#"+(a[1]?a[1]:""),w=o.g(R),ga("vpv",R,w)}catch(b){}break;case "setTrackEvent":try{if(trackEvent==!1)break;if(typeof a[6]=="string"&&!O.href.replace(/\/$/,"").match(RegExp(a[6].replace(/^\//,
"").replace(/\/$/,""))))break;typeof a[3]=="undefined"&&(a[3]="");typeof a[4]=="undefined"&&(a[4]="0");a[4]=a[4].replace(/\./g,"e");for(var c=1;c<5;c++)a[c]=o.Y(a[c]);a[1]=a[1].substr(0,200);a[2]=a[2].substr(0,200);a[3]=a[3].substr(0,500);a[4]=a[4].substr(0,10);for(c=1;c<5;c++)a[c]=o.d(a[c]).replace(/\./g,"%2E");if(typeof a[7]=="string")J.push(a);else{if(u==""||s==""||w==""||L=="")break;if(!ab.R())break;y=+y+1;i.m();var d="?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+a.slice(1).join(".")+"&ptif="+A+"&pvn="+
y;v.c(TECOOKIESNAME,d,{b:1E3});var e=v.f(TECOOKIESNAME);window.setTimeout(function(a){return function(){e&&(B.i(Ha+a),v.c(TECOOKIESNAME,"",{b:""}))}}(e),1E3)}}catch(l){}break;case "setFunnelStep":try{X=a[1]=="true"?!0:!1,oa=a.length==3?a[2]:""}catch(m){}break;case "setCrossDomainLink":try{fa=a[1]=="allManual"?"allManual":a[1]=="halfManual"?"halfManual":!1}catch(k){}break;case "setOptimizely":try{optFlag=a[1]=="true"?!0:!1}catch(n){}}};if(window[K].length>0)for(var N=window[K],ya=0;ya<N.length;ya++)window[K].push(N[ya]);
if(q=="308fd851"||q=="633fdbe6")G=6E4;(function(){function a(){var a=camParamAry;if(location.href.match(/(utm_campaign|utm_source|utm_medium|utm_term|utm_content)/))return!0;for(var b=0;b<a.length;b++)if(location.search.match(RegExp("[?/&]("+a[b]+")=")))return!0;return!1}function b(){for(var a=["(wap|www|m|m5).baidu.com","www.baidu.jp","(hao|so).360.cn","www.360(soso|sou).com","(www|m).so.com","www.google.","(blogsearch|books|images|news|scholar).google.com","bing.com","(search|tw.search).yahoo.com",
"www.yahoo.cn","search.yahoo.co.jp","(www|jp).ask.com","(cn|jp).indeed.com","search.biglobe.ne.jp","search.(goo|smt.docomo).ne.jp","search.nifty.com","websearch.rakuten.co.jp","www.so-net.ne.jp"],b=0;b<a.length;b++)if(p.referrer.match(RegExp(a[b])))return!0;return!1}function c(){var a=localStorage.length>0?"1":"0",b=sessionStorage.length>0?"1":"0",c="0";(function(){try{var a=document.createElement("input");a.type="hidden";a.addBehavior("#default#userData");c="1"}catch(b){}})();return a+b+c}function d(a,
b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function r(){i.k();if(i.v()){if((new Date).getTime()-U>na+ +G){if(multiDomainFlag&&(q=="519aa7cd"||q=="4d304c7a"))for(var a=p.getElementsByTagName("a"),b="",c,d=0;d<a.length;d++)if(c=a[d].getAttribute("href"),b=c.match(/[\#|\?|\&]_pt_link=[^#|^&]*/))c=c.split(b),b=c[0]+(c[1]?c[1]:""),a[d].setAttribute("href",b);clearInterval(window._pt_hb_interval);Aa=1;i.m();if((ea+5)*+G<na)return}ea++;a=e.p();m||(m=l.orientation==
Y||l.orientation==0?1:-1);m==1&&a>S?S=a:m!=1&&a>T&&(T=a);B.i(Qa+("?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+(m==1?e.e():(e.e()+1)*m)+"."+(m==1?S:T*-1)+"."+e.j()+"."+(Aa==1?-1*na+1:G)+"&ptif="+A))}}if(!O.href.match(/^https?:\/\/.*/)||O.href.indexOf("#_pt_capture")>-1)return!1;if(q!="7918662e"&&(O.href.match(/^https?:\/\/jptest.ptmind.com.*/)||O.href.match(/^https?:\/\/report.ptmind.com.*/)||O.href.match(/^https?:\/\/report.ptengine.cn.*/)||document.referrer.match(/^https?:\/\/jptest.ptmind.com.*/)||
document.referrer.match(/^https?:\/\/report.ptmind.com.*/)||document.referrer.match(/^https?:\/\/report.ptengine.cn.*/)||document.referrer.match(/^https?:\/\/tztest.ptmind.com.*/)))return!1;B.qa()&&($=!0);switch(A){case 2:case 3:na=18E5}if(ja=="cellant"&&(A==2||A==3))return!1;Ta=R=e.fa();w=o.g(R);v.n();i.k();if(X=i.h&&X?!0:!1)Sa=864E5,Q=e.L(),preVID=i.a("vid");(function(){function a(b){function c(a,b,d){var e=new Date;e.setTime(e.getTime()-1E4);document.cookie=a+"='';expires="+e.toGMTString()+";domain="+
b+";path="+d+";";document.cookie=a+"='';expires="+e.toGMTString()+";domain="+b+";path="+d+"/;"}c(b,"","");for(var d=document.location.hostname.split("."),e=document.location.pathname.split("/"),f=0;f<d.length;f++)for(var g=0;g<e.length;g++)c(b,d.slice(f).join("."),e.slice(0,parseInt(g)+1).join("/"))}for(var b=p.cookie.split(";"),c=0;c<b.length;c++)if(b[c]=b[c].split("="),b[c][0].indexOf(Z)>-1)i.h=b[c].slice(1).join("="),a(b[c][0]);else if(b[c][0].indexOf(da)>-1){var d=da+"="+b[c].slice(1).join("=")+
";domain="+ka+";path=/;";a(b[c][0])}if(d)document.cookie=d})();if(o.na(i.h)||!i.V())v.c(da,pa,{b:""}),i.h="",u=o.g(e.ka()),Ba="1",D=0,x="1",ca=Q.referrer;else if(a()||b())u=i.a("uid"),Ba=i.C(),D=i.a("vn"),x="1",ca=Q.referrer;else{La=v.f(da);Ka=ua?La?1:0:-1;u=i.a("uid");Ba=i.C();i.ca(pa)==1&&(Q={flag:0,referrer:""});x=Q.flag==1?"1":i.ba(pa);ja=="cellant"&&adParamFlag&&(x="1");ja=="cellant"&&Ka&&!adParamStr&&(adParamStr=La.split("cad=")[1])&&(adParamStr=adParamStr.split("&")[0]);D=i.a("vn");var M=i.a("pvn");
y=x=="1"?0:M?M:1;V=x=="1"?"":i.a("pl");ca=x=="1"?Q.referrer:l.localStorage&&typeof l.localStorage.removeItem=="function"?l.localStorage.getItem(za):"";x=="1"&&v.c(da,pa,{b:""})}if(!(q=="whrwhrwhrwhrwhr"&&o.J(u).substr(u.length-3,3)>"019")){setTimeout(function(){var a=v.f(W);a&&($&&(x=="1"?B.i(Ca+a.substring(0,a.length-3)+"&delay=1"):B.i(Ca+a)),v.c(W,"",{b:""}));if(a=v.f(TECOOKIESNAME))$&&(x=="1"?B.i(Ha+a.substring(0,a.length-3)+"&delay=1"):B.i(Ha+a)),v.c(TECOOKIESNAME,"",{b:""})},1E3);U=aa=ba=pa;
s=x=="1"?o.g(u+R+aa+"v"):i.a("vid");X&&preVID&&s!=preVID&&(s=preVID);D=x=="1"?+D+1:+D==0?1:+D;y=+y+1;L=o.g(u+s+R+ba+"v");V=i.t(w);i.m();M=window._pt_lt!=-1?(new Date).getTime()-window._pt_lt:0;M<0&&(M=0);z="?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+(x=="1"?D:y)+"."+(m==1?e.e():(e.e()+1)*m)+"."+ha*m+"."+e.j()+"."+M+"."+(x=="1"?Q.flag:e.F(ca))+(x=="1"?"":"."+D)+"&ref="+o.d(Q.referrer.replace(/&/g,"*&*").replace(/\+/g,"*+*"),!1)+(x!="1"?"&vref="+o.d(ca,!1):"")+"&p="+o.d(R.replace(/&/g,"*&*"),!1)+"&tl="+
Ea+(adParamStr?"&cad="+adParamStr:"")+"&ptif="+A;z+=e.r();if(optFlag&&typeof optimizely=="object"){var C="",k=optimizely.activeExperiments;if(k.length>0)for(var P=0;P<k.length;P++)C+=P==0?"":"|o|",C+=k[P]+"|p|"+optimizely.data.experiments[k[P]].name.substr(0,100)+"|p|"+optimizely.variationIdsMap[k[P]][0]+"|p|"+optimizely.variationNamesMap[k[P]].substr(0,100);z+="&op="+o.d(C,!1)}for(C=0;C<I.length;C++)I[C][2]=="cookie"?(k=v.f(I[C][1]),ja=="rakuten-sec"?z+=k?k.slice(5,10)=="00000"?"&"+I[C][0]+"=1":
"&"+I[C][0]+"=2":"&"+I[C][0]+"=0":k&&(z+="&"+I[C][0]+"="+o.d(k,!1))):z+="&"+I[C][0]+"="+o.d(I[C][1],!1);x=="1"?multiDomainFlag&&(q=="519aa7cd"||q=="4d304c7a")&&fa!="allManual"&&Q.referrer!=""&&e.F(Q.referrer)==0&&!O.href.match(/[\#|\?|\&]_pt_link=[^#|^&]*/)?(w=o.g(Q.referrer),L=o.g(u+s+Q.referrer+ba+"v"),z="?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+(x=="1"?D:y)+"."+(m==1?e.e():(e.e()+1)*m)+"."+ha*m+"."+e.j()+"."+M+".0&ref=&p="+o.d(Q.referrer.replace(/&/g,"*&*"),!1)+"&tl="+Ea+(adParamStr?"&cad="+adParamStr:
"")+"&ptif="+A,z+=e.r(),B.i(Fa+z),w=o.g(R),L=o.g(u+s+R+ba+"v"),y=+y+1,z="?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+y+"."+(m==1?e.e():(e.e()+1)*m)+"."+ha*m+"."+e.j()+"."+M+"."+e.F(ca)+("."+D)+"&ref="+o.d(Q.referrer.replace(/&/g,"*&*").replace(/\+/g,"*+*"),!1)+"&vref=&p="+o.d(R.replace(/&/g,"*&*"),!1)+"&tl="+Ea+(adParamStr?"&cad="+adParamStr:"")+"&ptif="+A,z+=e.r(),B.i(Ga+z)):B.i(Fa+z):B.i(Ga+z);v.c(da,"vt="+pa+"&cad="+adParamStr,{b:""});x=="1"&&l.localStorage&&typeof l.localStorage.removeItem=="function"&&
(l.localStorage.removeItem(za),l.localStorage.setItem(za,ca));var E=new Ya,K=!1,N="",M=("https:"==location.protocol?"https://":"http://")+"js.ptengine.cn/js/",C=e.N().replace(/\./g,"_"),P=A==1||A==4?e.o():e.M(),g=e.u(),k=(A==1||A==4)&&P>g?g:P,P=(A==1||A==4)&&P>g?P:g,g=l.screen.colorDepth||0,h=F.language||F.U||"";if({"56fbce4e":!0,"5bd1ca5c":!0,"223e5c5c":!0,"2916533b":!0,"7918662e":!0}[q]&&x=="1"){var f=[];f.push(ua?"1":"0");f.push(C);f.push(k+"*"+P+"*"+g);f.push(F.platform.toLowerCase());f.push(h);
f.push(h);f.push(h);f.push(e.ha());f.push(c());window._ptIsJsReady=Da(!0);window._ptFlashError=ra();window._ptFlashReady=function(){K=!0};window._ptFlashCookiesReady=ra();window._ptAlert=ra();if((A==2||A==3)&&E.W()){var j=0;E.la(M);var ta=setInterval(function(){j++;if(K||j==10)clearInterval(ta),K&&(N=E.$(E.Z())),ma()},100)}else ma();var ma=function(){var a="",b="";l.ra&&(e.va(),a=e.ta(p.getElementById("dlgHelper_comm")));for(var b=N||a,c=["AAAAA","AAAAB","AAAAC","AAAAD","AAAAE","AAAAF","AAAAG","AAAAH",
"AAAAI","AAAAJ","AAAFX","AAALN","AAALV","AAALY","AAAMY","AAATN","AAAUU","AAAYW","AAAZB","AAAZX","AAAZY"],a="",d=0;d<c.length;d++)if(b.indexOf(c[d])>-1){a=c[d];break}f.push(b?o.g(b):"");b=o.g(f.join("."));f.push(a);var g=q+"."+u+"."+b+"."+s+"."+f.join(".")+"."+(new Date).getTime();setTimeout(function(){(new Image).src="https:"==document.location.protocol?"https://":"http://collect.ptengine.cn/fp?data="+g},100)}}if(multiDomainFlag&&(q=="519aa7cd"||q=="4d304c7a"))if(p.readyState=="complete")Ja();else{var oa=
l.onload;l.onload=function(){oa&&oa();Ja()}}d(l,"orientationchange",function(){m=l.orientation==Y||l.orientation==0?1:-1});d(p,"touchmove",function(){Ma=!0});d(p,"touchstart",function(a){a=a||l.event;n=e.G(a);H=e.da(a)});for(var va=["input","textarea","select"],M=0;M<va.length;M++){k=document.getElementsByTagName(va[M]);for(C=0;C<k.length;C++)d(k[C],"focus",function(a){n=e.G(a);var b=B.q(n);if(J.length>0)for(var c=0;c<J.length;c++)if(typeof jQuery=="function"&&jQuery(J[c][7])[0]==n||typeof jQuery!=
"function"&&J[c][7]==b)_pt_sp_2.push("setTrackEvent,"+J[c].slice(1,5).join(",")),this.removeEventListener?this.removeEventListener("focus",arguments.callee,!1):this.detachEvent&&this.detachEvent("onfocus",arguments.callee)})}d(p,"click",function(a){var b=0,a=a||l.event;H=e.ea(a);if(!(e.D()>0&&(H.x<=0||H.y<=0||H.x>+e.K()||H.y>+e.D())))if(n=e.G(a),n!=qa){a=B.P(n);typeof a=="object"&&(n=a);wa=e.z(n);xa=e.A(n);var c=B.q(n),d=n.nodeName.toLowerCase(),a=(new Date).getTime();if(!(a-Ia<3E3&&d!="a")){if(d==
"a"){var f="",b=o.d(n.href,!1).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\./g,"%2E");if(n.href!="")if(n.href.match(/mailto:/))la.mailSendings=="true"&&(f="Mail,Mailto,"+b.toLowerCase()+",0");else if(n.href.toLowerCase().match(/\.(msi|pdf|apk|ipa|jar|umd|jad|epub|mobi|iso|tar|zip|rar|gzip|gz|dmg|doc|docx|xls|xlsx|csv|ppt|pptx|exe|txt|pdf|key|numbers|pages)/)){if(la.fileDownloads=="true")var g=n.href.toLowerCase().match(/\.(msi|pdf|apk|ipa|jar|umd|jad|epub|mobi|iso|tar|zip|rar|gzip|gz|dmg|doc|docx|xls|xlsx|csv|ppt|pptx|exe|txt|pdf|key|numbers|pages)/)[1],
b=b.replace(/(^https?:\/\/)([^/]+)/i,function(a){return a.toLowerCase()}),f="Downloads,"+g+","+b+",0"}else if(n.href.toLowerCase().indexOf("http")==0&&la.outboundLinks=="true"){for(var g=!0,h=0;h<domainSet.length;h++)if(n.href.toLowerCase().indexOf(domainSet[h])>0){g=!1;break}g&&(b=b.replace(/(^https?:\/\/)([^/]+)/i,function(a){return a.toLowerCase()}),f="Outbound%20Links,Exit,"+b+",0")}f!=""&&trackEvent&&window.setTimeout(function(){_pt_sp_2.push("setTrackEvent,"+f+",false")})}(function(){for(var a=
0;a<va.length;a++)if(va[a]==d)return;if(J.length>0)for(a=0;a<J.length;a++)(typeof jQuery=="function"&&jQuery(J[a][7])[0]==n||typeof jQuery!="function"&&J[a][7]==c)&&window.setTimeout(function(a){return function(){_pt_sp_2.push("setTrackEvent,"+a.slice(1,5).join(","))}}(J[a]))})();if(!(q=="3bfec6ad"&&navigator.userAgent.indexOf("MSIE")>-1&&c==".focus-menu .current ")){b=0;b=d=="a"||d=="input"||d=="select"||d=="embed"||d=="object"||d=="textarea"||d=="button"?1:n.onclick?1:n.childNodes.length==0||n.childNodes.length==
1&&n.childNodes[0].nodeType!=1?2:0;g=b+o.d(c,!1).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\./g,"%2E");i.k();if(i.a("to_flag")==1||!i.v())if(i.a("to_flag")==1||+a-+i.a("sact")>+na){ga("pn");return}else if(i.H(s,a)){ga("pv");return}else b=1E3;else if(b=a-U-ea*G,b<0||b>G*1.5)b=G;V=i.t(w);Ia=U=aa=a;y=i.a("pvn");if($)clearInterval(window._pt_hb_interval),window._pt_hb_interval=setInterval(function(){r()},G),ea=0;i.m();a=e.p();m||(m=l.orientation==Y||l.orientation==0?1:-1);m==1&&a>S?S=a:m!=1&&
a>T&&(T=a);$&&(a="?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+H.x+"."+H.y+"."+e.o()+"."+e.j()+"."+g+".0."+e.e()+"."+(m==1?S:T*-1)+"."+b+"."+wa+"."+xa+"&ptif="+A,xa=wa=0,v.c(W,a,{b:1E3}),window.setTimeout(function(){var a=v.f(W);a&&(B.i(Ca+a),v.c(W,"",{b:""}))},1E3))}}}});d(p,"touchend",function(){var a=0;if(Ma)Ma=!1;else if(!(H.x<=0||H.y<=0))if(!(H.x==0&&H.y==0||H.x<0||H.x>e.K()||H.y>e.D())){var b=(new Date).getTime();i.k();if(i.a("to_flag")==1||!i.v())if(i.a("to_flag")==1||+b-+i.a("sact")>+na){ga("pn");
return}else if(i.H(s,b)){ga("pv");return}else a=1E3;else if(a=b-U-ea*G,a<0||a>G*1.5)a=G;if(n!=qa){var c=B.P(n);typeof c=="object"&&(n=c);wa=e.z(n);xa=e.A(n);var d=B.q(n),f=n.nodeName.toLowerCase();if(!(b-+Ia<3E3&&f!="a")){if(f=="a"){var g="",c=o.d(n.href,!1).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\./g,"%2E");if(n.href!="")if(n.href.match(/mailto:/))la.mailSendings=="true"&&(g="Mail,Mailto,"+c.toLowerCase()+",0");else if(n.href.toLowerCase().match(/\.(msi|pdf|apk|ipa|jar|umd|jad|epub|mobi|iso|tar|zip|rar|gzip|gz|dmg|doc|docx|xls|xlsx|csv|ppt|pptx|exe|txt|pdf|key|numbers|pages)/))la.fileDownloads==
"true"&&(g="Downloads,"+n.href.match(/\.(msi|pdf|apk|ipa|jar|umd|jad|epub|mobi|iso|tar|zip|rar|gzip|gz|dmg|doc|docx|xls|xlsx|csv|ppt|pptx|exe|txt|pdf|key|numbers|pages)/)[1]+","+c+",0");else if(n.href.toLowerCase().indexOf("http")==0&&la.outboundLinks=="true"){for(var h=!0,j=0;j<domainSet.length;j++)if(n.href.toLowerCase().indexOf(domainSet[j])>0){h=!1;break}h&&(c=c.replace(/(^https?:\/\/)([^/]+)/i,function(a){return a.toLowerCase()}),g="Outbound%20Links,Exit,"+c+",0")}g!=""&&trackEvent&&window.setTimeout(function(){_pt_sp_2.push("setTrackEvent,"+
g+",false")})}(function(){for(var a=0;a<va.length;a++)if(va[a]==f)return;if(J.length>0)for(a=0;a<J.length;a++)(typeof jQuery=="function"&&jQuery(J[a][7])[0]==n||typeof jQuery!="function"&&J[a][7]==d)&&window.setTimeout(function(a){return function(){_pt_sp_2.push("setTrackEvent,"+a.slice(1,5).join(","))}}(J[a]))})();c=0;c=f=="a"||f=="input"||f=="select"||f=="embed"||f=="object"||f=="textarea"||f=="button"?1:n.onclick?1:n.childNodes.length==0||n.childNodes.length==1&&n.childNodes[0].nodeType!=1?2:0;
c+=o.d(d,!1).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\./g,"%2E");V=i.t(w);Ia=U=aa=b;y=i.a("pvn");if($)clearInterval(window._pt_hb_interval),window._pt_hb_interval=setInterval(function(){r()},G),ea=0;i.m();b=e.p();m||(m=l.orientation==Y||l.orientation==0?1:-1);m==1&&b>S?S=b:m!=1&&b>T&&(T=b);$&&(a="?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+H.x*m+"."+Math.ceil(H.y*m*$a)+"."+e.o()+"."+e.j()+"."+c+".0."+(m==1?e.e():(e.e()+1)*m)+"."+(m==1?S:T*-1)+"."+a+"."+wa+"."+xa+"&ptif="+A+"&v=1.3&ts="+(new Date).getTime(),
xa=wa=0,v.c(W,a,{b:1E3}),window.setTimeout(function(){var a=v.f(W);a&&(B.i(Ca+a),v.c(W,"",{b:""}))},1E3))}}}});var sa=pa,ia,ya=0;d(l,"scroll",function(){var a=(new Date).getTime();ia=a;ya=ia-sa;if(!(ya<1E3)){var b="";i.k();if(i.a("to_flag")==1||!i.v())if(i.a("to_flag")==1||+a-+i.a("sact")>+na){ga("pn");return}else if(i.H(s,a)){ga("pv");return}else b=1E3;else if(b=a-U-ea*G,b<0||b>G*1.5)b=G;V=i.t(w);U=aa=a;y=i.a("pvn");if($)clearInterval(window._pt_hb_interval),window._pt_hb_interval=setInterval(function(){r()},
G),ea=0;i.m();a=e.p();m||(m=l.orientation==Y||l.orientation==0?1:-1);m==1&&a>S?S=a:m!=1&&a>T&&(T=a);e.e()<=1||p.body.clientHeight>0&&e.e()+e.B()+1>=p.body.clientHeight||$&&B.i(Pa+("?id="+q+"."+u+"."+s+"."+w+"."+L+"&stat="+(m==1?e.e():(e.e()+1)*m)+"."+(m==1?S:T*-1)+"."+(e.j()>1500?1500:e.j())+"."+b+"&ptif="+A))}sa=ia});window._pt_hb_interval=setInterval(function(){r()},G);return!1}})()}}})();
