import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const Arrow = () => {
  return (
    <Svg width="61" height="60" viewBox="0 0 61 60" fill="none">
      <Rect x="0.5" width="60" height="60" rx="30" fill="#00B341" />
      <Path
        d="M21.4795 31L29.4795 39L41.4795 21"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Arrow;
