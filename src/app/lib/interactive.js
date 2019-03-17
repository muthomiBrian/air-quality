class Interactive {
  constructor(leading, compare, interactive) {
    this.compare = compare;
    this.leading = leading;
    this.interactive = interactive;
    this.leadingPara = document.createElement('p');
    this.interactiveDiv = document.createElement('div');
    this.initialized = false;
  }

  setleadingPara() {
    this.leadingPara = document.querySelector(this.leading);
    this.interactiveDiv = document.querySelector(this.interactive);
  }

  refreshInteractive() {
    this.setleadingPara();
    this.render();
  }

  search(event) {
    const str = event.target.value;

    if (str === '') {
      return [];
    }

    return this.compare.search(str);
  }

  showCityNames(event) {
    const cities = this.search(event);
    const results = event.target.nextElementSibling;
    results.innerHTML = '';
    cities.forEach((city) => {
      const button = document.createElement('button');
      button.innerHTML = city;
      button.addEventListener('click', () => {
        event.target.value = city;
        this.selectCity(city, results, event);
      });
      results.appendChild(button);
    });
  }

  selectCity(cityName, results) {
    this.city = this.compare.selectCity(cityName);

    results.innerHTML = '';
    this.refreshInteractive();
  }

  render() {
    const interact = this.interactiveDiv.cloneNode(true);
    console.log(interact)
    console.log(this.leadingPara);
    const prevInteract = document.querySelector('.used');

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

    interact.classList.add('used')

    this.leadingPara.insertAdjacentElement('afterend', interact);
    this.initialized = true;
  }

  renderName(interact) {
    const nameEl = interact.querySelector('.city-name');
    nameEl.innerHTML = `<strong>${this.city.name}</strong> : <span class="pm-25">${this.city.aqi}</span>, which is equivalent to -`;
  }

  renderCiggImg(interact) {
    const imgEl = interact.querySelector('.ciggImages');
    let packs = Math.floor(this.city.cigg / 5);
    let ciggs = this.city.cigg % 5;

    imgEl.innerHTML = '';

    while (packs > 0) {
      const packDiv = document.createElement('div');
      packDiv.classList.add('pack');

      let count = 5;

      while (count > 0) {
        const cigg = document.createElement('img');
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
      const cigg = document.createElement('img');
      cigg.classList.add('cig-img');
      cigg.src = './assets/ciggrette_icon.png';
      cigg.alt = 'cigarette';

      imgEl.appendChild(cigg);
      ciggs -= 1;
    }
  }

  renderCigg(interact) {
    const ciggEl = interact.querySelector('.ciggNumber');
    ciggEl.innerHTML = `<em>${this.city.cigg} Cigarettes.</em>`;
  }
}

module.exports = Interactive;
