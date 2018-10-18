import React from 'react';
import PropTypes from 'prop-types';

class SubredditSearchResults extends React.Component {

  render() {
    return (
      <li key={this.props.key}>
        <a href={`https://www.reddit.com${this.props.article.data.permalink}`} target='_blank' rel='noopener noreferrer'>{this.props.article.data.title}<p> {this.props.article.data.ups}</p>
        </a>
      </li>
    );
  }
}

SubredditSearchResults.propTypes = {
  permalink: PropTypes.string,
  data: PropTypes.object,
  title: PropTypes.string,
  key: PropTypes.number,
  article: PropTypes.object,
};

export default SubredditSearchResults;
