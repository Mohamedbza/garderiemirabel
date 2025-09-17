import { Mail, Award, Heart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurTeam = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 'director',
      role: 'director',
      experience: '12',
      specialty: 'earlyChildhood',
      image: '/team/david-portrait.png'
    },
    {
      id: 'leadEducator',
      role: 'leadEducator',
      experience: '8',
      specialty: 'creativity',
      image: '/team/julie-portrait.png'
    },
    {
      id: 'infantSpecialist',
      role: 'infantSpecialist',
      experience: '6',
      specialty: 'infantCare',
      image: '/team/marie-claire.png'
    },
    {
      id: 'musicTeacher',
      role: 'musicTeacher',
      experience: '5',
      specialty: 'musicDevelopment',
      image: '/team/parent-woman-professional.jpg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('ourTeam.title')} <span className="text-blue-500">{t('ourTeam.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('ourTeam.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={t(`ourTeam.members.${member.id}.name`)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Team member info */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t(`ourTeam.members.${member.id}.name`)}
              </h3>
              <p className="text-pink-500 font-medium mb-3">
                {t(`ourTeam.members.${member.id}.role`)}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {t(`ourTeam.members.${member.id}.description`)}
              </p>

              {/* Experience and specialty */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center space-x-2">
                  <Award size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-600">
                    {member.experience} {t('ourTeam.yearsExperience')}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {t(`ourTeam.specialties.${member.specialty}`)}
                </div>
              </div>

              {/* Contact button */}
              <button className="w-full bg-white hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">{t('ourTeam.contact')}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Team values */}
        <div className="mt-16 bg-pink-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('ourTeam.values.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Heart size={32} className="mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{t('ourTeam.values.compassion.title')}</h4>
              <p className="text-sm opacity-90">{t('ourTeam.values.compassion.description')}</p>
            </div>
            <div>
              <Award size={32} className="mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{t('ourTeam.values.excellence.title')}</h4>
              <p className="text-sm opacity-90">{t('ourTeam.values.excellence.description')}</p>
            </div>
            <div>
              <Users size={32} className="mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{t('ourTeam.values.community.title')}</h4>
              <p className="text-sm opacity-90">{t('ourTeam.values.community.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;