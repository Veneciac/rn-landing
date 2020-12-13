import React from 'react';
import {Container, Title, Item, ListContainer, StyledImage, ItemDesc, ItemTitle} from './style';

const Lastest = () => {
  let list = [
    {
      title: 'Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];

  const _renderListItem = ({item}) => (
    <Item>
      <StyledImage source={{uri: item.illustration}} />
      <ItemTitle>
        {item.title}
      </ItemTitle>
      <ItemDesc>
        {item.subtitle}
      </ItemDesc>
    </Item>
  );

  return (
    <Container>
      <Title>
        Lastest
      </Title>
      <ListContainer
        data={list}
        keyExtractor={(item: any) => item.title}
        renderItem={_renderListItem} //method to render the data in the way you want using styling u need
        horizontal={true}
      />
    </Container>
  );
};

export default Lastest;