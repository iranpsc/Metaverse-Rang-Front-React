import Suggestion from "./Suggestion";
import Title from "../../../../../Components/Title";
import meter from "../../../../../Assets/images/profile/meter.png";
import { useState, useEffect } from "react";
import { mainContainer, Wrapper } from "../suggestionStyles";
import useRequest from "../../../../../Services/Hooks/useRequest/index";
import { useLocation } from "react-router-dom"; // استفاده از useLocation

const Container = mainContainer;

const RecievedSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { Request } = useRequest();
  const location = useLocation(); // گرفتن اطلاعات مسیر فعلی

  // درخواست داده‌ها از API
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await Request("buy-requests/recieved", "GET");
        console.log("Received data:", response.data.data);
  
        if (response.data && Array.isArray(response.data.data)) {
          const formattedSuggestions = response.data.data.map((item) => ({
            id: item.id,
            property: {
              image: meter || 444,
              location: item.feature_properties.address || 444,
              code: item.feature_properties.id || 444,
              value: item.feature_properties.price_psc || 444,
              rial: item.price_irr || 444,
              psc: item.price_psc || 444,
              coordinates: item.feature_coordinates || [],
            },
            suggestions_list: [
              {
                id: item.id || 444,
                code: item.buyer.code || 444,
                date: item.created_at || 444,
                rial: item.price_irr || 444,
                psc: item.price_psc || 444,
                percent: "210" || 444, // مقدار فرضی
                information: item.note,
              },
            ],
          }));
          setSuggestions(formattedSuggestions); // ذخیره داده‌ها در state
        } else {
          console.error("Invalid data format from API:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchSuggestions();
  }, [location]);

  const handleRejectProposal = (suggestionId, proposerId) => {
    setSuggestions((prevSuggestions) =>
      prevSuggestions.map((suggestion) =>
        suggestion.id === suggestionId
          ? {
              ...suggestion,
              suggestions_list: suggestion.suggestions_list.filter(
                (proposer) => proposer.id !== proposerId
              ),
            }
          : suggestion
      )
    );
  };

  const validSuggestions = suggestions.filter(
    (suggestion) => suggestion.suggestions_list.length > 0
  );

  return (
    <Container>
      <Title right title="پیشنهادات دریافتی" /> {/* عنوان به فارسی */}
      <Wrapper>
        {validSuggestions.map((suggestion) => (
          <Suggestion
            key={suggestion.id}
            {...suggestion}
            onRejectProposal={handleRejectProposal}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default RecievedSuggestion;
