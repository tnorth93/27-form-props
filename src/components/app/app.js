import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import SearchForm from '../search-form/search-form';
import SubredditSearchResults from '../search-results/search-results';
import Header from '../header/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.searchResults = [];
  }

  loadPosts = async (subreddit, postLimit) => {
    const REDDIT_API = `https://www.reddit.com/r/${subreddit}.json?limit=${postLimit}`;
    return superagent.get(REDDIT_API)
      .then(response => {
        if (response.body.data) {
          this.setState({searchResults: response.body.data.children});
        }
      })
      .catch(console.error);
  };

  render() {
    return (
      <main>
        <Header/>
        <div><SearchForm/></div>
      </main>
    );
  }
}

export default App;
