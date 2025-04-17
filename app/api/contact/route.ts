import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // Create transporter with Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Remove Outlook-specific TLS settings
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USERNAME, // Send to yourself
      replyTo: email, // Reply to submitter
      subject: `New Contact Form Submission: ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>This message was sent from the Effortech website contact form.</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    console.error("Full error:", error);
    return NextResponse.json(
      { 
        error: "Failed to send message. Please try again later.",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}