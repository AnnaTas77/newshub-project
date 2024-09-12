import styled from "@emotion/styled";

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px auto 0 auto;
  max-width: 1000px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  article {
    padding:15px;
    min-width: 100%;
  }

  img {
    margin: 0 auto;
    width: 100%;
    height: auto;
  }

  h4 {
    font-size: 2rem;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 1rem; 
    line-height: 1.6;
    color: #555; /
    margin: 5px 0; 
  }
`;

export const CategoryStyle = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

export const ByStyle = styled.p`
  font-weight: light;
  color: #333;
`;

export const SpanStyle = styled.span`
  font-weight: bold;
  color: #333;
`;
export const UpdatedAtStyle = styled.p`
  font-size: 0.9rem;
  color: #999;
  font-family: cursive;
`;

export const WrapperStyle = styled.div`
  display: flex;
  margin: 25px 25px 25px 0;
  flex-direction: column;
`;
