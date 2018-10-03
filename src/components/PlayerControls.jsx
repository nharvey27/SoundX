import React from 'react';

class PlayerControls extends React.Component {
  render() {
    const {
      track,
      index,
      tracks,
      playing,
      volume,
      previousTrack,
      togglePlaying,
      nextTrack,
      volumeDown,
      volumeUp,
    } = this.props;
    return (
      <menu className="player__controls">
        <div className="col-md-3 offset-md-2 col-6 player__audio-controls">
          <span
            className="col-xs-4"
            onClick={() => previousTrack(index, tracks)}
            role="button"
            tabIndex={0}>
            <i className="player-icon material-icons">fast_rewind</i>
          </span>
          <span
            className="col-xs-4"
            onClick={() => togglePlaying(!playing)}
            role="button"
            tabIndex={0}>
            {playing ? (
              <i className="player-icon material-icons">pause</i>
            ) : (
              <i className="player-icon material-icons">play_arrow</i>
            )}
          </span>
          <span
            className="col-xs-4"
            onClick={() => nextTrack(index, tracks)}
            role="button"
            tabIndex={0}>
            <i className="player-icon material-icons">fast_forward</i>
          </span>
        </div>
        <div className="col-md-3 col-6">
          <h1 className="player__title player__title__white">{track.title}</h1>
        </div>

        <div className="col-md-3 col-xs-4 d-none d-sm-inline-block">
          <i
            className="player-icon material-icons"
            onClick={() => volumeUp(volume)}
            role="button"
            tabIndex={0}>
            arrow_upward
          </i>
          <span className="player__volume">
            {Math.floor(this.props.volume * 100)}
          </span>
          <i
            className="player-icon material-icons"
            onClick={() => volumeDown(volume)}
            role="button"
            tabIndex={0}>
            arrow_downward
          </i>
        </div>
      </menu>
    );
  }
}

export default PlayerControls;
