import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');
  const selectedId = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button title="Go to Meal details" onPress={()=>{
        props.navigation.navigate({routeName: 'MealDetail'});
        // props.navigation.push('Categories');
      }}></Button>
      <Text>{selectedId.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
