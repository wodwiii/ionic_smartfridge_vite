if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>l(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-legacy-to7ZvaWj.js",revision:null},{url:"assets/focus-visible-Pz59kC95.js",revision:null},{url:"assets/index-I_eI8cO2.js",revision:null},{url:"assets/index-legacy-4Zi5nBXc.js",revision:null},{url:"assets/index-OKVKdUgX.css",revision:null},{url:"assets/index9-ahByv0jl.js",revision:null},{url:"assets/index9-legacy-XWzalSOa.js",revision:null},{url:"assets/input-shims-legacy-JlfkBe-I.js",revision:null},{url:"assets/input-shims-QINbBNtd.js",revision:null},{url:"assets/ios.transition-e8OXO4x_.js",revision:null},{url:"assets/ios.transition-legacy-MdSDfvTD.js",revision:null},{url:"assets/keyboard2-legacy-RSBfHjrX.js",revision:null},{url:"assets/keyboard2-ZYNd0KzI.js",revision:null},{url:"assets/md.transition-gQDvOceC.js",revision:null},{url:"assets/md.transition-legacy-Ax2a4JJy.js",revision:null},{url:"assets/polyfills-legacy-6L8v__yu.js",revision:null},{url:"assets/pwa-action-sheet.entry-legacy-pKDrqAfO.js",revision:null},{url:"assets/pwa-action-sheet.entry-sboiA2iW.js",revision:null},{url:"assets/pwa-camera-modal-instance.entry-legacy-wbqFdpvw.js",revision:null},{url:"assets/pwa-camera-modal-instance.entry-vdm6Z50d.js",revision:null},{url:"assets/pwa-camera-modal.entry-Gu8cixt0.js",revision:null},{url:"assets/pwa-camera-modal.entry-legacy-1QhLNmfG.js",revision:null},{url:"assets/pwa-camera.entry-cr8R87nA.js",revision:null},{url:"assets/pwa-camera.entry-legacy-WfkodCav.js",revision:null},{url:"assets/pwa-toast.entry-legacy-WzeMgPgi.js",revision:null},{url:"assets/pwa-toast.entry-wvhcO-Yz.js",revision:null},{url:"assets/status-tap-legacy-pwsNzPzB.js",revision:null},{url:"assets/status-tap-TeoftqNu.js",revision:null},{url:"assets/swipe-back-3vXHfSRn.js",revision:null},{url:"assets/swipe-back-legacy-dqSK8HHS.js",revision:null},{url:"assets/web-legacy-92fTDx1F.js",revision:null},{url:"assets/web-Vgx9FXgO.js",revision:null},{url:"index.html",revision:"5175fcae03a6e9b7375a2493a91251fb"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"1b27813fb8f23a1a5a22983b7d5081ef"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
