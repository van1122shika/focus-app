import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import RoundedButton from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

const Focus = ({ setCSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          label={"What would you like to focus on?"}
          underlineColor={colors.purple}
          activeUnderlineColor={colors.purple}
          outlineColor={colors.purple}
          activeOutlineColor={colors.purple}
          textColor={colors.darkGrey}
          style={styles.textInput}
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.btn}>
          <RoundedButton
            title={"+"}
            size={50}
            onPress={() => {
              setCSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  btn: {
    justifyContent: "center",
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
});
