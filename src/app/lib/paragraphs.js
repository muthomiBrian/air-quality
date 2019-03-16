class Paragraphs {
  constructor(div, leading, subHeadings) {
    this.div = div;
    this.paragraphs = [];
    this.leadingPara = leading
    this.subHeadings = subHeadings
  }

  setPara(data) {
    if (data['no-data'] === true) {
      return;
    }

    Object.keys(data).forEach((key) => {
      if (key.slice(0, 2) === 'p_') {
        const index = Number.parseInt(key.match(/[0-9]*/g)[2], 10);
        this.paragraphs[index - 1] = data[key];
      }
    });

    this.render();
  }

  render() {
    let counter = 0;
    this.paragraphs.forEach((para) => {
      const p = document.createElement('p');
      p.innerHTML = para;
      p.classList.add('para');

      if (para === this.paragraphs[this.leadingPara]) {
        p.classList.add('leading');
      }

      if (this.subHeadings.includes(counter)) {
        p.classList.add('subheading');
      }
      this.div.appendChild(p);
      counter += 1;
    });
  }
}

module.exports = Paragraphs;
