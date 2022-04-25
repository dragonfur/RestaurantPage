(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),d=new URL(t(647),t.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap);"]);var m=s()(d);l.push([e.id,"/* styles.css */\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\nhtml {\n    overflow-x: scroll;\n}\n\n:root {\n    --primaryColor: #f4f4f4;\n    --secondaryColor: #8EC6C5;\n    --secondaryColorbutDarker: #236b6a3b;\n    --tertiaryColor: #6983AA;\n    --accentColor: #8566AA;\n    --backgroundColor: rgba(19, 182, 204, 0.8);\n    --titleFontSize: 2em;\n    --maxwidthFactor: max(50vw,max(750px, 450px));\n}\n\nbody {\n    background-image: url("+m+");\n    margin: 0;\n    padding: 0;\n    font-family: 'Heebo', sans-serif;\n    box-sizing: border-box;\n}\n\nul.header {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    background-color: var(--secondaryColor);\n    height: 7.5vh;\n    align-items: center;\n    margin-bottom: 0;\n    \n}\n\nul>* {\n    transition: margin-bottom .2s ease-in-out;\n}\n\nul>*:hover {\n    margin-bottom: 0.5em;\n}\n\n.tab {\n    font-size: var(--titleFontSize);\n    padding: 0 1rem;\n}\n\n.tab.active {\n    border-bottom: solid .2em var(--accentColor);\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    min-height: 86.5vh;\n}\n\n.home {\n    max-width: var(--maxwidthFactor);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--backgroundColor);\n    font-size: 1.5em;\n}\n\n.home>* {\n    animation: fadeIn ease 1s;\n}\n\n.home__title {\n    font-family: 'Ms Madi', cursive;\n    font-size: min(10vw, 5em);\n    margin: 0;\n    padding: .3em 0;\n    text-align: center;\n}\n\n.home__tagline {\n    font-size: 2em;\n    font-weight: bold;\n}\n\n.home__desc {\n    max-width: 80%;\n}\n\n.menu {\n    background-color: var(--backgroundColor);\n    width: var(--maxwidthFactor);\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.menu>* {\n    animation: fadeIn ease 1s;\n}\n\n.menu>*:not(:first-child) {\n    background-color: rgba(105, 131, 170, 0.8);\n}\n\n.menu>*>*>img{\n    width: clamp(100px, 525px, 50vw);\n}\n\n.menuItemOne,\n.menuItemTwo,\n.menuItemThree {\n    display: flex;\n    margin-bottom: .5rem;\n    gap: 1em;\n    padding-left: .5rem;\n    padding-right: .5rem;\n}\n\n.menuItemOne,\n.menuItemTwo {\n    border-bottom: solid 2px black;\n}\n\n.menuItemOne {\n    padding: 0.5rem 0;\n    padding-left: .5rem;\n}\n\n.menuItemTwo {\n    padding-bottom: .5rem;\n}\n\n.menu>*>*>*>h3 {\n    font-size: 1.5em;\n}\n\n.menu>*>*>*>p {\n    font-size: 1.269em;\n    max-width: 340px;\n}\n\n.menu__title {\n    font-size: calc(var(--titleFontSize) + .5em);\n}\n\n.contact {\n    background-color: var(--backgroundColor);\n    width: var(--maxwidthFactor);\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.contact>* {\n    animation: fadeIn ease 1s;\n}\n\n.contact__title {\n    font-size: calc(var(--titleFontSize) + .5em);\n}\n\n.contactHolder {\n    width: 100%;\n    max-width: var(--maxwidthFactor);\n    text-align: center;\n}\n\n.contactHolder>* {\n    margin-bottom: .5rem;\n    font-size: 1.5em;\n    font-weight: 500;\n    max-width: inherit;\n}\n\n.numberHolder,\n.restaurantPlace {\n    display: flex;\n    align-items: center;\n    margin-left: 6.5vw;\n}\n\nimg.destImg {\n    width: clamp(50%, 700px, 50vw);\n}\n\n.footer {\n    background-color: var(--secondaryColor);\n    font-size: 1.5em;\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 700;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,m="".concat(d," ").concat(l);r[d]=l+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=a(p,o);o.byIndex=c,n.splice(c,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=o(e,a),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},647:(e,n,t)=>{e.exports=t.p+"a2eba57f9e311b1f85c7.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{const e=(()=>{const e=document.createElement("div");e.setAttribute("class","home");const n=document.createElement("h1");n.textContent="Chez Moi",n.setAttribute("class","home__title");const t=document.createElement("div");t.textContent="Your happy place!",t.setAttribute("class","home__tagline");const o=document.createElement("p");return o.innerHTML="All of our menu items are inspired by Moroccan cuisine and have been created by our head chef, Adam, after studying authentic Moroccan cuisine in Morocco. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from.\n    <br>\n    <br>\n    Come dine with us & experience an authentic Chez Moi meal in an intimate dining space. We look forward to serving you!",o.setAttribute("class","home__desc"),e.appendChild(n),e.appendChild(t),e.appendChild(o),{homeDiv:e}})(),n=(()=>{const e=document.createElement("div");e.classList.add("headerContainer");const n=document.createElement("ul");return n.setAttribute("class","header"),["Home","Menu","Contact"].forEach((e=>{const t=document.createElement("li"),o=document.createElement("div");o.textContent=e,o.setAttribute("class",e),o.classList.add("tab"),"Home"===e&&o.setAttribute("class","Home active tab"),t.appendChild(o),n.appendChild(t)})),e.appendChild(n),{headerDiv:e}})(),o=(()=>{const e=document.createElement("div");return e.classList.add("footer"),e.textContent="Made for the Odin Project",{footerDiv:e}})(),a=()=>{document.querySelector("#content").appendChild(e.homeDiv)},r=t.p+"17a6b86b17d97cb1d5f1.svg",i=t.p+"bbdfa6499b0b69136643.svg",c=t.p+"71eb9e3bc04f6cbf4984.jpg",s=(()=>{const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("h1");n.textContent="Contact Us",n.setAttribute("class","contact__title");const t=document.createElement("div");t.classList.add("contactHolder");const o=document.createElement("div");o.classList.add("numberHolder");const a=new Image;a.src=r;const s=document.createElement("div");s.textContent="123-456-7890",o.appendChild(a),o.appendChild(s);const d=document.createElement("div");d.classList.add("restaurantPlace");const l=new Image;l.src=i;const m=document.createElement("div");m.textContent="Point Nemo, Pacific Ocean",d.appendChild(l),d.appendChild(m);const u=new Image;return u.src=c,u.classList.add("destImg"),t.appendChild(o),t.appendChild(d),t.appendChild(u),e.appendChild(n),e.appendChild(t),{contactDiv:e}})(),d=t.p+"6ae201c08fc32bf9f89a.jpg",l=t.p+"b8562243a59881e7dc6d.jpg",m=t.p+"81b34ba92f7cb969740e.jpg",u=(()=>{const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("h1");n.textContent="Our Menu",n.setAttribute("class","menu__title");const t=document.createElement("div"),o=document.createElement("div");o.classList.add("menuItemOne");const a=new Image;a.src=l;const r=document.createElement("div"),i=document.createElement("h3"),c=document.createElement("p");i.textContent="Veggie Tajine",c.textContent="This Moroccan dish consists of the finest vegetables you can find: potatoes, carrots, onions, and garlic.",r.append(i,c),o.append(a,r);const s=document.createElement("div");s.classList.add("menuItemTwo");const u=new Image;u.src=d;const p=document.createElement("div"),h=document.createElement("h3"),f=document.createElement("p");h.textContent="Chicken Tajine",f.textContent="The all-famous Moroccan classic. It is a traditional dish of chicken pieces braised with spices, garlic, onion, olives, and preserved lemons.",p.append(h,f),s.append(u,p);const v=document.createElement("div");v.classList.add("menuItemThree");const g=new Image;g.src=m;const b=document.createElement("div"),y=document.createElement("h3"),C=document.createElement("p");return y.textContent="Couscous",C.textContent="I don't even know if this is Moroccan, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",b.append(y,C),v.append(g,b),r.classList.add("details"),p.classList.add("details"),b.classList.add("details"),t.appendChild(o),t.appendChild(s),t.appendChild(v),e.appendChild(n),e.appendChild(t),{menuDiv:e}})();var p=t(379),h=t.n(p),f=t(795),v=t.n(f),g=t(569),b=t.n(g),y=t(565),C=t.n(y),x=t(216),w=t.n(x),E=t(589),L=t.n(E),I=t(426),M={};M.styleTagTransform=L(),M.setAttributes=C(),M.insert=b().bind(null,"head"),M.domAPI=v(),M.insertStyleElement=w(),h()(I.Z,M),I.Z&&I.Z.locals&&I.Z.locals,(()=>{const e=document.querySelector("body");e.insertBefore(n.headerDiv,e.firstChild)})(),a(),document.querySelector("body").appendChild(o.footerDiv);const T=document.getElementById("content"),_=document.querySelector("div.Home"),k=document.querySelector("div.Contact"),S=document.querySelector("div.Menu");_.addEventListener("click",(()=>{k.classList.remove("active"),S.classList.remove("active"),T.innerHTML="",a(),_.classList.add("active")})),k.addEventListener("click",(()=>{_.classList.remove("active"),S.classList.remove("active"),T.innerHTML="",document.querySelector("#content").appendChild(s.contactDiv),k.classList.add("active")})),S.addEventListener("click",(()=>{_.classList.remove("active"),k.classList.remove("active"),T.innerHTML="",document.querySelector("#content").appendChild(u.menuDiv),S.classList.add("active")}))})()})();