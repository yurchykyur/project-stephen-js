function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=i.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},i.parcelRequired7c6=a),a.register("kyEFX",function(t,i){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var n,o,a={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},o=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.ef7a6857.js","8OQ7p":"icons.f6642679.svg"}'));const r=document.querySelector(".gotop-wrapper");document.querySelector(".gototop"),window.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,i=window.innerHeight;e+i>=t-140?r.classList.add("show"):r.classList.remove("show")}),(()=>{let e=document.querySelectorAll("[data-modal-open]"),t=document.querySelectorAll("[data-modal-close]"),i=document.querySelectorAll("[data-modal]");e.forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("data-modal-open"),i=document.querySelector(`[data-modal="${t}"]`);i.classList.add("is-open"),"team-modal"!==t&&document.body.classList.add("modal-open")})}),t.forEach(e=>{e.addEventListener("click",()=>{let t=e.closest("[data-modal]");t.classList.remove("is-open"),document.body.classList.remove("modal-open")})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&i.forEach(e=>{e.classList.contains("is-open")&&(e.classList.remove("is-open"),document.body.classList.remove("modal-open"))})}),i.forEach(e=>{e.addEventListener("click",t=>{t.target===e&&(e.classList.remove("is-open"),document.body.classList.remove("modal-open"))})})})();var l={};l=new URL(a("kyEFX").resolve("8OQ7p"),import.meta.url).toString();let s=[{title:"oject 1",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 2",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 3",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 4",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 5",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 6",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 7",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 8",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 9",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 10",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 11",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 12",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 13",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 14",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 15",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 16",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 17",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 18",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 19",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 20",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 21",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 22",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."}],c=3;console.log(s);const d={paginationContainer:document.querySelector(".pagination-container")};let u=[];function m(e){return e.map(({title:e,text:t})=>`<div class="book">
        <h3>${e}</h3>
        <p>${t}</p>
      </div>`).join("")}function p(){console.log("moveToStart()"),y(s,1);let e=f();v(e),h(1);let t=m(w(1));d.content.innerHTML=t}function g(){console.log("moveToEnd()"),y(s,u.length);let e=f();v(e),h(u.length);let t=m(w(u.length));d.content.innerHTML=t}function f(){let e=1;return d.allPaginationPages.forEach(t=>{t.classList.contains("js-active-pagination")&&(e=t.dataset.pagination)}),Number(e)}function h(e=1){console.log("addActivePage",d.allPaginationPages),d.allPaginationPages.forEach(t=>{let i=Number(t.dataset.pagination);i===e&&t.classList.add("js-active-pagination")})}function v(e=1){d.allPaginationPages.forEach(t=>{let i=Number(t.dataset.pagination);i===e&&t.classList.remove("js-active-pagination")})}function y(e,i=1,n=!1,o=!1){if("undefined"===e||0===e.length)return;if(n){s=[...e],c=window.innerWidth<768?4:3,function(e){u=[];for(let t=0;t<Math.ceil(e.length/c);t+=1)u.push(t+1)}(s);let t=m(w(1));document.querySelector(".js-content-container").innerHTML=t}if(e.length<=c)return;if(o){let t=[...s],i=Math.ceil(t.length/c);s=[...e];let n=f();if(u.length===i){let e=m(w(Number(n)));d.content.innerHTML=e}else!function(e,t,i){if(i===u.length){g();return}if(1===i){p();return}let n=Math.ceil(t.length/c);if(u.length===n){document.querySelector(".js-pagination-pages").dataset.pagination,f(),h(Number(page));let e=m(w(Number(page)));d.content.innerHTML=e}}(0,t,n);return}let a=window.innerWidth>768?3:2;console.log(a);let r=!0;i+a-1>=u.length&&(r=!1),d.paginationContainer.innerHTML=function(e,i,n=!0){return`<div class="pagination-container">
      <div class="left-arrows-wrapper">
        <button class="js-pagination-button start" type="button" data-pagination="start">
          <svg class="pagination-icon-start" width="24" height="24">
            <use href="${t(l)}#icon-arrow-ff"></use>
          </svg>
        </button>
        <button class="js-pagination-button backward" type="button" data-pagination="backward">
          <svg class="pagination-icon-backward" width="24" height="24">
            <use href="${t(l)}#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <ul class="js-pagination">
        ${n?b(e,i)+'<li class="js-pagination-pages" data-pagination="...">...</li>':b(e,i)}
      </ul>

      <div class="right-arrows-wrapper">
        <button class="js-pagination-button forward" type="button" data-pagination="forward">
          <svg class="pagination-icon-forward" width="24" height="24">
            <use href="${t(l)}#icon-arrow"></use>
          </svg>
        </button>
        <button class="js-pagination-button end" type="button" data-pagination="end">
          <svg class="pagination-icon-end" width="24" height="24">
            <use href="${t(l)}#icon-arrow-ff"></use>
          </svg>
        </button>
      </div>
    </div>`}(i,a,r),d.content=document.querySelector(".js-content-container"),d.pagination=document.querySelector(".js-pagination-list"),d.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),n&&h(1)}function w(e){let t=[],i=c*(e-1);for(let e=0;e<c;e+=1)i+e<s.length&&t.push(i+e);console.log("arrayOfIndexes",t);let n=[];return t.forEach(e=>n.push(s[e])),console.log("newDataForRenderList",n),n}function b(e=1,t=2){let i="",n=e,o=u.length;e+t-1>=o&&(n=o-t+1),t>o&&(n=1);for(let a=n;a<e+t;a+=1){if(a>o){console.log("return");break}i+=`<li class="js-pagination-pages" data-pagination="${a}">${a}</li>`}return i}console.log(u),d.paginationContainer.addEventListener("click",function(e){e.preventDefault();let t=e.target.closest(".js-pagination-pages"),i=e.target.closest(".js-pagination-button");if(t){let e=t.dataset.pagination;console.log(typeof e),console.log(e),"..."===e?console.log('case "..."'):function(e){console.log("moveToPage()");let t=f();console.log(t),v(t),h(Number(e));let i=m(w(Number(e)));d.content.innerHTML=i}(e)}if(i){let e=i.dataset.pagination;switch(console.log(typeof e),console.log(e),e){case"start":p();break;case"backward":(function(){console.log("moveToBackward()");let e=f();if(1===e)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);if(e<=3){v(e),console.log(1,"initialPage"),y(s,1),h(e-1);let t=m(w(e-1));d.content.innerHTML=t}else{let i=t-1;v(e),console.log(i,"initialPage"),y(s,i),h(e-1);let n=m(w(e-1));d.content.innerHTML=n}})();break;case"forward":(function(){console.log("moveToforward()");let e=f();if(e===u.length)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination),i=t+1;v(e),console.log(i,"initialPage"),y(s,i),h(e+1);let n=m(w(e+1));d.content.innerHTML=n})();break;case"end":g();break;default:return}}}),console.log(window.innerWidth),y(s,1,!0);var L=!1;if("undefined"!=typeof window){var x={get passive(){L=!0;return}};window.addEventListener("testPassive",null,x),window.removeEventListener("testPassive",null,x)}var j="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),E=[],S=!1,R=-1,T=void 0,k=void 0,q=void 0,P=function(e){return E.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},H=function(e){var t=e||window.event;return!!P(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},M=function(e){if(void 0===q){var t=!!e&&!0===e.reserveScrollBarGap,i=window.innerWidth-document.documentElement.clientWidth;if(t&&i>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);q=document.body.style.paddingRight,document.body.style.paddingRight=n+i+"px"}}void 0===T&&(T=document.body.style.overflow,document.body.style.overflow="hidden")},A=function(){void 0!==q&&(document.body.style.paddingRight=q,q=void 0),void 0!==T&&(document.body.style.overflow=T,T=void 0)},N=function(){if(void 0!==k){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=k.position,document.body.style.top=k.top,document.body.style.left=k.left,window.scrollTo(t,e),k=void 0}},O=function(e,t){var i=e.targetTouches[0].clientY-R;return!P(e.target)&&(t&&0===t.scrollTop&&i>0?H(e):t&&t.scrollHeight-t.scrollTop<=t.clientHeight&&i<0?H(e):(e.stopPropagation(),!0))},$=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}E.some(function(t){return t.targetElement===e})||(E=[].concat(function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}(E),[{targetElement:e,options:t||{}}]),j?window.requestAnimationFrame(function(){if(void 0===k){k={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,i=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))})},300)}}):M(t),!j||(e.ontouchstart=function(e){1===e.targetTouches.length&&(R=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&O(t,e)},S||(document.addEventListener("touchmove",H,L?{passive:!1}:void 0),S=!0)))},B=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}E=E.filter(function(t){return t.targetElement!==e}),j&&(e.ontouchstart=null,e.ontouchmove=null,S&&0===E.length&&(document.removeEventListener("touchmove",H,L?{passive:!1}:void 0),S=!1)),j?N():A()};(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mob-link"),o=()=>{let n=e.classList.contains("is-open");n?(t.style.display="flex",i.style.display="none"):(t.style.display="none",i.style.display="flex"),t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");let o=n?"enableBodyScroll":"disableBodyScroll";"disableBodyScroll"===o?$(document.body):B(document.body)};t.addEventListener("click",o),i.addEventListener("click",o),n.forEach(t=>{t.addEventListener("click",()=>{e.classList.contains("is-open")&&o()})});let a=()=>{window.matchMedia("(min-width: 768px)").matches?(e.classList.remove("is-open"),t.style.display="none",i.style.display="none",t.setAttribute("aria-expanded",!1),B(document.body)):t.style.display="flex"};window.addEventListener("resize",a),a()})(),function(e){try{let t=localStorage.getItem(e);null===t||JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(key);
//# sourceMappingURL=shopping-list.ef7a6857.js.map