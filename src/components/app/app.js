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
    this.state.postList = [];
  }

  handleFormSubmits = async (subreddit, postLimit) => {
    console.log(subreddit, postLimit);
    const REDDIT_API = `https://www.reddit.com/r/${subreddit}.json?limit=${postLimit}`;
    return superagent.get(REDDIT_API)
      .then(response => {
        if (response.body.data) {
          this.setState({postList: response.body.data.children});
        }
      })
      .catch(console.error);
  };

  render() {
    return (
      <main>
        <Header/>
        <SearchForm
          handleFormSubmits = {this.handleFormSubmits}
          />
        <ul>
          {
          this.state.postList.map((currentPost, index) => {
            return <SubredditSearchResults
              article = {currentPost}
              key = {index}
            />
          })
          }
        </ul>
      </main>
    );
  }
}

export default App;
