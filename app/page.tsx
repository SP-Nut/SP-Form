'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      lineId: formData.get('lineId') as string,
      interest: formData.getAll('interest') as string[],
      details: formData.get('details') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('✅ ' + result.message);
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage('❌ ' + result.message);
      }
    } catch {
      setSubmitMessage('❌ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] flex flex-col items-center justify-start p-4 sm:p-6 text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
      {/* PROMO HERO */}
      <section className="w-full max-w-3xl mt-6">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--brand-border)]/70 shadow-md bg-[var(--brand-surface)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#12325e_0%,_#060b1a_75%)] opacity-80" />
          <div className="relative p-6 sm:p-8">
            {/* Ribbon */}
            <div className="inline-flex items-center gap-2 bg-[var(--brand-magenta)] text-white font-bold px-3 py-1 rounded-full text-sm shadow">
              🔥 โปรโมชันพิเศษ วันนี้เท่านั้น
            </div>

            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              กรอกฟอร์มตอนนี้ รับสิทธิ์ <span className="underline decoration-[var(--brand-blue)] decoration-4 underline-offset-4">ส่วนลดสูงสุด 5%</span>
            </h1>
            <p className="mt-2 text-base sm:text-lg text-[#d0d5dd]">
              <span className="text-[var(--brand-magenta)] font-semibold">แถมฟรี!</span> แฟลซซิ่งต่อผนัง • เพลทเหล็กกันสนิม • ขาแขวน และ{" "}
              <span className="font-semibold text-[#ff5252]">ส่วนลดรางน้ำอลูมิเนียม 50%</span>
            </p>

            {/* Benefit list */}
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#dbe7f5] text-base">
              <li className="flex items-start gap-2">
                <span className="text-[#16a34a] text-xl leading-none">✔</span>
                <span>ฟรี ! ของแถม 3 รายการ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#16a34a] text-xl leading-none">✔</span>
                <span>คิวติดตั้ง รวดเร็ว ภายใน 1 วัน</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#16a34a] text-xl leading-none">✔</span>
                <span>ปรึกษาฟรี โดยมืออาชีพ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#16a34a] text-xl leading-none">✔</span>
                <span>ส่วนลดงานติดตั้ง สูงสุด 5%</span>
              </li>
            </ul>

            {/* Promo badges */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-block bg-[#082037] text-[var(--brand-magenta)] border border-[var(--brand-border)]/60 px-3 py-1 rounded-lg text-sm font-semibold">
                ลด 5%* งานติดตั้ง
              </span>
              <span className="inline-block bg-[#0e2d4d] text-white border border-[var(--brand-border)]/50 px-3 py-1 rounded-lg text-sm font-semibold">
                รางน้ำอลูมิเนียม -50%
              </span>
              <span className="inline-block bg-[#0e2d4d] text-white border border-[var(--brand-border)]/50 px-3 py-1 rounded-lg text-sm">
                ของแถม 3 รายการ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <form
        className="w-full max-w-3xl bg-[var(--brand-surface)] mt-6 p-6 sm:p-10 rounded-2xl shadow border border-[var(--brand-border)]"
        onSubmit={handleSubmit}
      >
        {/* LOGO */}
        <div className="flex justify-center mb-1 -mt-2">
          <Image 
            src="/logo.png" 
            alt="SP Logo" 
            width={160} 
            height={160} 
            className="object-contain" 
            priority 
            sizes="160px"
            style={{ width: '160px', height: '160px' }}
          />
        </div>

        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            แบบฟอร์มติดต่อรับโปรโมชัน
          </h2>
          <p className="text-sm sm:text-base text-[#98a2b3] mt-1">
            กรอกข้อมูลให้ครบถ้วนเพื่อรับสิทธิ์ทันที (จำนวนจำกัด)
          </p>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg text-white" htmlFor="firstName">
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="เช่น เอสพี"
              className="w-full bg-[#0e2d4d] border border-[var(--brand-border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg text-white" htmlFor="lastName">
              นามสกุล
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="เช่น กันสาด"
              className="w-full bg-[#0e2d4d] border border-[var(--brand-border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Inline Promo */}
        <div className="w-full text-center my-4">
          <span className="inline-flex items-center gap-2 bg-[#082037] text-[var(--brand-magenta)] font-semibold rounded-lg px-3 py-1.5 text-sm sm:text-base border border-[var(--brand-border)]/60">
            🎁 รับฟรี แฟลซซิ่ง + เพลท + ขาแขวน เมื่อกรอกฟอร์มนี้
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg text-white" htmlFor="phone">
              เบอร์โทร <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              placeholder="เช่น 0812345678"
              className="w-full bg-[#0e2d4d] border border-[var(--brand-border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg text-white" htmlFor="email">
              อีเมล
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#0e2d4d] border border-[var(--brand-border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] text-white placeholder-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg text-white" htmlFor="lineId">
              LINE ID
            </label>
            <input
              id="lineId"
              name="lineId"
              type="text"
              placeholder="ไลน์ไอดี (ถ้ามี)"
              className="w-full bg-[#0e2d4d] border border-[var(--brand-border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg text-white">บริการที่สนใจ</label>
            <div className="grid grid-cols-2 gap-3 text-base text-[#dbe7f5]">
              {["หน้าบ้าน", "หลังบ้าน", "โรงจอดรถ", "อื่นๆ"].map((opt) => (
                <label key={opt} className="inline-flex items-center gap-2 font-normal">
                  <input
                    type="checkbox"
                    name="interest"
                    value={opt}
                    className="accent-[var(--brand-blue)] w-5 h-5 bg-[#0e2d4d] border border-[var(--brand-border)] rounded"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="block mb-1 font-medium text-base sm:text-lg text-white" htmlFor="details">
            รายละเอียด
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="ระบุขนาดพื้นที่/วัสดุที่สนใจ/รูปหน้างานคร่าวๆ"
            className="w-full bg-[#0e2d4d] border border-[var(--brand-border)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] text-white placeholder-gray-500 resize-none"
          />
        </div>

        {/* Promo Bottom */}
        <div className="w-full text-center my-5">
          <span className="inline-flex items-center gap-2 bg-[#082037] text-white font-semibold rounded-xl px-4 py-2 text-sm sm:text-base border border-[var(--brand-border)]/60">
            ⚡ ส่งฟอร์มตอนนี้ รับสิทธิ์โปรโมชันทันที
          </span>
          <p className="text-xs text-[#667085] mt-2">
            *เงื่อนไขเป็นไปตามที่บริษัทกำหนด / สิทธิ์มีจำนวนจำกัด
          </p>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-2 mb-4">
          <input id="consent" type="checkbox" className="mt-1 w-5 h-5 accent-[var(--brand-blue)] bg-[#0e2d4d] border border-[var(--brand-border)] rounded" required />
          <label htmlFor="consent" className="text-sm text-[#e2e8f0]">
            ยินยอมให้ติดต่อกลับผ่านโทรศัพท์/LINE เพื่อแจ้งสิทธิ์โปรโมชันและรายละเอียดบริการ
          </label>
        </div>

        {/* CTA */}
        <div className="pt-1">
          {submitMessage && (
            <div className={`text-center p-3 rounded-lg mb-4 ${
              submitMessage.startsWith('✅') 
                ? 'bg-green-900/30 text-green-300 border border-green-600/30' 
                : 'bg-red-900/30 text-red-300 border border-red-600/30'
            }`}>
              {submitMessage}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-extrabold text-lg sm:text-xl py-3.5 rounded-xl shadow-sm transition-all ${
              isSubmitting
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-[var(--brand-blue)] text-[#031326] border border-[var(--brand-blue)] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {isSubmitting ? '⏳ กำลังส่ง...' : 'ส่งข้อความ • รับโปรโมชันเลย'}
          </button>
          <p className="text-center text-xs text-[#98a2b3] mt-2">
            เวลาติดต่อ: จ.-ส. 09:00–18:00 น. (กรอกไว้หลังเวลางาน เราจะรีบติดต่อเช้าวันถัดไป)
          </p>
        </div>
      </form>
    </div>
  );
}
