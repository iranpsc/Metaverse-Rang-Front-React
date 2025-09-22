import Toggle from "../../../../../Components/Toggle";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import styled from "styled-components";
const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

const Section = styled.div``;
export default function GeneralPremission({ generalSettings, setGeneralSettings, onSubmit }) {
    return (
      <Form onSubmit={onSubmit} options={{ style: { height: "100%" } }}>
        <Container>
          <Section>
            <Toggle
              text="قابلیت خرید از فروشگاه متارنگ"
              onChange={setGeneralSettings}
              value={generalSettings.BFR}
              name="BFR"
            />
  
            <Toggle
              text="قابلیت فروش املاک ومستغلات در متارنگ"
              onChange={setGeneralSettings}
              value={generalSettings.SF}
              name="SF"
            />
  
            <Toggle
              text="قابلیت خارج کردن سرمایه از متارنگ"
              onChange={setGeneralSettings}
              value={generalSettings.W}
              name="W"
            />
  
            <Toggle
              text="قابلیت ورود به اتحاد ها"
              onChange={setGeneralSettings}
              value={generalSettings.JU}
              name="JU"
            />
  
            <Toggle
              text="قابلیت مدیریت  سلسه "
              onChange={setGeneralSettings}
              value={generalSettings.DM}
              name="DM"
            />
          </Section>
  
          <Section>
            <Toggle
              text="قابلیت شرکت در پروژه های اتحادی"
              onChange={setGeneralSettings}
              value={generalSettings.PIUP}
              name="PIUP"
            />
  
            <Toggle
              text="قابلیت شرکت درچالش ه"
              onChange={setGeneralSettings}
              value={generalSettings.PITC}
              name="PITC"
            />
  
            <Toggle
              text="قابلیت شرکت در مسابقات "
              onChange={setGeneralSettings}
              value={generalSettings.PIC}
              name="PIC"
            />
  
            <Toggle
              text="قابلیت تاسیس فروشگاه یا دفنر کار"
              onChange={setGeneralSettings}
              value={generalSettings.ESOO}
              name="ESOO"
            />
  
            <Toggle
              text="قابلیت همکاری در ساخت بنا"
              onChange={setGeneralSettings}
              value={generalSettings.COTB}
              name="COTB"
            />
          </Section>
        </Container>
  
        <Submit
          text="بروز رسانی"
          type="primary"
          options={{
            style: {
              marginBottom: 32,
              width: 735,
            },
          }}
        />
      </Form>
    );
  }
  