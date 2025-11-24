import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useParallax } from "@/hooks/useParallax";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const useVideo = false; // Default: use image background
  const parallaxIntensity = 0.5; // Default parallax intensity
  const parallaxOffset = useParallax(parallaxIntensity);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });

  const projectsCount = useCountUp(330, 2000, statsVisible);
  const satisfactionCount = useCountUp(98, 2000, statsVisible);
  const teamCount = useCountUp(50, 2000, statsVisible);
  const yearsCount = useCountUp(10, 2000, statsVisible);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video with Parallax and Overlay */}
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          <>
            <video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-1366-large.mp4" type="video/mp4" />
            </video>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-24 right-8 z-20 bg-background/50 backdrop-blur-sm"
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${parallaxOffset}px)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Ideas
            <br />
            <span className="text-gradient">Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We build cutting-edge digital solutions that help businesses scale. From web apps to mobile experiences, we turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{projectsCount}+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{satisfactionCount}%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{teamCount}+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{yearsCount}+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
