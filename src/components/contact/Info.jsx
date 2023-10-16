import React from 'react';
import { Mail, Instagram, LinkedIn, Twitter, GitHub } from '@material-ui/icons';

import {
  Container,
  InfoItem,
  SocialContainer,
  SocialIcon,
} from '../StyledComponents';

export const Info = () => {
  return (
    <Container>
      <InfoItem>
        <SocialContainer>
          <a
            href='mailto:bryanimbaquingo1@gmail.com'
            rel='noreferrer'
            aria-label='LinkedIn Icon'
            target='_blank'
          >
            <SocialIcon color='3b5999'>
              <Mail fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://www.linkedin.com/in/bryan-imbaquingo-636a90168/'
            rel='noreferrer'
            aria-label='LinkedIn Icon'
            target='_blank'
          >
            <SocialIcon color='3b5999'>
              <LinkedIn fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://www.instagram.com/bryandresimba/'
            rel='noreferrer'
            aria-label='Instagram Icon'
            target='_blank'
          >
            <SocialIcon color='e4405f'>
              <Instagram fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://twitter.com/bryandresimba'
            rel='noreferrer'
            aria-label='Twitter Icon'
            target='_blank'
          >
            <SocialIcon color='55acee'>
              <Twitter fontSize='large' />
            </SocialIcon>
          </a>

          <a
            href='https://github.com/bimbaquingoch'
            rel='noreferrer'
            aria-label='GitHub Icon'
            target='_blank'
          >
            <SocialIcon color='051f2b'>
              <GitHub fontSize='large' />
            </SocialIcon>
          </a>
        </SocialContainer>
      </InfoItem>
    </Container>
  );
};
