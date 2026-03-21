import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Create transporter using Zoho SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'hello@sadiqalam.com',
                pass: process.env.SMTP_PASS || 'yp9AiD51NNwm',
            },
        });

        // Format email based on form payload
        const { 
            formType, 
            name, 
            email, 
            phone, 
            migrationType, 
            currentVersion, 
            targetVersion, 
            edition, 
            timeline, 
            message 
        } = body;

        let htmlContent = `<h2>New Contact Request</h2>`;
        
        if (formType === 'lead') {
            htmlContent += `
                <p><strong>Form Type:</strong> Free Migration Audit (Homepage)</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Migration Type:</strong> ${migrationType}</p>
            `;
        } else {
            // General Contact Form
            htmlContent += `
                <p><strong>Form Type:</strong> Detailed Assessment (Contact Page)</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Current Version:</strong> ${currentVersion}</p>
                <p><strong>Target Version:</strong> ${targetVersion}</p>
                <p><strong>Edition:</strong> ${edition}</p>
                <p><strong>Timeline:</strong> ${timeline}</p>
                <p><strong>Project Details:</strong><br/>${message}</p>
            `;
        }

        const mailOptions = {
            from: '"Odoo Upgrade Service" <hello@sadiqalam.com>', 
            to: 'hello@sadiqalam.com', 
            replyTo: email,
            subject: `New Lead: ${name} (${formType === 'lead' ? 'Migration Audit' : 'Detailed Assessment'})`,
            html: htmlContent,
        };

        // Send mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('SMTP Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send message' },
            { status: 500 }
        );
    }
}
