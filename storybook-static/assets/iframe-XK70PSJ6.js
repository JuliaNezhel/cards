function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./button.stories-Bg5fdBga.js","./index-BBkUAzwr.js","./button-DvsJLX3Z.css","./entry-preview-Xn6uC1vK.js","./react-18-DHj1n7xi.js","./entry-preview-docs-B-PZEOng.js","./_getPrototype-BVQBtff3.js","./index-DrFu-skq.js","./preview-DzbRFJg_.js","./index-B_J8iUie.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-CQIw9XNn.js","./preview-BLZPuzqs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(_,s){return new URL(_,s).href},O={},o=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),E=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in O)return;O[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let m=t.length-1;m>=0;m--){const a=t[m];if(a.href===i&&(!u||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":f,u||(n.as="script",n.crossOrigin=""),n.href=i,E&&n.setAttribute("nonce",E),document.head.appendChild(n),u)return new Promise((m,a)=>{n.addEventListener("load",m),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,d=P({page:"preview"});T.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const L={"./src/components/ui/button/button.stories.ts":async()=>o(()=>import("./button.stories-Bg5fdBga.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./src/components/ui/input/input.stories.ts":async()=>o(()=>import("./input.stories-Xnw9LUaJ.js"),[],import.meta.url)};async function w(_){return L[_]()}const{composeConfigs:v,PreviewWeb:h,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-Xn6uC1vK.js"),__vite__mapDeps([3,1,4]),import.meta.url),o(()=>import("./entry-preview-docs-B-PZEOng.js"),__vite__mapDeps([5,6,1,7]),import.meta.url),o(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([8,9]),import.meta.url),o(()=>import("./preview-Dgi7N9cm.js"),[],import.meta.url),o(()=>import("./preview-DbT1mggi.js"),[],import.meta.url),o(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([10,7]),import.meta.url),o(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),o(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([11,7]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),o(()=>import("./preview-D2d-74FL.js"),[],import.meta.url),o(()=>import("./preview-CQIw9XNn.js"),__vite__mapDeps([12,13]),import.meta.url)]);return v(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h(w,A);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
