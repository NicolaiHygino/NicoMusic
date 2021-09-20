import React from 'react';
import { Link } from 'react-router-dom';
import {
  ItemsContainer,
  ItemWrapper,
  ImgWrapper,
  ContentWrapper,
  ItemTitle,
  ItemDesc,
} from './style';

const HomeItem = ({ item }) => {
  const type = item.type;
  return (
    <ItemWrapper>
      <Link to={`${item.type}/${item.id}`}>
        <ImgWrapper>
          <img src={item.images[0]?.url} alt={item.name} />
        </ImgWrapper>
        <ContentWrapper>
          <ItemTitle>{item.name}</ItemTitle>
          {type === 'album'
            ? <ItemDesc>{item.artists[0].name}</ItemDesc>
            : <ItemDesc>
                {item?.description || item.owner.display_name }
              </ItemDesc> }
        </ContentWrapper>
      </Link>
    </ItemWrapper>
  );
};

const HomeItemsContainer = ({ itemsArray }) => {
  return (
    <ItemsContainer>
      {itemsArray.map(item => 
        <HomeItem key={`secIt${item.id}`} item={item} />
      )}
    </ItemsContainer>
  );
};

export default HomeItemsContainer;
