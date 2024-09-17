import styled from "@emotion/styled";

export const ArticleCardStyle = styled.div<{ isAdmin: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 10px;
  min-height: ${({ isAdmin }) => (isAdmin ? "none" : "450px")};
  width: ${({ isAdmin }) => (isAdmin ? "80%" : "none")};
  border: ${({ isAdmin }) => (isAdmin ? "1px solid #8080807a" : "none")};
  transition: box-shadow 0.3s ease, border 0.3s ease;
  &:hover {
    box-shadow: rgb(82 81 81 / 34%) 0px 2px 8px 0px;
  }
`;

export const CardWrapper = styled.div`
  div {
    margin-bottom: 10px;
    font-weight: bold;
    color: #30a3c0;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;

  time {
    font-size: 0.9rem;
    font-weight: normal;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 auto 5px;
`;

export const ButtonStyle = styled.button`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #909090;
  cursor: pointer;
  padding: 8px 10px;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  width: 80px;
  font-weight: bold;
  font-size: 0.95rem;
  align-text: center;
  text-align: center;
  &:hover {
    transform: scale(1.05);
    background-color: #f3f4f6;
    transition-duration: 0.2s;
  }
`;

export const ImageContainer = styled.div`
  position: relative; /* Required for layout="fill" */
  width: 250px;
  height: 250px;
  overflow: hidden;
`;
