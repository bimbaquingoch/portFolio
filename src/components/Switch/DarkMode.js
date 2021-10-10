import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const DarkContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Switch = styled.label`
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

const CheckBox = styled.input`
  display: none;
  :checked ~ .switch::before {
    transform: translateX(65px);
  }
`;

export const DarkMode = () => {
  const [activo, setActivo] = useState(false);

  const ref = useRef(null);

  const handleChange = () => {
    if (ref.current.checked) {
    }
  };

  const changeMedia = (mq) => {
    setActivo(mq.matches);
  };

  useEffect(() => {
    const mdq = window.matchMedia("(prefers-color-scheme:dark)");
    mdq.addListener(changeMedia);
    // ref.current.setAttribute("checked", !activo);
    setActivo(mdq.matches);
  }, [activo]);

  return (
    <DarkContainer>
      <CheckBox
        onChange={handleChange}
        ref={ref}
        type="checkbox"
        id="checkbox"
        className="checkbox"
        activo={activo}
      />
      <Switch htmlFor="checkbox" className="switch"></Switch>
    </DarkContainer>
  );
};
