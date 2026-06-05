import { ShieldCheck, Lock, EyeOff, UserCheck, Flag, MessageCircleHeart } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Identité vérifiée", desc: "Pièce d'identité contrôlée par notre équipe avant l'activation du profil." },
  { icon: EyeOff, title: "Vous gardez le contrôle", desc: "Vous décidez qui peut vous voir, vous écrire, et quand révéler vos photos." },
  { icon: Lock, title: "Données protégées", desc: "Chiffrement de bout en bout sur les messages et notes vocales privées." },
  { icon: UserCheck, title: "Modération humaine", desc: "Une équipe sénégalaise modère 24/7 les profils et signalements." },
  { icon: Flag, title: "Signalement facile", desc: "Bloquez ou signalez en un geste. Action sous 4 heures garantie." },
  { icon: MessageCircleHeart, title: "Respect d'abord", desc: "Charte de conduite stricte. Les comportements irrespectueux sont bannis." },
];

export const Safety = () => {
  return (
    <section id="safety" className="relative py-20 md:py-28 bg-gradient-teal text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container relative">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-accent px-3 py-1.5 text-xs font-semibold mb-5">
            <ShieldCheck className="h-3.5 w-3.5" /> SÉCURITÉ & RESPECT
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">
            Pensée pour les parents solos du Sénégal.
          </h2>
          <p className="mt-4 text-secondary-foreground/80 text-lg">
            Une plateforme respectueuse pour les femmes et hommes divorcés ou veufs — chaque fonction protège votre vie privée, votre famille et votre tranquillité.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 border border-secondary-foreground/10 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="h-11 w-11 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-secondary-foreground/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
