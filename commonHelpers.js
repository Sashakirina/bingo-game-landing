/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const u=document.querySelectorAll(".nav-item"),s=document.querySelector(".modal-wrapper"),g=document.querySelector(".burger-btn"),m=document.querySelector(".close-btn"),y=document.querySelectorAll(".nav-link-mob");u.forEach(n=>{n.addEventListener("click",()=>{u.forEach(r=>r.classList.remove("active")),n.classList.add("active")})});g.addEventListener("click",()=>{s.classList.add("is-open")});m.addEventListener("click",()=>{s.classList.remove("is-open")});s.addEventListener("click",n=>{n.target===s&&s.classList.remove("is-open")});y.forEach(n=>{n.addEventListener("click",()=>{s.classList.remove("is-open")})});const f=()=>{const n=document.querySelector(".gallery-container"),r=document.querySelector(".prev-btn"),c=document.querySelector(".next-btn"),o=["img/gallery/gallery-1.png","img/gallery/gallery-2.png","img/gallery/gallery-3.png","img/gallery/gallery-4.png"],t=document.querySelectorAll(".gallery-link");let e=0;if(!n||!r||!c||!t.length){console.error("Gallery elements not found in the DOM");return}const l=i=>{t.forEach((d,a)=>{a===i?(d.classList.remove("hidden"),n.querySelector(".gallery-image").src=o[a]):d.classList.add("hidden")})};n.querySelector(".gallery-image").src=o[e],l(e),r.addEventListener("click",()=>{e=(e-1+o.length)%o.length,l(e)}),c.addEventListener("click",()=>{e=(e+1)%o.length,l(e)}),baguetteBox.run(".gallery-container"),document.addEventListener("keydown",i=>{i.key==="Escape"&&document.querySelectorAll(".baguetteBox-close").forEach(a=>a.click())})};document.addEventListener("DOMContentLoaded",()=>{f()});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("load").forEach(async r=>{const c=r.getAttribute("src");if(c)try{const o=await fetch(c);if(o.ok){const t=await o.text(),e=document.createElement("div");e.innerHTML=t,r.replaceWith(e)}else console.error(`Failed to load ${c}: ${o.statusText}`)}catch(o){console.error(`Error loading ${c}:`,o)}else console.warn('<load> tag is missing "src" attribute.')})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-list li").forEach(r=>{r.querySelector(".faq-toggle").addEventListener("click",()=>{r.classList.toggle("open")})})});
//# sourceMappingURL=commonHelpers.js.map
