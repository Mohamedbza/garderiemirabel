import AboutUs from '../sections/AboutUs';
import OurStory from '../sections/OurStory';
import OurTeam from '../sections/OurTeam';
import OurPhilosophy from '../sections/OurPhilosophy';
import FacilityTour from '../sections/FacilityTour';

const About = () => {
  return (
    <div className="min-h-screen bg-white ">
      <AboutUs />
      <OurStory />
      <OurTeam />
      <OurPhilosophy />
      <FacilityTour />
    </div>
  );
};

export default About;