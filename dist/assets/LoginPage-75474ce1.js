import{d as b,r as c,o as p,c as v,a as e,w as u,v as d,s as y,b as _,e as f,f as w,p as h,g as C}from"./index-5851ced0.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const s=i=>(h("data-v-a54c23dc"),i=i(),C(),i),U={key:0},I=s(()=>e("h1",null,"Login",-1)),E={class:"credentials-container"},L=s(()=>e("label",{for:"email"},"Email: ",-1)),P=s(()=>e("label",{for:"password"},"Contraseña: ",-1)),R={class:"btn-container"},S={key:1},V=s(()=>e("h1",null,"Registro",-1)),x={class:"credentials-container"},B=s(()=>e("p",null,"Crea una nueva cuenta con correo y contraseña",-1)),$=s(()=>e("label",{for:"email"},"Email: ",-1)),q=s(()=>e("label",{for:"password"},"Contraseña: ",-1)),A={class:"btn-container"},W=b({__name:"LoginPage",setup(i){const r=c(!0),a=c(""),l=c("");async function m(){try{const n=await y(_,a.value,l.value);f.push("/tareas")}catch(n){alert(n)}}async function g(){try{const n=await w(_,a.value,l.value);r.value=!0}catch(n){alert(n)}}return(n,t)=>r.value?(p(),v("div",U,[I,e("div",E,[e("div",null,[L,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),type:"email"},null,512),[[d,a.value]])]),e("div",null,[P,u(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),type:"password"},null,512),[[d,l.value]])])]),e("div",R,[e("button",{class:"login-btn",onClick:m,type:"button"},"Iniciar Sesión"),e("button",{class:"register-btn",onClick:t[2]||(t[2]=o=>r.value=!1),type:"button"},"Registrarme")])])):(p(),v("div",S,[V,e("div",x,[B,e("div",null,[$,u(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>a.value=o),type:"email"},null,512),[[d,a.value]])]),e("div",null,[q,u(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>l.value=o),type:"password"},null,512),[[d,l.value]])])]),e("div",A,[e("button",{onClick:t[5]||(t[5]=o=>r.value=!0),type:"button"},"Cancelar"),e("button",{onClass:t[6]||(t[6]=o=>n.register-n.btn),onClick:g,type:"button"},"Registrame",32)])]))}});const N=k(W,[["__scopeId","data-v-a54c23dc"]]);export{N as default};