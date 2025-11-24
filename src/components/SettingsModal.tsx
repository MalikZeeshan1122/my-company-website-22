import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useSettings } from "@/context/SettingsContext";

export const SettingsModal = () => {
  const [open, setOpen] = useState(false);
  const {
    useVideo,
    setUseVideo,
    animationsEnabled,
    setAnimationsEnabled,
    parallaxIntensity,
    setParallaxIntensity,
  } = useSettings();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-24 right-8 z-50 w-12 h-12 rounded-full shadow-lg animate-fade-in hover-scale"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Display Settings</DialogTitle>
          <DialogDescription>
            Customize your viewing experience with these settings.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Background Toggle */}
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="video-background" className="flex flex-col space-y-1">
              <span>Video Background</span>
              <span className="font-normal text-sm text-muted-foreground">
                Use video instead of static image
              </span>
            </Label>
            <Switch
              id="video-background"
              checked={useVideo}
              onCheckedChange={setUseVideo}
            />
          </div>

          {/* Animations Toggle */}
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="animations" className="flex flex-col space-y-1">
              <span>Animations</span>
              <span className="font-normal text-sm text-muted-foreground">
                Enable scroll reveal animations
              </span>
            </Label>
            <Switch
              id="animations"
              checked={animationsEnabled}
              onCheckedChange={setAnimationsEnabled}
            />
          </div>

          {/* Parallax Intensity */}
          <div className="space-y-3">
            <Label htmlFor="parallax" className="flex flex-col space-y-1">
              <span>Parallax Intensity</span>
              <span className="font-normal text-sm text-muted-foreground">
                Adjust the parallax scrolling effect (0 = disabled, 1 = maximum)
              </span>
            </Label>
            <div className="flex items-center space-x-4">
              <Slider
                id="parallax"
                min={0}
                max={1}
                step={0.1}
                value={[parallaxIntensity]}
                onValueChange={(value) => setParallaxIntensity(value[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12 text-right">
                {parallaxIntensity.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Reset Button */}
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setUseVideo(false);
              setAnimationsEnabled(true);
              setParallaxIntensity(0.5);
            }}
          >
            Reset to Defaults
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
