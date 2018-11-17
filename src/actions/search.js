import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };
  //TODO:  Write an asynchronous action to handle a video search!
  var action = {
    type: 'SEARCH',
    // searchYouTube(options, function() {
    //   changeVideoList;
    //   changeVideo;
    // })
  };

};

export default handleVideoSearch;
// function addTodo(text) {
//   return {
//     type: ADD_TODO,
//     text
//   }
// }

// function addTodoWithDispatch(text) {
//   const action = {
//     type: ADD_TODO,
//     text
//   }
//   dispatch(action)
// }