function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=a.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},a.parcelRequired7c6=o),o.register("kyEFX",function(e,a){t(e.exports,"register",function(){return n},function(t){return n=t}),t(e.exports,"resolve",function(){return i},function(t){return i=t});var n,i,o={};n=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)o[e[a]]=t[e[a]]},i=function(t){var e=o[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),o("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.fb27001f.js","8OQ7p":"icons.e2aa45a4.svg","jY4vY":"amazon.96f71be0.svg","85PR4":"applebook.26cc4082.svg","l9qhm":"bookshop.a185b304.svg","f4GUK":"Rectangle 13.caeeec1d.jpg","303qX":"Rectangle 14.0df15fb8.jpg","5pieV":"Rectangle 15.0c88794b.jpg","9jzF7":"Rectangle 16.01a675d6.jpg","2f7PW":"Rectangle 17.166ae87c.jpg","5NLEs":"Rectangle 18.ce90f54e.jpg","iC0Od":"Rectangle 19.610f1ba2.jpg","ax8Q0":"shopping-list.88199d37.js"}')),o("cqUhq"),o("1GFL3"),o("7ECWb");var r={};r=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var s={};s=new URL(o("kyEFX").resolve("jY4vY"),import.meta.url).toString();var l={};l=new URL(o("kyEFX").resolve("85PR4"),import.meta.url).toString();var c={};c=new URL(o("kyEFX").resolve("l9qhm"),import.meta.url).toString();var g={};g=new URL(o("kyEFX").resolve("f4GUK"),import.meta.url).toString();var u={};u=new URL(o("kyEFX").resolve("303qX"),import.meta.url).toString();var h={};h=new URL(o("kyEFX").resolve("5pieV"),import.meta.url).toString();var d={};d=new URL(o("kyEFX").resolve("9jzF7"),import.meta.url).toString();var p={};p=new URL(o("kyEFX").resolve("2f7PW"),import.meta.url).toString();var f={};f=new URL(o("kyEFX").resolve("5NLEs"),import.meta.url).toString();var m={};m=new URL(o("kyEFX").resolve("iC0Od"),import.meta.url).toString();const v={list:document.querySelector(".shopping-list-list"),emptyPage:document.querySelector(".empty-sh-page"),SHOPPING_LIST_LS:"shopping list"};function b(t=[]){v.list.innerHTML="",t.length?v.list.insertAdjacentHTML("beforeend",(v.emptyPage.classList.add("visually-hidden"),t.map(({id:t,cover:a,alt:n,title:i,polygraphy:o,description:g,author:u})=>{let h=`<svg class="book-logo">
        <use href="${e(r)}#book"></use>
      </svg>`;return a&&(h=`<img class="shopping-list-img"
                    src="${a}" alt="${n}" 
                    loading="lazy"/>`),`<li class="shopping-list-item">
            <div class="sh-wrapper">
                ${h}
            </div>
            <div class="shopping-list-info">
                <button type="button" id = "${t}"class="trash-btn">
                    <svg class="trash-logo">
                    <use href="${e(r)}#trash"></use>
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
                        <use href="${e(s)}#image0_54_2037"></use>
                      </svg>
                    </li>
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${e(l)}#image0_54_2038"></use>
                      </svg>
                    </li>
                    <li class="item-to-buy">
                      <svg class="shop-logo">
                        <use href="${e(c)}#image0_54_2039"></use>
                      </svg>
                    </li>
                  </ul>
                </div>
            </div>
          </li>`}).join(""))):v.emptyPage.classList.contains("visually-hidden")&&v.emptyPage.classList.remove("visually-hidden")}v.list.addEventListener("click",function(t){t.preventDefault();let e=t.target.closest(".trash-btn");try{let t=JSON.parse(localStorage.getItem(v.SHOPPING_LIST_LS));localStorage.removeItem(v.SHOPPING_LIST_LS);let a=t.filter(t=>t.id!==e.id);if(localStorage.setItem(v.SHOPPING_LIST_LS,JSON.stringify(a)),!a.length){b(a);return}b(a)}catch(t){console.log("ERROR!",t)}});let w=[],y=3;const S={paginationContainer:document.querySelector(".pagination-container")};S.paginationContainer.addEventListener("click",function(t){t.preventDefault();let e=t.target.closest(".js-pagination-pages"),a=t.target.closest(".js-pagination-button");if(e){let t=e.dataset.pagination;"..."===t?console.log('case "..."'):function(t){let e=E();j(e),_(Number(t)),b(A(Number(t)))}(t)}if(a){let t=a.dataset.pagination;switch(t){case"start":!function(){H(w,1);let t=E();j(t),_(1),b(A(1))}();break;case"backward":!function(){let t=E();if(1===t)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);t<=3?(j(t),H(w,1)):(j(t),H(w,e-1)),_(t-1),b(A(t-1))}();break;case"forward":!function(){let t=E();if(t===k.length)return;let e=Number(document.querySelector(".js-pagination-pages").dataset.pagination);j(t),H(w,e+1),_(t+1),b(A(t+1))}();break;case"end":!function(){H(w,k.length);let t=E();j(t),_(k.length),b(A(k.length))}();break;default:return}}});let k=[];function R(t){k=[];for(let e=0;e<Math.ceil(t.length/y);e+=1)k.push(e+1)}function H(t,a=1,n=!1,i=!1){if("undefined"===t||0===t.length)return;if(n&&(w=[...t],y=window.innerWidth<768?4:3,R(w),b(A(1))),i){!function(t){R(w=[...t]);let e=E();if(w.length<=y){S.paginationContainer.innerHTML="",b(A(1));return}if(e>k.length){H(w,k.length),_(k.length),b(A(k.length));return}if(e<k.length&&1===e){H(w,1),_(1),b(A(1));return}if(A(e).length<=y){let t=Number(document.querySelector(".js-pagination-pages").dataset.pagination);H(w,t),_(e),b(A(e))}}(t);return}if(t.length<=y)return;let o=window.innerWidth>768?3:2,s=!0;a+o-1>=k.length&&(s=!1),S.paginationContainer.innerHTML=function(t,a,n=!0){return`<div class="left-arrows-wrapper">
        <button class="js-pagination-button start" type="button" data-pagination="start">
          <svg class="pagination-icon-start" width="24" height="24">
            <use href="${e(r)}#icon-arrow-ff"></use>
          </svg>
        </button>
        <button class="js-pagination-button backward" type="button" data-pagination="backward">
          <svg class="pagination-icon-backward" width="24" height="24">
            <use href="${e(r)}#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <ul class="js-pagination">
        ${n?L(t,a)+'<div class="js-three-point" data-pagination="...">...</div>':L(t,a)}
      </ul>

      <div class="right-arrows-wrapper">
        <button class="js-pagination-button forward" type="button" data-pagination="forward">
          <svg class="pagination-icon-forward" width="24" height="24">
            <use href="${e(r)}#icon-arrow"></use>
          </svg>
        </button>
        <button class="js-pagination-button end" type="button" data-pagination="end">
          <svg class="pagination-icon-end" width="24" height="24">
            <use href="${e(r)}#icon-arrow-ff"></use>
          </svg>
        </button>
      </div>`}(a,o,s),S.pagination=document.querySelector(".js-pagination-list"),S.allPaginationPages=document.querySelectorAll(".js-pagination-pages"),document.querySelector(".shopping-list-list").addEventListener("click",P),n&&_(1)}function P(t){t.preventDefault(),console.log(t.target.closest(".shopping-list-item"));let e=t.target.closest(".shopping-list-item");if(e){let t=[...w];t.splice(-1),console.log(" if (click)"),console.log(t),H(t,1,!1,!0)}}function E(){let t=1;return S.allPaginationPages.forEach(e=>{e.classList.contains("js-active-pagination")&&(t=e.dataset.pagination)}),Number(t)}function _(t=1){S.allPaginationPages.forEach(e=>{let a=Number(e.dataset.pagination);a===t&&e.classList.add("js-active-pagination")})}function j(t=1){S.allPaginationPages.forEach(e=>{let a=Number(e.dataset.pagination);a===t&&e.classList.remove("js-active-pagination")})}function A(t){let e=[],a=y*(t-1);for(let t=0;t<y;t+=1)a+t<w.length&&e.push(a+t);let n=[];return e.forEach(t=>n.push(w[t])),n}function L(t=1,e=2){let a="",n=t,i=k.length;t+e-1>=i&&(n=i-e+1),e>i&&(n=1);for(let o=n;o<t+e;o+=1){if(o>i){console.log("return");break}a+=`<li class="js-pagination-pages" data-pagination="${o}">${o}</li>`}return a}o("0O6mE"),o("3Xhi6"),function(){let t=[{cover:e(g),alt:"book 13",title:"I will find you",polygraphy:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",author:"Harlan Coben"},{cover:e(u),alt:"book 13",title:"Wonder",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:e(h),alt:"book 13",title:"DAISY JONES & THE SIX",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:e(d),alt:"book 13",title:"Hello Beautiful",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:e(p),alt:"book 13",title:"SAVED",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:e(f),alt:"book 13",title:"STORM WATCH",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:e(m),alt:"book 13",title:"TOMORROW, AND TOMORROW, AND TOMORROW",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:e(g),alt:"book 13",title:"I will find you",polygraphy:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",author:"Harlan Coben"},{cover:e(u),alt:"book 13",title:"Wonder",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"},{cover:e(d),alt:"book 13",title:"Hello Beautiful",polygraphy:"Hardcover nonfiction",description:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can’t get past Auggie’s extraordinary face. ",author:"R.J. Palacio"}];H(t,1,!0)}();
//# sourceMappingURL=shopping-list.fb27001f.js.map
