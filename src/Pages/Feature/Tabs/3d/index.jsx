import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import React from "react";
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
export default function UnitiTab() {
  const  {unityProvider}  =
    useUnityContext({
      loaderUrl: "/Build/WebGL.loader.js",
      dataUrl: "/Build/WebGL.data.unityweb",
      frameworkUrl: "/Build/WebGL.framework.js.unityweb",
      codeUrl: "/Build/WebGL.wasm.unityweb",
    });

  // var testObject = {
  //   ID: 12345678,
  //   urlImgCharacter: "htts://rgb.irpsc.com/image/charater",
  //   userStatus: true,
  // };
  // var jsonString = JSON.stringify(testObject);
  // const loadingPercentage = Math.round(loadingProgression * 100);

  // function handleClickSpawnEnemies() {
  //   sendMessage("JavaScriptHook", "SetJson", jsonString);
  // }
  return (
    <Container>
      <ContainerItem>
        {/* {isLoaded === false && (
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )} */}
        <Unity
          className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
      </ContainerItem>

      <ContainerItem>
        {/* <button onClick={handleClickSpawnEnemies}>Send Json Object</button> */}
      </ContainerItem>
    </Container>
  );
}
