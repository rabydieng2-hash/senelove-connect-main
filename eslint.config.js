import { useEffect, useState } from "react";
import { SunLogo } from "@/components/SunLogo";
import { useNavigate, Link } from "react-router-dom";
import { Heart, LogOut, Pencil, MapPin, BookOpen, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Profile = {
  full_name: string | null;
  birth_date: string | null;
  city: string | null;
  languages: string[] | null;
  marital_status: string | null;
  religion: string | null;
  education: string | null;
  profession: string | null;
  children_count: number | null;
  co_parenting_situation: string | null;
  bio: string | null;
  onboarding_completed: boolean | null;
};

const age = (d?: string | null) => d ? Math.floor((Date.now() - new Date(d).getTime()) / 31557600000) : null;

const MARITAL_LABEL: Record<string, string> = { divorced: "Divorcé·e", widowed: "Veuf·ve", separated: "Séparé·e" };
const CUSTODY_LABEL: Record<string, string> = { full: "Garde complète", shared: "Garde partagée", partial: "Garde partielle", none: "Pas de garde" };

export default function Profile() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!loading && !user) { navigate("/auth", { replace: true }); return; }
    if (user) {
      supabase.from("profiles").select("*").eq("id", user.id).maybeSingle().then(({ data }) => {
        setProfile(data as Profile);
        if (data && !data.onboarding_completed) navigate("/onboarding", { replace: true });
      });
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => { await signOut(); navigate("/"); };

  if (!profile) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Chargement...</div>;

  return (
    <main className="min-h-screen bg-gradient-sunset pb-20">
      <header className="container py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <SunLogo size={36} />
          <span className="font-display text-xl font-semibold">Yee<span className="text-primary">sal</span></span>
        </Link>
        <Button variant="ghost" size="sm" onClick={handleLogout}><LogOut className="h-4 w-4" /> Déconnexion</Button>
      </header>

      <div className="container max-w-2xl">
        <div className="bg-card rounded-3xl shadow-elegant border border-border overflow-hidden">
          <div className="h-32 bg-gradient-warm" />
          <div className="px-6 sm:px-8 pb-8 -mt-12">
            <div className="h-24 w-24 rounded-full bg-card border-4 border-card shadow-soft flex items-center justify-center text-3xl font-display font-semibold text-primary">
              {profile.full_name?.charAt(0) ?? "?"}
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-semibold">
                  {profile.full_name}{age(profile.birth_date) && <span className="text-muted-foreground">, {age(profile.birth_date)}</span>}
                </h1>
                <div className="mt-1 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {profile.city && <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{profile.city}</span>}
                  {profile.marital_status && <span>· {MARITAL_LABEL[profile.marital_status]}</span>}
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigate("/onboarding")}><Pencil className="h-4 w-4" /> Modifier</Button>
            </div>

            {profile.bio && (
              <p className="mt-6 text-foreground/90 leading-relaxed whitespace-pre-line">{profile.bio}</p>
            )}

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <InfoCard icon={<Users className="h-4 w-4" />} label="Enfants" value={`${profile.children_count ?? 0} · ${profile.co_parenting_situation ? CUSTODY_LABEL[profile.co_parenting_situation] : "—"}`} />
              <InfoCard icon={<BookOpen className="h-4 w-4" />} label="Éducation" value={profile.education || "—"} />
              <InfoCard icon={<BookOpen className="h-4 w-4" />} label="Profession" value={profile.profession || "—"} />
              <InfoCard icon={<BookOpen className="h-4 w-4" />} label="Religion" value={profile.religion || "—"} />
            </div>

            {profile.languages && profile.languages.length > 0 && (
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Langues</p>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((l) => <Badge key={l} variant="secondary">{l}</Badge>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="rounded-2xl border border-border bg-muted/30 p-4">
    <div className="flex items-center gap-2 text-xs text-muted-foreground">{icon}{label}</div>
    <div className="mt-1 font-medium text-foreground">{value}</div>
  </div>
);
