(function(g){var window=this;var Tka=function(a){g.Ok(a);a=g.O(a.currentTarget,"feed-item-collapsed-container");g.el(a,"collapsed","expanded");g.B("yt-dom-content-change",iO)};var Uka=function(a){g.Ok(a);a=g.O(a.currentTarget,"feed-item-collapsed-container");g.el(a,"expanded","collapsed");g.B("yt-dom-content-change",iO)};var Vka=function(){"DELAYED_EMBED"in g.Wa&&(0,g.A)(g.x("DELAYED_EMBED"),function(a){g.Vf(a.container,a.swf_config)})};
var Wka=function(a,b){function c(){var a=window.document.forms["i18n-local-languages-feed-promo-form"];a.hl.value=d;a.submit()}var d=g.C(b.currentTarget,"lang-code"),e=g.E("i18n-local-languages-feed-promo"),f=g.C(e,"promo-gl"),e=g.C(e,"current-lang");g.il("i18n-promo-select",g.Zc({gl:f,lang:d,current:e}));(new g.jA(a)).write("write_accept",{T:c,onError:c})};
var Xka=function(a){var b=g.E("i18n-local-languages-feed-promo"),c=g.C(b,"promo-gl"),b=g.C(b,"current-lang"),c=g.Zc({gl:c,current:b});g.Hj("i18n-promo-dismiss",c,void 0);g.M(jO);jO=[];(new g.jA(a)).write("write_dismiss")};
var kO=function(a,b){g.u.call(this);this.l=a;this.C=b;this.j=null;this.A=g.E("page");this.j=g.L(g.E("premium-yva-close"),"click",(0,g.q)(this.Vn,this));var c=this.l;g.Of.getInstance().get("HIDDEN_MASTHEAD_ID")==c||g.J(this.A,"masthead-ad-expanded");this.B=g.L(window,"message",(0,g.q)(this.Ix,this))};var lO=function(a){var b=g.Of.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()};
var mO=function(a){if(a&&a.data&&"VideoMasthead"==a.data.source)if("ClickToWatch"==a.data.event){if(a=a.data,a.clickThroughUrl){var b=g.kl(a.clickThroughUrl),b=g.pi(b.adurl),c={};c.adpings=g.ll(a.pings);g.ae(b,c);g.de(a.clickThroughUrl)}}else"CloseAd"==a.data.event&&kO.prototype.Vn()};var Yka=function(a){a=g.O(a.target,"multi-question-shelf-feedback");nO(a);g.ok();g.fc(a,"ui-action-swap-shelf")&&oO(a)};
var Zka=function(a){for(var b=g.O(a.target,"single-question-shelf"),c=[],d=g.F("single-question-shelf-answers",b).getElementsByTagName("input"),e=0;e<d.length;e++)d[e].checked&&c.push(d[e].value);if(0<c.length){g.ok();c&&g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Y:{feedback_tokens:c,should_merge:1}});if(b=g.O(b,"feed-item-dismissal-notices"))b=g.F("feed-item-dismissal-activate-question",b),g.R(b);a=g.O(a.target,"single-question-shelf-feedback");g.fc(a,"ui-action-swap-shelf")&&
oO(a)}};var $ka=function(a){a=g.O(a.target,"question-shelf-dismissal");g.fc(a,"feedback-token")&&nO(a);g.fc(a,"action")&&"hide"==g.C(a,"action").toLowerCase()&&(g.ok(),a=g.O(a,"feed-item-container"),g.R(a),g.B("yt-dom-content-change",a))};
var oO=function(a){var b=g.C(a,"ui-action-swap-shelf"),c=g.O(a,"swappable-shelf"),d=g.O(a,"question-shelf-package"),b=g.F(b,d);g.N(b);g.R(c);g.fc(a,"final-feedback")&&"true"==g.C(a,"final-feedback").toLowerCase()&&(a=g.F("yt-close-img",d),g.El(a,"feedback-token"));g.SE.getInstance().ee();g.B("yt-dom-content-change",b)};var nO=function(a){g.fc(a,"feedback-token")&&(a={feedback_tokens:[g.C(a,"feedback-token")]},g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Y:a}))};
var ala=function(){g.M(pO);g.ml(qO);qO.length=0;(0,g.A)(rO,function(a){g.Za(a)})};var bla=function(a){a.preventDefault();a=g.O(a.currentTarget,"branded-page-related-channels-item");sO(a,!0)};var tO=function(a){g.QC(a,{duration:.3,Oa:function(){g.Yh(a)}})};var dla=function(a){var b=g.P("branded-page-related-channels-item"),c=g.Ga(b,function(b){return g.C(b,"external-id")==a.j});c&&rO.push(g.y(function(){sO(c,!1)},2E3))};
var sO=function(a,b){var c=!!g.F("branded-page-related-channels-featured-badge",a),d=g.C(a,"external-id"),e=g.Vh(a,"ul"),e=g.P("branded-page-related-channels-item",e),e=(0,g.ah)(e,function(a){return g.C(a,"external-id")}),f={};c&&(f.featured=1);g.T("/guide_ajax?action_reload_channel=1",{method:"POST",ea:f,Ub:!0,Y:{dismissed_id:d,shown_ids:e.join(),dismiss_old_channel:b},T:function(b,c){var d=c.new_suggested_html;d?(d=g.Yk(g.Wb(d)),g.zl(d,a),g.B("yt-dom-content-change",d),g.PC(d,0,1,{duration:.3})):
tO(a)},onError:function(){tO(a)}})};var ela=function(a){if(a=g.O(a.target,"yt-uix-toggle-menu-item"))if(a=g.O(a,"yt-uix-toggle-menu-item-container")){var b=g.yl(a)||g.ci(a);b&&(g.R(a),g.N(b))}};var uO=function(a,b){this.G="session_token="+a;(this.j="https://"+window.document.location.hostname)&&"/"!=this.j.charAt(this.j.length-1)&&(this.j+="/");this.A=b;this.B=null;this.D=[];this.C=[];this.L={}};
var fla=function(a){a=a.getServiceInfo();for(var b in a){var c=g.E(b+"-connected");if(c){var d=a[b],e=g.E(b+"-not-connected"),f=g.E(b+"-display-name"),k=d.is_connected;g.lf(c,k);g.lf(e,!k);g.$h(f,d.connected_as||"")}}};var gla=function(){g.SE.getInstance().ee();g.hC()};var hla=function(){g.T("/feed_ajax",{method:"POST",ea:{action_pause_watch_history:1},T:vO,onError:wO})};var ila=function(){g.T("/feed_ajax",{method:"POST",ea:{action_resume_watch_history:1},T:vO,onError:wO})};
var vO=function(a,b){xO(b)||(g.sk(yO,zO),g.Ti(yO)?yO.focus():g.Ti(zO)&&zO.focus())};var jla=function(){var a={action_clear_watch_history:1};a.clear_dialog_shown=AO;g.T("/feed_ajax",{method:"POST",ea:a,T:BO,onError:wO})};var kla=function(){g.T("/feed_ajax",{method:"POST",ea:{action_pause_search_history:1},T:CO,onError:wO})};var lla=function(){g.T("/feed_ajax",{method:"POST",ea:{action_resume_search_history:1},T:CO,onError:wO})};
var CO=function(a,b){xO(b)||(g.sk(DO,EO),g.Ti(DO)?DO.focus():g.Ti(EO)&&EO.focus())};var mla=function(){var a={action_clear_search_history:1};a.clear_dialog_shown=FO;g.T("/feed_ajax",{method:"POST",ea:a,T:BO,onError:wO})};var BO=function(a,b){xO(b.errors)||nla()};var wO=function(a,b){xO(b)};var xO=function(a){return a&&a.errors&&a.errors.length?((0,g.A)(a.errors,function(a){g.ys(a,GO,HO)}),!0):!1};var nla=function(){var a=g.P("feed-item-container");(0,g.A)(a,function(a){g.Yh(a)})};var IO=function(){g.W.call(this)};
var JO=function(a){g.fc(a,"feedback-token")&&(a={feedback_tokens:[g.C(a,"feedback-token")]},g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Y:a}))};var KO=function(){g.sb.call(this,"www/feed",["www/common"],["feed","index","results"],ola,pla)};
var ola=function(){g.nr(g.SE);g.SE.getInstance().ee();Vka();"MASTHEAD_ENCRYPTED_ID"in g.Wa&&(window.masthead=new kO(g.x("MASTHEAD_ENCRYPTED_ID"),g.x("MASTHEAD_IS_BRANDED")),g.L(window,"message",mO));if("PYV_IFRAME_ID"in g.Wa){var a=g.x("PYV_IFRAME_CONTENT"),b=g.E(g.x("PYV_IFRAME_ID"));b&&(b=g.xl(b),b.open(),b.write("<!DOCTYPE html><html><head></head><body>"+a+"</body></html>"),g.D||b.close())}if(a=g.E("i18n-local-languages-feed-promo"))if(b=g.C(a,"column-name")){var c={gl:g.C(a,"promo-gl")},c=g.Zc(c);
g.Hj("i18n-promo-show",c,void 0);c=g.r(Xka,b);jO.push(g.Q(null,"click",g.r(Wka,b),"i18n-local-languages-feed-promo-language-option"),g.Q(a,"click",c,"i18n-local-languages-feed-promo-close"))}(a=g.E("page"))&&LO.push(g.Q(a,"click",Yka,"multi-question-shelf-feedback"),g.Q(a,"click",Zka,"single-question-shelf-feedback"),g.Q(a,"click",$ka,"question-shelf-dismissal"));pO=g.Q(window.document.body,"click",bla,"branded-page-related-channels-item-close");qO.push(g.nl(g.Vt,dla));(a=g.E("feed"))||(a=g.E("browse-items-primary"));
MO.push(g.z("yt-uix-load-more-success",gla));if(b=g.F("individual-feed"))g.C(b,"feed-name"),g.C(b,"feed-type");g.vE(a);g.x("INIT_AUTOSHARE")&&(a=new uO(g.x("XSRF_TOKEN")),a.addServiceChangedCallback(fla),(b=g.E("facebook-connect-button"))&&a.registerConnectDialogLauncher(b,"facebook",!0),(b=g.E("twitter-connect-button"))&&a.registerConnectDialogLauncher(b,"twitter",!0),(b=g.E("orkut-connect-button"))&&a.registerConnectDialogLauncher(b,"orkut",!0),window.autoshare=a);g.hC();g.OE();(a=iO=g.E("feed"))||
(a=iO=g.E("browse-items-primary"));NO.push(g.Q(a,"click",Tka,"feed-item-expander-button"));NO.push(g.Q(a,"click",Uka,"feed-item-collapser-button"));OO||(OO=!0,PO.push(g.Q(window.document.documentElement,"click",ela,"yt-uix-toggle-menu-item")));g.mF();HO=g.E("feed-action-alerts");GO=g.F("ajax-alert",HO);yO=g.E("watch-history-pause-button");zO=g.E("watch-history-resume-button");QO=g.E("watch-history-clear-button");DO=g.E("search-history-pause-button");EO=g.E("search-history-resume-button");RO=g.E("search-history-clear-button");
SO.push(g.L(g.E("watch-history-clear-confirm-button"),"click",jla));SO.push(g.L(yO,"click",hla));SO.push(g.L(zO,"click",ila));SO.push(g.L(g.E("search-history-clear-confirm-button"),"click",mla));SO.push(g.L(DO,"click",kla));SO.push(g.L(EO,"click",lla));g.C(QO,"activate-on-load")&&QO&&g.Eq.getInstance().show(QO);g.C(RO,"activate-on-load")&&RO&&g.Eq.getInstance().show(RO);FO=AO=0;g.x("LOAD_USER_INTERESTS")&&(a=g.F("recommended-interests"),(new IO).la(a))};
var pla=function(){g.pr(g.SE);g.Ta("DELAYED_EMBED",[]);window.masthead&&(window.masthead.dispose(),g.Rk(window,"message",mO));g.M(jO);jO=[];g.M(LO);LO.length=0;ala();g.kb(MO);MO.length=0;g.AE();g.kb(g.QE);g.QE.length=0;g.M(NO);NO.length=0;OO=!1;g.M(PO);PO.length=0;g.oF();g.M(SO);SO.length=0;RO=EO=DO=QO=zO=yO=HO=null;g.WC()};var iO;var NO=[];var jO=[];g.t(kO,g.u);var qla=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;g.h=kO.prototype;g.h.Ix=function(a){a&&a.origin&&qla.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.dv()};g.h.S=function(){kO.J.S.call(this);g.M(this.j);g.M(this.B);this.B=this.j=null};
g.h.dv=function(){g.R("ad_creative_1");g.B("ads-masthead-hide");g.B("yt-dom-content-change");this.C&&g.R("ad_creative_collapse_btn_1");g.N("ad_creative_expand_btn_1");g.K(this.A,"masthead-ad-expanded");lO(this.l);g.Hj("homepage_collapse_masthead_ad",void 0,void 0)};g.h.Vn=function(){g.N("ad_creative_expand_btn_1");g.Yh(g.E("premium-yva"));g.Yh(g.E("video-masthead"));g.B("yt-dom-content-change");lO(this.l)};
g.h.nH=function(){g.el(window.document.getElementById("premium-yva"),"premium-yva-unexpanded","premium-yva-expanded")};g.h.pH=function(){g.el(window.document.getElementById("premium-yva"),"premium-yva-expanded","premium-yva-unexpanded")};g.h.nw=function(){g.R("premium-yva");g.K(g.E("premium-yva"),"premium-yva-unexpanded")};g.h.$H=function(){var a=g.Of.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();g.Hj("homepage_expand_masthead_ad",void 0,void 0);g.ce(window.document.location.href)};g.m("yt.flash.embed",g.Vf,void 0);g.m("yt.www.ads.pyv.pyvHomeAfcCallback",g.dD,void 0);g.m("yt.www.ads.MastheadAd",kO,void 0);kO.prototype.autoCollapsePremiumYva=kO.prototype.nw;kO.prototype.collapse_ad=kO.prototype.dv;kO.prototype.expand_ad=kO.prototype.$H;kO.prototype.userCollapsePremiumYva=kO.prototype.Vn;kO.prototype.userExpandPremiumYva=kO.prototype.nH;kO.prototype.userUnexpandPremiumYva=kO.prototype.pH;var LO=[];var pO,qO=[],rO=[];var OO=!1,PO=[];g.m("yt.sharing.AutoShare",uO,void 0);uO.prototype.Ja=function(a,b,c,d){g.L(a,"click",(0,g.q)(this.K,this));if(a.id)this.L[a.id]={serviceName:b,connectOnly:c},d&&(this.L[a.id].connectOnlyCallback=d);else throw"Connect dialog launch buttons must have an id.";};uO.prototype.registerConnectDialogLauncher=uO.prototype.Ja;uO.prototype.K=function(a){if(a=this.L[a.currentTarget.id]){var b=a.connectOnly;a.connectOnlyCallback&&(b=(0,a.connectOnlyCallback)());this.F(a.serviceName,b)}};
uO.prototype.handleConnectService=uO.prototype.K;uO.prototype.$=function(){this.l()};uO.prototype.doOnLoad=uO.prototype.$;uO.prototype.U=function(a){this.D.push(a)};uO.prototype.addServiceChangedCallback=uO.prototype.U;uO.prototype.ga=function(a){this.C.push(a)};uO.prototype.addCanConnectCallback=uO.prototype.ga;uO.prototype.bc=function(){return this.A};uO.prototype.getServiceInfo=uO.prototype.bc;
uO.prototype.F=function(a,b){for(var c in this.C)if(!(0,this.C[c])(this,a,b))return;g.T(this.j+"autoshare",{ea:{action_ajax_stats_ping:"1",stat:"connect_has_google",service:a}});c=this.j+"autoshare?action_popup_auth=1&service="+a+"&connect_only="+(b?"true":"false");"facebook"==a&&(c+="&permissions="+(0,window.encodeURIComponent)("read_stream,offline_access,manage_pages,publish_stream"));this.R(c,{height:500,width:860})};uO.prototype.connectService=uO.prototype.F;
uO.prototype.X=function(a,b){var c=(0,g.q)(function(a,c){this.A=g.fo(c.html_content);this.l();b&&b()},this),d=(0,g.q)(function(){b&&b();this.l()},this),e={action_ajax_connect_service:1};e.return_url=a;g.T(this.j+"autoshare?ajax_connect_service",{format:"XML",method:"POST",postBody:g.Zc(e)+"&"+this.G,T:c,onError:d})};uO.prototype.connectServiceDone=uO.prototype.X;uO.prototype.zb=function(a){this.W(a)};uO.prototype.disconnectService=uO.prototype.zb;
uO.prototype.Pa=function(a,b){var c=(0,g.q)(function(a,b){this.A=g.fo(b.html_content);this.l()},this),d=(0,g.q)(function(){this.l()},this),e={action_ajax_set_connect_only:1};e.service=a;e.connect_only=b?"True":"False";g.T(this.j+"autoshare?ajax_set_connect_only",{format:"XML",method:"POST",postBody:g.Zc(e)+"&"+this.G,T:c,onError:d})};uO.prototype.setConnectOnly=uO.prototype.Pa;
uO.prototype.W=function(a){var b=(0,g.q)(function(a,b){this.A=g.fo(b.html_content);this.l()},this),c=(0,g.q)(function(){this.l()},this),d={action_ajax_disconnect_service:1};d.service=a;g.T(this.j+"autoshare?ajax_disconnect_service",{format:"XML",method:"POST",postBody:g.Zc(d)+"&"+this.G,T:b,onError:c})};uO.prototype.l=function(){for(var a in this.D)(0,this.D[a])(this)};uO.prototype.R=function(a,b){if(this.B)try{this.B.close()}catch(c){this.B=null}this.B=g.Lk(a,b)};
uO.prototype.Va=function(){this.F("facebook",!this.A.facebook.is_autosharing)};var MO=[];var AO,FO,HO,GO,yO,zO,QO,DO,EO,RO,SO=[];g.t(IO,g.W);IO.prototype.V=function(){IO.J.V.call(this);this.aa("click","user-interests-recommendation-feedback",this.A)};IO.prototype.A=function(a){var b=g.O(a.target,"user-interests-recommendation-feedback");JO(b);if(b=g.O(a.target,"recommendation"))a=g.yl(b),g.R(b),a?(b=g.F("user-interests-recommendation-impression",a),JO(b),g.N(a)):g.N(this.P("no-recommendations"))};g.m("yt.www.feed.history.onHideClearWatchHistoryDialog",function(){AO++},void 0);g.m("yt.www.feed.history.onHideClearSearchHistoryDialog",function(){FO++},void 0);g.m("yt.www.hats.openGoogleFeedback",g.pF,void 0);g.t(KO,g.sb);KO.prototype.enable=function(){KO.J.enable.call(this)};KO.prototype.disable=function(){KO.J.disable.call(this)};g.ub(new KO);})(_yt_www);
