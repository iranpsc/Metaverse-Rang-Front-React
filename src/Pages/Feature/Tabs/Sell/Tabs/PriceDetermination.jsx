import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import useRequest from "../../../../../services/Hooks/useRequest";
import { UserContext } from "../../../../../services/reducers/UserContext";
import { calculateFee, TimeAgo, ToastError, ToastSuccess } from "../../../../../services/Utility";
import PriceInput from "../../../Components/PriceInput";
import Specification from "../../../Components/Specification";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { Container, Text, Title } from "../../../Styles";


export default function PriceDetermination() {
  const [feature, ] = useContext(FeatureContext);
  const [user, ] = useContext(UserContext);
  const [featureStatus, setFeatureStatus] = useState({});

  useEffect(() => {
    Request(`sell-requests`).then(listResponse => {
      for (let index = 0; index < listResponse?.data?.data.length; index++) {
        const element = listResponse?.data?.data[index];
        if(element.feature_id === feature.id) {
          setFeatureStatus(element);
        }
      }
    })
 
  }, [feature.id])

  const [formData, setFormData] = useState({
    price_irr: calculateFee(feature.properties.price_irr, 80),
    price_psc: calculateFee(feature.properties.price_psc, 80)
  });

  const [errors, setErrors] = useState({
    price_irr: '',
    price_psc: ''
  });

  const Navigate = useNavigate();

  const { Request, HTTP_METHOD } = useRequest();

  const onSubmit = () => {
    if(TimeAgo(user?.birthdate) >= 18) {
      if(formData.price_irr < calculateFee(feature.properties.price_irr, 80)) {
        return setErrors({...errors, price_irr: 'حداقل ارزش معامله 80% قیمت اولیه میباشد '})
      }

      if(formData.price_psc < calculateFee(feature.properties.price_psc, 80)) {
        return setErrors({...errors, price_psc: 'حداقل ارزش معامله 80% قیمت اولیه میباشد '})
      }
    } else {
      if(formData.price_irr < calculateFee(feature.properties.price_irr, 110)) {
        return setErrors({...errors, price_irr: 'حداقل ارزش معامله 110% قیمت اولیه میباشد '})
      }

      if(formData.price_psc < calculateFee(feature.properties.price_psc, 100)) {
        return setErrors({...errors, price_psc: 'حداقل ارزش معامله 110% قیمت اولیه میباشد '})
      }
    }

    setErrors({
      price_irr: '',
      price_psc: ''
    });

    Request(`sell-requests/store/${feature?.id}`, HTTP_METHOD.POST, formData).then(() => {
      ToastSuccess("VOD با موفقیت قیمت گذاری شد.");
    }).catch(error => {
   
        ToastError(error.response.data.message)
      
    })
  }

  const onRemovePrice = () => {
  if(featureStatus.id) {
    Request(`sell-requests/${featureStatus.id}`, HTTP_METHOD.DELETE).then(deleteResponse => {
      setFeatureStatus(null);
    }).catch(error => {
   
        ToastError(error.response.data.message)
      
    })
  }
  }

  return (
    
    <Container>
      {featureStatus?.id ? 
        <Form onSubmit={onRemovePrice}>
          <Submit type="primary" text="حذف قیمت گذاری"/>
        </Form>
      :
      <>
        <Text>
          شما میتوانید ملک خود را به دو صورت ریال و PSC قیمت گذاری نمایید
        </Text>

        <Form onSubmit={onSubmit}>
          <Title>قیمت فروش (ریال)</Title>
          <PriceInput
            onChange={setFormData}
            text="ریال"
            value={formData.price_irr}
            name="price_irr"
            errors={errors}
          />

          <Title>قیمت فروش (PSC)</Title>
          <PriceInput
            onChange={setFormData}
            text="PSC"
            value={formData.price_psc}
            name="price_psc"
            errors={errors}
          />
          <Container
            style={{
              flexDirection: "row",
              gap: "10px",
              width: "50%",
              marginTop: 20,
            }}
          >
            <Specification title={"کارمزد"} value={"5%"} />
            <Specification
              title={"قیمت نهایی"}
              value={`
                ${calculateFee(formData.price_irr ? formData.price_irr : 0)} IRR / ${calculateFee(formData.price_psc ? formData.price_psc : 0)} PSC
              `}
            />
          </Container>
          <Submit
            text="ثبت قیمت"
            type="primary"
            options={{ style: { width: "20%", marginTop: 16 } }}
          />
        </Form>
      </>
    }
    </Container>
  );
}
