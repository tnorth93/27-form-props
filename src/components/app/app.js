import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.searchResults = [];
  }

  async componentDidMount() {
    await this.loadPostList();
    console.log('Post list loaded');
  }

  loadPostList = async () => {
    const REDDIT_API = 'https://www.reddit.com/r/nfl';
    return superagent.get(REDDIT_API)
      .then(response => {
        if (response.body.results) {
          this.setState({searchResults: response.body.results.slice(0, 10)});
        }
      })
      .catch(console.error);
  };

  render() {
    return (
      <main>

      </main>
    )
  }



}

export default App;
