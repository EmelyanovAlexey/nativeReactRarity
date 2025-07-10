import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  stroke?: string;
  width?: string;
  height?: string;
};

const Cross = ({ stroke = "#989B9E", width = "14", height = "14" }: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        d="M1 13L13 1M1 1L13 13"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Cross;
