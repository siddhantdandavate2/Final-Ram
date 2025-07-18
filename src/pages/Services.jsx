import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone} from 'lucide-react';
import { PoundSterling, Clock, AlertTriangle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    
  const treatments = [
    'Lumbar Epidural Injections',
    'Cervical Epidural Injections',
    'Facet Joint Injections',
    'Medial Branch Blocks',
    'Radiofrequency Ablation',
    'Trigger Point Injections',
    'Botox Injection for Chronic Pain and Headaches',
    'Qutenza Patch Application',
    'Spinal Cord Stimulation Referrals',
    'Lidocaine/Ketamine Infusion for Chronic Pain',
    'Nerve Root Blocks',
    'Sacroiliac Joint Injections',
    'Sympathetic Nerve Blocks',
    'Occipital Nerve Blocks',
    'Intercostal Nerve Blocks',
    'Stellate Ganglion Block',
    'Joint Denervation for Knee, Hip and Shoulder',
    'Post Surgical Pain Management',
  ];

  const feeStructure = [
    {
      service: 'Initial Consultation',
      duration: '60 minutes',
      price: '£300'
    },
    {
      service: 'Follow-up Appointment Fee',
      duration: '30 minutes',
      price: '£150'
    },
    {
      service: 'Complex Clinic Consultations',
      duration: '30-60 minutes',
      price: '£300-£500'
    },
    // {
    //   service: 'Complex Interventions',
    //   duration: '60-90 minutes',
    //   price: '£500-£800'
    // }
  ];

  return (
    <div className="py-16 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pain management services tailored to your individual needs and condition
          </p>
        </div>

        {/* Main Services */}
     <section className="">
        <div className='max-w-fit mx-auto px-4 sm:px-6 lg:px-8'>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-14 pb-32">
        {treatments.map((treatment, index) => (
            <motion.div
            key={treatment}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary"
            >
            <div className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
            <span className="text-gray-800 font-medium">{treatment}</span>
            </div>
            </motion.div>
        ))}
        </div>
        </div>
     </section>

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
                      Appointments cancelled with less than 24 hours notice will incur the full cost of the appointment. Please note that this appointment and the fee paid does not include any treatment and/or investigations.                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Contact Notice</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Insured patients should contact their insurer directly and please liaise with the secretary Ms Pizzey
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