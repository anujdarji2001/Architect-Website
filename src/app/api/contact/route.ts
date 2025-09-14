import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Email to you (studio)
    const studioEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: #1A1A1A; font-family: 'Cormorant Garamond', serif; font-size: 28px; margin: 0 0 10px 0;">
            New Contact Form Submission
          </h1>
          <p style="color: #666; margin: 0;">Mannmish Design Studio</p>
        </div>
        
        <div style="background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1A1A1A; font-size: 20px; margin-bottom: 20px;">Contact Details</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Name:</strong>
            <span style="color: #666; margin-left: 10px;">${name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Email:</strong>
            <span style="color: #666; margin-left: 10px;">${email}</span>
          </div>
          
          ${phone ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Phone:</strong>
            <span style="color: #666; margin-left: 10px;">${phone}</span>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Subject:</strong>
            <span style="color: #666; margin-left: 10px;">${subject}</span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Message:</strong>
            <div style="color: #666; margin-top: 10px; padding: 15px; background: #f9f9f9; border-radius: 5px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This message was sent from your website contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    // Email to client (confirmation)
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
          <h1 style="color: #1A1A1A; font-family: 'Cormorant Garamond', serif; font-size: 32px; margin: 0 0 10px 0;">
            Thank You!
          </h1>
          <p style="color: #666; margin: 0; font-size: 16px;">Your message has been received</p>
        </div>
        
        <div style="background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Dear ${name},
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to <strong>Mannmish Design Studio</strong>. We have received your inquiry regarding <strong>${subject}</strong> and will get back to you within 24 hours.
          </p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1A1A1A; margin: 0 0 15px 0; font-size: 18px;">Your Message Summary:</h3>
            <p style="color: #666; margin: 0; font-style: italic;">
              "${message.length > 100 ? message.substring(0, 100) + '...' : message}"
            </p>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to explore our <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'}/projects" style="color: #1A1A1A; text-decoration: none; border-bottom: 1px solid #1A1A1A;">recent projects</a> or learn more <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'}/about" style="color: #1A1A1A; text-decoration: none; border-bottom: 1px solid #1A1A1A;">about our team</a>.
          </p>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 10px;">
              <strong>Best regards,</strong><br>
              <span style="color: #666;">Mannmish Design Studio Team</span>
            </p>
            
            <div style="color: #999; font-size: 14px; margin-top: 20px;">
              <p style="margin: 5px 0;"><strong>Phone:</strong> +91 9662002521</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> mannmishdesignstudio@gmail.com</p>
              <p style="margin: 5px 0;"><strong>Address:</strong> 804, Colonnade 2, Near One World Capital, B/h. Rajpath Club, Vikramnagar, Bodakdev, Ahmedabad - 380054, Gujarat</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Send email to studio
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Your studio email
      subject: `New Contact Form Submission - ${subject}`,
      html: studioEmailHtml,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Mannmish Design Studio',
      html: clientEmailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
