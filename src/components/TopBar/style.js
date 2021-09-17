import styled from 'styled-components';

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 60px;
  padding: 0 32px;
`;

export const RoundButtonsWrapper = styled.div`

`;

export const RoundButton = styled.button`
  background-color: rgba(0,0,0,.7);
  border: none;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 16px;
  width: 32px;
  height: 32px;
  line-height: 0;
  color: white;
  stroke-width: 1pt;
`;

export const UserProfileWrapper = styled.div`

`;

export const UserProfileButton = styled.button`
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,.7);
  border: none;
  cursor: pointer;
  border-radius: 32px;
  padding: 3px 10px 3px 3px;
  margin-right: 16px;
  height: 32px;
  line-height: 0;
  color: white;
  stroke-width: 1pt;
`;

export const ImageWrapper = styled.div`
  height: 28px;
  width: 28px;
  min-width: 28px;
  margin-right: 5px;

  & img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const UserName = styled.p`
  font-weight: 600;
`;
