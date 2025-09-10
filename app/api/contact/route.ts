import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, lineId, interest, details } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'spkansards@gmail.com',
        pass: 'zbnn wiew voje vrbr'
      }
    });

    // Email content
    const mailOptions = {
      from: 'spkansards@gmail.com',
      to: 'spkansards@gmail.com',
      subject: 'แบบฟอร์มติดต่อรับโปรโมชัน - ลูกค้าใหม่',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; background-color: #ffffff; color: #333;">
          
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
            แบบฟอร์มติดต่อรับโปรโมชัน
          </h2>
          
          <div style="margin-bottom: 20px;">
            <p><strong>ชื่อ:</strong> ${firstName} ${lastName || ''}</p>
            <p><strong>เบอร์โทร:</strong> ${phone}</p>
            ${email ? `<p><strong>อีเมล:</strong> ${email}</p>` : ''}
            ${lineId ? `<p><strong>LINE ID:</strong> ${lineId}</p>` : ''}
            ${interest && interest.length > 0 ? `<p><strong>บริการที่สนใจ:</strong> ${interest.join(', ')}</p>` : ''}
            ${details ? `<p><strong>รายละเอียด:</strong><br>${details}</p>` : ''}
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="font-size: 12px; color: #888; margin: 0;">
            ส่งจากเว็บไซต์ SP KANSARD<br>
            ${new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })}
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'ส่งข้อมูลเรียบร้อยแล้ว เราจะติดต่อกลับในไม่ช้า!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' },
      { status: 500 }
    );
  }
}
