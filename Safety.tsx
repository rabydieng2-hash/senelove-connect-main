import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 backdrop-blur text-primary-foreground px-3 py-1.5 text-xs font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5" /> 30 JOURS PREMIUM OFFERTS
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground text-balance leading-tight">
              Votre prochaine histoire commence aujourd'hui.
            </h2>
            <p className="mt-5 text-primary-foreground/90 text-lg max-w-xl">
              Inscrivez-vous gratuitement. Vérification rapide, profils sérieux, vraies rencontres.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="gold" size="xl" className="group">
                <Link to="/auth">
                  Commencer maintenant
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground">
                Voir les abonnements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
