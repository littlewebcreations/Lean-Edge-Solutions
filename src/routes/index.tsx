import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CircleCheck, Factory, Gauge, Users } from "lucide-react";

import factoryAsset from "@/assets/lean-edge-factory.jpg.asset.json";
import leadershipAsset from "@/assets/lean-edge-leadership.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Operational Excellence Consultancy | Lean Edge" },
    { name: "description", content: "Lean Edge Solutions helps manufacturing businesses improve processes, leadership and performance with practical, measurable support." },
    { property: "og:title", content: "Operational Excellence Consultancy | Lean Edge" },
    { property: "og:description", content: "Practical operational improvement. Stronger leadership. Sustainable performance." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const outcomes = [
  { icon: Gauge, title: "Productivity", copy: "More output from available capacity" },
  { icon: CircleCheck, title: "Quality", copy: "Less rework, scrap and variation" },
  { icon: BarChart3, title: "Visibility", copy: "Better data and faster decisions" },
  { icon: Users, title: "People", copy: "Clearer accountability and stronger teams" },
];

const steps = [
  ["01", "Understand", "Listen, observe and establish the current state using data and direct process observation."],
  ["02", "Identify", "Find the constraints, waste, risks and behaviours preventing better performance."],
  ["03", "Prioritise", "Separate the important from the noise and agree a clear improvement plan."],
  ["04", "Implement", "Put practical changes in place with clear ownership and measurable actions."],
  ["05", "Sustain", "Embed routines, standards and leadership behaviours that keep improvement moving."],
];

function HomePage() {
  return <>
    <section className="relative min-h-[720px] overflow-hidden bg-foreground">
      <img src={factoryAsset.url} alt="Operations leaders reviewing a modern manufacturing line" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-24 lg:px-8">
        <div className="max-w-3xl text-background">
          <p className="section-label text-accent">Operational excellence, made practical</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">Turn operational complexity into measurable performance.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-background/85 md:text-xl">We work alongside manufacturing leaders and frontline teams to build clearer processes, stronger capability and sustainable results.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-none px-7"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-none border-background/50 bg-background/10 px-7 text-background hover:bg-background hover:text-foreground"><Link to="/services">Explore our services</Link></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:px-8">
        <div className="lg:sticky lg:top-32">
          <p className="section-label">What we improve</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Better operations start with a clear view of what matters.</h2>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {outcomes.map(({ icon: Icon, title, copy }) => <article key={title} className="bg-background p-7 md:p-9">
            <Icon className="size-7 text-accent" strokeWidth={1.7} />
            <h3 className="mt-7 font-display text-xl font-bold">{title}</h3>
            <p className="mt-2 leading-7 text-muted-foreground">{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <img src={leadershipAsset.url} alt="Leadership team working together at a performance board" loading="lazy" width={1400} height={1000} className="aspect-[7/5] w-full object-cover" />
          <div className="absolute -bottom-5 -right-3 bg-primary px-6 py-5 text-primary-foreground md:right-6">
            <p className="font-display text-2xl font-bold">Hands-on.</p><p className="text-sm text-primary-foreground/75">Built around your operation.</p>
          </div>
        </div>
        <div className="lg:pl-10">
          <p className="section-label">What we do</p>
          <h2 className="mt-5 font-display text-4xl font-bold">The process and the people.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Operational performance improves when robust systems and capable leadership move together. We help you strengthen both.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div><Factory className="text-primary"/><h3 className="mt-3 font-display font-bold">Operational Excellence</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Flow, capacity, quality, standard work and continuous improvement.</p></div>
            <div><Users className="text-accent"/><h3 className="mt-3 font-display font-bold">Leadership & Performance</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Alignment, accountability, daily management and team ownership.</p></div>
          </div>
          <Button asChild variant="link" className="mt-8 h-auto p-0 font-semibold"><Link to="/services">See all services <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>

    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="section-label">How we work</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-2xl font-display text-4xl font-bold">A clear path from insight to lasting change.</h2><Button asChild variant="outline" className="w-fit rounded-none"><Link to="/about">Our approach</Link></Button></div>
        <div className="mt-12 grid border-y border-border md:grid-cols-5">
          {steps.map(([number,title,copy]) => <article key={number} className="border-b border-border py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <p className="font-display text-4xl font-bold text-primary/25">{number}.</p><h3 className="mt-7 font-display text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
          </article>)}
        </div>
      </div>
    </section>
    <CtaBand title="Ready to give your business the edge?" />
  </>;
}