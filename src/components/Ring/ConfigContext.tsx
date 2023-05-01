import { ReactNode, createContext, useContext, useState } from "react";

export type Metal = "gold" | "silver";
export type Diamond = "diamond1" | "diamond2" | "diamond3";
interface ConfigContextType {
  headColor: Metal;
  bodyColor: Metal;
  diamond: Diamond;

  setHeadColor: React.Dispatch<React.SetStateAction<Metal>>;
  setBodyColor: React.Dispatch<React.SetStateAction<Metal>>;
  setDiamond: React.Dispatch<React.SetStateAction<Diamond>>;
}

const ConfigContext = createContext({} as ConfigContextType);

export const ConfigContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [headColor, setHeadColor] = useState<Metal>("gold");
  const [bodyColor, setBodyColor] = useState<Metal>("gold");
  const [diamond, setDiamond] = useState<Diamond>("diamond1");
  return (
    <ConfigContext.Provider
      value={{
        headColor,
        bodyColor,
        diamond,
        setHeadColor,
        setBodyColor,
        setDiamond,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useRingConfig = () => useContext(ConfigContext);
