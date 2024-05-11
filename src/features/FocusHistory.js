import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>You haven't focused on anything yet.</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return <Text style={styles.item}>- {item}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things You've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: "bold",
  },
  errorContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  error: {
    color: colors.lightGrey,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    color: colors.lightGrey,
    fontSize: fontSizes.md,
    paddingLeft: spacing.md,
    paddingBottom: spacing.sm,
  },
});
