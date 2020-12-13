import styled from 'styled-components';
import {View, Pressable, FlatList, ScrollView} from 'react-native';
import {Text} from 'components';
import {Colors} from 'consts';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled(View)`
  flex: 1;
  background-color: ${Colors.white.snow};

`;
export const ScrollContainer = styled(ScrollView)`
  flex: 1;
`;

export const MenuSection = styled(FlatList)`
  flex: 3;
`;

export const IconContainer = styled(View)`
  background-color: ${props => props.color};
  border-radius: 50px;
  width: 60px;
  height: 60px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled(Pressable)`
  justify-content: center;
  align-items: center;
`;

export const IconText = styled(Text)`
  color: ${Colors.grey.default};
`;

export const StyledIcon = styled(Icon)`
  font-size: 25px;
  color: ${Colors.white.default};
`;