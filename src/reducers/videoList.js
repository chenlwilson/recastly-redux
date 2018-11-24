import Redux from 'redux';

const CHANGE_VIDEO_LIST = 'CHANGE_VIDEO_LIST';
// var initialState = {
//   type: 'CHANGE_VIDEO_LIST',
//   videos
// };

var videoListReducer = (state = [], action) => {
  // //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case CHANGE_VIDEO_LIST:
    return action.videos;
  default:
    return state;
  }
};

export default videoListReducer;
