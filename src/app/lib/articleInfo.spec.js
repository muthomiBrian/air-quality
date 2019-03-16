const chai = require('chai');
const ArticleInfo = require('./articleInfo');

const { expect } = chai;

describe('Article info', () => {
  const article = new ArticleInfo();
  it('should have a method to get data', () => {
    expect(typeof article.setArticleInfo).to.equal('function');
  });
  it('should have a method to render the section', () => {
    expect(typeof article.render).to.equal('function');
  });
});
