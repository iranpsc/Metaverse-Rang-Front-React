import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import useTabs from "../../services/Hooks/useTabs";
import ReportsInfo from "./reports/ReportsInfo";
import { useLocation } from "react-router-dom";
import { ReportStateProvider } from "./reports/GlobalReportStateProvider";
import { translateLocationPage, getTitleTranslation } from "../../services/TitleManager";
import { getFieldTranslationByNames } from "../../services/Utility";

export default function Report() {
  const location = useLocation();
  const { href, locationPage } = location.state || {};
  
  const [title, setTitle] = useState();
  const [subdomain, setSubdomain] = useState(getTitleTranslation("report-1"));

  useEffect(() => {
    setTitle(getTitleTranslation(href));
    if (locationPage) {
      setSubdomain(translateLocationPage(locationPage));
    }
  }, [href, locationPage]);

  const tabs = [
    {
      title: getFieldTranslationByNames("1386"),
      content: <ReportsInfo active="error_report" title={title} subdomain={subdomain} />
    },
    {
      title: getFieldTranslationByNames("22"),
      content: <ReportsInfo active="reports_list" title={title} subdomain={subdomain} />
    }
  ];

  const TabPanel = useTabs(tabs);

  return (
    <ReportStateProvider>
      <Modal type="modal-section-xl" title={23}>
        {TabPanel}
      </Modal>
    </ReportStateProvider>
  );
}
