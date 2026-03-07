import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  const mailOptions = {
    from: `"Ceylon Wanderlust" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo,
  };

  return transporter.sendMail(mailOptions);
}

export function contactEmailTemplate(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #15803d; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0;">New Contact Message</h1>
      </div>
      <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
      <div style="padding: 16px; text-align: center; color: #6b7280; font-size: 12px;">
        <p>This email was sent from the Ceylon Wanderlust website contact form.</p>
      </div>
    </div>
  `;
}

export function tourBookingEmailTemplate(data: {
  tourTitle: string;
  name: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  preferredDate: string;
  message?: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #15803d; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0;">New Tour Booking Inquiry</h1>
      </div>
      <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
        <h2 style="color: #15803d; margin-top: 0;">${data.tourTitle}</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Number of People:</strong> ${data.numberOfPeople}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        ${data.message ? `<hr style="border: 1px solid #e5e7eb; margin: 16px 0;" /><p><strong>Special Requests:</strong></p><p>${data.message}</p>` : ""}
      </div>
      <div style="padding: 16px; text-align: center; color: #6b7280; font-size: 12px;">
        <p>This inquiry was submitted via the Ceylon Wanderlust website.</p>
      </div>
    </div>
  `;
}

export function taxiBookingEmailTemplate(data: {
  customerName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  vehicleType: string;
  specialRequests?: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #15803d; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0;">New Taxi Booking Request</h1>
      </div>
      <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
        <p><strong>Customer:</strong> ${data.customerName}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
        <p><strong>Pickup:</strong> ${data.pickupLocation}</p>
        <p><strong>Drop-off:</strong> ${data.dropoffLocation}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Vehicle:</strong> ${data.vehicleType}</p>
        ${data.specialRequests ? `<hr style="border: 1px solid #e5e7eb; margin: 16px 0;" /><p><strong>Special Requests:</strong></p><p>${data.specialRequests}</p>` : ""}
      </div>
      <div style="padding: 16px; text-align: center; color: #6b7280; font-size: 12px;">
        <p>This booking was submitted via the Ceylon Wanderlust website.</p>
      </div>
    </div>
  `;
}
