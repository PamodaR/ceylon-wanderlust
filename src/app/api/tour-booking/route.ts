import { NextRequest, NextResponse } from "next/server";
import { sendEmail, tourBookingEmailTemplate } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tourSlug, tourTitle, name, email, phone, numberOfPeople, preferredDate, message } = body;

    // Validation
    if (!tourSlug || !tourTitle || !name || !email || !phone || !numberOfPeople || !preferredDate) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
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

    // Send email notification
    const contactEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    if (contactEmail) {
      await sendEmail({
        to: contactEmail,
        subject: `Tour Booking Inquiry: ${tourTitle}`,
        html: tourBookingEmailTemplate({
          tourTitle,
          name,
          email,
          phone,
          numberOfPeople,
          preferredDate,
          message,
        }),
        replyTo: email,
      });
    }

    return NextResponse.json(
      { message: "Booking inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Tour booking error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking. Please try again later." },
      { status: 500 }
    );
  }
}
