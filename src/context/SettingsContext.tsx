import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface SettingsContextType {
  useVideo: boolean;
  setUseVideo: (value: boolean) => void;
  animationsEnabled: boolean;
  setAnimationsEnabled: (value: boolean) => void;
  parallaxIntensity: number;
  setParallaxIntensity: (value: number) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const STORAGE_KEY = "app-settings";

const defaultSettings = {
  useVideo: false,
  animationsEnabled: true,
  parallaxIntensity: 0.5,
};

const loadSettings = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error("Failed to load settings from localStorage:", error);
  }
  return defaultSettings;
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [useVideo, setUseVideo] = useState(loadSettings().useVideo);
  const [animationsEnabled, setAnimationsEnabled] = useState(loadSettings().animationsEnabled);
  const [parallaxIntensity, setParallaxIntensity] = useState(loadSettings().parallaxIntensity);

  // Initialize settings
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Save to localStorage whenever settings change
  useEffect(() => {
    if (!isInitialized) return;

    try {
      const settings = {
        useVideo,
        animationsEnabled,
        parallaxIntensity,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error("Failed to save settings to localStorage:", error);
    }
  }, [useVideo, animationsEnabled, parallaxIntensity, isInitialized]);

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
