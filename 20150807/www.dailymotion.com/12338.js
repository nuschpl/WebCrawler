var rp_account_config={rp_feature_set:{}};var RubiconAdServing=RubiconAdServing||{};RubiconAdServing.AdSizes={1:{dim:"468x60"},2:{dim:"728x90"},3:{dim:"234x60"},4:{dim:"88x31"},5:{dim:"120x90"},6:{dim:"120x60"},7:{dim:"125x125"},8:{dim:"120x600"},9:{dim:"160x600"},10:{dim:"300x600"},11:{dim:"180x150"},12:{dim:"120x240"},13:{dim:"200x200"},14:{dim:"250x250"},15:{dim:"300x250"},16:{dim:"336x280"},17:{dim:"240x400"},18:{dim:"180x150"},19:{dim:"300x100"},20:{dim:"0x0"},21:{dim:"0x0"},22:{dim:"0x0"},23:{dim:"120x90"},24:{dim:"160x90"},25:{dim:"180x90"},26:{dim:"200x90"},27:{dim:"468x15"},28:{dim:"728x15"},29:{dim:"300x850"},30:{dim:"1x1"},31:{dim:"980x120"},32:{dim:"250x360"},33:{dim:"180x500"},34:{dim:"580x400"},35:{dim:"980x150"},36:{dim:"140x350"},37:{dim:"468x400"},38:{dim:"930x180"},39:{dim:"750x100"},40:{dim:"750x200"},41:{dim:"750x300"},42:{dim:"2x4"},43:{dim:"320x50"},44:{dim:"300x50"},45:{dim:"480x75"},46:{dim:"480x60"},47:{dim:"240x37"},48:{dim:"300x300"},49:{dim:"336x280"},50:{dim:"1024x90"},51:{dim:"768x90"},52:{dim:"1004x768"},53:{dim:"1024x768",interstitial:true},54:{dim:"300x1050"},55:{dim:"970x90"},56:{dim:"900x250"},57:{dim:"970x250"},58:{dim:"1000x90"},59:{dim:"320x80"},60:{dim:"320x150"},61:{dim:"1000x1000"},62:{dim:"980x50"},63:{dim:"1000x40"},64:{dim:"580x500"},65:{dim:"640x480"},66:{dim:"930x600"},67:{dim:"320x480",interstitial:true},68:{dim:"1800x1000"},69:{dim:"480x400"},70:{dim:"1100x210"},71:{dim:"852x210"},72:{dim:"320x320"},73:{dim:"320x160"},74:{dim:"1250x240"},75:{dim:"1250x250"},76:{dim:"265x720"},77:{dim:"265x600"},78:{dim:"980x240"},79:{dim:"980x300"},80:{dim:"980x400"},81:{dim:"450x150"},82:{dim:"300x75"},83:{dim:"480x300"},84:{dim:"320x480"},85:{dim:"300x120"},86:{dim:"300x250"},87:{dim:"950x90"},88:{dim:"300x600"},89:{dim:"300x1200"},90:{dim:"548x150"},91:{dim:"300x250"},92:{dim:"728x90"},93:{dim:"160x600"},94:{dim:"970x310"},95:{dim:"970x100"},96:{dim:"970x210"},97:{dim:"467x120"},98:{dim:"1000x120"},99:{dim:"300x250"},100:{dim:"300x250"},101:{dim:"480x320",interstitial:true},102:{dim:"768x1024",interstitial:true},103:{dim:"480x280"},104:{dim:"1250x360"},105:{dim:"250x800"},106:{dim:"300x480"},107:{dim:"440x220"},108:{dim:"320x240"},109:{dim:"468x120"},110:{dim:"994x66"},111:{dim:"1250x480"},112:{dim:"1366x40"},113:{dim:"1000x300"},114:{dim:"505x500"},115:{dim:"480x150"},116:{dim:"950x250"},117:{dim:"320x100"},118:{dim:"160x410"},119:{dim:"256x600"},120:{dim:"994x250"},121:{dim:"1280x800",interstitial:true},122:{dim:"800x1280",interstitial:true},123:{dim:"650x110"},124:{dim:"640x150"},125:{dim:"800x250"}};var RubiconAdServing=RubiconAdServing||{};RubiconAdServing.Creatives=function(){RubiconAdServing.creatives=RubiconAdServing.creatives||{};this.setAd=function(a,b){if(a&&b){RubiconAdServing.creatives[a]=b}};this.getAd=function(a){if(a){return RubiconAdServing.creatives[a]}return null};this.getAdBySlot=function(a){return this.getAd(a)};this.getAdByZone=function(d,b,a){var c=d+"/"+b+"/"+a;return this.getAd(c)};this.renderAdBySlot=function(a){var b=this.getAd(a);if(b&&b.status=="ok"&&b.script){document.write("<script>"+b.script+"<\/script>")}};this.renderAdByZone=function(e,b,a){var c=e+"/"+b+"/"+a;var d=this.getAd(c);if(d&&d.status=="ok"&&d.script){document.write("<script>"+d.script+"<\/script>")}}};RubiconAdServing.Requests=function(){RubiconAdServing.requests=RubiconAdServing.requests||{};this.addRequest=function(a,b){RubiconAdServing.requests[a]=b};this.getRequest=function(a){return RubiconAdServing.requests[a]};this.sendRequest=function(b){var c=this.getRequest(b);var a;if(!c||!c.slot){return}if(!c.context.rp_debug){if(c.slot.shouldRouteToRFM()){a='<div id="'+c.context.rp_div_id+'"><script type="text/javascript" src="'+c.url+'"><\/script></div>'}else{if(c.context.rp_adtype=="iframe"){a='<iframe frameborder="0" allowtransparency="true" hspace="0"  vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="'+c.context.rp_width+'px" height="'+c.context.rp_height+'px" src="'+c.url+'"></iframe>'}else{a='<script type="text/javascript" src="'+c.url+'"><\/script>'}}document.write(a)}else{document.write(c.url)}}};RubiconAdServing.RubiconAd=function(){this.config={server:"revv",host:"optimized-by.rubiconproject.com",hosts:{revv:{beta:"staged-by.rubiconproject.com",prod:"optimized-by.rubiconproject.com"},rfm:{beta:"mrp.rubiconproject.com",prod:"mrp.rubiconproject.com"}}};this.default_context={rp_env:"prod",rp_adtype:"js",rp_kw:null,rp_gender:null,rp_age:null,rp_age_range:null,rp_age_dob:null,rp_ethnicity:null,rp_xpi:null,rp_page:null,rp_geo:{},rp_aso:{},rp_badvid:[],rp_rtp2:false,rp_feature_set:{visibility:true,expandable:true,local_storage:true,rfm_routing:false,tablet_mapping:false,first_party_data:true,rtp_first_look:false,rtp_data_collection:false,jit_sync:true,jit_sync_android:false,floor_is_rtb_only:true,custom_host:null},rp_dpf:false,rp_navigator:null};this.mergeProperties=function(m,l){if(typeof(m)=="undefined"||!m){return l}var o={};for(var n in l){if(typeof m[n]=="undefined"){m[n]=l[n]}else{if(m[n]!=null&&typeof m[n]=="object"){this.mergeProperties(m[n],l[n])}}}return m};this.init=function(m){try{this.default_context.rp_div_id="rp-"+new Number(Math.floor(Math.random()*1000000)).toString(36);if(m){this.context=this.mergeProperties(m,this.default_context)}else{this.context=this.default_context}this.browser=new f(this.context.rp_navigator||navigator);if(this.context.rp_zonesize){var n=this.context.rp_zonesize.split("-");this.context.rp_zone=n[0];this.context.rp_size_id=n[1]}if(this.context.rp_lat&&!this.isValidLat(this.context.rp_lat)){delete this.context.rp_lat}if(this.context.rp_long&&!this.isValidLong(this.context.rp_long)){delete this.context.rp_long}if(this.context.rp_geo&&this.context.rp_geo.latitude&&!this.isValidLat(this.context.rp_geo.latitude)){delete this.context.rp_geo.latitude}if(this.context.rp_geo&&this.context.rp_geo.longitude&&!this.isValidLong(this.context.rp_geo.longitude)){delete this.context.rp_geo.longitude}if(rp_account_config){this.context=this.mergeProperties(rp_account_config,this.context);if(rp_account_config.site_config){var l=rp_account_config.site_config[this.context.rp_site];if(l){this.context=this.mergeProperties(l,this.context);if(l.zone_config){this.context=this.mergeProperties(l.zone_config[this.context.rp_zone],this.context)}}}if(this.shouldSplitTablet()){if(this.context.tablet_map.site_id&&this.context.tablet_map.zone_id){this.context.rp_site=this.context.tablet_map.site_id;this.context.rp_zone=this.context.tablet_map.zone_id;this.context.rp_zonesize=this.context.rp_zone+"-"+this.context.rp_size_id}}}this.context.rp_rtb_tier=this.context.rp_rtb_tier||this.context.rp_pmp_tier;if(this.context.rp_feature_set.floor_is_rtb_only){this.context.rp_rtb_floor=this.context.rp_floor||this.context.rp_rtb_floor;this.context.rp_floor=null}if(this.shouldRouteToRFM()){this.config.server="rfm"}if(this.context.rp_env){this.config.host=this.config.hosts[this.config.server][this.context.rp_env]||this.config.hosts[this.config.server]["prod"]||this.config.host}if(this.context.rp_rtp2&&this.context.rp_feature_set.custom_host){this.config.host=this.context.rp_feature_set.custom_host}if(this.context.rp_host){this.config.host=this.context.rp_host}}catch(o){}};this.isValidLat=function(l){return(l!=null)&&l>=-90&&l<=90};this.isValidLong=function(l){return(l!=null)&&l>=-180&&l<=180};this.shouldSplitTablet=function(){return(this.context.rp_feature_set.tablet_mapping&&this.browser.detectiPad())};this.shouldRouteToRFM=function(){return(this.context.rp_feature_set.rfm_routing_always||(this.context.rp_feature_set.rfm_routing&&this.browser.detectiPad()&&(this.context.rp_adtype=="js")))};this.start=function(){var B=false;var E;var w=location.href.split(":");var x=w[0]=="https"?"https://":"http://";var r;if(this.context.rp_adtype!="jsonp"){r=x+this.config.host+"/a/$account_id$/$site_id$/$zonesize$.$format$?";r+="$cb$$floor$$rtb_floor$$smart$$referrer$$smartfile$$storagetype$$localstorage$";r+="$keyword$$gender$$age$$agerange$$agedob$$ethnicity$$tracking$$user_key$$fbid$$xpi$";r+="$tg_i$$tg_v$$p_app$$p_device$$p_accept$$p_interstitial$$dpf$$rtb_tier$$aso$$block_keys$";r+="$p_geo$$p_lat$$p_long$$p_screen_res$$slot$$ad_id$$badvid$";if(this.shouldRouteToRFM()){r=x+this.config.host+"/ad_request?$div_id$$app_id$$pub_id$$rand_cb$";r+="$rfm_lat$$rfm_lng$$rfm_ad_size$"}}else{r=x+this.config.host+"/a/api/ads.$format$?enc=url&account_id=$account_id$&site_id=$site_id$&zone_id=$zone_id$&size_id=$size_id$";r+="$cb$$floor$$rtb_floor$$smart$$referrer$$smartfile$$storagetype$$localstorage$";r+="$keyword$$gender$$age$$agerange$$agedob$$ethnicity$$tracking$$user_key$$fbid$$xpi$";r+="$tg_i$$tg_v$$p_app$$p_device$$p_accept$$p_interstitial$$dpf$$rtb_tier$$aso$$block_keys$";r+="$p_geo$$p_lat$$p_long$$p_screen_res$$slot$$ad_id$$badvid$";if(this.context.rp_ae_spoof){r=this.context.rp_ae_spoof}}r+="$digitrust.id$$digitrust.preference$";if(this.context.rp_account&&this.context.rp_site&&this.context.rp_zonesize){r=e("account_id",this.context.rp_account,r);r=e("site_id",this.context.rp_site,r);r=e("zonesize",this.context.rp_zonesize,r);r=e("zone_id",this.context.rp_zone,r);r=e("size_id",this.context.rp_size_id,r)}else{return}r=e("format",(this.context.rp_adtype=="iframe"?"html":this.context.rp_adtype),r);var N=null;try{if(this.context.rp_page&&this.context.rp_page.length>0){N=escape(this.context.rp_page)}else{if(j()){var A=document.referrer;try{if(typeof window.parent.location.href=="string"&&window.parent.location.href.substr(0,4)=="http"){A=top.location.href||A}}catch(m){}if(A&&A.length>0){N=escape(A)}}}}catch(m){B=true}r=d("referrer","rf",N,r);if(!this.context.rp_feature_set.aso_override){this.context.rp_aso={}}if(this.context.rp_feature_set.expandable&&!("exp" in this.context.rp_aso)){this.context.rp_aso.exp=(this.getSupportExpandableAd()?1:null)}if(this.context.rp_feature_set.visibility&&!("pos" in this.context.rp_aso)){this.context.rp_aso.pos=i()}r=this.appendObject("aso","p",this.context.rp_aso,r,"_");r=d("slot","ad_slot",this.context.rp_slot,r);r=d("ad_id","ad_id",this.context.rp_ad,r);r=d("p_screen_res","p_screen_res",g(),r);r=d("cb","cb",Math.random(),r);r=d("keyword","kw",this.context.rp_kw,r);r=d("gender","gender",this.context.rp_gender,r);r=d("age","age",this.context.rp_age,r);r=d("agerange","age_range",this.context.rp_age_range,r);r=d("agedob","age_dob",this.context.rp_age_dob,r);r=d("ethnicity","ethnicity",this.context.rp_ethnicity,r);if(this.context.rp_lat!=null&&this.context.rp_long!=null){r=d("p_lat","p_lat",this.context.rp_lat,r);r=d("p_long","p_long",this.context.rp_long,r)}else{r=d("p_lat","p_lat",null,r);r=d("p_long","p_long",null,r)}r=d("xpi","xpi",this.context.rp_xpi,r);if(this.context.rp_rtb_floor){var Q={standard:1,override:2,priority:3,"private":4};var p=null;if(this.context.rp_rtb_tier&&(this.context.rp_rtb_tier in Q)){p=Q[this.context.rp_rtb_tier]}r=d("rtb_floor","rp_floor",this.context.rp_rtb_floor,r);r=d("rtb_tier","rp_pmp_tier",p,r);r=d("dpf","rp_dpf",(this.context.rp_dpf?"1":null),r)}else{r=d("rtb_floor","rp_floor",null,r);r=d("rtb_tier","rp_pmp_tier",null,r);r=d("dpf","rp_dpf",null,r)}if(this.context.rp_floor){r=d("floor","rp_hard_floor",this.context.rp_floor,r)}else{r=d("floor","rp_hard_floor",null,r)}r=d("block_keys","p_block_keys",this.context.rp_blocks,r);r=d("tracking","tk_code",this.context.rp_tracking,r);r=d("user_key","tk_user_key",this.context.rp_user_key,r);r=d("smart","tk_st",(B?"0":"1"),r);r=d("smartfile","tk_sf",(this.context.rp_smartfile?"1":null),r);if(this.context.rp_feature_set.first_party_data){r=this.appendObject("tg_i","tg_i",this.context.rp_inventory,r);r=this.appendObject("tg_v","tg_v",this.context.rp_visitor,r)}else{r=this.appendObject("tg_i","tg_i",null,r);r=this.appendObject("tg_v","tg_v",null,r)}r=d("div_id","div",this.context.rp_div_id,r,true);r=d("app_id","app",this.context.rp_app_id,r);r=d("pub_id","pub",this.context.rp_publisher_id,r);r=d("rand_cb","id",Number(Math.random()*100000000000000000).toString(36),r);r=d("rfm_lat","lat",this.context.rp_geo.latitude,r);r=d("rfm_lng","lng",this.context.rp_geo.longitude,r);var O;var K=false;if(RubiconAdServing.AdSizes&&this.context.rp_size_id&&RubiconAdServing.AdSizes[this.context.rp_size_id]){O=RubiconAdServing.AdSizes[this.context.rp_size_id].dim;if(O=="0x0"){O=null}K=RubiconAdServing.AdSizes[this.context.rp_size_id].interstitial}r=d("rfm_ad_size","sze",O,r);r=d("fbid","x_fbid",this.context.rp_facebook_device_id,r);r=this.appendObject("p_app","p_app",this.context.rp_app,r);r=this.appendObject("p_device","p_device",this.context.rp_device,r);r=this.appendObject("p_geo","p_geo",this.context.rp_geo,r);r=this.appendObject("p_accept","p_accept",this.context.rp_accept,r);r=d("p_interstitial","p_instl",K?1:null,r);if(this.context.rp_badvid&&b(this.context.rp_badvid)){var C="";var P=false;for(var U=0;U<this.context.rp_badvid.length;U++){P=this.context.rp_badvid[U];if(parseInt(P)==P){C+=P+","}}if(C.length){C=C.substr(0,C.length-1)}r=d("badvid","x_badvid",C,r)}else{r=d("badvid","x_badvid",null,r)}var F=null;var s=null;var M;try{M=typeof(DigiTrust.getIdentitySync)}catch(V){M=false}if(this.context.rp_feature_set.digitrust&&M){var q=DigiTrust.getIdentitySync({member:"rubicon"});if(q&&q.success&&q.identity){var R=q.identity;F=R.id;s=R.privacy.optout?1:0}}r=d("digitrust.id","dt.id",F,r);r=d("digitrust.preference","dt.preference",s,r);if(this.context.rp_feature_set.local_storage&&this.browser.detectSafari()){var l=[];data=RubiconAdServing.getStoredData();if(data&&data.fcaps&&data.fcaps.sizes){var y=data.fcaps.sizes;for(var v in y){if(!y[v].ads){continue}for(var t in y[v].ads){l[l.length]="ls_fcap."+v+"="+t+",0x"+y[v].ads[t].count.toString(16)+",0x"+y[v].ads[t].first_seen.toString(16)+",0x"+y[v].ads[t].last_seen.toString(16)}}}if(data&&data.bucket&&typeof data.bucket==="object"){var T=data.bucket;for(var L in T){if(typeof T[L]!=="object"){continue}for(var z in T[L]){l[l.length]="ls_c."+L+"."+z+"=0x"+T[L][z].value.toString(16)+",0x"+T[L][z].first_set.toString(16)+",0x"+T[L][z].last_set.toString(16)}}}r=r.replace(/\$localstorage\$/,!l.length?"":"&"+l.join("&"),r);r=d("storagetype","rp_s","l",r)}else{r=d("localstorage","localstorage",null,r);r=d("storagetype","rp_s","c",r)}if(this.context.rp_adtype=="jsonp"){var u=this;window.rp_onAdResponseLoaded=function(W){u.onAdResponseLoaded(W)}}if(this.shouldRouteToRFM()){var S=["rp_page","rp_inventory","rp_visitor","rp_gender","rp_age","rp_age_range","rp_age_dob","rp_ethnicity","rp_xpi","rp_kw","rp_tracking","rp_floor","rp_smartfile","rp_geo"];for(var U=0;U<S.length;U++){if(typeof this.context[S[U]]!="undefined"&&this.context[S[U]]!=null){window[S[U]]=this.context[S[U]]}}}var D=new RubiconAdServing.Requests();var n={slot:this,url:r,context:this.context};D.addRequest(this.context.rp_zonesize,n);try{var J=this.context.rp_feature_set.jit_sync&&(this.browser.detectSafari()||this.browser.detectiPhone()||this.browser.detectiPad());var H=this.context.rp_feature_set.jit_sync_android&&this.browser.detectAndroid();if(J||H){var G=[2054,2138,2149,2532,3410];var I="rp_onUserIdLoaded_"+this.context.rp_zonesize;I=I.replace("-","_");var o=x+"gum.criteo.com/sync?c=2&r=2&j="+I;var u=this;window[I]=function(W){u.onUserIdLoaded(G,n,W)};document.write("<script type='text/javascript' src='"+o+"'><\/script>")}}catch(m){}document.write("<script type='text/javascript'>rp_requests = new RubiconAdServing.Requests();     rp_requests.sendRequest('"+this.context.rp_zonesize+"');<\/script>")};this.onUserIdLoaded=function(o,m,n){if(o&&n&&n.status=="OK"&&n.userid){var p;var l;for(l=0;l<o.length;l++){p=o[l];m.url=m.url+="&put_"+p+"="+encodeURIComponent(n.userid)}}};this.dropRTPDataCollection=function(l){document.write('<script type="text/javascript">');document.write('oz_api="valuation";');document.write("oz_async=true;");document.write("oz_cached_only=true;");document.write('rp_account="'+this.context.rp_account+'";');document.write('rp_site="'+this.context.rp_site+'";');document.write('rp_zonesize="'+this.context.rp_zonesize+'";');if(this.context.rp_slot){document.write('rp_slot="'+this.context.rp_slot+'";')}document.write('oz_impression_id="'+l.impression_id+'";');document.write("<\/script>");document.write('<script type="text/javascript" src="http://tap-cdn.rubiconproject.com/partner/scripts/rubicon/dorothy.js?pc='+this.context.rp_account+"/"+this.context.rp_site+'"><\/script>')};this.filter_script=function(l){l=l.replace(/\/SCRIPT/g,'/SCR"+"IPT');l=l.replace(/\/script/g,'/scr"+"ipt');return l};this.onAdResponseLoaded=function(m){var s;try{if(m.ads){for(var n=0;n<m.ads.length;n++){s=m.ads[n];var o=["script","html"];for(var u in o){var q=o[u];if(s[q]&&typeof s[q]=="string"){s[q]=decodeURIComponent(s[q]);if(typeof this["filter_"+q]=="function"){s[q]=this["filter_"+q](s[q])}}}if(this.context.rp_slot){s.rp_slot=this.context.rp_slot}var r;var l=new RubiconAdServing.Creatives();r=m.account_id+"/"+m.site_id+"/"+m.zone_id+"-"+m.size_id;l.setAd(r,s);r=this.context.rp_slot;l.setAd(r,s)}}if(this.context.rp_callback){if(typeof this.context.rp_callback=="function"){this.context.rp_callback(m)}if(typeof this.context.rp_callback=="string"&&window[this.context.rp_callback]&&typeof window[this.context.rp_callback]=="function"){window[this.context.rp_callback](m)}}}catch(p){}try{if(this.context.rp_feature_set.rtp_data_collection){if(m.ads){for(var n=0;n<m.ads.length;n++){s=m.ads[n];this.dropRTPDataCollection(s)}}}}catch(p){}};var b=function(l){return(l||false)&&Object.prototype.toString.call(l)==="[object Array]"&&typeof l.length==="number"&&l.length>0};var d=function(n,o,m,q,p){var l="";if(m!==null&&typeof m!="undefined"){l=(p===true?"":"&")+o+"="+m}return e(n,l,q)};var e=function(m,l,n){if(typeof m==="string"&&m!==null&&m.length>0){return n.replace("$"+m+"$",l)}else{return n}};this.appendObject=function(n,p,q,m,s){var r="";if(q){s=s||".";var o;for(var l in q){if(!q.hasOwnProperty(l)){continue}o=q[l];if(o!=null&&(typeof o.length=="undefined"||o.length>0)){if(typeof o=="boolean"){r+="&"+p+s+l+"="+(o?1:0)}else{r+="&"+p+s+l+"="+encodeURIComponent(o)}}}}m=e(n,r,m);return m};this.getSupportExpandableAd=function(){return(!j()&&this.context.rp_adtype!="iframe")};var j=function(){return(window!=top)};var k=function(){var l=false;try{window.top.location.href}catch(m){l=true}return l};var i=function(){var u=null;try{if(k()){}else{var o=window;var p=c();var q=90;var t;if(j()){while(window.top!==o.parent){o=o.parent;try{o.location.href}catch(m){return u}}t=h(o.frameElement);q=o.frameElement.clientHeight/2}else{var s=document.documentElement;while(s.childNodes.length&&s.lastChild.nodeType==1){s=s.lastChild}var n=document.createElement("div");var l=a("rubicon_chk_position_");n.setAttribute("id",l);n.style.width="0px";n.style.height="0px";s.parentNode.appendChild(n);t=h(n);s.parentNode.removeChild(n);q=q/2}if(p.y+p.h<(q+t.y)||p.y>(q+t.y)){u="btf"}else{u="atf"}}}catch(r){}return u};var a=function(l){return l+Math.floor(Math.random()*1000000)};var c=function(){if(window.frameElement){return{x:window.top.innerWidth,y:window.top.pageYOffset||window.top.document.body.scrollTop||window.top.document.documentElement.scrollTop,w:(window.top.innerWidth||window.top.documentElement.clientWidth||window.top.getElementsByTagName("body")[0].clientWidth),h:(window.top.innerHeight||window.top.documentElement.clientHeight||window.top.getElementsByTagName("body")[0].clientHeight)}}return{x:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,y:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,w:(window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth),h:(window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight)}};var g=function(){try{return window.screen.width+"x"+window.screen.height}catch(l){}};var h=function(m){var l=0,n=0;if(m.offsetParent){do{l+=m.offsetLeft;n+=m.offsetTop}while(m=m.offsetParent)}return{x:l,y:n}};var f=function(l){this.navigator=l,this.safariMatching=[{text:l.vendor,pattern:"Apple"}],this.ipadMatching=[{text:l.userAgent,pattern:"iPad"},{text:l.userAgent,pattern:"OS X"}],this.iphoneMatching=[{text:l.userAgent,pattern:"iPhone"},{text:l.userAgent,pattern:"OS X"}],this.androidMatching=[{text:l.userAgent,pattern:"Android"}],this.detectSafari=function(){return this.matchesAny(this.safariMatching)},this.detectiPad=function(){return this.matchesAll(this.ipadMatching)},this.detectiPhone=function(){return this.matchesAll(this.iphoneMatching)},this.detectAndroid=function(){return this.matchesAll(this.androidMatching)},this.detectIE8Plus=function(){var o=0;if(l&&l.appName=="Microsoft Internet Explorer"){var m=l.userAgent;var n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(n.exec(m)!=null){o=parseFloat(RegExp.$1)}}return(o>=8)},this.matchesAny=function(n){for(var m=0;m<n.length;m++){var o=n[m].text;if(o&&o.indexOf(n[m].pattern)!=-1){return true}}return false},this.matchesAll=function(o){var m=0;for(var n=0;n<o.length;n++){var p=o[n].text;if(p&&p.indexOf(o[n].pattern)>=0){m++}}return(m>0&&m==o.length)}}};RubiconAdServing.getStoredData=function(){try{var b=localStorage.rubiconSmartTagData;if(b){var a=JSON.parse(b);if(typeof a==="object"){return a}}}catch(c){return{}}return{}};RubiconAdServing.storeData=function(a){try{localStorage.rubiconSmartTagData=JSON.stringify(a)}catch(b){}};RubiconAdServing.enforceFCapStructure=function(d,c,a,b){if(!d.fcaps){d.fcaps={}}if(!d.fcaps.sizes){d.fcaps.sizes={}}if(!d.fcaps.sizes[c]){d.fcaps.sizes[c]={}}if(!d.fcaps.sizes[c]["ads"]){d.fcaps.sizes[c]["ads"]={}}if(!d.fcaps.sizes[c]["ads"][a]){d.fcaps.sizes[c]["ads"][a]={count:0,ad_id:a,first_seen:b,last_seen:b}}return d};RubiconAdServing.setFCap=function(c,a,d,b){var e=RubiconAdServing.getStoredData();e=RubiconAdServing.enforceFCapStructure(e,c,a,b);e.fcaps.sizes[c]["ads"][a].count=d;e.fcaps.sizes[c]["ads"][a].last_seen=b;RubiconAdServing.storeData(e)};RubiconAdServing.incFCap=function(c,a,d,b){var e=RubiconAdServing.getStoredData();e=RubiconAdServing.enforceFCapStructure(e,c,a,b);e.fcaps.sizes[c]["ads"][a].count+=d;e.fcaps.sizes[c]["ads"][a].last_seen=b;RubiconAdServing.storeData(e)};RubiconAdServing.decFCap=function(c,a,d,b){var e=RubiconAdServing.getStoredData();e=RubiconAdServing.enforceFCapStructure(e,c,a,b);e.fcaps.sizes[c]["ads"][a].count-=d;e.fcaps.sizes[c]["ads"][a].last_seen=b;RubiconAdServing.storeData(e)};RubiconAdServing.delFCap=function(b,a){var c=RubiconAdServing.getStoredData();c=RubiconAdServing.enforceFCapStructure(c,b,a,0);delete c.fcaps.sizes[b]["ads"][a];if(JSON.stringify(c.fcaps.sizes[b]["ads"])==="{}"){delete c.fcaps.sizes[b]}if(JSON.stringify(c.fcaps.sizes)==="{}"){delete c.fcaps.sizes}RubiconAdServing.storeData(c)};RubiconAdServing.enforceBucketStructure=function(d,c,b,a){if(typeof d.bucket!=="object"){d.bucket={}}if(typeof d.bucket[c]!=="object"){d.bucket[c]={}}if(typeof d.bucket[c][b]!=="object"){d.bucket[c][b]={first_set:a,value:0}}return d};RubiconAdServing.setBucketValue=function(c,b,e,a){var d=RubiconAdServing.getStoredData();d=RubiconAdServing.enforceBucketStructure(d,c,b,a);d.bucket[c][b].value=e;d.bucket[c][b].last_set=a;RubiconAdServing.storeData(d)};RubiconAdServing.incBucketValue=function(c,b,e,a){var d=RubiconAdServing.getStoredData();d=RubiconAdServing.enforceBucketStructure(d,c,b,a);d.bucket[c][b].value+=e;d.bucket[c][b].last_set=a;RubiconAdServing.storeData(d)};RubiconAdServing.decBucketValue=function(c,b,e,a){var d=RubiconAdServing.getStoredData();d=RubiconAdServing.enforceBucketStructure(d,c,b,a);d.bucket[c][b].value-=e;d.bucket[c][b].last_set=a;RubiconAdServing.storeData(d)};RubiconAdServing.delBucketValue=function(b,a){var c=RubiconAdServing.getStoredData();c=RubiconAdServing.enforceBucketStructure(c,b,a,0);delete c.bucket[b][a];if(JSON.stringify(c.bucket[b])==="{}"){delete c.bucket[b]}RubiconAdServing.storeData(c)};(function(){try{var a;var d=new RubiconAdServing.RubiconAd();var c=new Object();var g;g=["rp_account","rp_site","rp_zonesize","rp_ad","rp_height","rp_width","rp_floor","rp_pmp_tier","rp_rtb_tier","rp_rtb_floor","rp_lat","rp_long","rp_slot"];for(var b=0;b<g.length;b++){a=g[b];if((window[a]!=null)&&(typeof window[a]=="string"||typeof window[a]=="number")){c[a]=window[a];window[a]=undefined}}g=["rp_adtype","rp_page","rp_ae_spoof","rp_env","rp_host","rp_facebook_device_id","rp_publisher_id","rp_app_id","rp_div_id"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&typeof window[a]=="string"){c[a]=window[a];window[a]=undefined}}g=["rp_gender","rp_age","rp_age_range","rp_age_dob","rp_ethnicity","rp_xpi","rp_kw","rp_tracking","rp_user_key","rp_blocks"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&((typeof window[a]=="string"&&window[a].substr(0,7)!="[INSERT")||typeof window[a]=="number")){c[a]=window[a];window[a]=undefined}}g=["rp_debug","rp_inventory","rp_visitor","rp_app","rp_device","rp_geo","rp_accept","rp_feature_set","rp_dpf","rp_aso","rp_navigator","rp_badvid","rp_rtp2"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&(typeof window[a]=="object"||typeof window[a]=="boolean")){c[a]=window[a];window[a]=undefined}}g=["rp_smartfile"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&(typeof window[a]=="string"&&window[a].substr(0,6)!="[SMART")){c[a]=window[a];window[a]=undefined}}g=["rp_callback"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&(typeof window[a]=="function"||typeof window[a]=="string")){c[a]=window[a];window[a]=undefined}}d.init(c);d.start()}catch(f){}})();