export const Colors = {
  Black: "#1F2B2E",
  White: "#FFFFFF",
  Grey: "#999999",
  Selected: "#E2A364",
  Positive: "#2ECC71",
  Negative: "#C0392B",
  Background: "#F8F8F8",
};

export const getTextColor = (color: string) => {
  switch (color) {
    case "black":
      return { color: Colors.Black };
    case "white":
      return { color: Colors.White };
    case "grey":
      return { color: Colors.Grey };
    case "selected":
      return { color: Colors.Selected };
    case "positive":
      return { color: Colors.Positive };
    case "negative":
      return { color: Colors.Negative };
    default:
      return { color: Colors.Black };
  }
};
