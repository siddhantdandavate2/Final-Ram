import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      question: 'What should I expect during my first consultation?',
      answer:
        'Your first consultation will be a comprehensive 40-minute appointment where Dr. Dhotarkar will review your medical history, discuss your pain symptoms in detail, perform a physical examination, and develop a personalized treatment plan tailored to your specific needs.',
    },
    {
      question: 'Where will be my consultation?',
      answer:
        'Currently Dr Dhotarkar runs private  clinics across Berkshire and south Buckinghamshire. The clinics are at  Shelburne hospital clinic High Wycombe , Reading Circle hospital and Berkshire Independent hospital , Reading. The best way to find the earliest and convenient appointment will be to contact the secretary.',
    },
    {
      question: 'How do I prepare for my appointment?',
      answer:
        'Bring a list of current medications, relevant medical records or imaging studies, insurance information, and a detailed description of your pain symptoms including what makes them better or worse. Before appointment You will also fill in a questionnaire sent to you by secretary. This helps for understanding your pain and the impact it is having on various aspects of your life .',
    },
    {
      question: 'Do you provide ongoing pain management?',
      answer:
        'Yes, we provide comprehensive ongoing pain management including regular follow-up appointments, medication management, repeat procedures as needed, and coordination with other healthcare providers in your care team. For your ongoing care , you may have to be referred to local hospital pain clinics for multidisciplinary rehabilitation programme- typically called pain management program.',
    },
    {
      question: 'Can I bring a family member or friend to my appointment?',
      answer:
        'Absolutely! We encourage patients to bring a support person to appointments, especially for the initial consultation. They can provide emotional support and help you remember important information discussed during the visit. ',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-[#F5EFEB]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#567c8d] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#567c8d]">
            Find answers to common questions about our services and what to
            expect
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F5EFEB] rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left px-4 sm:px-6 py-5 sm:py-6 hover:bg-[#567c8d]/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-[#567c8d] pr-4">
                    {faq.question}
                  </h3>
                  {openItems[index] ? (
                    <ChevronUp className="h-5 w-5 text-[#567c8d] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#567c8d] flex-shrink-0" />
                  )}
                </div>
              </button>

              {openItems[index] && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base text-[#567c8d] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-[#567c8d] rounded-lg px-6 sm:px-8 py-10 text-[#F5EFEB] text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-2 sm:space-y-0 sm:space-x-3">
            <HelpCircle className="h-7 w-7 sm:h-8 sm:w-8" />
            <h2 className="text-xl sm:text-2xl font-bold">
              Still Have Questions?
            </h2>
          </div>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            If you can't find the answer you're looking for, our team is here to
            help
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:07777106344"
              className="bg-[#F5EFEB] text-[#567c8d] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Call Us: 07777106344
            </a>
            <a
              href="mailto:admin@berkshirepainclinic.co.uk"
              className="border-2 border-[#F5EFEB] text-[#F5EFEB] px-6 py-3 rounded-full font-semibold hover:bg-[#F5EFEB] hover:text-[#567c8d] transition-all duration-300 text-center"
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
