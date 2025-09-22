import Suggestion from "./Suggestion";
import Title from "../../../../../components/Title";
import meter from "../../../../../assets/images/profile/meter.png";
import { useState, useEffect, useRef } from "react";
import { convertToPersian, getFieldTranslationByNames } from "../../../../../services/Utility/index";
import useRequest from "../../../../../services/Hooks/useRequest/index";
import { mainContainer, Wrapper } from "../suggestionStyles";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment-jalaali";

const Container = mainContainer;

const SentSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { Request } = useRequest();
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await Request("buy-requests", "GET");
        const data = response?.data?.data;

        if (!Array.isArray(data)) {
          console.error("Invalid data format:", response.data);
          return;
        }

        const formattedSuggestions = data.map((item) => {
          const gracePeriod = item.requested_grace_period;
          let remainingHours = 0,
            remainingMinutes = 0,
            remainingSeconds = 0;

          if (gracePeriod) {
            const graceDate = moment(gracePeriod, "jYYYY/jMM/jDD HH:mm:ss").toDate();
            const diffTime = Math.max(0, graceDate - new Date());

            remainingHours = Math.floor(diffTime / (1000 * 60 * 60));
            remainingMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            remainingSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
          }

          return {
            id: item.id,
            property: {
              image: meter,
              location: item.feature_properties?.address,
              code: item.feature_properties?.id,
              owner: item.seller?.code,
              date: item.created_at,
              value: item.feature_properties?.stability,
              coordinates: item.feature_coordinates || [],
              karbari: item.feature_properties?.karbari,
            },
            suggestions_list: [
              {
                id: item.id,
                code: item.seller?.code,
                date: item.created_at,
                rial: item.price_irr,
                psc: item.price_psc,
                percent: "210",
                initialHours: remainingHours,
                initialMinutes: remainingMinutes,
                initialSeconds: remainingSeconds,
                information: item.note,
              },
            ],
          };
        });

        setSuggestions(formattedSuggestions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSuggestions();
  }, [location]);

  const convertSuggestions = (suggestions) =>
    suggestions.map((suggestion) => ({
      ...suggestion,
      property: {
        ...suggestion.property,
        owner: suggestion.property.owner.toUpperCase(),
        value: convertToPersian(suggestion.property.value),
        code: suggestion.property.code.toUpperCase(),
        date: convertToPersian(suggestion.property.date),
      },
      suggestions_list: suggestion.suggestions_list.map((item) => ({
        ...item,
        rial: convertToPersian(item.rial),
        psc: convertToPersian(item.psc),
      })),
    }));

  const handleRejectProposal = async (suggestionId) => {
    try {
      const response = await Request(`buy-requests/delete/${suggestionId}`, "DELETE", {}, {}, "production");

      if ([200, 204].includes(response.status)) {
        setSuggestions((prev) => prev.filter((s) => s.id !== suggestionId));
      } else {
        console.error("Error deleting suggestion:", response);
      }
    } catch (error) {
    
    }
  };

  return (
    <Container ref={containerRef}>
      <Title right title={getFieldTranslationByNames("765")} />
      <Wrapper>
        {convertSuggestions(suggestions.filter((s) => s.suggestions_list.length > 0)).map((suggestion) => (
          <div key={suggestion.id} id={`suggestion-${suggestion.id}`}>
            <Suggestion {...suggestion} onRejectProposal={handleRejectProposal} />
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SentSuggestion;

