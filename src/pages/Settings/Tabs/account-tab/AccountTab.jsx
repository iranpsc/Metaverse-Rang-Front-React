import Bank from "./Bank";
import ChangeCard from "./ChangeCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import { getTranslation } from "../../../../services/Utility";
import Container from "../../../../components/Common/Container";
import { Skeleton } from "../../../../components/Skeleton";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 20px;
`;

// اسکلتون کارت Bank (متغیرهای الزامی)
const SkeletonBankCard = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

// اسکلتون کارت ChangeCard (تغییر شماره موبایل)
const SkeletonChangeCard = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SkeletonDivider = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #454545;
`;

const SkeletonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccountTab = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const { Request } = useRequest();

  const [mobileChange, setMobileChange] = useState({
    title: "625",
    warn: "",
    inputs: [
      { id: 1, type: "number", label: "631", value: "" },
      { id: 2, type: "number", label: "34", value: "" },
    ],
  });

  useEffect(() => {
    Request("settings")
      .then((response) => {
        setSettings(response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(settings).length > 0) {
      setMobileChange((prevState) => ({
        ...prevState,
        warn: ` ${settings.phone_reset_count}  ${getTranslation(
          "1364"
        )}`,
      }));
    }
  }, [settings]);

  // اسکلتون لودینگ - دقیقاً شبیه تصویر
  if (loading) {
    return (
      <GridContainer>
        {/* کارت سمت چپ: تغییر شماره موبایل */}
        <SkeletonChangeCard>
          {/* عنوان */}
          <Skeleton width="250px" height="24px" radius="4px" />
          
          {/* متن توضیحی */}
          <Skeleton width="200px" height="14px" radius="4px" />
          
          {/* شماره تلفن جدید */}
          <SkeletonRow>
            <Skeleton width="120px" height="16px" radius="4px" />
            <Skeleton width="80px" height="16px" radius="4px" />
          </SkeletonRow>
          
          {/* تایید */}
          <SkeletonRow>
            <Skeleton width="60px" height="16px" radius="4px" />
            <Skeleton width="80px" height="16px" radius="4px" />
          </SkeletonRow>
          
          {/* دکمه ذخیره با چکباکس */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Skeleton width="20px" height="20px" radius="4px" />
            <Skeleton width="80px" height="16px" radius="4px" />
          </div>
        </SkeletonChangeCard>

        {/* کارت سمت راست: متغیرهای الزامی */}
        <SkeletonBankCard>
          {/* عنوان */}
          <Skeleton width="150px" height="24px" radius="4px" />
          
          {/* شماره کارت */}
          <SkeletonDivider>
            <SkeletonRow>
              <Skeleton width="100px" height="16px" radius="4px" />
              <Skeleton width="40px" height="20px" radius="4px" />
            </SkeletonRow>
          </SkeletonDivider>
          
          {/* زمان تسویه حساب */}
          <SkeletonDivider>
            <div style={{ marginBottom: "8px" }}>
              <Skeleton width="130px" height="16px" radius="4px" />
            </div>
            <SkeletonRow>
              <Skeleton width="140px" height="14px" radius="4px" />
              <Skeleton width="40px" height="20px" radius="4px" />
            </SkeletonRow>
          </SkeletonDivider>
          
          {/* خروج اتوماتیک */}
          <SkeletonDivider>
            <SkeletonRow>
              <Skeleton width="200px" height="16px" radius="4px" />
              <Skeleton width="40px" height="20px" radius="4px" />
            </SkeletonRow>
          </SkeletonDivider>
          
          {/* دکمه ذخیره */}
          <Skeleton width="100%" height="45px" radius="8px" />
        </SkeletonBankCard>
      </GridContainer>
    );
  }

  return (
    <GridContainer>
      <ChangeCard
        title={mobileChange.title}
        warn={mobileChange.warn}
        inputs={mobileChange.inputs}
      />
      <Bank settings={settings} />
    </GridContainer>
  );
};

export default AccountTab;