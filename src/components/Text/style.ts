import styled from 'styled-components/native';
import {Text} from 'react-native';
import Colors from 'consts/Colors';

export const StyledText = styled(Text)`
  color: ${(props) => (props.color ? props.color : Colors.black.default)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'xl':
        return '32px';
      case 'l':
        return '20px';
      case 'ml':
        return '18px';
      case 'm':
        return '16px';
      case 's':
        return '12px';
      default:
        return '16px';
    }
  }};
  font-weight: ${(props) => (props.bold ? 'bold' : '500')};
  ${(props) => props.align && `text-align: ${props.align}`}
`;
