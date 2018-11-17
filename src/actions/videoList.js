var changeVideoList = (videos) => {
  //TODO:  Return some action object to change the list of videos in VideoList.
  return {
    type: 'VIDEO_LIST',
    videos
  };
};

export default changeVideoList;
