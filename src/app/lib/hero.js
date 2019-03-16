class Hero {
  constructor(div) {
    this.title = '';
    this.imageUrl = '';
    this.div = div;
  }

  setHero(data) {
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

  render() {
    this.div.innerHTML = '';
    this.renderImage();
    this.renderTitle();
  }

  renderImage() {
    const img = document.createElement('img');
    const div = document.createElement('div');
    img.alt = 'Smog';
    img.src = this.imageUrl;
    div.classList.add('hero-image-container');
    img.classList.add('hero-image');
    div.appendChild(img);
    this.div.appendChild(div);
  }

  renderTitle() {
    const h1 = document.createElement('h1');
    h1.innerHTML = this.title;
    h1.classList.add('hero-title');
    this.div.appendChild(h1);
  }

  render404() {
    const div = document.createElement('div');
    const p404 = document.createElement('p');
    p404.innerHTML = '404';
    div.classList.add('hero-404-container');
    p404.classList.add('hero-404');
    div.appendChild(p404);
    this.div.appendChild(div);
  }
}

module.exports = Hero;
