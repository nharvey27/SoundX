import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const Title = ({ track, track: { title, user } }) => (
  <>
    <figcaption className="text-center text-sm pt-3">
      {user.username}
    </figcaption>
    <Link to={`track/${track.id}`}>
      <figcaption className="text-blue-400 text-center text-xs cursor-pointer">
        {title}
      </figcaption>
    </Link>
  </>
);

Title.propTypes = {
  track: PropTypes.object.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }),
};

export default Title;
