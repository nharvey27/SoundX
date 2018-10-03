import PropTypes from 'prop-types';
import React from 'react';

class Stats extends React.Component {
  isZero = stat => stat || 0;

  render() {
    const {
      playback_count,
      favoritings_count,
      comment_count,
    } = this.props.track;
    return (
      <div className="singleTrack__stats">
        <div className="stat">
          <i className="material-icons">play_arrow</i>
          <span>{this.isZero(playback_count)}</span>
        </div>
        <div className="stat">
          <i className="material-icons">favorite</i>
          <span>{this.isZero(favoritings_count)}</span>
        </div>
        <div className="stat">
          <i className="material-icons">chat_bubble</i>
          <span>{this.isZero(comment_count)}</span>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  playback_count: PropTypes.number.isRequired,
};

export default Stats;
