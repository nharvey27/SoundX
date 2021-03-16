import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Title = ({track, track:{title, user}}) => (
  <React.Fragment>
    <figcaption className="text-center text-sm pt-3">
      {user.username}
    </figcaption>
    <Link to={`track/${track.id}`}>
      <figcaption className="text-white text-center text-xs ">{title}</figcaption>
    </Link>
  </React.Fragment>
);

Title.propTypes = {
  track: PropTypes.object.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string
  })
};

export default Title;
