import { useState } from "react";
import IconAdviser from "../../../Assets/images/robot.png";
import ToolTip from "../../../Components/Tooltip";
import "./Adviser.css";

export default function AdviserIcon() {
  const [open, setOpen] = useState(false);

  return (
    <div className="tw-accordion-cont">
      <ToolTip
        Chidren={
          <img
            src={IconAdviser}
            alt=""
            className="tw-icon-acc cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        }
        TitleToltip={"راهنمای VOD"}
        ContentToltip={"توضیحات  VOD"}
        classNamePosstion={"tw-righticon"}
      />

      <div
        className={`${
          !open && "tw-close-accor"
        } accordion__adviser__open container-asli`}
      >
        <div className="position-icon accordion">
          <div className="container-slide  ">
            <div className=" tw-modal-container show-slide gra-bg">
              <div className=" container-box">
                <div className="w-box    ">
                  <div className="box-1 "> </div>
                  <div className="position-text">
                    <p className="class-text">
                      VOD آموزشی خریداری شده قیمت گذاری شده
                    </p>
                  </div>
                </div>
                <div className="w-box  ">
                  <div className="box-2 "> </div>
                  <div className="position-text">
                    <p className="class-text">
                      VOD مسکونی خریداری شده قیمت گذاری شده
                    </p>
                  </div>
                </div>
                <div className="w-box  ">
                  <div className="box-3 "> </div>
                  <div className="position-text">
                    <p className="class-text">
                      VOD تجاری خریداری شده قیمت گذاری شده
                    </p>
                  </div>
                </div>
                <div className="w-box">
                  <div>
                    <div className="  box-4  ">
                      <div className="inside-box-4 pattern-horizontal-stripes-sm "></div>
                      <div className="position-inside-box" />
                    </div>
                    <div className="position-text">
                      <p className="class-text">
                        VOD آموزشی پیش خرید یا قفل شده
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-box">
                  <div>
                    <div className=" box-5    ">
                      <div className="inside-box-5 pattern-horizontal-stripes-sm"></div>
                      <div className="position-inside-box" />
                    </div>
                  </div>
                  <div className="position-text">
                    <p className="class-text">
                      VOD آموزشی پیش خرید یا قفل شده
                    </p>
                  </div>
                </div>
                <div className="w-box">
                  <div>
                    <div className="box-6   ">
                      <div className="pattern-horizontal-stripes-sm  inside-box-6"></div>
                      <div className="position-inside-box " />
                    </div>
                  </div>
                  <div className="position-text">
                    <p className="class-text">
                      VOD آموزشی پیش خرید یا قفل شده
                    </p>
                  </div>
                </div>
                <div className="w-box">
                  <div className="box-7 "> </div>
                  <div className="position-text">
                    <p className="class-text">VOD آموزشی آزاد</p>
                  </div>
                </div>
                <div className="w-box">
                  <div className="box-8  "> </div>
                  <div className="position-text">
                    <p className="class-text">VOD مسکونی آزاد</p>
                  </div>
                </div>
                <div className="w-box">
                  <div className="box-9"> </div>
                  <div className="position-text">
                    <p className="class-text">VOD تجاری آزاد</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
