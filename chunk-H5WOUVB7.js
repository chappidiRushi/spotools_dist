import{b as Ce}from"./chunk-XVI2LJK2.js";import{a as De,b as Ie}from"./chunk-5RMFFOQL.js";import{g as Pe,h as Se,i as be,w as Le,x as Oe}from"./chunk-LKCPHQ7D.js";import{d as _e,h as ve}from"./chunk-4ERE5QJG.js";import{$a as K,$b as $,Ab as p,Ac as pe,Ad as J,Bb as te,Bc as de,Be as Te,Cb as k,Cc as ce,Db as m,Fb as u,Gb as w,Ka as Y,Kb as L,Lb as oe,Mb as ie,Mc as B,Md as ge,Na as l,Ob as F,Pb as z,Pd as me,Qb as E,Qd as ue,R as j,Rb as ae,Rd as we,S as N,Sd as D,Tb as Q,Td as fe,Ub as ne,X as C,Xa as O,Ya as G,ab as U,bb as g,bc as A,ca as W,d as H,da as h,ea as y,ga as I,gc as f,hc as T,ib as r,ie as he,ka as P,ke as ye,mb as V,nb as R,ob as X,qb as Z,rb as ee,sb as d,tb as c,ub as S,vb as x,wb as M,wc as re,xb as _,yb as b,yc as se,zb as v,zc as le}from"./chunk-7EGO6TMF.js";var ze=({dt:t})=>`
.p-dataview {
    border-color: ${t("dataview.border.color")};
    border-width: ${t("dataview.border.width")};
    border-style: solid;
    border-radius: ${t("dataview.border.radius")};
    padding: ${t("dataview.padding")};
}

.p-dataview-header {
    background: ${t("dataview.header.background")};
    color: ${t("dataview.header.color")};
    border-color: ${t("dataview.header.border.color")};
    border-width: ${t("dataview.header.border.width")};
    border-style: solid;
    padding: ${t("dataview.header.padding")};
    border-radius: ${t("dataview.header.border.radius")};
}

.p-dataview-content {
    background: ${t("dataview.content.background")};
    border-color: ${t("dataview.content.border.color")};
    border-width: ${t("dataview.content.border.width")};
    border-style: solid;
    color: ${t("dataview.content.color")};
    padding: ${t("dataview.content.padding")};
    border-radius: ${t("dataview.content.border.radius")};
}

.p-dataview-footer {
    background: ${t("dataview.footer.background")};
    color: ${t("dataview.footer.color")};
    border-color: ${t("dataview.footer.border.color")};
    border-width: ${t("dataview.footer.border.width")};
    border-style: solid;
    padding: ${t("dataview.footer.padding")};
    border-radius: ${t("dataview.footer.border.radius")};
}

.p-dataview-paginator-top {
    border-width: ${t("dataview.paginator.top.border.width")};
    border-color: ${t("dataview.paginator.top.border.color")};
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: ${t("dataview.paginator.bottom.border.width")};
    border-color: ${t("dataview.paginator.bottom.border.color")};
    border-style: solid;
}
`,Ee={root:({props:t})=>["p-dataview p-component",{"p-dataview-list":t.layout==="list","p-dataview-grid":t.layout==="grid"}],header:"p-dataview-header",pcPaginator:({position:t})=>"p-dataview-paginator-"+t,content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},Ve=(()=>{class t extends he{name="dataview";theme=ze;classes=Ee;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Qe=["list"],$e=["grid"],Ae=["header"],Be=["emptymessage"],Je=["footer"],qe=["paginatorleft"],He=["paginatorright"],je=["paginatordropdownitem"],Ne=["loadingIcon"],We=["listicon"],Ye=["gridicon"],Ge=[[["p-header"]],[["p-footer"]]],Ke=["p-header","p-footer"],Ue=(t,s)=>({"p-dataview p-component":!0,"p-dataview-list":t,"p-dataview-grid":s}),Re=t=>({$implicit:t});function Xe(t,s){if(t&1&&S(0,"i"),t&2){let e=p(2);V("p-dataview-loading-icon pi-spin "+e.loadingIcon)}}function Ze(t,s){t&1&&S(0,"SpinnerIcon",14),t&2&&r("spin",!0)("styleClass","p-dataview-loading-icon")}function et(t,s){}function tt(t,s){t&1&&g(0,et,0,0,"ng-template")}function ot(t,s){if(t&1&&(x(0),g(1,Ze,1,2,"SpinnerIcon",12)(2,tt,1,0,null,13),M()),t&2){let e=p(2);l(),r("ngIf",!e.loadingicon),l(),r("ngTemplateOutlet",e.loadingicon)}}function it(t,s){if(t&1&&(d(0,"div",9)(1,"div",10),g(2,Xe,1,2,"i",11)(3,ot,3,2,"ng-container",6),c()()),t&2){let e=p();l(2),r("ngIf",e.loadingIcon),l(),r("ngIf",!e.loadingIcon)}}function at(t,s){t&1&&_(0)}function nt(t,s){if(t&1&&(d(0,"div",15),k(1),g(2,at,1,0,"ng-container",13),c()),t&2){let e=p();l(2),r("ngTemplateOutlet",e.headerTemplate)}}function rt(t,s){if(t&1){let e=b();d(0,"p-paginator",16),v("onPageChange",function(o){h(e);let a=p();return y(a.paginate(o))}),c()}if(t&2){let e=p();r("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)}}function st(t,s){t&1&&_(0)}function lt(t,s){if(t&1&&(g(0,st,1,0,"ng-container",17),$(1,"slice")),t&2){let e=p();r("ngTemplateOutlet",e.listTemplate)("ngTemplateOutletContext",Q(6,Re,e.paginator?A(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function pt(t,s){t&1&&_(0)}function dt(t,s){if(t&1&&(g(0,pt,1,0,"ng-container",17),$(1,"slice")),t&2){let e=p();r("ngTemplateOutlet",e.gridTemplate)("ngTemplateOutletContext",Q(6,Re,e.paginator?A(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function ct(t,s){if(t&1&&(x(0),L(1),M()),t&2){let e=p(2);l(),ie(" ",e.emptyMessageLabel," ")}}function gt(t,s){t&1&&_(0,null,0)}function mt(t,s){if(t&1&&(d(0,"div")(1,"div",18),g(2,ct,2,1,"ng-container",19)(3,gt,2,0,"ng-container",13),c()()),t&2){let e=p();l(2),r("ngIf",!e.emptymessageTemplate)("ngIfElse",e.empty),l(),r("ngTemplateOutlet",e.emptymessageTemplate)}}function ut(t,s){if(t&1){let e=b();d(0,"p-paginator",20),v("onPageChange",function(o){h(e);let a=p();return y(a.paginate(o))}),c()}if(t&2){let e=p();r("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)}}function wt(t,s){t&1&&_(0)}function ft(t,s){if(t&1&&(d(0,"div",21),k(1,1),g(2,wt,1,0,"ng-container",13),c()),t&2){let e=p();l(2),r("ngTemplateOutlet",e.footerTemplate)}}var q=(()=>{class t extends ye{paginator;rows;totalRecords;pageLinks=5;rowsPerPageOptions;paginatorPosition="bottom";paginatorStyleClass;alwaysShowPaginator=!0;paginatorDropdownAppendTo;paginatorDropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showFirstLastIcon=!0;showPageLinks=!0;lazy;lazyLoadOnInit=!0;emptyMessage="";style;styleClass;gridStyleClass="";trackBy=(e,n)=>n;filterBy;filterLocale;loading;loadingIcon;first=0;sortField;sortOrder;value;layout="list";onLazyLoad=new P;onPage=new P;onSort=new P;onChangeLayout=new P;listTemplate;gridTemplate;headerTemplate;emptymessageTemplate;footerTemplate;paginatorleft;paginatorright;paginatordropdownitem;loadingicon;listicon;gridicon;header;footer;_value;filteredValue;filterValue;initialized;_layout="list";translationSubscription;_componentStyle=C(Ve);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(fe.EMPTY_MESSAGE)}filterService=C(ge);ngOnInit(){super.ngOnInit(),this.lazy&&this.lazyLoadOnInit&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.initialized=!0}ngAfterViewInit(){super.ngAfterViewInit()}ngOnChanges(e){super.ngOnChanges(e),e.value&&(this._value=e.value.currentValue,this.updateTotalRecords(),!this.lazy&&this.hasFilter()&&this.filter(this.filterValue)),(e.sortField||e.sortOrder)&&(!this.lazy||this.initialized)&&this.sort()}updateTotalRecords(){this.totalRecords=this.lazy?this.totalRecords:this._value?this._value.length:0}paginate(e){this.first=e.first,this.rows=e.rows,this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.onPage.emit({first:this.first,rows:this.rows})}sort(){this.first=0,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.value.sort((e,n)=>{let o=J(e,this.sortField),a=J(n,this.sortField),i=null;return o==null&&a!=null?i=-1:o!=null&&a==null?i=1:o==null&&a==null?i=0:typeof o=="string"&&typeof a=="string"?i=o.localeCompare(a):i=o<a?-1:o>a?1:0,this.sortOrder*i}),this.hasFilter()&&this.filter(this.filterValue)),this.onSort.emit({sortField:this.sortField,sortOrder:this.sortOrder})}isEmpty(){let e=this.filteredValue||this.value;return e==null||e.length==0}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder}}getBlockableElement(){return this.el.nativeElement.children[0]}filter(e,n="contains"){if(this.filterValue=e,this.value&&this.value.length){let o=this.filterBy.split(",");this.filteredValue=this.filterService.filter(this.value,o,e,n,this.filterLocale),this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.first=0,this.totalRecords=this.filteredValue?this.filteredValue.length:this.value?this.value.length:0),this.cd.markForCheck()}}hasFilter(){return this.filterValue&&this.filterValue.trim().length>0}ngOnDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=O({type:t,selectors:[["p-dataView"],["p-dataview"],["p-data-view"]],contentQueries:function(n,o,a){if(n&1&&(m(a,Qe,5),m(a,$e,5),m(a,Ae,5),m(a,Be,5),m(a,Je,5),m(a,qe,5),m(a,He,5),m(a,je,5),m(a,Ne,5),m(a,We,5),m(a,Ye,5),m(a,me,5),m(a,ue,5)),n&2){let i;u(i=w())&&(o.listTemplate=i.first),u(i=w())&&(o.gridTemplate=i.first),u(i=w())&&(o.headerTemplate=i.first),u(i=w())&&(o.emptymessageTemplate=i.first),u(i=w())&&(o.footerTemplate=i.first),u(i=w())&&(o.paginatorleft=i.first),u(i=w())&&(o.paginatorright=i.first),u(i=w())&&(o.paginatordropdownitem=i.first),u(i=w())&&(o.loadingicon=i.first),u(i=w())&&(o.listicon=i.first),u(i=w())&&(o.gridicon=i.first),u(i=w())&&(o.header=i.first),u(i=w())&&(o.footer=i.first)}},inputs:{paginator:[2,"paginator","paginator",f],rows:[2,"rows","rows",T],totalRecords:[2,"totalRecords","totalRecords",T],pageLinks:[2,"pageLinks","pageLinks",T],rowsPerPageOptions:"rowsPerPageOptions",paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",f],paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",f],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",f],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",f],showPageLinks:[2,"showPageLinks","showPageLinks",f],lazy:[2,"lazy","lazy",f],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",f],emptyMessage:"emptyMessage",style:"style",styleClass:"styleClass",gridStyleClass:"gridStyleClass",trackBy:"trackBy",filterBy:"filterBy",filterLocale:"filterLocale",loading:[2,"loading","loading",f],loadingIcon:"loadingIcon",first:[2,"first","first",T],sortField:"sortField",sortOrder:[2,"sortOrder","sortOrder",T],value:"value",layout:"layout"},outputs:{onLazyLoad:"onLazyLoad",onPage:"onPage",onSort:"onSort",onChangeLayout:"onChangeLayout"},features:[ae([Ve]),U,K,W],ngContentSelectors:Ke,decls:10,vars:15,consts:[["empty",""],[3,"ngClass","ngStyle"],["class","p-dataview-loading",4,"ngIf"],["class","p-dataview-header",4,"ngIf"],["styleClass","p-paginator-top",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","onPageChange",4,"ngIf"],[1,"p-dataview-content"],[4,"ngIf"],["styleClass","p-paginator-bottom",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","onPageChange",4,"ngIf"],["class","p-dataview-footer",4,"ngIf"],[1,"p-dataview-loading"],[1,"p-dataview-loading-overlay","p-overlay-mask"],[3,"class",4,"ngIf"],[3,"spin","styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"spin","styleClass"],[1,"p-dataview-header"],["styleClass","p-paginator-top",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-dataview-emptymessage"],[4,"ngIf","ngIfElse"],["styleClass","p-paginator-bottom",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass"],[1,"p-dataview-footer"]],template:function(n,o){n&1&&(te(Ge),d(0,"div",1),g(1,it,4,2,"div",2)(2,nt,3,1,"div",3)(3,rt,1,17,"p-paginator",4),d(4,"div",5),g(5,lt,2,8,"ng-container")(6,dt,2,8,"ng-container")(7,mt,4,3,"div",6),c(),g(8,ut,1,17,"p-paginator",7)(9,ft,3,1,"div",8),c()),n&2&&(V(o.styleClass),r("ngClass",ne(12,Ue,o.layout==="list",o.layout==="grid"))("ngStyle",o.style),l(),r("ngIf",o.loading),l(),r("ngIf",o.header||o.headerTemplate),l(),r("ngIf",o.paginator&&(o.paginatorPosition==="top"||o.paginatorPosition=="both")),l(2),R(o.layout==="list"?5:-1),l(),R(o.layout==="grid"?6:-1),l(),r("ngIf",o.isEmpty()&&!o.loading),l(),r("ngIf",o.paginator&&(o.paginatorPosition==="bottom"||o.paginatorPosition=="both")),l(),r("ngIf",o.footer||o.footerTemplate))},dependencies:[ce,re,se,pe,le,de,Oe,Le,_e,D],encapsulation:2,changeDetection:0})}return t})(),xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=N({imports:[q,D,D]})}return t})();function yt(t,s){if(t&1){let e=b();d(0,"div",4)(1,"div",5),L(2,"Your Top Items"),c(),d(3,"div")(4,"p-dropdown",6),E("ngModelChange",function(o){h(e);let a=p();return z(a.selectedOption,o)||(a.selectedOption=o),y(o)}),v("onChange",function(){h(e);let o=p();return y(o.updatedStats())}),c(),d(5,"p-dropdown",7),E("ngModelChange",function(o){h(e);let a=p();return z(a.selectedTimeOption,o)||(a.selectedTimeOption=o),y(o)}),v("onChange",function(){h(e);let o=p();return y(o.updatedStats())}),c()()()}if(t&2){let e=p();l(4),r("options",e.topOptions),F("ngModel",e.selectedOption),l(),r("options",e.timeOptions),F("ngModel",e.selectedTimeOption)}}function _t(t,s){if(t&1&&(d(0,"div",9),S(1,"img",10),d(2,"div",11),L(3),c()()),t&2){let e=s.$implicit;l(),r("src",(e.album==null||e.album.images[0]==null?null:e.album.images[0].url)||(e.images[0]==null?null:e.images[0].url),Y),l(2),oe(e.name)}}function vt(t,s){if(t&1&&(d(0,"div",8),Z(1,_t,4,2,"div",9,X),c()),t&2){let e=s.$implicit;l(),ee(e)}}var Me=[{name:"Tracks",code:"tracks"},{name:"Artist",code:"artist"}],ke=[{name:"Short Term",code:"short_term"},{name:"Medium Term",code:"medium_term"},{name:"Long Term",code:"long_term"}],Xt=(()=>{class t{constructor(){this.spotify=C(Te),this.topOptions=Me,this.selectedOption=Me[0],this.timeOptions=ke,this.selectedTimeOption=ke[0]}ngOnInit(){this.updatedStats()}navigateTo(e){e&&window.open(e,"_blank")}updatedStats(){return H(this,null,function*(){if(this.topArtists=void 0,this.topTracks=void 0,this.selectedOption.code==="tracks"){let e=yield this.spotify.userTopItems(this.selectedTimeOption.code);if(B(e))return;this.topTracks=e.result.items}else if(this.selectedOption.code==="artist"){let e=yield this.spotify.userTopArtists(this.selectedTimeOption.code);if(B(e))return;console.log("\u{1F680} ~ file: stats.component.ts:70 ~ StatsComponent ~ updatedStats ~ artistRes:",e),this.topArtists=e.result.items,console.log(this.topArtists)}})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=O({type:t,selectors:[["app-stats"]],decls:4,vars:1,consts:[["dv",""],["layout","grid",3,"value"],["pTemplate","header"],["pTemplate","grid"],[1,"flex","justify-between","items-center"],[1,"ml-0","text-xl","font-bold"],["optionLabel","name","placeholder","Select an option",1,"px-2",3,"ngModelChange","onChange","options","ngModel"],["optionLabel","name","placeholder","Select a time range",3,"ngModelChange","onChange","options","ngModel"],[1,"flex","flex-wrap"],[1,"m-4","w-56","p-2","shadow-c","rounded-md","hover:cursor-pointer","scaleIt","overflow-hidden"],["alt","",1,"w-52","h-52","rounded-md",3,"src"],[1,"ml-0","text-lg","font-bold","truncate"]],template:function(n,o){n&1&&(d(0,"p-dataView",1,0),g(2,yt,6,4,"ng-template",2)(3,vt,3,0,"ng-template",3),c()),n&2&&r("value",o.topTracks||o.topArtists)},dependencies:[xe,q,we,ve,be,Pe,Se,Ce,Ie,De],styles:[".shadow-c[_ngcontent-%COMP%]{box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px}"]})}}return t})();export{Xt as StatsComponent};
