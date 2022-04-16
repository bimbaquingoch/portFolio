import styled from "styled-components";

export const SkilContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

export const Skills = styled.div`
   background-color: var(--white-alpha-25);
   border: 1px solid var(--white-alpha-40);
   border-radius: 20px;
   margin: 0 10px 10px 0;
   padding: 5px 15px;
   text-transform: capitalize;
`;

export const Container = styled.div`
   align-items: center;
   display: flex;
   justify-content: flex-end;
   width: 100%;
`;

export const InfoItem = styled.div`
   align-items: center;
   display: flex;
   @media screen and (min-width: 770px) {
      margin-top: 0;
   }
`;

export const SocialContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

export const SocialIcon = styled.div`
   align-items: center;
   background-color: #${({ color }) => color};
   border-radius: 50%;
   color: #fff;
   cursor: pointer;
   display: flex;
   height: 40px;
   justify-content: center;
   margin: 15px;
   transition: all 500ms ease;
   width: 40px;

   &:hover {
      transform: scale(1.3);
   }
`;

export const DarkContainer = styled.div`
   align-items: center;
   display: flex;
   justify-content: center;
   padding: 20px;
`;

export const Switch = styled.label`
   display: block;
   height: 35px;
   background-color: var(--background-switch);
   border-radius: 20px;
   padding: 5px;
   width: 100px;
   box-sizing: border-box;
   cursor: pointer;
   user-select: none;

   ::before {
      content: "";
      display: block;
      width: 25px;
      height: 25px;
      background-color: var(--body-background);
      border-radius: 50%;
      transform: translateX(0);
      transition: 300ms;
      will-change: transform;
   }
`;

export const CheckBox = styled.input`
   display: none;
   :checked ~ .switch::before {
      transform: translateX(65px);
   }
`;

export const BgCircles = styled.div`
   height: 100%;
   left: 50%;
   max-width: 1200px;
   position: fixed;
   top: 0;
   transform: translateX(-50%);
   width: calc(100% - 30px);
   z-index: -1;
`;

export const Circle = styled.div`
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
