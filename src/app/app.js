// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        console.log('Service worker registration successful.');
      }, (err) => {
        console.log(err);
        console.log('Service worker registration failed.');
      });
  });
}

const api = new Api();
api.loadLang(['english', './data/english.json']);
api.loadLang(['hindi', './data/hindi.json']);

const main = document.querySelector('.main');
const leading = document.querySelector('.leading');

const hero = new Hero(main);
const article = new ArticleInfo(main);
const para = new Paragraphs(main, 4, [5]);
const comp = new Compare();
const interactive = new Interactive(leading, comp);

const lang = new LanguageSelect(api, main);

lang.subscribe(hero.setHero, hero);
lang.subscribe(article.setArticleInfo, article);
lang.subscribe(lang.render, lang);
lang.subscribe(para.setPara, para);
lang.subscribe(comp.setCompare, comp);
lang.subscribe(interactive.refreshInteractive, interactive);

lang.getData('english');
