import React, { useState, useEffect } from "react";
import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import ReportsInfo from "./reports/ReportsInfo";
import { useLocation } from "react-router-dom";
import { ReportStateProvider } from "./reports/GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../Services/Utility/index";


const getTranslation = (index) => getFieldTranslationByNames(index);
const pageTranslations = {
  "sanad-1": 14523,
  "sanad-2": 14537,
  "sanad-3": 14544,
  "profile-1": 315,
  "profile-2": 8692,
  "profile-3": 324,
  "settings-1": 7943,
  "settings-2": 7950,
  "settings-3": 7957,
  "settings-4": 655,
  "search-1": 6326,
  "search-2": 6333,
  "dynasty-1": 1555,
  "dynasty-2": 1571,
  "dynasty-3": 1575,
  "dynasty-4": 1579,
  "hour-profit-1": 153,
  "verification-1": 10470,
  "verification-2": 10477,
  "store-1": 731,
  "store-2": 735,
  "report-1": 15300,
  "report-2": 15300,
};

const titleTranslations = {
  "store": 3772,
  "settings": 7965,
  "profile": 3828,
  "sanad": 3814,
  "confirmation": 168,
  "search": 6319,
  "dynasty": 3737,
  "hour-profit": 3751,
  "verification": 3758,
  "notifications": 3779,
};

const translateLocationPage = (page) => {
  const translationId = pageTranslations[page];
  return translationId ? getTranslation(translationId) : page;
};

const getTitleFromHref = (href) => {
  return href ? href.split("/").pop() : "";
};

export default function Report() {
  const location = useLocation();
  const { href, locationPage } = location.state || {};
  const [title, setTitle] = useState();
  const [subdomain, setSubdomain] = useState(getTranslation(15300));

  useEffect(() => {
    const extractedTitle = getTitleFromHref(href);
    setTitle(titleTranslations[extractedTitle] ? getTranslation(titleTranslations[extractedTitle]) : getTranslation(2215));
    if (locationPage) {
      setSubdomain(translateLocationPage(locationPage));
    }
  }, [href, locationPage]);

  const tabs = [
    {
      title: getTranslation(15300),
      content: <ReportsInfo active="error_report" title={title} subdomain={subdomain} />
    },
    {
      title: getTranslation(126),
      content: <ReportsInfo active="reports_list" title={title} subdomain={subdomain} />
    }
  ];

  const TabPanel = useTabs(tabs);

  return (
    <ReportStateProvider>
      <Modal type="modal-section-xl" title={[132]}>
        {TabPanel}
      </Modal>
    </ReportStateProvider>
  );
}
