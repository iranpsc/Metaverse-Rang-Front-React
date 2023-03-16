import React from "react";
import styled from "styled-components";


const Select = styled.select`
  width: 100%;
  position: relative;
  margin-bottom: 24px;
  margin-top: 12px;
  width: 100%;
  text-align: right;
  direction: rtl;
  padding: 8px;
  font-size: 1rem !important;
  height: 50px !important;
  border-radius: 8px !important;
  border: 1px solid #c2c2c2 !important;
  font-family: iransans;
  outline: none;

  &.invalid {
    border: 1px solid red !important;
    box-shadow: 2px 2px 5px 0px #ef58589e;
  }
`;

export default function SelectProvince({onChange, name, error, value, disabled}) {
  return (
    <Select disabled={disabled} name={name} onChange={(e) => onChange(state => ({...state, [e.target.name]: e.target.value}))} className={`${error && 'invalid'}`} value={value}>
      <option value="none">استان خود را انتخاب کنید</option>
      <option value="تهران">تهران</option>
      <option value="گیلان">گیلان</option>
      <option value="آذربایجان شرقی">آذربایجان شرقی</option>
      <option value="خوزستان">خوزستان</option>
      <option value="فارس">فارس</option>
      <option value="اصفهان">اصفهان</option>
      <option value="خراسان رضوی">خراسان رضوی</option>
      <option value="قزوین">قزوین</option>
      <option value="سمنان">سمنان</option>
      <option value="قم">قم</option>
      <option value="مرکزی">مرکزی</option>
      <option value="زنجان">زنجان</option>
      <option value="مازندران">مازندران</option>
      <option value="گلستان">گلستان</option>
      <option value="اردبیل">اردبیل</option>
      <option value="آذربایجان غربی">آذربایجان غربی</option>
      <option value="همدان">همدان</option>
      <option value="کردستان">کردستان</option>
      <option value="کرمانشاه">کرمانشاه</option>
      <option value="لرستان">لرستان</option>
      <option value="بوشهر">بوشهر</option>
      <option value="کرمان">کرمان</option>
      <option value="هرمزگان">هرمزگان</option>
      <option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option>
      <option value="یزد">یزد</option>
      <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
      <option value="ایلام">ایلام</option>
      <option value="کهگلویه و بویراحمد">کهگلویه و بویراحمد</option>
      <option value="خراسان شمالی">خراسان شمالی</option>
      <option value="خراسان جنوبی">خراسان جنوبی</option>
      <option value="البرز">البرز</option>
    </Select>
  );
}
