var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],d=t.base?i[0]+t.base:i[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:g(p,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=f||(f=l(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=d(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"fee8ab88f62ac8bece713f569dc24e9e.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"2096d7d363277f8fb728643361f3d119.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"ed61a353722c872d88a209e698931aaf.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"56ccd257a4cf309f7df96798af5182c2.gif"},function(e,t,n){var r=n(0),o=n(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){var r=n(1),o=n(2),i=n(3),a=n(4);t=r(!1);var c=o(i),d=o(a);t.push([e.i,"html,body{overflow-x:hidden}html{font-size:17px;height:100%;margin:0;padding:0;width:100%;max-width:100%}body{margin:0;max-width:100%;min-height:100%;background-image:url("+c+");background-repeat:no-repeat;background-attachment:fixed;background-size:cover;position:relative;padding-bottom:3rem;display:flex;flex-direction:column;z-index:0}a{text-decoration:none;color:#F2F2F2}a:link{text-decoration:none;color:#F2F2F2}.line{height:3px;width:4rem}h2{font-size:2rem;text-align:center;margin-top:4rem}h3{font-size:1.5rem;text-decoration:underline}.bgr-box{max-width:60vw;text-align:center}.box-wrapper{display:flex;flex-direction:column;text-align:center;justify-content:center}#weather-icon{max-width:4rem;height:auto;align-self:center}@media (min-width: 900px){html{font-size:16px}body{background-image:url("+d+")}h2{margin-top:10rem}.bgr-box{max-width:80vw}.box-wrapper{flex-direction:column;justify-content:center;align-content:center;padding:1rem}}\n",""]),e.exports=t},function(e,t,n){var r=n(0),o=n(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){var r=n(1),o=n(2),i=n(5);(t=r(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap);"]);var a=o(i);t.push([e.i,"nav{box-sizing:border-box;margin-left:0;display:flex;flex-direction:row;justify-content:space-between;background-color:#595646;height:5rem;margin-bottom:-5rem;z-index:3;position:fixed;top:0;width:100vw;max-width:100vw}#logo-wrapper{margin-left:1rem;margin-top:1.4rem;z-index:5}#logo-img{background-image:url("+a+");background-repeat:no-repeat;background-position:right;background-size:auto;margin-top:-5rem;margin-left:-1rem;min-height:6rem;width:10rem;z-index:5}h1{font-family:\"Shadows Into Light\",cursive;font-size:2.1rem;margin-top:-0.2rem;z-index:3;border-style:dashed;border-width:1px;border-left:none;border-right:none;color:#F2F2F2}#menu{margin-top:0.8rem;margin-right:1rem;display:flex;flex-direction:column;min-width:11.738rem}.menu-btn{font-size:2rem;padding:0.5rem;background-color:#261417;border-style:none;border-radius:0.5rem;color:#F2F2F2;animation-duration:0.6s;min-width:3rem}#dropdown-menu{display:none;background-color:#261417;z-index:5;border-radius:0.5rem;padding:0.5rem;align-content:center;margin-top:-0.5rem;border-top-left-radius:0;border-top-right-radius:0;text-align:center}#dropdown-menu ul{list-style:none;text-align:justify;font-size:1.6rem}#dropdown-menu ul li{padding:0.5rem}#menu:hover #dropdown-menu{background-color:#261417;display:block}#dropdown-menu:hover .menu-btn{background-color:#261417;display:block}.menu-btn:hover{background-color:#261417;border-bottom-left-radius:0;border-bottom-right-radius:0;cursor:pointer}.menu-link:link,.menu-link:visited,.menu-link:active{text-decoration:none;color:#F2F2F2}.menu-link:hover{color:#F2F2F2;text-shadow:2px 2px 3px #595646}@media (min-width: 900px){#menu{flex-direction:row}#mobile-menu-btn{display:none}#dropdown-menu{display:flex;background-color:#595646}#menu:hover #dropdown-menu{background-color:#595646}#menu-links{display:flex;flex-direction:row;width:70vw;max-width:70vw;justify-content:space-between;margin-top:0.6rem;font-family:'Perpetua', cursive}.menu-link:hover{text-shadow:3px 2px 7px white}}\n",""]),e.exports=t},function(e,t,n){var r=n(0),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){var r=n(1),o=n(2),i=n(6);t=r(!1);var a=o(i);t.push([e.i,"main{margin-top:2rem;display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;z-index:0;min-height:100vh;max-width:100vw;margin-bottom:8rem}.main-about{background-color:rgba(89,86,70,0.7);margin-bottom:0;padding-bottom:2rem}.form{display:flex;flex-direction:column;justify-content:center;align-content:center}.form p{text-align:center;font-size:1.4rem}article>div{padding:0.8rem}.hidden{display:none}.input{background-color:white;border-width:thin;border-color:black;border-style:solid;border-radius:0.5rem;height:2rem;padding:0.5rem;font-size:1.8rem;color:#261417}.btn{border-radius:0.5rem;font-size:1.3rem;margin-top:2rem;background-color:#261417;height:3rem;color:#F2F2F2;border-style:solid;border-width:medium;border-color:black;width:auto;align-self:center;animation-duration:0.6s}.btn:hover{background-color:#595646;cursor:pointer}.loading{display:none}#loader{background-image:url("+a+");background-repeat:no-repeat;background-size:contain;width:5rem;height:5rem;z-index:2}#dest-info{text-align:center;padding:1.2rem}#results{display:flex;flex-direction:column;align-content:center;width:100vw;margin-bottom:3rem;z-index:0;background-color:rgba(89,86,70,0.7)}#section{max-width:90vw;max-height:30vh}#country-pic{min-width:30vw;min-height:auto;max-width:80vw;max-height:auto;align-self:center;padding:1rem}#hotel-deals{text-align:center;height:40vh;overflow:scroll}#trips{padding:1rem;display:flex;flex-direction:column;justify-content:space-between;width:100vw}.hotels,.weather-entries{display:flex;flex-direction:column;text-align:center;margin-left:2.5rem;margin-right:2.5rem;margin-top:2rem;max-height:15rem;overflow-y:scroll}.trip-box{display:flex;flex-direction:column;background-color:rgba(89,86,70,0.7);text-align:center;margin-bottom:1.5rem;padding-top:3rem}.trip-btn{font-size:0.8rem}.btns-wrap{display:flex;flex-direction:column;padding-bottom:3rem}#options-buttons{padding-bottom:3rem;display:flex;flex-direction:column;margin-left:20rem;margin-right:20rem}.bold{font-weight:900;text-align:center}@media (min-width: 900px){main{margin-top:0}#country-pic{min-width:30vw;min-height:auto;max-width:40vw;max-height:auto}#options-buttons{flex-direction:row;justify-content:space-between}#trips{width:90vw;flex-direction:column}#results{flex-direction:row;align-items:flex-start;width:80vw}article{display:flex;flex-direction:row;align-content:first baseline;text-align:justify;width:80vw;padding:0.5rem}article h2{margin-top:2rem}}\n",""]),e.exports=t},function(e,t,n){var r=n(0),o=n(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,'footer{background-color:#595646;z-index:3;display:flex;flex-direction:column;align-items:center;height:auto;position:absolute;bottom:0;width:100vw}.box-footer{margin:0.5rem}.fa-github:hover{cursor:pointer;color:#261417}.ftr-link::after{content:" | "}@media (min-width: 900px){footer{flex-direction:row;justify-content:space-between;align-items:center}.box-footer{margin:2rem}}\n',""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"clickEvent",(function(){return d})),n.d(t,"handleInput",(function(){return s})),n.d(t,"saveTrip",(function(){return u})),n.d(t,"displayTrips",(function(){return m})),n.d(t,"removeEntry",(function(){return h})),n.d(t,"longTermWeather",(function(){return i})),n.d(t,"manageData",(function(){return f})),n.d(t,"tripsArray",(function(){return p})),n.d(t,"dataSet",(function(){return l})),n.d(t,"hotelsEl",(function(){return a})),n.d(t,"weatherEl",(function(){return c}));n(7),n(9),n(11),n(13),n(4),n(3),n(5),n(6);var r=n.p+"bf0054e606dfb73552edaddb5d7044b9.png";async function o(e,t){const n=await fetch(e,{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("When GETting data from the API, an error occured: ",e)}}function i(e,t){t.weather=[],t.temp=[];for(let n=0;n<=e.data.length-1;n++)t.weather.push(e.data[n].weather.description),t.temp.push(e.data[n].temp);return t}function a(e,t,n){if(null!=e[0])for(let t=0;t<=3;t++){let n=[e[t].hotel.name],r=[e[t].offers[0].price.total,e[t].offers[0].price.currency];const o=`<p class="bold">${n}</p>\n      <i class="fas fa-h-square"></i>\n      <p>${`<p class="bold">Address:</p>\n    <p>${e[t].hotel.address.lines[0]}</p>\n    <span>Postal code: ${e[t].hotel.address.postalCode}, ${e[t].hotel.address.cityName}</span>`}</p>\n      <p>Average estimated price per night for 1 adult:</p>\n      <span class="fas fa-money-check-alt"></span>\n      <p>${r}</p>\n      <hr>`;let i=document.createElement("div");i.innerHTML=o,document.getElementById("hotel-deals").appendChild(i),i.classList.add("hotel")}}function c(e,t,n,o){if(1==t.weather.length)return document.getElementById("weather").innerHTML=`<h3>Current weather conditions</h3>\n    <img id="weather-icon" src="${r}" alt="Weather icon"/>\n    <p>${t.temp}°C <span class="fas fa-temperature-high"></span></p>\n    <p>${t.weather}</p>`;{let e=document.createElement("h3");e.innerHTML="<h3>16-day period weather conditions</h3>",document.getElementById("weather").appendChild(e);for(let e=0;e<=t.weather.length-1;e++){let n=t.weather[e],o=t.temp[e],i=`<img id="weather-icon" src="${r}" alt="Weather icon"/>\n      <p>${o}°C <span class="fas fa-temperature-high"></span></p>\n      <p>${n}</p>\n      <hr class="line">`,a=document.createElement("div");a.innerHTML=i,document.getElementById("weather").appendChild(a),document.getElementById("weather").classList.add("weather-entries")}}}function d(){const e=document.getElementsByClassName("input")[0].value,t=document.getElementsByClassName("input")[1].value;return e&&""!==t?s():void location.reload()}let l={};function s(){let e=document.getElementById("place").value;e=e.replace(/ /g,"+");const t=document.getElementById("date").value,n=`http://api.geonames.org/searchJSON?q=${e}&maxRows=1&username=zh.betina`;e=e.replace(/\+/g," "),l={city:e,date:t},o(n,void 0).then(e=>{document.getElementById("plan-trip-section").classList.add("hidden"),document.getElementById("loader").classList.remove("hidden");const t=e.geonames[0].lat,n=e.geonames[0].lng,r=e.geonames[0].countryName;return l.country=r,l.lat=t,l.lng=n,l}).then(e=>(function(e,t){const n=new Date(e.date),r=Math.abs(n-t),o=Math.round(r/864e5);e.daysDiff=o}(e,new Date),e)).then(e=>{const t=`lat=${e.lat}&lon=${e.lng}`,n="&key=8b8571fff1e64adeab1381af83e01d85",r=`https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?${t}${n}`,i=`https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/daily?${t}${n}`;return e.daysDiff<=14&&e.daysDiff>=0?o(r,void 0):o(i,void 0)}).then(e=>0!=e.data.length?i(e,l):(l.weather=e.data[0].weather.description,l.temp=e.data[0].temp,l)).then(e=>{let t;return t="https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=16579484-c9f74c18198f80193bbad71c6&q="+e.city,o(t,void 0)}).then(e=>function e(t,n){if(0!==t.hits.length){const e=t.hits.length;let r=Math.floor(Math.random()*e);return n.picUrl=t.hits[r].webformatURL,n}return o(`https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?${"key=16579484-c9f74c18198f80193bbad71c6"}&q=${n.country}`,t=void 0).then(t=>e(t,n))}(e,l)).then(e=>{let t,n;return async function(e,t){const n=await fetch(e,{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("While POSTing, error occured:",e)}}(t="/post",n={dataSet:e})}).then(e=>function(e,t){let n;n=1==t.daysDiff?"day":"days";let r=`<div id="dest-info">\n    <h2>You're leaving for ${t.city}, ${t.country} in ${t.daysDiff} ${n}.</h2>\n    <h3>Departure date:</h3>\n    <p>${t.date}</p>\n  </div>\n  <div class="box-wrapper">\n    <div class="box">\n      <div id="results">\n        <img id="country-pic" src="${t.picUrl}" alt="Photo of the destination">\n        <div class="box-wrapper">\n          <div id="weather">\n          </div>\n        </div>\n        <div class="box-wrapper">\n          <h3>Top cheapest hotel deals</h3>\n          <div id="hotel-deals">\n          </div>\n        </div>\n      </div>\n      <div id="options-buttons">\n        <button class="btn" id="save" onclick="return Client.saveTrip()">Save this trip</button>\n        <a href="/"><button class="btn" id="cancel">Cancel</button></a>\n      </div>\n    </div>\n  </div>`;document.getElementById("main").innerHTML=r,a(e),c(0,t)}(e,l))}function u(){const e=Client.dataSet,t=[],n=`${e.city}, ${e.country}`,r=document.getElementById("country-pic").outerHTML,o=e.date,i=document.getElementById("weather").innerHTML,a=document.getElementsByClassName("hotel");for(let e=0;e<=a.length-1;e++){const n=a[e].innerHTML;t.push(n)}let c={destination:n,date:o,photo:r,weather:i,hotels:t},d=localStorage.length;return function(e,t){localStorage.setItem(e,JSON.stringify(t)),console.log("saved"),document.getElementById("options-buttons").innerHTML='<p>✅ <b>Your trip has been successfully saved.</b> ✅</p>";\n<a href="/"><button class="btn">Back to searching</button></a>'}("tripInfo"+parseInt(d+1),c)}let p=[];function m(){const e=document.getElementById("trips");f({},p),console.log(p);for(let t=0;t<=p.length-1;t++){let n=document.createElement("div");n.classList.add("trip-box");let r=p[t][0],o=JSON.parse(r[1]),i=o.destination,a=o.date,c=o.weather,d=o.photo,l=o.hotels;n.innerHTML=`<h3>${i}</h3>\n  <h4>Departure date:</h4>\n  <p>${a}</p>\n  <hr class="line">\n  ${d}\n  <div class="box-wrapper">\n    <h3>Forecast</h3>\n    <div class="weather-entries">${c}</div>\n  </div>\n  <h3>Hotels</h3>\n  <div class="hotels">\n    ${l}\n  </div>\n  <div class="btns-wrap">\n    <button class="btn trip-btn" onclick="return Client.removeEntry(${t})">Remove</button>\n  </div>`,e.appendChild(n)}const t=e.innerHTML;e.innerHTML=t.replace(/\n/g,"<br />")}function f(e,t){for(let n=0;n<=localStorage.length+1;n++){let r=localStorage.key(n);if(e={[r]:localStorage.getItem(r)},1==Object.keys(e).some(e=>/tripInfo/.test(e))){const n=Object.entries(e);t.push(n)}}return t}function h(e,t){let n=localStorage.length;for(let t=0;t<=n+1;t++){let n=localStorage.key(t);if(n==Client.tripsArray[e][0][0])return localStorage.removeItem(n),location.reload()}}}]);