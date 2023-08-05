import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Collapses from "./Component/collapse";
import Toggle from "../../../../Components/Toggle";
import useRequest from "../../../../Services/Hooks/useRequest";
import { ToastError } from "../../../../Services/Utility";
const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: end;
  flex-direction: column;
  overflow-y: auto;
  gap: 20px;
  padding: 10px 0;
`;

const Privacy = () => {
  const [data, setData] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    Request("privacy").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const dataToggle = {
    مشخصات_حقیقی: {
      nationality: "ملیت",
      birthdate: "تاریخ تولد",
      phone: "شماره تماس",
      email: "ایمیل",
      address: "آدرس",
      fname: "نام پدر",
      lname: "نام خانوادگی",
      name: "نام",
    },

    مشخصات_شهروندی: {
      about: "درباره",
      position: "موقعیت یا سمت",
      registered_at: "تاریخ عضویت",
      level: "سطح",
      score: "امتیاز",
      avatar: "آواتار",
      occupation: "شغل",
      education: "تحصیلات",
      loved_city: "شهرمورد علاقه",
      loved_country: "کشور موردعلاقه",
      loved_language: "زبان مورد علاقه",
      prediction: "پیشبینی",
      memory: "خاطره دل انگیز",
      passions: "علایق",
      licenses: "مجوزات",
      license_score: "امتیاز مجوزات",
    },

    املاک_و_مستغلات: {
      amoozeshi_features: "vod های آموزشی",
      maskoni_features: "vod های مسکونی",
      tejari_features: "vod های تجاری",
      gardeshgari_features: "vod های گردشگری",
      fazasabz_features: "vod های فضای سبز",
      behdashti_features: "vod های بهداشتی",
      edari_features: "vod های اداری",
      nemayeshgah_features: "vod های نمایشگاه",
    },

    دنبال_شوندگان: {
      following: "لیست دنبال شوندگان",
      following_count: "تعداد دنبال شوندگان",
    },

    دنبال_کنندگان: {
      followers: "لیست دنبال کنندگان",
      followers_count: "تعداد دنبال کنندگان",
    },

    مجوزات_دریافتی: {
      establish_store_license: "مجوز ایجاد فروشگاه",
      establish_union_license: "مجوز ایجاد اتحاد",
      establish_taxi_license: "مجوز ایجاد تاکسی",
      establish_amoozeshgah_license: "مجوز ایجاد آموزشگاه",
      reporter_license: "مجوز خبرنگار",
      cooporation_license: "مجوز مشارکت کننده",
      developer_license: "مجوز توسعه دهنده",
      inspection_license: "مجوز بارزس",
      trading_license: "مجوز تاجر",
      lawyer_license: "مجوز وکیل",
      city_council_license: "مجوز شهردار",
      governer_license: "مجوز قانون گذار",
      ostandar_license: "مجوز استاندار",
      level_one_judge_license: "مجوز وزیر",
      gate_license: "مجوز دروازه",
    },

    تراکنش_ها: {
      blue_transactions: "عدم نمایش تراکنش های رنگ آبی",
      yellow_transactions: "عدم نمایش تراکنش های رنگ زرد",
      red_transactions: "عدم نمایش تراکنش های رنگ قرمز",
      sold_features: "عدم نمایش املاک فروخته شده",
      bought_features: "عدم نمایش املاک خریداری شده",
      irr_transactions: "عدم نمایش تراکنش های ریالی",
      psc_transactions: "عدم نمایش تراکنش های PSC",
      sold_products: "عدم نمایش محصول فروخته شده",
      bought_products: "عدم نمایش محصول خریداری شده",
    },

    پاداش_های_دریافتی: {
      recieved_yellow_prizes: "عدم نمایش پاداش دریافتی رنگ زرد",
      recieved_blue_prizes: "عدم نمایش پاداش دریافتی رنگ آبی",
      recieved_red_prizes: "عدم نمایش پاداش دریافتی رنگ قرمز",
      recieved_irr_prizes: "عدم نمایش پاداش دریافتی ریال",
      recieved_psc_prizes: "عدم نمایش پاداش دریافتی PSC",
      paid_psc_fine: "psc پرداخت شده",
      paid_irr_fine: "ریال پرداخت شده",
      recieved_satisfaction_prizes: "دریافت پاداش رضایت",
    },

    متعلقات_شهروند: {
      bought_golden_keys: "عدم نمایش کلید طلایی خریداری شده",
      used_golden_keys: "عدم نمایش کلید های طلایی مصرف شده",
      recieved_golden_keys: "عدم نمایش کلید طلایی دریافت شده",
      bought_bronze_keys: "عدم نمایش کلید برنز خریداری شده",
      used_bronz_keys: "عدم نمایش کلید های برنز مصرف شده",
      recieved_bronz_keys: "عدم نمایش کلید برنز دریافت شده",
    },

    تخلفات: {
      violations: "تخلفات",
      negative_score: "جمع امتیاز منفی",
      breaking_laws: "نقض قوانین",
      complaint: "شکایات",
      warnings: "اخطاریه",
      life_style: "عدم نمایش وضعیت زندگی",
    },

    سلسله_خانوادگی: {
      dynasty_members_photo: "نمایش تصویر اعضای سلسله",
      dynasty_members_info: "نمایش مشخصات اعضای سلسله",
    },

    پاداش_سلسله: {
      recieved_dynasty_satisfaction_prizes: "نمایش پاداش رضایت",
      recieved_dynasty_data_storage_prizes: "نمایش پاداش ذخیره اطلاعات شخصی",
      recieved_dynasty_accumulated_capital_reserve_prizes:
        "نمایش پاداش ذخیره سرمایه انباشته",
      recieved_dynasty_referral_profit_prizes:
        "نمایش پاداش افزایش سود از معرفی",
      referral_profit: "سود رفرال",
    },

    مجوزات: {
      commited_crimes: "عدم نمایش جرایم مرتکب شده",
      irr_income: "عدم نمایش درآمد کل ریال",
      psc_income: "عدم نمایش درآمد کل PSC",
      all_licenses: "عدم نمایش تعداد کل مجوزات",
    },
  };

  const result = Object.entries(dataToggle).map(([section, sectionData]) => {
    const sectionDataArray = data
      .filter((item) => sectionData[item.name])
      .map((item) => ({
        name: item.name,
        display: item.display,
        nameDisplay: sectionData[item.name],
      }));

    return {
      [section]: sectionDataArray,
    };
  });

  const onChangeHandler = (name, value) => {
    Request("privacy", HTTP_METHOD.POST, {
      setting: name,
      value: Number(!value),
    })
      .then(() => {
        setData((prevData) =>
          prevData.map((item) =>
            item.name === name ? { ...item, display: Number(!value) } : item
          )
        );
      })
      .catch(() => {
        ToastError("لطفا بعدا تلاش کنید ");
      });
  };
  return (
    <Container>
      {result.map((section) => (
        <Collapses title={Object.keys(section)[0].replace("_", " ")}>
          {section[Object.keys(section)[0]].map((item) => (
            <Toggle
              key={item.name}
              text={item.nameDisplay}
              value={item.display}
              name={item.name}
              onChange={() => onChangeHandler(item.name, item.display)}
              privacy
            />
          ))}
        </Collapses>
      ))}
    </Container>
  );
};

export default Privacy;
