import { CLIENT_ID } from "../constants/auth";
import { SONGS_ENDPOINT } from "../constants/soundcloud";
import InfiniteScroll from "react-infinite-scroller";
import React, { useEffect } from "react";
import Player from "./Player";
import Track from "./Track";

const Presenter = ({
  actions: {
    playerActions: {
      previousTrack,
      nextTrack,
      togglePlaying,
      volumeDown,
      volumeUp,
      playTrack,
    },
    trackActions,
  },
  nextHref,
  tracks,
  activeTrack,
  playing,
  volume,
}) => {
  const playerProps = {
    tracks,
    playing,
    volume,
    track: activeTrack,
    previousTrack,
    nextTrack,
    togglePlaying,
    volumeUp,
    volumeDown,
  };

  useEffect(() => {
    trackActions.fetchRandom(SONGS_ENDPOINT + CLIENT_ID);
  }, []);

  function fetchSongs() {
    trackActions.fetchPaginationTracks(nextHref, tracks);
  }

  return (
    <>
      <main className="container mx-auto mt-12">
        <InfiniteScroll
          loadMore={fetchSongs}
          hasMore={true || false}
          loader={<div className="loader" />}
        >
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-12">
            {tracks.map((track, _) => (
              <section className="grid justify-center">
                <Track playTrack={playTrack} {...track} />
              </section>
            ))}
          </div>
        </InfiniteScroll>
      </main>
      <div>
        <Player {...playerProps} />
      </div>
    </>
  );
};

export default Presenter;
