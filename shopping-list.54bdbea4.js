const t=document.querySelector(".gotop-wrapper");document.querySelector(".gototop"),window.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop,i=document.documentElement.scrollHeight,n=window.innerHeight;e+n>=i-140?t.classList.add("show"):t.classList.remove("show")}),(()=>{let t=document.querySelectorAll("[data-modal-open]"),e=document.querySelectorAll("[data-modal-close]"),i=document.querySelectorAll("[data-modal]");t.forEach(t=>{t.addEventListener("click",()=>{let e=t.getAttribute("data-modal-open"),i=document.querySelector(`[data-modal="${e}"]`);i.classList.add("is-open"),"team-modal"!==e&&document.body.classList.add("modal-open")})}),e.forEach(t=>{t.addEventListener("click",()=>{let e=t.closest("[data-modal]");e.classList.remove("is-open"),document.body.classList.remove("modal-open")})}),document.addEventListener("keydown",t=>{"Escape"===t.key&&i.forEach(t=>{t.classList.contains("is-open")&&(t.classList.remove("is-open"),document.body.classList.remove("modal-open"))})}),i.forEach(t=>{t.addEventListener("click",e=>{e.target===t&&(t.classList.remove("is-open"),document.body.classList.remove("modal-open"))})})})();const e=[{title:"oject 1",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 2",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 3",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 4",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 5",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 6",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 7",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 8",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 9",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 10",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 11",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 12",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 13",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 14",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 15",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 16",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 17",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 18",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 19",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 20",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 21",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."},{title:"oject 22",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus incidunt laudantium id maxime."}];console.log(e);const i={paginationContainer:document.querySelector(".pagination-container")},n=[];function o(){let t=1;return i.allPaginationPages.forEach(e=>{e.classList.contains("active")&&(t=e.dataset.pagination)}),Number(t)}function a(t=1){console.log("addActivePage",i.allPaginationPages),i.allPaginationPages.forEach(e=>{let i=Number(e.dataset.pagination);i===t&&e.classList.add("active")})}function c(t=1){i.allPaginationPages.forEach(e=>{let i=Number(e.dataset.pagination);i===t&&e.classList.remove("active")})}function s(t,e=1){let o=window.innerWidth>768?3:2;console.log(o);let a=!0;e+o-1>=n.length&&(a=!1),i.paginationContainer.innerHTML=function(t,e,i=!0){return`<button
        class="js-pagination-button"
        type="button"
        data-pagination="start"
      >
        On start
      </button>
      <button
        class="js-pagination-button"
        type="button"
        data-pagination="backward"
      >
        move backward
      </button>
      <ul class="js-pagination">
        ${i?l(t,e)+'<li class="js-pagination-pages" data-pagination="...">...</li>':l(t,e)}
      </ul>
      <button
        class="js-pagination-button"
        type="button"
        data-pagination="forward"
      >
        move forward
      </button>
      <button class="js-pagination-button" type="button" data-pagination="end">
        to the end
        <div class="test"></div>
      </button>`}(e,o,a),i.content=document.querySelector(".js-content-container"),i.pagination=document.querySelector(".js-pagination-list"),i.allPaginationPages=document.querySelectorAll(".js-pagination-pages")}function l(t=1,e=2){let i="",o=t,a=n.length;t+e-1>=a&&(o=a-e+1),e>a&&(o=1);for(let n=o;n<t+e;n+=1){if(n>a){console.log("return");break}i+=`<li class="js-pagination-pages" data-pagination="${n}">${n}</li>`}return i}!function(t){for(let e=0;e<Math.ceil(t.length/3);e+=1)n.push(e+1)}(e),console.log(n),i.paginationContainer.addEventListener("click",function(t){t.preventDefault();let i=t.target.closest(".js-pagination-pages"),l=t.target.closest(".js-pagination-button");if(i){let t=i.dataset.pagination;if(console.log(typeof t),console.log(t),"..."===t)console.log('case "..."');else{(function(t){console.log("moveToPage()");let e=o();console.log(e),c(e),a(Number(t))})(t);return}}if(l){let t=l.dataset.pagination;switch(console.log(typeof t),console.log(t),t){case"start":(function(){console.log("moveToStart()"),s(e,1);let t=o();c(t),a(1)})();break;case"backward":(function(){console.log("moveToBackward()");let t=o();if(1===t)return;let i=Number(document.querySelector(".js-pagination-pages").dataset.pagination),n=i-1;if(c(t),console.log(n,"initialPage"),s(e,n),a(t-1),t<=3)c(t),console.log(1,"initialPage"),s(e,1),a(t-1);else{let n=i-1;c(t),console.log(n,"initialPage"),s(e,n),a(t-1)}})();break;case"forward":(function(){console.log("moveToforward()");let t=o();if(t===n.length)return;let i=Number(document.querySelector(".js-pagination-pages").dataset.pagination),l=i+1;c(t),console.log(l,"initialPage"),s(e,l),a(t+1)})();break;case"end":(function(){console.log("moveToEnd()"),s(e,n.length);let t=o();c(t),a(n.length)})();break;default:return}}}),console.log(window.innerWidth),s(e,1),a(1);
//# sourceMappingURL=shopping-list.54bdbea4.js.map
