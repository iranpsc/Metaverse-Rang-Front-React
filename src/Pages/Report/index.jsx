import React, { useState, useEffect } from "react";
import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import ReportsInfo from "./reports/ReportsInfo";
import { useLocation } from "react-router-dom";
import { ReportStateProvider } from "./reports/GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../Services/Utility/index";


const getTranslation = (index) => getFieldTranslationByNames(index);
const pageTranslations = {
  "sanad-1": "1314",
  "sanad-2": "1316",
  "sanad-3": "1317",
  "profile-1": "62",
  "profile-2": "150",
  "profile-3": "61",
  "settings-1": "639",
  "settings-2": "640",
  "settings-3": "641",
  "settings-4": "95",
  "search-1": "470",
  "search-2": "471",
  "dynasty-1": "111",
  "dynasty-2": "112",
  "dynasty-3": "113",
  "dynasty-4": "114",
  "hour-profit-1": "27",
  "verification-1": "867",
  "verification-2": "868",
  "store-1": "109",
  "store-2": "110",
  "report-1": "1386",
  "report-2": "1386",
};

const titleTranslations = {
  "store": "30",
  "settings": "642",
  "profile": "243",
  "sanad": "241",
  "confirmation": "31",
  "search": "232",
  "dynasty": "234",
  "hour-profit": "236",
  "verification": "237",
  "notifications": "238",
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
  const [subdomain, setSubdomain] = useState(getTranslation("1386"));

  useEffect(() => {
    const extractedTitle = getTitleFromHref(href);
    setTitle(titleTranslations[extractedTitle] ? getTranslation(titleTranslations[extractedTitle]) : getTranslation("188"));
    if (locationPage) {
      setSubdomain(translateLocationPage(locationPage));
    }
  }, [href, locationPage]);

  const tabs = [
    {
      title: getTranslation("1386"),
      content: <ReportsInfo active="error_report" title={title} subdomain={subdomain} />
    },
    {
      title: getTranslation("22"),
      content: <ReportsInfo active="reports_list" title={title} subdomain={subdomain} />
    }
  ];

  const TabPanel = useTabs(tabs);
console.log(getFieldTranslationByNames("241"))
  return (
    <ReportStateProvider>
      <Modal type="modal-section-xl" title={("23")}>
        {TabPanel}
      </Modal>
    </ReportStateProvider>
  );
}
