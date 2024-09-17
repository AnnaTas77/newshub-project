import React from "react";
import * as StyledComponents from "../components/styled/FooterStyles";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledComponents.FooterContainer>
      <StyledComponents.ContentStyles>
        <StyledComponents.CopyrightStyles>
          &copy; {currentYear} NewsHub{" "}
          <StyledComponents.SpanStyles>
            <BsDot />
          </StyledComponents.SpanStyles>{" "}
          <span>All rights reserved.</span>
        </StyledComponents.CopyrightStyles>
        <StyledComponents.SocialIconsStyles>
          <StyledComponents.IconLinkStyles
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </StyledComponents.IconLinkStyles>
          <StyledComponents.IconLinkStyles
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </StyledComponents.IconLinkStyles>
          <StyledComponents.IconLinkStyles
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </StyledComponents.IconLinkStyles>
        </StyledComponents.SocialIconsStyles>
      </StyledComponents.ContentStyles>
    </StyledComponents.FooterContainer>
  );
};
