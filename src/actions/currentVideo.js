var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'CURRENT_VIDEO',
    video
  };

};

export default changeVideo;


// const defaultState = {
//   login: false
// };

// const reducer = (state = defaultState, action) => {
//   // change code below this line
//   if (action.type === 'LOGIN') {
//     return  {
//     login: true
//     }
//     } else {
//       return defaultState
//   };
//   // change code above this line
// };

// const store = Redux.createStore(reducer);

// const loginAction = () => {
//   return {
//     type: 'LOGIN'
//   }
// };