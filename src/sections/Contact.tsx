import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react"

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    birthDate: "",
    parentPhone: "",
    parentEmail: "",
    startDate: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="min-h-screen bg-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-pink-500 w-24"></div>
            <span className="px-4 text-pink-500 text-xl font-semibold">{t('navigation.contact')}</span>
            <div className="h-px bg-pink-500 w-24"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 h-full">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.contactInfo')}</h3>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('contact.phone.title')}</h4>
                  <p className="text-gray-600">(438) 778-3839</p>
                  <p className="text-gray-600">(514) 303-4443</p>
                  <p className="text-sm text-gray-500">{t('contact.phone.hours')}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('contact.email.title')}</h4>
                  <p className="text-gray-600">academiestmichelinc@gmail.com</p>
                  <p className="text-sm text-gray-500">{t('contact.email.response')}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('contact.address.title')}</h4>
                  <p className="text-gray-600">
                    7960 Boulevard St-Michel, Montréal, QC,
                    <br />
                    Canada H1Z 3E1
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t('contact.hours.title')}</h4>
                  <p className="text-gray-600">{t('contact.hours.weekdays')}</p>
                  <p className="text-gray-600">{t('contact.hours.weekend')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6 text-blue-500" />
                  {t('contact.form.title')}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Child Name */}
                <div>
                  <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.childName')}
                  </label>
                  <input
                    id="childName"
                    name="childName"
                    type="text"
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white bg-opacity-50 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 outline-none"
                    placeholder={t('contact.form.childNamePlaceholder')}
                    required
                  />
                </div>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.parentName')}
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white bg-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                    placeholder={t('contact.form.parentNamePlaceholder')}
                    required
                  />
                </div>

                {/* Birth Date and Start Date in a row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.birthDate')}
                    </label>
                    <input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white bg-opacity-50 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.startDate')}
                    </label>
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white bg-opacity-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Email in a row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.parentPhone')}
                    </label>
                    <input
                      id="parentPhone"
                      name="parentPhone"
                      type="tel"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white bg-opacity-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      placeholder={t('contact.form.parentPhonePlaceholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.parentEmail')}
                    </label>
                    <input
                      id="parentEmail"
                      name="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white bg-opacity-50 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
                      placeholder={t('contact.form.parentEmailPlaceholder')}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white bg-opacity-50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white opacity-10">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}