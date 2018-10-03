export function playTrack(track) {
  return {
    type: 'TRACK_PLAY',
    track,
  };
}

export function togglePlaying(playing) {
  return {
    type: 'TOGGLE_PLAYING',
    playing,
  };
}

export function nextTrack(index, tracks) {
  return {
    type: 'NEXT_TRACK',
    index,
    tracks,
  };
}

export function previousTrack(index, tracks) {
  return {
    type: 'PREVIOUS_TRACK',
    index,
    tracks,
  };
}

export function volumeUp(volume) {
  return {
    type: 'VOLUME_UP',
    volume,
  };
}

export function volumeDown(volume) {
  return {
    type: 'VOLUME_DOWN',
    volume,
  };
}
