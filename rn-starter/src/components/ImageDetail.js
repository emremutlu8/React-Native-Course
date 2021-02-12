import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Text>
        <Image source={imageSource} />
        {title} {imageSource}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
