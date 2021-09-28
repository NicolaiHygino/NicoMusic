import React from 'react';
import { Link } from 'react-router-dom';
import {
  Slider,
  ItemsContainer,
  ItemsContainerSlide,
  ItemWrapper,
  ImgWrapper,
  ContentWrapper,
  ItemTitle,
  ItemDesc,
} from './style';

const GridItem = ({ item }) => {
  const type = item.type;
  return (
    <ItemWrapper>
      <Link to={`/${item.type}/${item.id}`}>
        <ImgWrapper className={type === 'artist' && 'artist'}>
          <img src={item.images[0]?.url} alt={item.name} />
        </ImgWrapper>
        <ContentWrapper>
          <ItemTitle>{item.name}</ItemTitle>
          
          {type === 'album' &&
            <ItemDesc>{item.artists[0].name}</ItemDesc>
          }
          
          {type === 'playlist' &&
            <ItemDesc>
              {item?.description || item.owner.display_name }
            </ItemDesc>
          }
          
          {type === 'artist' &&
            <ItemDesc>artist</ItemDesc>
          }
        </ContentWrapper>
      </Link>
    </ItemWrapper>
  );
};

const GridItemsContainer = ({ itemsArray, slider }) => {
  if (slider) {
    return (
      <Slider>
        <ItemsContainerSlide>
          {itemsArray.map(item => 
            <GridItem key={`secIt${item.id}`} item={item} />
          )}
        </ItemsContainerSlide>
      </Slider>
    );
  }
  return (
    <ItemsContainer>
      {itemsArray.map(item => 
        <GridItem key={`secIt${item.id}`} item={item} />
      )}
    </ItemsContainer>
  );
};

export default GridItemsContainer;
