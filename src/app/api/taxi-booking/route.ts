import { NextRequest, NextResponse } from "next/server";
import { sendEmail, taxiBookingEmailTemplate } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      phone,
      email,
      pickupLocation,
      dropoffLocation,
      date,
      time,
      vehicleType,
      specialRequests,
    } = body;

    // Validation
    if (!customerName || !phone || !email || !pickupLocation || !dropoffLocation || !date || !time || !vehicleType) {
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

    const validVehicles = ["sedan", "suv", "van", "luxury"];
    if (!validVehicles.includes(vehicleType)) {
      return NextResponse.json(
        { error: "Invalid vehicle type" },
        { status: 400 }
      );
    }

    // Send email notification
    const contactEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    if (contactEmail) {
      await sendEmail({
        to: contactEmail,
        subject: `Taxi Booking: ${pickupLocation} → ${dropoffLocation}`,
        html: taxiBookingEmailTemplate({
          customerName,
          phone,
          email,
          pickupLocation,
          dropoffLocation,
          date,
          time,
          vehicleType,
          specialRequests,
        }),
        replyTo: email,
      });
    }

    return NextResponse.json(
      { message: "Taxi booking submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Taxi booking error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking. Please try again later." },
      { status: 500 }
    );
  }
}
