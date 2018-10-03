import React from 'react';

class Callback extends React.Component {
  componentDidMount() {
    window.setTimeout(SC.connectCallback, 1);
  }

  render() {
    return (
      <div>
        <p>This page should close soon run d</p>
      </div>
    );
  }
}

export default Callback;
