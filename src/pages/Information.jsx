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
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Patient Information
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Educational resources and downloadable materials to help you
            understand your condition and treatment options
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {informationSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
            >
              <div className="flex items-center mb-5">
                <div className="bg-primary/10 rounded-full p-3 sm:p-4">
                  <section.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 ml-4">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-5">
                {section.description}
              </p>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Medication + Recovery Guidelines */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Medication Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
                  Medication Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Before Procedures
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Continue most medications as usual</li>
                      <li>• Stop blood thinners as directed</li>
                      <li>• Inform us of all supplements</li>
                      <li>• Follow specific pre-procedure instructions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      After Procedures
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
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
                className="bg-amber-50 rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
                  Recovery Guidelines
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Immediate Post-Procedure
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Rest for the first 24 hours</li>
                      <li>• Apply ice as directed</li>
                      <li>• Monitor injection site</li>
                      <li>• Avoid strenuous activities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Return to Activities
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
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
        <div className="mt-16 bg-gradient-to-r from-primary to-cyan-400 rounded-xl px-6 py-10 text-white text-center">
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
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Call Us: 07777106344
            </a>
            <a
              href="mailto:admin@berkshirepainclinic.co.uk"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
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
