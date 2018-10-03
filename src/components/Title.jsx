import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

const Title = props => (
  <React.Fragment>
    <figcaption className="track__username">
      {props.track.user.username}
    </figcaption>
    <Link to={`track/${props.track.id}`}>
      <figcaption className="track__title">{props.title}</figcaption>
    </Link>
  </React.Fragment>
);

Title.propTypes = {
  id: PropTypes.number.isRequired,
  track: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
