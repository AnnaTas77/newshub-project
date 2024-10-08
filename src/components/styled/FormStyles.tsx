import styled from "@emotion/styled";

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 150px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 18px 18px;
  max-width: 800px;
  min-width: 367px;
  box-shadow: rgb(82 81 81 / 34%) 0px 2px 8px 0px;
`;
export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 16px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const Legend = styled.legend`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 5px;
`;

export const CategoryContainer = styled.fieldset`
  display: flex;
  justify-content: center;
  gap: 0.9rem;
  padding: 10px 0;
  margin-bottom: 18px;
  text-align: center;
`;

export const CategoryInput = styled.input`
  padding: 12px 20px;
  margin: 10px 5px 5px 0;
`;

export const CategoryLabel = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 16px 0;
  max-width: 100%;
  min-width: 100%;
  display: inline-block;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const ErrorStyle = styled.h3`
  color: #e20b0b;
  padding: 0 0 20px;
  height: 20px;
`;

export const GreenButton = styled.button`
  width: 30%;
  margin: 5px auto 0;
  background-color: #13aa52;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    transform: translateY(-2px);
  }
`;
