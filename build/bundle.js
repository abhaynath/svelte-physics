var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let h;function y(t){h=t}const g=[],w=[],b=[],v=[],x=Promise.resolve();let k=!1;function C(t){b.push(t)}let _=!1;const O=new Set;function S(){if(!_){_=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];y(e),z(e.$$)}for(y(null),g.length=0;w.length;)w.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];O.has(e)||(O.add(e),e())}b.length=0}while(g.length);for(;v.length;)v.pop()();k=!1,_=!1,O.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const L=new Set;let E;function M(t,e){t&&t.i&&(L.delete(t),t.i(e))}function A(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),E.c.push((()=>{L.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function j(t,e){A(t,1,1,(()=>{e.delete(t.key)}))}function N(t){t&&t.c()}function X(t,n,i,s){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,i),s||C((()=>{const n=c.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(C)}function Y(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(g.push(t),k||(k=!0,x.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,o,i,s,l,c,u,f=[-1]){const d=h;y(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};u&&u(p.root);let $=!1;if(p.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),$&&B(e,t)),n})):[],p.update(),$=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();o.intro&&M(e.$$.fragment),X(e,o.target,o.anchor,o.customElement),S()}y(d)}class P{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const T=parseFloat;function V(t,e=";"){let n;if(Array.isArray(t))n=t.filter((t=>t));else{n=[];for(const e in t)t[e]&&n.push(`${e}:${t[e]}`)}return n.join(e)}function q(t){let e,n,r,o,i,u,d;function p(t,e){return"string"==typeof t[7][4]?F:D}let $=p(t),h=$(t);return{c(){e=f("svg"),n=f("g"),r=f("g"),h.c(),m(r,"transform",t[10]),m(n,"transform",o=`translate(${t[7][0]/2} ${t[7][1]/2})`),m(n,"transform-origin",i=t[7][0]/4+" 0"),m(e,"id",t[0]),m(e,"class",u=s(t[8])+" svelte-1cj2gr0"),m(e,"style",t[9]),m(e,"viewBox",d=`0 0 ${t[7][0]} ${t[7][1]}`),m(e,"aria-hidden","true"),m(e,"role","img"),m(e,"xmlns","http://www.w3.org/2000/svg")},m(t,o){c(t,e,o),l(e,n),l(n,r),h.m(r,null)},p(t,l){$===($=p(t))&&h?h.p(t,l):(h.d(1),h=$(t),h&&(h.c(),h.m(r,null))),1024&l&&m(r,"transform",t[10]),128&l&&o!==(o=`translate(${t[7][0]/2} ${t[7][1]/2})`)&&m(n,"transform",o),128&l&&i!==(i=t[7][0]/4+" 0")&&m(n,"transform-origin",i),1&l&&m(e,"id",t[0]),256&l&&u!==(u=s(t[8])+" svelte-1cj2gr0")&&m(e,"class",u),512&l&&m(e,"style",t[9]),128&l&&d!==(d=`0 0 ${t[7][0]} ${t[7][1]}`)&&m(e,"viewBox",d)},d(t){t&&a(e),h.d()}}}function D(t){let e,n,r,o,i,s,l,u,d,p;return{c(){e=f("path"),s=f("path"),m(e,"d",n=t[7][4][0]),m(e,"fill",r=t[3]||t[1]||"currentColor"),m(e,"fill-opacity",o=0!=t[6]?t[4]:t[5]),m(e,"transform",i=`translate(${t[7][0]/-2} ${t[7][1]/-2})`),m(s,"d",l=t[7][4][1]),m(s,"fill",u=t[2]||t[1]||"currentColor"),m(s,"fill-opacity",d=0!=t[6]?t[5]:t[4]),m(s,"transform",p=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){c(t,e,n),c(t,s,n)},p(t,c){128&c&&n!==(n=t[7][4][0])&&m(e,"d",n),10&c&&r!==(r=t[3]||t[1]||"currentColor")&&m(e,"fill",r),112&c&&o!==(o=0!=t[6]?t[4]:t[5])&&m(e,"fill-opacity",o),128&c&&i!==(i=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&m(e,"transform",i),128&c&&l!==(l=t[7][4][1])&&m(s,"d",l),6&c&&u!==(u=t[2]||t[1]||"currentColor")&&m(s,"fill",u),112&c&&d!==(d=0!=t[6]?t[5]:t[4])&&m(s,"fill-opacity",d),128&c&&p!==(p=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&m(s,"transform",p)},d(t){t&&a(e),t&&a(s)}}}function F(t){let e,n,r,o;return{c(){e=f("path"),m(e,"d",n=t[7][4]),m(e,"fill",r=t[1]||t[2]||"currentColor"),m(e,"transform",o=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){c(t,e,n)},p(t,i){128&i&&n!==(n=t[7][4])&&m(e,"d",n),6&i&&r!==(r=t[1]||t[2]||"currentColor")&&m(e,"fill",r),128&i&&o!==(o=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&m(e,"transform",o)},d(t){t&&a(e)}}}function H(e){let n,r=e[7][4]&&q(e);return{c(){r&&r.c(),n=d("")},m(t,e){r&&r.m(t,e),c(t,n,e)},p(t,[e]){t[7][4]?r?r.p(t,e):(r=q(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&a(n)}}}function G(t,e,n){let r,o,i,s,{class:l=""}=e,{id:c=""}=e,{style:a=""}=e,{icon:u}=e,{size:f=""}=e,{color:d=""}=e,{fw:p=!1}=e,{pull:$=""}=e,{scale:m=1}=e,{translateX:h=0}=e,{translateY:y=0}=e,{rotate:g=""}=e,{flip:w=!1}=e,{spin:b=!1}=e,{pulse:v=!1}=e,{primaryColor:x=""}=e,{secondaryColor:k=""}=e,{primaryOpacity:C=1}=e,{secondaryOpacity:_=.4}=e,{swapOpacity:O=!1}=e;return t.$$set=t=>{"class"in t&&n(11,l=t.class),"id"in t&&n(0,c=t.id),"style"in t&&n(12,a=t.style),"icon"in t&&n(13,u=t.icon),"size"in t&&n(14,f=t.size),"color"in t&&n(1,d=t.color),"fw"in t&&n(15,p=t.fw),"pull"in t&&n(16,$=t.pull),"scale"in t&&n(17,m=t.scale),"translateX"in t&&n(18,h=t.translateX),"translateY"in t&&n(19,y=t.translateY),"rotate"in t&&n(20,g=t.rotate),"flip"in t&&n(21,w=t.flip),"spin"in t&&n(22,b=t.spin),"pulse"in t&&n(23,v=t.pulse),"primaryColor"in t&&n(2,x=t.primaryColor),"secondaryColor"in t&&n(3,k=t.secondaryColor),"primaryOpacity"in t&&n(4,C=t.primaryOpacity),"secondaryOpacity"in t&&n(5,_=t.secondaryOpacity),"swapOpacity"in t&&n(6,O=t.swapOpacity)},t.$$.update=()=>{8192&t.$$.dirty&&n(7,r=u&&u.icon||[0,0,"",[],""]),12584960&t.$$.dirty&&n(8,o=V([l,"fa",b&&"spin",v&&"pulse"]," ")),118784&t.$$.dirty&&n(9,i=function(t,e,n,r){let o,i,s,l,c,a="-.125em";return r&&(c="center",i="1.25em"),n&&(o=n),e&&("lg"==e?(l="1.33333em",s=".75em",a="-.225em"):l="xs"==e?".75em":"sm"==e?".875em":e.replace("x","em")),V([V({float:o,width:i,height:"1em","line-height":s,"font-size":l,"text-align":c,"vertical-align":a,"transform-origin":"center",overflow:"visible"}),t])}(a,f,$,p)),4063232&t.$$.dirty&&n(10,s=function(t,e,n,r,o,i=1,s="",l=""){let c=1,a=1;return o&&("horizontal"==o?c=-1:"vertical"==o?a=-1:c=a=-1),V([`translate(${T(e)*i}${s},${T(n)*i}${s})`,`scale(${c*T(t)},${a*T(t)})`,r&&`rotate(${r}${l})`]," ")}(m,h,y,g,w,512))},[c,d,x,k,C,_,O,r,o,i,s,l,a,u,f,p,$,m,h,y,g,w,b,v]}class J extends P{constructor(t){super(),I(this,t,G,H,i,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}
/*!
     * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var K={prefix:"fas",iconName:"user",icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]};class Q{constructor(){this.title="",this.isSelected=!1,this.isLocked=!1,this.isVisible=!0,this.isMasked=!1,this.id=Date.now().toString(36)+Math.random().toString(36).substr(2)}}const R=[];const U=(()=>{let{update:e,subscribe:n}=function(e,n=t){let r;const o=new Set;function s(t){if(i(e,t)&&(e=t,r)){const t=!R.length;for(const t of o)t[1](),R.push(t,e);if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,l=t){const c=[i,l];return o.add(c),1===o.size&&(r=n(s)||t),i(e),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}([]);return{subscribe:n,addLayer:t=>{e((e=>(-1==e.findIndex((e=>t.id==e.id))&&(e.push(t),e=e),e)))},deleteLayer:t=>{e((e=>{let n=e.slice(0),r=n.findIndex((e=>e.id==t));return-1!=r&&(n.splice(r,1),e=n),e}))},selectLayer:t=>{e((e=>{const n=e.findIndex((e=>e.id===t));return-1!=n&&((e=e.map((t=>(t.isSelected=!1,t))))[n].isSelected=!0,e=e),e}))}}})();function W(t,e,n){const r=t.slice();return r[4]=e[n],r}function Z(t,e){let n,o,i,f,h,y,g,w,b,v,x,k=e[4].id+"";function C(){return e[2](e[4])}function _(){return e[3](e[4])}return y=new J({props:{icon:K}}),{key:t,first:null,c(){n=u("div"),o=u("span"),i=d(k),f=p(),h=u("span"),N(y.$$.fragment),g=p(),m(n,"class",w=s(!0===e[4].isSelected?"selected":"normal")+" svelte-1wvv1uy"),this.first=n},m(t,e){c(t,n,e),l(n,o),l(o,i),l(n,f),l(n,h),X(y,h,null),l(n,g),b=!0,v||(x=[$(h,"click",C),$(n,"click",_)],v=!0)},p(t,r){e=t,(!b||1&r)&&k!==(k=e[4].id+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,k),(!b||1&r&&w!==(w=s(!0===e[4].isSelected?"selected":"normal")+" svelte-1wvv1uy"))&&m(n,"class",w)},i(t){b||(M(y.$$.fragment,t),b=!0)},o(t){A(y.$$.fragment,t),b=!1},d(t){t&&a(n),Y(y),v=!1,r(x)}}}function tt(t){let e,n,o,i,s,f,d,h,y,g=[],w=new Map,b=t[0];const v=t=>t[4].id;for(let e=0;e<b.length;e+=1){let n=W(t,b,e),r=v(n);w.set(r,g[e]=Z(r,n))}return{c(){e=u("div"),n=u("h3"),n.textContent="Layers Panel",o=p(),i=u("button"),i.textContent="Add",s=p(),f=u("div");for(let t=0;t<g.length;t+=1)g[t].c();m(f,"class","layers")},m(r,a){c(r,e,a),l(e,n),l(e,o),l(e,i),l(e,s),l(e,f);for(let t=0;t<g.length;t+=1)g[t].m(f,null);d=!0,h||(y=$(i,"click",t[1]),h=!0)},p(t,[e]){1&e&&(b=t[0],E={r:0,c:[],p:E},g=function(t,e,n,r,o,i,s,l,c,a,u,f){let d=t.length,p=i.length,$=d;const m={};for(;$--;)m[t[$].key]=$;const h=[],y=new Map,g=new Map;for($=p;$--;){const t=f(o,i,$),l=n(t);let c=s.get(l);c?r&&c.p(t,e):(c=a(l,t),c.c()),y.set(l,h[$]=c),l in m&&g.set(l,Math.abs($-m[l]))}const w=new Set,b=new Set;function v(t){M(t,1),t.m(l,u),s.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=h[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(u=e.first,d--,p--):y.has(o)?!s.has(r)||w.has(r)?v(e):b.has(o)?d--:g.get(r)>g.get(o)?(b.add(r),v(e)):(w.add(o),d--):(c(n,s),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,s)}for(;p;)v(h[p-1]);return h}(g,e,v,1,t,b,w,f,j,Z,null,W),E.r||r(E.c),E=E.p)},i(t){if(!d){for(let t=0;t<b.length;t+=1)M(g[t]);d=!0}},o(t){for(let t=0;t<g.length;t+=1)A(g[t]);d=!1},d(t){t&&a(e);for(let t=0;t<g.length;t+=1)g[t].d();h=!1,y()}}}function et(t,e,n){let r=[];U.subscribe((t=>{n(0,r=t)}));return[r,()=>{const t=new Q;U.addLayer(t)},t=>{U.deleteLayer(t.id)},t=>{U.selectLayer(t.id)}]}class nt extends P{constructor(t){super(),I(this,t,et,tt,i,{})}}function rt(e){let n,r,o,i,s,l,f;return r=new J({props:{icon:K}}),l=new nt({}),{c(){n=u("div"),N(r.$$.fragment),o=p(),i=u("h1"),i.textContent="Hello",s=p(),N(l.$$.fragment),m(n,"class","header svelte-19h2apl")},m(t,e){c(t,n,e),X(r,n,null),c(t,o,e),c(t,i,e),c(t,s,e),X(l,t,e),f=!0},p:t,i(t){f||(M(r.$$.fragment,t),M(l.$$.fragment,t),f=!0)},o(t){A(r.$$.fragment,t),A(l.$$.fragment,t),f=!1},d(t){t&&a(n),Y(r),t&&a(o),t&&a(i),t&&a(s),Y(l,t)}}}return new class extends P{constructor(t){super(),I(this,t,null,rt,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
