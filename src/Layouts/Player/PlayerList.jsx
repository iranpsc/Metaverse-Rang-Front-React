// Import necessary components for PlayerList component
import React, { useState, useEffect, useContext } from "react";
import useAuth from "../../Services/Hooks/useAuth";
import useRequest from "../../Services/Hooks/useRequest";
import { FollowContext } from "../../Services/Reducers/FollowContext";
import PlayerProfile from "./PlayerProfile";
import { useNavigate } from "react-router-dom";

// PlayerList Component
export default function PlayerList() {
  // Get user authentication information
  const { getUser } = useAuth();
  // Set state to store players list
  const [players, setPlayers] = useState([]);
  // Get followers list from FollowContext
  const [followers] = useContext(FollowContext);

  // Get request methods
  const { Request } = useRequest();
  const navigate = useNavigate();
  // Fetch player list from API and set the list to players state
  async function fetchPlayers() {
    try {
      const response = await Request("players");
      setPlayers(response.data.data);
      localStorage.removeItem("IpAccess");
    } catch (error) {
      const { status } = error.response;
      if (status === 403) {
        localStorage.setItem("IpAccess", true);
        navigate("/metaverse/access-ip");
      }
    }
  }

  useEffect(() => {
    if (players.length === 0) {
      fetchPlayers();
    }

    // Listen to user status changed event and update players state accordingly
    const userStatusChannel = window.Echo.channel("user-status");
    userStatusChannel.listen(".user-status-changed", (e) => {
      const changedPlayer = players.map((item) =>
        item.id === e.data.id ? { ...item, online: e.data.online } : item
      );
      setPlayers(changedPlayer);
    });

    // Unsubscribe to user status changed event
    return () => {
      userStatusChannel.stopListening(".user-status-changed");
    };
  }, [players]);

  // Render player profile based on given player
  const renderPlayerProfile = (player) => {
    if (parseInt(getUser()?.id) === parseInt(player?.id)) {
      return null;
    }
    return (
      <PlayerProfile
        key={player?.code}
        id={player?.id}
        code={player?.code}
        level={player?.level}
        image={followers.length > 0 ? player?.profile_photos : player?.image}
        Online={player?.online}
      />
    );
  };

  // Render followers list or players list
  return (
    <>
      {followers.length > 0
        ? followers.map(renderPlayerProfile)
        : players.map(renderPlayerProfile)}
    </>
  );
}
