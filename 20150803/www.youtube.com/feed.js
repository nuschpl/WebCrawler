(function(g){var window=this;var Pka=function(a){g.Kj(a);a=g.P(a.currentTarget,"feed-item-collapsed-container");g.bk(a,"collapsed","expanded");g.B("yt-dom-content-change",uO)};var Qka=function(a){g.Kj(a);a=g.P(a.currentTarget,"feed-item-collapsed-container");g.bk(a,"expanded","collapsed");g.B("yt-dom-content-change",uO)};var Rka=function(){"DELAYED_EMBED"in g.Ua&&(0,g.A)(g.x("DELAYED_EMBED"),function(a){g.bf(a.container,a.swf_config)})};
var Ska=function(a,b){function c(){var a=window.document.forms["i18n-local-languages-feed-promo-form"];a.hl.value=d;a.submit()}var d=g.C(b.currentTarget,"lang-code"),e=g.E("i18n-local-languages-feed-promo"),h=g.C(e,"promo-gl"),e=g.C(e,"current-lang");g.fk("i18n-promo-select",g.Zc({gl:h,lang:d,current:e}));(new g.iA(a)).write("write_accept",{T:c,onError:c})};
var Tka=function(a){var b=g.E("i18n-local-languages-feed-promo"),c=g.C(b,"promo-gl"),b=g.C(b,"current-lang"),c=g.Zc({gl:c,current:b});g.Ji("i18n-promo-dismiss",c,void 0);g.M(vO);vO=[];(new g.iA(a)).write("write_dismiss")};
var wO=function(a,b){g.u.call(this);this.l=a;this.C=b;this.j=null;this.A=g.E("page");this.j=g.L(g.E("premium-yva-close"),"click",(0,g.q)(this.co,this));var c=this.l;g.Me.getInstance().get("HIDDEN_MASTHEAD_ID")==c||g.J(this.A,"masthead-ad-expanded");this.B=g.L(window,"message",(0,g.q)(this.Rx,this))};var xO=function(a){var b=g.Me.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()};
var yO=function(a){if(a&&a.data&&"VideoMasthead"==a.data.source)if("ClickToWatch"==a.data.event){if(a=a.data,a.clickThroughUrl){var b=g.hk(a.clickThroughUrl),b=g.vh(b.adurl),c={};c.adpings=g.ik(a.pings);g.ae(b,c);g.de(a.clickThroughUrl)}}else"CloseAd"==a.data.event&&wO.prototype.co()};var Uka=function(a){a=g.P(a.target,"multi-question-shelf-feedback");zO(a);g.pj();g.ec(a,"ui-action-swap-shelf")&&AO(a)};
var Vka=function(a){for(var b=g.P(a.target,"single-question-shelf"),c=[],b=g.F("single-question-shelf-answers",b).getElementsByTagName("input"),d=0;d<b.length;d++)b[d].checked&&c.push(b[d].value);0<c.length&&(g.pj(),c&&g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Z:{feedback_tokens:c,should_merge:1}}),a=g.P(a.target,"single-question-shelf-feedback"),g.ec(a,"ui-action-swap-shelf")&&AO(a))};
var Wka=function(a){a=g.P(a.target,"question-shelf-dismissal");g.ec(a,"feedback-token")&&zO(a);g.ec(a,"action")&&"hide"==g.C(a,"action").toLowerCase()&&(g.pj(),a=g.P(a,"feed-item-container"),g.O(a),g.B("yt-dom-content-change",a))};
var AO=function(a){var b=g.C(a,"ui-action-swap-shelf"),c=g.P(a,"swappable-shelf"),d=g.P(a,"question-shelf-package"),b=g.F(b,d);g.N(b);g.O(c);g.ec(a,"final-feedback")&&"true"==g.C(a,"final-feedback").toLowerCase()&&(a=g.F("yt-close-img",d),g.Ck(a,"feedback-token"));g.TE.getInstance().Ee();g.B("yt-dom-content-change",b)};var zO=function(a){g.ec(a,"feedback-token")&&(a={feedback_tokens:[g.C(a,"feedback-token")]},g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Z:a}))};
var Xka=function(){g.M(BO);g.jk(CO);CO.length=0;(0,g.A)(DO,function(a){g.Ya(a)})};var Yka=function(a){a.preventDefault();a=g.P(a.currentTarget,"branded-page-related-channels-item");EO(a,!0)};var FO=function(a){g.PC(a,{duration:.3,Ra:function(){g.ch(a)}})};var Zka=function(a){var b=g.Q("branded-page-related-channels-item"),c=g.Fa(b,function(b){return g.C(b,"external-id")==a.j});c&&DO.push(g.y(function(){EO(c,!1)},2E3))};
var GO=function(a){if(g.ec(a,"external-id"))return g.C(a,"external-id");a=g.F("yt-lockup-channel",a);return g.C(a,"external-id")};
var EO=function(a,b){var c=!!g.F("branded-page-related-channels-featured-badge",a),d=GO(a),e=g.$g(a,"ul"),e=g.Q("branded-page-related-channels-item",e),e=(0,g.kg)(e,function(a){return GO(a)}),h={};c&&(h.featured=1);g.T("/guide_ajax?action_reload_channel=1",{method:"POST",ga:h,Hb:!0,Z:{dismissed_id:d,shown_ids:e.join(),dismiss_old_channel:b},T:function(b,c){var d=c.new_suggested_html;d?(d=g.Uj(g.Vb(d)),g.kh(d,a),g.B("yt-dom-content-change",d),g.OC(d,0,1,{duration:.3})):FO(a)},onError:function(){FO(a)}})};
var $ka=function(a){if(a=g.P(a.target,"yt-uix-toggle-menu-item"))if(a=g.P(a,"yt-uix-toggle-menu-item-container")){var b=g.xk(a)||g.hh(a);b&&(g.O(a),g.N(b))}};var HO=function(a,b){this.G="session_token="+a;(this.j="https://"+window.document.location.hostname)&&"/"!=this.j.charAt(this.j.length-1)&&(this.j+="/");this.A=b;this.B=null;this.D=[];this.C=[];this.L={}};
var ala=function(a){a=a.getServiceInfo();for(var b in a){var c=g.E(b+"-connected");if(c){var d=a[b],e=g.E(b+"-not-connected"),h=g.E(b+"-display-name"),k=d.is_connected;g.Se(c,k);g.Se(e,!k);g.eh(h,d.connected_as||"")}}};var bla=function(){g.TE.getInstance().Ee();g.gC()};var dla=function(){g.T("/feed_ajax",{method:"POST",ga:{action_pause_watch_history:1},T:IO,onError:JO})};var ela=function(){g.T("/feed_ajax",{method:"POST",ga:{action_resume_watch_history:1},T:IO,onError:JO})};
var IO=function(a,b){KO(b)||(g.Ue(LO,MO),g.Te(LO)?LO.focus():g.Te(MO)&&MO.focus())};var fla=function(){var a={action_clear_watch_history:1};a.clear_dialog_shown=NO;g.T("/feed_ajax",{method:"POST",ga:a,T:OO,onError:JO})};var gla=function(){g.T("/feed_ajax",{method:"POST",ga:{action_pause_search_history:1},T:PO,onError:JO})};var hla=function(){g.T("/feed_ajax",{method:"POST",ga:{action_resume_search_history:1},T:PO,onError:JO})};
var PO=function(a,b){KO(b)||(g.Ue(QO,RO),g.Te(QO)?QO.focus():g.Te(RO)&&RO.focus())};var ila=function(){var a={action_clear_search_history:1};a.clear_dialog_shown=SO;g.T("/feed_ajax",{method:"POST",ga:a,T:OO,onError:JO})};var OO=function(a,b){KO(b.errors)||jla()};var JO=function(a,b){KO(b)};var KO=function(a){return a&&a.errors&&a.errors.length?((0,g.A)(a.errors,function(a){g.cs(a,TO,UO)}),!0):!1};var jla=function(){var a=g.Q("feed-item-container");(0,g.A)(a,function(a){g.ch(a)})};var VO=function(){g.W.call(this)};
var WO=function(a){g.ec(a,"feedback-token")&&(a={feedback_tokens:[g.C(a,"feedback-token")]},g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Z:a}))};var XO=function(){g.rb.call(this,"www/feed",["www/common"],["feed","index","results"],kla,lla)};
var kla=function(){g.Pq(g.TE);g.TE.getInstance().Ee();Rka();"MASTHEAD_ENCRYPTED_ID"in g.Ua&&(window.masthead=new wO(g.x("MASTHEAD_ENCRYPTED_ID"),g.x("MASTHEAD_IS_BRANDED")),g.L(window,"message",yO));if("PYV_IFRAME_ID"in g.Ua){var a=g.x("PYV_IFRAME_CONTENT"),b=g.E(g.x("PYV_IFRAME_ID"));b&&(b=g.wk(b),b.open(),b.write("<!DOCTYPE html><html><head></head><body>"+a+"</body></html>"),g.D||b.close())}if(a=g.E("i18n-local-languages-feed-promo"))if(b=g.C(a,"column-name")){var c={gl:g.C(a,"promo-gl")},c=g.Zc(c);
g.Ji("i18n-promo-show",c,void 0);c=g.r(Tka,b);vO.push(g.R(null,"click",g.r(Ska,b),"i18n-local-languages-feed-promo-language-option"),g.R(a,"click",c,"i18n-local-languages-feed-promo-close"))}(a=g.E("page"))&&YO.push(g.R(a,"click",Uka,"multi-question-shelf-feedback"),g.R(a,"click",Vka,"single-question-shelf-feedback"),g.R(a,"click",Wka,"question-shelf-dismissal"));BO=g.R(window.document.body,"click",Yka,"branded-page-related-channels-item-close");CO.push(g.kk(g.Dt,Zka));(a=g.E("feed"))||(a=g.E("browse-items-primary"));
ZO.push(g.z("yt-uix-load-more-success",bla));if(b=g.F("individual-feed"))g.C(b,"feed-name"),g.C(b,"feed-type");g.wE(a);g.x("INIT_AUTOSHARE")&&(a=new HO(g.x("XSRF_TOKEN")),a.addServiceChangedCallback(ala),(b=g.E("facebook-connect-button"))&&a.registerConnectDialogLauncher(b,"facebook",!0),(b=g.E("twitter-connect-button"))&&a.registerConnectDialogLauncher(b,"twitter",!0),(b=g.E("orkut-connect-button"))&&a.registerConnectDialogLauncher(b,"orkut",!0),window.autoshare=a);g.gC();g.PE();(a=uO=g.E("feed"))||
(a=uO=g.E("browse-items-primary"));$O.push(g.R(a,"click",Pka,"feed-item-expander-button"));$O.push(g.R(a,"click",Qka,"feed-item-collapser-button"));aP||(aP=!0,bP.push(g.R(window.document.documentElement,"click",$ka,"yt-uix-toggle-menu-item")));g.nF();UO=g.E("feed-action-alerts");TO=g.F("ajax-alert",UO);LO=g.E("watch-history-pause-button");MO=g.E("watch-history-resume-button");cP=g.E("watch-history-clear-button");QO=g.E("search-history-pause-button");RO=g.E("search-history-resume-button");dP=g.E("search-history-clear-button");
eP.push(g.L(g.E("watch-history-clear-confirm-button"),"click",fla));eP.push(g.L(LO,"click",dla));eP.push(g.L(MO,"click",ela));eP.push(g.L(g.E("search-history-clear-confirm-button"),"click",ila));eP.push(g.L(QO,"click",gla));eP.push(g.L(RO,"click",hla));g.C(cP,"activate-on-load")&&cP&&g.eq.getInstance().show(cP);g.C(dP,"activate-on-load")&&dP&&g.eq.getInstance().show(dP);SO=NO=0;g.x("LOAD_USER_INTERESTS")&&(a=g.F("recommended-interests"),(new VO).na(a))};
var lla=function(){g.Rq(g.TE);g.Sa("DELAYED_EMBED",[]);window.masthead&&(window.masthead.dispose(),g.Nj(window,"message",yO));g.M(vO);vO=[];g.M(YO);YO.length=0;Xka();g.jb(ZO);ZO.length=0;g.zE();g.jb(g.RE);g.RE.length=0;g.M($O);$O.length=0;aP=!1;g.M(bP);bP.length=0;g.pF();g.M(eP);eP.length=0;dP=RO=QO=cP=MO=LO=UO=null;g.VC()};var uO;var $O=[];var vO=[];g.t(wO,g.u);var mla=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;g.f=wO.prototype;g.f.Rx=function(a){a&&a.origin&&mla.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.jv()};g.f.S=function(){wO.J.S.call(this);g.M(this.j);g.M(this.B);this.B=this.j=null};
g.f.jv=function(){g.O("ad_creative_1");g.B("ads-masthead-hide");g.B("yt-dom-content-change");this.C&&g.O("ad_creative_collapse_btn_1");g.N("ad_creative_expand_btn_1");g.K(this.A,"masthead-ad-expanded");xO(this.l);g.Ji("homepage_collapse_masthead_ad",void 0,void 0)};g.f.co=function(){g.N("ad_creative_expand_btn_1");g.ch(g.E("premium-yva"));g.ch(g.E("video-masthead"));g.B("yt-dom-content-change");xO(this.l)};
g.f.LH=function(){g.bk(window.document.getElementById("premium-yva"),"premium-yva-unexpanded","premium-yva-expanded")};g.f.MH=function(){g.bk(window.document.getElementById("premium-yva"),"premium-yva-expanded","premium-yva-unexpanded")};g.f.vw=function(){g.O("premium-yva");g.K(g.E("premium-yva"),"premium-yva-unexpanded")};g.f.yI=function(){var a=g.Me.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();g.Ji("homepage_expand_masthead_ad",void 0,void 0);g.ce(window.document.location.href)};g.m("yt.flash.embed",g.bf,void 0);g.m("yt.www.ads.pyv.pyvHomeAfcCallback",g.cD,void 0);g.m("yt.www.ads.MastheadAd",wO,void 0);wO.prototype.autoCollapsePremiumYva=wO.prototype.vw;wO.prototype.collapse_ad=wO.prototype.jv;wO.prototype.expand_ad=wO.prototype.yI;wO.prototype.userCollapsePremiumYva=wO.prototype.co;wO.prototype.userExpandPremiumYva=wO.prototype.LH;wO.prototype.userUnexpandPremiumYva=wO.prototype.MH;var YO=[];var BO,CO=[],DO=[];var aP=!1,bP=[];g.m("yt.sharing.AutoShare",HO,void 0);HO.prototype.Ja=function(a,b,c,d){g.L(a,"click",(0,g.q)(this.K,this));if(a.id)this.L[a.id]={serviceName:b,connectOnly:c},d&&(this.L[a.id].connectOnlyCallback=d);else throw"Connect dialog launch buttons must have an id.";};HO.prototype.registerConnectDialogLauncher=HO.prototype.Ja;HO.prototype.K=function(a){if(a=this.L[a.currentTarget.id]){var b=a.connectOnly;a.connectOnlyCallback&&(b=(0,a.connectOnlyCallback)());this.F(a.serviceName,b)}};
HO.prototype.handleConnectService=HO.prototype.K;HO.prototype.$=function(){this.l()};HO.prototype.doOnLoad=HO.prototype.$;HO.prototype.U=function(a){this.D.push(a)};HO.prototype.addServiceChangedCallback=HO.prototype.U;HO.prototype.aa=function(a){this.C.push(a)};HO.prototype.addCanConnectCallback=HO.prototype.aa;HO.prototype.$b=function(){return this.A};HO.prototype.getServiceInfo=HO.prototype.$b;
HO.prototype.F=function(a,b){for(var c in this.C)if(!(0,this.C[c])(this,a,b))return;g.T(this.j+"autoshare",{ga:{action_ajax_stats_ping:"1",stat:"connect_has_google",service:a}});c=this.j+"autoshare?action_popup_auth=1&service="+a+"&connect_only="+(b?"true":"false");"facebook"==a&&(c+="&permissions="+(0,window.encodeURIComponent)("read_stream,offline_access,manage_pages,publish_stream"));this.R(c,{height:500,width:860})};HO.prototype.connectService=HO.prototype.F;
HO.prototype.W=function(a,b){var c=(0,g.q)(function(a,c){this.A=g.Gn(c.html_content);this.l();b&&b()},this),d=(0,g.q)(function(){b&&b();this.l()},this),e={action_ajax_connect_service:1};e.return_url=a;g.T(this.j+"autoshare?ajax_connect_service",{format:"XML",method:"POST",postBody:g.Zc(e)+"&"+this.G,T:c,onError:d})};HO.prototype.connectServiceDone=HO.prototype.W;HO.prototype.zb=function(a){this.Y(a)};HO.prototype.disconnectService=HO.prototype.zb;
HO.prototype.Ua=function(a,b){var c=(0,g.q)(function(a,b){this.A=g.Gn(b.html_content);this.l()},this),d=(0,g.q)(function(){this.l()},this),e={action_ajax_set_connect_only:1};e.service=a;e.connect_only=b?"True":"False";g.T(this.j+"autoshare?ajax_set_connect_only",{format:"XML",method:"POST",postBody:g.Zc(e)+"&"+this.G,T:c,onError:d})};HO.prototype.setConnectOnly=HO.prototype.Ua;
HO.prototype.Y=function(a){var b=(0,g.q)(function(a,b){this.A=g.Gn(b.html_content);this.l()},this),c=(0,g.q)(function(){this.l()},this),d={action_ajax_disconnect_service:1};d.service=a;g.T(this.j+"autoshare?ajax_disconnect_service",{format:"XML",method:"POST",postBody:g.Zc(d)+"&"+this.G,T:b,onError:c})};HO.prototype.l=function(){for(var a in this.D)(0,this.D[a])(this)};HO.prototype.R=function(a,b){if(this.B)try{this.B.close()}catch(c){this.B=null}this.B=g.Hj(a,b)};
HO.prototype.Za=function(){this.F("facebook",!this.A.facebook.is_autosharing)};var ZO=[];var NO,SO,UO,TO,LO,MO,cP,QO,RO,dP,eP=[];g.t(VO,g.W);VO.prototype.V=function(){VO.J.V.call(this);this.ea("click","user-interests-recommendation-feedback",this.A)};VO.prototype.A=function(a){var b=g.P(a.target,"user-interests-recommendation-feedback");WO(b);if(b=g.P(a.target,"recommendation"))a=g.xk(b),g.O(b),a?(b=g.F("user-interests-recommendation-impression",a),WO(b),g.N(a)):g.N(this.P("no-recommendations"))};g.m("yt.www.feed.history.onHideClearWatchHistoryDialog",function(){NO++},void 0);g.m("yt.www.feed.history.onHideClearSearchHistoryDialog",function(){SO++},void 0);g.m("yt.www.hats.openGoogleFeedback",g.qF,void 0);g.t(XO,g.rb);XO.prototype.enable=function(){XO.J.enable.call(this)};XO.prototype.disable=function(){XO.J.disable.call(this)};g.tb(new XO);})(_yt_www);
