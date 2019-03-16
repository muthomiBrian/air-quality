const chai = require('chai');
const LanguageSelect = require('./languageSelect');
const Api = require('./api');

const { expect } = chai;

describe('Language select', () => {
  it('should request the selected language from the api', () => {
    function ApiSpy() {
      this.lang = '';
      function getData(lang) {
        this.lang = lang;
        return new Promise(() => ({}));
      }
      this.getData = getData;
    }

    const apiSpy = new ApiSpy();
    const lang = new LanguageSelect(apiSpy);

    lang.getData('english');

    expect(apiSpy.lang).to.equal('english');
  });
  it('should subscribe all other elements that need the data and notify them when it is available', () => {
    function ApiSpy() {
      function getData() {
        return new Promise(() => ({ test: 'Test data' }));
      }
      this.getData = getData;
    }

    function TestDisplay() {
      function testSub(data) {
        this.test = data.test;
        return this.test;
      }
      this.test = '';
      this.testSub = testSub;
    }

    const apiSpy = new ApiSpy();
    const lang = new LanguageSelect(apiSpy);
    const testDisplay = new TestDisplay();

    lang.subscribe(testDisplay.testSub);

    lang.getData().then(() => {
      expect(testDisplay.test).to.equal('Test data');
    });
  });
  it('should notify other visual elements when new data is available');
});
