if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.12b29717.js",revision:"eb2b9dac8aad48146f170ae91faa1ffb"},{url:"assets/index.3cb6b11c.css",revision:"cfb719a006a95a08a445626fbf39c5ea"},{url:"assets/index.6ca25f0f.js",revision:"8f988fa4479c86242646813b247ed939"},{url:"assets/index.e5735a5d.css",revision:"5d5bcad74bdd03ac818351af24c53dbb"},{url:"assets/registerSW.4c4014ca.js",revision:"46cc2c00aba4e94db68ec2a69ceeec86"},{url:"assets/vendor.bd05b141.js",revision:"746fe549d80b4e02cfa71dd2fe4c56c4"},{url:"index.html",revision:"a3ec0c2e0a9171498409935dad8a9334"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
