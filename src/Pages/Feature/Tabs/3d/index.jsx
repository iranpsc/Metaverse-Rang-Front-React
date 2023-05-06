import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import React, { useEffect, useState,useContext } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import { FeatureContext } from "../../Context/FeatureProvider";
import Submit from "../../../../Components/Buttons/Submit";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ContainerItem = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
`;
export default function UnitiTab() {
  const [feature] = useContext(FeatureContext);
  const [user, setUser] = useState({});
  const { Request, HTTP_METHOD } = useRequest();
  const { unityProvider, isLoaded, loadingProgression, sendMessage } =
    useUnityContext({
      loaderUrl: "/Build/WebGL.loader.js",
      dataUrl: "/Build/WebGL.data.unityweb",
      frameworkUrl: "/Build/WebGL.framework.js.unityweb",
      codeUrl: "/Build/WebGL.wasm.unityweb",
    });
  useEffect(() => {
    Request("user/profile").then((response) => {
      setUser(response.data.data);
    });


  }, []);
  const testObject = {
    ID: feature.properties?.id,
    urlImgCharacter: user?.image,
  };
  var jsonString = JSON.stringify(testObject);
  const loadingPercentage = Math.round(loadingProgression * 100);

  function handleClickSpawnEnemies() {
    sendMessage("JavaScriptHook", "SetJson", jsonString);
  }
  return (
    <Container>
      <ContainerItem>
        {isLoaded === false && (
          <LoadingContainer className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </LoadingContainer>
        )}
        <Unity
          className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
      </ContainerItem>

      <ContainerItem>
        <Submit text="ورود" onClick={handleClickSpawnEnemies} type={"primary"}  options={{ style: { width: 150 } }}/>
      </ContainerItem>
    </Container>
  );
}
