import React from 'react'

export default function IndexTutorial({ nextPageHandler }) {
  return (
  <div id="t1" className="bakhsh-1">
  <video className="json-class-3" src autoPlay loop />
  <div className="text-welcome">
    به متاورس خوش آمدید
  </div>
  <div className="container-text-Education">
    <div className="Education-text">
      آموزش درست برای سرمایه گذاری لازم و ضروری است
    </div>
    <div className="page-box-color ">
      در چند صفحه لایت باکس کوچک نکات ضروری را به شما آموزش میدهیم و در هر بخش اگر سوالی داشتید میتوانید از گزینه
      بالای همان صفحه استفاده کنید
    </div>
  </div>
  <div className="container-btn">
    <button onClick={() => nextPageHandler()} className="btn-color">بزن
      بریم</button>
  </div>
</div>


  )
}
