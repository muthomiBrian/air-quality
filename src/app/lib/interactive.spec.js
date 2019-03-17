const chai = require('chai');
const Interactive = require('./interactive');
const { expect } = chai;

describe('Interactive', () => {
  const interactive = new Interactive();
  it('should render the interactive element', () => {
    expect(typeof interactive.render).to.equal('function');
  });
  it('should render the city name', () => {
    expect(typeof interactive.renderName).to.equal('function');
  });
  it('should render the cigarettes display', () => {
    expect(typeof interactive.renderCigg).to.equal('function');
  });
  it('should show cities when searched on search', () => {
    expect(typeof interactive.showCityNames).to.equal('function');
  });
});
