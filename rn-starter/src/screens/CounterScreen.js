import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0); // setCounter is a function

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Deccrease'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
