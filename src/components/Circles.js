import styled from "styled-components";
const BgCircles = styled.div`
  height: 100%;
  left: 50%;
  max-width: 1200px;
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  width: calc(100% - 30px);
  z-index: -1;
`;

const Circle = styled.div`
  animation: ${({ animation, time }) =>
    `${animation} ${time}s linear infinite`};
  background-color: #${({ color }) => color};
  border-radius: 50%;
  height: ${({ size }) => `${size}rem`};
  left: ${({ left }) => `${left}%`};
  position: absolute;
  top: ${({ top }) => `${top}%`};
  width: ${({ size }) => `${size}rem`};

  @keyframes zoomInOut {
    0%,
    100% {
      transform: scale(0.5);
    }

    50% {
      transform: scale(1);
    }
  }

  @keyframes bounceTop {
    0%,
    100% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(0px);
    }
  }
`;

export const Circles = () => (
  <BgCircles>
    <Circle
      top="10"
      left="5"
      color="3b5999"
      size="25"
      animation="zoomInOut"
      time="5"
    />
    <Circle
      top="20"
      left="35"
      color="e4405f"
      size="20"
      animation="bounceTop"
      time="5"
    />
    <Circle
      top="50"
      left="55"
      color="57c181"
      size="10"
      animation="bounceTop"
      time="5"
    />
    <Circle
      top="65"
      left="50"
      color="55acee"
      size="8"
      animation="zoomInOut"
      time="5"
    />
    <Circle
      top="80"
      left="25"
      color="ff062b"
      size="8"
      animation="zoomInOut"
      time="5"
    />
    <Circle
      top="25"
      left="75"
      color="051f2b"
      size="12"
      animation="zoomInOut"
      time="8"
    />
    <Circle
      top="80"
      left="85"
      color="e4405f"
      size="30"
      animation="bounceTop"
      time="5"
    />
  </BgCircles>
);
