import { useEffect, useState, useTransition } from "react";
import styled from "styled-components";
import SearchIcon from "../../../Assets/images/searchIcon.png";


const ParentInput = styled.div`
  width: 95%;
  position: relative;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputSearch = styled.input`
  width: 90%;
  border: 1px solid #b8b8b8 !important;
  border-radius: 8px !important;
  color: #b8b8b8 !important;
  height: 40px;
  text-align: right;
  direction: rtl;
  font-size: 16px !important;
`;

const IconSearch = styled.img`
  width: 32px;
  height: 32px;
  left:6%;
  position: absolute;
  cursor: pointer;
`;

export default function FollowsSearch({ data, setResult }) {
  const [query, setQuery] = useState('');
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setResult(data.filter(item => (item.name.indexOf(query) !== -1) || (item.code.indexOf(query) !== -1)));
    })
 
  }, [data, query])

  return (
    <ParentInput>
      <InputSearch type="text" placeholder="جستجو کنید" onChange={(e) => setQuery(e.target.value)} value={query}/>
      <IconSearch src={SearchIcon} />
    </ParentInput>
  )
    
}
