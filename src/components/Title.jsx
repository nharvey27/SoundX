import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Title = props => (
  <React.Fragment>
    <figcaption className="text-center text-sm pt-3">
      {props.track.user.username}
    </figcaption>
    <Link to={`track/${props.track.id}`}>
      <figcaption className="text-white text-center text-xs ">{props.title}</figcaption>
    </Link>
  </React.Fragment>
);

Title.propTypes = {
  id: PropTypes.number.isRequired,
  track: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
