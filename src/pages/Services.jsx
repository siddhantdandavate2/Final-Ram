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
  <div className="py-16 pt-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-[#F5EFEB]">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#567c8d] mb-4">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#567c8d] max-w-3xl mx-auto">
          Comprehensive pain management services tailored to your individual needs and condition
        </p>
      </div>

      {/* Main Services */}
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#F5EFEB] p-5 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-102 duration-300 border border-[#F5EFEB]"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#2f4156] rounded-full mr-3" />
                  <span className="text-[#567c8d] font-medium text-sm sm:text-base">
                    {treatment}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <div className="bg-[#F5EFEB] rounded-lg p-6 sm:p-8 mt-12">
        <div className="flex items-center mb-6">
          <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
            <PoundSterling className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">Fees & Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Service Fees */}
          <div>
            <h3 className="text-lg font-semibold text-[#567c8d] mb-4">Service Fees</h3>
            <div className="space-y-4">
              {feeStructure.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-[#F5EFEB] rounded-lg shadow-sm">
                  <div>
                    <h4 className="font-medium text-[#567c8d]">{item.service}</h4>
                    <p className="text-sm text-[#567c8d]">{item.duration}</p>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#567c8d]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#567c8d] mb-4">Important Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-[#F5EFEB] rounded-lg">
                <Clock className="h-5 w-5 text-[#567c8d] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#567c8d]">Cancellation Policy</h4>
                  <p className="text-sm text-[#567c8d] mt-1">
                    Appointments cancelled with less than 24 hours notice will incur the full cost of the appointment.
                    This appointment and the fee paid do not include treatment or investigations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-[#F5EFEB] rounded-lg">
                <Phone className="h-5 w-5 text-[#567c8d] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#567c8d]">Contact Notice</h4>
                  <p className="text-sm text-[#567c8d] mt-1">
                    Insured patients should contact their insurer directly and liaise with secretary Ms Pizzey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Note */}
        <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-5 sm:p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-yellow-800">Special Note</h4>
              <p className="text-sm text-yellow-700 mt-1">
                Fees may vary based on procedure complexity and individual needs. A detailed quote will be provided during your consultation. Contact us for specific pricing on complex interventional procedures.
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