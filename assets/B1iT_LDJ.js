import{_ as w,a as A,b as S}from"./DAWWk4Tx.js";import{_ as u,t as c,v as h,x as s,L as p,M as m,N as y,y as l,z as d,B as O,O as H,P as M,C as N,D as P,Q as B,R as F,S as V}from"./xJfoSkR8.js";import{u as k,a as v}from"./Cm3sh4xz.js";import{u as T}from"./C4IO26kZ.js";import{o as I}from"./DCefP-L6.js";import"./CCnVrCTM.js";const z={props:{color:String,width:String,height:String},data(){return{defWidth:this.width?this.width:"18px",defHeight:this.height?this.height:"20px",defColor:this.color?this.color:"#000"}}},D=["width","height"],$=["fill"];function J(o,t,i,r,n,e){return c(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.defWidth,height:n.defHeight,viewBox:"0 0 24 24"},[s("path",{fill:n.defColor,d:"M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"},null,8,$)],8,D)}const U=u(z,[["render",J]]),L={props:{color:String,width:String,height:String},data(){return{defWidth:this.width?this.width:"18px",defHeight:this.height?this.height:"20px",defColor:this.color?this.color:"#000"}}},R=["width","height"],Q=["fill"];function X(o,t,i,r,n,e){return c(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.defWidth,height:n.defHeight,viewBox:"0 0 24 24"},[s("path",{fill:n.defColor,d:"M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"},null,8,Q)],8,R)}const G=u(L,[["render",X]]),W={props:{color:String,width:String,height:String},data(){return{defWidth:this.width?this.width:"18px",defHeight:this.height?this.height:"20px",defColor:this.color?this.color:"#000"}}},q=["width","height"],E=["fill"];function Y(o,t,i,r,n,e){return c(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.defWidth,height:n.defHeight,viewBox:"0 0 24 24"},[s("path",{fill:n.defColor,d:"M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"},null,8,E)],8,q)}const K=u(W,[["render",Y]]),Z={props:{item:Object,onMinus:Function,onPlus:Function,onChange:Function,onDel:Function},beforeMount(){console.log(this.item)},data(){var o,t,i,r,n,e;return{name:((o=this.item)==null?void 0:o.name)||"",addons:((t=this.item)==null?void 0:t.addons)||[],ingredients:((i=this.item)==null?void 0:i.ingredients)||[],cost:((r=this.item)==null?void 0:r.totalCost)||0,count:((n=this.item)==null?void 0:n.count)||1,image:((e=this.item)==null?void 0:e.image)||""}},methods:{plusCount(){this.count+=1,this.onPlus(this.cost),this.onChange({id:this.item.id,count:this.count,totalCost:this.totalCost})},minusCount(){this.onMinus(this.cost),this.count===1?this.onDel(this.item.id):(this.count-=1,this.onChange({id:this.item.id,count:this.count,totalCost:this.totalCost}))}},computed:{infoText(){let o="";return this.addons.forEach(t=>{o+=t.name+", "}),this.ingredients.forEach(t=>{o+=t.name+", "}),o=o.slice(0,-1),o},totalCost(){return this.cost*this.count},strCost(){return this.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},j={class:"busket-position"},tt={class:"busket-position__content"},st={class:"busket-position__title"},ot={class:"busket-position__text"},et={class:"busket-position__cost"},nt={class:"busket-position__count"},it={class:"busket-position__count-text"};function ct(o,t,i,r,n,e){const _=w,f=U,a=G,C=K;return c(),h("div",j,[s("div",{class:"busket-position__img",style:y(`background-image: url(${n.image})`)},[n.image===""?(c(),p(_,{key:0,color:"#f2f2f2"})):m("",!0)],4),s("div",tt,[s("h3",st,l(n.name),1),s("p",ot,l(e.infoText),1),s("p",et,l(e.strCost)+" т",1),s("div",nt,[s("button",{onClick:t[0]||(t[0]=(...g)=>e.minusCount&&e.minusCount(...g)),class:"busket-position__count-btn"},[n.count===1?(c(),p(f,{key:0,color:"#0075CA"})):m("",!0),n.count!=1?(c(),p(a,{key:1,color:"#0075CA"})):m("",!0)]),s("p",it,l(n.count)+" шт",1),s("button",{onClick:t[1]||(t[1]=(...g)=>e.plusCount&&e.plusCount(...g)),class:"busket-position__count-btn"},[d(C,{color:"#0075CA"})])])])])}const rt=u(Z,[["render",ct]]),_t={methods:{goBack(){this.$router.go(-1)}}},ht={class:"busket-menu"};function lt(o,t,i,r,n,e){return c(),h("div",ht,[s("button",{onClick:t[0]||(t[0]=(..._)=>e.goBack&&e.goBack(..._)),class:"busket-menu__btn"},"Открыть меню")])}const ut=u(_t,[["render",lt]]),at={props:{color:String,width:String,height:String},data(){return{defWidth:this.width?this.width:"22px",defHeight:this.height?this.height:"22px",defColor:this.color?this.color:"#000"}}},dt=["width","height"],mt=["fill"];function ft(o,t,i,r,n,e){return c(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.defWidth,height:n.defHeight,viewBox:"0 0 24 24"},[s("path",{fill:n.defColor,d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"},null,8,mt)],8,dt)}const gt=u(at,[["render",ft]]),pt={props:{busketCost:String,openConfirm:Function}},bt={class:"busket-bar"},kt={class:"busket-bar__text"};function Ct(o,t,i,r,n,e){return c(),h("div",bt,[s("p",kt,[O("Итого: "),s("b",null,l(i.busketCost)+" т",1)]),s("button",{onClick:t[0]||(t[0]=(..._)=>i.openConfirm&&i.openConfirm(..._)),class:"busket-bar__btn"},"Перейти к оплате")])}const vt=u(pt,[["render",Ct]]),Bt={props:{toogleBonus:Function}},xt=o=>(N("data-v-4a95c4ee"),o=o(),P(),o),wt={class:"checkbox"},At={class:"checkbox__label"},St=xt(()=>s("span",null,[s("i")],-1));function yt(o,t,i,r,n,e){return c(),h("div",wt,[s("label",At,[H(s("input",{onClick:t[0]||(t[0]=(..._)=>i.toogleBonus&&i.toogleBonus(..._)),"onUpdate:modelValue":t[1]||(t[1]=_=>o.isCheck=_),type:"checkbox"},null,512),[[M,o.isCheck]]),St])])}const Ot=u(Bt,[["render",yt],["__scopeId","data-v-4a95c4ee"]]),Ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB7ZjPbxJBFMffLiw/lli2tCQqtRitSbkQ8UIvJuqtXky9mXjx4NXUm/+Ct8aTiYdeNJ5s9FJvtsZLa1KreLBJqSlYSJUf2ZoUKAvFeYOzO4Cp3QVamvBJNjtvdsJ89/0aAKBPnz4nG4E3Vl9On5eclVkyeZmYChw1NXhdLlceRu483YRmgSjO4aysHouwRtTyXiXCRIpsVpK0GTh+cYjidNpnmaELFEThFvQItXqKUUToTfRI2qFDiJIbJNkHNnJHCtk4dIK2BcrDY+Afvwke/6WWZ7/TMchvLLQl1rJA9Ni56H1d2L5WpHM8A2fD9MrFF+Dn1zmwgiWBGMrg1QfgkIeo/f3dY8DUvnDj0T/XD41dB5tDhvTKczCLpSLxhyZ1cSV1C0o7WzTMB6GMRmF4fBK6LtBLNlJGJ3RbK+brA6F1rVbIU69VSfgxBQaDE9T7XRU4SAQycOPUygs6/rH0jAriSZK53ew6rezt2CtSNF/oC3ZVoMxVK4Z2XyvotppYalnv8o5Q8bhWCUZh4EwYzGCqSP4XnvzGIq1qXKcmP8IeEYUXKyqbJAN4BDBDW32wkFlvsMkRBb++zRNvpWjOMQJX7upFZWtqRV0V2Jxzp8O3aQGVCzlIfHiiPxcdhqgqJ/wwmMpB3JDfoLkxO9x1L6G3TnG5VlJTxpiEvGsCkTw5FRhYAA0fxnmKf7aTXDbGiWUwg2mBmPzMi5LHRwvAd/Eatfn8cnkD9I7HYZF4Db2Pl5rsskCN5FdmbV63HUQg85a2a+Sk5KmH26UE6AtgH7Ry1Fkqknx8kbYMyV1vO3xoGehNzFH0mlsZgezaW7CC5SrOkHYi0dZR00NbJmLkpnXbsTk6b5U220yO3tN/jzts1AjmaIEccdgLzVZtRwUymFAUk/5kPs8Ogi8SFXoQ41edAJ+hR6hB7Q0bGwLBfg96w4uqTahOM0MXGJqa2RQFewQ49UeMSr5svBeFSiQ0Zfz10adPn5POH2XuD9qoAclrAAAAAElFTkSuQmCC",Mt={props:{busketCost:Number,cafeName:String,closeConfirm:Function,isOpen:Boolean,confirmOrder:Function,totalPayment:Number,bonusPayment:Number,toogleBonus:Function},data(){return{imageGold:Ht,bankHide:!1}},methods:{costToStr(o){return o.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},toogleBankHide(){this.bankHide=!this.bankHide}}},Nt={class:"confirm__content"},Pt={class:"confirm__info"},Ft=s("p",{class:"confirm__text"},"Заведение",-1),Vt={class:"confirm__value"},Tt={class:"confirm__info"},It=s("p",{class:"confirm__text"},"Сумма",-1),zt={class:"confirm__value"},Dt={class:"confirm__info"},$t={class:"confirm__bonus"},Jt=s("p",{class:"confirm__text confirm__text_bonus"},"Потратить Бонусы",-1),Ut={class:"confirm__bonus-bank"},Lt={class:"confirm__info"},Rt=s("p",{class:"confirm__text confirm__text_bold"},"К оплате",-1),Qt={class:"confirm__value confirm__value_bold"},Xt={class:"confirm__payment"},Gt={class:"confirm__payment-titles"},Wt=s("h4",{class:"confirm__payment-title"},"Способ оплаты",-1),qt={class:"confirm__payment-type"},Et=["src"],Yt=s("p",{class:"confirm__payment-name"},"Kaspi Gold",-1),Kt={class:"confirm__payment-cost"};function Zt(o,t,i,r,n,e){const _=A,f=Ot;return c(),h("div",{class:B(`confirm ${i.isOpen?"confirm_show":""}`)},[s("button",{onClick:t[0]||(t[0]=(...a)=>i.closeConfirm&&i.closeConfirm(...a)),class:"confirm__close"},[d(_)]),s("div",Nt,[s("div",Pt,[Ft,s("p",Vt,l(i.cafeName),1)]),s("div",Tt,[It,s("p",zt,l(e.costToStr(i.busketCost))+" т",1)]),s("div",Dt,[s("div",$t,[Jt,s("span",Ut,"Накоплено "+l(e.costToStr(i.bonusPayment))+" Б",1)]),d(f,{toogleBonus:i.toogleBonus},null,8,["toogleBonus"])]),s("div",Lt,[Rt,s("p",Qt,l(e.costToStr(i.totalPayment))+" т",1)])]),s("div",Xt,[s("div",Gt,[Wt,s("p",{onClick:t[1]||(t[1]=(...a)=>e.toogleBankHide&&e.toogleBankHide(...a)),class:"confirm__payment-hide"},"Скрыть сумму")]),s("div",qt,[s("img",{src:n.imageGold,alt:"kaspiGold",class:"confirm__payment-img"},null,8,Et),Yt,s("p",Kt,l(n.bankHide?"******":"300 000")+" т",1)]),s("button",{onClick:t[2]||(t[2]=(...a)=>i.confirmOrder&&i.confirmOrder(...a)),class:"confirm__btn"},"Оплатить")])],2)}const jt=u(Mt,[["render",Zt]]),ts={data(){return{isOpen:!1,bonus:15500,isBonus:!1}},methods:{toogleBonus(){this.isBonus=!this.isBonus},handleMinus(o){this.busketCost-=o},handlePlus(o){this.busketCost+=o},handleChange(o){const{changeCount:t}=k();t(o)},handleDel(o){const{delItem:t}=k();t(o)},toogleOpen(){this.isOpen=!this.isOpen},async confirmOrder(){const{getCafe:o}=v(),{setLoader:t}=T();let i={busket:this.busketStore,cafeID:o.id,cafeName:o.name,totalCost:this.totalPayment,waitingTime:o.waitingTime};console.log(i),t(!0),I.addOrder(i).then(r=>{console.log(r.value),t(!1),this.$router.push({path:"/ok",query:{order:JSON.stringify(r.value)}})})},goBack(){this.$router.go(-1)}},beforeMount(){const{setItems:o}=k(),t=JSON.parse(localStorage.getItem("busket"));t&&o(t)},computed:{cafeName(){const{getCafe:o}=v();return o.name},strCost(){return this.busketCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},busketStore(){const{getBusket:o}=k();return o},busketCost(){let o=0;return console.log(this.busketStore),this.busketStore.forEach(t=>{o+=t.totalCost*t.count}),o},bonusPayment(){return this.isBonus?this.busketCost-this.bonus<10?this.bonus-this.busketCost+10:this.bonus-this.busketCost:this.bonus},totalPayment(){return this.isBonus?this.busketCost-this.bonus<10?10:this.busketCost-this.bonus:this.busketCost}}},ss={class:"busket-page"},os=s("h2",{class:"busket-page__title"},"Заказ",-1),es={key:0,class:"busket-page__list"},ns={key:1,class:"busket-page__empty"},is={class:"busket-page__icon"},cs=s("h4",{class:"busket-page__empty-title"},"Корзина пуста!",-1);function rs(o,t,i,r,n,e){const _=S,f=rt,a=ut,C=gt,g=vt,x=jt;return c(),h("div",ss,[d(_,{onClose:e.goBack},null,8,["onClose"]),os,e.busketStore.length!=0?(c(),h("div",es,[(c(!0),h(F,null,V(e.busketStore,b=>(c(),p(f,{key:b.id,item:b,onMinus:e.handleMinus,onPlus:e.handlePlus,onChange:e.handleChange,onDel:e.handleDel},null,8,["item","onMinus","onPlus","onChange","onDel"]))),128)),d(a)])):m("",!0),e.busketStore.length==0?(c(),h("div",ns,[s("div",is,[d(C,{width:"50px",height:"50px",color:"#fff"})]),cs,s("button",{onClick:t[0]||(t[0]=(...b)=>e.goBack&&e.goBack(...b)),class:"busket-page__empty-btn"},"Вернуться в меню")])):m("",!0),e.busketStore.length>0?(c(),p(g,{key:2,busketCost:e.strCost,openConfirm:e.toogleOpen},null,8,["busketCost","openConfirm"])):m("",!0),d(x,{busketCost:e.busketCost,cafeName:e.cafeName,closeConfirm:e.toogleOpen,isOpen:n.isOpen,confirmOrder:e.confirmOrder,bonusPayment:e.bonusPayment,totalPayment:e.totalPayment,toogleBonus:e.toogleBonus},null,8,["busketCost","cafeName","closeConfirm","isOpen","confirmOrder","bonusPayment","totalPayment","toogleBonus"]),s("div",{class:B(`busket-page__bg ${n.isOpen?"busket-page__bg_show":""}`)},null,2)])}const ms=u(ts,[["render",rs]]);export{ms as default};
