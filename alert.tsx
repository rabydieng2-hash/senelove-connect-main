import { Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SunLogo } from "@/components/SunLogo";

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <SunLogo size={40} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight">
              Yee<span className="text-primary">sal</span>
            </span>
            <span className="font-display text-[10px] italic text-muted-foreground mt-0.5">
              Recommencez avec confiance
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">Comment ça marche</a>
          <a href="#safety" className="hover:text-foreground transition">Sécurité</a>
          <a href="#stories" className="hover:text-foreground transition">Témoignages</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition px-3 py-2 rounded-full">
            <Globe2 className="h-4 w-4" /> FR
          </button>
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex"><Link to="/auth">Rejoindre</Link></Button>
        </div>
      </div>
    </header>
  );
};
