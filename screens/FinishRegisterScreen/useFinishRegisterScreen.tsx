import { useEffect, useState } from "react";

export default function useFinishRegisterScreen() {
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 минуты в секундах
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsActive(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(1, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return {
    isActive,
    time: formatTime(timeLeft),
  };
}
