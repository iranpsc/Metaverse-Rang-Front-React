import Suggestion from "./Suggestion";
import Title from "../../../../../Components/Title";
import meter from "../../../../../Assets/images/profile/meter.png";
import { useState, useEffect } from "react";
import { mainContainer, Wrapper } from "../suggestionStyles";
import useRequest from "../../../../../Services/Hooks/useRequest/index";
import { useLocation } from "react-router-dom"; // استفاده از useLocation
import { convertToPersian, getFieldTranslationByNames } from "../../../../../Services/Utility/index";

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
              image: meter,
              location: item.feature_properties.address,
              code: item.feature_properties.id,
              value: item.feature_properties.price_psc,
              rial: item.price_irr,
              psc: item.price_psc,
              coordinates: item.feature_coordinates || [],
            },
            suggestions_list: [
              {
                id: item.id,
                code: item.buyer.code,
                date: item.created_at,
                rial: item.price_irr,
                psc: item.price_psc,
                percent: "210", // مقدار فرضی
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
  const convertSuggestions = (suggestions) => {
    return suggestions.map((suggestion) => ({
      ...suggestion,
      property: {
        ...suggestion.property,
        code: convertToPersian(suggestion.property.code),
        value: convertToPersian(suggestion.property.value), // بررسی برای null/undefined
        psc: convertToPersian(suggestion.property.psc),
        
      },
      suggestions_list: suggestion.suggestions_list.map((item) => ({
        ...item,
        date: convertToPersian(item.date),
        psc: convertToPersian(item.psc),
        percent: convertToPersian(item.percent),
      })),
    }));
  };

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
        {convertSuggestions(validSuggestions).map((suggestion) => (
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
