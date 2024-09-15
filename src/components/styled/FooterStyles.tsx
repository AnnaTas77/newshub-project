import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px 0;
  text-align: center;
`;
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Copyright = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-top: 10px;
`;
export const IconLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    // color: #61dafb;
    color: #0cc0df;
  }
`;

export const SpanStyle = styled.span`
  display: flex;
  align-self: center;
`;
