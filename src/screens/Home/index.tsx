import React from 'react';
import {Alert} from 'react-native';
import {Container, MenuSection, IconContainer, IconText, StyledIcon, ItemContainer, ScrollContainer} from './style';
import {Nav, BottomNav} from 'components';
import PromoSection from './PromoSection';
import Lastest from './Lastest';

const Home = () => {
  let menus = [
    {
      title: 'Flights',
      icon: 'plane',
      route: 'flight',
      color: 'rgb(99, 197, 242)'
    },
    {
      title: 'Hotels',
      icon: 'building',
      route: 'hotels',
      color: 'rgb(50, 88, 148)'

    },
    {
      title: 'Trains',
      icon: 'train',
      route: 'trains',
      color: 'rgb(241, 162, 59)'

    },
    {
      title: 'Attraction',
      icon: 'ticket',
      route: 'attraction',
      color: 'rgb(100, 207, 151)'

    },
    {
      title: 'Food',
      icon: 'spoon',
      route: 'food',
      color: 'rgb(172, 210, 88)'

    },
    {
      title: 'Bus',
      icon: 'bus',
      route: 'bus',
      color: 'rgb(136, 208, 203)'

    },
  ];

  const onPressMenu = (menu) => {
    Alert.alert('Hello you just press', menu);
  };

  const _renderListItem = ({item}) => (
    <ItemContainer onPress={() => onPressMenu(item.title)}>
      <IconContainer color={item.color}>
        <StyledIcon name={item.icon} />
      </IconContainer>
      <IconText>
        {item.title}
      </IconText>
    </ItemContainer>
  );

  return (
    <Container>
      <Nav />
      <ScrollContainer>
        <MenuSection
          columnWrapperStyle={{justifyContent: 'space-around'}}
          data={menus}
          keyExtractor={(item: any) => item.title}
          renderItem={_renderListItem} //method to render the data in the way you want using styling u need
          horizontal={false}
          numColumns={3}
        />
        <PromoSection />
        <Lastest />
      </ScrollContainer>
      <BottomNav />
    </Container>
  );
};

export default Home;