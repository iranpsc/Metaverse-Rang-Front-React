import React, { useLayoutEffect, useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import useRequest from "../../../../../Services/Hooks/useRequest";
import FollowsSearch from "../../../Components/FollowsSearch";
import PlayerCard from "../Component/PlayerCard";
import { useParams } from "react-router-dom";

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
  const [following, setFollowing] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  const [result, setResult] = useState([]);
  const { id } = useParams();
  useLayoutEffect(() => {
    Request(`players/${id}/following`, HTTP_METHOD.GET).then((response) => {
      setFollowing(response.data.data);
    });
  }, []);

  return (
    <>
      <FollowsSearch data={following} setResult={setResult} />

      <ContainerPlayerCard>
        {result.map((user) => (
          <PlayerCard
            Id={user.code}
            Name={user.name}
            PlayerImg={user.profile_photos}
            IdNavigate={user.id}
            key={shortid.generate()}
          />
        ))}
      </ContainerPlayerCard>
    </>
  );
}
