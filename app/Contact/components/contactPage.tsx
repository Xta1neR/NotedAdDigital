'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    }

    setSubmitting(false);
  };

  return (
    <main className="px-6 py-12 max-w-5xl mx-auto space-y-12 z-0">
      <motion.h1
        className="text-4xl font-bold text-center text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Slide Into Our Inbox — We Do not Bite
      </motion.h1>

      <motion.p
        className="text-center text-white max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Got a project? A wild idea? Or just want to say hi? Whether you are ready to boost your brand,
        build something awesome, or need help untangling the chaos of digital marketing — we are just
        one message away from making it all happen.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Mail className="text-yellow-600" />
            <div className='text-white'>
              <p className="font-semibold">Email us</p>
              <p>md@notedaddigital.com</p>
              <p>ceo@notedaddigital.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="text-yellow-600" />
            <div className='text-white'>
              <p className="font-semibold">Call us</p>
              <p>9781043441</p>
              <p>7009704696</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="text-yellow-600" />
            <div className='text-white'>
              <p className="font-semibold">Location</p>
              <p>2nd Floor, G Square Building, Maqsudan, Jalandhar, Punjab, 144008</p>
              <p>We vibe globally 🌐</p>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p><strong>Business Hours:</strong></p>
            <p>Mon – Fri: 10:00 AM – 6:00 PM</p>
            <p>Saturday: Pizza + Planning Mode 🍕</p>
            <p>Sunday: Creativity Recharging 🧠</p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="space-y-4 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 z-10"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="text-yellow-500" />
            Let’s Make Magic 💥
          </h2>

          <input
            type="text"
            name="name"
            placeholder="🚀 Name"
            className="w-full p-3 border rounded-xl"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="📩 Email"
            className="w-full p-3 border rounded-xl"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder="📝 Tell us everything (seriously, go wild)"
            className="w-full p-3 border rounded-xl"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-yellow-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Let’s Make Magic 💥'}
          </button>

          {success && <p className="text-green-600 pt-2">Message sent successfully!</p>}
        </motion.form>
      </div>

      <p className="text-center text-xl text-white/80 mt-12 font-semibold">
        🧡 Let’s Build Something That Deserves A Mic Drop
      </p>
    </main>
  );
}
