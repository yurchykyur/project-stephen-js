!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=a.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},a.parcelRequired7c6=o),o.register("iE7OH",function(t,a){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,o={};n=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)o[t[a]]=e[t[a]]},i=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o.register("aNJCr",function(t,a){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,i={};n=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),o("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.01f197ff.js","410VS":"icons.e2aa45a4.svg","8yU71":"amazon.96f71be0.svg","fcfxt":"applebook.26cc4082.svg","b06m5":"bookshop.a185b304.svg","3j9We":"Rectangle 13.caeeec1d.jpg","138av":"Rectangle 14.0df15fb8.jpg","cXHBj":"Rectangle 15.0c88794b.jpg","936gk":"Rectangle 16.01a675d6.jpg","d7jWk":"Rectangle 17.166ae87c.jpg","77d1i":"Rectangle 18.ce90f54e.jpg","5X8Oz":"Rectangle 19.610f1ba2.jpg","dID6g":"shopping-list.7f811b6e.js"}')),o("2vprg"),o("cBdEO"),o("4ARuI");var r={};r=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("410VS");var s={};s=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("8yU71");var l={};l=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("fcfxt");var c={};c=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("b06m5");var g={};g=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("3j9We");var u={};u=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("138av");var d={};d=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("cXHBj");var h={};h=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("936gk");var p={};p=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("d7jWk");var f={};f=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("77d1i");var v={};v=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("5X8Oz");let b={list:document.querySelector(".shopping-list-list"),emptyPage:document.querySelector(".empty-sh-page"),SHOPPING_LIST_LS:"shopping list"};function m(e=[]){b.list.innerHTML="",e.length?b.list.insertAdjacentHTML("beforeend",(b.emptyPage.classList.add("visually-hidden"),e.map(({id:e,cover:a,alt:n,title:i,polygraphy:o,description:g,author:u})=>{let d=`<svg class="book-logo">
        <use href="${t(r)}#book"></use>
      </svg>`;return a&&(d=`<img class="shopping-list-img"
                    src="${a}" alt="${n}" 
                    loading="lazy"/>`),`<li class="shopping-list-item">
            <div class="sh-wrapper">
                ${d}
            </div>
            <div class="shopping-list-info">
                <button type="button" id = "${e}"class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${t(r)}#trash"></use>
                    </svg>
                </button>
              <h2 class="shopping-book-title">${i}</h2>
              <p class="shopping-book-polygraphy">${o}</p>
              <div class="sh-desc-wrapper">
               <p class="shopping-book-desc">
               ${g}
              </p>
            </div>
              <div class="sh-buy-wrapper" >
                <p class="shopping-book-author">${u}</p>
                  <ul class="links-to-buy">
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${t(s)}#image0_54_2037"></use>
                      </svg>
                    </li>
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${t(l)}#image0_54_2038"></use>
                      </svg>
                    </li>
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${t(c)}#image0_54_2039"></use>
                      </svg>
                    </li>
                  </ul>
                </div>
            </div>
          </li>`}).join(""))):b.emptyPage.classList.contains("visually-hidden")&&b.emptyPage.classList.remove("visually-hidden")}b.list.addEventListener("click",function(e){e.preventDefault();let t=e.target.closest(".trash-btn");try{let e=JSON.parse(localStorage.getItem(b.SHOPPING_LIST_LS));localStorage.removeItem(b.SHOPPING_LIST_LS);let a=e.filter(e=>e.id!==t.id);if(localStorage.setItem(b.SHOPPING_LIST_LS,JSON.stringify(a)),!a.length){m(a);return}m(a)}catch(e){console.log("ERROR!",e)}});let w=[],y=3,S={paginationContainer:document.querySelector(".pagination-container")};S.paginationContainer.addEventListener("click",function(e){e.preventDefault();let t=e.target.closest(".js-pagination-pages"),a=e.target.closest(".js-pagination-button");if(t){let e=t.dataset.pagination;"..."===e?console.log('case "..."'):function(e){let t=P();E(t),_(Number(e)),m(O(Number(e)))}(e)}if(a){let e=a.dataset.pagination;switch(e){case"start":!function(){j(w,1);let e=P();E(e),_(1),m(O(1))}();break;case"backward":!function(){let e=P();if(1===e)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);e<=3?(E(e),j(w,1)):(E(e),j(w,t-1)),_(e-1),m(O(e-1))}();break;case"forward":!function(){let e=P();if(e===H.length)return;let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);E(e),j(w,t+1),_(e+1),m(O(e+1))}();break;case"end":!function(){j(w,H.length);let e=P();E(e),_(H.length),m(O(H.length))}();break;default:return}}});let H=[];function R(e){H=[];for(let t=0;t<Math.ceil(e.length/y);t+=1)H.push(t+1)}function j(e,a=1,n=!1,i=!1){if("undefined"===e||0===e.length)return;if(n&&(w=[...e],y=window.innerWidth<768?4:3,R(w),m(O(1))),i){!function(e){R(w=[...e]);let t=P();if(w.length<=y){S.paginationContainer.innerHTML="",m(O(1));return}if(t>H.length){j(w,H.length),_(H.length),m(O(H.length));return}if(t<H.length&&1===t){j(w,1),_(1),m(O(1));return}if(O(t).length<=y){let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);j(w,e),_(t),m(O(t))}}(e);return}if(e.length<=y)return;let o=window.innerWidth>768?3:2,s=!0;a+o-1>=H.length&&(s=!1),S.paginationContainer.innerHTML=function(e,a,n=!0){return`<div class="left-arrows-wrapper">
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
        ${n?A(e,a)+'<div class="js-three-point" data-pagination="...">...</div>':A(e,a)}
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
      </div>`}(a,o,s),S.pagination=document.querySelector(".js-pagination-list"),S.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),document.querySelector(".shopping-list-list").addEventListener("click",k),n&&_(1)}function k(e){e.preventDefault(),console.log(e.target.closest(".shopping-list-item"));let t=e.target.closest(".shopping-list-item");if(t){let e=[...w];e.splice(-1),console.log(" if (click)"),console.log(e),j(e,1,!1,!0)}}function P(){let e=1;return S.allPaginationPages.forEach(t=>{t.classList.contains("js-active-pagination")&&(e=t.dataset.pagination)}),Number(e)}function _(e=1){S.allPaginationPages.forEach(t=>{let a=Number(t.dataset.pagination);a===e&&t.classList.add("js-active-pagination")})}function E(e=1){S.allPaginationPages.forEach(t=>{let a=Number(t.dataset.pagination);a===e&&t.classList.remove("js-active-pagination")})}function O(e){let t=[],a=y*(e-1);for(let e=0;e<y;e+=1)a+e<w.length&&t.push(a+e);let n=[];return t.forEach(e=>n.push(w[e])),n}function A(e=1,t=2){let a="",n=e,i=H.length;e+t-1>=i&&(n=i-t+1),t>i&&(n=1);for(let o=n;o<e+t;o+=1){if(o>i){console.log("return");break}a+=`<li class="js-pagination-pages" data-pagination="${o}">${o}</li>`}return a}o("3Z8r8"),o("c4bOE"),function(){let e=[{cover:t(g),alt:"book 13",title:"I will find you",polygraphy:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",author:"Harlan Coben"},{cover:t(u),alt:"book 13",title:"Wonder",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(d),alt:"book 13",title:"DAISY JONES & THE SIX",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(h),alt:"book 13",title:"Hello Beautiful",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(p),alt:"book 13",title:"SAVED",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(f),alt:"book 13",title:"STORM WATCH",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(v),alt:"book 13",title:"TOMORROW, AND TOMORROW, AND TOMORROW",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(g),alt:"book 13",title:"I will find you",polygraphy:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",author:"Harlan Coben"},{cover:t(u),alt:"book 13",title:"Wonder",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:t(h),alt:"book 13",title:"Hello Beautiful",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"}];j(e,1,!0)}()}();
//# sourceMappingURL=shopping-list.01f197ff.js.map