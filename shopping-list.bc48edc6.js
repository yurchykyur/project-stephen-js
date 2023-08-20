!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequired7c6=o),o.register("iE7OH",function(e,n){t(e.exports,"register",function(){return a},function(t){return a=t}),t(e.exports,"resolve",function(){return i},function(t){return i=t});var a,i,o={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),o.register("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return a},function(t){return a=t});var a,i={};a=function(t){var e=i[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[t]=e),e}}),o("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.bc48edc6.js","410VS":"icons.788c0c72.svg","a9pKO":"index.b7da6e35.js","4lVHg":"index.7652b91c.js"}')),o("15Wwn"),o("8BR1R"),o("5nuWH"),o("c4bOE"),o("bWgPh"),o("9R1so");var s={};s=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("410VS");var r=o("dpkVs");let l={list:document.querySelector(".shopping-list-list"),emptyPage:document.querySelector(".empty-sh-page"),SHOPPING_LIST_LS:"shopping list"};function u(t=[]){if(l.list.innerHTML="",t.length){let n=t.map(t=>({_id:t.book.id,book_image:t.book.img,title:t.book.title,list_name:t.book.bookName,description:t.book.description,author:t.book.author,buy_links:t.book.shops}));l.emptyPage.classList.add("visually-hidden"),l.list.insertAdjacentHTML("beforeend",n.map(({_id:t,book_image:n,title:a,list_name:i,description:o,author:r,buy_links:l})=>{let u=`<svg class="book-logo">
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
          </li>`}).join(""))}else l.emptyPage.classList.contains("visually-hidden")&&l.emptyPage.classList.remove("visually-hidden")}l.list.addEventListener("click",function(t){let e=t.target.closest(".trash-btn");if(e)try{let t=(0,r.default).getData(l.SHOPPING_LIST_LS);localStorage.removeItem(l.SHOPPING_LIST_LS);let n=t.filter(t=>t.id!==e.id);if((0,r.default).saveData(l.SHOPPING_LIST_LS,n),!n.length){v(n,1,!1,!0);return}v(n,1,!1,!0)}catch(t){console.log("ERROR!",t)}});let c=[],p=0,g=0,d={a:!0,b:!0},f={paginationContainer:document.querySelector(".pagination-container")};f.paginationContainer.addEventListener("click",function(t){t.preventDefault();let e=t.target.closest(".js-pagination-pages"),n=t.target.closest(".js-pagination-button");if(e){let t=e.dataset.pagination;"..."===t?console.log('case "..."'):function(t){let e=m();k(e),w(Number(t)),u(y(Number(t)))}(t)}if(n){let t=n.dataset.pagination;switch(t){case"start":!function(){v(c,1);let t=m();k(t),w(1),u(y(1))}();break;case"backward":!function(){let t=m();if(1===t)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);t<=3?(k(t),v(c,1)):(k(t),v(c,e-1)),w(t-1),u(y(t-1))}();break;case"forward":!function(){let t=m();if(t===g)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);k(t),v(c,e+1),w(t+1),u(y(t+1))}();break;case"end":!function(){v(c,g);let t=m();k(t),w(g),u(y(g))}();break;default:return}}});let h=0;function b(t){g=Math.ceil(t.length/p)}function v(t,n=1,a=!1,i=!1){if("undefined"===t||0===t.length){c=[],u();return}if(a&&(c=[...t],S(window.innerWidth),b(c),u(y(1))),i){!function(t){b(c=[...t]);let e=1;if(g>1&&(e=m()),c.length<=p){f.paginationContainer.innerHTML="",u(y(1));return}if(e>g){v(c,g),w(g),u(y(g));return}if(e<g&&1===e){v(c,1),w(1),u(y(1));return}if(y(e).length<=p){let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);v(c,t),w(e),u(y(e))}}(t);return}if(t.length<=p)return;let o=!0;n+h-1>=g&&(o=!1),f.paginationContainer.innerHTML=function(t,n,a=!0){return`<div class="left-arrows-wrapper">
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
        ${a?_(t,n)+'<div class="js-three-point" data-pagination="...">...</div>':_(t,n)}
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
      </div>`}(n,h,o),f.pagination=document.querySelector(".js-pagination-list"),f.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),a&&w(1)}function m(){let t=1;return f.allPaginationPages.forEach(e=>{e.classList.contains("js-active-pagination")&&(t=e.dataset.pagination)}),Number(t)}function w(t=1){f.allPaginationPages.forEach(e=>{let n=Number(e.dataset.pagination);n===t&&e.classList.add("js-active-pagination")})}function k(t=1){f.allPaginationPages.forEach(e=>{let n=Number(e.dataset.pagination);n===t&&e.classList.remove("js-active-pagination")})}function y(t){let e=[],n=p*(t-1);for(let t=0;t<p;t+=1)n+t<c.length&&e.push(n+t);let a=[];return e.forEach(t=>a.push(c[t])),a}function _(t=1,e=2){let n="",a=t;t+e-1>=g&&(a=g-e+1),e>g&&(a=1);for(let i=a;i<t+e;i+=1)i<=g&&(n+=`<li class="js-pagination-pages" data-pagination="${i}">${i}</li>`);return n}function S(t){let e=!1;return t<768&&d.a&&(p=4,h=2,d.a=!1,d.b=!0,e=!0),t>768&&d.b&&(p=3,h=3,d.a=!0,d.b=!1,e=!0),e}window.addEventListener("resize",function(){let t=S(window.innerWidth);t&&v(c,1,!1,!0)});var r=o("dpkVs");let j=(0,r.default).getData("shopping list");v(j,1,!0)}();
//# sourceMappingURL=shopping-list.bc48edc6.js.map
