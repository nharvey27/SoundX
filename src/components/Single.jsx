import { CLIENT_ID } from '../constants/auth';
import React from 'react';
import Stats from './Stats';

class Single extends React.Component {
  componentDidMount() {
    const trackId = this.props.location.pathname.slice(7)
    this.props.actions.trackActions.fetchSingleTrack(
      `http://api.soundcloud.com/tracks/${
        trackId
      }?client_id=${CLIENT_ID}`,
    );
  }

  render() {
    const { singleTrack } = this.props;
    return this.props.singleTrack ? (
      <div className="col-md-12 singleTrack">
        <span className="singleTrack__title">{singleTrack.title}</span>
        <img
          className="singleTrack__image image-responsive"
          src={singleTrack.artwork_url.replace(/large/, 'crop')}
          alt=""
        />
        <p className="singleTrack__description">
          {this.props.singleTrack.description}
        </p>
        <Stats track={singleTrack} />
      </div>
    ) : null;
  }
}

export default Single;
