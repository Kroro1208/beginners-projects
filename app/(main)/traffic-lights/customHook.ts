import { useEffect, useState } from "react";

type UseTrafficLight = () => {
  light: "green" | "red" | "yellow";
};

const cycleLights = { red: "green", yellow: "red", green: "yellow" } as const;

export const TrafficLightsHook: UseTrafficLight = () => {
  const [light, setLights] = useState<keyof typeof cycleLights>("green");

  useEffect(() => {
    const timerId = setTimeout(() => {
      const nextLight = cycleLights[light];
      setLights(nextLight);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [light]);

  return {
    light,
  };
};
