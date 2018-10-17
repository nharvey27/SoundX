import ErrorBoundary from './ErrorBoundary';
import Image from './Image';
import PropTypes from 'prop-types';
import React from 'react';
import Title from './Title';

const Track = props => (
  <ErrorBoundary>
    <figure className="track">
      <Image
        playTrack={props.playTrack}
        track={props}
        url={props.artwork_url}
      />
      <Title title={props.title} track={props} />
      <i
        onClick={() => props.playTrack(props)}
        className="track__play-icon material-icons">
        play_arrow
      </i>
    </figure>
  </ErrorBoundary>
);

Track.propTypes = {
  artwork_url: PropTypes.string.isRequired,
  playTrack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Track;
