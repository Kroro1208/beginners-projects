import { useEffect, useState } from "react";

type UseDigitalClock = () => {
  currentTime: Date | null;
};

export const DigitalClockHook: UseDigitalClock = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  const updateClock = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(updateClock, 1000);

    updateClock();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return {
    currentTime,
  };
};
