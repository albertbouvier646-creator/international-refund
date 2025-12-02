
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../translations";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    amount: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co for backend-less email sending
      // IMPORTANT: The first time you use this, you MUST click the activation link sent to your email!
      const response = await fetch("https://formsubmit.co/ajax/info@international-refund.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Claim: ${formData.caseType} - ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          case_type: formData.caseType,
          amount: formData.amount,
          message: formData.message,
          _template: 'table',
          _captcha: "false" // Disable captcha for smoother testing
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          caseType: "",
          amount: "",
          message: ""
        });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        alert("Something went wrong. Please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg relative overflow-hidden">
              {isSuccess && (
                <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 max-w-md mb-4">
                    Thank you for your submission. Our team will review your case and contact you within 24 hours.
                  </p>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto mb-6">
                    (Note to owner: If you haven't received the email, please check your Spam folder for an activation link from FormSubmit)
                  </p>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="mt-2"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact_name')} *</Label>
                  <Input
                    id="name"
                    placeholder={t('contact_name_placeholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact_email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact_email_placeholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact_phone')} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t('contact_phone_placeholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="caseType">{t('contact_case_type')} *</Label>
                  <select
                     id="caseType"
                     className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                     value={formData.caseType}
                     onChange={(e) => setFormData({...formData, caseType: e.target.value})}
                     disabled={isSubmitting}
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
                  placeholder={t('contact_amount_placeholder')}
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact_submit')}
                  </>
                )}
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
                    <div className="text-blue-100">+44 7481 793562</div>
                    <div className="text-sm text-blue-200">{t('contact_available')}</div>
                  </div>
                </div>
                
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
