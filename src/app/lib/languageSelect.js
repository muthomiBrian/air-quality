class LanguageSelect {
  constructor(api, div) {
    this.api = api;
    this.subscribers = [];
    this.data = {};
    this.div = div;
  }

  getData(lang) {
    return this.api.getData(lang)
      .then((data) => {
        this.data = data;
        this.send();
        return data;
      });
  }

  subscribe(fn, context) {
    this.subscribers.push({ fn, context });
  }

  send() {
    this.subscribers.forEach((obj) => {
      obj.fn.call(obj.context, this.data);
    });
  }

  render() {
    const div = document.createElement('div');
    div.classList.add('language-select');

    const header = document.createElement('p');
    header.innerHTML = 'Select your prefered reading language.';
    div.appendChild(header);

    const btEng = document.createElement('button');
    btEng.innerHTML = 'English';
    btEng.addEventListener('click', () => {
      this.getData('english');
    });
    div.appendChild(btEng);

    const btHin = document.createElement('button');
    btHin.innerHTML = 'Hindi';
    btHin.addEventListener('click', () => {
      this.getData('hindi');
    });
    div.appendChild(btHin);

    this.div.appendChild(div);
  }
}

module.exports = LanguageSelect;
