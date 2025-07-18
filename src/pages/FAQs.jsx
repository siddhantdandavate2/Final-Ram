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
      answer: "Your first consultation will be a comprehensive 40-minute appointment where Dr. Dhotarkar will review your medical history, discuss your pain symptoms in detail, perform a physical examination, and develop a personalized treatment plan tailored to your specific needs."
    },
    {
      question: "Where will be my consultation?",
      answer: "Currently Dr Dhotarkar runs private  clinics across Berkshire and south Buckinghamshire. The clinics are at  Shelburne hospital clinic High Wycombe , Reading Circle hospital and Berkshire Independent hospital , Reading. The best way to find the earliest and convenient appointment will be to contact the secretary."
    },
    {
      question: "How do I prepare for my appointment?",
      answer: "Bring a list of current medications, relevant medical records or imaging studies, insurance information, and a detailed description of your pain symptoms including what makes them better or worse. Before appointment You will also fill in a questionnaire sent to you by secretary. This helps for understanding your pain and the impact it is having on various aspects of your life ."
    },
    {
      question: "Do you provide ongoing pain management?",
      answer: "Yes, we provide comprehensive ongoing pain management including regular follow-up appointments, medication management, repeat procedures as needed, and coordination with other healthcare providers in your care team. For your ongoing care , you may have to be referred to local hospital pain clinics for multidisciplinary rehabilitation programme- typically called pain management program."
    },
    {
      question: "Can I bring a family member or friend to my appointment?",
      answer: "Absolutely! We encourage patients to bring a support person to appointments, especially for the initial consultation. They can provide emotional support and help you remember important information discussed during the visit. "
    },
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
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
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