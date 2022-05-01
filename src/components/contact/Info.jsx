import React from "react";
import {
  WhatsApp,
  Mail,
  Instagram,
  LinkedIn,
  Twitter,
  GitHub,
} from "@material-ui/icons";

import {
  Container,
  InfoItem,
  SocialContainer,
  SocialIcon,
} from "../StyledComponents";

export const Info = () => {
  return (
    <Container>
      <InfoItem>
        <SocialContainer>
          <a
            href='mailto:bryanimbaquingo1@gmail.com'
            rel='noreferrer'
            aria-label='LinkedIn Icon'>
            <SocialIcon color='3b5999'>
              <Mail fontSize='large' />
            </SocialIcon>
          </a>
          <a
            href='https://api.whatsapp.com/send/?phone=593963766640&text=Hola!%20Nos%20Interesa%20tu%20perfil.&app_absent=0'
            rel='noreferrer'
            aria-label='LinkedIn Icon'>
            <SocialIcon color='57c181'>
              <WhatsApp fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://www.linkedin.com/in/bryan-andres-imbaquingo-almagro-636a90168/'
            rel='noreferrer'
            aria-label='LinkedIn Icon'>
            <SocialIcon color='3b5999'>
              <LinkedIn fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://www.instagram.com/bryandresimba/'
            rel='noreferrer'
            aria-label='Instagram Icon'>
            <SocialIcon color='e4405f'>
              <Instagram fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://twitter.com/bryandresimba'
            rel='noreferrer'
            aria-label='Twitter Icon'>
            <SocialIcon color='55acee'>
              <Twitter fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://github.com/bimbaquingoch'
            rel='noreferrer'
            aria-label='GitHub Icon'>
            <SocialIcon color='051f2b'>
              <GitHub fontSize='large' />
            </SocialIcon>
          </a>
        </SocialContainer>
      </InfoItem>
    </Container>
  );
};
