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
      subject: '📋 แบบฟอร์มติดต่อรับโปรโมชัน - ลูกค้าใหม่',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
          
          <!-- Header Card -->
          <div style="background: linear-gradient(135deg, #06b6ff 0%, #0b1660 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(6, 182, 255, 0.2);">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
              📋 ลูกค้าติดต่อใหม่
            </h1>
            <p style="color: #e0f2fe; margin: 8px 0 0 0; font-size: 16px;">
              แบบฟอร์มรับโปรโมชัน SP KANSARD
            </p>
          </div>
          
          <!-- Content Card -->
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin-bottom: 20px;">
            
            <h2 style="color: #1e293b; margin: 0 0 25px 0; font-size: 20px; font-weight: 600; border-bottom: 3px solid #06b6ff; padding-bottom: 10px; display: inline-block;">
              ข้อมูลลูกค้า
            </h2>
            
            <div style="space-y: 15px;">
              <div style="display: flex; padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-weight: 500; width: 120px; display: inline-block;">👤 ชื่อ:</span>
                <span style="color: #1e293b; font-weight: 600;">${firstName} ${lastName || ''}</span>
              </div>
              
              <div style="display: flex; padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-weight: 500; width: 120px; display: inline-block;">📞 เบอร์โทร:</span>
                <span style="color: #1e293b; font-weight: 600;">
                  <a href="tel:${phone}" style="color: #06b6ff; text-decoration: none;">${phone}</a>
                </span>
              </div>
              
              ${email ? `
              <div style="display: flex; padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-weight: 500; width: 120px; display: inline-block;">📧 อีเมล:</span>
                <span style="color: #1e293b; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #06b6ff; text-decoration: none;">${email}</a>
                </span>
              </div>
              ` : ''}
              
              ${lineId ? `
              <div style="display: flex; padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-weight: 500; width: 120px; display: inline-block;">💬 LINE ID:</span>
                <span style="color: #1e293b; font-weight: 600;">${lineId}</span>
              </div>
              ` : ''}
              
              ${interest && interest.length > 0 ? `
              <div style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-weight: 500; display: block; margin-bottom: 8px;">🏠 บริการที่สนใจ:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${interest.map((item: string) => `<span style="background: #eff6ff; color: #1d4ed8; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${item}</span>`).join('')}
                </div>
              </div>
              ` : ''}
              
              ${details ? `
              <div style="padding: 12px 0;">
                <span style="color: #64748b; font-weight: 500; display: block; margin-bottom: 8px;">📝 รายละเอียด:</span>
                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6ff;">
                  <p style="margin: 0; color: #475569; line-height: 1.6;">${details}</p>
                </div>
              </div>
              ` : ''}
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #1e293b; padding: 20px; border-radius: 12px; text-align: center;">
            <p style="margin: 0; color: #94a3b8; font-size: 14px;">
              🌐 ส่งจากเว็บไซต์ SP KANSARD
            </p>
            <p style="margin: 8px 0 0 0; color: #64748b; font-size: 13px;">
              📅 ${new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })}
            </p>
          </div>
          
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
