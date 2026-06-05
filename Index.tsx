@tailwind base;
@tailwind components;
@tailwind utilities;

/* Yeesal — Design System
   Premium Burgundy & Gold on Ivory. All colors in HSL.
   Brand: Burgundy #7A1E3A · Gold #D4A017 · Ivory #F8F5F0
*/

@layer base {
  :root {
    /* Core */
    --background: 36 33% 96%;          /* ivory #F8F5F0 */
    --foreground: 342 35% 12%;         /* deep burgundy ink */

    --card: 0 0% 100%;
    --card-foreground: 342 35% 12%;

    --popover: 0 0% 100%;
    --popover-foreground: 342 35% 12%;

    /* Brand — Burgundy */
    --primary: 342 61% 30%;            /* #7A1E3A */
    --primary-foreground: 36 50% 98%;
    --primary-glow: 342 55% 42%;

    /* Deep burgundy as secondary */
    --secondary: 342 55% 18%;
    --secondary-foreground: 36 50% 98%;

    /* Warm muted ivory */
    --muted: 36 25% 92%;
    --muted-foreground: 342 12% 35%;

    /* Gold accent */
    --accent: 45 80% 46%;              /* #D4A017 */
    --accent-foreground: 342 55% 12%;
    --accent-glow: 45 90% 58%;

    --destructive: 0 70% 42%;
    --destructive-foreground: 36 50% 98%;

    --border: 36 22% 86%;
    --input: 36 22% 86%;
    --ring: 342 61% 30%;

    --radius: 1rem;

    /* Gradients */
    --gradient-warm: linear-gradient(135deg, hsl(342 61% 30%) 0%, hsl(342 55% 38%) 55%, hsl(45 80% 46%) 100%);
    --gradient-sunset: linear-gradient(180deg, hsl(36 50% 97%) 0%, hsl(36 40% 92%) 60%, hsl(45 60% 88%) 100%);
    --gradient-burgundy: linear-gradient(135deg, hsl(342 61% 30%) 0%, hsl(342 70% 20%) 100%);
    --gradient-gold: linear-gradient(135deg, hsl(45 80% 46%) 0%, hsl(45 90% 58%) 100%);
    --gradient-sunrise: radial-gradient(ellipse at 50% 100%, hsl(45 90% 58% / 0.55) 0%, hsl(45 80% 46% / 0.25) 30%, transparent 65%);
    --gradient-hero-overlay: linear-gradient(180deg, hsla(342, 61%, 18%, 0) 0%, hsla(342, 70%, 12%, 0.88) 100%);

    /* Shadows */
    --shadow-soft: 0 4px 24px -6px hsl(342 50% 20% / 0.14);
    --shadow-elegant: 0 18px 50px -12px hsl(342 70% 18% / 0.32);
    --shadow-glow: 0 0 60px hsl(45 90% 58% / 0.40);
    --shadow-gold: 0 8px 30px -8px hsl(45 80% 46% / 0.45);

    /* Motion */
    --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);

    /* Fonts */
    --font-display: 'Fraunces', ui-serif, Georgia, serif;
    --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  }

  .dark {
    --background: 342 40% 8%;
    --foreground: 36 33% 96%;
    --card: 342 38% 11%;
    --card-foreground: 36 33% 96%;
    --popover: 342 38% 11%;
    --popover-foreground: 36 33% 96%;
    --primary: 342 55% 48%;
    --primary-foreground: 36 50% 98%;
    --secondary: 342 45% 22%;
    --secondary-foreground: 36 33% 96%;
    --muted: 342 25% 15%;
    --muted-foreground: 36 18% 70%;
    --accent: 45 85% 55%;
    --accent-foreground: 342 55% 10%;
    --destructive: 0 65% 45%;
    --destructive-foreground: 36 33% 96%;
    --border: 342 25% 18%;
    --input: 342 25% 18%;
    --ring: 45 85% 55%;
  }
}

@layer base {
  * { @apply border-border; }
  html { -webkit-tap-highlight-color: transparent; }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: var(--font-body);
    font-feature-settings: "ss01", "cv11";
  }
  h1, h2, h3, h4, .font-display {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }
}

@layer utilities {
  .bg-gradient-warm { background-image: var(--gradient-warm); }
  .bg-gradient-sunset { background-image: var(--gradient-sunset); }
  .bg-gradient-burgundy { background-image: var(--gradient-burgundy); }
  .bg-gradient-gold { background-image: var(--gradient-gold); }
  .bg-gradient-sunrise { background-image: var(--gradient-sunrise); }
  /* Back-compat: pages previously used bg-gradient-teal — alias to burgundy */
  .bg-gradient-teal { background-image: var(--gradient-burgundy); }
  .shadow-soft { box-shadow: var(--shadow-soft); }
  .shadow-elegant { box-shadow: var(--shadow-elegant); }
  .shadow-glow { box-shadow: var(--shadow-glow); }
  .shadow-gold { box-shadow: var(--shadow-gold); }
  .text-balance { text-wrap: balance; }
}

@layer components {
  .glass-card {
    @apply bg-card/70 backdrop-blur-xl border border-border/60;
  }
}

@keyframes float-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 hsl(var(--accent) / 0.5); }
  50% { box-shadow: 0 0 0 16px hsl(var(--accent) / 0); }
}
@keyframes sun-rise {
  0% { transform: translateY(40%) scale(0.85); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
.animate-float-up { animation: float-up 0.8s var(--ease-out-soft) both; }
.animate-pulse-glow { animation: pulse-glow 2.4s ease-in-out infinite; }
.animate-sun-rise { animation: sun-rise 1.4s var(--ease-out-soft) both; }
