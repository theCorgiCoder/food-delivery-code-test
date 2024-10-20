// svg.d.ts
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg"; // Import from react-native-svg
  const content: React.FC<SvgProps>; // Make sure you use the correct type here
  export default content;
}
