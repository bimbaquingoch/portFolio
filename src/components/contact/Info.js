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

const Container = styled.div`
  align-items: center;
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
  width: 100%;

  @media screen and (min-width: 770px) {
    flex-direction: row;
  }
`;

const InfoItem = styled.div`
  align-items: center;
  display: flex;
  margin-top: 30px;
  @media screen and (min-width: 770px) {
    margin-top: 0;
  }
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
  margin-right: 10px;
  transition: all 500ms ease;
  width: 40px;

  &:hover {
    transform: scale(1.3);
  }

  @media screen and (min-width: 770px) {
    margin-right: 30px;
  }
`;

const ContactItem = styled.div`
  align-items: center;
  display: flex;
  margin: 10px;
`;

//
export const Info = () => {
  return (
    <Container>
      <ContactItem>
        <SocialIcon color="3b5999">
          <Mail fontSize="large" />
        </SocialIcon>
        bryanimbaquingo1@gmail.com
      </ContactItem>

      <InfoItem>
        <SocialContainer>
          <a
            href="https://api.whatsapp.com/send/?phone=593963766640&text=Hola!%20Nos%20Interesa%20tu%20perfil.&app_absent=0"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Icon"
          >
            <SocialIcon color="57c181">
              <WhatsApp fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/bryan-imbaquingo-almagro-636a90168/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Icon"
          >
            <SocialIcon color="3b5999">
              <LinkedIn fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="https://www.instagram.com/bryandresimba/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Icon"
          >
            <SocialIcon color="e4405f">
              <Instagram fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="https://twitter.com/bryandresimba"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Icon"
          >
            <SocialIcon color="55acee">
              <Twitter fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="https://github.com/bimbaquingoch"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Icon"
          >
            <SocialIcon color="051f2b">
              <GitHub fontSize="large" />
            </SocialIcon>
          </a>
        </SocialContainer>
      </InfoItem>
    </Container>
  );
};
