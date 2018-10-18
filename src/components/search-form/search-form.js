import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.searchResults = [];
    this.state.subreddit = 'cats';
    this.state.postLimit = 10;
  }

  handleSubreddit = event => {
    this.setState({subreddit: event.target.value});
  };

  handlePostLimit = event => {
    this.setState({postLimit: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmits(this.state.subreddit, this.state.postLimit);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='subreddit'>Subreddit : </label>
        <input name="subreddit" value={this.state.subreddit} onChange={this.handleSubreddit}
        />
        <br/>
        <label htmlFor='post-limit'>Post-Limit : </label>
        <input min="10" type="number" name="post-limit" value={this.state.postLimit} onChange={this.handlePostLimit}
        />
        <br/>
        <button type="submit"> Search Subreddit!</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  // handleFormSubmits: PropTypes.func,
  subreddit: PropTypes.string,
  searchLimit: PropTypes.number,
};

export default SearchForm;