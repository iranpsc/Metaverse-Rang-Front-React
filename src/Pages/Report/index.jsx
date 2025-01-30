import React, { useState, useEffect } from "react";
import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import ReportsInfo from "./reports/ReportsInfo";
import { useLocation } from "react-router-dom";
import { ReportStateProvider } from "./reports/GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../Services/Utility/index";
export default function Report() {
  const location = useLocation();
  const { href, locationPage } = location.state || {};
  getFieldTranslationByNames("footer-menu", "metaverse color")
  const [title, setTitle] = useState();
  const [subdomain, setSubdomain] = useState(getFieldTranslationByNames("report", "error report"));
  const getTitleFromHref = (href) => {
    return href ? href.split("/").pop() : "";
  };
  const translateLocationPage = (page) => {
    const translations = {
      "sanad-1": getFieldTranslationByNames("send-vod", "writing the document"),
      "sanad-2": getFieldTranslationByNames("send-vod", "list of documents"),
      "sanad-3": getFieldTranslationByNames("send-vod", "note"),
      "profile-1": getFieldTranslationByNames("citizenship-account", "general"),
      "profile-2": getFieldTranslationByNames("citizenship-account", "property"),
      "profile-3": getFieldTranslationByNames("citizenship-account", "transactions"),
      "settings-1": getFieldTranslationByNames("setting", "general settings"),
      "settings-2": getFieldTranslationByNames("setting", "access management"),
      "settings-3": getFieldTranslationByNames("setting", "privacy"),
      "settings-4": getFieldTranslationByNames("citizenship-account", "about me"),
      "search-1": getFieldTranslationByNames("search-in-metarang", "citizen search"),
      "search-2": getFieldTranslationByNames("search-in-metarang", "property search"),
      "dynasty-1": getFieldTranslationByNames("dynasty", "family dynasty"),
      "dynasty-2": getFieldTranslationByNames("dynasty", "members"),
      "dynasty-3":getFieldTranslationByNames("dynasty", "submitted request") ,
      "dynasty-4": getFieldTranslationByNames("dynasty", "request received"),
      "hour-profit-1": getFieldTranslationByNames("hour-meter-profit", "property interest"),
      "verification-1": getFieldTranslationByNames("authentication", "authentication"),
      "verification-2": getFieldTranslationByNames("authentication", "bank verification"),
      "store-1": getFieldTranslationByNames("store", "tools"),
      "store-2": getFieldTranslationByNames("store", "currencies"),
      "report-1": getFieldTranslationByNames("report", "error report"),
      "report-2": getFieldTranslationByNames("report", "error report"),
      
    };
    
    return translations[page] || page; 
  };
  const setInitialValues = () => {
    const extractedTitle = getTitleFromHref(href);
    const titleTranslations = {
      "store": getFieldTranslationByNames("store", "store"),
      "settings": getFieldTranslationByNames("setting", "settings"),
      "profile": getFieldTranslationByNames("central-page", "profile"),
      "sanad": getFieldTranslationByNames("central-page", "send document"),
      "confirmation": getFieldTranslationByNames("central-page", "account security"),
      "search": getFieldTranslationByNames("central-page", "central search"),
      "dynasty": getFieldTranslationByNames("central-page", "family tree"),
      "hour-profit": getFieldTranslationByNames("central-page", "accumulated earnings"),
      "verification": getFieldTranslationByNames("central-page", "identify verification"),
      "notifications": getFieldTranslationByNames("notification", "notifications"),
    };

    setTitle(titleTranslations[extractedTitle] || getFieldTranslationByNames("footer-menu", "metaverse color"));

    if (locationPage && locationPage !== "") {
      setSubdomain(translateLocationPage(locationPage));
    }
  };

  useEffect(() => {
    setInitialValues(); 
  }, [href, locationPage]);

  const tabs = [
    {
      title: getFieldTranslationByNames("report", "error report"),
      content: <ReportsInfo active="error_report" title={title} subdomain={subdomain} />
    },
    {
      title: getFieldTranslationByNames("report", "list of reports"),
      content: <ReportsInfo active="reports_list" title={title} subdomain={subdomain} />
    }
  ];

  const TabPanel = useTabs(tabs);

  return (
    <ReportStateProvider>
      <Modal type="modal-section-xl" title={["central-page", "reports"]}>
        {TabPanel}
      </Modal>
    </ReportStateProvider>
  );
}
