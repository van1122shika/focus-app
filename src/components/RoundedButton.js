import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "../utils/colors";

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.purple,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: size / 3,
    textTransform: "uppercase"
  },
});
