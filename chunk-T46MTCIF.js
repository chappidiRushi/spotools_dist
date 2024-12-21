import{a as ot,b as at}from"./chunk-XVI2LJK2.js";import{a as st,b as mt}from"./chunk-RYKYIKYA.js";import{f as Ne,g as je,h as Ge,i as Ue,l as fe}from"./chunk-2DZLMMVE.js";import{$a as z,Ab as s,Ac as _e,Bb as Ke,Be as it,C as Le,Cb as Be,Cc as j,Ce as rt,Db as F,Dd as ge,De as ve,Eb as ie,Ec as ae,Ed as he,Fb as h,Gb as y,Gd as Je,Hd as We,Ja as ce,Jb as K,Ka as Fe,Kb as D,Lb as q,Mb as Re,Na as u,Oa as k,R as le,Ra as De,Rb as Oe,Rd as se,S as Pe,Sb as He,Sd as U,Ta as ne,Tb as B,Ub as R,X as V,Xa as L,Ya as Ae,a as Y,ab as pe,b as ee,bb as p,bd as re,cc as oe,cd as A,d as we,da as f,ea as I,ec as ze,fa as te,ga as H,gc as w,hb as _,hc as Z,ib as r,ie as Xe,j as Se,ka as v,kc as qe,ke as ye,lb as Ve,mb as P,ne as me,oe as J,pa as $e,pc as Ze,pe as Ye,qe as et,re as tt,sb as d,sd as Ie,se as ue,ta as Ee,tb as l,te as nt,ub as b,vb as $,wb as E,wc as Q,we as xe,xb as de,xc as Qe,xd as G,y as Me,yb as C,yc as N,z as ke,zb as T,zc as be,zd as S}from"./chunk-7EGO6TMF.js";var lt=(()=>{class t extends Ye{static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(t)))(i||t)}})();static \u0275cmp=L({type:t,selectors:[["BarsIcon"]],features:[z],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(n,i){n&1&&(te(),d(0,"svg",0),b(1,"path",1),l()),n&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var ft=({dt:t})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${t("menubar.background")};
    border: 1px solid ${t("menubar.border.color")};
    border-radius: ${t("menubar.border.radius")};
    color: ${t("menubar.color")};
    padding: ${t("menubar.padding")};
    gap: ${t("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${t("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")};
    border-radius: ${t("menubar.item.border.radius")};
    color: ${t("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menubar.item.padding")};
    gap: ${t("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${t("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${t("menubar.submenu.icon.size")};
    width: ${t("menubar.submenu.icon.size")};
    height: ${t("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${t("menubar.item.active.color")};
    background: ${t("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    border-radius: ${t("menubar.border.radius")};
    box-shadow: ${t("menubar.submenu.shadow")};
    color: ${t("menubar.submenu.color")};
    flex-direction: column;
    padding: ${t("menubar.submenu.padding")};
    gap: ${t("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${t("menubar.mobile.button.size")};
    height: ${t("menubar.mobile.button.size")};
    position: relative;
    color: ${t("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("menubar.mobile.button.border.radius")};
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")}, outline-color ${t("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${t("menubar.mobile.button.hover.color")};
    background: ${t("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${t("menubar.mobile.button.focus.ring.shadow")};
    outline: ${t("menubar.mobile.button.focus.ring.width")} ${t("menubar.mobile.button.focus.ring.style")} ${t("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${t("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: ${t("menubar.submenu.padding")};
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    box-shadow: ${t("menubar.submenu.shadow")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.item.border.radius")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: ${t("menubar.submenu.mobile.indent")};
}
`;var It={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:a})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},ct=(()=>{class t extends Xe{name="menubar";theme=ft;classes=It;static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(t)))(i||t)}})();static \u0275prov=le({token:t,factory:t.\u0275fac})}return t})();var gt=["menubar"],ht=(t,a)=>({"p-menubar-submenu":t,"p-menubar-root-list":a}),pt=t=>({"p-menubar-item-link":!0,"p-disabled":t}),yt=()=>({exact:!1}),xt=(t,a)=>({$implicit:t,root:a}),vt=t=>({display:t});function Ct(t,a){if(t&1&&b(0,"li",8),t&2){let e=s().$implicit,n=s();Ve(n.getItemProp(e,"style")),r("ngClass",n.getSeparatorItemClass(e)),_("id",n.getItemId(e))("data-pc-section","separator")}}function Tt(t,a){if(t&1&&b(0,"span",19),t&2){let e=s(4).$implicit,n=s();r("ngClass",n.getItemProp(e,"icon"))("ngStyle",n.getItemProp(e,"iconStyle")),_("data-pc-section","icon")("tabindex",-1)}}function wt(t,a){if(t&1&&(d(0,"span",20),D(1),l()),t&2){let e=s(4).$implicit,n=s();r("id",n.getItemLabelId(e)),_("data-pc-section","label"),u(),Re(" ",n.getItemLabel(e)," ")}}function St(t,a){if(t&1&&b(0,"span",21),t&2){let e=s(4).$implicit,n=s();r("innerHTML",n.getItemLabel(e),ce)("id",n.getItemLabelId(e)),_("data-pc-section","label")}}function Mt(t,a){if(t&1&&b(0,"p-badge",22),t&2){let e=s(4).$implicit,n=s();r("styleClass",n.getItemProp(e,"badgeStyleClass"))("value",n.getItemProp(e,"badge"))}}function kt(t,a){t&1&&b(0,"AngleDownIcon",25),t&2&&_("data-pc-section","submenuicon")}function Lt(t,a){t&1&&b(0,"AngleRightIcon",25),t&2&&_("data-pc-section","submenuicon")}function Pt(t,a){if(t&1&&($(0),p(1,kt,1,1,"AngleDownIcon",24)(2,Lt,1,1,"AngleRightIcon",24),E()),t&2){let e=s(6);u(),r("ngIf",e.root),u(),r("ngIf",!e.root)}}function $t(t,a){}function Et(t,a){t&1&&p(0,$t,0,0,"ng-template",26),t&2&&r("data-pc-section","submenuicon")}function Ft(t,a){if(t&1&&($(0),p(1,Pt,3,2,"ng-container",11)(2,Et,1,1,null,23),E()),t&2){let e=s(5);u(),r("ngIf",!e.submenuiconTemplate),u(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function Dt(t,a){if(t&1&&(d(0,"a",15),p(1,Tt,1,4,"span",16)(2,wt,2,3,"span",17)(3,St,1,3,"ng-template",null,2,oe)(5,Mt,1,2,"p-badge",18)(6,Ft,3,2,"ng-container",11),l()),t&2){let e=K(4),n=s(3).$implicit,i=s();r("target",i.getItemProp(n,"target"))("ngClass",B(11,pt,i.getItemProp(n,"disabled"))),_("href",i.getItemProp(n,"url"),Fe)("data-automationid",i.getItemProp(n,"automationId"))("data-pc-section","action")("tabindex",-1),u(),r("ngIf",i.getItemProp(n,"icon")),u(),r("ngIf",i.getItemProp(n,"escape"))("ngIfElse",e),u(3),r("ngIf",i.getItemProp(n,"badge")),u(),r("ngIf",i.isItemGroup(n))}}function At(t,a){if(t&1&&b(0,"span",19),t&2){let e=s(4).$implicit,n=s();r("ngClass",n.getItemProp(e,"icon"))("ngStyle",n.getItemProp(e,"iconStyle")),_("data-pc-section","icon")("tabindex",-1)}}function Vt(t,a){if(t&1&&(d(0,"span",29),D(1),l()),t&2){let e=s(4).$implicit,n=s();u(),q(n.getItemLabel(e))}}function Kt(t,a){if(t&1&&b(0,"span",30),t&2){let e=s(4).$implicit,n=s();r("innerHTML",n.getItemLabel(e),ce),_("data-pc-section","label")}}function Bt(t,a){if(t&1&&b(0,"p-badge",22),t&2){let e=s(4).$implicit,n=s();r("styleClass",n.getItemProp(e,"badgeStyleClass"))("value",n.getItemProp(e,"badge"))}}function Rt(t,a){t&1&&b(0,"AngleDownIcon",25),t&2&&_("data-pc-section","submenuicon")}function Ot(t,a){t&1&&b(0,"AngleRightIcon",25),t&2&&_("data-pc-section","submenuicon")}function Ht(t,a){if(t&1&&($(0),p(1,Rt,1,1,"AngleDownIcon",24)(2,Ot,1,1,"AngleRightIcon",24),E()),t&2){let e=s(6);u(),r("ngIf",e.root),u(),r("ngIf",!e.root)}}function zt(t,a){}function qt(t,a){t&1&&p(0,zt,0,0,"ng-template",26),t&2&&r("data-pc-section","submenuicon")}function Zt(t,a){if(t&1&&($(0),p(1,Ht,3,2,"ng-container",11)(2,qt,1,1,null,23),E()),t&2){let e=s(5);u(),r("ngIf",!e.submenuiconTemplate),u(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function Qt(t,a){if(t&1&&(d(0,"a",27),p(1,At,1,4,"span",16)(2,Vt,2,1,"span",28)(3,Kt,1,2,"ng-template",null,3,oe)(5,Bt,1,2,"p-badge",18)(6,Zt,3,2,"ng-container",11),l()),t&2){let e=K(4),n=s(3).$implicit,i=s();r("routerLink",i.getItemProp(n,"routerLink"))("queryParams",i.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",i.getItemProp(n,"routerLinkActiveOptions")||He(20,yt))("target",i.getItemProp(n,"target"))("ngClass",B(21,pt,i.getItemProp(n,"disabled")))("fragment",i.getItemProp(n,"fragment"))("queryParamsHandling",i.getItemProp(n,"queryParamsHandling"))("preserveFragment",i.getItemProp(n,"preserveFragment"))("skipLocationChange",i.getItemProp(n,"skipLocationChange"))("replaceUrl",i.getItemProp(n,"replaceUrl"))("state",i.getItemProp(n,"state")),_("data-automationid",i.getItemProp(n,"automationId"))("tabindex",-1)("data-pc-section","action"),u(),r("ngIf",i.getItemProp(n,"icon")),u(),r("ngIf",i.getItemProp(n,"escape"))("ngIfElse",e),u(3),r("ngIf",i.getItemProp(n,"badge")),u(),r("ngIf",i.isItemGroup(n))}}function Nt(t,a){if(t&1&&($(0),p(1,Dt,7,13,"a",13)(2,Qt,7,23,"a",14),E()),t&2){let e=s(2).$implicit,n=s();u(),r("ngIf",!n.getItemProp(e,"routerLink")),u(),r("ngIf",n.getItemProp(e,"routerLink"))}}function jt(t,a){}function Gt(t,a){t&1&&p(0,jt,0,0,"ng-template")}function Ut(t,a){if(t&1&&($(0),p(1,Gt,1,0,null,31),E()),t&2){let e=s(2).$implicit,n=s();u(),r("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",R(2,xt,e.item,n.root))}}function Jt(t,a){if(t&1){let e=C();d(0,"p-menubarSub",32),T("itemClick",function(i){f(e);let o=s(3);return I(o.itemClick.emit(i))})("itemMouseEnter",function(i){f(e);let o=s(3);return I(o.onItemMouseEnter(i))}),l()}if(t&2){let e=s(2).$implicit,n=s();r("itemTemplate",n.itemTemplate)("items",e.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("ariaLabelledBy",n.getItemLabelId(e))("inlineStyles",B(10,vt,n.isItemActive(e)?"flex":"none"))}}function Wt(t,a){if(t&1){let e=C();d(0,"li",9,1)(2,"div",10),T("click",function(i){f(e);let o=s().$implicit,m=s();return I(m.onItemClick(i,o))})("mouseenter",function(i){f(e);let o=s().$implicit,m=s();return I(m.onItemMouseEnter({$event:i,processedItem:o}))}),p(3,Nt,3,2,"ng-container",11)(4,Ut,2,5,"ng-container",11),l(),p(5,Jt,1,12,"p-menubarSub",12),l()}if(t&2){let e=s(),n=e.$implicit,i=e.index,o=s();P(o.getItemProp(n,"styleClass")),r("ngStyle",o.getItemProp(n,"style"))("ngClass",o.getItemClass(n))("tooltipOptions",o.getItemProp(n,"tooltipOptions")),_("id",o.getItemId(n))("data-pc-section","menuitem")("data-p-highlight",o.isItemActive(n))("data-p-focused",o.isItemFocused(n))("data-p-disabled",o.isItemDisabled(n))("aria-label",o.getItemLabel(n))("aria-disabled",o.isItemDisabled(n)||void 0)("aria-haspopup",o.isItemGroup(n)&&!o.getItemProp(n,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(n)?o.isItemActive(n):void 0)("aria-level",o.level+1)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(i)),u(2),_("data-pc-section","content"),u(),r("ngIf",!o.itemTemplate),u(),r("ngIf",o.itemTemplate),u(),r("ngIf",o.isItemVisible(n)&&o.isItemGroup(n))}}function Xt(t,a){if(t&1&&p(0,Ct,1,5,"li",6)(1,Wt,6,21,"li",7),t&2){let e=a.$implicit,n=s();r("ngIf",n.isItemVisible(e)&&n.getItemProp(e,"separator")),u(),r("ngIf",n.isItemVisible(e)&&!n.getItemProp(e,"separator"))}}var Yt=["start"],en=["end"],tn=["item"],nn=["menuicon"],on=["submenuicon"],an=["menubutton"],rn=["rootmenu"],sn=["*"],mn=(t,a)=>({"p-menubar p-component":!0,"p-menubar-mobile":t,"p-menubar-mobile-active":a});function un(t,a){t&1&&de(0)}function ln(t,a){if(t&1&&(d(0,"div",8),p(1,un,1,0,"ng-container",9),l()),t&2){let e=s();u(),r("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function cn(t,a){t&1&&b(0,"BarsIcon")}function pn(t,a){}function dn(t,a){t&1&&p(0,pn,0,0,"ng-template")}function bn(t,a){if(t&1){let e=C();d(0,"a",10,2),T("click",function(i){f(e);let o=s();return I(o.menuButtonClick(i))})("keydown",function(i){f(e);let o=s();return I(o.menuButtonKeydown(i))}),p(2,cn,1,0,"BarsIcon",11)(3,dn,1,0,null,9),l()}if(t&2){let e=s();_("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation)("data-pc-section","button"),u(2),r("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),u(),r("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function _n(t,a){t&1&&de(0)}function fn(t,a){if(t&1&&(d(0,"div",12),p(1,_n,1,0,"ng-container",9),l()),t&2){let e=s();u(),r("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function In(t,a){t&1&&(d(0,"div",12),Be(1),l())}var Ce=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new Se;mouseLeft$=this.mouseLeaves.pipe(Le(()=>Me(this.autoHideDelay)),ke(e=>this.autoHide&&e));static \u0275fac=function(n){return new(n||t)};static \u0275prov=le({token:t,factory:t.\u0275fac})}return t})(),gn=(()=>{class t extends ye{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new v;itemMouseEnter=new v;menuFocus=new v;menuBlur=new v;menuKeydown=new v;menubarViewChild;mouseLeaveSubscriber;menubarService=V(Ce);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.itemClick.emit({originalEvent:e,processedItem:n,isFocus:!0})}getItemProp(e,n,i=null){return e&&e.item?he(e.item[n],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemClass(e){return ee(Y({},this.getItemProp(e,"class")),{"p-menubar-item":!0,"p-menubar-item-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return ee(Y({},this.getItemProp(e,"class")),{"p-menubar-separator":!0})}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){if(this.activeItemPath)return this.activeItemPath.some(n=>n.key===e.key)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return S(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseLeave(){this.menubarService.mouseLeaves.next(!0)}onItemMouseEnter(e){if(this.autoDisplay){this.menubarService.mouseLeaves.next(!1);let{event:n,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(t)))(i||t)}})();static \u0275cmp=L({type:t,selectors:[["p-menubarSub"],["p-menubarsub"]],viewQuery:function(n,i){if(n&1&&ie(gt,7),n&2){let o;h(o=y())&&(i.menubarViewChild=o.first)}},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",w],autoZIndex:[2,"autoZIndex","autoZIndex",w],baseZIndex:[2,"baseZIndex","baseZIndex",Z],mobileActive:[2,"mobileActive","mobileActive",w],autoDisplay:[2,"autoDisplay","autoDisplay",w],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",Z],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[pe,z],decls:3,vars:12,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","menubar",3,"focus","blur","keydown","ngClass","tabindex","ngStyle"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-menubar-item-content",3,"click","mouseenter"],[4,"ngIf"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menubar-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menubar-item-label",3,"id",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menubar-item-icon",3,"ngClass","ngStyle"],[1,"p-menubar-item-label",3,"id"],[1,"p-menubar-item-label",3,"innerHTML","id"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],["class","p-menubar-submenu-icon",4,"ngIf"],[1,"p-menubar-submenu-icon"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menubar-item-label",4,"ngIf","ngIfElse"],[1,"p-menubar-item-label"],[1,"p-menubar-item-label",3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles"]],template:function(n,i){if(n&1){let o=C();d(0,"ul",4,0),T("focus",function(c){return f(o),I(i.menuFocus.emit(c))})("blur",function(c){return f(o),I(i.menuBlur.emit(c))})("keydown",function(c){return f(o),I(i.menuKeydown.emit(c))}),p(2,Xt,2,2,"ng-template",5),l()}n&2&&(r("ngClass",R(9,ht,!i.root,i.root))("tabindex",0)("ngStyle",i.inlineStyles),_("data-pc-section","menu")("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.root?i.menuId:null)("aria-activedescendant",i.focusedItemId),u(2),r("ngForOf",i.items))},dependencies:[t,j,Q,Qe,N,_e,be,fe,Ge,Ue,ue,ve,rt,et,tt,J,me,U],encapsulation:2})}return t})(),Te=(()=>{class t extends ye{document;platformId;el;renderer;cd;menubarService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!1;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new v;onBlur=new v;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=ne([]);number=ne(0);focusedItemInfo=ne({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=V(ct);_model;get visibleItems(){let e=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${S(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,n,i,o,m,c){super(),this.document=e,this.platformId=n,this.el=i,this.renderer=o,this.cd=m,this.menubarService=c,qe(()=>{let g=this.activeItemPath();S(g)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>this.unbindOutsideClickListener()),this.id=this.id||We("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,n=0,i={},o=""){let m=[];return e&&e.forEach((c,g)=>{let x=(o!==""?o+"_":"")+g,M={item:c,index:g,level:n,key:x,parent:i,parentKey:o};M.items=this.createProcessedItems(c.items,n+1,M,x),m.push(M)}),m}bindMatchMediaListener(){if(ae(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,n){return e?he(e[n]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:n,processedItem:i}=e,o=this.isProcessedItemGroup(i),m=G(i.parent);if(this.isSelected(i)){let{index:g,key:x,level:M,parentKey:W,item:X}=i;this.activeItemPath.set(this.activeItemPath().filter(O=>x!==O.key&&x.startsWith(O.key))),this.focusedItemInfo.set({index:g,level:M,parentKey:W,item:X}),this.dirty=!m,A(this.rootmenu.menubarViewChild.nativeElement)}else if(o)this.onItemChange(e);else{let g=m?i:this.activeItemPath().find(x=>x.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,g?g.index:-1),this.mobileActive=!1,A(this.rootmenu.menubarViewChild.nativeElement)}}onItemMouseEnter(e){Ie()||this.mobileActive||this.onItemChange(e)}changeFocusedItemIndex(e,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let o=this.focusedItemInfo();this.focusedItemInfo.set(ee(Y({},o),{item:i.item,index:n})),this.scrollInView()}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=re(this.rootmenu.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e){let{processedItem:n,isFocus:i}=e;if(G(n))return;let{index:o,key:m,level:c,parentKey:g,items:x,item:M}=n,W=S(x),X=this.activeItemPath().filter(O=>O.parentKey!==g&&O.parentKey!==m);W&&X.push(n),this.focusedItemInfo.set({index:o,level:c,parentKey:g,item:M}),this.activeItemPath.set(X),W&&(this.dirty=!0),i&&A(this.rootmenu.menubarViewChild.nativeElement)}toggle(e){this.mobileActive?(this.mobileActive=!1,xe.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,xe.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,n){this.mobileActive&&setTimeout(()=>{A(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&A(this.rootmenu?.menubarViewChild.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),A(this.rootmenu?.menubarViewChild.nativeElement)}onMenuFocus(e){this.focused=!0;let n=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:n?.item};this.focusedItemInfo.set(i),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&Je(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return S(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&S(e.items)}isSelected(e){return this.activeItemPath().some(n=>n.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&S(e.items)}searchItems(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,o=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(m=>this.isItemMatched(m)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(m=>this.isItemMatched(m)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(m=>this.isItemMatched(m)),i!==-1&&(o=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?G(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowRightKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(o=>o.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowUpKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(G(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let m=this.findLastItemIndex();this.changeFocusedItemIndex(e,m)}}else{let o=this.activeItemPath().find(m=>m.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:o?o.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(e);let m=this.activeItemPath().filter(c=>c.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(m)}else{let m=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,m)}}e.preventDefault()}onArrowLeftKey(e){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(o=>o.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let o=this.activeItemPath().filter(m=>m.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(o),e.preventDefault()}else{let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let n=re(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&re(n,'a[data-pc-section="action"]');i?i.click():n&&n.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return ge(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let n=e>0?ge(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return n>-1?n:e}findNextItemIndex(e){let n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+e+1:e}bindResizeListener(){ae(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{Ie()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){ae(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let n=this.rootmenu.el.nativeElement!==e.target&&!this.rootmenu.el.nativeElement.contains(e.target),i=this.mobileActive&&this.menubutton.nativeElement!==e.target&&!this.menubutton.nativeElement.contains(e.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(k(Ze),k(Ee),k($e),k(De),k(ze),k(Ce))};static \u0275cmp=L({type:t,selectors:[["p-menubar"]],contentQueries:function(n,i,o){if(n&1&&(F(o,Yt,4),F(o,en,4),F(o,tn,4),F(o,nn,4),F(o,on,4),F(o,se,4)),n&2){let m;h(m=y())&&(i.startTemplate=m.first),h(m=y())&&(i.endTemplate=m.first),h(m=y())&&(i.itemTemplate=m.first),h(m=y())&&(i.menuIconTemplate=m.first),h(m=y())&&(i.submenuIconTemplate=m.first),h(m=y())&&(i.templates=m)}},viewQuery:function(n,i){if(n&1&&(ie(an,5),ie(rn,5)),n&2){let o;h(o=y())&&(i.menubutton=o.first),h(o=y())&&(i.rootmenu=o.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",w],baseZIndex:[2,"baseZIndex","baseZIndex",Z],autoDisplay:[2,"autoDisplay","autoDisplay",w],autoHide:[2,"autoHide","autoHide",w],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",Z],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[Oe([Ce,ct]),pe,z],ngContentSelectors:sn,decls:8,vars:26,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-menubar-start",4,"ngIf"],["tabindex","0","role","button","class","p-menubar-button",3,"click","keydown",4,"ngIf"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","ariaLabel","ariaLabelledBy","focusedItemId","submenuiconTemplate","activeItemPath"],["class","p-menubar-end",4,"ngIf","ngIfElse"],[1,"p-menubar-start"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-menubar-button",3,"click","keydown"],[4,"ngIf"],[1,"p-menubar-end"]],template:function(n,i){if(n&1){let o=C();Ke(),d(0,"div",3),p(1,ln,2,1,"div",4)(2,bn,4,7,"a",5),d(3,"p-menubarSub",6,0),T("itemClick",function(c){return f(o),I(i.onItemClick(c))})("menuFocus",function(c){return f(o),I(i.onMenuFocus(c))})("menuBlur",function(c){return f(o),I(i.onMenuBlur(c))})("menuKeydown",function(c){return f(o),I(i.onKeyDown(c))})("itemMouseEnter",function(c){return f(o),I(i.onItemMouseEnter(c))}),l(),p(5,fn,2,1,"div",7)(6,In,2,0,"ng-template",null,1,oe),l()}if(n&2){let o=K(7);P(i.styleClass),r("ngClass",R(23,mn,i.queryMatches,i.mobileActive))("ngStyle",i.style),_("data-pc-section","root")("data-pc-name","menubar"),u(),r("ngIf",i.startTemplate||i._startTemplate),u(),r("ngIf",i.model&&i.model.length>0),u(),r("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("ariaLabel",i.ariaLabel)("ariaLabelledBy",i.ariaLabelledBy)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath()),u(2),r("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",o)}},dependencies:[j,Q,N,_e,be,fe,gn,ve,lt,J,U],encapsulation:2,changeDetection:0})}return t})(),dt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Ae({type:t});static \u0275inj=Pe({imports:[Te,U,U]})}return t})();var yn=(t,a)=>({"ml-auto":t,"ml-2":a}),xn=t=>["pi",t];function vn(t,a){t&1&&(te(),d(0,"svg",7)(1,"title"),D(2,"Spotify"),l(),b(3,"circle",8)(4,"path",9),l())}function Cn(t,a){if(t&1&&b(0,"p-badge",15),t&2){let e=s(),n=e.$implicit,i=e.root;r("ngClass",R(2,yn,!i,i))("value",n.badge)}}function Tn(t,a){if(t&1&&(d(0,"span",16),D(1),l()),t&2){let e=s().$implicit;u(),q(e.shortcut)}}function wn(t,a){if(t&1&&b(0,"i",17),t&2){let e=s().root;r("ngClass",B(1,xn,e?"pi-angle-down ml-2":"pi-angle-right ml-auto"))}}function Sn(t,a){if(t&1&&(d(0,"a",10),b(1,"span"),d(2,"span",11),D(3),l(),p(4,Cn,1,5,"p-badge",12)(5,Tn,2,1,"span",13)(6,wn,1,3,"i",14),l()),t&2){let e=a.$implicit;u(),P(e.icon),u(2),q(e.label),u(),r("ngIf",e.badge),u(),r("ngIf",e.shortcut),u(),r("ngIf",e.items)}}function Mn(t,a){if(t&1){let e=C();d(0,"div",18),b(1,"p-menu",19,0),d(3,"p-avatar",20),T("click",function(i){f(e);let o=K(2);return I(o.toggle(i))}),l()()}if(t&2){let e=s();u(),r("model",e.profileItems)("popup",!0)}}var hi=(()=>{class t{constructor(){this.router=V(je),this.spotify=V(it)}ngOnInit(){return we(this,null,function*(){this.items=[{label:"Home",icon:"pi pi-home",command:()=>{this.router.navigate(["/home"])}},{label:"playlists",icon:"pi pi-list",command:()=>{this.router.navigate(["home/playlists"])}},{label:"stats",icon:"pi pi-wave-pulse"}],this.profileItems=[{label:"Options",items:[{label:"Refresh",icon:"pi pi-refresh",command:()=>{window.location.reload()}},{label:"Logout",icon:"pi pi-sign-out",command:()=>{this.spotify.logout(),window.location.href="/login"}}]}]})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=L({type:t,selectors:[["app-home"]],decls:7,vars:1,consts:[["menu",""],[1,"flex","flex-col","h-screen"],[1,"shadow-down","relative",3,"model"],["pTemplate","start"],["pTemplate","item"],["pTemplate","end"],[1,"grow","overflow-x-hidden"],["width","33","height","35","viewBox","0 0 168 168","xmlns","http://www.w3.org/2000/svg"],["cx","84","cy","84","r","84","fill","#1DB954"],["d","M122.9 116.3c-2 3.1-5.9 4-9 2.1-24.7-15.1-56.1-18.6-93.1-10.5-3.6.8-7.2-1.4-8-5s1.4-7.2 5-8c40-8.5 75.4-4.4 103.7 12.2 3.1 2 4 5.9 2.1 9zm-10.8-19.3c-1.6 2.5-4.7 3.2-7.2 1.7-21.4-13.1-54.3-16.9-79.7-9.5-2.9.8-6-.9-6.9-3.8s.9-6 3.8-6.9c28.5-8.1 64.2-4 88.6 10.5 2.4 1.6 3.2 4.7 1.7 7.2zm-9.6-17.3c-1.2 1.9-3.5 2.4-5.4 1.3-17.9-10.9-49.6-14.2-68.6-8-2.2.7-4.6-.4-5.4-2.6-.7-2.2.4-4.6 2.6-5.4 22.6-7.1 57.2-3.4 78.3 9.5 1.9 1.1 2.4 3.5 1.3 5.4z","fill","#FFF"],["pRipple","",1,"flex","align-items-center","p-menuitem-link"],[1,"ml-2"],[3,"ngClass","value",4,"ngIf"],["class","ml-auto border-1 surface-border border-round surface-100 text-xs p-1",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass","value"],[1,"ml-auto","border-1","surface-border","border-round","surface-100","text-xs","p-1"],[3,"ngClass"],[1,"flex","align-items-center","gap-2"],[3,"model","popup"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle",3,"click"]],template:function(n,i){n&1&&(d(0,"div",1)(1,"p-menubar",2),p(2,vn,5,0,"ng-template",3)(3,Sn,7,6,"ng-template",4)(4,Mn,4,2,"ng-template",5),l(),d(5,"div",6),b(6,"router-outlet"),l()()),n&2&&(u(),r("model",i.items))},dependencies:[at,ot,se,J,me,j,Q,N,dt,Te,mt,st,nt,ue,Ne],encapsulation:2})}}return t})();export{hi as a};
