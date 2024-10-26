import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./ErrorMessage.styles";

interface ErrorProps {
  message: string | null;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </SafeAreaView>
  );
};

export default Error;
