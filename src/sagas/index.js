import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews () {
  const json = [
    {
      title: "This is title news 1",
      urlToImage: "http://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg",
      description: "this is description news 2",
      url: "https://google.com"
    },
    {
      title: "This is title news 2",
      urlToImage: "https://soikeom88.com/wp-content/uploads/2019/03/girl-xinh-goi-cam-9.jpg",
      description: "this is description news 2",
      url: "https://google.com"
    },
    {
      title: "This is title news 3",
      urlToImage: "http://a24h.vn/wp-content/uploads/2018/07/img_9166_1530865282_width650height433_evvz.jpg",
      description: "this is description news 3",
      url: "https://google.com"
    },
  ]
   
  console.log(json);
  yield put ({ type: "NEWS_RECEIVED", json: json, });
}

function* actionWatcher () {
  yield takeLatest ('GET_NEWS', fetchNews )
}

export default function* rootSaga () {
  yield all ([
    actionWatcher(), 
  ]);
}
