import { FiSearch } from "react-icons/fi";
import Input from "./Input";
//import RichText from "./RichText";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../../../../components/Button";
import { getTranslation } from "../../../../services/Utility";
import CustomEditor from "../../../../components/Common/CustomEditor";
import Dropdown from "../../../../components/Common/Dropdown";
import useRequest from "../../../../services/Hooks/useRequest";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 20px;
`;

const Field = styled.div`
  position: relative;
  min-height: 50px;
  border-radius: 5px;
  padding: 8px 10px 8px 15px;
  outline: none;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-grow: 1;
  border: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  align-items: center;
  flex-wrap: nowrap;
  span {
    display: flex;
    align-items: start;
    justify-content: start;
    font-size: 18px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    svg {
      color: ${(props) => props.theme.colors.newColors.shades.title};
      font-size: 24px;
    }
    input {
      width: 100px;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      color: ${(props) => props.theme.colors.newColors.shades.title};
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
const IconButton = styled.span`
  display: flex;
  position: absolute;
  left: 1%;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  cursor: pointer;
  flex-shrink: 0;
  align-self: center;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-width: 0;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  padding: 4px 8px;
  border-radius: 14px;
  font-size: 13px;
  white-space: nowrap;

  span {
    font-size: 14px !important;
    line-height: 1;
    color: ${(props) => props.theme.colors.newColors.otherColors.red};
    cursor: pointer;
  }
`;

const First = styled.div`
  display: flex;

  gap: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const Third = styled.div`
  display: flex;
  gap: 10px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.5rem;
  margin-top: 5px;
  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;
const EditInputs = ({
  hasData,
  inputs,
  setEdit,
  buildingID,
  featureID,
}) => {
  const { Request, HTTP_METHOD } = useRequest();
  const [activity, setActivity] = useState([]);

  const [fields, setFields] = useState({
    activity: [inputs?.first_row_info[0]?.value],
    name: inputs?.first_row_info[1]?.value,
    address: inputs?.second_row_info[0]?.value,
    post: inputs?.third_row_info[0]?.value,
    web: inputs?.third_row_info[1]?.value,
    about: inputs?.target,
  });

  const [errors, setErrors] = useState({
    address: false,
    post: false,
    web: false,
  });

  useEffect(() => {
    Request("isic-codes", HTTP_METHOD.GET)
      .then((res) => {
        setActivity(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const MAX_ACTIVITIES = 3;
  const [activityInput, setActivityInput] = useState("");
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);
  const isLimitReached = fields.activity.length >= MAX_ACTIVITIES;

  const addActivity = (rawValue) => {
    if (isLimitReached) return;

    const value = (rawValue || "").trim();
    if (!value) return;

    setFields((prev) => {
      if (prev.activity.length >= MAX_ACTIVITIES) return prev;
      const alreadyExists = prev.activity.some(
        (item) => item.toLowerCase() === value.toLowerCase(),
      );
      if (alreadyExists) return prev;
      return { ...prev, activity: [...prev.activity, value] };
    });
    setActivityInput("");
  };

  const removeActivity = (index) => {
    setFields((prev) => ({
      ...prev,
      activity: prev.activity.filter((_, i) => i !== index),
    }));
  };

  const handleActivityKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addActivity(activityInput);
    }
  };

  const availableActivityOptions = activity
    .filter(
      (option) =>
        !fields.activity.some(
          (item) => item.toLowerCase() === option.name.toLowerCase(),
        ),
    )
    .map((option) => option.name);

  const isValidWebsite = (url) => {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/i;
    return pattern.test(url);
  };

  const validateFields = (data) => {
    const newErrors = {
      address: data.address?.length > 0 && data.address.length < 10,
      post: data.post?.length > 0 && data.post.length < 10,
      web: data.web?.length > 0 && !isValidWebsite(data.web),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSend = (fields) => {
    if (!validateFields(fields)) return;

    const payload = {
      activity_line: fields.activity.join(","),
      name: fields.name,
      address: fields.address,
      postal_code: fields.post,
      website: fields.web,
      description: fields.about,
      information: fields.information ?? "",
    };
    //console.log("payload", payload);
    try {
      Request(
        `features/${featureID}/build/buildings/${buildingID}`,
        HTTP_METHOD.PATCH,
        payload,
      ).then(() => {});
      setEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <First>
        <Field>
          <TagsWrapper>
            <FiSearch />

            {fields.activity.map((item, index) => (
              <Tag key={`${item}-${index}`}>
                {item}
                <span onClick={() => removeActivity(index)}>×</span>
              </Tag>
            ))}

            {!isLimitReached && (
              <input
                value={activityInput}
                onChange={(e) => setActivityInput(e.target.value)}
                onKeyDown={handleActivityKeyDown}
                maxLength={25}
                placeholder={
                  fields.activity.length === 0 ? getTranslation("360") : ""
                }
              />
            )}
            <IconButton
              disabled={isLimitReached}
              onClick={() => {
                if (isLimitReached) return;
                setIsActivityDropdownOpen((prev) => !prev);
              }}
            >
              +
            </IconButton>
          </TagsWrapper>

          {!isLimitReached && (
            <Dropdown
              options={availableActivityOptions}
              selected={null}
              onSelect={(value) => {
                addActivity(value);
                setIsActivityDropdownOpen(false);
              }}
              searchable
              hideTrigger
              isOpen={isActivityDropdownOpen}
              onOpenChange={setIsActivityDropdownOpen}
            />
          )}
        </Field>
        <Input
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
          key={inputs.first_row_info[1].id}
          placeholder={getTranslation(inputs.first_row_info[1].title)}
        />
      </First>
      <Input
        value={fields.address}
        onChange={(e) => {
          const value = e.target.value;
          setFields({ ...fields, address: value });
          if (errors.address && (value.length === 0 || value.length >= 10)) {
            setErrors((prev) => ({ ...prev, address: false }));
          }
        }}
        placeholder={getTranslation(554)}
        maxLength={100}
        error={errors.address}
      />
      <Third>
        <Input
          type="text"
          inputMode="numeric"
          maxLength={10}
          value={fields.post}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setFields({ ...fields, post: value });
            if (errors.post && (value.length === 0 || value.length >= 10)) {
              setErrors((prev) => ({ ...prev, post: false }));
            }
          }}
          placeholder={getTranslation("363")}
          error={errors.post}
        />
        <Input
          type="url"
          value={fields.web}
          onChange={(e) => {
            const value = e.target.value.replace(/[^\w\-.:/?#=&%]/g, "");
            setFields({ ...fields, web: value });
            if (errors.web && (value.length === 0 || isValidWebsite(value))) {
              setErrors((prev) => ({ ...prev, web: false }));
            }
          }}
          placeholder={getTranslation("364")}
          error={errors.web}
        />
      </Third>
      <CustomEditor
        showToolbar={false}
        border
        value={fields.about}
        placeholder={getTranslation(365)}
        onChange={(val) => setFields({ ...fields, about: val })}
      />
      <Text>{getTranslation("556")}</Text>
      <Button
        edit
        onclick={() => {
          handleSend(fields);
        }}
        label={hasData ? getTranslation("537") : getTranslation("629")}
      />
    </Container>
  );
};

export default EditInputs;
