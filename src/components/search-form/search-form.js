import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.subreddit = this.props.subreddit || '';
    this.state.postLimit = this.props.postLimit || 10;
  }

  handleSubreddit = event => {
    this.setState({subreddit: event.target.value})
  };

  handlePostLimit = event => {
    this.setState({postLimit: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loadPosts(this.state.subreddit, this.state.postLimit)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='subreddit'>Subreddit : </label>
        <input name="subreddit" value={this.props.subreddit} onChange={this.handleSubreddit}
        />
        <br/>
        <label htmlFor='post-limit'>Post-Limit : </label>
        <input defaultValue="10" min="10" type="number" name="post-limit" value={this.props.postLimit} onChange={this.handlePostLimit}
        />
        <br/>
        <button type="submit"> Search Subreddit!</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  loadPosts: PropTypes.func,
  name: PropTypes.object,
  subreddit: PropTypes.string,
  postLimit: PropTypes.number,
};

export default SearchForm;