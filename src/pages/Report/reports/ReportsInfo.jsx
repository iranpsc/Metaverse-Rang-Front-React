import ErrorReportTab from "./ErrorReportTab/ErrorReportTab";
import ReportsListTab from "./ReportsListTab/ReportsListTab";

const ReportsInfo = ({ active, title, subdomain }) => {

  if (active === "error_report")
    return <ErrorReportTab title={title} subdomain={subdomain} />;
  if (active === "reports_list") return <ReportsListTab title={title} subdomain={subdomain} />;

  return null;
};

export default ReportsInfo;
