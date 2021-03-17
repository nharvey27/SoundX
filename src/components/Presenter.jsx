import { CLIENT_ID } from '../constants/auth';
import { SONGS_ENDPOINT } from '../constants/soundcloud';
import InfiniteScroll from 'react-infinite-scroller';
import Player from './Player';
import React from 'react';
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
      <>
        <div className="grid grid-cols-11 text-black">
          <input
            placeholder="Search"
            className="grid-cols-4 col-start-6"
            value={this.props.search}
            onChange={this.props.updateSearch}
          />
        </div>
        <main className="container mx-auto mt-12">
          <InfiniteScroll
            loadMore={this.fetchSongs}
            hasMore={true || false}
            loader={<div className="loader" />
            }>
              <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-12">

            {filtedTracks.map((track, index, array) => (
              <section className="grid justify-center">
                <Track playTrack={playTrack} {...track} />
              </section>
            ))}
            </div>
          </InfiniteScroll>
        </main>
        <div className="">
          <Player {...playerProps} />
        </div>
      </>
    );
  }
}

export default SearchLogic(Presenter);
