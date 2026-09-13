import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().min(2, "Please choose an enquiry type").max(120),
  message: z.string().trim().min(10, "Please add a little more detail").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_enquiries").insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
    });
    if (error) throw new Error("We couldn’t send your enquiry. Please try again.");
    return { success: true };
  });