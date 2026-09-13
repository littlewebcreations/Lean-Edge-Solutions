import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Operational Improvement Services | Lean Edge" },
    { name: "description", content: "Lean manufacturing, process improvement, leadership alignment and performance management support for operational businesses." },
    { property: "og:title", content: "Operational Improvement Services | Lean Edge" },
    { property: "og:description", content: "Practical support for stronger processes, leadership and performance." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

const operational = ["Value Stream Mapping and process improvement","Lean manufacturing and waste reduction","5S, visual management and workplace organisation","SQDCP / SQDIPP performance management","Capacity, flow and bottleneck analysis","Standard work, SOPs and process control","Root cause analysis, 5 Whys, Fishbone and 8D","Inventory, supplier and material-flow improvement","Continuous improvement systems and action tracking"];
const leadership = ["Leadership team alignment and accountability","Performance management routines and KPI structures","Daily management and effective Gemba practices","Problem-solving capability and decision making","Team engagement and ownership","Management coaching and development","Clear roles, priorities and escalation routes","Building a culture of continuous improvement","Turning strategy into measurable operational action"];

function ServiceList({ number, title, intro, items, accent = false }: { number: string; title: string; intro: string; items: string[]; accent?: boolean }) {
  return <article className="border-t-4 border-primary bg-background p-7 md:p-10">
    <div className="flex items-start justify-between gap-4"><div><p className={`font-display text-sm font-bold uppercase ${accent ? "text-accent" : "text-primary"}`}>Service area {number}</p><h2 className="mt-3 font-display text-3xl font-bold">{title}</h2></div><span className="font-display text-5xl font-bold text-foreground/10">{number}</span></div>
    <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{intro}</p>
    <ul className="mt-8 grid gap-0">{items.map(item => <li key={item} className="flex gap-3 border-t border-border py-4 text-sm"><Check className={`mt-0.5 size-4 shrink-0 ${accent ? "text-accent" : "text-primary"}`} />{item}</li>)}</ul>
  </article>;
}

function ServicesPage() { return <>
  <PageIntro eyebrow="Services" title="Improve the way your business works, leads and performs."><p>Focused support for the operational systems and leadership behaviours that determine day-to-day performance.</p></PageIntro>
  <section className="bg-secondary py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-7 px-5 lg:grid-cols-2 lg:px-8">
    <ServiceList number="01" title="Operational Excellence" intro="Create stable, efficient and visible processes that make better performance repeatable." items={operational} />
    <ServiceList number="02" title="Leadership & Performance" intro="Give leaders and teams the routines, clarity and confidence to own performance." items={leadership} accent />
  </div></section>
  <section className="bg-background py-20"><div className="mx-auto max-w-4xl px-5 text-center"><p className="section-label">Not sure where to begin?</p><h2 className="mt-5 font-display text-4xl font-bold">Start with a clear view of the whole operation.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">The EDGE 360 Business Assessment identifies strengths, exposes gaps and prioritises the actions most likely to improve performance.</p><Button asChild className="mt-8 rounded-none" size="lg"><Link to="/edge-360">Explore EDGE 360 <ArrowRight /></Link></Button></div></section>
  <CtaBand title="Turn operational pressure into forward momentum." />
  </>; }