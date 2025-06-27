import Suggestion from "./Suggestion";
import Title from "../../../../../Components/Title";
import meter from "../../../../../Assets/images/profile/meter.png";
import { useState, useEffect, useRef } from "react";
import { mainContainer, Wrapper } from "../suggestionStyles";
import useRequest from "../../../../../Services/Hooks/useRequest/index";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment-jalaali";
import { getFieldTranslationByNames, ToastError } from "../../../../../Services/Utility/index";

const Container = mainContainer;
const RecievedSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { Request } = useRequest();
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await Request("buy-requests/recieved", "GET");
        const data = response?.data?.data;

        if (Array.isArray(data)) {
          const formattedSuggestions = data.map((item) => {
            const { area = 0, density = 0, karbari = "", address, id, stability, price_psc } = item.feature_properties || {};
            const gracePeriod = item.requested_grace_period || null;

            const remainingDays = gracePeriod
              ? Math.ceil((moment(gracePeriod, "jYYYY/jMM/jDD HH:mm:ss").toDate() - new Date()) / (1000 * 60 * 60 * 24))
              : null;

            const gracePeriodRemainingDays = remainingDays <= 0 ? 0 : remainingDays;

            const karbariValues = { t: 30000, m: 10000, a: 60000 };
            const karbariValue = karbariValues[karbari] || 0;

            const adjustedIrrPrice = item.price_irr * 0.95;
            const adjustedPscPrice = item.price_psc * 0.95;
            const baseIrrPrice = area * density * karbariValue;
            const totalBaseIrr = baseIrrPrice;
            const totalSuggestedIrr = adjustedPscPrice * 900 + adjustedIrrPrice;
            const totalPriceDiffPercent = totalBaseIrr ? ((totalSuggestedIrr - totalBaseIrr) / totalBaseIrr) * 100 : 0;

            return {
              id: item.id,
              karbari: karbariValue,
              property: {
                image: meter,
                location: address,
                code: id,
                value: stability || 0,
                rial: price_psc > 0 ? 0 : totalBaseIrr,
                psc: isNaN(price_psc) ? "0.00" : Number(price_psc).toFixed(2),
                profile_photo: item.buyer?.profile_photo || "",
                coordinates: item.feature_coordinates || [],
                karbari,
                gracePeriod: gracePeriodRemainingDays,
              },
              suggestions_list: [
                {
                  id: item.id,
                  code: item.buyer?.code,
                  date: item.created_at,
                  rial: adjustedIrrPrice,
                  psc: adjustedPscPrice,
                  percent: totalPriceDiffPercent.toFixed(2),
                  information: item.note || "",
                },
              ],
            };
          });

          setSuggestions(formattedSuggestions);
        } else {
          console.error("Invalid data format from API:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSuggestions();
  }, [location]);

  const handleRejectProposal = async (suggestionId) => {
    try {
      const response = await Request(`buy-requests/reject/${suggestionId}`, "POST");

      if ([200, 204].includes(response.status)) {
        setSuggestions((prev) => prev.filter((s) => s.id !== suggestionId));
      } else {
        console.error("Error deleting suggestion:", response);
      }
    } catch (error) {
   
    }
  };

  const handleAcceptProposal = async (suggestionId, proposerId) => {
    try {
      const response = await Request(`buy-requests/accept/${proposerId}`, "POST");

      if ([200, 204].includes(response.status)) {
        setSuggestions((prev) => prev.map((s) =>
          s.id === suggestionId ? { ...s, suggestions_list: s.suggestions_list.filter((item) => item.id !== proposerId) } : s
        ).filter((s) => s.suggestions_list.length > 0));
      } else {
        console.error("Error accepting suggestion:", response);
      }
    } catch (error) {
     
    }
  };

  const validSuggestions = suggestions.filter((s) => s.suggestions_list.length > 0);

  return (
    <Container ref={containerRef}>
      <Title right title={getFieldTranslationByNames("764")} />
      <Wrapper>
        {validSuggestions.map((s) => (
          <div key={s.id} id={`suggestion-${s.id}`}>
            <Suggestion {...s} onRejectProposal={handleRejectProposal} onAcceptProposal={(pId) => handleAcceptProposal(s.id, pId)} />
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default RecievedSuggestion;