import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-cyan-400 text-white py-16 flex items-center justify-center px-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-white">Maxcare</span> Pain Clinic
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Specialized pain management services providing compassionate care and effective treatments 
              to help you live pain-free
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:07777106344"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
<div className='rounded-full w-[430px] h-[440px] mb-2 border-4 border-white'>
  <img className='rounded-full w-full h-full object-cover object-[50%_40%]' src="photo.jpg" alt="Clinic Photo" />
</div>

      </section>

      {/* Brief Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Maxcare Pain Clinic
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Led by Dr. Ram Dhotarkar, Maxcare Pain Clinic specializes in comprehensive pain management 
              services. We combine advanced medical expertise with compassionate care to provide effective 
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