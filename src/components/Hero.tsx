import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useParallax } from "@/hooks/useParallax";
import { AnimatedParticles } from "@/components/AnimatedParticles";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const useVideo = true; // Enable video background
  const parallaxIntensity = 0.5; // Default parallax intensity
  const parallaxOffset = useParallax(parallaxIntensity);
  const parallaxOffsetSlow = useParallax(0.3);
  const parallaxOffsetFast = useParallax(0.7);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });

  const projectsCount = useCountUp(330, 2000, statsVisible);
  const satisfactionCount = useCountUp(98, 2000, statsVisible);
  const teamCount = useCountUp(50, 2000, statsVisible);
  const yearsCount = useCountUp(10, 2000, statsVisible);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 z-[5]">
        <AnimatedParticles />
      </div>

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)] z-[2]"></div>
      </div>

      {/* Parallax Layers */}
      <div 
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{ transform: `translateY(${parallaxOffsetSlow}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div 
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{ transform: `translateY(${parallaxOffsetFast}px)` }}
      >
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-56 h-56 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-semibold text-primary">✨ Award-Winning Digital Agency</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Transform Your Ideas
            <br />
            <span className="text-gradient drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)]">Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build cutting-edge digital solutions that help businesses scale. From web apps to mobile experiences, we turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-10 py-6 h-auto shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300"
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
              className="text-lg px-10 py-6 h-auto backdrop-blur-sm bg-background/50 border-2 hover:bg-background/80 transition-all duration-300"
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
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-2xl backdrop-blur-md bg-background/30 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold text-gradient mb-3 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">{projectsCount}+</div>
            <div className="text-foreground/70 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center p-6 rounded-2xl backdrop-blur-md bg-background/30 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold text-gradient mb-3 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">{satisfactionCount}%</div>
            <div className="text-foreground/70 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-2xl backdrop-blur-md bg-background/30 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold text-gradient mb-3 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">{teamCount}+</div>
            <div className="text-foreground/70 font-medium">Team Members</div>
          </div>
          <div className="text-center p-6 rounded-2xl backdrop-blur-md bg-background/30 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold text-gradient mb-3 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">{yearsCount}+</div>
            <div className="text-foreground/70 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
