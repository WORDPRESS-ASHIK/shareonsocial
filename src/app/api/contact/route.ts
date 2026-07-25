import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { location, name, email, company, services, details } = data;

    // 1. Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@shareonsocial.agency',
        pass: 'T#9bM=KRAu',
      },
    });

    // 2. Email to the Admin
    const adminMailOptions = {
      from: '"Share On Social Contact Form" <info@shareonsocial.agency>',
      to: 'info@shareonsocial.agency',
      subject: `New Contact Form Enquiry from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Location:</strong> ${location || 'N/A'}</p>
        <p><strong>Services Needed:</strong> ${services || 'N/A'}</p>
        <p><strong>Additional Details:</strong></p>
        <p>${details || 'N/A'}</p>
      `,
    };

    // 3. Confirmation Email to the Visitor
    const visitorMailOptions = {
      from: '"Share On Social" <info@shareonsocial.agency>',
      to: email,
      subject: 'Thank you for reaching out to Share On Social!',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for getting in touch with us! We have received your enquiry regarding <strong>${services || 'our services'}</strong>.</p>
        <p>Our team will review your details and get back to you within one business day.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Share On Social Team</strong></p>
      `,
    };

    // 4. Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(visitorMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Failed to send emails. Please try again later.' },
      { status: 500 }
    );
  }
}
