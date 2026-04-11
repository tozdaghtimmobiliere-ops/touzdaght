'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/components/providers'
import { buildWhatsAppUrl } from '@/lib/utils'
import { BackButton } from '@/components/ui/back-button'

const content = {
  ar: {
    hero: { title: 'اتصل بنا', subtitle: 'نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية' },
    info: {
      title: 'معلومات الاتصال',
      address: { title: 'العنوان', value: 'الشقة 2 الطابق 1 عمارة 34\nتجزئة الحرية، تيزنيت' },
      phone: { title: 'الهاتف', value: '0702060323' },
      email: { title: 'البريد الإلكتروني', value: 'tozdaght.immobiliere@gmail.com' },
    },
    form: {
      title: 'أرسل لنا رسالة',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: 'إرسال عبر واتساب',
      success: 'تم إرسال رسالتك بنجاح!',
      successSub: 'سيتواصل معكم فريقنا في أقرب وقت ممكن',
      sendAnother: 'إرسال رسالة أخرى',
    },
    whatsapp: {
      title: 'تواصل عبر واتساب',
      description: 'للاستفسارات السريعة، تواصل معنا مباشرة',
      button: 'تواصل عبر واتساب',
    },
  },
  fr: {
    hero: { title: 'Contactez-nous', subtitle: 'Nous sommes là pour vous aider. Contactez-nous pour une consultation gratuite' },
    info: {
      title: 'Informations de contact',
      address: { title: 'Adresse', value: 'Appartement 2, 1er étage, Immeuble 34\nQuartier El Youssoufia, Tiznit' },
      phone: { title: 'Téléphone', value: '0702060323' },
      email: { title: 'Email', value: 'tozdaght.immobiliere@gmail.com' },
    },
    form: {
      title: 'Envoyez-nous un message',
      name: 'Nom complet',
      email: 'Adresse email',
      phone: 'Numéro de téléphone',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer via WhatsApp',
      success: 'Votre message a été envoyé avec succès!',
      successSub: 'Notre équipe vous contactera dans les plus brefs délais',
      sendAnother: 'Envoyer un autre message',
    },
    whatsapp: {
      title: 'Contactez-nous sur WhatsApp',
      description: 'Pour des demandes rapides, contactez-nous directement',
      button: 'Contacter sur WhatsApp',
    },
  },
  en: {
    hero: { title: 'Contact us', subtitle: 'We are here to help. Contact us for a free consultation' },
    info: {
      title: 'Contact information',
      address: { title: 'Address', value: 'Apartment 2, 1st floor, Building 34\nEl Youssoufia District, Tiznit' },
      phone: { title: 'Phone', value: '0702060323' },
      email: { title: 'Email', value: 'tozdaght.immobiliere@gmail.com' },
    },
    form: {
      title: 'Send us a message',
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send via WhatsApp',
      success: 'Your message has been sent successfully!',
      successSub: 'Our team will contact you as soon as possible',
      sendAnother: 'Send another message',
    },
    whatsapp: {
      title: 'Contact us on WhatsApp',
      description: 'For quick inquiries, contact us directly',
      button: 'Contact on WhatsApp',
    },
  },
}

export default function ContactPage() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.ar
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message =
`السلام عليكم،

*رسالة جديدة من الموقع - توزدغت للعقار*

👤 الاسم: ${formData.name}
📞 الهاتف: ${formData.phone}
📧 البريد: ${formData.email || 'غير محدد'}
📌 الموضوع: ${formData.subject || 'غير محدد'}

💬 الرسالة:
${formData.message}`

    const url = buildWhatsAppUrl('212702060323', message)
    window.open(url, '_blank')
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const whatsappUrl = buildWhatsAppUrl('212702060323', 'السلام عليكم، أرغب في الاستفسار عن مشاريعكم العقارية')

  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #070E1A, #0A1628)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="اتصل بنا" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <BackButton />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">تواصل معنا</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-almarai text-3xl md:text-5xl font-bold text-white mb-4">
            {t.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }} className="text-white/50 text-lg max-w-2xl">
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">

              <h2 className="font-almarai text-2xl font-bold text-secondary mb-2">{t.info.title}</h2>
              <div className="gold-line w-10 mb-6" />

              <div className="space-y-4 mb-8">
                {[
                  { Icon: MapPin, title: t.info.address.title, value: t.info.address.value, href: null },
                  { Icon: Phone, title: t.info.phone.title, value: t.info.phone.value, href: `tel:${t.info.phone.value}` },
                  { Icon: Mail, title: t.info.email.title, value: t.info.email.value, href: `mailto:${t.info.email.value}` },
                ].map(({ Icon, title, value, href }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-gold/30 transition-all group"
                    style={{ boxShadow: '0 2px 10px rgba(10,22,40,0.04)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))' }}>
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary/40 uppercase tracking-wider mb-1">{title}</p>
                      {href ? (
                        <a href={href} className="text-secondary/80 hover:text-gold transition-colors text-sm whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-secondary/80 text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Direct */}
              <div className="p-6 rounded-2xl border border-gold/20"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.05), rgba(201,168,76,0.02))' }}>
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-gold" />
                  <h3 className="font-bold text-secondary text-sm">{t.whatsapp.title}</h3>
                </div>
                <p className="text-secondary/50 text-xs mb-4 leading-relaxed">{t.whatsapp.description}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="whatsapp-btn w-full justify-center text-sm">
                  <MessageCircle className="w-4 h-4" />
                  {t.whatsapp.button}
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-border"
                style={{ boxShadow: '0 8px 40px rgba(10,22,40,0.06)' }}>

                <h2 className="font-almarai text-2xl font-bold text-secondary mb-2">{t.form.title}</h2>
                <div className="gold-line w-10 mb-6" />

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.05))' }}>
                      <MessageCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-almarai text-xl font-bold text-secondary mb-2">{t.form.success}</h3>
                    <p className="text-secondary/50 text-sm mb-6">{t.form.successSub}</p>
                    <button onClick={() => setIsSubmitted(false)}
                      className="text-gold text-sm font-semibold border border-gold/30 px-5 py-2 rounded-lg hover:bg-gold hover:text-secondary transition-all">
                      {t.form.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">{t.form.name} *</label>
                        <input type="text" required value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-input" placeholder={t.form.name} />
                      </div>
                      <div>
                        <label className="form-label">{t.form.email}</label>
                        <input type="email" value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-input" placeholder={t.form.email} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">{t.form.phone} *</label>
                        <input type="tel" required value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input" placeholder={t.form.phone} />
                      </div>
                      <div>
                        <label className="form-label">{t.form.subject}</label>
                        <input type="text" value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="form-input" placeholder={t.form.subject} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">{t.form.message} *</label>
                      <textarea required rows={5} value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input resize-none" placeholder={t.form.message} />
                    </div>

                    {/* WhatsApp notice */}
                    <div className="flex items-center gap-2 p-3 rounded-xl text-xs text-secondary/50 border border-border"
                      style={{ background: 'rgba(37,211,102,0.03)' }}>
                      <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      سيتم إرسال رسالتك مباشرة عبر واتساب إلى فريقنا
                    </div>

                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1"
                      style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}>
                      <MessageCircle className="w-5 h-5" />
                      {t.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}