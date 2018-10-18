import React from 'react';
import PropTypes from 'prop-types';

class SubredditSearchResults extends React.Component {
  render() {
    return (
      <ul>
        <li> {this.props.searchResults[0]}</li>
      </ul>
    );
  }
}

SubredditSearchResults.propTypes = {
  key: PropTypes.number,
  searchResults: PropTypes.array,
};

export default SubredditSearchResults;
