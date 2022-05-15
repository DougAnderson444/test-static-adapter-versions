import{K as W,L as ee,S as X,i as Y,s as Z,e as M,M as R,k as N,t as O,c as S,a as g,N as C,d as h,m as $,h as j,b as c,f as J,g as I,J as l,O as Q,j as z,E as L,P as te,Q as se,w as oe,R as ne,x as re,y as ae,q as le,o as ie,B as ce}from"../chunks/index-ff0d8071.js";import{w as de}from"../chunks/index-af53b635.js";function F(e){return Object.prototype.toString.call(e)==="[object Date]"}function q(e,s,t,o){if(typeof t=="number"||F(t)){const n=o-t,r=(t-s)/(e.dt||1/60),f=e.opts.stiffness*n,i=e.opts.damping*r,p=(f-i)*e.inv_mass,d=(r+p)*e.dt;return Math.abs(d)<e.opts.precision&&Math.abs(n)<e.opts.precision?o:(e.settled=!1,F(t)?new Date(t.getTime()+d):t+d)}else{if(Array.isArray(t))return t.map((n,r)=>q(e,s[r],t[r],o[r]));if(typeof t=="object"){const n={};for(const r in t)n[r]=q(e,s[r],t[r],o[r]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function fe(e,s={}){const t=de(e),{stiffness:o=.15,damping:n=.8,precision:r=.01}=s;let f,i,p,d=e,w=e,b=1,k=0,y=!1;function m(a,u={}){w=a;const _=p={};if(e==null||u.hard||x.stiffness>=1&&x.damping>=1)return y=!0,f=W(),d=a,t.set(e=w),Promise.resolve();if(u.soft){const v=u.soft===!0?.5:+u.soft;k=1/(v*60),b=0}return i||(f=W(),y=!1,i=ee(v=>{if(y)return y=!1,i=null,!1;b=Math.min(b+k,1);const B={inv_mass:b,opts:x,settled:!0,dt:(v-f)*60/1e3},E=q(B,d,e,w);return f=v,d=e,t.set(e=E),B.settled&&(i=null),!B.settled})),new Promise(v=>{i.promise.then(()=>{_===p&&v()})})}const x={set:m,update:(a,u)=>m(a(w,e),u),subscribe:t.subscribe,stiffness:o,damping:n,precision:r};return x}function ue(e){let s,t,o,n,r,f,i,p,d=Math.floor(e[1]+1)+"",w,b,k,y=Math.floor(e[1])+"",m,x,a,u,_,v,B;return{c(){s=M("div"),t=M("button"),o=R("svg"),n=R("path"),r=N(),f=M("div"),i=M("div"),p=M("strong"),w=O(d),b=N(),k=M("strong"),m=O(y),x=N(),a=M("button"),u=R("svg"),_=R("path"),this.h()},l(E){s=S(E,"DIV",{class:!0});var T=g(s);t=S(T,"BUTTON",{"aria-label":!0,class:!0});var A=g(t);o=C(A,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var G=g(o);n=C(G,"path",{d:!0,class:!0}),g(n).forEach(h),G.forEach(h),A.forEach(h),r=$(T),f=S(T,"DIV",{class:!0});var H=g(f);i=S(H,"DIV",{class:!0,style:!0});var D=g(i);p=S(D,"STRONG",{class:!0,"aria-hidden":!0});var K=g(p);w=j(K,d),K.forEach(h),b=$(D),k=S(D,"STRONG",{class:!0});var P=g(k);m=j(P,y),P.forEach(h),D.forEach(h),H.forEach(h),x=$(T),a=S(T,"BUTTON",{"aria-label":!0,class:!0});var V=g(a);u=C(V,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var U=g(u);_=C(U,"path",{d:!0,class:!0}),g(_).forEach(h),U.forEach(h),V.forEach(h),T.forEach(h),this.h()},h(){c(n,"d","M0,0.5 L1,0.5"),c(n,"class","svelte-sx9eo4"),c(o,"aria-hidden","true"),c(o,"viewBox","0 0 1 1"),c(o,"class","svelte-sx9eo4"),c(t,"aria-label","Decrease the counter by one"),c(t,"class","svelte-sx9eo4"),c(p,"class","hidden svelte-sx9eo4"),c(p,"aria-hidden","true"),c(k,"class","svelte-sx9eo4"),c(i,"class","counter-digits svelte-sx9eo4"),J(i,"transform","translate(0, "+100*e[2]+"%)"),c(f,"class","counter-viewport svelte-sx9eo4"),c(_,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),c(_,"class","svelte-sx9eo4"),c(u,"aria-hidden","true"),c(u,"viewBox","0 0 1 1"),c(u,"class","svelte-sx9eo4"),c(a,"aria-label","Increase the counter by one"),c(a,"class","svelte-sx9eo4"),c(s,"class","counter svelte-sx9eo4")},m(E,T){I(E,s,T),l(s,t),l(t,o),l(o,n),l(s,r),l(s,f),l(f,i),l(i,p),l(p,w),l(i,b),l(i,k),l(k,m),l(s,x),l(s,a),l(a,u),l(u,_),v||(B=[Q(t,"click",e[4]),Q(a,"click",e[5])],v=!0)},p(E,[T]){T&2&&d!==(d=Math.floor(E[1]+1)+"")&&z(w,d),T&2&&y!==(y=Math.floor(E[1])+"")&&z(m,y),T&4&&J(i,"transform","translate(0, "+100*E[2]+"%)")},i:L,o:L,d(E){E&&h(s),v=!1,te(B)}}}function he(e,s){return(e%s+s)%s}function pe(e,s,t){let o,n,r=0;const f=fe();se(e,f,d=>t(1,n=d));const i=()=>t(0,r-=1),p=()=>t(0,r+=1);return e.$$.update=()=>{e.$$.dirty&1&&f.set(r),e.$$.dirty&2&&t(2,o=he(n,1))},[r,n,o,f,i,p]}class me extends X{constructor(s){super(),Y(this,s,pe,ue,Z,{})}}function _e(e){let s,t,o,n,r,f,i,p,d,w,b,k,y,m,x;return m=new me({}),{c(){s=M("meta"),t=N(),o=M("section"),n=M("h1"),r=O("Welcome to your new"),f=M("br"),i=O("SvelteKit app"),p=N(),d=M("h2"),w=O("try editing "),b=M("strong"),k=O("src/routes/index.svelte"),y=N(),oe(m.$$.fragment),this.h()},l(a){const u=ne('[data-svelte="svelte-t32ptj"]',document.head);s=S(u,"META",{name:!0,content:!0}),u.forEach(h),t=$(a),o=S(a,"SECTION",{class:!0});var _=g(o);n=S(_,"H1",{class:!0});var v=g(n);r=j(v,"Welcome to your new"),f=S(v,"BR",{}),i=j(v,"SvelteKit app"),v.forEach(h),p=$(_),d=S(_,"H2",{});var B=g(d);w=j(B,"try editing "),b=S(B,"STRONG",{});var E=g(b);k=j(E,"src/routes/index.svelte"),E.forEach(h),B.forEach(h),y=$(_),re(m.$$.fragment,_),_.forEach(h),this.h()},h(){document.title="Home",c(s,"name","description"),c(s,"content","Svelte demo app"),c(n,"class","svelte-mjk9ig"),c(o,"class","svelte-mjk9ig")},m(a,u){l(document.head,s),I(a,t,u),I(a,o,u),l(o,n),l(n,r),l(n,f),l(n,i),l(o,p),l(o,d),l(d,w),l(d,b),l(b,k),l(o,y),ae(m,o,null),x=!0},p:L,i(a){x||(le(m.$$.fragment,a),x=!0)},o(a){ie(m.$$.fragment,a),x=!1},d(a){h(s),a&&h(t),a&&h(o),ce(m)}}}const be=!0;class ye extends X{constructor(s){super(),Y(this,s,null,_e,Z,{})}}export{ye as default,be as prerender};
