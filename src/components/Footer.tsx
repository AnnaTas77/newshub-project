import React from "react";
import * as StyledComponents from "../components/styled/FooterStyles";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledComponents.FooterContainer>
      <StyledComponents.Content>
        <StyledComponents.Copyright>
          &copy; {currentYear} NewsHub{" "}
          <StyledComponents.SpanStyle>
            <BsDot />
          </StyledComponents.SpanStyle>{" "}
          <span>All rights reserved.</span>
        </StyledComponents.Copyright>
        <StyledComponents.SocialIcons>
          <StyledComponents.IconLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </StyledComponents.IconLink>
          <StyledComponents.IconLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </StyledComponents.IconLink>
          <StyledComponents.IconLink
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </StyledComponents.IconLink>
        </StyledComponents.SocialIcons>
      </StyledComponents.Content>
    </StyledComponents.FooterContainer>
  );
};
