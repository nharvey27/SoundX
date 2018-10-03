import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  handleLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { track, url, playTrack } = this.props;
    const miniUrl = url.replace(/large/, 'mini');
    const largeUrl = url.replace(/large/, 't300x300');
    const imageFactory = url => (
      <img
        alt=""
        onLoad={() => this.handleLoad()}
        onClick={() => playTrack(track)}
        className="track__image "
        src={url}
      />
    );
    return this.state.loaded ? imageFactory(largeUrl) : imageFactory(miniUrl);
  }
}

export default Image;
