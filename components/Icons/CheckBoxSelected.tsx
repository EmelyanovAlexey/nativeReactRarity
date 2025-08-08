import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  fill?: string;
  stroke?: string;
};

const CheckBoxSelected = ({ fill = "#247B7B", stroke = "white" }: Props) => {
  return (
    <Svg width="35" height="35" viewBox="0 0 36 36" fill="none">
      <Path
        d="M6 18C6 12.3431 6 9.51472 7.75736 7.75736C9.51472 6 12.3431 6 18 6C23.6569 6 26.4853 6 28.2426 7.75736C30 9.51472 30 12.3431 30 18C30 23.6569 30 26.4853 28.2426 28.2426C26.4853 30 23.6569 30 18 30C12.3431 30 9.51472 30 7.75736 28.2426C6 26.4853 6 23.6569 6 18Z"
        fill={fill}
      />
      <Path
        d="M11.25 17.2059L16.25 22.5L24.75 13.5"
        stroke={stroke}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckBoxSelected;
