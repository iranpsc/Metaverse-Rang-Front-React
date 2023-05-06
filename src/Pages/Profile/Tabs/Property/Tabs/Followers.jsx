import React, {useLayoutEffect, useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import useRequest from "../../../../../Services/Hooks/useRequest";
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

export default function Followers() {
  const [followers, setFollowers] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  const [result, setResult] = useState([]);

  useLayoutEffect(() => {
    Request("followers", HTTP_METHOD.GET).then((response) => {
      setFollowers(response.data.data);
    });

  }, []);

  const removeFollower = (id) => {
    Request(`remove/${id}`).then(() => {
      Request('followers').then((response) => {
        setFollowers(response.data.data);
      });
    });
  }

  return (
    <>
      <FollowsSearch data={followers} setResult={setResult} />

      <ContainerPlayerCard>
        {result.map((user) => (
          <PlayerCard
            TextBtn="حذف کردن"
            Id={user.id}
            Code={user.code}
            Name={user.name}
            PlayerImg={user.profile_photos}
            key={shortid.generate()}
            onClick={removeFollower}
          />
        ))}
      </ContainerPlayerCard>
    </>
  );
}
