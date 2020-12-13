import styled from 'styled-components';
import {View} from 'react-native';
import {Text} from 'components';
import {Colors} from 'consts';

export const Container = styled(View)`
  padding: 20px;
  padding-top: 30px;
`;

export const Title = styled(Text)`
  color: ${Colors.black.default};
  font-weight: 900;
  font-size: 22px;
  padding-bottom: 30px;
`;
