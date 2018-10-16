import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from './../actions/playerActions';
import * as trackActions from './../actions/trackActions';
import * as userActions from './../actions/userActions';

import App from './App';

function mapStateToProps(state) {
  const {
    tracks,
    activeTrack,
    playing,
    nextHref,
    volume,
    user,
    singleTrack,
  } = state.track;

  return {
    activeTrack,
    nextHref,
    playing,
    tracks,
    volume,
    user,
    singleTrack,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userActions: bindActionCreators(userActions, dispatch),
      trackActions: bindActionCreators(trackActions, dispatch),
      playerActions: bindActionCreators(playerActions, dispatch),
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
