import InfiniteScroll from 'react-infinite-scroller';
import React from 'react';
import { CLIENT_ID } from '../constants/auth';
import { SONGS_ENDPOINT } from '../constants/soundcloud';
import Player from './Player';
import SearchLogic from './searchLogic';
import Track from './Track';

class Presenter extends React.Component {
  componentDidMount() {
    this.props.actions.trackActions.fetchRandom(SONGS_ENDPOINT + CLIENT_ID);
  }

  fetchSongs = () => {
    const { tracks } = this.props;
    this.props.actions.trackActions.fetchPaginationTracks(
      this.props.nextHref,
      tracks,
    );
  };

  render() {
    console.log(this.props)
    const { tracks, activeTrack, playing, volume, user } = this.props;
    const {
      playTrack,
      togglePlaying,
      nextTrack,
      previousTrack,
      volumeUp,
      volumeDown,
    } = this.props.actions.playerActions;
    const playerProps = {
      track: activeTrack,
      tracks,
      playing,
      previousTrack,
      nextTrack,
      togglePlaying,
      volume,
      volumeUp,
      volumeDown,
    };
    const filtedTracks = tracks.filter(
      track => track.title.indexOf(this.props.search) !== -1,
    );
    return (
      <React.Fragment>
        <div className="col-md-8 offset-md-2">
          <input
            placeholder="Search"
            className="form-control"
            value={this.props.search}
            onChange={this.props.updateSearch}
          />
        </div>
        <main className="track-container col-md-8 offset-2">
          <InfiniteScroll
            loadMore={this.fetchSongs}
            hasMore={true || false}
            loader={<div className="loader" />}>
            {filtedTracks.map((track, index, array) => (
              <section className="col-md-3">
                <Track playTrack={playTrack} {...track} />
              </section>
            ))}
          </InfiniteScroll>
        </main>
        <div className="col-md-12">
          <Player {...playerProps} />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchLogic(Presenter);
