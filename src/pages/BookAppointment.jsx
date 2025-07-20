import React, { useState } from 'react';
import { Calendar, Clock, Phone, Mail, CheckCircle, AlertTriangle } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    datePreference: '',
    timePreference: '',
    appointmentType: '',
    painCondition: '',
    previousTreatment: '',
    insurance: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Appointment request:', formData);
    alert('Thank you for your appointment request. We will contact you within 24 hours to confirm your appointment.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      datePreference: '',
      timePreference: '',
      appointmentType: '',
      painCondition: '',
      previousTreatment: '',
      insurance: '',
      additionalInfo: ''
    });
  };

  const appointmentTypes = [
    'Initial Consultation',
    'Follow-up Appointment',
    'Injection Procedure',
    'Medication Review',
    'Second Opinion'
  ];

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];

  const insuranceOptions = [
    'Bupa',
    'AXA Health',
    'Aviva',
    'Vitality',
    'Simply Health',
    'WPA',
    'Self-Pay',
    'Other'
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Ram Dhotarkar and take the first step towards pain relief
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-r from-primary to-cyan-400 rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 mr-3" />
              <h3 className="text-xl font-bold">Call to Book</h3>
            </div>
            <p className="mb-4 opacity-90">
              Speak directly with our practice manager for immediate scheduling
            </p>
            <a
              href="tel:07777106344"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center w-full sm:w-auto space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>07777106344</span>
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <Mail className="h-8 w-8 mr-3" />
              <h3 className="text-xl font-bold">Email Us</h3>
            </div>
            <p className="mb-4 opacity-90">
              Send us your appointment request and we'll get back to you
            </p>
            <a
              href="mailto:vedantgolegaonkar@gmail.com"
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center w-full sm:w-auto space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Appointment Request Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Request an Appointment</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            {/* Appointment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="datePreference" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="datePreference"
                  name="datePreference"
                  value={formData.datePreference}
                  onChange={handleChange}
                  className="w-full min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="timePreference" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  id="timePreference"
                  name="timePreference"
                  value={formData.timePreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select preferred time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Type *
                </label>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select appointment type</option>
                  {appointmentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Provider
                </label>
                <select
                  id="insurance"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select insurance provider</option>
                  {insuranceOptions.map((provider) => (
                    <option key={provider} value={provider}>{provider}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Medical Information */}
            <div>
              <label htmlFor="painCondition" className="block text-sm font-medium text-gray-700 mb-2">
                Pain Condition/Symptoms *
              </label>
              <textarea
                id="painCondition"
                name="painCondition"
                value={formData.painCondition}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Please describe your pain condition, symptoms, and how long you've been experiencing them..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="previousTreatment" className="block text-sm font-medium text-gray-700 mb-2">
                Previous Treatment
              </label>
              <textarea
                id="previousTreatment"
                name="previousTreatment"
                value={formData.previousTreatment}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Please describe any previous treatments, medications, or procedures you've had for this condition..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Any additional information or special requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-cyan-400 text-white py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <Calendar className="h-5 w-5" />
              <span>Request Appointment</span>
            </button>
          </form>
        </div>

        {/* Important Information */}
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">What to Expect</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• We'll contact you within 24 hours to confirm your appointment</li>
                  <li>• Initial consultations are typically 60 minutes</li>
                  <li>• Please bring your medical records and current medications list</li>
                  <li>• Arrive 15 minutes early for paperwork completion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cancellation Policy</h3>
                <p className="text-yellow-700 text-sm">
                  We require 24 hours notice for appointment cancellations. Late cancellations or no-shows may incur a cancellation fee. For urgent medical matters, please contact your GP or visit A&E.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;