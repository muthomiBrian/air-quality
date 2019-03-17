"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw r}}return n}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Api=function(){function e(){_classCallCheck(this,e),this.urls={}}return _createClass(e,[{key:"loadLang",value:function(e){var t=_slicedToArray(e,2),n=t[0],i=t[1];this.urls[n]=i}},{key:"getData",value:function(e){var t=this.urls[e];return void 0===t?new Promise(function(e){e({"no-data":!0})}):fetch(t).then(function(e){return e.json()})}}]),e}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var ArticleInfo=function(){function e(t){_classCallCheck(this,e),this.div=t,this.byline="",this.date="",this.category="",this.categoryUrl=""}return _createClass(e,[{key:"setArticleInfo",value:function(e){!0!==e["no-data"]&&(this.byline=e["article-info_1_byline"],this.date=e["article-info_1_date"],this.category=e["article-info_1_category"],this.categoryUrl=e["article-info_1_category_url"],this.render())}},{key:"render",value:function(){var e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("span"),i=document.createElement("a");e.classList.add("article-info"),t.classList.add("byline"),n.classList.add("date"),t.innerHTML=this.byline,n.innerHTML="".concat(this.date," | "),i.innerHTML=this.category,i.href=this.categoryUrl,e.appendChild(t),e.appendChild(n),e.appendChild(i),this.div.appendChild(e)}}]),e}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Compare=function(){function e(){_classCallCheck(this,e),this.cities={},this.method="",this.title="",this.cityEnum={}}return _createClass(e,[{key:"setCompare",value:function(e){var t=this;this.method=e["compare-tabs_1_method"],this.title=e["compare-tabs_1_title"],Object.keys(e).forEach(function(n){if(n.includes("compare-tabs_1_city")){var i=n.match(/[0-9]+/g)[1];if(n.includes("name")){var a=e[n];t.cityEnum[i]=a,t.cities[a]={name:a}}if(n.includes("aqi")){var r=t.cityEnum[i];t.cities[r].aqi=e[n]}if(n.includes("cigg")){var s=t.cityEnum[i];t.cities[s].cigg=e[n]}}})}},{key:"search",value:function(e){return Object.keys(this.cities).filter(function(t){return t.toLowerCase().startsWith(e.toLowerCase())})}},{key:"selectCity",value:function(e){return this.cities[e]}}]),e}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Hero=function(){function e(t){_classCallCheck(this,e),this.title="",this.imageUrl="",this.div=t}return _createClass(e,[{key:"setHero",value:function(e){if(!0===e["no-data"])return this.title="Sorry we can\t find the page you are looking for right now.",this.render404(),void this.renderTitle();this.title=e.hero_1_title,this.imageUrl=e.hero_1_image,this.render()}},{key:"render",value:function(){this.div.innerHTML="",this.renderImage(),this.renderTitle()}},{key:"renderImage",value:function(){var e=document.createElement("img"),t=document.createElement("div");e.alt="Smog",e.src=this.imageUrl,t.classList.add("hero-image-container"),e.classList.add("hero-image"),t.appendChild(e),this.div.appendChild(t)}},{key:"renderTitle",value:function(){var e=document.createElement("h1");e.innerHTML=this.title,e.classList.add("hero-title"),this.div.appendChild(e)}},{key:"render404",value:function(){var e=document.createElement("div"),t=document.createElement("p");t.innerHTML="404",e.classList.add("hero-404-container"),t.classList.add("hero-404"),e.appendChild(t),this.div.appendChild(e)}}]),e}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Interactive=function(){function e(t,n,i){_classCallCheck(this,e),this.compare=n,this.leading=t,this.interactive=i,this.leadingPara=document.createElement("p"),this.interactiveDiv=document.createElement("div"),this.initialized=!1}return _createClass(e,[{key:"setleadingPara",value:function(){this.leadingPara=document.querySelector(this.leading),this.interactiveDiv=document.querySelector(this.interactive)}},{key:"refreshInteractive",value:function(){this.setleadingPara(),this.render()}},{key:"search",value:function(e){var t=e.target.value;return""===t?[]:this.compare.search(t)}},{key:"showCityNames",value:function(e){var t=this,n=this.search(e),i=e.target.nextElementSibling;i.innerHTML="",n.forEach(function(n){var a=document.createElement("button");a.innerHTML=n,a.addEventListener("click",function(){e.target.value=n,t.selectCity(n,i,e)}),i.appendChild(a)})}},{key:"selectCity",value:function(e,t){this.city=this.compare.selectCity(e),t.innerHTML="",this.refreshInteractive()}},{key:"render",value:function(){var e=this.interactiveDiv.cloneNode(!0);console.log(e),console.log(this.leadingPara);var t=document.querySelector(".used");null!==t&&t.parentElement.removeChild(t),e.querySelector(".title").innerHTML=this.compare.title,e.querySelector(".method").innerHTML=this.compare.method,e.removeAttribute("hidden"),void 0!==this.city&&(this.renderName(e),this.renderCiggImg(e),this.renderCigg(e)),e.classList.add("used"),this.leadingPara.insertAdjacentElement("afterend",e),this.initialized=!0}},{key:"renderName",value:function(e){e.querySelector(".city-name").innerHTML="<strong>".concat(this.city.name,'</strong> : <span class="pm-25">').concat(this.city.aqi,"</span>, which is equivalent to -")}},{key:"renderCiggImg",value:function(e){var t=e.querySelector(".ciggImages"),n=Math.floor(this.city.cigg/5),i=this.city.cigg%5;for(t.innerHTML="";n>0;){var a=document.createElement("div");a.classList.add("pack");for(var r=5;r>0;){var s=document.createElement("img");s.classList.add("cig-img"),s.src="./assets/ciggrette_icon.png",s.alt="cigarette",a.appendChild(s),r-=1}t.appendChild(a),n-=1}for(;i>0;){var c=document.createElement("img");c.classList.add("cig-img"),c.src="./assets/ciggrette_icon.png",c.alt="cigarette",t.appendChild(c),i-=1}}},{key:"renderCigg",value:function(e){e.querySelector(".ciggNumber").innerHTML="<em>".concat(this.city.cigg," Cigarettes.</em>")}}]),e}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var LanguageSelect=function(){function e(t,n){_classCallCheck(this,e),this.api=t,this.subscribers=[],this.data={},this.div=n}return _createClass(e,[{key:"getData",value:function(e){var t=this;return this.api.getData(e).then(function(e){return t.data=e,t.send(),e})}},{key:"subscribe",value:function(e,t){this.subscribers.push({fn:e,context:t})}},{key:"send",value:function(){var e=this;this.subscribers.forEach(function(t){t.fn.call(t.context,e.data)})}},{key:"render",value:function(){var e=this,t=document.createElement("div");t.classList.add("language-select");var n=document.createElement("p");n.innerHTML="Select your prefered reading language.",t.appendChild(n);var i=document.createElement("button");i.innerHTML="English",i.addEventListener("click",function(){e.getData("english")}),t.appendChild(i);var a=document.createElement("button");a.innerHTML="Hindi",a.addEventListener("click",function(){e.getData("hindi")}),t.appendChild(a),this.div.appendChild(t)}}]),e}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Paragraphs=function(){function e(t,n,i){_classCallCheck(this,e),this.div=t,this.paragraphs=[],this.leadingPara=n,this.subHeadings=i}return _createClass(e,[{key:"setPara",value:function(e){var t=this;!0!==e["no-data"]&&(Object.keys(e).forEach(function(n){if("p_"===n.slice(0,2)){var i=Number.parseInt(n.match(/[0-9]*/g)[2],10);t.paragraphs[i-1]=e[n]}}),this.render())}},{key:"render",value:function(){var e=this,t=0;this.paragraphs.forEach(function(n){var i=document.createElement("p");i.innerHTML=n,i.classList.add("para"),n===e.paragraphs[e.leadingPara]&&i.classList.add("leading"),e.subHeadings.includes(t)&&i.classList.add("subheading"),e.div.appendChild(i),t+=1})}}]),e}(),api=new Api;api.loadLang(["english","./data/english.json"]),api.loadLang(["hindi","./data/hindi.json"]);var main=document.querySelector(".main"),hero=new Hero(main),article=new ArticleInfo(main),para=new Paragraphs(main,4,[5]),comp=new Compare,interactive=new Interactive(".leading",comp,".interact-wrapper"),lang=new LanguageSelect(api,main);lang.subscribe(hero.setHero,hero),lang.subscribe(article.setArticleInfo,article),lang.subscribe(lang.render,lang),lang.subscribe(para.setPara,para),lang.subscribe(comp.setCompare,comp),lang.subscribe(interactive.refreshInteractive,interactive),lang.getData("hindi");