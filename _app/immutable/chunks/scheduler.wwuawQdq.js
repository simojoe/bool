function m(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(E)}function q(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function A(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function B(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(v(n,e))}function P(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function U(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|o[u];return l}return n.dirty|o}return n.dirty}function G(t,n,e,r,o,l){if(o){const _=k(n,e,r,l);t.p(_,o)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function I(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function J(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function K(t){const n={};for(const e in t)n[e]=!0;return n}function L(t){return t&&q(t.destroy)?t.destroy:m}let f;function d(t){f=t}function g(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){g().$$.on_mount.push(t)}function Q(t){g().$$.after_update.push(t)}function R(t){return g().$$.context.get(t)}function T(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const a=[],y=[];let s=[];const p=[],x=Promise.resolve();let b=!1;function O(){b||(b=!0,x.then(C))}function V(){return O(),x}function z(t){s.push(t)}function W(t){p.push(t)}const h=new Set;let c=0;function C(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,d(n),F(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;y.length;)y.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function X(t){const n=[],e=[];s.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),s=n}export{K as A,R as B,L as C,T as D,W as E,A as F,Q as a,y as b,D as c,M as d,B as e,C as f,z as g,X as h,q as i,f as j,d as k,E as l,a as m,m as n,N as o,O as p,P as q,j as r,S as s,V as t,G as u,H as v,U as w,J as x,w as y,I as z};