import { Quote, Star } from "lucide-react";

const stories = [
  {
    name: "Fatou, 38",
    city: "Dakar · 2 enfants",
    quote: "J'ai apprécié de pouvoir contrôler qui voyait mes photos. Mes enfants passent avant tout, et ici on le comprend.",
  },
  {
    name: "Mamadou, 42",
    city: "Thiès · 3 enfants",
    quote: "Enfin une app où l'on parle vraiment de famille, de co-parentalité, de foi. J'ai rencontré quelqu'un de sérieux en 2 mois.",
  },
  {
    name: "Aminata, 35",
    city: "Saint-Louis · 1 enfant",
    quote: "La vérification d'identité m'a rassurée. Les échanges sont respectueux, à des années-lumière des autres apps.",
  },
];

export const Stories = () => {
  return (
    <section id="stories" className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Témoignages</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            Des histoires qui inspirent
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <figure key={s.name} className="bg-card rounded-3xl p-7 shadow-soft border border-border relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/15" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-relaxed text-foreground">
                "{s.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-display font-semibold">
                  {s.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
