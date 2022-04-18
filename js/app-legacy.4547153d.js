(function(){"use strict";var t={4328:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var n=o(144),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Navbar"),o("router-view")],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-app-bar",{attrs:{color:"deep-purple",dark:""}},[o("v-spacer"),o("v-btn",{staticClass:"ml-3",attrs:{outlined:""}},[o("router-link",{staticClass:"white--text",attrs:{to:"/main"}},[t._v(" Main ")])],1),o("v-btn",{staticClass:"ml-3",attrs:{outlined:""}},[o("router-link",{staticClass:"white--text",attrs:{to:"/"}},[t._v(" Photos ")])],1)],1)],1)},l=[],u={},s=u,c=o(1001),h=o(3453),d=o.n(h),f=o(1967),p=o(6847),v=o(1819),m=o(2515),g=(0,c.Z)(s,a,l,!1,null,"5187bdc0",null),Z=g.exports;d()(g,{VAppBar:f.Z,VBtn:p.Z,VContainer:v.Z,VSpacer:m.Z});var P={name:"App",components:{Navbar:Z},data:function(){return{}}},_=P,b=o(303),V=(0,c.Z)(_,r,i,!1,null,null,null),C=V.exports;d()(V,{VApp:b.Z});var x=o(6482);n.Z.use(x.Z);var w=new x.Z({}),y=o(8345),$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-card",{staticClass:"mt-4"},[o("v-card-title",[t._v(" The main page is here just to test routing ")])],1)],1)},O=[],T={},j=T,k=o(2026),D=o(5255),E=(0,c.Z)(j,$,O,!1,null,"4610242a",null),B=E.exports;d()(E,{VCard:k.Z,VCardTitle:D.EB,VContainer:v.Z});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-card",[o("v-card-title",[o("div",[t._v(" Photos Page ")])]),o("v-card-text",[t._v(" You can open photo or add a new one ")])],1),o("PhotoForm",{on:{addPhoto:t.addPhoto}}),o("v-row",{attrs:{justify:t.start}},t._l(t.$store.getters.getAllPhotos,(function(e){return o("Photo",{attrs:{photo:e,columnsCount:t.columnsCount}})})),1),o("PhotoDialog")],1)},S=[],F=o(3019),M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",[o("v-card",{staticClass:"mx-auto my-12",attrs:{width:"300"},on:{click:t.openPhoto}},[o("v-img",{attrs:{width:"300px",src:t.photo.url}}),o("v-card-title",[t._v(" "+t._s(t.photo.title)+" ")]),o("v-card-text",{attrs:{margin:"auto"}})],1)],1)},I=[],R=(o(9653),o(629)),N={props:{photo:{type:Object,required:!0},columnsCount:{type:Number}},methods:(0,F.Z)((0,F.Z)({},(0,R.OI)(["setCurrentPhoto","showDialog"])),{},{openPhoto:function(){this.setCurrentPhoto(this.photo),this.showDialog()}})},q=N,L=o(7024),U=o(5288),Y=(0,c.Z)(q,M,I,!1,null,"40e0a98d",null),z=Y.exports;d()(Y,{VCard:k.Z,VCardText:D.ZB,VCardTitle:D.EB,VCol:L.Z,VImg:U.Z});var G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"d-flex"},[o("v-text-field",{attrs:{placeholder:"Type photo`s title here"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),o("v-file-input",{attrs:{placeholder:"Add photo here"},model:{value:t.img,callback:function(e){t.img=e},expression:"img"}}),o("v-btn",{staticClass:"ma-4",on:{click:t.addPhoto}},[t._v("Add")])],1)],1)},H=[],J={data:function(){return{title:"",img:null}},methods:{addPhoto:function(){var t=this,e=new FileReader;e.onload=function(){var o={id:Date.now(),title:t.title,url:e.result};t.$emit("addPhoto",o)},e.readAsDataURL(this.img)}}},K=J,Q=o(7581),W=o(7894),X=o(7136),tt=(0,c.Z)(K,G,H,!1,null,"4e863821",null),et=tt.exports;d()(tt,{VBtn:p.Z,VContainer:v.Z,VFileInput:Q.Z,VRow:W.Z,VTextField:X.Z});var ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"600"},on:{"click:outside":function(e){return t.$store.commit("hideDialog")}},model:{value:t.$store.getters.getDialogVisible,callback:function(e){t.$set(t.$store.getters,"getDialogVisible",e)},expression:"$store.getters.getDialogVisible"}},[o("v-card",[o("v-card-title",[t._v(" "+t._s(t.full_title)+" ")]),o("v-card-text",[o("v-img",{attrs:{src:t.$store.getters.getCurrentPhoto.url}})],1)],1)],1)},nt=[],rt={computed:{full_title:function(){return"Photo title: ".concat(this.$store.getters.getCurrentPhoto.title)}}},it=rt,at=o(7609),lt=(0,c.Z)(it,ot,nt,!1,null,"2e02981b",null),ut=lt.exports;d()(lt,{VCard:k.Z,VCardText:D.ZB,VCardTitle:D.EB,VDialog:at.Z,VImg:U.Z});var st={components:{Photo:z,PhotoForm:et,PhotoDialog:ut},mounted:function(){this.fetchPhotos()},methods:(0,F.Z)((0,F.Z)({},(0,R.nv)(["fetchPhotos"])),{},{addPhoto:function(t){this.$store.commit("addPhoto",t)},openPhoto:function(t){this.currentPhoto=t,this.dialogVisible=!0}})},ct=st,ht=(0,c.Z)(ct,A,S,!1,null,"05933938",null),dt=ht.exports;d()(ht,{VCard:k.Z,VCardText:D.ZB,VCardTitle:D.EB,VContainer:v.Z,VRow:W.Z}),n.Z.use(y.Z);var ft=[{path:"/main",component:B},{path:"/",component:dt}],pt=new y.Z({mode:"hash",routes:ft}),vt=o(9669),mt=o.n(vt),gt={state:{photos:[],dialogVisible:!1,currentPhoto:{}},mutations:{setPhotos:function(t,e){t.photos=e},showDialog:function(t){t.dialogVisible=!0},hideDialog:function(t){t.dialogVisible=!1},setCurrentPhoto:function(t,e){t.currentPhoto=e},addPhoto:function(t,e){t.photos.push(e)}},getters:{getAllPhotos:function(t){return t.photos},getDialogVisible:function(t){return t.dialogVisible},getCurrentPhoto:function(t){return t.currentPhoto}},actions:{fetchPhotos:function(t){mt().get("https://jsonplaceholder.typicode.com/photos?_limit=8").then((function(e){return t.commit("setPhotos",e.data)}))}}};n.Z.use(R.ZP);var Zt=new R.ZP.Store({modules:{photoModule:gt}});n.Z.config.productionTip=!1,n.Z.prototype.axios=mt(),new n.Z({vuetify:w,router:pt,store:Zt,render:function(t){return t(C)}}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,i){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[u])}))?n.splice(u--,1):(l=!1,i<a&&(a=i));if(l){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],l=n[1],u=n[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(u)var c=u(o)}for(e&&e(n);s<a.length;s++)i=a[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self["webpackChunkvue2_test_project_1_router_vuex_vuetify"]=self["webpackChunkvue2_test_project_1_router_vuex_vuetify"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4328)}));n=o.O(n)})();
//# sourceMappingURL=app-legacy.4547153d.js.map