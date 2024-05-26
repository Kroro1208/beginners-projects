import { ChangeEvent, useState } from "react";

type UseConvert = () => {
  temperature: number;
  dollar: number;
  meter: number;
  handleTemperatureChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDollarChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMeterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  convertCtoF: (temperature: number) => number;
  convertDollarToYen: (dollar: number) => number;
  convertMeterToFeet: (meter: number) => number;
};

export const ConvertNumberHook: UseConvert = () => {
  const [temperature, setTemperature] = useState(0);
  const [dollar, setDollar] = useState(0);
  const [meter, setMeter] = useState(0);

  const handleTemperatureChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTemperature(Number(e.target.value));
  };

  const handleDollarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDollar(Number(e.target.value));
  };

  const handleMeterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMeter(Number(e.target.value));
  };

  const convertCtoF = (temperature: number) => {
    return (temperature * 9) / 5 + 32;
  };

  const convertDollarToYen = (dollar: number) => {
    const conversionRate = 155; // 為替レートは仮定値です
    return dollar * conversionRate;
  };

  const convertMeterToFeet = (meter: number) => {
    return meter * 3.28084;
  };

  return {
    temperature,
    dollar,
    meter,
    handleTemperatureChange,
    handleDollarChange,
    handleMeterChange,
    convertCtoF,
    convertDollarToYen,
    convertMeterToFeet,
  };
};
