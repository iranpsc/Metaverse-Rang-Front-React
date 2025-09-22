import React from "react";
import ProfileMp4 from "../../assets/Videos/profile.mp4";
import TiketIcon from "../../assets/images/sanad.png";
import ChatIcon from "../../assets/images/chat.png";
import SettignIcon from "../../assets/images/setting.png";
import Avatar from "../../assets/images/anonymous.png";
import LedIcon from "../../assets/images/led-green.png";
import CertificateIcon from "../../assets/images/certificate.png";
export default function PorofileTutorial({ nextPageHandler }) {
  return (
    <div id="t15" className="hidden-box-12">
      <div className="tw-profile-tuto">
        <div className="tw-prifile-tuto-2">
          <div className="tw-profile-level-tuto">
            <div className="tw-profile-text-tuto">13</div>
          </div>
          <div className="tw-profile-tuto-hm  ">HM-9999999</div>
          <div className="tw-img-medal-tuto">
            <img src={Avatar} className=" tw-shawdow-medel-tuto" alt="" />
          </div>
          <div className="tw-icon-left-profile-tuto">
            <div className="tw-size-icon-profile-tuto">
              <img
                src={TiketIcon}
                className="tw-icon-left-profile-shadow "
                alt=""
              />
            </div>
            <div className="tw-size-icon-profile-tuto">
              <img
                src={ChatIcon}
                className="tw-icon-left-profile-shadow "
                alt=""
              />
            </div>
            <div className="tw-size-icon-profile-tuto">
              <img
                src={SettignIcon}
                className="tw-icon-left-profile-shadow "
                alt=""
              />
            </div>
          </div>
          <div className="tw-img-profile-tuto">
            <img src={Avatar} className=" tw-img-shadow-profile-totu" alt="" />
          </div>
          <div className="tw-led-profile-tuto">
            <img src={LedIcon} className=" tw-led-shadow-profile" alt="" />
          </div>
          <div className="tw-certifict-profile-tuto">
            <img
              src={CertificateIcon}
              className="tw-certice-shadow-profile"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bakhsh-8">
        <video className="json-class-3" src={ProfileMp4} autoPlay loop />
        <div className="text-welcome">پروفایل شما</div>
        <div className="container-text-Education">
          <div className="Education-text">
            خصوصیات شما در این بخش نمایش داده میشود
          </div>
          <div className="page-box-color "></div>
        </div>
        <div className="container-btn">
          <button onClick={() => nextPageHandler()} className="btn-color">
            بزن بریم
          </button>
        </div>
      </div>
      <div className="class-arrows-4"></div>
    </div>
  );
}
