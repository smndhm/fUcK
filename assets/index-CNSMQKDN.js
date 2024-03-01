(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=`<svg viewBox="0 0 190 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60 30H30V140H40V110H60V100H40V40H50V90H60V30Z" fill="white"/>
<path d="M90 30V140H120V90H110V130H100V40H110V80H120V30H90Z" fill="white"/>
<path d="M150 110H160V30H150V110Z" fill="white"/>
<path d="M150 120V140H160V120H150Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10H180V160H10V10ZM20 20V150H50V120H60V140H80V150H130V110H140V150H170V20H140V100H130V20H80V130H70V20H20Z" fill="white"/>
<path d="M20 150V20H70V30H30V140H40V110H60V120H50V150H20Z" fill="currentColor"/>
<path d="M80 140V150H130V140H80Z" fill="currentColor"/>
<path d="M120 90V80H110V40H100V130H110V90H120Z" fill="currentColor"/>
<path d="M140 140V150H170V20H140V30H160V110H150V100H140V110H150V120H160V140H140Z" fill="currentColor"/>
<path d="M130 30V20H80V30H130Z" fill="currentColor"/>
<path d="M60 100V90H50V40H40V100H60Z" fill="currentColor"/>
</svg>
`;let o=Math.floor(Math.random()*360),i=Math.floor(Math.random()*101);const V=0,a=50;let s=Math.floor(Math.random()*(a-V+1))+V;const d=(H,r,n)=>`hsl(${H} ${r}% ${n}%)`,u=()=>{document.documentElement.style.setProperty("--fUcK-background",d(o,i,s)),document.documentElement.style.setProperty("--fUcK-color",d(o,i,s+30)),console.log({hue:o,saturation:i,lightness:s})};document.body.insertAdjacentHTML("afterbegin",f);setInterval(()=>{o=(o+1)%360,u()},10);
