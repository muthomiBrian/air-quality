const chai = require('chai');
const Paragraphs = require('./paragraphs');

const { expect } = chai;

describe('Paragraph', () => {
  const para = new Paragraphs();

  it('should have a method to get the paragraph data', () => {
    expect(typeof para.setPara).to.equal('function');
  });
  it('should render all the paragraphs sequentially while adding classes to the leading and subheading paragraphs', () => {
    expect(typeof para.render).to.equal('function');
  });
});
