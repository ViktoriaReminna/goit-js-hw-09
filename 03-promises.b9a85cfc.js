function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const l=document.querySelector(".form"),a=(l.querySelector("button"),l.querySelector('input[name="delay"]')),d=l.querySelector('input[name="step"]'),s=l.querySelector('input[name="amount"]');function f(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.addEventListener("submit",(t=>{t.preventDefault();const n=Number(a.value),o=Number(d.value),r=Number(s.value);let l=n;for(i=0;i<r;i++){f(i,l).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),l+=o}}));
//# sourceMappingURL=03-promises.b9a85cfc.js.map
