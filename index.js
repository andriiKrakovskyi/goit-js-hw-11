import{i as l,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d={BASE_URL:"https://pixabay.com/api/",API_KEY:"47339247-cdcac9f8981a2af5215025f92"};function p(r){const{BASE_URL:o,API_KEY:s}=d,i=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw l.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",iconUrl:"../img/iconalert.svg",maxWidth:"350",imageWidth:"24",transitionIn:"flipInX"}),new Error("Error fetching api");return e.json()})}function h(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:m})=>`
  <div class="photo__card">
    <a class="gallery__link" 
    href="${s}"
  >
  <img
    src="${o}"
    alt="${i}"
    loading="lazy"
    class="webformat__img"
  />
  </a>
        <ul class="info">
          ${a("Likes",e)}
          ${a("Views",t)}
          ${a("Comments",n)}
          ${a("Downloads",m)}
        </ul>
</div> 
`).join("")}function a(r,o){return`
    <li class="list__info">
      <h3>${r}</h3>
      <p>${o}</p>
    </li>
  `}const g=document.querySelector("#myForm"),y=document.querySelector("#gallery"),u=document.querySelector("#loader"),_=()=>u.classList.remove("hidden__css"),L=()=>u.classList.add("hidden__css");let c;g.addEventListener("submit",S);function S(r){r.preventDefault();const s=r.target.elements.data_input.value.trim();if(s.length===0){l.show({message:"Please enter a value.",messageColor:"#2e2f42",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#f2ff00",position:"topRight",transitionIn:"flipInX"});return}_(),p(s).then(i=>{y.innerHTML=h(i.hits),c?c.refresh():c=new f(".gallery__link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(i=>i.message).finally(()=>{r.target.reset(),L()})}
//# sourceMappingURL=index.js.map
