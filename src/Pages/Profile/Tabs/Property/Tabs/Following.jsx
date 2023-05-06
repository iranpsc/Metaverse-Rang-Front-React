import React, { useContext, useLayoutEffect, useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { FollowContext } from "../../../../../Services/Reducers/FollowContext";
import FollowsSearch from "../../../Components/FollowsSearch";
import PlayerCard from "../Component/PlayerCard";

const ContainerPlayerCard = styled.div`
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 20px;
  margin-top: 3%;
`;

export default function Following() {
  const [, dispatch] = useContext(FollowContext);
  const [following, setFollowing] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  const [result, setResult] = useState([]);

  useLayoutEffect(() => {
    Request("following", HTTP_METHOD.GET).then((response) => {
      setFollowing(response.data.data);
    });

  }, []);

  const unFollowHandler = (id) => {
    Request(`unfollow/${id}`).then(() => {
      Request('following').then((response) => {
        setFollowing(response.data.data);
        dispatch(response.data.data);
      });
    });
  }

  return (
    <>
      <FollowsSearch data={following} setResult={setResult}/>

      <ContainerPlayerCard>
        {result.map((user) => (
          <PlayerCard
            TextBtn="آنفالو کردن"
            Id={user.id}
            Code={user.code}
            Name={user.name}
            PlayerImg={user.profile_photos}
            key={shortid.generate()}
            onClick={unFollowHandler}
          />
        ))}
      </ContainerPlayerCard>
    </>
  );
}
