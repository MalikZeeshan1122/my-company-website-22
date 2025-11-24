import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  files?: { name: string; data: string; type: string }[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form submission from:", formData.email);

    // Initialize Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Upload files to storage if any
    const uploadedFiles: string[] = [];
    if (formData.files && formData.files.length > 0) {
      console.log(`Uploading ${formData.files.length} files...`);
      
      for (const file of formData.files) {
        try {
          // Convert base64 to Uint8Array
          const base64Data = file.data.split(",")[1];
          const binaryData = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
          
          // Generate unique filename
          const timestamp = Date.now();
          const fileName = `${timestamp}-${file.name}`;
          const filePath = `${formData.email}/${fileName}`;

          // Upload to storage
          const { data, error } = await supabase.storage
            .from("contact-attachments")
            .upload(filePath, binaryData, {
              contentType: file.type,
              upsert: false,
            });

          if (error) {
            console.error("Error uploading file:", error);
            throw error;
          }

          uploadedFiles.push(filePath);
          console.log("File uploaded:", filePath);
        } catch (uploadError) {
          console.error("Error processing file:", uploadError);
        }
      }
    }

    // Save submission to database
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        attachments: uploadedFiles,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw dbError;
    }

    console.log("Submission saved to database:", submission.id);

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: [formData.email],
        subject: "We Received Your Message!",
        html: `
          <h1>Thank you for contacting us, ${formData.name}!</h1>
          <p>We have received your message about ${formData.projectType} and will get back to you within 24 hours.</p>
          <h2>Your Details:</h2>
          <ul>
            <li><strong>Project Type:</strong> ${formData.projectType}</li>
            <li><strong>Budget Range:</strong> ${formData.budget}</li>
            ${formData.company ? `<li><strong>Company:</strong> ${formData.company}</li>` : ''}
            ${formData.phone ? `<li><strong>Phone:</strong> ${formData.phone}</li>` : ''}
          </ul>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          ${uploadedFiles.length > 0 ? `<p><strong>Attachments:</strong> ${uploadedFiles.length} file(s) received</p>` : ''}
          <p>Best regards,<br>The Team</p>
        `,
      });

      console.log("Confirmation email sent to:", formData.email);
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // Don't fail the request if email fails
    }

    // Send notification email to team
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["your-team@example.com"], // Replace with actual team email
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <h2>Contact Details:</h2>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            ${formData.phone ? `<li><strong>Phone:</strong> ${formData.phone}</li>` : ''}
            ${formData.company ? `<li><strong>Company:</strong> ${formData.company}</li>` : ''}
          </ul>
          <h2>Project Details:</h2>
          <ul>
            <li><strong>Project Type:</strong> ${formData.projectType}</li>
            <li><strong>Budget Range:</strong> ${formData.budget}</li>
          </ul>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          ${uploadedFiles.length > 0 ? `<p><strong>Attachments:</strong> ${uploadedFiles.length} file(s) uploaded</p>` : ''}
        `,
      });

      console.log("Notification email sent to team");
    } catch (emailError) {
      console.error("Error sending notification email:", emailError);
      // Don't fail the request if email fails
    }

    return new Response(
      JSON.stringify({
        success: true,
        submissionId: submission.id,
        filesUploaded: uploadedFiles.length,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
