import Suggestion from "./Suggestion";
import Title from "../../../../../Components/Title";
import meter from "../../../../../Assets/images/profile/meter.png";
import { useState, useEffect } from "react";
import { convertToPersian, getFieldTranslationByNames } from "../../../../../Services/Utility/index";
import useRequest from "../../../../../Services/Hooks/useRequest/index";
import { mainContainer, Wrapper } from "../suggestionStyles";
import {  useLocation } from "react-router-dom"; // اضافه کردن useLocation
import { useNavigate } from "react-router-dom";

const Container = mainContainer;

const SentSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { Request } = useRequest();
  const location = useLocation(); // گرفتن اطلاعات مسیر فعلی
  const navigate = useNavigate(); // تعریف هوک useNavigate
  // درخواست داده‌ها از API
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await Request("buy-requests", "GET");
        //console.log("Received data:", response.data.data);

        if (response.data && Array.isArray(response.data.data)) {
          const formattedSuggestions = response.data.data.map((item) => ({
            id: item.id,
            property: {
              image: meter,
              location: item.feature_properties.address,
              code: item.feature_properties.id,
              owner: item.seller.code,
              date: item.created_at,
              value: item.feature_properties.price_psc,
              rial: item.price_irr,
              psc: item.price_psc,
              coordinates: item.feature_coordinates || [],
            },
            suggestions_list: [
              {
                id: item.id,
                code: item.seller.code,
                date: item.created_at,
                rial: item.price_irr,
                psc: item.price_psc,
                percent: "210", // مقدار فرضی
                initialHours: 0,
                initialMinutes: 0,
                initialSeconds: 0,
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

  // تبدیل داده‌ها به فارسی
  const convertSuggestions = (suggestions) => {
    return suggestions.map((suggestion) => ({
      ...suggestion,
      property: {
        ...suggestion.property,
        value: convertToPersian(suggestion.property.value),
        code: convertToPersian(suggestion.property.code),
        rial: convertToPersian(suggestion.property.rial),
        psc: convertToPersian(suggestion.property.psc),
        date: convertToPersian(suggestion.property.date),
      },
      suggestions_list: suggestion.suggestions_list.map((item) => ({
        ...item,
        code: convertToPersian(item.code),
        date: convertToPersian(item.date),
        rial: convertToPersian(item.rial),
        psc: convertToPersian(item.psc),
        percent: convertToPersian(item.percent),
      })),
    }));
  };

  const handleRejectProposal = async (suggestionId) => {
    try {
      const response = await Request(
        `buy-requests/delete/${suggestionId}`,
        "DELETE",
        {},
        {},
        "production"
      );

      // بررسی وضعیت پاسخ
      if (response.status === 200 || response.status === 204) {
        setSuggestions((prevSuggestions) =>
          prevSuggestions.filter((suggestion) => suggestion.id !== suggestionId)
        );
      } else {
        console.error("Error deleting suggestion:", response);
      }
    } catch (error) {
      console.error("Error caught:", error);
         navigate("confirmation"); // هدایت کاربر به مسیر confirmation

    }
  };

  const validSuggestions = suggestions.filter(
    (suggestion) => suggestion.suggestions_list.length > 0
  );

  return (
    <Container>
     
      <Title right title={getFieldTranslationByNames(9042)} />
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

export default SentSuggestion;