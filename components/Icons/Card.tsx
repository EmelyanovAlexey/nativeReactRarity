import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Card = () => {
  return (
    <Svg width="22" height="18" viewBox="0 0 22 18" fill="none">
      <Path
        d="M1.25 5.25H20.75M1.25 6H20.75M4.25 11.25H10.25M4.25 13.5H7.25M3.5 16.5H18.5C19.0967 16.5 19.669 16.2629 20.091 15.841C20.5129 15.419 20.75 14.8467 20.75 14.25V3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75V14.25C1.25 14.8467 1.48705 15.419 1.90901 15.841C2.33097 16.2629 2.90326 16.5 3.5 16.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Card;
