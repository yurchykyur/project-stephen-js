!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",function(t,n){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var a,o,i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,o={};a=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),i("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.1e682985.js","410VS":"icons.788c0c72.svg","98W23":"index.e4a7bf83.js","kYcKa":"index.e400c88f.js"}')),i("2vprg"),i("cBdEO"),i("4ARuI");var r={};r=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("410VS");let s={list:document.querySelector(".shopping-list-list"),emptyPage:document.querySelector(".empty-sh-page"),SHOPPING_LIST_LS:"shopping list"};function l(e=[]){if(s.list.innerHTML="",e.length){let n=e.map(e=>({_id:e.book.id,book_image:e.book.img,title:e.book.title,list_name:e.book.bookName,description:e.book.description,author:e.book.author,buy_links:e.book.shops}));s.list.insertAdjacentHTML("beforeend",(s.emptyPage.classList.add("visually-hidden"),n.map(({_id:e,book_image:n,title:a,list_name:o,description:i,author:s,buy_links:l})=>{let u=`<svg class="book-logo">
        <use href="${t(r)}#book"></use>
      </svg>`;n&&(u=`<img class="shopping-list-img"
                    src="${n}" alt="${a}" 
                    loading="lazy"/>`);let c=l.find(e=>"Amazon"===e.name).url,g=l.find(e=>"Apple Books"===e.name).url,p=l.find(e=>"Bookshop"===e.name).url;return`<li class="shopping-list-item">
            <div class="sh-wrapper">
                ${u}
            </div>
            <div class="shopping-list-info">
              <div class="sh-markap-wrapper">
                <button type="button" id ="${e}"class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${t(r)}#trash"></use>
                    </svg>
                  </button>
                <h2 class="shopping-book-title">${a}</h2>
                <p class="shopping-book-polygraphy">${o}</p>
                <div class="sh-desc-wrapper">
                  <p class="shopping-book-desc">
                  ${i}
                  </p>
                </div>
              </div>
                
              <div class="sh-buy-wrapper" >
                <p class="shopping-book-author">${s}</p>
                  <ul class="links-to-buy">
                    <li class="item-to-buy">
                      <a href="${c}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-amazon">
                          <use href="${t(r)}#amazon"></use>
                        </svg>
                      </a>
                    </li>
                    <li class="item-to-buy">
                      <a href="${g}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-applebook">
                          <use href="${t(r)}#applebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li class="item-to-buy">
                      <a href="${p}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-bookshop">
                          <use href="${t(r)}#bookshop"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </li>`}).join("")))}else s.emptyPage.classList.contains("visually-hidden")&&s.emptyPage.classList.remove("visually-hidden")}s.list.addEventListener("click",function(e){let t=e.target.closest(".trash-btn");if(t)try{let e=JSON.parse(localStorage.getItem(s.SHOPPING_LIST_LS));localStorage.removeItem(s.SHOPPING_LIST_LS);let n=e.filter(e=>e.id!==t.id);if(localStorage.setItem(s.SHOPPING_LIST_LS,JSON.stringify(n)),!n.length){l(n);return}b(n,1,!1,!0)}catch(e){console.log("ERROR!",e)}});let u=[],c=0,g={a:!0,b:!0},p={paginationContainer:document.querySelector(".pagination-container")};p.paginationContainer.addEventListener("click",function(e){e.preventDefault();let t=e.target.closest(".js-pagination-pages"),n=e.target.closest(".js-pagination-button");if(t){let e=t.dataset.pagination;"..."===e?console.log('case "..."'):function(e){let t=v();k(t),m(Number(e)),l(w(Number(e)))}(e)}if(n){let e=n.dataset.pagination;switch(e){case"start":!function(){b(u,1);let e=v();k(e),m(1),l(w(1))}();break;case"backward":!function(){let e=v();if(1===e)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);e<=3?(k(e),b(u,1)):(k(e),b(u,t-1)),m(e-1),l(w(e-1))}();break;case"forward":!function(){let e=v();if(e===d.length)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);k(e),b(u,t+1),m(e+1),l(w(e+1))}();break;case"end":!function(){b(u,d.length);let e=v();k(e),m(d.length),l(w(d.length))}();break;default:return}}});let d=[],f=0;function h(e){d=[];for(let t=0;t<Math.ceil(e.length/c);t+=1)d.push(t+1)}function b(e,n=1,a=!1,o=!1){if("undefined"===e||0===e.length)return;if(a&&(u=[...e],S(window.innerWidth),h(u),l(w(1))),o){!function(e){h(u=[...e]);let t=1;if(d.length>1&&(t=v()),u.length<=c){p.paginationContainer.innerHTML="",l(w(1));return}if(t>d.length){b(u,d.length),m(d.length),l(w(d.length));return}if(t<d.length&&1===t){b(u,1),m(1),l(w(1));return}if(w(t).length<=c){let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);b(u,e),m(t),l(w(t))}}(e);return}if(e.length<=c)return;let i=!0;n+f-1>=d.length&&(i=!1),p.paginationContainer.innerHTML=function(e,n,a=!0){return`<div class="left-arrows-wrapper">
        <button class="js-pagination-button start" type="button" data-pagination="start">
          <svg class="pagination-icon-start" width="24" height="24">
            <use href="${t(r)}#icon-arrow-ff"></use>
          </svg>
        </button>
        <button class="js-pagination-button backward" type="button" data-pagination="backward">
          <svg class="pagination-icon-backward" width="24" height="24">
            <use href="${t(r)}#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <ul class="js-pagination">
        ${a?y(e,n)+'<div class="js-three-point" data-pagination="...">...</div>':y(e,n)}
      </ul>

      <div class="right-arrows-wrapper">
        <button class="js-pagination-button forward" type="button" data-pagination="forward">
          <svg class="pagination-icon-forward" width="24" height="24">
            <use href="${t(r)}#icon-arrow"></use>
          </svg>
        </button>
        <button class="js-pagination-button end" type="button" data-pagination="end">
          <svg class="pagination-icon-end" width="24" height="24">
            <use href="${t(r)}#icon-arrow-ff"></use>
          </svg>
        </button>
      </div>`}(n,f,i),p.pagination=document.querySelector(".js-pagination-list"),p.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),a&&m(1)}function v(){let e=1;return p.allPaginationPages.forEach(t=>{t.classList.contains("js-active-pagination")&&(e=t.dataset.pagination)}),Number(e)}function m(e=1){p.allPaginationPages.forEach(t=>{let n=Number(t.dataset.pagination);n===e&&t.classList.add("js-active-pagination")})}function k(e=1){p.allPaginationPages.forEach(t=>{let n=Number(t.dataset.pagination);n===e&&t.classList.remove("js-active-pagination")})}function w(e){let t=[],n=c*(e-1);for(let e=0;e<c;e+=1)n+e<u.length&&t.push(n+e);let a=[];return t.forEach(e=>a.push(u[e])),a}function y(e=1,t=2){let n="",a=e,o=d.length;e+t-1>=o&&(a=o-t+1),t>o&&(a=1);for(let i=a;i<e+t;i+=1){if(i>o){console.log("break");break}n+=`<li class="js-pagination-pages" data-pagination="${i}">${i}</li>`}return n}function S(e){let t=!1;return e<768&&g.a&&(c=4,f=2,g.a=!1,g.b=!0,t=!0),e>768&&g.b&&(c=3,f=3,g.a=!0,g.b=!1,t=!0),t}window.addEventListener("resize",()=>{let e=S(window.innerWidth);e&&b(u,1,!1,!0)}),i("3Z8r8"),i("c4bOE"),i("bWgPh"),i("9R1so");let _=function(e){try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}("shopping list");b(_,1,!0)}();
//# sourceMappingURL=shopping-list.1e682985.js.map
