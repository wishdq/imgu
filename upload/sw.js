if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0bc64d9e.js",revision:"4b7f770aeddf1d22bbdbb6784a55b51a"},{url:"assets/index.245031f9.js",revision:"0b414a34f9c73a1942a12370fe4da572"},{url:"assets/index.3cb6b11c.css",revision:"cfb719a006a95a08a445626fbf39c5ea"},{url:"assets/index.b0e95316.css",revision:"d6c5f8d79280d441f15c93767a15906e"},{url:"assets/registerSW.4c4014ca.js",revision:"46cc2c00aba4e94db68ec2a69ceeec86"},{url:"assets/vendor.a4774110.js",revision:"6bf748241b951677523131ba655ada7f"},{url:"index.html",revision:"0d2f4e0a8b2e309c6241a538efbc0be3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
