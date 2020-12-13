import styled from 'styled-components';
import {View, Pressable, FlatList, Dimensions} from 'react-native';
import {Text, Image} from 'components';
import {Colors} from 'consts';

const {width: screenWidth} = Dimensions.get('window');

export const Container = styled(View)`
  margin: 20px;
`;

export const Title = styled(Text)`
  color: ${Colors.black.default};
  font-weight: 900;
  font-size: 22px;
`;

export const Item = styled(Pressable)`
  width: ${screenWidth - 120}px;
  margin: 20px;
  justify-content: center;
  flex: 1;
  margin-bottom: 60px;
  padding: 20px;
  elevation: 2;
  background-color: ${Colors.white.default};
`;

export const ListContainer = styled(FlatList)``;

export const StyledImage = styled(Image)`
  width: 90%;
  height: 200px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemTitle = styled(Text)`
  text-align: center;
  font-weight: 900;
  font-size: 20px;
`;

export const ItemDesc = styled(Text)`
  color: ${Colors.grey.light};
  text-align: center;
`;