import { Phone, UserCircle2, Heart, Coffee } from "lucide-react";

const steps = [
  { n: "01", icon: Phone, title: "Vérification téléphone", desc: "Inscription sécurisée par SMS avec votre numéro sénégalais." },
  { n: "02", icon: UserCircle2, title: "Profil & enfants", desc: "Partagez l'essentiel : situation familiale, valeurs, intentions." },
  { n: "03", icon: Heart, title: "Matchs compatibles", desc: "Notre algorithme valorise la famille, la foi et la proximité." },
  { n: "04", icon: Coffee, title: "Rencontre réelle", desc: "Échangez en privé, puis planifiez une rencontre en toute sécurité." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Le parcours</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            De l'inscription au <em className="not-italic bg-gradient-warm bg-clip-text text-transparent">premier café</em>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Quatre étapes simples, pensées pour les parents occupés.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ n, icon: Icon, title, desc }, i) => (
            <div key={n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px">
                  <svg width="100%" height="2" className="text-border"><line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeDasharray="4 4" /></svg>
                </div>
              )}
              <div className="relative bg-card border border-border rounded-3xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-glow">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="font-display text-3xl font-semibold text-muted-foreground/40">{n}</span>
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
