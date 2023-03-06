import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
  background: #eee;
`;

export const UserRow = styled.div`
  display: flex;
  border-radius: 4px;
  width: 480px;
  height: 80px;
  min-height: 80px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 12px;
  justify-content: space-between;
  background: white;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const UserImage = styled.img`
  height: auto;
  width: auto;
  max-height: 60px;
  max-width: 80px;
`;

export const UserImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  height: 60px;
  width: 80px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;

export const UserName = styled.div`
  font-size: 17px;
  margin-left: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ErrorMessage = styled.div`
  font-size: 15px;
  color: red;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background: darkred;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 6px 8px;
  margin-right: 8px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  background: darkgreen;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 6px 8px;
  cursor: pointer;
`;
