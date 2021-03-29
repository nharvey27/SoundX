import { CLIENT_ID } from "./../constants/auth";
import PlayerControls from "./PlayerControls";
import React from "react";

class Player extends React.Component {
  componentDidUpdate() {
    const audioElement = this.audio;
    const { playing } = this.props;

    if (!audioElement) {
      return;
    }
    playing ? audioElement.play() : audioElement.pause();
    audioElement.volume = this.props.volume;
  }

  setProgress = (event) => {
    const audioElement = this.audio;
    const time = event.clientX / window.innerWidth;
    const { duration } = audioElement;
    audioElement.currentTime = duration * time;
  };

  updateProgress = () => {
    const progressbar = document.getElementById("progress-bar");
    progressbar.style.width = `${(100 / audio.duration) * audio.currentTime}%`;
  };

  render() {
    const { track, tracks } = this.props;
    const index = tracks.indexOf(track);

    if (track === null) {
      return null;
    }

    return (
      <aside className="player">
        <div
          className="progress cursor-pointer"
          onClick={this.setProgress}
          role="presentation"
        >
          <div id="progress-bar" className="progress-bar" />
        </div>
        <audio
          id="audio"
          onTimeUpdate={() => this.updateProgress()}
          ref={(audio) => {
            this.audio = audio;
          }}
          src={`${track.stream_url}?client_id=${CLIENT_ID}`}
        >
          <track />
        </audio>

        <PlayerControls {...this.props} index={index} />
      </aside>
    );
  }
}

export default Player;
