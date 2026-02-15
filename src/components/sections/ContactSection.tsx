'use client';

import { useState } from 'react';

export function ContactSection() {
  const [status, setStatus] = useState('');

  async function submit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setStatus(res.ok ? 'Message sent successfully.' : 'Failed to send message.');
  }

  return (
    <section id="contact" className="section-container">
      <h2 className="mb-8 text-4xl font-bold">Contact</h2>
      <form action={submit} className="mx-auto max-w-[600px] rounded-2xl border-2 border-transparent bg-bgLight p-12 [background:linear-gradient(#141414,#141414)_padding-box,linear-gradient(120deg,#00ff88,#00ccff)_border-box] shadow-[0_0_20px_rgba(0,255,136,0.3)]">
        {['name', 'email', 'subject'].map((field) => (
          <input key={field} name={field} required placeholder={field[0].toUpperCase() + field.slice(1)} className="mb-4 h-14 w-full rounded-lg border-2 border-borderDark bg-bgDark px-5 text-white outline-none transition focus:border-neon focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)]" />
        ))}
        <textarea name="message" required placeholder="Message" rows={5} className="mb-4 w-full rounded-lg border-2 border-borderDark bg-bgDark p-5 text-white outline-none transition focus:border-neon focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)]" />
        <button type="submit" className="rounded-lg bg-neon px-8 py-4 font-semibold text-bgDark">Send Message</button>
        {status && <p className="mt-4 text-textSecondary">{status}</p>}
      </form>
    </section>
  );
}
