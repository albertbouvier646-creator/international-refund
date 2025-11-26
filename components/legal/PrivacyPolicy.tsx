import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="lead text-lg mb-6">
              At International Refund Agency, we prioritize the protection of your personal and financial information. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h3>
            <p>
              We collect information necessary to process your recovery claim, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Case details and evidence relating to lost funds</li>
              <li>Transaction history relevant to the claim</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h3>
            <p>
              Your information is used strictly for the purpose of investigating and executing your fund recovery claim, communicating with you, and complying with legal obligations.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h3>
            <p>
              We implement robust technical and organizational security measures, including encryption and strict access controls, to protect your data against unauthorized access, alteration, disclosure, or destruction. We are ISO certified.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Information Sharing</h3>
            <p>
              We do not sell or rent your personal information to third parties. We may share necessary information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Law enforcement agencies (when required by law)</li>
              <li>Financial institutions involved in the recovery process</li>
              <li>Legal partners directly assisting with your case</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Your Rights</h3>
            <p>
              Under GDPR and international data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact our Data Protection Officer at <span className="font-semibold text-blue-600">info@international-refund.com</span>.
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