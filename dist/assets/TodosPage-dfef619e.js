import{d as y,o as c,c as i,a as e,h as C,p as h,g as v,b as x,r as T,i as k,j as S,F as d,k as I,l as $,m as w,n as N,t as l,q as u,e as p,u as B,x as D}from"./index-5851ced0.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const M=a=>(h("data-v-9ab930fa"),a=a(),v(),a),P=M(()=>e("h3",null,"MyTodos",-1)),F=y({__name:"Navbar",setup(a){async function n(){await C(x)}return(r,_)=>(c(),i("nav",null,[P,e("button",{onClick:n},"Cerrar Sesion")]))}});const O=f(F,[["__scopeId","data-v-9ab930fa"]]);const R=a=>(h("data-v-312613ec"),a=a(),v(),a),V=R(()=>e("h2",null,"Mi lista de tareas",-1)),j={class:"todos-container"},q={class:"todo-item"},z={class:"complete"},E=["onClick"],L={class:"info"},U=["onClick"],A={__name:"TodosPage",setup(a){const n=T();async function r(){const s=$(u,"todos"),o=await w(s);n.value=o.docs.map(t=>({id:t.id,title:t.data().title,description:t.data().description,status:t.data().status,expires_at:t.data().expires_at,priority:t.data().priority}))}function _(){p.push("/crear-tarea")}function m(s){p.push(`/tarea/${s}`)}async function g(s){try{const o=B(u,"todos",s);await D(o,{status:"completed"})}catch(o){alert(o)}}return k(()=>{r()}),(s,o)=>(c(),i(d,null,[S(O),V,e("button",{onClick:_,type:"button",class:"create-btn"},"Crear una nueva tarea"),e("div",j,[(c(!0),i(d,null,I(n.value,t=>(c(),i("div",q,[e("div",z,[e("button",{onClick:b=>g(t.id)},"Completar ✔",8,E)]),e("div",L,[e("h5",{class:N(t.status==="pending"?"red":"green"),onClick:b=>m(t.id)},l(t.title),11,U),e("p",null,l(t.expires_at),1)])]))),256))])],64))}},J=f(A,[["__scopeId","data-v-312613ec"]]);export{J as default};