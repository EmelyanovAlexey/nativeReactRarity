import React, { useEffect, useRef } from "react";
import { Animated, Easing, ViewStyle, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Colors } from "../shared/constStyle";

type SpinnerProps = {
  size?: number; // ширина и высота
};

const Spinner: React.FC<SpinnerProps> = ({ size = 40 }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const startSpinning = () => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startSpinning());
  };

  useEffect(() => {
    startSpinning();
    return () => rotateAnim.stopAnimation();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const radius = size / 2 - 4; // 4 — толщина stroke

  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ rotate: spin }],
        } as ViewStyle,
      ]}
    >
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={Colors.Primary}
          strokeWidth={4}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#fff"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="70"
          fill="none"
        />
      </Svg>
    </Animated.View>
  );
};

export default Spinner;
