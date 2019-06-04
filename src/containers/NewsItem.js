import React from 'react';
import { connect } from 'react-redux';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple',
  borderRadius: '5px'
};

const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

let NewsItem = ({ article }) => (
  article ? article.map((article, key) => {
    return (
      <article style={articleStyle} key= {key}>
        <div>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} style={imgStyle} alt="avatar" />
          <h4>{article.description}</h4>
          <a href={article.url}>READ MORE</a>
        </div>
      </article>
    )
  })
    : null
);

const mapStateToProps = (state) => ({
  article: state.news,
})

NewsItem = connect(mapStateToProps, null)(NewsItem);

export default NewsItem;
