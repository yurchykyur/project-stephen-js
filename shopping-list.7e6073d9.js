!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequired7c6=o),o.register("iE7OH",function(e,n){t(e.exports,"register",function(){return a},function(t){return a=t}),t(e.exports,"resolve",function(){return i},function(t){return i=t});var a,i,o={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),o.register("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return a},function(t){return a=t});var a,i={};a=function(t){var e=i[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[t]=e),e}}),o("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.7e6073d9.js","410VS":"icons.788c0c72.svg","a9pKO":"index.b7da6e35.js","4lVHg":"index.7652b91c.js"}')),o("15Wwn"),o("8BR1R"),o("5nuWH"),o("c4bOE"),o("bWgPh"),o("9R1so");var s={};s=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("410VS");let r={list:document.querySelector(".shopping-list-list"),emptyPage:document.querySelector(".empty-sh-page"),SHOPPING_LIST_LS:"shopping list"};function l(t=[]){if(r.list.innerHTML="",t.length){let n=t.map(t=>({_id:t.book.id,book_image:t.book.img,title:t.book.title,list_name:t.book.bookName,description:t.book.description,author:t.book.author,buy_links:t.book.shops}));r.list.insertAdjacentHTML("beforeend",(r.emptyPage.classList.add("visually-hidden"),n.map(({_id:t,book_image:n,title:a,list_name:i,description:o,author:r,buy_links:l})=>{let u=`<svg class="book-logo">
        <use href="${e(s)}#book"></use>
      </svg>`;n&&(u=`<img class="shopping-list-img"
                    src="${n}" alt="${a}" 
                    loading="lazy"/>`);let c=l.find(t=>"Amazon"===t.name).url,p=l.find(t=>"Apple Books"===t.name).url,g=l.find(t=>"Bookshop"===t.name).url;return`<li class="shopping-list-item">
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
                <p class="shopping-book-polygraphy">${i}</p>
                <div class="sh-desc-wrapper">
                  <p class="shopping-book-desc">
                  ${o}
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
                      <a href="${p}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-applebook">
                          <use href="${e(s)}#applebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li class="item-to-buy">
                      <a href="${g}" target="_blank" rel="noreferrer noopener nofollow">
                        <svg class="shop-logo-bookshop">
                          <use href="${e(s)}#bookshop"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </li>`}).join("")))}else r.emptyPage.classList.contains("visually-hidden")&&r.emptyPage.classList.remove("visually-hidden")}r.list.addEventListener("click",function(t){let e=t.target.closest(".trash-btn");if(e)try{let t=JSON.parse(localStorage.getItem(r.SHOPPING_LIST_LS));localStorage.removeItem(r.SHOPPING_LIST_LS);let n=t.filter(t=>t.id!==e.id);if(localStorage.setItem(r.SHOPPING_LIST_LS,JSON.stringify(n)),!n.length){b(n,1,!1,!0);return}b(n,1,!1,!0)}catch(t){console.log("ERROR!",t)}});let u=[],c=0,p=0,g={a:!0,b:!0},d={paginationContainer:document.querySelector(".pagination-container")};d.paginationContainer.addEventListener("click",function(t){t.preventDefault();let e=t.target.closest(".js-pagination-pages"),n=t.target.closest(".js-pagination-button");if(e){let t=e.dataset.pagination;"..."===t?console.log('case "..."'):function(t){let e=v();w(e),m(Number(t)),l(k(Number(t)))}(t)}if(n){let t=n.dataset.pagination;switch(t){case"start":!function(){b(u,1);let t=v();w(t),m(1),l(k(1))}();break;case"backward":!function(){let t=v();if(1===t)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);t<=3?(w(t),b(u,1)):(w(t),b(u,e-1)),m(t-1),l(k(t-1))}();break;case"forward":!function(){let t=v();if(t===p)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);w(t),b(u,e+1),m(t+1),l(k(t+1))}();break;case"end":!function(){b(u,p);let t=v();w(t),m(p),l(k(p))}();break;default:return}}});let f=0;function h(t){p=Math.ceil(t.length/c)}function b(t,n=1,a=!1,i=!1){if("undefined"===t||0===t.length){u=[],l();return}if(a&&(u=[...t],S(window.innerWidth),h(u),l(k(1))),i){!function(t){h(u=[...t]);let e=1;if(p>1&&(e=v()),u.length<=c){d.paginationContainer.innerHTML="",l(k(1));return}if(e>p){b(u,p),m(p),l(k(p));return}if(e<p&&1===e){b(u,1),m(1),l(k(1));return}if(k(e).length<=c){let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);b(u,t),m(e),l(k(e))}}(t);return}if(t.length<=c)return;let o=!0;n+f-1>=p&&(o=!1),d.paginationContainer.innerHTML=function(t,n,a=!0){return`<div class="left-arrows-wrapper">
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
        ${a?y(t,n)+'<div class="js-three-point" data-pagination="...">...</div>':y(t,n)}
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
      </div>`}(n,f,o),d.pagination=document.querySelector(".js-pagination-list"),d.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),a&&m(1)}function v(){let t=1;return d.allPaginationPages.forEach(e=>{e.classList.contains("js-active-pagination")&&(t=e.dataset.pagination)}),Number(t)}function m(t=1){d.allPaginationPages.forEach(e=>{let n=Number(e.dataset.pagination);n===t&&e.classList.add("js-active-pagination")})}function w(t=1){d.allPaginationPages.forEach(e=>{let n=Number(e.dataset.pagination);n===t&&e.classList.remove("js-active-pagination")})}function k(t){let e=[],n=c*(t-1);for(let t=0;t<c;t+=1)n+t<u.length&&e.push(n+t);let a=[];return e.forEach(t=>a.push(u[t])),a}function y(t=1,e=2){let n="",a=t;t+e-1>=p&&(a=p-e+1),e>p&&(a=1);for(let i=a;i<t+e;i+=1)i<=p&&(n+=`<li class="js-pagination-pages" data-pagination="${i}">${i}</li>`);return n}function S(t){let e=!1;return t<768&&g.a&&(c=4,f=2,g.a=!1,g.b=!0,e=!0),t>768&&g.b&&(c=3,f=3,g.a=!0,g.b=!1,e=!0),e}window.addEventListener("resize",function(){let t=S(window.innerWidth);t&&b(u,1,!1,!0)});var _=o("dpkVs");let j=(0,_.default).getData("shopping list");b(j,1,!0)}();
//# sourceMappingURL=shopping-list.7e6073d9.js.map
