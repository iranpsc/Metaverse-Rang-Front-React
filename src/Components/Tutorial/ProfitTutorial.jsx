import React from 'react'
import ProfitIcon from "../../Assets/images/percentage.png"
import ProfitMp4 from '../../Assets/Videos/accumulated-profit.mp4';

export default function ProfitTutorial({ nextPageHandler }) {
  return (
<div id="t14" className="hidden-box-11">
  <div className="img-circle">
    <div className="tw-box-icons">
      <img src={ProfitIcon} className="tw-img-icons-tutorial" alt=''/>
    </div>
  </div>
  <div className="bakhsh-8">
    <video className="json-class-3" src={ProfitMp4} autoPlay loop />
    <div className="text-welcome">
      سود انباشته
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        سود انباشته جمع آوری و ذخیره سود از سرمایه و دارایی ها 
      </div>
      <div className="page-box-color ">
        شما میتوانید با شرکت در چالش ها به پاداش های متفاوتی  دست یابید که در گنجبنه ها مخفی شده اند 
        <br /><br />
        ما برای شما هدایایی آماده کرده ایم که شما میتوانید با اتمام هر چالش به آن دست یابید
      </div>
    </div>
    <div className="container-btn">
      <button  onClick={() => nextPageHandler()}  className="btn-color">بزن
        بریم</button>
    </div>
  </div>
  <div className="class-arrows-3">
  </div>
</div>

  )
}
