import React from 'react';
import { Stethoscope, Pill, Syringe, ArrowRight, PoundSterling, Clock, AlertTriangle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: 'Consultation & Assessment',
      description: 'Comprehensive evaluation of your pain condition with detailed medical history review and physical examination.',
      features: [
        'Thorough medical history review',
        'Physical examination and assessment',
        'Pain evaluation and scoring',
        'Diagnostic imaging review',
        'Treatment plan development',
        'Patient education and counseling'
      ]
    },
    {
      icon: Pill,
      title: 'Medication Advice',
      description: 'Expert guidance on pain medication management, including optimization of current medications and alternative options.',
      features: [
        'Medication review and optimization',
        'Side effect management',
        'Drug interaction assessment',
        'Alternative medication options',
        'Dosage adjustments',
        'Withdrawal management support'
      ]
    },
    {
      icon: Syringe,
      title: 'Injections & Interventions',
      description: 'Advanced interventional procedures for targeted pain relief using state-of-the-art techniques and equipment.',
      features: [
        'Image-guided injections',
        'Nerve blocks and ablations',
        'Spinal procedures',
        'Joint injections',
        'Trigger point injections',
        'Advanced pain interventions'
      ]
    }
  ];

  const procedures = [
    'Epidural Steroid Injections',
    'Facet Joint Injections',
    'Sacroiliac Joint Injections',
    'Trigger Point Injections',
    'Nerve Root Blocks',
    'Radiofrequency Ablation',
    'Medial Branch Blocks',
    'Sympathetic Nerve Blocks',
    'Intercostal Nerve Blocks',
    'Piriformis Injections',
    'Bursa Injections',
    'Tendon Sheath Injections',
    'Caudal Epidural Injections',
    'Transforaminal Epidural Injections',
    'Celiac Plexus Blocks',
    'Stellate Ganglion Blocks',
    'Hypogastric Plexus Blocks',
    'Pudendal Nerve Blocks',
    'Occipital Nerve Blocks',
    'Spinal Cord Stimulation Consultation',
    'Intrathecal Pump Consultation',
    'Platelet-Rich Plasma (PRP) Injections',
    'Hyaluronic Acid Injections',
    'Botulinum Toxin Injections'
  ];

  const feeStructure = [
    {
      service: 'Initial Consultation',
      duration: '60 minutes',
      price: '£200'
    },
    {
      service: 'Follow-up Consultation',
      duration: '30 minutes',
      price: '£150'
    },
    {
      service: 'Injection Procedures',
      duration: '30-60 minutes',
      price: '£300-£500'
    },
    {
      service: 'Complex Interventions',
      duration: '60-90 minutes',
      price: '£500-£800'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pain management services tailored to your individual needs and condition
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {/* Procedures List */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <Syringe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Procedures & Interventions</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            We offer a comprehensive range of interventional pain management procedures, each tailored to address specific pain conditions and patient needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures.map((procedure, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{procedure}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fees Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <PoundSterling className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Fees & Pricing</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Fees</h3>
              <div className="space-y-4">
                {feeStructure.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <h4 className="font-medium text-gray-800">{item.service}</h4>
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Cancellation Policy</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      24-hour notice required for cancellations. Late cancellations may incur a fee.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Insurance Coverage</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Most private health insurance plans accepted. Please verify coverage with your provider.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <PoundSterling className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Payment Options</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We accept cash, card payments, and direct insurance billing where applicable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-yellow-800">Special Note</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Fees may vary based on the complexity of the procedure and individual patient needs. 
                  A detailed quote will be provided during your consultation. Please contact us for 
                  specific pricing information regarding complex interventional procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;