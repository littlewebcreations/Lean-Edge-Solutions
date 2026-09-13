import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiry } from "@/lib/contact.functions";
import { PageIntro } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Lean Edge Solutions" },
    { name: "description", content: "Talk to Lean Edge Solutions about an operational challenge, assessment or improvement opportunity." },
    { property: "og:title", content: "Contact Lean Edge Solutions" },
    { property: "og:description", content: "Start a practical conversation about better operational performance." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage(){
  const send = useServerFn(submitEnquiry);
  const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
  const [error,setError]=useState("");
  async function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setStatus("sending"); setError("");
    const form=event.currentTarget; const data=new FormData(form);
    try { await send({data:{name:String(data.get("name")||""),company:String(data.get("company")||""),email:String(data.get("email")||""),phone:String(data.get("phone")||""),subject:String(data.get("subject")||""),message:String(data.get("message")||"")}}); form.reset(); setStatus("success"); }
    catch(e){setError(e instanceof Error ? e.message : "We couldn’t send your enquiry. Please try again."); setStatus("error");}
  }
  return <>
    <PageIntro eyebrow="Contact" title="Let’s talk about what is holding performance back."><p>Share the challenge, opportunity or change you are working through. We will get back to you to arrange a practical first conversation.</p></PageIntro>
    <section className="bg-background py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
      <aside><p className="section-label">Start here</p><h2 className="mt-5 font-display text-3xl font-bold">A clearer view starts with a conversation.</h2><p className="mt-5 leading-7 text-muted-foreground">Whether you need help with one recurring issue or a wider improvement programme, tell us what you are seeing.</p><a href="mailto:sales@leanedge.co.uk" className="mt-8 inline-flex items-center gap-3 font-semibold text-primary"><Mail className="size-5"/>sales@leanedge.co.uk</a><div className="mt-10 border-l-4 border-accent bg-secondary p-6"><p className="font-display font-bold">What happens next?</p><p className="mt-2 text-sm leading-6 text-muted-foreground">We will review your enquiry and respond to arrange an initial, no-obligation discussion.</p></div></aside>
      <div className="border border-border p-6 md:p-10">
        {status==="success" ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status"><CheckCircle2 className="size-12 text-primary"/><h2 className="mt-5 font-display text-3xl font-bold">Thank you.</h2><p className="mt-3 max-w-md text-muted-foreground">Your enquiry has been received. We will be in touch soon.</p><Button variant="outline" className="mt-7 rounded-none" onClick={()=>setStatus("idle")}>Send another enquiry</Button></div> :
        <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
          <div className="grid gap-6 sm:grid-cols-2"><Field id="name" label="Name" required><Input id="name" name="name" minLength={2} maxLength={100} required /></Field><Field id="company" label="Company"><Input id="company" name="company" maxLength={120}/></Field></div>
          <div className="grid gap-6 sm:grid-cols-2"><Field id="email" label="Email" required><Input id="email" name="email" type="email" maxLength={255} required /></Field><Field id="phone" label="Phone"><Input id="phone" name="phone" type="tel" maxLength={40}/></Field></div>
          <Field id="subject" label="What would you like to discuss?" required><select id="subject" name="subject" required defaultValue="" className="h-12 w-full rounded-none border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="" disabled>Select an option</option><option>EDGE 360 Business Assessment</option><option>Operational Excellence</option><option>Leadership & Performance</option><option>Workshop or focused support</option><option>Other enquiry</option></select></Field>
          <Field id="message" label="Tell us a little about the challenge" required><Textarea id="message" name="message" minLength={10} maxLength={2000} required className="min-h-40 rounded-none" /></Field>
          {status==="error" && <p role="alert" className="text-sm font-semibold text-destructive">{error}</p>}
          <Button type="submit" size="lg" className="w-fit rounded-none px-7" disabled={status==="sending"}>{status==="sending"?"Sending…":<>Send enquiry <ArrowRight/></>}</Button>
        </form>}
      </div>
    </div></section>
  </>;
}
function Field({id,label,required,children}:{id:string;label:string;required?:boolean;children:React.ReactNode}){return <div className="grid gap-2"><Label htmlFor={id} className="font-semibold">{label}{required&&<span className="text-primary"> *</span>}</Label>{children}</div>}