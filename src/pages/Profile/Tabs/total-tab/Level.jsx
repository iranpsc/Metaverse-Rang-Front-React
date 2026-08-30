import styled from "styled-components";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../services/reducers/UserContext";
import { useLanguage } from "../../../../services/reducers/LanguageContext";
import { convertToPersian } from "../../../../services/Utility";
import { Skeleton } from "../../../../components/Skeleton";
import useRequest from "../../../../services/Hooks/useRequest";
import { useParams } from "react-router";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, OrbitControls, useFBX } from "@react-three/drei";

const Container = styled.div`
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 10px 20px 10px 15px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
`;

const Percent = styled.div`
  ${(props) => (props.IsPersian ? "border-left" : "border-right")}: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  ${(props) => (props.IsPersian ? "padding-left" : "padding-right")}: 25px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 600;
    font-size: 16px;
  }

  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 500;
    font-size: 16px;
  }
`;

const ProgressContainer = styled.div`
  height: 8px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  border-radius: 28px;
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  width: ${(props) => `${props.percentage}%`};
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  height: 100%;
`;

const LevelCount = styled.div`
  display: flex;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
      transition: transform 0.2s;
    }
  }
`;

function FbxModel({ url, onLoaded }) {
  const model = useFBX(url);

  useEffect(() => {
    if (model && onLoaded) {
      onLoaded();
    }
  }, [model, onLoaded]);

  return <primitive object={model} />;
}

class FbxErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("FBX loading failed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

const Level = () => {
  const [user] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const IsPersian = useLanguage();
  const { Request } = useRequest();
  const { id } = useParams();

  useEffect(() => {
    const requestId = id || user?.id;

    if (!requestId) {
      setLoading(false);
      return;
    }

    setLoading(true);

    Request(`users/${requestId}/levels`)
      .catch((error) => {
        console.error("Error loading level:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, user?.id, Request]);

  if (loading) {
    return (
      <Container>
        <Percent IsPersian={IsPersian}>
          <Title>
            <Skeleton width="120px" height="20px" radius="4px" />
            <Skeleton width="50px" height="20px" radius="4px" />
          </Title>

          <ProgressContainer>
            <Skeleton width="70%" height="8px" radius="8px" />
          </ProgressContainer>
        </Percent>

        <LevelCount>
          <Skeleton width="44px" height="44px" radius="50%" />
          <Skeleton width="44px" height="44px" radius="50%" />
          <Skeleton width="44px" height="44px" radius="50%" />
        </LevelCount>
      </Container>
    );
  }

  const fbxUrl = user?.level?.fbx_file || null;

  return (
    <Container>
      <Percent IsPersian={IsPersian}>
        <Title>
          <h2>{user?.level?.name}</h2>
          <h3>
            {convertToPersian(user?.socre_percentage_to_next_level)}%
          </h3>
        </Title>

        <ProgressContainer>
          <ProgressBar
            percentage={user?.socre_percentage_to_next_level}
          />
        </ProgressContainer>
      </Percent>

      <LevelCount>
        <div style={{ width: 65, height: 65 }}>
          <Canvas camera={{ position: [0, 0, 3], fov: 35 }}>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} />

            <FbxErrorBoundary>
              <Suspense fallback={null}>
                {fbxUrl && (
                  <Bounds fit clip observe margin={1.2}>
                    <Center>
                      <FbxModel url={fbxUrl} />
                    </Center>
                  </Bounds>
                )}
              </Suspense>
            </FbxErrorBoundary>

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </LevelCount>
    </Container>
  );
};

export default Level;
