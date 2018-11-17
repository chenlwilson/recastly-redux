import Redux from 'redux';

var initialState = {
  type: CHANGE_VIDEO,
  video
};

var currentVideoReducer = (state = initialState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
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
