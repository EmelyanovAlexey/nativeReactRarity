import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  stroke?: string;
};

const Сhevron = ({ stroke = "#989B9E" }: Props) => {
  return (
    <Svg width="17" height="10" viewBox="0 0 17 10" fill="none">
      <Path
        d="M16 1.25L8.5 8.75L1 1.25"
        stroke="#989B9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Сhevron;
