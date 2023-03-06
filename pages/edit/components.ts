import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  background: #eee;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  padding: 24px;
  border-radius: 4px;
  background: white;
`;

export const ErrorMessage = styled.div`
  font-size: 13px;
  color: red;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  font-size: 15px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  border: none;
  margin-bottom: 12px;
  padding: 12px 10px;
  width: 240px;
  outline: none;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CancelButton = styled.button`
  background: darkred;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background: darkgreen;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  :disabled {
    background: #ccc;
  }
`;
