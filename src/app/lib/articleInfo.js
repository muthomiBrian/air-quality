class ArticleInfo {
  constructor(div) {
    this.div = div;
    this.byline = '';
    this.date = '';
    this.category = '';
    this.categoryUrl = '';
  }

  setArticleInfo(data) {
    if (data['no-data'] === true) {
      return;
    }
    this.byline = data['article-info_1_byline'];
    this.date = data['article-info_1_date'];
    this.category = data['article-info_1_category'];
    this.categoryUrl = data['article-info_1_category_url'];
    this.render();
  }

  render() {
    const div = document.createElement('div');
    const byline = document.createElement('p');
    const date = document.createElement('span');
    const cat = document.createElement('a');

    div.classList.add('article-info');
    byline.classList.add('byline');
    date.classList.add('date');
    
    byline.innerHTML = this.byline;
    date.innerHTML = `${this.date} | `;
    cat.innerHTML = this.category;

    cat.href = this.categoryUrl;

    div.appendChild(byline);
    div.appendChild(date);
    div.appendChild(cat);
    
    this.div.appendChild(div);
  }
}

module.exports = ArticleInfo;
