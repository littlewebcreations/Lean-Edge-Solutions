import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import assessmentAsset from "@/assets/lean-edge-assessment.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/site-layout";

export const Route = createFileRoute("/edge-360")({
  head: () => ({ meta: [
    { title: "EDGE 360 Business Assessment | Lean Edge" },
    { name: "description", content: "A structured eight-area assessment to identify operational strengths, performance gaps and priority improvement actions." },
    { property: "og:title", content: "EDGE 360 Business Assessment | Lean Edge" },
    { property: "og:description", content: "Get clarity on where operational improvement should start." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: EdgePage,
});
const areas = [["Productivity","More output from available capacity"],["Quality","Less rework, scrap and variation"],["Delivery","More reliable flow and customer performance"],["Cost","Lower waste and stronger margins"],["People","Clearer accountability and stronger teams"],["Process","Stable, repeatable ways of working"],["Visibility","Better data and faster decisions"],["Growth","Scalable systems for sustainable expansion"]];
function EdgePage(){return <>
  <PageIntro eyebrow="EDGE 360 Business Assessment" title="Clarity on where to start — and what to do next."><p>A structured review across eight key areas of business performance, designed for organisations that know improvement is needed but need the right priorities.</p></PageIntro>
  <section className="bg-background py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
    <img src={assessmentAsset.url} alt="Consultant and engineer assessing a manufacturing process" loading="lazy" width={1400} height={1000} className="aspect-[7/5] w-full object-cover" />
    <div><p className="section-label">A practical health check</p><h2 className="mt-5 font-display text-4xl font-bold">See the operation as a connected whole.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">We identify strengths, expose gaps and prioritise the actions most likely to improve performance. Use the output as a stand-alone health check or the starting point for a focused improvement programme.</p><Button asChild size="lg" className="mt-8 rounded-none"><Link to="/contact">Book an assessment <ArrowRight /></Link></Button></div>
  </div></section>
  <section className="bg-secondary py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="section-label">Eight areas of performance</p><h2 className="mt-5 max-w-2xl font-display text-4xl font-bold">A balanced view of what drives results.</h2><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{areas.map(([title,copy],i)=><article key={title} className="bg-secondary p-7"><p className="font-display text-sm font-bold text-primary/45">0{i+1}</p><h3 className="mt-8 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section>
  <CtaBand title="Know where to focus next." copy="Start with an independent, structured view of your current operation." />
  </>}