(function(){var L=(function(){var n=document,l=encodeURIComponent,j=decodeURIComponent;function o(a){var c=new RegExp(a+'=(.[^;]+)','i'),b=null;if(n.cookie.length>0){b=n.cookie.match(c);if(b&&b.length==2){return j(b[1])}}}function p(a,c,b,d,f,h){var g=[a+"="+l(c)];if(b){g.push("expires="+b.toUTCString())}if(d){g.push("path="+d)}if(f){g.push("domain="+f)}if(h){g.push("secure")}n.cookie=g.join("; ")}function k(a,c,b){return p(a,"deleted",new Date("Thu, 01 Jan 1970 00:00:00 GMT"),c,b)}return{_o:o,_p:k,_f:p}})();var i=(function(){var l=document,j=window,o=encodeURIComponent,p=decodeURIComponent;function k(a){return!!a&&(a instanceof Function||(typeof a=="object"&&!(a instanceof Object)))?true:false}function z(a,c,b){if(a.addEventListener){a.addEventListener(c,b,false);return true}if(a.attachEvent){return a.attachEvent("on"+c,b)}return false}function v(a,c){var b;if(l.createEvent){b=l.createEvent("HTMLEvents");b.initEvent(c,true,true);return!a.dispatchEvent(b)}if(l.createEventObject){b=l.createEventObject();return a.fireEvent("on"+c,b)}return false}function m(a){if(!j){return}if(l.readyState=='complete'){a();return}z(j,"load",a)}function B(a,c){var b=l.createElement(a);for(var d in c){b[d]=c[d]}return b}function s(a){var c=l.getElementsByTagName('script'),b=null,d=null,f=0,h=new RegExp("(.+)/"+a,"i");for(var g=0,n=c.length;g<n;g++){d=c[g].src.match(h);if(d!=null&&d.length==2){b=d[1];f++}}if(f==1){return b}return false}function u(a){if(typeof(a)=="string"){return a}var c=[];for(var b in a){c.push(b+"="+o(a[b]))}return c.join("&")}function w(a){var c={},b=(a||"").split("&"),d;for(var f=0,h=b.length;f<h;f++){d=b[f].split("=");if(d.length==2){c[d[0]]=p(d[1])}}return c}function x(a){var c='abcdefghiklmnopqrstuvwxyz_'.split(''),b=c.length,d=Math.random,f=Math.floor,h=new Array(a);for(var g=0;g<a;g++){h.push(c[f(d()*b)])}return h.join("")}function r(a,c,b){a=a.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var d="[\\?&]"+a+"=([^&#]*)",f=new RegExp(d),h=f.exec(c);return(h==null)?b:h[1]}function t(a){var c=a.lastIndexOf("/"),b=a.substr(1,c-1),d=a.substring(c+1);return new RegExp(b,d)}function A(a){if(a.charAt(0)=='/'){return"/"}else{a=a.match(/^https?:\/\/[^\/]*\//)[0];return a}}function y(a,c){for(var b=0,d=c.length;b<d;b++){regex=t(c[b]);if(regex.test(a)){return true}}return false}return{_3:k,_9:z,_q:v,_a:m,_r:B,_b:s,_0:u,_g:w,_c:x,_s:r,_t:t,_h:y,_i:A}})();var C=(function(){var j=document,o=window,p={},k=i._b("I3n.js"),z=[k,"ghb3.html"].join("/"),v="4b4f26339068126";function m(a,c){var b=j.createElement('iframe');b.id="iframe"+Math.round((Math.random()*999));b.style.width="0";b.style.height="0";b.style.border="none";b.frameBorder="0";b.src="javascript: false;";j.getElementsByTagName('body')[0].appendChild(b);b.contentWindow.name=i._0(c);setTimeout(function(){b.contentWindow.location.replace(a)},25);return b.id}function B(a,c){var b=j.getElementById(a),d=null;try{d=b.contentWindow.location;if(b&&b.contentWindow&&d!="about:blank"&&d.hash.indexOf("#")==0&&b.contentWindow.name&&d.protocol!="javascript:"){o.clearInterval(p[a]);c.apply(this,[i._g(b.contentWindow.name)])}}catch(e){}}function s(a,c,b,d){var f=[a,i._0(c)].join("?"),h=m(f,d);p[h]=o.setInterval(function(){B(h,b)},200)}function u(a,c,b,d){var f=j.createElement("iframe");f.style.display="none";f.src="javascript: false;";f.width=0;f.height=0;f.style.border="none";j.body.appendChild(f);f.contentWindow.name=i._0(d);i._9(f,"load",function(){try{b(f.contentWindow.document.documentElement.innerHTML)}catch(e){}});f.contentWindow.location.replace([a,i._0(c)].join("?"))}function w(){try{return new XMLHttpRequest()}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}return null}function x(a,c,b,d){var f=[a,c].join("?"),h,g=w(),n="GET",l={};if(d){n="POST";l["Content-Type"]="application/x-www-form-urlencoded"}g.open(n,f,true);for(h in l){g.setRequestHeader(h,l[h])}g.onreadystatechange=function(){if(g.readyState==4&&g.status==200){b(g.responseText)}};g.send(i._0(d))}function r(c,b,d,f){var h,g,n="XMLHttpRequest";if(d){b+="&c="+d}h=[c,b].join("?");if(o[n]&&(g=new o[n]()).withCredentials!==undefined){g.open("GET",h,true);g.withCredentials=true;g.onreadystatechange=function(a){if(g.readyState==4&&(g.status==200||g.status==0)){try{new Function(g.responseText)()}catch(a){}}};g.send()}else{setTimeout(function(){t(c,b)},0)}}function t(a,c,b){var d=j.createElement('script');d.type="text/javascript";d.async=true;if(b){c+="&c="+b}d.src=[a,c].join("?");j.getElementsByTagName('head')[0].appendChild(d)}function A(a,c,b,d){var f={qp:i._0(c),pd:i._0(d),u:a};s(z,{},b,f)}function y(a,c,b){var d=new Image();if(i._3(b)){i._9(d,"load",b)}d.src=[a,c].join("?");d.style.display="none";d.width=0;d.height=0;d.style.border="none";j.body.appendChild(d)}function E(a,c,b,d,f,h){if(!a){return}b=i._0(b);if(!b.match(/dn=(.[^&]+)/)){b+="&dn="+encodeURIComponent(v)}if(h&&h.qs&&!h.qs==""){b+="&"+h.qs}switch(a){case"image":{y(c,b,d);break}case"iframe":{u(c,b,d,f);break}case"xframe":{s(c,b,d,f);break}case"jsonp":{t(c,b,d);break}case"ajax":{x(c,b,d,f);break}case"xpost":{A(c,b,d,f);break}case"jsonpi":{r(c,b,d,f);break}default:{break}}}return{_u:u,_v:s,_w:t,_x:y,_y:x,_4:E}})();var F={};F._z=function(a){if(!(typeof(a)=="string")){return null}try{return(new Function("return "+a))()}catch(e){return null}};F._j=function(a){var c=typeof(a);if(c!="object"||a===null){return c=="string"?'"'+a.replace(/\"/g,'\\"')+'"':String(a).replace(/\"/g,'\\"')}else{var b,d,f=[],h=a&&c=="object"&&(a instanceof Array);for(b in a){d=a[b];c=typeof(d);d=(c=="string")?'"'+d.replace(/\"/g,'\\"')+'"':(c=="object"&&d!=null?F._j(d):d);f.push((h?"":'"'+b+'":')+String(d))}return(h?"[":"{")+String(f)+(h?"]":"}")}};var q={_k:0,_A:1,_5:2,_6:3,_7:4};var M=function(a){return{_l:a||false,_1:q._k}};var G=(function(){var k=window,z=document,v=(k.location.protocol=='https:'?'https:':'http'),m=[],B=Math.floor(Math.random()*9999999),s=null,u=null,w=2000,x=200,r=i._b("I3n.js"),t="b0I",A=[r,"g8C"].join("/"),y=[r,"uX3"].join("/"),E=[r,"ihg"].join("/"),bb="v8.15.1",v=(k.location.protocol!='https:'?'http:':'https:'),N=k.location.host,D=0,I="___hst30306",H={"name":"___tk30306","domain":"bankofamerica.com"},O=["\/login\\\/sign-in\\\/signOnScreen\\.go\/"],J="";function P(a){m.push(a)}function Q(){return r}function R(){clearInterval(s)}function S(a,c,b,d,f,h){var g=(c)?i._i(r):r;if(c){g+=c}else{g+="/"+t}if(b){g+=b}if(typeof d=="string"){d+="&ci="+D}else{d["ci"]=D}C._4(a,g,d,f,h)}function T(a,c,b,d){c["ci"]=D;C._4(a,A,c,b,d)}function K(f){var h,g,n=[],l=[],j=i._c(16),f=f||{};k[j]=function(a,c){for(var b=0,d=m.length;b<d;b++){h=m[b];if(i._3(h._d)){h._d.apply(this,[c,a])}}U(c,a);k[j]=null};for(var o=0,p=m.length;o<p;o++){n.push(m[o]._e);g=m[o]._2._1;if(g==q._5||g==q._7||g==q._6){l.push(m[o]._e)}}if(l.length==n.length){clearTimeout(u)}f["cids"]=n.sort().join(",");f["dcids"]=l.sort().join(",");f["e"]=v+"//"+N;f["ci"]=D;C._4("jsonp",y,f,j)}function V(a,c){C._4("image",E,a,c)}function W(){clearInterval(s);K({to:1})}function X(){if(H.name){k[I]=true;L._f(H.name,Math.random(),null,"/",H.domain)}}function Y(){var a,c;for(a=0,c=m.length;a<c;a++){i._a(m[a]._8)}s=setInterval(Z,x);if(w>0){u=setTimeout(W,w)}}function Z(){var a=false,c=0,b=m.length;for(var d=0;d<b;d++){if(m[d]._2._1==q._5){m[d]._2._1=q._6;a=a||m[d]._2._l}if(m[d]._2._1==q._7){c++}}if(c>=b){R()}if(a){K({to:0})}}function U(a,c){if(i._3(k[J])){k[J].apply(this,[a,c])}}if(k&&!k[I]&&i._h(k.location.pathname,O)){X()}return{_8:Y,_m:P,_B:S,_n:T,_C:V,_D:Q}})();var ba=(function(){var f="4",h=window,g=M(false),n="get_SessionIdString",l=0;function j(){}function o(){var a={cid:f},c=n.split("."),b=p(h,c,0),d=i._c(16);if(b&&i._3(b)){a["s"]=b();h[d]=function(){g._1=q._5};G._n("jsonpi",a,d)}else{g._1=q._5}}function p(a,c,b){if(b==(c.length-1)){return a[c[b]]}return!!a[c[b]]&&p(a[c[b]],c,b+1)}function k(a,c){if(g._1==q._6){g._1=q._7}}o();return{_e:f,_8:j,_d:k,_2:g}})();G._m(ba);i._a(G._8)})();