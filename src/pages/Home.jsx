import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Award, Users, Clock, ArrowRight, Phone, Calendar } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import InsuranceLogos from '../components/InsuranceLogos';

const Home = () => {
  const valueProps = [
    {
      icon: Shield,
      title: 'Expert Care',
      description: 'Specialized pain management with Dr. Ram Dhotarkar\'s extensive experience in interventional pain procedures.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Evidence-based treatments with a track record of successful patient outcomes and pain relief.'
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Tailored treatment plans designed specifically for your unique condition and needs.'
    },
    {
      icon: Clock,
      title: 'Timely Treatment',
      description: 'Quick appointment scheduling and efficient treatment delivery to get you back to living pain-free.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Reading, UK',
      rating: 5,
      text: 'Dr. Dhotarkar completely transformed my quality of life. After years of chronic back pain, his treatment approach gave me my life back. Highly recommend!'
    },
    {
      name: 'Michael Chen',
      location: 'Windsor, UK',
      rating: 5,
      text: 'Professional, knowledgeable, and caring. The injection therapy worked wonders for my arthritis pain. Excellent service from start to finish.'
    },
    {
      name: 'Emma Thompson',
      location: 'Maidenhead, UK',
      rating: 5,
      text: 'Outstanding care and attention to detail. The team at Maxcare Pain Clinic made me feel comfortable throughout the entire treatment process.'
    }
  ];
  
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-cyan-400 text-white py-16 flex items-center justify-center px-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="text-white">Maxcare</span> Pain Clinic
            </h1>
            <p className="text-xl md:text-2xl mb-8 ml-2 max-w-3xl mx-auto opacity-90">
              Led by Dr. Ram Dhotarkar, Maxcare Pain Clinic specializes in comprehensive pain management 
              services. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/about"
                className="bg-white bg-opacity-90 text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                Know More ->
              </Link>
            </div>
          </div>
        </div>
<div className='rounded-full w-[430px] h-[430px] mb-2 border-4 border-white'>
  <img className='rounded-full w-full h-full object-cover object-[50%_36%]' src="photo.jpg" alt="Clinic Photo" />
</div>

      </section>

      {/* Brief Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Maxcare Pain Clinic
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Specialized pain management services providing compassionate care and effective treatments 
              to help you live pain-free.
              We combine advanced medical expertise in providing effective 
              solutions for chronic pain conditions. Our clinic offers consultation, medication management, 
              and specialized injection therapies to help patients regain their quality of life.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-primary hover:text-cyan-600 font-semibold transition-colors"
            >
              <span>Learn More About Dr. Dhotarkar</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Maxcare Pain Clinic?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional pain management care with a focus on patient comfort and successful outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <prop.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section for Services - Replaced with a more integrated heading */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 pt-10">Our Services</h2>
                      </motion.div>
        </div>
      </section>

      {/* Main Services */}
     <section className="bg-gray-50">
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


      {/* Insurance Partners */}
      <InsuranceLogos />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from patients who have found relief through our specialized care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey to Pain Relief?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't let pain control your life. Schedule a consultation with Dr. Ram Dhotarkar today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="bg-gradient-to-r from-primary to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;