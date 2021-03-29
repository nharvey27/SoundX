import filterArtwork from "../services/filterArtwork";
import fetchAsync from "../services/fetchAsync";

export function setTracks(tracks) {
  return {
    type: "TRACKS_SET",
    tracks,
  };
}

export function setPaginationTracks(tracks, oldTracks) {
  return {
    type: "SET_PAGINATION_TRACKS",
    tracks,
    oldTracks,
  };
}

export function setPagination(nextHref) {
  return {
    type: "SET_PAGINATION",
    nextHref,
  };
}

export function setSingleTrack(data) {
  return {
    type: "SET_SINGLE_TRACK",
    singleTrack: data,
  };
}

export function sortLikes(tracks) {
  return {
    type: "SORT_LIKES",
    tracks,
  };
}

export function sortComments(tracks) {
  return {
    type: "SORT_COMMENTS",
    tracks,
  };
}
export function fetchRandom(url) {
  return async (dispatch) => {
    const data = await fetchAsync(url);
    dispatch(setTracks(filterArtwork(data.collection)));
    dispatch(setPagination(data.next_href));
  };
}

export function fetchPaginationTracks(url, oldTracks) {
  return async (dispatch) => {
    const data = await fetchAsync(url);
    dispatch(setPaginationTracks(filterArtwork(data.collection), oldTracks));
    dispatch(setPagination(data.next_href));
  };
}

export function fetchSingleTrack(url) {
  return async (dispatch) => {
    const data = await fetchAsync(url);
    dispatch(setSingleTrack(data));
  };
}
