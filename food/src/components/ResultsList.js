import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal // Liste yatay olsun dedik
        showsHorizontalScrollIndicator={false} // Kaydırma çubuğunu gizledik
        data={results}
        keyExtractor={(result) => result.id} // Her flatlist kendi özel key'ine sahip olmak zorunda
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                () => navigation.navigate('ResultsShow', { id: item.id }) // Navigation diye bir global objeye atadık
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
