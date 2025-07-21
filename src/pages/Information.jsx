import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  FileText,
  Pill,
  Syringe,
  Shield,
  AlertTriangle,
} from 'lucide-react';

const Information = () => {
  const informationSections = [
    {
      title: 'Pain Medications',
      icon: Pill,
      description:
        'Comprehensive guides about different pain medications, their uses, and side effects.',
      items: [
        'Understanding Pain Medications',
        'Opioid Safety Guidelines',
        'Non-Opioid Pain Relief Options',
        'Medication Interaction Guide',
        'Managing Side Effects',
        'Safe Storage and Disposal',
      ],
    },
    {
      title: 'Injection Procedures',
      icon: Syringe,
      description:
        'Detailed information about various injection procedures and what to expect.',
      items: [
        'Epidural Steroid Injections',
        'Facet Joint Injections',
        'Nerve Block Procedures',
        'Pre-Procedure Preparation',
        'Post-Procedure Care',
        'Recovery Guidelines',
      ],
    },
    {
      title: 'Condition Information',
      icon: FileText,
      description:
        'Educational materials about common pain conditions and their management.',
      items: [
        'Chronic Back Pain',
        'Arthritis Management',
        'Fibromyalgia Guide',
        'Neuropathic Pain',
        'Headache Disorders',
        'Post-Surgical Pain',
      ],
    },
    {
      title: 'Safety Information',
      icon: Shield,
      description:
        'Important safety guidelines and precautions for pain management.',
      items: [
        'Treatment Safety Guidelines',
        'When to Seek Emergency Care',
        'Medication Safety',
        'Procedure Risks and Benefits',
        'Contraindications',
        'Patient Safety Checklist',
      ],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#567c8d] mb-4">
            Patient Information
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#567c8d] max-w-3xl mx-auto">
            Educational resources and downloadable materials to help you
            understand your condition and treatment options
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {informationSections.map((section, index) => (
            <div
              key={index}
              className="bg-[#F5EFEB] rounded-xl shadow-lg p-6 sm:p-8"
            >
              <div className="flex items-center mb-5">
                <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
                  <section.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#567c8d] ml-4">
                  {section.title}
                </h2>
              </div>
              <p className="text-[567c8d] text-sm sm:text-base mb-5">
                {section.description}
              </p>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-[#567c8d] flex-shrink-0" />
                    <span className="text-[#567c8d] text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Medication + Recovery Guidelines */}
        <section className="py-16 sm:py-20 bg-[#F5EFEB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Medication Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#F5EFEB] rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#567c8d] mb-5">
                  Medication Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#567c8d] mb-2">
                      Before Procedures
                    </h4>
                    <ul className="space-y-1 text-sm text-[#567c8d]">
                      <li>• Continue most medications as usual</li>
                      <li>• Stop blood thinners as directed</li>
                      <li>• Inform us of all supplements</li>
                      <li>• Follow specific pre-procedure instructions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#567c8d] mb-2">
                      After Procedures
                    </h4>
                    <ul className="space-y-1 text-sm text-[#567c8d]">
                      <li>• Resume medications as directed</li>
                      <li>• Take prescribed medications as instructed</li>
                      <li>• Report any adverse reactions</li>
                      <li>• Follow up with medication adjustments</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Recovery Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#F5EFEB] rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#567c8d] mb-5">
                  Recovery Guidelines
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#567c8d] mb-2">
                      Immediate Post-Procedure
                    </h4>
                    <ul className="space-y-1 text-sm text-[#567c8d]">
                      <li>• Rest for the first 24 hours</li>
                      <li>• Apply ice as directed</li>
                      <li>• Monitor injection site</li>
                      <li>• Avoid strenuous activities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#567c8d] mb-2">
                      Return to Activities
                    </h4>
                    <ul className="space-y-1 text-sm text-[#567c8d]">
                      <li>• Light activities after 24 hours</li>
                      <li>• Normal activities in 2–3 days</li>
                      <li>• Exercise as tolerated</li>
                      <li>• Follow individual guidelines</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-16 bg-[#567c8d] rounded-xl px-6 py-10 text-[#F5EFEB] text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Need More Information?
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Our team is here to provide additional resources and answer any
            questions about your treatment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:07777106344"
              className="bg-[#F5EFEB] text-[#567c8d] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Call Us: 07777106344
            </a>
            <a
              href="mailto:admin@berkshirepainclinic.co.uk"
              className="border-2 border-[#F5EFEB] text-[#F5EFEB] px-6 py-3 rounded-full font-semibold hover:bg-[#F5EFEB] hover:text-[#567c8d] transition-all duration-300"
            >
              Email for Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
