import React from 'react';
import './App.css';
import Button from './containers/Button';
import Loading from './containers/Loading';
import NewsItem from './containers/NewsItem';

function App() {
  return (
    <div className="App">
      <Button />
      <Loading />
      <NewsItem />
    </div>
  );
}

export default App;
