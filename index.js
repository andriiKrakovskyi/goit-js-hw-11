import{i as c,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();c.settings({messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});function h(){c.show({message:"Please enter a value.",backgroundColor:"#f2ff00",messageColor:"#2e2f42"})}function l(){c.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FFF",backgroundColor:"#EF4040",iconUrl:"../img/iconalert.svg",maxWidth:"350",imageWidth:"24"})}const p={BASE_URL:"https://pixabay.com/api/",API_KEY:"47339247-cdcac9f8981a2af5215025f92"};function g(r){const{BASE_URL:i,API_KEY:n}=p,o=new URLSearchParams({key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${o}`).then(e=>{if(!e.ok)throw l(),new Error("Error fetching api");return e.json()})}function y(r){return r.map(({webformatURL:i,largeImageURL:n,tags:o,likes:e,views:t,comments:s,downloads:m})=>`
  <div class="photo__card">
    <a class="gallery__link" 
    href="${n}"
  >
  <img
    src="${i}"
    alt="${o}"
    loading="lazy"
    class="webformat__img"
  />
  </a>
        <ul class="info">
          ${a("Likes",e)}
          ${a("Views",t)}
          ${a("Comments",s)}
          ${a("Downloads",m)}
        </ul>
</div> 
`).join("")}function a(r,i){return`
    <li class="list__info">
      <h3>${r}</h3>
      <p>${i}</p>
    </li>
  `}const u=document.querySelector("#loader");function _(){u.classList.remove("hidden__css")}function L(){u.classList.add("hidden__css")}const w=document.querySelector("#myForm"),f=document.querySelector("#gallery");let S=new d(".gallery__link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});w.addEventListener("submit",b);function b(r){r.preventDefault(),f.innerHTML="";const n=r.target.elements.data_input.value.trim();if(n.length===0){h();return}_(),g(n).then(o=>{if(E(o.hits),o.hits.length===0)throw l(),new Error("Invalid input")}).catch(o=>o.message).finally(()=>{r.target.reset(),L()})}function E(r){f.innerHTML=y(r),S.refresh()}
//# sourceMappingURL=index.js.map
