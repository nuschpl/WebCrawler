if(typeof(FKART)=="undefined"){FKART={}}FKART.AppOffer=new function(){var a=[],b=[];this.clearList=function(){a=[];b=[]};this.addAppOnly=function(c){if(a.indexOf(c)==-1){a.push(c);fk_appoffer.updateTopBanner()}};this.addOpenFsn=function(c){if(b.indexOf(c)==-1){b.push(c);fk_appoffer.updateTopBanner()}};this.updateTopBanner=function(){if(a.length===0){$("#fk-header").removeClass("banner-open");$(".fk-header-banner").slideUp("slow")}else{if(!$("#fk-header").hasClass("banner-open")){$("#fk-header").addClass("banner-open");$(".fk-header-banner").slideDown("slow")}}if(b.length===0){$(".fk-header-banner .apponly-text-some").hide();$(".fk-header-banner .apponly-text-all").show()}else{$(".fk-header-banner .apponly-text-all").hide();$(".fk-header-banner .apponly-text-some").show()}};this.updateUrl=function(){$(".fk-header-banner .app-link").data("url",window.location.pathname+window.location.search);$(".fk-header-banner .app-link").data("title",document.title)}};fk_appoffer=FKART.AppOffer;register_controller("AppOffersCtrl",function(U){var r=$(U),n=$(".app-link",r),H=$(".app-offers-button",r),J=$(".app-offers-container",r),Q=$(".appOnlyDialog-popup-content",r),ad=$(".fk-question-mark",r),F,ai,ab,C,y,ac,t,N,ah,al,S,a,z,h,E,K,i,aa,w,M,v,L,j,P,D=false,aj,W,l,x,R,I,ak,O,B,k,c=false;function p(){H.click(function(){if(!c){f("Opened");$(this).addClass("open");ad.text("X");setTimeout(function(){J.slideDown(200);c=true},150)}else{f("Closed");J.slideUp(200,function(){H.removeClass("open");ad.text("?");c=false})}});n.click(function(am){f("Clicked");X($(this));q();am.preventDefault()})}function q(){al=null;ae();if(!FKART.login.isUserLoggedIn()){t.hide();e()}else{B=setTimeout(function(){$.ajax({url:"/lc/sendPushNotificationForAccount",data:{pid:W,lid:l,sid:x,offerid:aj,title:R,subtitle:I},type:"POST",dataType:"json",success:function(am){if(am.deviceFound&&am.notificationSent){G()}else{V()}},error:function(){V()}})},7000)}}function f(an){var am={};if(an=="Clicked"){am.products=s.products}am.prop21="OpenInApp_"+an;FKART.omni.customEvent("App only offers",am)}function G(){g();t.hide();if(ak&&ak.length>0){var am=$("<img>");am.attr("src",ak);ab.append(am)}else{ab.remove()}ai.show();A();f("PNSent")}function V(){g();t.hide();C.show();e();f("PNFailed")}function ae(){al=new FKART.ui.Dialog({showFooter:false,cssClass:"appOnlyDialog",body:Q.html(),destroyOnHide:true,width:"500px"});a=al.getContainer();t=a.find(".loadingDiv");F=a.find(".smsDiv");ai=a.find(".successDiv");ab=ai.find(".phone-image span");E=a.find(".smsForm");S=a.find(".successPrefixDiv");C=a.find(".errorDiv");N=a.find(".send-sms-fake-link");ah=a.find(".send-sms-link");k=a.find(".timer");z=a.find(".retry-notification");al.show();d()}function d(){a.on("beforeHide",function(am){ag();g();D=false});ah.click(function(){ai.hide();S.show();e();f("PNExpired")});z.click(function(){al.hide();q();f("PNReTried")})}function Z(){j=L.val();if(!(/^[789]\d{9}$/.test(j))){L.addClass("error").val("").attr("placeholder","Invalid Number").focus();return}else{$.ajax({url:"/lc/sendSMSForNumber",type:"POST",data:{pid:W,lid:l,sid:x,offerid:aj,title:R,subtitle:I,phoneNumber:j,captchaText:w.val(),captchaId:M.attr("id")},dataType:"json",success:function(am){if(am.captchaStatus){if(am.smsStatus){Y()}else{u()}}else{o()}},error:function(){u()}})}}function o(){m();w.addClass("error").val("").attr("placeholder","Invalid Captcha").focus()}function Y(){i.hide();E.hide();v.html(j);y.show();f("SMSSent")}function u(){i.hide();E.hide();v.html(j);ac.show();f("SMSFailed")}function e(){L=E.find(".phoneNumber");j=FKART.login.userPhoneNumber;L.val(j);K=E.find("input[type=submit]");i=F.find(".infoDiv");y=F.find(".smsSuccessDiv");ac=F.find(".smsErrorDiv");h=F.find(".retry-sms");aa=E.find(".captchaDiv");w=E.find(".captchaText");P=E.find(".refreshCaptcha");v=F.find(".phone_number");if(/^\d{10}$/.test(j)){D=true;m()}F.show();al.reposition();T()}function T(){P.click(function(){m();w.val("").focus()});E.submit(function(am){Z();f("SMSTried");am.preventDefault()});h.click(function(){i.show();E.show();ac.hide();w.removeClass("error").val("").attr("placeholder","Captcha text").focus();m();f("SMSReTried")});L.focus(function(){f("PhoneNumberFocused");if(!D){D=true;m()}})}function m(){$.ajax({url:"/lc/generateCaptcha",type:"POST",dataType:"json",success:function(am){if(am.success){M=aa.find("img");M.attr("src","data:image/png;base64,"+am.captchaBytes);M.attr("id",am.id);aa.show();w.show();M.load(function(){if(this.complete){al.reposition()}})}else{aa.find("img").attr("alt","Captcha failed to load")}},error:function(){aa.find("img").attr("alt","Captcha failed to load")}})}function ag(){clearInterval(O);O=null}function g(){clearInterval(B);B=null}function A(){O=setInterval(function(){var am=parseInt(k.html());if(am==0){ag();N.hide();ah.show()}k.html(am-1)},1000)}function b(an,am){var aq=an.split("?")[1];var ap=aq.split("&");for(var ao=0;ao<ap.length;ao++){var ar=ap[ao].split("=");if(ar[0]==am){return ar[1]}}}function X(am){ak=am.data("image");if(am.data("pid")){W=am.data("pid").toString();if(am.data("lid")){l=am.data("lid").toString()}aj=am.data("offerid")}else{x=b(am.data("url"),"sid");W=b(am.data("url"),"pid");aj=b(am.data("url"),"offer");R=am.data("title");I=am.data("subtitle")}}function af(){p()}af()});