const chai = require('chai');
const Api = require('./api');

const { expect } = chai;

const api = new Api();

describe('Api', () => {
  it('should load and keep paths to data for different languages', () => {
    api.loadLang(['english', '/data/english.json']);
    api.loadLang(['hindi', '/data/hindi.json']);

    expect(api.urls.english).to.equal('/data/english.json');
  });
  it('should respond with empty object {no-data: true} when data is not available', () => {
    api.getData('random')
      .then((data) => {
        expect(api.getData('random')).to.deep.equal({ 'no-data': true });
      });
  });
});
