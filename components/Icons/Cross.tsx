import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  stroke?: string;
};

const Cross = ({ stroke = "#989B9E" }: Props) => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
