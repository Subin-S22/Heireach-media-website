"use client";

import Header from "@/lib/ui/heading";

const termsAndConditions = [
  "Introduction: These Terms and Conditions ('Agreement') govern your use of Heireach Media's services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, you must discontinue use immediately.",
  "Services: Provided Heireach Media offers digital marketing and creative services, including but not limited to Branding, SMM, SEO, Website Development, App Development, PPC, Meta Ads, LinkedIn Promotions, Business Solutions, Motion Graphics, Podcast Production, and Content Creation. All services are subject to these terms.",
  "User Responsibilities: You agree to provide accurate information and comply with all applicable laws while using our services. You are responsible for maintaining the confidentiality of your account details and any actions performed through your account.",
  "Payment and Billing: \n\t• All fees for services must be paid in full as per the agreed-upon quotation.\n\t• Payments are non-refundable unless otherwise stated.\n\t• Heireach Media reserves the right to suspend services if payment is not received on time.",
  "Intellectual Property: All content, materials, and intellectual property created or provided by Heireach Media remain our property unless otherwise agreed upon in writing. Unauthorized use, reproduction, or distribution is strictly prohibited.",
  "Confidentiality: Both parties agree to maintain the confidentiality of all proprietary information exchanged during the course of service delivery. Confidential information shall not be disclosed to any third party without prior consent.",
  "Limitation of Liability: Heireach Media is not liable for any indirect, incidental, or consequential damages resulting from the use of our services. Our liability is limited to the amount paid for the specific service in question.",
  "Service Modifications and Termination: We reserve the right to modify, suspend, or discontinue any service at any time without prior notice. Clients may terminate services by providing written notice; however, payments already made are non-refundable.",
  "Third-Party Tools and Services: We may use third-party tools and services to enhance our offerings. By using our services, you acknowledge and agree to the terms of these third-party providers.",
  "Governing Law: This Agreement shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be resolved through arbitration in India.",
  "Amendments: We reserve the right to update these Terms and Conditions at any time. Continued use of our services constitutes acceptance of any changes.",
  "Contact Information: For any questions regarding these Terms and Conditions, please contact us at grow@heireachmedia.com.",
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-96 px-24">
      <Header
        name="Terms & Conditions"
        type="h1"
        className="flex mt-9 pb-16 justify-center align-middle font-amazingSlab font-extrabold text-[40px] text-[--primary-color]"
      ></Header>
      <div className="text-lg">
        {termsAndConditions.map((point, index) => (
          <div key={index} className="mb-4 whitespace-pre text-wrap">
            <span className="font-bold">{index + 1}. </span>
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}
