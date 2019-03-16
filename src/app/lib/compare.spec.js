const chai = require('chai');
const Compare = require('./compare');

const { expect } = chai;

describe('Compare', () => {
  const comp = new Compare();
  it('should have a method to get comparison data', () => {
    expect(typeof comp.setCompare).to.equal('function');
  });
  it('should have a method to search cities', () => {
    expect(typeof comp.search).to.equal('function');
  });
  it('should have a method to return the data for a specific city', () => {
    expect(typeof comp.selectCity).to.equal('function');
  });
});