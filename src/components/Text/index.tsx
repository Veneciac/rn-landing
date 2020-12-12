import React from 'react';
import {StyledText} from './style';

const Text: React.FC<TextProps> = (props: TextProps) => {
  return (
    <StyledText
      {...props}
      color={props.color}
      bold={props.bold}
      size={props.size}
      align={props.align}>
      {props.children}
    </StyledText>
  );
};

type TextProps = {
  children?: any;
  bold?: boolean;
  size?: 's' | 'm' | 'ml' | 'l' | 'xl';
  color?: string;
  align?: string;
  numberOfLines?: number;
  ellipsizeMode?: string;
};

export default Text;
