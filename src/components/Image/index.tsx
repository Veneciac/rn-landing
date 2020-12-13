import React from 'react';
import {Animated, ImageSourcePropType, ImageBackground as RNImageBackground} from 'react-native';
import {StyledImage} from './style';

interface ImageProps {
  source: ImageSourcePropType;
  imgWidth?: number;
  imgHeight?: number;
}
const Image: React.FC<ImageProps> = ({
  source,
  imgWidth,
  children,
  imgHeight,
  ...props
}) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  let baseStyle = {width: imgWidth, height: imgHeight};

  const onLoad = (event) => {
    const value = event.nativeEvent.source;

    if (imgWidth && !imgHeight) {
      setWidth(imgWidth);
      setHeight(value.height * (imgWidth / value.width));
    } else if (!imgWidth && imgHeight) {
      setWidth(value.width * (imgHeight / value.height));
      setHeight(imgHeight);
    }
  };

  return <StyledImage
    baseStyle={baseStyle}
    source={source}
    onLoad={onLoad}
    {...props}
  />;
};

export default React.memo(Image);
