import{A as de,C as ue,E as me,M as Ne,N as a,O as G,P as Ze,Q as je,c as Fe,g as Ae,h as Re,k as ce,m as U,n as I,s as Be,t as Q,u as ze,z as Pe}from"./chunk-EDW3CTRR.js";import{$ as S,Ab as V,Bb as $,Cb as K,Ha as X,Ia as Oe,Jb as Me,Ka as Te,Kb as ke,Lb as v,Ma as p,Mb as ie,Na as u,Nb as ne,Pa as Ce,Q as _e,Ra as B,S as F,Ta as Ie,Tb as oe,Ub as se,Va as Le,Vb as q,Wa as ee,Xa as we,Ya as z,a as k,aa as A,ab as d,ac as Se,ba as ge,bb as g,ca as ve,cb as s,cc as C,dc as O,ec as De,gb as L,ha as xe,ia as x,ja as y,ka as ye,kc as He,la as be,lb as f,mb as _,nb as b,ob as P,pa as R,pb as N,qa as E,qb as M,rb as H,rc as ae,sb as T,sc as Ve,tb as r,tc as le,ua as D,uc as re,vc as pe,wb as Ee,wc as W,xb as te,yb as Z,yc as w,zb as j}from"./chunk-JTNJRYIO.js";var Ke=(()=>{class i{platformId;el;zone;config;renderer;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:U()+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;scrollHandler;resizeListener;constructor(e,t,n,o,m,h){this.platformId=e,this.el=t,this.zone=n,this.config=o,this.renderer=m,this.viewContainer=h}ngAfterViewInit(){w(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let t=this.el.nativeElement.querySelector(".p-component");t||(t=this.getTarget(this.el.nativeElement)),t.addEventListener("focus",this.focusListener),t.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=k(k({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(a.hasClass(e.relatedTarget,"p-tooltip")||a.hasClass(e.relatedTarget,"p-tooltip-text")||a.hasClass(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}onPressEscape(){this.hideOnEscape&&this.deactivate()}activate(){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}}deactivate(){this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?a.appendChild(this.container,this.el.nativeElement):a.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",t=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),a.fadeIn(this.container,250),this.getOption("tooltipZIndex")==="auto"?I.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&I.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof Ce){let t=this.viewContainer.createEmbeddedView(e);t.detectChanges(),t.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),t=e.left+a.getWindowScrollLeft(),n=e.top+a.getWindowScrollTop();return{left:t,top:n}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let e=this.activeElement,t=this.getHostOffset(),n=t.left+a.getOuterWidth(e),o=t.top+(a.getOuterHeight(e)-a.getOuterHeight(this.container))/2;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?a.findSingle(this.el.nativeElement,".p-component")||this.el.nativeElement:this.el.nativeElement}alignLeft(){this.preAlign("left");let e=this.getHostOffset(),t=e.left-a.getOuterWidth(this.container),n=e.top+(a.getOuterHeight(this.el.nativeElement)-a.getOuterHeight(this.container))/2;this.container.style.left=t+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let e=this.getHostOffset(),t=e.left+(a.getOuterWidth(this.el.nativeElement)-a.getOuterWidth(this.container))/2,n=e.top-a.getOuterHeight(this.container);this.container.style.left=t+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let e=this.getHostOffset(),t=e.left+(a.getOuterWidth(this.el.nativeElement)-a.getOuterWidth(this.container))/2,n=e.top+a.getOuterHeight(this.el.nativeElement);this.container.style.left=t+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=k(k({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return a.hasClass(e,"p-inputwrapper")?a.findSingle(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let t="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?t+" "+this.getOption("tooltipStyleClass"):t}isOutOfBounds(){let e=this.container.getBoundingClientRect(),t=e.top,n=e.left,o=a.getOuterWidth(this.container),m=a.getOuterHeight(this.container),h=a.getViewport();return n+o>h.width||n<0||t<0||t+m>h.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new G(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let t=this.el.nativeElement.querySelector(".p-component");t||(t=this.getTarget(this.el.nativeElement)),t.removeEventListener("focus",this.focusListener),t.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):a.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&I.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(t){return new(t||i)(u(D),u(R),u(Ie),u(Q),u(B),u(Le))};static \u0275dir=ge({type:i,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],hostBindings:function(t,n){t&1&&T("keydown.escape",function(m){return n.onPressEscape(m)},!1,Te)},inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",C],showDelay:[2,"showDelay","showDelay",O],hideDelay:[2,"hideDelay","hideDelay",O],life:[2,"life","life",O],positionTop:[2,"positionTop","positionTop",O],positionLeft:[2,"positionLeft","positionLeft",O],autoHide:[2,"autoHide","autoHide",C],fitContent:[2,"fitContent","fitContent",C],hideOnEscape:[2,"hideOnEscape","hideOnEscape",C],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[z,xe]})}return i})(),he=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=F({imports:[W]})}return i})();var Ye=["pMenuItemContent",""],qe=i=>({"p-disabled":i}),Y=i=>({$implicit:i}),Je=()=>({exact:!1});function Xe(i,l){i&1&&M(0)}function et(i,l){if(i&1&&(f(0,"a",6),d(1,Xe,1,0,"ng-container",7),_()),i&2){let e=r(2),t=V(4);s("target",e.item.target)("ngClass",v(10,qe,e.item.disabled)),g("title",e.item.title)("href",e.item.url||null,Oe)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("aria-hidden",!0),p(),s("ngTemplateOutlet",t)("ngTemplateOutletContext",v(12,Y,e.item))}}function tt(i,l){i&1&&M(0)}function it(i,l){if(i&1&&(f(0,"a",8),d(1,tt,1,0,"ng-container",7),_()),i&2){let e=r(2),t=V(4);s("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||ke(18,Je))("target",e.item.target)("ngClass",v(19,qe,e.item.disabled))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),g("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("aria-hidden",!0)("title",e.item.title),p(),s("ngTemplateOutlet",t)("ngTemplateOutletContext",v(21,Y,e.item))}}function nt(i,l){if(i&1&&(P(0),d(1,et,2,14,"a",4)(2,it,2,23,"a",5),N()),i&2){let e=r();p(),s("ngIf",!(e.item!=null&&e.item.routerLink)),p(),s("ngIf",e.item==null?null:e.item.routerLink)}}function ot(i,l){}function st(i,l){i&1&&d(0,ot,0,0,"ng-template")}function at(i,l){if(i&1&&(P(0),d(1,st,1,0,null,7),N()),i&2){let e=r();p(),s("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",v(2,Y,e.item))}}function lt(i,l){if(i&1&&b(0,"span",12),i&2){let e=r(2);L(e.item.iconClass),s("ngClass",e.item.icon)("ngStyle",e.item.iconStyle)}}function rt(i,l){if(i&1&&(f(0,"span",13),$(1),_()),i&2){let e=r(2);p(),K(e.item.label)}}function pt(i,l){if(i&1&&(b(0,"span",14),oe(1,"safeHtml")),i&2){let e=r(2);s("innerHTML",se(1,1,e.item.label),X)}}function ct(i,l){if(i&1&&(f(0,"span",15),$(1),_()),i&2){let e=r(2);s("ngClass",e.item.badgeStyleClass),p(),K(e.item.badge)}}function dt(i,l){if(i&1&&d(0,lt,1,4,"span",9)(1,rt,2,1,"span",10)(2,pt,2,3,"ng-template",null,1,q)(4,ct,2,2,"span",11),i&2){let e=V(3),t=r();s("ngIf",t.item.icon),p(),s("ngIf",t.item.escape!==!1)("ngIfElse",e),p(3),s("ngIf",t.item.badge)}}var ut=["list"],mt=["container"],ht=i=>({"p-menu p-component":!0,"p-menu-overlay":i}),ft=(i,l)=>({showTransitionParams:i,hideTransitionParams:l}),_t=i=>({value:"visible",params:i}),fe=i=>({"p-hidden":i}),gt=(i,l)=>({"p-hidden":i,flex:l}),We=(i,l,e)=>({"p-hidden":i,"p-focus":l,"p-disabled":e});function vt(i,l){i&1&&M(0)}function xt(i,l){if(i&1&&(f(0,"div",9),d(1,vt,1,0,"ng-container",10),_()),i&2){let e=r(2);g("data-pc-section","start"),p(),s("ngTemplateOutlet",e.startTemplate)}}function yt(i,l){if(i&1&&b(0,"li",14),i&2){let e=r().$implicit;s("ngClass",v(1,fe,e.visible===!1))}}function bt(i,l){if(i&1&&(f(0,"span"),$(1),_()),i&2){let e=r(3).$implicit;p(),K(e.label)}}function Ot(i,l){if(i&1&&(b(0,"span",18),oe(1,"safeHtml")),i&2){let e=r(3).$implicit;s("innerHTML",se(1,1,e.label),X)}}function Tt(i,l){if(i&1&&(P(0),d(1,bt,2,1,"span",17)(2,Ot,2,3,"ng-template",null,2,q),N()),i&2){let e=V(3),t=r(2).$implicit;p(),s("ngIf",t.escape!==!1)("ngIfElse",e)}}function Ct(i,l){i&1&&M(0)}function It(i,l){if(i&1&&(f(0,"li",15),d(1,Tt,4,2,"ng-container",7)(2,Ct,1,0,"ng-container",16),_()),i&2){let e=r(),t=e.$implicit,n=e.index,o=r(3);s("ngClass",ie(7,gt,t.visible===!1,t.visible))("tooltipOptions",t.tooltipOptions),g("data-automationid",t.automationId)("id",o.menuitemId(t,o.id,n)),p(),s("ngIf",!o.submenuHeaderTemplate),p(),s("ngTemplateOutlet",o.submenuHeaderTemplate)("ngTemplateOutletContext",v(10,Y,t))}}function Lt(i,l){if(i&1&&b(0,"li",14),i&2){let e=r().$implicit,t=r().$implicit;s("ngClass",v(1,fe,e.visible===!1||t.visible===!1))}}function wt(i,l){if(i&1){let e=H();f(0,"li",20),T("onMenuItemClick",function(n){x(e);let o=r(),m=o.$implicit,h=o.index,c=r().index,J=r(3);return y(J.itemClick(n,J.menuitemId(m,J.id,c,h)))}),_()}if(i&2){let e=r(),t=e.$implicit,n=e.index,o=r(),m=o.$implicit,h=o.index,c=r(3);L(t.styleClass),s("pMenuItemContent",t)("itemTemplate",c.itemTemplate)("ngClass",ne(13,We,t.visible===!1||m.visible===!1,c.focusedOptionId()&&c.menuitemId(t,c.id,h,n)===c.focusedOptionId(),c.disabled(t.disabled)))("ngStyle",t.style)("tooltipOptions",t.tooltipOptions),g("data-pc-section","menuitem")("aria-label",c.label(t.label))("data-p-focused",c.isItemFocused(c.menuitemId(t,c.id,h,n)))("data-p-disabled",c.disabled(t.disabled))("aria-disabled",c.disabled(t.disabled))("id",c.menuitemId(t,c.id,h,n))}}function Et(i,l){if(i&1&&d(0,Lt,1,3,"li",12)(1,wt,1,17,"li",19),i&2){let e=l.$implicit;s("ngIf",e.separator),p(),s("ngIf",!e.separator)}}function Mt(i,l){if(i&1&&d(0,yt,1,3,"li",12)(1,It,3,12,"li",13)(2,Et,2,2,"ng-template",11),i&2){let e=l.$implicit;s("ngIf",e.separator),p(),s("ngIf",!e.separator),p(),s("ngForOf",e.items)}}function kt(i,l){if(i&1&&d(0,Mt,3,3,"ng-template",11),i&2){let e=r(2);s("ngForOf",e.model)}}function St(i,l){if(i&1&&b(0,"li",14),i&2){let e=r().$implicit;s("ngClass",v(1,fe,e.visible===!1))}}function Dt(i,l){if(i&1){let e=H();f(0,"li",20),T("onMenuItemClick",function(n){x(e);let o=r(),m=o.$implicit,h=o.index,c=r(3);return y(c.itemClick(n,c.menuitemId(m,c.id,h)))}),_()}if(i&2){let e=r(),t=e.$implicit,n=e.index,o=r(3);L(t.styleClass),s("pMenuItemContent",t)("itemTemplate",o.itemTemplate)("ngClass",ne(13,We,t.visible===!1,o.focusedOptionId()&&o.menuitemId(t,o.id,n,o.j)===o.focusedOptionId(),o.disabled(t.disabled)))("ngStyle",t.style)("tooltipOptions",t.tooltipOptions),g("data-pc-section","menuitem")("aria-label",o.label(t.label))("data-p-focused",o.isItemFocused(o.menuitemId(t,o.id,n)))("data-p-disabled",o.disabled(t.disabled))("aria-disabled",o.disabled(t.disabled))("id",o.menuitemId(t,o.id,n))}}function Ht(i,l){if(i&1&&d(0,St,1,3,"li",12)(1,Dt,1,17,"li",19),i&2){let e=l.$implicit;s("ngIf",e.separator),p(),s("ngIf",!e.separator)}}function Vt(i,l){if(i&1&&d(0,Ht,2,2,"ng-template",11),i&2){let e=r(2);s("ngForOf",e.model)}}function Ft(i,l){i&1&&M(0)}function At(i,l){if(i&1&&(f(0,"div",21),d(1,Ft,1,0,"ng-container",10),_()),i&2){let e=r(2);g("data-pc-section","end"),p(),s("ngTemplateOutlet",e.endTemplate)}}function Rt(i,l){if(i&1){let e=H();f(0,"div",4,0),T("click",function(n){x(e);let o=r();return y(o.onOverlayClick(n))})("@overlayAnimation.start",function(n){x(e);let o=r();return y(o.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){x(e);let o=r();return y(o.onOverlayAnimationEnd(n))}),d(2,xt,2,2,"div",5),f(3,"ul",6,1),T("focus",function(n){x(e);let o=r();return y(o.onListFocus(n))})("blur",function(n){x(e);let o=r();return y(o.onListBlur(n))})("keydown",function(n){x(e);let o=r();return y(o.onListKeyDown(n))}),d(5,kt,1,1,null,7)(6,Vt,1,1,null,7),_(),d(7,At,2,2,"div",8),_()}if(i&2){let e=r();L(e.styleClass),s("ngClass",v(18,ht,e.popup))("ngStyle",e.style)("@overlayAnimation",v(23,_t,ie(20,ft,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),g("data-pc-name","menu")("id",e.id),p(2),s("ngIf",e.startTemplate),p(),g("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),p(2),s("ngIf",e.hasSubMenu()),p(),s("ngIf",!e.hasSubMenu()),p(),s("ngIf",e.endTemplate)}}var Ue=(()=>{class i{platformId;sanitizer;constructor(e,t){this.platformId=e,this.sanitizer=t}transform(e){return!e||!w(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(t){return new(t||i)(u(D,16),u(Fe,16))};static \u0275pipe=ve({name:"safeHtml",type:i,pure:!0})}return i})(),Bt=(()=>{class i{item;itemTemplate;onMenuItemClick=new E;menu;constructor(e){this.menu=e}onItemClick(e,t){this.onMenuItemClick.emit({originalEvent:e,item:t})}static \u0275fac=function(t){return new(t||i)(u(_e(()=>zt)))};static \u0275cmp=S({type:i,selectors:[["","pMenuItemContent",""]],hostAttrs:[1,"p-element"],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},attrs:Ye,decls:5,vars:3,consts:[["itemContent",""],["htmlLabel",""],[1,"p-menuitem-content",3,"click"],[4,"ngIf"],["class","p-menuitem-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menuitem-link-active","class","p-menuitem-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menuitem-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menuitem-link-active","pRipple","",1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menuitem-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"]],template:function(t,n){if(t&1){let o=H();f(0,"div",2),T("click",function(h){return x(o),y(n.onItemClick(h,n.item))}),d(1,nt,3,2,"ng-container",3)(2,at,2,4,"ng-container",3)(3,dt,5,4,"ng-template",null,0,q),_()}t&2&&(g("data-pc-section","content"),p(),s("ngIf",!n.itemTemplate),p(),s("ngIf",n.itemTemplate))},dependencies:[ae,le,pe,re,Ae,Re,Ze,Ue],encapsulation:2})}return i})(),zt=(()=>{class i{document;platformId;el;renderer;cd;config;overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new E;onHide=new E;onBlur=new E;onFocus=new E;listViewChild;containerViewChild;templates;startTemplate;endTemplate;itemTemplate;submenuHeaderTemplate;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=De(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=ee(-1);selectedOptionIndex=ee(-1);focused=!1;overlayVisible=!1;relativeAlign;constructor(e,t,n,o,m,h,c){this.document=e,this.platformId=t,this.el=n,this.renderer=o,this.cd=m,this.config=h,this.overlayService=c,this.id=this.id||U()}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){this.popup||this.bindDocumentClickListener()}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this.startTemplate=e.template;break;case"end":this.endTemplate=e.template;break;case"itemTemplate":this.itemTemplate=e.template;break;case"submenuheader":this.submenuHeaderTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),a.focus(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&I.clear(e.element);break}}alignOverlay(){this.relativeAlign?a.relativePosition(this.container,this.target):a.absolutePosition(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):a.appendChild(this.container,this.appendTo))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&I.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!a.isTouchDevice()&&this.hide()}menuitemId(e,t,n,o){return e?.id??`${t}_${n}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(a.focus(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let t=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(t),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)a.focus(this.target),this.hide(),e.preventDefault();else{let t=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(t),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(a.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let t=a.findSingle(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),n=t&&a.findSingle(t,'a[data-pc-section="action"]');this.popup&&a.focus(this.target),n?n.click():t&&t.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let n=[...a.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return n>-1?n+1:0}findPrevOptionIndex(e){let n=[...a.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return n>-1?n-1:0}changeFocusedOptionIndex(e){let t=a.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(t.length>0){let n=e>=t.length?t.length-1:e<0?0:e;n>-1&&this.focusedOptionIndex.set(t[n].getAttribute("id"))}}itemClick(e,t){let{originalEvent:n,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){n.preventDefault();return}!o.url&&!o.routerLink&&n.preventDefault(),o.command&&o.command({originalEvent:n,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==t&&this.focusedOptionIndex.set(t)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&w(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",t=>{let n=this.containerViewChild.nativeElement&&!this.containerViewChild.nativeElement.contains(t.target),o=!(this.target&&(this.target===t.target||this.target.contains(t.target)));!this.popup&&n&&o&&this.onListBlur(t),this.preventDocumentDefault&&this.overlayVisible&&n&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&w(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&w(this.platformId)&&(this.scrollHandler=new G(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&I.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener()}hasSubMenu(){if(this.model){for(var e of this.model)if(e.items)return!0}return!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(t=>t.visible!==!1):e.visible===!1}static \u0275fac=function(t){return new(t||i)(u(He),u(D),u(R),u(B),u(Se),u(Q),u(Be))};static \u0275cmp=S({type:i,selectors:[["p-menu"]],contentQueries:function(t,n,o){if(t&1&&Ee(o,ze,4),t&2){let m;Z(m=j())&&(n.templates=m)}},viewQuery:function(t,n){if(t&1&&(te(ut,5),te(mt,5)),t&2){let o;Z(o=j())&&(n.listViewChild=o.first),Z(o=j())&&(n.containerViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",popup:[2,"popup","popup",C],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",C],baseZIndex:[2,"baseZIndex","baseZIndex",O],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",O]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[z],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",3,"ngClass",4,"ngIf"],["class","p-submenu-header","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator",3,"ngClass"],["pTooltip","","role","none",1,"p-submenu-header",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["class","p-menuitem","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions"],[1,"p-menu-end"]],template:function(t,n){t&1&&d(0,Rt,8,25,"div",3),t&2&&s("ngIf",!n.popup||n.visible)},dependencies:[ae,Ve,le,pe,re,Ke,Bt,Ue],styles:[`@layer primeng{.p-menu-overlay{position:absolute;top:0;left:0}.p-menu ul{margin:0;padding:0;list-style:none}.p-menu .p-submenu-header{align-items:center}.p-menu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menu .p-menuitem-text{line-height:1}}
`],encapsulation:2,data:{animation:[Pe("overlayAnimation",[me(":enter",[ue({opacity:0,transform:"scaleY(0.8)"}),de("{{showTransitionParams}}")]),me(":leave",[de("{{hideTransitionParams}}",ue({opacity:0}))])])]},changeDetection:0})}return i})(),xi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=F({imports:[W,ce,je,he,ce,he]})}return i})();var Oi=(()=>{class i extends Ne{static \u0275fac=(()=>{let e;return function(n){return(e||(e=be(i)))(n||i)}})();static \u0275cmp=S({type:i,selectors:[["AngleRightIcon"]],standalone:!0,features:[we,Me],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(t,n){t&1&&(ye(),f(0,"svg",0),b(1,"path",1),_()),t&2&&(L(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return i})();export{Ke as a,he as b,zt as c,xi as d,Oi as e};
