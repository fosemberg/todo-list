(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e){e.exports={colors:[{id:"8658c1d0-9eda-4a90-95e1-8001e8eb6036",title:"Fix the table",description:"In the living room behind the door are the details.",timestamp:"Sat Mar 12 2016 16:12:09 GMT-0800 (PST)",isEdit:!1},{id:"f9005b4e-975e-433d-a646-79df172e1dbb",title:"Refactoring rgb-trader",description:"It is advisable to do before March",timestamp:"Fri Mar 11 2016 12:00:00 GMT-0800 (PST)",isEdit:!1},{id:"58d9caee-6ea6-4d7b-9984-65b145031979",title:"Start getting up at 7 am",description:"Before work: charging for half an hour, half an hour to read books",timestamp:"Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",isEdit:!1}],sort:{field:"date",isDesc:!1}}},27:function(e,t,n){e.exports=n(45)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(21),o=n(26),c=n(1),u="date",l="title",s="description",d={ADD_CARD:"ADD_CARD",SAVE_CARD:"SAVE_CARD",EDIT_CARD:"EDIT_CARD",REMOVE_CARD:"REMOVE_CARD",SORT_CARDS:"SORT_CARDS",SORT_CARDS_DESC_TOGGLE:"SORT_CARDS_DESC_TOGGLE",MOVE_CARD:"MOVE_CARD",TOGGLE_DONE_CARD:"TOGGLE_DONE_CARD"},f=n(24),E=(n(40),function(e){var t,n,r=e.onNewCard,a=void 0===r?function(e){return e}:r;return i.a.createElement("form",{className:"add-card",onSubmit:function(e){e.preventDefault(),a(t.value,n.value),t.value="",n.value="",t.focus()}},i.a.createElement("input",{ref:function(e){return t=e},type:"text",placeholder:"Card title",required:!0}),i.a.createElement("textarea",{ref:function(e){return n=e},placeholder:"Card description",rows:"4",required:!0}),i.a.createElement("button",null,"ADD"))}),m=Object(c.a)(null,function(e){return{onNewCard:function(t,n){e(function(e,t){return{type:d.ADD_CARD,id:Object(f.v4)(),title:e,description:t,list:"todo",isEdit:!1,timestamp:(new Date).toString()}}(t,n))}}})(E),D=(n(41),{date:u,title:l,description:s}),p=function(e){var t=e.field,n=void 0===t?u:t,r=e.isDesc,a=void 0!==r&&r,o=e.onSelect,c=void 0===o?function(e){return e}:o;return i.a.createElement("nav",{className:"menu"},i.a.createElement("h1",null,"Sort Colors"),Object.keys(D).map(function(e,t){return i.a.createElement("a",{key:t,href:"#",className:n===D[e]?"selected":null,onClick:function(t){t.preventDefault(),c(D[e])}},i.a.createElement("span",null,e),i.a.createElement("span",{style:{visibility:n===D[e]?"":"hidden"}},a?"\u2191":"\u2193"))}))},v=Object(c.a)(function(e){return{field:e.sort.field,isDesc:e.sort.isDesc}},function(e){return{onSelect:function(t){e({type:d.SORT_CARDS,field:t})}}})(p),_=n(13),O=function(e){return function(t,n){switch(t){case"date":return function(t,r){return e?new Date(t[n])-new Date(r[n]):new Date(r[n])-new Date(t[n])};case"string":return function(t,r){return(e?t[n]>r[n]:t[n]<r[n])?-1:1};default:return function(t,r){return e?t[n]-r[n]:r[n]-t[n]}}}},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=O(t);return e===l?n("string",l):e===s?n("string",s):n("date","timestamp")},g=n(25),C={second:1e3,minute:6e4,hour:36e5,day:864e5},S={second:60,minute:60,hour:24,day:30},A=function(e){return new Date(e)},b=function(e,t,n,r){return function(e,t,n){return e/t<n}(e,r[t],n)?function(e,t){return"".concat(e," ").concat(t+(e>1?"s":""))}(function(e,t){return Math.floor(e/t)}(e,r[t]),t):null},h=function(e,t,n,r){var i=Object(g.a)(e),a=i[0],o=i.slice(1);return function(e,t){return e?(n=e).match(/seconds/)?"less than a minute":n+" ago":t();var n}(b(function(e,t){return A(t)-A(e)}(n,r),a,S[a],t),function(){return T(o,t,n,r)})},T=function(e,t,n,r){return e.length?h(e,t,n,r):(i=A(n),"".concat(i.getMonth()+1,"/").concat(i.getDate(),"/").concat(i.getFullYear()));var i},N=function(e){var t=e.timestamp;return i.a.createElement("div",{className:"time-ago"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).toString();return T(Object.keys(C),C,e,t)}(t))},w=n(9),y=(n(42),function(e){e.id;var t,n,r=e.title,a=e.description,o=e.timestamp,c=e.isDone,u=void 0!==c&&c,l=e.isEdit,s=void 0!==l&&l,d=e.onRemove,f=e.onToggleDone,E=e.onEdit,m=e.onSave,D="card";D+=u?" done":"";return i.a.createElement("section",{className:D},i.a.createElement("div",{className:"add-card"},s?i.a.createElement("input",{ref:function(e){return t=e},type:"text",defaultValue:r}):i.a.createElement("h1",null,r),s?i.a.createElement("textarea",{ref:function(e){return n=e},className:"description",defaultValue:a}):i.a.createElement("pre",{className:"description"},a)),i.a.createElement("div",{className:"bottom-panel"},i.a.createElement(N,{timestamp:o}),i.a.createElement("div",{className:"buttons"},s?i.a.createElement("button",{onClick:function(){m(t.value,n.value)},className:"edit"},i.a.createElement(w.d,null)):i.a.createElement("button",{onClick:E,className:"edit"},i.a.createElement(w.b,null)),i.a.createElement("button",{onClick:f,className:"check"},u?i.a.createElement(w.c,null):i.a.createElement(w.a,null)),i.a.createElement("button",{onClick:d,className:"remove"},i.a.createElement(w.e,null)))))});y.defaultProps={onRemove:function(e){return e}};var j=y,G=(n(43),function(e){var t=e.colors,n=void 0===t?[]:t,r=e.onRemove,a=void 0===r?function(e){return e}:r,o=e.onToggleDone,c=void 0===o?function(e){return e}:o,u=e.onEdit,l=void 0===u?function(e){return e}:u,s=e.onSave,d=void 0===s?function(e){return e}:s;return i.a.createElement("div",{className:"card-list"},0===n.length?i.a.createElement("p",null,"No Cards Listed. (Add a Card)"):n.map(function(e){return i.a.createElement(j,Object.assign({key:e.id},e,{isDone:"done"===e.list,onRemove:function(){return a(e.id)},onToggleDone:function(){return c(e.id)},onEdit:function(){return l(e.id)},onSave:function(t,n){return d(e.id,t,n)}}))}))}),M=Object(c.a)(function(e){return{colors:Object(_.a)(e.colors).sort(R(e.sort.field,e.sort.isDesc)).sort(O(!0)("string","list"))}},function(e){return{onRemove:function(t){e(function(e){return{type:d.REMOVE_CARD,id:e}}(t))},onToggleDone:function(t){e(function(e){return{type:d.TOGGLE_DONE_CARD,id:e}}(t))},onEdit:function(t){e(function(e){return{type:d.EDIT_CARD,id:e}}(t))},onSave:function(t,n,r){e(function(e,t,n){return{type:d.SAVE_CARD,id:e,title:t,description:n}}(t,n,r))}}})(G),V=(n(44),function(){return i.a.createElement("div",{className:"app"},i.a.createElement(v,null),i.a.createElement(m,null),i.a.createElement(M,null))}),k=n(7),x=n(4),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.ADD_CARD:return{id:t.id,title:t.title,description:t.description,timestamp:t.timestamp,list:t.list,isEdit:t.isEdit};case d.MOVE_CARD:return e.id!==t.id?e:Object(x.a)({},e,{list:t.list});case d.SAVE_CARD:return e.id!==t.id?e:Object(x.a)({},e,{title:t.title,description:t.description,isEdit:!1});case d.EDIT_CARD:return e.id!==t.id?e:Object(x.a)({},e,{isEdit:!0});case d.TOGGLE_DONE_CARD:return e.id!==t.id?e:Object(x.a)({},e,{list:"todo"===e.list?"done":"todo"});default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.ADD_CARD:return[].concat(Object(_.a)(e),[L({},t)]);case d.MOVE_CARD:case d.SAVE_CARD:case d.EDIT_CARD:case d.TOGGLE_DONE_CARD:return e.map(function(e){return L(e,t)});case d.REMOVE_CARD:return e.filter(function(e){return e.id!==t.id});default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{field:u,isDesc:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SORT_CARDS:return Object(x.a)({},e,{field:t.field,isDesc:t.field===e.field?!e.isDesc:e.isDesc});case d.SORT_CARDS_DESC_TOGGLE:return Object(x.a)({},e,{isDesc:!e.isDesc});default:return e}},P=n(16),X=function(e){return function(t){return function(n){var r;return console.groupCollapsed("dispatching",n.type),console.log("prev state",e.getState()),console.log("action",n),r=t(n),console.log("next state",e.getState()),console.groupEnd(),r}}},F=function(e){return function(t){return function(n){var r=t(n);return localStorage["redux-store"]=JSON.stringify(e.getState()),r}}},q=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(k.a)(X,F)(k.d)(Object(k.c)({colors:I,sort:J}),localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}();window.React=i.a,window.store=q,Object(a.render)(i.a.createElement(o.a,{store:q},i.a.createElement(V,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c84e8059.chunk.js.map