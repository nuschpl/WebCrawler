/*!CK:4016483032!*//*1437364714,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["b9YNM"]); }

__d("ActorSelectorNuxTypes",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"};},null);
__d("AbstractPopoverButton.react",["React","URI","cloneWithProps","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=g,m=l.PropTypes,n=g.createClass({displayName:"AbstractPopoverButton",propTypes:{config:m.object.isRequired,haschevron:m.bool,maxwidth:m.number},getDefaultProps:function(){return {haschevron:true};},render:function(){var o=this.props.config,p={},q=o.defaultMaxWidth;if(typeof this.props.maxwidth!=='undefined')q=this.props.maxwidth;var r=null;if(q){var s=this.props.haschevron?q-o.chevronWidth:q;if(this.props.label)r={maxWidth:s+'px'};p.style=Object.assign({},p.style,{maxWidth:q+'px'});}p.image=null;var t=null;if(this.props.image&&this.props.label){t=i(this.props.image,{className:"_3-8_"});}else if(this.props.image)t=this.props.image;if(t||this.props.label)p.label=g.createElement("span",{className:"_55pe",style:r},t,this.props.label);if(this.props.haschevron)p.imageRight=o.chevron;p.className=k(o.button.props.className,"_2agf");p.href=new h('#');return i(o.button,p);}});e.exports=n;},null);
__d("XUIPopoverButton.react",["AbstractPopoverButton.react","Image.react","React","XUIButton.react","cx","ix","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=i,o=n.PropTypes,p=i.createClass({displayName:"ReactXUIPopoverButton",propTypes:{haschevron:o.bool,maxwidth:o.number},statics:{getButtonSize:function(q){return q.size||'medium';}},render:function(){var q=p.getButtonSize(this.props),r="_55pi";if(this.props.theme==='dark')r=m(r,(("_5vto")+(q==='small'?' '+"_55_o":'')+(q==='medium'?' '+"_55_p":'')+(q==='large'?' '+"_55_q":'')+(q==='xlarge'?' '+"_55_r":'')+(q==='xxlarge'?' '+"_55_s":'')));var s=this.props.chevron;if(!s){var t=this.props.theme==='dark'||this.props.use==='confirm'||this.props.use==='special'?l('/images/ui/x/button/dark/chevron.png'):l('/images/ui/x/button/normal/chevron.png');s=i.createElement(h,{src:t});}var u={button:i.createElement(j,i.__spread({},this.props,{className:m(this.props.className,r),size:q})),chevron:s,chevronWidth:14,defaultMaxWidth:this.props.maxwidth||200};return (i.createElement(g,{config:u,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,maxwidth:this.props.maxwidth}));}});e.exports=p;},null);
__d("ActorSelectorPlaceholder.react",["Image.react","React","TooltipData","XUIPopoverButton.react","cx","fbt","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=h.createClass({displayName:"ActorSelectorPlaceholder",getDefaultProps:function(){return {onActivate:function(){}};},componentDidMount:function(){if(this.props.focusOnInit&&this.refs['open-menu-button'])h.findDOMNode(this.refs['open-menu-button']).focus();var o=l._("Like or comment as one of the Pages you manage.");i.set(h.findDOMNode(this.refs['open-menu-button']),o,'above','right');},render:function(){return (h.createElement(j,{className:"_4z8-",haschevron:false,image:h.createElement(g,{width:16,height:16,src:m('images/pages/voice/flag.png')}),onFocus:function(){return this.props.onActivate(true);}.bind(this),onMouseOver:function(){return this.props.onActivate(false);}.bind(this),ref:"open-menu-button",suppressed:true,type:"button"}));}});e.exports=n;},null);
__d("HasLayerContextMixin",["React"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={getContextNode:function(){var i=this.props.context;if(this.props.contextRef){var j=this.props.contextRef();i=j&&g.findDOMNode(j);}return i;}};e.exports=h;},null);
__d("XUIContextualDialogBody.react",["React"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=g.createClass({displayName:"XUIContextualDialogBody",render:function(){return (g.createElement("div",{className:this.props.className},this.props.children));}});e.exports=h;},null);
__d("XUIOverlayFooter.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.createClass({displayName:"XUIOverlayFooter",render:function(){return (g.createElement("div",g.__spread({},this.props,{className:i(this.props.className,"_5lnf uiOverlayFooter")}),this.props.children));}});e.exports=j;},null);
__d("XUIContextualDialogFooter.react",["React","XUIOverlayFooter.react","cx"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.createClass({displayName:"XUIContextualDialogFooter",render:function(){return (g.createElement(h,{className:"_572u"},this.props.children));}});e.exports=j;},null);
__d("XUIContextualDialogTitle.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g,k=j.PropTypes,l=g.createClass({displayName:"XUIContextualDialogTitle",propTypes:{use:k.oneOf(['primary','secondary'])},getDefaultProps:function(){return {use:'primary'};},render:function(){var m=this.props.use,n=i((("_47lu")+(m==='primary'?' '+"_47lv":'')+(m==='secondary'?' '+"_47mc":'')),this.props.className);return (g.createElement("h3",{className:n},this.props.children));}});e.exports=l;},null);
__d("XUIContextualDialog.react",["HasLayerContextMixin","ContextualDialogXUITheme","React","ReactAbstractContextualDialog","ReactLayer","XUIContextualDialogBody.react","XUIContextualDialogFooter.react","XUIContextualDialogTitle.react","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=i,q=p.PropTypes,r=k.createClass(j.createSpec({displayName:'ReactXUIContextualDialog',theme:h})),s=i.createClass({displayName:"XUIContextualDialog",mixins:[g],propTypes:{position:q.oneOf(['above','below','left','right']),alignment:q.oneOf(['left','center','right']),offsetX:q.number,offsetY:q.number,width:q.number,autoFocus:q.bool,arrowBehavior:q.func,behaviors:q.object,shown:q.bool,context:q.object,contextRef:q.func,hoverContext:q.object,hoverContextRef:q.func,hoverShowDelay:q.number,hoverHideDelay:q.number,hideOnEscape:q.bool,onToggle:q.func,hasActionableContext:q.bool},getDefaultProps:function(){return {hasActionableContext:false,hideOnEscape:true};},_getDialogBody:function(){return this._getChildOfType(l);},_getDialogTitle:function(){return this._getChildOfType(n);},_getDialogFooter:function(){return this._getChildOfType(m);},_getChildOfType:function(t){var u=null;i.Children.forEach(this.props.children,function(v){if(!u&&v.type===t)u=v;});return u;},updatePosition:function(){var t=this.refs.dialog;if(t)t.layer.updatePosition();},render:function(){var t=this.props.children,u=this._getDialogBody();if(u)t=i.createElement("div",{className:"_53iv"},this._getDialogTitle(),u);return (i.createElement(r,i.__spread({},this.props,{ref:"dialog",context:this.getContextNode()}),t,u?this._getDialogFooter():null));}});s.WIDTH={NORMAL:312,WIDE:400};e.exports=s;},null);
__d("XUIDialogFooter.react",["LeftRight.react","React","XUIOverlayFooter.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=h,m=l.PropTypes,n=h.createClass({displayName:"XUIDialogFooter",propTypes:{fullBleedBorder:m.bool,leftContent:m.object},render:function(){var o=(("_5a8u")+(this.props.fullBleedBorder?' '+"_27qq":''));return (h.createElement(i,h.__spread({},this.props,{className:k(this.props.className,o)}),h.createElement("div",{className:"_50f4"},h.createElement(g,null,h.createElement("div",null,this.props.leftContent),h.createElement("div",null,this.props.children)))));}});e.exports=n;},null);
__d("XUIDialogButton.react",["React","XUIButton.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=g,l=k.PropTypes,m=g.createClass({displayName:"XUIDialogButton",propTypes:{action:l.oneOf(['cancel','confirm','button'])},render:function(){var n=this.props.action,o=((n=='confirm'?"layerConfirm":'')+(n=='cancel'?' '+"layerCancel":'')+(n=='button'?' '+"layerButton":'')),p=this.props.href;if(n=='cancel'){p='#';}else if(n=='button')p=p||'#';return (g.createElement(h,g.__spread({},this.props,{className:j(this.props.className,o),href:p})));}});e.exports=m;},null);
__d("XUIDialogOkayButton.react",["React","XUIDialogButton.react","cx","fbt","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=g,m=l.PropTypes,n=g.createClass({displayName:"XUIDialogOkayButton",propTypes:{action:m.oneOf(['confirm','cancel','button']).isRequired},render:function(){return (g.createElement(h,g.__spread({},this.props,{className:k(this.props.className,"_2z1w"),action:this.props.action,label:j._("OK")})));}});e.exports=n;},null);
__d("XUIMenuSeparator.react",["MenuSeparator.react"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=g;e.exports=h;},null);
__d("ReactSelectorUtils",["React"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={processMenuItems:function(i,j){var k,l=g.Children.map(i,function(m){if(m){var n=m.props.value===j;m=g.cloneElement(m,{selected:n});if(n)k=m;return m;}});return {items:l,selectedItem:k};},processMultiMenuItems:function(i,j){var k=[],l=i;if(j)l=g.Children.map(i,function(m){if(m){var n=j.some(function(o){return o===m.props.value;});m=g.cloneElement(m,{selected:n});if(n)k.push(m);return m;}});return {items:l,selectedItems:k};}};e.exports=h;},null);
__d("PopoverMenuContextMinWidth",["CSS","Style","cx","shield"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l){"use strict";this._popoverMenu=l;this._popover=l.getPopover();}k.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',j(this._onSetMenu,this));};k.prototype.disable=function(){"use strict";this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};k.prototype._onSetMenu=function(){"use strict";this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',j(this._updateWidth,this));var l=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(l,0);});this._updateWidth();};k.prototype._updateWidth=function(){"use strict";var l=this._menu.getRoot(),m=this._popoverMenu.getTriggerElem(),n=m.offsetWidth;h.set(l,'min-width',n+'px');g.conditionClass(l,"_575s",n>=l.offsetWidth);};Object.assign(k.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});e.exports=k;},null);
__d("PopoverMenuOverlappingBorder",["CSS","DOM","Style","cx","shield"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m){"use strict";this._popoverMenu=m;this._popover=m.getPopover();this._triggerElem=m.getTriggerElem();}l.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',k(this._onSetMenu,this));};l.prototype.disable=function(){"use strict";this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeBorderSubscriptions();this._removeShortBorder();};l.prototype._onSetMenu=function(){"use strict";this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe('show',k(this._updateBorder,this));var m=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(m,0);});this._updateBorder();};l.prototype._updateBorder=function(){"use strict";var m=this._menu.getRoot(),n=this._triggerElem.offsetWidth,o=Math.max(m.offsetWidth-n,0);i.set(this._shortBorder,'width',o+'px');};l.prototype._renderShortBorder=function(m){"use strict";this._shortBorder=h.create('div',{className:"_54hx"});h.appendContent(m,this._shortBorder);g.addClass(m,"_54hy");};l.prototype._removeShortBorder=function(){"use strict";if(this._shortBorder){h.remove(this._shortBorder);this._shortBorder=null;g.removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy");}};l.prototype._removeBorderSubscriptions=function(){"use strict";if(this._showSubscription){this._popover.unsubscribe(this._showSubscription);this._showSubscription=null;}if(this._menuSubscription){this._menu.unsubscribe(this._menuSubscription);this._menuSubscription=null;}};Object.assign(l.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});e.exports=l;},null);
__d("AbstractSelector.react",["InlineBlock.react","React","PopoverMenu.react","ReactSelectorUtils","ContextualLayerAutoFlip","PopoverMenuContextMinWidth","PopoverMenuOverlappingBorder","cloneWithProps","cx","invariant","joinClasses","intlList"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s=h,t=s.PropTypes;function u(w,x,y){if(w[x]==null)return;var z=Array.isArray(w[x]);if(w.multiple){if(!z)return new Error('You are trying to set a single value for `'+x+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(z)return new Error('You are trying to set an array of values for `'+x+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var v=h.createClass({displayName:"AbstractSelector",propTypes:{config:t.object.isRequired,alignh:t.oneOf(['left','center','right']),name:t.string,overlappingborder:t.bool,onChange:t.func,disabled:t.bool,maxheight:t.number,multiple:t.bool,defaultLabel:t.string,defaultValue:u,value:u,initialValue:u},getInitialState:function(){return {value:(this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue)};},setMenuValue:function(w){p(this.refs&&this.refs.popover);this._internalChange=true;this.refs.popover.getMenu().setValue(w);this._internalChange=false;},onChange:function(w,x){if(this._internalChange)return;if(this.props.value==null){var y=null;if(this.props.multiple){y=x.map(function(z){return z.value;});}else y=x.value;this.setState({value:y});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(x);},componentWillReceiveProps:function(w){if(w.value!=null){this.setState({value:w.value});}else if(this.props.multiple!==w.multiple)this.setState({value:w.multiple?[this.state.value]:this.state.value[0]});},render:function(){var w=this.props.config,x=!this.props.multiple?j.processMenuItems(this.props.children,this.state.value):j.processMultiMenuItems(this.props.children,this.state.value),y=n(w.menu,{children:x.items,className:q("_575t",w.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),z='',aa=null;if(!this.props.multiple){var ba=x.selectedItem;z=ba.props.label||ba.props.children;if(ba.props.icon)aa=n(ba.props.icon,{});}else{var ca=x.selectedItems;if(!ca.length){z=this.props.defaultLabel;}else z=r(ca.map(function(ka){return ka.props.children;}),r.CONJUNCTIONS.NONE);}var da={label:z,disabled:this.props.disabled};if(aa)da.image=aa;var ea=n(w.button,da),fa=[k];if(w.layerBehaviors)fa=fa.concat(w.layerBehaviors);var ga=[l];if(this.props.overlappingborder)ga.push(m);var ha=null;if(this.props.multiple){var ia=this.props.name+'[]',ja;if(this.state.value)ja=this.state.value.map(function(ka){return (h.createElement("input",{key:ka,type:"hidden",name:ia,value:ka}));});ha=h.createElement("div",null,ja);}else ha=h.createElement("input",{type:"hidden",name:this.props.name,value:this.state.value});return (h.createElement(g,h.__spread({},this.props,{alignv:"middle",name:null}),h.createElement(i,{ref:"popover",menu:y,alignh:this.props.alignh,layerBehaviors:fa,behaviors:ga,disabled:this.props.disabled},ea),ha));},showMenu:function(){p(this.isMounted());this.refs.popover.showPopover();},hideMenu:function(){p(this.isMounted());this.refs.popover.hidePopover();}});e.exports=v;},null);
__d("XUISelectorButton.react",["React","XUIPopoverButton.react","invariant"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.createClass({displayName:"XUISelectorButton",render:function(){i(!this.props.theme);return (g.createElement(h,g.__spread({},this.props,{theme:"dark"})));}});e.exports=j;},null);
__d("XUISelector.react",["AbstractSelector.react","ContextualLayerPositionClassOnContext","React","ReactChildren","ReactXUIMenu","XUISelectorButton.react","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=k.SelectableMenu,o=k.SelectableItem,p=i,q=p.PropTypes,r=i.createClass({displayName:"ReactXUISelector",propTypes:{layerBehaviors:q.array,maxheight:q.number,multiple:q.bool,disabled:q.bool,haschevron:q.bool,maxwidth:q.number,size:q.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:q.bool,use:q.oneOf(['default','special','confirm'])},statics:{getButtonSize:function(s){return s.size||'medium';}},getDefaultProps:function(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function(){var s,t=[];j.forEach(this.props.children,function(v){if(v)t.push(v);});if(t[0]&&t[0].type===l){s=t[0];t=t.slice(1);}else s=i.createElement(l,{haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var u={button:s,menu:i.createElement(n,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([h])};return (i.createElement(g,i.__spread({},this.props,{ref:"abstractSelector",config:u}),t));},showMenu:function(){m(this.isMounted());this.refs.abstractSelector.showMenu();},hideMenu:function(){m(this.isMounted());this.refs.abstractSelector.hideMenu();}});r.Option=o;e.exports=r;},null);
__d("ActorSelector.react",["ActorSelectorPlaceholder.react","BizSiteIdentifier.brands","BootloadedComponent.react","Bootloader","CurrentUser","DOM","DOMScroll","Event","Focus","Image.react","JSResource","LayerFadeOnHide","LayerFadeOnShow","ModulePerformanceGating","React","ReactLayeredComponentMixin","ShortProfiles","TooltipData","XUIContextualDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIMenuSeparator.react","XUISelector.react","XUISpinner.react","cx","fbt","getObjectValues","goURI","ix","joinClasses","mapObject","tidyEvent","BrandsAppConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma){b.__markCompiled&&b.__markCompiled();var na=da.Option,oa=b('BrandsAppConfig').gk;if(!t.bootload_page_voice_dropdown)j.loadModules(["PageVoiceDropdownSelector.react"],function(){});var pa=u,qa=pa.PropTypes,ra=32,sa=195,ta=500,ua=175,va=16,wa=u.createClass({displayName:"ActorSelector",mixins:[v],propTypes:{actorIDs:qa.array.isRequired,actorPermissions:qa.object,coverEnabled:qa.bool.isRequired,focusOnInit:qa.bool,loading:qa.bool,nuxBody:qa.node,nuxEnabledCovered:qa.bool,nuxEnabledUncovered:qa.bool,nuxHoverContext:qa.object,onChange:qa.func.isRequired,onCompleteNux:qa.func,selectedActorID:qa.string,settingsURI:qa.string,showName:qa.bool,showNameMaxWidth:qa.number,suppressed:qa.bool,tooltipConstructor:qa.func,tooltipConstructorCovered:qa.func},getDefaultProps:function(){return {suppressed:true};},getInitialState:function(){return {actorData:{},clicked:false,nuxShown:false};},componentWillMount:function(){this._fetchActorData();},render:function(){var xa=oa.business_identity_page_voice_selector;if(!this.props.selectedActorID||!this.state.actorData[this.props.selectedActorID])return u.createElement(g,{focusOnInit:this.props.focusOnInit});var ya=this._renderSelectorOptions();if(ya.length<1)return u.createElement("div",null);if(xa){return this._renderNewComponent();}else return this._renderOldComponent(ya);},_renderOldComponent:function(xa){var ya=this._isCovered();return (u.createElement("span",{className:ka("_6vh",this.props.className)},u.createElement(ea,{className:((!this.props.loading?"hidden_elem":'')+(!this.props.suppressed?' '+"_3-8_":''))}),u.createElement(da,{haschevron:!ya,className:"_6vi",disabled:this.props.loading,maxheight:sa,maxwidth:ya?va:this.props.showName?this.props.showNameMaxWidth:ra,onChange:this.props.onChange,onClick:this._onClickSelector,ref:"selector",suppressed:this.props.suppressed,value:this.props.selectedActorID},xa)));},_renderNewComponent:function(){return (u.createElement("span",{className:ka("_6vh",this.props.className)},u.createElement(ea,{className:((!this.props.loading?"hidden_elem":'')+(' '+"_3-8_"))}),u.createElement("span",{ref:"selector"},u.createElement(i,{bootloadPlaceholder:u.createElement(g,{focusOnInit:this.props.focusOnInit}),bootloadLoader:q('PageVoiceDropdownSelector.react'),covered:this._isCovered(),focusOnInit:this.props.focusOnInit,permissions:this.props.actorPermissions,pages:this.state.actorData,onChange:this.props.onChange,onClick:this._onClickSelector,selectedActorID:this.props.selectedActorID,searchBarVisible:true,showBusinessPages:false,showPageName:this.props.showName,showNameMaxWidth:this.props.showNameMaxWidth,showPersonalPagesInRoot:!h.isBizSite(),suppressed:this.props.suppressed,user:ha(this.state.actorData)[0]}))));},renderLayers:function(){if(!this.refs.selector)return null;var xa=null;if(this.props.settingsURI)xa=u.createElement("a",{onClick:this._onClickSettings,style:{verticalAlign:'middle'}},ga._("Post Attribution Settings"));if(this.state.nuxShown)m.ensureVisible(u.findDOMNode(this.refs.selector),null,ua);return {nux:u.createElement(y,{alignment:"right",behaviors:{LayerFadeOnHide:r,LayerFadeOnShow:s},contextRef:function(){return this.refs.selector;}.bind(this),hasActionableContext:true,offsetY:-8,position:"below",shown:this.state.nuxShown,width:y.WIDTH.NORMAL},u.createElement(z,null,this.props.nuxBody),u.createElement(aa,{leftContent:xa},u.createElement(ba,{action:"button",use:"confirm",onClick:this._onCompleteNux})))};},_renderSelectorOptions:function(){var xa=[],ya=[];this.props.actorIDs.map(function(db){if(this._isBusinessManagedActor(db)){ya.push(db);}else xa.push(db);}.bind(this));var za=xa.map(this._renderActorOption);if(ya&&ya.length>0){var ab=[],bb=(u.createElement(p,{src:ja('/images/bizsite/busmgr_bookmark_icon_16px.png'),alt:""})),cb=this._groupActorIDsByBusinessID(ya);la(cb,function(db,eb){ab.push(u.createElement(ca,{key:'separator_'+eb}));var fb=ha(cb[eb])[0],gb=fb?this.state.actorData[fb].businessName:eb;ab.push(u.createElement(na,{disabled:true,icon:bb,key:'option_'+eb},gb));la(db,function(hb){ab.push(this._renderActorOption(hb));}.bind(this));}.bind(this));}za=za.concat(ab);return za;},_renderActorOption:function(xa){var ya=this._isCovered(),za=this.state.actorData[xa];if(!za)return;var ab=!!za.businessID,bb=u.createElement(p,{className:"_6vg",height:va,src:ya&&k.getID()===xa?ja('images/pages/voice/flag.png'):za.thumbSrc,width:va,alt:""});return (u.createElement(na,{className:((ab?"plm":'')),icon:bb,key:'actor_'+xa,value:xa},za.name));},componentDidMount:function(){this._setTooltip();if(this.props.focusOnInit)this._focusSelector();if(this._canShowNux())if(this.props.nuxHoverContext){var xa=ma(n.listen(this.props.nuxHoverContext,'mouseenter',function(){var ya=setTimeout(function(){xa.remove();if(this._canShowNux())this.setState({nuxShown:true});}.bind(this),ta),za=ma(n.listen(this.props.nuxHoverContext,'mouseleave',function(){clearTimeout(ya);za.remove();}));}.bind(this)));}else this.setState({nuxShown:true});},componentDidUpdate:function(xa){if(this.state.focusOnUpdate){this._focusSelector();this.setState({focusOnUpdate:false});}if(this.props.actorIDs.toString()!==xa.actorIDs.toString())this._fetchActorData();this._setTooltip();},_focusSelector:function(){var xa=this.refs.selector&&u.findDOMNode(this.refs.selector);if(!xa)return;var ya=l.scry(xa,'a').pop();o.set(ya);},_canShowNux:function(){return (this.props.nuxEnabledCovered&&this._isCovered())||(this.props.nuxEnabledUncovered&&!this._isCovered());},_fetchActorData:function(){w.getMulti(this.props.actorIDs,function(xa){this.setState({actorData:xa,focusOnUpdate:this.props.focusOnInit});}.bind(this));},_isCovered:function(){return (this.props.coverEnabled&&!this.state.clicked&&k.getID()===this.props.selectedActorID);},_onClickSelector:function(){this.setState({clicked:true});if(this.state.nuxShown)this._onCompleteNux();},_onClickSettings:function(){this._onCompleteNux();ia(this.props.settingsURI);},_onCompleteNux:function(){this.setState({nuxShown:false});if(this.props.onCompleteNux)this.props.onCompleteNux({isCovered:this._isCovered()});},_setTooltip:function(){if(!this.refs.selector)return;var xa=this.state.actorData[this.props.selectedActorID];if(!xa)return;var ya=this._isCovered()&&this.props.tooltipConstructorCovered?this.props.tooltipConstructorCovered:this.props.tooltipConstructor;if(!ya)return;x.set(u.findDOMNode(this.refs.selector),ya(xa.name),'above','right');},_isBusinessManagedActor:function(xa){return (this.state.actorData[xa]&&this.state.actorData[xa].businessID);},_groupActorIDsByBusinessID:function(xa){var ya={};xa.forEach(function(za,ab){var bb=this.state.actorData[ab]?this.state.actorData[ab].businessID:null;if(bb){if(!za[bb])za[bb]={};za[bb][ab]=ab;}}.bind(this,ya));return ya;}});e.exports=wa;},null);
__d("XActorSelectorNuxSeenWriteController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}});},null);
__d("UFIActorSelector.react",["ActorSelector.react","ActorSelectorNuxTypes","Arbiter","AsyncRequest","Parent","React","SubscriptionsHandler","UFICentralUpdates","UFIFeedbackTargets","UFIUserActions","XActorSelectorNuxSeenWriteController","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s=l,t=s.PropTypes,u='ufi_actor_selector_nux_disabled_event',v=l.createClass({displayName:"UFIActorSelector",propTypes:{actorIDs:t.array.isRequired,coverEnabled:t.bool.isRequired,ftEntIdentifier:t.string.isRequired,isTimeline:t.bool,nuxEnabledCovered:t.bool,nuxEnabledUncovered:t.bool,nuxHoverContext:t.object,settingsURI:t.string},getInitialState:function(){var w=k.byClass(this.props.nuxHoverContext,'timelineUnitContainer');return {loading:false,nuxEnabledCovered:this.props.nuxEnabledCovered,nuxEnabledUncovered:this.props.nuxEnabledUncovered,nuxHoverContext:w?w:this.props.nuxHoverContext,selectedActorID:null};},render:function(){return (l.createElement(g,{actorIDs:this.props.actorIDs,coverEnabled:this.props.coverEnabled,focusOnInit:this.props.focusOnInit,loading:this.state.loading,nuxBody:this._getNUXBody(),nuxEnabledCovered:this.state.nuxEnabledCovered,nuxEnabledUncovered:this.state.nuxEnabledUncovered,nuxHoverContext:this.state.nuxHoverContext,onChange:this._onChange,onCompleteNux:this._onCompleteNux,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName,tooltipConstructorCovered:this._getCoveredTooltip}));},componentDidMount:function(){this._updateSelectedActorIDFromFeedbackTarget();this._subscriptions=new m();this._subscriptions.addSubscriptions(n.subscribe('feedback-updated',function(w,x){if(this.props.ftEntIdentifier in x.updates)this._updateSelectedActorIDFromFeedbackTarget();}.bind(this)),i.subscribe(u,function(){this.setState({nuxEnabledCovered:false,nuxEnabledUncovered:false});}.bind(this)));},componentWillUnmount:function(){this._subscriptions.release();},_updateSelectedActorIDFromFeedbackTarget:function(){o.getFeedbackTarget(this.props.ftEntIdentifier,function(w){this.setState({loading:false,selectedActorID:w.actorforpost});}.bind(this));},_getNUXBody:function(){return (r._("Choose whether to like and comment as yourself or as one of the Pages you manage."));},_getTooltipForActorName:function(w){return (r._("Liking and commenting as {actorName}",[r.param("actorName",w)]));},_getCoveredTooltip:function(){return (r._("Like or comment as one of the Pages you manage."));},_onChange:function(w){this.setState({loading:true});p.changeActor(this.props.ftEntIdentifier,w.value);},_onCompleteNux:function(w){var x=w.isCovered,y=null;if(this.props.isTimeline){if(x){y=h.UFI_TIMELINE_COVERED;}else y=h.UFI_TIMELINE;}else y=h.UFI;var z=q.getURIBuilder().setEnum('nux_type',y).getURI();new j().setURI(z).send();i.inform(u);}});e.exports=v;},null);