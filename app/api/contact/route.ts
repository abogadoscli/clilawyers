
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      subject,
      message,
      service_type,
      preferred_language,
      preferred_office
    } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log contact form submission (for now, in production you'd save to DB or send email)
    console.log('Contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      subject: subject.trim(),
      message: message.trim(),
      service_type: service_type || null,
      preferred_language: preferred_language || 'es',
      preferred_office: preferred_office || null,
      timestamp: new Date().toISOString()
    });

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: `temp_${Date.now()}`
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json(
    { 
      message: 'Contact API is working',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
