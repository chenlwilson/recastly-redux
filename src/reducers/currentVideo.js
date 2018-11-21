import Redux from 'redux';

const CHANGE_VIDEO = 'CHANGE_VIDEO';
var initialState = {
  type: CHANGE_VIDEO,
  video: null
};

var currentVideoReducer = (state = {videoList: [], currentVideo: null}, action) => {
  // //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case CHANGE_VIDEO:
    return Object.assign({}, state, {
      currentVideo: action.video
    });
  default:
    return state;
  }
};

export default currentVideoReducer;
