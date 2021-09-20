import React from "react";
import styled from "styled-components";

import {
  WhatsApp,
  Mail,
  Instagram,
  LinkedIn,
  Twitter,
  GitHub,
} from "@material-ui/icons";

//     url: "https://github.com/bimbaquingoch",
//     url: "https://www.linkedin.com/in/bryan-imbaquingo-almagro-636a90168/",
//     url: "https://www.instagram.com/bryandresimba/",
//     url: "https://twitter.com/bryandresimba",

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 80px;
  width: 100%;
`;

const InfoItem = styled.div`
  align-items: center;
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.div`
  align-items: center;
  background-color: #${({ color }) => color};
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 20px;
  transition: all 500ms ease;
  width: 40px;

  &:hover {
    transform: scale(1.3);
  }
`;

const ContactItem = styled.div`
  align-items: center;
  display: flex;
  margin: 10px;
`;

export const Info = () => {
  return (
    <Container>
      <ContactItem>
        <SocialIcon color="57c181">
          <WhatsApp fontSize="large" />
        </SocialIcon>
        +593 9637 66640
      </ContactItem>

      <ContactItem>
        <SocialIcon color="3b5999">
          <Mail fontSize="large" />
        </SocialIcon>
        bryanimbaquingo1@gmail.com
      </ContactItem>

      <InfoItem>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <LinkedIn fontSize="large" />
          </SocialIcon>

          <SocialIcon color="e4405f">
            <Instagram fontSize="large" />
          </SocialIcon>

          <SocialIcon color="55acee">
            <Twitter fontSize="large" />
          </SocialIcon>

          <SocialIcon color="051f2b">
            <GitHub fontSize="large" />
          </SocialIcon>
        </SocialContainer>
      </InfoItem>
    </Container>
  );
};
