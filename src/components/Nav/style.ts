import {Colors} from 'consts';
import {View} from 'react-native';
import styled from 'styled-components';
import Text from '../Text';

export const Container = styled(View)`
  flex-direction: row;
  background-color: ${Colors.blue.main};
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled(Text)`
  color: ${Colors.white.default};
  font-weight: 700;
`;