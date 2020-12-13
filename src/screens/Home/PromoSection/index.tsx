import React, {useRef, useState} from 'react';
import {Container, Title} from './style';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {View, Dimensions, StyleSheet, Platform} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const PromoSection = () => {
  const [activeEntries, setActiveEntries] = useState<number>(0);
  const carouselRef = useRef(null);

  let list = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          dimensions={{height: 132}}
          {...parallaxProps}
        />
      </View>
    );
  };


  return (
    <Container>
      <Title>
        Ongoing Promo
      </Title>

      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={list}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveEntries(index)}
        hasParallaxImages={true}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 132,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    borderRadius: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
});

export default PromoSection;