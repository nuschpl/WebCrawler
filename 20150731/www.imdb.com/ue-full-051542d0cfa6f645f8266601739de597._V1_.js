(function(c,f){c.ue=c.ue||{};function b(h,j,g){var i="; expires="+new Date(+new Date+g).toGMTString();f.cookie=h+"="+j+i+"; path=/"}function a(h){if(f.cookie&&f.cookie.split){var l=document.cookie.split(";"),g,m,k=new RegExp("^\\s*"+h+"=");for(var j=0;j<l.length;j++){g=l[j];if(k.test(g)){m=g.split("=");if(m&&m.length==2){return m[1]}}}}return null}function e(g){b(g,"",-1)}var d={set:b,get:a,del:e};c.ue.ch=d})(ue_csm,document);(function(d){var m=d.ue||{},j="csm-sid",h="0123456789",i="0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ";function f(o){var p=/^\d{3}-\d{7}-\d{7}$/;return p.test(o)}function n(o){var p=Math.floor(Math.random()*o.length);return o.charAt(p)}function c(r,o){var q="";for(var p=0;p<o;p++){q=q+n(r)}return q}function g(){return c(i,20)}function l(){var o=c(h,18);return o.substring(0,3)+"-"+o.substring(4,11)+"-"+o.substring(11,18)}function e(){if(d.ue&&d.ue.ch){var o=d.ue.ch.get(j);if(f(o)){return o}}return 0}function k(o){if(!f(o)){return 0}if(d.ue&&d.ue.ch){d.ue.ch.set(j,o,2366769449);return 1}}var b={newRID:g,newSID:l,getSID:e,setSID:k};m.id=d.ue_id?d.ue_id:b.newRID();m.rid=m.id;m.mid=d.ue_mid||"mkt=aiwnacsm";m.furl=d.ue_furl||"fls-na.amazon.com";m.sn=(d.ue_sn)||(window.location?window.location.hostname:"");var a=d.ue_sid||b.getSID();if(!a){a=b.newSID();b.setSID(a)}m.sid=a;m.identifier=b;d.ue=m})(ue_csm);(function(g){var b=g.ue||{},c=["latency","forester","jserrors"],h=0,f=function(){},e={};function a(){var j;if(b.q){for(var k=0;k<b.q.length;k++){j=b.q[k];if(j.n&&e[j.n]&&e[j.n].call){e[j.n].call(this,j.t,j.a)}}}f()}function d(k,i){var j=f;f=function(){j();i()};h++;if(h==c.length){a()}}b.implementations=e;b.register=d;g.ue=b})(ue_csm);(function(e,j){var k=e.ue||{};e.ueinit=(e.ueinit||0)+1;if(!k.id){k.id=e.ue_id?e.ue_id:k.identifier.newRID()}k.url=e.ue_url?e.ue_url:("/uedata/"+k.sid+"/");k.a="";k.b="";k.h={};k.r={ld:0,oe:0,ul:0};k.s=1;k.t={};k.sc={};k.iel=[];k.ielf=[];k.fc_idx={};k.viz=[];k.v="a02";k.ifr=((j.top!==j.self)||(j.frameElement))?1:0;var b=(function(){var l={},m=[];return{tag:function(n,p){if(k.tag.delta>=0){k.tag.delta=-1}var o;if(typeof p=="undefined"){o=m}else{l[p]=l[p]||[];o=l[p]}o.push(n)},consume:function(o){var n;if(typeof o=="undefined"){n=m;m=[]}else{n=l[o]||[];l[o]=[]}return n}}})();function d(m,n,o){if(d.delta>=0){d.delta=-1}var p,l;if(m){p=l=e.ue;if(n&&n!=p.id){l=p.sc[n];if(!l){l={};o?(p.sc[n]=l):l}}p=o?(l[m]=o):l[m]}return p}function c(n,q,s,p){if(c.delta>=0){p=p||k.t0+c.delta;c.delta=-1}var r=p||(new Date()).getTime();var l=!q&&typeof s!="undefined";if(l){return}if(n){var o=q?d("t",q)||d("t",q,{}):e.ue.t;o[n]=r;for(var m in s){d(m,q,s[m])}}return r}function i(p,q,o,m,l){var n="on"+o;var r=q[n];if(typeof(r)=="function"){if(p){e.ue.h[p]=r}}else{r=function(){}}q[n]=l?function(s){m(s);r(s)}:function(s){r(s);m(s)};q[n].isUeh=1}function a(v,o,u){var r;if(a.delta>=0){r=k.t0+a.delta;a.delta=-1}function n(T,R){var P=[T],K=0,Q={};if(R){P.push("m=1");Q[R]=1}else{Q=e.ue.sc}var I;for(var J in Q){var L=d("wb",J),O=d("t",J)||{},N=d("t0",J)||e.ue.t0;if(R||L==2){var S=L?K++:"";P.push("sc"+S+"="+J);for(var M in O){if(M.length<=3&&O[M]){P.push(M+S+"="+(O[M]-N))}}P.push("t"+S+"="+O[v]);if(d("ctb",J)||d("wb",J)){I=1}}}if(!p&&I){P.push("ctb=1")}return P.join("&")}function z(K,J,M,I){if(K==""){return}var L=new Image();if(e.ue.b){L.onload=function(){if(e.ue.b==""){return}var O=e.ue.b;e.ue.b="";z(O,J,M,1)}}var N=!e.ue.log||(!I&&!M);N=N&&e.ue_uselegacy;if(N){e.ue.iel.push(L);L.src=K}if(e.ue.log){e.ue.log(K,"uedata",{n:1});e.ue.ielf.push(K)}if(e.ue_err&&!e.ue_err.ts){e.ue_err.startTimer()}}function F(I){if(!k.collected){var K=I.timing;if(K){e.ue.t.na_=K.navigationStart;e.ue.t.ul_=K.unloadEventStart;e.ue.t._ul=K.unloadEventEnd;e.ue.t.rd_=K.redirectStart;e.ue.t._rd=K.redirectEnd;e.ue.t.fe_=K.fetchStart;e.ue.t.lk_=K.domainLookupStart;e.ue.t._lk=K.domainLookupEnd;e.ue.t.co_=K.connectStart;e.ue.t._co=K.connectEnd;e.ue.t.sc_=K.secureConnectionStart;e.ue.t.rq_=K.requestStart;e.ue.t.rs_=K.responseStart;e.ue.t._rs=K.responseEnd;e.ue.t.dl_=K.domLoading;e.ue.t.di_=K.domInteractive;e.ue.t.de_=K.domContentLoadedEventStart;e.ue.t._de=K.domContentLoadedEventEnd;e.ue.t._dc=K.domComplete;e.ue.t.ld_=K.loadEventStart;e.ue.t._ld=K.loadEventEnd}var J=I.navigation;if(J){e.ue.t.ty=J.type+e.ue.t0;e.ue.t.rc=J.redirectCount+e.ue.t0;if(e.ue.tag){e.ue.tag(J.redirectCount?"redirect":"nonredirect",k.main_scope)}}e.ue.collected=1}}var H=!o&&typeof u!="undefined";if(H){return}for(var l in u){d(l,o,u[l])}c("pc",o,u);var B=d("id",o)||e.ue.id;var q=!o||(o==B);var s=e.ue.url+"?"+v+"&v="+e.ue.v+"&id="+B;var p=d("ctb",o)||d("wb",o);if(p){s+="&ctb="+p}if(e.ueinit>1){s+="&ic="+e.ueinit}var E=j.performance||j.webkitPerformance;var C=e.ue.bfini;var t=E&&E.navigation&&E.navigation.type==2;if(C&&C>1){s+="&bft="+(C-1);s+="&bfform=1"}else{if(t){s+="&bft=1"}}if(t){s+="&bfnt=1"}if(e.ue._fi&&v=="at"&&(!o||o==B)){s+=e.ue._fi()}var m;if((v=="ld"||v=="ul")&&(!o||o==B)){if(v=="ld"){if(j.onbeforeunload&&j.onbeforeunload.isUeh){j.onbeforeunload=null}if(document.ue_backdetect&&document.ue_backdetect.ue_back){document.ue_backdetect.ue_back.value++}if(e._uess){m=e._uess()}}if(E&&E.timing){d("ctb",B,"1");e.ue.t.tc=E.timing.navigationStart}if(E){F(E)}if(e.ue_hob&&e.ue_hoe){e.ue.t.hob=e.ue_hob;e.ue.t.hoe=e.ue_hoe}if(e.ue.ifr){s+="&ifr=1"}}c(v,o,u,r);var A=(v=="ld"&&o&&d("wb",o));if(A){d("wb",o,2)}var D=1;for(var x in e.ue.sc){if(d("wb",x)==1){D=0;break}}if(A){s=n(s,null)}else{if(D){var G=n(s,null);if(G!=s){e.ue.b=G}}if(m){s+=m}s=n(s,o||e.ue.id)}if(e.ue.b||A){for(var x in e.ue.sc){if(d("wb",x)==2){delete e.ue.sc[x]}}}var w=0;if(!A){e.ue.s=0;if(e.ue_err&&e.ue_err.ec>0){s+="&ec="+e.ue_err.ec}w=d("ctb",o);d("t",o,{})}if(s){var y=[b.consume().join("|"),b.consume(o).join("|"),(q?b.consume(k.main_scope).join("|"):"")];if(y){s+="&csmtags="+y.join("|")}}if(s&&e.ue_pageviz&&e.ue.viz.length>0){s+="&viz="+e.ue.viz.join("|");e.ue.viz=[]}e.ue.a=s;z(s,v,w,A)}function h(){var n=e.ue.r;function m(q){return function(){if(!n[q]){n[q]=1;a(q)}}}e.onLd=m("ld");e.onLdEnd=m("ld");var l={beforeunload:m("ul"),stop:function(){a("os")}};for(var o in l){i(0,window,o,l[o])}if(e.ue_pageviz){ue_viz&&ue_viz()}e.ue._uep=function(){new Image().src=(e.ue_md?e.ue_md:"http://uedata.amazon.com/uedata/?tp=")+(+new Date)};if(e.ue_pr&&(e.ue_pr==2||e.ue_pr==4)){e.ue._uep()}}function f(n,m){var l;if(f.delta>=0){l=k.t0+f.delta;f.delta=-1}if(!n){return}e.ue_cel&&e.ue_cel.reset();e.ue.t0=l||+new Date();e.ue.rid=n;e.ue.id=n;e.ue.fc_idx={};e.ue.viz=[]}function g(){e.ues=d;e.uet=c;e.uex=a;e.ue.reset=f}k.implementations.ues=function(m,l){d.delta=m;d.apply(this,l)};k.implementations.uet=function(m,l){c.delta=m;c.apply(this,l)};k.implementations.uex=function(m,l){a.delta=m;a.apply(this,l)};k.implementations.tag=function(m,l){k.tag.delta=m;k.tag.apply(this,l)};k.implementations.rst=function(m,l){f.delta=m;f.apply(this,l)};k.tag=b.tag;k.register("latency",g);h()})(ue_csm,window);(function(d){var a={ec:0,ecf:0,pec:0,ts:0,erl:[],ter:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){if(d.ue&&(a.pec<a.ec)){d.uex("at")}a.pec=a.ec},10000)}};var c=d.ue_jserr_ns||"jserr",j="v1",m="FATAL",h=20,p=256,n=/\(?([^\s]*):(\d+):\d+\)?/,e=/.*@(.*):(\d*)/;function o(q){if(q){return q.replace(/^\s+|\s+$/g,"")}}function g(q){if(!q||!q.s){return}var r,s=q.s.length>0?q.s[0]:"",t=q.s.length>1?q.s[1]:"";if(s){r=s.match(e)}if((!r||r.length!=3)&&t){r=t.match(n)}if(r&&r.length==3){q.f=r[1];q.l=r[2]}}function f(s,y){if(!s){return{}}if(s.m&&s.m.message){s=s.m}var t={m:(y.m||y.message||"")+((s.m&&s.m.message)||s.m||s.message||"Unknown error"),f:(s.f||s.sourceURL||s.fileName||s.filename||(s.m&&s.m.target&&s.m.target.src)),l:(s.l||s.line||s.lineno||s.lineNumber),c:s.c?""+s.c:s.c,s:[],name:s.name,type:s.type,csm:j+" "+(s.fromOnError?"onerror":"ueLogError")},x,w,r,A,u=0,v=0,q,z;x=s.stack||(s.err?s.err.stack:"");t.pageURL=y.pageURL||(""+(window.location?window.location.href:""))||"missing";t.logLevel=y.logLevel||m;z=y.attribution;if(z){t.attribution=""+z}if(x&&x.split){t.csm+=" stack";w=x.split("\n");while(u<x.length&&t.s.length<h){r=w[u++];if(r){t.s.push(o(r))}}}else{t.csm+=" callee";A=b(s.args||arguments,"callee");u=0;v=0;while(A&&u<h){q=p;if(!A.skipTrace){r=A.toString();if(r&&r.substr){q=(v===0?4*p:q);q=(v==1?2*p:q);t.s.push(r.substr(0,q));v++}}A=b(A,"caller");u++}}if(!t.f&&t.s.length>0){g(t)}return t}function b(s,q){try{return s[q]}catch(r){return}}function l(r,q,s){if(!r){return}d.ue.log(f(r,q),c,{d:s})}function i(s,r){if((!s)||(d.ue_err.ec>d.ue_err.mxe)){return}d.ue_err.ec++;d.ue_err.ter.push(s);r=r||{};var q=s.logLevel||r.logLevel;r.logLevel=q;r.attribution=s.attribution||r.attribution;if(!q||(q==m)){a.ecf++}if(i.delta>=0){l(s,r,i.delta);i.delta=-1}else{l(s,r)}}l.skipTrace=1;f.skipTrace=1;i.skipTrace=1;function k(){d.ueLogError=i}ue.implementations.err=function(r,q){i.delta=r;i.apply(this,q)};ue.register("jserrors",k);d.ue_err=a})(ue_csm);(function(o,G){var f;f={};(function(){function X(ad){return ad<10?"0"+ad:ad}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(ad){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+X(this.getUTCMonth()+1)+"-"+X(this.getUTCDate())+"T"+X(this.getUTCHours())+":"+X(this.getUTCMinutes())+":"+X(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(ad){return this.valueOf()}}var i=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,ab=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,aa,w,ac={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Z;function e(ad){ab.lastIndex=0;return ab.test(ad)?'"'+ad.replace(ab,function(ae){var af=ac[ae];return typeof af==="string"?af:"\\u"+("0000"+ae.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+ad+'"'}function Y(ak,al){var af,ae,aj,ag,ah=aa,ad,ai=al[ak];if(ai&&typeof ai==="object"&&typeof ai.toJSON==="function"){ai=ai.toJSON(ak)}if(typeof Z==="function"){ai=Z.call(al,ak,ai)}switch(typeof ai){case"string":return e(ai);case"number":return isFinite(ai)?String(ai):"null";case"boolean":case"null":return String(ai);case"object":if(!ai){return"null"}aa+=w;ad=[];if(Object.prototype.toString.apply(ai)==="[object Array]"){ag=ai.length;for(af=0;af<ag;af+=1){ad[af]=Y(af,ai)||"null"}aj=ad.length===0?"[]":aa?"[\n"+aa+ad.join(",\n"+aa)+"\n"+ah+"]":"["+ad.join(",")+"]";aa=ah;return aj}if(Z&&typeof Z==="object"){ag=Z.length;for(af=0;af<ag;af+=1){if(typeof Z[af]==="string"){ae=Z[af];aj=Y(ae,ai);if(aj){ad.push(e(ae)+(aa?": ":":")+aj)}}}}else{for(ae in ai){if(Object.prototype.hasOwnProperty.call(ai,ae)){aj=Y(ae,ai);if(aj){ad.push(e(ae)+(aa?": ":":")+aj)}}}}aj=ad.length===0?"{}":aa?"{\n"+aa+ad.join(",\n"+aa)+"\n"+ah+"}":"{"+ad.join(",")+"}";aa=ah;return aj}}if(typeof f.stringify!=="function"){f.stringify=function(ag,ad,af){var ae;aa="";w="";if(typeof af==="number"){for(ae=0;ae<af;ae+=1){w+=" "}}else{if(typeof af==="string"){w=af}}Z=ad;if(ad&&typeof ad!=="function"&&(typeof ad!=="object"||typeof ad.length!=="number")){throw new Error("JSON.stringify")}return Y("",{"":ag})}}}());var I=o.ue||{},q=o.ue_log_idx?"2":"1",S="//"+I.furl+"/1/batch/"+q+"/OP/",E="/",R="$",B="&",L="=",O=",",K="_",a=":",Q="%",b=2000,j=60000,z=5,x=1000,y,H,J=0,r=0,s={},g=function(e){return(""+e).length},N=(G.JSON&&G.JSON.stringify)||(f&&f.stringify),u=function(e){return(e&&e.r)||I.rid},M=function(e){return(e&&e.s)||I.sid},m=function(e){return(e&&e.m)||I.mid},c=function(e){return(e&&e.sn)||I.sn||G.ue_sn},D=function(e){return(e&&e.mkt)||I.mkt||G.ue_mkt},h=function(X,w,e){var i;if(e&&e.d){i=e.d}else{if(h.delta>0){i=h.delta;h.delta=-1}else{i=I.d()}}n(X,w,e,i)},n=function(ar,aj,ag,am,an){if(an){ag||(ag={});ag.r||(ag.r=an)}var ae=u(ag)+":"+aj;s[ae]=(s[ae]||0)+1;if(s[ae]>x){var ah="ns '"+aj+"' reached the max no of calls ("+x+") - aborting log of "+ar;if(s[ae]==(x+1)){h({m:ah,f:"forester-client.js"},"jserr",ag)}return}var e=m(ag)+a+M(ag)+a+u(ag),ac=0,ab,af=""+am,ad=ar,aq,aa,al,ak,w="s",Z=typeof ar,i=ag&&ag.n||false,Y,ap,ao,X=c(ag),ai=D(ag);if(X){e+=a+X}if(ai){e+=a+"mkt="+ai}if(Z=="undefined"){ad="";w="u"}else{if(ar==null){ad="";w=null}else{if(Z=="boolean"){ad=ar?"1":"0";w="b"}else{if(Z=="number"&&!isNaN(ar)&&isFinite(ar)){ad=""+ar;w="n"}else{if(Z=="object"){if(N){ad=N(ar);w="j"}else{ad=""+ar}}}}}}ad=G.encodeURIComponent(ad);ao=b-g(e)-g(aj)-g(af)-2;if(w!=null){ao-=(g(w)+2)}while(ad!=""){ac++;Y=v(e,aj,ad,af,w);ap=b-y;if(Y<=ap){aq=ad;aa="";ap-=Y;y+=Y}else{if(g(ad)<=ao){A();continue}else{al=ap-(Y-g(ad));if(z<=al){al-=ad.charAt(al-1)==Q?1:ad.charAt(al-2)==Q?2:0;aq=ad.substr(0,al);aa=ad.substr(al);ap=0;y=b;ab||(ab=1+Math.ceil(g(aa)/ao))}else{if(b-(Y-g(ad))<z){return}A();continue}}}H[e]||(H[e]=[]);if(o.ue_log_idx){I.ue_idx=I.ue_idx||{};I.ue_idx[aj]=I.ue_idx[aj]||0;ak=I.ue_idx[aj]+a+(w!=null?w+a+aq+a+af:af);I.ue_idx[aj]+=1}else{ak=w!=null?w+a+aq+a+af:af}if(ab){ak+=a+ac+K+ab}if(!H[e][aj]){H[e][aj]=ak}else{H[e][aj]+=O+ak}if(ap==0||i){A()}ad=aa}J++},v=function(Z,w,e,Y,i){var X=g(Y);if(i!=null){X+=g(i)+g(e)+2}if(!H[Z]){X+=g(Z)+g(w)+2;if(H.length>0){X++}}else{if(!H[Z][w]){X+=g(w)+1;if(H[Z].length>0){X++}}else{X++}}return X},T=function(){y=0;H=[]},t=function(){if(y==0){return}var Y="",w,X,i,e;for(i in H){if(H.hasOwnProperty(i)){if(Y!=""){Y+=E}Y+=i+R;w=H[i];X=true;for(e in w){if(w.hasOwnProperty(e)){if(!X){Y+=B}X=false;Y+=e+L+w[e]}}}}I.w=Y;return S+Y},P=function(e){var i=t();if(!i){return}new Image().src=i;r++;T()},l=function(e){var w=t(),i;if(!w){return}if(I.getWindowProtocol){w=I.getWindowProtocol()+w}if(e){new Image().src=w}else{if(F&&C){p.push(w);if(p.length==1){F.open("GET",w,true);F.send()}}else{new Image().src=w}}r++;T()},A=P,p=[],k=G.onbeforeunload,C=0,F;S="//"+I.furl+"/1/batch/"+q+"/OP/";A=l;if(window.XMLHttpRequest){F=new XMLHttpRequest();C=("withCredentials" in F)?1:0}else{if(window.ActiveXObject&&window.XDomainRequest){var V=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];for(var U=0;U<V.length;U++){try{F=new ActiveXObject(V[U]);C=1}catch(W){continue}break}}}if(F){F.onreadystatechange=function(){if(F.readyState==4){p.shift();if(p.length>0){var e=p[0];F.open("GET",e,true);F.send()}}}}G.onbeforeunload=function(i){if(k){k(i)}A(1)};I.intervals=[];I.intervals.push(G.setInterval(function(){A()},j));T();function d(){I.log=h;I.strigify=N}I.implementations.log=function(i,e){h.delta=i;h.apply(this,e)};I.register("forester",d);G.amznJQ&&G.amznJQ.declareAvailable("forester-client");o.ue=I})(ue_csm,window);