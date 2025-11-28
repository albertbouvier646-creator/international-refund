
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../translations";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    amount: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact_success'));
    setFormData({
      name: "",
      email: "",
      phone: "",
      caseType: "",
      amount: "",
      message: ""
    });
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('contact_subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact_name')} *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact_email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact_phone')} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="caseType">{t('contact_case_type')} *</Label>
                  <select
                     id="caseType"
                     className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                     value={formData.caseType}
                     onChange={(e) => setFormData({...formData, caseType: e.target.value})}
                  >
                    <option value="" disabled>{t('case_placeholder')}</option>
                    <option value="crypto">{t('case_crypto')}</option>
                    <option value="investment">{t('case_investment')}</option>
                    <option value="insurance">{t('case_insurance')}</option>
                    <option value="corporate">{t('case_corporate')}</option>
                    <option value="bank">{t('case_bank')}</option>
                    <option value="international">{t('case_international')}</option>
                    <option value="other">{t('case_other')}</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="amount">{t('contact_amount')}</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="50000"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">{t('contact_details')} *</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your case..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                <Send className="w-5 h-5 mr-2" />
                {t('contact_submit')}
              </Button>
              
              <p className="text-sm text-slate-500 mt-4 text-center">
                {t('contact_confidential')}
              </p>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">{t('contact_info_title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t('contact_phone_label')}</div>
                    <div className="text-blue-100">+1 (555) 123-4567</div>
                    <div className="text-sm text-blue-200">{t('contact_available')}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t('contact_email_label')}</div>
                    <div className="text-blue-100">info@internationalrefund.com</div>
                    <div className="text-sm text-blue-200">{t('contact_response')}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t('contact_hq')}</div>
                    <div className="text-blue-100">{t('contact_location')}</div>
                    <div className="text-sm text-blue-200">{t('contact_global')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
              <div className="text-amber-900 font-semibold mb-2">⚡ {t('contact_fast')}</div>
              <p className="text-amber-800 text-sm">
                {t('contact_fast_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
