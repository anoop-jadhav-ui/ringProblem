import { ReactNode, createContext, useContext, useState } from "react";

interface ConfigContextType {
  headColor: "gold" | "silver";
  bodyColor: "gold" | "silver";
  diamond: 1 | 2 | 3;
  setHeadColor: React.Dispatch<React.SetStateAction<"gold" | "silver">>;
  setBodyColor: React.Dispatch<React.SetStateAction<"gold" | "silver">>;
  setDiamond: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const ConfigContext = createContext({} as ConfigContextType);

export const ConfigContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [headColor, setHeadColor] = useState<"gold" | "silver">("gold");
  const [bodyColor, setBodyColor] = useState<"gold" | "silver">("gold");
  const [diamond, setDiamond] = useState<1 | 2 | 3>(1);
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
