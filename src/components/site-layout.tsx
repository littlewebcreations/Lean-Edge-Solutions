import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Menu } from "lucide-react";
import type { ReactNode } from "react";

import logoAsset from "@/assets/lean-edge-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/edge-360", label: "EDGE 360" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="Lean Edge Solutions home" className="shrink-0">
          <img src={logoAsset.url} alt="Lean Edge Solutions" className="h-11 w-auto" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="rounded-none px-6">
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[86%] border-l-primary/20 pt-8 sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <img src={logoAsset.url} alt="Lean Edge Solutions" className="h-10 w-auto" />
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="mt-12 flex flex-col gap-1">
              {links.map((link) => (
                <SheetClose asChild key={link.to}>
                  <Link
                    to={link.to}
                    className="border-b border-border py-4 font-display text-xl font-semibold text-foreground"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-7 rounded-none">
                  <Link to="/contact">Start a conversation</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <img src={logoAsset.url} alt="Lean Edge Solutions" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-md text-sm leading-7 text-background/70">
            Practical operational improvement. Stronger leadership. Sustainable performance.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase text-accent">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-background/75">
            {links.slice(1).map((link) => <Link key={link.to} to={link.to} className="hover:text-background">{link.label}</Link>)}
            <Link to="/contact" className="hover:text-background">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase text-accent">Get in touch</p>
          <a href="mailto:sales@leanedge.co.uk" className="mt-4 inline-flex items-center gap-2 text-sm text-background/75 hover:text-background">
            <Mail className="size-4" /> sales@leanedge.co.uk
          </a>
        </div>
      </div>
      <div className="border-t border-background/15 px-5 py-5 text-center text-xs text-background/55">
        © {new Date().getFullYear()} Lean Edge Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <p className="section-label">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        <div className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}

export function CtaBand({ title, copy = "Let’s identify where your business can perform better." }: { title: string; copy?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">{copy}</p>
        </div>
        <Button asChild variant="secondary" size="lg" className="w-fit shrink-0 rounded-none px-7">
          <Link to="/contact">Start a conversation <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}