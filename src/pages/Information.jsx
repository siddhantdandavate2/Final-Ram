import React from 'react';
import { Download, FileText, Pill, Syringe, Shield, AlertTriangle } from 'lucide-react';

const Information = () => {
  const informationSections = [
    {
      title: 'Pain Medications',
      icon: Pill,
      description: 'Comprehensive guides about different pain medications, their uses, and side effects.',
      items: [
        'Understanding Pain Medications',
        'Opioid Safety Guidelines',
        'Non-Opioid Pain Relief Options',
        'Medication Interaction Guide',
        'Managing Side Effects',
        'Safe Storage and Disposal'
      ]
    },
    {
      title: 'Injection Procedures',
      icon: Syringe,
      description: 'Detailed information about various injection procedures and what to expect.',
      items: [
        'Epidural Steroid Injections',
        'Facet Joint Injections',
        'Nerve Block Procedures',
        'Pre-Procedure Preparation',
        'Post-Procedure Care',
        'Recovery Guidelines'
      ]
    },
    {
      title: 'Condition Information',
      icon: FileText,
      description: 'Educational materials about common pain conditions and their management.',
      items: [
        'Chronic Back Pain',
        'Arthritis Management',
        'Fibromyalgia Guide',
        'Neuropathic Pain',
        'Headache Disorders',
        'Post-Surgical Pain'
      ]
    },
    {
      title: 'Safety Information',
      icon: Shield,
      description: 'Important safety guidelines and precautions for pain management.',
      items: [
        'Treatment Safety Guidelines',
        'When to Seek Emergency Care',
        'Medication Safety',
        'Procedure Risks and Benefits',
        'Contraindications',
        'Patient Safety Checklist'
      ]
    }
  ];

  const downloadableResources = [
    {
      title: 'Pre-Appointment Preparation Guide',
      description: 'Essential information to help you prepare for your consultation',
      type: 'PDF',
      size: '1.2 MB'
    },
    {
      title: 'Pain Diary Template',
      description: 'Track your pain levels and triggers to help with treatment planning',
      type: 'PDF',
      size: '0.8 MB'
    },
    {
      title: 'Medication List Template',
      description: 'Organize your current medications for your appointment',
      type: 'PDF',
      size: '0.5 MB'
    },
    {
      title: 'Post-Procedure Care Instructions',
      description: 'General care instructions following injection procedures',
      type: 'PDF',
      size: '1.5 MB'
    },
    {
      title: 'Exercise Guide for Chronic Pain',
      description: 'Safe exercises and activities for pain management',
      type: 'PDF',
      size: '2.1 MB'
    },
    {
      title: 'Understanding Your Treatment Plan',
      description: 'Guide to help you understand and follow your treatment plan',
      type: 'PDF',
      size: '1.3 MB'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Patient Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational resources and downloadable materials to help you understand your condition and treatment options
          </p>
        </div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {informationSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 rounded-full p-4">
                  <section.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">{section.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">{section.description}</p>
              
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Downloadable Resources */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-primary/10 rounded-full p-4">
              <Download className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Downloadable Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {resource.type} • {resource.size}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                
                <button className="w-full bg-gradient-to-r from-primary to-cyan-400 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Important Medical Disclaimer</h3>
              <div className="space-y-3 text-yellow-700">
                <p>
                  The information provided in these resources is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  Always consult with Dr. Dhotarkar or your healthcare provider before making any changes to your treatment plan or medication regimen.
                </p>
                <p>
                  If you experience severe pain, unexpected side effects, or have concerns about your condition, please contact our clinic immediately or seek emergency medical attention if necessary.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for More Information */}
        <div className="mt-16 bg-gradient-to-r from-primary to-cyan-400 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our team is here to provide additional resources and answer any questions about your treatment
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
              Email for Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;