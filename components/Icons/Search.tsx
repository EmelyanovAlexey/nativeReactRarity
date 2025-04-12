import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  stroke?: string;
};

const Search = ({ stroke = "#1C1C1C" }: Props) => {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <Path
        d="M31.5 31.5002L23.7045 23.7047M23.7045 23.7047C25.8143 21.5948 26.9996 18.7332 26.9996 15.7494C26.9996 12.7656 25.8143 9.90406 23.7045 7.7942C21.5946 5.68433 18.733 4.49902 15.7492 4.49902C12.7654 4.49902 9.90382 5.68433 7.79395 7.7942C5.68409 9.90406 4.49878 12.7656 4.49878 15.7494C4.49878 18.7332 5.68409 21.5948 7.79395 23.7047C9.90382 25.8146 12.7654 26.9999 15.7492 26.9999C18.733 26.9999 21.5946 25.8146 23.7045 23.7047Z"
        stroke={stroke}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Search;
