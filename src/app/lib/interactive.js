class Interactive {
  constructor(leading, compare) {
    this.compare = compare;
    this.leading = leading;
  }

  refreshInteractive() {
    this.render()
  }

  render() { 
    console.log('rendered');
  }

  renderName() { }

  renderCigg() { }

  renderPm() { }

  renderCities() { }
}

module.exports = Interactive;
