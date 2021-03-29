import { CLIENT_ID } from "../constants/auth";
import { SONGS_ENDPOINT } from "../constants/soundcloud";
import InfiniteScroll from "react-infinite-scroller";
import React, { useEffect, useState } from "react";
import Player from "./Player";
import Track from "./Track";
import SearchLogic from "./SearchLogic";

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

  const [search, updateSearch] = useState("");

  const searchHandler = (value) => {
    updateSearch(value);
  };

  let filteredTracks = tracks.filter(
    (track) => track.title.indexOf(search) !== -1
  );

  return (
    <>
      <div className="text-center">
        <SearchLogic searchHandler={searchHandler} />
      </div>

      <main className="container mx-auto mt-12">
        <InfiniteScroll
          loadMore={fetchSongs}
          hasMore={search === ""}
          loader={<div className="loader" />}
        >
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-12">
            {(search === "" ? tracks : filteredTracks).map((track, _) => (
              <section key={track.id} className="grid justify-center">
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
