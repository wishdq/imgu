if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a59a8da5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.73554198.css",revision:"afa388531c396daf95a2903d9302f252"},{url:"assets/index.8ff104c9.js",revision:"fcac2acd4ff78d8463c84730acef992c"},{url:"assets/index.a8163d0d.js",revision:"d55318a4b5523add3e4a15f87a84f813"},{url:"assets/index.de7a1f1f.css",revision:"1f8c10e0a8980acdf7d38aa2c695b944"},{url:"assets/registerSW.79578144.js",revision:"ed15674d0b5c7be7ef9229942ca202e2"},{url:"assets/vendor.0f5f6fa8.js",revision:"093a65db851177690cdbffa293bbf61d"},{url:"index.html",revision:"64af211188a6edf0b949c55e66fc75c3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
