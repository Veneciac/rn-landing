import React from 'react';
import {Container, Content, TextNav, StyledIcon} from './style';
import {Actions} from 'react-native-router-flux';

interface BottomNavProps {
  current?: string;
}

let routes = [
  {title: 'Home', route: 'home', icon: 'home'},
  {title: 'Saved', route: 'saved', icon: 'bookmark'},
  {title: 'My Booking', route: 'myBooking', icon: 'book'},
  {title: 'My Inbox', route: 'myInbox', icon: 'envelope'},
  {title: 'My Account', route: 'myAccount', icon: 'user'},
];

const BottomNav: React.FC<BottomNavProps> = ({current}) => {
  const onPress = (item) => {
    Actions.reset(item.route);
  };

  return (
    <Container>
      {routes.map((item, index) => {
        return (
          <Content onPress={() => onPress(item)} key={index}>
            <StyledIcon selected={item.route == 'home'} name={item.icon} />
            <TextNav selected={item.route == 'home'} active={current === item.route}>{item.title}</TextNav>
          </Content>
        );
      })}
    </Container>
  );
};

export default BottomNav;
