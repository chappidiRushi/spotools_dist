import{$ as m,Ab as C,Ac as j,Bb as D,Cb as L,Jb as z,La as w,Oa as u,S as _,Wb as v,Ya as M,aa as y,ab as g,bb as s,cb as n,gb as p,ia as x,ja as h,ka as b,la as I,lb as l,mb as o,nb as f,pd as V,rb as T,sb as S,ta as E,tb as r,ub as A,uc as F,vb as B,wc as H,xc as N}from"./chunk-PPSUO3YT.js";var R=["*"];function k(e,c){if(e&1&&(l(0,"span",4),D(1),o()),e&2){let t=r();u(),L(t.label)}}function q(e,c){if(e&1&&f(0,"span",6),e&2){let t=r(2);p(t.icon),n("ngClass","p-avatar-icon")}}function G(e,c){if(e&1&&g(0,q,1,3,"span",5),e&2){let t=r(),i=C(6);n("ngIf",t.icon)("ngIfElse",i)}}function O(e,c){if(e&1){let t=T();l(0,"img",8),S("error",function(a){x(t);let d=r(2);return h(d.imageError(a))}),o()}if(e&2){let t=r(2);n("src",t.image,w),s("aria-label",t.ariaLabel)}}function U(e,c){if(e&1&&g(0,O,1,2,"img",7),e&2){let t=r();n("ngIf",t.image)}}var te=(()=>{class e{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new E;containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}}imageError(t){this.onImageError.emit(t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},ngContentSelectors:R,decls:7,vars:9,consts:[["iconTemplate",""],["imageTemplate",""],[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,a){if(i&1&&(A(),l(0,"div",2),B(1),g(2,k,2,1,"span",3)(3,G,1,2,"ng-template",null,0,v)(5,U,1,1,"ng-template",null,1,v),o()),i&2){let d=C(4);p(a.styleClass),n("ngClass",a.containerClass())("ngStyle",a.style),s("aria-labelledby",a.ariaLabelledBy)("aria-label",a.ariaLabel)("data-pc-name","avatar"),u(2),n("ngIf",a.label)("ngIfElse",d)}},dependencies:[F,H,N],styles:[`@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}
`],encapsulation:2,changeDetection:0})}return e})(),ae=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=y({type:e});static \u0275inj=_({imports:[j]})}return e})();var re=(()=>{class e extends V{static \u0275fac=(()=>{let t;return function(a){return(t||(t=I(e)))(a||e)}})();static \u0275cmp=m({type:e,selectors:[["BarsIcon"]],standalone:!0,features:[M,z],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(i,a){i&1&&(b(),l(0,"svg",0),f(1,"path",1),o()),i&2&&(p(a.getClassNames()),s("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role))},encapsulation:2})}return e})();export{te as a,ae as b,re as c};
