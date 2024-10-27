import { ReactNode } from "react";
import { Platform, Pressable, TouchableOpacity, ViewStyle } from "react-native";

interface PressableComponentProps {
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  children: ReactNode;
}

const PressableComponent: React.FC<PressableComponentProps> = ({
  onPress,
  style,
  children,
}) => {
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "transparent" }}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }, style]}
    >
      {children}
    </Pressable>
  );
};

export default PressableComponent;
