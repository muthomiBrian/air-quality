"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);

    this.urls = {};
  }

  _createClass(Api, [{
    key: "loadLang",
    value: function loadLang(lang) {
      var _lang = _slicedToArray(lang, 2),
          language = _lang[0],
          url = _lang[1];

      this.urls[language] = url;
    }
  }, {
    key: "getData",
    value: function getData(lang) {
      var path = this.urls[lang];

      if (typeof path === 'undefined') {
        return new Promise(function (resolve) {
          resolve({
            'no-data': true
          });
        });
      }

      return fetch(path).then(function (data) {
        return data.json();
      });
    }
  }]);

  return Api;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArticleInfo =
/*#__PURE__*/
function () {
  function ArticleInfo(div) {
    _classCallCheck(this, ArticleInfo);

    this.div = div;
    this.byline = '';
    this.date = '';
    this.category = '';
    this.categoryUrl = '';
  }

  _createClass(ArticleInfo, [{
    key: "setArticleInfo",
    value: function setArticleInfo(data) {
      if (data['no-data'] === true) {
        return;
      }

      this.byline = data['article-info_1_byline'];
      this.date = data['article-info_1_date'];
      this.category = data['article-info_1_category'];
      this.categoryUrl = data['article-info_1_category_url'];
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var div = document.createElement('div');
      var byline = document.createElement('p');
      var date = document.createElement('span');
      var cat = document.createElement('a');
      div.classList.add('article-info');
      byline.classList.add('byline');
      date.classList.add('date');
      byline.innerHTML = this.byline;
      date.innerHTML = "".concat(this.date, " | ");
      cat.innerHTML = this.category;
      cat.href = this.categoryUrl;
      div.appendChild(byline);
      div.appendChild(date);
      div.appendChild(cat);
      this.div.appendChild(div);
    }
  }]);

  return ArticleInfo;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Compare =
/*#__PURE__*/
function () {
  function Compare() {
    _classCallCheck(this, Compare);

    this.cities = {};
    this.method = '';
    this.title = '';
    this.cityEnum = {};
  }

  _createClass(Compare, [{
    key: "setCompare",
    value: function setCompare(data) {
      var _this = this;

      this.method = data['compare-tabs_1_method'];
      this.title = data['compare-tabs_1_title'];
      Object.keys(data).forEach(function (key) {
        if (key.includes('compare-tabs_1_city')) {
          var num = key.match(/[0-9]+/g)[1];

          if (key.includes('name')) {
            var name = data[key];
            _this.cityEnum[num] = name;
            _this.cities[name] = {
              name: name
            };
          }

          if (key.includes('aqi')) {
            var _name = _this.cityEnum[num];
            _this.cities[_name].aqi = data[key];
          }

          if (key.includes('cigg')) {
            var _name2 = _this.cityEnum[num];
            _this.cities[_name2].cigg = data[key];
          }
        }
      });
    }
  }, {
    key: "search",
    value: function search(str) {
      return Object.keys(this.cities).filter(function (city) {
        return city.toLowerCase().startsWith(str.toLowerCase());
      });
    }
  }, {
    key: "selectCity",
    value: function selectCity(cityName) {
      return this.cities[cityName];
    }
  }]);

  return Compare;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hero =
/*#__PURE__*/
function () {
  function Hero(div) {
    _classCallCheck(this, Hero);

    this.title = '';
    this.imageUrl = '';
    this.div = div;
  }

  _createClass(Hero, [{
    key: "setHero",
    value: function setHero(data) {
      if (data['no-data'] === true) {
        this.title = 'Sorry we can\t find the page you are looking for right now.';
        this.render404();
        this.renderTitle();
        return;
      }

      this.title = data.hero_1_title;
      this.imageUrl = data.hero_1_image;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.div.innerHTML = '';
      this.renderImage();
      this.renderTitle();
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var img = document.createElement('img');
      var div = document.createElement('div');
      img.alt = 'Smog';
      img.src = this.imageUrl;
      div.classList.add('hero-image-container');
      img.classList.add('hero-image');
      div.appendChild(img);
      this.div.appendChild(div);
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var h1 = document.createElement('h1');
      h1.innerHTML = this.title;
      h1.classList.add('hero-title');
      this.div.appendChild(h1);
    }
  }, {
    key: "render404",
    value: function render404() {
      var div = document.createElement('div');
      var p404 = document.createElement('p');
      p404.innerHTML = '404';
      div.classList.add('hero-404-container');
      p404.classList.add('hero-404');
      div.appendChild(p404);
      this.div.appendChild(div);
    }
  }]);

  return Hero;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interactive =
/*#__PURE__*/
function () {
  function Interactive(leading, compare, interactive) {
    _classCallCheck(this, Interactive);

    this.compare = compare;
    this.leading = leading;
    this.interactive = interactive;
    this.leadingPara = document.createElement('p');
    this.interactiveDiv = document.createElement('div');
    this.initialized = false;
  }

  _createClass(Interactive, [{
    key: "setleadingPara",
    value: function setleadingPara() {
      this.leadingPara = document.querySelector(this.leading);
      this.interactiveDiv = document.querySelector(this.interactive);
    }
  }, {
    key: "refreshInteractive",
    value: function refreshInteractive() {
      this.setleadingPara();
      this.render();
    }
  }, {
    key: "search",
    value: function search(event) {
      var str = event.target.value;

      if (str === '') {
        return [];
      }

      return this.compare.search(str);
    }
  }, {
    key: "showCityNames",
    value: function showCityNames(event) {
      var _this = this;

      var cities = this.search(event);
      var results = event.target.nextElementSibling;
      results.innerHTML = '';
      cities.forEach(function (city) {
        var button = document.createElement('button');
        button.innerHTML = city;
        button.addEventListener('click', function () {
          event.target.value = city;

          _this.selectCity(city, results, event);
        });
        results.appendChild(button);
      });
    }
  }, {
    key: "selectCity",
    value: function selectCity(cityName, results) {
      this.city = this.compare.selectCity(cityName);
      results.innerHTML = '';
      this.refreshInteractive();
    }
  }, {
    key: "render",
    value: function render() {
      var interact = this.interactiveDiv.cloneNode(true);
      console.log(interact);
      console.log(this.leadingPara);
      var prevInteract = document.querySelector('.used');

      if (prevInteract !== null) {
        prevInteract.parentElement.removeChild(prevInteract);
      }

      interact.querySelector('.title').innerHTML = this.compare.title;
      interact.querySelector('.method').innerHTML = this.compare.method;
      interact.removeAttribute('hidden');

      if (typeof this.city !== 'undefined') {
        this.renderName(interact);
        this.renderCiggImg(interact);
        this.renderCigg(interact);
      }

      interact.classList.add('used');
      this.leadingPara.insertAdjacentElement('afterend', interact);
      this.initialized = true;
    }
  }, {
    key: "renderName",
    value: function renderName(interact) {
      var nameEl = interact.querySelector('.city-name');
      nameEl.innerHTML = "<strong>".concat(this.city.name, "</strong> : <span class=\"pm-25\">").concat(this.city.aqi, "</span>, which is equivalent to -");
    }
  }, {
    key: "renderCiggImg",
    value: function renderCiggImg(interact) {
      var imgEl = interact.querySelector('.ciggImages');
      var packs = Math.floor(this.city.cigg / 5);
      var ciggs = this.city.cigg % 5;
      imgEl.innerHTML = '';

      while (packs > 0) {
        var packDiv = document.createElement('div');
        packDiv.classList.add('pack');
        var count = 5;

        while (count > 0) {
          var cigg = document.createElement('img');
          cigg.classList.add('cig-img');
          cigg.src = './assets/ciggrette_icon.png';
          cigg.alt = 'cigarette';
          packDiv.appendChild(cigg);
          count -= 1;
        }

        imgEl.appendChild(packDiv);
        packs -= 1;
      }

      while (ciggs > 0) {
        var _cigg = document.createElement('img');

        _cigg.classList.add('cig-img');

        _cigg.src = './assets/ciggrette_icon.png';
        _cigg.alt = 'cigarette';
        imgEl.appendChild(_cigg);
        ciggs -= 1;
      }
    }
  }, {
    key: "renderCigg",
    value: function renderCigg(interact) {
      var ciggEl = interact.querySelector('.ciggNumber');
      ciggEl.innerHTML = "<em>".concat(this.city.cigg, " Cigarettes.</em>");
    }
  }]);

  return Interactive;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LanguageSelect =
/*#__PURE__*/
function () {
  function LanguageSelect(api, div) {
    _classCallCheck(this, LanguageSelect);

    this.api = api;
    this.subscribers = [];
    this.data = {};
    this.div = div;
  }

  _createClass(LanguageSelect, [{
    key: "getData",
    value: function getData(lang) {
      var _this = this;

      return this.api.getData(lang).then(function (data) {
        _this.data = data;

        _this.send();

        return data;
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn, context) {
      this.subscribers.push({
        fn: fn,
        context: context
      });
    }
  }, {
    key: "send",
    value: function send() {
      var _this2 = this;

      this.subscribers.forEach(function (obj) {
        obj.fn.call(obj.context, _this2.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var div = document.createElement('div');
      div.classList.add('language-select');
      var header = document.createElement('p');
      header.innerHTML = 'Select your prefered reading language.';
      div.appendChild(header);
      var btEng = document.createElement('button');
      btEng.innerHTML = 'English';
      btEng.addEventListener('click', function () {
        _this3.getData('english');
      });
      div.appendChild(btEng);
      var btHin = document.createElement('button');
      btHin.innerHTML = 'Hindi';
      btHin.addEventListener('click', function () {
        _this3.getData('hindi');
      });
      div.appendChild(btHin);
      this.div.appendChild(div);
    }
  }]);

  return LanguageSelect;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Paragraphs =
/*#__PURE__*/
function () {
  function Paragraphs(div, leading, subHeadings) {
    _classCallCheck(this, Paragraphs);

    this.div = div;
    this.paragraphs = [];
    this.leadingPara = leading;
    this.subHeadings = subHeadings;
  }

  _createClass(Paragraphs, [{
    key: "setPara",
    value: function setPara(data) {
      var _this = this;

      if (data['no-data'] === true) {
        return;
      }

      Object.keys(data).forEach(function (key) {
        if (key.slice(0, 2) === 'p_') {
          var index = Number.parseInt(key.match(/[0-9]*/g)[2], 10);
          _this.paragraphs[index - 1] = data[key];
        }
      });
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var counter = 0;
      this.paragraphs.forEach(function (para) {
        var p = document.createElement('p');
        p.innerHTML = para;
        p.classList.add('para');

        if (para === _this2.paragraphs[_this2.leadingPara]) {
          p.classList.add('leading');
        }

        if (_this2.subHeadings.includes(counter)) {
          p.classList.add('subheading');
        }

        _this2.div.appendChild(p);

        counter += 1;
      });
    }
  }]);

  return Paragraphs;
}();
"use strict";

var api = new Api();
api.loadLang(['english', './data/english.json']);
api.loadLang(['hindi', './data/hindi.json']);
var main = document.querySelector('.main');
var hero = new Hero(main);
var article = new ArticleInfo(main);
var para = new Paragraphs(main, 4, [5]);
var comp = new Compare();
var interactive = new Interactive('.leading', comp, '.interact-wrapper');
var lang = new LanguageSelect(api, main);
lang.subscribe(hero.setHero, hero);
lang.subscribe(article.setArticleInfo, article);
lang.subscribe(lang.render, lang);
lang.subscribe(para.setPara, para);
lang.subscribe(comp.setCompare, comp);
lang.subscribe(interactive.refreshInteractive, interactive);
lang.getData('hindi');