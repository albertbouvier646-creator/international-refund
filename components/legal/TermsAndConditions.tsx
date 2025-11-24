
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="lead text-lg mb-6">
              Welcome to International Refund Agency. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h3>
            <p>
              By accessing this website, you accept these terms and conditions in full. Do not continue to use International Refund Agency's website if you do not accept all of the terms and conditions stated on this page.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Services Description</h3>
            <p>
              International Refund Agency provides fund recovery services, including but not limited to cryptocurrency recovery, investment fraud recovery, and insurance claim assistance. We operate on a contingency basis as described in our service agreements.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. No Guarantee of Results</h3>
            <p>
              While we maintain high success rates, we cannot guarantee the recovery of lost funds in every case. Recovery depends on various factors including jurisdiction, nature of the fraud, and available evidence. We commit to using our best efforts and expertise in every case.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Client Obligations</h3>
            <p>
              Clients must provide accurate, complete, and truthful information regarding their case. Failure to provide accurate information may result in the termination of services.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Confidentiality</h3>
            <p>
              We are committed to maintaining the confidentiality of all client information. Personal and financial data is processed in accordance with our Privacy Policy and relevant data protection regulations.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Intellectual Property</h3>
            <p>
              All content included on this site, such as text, graphics, logos, images, and software, is the property of International Refund Agency or its content suppliers and protected by international copyright laws.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Limitation of Liability</h3>
            <p>
              International Refund Agency shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the services and materials on this site.
            </p>

            <p className="mt-8 text-sm text-slate-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
