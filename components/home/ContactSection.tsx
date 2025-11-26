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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ATTENTION: Ceci ne fait qu'afficher une alerte. 
    // L'envoi réel d'email nécessite une configuration côté serveur.
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
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder={t('contact_name_placeholder')} 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder={t('contact_email_placeholder')} 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    placeholder={t('contact_phone_placeholder')} 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="caseType">Type of Loss</Label>
                  <Input 
                    id="caseType" 
                    placeholder={t('contact_case_type_placeholder')} 
                    value={formData.caseType} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount Lost</Label>
                  <Input 
                    id="amount" 
                    placeholder={t('contact_amount_placeholder')} 
                    value={formData.amount} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder={t('contact_message_placeholder')} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                <Send className="w-5 h-5 mr-3" />
                {t('contact_submit')}
              </Button>
            </form>
          </div>
          
          {/* Contact Details & Fast-Track - MODIFIÉ */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                {t('contact_title')}
              </h3>
              
              <div className="space-y-6 border-b border-white/20 pb-6 mb-6">
                {/* Updated Phone */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t('contact_phone_label')}</div>
                    <div className="text-blue-100">+447481793562</div>
                    <div className="text-sm text-blue-200">{t('contact_hours')}</div>
                  </div>
                </div>
                
                {/* Updated Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t('contact_email_label')}</div>
                    <div className="text-blue-100">info@international-refund.com</div>
                    <div className="text-sm text-blue-200">{t('contact_response')}</div>
                  </div>
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