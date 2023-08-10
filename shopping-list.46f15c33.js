function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("kyEFX",function(e,n){t(e.exports,"register",function(){return a},function(t){return a=t}),t(e.exports,"resolve",function(){return o},function(t){return o=t});var a,o,i={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),i("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.46f15c33.js","8OQ7p":"icons.788c0c72.svg","xIVaV":"index.4f158a17.js","hfu6S":"index.c7d954de.js"}')),i("cqUhq"),i("1GFL3"),i("7ECWb");var s={};s=new URL(i("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const r={list:document.querySelector(".shopping-list-list"),emptyPage:document.querySelector(".empty-sh-page"),SHOPPING_LIST_LS:"shopping list"};function l(t=[]){if(r.list.innerHTML="",t.length){let n=t.map(t=>({_id:t.book.id,book_image:t.book.img,title:t.book.title,list_name:t.book.bookName,description:t.book.description,author:t.book.author,buy_links:t.book.shops}));r.list.insertAdjacentHTML("beforeend",(r.emptyPage.classList.add("visually-hidden"),n.map(({_id:t,book_image:n,title:a,list_name:o,description:i,author:r,buy_links:l})=>{let u=`<svg class="book-logo">
        <use href="${e(s)}#book"></use>
      </svg>`;n&&(u=`<img class="shopping-list-img"
                    src="${n}" alt="${a}" 
                    loading="lazy"/>`);let c=l.find(t=>"Amazon"===t.name).url,g=l.find(t=>"Apple Books"===t.name).url,p=l.find(t=>"Bookshop"===t.name).url;return`<li class="shopping-list-item">
            <div class="sh-wrapper">
                ${u}
            </div>
            <div class="shopping-list-info">
              <div class="sh-markap-wrapper">
                <button type="button" id ="${t}"class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${e(s)}#trash"></use>
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
                <p class="shopping-book-author">${r}</p>
                  <ul class="links-to-buy">
                    <li class="item-to-buy">
                      <a href="${c}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-amazon">
                          <use href="${e(s)}#amazon"></use>
                        </svg>
                      </a>
                    </li>
                    <li class="item-to-buy">
                      <a href="${g}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-applebook">
                          <use href="${e(s)}#applebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li class="item-to-buy">
                      <a href="${p}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-bookshop">
                          <use href="${e(s)}#bookshop"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </li>`}).join("")))}else r.emptyPage.classList.contains("visually-hidden")&&r.emptyPage.classList.remove("visually-hidden")}r.list.addEventListener("click",function(t){let e=t.target.closest(".trash-btn");if(e)try{let t=JSON.parse(localStorage.getItem(r.SHOPPING_LIST_LS));localStorage.removeItem(r.SHOPPING_LIST_LS);let n=t.filter(t=>t.id!==e.id);if(localStorage.setItem(r.SHOPPING_LIST_LS,JSON.stringify(n)),!n.length){l(n);return}b(n,1,!1,!0)}catch(t){console.log("ERROR!",t)}});let u=[],c=0;const g={a:!0,b:!0},p={paginationContainer:document.querySelector(".pagination-container")};p.paginationContainer.addEventListener("click",function(t){t.preventDefault();let e=t.target.closest(".js-pagination-pages"),n=t.target.closest(".js-pagination-button");if(e){let t=e.dataset.pagination;"..."===t?console.log('case "..."'):function(t){let e=v();k(e),m(Number(t)),l(y(Number(t)))}(t)}if(n){let t=n.dataset.pagination;switch(t){case"start":!function(){b(u,1);let t=v();k(t),m(1),l(y(1))}();break;case"backward":!function(){let t=v();if(1===t)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);t<=3?(k(t),b(u,1)):(k(t),b(u,e-1)),m(t-1),l(y(t-1))}();break;case"forward":!function(){let t=v();if(t===d.length)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);k(t),b(u,e+1),m(t+1),l(y(t+1))}();break;case"end":!function(){b(u,d.length);let t=v();k(t),m(d.length),l(y(d.length))}();break;default:return}}});let d=[],f=0;function h(t){d=[];for(let e=0;e<Math.ceil(t.length/c);e+=1)d.push(e+1)}function b(t,n=1,a=!1,o=!1){if("undefined"===t||0===t.length)return;if(a&&(u=[...t],S(window.innerWidth),h(u),l(y(1))),o){!function(t){h(u=[...t]);let e=1;if(d.length>1&&(e=v()),u.length<=c){p.paginationContainer.innerHTML="",l(y(1));return}if(e>d.length){b(u,d.length),m(d.length),l(y(d.length));return}if(e<d.length&&1===e){b(u,1),m(1),l(y(1));return}if(y(e).length<=c){let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);b(u,t),m(e),l(y(e))}}(t);return}if(t.length<=c)return;let i=!0;n+f-1>=d.length&&(i=!1),p.paginationContainer.innerHTML=function(t,n,a=!0){return`<div class="left-arrows-wrapper">
        <button class="js-pagination-button start" type="button" data-pagination="start">
          <svg class="pagination-icon-start" width="24" height="24">
            <use href="${e(s)}#icon-arrow-ff"></use>
          </svg>
        </button>
        <button class="js-pagination-button backward" type="button" data-pagination="backward">
          <svg class="pagination-icon-backward" width="24" height="24">
            <use href="${e(s)}#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <ul class="js-pagination">
        ${a?w(t,n)+'<div class="js-three-point" data-pagination="...">...</div>':w(t,n)}
      </ul>

      <div class="right-arrows-wrapper">
        <button class="js-pagination-button forward" type="button" data-pagination="forward">
          <svg class="pagination-icon-forward" width="24" height="24">
            <use href="${e(s)}#icon-arrow"></use>
          </svg>
        </button>
        <button class="js-pagination-button end" type="button" data-pagination="end">
          <svg class="pagination-icon-end" width="24" height="24">
            <use href="${e(s)}#icon-arrow-ff"></use>
          </svg>
        </button>
      </div>`}(n,f,i),p.pagination=document.querySelector(".js-pagination-list"),p.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),a&&m(1)}function v(){let t=1;return p.allPaginationPages.forEach(e=>{e.classList.contains("js-active-pagination")&&(t=e.dataset.pagination)}),Number(t)}function m(t=1){p.allPaginationPages.forEach(e=>{let n=Number(e.dataset.pagination);n===t&&e.classList.add("js-active-pagination")})}function k(t=1){p.allPaginationPages.forEach(e=>{let n=Number(e.dataset.pagination);n===t&&e.classList.remove("js-active-pagination")})}function y(t){let e=[],n=c*(t-1);for(let t=0;t<c;t+=1)n+t<u.length&&e.push(n+t);let a=[];return e.forEach(t=>a.push(u[t])),a}function w(t=1,e=2){let n="",a=t,o=d.length;t+e-1>=o&&(a=o-e+1),e>o&&(a=1);for(let i=a;i<t+e;i+=1){if(i>o){console.log("break");break}n+=`<li class="js-pagination-pages" data-pagination="${i}">${i}</li>`}return n}function S(t){let e=!1;return t<768&&g.a&&(c=4,f=2,g.a=!1,g.b=!0,e=!0),t>768&&g.b&&(c=3,f=3,g.a=!0,g.b=!1,e=!0),e}window.addEventListener("resize",()=>{let t=S(window.innerWidth);t&&b(u,1,!1,!0)}),i("0O6mE"),i("3Xhi6"),i("7Th1V"),i("HlhYT");const _=function(t){try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}("shopping list");b(_,1,!0);
//# sourceMappingURL=shopping-list.46f15c33.js.map
