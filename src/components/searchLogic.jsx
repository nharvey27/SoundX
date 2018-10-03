import React from 'react';

const SearchLogic = Component =>
  class extends React.Component {
    state = {
      search: '',
    };
    updateSearch = e => {
      this.setState({ search: e.target.value.trim() });
    };

    render() {
      return (
        <div>
          <Component
            {...this.props}
            search={this.state.search}
            updateSearch={this.updateSearch}
          />
        </div>
      );
    }
  };

export default SearchLogic;
