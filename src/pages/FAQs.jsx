import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "What should I expect during my first consultation?",
      answer: "Your first consultation will be a comprehensive 60-minute appointment where Dr. Dhotarkar will review your medical history, discuss your pain symptoms in detail, perform a physical examination, and develop a personalized treatment plan. Please bring any relevant medical records, imaging studies, and a list of current medications."
    },
    {
      question: "What types of pain conditions do you treat?",
      answer: "We treat a wide range of chronic pain conditions including back pain, neck pain, arthritis, fibromyalgia, neuropathic pain, headaches, joint pain, and post-surgical pain. Dr. Dhotarkar specializes in both common and complex pain conditions using evidence-based treatment approaches."
    },
    {
      question: "How long do injection procedures take?",
      answer: "Most injection procedures take between 30-60 minutes, including preparation and recovery time. The actual injection typically takes only a few minutes. You'll be monitored briefly after the procedure before being discharged with post-procedure instructions."
    },
    {
      question: "Are the injection procedures painful?",
      answer: "We use local anesthesia to minimize discomfort during injection procedures. Most patients report only mild discomfort during the injection itself. Some temporary soreness at the injection site is normal and typically resolves within a few days."
    },
    {
      question: "How quickly will I see results from treatment?",
      answer: "Results vary depending on the type of treatment and individual patient factors. Some patients may experience relief within days, while others may take several weeks to notice improvement. Dr. Dhotarkar will discuss realistic expectations during your consultation."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we work with most major private health insurance providers including Bupa, AXA Health, Aviva, Vitality, and others. Please contact us to verify your specific coverage. We also accept self-paying patients."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24-hour notice for appointment cancellations. Cancellations made with less than 24 hours notice may incur a cancellation fee. Emergency cancellations due to illness are handled on a case-by-case basis."
    },
    {
      question: "Can I drive after an injection procedure?",
      answer: "This depends on the type of injection and whether sedation is used. For most procedures, you may drive home if you feel comfortable and alert. However, for certain procedures or if sedation is used, you'll need someone to drive you home. We'll provide specific instructions for your procedure."
    },
    {
      question: "How often will I need follow-up appointments?",
      answer: "Follow-up frequency depends on your condition and treatment plan. Initial follow-ups are typically scheduled within 2-4 weeks after starting treatment. Once your condition is stable, appointments may be spaced further apart, often every 3-6 months."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring a valid ID, insurance card (if applicable), list of current medications, any relevant medical records or imaging studies, and a list of questions you'd like to discuss. Wear comfortable, loose-fitting clothing that allows access to the treatment area."
    },
    {
      question: "Do you offer emergency appointments?",
      answer: "While we don't provide emergency services, we do our best to accommodate urgent appointments when possible. For medical emergencies, please contact your GP or visit the nearest A&E department. For urgent pain management needs, please call our clinic."
    },
    {
      question: "Can you help with medication management?",
      answer: "Yes, medication management is a key part of our comprehensive pain management approach. Dr. Dhotarkar can review your current medications, optimize dosages, suggest alternatives, and help manage side effects while working with your GP."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and what to expect
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openItems[index] ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openItems[index] && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-cyan-400 rounded-lg p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold">Still Have Questions?</h2>
          </div>
          <p className="text-lg mb-6 opacity-90">
            If you can't find the answer you're looking for, our team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07777106344"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Call Us: 07777106344
            </a>
            <a
              href="mailto:admin@berkshirepainclinic.co.uk"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;