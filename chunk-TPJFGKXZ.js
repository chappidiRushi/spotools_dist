import{a as Ue}from"./chunk-I755ERMB.js";import{a as Xe,b as Ze,c as ze,d as He,e as qe,f as Ke,g as Ye,j as Je,k as $e,m as et,n as tt}from"./chunk-35L63LYQ.js";import{b as Re,c as ge,d as ne}from"./chunk-UHJLWGDL.js";import{$ as Ge,C as te,E as ie,F as G,G as U,K as We,L as he,N as fe,P as _e,Q as be,S as ye,Y as B,_ as Qe,b as Be,d as J,f as $,g as ee,h as je,i as O,r as Ae,y as Q}from"./chunk-YJ4G6WIU.js";import{Ab as ce,Bb as me,Cb as Me,Db as A,Eb as R,Fb as W,Gb as m,Hb as Le,Ib as I,Kb as P,Lb as E,Mb as M,Na as le,Nb as Ve,Ob as F,Qb as q,Ra as r,Rb as De,Sa as C,Sb as ue,Tb as Ne,V as we,Vb as Fe,W as xe,Wa as Te,X as L,_b as Oe,aa as k,bb as z,ea as v,fa as V,fb as _,fc as K,g as w,gb as y,hb as p,jc as x,kc as Y,lb as D,mb as H,na as h,nb as Ie,oa as f,ob as Pe,pb as Ee,pc as Ce,qb as s,rb as l,sa as ke,sb as T,tb as re,ua as se,ub as de,va as g,vb as N,wb as S,xb as b,yb as c,zb as pe}from"./chunk-YVEFZ63Q.js";var it=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=L({imports:[O,U]})}return i})();var pt=["*"],ct=(i,o,e,t,n,a)=>({"p-sidebar":!0,"p-sidebar-active":i,"p-sidebar-left":o,"p-sidebar-right":e,"p-sidebar-top":t,"p-sidebar-bottom":n,"p-sidebar-full":a}),mt=(i,o)=>({transform:i,transition:o}),ut=i=>({value:"visible",params:i});function ht(i,o){i&1&&N(0)}function ft(i,o){if(i&1&&(re(0),_(1,ht,1,0,"ng-container",5),de()),i&2){let e=c(2);r(),p("ngTemplateOutlet",e.headlessTemplate)}}function _t(i,o){i&1&&N(0)}function bt(i,o){i&1&&T(0,"TimesIcon",13),i&2&&(p("styleClass","p-sidebar-close-icon"),y("data-pc-section","closeicon"))}function yt(i,o){}function gt(i,o){i&1&&_(0,yt,0,0,"ng-template")}function Ct(i,o){if(i&1&&(s(0,"span",14),_(1,gt,1,0,null,5),l()),i&2){let e=c(4);y("data-pc-section","closeicon"),r(),p("ngTemplateOutlet",e.closeIconTemplate)}}function vt(i,o){if(i&1){let e=S();s(0,"button",10),b("click",function(n){h(e);let a=c(3);return f(a.close(n))})("keydown.enter",function(n){h(e);let a=c(3);return f(a.close(n))}),_(1,bt,1,2,"TimesIcon",11)(2,Ct,2,2,"span",12),l()}if(i&2){let e=c(3);y("aria-label",e.ariaCloseLabel)("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),r(),p("ngIf",!e.closeIconTemplate),r(),p("ngIf",e.closeIconTemplate)}}function St(i,o){i&1&&N(0)}function wt(i,o){i&1&&N(0)}function xt(i,o){if(i&1&&(re(0),s(1,"div",15),_(2,wt,1,0,"ng-container",5),l(),de()),i&2){let e=c(3);r(),y("data-pc-section","footer"),r(),p("ngTemplateOutlet",e.footerTemplate)}}function kt(i,o){if(i&1&&(s(0,"div",6),_(1,_t,1,0,"ng-container",5)(2,vt,3,5,"button",7),l(),s(3,"div",8),ce(4),_(5,St,1,0,"ng-container",5),l(),_(6,xt,3,2,"ng-container",9)),i&2){let e=c(2);y("data-pc-section","header"),r(),p("ngTemplateOutlet",e.headerTemplate),r(),p("ngIf",e.showCloseIcon),r(),y("data-pc-section","content"),r(2),p("ngTemplateOutlet",e.contentTemplate),r(),p("ngIf",e.footerTemplate)}}function Tt(i,o){if(i&1){let e=S();s(0,"div",3,0),b("@panelState.start",function(n){h(e);let a=c();return f(a.onAnimationStart(n))})("@panelState.done",function(n){h(e);let a=c();return f(a.onAnimationEnd(n))})("keydown",function(n){h(e);let a=c();return f(a.onKeyDown(n))}),_(2,ft,2,1,"ng-container",4)(3,kt,7,6,"ng-template",null,1,Oe),l()}if(i&2){let e=W(4),t=c();D(t.styleClass),p("ngClass",Fe(9,ct,t.visible,t.position==="left"&&!t.fullScreen,t.position==="right"&&!t.fullScreen,t.position==="top"&&!t.fullScreen,t.position==="bottom"&&!t.fullScreen,t.fullScreen))("@panelState",q(19,ut,De(16,mt,t.transformOptions,t.transitionOptions)))("ngStyle",t.style),y("data-pc-name","sidebar")("data-pc-section","root"),r(2),p("ngIf",t.headlessTemplate)("ngIfElse",e)}}var It=be([fe({transform:"{{transform}}",opacity:0}),he("{{transition}}")]),Pt=be([he("{{transition}}",fe({transform:"{{transform}}",opacity:0}))]),ae=(()=>{class i{document;el;renderer;cd;config;appendTo;blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){switch(this._position=e,e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}templates;onShow=new g;onHide=new g;visibleChange=new g;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;contentTemplate;headerTemplate;footerTemplate;closeIconTemplate;headlessTemplate;constructor(e,t,n,a,u){this.document=e,this.el=t,this.renderer=n,this.cd=a,this.config=u}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"headless":this.headlessTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&Q.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",String(parseInt(this.container.style.zIndex)-1)),B.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",e=>{this.dismissible&&this.close(e)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&B.blockBodyScroll())}disableModality(){this.mask&&(B.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&B.unblockBodyScroll(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),Q.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):B.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",t=>{t.which==27&&parseInt(this.container.style.zIndex)===Q.get(this.container)&&this.close(t)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Q.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=function(t){return new(t||i)(C(Be),C(se),C(Te),C(K),C(ie))};static \u0275cmp=v({type:i,selectors:[["p-sidebar"]],contentQueries:function(t,n,a){if(t&1&&me(a,G,4),t&2){let u;A(u=R())&&(n.templates=u)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",x],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",Y],modal:[2,"modal","modal",x],dismissible:[2,"dismissible","dismissible",x],showCloseIcon:[2,"showCloseIcon","showCloseIcon",x],closeOnEscape:[2,"closeOnEscape","closeOnEscape",x],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[z],ngContentSelectors:pt,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["role","complementary",3,"ngClass","ngStyle","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"p-sidebar-header"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[4,"ngIf"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-sidebar-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-sidebar-close-icon"],[1,"p-sidebar-footer"]],template:function(t,n){t&1&&(pe(),_(0,Tt,5,21,"div",2)),t&2&&p("ngIf",n.visible)},dependencies:()=>[J,$,je,ee,Qe,ge],styles:[`@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}
`],encapsulation:2,data:{animation:[We("panelState",[_e("void => visible",[ye(It)]),_e("visible => void",[ye(Pt)])])]},changeDetection:0})}return i})(),oe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=L({imports:[O,Ge,U,ge,U]})}return i})();var ot=(()=>{let o=class o{constructor(){this.showSidebar=!1,this.onClose=new g,this.spotify=k(ne)}ngOnInit(){return w(this,null,function*(){let t={};if(!this.playlist.tracks?.total)throw new Error("there are no tracks available");(yield this.spotify.getAllPlaylistItems(this.playlist.id,this.playlist.tracks?.total)).forEach(a=>{a.track.artists.forEach(u=>{t[u.name]||(t[u.name]=0),t[u.name]=t[u.name]+1})}),console.log("artist obj",t)})}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=v({type:o,selectors:[["app-genre"]],inputs:{playlist:"playlist",showSidebar:"showSidebar"},outputs:{onClose:"onClose"},standalone:!0,features:[F],decls:2,vars:0,template:function(n,a){n&1&&(s(0,"p"),m(1,"genre works!"),l())},encapsulation:2});let i=o;return i})();var Et=["input"],Mt=(i,o,e,t)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":i,"p-radiobutton-disabled":o,"p-radiobutton-focused":e,"p-variant-filled":t}),Lt=(i,o,e)=>({"p-radiobutton-box":!0,"p-highlight":i,"p-disabled":o,"p-focus":e}),Vt=(i,o,e)=>({"p-radiobutton-label":!0,"p-radiobutton-label-active":i,"p-disabled":o,"p-radiobutton-label-focus":e});function Dt(i,o){if(i&1){let e=S();s(0,"label",7),b("click",function(n){h(e);let a=c();return f(a.select(n))}),m(1),l()}if(i&2){let e=c(),t=W(3);D(e.labelStyleClass),p("ngClass",ue(6,Vt,t.checked,e.disabled,e.focused)),y("for",e.inputId)("data-pc-section","label"),r(),Le(e.label)}}var Nt={provide:Xe,useExisting:we(()=>ve),multi:!0},Ft=(()=>{class i{accessors=[];add(e,t){this.accessors.push([e,t])}remove(e){this.accessors=this.accessors.filter(t=>t[1]!==e)}select(e){this.accessors.forEach(t=>{this.isSameGroup(t,e)&&t[1]!==e&&t[1].writeValue(e.value)})}isSameGroup(e,t){return e[0].control?e[0].control.root===t.control.control.root&&e[1].name===t.name:!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=xe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ve=(()=>{class i{cd;injector;registry;config;value;formControlName;name;disabled;label;variant="outlined";tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;labelStyleClass;autofocus;onClick=new g;onFocus=new g;onBlur=new g;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;constructor(e,t,n,a){this.cd=e,this.injector=t,this.registry=n,this.config=a}ngOnInit(){this.control=this.injector.get(Ze),this.checkName(),this.registry.add(this.control,this)}handleClick(e,t,n){e.preventDefault(),!this.disabled&&(this.select(e),n&&t.focus())}select(e){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=function(t){return new(t||i)(C(K),C(ke),C(Ft),C(ie))};static \u0275cmp=v({type:i,selectors:[["p-radioButton"]],viewQuery:function(t,n){if(t&1&&Me(Et,5),t&2){let a;A(a=R())&&(n.inputViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",x],label:"label",variant:"variant",tabindex:[2,"tabindex","tabindex",Y],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",autofocus:[2,"autofocus","autofocus",x]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Ve([Nt]),z],decls:7,vars:31,consts:[["input",""],[3,"click","ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio","pAutoFocus","",3,"focus","blur","checked","disabled","value","autofocus"],[3,"ngClass"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(t,n){if(t&1){let a=S();s(0,"div",1),b("click",function(d){h(a);let Z=W(3);return f(n.handleClick(d,Z,!0))}),s(1,"div",2)(2,"input",3,0),b("focus",function(d){return h(a),f(n.onInputFocus(d))})("blur",function(d){return h(a),f(n.onInputBlur(d))}),l()(),s(4,"div",4),T(5,"span",5),l()(),_(6,Dt,2,10,"label",6)}t&2&&(D(n.styleClass),p("ngStyle",n.style)("ngClass",Ne(22,Mt,n.checked,n.disabled,n.focused,n.variant==="filled"||n.config.inputStyle()==="filled")),y("data-pc-name","radiobutton")("data-pc-section","root"),r(),y("data-pc-section","hiddenInputWrapper"),r(),p("checked",n.checked)("disabled",n.disabled)("value",n.value)("autofocus",n.autofocus),y("id",n.inputId)("name",n.name)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("tabindex",n.tabindex)("aria-checked",n.checked)("data-pc-section","hiddenInput"),r(2),p("ngClass",ue(27,Lt,n.checked,n.disabled,n.focused)),y("data-pc-section","input"),r(),y("data-pc-section","icon"),r(),p("ngIf",n.label))},dependencies:[J,$,ee,Ke],encapsulation:2,changeDetection:0})}return i})(),st=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=L({imports:[O,Ye]})}return i})();function Bt(i,o){i&1&&(s(0,"div",17),m(1,"SPLIT PLAYLIST"),l())}var lt=(()=>{let o=class o{constructor(){this.userService=k(Ue),this.toastService=k(te),this.splitCount=1,this.loading=!1,this.showSplitPlaylistSidebar=!1,this.showSplitPlaylistSidebarChange=new g,this.onClose=new g,this.splitMode="dividePlayListIntoXParts"}splitPlaylist(){return w(this,null,function*(){try{this.loading=!0;let t=this.playlist.tracks?.total||0;if(!t)throw new Error("No Tracks In playlist to Split");let n=yield this.userService.fetchAllTracks(this.playlist.id,t);if(this.splitMode==="dividePlayListIntoXParts"){let a=Math.ceil(t/this.splitCount),u=Ce(n,a);for(let d=0;d<u.length;d++){let Z=yield this.userService.createPlaylist(`${this.playlist.name} - splitted #${d+1}`);if(!Z)throw new Error("no new playlist");let rt=u[d].map(j=>j.track?.uri),Se=Ce(rt,100);for(let j=0;j<Se.length;j++)yield this.userService.addTracksToPlaylist(Z.id,Se[j])}}this.toastService.add({severity:"success",summary:"Success",detail:"Playlist splitted successfully"}),this.onClose.emit(),this.loading=!1}catch(t){let n="Failed To Split Playlist";t instanceof Error&&(n=t.message),console.error("creating spotify playlist error",t),this.toastService.add({severity:"danger",summary:"Failed",detail:n}),this.onClose.emit()}})}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=v({type:o,selectors:[["app-playlist-split"]],inputs:{playlist:"playlist",showSplitPlaylistSidebar:"showSplitPlaylistSidebar"},outputs:{showSplitPlaylistSidebarChange:"showSplitPlaylistSidebarChange",onClose:"onClose"},standalone:!0,features:[F],decls:22,vars:6,consts:[["styleClass","p-sidebar-md","title","Split Playlist","position","right",1,"no-sidebar-shadow",3,"visibleChange","onHide","visible"],["pTemplate","header"],[1,"px-5","h-full"],[1,"text-lg","font-semibold"],[1,"block","font-bold","text-gray-600","dark:text-gray-300","mt-4"],[1,"flex","flex-col","ml-4"],[1,"flex","py-3","align-middle"],["name","dividePlayListIntoXParts","value","dividePlayListIntoXParts","inputId","dividePlayListIntoXParts",3,"ngModelChange","ngModel"],["for","dividePlayListIntoXParts",1,"ml-2"],[1,"flex","py-3"],["name","createPlayListWithXSongs","value","createPlayListWithXSongs","disabled","true","inputId","createPlayListWithXSongs",3,"ngModelChange","ngModel"],["for","createPlayListWithXSongs",1,"ml-2"],[1,""],["for","minmax",1,"block","pb-3"],["inputId","minmax","mode","decimal","min","0","max","100",3,"ngModelChange","ngModel"],[1,"flex","flex-row-reverse","mt-4"],["label","Split Playlist","icon","pi pi-check",1,"text-2xl",3,"onClick","loading"],[1,"font-semibold","text-2xl"]],template:function(n,a){n&1&&(s(0,"p-sidebar",0),M("visibleChange",function(d){return E(a.showSplitPlaylistSidebar,d)||(a.showSplitPlaylistSidebar=d),d}),b("onHide",function(){return a.showSplitPlaylistSidebarChange.emit(!1)}),_(1,Bt,2,0,"ng-template",1),s(2,"div",2)(3,"p",3),m(4," Split the playlist onto many parts. The original playlist won't be modified or deleted. "),l(),s(5,"label",4),m(6," Split type: "),l(),s(7,"div",5)(8,"div",6)(9,"p-radioButton",7),M("ngModelChange",function(d){return E(a.splitMode,d)||(a.splitMode=d),d}),l(),s(10,"label",8),m(11," Divide Playlist into X parts "),l()(),s(12,"div",9)(13,"p-radioButton",10),M("ngModelChange",function(d){return E(a.splitMode,d)||(a.splitMode=d),d}),l(),s(14,"label",11),m(15," Create Playlist with X songs each "),l()()(),s(16,"div",12)(17,"label",13),m(18),l(),s(19,"p-inputNumber",14),M("ngModelChange",function(d){return E(a.splitCount,d)||(a.splitCount=d),d}),l()(),s(20,"div",15)(21,"p-button",16),b("onClick",function(){return a.splitPlaylist()}),l()()()()),n&2&&(P("visible",a.showSplitPlaylistSidebar),r(9),P("ngModel",a.splitMode),r(4),P("ngModel",a.splitMode),r(5),I(" ",a.splitMode==="createPlayListWithXSongs"?"Number of songs":"Number of parts",""),r(),P("ngModel",a.splitCount),r(2),p("loading",a.loading))},dependencies:[oe,ae,G,st,ve,qe,ze,He,tt,et,$e,Je],encapsulation:2});let i=o;return i})();var jt=i=>["/home/playlist",i];function At(i,o){if(i&1){let e=S();s(0,"div",1)(1,"a",6),T(2,"img",7),l(),s(3,"div",8)(4,"p",9),m(5),l(),s(6,"i",10),b("click",function(){let n=h(e).$implicit,a=c();return a.setUpdateItem(n),f(a.sidebarVisible=!0)}),l()()()}if(i&2){let e=o.$implicit;r(),p("routerLink",q(3,jt,e.id)),r(),p("src",e.images&&e.images.length?e.images[0].url:"https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",le),r(3),I(" ",e.name," ")}}function Rt(i,o){if(i&1){let e=S();s(0,"div",3)(1,"div",11),T(2,"div",12),s(3,"div",13)(4,"div")(5,"h2",14),m(6),l(),s(7,"p")(8,"strong"),m(9,"Made by"),l(),m(10),l(),s(11,"p")(12,"strong"),m(13,"With"),l(),m(14),l()()(),T(15,"img",15),l(),s(16,"div",16)(17,"div",17),m(18,"Creation Tools"),l(),s(19,"div",18)(20,"div",19),b("click",function(){h(e);let n=c();return f(n.splitPlaylistSidebarVisible=!0)}),m(21," Split Playlist "),l(),s(22,"div",19),b("click",function(){h(e);let n=c();return f(n.deletePlaylist(n.modPlaylist))}),m(23," Delete Playlist "),l(),s(24,"div",19),b("click",function(){h(e);let n=c();return f(n.clonePlaylist(n.modPlaylist.id,(n.modPlaylist.tracks==null?null:n.modPlaylist.tracks.total)||0,n.modPlaylist.name))}),m(25," Clone Playlist "),l(),s(26,"div",19),b("click",function(){h(e);let n=c();return f(n.deleteDuplicates(n.modPlaylist.id,(n.modPlaylist.tracks==null?null:n.modPlaylist.tracks.total)||0,n.modPlaylist.name))}),m(27," Delete Duplicates "),l(),s(28,"div",19),b("click",function(){h(e);let n=c();return f(n.filteredGenre(n.modPlaylist))}),m(29," Filtered Genre "),l()()()()}if(i&2){let e=c();r(6),I(" ",e.modPlaylist.name," "),r(4),I(" ",e.modPlaylist.owner.display_name," "),r(4),I(" ",(e.modPlaylist.tracks==null?null:e.modPlaylist.tracks.total)||0," items"),r(),p("src",e.modPlaylist.images&&e.modPlaylist.images.length?e.modPlaylist.images[0].url:"https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",le)}}function Wt(i,o){if(i&1){let e=S();s(0,"app-playlist-split",20),M("showSplitPlaylistSidebarChange",function(n){h(e);let a=c();return E(a.splitPlaylistSidebarVisible,n)||(a.splitPlaylistSidebarVisible=n),f(n)}),b("onClose",function(){h(e);let n=c();return f(n.closeSidebar())}),l()}if(i&2){let e=c();p("playlist",e.modPlaylist),P("showSplitPlaylistSidebar",e.splitPlaylistSidebarVisible)}}function Qt(i,o){if(i&1){let e=S();s(0,"app-genre",21),b("onClose",function(){h(e);let n=c();return f(n.closeGenre())}),l()}if(i&2){let e=c();p("playlist",e.modPlaylist)("showSidebar",e.genreSidebar)}}var sn=(()=>{let o=class o{constructor(){this.splitPlaylistSidebarVisible=!1,this.toastService=k(te),this.userPlaylists=[],this.spotify=k(ne),this.sidebarVisible=!1,this.genreSidebar=!1,this.showSpinner=Re()}closeGenre(){throw new Error("Method not implemented.")}fetchUserPlaylists(){return w(this,null,function*(){this.showSpinner.set(!0);let t=yield this.spotify.fetchMyPlaylists();console.log(t),this.userPlaylists=t.items,this.showSpinner.set(!1)})}setUpdateItem(t){this.modPlaylist=t}clonePlaylist(t,n,a){return w(this,null,function*(){})}deleteDuplicates(t,n,a){return w(this,null,function*(){})}ngOnInit(){return w(this,null,function*(){this.fetchUserPlaylists()})}deletePlaylist(t){return w(this,null,function*(){let n=yield this.spotify.getUser();if(t.owner.id!==n?.id)return this.toastService.add({severity:"error",summary:"Error",detail:"You are no the owner of this playlist"});this.spotify.deletePlaylist(t.id),this.toastService.add({severity:"success",summary:"Success",detail:"Playlist deleted successfully"}),this.closeSidebar()})}closeSidebar(){this.modPlaylist=void 0,this.sidebarVisible=!1,this.splitPlaylistSidebarVisible=!1,this.fetchUserPlaylists()}filteredGenre(t){}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=v({type:o,selectors:[["app-playlist-card"]],standalone:!0,features:[F],decls:7,vars:4,consts:[[1,"flex","flex-wrap","justify-items-start","mt-4"],[1,"max-w-80","overflow-hidden","rounded-md","m-4","shadow-card"],["styleClass","p-sidebar-md","position","right",3,"visibleChange","visible"],[1,""],[3,"playlist","showSplitPlaylistSidebar"],[3,"playlist","showSidebar"],[3,"routerLink"],["width","300px","alt","",1,"border-b",3,"src"],[1,"m-2","flex","justify-between"],[1,"text-lg","font-semibold","leading-none","m-0","truncate"],[1,"pi","pi-ellipsis-v","cursor-pointer",2,"font-size","1rem",3,"click"],[1,"relative"],[1,"absolute","flex","h-80","w-full","items-end","bg-black","opacity-60"],[1,"absolute","flex","h-80","w-full","items-end","p-4","text-white"],[1,"mb-2","text-2xl","font-bold","tracking-wider"],["alt","","srcset","",1,"h-80","w-full","object-cover",3,"src"],[1,"px-4"],[1,"text-2xl","font-bold","pt-4","pb-2"],[1,"mx-4"],[1,"cursor-pointer","pl-4","py-2","text-lg","hover:text-purple-600",3,"click"],[3,"showSplitPlaylistSidebarChange","onClose","playlist","showSplitPlaylistSidebar"],[3,"onClose","playlist","showSidebar"]],template:function(n,a){n&1&&(s(0,"div",0),Pe(1,At,7,5,"div",1,Ie),s(3,"p-sidebar",2),M("visibleChange",function(d){return E(a.sidebarVisible,d)||(a.sidebarVisible=d),d}),_(4,Rt,30,4,"div",3),l(),_(5,Wt,1,2,"app-playlist-split",4)(6,Qt,1,2,"app-genre",5),l()),n&2&&(r(),Ee(a.userPlaylists),r(2),P("visible",a.sidebarVisible),r(),H(a.modPlaylist?4:-1),r(),H(a.splitPlaylistSidebarVisible&&a.modPlaylist?5:-1),r(),H(a.genreSidebar&&a.modPlaylist?6:-1))},dependencies:[it,Ae,oe,ae,lt,ot],encapsulation:2});let i=o;return i})();export{sn as PlayListCardComponent};
