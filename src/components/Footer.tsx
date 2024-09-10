import styled from "@emotion/styled";
import React from "react";

const FooterContainer = styled.footer`
  padding: 30px 0 30px 0;
  border-top: 1px solid #ced4da;
  margin-top: 50px;
  text-align: center;
`;

export const Footer: React.FC = () => {
  return <FooterContainer>Footer</FooterContainer>;
};
