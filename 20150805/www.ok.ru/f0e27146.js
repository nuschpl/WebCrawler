define(["jquery","OK/logger"],function(au,U){var ar,Z=null,X=null,an="mtLayer",O="mtLayerMain",af="mtLayerBack",aA="mtLayerForward",c="scrollToTopMtLayer",al="media-layer media-layer__topic",j="media-layer_hld",am="mlr_disc",ad="media-layer_close",aw="media-layer_close_ico",d="sticky-plank_cnt",W="media-layer_fixer",ai=310,i=null,H=null,z=null,p=null,b=null,y=null,aD=null,o=null,ax=null,Q=1145,F={id:null,to:75},N="MediaTopicLayerBody",n="layer__disabled",x="invisible",q="data-open-count",g="data-slide-count",aC="data-slide-count-per-open",f=false,av,S,a=false,I={showIfAllowed:function(){},hide:function(){},};function C(aI,aG){var aH=document.getElementById(aI),t;if(!aH){return false;}for(t=0;t<aG.length;t+=1){if(aH.classList.contains(aG[t])){return false;}}return true;}function aa(){return ar.isActive&&!au("#hook_Block_PopLayerMediaTopic").hasClass(n);}function w(){return ar.isActive&&au("#hook_Block_PopLayerMediaTopic").hasClass(n);}function A(t){if(aa()){if(!a&&i[0]!==document.activeElement&&i.find(document.activeElement).length===0){i.focus();a=true;}if(i.find(".__edit").length>0){return;}if(i.find(".tag-box__editable").length>0){return;}if(C("hook_Modal_popLayerModal",[n])){return;}if(C("photoLayerWrapper",[n,x])){return;}if(C("video-poplayer-cnt",[n,x])){return;}if(t.keyCode===39&&o){o.click();OK.stop(t);}else{if(t.keyCode===37&&aD){aD.click();OK.stop(t);}}}}function B(t){if(t){OK.Layers.register(an,function(){R("cr_esc");},undefined,false,A);}else{OK.Layers.remove(an);}}function ab(t,aG){OK.loader.use("OKCustomJs",function(){if(t){B(aG);}if(aG){if(OK.Layers.onLayerShown){OK.Layers.onLayerShown();}}else{if(OK.Layers.onLayerHidden){OK.Layers.onLayerHidden();}}});}function L(){X.toggleClass("__layer",!!ar.isActive);}function az(){var t=al;if(ar.isActive){t+=" __active";}if(ar.isProcess){t+=" __process";}if(ar.redesign){t+=" __redesign";}i.attr("class",t);}function ap(){ab(true,ar.isActive);L();az();if(ar.isActive){r();}}function r(){l(q);i.attr(aC,0);}function aE(){l(g);l(aC);}function l(t){var aG=parseInt(i.attr(t),10);if(isNaN(aG)){aG=0;}i.attr(t,aG+1);}function G(aG){var t=ar.isActive!==aG;ar.isActive=aG;if(t){ap();}else{if(w()){ab(false,true);}}document.getElementById("hook_Block_PopLayerMediaTopic").classList.remove(n);}function aj(t){var aG=ar.isProcess!==t;ar.isProcess=t;if(aG){az();}}function u(t){H.toggleClass("__process",t);}function J(aH,t){var aI=aH.length,aG=aI;while(--aI+1){aH[aI].toggleClass(t);}setTimeout(function(){while(--aG+1){aH[aG].toggleClass(t);}},1);}function D(){if(p){var t=0;au(".comments_i",p).each(function(){var aG=au(this).data("unread");if(aG){t=this.getBoundingClientRect().top;}return !aG;});i.each(function(){this.scrollTop=(t!==0)?this.scrollTop+t:this.scrollHeight;});setTimeout(function(){au(".js-comments_add",p).focus();},50);}}function s(aK,aH,aJ){var aG=au(window),t=aG.height(),aI=aG.width();if(F.id){clearTimeout(F.id);}F.id=setTimeout(function(){J([y,o,aD,ax],W);F.id=null;m();},aK?0:F.to);i.toggleClass("__compact",aI<=Q);i.toggleClass("__min-height",(t<ai));if(aH){D();}if(aJ){ah(aJ);}m();}var T;function m(t,aG){if(ar.redesign){return;}aG=aG||20;if(aG>0){if(b&&z){T&&clearTimeout(T);T=setTimeout(function(){var aH=z.outerWidth();b.css({width:aH});b.parent().css({width:aH});t!==aH&&m(aH,--aG);},50);}else{!z&&(z=i.find("."+j));b=z.find("."+d);m(undefined,--aG);}}}function v(t){if(f){return;}f=true;Z=au(window);X=au(document.body);i=au("#"+an);H=au("#"+O);aD=au("#"+af);o=au("#"+aA);ax=au("#"+c);ar={isActive:i.hasClass("__active"),isProcess:i.hasClass("__process")};z=i.find("."+j);y=z.find("."+ad);y.click(function(aI){var aH="cr_shadow",aG=OK.eventTarget(aI);if(au(aG).hasClass(aw)){aH="cr_close";}R(aH);});if(ar.isActive){ap();if(!ar.isProcess){s(true,t);}}if(t){D();}Z.on("resize.mtLayer",function(){s();});}var e;var Y;var aB;function V(aG,t){if(t==null||t.length==0){return;}OK.historyManager.putItemToCache(aG,t);}function at(aG){if(OK.historyManager.isHistorySupported()){var aH=aG.indexOf("?");if(aH>0){aB=aG.substr(aH+1);Y=aG.substr(0,aH);if(aB.length>0){aB+="&mt.scrollTop="+au(window).scrollTop();}else{aB=null;}V(Y,aB);}else{Y=aG;aB=null;}var aI=M()==Y&&!S;var t;if(!e){if(aI){t=true;}else{if(S){ay(S,true);}}e=M();}else{t=!ar.closeTopicId;}S="";if(!aI){ay(Y,t);}}}function K(){if(!e&&Y==M()){ay(e,true);}e=null;Y=null;aB=null;}function M(){return OK.historyManager.getState();}function ay(aG,t){if(t){OK.historyManager.replaceState(aG);}else{OK.historyManager.pushState(aG);}}function R(aK){a=false;ar.topicId=null;ar.owner=null;var aI=ar.closeTopicId,t=ar.closeOwnerType;ar.closeTopicId=null;ar.closeOwnerType=null;if(aI&&(aK==="cr_esc"||aK==="cr_shadow"||aK==="cr_close"||aK==="cr_fail")){if(aK){ae(aK+"_ct");}setTimeout(function(){if(OK.historyManager.isHistorySupported()){OK.historyManager.back();}else{aq(aI,t,"");}},0);return;}var aH=aa();var aG=false;if(aH){if(e&&Y==M()){if(e==Y){aG=true;OK.historyManager.back();}else{ay(e,true);}}}if(!aG){G(false);aj(false);u(false);k();ak();ax.removeClass("__active __animated");OK.hookModel.setHookContent(N,"");}e=null;if(aK){ae(aK);}i.trigger("mtLayer.close");try{I.hide();}catch(aJ){ae("adsCloseError");}}function ae(t){U.success("mtlayer",av||"",t);}function k(){aD.removeClass("__active");o.removeClass("__active");}function P(t,aG){if(aD){aD.toggleClass("__active",!!t&&!!aG);aD.unbind("click.back").bind("click.back",function(aI){if(aD.hasClass("__active")){var aH=o.hasClass("__active");aq(t,aG,"MT_GoBack_"+aG,false,"","BACK",aH);}OK.stop(aI);});}}function h(t,aG){if(o){o.toggleClass("__active",!!t&&!!aG);o.unbind("click.forward").bind("click.forward",function(aI){if(o.hasClass("__active")){var aH=aD.hasClass("__active");aq(t,aG,"MT_GoForward_"+aG,false,"","FORWARD",aH);}OK.stop(aI);});}}function ah(aH){if(aH){var aI=i.find("[data-scroll-to='"+aH+"']");if(aI.length>0){var aM=aI[0],aL=aM.offsetTop,t=aM.offsetParent;while(t&&t.nodeType===1&&t!==i[0]){aL+=t.offsetTop;t=t.offsetParent;}var aK=i,aJ=aK.height(),aG=aK.scrollTop(),aN=aJ;if(aG+aJ<=aL+aN){aK.scrollTop(aL+aN-aJ-5);}else{if(aG>aL){aK.scrollTop(aL-5);}}}}}function ak(){var t=X;var aG=t.find(".gwt-shortcutMenu__show");if(aG.length){aG.removeClass("gwt-shortcutMenu__show");}var aH=t.find(".sc-menu:not(.sc-menu__hidden,.poll_ans_cnt)");if(aH.length){aH=aH.not("#ownProfileLSMnu");aH.addClass("sc-menu__hidden");}}var aF=[0,1,2,3,5,8,13,21,34,55,89,144,233,377,610];function ao(aG,aI){var aH=(aI-aG)/100;var t;for(t=1;t<aF.length;t++){if(aH<aF[t]){break;}}return aF[t-1]+"00";}function ac(){if(i){i.scrollTop(0);}}function ag(t){if(ar.isProcess){aj(false);}else{u(false);}t&&t();}function E(aI,aP,aL,aS,aT){S=aP;v(aL);var aG=au("#"+N);var aO=aG.attr("data-log");if(aO){ae(aO);}var aH=aG.attr("data-url");if(aH){at(aH);}else{K();}if(ar.closeTopicId||aS){}else{var aK=aG.attr("data-back-id");P(aK,aI);var aJ=aG.attr("data-forward-id");h(aJ,aI);}var aR=aG.attr("data-id");if(aR){ar.topicId=aR;ar.owner=aI;}var t=aG.attr("data-log-click");if(t){i.attr("data-log-click",t);}else{i.removeAttr("data-log-click");}var aN=!!aG.attr("data-redesign");var aQ=ar.redesign;ar.redesign=aN;if(aQ!==aN&&!ar.isProcess){az();}ag(aT);J([o,aD,ax],W);ac();p=z.find("."+am);b=z.find("."+d);var aM=aG.attr("data-scroll-to-marker");s(true,aL,aM);}function aq(aO,aH,aG,aJ,aN,aR,aT,aS,aQ,aM,aP){var aL=+new Date();var aI;v(aJ);if(!aR){ar.closeTopicId=null;ar.closeOwnerType=null;}if(aG&&aG.indexOf("st.mt.or=on")!==-1){aQ=ar.topicId;aM=ar.owner;}if(OK.photoLayer){OK.photoLayer.close();}OK.VideoPlayer.pauseAll();OK.loader.use("OKCustomJs",function(){var aV=OK.Layers.stack;var aW=aV&&aV.length>0&&aV[aV.length-1].id===an;if(!aW&&ar.isActive){B(true);}});function aU(aX){var aW=Date.now();var aV="";if(aX){aV+="r_";}if(aR){aV+="dt";}else{aV+="ot";}ae(aV+ao(aL,aW));if(aI){ae("js_"+aV+ao(aI,aW));}}av=aH;S=aN;if(S){ae("shortlink");}k();if(ar.isActive&&!ar.isProcess){u(true);ak();}else{aj(true);}G(true);var t;if(OK.getCurrentStateLink){t=OK.getCurrentStateLink();}else{t="/dk?"+window.pageCtx.state.replace("&amp;","&");}t+=t.indexOf("?")===-1?"?":"&";t=t.replace(/st\.mt\.(id|ot|bi|dir|hn).*?(&|$)/g,"");t+="cmd="+N+"&st._aid="+aG;var aK=au.ajax({type:"POST",url:t,data:{"gwt.requested":window.pageCtx.gwtHash,"st.mt.id":aO,"st.mt.ot":aH,"st.mt.dir":aR,"st.mt.wc":aS?"on":"off","st.mt.hn":aP?"on":"off"},headers:{TKN:OK.tkn.get()}});aK.done(function(aX,aV,a4){aI=Date.now();if(aQ){ar.closeTopicId=aQ;ar.closeOwnerType=aM;}var a0=a4.getResponseHeader("Redirect-Location");if(a0){var a1=function(a5){if(OK.navigation.redirect){OK.navigation.redirect(a0);}if(a5===0||OK.navigation.redirect){R();aU();}else{setTimeout(function(){a1(a5-1);},200);}};a1(5);}else{var aY=a4.getResponseHeader("End-Reached");if(aY==="yes"){if(aR==="FORWARD"){if(aT){aD.toggleClass("__active",true);}}else{if(aR=="BACK"){if(aT){o.toggleClass("__active",true);}}}ag(aU);return;}var aZ=aX.split(OK.navigation.SPLITER),a2=a4.getResponseHeader(OK.navigation.HEADER).split(",");for(var aW=0;aW<aZ.length;aW++){if(a2[aW]){OK.hookModel.setHookContent(a2[aW],aZ[aW]);}}if(aR){aE();}try{I.showIfAllowed();}catch(a3){ae("adsOpenError");}E(aH,S,aJ,aP,aU);}});aK.fail(function(){R("cr_fail");aU();});return aK;}return{show:function(){v();G(true);ac();},showPreloaded:E,showTopicInLayer:aq,closeLayer:function(){if(f){R();}},hideLayer:function(){a=false;if(ar&&ar.isActive){if(e&&M()==Y){ay(e,true);}ab(false,false);}},restoreLayer:function(){if(ar&&ar.isActive){J([y,o,aD,ax],W);if(e&&M()!==Y){ay(Y,true);}ab(false,true);}},refreshLayerBody:function(aI){function t(){if(aI){aI();}}if(!ar||!ar.topicId||!ar.owner){t();return;}var aG="/";if(OK.getCurrentStateLink){aG=OK.getCurrentStateLink();}aG+=aG.indexOf("?")===-1?"?":"&";aG+="cmd="+N+"&st._aid=PLPhotoUserBackToView";var aH=au.ajax({type:"POST",url:aG,data:{"gwt.requested":window.pageCtx.gwtHash,"st.mt.id":ar.topicId,"st.mt.ot":ar.owner},headers:{TKN:OK.tkn.get()}});aH.done(function(aN,aP,aO){var aK=aO.getResponseHeader("Redirect-Location");if(aK){if(OK.navigation.redirect){OK.navigation.redirect(aK);}R();}else{var aJ=aN.split(OK.navigation.SPLITER),aM=aO.getResponseHeader(OK.navigation.HEADER).split(",");for(var aL=0;aL<aJ.length;aL++){if(aM[aL]){OK.hookModel.setHookContent(aM[aL],aJ[aL]);}}}t();});aH.fail(t);},deactivate:function(){au(window).off(".mtLayer");G(false);},isActiveAndNotHidden:function(){if(!f){return false;}return aa();},adsHandlers:function(){return I;},logAdsOpen:function(){ae("adsOpen");}};});