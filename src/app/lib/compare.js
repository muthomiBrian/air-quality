class Compare {
  constructor() {
    this.cities = {};
    this.method = '';
    this.title = '';
    this.cityEnum = {};
  }

  setCompare(data) {
    this.method = data['compare-tabs_1_method'];
    this.title = data['compare-tabs_1_title'];

    Object.keys(data).forEach((key) => {
      if (key.includes('compare-tabs_1_city')) {
        const num = key.match(/[0-9]+/g)[1];
        if (key.includes('name')) {
          const name = data[key];
          this.cityEnum[num] = name;
          this.cities[name] = { name };
        }

        if (key.includes('aqi')) {
          const name = this.cityEnum[num];
          this.cities[name].aqi = data[key];
        }

        if (key.includes('cigg')) {
          const name = this.cityEnum[num];
          this.cities[name].cigg = data[key];
        }
      }
    });
  }

  search(str) {
    return Object.keys(this.cities)
      .filter(city => city.toLowerCase().startsWith(str.toLowerCase()));
  }

  selectCity(cityName) {
    return this.cities[cityName];
  }
}

module.exports = Compare;
