import styled from 'styled-components';
import { SectionWrapper } from 'globalStyles';

export const StyledTopBar = styled(SectionWrapper)`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 60px;
  padding-top: 0;
  padding-bottom: 0;
`;

export const RoundButton = styled.button`
  display: inline-flex;
  align-items: center;
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

export const UserProfileButton = styled(RoundButton)`
  width: auto;
  border-radius: 32px;
  padding: 3px 10px 3px 3px;
  margin-left: auto;

  @media screen and (max-width: 1000px) {
    padding-right: 3px;
  }
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

  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const UserName = styled.p`
  font-weight: 600;
`;
