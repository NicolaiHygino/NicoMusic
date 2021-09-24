import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: .3em;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-hover);
  }
`;

export const Wrapper = styled.div`
  margin: 0 .5em;
`;

export const TitleWrapper = styled(Wrapper)`
  flex: 2;
`;

export const ImgWrapper = styled.button`
  display: flex;
  align-items: center;
  margin: 0 .5em;
  border: 0;
  padding: 0;   

  & img {
    width: 40px;
  }
`;

export const Title = styled.p`
  font-size: 1em;
  line-height: 1em;
  margin: .4em 0;

  &.playing {
    color: var(--main-red)
  }
`;

export const SecondaryText = styled(Title)`
  color: #a7a7a7;
  font-size: 0.87em;
`;
