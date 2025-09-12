
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

    // Create contact form entry in database
    const contactForm = await prisma.contactForm.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        subject: subject.trim(),
        message: message.trim(),
        service_type: service_type || null,
        preferred_language: preferred_language || 'es',
        preferred_office: preferred_office || null,
        status: 'new'
      }
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: contactForm.id
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
  try {
    // This would be for admin purposes - get all contact forms
    const contactForms = await prisma.contactForm.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 50 // Limit to last 50 entries
    });

    return NextResponse.json(contactForms);
  } catch (error) {
    console.error('Get contact forms error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
