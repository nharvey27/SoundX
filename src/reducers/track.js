const initialState = {
  tracks: [],
  activeTrack: null,
  playing: true,
  volume: 0.5,
  user: null,
  singleTrack: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRACKS_SET':
      return setTracks(state, action);
    case 'SET_PAGINATION_TRACKS':
      return setPaginationTracks(state, action);
    case 'SET_PAGINATION':
      return setPagination(state, action);
    case 'SET_SINGLE_TRACK':
      return setSingleTrack(state, action);
    case 'TRACK_PLAY':
      return setPlay(state, action);
    case 'SORT_LIKES':
      return sortLikes(state, action);
    case 'SORT_COMMENTS':
      return sortComments(state, action);
    case 'TOGGLE_PLAYING':
      return togglePlaying(state, action.playing);
    case 'NEXT_TRACK':
      return nextTrack(state, action);
    case 'PREVIOUS_TRACK':
      return previousTrack(state, action);
    case 'VOLUME_UP':
      return volumeUp(state, action);
    case 'VOLUME_DOWN':
      return volumeDown(state, action);
    case 'SET_USER':
      return setUser(state, action);
  }
  return state;
};

const setTracks = (state, action) => {
  const { tracks } = action;
  return { ...state, tracks };
};

const setPaginationTracks = (state, action) => {
  var { tracks, oldTracks } = action;
  var newTracks = [...oldTracks, ...tracks];
  return { ...state, tracks: newTracks };
};

const setSingleTrack = (state, action) => {
  return { ...state, singleTrack: action.singleTrack };
};

const setPagination = (state, action) => {
  const { nextHref } = action;
  return { ...state, nextHref };
};

const setPlay = (state, action) => {
  const { track } = action;
  return { ...state, activeTrack: track };
};

const sortLikes = (state, action) => {
  var { tracks } = action;
  var tracks = tracks.sort((a, b) => {
    return b.likes_count - a.likes_count;
  });
  return { tracks };
};

const sortComments = (state, action) => {
  var { tracks } = action;
  var tracks = tracks.sort((a, b) => {
    return b.comment_count - a.coumment_count;
  });
  return { tracks };
};

const togglePlaying = (state, playing) => {
  return { ...state, playing };
};

const nextTrack = (state, action) => {
  const { index, tracks } = action;
  return { ...state, activeTrack: tracks[index + 1] };
};

const previousTrack = (state, action) => {
  const { index, tracks } = action;
  return { ...state, activeTrack: tracks[index - 1] };
};

const volumeUp = (state, action) => {
  const volume = action.volume + 0.1;
  return { ...state, volume };
};

const volumeDown = (state, action) => {
  const volume = action.volume - 0.1;
  return { ...state, volume };
};

const setUser = (state, action) => {
  const user = action.user;
  return { ...state, user };
};
