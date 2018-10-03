import SC from 'soundcloud';
import fetchAsync from '../services/fetchAsync';
import filterArtwork from '../services/filterArtwork';
import { setTracks } from './trackActions';

export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export function fetchUserTracks(session) {
  return async dispatch => {
    const data = await fetchAsync(
      `//api.soundcloud.com/me/tracks?oauth_token=${session.oauth_token}`,
    );
    dispatch(setTracks(filterArtwork(data)));
  };
}

function fetchMe(session) {
  return async dispatch => {
    const data = await fetchAsync(
      `//api.soundcloud.com/me?oauth_token=${session.oauth_token}`,
    );
    dispatch(setUser(data));
    dispatch(fetchUserTracks(session));
  };
}

export function auth() {
  return async dispatch => {
    const session = await SC.connect();
    dispatch(fetchMe(session));
  };
}
