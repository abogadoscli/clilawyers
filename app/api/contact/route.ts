
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

    // In a production environment, you would:
    // 1. Send an email to info@clilawyers.com
    // 2. Store in a database
    // 3. Send confirmation email to user
    
    // For now, we simulate success
    console.log('Contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      subject: subject.trim(),
      message: message.trim(),
      service_type,
      preferred_language: preferred_language || 'es',
      preferred_office,
      timestamp: new Date().toISOString()
    });

    // Create mailto link for backup
    const mailtoBody = `
Nuevo mensaje de contacto desde clilawyers.com

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Asunto: ${subject}
Tipo de servicio: ${service_type || 'No especificado'}
Idioma preferido: ${preferred_language || 'Español'}
Oficina preferida: ${preferred_office || 'No especificada'}

Mensaje:
${message}

---
Enviado desde el formulario web el ${new Date().toLocaleString('es-ES')}
    `;

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Le contactaremos pronto.',
        mailtoFallback: `mailto:info@clilawyers.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'API de contacto activa',
    endpoints: {
      POST: 'Enviar mensaje de contacto'
    }
  });
}
