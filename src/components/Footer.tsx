import React from "react";
import * as StyledComponents from "../components/styled/FooterStyles";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px 0;
  text-align: center;
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Copyright = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;
const IconLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: #61dafb;
  }
`;

const SpanStyle = styled.span`
  display: flex;
  align-self: center;
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Content>
        <Copyright>
          &copy; {currentYear} NewsHub{" "}
          <SpanStyle>
            <BsDot />
          </SpanStyle>{" "}
          <span>All rights reserved.</span>
        </Copyright>
        <SocialIcons>
          <IconLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </IconLink>
          <IconLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </IconLink>
          <IconLink
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </IconLink>
        </SocialIcons>
      </Content>
    </FooterContainer>
  );
};
