import {
  Award,
  BookOpen,
  Users,
  MapPin,
  Calendar,
  GraduationCap,
} from 'lucide-react';

const About = () => {
  const qualifications = [
    'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
    'MD in Anesthesiology',
    'Fellowship in Pain Medicine',
    'Diploma in Pain Management',
    'Member of International Association for the Study of Pain (IASP)',
    'Member of British Pain Society',
  ];

  const positions = [
    {
      title: 'Consultant Pain Medicine Specialist',
      organization: 'Maxcare Pain Clinic',
      period: '2018 - Present',
      description:
        'Leading comprehensive pain management services with focus on interventional procedures',
    },
    {
      title: 'Senior Pain Medicine Consultant',
      organization: 'NHS Trust Hospital',
      period: '2015 - 2018',
      description:
        'Provided specialized pain management services in hospital setting',
    },
    {
      title: 'Clinical Research Associate',
      organization: 'Pain Research Institute',
      period: '2012 - 2015',
      description:
        'Conducted clinical trials for innovative pain management treatments',
    },
  ];

  const affiliations = [
    'International Association for the Study of Pain (IASP)',
    'British Pain Society',
    'Royal College of Anaesthetists',
    'Faculty of Pain Medicine',
    'European Pain Federation (EFIC)',
    'World Institute of Pain (WIP)',
  ];

  const expertise = [
    'Chronic Pain Management',
    'Interventional Pain Procedures',
    'Spinal Injections',
    'Nerve Blocks',
    'Radiofrequency Ablation',
    'Medication Management',
    'Multimodal Pain Treatment',
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#567c8d] mb-4">
            About Dr. Ram Dhotarkar
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#567c8d] max-w-3xl mx-auto">
            Specialist in Pain Medicine with extensive experience in
            interventional pain management and comprehensive patient care
          </p>
        </div>

        {/* Professional Bio */}
        <div className="bg-[#F5EFEB] rounded-lg shadow-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Professional Biography
            </h2>
          </div>

          <div className="prose max-w-none text-[#567c8d] space-y-4 text-sm sm:text-base">
            <p>
              Dr. Ram Dhotarkar is a highly skilled and experienced Pain
              Medicine Specialist...
            </p>
            <p>
              His journey in pain medicine began after completing his medical
              degree...
            </p>
            <p>
              Dr. Dhotarkar's philosophy centers on providing personalized,
              evidence-based care...
            </p>
            <p>
              Throughout his career, Dr. Dhotarkar has remained committed to
              advancing the field...
            </p>
          </div>
        </div>

        {/* Qualifications */}
        <div className="bg-[#F5EFEB] rounded-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[#567c8d] mt-1 flex-shrink-0" />
                <span className="text-[#567c8d] text-sm sm:text-base">
                  {qualification}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Positions Held */}
        <div className="bg-[#F5EFEB] rounded-lg shadow-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-[#567c8d] ml-4">
              Positions Held
            </h2>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="border-l-4 border-[#567c8d] pl-4 sm:pl-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#567c8d]">
                  {position.title}
                </h3>
                <p className="text-[#567c8d] font-medium text-sm sm:text-base">
                  {position.organization}
                </p>
                <p className="text-[#567c8d] text-xs sm:text-sm mb-2">
                  {position.period}
                </p>
                <p className="text-[#567c8d] text-sm sm:text-base">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliations */}
        <div className="bg-[#F5EFEB] rounded-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Professional Affiliations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#567c8d] mt-1 flex-shrink-0" />
                <span className="text-[#567c8d] text-sm sm:text-base">
                  {affiliation}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-[#F5EFEB] rounded-lg shadow-lg p-6 sm:p-8">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-[#567c8d]/5 rounded-lg p-4 text-center"
              >
                <span className="text-[#567c8d] font-medium text-sm sm:text-base">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
