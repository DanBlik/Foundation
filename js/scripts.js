"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==(void 0===t?"undefined":_typeof(t))&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){n.r(t),$(window).load(function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)}),$(document).ready(function(){var e=document.querySelectorAll(".sign-in"),n=document.querySelector("#trial"),o=document.querySelector("#visitors"),i=document.querySelector(".account__modal"),t=document.querySelector(".close-account"),c=document.querySelector(".modal__form-account"),r=document.querySelector(".inputAccountLogin"),s=document.querySelector(".inputAccountPassword"),l=document.querySelector(".modal__form-account .invalid-feedback"),a=[{login:"Admin",password:123},{login:"User",password:123}];e.forEach(function(e){e.addEventListener("click",function(){i.classList.toggle("modal-close")})}),c.addEventListener("submit",function(e){e.preventDefault();var t=a.find(function(e){return e.login==r.value});void 0!==t?r.value==t.login&&s.value==t.password?(i.classList.toggle("modal-close"),n.style.display="flex",o.style.display="block"):l.textContent="Incorrect password.":l.textContent="This user does not exist."}),t.addEventListener("click",function(){return i.classList.toggle("modal-close")})}).ready(function(){var e=document.querySelector(".burger-menu"),n=document.querySelector(".header__menu"),t=document.querySelector(".popup-mini"),o=document.querySelectorAll(".popup-mini")[1],i=document.querySelector(".close-burger"),c=document.querySelector(".menu-link__submenu"),r=document.querySelectorAll(".menu-link__submenu")[1],s=document.querySelector("body");function l(e,t){e.classList.toggle(t),n.classList.contains("header__menu_activate")?s.style.overflow="hidden":s.style.overflow="auto"}c.addEventListener("click",function(){return l(t,"popup-mini-toggle")},!1),r.addEventListener("click",function(){return l(o,"popup-mini-toggle")},!1),i.addEventListener("click",function(){return l(n,"header__menu_activate")},!1),e.addEventListener("click",function(){return l(n,"header__menu_activate")},!1)}).ready(function(){$(".reviews-slider").slick({slidesToShow:1,slidesToScroll:1,dots:!0,focusOnSelect:!0,arrow:!1})}).ready(function(){var o=document.querySelector(".options-vacancies");o.insertAdjacentHTML("afterbegin",'<img class="loader" src="./img/loader.svg" alt=""><div class="preloaderTitle">Loading...</div>'),setTimeout(function(){fetch("https://danblik.github.io/test-fronted.github.io//test-front.json").then(function(e){return e.json()}).then(function(e){o.innerHTML="";for(var t=0;t<e.vacancies.length;t++){var n='<div class="options__vacancy vacancy'+(t+1)+' wow fadeIn" data-wow-delay="0.'+t+'s">\n          <div class="vacancy-wrap">\n              <div class="vacancy-name">'+e.vacancies[t].title+'</div>\n              <div class="vacancy-description">'+e.vacancies[t].place+" / "+e.vacancies[t].type+'</div>\n          </div>\n           <div class="vacancy-arrow">\n            <svg class="vacancy-svg" style="width: 8px; height: 12px"><use xlink:href="#arrow" class="vacancy-arrow-svg"/></svg>\n          </div>\n        </div>';o.insertAdjacentHTML("beforeend",n)}return e}).then(function(e){for(var l=e.vacancies,t=function(e){var t=document.querySelectorAll(".options__vacancy")[e],n=document.querySelectorAll(".vacancy-svg");t.insertAdjacentHTML("afterend",'<div class="vacancyDesription _hide"></div>'),l[e].responsibilites.length<=0&&l[e].description.length<=0&&t.classList.add("withoutContent");var o=document.querySelectorAll(".vacancyDesription")[e];if(0<l[e].description.length){var i='<div>\n          <div class="job-title">Job Description</div>\n          <p>'+l[e].description+"</p>\n          </div>";o.insertAdjacentHTML("beforeend",i)}if(0<l[e].responsibilites.length){var c='<div>\n          <div class="job-title">Responsibilities</div>\n          <ul>'+l[e].responsibilites.map(function(e){return"<li>"+e+"</li>"}).join("")+"</ul>\n          </div>";o.insertAdjacentHTML("beforeend",c)}if(0<l[e].responsibilites.length||0<l[e].description.length){o.insertAdjacentHTML("beforeend",'<div class="connect">Connect</div>'),o.insertAdjacentHTML("afterbegin",'<div class="options__modal modal-close">\n          <div class="modal-window modal-window-connect">\n              <img class="close" src="./img/close.svg"></img>\n              <div class="modal__img"><img src="./img/modal1.png"></div>\n              <div class="modal__form">\n                  <form class="modal__form-form" method="POST" enctype="multipart/form-data">\n                      <div class="form__title">Connect with us</div>\n                      <input class="emailInput" name="email" type="text" placeholder="Enter your email">\n                      <button type="submit" class="btn btn__blue">Submit</button>\n                  </form>\n              </div> \n          </div> \n        </div>')}var r=document.querySelectorAll(".options__vacancy")[e];r.classList.contains("withoutContent")||r.addEventListener("click",function(){if(n[e].classList.toggle("rotateArrow"),o.classList.contains("_hide"))return o.classList.toggle("_hide"),void(o.style.height=s+"px");o.style.height="0px",o.classList.toggle("_hide")});var s=o.offsetHeight;o.style.height="0px"},n=0;n<l.length;n++)t(n);for(var r=document.querySelectorAll(".connect"),o=function(n){var e=document.querySelectorAll(".options__modal")[n],t=document.querySelectorAll(".close")[n],o=document.querySelectorAll(".modal__form-form")[n],i=document.querySelectorAll(".modal__img")[n];function c(){e.classList.contains("modal-close")?(e.classList.remove("animateOut"),e.classList.toggle("modal-close"),e.classList.add("animateIn")):(e.classList.remove("animateIn"),e.classList.add("animateOut"),setTimeout(function(){return e.classList.toggle("modal-close")},370))}r[n].addEventListener("click",c),t.addEventListener("click",c),o.addEventListener("submit",function(e){e.preventDefault(),new FormData(document.querySelector(".modal__form-form"));var t=new XMLHttpRequest({mozAnon:!0,mozSystem:!0});t.open("POST","http://localhost:3000/names",!0),t.onreadystatechange=function(){4==this.readyState&&console.log(this.responseText)},t.send("123"),i.innerHTML='<img src="./img/modal2.png">',document.querySelectorAll(".modal-window-connect")[n].insertAdjacentHTML("beforeend",'<div><div class="form__title">Just wait</div><div>We will message you soon!</div></div>'),o.style.display="none"})},i=0;i<r.length;i++)o(i)})},3e3)}),(new WOW).init()}]);
//# sourceMappingURL=scripts.js.map
