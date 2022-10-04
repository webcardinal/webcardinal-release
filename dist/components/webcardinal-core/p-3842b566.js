import{F as e,d as n,m as t,n as a,o as s,p as o,l as i,e as r,k as l,q as c,r as d,I as f,x as u,y as b,t as m,u as h,w as p,v,z as x,g as y,W as w,i as $,b as M,j as g,V as j,D as A,h as k}from"./p-f5c9fd96.js";import{s as E,u as P,B as C,z as O,k as N,x as T,y as W,t as V,r as z,o as B,n as I,m as S}from"./p-0c675925.js";import{c as q,d as D}from"./p-e506992e.js";function F(e,n,t){const a=n.getChainValue(t);if(a){for(const[n,t]of Object.entries(a))E(e,{key:n,value:t});if(!0===a._saveElement){for(const n in e)"function"==typeof e[n]&&(e[n]=e[n].bind(e));a.getElement||n.setChainValue(t,Object.assign(Object.assign({},a),{getElement:()=>e}))}}if(n.hasExpression(t)){const a=n.evaluateExpression(t);for(const[n,t]of Object.entries(a))E(e,{key:n,value:t})}}function U(e){return e.nodeType===Node.ELEMENT_NODE}function G(e){return e.nodeType===Node.TEXT_NODE&&e.nodeValue&&e.nodeValue.trim()}function H(e,n){return U(e)&&e.getAttribute("slot")===n}function J(e,t,a,s=null){if(y.includes(e.nodeName.toLowerCase()))return;if(e.nodeType!==Node.TEXT_NODE||!e.nodeValue||!e.nodeValue.trim())return;const o=[...e.nodeValue.matchAll(/\{\{\s*([^\s}}]+)\s*\}\}/g)];if(!o.length)return;const i=o.map((e=>({expression:e[0],chainWithPrefix:e[1]}))).filter((({chainWithPrefix:e})=>e.startsWith(n)||e.startsWith(r))).map((e=>{let{chainWithPrefix:o}=e;const i=o.startsWith(r);let l=e.chainWithPrefix.slice(1);!i&&s&&(l=P(s,l),o=`${n}${l}`);const c=i?a:t;return Object.assign(Object.assign({},e),{chain:l,isTranslation:i,isModel:!i,isModelExpression:c.hasExpression(l),evaluateModelExpression:()=>c.evaluateExpression(l),model:c,getChainValue:()=>{let e=c.getChainValue(l);if(i&&void 0===e){const{pathname:n}=window.location,t=w();console.warn(`No translations found for skin "${t}", page "${n}" and chain "${l}"`),e=l}return e}})}));if(!i.length)return;const l=e.nodeValue,c=()=>{let n=l;i.forEach((({expression:e,getChainValue:t,isModelExpression:a,evaluateModelExpression:s})=>{let o=t();["number","boolean"].includes(typeof o)&&(o=o.toString()),!o&&a&&(o=a?s():""),n=n.replace(e,o||"")})),e.nodeValue=n};c(),i.filter((e=>e.isModel)).forEach((({model:n,chain:t,isModelExpression:a})=>{const s=()=>{c()};if(n.onChange(t,s),T(e,t,s),a){const a=()=>{c()};n.onChangeExpressionChain(t,a),W(e,t,a)}}))}const K={bindElement:(w,E={model:null,translationModel:null})=>{const{model:L,translationModel:Q,chainPrefix:R,enableTranslations:X=!1,recursive:Y=!1}=E;if(L){if(G(w))J(w,L,Q,R);else if(U(w)){const U=w;if(window.WebCardinal.components.tags.has(U.tagName.toLowerCase()))return;if(y.includes(U.tagName.toLowerCase()))return N(U,L,n,R);if(U.hasAttribute($)){let e;U.hasAttribute(M)&&(e=U.getAttribute(M),(null==e?void 0:e.startsWith(n))&&(e=e.slice(1)));const t=P(R,e);U[g]=()=>L.hasExpression(t)?L.evaluateExpression(t):L.toObject(t)}const Z=I(U,f),_=I(U,e);if(Z&&_)console.error("Cannot use both data-if and data-for attributes on the same element",U);else if(Z)!function(e,t,{model:a,translationModel:s,chainPrefix:o,enableTranslations:i=!1}={model:null,translationModel:null}){let l=e.getAttribute(f);if(!l.startsWith(n))return void console.warn(`Attribute "${f}" doesn't start with the chain prefix!`);l=l.slice(1);const c=P(o,l),d=function(e){return(e.getAttribute(u)||"").split(" ").filter(String)}(e).includes(b),y=Array.from(e.children);let w;!function(e){e.TRUE="webcardinal:data-if:true",e.FALSE="webcardinal:data-if:false",e.LOADING="webcardinal:data-if:loading",e.NO_DATA="webcardinal:data-if:no-data"}(w||(w={}));let $,M="webcardinal:data-if:first-render";$=B(y,m);const g=B(y,h),j=B(y,p),A=B(y,v);[$,g,j,A].find((e=>e.length>0))||($=Array.from(e.childNodes)),V(e,a);const k=async e=>{switch(typeof e){case"boolean":return e?w.TRUE:w.FALSE;case"number":return Number.isNaN(e)?w.FALSE:w.TRUE;case"string":return 0===e.length?w.FALSE:w.TRUE;case"object":if(e instanceof Promise)try{return M=w.LOADING,E(),k(await e)}catch(e){return console.error("data-if condition async function failed!",e),w.LOADING}return null===e?w.FALSE:Array.isArray(e)?0===e.length?w.NO_DATA:w.TRUE:0===Object.keys(e).length?w.NO_DATA:w.TRUE;case"undefined":return w.LOADING;default:return w.TRUE}},E=()=>{let n;switch(M){case w.NO_DATA:if(0===A.length){n=$;break}n=A;break;case w.LOADING:if(0===j.length){n=g;break}n=j;break;case w.FALSE:n=g;break;default:n=$}V(e,a),n.forEach((n=>{const r=n.cloneNode(!0);z(r),e.appendChild(r),t(r,{model:a,translationModel:s,chainPrefix:o,enableTranslations:i,recursive:!0})}))},C=async n=>{const t=await k(n),a=M!==t;M=t,a&&(E(),d&&e.dispatchEvent(new CustomEvent(x,{bubbles:!0,cancelable:!0,composed:!0,detail:{value:t}})))};if(C(a.getChainValue(c)),N(e,a,n,o),i&&N(e,s,r,o),a.hasExpression(c)){C(a.evaluateExpression(c));const n=()=>{C(a.evaluateExpression(c))};a.onChangeExpressionChain(c,n),W(e,c,n)}else{const n=()=>{C(a.getChainValue(c))};a.onChange(c,n),T(e,c,n)}}(U,K.bindElement,E);else if(_)!function(f,u,{model:b,translationModel:m,chainPrefix:h,enableTranslations:p=!1}={model:null,translationModel:null}){let v=f.getAttribute(e);if(!v.startsWith(n))return void console.warn(`Attribute "${e}" doesn't start with the chain prefix!`);v=v.slice(1);const x=P(h,v),y=function(e){return(e.getAttribute(t)||"").split(" ").filter(String)}(f),w=y.includes(a),$=y.includes(s),M=y.includes(o),g=[],j=[],A=[];let k,E,B=[];const I=e=>{Array.isArray(e)?(k=e,E=e.length):(k=void 0,E=-1)},S=e=>{e.forEach((e=>{const n=e.cloneNode(!0);z(n),f.appendChild(n),u(n,{model:b,translationModel:m,chainPrefix:h,enableTranslations:p,recursive:!0})}))},F=()=>{if(-1===E)return V(f,b),void S(j);if(0===E)return V(f,b),void S(g);if(M){const e=document.createElement(f.tagName),n=Array.prototype.slice.call(f.attributes);let a;for(;a=n.pop();)a.nodeName!==t&&e.setAttribute(a.nodeName,a.nodeValue);y.length>0&&e.setAttribute(t,y.join(" ")),f.insertAdjacentElement("afterend",e),f.remove(),f=e}k.forEach(((e,n)=>{const t=[];A.forEach((e=>{const a=e.cloneNode(!0),s=P(x,n);u(a,{model:b,translationModel:m,chainPrefix:s,enableTranslations:p,recursive:!0}),t.push(a)})),B[n]?t.forEach(((e,t)=>{document.createElement("div").appendChild(B[n][t].cloneNode(!0));const a=q(e),s=q(B[n][t]);D(a,s,B[n][t])})):(t.forEach((e=>{f.appendChild(e)})),B[n]=t)}));for(let e=E;e<B.length;e++)B[e].forEach((e=>{V(e,b),e.remove()}));B.splice(E)},U=(e,n=!1)=>{const t=Array.isArray(e)?e.length:-1,a=E!==t;return I(e),$?(F(),void(w&&f.dispatchEvent(new CustomEvent(c,{bubbles:!0,cancelable:!0,composed:!0})))):n||a?(V(f,b),B=[],F(),void(w&&f.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,composed:!0})))):void 0},G=({targetChain:e})=>{const n=x===e;U(b.getChainValue(x),n)};for(I(b.getChainValue(x)),C(f,x);f.childNodes.length>0;){const e=f.childNodes[0];H(e,l)?g.push(e):H(e,i)?j.push(e):A.push(e),O(e,b),e.remove()}if(F(),N(f,b,n,h),p&&N(f,m,r,h),b.onChange(x,G),T(f,x,G),b.hasExpression(x)){const e=()=>{U(b.evaluateExpression(x))};b.onChangeExpressionChain(x,e),W(f,x,e)}}(U,K.bindElement,E);else{const e=U.hasAttribute(j),t=U.hasAttribute(M);if(!U.hasAttribute(A)){if(e||t){let a;if(e?a=U.getAttribute(j):(console.warn(`Attribute "${M}" is deprecated for binding! Use the "${j}" key attribute instead.`,U),a=U.getAttribute(M)),a.startsWith(n)){a=a.slice(1);const e=P(R,a);U.setAttribute(j,`${n}${e}`),t&&U.setAttribute(M,`${n}${e}`),F(U,L,e),S(U,L,e);const s=()=>F(U,L,e);if(L.onChange(e,s),T(U,a,s),L.hasExpression(e)){const n=()=>F(U,L,e);L.onChangeExpressionChain(e,n),W(U,e,n)}}else console.warn(`Invalid chain found! (chain: "${a}")!\n`,`A valid chain must start with "${n}".\n`,"target element:",U)}U.tagName.startsWith(k.toUpperCase())||N(U,L,n,R),X&&N(U,Q,r,R),Array.from(U.childNodes).filter(G).forEach((e=>{J(e,L,Q,R)}))}Y&&Array.from(U.children).forEach((e=>{K.bindElement(e,E)}))}}}else{const e=U(w)?w.tagName.toLowerCase():"text node";console.warn(`No model found for: ${e}!`)}},bindChildNodes:(e,n)=>{Array.from(e.childNodes).forEach((e=>{K.bindElement(e,Object.assign({},n))}))}};export{K as B,U as a,G as i}