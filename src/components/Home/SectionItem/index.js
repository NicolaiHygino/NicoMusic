import React from 'react';
import { Link } from 'react-router-dom';
import {
  ItemWrapper,
  ImgWrapper,
  ContentWrapper,
  ItemTitle,
  ItemDesc,
} from '../style';

const SectionItem = ({ item }) => {
  return (
    <ItemWrapper>
      <Link to={`${item.type}/${item.id}`}>
        <ImgWrapper>
          <img src={item.images[0].url} alt={item.name} />
        </ImgWrapper>
        <ContentWrapper>
          <ItemTitle>{item.name}</ItemTitle>
          <ItemDesc>{item?.description || item?.owner.display_name}</ItemDesc>
        </ContentWrapper>
      </Link>
    </ItemWrapper>
  );
};

export default SectionItem;
