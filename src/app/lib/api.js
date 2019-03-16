class Api {
  constructor() {
    this.urls = {};
  }

  loadLang(lang) {
    const [language, url] = lang;
    this.urls[language] = url;
  }

  getData(lang) {
    const path = this.urls[lang];

    if (typeof path === 'undefined') {
      return new Promise((resolve) => {
        resolve({ 'no-data': true });
      });
    }

    return fetch(path)
      .then(data => data.json());
  }
}

module.exports = Api;
