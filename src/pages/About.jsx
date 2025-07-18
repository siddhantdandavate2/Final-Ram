import React from 'react';
import { Award, BookOpen, Users, MapPin, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  const qualifications = [
    'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
    'MD in Anesthesiology',
    'Fellowship in Pain Medicine',
    'Diploma in Pain Management',
    'Member of International Association for the Study of Pain (IASP)',
    'Member of British Pain Society'
  ];

  const positions = [
    {
      title: 'Consultant Pain Medicine Specialist',
      organization: 'Maxcare Pain Clinic',
      period: '2018 - Present',
      description: 'Leading comprehensive pain management services with focus on interventional procedures'
    },
    {
      title: 'Senior Pain Medicine Consultant',
      organization: 'NHS Trust Hospital',
      period: '2015 - 2018',
      description: 'Provided specialized pain management services in hospital setting'
    },
    {
      title: 'Clinical Research Associate',
      organization: 'Pain Research Institute',
      period: '2012 - 2015',
      description: 'Conducted clinical trials for innovative pain management treatments'
    }
  ];

  const affiliations = [
    'International Association for the Study of Pain (IASP)',
    'British Pain Society',
    'Royal College of Anaesthetists',
    'Faculty of Pain Medicine',
    'European Pain Federation (EFIC)',
    'World Institute of Pain (WIP)'
  ];

  const expertise = [
    'Chronic Pain Management',
    'Interventional Pain Procedures',
    'Spinal Injections',
    'Nerve Blocks',
    'Radiofrequency Ablation',
    'Medication Management',
    'Multimodal Pain Treatment'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Dr. Ram Dhotarkar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialist in Pain Medicine with extensive experience in interventional pain management 
            and comprehensive patient care
          </p>
        </div>

        {/* Professional Bio */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Professional Biography</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Dr. Ram Dhotarkar is a highly skilled and experienced Pain Medicine Specialist who has dedicated 
              his career to helping patients overcome chronic pain conditions. With over 15 years of experience 
              in the field, Dr. Dhotarkar combines advanced medical expertise with a compassionate approach to 
              patient care.
            </p>
            
            <p>
              His journey in pain medicine began after completing his medical degree and specializing in 
              Anesthesiology. Recognizing the growing need for specialized pain management services, Dr. Dhotarkar 
              pursued additional fellowship training in Pain Medicine, where he developed expertise in advanced 
              interventional procedures and multimodal pain treatment approaches.
            </p>
            
            <p>
              Dr. Dhotarkar's philosophy centers on providing personalized, evidence-based care that addresses 
              not just the symptoms of pain, but the underlying causes. He believes in working closely with 
              patients to develop comprehensive treatment plans that may include medication management, 
              interventional procedures, and lifestyle modifications.
            </p>
            
            <p>
              Throughout his career, Dr. Dhotarkar has remained committed to advancing the field of pain medicine 
              through continued education, research participation, and professional development. He regularly 
              attends international conferences and maintains active memberships in leading pain medicine organizations.
            </p>
          </div>
        </div>

        {/* Qualifications */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Qualifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">{qualification}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Positions Held */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Positions Held</h2>
          </div>
          
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-800">{position.title}</h3>
                <p className="text-primary font-medium">{position.organization}</p>
                <p className="text-gray-500 text-sm mb-2">{position.period}</p>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Professional Affiliations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">{affiliation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Areas of Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {expertise.map((area, index) => (
              <div key={index} className="bg-primary/5 rounded-lg p-4 text-center">
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;