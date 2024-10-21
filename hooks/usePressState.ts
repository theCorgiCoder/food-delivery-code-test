import { Colors } from "@/constants/Colors";
import { useState } from "react";

const usePressState = (defaultColor: string) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const pressedColor = Colors.Selected;

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const backgroundColor = isPressed ? pressedColor : defaultColor;

  return {
    isPressed,
    handlePressIn,
    handlePressOut,
    backgroundColor,
  };
};

export default usePressState;
