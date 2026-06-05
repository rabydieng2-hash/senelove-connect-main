import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-couple.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-gradient-sunset -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-sunrise -z-10" />

      {/* Rising sun motif */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 -z-10 animate-sun-rise">
        <svg width="640" height="320" viewBox="0 0 640 320" className="opacity-90">
          <defs>
            <radialGradient id="sunCore" cx="50%" cy="100%" r="70%">
              <stop offset="0%" stopColor="hsl(var(--accent-glow))" stopOpacity="1" />
              <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="0.85" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="320" cy="320" r="180" fill="url(#sunCore)" />
          {/* Subtle rays */}
          <g stroke="hsl(var(--accent))" strokeWidth="1.4" strokeLinecap="round" opacity="0.45">
            {Array.from({ length: 9 }).map((_, i) => {
              const angle = -90 + (i - 4) * 12;
              const r1 = 195, r2 = 245;
              const rad = (angle * Math.PI) / 180;
              return (
                <line key={i}
                  x1={320 + Math.cos(rad) * r1} y1={320 + Math.sin(rad) * r1}
                  x2={320 + Math.cos(rad) * r2} y2={320 + Math.sin(rad) * r2}
                />
              );
            })}
          </g>
        </svg>
      </div>

      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl -z-10" />

      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Copy */}
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 backdrop-blur px-3 py-1.5 text-xs font-medium text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Nouveau · Pour les parents divorcés au Sénégal
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-balance">
            Une seconde chance,{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-warm bg-clip-text text-transparent">avec dignité</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M2 6 Q 50 1, 100 5 T 198 4" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
            <span className="font-display italic text-foreground">Nanga def.</span> La première plateforme de rencontres pensée pour les parents solos du Sénégal — femmes et hommes, divorcés ou veufs — pour bâtir une relation sérieuse, dans le respect de votre famille.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/auth">
                Créer mon profil
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl"><Link to="/auth">J'ai déjà un compte</Link></Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-warm" style={{ filter: `hue-rotate(${i*15}deg)` }} />
              ))}
            </div>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">+2 400 membres vérifiés</span> à Dakar, Thiès, Saint-Louis
            </p>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative animate-float-up [animation-delay:200ms]">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-warm rotate-3 shadow-elegant" />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-elegant">
              <img
                src={heroImage}
                alt="Couple sénégalais souriant en tenue traditionnelle moderne"
                className="h-full w-full object-cover"
                width={1080}
                height={1350}
              />
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />

              {/* Floating verified card */}
              <div className="absolute top-5 left-5 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 shadow-soft">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-foreground">Profil vérifié</div>
                  <div className="text-muted-foreground">Identité confirmée</div>
                </div>
              </div>

              {/* Profile preview card */}
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4 shadow-elegant">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-semibold text-foreground">Aïssatou, 36</div>
                    <div className="text-xs text-muted-foreground">Dakar · 2 enfants · Pratiquante</div>
                  </div>
                  <button className="h-12 w-12 rounded-full bg-gradient-warm flex items-center justify-center shadow-glow animate-pulse-glow" aria-label="J'aime">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
