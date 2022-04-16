import { useRef, useEffect, useState } from "react";
import { CheckBox, DarkContainer, Switch } from "../StyledComponents";

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
            type='checkbox'
            id='checkbox'
            className='checkbox'
            activo={activo}
         />
         <Switch htmlFor='checkbox' className='switch'></Switch>
      </DarkContainer>
   );
};
