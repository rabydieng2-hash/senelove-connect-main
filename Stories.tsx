import { SunLogo } from "@/components/SunLogo";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <SunLogo size={36} />
              <span className="font-display text-lg font-semibold">Yeesal</span>
            </div>
            <p className="mt-4 text-sm text-secondary-foreground/70 max-w-xs">
              Rencontres sérieuses pour parents solos au Sénégal. Avec respect, dignité et culture.
            </p>
          </div>
          {[
            { title: "Produit", links: ["Fonctionnalités", "Abonnements", "Sécurité", "Témoignages"] },
            { title: "Entreprise", links: ["À propos", "Blog", "Carrières", "Contact"] },
            { title: "Légal", links: ["Confidentialité", "Conditions", "Modération", "Cookies"] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-secondary-foreground/60">
          <p>© 2026 Yeesal · Fait avec ❤️ à Dakar</p>
          <p className="font-display italic">Jërëjëf · Merci · Thank you</p>
        </div>
      </div>
    </footer>
  );
};
