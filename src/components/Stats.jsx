import PropTypes from 'prop-types';
import React from 'react';

const Stats = ({track: {playback_count, favoritings_count, comment_count}}) => {
  let isZero = stat => stat || 0;

  return (
    <div className="flex justify-center">
      <div className="stat">
        <i className="material-icons">play_arrow</i>
        <span>{isZero(playback_count)}</span>
      </div>
      <div className="stat">
        <i className="material-icons">favorite</i>
        <span>{isZero(favoritings_count)}</span>
      </div>
      <div className="stat">
        <i className="material-icons">chat_bubble</i>
        <span>{isZero(comment_count)}</span>
      </div>
    </div>
  );
};

Stats.propTypes = {
  playback_count: PropTypes.number.isRequired,
};

export default Stats;
