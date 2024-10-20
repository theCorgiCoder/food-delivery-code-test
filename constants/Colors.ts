export const Colors = {
  Black: "#1F2B2E",
  White: "#FFFFFF",
  Grey: "#999999",
  Selected: "#E2A364",
  Positive: "#2ECC71",
  Negative: "#C0392B",
  background: "#F8F8F8",
};

export const getTextColor = (color: string) => {
  switch (color) {
    case "Black":
      return { color: Colors.Black };
    case "White":
      return { color: Colors.White };
    case "Grey":
      return { color: Colors.Grey };
    case "Selected":
      return { color: Colors.Selected };
    case "Positive":
      return { color: Colors.Positive };
    case "Negative":
      return { color: Colors.Negative };
    default:
      return { color: Colors.Black };
  }
};
