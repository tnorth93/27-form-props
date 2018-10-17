import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.postName = this.props.searchResults.name || '';
  }
}

SearchForm.propTypes = {
  searchResults: PropTypes.object,
};

export default SearchForm;