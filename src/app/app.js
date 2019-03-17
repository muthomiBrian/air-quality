const api = new Api();
api.loadLang(['english', './data/english.json']);
api.loadLang(['hindi', './data/hindi.json']);

const main = document.querySelector('.main');

const hero = new Hero(main);
const article = new ArticleInfo(main);
const para = new Paragraphs(main, 4, [5]);
const comp = new Compare();
const interactive = new Interactive('.leading', comp, '.interact-wrapper');

const lang = new LanguageSelect(api, main);

lang.subscribe(hero.setHero, hero);
lang.subscribe(article.setArticleInfo, article);
lang.subscribe(lang.render, lang);
lang.subscribe(para.setPara, para);
lang.subscribe(comp.setCompare, comp);
lang.subscribe(interactive.refreshInteractive, interactive);

lang.getData('hindi');
