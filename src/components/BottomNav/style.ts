import {Colors} from 'consts';
import {View, Pressable} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from '../Text';

export const Container = styled(View)`
  flex-direction: row;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${Colors.white.default};
  justify-content: space-evenly;
  shadowColor: #000;
  shadowOffset: {
    width: 0;
    height: 3;
  };
  shadowOpacity: 0.17;
  shadowRadius: 7;
  elevation: 20;
  bottom: 0;
  position: absolute;
`;

export const Content = styled(Pressable)`
  align-items: center;
  flex: 1;
`;

export const TextNav = styled(Text)`
  font-size: 14px;
  color: ${props => props.selected ? Colors.blue.darker : Colors.grey.light};
`;

export const StyledIcon = styled(Icon)`
  font-size: 20px;
  color: ${props => props.selected ? Colors.blue.darker : Colors.grey.light};
`;