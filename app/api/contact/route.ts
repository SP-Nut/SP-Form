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
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f1f5f9; padding: 20px;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #06b6ff 0%, #0b1660 100%); padding: 25px; border-radius: 15px; text-align: center; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(6, 182, 255, 0.3);">
            <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              🎯 ลูกค้าสนใจโปรโมชัน
            </h1>
            <p style="color: #b3e5fc; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">
              SP KANSARD • ${new Date().toLocaleDateString('th-TH')}
            </p>
          </div>
          
          <!-- Main Content -->
          <div style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-bottom: 20px;">
            
            <!-- Customer Info Header -->
            <div style="background: #f8fafc; padding: 20px; border-bottom: 3px solid #06b6ff;">
              <h2 style="color: #1e293b; margin: 0; font-size: 20px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                👤 ข้อมูลลูกค้า
              </h2>
            </div>
            
            <!-- Customer Details -->
            <div style="padding: 25px;">
              
              <div style="margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #06b6ff;">
                <div style="margin-bottom: 12px;">
                  <span style="color: #64748b; font-size: 14px; font-weight: 500;">ชื่อ-นามสกุล</span>
                  <h3 style="margin: 2px 0 0 0; color: #1e293b; font-size: 18px; font-weight: 700;">${firstName} ${lastName || ''}</h3>
                </div>
                
                <div style="margin-bottom: 12px;">
                  <span style="color: #64748b; font-size: 14px; font-weight: 500;">📞 เบอร์โทรติดต่อ</span>
                  <p style="margin: 2px 0 0 0; font-size: 16px; font-weight: 600;">
                    <a href="tel:${phone}" style="color: #06b6ff; text-decoration: none; background: #eff6ff; padding: 8px 12px; border-radius: 8px; display: inline-block;">${phone}</a>
                  </p>
                </div>
                
                ${email ? `
                <div style="margin-bottom: 12px;">
                  <span style="color: #64748b; font-size: 14px; font-weight: 500;">📧 อีเมล</span>
                  <p style="margin: 2px 0 0 0; font-size: 16px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #06b6ff; text-decoration: none;">${email}</a>
                  </p>
                </div>
                ` : ''}
                
                ${lineId ? `
                <div>
                  <span style="color: #64748b; font-size: 14px; font-weight: 500;">💬 LINE ID</span>
                  <p style="margin: 2px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${lineId}</p>
                </div>
                ` : ''}
              </div>
              
              ${interest && interest.length > 0 ? `
              <div style="margin-bottom: 20px; padding: 15px; background: #f0f9ff; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <span style="color: #0369a1; font-size: 14px; font-weight: 600; display: block; margin-bottom: 10px;">🏠 บริการที่สนใจ</span>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${interest.map((item: string) => `<span style="background: #06b6ff; color: white; padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 600; box-shadow: 0 2px 8px rgba(6, 182, 255, 0.3);">${item}</span>`).join('')}
                </div>
              </div>
              ` : ''}
              
              ${details ? `
              <div style="padding: 15px; background: #fef7f0; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <span style="color: #92400e; font-size: 14px; font-weight: 600; display: block; margin-bottom: 10px;">📝 รายละเอียดที่ต้องการ</span>
                <p style="margin: 0; color: #78350f; line-height: 1.6; font-size: 15px; background: white; padding: 12px; border-radius: 8px;">${details}</p>
              </div>
              ` : ''}
            </div>
          </div>
          
          <!-- Call to Action -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 20px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">
            <p style="margin: 0; color: white; font-size: 16px; font-weight: 600;">
              🚀 กรุณาติดต่อลูกค้าภายใน 24 ชั่วโมง
            </p>
            <p style="margin: 8px 0 0 0; color: #a7f3d0; font-size: 14px;">
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
