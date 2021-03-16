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
      <div className="container mx-auto text-center">
        <span className="">{singleTrack.title}</span>
        <img
          className="m-auto image-responsive"
          src={singleTrack.artwork_url.replace(/large/, 'crop')}
          alt=""
        />
        <p>
          {this.props.singleTrack.description}
        </p>
        <Stats track={singleTrack} />
      </div>
    ) : null;
  }
}

export default Single;
