export const colors = {
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
      return { color: colors.Black };
    case "white":
      return { color: colors.White };
    case "grey":
      return { color: colors.Grey };
    case "selected":
      return { color: colors.Selected };
    case "positive":
      return { color: colors.Positive };
    case "negative":
      return { color: colors.Negative };
    default:
      return { color: colors.Black };
  }
};
