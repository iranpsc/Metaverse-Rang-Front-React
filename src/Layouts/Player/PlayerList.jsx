import React, { useState, useEffect, useContext } from "react";
import useAuth from "../../Services/Hooks/useAuth";
import useRequest from "../../Services/Hooks/useRequest";
import { FollowContext } from "../../Services/Reducers/FollowContext";
import PlayerProfile from "./PlayerProfile";


export default function PlayerList() {
  const { getUser } = useAuth();
  const [players, setPlayers] = useState([]);
  const [followers, dispatch] = useContext(FollowContext);

  const { Request } = useRequest();

  useEffect(() => {
    if (players.length === 0) {
      Request("players").then((response) => {
        setPlayers(response.data.data.reverse());
      });
    }

    window.Echo.channel('user-status')
    .listen('.user-status-changed', (e) => {
      let changedPlayer = [];
      players.forEach(item => {
        if(item.id === e.data.id) {
          changedPlayer.push({...item, online: e.data.online});
        } else {
          changedPlayer.push(item);
        }
      });

      setPlayers(changedPlayer);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);


  return (
    <>
      {followers.length > 0 &&
        followers.map((player) => (
          <PlayerProfile
            key={player?.code}
            id={player?.id}
            code={player?.code}
            level={player?.level}
            image={player?.profile_photos}
            Online={player?.online}
          />
        ))}
      {!(followers.length > 0) &&
        players.map((player) =>
          parseInt(getUser()?.id) === parseInt(player?.id) ? (
            <></>
          ) : (
            <PlayerProfile
              key={player?.code}
              id={player?.id}
              code={player?.code}
              level={player?.level}
              image={player?.image}
              Online={player?.online}
            />
          )
        )}
    </>
  );
}
