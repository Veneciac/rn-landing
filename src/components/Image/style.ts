import styled from 'styled-components';
import {Image} from 'react-native';

export const StyledImage = styled(Image)`
  width: ${(props) => props.baseStyle.width}px;
  height: ${(props) => props.baseStyle.height}px;
`;
