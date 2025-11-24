import { createContext, useContext, useState, ReactNode } from "react";

interface SettingsContextType {
  useVideo: boolean;
  setUseVideo: (value: boolean) => void;
  animationsEnabled: boolean;
  setAnimationsEnabled: (value: boolean) => void;
  parallaxIntensity: number;
  setParallaxIntensity: (value: number) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [useVideo, setUseVideo] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [parallaxIntensity, setParallaxIntensity] = useState(0.5);

  return (
    <SettingsContext.Provider
      value={{
        useVideo,
        setUseVideo,
        animationsEnabled,
        setAnimationsEnabled,
        parallaxIntensity,
        setParallaxIntensity,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
