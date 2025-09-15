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
      subject: '� ลูกค้าใหม่สนใจโปรโมชัน - ' + firstName,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; padding: 16px;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 16px; border-left: 4px solid #2563eb;">
            <h1 style="color: #1e40af; margin: 0; font-size: 24px; font-weight: 600;">
              ลูกค้าสนใจโปรโมชัน
            </h1>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 15px;">
              SP KANSARD • ${new Date().toLocaleDateString('th-TH')}
            </p>
          </div>
          
          <!-- Main Content -->
          <div style="background: white; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
            
            <!-- Customer Info Header -->
            <div style="background: #f8fafc; padding: 12px 16px; border-bottom: 1px solid #e2e8f0; border-radius: 10px 10px 0 0;">
              <h2 style="color: #374151; margin: 0; font-size: 17px; font-weight: 600;">
                ข้อมูลลูกค้า
              </h2>
            </div>
            
            <!-- Customer Details -->
            <div style="padding: 16px;">
              
              <div style="margin-bottom: 16px;">
                <div style="margin-bottom: 8px;">
                  <span style="color: #6b7280; font-size: 13px; font-weight: 500;">ชื่อ-นามสกุล</span>
                  <h3 style="margin: 2px 0 0 0; color: #111827; font-size: 18px; font-weight: 600;">${firstName} ${lastName || ''}</h3>
                </div>
                
                <div style="margin-bottom: 8px;">
                  <span style="color: #6b7280; font-size: 13px; font-weight: 500;">เบอร์โทรติดต่อ</span>
                  <p style="margin: 2px 0 0 0; font-size: 16px; font-weight: 500;">
                    <a href="tel:${phone}" style="color: #2563eb; text-decoration: none; background: #eff6ff; padding: 4px 8px; border-radius: 6px; display: inline-block; font-weight: 600;">${phone}</a>
                  </p>
                </div>
                
                ${email ? `
                <div style="margin-bottom: 8px;">
                  <span style="color: #6b7280; font-size: 13px; font-weight: 500;">อีเมล</span>
                  <p style="margin: 2px 0 0 0; font-size: 15px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </p>
                </div>
                ` : ''}
                
                ${lineId ? `
                <div>
                  <span style="color: #6b7280; font-size: 13px; font-weight: 500;">LINE ID</span>
                  <p style="margin: 2px 0 0 0; color: #111827; font-size: 15px; font-weight: 500;">${lineId}</p>
                </div>
                ` : ''}
              </div>
              
              ${interest && interest.length > 0 ? `
              <div style="margin-bottom: 16px; padding: 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #2563eb;">
                <span style="color: #1e40af; font-size: 14px; font-weight: 600; display: block; margin-bottom: 8px;">บริการที่สนใจ</span>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  ${interest.map((item: string) => `<span style="background: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-size: 13px; font-weight: 500;">${item}</span>`).join('')}
                </div>
              </div>
              ` : ''}
              
              ${details ? `
              <div style="padding: 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #64748b;">
                <span style="color: #374151; font-size: 14px; font-weight: 600; display: block; margin-bottom: 6px;">รายละเอียดที่ต้องการ</span>
                <p style="margin: 0; color: #4b5563; line-height: 1.4; font-size: 14px; background: white; padding: 8px; border-radius: 4px;">${details}</p>
              </div>
              ` : ''}
            </div>
          </div>
          
          <!-- Call to Action -->
          <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 12px; border-radius: 10px; text-align: center; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 16px; font-weight: 600;">
              กรุณาติดต่อลูกค้าภายใน 24 ชั่วโมง
            </p>
            <p style="margin: 2px 0 0 0; color: #6b7280; font-size: 14px;">
              เพื่อสิทธิ์โปรโมชันที่ดีที่สุด
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
