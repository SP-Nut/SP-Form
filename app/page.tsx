'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiPhone } from 'react-icons/fi';
import { FaLine, FaFacebookF, FaInstagram } from 'react-icons/fa';

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMessage('✅ ' + result.message);
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
    <div
      className="min-h-screen relative flex flex-col items-center justify-start px-3 sm:px-6 pt-1 sm:py-8 pb-[env(safe-area-inset-bottom)] w-full max-w-full overflow-x-hidden"
    >
      {/* --- LIGHT THEME BACKDROP (ตามเรฟภาพ) --- */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-b from-white via-white to-white
        "
      />
      {/* soft blobs */}
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-80 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-[40rem] w-[40rem] blur-3xl"
          style={{
            background: 'radial-gradient(55% 55% at 50% 50%, #2EE66F 0%, rgba(46,230,111,0) 60%)'
          }} />
        <div className="absolute -top-16 right-[-8rem] h-[42rem] w-[42rem] blur-3xl"
          style={{
            background: 'radial-gradient(55% 55% at 50% 50%, #3B5BFF 0%, rgba(59,91,255,0) 60%)'
          }} />
        <div className="absolute top-32 right-10 h-[35rem] w-[35rem] blur-3xl"
          style={{
            background: 'radial-gradient(55% 55% at 50% 50%, #9E7BFF 0%, rgba(158,123,255,0) 60%)'
          }} />
      </div>

      {/* PROMO HERO - Full Width */}
      <section className="w-full px-4 sm:px-6">
  <div className="w-full text-center relative pt-28 sm:pt-40 pb-3 sm:pb-12">
          {/* Absolute logo */}
          <div className="absolute top-[calc(env(safe-area-inset-top)+6px)] left-1/2 -translate-x-1/2 flex justify-center pointer-events-none select-none">
            <Image
              src="/logo.png"
              alt="SP Logo"
              width={180}
              height={180}
              className="object-contain drop-shadow-sm"
              priority
              sizes="(max-width:640px) 150px, 180px"
              style={{ width: 'clamp(120px,18vw,180px)', height: 'clamp(120px,18vw,180px)' }}
            />
          </div>
          {/* Ribbon */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#30318B] text-white font-semibold px-4 py-1.5 text-xs sm:text-sm shadow-sm ring-1 ring-black/5 mb-3 sm:mb-6">
            🔥 โปรโมชันพิเศษ
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#FF2B8C' }} />
          </div>

          <h1 className="relative font-extrabold tracking-tight mb-2 sm:mb-4 leading-[1.22] sm:leading-snug">
            <span className="block text-[1.3rem] text-slate-900 sm:hidden font-bold mb-1">กรอกฟอร์มตอนนี้</span>
            <span className="hidden sm:block text-[1.9rem] sm:text-5xl lg:text-[3.4rem]">กรอกฟอร์มตอนนี้</span>
            <span className="block text-[2.25rem] sm:text-[2.9rem] lg:text-[3.2rem] mt-0.5 bg-gradient-to-r from-[#30318B] via-[#5A56FF] to-[#FF2B8C] bg-clip-text text-transparent font-black drop-shadow-sm">
              รับส่วนลดสูงสุด 50%
            </span>
          </h1>

          <div className="max-w-md sm:max-w-4xl mx-auto mb-3 sm:mb-8 text-[1.05rem] sm:text-xl lg:text-2xl leading-[1.5] sm:leading-relaxed text-slate-600 font-medium">
            <p className="mb-1 sm:mb-2">
              <strong className="text-[#30318B]">ของแถมฟรี 3 รายการ</strong>
              <span className="hidden sm:inline"> : </span>
              <span className="sm:hidden block text-[0.85rem] tracking-wide text-slate-500 mt-0.5">แฟลซซิ่ง • เพลท • ขาแขวน</span>
              <span className="hidden sm:inline">แฟลซซิ่ง • เพลท • ขาแขวน</span>
            </p>
            <p className="text-pink-600 font-semibold sm:inline-block sm:ml-1">ส่วนลดรางน้ำอลูมิเนียม 50%</p>
          </div>

          {/* Benefit & Promo chips (mobile) – optimized unique items, no scroll */}
  <div className="sm:hidden mb-3">
    <p className="text-[12px] font-semibold tracking-wide text-[#30318B] mb-2">สิทธิ์ที่ได้รับ</p>
            <ul className="flex flex-wrap justify-center gap-2" aria-label="สิทธิ์โปรโมชัน">
    <li className="tag-pill brand text-[15px]">แถมครบ 3 รายการ</li>
    <li className="tag-pill text-[15px]">ติดตั้งเร็ว 1 วัน*</li>
    <li className="tag-pill text-[15px]">ปรึกษาช่างมืออาชีพ</li>
    <li className="tag-pill pink text-[15px]">ลดติดตั้ง 5%</li>
    <li className="tag-pill pink text-[15px]">รางน้ำ -50%</li>
            </ul>
          </div>
          <ul className="hidden sm:flex flex-row flex-wrap justify-center gap-x-10 gap-y-1.5 mb-5 sm:mb-6 max-w-5xl mx-auto text-slate-700 text-[0.82rem] sm:text-base font-medium tracking-normal">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#30318B]" />ของแถมครบ 3 รายการ</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#30318B]" />ติดตั้งเร็ว ภายใน 1 วัน*</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#30318B]" />ปรึกษาช่างมืออาชีพ</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#30318B]" />ลดเพิ่มงานติดตั้งสูงสุด 5%</li>
          </ul>

          {/* (Removed separate mobile promo scroll section; merged above) */}
          <div className="hidden sm:flex mt-1 flex-wrap justify-center gap-x-5 gap-y-1.5 text-[0.78rem] sm:text-sm font-semibold text-slate-700 mb-1">
            <span className="text-[#30318B]">ลดติดตั้งสูงสุด 5%</span>
            <span className="text-pink-600">รางน้ำ -50%</span>
            <span className="text-slate-600">แถม 3 รายการ</span>
          </div>
        </div>
      </section>

      {/* Separator between Promo and Form */}
      <div
        aria-hidden
        className="w-full max-w-5xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#30318B]/40 to-transparent mb-4 sm:mb-6"
      />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
  className="w-full max-w-4xl mt-4 p-4 sm:p-0 sm:pt-2"
      >

        {/* Heading */}
  <div className="mb-5 sm:mb-8 text-center">
          <h2 className="text-xl sm:text-[2.05rem] font-extrabold tracking-tight text-slate-900 leading-snug">
            กรอกข้อมูลเพื่อ<span className="ml-1 bg-gradient-to-r from-[#30318B] via-[#5A56FF] to-[#FF2B8C] bg-clip-text text-transparent">รับสิทธิ์โปร</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">กรอกครบ = ยืนยันสิทธิ์อัตโนมัติ • จำนวนจำกัด</p>
        </div>

        {/* Fields */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-2 font-medium text-sm sm:text-base text-slate-800">
                ชื่อ <span className="text-pink-500/70">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                placeholder="ชื่อ"
                className="w-full rounded-xl px-4 py-3 bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-4 focus:ring-[#30318B]/15 focus:border-[#30318B]/60 transition-all"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 font-medium text-sm sm:text-base text-slate-800">
                นามสกุล
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="นามสกุล (ถ้ามี)"
                className="w-full rounded-xl px-4 py-3 bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-4 focus:ring-[#30318B]/15 focus:border-[#30318B]/60 transition-all"
              />
            </div>
          </div>

          {/* Inline Promo */}
          <div className="w-full text-center">
            <span className="inline-flex items-center gap-2 text-[#30318B] font-semibold text-sm">
              🎁 รับฟรี แฟลซซิ่ง + เพลท + ขาแขวน เมื่อกรอกฟอร์มนี้
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-sm sm:text-base text-slate-800">
                เบอร์โทร <span className="text-pink-500/70">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                pattern="[0-9]{9,10}"
                maxLength={10}
                required
                autoComplete="tel"
                placeholder="เบอร์ที่ติดต่อได้"
                className="w-full rounded-xl px-4 py-3 bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-4 focus:ring-[#30318B]/15 focus:border-[#30318B]/60 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-sm sm:text-base text-slate-800">
                อีเมล
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="อีเมล (ไม่บังคับ)"
                className="w-full rounded-xl px-4 py-3 bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-4 focus:ring-[#30318B]/15 focus:border-[#30318B]/60 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lineId" className="block mb-2 font-medium text-sm sm:text-base text-slate-800">
                LINE ID
              </label>
              <input
                id="lineId"
                name="lineId"
                type="text"
                autoComplete="username"
                autoCapitalize="off"
                placeholder="LINE ID (ถ้ามี)"
                className="w-full rounded-xl px-4 py-3 bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-4 focus:ring-[#30318B]/15 focus:border-[#30318B]/60 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base text-slate-800">บริการที่สนใจ</label>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-800">
                {['หน้าบ้าน', 'หลังบ้าน', 'โรงจอดรถ', 'อื่นๆ'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 font-normal">
                    <input
                      type="checkbox"
                      name="interest"
                      value={opt}
                      className="w-4 h-4 rounded border-slate-300 text-[#30318B] focus:ring-[#30318B]"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="details" className="block mb-2 font-medium text-sm sm:text-base text-slate-800">
              รายละเอียด
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder="ขนาด / ลักษณะพื้นที่ / วัสดุที่สนใจ"
              enterKeyHint="done"
              className="w-full rounded-xl px-4 py-3 bg-white border border-slate-300 text-slate-900 placeholder-slate-400 resize-none
                         focus:outline-none focus:ring-4 focus:ring-[#30318B]/15 focus:border-[#30318B]/60 transition-all"
            />
          </div>

          {/* Promo Bottom */}
          <div className="w-full text-center">
            <p className="text-sm font-medium text-slate-700">⚡ กดยืนยัน = จองสิทธิ์ทันที</p>
            <p className="text-xs text-slate-400 mt-1">*เงื่อนไขเป็นไปตามบริษัท / สิทธิ์จำกัด</p>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              required
              className="mt-1 w-4 h-4 rounded border-slate-300 text-[#30318B] focus:ring-[#30318B]"
            />
            <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed">
              ยินยอมให้ติดต่อกลับผ่านโทรศัพท์/LINE เพื่อแจ้งสิทธิ์โปรโมชันและรายละเอียดบริการ
            </label>
          </div>

          {/* CTA */}
          <div className="pt-1">
            <div aria-live="polite" className="min-h-[0]">
              {submitMessage && (
                <div
                  className={`text-center p-3 rounded-xl mb-4 ${
                    submitMessage.startsWith('✅')
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold text-base sm:text-lg py-4 rounded-xl transition-all tracking-wide
              ${isSubmitting
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-[#30318B] text-white hover:bg-[#2a2979] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]'
                }`}
            >
              {isSubmitting ? '⏳ กำลังส่ง...' : 'ส่งฟอร์ม รับโปรทันที'}
            </button>
            <p className="text-center text-xs text-slate-500 mt-3">
              เวลาติดต่อ 08:00–18:00 น. (กรอกหลังเวลางาน เราติดต่อกลับเช้า วันถัดไป)
            </p>
          </div>
        </div>

        {/* Separator before contact channels */}
        <div
          aria-hidden
          className="w-full h-px bg-gradient-to-r from-[#30318B]/0 via-[#30318B]/30 to-[#FF2B8C]/0 mt-10 mb-8"
        />
        {/* Contact Channels */}
        <div className="pt-2">
          <h3 className="text-center text-base font-semibold text-slate-800 mb-5 tracking-wide">ช่องทางติดต่อเพิ่มเติม</h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Phone */}
            <a
              href="tel:084-909-7777"
              className="flex flex-col items-center p-3 text-slate-600 hover:text-[#30318B] transition-colors"
            >
              <FiPhone className="w-6 h-6 mb-2" />
              <span className="text-xs text-slate-500 mb-1">โทร</span>
              <span className="text-sm font-medium text-slate-900">084-909-7777</span>
            </a>

            {/* LINE */}
            <a
              href="https://page.line.me/biv3563x?oat_content=url&openQrModal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 text-slate-600 hover:text-[#30318B] transition-colors"
            >
              <FaLine className="w-6 h-6 mb-2" />
              <span className="text-xs text-slate-500 mb-1">LINE</span>
              <span className="text-sm font-medium">@spkansard</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/spkansard/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 text-slate-600 hover:text-[#30318B] transition-colors"
            >
              <FaFacebookF className="w-6 h-6 mb-2" />
              <span className="text-xs text-slate-500 mb-1">Facebook</span>
              <span className="text-sm font-medium">SP Kansard</span>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="flex flex-col items-center p-3 text-slate-600 hover:text-[#30318B] transition-colors"
            >
              <FaInstagram className="w-6 h-6 mb-2" />
              <span className="text-xs text-slate-500 mb-1">Instagram</span>
              <span className="text-sm font-medium">@spkansard</span>
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-[#30318B]">SP KANSARD</span> • ผู้เชี่ยวชาญกันสาดคุณภาพ
            </p>
            <p className="text-xs text-slate-500 mt-1">ติดต่อช่องทางไหนก็ได้ที่สะดวก เราพร้อมให้คำปรึกษา</p>
          </div>
        </div>
      </form>
    </div>
  );
}
