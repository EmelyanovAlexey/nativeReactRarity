import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

type Props = {
  fill?: string;
};

const Record = ({ fill = "white" }: Props) => {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <Circle cx="18.0001" cy="18.0001" r="12.4" fill={fill} />
      <Path
        d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18ZM3.15938 18C3.15938 26.1962 9.80375 32.8406 18 32.8406C26.1962 32.8406 32.8406 26.1962 32.8406 18C32.8406 9.80375 26.1962 3.15938 18 3.15938C9.80375 3.15938 3.15938 9.80375 3.15938 18Z"
        fill={fill}
      />
    </Svg>
  );
};

export default Record;
