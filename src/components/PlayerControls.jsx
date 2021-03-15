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
      <div className="grid grid-cols-3 justify-items-center">
        <div className="">
          <i
            className="material-icons cursor-pointer"
            onClick={() => volumeUp(volume)}
            role="button"
            tabIndex={0}>
            arrow_upward
          </i>
          <span className="">
            {Math.floor(this.props.volume * 100)}
          </span>
          <i
            className="material-icons cursor-pointer"
            onClick={() => volumeDown(volume)}
            role="button"
            tabIndex={0}>
            arrow_downward
          </i>
        </div>
        <div className="">
          <h1 className="text-white">{track.title}</h1>
        </div>
        <div className="">
          <span
            className=""
            onClick={() => previousTrack(index, tracks)}
            role="button"
            tabIndex={0}>
            <i className="material-icons cursor-pointer">fast_rewind</i>
          </span>
          <span
            className=""
            onClick={() => togglePlaying(!playing)}
            role="button"
            tabIndex={0}>
            {playing ? (
              <i className="material-icons cursor-pointer">pause</i>
            ) : (
              <i className="material-icons cursor-pointer">play_arrow</i>
            )}
          </span>
          <span
            className=""
            onClick={() => nextTrack(index, tracks)}
            role="button"
            tabIndex={0}>
            <i className="material-icons cursor-pointer">fast_forward</i>
          </span>
        </div>
      
      </div>
    );
  }
}

export default PlayerControls;
