import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedId = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Meal details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
          // props.navigation.push('Categories');
        }}
      ></Button>
      <Text>{selectedId.title}</Text>
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategories = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategories.title,
    headerStyle: {
      textAlign: "center",
      alignSelf: "center",
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
