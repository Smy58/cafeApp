import{_ as P,b as y}from"./DAWWk4Tx.js";import{_ as O,c as I}from"./B2geYwVo.js";import{_ as l,t as c,v as a,x as o,N as k,y as _,Q as b,z as p,R as f,S as g,L as m,M as v,B as x,r as S,T}from"./xJfoSkR8.js";import{u as A,a as w}from"./Cm3sh4xz.js";import{u as B}from"./C4IO26kZ.js";import"./CCnVrCTM.js";const E={props:{info:Object},computed:{status(){if(this.info.startWorkTime&&this.info.endWorkTime){let e=new Date,n=this.info.startWorkTime.split(":"),t=this.info.endWorkTime.split(":"),r=new Date(e.getFullYear(),e.getMonth(),e.getDate(),parseInt(n[0]),parseInt(n[1])),d=new Date(e.getFullYear(),e.getMonth(),e.getDate(),parseInt(t[0]),parseInt(t[1]));return r<=e&&e<=d}return!1}}},F={class:"cafe-header"},L={class:"cafe-header__content"},j={class:"cafe-header__name"},M={class:"cafe-header__address"},N={class:"cafe-header__info"},D={class:"cafe-header__text"},Y={class:"cafe-header__info"},q={class:"cafe-header__text"};function z(e,n,t,r,d,s){const i=O;return c(),a("div",F,[o("div",{class:"cafe-header__img",style:k(`background-image: url(${t.info.image})`)},null,4),o("div",L,[o("h2",j,_(t.info.name),1),o("p",M,_(t.info.address),1),o("div",N,[o("div",{class:b(`cafe-header__status ${s.status?"cafe-header__status_open":""}`)},null,2),o("p",D,_(s.status?"Open":"Closed"),1)]),o("div",Y,[p(i,{color:"#757575"}),o("p",q,"Waiting "+_(t.info.waitingTime)+" min",1)])])])}const W=l(E,[["render",z]]),V={props:{menu:Object,activeChapter:String},data(){return{}},methods:{scrollEvent(){var e=window.document.querySelector(".menu-nav");e.classList.toggle("menu-nav_sticky",window.scrollY>373)}},beforeMount(){window.addEventListener("scroll",this.scrollEvent,!1)},unmounted(){window.removeEventListener("scroll",this.scrollEvent,!1)}},H={class:"menu-nav"},R={class:"menu-nav__content"},J=["href"];function Q(e,n,t,r,d,s){return c(),a("div",H,[o("div",R,[(c(!0),a(f,null,g(t.menu,i=>(c(),a("a",{href:`#${i.id}`,class:b(`menu-nav__link ${i.id==t.activeChapter?"menu-nav__link_active":""}`),key:i.id},_(i.name),11,J))),128))])])}const U=l(V,[["render",Q]]),G={props:{position:Object,onOpenPos:Function},data(){var e,n,t;return{name:((e=this.position)==null?void 0:e.name)||"",cost:((n=this.position)==null?void 0:n.cost)||0,image:((t=this.position)==null?void 0:t.image)||""}},computed:{costString(){return this.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},methods:{openPosition(){this.onOpenPos(this.position)}}},K={class:"position"},X={class:"position__content"},Z={class:"position__name"};function tt(e,n,t,r,d,s){const i=P;return c(),a("div",K,[o("div",X,[o("div",{class:"position__img",style:k(`background-image: url(${t.position.image})`)},[t.position.image===""?(c(),m(i,{key:0,color:"#f2f2f2"})):v("",!0)],4),o("h4",Z,_(d.name),1)]),o("button",{onClick:n[0]||(n[0]=(...u)=>s.openPosition&&s.openPosition(...u)),class:"position__btn"},_(s.costString)+" т",1)])}const et=l(G,[["render",tt]]),nt={props:{positions:Array,onOpenPos:Function}},ot={class:"positions"};function st(e,n,t,r,d,s){const i=et;return c(),a("div",ot,[(c(!0),a(f,null,g(t.positions,u=>(c(),m(i,{key:u.id,position:u,onOpenPos:t.onOpenPos},null,8,["position","onOpenPos"]))),128))])}const it=l(nt,[["render",st]]),dt={props:{chapter:Object,setActive:Function,onOpenPos:Function},data(){var e,n,t;return{id:((e=this.chapter)==null?void 0:e.id)||"",name:((n=this.chapter)==null?void 0:n.name)||"",positions:((t=this.chapter)==null?void 0:t.positions)||[]}},methods:{handleScroll(){const e=window.document.getElementById(this.id);let n=window.scrollY,t=e.offsetTop,r=e.offsetHeight;n>=t&&n<t+r&&this.setActive(this.id)}},beforeMount(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},ct=["id"],at={class:"chapter__title"};function rt(e,n,t,r,d,s){const i=it;return c(),a("div",{class:"chapter",id:d.id},[o("h3",at,_(d.name),1),p(i,{positions:d.positions,onOpenPos:t.onOpenPos},null,8,["positions","onOpenPos"])],8,ct)}const _t=l(dt,[["render",rt]]),ut={props:{menu:Object,onOpenPos:Function},data(){return{activeChapter:"0"}},methods:{handleActive(e){this.activeChapter=e}}},lt={class:"menu"};function ht(e,n,t,r,d,s){const i=U,u=_t;return c(),a("div",lt,[p(i,{menu:t.menu,activeChapter:d.activeChapter},null,8,["menu","activeChapter"]),(c(!0),a(f,null,g(t.menu,h=>(c(),m(u,{key:h.id,chapter:h,setActive:s.handleActive,onOpenPos:t.onOpenPos},null,8,["chapter","setActive","onOpenPos"]))),128))])}const pt=l(ut,[["render",ht]]),mt={props:{totalCost:Number},computed:{costString(){return(this.totalCost?this.totalCost:0).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},methods:{openBusket(){this.$router.push("/busket")}}},ft={class:"cafe-busket"},gt={class:"cafe-busket__content"},vt={class:"cafe-busket__cost"};function bt(e,n,t,r,d,s){return c(),a("div",ft,[o("div",gt,[o("p",vt,[x("К оплате: "),o("b",null,_(s.costString)+" т",1)]),o("div",{onClick:n[0]||(n[0]=(...i)=>s.openBusket&&s.openBusket(...i)),class:"btn cafe-busket__btn"},"Смотреть заказ")])])}const Ct=l(mt,[["render",bt]]),$t={props:{position:Object},computed:{posInfo(){return this.position}}},kt={class:"position-header"},It={class:"position-header__content"},xt={class:"position-header__name"},At={class:"position-header__info"};function Pt(e,n,t,r,d,s){return c(),a("div",kt,[o("div",{class:"position-header__img",style:k(`background-image: url(${s.posInfo.image})`)},null,4),o("div",It,[o("h2",xt,_(s.posInfo.name),1),o("p",At,_(s.posInfo.info),1)])])}const yt=l($t,[["render",Pt]]),Ot={props:{item:Object,addAddon:Function,delAddon:Function},data(){return{isChoose:!1}},methods:{toogleInput(e){this.isChoose=!this.isChoose,console.log(this.isChoose),this.isChoose?this.addAddon(this.item):this.delAddon(this.item)}}},St={class:"addons__field"},Tt=["name","id"],wt=["for"],Bt={class:"addons__cost"};function Et(e,n,t,r,d,s){return c(),a("div",St,[o("input",{onClick:n[0]||(n[0]=(...i)=>s.toogleInput&&s.toogleInput(...i)),type:"checkbox",name:t.item.id,id:t.item.id,class:"addons__checkbox"},null,8,Tt),o("label",{for:t.item.id,class:"addons__label"},_(t.item.name),9,wt),o("p",Bt,"+ "+_(t.item.cost)+" т",1)])}const Ft=l(Ot,[["render",Et]]),Lt={props:{addons:Array,addAddon:Function,delAddon:Function}},jt={class:"addons"},Mt=o("h3",{class:"addons__title"},"Добавки",-1),Nt={class:"addons__content"};function Dt(e,n,t,r,d,s){const i=Ft;return c(),a("div",jt,[Mt,o("div",Nt,[(c(!0),a(f,null,g(t.addons,u=>(c(),m(i,{key:u.id,item:u,addAddon:t.addAddon,delAddon:t.delAddon},null,8,["item","addAddon","delAddon"]))),128))])])}const Yt=l(Lt,[["render",Dt]]),qt={props:{ingredient:Object,addIngred:Function,delIngred:Function},data(){var e,n,t;return{name:((e=this.ingredient)==null?void 0:e.name)||"",id:((n=this.ingredient)==null?void 0:n.id)||"",list:((t=this.ingredient)==null?void 0:t.list)||[],value:null}},methods:{onChange(e){this.value&&this.delIngred(this.value),this.value=e,this.addIngred(this.value)}}},zt={class:"ingredient"},Wt={class:"ingredient__title"},Vt=["onClick","name","id"],Ht=["for"],Rt={class:"ingredient__cost"};function Jt(e,n,t,r,d,s){return c(),a("div",zt,[o("h3",Wt,_(d.name),1),(c(!0),a(f,null,g(d.list,i=>(c(),a("div",{class:"ingredient__field",key:i.id},[o("input",{onClick:u=>s.onChange(i),type:"radio",name:d.id,id:i.id,class:"ingredient__radio"},null,8,Vt),o("label",{for:i.id,class:"ingredient__label"},_(i.name),9,Ht),o("p",Rt,"+ "+_(i.cost)+" т",1)]))),128))])}const Qt=l(qt,[["render",Jt]]),Ut={props:{position:Object,addAddon:Function,delAddon:Function,addIngred:Function,delIngred:Function},data(){var e,n;return{addons:((e=this.position)==null?void 0:e.addons)||[],ingredients:((n=this.position)==null?void 0:n.ingredients)||[]}}},Gt={class:"edits"},Kt={class:"edit__engredients"};function Xt(e,n,t,r,d,s){const i=Yt,u=Qt;return c(),a("div",Gt,[d.addons.length!=0?(c(),m(i,{key:0,addons:d.addons,addAddon:t.addAddon,delAddon:t.delAddon},null,8,["addons","addAddon","delAddon"])):v("",!0),o("div",Kt,[(c(!0),a(f,null,g(d.ingredients,h=>(c(),m(u,{key:h.id,ingredient:h,addIngred:t.addIngred,delIngred:t.delIngred},null,8,["ingredient","addIngred","delIngred"]))),128))])])}const Zt=l(Ut,[["render",Xt]]),te={props:{cost:Number,count:Number,plusCount:Function,minusCount:Function,addToBusket:Function},data(){return{}},computed:{totalCost(){var e=this.cost*this.count;return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},ee={class:"button-bar"},ne={class:"button-bar__text"},oe={class:"button-bar__control"},se={class:"button-bar__count"},ie=["disabled"],de={class:"button-bar__count-text"};function ce(e,n,t,r,d,s){return c(),a("div",ee,[o("p",ne,[x("Итого: "),o("b",null,_(s.totalCost)+" т",1)]),o("div",oe,[o("div",se,[o("button",{onClick:n[0]||(n[0]=(...i)=>t.minusCount&&t.minusCount(...i)),class:b(`button-bar__count-btn ${t.count===1?"button-bar__count-btn_dis":""}`),disabled:t.count===1},"-",10,ie),o("p",de,_(t.count)+" шт",1),o("button",{onClick:n[1]||(n[1]=(...i)=>t.plusCount&&t.plusCount(...i)),class:"button-bar__count-btn"},"+")]),o("button",{onClick:n[2]||(n[2]=(...i)=>t.addToBusket&&t.addToBusket(...i)),class:"button-bar__btn"},"Добавить")])])}const ae=l(te,[["render",ce]]),re={data(){return{touchStart:0,orderAddons:[],orderIngredients:[],count:1}},props:{position:Object,isOpen:Boolean,onClose:Function},methods:{addAddon(e){this.orderAddons.push(e)},delAddon(e){const n=this.orderAddons.findIndex(t=>t.id===e.id);this.orderAddons.splice(n,1)},addIngred(e){this.orderIngredients.push(e)},delIngred(e){const n=this.orderIngredients.findIndex(t=>t.id===e.id);this.orderIngredients.splice(n,1)},plusCount(){this.count+=1},minusCount(){this.count-=1},clearData(){this.orderAddons=[],this.orderIngredients=[],this.count=1},closePopup(e){this.onClose(),this.clearData(),setTimeout(()=>{e.style.top="auto",e.style.bottom=0},1e3)},addToBusket(){const{addItem:e}=A(),n=document.querySelector(".cafe-popup"),t={id:this.orderItem.id,name:this.orderItem.name,cost:this.orderItem.cost,count:this.count,totalCost:this.totalCost,addons:this.orderAddons,ingredients:this.orderIngredients,image:this.orderItem.image};e(t),this.clearData(),this.closePopup(n)},onTouchStart(e){console.log(e),this.touchStart=e.changedTouches[0].clientY},onTouchMove(e,n){var t=n.targetTouches[0];t.clientY>=this.touchStart&&(e.style.bottom=0-(t.clientY-this.touchStart)+"px")},onTouchEnd(e,n){var t=n.changedTouches[0];t.clientY>150+this.touchStart?this.closePopup(e):(e.style.top="auto",e.style.bottom=0)}},computed:{totalCost(){let e=this.orderItem.cost;return this.orderAddons.forEach(n=>{e+=n.cost}),this.orderIngredients.forEach(n=>{e+=n.cost}),e},orderItem(){return{id:this.position.id,name:this.position.name,cost:this.position.cost,image:this.position.image}}},mounted(){const e=document.querySelector(".cafe-popup__drag-zone"),n=document.querySelector(".cafe-popup");n.style.bottom=0,e.addEventListener("touchstart",t=>{this.onTouchStart(t)}),e.addEventListener("touchmove",t=>{this.onTouchMove(n,t)}),e.addEventListener("touchend",t=>{this.onTouchEnd(n,t)})},beforeUnmount(){const e=document.querySelector(".cafe-popup__drag-zone"),n=document.querySelector(".cafe-popup");e.removeEventListener("touchstart",t=>{this.onTouchStart(t)}),e.removeEventListener("touchmove",t=>{this.onTouchMove(n,t)}),e.removeEventListener("touchend",t=>{this.onTouchEnd(n,t)})}},_e=o("div",{class:"cafe-popup__drag-zone"},[o("div",{class:"cafe-popup__drag-bar"})],-1),ue={class:"cafe-popup__content"};function le(e,n,t,r,d,s){var C,$;const i=yt,u=Zt,h=ae;return c(),a("div",{class:b(`cafe-popup ${t.isOpen?"cafe-popup_show":""}`)},[_e,o("div",ue,[p(i,{position:t.position},null,8,["position"]),(C=t.position)!=null&&C.addons||($=t.position)!=null&&$.ingredients?(c(),m(u,{key:0,position:t.position,addAddon:s.addAddon,delAddon:s.delAddon,addIngred:s.addIngred,delIngred:s.delIngred},null,8,["position","addAddon","delAddon","addIngred","delIngred"])):v("",!0),p(h,{cost:s.totalCost,count:d.count,plusCount:s.plusCount,minusCount:s.minusCount,addToBusket:s.addToBusket},null,8,["cost","count","plusCount","minusCount","addToBusket"])])],2)}const he=l(re,[["render",le]]),pe={data(){return{cafe:{},isPopup:!1,position:{}}},computed:{busket(){const{getBusket:e}=A();return e||[]},totalCost(){let e=0;return this.busket.forEach(n=>{e+=n.totalCost*n.count}),e}},methods:{exit(){this.$router.push("/")},tooglePopup(){this.isPopup=!this.isPopup,this.isPopup?document.body.style.overflow="hidden":document.body.style.overflow="auto"},openPosition(e){this.position=e,this.tooglePopup()}},async beforeMount(){const{setCurCafe:e}=w(),{setLoader:n}=B(),t=S({});let r=JSON.parse((this._.provides[T]||this.$route).query.cafeId);n(!0),await I.getCafeId(r);const{data:d}=await I.getCafeId(r);t.value=await(d==null?void 0:d.value),n(!1),e(t.value),this.cafe=t.value,this.cafe.notWorking&&this.$router.push("/notworking")}},me={class:"cafe"};function fe(e,n,t,r,d,s){const i=y,u=W,h=pt,C=Ct,$=he;return c(),a("div",me,[p(i,{onClose:s.exit},null,8,["onClose"]),p(u,{info:d.cafe},null,8,["info"]),p(h,{menu:d.cafe.menu,onOpenPos:s.openPosition},null,8,["menu","onOpenPos"]),s.busket.length>0?(c(),m(C,{key:0,totalCost:s.totalCost},null,8,["totalCost"])):v("",!0),p($,{onClose:s.tooglePopup,isOpen:d.isPopup,position:d.position},null,8,["onClose","isOpen","position"]),d.isPopup?(c(),a("div",{key:1,class:b(`cafe__bg ${d.isPopup?"cafe__bg_show":""}`)},null,2)):v("",!0)])}const Ie=l(pe,[["render",fe]]);export{Ie as default};
