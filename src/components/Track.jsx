import ErrorBoundary from './ErrorBoundary';
import Image from './Image';
import PropTypes from 'prop-types';
import React from 'react';
import Title from './Title';

const Track = props => (
  <ErrorBoundary>
    <figure className="track cursor-pointer ">
      <Image
        playTrack={props.playTrack}
        track={props}
        url={props.artwork_url}
      />
      <Title title={props} track={props} />
    </figure>
  </ErrorBoundary>
);

Track.propTypes = {
  artwork_url: PropTypes.string.isRequired,
  playTrack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Track;
