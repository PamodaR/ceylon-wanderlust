import { NextRequest, NextResponse } from "next/server";
import { sendEmail, contactEmailTemplate } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email
    const contactEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    if (contactEmail) {
      await sendEmail({
        to: contactEmail,
        subject: `Website Contact: ${subject}`,
        html: contactEmailTemplate({ name, email, subject, message }),
        replyTo: email,
      });
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
