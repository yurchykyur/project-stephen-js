!function(){function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=i.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},i.parcelRequired7c6=a),a.register("iE7OH",function(t,i){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var n,o,a={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},o=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,o={};n=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),a("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.e0315a49.js","410VS":"icons.f6642679.svg","3j9We":"Rectangle 13.caeeec1d.jpg","138av":"Rectangle 14.0df15fb8.jpg","cXHBj":"Rectangle 15.0c88794b.jpg","936gk":"Rectangle 16.01a675d6.jpg","d7jWk":"Rectangle 17.166ae87c.jpg","77d1i":"Rectangle 18.ce90f54e.jpg","5X8Oz":"Rectangle 19.610f1ba2.jpg"}'));let r=document.querySelector(".gotop-wrapper");document.querySelector(".gototop"),window.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,i=window.innerHeight;e+i>=t-140?r.classList.add("show"):r.classList.remove("show")}),(()=>{let e=document.querySelectorAll("[data-modal-open]"),t=document.querySelectorAll("[data-modal-close]"),i=document.querySelectorAll("[data-modal]");e.forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("data-modal-open"),i=document.querySelector(`[data-modal="${t}"]`);i.classList.add("is-open"),"team-modal"!==t&&document.body.classList.add("modal-open")})}),t.forEach(e=>{e.addEventListener("click",()=>{let t=e.closest("[data-modal]");t.classList.remove("is-open"),document.body.classList.remove("modal-open")})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&i.forEach(e=>{e.classList.contains("is-open")&&(e.classList.remove("is-open"),document.body.classList.remove("modal-open"))})}),i.forEach(e=>{e.addEventListener("click",t=>{t.target===e&&(e.classList.remove("is-open"),document.body.classList.remove("modal-open"))})})})();var s={};s=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("410VS");var l={};l=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("3j9We");var d={};d=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("138av");var c={};c=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("cXHBj");var u={};u=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("936gk");var m={};m=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("d7jWk");var p={};p=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("77d1i");var g={};g=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("5X8Oz");let h={list:document.querySelector(".shopping-list-list"),emptyPage:document.querySelector(".empty-sh-page")};function f(e=[1]){h.list.innerHTML="",e.length?h.list.insertAdjacentHTML("beforeend",(h.emptyPage.classList.add("visually-hidden"),e.map(({cover:e,alt:i,title:n,polygraphy:o,description:a,author:r})=>{let l=`<svg class="book-logo">
        <use href="${t(s)}#book"></use>
      </svg>`;return e&&(l=`<img class="shopping-list-img"
                    src="${e}" alt="${i}" 
                    loading="lazy"/>`),`<li class="shopping-list-item">
            <div class="sh-wrapper">
                ${l}
            </div>
            <div class="shopping-list-info">
                <button type="button" class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${t(s)}#trash"></use>
                    </svg>
                </button>
              <h2 class="shopping-book-title">${n}</h2>
              <p class="shopping-book-polygraphy">${o}</p>
              <div class="sh-desc-wrapper">
               <p class="shopping-book-desc">
               ${a}
              </p>
            </div>
              <div>
                <p class="shopping-book-author">${r}</p>
                <div class="links-to-buy"></div>
              </div>
            </div>
          </li>`}).join(""))):h.emptyPage.classList.contains("visually-hidden")&&h.emptyPage.classList.remove("visually-hidden")}let v=[{title:"oject 1",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 2",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 3",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 4",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 5",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 6",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 7",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 8",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 9",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 10",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 11",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 12",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 13",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 14",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 15",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 16",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 17",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 18",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 19",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 20",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 21",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 22",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."}],y=3,w={paginationContainer:document.querySelector(".pagination-container")},b=[];function L(e){return e.map(({title:e,description:t,alt:i,polygraphy:n,author:o})=>`<div class="book">
        <h3>${e}</h3>
        <p>${t}</p>
        <p>${n}</p>
        <p>${i}</p>
        <p>${o}</p>

      </div>`).join("")}function j(e,i=1,n=!1,o=!1){if("undefined"===e||0===e.length)return;if(n){v=[...e],y=window.innerWidth<768?4:3,function(e){b=[];for(let t=0;t<Math.ceil(e.length/y);t+=1)b.push(t+1)}(v),console.log(A(1)),f(A(1));let t=L(A(1));document.querySelector(".js-content-container").innerHTML=t}if(o){!function(e){let t=[...v],i=Math.ceil(t.length/y);v=[...e];let n=S();if(v.length<=y){w.paginationContainer.innerHTML="",f(A(1));let e=L(A(1));w.content.innerHTML=e}if(b.length===i){f(A(Number(n)));let e=L(A(Number(n)));w.content.innerHTML=e}if(1===n){x();return}if(b.length-n>=1){H(n);return}n===b.length&&R()}(e);return}if(e.length<=y)return;let a=window.innerWidth>768?3:2;console.log(a);let r=!0;i+a-1>=b.length&&(r=!1),w.paginationContainer.innerHTML=function(e,i,n=!0){return`<div class="pagination-container">
      <div class="left-arrows-wrapper">
        <button class="js-pagination-button start" type="button" data-pagination="start">
          <svg class="pagination-icon-start" width="24" height="24">
            <use href="${t(s)}#icon-arrow-ff"></use>
          </svg>
        </button>
        <button class="js-pagination-button backward" type="button" data-pagination="backward">
          <svg class="pagination-icon-backward" width="24" height="24">
            <use href="${t(s)}#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <ul class="js-pagination">
        ${n?P(e,i)+'<li class="js-pagination-pages" data-pagination="...">...</li>':P(e,i)}
      </ul>

      <div class="right-arrows-wrapper">
        <button class="js-pagination-button forward" type="button" data-pagination="forward">
          <svg class="pagination-icon-forward" width="24" height="24">
            <use href="${t(s)}#icon-arrow"></use>
          </svg>
        </button>
        <button class="js-pagination-button end" type="button" data-pagination="end">
          <svg class="pagination-icon-end" width="24" height="24">
            <use href="${t(s)}#icon-arrow-ff"></use>
          </svg>
        </button>
      </div>
    </div>`}(i,a,r),w.content=document.querySelector(".js-content-container"),w.pagination=document.querySelector(".js-pagination-list"),w.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),n&&E(1)}function x(){j(v,1);let e=S();k(e),E(1),f(A(1));let t=L(A(1));w.content.innerHTML=t}function R(){j(v,b.length);let e=S();k(e),E(b.length),f(b.length);let t=L(A(b.length));w.content.innerHTML=t}function H(e){let t=S();k(t),E(Number(e)),f(A(Number(e)));let i=L(A(Number(e)));w.content.innerHTML=i}function S(){let e=1;return w.allPaginationPages.forEach(t=>{t.classList.contains("js-active-pagination")&&(e=t.dataset.pagination)}),Number(e)}function E(e=1){w.allPaginationPages.forEach(t=>{let i=Number(t.dataset.pagination);i===e&&t.classList.add("js-active-pagination")})}function k(e=1){w.allPaginationPages.forEach(t=>{let i=Number(t.dataset.pagination);i===e&&t.classList.remove("js-active-pagination")})}function A(e){let t=[],i=y*(e-1);for(let e=0;e<y;e+=1)i+e<v.length&&t.push(i+e);let n=[];return t.forEach(e=>n.push(v[e])),n}function P(e=1,t=2){let i="",n=e,o=b.length;e+t-1>=o&&(n=o-t+1),t>o&&(n=1);for(let a=n;a<e+t;a+=1){if(a>o){console.log("return");break}i+=`<li class="js-pagination-pages" data-pagination="${a}">${a}</li>`}return i}w.paginationContainer.addEventListener("click",function(e){e.preventDefault();let t=e.target.closest(".js-pagination-pages"),i=e.target.closest(".js-pagination-button");if(t){let e=t.dataset.pagination;"..."===e?console.log('case "..."'):H(e)}if(i){let e=i.dataset.pagination;switch(e){case"start":x();break;case"backward":!function(){let e=S();if(1===e)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);if(e<=3){k(e),j(v,1),E(e-1);let t=L(A(e-1));w.content.innerHTML=t}else{k(e),j(v,t-1),E(e-1),f(A(e-1));let i=L(A(e-1));w.content.innerHTML=i}}();break;case"forward":!function(){let e=S();if(e===b.length)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);k(e),j(v,t+1),E(e+1),f(A(e+1));let i=L(A(e+1));w.content.innerHTML=i}();break;case"end":R();break;default:return}}});var T=!1;if("undefined"!=typeof window){var B={get passive(){T=!0;return}};window.addEventListener("testPassive",null,B),window.removeEventListener("testPassive",null,B)}var O="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),M=[],N=!1,$=-1,q=void 0,_=void 0,C=void 0,F=function(e){return M.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},J=function(e){var t=e||window.event;return!!F(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},D=function(e){if(void 0===C){var t=!!e&&!0===e.reserveScrollBarGap,i=window.innerWidth-document.documentElement.clientWidth;if(t&&i>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);C=document.body.style.paddingRight,document.body.style.paddingRight=n+i+"px"}}void 0===q&&(q=document.body.style.overflow,document.body.style.overflow="hidden")},W=function(){void 0!==C&&(document.body.style.paddingRight=C,C=void 0),void 0!==q&&(document.body.style.overflow=q,q=void 0)},U=function(){if(void 0!==_){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=_.position,document.body.style.top=_.top,document.body.style.left=_.left,window.scrollTo(t,e),_=void 0}},I=function(e,t){var i=e.targetTouches[0].clientY-$;return!F(e.target)&&(t&&0===t.scrollTop&&i>0?J(e):t&&t.scrollHeight-t.scrollTop<=t.clientHeight&&i<0?J(e):(e.stopPropagation(),!0))},K=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}M.some(function(t){return t.targetElement===e})||(M=[].concat(function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}(M),[{targetElement:e,options:t||{}}]),O?window.requestAnimationFrame(function(){if(void 0===_){_={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,i=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))})},300)}}):D(t),!O||(e.ontouchstart=function(e){1===e.targetTouches.length&&($=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&I(t,e)},N||(document.addEventListener("touchmove",J,T?{passive:!1}:void 0),N=!0)))},z=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}M=M.filter(function(t){return t.targetElement!==e}),O&&(e.ontouchstart=null,e.ontouchmove=null,N&&0===M.length&&(document.removeEventListener("touchmove",J,T?{passive:!1}:void 0),N=!1)),O?U():W()};(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mob-link"),o=()=>{let n=e.classList.contains("is-open");n?(t.style.display="flex",i.style.display="none"):(t.style.display="none",i.style.display="flex"),t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");let o=n?"enableBodyScroll":"disableBodyScroll";"disableBodyScroll"===o?K(document.body):z(document.body)};t.addEventListener("click",o),i.addEventListener("click",o),n.forEach(t=>{t.addEventListener("click",()=>{e.classList.contains("is-open")&&o()})});let a=()=>{window.matchMedia("(min-width: 768px)").matches?(e.classList.remove("is-open"),t.style.display="none",i.style.display="none",t.setAttribute("aria-expanded",!1),z(document.body)):t.style.display="flex"};window.addEventListener("resize",a),a()})(),function(){let e=[{cover:t(l),alt:"book 13",title:"I will find you",polygraphy:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",author:"Harlan Coben"},{cover:t(d),alt:"book 13",title:"Wonder",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(c),alt:"book 13",title:"DAISY JONES & THE SIX",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(u),alt:"book 13",title:"Hello Beautiful",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(m),alt:"book 13",title:"SAVED",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(p),alt:"book 13",title:"STORM WATCH",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(g),alt:"book 13",title:"TOMORROW, AND TOMORROW, AND TOMORROW",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(l),alt:"book 13",title:"I will find you",polygraphy:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",author:"Harlan Coben"},{cover:t(d),alt:"book 13",title:"Wonder",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(u),alt:"book 13",title:"Hello Beautiful",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"}];j(e,1,!0)}()}();
//# sourceMappingURL=shopping-list.e0315a49.js.map
