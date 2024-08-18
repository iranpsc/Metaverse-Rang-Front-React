import { GrLocation } from "react-icons/gr";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoLink } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import PhysicEdit from "./PhysicEdit";
import PhysicInfo from "./PhysicInfo";
import { TbPhoto } from "react-icons/tb";
import { useEffect, useState } from "react";

const rows_inputs = {
  first_row_info: [
    {
      id: 1,
      title: "رشته فعالیت",
      value: "QA31-10789",
      icon: <MdOutlineHome />,
    },
    {
      id: 2,
      title: "نام مجموعه",
      value: "QA31-10789",
      icon: <HiOutlineBuildingOffice />,
    },
  ],
  second_row_info: {
    id: 1,
    title: "آدرس فیزیکی مجموعه",
    value: "تهران، خیابان انقلاب، کوی گلها، ساختمان بهاران ",
    icon: <GrLocation />,
  },
  third_row_info: [
    {
      id: 1,
      title: "کد پستی فیزیکی مجموعه",
      value: "۱۲",
      icon: <TbPhoto />,
    },
    {
      id: 2,
      title: "آدرس وب سایت",
      value: "۲۳۲.۴۴",
      icon: <IoLink />,
    },
  ],
  target:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
};
const PhysicTab = ({ owner }) => {
  const [edit, setEdit] = useState(false);
  const [inputs, setInputs] = useState(rows_inputs);

  if (!edit)
    return <PhysicInfo inputs={inputs} setEdit={setEdit} edit={owner} />;
  if (edit)
    return (
      <PhysicEdit setEdit={setEdit} inputs={inputs} setInputs={setInputs} />
    );
};

export default PhysicTab;
